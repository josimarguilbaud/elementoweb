// Cadena de enlaces internos de las páginas comerciales: cada una debe llevar a Precios, a prueba
// (Casos de éxito o Portafolio) y a Contacto. Uso: node scripts/qa-chain.mjs (tras `npm run build`).
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';
const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const SECTIONS = ['servicios', 'crecimiento', 'tecnologias', 'funcionalidades', 'marketing', 'industrias', 'miami', 'diseno-web-panama', 'saas'];
let checked = 0; const gaps = [];
for (const f of walk('dist').filter((f) => f.endsWith('index.html'))) {
  const route = '/' + f.replace(/^dist\//, '').replace(/index\.html$/, '');
  const sec = route.split('/')[1];
  if (!SECTIONS.includes(sec) || route === `/${sec}/` && sec !== 'diseno-web-panama' && sec !== 'miami') { /* los hubs también se revisan abajo */ }
  if (!SECTIONS.includes(sec)) continue;
  const h = readFileSync(f, 'utf8');
  const main = h.slice(h.indexOf('<main'), h.indexOf('</main>'));
  const hrefs = new Set([...main.matchAll(/href="(\/[^"#?]*)/g)].map((m) => m[1]));
  const hasForm = /id="cform"/.test(main);
  const miss = [];
  if (!hrefs.has('/precios/')) miss.push('precios');
  if (!hrefs.has('/casos-de-exito/') && !hrefs.has('/portafolio/') && ![...hrefs].some((x) => x.startsWith('/casos-de-exito/'))) miss.push('prueba (casos/portafolio)');
  if (!hasForm && !hrefs.has('/contacto/')) miss.push('contacto');
  checked++; if (miss.length) gaps.push(`${route}  falta: ${miss.join(', ')}`);
}
console.log(`${checked} páginas comerciales revisadas · ${gaps.length} con huecos`);
gaps.slice(0, 80).forEach((g) => console.log('  - ' + g));
process.exit(gaps.length ? 1 : 0);
