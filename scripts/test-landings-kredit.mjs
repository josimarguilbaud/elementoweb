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
const V = '?v=20261012f';
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
const ROBOTO = '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;800;900&amp;family=Roboto+Mono:wght@400;500;600&amp;display=swap">';
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
  check(html.includes(ROBOTO), `${name}: Roboto y Roboto Mono desde Google Fonts`);
}
for (const [f, txt] of assetsText) {
  const bad = BANNED.filter((re) => re.test(txt));
  check(bad.length === 0, `assets/${f}: sin términos prohibidos`, bad.join(' '));
}
{
  const css = fs.readFileSync(path.join(DIR, 'assets', 'base.css'), 'utf8');
  check(/reemplazar con la identidad de Kredit/.test(css) && /--blue:\s*#1559ED/i.test(css) && /--navy:\s*#091845/i.test(css), 'base.css: tokens de marca en :root documentados');
  // page.js mide la banda y el encabezado y escribe --band-h / --header-h. Si la altura dependiera de
  // esas variables, WebKit (iPhone) mide antes de aplicar estilos y el encabezado queda en 232 px.
  check(!/(?:^|[;{\s])(?:min-|max-)?height:\s*var\(--(?:band|header)-h\)/m.test(css), 'base.css: la altura de la banda y del encabezado no depende de las variables que mide page.js');
  const p = fs.readFileSync(PAGES.prestamos, 'utf8');
  check(/data-endpoint=""/.test(p) && /data-endpoint=""/.test(fs.readFileSync(PAGES.empresas, 'utf8')), 'formularios con data-endpoint vacío (modo demo)');
  check((p.match(/Información importante del crédito/g) || []).length >= 2, 'préstamos: bloque "Información importante del crédito" junto a la calculadora y al pie');
  for (const k of ['Plazo mínimo y máximo', 'Tasa de interés efectiva anual máxima', 'Ejemplo representativo', 'Comisiones', 'CREDU HOLDINGS', 'Licencia', 'Dirección física']) {
    check(p.includes(k), `préstamos: divulgación incluye "${k}"`);
  }
  check(p.includes('Kredit nunca te pedirá pagos por adelantado'), 'préstamos: aviso antifraude');
  // Préstamos es para el público que llega de Google y redes (decisión del 12-oct): nada de empresas afiliadas.
  check(!/afiliad/i.test(p), 'préstamos: el HTML no menciona "afiliad"');
  check(!/id="demo-solo-afiliadas"|data-rule-state|data-step="referido"|id="empresa-list"|role="(?:combobox|listbox)"|name="afiliada"|data-company-status|name="(?:rec|ref)_|refer-box/.test(p), 'préstamos: sin ajuste solo-afiliadas, ruta de referido, lista de empresas ni pregunta de afiliación');
  check(!/\.\.\/empresas\//.test(p), 'préstamos: sin enlaces a la landing de empresas (menú, pie ni tarjetas)');
  check(/data-field="empresa">\s*<label for="f-empresa">¿En qué empresa trabajas\?<\/label>\s*<input class="input" id="f-empresa" name="empresa" type="text" autocomplete="organization"/.test(p), 'préstamos: «¿En qué empresa trabajas?» es un campo de texto normal');
  check(/Trabajar en una empresa con planilla en Panamá <span class="tbd">/.test(p) && /id="asesor"[\s\S]*?data-whatsapp="50769975664"/.test(p), 'préstamos: requisito de planilla (por confirmar) y tarjeta «Habla con un asesor»');
}
{
  // Empresas (B2B): licencia visible, nada no confirmado presentado como hecho, fotos locales y fuera del hero.
  const html = fs.readFileSync(PAGES.empresas, 'utf8');
  const hero = html.slice(html.indexOf('<section class="hero'), html.indexOf('</section>', html.indexOf('<section class="hero')));
  check(/class="seal"[\s\S]*?Resolución No\. 638/.test(hero) && /Res\. No\. 638 de 2025/.test(html), 'empresas: sello del MICI en el hero y licencia en el pie');
  check(!/sin costo para la empresa/i.test(html.replace(/<span class="tbd">[^<]*<\/span>/g, '')), 'empresas: no afirma "sin costo para la empresa"');
  check(/Costo para la empresa<\/dt><dd><span class="tbd">/.test(html), 'empresas: costo para la empresa marcado como por confirmar');
  check(!/<img\b/.test(hero), 'empresas: sin fotos en el hero');
  const imgs = [...html.matchAll(/<figure class="photo[^"]*">\s*<img\b([^>]*)>\s*<figcaption[^>]*>([^<]*)<\/figcaption>/g)];
  const okImg = (a, cap) => /src="\.\.\/\.\.\/kredit-web\/img\/[a-z-]+-800\.webp"/.test(a) && /-1600\.webp 1600w/.test(a) && /width="800" height="537"/.test(a) && /loading="lazy"/.test(a) && /alt="[^"]{12,}"/.test(a) && cap === 'Imagen ilustrativa generada con IA';
  const names = imgs.map((m) => (m[1].match(/img\/([a-z-]+)-800\.webp/) || [])[1]).sort();
  check(JSON.stringify(names) === JSON.stringify(['comercio-colaborador', 'equipo-almacen', 'firma-convenio', 'kit-cartelera', 'rrhh-presentacion', 'rrhh-reunion']) && imgs.every((m) => okImg(m[1], m[2].trim())), 'empresas: 6 fotos locales con srcset, medidas, lazy y aviso de IA', names.join(', '));
  check(!/portal-celular/.test(html), 'empresas: no usa la foto del portal en el celular');
  const sec = (id) => { const i = html.indexOf(`id="${id}"`); return i < 0 ? '' : html.slice(i, html.indexOf('</section>', i)); };
  check(/rrhh-presentacion-800\.webp/.test(sec('beneficios')) && /kit-cartelera-800\.webp/.test(sec('activacion')) && /class="poster"/.test(sec('activacion')), 'empresas: rrhh-presentacion en «Lo que gana tu empresa» y kit-cartelera junto al afiche del kit');
}
{
  // Préstamos: fotos fuera del hero; «Cómo funciona» con la parada de bus; metas con foto sin perder data-goal.
  const html = fs.readFileSync(PAGES.prestamos, 'utf8');
  const hero = html.slice(html.indexOf('<section class="hero'), html.indexOf('</section>', html.indexOf('<section class="hero')));
  check(!/<img\b/.test(hero), 'préstamos: sin fotos en el hero');
  const sec = (id) => { const i = html.indexOf(`id="${id}"`); return i < 0 ? '' : html.slice(i, html.indexOf('</section>', i)); };
  check(/<figure class="photo[^"]*">\s*<img\b[^>]*solicitud-parada-800\.webp[^>]*>\s*<figcaption class="photo__tag">Imagen ilustrativa generada con IA<\/figcaption>/.test(sec('como-funciona')) && /<ol class="steps steps--stack">/.test(sec('como-funciona')), 'préstamos: «Cómo funciona» partido con la foto de la parada de bus y los 4 pasos');
  check(/deposito-celular-800\.webp/.test(sec('beneficios')), 'préstamos: «Beneficios» conserva la foto del depósito');
  const GOALS = { celebracion: 'meta-celebracion', estudios: 'estudiante-metas', hogar: 'familia-metas', salud: 'meta-salud', deudas: 'meta-deudas', viajes: 'meta-viajes', imprevistos: 'meta-imprevistos' };
  const goals = [...sec('metas').matchAll(/<button type="button" class="goal[^"]*" data-goal="([a-z]+)"[^>]*>([\s\S]*?)<\/button>/g)];
  const wrong = goals.filter((m) => !new RegExp(`img/${GOALS[m[1]]}-800\\.webp"`).test(m[2])).map((m) => m[1]);
  check(goals.length === 7 && JSON.stringify(goals.map((m) => m[1]).sort()) === JSON.stringify(Object.keys(GOALS).sort()) && wrong.length === 0, 'préstamos: 7 tarjetas de metas (botones data-goal) con su foto', wrong.join(', '));
  check(goals.length === 7 && goals.every((m) => /aria-labelledby="goal-[a-z]+-t"/.test(m[0]) && /<span class="goal__title" id="goal-[a-z]+-t">/.test(m[2])), 'préstamos: el nombre de cada tarjeta de meta sale de su título, no del alt de la foto');
  check(/Imágenes ilustrativas generadas con IA/.test(sec('metas')), 'préstamos: aviso de IA bajo las fotos de metas');
}
{
  // Fotos de ambas landings: locales, con 800w/1600w, sizes, lazy, alt y width/height iguales al archivo real.
  const webpSize = (file) => {
    const b = fs.readFileSync(file); const t = b.toString('ascii', 12, 16);
    if (t === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
    if (t === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    if (t === 'VP8L') { const bits = b.readUInt32LE(21); return [(bits & 0x3fff) + 1, ((bits >> 14) & 0x3fff) + 1]; }
    return null;
  };
  const IMG = path.join(ROOT, 'demo', 'kredit-web', 'img');
  for (const name of ['prestamos', 'empresas']) {
    const html = fs.readFileSync(PAGES[name], 'utf8');
    const tags = [...html.matchAll(/<img\b[^>]*src="\.\.\/\.\.\/kredit-web\/img\/([a-z-]+)-800\.webp"[^>]*>/g)];
    const bad = tags.filter(([tag, n]) => {
      const f800 = path.join(IMG, `${n}-800.webp`), f1600 = path.join(IMG, `${n}-1600.webp`);
      if (!fs.existsSync(f800) || !fs.existsSync(f1600)) return true;
      const [w, h] = webpSize(f800);
      return !(tag.includes(`${n}-800.webp 800w`) && tag.includes(`${n}-1600.webp 1600w`) && /\ssizes="[^"]+"/.test(tag) && tag.includes(`width="${w}" height="${h}"`) && /loading="lazy"/.test(tag) && /alt="[^"]{20,}"/.test(tag));
    }).map(([, n]) => n);
    check(tags.length >= (name === 'prestamos' ? 9 : 6) && bad.length === 0, `${name}: ${tags.length} fotos con srcset 800w/1600w, sizes, lazy, alt y medidas del archivo real`, bad.join(', '));
  }
}
{
  // Reguladores (decisión de Josimar): placas del MICI y de la SBP en un bloque propio y en el pie.
  // El MICI da la licencia; la SBP supervisa solo la prevención del blanqueo de capitales.
  for (const name of ['prestamos', 'empresas']) {
    const html = fs.readFileSync(PAGES[name], 'utf8');
    const mici = html.match(/<div class="reg"><img class="reg__logo reg__logo--mici" src="\.\.\/assets\/reguladores\/mici\.png" width="720" height="119" alt="Ministerio de Comercio e Industrias de Panamá" loading="lazy"><p class="reg__txt"><b>Licencia de empresa financiera<\/b>Ministerio de Comercio e Industrias · Resolución No\. 638 del 23 de septiembre de 2025<\/p><\/div>/g) || [];
    const sbp = html.match(/<div class="reg"><img class="reg__logo reg__logo--sbp" src="\.\.\/assets\/reguladores\/sbp\.png" width="274" height="189" alt="Superintendencia de Bancos de Panamá" loading="lazy"><p class="reg__txt"><b>Supervisión en prevención de blanqueo de capitales<\/b>Superintendencia de Bancos de Panamá · Ley 23 de 2015 <span class="tbd">\[registro por confirmar con Kredit\]<\/span><\/p><\/div>/g) || [];
    check(mici.length === 2 && sbp.length === 2, `${name}: placas del MICI y de la SBP con el marcado exacto, en el bloque de confianza y en el pie`, `${mici.length} MICI, ${sbp.length} SBP`);
    check(!/regulad[oa]s?\s+por\s+la\s+superintendencia/i.test(html), `${name}: no dice «regulada por la Superintendencia»`);
    check(!/licencia[^<]{0,80}superintendencia|superintendencia[^<]{0,80}licencia/i.test(html), `${name}: no atribuye la licencia a la Superintendencia`);
    check(/<link rel="stylesheet" href="\.\.\/assets\/bloques\.css\?v=/.test(html), `${name}: enlaza bloques.css`);
  }
  for (const f of ['mici.png', 'sbp.png']) check(fs.existsSync(path.join(DIR, 'assets', 'reguladores', f)), `assets/reguladores/${f} existe`);
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
  // Puntaje de ejemplo sin afiliación: antigüedad 30/15, salario 25, cuota ≤ 30 % del salario 30, monto 15.
  const s1 = form.computeScore(b2c.config.score, { monto: 2500, salario_neto: 1200, cuota_estimada: 132.18, antiguedad: '2-5a' });
  const s2 = form.computeScore(b2c.config.score, { monto: 1500, salario_neto: 1000, cuota_estimada: 137.52, antiguedad: '6-11m' });
  const s3 = form.computeScore(b2c.config.score, { monto: 1500, salario_neto: 500, cuota_estimada: 137.52, antiguedad: '6-11m' });
  const s4 = form.computeScore(b2c.config.score, { monto: 3000, salario_neto: 450, cuota_estimada: 526.58, antiguedad: '1-2a' });
  const s5 = form.computeScore(b2c.config.score, { monto: 3000, salario_neto: 300, cuota_estimada: 526.58, antiguedad: 'menos-6m' });
  check(s1.tier === 'calificado' && s1.score === 100, 'B2C: 2 a 5 años, B/. 1,200, cuota 11 % del salario → Calificado (100)', JSON.stringify(s1));
  check(s2.tier === 'calificado' && s2.score === 85, 'B2C: 6 a 11 meses, B/. 1,000, cuota 14 % → Calificado (85)', JSON.stringify(s2));
  check(s3.tier === 'revisar' && s3.score === 60, 'B2C: 6 a 11 meses, B/. 500 (bajo el umbral), cuota 28 % → Revisar (60)', JSON.stringify(s3));
  check(s4.tier === 'revisar' && s4.score === 45, 'B2C: 1 a 2 años, B/. 450, cuota sobre la capacidad → Revisar (45)', JSON.stringify(s4));
  check(s5.tier === 'no_calificado' && s5.score === 15, 'B2C: menos de 6 meses, B/. 300, cuota sobre la capacidad → No calificado (15)', JSON.stringify(s5));
  check(!b2c.config.score.rules.some((r) => /afili|empresa/.test(r.id)) && b2c.config.score.thresholds.calificado === 70 && b2c.config.score.thresholds.revisar === 40, 'B2C: el puntaje no depende de la empresa (umbrales 70 / 40)');
  check(!('soloEmpresasAfiliadas' in b2c.config) && !('EMPRESAS_AFILIADAS_DEMO' in b2c) && !('isAffiliatedCompany' in b2c) && !('referido' in b2c.config.paths) && !('afiliada' in b2c.config.fields), 'B2C: sin regla solo-afiliadas, lista de empresas, pregunta de afiliación ni ruta de referido');
  const t1 = form.computeScore(b2b.config.score, { colaboradores: '100-249', cargo: 'rrhh', correo_corporativo: true, sector: 'comercio', inicio: 'este-mes' });
  const t2 = form.computeScore(b2b.config.score, { colaboradores: '1-19', cargo: 'otro', correo_corporativo: false, sector: 'otro', inicio: 'explorando' });
  check(t1.tier === 'calificado' && t1.score === 100, 'B2B: 100+ colaboradores, RR. HH., correo corporativo → Calificado');
  check(t2.tier === 'no_calificado' && t2.score === 0, 'B2B: empresa pequeña sin decisor → No calificado');
}

// ---------------------------------------------------------------- 3. navegador
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
async function b2cStep1(page, { monto = '2500', plazo = '24', tasa = '24' } = {}) {
  await page.fill('#f-monto', monto);
  await page.click(`label[for="pl-${plazo}"]`);
  await page.fill('#f-tasa', tasa);
  await page.click('[data-next]');
  await page.waitForSelector('[data-step="trabajo"]:not([hidden])');
}
async function b2cStep2(page, { empresa = 'Distribuidora Istmeña, S.A.', salario = '1200', antiguedad = '2-5a', proposito = 'estudios' } = {}) {
  await page.fill('#f-empresa', empresa);
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
  check((await page.textContent('[data-calc-cuota]')).trim() === fmt(cuotaRef(1000, 18, 12)), 'valor inicial: B/. 1,000 · 12 meses · 18 % = ' + fmt(cuotaRef(1000, 18, 12)));
  check((await page.textContent('[data-calc-quincena]')).trim() === 'B/. 45.84', 'valor inicial: cuota quincenal B/. 45.84');
  await page.fill('#f-monto', '2500');
  await page.click('label[for="pl-24"]');
  await page.fill('#f-tasa', '24');
  const cuota = (await page.textContent('[data-calc-cuota]')).trim();
  check(cuota === 'B/. 132.18' && cuota === fmt(cuotaRef(2500, 24, 24)), 'B/. 2,500 · 24 meses · 24 % → B/. 132.18', cuota);
  const quincena = (await page.textContent('[data-calc-quincena]')).trim();
  const total = (await page.textContent('[data-calc-total]')).trim();
  check(quincena === 'B/. 66.09' && total === fmt(132.18 * 24), 'quincena B/. 66.09 y total = cuota × 24', `${quincena} / ${total}`);
  await page.evaluate(() => { const r = document.getElementById('calc-range'); r.value = '2250'; r.dispatchEvent(new Event('input', { bubbles: true })); });
  check((await page.inputValue('#f-monto')) === '2,250', 'el deslizador actualiza el monto (2,250)');
  check((await page.textContent('[data-calc-cuota]')).trim() === fmt(cuotaRef(2250, 24, 24)), 'el deslizador recalcula la cuota');
  await page.fill('#f-monto', '3500');
  await page.click('[data-next]');
  check(await page.isVisible('#f-monto-err') && /3,000/.test(await page.textContent('#f-monto-err')) && await page.isVisible('[data-step="prestamo"]'), 'monto mayor a B/. 3,000: error y no avanza');
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
  await b2cStep3(page);
  await b2cConsents(page);
  const summary = await page.textContent('[data-summary]');
  check(summary.includes('B/. 2,500.00') && summary.includes('24 meses') && summary.includes('B/. 132.18'), `${width}px: resumen antes de enviar`, summary);
  const before = requests.length;
  await page.dblclick('[data-next]');
  await waitResult(page);
  await page.waitForTimeout(400);
  const res = await page.evaluate(() => ({ tier: document.querySelector('.lf-result').dataset.tier, text: document.querySelector('.lf-result').innerText, dl: window.dataLayer, net: window.__net }));
  check(res.tier === 'calificado' && /Recibimos tu solicitud/.test(res.text) && !/calificad|aprobad/i.test(res.text) && /WhatsApp en minutos/.test(res.text), `${width}px: resultado "Calificado" con asesor por WhatsApp`);
  check(res.text.includes('Tu cuota se descontará de tu planilla: Kredit coordina el descuento directo con tu empresa.') && !/afili|recomi/i.test(res.text), `${width}px: el resultado explica el descuento directo y no habla de afiliar ni recomendar`);
  check(!/aprobad|garantiz/i.test(res.text), `${width}px: el resultado no dice "aprobado"`);
  check(requests.length === before && res.net.fetch === 0 && res.net.beacon === 0 && res.net.xhr === 0, `${width}px: modo demo sin peticiones al enviar`, requests.slice(before).join(', '));
  const submits = res.dl.filter((x) => x.event === 'lead_submit');
  check(submits.length === 1 && submits[0].lead_tier === 'calificado', `${width}px: dataLayer lead_submit una sola vez (doble clic) con el nivel`);
  check(piiFree(res.dl, ['8-123-456', '6123', 'maria.perez', 'María']), `${width}px: dataLayer sin datos personales`);
  const { txt, json } = await readPayload(page);
  check(JSON.stringify(Object.keys(json)) === JSON.stringify(SCHEMA_KEYS), `${width}px: payload con el esquema común`, Object.keys(json).join(','));
  check(json.form_id === 'kredit-prestamos' && json.tier === 'calificado' && json.score === 100, `${width}px: form_id, tier y score`, `${json.form_id} ${json.tier} ${json.score}`);
  check(json.lead.cedula === '8-***-*56' && !txt.includes('8-123-456'), `${width}px: cédula enmascarada en la vista previa`, json.lead.cedula);
  check(json.lead.celular === '+50761234567' && json.lead.monto === 2500 && json.lead.plazo_meses === 24 && json.lead.cuota_estimada === 132.18 && json.lead.empresa === 'Distribuidora Istmeña, S.A.', `${width}px: datos del lead normalizados`);
  check(['empresa_verificada', 'empresa_afiliada', 'referral', 'regla_solo_afiliadas'].every((k) => !(k in json.lead)), `${width}px: el lead ya no trae datos de afiliación ni de recomendación`, Object.keys(json.lead).join(','));
  check(JSON.stringify(Object.keys(json.attribution)) === JSON.stringify(ATTR_KEYS) && json.attribution.utm_source === 'google' && json.attribution.utm_campaign === 'prestamos-rapidos' && json.attribution.utm_term === 'prestamo personal' && json.attribution.gclid === 'TEST-GCLID-123' && json.attribution.fbclid === null && json.attribution.landing === 'kredit-prestamos', `${width}px: atribución UTM y gclid en el payload`);
  check(json.consents.privacidad === true && json.consents.referencias_credito === true && json.consents.whatsapp === true, `${width}px: consentimientos en el payload`);
  check(errors.length === 0, `${width}px: sin errores de página`, errors.join(' | '));
  if (width === 1440) await contrast(page, 'préstamos 1440px resultado + JSON');
  await shot(page, `prestamos-${width}-resultado.png`, false);
  if (shotsDir) { const card = await page.$('[data-form-card]'); await card.screenshot({ path: path.join(shotsDir, `prestamos-${width}-resultado-tarjeta.png`) }); }
  await ctx.close();
}

// 3e. perfil intermedio: Revisar, sin consentimiento de WhatsApp
console.log('\nPréstamos: Revisar (sin WhatsApp)');
{
  const { ctx, page, errors } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await b2cStep1(page, { monto: '1500', plazo: '12', tasa: '18' });
  await b2cStep2(page, { empresa: 'Taller Independiente', salario: '500', antiguedad: '6-11m', proposito: 'hogar' });
  await page.waitForSelector('[data-step="datos"]:not([hidden])');
  check((await page.textContent('[data-progress-label]')).includes('Paso 3 de 4'), 'cualquier empresa sigue la ruta de 4 pasos');
  await b2cStep3(page);
  await b2cConsents(page, { whatsapp: false });
  await page.click('[data-next]');
  await waitResult(page);
  const r = await page.evaluate(() => ({ tier: document.querySelector('.lf-result').dataset.tier, text: document.querySelector('.lf-result').innerText }));
  check(r.tier === 'revisar' && /Revisaremos tu solicitud/.test(r.text) && r.text.includes('Kredit coordina el descuento directo con tu empresa'), 'resultado "Revisar" con la línea de planilla');
  const { json } = await readPayload(page);
  check(json.tier === 'revisar' && json.score === 60 && json.lead.empresa === 'Taller Independiente' && json.lead.cuota_estimada === 137.52, 'payload "Revisar" (60): 6 a 11 meses, salario bajo el umbral, cuota dentro de la capacidad', `${json.tier} ${json.score} ${json.lead.cuota_estimada}`);
  check(json.consents.whatsapp === false && !/WhatsApp en minutos/.test(r.text), 'sin consentimiento de WhatsApp: no promete WhatsApp');
  check(errors.length === 0, 'sin errores de página', errors.join(' | '));
  await ctx.close();
}

// 3f. préstamos sin empresas afiliadas: ni en el texto, ni en el aria, ni en el flujo
console.log('\nPréstamos: sin empresas afiliadas');
for (const width of [1440, 390]) {
  const { ctx, page, errors } = await newPage(width);
  await page.goto(URLS.prestamos + '?solo_afiliadas=1');
  await page.evaluate(() => document.querySelectorAll('details').forEach((d) => { d.open = true; }));
  const st = await page.evaluate(() => {
    const attrs = [...document.querySelectorAll('*')].flatMap((el) => [...el.attributes].filter((a) => /^aria-|^title$|^alt$|^placeholder$|^data-wa-text$/.test(a.name)).map((a) => a.value));
    return {
      text: document.body.innerText + ' ' + document.title + ' ' + (document.querySelector('meta[name="description"]') || {}).content,
      attrs: attrs.join(' '),
      rest: ['#demo-solo-afiliadas', '[data-rule-state]', '[data-step="referido"]', '#empresa-list', '[role="combobox"]', '[role="listbox"]', '[name="afiliada"]', '[data-company-status]', '[name^="rec_"]', '[name^="ref_"]', 'a[href*="empresas"]'].filter((s) => document.querySelector(s)),
    };
  });
  check(!/afiliad/i.test(st.text) && !/afiliad/i.test(st.attrs), `${width}px: el texto visible, el título y los atributos aria no mencionan "afiliad"`);
  check(st.rest.length === 0, `${width}px: no quedan el ajuste solo-afiliadas, el referido, la lista de empresas ni enlaces a empresas`, st.rest.join(', '));
  await b2cStep1(page);
  await page.focus('#f-empresa');
  await page.keyboard.type('demo');
  check(await page.evaluate(() => !document.querySelector('[role="option"]') && document.getElementById('f-empresa').getAttribute('autocomplete') === 'organization'), `${width}px: la empresa se escribe sin lista de ejemplo`);
  await b2cStep2(page, { empresa: 'Comercial Sin Convenio' });
  await page.waitForSelector('[data-step="datos"]:not([hidden])');
  check((await page.textContent('[data-progress-label]')).includes('Paso 3 de 4'), `${width}px: ?solo_afiliadas=1 ya no cambia la ruta (4 pasos)`);
  check(errors.length === 0, `${width}px: sin errores de página`, errors.join(' | '));
  await ctx.close();
}

// 3g. no calificado: mensaje respetuoso
console.log('\nPréstamos: No calificado');
{
  const { ctx, page, errors } = await newPage(1440);
  await page.goto(URLS.prestamos);
  await b2cStep1(page, { monto: '3000', plazo: '6', tasa: '18' });
  await b2cStep2(page, { empresa: 'Negocio Propio', salario: '300', antiguedad: 'menos-6m', proposito: 'otro' });
  await b2cStep3(page);
  await b2cConsents(page);
  await page.click('[data-next]');
  await waitResult(page);
  const r = await page.evaluate(() => ({ tier: document.querySelector('.lf-result').dataset.tier, text: document.querySelector('.lf-result').innerText, empresas: document.querySelector('.lf-result a[href*="empresas"]') !== null, asesor: document.querySelector('.lf-result [data-whatsapp]') !== null }));
  check(r.tier === 'no_calificado' && /Gracias por confiar en Kredit/.test(r.text) && /te lo diremos con claridad/.test(r.text) && !/no podemos ofrecerte|rechazad|calificad/i.test(r.text) && !r.empresas && r.asesor && !/afili|recomi/i.test(r.text), 'mensaje respetuoso, con un asesor por WhatsApp y sin enlace a empresas');
  const { json: jn } = await readPayload(page);
  check(jn.tier === 'no_calificado' && jn.score === 15, 'payload "No calificado" (15): menos de 6 meses, salario bajo y cuota sobre la capacidad', `${jn.tier} ${jn.score}`);
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
{
  // Regla de altura del hero (DESIGN-kredit.md): 1440×900 el hero termina antes de 840 px con la tarjeta
  // completa; 390×844 el botón del paso 1 termina dentro de la pantalla. bloques.css (secciones bajo el
  // pliegue) no debe mover el hero: se mide con y sin esa hoja.
  for (const name of ['prestamos', 'empresas']) {
    for (const width of [1440, 390]) {
      const { ctx, page } = await newPage(width);
      await page.goto(URLS[name], { waitUntil: 'networkidle' });
      await page.evaluate(() => document.fonts.ready);
      const measure = () => page.evaluate(() => ({ hero: Math.round(document.querySelector('.hero').getBoundingClientRect().bottom), card: Math.round(document.querySelector('[data-form-card]').getBoundingClientRect().top), cardBottom: Math.round(document.querySelector('[data-form-card]').getBoundingClientRect().bottom), next: Math.round(document.querySelector('[data-next]').getBoundingClientRect().bottom), vh: innerHeight }));
      const m = await measure();
      if (width === 1440) check(m.hero < 840 && m.card < 260 && m.cardBottom <= m.vh && m.next <= m.vh, `${name} 1440px: hero < 840 px con la tarjeta completa y su botón a la vista`, JSON.stringify(m));
      else check(m.next < 844, `${name} 390px: el botón del paso 1 termina antes de 844 px`, JSON.stringify(m));
      await page.evaluate(() => { document.querySelector('link[href*="bloques.css"]').disabled = true; });
      const sin = await measure();
      check(JSON.stringify(sin) === JSON.stringify(m), `${name} ${width}px: bloques.css no cambia el hero`, `${JSON.stringify(m)} vs ${JSON.stringify(sin)}`);
      await ctx.close();
    }
  }
  // En móvil y al enviar, el paso de afiliación sigue enfocando el primer error en el orden visual.
  const { ctx, page } = await newPage(390);
  await page.goto(URLS.empresas);
  await page.fill('#b-empresa', 'Distribuidora Istmeña, S.A.');
  await page.fill('#b-ruc', '155612345-2-2021 DV 45');
  await page.selectOption('#b-sector', 'comercio');
  await page.click('[data-next]');
  check(await page.evaluate(() => document.activeElement.id) === 'b-provincia' && await page.isVisible('#b-colab-err'), 'empresas: foco en el primer error visible (provincia antes que colaboradores)');
  await ctx.close();
}

// 3l. reguladores, fotos y tarjetas de metas
console.log('\nReguladores, fotos y metas');
{
  const DISCLOSURE = { prestamos: 'info-credito', empresas: 'convenio' };
  for (const name of ['prestamos', 'empresas']) {
    for (const width of [1440, 390]) {
      const { ctx, page, errors } = await newPage(width);
      const http4xx = [];
      page.on('response', (r) => { if (r.status() >= 400) http4xx.push(`${r.status()} ${r.url()}`); });
      await page.goto(URLS[name], { waitUntil: 'networkidle' });
      // las fotos son lazy: se fuerzan todas para comprobar que ninguna da 404
      await page.evaluate(() => document.querySelectorAll('img[loading="lazy"]').forEach((i) => { i.loading = 'eager'; }));
      await page.waitForFunction(() => [...document.images].every((i) => i.complete), null, { timeout: 20000 });
      const st = await page.evaluate((discId) => {
        const flat = (el) => el.innerText.replace(/\s+/g, ' ').trim();
        const plate = (r) => { const img = r.querySelector('img.reg__logo'); const b = img.getBoundingClientRect(); return { src: img.getAttribute('src'), loaded: img.naturalWidth > 0, w: Math.round(b.width), text: flat(r) }; };
        const trust = document.getElementById('confianza');
        return {
          count: document.images.length,
          broken: [...document.images].filter((i) => !(i.naturalWidth > 0)).map((i) => i.getAttribute('src')),
          noAlt: [...document.images].filter((i) => i.alt.trim().length < 12).map((i) => i.getAttribute('src')),
          heroImgs: document.querySelectorAll('.hero img').length,
          order: !!trust && document.getElementById(discId).nextElementSibling === trust,
          block: trust ? [...trust.querySelectorAll('.regs .reg')].map(plate) : [],
          foot: [...document.querySelectorAll('.site-footer .regs--foot .reg')].map(plate),
          trust: trust ? flat(trust) : '',
          body: document.body.innerText,
        };
      }, DISCLOSURE[name]);
      check(st.count >= (name === 'prestamos' ? 13 : 10) && st.broken.length === 0 && http4xx.length === 0, `${name} ${width}px: las ${st.count} imágenes cargan, sin 404`, [...st.broken, ...http4xx].slice(0, 4).join(', '));
      check(st.noAlt.length === 0, `${name} ${width}px: todas las imágenes tienen alt descriptivo`, st.noAlt.join(', '));
      check(st.heroImgs === 0, `${name} ${width}px: sin fotos en el hero`);
      check(st.order, `${name} ${width}px: bloque de confianza justo después de #${DISCLOSURE[name]}`);
      for (const [where, plates] of [['bloque', st.block], ['pie', st.foot]]) {
        const [m, s] = plates;
        check(plates.length === 2 && /reguladores\/mici\.png$/.test(m.src) && /reguladores\/sbp\.png$/.test(s.src) && plates.every((p) => p.loaded && p.w >= 50), `${name} ${width}px: ${where}: logos del MICI y de la SBP cargados (naturalWidth > 0)`, JSON.stringify(plates.map((p) => [p.src, p.loaded, p.w])));
        check(!!m && m.text.includes('Licencia de empresa financiera') && m.text.includes('638') && !!s && s.text.includes('prevención de blanqueo') && !/licencia/i.test(s.text), `${name} ${width}px: ${where}: «Licencia de empresa financiera» + 638 en el MICI; la SBP solo «prevención de blanqueo»`);
      }
      check(st.trust.includes('CREDU HOLDINGS, S.A.') && /nunca cobra por adelantado/.test(st.trust) && /costo total/.test(st.trust) && /Ley 81 de 2019/.test(st.trust), `${name} ${width}px: confianza con la razón social y los 3 puntos (sin cobro adelantado, costo total por escrito, Ley 81)`);
      check(!/regulad[oa]s?\s+por\s+la\s+superintendencia/i.test(st.body), `${name} ${width}px: el texto visible no dice «regulada por la Superintendencia»`);
      if (name === 'prestamos') {
        const goals = await page.evaluate(() => [...document.querySelectorAll('[data-goal]')].map((b) => ({
          v: b.dataset.goal, tag: b.tagName, type: b.type,
          img: !!b.querySelector('img') && b.querySelector('img').naturalWidth > 0,
          label: (b.getAttribute('aria-labelledby') || '').split(' ').map((id) => (document.getElementById(id) || {}).textContent || '').join(' ').trim(),
          opt: !!document.querySelector(`#f-proposito option[value="${b.dataset.goal}"]`),
        })));
        check(goals.length === 7 && goals.every((g) => g.tag === 'BUTTON' && g.type === 'button' && g.img && g.label.length > 3 && g.opt), `${width}px: 7 tarjetas de metas son botones con foto, nombre del título y opción en el formulario`, JSON.stringify(goals.filter((g) => !(g.img && g.opt && g.label))));
        for (const [goal, part, label] of [['salud', '.goal__media', 'la foto'], ['celebracion', '.goal__title', 'el título'], ['imprevistos', '.goal__go', 'la flecha']]) {
          await page.evaluate(() => { document.getElementById('f-proposito').value = ''; document.getElementById('metas').scrollIntoView(); });
          await page.click(`[data-goal="${goal}"] ${part}`);
          await page.waitForTimeout(120);
          const r = await page.evaluate(() => ({ v: document.getElementById('f-proposito').value, focus: document.activeElement.id, top: Math.round(document.getElementById('solicitud').getBoundingClientRect().top), vh: innerHeight }));
          check(r.v === goal && r.focus === 'f-monto' && r.top >= 0 && r.top < r.vh, `${width}px: la tarjeta «${goal}» (clic en ${label}) precarga el propósito y lleva a la calculadora`, JSON.stringify(r));
        }
      }
      check(errors.length === 0, `${name} ${width}px: sin errores de página`, errors.join(' | '));
      await ctx.close();
    }
  }
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
  await page.addStyleTag({ content: '.hero__lead { color: #1B2F6B !important; }' }); // azul oscuro sobre el plano navy del hero
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
