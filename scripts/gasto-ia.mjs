/* Registro de gasto de la tanda de IA creativa (D52.4) en audit/imagenes-ia-2026-10.json. La fila se escribe antes de
   cobrar y cada transición se valida:
     node scripts/gasto-ia.mjs                                   estado de la tanda (antes y después de cada envío)
     node scripts/gasto-ia.mjs reservar <pieza> <modelo> <estimado> [<pieza> <modelo> <estimado> …]
     node scripts/gasto-ia.mjs enviado <id> <request_id>         reservado → pendiente
     node scripts/gasto-ia.mjs confirmar <id> <costo>            pendiente → confirmado (o sobrepaso)
     node scripts/gasto-ia.mjs fallido <id>                      pendiente → fallido, costo 0 (no se cobró)
     node scripts/gasto-ia.mjs borrar <id>                       quita una reserva cuyo envío dio error
     node scripts/gasto-ia.mjs asumido <id>                      reservado sin request_id, 24 h después
     node scripts/gasto-ia.mjs aprobar-sobrepaso <id>            sobrepaso → confirmado, con la nota del dueño en D52
   La reserva usa el máximo facturable del trabajo y el chequeo suma el lote entero más lo ya comprometido: si no cabe en
   el tope de la tanda (o en el del archivo), sale con MKIA-TOPE y no reserva nada. Un costo real que deja la tanda sobre
   su tope queda en `sobrepaso` y bloquea toda reserva nueva. Los totales se suman en centavos. Mientras reescribe el
   registro toma un bloqueo exclusivo (.gstack/tmp/gasto-ia.lock); si ya existe, sale con MKIA-BLOQUEO.
   Sale con 2 si el uso es incorrecto y con 1 si la regla no se cumple. GASTO_IA_ARCHIVO, GASTO_IA_BLOQUEO y
   GASTO_IA_AHORA cambian el archivo, el bloqueo y la hora (para las pruebas de scripts/marketing-ia.test.mjs). */
import { readFileSync, writeFileSync, renameSync, openSync, closeSync, unlinkSync, mkdirSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const TANDA = 'marketing-ia';
const HORAS_ASUMIDO = 24;
export const CAMPOS_FILA = ['id', 'fecha', 'hora', 'modelo', 'costo', 'request_id', 'uso', 'tanda', 'estado'];
const ESTADOS = ['reservado', 'pendiente', 'confirmado', 'fallido', 'asumido', 'sobrepaso'];
// Estados cuyo costo ya es gasto. Las filas viejas, sin estado, son generaciones cobradas.
const GASTADO = new Set([undefined, 'confirmado', 'asumido', 'sobrepaso']);
const COMPROMETIDO = new Set(['reservado', 'pendiente']);
const PROHIBIDO = /https?:\/\/|token=/i;

const centavos = (n) => Math.round(n * 100);
const dolares = (c) => c / 100;
const fmt = (c) => `$${(c / 100).toFixed(2)}`;

function sumas(reg) {
  const filas = reg.generaciones;
  const gastado = filas.filter((g) => GASTADO.has(g.estado)).reduce((s, g) => s + centavos(g.costo), 0);
  const deTanda = (t) => filas.filter((g) => g.tanda === t);
  const tanda = (t) => deTanda(t).filter((g) => GASTADO.has(g.estado)).reduce((s, g) => s + centavos(g.costo), 0);
  const comprometido = (t) => deTanda(t).filter((g) => COMPROMETIDO.has(g.estado)).reduce((s, g) => s + centavos(g.costo), 0);
  const comprometidoTotal = filas.filter((g) => COMPROMETIDO.has(g.estado)).reduce((s, g) => s + centavos(g.costo), 0);
  return { gastado, tanda, comprometido, comprometidoTotal };
}

/* Lo que la prueba de créditos y gasto (AC8) exige del registro: filas conciliadas, campos de la lista, sin URL ni
   tokens, toda fila con request_id, y totales que cuadran en centavos sin pasar sus topes. Devuelve los problemas. */
export function revisarRegistro(reg) {
  const problemas = [];
  for (const [i, g] of reg.generaciones.entries()) {
    const quien = `fila ${i + 1}${g.id ? ` (${g.id})` : ''}`;
    for (const k of Object.keys(g)) if (!CAMPOS_FILA.includes(k)) problemas.push(`${quien}: campo fuera de la lista: ${k}`);
    for (const [k, v] of Object.entries(g)) if (typeof v === 'string' && PROHIBIDO.test(v)) problemas.push(`${quien}: ${k} con https?:// o token=`);
    if (g.estado !== undefined && !ESTADOS.includes(g.estado)) problemas.push(`${quien}: estado desconocido ${g.estado}`);
    if (COMPROMETIDO.has(g.estado)) problemas.push(`${quien}: ${g.estado} sin conciliar`);
    if (g.estado === 'sobrepaso') problemas.push(`${quien}: sobrepaso sin aprobar por el dueño`);
    if (!g.request_id) problemas.push(`${quien}: sin request_id`);
    if (typeof g.costo !== 'number' || !(g.costo >= 0)) problemas.push(`${quien}: costo inválido`);
  }
  if (problemas.length) return problemas;
  const s = sumas(reg);
  if (s.gastado !== centavos(reg.gastado)) problemas.push(`gastado no cuadra: el archivo dice ${reg.gastado} y las filas suman ${dolares(s.gastado)}`);
  if (s.gastado > centavos(reg.tope)) problemas.push(`gastado ${dolares(s.gastado)} pasa el tope del archivo (${reg.tope})`);
  for (const [t, { tope, gastado }] of Object.entries(reg.tandas ?? {})) {
    if (s.tanda(t) !== centavos(gastado)) problemas.push(`tanda ${t}: gastado no cuadra (${gastado} frente a ${dolares(s.tanda(t))})`);
    if (s.tanda(t) > centavos(tope)) problemas.push(`tanda ${t}: gastado ${dolares(s.tanda(t))} pasa su tope (${tope})`);
  }
  return problemas;
}

// Una fila por línea, como el archivo que ya existe.
function serializar(reg) {
  const fila = (g) => `{ ${Object.entries(g).map(([k, v]) => `${JSON.stringify(k)}: ${JSON.stringify(v)}`).join(', ')} }`;
  const tandas = Object.entries(reg.tandas ?? {}).map(([t, v]) => `${JSON.stringify(t)}: ${fila(v)}`).join(', ');
  return [
    '{',
    `  "_nota": ${JSON.stringify(reg._nota)},`,
    `  "tope": ${reg.tope},`,
    `  "gastado": ${reg.gastado},`,
    `  "tandas": { ${tandas} },`,
    '  "generaciones": [',
    reg.generaciones.map((g) => `    ${fila(g)}`).join(',\n'),
    '  ]',
    '}',
    '',
  ].join('\n');
}

class Uso extends Error {}
class Regla extends Error {}
const uso = () => { throw new Uso(); };
const regla = (m) => { throw new Regla(m); };
const monto = (t, minimo) => {
  const n = Number(t);
  return t !== undefined && t !== '' && Number.isFinite(n) && n >= minimo ? centavos(n) : uso();
};

function leerOrden(argv) {
  const [orden, ...a] = argv;
  if (orden === undefined) return { orden: 'estado' };
  if (orden === 'reservar') {
    if (a.length === 0 || a.length % 3 !== 0) uso();
    const lote = [];
    for (let i = 0; i < a.length; i += 3) lote.push({ uso: a[i], modelo: a[i + 1], c: monto(a[i + 2], 0.01) });
    return { orden, lote };
  }
  if (orden === 'enviado') return a.length === 2 ? { orden, id: a[0], requestId: a[1] } : uso();
  if (orden === 'confirmar') return a.length === 2 ? { orden, id: a[0], c: monto(a[1], 0) } : uso();
  if (['fallido', 'borrar', 'asumido', 'aprobar-sobrepaso'].includes(orden)) return a.length === 1 ? { orden, id: a[0] } : uso();
  return uso();
}

function aplicar(reg, o, ahora) {
  reg.tandas ??= {};
  reg.tandas[TANDA] ??= { tope: 15, gastado: 0 };
  const filas = reg.generaciones;
  const buscar = (id) => filas.find((g) => g.id === id) ?? regla(`MKIA-GASTO: no hay una fila ${id}`);
  const exigir = (g, ...desde) => desde.includes(g.estado) || regla(`MKIA-GASTO: ${o.orden} no vale desde «${g.estado}» (${g.id}); vale desde ${desde.join(' o ')}`);
  const s = sumas(reg);
  const topeTanda = centavos(reg.tandas[TANDA].tope);
  const salida = [];

  if (o.orden === 'reservar') {
    const sobrepaso = filas.find((g) => g.tanda === TANDA && g.estado === 'sobrepaso');
    if (sobrepaso) regla(`MKIA-TOPE: la fila ${sobrepaso.id} está en sobrepaso; no se reserva nada hasta que el dueño lo apruebe en D52 (aprobar-sobrepaso ${sobrepaso.id})`);
    const lote = o.lote.reduce((t, p) => t + p.c, 0);
    const usado = s.tanda(TANDA) + s.comprometido(TANDA);
    if (usado + lote > topeTanda) regla(`MKIA-TOPE: el lote cuesta hasta ${fmt(lote)} y la tanda ${TANDA} ya tiene ${fmt(usado)} gastado o reservado de ${fmt(topeTanda)}. Avisa al dueño antes de seguir.`);
    if (s.gastado + s.comprometidoTotal + lote > centavos(reg.tope)) regla(`MKIA-TOPE: el lote pasa el tope del archivo (${fmt(centavos(reg.tope))})`);
    let n = Math.max(0, ...filas.map((g) => Number(/^mkia-(\d+)$/.exec(g.id ?? '')?.[1] ?? -1))) + 1;
    const fecha = new Date(Date.parse(ahora) - 5 * 3600e3).toISOString().slice(0, 10); // hora de Panamá
    for (const p of o.lote) {
      if (PROHIBIDO.test(p.uso) || PROHIBIDO.test(p.modelo)) regla('MKIA-GASTO: la pieza o el modelo traen https?:// o token=');
      const id = `mkia-${n++}`;
      filas.push({ id, fecha, hora: ahora, modelo: p.modelo, costo: dolares(p.c), request_id: null, uso: p.uso, tanda: TANDA, estado: 'reservado' });
      salida.push(`reservado ${id}: ${p.uso}, ${p.modelo}, hasta ${fmt(p.c)}`);
    }
  } else {
    const g = buscar(o.id);
    if (o.orden === 'enviado') {
      exigir(g, 'reservado');
      if (PROHIBIDO.test(o.requestId)) regla('MKIA-GASTO: el request_id trae https?:// o token=; anota solo el id');
      Object.assign(g, { request_id: o.requestId, estado: 'pendiente' });
    } else if (o.orden === 'confirmar') {
      exigir(g, 'pendiente');
      const tandaDespues = s.tanda(TANDA) + (g.tanda === TANDA ? o.c : 0);
      const archivoDespues = s.gastado + o.c;
      g.costo = dolares(o.c);
      g.estado = tandaDespues > topeTanda || archivoDespues > centavos(reg.tope) ? 'sobrepaso' : 'confirmado';
    } else if (o.orden === 'fallido') {
      exigir(g, 'pendiente');
      Object.assign(g, { costo: 0, estado: 'fallido' });
    } else if (o.orden === 'borrar') {
      exigir(g, 'reservado');
      filas.splice(filas.indexOf(g), 1);
    } else if (o.orden === 'asumido') {
      exigir(g, 'reservado');
      const horas = (Date.parse(ahora) - Date.parse(g.hora)) / 3600e3;
      if (!(horas >= HORAS_ASUMIDO)) regla(`MKIA-GASTO: ${g.id} lleva ${horas.toFixed(1)} h reservada; pasa a asumido a las ${HORAS_ASUMIDO} h sin aparecer en search_request_history`);
      Object.assign(g, { request_id: `sin-id:${g.id}`, estado: 'asumido' });
    } else if (o.orden === 'aprobar-sobrepaso') {
      exigir(g, 'sobrepaso');
      g.estado = 'confirmado';
    }
    salida.push(`${g.id}: ${o.orden === 'borrar' ? 'borrada' : g.estado}`);
  }
  const t = sumas(reg);
  reg.gastado = dolares(t.gastado);
  for (const nombre of Object.keys(reg.tandas)) reg.tandas[nombre].gastado = dolares(t.tanda(nombre));
  return salida;
}

function resumen(reg) {
  const s = sumas(reg);
  const tope = reg.tandas?.[TANDA]?.tope ?? 15;
  const abiertas = reg.generaciones.filter((g) => g.tanda === TANDA && (COMPROMETIDO.has(g.estado) || g.estado === 'sobrepaso'));
  return [
    `${TANDA}: gastado ${fmt(s.tanda(TANDA))}, reservado o pendiente ${fmt(s.comprometido(TANDA))}, disponible ${fmt(centavos(tope) - s.tanda(TANDA) - s.comprometido(TANDA))} de ${fmt(centavos(tope))}`,
    `archivo: gastado ${fmt(s.gastado)} de ${fmt(centavos(reg.tope))}`,
    ...abiertas.map((g) => `  ${g.id} ${g.estado}: ${g.uso} (${g.modelo}, ${fmt(centavos(g.costo))}${g.request_id ? `, ${g.request_id}` : ''})`),
  ].join('\n');
}

function main() {
  const archivo = process.env.GASTO_IA_ARCHIVO ?? join(RAIZ, 'audit/imagenes-ia-2026-10.json');
  const bloqueo = process.env.GASTO_IA_BLOQUEO ?? join(RAIZ, '.gstack/tmp/gasto-ia.lock');
  const ahora = process.env.GASTO_IA_AHORA ?? new Date().toISOString();
  let o;
  try {
    o = leerOrden(process.argv.slice(2));
  } catch (e) {
    if (!(e instanceof Uso)) throw e;
    console.error('MKIA-GASTO: uso: node scripts/gasto-ia.mjs [reservar <pieza> <modelo> <estimado> … | enviado <id> <request_id> | confirmar <id> <costo> | fallido <id> | borrar <id> | asumido <id> | aprobar-sobrepaso <id>]');
    return 2;
  }
  if (o.orden === 'estado') {
    console.log(resumen(JSON.parse(readFileSync(archivo, 'utf8'))));
    return 0;
  }
  mkdirSync(dirname(bloqueo), { recursive: true });
  let fd;
  try {
    fd = openSync(bloqueo, 'wx');
  } catch (e) {
    if (e.code !== 'EEXIST') throw e;
    console.error(`MKIA-BLOQUEO: otra sesión está escribiendo el registro (${bloqueo}). Espera a que termine; si no hay otra, borra ese archivo.`);
    return 1;
  }
  try {
    const reg = JSON.parse(readFileSync(archivo, 'utf8'));
    let salida;
    try {
      salida = aplicar(reg, o, ahora);
    } catch (e) {
      if (!(e instanceof Regla)) throw e;
      console.error(e.message);
      return 1;
    }
    writeFileSync(`${archivo}.tmp`, serializar(reg));
    renameSync(`${archivo}.tmp`, archivo);
    console.log(salida.join('\n'));
    console.log(resumen(reg));
    const sobrepaso = reg.generaciones.find((g) => g.id === o.id && g.estado === 'sobrepaso');
    if (sobrepaso) {
      console.error(`MKIA-TOPE: el costo real de ${sobrepaso.id} deja la tanda en sobrepaso (${fmt(centavos(reg.tandas[TANDA].gastado))} de ${fmt(centavos(reg.tandas[TANDA].tope))}). No se reserva nada más hasta que el dueño lo apruebe en D52.`);
      return 1;
    }
    return 0;
  } finally {
    closeSync(fd);
    unlinkSync(bloqueo);
  }
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) process.exitCode = main();
