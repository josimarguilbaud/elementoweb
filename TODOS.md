# TODOS

## SEO y autoridad
### Frente de autoridad externa (Google Business Profile, citaciones, enlaces, casos)

**What:** Abrir un frente fuera del repo para ganar autoridad: ficha de Google Business Profile verificada, citaciones en directorios de Panamá, 3 a 5 objetivos de enlaces externos y 1 o 2 casos publicados con permiso del cliente.

**Why:** El análisis de Search Console y la memoria SEO del proyecto dicen que el cuello de botella es autoridad y edad del dominio, no el contenido: dominio registrado el 29-jul-2026, 0 enlaces externos, posición media 83 y 6 clics en dos meses. Reestructurar la home y los servicios mejora conversión y relevancia, pero no mueve la posición por sí solo.

**Context:** Fuera del radio de impacto del plan de rediseño (`docs/specs/rediseno-elementoweb/SPEC.md`, S7) y requiere acciones del dueño (verificación de la ficha por teléfono o correo, permisos de clientes). Línea base en `audit/gsc-baseline-2026-09.md`. Primer paso: verificar la ficha de Google Business Profile y listar 10 directorios locales.

**Effort:** L
**Priority:** P1
**Depends on:** Permisos de clientes para los casos.

### Redirecciones 301 de tres URLs retiradas que aún tienen impresiones

**What:** Agregar en `nginx.conf` tres 301: `/saas/chatmantis/` a `/saas/wazacrm/`, `/funcionalidades/chatbots-ia-web-chatmantis-panama/` a `/funcionalidades/chatbots-ia-web-wazacrm-panama/` y `/saas/wapycrm/` a `/saas/nouscrm/`, y sumar la comprobación a `scripts/check-prod.sh`.

**Why:** Search Console todavía lista las tres (2, 1 y 1 impresiones en el rango 28-jul a 11-oct-2026) y hoy dan 404 en producción. Los renombres fueron `6e0c1ff` (ChatMantis a WazaCRM) y `408f1c9` (WapyCRM a NousCRM) y no dejaron redirección.

**Context:** Hallazgo 5 de `audit/gsc-baseline-2026-10.md`. Son pocas impresiones, pero el 301 es la forma correcta de despedir una URL con historial. Cambia `nginx.conf`, así que se publica con el push y requiere la aprobación del dueño.

**Effort:** S
**Priority:** P3
**Depends on:** Nada.

### Páginas de casos con métricas reales

**What:** Publicar páginas de casos de éxito con cifras medidas (consultas, ventas, posición) cuando el cliente autorice.

**Why:** El comprobante del sitio imprime «sin publicar aún» en la fila de casos; una cifra real con fecha y fuente es la prueba más fuerte frente a los competidores que prometen.

**Context:** Hoy no hay datos publicables ni permisos (SPEC S8). El proyecto de portafolio con más datos es Panamá Worldwide Express. Antes de escribir nada, pedir al cliente qué cifras autoriza y su fuente.

**Effort:** L
**Priority:** P2
**Depends on:** Autorización del cliente por escrito.

### Prueba de búsqueda pagada en los dos términos principales

**What:** Comprar durante 2 a 4 semanas tráfico de Google Ads para «agencia de diseño web» y «diseño web panama» con un presupuesto pequeño, apuntando a la home y a la pilar.

**Why:** Da tasa de conversión por palabra clave y por página en días, mientras el posicionamiento orgánico madura. Una agencia que vende Google Ads puede comprar el dato que le falta.

**Context:** Sugerido por las dos voces independientes de la revisión del 12-oct-2026. No hay línea base de consultas; GA4 no tuvo datos hasta el 30-sep-2026. Presupuesto y cuenta de Ads los decide el dueño.

**Effort:** S
**Priority:** P2
**Depends on:** Línea base de leads (D16 en `docs/specs/rediseno-elementoweb/DECISIONES.md`).

### Salida comercial con Fábrica de Webs

**What:** Usar las demos que genera Fábrica de Webs para prospectar clientes de forma directa mientras el SEO madura.

**Why:** Convierte más rápido que el posicionamiento en un dominio de 11 semanas con cero enlaces.

**Context:** Fábrica de Webs está construido y en verde, falta desplegarlo y poner las claves (ver la memoria del proyecto).

**Effort:** M
**Priority:** P3
**Depends on:** Despliegue de Fábrica de Webs.

### Herramienta pública «mide tu web»

**What:** Una página gratuita que ejecute las verificaciones del repo (SEO básico, enlaces, accesibilidad, velocidad) sobre la URL del visitante y capture la consulta.

**Why:** Muestra capacidad, puede ganar enlaces y capta consultas. Es una apuesta, no un requisito.

**Context:** Reutiliza `qa-seo.mjs`, `check-links.mjs` y `qa-a11y.mjs`. Requiere un servicio que corra fuera del sitio estático.

**Effort:** L
**Priority:** P3
**Depends on:** Plantilla y comprobantes de la fase 1.

## Formulario y leads
### Desafío antibots (Cloudflare Turnstile) en el formulario

**What:** Añadir un desafío invisible de Turnstile al formulario y verificarlo en n8n antes de enviar el correo y guardar la ficha.

**Why:** El webhook de n8n es público; CORS no lo protege de un `curl`. Hoy solo lo filtra un honeypot. Con el formulario en más de 25 páginas y texto libre en `detalle`, un envío falso cuesta un correo de Brevo y una ficha en WazaCRM.

**Context:** La revisión de ingeniería del 13-oct-2026 (D33 en `docs/specs/rediseno-elementoweb/DECISIONES.md`) endurece el servidor con topes, lista blanca y alerta de pico, y deja Turnstile aquí porque añade una dependencia externa y un paso en el navegador. Reconsiderar si aparece spam real o la alerta de pico se dispara.

**Effort:** M
**Priority:** P3
**Depends on:** Contrato v2 del flujo (D30 a D33) en producción.

### Clave gratuita de la API de PageSpeed Insights

**What:** Crear una clave de la API de PageSpeed Insights en Google Cloud y guardarla en `~/.ssh/psi.key` para que `scripts/medir.mjs` mida con la herramienta vinculante.

**Why:** Sin clave, la API responde 429 por cuota compartida (comprobado el 13-oct-2026). Sin ella el comprobante solo puede usar Lighthouse local, que no es la herramienta que fija el criterio de 90 puntos.

**Context:** D40 en `docs/specs/rediseno-elementoweb/DECISIONES.md`. Es una tarea del dueño (cuenta de Google Cloud); la clave es gratuita. Mientras no exista, `medir.mjs` usa Lighthouse local y lo dice en la etiqueta.

**Effort:** S
**Priority:** P2
**Depends on:** Nada.

### Sonda programada del webhook de contacto

**What:** Una ejecución programada (por ejemplo semanal en GitHub Actions) que mande el honeypot al webhook y avise si no responde 200.

**Why:** `git revert` no revierte n8n y un flujo roto pierde leads sin que la web falle. La sonda del honeypot no deja ficha ni correo.

**Context:** D41 deja la sonda manual en `scripts/check-prod.sh`; esto la convierte en vigilancia continua. Hetzner no se puede apagar sin matar el formulario.

**Effort:** S
**Priority:** P3
**Depends on:** `scripts/check-prod.sh` con la sonda (T28).

## Completed
