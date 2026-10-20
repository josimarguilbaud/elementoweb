/* Compone piezas reales (capturas, anuncios, cuadros de video) dentro de las pantallas magenta de un render de fal.
     node scripts/componer-pantallas.mjs <render.png> <salida.png> <pieza> [<pieza>…] [--ajuste cover|contain] [--umbral N]
   Cada región magenta del render (R−G y B−G por encima del umbral, 90 por defecto) es una pantalla. Hay que pedir el
   render con la pantalla #FF00FF plana. La pieza se deforma en perspectiva hasta las 4 esquinas de la pantalla, así
   que una pantalla algo inclinada (menos de 45°) también sirve; si una mano tapa una esquina, esa esquina sale de la
   mano y la pieza se tuerce: hay que revisar el resultado.
   Las pantallas se ordenan de mayor a menor área y la primera pieza va en la mayor. Con `cover` (por defecto) la pieza
   se recorta desde arriba a la proporción de la pantalla, que es lo que se ve primero; con `contain` entra entera, con
   bandas negras. La máscara de cada pantalla tiene borde suave, así que el notch, las esquinas y los marcos del render
   quedan encima. En un margen alrededor de cada pantalla (un cuarto de su lado mayor) se quita el reflejo magenta del
   teclado, la base y el marco; más lejos no se toca nada.
   Sale con 2 si el uso es incorrecto y con 1 si el render no tiene una pantalla por pieza. Prueba en
   scripts/marketing-ia.test.mjs. */
import sharp from 'sharp';

const USO = 'MKIA-PANTALLAS: uso: node scripts/componer-pantallas.mjs <render.png> <salida.png> <pieza> [<pieza>…] [--ajuste cover|contain] [--umbral N]';
const AREA_MINIMA = 2000;

function leerArgs(argv) {
  const pos = [];
  let ajuste = 'cover';
  let umbral = 90;
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--ajuste') ajuste = argv[++i];
    else if (argv[i] === '--umbral') umbral = Number(argv[++i]);
    else pos.push(argv[i]);
  }
  if (pos.length < 3 || !['cover', 'contain'].includes(ajuste) || !Number.isInteger(umbral) || umbral < 1 || umbral > 254) return null;
  const [render, salida, ...piezas] = pos;
  return { render, salida, piezas, ajuste, umbral };
}

// Regiones conexas de píxeles magenta (relleno con 4 vecinos). El vecino izquierdo y el derecho se miran solo dentro
// de la fila: en memoria, el último píxel de una fila y el primero de la siguiente son contiguos, pero en la imagen no.
function regionesMagenta(px, W, H, umbral) {
  const marca = new Uint8Array(W * H);
  for (let p = 0, i = 0; p < W * H; p++, i += 3) if (px[i] - px[i + 1] > umbral && px[i + 2] - px[i + 1] > umbral) marca[p] = 1;
  const visto = new Uint8Array(W * H);
  const regiones = [];
  for (let p = 0; p < W * H; p++) {
    if (!marca[p] || visto[p]) continue;
    const pila = [p];
    visto[p] = 1;
    let x0 = W, y0 = H, x1 = 0, y1 = 0, n = 0;
    // Esquinas de la pantalla, aunque esté inclinada (menos de 45°): la de menor x+y es la de arriba a la izquierda,
    // la de mayor x−y la de arriba a la derecha, la de mayor x+y la de abajo a la derecha y la de menor x−y la otra.
    const esq = { tl: [x0, y0, Infinity], tr: [0, 0, -Infinity], br: [0, 0, -Infinity], bl: [0, 0, Infinity] };
    while (pila.length) {
      const q = pila.pop();
      const x = q % W, y = (q / W) | 0;
      n++;
      if (x < x0) x0 = x;
      if (x > x1) x1 = x;
      if (y < y0) y0 = y;
      if (y > y1) y1 = y;
      if (x + y < esq.tl[2]) esq.tl = [x, y, x + y];
      if (x + y > esq.br[2]) esq.br = [x, y, x + y];
      if (x - y > esq.tr[2]) esq.tr = [x, y, x - y];
      if (x - y < esq.bl[2]) esq.bl = [x, y, x - y];
      const vecinos = [];
      if (x > 0) vecinos.push(q - 1);
      if (x < W - 1) vecinos.push(q + 1);
      if (y > 0) vecinos.push(q - W);
      if (y < H - 1) vecinos.push(q + W);
      for (const r of vecinos) if (marca[r] && !visto[r]) { visto[r] = 1; pila.push(r); }
    }
    if (n > AREA_MINIMA) regiones.push({ x0, y0, x1, y1, n, esquinas: [esq.tl, esq.tr, esq.br, esq.bl].map(([x, y]) => [x, y]) });
  }
  return regiones.sort((a, b) => b.n - a.n);
}

/* Homografía del cuadrado unidad a las 4 esquinas (arriba a la izquierda, arriba a la derecha, abajo a la derecha,
   abajo a la izquierda), por la fórmula de Heckbert, y su inversa: de un píxel de la pantalla a (u, v) de la pieza. */
function deCuadradoA([[x0, y0], [x1, y1], [x2, y2], [x3, y3]]) {
  const dx1 = x1 - x2, dx2 = x3 - x2, dx3 = x0 - x1 + x2 - x3;
  const dy1 = y1 - y2, dy2 = y3 - y2, dy3 = y0 - y1 + y2 - y3;
  const den = dx1 * dy2 - dx2 * dy1;
  const g = (dx3 * dy2 - dx2 * dy3) / den, h = (dx1 * dy3 - dx3 * dy1) / den;
  return [x1 - x0 + g * x1, x3 - x0 + h * x3, x0, y1 - y0 + g * y1, y3 - y0 + h * y3, y0, g, h, 1];
}
function inversa([a, b, c, d, e, f, g, h, i]) {
  const A = e * i - f * h, B = -(d * i - f * g), C = d * h - e * g;
  const det = a * A + b * B + c * C;
  return [A, -(b * i - c * h), b * f - c * e, B, a * i - c * g, -(a * f - c * d), C, -(a * h - b * g), a * e - b * d].map((v) => v / det);
}
const largo = ([ax, ay], [bx, by]) => Math.hypot(bx - ax, by - ay);

async function capa(px, W, region, archivo, ajuste) {
  const w = region.x1 - region.x0 + 1, h = region.y1 - region.y0 + 1;
  const [tl, tr, br, bl] = region.esquinas;
  // La pieza se prepara a la medida real de la pantalla (sus lados, no su rectángulo envolvente).
  const pw = Math.max(2, Math.round(Math.max(largo(tl, tr), largo(bl, br))) + 1);
  const ph = Math.max(2, Math.round(Math.max(largo(tl, bl), largo(tr, br))) + 1);
  let pieza = sharp(archivo);
  if (ajuste === 'cover') {
    const meta = await sharp(archivo).metadata();
    const altoRecorte = Math.min(meta.height, Math.round(meta.width * ph / pw));
    pieza = pieza.extract({ left: 0, top: 0, width: meta.width, height: altoRecorte }).resize(pw, ph);
  } else {
    pieza = pieza.resize(pw, ph, { fit: 'contain', background: { r: 0, g: 0, b: 0 } });
  }
  const img = await pieza.removeAlpha().raw().toBuffer();
  const [m0, m1, m2, m3, m4, m5, m6, m7, m8] = inversa(deCuadradoA(region.esquinas));
  const muestra = (fx, fy, k) => { // bilineal, con el borde repetido
    const x = Math.min(Math.max(fx, 0), pw - 1), y = Math.min(Math.max(fy, 0), ph - 1);
    const xa = Math.floor(x), ya = Math.floor(y), xb = Math.min(xa + 1, pw - 1), yb = Math.min(ya + 1, ph - 1);
    const tx = x - xa, ty = y - ya, p = (xx, yy) => img[(yy * pw + xx) * 3 + k];
    return Math.round((p(xa, ya) * (1 - tx) + p(xb, ya) * tx) * (1 - ty) + (p(xa, yb) * (1 - tx) + p(xb, yb) * tx) * ty);
  };
  // Alfa desde la máscara magenta de esta región, suave en los píxeles del borde con antialiasing.
  const rgba = Buffer.alloc(w * h * 4);
  for (let y = 0; y < h; y++) for (let x = 0; x < w; x++) {
    const i = ((region.y0 + y) * W + (region.x0 + x)) * 3;
    const d = Math.min(px[i] - px[i + 1], px[i + 2] - px[i + 1]);
    const a = d > 150 ? 255 : d > 60 ? Math.round((d - 60) / 90 * 255) : 0;
    if (!a) continue;
    const X = region.x0 + x, Y = region.y0 + y, s = m6 * X + m7 * Y + m8;
    const u = (m0 * X + m1 * Y + m2) / s, v = (m3 * X + m4 * Y + m5) / s;
    const o = (y * w + x) * 4;
    for (let k = 0; k < 3; k++) rgba[o + k] = muestra(u * (pw - 1), v * (ph - 1), k);
    rgba[o + 3] = a;
  }
  return { input: await sharp(rgba, { raw: { width: w, height: h, channels: 4 } }).png().toBuffer(), left: region.x0, top: region.y0 };
}

const args = leerArgs(process.argv.slice(2));
if (!args) {
  console.error(USO);
  process.exit(2);
}
const { render, salida, piezas, ajuste, umbral } = args;
let base, W, H, px;
try {
  base = sharp(render);
  ({ width: W, height: H } = await base.metadata());
  px = await base.clone().removeAlpha().raw().toBuffer();
} catch (e) {
  console.error(`MKIA-PANTALLAS: no se pudo leer ${render}: ${e.message}`);
  process.exit(1);
}
const regiones = regionesMagenta(px, W, H, umbral);
if (regiones.length < piezas.length) {
  console.error(`MKIA-PANTALLAS: se esperaban ${piezas.length} pantallas magenta (una por pieza) y hay ${regiones.length}. Umbral: R−G>${umbral} y B−G>${umbral}. Arreglo: regenera con la pantalla #FF00FF plana o pasa --umbral.`);
  process.exit(1);
}
const pantallas = regiones.slice(0, piezas.length);

// Quita el reflejo magenta (R y B por encima de G) en un margen alrededor de cada pantalla, donde caen los reflejos del
// teclado, la base y el marco; más lejos no, para no apagar ropa ni objetos rosados de la foto. Dentro, la pieza lo tapa.
const margen = (r) => Math.max(12, Math.round(0.25 * Math.max(r.x1 - r.x0, r.y1 - r.y0)));
const dentro = (x, y) => pantallas.some((r) => x >= r.x0 && x <= r.x1 && y >= r.y0 && y <= r.y1);
const cerca = (x, y) => pantallas.some((r) => { const m = margen(r); return x >= r.x0 - m && x <= r.x1 + m && y >= r.y0 - m && y <= r.y1 + m; });
const limpio = Buffer.from(px);
for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
  if (dentro(x, y) || !cerca(x, y)) continue;
  const i = (y * W + x) * 3;
  const m = Math.min(limpio[i] - limpio[i + 1], limpio[i + 2] - limpio[i + 1]);
  if (m > 4) { limpio[i] -= m; limpio[i + 2] -= m; }
}
try {
  const capas = [];
  for (let k = 0; k < piezas.length; k++) capas.push(await capa(px, W, pantallas[k], piezas[k], ajuste));
  await sharp(limpio, { raw: { width: W, height: H, channels: 3 } }).composite(capas).png().toFile(salida);
} catch (e) {
  console.error(`MKIA-PANTALLAS: no se pudo componer: ${e.message}`);
  process.exit(1);
}
pantallas.forEach((r, k) => console.log(`pantalla ${k + 1}: ${r.x1 - r.x0 + 1}×${r.y1 - r.y0 + 1} en (${r.x0}, ${r.y0}) ← ${piezas[k]}`));
console.log(`ok ${salida}`);
