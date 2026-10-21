# Diccionario de eventos de medición (GA4: G-J0NHHRTV75)

Código: `src/scripts/track.ts` (clics; qué evento manda cada clic lo decide `clasificarClic` en `src/lib/clic-cta.ts`) y los formularios (`src/components/ContactForm.astro` hoy; `ServiceForm` cuando se active en la fase 3) → `gtag`.
Regla: **nunca** se envía nombre, correo, teléfono, mensaje ni URLs con datos personales. Solo ubicación, servicio (clave) e ID opaco.

**`service` es la clave del servicio** de `src/data/formulario.json` (`pyme`, `ecommerce`, `landing`, `seo`, `pauta`…). Sale del enlace (`/contacto/?servicio=…`), de lo que informa el formulario o de `<main data-service>` en las páginas con anatomía nueva (D9). `form_start`, `form_error` y `click_whatsapp` lo llevan cuando la página declara servicio; las páginas actuales no lo declaran y sus eventos no cambian. `ContactForm` (v1) todavía informa en `generate_lead.service` la etiqueta de texto; `ServiceForm` informa la clave.

| Evento | Cuándo se dispara | Tipo | Parámetros |
|---|---|---|---|
| `click_whatsapp` | Clic en cualquier enlace a wa.me / api.whatsapp.com | Microconversión | `location` (header, main, footer, other), `page_path` |
| `click_phone` | Clic en enlace `tel:` | Microconversión | `location`, `page_path` |
| `click_email` | Clic en enlace `mailto:` | Microconversión | `location`, `page_path` |
| `cta_click` | Clic en un enlace a `/contacto/`, o en el ancla exacta `#formulario` fuera de `/contacto/` (desde el 14-oct-2026, D50; antes esos clics no se medían) | Microconversión | `location` (`data-cta-loc` o header/main/footer), `service` (primero `?servicio=` o `data-service` del enlace; en `#formulario`, después `<main data-service>`; se omite si no hay), `page_path` |
| `select_content` | Clic en un enlace con `data-content-id` (desde el 21-oct-2026: las 6 filas de la vitrina de Marketing de la portada, D54). Va después de las demás ramas: un clic manda un solo evento. No se manda al pasar el puntero ni al enfocar. Los clics que navegan antes de que cargue gtag.js se pierden, así que cuenta como mínimo | Interacción | `content_type` (`servicio` por defecto o `data-content-type`), `content_id` (el id corto de la fila, p. ej. `google-ads-panama`), `location`, `page_path` |
| `form_start` | Primer foco en el campo Nombre del formulario (una vez por carga) | Microconversión | `form`, `page_path` |
| `form_error` | Envío con errores de validación | Diagnóstico | `form`, `fields` (nombres de campo, sin valores), `page_path` |
| `generate_lead` | El backend (n8n) respondió OK al envío | **Conversión principal** | `form`, `service` (clave; el formulario general de la portada y `/contacto/` mandaba la etiqueta de texto hasta el 14-oct-2026), `lead_id` (UUID por intento), `page_path` |
| `pricing_view` | Carga de `/precios/` | Microconversión | `page_path` |
| `case_study_view` | Carga de un caso individual de `/casos-de-exito/<caso>/` | Microconversión | `case_slug`, `page_path` |
| `calculator_complete` | Primer cálculo en `/recursos/calculadora-costo-total-web/` | Microconversión | `page_path` |
| `page_view`, `scroll`, `click` (salientes), `file_download` | Medición mejorada de GA4 (automático) | Contexto | los de GA4 |

Pendiente (aún no implementado): `qualified_lead`, `proposal_sent`, `deal_won`. Estos últimos dependen del CRM: se envían desde el servidor cuando el estado cambia, no desde el navegador.

## Reglas de interpretación
- Las pruebas con navegador bloquean Google Analytics (`scripts/lib/sin-ga.mjs`, D54), pero GA4 ya trae visitas de `localhost` y `127.0.0.1` de antes del 21-oct-2026: filtrar por `hostName` (`elementoweb.com` y `www.elementoweb.com`) al leer. El filtro de tráfico interno de la propiedad está en «Prueba» y no excluye nada.
- Clic en WhatsApp **no** es una conversación ni una venta: es una microconversión. No sumarlo a los leads.
- `generate_lead` solo cuenta formularios aceptados. Un lead se cuenta una vez por `lead_id`.
- `qualified_lead` y `deal_won` deben salir del CRM. No inferirlos desde la web.
- No hay `purchase`: la web no tiene checkout.

## Configuración en GA4 (manual, una vez)
1. Administrar → Eventos → marcar `generate_lead` como **evento clave**.
2. Administrar → Definiciones personalizadas → dimensiones de evento: `location`, `service`, `form`, `fields` (opcional). **Estado:** `location` y `service` quedaron registradas el 21-oct-2026 (D54); `form` y `fields`, no. Una dimensión no se aplica a datos anteriores. `content_id` y `content_type` no necesitan registro: GA4 los muestra en las dimensiones predefinidas «ID de contenido» y «Tipo de contenido».
3. Verificar con Informes → Tiempo real y con DebugView tras publicar.
4. Cumplimiento: mencionar Google Analytics en la política de privacidad y decidir el aviso de cookies con asesoría legal.

## Dashboard semanal sugerido
Sesiones orgánicas por página (`/`, `/diseno-web-panama/`, `/miami/…`), clics en WhatsApp, `form_start` → `generate_lead` (tasa), leads por servicio (`service`), y desde el CRM: calificados, propuestas, cierres. Comparar ventanas equivalentes y anotar cambios en el sitio.
