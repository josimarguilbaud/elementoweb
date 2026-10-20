/* Portada de agencia, tanda B (D50): node --test scripts/portada.test.mjs
   - Reglas puras de src/lib/portada.ts: precios leídos por clave, mapa de 6 filas, riel sin cifras, ItemList por @id,
     preguntas y respuesta citable.
   - Sobre dist/ (al día; ver scripts/lib/dist-guard.mjs): (b) toda cifra «$N» del <main> de / está confirmada; (e) los anclas
     #formulario apuntan a un id que existe; (f) cada @id del ItemList existe como Service en su página; la portada no
     se anima; y las secciones 1 a 13 de la v2.
   Ciclo rápido sin HTML: SOLO_UNIDAD=1 node --test scripts/portada.test.mjs */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { dirname, basename } from 'node:path';
import { parse } from 'node-html-parser';
import { guardaDist } from './lib/dist-guard.mjs';
import {
  precioDesde, filasMapa, itemListPortada, faqsPortada, respuestaPortada, H1_PORTADA,
  precioTexto, COMPACTO, mapaOpciones, opcionDe, modulosMarketing, aniosPortafolio, industriasDestacadas,
  comparaPortada, noHacemosPortada, franjaPrecios, desarrolloPortada,
} from '../src/lib/portada.ts';

const precios = JSON.parse(readFileSync('src/data/precios.json', 'utf8'));
const formulario = JSON.parse(readFileSync('src/data/formulario.json', 'utf8'));
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

// ---- Portada v2, T1: datos de las secciones nuevas (unidad, con datos de ejemplo salvo precios.json) ----
test('precioTexto: «desde» sale del dato, la unidad pone el sufijo y la IA lleva el consumo de los modelos', () => {
  assert.equal(precioTexto(precios, 'mantenimiento'), 'desde $99/mes');
  assert.equal(precioTexto(precios, 'gestionada-puesta-en-marcha'), '$350');
  assert.equal(precioTexto(precios, 'gestionada-mensual'), '$169/mes');
  assert.equal(precioTexto(precios, 'hosting-compartido'), '$225/año');
  assert.equal(precioTexto(precios, 'hosting-compartido', { desde: true }), 'desde $225/año');
  assert.equal(precioTexto(precios, 'web-medida', { desde: true }), 'desde $2,900');
  assert.equal(precioTexto(precios, 'ia'), 'desde $2,900 más el consumo de los modelos');
});

test('precioTexto: unidad desconocida, clave inexistente o propuesta rompen el build con un mensaje que las nombra', () => {
  assert.throws(() => precioTexto(precios, 'imagenes-ia'), /imagenes-ia.*«set».*proyecto/);
  assert.throws(() => precioTexto({ confirmados: { x: { monto: 1, unidad: 'mes por cuenta' } } }, 'x'), /x.*mes por cuenta/);
  assert.throws(() => precioTexto(precios, 'no-existe'), /no-existe/);
  assert.throws(() => precioTexto(precios, 'pauta-gestion'), /pauta-gestion/);
});

test('franja de precios y lista de desarrollo: textos exactos de la tabla de «Datos»', () => {
  assert.deepEqual(franjaPrecios(precios).map((f) => `${f.nombre} · ${f.texto}`), [
    'Web empresarial gestionada · $350 de puesta en marcha + $169/mes durante 12 meses',
    'Mantenimiento · desde $99/mes',
    'Hosting · desde $225/año',
  ]);
  const conPrecio = desarrolloPortada(precios).filter((d) => d.precio).map((d) => `${d.slug} ${d.precio}`);
  assert.deepEqual(conPrecio, [
    'tecnologias/desarrollo-web-a-medida-vue-react-panama desde $2,900',
    'funcionalidades/integracion-cybersource-panama desde $1,050',
    'crecimiento/mantenimiento-web-panama desde $99/mes',
    'crecimiento/hosting-infraestructura-panama desde $225/año',
  ]);
});

test('el corte de compacto vive en portada.ts (639 px), para MarcoCaptura y la prueba de paridad', () => {
  assert.equal(COMPACTO, 639);
});

test('mapa clave → opción del formulario: cada «Cotizar» resuelve su opción y una clave sin opción rompe el build', () => {
  const services = ['Landing page', 'Revisión de mi web', 'Ayúdame a definir mi proyecto'];
  const servicios = [{ clave: 'landing', servicio: 'Landing page' }, { clave: 'revision', servicio: 'Revisión de mi web' }, { clave: 'definir', servicio: 'Ayúdame a definir mi proyecto' }, { clave: 'seo', servicio: 'SEO y posicionamiento' }];
  const mapa = mapaOpciones(services, servicios);
  assert.equal(opcionDe(mapa, 'revision', 'seo'), 'Revisión de mi web');
  assert.equal(opcionDe(mapa, 'definir', 'hero'), undefined, '«definir» no cambia lo elegido');
  assert.throws(() => opcionDe(mapa, 'seo', 'seo'), /sección «seo».*clave «seo».*Claves válidas: landing, revision$/);
  assert.throws(() => opcionDe(mapa, 'nada', 'precios'), /sección «precios».*clave «nada»/);
  const real = mapaOpciones(['Diseño web / Sitio corporativo', 'Tienda online / E-commerce', 'Landing page', 'Web empresarial gestionada — plan mensual', 'Revisión de mi web', 'Marketing digital / Pauta', 'Software a medida', 'Ayúdame a definir mi proyecto'], formulario.servicios);
  for (const [clave, opcion] of [['landing', 'Landing page'], ['pyme', 'Diseño web / Sitio corporativo'], ['ecommerce', 'Tienda online / E-commerce'], ['medida', 'Software a medida'], ['mensual', 'Web empresarial gestionada — plan mensual'], ['revision', 'Revisión de mi web'], ['pauta', 'Marketing digital / Pauta']]) {
    assert.equal(opcionDe(real, clave, 'prueba'), opcion, clave);
  }
});

test('marketing se indexa por slug, no por posición, y un slug sin datos rompe el build', () => {
  const lista = [{ slug: 'marketing/email-marketing-panama', label: 'Email Marketing' }, { slug: 'marketing/google-ads-panama', label: 'Google Ads' }];
  assert.deepEqual(modulosMarketing(lista).map((m) => [m.slug, m.nombre]), [['marketing/email-marketing-panama', 'Email Marketing'], ['marketing/google-ads-panama', 'Google Ads']]);
  for (const m of modulosMarketing(lista)) {
    assert.ok(m.linea.length <= 70, `${m.slug}: ${m.linea.length} caracteres`);
    assert.ok(m.maqueta, `${m.slug} sin maqueta`);
  }
  assert.throws(() => modulosMarketing([{ slug: 'marketing/nuevo-servicio', label: 'Nuevo' }]), /marketing\/nuevo-servicio/);
});

test('cada módulo de servicio tiene una línea propia de 70 caracteres o menos y una maqueta', () => {
  for (const f of filasMapa(precios)) {
    assert.ok(f.linea && f.linea.length <= 70, `${f.id}: «${f.linea}»`);
    assert.ok(f.maqueta, `${f.id} sin maqueta`);
  }
});

test('años del portafolio: mínimo y máximo, uno solo si coinciden, y un proyecto sin año rompe el build', () => {
  assert.equal(aniosPortafolio([{ t: 'A', year: '2025' }, { t: 'B', year: '2026' }, { t: 'C', year: '2026' }]), '2025–2026');
  assert.equal(aniosPortafolio([{ t: 'A', year: '2026' }, { t: 'B', year: '2026' }]), '2026');
  assert.throws(() => aniosPortafolio([{ t: 'A', year: '2026' }, { t: 'Sin año' }]), /Sin año/);
});

test('industrias destacadas: las 8 por evidencia, en orden, y el resto como lista de texto', () => {
  const slugs = ['abogados', 'bienes-raices', 'restaurantes', 'turismo-hoteles', 'clinicas-salud', 'constructoras', 'educacion', 'retail-moda', 'gimnasios-fitness', 'logistica-transporte']
    .map((s) => ({ slug: `industrias/diseno-web-${s}-panama`, label: s }));
  const { destacadas, resto } = industriasDestacadas(slugs);
  assert.deepEqual(destacadas.map((d) => d.label), ['turismo-hoteles', 'constructoras', 'logistica-transporte', 'clinicas-salud', 'gimnasios-fitness', 'restaurantes', 'retail-moda', 'abogados']);
  assert.deepEqual(resto.map((d) => d.label), ['bienes-raices', 'educacion']);
  assert.throws(() => industriasDestacadas(slugs.filter((s) => s.label !== 'constructoras')), /constructoras/);
});

test('comparación y «lo que no hacemos»: cada fila con su ruta y una frase fuente completa', () => {
  const filas = comparaPortada();
  assert.equal(filas.length, 6);
  for (const f of [...filas, ...noHacemosPortada()]) {
    assert.match(f.ruta, /^\/.*\/$/, f.texto);
    assert.ok(f.frase.length >= 15, `frase corta en «${f.texto}»`);
  }
  assert.equal(noHacemosPortada().length, 3);
  assert.ok(filas.some((f) => f.frase === 'quedan a nombre de tu empresa al completar el pago'), 'la frase conserva su condición');
});

// ---- Sobre la portada compilada ----
// dist/ falta o está desactualizado si algún archivo de src/ o public/, astro.config.mjs o package-lock.json es más nuevo
// que dist/index.html. Con VERIFY=1 (lo pasa scripts/verify.mjs) o en CI eso falla; fuera de ahí las pruebas de dist/ se
// saltan con el mensaje, para que una propuesta nueva en public/ no ponga en rojo `npm test`. SOLO_UNIDAD=1 las salta
// siempre (ciclo rápido).
const HOME = 'dist/index.html';
const { ESTRICTO, SOLO_UNIDAD, viejo, conDist } = guardaDist();
const home = () => parse(readFileSync(HOME, 'utf8'));

test('dist/ existe y está al día con src/, public/, astro.config.mjs y package-lock.json (falla con VERIFY=1 o en CI)', { skip: SOLO_UNIDAD ? 'SOLO_UNIDAD=1' : !ESTRICTO && viejo ? viejo : false }, () => {
  assert.equal(viejo, null, viejo ?? '');
});

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

// ---- Portada v2, T2: héroe con la cascada de proyectos ----
const archivoPublico = (src) => `dist${src.split(' ')[0]}`;
const pesoKB = (src) => statSync(archivoPublico(src)).size / 1024;
const existeExacto = (src) => { const ruta = archivoPublico(src); return existsSync(ruta) && readdirSync(dirname(ruta)).includes(basename(ruta)); };

test('1. héroe: H1 de S5 a tamaño de subtítulo, frase de display, bajada y botones', conDist, () => {
  const heroe = home().querySelector('.ew-hero');
  const h1 = heroe.querySelector('h1');
  assert.equal(h1.text.trim(), H1_PORTADA);
  assert.equal(h1.innerHTML.trim(), H1_PORTADA, 'el H1 no lleva etiquetas internas (check-prod busca …WhatsApp</h1>)');
  assert.ok(h1.classList.contains('pv2-h1--subtitulo'), 'Q2 por defecto: H1 a tamaño de subtítulo');
  const display = heroe.querySelector('.pv2-display');
  assert.equal(display?.tagName, 'P', 'la frase de display es un párrafo, no un encabezado');
  assert.equal(display.text.trim(), 'Construimos webs como software.');
  assert.equal(heroe.querySelector('.ew-hero__lead').text.trim(), 'Diseño y desarrollo web premium, SEO profesional y marketing digital. Desde $550, con cotización cerrada por escrito.');
  const boton = heroe.querySelector('a.ew-btn--primary[href="#formulario"]');
  assert.equal(boton?.getAttribute('data-cta-loc'), 'hero');
  assert.equal(boton.getAttribute('data-service'), 'definir');
  assert.equal(home().querySelectorAll('.ew-cifras').length, 0, 'la franja de cifras de D50 sale');
});

test('1. héroe: cascada con 4 capturas reales en orden, la del frente es el LCP y las de atrás no compiten', conDist, () => {
  const marcos = home().querySelectorAll('.pv2-cascada .pv2-marco');
  assert.deepEqual(marcos.map((m) => m.querySelector('.ew-dev__bar span')?.text.trim()), ['sanblasfull.com', 'panamainternationalmovers.com', 'remodelacionesjg.com', 'ciclofrio.com']);
  const [frente, ...atras] = marcos.map((m) => m.querySelector('img'));
  assert.equal(frente.getAttribute('loading'), 'eager');
  assert.equal(frente.getAttribute('fetchpriority'), 'high');
  assert.match(frente.getAttribute('alt'), /San Blas Full, sanblasfull\.com, hecha por Elemento Web/);
  assert.deepEqual(frente.getAttribute('srcset').split(', ').map((s) => s.split(' ')[1]), ['480w', '800w', '1000w']);
  for (const img of atras) {
    assert.equal(img.getAttribute('loading'), 'lazy');
    assert.equal(img.getAttribute('alt'), '', 'las de atrás son decorativas: el dominio va escrito en su barra');
    assert.equal(img.getAttribute('fetchpriority'), 'low');
    assert.equal(img.getAttribute('sizes'), '340px');
    assert.equal(img.getAttribute('style'), undefined, 'sin opacity para atenuarlas');
  }
  const pie = home().querySelector('.pv2-cascada__pie a');
  assert.equal(pie?.getAttribute('href'), '/portafolio/');
  assert.equal(pie.text.replace(/\s+/g, ' ').trim(), 'Proyectos publicados · 2025–2026');
});

test('1. héroe: en compacto la captura de celular recortada a 3:2, con el corte de COMPACTO en el HTML y en portada.css', conDist, () => {
  const source = home().querySelector('.pv2-cascada .pv2-marco picture source');
  assert.equal(source?.getAttribute('media'), `(max-width: ${COMPACTO}px)`);
  assert.deepEqual(source.getAttribute('srcset').split(', '), ['/images/ejemplos/movil-sanblasfull-390.webp 390w', '/images/ejemplos/movil-sanblasfull-780.webp 780w']);
  assert.equal(source.getAttribute('width'), '390');
  assert.equal(source.getAttribute('height'), '260');
  assert.match(readFileSync('src/styles/portada.css', 'utf8'), new RegExp(`max-width:\\s*${COMPACTO}px`), 'portada.css repite el corte de COMPACTO');
});

test('1. héroe: toda variante de la primera pantalla existe con su nombre exacto y pesa 60 KB o menos', conDist, () => {
  const raiz = home();
  const frente = raiz.querySelector('.pv2-cascada .pv2-marco img');
  const fuentes = [...frente.getAttribute('srcset').split(', '), ...raiz.querySelector('.pv2-cascada picture source').getAttribute('srcset').split(', ')];
  for (const src of fuentes) {
    assert.ok(existeExacto(src), `no existe ${archivoPublico(src)} (con mayúsculas exactas)`);
    assert.ok(pesoKB(src) <= 60, `${src} pesa ${pesoKB(src).toFixed(1)} KB`);
  }
  for (const img of raiz.querySelectorAll('.ew-hero img')) {
    assert.ok(img.getAttribute('width') && img.getAttribute('height'), `${img.getAttribute('src')} sin width/height`);
  }
});

test('1. héroe: riel de los 6 servicios y línea de confianza enlazada a /nosotros/', conDist, () => {
  const heroe = home().querySelector('.ew-hero');
  assert.deepEqual(heroe.querySelectorAll('.ew-rail--6 a').map((a) => a.getAttribute('href')), filasMapa(precios).map((f) => `/${f.slug}/`));
  const confianza = heroe.querySelector('a.pv2-confianza');
  assert.equal(confianza?.getAttribute('href'), '/nosotros/');
  assert.equal(confianza.text.replace(/\s+/g, ' ').trim(), 'Tech Provider verificado por Meta · Respuesta el mismo día hábil');
});

// ---- Portada v2, T3: secciones 3 a 7 y reglas generales de la página ----
const fuenteSite = readFileSync('src/lib/site.ts', 'utf8');
const bloqueSite = (nombre) => { const i = fuenteSite.indexOf(`export const ${nombre} =`); assert.ok(i >= 0, `site.ts sin ${nombre}`); return fuenteSite.slice(i, fuenteSite.indexOf('];', i)); };
// Oráculos independientes de la portada: el texto de site.ts y las páginas construidas de /industrias/.
const clientesPortafolio = () => bloqueSite('portfolio').split('\n').filter((l) => /^\s*\{ t: '/.test(l) && !/propio: true/.test(l)).length;
const paginasIndustria = () => readdirSync('dist/industrias', { withFileTypes: true }).filter((d) => d.isDirectory() && existsSync(`dist/industrias/${d.name}/index.html`)).map((d) => `/industrias/${d.name}/`);
const seccion = (id) => home().querySelector(`#${id}`);
const textoDe = (n) => n.text.replace(/\s+/g, ' ').trim();

test('3. orden: la respuesta citable va primero tras el héroe y siguen proyectos, industrias, servicios, SEO y desarrollo', conDist, () => {
  const main = home().querySelector('main');
  const ids = main.querySelectorAll('.pv2-ancla').map((e) => e.getAttribute('id'));
  assert.deepEqual(ids.slice(0, 5), ['proyectos', 'industrias', 'servicios', 'seo', 'desarrollo']);
  const html = main.innerHTML;
  assert.ok(html.indexOf('data-block="answer"') < html.indexOf('id="proyectos"'), 'la respuesta citable va antes de proyectos');
  for (const id of ids) assert.equal(main.querySelectorAll(`#${id}`).length, 1, `#${id} existe una vez`);
  assert.match(readFileSync('src/styles/piel-grafito.css', 'utf8'), /\.pv2-ancla\s*\{\s*scroll-margin-top:\s*7rem/);
});

test('3. proyectos: N sitios de clientes (N del portafolio), 4 capturas que no se repiten y el botón de la prueba', conDist, () => {
  const s = seccion('proyectos');
  const n = clientesPortafolio();
  assert.equal(textoDe(s.querySelector('h2')), `${n} sitios en línea que puedes visitar hoy.`);
  assert.doesNotMatch(textoDe(s.querySelector('h2')), /clientes/i, 'la cifra de sitios no va junto a «clientes»');
  const dominios = s.querySelectorAll('.pv2-marco .ew-dev__bar span').map(textoDe);
  assert.deepEqual(dominios, ['maximpresiones.com', 'lavidaesbellapanama.com', 'panamaworldwideexpress.com', 'grupoviesa.com']);
  for (const img of s.querySelectorAll('.pv2-marco img')) assert.match(img.getAttribute('alt'), /^Web de /);
  const enCascada = home().querySelectorAll('.pv2-cascada .ew-dev__bar span').map(textoDe);
  const enDiseno = home().querySelectorAll('#servicios .pv2-marco .ew-dev__bar span').map(textoDe);
  const todas = [...enCascada, ...enDiseno, ...dominios];
  assert.equal(new Set(todas).size, todas.length, `una captura se repite: ${todas.join(', ')}`);
  const cta = s.querySelector('a[href="#formulario"][data-cta-loc="prueba"]');
  assert.equal(cta?.getAttribute('data-service'), 'definir');
  assert.ok(s.querySelector('a[href="/portafolio/"]'), 'enlace «Ver el portafolio»');
  assert.deepEqual(s.querySelectorAll('a[href^="/casos-de-exito/"]').map((a) => a.getAttribute('href')), ['/casos-de-exito/san-blas-full/', '/casos-de-exito/panama-international-movers/', '/casos-de-exito/tramitapa/']);
});

test('4. industrias: 8 fichas por evidencia (≤ 40 KB, alt vacío), las N páginas enlazadas y «Ver las N industrias»', conDist, () => {
  const s = seccion('industrias');
  assert.ok(s.classList.contains('pv2-banda--grafito') || s.closest?.('.pv2-banda--grafito'), 'industrias va sobre grafito (d9)');
  const fichas = s.querySelectorAll('.pv2-ficha');
  assert.equal(fichas.length, 8);
  assert.deepEqual(fichas.map((f) => f.getAttribute('href')), ['turismo-hoteles', 'constructoras', 'logistica-transporte', 'clinicas-salud', 'gimnasios-fitness', 'restaurantes', 'retail-moda', 'abogados'].map((x) => `/industrias/diseno-web-${x}-panama/`));
  for (const f of fichas) {
    const img = f.querySelector('img');
    assert.equal(img.getAttribute('alt'), '');
    assert.ok(img.getAttribute('width') && img.getAttribute('height'));
    const fuentes = img.getAttribute('srcset') ? img.getAttribute('srcset').split(', ') : [img.getAttribute('src')];
    for (const src of fuentes) {
      assert.ok(existeExacto(src), `no existe ${src}`);
      assert.ok(pesoKB(src) <= 40, `${src} pesa ${pesoKB(src).toFixed(1)} KB`);
    }
  }
  const paginas = paginasIndustria();
  const enlazadas = new Set(home().querySelectorAll('main a').map((a) => a.getAttribute('href')));
  for (const p of paginas) assert.ok(enlazadas.has(p), `la portada no enlaza ${p}`);
  const todas = s.querySelector('a[href="/industrias/"]');
  assert.equal(textoDe(todas), `Ver las ${paginas.length} industrias →`);
  assert.equal(s.querySelector('a[href="#formulario"]')?.getAttribute('data-cta-loc'), 'industrias');
});

test('5. servicios: 6 módulos iguales a filasMapa, con su maqueta y el botón al final', conDist, () => {
  const s = seccion('servicios');
  assert.equal(textoDe(s.querySelector('h2')), 'Seis servicios, un solo proveedor.');
  const modulos = s.querySelectorAll('.pv2-modulo');
  const filas = filasMapa(precios);
  assert.deepEqual(modulos.map((m) => textoDe(m.querySelector('h3'))), filas.map((f) => f.nombre));
  modulos.forEach((m, i) => {
    assert.ok(m.querySelector(`a[href="/${filas[i].slug}/"]`), `${filas[i].nombre} enlaza su página`);
    if (filas[i].precio) assert.equal(textoDe(m.querySelector('.pv2-modulo__precio')), filas[i].precio);
    assert.equal(textoDe(m.querySelector('.pv2-modulo__linea')), filas[i].linea);
  });
  assert.equal(textoDe(s.querySelector('.pv2-marco .ew-dev__bar span')), 'tramitapa.com', 'diseño web lleva la captura real de TramitaPa');
  const cta = s.querySelector('a[href="#formulario"][data-cta-loc="servicios"]');
  assert.equal(cta?.getAttribute('data-service'), 'definir');
});

test('6. SEO: rótulo con la palabra del dueño, H2 sin palabras reservadas y «Pedir revisión de mi web»', conDist, () => {
  const s = seccion('seo');
  assert.equal(textoDe(s.querySelector('.pv2-rotulo')), 'SEO profesional');
  assert.equal(textoDe(s.querySelector('h2')), 'Que te encuentren en Google, en Maps y en ChatGPT.');
  const cta = s.querySelector('a[href="#formulario"][data-cta-loc="seo"]');
  assert.equal(cta?.getAttribute('data-service'), 'revision');
  assert.equal(textoDe(cta), 'Pedir revisión de mi web');
  assert.ok(s.querySelector('a[href="/crecimiento/seo-posicionamiento-web-panama/"]'));
});

test('7. desarrollo: lista con precios confirmados, 3 SaaS propios y «Cotizar desarrollo a medida» (medida)', conDist, () => {
  const s = seccion('desarrollo');
  assert.equal(textoDe(s.querySelector('.pv2-rotulo')), 'Desarrollo web a medida');
  assert.equal(textoDe(s.querySelector('h2')), 'Cuando una plantilla no alcanza.');
  assert.deepEqual(s.querySelectorAll('.pv2-lista a').map((a) => a.getAttribute('href')), desarrolloPortada(precios).map((d) => `/${d.slug}/`));
  assert.equal(textoDe(s.querySelector('.pv2-saas')), '3 productos de software propios en producción: WazaCRM, NousCRM y Cifrao.');
  const cta = s.querySelector('a[href="#formulario"][data-cta-loc="desarrollo"]');
  assert.equal(cta?.getAttribute('data-service'), 'medida');
});

// ---- Portada v2, T4: secciones 8 a 13 ----
const textoMain = (ruta) => { const r = pagina(`dist${ruta}index.html`); return textoDe(r.querySelector('main') ?? r); };

test('orden completo: respuesta, proyectos, industrias, servicios, SEO, desarrollo, marketing, proceso, precios, compara, preguntas y el formulario', conDist, () => {
  const ids = home().querySelector('main').querySelectorAll('.pv2-ancla, #formulario').map((e) => e.getAttribute('id'));
  assert.deepEqual(ids, ['proyectos', 'industrias', 'servicios', 'seo', 'desarrollo', 'marketing', 'proceso', 'precios', 'compara', 'preguntas', 'formulario']);
});

test('8. marketing: rótulo, H2 sin palabras reservadas, 6 módulos iguales a los del hub /marketing/ y sin precios', conDist, () => {
  const s = seccion('marketing');
  assert.equal(textoDe(s.querySelector('.pv2-rotulo')), 'Marketing digital');
  assert.equal(textoDe(s.querySelector('h2')), 'Campañas que se miden hasta la consulta.');
  // Las páginas de IA creativa (D52) están en la tabla del hub pero no son módulos de la portada: van en su grupo propio.
  const IA_CREATIVA = ['/marketing/videos-publicitarios-panama/'];
  const delHub = [...new Set(pagina('dist/marketing/index.html').querySelectorAll('main a[href^="/marketing/"]').map((a) => a.getAttribute('href')).filter((h) => h !== '/marketing/' && !IA_CREATIVA.includes(h)))];
  const modulos = s.querySelectorAll('.pv2-modulo').map((m) => m.querySelector('.pv2-modulo__enlaces a').getAttribute('href'));
  assert.deepEqual([...modulos].sort(), [...delHub].sort(), 'los módulos son los servicios del hub de marketing');
  assert.doesNotMatch(textoDe(s), /\$\s?\d/, 'marketing no lleva precios (siguen propuestos)');
  const cta = s.querySelector('a[href="#formulario"][data-cta-loc="marketing"]');
  assert.equal(cta?.getAttribute('data-service'), 'pauta');
  assert.equal(textoDe(cta), 'Cotizar marketing digital');
  assert.ok(s.querySelector('a[href="/marketing/"]'), 'enlace al hub de marketing');
});

test('9. proceso: sobre grafito, cuatro etapas, plazos, «Ver cómo trabajamos» y su «Cotizar»', conDist, () => {
  const s = seccion('proceso');
  assert.ok(s.classList.contains('pv2-banda--grafito'));
  assert.equal(textoDe(s.querySelector('h2')), 'Cuatro etapas.');
  assert.equal(s.querySelectorAll('.ew-pasos > li').length, 4);
  assert.match(textoDe(s), /De 5 días hábiles para una landing a 5 semanas para una tienda online/);
  assert.ok(s.querySelector('a[href="/como-trabajamos/"]'));
  assert.equal(s.querySelector('a[href="#formulario"][data-cta-loc="proceso"]')?.getAttribute('data-service'), 'definir');
});

test('10. precios: 4 tarjetas con «desde», la destacada es la de pricing (primario) y la franja con los textos de «Datos»', conDist, () => {
  const s = seccion('precios');
  const tarjetas = s.querySelectorAll('.pv2-tarjeta');
  assert.deepEqual(tarjetas.map((t) => `${textoDe(t.querySelector('h3'))} · ${textoDe(t.querySelector('.pv2-tarjeta__precio'))}`), ['Landing page · desde $550', 'Web empresarial · desde $1,250', 'Tienda online · desde $1,950', 'A medida · desde $2,900']);
  assert.deepEqual(tarjetas.map((t) => t.querySelector('a[href="#formulario"]').getAttribute('data-service')), ['landing', 'pyme', 'ecommerce', 'medida']);
  assert.deepEqual(tarjetas.map((t) => t.classList.contains('pv2-tarjeta--destacada')), [false, true, false, false]);
  assert.deepEqual(tarjetas.map((t) => t.querySelector('a[href="#formulario"]').classList.contains('pv2-btn--contorno')), [true, false, true, true]);
  assert.deepEqual(s.querySelectorAll('.pv2-franja li').map((li) => textoDe(li.querySelector('.pv2-franja__t'))), franjaPrecios(precios).map((f) => `${f.nombre} · ${f.texto}`));
  assert.equal(s.querySelector('.pv2-franja a[href="#formulario"]')?.getAttribute('data-service'), 'mensual');
  assert.match(textoDe(s), /Precios en dólares, sin ITBMS \(7%\)\. Cotización cerrada por escrito antes de empezar\./);
  assert.ok(s.querySelector('a[href="/precios/"]'));
});

test('11. compara: cada fila enlaza la página que publica la práctica y esa página contiene la frase; «Lo que no hacemos» igual', conDist, () => {
  const s = seccion('compara');
  assert.ok(s.classList.contains('pv2-banda--grafito'));
  const filas = s.querySelectorAll('.ew-cmp tbody tr');
  assert.deepEqual(filas.map((f) => textoDe(f.querySelector('th'))), comparaPortada().map((c) => c.texto));
  comparaPortada().forEach((c, i) => {
    assert.ok(filas[i].querySelector(`a.ew-src[href="${c.ruta}"]`), `«${c.texto}» no enlaza ${c.ruta}`);
    assert.ok(filas[i].querySelector('.ew-cell-blank'), `«${c.texto}» sin la columna en blanco`);
    assert.ok(textoMain(c.ruta).includes(c.frase), `${c.ruta} no contiene «${c.frase}» (fila «${c.texto}»)`);
  });
  const lineas = s.querySelectorAll('.pv2-nohacemos li');
  assert.deepEqual(lineas.map((l) => textoDe(l.querySelector('span'))), noHacemosPortada().map((n) => n.texto));
  noHacemosPortada().forEach((n, i) => {
    assert.ok(lineas[i].querySelector(`a[href="${n.ruta}"]`), `«${n.texto}» no enlaza ${n.ruta}`);
    assert.ok(textoMain(n.ruta).includes(n.frase), `${n.ruta} no contiene «${n.frase}»`);
  });
});

test('11. compara: cierra con su «Cotizar» (compara/definir) después de «Lo que no hacemos» (tramo Precios → formulario en compacto)', conDist, () => {
  const s = seccion('compara');
  const cta = s.querySelector('.pv2-compara__pie a[href="#formulario"][data-cta-loc="compara"]');
  assert.ok(cta, 'Compara sin su «Cotizar»');
  assert.equal(cta.getAttribute('data-service'), 'definir');
  assert.equal(cta.getAttribute('data-opcion'), undefined, '«definir» no cambia lo elegido');
});

test('12. preguntas: las 8 de la portada en acordeón, la primera abierta y las demás cerradas', conDist, () => {
  const d = seccion('preguntas').querySelectorAll('details');
  assert.equal(d.length, faqsPortada(precios).length);
  assert.deepEqual(d.map((x) => x.hasAttribute('open')), d.map((_, i) => i === 0));
});

test('13. contacto: sobre grafito, el formulario único y la región aria-live del servicio elegido', conDist, () => {
  const form = home().querySelector('#formulario');
  const banda = form.closest('.pv2-banda--grafito');
  assert.ok(banda, 'el formulario va en la franja grafito de Contacto');
  assert.equal(textoDe(banda.querySelector('h2')), 'Cuéntanos qué necesitas resolver primero.');
  const vivo = home().querySelector('#pv2-servicio-elegido');
  assert.equal(vivo?.getAttribute('aria-live'), 'polite');
});

test('general: la hoja de la piel tiene la regla de impresión de las franjas grafito', () => {
  assert.match(readFileSync('src/styles/piel-grafito.css', 'utf8'), /@media print\s*\{[^}]*\.pv2-banda--grafito/);
});

test('general: el <body> de la portada tiene 1.400 elementos o menos (umbral de DOM excesivo de Lighthouse)', conDist, () => {
  const n = home().querySelector('body').querySelectorAll('*').length;
  assert.ok(n <= 1400, `la portada tiene ${n} elementos`);
});

test('general: cada «Cotizar» con clave lleva un data-opcion que existe en el selector del formulario', conDist, () => {
  const raiz = home();
  const opciones = new Set(raiz.querySelectorAll('#cf-servicio option').map((o) => textoDe(o)));
  for (const a of raiz.querySelectorAll('a[href="#formulario"][data-service]')) {
    const clave = a.getAttribute('data-service');
    if (clave === 'definir') { assert.equal(a.getAttribute('data-opcion'), undefined, 'definir no cambia lo elegido'); continue; }
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

test('general: maquetas marcadas («Ejemplo» afuera, data-nosnippet, aria-hidden, nada enfocable, sin estrellas, nombres únicos)', conDist, () => {
  const maquetas = home().querySelectorAll('.pv2-maqueta');
  assert.ok(maquetas.length > 0, 'no hay maquetas');
  const nombres = maquetas.map((m) => m.getAttribute('data-maqueta'));
  assert.equal(new Set(nombres).size, nombres.length, `data-maqueta repetido: ${nombres.join(', ')}`);
  for (const m of maquetas) {
    assert.equal(m.tagName, 'DIV', 'data-nosnippet solo vale en div, span y section');
    assert.equal(m.getAttribute('data-nosnippet'), '');
    assert.equal(m.getAttribute('aria-hidden'), 'true');
    assert.equal(m.querySelectorAll('a, button, input, select, textarea, [tabindex]').length, 0, `${m.getAttribute('data-maqueta')} tiene algo enfocable`);
    assert.doesNotMatch(m.text, /★/, `${m.getAttribute('data-maqueta')} pinta estrellas`);
    assert.equal(m.querySelectorAll('.pv2-marco').length, 0, 'una captura real no va dentro de una maqueta');
    const nota = m.nextElementSibling;
    assert.ok(nota?.classList.contains('pv2-nota') && /^Ejemplo · ./.test(textoDe(nota)), `${m.getAttribute('data-maqueta')} sin su nota «Ejemplo · …» afuera`);
  }
});

test('general: los H2 de la portada no usan las palabras reservadas de la regla 2 de KEYWORDS.md', conDist, () => {
  for (const h of home().querySelectorAll('main h2')) {
    if (h.closest('.pv2-maqueta')) continue;
    assert.doesNotMatch(textoDe(h), /\bSEO\b|desarrollo web a medida|marketing digital/i, textoDe(h));
  }
});

test('la portada no se anima ni carga los efectos (DESIGN.md, Motion)', conDist, () => {
  const raiz = home();
  const main = raiz.querySelector('main');
  assert.equal(main.getAttribute('data-page-type'), 'home');
  assert.equal(main.getAttribute('data-service'), undefined, 'data-service va en los enlaces, no en <main>');
  // En todo el documento, solo clases de movimiento; los fondos decorativos (.mesh*) siguen acotados a <main>, porque el
  // pie y el menú móvil traen mesh-dark en todas las páginas.
  for (const sel of ['.reveal', '.grad-text', '.marquee-track', '.sphere', '.spin-slow', '.spin-rev', '.floaty', '.cursor-ring']) assert.equal(raiz.querySelectorAll(sel).length, 0, sel);
  for (const sel of ['.mesh', '.mesh-dark']) assert.equal(main.querySelectorAll(sel).length, 0, sel);
  const scripts = raiz.querySelectorAll('script[src]').map((x) => x.getAttribute('src'));
  assert.ok(!scripts.some((src) => /Efectos/.test(src)), 'la portada no baja effects.ts (Lenis, GSAP)');
  for (const a of raiz.querySelectorAll('a[data-cta-loc="hero"][href="#formulario"]')) assert.equal(a.getAttribute('data-service'), 'definir');
  assert.equal(raiz.querySelector('h1').text.trim(), H1_PORTADA);
});
