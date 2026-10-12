// PDF (Carta, con fondos) de las propuestas de Kredit con el diseño de la casa.
// Uso: NODE_PATH=<carpeta con playwright> node scripts/propuestas-kredit/pdf.mjs [marketing] [cobranza]
// Sin argumentos genera las dos. Sirve public/ por HTTP local para que carguen Tailwind (CDN) y las fuentes.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', '..', 'public');
const globalRoot = process.env.NODE_PATH?.split(path.delimiter).find((p) => fs.existsSync(path.join(p, 'playwright'))) || execSync('npm root -g').toString().trim();
const { chromium } = await import(pathToFileURL(path.join(globalRoot, 'playwright', 'index.mjs')).href);

const DOCS = {
  marketing: { dir: 'propuestas/kredit-marketing-digital-4a6a12dc', pdf: 'propuesta-kredit-marketing-digital.pdf' },
  cobranza: { dir: 'propuestas/kredit-cobranza-ia-19bfe5dc', pdf: 'propuesta-kredit-cobranza-ia.pdf' },
};
const want = process.argv.slice(2).filter((a) => DOCS[a]);
const keys = want.length ? want : Object.keys(DOCS);

const TYPES = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.pdf': 'application/pdf' };
const server = http.createServer((req, res) => {
  let p = decodeURIComponent(req.url.split('?')[0]);
  if (p.endsWith('/')) p += 'index.html';
  const f = path.join(ROOT, p);
  if (!f.startsWith(ROOT)) { res.writeHead(403); res.end(); return; }
  fs.readFile(f, (err, data) => {
    if (err) { res.writeHead(404); res.end(); return; }
    res.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' });
    res.end(data);
  });
}).listen(0);
const base = `http://localhost:${server.address().port}`;

const browser = await chromium.launch();
for (const k of keys) {
  const { dir, pdf } = DOCS[k];
  const page = await browser.newPage({ viewport: { width: 1100, height: 900 } });
  const errors = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto(`${base}/${dir}/`, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.fonts.ready);
  await page.evaluate(() => document.querySelectorAll('.reveal').forEach((el) => el.classList.add('in')));
  await page.emulateMedia({ media: 'print' });
  await page.waitForTimeout(600);
  const out = path.join(ROOT, dir, pdf);
  await page.pdf({ path: out, format: 'Letter', printBackground: true, preferCSSPageSize: true });
  console.log(`${k}: ${path.relative(path.join(ROOT, '..'), out)} (${(fs.statSync(out).size / 1024).toFixed(0)} KB)${errors.length ? ' · errores: ' + errors.join(' | ') : ''}`);
  await page.close();
}
await browser.close();
server.close();
