/* Valida que todo enlace interno del sitio construido apunte a una página real, y que todo enlace a un .mp4 apunte a
   un archivo que existe (los videos de IA creativa, D52, enlazan su archivo como respaldo del <video>).
   Uso: node scripts/check-links.mjs [carpeta]  (después de `npm run build`; por defecto dist) */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIST = process.argv[2] ?? 'dist';
const htmlFiles = [];
(function walk(dir) {
  for (const e of readdirSync(dir)) {
    const p = join(dir, e);
    if (statSync(p).isDirectory()) walk(p);
    else if (e.endsWith('.html')) htmlFiles.push(p);
  }
})(DIST);

// Conjunto de rutas válidas = todo directorio con index.html + archivos .html
const valid = new Set(['/']);
for (const f of htmlFiles) {
  let rel = f.slice(DIST.length).replace(/\\/g, '/');
  rel = rel.replace(/index\.html$/, '');
  if (!rel.endsWith('/')) rel += '';
  valid.add(rel);
  valid.add(rel.replace(/\/$/, '')); // sin barra final también
}

const linkRe = /href="(\/[^"#?]*?)"/g;
let broken = 0;
const seen = new Set();
for (const f of htmlFiles) {
  const html = readFileSync(f, 'utf8');
  let m;
  while ((m = linkRe.exec(html))) {
    let href = m[1];
    if (href.startsWith('//')) continue;
    if (/\.(css|js|svg|png|jpg|jpeg|webp|ico|xml|txt|woff2?)$/.test(href)) continue;
    if (href.endsWith('.mp4')) {
      if (existsSync(join(DIST, href))) continue;
      if (seen.has(href)) continue;
      seen.add(href);
      console.log(`ROTO  ${href}   (archivo que no existe, en ${f.slice(DIST.length)})`);
      broken++;
      continue;
    }
    const norm = href.endsWith('/') ? href : href + '/';
    if (valid.has(href) || valid.has(norm)) continue;
    const key = `${href}`;
    if (seen.has(key)) continue;
    seen.add(key);
    console.log(`ROTO  ${href}   (en ${f.slice(DIST.length)})`);
    broken++;
  }
}
console.log(`\n${htmlFiles.length} páginas, ${valid.size} rutas válidas, ${broken} enlaces internos rotos.`);
process.exit(broken ? 1 : 0);
