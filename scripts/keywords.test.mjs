/* KEYWORDS.md (R35, D12, T8): node --test scripts/keywords.test.mjs
   Lee las tablas del documento y comprueba que cubre las páginas del manifiesto, que ninguna palabra principal se
   repite, que las propuestas de metadatos respetan las medidas y la regla de la pilar, y que el panel GEO es un
   subconjunto exacto de docs/geo-panel-preguntas.md. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const leer = (r) => readFileSync(join(RAIZ, r), 'utf8');
const md = leer('docs/specs/rediseno-elementoweb/KEYWORDS.md');
const manifiesto = JSON.parse(leer('scripts/paginas-comerciales.json'));

/** Normaliza para comparar: sin tildes, minúsculas, solo letras y números. */
const norm = (s) => s.normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[^a-z0-9]+/g, ' ').trim();
const tokens = (s) => norm(s).split(' ').filter(Boolean);

/** Filas de la primera tabla bajo un encabezado `## …`. Las celdas se separan por `|` sin escapar. */
function tabla(encabezado) {
  const ini = md.indexOf(`\n## ${encabezado}`);
  assert.ok(ini >= 0, `falta la sección «${encabezado}»`);
  const resto = md.slice(ini + 1);
  const fin = resto.indexOf('\n## ', 3);
  const bloque = fin >= 0 ? resto.slice(0, fin) : resto;
  return bloque.split('\n').filter((l) => /^\| `/.test(l) || /^\| \d+ \|/.test(l))
    .map((l) => l.replace(/^\|\s*/, '').replace(/\s*\|$/, '').split(/(?<!\\)\s\|\s/).map((c) => c.trim().replace(/\\\|/g, '|')));
}

const sinComillas = (s) => s.replace(/^`|`$/g, '');
const asignacion = tabla('Asignación').map(([ruta, fase, principal, secundarias, reservadas]) => ({
  ruta: sinComillas(ruta), fase, principal, secundarias: secundarias.split(';').map((x) => x.trim()).filter(Boolean), reservadas,
}));
const rutaManifiesto = (p) => (p.slug === '' ? '/' : `/${p.slug}/`);

test('la tabla cubre exactamente las 34 páginas del manifiesto, con su fase', () => {
  const esperadas = new Map(manifiesto.paginas.map((p) => [rutaManifiesto(p), p.fase]));
  assert.equal(esperadas.size, 34);
  assert.deepEqual(asignacion.map((a) => a.ruta).sort(), [...esperadas.keys()].sort());
  for (const a of asignacion) assert.equal(a.fase, esperadas.get(a.ruta), `fase de ${a.ruta}`);
});

test('toda página tiene palabra principal y ninguna se repite', () => {
  const vistas = new Map();
  for (const a of asignacion) {
    assert.ok(a.principal, `${a.ruta} sin palabra principal`);
    const k = norm(a.principal);
    assert.ok(!vistas.has(k), `«${a.principal}» está en ${vistas.get(k)} y en ${a.ruta}`);
    vistas.set(k, a.ruta);
  }
});

test('la principal de una página no aparece como secundaria de otra', () => {
  const dueno = new Map(asignacion.map((a) => [norm(a.principal), a.ruta]));
  for (const a of asignacion) {
    for (const s of a.secundarias) {
      const d = dueno.get(norm(s));
      assert.ok(!d || d === a.ruta, `${a.ruta} usa como secundaria «${s}», principal de ${d}`);
    }
  }
});

const propuestas = tabla('Propuestas de metadatos').map(([ruta, fase, title, description, h1]) => ({ ruta: sinComillas(ruta), fase, title, description, h1 }));

test('las propuestas de metadatos son de páginas del manifiesto, de las fases 2a y 2b', () => {
  assert.ok(propuestas.length >= 7);
  const principal = new Map(asignacion.map((a) => [a.ruta, a]));
  for (const p of propuestas) {
    assert.ok(principal.has(p.ruta), `${p.ruta} no está en la asignación`);
    assert.equal(p.fase, principal.get(p.ruta).fase);
    assert.ok(['2a', '2b'].includes(p.fase), `${p.ruta}: solo se proponen metadatos de 2a y 2b`);
  }
});

test('las propuestas respetan las medidas y contienen la palabra principal', () => {
  const principal = new Map(asignacion.map((a) => [a.ruta, a.principal]));
  for (const p of propuestas) {
    if (p.title !== 'igual') {
      assert.ok(p.title.length <= 60, `${p.ruta}: title de ${p.title.length} caracteres`);
      for (const t of tokens(principal.get(p.ruta))) assert.ok(tokens(p.title).includes(t), `${p.ruta}: el title no contiene «${t}»`);
    }
    if (p.description !== 'igual') assert.ok(p.description.length <= 155, `${p.ruta}: description de ${p.description.length} caracteres`);
    if (p.h1 !== 'igual') for (const t of tokens(principal.get(p.ruta))) assert.ok(tokens(p.h1).includes(t), `${p.ruta}: el H1 no contiene «${t}»`);
  }
});

test('la pilar conserva title, H1 y canonical (D36)', () => {
  const pilar = propuestas.find((p) => p.ruta === '/diseno-web-panama/');
  assert.ok(pilar, 'la pilar debe figurar en las propuestas');
  assert.equal(pilar.title, 'igual');
  assert.equal(pilar.h1, 'igual');
});

test('el panel GEO es un subconjunto exacto de docs/geo-panel-preguntas.md', () => {
  const panel = tabla('Panel GEO de 10 preguntas (D13)');
  assert.equal(panel.length, 10);
  const fuente = new Map([...leer('docs/geo-panel-preguntas.md').matchAll(/^(\d+)\. (.+)$/gm)].map((m) => [m[1], m[2].trim()]));
  assert.equal(fuente.size, 20);
  for (const [n, pregunta, pagina] of panel) {
    assert.equal(pregunta, fuente.get(n), `la pregunta ${n} no coincide con el panel de 20`);
    assert.ok(pagina.startsWith('`/'), `la pregunta ${n} sin página responsable`);
  }
  assert.equal(new Set(panel.map((f) => f[0])).size, 10, 'preguntas repetidas');
});

test('el apéndice trae los metadatos actuales de las 34 páginas', () => {
  const apendice = tabla('Apéndice: metadatos actuales (congelados, D36)');
  assert.equal(apendice.length, 34);
  const snapshot = JSON.parse(leer('audit/seo-snapshot.json'));
  for (const [ruta, title] of apendice) {
    const e = snapshot[sinComillas(ruta)];
    assert.ok(e, `${ruta} falta en el snapshot`);
    assert.ok(title.startsWith(e.title), `${ruta}: el title del apéndice no coincide con el snapshot`);
  }
});
