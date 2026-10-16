// Genera variantes WebP responsive junto a cada JPEG de las carpetas listadas:
//   foto.jpg  →  foto-480.webp, foto-800.webp, foto-1200.webp, foto-1600.webp
// (solo los anchos menores o iguales al original). El JPEG original se conserva
// como fallback. Idempotente: no rehace lo que ya existe y está al día.
//   node scripts/optimize-images.mjs            lo de siempre más las variantes por archivo
//   node scripts/optimize-images.mjs --force    rehace también las que ya existen (escalera de calidad)
import sharp from 'sharp';
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const DIRS = [
  { dir: 'public/images/hero', widths: [480, 800, 1200, 1600] },
  { dir: 'public/portfolio', widths: [480, 800, 1200] },
  { dir: 'public/images/blog', widths: [480, 800] },
];

/* Variantes extra por archivo (portada v2): anchos, calidad y recorte propios. La calidad baja por escalones si una
   variante pasa su tope de peso (60 KB en la primera pantalla, 40 KB las de industria): se cambia aquí y se corre con
   --force. `recorte` deja la imagen en esa proporción, anclada arriba (la captura de celular del héroe en 3:2). */
const ARCHIVOS = {
  'public/portfolio/sanblasfull.jpg': { anchos: [1000], calidad: 74 },
  'public/images/hero/industrias--diseno-web-turismo-hoteles-panama.jpg': { anchos: [640], calidad: 74 },
  'public/images/hero/industrias--diseno-web-constructoras-panama.jpg': { anchos: [560], calidad: 68 },
  'public/images/hero/industrias--diseno-web-logistica-transporte-panama.jpg': { anchos: [560], calidad: 68 },
  // Fuente de celular hecha con `node scripts/capturas-movil.mjs --fuente sanblasfull https://sanblasfull.com/`.
  'public/images/ejemplos/movil-sanblasfull.jpg': { anchos: [390, 780], calidad: 74, recorte: { aspecto: 3 / 2, posicion: 'top' } },
};

const force = process.argv.includes('--force');
const alDia = (src, out) => !force && existsSync(out) && statSync(out).mtimeMs >= statSync(src).mtimeMs;
let made = 0, bytesOut = 0;

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
  }
}

for (const [src, { anchos, calidad = 74, recorte }] of Object.entries(ARCHIVOS)) {
  if (!existsSync(src)) { console.log(`· falta la fuente ${src}; se salta`); continue; }
  for (const w of anchos) {
    const out = src.replace(/\.jpe?g$/i, `-${w}.webp`);
    if (alDia(src, out)) continue;
    const r = recorte
      ? sharp(src).resize(w, Math.round(w / recorte.aspecto), { fit: 'cover', position: recorte.posicion })
      : sharp(src).resize({ width: w });
    const info = await r.webp({ quality: calidad, effort: 5 }).toFile(out);
    console.log(`  ${out} ${info.width}x${info.height} ${(info.size / 1024).toFixed(1)} KB (calidad ${calidad})`);
    made++; bytesOut += info.size;
  }
}
console.log(`variantes nuevas: ${made} · ${(bytesOut / 1e6).toFixed(1)} MB`);
