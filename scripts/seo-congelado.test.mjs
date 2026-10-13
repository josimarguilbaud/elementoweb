/* Red de seguridad de SEO (D36): node --test scripts/seo-congelado.test.mjs */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { comparar, CONGELADOS } from './seo-congelado.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const pag = (extra = {}) => ({ title: 'T', description: 'D', h1: 'H', canonical: 'https://elementoweb.com/x/', robots: null, schema: 'abc', ...extra });

test('sin cambios no hay errores', () => {
  const b = { '/a/': pag(), '/diseno-web-panama/': pag() };
  assert.deepEqual(comparar(b, structuredClone(b)).errores, []);
});

test('un cambio de metadatos sin permiso falla y nombra la ruta y el campo', () => {
  const r = comparar({ '/a/': pag() }, { '/a/': pag({ h1: 'Otro' }) });
  assert.equal(r.errores.length, 1);
  assert.match(r.errores[0], /\/a\/: cambió «h1» y no está en scripts\/cambios-permitidos\.json/);
});

test('un permiso por campo deja pasar solo ese campo, y «todos» deja pasar cualquiera', () => {
  const base = { '/a/': pag() };
  assert.deepEqual(comparar(base, { '/a/': pag({ h1: 'Otro' }) }, [{ ruta: '/a/', campos: ['h1'], motivo: 'm' }]).errores, []);
  assert.equal(comparar(base, { '/a/': pag({ h1: 'Otro', title: 'Otro' }) }, [{ ruta: '/a/', campos: ['h1'], motivo: 'm' }]).errores.length, 1);
  assert.deepEqual(comparar(base, { '/a/': pag({ h1: 'Otro', title: 'Otro' }) }, [{ ruta: '/a/', campos: 'todos', motivo: 'm' }]).errores, []);
});

test('la pilar no cambia de title, H1 ni canonical aunque haya permiso; su descripción sí puede', () => {
  const base = { '/diseno-web-panama/': pag() };
  for (const campo of ['title', 'h1', 'canonical']) {
    const r = comparar(base, { '/diseno-web-panama/': pag({ [campo]: 'x' }) }, [{ ruta: '/diseno-web-panama/', campos: 'todos', motivo: 'm' }]);
    assert.ok(r.errores.some((e) => e.includes('está congelado')), campo);
  }
  assert.deepEqual(comparar(base, { '/diseno-web-panama/': pag({ description: 'nueva' }) }, [{ ruta: '/diseno-web-panama/', campos: ['description'], motivo: 'm' }]).errores, []);
  assert.deepEqual(Object.keys(CONGELADOS), ['/diseno-web-panama/']);
});

test('una URL que aparece o desaparece siempre falla (sin cambios de URL ni redirects)', () => {
  assert.ok(comparar({ '/a/': pag() }, {}).errores[0].includes('desapareció'));
  assert.ok(comparar({}, { '/b/': pag() }).errores[0].includes('URL nueva'));
});

test('un permiso que no se usa se informa como sobrante', () => {
  const r = comparar({ '/a/': pag() }, { '/a/': pag() }, [{ ruta: '/a/', campos: ['h1'], motivo: 'm' }]);
  assert.equal(r.sobrantes.length, 1);
});

test('el snapshot real existe y cubre el sitio', () => {
  const f = join(RAIZ, 'audit/seo-snapshot.json');
  assert.ok(existsSync(f), 'falta audit/seo-snapshot.json: node scripts/seo-congelado.mjs --actualizar');
  const s = JSON.parse(readFileSync(f, 'utf8'));
  assert.ok(Object.keys(s).length >= 170);
  assert.ok('/diseno-web-panama/' in s && '/' in s);
});
