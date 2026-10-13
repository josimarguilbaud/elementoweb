// Pruebas de navegador del formulario por servicio (D22, D27, D30, D31, D38). Sirve dist-fixture/ (npm run build:fixtures),
// simula el webhook de n8n con `route` y simula `gtag` para leer los eventos. Cubre los estados de D22: inactivo,
// inválido, enviando, éxito, fallo de red o de n8n, trampa y cambio de servicio; el reintento con el mismo `intento`;
// el éxito solo con {"ok": true}; sin JavaScript; teclado; móvil; y axe (WCAG 2.x AA).
//   node scripts/qa-form.mjs
import { chromium } from 'playwright-core';
import { readFileSync, existsSync } from 'node:fs';
import { createRequire } from 'node:module';
import { rutaChrome } from './chrome.mjs';
import { servir } from './servidor-estatico.mjs';

if (!existsSync('dist-fixture/qa-fixture/formulario/index.html')) { console.error('Falta dist-fixture/: corre npm run build:fixtures'); process.exit(1); }
const chrome = rutaChrome();
if (!chrome) { console.error('No se encontró Chrome (define CHROMIUM_PATH).'); process.exit(1); }
const axeSrc = readFileSync(createRequire(import.meta.url).resolve('axe-core/axe.min.js'), 'utf8');
const ENDPOINT = 'https://n8n.aiwebstudio.co/webhook/elementoweb-contacto';

const srv = await servir('dist-fixture');
const nav = await chromium.launch({ executablePath: chrome });
let fallos = 0, pruebas = 0;
const ok = (nombre, cond, detalle = '') => { pruebas++; if (cond) console.log(`  ✓ ${nombre}`); else { fallos++; console.log(`  ✗ ${nombre}${detalle ? ` → ${detalle}` : ''}`); } };

/** Contexto con gtag simulado y el webhook simulado. `respuesta` decide qué contesta n8n a cada POST. */
async function abrir({ ancho = 1280, alto = 900, js = true, respuesta = () => ({ status: 200, body: { ok: true } }) } = {}) {
  const ctx = await nav.newContext({ viewport: { width: ancho, height: alto }, javaScriptEnabled: js });
  const peticiones = [];
  // Base.astro define gtag() y empuja a dataLayer aunque gtag.js no cargue; los eventos se leen de ahí (cadena real).
  await ctx.route(ENDPOINT, async (route) => {
    const req = route.request();
    const cors = { 'access-control-allow-origin': '*', 'access-control-allow-headers': 'content-type', 'access-control-allow-methods': 'POST, OPTIONS' };
    if (req.method() === 'OPTIONS') return route.fulfill({ status: 204, headers: cors });
    peticiones.push(JSON.parse(req.postData() || '{}'));
    const r = await respuesta(peticiones.length, route);
    if (r === 'abortar') return route.abort('failed');
    await new Promise((x) => setTimeout(x, r.demora ?? 0));
    return route.fulfill({ status: r.status, headers: { ...cors, 'content-type': 'application/json' }, body: JSON.stringify(r.body ?? {}) });
  });
  const p = await ctx.newPage();
  const eventos = () => p.evaluate(() => (window.dataLayer || []).filter((a) => a[0] === 'event').map((a) => ({ n: a[1], ...(a[2] || {}) })));
  return { ctx, p, peticiones, eventos };
}
const listo = async (p) => { await p.waitForSelector('form[data-ew-listo]', { timeout: 8000 }); };
const rellenar = async (p, { nombre = 'Ana Pérez', telefono = '6123-4567' } = {}) => { await p.fill('#ew-f-nombre', nombre); await p.fill('#ew-f-telefono', telefono); };

try {
  console.log('Sin JavaScript');
  {
    const { ctx, p } = await abrir({ js: false });
    await p.goto(`${srv.url}/qa-fixture/formulario/`);
    ok('se ve el WhatsApp y el correo', await p.isVisible('.ew-form__nojs a[href*="wa.me"]') && await p.isVisible('.ew-form__nojs a[href^="mailto:"]'));
    ok('el formulario no se muestra (no podría enviarse)', !(await p.isVisible('[data-ew="form"]')));
    await ctx.close();
  }

  console.log('Estado inicial con servicio preseleccionado (ecommerce)');
  {
    const { ctx, p } = await abrir();
    await p.goto(`${srv.url}/qa-fixture/formulario/`);
    await listo(p);
    ok('muestra «Servicio: Tienda online · cambiar»', (await p.textContent('[data-ew="actual"]')).replace(/\s+/g, ' ').trim() === 'Servicio: Tienda online · cambiar');
    ok('las 14 fichas están ocultas hasta pulsar «cambiar»', !(await p.isVisible('[data-ew="fichas"]')) && (await p.locator('input[name="servicio_clave"]').count()) === 14);
    ok('solo se habilitan las 4 preguntas de la tienda', (await p.locator('fieldset[data-servicio="ecommerce"] select:enabled').count()) === 4 && (await p.locator('fieldset[data-servicio]:not([disabled])').count()) === 1);
    ok('el botón y el título son los del servicio', (await p.textContent('[data-ew="enviar"]')) === 'Pedir cotización de mi tienda' && (await p.textContent('[data-ew="titulo"]')) === 'Cotizar mi tienda online');
    ok('el presupuesto se muestra', await p.isVisible('[data-ew="presupuesto"]'));

    console.log('Cambio de servicio');
    await p.click('[data-ew="cambiar"]');
    ok('«cambiar» abre las fichas y marca aria-expanded', await p.isVisible('[data-ew="fichas"]') && (await p.getAttribute('[data-ew="cambiar"]', 'aria-expanded')) === 'true');
    await p.selectOption('fieldset[data-servicio="ecommerce"] select[name="detalle_productos"]', 'Más de 100');
    await p.check('input[name="servicio_clave"][value="seo"]');
    ok('al elegir SEO cambian las preguntas (3), el botón y el título', (await p.locator('fieldset[data-servicio="seo"] .ew-in:enabled').count()) === 3 && (await p.textContent('[data-ew="enviar"]')) === 'Pedir cotización de SEO' && (await p.textContent('[data-ew="titulo"]')) === 'Cotizar SEO para mi negocio');
    ok('se avisa que se guardaron las respuestas escritas', (await p.textContent('[data-ew="aviso"]')).includes('Guardamos tus respuestas'));
    await p.check('input[name="servicio_clave"][value="revision"]');
    ok('la revisión no pide presupuesto', !(await p.isVisible('[data-ew="presupuesto"]')) && await p.locator('#ew-f-presupuesto').isDisabled());
    await p.check('input[name="servicio_clave"][value="ecommerce"]');
    ok('al volver, la respuesta escrita se conserva', (await p.inputValue('fieldset[data-servicio="ecommerce"] select[name="detalle_productos"]')) === 'Más de 100');
    await ctx.close();
  }

  console.log('Sin servicio preseleccionado');
  {
    const { ctx, p } = await abrir();
    await p.goto(`${srv.url}/qa-fixture/formulario-libre/`);
    await listo(p);
    ok('las fichas están visibles y «definir» marcado', await p.isVisible('[data-ew="fichas"]') && await p.isChecked('input[name="servicio_clave"][value="definir"]') && !(await p.isVisible('[data-ew="actual"]')));
    await p.focus('input[name="servicio_clave"][value="definir"]');
    await p.keyboard.press('ArrowRight');
    ok('con el teclado, las flechas cambian la ficha y las preguntas', (await p.locator('input[name="servicio_clave"]:checked').getAttribute('value')) !== 'definir' && (await p.locator('fieldset[data-servicio]:not([disabled])').count()) === 1);
    await ctx.close();
  }

  console.log('Validación (estado inválido)');
  {
    const { ctx, p, peticiones, eventos } = await abrir();
    await p.goto(`${srv.url}/qa-fixture/formulario/`);
    await listo(p);
    await p.click('[data-ew="enviar"]');
    ok('muestra el resumen con role="alert" y el foco va al primer campo inválido', (await p.textContent('[data-ew="resumen"]')) === 'Revisa los 2 campos marcados.' && (await p.evaluate(() => document.activeElement?.id)) === 'ew-f-nombre');
    ok('cada campo inválido dice cómo corregirlo y lleva aria-invalid', (await p.getAttribute('#ew-f-nombre', 'aria-invalid')) === 'true' && (await p.textContent('#ew-f-err-telefono')).includes('al menos 8 dígitos'));
    ok('no se hizo ninguna petición', peticiones.length === 0);
    ok('form_error informa los campos sin valores', (await eventos()).some((e) => e.n === 'form_error' && e.fields === 'nombre,telefono' && e.service === 'ecommerce'));
    await rellenar(p);
    await p.fill('#ew-f-email', 'no-es-correo');
    await p.click('[data-ew="enviar"]');
    ok('un correo mal escrito se corrige (es opcional pero no puede ir roto)', (await p.textContent('[data-ew="resumen"]')) === 'Revisa el campo marcado.' && (await p.textContent('#ew-f-err-email')).includes('déjalo vacío'));
    await ctx.close();
  }

  console.log('Envío correcto (estado éxito)');
  {
    const { ctx, p, peticiones, eventos } = await abrir({ respuesta: () => ({ status: 200, body: { ok: true }, demora: 250 }) });
    await p.goto(`${srv.url}/qa-fixture/formulario/`);
    await listo(p);
    await rellenar(p);
    await p.selectOption('fieldset[data-servicio="ecommerce"] select[name="detalle_productos"]', 'Hasta 25');
    await p.click('[data-ew="enviar"]');
    ok('mientras envía, el botón dice «Enviando…» y está desactivado', (await p.textContent('[data-ew="enviar"]')) === 'Enviando…' && await p.locator('[data-ew="enviar"]').isDisabled());
    ok('antes de la respuesta todavía no hay generate_lead', !(await eventos()).some((e) => e.n === 'generate_lead'));
    await p.waitForSelector('[data-ew="exito"]:not([hidden])');
    const body = peticiones[0];
    ok('el payload es v2 con clave, etiqueta de servicio, detalle aplanado e intento', body.payload_version === '2' && body.servicio_clave === 'ecommerce' && body.servicio === 'Tienda online / E-commerce' && body.detalle_productos === 'Hasta 25' && /^[\w-]{8,}$/.test(body.intento));
    ok('conserva nombre, teléfono, origen y honeypot vacío', body.nombre === 'Ana Pérez' && body.telefono === '6123-4567' && /\/qa-fixture\/formulario\/$/.test(body.origen) && body.botcheck === '');
    ok('no manda detalle de otros servicios', !Object.keys(body).some((k) => k.startsWith('detalle_') && k !== 'detalle_productos'));
    ok('el formulario se reemplaza por la confirmación y el foco va a ella', !(await p.isVisible('[data-ew="form"]')) && (await p.evaluate(() => document.activeElement?.getAttribute('data-ew'))) === 'exito');
    ok('la confirmación ofrece WhatsApp como siguiente paso', (await p.getAttribute('[data-ew="exito-wa"]', 'href')).includes('wa.me'));
    const ev = await eventos();
    ok('form_start una sola vez y generate_lead con la clave del servicio y el id del intento', ev.filter((e) => e.n === 'form_start').length === 1 && ev.some((e) => e.n === 'generate_lead' && e.service === 'ecommerce' && e.lead_id === body.intento));
    ok('los eventos no llevan datos personales', !JSON.stringify(ev).includes('Ana') && !JSON.stringify(ev).includes('6123'));
    await ctx.close();
  }

  console.log('Fallos de red o de n8n');
  {
    // 200 sin {"ok": true}: no se cuenta éxito (D30).
    let r = await abrir({ respuesta: () => ({ status: 200, body: { ok: false } }) });
    await r.p.goto(`${srv.url}/qa-fixture/formulario/`); await listo(r.p); await rellenar(r.p);
    await r.p.click('[data-ew="enviar"]'); await r.p.waitForSelector('[data-ew="fallo"]:not([hidden])');
    ok('200 con {"ok": false} es un fallo y no hay generate_lead', !(await r.eventos()).some((e) => e.n === 'generate_lead') && await r.p.isVisible('[data-ew="form"]'));
    ok('el fallo conserva lo escrito y ofrece WhatsApp y correo', (await r.p.inputValue('#ew-f-nombre')) === 'Ana Pérez' && await r.p.isVisible('[data-ew="fallo-wa"]') && (await r.p.textContent('[data-ew="fallo"]')).includes('Tus datos siguen aquí'));
    await r.ctx.close();

    // 422 y reintento con el MISMO intento (D31).
    r = await abrir({ respuesta: (n) => (n === 1 ? { status: 422, body: { ok: false } } : { status: 200, body: { ok: true } }) });
    await r.p.goto(`${srv.url}/qa-fixture/formulario/`); await listo(r.p); await rellenar(r.p);
    await r.p.click('[data-ew="enviar"]'); await r.p.waitForSelector('[data-ew="fallo"]:not([hidden])');
    ok('tras el 422 el botón vuelve a estar activo', await r.p.locator('[data-ew="enviar"]').isEnabled());
    await r.p.click('[data-ew="enviar"]'); await r.p.waitForSelector('[data-ew="exito"]:not([hidden])');
    ok('el reintento usa el mismo id de intento', r.peticiones.length === 2 && r.peticiones[0].intento === r.peticiones[1].intento);
    await r.ctx.close();

    // Caída de red.
    r = await abrir({ respuesta: () => 'abortar' });
    await r.p.goto(`${srv.url}/qa-fixture/formulario/`); await listo(r.p); await rellenar(r.p);
    await r.p.click('[data-ew="enviar"]'); await r.p.waitForSelector('[data-ew="fallo"]:not([hidden])');
    ok('una caída de red muestra el fallo', !(await r.eventos()).some((e) => e.n === 'generate_lead'));
    await r.ctx.close();
  }

  console.log('Doble clic y trampa');
  {
    let r = await abrir({ respuesta: () => ({ status: 200, body: { ok: true }, demora: 500 }) });
    await r.p.goto(`${srv.url}/qa-fixture/formulario/`); await listo(r.p); await rellenar(r.p);
    await r.p.dblclick('[data-ew="enviar"]');
    await r.p.waitForSelector('[data-ew="exito"]:not([hidden])');
    ok('un doble clic envía una sola vez', r.peticiones.length === 1);
    await r.ctx.close();

    r = await abrir();
    await r.p.goto(`${srv.url}/qa-fixture/formulario/`); await listo(r.p); await rellenar(r.p);
    await r.p.evaluate(() => { document.querySelector('[name="botcheck"]').checked = true; });
    await r.p.click('[data-ew="enviar"]');
    await r.p.waitForSelector('[data-ew="exito"]:not([hidden])');
    ok('el campo trampa llena simula el éxito y no envía nada', r.peticiones.length === 0 && !(await r.eventos()).some((e) => e.n === 'generate_lead'));
    await r.ctx.close();
  }

  console.log('Móvil (390x844) y accesibilidad');
  {
    const { ctx, p } = await abrir({ ancho: 390, alto: 844 });
    await p.goto(`${srv.url}/qa-fixture/formulario/`);
    await listo(p);
    await p.click('[data-ew="cambiar"]');
    const m = await p.evaluate(() => ({
      desborde: document.documentElement.scrollWidth - document.documentElement.clientWidth,
      boton: document.querySelector('[data-ew="enviar"]').getBoundingClientRect().height,
      fichas: [...document.querySelectorAll('.ew-chip')].map((c) => Math.round(c.getBoundingClientRect().height)),
      columnas: new Set([...document.querySelectorAll('.ew-chip')].map((c) => Math.round(c.getBoundingClientRect().left))).size,
      campos: [...document.querySelectorAll('#ew-f-nombre,#ew-f-telefono,#ew-f-email')].map((c) => Math.round(c.getBoundingClientRect().height)),
    }));
    ok('sin desborde horizontal a 390 px', m.desborde <= 1, `${m.desborde}px`);
    ok('el botón principal mide 44 px o más', m.boton >= 44, `${m.boton}px`);
    ok('las 14 fichas miden 44 px o más y van en 2 columnas', m.fichas.length === 14 && m.fichas.every((h) => h >= 44) && m.columnas === 2, `${m.fichas.join(',')} / ${m.columnas} columnas`);
    ok('los campos miden 44 px o más', m.campos.every((h) => h >= 44), m.campos.join(','));
    await ctx.close();

    for (const [ancho, alto] of [[390, 844], [1280, 900]]) {
      const a = await abrir({ ancho, alto });
      await a.p.goto(`${srv.url}/qa-fixture/formulario/`); await listo(a.p);
      await a.p.click('[data-ew="enviar"]'); // con errores visibles
      await a.p.evaluate(axeSrc);
      const r = await a.p.evaluate(() => axe.run({ include: [['#formulario']] }, { runOnly: ['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'] }));
      ok(`axe sin violaciones en el formulario a ${ancho} px (con errores visibles)`, r.violations.length === 0, r.violations.map((v) => `${v.id}: ${v.nodes[0]?.target.join(' ')}`).join(' | '));
      await a.ctx.close();
    }
  }
} finally {
  await nav.close();
  await srv.cerrar();
}
console.log(`\nqa-form: ${pruebas} comprobaciones · ${fallos} fallo(s)`);
process.exit(fallos ? 1 : 0);
