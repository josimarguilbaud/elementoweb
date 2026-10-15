// Ninguna afirmación bloqueada (scripts/afirmaciones-bloqueadas.json) en el <main> de ninguna página construida.
// El validador del marcador solo revisa las páginas con data-page-type; esta prueba cubre todo dist/, incluidas
// /nosotros/ y /como-trabajamos/ (D50). Corre dentro de `npm run verify`, después del build; sin dist/ se omite.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';

const DIST = 'dist';
const { afirmaciones } = JSON.parse(readFileSync('scripts/afirmaciones-bloqueadas.json', 'utf8'));

/* Excepciones decididas, con su motivo. D11 dejó blog-4 fuera de alcance; si alguna vez contiene una frase
   bloqueada, se agrega aquí su ruta. Hoy no hace falta ninguna. */
const EXCEPCIONES = new Map();
/* Documentos de cliente servidos desde public/ (propuestas, demos, presentaciones): no son páginas del sitio, robots.txt
   los bloquea y no se reescriben después de entregados. */
const DOCUMENTOS = ['/propuestas/', '/demo/', '/presentaciones/'];

function* paginas(dir) {
  for (const nombre of readdirSync(dir)) {
    const ruta = join(dir, nombre);
    if (statSync(ruta).isDirectory()) yield* paginas(ruta);
    else if (nombre === 'index.html') yield ruta;
  }
}

/** Texto visible del <main>: sin etiquetas, scripts ni estilos, con los espacios normalizados. */
export function textoMain(html) {
  const main = html.match(/<main\b[^>]*>([\s\S]*?)<\/main>/i)?.[1] ?? '';
  return main
    .replace(/<(script|style)\b[\s\S]*?<\/\1>/gi, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/\s+/g, ' ');
}

test('ninguna página publica una afirmación bloqueada en su contenido', { skip: !existsSync(DIST) && 'sin dist/: corre después del build' }, () => {
  const hallazgos = [];
  for (const archivo of paginas(DIST)) {
    const ruta = '/' + relative(DIST, archivo).replace(/\\/g, '/').replace(/index\.html$/, '');
    if (ruta.startsWith('/qa-fixture/') || DOCUMENTOS.some((d) => ruta.startsWith(d)) || EXCEPCIONES.has(ruta)) continue;
    const texto = textoMain(readFileSync(archivo, 'utf8')).toLowerCase();
    for (const frase of afirmaciones) if (texto.includes(frase.toLowerCase())) hallazgos.push(`${ruta}: «${frase}»`);
  }
  assert.deepEqual(hallazgos, [], `afirmaciones sin confirmar publicadas:\n${hallazgos.join('\n')}`);
});
