/* Red de seguridad de SEO para la plantilla compartida (D36). La ruta [...slug].astro sirve ~250 páginas: un cambio
   de plantilla o de tokens puede mover title, descripción, H1, canonical, robots o schema de páginas que nadie quería tocar.
     node scripts/seo-congelado.mjs               compara dist/ con audit/seo-snapshot.json y falla si algo cambió sin permiso
     node scripts/seo-congelado.mjs --actualizar  reescribe el snapshot (al cerrar una fase, después de revisar los cambios)
   Los cambios intencionales se declaran en scripts/cambios-permitidos.json (ruta, campos y motivo). Hay una regla que
   ningún permiso levanta: la pilar /diseno-web-panama/ no cambia de title, H1 ni canonical (D12, D13); y ninguna URL
   aparece ni desaparece (sin cambios de URL ni redirects en este plan). */
import { readFileSync, writeFileSync, existsSync, mkdtempSync, rmSync } from 'node:fs';
import { spawnSync } from 'node:child_process';
import { tmpdir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const SNAPSHOT = join(RAIZ, 'audit/seo-snapshot.json');
const PERMITIDOS = join(RAIZ, 'scripts/cambios-permitidos.json');
const CAMPOS = ['title', 'description', 'h1', 'canonical', 'robots', 'schema'];
/** Reglas duras: ningún permiso las levanta. */
export const CONGELADOS = { '/diseno-web-panama/': ['title', 'h1', 'canonical'] };

/** Compara dos snapshots de qa-seo. Devuelve los cambios con permiso y los errores. */
export function comparar(base, actual, permitidos = [], congelados = CONGELADOS) {
  const errores = [];
  const permitidosUsados = [];
  const cambios = [];
  const permiso = (ruta, campo) => permitidos.find((p) => p.ruta === ruta && (p.campos === 'todos' || p.campos.includes(campo)));
  for (const ruta of Object.keys(base)) if (!(ruta in actual)) errores.push(`${ruta}: la URL desapareció (este plan no cambia URLs ni hace redirects)`);
  for (const ruta of Object.keys(actual)) {
    if (!(ruta in base)) { errores.push(`${ruta}: URL nueva que no estaba en el snapshot`); continue; }
    for (const campo of CAMPOS) {
      if (JSON.stringify(base[ruta][campo]) === JSON.stringify(actual[ruta][campo])) continue;
      cambios.push({ ruta, campo });
      if ((congelados[ruta] ?? []).includes(campo)) { errores.push(`${ruta}: «${campo}» está congelado y cambió (de «${base[ruta][campo]}» a «${actual[ruta][campo]}»)`); continue; }
      const p = permiso(ruta, campo);
      if (!p) errores.push(`${ruta}: cambió «${campo}» y no está en scripts/cambios-permitidos.json`);
      else permitidosUsados.push(p);
    }
  }
  // Un permiso que ya no se usa es ruido que esconde cambios futuros: se avisa para limpiarlo.
  const sobrantes = permitidos.filter((p) => !permitidosUsados.includes(p));
  return { errores, cambios, sobrantes };
}

function snapshotActual() {
  const dir = mkdtempSync(join(tmpdir(), 'seo-'));
  const f = join(dir, 'snapshot.json');
  try {
    const r = spawnSync(process.execPath, ['scripts/qa-seo.mjs', '--snapshot', f], { cwd: RAIZ, encoding: 'utf8' });
    if (!existsSync(f)) throw new Error(`qa-seo no generó el snapshot (${r.status}): ${(r.stderr || r.stdout).slice(0, 300)}`);
    return JSON.parse(readFileSync(f, 'utf8'));
  } finally { rmSync(dir, { recursive: true, force: true }); }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const actual = snapshotActual();
  if (process.argv.includes('--actualizar')) {
    writeFileSync(SNAPSHOT, JSON.stringify(actual, null, 1) + '\n');
    console.log(`Snapshot actualizado: ${Object.keys(actual).length} URLs en audit/seo-snapshot.json`);
    process.exit(0);
  }
  if (!existsSync(SNAPSHOT)) { console.error('Falta audit/seo-snapshot.json. Crea el primero con --actualizar.'); process.exit(1); }
  const base = JSON.parse(readFileSync(SNAPSHOT, 'utf8'));
  const permitidos = existsSync(PERMITIDOS) ? JSON.parse(readFileSync(PERMITIDOS, 'utf8')).permitidos : [];
  const { errores, cambios, sobrantes } = comparar(base, actual, permitidos);
  console.log(`SEO congelado: ${Object.keys(actual).length} URLs, ${cambios.length} cambio(s) de metadatos, ${errores.length} sin permiso.`);
  for (const s of sobrantes) console.log(`AVISO  permiso sin uso: ${s.ruta} (${Array.isArray(s.campos) ? s.campos.join(', ') : s.campos}); quítalo de scripts/cambios-permitidos.json`);
  for (const e of errores) console.error(`ERROR  ${e}`);
  process.exit(errores.length ? 1 : 0);
}
