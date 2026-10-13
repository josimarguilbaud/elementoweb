/* Validador del marcador de 10 puntos (D7, D17, D35, D39). Lee dist/ y no importa TypeScript.
     node scripts/validar-marcador.mjs                  valida dist/ con el manifiesto de scripts/
     node scripts/validar-marcador.mjs --dist dist-fixture --manifiesto <archivo.json> --hoy 2026-10-13
   Sale con código 1 si hay errores; los avisos no fallan. Las reglas están en
   docs/specs/rediseno-elementoweb/SCORECARD.md. */
import { readFileSync, readdirSync, statSync, existsSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'node-html-parser';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const leerJson = (p) => JSON.parse(readFileSync(p, 'utf8'));
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const DIA = 86_400_000;

export const PUNTOS = [
  ['alcance', 'Alcance'], ['entregables', 'Entregables'], ['precio', 'Precio de partida'], ['plazo', 'Plazo'],
  ['no-incluye', 'Qué no incluye'], ['faq', 'Preguntas frecuentes'], ['schema', 'Schema Service y FAQPage'],
  ['medicion', 'Medición con fecha'], ['prueba', 'Prueba de proyecto'], ['comparacion', 'Comparación verificable'],
];

const txt = (n) => (n ? n.text.replace(/\s+/g, ' ').trim() : '');
const palabras = (t) => t.split(/\s+/).filter(Boolean).length;
const dias = (iso, hoy) => Math.floor((hoy.getTime() - new Date(`${iso}T12:00:00Z`).getTime()) / DIA);
const hrefsInternos = (nodo) => [...new Set(nodo.querySelectorAll('a[href]').map((a) => a.getAttribute('href')).filter((h) => h && h.startsWith('/') && !h.startsWith('//')).map((h) => h.split('#')[0].split('?')[0]))];
const slugDeHref = (h) => h.replace(/^\/|\/$/g, '');

/** Extrae del HTML lo que el marcador mide. No juzga: solo lee el contrato data-*. */
export function analizar(html) {
  const raiz = parse(html, { blockTextElements: { script: true, style: true, pre: true } });
  const main = raiz.querySelector('main');
  const q = (sel) => (main ? main.querySelectorAll(sel) : []);
  const cuenta = (sel) => q(sel).reduce((n, ul) => n + ul.querySelectorAll('li').length, 0);

  const jsonld = [];
  let jsonldInvalido = false;
  for (const s of raiz.querySelectorAll('script[type="application/ld+json"]')) {
    try { const j = JSON.parse(s.rawText); jsonld.push(...(j['@graph'] ?? [j])); } catch { jsonldInvalido = true; }
  }

  const precioEl = q('[data-score="precio"]')[0];
  const medEl = q('[data-score="medicion"]')[0];
  const resp = q('[data-block="answer"]')[0];
  const respTexto = resp ? txt(resp.querySelector('.ew-answer') ?? resp) : '';

  return {
    pageType: main?.getAttribute('data-page-type') ?? null,
    service: main?.getAttribute('data-service') ?? null,
    respuesta: resp ? { texto: respTexto, palabras: palabras(respTexto), fecha: resp.getAttribute('data-fecha') ?? '' } : null,
    alcance: cuenta('[data-score="alcance"]'),
    entregables: cuenta('[data-score="entregables"]'),
    noIncluye: cuenta('[data-score="no-incluye"]'),
    precio: precioEl ? { estado: precioEl.getAttribute('data-price-state'), monto: Number(precioEl.getAttribute('data-amount')) || null, texto: txt(precioEl) } : null,
    plazo: txt(q('[data-score="plazo"]')[0]),
    faq: { bloque: q('[data-score="faq"]').length > 0, visibles: q('[data-score="faq"] details').length, preguntas: q('[data-faq-q]').map(txt), respuestas: q('[data-faq-a]').map(txt) },
    medicion: medEl ? { fecha: medEl.getAttribute('data-fecha') ?? '', metodo: medEl.getAttribute('data-metodo') ?? '' } : q('[data-blank="medicion"]').length ? 'blanco' : null,
    prueba: q('[data-score="prueba"]').length ? 'ok' : q('[data-blank="prueba"]').length ? 'blanco' : null,
    comparacion: q('[data-score="comparacion"] tbody tr').length,
    textoMain: main ? txt(main) : '',
    hrefs: main ? hrefsInternos(main) : [],
    portada: raiz.querySelectorAll('img[fetchpriority="high"]').map((i) => ({ src: i.getAttribute('src') ?? '', width: i.getAttribute('width'), height: i.getAttribute('height') })),
    jsonld,
    jsonldInvalido,
    jsonldTexto: JSON.stringify(jsonld),
  };
}

const norm = (s) => s.replace(/\s+/g, ' ').trim();
const stripHtml = (s) => norm(String(s).replace(/<[^>]+>/g, ''));

/** Juzga una página ya analizada. Devuelve los puntos (ok, blanco o falta), errores y avisos. */
export function evaluar(a, ctx) {
  const { tipo, hoy, precios, afirmaciones = [], manifiesto, slug, dist } = ctx;
  const errores = [];
  const avisos = [];
  const err = (m) => errores.push(m);
  const aviso = (m) => avisos.push(m);
  const puntos = [];
  const punto = (id, estado, detalle = '') => puntos.push({ id, estado, detalle });
  const esServicio = tipo === 'servicio';
  const montosConfirmados = new Set(Object.values(precios.confirmados).map((p) => p.monto));

  // Respuesta citable: 40 a 60 palabras con fecha (servicios, pilar y home).
  if (esServicio || tipo === 'pilar' || tipo === 'home') {
    if (!a.respuesta) err('falta la respuesta citable (bloque answer)');
    else {
      if (a.respuesta.palabras < 40 || a.respuesta.palabras > 60) err(`la respuesta citable tiene ${a.respuesta.palabras} palabras; debe tener entre 40 y 60`);
      if (!ISO.test(a.respuesta.fecha)) err('la respuesta citable no tiene fecha AAAA-MM-DD');
      else {
        const d = dias(a.respuesta.fecha, hoy);
        if (d < 0) err(`la fecha de la respuesta (${a.respuesta.fecha}) es posterior a hoy`);
        else if (d > 180) aviso(`la respuesta citable tiene ${d} días: conviene revisarla (aviso a partir de 180)`);
      }
    }
  }

  // Preguntas frecuentes visibles y su schema.
  const faqMin = tipo === 'pilar' ? 8 : 6;
  const faqNodo = a.jsonld.find((n) => n['@type'] === 'FAQPage');
  let faqCoincide = true;
  if (a.faq.visibles > 0 || faqNodo) {
    const ld = (faqNodo?.mainEntity ?? []);
    if (ld.length !== a.faq.preguntas.length) { faqCoincide = false; err(`las preguntas del schema FAQPage (${ld.length}) no coinciden con las visibles (${a.faq.preguntas.length})`); }
    else ld.forEach((e, i) => {
      if (norm(e.name) !== a.faq.preguntas[i]) { faqCoincide = false; err(`pregunta ${i + 1} del schema distinta de la visible`); }
      if (norm(e.acceptedAnswer?.text ?? '') !== a.faq.respuestas[i]) { faqCoincide = false; err(`respuesta ${i + 1} del schema distinta de la visible`); }
    });
  }

  // Schema: nunca AggregateRating ni Review; JSON-LD legible.
  if (a.jsonldInvalido) err('hay un bloque JSON-LD que no se puede leer');
  if (/"@type":"(AggregateRating|Review)"/.test(a.jsonldTexto)) err('el schema contiene AggregateRating o Review (prohibido, R19)');
  const servicioNodo = a.jsonld.find((n) => n['@type'] === 'Service');
  const hayOffer = /"@type":"Offer"/.test(a.jsonldTexto);

  // Afirmaciones sin verificar en el contenido principal.
  for (const f of afirmaciones) if (a.textoMain.toLowerCase().includes(f.toLowerCase())) err(`el contenido usa una afirmación bloqueada: «${f}»`);

  // Imagen de portada: dimensiones declaradas y 60 KB o menos si se puede pesar.
  if (a.portada.length) {
    for (const img of a.portada) {
      if (!Number(img.width) || !Number(img.height)) err(`la imagen de portada ${img.src} no declara width y height`);
      if (img.src.startsWith('/') && dist) {
        const f = join(dist, img.src.replace(/^\//, ''));
        if (existsSync(f) && statSync(f).size > 60 * 1024) err(`la imagen de portada ${img.src} pesa ${Math.round(statSync(f).size / 1024)} KB; el tope es 60 KB`);
      }
    }
  } else if (esServicio) aviso('sin imagen de portada con fetchpriority="high"');

  if (!esServicio) {
    // Reglas reducidas (home, pilar, hub, precios): schema legible, FAQ cuando existe y enlaces.
    if ((tipo === 'pilar' || tipo === 'home') && a.faq.visibles < faqMin) err(`tiene ${a.faq.visibles} preguntas frecuentes; la regla pide ${faqMin} o más`);
    const aManifiesto = a.hrefs.filter((h) => manifiesto.paginas.some((p) => p.slug === slugDeHref(h) && p.slug !== slug));
    if (aManifiesto.length < 3) err(`enlaza a ${aManifiesto.length} páginas comerciales; la regla pide 3 o más`);
    return { puntos, errores, avisos };
  }

  // 1, 2 y 5: alcance, entregables y qué no incluye.
  punto('alcance', a.alcance > 0 ? 'ok' : 'falta', `${a.alcance} elementos`);
  punto('entregables', a.entregables > 0 ? 'ok' : 'falta', `${a.entregables} elementos`);
  punto('no-incluye', a.noIncluye > 0 ? 'ok' : 'falta', `${a.noIncluye} elementos`);

  // 3: precio y su estado, contra el tipo de página y contra precios.json.
  if (!a.precio || !['confirmado', 'propuesto', 'cotizado'].includes(a.precio.estado)) punto('precio', 'falta', 'sin data-price-state válido');
  else {
    punto('precio', 'ok', a.precio.estado);
    const confirmado = a.precio.estado === 'confirmado';
    if (ctx.tipoPagina === 'servicio-con-precio' && !confirmado) err(`es servicio-con-precio pero el precio está «${a.precio.estado}»`);
    if (ctx.tipoPagina === 'servicio-cotizado' && confirmado) err('es servicio-cotizado pero el precio está «confirmado»');
    if (ctx.precioEsperado && ctx.precioEsperado !== a.precio.estado) err(`el manifiesto espera precio «${ctx.precioEsperado}» y la página dice «${a.precio.estado}»`);
    if (confirmado) {
      if (!a.precio.monto) err('precio confirmado sin data-amount');
      else {
        if (!montosConfirmados.has(a.precio.monto)) err(`el precio $${a.precio.monto} no está entre los confirmados de src/data/precios.json`);
        if (!a.precio.texto.includes('$' + a.precio.monto.toLocaleString('en-US'))) err(`el precio visible («${a.precio.texto}») no coincide con data-amount ${a.precio.monto}`);
        const minOffer = servicioNodo?.offers?.priceSpecification?.minPrice;
        if (!hayOffer || minOffer !== a.precio.monto) err(`falta el Offer del schema o su precio (${minOffer ?? 'ninguno'}) no coincide con ${a.precio.monto}`);
      }
    } else if (hayOffer) err('el schema emite Offer con un precio que no está confirmado (R27)');
  }

  // 4: plazo.
  punto('plazo', a.plazo ? 'ok' : 'falta', a.plazo);

  // 6: preguntas frecuentes.
  punto('faq', a.faq.visibles >= faqMin && faqCoincide ? 'ok' : 'falta', `${a.faq.visibles} visibles (mínimo ${faqMin})`);

  // 7: schema Service y FAQPage.
  const schemaOk = !!servicioNodo && !!faqNodo && !a.jsonldInvalido;
  punto('schema', schemaOk ? 'ok' : 'falta', `${servicioNodo ? 'Service' : 'sin Service'}, ${faqNodo ? 'FAQPage' : 'sin FAQPage'}`);

  // 8: medición con fecha (el blanco honesto cumple).
  if (a.medicion === 'blanco') punto('medicion', 'blanco', 'sin medir');
  else if (!a.medicion) punto('medicion', 'falta', 'ni medición ni blanco honesto');
  else {
    if (!ISO.test(a.medicion.fecha) || !a.medicion.metodo) { err('la medición no declara fecha AAAA-MM-DD y método'); punto('medicion', 'falta', 'incompleta'); }
    else {
      punto('medicion', 'ok', `${a.medicion.fecha}, ${a.medicion.metodo}`);
      const d = dias(a.medicion.fecha, hoy);
      if (d < 0) err(`la fecha de la medición (${a.medicion.fecha}) es posterior a hoy`);
      else if (d > 45) aviso(`la medición tiene ${d} días; se renueva con scripts/medir.mjs`);
    }
  }

  // 9: prueba de proyecto (el blanco honesto cumple).
  punto('prueba', a.prueba === 'ok' ? 'ok' : a.prueba === 'blanco' ? 'blanco' : 'falta', a.prueba ?? 'sin prueba ni blanco honesto');

  // D17: la medición y la prueba no pueden estar en blanco a la vez.
  if (a.medicion === 'blanco' && a.prueba === 'blanco') err('la medición y la prueba de proyecto están en blanco a la vez (D17)');

  // 10: comparación con al menos 4 criterios (D28).
  punto('comparacion', a.comparacion >= 4 ? 'ok' : 'falta', `${a.comparacion} criterios (mínimo 4)`);

  // Enlazado interno del contenido (S3, R22): home, hub y 3 o más servicios.
  const hub = slug.split('/')[0];
  if (!a.hrefs.includes('/')) aviso('el contenido no enlaza a la home');
  if (slug.includes('/') && !a.hrefs.includes(`/${hub}/`)) aviso(`el contenido no enlaza a su hub /${hub}/`);
  const relacionados = a.hrefs.filter((h) => manifiesto.paginas.some((p) => p.tipo === 'servicio' && p.slug === slugDeHref(h) && p.slug !== slug));
  if (relacionados.length < 3) aviso(`enlaza a ${relacionados.length} servicios relacionados; la regla pide 3 o más`);

  for (const p of puntos) if (p.estado === 'falta') err(`punto «${PUNTOS.find(([id]) => id === p.id)?.[1]}» sin evidencia: ${p.detalle}`);
  return { puntos, errores, avisos };
}

const recorrer = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? recorrer(p) : [p]; });
const slugDe = (dist, f) => relative(dist, f).replaceAll('\\', '/').replace(/index\.html$/, '').replace(/\/$/, '');

/** Enlaces entrantes del CONTENIDO (<main>): cuántas páginas distintas enlazan a cada slug. La navegación y el pie
 *  no cuentan, porque están en todas las páginas y no dicen nada del enlazado editorial (D36). */
export function enlacesEntrantes(dist) {
  const entrantes = new Map();
  for (const f of recorrer(dist).filter((x) => x.endsWith('.html'))) {
    const origen = slugDe(dist, f);
    if (/^(demo|propuestas|presentaciones|hackathon|qa-fixture)(\/|$)/.test(origen)) continue;
    const main = parse(readFileSync(f, 'utf8')).querySelector('main');
    if (!main) continue;
    for (const h of hrefsInternos(main)) {
      const s = slugDeHref(h);
      if (s !== origen) entrantes.set(s, (entrantes.get(s) ?? 0) + 1);
    }
  }
  return entrantes;
}

/** Valida todo dist/ contra el manifiesto. `hoy` y las listas se inyectan en las pruebas. */
export function validarDist({ dist = join(RAIZ, 'dist'), manifiesto, exclusiones = [], precios, afirmaciones = [], hoy = new Date() } = {}) {
  const errores = [];
  const avisos = [];
  const resultados = [];
  const orden = manifiesto.ordenFases;
  const exigida = (fase) => orden.indexOf(fase) <= orden.indexOf(manifiesto.faseActual);
  const porSlug = new Map(manifiesto.paginas.map((p) => [p.slug, p]));
  const excluidas = new Map(exclusiones.map((e) => [e.slug, e]));
  const secciones = new Set(manifiesto.seccionesComerciales ?? []);

  for (const e of exclusiones) if (!e.motivo || e.motivo.trim().length < 10) errores.push(`exclusión «${e.slug}» sin motivo escrito`);

  const html = recorrer(dist).filter((f) => f.endsWith('.html'));
  const emiten = new Map(); // slug -> ruta del archivo, para las páginas que emiten data-page-type
  for (const f of html) {
    const slug = slugDe(dist, f);
    const crudo = readFileSync(f, 'utf8');
    if (/data-page-type="/.test(crudo)) emiten.set(slug, f);
    const raiz = slug.split('/')[0];
    if (secciones.has(raiz) && !porSlug.has(slug) && !excluidas.has(slug)) errores.push(`${slug || '/'}: página de una sección comercial que no está en el manifiesto ni en las exclusiones`);
  }

  for (const [slug, f] of emiten) {
    if (excluidas.has(slug)) errores.push(`${slug}: está excluida del marcador y ya emite data-page-type; quítala de scripts/exclusiones-marcador.json`);
    else if (!porSlug.has(slug)) errores.push(`${slug}: emite data-page-type y no está en el manifiesto de páginas comerciales`);
  }

  for (const p of manifiesto.paginas) {
    if (excluidas.has(p.slug)) continue;
    const f = emiten.get(p.slug);
    if (!f) {
      if (exigida(p.fase)) errores.push(`${p.slug || '/'}: la fase ${p.fase} ya está publicada y la página no emite data-page-type`);
      continue;
    }
    const a = analizar(readFileSync(f, 'utf8'));
    const tipoPagina = a.pageType;
    const claseEsperada = { servicio: ['servicio-con-precio', 'servicio-cotizado'], pilar: ['pilar'], hub: ['hub'], precios: ['precios'], home: ['home'] }[p.tipo] ?? [];
    const r = { slug: p.slug, tipo: p.tipo, pageType: tipoPagina, puntos: [], errores: [], avisos: [] };
    if (!claseEsperada.includes(tipoPagina)) r.errores.push(`data-page-type «${tipoPagina}» no corresponde al tipo «${p.tipo}» del manifiesto`);
    const ev = evaluar(a, { tipo: p.tipo, tipoPagina, hoy, precios, afirmaciones, manifiesto, slug: p.slug, dist, precioEsperado: p.precio });
    r.puntos = ev.puntos; r.errores.push(...ev.errores); r.avisos.push(...ev.avisos);
    resultados.push(r);
    for (const m of r.errores) errores.push(`${p.slug || '/'}: ${m}`);
    for (const m of r.avisos) avisos.push(`${p.slug || '/'}: ${m}`);
  }

  // D36: enlazado entrante mínimo. Mover una sección fuera de una página puede dejar a otra sin enlaces desde el
  // contenido, y `check-links` solo detecta enlaces rotos, no enlaces perdidos.
  if (manifiesto.minEntrantes) {
    const entrantes = enlacesEntrantes(dist);
    const existentes = new Set(html.map((f) => slugDe(dist, f)));
    for (const p of manifiesto.paginas) {
      const n = entrantes.get(p.slug) ?? 0;
      if (existentes.has(p.slug) && n < manifiesto.minEntrantes) errores.push(`${p.slug || '/'}: solo ${n} página(s) enlazan a esta desde su contenido; la regla pide ${manifiesto.minEntrantes} o más (D36)`);
    }
  }
  return { resultados, errores, avisos };
}

function opcion(args, nombre) { const i = args.indexOf(nombre); return i >= 0 ? args[i + 1] : null; }

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  const dist = join(RAIZ, opcion(args, '--dist') ?? 'dist');
  const manifiesto = leerJson(opcion(args, '--manifiesto') ? join(RAIZ, opcion(args, '--manifiesto')) : join(RAIZ, 'scripts/paginas-comerciales.json'));
  const exclusiones = leerJson(join(RAIZ, 'scripts/exclusiones-marcador.json')).exclusiones;
  const precios = leerJson(join(RAIZ, 'src/data/precios.json'));
  const afirmaciones = leerJson(join(RAIZ, 'scripts/afirmaciones-bloqueadas.json')).afirmaciones;
  if (args.includes('--entrantes')) {
    const e = enlacesEntrantes(dist);
    for (const p of [...manifiesto.paginas].sort((a, b) => (e.get(a.slug) ?? 0) - (e.get(b.slug) ?? 0))) console.log(String(e.get(p.slug) ?? 0).padStart(4), p.slug || '/');
    process.exit(0);
  }
  const hoyTxt = opcion(args, '--hoy') ?? process.env.VALIDAR_HOY;
  const hoy = hoyTxt ? new Date(`${hoyTxt}T12:00:00Z`) : new Date();
  const { resultados, errores, avisos } = validarDist({ dist, manifiesto, exclusiones, precios, afirmaciones, hoy });
  for (const r of resultados) {
    const ok = r.puntos.filter((p) => p.estado === 'ok').length;
    const bl = r.puntos.filter((p) => p.estado === 'blanco').length;
    console.log(`${r.slug || '/'}  [${r.pageType}]  ${r.puntos.length ? `${ok} con evidencia, ${bl} en blanco honesto, ${r.puntos.length - ok - bl} sin evidencia` : 'reglas reducidas'}`);
  }
  console.log(`\nMarcador: ${resultados.length} página(s) validada(s) (fase actual ${manifiesto.faseActual}).`);
  for (const m of avisos) console.log(`AVISO  ${m}`);
  for (const m of errores) console.error(`ERROR  ${m}`);
  if (errores.length) { console.error(`\n${errores.length} error(es) en el marcador.`); process.exit(1); }
  console.log('Marcador en verde.');
}
