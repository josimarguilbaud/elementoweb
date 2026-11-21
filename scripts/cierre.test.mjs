/* Bloque de cierre contextual y CTA a mitad de artículo (plan cta-blog-2026-11, fase A).
     node --test scripts/cierre.test.mjs
   La primera parte prueba la función pura; la segunda revisa el HTML construido: toda página pública con pie lleva
   el cierre con diagnóstico (formulario con servicio) y WhatsApp, y cada artículo del blog lleva además el CTA medio. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'node-html-parser';
import { guardaDist } from './lib/dist-guard.mjs';
import { cierreDe, temaDe, DESTINO } from '../src/lib/cierre.ts';

test('el tema sale primero del serviceKey, después de la categoría del blog y al final de la sección', () => {
  assert.equal(temaDe({ slug: 'marketing/google-ads-panama', serviceKey: 'pauta' }), 'pauta');
  assert.equal(temaDe({ slug: 'blog/x', category: 'SEO' }), 'seo');
  assert.equal(temaDe({ slug: 'blog/x', category: 'WhatsApp' }), 'whatsapp');
  assert.equal(temaDe({ slug: 'blog/x', category: 'IA y Automatización' }), 'ia');
  assert.equal(temaDe({ slug: 'blog/x', category: 'E-commerce' }), 'ecommerce');
  assert.equal(temaDe({ slug: 'blog/x', category: 'Marketing digital' }), 'pauta');
  assert.equal(temaDe({ slug: 'marketing/email-marketing-panama' }), 'pauta');
  assert.equal(temaDe({ slug: 'crecimiento/seo-local-google-maps-panama' }), 'seo');
  assert.equal(temaDe({ slug: 'industrias/diseno-web-abogados-panama' }), 'web');
});

test('el cierre pide diagnóstico con el servicio en el enlace y ofrece WhatsApp', () => {
  const c = cierreDe({ slug: 'blog/que-es-el-seo-local', h1: 'Qué es el SEO local', category: 'SEO' });
  assert.equal(c.boton, 'Pedir diagnóstico sin costo');
  assert.equal(c.href, '/contacto/?servicio=seo#formulario');
  assert.match(c.wa, /Qué es el SEO local/);
  assert.ok(c.h2.length > 10 && c.texto.length > 10);
  assert.ok(c.medio, 'un artículo del blog lleva CTA medio');
  assert.equal(c.medio.slug, DESTINO.seo.slug);
});

test('fuera del blog no hay CTA medio y el texto de la página manda si lo trae', () => {
  const c = cierreDe({ slug: 'marketing/google-ads-panama', h1: 'Google Ads', serviceKey: 'pauta', cta: { h2: 'Propio', text: 'Texto propio' } });
  assert.equal(c.h2, 'Propio');
  assert.equal(c.texto, 'Texto propio');
  assert.equal(c.medio, undefined);
});

const { conDist } = guardaDist();
const PRIVADAS = /^(demo|propuestas|presentaciones|hackathon|qa-fixture|recursos\/[^/]+\.)/;
const paginas = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? paginas(p) : n === 'index.html' ? [p] : []; });

test('cada destino del CTA medio es una página construida', conDist, () => {
  const faltan = Object.values(DESTINO).map((d) => d.slug).filter((s) => !existsSync(join('dist', s, 'index.html')));
  assert.deepEqual(faltan, []);
});

test('toda página pública con pie trae el cierre con diagnóstico y WhatsApp; el blog además trae el CTA medio', conDist, () => {
  const malas = [];
  for (const f of paginas('dist')) {
    const ruta = relative('dist', f).split('\\').join('/').replace(/index\.html$/, '');
    if (PRIVADAS.test(ruta) || ruta === '' || ruta === 'contacto/' || ruta === '404/') continue;
    const doc = parse(readFileSync(f, 'utf8'));
    if (!doc.querySelector('footer')) continue;
    const cierre = doc.querySelector('[data-cta-loc="cierre"]');
    if (!cierre) { malas.push(`/${ruta}: sin cierre`); continue; }
    const hrefs = cierre.querySelectorAll('a').map((a) => a.getAttribute('href') || '');
    if (!hrefs.some((h) => /^\/contacto\/\?servicio=[a-z]+#formulario$/.test(h))) malas.push(`/${ruta}: cierre sin diagnóstico con servicio`);
    if (!hrefs.some((h) => h.includes('wa.me'))) malas.push(`/${ruta}: cierre sin WhatsApp`);
    const esArticulo = /^blog\/[^/]+\/$/.test(ruta);
    if (esArticulo && !doc.querySelector('[data-cta-loc="medio"]')) malas.push(`/${ruta}: artículo sin CTA medio`);
  }
  assert.deepEqual(malas.slice(0, 20), [], `${malas.length} páginas con problemas`);
});
