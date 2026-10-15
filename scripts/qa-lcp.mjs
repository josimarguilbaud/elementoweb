// Contenido sin JavaScript y elemento LCP (D38, R18): nada de la primera pantalla puede depender de JS ni
// arrancar con opacity:0, y el elemento LCP no puede ser un `.reveal`. A diferencia de qa-a11y, NO inyecta
// `.reveal{opacity:1}`: justo eso ocultaba la falla que esta prueba busca.
//   node scripts/qa-lcp.mjs http://localhost:4610
// Las páginas con anatomía v2 (las que emiten data-page-type) son ESTRICTAS: fallan la verificación. El resto
// se informa sin fallar hasta que cada una se migre.
import { chromium } from 'playwright-core';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { rutaChrome } from './chrome.mjs';

const BASE = process.argv[2] || 'http://localhost:4610';
const EXE = rutaChrome() || '/opt/pw-browsers/chromium';
const LCP_MAX_MS = 2500;

const recorrer = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? recorrer(p) : [p]; });
const estrictas = recorrer('dist').filter((f) => f.endsWith('.html') && /data-page-type="/.test(readFileSync(f, 'utf8')))
  .map((f) => '/' + relative('dist', f).replaceAll('\\', '/').replace(/index\.html$/, ''));
const informativas = ['/', '/diseno-web-panama/', '/servicios/diseno-web-corporativo-panama/', '/crecimiento/seo-posicionamiento-web-panama/', '/marketing/google-ads-panama/', '/precios/'].filter((p) => !estrictas.includes(p));

const b = await chromium.launch({ executablePath: EXE });
let fallos = 0;
const linea = (estricta, msg) => { console.log(`${estricta ? '✗' : '·'} ${msg}`); if (estricta) fallos++; };

for (const [w, h] of [[1440, 900], [390, 844]]) {
  // 1) Sin JavaScript: todo lo que se ve en la primera pantalla tiene opacidad efectiva 1.
  const sinJs = await b.newContext({ viewport: { width: w, height: h }, javaScriptEnabled: false });
  const ps = await sinJs.newPage();
  // 2) Con JavaScript: elemento LCP y momento de pintura.
  const conJs = await b.newContext({ viewport: { width: w, height: h } });
  const pj = await conJs.newPage();
  for (const [lista, estricta] of [[estrictas, true], [informativas, false]]) {
    for (const ruta of lista) {
      await ps.goto(BASE + ruta, { waitUntil: 'load' });
      const ocultos = await ps.evaluate(() => {
        const out = [];
        for (const e of document.querySelectorAll('main *')) {
          const r = e.getBoundingClientRect();
          if (r.width === 0 || r.height === 0 || r.top > innerHeight) continue;
          if (![...e.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim())) continue;
          let op = 1; for (let a = e; a; a = a.parentElement) op *= parseFloat(getComputedStyle(a).opacity);
          if (op < 0.99 || getComputedStyle(e).visibility === 'hidden') out.push(`${e.tagName.toLowerCase()}.${String(e.className).split(' ')[0]} (opacidad ${op.toFixed(2)})`);
        }
        return out.slice(0, 3);
      });
      if (ocultos.length) linea(estricta, `${w}x${h} ${ruta} sin JavaScript: contenido de la primera pantalla oculto → ${ocultos.join(', ')}`);
      // Portada (D50, prueba g): a 1440x900 se ven H1, bajada, botones, insignia y el pie de la captura; a 390x844 el
      // botón principal queda dentro de la pantalla y la caja de la captura empieza antes del borde inferior.
      if (ruta === '/') {
        const m = await ps.evaluate(() => {
          const abajo = (s) => { const e = document.querySelector(s); return e ? Math.round(e.getBoundingClientRect().bottom) : null; };
          const arriba = (s) => { const e = document.querySelector(s); return e ? Math.round(e.getBoundingClientRect().top) : null; };
          return { h1: abajo('.ew-hero h1'), boton: abajo('.ew-hero .ew-btn--primary'), wa: abajo('.ew-hero .ew-btn--ghost'), insignia: abajo('.ew-insignia'), pie: abajo('.ew-dev--hero figcaption'), caja: arriba('.ew-dev--hero .ew-dev__browser') };
        });
        const pide = w >= 1024 ? ['h1', 'boton', 'wa', 'insignia', 'pie'] : ['boton'];
        const fuera = pide.filter((k) => m[k] === null || m[k] > h);
        if (w < 1024 && (m.caja === null || m.caja >= h)) fuera.push('caja de la captura');
        if (fuera.length) linea(true, `${w}x${h} /: fuera de la primera pantalla → ${fuera.join(', ')} (${JSON.stringify(m)})`);
        else console.log(`✓ ${w}x${h} /: primera pantalla completa (${pide.join(', ')}${w < 1024 ? ', caja de la captura' : ''})`);
      }

      await pj.goto(BASE + ruta, { waitUntil: 'load' });
      await pj.waitForTimeout(800);
      const lcp = await pj.evaluate(() => new Promise((res) => {
        const fin = (e) => res(e ? { t: Math.round(e.startTime), tag: e.element?.tagName?.toLowerCase() ?? '?', reveal: !!e.element?.closest?.('.reveal') } : null);
        try { new PerformanceObserver((l) => fin(l.getEntries().at(-1))).observe({ type: 'largest-contentful-paint', buffered: true }); } catch { res(null); }
        setTimeout(() => res(null), 3000);
      }));
      if (!lcp) { console.log(`· ${w}x${h} ${ruta}: sin dato de LCP`); continue; }
      if (lcp.reveal) linea(estricta, `${w}x${h} ${ruta}: el elemento LCP (${lcp.tag}) está dentro de un .reveal`);
      if (lcp.t > LCP_MAX_MS) linea(estricta, `${w}x${h} ${ruta}: LCP a ${lcp.t} ms (tope ${LCP_MAX_MS} ms en local)`);
      else if (!lcp.reveal) console.log(`${estricta ? '✓' : '·'} ${w}x${h} ${ruta}: LCP ${lcp.t} ms (${lcp.tag})`);
    }
  }
  await sinJs.close(); await conJs.close();
}
await b.close();
console.log(`\nqa-lcp: ${estrictas.length} página(s) estricta(s), ${informativas.length} informativa(s), ${fallos} fallo(s)`);
process.exit(fallos ? 1 : 0);
