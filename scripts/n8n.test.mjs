/* Contrato v2 del flujo de contacto de n8n (D30 a D33, D38, D41): node --test scripts/n8n.test.mjs
   Ejecuta los nodos Code reales (docs/contacto-n8n/*.js) con entradas simuladas y revisa el cableado del flujo. */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync, existsSync, rmSync, mkdtempSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { leerNodo, ejecutarNodo, esquemaParaN8n } from './nodos-n8n.mjs';
import { construirFlujo, guardarRespaldo } from './subir-flujo-contacto.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const correo = leerNodo('armar-correo.js');
const crm = leerNodo('armar-lead-crm.js');
const formulario = JSON.parse(readFileSync(join(RAIZ, 'src/data/formulario.json'), 'utf8'));

// Cuerpo tal como lo manda hoy ContactForm.astro (v1).
const v1 = (extra = {}) => ({
  nombre: 'Ana Pérez', empresa: 'Café Sol', email: 'ana@cafesol.com', telefono: '6123-4567', servicio: 'Landing page',
  presupuesto: '$2,000 - $5,000', web: '', inicio: '', modalidad: 'proyecto', mensaje: 'Quiero una landing.',
  botcheck: '', intento: 'abc12345-uuid-v1', origen: 'https://elementoweb.com/servicios/landing-pages-alta-conversion-panama/', fecha: '2026-10-13T10:00:00Z', ...extra,
});
const correr = (cuerpo, estatico = {}) => ejecutarNodo(correo, { entrada: { body: cuerpo }, estatico })[0].json;

test('el nodo trae el esquema inyectado y no queda ningún marcador sin reemplazar', () => {
  assert.doesNotMatch(correo, /__FORMULARIO__/);
  const e = esquemaParaN8n();
  assert.deepEqual(Object.keys(e.claves).sort(), formulario.servicios.map((s) => s.clave).sort());
  assert.equal(e.limites.respuesta, 300);
});

test('v1 (el payload de hoy): un lead válido produce correo, lead limpio y ninguna bandera', () => {
  const r = correr(v1());
  assert.deepEqual([r.invalido, r.spam, r.duplicado], [false, false, false]);
  assert.equal(r.correo_cliente, 'ana@cafesol.com');
  assert.match(r.asunto, /Nuevo lead web - Ana Pérez \(Café Sol\)/);
  assert.equal(r.lead.servicio_clave, 'landing'); // v1 sin clave: se resuelve por la etiqueta
  assert.equal(r.lead.payload_version, '1');
  assert.equal(r.lead.telefono_normalizado, '50761234567');
  assert.equal(r.lead.origen, 'https://elementoweb.com/servicios/landing-pages-alta-conversion-panama/');
});

test('regresión v1: el CRM recibe los mismos campos de siempre', () => {
  const lead = correr(v1()).lead;
  const c = ejecutarNodo(crm, { entrada: { lead } })[0].json;
  assert.deepEqual(
    { f: c.formulario, n: c.nombre, e: c.email, t: c.telefono, m: c.mensaje, emp: c.empresa, s: c.servicio, p: c.presupuesto, o: c.origen },
    { f: 'Cotización web', n: 'Ana Pérez', e: 'ana@cafesol.com', t: '6123-4567', m: 'Quiero una landing.', emp: 'Café Sol', s: 'Landing page', p: '$2,000 - $5,000', o: '/servicios/landing-pages-alta-conversion-panama/' },
  );
});

test('D30: un lead con solo nombre y teléfono es válido, no manda replyTo y el correo no lo exige', () => {
  const r = correr(v1({ email: '' }));
  assert.equal(r.invalido, false);
  assert.equal(r.correo_cliente, '');
  assert.match(r.html, /Sin correo: responder por WhatsApp/);
  assert.doesNotMatch(r.html, /mailto:/);
  assert.match(r.texto, /\(sin correo: responder por WhatsApp\)/);
  const c = ejecutarNodo(crm, { entrada: { lead: r.lead } })[0].json;
  assert.ok(!('email' in c), 'sin correo no se manda la clave email al CRM');
});

test('D30: un correo mal escrito en el campo opcional no cuesta el lead', () => {
  const r = correr(v1({ email: 'ana@@cafesol' }));
  assert.equal(r.invalido, false);
  assert.equal(r.correo_cliente, '');
});

test('D30: sin nombre, sin teléfono o con teléfono corto el lead es inválido (422), nunca éxito', () => {
  for (const mal of [{ nombre: '' }, { telefono: '' }, { telefono: '123-45' }, { nombre: '   ' }]) {
    const r = correr(v1(mal));
    assert.equal(r.invalido, true, JSON.stringify(mal));
    assert.equal(r.html, undefined);
  }
});

test('el honeypot lleno responde sin efecto (spam) y no genera correo ni lead', () => {
  const r = correr(v1({ botcheck: 'on' }));
  assert.equal(r.spam, true);
  assert.equal(r.lead, undefined);
});

test('D33: un cuerpo de más de 8 KB se rechaza antes de procesar nada', () => {
  assert.equal(correr(v1({ mensaje: 'x'.repeat(9000) })).invalido, true);
});

test('D33: los campos se recortan a su tope y un objeto nunca se vuelve «[object Object]»', () => {
  const r = correr(v1({ nombre: 'N'.repeat(300), empresa: { a: 1 }, mensaje: 'm'.repeat(2500).slice(0, 2500) }));
  assert.equal(r.lead.nombre.length, 200);
  assert.equal(r.lead.empresa, '');
  assert.ok(r.lead.mensaje.length <= 2000);
  assert.doesNotMatch(r.html + r.texto, /\[object Object\]/);
});

test('D33: el origen solo se acepta si es una ruta del sitio o una URL de elementoweb.com (nada de javascript:)', () => {
  assert.equal(correr(v1({ origen: 'javascript:alert(1)' })).lead.origen, '');
  assert.equal(correr(v1({ origen: 'https://evil.com/elementoweb.com' })).lead.origen, '');
  assert.equal(correr(v1({ origen: '//evil.com/x' })).lead.origen, '');
  assert.equal(correr(v1({ origen: '/contacto/', intento: 'otro-intento-1' })).lead.origen, '/contacto/');
  assert.equal(correr(v1({ origen: 'https://www.elementoweb.com/', intento: 'otro-intento-2' })).lead.origen, 'https://www.elementoweb.com/');
  assert.doesNotMatch(correr(v1({ origen: 'javascript:alert(1)', intento: 'otro-intento-3' })).html, /javascript:/);
});

test('D33: el teléfono de 8 dígitos lleva el prefijo 507 y uno internacional se respeta', () => {
  assert.equal(correr(v1({ telefono: '6123 4567', intento: 'tel-intento-01' })).lead.telefono_normalizado, '50761234567');
  assert.equal(correr(v1({ telefono: '+1 (305) 555-0100', intento: 'tel-intento-02' })).lead.telefono_normalizado, '13055550100');
});

test('v2: la clave y el detalle respetan la lista blanca, se recortan a 300 y se aplanan para el CRM', () => {
  const cuerpo = v1({ payload_version: '2', servicio: 'Tienda online / E-commerce', servicio_clave: 'ecommerce', intento: 'v2-intento-01',
    detalle_productos: 'Hasta 25', detalle_pagos: 'Y'.repeat(400), detalle_desconocido: 'no debe pasar', detalle_envios: '' });
  const r = correr(cuerpo);
  assert.equal(r.lead.servicio_clave, 'ecommerce');
  assert.equal(r.lead.payload_version, '2');
  assert.deepEqual(Object.keys(r.lead.detalle).sort(), ['pagos', 'productos']);
  assert.equal(r.lead.detalle.pagos.length, 300);
  assert.match(r.html, /¿Cuántos productos venderás\?/);
  const c = ejecutarNodo(crm, { entrada: { lead: r.lead } })[0].json;
  assert.equal(c.detalle_productos, 'Hasta 25');
  assert.equal(c.detalle_pagos.length, 300);
  assert.equal(c.servicio_clave, 'ecommerce');
  assert.equal(c.payload_version, '2');
  assert.equal(c.intento, 'v2-intento-01');
  assert.ok(!('detalle_desconocido' in c));
});

test('una clave de servicio desconocida cae en «definir»', () => {
  assert.equal(correr(v1({ servicio: 'Algo raro', servicio_clave: 'hackeado', intento: 'clave-intento-1' })).lead.servicio_clave, 'definir');
});

test('las 14 claves del esquema se aceptan en v2', () => {
  let n = 0;
  for (const s of formulario.servicios) {
    const r = correr(v1({ payload_version: '2', servicio: s.servicio, servicio_clave: s.clave, intento: `clave-${s.clave}-0001` }));
    assert.equal(r.lead.servicio_clave, s.clave);
    n++;
  }
  assert.equal(n, 14);
});

test('D32: un <script> en un campo sale escapado en el correo', () => {
  const r = correr(v1({ payload_version: '2', servicio_clave: 'landing', servicio: 'Landing page', intento: 'xss-intento-001', detalle_objetivo: '<script>alert(1)</script>', mensaje: '<img src=x onerror=alert(1)>' }));
  assert.doesNotMatch(r.html, /<script>alert/);
  assert.doesNotMatch(r.html, /<img src=x/);
  assert.match(r.html, /&lt;script&gt;/);
});

test('un salto de línea en el nombre no inyecta cabeceras en el asunto', () => {
  const r = correr(v1({ nombre: 'Ana\r\nBcc: spam@x.com', intento: 'crlf-intento-01' }));
  assert.doesNotMatch(r.asunto, /[\r\n]/);
});

test('D31: el mismo intento dos veces no duplica, y un lead inválido no consume el intento', () => {
  const sd = {};
  assert.equal(correr(v1({ nombre: '' }), sd).invalido, true);
  assert.equal(correr(v1(), sd).duplicado, false, 'tras un inválido, el mismo intento aún vale');
  assert.equal(correr(v1(), sd).duplicado, true, 'la segunda vez es un duplicado');
  assert.equal(correr(v1({ intento: 'otro-intento-xyz' }), sd).duplicado, false);
});

test('D31: un intento mal formado no se usa para deduplicar', () => {
  const sd = {};
  assert.equal(correr(v1({ intento: 'x' }), sd).duplicado, false);
  assert.equal(correr(v1({ intento: 'x' }), sd).duplicado, false);
});

test('D31: los intentos de más de 24 horas se olvidan y la memoria nunca pasa de 500', () => {
  const sd = { vistos: { viejo01234: Date.now() - 25 * 3600 * 1000 } };
  correr(v1(), sd);
  assert.ok(!('viejo01234' in sd.vistos));
  const lleno = { vistos: Object.fromEntries(Array.from({ length: 500 }, (_, i) => [`id-numero-${i}`, Date.now() - i])) };
  correr(v1({ intento: 'nuevo-intento-1' }), lleno);
  assert.ok(Object.keys(lleno.vistos).length <= 500);
});

test('D33: más de 20 leads válidos en una hora marcan el correo como pico', () => {
  const sd = {};
  let ultimo;
  for (let i = 0; i < 21; i++) ultimo = correr(v1({ intento: `pico-intento-${String(i).padStart(3, '0')}` }), sd);
  assert.equal(ultimo.pico, true);
  assert.match(ultimo.asunto, /^\[PICO\]/);
  assert.equal(correr(v1(), {}).pico, false);
});

// ---- cableado del flujo ----
const flujo = construirFlujo();
const nodo = (n) => flujo.nodes.find((x) => x.name === n);
const destinos = (de, salida = 0) => (flujo.connections[de]?.main[salida] ?? []).map((c) => c.node);

test('el flujo responde 422 a un inválido y nunca «ok: true» en esa rama', () => {
  assert.deepEqual(destinos('Es invalido', 0), ['Responder 422']);
  assert.equal(nodo('Responder 422').parameters.options.responseCode, 422);
  assert.equal(nodo('Responder 422').parameters.responseBody, '{"ok": false}');
  assert.deepEqual(destinos('Es spam o duplicado', 0), ['Responder OK sin efecto']);
  assert.equal(nodo('Responder OK sin efecto').parameters.options.responseCode, 200);
});

test('D31: se responde justo después de validar, antes de Brevo y del CRM, y el nodo de respuesta va arriba', () => {
  const ramas = destinos('Es spam o duplicado', 1);
  assert.deepEqual(ramas, ['Responder OK', 'Enviar por Brevo', 'Armar el lead para el CRM']);
  const y = (n) => nodo(n).position[1];
  assert.ok(y('Responder OK') < y('Enviar por Brevo') && y('Enviar por Brevo') < y('Armar el lead para el CRM'));
  assert.equal(flujo.settings.executionOrder, 'v1');
  assert.deepEqual(destinos('Enviar por Brevo', 0), [], 'nada espera a Brevo para responder');
});

test('D31: Brevo y el CRM ya no se tragan los errores: su salida de error avisa', () => {
  assert.equal(nodo('Enviar por Brevo').onError, 'continueErrorOutput');
  assert.equal(nodo('Guardar en WazaCRM').onError, 'continueErrorOutput');
  assert.deepEqual(destinos('Enviar por Brevo', 1), ['Aviso fallo correo']);
  assert.deepEqual(destinos('Guardar en WazaCRM', 1), ['Aviso fallo CRM']);
  assert.deepEqual(destinos('Aviso fallo correo'), ['Enviar aviso de fallo']);
  assert.deepEqual(destinos('Aviso fallo CRM'), ['Enviar aviso de fallo']);
  assert.notEqual(nodo('Guardar en WazaCRM').onError, 'continueRegularOutput');
  assert.equal(nodo('Enviar aviso de fallo').onError, undefined, 'si el aviso falla, salta el flujo de error');
});

test('el aviso de fallo se arma con los datos del lead y no rompe con un error vacío', () => {
  const lead = { nombre: 'Ana', telefono: '61234567', servicio: 'Landing page', intento: 'abc12345' };
  const armar = (n, error) => ejecutarNodo(nodo(n).parameters.jsCode, { entrada: { error }, nodos: { 'Armar correo': { lead } } })[0].json;
  const crmFalla = armar('Aviso fallo CRM', { message: 'timeout al llamar a WazaCRM' });
  assert.match(crmFalla.asunto, /FALLO en el formulario de elementoweb\.com: la ficha en WazaCRM/);
  assert.match(crmFalla.texto, /Nombre: Ana/);
  assert.match(crmFalla.texto, /WhatsApp: 61234567/);
  assert.match(crmFalla.texto, /Error: timeout al llamar a WazaCRM/);
  const correoFalla = armar('Aviso fallo correo', undefined);
  assert.match(correoFalla.asunto, /el correo de aviso \(Brevo\)/);
  assert.match(correoFalla.texto, /Error: \{\}/);
});

test('replyTo es condicional al correo y los destinos conservan a Josimar y a Nicole', () => {
  const cuerpo = nodo('Enviar por Brevo').parameters.jsonBody;
  assert.match(cuerpo, /replyTo: \$json\.correo_cliente \? \{ email: \$json\.correo_cliente, name: \$json\.nombre \} : undefined/);
  assert.match(cuerpo, /josimarguilbaud@gmail\.com/);
  assert.match(cuerpo, /nicole@evolutionpmc\.com/);
});

test('se conserva lo que ya protegía al flujo: orígenes CORS acotados, errorWorkflow y el webhook', () => {
  assert.equal(nodo('Webhook').parameters.options.allowedOrigins, 'https://elementoweb.com,https://www.elementoweb.com');
  assert.equal(nodo('Webhook').parameters.path, 'elementoweb-contacto');
  assert.equal(flujo.settings.errorWorkflow, 'sanblasErrorAlert01');
  for (const n of ['Responder OK', 'Responder 422', 'Responder OK sin efecto']) {
    const v = nodo(n).parameters.options.responseHeaders.entries[0].value;
    assert.match(v, /includes\(\$\('Webhook'\)/);
    assert.doesNotMatch(v, /'\*'/);
  }
});

test('workflow.json del repo es exactamente lo que genera construirFlujo (la fuente no se desfasa)', () => {
  const guardado = JSON.parse(readFileSync(join(RAIZ, 'docs/contacto-n8n/workflow.json'), 'utf8'));
  assert.deepEqual(guardado, JSON.parse(JSON.stringify(flujo)), 'corre: node scripts/subir-flujo-contacto.mjs --dry-run');
});

test('D41: el respaldo del flujo vivo se escribe con su id y la fecha', () => {
  const f = guardarRespaldo({ id: 'PRUEBA123', name: 'x', nodes: [] }, '2099-01-01');
  try {
    assert.ok(f.endsWith('2099-01-01-PRUEBA123.json') && existsSync(f));
    assert.equal(JSON.parse(readFileSync(f, 'utf8')).id, 'PRUEBA123');
  } finally { rmSync(f, { force: true }); }
});
