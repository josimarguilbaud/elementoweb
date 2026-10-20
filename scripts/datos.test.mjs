/* Pruebas de los datos únicos (D34, D39): node --test scripts/datos.test.mjs */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { generar } from './gen-formulario-md.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const leer = (p) => JSON.parse(readFileSync(join(RAIZ, p), 'utf8'));
const formulario = leer('src/data/formulario.json');
const precios = leer('src/data/precios.json');

const CLAVES = ['pyme', 'ecommerce', 'landing', 'mensual', 'revision', 'rediseno', 'seo', 'pauta', 'whatsapp', 'ia', 'automatizacion', 'medida', 'definir', 'otro'];

/** Slugs definidos en src/lib/pages/*.ts (línea que empieza con `slug:`, no las referencias en enlaces) y su serviceKey. */
function paginasDelRegistro() {
  const dir = join(RAIZ, 'src/lib/pages');
  const slugs = new Map();
  for (const f of readdirSync(dir).filter((n) => n.endsWith('.ts'))) {
    const txt = readFileSync(join(dir, f), 'utf8');
    for (const m of txt.matchAll(/^\s{2,6}slug: '([^']*)',\r?\n(\s+serviceKey: '([^']+)',)?/gm)) slugs.set(m[1], m[3] ?? null);
  }
  return slugs;
}

test('formulario.json: las 14 claves exactas y sin repetir', () => {
  const claves = formulario.servicios.map((s) => s.clave);
  assert.deepEqual([...claves].sort(), [...CLAVES].sort());
  assert.equal(new Set(claves).size, claves.length);
});

test('formulario.json: cada servicio tiene los textos y campos válidos', () => {
  for (const s of formulario.servicios) {
    for (const k of ['etiqueta', 'servicio', 'titulo', 'boton']) assert.ok(s[k] && s[k].length > 2, `${s.clave}.${k}`);
    assert.equal(typeof s.presupuesto, 'boolean', `${s.clave}.presupuesto`);
    const ids = s.campos.map((c) => c.clave);
    assert.equal(new Set(ids).size, ids.length, `${s.clave}: claves de campo repetidas`);
    for (const c of s.campos) {
      assert.ok(['sel', 'txt', 'url'].includes(c.tipo), `${s.clave}.${c.clave} tipo ${c.tipo}`);
      assert.match(c.clave, /^[a-z]+$/, `${s.clave}.${c.clave}: clave de campo en minúsculas`);
      if (c.tipo === 'sel') assert.ok(Array.isArray(c.opciones) && c.opciones.length >= 2, `${s.clave}.${c.clave} necesita opciones`);
      for (const o of c.opciones ?? []) assert.ok(o.length <= formulario.limites.respuesta, `${s.clave}.${c.clave}: opción demasiado larga`);
      if (c.obligatorio) assert.equal(c.tipo, 'url', `${s.clave}.${c.clave}: solo la dirección web puede ser obligatoria`);
    }
  }
});

test('formulario.json: el texto de `servicio` conserva las 11 etiquetas que n8n ya recibe (v1)', () => {
  const v1 = ['Diseño web / Sitio corporativo', 'Tienda online / E-commerce', 'Landing page', 'Web empresarial gestionada — plan mensual', 'Revisión de mi web', 'Rediseño web', 'Ayúdame a definir mi proyecto', 'Marketing digital / Pauta', 'Automatización / Inteligencia artificial', 'Software a medida', 'Otro'];
  const actuales = formulario.servicios.map((s) => s.servicio);
  for (const e of v1) assert.ok(actuales.includes(e), `falta la etiqueta v1: ${e}`);
});

test('formulario.json: el mapa de páginas apunta a claves y páginas que existen', () => {
  const registro = paginasDelRegistro();
  const claves = new Set(CLAVES);
  assert.equal(Object.keys(formulario.paginas).length, 26, 'son 26 páginas de servicio (con Videos publicitarios, D52)');
  for (const [slug, clave] of Object.entries(formulario.paginas)) {
    assert.ok(claves.has(clave), `${slug} → clave desconocida ${clave}`);
    // Las páginas hechas a mano (IA, cybersource) viven en src/pages/<slug>/index.astro y no en el registro.
    const aMano = existsSync(join(RAIZ, 'src/pages', slug, 'index.astro'));
    assert.ok(registro.has(slug) || aMano, `${slug} no existe ni en src/lib/pages ni en src/pages`);
  }
});

test('las páginas con serviceKey coinciden con el mapa, salvo las transitorias', () => {
  for (const [slug, key] of paginasDelRegistro()) {
    if (!key) continue;
    assert.ok(CLAVES.includes(key), `${slug}: serviceKey ${key} no existe`);
    const esperada = formulario.transitorias?.[slug] ?? formulario.paginas[slug];
    assert.equal(key, esperada, `${slug}: serviceKey ${key}, esperada ${esperada}`);
  }
});

test('las páginas con botón propio tienen su rótulo en el esquema', () => {
  for (const [slug, key] of paginasDelRegistro()) {
    if (!key) continue;
    const s = formulario.servicios.find((x) => x.clave === key);
    assert.ok(s.botonPagina, `${slug}: ${key} no tiene botonPagina`);
  }
});

test('FORMULARIO.md coincide con el JSON', () => {
  const md = join(RAIZ, 'docs/specs/rediseno-elementoweb/FORMULARIO.md');
  assert.ok(existsSync(md), 'falta FORMULARIO.md: node scripts/gen-formulario-md.mjs');
  assert.equal(readFileSync(md, 'utf8').replace(/\r\n/g, '\n'), generar(formulario));
});

test('precios.json: cifras enteras positivas y sin ids repetidos entre confirmados y propuestos', () => {
  for (const grupo of ['confirmados', 'propuestos']) {
    for (const [id, p] of Object.entries(precios[grupo])) {
      assert.ok(Number.isInteger(p.monto) && p.monto > 0, `${grupo}.${id}.monto`);
      assert.ok(p.nombre && p.unidad && p.fuente, `${grupo}.${id} incompleto`);
    }
  }
  const dup = Object.keys(precios.confirmados).filter((id) => id in precios.propuestos);
  assert.deepEqual(dup, []);
});

test('precios.json: los precios de los cuatro formatos de web son los publicados', () => {
  const c = precios.confirmados;
  assert.deepEqual([c['web-landing'].monto, c['web-empresarial'].monto, c['web-ecommerce'].monto, c['web-medida'].monto], [550, 1250, 1950, 2900]);
  assert.equal(c['mantenimiento'].monto, 99); // el dueño lo subió de $59 a $99 el 14-oct-2026
  assert.equal(c['wazacrm'].monto, 349);
});

test('site.ts lee de precios.json y no deja cifras sueltas en los precios estructurados', () => {
  const src = readFileSync(join(RAIZ, 'src/lib/site.ts'), 'utf8');
  const bloque = src.slice(src.indexOf('export const pricing'), src.indexOf('export const clientLogos'));
  // Todo `price: '$…'` confirmado (web, hosting, producción) sale del JSON; solo quedan literales las cadenas
  // propuestas o de cotización ('desde $120', 'desde $60/año', 'recargo 30%', 'Cotización aparte').
  const sueltos = [...bloque.matchAll(/price: '\$(\d[\d,]*)'/g)].map((m) => m[1]);
  assert.deepEqual(sueltos, [], `cifras confirmadas escritas a mano en site.ts: ${sueltos}`);
});
