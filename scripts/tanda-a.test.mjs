/* Reglas puras de la tanda A de la portada (D50): node --test scripts/tanda-a.test.mjs
   - qué clic envía `cta_click` y con qué servicio (src/lib/clic-cta.ts, lo usa src/scripts/track.ts);
   - qué clave de servicio viaja en `cf:lead` (src/lib/servicio-clave.ts, lo usa ContactForm);
   - cuántos proyectos de clientes muestra la franja de cifras (src/lib/portafolio.ts). */
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { clicCta } from '../src/lib/clic-cta.ts';
import { claveDeServicio } from '../src/lib/servicio-clave.ts';
import { proyectosDeClientes } from '../src/lib/portafolio.ts';

const formulario = JSON.parse(readFileSync('src/data/formulario.json', 'utf8'));

test('un enlace #formulario cuenta como CTA, con el servicio del enlace primero', () => {
  assert.deepEqual(clicCta({ href: '#formulario', pagina: '/servicios/', servicioEnlace: 'pyme', servicioPagina: 'ecommerce' }), { servicio: 'pyme' });
  assert.deepEqual(clicCta({ href: '#formulario', pagina: '/seo/', servicioEnlace: '', servicioPagina: 'seo' }), { servicio: 'seo' });
  assert.deepEqual(clicCta({ href: '#formulario', pagina: '/', servicioEnlace: '', servicioPagina: '' }), { servicio: '' });
});

test('el enlace «Llenar el formulario» de /contacto/ no cuenta como CTA', () => {
  assert.equal(clicCta({ href: '#formulario', pagina: '/contacto/', servicioEnlace: '', servicioPagina: '' }), null);
});

test('un enlace a /contacto/ sigue contando, con la clave de su ?servicio=', () => {
  assert.deepEqual(clicCta({ href: '/contacto/?servicio=landing#formulario', pagina: '/', servicioEnlace: '', servicioPagina: '' }), { servicio: 'landing' });
  assert.deepEqual(clicCta({ href: '/contacto/', pagina: '/', servicioEnlace: 'definir', servicioPagina: '' }), { servicio: 'definir' });
});

test('otros enlaces no son CTA', () => {
  for (const href of ['#mapa-web', '/diseno-web-panama/', 'https://wa.me/50760000000', '#formulario-otro']) {
    assert.equal(clicCta({ href, pagina: '/', servicioEnlace: '', servicioPagina: '' }), null, href);
  }
});

test('cf:lead lleva la clave del servicio, no la etiqueta', () => {
  assert.equal(claveDeServicio('Diseño web / Sitio corporativo', formulario.servicios), 'pyme');
  assert.equal(claveDeServicio('Tienda online / E-commerce', formulario.servicios), 'ecommerce');
  assert.equal(claveDeServicio('', formulario.servicios), 'definir');
  assert.equal(claveDeServicio('Algo que no existe', formulario.servicios), 'definir');
});

test('la franja cuenta solo proyectos de clientes, no productos propios', () => {
  const portfolio = [{ t: 'A' }, { t: 'B', propio: true }, { t: 'C', propio: false }];
  assert.deepEqual(proyectosDeClientes(portfolio).map((p) => p.t), ['A', 'C']);
});
