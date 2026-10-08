// Pruebas del demo /demo/kredit/ (Recupera para Kredit).
// Uso: node scripts/test-demo-kredit.mjs [--shots <carpeta>]
// Requiere Playwright global: NODE_PATH=$(npm root -g) y PLAYWRIGHT_BROWSERS_PATH.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const DEMO = path.join(ROOT, 'demo', 'kredit');
const args = process.argv.slice(2);
const shotsDir = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
const V = '?v=20261007a';

const globalRoot = process.env.NODE_PATH?.split(path.delimiter).find((p) => fs.existsSync(path.join(p, 'playwright'))) || execSync('npm root -g').toString().trim();
const { chromium } = await import(pathToFileURL(path.join(globalRoot, 'playwright', 'index.mjs')).href);

// ---------- mini servidor estático ----------
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.ico': 'image/x-icon', '.txt': 'text/plain' };
const server = http.createServer((req, res) => {
  const u = new URL(req.url, 'http://x');
  let p = path.normalize(path.join(ROOT, decodeURIComponent(u.pathname)));
  if (!p.startsWith(ROOT)) { res.writeHead(403).end(); return; }
  if (fs.existsSync(p) && fs.statSync(p).isDirectory()) p = path.join(p, 'index.html');
  if (!fs.existsSync(p)) { res.writeHead(404).end('no'); return; }
  res.writeHead(200, { 'content-type': TYPES[path.extname(p)] || 'application/octet-stream' });
  fs.createReadStream(p).pipe(res);
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const ORIGIN = `http://127.0.0.1:${server.address().port}`;
const URL0 = `${ORIGIN}/demo/kredit/index.html`;

// ---------- utilidades ----------
let passed = 0;
const failures = [];
function check(cond, name, extra = '') {
  if (cond) { passed++; console.log('  ok  ' + name); }
  else { failures.push(name + (extra ? ` (${extra})` : '')); console.log('  FAIL ' + name + (extra ? ` — ${extra}` : '')); }
}
function parseCsv(text) {
  const rows = [];
  let row = [], cell = '', q = false;
  for (let i = 0; i < text.length; i++) {
    const c = text[i];
    if (q) {
      if (c === '"' && text[i + 1] === '"') { cell += '"'; i++; }
      else if (c === '"') q = false;
      else cell += c;
    } else if (c === '"') q = true;
    else if (c === ',') { row.push(cell); cell = ''; }
    else if (c === '\r' && text[i + 1] === '\n') { row.push(cell); rows.push(row); row = []; cell = ''; i++; }
    else cell += c;
  }
  if (cell || row.length) { row.push(cell); rows.push(row); }
  return rows;
}

// ---------- 1. pruebas unitarias de módulos ----------
console.log('\nMódulos');
const csv = await import(pathToFileURL(path.join(DEMO, 'csv.js')).href + V);
const data = await import(pathToFileURL(path.join(DEMO, 'data.js')).href + V);
const store = await import(pathToFileURL(path.join(DEMO, 'store.js')).href + V);
check(data.money(123456) === 'B/. 1,234.56', 'money(123456) = B/. 1,234.56');
check(data.money(5) === 'B/. 0.05' && data.money(100000000) === 'B/. 1,000,000.00', 'money: centavos y millones');
check(csv.neutralize('=SUM(A1)') === "'=SUM(A1)" && csv.neutralize('+1') === "'+1" && csv.neutralize('-2') === "'-2" && csv.neutralize('@x') === "'@x" && csv.neutralize('ok') === 'ok', 'CSV: neutraliza = + - @');
const sample = csv.toCsv([{ seq: 1, ts: 't', actor: 'a "b"', action: 'x,y', entity: '=HYPERLINK("x")', detail: 'l1\nl2', prev: 'p', hash: 'h' }]);
const parsed = parseCsv(sample.slice(1));
check(sample.charCodeAt(0) === 0xfeff, 'CSV: empieza con BOM');
check(parsed[1][2] === 'a "b"' && parsed[1][3] === 'x,y' && parsed[1][4] === "'=HYPERLINK(\"x\")" && parsed[1][5] === 'l1\nl2', 'CSV: comillas, comas, saltos y fórmulas');
check(csv.csvFilename('2026-10-15') === 'bitacora-kredit-20261015.csv', 'CSV: nombre bitacora-kredit-AAAAMMDD.csv');
const s0 = store.getState();
check(JSON.stringify(store.ruleStats(s0)) === JSON.stringify({ auto: 117, exceptions: 3, total: 120 }), 'Regla por defecto: 117 automáticos / 3 a gerencia');
check(store.verifyChain(s0.audit).ok, 'Bitácora inicial: cadena íntegra');
const tampered = JSON.parse(JSON.stringify(s0.audit)); tampered[2].detail += 'x';
check(!store.verifyChain(tampered).ok, 'Bitácora: detecta alteración');
const rec0 = store.kpis(s0).recoveredCents;
store.dispatch({ type: 'SCENARIO_PAGO' }); store.dispatch({ type: 'SCENARIO_PAGO' });
check(store.kpis(store.getState()).recoveredCents === rec0 + 125000, 'Store: pago idempotente (+B/. 1,250.00 una sola vez)');

// ---------- 2. navegador ----------
const browser = await chromium.launch();
const allowedHosts = new Set([new URL(ORIGIN).host, 'fonts.googleapis.com', 'fonts.gstatic.com']);

async function newPage(width, height = 900, colorScheme = 'light') {
  const ctx = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce', acceptDownloads: true, colorScheme });
  const page = await ctx.newPage();
  const errors = [];
  const badRequests = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  page.on('request', (r) => { const u = new URL(r.url()); if (!['blob:', 'data:'].includes(u.protocol) && !allowedHosts.has(u.host)) badRequests.push(r.url()); });
  // Las fuentes no se descargan en la prueba (sin red): se responden vacías.
  await page.route(/fonts\.(googleapis|gstatic)\.com/, (route) => route.fulfill({ status: 200, contentType: route.request().url().includes('googleapis') ? 'text/css' : 'font/woff2', body: '' }));
  return { ctx, page, errors, badRequests };
}
const go = async (page, hash) => {
  await page.evaluate((h) => { location.hash = h; }, hash);
  await page.waitForFunction((h) => location.hash === h && document.querySelector('#view h1'), hash);
  await page.waitForTimeout(60);
};
const st = (page, expr) => page.evaluate(expr);

const VIEWS = ['#resumen', '#reglas/planes', '#reglas/limites', '#reglas/guiones', '#reglas/bitacora', '#aprobaciones', '#conciliacion', '#conversacion/pago', '#conversacion/disputa', '#conversacion/titular', '#conversacion/voz', '#bandeja', '#cuenta', '#cuenta/K-10482', '#conectores', '#ruta'];

console.log('\nVistas, errores, red y scroll horizontal');
for (const width of [1440, 1024, 390]) {
  const { ctx, page, errors, badRequests } = await newPage(width, width === 390 ? 844 : 900);
  await page.goto(URL0 + '#resumen');
  await page.waitForSelector('#view h1');
  const overflow = [];
  for (const v of VIEWS) {
    await go(page, v);
    if (v === '#bandeja') { await page.click('[data-action="open-case"]'); await page.waitForSelector('#case-panel'); }
    const sw = await page.evaluate(() => ({ sw: document.documentElement.scrollWidth, w: window.innerWidth, bw: document.body.scrollWidth }));
    if (sw.sw > sw.w || sw.bw > sw.w) overflow.push(`${v} (${sw.sw}/${sw.bw}>${sw.w})`);
    if (shotsDir) {
      fs.mkdirSync(shotsDir, { recursive: true });
      await page.screenshot({ path: path.join(shotsDir, `${width}-${v.slice(1).replace(/\//g, '_')}.png`), fullPage: true });
    }
  }
  check(overflow.length === 0, `${width}px: sin scroll horizontal en ${VIEWS.length} vistas`, overflow.join(', '));
  check(errors.length === 0, `${width}px: sin pageerror ni console.error`, errors.slice(0, 3).join(' | '));
  check(badRequests.length === 0, `${width}px: solo peticiones propias y de Google Fonts`, badRequests.slice(0, 3).join(', '));
  if (width === 390) {
    check(await page.isVisible('.tabbar'), '390px: barra inferior visible');
    await page.click('[data-action="more-open"]');
    check(await page.isVisible('#more-sheet'), '390px: hoja "Más" se abre');
    await page.click('#more-sheet a[href="#conectores"]');
    await page.waitForFunction(() => location.hash === '#conectores');
    check(await page.isHidden('#more-sheet'), '390px: hoja "Más" se cierra al navegar');
  }
  if (width === 1024) {
    const w = await page.evaluate(() => document.querySelector('.sidebar').getBoundingClientRect().width);
    check(w === 64, '1024px: riel de iconos de 64px', String(w));
  }
  await ctx.close();
}

console.log('\nModo oscuro');
for (const width of [1440, 390]) {
  const { ctx, page, errors } = await newPage(width, width === 390 ? 844 : 900, 'dark');
  await page.goto(URL0 + '#resumen');
  await page.waitForSelector('#view h1');
  const bg = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  check(bg === 'rgb(11, 18, 32)', `${width}px oscuro: fondo #0b1220 por preferencia del sistema`, bg);
  for (const v of ['#resumen', '#reglas/planes', '#aprobaciones', '#conversacion/pago', '#bandeja']) {
    await go(page, v);
    if (shotsDir) await page.screenshot({ path: path.join(shotsDir, `dark-${width}-${v.slice(1).replace(/\//g, '_')}.png`), fullPage: true });
  }
  // contraste de las burbujas del chat en modo oscuro (el teléfono mantiene colores claros)
  await go(page, '#conversacion/pago');
  while (await page.isEnabled('#chat-step')) await page.click('#chat-step');
  const lowContrast = await page.evaluate(() => {
    const parse = (c) => (c.match(/[\d.]+/g) || []).slice(0, 3).map(Number);
    const lum = ([r, g, b]) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
    const ratio = (a, b) => { const [x, y] = [lum(a), lum(b)].sort((m, n) => n - m); return (x + 0.05) / (y + 0.05); };
    const bad = [];
    for (const el of document.querySelectorAll('.phone-thread .bubble, .phone-thread .bubble *')) {
      if (!el.textContent.trim()) continue;
      let n = el, bgc = 'rgba(0, 0, 0, 0)';
      while (n && (bgc = getComputedStyle(n).backgroundColor) && /rgba\(.*, 0\)$/.test(bgc)) n = n.parentElement;
      const r = ratio(parse(getComputedStyle(el).color), parse(bgc));
      if (r < 4.5) bad.push(`${el.className || el.tagName}: ${r.toFixed(2)}`);
    }
    return bad;
  });
  check(lowContrast.length === 0, `${width}px oscuro: texto del chat con contraste AA`, lowContrast.slice(0, 4).join(' | '));
  await page.click('.topbar [data-action="theme-toggle"]');
  const bg2 = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  check(bg2 === 'rgb(246, 248, 252)', `${width}px: el botón de tema cambia a claro`, bg2);
  check(errors.length === 0, `${width}px oscuro: sin errores`, errors.join(' | '));
  await ctx.close();
}

console.log('\nContraste AA en todas las vistas');
for (const scheme of ['light', 'dark']) {
  const { ctx, page } = await newPage(1440, 900, scheme);
  await page.goto(URL0 + '#resumen');
  await page.waitForSelector('#view h1');
  const fails = [];
  for (const v of VIEWS) {
    await go(page, v);
    if (v.startsWith('#conversacion/') && v !== '#conversacion/voz') { while (await page.isEnabled('#chat-step')) await page.click('#chat-step'); }
    const bad = await page.evaluate(() => {
      const parse = (c) => (c.match(/[\d.]+/g) || []).map(Number);
      const lum = ([r, g, b]) => { const f = (x) => { x /= 255; return x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
      const out = []; const seen = new Set();
      const w = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
      while (w.nextNode()) {
        const t = w.currentNode; if (!t.textContent.trim()) continue;
        const el = t.parentElement; if (seen.has(el)) continue; seen.add(el);
        const cs = getComputedStyle(el);
        if (cs.visibility === 'hidden' || el.closest('[hidden], svg, .sr-only, .visually-hidden')) continue;
        const rc = el.getBoundingClientRect(); if (!rc.width || !rc.height) continue;
        let n = el, bg = null;
        while (n) { const c = getComputedStyle(n); const a = parse(c.backgroundColor); if (c.backgroundImage !== 'none') break; if (a.length >= 3 && (a.length === 3 || a[3] > 0.5)) { bg = a; break; } n = n.parentElement; }
        if (!bg) continue;
        const fg = parse(cs.color);
        if (fg.length === 4 && fg[3] < 1) for (let i = 0; i < 3; i++) fg[i] = fg[i] * fg[3] + bg[i] * (1 - fg[3]);
        const [x, y] = [lum(fg.slice(0, 3)), lum(bg.slice(0, 3))].sort((m, k) => k - m);
        const ratio = (x + 0.05) / (y + 0.05);
        const big = parseFloat(cs.fontSize) >= 24 || (parseFloat(cs.fontSize) >= 18.6 && +cs.fontWeight >= 700);
        if (ratio < (big ? 3 : 4.5)) out.push(`${ratio.toFixed(2)} «${t.textContent.trim().slice(0, 30)}»`);
      }
      return out;
    });
    for (const b of bad) fails.push(`${v} ${b}`);
  }
  check(fails.length === 0, `Modo ${scheme === 'dark' ? 'oscuro' : 'claro'}: texto con contraste AA en ${VIEWS.length} vistas`, fails.slice(0, 5).join(' | '));
  await ctx.close();
}

console.log('\nFlujos');
{
  const { ctx, page, errors, badRequests } = await newPage(1440);
  await page.goto(URL0 + '#resumen');
  await page.waitForSelector('#view h1');
  const badge = () => page.evaluate(() => { const b = document.querySelector('#side-nav [data-badge]'); return b.hidden ? 0 : Number(b.textContent); });

  // título, foco y aria-current
  await go(page, '#aprobaciones');
  check((await page.title()).startsWith('Aprobaciones · Demo · Recupera'), 'document.title por vista');
  check(await page.evaluate(() => document.activeElement && document.activeElement.tagName === 'H1'), 'Foco al h1 al cambiar de vista');
  check(await page.evaluate(() => document.querySelector('#side-nav [data-nav="aprobaciones"]').getAttribute('aria-current') === 'page'), 'aria-current en el menú');
  check(await page.isVisible('.demo-band') && (await page.textContent('.demo-band')).includes('Datos ficticios de demostración'), 'Banda "Datos ficticios de demostración"');
  check(await page.evaluate(() => document.querySelector('meta[name="robots"]').content === 'noindex, nofollow'), 'meta robots noindex, nofollow');

  // regla → 117/3 → aprobaciones
  await go(page, '#reglas/planes');
  check((await page.textContent('#rule-n')) === '117' && (await page.textContent('#rule-m')) === '3', 'Reglas: 117 / 3 por defecto');
  check(await badge() === 3, 'Badge de aprobaciones = 3');
  await go(page, '#aprobaciones');
  check((await page.$$('.approval')).length === 3, 'Aprobaciones muestra exactamente 3 tarjetas');
  await go(page, '#reglas/planes');
  await page.$eval('#rule-amount', (el) => { el.value = '250000'; el.dispatchEvent(new Event('input', { bubbles: true })); });
  const nLive = Number(await page.textContent('#rule-n'));
  const mLive = Number(await page.textContent('#rule-m'));
  check(nLive < 117 && nLive + mLive === 120, 'Reglas: recalcula en vivo al mover el monto', `${nLive}/${mLive}`);
  await page.$eval('#rule-amount', (el) => el.dispatchEvent(new Event('change', { bubbles: true })));
  await page.uncheck('#rule-level-C');
  const n2 = Number(await page.textContent('#rule-n')), m2 = Number(await page.textContent('#rule-m'));
  check(n2 < nLive && m2 > mLive, 'Reglas: quitar nivel C sube las excepciones', `${n2}/${m2}`);
  check(await badge() === m2, 'Badge sigue a la regla', `${await badge()} vs ${m2}`);
  await go(page, '#aprobaciones');
  check((await page.$$('.approval')).length === m2, 'Aprobaciones muestra las M excepciones de la regla editada', String(m2));
  check(await st(page, () => window.__recupera.getState().audit.some((e) => e.action === 'Regla de planes actualizada')), 'Cambio de regla queda en bitácora');
  await go(page, '#reglas/planes');
  await page.click('[data-action="rule-template"][data-id="recomendada"]');
  check((await page.textContent('#rule-n')) === '117' && (await page.textContent('#rule-m')) === '3', 'Plantilla Recomendada vuelve a 117 / 3');

  // aprobar decrementa el badge; deshacer lo restaura
  await go(page, '#aprobaciones');
  await page.click('.approval [data-decision="aprobado"]');
  check(await badge() === 2, 'Aprobar decrementa el badge (3 → 2)');
  check((await page.$$('.approval')).length === 2, 'La tarjeta aprobada sale de pendientes');
  check(await st(page, () => window.__recupera.getState().audit.at(-1).action === 'Plan aprobado (excepción)'), 'Aprobación queda en bitácora');
  await page.click('.toast-undo');
  check(await badge() === 3, 'Deshacer desde el toast restaura el badge');
  await page.click('.approval [data-decision="rechazado"]');
  check(await badge() === 2, 'Rechazar también decrementa el badge');

  // pago por WhatsApp: recuperado sube una sola vez
  const rec0b = await st(page, () => window.__recupera.kpis().recoveredCents);
  await go(page, '#conversacion/pago');
  const stepAll = async () => { while (await page.isEnabled('#chat-step')) await page.click('#chat-step'); };
  await stepAll();
  const rec1 = await st(page, () => window.__recupera.kpis().recoveredCents);
  check(rec1 - rec0b === 125000, 'Guion de pago: recuperado +B/. 1,250.00', String(rec1 - rec0b));
  await page.click('#chat-reset');
  await stepAll();
  await page.click('#chat-reset');
  await page.click('#chat-play');
  await page.waitForFunction(() => document.querySelector('#chat-progress').textContent.startsWith('11 de 11'), null, { timeout: 15000 });
  const rec2 = await st(page, () => window.__recupera.kpis().recoveredCents);
  check(rec2 === rec1, 'Guion de pago repetido (paso a paso y reproducir): no vuelve a sumar');
  check(await st(page, () => window.__recupera.getState().payments.filter((p) => p.id === 'PG-WA-10482').length === 1), 'Un solo pago registrado para el guion');
  check(await st(page, () => window.__recupera.getState().accounts['K-10482'].next.every((n) => n.status === 'cancelado')), 'Cuenta pagada: próximos contactos cancelados');
  await go(page, '#resumen');
  check((await page.textContent('#kpi-recovered')).trim() === data.money(rec1), 'Resumen muestra el recuperado actualizado', await page.textContent('#kpi-recovered'));

  // disputa → caso en bandeja y contactos pausados
  await go(page, '#conversacion/disputa');
  await stepAll();
  const disp = await st(page, () => { const s = window.__recupera.getState(); return { cases: s.cases.filter((c) => c.id === 'C-2041').length, paused: s.accounts['K-10517'].contactsPaused, next: s.accounts['K-10517'].next.every((n) => n.status === 'cancelado'), status: s.accounts['K-10517'].status }; });
  check(disp.cases === 1 && disp.paused && disp.next && disp.status === 'disputa', 'Disputa: crea caso C-2041 y pausa contactos', JSON.stringify(disp));
  await page.click('#chat-reset');
  await stepAll();
  check(await st(page, () => window.__recupera.getState().cases.filter((c) => c.id === 'C-2041').length === 1), 'Disputa repetida: no duplica el caso');
  await go(page, '#bandeja');
  check(await page.isVisible('[data-focus="case-C-2041"]'), 'El caso aparece en la bandeja');
  await page.click('[data-focus="case-C-2041"]');
  check(await page.isVisible('#case-panel') && (await page.textContent('#case-panel')).includes('Resumen del asistente'), 'Panel del caso con resumen del asistente');
  await page.selectOption('#assign-C-2041', 'Ana Ríos');
  await page.click('[data-action="case-assign"]');
  check(await st(page, () => window.__recupera.getState().cases.find((c) => c.id === 'C-2041').owner === 'Ana Ríos'), 'Asignar caso cambia el responsable');
  await page.selectOption('#f-motive', 'legal');
  check((await page.$$('.cases tbody tr')).length === 1, 'Filtro por motivo');
  await page.selectOption('#f-owner', 'Melissa Cedeño');
  check(await page.isVisible('[data-action="clear-filters"]'), 'Estado vacío con "Quitar filtros"');
  await page.click('[data-action="clear-filters"]');

  // no soy el titular
  await go(page, '#conversacion/titular');
  await stepAll();
  check(await st(page, () => window.__recupera.getState().accounts['K-10533'].status === 'no_titular'), 'No soy el titular: detiene contactos');
  const thread = await page.textContent('#thread');
  check(!/Carmen|980|B\/\./.test(thread), 'No soy el titular: no revela nombre ni monto');

  // voz
  await go(page, '#conversacion/voz');
  while (await page.isEnabled('#voice-next')) await page.click('#voice-next');
  check(await st(page, () => window.__recupera.getState().accounts['K-10560'].promises.length === 1), 'Llamada de voz: registra la promesa una vez');

  // conciliación
  await go(page, '#conciliacion');
  const av0 = await st(page, () => window.__recupera.kpis().messagesAvoided);
  await page.click('#btn-simulate');
  const av1 = await st(page, () => window.__recupera.kpis().messagesAvoided);
  check(av1 === av0 + 1, 'Simular pago entrante: +1 mensaje evitado');
  check((await page.textContent('#kpi-avoided')).trim() === String(av1), 'KPI de mensajes evitados se actualiza');
  await page.click('[data-action="resolve-payment"]');
  check(await st(page, () => window.__recupera.getState().payments.find((p) => p.id === 'PG-88431').status === 'conciliado'), 'Pago sin coincidencia se asocia a la cuenta sugerida');

  // bitácora: integridad y CSV
  await go(page, '#reglas/bitacora');
  await page.click('#btn-verify');
  check((await page.textContent('#verify-result')).includes('Cadena íntegra'), 'Verificar integridad: cadena íntegra');
  const [dl] = await Promise.all([page.waitForEvent('download'), page.click('#btn-export')]);
  const file = path.join(os.tmpdir(), 'kredit-bitacora-test.csv');
  await dl.saveAs(file);
  const buf = fs.readFileSync(file);
  const text = buf.toString('utf8');
  const rows = parseCsv(text.slice(1));
  const auditLen = await st(page, () => window.__recupera.getState().audit.length);
  check(dl.suggestedFilename() === 'bitacora-kredit-20261015.csv', 'CSV: nombre de archivo', dl.suggestedFilename());
  check(buf[0] === 0xef && buf[1] === 0xbb && buf[2] === 0xbf, 'CSV descargado: BOM UTF-8');
  check(rows[0].join(',') === 'secuencia,fecha_hora,actor,accion,entidad,detalle,hash_anterior,hash', 'CSV descargado: cabecera');
  check(rows.length === auditLen + 1 && rows.every((r) => r.length === 8), 'CSV descargado: una fila por registro, 8 columnas', `${rows.length} vs ${auditLen + 1}`);
  let chainOk = true;
  for (let i = 2; i < rows.length; i++) if (rows[i][6] !== rows[i - 1][7]) chainOk = false;
  check(chainOk && /^[0-9a-f]{64}$/.test(rows[1][7]), 'CSV descargado: hash encadenado coherente');
  check(text.includes('Plan aprobado (excepción)') && text.includes('Caso creado en bandeja') && text.includes('Pago conciliado'), 'CSV descargado: incluye decisiones, disputa y pagos');

  // atrás del navegador
  await go(page, '#conectores');
  await go(page, '#ruta');
  await page.goBack();
  await page.waitForFunction(() => location.hash === '#conectores');
  check((await page.textContent('#view h1')).includes('Conectores'), 'Botón atrás del navegador');

  // recorrido guiado
  await page.click('.topbar [data-action="tour-start"]');
  const hashes = [];
  for (let i = 0; i < 6; i++) {
    await page.waitForTimeout(120);
    hashes.push(await page.evaluate(() => location.hash));
    if (i === 0) check(await page.isVisible('#tour') && (await page.textContent('#tour-step')).includes('paso 1 de 6'), 'Recorrido guiado: globo visible, paso 1 de 6');
    await page.click('[data-action="tour-next"]');
  }
  check(hashes.join(' ') === '#resumen #reglas/planes #aprobaciones #conciliacion #conversacion/pago #reglas/bitacora', 'Recorrido sigue el guion de 7 minutos', hashes.join(' '));
  check(await page.isHidden('#tour'), 'Recorrido termina en el paso 6');

  // persistencia y reinicio
  await page.reload();
  await page.waitForSelector('#view h1');
  check(await st(page, () => window.__recupera.getState().scenarios.pago !== undefined), 'Estado se conserva al recargar (sessionStorage)');
  await page.click('.topbar [data-action="reset-demo"]');
  await page.waitForFunction(() => location.hash === '#resumen');
  const afterReset = await st(page, () => { const k = window.__recupera.kpis(); return { rec: k.recoveredCents, pending: k.pending, cases: window.__recupera.getState().cases.length }; });
  check(afterReset.rec === 18642350 && afterReset.pending === 3 && afterReset.cases === 5, 'Reiniciar demo vuelve al estado inicial', JSON.stringify(afterReset));

  check(errors.length === 0, 'Flujos: sin pageerror ni console.error', errors.slice(0, 3).join(' | '));
  check(badRequests.length === 0, 'Flujos: solo peticiones propias y de Google Fonts', badRequests.join(', '));
  await ctx.close();
}

// determinismo: dos sesiones nuevas generan el mismo estado
{
  const a = await newPage(1024); await a.page.goto(URL0); await a.page.waitForSelector('#view h1');
  const b = await newPage(1024); await b.page.goto(URL0); await b.page.waitForSelector('#view h1');
  const ja = await a.page.evaluate(() => JSON.stringify(window.__recupera.getState()));
  const jb = await b.page.evaluate(() => JSON.stringify(window.__recupera.getState()));
  check(ja === jb, 'Determinismo: dos sesiones nuevas, mismo estado');
  await a.ctx.close(); await b.ctx.close();
}

// peso
const weight = fs.readdirSync(DEMO).reduce((t, f) => t + fs.statSync(path.join(DEMO, f)).size, 0);
check(weight < 400 * 1024, 'Peso total < 400 KB sin fuentes', `${Math.round(weight / 1024)} KB`);

await browser.close();
server.close();
console.log(`\n${passed} correctas, ${failures.length} fallidas`);
if (failures.length) { console.log('Fallidas:\n- ' + failures.join('\n- ')); process.exit(1); }
