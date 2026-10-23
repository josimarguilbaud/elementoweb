/* El H1 de cada página es su título, nunca la descripción de una foto: node --test scripts/h1.test.mjs
   Pasó en dos guías (commit da04313): el alt de la portada quedó como H1 en producción. Se revisa el HTML construido,
   así cubre todas las páginas sin importar de dónde salga el H1. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join, relative } from 'node:path';
import { parse } from 'node-html-parser';
import { guardaDist } from './lib/dist-guard.mjs';

const { conDist } = guardaDist();
const PRIVADAS = /^(demo|propuestas|presentaciones|hackathon|qa-fixture)\//;
const paginas = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? paginas(p) : n === 'index.html' ? [p] : []; });
const limpio = (t) => t.replace(/\s+/g, ' ').trim();
/* Las fotos cambian y su alt viejo ya no está en la página: se reconoce también por cómo se describe una imagen. */
const DESCRIBE_FOTO = /render 3D|sobre fondo|en cromo|fotograf[ií]a de|, en una gu[ií]a de|chocan las manos|ante una laptop/i;

test('ningún H1 es el texto alternativo de una imagen de su página', conDist, () => {
  const malas = [];
  for (const f of paginas('dist')) {
    const ruta = relative('dist', f).split('\\').join('/');
    if (PRIVADAS.test(ruta)) continue;
    const doc = parse(readFileSync(f, 'utf8'));
    const h1 = doc.querySelector('h1');
    if (!h1) continue;
    const titulo = limpio(h1.text);
    const alts = new Set(doc.querySelectorAll('img[alt]').map((i) => limpio(i.getAttribute('alt'))).filter(Boolean));
    if (alts.has(titulo) || DESCRIBE_FOTO.test(titulo)) malas.push(`/${ruta.replace(/index\.html$/, '')}: «${titulo.slice(0, 60)}…»`);
  }
  assert.deepEqual(malas, []);
});
