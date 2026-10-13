/* Mediciones propias con fecha (D6, D40). Escribe src/data/mediciones.json; nada se inventa ni se rellena a mano.
     node scripts/medir.mjs <url> --id <id> [--metrica lcp|cls|rendimiento] [--escribir]   mide una página
     node scripts/medir.mjs --check [--hoy AAAA-MM-DD]                                      lista las mediciones y su antigüedad
   Herramienta: PageSpeed Insights (móvil, mediana de 3 corridas) si existe la clave ~/.ssh/psi.key; sin clave, la API
   responde 429 y se usa el CLI de Lighthouse (móvil, 150 ms de latencia simulada, mediana de 5 corridas). La etiqueta que
   ve el visitante nombra la herramienta realmente usada (D40). Sin --escribir solo imprime el resultado. */
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { homedir, tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { rutaChrome } from './chrome.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const ARCHIVO = join(RAIZ, 'src/data/mediciones.json');
const ISO = /^\d{4}-\d{2}-\d{2}$/;
const DIA = 86_400_000;
export const LIMITE_DIAS = 45;

export const mediana = (xs) => {
  if (!xs.length) throw new Error('mediana de una lista vacía');
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : (s[m - 1] + s[m]) / 2;
};

/** 1432 ms → «1,4 s» (coma decimal, como el resto del sitio). */
export const formatearLcp = (ms) => `${(Math.round(ms / 100) / 10).toFixed(1).replace('.', ',')} s`;
export const formatearCls = (v) => v.toFixed(3).replace('.', ',');

export function extraerDeLighthouse(lhr) {
  const a = lhr.audits ?? {};
  if (!a['largest-contentful-paint']) throw new Error('el informe de Lighthouse no trae largest-contentful-paint');
  return {
    lcpMs: a['largest-contentful-paint'].numericValue,
    cls: a['cumulative-layout-shift']?.numericValue ?? null,
    rendimiento: Math.round((lhr.categories?.performance?.score ?? 0) * 100),
    version: lhr.lighthouseVersion ?? 'desconocida',
  };
}
/** La API de PageSpeed devuelve el informe de Lighthouse dentro de `lighthouseResult`. */
export const extraerDePsi = (json) => extraerDeLighthouse(json.lighthouseResult ?? {});

export function construirMedicion({ id, url, metrica, corridas, herramienta, fecha, version }) {
  if (!ISO.test(fecha)) throw new Error('la fecha debe ser AAAA-MM-DD');
  if (!corridas.length) throw new Error('sin corridas');
  const metodoBase = herramienta === 'PageSpeed Insights' ? 'móvil' : 'móvil, 150 ms de latencia simulada';
  const metodo = `${metodoBase}, mediana de ${corridas.length} corrida${corridas.length === 1 ? '' : 's'}${version ? `, Lighthouse ${version}` : ''}`;
  const filas = { lcp: ['LCP', formatearLcp(mediana(corridas.map((c) => c.lcpMs))), Math.round(mediana(corridas.map((c) => c.lcpMs)))],
    cls: ['CLS', formatearCls(mediana(corridas.map((c) => c.cls ?? 0))), mediana(corridas.map((c) => c.cls ?? 0))],
    rendimiento: ['rendimiento', `${Math.round(mediana(corridas.map((c) => c.rendimiento)))}/100`, Math.round(mediana(corridas.map((c) => c.rendimiento)))] }[metrica];
  if (!filas) throw new Error(`métrica desconocida: ${metrica}`);
  return { id, url, metrica: filas[0], valor: filas[1], valorNumerico: filas[2], herramienta, fecha, metodo };
}

/** Reemplaza la medición con el mismo id (o la añade). No toca el resto. */
export function fusionar(lista, nueva) {
  const i = lista.findIndex((m) => m.id === nueva.id);
  return i >= 0 ? lista.map((m, k) => (k === i ? nueva : m)) : [...lista, nueva];
}

export const antiguedad = (m, hoy) => Math.floor((hoy.getTime() - new Date(`${m.fecha}T12:00:00Z`).getTime()) / DIA);

/** Mediciones vencidas (más de `limite` días) o con fecha futura; las usa el cron mensual. */
export function revisarVencidas(mediciones, hoy, limite = LIMITE_DIAS) {
  return mediciones.map((m) => ({ id: m.id, url: m.url, dias: antiguedad(m, hoy) })).filter((x) => x.dias > limite || x.dias < 0);
}

const claveDePsi = () => { const f = join(homedir(), '.ssh', 'psi.key'); return existsSync(f) ? readFileSync(f, 'utf8').trim() : null; };

async function medirConPsi(url, corridas, clave) {
  const out = [];
  for (let i = 0; i < corridas; i++) {
    const api = `https://www.googleapis.com/pagespeedonline/v5/runPagespeed?url=${encodeURIComponent(url)}&strategy=mobile&category=performance&key=${encodeURIComponent(clave)}`;
    const r = await fetch(api);
    if (!r.ok) throw new Error(`PageSpeed Insights respondió ${r.status}: ${(await r.text()).slice(0, 200)}`);
    out.push(extraerDePsi(await r.json()));
  }
  return out;
}

function medirConLighthouse(url, corridas) {
  const chrome = rutaChrome();
  if (!chrome) throw new Error('No se encontró Chrome. Define CHROMIUM_PATH.');
  const probe = spawnSync('lighthouse', ['--version'], { shell: true, encoding: 'utf8' });
  if (probe.status !== 0) throw new Error('No se encontró el CLI de Lighthouse. Instálalo con: npm install -g lighthouse');
  const out = [];
  // El informe va a un archivo, no a la salida estándar: en Windows el CLI sale con error EPERM al borrar el perfil
  // temporal de Chrome aunque la medición terminó, así que el código de salida no dice si hay informe.
  const carpeta = mkdtempSync(join(tmpdir(), 'medir-lh-'));
  try {
    for (let i = 0; i < corridas; i++) {
      const archivo = join(carpeta, `informe-${i}.json`);
      const r = spawnSync('lighthouse', [url, '--only-categories=performance', '--form-factor=mobile', '--output=json', `--output-path="${archivo}"`, '--quiet', '--chrome-flags="--headless=new --no-sandbox"'], { shell: true, encoding: 'utf8', env: { ...process.env, CHROME_PATH: chrome }, maxBuffer: 64 * 1024 * 1024 });
      if (!existsSync(archivo)) throw new Error(`Lighthouse no dejó informe (${r.status}): ${(r.stderr || '').slice(0, 300)}`);
      out.push(extraerDeLighthouse(JSON.parse(readFileSync(archivo, 'utf8'))));
    }
  } finally { rmSync(carpeta, { recursive: true, force: true }); }
  return out;
}

const opcion = (args, n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);

async function principal(args) {
  const hoyTxt = opcion(args, '--hoy');
  const hoy = hoyTxt ? new Date(`${hoyTxt}T12:00:00Z`) : new Date();
  const datos = JSON.parse(readFileSync(ARCHIVO, 'utf8'));
  if (args.includes('--check')) {
    if (!datos.mediciones.length) { console.log('Sin mediciones guardadas todavía.'); return 0; }
    for (const m of datos.mediciones) console.log(`${m.id}  ${m.metrica} ${m.valor}  medido el ${m.fecha} con ${m.herramienta}  (${antiguedad(m, hoy)} días)`);
    const vencidas = revisarVencidas(datos.mediciones, hoy);
    for (const v of vencidas) console.error(`VENCIDA  ${v.id} (${v.url}): ${v.dias} días; renovar con node scripts/medir.mjs ${v.url} --id ${v.id} --escribir`);
    return vencidas.length ? 1 : 0;
  }
  const url = args.find((a) => /^https?:\/\//.test(a));
  const id = opcion(args, '--id');
  if (!url || !id) { console.error('Uso: node scripts/medir.mjs <url> --id <id> [--metrica lcp|cls|rendimiento] [--escribir]'); return 2; }
  const metrica = (opcion(args, '--metrica') ?? 'lcp').toLowerCase();
  const clave = claveDePsi();
  let corridas; let herramienta;
  if (clave) { herramienta = 'PageSpeed Insights'; corridas = await medirConPsi(url, 3, clave); }
  else { console.error('Sin clave en ~/.ssh/psi.key (la API de PageSpeed responde 429 sin clave): se usa Lighthouse local y la etiqueta lo dirá.'); herramienta = 'Lighthouse'; corridas = medirConLighthouse(url, 5); }
  const fecha = (hoyTxt ?? new Date().toISOString().slice(0, 10));
  const m = construirMedicion({ id, url, metrica, corridas, herramienta, fecha, version: corridas[0].version });
  console.log(JSON.stringify(m, null, 2));
  if (args.includes('--escribir')) {
    datos.mediciones = fusionar(datos.mediciones, m);
    writeFileSync(ARCHIVO, JSON.stringify(datos, null, 2) + '\n');
    console.log(`Guardada en ${ARCHIVO}`);
  }
  return 0;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  principal(process.argv.slice(2)).then((c) => process.exit(c), (e) => { console.error(`medir: ${e.message}`); process.exit(1); });
}
