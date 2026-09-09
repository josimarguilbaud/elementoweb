/* Regenera src/lib/heroes.ts leyendo public/images/hero/ y public/images/og/.
 *
 * heroFor() y ogFor() necesitan saber que paginas tienen imagen propia, pero no
 * pueden mirar el disco: corren dentro del render de Astro. Asi que el listado
 * se congela en un modulo y este script lo reescribe cuando cambian los
 * archivos.
 *
 * Uso: node scripts/heroes-manifest.mjs
 */
import { readdirSync, writeFileSync } from 'node:fs';

const leer = (dir) =>
  readdirSync(dir)
    .filter((f) => f.endsWith('.jpg'))
    .map((f) => f.slice(0, -4).replace(/--/g, '/'))
    .sort();

const heroes = leer('public/images/hero');
const ogs = leer('public/images/og');
const lista = (xs) => xs.map((s) => `  '${s}',`).join('\n');

const salida = `/* Imagenes propias generadas para el sitio. GENERADO, no editar a mano.
   El nombre del archivo es el slug con '/' escrito como '--'.

   HERO_SLUGS  public/images/hero/  1600x1120, la foto grande de la portada.
   OG_SLUGS    public/images/og/    1200x630, el recorte para compartir.

   Existen como listado para que heroFor() y ogFor() no tengan que tocar el
   disco en tiempo de render.

   Regenerar tras anadir imagenes: node scripts/heroes-manifest.mjs */

export const HERO_SLUGS = new Set<string>([
${lista(heroes)}
]);

export const OG_SLUGS = new Set<string>([
${lista(ogs)}
]);
`;

writeFileSync('src/lib/heroes.ts', salida, 'utf8');
console.log(`heroes.ts: ${heroes.length} portadas, ${ogs.length} recortes og`);
