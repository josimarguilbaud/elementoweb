/* Pruebas del validador del marcador (D7, D35, D38, D39, D49): node --test scripts/validar-marcador.test.mjs
   Usan HTML real: la compilación de pruebas (npm run build:fixtures → dist-fixture/) renderiza las páginas de
   ejemplo con los bloques de verdad, y las pruebas rompen un punto a la vez sobre esa salida. */
import { test, before } from 'node:test';
import assert from 'node:assert/strict';
import { execSync } from 'node:child_process';
import { existsSync, readFileSync, mkdtempSync, mkdirSync, writeFileSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { analizar, evaluar, validarDist, PUNTOS } from './validar-marcador.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const FIX = join(RAIZ, 'dist-fixture');
const precios = JSON.parse(readFileSync(join(RAIZ, 'src/data/precios.json'), 'utf8'));
const HOY = new Date('2026-10-20T12:00:00Z');

const manifiestoFixture = {
  ordenFases: ['1', '2a'], faseActual: '1', seccionesComerciales: [],
  paginas: [
    { slug: 'qa-fixture/servicio-valido', tipo: 'servicio', fase: '1', precio: 'confirmado' },
    { slug: 'qa-fixture/servicio-propuesto', tipo: 'servicio', fase: '1', precio: 'propuesto' },
    { slug: 'qa-fixture/servicio-sin-prueba', tipo: 'servicio', fase: '1' },
  ],
};

const leer = (slug) => readFileSync(join(FIX, slug, 'index.html'), 'utf8');
const ctxServicio = (slug = 'qa-fixture/servicio-valido', extra = {}) => ({ tipo: 'servicio', tipoPagina: 'servicio-con-precio', hoy: HOY, precios, manifiesto: manifiestoFixture, slug, dist: FIX, ...extra });
const juzgar = (html, extra) => evaluar(analizar(html), ctxServicio('qa-fixture/servicio-valido', extra));
const etiqueta = (id) => PUNTOS.find(([i]) => i === id)[1];

before(() => {
  if (!existsSync(join(FIX, 'qa-fixture/servicio-valido/index.html'))) execSync('npm run build:fixtures', { cwd: RAIZ, stdio: 'ignore' });
});

test('la página de ejemplo válida cumple los 9 puntos sin errores, todos con evidencia (D49)', () => {
  const r = juzgar(leer('qa-fixture/servicio-valido'));
  assert.deepEqual(r.errores, []);
  assert.equal(r.puntos.length, 9);
  assert.equal(r.puntos.filter((p) => p.estado === 'ok').length, 9);
  assert.ok(!r.puntos.some((p) => p.id === 'medicion'), 'la medición ya no es un punto (D49)');
});

test('el comprobante no se pinta: precio y plazo salen arriba, sin medición visible (D49)', () => {
  const html = leer('qa-fixture/servicio-valido');
  assert.doesNotMatch(html, /data-block="receipt"|Comprobante ·|data-score="medicion"|data-blank="medicion"/);
  assert.match(html, /<dl class="ew-hero__recibo">\s*<div data-score="precio"/);
});

test('la salida real emite el contrato data-*: tipo de página, servicio y Offer solo con precio confirmado', () => {
  const v = analizar(leer('qa-fixture/servicio-valido'));
  assert.equal(v.pageType, 'servicio-con-precio');
  assert.equal(v.service, 'pyme');
  assert.deepEqual(v.precio && { e: v.precio.estado, m: v.precio.monto }, { e: 'confirmado', m: 1250 });
  assert.match(v.jsonldTexto, /"@type":"Offer"/);
  const p = analizar(leer('qa-fixture/servicio-propuesto'));
  assert.equal(p.pageType, 'servicio-cotizado');
  assert.equal(p.precio.estado, 'propuesto');
  assert.doesNotMatch(p.jsonldTexto, /"@type":"Offer"/);
});

test('el precio propuesto es válido: la portada dice cotización y no hay Offer (R27)', () => {
  const r = evaluar(analizar(leer('qa-fixture/servicio-propuesto')), ctxServicio('qa-fixture/servicio-propuesto', { tipoPagina: 'servicio-cotizado', precioEsperado: 'propuesto' }));
  assert.deepEqual(r.errores, []);
});

test('sin medición en la página, la prueba en blanco honesto ya no choca con D17 (D49)', () => {
  const r = evaluar(analizar(leer('qa-fixture/servicio-sin-prueba')), ctxServicio('qa-fixture/servicio-sin-prueba', { tipoPagina: 'servicio-cotizado' }));
  assert.ok(!r.errores.some((e) => /en blanco a la vez/.test(e)), r.errores.join(' | '));
  assert.equal(r.puntos.find((p) => p.id === 'prueba').estado, 'blanco');
});

// Cada punto se rompe de forma independiente y debe nombrarse en el error.
const ROMPER = {
  alcance: (h) => h.replace('data-score="alcance"', 'data-x="alcance"'),
  entregables: (h) => h.replace('data-score="entregables"', 'data-x="entregables"'),
  precio: (h) => h.replace('data-price-state="confirmado"', 'data-price-state="otro"'),
  plazo: (h) => h.replace('data-score="plazo"', 'data-x="plazo"'),
  'no-incluye': (h) => h.replace('data-score="no-incluye"', 'data-x="no-incluye"'),
  faq: (h) => h.replace('data-score="faq"', 'data-x="faq"'),
  schema: (h) => h.replaceAll('"@type":"Service"', '"@type":"Servicio"'),
  prueba: (h) => h.replace('data-score="prueba"', 'data-x="prueba"'),
  comparacion: (h) => h.replace('data-score="comparacion"', 'data-x="comparacion"'),
};
for (const [id, romper] of Object.entries(ROMPER)) {
  test(`falla si falta el punto «${etiqueta(id)}»`, () => {
    const base = leer('qa-fixture/servicio-valido');
    const html = romper(base);
    assert.notEqual(html, base, 'la mutación no cambió el HTML: el contrato data-* cambió');
    const r = juzgar(html);
    assert.ok(r.errores.some((e) => e.includes(etiqueta(id)) || (id === 'precio' && /precio/i.test(e))), `${id}: ${r.errores.join(' | ')}`);
  });
}

test('una comparación con menos de 4 criterios no cuenta (D28)', () => {
  const html = leer('qa-fixture/servicio-valido').replace(/<tr><th scope="row">Quién es el dueño[\s\S]*?<\/tr>/, '');
  const r = juzgar(html);
  assert.ok(r.errores.some((e) => e.includes(etiqueta('comparacion'))), r.errores.join(' | '));
});

test('los bloques vacíos no cuentan: ni listas ni preguntas ni criterios', () => {
  const sinAlcance = leer('qa-fixture/servicio-valido').replace(/(<ul data-score="alcance">)[\s\S]*?(<\/ul>)/, '$1$2');
  assert.ok(juzgar(sinAlcance).errores.some((e) => e.includes(etiqueta('alcance'))));
});

test('la fecha inyectable cambia el aviso de antigüedad de la respuesta citable', () => {
  const html = leer('qa-fixture/servicio-valido');
  assert.ok(!juzgar(html).avisos.some((a) => /respuesta citable tiene/.test(a)));
  const tarde = evaluar(analizar(html), ctxServicio('qa-fixture/servicio-valido', { hoy: new Date('2027-06-01T12:00:00Z') }));
  assert.ok(tarde.avisos.some((a) => /respuesta citable tiene \d+ días/.test(a)));
});

test('la respuesta citable debe tener de 40 a 60 palabras y fecha válida', () => {
  const base = leer('qa-fixture/servicio-valido');
  const texto = /<p class="ew-answer[^"]*">([\s\S]*?)<\/p>/.exec(base)[1];
  const con = (t) => base.replace(texto, t);
  assert.ok(juzgar(con('Muy corta.')).errores.some((e) => /entre 40 y 60/.test(e)));
  assert.ok(juzgar(con(Array(61).fill('palabra').join(' '))).errores.some((e) => /entre 40 y 60/.test(e)));
  assert.ok(juzgar(base.replace('data-fecha="2026-10-13"', 'data-fecha="13/10"')).errores.some((e) => /fecha/.test(e)));
  assert.ok(juzgar(base.replace('data-fecha="2026-10-13"', 'data-fecha="2027-01-01"')).errores.some((e) => /posterior a hoy/.test(e)));
});

test('el schema nunca lleva AggregateRating ni Review (R19)', () => {
  const html = leer('qa-fixture/servicio-valido').replace('"@graph":[', '"@graph":[{"@type":"AggregateRating","ratingValue":5},');
  assert.ok(juzgar(html).errores.some((e) => /AggregateRating/.test(e)));
});

test('las afirmaciones bloqueadas en el contenido principal fallan (D11)', () => {
  const html = leer('qa-fixture/servicio-valido').replace('Hasta 6 páginas en total', 'Equipo 100% interno y Meta Verified');
  const r = juzgar(html, { afirmaciones: ['Meta Verified', '100% interno'] });
  assert.equal(r.errores.filter((e) => /afirmación bloqueada/.test(e)).length, 2);
});

test('el precio confirmado debe estar en precios.json y coincidir con lo visible y con el Offer', () => {
  const base = leer('qa-fixture/servicio-valido');
  assert.ok(juzgar(base.replace('data-amount="1250"', 'data-amount="999"')).errores.some((e) => /no está entre los confirmados/.test(e)));
  assert.ok(juzgar(base.replace('"minPrice":1250', '"minPrice":1300')).errores.some((e) => /Offer/.test(e)));
});

test('un Offer con precio no confirmado se rechaza (R27)', () => {
  const html = leer('qa-fixture/servicio-propuesto').replace('"provider":', '"offers":{"@type":"Offer","priceSpecification":{"minPrice":300}},"provider":');
  const r = evaluar(analizar(html), ctxServicio('qa-fixture/servicio-propuesto', { tipoPagina: 'servicio-cotizado' }));
  assert.ok(r.errores.some((e) => /Offer con un precio que no está confirmado/.test(e)), r.errores.join(' | '));
});

test('el schema FAQPage debe repetir las preguntas visibles', () => {
  const html = leer('qa-fixture/servicio-valido').replace('¿Pregunta de ejemplo número 2?', '¿Otra pregunta?');
  assert.ok(juzgar(html).errores.some((e) => /schema|visible/.test(e)));
});

test('la imagen de portada debe declarar dimensiones y pesar 60 KB o menos', () => {
  const base = leer('qa-fixture/servicio-valido');
  const sinDim = base.replace('<main', '<img src="/x.webp" fetchpriority="high"><main');
  assert.ok(juzgar(sinDim).errores.some((e) => /width y height/.test(e)));
  const dir = mkdtempSync(join(tmpdir(), 'portada-'));
  try {
    writeFileSync(join(dir, 'grande.webp'), Buffer.alloc(61 * 1024));
    const html = base.replace('<main', '<img src="/grande.webp" width="1200" height="800" fetchpriority="high"><main');
    const r = evaluar(analizar(html), ctxServicio('qa-fixture/servicio-valido', { dist: dir }));
    assert.ok(r.errores.some((e) => /pesa 61 KB/.test(e)), r.errores.join(' | '));
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// ---- Manifiesto, exclusiones y fases (D5, D35) sobre un dist temporal ----
function distTemporal(paginas) {
  const dir = mkdtempSync(join(tmpdir(), 'marcador-'));
  for (const [slug, html] of Object.entries(paginas)) {
    const d = join(dir, slug);
    mkdirSync(d, { recursive: true });
    writeFileSync(join(d, 'index.html'), html);
  }
  return dir;
}
const conTipo = '<main data-page-type="servicio-con-precio"></main>';
const sinTipo = '<main></main>';
const manifiestoBase = (extra = {}) => ({ ordenFases: ['1', '2a', '2b'], faseActual: '1', seccionesComerciales: ['servicios'], paginas: [{ slug: 'servicios/a', tipo: 'servicio', fase: '2a' }], ...extra });
const validar = (paginas, { manifiesto = manifiestoBase(), exclusiones = [] } = {}) => {
  const dist = distTemporal(paginas);
  try { return validarDist({ dist, manifiesto, exclusiones, precios, hoy: HOY }); } finally { rmSync(dist, { recursive: true, force: true }); }
};

test('manifiesto: la fase 1 no exige ninguna página y una página futura sin data-page-type no falla', () => {
  assert.deepEqual(validar({ 'servicios/a': sinTipo }).errores, []);
});

test('manifiesto: una página cuya fase ya está publicada debe emitir data-page-type', () => {
  const r = validar({ 'servicios/a': sinTipo }, { manifiesto: manifiestoBase({ faseActual: '2a' }) });
  assert.ok(r.errores.some((e) => /ya está publicada y la página no emite data-page-type/.test(e)), r.errores.join(' | '));
});

test('manifiesto: una página que emite data-page-type y no está listada falla', () => {
  const r = validar({ 'servicios/a': sinTipo, 'otra/pagina': conTipo });
  assert.ok(r.errores.some((e) => /otra\/pagina: emite data-page-type y no está en el manifiesto/.test(e)), r.errores.join(' | '));
});

test('manifiesto: un slug de una sección comercial fuera del manifiesto y de las exclusiones falla', () => {
  const r = validar({ 'servicios/a': sinTipo, 'servicios/nueva': sinTipo });
  assert.ok(r.errores.some((e) => /servicios\/nueva: página de una sección comercial/.test(e)), r.errores.join(' | '));
});

test('exclusiones: una página excluida que ya emite data-page-type falla; una sin motivo también (D5)', () => {
  const exc = [{ slug: 'servicios/a', motivo: 'Hecha a mano hasta la fase 4' }];
  assert.deepEqual(validar({ 'servicios/a': sinTipo }, { exclusiones: exc }).errores, []);
  assert.ok(validar({ 'servicios/a': conTipo }, { exclusiones: exc }).errores.some((e) => /ya emite data-page-type/.test(e)));
  assert.ok(validar({ 'servicios/a': sinTipo }, { exclusiones: [{ slug: 'servicios/a', motivo: '' }] }).errores.some((e) => /sin motivo/.test(e)));
});

test('enlazado entrante (D36): una página comercial que nadie enlaza desde su contenido falla; con el enlace pasa', () => {
  const enlace = '<main><a href="/servicios/b/">b</a></main>';
  const m = manifiestoBase({ minEntrantes: 1, paginas: [{ slug: 'servicios/a', tipo: 'servicio', fase: '2a' }, { slug: 'servicios/b', tipo: 'servicio', fase: '2a' }] });
  const sin = validar({ 'servicios/a': sinTipo, 'servicios/b': sinTipo }, { manifiesto: m });
  assert.ok(sin.errores.some((e) => /servicios\/(a|b): solo 0 página\(s\) enlazan/.test(e)), sin.errores.join(' | '));
  const con = validar({ 'servicios/a': enlace, 'servicios/b': '<main><a href="/servicios/a/">a</a></main>' }, { manifiesto: m });
  assert.deepEqual(con.errores, []);
  // La navegación (fuera de <main>) no cuenta como enlazado editorial.
  const nav = validar({ 'servicios/a': '<nav><a href="/servicios/b/">b</a></nav><main></main>', 'servicios/b': '<nav><a href="/servicios/a/">a</a></nav><main></main>' }, { manifiesto: m });
  assert.ok(nav.errores.length >= 2);
});

test('el sitio real: toda página comercial tiene al menos 3 enlaces entrantes desde su contenido (si hay dist)', { skip: !existsSync(join(RAIZ, 'dist/index.html')) }, () => {
  const manifiesto = JSON.parse(readFileSync(join(RAIZ, 'scripts/paginas-comerciales.json'), 'utf8'));
  const { errores } = validarDist({ dist: join(RAIZ, 'dist'), manifiesto, exclusiones: JSON.parse(readFileSync(join(RAIZ, 'scripts/exclusiones-marcador.json'), 'utf8')).exclusiones, precios, hoy: HOY });
  assert.deepEqual(errores, []);
});

test('el manifiesto real y las exclusiones reales son coherentes con la fase 1', () => {
  const manifiesto = JSON.parse(readFileSync(join(RAIZ, 'scripts/paginas-comerciales.json'), 'utf8'));
  const { exclusiones } = JSON.parse(readFileSync(join(RAIZ, 'scripts/exclusiones-marcador.json'), 'utf8'));
  const slugs = manifiesto.paginas.map((p) => p.slug);
  assert.equal(new Set(slugs).size, slugs.length, 'slugs repetidos en el manifiesto');
  assert.equal(manifiesto.paginas.filter((p) => p.tipo === 'servicio').length, 25, '25 páginas de servicio');
  assert.equal(manifiesto.paginas.filter((p) => p.tipo === 'hub').length, 6, '6 hubs');
  for (const e of exclusiones) assert.ok(slugs.includes(e.slug), `${e.slug} excluida y no listada`);
  const formulario = JSON.parse(readFileSync(join(RAIZ, 'src/data/formulario.json'), 'utf8'));
  for (const p of manifiesto.paginas.filter((x) => x.tipo === 'servicio')) assert.ok(p.slug in formulario.paginas, `${p.slug} sin clave de formulario`);
});
