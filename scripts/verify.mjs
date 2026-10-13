/* npm run verify: la puerta de calidad antes de pushear (D8, D37, R4, R29).
   Un solo punto de entrada, el mismo en local y en CI:
     build → compilación de pruebas → pruebas unitarias → FORMULARIO.md al día → qa-seo → check-links →
     validador del marcador → (con navegador) preview en un puerto libre, qa-a11y y qa-lcp.
   Opciones:  --sin-navegador   omite los pasos con Chrome (solo para una emergencia; el CI no la usa)
              --hoy AAAA-MM-DD  fecha de las comparaciones del validador (por defecto la del último commit)
   Sale con código distinto de cero en cuanto un paso falla. El Dockerfile sigue ejecutando solo `npm run build`. */
import { spawn, spawnSync, execSync } from 'node:child_process';
import { createServer } from 'node:net';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rutaChrome } from './chrome.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const sinNavegador = args.includes('--sin-navegador');
const opcion = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);
// Dentro de `npm run` se usa el mismo npm por su ruta (sin shell); suelto, se cae a npm / npm.cmd.
const NPM = process.env.npm_execpath ? [process.execPath, process.env.npm_execpath] : [process.platform === 'win32' ? 'npm.cmd' : 'npm'];

let hoy = opcion('--hoy') ?? process.env.VALIDAR_HOY;
if (!hoy) { try { hoy = execSync('git log -1 --format=%cs', { cwd: RAIZ, stdio: ['ignore', 'pipe', 'ignore'] }).toString().trim(); } catch { hoy = new Date().toISOString().slice(0, 10); } }

const resumen = [];
function paso(nombre, cmd, cmdArgs, opciones = {}) {
  const t0 = Date.now();
  console.log(`\n▶ ${nombre}`);
  const r = spawnSync(cmd, cmdArgs, { cwd: RAIZ, stdio: 'inherit', shell: process.platform === 'win32' && cmd.endsWith('.cmd'), ...opciones });
  const ok = r.status === 0;
  resumen.push({ nombre, ok, s: ((Date.now() - t0) / 1000).toFixed(1) });
  if (!ok) { console.error(`\n✗ ${nombre} falló`); terminar(1); }
}

function puertoLibre() {
  return new Promise((res, rej) => { const s = createServer(); s.listen(0, '127.0.0.1', () => { const { port } = s.address(); s.close(() => res(port)); }); s.on('error', rej); });
}
async function esperar(url, ms = 30000) {
  const fin = Date.now() + ms;
  while (Date.now() < fin) { try { if ((await fetch(url)).ok) return true; } catch {} await new Promise((r) => setTimeout(r, 400)); }
  return false;
}

let preview = null;
function terminar(codigo) {
  if (preview && !preview.killed) preview.kill();
  console.log('\n──────── verify ────────');
  for (const p of resumen) console.log(`${p.ok ? '✓' : '✗'} ${p.nombre} (${p.s} s)`);
  console.log(codigo === 0 ? '\nverify en verde.' : '\nverify FALLÓ: no pushear.');
  process.exit(codigo);
}

const npm = (nombre, ...a) => paso(nombre, NPM[0], [...NPM.slice(1), ...a]);
npm('build (astro build)', 'run', 'build');
npm('compilación de pruebas (páginas de ejemplo del marcador)', 'run', 'build:fixtures');
npm('pruebas unitarias (node:test)', 'test');
paso('FORMULARIO.md coincide con src/data/formulario.json', process.execPath, ['scripts/gen-formulario-md.mjs', '--check']);
paso('qa-seo (title, canonical, schema)', process.execPath, ['scripts/qa-seo.mjs']);
paso('SEO congelado (metadatos y schema no cambian sin permiso, D36)', process.execPath, ['scripts/seo-congelado.mjs']);
paso('check-links (enlaces internos)', process.execPath, ['scripts/check-links.mjs']);
paso(`validador del marcador (fecha ${hoy})`, process.execPath, ['scripts/validar-marcador.mjs', '--hoy', hoy]);

if (sinNavegador) {
  console.log('\n⚠ --sin-navegador: se omiten qa-a11y y qa-lcp. No usar para publicar.');
} else {
  const chrome = rutaChrome();
  if (!chrome) { console.error('\n✗ No se encontró Chrome ni Chromium. Instálalo o define CHROMIUM_PATH.'); resumen.push({ nombre: 'navegador disponible', ok: false, s: '0' }); terminar(1); }
  const puerto = await puertoLibre();
  const astroBin = join(RAIZ, 'node_modules/astro/astro.js');
  if (!existsSync(astroBin)) { console.error('\n✗ Falta node_modules: corre npm ci'); terminar(1); }
  console.log(`\n▶ astro preview en el puerto ${puerto}`);
  preview = spawn(process.execPath, [astroBin, 'preview', '--port', String(puerto), '--host', '127.0.0.1'], { cwd: RAIZ, stdio: 'ignore' });
  if (!(await esperar(`http://127.0.0.1:${puerto}/`))) { console.error('✗ astro preview no respondió en 30 s'); resumen.push({ nombre: 'astro preview', ok: false, s: '30' }); terminar(1); }
  const base = `http://127.0.0.1:${puerto}`;
  const env = { ...process.env, CHROMIUM_PATH: chrome };
  paso('qa-a11y (axe, WCAG 2.x AA)', process.execPath, ['scripts/qa-a11y.mjs', base], { env });
  paso('qa-lcp (sin JavaScript y elemento LCP)', process.execPath, ['scripts/qa-lcp.mjs', base], { env });
  // Sirve dist-fixture/ por su cuenta y simula el webhook de n8n: no necesita el preview.
  paso('qa-form (estados del formulario por servicio, eventos y accesibilidad)', process.execPath, ['scripts/qa-form.mjs'], { env });
}
terminar(0);
