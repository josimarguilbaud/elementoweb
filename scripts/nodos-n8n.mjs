/* Carga y ejecuta los nodos Code del flujo de contacto de n8n (D30 a D34, D38).
   Los archivos docs/contacto-n8n/*.js son JavaScript puro, tal como n8n los ejecuta (usan $input, $ y
   $getWorkflowStaticData y terminan con `return`). Este módulo:
     - inyecta la lista blanca del formulario (src/data/formulario.json) donde el nodo dice __FORMULARIO__,
       para que n8n, ServiceForm y el build compartan un solo esquema;
     - ejecuta un nodo con entradas simuladas, para probarlo con node:test sin n8n.
   Lo usan scripts/subir-flujo-contacto.mjs y scripts/n8n.test.mjs. */
import { readFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');

/** Versión mínima del esquema que necesita el servidor: etiqueta por clave y por campo, y los límites. */
export function esquemaParaN8n(formulario = JSON.parse(readFileSync(join(RAIZ, 'src/data/formulario.json'), 'utf8'))) {
  const claves = {};
  for (const s of formulario.servicios) {
    claves[s.clave] = { servicio: s.servicio, etiqueta: s.etiqueta, campos: Object.fromEntries(s.campos.map((c) => [c.clave, { etiqueta: c.etiqueta, tipo: c.tipo }])) };
  }
  return { limites: formulario.limites, claves };
}

/** Texto del nodo listo para pegar en n8n (con el esquema inyectado). */
export function leerNodo(nombre, esquema = esquemaParaN8n()) {
  const f = join(RAIZ, 'docs/contacto-n8n', nombre);
  const txt = readFileSync(f, 'utf8');
  if (!txt.includes('__FORMULARIO__') && nombre === 'armar-correo.js') throw new Error('armar-correo.js perdió el marcador __FORMULARIO__');
  return txt.replaceAll('__FORMULARIO__', JSON.stringify(esquema));
}

/** Ejecuta un nodo Code como lo haría n8n.
 *  entrada: json del primer ítem de entrada; webhook: json del nodo Webhook; estatico: objeto persistente entre ejecuciones. */
export function ejecutarNodo(codigo, { entrada = {}, webhook = entrada, estatico = {}, nodos = {} } = {}) {
  const $input = { first: () => ({ json: entrada }) };
  const $ = (nodo) => {
    const salida = nodo === 'Webhook' ? webhook : nodos[nodo];
    if (salida === undefined) throw new Error(`nodo desconocido en la prueba: ${nodo}`);
    return { first: () => ({ json: salida }) };
  };
  const $getWorkflowStaticData = () => estatico;
  return new Function('$input', '$', '$getWorkflowStaticData', codigo)($input, $, $getWorkflowStaticData);
}
