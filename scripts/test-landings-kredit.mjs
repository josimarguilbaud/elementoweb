// Pruebas de las landings de Kredit (public/demo/kredit-landings/).
// Uso: node scripts/test-landings-kredit.mjs [--shots <carpeta>] [--live-fonts]
//   --shots       guarda capturas (1440 y 390: página completa, primer pantallazo y resultados)
//   --live-fonts  descarga las fuentes reales de Google (por defecto se responden vacías)
// Requiere Playwright global: NODE_PATH=$(npm root -g) y PLAYWRIGHT_BROWSERS_PATH.
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const DIR = path.join(ROOT, 'demo', 'kredit-landings');
const V = '?v=20261011a';
const args = process.argv.slice(2);
const shotsDir = args.includes('--shots') ? args[args.indexOf('--shots') + 1] : null;
const liveFonts = args.includes('--live-fonts');

const globalRoot = process.env.NODE_PATH?.split(path.delimiter).find((p) => fs.existsSync(path.join(p, 'playwright'))) || execSync('npm root -g').toString().trim();
const { chromium } = await import(pathToFileURL(path.join(globalRoot, 'playwright', 'index.mjs')).href);

// ---------------------------------------------------------------- utilidades
let passed = 0;
const failures = [];
function check(cond, name, extra = '') {
  if (cond) { passed++; console.log('  ok   ' + name); }
  else { failures.push(name + (extra ? ` (${extra})` : '')); console.log('  FAIL ' + name + (extra ? ` — ${extra}` : '')); }
}
const near = (a, b, eps = 0.005) => Math.abs(a - b) <= eps;
const cuotaRef = (P, anual, n) => { const r = anual / 100 / 12; return r === 0 ? P / n : (P * r) / (1 - (1 + r) ** -n); };
const fmt = (x) => 'B/. ' + x.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

// ---------------------------------------------------------------- 1. estático
console.log('\nArchivos y contenido');
const PAGES = {
  index: path.join(DIR, 'index.html'),
  prestamos: path.join(DIR, 'prestamos', 'index.html'),
  empresas: path.join(DIR, 'empresas', 'index.html'),
};
const BANNED = [/adelanto de (salario|n[óo]mina)/i, /anticipo de sueldo/i, /pr[ée]stamo de d[íi]a de pago/i, /aprobad[oa]s?\b/i, /garantizad[oa]s?\b/i, /sin revisar (tu |su )?historial/i];
const assetsText = fs.readdirSync(path.join(DIR, 'assets')).filter((f) => /\.(js|css)$/.test(f)).map((f) => [f, fs.readFileSync(path.join(DIR, 'assets', f), 'utf8')]);
for (const [name, file] of Object.entries(PAGES)) {
  const html = fs.readFileSync(file, 'utf8');
  check(/<meta name="robots" content="noindex, nofollow">/.test(html), `${name}: meta robots noindex, nofollow`);
  check(html.includes('Vista previa · Elemento Web — formulario en modo demo, no se envían datos'), `${name}: banda de vista previa`);
  check(!/\son[a-z]+\s*=\s*["']/i.test(html) && !/\sstyle\s*=\s*["']/i.test(html), `${name}: sin onclick/style en línea`);
  const localRefs = [...html.matchAll(/(?:href|src)="((?:\.\.\/)?assets\/[^"]+\.(?:css|js))(\?[^"]*)?"/g)];
  check(localRefs.length > 0 && localRefs.every((m) => m[2] === V), `${name}: CSS/JS con ${V}`, localRefs.filter((m) => m[2] !== V).map((m) => m[1]).join(', '));
  const resources = [...html.matchAll(/<(?:link|script|img|source|iframe)\b[^>]*\s(?:href|src)="(https?:[^"]+)"/g)].map((m) => m[1]);
  check(resources.every((u) => /^https:\/\/fonts\.(googleapis|gstatic)\.com(\/|$)/.test(u)), `${name}: recursos externos solo de Google Fonts`, resources.join(', '));
  const text = html.replace(/<script[\s\S]*?<\/script>|<style[\s\S]*?<\/style>/g, '');
  const bad = BANNED.filter((re) => re.test(text));
  check(bad.length === 0, `${name}: sin términos prohibidos (adelanto de salario, aprobado, garantizado…)`, bad.join(' '));
  check(!/unsplash|pexels|images\.|cdn\./i.test(html), `${name}: sin imágenes enlazadas a terceros`);
}
for (const [f, txt] of assetsText) {
  const bad = BANNED.filter((re) => re.test(txt));
  check(bad.length === 0, `assets/${f}: sin términos prohibidos`, bad.join(' '));
}
{
  const css = fs.readFileSync(path.join(DIR, 'assets', 'base.css'), 'utf8');
  check(/reemplazar con la identidad de Kredit/.test(css) && /--blue:\s*#1559ED/i.test(css) && /--navy:\s*#091845/i.test(css), 'base.css: tokens de marca en :root documentados');
  const p = fs.readFileSync(PAGES.prestamos, 'utf8');
  check(/data-endpoint=""/.test(p) && /data-endpoint=""/.test(fs.readFileSync(PAGES.empresas, 'utf8')), 'formularios con data-endpoint vacío (modo demo)');
  check((p.match(/Información importante del crédito/g) || []).length >= 2, 'préstamos: bloque "Información importante del crédito" junto a la calculadora y al pie');
  for (const k of ['Plazo mínimo y máximo', 'Tasa de interés efectiva anual máxima', 'Ejemplo representativo', 'Comisiones', 'CREDU HOLDINGS', 'Licencia', 'Dirección física']) {
    check(p.includes(k), `préstamos: divulgación incluye "${k}"`);
  }
  check(p.includes('Kredit nunca te pedirá pagos por adelantado'), 'préstamos: aviso antifraude');
}

// ---------------------------------------------------------------- 2. módulos
console.log('\nMódulos (Node)');
const calc = await import(pathToFileURL(path.join(DIR, 'assets', 'calc.js')).href + V);
const form = await import(pathToFileURL(path.join(DIR, 'assets', 'form.js')).href + V);
const b2c = await import(pathToFileURL(path.join(DIR, 'assets', 'prestamos.js')).href + V);
const b2b = await import(pathToFileURL(path.join(DIR, 'assets', 'empresas.js')).href + V);
check(near(calc.cuotaMensual(5000, 24, 36), cuotaRef(5000, 24, 36), 1e-9) && calc.formatMoney(calc.cuotaMensual(5000, 24, 36)) === 'B/. 196.16', 'cuota 5,000 · 24 % · 36 meses = B/. 196.16');
check(calc.cuotaMensual(1200, 0, 12) === 100, 'cuota con tasa 0 = monto / plazo');
check(calc.formatMoney(1234.56) === 'B/. 1,234.56' && calc.formatMoney(1000000) === 'B/. 1,000,000.00', 'formato B/. 1,234.56');
check(calc.parseMoney('B/. 1,234.50') === 1234.5 && calc.parseMoney('5000') === 5000, 'parseMoney');
const e = calc.escenario(3000, 18, 24);
check(e.cuota === 149.77 && near(e.total, 149.77 * 24, 1e-9) && e.quincena === 74.89, 'escenario: total = cuota mostrada × plazo', JSON.stringify(e));
for (const c of ['8-123-456', '8-AV-12-345', '1PI-12-345', 'PE-12-345', 'E-8-123456', 'N-19-1234', '13-1234-12345', ' 8-123-456 ']) check(form.isValidCedula(c), `cédula válida: "${c}"`);
for (const c of ['123', '8-123', '14-1-1', 'X-1-1', '8_123_456', '']) check(!form.isValidCedula(c), `cédula inválida: "${c}"`);
check(form.maskCedula('8-123-456') === '8-***-*56' && form.maskCedula('PE-12-345') === 'PE-**-*45', 'cédula enmascarada (8-***-*56)');
check(form.isMobilePA('+507 6123-4567') && form.isMobilePA('61234567') && !form.isMobilePA('2123-4567') && !form.isMobilePA('5551234'), 'celular panameño 6xxx-xxxx');
check(form.toE164PA('6123-4567') === '+50761234567', 'celular en E.164');
check(form.isFreeEmail('rrhh@gmail.com') && form.isFreeEmail('x@Hotmail.com') && !form.isFreeEmail('rrhh@empresa.com.pa'), 'correo gratuito vs corporativo');
check(form.isValidRuc('155770767-2-2025 DV9') && form.isValidRuc('8-123-456 DV 12') && !form.isValidRuc('12'), 'RUC panameño');
{
  const attr = form.buildAttribution('?utm_source=google&utm_medium=cpc&gclid=G1', null, { landing: 'x' });
  check(attr.utm_source === 'google' && attr.gclid === 'G1' && attr.fbclid === null && attr.landing === 'x', 'atribución desde la URL');
  const keep = form.buildAttribution('', { utm_source: 'meta', fbclid: 'F1' }, {});
  check(keep.utm_source === 'meta' && keep.fbclid === 'F1', 'atribución guardada en la sesión');
}
{
  const base = { monto: 5000, salario_neto: 1200, cuota_estimada: 196.16, antiguedad: '2-5a' };
  const s1 = form.computeScore(b2c.config.score, { ...base, empresa_verificada: true, empresa_afiliada: 'si' });
  const s2 = form.computeScore(b2c.config.score, { ...base, empresa_verificada: false, empresa_afiliada: 'no' });
  const s3 = form.computeScore(b2c.config.score, { monto: 15000, salario_neto: 300, cuota_estimada: 2600, antiguedad: 'menos-6m', empresa_verificada: false, empresa_afiliada: 'no' });
  check(s1.tier === 'calificado' && s1.score === 100, 'B2C: afiliada + perfil sólido → Calificado (100)', JSON.stringify(s1));
  check(s2.tier === 'revisar' && s2.score === 60, 'B2C: sin empresa afiliada, buen perfil → Revisar (60)', JSON.stringify(s2));
  check(s3.tier === 'no_calificado', 'B2C: perfil débil → No calificado', JSON.stringify(s3));
  check(b2c.config.soloEmpresasAfiliadas === false, 'B2C: regla soloEmpresasAfiliadas = false por defecto');
  check(b2c.isAffiliatedCompany('empresa afiliada demo sa') && !b2c.isAffiliatedCompany('Otra Empresa'), 'B2C: lista de empresas afiliadas (ejemplo) con nombre normalizado');
  const t1 = form.computeScore(b2b.config.score, { colaboradores: '100-249', cargo: 'rrhh', correo_corporativo: true, sector: 'comercio', inicio: 'este-mes' });
  const t2 = form.computeScore(b2b.config.score, { colaboradores: '1-19', cargo: 'otro', correo_corporativo: false, sector: 'otro', inicio: 'explorando' });
  check(t1.tier === 'calificado' && t1.score === 100, 'B2B: 100+ colaboradores, RR. HH., correo corporativo → Calificado');
  check(t2.tier === 'no_calificado' && t2.score === 0, 'B2B: empresa pequeña sin decisor → No calificado');
}

// ---------------------------------------------------------------- 3. navegador
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.json': 'application/json' };
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
const URLS = {
  index: `${ORIGIN}/demo/kredit-landings/index.html`,
  prestamos: `${ORIGIN}/demo/kredit-landings/prestamos/index.html`,
  empresas: `${ORIGIN}/demo/kredit-landings/empresas/index.html`,
};
const browser = await chromium.launch();
const allowedHosts = new Set([new URL(ORIGIN).host, 'fonts.googleapis.com', 'fonts.gstatic.com']);
if (shotsDir) fs.mkdirSync(shotsDir, { recursive: true });

async function newPage(width, { height, reducedMotion = 'reduce' } = {}) {
  const ctx = await browser.newContext({ viewport: { width, height: height || (width < 500 ? 844 : 900) }, reducedMotion, ignoreHTTPSErrors: liveFonts });
  await ctx.addInitScript(() => {
    window.__net = { fetch: 0, beacon: 0, xhr: 0 };
    const f = window.fetch;
    window.fetch = function (...a) { window.__net.fetch++; return f.apply(this, a); };
    if (navigator.sendBeacon) { const sb = navigator.sendBeacon.bind(navigator); navigator.sendBeacon = (...a) => { window.__net.beacon++; return sb(...a); }; }
    const op = XMLHttpRequest.prototype.open;
    XMLHttpRequest.prototype.open = function (...a) { window.__net.xhr++; return op.apply(this, a); };
  });
  const page = await ctx.newPage();
  const errors = [];
  const requests = [];
  page.on('pageerror', (er) => errors.push('pageerror: ' + er.message));
  // Con --live-fonts, los reintentos del proxy hacia Google Fonts no son fallas de la página.
  page.on('console', (m) => { if (m.type() === 'error' && !(liveFonts && /Failed to load resource/.test(m.text()))) errors.push('console: ' + m.text()); });
  page.on('request', (r) => requests.push(r.url()));
  if (!liveFonts) {
    await page.route(/fonts\.(googleapis|gstatic)\.com/, (route) => route.fulfill({ status: 200, contentType: route.request().url().includes('googleapis') ? 'text/css' : 'font/woff2', body: '' }));
  }
  return { ctx, page, errors, requests };
}
const badHosts = (requests) => requests.filter((u) => { const x = new URL(u); return !['data:', 'blob:'].includes(x.protocol) && !allowedHosts.has(x.host); });

// --- auditoría de contraste (mini axe, con degradados) ---
const contrastAudit = () => {
  const parse = (c) => {
    const m = String(c).match(/rgba?\(([^)]+)\)/);
    if (!m) return null;
    const p = m[1].split(/[\s,/]+/).filter(Boolean).map(Number);
    return { r: p[0], g: p[1], b: p[2], a: p.length > 3 ? p[3] : 1 };
  };
  const lum = ({ r, g, b }) => { const f = (v) => { v /= 255; return v <= 0.03928 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4; }; return 0.2126 * f(r) + 0.7152 * f(g) + 0.0722 * f(b); };
  const over = (top, bot) => ({ r: top.r * top.a + bot.r * (1 - top.a), g: top.g * top.a + bot.g * (1 - top.a), b: top.b * top.a + bot.b * (1 - top.a), a: 1 });
  const ratio = (a, b) => { const x = lum(a), y = lum(b); return (Math.max(x, y) + 0.05) / (Math.min(x, y) + 0.05); };
  const gradient = (el, cs) => {
    const bi = cs.backgroundImage;
    if (!bi || bi === 'none') return null;
    if (/url\(/.test(bi) && !/^url\("data:image\/svg/.test(bi)) return { unknown: true };
    const m = bi.match(/linear-gradient\((.*)\)$/);
    if (!m) return null;
    const body = m[1];
    const ang = body.match(/^\s*(-?[\d.]+)deg/);
    const theta = ((ang ? Number(ang[1]) : 180) * Math.PI) / 180;
    const stops = [...body.matchAll(/(rgba?\([^)]*\))\s*([\d.]+%)?/g)].map((s, i, arr) => ({ c: parse(s[1]), pos: s[2] ? parseFloat(s[2]) / 100 : i / Math.max(1, arr.length - 1) }));
    if (stops.length < 2) return null;
    const rect = el.getBoundingClientRect();
    return {
      at(px, py) {
        const W = rect.width, H = rect.height;
        const L = Math.abs(W * Math.sin(theta)) + Math.abs(H * Math.cos(theta));
        const cx = rect.left + W / 2, cy = rect.top + H / 2;
        let t = ((px - cx) * Math.sin(theta) - (py - cy) * Math.cos(theta)) / L + 0.5;
        t = Math.min(1, Math.max(0, t));
        for (let i = 1; i < stops.length; i++) {
          if (t <= stops[i].pos) {
            const a = stops[i - 1], b = stops[i];
            const k = b.pos === a.pos ? 1 : (t - a.pos) / (b.pos - a.pos);
            const mix = (x, y) => x + (y - x) * k;
            const ca = a.c, cb = b.c;
            return over({ r: mix(ca.r, cb.r), g: mix(ca.g, cb.g), b: mix(ca.b, cb.b), a: mix(ca.a, cb.a) }, { r: 255, g: 255, b: 255, a: 1 });
          }
        }
        return over(stops[stops.length - 1].c, { r: 255, g: 255, b: 255, a: 1 });
      },
    };
  };
  // Fondo efectivo de un elemento en un punto: capas desde el más cercano hasta un fondo opaco.
  const bgAt = (el, px, py) => {
    const layers = [];
    let n = el;
    while (n && n.nodeType === 1) {
      const cs = getComputedStyle(n);
      const g = gradient(n, cs);
      if (g && g.unknown) return null;
      const bc = parse(cs.backgroundColor);
      if (g) { layers.push({ base: g.at(px, py) }); break; }
      if (bc && bc.a > 0) { layers.push({ color: bc }); if (bc.a >= 1) break; }
      n = n.parentElement;
    }
    let col = { r: 255, g: 255, b: 255, a: 1 };
    for (let i = layers.length - 1; i >= 0; i--) col = layers[i].base ? layers[i].base : over(layers[i].color, col);
    return col;
  };
  const opacityOf = (el) => { let o = 1; for (let n = el; n && n.nodeType === 1; n = n.parentElement) o *= Number(getComputedStyle(n).opacity); return o; };
  const visible = (el) => el.checkVisibility ? el.checkVisibility({ opacityProperty: true, visibilityProperty: true, checkOpacity: true, checkVisibilityCSS: true }) : true;
  const fails = [];
  let checked = 0;
  const audit = (el, rects, fgColor, label) => {
    const cs = getComputedStyle(el);
    const size = parseFloat(cs.fontSize);
    const weight = Number(cs.fontWeight) || 400;
    const large = size >= 24 || (size >= 18.66 && weight >= 700);
    const need = large ? 3 : 4.5;
    const op = opacityOf(el);
    let worst = Infinity, worstBg = null;
    for (const r of rects) {
      for (const [x, y] of [[r.left + 1, r.top + 1], [r.right - 1, r.top + 1], [r.left + 1, r.bottom - 1], [r.right - 1, r.bottom - 1]]) {
        const bg = bgAt(el, x, y);
        if (!bg) return;
        const fg = over({ ...fgColor, a: fgColor.a * op }, bg);
        const rt = ratio(fg, bg);
        if (rt < worst) { worst = rt; worstBg = bg; }
      }
    }
    checked++;
    if (worst < need) fails.push(`${label.slice(0, 48)} → ${worst.toFixed(2)} < ${need} (bg rgb(${Math.round(worstBg.r)},${Math.round(worstBg.g)},${Math.round(worstBg.b)}), ${el.tagName.toLowerCase()}.${String(el.className).split(' ')[0]})`);
  };
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = tw.nextNode(); t; t = tw.nextNode()) {
    if (!t.textContent.trim()) continue;
    const el = t.parentElement;
    if (!el || el.closest('script, style, noscript, option, svg, .sprite')) continue;
    if (!visible(el)) continue;
    const range = document.createRange();
    range.selectNodeContents(t);
    const rects = [...range.getClientRects()].filter((r) => r.width > 2 && r.height > 2 && r.bottom > 0 && r.right > 0 && r.left < innerWidth);
    if (!rects.length) continue;
    const fg = parse(getComputedStyle(el).color);
    audit(el, rects, fg, t.textContent.trim());
  }
  for (const el of document.querySelectorAll('input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=hidden]), select, textarea')) {
    if (!visible(el) || el.closest('.hp')) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4) continue;
    const inner = [new DOMRect(r.left + 12, r.top + r.height / 2 - 6, Math.min(80, r.width - 24), 12)];
    audit(el, inner, parse(getComputedStyle(el).color), `${el.name || el.id} (valor)`);
    if (el.placeholder && !el.value) audit(el, inner, parse(getComputedStyle(el, '::placeholder').color), `${el.name || el.id} (placeholder)`);
  }
  return { fails, checked };
};
async function contrast(page, label, { top = true } = {}) {
  if (top) await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(50);
  const { fails, checked } = await page.evaluate(contrastAudit);
  check(fails.length === 0 && checked > 8, `contraste AA: ${label} (${checked} textos)`, fails.slice(0, 6).join(' | '));
}

async function noOverflow(page) {
  return page.evaluate(() => {
    const vw = document.documentElement.clientWidth;
    const over = [];
    if (document.documentElement.scrollWidth > vw) over.push(`documento ${document.documentElement.scrollWidth}>${vw}`);
    return over;
  });
}

// --- flujos ---
const B2C_DATA = { nombre: 'María Pérez Gómez', cedula: '8-123-456', celular: '6123-4567', correo: 'maria.perez@example.com' };
async function b2cStep1(page, { monto = '5000', plazo = '36', tasa = '24' } = {}) {
  await page.fill('#f-monto', monto);
  await page.click(`label[for="pl-${plazo}"]`);
  await page.fill('#f-tasa', tasa);
  await page.click('[data-next]');
  await page.waitForSelector('[data-step="trabajo"]:not([hidden])');
}
async function b2cStep2(page, { empresa = null, afiliada = null, salario = '1200', antiguedad = '2-5a', proposito = 'estudios' } = {}) {
  if (!empresa) {
    await page.fill('#f-empresa', 'demo');
    await page.click('#empresa-list li >> nth=0');
  } else {
    await page.fill('#f-empresa', empresa);
    await page.keyboard.press('Escape');
  }
  if (afiliada) await page.click(`label[for="af-${afiliada}"]`);
  await page.fill('#f-salario', salario);
  await page.selectOption('#f-antiguedad', antiguedad);
  await page.selectOption('#f-proposito', proposito);
  await page.click('[data-next]');
}
async function b2cStep3(page, d = B2C_DATA) {
  await page.waitForSelector('[data-step="datos"]:not([hidden])');
  await page.fill('#f-nombre', d.nombre);
  await page.fill('#f-cedula', d.cedula);
  await page.fill('#f-celular', d.celular);
  await page.fill('#f-correo', d.correo);
  await page.click('[data-next]');
}
async function b2cConsents(page, { whatsapp = true } = {}) {
  await page.waitForSelector('[data-step="autorizaciones"]:not([hidden])');
  await page.check('input[name="acepta_privacidad"]');
  await page.check('input[name="acepta_referencias"]');
  if (whatsapp) await page.check('input[name="acepta_whatsapp"]');
}
const waitResult = (page) => page.waitForSelector('[data-result]:not([hidden]) .lf-result');
const readPayload = async (page) => {
  await page.click('[data-payload-panel] summary');
  return page.evaluate(() => {
    const txt = document.querySelector('[data-payload-panel] code').textContent;
    return { txt, json: JSON.parse(txt) };
  });
};
const piiFree = (dl, values) => { const s = JSON.stringify(dl); return values.every((v) => !s.includes(v)); };
const SCHEMA_KEYS = ['form_id', 'submitted_at', 'lead', 'score', 'tier', 'score_detail', 'consents', 'attribution'];
const ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid', 'landing', 'landing_url', 'referrer'];

async function shot(page, name, full = false) {
  if (!shotsDir) return;
  // En la captura de página completa, los elementos fijos (barra móvil, WhatsApp) se
  // pintarían en medio del documento: se ocultan solo para esa captura.
  const tag = full ? await page.addStyleTag({ content: '.sticky-cta, .wa-float, .toast { display: none !important; }' }) : null;
  await page.screenshot({ path: path.join(shotsDir, name), fullPage: full });
  if (tag) await tag.evaluate((n) => n.remove());
}

// 3a. carga, red, scroll horizontal, primer pantallazo
console.log('\nCarga, red y scroll horizontal (390 / 768 / 1440)');
for (const width of [390, 768, 1440]) {
  for (const [name, url] of Object.entries(URLS)) {
    const { ctx, page, errors, requests } = await newPage(width);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const over = await noOverflow(page);
    check(over.length === 0, `${name} ${width}px: sin scroll horizontal`, over.join(', '));
    check(errors.length === 0, `${name} ${width}px: sin pageerror ni console.error`, errors.slice(0, 3).join(' | '));
    check(badHosts(requests).length === 0, `${name} ${width}px: solo peticiones propias y de Google Fonts`, badHosts(requests).slice(0, 3).join(', '));
    const band = await page.evaluate(() => { const b = document.querySelector('[data-demo-band]'); const r = b.getBoundingClientRect(); return { top: r.top, pos: getComputedStyle(b).position, text: b.textContent }; });
    check(band.top === 0 && band.pos === 'fixed' && band.text.includes('no se envían datos'), `${name} ${width}px: banda de demo fija arriba`);
    if (width === 1440 && name !== 'index') {
      const fold = await page.evaluate(() => {
        const card = document.querySelector('[data-form-card]').getBoundingClientRect();
        const first = document.querySelector('[data-step]:not([hidden]) .input, [data-step]:not([hidden]) input').getBoundingClientRect();
        const next = document.querySelector('[data-next]').getBoundingClientRect();
        return { card: card.top, first: first.bottom, next: next.bottom, vh: innerHeight };
      });
      check(fold.card < 260 && fold.first < fold.vh && fold.next <= fold.vh, `${name} 1440px: formulario${name === 'prestamos' ? ' y calculadora' : ''} sobre el pliegue`, JSON.stringify(fold));
    }
    if (shotsDir && (width === 1440 || width === 390)) {
      await shot(page, `${name}-${width}-hero.png`);
      await shot(page, `${name}-${width}-full.png`, true);
    }
    await ctx.close();
  }
}

// 3b. calculadora
console.log('\nCalculadora');
{
  const { ctx, page, errors } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await page.waitForSelector('[data-calc-cuota]');
  check((await page.textContent('[data-calc-cuota]')).trim() === fmt(cuotaRef(3000, 18, 24)), 'valor inicial: B/. 3,000 · 24 meses · 18 % = ' + fmt(cuotaRef(3000, 18, 24)));
  await page.fill('#f-monto', '5000');
  await page.click('label[for="pl-36"]');
  await page.fill('#f-tasa', '24');
  const cuota = (await page.textContent('[data-calc-cuota]')).trim();
  check(cuota === 'B/. 196.16' && cuota === fmt(cuotaRef(5000, 24, 36)), 'B/. 5,000 · 36 meses · 24 % → B/. 196.16', cuota);
  const quincena = (await page.textContent('[data-calc-quincena]')).trim();
  const total = (await page.textContent('[data-calc-total]')).trim();
  check(quincena === 'B/. 98.08' && total === fmt(196.16 * 36), 'quincena B/. 98.08 y total = cuota × 36', `${quincena} / ${total}`);
  await page.evaluate(() => { const r = document.getElementById('calc-range'); r.value = '7500'; r.dispatchEvent(new Event('input', { bubbles: true })); });
  check((await page.inputValue('#f-monto')) === '7,500', 'el deslizador actualiza el monto (7,500)');
  check((await page.textContent('[data-calc-cuota]')).trim() === fmt(cuotaRef(7500, 24, 36)), 'el deslizador recalcula la cuota');
  await page.fill('#f-monto', '');
  await page.click('[data-next]');
  check(await page.isVisible('#f-monto-err') && await page.isVisible('[data-step="prestamo"]'), 'monto vacío: error y no avanza');
  check(errors.length === 0, 'calculadora: sin errores', errors.join(' | '));
  await ctx.close();
}

// 3c. validación de cédula y celular
console.log('\nValidación');
{
  const { ctx, page, errors } = await newPage(390);
  await page.goto(URLS.prestamos);
  await b2cStep1(page);
  await page.click('[data-next]');
  check(await page.isVisible('#f-empresa-err') && await page.isVisible('#f-salario-err') && await page.isVisible('[data-step="trabajo"]'), 'paso 2 vacío: errores visibles y no avanza');
  await b2cStep2(page);
  await page.waitForSelector('[data-step="datos"]:not([hidden])');
  await page.fill('#f-nombre', 'María Pérez');
  await page.fill('#f-cedula', '123');
  await page.fill('#f-celular', '5551234');
  await page.fill('#f-correo', 'maria@example.com');
  await page.click('[data-next]');
  const st = await page.evaluate(() => ({
    onDatos: !document.querySelector('[data-step="datos"]').hidden,
    cedErr: document.getElementById('f-cedula-err').textContent,
    celErr: document.getElementById('f-celular-err').textContent,
    cedInv: document.getElementById('f-cedula').getAttribute('aria-invalid'),
    celInv: document.getElementById('f-celular').getAttribute('aria-invalid'),
    describedBy: document.getElementById('f-cedula').getAttribute('aria-describedby'),
    focus: document.activeElement.id,
    status: document.querySelector('[data-form-status]').textContent,
  }));
  check(st.onDatos, 'cédula/celular inválidos bloquean el paso');
  check(/cédula/i.test(st.cedErr) && /6123-4567/.test(st.celErr), 'mensajes de error visibles para cédula y celular', `${st.cedErr} / ${st.celErr}`);
  check(st.cedInv === 'true' && st.celInv === 'true' && st.describedBy.includes('f-cedula-err'), 'aria-invalid y aria-describedby en los campos');
  check(st.focus === 'f-cedula' && /Cédula/.test(st.status), 'foco en el primer error y resumen en región viva', `${st.focus} · ${st.status}`);
  await contrast(page, 'préstamos 390px con errores');
  await page.fill('#f-cedula', 'pe-12-345');
  await page.fill('#f-celular', '+507 6123 4567');
  await page.click('[data-next]');
  await page.waitForSelector('[data-step="autorizaciones"]:not([hidden])');
  check(await page.inputValue('#f-cedula') === 'PE-12-345' && await page.inputValue('#f-celular') === '6123-4567', 'datos corregidos: avanza y normaliza (PE-12-345, 6123-4567)');
  await page.click('[data-next]');
  check(await page.isVisible('#f-priv-err') && await page.isVisible('#f-apc-err') && !(await page.isVisible('[data-result]')), 'autorizaciones obligatorias sin marcar: no envía');
  const unchecked = await page.evaluate(() => [...document.querySelectorAll('[data-step="autorizaciones"] input[type=checkbox]')].every((c) => !c.checked));
  check(unchecked, 'casillas de consentimiento desmarcadas por defecto');
  check(errors.length === 0, 'validación: sin errores de página', errors.join(' | '));
  await ctx.close();
}

// 3d. camino feliz B2C con UTM, doble clic y sin red
console.log('\nPréstamos: camino feliz (Calificado)');
for (const width of [1440, 390]) {
  const { ctx, page, errors, requests } = await newPage(width);
  await page.goto(URLS.prestamos + '?utm_source=google&utm_medium=cpc&utm_campaign=prestamos-rapidos&utm_term=prestamo+personal&gclid=TEST-GCLID-123');
  await b2cStep1(page);
  await b2cStep2(page);
  const status = await page.evaluate(() => document.querySelector('[data-company-status]'));
  await b2cStep3(page);
  await b2cConsents(page);
  const summary = await page.textContent('[data-summary]');
  check(summary.includes('B/. 5,000.00') && summary.includes('36 meses') && summary.includes('B/. 196.16'), `${width}px: resumen antes de enviar`, summary);
  const before = requests.length;
  await page.dblclick('[data-next]');
  await waitResult(page);
  await page.waitForTimeout(400);
  const res = await page.evaluate(() => ({ tier: document.querySelector('.lf-result').dataset.tier, text: document.querySelector('.lf-result').innerText, dl: window.dataLayer, net: window.__net }));
  check(res.tier === 'calificado' && /preliminar · calificado/i.test(res.text) && /WhatsApp en minutos/.test(res.text), `${width}px: resultado "Calificado" con asesor por WhatsApp`);
  check(!/aprobad|garantiz/i.test(res.text), `${width}px: el resultado no dice "aprobado"`);
  check(requests.length === before && res.net.fetch === 0 && res.net.beacon === 0 && res.net.xhr === 0, `${width}px: modo demo sin peticiones al enviar`, requests.slice(before).join(', '));
  const submits = res.dl.filter((x) => x.event === 'lead_submit');
  check(submits.length === 1 && submits[0].lead_tier === 'calificado', `${width}px: dataLayer lead_submit una sola vez (doble clic) con el nivel`);
  check(piiFree(res.dl, ['8-123-456', '6123', 'maria.perez', 'María']), `${width}px: dataLayer sin datos personales`);
  const { txt, json } = await readPayload(page);
  check(JSON.stringify(Object.keys(json)) === JSON.stringify(SCHEMA_KEYS), `${width}px: payload con el esquema común`, Object.keys(json).join(','));
  check(json.form_id === 'kredit-prestamos' && json.tier === 'calificado' && json.score === 100, `${width}px: form_id, tier y score`, `${json.form_id} ${json.tier} ${json.score}`);
  check(json.lead.cedula === '8-***-*56' && !txt.includes('8-123-456'), `${width}px: cédula enmascarada en la vista previa`, json.lead.cedula);
  check(json.lead.celular === '+50761234567' && json.lead.monto === 5000 && json.lead.plazo_meses === 36 && json.lead.cuota_estimada === 196.16 && json.lead.empresa_verificada === true, `${width}px: datos del lead normalizados`);
  check(JSON.stringify(Object.keys(json.attribution)) === JSON.stringify(ATTR_KEYS) && json.attribution.utm_source === 'google' && json.attribution.utm_campaign === 'prestamos-rapidos' && json.attribution.utm_term === 'prestamo personal' && json.attribution.gclid === 'TEST-GCLID-123' && json.attribution.fbclid === null && json.attribution.landing === 'kredit-prestamos', `${width}px: atribución UTM y gclid en el payload`);
  check(json.consents.privacidad === true && json.consents.referencias_credito === true && json.consents.whatsapp === true, `${width}px: consentimientos en el payload`);
  check(errors.length === 0, `${width}px: sin errores de página`, errors.join(' | '));
  if (width === 1440) await contrast(page, 'préstamos 1440px resultado + JSON');
  await shot(page, `prestamos-${width}-resultado.png`, false);
  if (shotsDir) { const card = await page.$('[data-form-card]'); await card.screenshot({ path: path.join(shotsDir, `prestamos-${width}-resultado-tarjeta.png`) }); }
  await ctx.close();
  void status;
}

// 3e. empresa no afiliada en modo abierto: sigue y puede recomendar
console.log('\nPréstamos: empresa no afiliada (modo abierto)');
{
  const { ctx, page, errors } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await b2cStep1(page);
  await page.fill('#f-empresa', 'Taller Independiente');
  await page.keyboard.press('Escape');
  await page.click('label[for="af-no"]');
  const msg = await page.textContent('[data-company-status]');
  check(/puedes continuar/i.test(msg), 'mensaje positivo: puede continuar', msg);
  await page.fill('#f-salario', '1200');
  await page.selectOption('#f-antiguedad', '2-5a');
  await page.selectOption('#f-proposito', 'hogar');
  await page.click('[data-next]');
  check((await page.textContent('[data-progress-label]')).includes('Paso 3 de 4'), 'modo abierto: sigue la ruta principal (4 pasos)');
  await b2cStep3(page);
  await b2cConsents(page, { whatsapp: false });
  check(await page.isVisible('.refer-box'), 'bloque opcional "Quiero recomendar a mi empresa" visible');
  await page.check('input[name="recomendar"]');
  await page.fill('#f-rec-nombre', 'Ana RR. HH.');
  await page.fill('#f-rec-correo', 'ana@');
  await page.click('[data-next]');
  check(await page.isVisible('#f-rec-correo-err'), 'correo de RR. HH. inválido: error');
  await page.fill('#f-rec-correo', 'rrhh@taller.com.pa');
  await page.click('[data-next]');
  await waitResult(page);
  const r = await page.evaluate(() => ({ tier: document.querySelector('.lf-result').dataset.tier, text: document.querySelector('.lf-result').innerText }));
  check(r.tier === 'revisar' && /Revisaremos tu solicitud/.test(r.text), 'resultado "Revisar"');
  const { json } = await readPayload(page);
  check(json.tier === 'revisar' && json.lead.empresa_afiliada === 'no' && json.lead.referral && json.lead.referral.empresa === 'Taller Independiente' && json.lead.referral.rrhh_correo === 'rrhh@taller.com.pa', 'payload con referral de la empresa');
  check(json.consents.whatsapp === false && !/WhatsApp en minutos/.test(r.text), 'sin consentimiento de WhatsApp: no promete WhatsApp');
  check(errors.length === 0, 'sin errores de página', errors.join(' | '));
  await ctx.close();
}

// 3f. regla "solo empresas afiliadas" → Recomienda a tu empresa
console.log('\nPréstamos: regla "solo empresas afiliadas" (referido_empresa)');
for (const via of ['toggle', 'url']) {
  const { ctx, page, errors, requests } = await newPage(via === 'toggle' ? 1440 : 390);
  await page.goto(URLS.prestamos + (via === 'url' ? '?solo_afiliadas=1' : ''));
  if (via === 'toggle') { await page.click('.demo-toggle__switch'); }
  check(await page.isChecked('#demo-solo-afiliadas'), `${via}: ajuste de demo activado`);
  await b2cStep1(page);
  await page.fill('#f-empresa', 'Comercial Sin Convenio');
  await page.keyboard.press('Escape');
  await page.click('label[for="af-nose"]');
  check(/recomendar a tu empresa/i.test(await page.textContent('[data-company-status]')), `${via}: aviso de que puede recomendar a su empresa`);
  await page.fill('#f-salario', '900');
  await page.selectOption('#f-antiguedad', '1-2a');
  await page.selectOption('#f-proposito', 'salud');
  await page.click('[data-next]');
  await page.waitForSelector('[data-step="referido"]:not([hidden])');
  check((await page.textContent('[data-progress-label]')).includes('Paso 3 de 3 · Recomienda a tu empresa'), `${via}: pasa a "Recomienda a tu empresa" (3 de 3)`);
  check((await page.inputValue('#f-ref-empresa')) === 'Comercial Sin Convenio', `${via}: empresa precargada`);
  await page.fill('#f-ref-nombre', 'Luis Castillo');
  await page.fill('#f-ref-celular', '6987-6543');
  await page.fill('#f-ref-rrhh-correo', 'rrhh@comercial.com.pa');
  await page.check('input[name="ref_mencionar"]');
  await page.click('[data-next]');
  check(await page.isVisible('#f-ref-priv-err'), `${via}: privacidad obligatoria en la recomendación`);
  await page.check('input[name="ref_privacidad"]');
  await page.check('input[name="ref_whatsapp"]');
  const before = requests.length;
  await page.click('[data-next]');
  await waitResult(page);
  const r = await page.evaluate(() => ({ tier: document.querySelector('.lf-result').dataset.tier, text: document.querySelector('.lf-result').innerText, dl: window.dataLayer }));
  check(r.tier === 'referido_empresa' && /Vamos a presentarle Kredit a Comercial Sin Convenio/.test(r.text), `${via}: resultado positivo de recomendación`);
  check(!/aprobad|no calificad|rechaz/i.test(r.text), `${via}: sin lenguaje de rechazo ni aprobación`);
  const { json } = await readPayload(page);
  check(json.form_id === 'kredit-prestamos' && json.tier === 'referido_empresa' && json.score === null && json.lead.referral.empresa === 'Comercial Sin Convenio' && json.lead.referral.mencionar_mi_nombre === true && json.lead.referral.rrhh_correo === 'rrhh@comercial.com.pa', `${via}: payload referido_empresa con lead.referral`);
  check(json.lead.regla_solo_afiliadas === true && !('cedula' in json.lead), `${via}: sin cédula en la recomendación`);
  check(r.dl.some((x) => x.event === 'lead_submit' && x.lead_tier === 'referido_empresa'), `${via}: dataLayer con lead_tier referido_empresa`);
  check(requests.length === before, `${via}: sin peticiones al enviar`);
  check(errors.length === 0, `${via}: sin errores de página`, errors.join(' | '));
  if (via === 'toggle') { await shot(page, 'prestamos-1440-referido.png'); }
  await ctx.close();
}
{
  const { ctx, page } = await newPage(1440);
  await page.goto(URLS.prestamos + '?solo_afiliadas=1');
  await b2cStep1(page);
  await b2cStep2(page);
  await page.waitForSelector('[data-step="datos"]:not([hidden])');
  check((await page.textContent('[data-progress-label]')).includes('Paso 3 de 4'), 'regla activada + empresa afiliada: sigue la ruta principal');
  await ctx.close();
}

// 3g. no calificado: mensaje respetuoso
console.log('\nPréstamos: No calificado');
{
  const { ctx, page, errors } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await b2cStep1(page, { monto: '15000', plazo: '6', tasa: '18' });
  await b2cStep2(page, { empresa: 'Negocio Propio', afiliada: 'no', salario: '300', antiguedad: 'menos-6m', proposito: 'otro' });
  await b2cStep3(page);
  await b2cConsents(page);
  await page.click('[data-next]');
  await waitResult(page);
  const r = await page.evaluate(() => ({ tier: document.querySelector('.lf-result').dataset.tier, text: document.querySelector('.lf-result').innerText, link: document.querySelector('.lf-result a[href="../empresas/"]') !== null }));
  check(r.tier === 'no_calificado' && /Gracias por confiar en Kredit/.test(r.text) && /No es definitivo/.test(r.text) && r.link, 'mensaje respetuoso con alternativa (recomendar empresa)');
  check(!/aprobad|rechaz/i.test(r.text), 'sin "aprobado" ni "rechazado"');
  check(errors.length === 0, 'sin errores de página', errors.join(' | '));
  await ctx.close();
}

// 3h. con data-endpoint: POST JSON (código listo para producción)
console.log('\nCon data-endpoint (producción simulada)');
{
  const { ctx, page, errors } = await newPage(1440);
  const posts = [];
  await page.route('**/__n8n-test', async (route) => { posts.push({ method: route.request().method(), type: route.request().headers()['content-type'], body: route.request().postData() }); await route.fulfill({ status: 200, contentType: 'application/json', body: '{"ok":true}' }); });
  await page.goto(URLS.prestamos + '?utm_source=meta&fbclid=FB-1');
  await page.evaluate(() => { document.getElementById('form-prestamos').dataset.endpoint = '/__n8n-test'; });
  await b2cStep1(page);
  await b2cStep2(page);
  await b2cStep3(page);
  await b2cConsents(page);
  await page.dblclick('[data-next]');
  await waitResult(page);
  check(posts.length === 1 && posts[0].method === 'POST' && /application\/json/.test(posts[0].type), 'un solo POST JSON al endpoint');
  const body = JSON.parse(posts[0]?.body || '{}');
  check(body.lead?.cedula === '8-123-456' && body.attribution?.utm_source === 'meta' && body.attribution?.fbclid === 'FB-1', 'el POST lleva la cédula completa y la atribución');
  check(!(await page.$('[data-payload-panel]')), 'en producción no se muestra el panel JSON');
  check(errors.length === 0, 'sin errores de página', errors.join(' | '));
  await ctx.close();
}
{
  const { ctx, page } = await newPage(1440);
  await page.route('**/__n8n-test', (route) => route.fulfill({ status: 500, body: 'error' }));
  await page.goto(URLS.prestamos);
  await page.evaluate(() => { document.getElementById('form-prestamos').dataset.endpoint = '/__n8n-test'; });
  await b2cStep1(page); await b2cStep2(page); await b2cStep3(page); await b2cConsents(page);
  await page.click('[data-next]');
  await page.waitForSelector('[data-submit-error]:not([hidden])');
  check(await page.isEnabled('[data-next]') && !(await page.isVisible('[data-result]')), 'si n8n falla: mensaje de error y se puede reintentar');
  await ctx.close();
}

// 3i. empresas (B2B)
console.log('\nEmpresas (B2B)');
for (const width of [1440, 390]) {
  const { ctx, page, errors, requests } = await newPage(width);
  await page.goto(URLS.empresas + '?utm_source=linkedin&utm_campaign=convenios');
  check((await page.$$('.lf-steps li')).length === 3, `${width}px: indicador de 3 pasos`);
  await page.fill('#b-empresa', 'Distribuidora Istmeña, S.A.');
  await page.fill('#b-ruc', '12');
  await page.selectOption('#b-sector', 'comercio');
  await page.click('label[for="c-4"]');
  await page.selectOption('#b-provincia', 'panama');
  await page.click('[data-next]');
  check(await page.isVisible('#b-ruc-err') && await page.isVisible('[data-step="empresa"]'), `${width}px: RUC inválido bloquea el paso`);
  await page.fill('#b-ruc', '155612345-2-2021 DV 45');
  await page.click('[data-next]');
  await page.waitForSelector('[data-step="contacto"]:not([hidden])');
  await page.fill('#b-nombre', 'Carla Méndez');
  await page.selectOption('#b-cargo', 'rrhh');
  await page.fill('#b-correo', 'carla.rrhh@gmail.com');
  await page.fill('#b-celular', '6555-1234');
  await page.locator('#b-correo').blur();
  const warn = await page.evaluate(() => { const w = document.getElementById('b-correo-warn'); return { vis: !w.hidden, text: w.textContent, role: w.getAttribute('role') }; });
  check(warn.vis && /correo personal/.test(warn.text) && warn.role === 'status', `${width}px: aviso suave por correo gratuito`, warn.text);
  if (width === 1440) await contrast(page, 'empresas 1440px con aviso de correo');
  await page.click('[data-next]');
  await page.waitForSelector('[data-step="interes"]:not([hidden])');
  check(true, `${width}px: el aviso no bloquea (avanza al paso 3)`);
  await page.click('[data-next]');
  check(await page.isVisible('#b-interes-err') && await page.isVisible('#b-priv-err'), `${width}px: interés y privacidad obligatorios`);
  await page.check('input[name="interes"][value="afiliacion"]');
  await page.selectOption('#b-inicio', 'este-mes');
  await page.check('input[name="acepta_privacidad"]');
  const before = requests.length;
  await page.dblclick('[data-next]');
  await waitResult(page);
  await page.waitForTimeout(300);
  const r = await page.evaluate(() => ({ tier: document.querySelector('.lf-result').dataset.tier, text: document.querySelector('.lf-result').innerText, dl: window.dataLayer, net: window.__net }));
  check(r.tier === 'calificado' && /ejecutivo de convenios te contactará/.test(r.text), `${width}px: resultado "Un ejecutivo de convenios te contactará"`);
  check(requests.length === before && r.net.fetch === 0, `${width}px: sin peticiones al enviar`);
  const subs = r.dl.filter((x) => x.event === 'lead_submit');
  check(subs.length === 1 && subs[0].form_id === 'kredit-empresas' && piiFree(r.dl, ['carla', 'Carla', '6555', '155612345']), `${width}px: dataLayer lead_submit sin datos personales`);
  const { json } = await readPayload(page);
  check(JSON.stringify(Object.keys(json)) === JSON.stringify(SCHEMA_KEYS) && json.form_id === 'kredit-empresas' && json.score === 80, `${width}px: mismo esquema de payload (score 80)`, `${json.score}`);
  check(json.lead.correo_corporativo === false && json.lead.cargo === 'rrhh' && json.lead.colaboradores === '100-249' && json.attribution.utm_source === 'linkedin', `${width}px: datos B2B y atribución`);
  check(errors.length === 0, `${width}px: sin errores de página`, errors.join(' | '));
  await shot(page, `empresas-${width}-resultado.png`);
  await ctx.close();
}
{
  const { ctx, page } = await newPage(1440);
  await page.goto(URLS.empresas);
  await page.fill('#b-empresa', 'X'); await page.fill('#b-ruc', '8-123-456 DV 12'); await page.selectOption('#b-sector', 'otro'); await page.click('label[for="c-2"]'); await page.selectOption('#b-provincia', 'colon');
  await page.click('[data-next]');
  await page.fill('#b-nombre', 'Pedro Ruiz'); await page.selectOption('#b-cargo', 'otro');
  check(await page.isVisible('#b-cargo-otro'), 'cargo "Otro" muestra el campo para especificar');
  await page.fill('#b-correo', 'pedro@empresa.com.pa'); await page.fill('#b-celular', '6000-0000');
  await page.locator('#b-correo').blur();
  check(!(await page.isVisible('#b-correo-warn')), 'correo corporativo: sin aviso');
  await page.click('[data-next]');
  check(await page.isVisible('#b-cargo-otro-err'), 'cargo "Otro" vacío: error');
  await ctx.close();
}

// 3j. contraste AA en todas las páginas
console.log('\nContraste AA (texto visible vs. fondo efectivo)');
for (const width of [1440, 390]) {
  for (const [name, url] of Object.entries(URLS)) {
    const { ctx, page } = await newPage(width);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
    await contrast(page, `${name} ${width}px (FAQ abiertas)`);
    await ctx.close();
  }
}

{
  // La auditoría no es decorativa: debe detectar un texto con contraste bajo sobre el degradado.
  const { ctx, page } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await page.addStyleTag({ content: '.hero__lead { color: #C5D0FA !important; }' });
  const { fails } = await page.evaluate(contrastAudit);
  check(fails.some((f) => f.includes('hero__lead')), 'la auditoría de contraste detecta un texto deficiente (control)', fails.slice(0, 1).join(''));
  await ctx.close();
}

// 3k. teclado, foco visible, movimiento reducido, WhatsApp demo, barra fija
console.log('\nTeclado, movimiento y flotantes');
{
  const { ctx, page, requests } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await page.keyboard.press('Tab');
  check(await page.evaluate(() => document.activeElement.classList.contains('skip-link') && getComputedStyle(document.activeElement).top !== '-80px'), 'Tab: aparece "Saltar al formulario"');
  const ring = [];
  for (let i = 0; i < 8; i++) {
    await page.keyboard.press('Tab');
    ring.push(await page.evaluate(() => { const a = document.activeElement; const cs = getComputedStyle(a); return { el: a.tagName + '.' + a.className, ok: (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 2) || cs.boxShadow !== 'none' }; }));
  }
  check(ring.every((x) => x.ok), 'foco visible en los primeros 8 elementos con Tab', ring.filter((x) => !x.ok).map((x) => x.el).join(', '));
  const anim = await page.evaluate(() => getComputedStyle(document.querySelector('.hero__aside')).animationName);
  check(anim === 'none', 'movimiento reducido: sin animación de entrada', anim);
  const before = requests.length;
  const url0 = page.url();
  await page.click('.wa-float');
  await page.waitForSelector('[data-toast].is-on');
  const toastText = await page.textContent('[data-toast]');
  check(/Modo demo/.test(toastText) && /6997-5664/.test(toastText) && page.url() === url0 && requests.length === before && ctx.pages().length === 1, 'WhatsApp en demo: aviso, sin abrir chat ni navegar', toastText);
  await ctx.close();
}
{
  const { ctx, page } = await newPage(1440, { reducedMotion: 'no-preference' });
  await page.goto(URLS.prestamos);
  const anim = await page.evaluate(() => getComputedStyle(document.querySelector('.hero__aside')).animationName);
  check(anim === 'rise', 'sin preferencia de movimiento: animación de entrada activa', anim);
  await ctx.close();
}
{
  const { ctx, page } = await newPage(390);
  await page.goto(URLS.prestamos);
  const hiddenTop = await page.evaluate(() => !document.querySelector('[data-sticky-cta]').classList.contains('is-on') && getComputedStyle(document.querySelector('.wa-float')).visibility === 'hidden');
  check(hiddenTop, '390px: barra fija y WhatsApp ocultos sobre el formulario');
  await page.evaluate(() => document.getElementById('metas').scrollIntoView());
  await page.waitForTimeout(400);
  const shown = await page.evaluate(() => ({ bar: document.querySelector('[data-sticky-cta]').classList.contains('is-on'), wa: getComputedStyle(document.querySelector('.wa-float')).visibility, cuota: document.querySelector('[data-sticky-cuota]').textContent }));
  check(shown.bar && shown.wa === 'visible' && /^B\/\. \d/.test(shown.cuota), '390px: barra fija con la cuota y WhatsApp al desplazarse', JSON.stringify(shown));
  await shot(page, 'prestamos-390-barra-fija.png');
  await contrast(page, 'préstamos 390px con barra fija', { top: false });
  await page.click('[data-sticky-cta] a');
  await page.waitForTimeout(600);
  check(await page.evaluate(() => !document.querySelector('[data-sticky-cta]').classList.contains('is-on')), '390px: la barra se oculta al llegar al formulario');
  await ctx.close();
}

await browser.close();
server.close();
console.log(`\n${passed} pruebas OK, ${failures.length} fallas`);
if (failures.length) { console.log('\nFallas:\n- ' + failures.join('\n- ')); process.exit(1); }
