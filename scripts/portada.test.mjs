/* Portada de agencia, tanda B (D50): node --test scripts/portada.test.mjs
   - Reglas puras de src/lib/portada.ts: precios leídos por clave, mapa de 6 filas, riel sin cifras, ItemList por @id,
     preguntas y respuesta citable.
   - Sobre dist/ (si existe): (b) toda cifra «$N» del <main> de / está confirmada; (e) los anclas #formulario apuntan
     a un id que existe; (f) cada @id del ItemList existe como Service en su página; la portada no se anima. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, statSync, readdirSync } from 'node:fs';
import { dirname, basename } from 'node:path';
import { parse } from 'node-html-parser';
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
