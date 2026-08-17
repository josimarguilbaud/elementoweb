/**
 * Construye el flujo de n8n "Elemento Web - Leads Formulario Web" y lo sube.
 *
 * El codigo del correo vive en docs/contacto-n8n/armar-correo.js para poder
 * leerlo y versionarlo; este script lo inyecta en el nodo Code y deja el JSON
 * resultante en docs/contacto-n8n/workflow.json antes de mandarlo a n8n.
 *
 *   node scripts/subir-flujo-contacto.mjs            # crea o actualiza y activa
 *   node scripts/subir-flujo-contacto.mjs --dry-run  # solo escribe el JSON
 *
 * El token sale de ~/.ssh/n8n.token, nunca de un argumento ni del historial.
 */
import { readFileSync, writeFileSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const N8N = 'https://n8n.aiwebstudio.co';
const NOMBRE = 'Elemento Web - Leads Formulario Web';

// Credencial SMTP ya existente en n8n. Es la que usan los flujos de Grupo Viesa,
// Remodelaciones JG y TramitaPa, y sus ejecuciones salen en success desde este
// mismo servidor. Se reutiliza a proposito: crear una credencial nueva obligaria
// a meter una clave por la API, y las claves las pone Josimar en la UI.
const CRED_SMTP = { id: 'HrDB86cX9bA613RS', name: 'SMTP TramitaPa' };

// mailweb.site esta verificado en Brevo como dominio de envio de la agencia.
// El From es siempre el mismo buzon; lo que distingue al cliente es el nombre
// visible y el Reply-To. Ver la nota "dominio-de-envios-mailweb-site".
const REMITENTE = 'Sitio web Elemento Web <avisos@mailweb.site>';
const DESTINO = 'josimarguilbaud@gmail.com';

const ORIGENES = [
  'https://elementoweb.com',
  'https://www.elementoweb.com',
];

const jsCode = readFileSync(join(RAIZ, 'docs/contacto-n8n/armar-correo.js'), 'utf8');

// El nodo Webhook responde el preflight OPTIONS con estos origenes. Sin esto el
// navegador ni siquiera llega a mandar el POST: el formulario usa
// Content-Type: application/json, que siempre dispara preflight.
const nodos = [
  {
    parameters: {
      httpMethod: 'POST',
      path: 'elementoweb-contacto',
      responseMode: 'responseNode',
      options: { allowedOrigins: ORIGENES.join(',') },
    },
    id: 'webhook-contacto',
    name: 'Webhook',
    type: 'n8n-nodes-base.webhook',
    typeVersion: 2,
    position: [0, 0],
    webhookId: 'elementoweb-contacto',
  },
  {
    parameters: { jsCode },
    id: 'armar-correo',
    name: 'Armar correo',
    type: 'n8n-nodes-base.code',
    typeVersion: 2,
    position: [220, 0],
  },
  {
    parameters: {
      conditions: {
        options: { caseSensitive: true, version: 2 },
        conditions: [{
          id: 'c1',
          leftValue: '={{ $json.spam || $json.invalido }}',
          rightValue: '',
          operator: { type: 'boolean', operation: 'false', singleValue: true },
        }],
        combinator: 'and',
      },
      options: {},
    },
    id: 'es-lead',
    name: 'Es un lead de verdad',
    type: 'n8n-nodes-base.if',
    typeVersion: 2,
    position: [440, 0],
  },
  {
    parameters: {
      fromEmail: REMITENTE,
      toEmail: DESTINO,
      subject: '={{ $json.asunto }}',
      emailFormat: 'both',
      html: '={{ $json.html }}',
      text: '={{ $json.texto }}',
      options: {
        appendAttribution: false,
        replyTo: '={{ $json.correo_cliente || undefined }}',
      },
    },
    id: 'aviso-lead',
    name: 'Aviso del lead',
    type: 'n8n-nodes-base.emailSend',
    typeVersion: 2,
    position: [660, -100],
    credentials: { smtp: CRED_SMTP },
  },
  {
    parameters: {
      respondWith: 'json',
      responseBody: '{"ok": true}',
      options: {
        responseHeaders: {
          entries: [{
            name: 'Access-Control-Allow-Origin',
            // Devuelve el Origin recibido solo si esta en la lista; si no, el
            // dominio canonico. Nunca '*': con '*' cualquier sitio podria
            // mandar leads falsos desde el navegador de un visitante.
            value: `={{ ${JSON.stringify(ORIGENES)}.includes($('Webhook').first().json.headers.origin) ? $('Webhook').first().json.headers.origin : '${ORIGENES[0]}' }}`,
          }],
        },
      },
    },
    id: 'responder-ok',
    name: 'Responder OK',
    type: 'n8n-nodes-base.respondToWebhook',
    typeVersion: 1,
    position: [880, 0],
  },
];

// El spam y los invalidos caen por la rama falsa del IF: igual se responde ok
// para no darle pistas al bot, pero no se manda correo.
const connections = {
  Webhook: { main: [[{ node: 'Armar correo', type: 'main', index: 0 }]] },
  'Armar correo': { main: [[{ node: 'Es un lead de verdad', type: 'main', index: 0 }]] },
  'Es un lead de verdad': {
    main: [
      [{ node: 'Aviso del lead', type: 'main', index: 0 }],
      [{ node: 'Responder OK', type: 'main', index: 0 }],
    ],
  },
  'Aviso del lead': { main: [[{ node: 'Responder OK', type: 'main', index: 0 }]] },
};

const flujo = { name: NOMBRE, nodes: nodos, connections, settings: { executionOrder: 'v1' } };

writeFileSync(join(RAIZ, 'docs/contacto-n8n/workflow.json'), JSON.stringify(flujo, null, 2) + '\n');
console.log('workflow.json escrito');

if (process.argv.includes('--dry-run')) process.exit(0);

const token = readFileSync(join(homedir(), '.ssh/n8n.token'), 'utf8').trim();
const cab = { 'X-N8N-API-KEY': token, 'Content-Type': 'application/json' };

const listado = await fetch(`${N8N}/api/v1/workflows?limit=250`, { headers: cab }).then((r) => r.json());
const existente = (listado.data || []).find((w) => w.name === NOMBRE);

let id;
if (existente) {
  id = existente.id;
  const r = await fetch(`${N8N}/api/v1/workflows/${id}`, { method: 'PUT', headers: cab, body: JSON.stringify(flujo) });
  console.log(`actualizado ${id}: HTTP ${r.status}`);
  if (!r.ok) { console.error(await r.text()); process.exit(1); }
} else {
  const r = await fetch(`${N8N}/api/v1/workflows`, { method: 'POST', headers: cab, body: JSON.stringify(flujo) });
  const cuerpo = await r.json();
  if (!r.ok) { console.error('error al crear:', JSON.stringify(cuerpo)); process.exit(1); }
  id = cuerpo.id;
  console.log(`creado ${id}`);
}

const act = await fetch(`${N8N}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: cab });
console.log(`activar: HTTP ${act.status}`);
if (!act.ok) console.error(await act.text());
console.log(`webhook: ${N8N}/webhook/elementoweb-contacto`);
