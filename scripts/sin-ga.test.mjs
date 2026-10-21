/* Las pruebas con navegador no le mandan hits a Google Analytics (D54): node --test scripts/sin-ga.test.mjs */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, readdirSync } from 'node:fs';
import { GA } from './lib/sin-ga.mjs';

// protects=que los numeradores de la regla de D54 no crezcan con cada verify; fails_when=un script de QA abre el sitio sin el bloqueo o la expresión deja pasar un dominio; no_claim=hits de otras herramientas
test('la expresión bloquea los tres dominios de Google Analytics y nada más', () => {
  for (const u of ['https://www.googletagmanager.com/gtag/js?id=G-X', 'https://region1.google-analytics.com/g/collect?v=2', 'https://analytics.google.com/g/collect']) assert.match(u, GA, u);
  for (const u of ['https://elementoweb.com/', 'http://127.0.0.1:4610/', 'https://fonts.googleapis.com/css', 'https://www.google.com/maps']) assert.doesNotMatch(u, GA, u);
});

test('todo script de QA que abre páginas del sitio crea sus contextos con contextoSinGa', () => {
  const qa = readdirSync('scripts').filter((f) => /^qa-.*\.mjs$/.test(f));
  assert.ok(qa.length >= 5, `scripts de QA: ${qa.join(', ')}`);
  for (const f of qa) {
    const js = readFileSync(`scripts/${f}`, 'utf8');
    if (!/newContext|newPage/.test(js)) continue;
    assert.match(js, /from '\.\/lib\/sin-ga\.mjs'/, `${f} no importa el bloqueo de GA`);
    assert.doesNotMatch(js, /\.newContext\(/, `${f} crea un contexto sin bloquear GA (usa contextoSinGa)`);
  }
});
