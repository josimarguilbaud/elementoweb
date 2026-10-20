/* Clasificación de páginas (D35): node --test scripts/kind.test.mjs
   Lee los slugs del registro (src/lib/pages/*.ts) y comprueba que todas las páginas existentes quedan
   clasificadas y que las comerciales caen donde el manifiesto las espera. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { kindOf, pageTypeOf, HUBS } from '../src/lib/pages/kind.ts';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const dir = join(RAIZ, 'src/lib/pages');
const slugs = [];
for (const f of readdirSync(dir).filter((n) => n.endsWith('.ts'))) {
  for (const m of readFileSync(join(dir, f), 'utf8').matchAll(/^\s{2,6}slug: '([^']*)',/gm)) slugs.push(m[1]);
}
const porTipo = {};
for (const s of slugs) (porTipo[kindOf({ slug: s })] ??= []).push(s);

test('se leyeron las páginas del registro', () => assert.ok(slugs.length >= 170, `solo ${slugs.length} páginas`));

test('las páginas existentes se clasifican en los tipos esperados', () => {
  assert.equal(porTipo.service.length, 26, 'las 25 páginas de servicio de los hubs (con CyberSource y Videos publicitarios) más IA para empresas, que vive en la raíz');
  assert.deepEqual([...porTipo.hub].sort(), [...HUBS].sort());
  assert.deepEqual(porTipo.pillar, ['diseno-web-panama']);
  assert.deepEqual(porTipo.pricing, ['precios']);
  assert.equal(porTipo.industry.length, 31);
  assert.equal(porTipo.location.length, 14);
  assert.ok(porTipo.blog.length >= 79);
});

test('solo las páginas institucionales quedan como «other»', () => {
  assert.deepEqual([...porTipo.other].sort(), ['como-trabajamos', 'comparativas/web-a-medida-vs-suscripcion', 'contacto', 'nosotros', 'politica-de-privacidad', 'portafolio', 'terminos']);
});

test('un kind explícito manda sobre el derivado', () => assert.equal(kindOf({ slug: 'blog/x', kind: 'service' }), 'service'));

test('pageTypeOf: solo las páginas con anatomía v2 emiten tipo, y el precio decide el tipo de servicio', () => {
  const rc = (estado) => ({ type: 'receipt', titulo: 't', fecha: '2026-10-13', precio: { estado, desde: '$1' }, plazo: 'x' });
  assert.equal(pageTypeOf({ slug: 'servicios/a', blocks: [rc('confirmado')] }), undefined);
  assert.equal(pageTypeOf({ slug: 'servicios/a', anatomia: 'v2', blocks: [rc('confirmado')] }), 'servicio-con-precio');
  assert.equal(pageTypeOf({ slug: 'servicios/a', anatomia: 'v2', blocks: [rc('propuesto')] }), 'servicio-cotizado');
  assert.equal(pageTypeOf({ slug: 'servicios/a', anatomia: 'v2', blocks: [] }), 'servicio-cotizado');
  assert.equal(pageTypeOf({ slug: 'diseno-web-panama', anatomia: 'v2', blocks: [] }), 'pilar');
  assert.equal(pageTypeOf({ slug: 'servicios', anatomia: 'v2', blocks: [] }), 'hub');
  assert.equal(pageTypeOf({ slug: 'precios', anatomia: 'v2', blocks: [] }), 'precios');
});

test('solo las páginas del manifiesto comercial declaran anatomía v2 (desde la fase 2a)', () => {
  const comerciales = new Set(JSON.parse(readFileSync(join(RAIZ, 'scripts/paginas-comerciales.json'), 'utf8')).paginas.map((p) => p.slug));
  let v2 = 0;
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.ts') && n !== 'index.ts')) {
    // Cada página empieza en «slug:»; se mira si su cabecera (antes de «blocks:») declara la anatomía nueva.
    for (const parte of readFileSync(join(dir, f), 'utf8').split(/^\s{2,6}slug: '/m).slice(1)) {
      const slug = parte.slice(0, parte.indexOf("'"));
      if (!/anatomia:\s*'v2'/.test(parte.split(/^\s{4}blocks:/m)[0])) continue;
      v2++;
      assert.ok(comerciales.has(slug), `${f}: ${slug} usa la anatomía v2 sin estar en scripts/paginas-comerciales.json`);
    }
  }
  assert.ok(v2 > 0, 'ninguna página declara la anatomía v2: ¿cambió el formato del registro?');
});
