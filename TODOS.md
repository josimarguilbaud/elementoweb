# TODOS

## SEO y autoridad
### Frente de autoridad externa (Google Business Profile, citaciones, enlaces, casos)

**What:** Abrir un frente fuera del repo para ganar autoridad: ficha de Google Business Profile verificada, citaciones en directorios de Panamá, 3 a 5 objetivos de enlaces externos y 1 o 2 casos publicados con permiso del cliente.

**Why:** El análisis de Search Console y la memoria SEO del proyecto dicen que el cuello de botella es autoridad y edad del dominio, no el contenido: dominio registrado el 29-jul-2026, 0 enlaces externos, posición media 83 y 6 clics en dos meses. Reestructurar la home y los servicios mejora conversión y relevancia, pero no mueve la posición por sí solo.

**Context:** Fuera del radio de impacto del plan de rediseño (`docs/specs/rediseno-elementoweb/SPEC.md`, S7) y requiere acciones del dueño (verificación de la ficha por teléfono o correo, permisos de clientes). Línea base en `audit/gsc-baseline-2026-09.md`. Primer paso: verificar la ficha de Google Business Profile y listar 10 directorios locales.

**Effort:** L
**Priority:** P1
**Depends on:** Permisos de clientes para los casos.

### Vigilar CyberSource en Search Console tras pasarla a la plantilla

**What:** Comparar posición, clics e impresiones de `/funcionalidades/integracion-cybersource-panama/` el 27-oct-2026 y el 10-nov-2026 contra la línea base de `audit/gsc-baseline-2026-10.md` (17 impresiones, posición 7,4).

**Why:** Era la única página de servicio en la primera página de Google. El 13-oct-2026 dejó de ser una página hecha a mano y pasó a la plantilla con anatomía v2 (commit `1d07b68`). Se conservaron title, description, H1, canonical y todas las frases; cambió el schema (una Offer desde $1,050 en vez de tres) y se sumaron secciones (de ~2.250 a ~3.180 palabras).

**Context:** Si cae más de 5 posiciones y se sostiene dos semanas, revisar primero el orden de las secciones: «Qué es CyberSource» pasó del primer bloque del cuerpo al cuarto, detrás de la respuesta, el comprobante y «Resultados de clientes».

**Effort:** S
**Priority:** P1
**Depends on:** Nada; Search Console ya tiene la propiedad.

### Volver a medir en producción las páginas del molde Kredit

**What:** Tras publicar la tanda del molde Kredit (D44), correr `node scripts/medir.mjs https://elementoweb.com/<ruta>/ --id <id> --escribir` para cada id de `src/data/mediciones.json` (las 24 páginas de servicio y la pilar, más precios, IA para empresas y CyberSource desde el 13-oct-2026) y publicar el cambio.

**Why:** Las mediciones del 13-oct-2026 se hicieron con Lighthouse sobre el build local (`astro preview`), porque producción todavía servía las páginas viejas. La cifra visible tiene que ser la de la página publicada, servida por nginx desde Netcup.

**Context:** El método (Lighthouse móvil, 150 ms simulados, mediana de 5) es el mismo; cambia el servidor. Si hay clave de PageSpeed en `~/.ssh/psi.key`, el script usa PSI y la etiqueta lo dice.

**Intento del 13-oct-2026 (no se publicó):** tras el deploy de `b6929d3` se midieron las 11 contra producción desde la PC de Josimar en Panamá. Diez dieron 1,9 a 2,1 s y la pilar 4,8 s, pero el corporativo dio 1,9 s y, veinte minutos después, 4,8 s en cuatro corridas seguidas: el método no es estable contra producción. En las corridas lentas la página queda en blanco hasta ≈2,5 s aunque el HTML, el CSS, la fuente y la foto llegan antes de 0,7 s y el hilo principal está libre (sin tareas largas); el LCP simulado arrastra entonces gtag y las imágenes diferidas. Las páginas sin anatomía v2 pintan a ≈1,6 s en las mismas condiciones. En local con throttling real de DevTools, el corporativo v2 da 2,37 s y `/contacto/` 2,08 s. Queda sin explicar qué retiene el primer pintado en producción. Por eso `mediciones.json` sigue con las cifras del build local hasta tener PageSpeed Insights, que mide desde servidores de Google y no desde esta red.

**Effort:** S
**Priority:** P1
**Depends on:** La clave gratuita de PageSpeed Insights en `~/.ssh/psi.key` (pendiente del dueño, D40).

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
