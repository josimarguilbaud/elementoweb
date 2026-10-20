/* Instala una foto de portada nueva (D45) en el lugar de la de una página.
     node scripts/portadas-fotos.mjs <foto.jpg> <slug> [<foto.jpg> <slug> ...]
   Por cada par: recorta al centro a 10:7, escribe public/images/hero/<slug>.jpg a 1600x1120 (las medidas que declara
   el ImageObject del schema), rehace las variantes WebP de 480, 800, 1200 y 1600, con la de 1200 en 58 KB o menos
   (es la que sirve la portada v2, tope de 60 KB de D14), y el recorte para compartir public/images/og/<slug>.jpg
   a 1200x630. Imprime el peso de cada archivo. No toca src/lib/heroes.ts: si el slug es nuevo, correr después
   node scripts/heroes-manifest.mjs. Se puede importar sin efectos: el CLI corre solo si es el script principal. */
import sharp from 'sharp';
import { mkdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { webpConTope } from './lib/webp.mjs';

export { webpConTope };

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const TOPE_1200 = 58 * 1024;
const kb = (f) => `${Math.round(statSync(f).size / 1024)} KB`;

async function instalar(foto, slug) {
  if (!existsSync(foto)) throw new Error(`no existe ${foto}`);
  const nombre = slug.replace(/\//g, '--');
  const hero = join(RAIZ, 'public/images/hero');
  const og = join(RAIZ, 'public/images/og');
  mkdirSync(hero, { recursive: true });
  mkdirSync(og, { recursive: true });
  const { width, height } = await sharp(foto).metadata();
  const anchoRecorte = Math.min(width, Math.round(height * 10 / 7));
  const altoRecorte = Math.min(height, Math.round(anchoRecorte * 7 / 10));
  const recorte = { left: Math.round((width - anchoRecorte) / 2), top: Math.round((height - altoRecorte) / 2), width: anchoRecorte, height: altoRecorte };
  const base = await sharp(foto).extract(recorte).resize(1600, 1120, { kernel: 'lanczos3' }).jpeg({ quality: 84, mozjpeg: true }).toBuffer();
  const jpg = join(hero, `${nombre}.jpg`);
  await sharp(base).toFile(jpg);
  const lineas = [`${slug}: ${jpg.replace(RAIZ, '')} ${kb(jpg)}`];
  for (const w of [480, 800, 1200, 1600]) {
    const out = join(hero, `${nombre}-${w}.webp`);
    const q = await webpConTope(base, w, out, w === 1200 ? TOPE_1200 : null);
    lineas.push(`  ${w}.webp q${q} ${kb(out)}`);
  }
  const ogFile = join(og, `${nombre}.jpg`);
  await sharp(foto).resize(1200, 630, { fit: 'cover', position: 'attention' }).jpeg({ quality: 82, mozjpeg: true }).toFile(ogFile);
  lineas.push(`  og 1200x630 ${kb(ogFile)}`);
  console.log(lineas.join('\n'));
}

if (process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  const args = process.argv.slice(2);
  if (!args.length || args.length % 2) { console.error('Uso: node scripts/portadas-fotos.mjs <foto.jpg> <slug> [...]'); process.exit(2); }
  for (let i = 0; i < args.length; i += 2) await instalar(args[i], args[i + 1]);
}
