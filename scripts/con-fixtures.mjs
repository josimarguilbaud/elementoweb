/* Corre un comando con ASTRO_FIXTURES=1 (multiplataforma, sin dependencias).
   Uso: node scripts/con-fixtures.mjs astro build --outDir dist-fixture
   Con la variable puesta, src/pages/qa-fixture/ emite las páginas de ejemplo del contrato (D38). */
import { spawn } from 'node:child_process';

const [cmd, ...args] = process.argv.slice(2);
if (!cmd) { console.error('Falta el comando. Ej.: node scripts/con-fixtures.mjs astro build --outDir dist-fixture'); process.exit(2); }
const hijo = spawn(process.platform === 'win32' ? `${cmd}.cmd` : cmd, args, {
  stdio: 'inherit',
  env: { ...process.env, ASTRO_FIXTURES: '1' },
  shell: process.platform === 'win32',
});
hijo.on('exit', (code) => process.exit(code ?? 1));
