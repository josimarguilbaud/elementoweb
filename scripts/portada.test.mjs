/* Portada de agencia, tanda B (D50): node --test scripts/portada.test.mjs
   - Reglas puras de src/lib/portada.ts: precios leídos por clave, mapa de 6 filas, riel sin cifras, ItemList por @id,
     preguntas y respuesta citable.
   - Sobre dist/ (si existe): (b) toda cifra «$N» del <main> de / está confirmada; (e) los anclas #formulario apuntan
     a un id que existe; (f) cada @id del ItemList existe como Service en su página; la portada no se anima. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { parse } from 'node-html-parser';
import { precioDesde, filasMapa, itemListPortada, faqsPortada, respuestaPortada, H1_PORTADA } from '../src/lib/portada.ts';

const precios = JSON.parse(readFileSync('src/data/precios.json', 'utf8'));
const DOMINIO = 'https://elementoweb.com';
const montos = new Set(Object.values(precios.confirmados).map((p) => p.monto));
const cifras = (t) => [...t.matchAll(/\$\s?([\d,]+(?:\.\d+)?)/g)].map((m) => Number(m[1].replace(/,/g, '')));
const sinHtml = (h) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();

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

test('el mapa tiene 6 filas con su URL principal y precio solo donde está confirmado', () => {
  const filas = filasMapa(precios);
  assert.deepEqual(filas.map((f) => f.slug), [
    'diseno-web-panama',
    'servicios/tiendas-online-ecommerce-panama',
    'crecimiento/seo-posicionamiento-web-panama',
    'marketing/google-ads-panama',
    'marketing/whatsapp-marketing-masivo-panama',
    'inteligencia-artificial-para-empresas-panama',
  ]);
  assert.equal(new Set(filas.map((f) => f.id)).size, 6);
  assert.deepEqual(filas.map((f) => f.precio), ['desde $550', 'desde $1,950', null, null, null, 'desde $2,900']);
  const diseno = filas[0].secundarios.map((s) => s.slug);
  assert.ok(diseno.includes('casos-de-exito') && diseno.includes('servicios/redisenio-web-panama'));
});

test('el enlace de cada fila respeta los nombres propios (SEO, IA, Google, Meta, WhatsApp)', () => {
  assert.deepEqual(filasMapa(precios).map((f) => f.ir), [
    'Ver diseño web', 'Ver tiendas online', 'Ver SEO y SEO local', 'Ver publicidad en Google y Meta', 'Ver WhatsApp marketing', 'Ver IA y automatización',
  ]);
});

test('el riel usa los nombres del mapa, sin cifras (D20, D26)', () => {
  for (const f of filasMapa(precios)) assert.doesNotMatch(f.nombre, /[\d$]/, f.nombre);
});

test('el ItemList referencia por @id el nodo #servicio de cada fila, sin Offer', () => {
  const filas = filasMapa(precios);
  const lista = itemListPortada(DOMINIO, filas);
  assert.equal(lista['@type'], 'ItemList');
  assert.deepEqual(lista.itemListElement.map((e) => e.position), [1, 2, 3, 4, 5, 6]);
  assert.deepEqual(lista.itemListElement.map((e) => e.item['@id']), filas.map((f) => `${DOMINIO}/${f.slug}/#servicio`));
  assert.doesNotMatch(JSON.stringify(lista), /Offer/);
});

test('6 o más preguntas de agencia, con cifras solo confirmadas', () => {
  const faqs = faqsPortada(precios);
  assert.ok(faqs.length >= 6, `hay ${faqs.length}`);
  for (const f of faqs) for (const n of cifras(sinHtml(f.a))) assert.ok(montos.has(n), `«$${n}» no está confirmado: ${f.q}`);
});

test('respuesta citable de 40 a 60 palabras, con fecha y enlaces a /nosotros/, Panamá y Miami', () => {
  const r = respuestaPortada(precios);
  const n = sinHtml(r.text).split(' ').length;
  assert.ok(n >= 40 && n <= 60, `tiene ${n} palabras`);
  assert.match(r.fecha, /^\d{4}-\d{2}-\d{2}$/);
  for (const href of ['/nosotros/', '/diseno-web-panama/', '/miami/']) assert.ok(r.text.includes(`href="${href}"`), href);
  assert.match(sinHtml(r.text), /Tech Provider verificado por Meta/);
});

test('el H1 es el elegido tras S5 (D50)', () => {
  assert.equal(H1_PORTADA, 'Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp');
});

// ---- Sobre la portada compilada ----
const HOME = 'dist/index.html';
const conDist = { skip: !existsSync(HOME) && 'sin dist/: corre npm run build' };
const home = () => parse(readFileSync(HOME, 'utf8'));

test('(b) toda cifra «$N» del contenido de la portada está en confirmados', conDist, () => {
  const main = home().querySelector('main');
  // Las opciones del selector de presupuesto del formulario son rangos que elige el visitante, no precios publicados.
  for (const sel of main.querySelectorAll('select')) sel.remove();
  for (const n of cifras(main.text)) assert.ok(montos.has(n), `«${n}» en / no está confirmado`);
});

test('(e) cada ancla #formulario de la portada apunta a un id que existe una sola vez', conDist, () => {
  const raiz = home();
  const anclas = raiz.querySelectorAll('a[href="#formulario"]');
  assert.ok(anclas.length >= 3, `hay ${anclas.length} anclas; el héroe, la prueba y el proceso llevan una`);
  assert.equal(raiz.querySelectorAll('#formulario').length, 1);
});

test('(f) cada @id del ItemList de la portada existe como Service en su página', conDist, () => {
  const grafo = home().querySelectorAll('script[type="application/ld+json"]').flatMap((s) => { const j = JSON.parse(s.text); return j['@graph'] ?? [j]; });
  const lista = grafo.find((n) => n['@type'] === 'ItemList');
  assert.ok(lista, 'falta el ItemList');
  for (const e of lista.itemListElement) {
    const id = e.item['@id'];
    const ruta = id.replace(DOMINIO, 'dist').replace(/#servicio$/, 'index.html');
    assert.ok(existsSync(ruta), `no existe ${ruta}`);
    assert.ok(readFileSync(ruta, 'utf8').includes(`"@id":"${id}"`), `${ruta} no publica ${id}`);
  }
});

// ---- Pie y menú compartidos (portada v2, T0): valores por defecto en las demás páginas y los de la portada ----
const pagina = (ruta) => parse(readFileSync(ruta, 'utf8'));
const cierreDelPie = (raiz) => ({
  titular: raiz.querySelectorAll('footer h2').some((h) => h.text.includes('¿Listo para una web')),
  boton: Boolean(raiz.querySelector('footer a[href="/contacto/"][data-magnetic]')),
});
const cotizarDelMenu = (raiz) => [raiz.querySelector('#navpill a.cta-pill'), raiz.querySelectorAll('#mnav a').find((a) => /Cotizar/.test(a.text))];

test('pie y menú por defecto: en /contacto/ el pie trae su bloque de cierre y los dos «Cotizar» del menú van a /contacto/', conDist, () => {
  const raiz = pagina('dist/contacto/index.html');
  assert.deepEqual(cierreDelPie(raiz), { titular: true, boton: true }, 'bloque de cierre del pie en /contacto/');
  for (const a of cotizarDelMenu(raiz)) {
    assert.ok(a, 'falta un «Cotizar» del menú en /contacto/');
    assert.equal(a.getAttribute('href'), '/contacto/');
    assert.equal(a.getAttribute('data-cta-loc'), undefined, 'sin data-cta-loc fuera de la portada');
    assert.equal(a.getAttribute('data-service'), undefined, 'sin data-service fuera de la portada');
  }
  assert.equal(raiz.querySelectorAll('[data-bloque]').length, 0, 'el pie no gana atributos nuevos');
});

test('pie y menú en la portada: sin bloque de cierre y los dos «Cotizar» del menú bajan a #formulario (header, definir)', conDist, () => {
  const raiz = home();
  assert.deepEqual(cierreDelPie(raiz), { titular: false, boton: false }, 'el pie de / no repite el pedido después del formulario');
  assert.equal(raiz.querySelectorAll('footer .sphere').length, 0, 'sin la esfera del bloque de cierre');
  for (const a of cotizarDelMenu(raiz)) {
    assert.ok(a, 'falta un «Cotizar» del menú en /');
    assert.equal(a.getAttribute('href'), '#formulario');
    assert.equal(a.getAttribute('data-cta-loc'), 'header');
    assert.equal(a.getAttribute('data-service'), 'definir');
  }
});

test('la portada no se anima ni carga los efectos (DESIGN.md, Motion)', conDist, () => {
  const raiz = home();
  const main = raiz.querySelector('main');
  assert.equal(main.getAttribute('data-page-type'), 'home');
  assert.equal(main.getAttribute('data-service'), undefined, 'data-service va en los enlaces, no en <main>');
  for (const sel of ['.reveal', '.grad-text', '.marquee-track', '.sphere', '.mesh', '.mesh-dark']) assert.equal(main.querySelectorAll(sel).length, 0, sel);
  assert.equal(raiz.querySelectorAll('.cursor-ring').length, 0, 'sin cursor personalizado');
  const scripts = raiz.querySelectorAll('script[src]').map((x) => x.getAttribute('src'));
  assert.ok(!scripts.some((src) => /Efectos/.test(src)), 'la portada no baja effects.ts (Lenis, GSAP)');
  for (const a of raiz.querySelectorAll('a[data-cta-loc="hero"][href="#formulario"]')) assert.equal(a.getAttribute('data-service'), 'definir');
  assert.equal(raiz.querySelector('h1').text.trim(), H1_PORTADA);
});
