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
      // Portada (v2): a 1440x900 se ven H1, frase de display, bajada, botones, línea de confianza y la captura del frente
      // completa; a 390x844 el botón principal queda dentro de la pantalla y la caja de la captura empieza antes del borde.
      if (ruta === '/') {
        const m = await ps.evaluate(() => {
          const abajo = (s) => { const e = document.querySelector(s); return e ? Math.round(e.getBoundingClientRect().bottom) : null; };
          const arriba = (s) => { const e = document.querySelector(s); return e ? Math.round(e.getBoundingClientRect().top) : null; };
          return { h1: abajo('.ew-hero h1'), display: abajo('.ew-hero .pv2-display'), bajada: abajo('.ew-hero .ew-hero__lead'), boton: abajo('.ew-hero .ew-btn--primary'), wa: abajo('.ew-hero .ew-btn--ghost'), confianza: abajo('.pv2-confianza'), frente: abajo('.pv2-cascada__marco--frente .ew-dev__browser'), caja: arriba('.pv2-cascada__marco--frente .ew-dev__browser') };
        });
        const pide = w >= 1024 ? ['h1', 'display', 'bajada', 'boton', 'wa', 'confianza', 'frente'] : ['boton'];
        const fuera = pide.filter((k) => m[k] === null || m[k] > h);
        if (w < 1024 && (m.caja === null || m.caja >= h)) fuera.push('caja de la captura');
        if (fuera.length) linea(true, `${w}x${h} /: fuera de la primera pantalla → ${fuera.join(', ')} (${JSON.stringify(m)})`);
        else console.log(`✓ ${w}x${h} /: primera pantalla completa (${pide.join(', ')}${w < 1024 ? ', caja de la captura' : ''})`);
        // Compacto: entre un «Cotizar» y el siguiente (o el formulario) no hay más de 2,5 pantallas (2.110 px a 390x844).
        if (w < 640) {
          const tramos = await ps.evaluate(() => {
            const ys = [...document.querySelectorAll('main a[href="#formulario"][data-cta-loc], #formulario')]
              .map((a) => ({ l: a.dataset.ctaLoc || 'formulario', y: Math.round(a.getBoundingClientRect().top + scrollY) }));
            return ys.slice(1).map((c, i) => ({ de: ys[i].l, a: c.l, px: c.y - ys[i].y }));
          });
          const largos = tramos.filter((t) => t.px > 2110);
          if (largos.length) linea(true, `${w}x${h} /: tramos de más de 2.110 px entre «Cotizar» → ${largos.map((t) => `${t.de}→${t.a} ${t.px} px`).join(', ')}`);
          else console.log(`✓ ${w}x${h} /: ${tramos.length} tramos entre «Cotizar», el más largo de ${Math.max(...tramos.map((t) => t.px))} px`);
        }
      }

      await pj.goto(BASE + ruta, { waitUntil: 'load' });
      await pj.waitForTimeout(800);
      // Portada (v2) a 1440: imágenes pedidas en la carga y su peso; la del frente se pide antes que las de atrás.
      if (ruta === '/' && w === 1440) {
        const imgs = await pj.evaluate(() => performance.getEntriesByType('resource').filter((r) => r.initiatorType === 'img')
          .map((r) => ({ n: new URL(r.name).pathname, t: Math.round(r.startTime), kb: Math.round((r.encodedBodySize || 0) / 1024) })));
        const frente = imgs.find((i) => /sanblasfull-(480|800|1000)\.webp$/.test(i.n));
        const atras = imgs.filter((i) => /(panamainternationalmovers-2026|remodelacionesjg|ciclofrio)-\d+\.webp$/.test(i.n));
        const kb = imgs.reduce((a, i) => a + i.kb, 0);
        if (!frente) linea(true, '1440x900 /: la captura del frente no se pidió');
        else if (atras.some((i) => i.t < frente.t)) linea(true, `1440x900 /: una captura de atrás se pidió antes que la del frente (${JSON.stringify(atras)})`);
        else console.log(`✓ 1440x900 /: ${imgs.length} imágenes en la carga (${kb} KB); la del frente (${frente.n.split('/').pop()}) se pidió primero`);
      }
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

// Portada (v2): a 1024 y 1280 el texto del héroe no se superpone con la cascada (los marcos van en cqi del escenario).
for (const w of [1024, 1280]) {
  const ctx = await b.newContext({ viewport: { width: w, height: 800 } });
  const pg = await ctx.newPage();
  await pg.goto(BASE + '/', { waitUntil: 'load' });
  const r = await pg.evaluate(() => {
    const texto = [...document.querySelectorAll('.ew-hero__text > *')].map((e) => e.getBoundingClientRect().right);
    const marcos = [...document.querySelectorAll('.pv2-cascada__marco')].map((e) => e.getBoundingClientRect().left);
    return { texto: Math.round(Math.max(...texto)), cascada: Math.round(Math.min(...marcos)), scroll: document.documentElement.scrollWidth > innerWidth };
  });
  if (r.texto > r.cascada || r.scroll) linea(true, `${w} /: el texto del héroe (hasta ${r.texto} px) se cruza con la cascada (desde ${r.cascada} px) o hay scroll horizontal`);
  else console.log(`✓ ${w} /: texto del héroe hasta ${r.texto} px, cascada desde ${r.cascada} px`);
  await ctx.close();
}
await b.close();
console.log(`\nqa-lcp: ${estrictas.length} página(s) estricta(s), ${informativas.length} informativa(s), ${fallos} fallo(s)`);
process.exit(fallos ? 1 : 0);
