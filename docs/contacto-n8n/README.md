# Formulario de contacto → n8n → correo bonito

El sitio es **estático** (nginx), así que no puede enviar correo por sí mismo. El
formulario hace un `POST` con JSON a un **webhook de n8n**, y n8n manda el correo
por la **API HTTP de Brevo** desde `avisos@mailweb.site` (SMTP no: Hetzner bloquea
los puertos de salida 25/465/587, y eso ya dejó el formulario muerto una vez —
los pasos de SMTP de más abajo son del montaje viejo).

> El flujo **no se edita a mano en n8n**: se reconstruye desde este repo con
> `node scripts/subir-flujo-contacto.mjs`. Lo que se toque por el panel se pierde
> en la siguiente subida.

## El lead también entra al CRM

El mismo flujo guarda la ficha en el CRM de WazaCRM, en paralelo al correo. El
nodo del CRM lleva `onError: continueRegularOutput`: **si WazaCRM se cae, el
correo sale igual**.

**Esto antes lo hacía el navegador, y era un agujero.** `site.ts` llevaba un
bloque `crm` con el clientId **y el secreto** del webhook, así que viajaban en el
HTML público de `elementoweb.com`. El comentario que los acompañaba decía que ese
secreto «no es una credencial de administración» — falso: es justo lo que
autoriza a escribir en el CRM de este cliente. Corregido el 16-sep-2026: la
llamada sale de n8n con el secreto en la credencial
`WazaCRM formularios ElementoWeb (x-waza-secret)` y el clientId en la cabecera
`x-waza-client`. Un sitio estático no puede guardar un secreto.

## Archivos
- `workflow.json` — el flujo tal como quedó (lo escribe el script; no se edita a mano).
- `armar-correo.js` — el nodo Code que arma el correo.
- `armar-lead-crm.js` — el nodo Code que traduce el lead al idioma del CRM.
- `email-aviso.html` — vista previa del correo (ábrelo en el navegador para verlo).

## Pasos (una sola vez)

1. **Importa el workflow** en tu n8n: *Workflows → Import from File → `workflow.json`*.

2. **Crea la credencial SMTP** llamada exactamente **`SMTP Elemento Web`** y asígnala
   al nodo *"Enviar aviso"*. Datos:
   - **User:** `lead@elementoweb.com`
   - **Password:** la que me diste ⚠️ **pégala SOLO aquí, en n8n. Nunca en el código ni en GitHub.**
   - **Host:** `mail.elementoweb.com` (confirmado: `elementoweb.com` a secas NO acepta SMTP).
   - **Port / SSL:** `465` con SSL. Marcado "permitir certificados no verificados" por el cert de cPanel.

   > ✅ Ya montado por API el 4/8/2026: credencial `SMTP Elemento Web`, workflow activo, webhook
   > `https://n8n.aiwebstudio.co/webhook/elementoweb-contacto` y pegado en `site.ts`.

3. **Activa** el workflow (toggle *Active* arriba a la derecha).

4. **Copia la URL de producción** del nodo Webhook. Se ve así:
   `https://TU-N8N.tudominio.com/webhook/elementoweb-contacto`

5. **Pásame esa URL** (o pégala tú en `src/lib/site.ts` → `contactForm.endpoint`) y
   se hace deploy. A partir de ahí, cada envío del formulario te llega por correo.

## Notas
- **CORS:** el webhook ya trae `allowedOrigins: https://elementoweb.com`. Si tu versión
  de n8n no lo soporta y el formulario marca "error de conexión", cambia ese valor a `*`
  en el nodo Webhook.
- **Reply-To:** el correo llega con *responder-a* = correo del cliente, así que al darle
  "Responder" le escribes directo al lead.
- **Anti-bots:** el formulario ya filtra bots con un honeypot antes de enviar.
- **Seguridad:** cambia la contraseña de `lead@elementoweb.com` después de configurar,
  ya que se compartió por chat. La contraseña vive solo en n8n, nunca en este repo.
