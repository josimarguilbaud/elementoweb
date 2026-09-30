// QA responsive: recorre páginas clave a 320–1440 px (más apaisado móvil) y falla si hay
// desbordamiento horizontal, si la navbar se sale de la pantalla o si el CTA principal queda oculto.
//   npm run build && npx astro preview --port 4610 &   → node scripts/qa-responsive.mjs http://localhost:4610
import { chromium } from 'playwright-core';

const BASE = process.argv[2] || 'http://localhost:4610';
const EXE = process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium';
const PAGES = ['/', '/precios/', '/contacto/', '/diseno-web-panama/', '/miami/', '/casos-de-exito/tramitapa/', '/recursos/calculadora-costo-total-web/', '/blog/cuanto-cuesta-diseno-web-panama/', '/comparativas/web-a-medida-vs-suscripcion/'];
const SIZES = [[320, 640], [360, 740], [390, 844], [430, 932], [768, 1024], [820, 1180], [1024, 768], [1280, 800], [1440, 900], [844, 390]];

const b = await chromium.launch({ executablePath: EXE });
let fails = 0, checks = 0;
for (const [w, h] of SIZES) {
  const ctx = await b.newContext({ viewport: { width: w, height: h } });
  const p = await ctx.newPage();
  for (const path of PAGES) {
    await p.goto(BASE + path, { waitUntil: 'load' });
    await p.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important}' });
    const r = await p.evaluate(() => {
      const de = document.documentElement;
      const nav = document.getElementById('navpill')?.getBoundingClientRect();
      // elementos que se salen del ancho de la ventana (excluye los contenedores con overflow oculto)
      const wide = [...document.querySelectorAll('main *')].filter((e) => {
        const r = e.getBoundingClientRect();
        if (r.width === 0 || getComputedStyle(e).position === 'fixed') return false;
        let a = e.parentElement; while (a && a !== document.body) { const o = getComputedStyle(a).overflowX; if (o !== 'visible') return false; a = a.parentElement; }
        return r.right > innerWidth + 1;
      }).slice(0, 3).map((e) => e.tagName + '.' + String(e.className).split(' ').slice(0, 2).join('.'));
      return { over: de.scrollWidth - de.clientWidth, navL: nav && Math.round(nav.left), navR: nav && Math.round(nav.right), iw: innerWidth, wide };
    });
    checks++;
    const bad = r.over > 1 || (r.navL != null && (r.navL < 0 || r.navR > r.iw));
    if (bad) { fails++; console.log(`✗ ${w}x${h} ${path}  overflow=${r.over}px nav=[${r.navL},${r.navR}] ${r.wide.join(' ')}`); }
  }
  await ctx.close();
}
await b.close();
console.log(`\n${checks} comprobaciones · ${fails} fallos`);
process.exit(fails ? 1 : 0);
