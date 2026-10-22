// Demos de prospectos: fuera de git, servidas desde un volumen (D10 del
// prospector). Estas pruebas fijan lo que el script exige antes de subir una
// demo y lo que nginx tiene que hacer con ella.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { mkdtempSync, writeFileSync, mkdirSync, readFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { auditarCarpeta, validarSlug, FRANJA } from './demo-prospecto.mjs';

const HTML_OK = `<!doctype html><html><head>
<meta name="robots" content="noindex, nofollow"><title>Clínica Sol</title></head>
<body><div class="franja">${FRANJA} No es el sitio oficial de Clínica Sol.</div>
<img src="img/hero.webp" alt=""><a href="https://wa.me/50761903007">WhatsApp</a></body></html>`;

function carpeta(archivos) {
  const dir = mkdtempSync(join(tmpdir(), 'demo-'));
  for (const [ruta, contenido] of Object.entries(archivos)) {
    const p = join(dir, ruta);
    mkdirSync(join(p, '..'), { recursive: true });
    writeFileSync(p, contenido);
  }
  return dir;
}

test('el slug no deja adivinar el negocio ni escapar de la carpeta', () => {
  assert.equal(validarSlug('clinicas-a1b2c3'), true);
  for (const malo of ['clinica-sol', '../etc', 'Clinicas-A1B2C3', 'a-1', 'clinicas-a1b2c3/../x', '']) {
    assert.equal(validarSlug(malo), false, malo);
  }
});

test('una demo completa pasa la auditoría', () => {
  assert.deepEqual(auditarCarpeta(carpeta({ 'index.html': HTML_OK, 'img/hero.webp': 'x' })), []);
});

test('sin noindex no se sube', () => {
  const html = HTML_OK.replace('<meta name="robots" content="noindex, nofollow">', '');
  assert.match(auditarCarpeta(carpeta({ 'index.html': html })).join(' '), /noindex/);
});

test('sin la franja de concepto no se sube', () => {
  const html = HTML_OK.replace(FRANJA, '');
  assert.match(auditarCarpeta(carpeta({ 'index.html': html })).join(' '), /franja/i);
});

test('una imagen enlazada a un CDN ajeno no se sube', () => {
  const html = HTML_OK.replace('img/hero.webp', 'https://images.unsplash.com/photo-1');
  assert.match(auditarCarpeta(carpeta({ 'index.html': html })).join(' '), /hotlink|ajen/i);
});

test('un teléfono o WhatsApp que no es el de Elemento Web no se sube', () => {
  for (const malo of ['tel:+5076000-0000', 'https://wa.me/50762223333']) {
    const html = HTML_OK.replace('https://wa.me/50761903007', malo);
    assert.match(auditarCarpeta(carpeta({ 'index.html': html })).join(' '), /teléfono|WhatsApp/i, malo);
  }
});

test('una carpeta sin index.html no se sube', () => {
  assert.match(auditarCarpeta(carpeta({ 'otra.html': HTML_OK })).join(' '), /index\.html/);
});

test('nginx sirve /demo/p/ desde el volumen, sin indexar y antes que la regla general de /demo/', () => {
  const conf = readFileSync(new URL('../nginx.conf', import.meta.url), 'utf8');
  const bloque = conf.match(/location \^~ \/demo\/p\/ \{[\s\S]*?\n {4}\}/)?.[0];
  assert.ok(bloque, 'falta el bloque location ^~ /demo/p/');
  assert.match(bloque, /alias \/srv\/demos-prospectos\/;/);
  assert.match(bloque, /X-Robots-Tag "noindex, nofollow"/);
  assert.match(bloque, /autoindex off;/);
  // ^~ gana a las regex: sin él, /demo/p/x caería en la regla general y se
  // buscaría dentro de la imagen, donde no está.
  assert.ok(conf.indexOf('location ^~ /demo/p/') < conf.indexOf('location ~ ^/(demo|'), 'el bloque debe ir antes de la regex');
});
