// (Se excluyen los elementos aria-hidden: son numeración decorativa, exenta de contraste por WCAG.)
// Accesibilidad automática con axe-core (reglas WCAG 2.x A/AA). Cubre lo que una máquina puede
// detectar (contraste, nombres, etiquetas, roles); NO sustituye la revisión con lector de pantalla.
//   npx astro preview --port 4610 &   → node scripts/qa-a11y.mjs http://localhost:4610
import { chromium } from 'playwright-core';
import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { rutaChrome } from './chrome.mjs';

const BASE = process.argv[2] || 'http://localhost:4610';
const EXE = rutaChrome() || '/opt/pw-browsers/chromium';
const axeSrc = readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');
// D8: la lista incluye la home, la pilar, /precios/ y las 3 páginas de la ola 1; además, toda página del manifiesto
// cuya fase ya esté publicada (scripts/paginas-comerciales.json) entra sola. /marketing/ se suma por la IA creativa (D52).
const manifiesto = JSON.parse(readFileSync(new URL('./paginas-comerciales.json', import.meta.url), 'utf8'));
const exigidas = manifiesto.paginas.filter((p) => manifiesto.ordenFases.indexOf(p.fase) <= manifiesto.ordenFases.indexOf(manifiesto.faseActual)).map((p) => (p.slug ? `/${p.slug}/` : '/'));
const PAGES = [...new Set(['/', '/marketing/', '/precios/', '/contacto/', '/diseno-web-panama/', '/servicios/diseno-web-corporativo-panama/', '/crecimiento/seo-posicionamiento-web-panama/', '/marketing/google-ads-panama/', '/miami/', '/casos-de-exito/tramitapa/', '/recursos/calculadora-costo-total-web/', '/blog/cuanto-cuesta-diseno-web-panama/', '/nosotros/', '/guias/', '/guias/diseno-web-por-industria/', '/blog/cuanto-cuesta-tienda-online-panama/', '/blog/agencia-diseno-web-miami-en-espanol/', '/blog/', ...exigidas])];
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

// ---- Portada v2 (plan, «Pruebas» → qa-a11y) ----
const anotar = (k, help, path, ejemplos) => {
  const e = seen.get(k) || { help, n: 0, ex: new Set(), pages: new Set() };
  e.n += ejemplos.length; e.pages.add(path); ejemplos.slice(0, 3).forEach((x) => e.ex.add(x)); seen.set(k, e);
};
const axePortada = async (p, etiqueta, excluir = []) => {
  await p.evaluate(axeSrc);
  const r = await p.evaluate((ex) => axe.run({ exclude: [['[aria-hidden="true"]'], ...ex.map((s) => [s])] }, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }), excluir);
  for (const v of r.violations) anotar(`${v.id} [${v.impact}]`, v.help, `/ (${etiqueta})`, v.nodes.map((n) => n.target.join(' ') + ' → ' + (n.any[0]?.message || '').slice(0, 110)));
};
// Contraste calculado de lo que axe no mide: lo aria-hidden (números de etapa, signo «+», dominio de los marcos, texto de
// las maquetas), los pares del héroe (sobre la cuadrícula axe da «incomplete») y el rótulo `td::before` de .ew-cmp en
// compacto. El fondo se compone capa por capa; un degradado cuenta cada parada como fondo posible y vale el peor caso.
const contrastes = () => {
  const rgba = (s) => { const m = (s.match(/[\d.]+/g) || []).map(Number); return m.length >= 3 ? [m[0], m[1], m[2], m[3] ?? 1] : null; };
  const lum = (c) => { const [r, g, b] = c.slice(0, 3).map((v) => { const x = v / 255; return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
  const sobre = (fg, bg) => { const a = fg[3] ?? 1; return [0, 1, 2].map((i) => fg[i] * a + bg[i] * (1 - a)).concat(1); };
  const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
  const fondos = (el) => {
    const capas = [];
    for (let e = el; e; e = e.parentElement) {
      const cs = getComputedStyle(e);
      if (cs.backgroundImage.includes('gradient')) capas.push((cs.backgroundImage.match(/rgba?\([^)]+\)/g) || []).map(rgba));
      const c = rgba(cs.backgroundColor);
      if (c && c[3] > 0) capas.push([c]);
      if (c && c[3] === 1) break;
    }
    let base = [[255, 255, 255, 1]];
    if (capas.length && capas.at(-1).length === 1 && capas.at(-1)[0][3] === 1) base = capas.pop();
    return capas.reverse().reduce((bgs, capa) => bgs.flatMap((bg) => capa.map((c) => sobre(c, bg))), base);
  };
  const minimo = (cs) => { const t = parseFloat(cs.fontSize); return t >= 24 || (t >= 18.66 && Number(cs.fontWeight) >= 700) ? 3 : 4.5; };
  const malos = [];
  const medir = (el, cs, nombre) => {
    const fg = rgba(cs.color);
    const peor = Math.min(...fondos(el).map((bg) => ratio(sobre(fg, bg), bg)));
    if (peor < minimo(cs)) malos.push(`${nombre} «${el.textContent.trim().slice(0, 30)}» ${peor.toFixed(2)}:1 (mínimo ${minimo(cs)})`);
  };
  const conTexto = (el) => [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim()) && el.checkVisibility({ opacityProperty: true, visibilityProperty: true }) && el.getBoundingClientRect().width > 1;
  for (const [nombre, sel] of [['héroe', '.ew-hero *'], ['etapa', '.ew-pasos__n'], ['signo', '.ew-sign'], ['dominio', '.ew-dev__bar span'], ['maqueta', '.pv2-maqueta *']]) {
    for (const el of document.querySelectorAll(sel)) if (conTexto(el) && !el.closest('.sr-only')) medir(el, getComputedStyle(el), nombre);
  }
  for (const td of document.querySelectorAll('.ew-cmp td')) {
    const cs = getComputedStyle(td, '::before');
    if (cs.content && cs.content !== 'none' && cs.content !== 'normal' && cs.display !== 'none' && td.checkVisibility()) medir(td, cs, 'td::before');
  }
  return malos;
};
// Objetivos de 44 px: enlaces de módulo, fuentes y fichas de industria.
const objetivos = () => [...document.querySelectorAll('.pv2-modulo__enlaces a, .ew-src, .pv2-ficha')]
  .filter((a) => a.checkVisibility()).filter((a) => a.getBoundingClientRect().height < 44)
  .map((a) => `${a.className || a.textContent.trim().slice(0, 24)} ${Math.round(a.getBoundingClientRect().height)} px`);

for (const [w, h] of [[390, 844], [768, 1024], [1280, 800]]) {
  const p = await (await b.newContext({ viewport: { width: w, height: h } })).newPage();
  await p.goto(BASE + '/', { waitUntil: 'load' });
  if (w === 768) await axePortada(p, '768');
  const bajos = await p.evaluate(contrastes);
  if (bajos.length) anotar('portada-contraste-calculado', 'Contraste calculado fuera de axe (aria-hidden, héroe, td::before)', `/ (${w})`, bajos);
  const chicos = await p.evaluate(objetivos);
  if (chicos.length) anotar('portada-objetivo-44', 'Objetivos de toque de menos de 44 px', `/ (${w})`, chicos);
  if (w === 1280) {
    // El menú fijo sobre grafito: axe con la página desplazada hasta #seo y hasta #compara. Desplazado, el menú pasa a
    // blanco opaco y axe ya puede medir la marca «elemento web», cuyo « web» va al 60 %: es logotipo, exento de
    // contraste por WCAG 1.4.3, así que se excluye `.brand-tx` y se miden los enlaces del menú.
    for (const id of ['seo', 'compara']) {
      await p.evaluate((i) => document.getElementById(i).scrollIntoView(), id);
      await p.waitForTimeout(500);
      await axePortada(p, `desplazada a #${id}`, ['.brand-tx']);
    }
    // Foco visible dentro del formulario blanco: el botón de envío con su anillo y los campos con el suyo.
    await p.focus('#cf-nombre');
    const campo = await p.evaluate(() => { const cs = getComputedStyle(document.activeElement); return cs.boxShadow !== 'none' || (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 2); });
    if (!campo) anotar('portada-foco', 'Foco visible dentro del formulario blanco', '/ (1280)', ['#cf-nombre sin anillo de foco']);
    for (let i = 0; i < 15 && !(await p.evaluate(() => document.activeElement?.matches('#cform button[type="submit"]'))); i++) await p.keyboard.press('Tab');
    await p.waitForTimeout(300); // el botón lleva transition-colors, que anima outline-color desde el blanco del texto
    const boton = await p.evaluate(() => {
      const el = document.activeElement; const cs = getComputedStyle(el);
      const m = (s) => (s.match(/[\d.]+/g) || []).map(Number);
      const lum = (c) => { const [r, g, b] = c.slice(0, 3).map((v) => { const x = v / 255; return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; }); return 0.2126 * r + 0.7152 * g + 0.0722 * b; };
      const r = (lum([255, 255, 255]) + 0.05) / (lum(m(cs.outlineColor)) + 0.05);
      return { es: el.matches('#cform button[type="submit"]'), ok: cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 2 && r >= 3, detalle: `${cs.outlineStyle} ${cs.outlineWidth} ${cs.outlineColor} (${r.toFixed(2)}:1 sobre blanco)` };
    });
    if (!boton.es || !boton.ok) anotar('portada-foco', 'Foco visible dentro del formulario blanco', '/ (1280)', [`botón de envío: ${boton.es ? boton.detalle : 'el Tab no llegó'}`]);
    // Orden de tabulación: desde el inicio, el Tab llega a cada «Cotizar» y a cada pregunta.
    await p.goto(BASE + '/', { waitUntil: 'load' });
    await p.evaluate(() => { document.querySelectorAll('main a[href="#formulario"][data-cta-loc], #preguntas summary').forEach((el, i) => { if (el.checkVisibility()) el.dataset.qaTab = String(i); }); });
    const faltan = new Set(await p.evaluate(() => [...document.querySelectorAll('[data-qa-tab]')].map((el) => el.dataset.qaTab)));
    const total = faltan.size;
    for (let i = 0; i < 700 && faltan.size; i++) {
      await p.keyboard.press('Tab');
      const k = await p.evaluate(() => document.activeElement?.dataset?.qaTab);
      if (k) faltan.delete(k);
    }
    if (faltan.size) anotar('portada-tab', 'El Tab no llega a cada «Cotizar» y a cada pregunta', '/ (1280)', await p.evaluate((ks) => ks.map((k) => document.querySelector(`[data-qa-tab="${k}"]`).textContent.trim().slice(0, 40)), [...faltan]));
    else console.log(`✓ / (1280): el Tab llega a los ${total} «Cotizar» y preguntas`);
  }
}
await b.close();
for (const [k, e] of seen) console.log(`✗ ${k}: ${e.help}\n   ${e.n} nodos en ${[...e.pages].join(', ')}\n   ${[...e.ex].slice(0, 3).join('\n   ')}`);
console.log(`\n${seen.size} tipos de problema`);
process.exit(seen.size ? 1 : 0);
