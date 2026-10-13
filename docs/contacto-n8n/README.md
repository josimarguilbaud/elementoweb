# Formulario de contacto → n8n → correo y CRM

El sitio es **estático** (nginx), así que no puede enviar correo por sí mismo. El
formulario hace un `POST` con JSON a un **webhook de n8n**, y n8n manda el correo
por la **API HTTP de Brevo** desde `avisos@mailweb.site` (SMTP no: Hetzner bloquea
los puertos de salida 25/465/587, y eso ya dejó el formulario muerto una vez) y guarda
la ficha en **WazaCRM**.

> El flujo **no se edita a mano en n8n**: se reconstruye desde este repo con
> `node scripts/subir-flujo-contacto.mjs`. Lo que se toque por el panel se pierde
> en la siguiente subida.

## Estado: contrato v2 escrito, todavía NO subido a n8n

El código de este directorio y `workflow.json` ya son el **contrato v2** (D30 a D33 y D41 de
`docs/specs/rediseno-elementoweb/DECISIONES.md`). **El flujo vivo en n8n sigue siendo el anterior** hasta que se
ejecute la fase 3: subirlo (`node scripts/subir-flujo-contacto.mjs`, sin `--dry-run`) y hacer la prueba de punta a punta
de abajo. Mientras tanto `ContactForm` sigue exigiendo el correo, que es lo que el flujo vivo espera.

Qué cambia en v2:

| Antes (flujo vivo) | v2 |
|---|---|
| Exige nombre **y correo**; sin correo descartaba el lead y respondía `{"ok": true}` | Exige nombre y teléfono (8 dígitos o más); el correo es opcional. Un inválido responde **422** `{"ok": false}` |
| Respondía después de Brevo | Responde **200 justo después de validar**, antes del correo y del CRM |
| El mismo `intento` dos veces duplicaba ficha y correo | Deduplica por `intento` (24 h, máximo 500 ids, datos estáticos del flujo): el duplicado responde 200 sin efecto |
| Brevo con error en silencio de la ficha del CRM (`continueRegularOutput`) | Brevo y el CRM tienen salida de error que manda un **aviso por correo**; si el aviso falla, salta `errorWorkflow` |
| Sin límites | Cuerpo máximo ~8 KB, campo de 500 caracteres, mensaje de 2.000, `detalle_*` de 300, `origen` validado, teléfono normalizado, aviso de **pico** (más de 20 leads válidos por hora) |
| Servicio solo como texto | Suma `servicio_clave` y `detalle_<campo>` (lista blanca de `src/data/formulario.json`), `payload_version`; el payload v1 de hoy se sigue aceptando |

Un correo mal escrito en el campo opcional **no cuesta el lead**: se ignora y el lead sigue.

## Prueba de punta a punta (precondición de activar `ServiceForm`)

1. `node scripts/subir-flujo-contacto.mjs`. Guarda el flujo vivo en `respaldo/AAAA-MM-DD-<id>.json` e imprime el `id` y la `versionId`:
   cópialos al mensaje del commit.
2. Envía un lead **v1** (como el de hoy) y uno **v2** de prueba, con un campo de `detalle_*` y con un `<script>` en un campo. Comprueba
   que llegan el correo y la ficha, qué guarda WazaCRM en `extras` y que escapa lo que muestra.
3. Envía un lead **solo con nombre y teléfono**: debe llegar sin `replyTo`. Si WazaCRM exige correo, decidirlo antes de activar.
4. Reenvía el mismo `intento`: debe quedar **una** ficha y **un** correo.
5. Apaga a propósito un canal (clave de Brevo o secreto del CRM de prueba) y comprueba que llega el aviso de fallo. Confirma además a quién llega
   `errorWorkflow: sanblasErrorAlert01`, que es el alertador de otro proyecto (T29).
6. Borra los leads de prueba del CRM.

**Revertir:** `git revert` del commit del flujo y volver a correr el script (el `workflow.json` del repo es la fuente); el
respaldo del flujo vivo anterior queda en `respaldo/`. `scripts/check-prod.sh` sondea el honeypot (200, sin ficha ni correo).

## El lead también entra al CRM

El mismo flujo guarda la ficha en el CRM de WazaCRM, en paralelo al correo.

**Esto antes lo hacía el navegador, y era un agujero.** `site.ts` llevaba un
bloque `crm` con el clientId **y el secreto** del webhook, así que viajaban en el
HTML público de `elementoweb.com`. El comentario que los acompañaba decía que ese
secreto «no es una credencial de administración» — falso: es justo lo que
autoriza a escribir en el CRM de este cliente. Corregido el 16-sep-2026: la
llamada sale de n8n con el secreto en la credencial
`WazaCRM formularios ElementoWeb (x-waza-secret)` y el clientId en la cabecera
`x-waza-client`. Un sitio estático no puede guardar un secreto.

## Archivos

- `workflow.json` — el flujo tal como lo genera el script (no se edita a mano; una prueba comprueba que coincide).
- `armar-correo.js` — nodo Code: valida, limita, deduplica, arma el correo y entrega un `lead` limpio. Lleva `__FORMULARIO__`, que el script reemplaza con el esquema de `src/data/formulario.json`.
- `armar-lead-crm.js` — nodo Code que traduce el `lead` limpio al idioma del CRM (aplana `detalle`).
- `email-aviso.html` — vista previa del correo (ábrelo en el navegador para verlo).
- `respaldo/` — exportaciones del flujo vivo antes de cada subida.
- Pruebas: `scripts/n8n.test.mjs` ejecuta los nodos reales con entradas simuladas (`npm test`). Es una prueba en Node, no en n8n: la prueba de punta a punta de arriba es la que cubre el flujo vivo.

## Notas

- **CORS:** el webhook acota `allowedOrigins` a `elementoweb.com` y `www.elementoweb.com`, y la respuesta devuelve el `Origin` recibido solo si
  está en la lista (nunca `*`). CORS no es autenticación: un `curl` lo salta. Por eso el servidor impone sus propios límites.
- **Reply-To:** el correo llega con *responder-a* = correo del cliente cuando lo dejó; sin correo, se responde por WhatsApp (botón en el correo).
- **Anti-bots:** honeypot en el formulario y en el servidor. Un límite de tasa delante de n8n y un desafío Turnstile quedan pendientes (T29 y `TODOS.md`).
- **Seguridad:** ningún secreto vive en este repo; las credenciales están en n8n.
