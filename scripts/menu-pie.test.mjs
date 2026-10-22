/* Menú y pie monocromo (D56, PR-A): node --test scripts/menu-pie.test.mjs
   - Unidad, sobre `grupos` de src/lib/site.ts: cada servicio tiene un solo dueño y ningún enlace de hoy se queda fuera.
   - Sobre dist/ (al día; ver scripts/lib/dist-guard.mjs): ningún enlace del menú ni del pie se pierde contra
     scripts/fixtures/enlaces-menu-pie.json, el menú móvil tiene los mismos enlaces que los paneles de escritorio,
     «Hablar con ventas» y «Empezar proyecto» van a su destino, el pie tiene sus 5 columnas y el menú ya no trae GSAP.
   Ciclo rápido sin HTML: SOLO_UNIDAD=1 node --test scripts/menu-pie.test.mjs */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { parse } from 'node-html-parser';
import { guardaDist } from './lib/dist-guard.mjs';
import { FIXTURE, faltantes, leerDist } from './enlaces-menu-pie.mjs';
import './lib/json-ts.mjs';

const { grupos, cols, marketing, iaCreativa, saas, url, wa } = await import('../src/lib/site.ts');

const { conDist } = guardaDist();
const enlacesDe = (g) => g.columnas.flatMap((c) => c.links);
const pagina = (ruta) => parse(readFileSync(`dist${ruta}index.html`, 'utf8'));

test('grupos: los cuatro del menú, en orden', () => {
  assert.deepEqual(grupos.map((g) => g.titulo), ['Marketing', 'Inteligencia artificial', 'Diseño web', 'Recursos']);
});

test('grupos: cada enlace tiene un solo dueño', () => {
  const visto = new Map();
  for (const g of grupos) for (const l of enlacesDe(g)) {
    assert.ok(!visto.has(l.slug), `${l.slug} está en «${visto.get(l.slug)}» y en «${g.titulo}»`);
    visto.set(l.slug, g.titulo);
  }
});

test('grupos: dueños que fijó la revisión de ingeniería', () => {
  const dueno = (slug) => grupos.find((g) => enlacesDe(g).some((l) => l.slug === slug))?.titulo;
  assert.equal(dueno('marketing/whatsapp-marketing-masivo-panama'), 'Marketing');
  assert.equal(dueno('marketing/automatizaciones-n8n-panama'), 'Inteligencia artificial');
  assert.equal(dueno('funcionalidades/chatbots-ia-web-wazacrm-panama'), 'Inteligencia artificial');
  assert.equal(dueno('inteligencia-artificial-para-empresas-panama'), 'Inteligencia artificial');
  for (const l of iaCreativa) assert.equal(dueno(l.slug), 'Marketing', l.slug);
});

test('grupos: ningún enlace de las listas de hoy se queda fuera', () => {
  const todos = new Set(grupos.flatMap((g) => enlacesDe(g).map((l) => l.slug)));
  const antes = [...cols.flatMap((c) => c.links), ...marketing, ...iaCreativa, ...saas].map((l) => l.slug);
  for (const s of [...antes, 'saas', 'industrias', 'miami', 'blog', 'portafolio', 'precios', 'guias', 'recursos', 'casos-de-exito', 'como-trabajamos'])
    assert.ok(todos.has(s), `falta ${s}`);
});

test('grupos: la tarjeta destacada de cada panel también está en su lista', () => {
  for (const g of grupos) assert.ok(enlacesDe(g).some((l) => l.slug === g.destacada.slug), `${g.titulo}: ${g.destacada.slug}`);
});

test('menú y pie: ningún enlace interno de main se perdió', conDist, () => {
  const { origen, paginas } = JSON.parse(readFileSync(FIXTURE, 'utf8'));
  assert.deepEqual(faltantes(paginas, leerDist()), [], `base ${origen}`);
});

test('menú móvil: los mismos enlaces que los paneles de escritorio', conDist, () => {
  for (const ruta of ['/', '/contacto/']) {
    const raiz = pagina(ruta);
    const hrefs = (nodos) => new Set(nodos.map((a) => a.getAttribute('href')));
    const escritorio = hrefs(raiz.querySelectorAll('header#nav [data-panel] a, header#nav .nav-links > a'));
    const movil = hrefs(raiz.querySelectorAll('#mnav [data-grupo] a, #mnav .m-suelto'));
    assert.deepEqual([...movil].sort(), [...escritorio].sort(), ruta);
  }
});

test('menú: cuatro disparadores con su panel, y Nosotros como enlace', conDist, () => {
  const raiz = pagina('/contacto/');
  const disparadores = raiz.querySelectorAll('header#nav .nav-trigger');
  assert.deepEqual(disparadores.map((b) => b.text.trim()), grupos.map((g) => g.titulo));
  for (const b of disparadores) {
    const panel = raiz.querySelector(`#${b.getAttribute('aria-controls')}`);
    assert.ok(panel, `sin panel para ${b.text.trim()}`);
    assert.equal(panel.getAttribute('inert'), '', 'el panel cerrado es inert');
    assert.equal(panel.querySelectorAll('.menu-destacada').length, 1, 'una tarjeta destacada por panel');
  }
  assert.ok(raiz.querySelector('header#nav .nav-links > a[href="/nosotros/"]'));
});

test('menú: «Hablar con ventas» abre WhatsApp en otra pestaña y lo avisa', conDist, () => {
  const a = pagina('/contacto/').querySelector('header#nav a.nav-ventas');
  assert.ok(a, 'falta «Hablar con ventas»');
  assert.equal(a.getAttribute('href'), wa('Hola, quiero hablar con ventas.'));
  assert.equal(a.getAttribute('target'), '_blank');
  assert.match(a.getAttribute('rel'), /noopener/);
  assert.match(a.querySelector('.sr-only')?.text ?? '', /otra pestaña/);
});

test('menú: los dos «Empezar proyecto» van a /contacto/ fuera de la portada y a #formulario en ella', conDist, () => {
  for (const [ruta, destino] of [['/contacto/', '/contacto/'], ['/', '#formulario']]) {
    const raiz = pagina(ruta);
    const botones = [raiz.querySelector('#navpill a.cta-pill'), raiz.querySelector('#mnav a.m-cta')];
    for (const a of botones) {
      assert.ok(a, `${ruta}: falta un «Empezar proyecto»`);
      assert.match(a.text, /Empezar proyecto/);
      assert.equal(a.getAttribute('href'), destino, ruta);
    }
  }
});

test('pie: cinco columnas con los grupos y Empresa, y las franjas de Miami, industrias y legales', conDist, () => {
  const raiz = pagina('/contacto/');
  const titulos = raiz.querySelectorAll('footer .pie-col > .pie-titulo').map((p) => p.text.trim());
  assert.deepEqual(titulos, [...grupos.map((g) => g.titulo), 'Empresa']);
  for (const href of ['/miami/', '/industrias/', '/politica-de-privacidad/', '/terminos/', '/nosotros/', '/contacto/'])
    assert.ok(raiz.querySelector(`footer a[href="${href}"]`), href);
  assert.ok(raiz.querySelector('footer a[href^="mailto:"]'));
});

test('el menú no importa GSAP', () => {
  assert.doesNotMatch(readFileSync('src/components/Navbar.astro', 'utf8'), /from ['"]gsap['"]/);
});

test('url() de los grupos termina en barra, como el resto del sitio', () => {
  for (const g of grupos) for (const l of enlacesDe(g)) assert.match(url(l.slug), /\/$/, l.slug);
});
