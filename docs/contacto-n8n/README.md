# Formulario de contacto → n8n → correo bonito

El sitio es **estático** (nginx), así que no puede enviar correo por sí mismo. El
formulario hace un `POST` con JSON a un **webhook de n8n**, y n8n envía el correo
por SMTP con la cuenta `lead@elementoweb.com`, con copia a `josimarguilbaud@gmail.com`.

## Archivos
- `workflow.json` — flujo de n8n listo para importar (Webhook → Enviar correo).
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
