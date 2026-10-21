<!-- GENERADO por scripts/gen-formulario-md.mjs desde src/data/formulario.json. No editar a mano. -->
# Formulario por servicio: fuente normativa

Este archivo describe el contrato del formulario (D10, D32 y D34 de `DECISIONES.md`). La fuente única es `src/data/formulario.json`; la leen `ServiceForm`, el build, este generador y la lista blanca del flujo de n8n.

## Reglas del payload

- Obligatorios: nombre y WhatsApp (8 dígitos o más). El correo es opcional y solo se acepta sin correo cuando el contrato v2 de n8n (D30) esté en producción.
- `servicio` conserva la etiqueta de texto; `servicio_clave` lleva la clave de la tabla siguiente; una clave desconocida se guarda como `definir`.
- `detalle` viaja aplanado como `detalle_<campo>`, cadenas de hasta 300 caracteres. Cada campo del servicio elegido es opcional salvo los marcados como obligatorios.
- Mensaje: hasta 2000 caracteres; cualquier otro campo: hasta 500.
- `payload_version: 2` identifica este contrato; su ausencia significa v1.

## Las 14 claves

| Clave | Ficha | Texto en `servicio` | Presupuesto | Campos de `detalle` |
|---|---|---|---|---|
| `pyme` | Sitio corporativo | Diseño web / Sitio corporativo | sí | `paginas` (sel), `dominio` (sel) |
| `ecommerce` | Tienda online | Tienda online / E-commerce | sí | `productos` (sel), `pagos` (sel), `envios` (sel), `plataforma` (sel) |
| `landing` | Landing page | Landing page | sí | `objetivo` (sel), `pauta` (sel) |
| `mensual` | Plan mensual | Web empresarial gestionada — plan mensual | no | `inicio` (sel), `dominio` (sel) |
| `revision` | Revisión de mi web | Revisión de mi web | no | `web` (url, obligatorio), `dolor` (sel) |
| `rediseno` | Rediseño | Rediseño web | sí | `web` (url, obligatorio), `motivo` (sel), `urls` (sel) |
| `seo` | SEO y posicionamiento | SEO y posicionamiento | sí | `web` (url), `zona` (txt), `claves` (txt) |
| `pauta` | Google Ads y Meta Ads | Marketing digital / Pauta | sí | `plataforma` (sel), `inversion` (sel), `destino` (sel) |
| `whatsapp` | WhatsApp marketing | WhatsApp marketing | sí | `contactos` (sel), `numero` (sel), `uso` (sel) |
| `ia` | Chatbots e IA | Automatización / Inteligencia artificial | sí | `canal` (sel), `tarea` (sel), `volumen` (sel) |
| `automatizacion` | Automatización n8n | Automatización n8n | sí | `tarea` (txt), `herramientas` (txt) |
| `medida` | Software y CRM a medida | Software a medida | sí | `proceso` (txt), `usuarios` (sel) |
| `definir` | Ayúdame a definir | Ayúdame a definir mi proyecto | no | `negocio` (txt), `meta` (sel) |
| `otro` | Otro | Otro | no | `necesidad` (txt) |

## Preguntas por servicio

### `pyme` — Sitio corporativo

Título del formulario: «Cotizar mi sitio corporativo». Botón: «Pedir cotización de mi sitio». Botón en la página: «Cotizar mi web».

- `paginas` — ¿Cuántas páginas calculas?. Opciones: Hasta 6 · De 7 a 15 · Más de 15 · No lo sé.
- `dominio` — ¿Ya tienes dominio?. Opciones: Sí · No · No lo sé.

### `ecommerce` — Tienda online

Título del formulario: «Cotizar mi tienda online». Botón: «Pedir cotización de mi tienda». Botón en la página: «Cotizar mi tienda».

- `productos` — ¿Cuántos productos venderás?. Opciones: Hasta 25 · De 26 a 100 · Más de 100.
- `pagos` — ¿Cómo quieres cobrar?. Opciones: Yappy y tarjeta · Solo Yappy · Solo tarjeta · No lo sé.
- `envios` — ¿Cómo entregas?. Opciones: Ciudad e interior · Solo ciudad · Retiro en tienda · Internacional.
- `plataforma` — ¿Plataforma preferida?. Opciones: Shopify · WooCommerce · Que me recomienden.

### `landing` — Landing page

Título del formulario: «Cotizar mi landing page». Botón: «Pedir cotización de mi landing». Botón en la página: «Cotizar mi landing».

- `objetivo` — ¿Qué quieres lograr con ella?. Opciones: Recibir consultas · Vender un producto · Agendar citas · Otro.
- `pauta` — ¿La usarás con anuncios pagados?. Opciones: Sí · No · No lo sé.

### `mensual` — Plan mensual

Título del formulario: «Consultar el plan mensual». Botón: «Consultar el plan mensual».

- `inicio` — ¿Cuándo quieres empezar?. Opciones: Este mes · En 1 a 3 meses · Solo estoy mirando.
- `dominio` — ¿Ya tienes dominio?. Opciones: Sí · No · No lo sé.

### `revision` — Revisión de mi web

Título del formulario: «Pedir la revisión de mi web». Botón: «Pedir la revisión». Botón en la página: «Revisar mi web».

- `web` — Dirección de tu web (obligatorio) [obligatorio].
- `dolor` — ¿Qué te preocupa más?. Opciones: Velocidad · Que no aparece en Google · Se ve vieja · Otro.

### `rediseno` — Rediseño

Título del formulario: «Cotizar el rediseño de mi web». Botón: «Pedir cotización del rediseño».

- `web` — Dirección de tu web actual (obligatorio) [obligatorio].
- `motivo` — ¿Por qué rediseñar?. Opciones: Se ve vieja · Es lenta · No genera consultas · Cambió el negocio.
- `urls` — ¿Conservamos las direcciones actuales?. Opciones: Sí · No lo sé.

### `seo` — SEO y posicionamiento

Título del formulario: «Cotizar SEO para mi negocio». Botón: «Pedir cotización de SEO».

- `web` — Dirección de tu web (si ya tienes).
- `zona` — Zona o ciudad donde quieres aparecer.
- `claves` — Búsquedas que quieres ganar (2 o 3).

### `pauta` — Google Ads y Meta Ads

Título del formulario: «Cotizar mi campaña». Botón: «Pedir cotización de campañas».

- `plataforma` — ¿Dónde quieres anunciar?. Opciones: Google · Facebook e Instagram · Ambas · No lo sé.
- `inversion` — Inversión mensual estimada en pauta. Opciones: Menos de $300 · $300 a $1,000 · Más de $1,000 · No lo sé.
- `destino` — ¿Tienes web o landing donde llegue la gente?. Opciones: Sí · No.

### `whatsapp` — WhatsApp marketing

Título del formulario: «Consultar WhatsApp marketing». Botón: «Consultar WhatsApp marketing».

- `contactos` — ¿Cuántos contactos con permiso tienes?. Opciones: Menos de 500 · 500 a 5,000 · Más de 5,000 · Aún ninguno.
- `numero` — ¿Tu número ya está verificado en la API oficial?. Opciones: Sí · No · No sé qué es.
- `uso` — ¿Para qué lo usarías?. Opciones: Campañas · Atención al cliente · Ambos.

### `ia` — Chatbots e IA

Título del formulario: «Cotizar mi asistente con IA». Botón: «Pedir cotización del asistente».

- `canal` — ¿En qué canal?. Opciones: WhatsApp · Mi página web · Ambos.
- `tarea` — ¿Qué debe resolver?. Opciones: Responder preguntas · Agendar citas · Cotizar o calificar · Otro.
- `volumen` — Mensajes al mes, aproximado. Opciones: Menos de 500 · 500 a 3,000 · Más de 3,000.

### `automatizacion` — Automatización n8n

Título del formulario: «Cotizar una automatización». Botón: «Pedir cotización de automatización».

- `tarea` — ¿Qué tarea repites a mano hoy?.
- `herramientas` — ¿Qué herramientas usas? (Excel, Gmail, CRM…).

### `medida` — Software y CRM a medida

Título del formulario: «Cotizar mi software a medida». Botón: «Pedir cotización del software».

- `proceso` — ¿Qué proceso quieres digitalizar?.
- `usuarios` — ¿Cuántas personas lo usarían?. Opciones: De 1 a 5 · De 6 a 20 · Más de 20.

### `definir` — Ayúdame a definir

Título del formulario: «Ayúdame a definir mi proyecto». Botón: «Pedir orientación».

- `negocio` — ¿A qué se dedica tu negocio y en qué ciudad?.
- `meta` — ¿Qué quieres lograr primero?. Opciones: Más clientes · Vender en línea · Ordenar procesos · No lo sé.

### `otro` — Otro

Título del formulario: «Cuéntanos qué necesitas». Botón: «Enviar mi solicitud».

- `necesidad` — ¿Qué necesitas?.

## Página a clave

Una página sin clave propia usa `definir`. El mapa se pasa a `PageData.serviceKey` cuando cada página se migra a la plantilla nueva.

| Página | Clave |
|---|---|
| `servicios/diseno-web-corporativo-panama` | `pyme` |
| `servicios/tiendas-online-ecommerce-panama` | `ecommerce` |
| `servicios/landing-pages-alta-conversion-panama` | `landing` |
| `servicios/redisenio-web-panama` | `rediseno` (hoy: `revision`) |
| `marketing/google-ads-panama` | `pauta` |
| `marketing/facebook-instagram-ads-panama` | `pauta` |
| `marketing/contenido-redes-sociales-panama` | `definir` |
| `marketing/email-marketing-panama` | `definir` |
| `marketing/whatsapp-marketing-masivo-panama` | `whatsapp` |
| `marketing/automatizaciones-n8n-panama` | `automatizacion` |
| `marketing/videos-publicitarios-panama` | `definir` |
| `marketing/video-inmobiliario-panama` | `definir` |
| `inteligencia-artificial-para-empresas-panama` | `ia` |
| `crecimiento/seo-posicionamiento-web-panama` | `seo` |
| `crecimiento/seo-local-google-maps-panama` | `seo` |
| `crecimiento/mantenimiento-web-panama` | `mensual` |
| `crecimiento/hosting-infraestructura-panama` | `mensual` |
| `tecnologias/diseno-web-wordpress-panama` | `pyme` |
| `tecnologias/diseno-web-shopify-panama` | `ecommerce` |
| `tecnologias/desarrollo-web-a-medida-vue-react-panama` | `medida` |
| `funcionalidades/integracion-yappy-pasarelas-pago-panama` | `ecommerce` |
| `funcionalidades/sistemas-reservas-citas-online-panama` | `medida` |
| `funcionalidades/integracion-cybersource-panama` | `ecommerce` |
| `funcionalidades/chatbots-ia-web-wazacrm-panama` | `ia` |
| `saas/wazacrm` | `definir` |
| `saas/nouscrm` | `definir` |
| `saas/cifrao` | `definir` |
