/**
 * Construye el flujo de n8n "Elemento Web - Leads Formulario Web" y lo sube.
 *
 * El codigo de los nodos vive en docs/contacto-n8n/*.js para poder leerlo y
 * versionarlo; este script lo inyecta en los nodos Code (con el esquema de
 * src/data/formulario.json donde dice __FORMULARIO__) y deja el JSON resultante
 * en docs/contacto-n8n/workflow.json antes de mandarlo a n8n.
 *
 *   node scripts/subir-flujo-contacto.mjs            # exporta el flujo vivo a respaldo/, crea o actualiza y activa
 *   node scripts/subir-flujo-contacto.mjs --dry-run  # solo escribe workflow.json: no toca n8n
 *
 * Contrato v2 (D30 a D33, D41 de docs/specs/rediseno-elementoweb/DECISIONES.md):
 *  - responde 200 YA, justo despues de validar, antes del correo y del CRM;
 *  - un lead invalido responde 422 {"ok": false}; el spam y los duplicados responden 200 sin efecto;
 *  - Brevo y el CRM ya no se tragan los errores: su salida de error manda un aviso por correo, y si el
 *    aviso falla tambien, salta el flujo de error (errorWorkflow);
 *  - antes de cada subida se exporta el flujo vivo a docs/contacto-n8n/respaldo/ y se imprime su id y
 *    version, para copiarlos al mensaje del commit. Revertir = `git revert` del commit y volver a correr
 *    este script (workflow.json es la fuente).
 *
 * El token sale de ~/.ssh/n8n.token, nunca de un argumento ni del historial.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { leerNodo } from './nodos-n8n.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const N8N = 'https://n8n.aiwebstudio.co';
export const NOMBRE = 'Elemento Web - Leads Formulario Web';

// Se envia por la API HTTP de Brevo, no por SMTP. Dos razones: Hetzner bloquea
// los puertos SMTP de salida (25/465/587), que fue lo que dejo muerto el
// formulario la primera vez; y la credencial SMTP que hay en n8n se llama
// "SMTP TramitaPa" y es de otro cliente. Este flujo no comparte nada con
// TramitaPa: solo el buzon remitente de la agencia, que es el diseno acordado.
//
// La credencial ya existe en n8n y apunta a este mismo buzon, asi que no hay
// que meter ninguna clave por API. Es la que uso el flujo de Grupo Viesa.
const CRED_BREVO = { id: 'cf1FZJ8CcLA90GVs', name: 'Brevo API (avisos@mailweb.site)' };

// mailweb.site esta verificado en Brevo como dominio de envio de la agencia.
// El From es siempre el mismo buzon; lo que distingue al cliente es el nombre
// visible y el Reply-To. Ver la nota "dominio-de-envios-mailweb-site".
const REMITENTE = { name: 'Sitio web Elemento Web', email: 'avisos@mailweb.site' };
// Desde el 22-sep-2026 el lead tambien le llega a Nicole (evolutionpmc), que
// atiende parte de las consultas comerciales del sitio.
const DESTINOS = ['josimarguilbaud@gmail.com', 'nicole@evolutionpmc.com'];

const ORIGENES = [
  'https://elementoweb.com',
  'https://www.elementoweb.com',
];

// El lead tambien entra al CRM de WazaCRM. Hasta el 16-sep-2026 esta llamada la
// hacia el navegador, con el secreto escrito en src/lib/site.ts y por tanto en
// el HTML publico. Ahora sale de aqui: el clientId va en una cabecera normal
// (es publico) y el secreto en una credencial de n8n que este repo no conoce.
const CRM_CLIENTE = '69f635e2-e5d5-40e1-bc46-83943fb210c0';
const CRED_CRM = { id: 'eZlh1Ygrccu87DF2', name: 'WazaCRM formularios ElementoWeb (x-waza-secret)' };

// Cabecera CORS: devuelve el Origin recibido solo si esta en la lista; si no, el
// dominio canonico. Nunca '*': con '*' cualquier sitio podria mandar leads falsos
// desde el navegador de un visitante.
const CORS = {
  entries: [{
    name: 'Access-Control-Allow-Origin',
    value: `={{ ${JSON.stringify(ORIGENES)}.includes($('Webhook').first().json.headers.origin) ? $('Webhook').first().json.headers.origin : '${ORIGENES[0]}' }}`,
  }],
};

const responder = (id, name, position, cuerpo, codigo) => ({
  parameters: { respondWith: 'json', responseBody: cuerpo, options: { responseCode: codigo, responseHeaders: CORS } },
  id, name, type: 'n8n-nodes-base.respondToWebhook', typeVersion: 1, position,
});

const si = (id, name, position, expresion) => ({
  parameters: {
    conditions: {
      options: { caseSensitive: true, version: 2 },
      conditions: [{ id: 'c1', leftValue: expresion, rightValue: '', operator: { type: 'boolean', operation: 'true', singleValue: true } }],
      combinator: 'and',
    },
    options: {},
  },
  id, name, type: 'n8n-nodes-base.if', typeVersion: 2, position,
});

const brevo = (id, name, position, jsonBody, extra = {}) => ({
  parameters: {
    method: 'POST', url: 'https://api.brevo.com/v3/smtp/email',
    authentication: 'genericCredentialType', genericAuthType: 'httpHeaderAuth',
    sendBody: true, specifyBody: 'json', jsonBody, options: { timeout: 20000 },
  },
  id, name, type: 'n8n-nodes-base.httpRequest', typeVersion: 4.2, position, credentials: { httpHeaderAuth: CRED_BREVO }, ...extra,
});

const aviso = (id, name, position, canal) => ({
  parameters: {
    jsCode: `// Aviso cuando falla un canal del flujo (D31): el error no se traga en silencio.
const lead = $('Armar correo').first().json.lead || {};
const e = $input.first().json.error || {};
const nl = String.fromCharCode(10);
return [{ json: {
  asunto: 'FALLO en el formulario de elementoweb.com: ${canal}',
  texto: 'El lead se recibio pero ${canal} no se pudo completar.' + nl + nl
    + 'Nombre: ' + (lead.nombre || '?') + nl + 'WhatsApp: ' + (lead.telefono || '?') + nl
    + 'Servicio: ' + (lead.servicio || '?') + nl + 'Intento: ' + (lead.intento || '?') + nl + nl
    + 'Error: ' + String(e.message || JSON.stringify(e)).slice(0, 500),
} }];`,
  },
  id, name, type: 'n8n-nodes-base.code', typeVersion: 2, position,
});

/** Arma el flujo completo. Exportada para que las pruebas lo inspeccionen sin tocar n8n. */
export function construirFlujo() {
  const jsCode = leerNodo('armar-correo.js');
  const jsCrm = leerNodo('armar-lead-crm.js');

  const nodos = [
    {
      parameters: { httpMethod: 'POST', path: 'elementoweb-contacto', responseMode: 'responseNode', options: { allowedOrigins: ORIGENES.join(',') } },
      id: 'webhook-contacto', name: 'Webhook', type: 'n8n-nodes-base.webhook', typeVersion: 2, position: [0, 0], webhookId: 'elementoweb-contacto',
    },
    { parameters: { jsCode }, id: 'armar-correo', name: 'Armar correo', type: 'n8n-nodes-base.code', typeVersion: 2, position: [220, 0] },
    si('es-invalido', 'Es invalido', [440, 0], '={{ $json.invalido }}'),
    responder('responder-422', 'Responder 422', [660, -240], '{"ok": false}', 422),
    si('es-spam-o-duplicado', 'Es spam o duplicado', [660, 0], '={{ $json.spam || $json.duplicado }}'),
    responder('responder-sin-efecto', 'Responder OK sin efecto', [880, -140], '{"ok": true}', 200),
    // Respuesta temprana: se contesta justo despues de validar, sin esperar a Brevo ni al CRM.
    responder('responder-ok', 'Responder OK', [880, -60], '{"ok": true}', 200),
    brevo('enviar-brevo', 'Enviar por Brevo', [880, 40], `={{ JSON.stringify({
  sender: ${JSON.stringify(REMITENTE)},
  to: [${DESTINOS.map((email) => JSON.stringify({ email })).join(', ')}],
  replyTo: $json.correo_cliente ? { email: $json.correo_cliente, name: $json.nombre } : undefined,
  subject: $json.asunto,
  htmlContent: $json.html,
  textContent: $json.texto,
  tags: ["elementoweb-lead"]
}) }}`, {
      // Un lead perdido por un hipo de red cuesta mas que reintentar. Si aun asi falla, la salida de error avisa.
      retryOnFail: true, maxTries: 2, waitBetweenTries: 1500, onError: 'continueErrorOutput',
    }),
    { parameters: { jsCode: jsCrm }, id: 'armar-lead-crm', name: 'Armar el lead para el CRM', type: 'n8n-nodes-base.code', typeVersion: 2, position: [880, 200] },
    {
      parameters: {
        method: 'POST', url: 'https://wazacrm.com/api/webhooks/forms',
        authentication: 'genericCredentialType', genericAuthType: 'httpHeaderAuth',
        sendHeaders: true, headerParameters: { parameters: [{ name: 'x-waza-client', value: CRM_CLIENTE }] },
        sendBody: true, specifyBody: 'json', jsonBody: '={{ JSON.stringify($json) }}', options: { timeout: 10000 },
      },
      id: 'guardar-wazacrm', name: 'Guardar en WazaCRM', type: 'n8n-nodes-base.httpRequest', typeVersion: 4.2, position: [1100, 200],
      credentials: { httpHeaderAuth: CRED_CRM },
      // Antes se tragaba el error en silencio (continueRegularOutput) y la ficha se perdia sin avisar a nadie (D31).
      retryOnFail: true, maxTries: 2, waitBetweenTries: 1500, onError: 'continueErrorOutput',
    },
    aviso('aviso-fallo-correo', 'Aviso fallo correo', [1100, 40], 'el correo de aviso (Brevo)'),
    aviso('aviso-fallo-crm', 'Aviso fallo CRM', [1320, 200], 'la ficha en WazaCRM'),
    brevo('enviar-aviso-fallo', 'Enviar aviso de fallo', [1540, 120], `={{ JSON.stringify({
  sender: ${JSON.stringify(REMITENTE)},
  to: [${JSON.stringify({ email: DESTINOS[0] })}],
  subject: $json.asunto,
  textContent: $json.texto,
  tags: ["elementoweb-alerta"]
}) }}`),
  ];

  // v1 ejecuta cada rama completa antes de la siguiente, de arriba abajo por posicion: por eso
  // "Responder OK" (y mas arriba) va primero y el visitante nunca espera a un proveedor.
  const conexiones = {
    Webhook: { main: [[{ node: 'Armar correo', type: 'main', index: 0 }]] },
    'Armar correo': { main: [[{ node: 'Es invalido', type: 'main', index: 0 }]] },
    'Es invalido': { main: [[{ node: 'Responder 422', type: 'main', index: 0 }], [{ node: 'Es spam o duplicado', type: 'main', index: 0 }]] },
    'Es spam o duplicado': {
      main: [
        [{ node: 'Responder OK sin efecto', type: 'main', index: 0 }],
        [
          { node: 'Responder OK', type: 'main', index: 0 },
          { node: 'Enviar por Brevo', type: 'main', index: 0 },
          { node: 'Armar el lead para el CRM', type: 'main', index: 0 },
        ],
      ],
    },
    'Enviar por Brevo': { main: [[], [{ node: 'Aviso fallo correo', type: 'main', index: 0 }]] },
    'Armar el lead para el CRM': { main: [[{ node: 'Guardar en WazaCRM', type: 'main', index: 0 }]] },
    'Guardar en WazaCRM': { main: [[], [{ node: 'Aviso fallo CRM', type: 'main', index: 0 }]] },
    'Aviso fallo correo': { main: [[{ node: 'Enviar aviso de fallo', type: 'main', index: 0 }]] },
    'Aviso fallo CRM': { main: [[{ node: 'Enviar aviso de fallo', type: 'main', index: 0 }]] },
  };

  // `errorWorkflow` NO es decorativo y este script lo estaba tirando: el flujo
  // vivo lo tenia puesto (alguien lo anadio por el panel) y cada subida lo
  // borraba en silencio, dejando los fallos sin avisar a nadie.
  // OJO (T29): 'sanblasErrorAlert01' es el alertador de otro proyecto; hay que confirmar a quien avisa.
  return { name: NOMBRE, nodes: nodos, connections: conexiones, settings: { executionOrder: 'v1', callerPolicy: 'workflowsFromSameOwner', errorWorkflow: 'sanblasErrorAlert01' } };
}

/** Exporta el flujo vivo a docs/contacto-n8n/respaldo/ antes de pisarlo (D41). Devuelve la ruta. */
export function guardarRespaldo(flujoVivo, hoy = new Date().toISOString().slice(0, 10)) {
  const dir = join(RAIZ, 'docs/contacto-n8n/respaldo');
  mkdirSync(dir, { recursive: true });
  const f = join(dir, `${hoy}-${flujoVivo.id}.json`);
  writeFileSync(f, JSON.stringify(flujoVivo, null, 2) + '\n');
  return f;
}

async function principal(args) {
  const flujo = construirFlujo();
  writeFileSync(join(RAIZ, 'docs/contacto-n8n/workflow.json'), JSON.stringify(flujo, null, 2) + '\n');
  console.log('workflow.json escrito');
  if (args.includes('--dry-run')) return 0;

  const token = readFileSync(join(homedir(), '.ssh/n8n.token'), 'utf8').trim();
  const cab = { 'X-N8N-API-KEY': token, 'Content-Type': 'application/json' };

  const listado = await fetch(`${N8N}/api/v1/workflows?limit=250`, { headers: cab }).then((r) => r.json());
  const existente = (listado.data || []).find((w) => w.name === NOMBRE);

  let id;
  if (existente) {
    id = existente.id;
    // D41: antes de pisar el flujo vivo se guarda su exportacion completa.
    const vivo = await fetch(`${N8N}/api/v1/workflows/${id}`, { headers: cab }).then((r) => r.json());
    const respaldo = guardarRespaldo(vivo);
    console.log(`respaldo del flujo vivo: ${respaldo}`);
    console.log(`flujo vivo antes de subir: id=${id} versionId=${vivo.versionId ?? '?'} actualizado=${vivo.updatedAt ?? '?'}`);
    const r = await fetch(`${N8N}/api/v1/workflows/${id}`, { method: 'PUT', headers: cab, body: JSON.stringify(flujo) });
    console.log(`actualizado ${id}: HTTP ${r.status}`);
    if (!r.ok) { console.error(await r.text()); return 1; }
  } else {
    const r = await fetch(`${N8N}/api/v1/workflows`, { method: 'POST', headers: cab, body: JSON.stringify(flujo) });
    const cuerpo = await r.json();
    if (!r.ok) { console.error('error al crear:', JSON.stringify(cuerpo)); return 1; }
    id = cuerpo.id;
    console.log(`creado ${id}`);
  }

  const act = await fetch(`${N8N}/api/v1/workflows/${id}/activate`, { method: 'POST', headers: cab });
  console.log(`activar: HTTP ${act.status}`);
  if (!act.ok) console.error(await act.text());
  const nuevo = await fetch(`${N8N}/api/v1/workflows/${id}`, { headers: cab }).then((r) => r.json()).catch(() => ({}));
  console.log(`flujo vivo ahora: id=${id} versionId=${nuevo.versionId ?? '?'} actualizado=${nuevo.updatedAt ?? '?'}  <- copiar al mensaje del commit`);
  console.log(`webhook: ${N8N}/webhook/elementoweb-contacto`);
  console.log('Siguiente: probar de punta a punta con un lead v1 y uno v2 de prueba y borrarlos del CRM (D41).');
  return act.ok ? 0 : 1;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) principal(process.argv.slice(2)).then((c) => process.exit(c), (e) => { console.error(e); process.exit(1); });
