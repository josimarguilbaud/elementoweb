// Pruebas de la web multipágina de Kredit (public/demo/kredit-web/, 10 páginas).
// Uso: node scripts/test-web-kredit.mjs [--live-fonts]
//   --live-fonts  descarga las fuentes reales de Google (por defecto se responden vacías)
// Requiere Playwright global: NODE_PATH=$(npm root -g) (o la carpeta node_modules que lo tenga).
// Las páginas se generan con scripts/kredit-web/build.mjs (ver scripts/kredit-web/README.md).
import http from 'node:http';
import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'public');
const DIR = path.join(ROOT, 'demo', 'kredit-web');
const LANDINGS = path.join(ROOT, 'demo', 'kredit-landings');
const V = '?v=20261012f';
const args = process.argv.slice(2);
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
const norm = (s) => String(s || '').replace(/\s+/g, ' ').trim();

const PAGES = {
  inicio: '',
  prestamos: 'prestamos',
  empresas: 'empresas',
  nosotros: 'nosotros',
  preguntas: 'preguntas-frecuentes',
  contacto: 'contacto',
  cuenta: 'accede-a-tu-cuenta',
  privacidad: 'politica-de-privacidad',
  'aviso-legal': 'aviso-legal',
  cookies: 'politica-de-cookies',
};
const NAV_CURRENT = { prestamos: 'Préstamos', empresas: 'Empresas', nosotros: 'Nosotros', preguntas: 'Preguntas', contacto: 'Contacto' };
const fileOf = (slug) => path.join(DIR, slug, 'index.html');
const BANNED = [/adelanto de (salario|n[óo]mina)/i, /anticipo de sueldo/i, /pr[ée]stamo de d[íi]a de pago/i, /aprobad[oa]s?\b/i, /garantizad[oa]s?\b/i, /sin revisar (tu |su )?historial/i];
const calc = await import(pathToFileURL(path.join(LANDINGS, 'assets', 'calc.js')).href + V);
const money = (x) => calc.formatMoney(x);

// ---------------------------------------------------------------- 1. estático
console.log('\nArchivos y contenido (10 páginas)');
const html = {};
for (const [name, slug] of Object.entries(PAGES)) {
  const f = fileOf(slug);
  check(fs.existsSync(f), `${name}: existe /${slug}${slug ? '/' : ''}index.html`);
  html[name] = fs.existsSync(f) ? fs.readFileSync(f, 'utf8') : '';
}
const titles = {};
const descs = {};
for (const [name, src] of Object.entries(html)) {
  check(/<meta name="robots" content="noindex, nofollow">/.test(src), `${name}: meta robots noindex, nofollow`);
  check(src.includes('data-demo-band') && src.includes('Vista previa · Elemento Web — formulario en modo demo, no se envían datos'), `${name}: banda de vista previa`);
  check((src.match(/<h1[\s>]/g) || []).length === 1, `${name}: un solo H1`);
  titles[name] = norm((src.match(/<title>([^<]*)<\/title>/) || [])[1]);
  descs[name] = norm((src.match(/<meta name="description" content="([^"]*)">/) || [])[1]);
  check(titles[name].length > 10 && descs[name].length > 50, `${name}: title y meta description no vacíos`, `${titles[name]} | ${descs[name].length} car.`);
  check(!/\son[a-z]+\s*=\s*["']/i.test(src) && !/\sstyle\s*=\s*["']/i.test(src), `${name}: sin onclick/style en línea`);
  const localRefs = [...src.matchAll(/(?:href|src)="([^"]*assets\/[^"?]+\.(?:css|js|svg))(\?[^"]*)?"/g)];
  check(localRefs.length >= 5 && localRefs.every((m) => m[2] === V), `${name}: CSS/JS con ${V}`, localRefs.filter((m) => m[2] !== V).map((m) => m[1]).join(', '));
  check(src.includes('kredit-landings/assets/base.css' + V) && src.includes('assets/site.css' + V) && src.includes('kredit-landings/assets/page.js' + V), `${name}: carga base.css, site.css y page.js de las landings`);
  const resources = [...src.matchAll(/<(?:link|script|img|source|iframe)\b[^>]*\s(?:href|src)="(https?:[^"]+)"/g)].map((m) => m[1]);
  check(resources.every((u) => /^https:\/\/fonts\.(googleapis|gstatic)\.com(\/|$)/.test(u)), `${name}: recursos externos solo de Google Fonts`, resources.join(', '));
  const text = src.replace(/<style[\s\S]*?<\/style>/g, '').replace(/<script(?![^>]*ld\+json)[\s\S]*?<\/script>/g, '');
  const bad = BANNED.filter((re) => re.test(text));
  check(bad.length === 0, `${name}: sin términos prohibidos (aprobado, garantizado, adelanto de salario…)`, bad.join(' '));
  check(!/unsplash|pexels|images\.|cdn\./i.test(src) && !src.includes('portal-celular'), `${name}: sin imágenes de terceros ni portal-celular`);
  check(/<link rel="icon" href="[^"]*kredit-mark\.svg/.test(src) && src.includes('<symbol id="logo-k"') && src.includes('<symbol id="logo-word"'), `${name}: sprite del logo copiado de la landing`);
  // Fotos: -800.webp con srcset a -1600.webp, medidas, carga diferida y pie «Imagen ilustrativa generada con IA».
  const imgs = [...src.matchAll(/<figure class="photo[^"]*">\s*<img ([^>]+)>\s*<figcaption class="photo__tag">([^<]+)<\/figcaption>/g)];
  const allImgs = (src.match(/<img (?![^>]*class="reg__logo)/g) || []).length; // los logos de los reguladores van aparte
  const okImgs = imgs.filter(([, a, cap]) => {
    const m = a.match(/src="([^"]+)-800\.webp" srcset="\1-800\.webp 800w, \1-1600\.webp 1600w"/);
    return m && /width="800" height="\d+"/.test(a) && /loading="lazy"/.test(a) && /alt="[^"]{12,}"/.test(a) && cap === 'Imagen ilustrativa generada con IA'
      && fs.existsSync(path.resolve(path.dirname(fileOf(PAGES[name])), m[1] + '-800.webp')) && fs.existsSync(path.resolve(path.dirname(fileOf(PAGES[name])), m[1] + '-1600.webp'));
  });
  check(okImgs.length === allImgs, `${name}: fotos con srcset 800/1600, medidas, lazy, alt y pie de IA (${allImgs})`, `${okImgs.length}/${allImgs}`);
  // Reguladores: logos locales con el mismo prefijo relativo que base.css, medidas, carga diferida y alt.
  const pre = PAGES[name] ? '../../' : '../';
  const logos = [...src.matchAll(/<img class="reg__logo reg__logo--(mici|sbp)" src="([^"]+)" width="(\d+)" height="(\d+)" alt="([^"]+)" loading="lazy">/g)];
  const okLogos = logos.filter(([, k, u, w, hh, alt]) => u === `${pre}kredit-landings/assets/reguladores/${k}.png` && fs.existsSync(path.resolve(path.dirname(fileOf(PAGES[name])), u))
    && (k === 'mici' ? w === '720' && hh === '119' && alt === 'Ministerio de Comercio e Industrias de Panamá' : w === '274' && hh === '189' && alt === 'Superintendencia de Bancos de Panamá'));
  const nLogos = (src.match(/class="reg__logo/g) || []).length;
  check(nLogos === (name === 'inicio' ? 4 : 2) && okLogos.length === nLogos, `${name}: logos del MICI y la SBP con ruta ${pre}kredit-landings/…, medidas, lazy y alt (${nLogos})`, `${okLogos.length}/${nLogos}`);
  check(!/regulad[oa]s?\s+por\s+la\s+superintendencia/i.test(src), `${name}: nunca dice «regulada por la Superintendencia»`);
}
check(new Set(Object.values(titles)).size === 10 && new Set(Object.values(descs)).size === 10, 'title y description distintos en las 10 páginas');
{
  // Encabezado y pie idénticos (salvo la página actual y la profundidad de las rutas relativas).
  const part = (src, tag) => (src.match(new RegExp(`<${tag} class="site-${tag}"[\\s\\S]*?</${tag}>`)) || [''])[0]
    .replace(/ aria-current="page"/g, '').replace(/(href|src)="(?:\.\.\/)+/g, '$1="').replace(/href="\.\/"/g, 'href=""');
  const heads = new Set(Object.values(html).map((s) => part(s, 'header')));
  const foots = new Set(Object.values(html).map((s) => part(s, 'footer')));
  check(heads.size === 1 && [...heads][0].length > 1000, 'encabezado idéntico en las 10 páginas');
  check(foots.size === 1 && [...foots][0].includes('Resolución No. 638'), 'pie idéntico en las 10 páginas, con la licencia del MICI');
  const foot = [...foots][0];
  check(foot.includes('<div class="regs regs--foot">')
    && foot.includes('<b>Licencia de empresa financiera</b>Ministerio de Comercio e Industrias · Resolución No. 638 del 23 de septiembre de 2025')
    && foot.includes('<b>Supervisión en prevención de blanqueo de capitales</b>Superintendencia de Bancos de Panamá · Ley 23 de 2015'),
  'pie: placas del MICI (licencia) y de la SBP (prevención de blanqueo) con su alcance exacto');
  check(Object.values(html).every((s) => (s.match(/<a [^>]*href="[^"]*kredit-landings\/prestamos\/#solicitud"[^>]*>Solicitar<\/a>/) || []).length === 1), 'botón «Solicitar» del encabezado lleva a la landing de préstamos');
}
{
  const p = html.prestamos;
  check(p.includes('Información importante del crédito') && p.includes('id="info-credito"'), 'préstamos: bloque «Información importante del crédito»');
  for (const k of ['Plazo mínimo y máximo', 'Tasa de interés efectiva anual máxima', 'Ejemplo representativo', 'Comisiones', 'CREDU HOLDINGS', 'Licencia', 'Dirección física']) {
    check(p.includes(k), `préstamos: divulgación incluye "${k}"`);
  }
  check(html.inicio.includes('Kredit nunca te pedirá pagos por adelantado') && html.contacto.includes('Kredit nunca te pedirá pagos por adelantado'), 'inicio y contacto: aviso antifraude');
  check(/<h1 id="hero-title">Tu crédito, <span[^>]*>sin vueltas\.<\/span><\/h1>/.test(html.inicio), 'inicio: H1 «Tu crédito, sin vueltas.»');
  check(/data-payline/.test(html.inicio) && ['hoy', 'revision', 'q1', 'q2', 'nota'].every((k) => html.inicio.includes(`data-pl="${k}"`)), 'inicio: regla de quincenas con el marcado data-payline / data-pl');
  check(html.inicio.includes('href="../kredit-landings/prestamos/#solicitud" data-calc-cta'), 'inicio: el CTA del comprobante va a ../kredit-landings/prestamos/#solicitud');
  check(html.empresas.includes('../../kredit-landings/empresas/'), 'empresas: CTA a la landing de empresas (formulario)');
  check(/data-contact-form data-endpoint=""/.test(html.contacto), 'contacto: formulario con data-endpoint vacío (modo demo)');
  check(html.cuenta.includes('href="https://kredit.com.pa/app/" target="_blank" rel="noopener"'), 'accede a tu cuenta: botón al portal real');
  check(html.privacidad.includes('Derechos del Titular (Derechos ARCO)') && html.privacidad.includes('Decreto Ejecutivo No. 285 de 28 de mayo de 2021') && html.privacidad.includes('Calle 1ra La Cresta'), 'privacidad: texto real de la política (secciones, ARCO, domicilio)');
  check(html.privacidad.includes('[confirmar dirección oficial]') && html.contacto.includes('[confirmar dirección oficial]'), 'privacidad y contacto: diferencia de dirección marcada por confirmar');
  for (const n of ['aviso-legal', 'cookies']) check(html[n].includes('Texto de ejemplo para la vista previa: lo valida el asesor legal de Kredit') && html[n].includes('CREDU HOLDINGS, S.A.') && html[n].includes('Resolución No. 638'), `${n}: marcado como texto de ejemplo, con razón social y licencia`);
  for (const k of ['Organization', 'FinancialService']) check(html.inicio.includes(`"@type": "${k}"`), `inicio: JSON-LD ${k}`);
  {
    const trust = (html.inicio.match(/<section class="section section--navy trust"[\s\S]*?<\/section>/) || [''])[0];
    check(trust.includes('<div class="regs regs--trust">') && (trust.match(/class="reg"/g) || []).length === 2 && trust.includes('<dl class="ledger-lg">') && (trust.match(/<dt>/g) || []).length === 5,
      'inicio: la sección de confianza tiene las dos placas y conserva sus 5 puntos');
    const usos = (html.inicio.match(/<section class="section" id="para-que"[\s\S]*?<\/section>/) || [''])[0];
    const at = (k) => html.inicio.indexOf(k);
    check(usos.includes('¿Para qué lo necesitas?') && at('id="como-funciona"') > 0 && at('id="para-que"') > at('id="como-funciona"') && at('id="para-que"') < at('id="trust-title"'),
      'inicio: «¿Para qué lo necesitas?» va después de «Cómo funciona» y antes de la confianza');
    const want = [['meta-celebracion', 'Celebraciones'], ['estudiante-metas', 'Estudios'], ['familia-metas', 'Tu hogar'], ['meta-salud', 'Salud'], ['meta-deudas', 'Ordena tus deudas'], ['meta-viajes', 'Viajes'], ['meta-imprevistos', 'Imprevistos']];
    const cards = [...usos.matchAll(/<li class="use">[\s\S]*?<\/li>/g)].map((m) => m[0]);
    const okCards = cards.filter((c, i) => want[i] && c.includes(`img/${want[i][0]}-800.webp`) && c.includes(`>${want[i][1]}<span class="sr-only">`) && c.includes('href="prestamos/#calculadora"'));
    check(cards.length === 7 && okCards.length === 7, 'inicio: 7 metas en orden (celebraciones, estudios, hogar, salud, deudas, viajes, imprevistos) con foto y enlace a prestamos/#calculadora', `${okCards.length}/${cards.length}`);
    const hero = (html.inicio.match(/<section class="hero hero--home"[\s\S]*?<\/section>/) || [''])[0];
    check(hero.length > 1000 && !hero.includes('<img '), 'inicio: sin fotos en el hero');
  }
  check(html.preguntas.includes('"@type": "FAQPage"'), 'preguntas: JSON-LD FAQPage');
}
for (const f of ['site.js', 'site.css']) {
  const txt = fs.readFileSync(path.join(DIR, 'assets', f), 'utf8');
  const bad = BANNED.filter((re) => re.test(txt));
  check(bad.length === 0, `assets/${f}: sin términos prohibidos`, bad.join(' '));
}
{
  const css = fs.readFileSync(path.join(DIR, 'assets', 'site.css'), 'utf8');
  check(!/#[0-9a-f]{3,6}\b/i.test(css.replace(/\/\*[\s\S]*?\*\//g, '').replace(/#E7B26A|#fff\b/gi, '')),'site.css: sin colores nuevos (solo tokens de base.css, #fff y el filete ámbar de .tbd)');
}

// ---------------------------------------------------------------- 2. navegador
const TYPES = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml', '.png': 'image/png', '.webp': 'image/webp', '.json': 'application/json' };
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
const URLS = Object.fromEntries(Object.entries(PAGES).map(([n, s]) => [n, `${ORIGIN}/demo/kredit-web/${s ? s + '/' : ''}`]));
const browser = await chromium.launch();
const allowedHosts = new Set([new URL(ORIGIN).host, 'fonts.googleapis.com', 'fonts.gstatic.com']);

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
  page.on('console', (m) => { if (m.type() === 'error' && !(liveFonts && /Failed to load resource/.test(m.text()))) errors.push('console: ' + m.text()); });
  page.on('request', (r) => requests.push(r.url()));
  if (!liveFonts) {
    await page.route(/fonts\.(googleapis|gstatic)\.com/, (route) => route.fulfill({ status: 200, contentType: route.request().url().includes('googleapis') ? 'text/css' : 'font/woff2', body: '' }));
  }
  return { ctx, page, errors, requests };
}
const badHosts = (requests) => requests.filter((u) => { const x = new URL(u); return !['data:', 'blob:'].includes(x.protocol) && !allowedHosts.has(x.host); });

// --- auditoría de contraste (mini axe, con degradados): copiada de scripts/test-landings-kredit.mjs.
// Único añadido: con { fold: true } solo cuenta el texto que está en el primer pliegue.
const contrastAudit = ({ fold = false } = {}) => {
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
  const inFold = (r) => !fold || r.top < innerHeight;
  const tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT);
  for (let t = tw.nextNode(); t; t = tw.nextNode()) {
    if (!t.textContent.trim()) continue;
    const el = t.parentElement;
    if (!el || el.closest('script, style, noscript, option, svg, .sprite')) continue;
    if (!visible(el)) continue;
    const range = document.createRange();
    range.selectNodeContents(t);
    const rects = [...range.getClientRects()].filter((r) => r.width > 2 && r.height > 2 && r.bottom > 0 && r.right > 0 && r.left < innerWidth && inFold(r));
    if (!rects.length) continue;
    const fg = parse(getComputedStyle(el).color);
    audit(el, rects, fg, t.textContent.trim());
  }
  for (const el of document.querySelectorAll('input:not([type=checkbox]):not([type=radio]):not([type=range]):not([type=hidden]), select, textarea')) {
    if (!visible(el) || el.closest('.hp')) continue;
    const r = el.getBoundingClientRect();
    if (r.width < 4 || r.height < 4 || !inFold(r)) continue;
    const inner = [new DOMRect(r.left + 12, r.top + r.height / 2 - 6, Math.min(80, r.width - 24), 12)];
    audit(el, inner, parse(getComputedStyle(el).color), `${el.name || el.id} (valor)`);
    if (el.placeholder && !el.value) audit(el, inner, parse(getComputedStyle(el, '::placeholder').color), `${el.name || el.id} (placeholder)`);
  }
  return { fails, checked };
};
async function contrast(page, label, opts = {}) {
  await page.evaluate(() => window.scrollTo(0, 0));
  await page.waitForTimeout(50);
  const { fails, checked } = await page.evaluate(contrastAudit, opts);
  check(fails.length === 0 && checked > 8, `contraste AA: ${label} (${checked} textos)`, fails.slice(0, 6).join(' | '));
}
const noOverflow = (page) => page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);

// 2a. carga, red, scroll horizontal, banda, H1, hero
// Alturas del hero del inicio medidas el 12-oct-2026 en estas mismas condiciones (fuentes vacías, movimiento
// reducido). El hero tiene su altura probada: si cambia a propósito, se vuelve a medir y se actualiza aquí.
const HERO_BASE = { 1440: { heroH: 691 }, 390: { heroH: 778.3, cta: 759.6 } };
console.log('\nCarga, red y scroll horizontal (390 / 768 / 1440)');
const internalLinks = new Map(); // url sin hash → { hashes:Set, from:Set }
for (const width of [390, 768, 1440]) {
  for (const [name, url] of Object.entries(URLS)) {
    const { ctx, page, errors, requests } = await newPage(width);
    await page.goto(url, { waitUntil: 'networkidle' });
    await page.evaluate(() => document.fonts.ready);
    const over = await noOverflow(page);
    check(over <= 0, `${name} ${width}px: sin scroll horizontal`, `${over}px de más`);
    check(errors.length === 0, `${name} ${width}px: sin pageerror ni console.error`, errors.slice(0, 3).join(' | '));
    check(badHosts(requests).length === 0, `${name} ${width}px: solo peticiones propias y de Google Fonts`, badHosts(requests).slice(0, 3).join(', '));
    const st = await page.evaluate(() => {
      const b = document.querySelector('[data-demo-band]');
      const r = b.getBoundingClientRect();
      const hero = document.querySelector('main > section');
      return {
        band: { top: r.top, pos: getComputedStyle(b).position, text: b.textContent },
        h1: [...document.querySelectorAll('h1')].filter((h) => h.checkVisibility()).length,
        heroBottom: hero.getBoundingClientRect().bottom, heroH: hero.getBoundingClientRect().height,
        cta: document.querySelector('[data-calc-cta]')?.getBoundingClientRect().bottom ?? null,
        current: [...document.querySelectorAll('.nav__links a[aria-current="page"]')].map((a) => a.textContent.trim()),
        links: [...document.querySelectorAll('a[href]')].map((a) => a.href),
      };
    });
    check(st.band.top === 0 && st.band.pos === 'fixed' && st.band.text.includes('no se envían datos'), `${name} ${width}px: banda de demo fija arriba`);
    check(st.h1 === 1, `${name} ${width}px: un H1 visible`, String(st.h1));
    if (width === 1440) {
      check(JSON.stringify(st.current) === JSON.stringify(NAV_CURRENT[name] ? [NAV_CURRENT[name]] : []), `${name}: navegación marca la página actual (aria-current)`, st.current.join(','));
      if (name === 'inicio') check(st.heroBottom < 840, `inicio 1440×900: el hero termina antes de 840 px (${Math.round(st.heroBottom)})`);
      if (name === 'inicio') check(Math.abs(st.heroH - HERO_BASE[1440].heroH) <= 1, `inicio 1440×900: alto del hero sin cambios (${st.heroH.toFixed(1)} ≈ ${HERO_BASE[1440].heroH})`);
      else check(st.heroH <= 540, `${name} 1440×900: hero corto, ≤ 60% de la pantalla (${Math.round(st.heroH)} px)`);
      for (const href of st.links) {
        const u = new URL(href);
        if (u.origin !== ORIGIN) continue;
        const key = u.origin + u.pathname;
        if (!internalLinks.has(key)) internalLinks.set(key, { hashes: new Set(), from: new Set() });
        const e = internalLinks.get(key);
        e.from.add(name);
        if (u.hash && u.hash !== '#') e.hashes.add(decodeURIComponent(u.hash.slice(1)));
      }
    }
    if (width === 390 && name === 'inicio') check(st.cta !== null && st.cta < 844, `inicio 390×844: el CTA del comprobante termina antes de 844 px (${Math.round(st.cta)})`);
    if (width === 390 && name === 'inicio') check(Math.abs(st.heroH - HERO_BASE[390].heroH) <= 1 && Math.abs(st.cta - HERO_BASE[390].cta) <= 1, `inicio 390×844: alto del hero y posición del CTA sin cambios (${st.heroH.toFixed(1)} / ${st.cta.toFixed(1)})`);
    await ctx.close();
  }
}

// 2a-bis. reguladores, metas e imágenes
console.log('\nReguladores, metas e imágenes (1440 / 390)');
const scrollAll = (page) => page.evaluate(async () => {
  for (let y = 0; y < document.documentElement.scrollHeight; y += 400) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 25)); }
  window.scrollTo(0, 0);
});
// Espera a que las imágenes indicadas terminen de cargar (las diferidas de un carrusel se fuerzan a «eager»).
const loadImgs = (page, sel) => page.evaluate(async (s) => {
  const imgs = [...document.querySelectorAll(s)];
  imgs.forEach((i) => { if (!i.complete) i.loading = 'eager'; });
  await Promise.race([Promise.all(imgs.map((i) => (i.complete ? 0 : new Promise((r) => { i.addEventListener('load', r, { once: true }); i.addEventListener('error', r, { once: true }); })))), new Promise((r) => setTimeout(r, 5000))]);
  return imgs.map((i) => ({ src: i.currentSrc || i.src, ok: i.complete && i.naturalWidth > 0 }));
}, sel);
const regsText = (page, sel) => page.evaluate((s) => [...document.querySelectorAll(s + ' .reg')].map((r) => r.innerText.replace(/\s+/g, ' ').trim()), sel);
for (const width of [1440, 390]) {
  for (const [name, url] of Object.entries(URLS)) {
    const { ctx, page } = await newPage(width);
    const bad = [];
    page.on('response', (r) => { if (r.status() >= 400) bad.push(`${r.status()} ${r.url()}`); });
    await page.goto(url, { waitUntil: 'networkidle' });
    await scrollAll(page);
    const imgs = await loadImgs(page, 'img');
    check(imgs.length > 0 && imgs.every((i) => i.ok) && bad.length === 0, `${name} ${width}px: las ${imgs.length} imágenes cargan, sin respuestas 404`, [...imgs.filter((i) => !i.ok).map((i) => i.src), ...bad].slice(0, 4).join(' | '));
    const foot = await regsText(page, '.site-footer .regs--foot');
    const footLogos = await loadImgs(page, '.site-footer .reg__logo');
    check(foot.length === 2 && footLogos.length === 2 && footLogos.every((i) => i.ok)
      && /Licencia de empresa financiera/.test(foot[0]) && /638/.test(foot[0]) && /prevención de blanqueo/.test(foot[1]),
    `${name} ${width}px: pie con las placas del MICI y la SBP, logos cargados`, JSON.stringify(foot).slice(0, 160));
    const txt = await page.evaluate(() => document.body.innerText);
    check(!/regulad[oa]s?\s+por\s+la\s+superintendencia/i.test(txt), `${name} ${width}px: el texto visible nunca dice «regulada por la Superintendencia»`);
    if (name === 'inicio') {
      const trust = await regsText(page, '.trust .regs--trust');
      const trustLogos = await loadImgs(page, '.trust .reg__logo');
      const onWhite = await page.evaluate(() => [...document.querySelectorAll('.trust .reg')].every((r) => getComputedStyle(r).backgroundColor === 'rgb(255, 255, 255)'));
      check(trust.length === 2 && trustLogos.every((i) => i.ok) && trustLogos.length === 2 && onWhite
        && /Licencia de empresa financiera/.test(trust[0]) && /638/.test(trust[0]) && /prevención de blanqueo/.test(trust[1]),
      `inicio ${width}px: sección de confianza con las dos placas blancas y logos cargados`, JSON.stringify(trust).slice(0, 160));
      const usos = await page.evaluate(() => [...document.querySelectorAll('#para-que .use')].map((c) => ({ href: c.querySelector('.use__title a')?.href || '', title: c.querySelector('.use__title')?.textContent.trim() })));
      const usosImgs = await loadImgs(page, '#para-que .use img');
      check(usos.length === 7 && usosImgs.length === 7 && usosImgs.every((i) => i.ok) && usos.every((u) => u.href.endsWith('/demo/kredit-web/prestamos/#calculadora')),
        `inicio ${width}px: «¿Para qué lo necesitas?» con 7 tarjetas, foto cargada y enlace a la calculadora`, JSON.stringify(usos.map((u) => u.title)));
      if (width === 390) {
        const sc = await page.evaluate(() => { const u = document.querySelector('#para-que .uses'); return { sw: u.scrollWidth, cw: u.clientWidth, ox: getComputedStyle(u).overflowX }; });
        check(sc.ox === 'auto' && sc.sw > sc.cw, 'inicio 390px: las metas se deslizan dentro de su carrusel (la página no se desborda)', JSON.stringify(sc));
      } else {
        await page.locator('#para-que .use__title a').first().focus();
        const ring = await page.evaluate(() => { const c = document.querySelector('#para-que .use'); const cs = getComputedStyle(c); return cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 2; });
        check(ring, 'inicio 1440px: la tarjeta de meta muestra el foco al recibirlo');
      }
    }
    await ctx.close();
  }
}

// 2b. enlaces internos
console.log('\nEnlaces internos');
{
  const results = [];
  for (const [url, info] of internalLinks) {
    const res = await fetch(url);
    const body = res.ok ? await res.text() : '';
    const missing = [...info.hashes].filter((h) => !body.includes(`id="${h}"`));
    results.push({ url, status: res.status, missing, from: [...info.from] });
  }
  const bad = results.filter((r) => r.status !== 200);
  const badHash = results.filter((r) => r.missing.length);
  check(results.length >= 12 && bad.length === 0, `todos los enlaces internos responden 200 (${results.length} URL distintas)`, bad.map((r) => `${r.url} ${r.status} desde ${r.from.join(',')}`).join(' | '));
  check(results.some((r) => r.url.includes('/kredit-landings/prestamos/')) && results.some((r) => r.url.includes('/kredit-landings/empresas/')), 'incluye los enlaces a ../kredit-landings/ (préstamos y empresas)');
  check(badHash.length === 0, 'los anclajes (#…) de los enlaces internos existen en la página destino', badHash.map((r) => `${r.url}#${r.missing.join(',#')}`).join(' | '));
}

// 2c. menú móvil
console.log('\nMenú móvil (390 px)');
for (const name of Object.keys(URLS)) {
  const { ctx, page, errors } = await newPage(390);
  await page.goto(URLS[name]);
  const s0 = await page.evaluate(() => ({ btn: document.querySelector('[data-menu-btn]').checkVisibility(), links: document.querySelector('.nav__links').checkVisibility(), exp: document.querySelector('[data-menu-btn]').getAttribute('aria-expanded'), menu: document.querySelector('[data-menu]').hidden }));
  await page.click('[data-menu-btn]');
  const s1 = await page.evaluate(() => ({ exp: document.querySelector('[data-menu-btn]').getAttribute('aria-expanded'), menu: document.querySelector('[data-menu]').checkVisibility(), n: [...document.querySelectorAll('[data-menu] a')].filter((a) => a.checkVisibility()).length }));
  await page.keyboard.press('Tab');
  const inMenu = await page.evaluate(() => !!document.activeElement.closest('[data-menu]'));
  await page.keyboard.press('Escape');
  const s2 = await page.evaluate(() => ({ exp: document.querySelector('[data-menu-btn]').getAttribute('aria-expanded'), menu: document.querySelector('[data-menu]').hidden, focus: document.activeElement.hasAttribute('data-menu-btn') }));
  await page.click('[data-menu-btn]');
  await page.mouse.click(6, 12); // la banda de demo: fuera del menú y sin enlaces
  const s3 = await page.evaluate(() => document.querySelector('[data-menu-btn]').getAttribute('aria-expanded'));
  check(s0.btn && !s0.links && s0.exp === 'false' && s0.menu, `${name}: botón de menú visible y menú cerrado al cargar`);
  check(s1.exp === 'true' && s1.menu && s1.n >= 7 && inMenu, `${name}: el menú abre (aria-expanded=true, ${s1.n} enlaces, Tab entra al menú)`);
  check(s2.exp === 'false' && s2.menu && s2.focus, `${name}: Escape cierra el menú y devuelve el foco al botón`);
  check(s3 === 'false', `${name}: clic fuera cierra el menú`);
  check(errors.length === 0, `${name}: menú sin errores`, errors.join(' | '));
  await ctx.close();
}

// 2d. calculadoras
console.log('\nCalculadora del inicio y de préstamos');
{
  const { ctx, page, errors } = await newPage(1440);
  await page.goto(URLS.inicio);
  const e0 = calc.escenario(1000, 18, 12);
  const read = () => page.evaluate(() => ({ q: document.querySelector('[data-out="quincena"]').textContent.trim(), c: document.querySelector('[data-out="cuota"]').textContent.trim(), t: document.querySelector('[data-out="total"]').textContent.trim(), s: document.querySelector('[data-sticky-cuota]').textContent.trim() }));
  const v0 = await read();
  check(v0.c === 'B/. 91.68' && v0.c === money(e0.cuota) && v0.q === 'B/. 45.84' && v0.q === money(e0.quincena) && v0.t === money(e0.total), 'inicio: B/. 1,000 · 12 meses · 18% = B/. 91.68 al mes y B/. 45.84 por quincena (calc.escenario)', JSON.stringify(v0));
  await page.evaluate(() => { const r = document.getElementById('c-range'); r.value = '2500'; r.dispatchEvent(new Event('input', { bubbles: true })); });
  await page.click('label[for="c-pl-24"]');
  const e1 = calc.escenario(2500, 18, 24);
  const v1 = await read();
  check((await page.inputValue('#c-monto')) === '2,500' && v1.c === money(e1.cuota) && v1.q === money(e1.quincena) && v1.t === money(e1.total), `inicio: deslizador B/. 2,500 + plazo 24 recalcula (${money(e1.quincena)} por quincena)`, JSON.stringify(v1));
  check(v1.s === money(e1.quincena), 'inicio: la barra fija móvil muestra la misma cuota quincenal');
  await page.fill('#c-monto', '3500');
  const v2 = await read();
  check(await page.isVisible('#c-monto-err') && /3,000/.test(await page.textContent('#c-monto-err')) && v2.q === 'B/. —', 'inicio: monto mayor a B/. 3,000 muestra el error y no calcula');
  await page.fill('#c-monto', '800');
  await page.click('label[for="c-pl-6"]');
  check((await read()).q === money(calc.escenario(800, 18, 6).quincena) && !(await page.isVisible('#c-monto-err')), 'inicio: escribir el monto recalcula y quita el error');
  check(errors.length === 0, 'inicio: calculadora sin errores', errors.join(' | '));
  await ctx.close();
}
{
  const { ctx, page, errors } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await page.fill('#c-monto', '2000');
  await page.click('label[for="c-pl-18"]');
  await page.fill('#c-tasa', '24');
  const e = calc.escenario(2000, 24, 18);
  const r = await page.evaluate(() => ({
    q: document.querySelector('[data-out="quincena"]').textContent.trim(),
    total: document.querySelector('[data-out="total"]').textContent.trim(),
    intereses: document.querySelector('[data-out="intereses"]').textContent.trim(),
    quincenas: document.querySelector('[data-out="quincenas"]').textContent.trim(),
    rows: [...document.querySelectorAll('[data-calc-compare] tbody tr')].map((tr) => ({ cur: tr.classList.contains('is-current'), cells: [...tr.children].map((c) => c.textContent.trim()) })),
  }));
  check(r.q === money(e.quincena) && r.total === money(e.total) && r.intereses === money(e.total - 2000) && r.quincenas === '36', `préstamos: B/. 2,000 · 18 meses · 24% → ${money(e.quincena)} por quincena, intereses y quincenas`, JSON.stringify(r).slice(0, 200));
  const cur = r.rows.filter((x) => x.cur);
  check(r.rows.length === 6 && cur.length === 1 && cur[0].cells[0] === '18 meses' && r.rows.every((x) => x.cells[1] === money(calc.escenario(2000, 24, parseInt(x.cells[0], 10)).quincena)), 'préstamos: la tabla compara los 6 plazos y marca el elegido');
  check(errors.length === 0, 'préstamos: calculadora sin errores', errors.join(' | '));
  await ctx.close();
}

// 2e. regla de quincenas
{
  const { ctx, page } = await newPage(1440);
  await page.goto(URLS.inicio);
  const t = await page.evaluate(() => ({ hoy: document.querySelector('[data-pl="hoy"]').textContent, q1: document.querySelector('[data-pl="q1"]').textContent }));
  check(/^(Hoy · |[a-zé]{3} \d)/.test(t.hoy) && /ejemplo/.test(t.q1) && /\d/.test(t.q1), 'inicio: la regla de quincenas muestra fechas reales (quincenas.js)', JSON.stringify(t));
  await ctx.close();
  // una quincena que cae en fin de semana se paga el día hábil anterior
  const q = await import(pathToFileURL(path.join(LANDINGS, 'assets', 'quincenas.js')).href + V);
  for (const [d, q1, q2] of [
    [new Date(2026, 9, 12), 'jue 15 oct · ejemplo', 'vie 30 oct'],
    [new Date(2026, 9, 30), 'vie 13 nov · ejemplo', 'lun 30 nov'],
    [new Date(2026, 1, 2), 'vie 13 feb · ejemplo', 'vie 27 feb'],
  ]) {
    const r = q.regla(d);
    check(r.q1 === q1 && r.q2 === q2, `quincenas desde ${d.toDateString()}: ${q1} / ${q2}`, JSON.stringify([r.q1, r.q2]));
  }
}

// 2f. formulario de contacto en modo demo
console.log('\nFormulario de contacto (modo demo)');
for (const width of [1440, 390]) {
  const { ctx, page, errors, requests } = await newPage(width);
  await page.goto(URLS.contacto, { waitUntil: 'networkidle' });
  await page.click('#form-contacto [type="submit"]');
  const e1 = await page.evaluate(() => ({ vis: [...document.querySelectorAll('#form-contacto .field-error')].filter((e) => !e.hidden).length, focus: document.activeElement.id, inv: document.getElementById('k-nombre').getAttribute('aria-invalid'), status: document.querySelector('#form-contacto [data-form-status]').textContent }));
  check(e1.vis === 5 && e1.focus === 'k-nombre' && e1.inv === 'true' && /Nombre/.test(e1.status), `${width}px: enviar vacío muestra 5 errores, aria-invalid y foco en el primero`, JSON.stringify(e1));
  await page.fill('#k-nombre', 'María Pérez Gómez');
  await page.fill('#k-correo', 'maria@');
  await page.fill('#k-celular', '5551234');
  await page.selectOption('#k-motivo', 'prestamo');
  await page.fill('#k-mensaje', 'Quiero saber si mi empresa está afiliada.');
  await page.click('#form-contacto [type="submit"]');
  check(await page.isVisible('#k-correo-err') && await page.isVisible('#k-celular-err') && await page.isVisible('#k-priv-err'), `${width}px: correo, celular y privacidad inválidos bloquean el envío`);
  await page.fill('#k-correo', 'maria.perez@example.com');
  await page.fill('#k-celular', '6123-4567');
  await page.check('#form-contacto input[name="acepta_privacidad"]');
  const before = requests.length;
  await page.click('#form-contacto [type="submit"]');
  await page.waitForSelector('[data-contact-result]:not([hidden])');
  await page.waitForTimeout(300);
  const r = await page.evaluate(() => ({ text: document.querySelector('[data-contact-result]').innerText, formHidden: document.getElementById('form-contacto').hidden, net: window.__net, focus: document.activeElement.hasAttribute('data-contact-result') }));
  check(/Modo demo/.test(r.text) && /no se envían datos/.test(r.text) && r.formHidden && r.focus, `${width}px: al enviar muestra el mensaje de demo`, r.text.slice(0, 80));
  check(requests.length === before && r.net.fetch === 0 && r.net.xhr === 0 && r.net.beacon === 0, `${width}px: modo demo sin peticiones al enviar`, requests.slice(before).join(', '));
  await page.click('[data-result-again]');
  check(await page.isVisible('#form-contacto') && (await page.inputValue('#k-nombre')) === '', `${width}px: «Escribir otro mensaje» vuelve al formulario vacío`);
  check(errors.length === 0, `${width}px: contacto sin errores`, errors.join(' | '));
  if (width === 1440) await contrast(page, 'contacto 1440px con formulario (página completa)');
  await ctx.close();
}

// 2g. JSON-LD
console.log('\nDatos estructurados');
{
  const { ctx, page } = await newPage(1440);
  await page.goto(URLS.preguntas);
  const d = await page.evaluate(() => {
    const ld = [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent));
    const faq = ld.find((x) => x['@type'] === 'FAQPage');
    const n = (s) => String(s || '').replace(/\s+/g, ' ').trim();
    const visible = [...document.querySelectorAll('.faq details')].map((dt) => ({ q: n(dt.querySelector('summary').textContent), a: n(dt.querySelector('.answer').textContent) }));
    return { ld: faq ? faq.mainEntity.map((q) => ({ type: q['@type'], q: n(q.name), atype: q.acceptedAnswer['@type'], a: n(q.acceptedAnswer.text) })) : [], visible, cats: [...document.querySelectorAll('.faq-group h2')].map((h) => h.textContent.trim()) };
  });
  check(d.visible.length >= 20 && d.ld.length === d.visible.length, `preguntas: JSON-LD FAQPage con ${d.ld.length} preguntas, igual que las visibles (${d.visible.length})`);
  const diff = d.visible.findIndex((v, i) => !d.ld[i] || d.ld[i].q !== v.q || d.ld[i].a !== v.a || d.ld[i].type !== 'Question' || d.ld[i].atype !== 'Answer');
  check(diff === -1, 'preguntas: cada pregunta y respuesta del JSON-LD coincide con el texto visible', diff >= 0 ? `#${diff}: ${d.visible[diff].q}` : '');
  check(JSON.stringify(d.cats) === JSON.stringify(['Para personas', 'Pagos y tu cuenta', 'Para empresas', 'Seguridad y datos']), 'preguntas: categorías personas, pagos, empresas y seguridad y datos', d.cats.join(', '));
  await page.goto(URLS.inicio);
  const org = await page.evaluate(() => [...document.querySelectorAll('script[type="application/ld+json"]')].map((s) => JSON.parse(s.textContent)));
  const graph = org[0]?.['@graph'] || [];
  check(graph.some((x) => x['@type'] === 'Organization' && x.legalName === 'CREDU HOLDINGS, S.A.') && graph.some((x) => x['@type'] === 'FinancialService' && x.provider), 'inicio: JSON-LD Organization + FinancialService válido');
  await ctx.close();
}

// 2h. contraste AA
console.log('\nContraste AA del primer pliegue (1440 y 390)');
for (const width of [1440, 390]) {
  for (const [name, url] of Object.entries(URLS)) {
    const { ctx, page } = await newPage(width);
    await page.goto(url, { waitUntil: 'networkidle' });
    await contrast(page, `${name} ${width}px, primer pliegue`, { fold: true });
    await ctx.close();
  }
}
console.log('\nContraste AA de la página completa (1440, preguntas abiertas)');
for (const [name, url] of Object.entries(URLS)) {
  const { ctx, page } = await newPage(1440);
  await page.goto(url, { waitUntil: 'networkidle' });
  await page.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
  await contrast(page, `${name} 1440px, página completa`);
  await ctx.close();
}
{
  // Control: la auditoría debe detectar un texto con contraste bajo sobre el plano navy.
  const { ctx, page } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await page.addStyleTag({ content: '.phero__lead { color: #1B2F6B !important; }' });
  const { fails } = await page.evaluate(contrastAudit, { fold: true });
  check(fails.some((f) => f.includes('phero__lead')), 'la auditoría de contraste detecta un texto deficiente (control)', fails.slice(0, 1).join(''));
  await ctx.close();
}

// 2i. teclado, movimiento reducido y WhatsApp en demo
console.log('\nTeclado, movimiento y WhatsApp');
{
  const { ctx, page, requests } = await newPage(1440);
  await page.goto(URLS.inicio);
  await page.keyboard.press('Tab');
  check(await page.evaluate(() => document.activeElement.classList.contains('skip-link') && getComputedStyle(document.activeElement).top !== '-80px'), 'Tab: aparece «Saltar al contenido»');
  const ring = [];
  for (let i = 0; i < 10; i++) {
    await page.keyboard.press('Tab');
    ring.push(await page.evaluate(() => { const a = document.activeElement; const cs = getComputedStyle(a); return { el: a.tagName + '.' + a.className, ok: (cs.outlineStyle !== 'none' && parseFloat(cs.outlineWidth) >= 2) || cs.boxShadow !== 'none' }; }));
  }
  check(ring.every((x) => x.ok), 'foco visible en los primeros 10 elementos con Tab', ring.filter((x) => !x.ok).map((x) => x.el).join(', '));
  check((await page.evaluate(() => getComputedStyle(document.querySelector('.hero__aside')).animationName)) === 'none', 'movimiento reducido: sin animación de entrada');
  const before = requests.length;
  const url0 = page.url();
  await page.click('.cta-final [data-whatsapp]');
  await page.waitForSelector('[data-toast].is-on');
  const toastText = await page.textContent('[data-toast]');
  // El clic baja hasta el llamado final y carga imágenes diferidas propias (fotos, logos del pie): eso no es un chat.
  const extra = requests.slice(before).filter((u) => !(new URL(u).origin === ORIGIN && /\.(webp|png)$/.test(new URL(u).pathname)));
  check(/Modo demo/.test(toastText) && /6997-5664/.test(toastText) && page.url() === url0 && extra.length === 0 && ctx.pages().length === 1, 'WhatsApp en demo: aviso, sin abrir chat ni navegar', `${toastText} ${extra.join(', ')}`);
  await ctx.close();
}

await browser.close();
server.close();
console.log(`\n${passed} pruebas OK, ${failures.length} fallas`);
if (failures.length) { console.log('\nFallas:\n- ' + failures.join('\n- ')); process.exit(1); }
