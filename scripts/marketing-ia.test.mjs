/* IA creativa (D52, docs/specs/rediseno-elementoweb/SPEC-MARKETING-IA.md): node --test scripts/marketing-ia.test.mjs
   - Unidad: los scripts nuevos de la tanda, corridos con spawnSync sobre carpetas temporales (exit 2 con un uso
     incorrecto, exit 1 con un caso que falla).
   Ciclo rápido sin HTML: SOLO_UNIDAD=1 node --test scripts/marketing-ia.test.mjs */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { mkdtempSync, mkdirSync, rmSync, readFileSync, writeFileSync, existsSync, statSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import sharp from 'sharp';
import { revisarRegistro, CAMPOS_FILA } from './gasto-ia.mjs';
import { assertTipoEjemplo, fichaVideo, TIPOS_EJEMPLO } from '../src/lib/ejemplos.ts';
import { montoDe, extraNarracion, formatoPrecio } from '../src/lib/planes.ts';
import { marketingPages } from '../src/lib/pages/marketing.ts';
import { analizar } from './validar-marcador.mjs';
import { estadoDist, guardaDist } from './lib/dist-guard.mjs';
import { parse } from 'node-html-parser';

const precios = JSON.parse(readFileSync('src/data/precios.json', 'utf8'));
const correr = (script, args, env = {}) => spawnSync(process.execPath, [script, ...args], { encoding: 'utf8', env: { ...process.env, ...env } });
const carpeta = () => mkdtempSync(join(tmpdir(), 'mkia-'));

// Un render gris con rectángulos magenta (#FF00FF) en las posiciones dadas, como los que devuelve fal.
async function render(archivo, ancho, alto, rects) {
  const px = Buffer.alloc(ancho * alto * 3, 128);
  for (const { x0, y0, x1, y1 } of rects) {
    for (let y = y0; y <= y1; y++) for (let x = x0; x <= x1; x++) {
      const i = (y * ancho + x) * 3;
      px[i] = 255; px[i + 1] = 0; px[i + 2] = 255;
    }
  }
  await sharp(px, { raw: { width: ancho, height: alto, channels: 3 } }).png().toFile(archivo);
}
const solido = (archivo, [r, g, b]) =>
  sharp({ create: { width: 64, height: 64, channels: 3, background: { r, g, b } } }).png().toFile(archivo);
async function pixel(archivo, x, y) {
  const { data, info } = await sharp(archivo).removeAlpha().raw().toBuffer({ resolveWithObject: true });
  const i = (y * info.width + x) * 3;
  return [data[i], data[i + 1], data[i + 2]];
}

// protects=los precios de la tanda que decidió el dueño; fails_when=una clave falta o cambia de monto, o entra Anuncios o Avatar; no_claim=que el precio sea el de mercado
test('montos: las claves de IA creativa de esta tanda tienen el precio que decidió el dueño (D52)', () => {
  const c = precios.confirmados;
  const esperado = {
    'videos-ia': { nombre: 'Videos publicitarios con IA', monto: 500, unidad: 'paquete' },
    'fotos-producto-ia': { nombre: 'Fotografía de producto con IA', monto: 480, unidad: 'paquete' },
  };
  for (const [id, e] of Object.entries(esperado)) {
    assert.ok(c[id], `falta confirmados.${id} en precios.json`);
    assert.equal(c[id].nombre, e.nombre, `${id}.nombre`);
    assert.equal(c[id].monto, e.monto, `${id}.monto`);
    assert.equal(c[id].unidad, e.unidad, `${id}.unidad`);
    assert.equal(c[id].fuente, 'src/lib/pages/marketing.ts', `${id}.fuente`);
    assert.equal(c[id].desde, undefined, `${id}: precio fijo, sin "desde"`);
  }
  // Anuncios (780) y Avatar (150) están decididos, pero van como secciones con su propio plan (MKIA-DEMANDA).
  for (const id of ['anuncios-ia', 'avatar-ia']) {
    assert.ok(!(id in c) && !(id in precios.propuestos), `${id} no entra a precios.json en esta tanda`);
  }
});

// protects=los precios del video inmobiliario que decidió el dueño (D55.2, D55.5); fails_when=una clave falta, cambia de monto o de fuente; no_claim=que el precio sea el de mercado
test('montos: las 4 claves del video inmobiliario tienen el precio que decidió el dueño (D55)', () => {
  const c = precios.confirmados;
  const esperado = {
    'video-inmobiliario-unidad': { monto: 550, unidad: 'video' },
    'video-inmobiliario-proyecto': { monto: 1450, unidad: 'proyecto' },
    'video-inmobiliario-preventa': { monto: 2400, unidad: 'proyecto' },
    'narracion-subtitulos': { monto: 150, unidad: 'video' },
  };
  for (const [id, e] of Object.entries(esperado)) {
    assert.ok(c[id], `falta confirmados.${id} en precios.json`);
    assert.equal(c[id].monto, e.monto, `${id}.monto`);
    assert.equal(c[id].unidad, e.unidad, `${id}.unidad`);
    assert.equal(c[id].fuente, 'src/lib/pages/marketing.ts', `${id}.fuente`);
    assert.ok(c[id].nombre, `${id}.nombre`);
  }
});

// protects=la cuenta del extra y del total de cada plan; fails_when=una clave ausente pinta $undefined o el extra no multiplica; no_claim=las cifras del HTML (eso lo prueba la de dist/)
test('planes: montoDe rompe con una clave ausente, extraNarracion multiplica y formatoPrecio separa miles (CV6, EV9)', () => {
  assert.throws(() => montoDe(precios.confirmados, 'no-existe'), /VINM-PRECIO: falta confirmados\.no-existe/);
  assert.throws(() => montoDe({ x: { nombre: 'x', monto: 'mil', unidad: 'u', fuente: 'f' } }, 'x'), /no es un número válido/);
  assert.equal(extraNarracion(150, 4), 600);
  assert.equal(extraNarracion(90, 4), 360, 'otro monto cambia el extra');
  assert.equal(extraNarracion(150, 0), 0);
  assert.throws(() => extraNarracion(150, 1.5), TypeError);
  assert.equal(formatoPrecio(1450), '$1,450');
  assert.equal(formatoPrecio(550), '$550');
});

// protects=que ninguna maqueta quede en blanco en silencio; fails_when=un tipo sin rama en Ejemplo.astro no rompe; no_claim=que la rama pinte bien
test('ejemplos: un tipo desconocido rompe con MKIA-EJEMPLO y la lista cubre los tipos de types.ts', () => {
  assert.doesNotThrow(() => assertTipoEjemplo('video'));
  assert.doesNotThrow(() => assertTipoEjemplo('foto'));
  assert.throws(() => assertTipoEjemplo('gif'), /MKIA-EJEMPLO: tipo desconocido gif/);
  const declarados = [...readFileSync('src/lib/types.ts', 'utf8').matchAll(/\| \{ tipo: '([a-z-]+)'/g)].map((m) => m[1]);
  assert.deepEqual([...TIPOS_EJEMPLO].sort(), declarados.sort(), 'TIPOS_EJEMPLO y la unión Ejemplo de types.ts tienen los mismos tipos');
});

// protects=la ficha de duración, voz y peso bajo cada video; fails_when=el formato de la ficha cambia; no_claim=que los datos sean los del archivo (eso lo prueba la de cajas MP4)
test('ejemplos: fichaVideo dice duración, voz y peso como los lee la prueba del archivo', () => {
  assert.equal(fichaVideo({ duracion: 10.04, voz: true, bytes: 622631 }), '10 s · con voz y subtítulos · 608 KB');
  assert.equal(fichaVideo({ duracion: 9.6, voz: false, bytes: 1572864 }), '10 s · sin voz · 1,5 MB');
});

// protects=que importar portadas-fotos no corra su CLI; fails_when=el import sale con uso incorrecto o duplica webpConTope; no_claim=la calidad de la imagen
test('webp: lib/webp.mjs y portadas-fotos.mjs se importan sin efectos y comparten webpConTope', () => {
  const r = spawnSync(process.execPath, ['--input-type=module', '-e',
    "const a = await import('./scripts/lib/webp.mjs'); const b = await import('./scripts/portadas-fotos.mjs'); console.log(typeof a.webpConTope, a.webpConTope === b.webpConTope);"], { encoding: 'utf8' });
  assert.equal(r.status, 0, r.stderr);
  assert.equal(r.stdout.trim(), 'function true');
});

// protects=que una imagen sobre el tope no se publique en silencio; fails_when=webpConTope devuelve un archivo pesado sin MKIA-PESO; no_claim=el peso de las imágenes reales
test('webp: si no llega al tope sale MKIA-PESO con el peso logrado', async () => {
  const { webpConTope } = await import('./lib/webp.mjs');
  const dir = carpeta();
  try {
    const ruido = Buffer.from(Array.from({ length: 200 * 200 * 3 }, (_, i) => (i * 2654435761) % 251));
    const entrada = await sharp(ruido, { raw: { width: 200, height: 200, channels: 3 } }).png().toBuffer();
    await assert.rejects(webpConTope(entrada, 200, join(dir, 'x.webp'), 100), /MKIA-PESO: .*x\.webp.* \d+ KB/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// protects=que el respaldo de cada video no apunte a un archivo que falta; fails_when=un .mp4 ausente pasa o uno presente cuenta como roto; no_claim=que el video se reproduzca
test('check-links: un enlace a un .mp4 que falta en dist/ falla, y uno que existe no es una ruta rota', () => {
  const dir = carpeta();
  try {
    writeFileSync(join(dir, 'index.html'), '<a href="/videos/ia-creativa/x.mp4">x</a>');
    const falta = correr('scripts/check-links.mjs', [dir]);
    assert.equal(falta.status, 1, falta.stdout);
    assert.match(falta.stdout, /ROTO\s+\/videos\/ia-creativa\/x\.mp4/);
    mkdirSync(join(dir, 'videos/ia-creativa'), { recursive: true });
    writeFileSync(join(dir, 'videos/ia-creativa/x.mp4'), 'x');
    const existe = correr('scripts/check-links.mjs', [dir]);
    assert.equal(existe.status, 0, existe.stdout);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// Dos builds de prueba con su hoja en _astro/ y sus páginas, para los scripts que comparan contra la línea base.
function dosBuilds({ cssBase = '', cssNueva = '', paginasBase = {}, paginasNuevas = {} } = {}) {
  const dir = carpeta();
  for (const [lado, css, paginas] of [['base', cssBase, paginasBase], ['nueva', cssNueva, paginasNuevas]]) {
    mkdirSync(join(dir, lado, '_astro'), { recursive: true });
    writeFileSync(join(dir, lado, '_astro', 'hoja.css'), css);
    for (const [ruta, main] of Object.entries(paginas)) {
      mkdirSync(join(dir, lado, ruta), { recursive: true });
      writeFileSync(join(dir, lado, ruta, 'index.html'), `<html><body><header>menú ${lado}</header><main>${main}</main></body></html>`);
    }
  }
  return { dir, base: join(dir, 'base'), nueva: join(dir, 'nueva') };
}

// protects=el contrato de uso del script; fails_when=un uso incorrecto no sale con 2; no_claim=la comparación misma
test('selectores-hoja: un uso incorrecto sale con 2', () => {
  assert.equal(correr('scripts/selectores-hoja.mjs', []).status, 2);
  assert.equal(correr('scripts/selectores-hoja.mjs', ['no-existe-a', 'no-existe-b']).status, 2);
});

// protects=que la hoja compartida no gane utilidades del código; fails_when=una clase nueva que sale de src/ no hace fallar; no_claim=el peso total de la hoja
test('selectores-hoja: una clase nueva de la hoja que sale de src/ hace fallar; una que no está en el repo, no', () => {
  const sinUso = dosBuilds({ cssBase: '.a{color:red}', cssNueva: '.a{color:red}.zzq-clase-que-no-existe-9137{color:blue}' });
  const deSrc = dosBuilds({ cssBase: '.a{color:red}', cssNueva: '.a{color:red}@media (min-width:768px){.ew-vid__ficha{color:blue}}' });
  try {
    const ok = correr('scripts/selectores-hoja.mjs', [sinUso.base, sinUso.nueva]);
    assert.equal(ok.status, 0, ok.stdout + ok.stderr);
    assert.match(ok.stdout, /\+1 −0/);
    const mal = correr('scripts/selectores-hoja.mjs', [deSrc.base, deSrc.nueva]);
    assert.equal(mal.status, 1, mal.stdout + mal.stderr);
    assert.match(mal.stdout + mal.stderr, /ew-vid__ficha.*src\/styles\/ejemplo-media\.css/s);
  } finally {
    rmSync(sinUso.dir, { recursive: true, force: true });
    rmSync(deSrc.dir, { recursive: true, force: true });
  }
});

// protects=el contrato de uso del script; fails_when=un uso incorrecto no sale con 2; no_claim=la comparación misma
test('comparar-main: un uso incorrecto sale con 2', () => {
  assert.equal(correr('scripts/comparar-main.mjs', []).status, 2);
  assert.equal(correr('scripts/comparar-main.mjs', ['a', 'b']).status, 2, 'sin --permitidas');
});

// protects=que no cambie el <main> de páginas no declaradas; fails_when=un cambio o una página nueva sin declarar pasa; no_claim=el menú y el pie, que se comparan aparte
test('comparar-main: solo pueden cambiar las rutas declaradas y aparecer las nuevas declaradas', () => {
  const b = dosBuilds({
    paginasBase: { x: '<p>igual</p>', y: '<p>antes</p>' },
    paginasNuevas: { x: '<p>igual</p>', y: '<p>después</p>', z: '<p>nueva</p>' },
  });
  try {
    const permitidas = join(b.dir, 'permitidas.json');
    writeFileSync(permitidas, JSON.stringify({ cambian: ['/y/'], nuevas: ['/z/'] }));
    const ok = correr('scripts/comparar-main.mjs', [b.base, b.nueva, '--permitidas', permitidas]);
    assert.equal(ok.status, 0, ok.stdout + ok.stderr);
    writeFileSync(permitidas, JSON.stringify({ cambian: [], nuevas: ['/z/'] }));
    const mal = correr('scripts/comparar-main.mjs', [b.base, b.nueva, '--permitidas', permitidas]);
    assert.equal(mal.status, 1, mal.stdout + mal.stderr);
    assert.match(mal.stdout + mal.stderr, /\/y\/.*cambió/);
    writeFileSync(permitidas, JSON.stringify({ cambian: ['/y/'], nuevas: [] }));
    const nueva = correr('scripts/comparar-main.mjs', [b.base, b.nueva, '--permitidas', permitidas]);
    assert.equal(nueva.status, 1);
    assert.match(nueva.stdout + nueva.stderr, /\/z\/.*nueva/);
  } finally {
    rmSync(b.dir, { recursive: true, force: true });
  }
});

const PANTALLAS = 'scripts/componer-pantallas.mjs';

// protects=el contrato de uso del script; fails_when=un uso incorrecto no sale con 2; no_claim=la composición
test('componer-pantallas: un uso incorrecto sale con 2 y explica el uso', () => {
  const sinPiezas = correr(PANTALLAS, ['render.png', 'salida.png']);
  assert.equal(sinPiezas.status, 2, sinPiezas.stderr);
  assert.match(sinPiezas.stderr, /MKIA-PANTALLAS/);
  assert.match(sinPiezas.stderr, /<render\.png> <salida\.png> <pieza>/);
  const ajusteMalo = correr(PANTALLAS, ['render.png', 'salida.png', 'a.png', '--ajuste', 'estirar']);
  assert.equal(ajusteMalo.status, 2, ajusteMalo.stderr);
  const umbralMalo = correr(PANTALLAS, ['render.png', 'salida.png', 'a.png', '--umbral', 'x']);
  assert.equal(umbralMalo.status, 2, umbralMalo.stderr);
});

// protects=un mensaje que diga cómo arreglar un render sin pantallas; fails_when=faltan pantallas y el script compone igual o no dice el umbral; no_claim=que el render sea bueno
test('componer-pantallas: si hay menos pantallas que piezas sale con 1 y dice cuántas, el umbral y el arreglo', async () => {
  const dir = carpeta();
  try {
    await render(join(dir, 'render.png'), 200, 120, [{ x0: 10, y0: 10, x1: 69, y1: 69 }]);
    await solido(join(dir, 'a.png'), [255, 0, 0]);
    await solido(join(dir, 'b.png'), [0, 0, 255]);
    const r = correr(PANTALLAS, [join(dir, 'render.png'), join(dir, 'salida.png'), join(dir, 'a.png'), join(dir, 'b.png')]);
    assert.equal(r.status, 1, r.stderr);
    assert.match(r.stderr, /MKIA-PANTALLAS/);
    assert.match(r.stderr, /se esperaban 2 .* hay 1/);
    assert.match(r.stderr, /R−G>90 y B−G>90/);
    assert.match(r.stderr, /#FF00FF plana o pasa --umbral/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// protects=que dos pantallas junto al borde de una fila no se unan; fails_when=el relleno salta de una fila a la siguiente; no_claim=regiones de otras formas
test('componer-pantallas: dos regiones a ambos lados del borde de una fila no se unen, y la mayor recibe la primera pieza', async () => {
  const dir = carpeta();
  try {
    // A toca el borde derecho hasta la fila 59; B toca el borde izquierdo desde la fila 60. El píxel (199, 59) y el
    // (0, 60) son vecinos en memoria pero no en la imagen.
    await render(join(dir, 'render.png'), 200, 120, [
      { x0: 150, y0: 0, x1: 199, y1: 59 }, // A: 50 × 60 = 3000 px
      { x0: 0, y0: 60, x1: 49, y1: 109 }, // B: 50 × 50 = 2500 px
    ]);
    await solido(join(dir, 'a.png'), [255, 0, 0]);
    await solido(join(dir, 'b.png'), [0, 0, 255]);
    const salida = join(dir, 'salida.png');
    const r = correr(PANTALLAS, [join(dir, 'render.png'), salida, join(dir, 'a.png'), join(dir, 'b.png')]);
    assert.equal(r.status, 0, r.stderr);
    assert.deepEqual(await pixel(salida, 175, 30), [255, 0, 0], 'la pantalla mayor lleva la primera pieza');
    assert.deepEqual(await pixel(salida, 25, 85), [0, 0, 255], 'la pantalla menor lleva la segunda pieza');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// protects=que la pieza no se deforme en una pantalla angosta; fails_when=la pieza se estira en vez de recortarse; no_claim=el recorte desde arriba de piezas altas
test('componer-pantallas: con cover, una pieza más ancha que la pantalla se recorta al centro y no se estira', async () => {
  const dir = carpeta();
  try {
    // Pantalla angosta de 40 × 120 (como un celular) y pieza cuadrada en 3 franjas: roja, verde y azul.
    await render(join(dir, 'render.png'), 200, 160, [{ x0: 80, y0: 20, x1: 119, y1: 139 }]);
    const franja = (r, g, b) => Buffer.alloc(30 * 90 * 3, 0).map((_, i) => [r, g, b][i % 3]);
    await sharp({ create: { width: 90, height: 90, channels: 3, background: '#000' } })
      .composite([0, 1, 2].map((k) => ({ input: franja(...[[255, 0, 0], [0, 255, 0], [0, 0, 255]][k]), raw: { width: 30, height: 90, channels: 3 }, left: k * 30, top: 0 })))
      .png().toFile(join(dir, 'franjas.png'));
    const salida = join(dir, 'salida.png');
    const r = correr(PANTALLAS, [join(dir, 'render.png'), salida, join(dir, 'franjas.png')]);
    assert.equal(r.status, 0, r.stderr);
    assert.deepEqual(await pixel(salida, 84, 80), [0, 255, 0], 'el borde izquierdo de la pantalla muestra la franja del centro');
    assert.deepEqual(await pixel(salida, 115, 80), [0, 255, 0], 'y el derecho también');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// protects=que el despill no apague ropa ni objetos rosados; fails_when=un objeto rosado lejos de la pantalla cambia de color; no_claim=reflejos fuera del margen
test('componer-pantallas: el reflejo magenta se quita solo cerca de la pantalla, no en un objeto rosado lejano', async () => {
  const dir = carpeta();
  try {
    const W = 200, H = 160;
    const px = Buffer.alloc(W * H * 3, 128);
    const pinta = (x, y, [r, g, b]) => { const i = (y * W + x) * 3; px[i] = r; px[i + 1] = g; px[i + 2] = b; };
    for (let y = 20; y < 80; y++) for (let x = 20; x < 80; x++) pinta(x, y, [255, 0, 255]); // pantalla de 60 × 60
    for (let y = 40; y < 60; y++) for (let x = 82; x < 88; x++) pinta(x, y, [180, 120, 170]); // reflejo junto a la pantalla
    for (let y = 130; y < 150; y++) for (let x = 160; x < 190; x++) pinta(x, y, [230, 150, 200]); // blusa rosada lejos
    await sharp(px, { raw: { width: W, height: H, channels: 3 } }).png().toFile(join(dir, 'render.png'));
    await solido(join(dir, 'a.png'), [0, 0, 255]);
    const salida = join(dir, 'salida.png');
    const r = correr(PANTALLAS, [join(dir, 'render.png'), salida, join(dir, 'a.png')]);
    assert.equal(r.status, 0, r.stderr);
    const [rr, gg, bb] = await pixel(salida, 85, 50);
    assert.ok(Math.min(rr - gg, bb - gg) <= 4, `al reflejo junto a la pantalla se le quita el magenta: ${[rr, gg, bb]}`);
    assert.deepEqual(await pixel(salida, 175, 140), [230, 150, 200], 'la blusa rosada lejos de la pantalla no cambia');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// protects=que la pieza siga la inclinación de la pantalla; fails_when=la pieza se pega al rectángulo envolvente; no_claim=pantallas inclinadas más de 45°
test('componer-pantallas: una pantalla inclinada recibe la pieza en perspectiva, de esquina a esquina', async () => {
  const dir = carpeta();
  try {
    // Paralelogramo inclinado unos 30°: TL (60,10), TR (130,50), BR (100,150), BL (30,110).
    const W = 180, H = 170, TL = [60, 10], e1 = [70, 40], e2 = [-30, 100];
    const det = e1[0] * e2[1] - e1[1] * e2[0];
    const px = Buffer.alloc(W * H * 3, 128);
    for (let y = 0; y < H; y++) for (let x = 0; x < W; x++) {
      const dx = x - TL[0], dy = y - TL[1];
      const u = (dx * e2[1] - dy * e2[0]) / det, v = (e1[0] * dy - e1[1] * dx) / det;
      if (u >= 0 && u <= 1 && v >= 0 && v <= 1) { const i = (y * W + x) * 3; px[i] = 255; px[i + 1] = 0; px[i + 2] = 255; }
    }
    await sharp(px, { raw: { width: W, height: H, channels: 3 } }).png().toFile(join(dir, 'render.png'));
    // Pieza en 4 cuadrantes: roja arriba a la izquierda, verde arriba a la derecha, azul abajo a la izquierda, amarilla abajo a la derecha.
    const cuadrante = (c) => ({ input: { create: { width: 40, height: 60, channels: 3, background: c } } });
    await sharp({ create: { width: 80, height: 120, channels: 3, background: '#000' } })
      .composite([
        { ...cuadrante('#ff0000'), left: 0, top: 0 }, { ...cuadrante('#00ff00'), left: 40, top: 0 },
        { ...cuadrante('#0000ff'), left: 0, top: 60 }, { ...cuadrante('#ffff00'), left: 40, top: 60 },
      ]).png().toFile(join(dir, 'cuadrantes.png'));
    const salida = join(dir, 'salida.png');
    const r = correr(PANTALLAS, [join(dir, 'render.png'), salida, join(dir, 'cuadrantes.png')]);
    assert.equal(r.status, 0, r.stderr);
    // (85, 36) está en la mitad izquierda de la pantalla (u = 0,4) pero en la mitad derecha de su rectángulo envolvente.
    assert.deepEqual(await pixel(salida, 85, 36), [255, 0, 0], 'arriba a la izquierda de la pantalla va lo de arriba a la izquierda de la pieza');
    // (75, 124) está en la mitad derecha de la pantalla (u = 0,6) pero en la mitad izquierda de su rectángulo envolvente.
    assert.deepEqual(await pixel(salida, 75, 124), [255, 255, 0], 'abajo a la derecha de la pantalla va lo de abajo a la derecha de la pieza');
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

// ---- Gasto de la tanda (scripts/gasto-ia.mjs): la fila se reserva antes de cobrar y cada transición se valida ----
const GASTO = 'scripts/gasto-ia.mjs';
const T0 = '2026-10-20T15:00:00.000Z';
const masHoras = (h) => new Date(Date.parse(T0) + h * 3600e3).toISOString();

// Un registro de prueba en una carpeta temporal, con 2 filas viejas que en coma flotante suman 0.30000000000000004.
function registroDePrueba(gastadoTanda = 0) {
  const dir = carpeta();
  const archivo = join(dir, 'gasto.json');
  const filas = [
    { fecha: '2026-10-13', modelo: 'fal-ai/nano-banana-2', costo: 0.1, request_id: 'viejo-1', uso: 'portada a' },
    { fecha: '2026-10-13', modelo: 'fal-ai/nano-banana-2', costo: 0.2, request_id: 'viejo-2', uso: 'portada b' },
  ];
  if (gastadoTanda) filas.push({ id: 'mkia-0', fecha: '2026-10-19', hora: T0, modelo: 'fal-ai/x', costo: gastadoTanda, request_id: 'previo', uso: 'previo', tanda: 'marketing-ia', estado: 'confirmado' });
  writeFileSync(archivo, JSON.stringify({ _nota: 'prueba', tope: 25, gastado: 0, tandas: { 'marketing-ia': { tope: 15, gastado: 0 } }, generaciones: filas }));
  const env = (horas = 0) => ({ GASTO_IA_ARCHIVO: archivo, GASTO_IA_BLOQUEO: join(dir, 'gasto.lock'), GASTO_IA_AHORA: masHoras(horas) });
  const leer = () => JSON.parse(readFileSync(archivo, 'utf8'));
  const fila = (id) => leer().generaciones.find((g) => g.id === id);
  return { dir, archivo, env, leer, fila };
}
const idDe = (r) => (r.stdout.match(/mkia-\d+/g) ?? []);

// protects=el contrato de uso del script; fails_when=un uso incorrecto no sale con 2; no_claim=las transiciones
test('gasto: un uso incorrecto sale con 2', () => {
  const { dir, env } = registroDePrueba();
  try {
    for (const args of [['volar'], ['reservar', 'pieza', 'modelo'], ['reservar', 'pieza', 'modelo', 'caro'], ['confirmar', 'mkia-1'], ['confirmar', 'mkia-1', '-1']]) {
      const r = correr(GASTO, args, env());
      assert.equal(r.status, 2, `${args.join(' ')}: ${r.stderr}`);
      assert.match(r.stderr, /MKIA-GASTO: uso/);
    }
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=que el tope de una tanda nueva sea el escrito y no uno inventado (EV7); fails_when=--tanda con una tanda que no existe la crea con tope 15; no_claim=el tope del archivo
test('gasto: --tanda con una tanda que no existe sale con MKIA-TANDA y no escribe', () => {
  const { dir, archivo, env } = registroDePrueba();
  try {
    const antes = readFileSync(archivo, 'utf8');
    const r = correr(GASTO, ['--tanda', 'video-inmobilario', 'reservar', 'pieza', 'fal-ai/x', '0.15'], env());
    assert.equal(r.status, 1, r.stderr);
    assert.match(r.stderr, /MKIA-TANDA: la tanda video-inmobilario no existe/);
    assert.equal(readFileSync(archivo, 'utf8'), antes);
    assert.equal(correr(GASTO, ['--tanda'], env()).status, 2, '--tanda sin nombre es un uso incorrecto');
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=el registro de un gasto ya cobrado en su tanda, con su tope (SR16, EV15); fails_when=registrar no deja la fila confirmada en la tanda pedida o pasa el tope sin sobrepaso; no_claim=que el costo sea el cobrado
test('gasto: registrar anota un cobro ya hecho en la tanda pedida y respeta su tope', () => {
  const { dir, archivo, env, leer } = registroDePrueba();
  try {
    const reg = JSON.parse(readFileSync(archivo, 'utf8'));
    reg.tandas['video-inmobiliario'] = { tope: 1, gastado: 0 };
    writeFileSync(archivo, JSON.stringify(reg));
    const r = correr(GASTO, ['--tanda', 'video-inmobiliario', 'registrar', 'render sala', 'fal-ai/nano-banana-pro', '0.15', 'req-1'], env());
    assert.equal(r.status, 0, r.stderr);
    const f = leer().generaciones.find((g) => g.request_id === 'req-1');
    assert.deepEqual([f.tanda, f.estado, f.costo], ['video-inmobiliario', 'confirmado', 0.15]);
    assert.equal(leer().tandas['video-inmobiliario'].gastado, 0.15);
    assert.equal(leer().tandas['marketing-ia'].gastado, 0, 'la otra tanda no cambia');
    const caro = correr(GASTO, ['--tanda', 'video-inmobiliario', 'registrar', 'clip', 'fal-ai/kling', '0.90', 'req-2'], env());
    assert.equal(caro.status, 1, 'pasa el tope de US$ 1');
    assert.equal(leer().generaciones.find((g) => g.request_id === 'req-2').estado, 'sobrepaso');
    const sinTanda = correr(GASTO, ['registrar', 'demo Luxor500', 'fal-ai/kling', '0.70', 'req-3', '--sin-tanda'], env());
    assert.equal(sinTanda.status, 0, sinTanda.stderr);
    assert.equal(leer().generaciones.find((g) => g.request_id === 'req-3').tanda, undefined, 'un trabajo de cliente va sin tanda');
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=el camino feliz del registro de gasto; fails_when=una transición válida no deja la fila confirmada o los totales no cuadran; no_claim=el costo real de fal
test('gasto: reservar → enviado → confirmar deja la fila confirmada y recalcula los totales en centavos', () => {
  const { dir, env, leer, fila } = registroDePrueba();
  try {
    const r = correr(GASTO, ['reservar', 'ia-videos-1', 'fal-ai/kling-video/v2.5-turbo/pro/image-to-video', '0.70'], env());
    assert.equal(r.status, 0, r.stderr);
    const [id] = idDe(r);
    assert.equal(fila(id).estado, 'reservado');
    assert.equal(fila(id).request_id, null);
    assert.equal(fila(id).tanda, 'marketing-ia');
    assert.equal(fila(id).fecha, '2026-10-20');
    assert.equal(correr(GASTO, ['enviado', id, '01a2b3c4-d5e6'], env()).status, 0);
    assert.equal(fila(id).estado, 'pendiente');
    assert.equal(fila(id).request_id, '01a2b3c4-d5e6');
    const c = correr(GASTO, ['confirmar', id, '0.70'], env());
    assert.equal(c.status, 0, c.stderr);
    assert.equal(fila(id).estado, 'confirmado');
    assert.equal(leer().gastado, 1, 'suma en centavos: 0.1 + 0.2 + 0.7 = 1, sin restos de coma flotante');
    assert.equal(leer().tandas['marketing-ia'].gastado, 0.7);
    assert.deepEqual(revisarRegistro(leer()), []);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=que no se escriba una transición imposible; fails_when=una transición inválida escribe el archivo; no_claim=que el agente llame al script
test('gasto: una transición inválida sale con 1 y no escribe', () => {
  const { dir, env, archivo } = registroDePrueba();
  try {
    const [id] = idDe(correr(GASTO, ['reservar', 'ia-fotos-1', 'fal-ai/nano-banana-pro/edit', '0.15'], env()));
    const antes = readFileSync(archivo, 'utf8');
    for (const args of [['confirmar', id, '0.15'], ['fallido', id], ['asumido', id], ['enviado', 'mkia-99', 'x'], ['enviado', id, 'https://fal.run/x?token=abc']]) {
      const r = correr(GASTO, args, env(1)); // a la hora 1, `asumido` todavía es prematuro
      assert.equal(r.status, 1, `${args.join(' ')} debía fallar`);
      assert.match(r.stderr, /MKIA-GASTO/);
    }
    assert.equal(readFileSync(archivo, 'utf8'), antes);
    assert.equal(correr(GASTO, ['enviado', id, 'req-1'], env()).status, 0);
    for (const args of [['enviado', id, 'req-2'], ['borrar', id]]) assert.equal(correr(GASTO, args, env()).status, 1, `${args[0]} desde pendiente`);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=que el tope de US$ 15 no se pase; fails_when=un lote que no cabe reserva alguna pieza; no_claim=el tope del archivo en todos los casos
test('gasto: el tope suma el lote entero y lo comprometido, y sale con MKIA-TOPE', () => {
  const { dir, env, leer } = registroDePrueba(14.5);
  try {
    const lote = correr(GASTO, ['reservar', 'a', 'fal-ai/x', '0.30', 'b', 'fal-ai/x', '0.30'], env());
    assert.equal(lote.status, 1);
    assert.match(lote.stderr, /MKIA-TOPE/);
    assert.equal(leer().generaciones.length, 3, 'un lote que no cabe no reserva ninguna pieza');
    assert.equal(correr(GASTO, ['reservar', 'a', 'fal-ai/x', '0.50'], env()).status, 0, '14.5 + 0.5 = 15 cabe justo');
    const otra = correr(GASTO, ['reservar', 'c', 'fal-ai/x', '0.01'], env());
    assert.equal(otra.status, 1, 'lo reservado cuenta para el tope');
    assert.match(otra.stderr, /MKIA-TOPE/);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=que un sobrepaso bloquee hasta que el dueño apruebe; fails_when=tras un sobrepaso se puede reservar; no_claim=que el dueño lo haya aprobado de verdad
test('gasto: un costo real que pasa el tope queda en sobrepaso y bloquea las reservas', () => {
  const { dir, env, fila, leer } = registroDePrueba(14.5);
  try {
    const [id] = idDe(correr(GASTO, ['reservar', 'a', 'fal-ai/x', '0.50'], env()));
    correr(GASTO, ['enviado', id, 'req-a'], env());
    const c = correr(GASTO, ['confirmar', id, '0.70'], env());
    assert.equal(c.status, 1);
    assert.match(c.stderr, /MKIA-TOPE.*sobrepaso/);
    assert.equal(fila(id).estado, 'sobrepaso');
    assert.equal(leer().tandas['marketing-ia'].gastado, 15.2);
    const r = correr(GASTO, ['reservar', 'b', 'fal-ai/x', '0.01'], env());
    assert.equal(r.status, 1);
    assert.match(r.stderr, /sobrepaso/);
    assert.equal(correr(GASTO, ['aprobar-sobrepaso', id], env()).status, 0);
    assert.equal(fila(id).estado, 'confirmado');
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=que una sesión cortada no deje gasto sin contar; fails_when=una reserva pasa a asumido antes de 24 h; no_claim=que el trabajo no exista en fal
test('gasto: una reserva sin request_id pasa a asumido solo después de 24 h, con su estimado como gasto', () => {
  const { dir, env, fila, leer } = registroDePrueba();
  try {
    const [id] = idDe(correr(GASTO, ['reservar', 'a', 'fal-ai/x', '0.15'], env(0)));
    assert.equal(correr(GASTO, ['asumido', id], env(23)).status, 1, 'antes de 24 h no');
    assert.equal(correr(GASTO, ['asumido', id], env(25)).status, 0);
    assert.equal(fila(id).estado, 'asumido');
    assert.equal(fila(id).request_id, `sin-id:${id}`);
    assert.equal(leer().tandas['marketing-ia'].gastado, 0.15);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=que lo no cobrado no sume; fails_when=un fallido conserva costo o borrar deja la fila; no_claim=que fal no haya cobrado
test('gasto: fallido deja costo 0 y borrar quita una reserva cuyo envío dio error', () => {
  const { dir, env, fila, leer } = registroDePrueba();
  try {
    const [a, b] = idDe(correr(GASTO, ['reservar', 'a', 'fal-ai/x', '0.15', 'b', 'fal-ai/x', '0.15'], env()));
    correr(GASTO, ['enviado', a, 'req-a'], env());
    assert.equal(correr(GASTO, ['fallido', a], env()).status, 0);
    assert.equal(fila(a).estado, 'fallido');
    assert.equal(fila(a).costo, 0);
    assert.equal(correr(GASTO, ['borrar', b], env()).status, 0);
    assert.equal(fila(b), undefined);
    assert.deepEqual(revisarRegistro(leer()), []);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=que dos sesiones no reescriban el registro a la vez; fails_when=con el bloqueo tomado el script escribe; no_claim=un bloqueo viejo de una sesión caída
test('gasto: con el bloqueo tomado sale con MKIA-BLOQUEO y no escribe', () => {
  const { dir, env, archivo } = registroDePrueba();
  try {
    writeFileSync(env().GASTO_IA_BLOQUEO, 'otra sesión');
    const antes = readFileSync(archivo, 'utf8');
    const r = correr(GASTO, ['reservar', 'a', 'fal-ai/x', '0.15'], env());
    assert.equal(r.status, 1);
    assert.match(r.stderr, /MKIA-BLOQUEO/);
    assert.equal(readFileSync(archivo, 'utf8'), antes);
  } finally { rmSync(dir, { recursive: true, force: true }); }
});

// protects=que el registro publicado cuadre y no pase sus topes (AC8); fails_when=hay filas sin conciliar, campos de más, URL o totales que no cuadran; no_claim=que cada costo sea el cobrado
test('gasto: el registro real está conciliado, cuadra en centavos y no pasa sus topes (AC8)', () => {
  const real = JSON.parse(readFileSync('audit/imagenes-ia-2026-10.json', 'utf8'));
  assert.deepEqual(revisarRegistro(real), []);
  assert.equal(real.tandas?.['marketing-ia']?.tope, 15, 'tope de la tanda: US$ 15 (D52.4)');
  assert.equal(real.tandas?.['video-inmobiliario']?.tope, 10, 'tope de la tanda: US$ 10 (D55, G4)');
  // La revisión ve los dos casos que no se cuelan: una fila sin conciliar y una fila con campos fuera de la lista.
  const conPendiente = structuredClone(real);
  conPendiente.generaciones.push({ id: 'mkia-x', fecha: '2026-10-20', hora: T0, modelo: 'fal-ai/x', costo: 0.15, request_id: 'r', uso: 'u', tanda: 'marketing-ia', estado: 'pendiente' });
  assert.match(revisarRegistro(conPendiente).join('\n'), /sin conciliar/);
  const conCampoExtra = structuredClone(real);
  conCampoExtra.generaciones.push({ fecha: '2026-10-20', modelo: 'fal-ai/x', costo: 0, request_id: 'r', uso: 'u', url: 'https://fal.media/x.png' });
  const problemas = revisarRegistro(conCampoExtra).join('\n');
  assert.match(problemas, /campo fuera de la lista: url/);
  assert.match(problemas, /url con https\?:\/\/ o token=/);
  assert.ok(CAMPOS_FILA.includes('request_id'));
});

// ---- Las páginas que salen en esta tanda (src/data/ia-creativa.json) ----
const IA = JSON.parse(readFileSync('src/data/ia-creativa.json', 'utf8')).paginas;
const formulario = JSON.parse(readFileSync('src/data/formulario.json', 'utf8'));
const ORDEN_BLOQUES = ['answer', 'receipt', 'ejemplos', 'blank', 'includes', 'steps', 'tabla', 'compare', 'faq', 'form', 'related'];
const DOMINIO = 'https://elementoweb.com';
const nombreDe = (slug) => slug.split('/').pop();
const paginaDe = (slug) => marketingPages.find((p) => p.slug === slug);
// Los videos de «Así se vería» y los del collage de `planes-tabs` (D55, EV1): las mismas pruebas para todos.
const videosDe = (p) => p.blocks.flatMap((b) => (b.type === 'ejemplos' ? b.items : b.type === 'planes-tabs' ? b.media : [])).filter((e) => e.tipo === 'video');
const planesDe = (p) => p.blocks.find((b) => b.type === 'planes-tabs')?.planes ?? null;
const htmlDe = (slug) => readFileSync(`dist/${slug}/index.html`, 'utf8');
const enPublico = (src) => join('public', src);
const enDist = (src) => join('dist', src);
const palabrasDe = (t) => t.trim().split(/\s+/).length;

/* Cajas de un MP4 sin ffprobe (la prueba corre en CI sin ffmpeg): duración de la película (mvhd), y por pista su tipo
   (hdlr), su duración (mdhd), su códec (stsd) y, en H.264, el perfil (avcC). */
function cajasMp4(buf) {
  const pistas = [];
  let pelicula = null;
  const hijos = (ini, fin) => {
    const out = [];
    for (let o = ini; o + 8 <= fin;) {
      let tam = buf.readUInt32BE(o), cab = 8;
      if (tam === 1) { tam = Number(buf.readBigUInt64BE(o + 8)); cab = 16; }
      if (tam === 0) tam = fin - o;
      out.push({ tipo: buf.toString('latin1', o + 4, o + 8), ini: o + cab, fin: o + tam });
      o += tam;
    }
    return out;
  };
  const duracion = (c) => { const v = buf[c.ini]; return v === 1 ? Number(buf.readBigUInt64BE(c.ini + 24)) / buf.readUInt32BE(c.ini + 20) : buf.readUInt32BE(c.ini + 16) / buf.readUInt32BE(c.ini + 12); };
  const moov = hijos(0, buf.length).find((c) => c.tipo === 'moov');
  for (const c of hijos(moov.ini, moov.fin)) {
    if (c.tipo === 'mvhd') pelicula = duracion(c);
    if (c.tipo !== 'trak') continue;
    const mdia = hijos(c.ini, c.fin).find((h) => h.tipo === 'mdia');
    const de = (padre, tipo) => hijos(padre.ini, padre.fin).find((h) => h.tipo === tipo);
    const hdlr = de(mdia, 'hdlr'), mdhd = de(mdia, 'mdhd');
    const stbl = de(de(mdia, 'minf'), 'stbl'), stsd = de(stbl, 'stsd');
    const entrada = hijos(stsd.ini + 8, stsd.fin)[0];
    let perfil = null;
    if (entrada.tipo === 'avc1') perfil = buf[hijos(entrada.ini + 78, entrada.fin).find((h) => h.tipo === 'avcC').ini + 1];
    pistas.push({ handler: buf.toString('latin1', hdlr.ini + 8, hdlr.ini + 12), duracion: duracion(mdhd), codec: entrada.tipo, perfil });
  }
  return { duracion: pelicula, pistas };
}

const { ESTRICTO, SOLO_UNIDAD, viejo, conDist } = guardaDist();

// protects=que verify no dé verde sin mirar dist/; fails_when=dist/ falta o es más viejo que src/ o public/; no_claim=el contenido de dist/
test('dist/ existe y está al día (MKIA-DIST; falla con VERIFY=1 o en CI)', { skip: SOLO_UNIDAD ? 'SOLO_UNIDAD=1' : !ESTRICTO && viejo ? viejo : false }, () => {
  assert.equal(viejo, null, `MKIA-DIST: ${viejo}`);
});

// protects=el mensaje de la guarda sin tocar el dist/ real; fails_when=una raíz sin dist/ no da el motivo; no_claim=la comparación de fechas
test('dist-guard: una raíz sin dist/ da el motivo, sin tocar el dist/ real', () => {
  const dir = carpeta();
  try {
    assert.match(estadoDist(dir), /falta dist\/index\.html/);
  } finally {
    rmSync(dir, { recursive: true, force: true });
  }
});

for (const ia of IA) {
  const nombre = nombreDe(ia.slug);
  const p = paginaDe(ia.slug);

  // protects=los datos de cada página de la tanda; fails_when=falta la clave, el botón, el precio, el orden de bloques o el guion; no_claim=cómo se ve la página
  test(`datos de ${nombre}: clave, botón, precio, orden de bloques y videos con guion`, () => {
    assert.ok(p, `${ia.slug} no está en marketingPages`);
    assert.equal(p.serviceKey, ia.serviceKey);
    assert.equal(formulario.paginas[ia.slug], p.serviceKey, 'formulario.paginas lleva la misma clave');
    assert.ok(p.cta?.boton, 'cta.boton presente');
    const recibo = p.blocks.find((b) => b.type === 'receipt');
    assert.equal(recibo.precio.estado, 'confirmado');
    assert.equal(Number(recibo.precio.desde.replace(/[^0-9]/g, '')), precios.confirmados[ia.precio].monto);
    assert.equal(recibo.medicionId, ia.medicionId);
    // Cada página con su orden (EV2): el de ia-creativa.json, o el de Videos si no lo declara.
    assert.deepEqual(p.blocks.map((b) => b.type), ia.orden ?? ORDEN_BLOQUES);
    // Con planes, el catálogo son sus claves (SR4); sin planes, la clave única de la página.
    // `extras` (D61): precios confirmados adicionales que la página publica, como el plan mensual de Videos.
    assert.deepEqual(p.service?.catalogo, planesDe(p) ? planesDe(p).map((x) => x.clave) : [ia.precio, ...(ia.extras ?? [])]);
    for (const v of videosDe(p)) {
      if (!v.voz) continue;
      assert.ok(v.guion, `${v.src}: un video con voz lleva guion`);
      assert.ok(palabrasDe(v.guion) <= 2.3 * v.duracion, `${v.src}: el guion pasa de 2,3 palabras por segundo`);
    }
  });

  // protects=que cada video reproduzca en iPhone y su ficha diga la verdad; fails_when=códec, perfil, audio, duración o peso no coinciden; no_claim=la calidad visual
  test(`${nombre}: cada MP4 es H.264 compatible, con audio solo si tiene voz, y su ficha coincide con el archivo`, () => {
    for (const v of videosDe(p)) {
      const ruta = enPublico(v.src);
      assert.ok(existsSync(ruta), `falta ${ruta}`);
      const buf = readFileSync(ruta);
      assert.equal(v.bytes, buf.length, `${v.src}: bytes de la ficha`);
      assert.ok(buf.length <= 2 * 1024 * 1024, `${v.src} pasa de 2 MB`);
      const c = cajasMp4(buf);
      assert.ok(Math.abs(c.duracion - v.duracion) <= 0.5, `${v.src}: dura ${c.duracion} s y la ficha dice ${v.duracion}`);
      const video = c.pistas.find((t) => t.handler === 'vide');
      assert.equal(video.codec, 'avc1');
      assert.ok([66, 77, 100].includes(video.perfil), `${v.src}: perfil H.264 ${video.perfil}`);
      const audio = c.pistas.find((t) => t.handler === 'soun');
      assert.equal(!!audio, v.voz, `${v.src}: ${v.voz ? 'con voz debe tener' : 'sin voz no debe tener'} pista de audio`);
      if (audio) assert.ok(Math.abs(audio.duracion - video.duracion) <= 0.5, `${v.src}: el audio dura ${audio.duracion} s`);
    }
  });

  // protects=los metadatos de cada página nueva; fails_when=title, H1, descripción o canonical no son los de los datos; no_claim=que posicionen
  test(`${nombre}: title, H1, descripción y canonical en dist/`, conDist, () => {
    const raiz = parse(htmlDe(ia.slug));
    assert.equal(raiz.querySelector('title').text, p.title);
    assert.equal(raiz.querySelector('h1').text.trim(), p.h1);
    assert.equal(raiz.querySelector('meta[name="description"]').getAttribute('content'), p.description);
    assert.equal(raiz.querySelector('link[rel="canonical"]').getAttribute('href'), `${DOMINIO}/${ia.slug}/`);
  });

  // protects=que toda cifra de la página sea su monto; fails_when=una cifra o una minPrice distinta del monto; no_claim=que el monto sea el correcto (eso es montos)
  test(`${nombre}: servicio con precio, cifras y las minPrice iguales a los montos`, conDist, () => {
    const a = analizar(htmlDe(ia.slug));
    const monto = precios.confirmados[ia.precio].monto;
    assert.equal(a.pageType, 'servicio-con-precio');
    assert.equal(a.precio.monto, monto);
    const main = parse(htmlDe(ia.slug)).querySelector('main');
    for (const sel of main.querySelectorAll('select')) sel.remove();
    const planes = planesDe(p);
    // Con planes (EV9) cada panel se revisa aparte y fuera de los paneles solo vale el monto de la página.
    if (planes) {
      const extra = precios.confirmados['narracion-subtitulos'].monto;
      for (const x of planes) {
        const panel = main.querySelector(`#plan-${x.clave}`);
        assert.ok(panel, `falta el panel #plan-${x.clave}`);
        const base = precios.confirmados[x.clave].monto;
        const validas = new Set([base, base + extra * x.bloquesNarracion]);
        if (x.bloquesNarracion) validas.add(extra * x.bloquesNarracion);
        for (const m of panel.text.matchAll(/\$\s?([\d,]+)/g)) assert.ok(validas.has(Number(m[1].replace(/,/g, ''))), `cifra $${m[1]} en el panel de ${x.clave}`);
        panel.remove();
      }
      for (const tab of main.querySelectorAll('[data-plan-tab]')) {
        const x = planes.find((y) => y.clave === tab.getAttribute('data-plan-tab'));
        for (const m of tab.text.matchAll(/\$\s?([\d,]+)/g)) assert.equal(Number(m[1].replace(/,/g, '')), precios.confirmados[x.clave].monto, `cifra $${m[1]} en la pestaña de ${x.clave}`);
        tab.remove();
      }
    }
    const permitidos = new Set([monto, ...(ia.extras ?? []).map((k) => precios.confirmados[k].monto)]);
    for (const m of main.text.matchAll(/\$\s?([\d,]+)/g)) assert.ok(permitidos.has(Number(m[1].replace(/,/g, ''))), `cifra $${m[1]} en el <main>`);
    const servicio = a.jsonld.find((n) => n['@type'] === 'Service');
    const minimos = [];
    const buscar = (o) => { if (o && typeof o === 'object') for (const [k, v] of Object.entries(o)) k === 'minPrice' ? minimos.push(v) : buscar(v); };
    buscar(servicio);
    const catalogo = planes ? planes.map((x) => precios.confirmados[x.clave].monto) : [monto, ...(ia.extras ?? []).map((k) => precios.confirmados[k].monto)];
    assert.deepEqual(minimos, [monto, ...catalogo], 'offers con el monto de la página y hasOfferCatalog con el de cada plan');
  });

  // protects=el schema y el botón principal de cada página nueva; fails_when=el FAQPage difiere de lo visible, falta primaryImageOfPage o el botón dice otra cosa; no_claim=que Google muestre el resultado enriquecido
  test(`${nombre}: FAQPage igual a las preguntas visibles, primaryImageOfPage y botón principal`, conDist, () => {
    const html = htmlDe(ia.slug);
    const a = analizar(html);
    const faq = a.jsonld.find((n) => n['@type'] === 'FAQPage');
    assert.deepEqual(faq.mainEntity.map((q) => q.name), a.faq.preguntas);
    assert.ok(a.jsonldTexto.includes('primaryImageOfPage'), 'falta primaryImageOfPage');
    const raiz = parse(html);
    assert.equal(raiz.querySelector('.ew-hero__ctas .ew-btn--primary').text.trim(), p.cta.boton);
    assert.equal(a.service, p.serviceKey);
    assert.equal(raiz.querySelectorAll('[data-block="service-form"]').length, 0, 'sin ServiceForm (fase 3)');
  });

  // protects=el reproductor accesible y honesto de cada video; fails_when=autoplay, póster faltante, sin respaldo, ficha distinta o pie sin «Ejemplo ·»; no_claim=que el video se vea bien
  test(`${nombre}: videos sin autoplay, con póster, respaldo, ficha y pie «Ejemplo ·»`, conDist, () => {
    const main = parse(htmlDe(ia.slug)).querySelector('main');
    const videos = main.querySelectorAll('video');
    assert.equal(videos.length, videosDe(p).length);
    const ids = new Set();
    for (const el of videos) {
      const src = el.querySelector('source').getAttribute('src');
      const dato = videosDe(p).find((v) => v.src === src);
      assert.ok(dato, `${src} no está en los datos`);
      assert.equal(el.getAttribute('preload'), 'none');
      assert.equal(el.hasAttribute('autoplay'), false);
      assert.equal(el.hasAttribute('muted'), !dato.voz, `${src}: muted solo sin voz`);
      const poster = el.getAttribute('poster');
      assert.ok(existsSync(enDist(poster)), `falta ${poster}`);
      assert.ok(statSync(enDist(poster)).size <= 80 * 1024, `${poster} pasa de 80 KB`);
      assert.ok(existsSync(enDist(src)), `falta ${src} en dist/`);
      assert.equal(el.querySelector('a')?.getAttribute('href'), src, 'respaldo con enlace al mismo archivo');
      const id = el.getAttribute('aria-describedby');
      assert.ok(id && !ids.has(id), `aria-describedby único: ${id}`);
      ids.add(id);
      const fig = el.closest('figure');
      assert.equal(fig.querySelector(`#${id}`)?.text, fichaVideo(dato));
      assert.match(fig.querySelector('figcaption').text, /^Ejemplo ·/);
      if (dato.voz) assert.equal(fig.querySelector('details p')?.text, dato.guion, 'guion en «Ver guion»');
    }
  });

  // protects=la honestidad comercial de cada página; fails_when=falta el bloque de la herramienta gratis, la frontera o vuelve el aviso de clientes; no_claim=que las funciones citadas sigan vigentes
  test(`${nombre}: herramienta gratis, frontera y sin el aviso de clientes esperando permiso`, conDist, () => {
    const main = parse(htmlDe(ia.slug)).querySelector('main');
    assert.ok(main.querySelectorAll('h2').some((h) => h.text.trim() === '¿Cuándo te basta la herramienta gratis?'));
    const noIncluye = main.querySelector('[data-score="no-incluye"] li');
    assert.ok(noIncluye && /Contenido para redes|gestión de Meta Ads|set de imágenes|Videos publicitarios/.test(noIncluye.text), 'la frontera es el primer «No incluye»');
    assert.ok(!main.text.includes('falta la autorización del cli'));
  });

  // protects=que no se publique texto provisional (EV10); fails_when=queda un centinela PENDIENTE- en la página; no_claim=texto provisional sin centinela
  test(`${nombre}: sin centinelas PENDIENTE- en dist/`, conDist, () => {
    assert.ok(!htmlDe(ia.slug).includes('PENDIENTE-'), 'queda un texto provisional (PENDIENTE-) en la página');
  });

  if (!planesDe(p)) continue;

  // protects=el bloque de planes de la variante 4 (D55.1, DV2, DV6, DV7, EV3); fails_when=falta un panel, su «para quién», su botón o su WhatsApp con el plan, o el checklist no es el aprobado; no_claim=cómo se ve
  test(`${nombre}: planes con «Para quién es», plazo, botón al formulario con el plan y WhatsApp sin cifra`, conDist, () => {
    const main = parse(htmlDe(ia.slug)).querySelector('main');
    const bloque = main.querySelector('[data-block="planes-tabs"]');
    assert.ok(bloque, 'falta el bloque planes-tabs');
    assert.equal(videosDe(p).length, 2, 'el collage tiene exactamente 2 videos (EV1)');
    assert.equal(bloque.querySelectorAll('video').length, 2);
    for (const x of planesDe(p)) {
      const panel = bloque.querySelector(`#plan-${x.clave}`);
      assert.ok(panel.querySelector('h3'), `${x.clave}: sin JS cada plan es una sección con H3 (EV11)`);
      assert.match(panel.text, /Para quién es/, `${x.clave}: «Para quién es»`);
      assert.match(panel.text, /días hábiles/, `${x.clave}: plazo`);
      const cotizar = panel.querySelector('a[data-cotizar]');
      assert.equal(cotizar?.getAttribute('href'), `/contacto/?servicio=${p.serviceKey}&plan=${x.clave}#formulario`, `${x.clave}: botón al formulario con el plan`);
      const whats = panel.querySelector('a[href^="https://wa.me/"]');
      const texto = decodeURIComponent(whats.getAttribute('href').split('text=')[1] ?? '');
      assert.ok(texto.includes(x.nombre), `${x.clave}: el WhatsApp nombra el plan`);
      assert.ok(!/\$\s?\d/.test(texto), `${x.clave}: el WhatsApp no lleva cifra (D23)`);
    }
    const checks = bloque.querySelectorAll('[data-checklist] li').map((li) => li.text.trim());
    assert.deepEqual(checks, ['Horizontal y vertical', 'Música incluida', 'Revisión humana', '2 rondas de cambios']);
    const incluye = main.querySelector('[data-block="includes"]').text;
    for (const c of checks) assert.ok(incluye.toLowerCase().includes(c.toLowerCase()), `«${c}» también en «Qué incluye»`);
    for (const f of ['versión vertical', 'Imágenes ilustrativas, sujetas a cambios']) assert.ok(main.text.includes(f), `falta «${f}»`);
    assert.ok(!bloque.toString().includes('role="tablist"'), 'sin JS no hay roles de pestañas en el HTML (EV11)');
  });
}

// ---- Fuente única (ia-creativa.json) contra los sitios que la repiten ----
const slugsIA = IA.map((p) => p.slug).sort();
const leerTexto = (f) => readFileSync(f, 'utf8');
const filasMd = (titulo) => {
  const md = leerTexto('docs/specs/rediseno-elementoweb/KEYWORDS.md');
  const bloque = md.slice(md.indexOf(`## ${titulo}`)).split('\n## ')[0];
  return bloque.split('\n').filter((l) => /^\| `/.test(l)).map((l) => l.match(/^\| `\/([^`]*)\/`/)?.[1]);
};
const enlacesA = (html) => new Set([...html.matchAll(/href="\/([^"#?]+?)\/?"/g)].map((m) => m[1]));

// protects=las páginas de la tanda en todos sus sitios; fails_when=una página falta en uno de ellos; no_claim=que el texto de cada sitio sea correcto
test('ia-creativa.json: el mismo conjunto en el manifiesto, marketingPages, formulario, KEYWORDS, llms.txt y las portadas', async () => {
  const manifiesto = JSON.parse(leerTexto('scripts/paginas-comerciales.json'));
  const { HERO_SLUGS } = await import('../src/lib/heroes.ts');
  const img = leerTexto('src/lib/img.ts');
  const llms = leerTexto('public/llms.txt');
  const iguales = (nombre, conjunto) => assert.deepEqual(conjunto.sort(), slugsIA, `${nombre} no tiene las mismas páginas de IA creativa`);
  const deIA = (lista) => lista.filter((s) => slugsIA.includes(s) || /videos-publicitarios|fotografia-de-producto|anuncios-con-ia|avatar/.test(s ?? ''));
  iguales('el manifiesto', deIA(manifiesto.paginas.map((p) => p.slug)));
  iguales('marketingPages', deIA(marketingPages.map((p) => p.slug)));
  iguales('formulario.paginas', deIA(Object.keys(formulario.paginas)));
  iguales('KEYWORDS (Asignación)', deIA(filasMd('Asignación')));
  iguales('KEYWORDS (Apéndice)', deIA(filasMd('Apéndice: metadatos actuales (congelados, D36)')));
  iguales('HERO_SLUGS', deIA([...HERO_SLUGS]));
  for (const p of IA) {
    assert.ok(img.includes(`'${p.slug}': 'Foto hecha con IA`), `HERO_ALTS de ${p.slug} dice que la foto es de IA`);
    const linea = llms.split('\n').find((l) => l.includes(`https://elementoweb.com/${p.slug}/`));
    assert.ok(linea, `llms.txt no lista ${p.slug}`);
    assert.match(linea, new RegExp(`desde \\$${precios.confirmados[p.precio].monto}\\b`), `llms.txt: ${p.slug} con su monto`);
  }
});

// protects=la medición de cada página nueva; fails_when=falta su fila en mediciones.json; no_claim=que el LCP sea bueno
test('ia-creativa.json: cada medicionId tiene su fila en mediciones.json (mediciones)', () => {
  const ids = JSON.parse(leerTexto('src/data/mediciones.json')).mediciones.map((m) => m.id);
  for (const p of IA) assert.ok(ids.includes(p.medicionId), `falta ${p.medicionId} en src/data/mediciones.json (node scripts/medir.mjs)`);
});

// protects=que cada página tenga de dónde le llegan visitas internas; fails_when=el hub, /servicios/ o IA para empresas no la enlazan; no_claim=el texto del enlace
test('las páginas de IA creativa se enlazan desde el hub, /servicios/ e IA para empresas', conDist, () => {
  for (const ruta of ['marketing', 'servicios', 'inteligencia-artificial-para-empresas-panama']) {
    const main = parse(htmlDe(ruta)).querySelector('main').toString();
    for (const s of slugsIA) assert.ok(enlacesA(main).has(s), `/${ruta}/ no enlaza a /${s}/ desde su <main>`);
  }
});

// protects=hub y /servicios/ sin superlativos sin fuente; fails_when=vuelve una de las 2 frases; no_claim=que no haya otros superlativos
test('el hub y /servicios/ no dicen «El canal con mejor retorno» ni «creativos que detienen el scroll»', conDist, () => {
  for (const ruta of ['marketing', 'servicios']) {
    const texto = parse(htmlDe(ruta)).querySelector('main').text.toLowerCase();
    assert.ok(!texto.includes('el canal con mejor retorno'), `/${ruta}/ dice «El canal con mejor retorno»`);
    assert.ok(!texto.includes('creativos que detienen el scroll'), `/${ruta}/ dice «creativos que detienen el scroll»`);
  }
});

// protects=menú y pie sin utilidades nuevas; fails_when=un enlace de «Producción con IA» lleva otras clases que los de marketing; no_claim=el orden visual
test('menú y pie: los enlaces de «Producción con IA» llevan las mismas clases que los de marketing', conDist, () => {
  const raiz = parse(htmlDe('marketing'));
  // La tarjeta destacada del panel de Marketing (D56) repite Videos publicitarios con su propio estilo: no es una lista.
  const clasesDe = (href) => raiz.querySelectorAll(`a[href="${href}"]`).filter((a) => !a.closest('main') && !a.classList.contains('menu-destacada')).map((a) => a.getAttribute('class')).sort();
  const deMarketing = clasesDe('/marketing/google-ads-panama/');
  assert.ok(deMarketing.length >= 3, 'el menú de escritorio, el móvil y el pie enlazan a Google Ads');
  for (const s of slugsIA) assert.deepEqual(clasesDe(`/${s}/`), deMarketing, `/${s}/ en el menú y el pie`);
  assert.ok(raiz.text.includes('Producción con IA'));
});

// protects=créditos de todo archivo nuevo publicado; fails_when=un póster, video o portada de la tanda no tiene su fila; no_claim=que la descripción sea fiel
test('créditos: cada archivo nuevo de la tanda tiene su fila y las imágenes se publican sin EXIF', async () => {
  const ejemplos = JSON.parse(leerTexto('public/images/ejemplos/CREDITOS.json')).imagenes.map((f) => f.archivo);
  const hero = JSON.parse(leerTexto('public/images/hero/CREDITOS-IA.json')).imagenes.map((f) => f.archivo);
  const videos = JSON.parse(leerTexto('public/videos/ia-creativa/CREDITOS-IA.json')).videos.map((f) => f.archivo);
  for (const p of IA) {
    const base = `${p.slug.replace(/\//g, '--')}.jpg`;
    assert.ok(hero.includes(base), `public/images/hero/CREDITOS-IA.json sin ${base}`);
    for (const v of videosDe(paginaDe(p.slug))) {
      assert.ok(videos.includes(v.src.split('/').pop()), `CREDITOS-IA.json de videos sin ${v.src}`);
      const poster = v.poster.src.split('/').pop();
      assert.ok(ejemplos.includes(poster), `CREDITOS.json de ejemplos sin ${poster}`);
      const meta = await sharp(enPublico(v.poster.src)).metadata();
      assert.equal(meta.exif, undefined, `${poster} lleva EXIF`);
      assert.deepEqual([meta.width, meta.height], [v.poster.width, v.poster.height], `${poster}: medidas declaradas`);
    }
  }
  const sobran = [...new Set(videos)].filter((a) => !existsSync(join('public/videos/ia-creativa', a)));
  assert.deepEqual(sobran, [], 'filas de videos sin archivo');
});
