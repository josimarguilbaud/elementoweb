// QA del movimiento de la portada v3 (D56) en un navegador real. Ocho chequeos con id estable:
//   MOV-01 sin JavaScript todo el texto se ve        MOV-05 TBT de Lighthouse móvil local ≤ 200 ms y rendimiento ≥ 90
//   MOV-02 con «reducir movimiento» nada se mueve    MOV-06 el elemento LCP sin animación (390 y 1440 px)
//   MOV-03 GSAP no se pide antes de interactuar      MOV-07 con la CPU ×4, el bloqueo tras la 1.ª interacción ≤ 200 ms
//   MOV-04 bytes de JS propio antes de interactuar   MOV-08 data-mov válido y data-mov-off apaga todo
// Uso: node scripts/qa-movimiento.mjs [base] [--sin-lighthouse]   (base por defecto http://localhost:4610)
// En el CI (CI=true) y con --sin-lighthouse, MOV-05 y MOV-07 imprimen SKIP (nunca PASS): son de tiempo y un runner
// compartido da números ruidosos. En local los corre `npm run verify`, y su salida va en el PR.
// Sale con 1 si algo falla (los fallos en stderr) y con 2 si falta el CLI de Lighthouse. Un error inesperado imprime la
// pila y guarda captura en audit/qa-movimiento/. Umbrales solo para diagnóstico local: MOV_TBT_MAX, MOV_BLOQUEO_MAX.
import { chromium } from 'playwright-core';
import { mkdirSync, writeFileSync } from 'node:fs';
import { contextoSinGa } from './lib/sin-ga.mjs';
import { rutaChrome } from './chrome.mjs';
import { medirConLighthouse, binLighthouse, mediana, LIGHTHOUSE_FALTA } from './medir.mjs';

const args = process.argv.slice(2);
const BASE = args.find((a) => /^https?:\/\//.test(a)) || 'http://localhost:4610';
const SIN_TIEMPO = args.includes('--sin-lighthouse') || !!process.env.CI;
const EXE = process.env.CHROMIUM_PATH || rutaChrome() || '/opt/pw-browsers/chromium';
const TBT_MAX = Number(process.env.MOV_TBT_MAX ?? 200);
const BLOQUEO_MAX = Number(process.env.MOV_BLOQUEO_MAX ?? 200);
const RENDIMIENTO_MIN = 90;
const CPU = 4;
const INICIO = `${BASE}/`;

let fallas = 0;
const linea = (id, nombre, ok, medido, umbral, cambio) => {
  const t = `${ok ? 'PASS' : 'FAIL'} ${id} ${nombre}: ${medido} (umbral ${umbral})${ok ? '' : `; ${cambio}`}`;
  if (ok) console.log(t); else { fallas++; console.error(t); }
};
const skip = (id, nombre, motivo) => console.log(`SKIP ${id} ${nombre}: ${motivo}`);

const lhBin = SIN_TIEMPO ? null : binLighthouse();
if (!SIN_TIEMPO && !lhBin) { console.error(`MOV-05: ${LIGHTHOUSE_FALTA}`); process.exit(2); }
console.log(`qa-movimiento · Chrome ${EXE} · Lighthouse ${lhBin ? 'node_modules/.bin' : 'omitido'} · ${INICIO} · CPU ×${CPU} en MOV-07`);

const b = await chromium.launch({ executablePath: EXE });
const abrir = async (opts = {}, ruta = INICIO) => {
  const ctx = await contextoSinGa(b, { viewport: { width: 1440, height: 900 }, ...opts });
  const p = await ctx.newPage();
  await p.goto(ruta, { waitUntil: 'load' });
  return { ctx, p };
};
const estadoGsap = (p) => p.evaluate(() => document.documentElement.dataset.gsap ?? 'sin pedir');
const interactuar = async (p) => { await p.mouse.move(700, 500); await p.mouse.wheel(0, 600); };

try {
  // MOV-01: sin JavaScript, cada sección a la vista: texto con opacidad 1, nada oculto.
  {
    const { ctx, p } = await abrir({ javaScriptEnabled: false });
    const ocultos = [];
    for (const id of await p.evaluate(() => [...document.querySelectorAll('main > section')].map((s) => s.id))) {
      await p.evaluate((i) => document.getElementById(i).scrollIntoView(), id);
      await p.waitForTimeout(1000);
      ocultos.push(...await p.evaluate((i) => [...document.getElementById(i).querySelectorAll('h1,h2,h3,p,li,a,summary')]
        // Los estados del formulario (éxito, error) y lo cerrado de un <details> están ocultos a propósito, no por movimiento.
        .filter((e) => e.textContent.trim() && !e.closest('[aria-hidden="true"],details:not([open]) > :not(summary),.sr-only,.hidden,[hidden]'))
        .filter((e) => { let n = e; while (n && n !== document.body) { const s = getComputedStyle(n); if (s.opacity !== '1' || s.display === 'none' || s.visibility === 'hidden') return true; n = n.parentElement; } return false; })
        .map((e) => `${i}: ${e.textContent.trim().slice(0, 40)}`), id));
    }
    linea('MOV-01', 'sin-js-todo-visible', ocultos.length === 0, ocultos.length ? ocultos.slice(0, 3).join(' | ') : '0 textos ocultos', '0', 'un revelado parte con opacity < 1 o display:none sin JavaScript; revisa los data-mov="css" de portada.css');
    await ctx.close();
  }

  // MOV-02: con «reducir movimiento», nada cambia de transform ni de opacidad y GSAP no se pide.
  {
    const { ctx, p } = await abrir({ reducedMotion: 'reduce' });
    const foto = () => p.evaluate(() => [...document.querySelectorAll('[data-mov], .pv3-hero [class*="pv3-"]')].map((e) => { const s = getComputedStyle(e); return `${s.transform}|${s.opacity}|${s.animationName}`; }));
    const antes = await foto();
    await interactuar(p);
    await p.evaluate(() => scrollTo(0, document.body.scrollHeight / 2));
    await p.waitForTimeout(1200);
    await p.evaluate(() => scrollTo(0, 0));
    await p.waitForTimeout(300);
    const despues = await foto();
    const animados = despues.filter((d) => !d.endsWith('|none')).length;
    const cambios = antes.filter((a, i) => a !== despues[i]).length;
    const gsap = await estadoGsap(p);
    linea('MOV-02', 'reducir-movimiento', cambios === 0 && animados === 0 && gsap === 'sin pedir', `${cambios} cambios, ${animados} con animación, GSAP ${gsap}`, '0, 0, sin pedir', 'envuelve las animaciones en @media (prefers-reduced-motion: no-preference) y no llames a import() con reduce en src/scripts/movimiento.ts');
    await ctx.close();
  }

  // MOV-03 y MOV-04: GSAP no se pide en la carga (ni con ancla, ni con el scroll restaurado) y sí tras la 1.ª interacción.
  {
    const casos = [];
    for (const [nombre, ruta, prep] of [['carga', INICIO, null], ['con #formulario', `${INICIO}#formulario`, null], ['scroll restaurado', INICIO, 'restaurar']]) {
      const { ctx, p } = await abrir({}, ruta);
      if (prep === 'restaurar') { await p.evaluate(() => scrollTo(0, 2400)); await p.waitForTimeout(300); await p.reload({ waitUntil: 'load' }); }
      await p.waitForTimeout(3000);
      casos.push(`${nombre}: ${await estadoGsap(p)}`);
      if (nombre === 'carga') {
        const bytes = await p.evaluate((origen) => performance.getEntriesByType('resource').filter((r) => r.initiatorType === 'script' && r.name.startsWith(origen)).reduce((t, r) => t + (r.encodedBodySize || 0), 0), new URL(INICIO).origin);
        console.log(`INFO MOV-04 bytes-js-antes-de-interaccion: ${bytes} B comprimidos (el tope lo pone scripts/presupuestos.json; gtag no se cuenta)`);
        await interactuar(p);
        await p.waitForFunction(() => document.documentElement.dataset.gsap === 'listo', null, { timeout: 5000 }).catch(() => {});
        casos.push(`tras la rueda: ${await estadoGsap(p)}`);
      }
      await ctx.close();
    }
    const ok = casos.filter((c) => !c.startsWith('tras')).every((c) => c.endsWith('sin pedir')) && casos.some((c) => c === 'tras la rueda: listo');
    linea('MOV-03', 'gsap-antes-de-interaccion', ok, casos.join(' · '), 'sin pedir antes; listo tras la rueda', 'mueve el import() detrás del oyente de primera interacción en src/scripts/movimiento.ts (rueda, toque, clic o tecla; nunca scroll)');
  }

  // MOV-06: el elemento LCP tiene opacidad 1 y ningún clip-path en su primer cuadro, a 390 y 1440 px.
  for (const [w, h] of [[390, 844], [1440, 900]]) {
    const { ctx, p } = await abrir({ viewport: { width: w, height: h } });
    const lcp = await p.evaluate(() => new Promise((res) => {
      new PerformanceObserver((l) => {
        const e = l.getEntries().at(-1)?.element;
        if (!e) return res(null);
        const s = getComputedStyle(e);
        const m = e.closest('[data-mov]');
        res({ tag: e.tagName, clase: String(e.className).slice(0, 40), opacidad: s.opacity, clip: s.clipPath, mov: m ? `${m.dataset.mov}${m.dataset.efecto ? `/${m.dataset.efecto}` : ''}` : null });
      }).observe({ type: 'largest-contentful-paint', buffered: true });
      setTimeout(() => res(null), 3000);
    }));
    // El parallax de la escultura queda permitido (plan D56): va ligado al scroll, no es una entrada y nunca la oculta.
    const ok = !!lcp && lcp.opacidad === '1' && (lcp.clip === 'none' || !lcp.clip) && (lcp.mov === null || lcp.mov === 'gsap/parallax');
    linea('MOV-06', `lcp-sin-animacion-${w}`, ok, lcp ? `${lcp.tag}.${lcp.clase} opacidad ${lcp.opacidad} clip ${lcp.clip} data-mov ${lcp.mov}` : 'sin LCP', 'opacidad 1, sin clip-path, sin entrada (solo parallax)', 'quita la animación de entrada del titular de display o de la escultura');
    await ctx.close();
  }

  // MOV-08: data-mov solo vale css o gsap; con data-mov-off nada se anima y GSAP no se pide.
  {
    const { ctx, p } = await abrir();
    const malos = await p.evaluate(() => [...document.querySelectorAll('[data-mov]')].map((e) => e.dataset.mov).filter((v) => !['css', 'gsap'].includes(v)));
    await ctx.close();
    const ctx2 = await contextoSinGa(b, { viewport: { width: 1440, height: 900 } });
    // Se marca cuando el parser ya creó <html> y antes de que corran los módulos (que esperan a «interactive»).
    await ctx2.addInitScript(() => document.addEventListener('readystatechange', () => { if (document.readyState === 'interactive') document.documentElement.setAttribute('data-mov-off', ''); }));
    const p2 = await ctx2.newPage();
    await p2.goto(INICIO, { waitUntil: 'load' });
    await interactuar(p2);
    await p2.waitForTimeout(1500);
    const off = await p2.evaluate(() => ({ gsap: document.documentElement.dataset.gsap ?? 'sin pedir', animados: [...document.querySelectorAll('[data-mov], .pv3-hero *')].filter((e) => getComputedStyle(e).animationName !== 'none').length }));
    linea('MOV-08', 'data-mov-y-apagado', malos.length === 0 && off.gsap === 'sin pedir' && off.animados === 0, `${malos.length} data-mov inválidos; con data-mov-off: GSAP ${off.gsap}, ${off.animados} animados`, '0; sin pedir, 0', 'usa data-mov="css" o "gsap" (uno solo) y respeta html[data-mov-off] en portada.css y movimiento.ts');
    await ctx2.close();
  }

  // MOV-05 y MOV-07: de tiempo, solo en local.
  if (SIN_TIEMPO) {
    skip('MOV-05', 'tbt-lighthouse-movil', process.env.CI ? 'en el CI; corre npm run verify en local y pega la salida en el PR' : '--sin-lighthouse');
    skip('MOV-07', 'bloqueo-tras-interaccion', process.env.CI ? 'en el CI; corre npm run verify en local y pega la salida en el PR' : '--sin-lighthouse');
  } else {
    const corridas = medirConLighthouse(INICIO, 3);
    const tbt = mediana(corridas.map((c) => c.tbtMs ?? 0));
    const rend = mediana(corridas.map((c) => c.rendimiento));
    linea('MOV-05', 'tbt-lighthouse-movil', tbt <= TBT_MAX && rend >= RENDIMIENTO_MIN, `TBT mediano ${Math.round(tbt)} ms, rendimiento ${rend} (3 corridas, Lighthouse ${corridas[0].version})`, `≤ ${TBT_MAX} ms y ≥ ${RENDIMIENTO_MIN}`, 'chequeo de tiempo: correr una vez más; si falla dos veces, es real. Busca tareas largas en la carga de /');

    const bloqueos = [];
    for (let i = 0; i < 3; i++) {
      const { ctx, p } = await abrir();
      const cdp = await ctx.newCDPSession(p);
      await cdp.send('Emulation.setCPUThrottlingRate', { rate: CPU });
      await p.evaluate(() => { window.__largas = []; new PerformanceObserver((l) => { for (const e of l.getEntries()) window.__largas.push(e); }).observe({ type: 'longtask', buffered: false }); });
      const t0 = await p.evaluate(() => performance.now());
      await interactuar(p);
      await p.waitForTimeout(3000);
      bloqueos.push(await p.evaluate((t) => window.__largas.filter((e) => e.startTime >= t && e.startTime <= t + 3000).reduce((s, e) => s + Math.max(0, e.duration - 50), 0), t0));
      await ctx.close();
    }
    const bloqueo = mediana(bloqueos);
    linea('MOV-07', 'bloqueo-tras-interaccion', bloqueo <= BLOQUEO_MAX, `${Math.round(bloqueo)} ms de bloqueo en 3 s (mediana de ${bloqueos.map(Math.round).join(', ')})`, `≤ ${BLOQUEO_MAX} ms`, 'chequeo de tiempo: correr una vez más; si falla dos veces, es real. Reduce lo que montar() prepara al cargar GSAP');
  }
} catch (e) {
  console.error(e.stack);
  mkdirSync('audit/qa-movimiento', { recursive: true });
  try { const pg = (await b.contexts()[0]?.pages())?.[0]; if (pg) await pg.screenshot({ path: 'audit/qa-movimiento/error.png' }); } catch {}
  writeFileSync('audit/qa-movimiento/error.txt', String(e.stack));
  fallas++;
}

await b.close();
console.log(`\nqa-movimiento: ${fallas} fallos`);
process.exit(fallas ? 1 : 0);
