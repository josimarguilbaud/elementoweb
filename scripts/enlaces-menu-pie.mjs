/* Enlaces del menú y del pie (D56): que el rediseño no pierda ningún enlace interno.
   --write  guarda en scripts/fixtures/enlaces-menu-pie.json los hrefs internos únicos de cada región (menú de
            escritorio = <header id="nav">, menú móvil = #mnav, pie = <footer>) de las páginas de PAGINAS, leídos de
            dist/ (correr antes npm run build sobre main).
   --check  compara dist/ contra ese archivo: cada href guardado tiene que seguir en su región. Los nuevos se aceptan.
            Sale con 1 y lista los que faltan.
   El texto de cada enlace no se compara (cambia a propósito: «Cotizar» → «Empezar proyecto»).
     node scripts/enlaces-menu-pie.mjs --write | --check */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { execSync } from 'node:child_process';
import { parse } from 'node-html-parser';

export const FIXTURE = 'scripts/fixtures/enlaces-menu-pie.json';
/* La portada pasa props propias al menú y al pie; /contacto/ es la versión por defecto de las demás páginas. */
export const PAGINAS = ['/', '/contacto/'];
const archivo = (ruta) => `dist${ruta}index.html`;

/** hrefs internos únicos y ordenados de un nodo (los que empiezan por «/»; sin consulta). */
const internos = (nodo) => [...new Set((nodo?.querySelectorAll('a[href]') ?? [])
  .map((a) => a.getAttribute('href'))
  .filter((h) => h.startsWith('/'))
  .map((h) => h.split('?')[0]))].sort();

/** Las tres regiones de una página construida. El menú móvil vive fuera de <header>. */
export function regiones(html) {
  const raiz = parse(html);
  return { escritorio: internos(raiz.querySelector('header#nav')), movil: internos(raiz.querySelector('#mnav')), pie: internos(raiz.querySelector('footer')) };
}

/** Lista de { ruta, region, href } guardados que ya no están. */
export function faltantes(guardado, actual) {
  const out = [];
  for (const [ruta, regs] of Object.entries(guardado)) {
    for (const [region, hrefs] of Object.entries(regs)) {
      const ahora = new Set(actual[ruta]?.[region] ?? []);
      for (const href of hrefs) if (!ahora.has(href)) out.push({ ruta, region, href });
    }
  }
  return out;
}

export const leerDist = () => Object.fromEntries(PAGINAS.map((r) => [r, regiones(readFileSync(archivo(r), 'utf8'))]));

if (process.argv[1]?.endsWith('enlaces-menu-pie.mjs')) {
  const modo = process.argv[2];
  if (modo === '--write') {
    const sha = execSync('git rev-parse --short HEAD').toString().trim();
    mkdirSync('scripts/fixtures', { recursive: true });
    writeFileSync(FIXTURE, JSON.stringify({ origen: sha, paginas: leerDist() }, null, 2) + '\n');
    console.log(`✓ ${FIXTURE} guardado desde ${sha}`);
  } else if (modo === '--check') {
    const { origen, paginas } = JSON.parse(readFileSync(FIXTURE, 'utf8'));
    const f = faltantes(paginas, leerDist());
    if (f.length) {
      console.error(`✗ faltan ${f.length} enlaces del menú o del pie (base ${origen}):`);
      for (const x of f) console.error(`  ${x.ruta} ${x.region}: ${x.href}`);
      console.error('Si es a propósito, regenera con --write y justifícalo en el commit.');
      process.exit(1);
    }
    console.log(`✓ ningún enlace del menú ni del pie se perdió (base ${origen})`);
  } else {
    console.error('uso: node scripts/enlaces-menu-pie.mjs --write | --check');
    process.exit(2);
  }
}
