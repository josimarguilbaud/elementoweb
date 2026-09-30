// Genera variantes WebP responsive junto a cada JPEG de las carpetas listadas:
//   foto.jpg  →  foto-480.webp, foto-800.webp, foto-1200.webp, foto-1600.webp
// (solo los anchos menores o iguales al original). El JPEG original se conserva
// como fallback. Idempotente: no rehace lo que ya existe y está al día.
//   node scripts/optimize-images.mjs
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIRS = [
  { dir: 'public/images/hero', widths: [480, 800, 1200, 1600] },
  { dir: 'public/portfolio', widths: [480, 800, 1200] },
  { dir: 'public/images/blog', widths: [480, 800] },
];
let made = 0, bytesIn = 0, bytesOut = 0;
for (const { dir, widths } of DIRS) {
  for (const f of readdirSync(dir).filter((n) => /\.jpe?g$/i.test(n))) {
    const src = join(dir, f);
    const { width } = await sharp(src).metadata();
    for (const w of widths.filter((w) => w <= width)) {
      const out = join(dir, f.replace(/\.jpe?g$/i, `-${w}.webp`));
      if (existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs) continue;
      const info = await sharp(src).resize({ width: w }).webp({ quality: 74, effort: 5 }).toFile(out);
      made++; bytesOut += info.size;
    }
    bytesIn += statSync(src).size;
  }
}
console.log(`variantes nuevas: ${made} · ${(bytesOut / 1e6).toFixed(1)} MB`);
