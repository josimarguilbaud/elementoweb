/* Pruebas de las mediciones (D6, D40): node --test scripts/medir.test.mjs. Sin red ni Lighthouse: usan informes de ejemplo. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { mediana, formatearLcp, formatearCls, extraerDeLighthouse, extraerDePsi, construirMedicion, fusionar, antiguedad, revisarVencidas, LIMITE_DIAS } from './medir.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const lhr = (lcp, cls = 0.01, score = 0.93) => ({ lighthouseVersion: '12.8.2', categories: { performance: { score } }, audits: { 'largest-contentful-paint': { numericValue: lcp }, 'cumulative-layout-shift': { numericValue: cls } } });

test('mediana: impar, par y lista vacía', () => {
  assert.equal(mediana([3, 1, 2]), 2);
  assert.equal(mediana([1, 2, 3, 10]), 2.5);
  assert.throws(() => mediana([]), /vacía/);
});

test('formato: coma decimal como el resto del sitio', () => {
  assert.equal(formatearLcp(1432), '1,4 s');
  assert.equal(formatearLcp(2550), '2,6 s');
  assert.equal(formatearCls(0.0123), '0,012');
});

test('se extrae LCP, CLS y rendimiento de un informe de Lighthouse y de uno de PageSpeed', () => {
  const a = extraerDeLighthouse(lhr(1800, 0.02, 0.9));
  assert.deepEqual({ l: a.lcpMs, c: a.cls, r: a.rendimiento, v: a.version }, { l: 1800, c: 0.02, r: 90, v: '12.8.2' });
  assert.equal(extraerDePsi({ lighthouseResult: lhr(1500) }).lcpMs, 1500);
  assert.throws(() => extraerDeLighthouse({ audits: {} }), /largest-contentful-paint/);
});

test('la medición lleva la herramienta real, la mediana, la fecha y el método', () => {
  const corridas = [1400, 1900, 1600, 2500, 1700].map((l) => extraerDeLighthouse(lhr(l)));
  const m = construirMedicion({ id: 'corporativo-lcp', url: 'https://elementoweb.com/', metrica: 'lcp', corridas, herramienta: 'Lighthouse', fecha: '2026-10-13', version: '12.8.2' });
  assert.equal(m.valor, '1,7 s');
  assert.equal(m.metrica, 'LCP');
  assert.equal(m.herramienta, 'Lighthouse');
  assert.equal(m.fecha, '2026-10-13');
  assert.match(m.metodo, /150 ms de latencia simulada, mediana de 5 corridas, Lighthouse 12\.8\.2/);
  const psi = construirMedicion({ id: 'x', url: 'https://elementoweb.com/', metrica: 'rendimiento', corridas: [extraerDeLighthouse(lhr(1000, 0, 0.91))], herramienta: 'PageSpeed Insights', fecha: '2026-10-13' });
  assert.equal(psi.valor, '91/100');
  assert.match(psi.metodo, /^móvil, mediana de 1 corrida$/);
});

test('fecha inválida, métrica desconocida y sin corridas fallan con un mensaje claro', () => {
  const base = { id: 'x', url: 'u', metrica: 'lcp', corridas: [extraerDeLighthouse(lhr(1000))], herramienta: 'Lighthouse', fecha: '2026-10-13' };
  assert.throws(() => construirMedicion({ ...base, fecha: '13/10' }), /AAAA-MM-DD/);
  assert.throws(() => construirMedicion({ ...base, metrica: 'ttfb' }), /desconocida/);
  assert.throws(() => construirMedicion({ ...base, corridas: [] }), /sin corridas/);
});

test('fusionar reemplaza por id y conserva las demás', () => {
  const l = [{ id: 'a', v: 1 }, { id: 'b', v: 2 }];
  assert.deepEqual(fusionar(l, { id: 'a', v: 9 }), [{ id: 'a', v: 9 }, { id: 'b', v: 2 }]);
  assert.deepEqual(fusionar(l, { id: 'c', v: 3 }), [...l, { id: 'c', v: 3 }]);
});

test('antigüedad con fecha inyectable: vencida pasados 45 días o con fecha futura', () => {
  const m = (fecha) => ({ id: fecha, url: 'u', fecha });
  const hoy = new Date('2026-10-13T12:00:00Z');
  assert.equal(antiguedad(m('2026-10-03'), hoy), 10);
  assert.equal(LIMITE_DIAS, 45);
  // 29-ago son 45 días (aún vale); 28-ago son 46 (vencida); una fecha futura también se marca.
  const v = revisarVencidas([m('2026-10-03'), m('2026-08-29'), m('2026-08-28'), m('2026-12-01')], hoy);
  assert.deepEqual(v.map((x) => x.id), ['2026-08-28', '2026-12-01']);
  assert.deepEqual(revisarVencidas([m('2026-08-29')], hoy), []);
});

test('el archivo real de mediciones es válido y empieza vacío (nada inventado)', () => {
  const d = JSON.parse(readFileSync(join(RAIZ, 'src/data/mediciones.json'), 'utf8'));
  assert.ok(Array.isArray(d.mediciones));
  for (const m of d.mediciones) {
    for (const k of ['id', 'url', 'metrica', 'valor', 'herramienta', 'fecha', 'metodo']) assert.ok(m[k], `${m.id}: falta ${k}`);
    assert.match(m.fecha, /^\d{4}-\d{2}-\d{2}$/);
  }
});
