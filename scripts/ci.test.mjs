/* El job de verificación del CI no se puede quitar sin que una prueba lo note (D37): node --test scripts/ci.test.mjs */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const yml = readFileSync(join(RAIZ, '.github/workflows/deploy.yml'), 'utf8').replace(/\r\n/g, '\n');
const pkg = JSON.parse(readFileSync(join(RAIZ, 'package.json'), 'utf8'));
const jobs = (n) => yml.slice(yml.indexOf(`\n  ${n}:`));

test('hay un job verificar que corre npm run verify con Chrome', () => {
  assert.match(yml, /\n {2}verificar:/);
  assert.match(jobs('verificar'), /run: npm run verify/);
  assert.match(jobs('verificar'), /google-chrome/);
  assert.match(jobs('verificar'), /actions\/checkout@/);
  assert.match(jobs('verificar'), /npm ci/);
});

test('desplegar depende de verificar y solo despliega desde main', () => {
  const d = jobs('desplegar');
  assert.match(d, /needs: verificar/);
  assert.match(d, /github\.ref == 'refs\/heads\/main'/);
  assert.match(d, /github\.event_name != 'pull_request'/);
  assert.match(d, /needs\.verificar\.result == 'success'/);
});

test('skip_checks existe, exige un motivo escrito y queda registrado', () => {
  assert.match(yml, /skip_checks:/);
  assert.match(yml, /motivo:/);
  assert.match(yml, /skip_checks exige un motivo escrito/);
  assert.match(yml, /GITHUB_STEP_SUMMARY/);
});

test('el despliegue conserva sus tres pasos y no manda nada más que el UUID', () => {
  assert.match(yml, /Preparar la llave/);
  assert.match(yml, /Desplegar y esperar el resultado/);
  assert.match(yml, /Comprobar que la web responde/);
  assert.match(yml, /"root@\$\{NETCUP_HOST\}" "\$\{APP_UUID\}"/);
});

test('package.json expone verify y el Dockerfile sigue construyendo solo con npm run build', () => {
  assert.equal(pkg.scripts.verify, 'node scripts/verify.mjs');
  assert.equal(pkg.scripts.build, 'astro build');
  const docker = readFileSync(join(RAIZ, 'Dockerfile'), 'utf8');
  assert.match(docker, /npm run build/);
  assert.doesNotMatch(docker, /npm run verify/);
});
