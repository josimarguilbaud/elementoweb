/* Configuración de Astro: node --test scripts/astro-config.test.mjs
   El servidor de desarrollo no puede vigilar dist-fixture/. `npm run verify` (build:fixtures) borra y reescribe
   cientos de archivos ahí; Astro rehace la lista de rutas en cada evento add/unlink del vigilante y abre todas las
   páginas de src/pages cada vez, así que un dev encendido terminaba en EMFILE (too many open files). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { matchesGlob } from 'node:path';
import config from '../astro.config.mjs';

test('el vigilante del servidor de desarrollo ignora dist-fixture/', () => {
  const ignorados = [config.vite?.server?.watch?.ignored ?? []].flat();
  const archivo = 'C:/proyecto/elementoweb/dist-fixture/blog/una-guia/index.html'.replace(/^[A-Z]:/, '');
  assert.ok(ignorados.some((p) => typeof p === 'string' && matchesGlob(archivo, p)), `ningún patrón de vite.server.watch.ignored cubre ${archivo}`);
});

test('el vigilante sigue mirando el código fuente', () => {
  const ignorados = [config.vite?.server?.watch?.ignored ?? []].flat();
  for (const fuente of ['/proyecto/elementoweb/src/pages/index.astro', '/proyecto/elementoweb/src/lib/pages/servicios.ts']) {
    assert.ok(!ignorados.some((p) => typeof p === 'string' && matchesGlob(fuente, p)), `${fuente} quedó ignorado`);
  }
});
