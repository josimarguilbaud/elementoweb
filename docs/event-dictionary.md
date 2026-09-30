# Diccionario de eventos de medición (GA4: G-J0NHHRTV75)

Código: `src/scripts/track.ts` (clics) y `src/components/ContactForm.astro` (eventos del formulario) → `gtag`.
Regla: **nunca** se envía nombre, correo, teléfono, mensaje ni URLs con datos personales. Solo ubicación, servicio (clave) e ID opaco.

| Evento | Cuándo se dispara | Tipo | Parámetros |
|---|---|---|---|
| `click_whatsapp` | Clic en cualquier enlace a wa.me / api.whatsapp.com | Microconversión | `location` (header, main, footer, other), `page_path` |
| `click_phone` | Clic en enlace `tel:` | Microconversión | `location`, `page_path` |
| `click_email` | Clic en enlace `mailto:` | Microconversión | `location`, `page_path` |
| `cta_click` | Clic en un enlace a `/contacto/` | Microconversión | `location`, `service` (landing, pyme, ecommerce, medida; solo si el enlace lo trae), `page_path` |
| `form_start` | Primer foco en el campo Nombre del formulario (una vez por carga) | Microconversión | `form`, `page_path` |
| `form_error` | Envío con errores de validación | Diagnóstico | `form`, `fields` (nombres de campo, sin valores), `page_path` |
| `generate_lead` | El backend (n8n) respondió OK al envío | **Conversión principal** | `form`, `service`, `lead_id` (UUID por intento), `page_path` |
| `pricing_view` | Carga de `/precios/` | Microconversión | `page_path` |
| `case_study_view` | Carga de un caso individual de `/casos-de-exito/<caso>/` | Microconversión | `case_slug`, `page_path` |
| `calculator_complete` | Primer cálculo en `/recursos/calculadora-costo-total-web/` | Microconversión | `page_path` |
| `page_view`, `scroll`, `click` (salientes), `file_download` | Medición mejorada de GA4 (automático) | Contexto | los de GA4 |

Pendiente (aún no implementado): `qualified_lead`, `proposal_sent`, `deal_won`. Estos últimos dependen del CRM: se envían desde el servidor cuando el estado cambia, no desde el navegador.

## Reglas de interpretación
- Clic en WhatsApp **no** es una conversación ni una venta: es una microconversión. No sumarlo a los leads.
- `generate_lead` solo cuenta formularios aceptados. Un lead se cuenta una vez por `lead_id`.
- `qualified_lead` y `deal_won` deben salir del CRM. No inferirlos desde la web.
- No hay `purchase`: la web no tiene checkout.

## Configuración en GA4 (manual, una vez)
1. Administrar → Eventos → marcar `generate_lead` como **evento clave**.
2. Administrar → Definiciones personalizadas → dimensiones de evento: `location`, `service`, `form`, `fields` (opcional).
3. Verificar con Informes → Tiempo real y con DebugView tras publicar.
4. Cumplimiento: mencionar Google Analytics en la política de privacidad y decidir el aviso de cookies con asesoría legal.

## Dashboard semanal sugerido
Sesiones orgánicas por página (`/`, `/diseno-web-panama/`, `/miami/…`), clics en WhatsApp, `form_start` → `generate_lead` (tasa), leads por servicio (`service`), y desde el CRM: calificados, propuestas, cierres. Comparar ventanas equivalentes y anotar cambios en el sitio.
