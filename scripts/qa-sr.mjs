// Comprobaciones de estructura para lectores de pantalla y teclado (lo que una máquina SÍ puede
// verificar). No sustituye probar con NVDA / VoiceOver / TalkBack: ver docs/checklist-lector-pantalla.md.
//   npx astro preview --port 4610 &   → node scripts/qa-sr.mjs http://localhost:4610
import { chromium } from 'playwright-core';
const BASE = process.argv[2] || 'http://localhost:4610';
const EXE = process.env.CHROMIUM_PATH || '/opt/pw-browsers/chromium';
const PAGES = ['/', '/precios/', '/contacto/', '/diseno-web-panama/', '/miami/', '/nosotros/', '/casos-de-exito/tramitapa/', '/recursos/calculadora-costo-total-web/', '/guias/', '/blog/cuanto-cuesta-diseno-web-panama/', '/servicios/diseno-web-corporativo-panama/'];
const b = await chromium.launch({ executablePath: EXE });
const p = await (await b.newContext({ viewport: { width: 1280, height: 800 } })).newPage();
let fails = 0; const bad = (path, m) => { fails++; console.log(`✗ ${path}  ${m}`); };
for (const path of PAGES) {
  await p.goto(BASE + path, { waitUntil: 'load' });
  await p.addStyleTag({ content: '.reveal{opacity:1!important;transform:none!important}' });
  const r = await p.evaluate(() => {
    const hs = [...document.querySelectorAll('h1,h2,h3,h4,h5,h6')].filter((h) => h.offsetParent !== null || getComputedStyle(h).position === 'fixed');
    const levels = hs.map((h) => Number(h.tagName[1]));
    const skips = []; for (let i = 1; i < levels.length; i++) if (levels[i] - levels[i - 1] > 1) skips.push(`${hs[i - 1].tagName}→${hs[i].tagName} ("${hs[i].textContent.trim().slice(0, 30)}")`);
    const q = (s) => document.querySelectorAll(s).length;
    const unnamed = [...document.querySelectorAll('a[href],button')].filter((e) => !(e.getAttribute('aria-label') || e.textContent.trim() || e.querySelector('img[alt]:not([alt=""])') || e.getAttribute('title')) && e.offsetParent !== null).map((e) => e.outerHTML.slice(0, 80));
    const imgsNoAlt = [...document.querySelectorAll('img:not([alt])')].length;
    const first = document.querySelector('a[href],button');
    return { h1: levels.filter((l) => l === 1).length, skips, main: q('main'), nav: q('nav,[role=navigation]'), header: q('header'), footer: q('footer'), lang: document.documentElement.lang, unnamed, imgsNoAlt, firstFocusable: first?.textContent.trim().slice(0, 30) };
  });
  if (r.h1 !== 1) bad(path, `h1 = ${r.h1}`);
  if (r.skips.length) bad(path, `saltos de encabezado: ${r.skips.slice(0, 3).join('; ')}`);
  if (r.main !== 1) bad(path, `landmarks main = ${r.main}`);
  if (!r.header || !r.footer || !r.nav) bad(path, `landmarks header/nav/footer incompletos`);
  if (r.lang !== 'es-PA') bad(path, `lang = ${r.lang}`);
  if (r.unnamed.length) bad(path, `enlaces/botones sin nombre: ${r.unnamed.slice(0, 2).join(' | ')}`);
  if (r.imgsNoAlt) bad(path, `${r.imgsNoAlt} imágenes sin atributo alt`);
  if (!/saltar/i.test(r.firstFocusable || '')) bad(path, `el primer elemento enfocable no es «Saltar al contenido» (${r.firstFocusable})`);
  // teclado: los primeros 45 Tab deben mostrar un indicador de foco visible
  await p.evaluate(() => document.activeElement?.blur?.());
  const noRing = [];
  for (let i = 0; i < 45; i++) {
    await p.keyboard.press('Tab');
    await p.waitForTimeout(350); // algunos enlaces animan el contorno con transition-all
    const f = await p.evaluate(() => { const e = document.activeElement; if (!e || e === document.body) return null; const c = getComputedStyle(e); const visible = e.offsetParent !== null || c.position === 'fixed'; const ring = (c.outlineStyle !== 'none' && parseFloat(c.outlineWidth) > 0) || (c.boxShadow && c.boxShadow !== 'none'); return { tag: e.tagName, txt: (e.textContent || e.getAttribute('aria-label') || '').trim().slice(0, 25), visible, ring, inert: !!e.closest('[inert]') }; });
    if (!f) continue;
    if (f.inert) bad(path, `foco dentro de zona inert: ${f.tag} ${f.txt}`);
    else if (!f.visible) bad(path, `foco en elemento invisible: ${f.tag} "${f.txt}"`);
    else if (!f.ring) noRing.push(`${f.tag} "${f.txt}"`);
  }
  if (noRing.length) bad(path, `sin indicador de foco (${noRing.length}): ${noRing.slice(0, 3).join(', ')}`);
}
await b.close();
console.log(`\n${PAGES.length} páginas · ${fails} problemas`);
process.exit(fails ? 1 : 0);
