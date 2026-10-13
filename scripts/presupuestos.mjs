/* Presupuesto de bytes de JS y CSS por plantilla (D40, T27).
     node scripts/presupuestos.mjs            compara dist/ y dist-fixture/ con scripts/presupuestos.json; sale con 1 si algo lo supera
     node scripts/presupuestos.mjs --medir    imprime lo medido (para fijar o revisar un presupuesto) sin comparar
   Se mide lo que el navegador baja al abrir la página, comprimido con gzip nivel 9: los <script src> y
   <link rel=modulepreload|stylesheet> del HTML, los módulos que esos archivos importan de forma estática
   (import … from "./x.js", no import()), y el JS y CSS en línea. Las islas diferidas (import() dinámico) no cuentan.
   Un archivo con un `diferidos` en el presupuesto falla si alguno de esos nombres aparece entre los iniciales. */
import { readFileSync, existsSync } from 'node:fs';
import { gzipSync } from 'node:zlib';
import { join, dirname, posix } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { parse } from 'node-html-parser';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const gz = (texto) => gzipSync(typeof texto === 'string' ? Buffer.from(texto) : texto, { level: 9 }).length;

/** Importaciones estáticas de un módulo minificado: import{a}from"./x.js", import"./x.js", export{a}from"./x.js". */
export function importacionesEstaticas(codigo) {
  const salida = new Set();
  const re = /\b(?:import|export)\s*(?:\*\s*as\s*\w+|\{[^}]*\}|\w+)?\s*(?:from)?\s*["'](\.{0,2}\/[^"']+\.js)["']/g;
  for (const m of codigo.matchAll(re)) salida.add(m[1]);
  return [...salida];
}

/**
 * Recursos iniciales de una página: archivos (js, css) y texto en línea. `leer(rutaPublica)` devuelve el texto del
 * archivo o null. Resuelve las importaciones relativas contra la ruta pública del archivo que las declara.
 */
export function recursosIniciales(html, leer) {
  const raiz = parse(html);
  const js = new Map(), css = new Map(), enLinea = { js: [], css: [] };
  const agregarJs = (ruta) => {
    if (js.has(ruta)) return;
    const codigo = leer(ruta);
    js.set(ruta, codigo);
    if (codigo == null) return;
    for (const imp of importacionesEstaticas(codigo)) agregarJs(imp.startsWith('/') ? imp : posix.normalize(posix.join(posix.dirname(ruta), imp)));
  };
  for (const s of raiz.querySelectorAll('script')) {
    const src = s.getAttribute('src'), tipo = s.getAttribute('type') || '';
    if (src) agregarJs(src.split('?')[0]);
    else if (!/json|importmap/.test(tipo) && s.text.trim()) enLinea.js.push(s.text);
  }
  for (const l of raiz.querySelectorAll('link')) {
    const rel = l.getAttribute('rel') || '', href = (l.getAttribute('href') || '').split('?')[0];
    if (rel === 'modulepreload' && href) agregarJs(href);
    if (rel === 'stylesheet' && href && !css.has(href)) css.set(href, leer(href));
  }
  for (const s of raiz.querySelectorAll('style')) if (s.text.trim()) enLinea.css.push(s.text);
  return { js, css, enLinea };
}

/** Bytes comprimidos de JS y CSS iniciales. `faltan` lista los archivos referenciados que no se encontraron. */
export function medirHtml(html, leer) {
  const r = recursosIniciales(html, leer);
  const faltan = [...r.js, ...r.css].filter(([, c]) => c == null).map(([ruta]) => ruta);
  const suma = (mapa, lineas) => [...mapa.values()].filter((c) => c != null).reduce((s, c) => s + gz(c), 0) + lineas.reduce((s, c) => s + gz(c), 0);
  return { jsGzip: suma(r.js, r.enLinea.js), cssGzip: suma(r.css, r.enLinea.css), archivosJs: [...r.js.keys()], archivosCss: [...r.css.keys()], faltan };
}

const CARPETAS = { dist: join(RAIZ, 'dist'), 'dist-fixture': join(RAIZ, 'dist-fixture') };
function medirPlantilla(p) {
  const base = CARPETAS[p.carpeta];
  const archivo = join(base, p.ruta, 'index.html');
  if (!existsSync(archivo)) return { error: `no existe ${p.carpeta}${p.ruta}index.html (¿falta el build?)` };
  const leer = (ruta) => { const f = join(base, ruta); return existsSync(f) ? readFileSync(f) : null; };
  return medirHtml(readFileSync(archivo, 'utf8'), (ruta) => { const b = leer(ruta); return b == null ? null : b.toString('utf8'); });
}

function comparar(presupuesto, medir) {
  const filas = [];
  let fallo = false;
  for (const p of presupuesto.plantillas) {
    const m = medir(p);
    if (m.error) { filas.push({ id: p.id, problema: m.error }); fallo = true; continue; }
    const problemas = [];
    if (m.faltan.length) problemas.push(`archivos referenciados que no existen: ${m.faltan.join(', ')}`);
    if (m.jsGzip > p.jsGzipMax) problemas.push(`JS ${m.jsGzip} B supera el máximo de ${p.jsGzipMax} B`);
    if (m.cssGzip > p.cssGzipMax) problemas.push(`CSS ${m.cssGzip} B supera el máximo de ${p.cssGzipMax} B`);
    for (const d of p.diferidos ?? []) {
      const dentro = [...m.archivosJs].filter((a) => a.includes(d));
      if (dentro.length) problemas.push(`la isla diferida «${d}» se carga al abrir la página: ${dentro.join(', ')}`);
    }
    if (problemas.length) fallo = true;
    filas.push({ id: p.id, ruta: `${p.carpeta}${p.ruta}`, js: m.jsGzip, jsMax: p.jsGzipMax, css: m.cssGzip, cssMax: p.cssGzipMax, problemas });
  }
  return { filas, fallo };
}
export { comparar };

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const presupuesto = JSON.parse(readFileSync(join(RAIZ, 'scripts/presupuestos.json'), 'utf8'));
  if (process.argv.includes('--medir')) {
    for (const p of presupuesto.plantillas) {
      const m = medirPlantilla(p);
      console.log(m.error ?? `${p.id.padEnd(22)} ${p.carpeta}${p.ruta}  JS ${m.jsGzip} B  CSS ${m.cssGzip} B  (${m.archivosJs.length} js, ${m.archivosCss.length} css)`);
    }
    process.exit(0);
  }
  const { filas, fallo } = comparar(presupuesto, medirPlantilla);
  console.log('Presupuesto de JS y CSS iniciales (gzip nivel 9, bytes):');
  for (const f of filas) {
    if (f.problema) { console.log(`✗ ${f.id}: ${f.problema}`); continue; }
    console.log(`${f.problemas.length ? '✗' : '✓'} ${f.id.padEnd(22)} JS ${String(f.js).padStart(6)} / ${String(f.jsMax).padStart(6)}   CSS ${String(f.css).padStart(6)} / ${String(f.cssMax).padStart(6)}   ${f.ruta}`);
    for (const p of f.problemas) console.log(`    · ${p}`);
  }
  if (fallo) { console.error('\nPresupuesto superado. Si el aumento es deliberado, súbelo en scripts/presupuestos.json con el motivo en el commit.'); process.exit(1); }
}
