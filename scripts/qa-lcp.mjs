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
  const ctx = await contextoSinGa(b, { viewport: { width: w, height: 800 } });
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

// Portada: vitrina de Marketing (D54). Geometría por ancho, con la clase de escena activa alternada a mano: la tarjeta
// mide lo mismo en las 6 escenas y el escenario no cambia de alto (CLS 0); lo importante de cada maqueta queda dentro de
// su tarjeta; ninguna maqueta trae borde propio; ninguna escena oculta se ve a través; activar una fila no la mueve; y,
// desde 1280 px, cada fila va en renglones únicos. La letra más chica de las maquetas se mide a 1024 px.
const geometriaVitrina = () => {
  const escenas = [...document.querySelectorAll('.pv2-vit__escena')];
  const filas = [...document.querySelectorAll('.pv2-vit__fila')];
  const caja = (e) => { const r = e.getBoundingClientRect(); return [r.left, r.top, r.width, r.height].map(Math.round).join(','); };
  const dentro = (a, c) => a.left >= c.left - 1 && a.top >= c.top - 1 && a.right <= c.right + 1 && a.bottom <= c.bottom + 1;
  const activar = (i) => {
    escenas.forEach((e, j) => e.classList.toggle('pv2-vit__escena--activa', j === i));
    filas.forEach((f, j) => f.classList.toggle('pv2-vit__fila--activa', j === i));
  };
  const out = { tarjetas: [], escenario: [], fuera: [], bordes: [], traslucen: [], filas: [], renglones: [], letra: 99 };
  const filasAntes = filas.map(caja);
  for (const [i, esc] of escenas.entries()) {
    activar(i);
    if (getComputedStyle(esc).display === 'none') continue;
    const t = esc.querySelector('.pv2-maqueta');
    const tr = t.getBoundingClientRect();
    out.tarjetas.push(caja(t));
    out.escenario.push(Math.round(document.querySelector('.pv2-vit__escenario').getBoundingClientRect().height));
    for (const s of ['.ew-serp__r:first-child .ew-serp__h', '.ew-serp__r:first-child .ew-serp__d', '.ew-mail__h', '.ew-wa__msg', '.ew-flow__steps li', '.pv2-anuncio__arte p', '.pv2-parrilla li', '.pv2-vit__origen']) {
      for (const n of esc.querySelectorAll(s)) if (!dentro(n.getBoundingClientRect(), tr)) out.fuera.push(`${esc.dataset.escena} ${s}`);
    }
    const tel = esc.querySelector('.pv2-vit__lado .ew-dev__phone');
    if (tel) {
      const p = tel.getBoundingClientRect();
      for (const n of esc.querySelectorAll('.ew-serp__r:first-child .ew-serp__h, .ew-serp__r:first-child .ew-serp__d')) {
        const r = n.getBoundingClientRect();
        if (r.right > p.left && r.left < p.right && r.bottom > p.top && r.top < p.bottom) out.fuera.push(`${esc.dataset.escena}: el celular tapa el anuncio`);
      }
    }
    for (const m of esc.querySelectorAll('.ew-mock')) if (parseFloat(getComputedStyle(m).borderTopWidth) > 0) out.bordes.push(esc.dataset.escena);
    for (const otra of escenas) if (otra !== esc) for (const n of otra.querySelectorAll('*')) if (getComputedStyle(n).visibility === 'visible') { out.traslucen.push(otra.dataset.escena); break; }
    for (const n of t.querySelectorAll('*')) {
      if (![...n.childNodes].some((c) => c.nodeType === 3 && c.textContent.trim())) continue;
      const r = n.getBoundingClientRect();
      if (!r.width || !dentro(r, tr)) continue;
      const zoom = parseFloat(getComputedStyle(n.closest('.pv2-vit__comp') || t).zoom) || 1;
      out.letra = Math.min(out.letra, parseFloat(getComputedStyle(n).fontSize) * zoom);
    }
    out.filas.push(filas.map(caja).join('|') === filasAntes.join('|'));
  }
  activar(0);
  for (const f of filas) {
    for (const s of ['h3', '.pv2-vit__linea', '.pv2-vit__mide']) {
      const n = f.querySelector(s);
      const lh = parseFloat(getComputedStyle(n).lineHeight) || parseFloat(getComputedStyle(n).fontSize) * 1.25;
      if (n.getBoundingClientRect().height > lh * 1.5) out.renglones.push(`${f.dataset.fila} ${s}`);
    }
  }
  const izq = document.querySelector('.pv2-vit__escenario').getBoundingClientRect();
  const pie = document.querySelector('.pv2-vit__pie').getBoundingClientRect();
  out.lista = Math.round(document.querySelector('.pv2-vit__lista').getBoundingClientRect().height);
  out.izquierda = Math.round(Math.max(izq.bottom, pie.bottom) - izq.top);
  out.desborde = document.documentElement.scrollWidth > document.documentElement.clientWidth;
  return out;
};
for (const w of [640, 768, 1024, 1263, 1280, 1440]) {
  const ctx = await contextoSinGa(b, { viewport: { width: w, height: 900 } });
  const pg = await ctx.newPage();
  await pg.goto(BASE + '/', { waitUntil: 'load' });
  await pg.evaluate(() => document.fonts.ready);
  const g = await pg.evaluate(geometriaVitrina);
  const problemas = [];
  if (g.tarjetas.length !== 6 || new Set(g.tarjetas.map((t) => t.split(',').slice(2).join('x'))).size !== 1) problemas.push(`la tarjeta cambia entre escenas (${g.tarjetas.join(' / ')})`);
  if (new Set(g.escenario).size !== 1) problemas.push(`el escenario cambia de alto (${g.escenario.join(', ')} px)`);
  if (g.fuera.length) problemas.push(`fuera de su tarjeta: ${[...new Set(g.fuera)].join(', ')}`);
  if (g.bordes.length) problemas.push(`maquetas con borde propio en ${[...new Set(g.bordes)].join(', ')}`);
  if (g.traslucen.length) problemas.push(`escenas ocultas que se ven: ${[...new Set(g.traslucen)].join(', ')}`);
  if (g.filas.some((x) => !x)) problemas.push('activar una fila mueve las filas');
  if (w >= 1263 && g.renglones.length) problemas.push(`textos de fila en dos renglones: ${g.renglones.join(', ')}`);
  if (w === 1024 && g.letra < 10) problemas.push(`la letra más chica de las maquetas mide ${g.letra.toFixed(1)} px (mínimo 10)`);
  if (g.desborde) problemas.push('scroll horizontal');
  if (problemas.length) linea(true, `${w} / vitrina: ${problemas.join('; ')}`);
  else console.log(`✓ ${w} / vitrina: tarjeta ${g.tarjetas[0].split(',').slice(2).join('×')} en las 6 escenas, escenario fijo, maquetas dentro, letra mínima ${g.letra.toFixed(1)} px; lista ${g.lista} px contra ${g.izquierda} px a la izquierda`);
  await ctx.close();
}

// Lleva un elemento al centro de la vista cuando la página ya no se mueve: al pasar por Servicios, D53 carga ScrollTrigger
// y su espaciador de la pila agrega alto, así que lo medido antes queda desplazado.
const alaVista = async (pg, sel) => {
  await pg.evaluate((s) => document.querySelector(s).scrollIntoView({ block: 'center', behavior: 'instant' }), sel);
  await pg.waitForSelector('#servicios.pv2-ap-activo', { timeout: 8000 }).catch(() => {});
  await pg.waitForTimeout(400);
  await pg.evaluate((s) => document.querySelector(s).scrollIntoView({ block: 'center', behavior: 'instant' }), sel);
  await pg.waitForTimeout(300);
};

// Vitrina: comportamiento a 1280 px con mouse. La escena sigue a la fila con movimiento real y ~100 ms de permanencia,
// se queda al sacar el puntero, no parpadea al cruzar filas rápido ni cambia con la rueda; con Tab sigue al foco y el
// anillo se pinta en la fila. Un clic en una fila deja select_content en la cola (sin hover ni foco) y el «Cotizar»
// sigue mandando cta_click. Las navegaciones a /marketing/* se responden con 204 para leer el estado después.
{
  const ctx = await contextoSinGa(b, { viewport: { width: 1280, height: 900 } });
  const pg = await ctx.newPage();
  await pg.route(/\/marketing\/[^/]+\/$/, (r) => r.request().isNavigationRequest() ? r.fulfill({ status: 204 }) : r.continue());
  await pg.goto(BASE + '/', { waitUntil: 'load' });
  await alaVista(pg, '.pv2-vit__lista');
  const activa = () => pg.evaluate(() => document.querySelector('.pv2-vit__escena--activa')?.dataset.escena);
  const eventos = () => pg.evaluate(() => (window.dataLayer || []).filter((a) => a[0] === 'event').map((a) => ({ n: a[1], ...(a[2] || {}) })));
  const centro = async (i) => { const r = await pg.locator('.pv2-vit__fila').nth(i).boundingBox(); return [r.x + r.width / 2, r.y + r.height / 2]; };
  const ids = await pg.$$eval('.pv2-vit__fila', (fs) => fs.map((f) => f.dataset.fila));
  const fallas = [];
  // Hover con intención: moverse dentro de la fila 3 y quedarse.
  let [x, y] = await centro(2);
  await pg.mouse.move(x - 40, y, { steps: 4 });
  await pg.mouse.move(x, y, { steps: 4 });
  await pg.waitForTimeout(250);
  if ((await activa()) !== ids[2]) fallas.push(`el hover en la fila 3 no muestra su escena (está ${await activa()})`);
  // Persistente: sacar el puntero de la lista.
  await pg.mouse.move(20, 20, { steps: 6 });
  await pg.waitForTimeout(250);
  if ((await activa()) !== ids[2]) fallas.push('la escena no se queda al sacar el puntero');
  // Cruce rápido: de la fila 1 a la 6 en menos de 100 ms por fila, sin quedarse: la escena no cambia en el camino.
  const [x1, y1] = await centro(0);
  const [, y6] = await centro(5);
  const vistas = new Set();
  await pg.mouse.move(x1, y1 - 60);
  for (let k = 0; k <= 12; k++) { await pg.mouse.move(x1, y1 + ((y6 - y1) * k) / 12); vistas.add(await activa()); }
  await pg.mouse.move(20, 20);
  vistas.delete(ids[2]);
  await pg.waitForTimeout(250);
  if (vistas.size) fallas.push(`al cruzar rápido cambió a ${[...vistas].join(', ')}`);
  // Rueda con el puntero quieto: la escena es la que dejó el último hover aunque otra fila quede debajo.
  [x, y] = await centro(1);
  await pg.mouse.move(x - 30, y, { steps: 3 });
  await pg.mouse.move(x, y, { steps: 3 });
  await pg.waitForTimeout(250);
  const antes = await activa();
  await pg.mouse.wheel(0, 220);
  await pg.waitForTimeout(400);
  const debajo = await pg.evaluate(([x, y]) => document.elementFromPoint(x, y)?.closest('.pv2-vit__fila')?.dataset.fila, [x, y]);
  if (antes !== ids[1]) fallas.push(`el hover en la fila 2 no la activó (está ${antes})`);
  else if (debajo === ids[1]) fallas.push('la rueda no dejó otra fila bajo el puntero (la prueba no prueba nada)');
  else if ((await activa()) !== antes) fallas.push(`la rueda cambió la escena a ${await activa()}`);
  // Teclado: Tab hasta cada fila; la escena sigue al foco y el anillo es de la fila, no del enlace.
  await pg.mouse.move(20, 20);
  // Con foco de teclado (Tab y Shift+Tab): un focus() por script después de usar el mouse no cuenta como :focus-visible.
  await pg.focus('.pv2-vit__fila:nth-child(1) h3 a');
  await pg.keyboard.press('Tab');
  await pg.keyboard.press('Shift+Tab');
  for (let i = 0; i < 6; i++) {
    if (i) await pg.keyboard.press('Tab');
    const r = await pg.evaluate(() => {
      const a = document.activeElement;
      const f = a.closest('.pv2-vit__fila');
      return f && { fila: f.dataset.fila, escena: document.querySelector('.pv2-vit__escena--activa').dataset.escena, anillo: getComputedStyle(f).outlineStyle, enlace: getComputedStyle(a).outlineStyle };
    });
    if (!r || r.fila !== ids[i]) { fallas.push(`Tab ${i + 1} no llega a la fila ${i + 1} (${r?.fila})`); break; }
    if (r.escena !== r.fila) fallas.push(`con el foco en ${r.fila} la escena es ${r.escena}`);
    if (r.anillo === 'none' || r.enlace !== 'none') fallas.push(`${r.fila}: el anillo no va en la fila (fila ${r.anillo}, enlace ${r.enlace})`);
  }
  if ((await eventos()).some((e) => e.n === 'select_content')) fallas.push('pasar el puntero o enfocar mandó select_content');
  // Clic en la fila 3: un select_content con su id; el «Cotizar» de la sección manda cta_click marketing/pauta.
  await pg.click('.pv2-vit__fila:nth-child(3) h3 a');
  await pg.waitForTimeout(200);
  const sc = (await eventos()).filter((e) => e.n === 'select_content');
  if (sc.length !== 1 || sc[0].content_id !== 'contenido-redes-sociales-panama' || sc[0].content_type !== 'servicio' || sc[0].location !== 'marketing') fallas.push(`clic en la fila 3: ${JSON.stringify(sc)}`);
  await pg.click('#marketing a[href="#formulario"][data-cta-loc="marketing"]');
  await pg.waitForTimeout(200);
  const cta = (await eventos()).filter((e) => e.n === 'cta_click' && e.location === 'marketing');
  if (cta.length !== 1 || cta[0].service !== 'pauta') fallas.push(`«Cotizar marketing digital»: ${JSON.stringify(cta)}`);
  await pg.waitForTimeout(3500);
  if (!ctx.ga.abortadas) fallas.push('no se bloqueó ninguna petición a Google Analytics (¿la prueba ve gtag.js?)');
  if (fallas.length) linea(true, `1280 / vitrina con mouse y teclado: ${fallas.join('; ')}`);
  else console.log(`✓ 1280 / vitrina: hover con intención, escena persistente, sin parpadeo ni cambio con la rueda, Tab con anillo en la fila, select_content y cta_click; ${ctx.ga.abortadas} petición(es) a GA bloqueada(s)`);
  await ctx.close();
}

// Vitrina en otros punteros y anchos: a 768 px con mouse el puntero no cambia la escena (solo desde 1024); en táctil
// (afirmado con matchMedia) el primer toque navega, la escena sigue en la 1 y ninguna fila lleva barra ni fondo; a 390 px
// solo se ve la escena 1; a 320 px no hay scroll horizontal y el Tab recorre las filas en orden con el foco visible.
{
  const fallas = [];
  const fondoFila = () => [...document.querySelectorAll('.pv2-vit__fila')].some((f) => getComputedStyle(f).borderLeftColor !== 'rgba(0, 0, 0, 0)' || getComputedStyle(f).backgroundColor !== 'rgba(0, 0, 0, 0)');
  {
    const ctx = await contextoSinGa(b, { viewport: { width: 768, height: 900 } });
    const pg = await ctx.newPage();
    await pg.goto(BASE + '/', { waitUntil: 'load' });
    await alaVista(pg, '.pv2-vit__lista');
    const r = await pg.locator('.pv2-vit__fila').nth(3).boundingBox();
    const debajo = await pg.evaluate(([x, y]) => document.elementFromPoint(x, y)?.closest('.pv2-vit__fila')?.dataset.fila, [r.x + 80, r.y + r.height / 2]);
    if (debajo !== 'email-marketing-panama') fallas.push(`a 768 px el puntero no queda sobre la fila 4 (${debajo}): la prueba no prueba nada`);
    await pg.mouse.move(r.x + 20, r.y + r.height / 2, { steps: 4 });
    await pg.mouse.move(r.x + 80, r.y + r.height / 2, { steps: 4 });
    await pg.waitForTimeout(250);
    const esc = await pg.evaluate(() => document.querySelector('.pv2-vit__escena--activa').dataset.escena);
    if (esc !== 'google-ads-panama') fallas.push(`a 768 px con mouse el puntero cambió la escena a ${esc}`);
    if (await pg.evaluate(fondoFila)) fallas.push('a 768 px una fila lleva barra o fondo');
    await ctx.close();
  }
  {
    const ctx = await contextoSinGa(b, { viewport: { width: 768, height: 1024 }, hasTouch: true, isMobile: true });
    const pg = await ctx.newPage();
    const pedidas = [];
    await pg.route(/\/marketing\/[^/]+\/$/, (r) => { if (r.request().isNavigationRequest()) { pedidas.push(new URL(r.request().url()).pathname); return r.fulfill({ status: 204 }); } return r.continue(); });
    await pg.goto(BASE + '/', { waitUntil: 'load' });
    const fino = await pg.evaluate(() => matchMedia('(hover: hover) and (pointer: fine)').matches);
    if (fino) fallas.push('el contexto táctil todavía dice (hover: hover) and (pointer: fine): la prueba no prueba nada');
    await pg.locator('.pv2-vit__fila').nth(2).scrollIntoViewIfNeeded();
    await pg.locator('.pv2-vit__fila:nth-child(3) h3 a').tap();
    await pg.waitForTimeout(400);
    if (!pedidas.includes('/marketing/contenido-redes-sociales-panama/')) fallas.push(`el primer toque en la fila 3 no navegó (${pedidas.join(', ') || 'nada'})`);
    const esc = await pg.evaluate(() => document.querySelector('.pv2-vit__escena--activa').dataset.escena);
    if (esc !== 'google-ads-panama') fallas.push(`en táctil la escena cambió a ${esc}`);
    if (await pg.evaluate(fondoFila)) fallas.push('en táctil una fila lleva barra o fondo');
    await ctx.close();
  }
  for (const w of [390, 320]) {
    const ctx = await contextoSinGa(b, { viewport: { width: w, height: 844 } });
    const pg = await ctx.newPage();
    await pg.goto(BASE + '/', { waitUntil: 'load' });
    const r = await pg.evaluate(() => ({
      visibles: [...document.querySelectorAll('.pv2-vit__escena')].filter((e) => getComputedStyle(e).display !== 'none' && getComputedStyle(e).visibility === 'visible').map((e) => e.dataset.escena),
      desborde: document.documentElement.scrollWidth > document.documentElement.clientWidth || document.querySelector('#marketing').scrollWidth > document.querySelector('#marketing').clientWidth,
    }));
    if (r.visibles.join() !== 'google-ads-panama') fallas.push(`a ${w} px se ven las escenas ${r.visibles.join(', ') || 'ninguna'} (va solo la 1)`);
    if (r.desborde) fallas.push(`a ${w} px hay scroll horizontal`);
    if (await pg.evaluate(fondoFila)) fallas.push(`a ${w} px una fila lleva barra o fondo`);
    if (w === 320) {
      await pg.focus('.pv2-vit__fila:nth-child(1) h3 a');
      const orden = [];
      for (let i = 0; i < 6; i++) {
        if (i) await pg.keyboard.press('Tab');
        orden.push(await pg.evaluate(() => { const f = document.activeElement.closest('.pv2-vit__fila'); return f && getComputedStyle(f).outlineStyle !== 'none' ? f.dataset.fila : `sin anillo:${f?.dataset.fila}`; }));
      }
      const ids = await pg.$$eval('.pv2-vit__fila', (fs) => fs.map((f) => f.dataset.fila));
      if (orden.join() !== ids.join()) fallas.push(`a 320 px el Tab recorre ${orden.join(', ')}`);
    }
    await ctx.close();
  }
  if (fallas.length) linea(true, `/ vitrina en táctil y anchos chicos: ${fallas.join('; ')}`);
  else console.log('✓ / vitrina: a 768 px el mouse no cambia la escena; en táctil el toque navega y la escena sigue en la 1; a 390 y 320 px solo la escena 1, sin scroll y con el Tab en orden');
}

// Portada (v2): estilo calculado, porque global.css llega después del CSS en línea y a igual especificidad gana (no hay
// prueba estática de la cascada). Fondo de cada sección según «Sistema visual» del plan; el borde del botón de contorno
// sigue ahí (`.ew-btn { border: 0 }` de global.css lo borraría; se declara de 1,5 px, pero Chrome 155 redondea todo borde
// a píxeles CSS enteros a cualquier densidad y lo pinta de 1 px); una sola columna en #proceso y #preguntas; encabezados
// de .ew-cmp legibles sobre grafito (su fondo es blanco al 6 %, así que se compone con el de abajo); y el .glass de
// Contacto en blanco.
{
  const ctx = await contextoSinGa(b, { viewport: { width: 1440, height: 900 } });
  const pg = await ctx.newPage();
  await pg.goto(BASE + '/', { waitUntil: 'load' });
  const r = await pg.evaluate(() => {
    const efectivo = (el) => {
      const capas = [];
      for (let e = el; e; e = e.parentElement) {
        const [r, g, b, a = 1] = (getComputedStyle(e).backgroundColor.match(/[\d.]+/g) || []).map(Number);
        if (a > 0) capas.push([r, g, b, a]);
        if (a === 1) break;
      }
      const base = capas.at(-1)?.[3] === 1 ? capas.pop() : [255, 255, 255, 1];
      const [r, g, b] = capas.reverse().reduce(([R, G, B], [r, g, b, a]) => [r * a + R * (1 - a), g * a + G * (1 - a), b * a + B * (1 - a)], base);
      return `rgb(${Math.round(r)}, ${Math.round(g)}, ${Math.round(b)})`;
    };
    const lum = (rgb) => { const [r, g, b] = rgb.match(/\d+/g).slice(0, 3).map((v) => { const c = v / 255; return c <= 0.03928 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
    const contraste = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
    const fondos = Object.fromEntries([['héroe', '.ew-hero'], ['respuesta', 'main > section.ew-sec'], ['proyectos', '#proyectos'], ['industrias', '#industrias'], ['servicios', '#servicios'], ['seo', '#seo'], ['desarrollo', '#desarrollo'], ['marketing', '#marketing'], ['proceso', '#proceso'], ['precios', '#precios'], ['compara', '#compara'], ['preguntas', '#preguntas'], ['contacto', '.pv2-contacto']]
      .map(([n, s]) => [n, document.querySelector(s) ? efectivo(document.querySelector(s)) : 'falta']));
    const c = getComputedStyle(document.querySelector('.ew-btn.pv2-btn--contorno'));
    const izq = (s) => Math.round(document.querySelector(s).getBoundingClientRect().left);
    const th = document.querySelector('#compara .ew-cmp th');
    return {
      fondos, borde: `${c.borderTopStyle} ${c.borderTopColor}`, bordeAncho: parseFloat(c.borderTopWidth),
      primario: getComputedStyle(document.documentElement).getPropertyValue('--ew-primary').trim(),
      columnas: { proceso: [izq('#proceso .ew-h2'), izq('#proceso .ew-pasos')], preguntas: [izq('#preguntas .ew-h2'), izq('#preguntas .ew-faq')] },
      th: Math.round(contraste(getComputedStyle(th).color, efectivo(th)) * 10) / 10,
      glass: getComputedStyle(document.querySelector('.pv2-contacto .glass')).backgroundColor,
    };
  });
  const GRAFITO = 'rgb(14, 15, 17)', CLARO = 'rgb(248, 249, 250)', ALTERNO = 'rgb(234, 240, 245)';
  const mapa = { 'héroe': GRAFITO, respuesta: CLARO, proyectos: ALTERNO, industrias: GRAFITO, servicios: ALTERNO, seo: GRAFITO, desarrollo: CLARO, marketing: ALTERNO, proceso: GRAFITO, precios: ALTERNO, compara: GRAFITO, preguntas: ALTERNO, contacto: GRAFITO };
  const malos = Object.entries(mapa).filter(([n, v]) => r.fondos[n] !== v).map(([n, v]) => `${n} ${r.fondos[n]} (va ${v})`);
  if (malos.length) linea(true, `1440 /: fondos de sección fuera del mapa: ${malos.join(', ')}`);
  else console.log(`✓ 1440 /: los ${Object.keys(mapa).length} fondos de sección siguen el mapa (grafito, claro y alterno)`);
  if (r.bordeAncho < 1 || r.borde !== 'solid rgb(10, 26, 58)') linea(true, `1440 /: el botón de contorno perdió su borde (${r.bordeAncho} px ${r.borde}; va sólido en --ew-primary ${r.primario})`);
  else console.log(`✓ 1440 /: el botón de contorno conserva su borde (${r.bordeAncho} px calculado, ${r.borde})`);
  const unaColumna = Object.entries(r.columnas).filter(([, [h, l]]) => h !== l).map(([n, [h, l]]) => `${n} (H2 ${h} px, lista ${l} px)`);
  if (unaColumna.length) linea(true, `1440 /: dos columnas donde va una: ${unaColumna.join(', ')}`);
  else console.log('✓ 1440 /: #proceso y #preguntas en una columna (H2 y lista comparten el borde izquierdo)');
  if (r.th < 4.5) linea(true, `1440 /: los encabezados de .ew-cmp quedan a ${r.th}:1 sobre grafito (mínimo 4,5:1)`);
  else console.log(`✓ 1440 /: encabezados de .ew-cmp a ${r.th}:1 sobre grafito`);
  if (r.glass !== 'rgb(255, 255, 255)') linea(true, `1440 /: el formulario de Contacto no va en blanco (${r.glass})`);
  else console.log('✓ 1440 /: el formulario de Contacto va en blanco opaco');
  await ctx.close();
}

// Portada (v2): en «Lo que no hacemos» cada «Fuente» va a la derecha de su fila, también cuando el texto se parte.
for (const w of [390, 1280]) {
  const ctx = await contextoSinGa(b, { viewport: { width: w, height: 800 } });
  const pg = await ctx.newPage();
  await pg.goto(BASE + '/', { waitUntil: 'load' });
  const bordes = await pg.evaluate(() => [...document.querySelectorAll('.pv2-nohacemos li a')].map((a) => Math.round(a.getBoundingClientRect().right)));
  if (new Set(bordes).size !== 1) linea(true, `${w} /: los «Fuente» de «Lo que no hacemos» no quedan alineados a la derecha (${bordes.join(', ')} px)`);
  else console.log(`✓ ${w} /: los ${bordes.length} «Fuente» de «Lo que no hacemos» alineados a la derecha`);
  await ctx.close();
}

// Portada: paneles apilados de Servicios (D53). Con JS, el efecto se activa, la pila queda fija con el primer panel a la
// vista y, más abajo, el segundo panel ya tapó al primero; con «reducir movimiento» no se activa y quedan como lista.
for (const [movimiento, w, h] of [['no-preference', 1440, 900], ['no-preference', 390, 844], ['reduce', 1440, 900]]) {
  const ctx = await contextoSinGa(b, { viewport: { width: w, height: h }, reducedMotion: movimiento });
  const pg = await ctx.newPage();
  await pg.goto(BASE + '/', { waitUntil: 'load' });
  await pg.evaluate(() => document.getElementById('servicios').scrollIntoView());
  const activo = await pg.waitForSelector('#servicios.pv2-ap-activo', { timeout: 8000 }).then(() => true, () => false);
  if (movimiento === 'reduce') {
    if (activo) linea(true, `${w}x${h} / con «reducir movimiento»: los paneles de Servicios se animan`);
    else console.log(`✓ ${w}x${h} / con «reducir movimiento»: los paneles de Servicios quedan como lista`);
    await ctx.close();
    continue;
  }
  if (!activo) { linea(true, `${w}x${h} /: los paneles de Servicios no se activaron`); await ctx.close(); continue; }
  const medida = () => pg.evaluate(() => {
    const p = [...document.querySelectorAll('#servicios .pv2-ap-panel')].map((e) => { const r = e.getBoundingClientRect(); return { top: Math.round(r.top), bottom: Math.round(r.bottom) }; });
    return { p, alto: innerHeight };
  });
  const y0 = await pg.evaluate(() => document.getElementById('servicios').querySelector('.pv2-ap-pila').getBoundingClientRect().top + scrollY);
  await pg.evaluate((y) => scrollTo(0, y), y0);
  await pg.waitForTimeout(600);
  const inicio = await medida();
  await pg.evaluate((dy) => scrollBy(0, dy), Math.round(h * 1.6));
  await pg.waitForTimeout(1500);
  const despues = await medida();
  const primeroVisible = inicio.p[0].top >= 0 && inicio.p[0].top < inicio.alto && inicio.p[1].top >= inicio.alto - 2;
  // A 1,6 pantallas el panel 2 todavía entra: basta con que haya subido más de media pantalla y el 1 siga fijo arriba.
  const segundoTapa = despues.p[1].top < inicio.p[1].top - despues.alto / 2 && despues.p[0].top <= inicio.p[0].top && despues.p[0].top > 0;
  if (!primeroVisible || !segundoTapa) linea(true, `${w}x${h} /: la pila de Servicios no se comporta (inicio ${JSON.stringify(inicio.p.slice(0, 2))}, después ${JSON.stringify(despues.p.slice(0, 2))})`);
  else console.log(`✓ ${w}x${h} /: Servicios fija la pila; el panel 2 entra y tapa al 1 al bajar`);
  // Con teclado, desde antes de la sección: enfocar el «Cotizar» del panel 4 baja hasta él y el foco no se pierde.
  await pg.evaluate(() => scrollTo(0, 0));
  await pg.waitForTimeout(300);
  await pg.focus('#servicios .pv2-ap-panel:nth-of-type(4) a.ew-btn');
  await pg.waitForTimeout(1200);
  const foco = await pg.evaluate(() => { const a = document.activeElement; const r = a.getBoundingClientRect(); return { cotizar: a.matches('#servicios .pv2-ap-panel:nth-of-type(4) a.ew-btn'), top: Math.round(r.top), bottom: Math.round(r.bottom), alto: innerHeight }; });
  if (!foco.cotizar || foco.top < 0 || foco.bottom > foco.alto) linea(true, `${w}x${h} /: con teclado, el «Cotizar» del panel 4 de Servicios queda fuera de la vista o pierde el foco (${JSON.stringify(foco)})`);
  else console.log(`✓ ${w}x${h} /: con teclado, el «Cotizar» del panel 4 de Servicios queda enfocado y a la vista`);
  await ctx.close();
}
await b.close();
console.log(`\nqa-lcp: ${estrictas.length} página(s) estricta(s), ${informativas.length} informativa(s), ${fallos} fallo(s)`);
process.exit(fallos ? 1 : 0);
