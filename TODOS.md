# TODOS

## SEO y autoridad
### Frente de autoridad externa (Google Business Profile, citaciones, enlaces, casos)

**What:** Abrir un frente fuera del repo para ganar autoridad: ficha de Google Business Profile verificada, citaciones en directorios de Panamá, 3 a 5 objetivos de enlaces externos y 1 o 2 casos publicados con permiso del cliente.

**Why:** El análisis de Search Console y la memoria SEO del proyecto dicen que el cuello de botella es autoridad y edad del dominio, no el contenido: dominio registrado el 29-jul-2026, 0 enlaces externos, posición media 83 y 6 clics en dos meses. Reestructurar la home y los servicios mejora conversión y relevancia, pero no mueve la posición por sí solo.

**Context:** Fuera del radio de impacto del plan de rediseño (`docs/specs/rediseno-elementoweb/SPEC.md`, S7) y requiere acciones del dueño (verificación de la ficha por teléfono o correo, permisos de clientes). Línea base en `audit/gsc-baseline-2026-09.md`. El kit está listo en `docs/autoridad/KIT-AUTORIDAD.md` (13-oct-2026): datos idénticos para todos los directorios, los 10 directorios en orden, mensajes para reseñas y enlaces, y la plantilla de casos. La ficha de Google existe (Vía Grecia, PH Ventury Plaza) con 0 reseñas y 0 fotos: eso va primero.

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

### Medir la portada v2 después de publicarla

**What:** La v2 se publicó el 15-oct-2026 (día P, D51); el día P ya se midió (Lighthouse móvil en producción 92/100, LCP 1,8 s). Falta: Search Console de «agencia de diseño web» y «diseño web panama» contra `audit/gsc-baseline-2026-10.md` el **29-oct-2026** (P + 14) y el **12-nov-2026** (P + 28); GA4 por sesión con entrada en `/` (`cta_click`, `click_whatsapp`, `form_start`, `generate_lead`) contra el 30-sep al 14-oct el **12-nov-2026** (P + 4 semanas) y el **10-dic-2026** (P + 8 semanas). En la primera lectura de GA4, copiar a D51 la línea base del 30-sep al 14-oct, que no se copió antes de publicar.

**Why:** La v2 es una decisión de marca del dueño, no un experimento; la medición sirve para detectar daño (caída de consultas o de rendimiento) a tiempo.

**Context:** Reglas en D51 de `docs/specs/rediseno-elementoweb/DECISIONES.md`: reversión si Lighthouse baja de 85 o el LCP pasa de 3,5 s (D14); Search Console es solo lectura; GA4 solo concluye con al menos 300 sesiones y 5 `generate_lead` por ventana (si no, «datos insuficientes» y se repite a las 12 semanas). P + 14 y P + 28 reemplazan las lecturas del 28-oct y el 11-nov de la portada D50; las del 28-nov y el 28-dic siguen. Si GA4 no llega al umbral, la lectura de las 12 semanas cae el 7-ene-2027. Todas estas lecturas incluyen D53 (20-oct) y la vitrina de D54 desde su publicación, que tiene su propia lectura a 28 días: regla, ventanas y línea base en D54 y en `audit/ga4-portada-linea-base-2026-10.md`. Al leer GA4, filtrar por `hostName` (hay visitas de `localhost` de antes del 21-oct).

**Effort:** S
**Priority:** P1
**Depends on:** Nada; la v2 está publicada desde el 15-oct-2026.

### Volver a medir en producción las páginas del molde Kredit

**What:** Tras publicar la tanda del molde Kredit (D44), correr `node scripts/medir.mjs https://elementoweb.com/<ruta>/ --id <id> --escribir` para cada id de `src/data/mediciones.json` (las 24 páginas de servicio y la pilar, más precios, IA para empresas y CyberSource desde el 13-oct-2026, y videos-ia-lcp de Videos publicitarios desde el 20-oct-2026) y publicar el cambio.

**Why:** Las mediciones del 13-oct-2026 se hicieron con Lighthouse sobre el build local (`astro preview`), porque producción todavía servía las páginas viejas. La cifra visible tiene que ser la de la página publicada, servida por nginx desde Netcup.

**Context:** El método (Lighthouse móvil, 150 ms simulados, mediana de 5) es el mismo; cambia el servidor. Si hay clave de PageSpeed en `~/.ssh/psi.key`, el script usa PSI y la etiqueta lo dice.

**Intento del 13-oct-2026 (no se publicó):** tras el deploy de `b6929d3` se midieron las 11 contra producción desde la PC de Josimar en Panamá. Diez dieron 1,9 a 2,1 s y la pilar 4,8 s, pero el corporativo dio 1,9 s y, veinte minutos después, 4,8 s en cuatro corridas seguidas: el método no es estable contra producción. En las corridas lentas la página queda en blanco hasta ≈2,5 s aunque el HTML, el CSS, la fuente y la foto llegan antes de 0,7 s y el hilo principal está libre (sin tareas largas); el LCP simulado arrastra entonces gtag y las imágenes diferidas. Las páginas sin anatomía v2 pintan a ≈1,6 s en las mismas condiciones. En local con throttling real de DevTools, el corporativo v2 da 2,37 s y `/contacto/` 2,08 s. Queda sin explicar qué retiene el primer pintado en producción. Por eso `mediciones.json` sigue con las cifras del build local hasta tener PageSpeed Insights, que mide desde servidores de Google y no desde esta red.

**Effort:** S
**Priority:** P1
**Depends on:** La clave gratuita de PageSpeed Insights en `~/.ssh/psi.key` (pendiente del dueño, D40).

### Páginas de casos con métricas reales

**What:** Publicar páginas de casos de éxito con cifras medidas (consultas, ventas, posición) cuando el cliente autorice.

**Why:** El comprobante del sitio imprime «sin publicar aún» en la fila de casos; una cifra real con fecha y fuente es la prueba más fuerte frente a los competidores que prometen.

**Context:** Hoy no hay datos publicables ni permisos (SPEC S8). El proyecto de portafolio con más datos es Panamá Worldwide Express. Antes de escribir nada, pedir al cliente qué cifras autoriza y su fuente. El mensaje de autorización y la plantilla de datos por caso están en `docs/autoridad/KIT-AUTORIDAD.md`, sección 5.

**Effort:** L
**Priority:** P2
**Depends on:** Autorización del cliente por escrito.

### Prueba de búsqueda pagada en los dos términos principales

**What:** Comprar durante 2 a 4 semanas tráfico de Google Ads para «agencia de diseño web» y «diseño web panama» con un presupuesto pequeño, apuntando a la home y a la pilar.

**Why:** Da tasa de conversión por palabra clave y por página en días, mientras el posicionamiento orgánico madura. Una agencia que vende Google Ads puede comprar el dato que le falta.

**Context:** Sugerido por las dos voces independientes de la revisión del 12-oct-2026. No hay línea base de consultas; GA4 no tuvo datos hasta el 30-sep-2026. Presupuesto y cuenta de Ads los decide el dueño. La revisión CEO de la portada (14-oct-2026, `docs/specs/rediseno-elementoweb/PLAN-PORTADA.md`, UC1 y V11) la propone como la fuente de tráfico con fecha que mide si la portada nueva convierte; toda campaña de un servicio concreto (Google Ads, SEO local, tiendas) va a la página de ese servicio, no a la portada.

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

### Diagnosticar los ~300 ms de TBT del home

**What:** Encontrar de dónde salen los unos 300 ms de TBT que quedan en el home con Lighthouse móvil en producción.
D53 ya descartó que vengan de su efecto. Después, bajarlos.

**Why:** La mediana del home quedó en 90, justo en el umbral de D14 en el que la fase siguiente no avanza. Cada cambio
nuevo al home, como la vitrina de D54, sale sin margen.

**Context:** Lo midió D53 el 20-oct-2026 (`DECISIONES.md`, D53, «Publicación»). Lo difirió la revisión CEO de
`PLAN-MARKETING-VITRINA.md` (autoplan del 20-oct) porque está fuera de su radio. Se empieza con el perfil de rendimiento
de Chrome a CPU ×4 sobre el home de producción: tareas largas, scripts del menú (GSAP), gtag diferido y la hidratación
de islas.

**Effort:** M (humano) / S (CC)
**Priority:** P2
**Depends on:** nada.

### Sumar `comparar-main` y `selectores-hoja` al CI

**What:** Hacer que el CI construya el commit base y corra `scripts/comparar-main.mjs` y `scripts/selectores-hoja.mjs`
contra el build nuevo, para que dejen de ser pasos a mano antes de cada publicación.

**Why:** Hoy no forman parte de `npm run verify` (`verify.mjs:60`) y el CI no los exige. Un cambio que altera el
`<main>` de otra página o mete utilidades nuevas en la hoja compartida solo se descubre si alguien se acuerda de
correrlos.

**Context:** Lo difirió la re-revisión de ingeniería de `PLAN-MARKETING-VITRINA.md` (D54, autoplan del 21-oct-2026),
donde siguen como pasos a mano. Hace falta un segundo build del commit base en el job, lo que suma tiempo al despliegue.

**Effort:** S (humano) / S (CC)
**Priority:** P3
**Depends on:** nada.

### Eventos por clic en las escenas y el mapa de servicios de la portada

**What:** Enviar a GA4 un evento por cada clic en una escena («Por dónde se te van los clientes») y en cada fila del mapa de servicios de la portada, con la clave de servicio de `src/data/formulario.json` (y `definir` cuando el destino no tenga clave, como `/diseno-web-panama/` o `/marketing/`).

**Why:** La portada recibe a quien llega por marca, directorios y enlaces del kit de autoridad; saber qué servicio buscan esos visitantes decide qué página reforzar primero.

**Context:** Lo propuso la revisión CEO de la portada (14-oct-2026, `docs/specs/rediseno-elementoweb/PLAN-PORTADA.md`, X2) y se difirió porque el diseño de eventos es de la fase 3 (D1, D9): nombre del evento, parámetros, `docs/event-dictionary.md` y la prueba de `dataLayer`. Desde D54 (21-oct-2026) ya existe el camino: un enlace con `data-content-id` manda `select_content` (`clasificarClic` en `src/lib/clic-cta.ts`, prueba en `qa-lcp`), y las 6 filas de la vitrina de Marketing ya lo usan. Para las escenas y el mapa falta poner `data-content-id` y, si hace falta, `data-content-type`.

**Effort:** S (humano) / S (CC)
**Priority:** P3
**Depends on:** Portada de agencia publicada (fase 2b) y la fase 3 de eventos.

### Preguntas de la clave `definir` del formulario por servicio

**What:** Revisar qué pregunta `ServiceForm` cuando el servicio es `definir` (la portada y las páginas sin clave): objetivo, presupuesto aproximado y urgencia, todas opcionales (D19).

**Why:** El botón de la portada lleva a `definir`; sin esas tres respuestas, el equipo comercial tiene que diagnosticar a mano cada consulta antes de priorizarla.

**Context:** Lo señaló la voz Codex de la revisión CEO de la portada (14-oct-2026, V12). Va con la fase 3, cuando se active `ServiceForm`; `src/data/formulario.json` define los campos de cada clave.

**Effort:** S (humano) / S (CC)
**Priority:** P3
**Depends on:** Fase 3 (contrato v2 del flujo, D30 a D33).

### Barra fija en móvil con «Cotizar» y WhatsApp

**What:** Una barra fija abajo en móvil con el botón del servicio y WhatsApp, en las páginas de servicio (como pide D21) y, si se quiere, en la portada.

**Why:** Las páginas v2 y la portada son largas; en el celular el botón queda lejos después del héroe.

**Context:** D21 (`docs/specs/rediseno-elementoweb/DECISIONES.md`) la pide para las páginas de servicio y nunca se construyó: no existe en `src/` (la revisión de la portada del 14-oct-2026 lo comprobó). Es un componente nuevo para todo el sitio, así que salió del plan de la portada. Cuidar el CLS, que no tape el formulario ni el chat de WhatsApp, y medir antes y después con `form_start`.

**Effort:** S (humano: M) / S (CC)
**Priority:** P3
**Depends on:** Nada.

### Llevar la piel grafito al hub `/servicios/` y a las páginas internas

**What:** Incluir `src/styles/piel-grafito.css` en el hub `/servicios/`, la pilar `/diseno-web-panama/` y la página de SEO, y después en el resto de las 33 páginas v2.

**Why:** La portada v2 (plan `docs/specs/rediseno-elementoweb/PLAN-PORTADA-V2.md`) estrena la piel grafito solo en `/`; quien hace clic pasa a páginas en marino. Las impresiones de Search Console están en la pilar (1.829) y en SEO (2.685), no en la portada (197).

**Context:** El token `--ew-graphite` vive en los tokens globales y las reglas de la piel en `piel-grafito.css`, para que llevarla a otra página sea incluir esa hoja. Depende de la decisión Q1 del dueño en la puerta de /autoplan del 15-oct-2026.

**Effort:** L (humano) / M (CC)
**Priority:** P2
**Depends on:** Q1 y que la portada v2 esté publicada.

### Enlaces con UTM para medir a los prospectos de salida

**What:** Poner `utm_source` en los enlaces a elementoweb.com de las propuestas, las demos de Fábrica de Webs y la firma de WhatsApp de Nicole.

**Why:** Hoy la audiencia real de la portada son prospectos de salida, y GA4 no los separa del tráfico orgánico; la revisión CEO del 15-oct-2026 vio que la medición de la v2 no puede distinguirlos.

**Context:** La medición de la v2 (D51) compara `generate_lead` por sesión con entrada en `/`. Con UTM se puede ver si los prospectos de Nicole consultan después de ver la portada.

**Effort:** S (humano) / S (CC)
**Priority:** P2
**Depends on:** Nada.

### Revisión semanal de los dominios del portafolio

**What:** Que el workflow programado que ya existe revise cada semana los `href` de `portfolio` (`src/lib/site.ts`) y avise si alguno no responde o cambió de dueño.

**Why:** La portada v2 enlaza sitios de clientes desde la cascada, el módulo de diseño y la sección de proyectos; si un dominio vence y otro lo registra, la portada enlazaría un sitio ajeno.

**Context:** Hallazgo de la revisión de ingeniería del 15-oct-2026 (autoplan). Basta con comprobar estado HTTP y que el `<title>` siga teniendo el nombre del cliente.

**Effort:** S (humano) / S (CC)
**Priority:** P1 desde el 15-oct-2026, día en que se publicó la portada v2 (la segunda pasada de ingeniería del 15-oct lo dejó así, porque la v2 enlaza 8 o más dominios de clientes).
**Depends on:** Nada.

### Sacar `docs/` del escaneo de Tailwind

**What:** Agregar `@source not "../../docs";` a la hoja de Tailwind (Tailwind 4 lo admite) para que las clases que solo aparecen en los `.md` de `docs/` no entren a la hoja compartida.

**Why:** Hoy Tailwind escanea `docs/`, así que escribir un plan o una spec puede cambiar la hoja que bajan todas las páginas; la portada v2 tuvo que comparar el conjunto de selectores en vez de los bytes por eso.

**Context:** Hallazgo de la segunda pasada de ingeniería del 15-oct-2026 (autoplan, portada v2). Va en un commit propio, con el diff de selectores de la hoja antes y después revisado, porque toca la hoja de todas las páginas.

**Effort:** S (humano) / S (CC)
**Priority:** P3
**Depends on:** Portada v2 publicada (para no mezclar los dos cambios de la hoja).

### Unificar el mapa clave → opción del formulario

**What:** Que `ContactForm.astro` arme su mapa `PLAN` desde `src/data/formulario.json` y `contactForm.services`, como hace la portada v2, en lugar de su lista escrita a mano.

**Why:** Hoy `PLAN` tiene 7 claves y no incluye `pauta`, así que `/?servicio=pauta` no preelige nada, mientras que los botones de la portada v2 sí lo hacen.

**Context:** La portada v2 resuelve `data-opcion` en el build sin tocar `ContactForm` (para no cambiar el HTML de otras páginas). Unificar cambia el comportamiento en todas las páginas con formulario; necesita su propia prueba en `qa-form`.

**Effort:** S (humano) / S (CC)
**Priority:** P3
**Depends on:** Portada v2 publicada.

### Contraste de la hora ocupada en la maqueta de agenda del molde

**What:** Subir el color de `.ew-agenda__ocupada` en `src/styles/molde-kredit.css` (`#8a95a3`, 3,04:1 sobre la maqueta) a uno que pase 4,5:1, por ejemplo `--ew-muted`, y conservar el tachado y el borde punteado que dicen «ocupada».

**Why:** El `qa-a11y` de la portada v2 mide el texto de las maquetas aunque vayan con `aria-hidden`, y encontró esa hora en 3,04:1. En `/` ya se corrigió solo para la portada (D51); las páginas v2 que usan la agenda del molde siguen igual.

**Context:** El cambio toca el CSS en línea de las páginas con anatomía v2, así que va en un commit propio con su comparación de HTML; las maquetas son decorativas, por eso axe no lo marca.

**Effort:** S (humano) / S (CC)
**Priority:** P3
**Depends on:** Portada v2 publicada.

## IA creativa (D52)

### Medir las páginas de IA creativa

**What:** Leer, desde el día de publicación P (20-oct-2026, `/marketing/videos-publicitarios-panama/`):
- Día P y P + 28 (17-nov-2026): las 2 preguntas GEO nuevas, «¿Quién hace videos con IA para empresas en Panamá?» y «¿Cuánto cuesta un anuncio hecho con IA en Panamá?», con el método de `docs/geo-panel-preguntas.md` (sesión nueva, mismos motores, capturas). Van aparte del panel de 10 de D13.
- P + 28: la inspección de URL de Search Console (indexada sí o no) y las impresiones de «videos publicitarios».
- P + 56 (15-dic-2026): las impresiones por URL. La línea base es 0, así que la meta de D13 («el doble de impresiones») se lee como 1 impresión o más.
- P + 28 y P + 56: las consultas que llegaron desde la página, por el `origen` de los envíos del formulario (correo de n8n), y los clics de WhatsApp en GA4 si el evento existe; si no existe, se anota y se cuenta solo el formulario.

**Why:** La página sale sin búsquedas propias en Search Console (0 de 257 consultas de oct-2026) y con 10 a 100 búsquedas al mes en el Planificador. Sin fecha de lectura no se sabe si vale la pena seguir con las otras páginas.

**Context:** Regla de decisión: si a P + 28 ningún motor cita a Elemento Web y la página no está indexada o tiene 0 impresiones, se adelanta su artículo de blog (abajo) y se hace una acción de autoridad del kit (`docs/autoridad/KIT-AUTORIDAD.md`, por ejemplo el alta en Sortlist), porque el freno documentado es la autoridad del dominio. Lectura GEO del día P: pendiente, la hace Claude en el navegador del dueño con su permiso o el dueño.

**Effort:** S (humano) / S (CC)
**Priority:** P2
**Depends on:** Publicación (20-oct-2026).

### Fotografía de producto con IA: falta la foto «antes»

**What:** Construir `/marketing/fotografia-de-producto-panama/` (`fotos-producto-ia`, US$ 480, ya en `precios.json`) cuando llegue la foto de celular del dueño de un producto sin marca (G4): `rotate()` y sin EXIF, 2 o 3 «después» con `fal-ai/nano-banana-pro/edit`, portada con la foto «después» en una laptop, hoja de contactos y la página con el mismo molde que Videos.

**Why:** La página no llegó a su mínimo de ejemplos («antes» y 2 «después») porque la foto no llegó antes del build, y por la regla de D52 no salió en esta tanda.

**Context:** Slug congelado en D52. Si el dueño prefiere una foto de stock con licencia libre (Unsplash o Pexels), hace falta su permiso para descargarla y su fila en `public/images/ejemplos/CREDITOS.json`. Los conteos literales de las pruebas pasan de 26 a 27 servicios.

**Effort:** M (humano) / S (CC)
**Priority:** P2
**Depends on:** La foto del dueño.

### Secciones de Anuncios con IA y de Avatares y voz

**What:** Planificar las 2 secciones que la medición del 20-oct-2026 dejó sin página propia (`MKIA-DEMANDA`): página anfitriona, `id` del bloque y enlaces con ancla, `service.catalogo` y sus pruebas de `offers`, `llms.txt` y KEYWORDS, con una revisión de ingeniería antes de construir. Precios decididos: `anuncios-ia` US$ 780 por 5 creativos y `avatar-ia` US$ 150 por video (no están en `precios.json`).

**Why:** «anuncios con ia» y las 4 palabras de avatar traen solo herramientas en Google; con «panamá», la intención de anuncios es pauta en redes, que ya cubre la página de Meta Ads (`audit/demanda-ia-creativa-2026-10.md`).

**Context:** El avatar se hace con `fal-ai/kling-video/ai-avatar/v2/pro` (D6), no con Higgsfield.

**Effort:** M (humano) / M (CC)
**Priority:** P3
**Depends on:** La lectura de P + 28 de Videos.

### Un artículo de blog por servicio de IA

**What:** Un artículo por página de IA creativa, por ejemplo «cuánto cuesta un video publicitario con IA en Panamá», enlazado a su página.

**Why:** Las palabras de servicio tienen poco volumen y mucha intención de herramienta; un artículo informativo capta la búsqueda que hoy se llevan Canva y HeyGen y la lleva al paquete.

**Context:** El blog estaba fuera del radio de D52. Se adelanta si la lectura de P + 28 da 0 impresiones.

**Effort:** M (humano) / S (CC)
**Priority:** P3
**Depends on:** Medir las páginas de IA creativa.

### Caso real con piezas de IA de un cliente, con permiso

**What:** Reemplazar el bloque «Casos de clientes» en blanco de la página de Videos por un caso real, con el permiso del cliente y una métrica medida.

**Why:** Hoy los ejemplos son de negocios ficticios hechos por nosotros, y la página lo dice.

**Context:** Mismo criterio de permisos que los logos de clientes (D50).

**Effort:** M (humano) / S (CC)
**Priority:** P3
**Depends on:** El primer cliente del paquete.

### Paquete recurrente de IA creativa atado a la pauta

**What:** Un plan mensual de videos (y, si salen, anuncios) junto a la gestión de pauta, con su precio en `precios.json`.

**Why:** Es el segundo multiplicador de la épica: el paquete de un solo pago no repite. Hoy la página dice «se cotiza aparte», sin cifra (U3).

**Context:** El dueño decide el precio con su regla de siempre: el punto medio del mercado publicado, con fuentes.

**Effort:** S (humano) / S (CC)
**Priority:** P2
**Depends on:** Decisión de precio del dueño.

### Superlativos sin fuente fuera del radio de D52

**What:** Quitar «Creativos que detienen el scroll» de la página de Meta Ads (`src/lib/pages/marketing.ts`, bloque «Qué incluye»), «El canal con mejor retorno» de la descripción congelada de Email marketing (necesita un permiso de D36 en `scripts/cambios-permitidos.json`) y del blog (`src/lib/pages/blog-4.ts`).

**Why:** Son afirmaciones sin fuente. El hub y `/servicios/` ya no las dicen desde el 20-oct-2026.

**Context:** La descripción de Email marketing está en el snapshot de `seo-congelado`.

**Effort:** S (humano) / S (CC)
**Priority:** P3
**Depends on:** —

### Regenerar los ejemplos de IA creativa

**What:** Cada 6 meses, o cuando cambie el modelo, rehacer los videos y la portada de ejemplo con su propio tope de gasto y archivos con nombre nuevo (`-v2`, por la caché de 30 días de nginx).

**Why:** Los ejemplos envejecen con los modelos: un video de 2026 se verá viejo en 2027.

**Context:** El método está en D52 («Método de los videos con voz») y en `scripts/gasto-ia.mjs`.

**Effort:** S (humano) / S (CC)
**Priority:** P3
**Depends on:** —

### Muestras personalizadas de anuncios con IA para prospectar

**What:** 3 piezas hechas para un negocio concreto de Panamá, que Nicole envía con la página de Videos como destino; reusa el patrón de Fábrica de Webs.

**Why:** Una muestra hecha para el prospecto vende más que un ejemplo genérico.

**Context:** El gasto de cada muestra va en `audit/imagenes-ia-2026-10.json` con `scripts/gasto-ia.mjs` y una tanda propia.

**Effort:** M (humano) / S (CC)
**Priority:** P2
**Depends on:** —

## Completed
