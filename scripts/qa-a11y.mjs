// (Se excluyen los elementos aria-hidden: son numeración decorativa, exenta de contraste por WCAG.)
// Accesibilidad automática con axe-core (reglas WCAG 2.x A/AA). Cubre lo que una máquina puede
// detectar (contraste, nombres, etiquetas, roles); NO sustituye la revisión con lector de pantalla.
//   npx astro preview --port 4610 &   → node scripts/qa-a11y.mjs http://localhost:4610
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';

const BASE = process.argv[2] || 'http://localhost:4610';
const EXE = process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium';
const axeSrc = readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');
const PAGES = ['/', '/precios/', '/contacto/', '/diseno-web-panama/', '/miami/', '/casos-de-exito/tramitapa/', '/recursos/calculadora-costo-total-web/', '/blog/cuanto-cuesta-diseno-web-panama/', '/nosotros/', '/servicios/diseno-web-corporativo-panama/', '/guias/', '/guias/diseno-web-por-industria/', '/blog/cuanto-cuesta-tienda-online-panama/', '/blog/agencia-diseno-web-miami-en-espanol/', '/blog/'];
const b = await chromium.launch({ executablePath: EXE });
const seen = new Map();
for (const [w, h] of [[390, 844], [1280, 800]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  for (const path of PAGES) {
    await p.goto(BASE + path, { waitUntil: 'load' });
    await p.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important}' });
    await p.waitForTimeout(400);
    await p.evaluate(axeSrc);
    const r = await p.evaluate(() => axe.run({ exclude: [['[aria-hidden="true"]']] }, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }));
    for (const v of r.violations) {
      const k = `${v.id} [${v.impact}]`;
      const e = seen.get(k) || { help: v.help, n: 0, ex: new Set(), pages: new Set() };
      e.n += v.nodes.length; e.pages.add(path);
      v.nodes.slice(0, 2).forEach((n) => e.ex.add(n.target.join(' ') + ' → ' + (n.any[0]?.message || '').slice(0, 110)));
      seen.set(k, e);
    }
  }
}
await b.close();
for (const [k, e] of seen) console.log(`✗ ${k}: ${e.help}\n   ${e.n} nodos en ${[...e.pages].join(', ')}\n   ${[...e.ex].slice(0, 3).join('\n   ')}`);
console.log(`\n${seen.size} tipos de problema`);
process.exit(seen.size ? 1 : 0);
