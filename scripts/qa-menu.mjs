// QA del megamenú y del menú móvil (D56, PR-A) en un navegador real: teclado, Escape, paneles cerrados fuera del Tab,
// hover solo con ratón, toque, foco atrapado en el menú móvil, cambio de corte y movimiento reducido.
//   npm run build && npx astro preview --port 4610 &   → node scripts/qa-menu.mjs http://localhost:4610
import { chromium } from 'playwright-core';
import { contextoSinGa } from './lib/sin-ga.mjs';
import { rutaChrome } from './chrome.mjs';

const BASE = process.argv[2] || 'http://localhost:4610';
const EXE = process.env.CHROMIUM_PATH || rutaChrome() || '/opt/pw-browsers/chromium';
const RUTA = '/contacto/';
let fallas = 0, total = 0;
const ok = (nombre, cond, extra = '') => { total++; if (cond) console.log(`✓ ${nombre}`); else { fallas++; console.error(`✗ ${nombre}${extra ? `  ${extra}` : ''}`); } };

const b = await chromium.launch({ executablePath: EXE });
const abrir = async (opts) => { const ctx = await contextoSinGa(b, opts); const p = await ctx.newPage(); await p.goto(BASE + RUTA, { waitUntil: 'load' }); return { ctx, p }; };
const estado = (p) => p.evaluate(() => [...document.querySelectorAll('header#nav .nav-trigger')].map((t) => {
  const panel = document.getElementById(t.getAttribute('aria-controls'));
  return { k: t.dataset.menu, exp: t.getAttribute('aria-expanded'), inert: panel.hasAttribute('inert'), vis: getComputedStyle(panel).visibility };
}));
const abierto = async (p) => (await estado(p)).filter((s) => s.exp === 'true' && !s.inert).map((s) => s.k);
const enfocado = (p) => p.evaluate(() => { const a = document.activeElement; return { menu: a?.dataset?.menu ?? null, enPanel: !!a?.closest('[data-panel]'), enMnav: !!a?.closest('#mnav'), id: a?.id ?? '' }; });

console.log(`Escritorio 1280x800 ${RUTA}`);
{
  const { ctx, p } = await abrir({ viewport: { width: 1280, height: 800 } });
  const barra = await p.evaluate(() => ({ h: Math.round(document.getElementById('navpill').getBoundingClientRect().height), v: parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-h')) }));
  ok('la barra mide --nav-h', barra.h === barra.v && barra.v > 0, JSON.stringify(barra));
  ok('con todo cerrado, ningún panel abierto', (await abierto(p)).length === 0);

  // Tab desde el inicio: nunca entra a un panel cerrado.
  let entro = false;
  for (let i = 0; i < 14; i++) { await p.keyboard.press('Tab'); if ((await enfocado(p)).enPanel) entro = true; }
  ok('el Tab no entra a los paneles cerrados', !entro);

  // Teclado: Enter abre, el Tab entra al panel, Escape cierra y devuelve el foco.
  await p.focus('header#nav .nav-trigger[data-menu="marketing"]');
  await p.keyboard.press('Enter');
  await p.waitForTimeout(250);
  ok('Enter abre el panel de Marketing', JSON.stringify(await abierto(p)) === '["marketing"]', JSON.stringify(await estado(p)));
  await p.keyboard.press('Tab');
  ok('el Tab entra al panel abierto', (await enfocado(p)).enPanel);
  await p.keyboard.press('Escape');
  await p.waitForTimeout(250);
  const f = await enfocado(p);
  ok('Escape cierra y devuelve el foco al disparador', (await abierto(p)).length === 0 && f.menu === 'marketing', JSON.stringify(f));

  // Ratón: abre tras la espera, cambia de panel sin cerrar y cierra al salir.
  await p.mouse.move(5, 400);
  await p.hover('header#nav .nav-trigger[data-menu="ia"]');
  await p.waitForTimeout(60);
  ok('el hover no abre antes de 150 ms', (await abierto(p)).length === 0);
  await p.waitForTimeout(250);
  ok('el hover abre Inteligencia artificial', JSON.stringify(await abierto(p)) === '["ia"]');
  await p.hover('header#nav .nav-trigger[data-menu="web"]');
  await p.waitForTimeout(40);
  ok('pasar a Diseño web cambia de panel sin cerrar', JSON.stringify(await abierto(p)) === '["web"]', JSON.stringify(await abierto(p)));
  await p.mouse.move(640, 760);
  await p.waitForTimeout(450);
  ok('salir del menú lo cierra', (await abierto(p)).length === 0);

  // Clic: abre y un segundo clic cierra.
  await p.click('header#nav .nav-trigger[data-menu="recursos"]');
  await p.waitForTimeout(250);
  ok('clic abre Recursos', JSON.stringify(await abierto(p)) === '["recursos"]');
  await p.click('header#nav .nav-trigger[data-menu="recursos"]');
  await p.waitForTimeout(250);
  ok('segundo clic cierra Recursos', (await abierto(p)).length === 0);
  await ctx.close();
}

console.log('Pantalla táctil 1280x800 (un toque no abre y cierra)');
{
  const { ctx, p } = await abrir({ viewport: { width: 1280, height: 800 }, hasTouch: true });
  await p.tap('header#nav .nav-trigger[data-menu="marketing"]');
  await p.waitForTimeout(400);
  ok('un toque deja abierto el panel', JSON.stringify(await abierto(p)) === '["marketing"]', JSON.stringify(await estado(p)));
  await ctx.close();
}

console.log('Movimiento reducido 1280x800');
{
  const { ctx, p } = await abrir({ viewport: { width: 1280, height: 800 }, reducedMotion: 'reduce' });
  const dur = await p.evaluate(() => getComputedStyle(document.querySelector('header#nav [data-panel]')).transitionDuration);
  ok('los paneles abren sin transición', dur.split(',').every((d) => parseFloat(d) === 0), dur);
  await ctx.close();
}

console.log(`Móvil 390x844 ${RUTA}`);
{
  const { ctx, p } = await abrir({ viewport: { width: 390, height: 844 } });
  ok('el botón del menú mide 44x44 o más', await p.evaluate(() => { const r = document.getElementById('mnav-toggle').getBoundingClientRect(); return r.width >= 44 && r.height >= 44; }));
  await p.click('#mnav-toggle');
  await p.waitForTimeout(400);
  const abiertoM = await p.evaluate(() => ({ open: document.getElementById('mnav').dataset.open, mainInert: document.querySelector('main').hasAttribute('inert'), skipInert: document.querySelector('a[href="#contenido"]')?.hasAttribute('inert') }));
  ok('el menú móvil abre y deja inert el contenido y el salto', abiertoM.open === '1' && abiertoM.mainInert && abiertoM.skipInert, JSON.stringify(abiertoM));
  let fuera = false;
  for (let i = 0; i < 60; i++) { await p.keyboard.press('Tab'); const e = await enfocado(p); if (!e.enMnav && e.id !== 'mnav-toggle') { fuera = true; break; } }
  ok('el foco queda atrapado en el menú móvil (Tab)', !fuera);
  fuera = false;
  for (let i = 0; i < 10; i++) { await p.keyboard.press('Shift+Tab'); const e = await enfocado(p); if (!e.enMnav && e.id !== 'mnav-toggle') { fuera = true; break; } }
  ok('el foco queda atrapado en el menú móvil (Shift+Tab)', !fuera);
  await p.keyboard.press('Escape');
  await p.waitForTimeout(400);
  const cerrado = await p.evaluate(() => ({ open: document.getElementById('mnav').dataset.open, foco: document.activeElement?.id, mainInert: document.querySelector('main').hasAttribute('inert') }));
  ok('Escape cierra el menú móvil y devuelve el foco al botón', cerrado.open !== '1' && cerrado.foco === 'mnav-toggle' && !cerrado.mainInert, JSON.stringify(cerrado));

  // Un grupo del acordeón se abre y muestra sus enlaces.
  await p.click('#mnav-toggle');
  await p.waitForTimeout(400);
  await p.click('#mnav [data-grupo="ia"] summary');
  ok('el acordeón abre Inteligencia artificial', await p.evaluate(() => document.querySelector('#mnav [data-grupo="ia"]').open && document.querySelector('#mnav [data-grupo="ia"] a').offsetParent !== null));

  // Agrandar a escritorio con el menú abierto lo cierra y suelta el contenido.
  await p.setViewportSize({ width: 1280, height: 800 });
  await p.waitForTimeout(400);
  const tras = await p.evaluate(() => ({ open: document.getElementById('mnav').dataset.open, mainInert: document.querySelector('main').hasAttribute('inert'), overflow: document.documentElement.style.overflow }));
  ok('al pasar a escritorio el menú móvil se cierra', tras.open !== '1' && !tras.mainInert && tras.overflow === '', JSON.stringify(tras));
  await ctx.close();
}

await b.close();
console.log(`\n${total} comprobaciones · ${fallas} fallos`);
process.exit(fallas ? 1 : 0);
