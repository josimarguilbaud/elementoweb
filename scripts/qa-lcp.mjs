// Contenido sin JavaScript y elemento LCP (D38, R18): nada de la primera pantalla puede depender de JS ni
// arrancar con opacity:0, y el elemento LCP no puede ser un `.reveal`. A diferencia de qa-a11y, NO inyecta
// `.reveal{opacity:1}`: justo eso ocultaba la falla que esta prueba busca.
//   node scripts/qa-lcp.mjs http://localhost:4610
// Las páginas con anatomía v2 (las que emiten data-page-type) son ESTRICTAS: fallan la verificación. El resto
// se informa sin fallar hasta que cada una se migre.
import { chromium } from 'playwright-core';
import { contextoSinGa } from './lib/sin-ga.mjs';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { rutaChrome } from './chrome.mjs';

const BASE = process.argv[2] || 'http://localhost:4610';
const EXE = rutaChrome() || '/opt/pw-browsers/chromium';
const LCP_MAX_MS = 2500;
// Páginas de IA creativa que salen en esta tanda (D52): llevan además la medida de primera pantalla.
const IA_CREATIVA = JSON.parse(readFileSync('src/data/ia-creativa.json', 'utf8')).paginas.map((p) => `/${p.slug}/`);

const recorrer = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? recorrer(p) : [p]; });
const estrictas = recorrer('dist').filter((f) => f.endsWith('.html') && /data-page-type="/.test(readFileSync(f, 'utf8')))
  .map((f) => '/' + relative('dist', f).replaceAll('\\', '/').replace(/index\.html$/, ''));
const informativas = ['/', '/diseno-web-panama/', '/servicios/diseno-web-corporativo-panama/', '/crecimiento/seo-posicionamiento-web-panama/', '/marketing/google-ads-panama/', '/precios/'].filter((p) => !estrictas.includes(p));

const b = await chromium.launch({ executablePath: EXE });
let fallos = 0;
const linea = (estricta, msg) => { console.log(`${estricta ? '✗' : '·'} ${msg}`); if (estricta) fallos++; };

for (const [w, h] of [[1440, 900], [390, 844]]) {
  // 1) Sin JavaScript: todo lo que se ve en la primera pantalla tiene opacidad efectiva 1.
  const sinJs = await contextoSinGa(b, { viewport: { width: w, height: h }, javaScriptEnabled: false });
  const ps = await sinJs.newPage();
  // 2) Con JavaScript: elemento LCP y momento de pintura.
  const conJs = await contextoSinGa(b, { viewport: { width: w, height: h } });
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
      // Portada (v3, D56): a 1440x900 se ven la etiqueta (H1), el titular de display, la bajada, los dos botones y la
      // escultura; a 390x844, la etiqueta, el titular y el botón principal (memoria del dueño: héroe en la primera pantalla).
      if (ruta === '/') {
        const m = await ps.evaluate(() => {
          const abajo = (s) => { const e = document.querySelector(s); return e ? Math.round(e.getBoundingClientRect().bottom) : null; };
          return { h1: abajo('.pv3-hero h1'), display: abajo('.pv3-display'), bajada: abajo('.pv3-bajada'), boton: abajo('.pv3-hero .pv3-btn--negro'), soluciones: abajo('.pv3-hero .pv3-btn--contorno'), escultura: abajo('.pv3-escultura') };
        });
        const pide = w >= 1024 ? ['h1', 'display', 'bajada', 'boton', 'soluciones', 'escultura'] : ['h1', 'display', 'boton'];
        const fuera = pide.filter((k) => m[k] === null || m[k] > h);
        if (fuera.length) linea(true, `${w}x${h} /: fuera de la primera pantalla → ${fuera.join(', ')} (${JSON.stringify(m)})`);
        else console.log(`✓ ${w}x${h} /: primera pantalla completa (${pide.join(', ')})`);
        // Compacto: entre un CTA al formulario y el siguiente (o el formulario) no hay más de 2,5 pantallas (2.110 px a 390x844).
        if (w < 640) {
          const tramos = await ps.evaluate(() => {
            const ys = [...document.querySelectorAll('main a[href="#formulario"][data-cta-loc], #formulario')]
              .map((a) => ({ l: a.dataset.ctaLoc || 'formulario', y: Math.round(a.getBoundingClientRect().top + scrollY) }));
            return ys.slice(1).map((c, i) => ({ de: ys[i].l, a: c.l, px: c.y - ys[i].y }));
          });
          const largos = tramos.filter((t) => t.px > 2110);
          if (largos.length) linea(true, `${w}x${h} /: tramos de más de 2.110 px entre CTA → ${largos.map((t) => `${t.de}→${t.a} ${t.px} px`).join(', ')}`);
          else console.log(`✓ ${w}x${h} /: ${tramos.length} tramos entre CTA, el más largo de ${Math.max(...tramos.map((t) => t.px))} px`);
        }
      }

      // IA creativa (D52): a 1440x900 el H1, el precio y el botón principal terminan dentro de la primera pantalla, y cada
      // <video> mide 900 px de alto o menos; a 390x844, el botón principal. Si no cabe, se acorta el H1 o la bajada.
      if (IA_CREATIVA.includes(ruta)) {
        const m = await ps.evaluate(() => {
          const abajo = (s) => { const e = document.querySelector(s); return e ? Math.round(e.getBoundingClientRect().bottom) : null; };
          return { h1: abajo('.ew-hero__h1'), precio: abajo('[data-score="precio"]'), boton: abajo('.ew-hero .ew-btn--primary'), videos: [...document.querySelectorAll('main video')].map((v) => Math.round(v.getBoundingClientRect().height)) };
        });
        const pide = w >= 1024 ? ['h1', 'precio', 'boton'] : ['boton'];
        const fuera = pide.filter((k) => m[k] === null || m[k] > h);
        if (w >= 1024 && m.videos.some((v) => v > 900)) fuera.push(`video de ${Math.max(...m.videos)} px`);
        if (fuera.length) linea(true, `${w}x${h} ${ruta}: fuera de la primera pantalla o demasiado alto → ${fuera.join(', ')} (${JSON.stringify(m)})`);
        else console.log(`✓ ${w}x${h} ${ruta}: primera pantalla con ${pide.join(', ')}${w >= 1024 ? `; ${m.videos.length} videos de ${m.videos.join(', ')} px` : ''}`);
      }

      await pj.goto(BASE + ruta, { waitUntil: 'load' });
      await pj.waitForTimeout(800);
      // Portada (v3) a 1440: la escultura (el LCP) se pide antes que cualquier otra imagen. Las de más abajo son lazy;
      // Chrome igual adelanta las que quedan cerca de la pantalla, así que solo se exige el orden.
      if (ruta === '/' && w === 1440) {
        const imgs = await pj.evaluate(() => performance.getEntriesByType('resource').filter((r) => r.initiatorType === 'img')
          .map((r) => ({ n: new URL(r.name).pathname, t: Math.round(r.startTime), kb: Math.round((r.encodedBodySize || 0) / 1024) })));
        const escultura = imgs.find((i) => /escultura-(400|800)\.webp$/.test(i.n));
        const antes = escultura ? imgs.filter((i) => i !== escultura && i.t < escultura.t) : [];
        if (!escultura) linea(true, '1440x900 /: la escultura no se pidió en la carga');
        else if (antes.length) linea(true, `1440x900 /: imágenes pedidas antes que la escultura: ${antes.map((i) => i.n).join(', ')}`);
        else console.log(`✓ 1440x900 /: ${imgs.length} imágenes en la carga (${imgs.reduce((a, i) => a + i.kb, 0)} KB); la escultura se pidió primero`);
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

// Portada (v3, D56): estilo calculado de los fondos (monocromo) y del bloque negro de IA, porque global.css llega después
// del CSS en línea y a igual especificidad gana.
{
  const ctx = await contextoSinGa(b, { viewport: { width: 1440, height: 900 } });
  const pg = await ctx.newPage();
  await pg.goto(BASE + '/', { waitUntil: 'load' });
  const fondos = await pg.evaluate(() => Object.fromEntries([['héroe', '#inicio'], ['soluciones', '#soluciones'], ['servicios', '#servicios'], ['diseño web', '#diseno-web'], ['bloque IA', '.pv3-ia'], ['mitad negra', '.pv3-mitad--negra'], ['resumen', '#resumen'], ['preguntas', '#preguntas'], ['hablemos', '#hablemos'], ['formulario', '#hablemos #formulario']]
    .map(([n, s]) => [n, document.querySelector(s) ? getComputedStyle(document.querySelector(s)).backgroundColor : 'falta'])));
  const BLANCO = 'rgb(255, 255, 255)', HUMO = 'rgb(245, 245, 245)', NEGRO = 'rgb(10, 10, 10)';
  const mapa = { 'héroe': HUMO, soluciones: BLANCO, servicios: HUMO, 'diseño web': BLANCO, 'bloque IA': NEGRO, 'mitad negra': NEGRO, resumen: BLANCO, preguntas: HUMO, hablemos: BLANCO, formulario: BLANCO };
  const malos = Object.entries(mapa).filter(([n, v]) => fondos[n] !== v).map(([n, v]) => `${n} ${fondos[n]} (va ${v})`);
  if (malos.length) linea(true, `1440 /: fondos fuera del monocromo: ${malos.join(', ')}`);
  else console.log(`✓ 1440 /: los ${Object.keys(mapa).length} fondos siguen el monocromo (blanco, #F5F5F5 y negro)`);
  await ctx.close();
}

await b.close();
console.log(`\nqa-lcp: ${estrictas.length} página(s) estricta(s), ${informativas.length} informativa(s), ${fallos} fallo(s)`);
process.exit(fallos ? 1 : 0);
