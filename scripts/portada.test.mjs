/* Portada v3, agencia de marketing digital + proyectos de IA (D56): node --test scripts/portada.test.mjs
   - Reglas puras de src/lib/portada.ts: precios por clave, mapa de 6 servicios del ItemList, preguntas, respuesta
     citable y los datos de la v3 (franja, díptico, bento, diseño web, IA).
   - Sobre dist/ (al día; ver scripts/lib/dist-guard.mjs): las 8 secciones en orden, sin precios ni proyectos, los anclas,
     el ItemList, el menú y el pie de la portada, las imágenes de public/images/portada-v3/ y el movimiento diferido.
   Ciclo rápido sin HTML: SOLO_UNIDAD=1 node --test scripts/portada.test.mjs */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { parse } from 'node-html-parser';
import { guardaDist } from './lib/dist-guard.mjs';
import {
  precioDesde, filasMapa, itemListPortada, faqsPortada, respuestaPortada, H1_PORTADA, precioTexto, mapaOpciones, opcionDe,
  DISPLAY_PORTADA, FRANJA_PORTADA, DIPTICO_PORTADA, BENTO_PORTADA, WEB_PORTADA, IA_PORTADA,
} from '../src/lib/portada.ts';

const precios = JSON.parse(readFileSync('src/data/precios.json', 'utf8'));
const formulario = JSON.parse(readFileSync('src/data/formulario.json', 'utf8'));
const DOMINIO = 'https://elementoweb.com';
const cifras = (t) => [...t.matchAll(/\$\s?([\d,]+(?:\.\d+)?)/g)].map((m) => Number(m[1].replace(/,/g, '')));
const sinHtml = (h) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
const textoDe = (n) => n.text.replace(/\s+/g, ' ').trim();
const url = (slug) => `/${slug}/`;

// ---- Unidad ----
test('precioDesde lee por clave confirmada y una clave inexistente rompe el build', () => {
  assert.equal(precioDesde(precios, 'web-landing'), 'desde $550');
  assert.equal(precioDesde(precios, 'web-ecommerce'), 'desde $1,950');
  assert.throws(() => precioDesde(precios, 'no-existe'), /no-existe/);
  assert.throws(() => precioDesde({ confirmados: {}, propuestos: { x: { monto: 1 } } }, 'x'), /x/);
});

test('IA está confirmada en $2,900 y sinPrecio ya no existe (B4)', () => {
  assert.equal(precios.confirmados.ia?.monto, 2900);
  assert.equal('sinPrecio' in precios, false);
});

test('el mapa del ItemList tiene 6 servicios con su URL principal', () => {
  assert.deepEqual(filasMapa(precios).map((f) => f.slug), [
    'diseno-web-panama',
    'servicios/tiendas-online-ecommerce-panama',
    'crecimiento/seo-posicionamiento-web-panama',
    'marketing/google-ads-panama',
    'marketing/whatsapp-marketing-masivo-panama',
    'inteligencia-artificial-para-empresas-panama',
  ]);
});

test('el ItemList referencia por @id el nodo #servicio de cada fila, sin Offer', () => {
  const filas = filasMapa(precios);
  const lista = itemListPortada(DOMINIO, filas);
  assert.equal(lista['@type'], 'ItemList');
  assert.deepEqual(lista.itemListElement.map((e) => e.position), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(lista.itemListElement.map((e) => e.item['@id']), filas.map((f) => `${DOMINIO}/${f.slug}/#servicio`));
  assert.doesNotMatch(JSON.stringify(lista), /Offer/);
});

test('precioTexto: «desde» sale del dato, la unidad pone el sufijo y una clave inexistente rompe el build', () => {
  assert.equal(precioTexto(precios, 'mantenimiento'), 'desde $99/mes');
  assert.equal(precioTexto(precios, 'web-medida', { desde: true }), 'desde $2,900');
  assert.throws(() => precioTexto(precios, 'no-existe'), /no-existe/);
});

test('mapa clave → opción del formulario: cada CTA resuelve su opción y una clave sin opción rompe el build', () => {
  const real = mapaOpciones(['Diseño web / Sitio corporativo', 'Marketing digital / Pauta', 'Automatización / Inteligencia artificial', 'Ayúdame a definir mi proyecto'], formulario.servicios);
  assert.equal(opcionDe(real, 'ia', 'ia'), 'Automatización / Inteligencia artificial');
  assert.equal(opcionDe(real, 'definir', 'hero'), undefined, '«definir» no cambia lo elegido');
  assert.throws(() => opcionDe(real, 'nada', 'ia'), /sección «ia».*clave «nada»/);
});

test('el H1 sigue siendo el de D50 (decisión uc1a de la puerta del 22-oct)', () => {
  assert.equal(H1_PORTADA, 'Agencia de marketing digital e IA en Panamá: web, publicidad, WhatsApp y automatización');
  assert.deepEqual(DISPLAY_PORTADA, ['Marketing que vende.', 'IA que trabaja.']);
});

test('6 o más preguntas, sin cifras «$» (la portada no publica precios)', () => {
  const faqs = faqsPortada();
  assert.ok(faqs.length >= 6, `hay ${faqs.length}`);
  for (const f of faqs) assert.deepEqual(cifras(sinHtml(f.a)), [], f.q);
  const temas = faqs.map((f) => f.q).join(' ');
  for (const t of ['marketing digital', 'agente de IA', 'diseño web', 'API oficial de WhatsApp', 'fuera de Panamá', 'cotiza']) assert.match(temas, new RegExp(t), t);
});

test('respuesta citable de 40 a 60 palabras, con fecha, enlaces a /nosotros/, diseño web y Miami, y sin cifras', () => {
  const r = respuestaPortada();
  const n = sinHtml(r.text).split(' ').length;
  assert.ok(n >= 40 && n <= 60, `tiene ${n} palabras`);
  assert.match(r.fecha, /^\d{4}-\d{2}-\d{2}$/);
  for (const href of ['/nosotros/', '/diseno-web-panama/', '/miami/']) assert.ok(r.text.includes(`href="${href}"`), href);
  assert.match(sinHtml(r.text), /marketing digital/);
  assert.match(sinHtml(r.text), /Tech Provider verificado por Meta/);
  assert.deepEqual(cifras(sinHtml(r.text)), []);
});

test('franja de 6 servicios con su URL, y recorrido de 3 pasos con 3 enlaces cada uno (D61)', () => {
  assert.deepEqual(FRANJA_PORTADA.map((f) => f.label), ['Google Ads', 'Meta Ads', 'SEO y GEO', 'WhatsApp API', 'Agentes IA', 'Diseño web']);
  assert.deepEqual(DIPTICO_PORTADA.map((m) => m.titulo), ['Atraer', 'Atender', 'Automatizar']);
  for (const m of DIPTICO_PORTADA) assert.equal(m.enlaces.length, 3, m.titulo);
});

test('bento de 5 tarjetas, una por servicio, y la de Contenido con IA va a Videos publicitarios', () => {
  assert.deepEqual(BENTO_PORTADA.map((b) => b.id), ['publicidad', 'seo', 'whatsapp', 'agentes', 'contenido']);
  assert.equal(BENTO_PORTADA.find((b) => b.id === 'contenido').slug, 'marketing/videos-publicitarios-panama');
  for (const b of BENTO_PORTADA) assert.ok(b.nota.length > 10, `${b.id} sin nota «Ejemplo»`);
});

test('diseño web: 4 tipos de sitio y 3 capturas reales del portafolio que existen', () => {
  assert.equal(WEB_PORTADA.items.length, 4);
  assert.equal(WEB_PORTADA.capturas.length, 3);
  for (const c of WEB_PORTADA.capturas) for (const w of [480, 800]) assert.ok(existsSync(`public${c.cap}-${w}.webp`), `${c.cap}-${w}.webp`);
  assert.ok(existsSync(`public${WEB_PORTADA.movil.src}`));
});

test('IA: el diagrama tiene 4 pasos y la franja de confianza 3 afirmaciones', () => {
  assert.deepEqual(IA_PORTADA.pasos, ['WhatsApp', 'Agente IA', 'CRM', 'Reporte']);
  assert.equal(IA_PORTADA.confianza.length, 3);
});

// protects=imágenes de la v3 dentro de su peso y con créditos (D45, D56); fails_when=un archivo falta, pesa más que su límite o el JSON público trae prompt o costo; no_claim=la calidad de la imagen
test('imágenes de la portada v3: existen, pesan lo que dice CREDITOS.json y no pasan su límite; el JSON público no trae prompts ni costos', () => {
  const pub = JSON.parse(readFileSync('public/images/portada-v3/CREDITOS.json', 'utf8'));
  assert.ok(pub.imagenes.length >= 6);
  for (const f of pub.imagenes) {
    const ruta = `public/images/portada-v3/${f.archivo}`;
    assert.ok(existsSync(ruta), ruta);
    const bytes = statSync(ruta).size;
    assert.equal(bytes, f.bytes, `${f.archivo}: pesa ${bytes} B y CREDITOS.json dice ${f.bytes} B. Vuelve a codificar con scripts/optimize-images.mjs`);
    assert.ok(bytes <= f.limite_bytes, `${f.archivo}: ${bytes} B pasa el límite de ${f.limite_bytes} B. Vuelve a codificar con scripts/optimize-images.mjs`);
    for (const k of ['prompt', 'costo_usd', 'request_id']) assert.ok(!(k in f), `${f.archivo}: «${k}» va en docs/, no en public/`);
  }
  const priv = JSON.parse(readFileSync('docs/specs/rediseno-elementoweb/creditos-portada-v3.json', 'utf8'));
  const conPrompt = new Set(priv.generaciones.flatMap((g) => (g.prompt && typeof g.costo_usd === 'number' ? g.archivos : [])));
  for (const f of pub.imagenes) assert.ok(conPrompt.has(f.archivo), `${f.archivo} sin prompt y costo en docs/`);
});

// protects=que el movimiento no pese en la carga (D53 se revirtió por esto); fails_when=movimiento.ts importa GSAP de forma estática o usa «scroll» como primera interacción; no_claim=que el efecto se vea bien
test('movimiento.ts pide GSAP solo con import() y nunca con el evento scroll', () => {
  const js = readFileSync('src/scripts/movimiento.ts', 'utf8');
  assert.doesNotMatch(js, /^\s*import\s[^(]*['"]gsap/m, 'import estático de GSAP');
  assert.match(js, /import\(['"]gsap['"]\)/);
  assert.match(js, /import\(['"]gsap\/ScrollTrigger['"]\)/);
  for (const ev of ['wheel', 'touchstart', 'pointerdown', 'keydown']) assert.ok(js.includes(`'${ev}'`), ev);
  assert.doesNotMatch(js, /addEventListener\(\s*['"]scroll['"]/, 'scroll no es una primera interacción');
  assert.match(js, /prefers-reduced-motion/);
  assert.match(js, /data-mov-off|movOff/);
});

// protects=que las clases nuevas no choquen con otra sección (lección de D53); fails_when=una regla .pv3- empieza con otro selector; no_claim=colisiones de otras hojas
test('cada selector de portada.css que usa .pv3- empieza con .pv3- o con main', () => {
  const css = readFileSync('src/styles/portada.css', 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
  const selectores = [...css.matchAll(/([^{}@]+)\{/g)].map((m) => m[1].trim()).filter((s) => s.includes('.pv3-'));
  assert.ok(selectores.length > 20, `hay ${selectores.length} selectores .pv3-`);
  for (const lista of selectores) for (const s of lista.split(',').map((x) => x.trim())) {
    if (/^(from|to|\d+%)$/.test(s)) continue;
    assert.match(s, /^(\.pv3-|main\b|:root\b|html\b)/, `«${s}»`);
  }
});

// ---- Sobre la portada compilada ----
const HOME = 'dist/index.html';
const { ESTRICTO, SOLO_UNIDAD, viejo, conDist } = guardaDist();
const home = () => parse(readFileSync(HOME, 'utf8'));
const seccion = (raiz, id) => raiz.querySelector(`main #${id}`);

test('dist/ existe y está al día con src/, public/, astro.config.mjs y package-lock.json (falla con VERIFY=1 o en CI)', { skip: SOLO_UNIDAD ? 'SOLO_UNIDAD=1' : !ESTRICTO && viejo ? viejo : false }, () => {
  assert.equal(viejo, null, viejo ?? '');
});

test('orden: las 8 secciones de la v3, y nada de la v2', conDist, () => {
  const ids = home().querySelectorAll('main > section').map((s) => s.getAttribute('id'));
  assert.deepEqual(ids, ['inicio', 'soluciones', 'servicios', 'diseno-web', 'ia', 'resumen', 'preguntas', 'hablemos']);
  const raiz = home();
  for (const sel of ['#proyectos', '#industrias', '#precios', '#desarrollo', '#marketing', '.pv2-sec', '.ew-hero']) assert.equal(raiz.querySelectorAll(sel).length, 0, sel);
});

test('sin precios en la portada: ninguna cifra «$» en <main> fuera del selector de presupuesto', conDist, () => {
  const main = home().querySelector('main');
  for (const sel of main.querySelectorAll('select')) sel.remove();
  assert.deepEqual(cifras(main.text), []);
});

test('1. héroe: H1 de D50 en la etiqueta, display de dos líneas, botones y escultura con srcset', conDist, () => {
  const s = seccion(home(), 'inicio');
  const h1 = s.querySelectorAll('h1');
  assert.equal(h1.length, 1);
  assert.equal(textoDe(h1[0]), H1_PORTADA);
  assert.ok(h1[0].classList.contains('pv3-etiqueta'));
  const display = s.querySelector('p.pv3-display');
  assert.equal(textoDe(display), DISPLAY_PORTADA.join(' '));
  const principal = s.querySelector('a[href="#formulario"]');
  assert.match(textoDe(principal), /Empezar proyecto/);
  assert.equal(principal.getAttribute('data-cta-loc'), 'hero');
  assert.equal(principal.getAttribute('data-service'), 'definir');
  assert.match(textoDe(s.querySelector('a[href="#soluciones"]')), /Ver soluciones/);
  const img = s.querySelector('img.pv3-escultura');
  assert.ok(img, 'falta la escultura');
  assert.match(img.getAttribute('srcset'), /escultura-400\.webp 400w.*escultura-800\.webp 800w/);
  assert.equal(img.getAttribute('fetchpriority'), 'high');
  assert.ok(img.getAttribute('width') && img.getAttribute('height') && img.getAttribute('sizes'));
  assert.ok(img.getAttribute('alt').length > 10);
  assert.equal(img.getAttribute('data-mov'), undefined, 'el LCP no se anima');
  assert.equal(display.getAttribute('data-mov'), undefined, 'el LCP no se anima');
});

test('1. héroe: la franja de 6 servicios enlaza cada página', conDist, () => {
  const enlaces = seccion(home(), 'inicio').querySelectorAll('.pv3-franja a');
  assert.deepEqual(enlaces.map((a) => [textoDe(a), a.getAttribute('href')]), FRANJA_PORTADA.map((f) => [f.label, url(f.slug)]));
});

test('2. recorrido: #soluciones con tres pasos, 3 enlaces y una foto cada uno (D61)', conDist, () => {
  const s = seccion(home(), 'soluciones');
  const mitades = s.querySelectorAll('.pv3-mitad');
  assert.equal(mitades.length, 3);
  mitades.forEach((m, i) => {
    assert.match(textoDe(m.querySelector('h3')), new RegExp(DIPTICO_PORTADA[i].titulo));
    assert.deepEqual(m.querySelectorAll('ul a').map((a) => a.getAttribute('href')), DIPTICO_PORTADA[i].enlaces.map((e) => url(e.slug)));
    const img = m.querySelector('img');
    assert.equal(img.getAttribute('loading'), 'lazy');
    assert.ok(img.getAttribute('alt').length > 10);
  });
  assert.ok(mitades[1].classList.contains('pv3-mitad--negra'));
});

test('3. bento: 5 tarjetas con una sola flecha, cada una a su página, y maquetas marcadas «Ejemplo»', conDist, () => {
  const s = seccion(home(), 'servicios');
  const tarjetas = s.querySelectorAll('.pv3-tarjeta');
  assert.deepEqual(tarjetas.map((t) => t.querySelector('a.pv3-tarjeta__ir').getAttribute('href')), BENTO_PORTADA.map((b) => url(b.slug)));
  for (const t of tarjetas) {
    assert.equal(t.querySelectorAll('a').length, 1, 'una sola flecha por tarjeta');
    const m = t.querySelector('.pv3-maqueta');
    assert.ok(m, 'sin maqueta');
    assert.equal(m.getAttribute('aria-hidden'), 'true');
    assert.equal(m.getAttribute('data-nosnippet'), '');
    assert.equal(m.querySelectorAll('a, button, input, [tabindex]').length, 0);
    assert.match(textoDe(t.querySelector('.pv3-nota')), /^Ejemplo · ./);
  }
});

test('4. diseño web: 4 tipos de sitio, 3 capturas reales en marco y el botón a /diseno-web-panama/', conDist, () => {
  const s = seccion(home(), 'diseno-web');
  assert.deepEqual(s.querySelectorAll('ul.pv3-lista li').map(textoDe), WEB_PORTADA.items);
  assert.equal(s.querySelectorAll('.pv3-marco img').length, 3);
  assert.ok(s.querySelector('.pv3-movil img'));
  assert.match(textoDe(s.querySelector('a[href="/diseno-web-panama/"]')), /Ver diseño web/);
});

test('5. IA: bloque negro, diagrama SVG con nombre, «Agendar diagnóstico» a IA y la franja de confianza', conDist, () => {
  const s = seccion(home(), 'ia');
  const svg = s.querySelector('svg[role="img"]');
  assert.ok(svg?.getAttribute('aria-label')?.includes('WhatsApp'), 'el diagrama describe el flujo');
  const cta = s.querySelector('a[href="#formulario"]');
  assert.match(textoDe(cta), /Agendar diagnóstico/);
  assert.equal(cta.getAttribute('data-cta-loc'), 'ia');
  assert.equal(cta.getAttribute('data-service'), 'ia');
  assert.deepEqual(s.querySelectorAll('.pv3-confianza li').map(textoDe), IA_PORTADA.confianza);
});

test('6. resumen: la respuesta citable con su fecha', conDist, () => {
  const s = seccion(home(), 'resumen');
  assert.equal(sinHtml(s.querySelector('.pv3-respuesta').innerHTML), sinHtml(respuestaPortada().text));
  assert.ok(s.querySelector('time[datetime]'));
});

test('7. preguntas: details nativos con el mismo texto que el FAQPage', conDist, () => {
  const raiz = home();
  const detalles = seccion(raiz, 'preguntas').querySelectorAll('details');
  const faqs = faqsPortada();
  assert.equal(detalles.length, faqs.length);
  const grafo = raiz.querySelectorAll('script[type="application/ld+json"]').flatMap((s) => { const j = JSON.parse(s.text); return j['@graph'] ?? [j]; });
  const faqPage = grafo.find((n) => n['@type'] === 'FAQPage');
  assert.deepEqual(faqPage.mainEntity.map((q) => q.name), faqs.map((f) => f.q));
  detalles.forEach((d, i) => assert.equal(textoDe(d.querySelector('summary')), faqs[i].q));
});

test('8. hablemos: el formulario de contacto (ContactForm, no ServiceForm) y la región aria-live', conDist, () => {
  const s = seccion(home(), 'hablemos');
  assert.ok(s.querySelector('#formulario #cform'), 'ContactForm');
  assert.equal(s.querySelectorAll('[data-ew]').length, 0, 'ServiceForm no se activa en la portada');
  assert.ok(s.querySelector('[aria-live="polite"]'));
});

test('(e) cada ancla #formulario apunta a un id que existe una sola vez', conDist, () => {
  const raiz = home();
  assert.ok(raiz.querySelectorAll('a[href="#formulario"]').length >= 3);
  assert.equal(raiz.querySelectorAll('#formulario').length, 1);
});

test('(f) cada @id del ItemList de la portada existe como Service en su página', conDist, () => {
  const grafo = home().querySelectorAll('script[type="application/ld+json"]').flatMap((s) => { const j = JSON.parse(s.text); return j['@graph'] ?? [j]; });
  const lista = grafo.find((n) => n['@type'] === 'ItemList');
  assert.ok(lista, 'falta el ItemList');
  assert.doesNotMatch(JSON.stringify(grafo), /"Offer"/);
  for (const e of lista.itemListElement) {
    const id = e.item['@id'];
    const ruta = id.replace(DOMINIO, 'dist').replace(/#servicio$/, 'index.html');
    assert.ok(existsSync(ruta), `no existe ${ruta}`);
    assert.ok(readFileSync(ruta, 'utf8').includes(`"@id":"${id}"`), `${ruta} no publica ${id}`);
  }
});

// ---- Pie y menú compartidos: valores por defecto en las demás páginas y los de la portada ----
const pagina = (ruta) => parse(readFileSync(ruta, 'utf8'));
const cierreDelPie = (raiz) => ({
  titular: raiz.querySelectorAll('footer h2').some((h) => h.text.includes('¿Listo para una web')),
  boton: Boolean(raiz.querySelector('footer a[href="/contacto/"][data-magnetic]')),
});
const cotizarDelMenu = (raiz) => [raiz.querySelector('#navpill a.cta-pill'), raiz.querySelector('#mnav a.m-cta')];

test('pie y menú por defecto: en /contacto/ el pie trae su bloque de cierre y los dos «Empezar proyecto» van a /contacto/', conDist, () => {
  const raiz = pagina('dist/contacto/index.html');
  assert.deepEqual(cierreDelPie(raiz), { titular: true, boton: true }, 'bloque de cierre del pie en /contacto/');
  for (const a of cotizarDelMenu(raiz)) {
    assert.ok(a, 'falta un «Empezar proyecto» del menú en /contacto/');
    assert.equal(a.getAttribute('href'), '/contacto/');
    assert.equal(a.getAttribute('data-cta-loc'), undefined, 'sin data-cta-loc fuera de la portada');
    assert.equal(a.getAttribute('data-service'), undefined, 'sin data-service fuera de la portada');
  }
});

test('pie y menú en la portada: sin bloque de cierre y los dos «Empezar proyecto» bajan a #formulario (header, definir)', conDist, () => {
  const raiz = home();
  assert.deepEqual(cierreDelPie(raiz), { titular: false, boton: false }, 'el pie de / no repite el pedido después del formulario');
  for (const a of cotizarDelMenu(raiz)) {
    assert.ok(a, 'falta un «Empezar proyecto» del menú en /');
    assert.equal(a.getAttribute('href'), '#formulario');
    assert.equal(a.getAttribute('data-cta-loc'), 'header');
    assert.equal(a.getAttribute('data-service'), 'definir');
  }
});

// ---- Generales ----
test('general: el <body> de la portada tiene 1.400 elementos o menos (umbral de DOM excesivo de Lighthouse)', conDist, () => {
  const n = home().querySelector('body').querySelectorAll('*').length;
  assert.ok(n <= 1400, `la portada tiene ${n} elementos`);
});

test('general: cada CTA nuevo lleva data-cta-loc y data-service, y los que tienen clave dejan elegida una opción del formulario', conDist, () => {
  const raiz = home();
  const opciones = new Set(raiz.querySelectorAll('#cf-servicio option').map((o) => textoDe(o)));
  const ctas = raiz.querySelectorAll('main a[href="#formulario"]');
  assert.ok(ctas.length >= 3);
  for (const a of ctas) {
    assert.ok(a.getAttribute('data-cta-loc') && a.getAttribute('data-service'), a.outerHTML.slice(0, 120));
    const clave = a.getAttribute('data-service');
    if (clave === 'definir') { assert.equal(a.getAttribute('data-opcion'), undefined); continue; }
    assert.ok(opciones.has(a.getAttribute('data-opcion')), `${a.getAttribute('data-cta-loc')}/${clave}: «${a.getAttribute('data-opcion')}» no es una opción del formulario`);
  }
});

test('general: cada enlace interno de la portada lleva a una página que existe', conDist, () => {
  for (const a of home().querySelectorAll('a[href^="/"]')) {
    const href = a.getAttribute('href').split('#')[0];
    if (!href || href.startsWith('//')) continue;
    const ruta = href === '/' ? 'dist/index.html' : `dist${href}${href.endsWith('/') ? 'index.html' : ''}`;
    assert.ok(existsSync(ruta), `${href} no existe en dist/`);
  }
});

test('general: los H2 de la portada no usan las palabras reservadas de la regla 2 de KEYWORDS.md', conDist, () => {
  for (const h of home().querySelectorAll('main h2')) assert.doesNotMatch(textoDe(h), /\bSEO\b|desarrollo web a medida|marketing digital/i, textoDe(h));
});

test('general: las clases pv3- solo viven dentro de <main>', conDist, () => {
  const fuera = home().querySelectorAll('[class*="pv3-"]').filter((e) => !e.closest('main'));
  assert.deepEqual(fuera.map((e) => e.getAttribute('class')), []);
});

test('general: ningún elemento lleva a la vez data-mov="css" y data-mov="gsap", y el LCP no lleva ninguno', conDist, () => {
  for (const e of home().querySelectorAll('[data-mov]')) assert.match(e.getAttribute('data-mov'), /^(css|gsap)$/);
});

// protects=que GSAP no entre al JS inicial de la portada; fails_when=un import estático lo arrastra; no_claim=el tiempo de bloqueo (lo mide qa-movimiento)
test('general: GSAP y ScrollTrigger no están en el JS inicial de la portada', conDist, () => {
  const raiz = home();
  const iniciales = [...raiz.querySelectorAll('script[src]').map((x) => x.getAttribute('src')), ...raiz.querySelectorAll('link[rel="modulepreload"]').map((x) => x.getAttribute('href'))]
    .filter((src) => src?.startsWith('/'));
  const vistos = new Set();
  const pendientes = iniciales.map((s) => join('dist', s));
  while (pendientes.length) {
    const archivo = pendientes.pop();
    if (vistos.has(archivo)) continue;
    vistos.add(archivo);
    const js = readFileSync(archivo, 'utf8');
    assert.doesNotMatch(js, /pinSpacing|_scrollers|GreenSock|gsap\.com/i, `${archivo}: GSAP entra al JS inicial`);
    for (const m of js.matchAll(/(?:^|[;}\s])(?:import|export)\s*(?:[\w*{}\s,$]+from\s*)?["'](\.\/[^"']+\.js)["']/g)) pendientes.push(join(dirname(archivo), m[1]));
  }
});

test('general: la portada no carga la piel grafito, el molde ni los efectos viejos', conDist, () => {
  const html = readFileSync(HOME, 'utf8');
  assert.doesNotMatch(html, /pv2-banda--grafito|--ew-graphite/, 'piel-grafito.css no se carga en /');
  const raiz = home();
  for (const sel of ['.reveal', '.grad-text', '.marquee-track', '.sphere', '.cursor-ring']) assert.equal(raiz.querySelectorAll(sel).length, 0, sel);
  assert.ok(!raiz.querySelectorAll('script[src]').some((s) => /Efectos/.test(s.getAttribute('src'))), 'la portada no baja effects.ts');
  assert.equal(raiz.querySelector('main').getAttribute('data-page-type'), 'home');
});
