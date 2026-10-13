/* Presupuesto de JS y CSS (D40, T27): node --test scripts/presupuestos.test.mjs
   Prueba el análisis del HTML y la comparación con páginas de ejemplo en memoria, sin necesidad de un build. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { gzipSync } from 'node:zlib';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { importacionesEstaticas, recursosIniciales, medirHtml, comparar } from './presupuestos.mjs';

const gz = (t) => gzipSync(Buffer.from(t), { level: 9 }).length;
const archivos = {
  '/_astro/base.js': 'import{a as b}from"./comun.js";export{b};console.log(b,"x".repeat(200));',
  '/_astro/comun.js': 'export const a=1;import"./hoja.js";',
  '/_astro/hoja.js': 'console.log("hoja");',
  '/_astro/perezoso.js': 'console.log("isla");',
  '/_astro/estilos.css': 'body{margin:0}'.repeat(40),
};
const leer = (ruta) => archivos[ruta] ?? null;
const html = (extra = '') => `<!doctype html><html><head><link rel="stylesheet" href="/_astro/estilos.css"><style>.x{color:red}</style>
<script type="application/ld+json">{"@context":"https://schema.org"}</script></head><body><script>window.a=1</script>
<script type="module" src="/_astro/base.js"></script>${extra}</body></html>`;

test('importacionesEstaticas: sigue import y export…from, ignora import() dinámico', () => {
  assert.deepEqual(importacionesEstaticas('import{a}from"./x.js";import"./y.js";export{b}from"../z.js";'), ['./x.js', './y.js', '../z.js']);
  assert.deepEqual(importacionesEstaticas('const m=()=>import("./perezoso.js");'), []);
  assert.deepEqual(importacionesEstaticas('import a from"/_astro/k.js"'), ['/_astro/k.js']);
});

test('recursosIniciales: sigue la cadena de importaciones y separa el JS en línea del JSON-LD', () => {
  const r = recursosIniciales(html(), leer);
  assert.deepEqual([...r.js.keys()].sort(), ['/_astro/base.js', '/_astro/comun.js', '/_astro/hoja.js']);
  assert.deepEqual([...r.css.keys()], ['/_astro/estilos.css']);
  assert.deepEqual(r.enLinea.js, ['window.a=1']);
  assert.deepEqual(r.enLinea.css, ['.x{color:red}']);
});

test('medirHtml: suma bytes comprimidos de archivos y de lo que va en línea, y avisa de lo que falta', () => {
  const m = medirHtml(html(), leer);
  assert.equal(m.jsGzip, gz(archivos['/_astro/base.js']) + gz(archivos['/_astro/comun.js']) + gz(archivos['/_astro/hoja.js']) + gz('window.a=1'));
  assert.equal(m.cssGzip, gz(archivos['/_astro/estilos.css']) + gz('.x{color:red}'));
  assert.deepEqual(m.faltan, []);
  assert.deepEqual(medirHtml(html('<script type="module" src="/_astro/no-existe.js"></script>'), leer).faltan, ['/_astro/no-existe.js']);
});

test('comparar: pasa dentro del máximo y falla al superarlo en JS, en CSS o con una isla diferida cargada al inicio', () => {
  const medida = medirHtml(html(), leer);
  const p = (extra = {}) => ({ plantillas: [{ id: 'x', carpeta: 'dist', ruta: '/', jsGzipMax: medida.jsGzip, cssGzipMax: medida.cssGzip, ...extra }] });
  const con = (pre, medir = () => medida) => comparar(pre, medir);
  assert.equal(con(p()).fallo, false);
  assert.equal(con(p({ jsGzipMax: medida.jsGzip - 1 })).fallo, true);
  assert.equal(con(p({ cssGzipMax: medida.cssGzip - 1 })).fallo, true);
  assert.equal(con(p({ diferidos: ['hoja.'] })).fallo, true, 'una isla diferida que está entre los iniciales debe fallar');
  assert.equal(con(p({ diferidos: ['perezoso.'] })).fallo, false);
  assert.equal(con(p(), () => ({ error: 'no existe' })).fallo, true);
});

test('el presupuesto del repositorio tiene máximos válidos para cada plantilla', () => {
  const presupuesto = JSON.parse(readFileSync(join(dirname(fileURLToPath(import.meta.url)), 'presupuestos.json'), 'utf8'));
  assert.ok(presupuesto.plantillas.length >= 8);
  const ids = new Set();
  for (const p of presupuesto.plantillas) {
    assert.ok(!ids.has(p.id), `id repetido: ${p.id}`);
    ids.add(p.id);
    assert.ok(['dist', 'dist-fixture'].includes(p.carpeta));
    assert.ok(p.jsGzipMax >= p.medido.jsGzip && p.cssGzipMax >= p.medido.cssGzip, `${p.id}: el máximo está por debajo de lo medido`);
    assert.ok(p.jsGzipMax <= p.medido.jsGzip * 1.05 && p.cssGzipMax <= p.medido.cssGzip * 1.05, `${p.id}: el margen supera el 5%`);
  }
});
