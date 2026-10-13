<!-- /autoplan restore point: "C:\\Users\\JosimarG\\Projects\\elementoweb\\.gstack\\tmp\\autoplan\\main-autoplan-restore-20261012-232232.md" -->
## Implementation plan
# Rediseño de elementoweb.com: la agencia, sus servicios y su sistema de diseño

Estado: borrador para aprobación del dueño (12 de octubre de 2026). Nada de esto está construido. PRECEDENCIA: las enmiendas S1 a S6 y R1 a R41 de la lista de obligaciones aceptadas, al final de este documento, prevalecen sobre el cuerpo en cualquier conflicto. La tabla de fases de la sección 10 queda reemplazada por R26; la tabla de precios de la sección 6, por R27.
Sistema visual: `DESIGN.md` en la raíz (Comprobante, Roboto única familia).
Criterio de todo cambio: SEO y GEO avanzados, para posicionar «agencia de diseño web» y «diseño web panama».

## 0. Instrucciones del dueño que mandan sobre este documento

| Fecha | Instrucción | Efecto |
|---|---|---|
| 12-oct | «esta web se debe ir posicionando en google: agencia de diseño web, diseño web panama; el seo es lo más valioso para conseguir clientes» | Cada decisión se juzga primero por SEO y GEO |
| 12-oct | «debemos superar por 100% a todo lo que ya está en el mercado. el landing debe ser profesional con imágenes bien pro generadas; cada sección debe hablar claro del servicio, por qué es mejor; bloques claros y explicativos; el formulario debe estar a nivel con todos nuestros servicios» | Anatomía de sección, marcador de 10 puntos, formulario por servicio, ilustración propia por servicio |
| 12-oct | «la tipografía en todo el sitio web debe ser roboto» | Roboto variable autoalojada, sin otra familia |
| 12-oct | «el home se debe vender como agencia de diseño web y la sección de diseño web en su propia página interna. y lo mismo para cada servicio debe estar muy bien pensado y diseñado» | Secciones 2 a 6 de este documento |

## 1. Problema y objetivo

Hoy la portada vende solo diseño web: el H1 es «Diseño web en Panamá que convierte visitas en consultas», y los bloques de precios, «¿qué necesita tu negocio?» y industrias son de diseño web. La agencia (SEO, publicidad, WhatsApp, IA, automatización, CRM propios) aparece más abajo, en un acordeón. Además, `/diseno-web-panama/`, `/servicios/` y la home presentan los mismos cuatro formatos de diseño web, así que compiten entre sí.

Objetivo: que la home venda a Elemento Web como **agencia** con todos sus servicios, que **diseño web** viva completo en su propia página interna, y que **cada servicio** tenga una página profunda, honesta, medible y bien diseñada.

Éxito (se mide, no se opina):

- Search Console: la home gana impresiones y posición para «agencia de diseño web»; `/diseno-web-panama/` no pierde posición para «diseño web panama»; cada página de servicio gana impresiones para su consulta. Comparar contra `audit/gsc-baseline-2026-09.md` a las 4, 8 y 12 semanas.
- PageSpeed móvil de 90 o más y LCP de 2,5 s o menos en home, pilar y cada plantilla de servicio. CLS 0.
- Accesibilidad AA: axe sin hallazgos, contrastes comprobados, foco visible.
- Cada página de servicio cumple los 10 puntos de la sección 5, salvo las de la lista de exclusión (R28).
- Cero imágenes de stock como portada de servicio. Cero datos de resultados sin permiso y fuente.

## 2. Posicionamiento y mapa de palabras clave

Datos de Search Console (28-jul a 27-sep-2026, 6.269 impresiones, posición media 83,4):

| Página | Impresiones | Posición | Qué nos dicen |
|---|---:|---:|---|
| `/` | 13 | 3,6 | Casi invisible para búsquedas genéricas. Solo aparece en búsquedas de marca |
| `/diseno-web-panama/` | 1.569 | 89,5 | Es la página que Google ya asocia con «diseño web panama» (175) y «diseño web en panama» (187) |
| `/servicios/diseno-web-corporativo-panama/` | 447 | 93,3 | Segunda página con tracción de diseño web |
| Consultas fuera de diseño web | | | «seo panama» 268, «google ads panama» 202, «posicionamiento web en panama» 181 |

Conclusión: la home no rinde nada con el H1 actual, y la página que Google ya muestra para diseño web es la pilar. Por eso cambiar la home cuesta casi nada en SEO y especializar la pilar sí es una ganancia. Las búsquedas de SEO y Google Ads tienen más impresiones que las de diseño web, así que esos servicios necesitan páginas fuertes ya.

Regla: **una intención de búsqueda, una página.**

| Intención | Página | Reglas |
|---|---|---|
| «agencia de diseño web (en Panamá)», marca, confianza | `/` | Title actual se conserva (`Agencia de Diseño Web en Panamá | Elemento Web`). Cambia el H1 y la estructura |
| «diseño web panama», «diseño web en panama», «páginas web» | `/diseno-web-panama/` | URL, title y H1 NO se tocan. Solo se amplía el contenido |
| Catálogo de todos los servicios | `/servicios/` | Ya es un catálogo de toda la agencia (bloque `catalog`), pero su H1 («Servicios de diseño web») y su bloque de precios de web lo leen como página de diseño web. Cambian el H1, el title, la description y la bajada a «Servicios» de la agencia, y el precio de web se queda solo en la pilar y en `/precios/` (R35) |
| Cada servicio | Su propia página | Una palabra clave principal por página, sin repetirla en otra |
| Industrias y ciudades | `/industrias/*`, `/miami/*` | Sin cambios de URL |

Ninguna URL cambia ni se redirige. El H1 de la home sí cambia: propuesta «Agencia de diseño web en Panamá que te trae clientes», con una línea debajo que nombra el resto (SEO, publicidad, WhatsApp e IA). La redacción final la aprueba el dueño.

## 3. Home: de «vendo web» a «soy la agencia»

| Sección actual | Qué pasa | Destino |
|---|---|---|
| Héroe «Diseño web en Panamá que convierte…» | Se reescribe | Héroe de agencia, con comprobante «esta página, medida hoy» y riel de servicios |
| Tira de logos | Se queda | Solo clientes reales confirmados por el dueño |
| «Diseño que des…» (showcase) | Se queda como prueba | Proyecto real con captura propia; el resultado medido va en blanco hasta tener permiso |
| «¿Qué necesita tu negocio ahora?» | Se mueve | Pilar `/diseno-web-panama/` (elige el formato de web) |
| «Precios claros, sin sorpresas después» | Se mueve | Pilar y `/precios/` |
| «Sin letra chica» | Se mueve | Pilar y `/precios/` |
| «¿Tu web está ayudando…?» (CTA) | Se reescribe | CTA de agencia, hacia el formulario |
| «Un solo equipo para toda tu presencia digital» | Pasa a ser el centro de la home | Mapa de servicios (sección 3.1) |
| Proceso en 4 etapas | Se queda | Igual, con entregables verificables |
| «Diseño web pensado para tu industria» | Se compacta | «Industrias que atendemos», enlaza a `/industrias/` |
| Equipo | Se queda | Solo personas con permiso |
| IA y automatización | Se integra al mapa de servicios | Ya no es sección aparte |
| Preguntas frecuentes | Se reescriben | Preguntas de agencia (6 o más), mismo texto en schema FAQPage |
| Formulario | Pasa a formulario por servicio | Sección 7 |

### 3.1 Mapa de servicios (corazón de la home)

Filas, no tarjetas iguales. Cada fila: qué resuelve, para quién, precio de partida solo si está confirmado por el dueño, enlace a su página.

1. Diseño web → `/diseno-web-panama/`
2. Tiendas online → `/servicios/tiendas-online-ecommerce-panama/`
3. SEO y posicionamiento → `/crecimiento/seo-posicionamiento-web-panama/`
4. Publicidad en Google y Meta → `/marketing/google-ads-panama/` y `/marketing/facebook-instagram-ads-panama/`
5. WhatsApp marketing → `/marketing/whatsapp-marketing-masivo-panama/`
6. IA y automatización → `/inteligencia-artificial-para-empresas-panama/` y `/marketing/automatizaciones-n8n-panama/`
7. Software propio (WazaCRM, NousCRM, Cifrao) → `/saas/`

### 3.2 Estructura de datos y GEO de la home

- Respuesta citable de 40 a 60 palabras justo después del héroe, con fecha: quiénes somos, dónde (Ciudad de Panamá y Miami remoto), qué hacemos, cómo cobramos.
- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (ya existen) más un `ItemList` de `Service` con los servicios y sus URL, sin `Offer` (R37). El FAQPage sale del bloque visible.
- Enlazado interno: la home enlaza a todas las páginas del mapa 3.1; cada servicio enlaza de vuelta a la home y a su hub.

## 4. Página pilar `/diseno-web-panama/`

Se queda con su URL, title y H1. Se amplía para absorber lo que sale de la home:

1. Respuesta citable de «diseño web en Panamá» con fecha.
2. Los cuatro formatos con alcance, plazo y precio de partida publicados (landing 550, empresarial 1.250, tienda 1.950, a medida 2.900), en filas.
3. Selector «qué formato necesito» (el bloque «¿Qué necesita tu negocio?»).
4. Comparativa de 8 criterios verificables con columna en blanco «tu otra cotización».
5. Qué incluye siempre y qué se paga aparte (fuente única: `src/lib/site.ts`).
6. Tecnologías (WordPress, Shopify, a medida) y por industria (enlaces).
7. Proyectos reales y comprobante medido de esta página.
8. FAQ de 8 o más preguntas con schema.
9. Formulario con el servicio «Diseño web» preseleccionado.

`/servicios/` conserva su catálogo de toda la agencia, cambia su H1 y su bajada para dejar de leerse como página de diseño web, y deja de repetir la tabla de precios de web (sección 6).

## 5. Plantilla de página de servicio

Anatomía fija:

1. Portada: H1 real de la página, respuesta corta, botón propio del servicio, ilustración 3D propia, comprobante con precio de partida o «cotización cerrada por escrito».
2. Respuesta citable de 40 a 60 palabras con fecha.
3. Evidencia: comprobante, captura o tabla.
4. Por qué es mejor: criterios que el visitante puede verificar, con columna «tu otra cotización». Nunca se ataca a un tercero y toda afirmación sale de la oferta publicada.
5. Qué incluye y qué no.
6. Cómo lo hacemos (proceso) y plazo.
7. Prueba: proyecto real y su medición, o el blanco honesto.
8. Preguntas frecuentes (6 o más) con el mismo texto en schema FAQPage.
9. Servicios relacionados y siguiente paso.
10. Formulario del servicio.

Marcador de 10 puntos (una página no sale si le falta uno): alcance, entregables, precio de partida (o cotización cerrada, explícito), plazo, qué no incluye, FAQ de 6 o más, schema Service y FAQPage con `Offer` cuando hay precio, una medición real con fecha, prueba de proyecto, comparación con criterios verificables.

Bloques nuevos en `src/lib/types.ts` y `Blocks.astro`: `answer` (respuesta con fecha), `receipt` (comprobante), `compare` (criterios con columna en blanco), `includes` (incluye / no incluye). El marcador lo valida un script que lee `dist/` (R2, R28), no un bloque renderizado.

## 6. Inventario de servicios y olas de trabajo

25 páginas de servicio, 6 hubs (`servicios`, `crecimiento`, `marketing`, `tecnologias`, `funcionalidades`, `saas`) y la pilar. De las 25 páginas, 23 salen de la plantilla compartida (`src/pages/[...slug].astro` más `src/lib/pages/*.ts`) y 2 son páginas hechas a mano que NO usan la plantilla: `inteligencia-artificial-para-empresas-panama` y `funcionalidades/integracion-cybersource-panama`. La de IA migra a la plantilla en la ola 2 y la de cybersource en la ola 3 (R10); mientras tanto la lista fija `scripts/exclusiones-marcador.json` las cubre (R28). Precio publicado: si no está confirmado por el dueño, la página dice «cotización cerrada por escrito» y no inventa cifra.

| Ola | Páginas | Por qué primero |
|---|---|---|
| 1 | Home, pilar `diseno-web-panama`, `servicios/diseno-web-corporativo-panama`, `crecimiento/seo-posicionamiento-web-panama`, `marketing/google-ads-panama` | Son las que Google ya muestra (diseño web 1.569 y 447 impresiones; SEO 268; Google Ads 202). Estrenan la plantilla, el formulario y las ilustraciones |
| 2 | `servicios/tiendas-online-ecommerce-panama`, `servicios/landing-pages-alta-conversion-panama`, `servicios/redisenio-web-panama`, `marketing/whatsapp-marketing-masivo-panama`, `funcionalidades/chatbots-ia-web-wazacrm-panama`, `inteligencia-artificial-para-empresas-panama`, `crecimiento/seo-local-google-maps-panama` | Servicios de mayor valor por cliente |
| 3 | El resto: Meta Ads, contenido, email, n8n, tecnologías, funcionalidades, mantenimiento, hosting, SaaS | Mismo molde, ya probado |

Precios hoy:

| Servicio | Precio publicado en el sitio | Estado |
|---|---|---|
| Diseño web (4 formatos) | 550 / 1.250 / 1.950 / 2.900 | Confirmado (`site.ts`) |
| Mantenimiento e infraestructura | desde 59 al mes y desde 350 al año | Confirmado |
| WazaCRM | desde 349 al mes | Confirmado |
| Plan gestionado | 350 de puesta en marcha más 169 al mes | Confirmado (`site.ts`) |
| Google Ads y Meta (gestión), trafficker dedicado, contenido, email, WhatsApp, n8n | desde 300 al mes; 300 al mes por cuenta; desde 250 al mes; desde 200 al mes; desde 150 al mes; desde 300 por automatización | **Propuestos**: ya publicados hoy con el comentario «propuesto» o «Confirmar» en `marketing.ts`. Se conservan en el texto, pero no entran en `Offer` ni en la respuesta citable (R27) |
| SEO, IA | sin precio publicado | **Falta** decisión del dueño |

## 7. Formulario a nivel de todos los servicios

Un solo componente, 13 servicios más «Otro». Ficha de servicio accesible (radio), y al elegirla cambian título, preguntas, botón y lo que viaja. Obligatorios: nombre, correo y WhatsApp. Cada pregunta se guarda en su campo y no en un texto libre.

- Payload a n8n: se conservan los campos actuales (`origen` ya se envía hoy) y se suman `detalle` (un objeto por servicio) y `servicio_clave`; `servicio` conserva su etiqueta de texto. n8n lo envía a WazaCRM como hoy, con el servicio y el detalle (R30).
- GA4: `generate_lead` con `service`. El envío sigue pasando por el flujo de n8n de Hetzner (envío por API de Brevo).
- Los botones de cada página abren el formulario con su servicio preseleccionado.
- Prototipo funcional en la vista previa aprobada (12-oct), con validación, foco al primer error y payload en vivo.

## 8. Imágenes

- Una ilustración 3D de vidrio por página de servicio, 3:2, sin texto, personas ni logos, con alt descriptivo e `ImageObject`.
- Ya existen para las páginas generadas con fal. Las portadas de tiendas y landing siguen siendo fotos de stock: se regeneran.
- Necesita presupuesto nuevo de fal (el tope de $3 está gastado). Estimado: nano-banana-2 a $0,08 por imagen; el modelo superior (unos $0,15) solo para unas 8 portadas clave. Se pide aprobación antes de generar.
- Las capturas de proyectos son reales y llevan permiso del cliente.

## 9. Rendimiento, accesibilidad, SEO y GEO (criterios de aceptación)

- Contenido en el HTML sin JavaScript. Sin `opacity:0` en el elemento LCP. `prefers-reduced-motion` respetado. AA y CLS 0.
- Roboto variable, una precarga, `font-display: swap`. Medido con la misma herramienta que la línea base (Lighthouse local con 150 ms por petición).
- `qa-seo`, `check-links` y axe sin hallazgos. Title y meta description únicos. Canonical correcto. `sitemap` sin cambios de URL.
- Schema válido: `Service` + `Offer` (cuando hay precio), `FAQPage` derivado del bloque visible, `BreadcrumbList`, `ImageObject`, `ItemList` de `Service` en la home (R37), con `Offer` solo si el precio está confirmado (R27).
- `llms.txt` actualizado con el mapa de servicios.

## 10. Fases y plan de pruebas (la tabla siguiente queda reemplazada por R26)

| Fase | Entrega | Prueba |
|---|---|---|
| 0 | Roboto en el sitio (en curso, local) | Lighthouse A/B, CLS, capturas |
| 1 | Tokens de `DESIGN.md` en `global.css` y plantilla de servicio (ola 1) | Héroe y botón a 1440×900 y 390×844, contraste, axe |
| 2 | Home de agencia y pilar ampliada | GSC antes y después, qa-seo, check-links |
| 3 | Formulario por servicio + n8n + NousCRM + GA4 | Envío de punta a punta con lead de prueba |
| 4 | Ola 2 y ola 3 | Marcador de 10 puntos validado en el build |

Cada fase se publica por separado, con aprobación explícita del dueño para cada push a `main`, y con `scripts/check-prod.sh` y `gh run watch` después del despliegue.

## 11. Riesgos

| Riesgo | Mitigación |
|---|---|
| Cambiar el H1 de la home | La home tiene 13 impresiones. Se conserva el title. Se toma un export nuevo de Search Console el día antes del despliegue |
| Canibalización entre home, pilar y `/servicios/` | Mapa de intenciones de la sección 2 y una sola palabra clave principal por página |
| Roboto altera anchos y mueve el diseño | Medir CLS y LCP antes de publicar; fallback con `size-adjust` |
| Afirmar de más («somos mejores») | Solo criterios verificables salidos de la oferta publicada; sin cifras ni logos sin permiso |
| Precios no confirmados | Se muestra «cotización cerrada por escrito». No se inventa ninguno |
| Presupuesto de imágenes | Se pide antes de generar |
| Algo sale mal en producción | Revertir con `git revert` y volver a desplegar; sin cambios de URL ni redirects que deshacer |

## 12. Preguntas abiertas para el dueño

1. ¿Apruebas el H1 «Agencia de diseño web en Panamá que te trae clientes», o prefieres otra redacción?
2. Precios de partida para SEO, Google Ads, Meta Ads, WhatsApp marketing, IA y automatización: ¿cuáles confirmas y cuáles se quedan en «cotización cerrada por escrito»?
3. Presupuesto de fal para las ilustraciones de servicio (estimado en la sección 8).
4. ¿Los 23 logos de la tira de la home son todos clientes reales y con permiso?
5. ¿Hay algún caso de éxito con cifras que el cliente autorice publicar?

## 13. Fuera de alcance

Cambios de URL o redirects, el logo, las propuestas, demos y presentaciones de clientes, el blog (80 artículos) salvo enlazado y tipografía, y cualquier backlink o contenido externo. Diferido: S7 (autoridad externa) y S8 (casos con cifras) en `TODOS.md`; omitidos: S9 y S10. La posición en Search Console es un indicador rezagado y depende de S7 (R39).

<!-- autoplan-accepted:ceo -->
- S1: archivo de mediciones con fecha (`src/data/mediciones.json` o equivalente) del que sale el comprobante; el build marca como «sin medir» toda cifra con más de 45 días y falla si falta la fecha. Verificación: prueba del build con una fecha vieja y una ausente.
- S2: cada página de servicio genera su mensaje de WhatsApp con el nombre del servicio. Verificación: prueba que lee el href de cada página de servicio.
- S3: el validador del marcador exige que cada servicio enlace a su hub, a la home y a al menos 3 servicios relacionados. Verificación: el build falla en una página sin esos enlaces.
- S4: eventos GA4 `cta_click` y `form_start` con el parámetro `service`; sin cookies nuevas ni datos personales en el evento. Verificación: lectura de `dataLayer` en una prueba de navegador.
- S5: puerta previa al despliegue de la home: verificar la demanda de «agencia de diseño web» con el Planificador de palabras clave y una revisión de la SERP, y dejar el resultado en `audit/`. Si la demanda es nula, el H1 final se decide con el dueño. No bloquea la construcción.
- S6 (TASTE): migrar las 2 páginas de servicio hechas a mano a la plantilla en la ola 3; si no se migran, quedan excluidas del validador con una lista escrita y justificada.
- Correcciones del plan aceptadas: 25 páginas de servicio y 6 hubs; blog de 80 artículos; `/servicios/` ya es catálogo y solo cambia su H1, su bajada y su bloque de precios.
- Honestidad: la insignia «Meta Verified Tech Provider» y los 23 logos de la home no se copian ni se repiten en ninguna página nueva hasta que el dueño los confirme por escrito. Siguen donde están hoy y se preguntan en el gate final; si el dueño no los confirma, se retiran.
- R1 (fases): Fase 1 = validador del marcador (script, no bloque), esquema de mediciones y bloque `receipt`, componente del formulario por servicio con payload aditivo, `KEYWORDS.md`, `SCORECARD.md` y `npm run verify`. Fase 2 = home de agencia, pilar ampliada, `/servicios/` y `/precios/`, con la puerta S5 y las preguntas bloqueantes del dueño resueltas antes del despliegue. Fase 3 = integración n8n y NousCRM, eventos GA4 y WhatsApp por servicio. Fase 4 = olas 2 y 3 y los 6 hubs (en la ola 3). Esta lista reemplaza la tabla de fases del SPEC al implementar.
- R2 (marcador por tipo de página): `scorecard` es solo un script del build y deja de ser un bloque renderizado. Cada uno de los 10 puntos se asigna a un campo tipado de `PageData` y a una regla de conteo por tipo de página (servicio con precio, servicio con cotización cerrada, producto o plan recurrente), escrito en `docs/specs/rediseno-elementoweb/SCORECARD.md`. El blanco honesto etiquetado («sin publicar aún», «sin medir») cumple los puntos de medición y de prueba de proyecto, así que S8 (diferido) no bloquea. Verificación: pruebas del validador con una página válida, una a la que le falta cada punto y una con blanco honesto.
- R3 (reemplaza la condición de S1 sobre el build): la caducidad de una cifra solo degrada lo visible a «medido el DD/MM» y nunca rompe el build; `astro build` (el que corre el Dockerfile) no depende del reloj ni del validador. Las verificaciones duras (fecha faltante, marcador incompleto, enlaces) corren en `npm run verify` antes de cada push. Verificación: el Dockerfile sigue ejecutando solo `npm run build`.
- R4 (`npm run verify`): script único que encadena `qa-seo.mjs`, `check-links.mjs`, `qa-a11y.mjs`, el validador del marcador y pruebas con `node:test` y fecha inyectable, sin dependencias nuevas. Verificación: `npm run verify` sale con código distinto de cero si cualquiera falla.
- R5 (mediciones): esquema `{url, metrica, valor, herramienta, fecha, metodo}`; `scripts/medir.mjs` usa el CLI de Lighthouse ya instalado (no se añade a `package.json`) y escribe el archivo; la cifra se rotula «medido el DD/MM»; se renueva con un comando cada 45 días como máximo. El criterio de PageSpeed se mide con la misma herramienta que la línea base y se confirma con PageSpeed Insights después del despliegue.
- R6 (formulario): la Fase 1 construye el componente con los 13 servicios más «Otro», cada uno con sus preguntas, y un payload aditivo: se conservan todos los campos actuales (`nombre`, `empresa`, `email`, `telefono`, `web`, `inicio`, `servicio`, `presupuesto`, `mensaje`, `modalidad`, `intento`, `fecha`, `botcheck`) y se suman `origen` y `detalle`. Incluye un aviso visible del uso de los datos, el id de intento y estados de error. Precondición de la Fase 3: actualizar `docs/contacto-n8n/workflow.json` y subirlo con `scripts/subir-flujo-contacto.mjs` ANTES de activar los campos nuevos en producción, y probar de punta a punta con un lead de prueba que n8n y NousCRM aceptan servicio y detalle (borrar el lead de prueba después). El rollback con `git revert` no revierte n8n: el flujo nuevo debe seguir aceptando el payload viejo.
- R7 (reemplaza S4): `src/scripts/track.ts` ya emite `cta_click` con `service` y `form_start`; lo que falta es añadir `service` a `form_start`, `form_error` y `click_whatsapp` cuando la página tiene servicio. Los botones de página apuntan a `/contacto/?servicio=<clave>#formulario` (así `track.ts` los mide); el formulario embebido en la página emite sus propios eventos. Esfuerzo XS. Verificación: lectura de `dataLayer` en una prueba de navegador.
- R8 (reemplaza S2): la plantilla ya deriva el mensaje de `page.h1` (`src/pages/[...slug].astro:21`); se estandariza como «Hola, me interesa <servicio>.» y solo se sobrescribe donde un `cta.wa` existente sea mejor. Esfuerzo XS. Verificación: prueba que lee el href de WhatsApp de cada página de servicio.
- R9 (reemplaza S5): S5 es informativa y no tiene umbral que bloquee; se anotan la demanda y la SERP en `audit/` antes de la Fase 2 y la redacción del H1 sigue siendo decisión del dueño. Orden: S5, luego aprobación del dueño, luego construcción de la home.
- R10 (reemplaza S6): `inteligencia-artificial-para-empresas-panama` migra a la plantilla en la ola 2 y `funcionalidades/integracion-cybersource-panama` en la ola 3; el validador acepta una lista de exclusión temporal con fecha de caducidad solo para cybersource hasta la ola 3. «Sin excepción» se lee con esa lista. Sigue siendo taste.
- R11 (precios vivos): los precios ya publicados hoy se conservan tal cual, incluido «desde $300/mes» de Google Ads y Meta; no se agrega ningún precio nuevo sin confirmación del dueño. La pregunta 2 deja de ser bloqueante: solo decide qué precios nuevos se agregan.
- R12 (presupuesto de fal): antes de generar, tabla página × estado (existe o falta) × modelo × costo con el total; tope duro de $4 incluyendo reintentos; orden por ola; al llegar al tope se detiene y se pide aprobación. Las 56 imágenes débiles quedan fuera.
- R13 (honestidad): la insignia «Meta Verified Tech Provider» (`src/pages/index.astro:108` y `:660`), «Equipo 100% interno» (`:660`) y los 23 logos se confirman con el dueño ANTES de la Fase 2; sin confirmación escrita se retiran de la home de agencia. Esto reemplaza «se preguntan en el gate final».
- R14 (palabras clave): `docs/specs/rediseno-elementoweb/KEYWORDS.md` con página, palabra clave principal, palabras reservadas a otra página y fuente de Search Console, para las 25 páginas, los 6 hubs, la home, la pilar y `/precios/`, antes de escribir contenido en la Fase 1. Ninguna palabra clave principal se repite en dos páginas.
- R15 (éxito): indicadores adelantados (indexación de las páginas de cada ola e impresiones por página) y rezagados (posición); nueva línea base completa (las 164 consultas y todas las páginas) el día antes de cada despliegue de ola; verificación GEO manual cada 4 semanas con un panel fijo de 10 preguntas a 2 o 3 asistentes de IA, con el resultado en `audit/`.
- R16 (páginas y hubs): `/servicios/` y `/precios/` entran en la Fase 2 con la home y la pilar. `/precios/` es la tabla canónica de todos los precios; la pilar muestra los 4 formatos de web desde la misma fuente (`src/lib/site.ts`) y enlaza a `/precios/`. Los 6 hubs entran en la ola 3.
- R17 (ola 3 explícita): las 15 páginas son `marketing/facebook-instagram-ads-panama`, `marketing/contenido-redes-sociales-panama`, `marketing/email-marketing-panama`, `marketing/automatizaciones-n8n-panama`, `tecnologias/diseno-web-wordpress-panama`, `tecnologias/diseno-web-shopify-panama`, `tecnologias/desarrollo-web-a-medida-vue-react-panama`, `funcionalidades/integracion-yappy-pasarelas-pago-panama`, `funcionalidades/sistemas-reservas-citas-online-panama`, `funcionalidades/integracion-cybersource-panama`, `crecimiento/mantenimiento-web-panama`, `crecimiento/hosting-infraestructura-panama`, `saas/wazacrm`, `saas/nouscrm` y `saas/cifrao`.
- R18 (rendimiento de la home): el Preloader (importado solo en `src/pages/index.astro:77`) se retira de la home de agencia salvo que la medición demuestre LCP de 2,5 s o menos con él; `.js .reveal { opacity: 0 }` (`src/styles/global.css:57`) nunca se aplica a elementos de la primera pantalla ni al elemento LCP; el contenido es visible sin JavaScript.
- R19 (reglas de contenido): la prueba de proyecto y la medición se reutilizan solo si son reales y atribuidas, con un máximo de un proyecto de prueba por página; sin prueba disponible se imprime el blanco honesto etiquetado. El schema no incluye `AggregateRating` ni `Review` y el validador lo prohíbe.
- R20 (respuesta fechada y comparación): el bloque `answer` usa un campo manual `fecha` alineado con `dateModified`, nunca la fecha del build. La columna «tu otra cotización» son celdas vacías imprimibles, sin campos ni JavaScript.
- R21 (prototipo): copiar `design-preview.html` (la vista previa aprobada del 12-oct) a `docs/specs/rediseno-elementoweb/prototipo/` como artefacto durable.
- R22 (enlazado): parámetros revisables de S3: cada servicio enlaza a su hub (a `/servicios/` si no tiene hub), a la home y a 3 o más servicios relacionados, que pueden ser de otros hubs.
- R23 (limpieza): `@fontsource/inter` y `@fontsource/outfit` ya no se usan tras pasar a Roboto; se quitan de `devDependencies` y del lockfile.
- R24 («gate final»): «gate final» es la puerta de aprobación final de este /autoplan. Las respuestas del dueño que bloquean construcción (insignia, logos, H1) tienen como fecha límite «antes de la Fase 2».
- R25 (ruta crítica): cada decisión del dueño tiene un valor por defecto si no responde: H1 = la propuesta; fal = tope de $4; logos e insignia = retirar; precios nuevos = «cotización cerrada por escrito»; casos con cifras = blanco honesto.
- R26 (tabla de fases única; reemplaza la sección 10 y R1): Fase 0 = Roboto, `DESIGN.md`, `CLAUDE.md` y este SPEC (commits `4cdaab4` y `f0720e5`, locales; el dueño aprueba el push). Fase 1, Fundación = paso 0 con el export completo de Search Console y la línea base de PageSpeed Insights en `audit/baseline-perf.md`; tokens de `DESIGN.md` en `global.css`; bloques `answer`, `receipt`, `compare` e `includes`; componente `ServiceForm` construido pero sin activar; validador que lee `dist/`; `npm run verify`; `KEYWORDS.md`, `SCORECARD.md` y `FORMULARIO.md`; archivo y script de mediciones; `llms.txt` base; limpieza de `@fontsource`. Fase 2, Ola 1 y home = ilustraciones de la ola 1 (pilar, corporativo, SEO, Google Ads, con la tabla y el tope de R12); páginas `servicios/diseno-web-corporativo-panama`, `crecimiento/seo-posicionamiento-web-panama` y `marketing/google-ads-panama` en la plantilla; pilar ampliada; home de agencia; `/servicios/` y `/precios/`; formulario actual (`ContactForm` con `?servicio=`); Puerta B antes del despliegue. Fase 3, Formulario en producción = `workflow.json` acepta payload v1 y v2; subir el flujo; prueba de punta a punta con un lead de prueba en WazaCRM (se borra después); activar `ServiceForm`; eventos GA4 con `service`; WhatsApp estandarizado; actualizar `docs/event-dictionary.md`. Fase 4, Ola 2 = tiendas, landing, rediseño, WhatsApp, chatbots, IA (migrada a la plantilla) y SEO local, con sus ilustraciones. Fase 5, Ola 3 = las 15 páginas de R17 (cybersource migrada) y los 5 hubs restantes (`crecimiento`, `marketing`, `tecnologias`, `funcionalidades`, `saas`). Cada fase se publica con aprobación explícita del dueño por push, con `scripts/check-prod.sh` y `gh run watch`, y con export de Search Console el día antes en las fases 2, 4 y 5. Verificación: cada fase cierra con `npm run verify` en verde.
- R27 (precios; reemplaza la tabla de la sección 6 y R11): inventario verificado con grep. Confirmados: web 550 / 1.250 / 1.950 / 2.900, mantenimiento desde 59 al mes e infraestructura desde 350 al año, plan gestionado de 350 de puesta en marcha más 169 al mes (`src/lib/site.ts`) y WazaCRM desde 349 al mes. Propuestos, publicados hoy con comentario «propuesto» o «Confirmar» en `src/lib/pages/marketing.ts`: gestión de Google Ads y Meta desde 300 al mes, trafficker dedicado 300 al mes por cuenta, contenido desde 250 al mes, email desde 200 al mes, WhatsApp desde 150 al mes y n8n desde 300 por automatización. Sin precio: SEO e IA. Regla: los precios ya publicados se conservan; ni la respuesta citable ni `Offer` en el schema usan un precio propuesto, y el validador comprueba que todo `Offer` salga de un precio confirmado de `site.ts`.
- R28 (validador; reemplaza el origen de datos de R2 y la caducidad de R10): el validador lee `dist/` (HTML, JSON-LD y atributos `data-*` que la plantilla emite: `data-page-type` en `<main>` y los datos de cada punto); no importa TypeScript. Tipos de página: servicio con precio, servicio cotizado, producto o plan, home, pilar, hub y precios; home, pilar, hubs y precios se validan con reglas reducidas escritas en `SCORECARD.md` (schema válido, respuesta citable, preguntas frecuentes y enlaces). Comprueba también la respuesta de 40 a 60 palabras (servicios y pilar), preguntas frecuentes de 6 o más en servicios y de 8 o más en la pilar, ausencia de `AggregateRating` y `Review`, y la lista de afirmaciones bloqueadas. Informa por página cuántos de los 10 puntos tienen evidencia y cuántos son blanco honesto (indicador, no bloquea). Las páginas hechas a mano se cubren con la lista fija `scripts/exclusiones-marcador.json`, con motivo y sin caducidad. Verificación: pruebas con `node:test` para una página válida, una a la que le falta cada punto, una con blanco honesto y una excluida.
- R29 (verify y CI; reemplaza R4 donde choca): `npm run verify` ejecuta `astro build`, levanta `astro preview` en un puerto libre y corre `qa-seo`, `check-links`, el validador, las pruebas y `qa-a11y` (cuya lista `PAGES` se amplía a las 3 páginas de servicio de la ola 1, la home, la pilar y `/precios/`; en Windows exige `CHROMIUM_PATH`); al terminar cierra el preview. Un job de CI previo al despliegue en `.github/workflows/deploy.yml` corre `npm ci`, `astro build`, `qa-seo`, `check-links`, el validador y las pruebas, sin navegador; axe y responsive corren en local antes de cada push. Verificación: un cambio que rompe el validador deja el job en rojo y el despliegue no corre. El Dockerfile sigue ejecutando solo `npm run build`.
- R30 (formulario; reemplaza R6 donde choca): el destino del lead es WazaCRM, vía n8n (`docs/contacto-n8n/armar-lead-crm.js`), no NousCRM. `origen` ya se envía hoy (`src/components/ContactForm.astro:173`); lo nuevo es `detalle` (objeto por servicio) y `servicio_clave`; `servicio` conserva la etiqueta de texto actual para no romper n8n. La fuente normativa de los 13 servicios, sus claves, sus preguntas y la forma de `detalle` es `docs/specs/rediseno-elementoweb/FORMULARIO.md`, derivada de `prototipo/design-preview.html`. El componente nuevo se construye en la Fase 1 pero se activa en la Fase 3, después de actualizar y probar n8n; las fases 1 y 2 usan `ContactForm` con `?servicio=`. `src/scripts/track.ts` obtiene `service` de un atributo `data-service` del `<main>` o del enlace. Se actualiza `docs/event-dictionary.md`.
- R31 (S5 unificada): S5 es informativa; no bloquea construir y bloquea solo el despliegue de la home hasta que el dueño apruebe el H1 viendo el resultado.
- R32 (R25 corregida): los valores por defecto deciden qué se construye, nunca qué se publica ni qué se gasta. Publicar exige aprobación explícita por push. El gasto en fal fue autorizado por el dueño el 12-oct («procede con todo») hasta el tope de $4, y pasar de ahí exige una aprobación nueva. El H1 se construye con la propuesta y se publica solo con aprobación.
- R33 (afirmaciones sin verificar; reemplaza R13): «Meta Verified», «100% interno» y «equipo interno» aparecen en 9 archivos (`src/components/Footer.astro`, `src/lib/pages/blog-4.ts`, `core.ts`, `diseno-web-panama.ts`, `funcionalidades.ts`, `marketing.ts`, `saas.ts`, `src/pages/index.astro` y `src/pages/inteligencia-artificial-para-empresas-panama/index.astro`). El dueño las confirma antes de la Fase 2; cada página que se rediseña quita las que no estén confirmadas; el validador mantiene la lista de afirmaciones bloqueadas para las páginas que ya pasaron por su ola.
- R34 (permisos): «Equipo: solo personas con permiso» y las capturas de proyectos con permiso del cliente se preguntan al dueño antes de la Fase 2; por defecto no se amplían ni se repiten: solo se usan los proyectos y las personas ya publicados hoy.
- R35 (palabras clave; reemplaza el alcance de R14): paso 0 de la Fase 1 = export completo de Search Console (164 consultas y todas las páginas). `KEYWORDS.md` cubre las páginas comerciales (home, pilar, `/precios/`, 25 servicios y 6 hubs) con title, description y H1 de cada una, incluido `/servicios/` (cambian title y description, no solo el H1). Blog, industrias y Miami quedan fuera de la regla de no repetir, pero no pueden usar como principal la palabra de una página comercial.
- R36 (PageSpeed vinculante; reemplaza R5 en lo de la herramienta): PageSpeed Insights móvil es la medida vinculante (línea base de `audit/changelog-final.md`: home 89, corporativo 85); se captura antes de la Fase 1 en `audit/baseline-perf.md`. Lighthouse local con 150 ms de latencia es el indicador de trabajo y no cuenta como gate. Presupuesto del LCP: portada en WebP de 60 KB o menos a 1200 px, con dimensiones declaradas y `fetchpriority=high`.
- R37 (schema de la home): la home usa un `ItemList` de `Service` sin `Offer`, porque `scripts/qa-seo.mjs:34` exige precio mayor que cero en cada oferta de un `OfferCatalog`; `OfferCatalog` queda solo en `/precios/`.
- R38 (GEO; reemplaza R15 en lo del panel): se reutiliza `docs/geo-panel-preguntas.md` (20 preguntas, 5 motores, cadencia mensual) y se fija un subconjunto de 10 preguntas para las verificaciones de cada ola; el resultado va en `audit/`.
- R39 (trazabilidad): la sección 13 queda con diferido S7 (autoridad externa) y S8 (casos con cifras) en `TODOS.md`, omitidos S9 y S10, y la posición en Search Console como indicador rezagado que depende de S7.
- R40 (precisiones): `PageData` gana un campo opcional `serviceName` (nombre corto del servicio) para el mensaje de WhatsApp y el formulario, con la regla `serviceName ?? h1`; se crea `src/data/`; el import del Preloader está en `src/pages/index.astro:5` y su uso en `:77`; la home enlaza a todas las páginas del mapa 3.1; «gate final» es la puerta de aprobación de este /autoplan y «Puerta B» son las confirmaciones del dueño antes de la Fase 2; R21 ya está copiado en el árbol de trabajo y falta su commit.
- R41 (mediciones): `scripts/medir.mjs` mide la URL de producción después de desplegar; una página sin desplegar queda con blanco honesto; `npm run verify` avisa, sin fallar, cuando una medición vence en menos de 10 días.
- R42 (documento normativo; tercera revisión): `docs/specs/rediseno-elementoweb/DECISIONES.md` fija lo que se construye y prevalece sobre el cuerpo y sobre cualquier enmienda anterior. Su tabla de vigencia declara qué enmiendas quedan reemplazadas (S1, S2, S4, S5, S6, R1, R3 a R11, R13 a R16 y R25) y resuelve los 37 hallazgos de la tercera revisión (D1 a D14 y la sección 4 de trazabilidad). Alcance base aprobado por el dueño el 12-oct («procede con todo»): secciones 3 a 7 del SPEC, más R6, R15, R16 y R17 en la forma que fija DECISIONES.md. Verificación: DECISIONES.md existe, cada hallazgo apunta a una decisión, y la tabla de vigencia cubre todas las enmiendas.
- R43 (voces independientes de la fase de estrategia; D15 a D19 de `DECISIONES.md`): S7 pasa de diferido a frente paralelo de autoridad desde la fase 1 (D15, taste); línea base de leads, 5 compromisos verificables y revisión de datos a las 8 y 12 semanas (D16); la medición nunca queda en blanco y ninguna página sale con medición y prueba de proyecto en blanco a la vez (D17); el resultado de S5 va al dueño antes de la fase 2b como entrada de arquitectura (D18); orden de ejecución 1, 2a, 3, 2b, 4, 5, paso 0 con filtro de posiciones 8 a 30, correo opcional en el formulario, alerta de 0 consultas, fechas manuales solo en home, pilar y ola 1, y software propio fuera del mapa de servicios de la home (D19). Verificación: DECISIONES.md contiene D15 a D19 y `TODOS.md` recoge el frente de autoridad y las 3 ideas de crecimiento. Challenge del usuario UC1 (no se decide aquí): ver el registro de revisión.
<!-- /autoplan-accepted:ceo -->

<!-- autoplan-accepted:design -->
- R44 (precedencia; reemplaza la línea «PRECEDENCIA» del encabezado, que nombra solo S1 a S6 y R1 a R41): manda `docs/specs/rediseno-elementoweb/DECISIONES.md` (D1 a D29 y su tabla de vigencia); después, las obligaciones aceptadas de este documento que esa tabla declare vigentes (S1 a S6, R1 a R43 y las viñetas D20 a D29 de este bloque); después, el cuerpo. `DESIGN.md` y `prototipo/design-preview.html` son referencia visual y ceden ante `DECISIONES.md`. Verificación: la tabla de vigencia de `DECISIONES.md` tiene una fila para R44 y para D20 a D29.
- D20: orden final de la home en 8 secciones, héroe con H1, bajada de 15 a 20 palabras, botón «Cotizar mi proyecto» hacia `/contacto/?servicio=definir`, WhatsApp secundario, comprobante como ancla y riel con los nombres de los 6 servicios sin cifras; orden móvil explícito. Verificación: capturas a 1440×900 y 390×844 con el botón visible.
- D21: anatomía de servicio reordenada (portada, respuesta fechada, prueba, qué incluye, cómo lo hacemos con botón repetido, por qué es mejor, preguntas, formulario, relacionados después); barra fija móvil; ancla `#formulario` dentro de la página. Verificación: prueba de orden de bloques y del ancla.
- D22: tabla de estados de `ServiceForm` (inactivo, inválido, enviando, éxito, fallo de red, fallo parcial, trampa, cambio de servicio) con resumen «Servicio: X · cambiar». Verificación: prueba de navegador por estado.
- D23: matriz de precio por superficie (confirmado, propuesto, cotizado) con redacción literal. Verificación: prueba con una página de cada estado.
- D24: estados de prueba válidos, texto literal del blanco y comprobante por tipo de servicio. Verificación: prueba del validador.
- D25 (TASTE): la ilustración nunca va sola; ancla de la home = comprobante y, con permiso, captura real. Verificación: revisión de cada portada contra la regla.
- D26: `DESIGN.md` corregido y con 4 componentes nuevos (hecho, validado con `gstack-design-md.ts check`).
- D27: tres anchos de diseño, toques de 44 px, teclado en las fichas, resumen de errores con `aria-live`, impresión de la comparación y caja 3:2 reservada. Verificación: capturas a 390, 768 y 1440 y axe sin hallazgos.
- D28 (TASTE): banco de criterios con fuente y mínimo de 4 por comparación; columna «tu otra cotización» opcional por página. Verificación: el validador cuenta los criterios.
- D29: lo que queda para el implementador está nombrado y los hubs usan su enlace actual hasta la fase 5.
<!-- /autoplan-accepted:design -->

<!-- autoplan-accepted:eng -->
- R45 (alcance de R44; revisión de ingeniería): R44 se lee con `DECISIONES.md` completo, D1 a D43, y con las viñetas D20 a D43 de los bloques de diseño e ingeniería; D30 a D43 prevalecen sobre el cuerpo y sobre R4, R6, R28, R29 y R30 en los puntos que su tabla de vigencia declara reemplazados (parser como dependencia de desarrollo, CI con navegador, manifiesto de páginas en lugar de `olas.json`, contrato de leads v2). Verificación: la tabla de vigencia de `DECISIONES.md` tiene una fila para las viñetas D30 a D43 y para cada punto reemplazado.
- D30 (contrato de leads; precondición de la fase 3): el flujo de n8n exige solo nombre y teléfono (8 dígitos o más); el correo es opcional y, si viene, válido; `replyTo` de Brevo y el cuerpo del correo son condicionales al correo; un lead inválido responde 422 con `{"ok": false}`, nunca `{"ok": true}`; el honeypot y los duplicados responden 200 sin efecto; el cliente cuenta éxito y `generate_lead` solo si `res.ok` y `ok === true` en el cuerpo; el correo sigue siendo obligatorio en `ContactForm` hasta que n8n acepte leads sin correo; se agrega `payload_version` en v2 (ausente = v1). Verificación: `node --test` con fixtures v1, v2 de las 14 claves, solo teléfono, honeypot, sin nombre y sin teléfono; ningún caso devuelve éxito sin guardar.
- D31 (idempotencia y aislamiento de fallos): el flujo deduplica por `intento` con `$getWorkflowStaticData` (24 horas, máximo 500 ids); `Responder OK` se mueve justo después de validar, antes de Brevo y del CRM; Brevo conserva sus reintentos y su error dispara `errorWorkflow`; el nodo del CRM deja de tragar el error en silencio y avisa por la misma vía; se confirma a quién llega `sanblasErrorAlert01` (T29). Verificación: enviar el mismo `intento` dos veces deja un solo correo y una sola ficha; con Brevo caído y el CRM sano la ficha se guarda y llega una alerta; con el CRM caído el correo sale y llega una alerta.
- D32 (contrato del CRM): `detalle` viaja aplanado como `detalle_<campo>` en cadenas de hasta 300 caracteres, con la lista blanca de `formulario.json`; el mapper de WazaCRM reenvía además `servicio_clave`, `intento`, `payload_version`, `web` e `inicio`; el correo muestra cada `detalle_*` pasado por `h()`. Antes de activar `ServiceForm` se confirma con el lead de prueba qué guarda WazaCRM en `extras` y que escapa lo que muestra. Verificación: lead de prueba v2 con los campos visibles en la ficha y en el correo; un `<script>` en un campo sale escapado.
- D33 (endurecimiento del webhook): el Code node impone un tope de 8 KB al cuerpo, 500 caracteres por campo y 2.000 al mensaje; `servicio_clave` debe estar en la lista blanca, si no se guarda `definir`; `origen` debe empezar con `/` o con `https://elementoweb.com` o `https://www.elementoweb.com`, si no queda vacío; el teléfono se normaliza (8 dígitos con prefijo 507); más de 20 leads válidos por hora disparan una alerta además de la de cero consultas de D19; un límite de tasa en Traefik se evalúa en T29 y Turnstile queda en `TODOS.md`. Verificación: pruebas de cuerpo enorme, campo largo, clave desconocida y `origen` con `javascript:`.
- D34 (esquema único del formulario): `src/data/formulario.json` define las 14 claves (etiqueta, campos, tipo, máximos, obligatoriedad) y alimenta `ServiceForm`, el mapa página a clave validado en el build y la lista blanca que `scripts/subir-flujo-contacto.mjs` inyecta en n8n; `FORMULARIO.md` se genera de ese archivo; se retira `SERVICE_KEYS` de `[...slug].astro` y se usa `PageData.serviceKey`; `planKey` solo devuelve claves presentes en el archivo. Verificación: el build falla si un `serviceKey` o un resultado de `planKey` no existe en `formulario.json`.
- D35 (tipo de página y manifiesto): `PageData` gana `kind` (service, hub, pillar, pricing, industry, blog, location, guide, case u other), derivado en una sola función del registro para las páginas existentes; la rama de servicio de la plantilla vive en `src/components/ServicioPagina.astro` y se activa solo con `kind === 'service'`; `scripts/paginas-comerciales.json` lista cada página comercial (25 servicios, 6 hubs, pilar, `/precios/` y home) con tipo y ola, y el validador falla si una página emite `data-page-type` fuera del manifiesto, si un slug de una sección comercial no está en el manifiesto ni en la lista de exclusiones, o si una exclusión carece de motivo. Verificación: las 250 páginas quedan clasificadas sin "unknown"; `qa-seo --compare` sin cambios en las que no son de servicio.
- D36 (red de seguridad de la plantilla compartida): `npm run verify` toma `qa-seo --snapshot` antes del cambio y `--compare` después, con `scripts/cambios-permitidos.json` por fase; la pilar queda congelada en título, H1 y canónico; el validador comprueba al menos 3 enlaces entrantes por página comercial; se capturan con `qa-responsive` una página por `kind` a 390, 768 y 1440 antes y después para revisión manual; el cambio de tokens de `DESIGN.md` en `global.css` va en un commit aparte con axe en una página de blog y una de industrias. Verificación: un cambio no listado deja `verify` en rojo.
- D37 (CI): `deploy.yml` gana un job `verificar` (checkout del mismo SHA, Node, `npm ci`, `npm run verify` con `CHROMIUM_PATH` de Chrome) y `desplegar` con `needs: verificar`; `verificar` también corre en ramas y PR; `skip_checks` en `workflow_dispatch` exige un motivo escrito que queda en el resumen de la ejecución; `verify` es el único punto de entrada local y de CI. Verificación: un cambio que rompe el validador deja el job en rojo y el despliegue no corre; se comprueba en la primera ejecución que Chrome existe en el runner. (DT-E1, TASTE: no se activa protección de rama.)
- D38 (estrategia de pruebas): `node:test` sin dependencias para el validador, los Code nodes de n8n (cargados con `$input` simulado), `medir.mjs` y la coherencia de `formulario.json`; `scripts/qa-form.mjs` prueba los estados de D22 con `fetch` simulado; `qa-a11y.mjs` suma una pasada sin JavaScript y una medición de opacidad y momento de pintura del elemento LCP, y deja de inyectar `.reveal{opacity:1}` en esas pasadas; su lista `PAGES` se deriva del manifiesto. Verificación: las pruebas fallan si el elemento LCP arranca con opacidad 0 o si una página comercial no se cubre.
- D39 (validador endurecido; TASTE DT-E2): `node-html-parser` entra como dependencia de desarrollo (no llega a producción) y reemplaza la regex sobre HTML; los bloques rompen el build ante una lista vacía; el validador exige conteos mayores que cero, que las preguntas del FAQPage coincidan con las visibles y que el precio visible, `Offer.price` y `data-price-state` coincidan; los precios confirmados salen de `src/data/precios.json`, que leen `site.ts` y el validador (así R27 se comprueba sin importar TypeScript). Verificación: `node --test` con listas vacías, precio distinto y FAQ distinta.
- D40 (mediciones y rendimiento; ajusta la etiqueta de D6): la etiqueta visible nombra la herramienta de la medición guardada (`metodo`) y el validador comprueba que coincidan; `medir.mjs` usa la API de PageSpeed Insights si existe la clave `~/.ssh/psi.key` (gratuita, tarea del dueño) y, si no, Lighthouse local con mediana de 5 corridas y su versión en `metodo`; un cron mensual de GitHub Actions corre `medir.mjs --check` y abre una incidencia si una cifra supera los 45 días; `verify` avisa si el archivo fuente de una página tiene un commit posterior a su `fecha` de `answer`; `scripts/presupuestos.json` fija el máximo de bytes de JS y CSS por plantilla (medido en `dist/` con una tabla de máquina, N y mediana) y `verify` falla al superarlo; `ServiceForm` se carga como isla diferida y las páginas de servicio no cargan gsap ni lenis salvo necesidad. Verificación: prueba con fecha inyectable; el cron abre la incidencia en un caso de 46 días; `verify` falla con un bundle sobre el presupuesto.
- D41 (reversión de n8n): antes de cada subida el uploader exporta el flujo vivo a `docs/contacto-n8n/respaldo/<fecha>.json` y escribe el id y la versión en el resultado, que se copian al mensaje del commit; la reversión es `git revert` más volver a correr `scripts/subir-flujo-contacto.mjs`; `scripts/check-prod.sh` gana una sonda del honeypot (200 sin efecto); tras cada subida se hace una prueba de punta a punta con un lead v1 y uno v2 de prueba que se borran después. Verificación: la sonda responde 200 y no deja ficha ni correo.
- D42 (secuencia): la fase 3 no se cierra sin volver a medir las páginas de la ola 1 con `ServiceForm` activo; D30 a D33 son requisito de la activación de `ServiceForm` y del correo opcional; D34 a D39 entran en la fase 1; D40 a D41 entre las fases 1 y 3. Verificación: el criterio de salida de la fase 3 lista las mediciones nuevas con fecha posterior a la activación.
- D43 (documento único de construcción): tras el gate final, la tarea T30 reescribe el encabezado y las secciones 3, 5, 6 y 7 del SPEC para que no contradigan a `DECISIONES.md`, y `verify` comprueba que el encabezado nombre `DECISIONES.md`. Verificación: el encabezado del SPEC nombra `DECISIONES.md`.
<!-- /autoplan-accepted:eng -->
## Review record

### CEO phase (autoplan, 12-oct-2026)

**Mode:** SELECTIVE EXPANSION (regla de /autoplan). **Profundidad:** lista para implementar. **Dirección del dueño que NO se discute:** home de agencia, diseño web en su propia página interna, cada servicio bien pensado, Roboto única, SEO y GEO como criterio, ninguna URL cambia, `/diseno-web-panama/` intocable en URL, title y H1.

<!-- autoplan-baseline-edits:ceo {"sourceSha256":"149133c4f5f1e7aacfe3c61d0278c8fc3102a8ddeb5df72a9e429d0ba07ec863","replacements":[{"oldText":"Estado: borrador para aprobación del dueño (12 de octubre de 2026). Nada de esto está construido.","newText":"Estado: borrador para aprobación del dueño (12 de octubre de 2026). Nada de esto está construido. PRECEDENCIA: las enmiendas S1 a S6 y R1 a R41 de la lista de obligaciones aceptadas, al final de este documento, prevalecen sobre el cuerpo en cualquier conflicto. La tabla de fases de la sección 10 queda reemplazada por R26; la tabla de precios de la sección 6, por R27."},{"oldText":", `scorecard` (validación del marcador en el build). Un script del build rechaza una página de servicio que no tenga los 10 puntos.","newText":". El marcador lo valida un script que lee `dist/` (R2, R28), no un bloque renderizado."},{"oldText":" Esas dos se migran a la plantilla en la ola 3 (o quedan excluidas de la validación del build con una lista explícita, que se justifica por escrito).","newText":" La de IA migra a la plantilla en la ola 2 y la de cybersource en la ola 3 (R10); mientras tanto la lista fija `scripts/exclusiones-marcador.json` las cubre (R28)."},{"oldText":"| Google Ads, Meta Ads | gestión desde 300 al mes | **Propuesto**, el código lo marca con «Fee propuesto». Falta que el dueño lo confirme |\n| SEO, WhatsApp marketing, IA, n8n, email, contenido | sin precio publicado | **Falta** decisión del dueño |","newText":"| Plan gestionado | 350 de puesta en marcha más 169 al mes | Confirmado (`site.ts`) |\n| Google Ads y Meta (gestión), trafficker dedicado, contenido, email, WhatsApp, n8n | desde 300 al mes; 300 al mes por cuenta; desde 250 al mes; desde 200 al mes; desde 150 al mes; desde 300 por automatización | **Propuestos**: ya publicados hoy con el comentario «propuesto» o «Confirmar» en `marketing.ts`. Se conservan en el texto, pero no entran en `Offer` ni en la respuesta citable (R27) |\n| SEO, IA | sin precio publicado | **Falta** decisión del dueño |"},{"oldText":"- Payload a n8n: `servicio`, `origen` (URL de la página), `detalle` (un objeto por servicio), más `botcheck`. n8n lo mapea a NousCRM con el servicio como etiqueta del lead.","newText":"- Payload a n8n: se conservan los campos actuales (`origen` ya se envía hoy) y se suman `detalle` (un objeto por servicio) y `servicio_clave`; `servicio` conserva su etiqueta de texto. n8n lo envía a WazaCRM como hoy, con el servicio y el detalle (R30)."},{"oldText":"## 10. Fases y plan de pruebas","newText":"## 10. Fases y plan de pruebas (la tabla siguiente queda reemplazada por R26)"},{"oldText":"- Cada página de servicio cumple los 10 puntos de la sección 5, sin excepción.","newText":"- Cada página de servicio cumple los 10 puntos de la sección 5, salvo las de la lista de exclusión (R28)."},{"oldText":"más un `OfferCatalog` con los servicios y sus URL","newText":"más un `ItemList` de `Service` con los servicios y sus URL, sin `Offer` (R37)"},{"oldText":"`ImageObject`, `OfferCatalog` en la home.","newText":"`ImageObject`, `ItemList` de `Service` en la home (R37), con `Offer` solo si el precio está confirmado (R27)."},{"oldText":"Cambia el H1 y la bajada a «Servicios» de la agencia y el precio de web se queda solo en la pilar y en `/precios/` |","newText":"Cambian el H1, el title, la description y la bajada a «Servicios» de la agencia, y el precio de web se queda solo en la pilar y en `/precios/` (R35) |"},{"oldText":"la home enlaza a cada hub y a los servicios de ola 1","newText":"la home enlaza a todas las páginas del mapa 3.1"},{"oldText":"y cualquier backlink o contenido externo.","newText":"y cualquier backlink o contenido externo. Diferido: S7 (autoridad externa) y S8 (casos con cifras) en `TODOS.md`; omitidos: S9 y S10. La posición en Search Console es un indicador rezagado y depende de S7 (R39)."}]} -->

#### Decision ledger

| ID y dueño | Contrato y evidencia | Actual | Propuesto | Estado | Aprobación exacta y alcance |
|---|---|---|---|---|---|
| D1 · CEO | Modo de revisión (regla /autoplan) | SELECTIVE EXPANSION | n/a | approved | Regla de override de /autoplan |
| D2 · CEO | Enfoque. A: plan actual (home de agencia, pilar, plantilla de 10 puntos, formulario por servicio, 3 olas). B: solo H1 y textos de la home. C: reconstruir el sitio sobre otro sistema | A | B insuficiente para «cada servicio muy bien pensado»; C sin evidencia que lo justifique | approved | P1 completitud + P5 explícito; «procede con todo» (12-oct) sobre la arquitectura del SPEC |
| S1 · CEO | Archivo de mediciones con fecha para el comprobante «esta página, medida hoy» y chequeo de caducidad en el build (el SPEC lo promete sin mecanismo) | no existe | M | approved | Auto-decisión P1/P2, dentro del radio de impacto |
| S2 · CEO | Mensaje de WhatsApp pre-llenado por servicio en cada página | la plantilla ya deriva el texto de `page.h1` (`[...slug].astro:21`) | XS (reducido por R8) | approved | Auto-decisión P1/P2; reducido tras la revisión independiente |
| S3 · CEO | Verificación del grafo de enlaces en el marcador (cada servicio enlaza a su hub, a la home y a 3 relacionados) | `check-links.mjs` solo valida que no haya rotos | S | approved | Auto-decisión P1/P2 |
| S4 · CEO | Eventos GA4 con `service` | `track.ts` ya emite `cta_click` con `service` y `form_start`; falta `service` en `form_start`, `form_error` y `click_whatsapp` | XS (reducido por R7) | approved | Auto-decisión P1/P2; premisa corregida tras la revisión independiente |
| S5 · CEO | Verificar la demanda de «agencia de diseño web» (Planificador de palabras clave y SERP) ANTES de fijar la redacción final del H1 de la home | sin dato | S, puerta previa al despliegue de la home | approved | Premisa sin verificar (ver tabla). No bloquea la construcción |
| S6 · CEO | Migrar las 2 páginas de servicio hechas a mano a la plantilla: IA en la ola 2, cybersource en la ola 3 (R10) | custom `.astro` | M | approved (TASTE) | Alcance en el límite (varias páginas con mucho HTML propio). El valor por defecto ya está escrito; se confirma en el gate final |
| S7 · CEO | Frente de autoridad fuera del repo: ficha de Google Business Profile, citaciones, 3-5 objetivos de enlaces, 1-2 casos publicados con permiso | fuera del plan | L | deferred | Fuera del radio de impacto y exige acciones del dueño. Va a TODOS.md y a la sección de hallazgo estratégico |
| S8 · CEO | Páginas de casos con métricas reales | no hay datos publicables | L | deferred | Depende de cifras que el cliente autorice. TODOS.md |
| S9 · CEO | Páginas de Miami en inglés | fuera de alcance | L | skipped | Sin evidencia de demanda; rompe «una intención, una página» |
| S10 · CEO | Schema de reseñas o calificación agregada | no hay reseñas reales | S | skipped | Sería un dato inventado; viola la regla de honestidad |

#### Tabla de premisas

| Premisa | Afirmación | Recibo | Veredicto |
|---|---|---|---|
| P1 | El H1 de la home vende solo diseño web | `src/pages/index.astro:91` | verificada |
| P2 | El title de la home ya dice «Agencia de Diseño Web en Panamá» | `src/pages/index.astro:46` | verificada |
| P3 | La pilar concentra la demanda de «diseño web panama» (1.569 impresiones, posición 89,5) | `audit/gsc-baseline-2026-09.md:14` | verificada |
| P4 | La home tiene 13 impresiones y posición 3,6 | `audit/gsc-baseline-2026-09.md:13` | verificada |
| P5 | «agencia de diseño web» tiene demanda de búsqueda | ninguna de las 10 consultas principales contiene «agencia» (`audit/gsc-baseline-2026-09.md:19`); la lista completa de 164 no está en el repo | **sin verificar** |
| P6 | Son 25 páginas de servicio y 6 hubs | conteo de `slug:` en `src/lib/pages/*.ts` más 2 páginas hechas a mano | verificada (corregida desde 24 y 5) |
| P7 | El blog tiene 80 artículos | 80 carpetas en `dist/blog/` | verificada (corregida desde 81) |
| P8 | `/servicios/` es solo de diseño web | `src/lib/pages/servicios.ts:83-90` es un catálogo de toda la agencia con H1 de diseño web | falsa a medias; corregida en el plan |
| P9 | Los precios del SPEC son los publicados | `src/lib/site.ts:196-224` y `src/lib/pages/marketing.ts` («Fee propuesto» en Google Ads y Meta) | verificada; Google Ads y Meta siguen sin confirmar |
| P10 | Reestructurar la home y los servicios mejora el posicionamiento | `reference_seo_elementoweb`: dominio registrado el 29-jul-2026, 0 enlaces externos, 2 clics en 6 meses, 23 páginas sin indexar | **sin verificar y probablemente débil**: el cuello de botella es autoridad y edad |
| P11 | Roboto no empeora CLS ni LCP | `scratchpad/ab/*.json`: CLS 0 en 10 corridas, FCP 1,9 s contra 2,9 s | verificada (LCP ruidoso) |
| P12 | La insignia «Meta Verified Tech Provider» de la home es cierta | `src/pages/index.astro` (héroe), captura `r-d-home.png` | **sin verificar** (el dueño debe confirmarla) |
| P13 | Los 23 logos de la tira son clientes reales con permiso | `src/pages/index.astro:148-163` | **sin verificar** |
| P14 | Hoy solo existe el evento `generate_lead` (S4 lo trataba como nuevo) | `src/scripts/track.ts:22-26`: ya existen `cta_click` con `service` y `form_start` | falsa; corregida (R7, S4 baja a XS) |
| P15 | El repo tiene dónde correr las pruebas del validador y de la medición | `package.json`: solo `dev`, `build` y `preview`; Lighthouse no es dependencia | falsa; corregida (R3, R4, R5) |
| P16 | El Preloader y los reveals no afectan el LCP de la home nueva | `src/pages/index.astro:77`, `src/styles/global.css:57` (`.js .reveal { opacity: 0 }`) | sin resolver en el SPEC; corregida (R18) |

unverified=4 (P5, P10, P12, P13); falsas corregidas tras la revisión independiente: P14, P15, P16.

#### Reality rows

REALITY: premise-table finding 4 sin verificar (P5, P10, P12, P13); 2 premisas corregidas en el plan (P6, P7) y 1 reformulada (P8) `src/lib/pages/servicios.ts:83`
REALITY: already-done pass `git log origin/main --since=2026-10-12` no toca `src/pages/index.astro` ni `src/lib/pages/diseno-web-panama.ts`; el trabajo previo de la home (715f1a2, c24aaa9, bd02cb2) no se solapa `src/pages/index.astro`
REALITY: surface-check pass `scripts/check-prod.sh`, `scripts/qa-seo.mjs`, `scripts/check-links.mjs` y `gh run watch` existen `scripts/check-prod.sh:1`
REALITY: binding-decisions pass `gstack-decision-search --scope branch --recent 50` devolvió solo el autoplan de Fábrica de Webs (16-sep-2026), que no toca este plan; el plan no tiene sección `## Binding decisions` y no reintroduce ningún valor por defecto desautorizado `CLAUDE.md:1`
REALITY: numbers finding GSC [measured: audit/gsc-baseline-2026-09.md], Lighthouse [measured: scratchpad/ab/old-1.json a newsvc-2.json], conteos corregidos [measured: grep], costo de fal [estimated], PSI de producción 94-97 [re-measure before gate] `audit/gsc-baseline-2026-09.md:7`
REALITY: deferred-asks pass no hay issue vinculado; las cuatro instrucciones del dueño de la sección 0 tienen cada una su sección (SEO y GEO: 2 y 9; superar al mercado y formulario: 5 y 7; Roboto: 9; home de agencia y servicios: 3, 4 y 6); lo que el plan deja fuera con su motivo: S7, S8, S9, S10 `docs/specs/rediseno-elementoweb/SPEC.md:9`
REALITY: pr-count pass no hay `.gstack/ship-policy.json`; por defecto un PR por ola; el SPEC tiene 5 fases y cada push a main exige aprobación del dueño `docs/specs/rediseno-elementoweb/SPEC.md:173`

#### Voces independientes de la fase de estrategia

**CLAUDE SUBAGENT (CEO, solo lectura, leyó la entrada completa; INPUT ceo 75114f82):** Veredicto: el plan está bien gobernado, es honesto y cuida el dinero, pero apunta al cuello de botella equivocado y mide el éxito con una métrica que no dice si funcionó. Críticos: C1 arregla contenido y plantilla mientras difiere la autoridad que él mismo diagnostica; C2 define el éxito en impresiones, posición y PageSpeed y no en consultas, sin línea base de leads. Altos: H1 compromete 22 páginas y 5 hubs sin una puerta de demanda en un dominio sin autoridad; H2 la promesa «por qué somos mejores» descansa en pruebas que no existen y el marcador no bloquea con ambos blancos; H3 la separación home y pilar es una premisa sin probar y la verificación que podría refutarla es solo informativa; H4 el SPEC es difícil de ejecutar con 42 enmiendas. Medios: M1 herramientas pesadas y primer cambio visible tardío, M2 olas por impresiones en posición 90 y no por distancia de golpe, M3 formulario con fricción y sin vigilancia de fallo silencioso, M4 precios propuestos contra la regla de honestidad, M5 costo de frescura sin dueño, M6 SaaS junto a servicios sin cliente de prueba, M7 PageSpeed ajustado. Recomienda: acciones del dueño esta semana (ficha de Google, permiso de Panamá Worldwide Express), paso cero con posiciones 8 a 30, ola 1 sola y frente de autoridad en paralelo, decidir las olas 2 y 3 a las 8 semanas.

**CODEX (gpt-5.6-terra, plan-review; OUTSIDE_STATUS completed; FINDINGS P0):** Críticos: el plan ataca páginas y no autoridad (6 clics, 0 enlaces, sin tracción comercial no de marca); no hay cuña económica validada (catálogo y no posicionamiento: sin cliente ideal, disparador de compra, ciclo de venta, capacidad ni margen). Altos: el éxito puede declararse sin éxito comercial (indexación e impresiones al doble); GEO sin tesis causal; el marcador crea falsa preparación porque el blanco honesto cuenta como cumplido; la promesa «que te trae clientes» excede la evidencia; «una intención, una página» puede fabricar páginas delgadas (ya hay 7 sin indexar). Medios: la prueba de mercado llega tarde; la fase 2 publica antes de que el formulario por servicio active la atribución; Panamá y Miami sin elección de mercado; el arte 3D puede parecer plantilla. Recomienda reducir a una oferta insignia definida más un programa paralelo de autoridad y prueba antes de las páginas 4 a 25.

```
CEO DUAL VOICES — CONSENSUS TABLE:
  Dimension                             Claude  Codex  Consensus
  1. Premises valid?                    NO      NO     CONFIRMED (no): autoridad, demanda de «agencia» y promesa sin evidencia
  2. Right problem to solve?            NO      NO     CONFIRMED (no): el cuello de botella es autoridad y prueba
  3. Scope calibration correct?         NO      NO     CONFIRMED (no): demasiado de entrada; abrir olas por evidencia
  4. Alternatives sufficiently explored? NO     NO     CONFIRMED (no): autoridad primero, pago por clic, oferta insignia
  5. Competitive/market risks covered?  NO      NO     CONFIRMED (no): incumbentes con enlaces y reseñas; la estructura se copia en días
  6. 6-month trajectory sound?          NO      NO     CONFIRMED (no): meses de trabajo sin mover consultas
```

Disposición: ambas voces coinciden en las 6 dimensiones. Lo que no cambia la dirección del dueño se aceptó (S7 reabierto y promovido, D15 a D19). Lo que sí la cambia (construir solo la ola 1 y abrir el resto por evidencia; para Codex, una sola oferta insignia) es el **User Challenge UC1** y no se decide aquí.

#### Secciones 1 a 11 (profundidad: lista para implementar)

**Sección 1, Arquitectura (3 hallazgos).** (1) Una sola plantilla alimenta 23 páginas: un error de plantilla se replica; mitigado por el validador sobre `dist/` y por `scripts/olas.json`. (2) Las 2 páginas hechas a mano y la home duplican estructura fuera de la plantilla (D5). (3) El contrato `data-*` es nuevo acoplamiento entre plantilla y validador; se documenta en `SCORECARD.md`.

```
 FUENTES                              PLANTILLA                          SALIDA ESTÁTICA
 src/lib/pages/*.ts (23 páginas) ─┐
 src/lib/site.ts (precios)       ─┼─> [...slug].astro + Blocks.astro ─> dist/**/index.html ─> nginx (Netcup, Coolify)
 src/data/mediciones.json (nuevo) ┘     bloques nuevos: answer, receipt, compare, includes
 src/pages/index.astro (home a mano) ───────────────────────────────────────────────────┘
 inteligencia-artificial…/ y cybersource/ (a mano; en exclusiones-marcador.json hasta migrar)

 NAVEGADOR                                        BACKEND DEL FORMULARIO
 ServiceForm (nuevo, activo en fase 3) ──POST JSON──> n8n (Hetzner) ──> Brevo API (correo de aviso)
 ContactForm (actual, fases 1 y 2)                                  └─> WazaCRM (lead, onError continúa)
 track.ts ──> gtag (diferido) ──> GA4

 VERIFICACIÓN (local y CI):  dist/ ──> validador, qa-seo, check-links, (local) qa-a11y, prueba de dataLayer
```

Puntos únicos de falla: n8n en Hetzner (si cae, el formulario falla visiblemente; se mantiene el WhatsApp), Coolify y Netcup para el despliegue, y la sesión de Search Console del dueño para los exports. Escala: el build de 184 páginas tarda 5 s (medido), así que 10 veces más páginas no es problema. Reversibilidad de despliegue: `git revert` y redespliegue; n8n queda compatible hacia atrás (D10).

**Sección 2, Error y rescate (2 brechas).** Mapa por capacidad (profundidad de capacidad, el detalle de métodos lo fija la implementación):

| Capacidad | Qué puede salir mal | Rescatado | Qué ve el usuario |
|---|---|---|---|
| Envío del formulario | Tiempo agotado (tope de 15 s) | Sí | Mensaje y botón de WhatsApp |
| Envío del formulario | n8n responde 5xx | Sí | Mensaje de error con WhatsApp |
| Envío del formulario | n8n responde 200 pero fallan Brevo y WazaCRM a la vez | **No** | Éxito falso; el lead se pierde sin aviso (**BRECHA 1**, mitigada en D19 con alerta de 0 consultas y prueba sintética, aún sin construir) |
| WazaCRM caído | Falla el nodo del CRM | Sí (`onError: continueRegularOutput`) | Éxito; el correo sale |
| `detalle` con HTML | Se inserta sin escapar en el correo de `armar-correo.js` | **Desconocido** | Correo con marcado inyectado (**BRECHA 2**; el dueño de la verificación es la implementación de la fase 3) |
| `medir.mjs` | Falta Lighthouse | Sí | Error con instrucciones |
| Validador | Falso positivo | Sí | `verify` rojo con la regla y la página |
| Medición vencida | Edad alta | Sí | Etiqueta fija «medido el DD/MM»; `verify` imprime la edad |

**Sección 3, Seguridad y amenazas (3 hallazgos).** (1) `detalle` es entrada libre nueva hacia n8n y el correo: probabilidad media, impacto medio; sin mitigación aún (verificar el escapado, BRECHA 2). (2) El formulario solo tiene una trampa (`botcheck`) y ningún límite de frecuencia: spam probable, impacto bajo; aceptable y vigilado por la alerta de D19. (3) La CSP sigue en modo solo reporte; pasar a obligatoria queda para después. Sin dependencias nuevas, sin secretos nuevos.

**Sección 4, Flujo de datos y casos de borde (4 casos).**

| Interacción | Caso de borde | Manejado | Cómo |
|---|---|---|---|
| Doble clic en enviar | Dos envíos | Sí | Id de intento por envío |
| `?servicio=` desconocido | Clave inválida | Sí (D10) | Cae en `definir` |
| Cambiar de servicio a mitad | Se pierden respuestas | **Pendiente** | Se conservan los campos comunes y se reinician los específicos; escribirlo en `FORMULARIO.md` |
| Perder la conexión | Reintento | Sí | Mismo id de intento, tope de 15 s |
| Sin JavaScript | Formulario no funciona | Sí (D10) | Botón de WhatsApp y correo |

Flujo de datos: `ENTRADA (campos + detalle) -> VALIDACIÓN (cliente: obligatorios nombre y WhatsApp) -> TRANSFORMACIÓN (payload v1 + servicio_clave + detalle) -> PERSISTENCIA (n8n: correo y WazaCRM) -> SALIDA (éxito o error con WhatsApp)`. Rutas de sombra: vacío (obligatorios, error con foco), demasiado largo (límite del campo, por definir en `FORMULARIO.md`), tiempo agotado (mensaje), duplicado (id de intento), parcial (n8n 200 con falla posterior, BRECHA 1).

**Sección 5, Calidad de código (3 hallazgos).** (1) Duplicación entre la home, las 2 páginas a mano y la plantilla (D5). (2) Nombre confuso `servicio` (etiqueta) frente a `servicio_clave`; se documenta en `FORMULARIO.md` y el diccionario de eventos. (3) El validador puede crecer en ramas; una función por regla.

**Sección 6, Pruebas (4 brechas).** Ninguna prueba automatizada existe hoy (`package.json` sin runner). Diagrama de lo nuevo y su prueba: validador (unitaria con `node:test`: página válida, a la que falta cada punto, con blanco honesto, excluida), mediciones (unitaria con fecha inyectable), `ServiceForm` (de navegador: cambio de servicio, validación, envío con `fetch` simulado), `workflow.json` (integración: payload v1 y v2 contra n8n real con lead de prueba), eventos (de navegador con `gtag` simulado), JSON-LD de la home (`qa-seo`), unicidad de `KEYWORDS.md` (script). Prueba de las 2 de la madrugada del viernes: lead de prueba de punta a punta tras cada despliegue. Prueba hostil: `detalle` con `<script>` y 5.000 caracteres. Prueba de caos: n8n devuelve 500 y WazaCRM agota el tiempo. Brechas: sin prueba de `detalle` hostil, sin prueba de falla parcial de n8n, sin prueba del flujo `v1` con el `workflow.json` nuevo, sin prueba de cambio de servicio a mitad.

**Sección 7, Rendimiento (2 hallazgos).** (1) PageSpeed Insights de 89 y 85 de base contra una meta de 90 con ilustraciones nuevas: portadas de 60 KB (D14) y medir la ola 1 antes de la home. (2) El JavaScript de `ServiceForm` y de `track.ts` debe cargarse diferido como `gtag`. Lo más lento: la portada (LCP), el formulario con 14 variantes y el build con validador.

**Sección 8, Observabilidad (3 brechas).** Eventos GA4 con `service` y clave (D9); alerta de 0 consultas en N días y prueba sintética del flujo (D19); salida de `verify` con la edad de las mediciones; panel mensual de Search Console y de GEO (D13). Runbook: actualizar `docs/monitoreo-y-rollback.md` con la reversión de n8n. Brecha: nadie recibe aviso hoy si el flujo falla en silencio.

**Sección 9, Despliegue (3 riesgos).** Orden: primero `workflow.json` (acepta v1 y v2) y su prueba, después el sitio. Ventana de riesgo: HTML antiguo en caché con el formulario viejo contra el n8n nuevo funciona porque v1 sigue aceptado. Marcador de activación: `ServiceForm` se activa con una constante de compilación. Verificación posterior: `check-prod.sh`, `gh run watch` y un lead de prueba. Humano: 1 día para la preparación de la fase 3 / CC: 40 min.

```
 Secuencia de despliegue (fase 3):
   [1] subir workflow.json v1+v2 ──> [2] lead de prueba v1 OK ──> [3] lead de prueba v2 OK
                                                                          │
   [6] check-prod.sh + gh run watch <── [5] push aprobado <── [4] activar ServiceForm (constante) + verify en verde
 Reversión:
   falla tras [5] ──> git revert del commit ──> redespliegue (n8n sigue aceptando v1) ──> lead de prueba v1 OK
   falla en n8n  ──> volver a subir el workflow anterior con scripts/subir-flujo-contacto.mjs
```

**Sección 10, Trayectoria (reversibilidad 4 de 5; 3 deudas).** Deuda de código (2 páginas a mano), operativa (mantener `KEYWORDS.md`, mediciones y fechas) y de documentación (SPEC más DECISIONES). Dependencia de ruta: la plantilla de 10 puntos es difícil de aflojar una vez publicada en 25 páginas, por eso las olas 2 y 3 son el punto de decisión (UC1). Pregunta del año: ¿un ingeniero nuevo entiende `data-score`? Sí si `SCORECARD.md` existe. Lo que viene después: casos con cifras, páginas por industria de cola larga y el frente de autoridad.

**Sección 11, Diseño y UX (3 hallazgos).** (1) Alineación con `DESIGN.md`: sí (Roboto, cian único, comprobante). (2) Riesgo de monotonía: 25 ilustraciones 3D parecidas pueden verse como plantilla; mitigar alternando con capturas reales y comprobantes. (3) Estados del formulario: ver la tabla.

| Función | Cargando | Vacío | Error | Éxito | Parcial |
|---|---|---|---|---|---|
| ServiceForm | Botón con estado de envío | Obligatorios marcados | Mensaje con foco y WhatsApp | Confirmación con el servicio | Se conservan los campos comunes al cambiar de servicio |
| Comprobante | n/a | «sin medir» impreso | n/a | Cifra con fecha | Una fila en blanco honesto |

```
 Recorrido: Google ─> página de servicio ─> respuesta fechada ─> evidencia (comprobante) ─> por qué es mejor (comparación)
                                            ─> qué incluye y qué no ─> FAQ ─> formulario del servicio ─┬─> éxito
                                                                                                     └─> WhatsApp
```

#### Salidas obligatorias de la fase

**NOT in scope.** Diferido: S8 (casos con cifras), prueba de búsqueda pagada, salida con Fábrica de Webs y herramienta «mide tu web» (todo en `TODOS.md`). Rechazado: S9 (Miami en inglés, sin demanda), S10 (reseñas, serían datos inventados), cambios de URL o redirects, el logo y las propuestas de clientes, el blog.

**What already exists.** Plantilla `[...slug].astro` y `Blocks.astro` (se reutilizan y se amplían); `src/lib/site.ts` como fuente de precios (se reutiliza); `ContactForm.astro` y `track.ts` (se reutilizan: `cta_click` con `service` ya existe); `docs/contacto-n8n/workflow.json` y `scripts/subir-flujo-contacto.mjs` (se amplían); `qa-seo.mjs`, `check-links.mjs`, `qa-a11y.mjs` y `check-prod.sh` (se reutilizan dentro de `verify`); `docs/geo-panel-preguntas.md` y `docs/event-dictionary.md` (se reutilizan); `schema.ts` con `imageObject` (se reutiliza).

**Error & Rescue Registry.** Ver la tabla de la sección 2: 8 filas, 2 brechas críticas (BRECHA 1 y BRECHA 2).

**Failure Modes Registry.**

| CODEPATH | FAILURE MODE | RESCUED? | TEST? | USER SEES? | LOGGED? |
|---|---|---|---|---|---|
| Formulario → n8n | n8n 200 y falla posterior | N | N | Éxito falso | N → **CRITICAL GAP** |
| Correo con `detalle` | HTML sin escapar | Desconocido | N | Correo roto o inyectado | N → **CRITICAL GAP** |
| Formulario → n8n | Tiempo agotado | Y | N | Mensaje y WhatsApp | Y (evento) |
| Validador | Falso positivo | Y | Y (planeada) | `verify` rojo | Y |
| Mediciones | Fecha ausente | Y | Y (planeada) | `verify` rojo | Y |
| CI de despliegue | Rojo en una reversión de emergencia | Y (`skip_checks`) | N | Despliegue bloqueado | Y |
| `medir.mjs` | Sin Lighthouse | Y | N | Mensaje claro | Y |
| Cambio de servicio a mitad | Pérdida de respuestas | N | N | Campos vacíos | N |

**Scope Expansion Decisions.** Aceptadas: S1 a S7 (S6 y S7 como taste). Diferidas: S8. Omitidas: S9 y S10 (ver el resumen CEO).

**Diagramas producidos:** arquitectura (sección 1), flujo de datos con rutas de sombra (sección 4), máquina de estados del formulario (abajo), flujo de error (sección 2), secuencia de despliegue y reversión (sección 9).

```
 Estados del formulario:   [inactivo] ─(interacción)─> [llenando] ─(enviar, válido)─> [enviando] ─(200)─> [éxito]
                                                          │  ▲                           │
                                                          │  └──(corregir)──[error de validación]
                                                          └─(cambiar servicio)─> [llenando]   [enviando] ─(timeout/5xx)─> [error de envío] ─(reintentar, mismo id)─> [enviando]
 Transiciones inválidas: [éxito] ─> [enviando] (bloqueada por el id de intento y el botón desactivado).
```

**Stale Diagram Audit.** `docs/contacto-n8n/README.md` describe el flujo (correo y WazaCRM) y sigue vigente; se actualiza con v1 y v2. `docs/monitoreo-y-rollback.md` y `docs/event-dictionary.md` se actualizan (clave `service`).

## Implementation Tasks
Derivadas de los hallazgos de esta revisión. Cada una nace de una sección o de una voz independiente.

- [ ] **T1 (P1, human: ~3h / CC: ~20min)** — Search Console y PageSpeed — Export completo, filtro de posiciones 8 a 30, línea base de PageSpeed Insights en `audit/baseline-perf.md` y línea base de leads
  - Surfaced by: CEO voces (C2, M2) y sección 7
  - Files: `audit/baseline-perf.md`, `audit/gsc-baseline-2026-10.md`
  - Verify: los archivos existen con fecha y fuente
- [ ] **T2 (P1, human: ~1d / CC: ~30min)** — Validador del marcador sobre `dist/`, `scripts/olas.json`, `scripts/exclusiones-marcador.json` y pruebas con `node:test`
  - Surfaced by: Secciones 1 y 6; R28 y D7
  - Files: `scripts/validar-marcador.mjs`, `scripts/olas.json`, `scripts/exclusiones-marcador.json`, `scripts/validar-marcador.test.mjs`
  - Verify: `node --test` en verde
- [ ] **T3 (P1, human: ~4h / CC: ~20min)** — `npm run verify` y job de CI previo al despliegue con `skip_checks`
  - Surfaced by: Sección 9; D8
  - Files: `package.json`, `.github/workflows/deploy.yml`
  - Verify: un cambio que rompe el validador deja el job en rojo
- [ ] **T4 (P1, human: ~2d / CC: ~45min)** — `ServiceForm` con 14 claves, `FORMULARIO.md` y payload aditivo (sin activar)
  - Surfaced by: Secciones 4 y 11; D10 y D19
  - Files: `src/components/ServiceForm.astro`, `docs/specs/rediseno-elementoweb/FORMULARIO.md`
  - Verify: prueba de navegador con `fetch` simulado
- [ ] **T5 (P1, human: ~1d / CC: ~40min)** — `workflow.json` acepta v1 y v2, escapa `detalle`, alerta de 0 consultas y prueba sintética
  - Surfaced by: Secciones 2, 3 y 8 (BRECHA 1 y BRECHA 2)
  - Files: `docs/contacto-n8n/workflow.json`, `docs/contacto-n8n/armar-correo.js`
  - Verify: lead de prueba v1 y v2 recibidos; `<script>` en `detalle` sale escapado
- [ ] **T6 (P1, human: ~1d / CC: ~30min)** — Plantilla: bloques `answer`, `receipt`, `compare`, `includes`, `data-*`, tokens de `DESIGN.md`
  - Surfaced by: Secciones 1 y 11
  - Files: `src/lib/types.ts`, `src/components/Blocks.astro`, `src/styles/global.css`
  - Verify: ola 1 pasa el validador; héroe y botón a 1440×900 y 390×844
- [ ] **T7 (P1, human: ~1d / CC: ~25min)** — Archivo y script de mediciones
  - Surfaced by: R5 y D6
  - Files: `src/data/mediciones.json`, `scripts/medir.mjs`
  - Verify: prueba con fecha inyectable
- [ ] **T8 (P2, human: ~2d / CC: ~50min)** — `KEYWORDS.md`, `SCORECARD.md` y panel GEO de 10 preguntas
  - Surfaced by: R35, D12 y D13
  - Files: `docs/specs/rediseno-elementoweb/KEYWORDS.md`, `docs/specs/rediseno-elementoweb/SCORECARD.md`
  - Verify: ninguna palabra clave principal repetida
- [ ] **T9 (P1, human: ~2d / CC: ~1h)** — Pilar ampliada y las 3 páginas de la ola 1, con 2 portadas piloto y la tabla de gasto de fal
  - Surfaced by: Secciones 7 y 11; D2, D14
  - Files: `src/lib/pages/diseno-web-panama.ts`, `servicios.ts`, `crecimiento.ts`, `marketing.ts`, `public/images/hero/*`
  - Verify: `npm run verify` y PageSpeed Insights
- [ ] **T10 (P2, human: ~2d / CC: ~1h)** — Home de agencia, `/servicios/` y `/precios/`, y Preloader fuera del LCP
  - Surfaced by: R16, R18 y D18
  - Files: `src/pages/index.astro`, `src/lib/pages/servicios.ts`, `src/lib/pages/precios.ts`
  - Verify: LCP y CLS medidos; H1 aprobado por el dueño
- [ ] **T11 (P1, human: owner ~1d / CC: ~0)** — Frente de autoridad: ficha de Google, 10 directorios, enlace de crédito en sitios de clientes y permiso de Panamá Worldwide Express
  - Surfaced by: Voces independientes (C1, H2, Codex crítico) y S7
  - Files: `TODOS.md`
  - Verify: ficha verificada y permiso por escrito
- [ ] **T12 (P3, human: ~2h / CC: ~10min)** — Limpieza: quitar `@fontsource/inter` y `@fontsource/outfit` y actualizar el lockfile
  - Surfaced by: R23
  - Files: `package.json`, `package-lock.json`
  - Verify: `npm run build` pasa

#### Completion Summary

```
  +====================================================================+
  |            MEGA PLAN REVIEW — COMPLETION SUMMARY                   |
  +====================================================================+
  | Mode selected        | SELECTIVE EXPANSION                         |
  | System Audit         | 0 enlaces externos, posición 83, 3 premisas |
  |                      | falsas corregidas, plantilla única de 23    |
  | Step 0               | SELECTIVE EXPANSION; 10 propuestas          |
  | Section 1  (Arch)    | 3 issues found                              |
  | Section 2  (Errors)  | 8 error paths mapped, 2 GAPS                |
  | Section 3  (Security)| 3 issues found, 0 High severity             |
  | Section 4  (Data/UX) | 5 edge cases mapped, 1 unhandled            |
  | Section 5  (Quality) | 3 issues found                              |
  | Section 6  (Tests)   | Diagram produced, 4 gaps                    |
  | Section 7  (Perf)    | 2 issues found                              |
  | Section 8  (Observ)  | 3 gaps found                                |
  | Section 9  (Deploy)  | 3 risks flagged                             |
  | Section 10 (Future)  | Reversibility: 4/5, debt items: 3           |
  | Section 11 (Design)  | 3 issues                                    |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (7 items)                           |
  | What already exists  | written                                     |
  | Dream state delta    | written                                     |
  | Error/rescue registry| 8 rows, 2 CRITICAL GAPS                     |
  | Failure modes        | 8 total, 2 CRITICAL GAPS                    |
  | TODOS.md updates     | 5 items (escritos en TODOS.md)             |
  | Scope proposals      | 10 proposed, 7 accepted (EXP + SEL)         |
  | CEO plan             | written                                     |
  | Outside voice        | Claude subagent + Codex, completed          |
  | Lake Score           | N/A (sin preguntas con completitud)         |
  | Diagrams produced    | 6 (arquitectura, datos, estados, error,     |
  |                      | despliegue, reversión)                      |
  | Stale diagrams found | 2 docs a actualizar                         |
  | Unresolved decisions | 1 (UC1, al gate final)                      |
  | Reality rows         | 7/7 rows (PLAN_REALITY), 4 unverified       |
  +====================================================================+
```

Approval readiness: PASS (D1 a D19 y S1 a S10 con su respuesta o autoridad; UC1 queda sin resolver y se muestra en el informe; ninguna remediación sin aprobar entró a las tareas).



<!-- AUTONOMOUS DECISION LOG -->
## Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 1 | CEO | Modo SELECTIVE EXPANSION | Mechanical | Regla de /autoplan | Override del modo | Otros modos |
| 2 | CEO | Enfoque A (plan actual) | Mechanical | P1, P5 | B es insuficiente para «cada servicio»; C sin evidencia | B, C |
| 3 | CEO | S1 a S5 aceptados | Mechanical | P1, P2 | Dentro del radio de impacto | Diferir |
| 4 | CEO | S6 aceptado con valor por defecto | Taste | P3 | En el límite del alcance | Diferir |
| 5 | CEO | S7 diferido, luego reabierto y aceptado | Taste | P1 | Las dos voces independientes lo piden y el cuello de botella documentado es autoridad | Mantener diferido |
| 6 | CEO | S8 diferido | Mechanical | P3 | Depende de cifras del cliente | Aceptar |
| 7 | CEO | S9 y S10 omitidos | Mechanical | P4, honestidad | Sin demanda; datos inventados | Aceptar |
| 8 | CEO | Corregir premisas P6, P7, P8, P14, P15, P16 | Mechanical | P5 | Hechos verificados en el repo | Dejarlas |
| 9 | CEO | Un documento normativo (DECISIONES.md) en lugar de otra capa de enmiendas | Mechanical | P5 | Tres revisiones piden consolidar | Más enmiendas |
| 10 | CEO | Correo opcional en el formulario, fechas manuales acotadas, software propio fuera del mapa | Taste | P3 | Menos fricción y menos mantenimiento | Mantener |
| 11 | CEO | Orden 1, 2a, 3, 2b, 4, 5 | Taste | P1 | El formulario con atribución antes del tráfico de la home | Orden anterior |
| 12 | CEO | UC1 (reducir el compromiso inicial) no se decide | User Challenge | Regla de /autoplan | Ambas voces cambian la dirección del dueño | Auto-aprobar |

#### Interrogación temporal (0I)

```
  HORA 1 (cimientos):   el implementador necesita DECISIONES.md, KEYWORDS.md y el export completo de
                        Search Console. Sin el export no se puede fijar la palabra clave principal de cada página.
                        Humano: 1 día / CC: 15 min.
  HORAS 2-3 (lógica):   el validador lee dist/ y emite data-score. Ambigüedad: qué cuenta como «medición»
                        en una página sin desplegar. Respuesta: Lighthouse local etiquetado (D6).
                        Humano: 2 días / CC: 30 min.
  HORAS 4-5 (integración): ServiceForm contra n8n y WazaCRM. Sorpresa: el flujo viejo debe seguir aceptando el
                        payload anterior, y el rollback con git revert no revierte n8n (D10).
                        Humano: 2 días / CC: 40 min.
  HORAS 6+ (pulido):    PageSpeed Insights de 90 con base 89 y 85, y portadas de 60 KB. Lo que se lamentará no
                        haber planeado: probar 2 portadas piloto antes del presupuesto y medir la ola 1 antes
                        de publicar la home (D14).
                        Humano: 1 día / CC: 30 min.
```

#### Dream state

```
  ESTADO ACTUAL                 ESTE PLAN                      IDEAL A 12 MESES
  home vende "diseño web";      home de agencia; pilar y 25    el sitio es la fuente que Google y los
  25 servicios con plantilla    servicios con anatomía fija,   asistentes de IA citan para servicios
  desigual; sin medición viva;  precio visible, formulario     web en Panamá; casos con cifras reales;
  0 enlaces externos; posición  por servicio; comprobantes     enlaces externos y ficha de Google; los
  83; 6 clics en 2 meses        medidos con fecha              leads llegan con el servicio ya etiquetado
```

El plan mueve el 60 % del camino en contenido y conversión. Falta el frente de autoridad externa (S7) y los casos con cifras (S8), que son los que mueven la posición y la confianza.

<!-- autoplan-accepted:ceo -->
- S1: archivo de mediciones con fecha (`src/data/mediciones.json` o equivalente) del que sale el comprobante; el build marca como «sin medir» toda cifra con más de 45 días y falla si falta la fecha. Verificación: prueba del build con una fecha vieja y una ausente.
- S2: cada página de servicio genera su mensaje de WhatsApp con el nombre del servicio. Verificación: prueba que lee el href de cada página de servicio.
- S3: el validador del marcador exige que cada servicio enlace a su hub, a la home y a al menos 3 servicios relacionados. Verificación: el build falla en una página sin esos enlaces.
- S4: eventos GA4 `cta_click` y `form_start` con el parámetro `service`; sin cookies nuevas ni datos personales en el evento. Verificación: lectura de `dataLayer` en una prueba de navegador.
- S5: puerta previa al despliegue de la home: verificar la demanda de «agencia de diseño web» con el Planificador de palabras clave y una revisión de la SERP, y dejar el resultado en `audit/`. Si la demanda es nula, el H1 final se decide con el dueño. No bloquea la construcción.
- S6 (TASTE): migrar las 2 páginas de servicio hechas a mano a la plantilla en la ola 3; si no se migran, quedan excluidas del validador con una lista escrita y justificada.
- Correcciones del plan aceptadas: 25 páginas de servicio y 6 hubs; blog de 80 artículos; `/servicios/` ya es catálogo y solo cambia su H1, su bajada y su bloque de precios.
- Honestidad: la insignia «Meta Verified Tech Provider» y los 23 logos de la home no se copian ni se repiten en ninguna página nueva hasta que el dueño los confirme por escrito. Siguen donde están hoy y se preguntan en el gate final; si el dueño no los confirma, se retiran.
- R1 (fases): Fase 1 = validador del marcador (script, no bloque), esquema de mediciones y bloque `receipt`, componente del formulario por servicio con payload aditivo, `KEYWORDS.md`, `SCORECARD.md` y `npm run verify`. Fase 2 = home de agencia, pilar ampliada, `/servicios/` y `/precios/`, con la puerta S5 y las preguntas bloqueantes del dueño resueltas antes del despliegue. Fase 3 = integración n8n y NousCRM, eventos GA4 y WhatsApp por servicio. Fase 4 = olas 2 y 3 y los 6 hubs (en la ola 3). Esta lista reemplaza la tabla de fases del SPEC al implementar.
- R2 (marcador por tipo de página): `scorecard` es solo un script del build y deja de ser un bloque renderizado. Cada uno de los 10 puntos se asigna a un campo tipado de `PageData` y a una regla de conteo por tipo de página (servicio con precio, servicio con cotización cerrada, producto o plan recurrente), escrito en `docs/specs/rediseno-elementoweb/SCORECARD.md`. El blanco honesto etiquetado («sin publicar aún», «sin medir») cumple los puntos de medición y de prueba de proyecto, así que S8 (diferido) no bloquea. Verificación: pruebas del validador con una página válida, una a la que le falta cada punto y una con blanco honesto.
- R3 (reemplaza la condición de S1 sobre el build): la caducidad de una cifra solo degrada lo visible a «medido el DD/MM» y nunca rompe el build; `astro build` (el que corre el Dockerfile) no depende del reloj ni del validador. Las verificaciones duras (fecha faltante, marcador incompleto, enlaces) corren en `npm run verify` antes de cada push. Verificación: el Dockerfile sigue ejecutando solo `npm run build`.
- R4 (`npm run verify`): script único que encadena `qa-seo.mjs`, `check-links.mjs`, `qa-a11y.mjs`, el validador del marcador y pruebas con `node:test` y fecha inyectable, sin dependencias nuevas. Verificación: `npm run verify` sale con código distinto de cero si cualquiera falla.
- R5 (mediciones): esquema `{url, metrica, valor, herramienta, fecha, metodo}`; `scripts/medir.mjs` usa el CLI de Lighthouse ya instalado (no se añade a `package.json`) y escribe el archivo; la cifra se rotula «medido el DD/MM»; se renueva con un comando cada 45 días como máximo. El criterio de PageSpeed se mide con la misma herramienta que la línea base y se confirma con PageSpeed Insights después del despliegue.
- R6 (formulario): la Fase 1 construye el componente con los 13 servicios más «Otro», cada uno con sus preguntas, y un payload aditivo: se conservan todos los campos actuales (`nombre`, `empresa`, `email`, `telefono`, `web`, `inicio`, `servicio`, `presupuesto`, `mensaje`, `modalidad`, `intento`, `fecha`, `botcheck`) y se suman `origen` y `detalle`. Incluye un aviso visible del uso de los datos, el id de intento y estados de error. Precondición de la Fase 3: actualizar `docs/contacto-n8n/workflow.json` y subirlo con `scripts/subir-flujo-contacto.mjs` ANTES de activar los campos nuevos en producción, y probar de punta a punta con un lead de prueba que n8n y NousCRM aceptan servicio y detalle (borrar el lead de prueba después). El rollback con `git revert` no revierte n8n: el flujo nuevo debe seguir aceptando el payload viejo.
- R7 (reemplaza S4): `src/scripts/track.ts` ya emite `cta_click` con `service` y `form_start`; lo que falta es añadir `service` a `form_start`, `form_error` y `click_whatsapp` cuando la página tiene servicio. Los botones de página apuntan a `/contacto/?servicio=<clave>#formulario` (así `track.ts` los mide); el formulario embebido en la página emite sus propios eventos. Esfuerzo XS. Verificación: lectura de `dataLayer` en una prueba de navegador.
- R8 (reemplaza S2): la plantilla ya deriva el mensaje de `page.h1` (`src/pages/[...slug].astro:21`); se estandariza como «Hola, me interesa <servicio>.» y solo se sobrescribe donde un `cta.wa` existente sea mejor. Esfuerzo XS. Verificación: prueba que lee el href de WhatsApp de cada página de servicio.
- R9 (reemplaza S5): S5 es informativa y no tiene umbral que bloquee; se anotan la demanda y la SERP en `audit/` antes de la Fase 2 y la redacción del H1 sigue siendo decisión del dueño. Orden: S5, luego aprobación del dueño, luego construcción de la home.
- R10 (reemplaza S6): `inteligencia-artificial-para-empresas-panama` migra a la plantilla en la ola 2 y `funcionalidades/integracion-cybersource-panama` en la ola 3; el validador acepta una lista de exclusión temporal con fecha de caducidad solo para cybersource hasta la ola 3. «Sin excepción» se lee con esa lista. Sigue siendo taste.
- R11 (precios vivos): los precios ya publicados hoy se conservan tal cual, incluido «desde $300/mes» de Google Ads y Meta; no se agrega ningún precio nuevo sin confirmación del dueño. La pregunta 2 deja de ser bloqueante: solo decide qué precios nuevos se agregan.
- R12 (presupuesto de fal): antes de generar, tabla página × estado (existe o falta) × modelo × costo con el total; tope duro de $4 incluyendo reintentos; orden por ola; al llegar al tope se detiene y se pide aprobación. Las 56 imágenes débiles quedan fuera.
- R13 (honestidad): la insignia «Meta Verified Tech Provider» (`src/pages/index.astro:108` y `:660`), «Equipo 100% interno» (`:660`) y los 23 logos se confirman con el dueño ANTES de la Fase 2; sin confirmación escrita se retiran de la home de agencia. Esto reemplaza «se preguntan en el gate final».
- R14 (palabras clave): `docs/specs/rediseno-elementoweb/KEYWORDS.md` con página, palabra clave principal, palabras reservadas a otra página y fuente de Search Console, para las 25 páginas, los 6 hubs, la home, la pilar y `/precios/`, antes de escribir contenido en la Fase 1. Ninguna palabra clave principal se repite en dos páginas.
- R15 (éxito): indicadores adelantados (indexación de las páginas de cada ola e impresiones por página) y rezagados (posición); nueva línea base completa (las 164 consultas y todas las páginas) el día antes de cada despliegue de ola; verificación GEO manual cada 4 semanas con un panel fijo de 10 preguntas a 2 o 3 asistentes de IA, con el resultado en `audit/`.
- R16 (páginas y hubs): `/servicios/` y `/precios/` entran en la Fase 2 con la home y la pilar. `/precios/` es la tabla canónica de todos los precios; la pilar muestra los 4 formatos de web desde la misma fuente (`src/lib/site.ts`) y enlaza a `/precios/`. Los 6 hubs entran en la ola 3.
- R17 (ola 3 explícita): las 15 páginas son `marketing/facebook-instagram-ads-panama`, `marketing/contenido-redes-sociales-panama`, `marketing/email-marketing-panama`, `marketing/automatizaciones-n8n-panama`, `tecnologias/diseno-web-wordpress-panama`, `tecnologias/diseno-web-shopify-panama`, `tecnologias/desarrollo-web-a-medida-vue-react-panama`, `funcionalidades/integracion-yappy-pasarelas-pago-panama`, `funcionalidades/sistemas-reservas-citas-online-panama`, `funcionalidades/integracion-cybersource-panama`, `crecimiento/mantenimiento-web-panama`, `crecimiento/hosting-infraestructura-panama`, `saas/wazacrm`, `saas/nouscrm` y `saas/cifrao`.
- R18 (rendimiento de la home): el Preloader (importado solo en `src/pages/index.astro:77`) se retira de la home de agencia salvo que la medición demuestre LCP de 2,5 s o menos con él; `.js .reveal { opacity: 0 }` (`src/styles/global.css:57`) nunca se aplica a elementos de la primera pantalla ni al elemento LCP; el contenido es visible sin JavaScript.
- R19 (reglas de contenido): la prueba de proyecto y la medición se reutilizan solo si son reales y atribuidas, con un máximo de un proyecto de prueba por página; sin prueba disponible se imprime el blanco honesto etiquetado. El schema no incluye `AggregateRating` ni `Review` y el validador lo prohíbe.
- R20 (respuesta fechada y comparación): el bloque `answer` usa un campo manual `fecha` alineado con `dateModified`, nunca la fecha del build. La columna «tu otra cotización» son celdas vacías imprimibles, sin campos ni JavaScript.
- R21 (prototipo): copiar `design-preview.html` (la vista previa aprobada del 12-oct) a `docs/specs/rediseno-elementoweb/prototipo/` como artefacto durable.
- R22 (enlazado): parámetros revisables de S3: cada servicio enlaza a su hub (a `/servicios/` si no tiene hub), a la home y a 3 o más servicios relacionados, que pueden ser de otros hubs.
- R23 (limpieza): `@fontsource/inter` y `@fontsource/outfit` ya no se usan tras pasar a Roboto; se quitan de `devDependencies` y del lockfile.
- R24 («gate final»): «gate final» es la puerta de aprobación final de este /autoplan. Las respuestas del dueño que bloquean construcción (insignia, logos, H1) tienen como fecha límite «antes de la Fase 2».
- R25 (ruta crítica): cada decisión del dueño tiene un valor por defecto si no responde: H1 = la propuesta; fal = tope de $4; logos e insignia = retirar; precios nuevos = «cotización cerrada por escrito»; casos con cifras = blanco honesto.
- R26 (tabla de fases única; reemplaza la sección 10 y R1): Fase 0 = Roboto, `DESIGN.md`, `CLAUDE.md` y este SPEC (commits `4cdaab4` y `f0720e5`, locales; el dueño aprueba el push). Fase 1, Fundación = paso 0 con el export completo de Search Console y la línea base de PageSpeed Insights en `audit/baseline-perf.md`; tokens de `DESIGN.md` en `global.css`; bloques `answer`, `receipt`, `compare` e `includes`; componente `ServiceForm` construido pero sin activar; validador que lee `dist/`; `npm run verify`; `KEYWORDS.md`, `SCORECARD.md` y `FORMULARIO.md`; archivo y script de mediciones; `llms.txt` base; limpieza de `@fontsource`. Fase 2, Ola 1 y home = ilustraciones de la ola 1 (pilar, corporativo, SEO, Google Ads, con la tabla y el tope de R12); páginas `servicios/diseno-web-corporativo-panama`, `crecimiento/seo-posicionamiento-web-panama` y `marketing/google-ads-panama` en la plantilla; pilar ampliada; home de agencia; `/servicios/` y `/precios/`; formulario actual (`ContactForm` con `?servicio=`); Puerta B antes del despliegue. Fase 3, Formulario en producción = `workflow.json` acepta payload v1 y v2; subir el flujo; prueba de punta a punta con un lead de prueba en WazaCRM (se borra después); activar `ServiceForm`; eventos GA4 con `service`; WhatsApp estandarizado; actualizar `docs/event-dictionary.md`. Fase 4, Ola 2 = tiendas, landing, rediseño, WhatsApp, chatbots, IA (migrada a la plantilla) y SEO local, con sus ilustraciones. Fase 5, Ola 3 = las 15 páginas de R17 (cybersource migrada) y los 5 hubs restantes (`crecimiento`, `marketing`, `tecnologias`, `funcionalidades`, `saas`). Cada fase se publica con aprobación explícita del dueño por push, con `scripts/check-prod.sh` y `gh run watch`, y con export de Search Console el día antes en las fases 2, 4 y 5. Verificación: cada fase cierra con `npm run verify` en verde.
- R27 (precios; reemplaza la tabla de la sección 6 y R11): inventario verificado con grep. Confirmados: web 550 / 1.250 / 1.950 / 2.900, mantenimiento desde 59 al mes e infraestructura desde 350 al año, plan gestionado de 350 de puesta en marcha más 169 al mes (`src/lib/site.ts`) y WazaCRM desde 349 al mes. Propuestos, publicados hoy con comentario «propuesto» o «Confirmar» en `src/lib/pages/marketing.ts`: gestión de Google Ads y Meta desde 300 al mes, trafficker dedicado 300 al mes por cuenta, contenido desde 250 al mes, email desde 200 al mes, WhatsApp desde 150 al mes y n8n desde 300 por automatización. Sin precio: SEO e IA. Regla: los precios ya publicados se conservan; ni la respuesta citable ni `Offer` en el schema usan un precio propuesto, y el validador comprueba que todo `Offer` salga de un precio confirmado de `site.ts`.
- R28 (validador; reemplaza el origen de datos de R2 y la caducidad de R10): el validador lee `dist/` (HTML, JSON-LD y atributos `data-*` que la plantilla emite: `data-page-type` en `<main>` y los datos de cada punto); no importa TypeScript. Tipos de página: servicio con precio, servicio cotizado, producto o plan, home, pilar, hub y precios; home, pilar, hubs y precios se validan con reglas reducidas escritas en `SCORECARD.md` (schema válido, respuesta citable, preguntas frecuentes y enlaces). Comprueba también la respuesta de 40 a 60 palabras (servicios y pilar), preguntas frecuentes de 6 o más en servicios y de 8 o más en la pilar, ausencia de `AggregateRating` y `Review`, y la lista de afirmaciones bloqueadas. Informa por página cuántos de los 10 puntos tienen evidencia y cuántos son blanco honesto (indicador, no bloquea). Las páginas hechas a mano se cubren con la lista fija `scripts/exclusiones-marcador.json`, con motivo y sin caducidad. Verificación: pruebas con `node:test` para una página válida, una a la que le falta cada punto, una con blanco honesto y una excluida.
- R29 (verify y CI; reemplaza R4 donde choca): `npm run verify` ejecuta `astro build`, levanta `astro preview` en un puerto libre y corre `qa-seo`, `check-links`, el validador, las pruebas y `qa-a11y` (cuya lista `PAGES` se amplía a las 3 páginas de servicio de la ola 1, la home, la pilar y `/precios/`; en Windows exige `CHROMIUM_PATH`); al terminar cierra el preview. Un job de CI previo al despliegue en `.github/workflows/deploy.yml` corre `npm ci`, `astro build`, `qa-seo`, `check-links`, el validador y las pruebas, sin navegador; axe y responsive corren en local antes de cada push. Verificación: un cambio que rompe el validador deja el job en rojo y el despliegue no corre. El Dockerfile sigue ejecutando solo `npm run build`.
- R30 (formulario; reemplaza R6 donde choca): el destino del lead es WazaCRM, vía n8n (`docs/contacto-n8n/armar-lead-crm.js`), no NousCRM. `origen` ya se envía hoy (`src/components/ContactForm.astro:173`); lo nuevo es `detalle` (objeto por servicio) y `servicio_clave`; `servicio` conserva la etiqueta de texto actual para no romper n8n. La fuente normativa de los 13 servicios, sus claves, sus preguntas y la forma de `detalle` es `docs/specs/rediseno-elementoweb/FORMULARIO.md`, derivada de `prototipo/design-preview.html`. El componente nuevo se construye en la Fase 1 pero se activa en la Fase 3, después de actualizar y probar n8n; las fases 1 y 2 usan `ContactForm` con `?servicio=`. `src/scripts/track.ts` obtiene `service` de un atributo `data-service` del `<main>` o del enlace. Se actualiza `docs/event-dictionary.md`.
- R31 (S5 unificada): S5 es informativa; no bloquea construir y bloquea solo el despliegue de la home hasta que el dueño apruebe el H1 viendo el resultado.
- R32 (R25 corregida): los valores por defecto deciden qué se construye, nunca qué se publica ni qué se gasta. Publicar exige aprobación explícita por push. El gasto en fal fue autorizado por el dueño el 12-oct («procede con todo») hasta el tope de $4, y pasar de ahí exige una aprobación nueva. El H1 se construye con la propuesta y se publica solo con aprobación.
- R33 (afirmaciones sin verificar; reemplaza R13): «Meta Verified», «100% interno» y «equipo interno» aparecen en 9 archivos (`src/components/Footer.astro`, `src/lib/pages/blog-4.ts`, `core.ts`, `diseno-web-panama.ts`, `funcionalidades.ts`, `marketing.ts`, `saas.ts`, `src/pages/index.astro` y `src/pages/inteligencia-artificial-para-empresas-panama/index.astro`). El dueño las confirma antes de la Fase 2; cada página que se rediseña quita las que no estén confirmadas; el validador mantiene la lista de afirmaciones bloqueadas para las páginas que ya pasaron por su ola.
- R34 (permisos): «Equipo: solo personas con permiso» y las capturas de proyectos con permiso del cliente se preguntan al dueño antes de la Fase 2; por defecto no se amplían ni se repiten: solo se usan los proyectos y las personas ya publicados hoy.
- R35 (palabras clave; reemplaza el alcance de R14): paso 0 de la Fase 1 = export completo de Search Console (164 consultas y todas las páginas). `KEYWORDS.md` cubre las páginas comerciales (home, pilar, `/precios/`, 25 servicios y 6 hubs) con title, description y H1 de cada una, incluido `/servicios/` (cambian title y description, no solo el H1). Blog, industrias y Miami quedan fuera de la regla de no repetir, pero no pueden usar como principal la palabra de una página comercial.
- R36 (PageSpeed vinculante; reemplaza R5 en lo de la herramienta): PageSpeed Insights móvil es la medida vinculante (línea base de `audit/changelog-final.md`: home 89, corporativo 85); se captura antes de la Fase 1 en `audit/baseline-perf.md`. Lighthouse local con 150 ms de latencia es el indicador de trabajo y no cuenta como gate. Presupuesto del LCP: portada en WebP de 60 KB o menos a 1200 px, con dimensiones declaradas y `fetchpriority=high`.
- R37 (schema de la home): la home usa un `ItemList` de `Service` sin `Offer`, porque `scripts/qa-seo.mjs:34` exige precio mayor que cero en cada oferta de un `OfferCatalog`; `OfferCatalog` queda solo en `/precios/`.
- R38 (GEO; reemplaza R15 en lo del panel): se reutiliza `docs/geo-panel-preguntas.md` (20 preguntas, 5 motores, cadencia mensual) y se fija un subconjunto de 10 preguntas para las verificaciones de cada ola; el resultado va en `audit/`.
- R39 (trazabilidad): la sección 13 queda con diferido S7 (autoridad externa) y S8 (casos con cifras) en `TODOS.md`, omitidos S9 y S10, y la posición en Search Console como indicador rezagado que depende de S7.
- R40 (precisiones): `PageData` gana un campo opcional `serviceName` (nombre corto del servicio) para el mensaje de WhatsApp y el formulario, con la regla `serviceName ?? h1`; se crea `src/data/`; el import del Preloader está en `src/pages/index.astro:5` y su uso en `:77`; la home enlaza a todas las páginas del mapa 3.1; «gate final» es la puerta de aprobación de este /autoplan y «Puerta B» son las confirmaciones del dueño antes de la Fase 2; R21 ya está copiado en el árbol de trabajo y falta su commit.
- R41 (mediciones): `scripts/medir.mjs` mide la URL de producción después de desplegar; una página sin desplegar queda con blanco honesto; `npm run verify` avisa, sin fallar, cuando una medición vence en menos de 10 días.
- R42 (documento normativo; tercera revisión): `docs/specs/rediseno-elementoweb/DECISIONES.md` fija lo que se construye y prevalece sobre el cuerpo y sobre cualquier enmienda anterior. Su tabla de vigencia declara qué enmiendas quedan reemplazadas (S1, S2, S4, S5, S6, R1, R3 a R11, R13 a R16 y R25) y resuelve los 37 hallazgos de la tercera revisión (D1 a D14 y la sección 4 de trazabilidad). Alcance base aprobado por el dueño el 12-oct («procede con todo»): secciones 3 a 7 del SPEC, más R6, R15, R16 y R17 en la forma que fija DECISIONES.md. Verificación: DECISIONES.md existe, cada hallazgo apunta a una decisión, y la tabla de vigencia cubre todas las enmiendas.
- R43 (voces independientes de la fase de estrategia; D15 a D19 de `DECISIONES.md`): S7 pasa de diferido a frente paralelo de autoridad desde la fase 1 (D15, taste); línea base de leads, 5 compromisos verificables y revisión de datos a las 8 y 12 semanas (D16); la medición nunca queda en blanco y ninguna página sale con medición y prueba de proyecto en blanco a la vez (D17); el resultado de S5 va al dueño antes de la fase 2b como entrada de arquitectura (D18); orden de ejecución 1, 2a, 3, 2b, 4, 5, paso 0 con filtro de posiciones 8 a 30, correo opcional en el formulario, alerta de 0 consultas, fechas manuales solo en home, pilar y ola 1, y software propio fuera del mapa de servicios de la home (D19). Verificación: DECISIONES.md contiene D15 a D19 y `TODOS.md` recoge el frente de autoridad y las 3 ideas de crecimiento. Challenge del usuario UC1 (no se decide aquí): ver el registro de revisión.
<!-- /autoplan-accepted:ceo -->

### Design phase (autoplan, 12-oct-2026)

**Superficie:** MARKETING/LANDING (la home y las páginas de servicio persuaden; los artículos del blog son lectura y no entran en este alcance). **Paso 0:** completitud de diseño 6/10: el plan define bien contenido, SEO y tokens (`DESIGN.md`, prototipo) pero deja sin decidir el orden de la home, los estados del formulario, la navegación y la especificación visual de los bloques nuevos. Un 10 tendría un orden de lectura por ruta, una tabla de estados del formulario, una matriz de precio por superficie y reglas responsivas por ancho. `DESIGN.md` existe y calibra todas las decisiones. Se reutilizan el prototipo aprobado, los tokens, el comprobante y los componentes de `Blocks.astro`.

#### Voces independientes de diseño

**CLAUDE SUBAGENT (diseño, INPUT design 8a047d1c):** estrategia sólida y poco común (comprobante, blanco honesto, respuesta antes del adorno); débil en 4 cosas: el orden final de la home, los estados del formulario, la navegación y la especificación visual de hubs, `/precios/` y `/servicios/`, y las tres capas de enmiendas que se contradicen. Críticos: H1 (falta el orden de la home), M1 (ciclo de vida del formulario). Altos: héroe sin jerarquía y con tres definiciones del riel, dos respuestas apiladas, precio distinto en cada superficie, medición universal que no prueba servicios no web, cambio de servicio con respuestas escritas, botón de portada contra formulario de la sección 10, home sin capa de confianza si los permisos no llegan, un solo botón al inicio y el formulario en el décimo bloque, navegación ausente, páginas con más tráfico con la portada más débil, y plan que describe estructura y no interfaz. Medios (6): comparativa en móvil y en impresión (celdas vacías de un tercio del ancho, sin `@media print`, anunciadas como «vacío»), imágenes sin estados definidos (caja 3:2, fondo reservado, fallo del WebP, posición en móvil), «medida hoy» del cuerpo contra D6, «por qué es mejor» antes de «qué incluye», banco de criterios de la comparación sin definir y momento animado ambiguo (comprobante del héroe o de la sección de evidencia). Su lista de contradicciones entre capas incluye también correo obligatorio contra opcional (D19), destino del lead (DESIGN.md contra D10) y 7 filas del mapa contra 6 en D19. Total: 2 críticos, 11 altos (su resumen dice 9 pero lista 11) y 6 medios, 19 en total.

**CODEX (gpt-5.6-terra; OUTSIDE_STATUS completed; FINDINGS P0):** rechazo duro: «imagen bonita con marca débil». El plan sustituye autoridad por imaginería 3D; la jerarquía sirve al desarrollador y al validador de SEO, no al comprador. Críticos: ilustración en lugar de prueba, conflicto entre «blanco honesto» y las reglas posteriores, y mapa de 13 servicios contra 25 páginas sin tabla. Altos: jerarquía de plantilla antes que de comprador, estados de interacción ausentes, responsivo como ocurrencia tardía (solo 2 anchos), accesibilidad aspiracional, 43 enmiendas con contradicciones vivas. Medios: dirección visual genérica, columna «tu otra cotización» que convierte todo en comparación de precio, métricas de éxito sin embudo, y sin texto de botones.

```
DESIGN OUTSIDE VOICES — LITMUS SCORECARD:
═══════════════════════════════════════════════════════════════
  Check                                    Claude    Codex  Consensus
  ─────────────────────────────────────── ───────── ─────── ─────────
  1. Brand unmistakable in first screen?   NOT SPEC'D NO     CONFIRMED (gap): falta el héroe de la home
  2. One strong visual anchor?             YES       NO      DISAGREE: comprobante + ilustración (Claude) contra falta de ancla en la home (Codex)
  3. Scannable by headlines only?          NOT SPEC'D NO     CONFIRMED (gap): rótulos genéricos y dos respuestas apiladas
  4. Each section has one job?             NO        NO      CONFIRMED (no): respuesta, evidencia, prueba y por qué es mejor se solapan
  5. Cards actually necessary?             YES       YES     CONFIRMED (yes): filas y tabla, sin cuadrícula de tarjetas
  6. Motion improves hierarchy?            NOT SPEC'D NO     CONFIRMED (gap): el momento animado era ambiguo
  7. Premium without decorative shadows?   NOT SPEC'D NO     DISAGREE: sin evaluar contra no
  ─────────────────────────────────────── ───────── ─────── ─────────
  Hard rejections triggered:               none      1       DISAGREE: «imagen bonita con marca débil» (Codex)
═══════════════════════════════════════════════════════════════
```

**Paso por paso, con la auto-decisión de cada hallazgo** (los arreglos viven en `DECISIONES.md`, D20 a D29, y en `DESIGN.md`):

| Pasada | Antes | Después | Hallazgos y decisión |
|---|---|---|---|
| 1. Arquitectura de información | 4/10 | 8/10 | Hallazgo duro [HARD REJECTION] de Codex y falta de orden de la home: D20 fija el orden de 8 secciones, el héroe y su riel; D21 reordena la página de servicio para el comprador. Queda en 8 por el diseño visual de hubs, `/precios/` y `/servicios/`, que se especifica en la fase 2b |
| 2. Estados de interacción | 3/10 | 9/10 | D22 tabla de estados del formulario; ancla a `#formulario` dentro de la página de servicio y `/contacto/?servicio=` fuera; resumen de servicio con «cambiar»; conservación de respuestas |
| 3. Recorrido y arco emocional | 5/10 | 8/10 | Storyboard abajo; D21 repite el botón junto al precio y el plazo, añade barra fija móvil y manda los relacionados después del formulario; D23 matriz de precio por superficie |
| 4. Riesgo de «AI slop» | 5/10 | 8/10 | Hard rejection de Codex: D25 impide la ilustración sola y fija el ancla de la home; D24 define los estados válidos de prueba. Taste: se confirma en el gate final |
| 5. Alineación con el sistema de diseño | 7/10 | 9/10 | D26: `DESIGN.md` corregido (riel, destino del lead, momento animado) y 4 componentes nuevos con tokens |
| 6. Responsivo y accesibilidad | 4/10 | 8/10 | D27: tres anchos, toques de 44 px, teclado en las fichas, resumen de errores, impresión de la comparación y caja 3:2 reservada |
| 7. Decisiones sin resolver | n/a | n/a | 3 resueltas (botón de la home, orden móvil, texto del blanco); 1 aplazada (diseño visual de hubs, `/precios/` y `/servicios/`, a la fase 2b) |

```
  STEP | USER DOES                          | USER FEELS                       | PLAN SPECIFIES?
  -----|------------------------------------|----------------------------------|----------------------------------
  1    | Llega desde Google a una página    | «¿esto es lo que busqué?»        | H1, bajada y comprobante (D21)
  2    | Lee la respuesta fechada           | Confianza: respuesta directa     | Bloque answer con «Actualizado» (D21)
  3    | Mira la prueba                     | «¿es real?»                      | Comprobante, captura y medición; estados de D24
  4    | Revisa qué incluye y qué no        | Claridad, sin letra chica        | includes con tres listas (D21)
  5    | Ve plazo y precio o cotización     | Si hay cifra: seguridad; si no: «cotización cerrada» explícita | Matriz D23 y botón repetido
  6    | Compara con su otra cotización     | Control                          | Banco de criterios y mínimo de 4 (D28)
  7    | Lee las preguntas frecuentes       | Objeciones resueltas             | FAQ con el mismo texto del schema
  8    | Llena el formulario o pulsa WhatsApp | Poco esfuerzo                    | Nombre y WhatsApp; estados de D22
  9    | Recibe confirmación                | Alivio: sabe qué sigue           | Éxito con botón de WhatsApp (D22)
  Horizontes: 5 s (H1 y comprobante), 5 min (respuesta, prueba, incluye), 5 años (la web que se recuerda como honesta).
```

**Registro de decisiones de diseño:**

| Decisión necesaria | Si se difiere |
|---|---|
| Orden de la home y riel | El implementador deja el mapa en la fila 8 de 14 y vuelve a vender solo web |
| Estados del formulario | Se envía solo con validación y sin éxito ni fallo reales |
| Precio por superficie | La portada dice «cotización» y dos scrolls más abajo aparece una cifra |
| Móvil de la comparación | Una tercera parte del ancho queda en celdas vacías |
| Diseño visual de hubs, `/precios/` y `/servicios/` | Se resuelve en la fase 2b con una captura aprobada; mientras tanto hereda la plantilla de servicio |

#### Salidas de la fase de diseño

**NOT in scope (diseño).** Rediseño visual de industrias, Miami y blog; modo oscuro; animaciones adicionales; librerías de interacción; fotografía de stock.

**What already exists (diseño).** `DESIGN.md` (tokens, comprobante, formulario), `prototipo/design-preview.html` (héroe, comprobante, comparación, formulario con estados de validación), `Blocks.astro` y la plantilla `[...slug].astro`, `Pic.astro` y `img.ts` (imágenes responsivas y alt), `ContactForm.astro` (estados actuales de envío).

**TODOS.md (diseño).** Un ítem: diseño visual de los hubs, `/precios/` y `/servicios/`, con captura aprobada (se añade a la fase 2b, no a `TODOS.md`).

**Approved Mockups.** Ninguno generado en esta fase: el diseñador de gstack requiere una clave de OpenAI que no está configurada. La referencia visual aprobada es `docs/specs/rediseno-elementoweb/prototipo/design-preview.html`.

#### Implementation Tasks (diseño)

- [ ] **T13 (P1, human: ~3h / CC: ~25min)** — Home — Especificar y construir el orden final, el héroe, el riel de 6 nombres y el botón «Cotizar mi proyecto»
  - Surfaced by: Pasada 1 (D20); voz de Claude H1/H2 y Codex jerarquía
  - Files: `src/pages/index.astro`, `src/styles/global.css`
  - Verify: héroe y botón visibles a 1440×900 y 390×844; orden coincide con D20
- [ ] **T14 (P1, human: ~1d / CC: ~40min)** — Plantilla — Reordenar la anatomía de servicio, barra fija móvil, ancla `#formulario` y matriz de precio
  - Surfaced by: Pasadas 1 y 3 (D21, D23); voz de Claude J1/J2/H3/H4
  - Files: `src/pages/[...slug].astro`, `src/components/Blocks.astro`, `src/lib/types.ts`
  - Verify: prueba de la matriz con una página confirmada, una propuesta y una cotizada
- [ ] **T15 (P1, human: ~1d / CC: ~40min)** — ServiceForm — Estados, resumen de servicio, conservación de respuestas y accesibilidad
  - Surfaced by: Pasada 2 (D22); voz de Claude M1/M2 y Codex estados
  - Files: `src/components/ServiceForm.astro`
  - Verify: prueba de navegador por cada estado con `fetch` simulado
- [ ] **T16 (P2, human: ~4h / CC: ~30min)** — Componentes — Fila de servicio, `answer`, `includes` y `compare` con tokens, apilado compacto e impresión
  - Surfaced by: Pasadas 5 y 6 (D26, D27)
  - Files: `src/components/Blocks.astro`, `src/styles/global.css`
  - Verify: capturas a 390, 768 y 1440; contrastes del validador
- [ ] **T17 (P2, human: ~3h / CC: ~20min)** — Comprobante — Estados de prueba, texto literal del blanco y regla de medición por tipo de servicio
  - Surfaced by: Pasada 4 (D24, D25); voz de Codex prueba
  - Files: `src/components/Blocks.astro`, `src/data/mediciones.json`
  - Verify: prueba del validador con los tres estados válidos y uno no publicable

#### Completion Summary (diseño)

```
  +====================================================================+
  |         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | System Audit         | DESIGN.md existe; UI scope: home, 25 págs,  |
  |                      | formulario; prototipo aprobado              |
  | Step 0               | 6/10; foco en las 7 pasadas                 |
  | Pass 1  (Info Arch)  | 4/10 → 8/10 after fixes                     |
  | Pass 2  (States)     | 3/10 → 9/10 after fixes                     |
  | Pass 3  (Journey)    | 5/10 → 8/10 after fixes                     |
  | Pass 4  (AI Slop)    | 5/10 → 8/10 after fixes                     |
  | Pass 5  (Design Sys) | 7/10 → 9/10 after fixes                     |
  | Pass 6  (Responsive) | 4/10 → 8/10 after fixes                     |
  | Pass 7  (Decisions)  | 3 resolved, 1 deferred                      |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (5 items)                           |
  | What already exists  | written                                     |
  | TODOS.md updates     | 0 items proposed                            |
  | Approved Mockups     | 0 generated, 0 approved                     |
  | Decisions made       | 10 added to plan (D20 a D29)                |
  | Decisions deferred   | 1 (diseño visual de hubs, precios y servicios) |
  | Overall design score | 3/10 → 8/10                                 |
  +====================================================================+
```

Decisiones de gusto (TASTE) que se muestran en el gate final: DT1, mezcla de ilustración 3D y capturas reales como ancla visual (D25); DT2, columna «tu otra cotización» en la comparación (D28).

#### Decision Audit Trail (diseño)

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 13 | Design | Orden de la home en 8 secciones, héroe con botón propio y riel de 6 nombres (D20) | Mechanical | P1, P5 | Las dos voces piden fijar el orden; el plan lo dejaba al implementador | Dejarlo abierto |
| 14 | Design | Anatomía de servicio reordenada, botón repetido junto al precio y barra fija móvil (D21) | Mechanical | P1 | Un solo botón al inicio y formulario en el décimo bloque; «relacionados» sacaba al visitante antes de convertir | Orden anterior |
| 15 | Design | Tabla de estados del formulario (D22) | Mechanical | P1 | Hallazgo crítico: sin éxito ni fallo especificados se envía con solo validación | Estados implícitos |
| 16 | Design | Matriz de precio por superficie (D23) | Mechanical | P5 | El mismo servicio decía «cotización» en la portada y una cifra más abajo | Que cada superficie decida |
| 17 | Design | Estados de prueba válidos y comprobante por tipo de servicio (D24) | Mechanical | P1, P4 | La medición universal no prueba servicios que no son web | Una sola medición para todo |
| 18 | Design | La ilustración nunca va sola; ancla de la home = comprobante y, con permiso, captura real (D25) | Taste | P3 | Codex marca rechazo duro («imagen bonita con marca débil»); Claude acepta el comprobante como ancla | Ilustración 3D sola |
| 19 | Design | `DESIGN.md` corregido y cuatro componentes nuevos con tokens (D26) | Mechanical | P5 | Contradecía al plan en riel, destino del lead y momento animado | Dejar la contradicción |
| 20 | Design | Tres anchos, toques de 44 px, teclado en fichas, resumen de errores, impresión y caja 3:2 (D27) | Mechanical | P1 | El responsivo y la accesibilidad eran una ocurrencia tardía | Solo dos anchos |
| 21 | Design | Banco de criterios con mínimo de 4 y columna «tu otra cotización» opcional (D28) | Taste | P3 | Evita comparaciones inventadas, pero la columna convierte todo en precio | Columna fija |
| 22 | Design | Diseño visual de hubs, `/precios/` y `/servicios/` aplazado a la fase 2b (D29) | Mechanical | P3 | Dependen de la plantilla de servicio y de la decisión de S5 | Especificarlo ahora |
| 23 | Design | Sin mockups generados; la referencia es `prototipo/design-preview.html` | Mechanical | P4 | El diseñador de gstack exige una clave de OpenAI que no está configurada | Generar con otra herramienta |

<!-- autoplan-accepted:design -->
- R44 (precedencia; reemplaza la línea «PRECEDENCIA» del encabezado, que nombra solo S1 a S6 y R1 a R41): manda `docs/specs/rediseno-elementoweb/DECISIONES.md` (D1 a D29 y su tabla de vigencia); después, las obligaciones aceptadas de este documento que esa tabla declare vigentes (S1 a S6, R1 a R43 y las viñetas D20 a D29 de este bloque); después, el cuerpo. `DESIGN.md` y `prototipo/design-preview.html` son referencia visual y ceden ante `DECISIONES.md`. Verificación: la tabla de vigencia de `DECISIONES.md` tiene una fila para R44 y para D20 a D29.
- D20: orden final de la home en 8 secciones, héroe con H1, bajada de 15 a 20 palabras, botón «Cotizar mi proyecto» hacia `/contacto/?servicio=definir`, WhatsApp secundario, comprobante como ancla y riel con los nombres de los 6 servicios sin cifras; orden móvil explícito. Verificación: capturas a 1440×900 y 390×844 con el botón visible.
- D21: anatomía de servicio reordenada (portada, respuesta fechada, prueba, qué incluye, cómo lo hacemos con botón repetido, por qué es mejor, preguntas, formulario, relacionados después); barra fija móvil; ancla `#formulario` dentro de la página. Verificación: prueba de orden de bloques y del ancla.
- D22: tabla de estados de `ServiceForm` (inactivo, inválido, enviando, éxito, fallo de red, fallo parcial, trampa, cambio de servicio) con resumen «Servicio: X · cambiar». Verificación: prueba de navegador por estado.
- D23: matriz de precio por superficie (confirmado, propuesto, cotizado) con redacción literal. Verificación: prueba con una página de cada estado.
- D24: estados de prueba válidos, texto literal del blanco y comprobante por tipo de servicio. Verificación: prueba del validador.
- D25 (TASTE): la ilustración nunca va sola; ancla de la home = comprobante y, con permiso, captura real. Verificación: revisión de cada portada contra la regla.
- D26: `DESIGN.md` corregido y con 4 componentes nuevos (hecho, validado con `gstack-design-md.ts check`).
- D27: tres anchos de diseño, toques de 44 px, teclado en las fichas, resumen de errores con `aria-live`, impresión de la comparación y caja 3:2 reservada. Verificación: capturas a 390, 768 y 1440 y axe sin hallazgos.
- D28 (TASTE): banco de criterios con fuente y mínimo de 4 por comparación; columna «tu otra cotización» opcional por página. Verificación: el validador cuenta los criterios.
- D29: lo que queda para el implementador está nombrado y los hubs usan su enlace actual hasta la fase 5.
<!-- /autoplan-accepted:design -->

### DX phase (autoplan, 13-oct-2026)

Phase 2.5 skipped: no developer-facing scope detected (sitio de marketing y formulario de contacto; no hay API, CLI, SDK ni documentación para desarrolladores). No es una revisión completada.

### Eng phase (autoplan, 13-oct-2026)

**Alcance revisado:** `## Implementation plan` del SPEC (con S1 a S6, R1 a R44 y D20 a D29) más `DECISIONES.md` (D1 a D29), contra el código real del repo. Las dos voces de esta fase recibieron el mismo plan congelado (INPUT eng f026d62e) y pudieron leer el repo en solo lectura.

#### Paso 0: Scope Challenge

**Qué ya resuelve cada subproblema (evidencia en el repo):**

| Subproblema | Ya existe | Qué falta |
|---|---|---|
| Validar páginas del build | `scripts/qa-seo.mjs` (con `--snapshot` y `--compare`, líneas 3 y 4), `check-links.mjs`, `qa-a11y.mjs` (15 páginas), `qa-responsive.mjs` | Validador del marcador sobre `dist/`, manifiesto de páginas, `npm run verify` |
| Formulario por servicio | `ContactForm.astro` (mapas `PLAN` y `MODE` en las líneas 50 a 66, `intento` en la 110), `site.ts:421` (`planKey`), `[...slug].astro:24` (`SERVICE_KEYS`), `types.ts:58` (`serviceKey`, sin uso) | Un solo esquema, `ServiceForm`, `detalle` |
| Envío del lead | Flujo n8n (`subir-flujo-contacto.mjs`, `armar-correo.js`, `armar-lead-crm.js`) | Contrato v2, deduplicación, respuesta temprana, endurecimiento |
| Despliegue | `deploy.yml` (un solo job, sin checkout) | Job de verificación previo con navegador |
| Mediciones | Lighthouse global instalado (`npm` global), `qa-responsive.mjs` | `medir.mjs`, `mediciones.json` |
| Tipos de página | `PageData` sin tipo; la ruta genérica sirve 249 de 250 páginas | Campo `kind` y manifiesto |

**Qué cambia lo mínimo:** nada de lo del plan se puede quitar sin romper algo que el dueño pidió (§0 del SPEC); la regla de /autoplan para esta fase es no reducir alcance (P2). El recorte posible vive en UC1 y es del dueño.

**Complejidad:** más de 8 archivos tocados y 6 componentes nuevos (validador, `medir.mjs`, `ServiceForm`, manifiesto, job de CI, `formulario.json`) [estimado: lista de T1 a T17 más T18 a T31]. La puerta de complejidad se activa. Decisión automática (regla de /autoplan): lista de funciones intacta; arreglo de archivos: se mantiene el original con tres consolidaciones que reducen piezas móviles (un solo `formulario.json`, un solo `precios.json`, un solo manifiesto de páginas). Registro: `scope accepted as-is`. Sin recortes propuestos a las funciones.

**Revisión de búsqueda:** no se añade infraestructura nueva. Patrones nuevos: validador de HTML estático con parser (Layer 1: un parser de HTML como dependencia de desarrollo es práctica estándar, la regex sobre HTML es el antipatrón conocido), cron de GitHub Actions (Layer 1), deduplicación con datos estáticos de n8n (Layer 1, incorporado en n8n). [Layer 1] en los tres. Sin búsqueda externa: Aside no está listo y no hay patrón nuevo de Layer 2 o 3.

**TODOS.md cruzado:** los 5 ítems existentes (autoridad, casos, búsqueda pagada, Fábrica de Webs, "mide tu web") no bloquean este plan. Se añaden 3 (Turnstile, clave de PageSpeed Insights, sonda programada del webhook). Ver "TODOS.md" abajo.

**Reality rows:**

```
REALITY: premise-table pass tabla P1 a P16 en el registro de la fase CEO, unverified=4 (P5, P10, P12, P13) docs/specs/rediseno-elementoweb/SPEC.md:323
REALITY: already-done pass git log origin/main desde 12-oct sin ningún archivo del validador, ServiceForm ni verify; scripts/ no contiene validar-marcador.mjs da04313
REALITY: surface-check pass lighthouse global, qa-seo --snapshot/--compare, gh run watch, astro preview, CHROMIUM_PATH existen; finding: la API de PageSpeed sin clave responde 429 (curl del 13-oct) scripts/qa-seo.mjs:3, scripts/qa-a11y.mjs:10, package.json:8
REALITY: binding-decisions pass gstack-decision-search no devuelve decisiones de esta rama que contradigan el plan; D40 modifica la etiqueta de D6 y se anuncia como reversión docs/specs/rediseno-elementoweb/DECISIONES.md:5
REALITY: numbers pass 250 HTML [measured: conteo de dist/], 25 servicios y 6 hubs [measured: directorios de dist/], blog 80 artículos [measured: dist/blog 81 índices], qa-a11y 15 páginas [measured: qa-a11y.mjs:12], PageSpeed 89 y 85 [re-measure before gate] scripts/qa-a11y.mjs:12
REALITY: deferred-asks pass las 4 instrucciones del dueño de §0 están cubiertas; diferidos con motivo: casos con cifras (S8), Turnstile, sonda programada SPEC.md:20
REALITY: pr-count pass cada fase es un push a main con aprobación del dueño, sin PR y sin .gstack/ship-policy.json (6 fases, costo de cola: un despliegue por fase) package.json:5
REALITY: units pass las únicas unidades nuevas son bytes de JS (presupuesto) y segundos de LCP; ningún umbral cambia de unidad scripts/presupuestos.json (por crear)
REALITY: perf-table finding no hay tabla de rendimiento con máquina, N y mediana para JS por plantilla; se crea en T27 con 5 corridas y la versión de Lighthouse package.json:5
REALITY: prior-art pass node-html-parser como dependencia de desarrollo: adoptar, es el parser estándar ligero (decisión DT-E2) package.json:18
REALITY: contract-assumptions finding el plan asume que WazaCRM guarda campos libres en extras; solo se confirma con el lead de prueba de la fase 3 scripts/subir-flujo-contacto.mjs:171
REALITY: dependency-fallback pass sin parser la fase 1 no se bloquea: el validador puede arrancar con expresiones regulares y migrar después, pero se pierde la comprobación cruzada del FAQPage DECISIONES.md D7
REALITY: obligation-tiers pass D30 a D33 son requisito de la fase 3, D34 a D39 de la fase 1, D40 a D43 de las fases 1 a 3, con presupuesto de tareas T18 a T31 DECISIONES.md D1
```

`PLAN_REALITY: phase=eng rows=7/7 missing=none unverified=4 verdict=complete`

#### Voces independientes de ingeniería

**CLAUDE SUBAGENT (ingeniería, INPUT eng f026d62e):** 14 hallazgos: 3 altos (correo opcional descarta leads en silencio; idempotencia falsa; la plantilla compartida sin red de seguridad), 2 medio-altos (la puerta real vive en la máquina del dueño; PageSpeed ≥ 90 frágil y el comprobante usa otra herramienta), 5 medios (esquema del formulario triplicado; webhook público sin control; validador fácil de engañar; mediciones y fechas envejecen; sin controles automáticos para las páginas con tráfico), 1 medio-bajo (arqueología de tres capas), 1 bajo-medio (activar `ServiceForm` deja viejas las mediciones de la ola 1), 1 bajo (`git revert` no revierte n8n) y 1 nota (FAQPage ya no da resultados enriquecidos). Lo que está bien: separar `build` de `verify`, validador sobre `dist/`, estados de precio y blanco honesto, v1 y v2 en n8n, honeypot con 200, orígenes CORS acotados, no tocar URLs.

**CODEX (gpt-5.6-terra; OUTSIDE_STATUS completed; FINDINGS P0):** 10 hallazgos: 1 crítico (el webhook público sigue siendo abusable), 6 altos (el éxito del formulario no significa que el CRM recibió el lead; migración v1 y v2 sin contrato ni idempotencia; la reversión de n8n no está especificada; el marcador sobre `dist/` se puede eludir y falta una fuente de verdad del alcance; "23 páginas usan la plantilla" subestima el radio de impacto; el CI actual solo despliega), 3 medios (las pruebas prometidas superan la automatización; el correo opcional choca con el backend; el presupuesto de rendimiento no prueba el objetivo). Recomendación: revisar el plan antes de la fase 1 porque la integridad de leads, la protección del webhook, el alcance del validador y las puertas de despliegue y reversión no están probadas.

```
ENG DUAL VOICES — CONSENSUS TABLE:
═══════════════════════════════════════════════════════════════
  Dimension                           Claude  Codex  Consensus
  ─────────────────────────────────── ─────── ────── ──────────
  1. Architecture sound?               NO      NO     CONFIRMED (no): plantilla compartida sin red, validador eludible, esquema triplicado
  2. Test coverage sufficient?         NO      NO     CONFIRMED (no): sin runner, navegador solo en local, 3 de 36 rutas cubiertas
  3. Performance risks addressed?      NO      NO     CONFIRMED (no): sin presupuesto de JS; PSI y Lighthouse local no coinciden
  4. Security threats covered?         NO      NO     CONFIRMED (no): webhook público; severidad difiere (medio contra crítico)
  5. Error paths handled?              NO      NO     CONFIRMED (no): leads descartados en silencio, duplicados, CRM mudo
  6. Deployment risk manageable?       NO      NO     CONFIRMED (no): CI sin checkout, n8n sin reversión; difieren en protección de rama
═══════════════════════════════════════════════════════════════
CONFIRMED = native + outside agree. 6/6 confirmed. Diferencias de grado, no de dirección: severidad del webhook (Claude medio, Codex crítico; se adopta alto) y protección de rama (solo Codex; se rechaza, ver DT-E1).
```

#### Sección 1: Arquitectura

```
                         NAVEGADOR (visitante)
   ┌───────────────────────────────────────────────────────────────┐
   │ página de servicio (kind=service) ──► #formulario              │
   │   ServiceForm (isla diferida, 14 claves de formulario.json)    │
   └────────────────────────────┬──────────────────────────────────┘
                                │ POST JSON v2 (payload_version, intento, servicio_clave, detalle_*)
                                ▼
   ┌── n8n (Hetzner) ───────────────────────────────────────────────┐
   │ Webhook ─► Code: validar + limitar + deduplicar (intento)       │
   │            ├─ botcheck lleno ─────────► 200 {ok:true}, sin efecto│
   │            ├─ inválido (sin nombre o teléfono) ─► 422 {ok:false} │
   │            ├─ duplicado ──────────────► 200 {ok:true}, sin efecto│
   │            └─ válido ─► Responder OK (200) ──┐  (respuesta temprana)
   │                         ├─► Brevo (correo; replyTo si hay correo)
   │                         └─► mapper ─► WazaCRM ──► error ─► alerta │
   └────────────────────────────────────────────────────────────────┘
   BUILD / VERIFICACIÓN                          DESPLIEGUE
   formulario.json ─┬─► ServiceForm              push a main
   precios.json ────┼─► site.ts, validador        └─► job verificar (npm ci, npm run verify, Chrome)
   páginas-comerciales.json ─► validador sobre dist/   └─► needs ─► job desplegar (ssh Netcup)
   PageData.kind ───► plantilla (rama service)              └─► comprobar 200
```

Hallazgos, de mayor a menor severidad:

1. `[P1] (confidence: 9/10) docs/contacto-n8n/armar-correo.js:40` — `if (!nombre || !email) { return [{ json: { invalido: true ... } }]; }`. La rama falsa de `Es un lead de verdad` va directo a `Responder OK` con `{"ok": true}` (`scripts/subir-flujo-contacto.mjs:200` y `:134`), y `ContactForm.astro:177` pinta éxito y emite `cf:lead`. Con el correo opcional de D19, un visitante que deja nombre y teléfono ve «éxito», GA4 cuenta una conversión y el lead no existe. Voces: Claude alto, Codex medio. Disposición: aceptado, D30.
2. `[P1] (confidence: 9/10) scripts/subir-flujo-contacto.mjs:194-204` — no hay deduplicación por `intento`, y `Responder OK` espera a `Enviar por Brevo` (`:203`) mientras la rama del CRM corre aparte (`:198`). Si Brevo tarda o el navegador aborta a los 15 s (`ContactForm.astro:156`), el CRM ya guardó el lead y el reintento crea otro registro y otro correo, aunque el texto de `:190` promete «no se duplicará». Es un fallo que ya existe hoy; el plan lo amplifica. Voces: Claude alto, Codex alto. Disposición: aceptado, D31.
3. `[P1] (confidence: 9/10) docs/contacto-n8n/armar-lead-crm.js:26-38` — el mapper solo reenvía 9 campos fijos; `intento`, `web`, `inicio`, `servicio_clave` y `detalle` se pierden, y `limpio()` (`armar-correo.js:25`) convertiría un objeto en `[object Object]`. La promesa de R30 (WazaCRM recibe servicio y detalle) no está respaldada. Voces: Claude medio, Codex alto. Disposición: aceptado, D32.
4. `[P1] (confidence: 8/10) scripts/subir-flujo-contacto.mjs:58-72` — `allowedOrigins` es CORS, no autenticación; un `curl` lo salta. El único filtro es el honeypot (`armar-correo.js:16`), y cada envío válido manda un correo de Brevo y una escritura en el CRM. El plan lleva el formulario a más de 25 páginas con texto libre en `detalle`. Voces: Claude medio, Codex crítico. Se adopta alto: la exposición ya existe y el plan la agranda. Disposición: aceptado, D33.
5. `[P1] (confidence: 9/10) src/pages/[...slug].astro:10-14` — `getStaticPaths` entrega todas las páginas del registro salvo la home: 249 de 250 HTML construidos [measured: conteo de `dist/`] (blog 80, industrias 30, Miami 13, guías, casos y más). D21 (barra fija, formulario en la sección 10, portada nueva) y el cambio de tokens tocan todas. `PageData` (`src/lib/types.ts:46-58`) no tiene tipo de página. Voces: Claude alto, Codex alto. Disposición: aceptado, D35 y D36.
6. `[P1] (confidence: 8/10) SPEC R28 y scripts/olas.json (por crear)` — el validador confía en atributos `data-*` que emite la plantilla y en una lista que omite lo que no nombra: una página nueva nunca se valida, y sin importar TypeScript no se puede comprobar que todo `Offer` salga de `site.ts` (R27). Voces: Claude medio, Codex alto. Disposición: aceptado, D35 y D39.
7. `[P2] (confidence: 9/10) src/components/ContactForm.astro:50-66, src/lib/site.ts:421, src/pages/[...slug].astro:24-29, src/lib/types.ts:58` — el esquema de servicios del formulario ya está en cuatro sitios (`PLAN`/`MODE`, `planKey`, `SERVICE_KEYS`, `serviceKey` sin uso) y el plan añade `serviceName` y las preguntas en `FORMULARIO.md`, en `ServiceForm` y en los nodos de n8n. Voces: Claude medio, Codex implícito. Disposición: aceptado, D34.
8. `[P2] (confidence: 9/10) .github/workflows/deploy.yml:33-67` — un solo job, sin `actions/checkout` ni build. El job de verificación de R29 necesita checkout, el mismo SHA y `needs:`; `qa-a11y.mjs:10` exige `CHROMIUM_PATH`, así que el navegador en CI es posible solo si se fija la ruta. Voces: Claude medio-alto, Codex alto. Disposición: aceptado, D37.
9. `[P2] (confidence: 7/10) scripts/subir-flujo-contacto.mjs:214` — `errorWorkflow: 'sanblasErrorAlert01'` es el alertador de otro proyecto; no se sabe quién ve los fallos de este flujo. Voz: Claude. Disposición: aceptado como tarea de operación, T29.
10. `[P2] (confidence: 8/10) scripts/subir-flujo-contacto.mjs:231,242` — la subida hace `PUT` y activa al instante; `workflow.json` del repo es la fuente (un `git revert` más volver a subir lo restaura), pero no hay exportación del flujo vivo antes de subir ni registro del id y la versión. Voces: Claude bajo, Codex alto. Disposición: aceptado, D41.

Disposiciones: 1 a 8 y 10 aceptados (D30 a D37, D41); 9 aceptado como tarea de operación (T29). Ningún hallazgo rechazado en esta sección.

#### Sección 2: Calidad de código

1. `[P2] (confidence: 9/10) ContactForm.astro:50-66 más site.ts:421 más [...slug].astro:24-29` — mismo hallazgo 7 de arquitectura (DRY): un único `src/data/formulario.json` alimenta el componente, el mapa página a clave validado en el build y la lista blanca de n8n. Se retiran `SERVICE_KEYS` y la rama por defecto de `planKey`. Disposición: aceptado, D34.
2. `[P3] (confidence: 8/10) docs/contacto-n8n/armar-correo.js:102` — `origen` entra en un `href` con solo `h()`, que escapa HTML pero deja pasar `javascript:`. Los clientes de correo suelen bloquearlo; riesgo bajo. Disposición: aceptado, validar `origen` en D33.
3. `[P2] (confidence: 8/10) SPEC R28` — el validador contaría palabras y preguntas con expresiones regulares sobre HTML (entidades, `set:html`, anidamiento). Disposición: aceptado, D39 con parser como dependencia de desarrollo (decisión de gusto DT-E2).
4. `[P3] (confidence: 8/10) SPEC.md:16` — el encabezado sigue nombrando S1 a S6 y R1 a R41; el cuerpo contradice a las enmiendas (el correo obligatorio de la sección 7, el orden de la sección 5). R44 ya fija la precedencia; falta consolidar tras el gate. Disposición: aceptado, D43.
5. `[P3] (confidence: 8/10) scripts/qa-a11y.mjs:19` — inyecta `.reveal{opacity:1!important;transform:none!important}` antes de medir, lo que oculta justo la falla que R18 quiere atrapar. Disposición: aceptado, D38.

Disposiciones: los cinco aceptados.

#### Sección 3: Revisión de pruebas

**Detección de framework:** `CLAUDE.md` del repo no tiene sección `## Testing`. `package.json:5-9` solo define `dev`, `build` y `preview`; no hay runner. Existen scripts de QA propios (`qa-seo`, `check-links`, `qa-a11y`, `qa-responsive`, `qa-chain`, `qa-sr`) y `playwright-core` y `axe-core` como dependencias de desarrollo. Decisión: `node:test` (incluido en Node, sin dependencia) para lo que no necesita navegador, y `playwright-core` ya instalado para lo que sí.

```
CÓDIGO / RUTAS                                         FLUJOS DE USUARIO
[+] scripts/validar-marcador.mjs (nuevo)               [+] Servicio → formulario
  ├── [GAP] página válida con precio                     ├── [GAP] [→E2E] botón → #formulario → éxito
  ├── [GAP] falta cada uno de los 10 puntos              ├── [GAP] [→E2E] doble clic en enviar
  ├── [GAP] blanco honesto etiquetado                    ├── [GAP] [→E2E] abortar a los 15 s y reintentar sin duplicar
  ├── [GAP] página excluida                              ├── [GAP] [→E2E] error de red
  ├── [GAP] página con data-page-type fuera del manifiesto├── [GAP] [→E2E] fallo parcial
  ├── [GAP] lista vacía de FAQ o de criterios            ├── [GAP] cambio de servicio conserva respuestas
  ├── [GAP] Offer fuera de precios.json                  ├── [GAP] teclado en las fichas (radio)
  └── [GAP] AggregateRating o Review presente            └── [GAP] barra fija móvil
[+] src/lib/pages/index.ts (kind)                      [+] Páginas y render
  ├── [GAP] las 250 páginas clasificadas sin "unknown"     ├── [GAP] contenido visible sin JavaScript
  └── [GAP] páginas que no son servicio, idénticas antes   ├── [GAP] elemento LCP con opacidad 1 y momento de pintura
      y después (qa-seo --compare)                         └── [GAP] héroe y botón visibles a 1440×900 y 390×844
[+] scripts/medir.mjs (nuevo)                          [+] Pruebas que ya existen
  ├── [GAP] PageSpeed con clave                          ├── [★★ TESTED] qa-seo: títulos, descripciones, schema
  ├── [GAP] sin clave → Lighthouse local etiquetado      ├── [★★ TESTED] check-links: enlaces rotos
  └── [GAP] fecha inyectable                             └── [★★ TESTED] qa-a11y: axe en 15 páginas
[+] docs/contacto-n8n/armar-correo.js (v2)
  ├── [GAP] v1 (payload actual)
  ├── [GAP] v2 con las 14 claves
  ├── [GAP] solo teléfono, sin correo
  ├── [GAP] honeypot lleno (200 sin efecto)
  ├── [GAP] sin nombre o sin teléfono (422)
  ├── [GAP] cuerpo enorme y origen con javascript:
  └── [GAP] mismo intento dos veces (un solo registro)
[+] docs/contacto-n8n/armar-lead-crm.js
  └── [GAP] detalle aplanado a detalle_<campo>
[+] flujo vivo (n8n)
  └── [GAP] [→E2E] Brevo caído con CRM sano, y al revés
[+] .github/workflows/deploy.yml
  └── [GAP] [→E2E] un cambio que rompe el validador deja el job en rojo y no despliega

COBERTURA: 3/36 rutas con prueba (8 %)  |  Código: 3/27 (11 %)  |  Flujos: 0/9 (0 %)
CALIDAD: ★★★:0 ★★:3 ★:0  |  GAPS: 33 (9 [→E2E], 0 [→EVAL])
Leyenda: ★★★ comportamiento + bordes + errores | ★★ camino feliz | ★ comprobación de humo
[→E2E] = necesita prueba de integración | [→EVAL] = necesita evaluación de LLM (ninguna: no hay cambios de prompts)
```

**Regla de regresión (IRON RULE):** el cambio puede romper el comportamiento actual de `ContactForm` y del flujo v1 (el correo sigue obligatorio hoy y n8n lo exige). Contrato de regresión a preservar: un payload v1 (campos de `ContactForm.astro:160-175`) sigue produciendo un correo y una ficha del CRM, y el correo sigue siendo obligatorio en `ContactForm` hasta que n8n acepte leads sin correo (D30). Aserciones: fixture v1 → correo y CRM; fixture v1 sin correo → 422 mientras el formulario viejo siga activo; nunca `{ok:true}` sin guardar. Está incluido en D30 y en las pruebas de T18.

**Tests obsoletos por este plan:** ninguno.

**Plan de pruebas escrito en disco:** `C:\Users\JosimarG\.gstack\projects\josimarguilbaud-elementoweb\JosimarG-main-eng-review-test-plan-20261013-004400.md` (ver "Salidas obligatorias").

Hallazgos de la sección (huecos): los 33 [GAP] del diagrama, agrupados en 9 unidades de trabajo (T18, T19, T21, T22, T23, T24, T25, T26, T27). Disposiciones: todos aceptados como requisito de prueba de las decisiones D30 a D42; ninguno depende de una decisión pendiente.

#### Sección 4: Rendimiento

1. `[P2] (confidence: 8/10) src/components/Preloader.astro:5,35-40` — capa fija a pantalla completa con bloqueo de scroll y salvavidas de 3,5 s sobre el LCP de la home. R18 ya lo retira de la home de agencia; falta una prueba que lo vigile. Disposición: cubierto por R18, prueba nueva en D38.
2. `[P2] (confidence: 8/10) package.json:10-16` — gsap y lenis siguen cargándose; el plan añade 14 formularios y el comprobante, sin presupuesto de bytes de JS por plantilla (el de 60 KB es de la portada, D14). Disposición: aceptado, D40 (presupuesto medido en `dist/` y `ServiceForm` como isla diferida).
3. `[P2] (confidence: 9/10) SPEC D6 y D14` — la cifra del comprobante sale de Lighthouse local y la puerta es PageSpeed Insights; la API de PageSpeed sin clave responde 429 [measured: curl del 13-oct-2026, HTTP 429 por cuota]. Sin clave, `medir.mjs` no puede usar la herramienta vinculante. Disposición: aceptado, D40 (clave gratuita como tarea del dueño y etiqueta con la herramienta real).
4. `[P3] (confidence: 6/10) scripts/qa-responsive.mjs` — verificar con confianza media: la medición local a 150 ms no es reproducible entre máquinas ni en CI. Disposición: aceptado, D40 (mediana de 5 corridas y versión de Lighthouse en `metodo`).

Escala: no hay consultas a base de datos ni bucles por petición; el sitio es estático y el único camino dinámico es el webhook (tráfico esperado de decenas de envíos al día, desconocido hasta que exista la línea base de leads, D16).

#### Registro de modos de fallo

| Camino nuevo | Fallo realista en producción | Prueba | Manejo de error | ¿Lo ve el usuario? | Brecha crítica |
|---|---|---|---|---|---|
| Lead sin correo (D19) | n8n descarta el lead y responde `{"ok": true}` | ninguna | ninguno (`armar-correo.js:40`) | ve «éxito» | **SÍ**: silencioso hasta D30 |
| Rama del CRM | WazaCRM cae; `onError: continueRegularOutput` | ninguna | traga el error, el correo sale | no | **SÍ**: el CRM pierde la ficha sin alerta (D31 añade la alerta) |
| Reintento tras abortar a los 15 s | Se duplican correo y ficha | ninguna | ninguno | ve «no se duplicará» | no es silencioso: dos fichas, pero la promesa es falsa (D31) |
| Cifra de medición vencida | Un comprobante muestra datos de hace meses | ninguna | `verify` solo avisa en local | no | **SÍ**: se publica indefinidamente (D40) |
| Página de servicio nueva fuera del manifiesto | Nunca se valida | ninguna | ninguno | no | **SÍ**: silencioso (D35) |
| Plantilla compartida | Una regresión en blog o industrias | ninguna | ninguno | sí, tarde | **SÍ**: ninguna red de seguridad hasta D36 |
| Flujo n8n subido con un error | `git revert` no revierte n8n | ninguna | subida manual | no | no tras D41 (exportación previa y sonda) |

Brechas críticas señaladas: 5, todas con decisión que las cierra (D30, D31, D35, D36, D40).

#### Salidas obligatorias de la fase

**NOT in scope.** Protección de rama con revisiones obligatorias (DT-E1: el repo tiene un solo autor y el dueño aprueba cada push). Turnstile o un desafío antibots en el formulario (a `TODOS.md`). Comparación de capturas por píxel como puerta (frágil; se revisa a mano con capturas por tipo de página). Un almacén duradero de deduplicación (los datos estáticos de n8n bastan para este volumen). Reescribir el flujo de n8n sobre otra plataforma. Evaluaciones de LLM (no hay prompts nuevos). Migrar el blog, industrias o Miami a la nueva plantilla.

**What already exists.** `qa-seo.mjs --snapshot/--compare` ya compara títulos, H1, canónico y schema por URL; D36 solo lo conecta a `verify`. `qa-a11y.mjs`, `qa-responsive.mjs` y `check-links.mjs` se reutilizan dentro de `verify`. El flujo de n8n ya tiene honeypot con 200, orígenes CORS acotados, reintentos de Brevo y `errorWorkflow`. `scripts/subir-flujo-contacto.mjs` ya versiona el flujo en `docs/contacto-n8n/workflow.json`. `ContactForm.astro` ya envía `intento` y `origen`. `PageData.serviceKey` ya existe sin uso. Lighthouse ya está instalado de forma global. Se reconstruye solo lo que no existe: validador, manifiesto, `formulario.json`, `precios.json`, `medir.mjs`, `ServiceForm`, el job de CI.

**Estrategia de paralelización con worktrees:**

| Paso | Módulos tocados | Depende de |
|---|---|---|
| Esquema único del formulario y precios (T20) | `src/data/`, `src/lib/site.ts`, `src/pages/` | — |
| Clasificación y manifiesto (T21) | `src/lib/pages/`, `src/lib/types.ts`, `src/pages/`, `scripts/` | — |
| Contrato de n8n y endurecimiento (T18, T19, T28) | `docs/contacto-n8n/`, `scripts/subir-flujo-contacto.mjs` | T20 |
| Validador endurecido (T24) | `scripts/` | T21 |
| CI, pruebas de navegador y presupuestos (T22, T23, T25, T27) | `.github/`, `scripts/`, `package.json` | T21 |
| Mediciones (T26) | `scripts/`, `src/data/`, `.github/` | T21 |

Carriles: A = T20 → T18, T19, T28 (comparten `docs/contacto-n8n/`); B = T21 → T24; C = T22, T23, T25, T26, T27 (comparten `scripts/` y `.github/`, en secuencia dentro del carril). Orden: lanzar A (T20) y B (T21) en paralelo; fusionar; luego lanzar A (T18, T19, T28), B (T24) y C en paralelo. Conflictos: `scripts/` lo tocan los tres carriles, así que cada carril añade archivos propios y `package.json` solo lo toca C.

#### Decisiones de ingeniería (auditoría)

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 24 | Eng | Contrato v2 del flujo: obligatorios nombre y teléfono, 422 para inválidos, el cliente exige `ok` en el cuerpo (D30) | Mechanical | P1 | El correo opcional descartaba leads con respuesta de éxito | Dejar el correo obligatorio en n8n |
| 25 | Eng | Deduplicación por `intento` con datos estáticos de n8n y respuesta temprana (D31) | Mechanical | P1 | El reintento duplica ficha y correo y la UI promete lo contrario | Almacén duradero |
| 26 | Eng | `detalle` aplanado a `detalle_<campo>` y mapper ampliado; confirmar `extras` con el lead de prueba (D32) | Mechanical | P1, P5 | El mapper descarta lo nuevo y `limpio()` rompería objetos | Enviar objetos anidados |
| 27 | Eng | Endurecimiento del webhook en el servidor y alerta de pico; Turnstile a `TODOS.md` (D33) | Mechanical | P1, P3 | CORS no es autenticación | Turnstile ahora |
| 28 | Eng | Un `formulario.json` y retirar `SERVICE_KEYS` (D34) | Mechanical | P4, P5 | Cuatro esquemas paralelos | Mantener los mapas |
| 29 | Eng | `PageData.kind` y manifiesto de páginas comerciales; rama de servicio como componente aparte (D35) | Mechanical | P5 | 249 páginas comparten plantilla | Heurística por `service` |
| 30 | Eng | Red de seguridad: `qa-seo --compare` con lista de cambios permitidos, enlaces entrantes, capturas por tipo (D36) | Mechanical | P1 | Cambiar tokens y plantilla sin red de seguridad | Diff de píxeles |
| 31 | Eng | Job `verificar` con navegador y `needs:`; `skip_checks` exige motivo (D37) | Mechanical | P1 | El CI actual solo despliega | CI sin navegador |
| 32 | Eng | No activar protección de rama | Taste | P3 | Un autor, aprobación explícita por push; Codex la pide | Protección con PR obligatorios |
| 33 | Eng | Estrategia de pruebas con `node:test` y pruebas de navegador nuevas (D38) | Mechanical | P1 | 3 de 36 rutas cubiertas | Pruebas manuales |
| 34 | Eng | Validador con parser (dependencia de desarrollo), cruces FAQPage y precios, y `precios.json` (D39) | Taste | P5 | La regex sobre HTML es frágil; revierte «sin dependencias nuevas» de R4 y R29 | Regex |
| 35 | Eng | Mediciones: etiqueta con la herramienta real, clave de PageSpeed, cron mensual, presupuesto de JS y `ServiceForm` diferido (D40) | Mechanical | P1 | La API sin clave da 429 y una cifra vieja se publica sin aviso | Solo Lighthouse local |
| 36 | Eng | Reversión de n8n: exportación previa, id y versión, sonda del honeypot (D41) | Mechanical | P1 | `git revert` no revierte n8n | Proceso manual |
| 37 | Eng | Salida de la fase 3: volver a medir la ola 1 (D42) | Mechanical | P1 | `ServiceForm` cambia el peso de JS | Medir una vez |
| 38 | Eng | Consolidar el SPEC tras el gate (D43) | Mechanical | P5 | Tres capas de enmiendas | Dejarlo |
| 39 | Eng | Nota: FAQPage no da resultados enriquecidos en sitios comerciales; se conserva por GEO sin más esfuerzo de validación | Mechanical | P3 | Hallazgo 14 de Claude | Quitar FAQPage |

#### Implementation Tasks (ingeniería)

- [ ] **T18 (P1, human: ~2d / CC: ~45min)** — n8n — Contrato v2: validación, 422, respuesta temprana, deduplicación por `intento`, `replyTo` condicional, alerta del CRM
  - Surfaced by: Arquitectura 1 y 2; D30 y D31
  - Files: `docs/contacto-n8n/armar-correo.js`, `docs/contacto-n8n/armar-lead-crm.js`, `scripts/subir-flujo-contacto.mjs`, `docs/contacto-n8n/workflow.json`
  - Verify: `node --test` con fixtures v1, v2 (14 claves), solo teléfono, honeypot, inválido, cuerpo enorme, mismo `intento` dos veces
- [ ] **T19 (P1, human: ~1d / CC: ~30min)** — n8n — Endurecimiento del webhook: topes de tamaño, lista blanca de `detalle`, `origen` validado, teléfono normalizado, alerta de pico
  - Surfaced by: Arquitectura 4; D33
  - Files: `docs/contacto-n8n/armar-correo.js`, `scripts/subir-flujo-contacto.mjs`
  - Verify: pruebas de cuerpo enorme y `origen` con `javascript:`; envío de más de 20 leads en una hora dispara la alerta
- [ ] **T20 (P1, human: ~1d / CC: ~30min)** — Datos — `src/data/formulario.json` y `src/data/precios.json`; retirar `SERVICE_KEYS`; generar `FORMULARIO.md`
  - Surfaced by: Arquitectura 7, Código 1; D34 y D39
  - Files: `src/data/formulario.json`, `src/data/precios.json`, `src/lib/site.ts`, `src/pages/[...slug].astro`, `src/components/ContactForm.astro`
  - Verify: el build falla si un `serviceKey` no está en `formulario.json`
- [ ] **T21 (P1, human: ~1d / CC: ~40min)** — Plantilla — `PageData.kind`, manifiesto `scripts/paginas-comerciales.json`, componente de servicio aparte
  - Surfaced by: Arquitectura 5 y 6; D35
  - Files: `src/lib/types.ts`, `src/lib/pages/index.ts`, `src/pages/[...slug].astro`, `src/components/ServicioPagina.astro`, `scripts/paginas-comerciales.json`
  - Verify: las 250 páginas clasificadas; `qa-seo --compare` sin cambios en las páginas que no son de servicio
- [ ] **T22 (P1, human: ~4h / CC: ~25min)** — Red de seguridad — `qa-seo` snapshot y comparación en `verify`, `scripts/cambios-permitidos.json`, enlaces entrantes y capturas por tipo de página
  - Surfaced by: Arquitectura 5; D36
  - Files: `scripts/qa-seo.mjs`, `scripts/cambios-permitidos.json`, `scripts/validar-marcador.mjs`
  - Verify: un cambio no listado en la plantilla deja `verify` en rojo
- [ ] **T23 (P1, human: ~4h / CC: ~25min)** — CI — Job `verificar` con checkout, Node y Chrome; `desplegar` con `needs:`; `skip_checks` con motivo
  - Surfaced by: Arquitectura 8; D37
  - Files: `.github/workflows/deploy.yml`, `package.json`
  - Verify: un cambio que rompe el validador deja el job en rojo y el despliegue no corre
- [ ] **T24 (P1, human: ~1d / CC: ~40min)** — Validador — parser, listas vacías que rompen el build, cruces de FAQPage y precios, manifiesto como fuente
  - Surfaced by: Código 3; D39
  - Files: `scripts/validar-marcador.mjs`, `scripts/validar-marcador.test.mjs`, `package.json`
  - Verify: `node --test` con página válida, cada punto ausente, blanco honesto, excluida, no listada y lista vacía
- [ ] **T25 (P2, human: ~1d / CC: ~40min)** — Pruebas de navegador — `scripts/qa-form.mjs` (estados de D22 con `fetch` simulado), `qa-a11y` sin JavaScript y con medición de opacidad del LCP, prueba de `dataLayer`
  - Surfaced by: Código 5, Sección 3; D38
  - Files: `scripts/qa-form.mjs`, `scripts/qa-a11y.mjs`
  - Verify: las pruebas fallan si el elemento LCP arranca con opacidad 0
- [ ] **T26 (P2, human: ~4h / CC: ~30min)** — Mediciones — `medir.mjs` con clave de PageSpeed y respaldo local etiquetado, cron mensual y aviso de fechas
  - Surfaced by: Rendimiento 3 y 4; D40
  - Files: `scripts/medir.mjs`, `.github/workflows/medir-vencidas.yml`, `src/data/mediciones.json`
  - Verify: prueba con fecha inyectable; el cron abre una incidencia con una medición de más de 45 días
- [ ] **T27 (P2, human: ~4h / CC: ~30min)** — Rendimiento — presupuesto de bytes de JS y CSS por plantilla en `dist/`, `ServiceForm` como isla diferida, tabla de 5 corridas
  - Surfaced by: Rendimiento 2; D40
  - Files: `scripts/presupuestos.json`, `scripts/validar-marcador.mjs`, `src/components/ServiceForm.astro`
  - Verify: `verify` falla al superar el presupuesto
- [ ] **T28 (P2, human: ~3h / CC: ~20min)** — Reversión — el uploader exporta el flujo vivo antes de subir y registra id y versión; `check-prod.sh` sondea el honeypot
  - Surfaced by: Arquitectura 10; D41
  - Files: `scripts/subir-flujo-contacto.mjs`, `scripts/check-prod.sh`, `docs/contacto-n8n/respaldo/`
  - Verify: la sonda del honeypot responde 200 y no deja ficha ni correo
- [ ] **T29 (P2, human: owner ~1h / CC: ~0)** — Operación — confirmar a quién avisa `sanblasErrorAlert01` y si Traefik admite límite de tasa en la ruta del webhook
  - Surfaced by: Arquitectura 9 y 4
  - Files: n8n y Traefik (fuera del repo)
  - Verify: un fallo provocado en el flujo llega a una bandeja que el dueño vea
- [ ] **T30 (P3, human: ~2h / CC: ~15min)** — Documento — tras el gate, reescribir el encabezado y las secciones 3, 5, 6 y 7 del SPEC; comprobación del encabezado en `verify`
  - Surfaced by: Código 4; D43
  - Files: `docs/specs/rediseno-elementoweb/SPEC.md`, `scripts/verify`
  - Verify: el encabezado del SPEC nombra `DECISIONES.md`
- [ ] **T31 (P3, human: ~2h / CC: ~15min)** — Salida de la fase 3 — volver a medir las páginas de la ola 1 con `ServiceForm` activo
  - Surfaced by: Voz de Claude (12); D42
  - Files: `src/data/mediciones.json`
  - Verify: cifras con fecha posterior a la activación

#### TODOS.md (ingeniería)

Tres ítems escritos en `TODOS.md` (el dueño no tiene que decidir nada ahora): desafío antibots Turnstile (P3), clave gratuita de la API de PageSpeed Insights (P2) y sonda programada del webhook (P3).

#### Completion Summary (ingeniería)

```
  +====================================================================+
  |            ENG PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | Step 0: Scope Challenge | scope accepted as-is                     |
  | Reality rows            | 13/13 applicable rows, 4 unverified      |
  | Architecture Review     | 10 issues found                          |
  | Code Quality Review     | 5 issues found                           |
  | Test Review             | diagram produced, 33 gaps identified     |
  | Performance Review      | 4 issues found                           |
  | NOT in scope            | written                                  |
  | What already exists     | written                                  |
  | TODOS.md updates        | 3 items proposed (3 written)             |
  | Failure modes           | 5 critical gaps flagged                  |
  | Unresolved decisions    | 0 in this review                         |
  | Outside voice           | codex (gpt-5.6-terra) completed          |
  | Parallelization         | 3 lanes, 2 parallel / 1 sequential       |
  | Lake Score              | N/A (decisiones automáticas)             |
  +====================================================================+
```

Decisiones de gusto (TASTE) que se muestran en el gate final: DT-E1, sin protección de rama (Codex la pide; el repo tiene un autor y el dueño aprueba cada push); DT-E2, un parser de HTML como dependencia de desarrollo en lugar de «sin dependencias nuevas» (revierte R4 y R29 en ese punto).

<!-- autoplan-accepted:eng -->
- R45 (alcance de R44; revisión de ingeniería): R44 se lee con `DECISIONES.md` completo, D1 a D43, y con las viñetas D20 a D43 de los bloques de diseño e ingeniería; D30 a D43 prevalecen sobre el cuerpo y sobre R4, R6, R28, R29 y R30 en los puntos que su tabla de vigencia declara reemplazados (parser como dependencia de desarrollo, CI con navegador, manifiesto de páginas en lugar de `olas.json`, contrato de leads v2). Verificación: la tabla de vigencia de `DECISIONES.md` tiene una fila para las viñetas D30 a D43 y para cada punto reemplazado.
- D30 (contrato de leads; precondición de la fase 3): el flujo de n8n exige solo nombre y teléfono (8 dígitos o más); el correo es opcional y, si viene, válido; `replyTo` de Brevo y el cuerpo del correo son condicionales al correo; un lead inválido responde 422 con `{"ok": false}`, nunca `{"ok": true}`; el honeypot y los duplicados responden 200 sin efecto; el cliente cuenta éxito y `generate_lead` solo si `res.ok` y `ok === true` en el cuerpo; el correo sigue siendo obligatorio en `ContactForm` hasta que n8n acepte leads sin correo; se agrega `payload_version` en v2 (ausente = v1). Verificación: `node --test` con fixtures v1, v2 de las 14 claves, solo teléfono, honeypot, sin nombre y sin teléfono; ningún caso devuelve éxito sin guardar.
- D31 (idempotencia y aislamiento de fallos): el flujo deduplica por `intento` con `$getWorkflowStaticData` (24 horas, máximo 500 ids); `Responder OK` se mueve justo después de validar, antes de Brevo y del CRM; Brevo conserva sus reintentos y su error dispara `errorWorkflow`; el nodo del CRM deja de tragar el error en silencio y avisa por la misma vía; se confirma a quién llega `sanblasErrorAlert01` (T29). Verificación: enviar el mismo `intento` dos veces deja un solo correo y una sola ficha; con Brevo caído y el CRM sano la ficha se guarda y llega una alerta; con el CRM caído el correo sale y llega una alerta.
- D32 (contrato del CRM): `detalle` viaja aplanado como `detalle_<campo>` en cadenas de hasta 300 caracteres, con la lista blanca de `formulario.json`; el mapper de WazaCRM reenvía además `servicio_clave`, `intento`, `payload_version`, `web` e `inicio`; el correo muestra cada `detalle_*` pasado por `h()`. Antes de activar `ServiceForm` se confirma con el lead de prueba qué guarda WazaCRM en `extras` y que escapa lo que muestra. Verificación: lead de prueba v2 con los campos visibles en la ficha y en el correo; un `<script>` en un campo sale escapado.
- D33 (endurecimiento del webhook): el Code node impone un tope de 8 KB al cuerpo, 500 caracteres por campo y 2.000 al mensaje; `servicio_clave` debe estar en la lista blanca, si no se guarda `definir`; `origen` debe empezar con `/` o con `https://elementoweb.com` o `https://www.elementoweb.com`, si no queda vacío; el teléfono se normaliza (8 dígitos con prefijo 507); más de 20 leads válidos por hora disparan una alerta además de la de cero consultas de D19; un límite de tasa en Traefik se evalúa en T29 y Turnstile queda en `TODOS.md`. Verificación: pruebas de cuerpo enorme, campo largo, clave desconocida y `origen` con `javascript:`.
- D34 (esquema único del formulario): `src/data/formulario.json` define las 14 claves (etiqueta, campos, tipo, máximos, obligatoriedad) y alimenta `ServiceForm`, el mapa página a clave validado en el build y la lista blanca que `scripts/subir-flujo-contacto.mjs` inyecta en n8n; `FORMULARIO.md` se genera de ese archivo; se retira `SERVICE_KEYS` de `[...slug].astro` y se usa `PageData.serviceKey`; `planKey` solo devuelve claves presentes en el archivo. Verificación: el build falla si un `serviceKey` o un resultado de `planKey` no existe en `formulario.json`.
- D35 (tipo de página y manifiesto): `PageData` gana `kind` (service, hub, pillar, pricing, industry, blog, location, guide, case u other), derivado en una sola función del registro para las páginas existentes; la rama de servicio de la plantilla vive en `src/components/ServicioPagina.astro` y se activa solo con `kind === 'service'`; `scripts/paginas-comerciales.json` lista cada página comercial (25 servicios, 6 hubs, pilar, `/precios/` y home) con tipo y ola, y el validador falla si una página emite `data-page-type` fuera del manifiesto, si un slug de una sección comercial no está en el manifiesto ni en la lista de exclusiones, o si una exclusión carece de motivo. Verificación: las 250 páginas quedan clasificadas sin "unknown"; `qa-seo --compare` sin cambios en las que no son de servicio.
- D36 (red de seguridad de la plantilla compartida): `npm run verify` toma `qa-seo --snapshot` antes del cambio y `--compare` después, con `scripts/cambios-permitidos.json` por fase; la pilar queda congelada en título, H1 y canónico; el validador comprueba al menos 3 enlaces entrantes por página comercial; se capturan con `qa-responsive` una página por `kind` a 390, 768 y 1440 antes y después para revisión manual; el cambio de tokens de `DESIGN.md` en `global.css` va en un commit aparte con axe en una página de blog y una de industrias. Verificación: un cambio no listado deja `verify` en rojo.
- D37 (CI): `deploy.yml` gana un job `verificar` (checkout del mismo SHA, Node, `npm ci`, `npm run verify` con `CHROMIUM_PATH` de Chrome) y `desplegar` con `needs: verificar`; `verificar` también corre en ramas y PR; `skip_checks` en `workflow_dispatch` exige un motivo escrito que queda en el resumen de la ejecución; `verify` es el único punto de entrada local y de CI. Verificación: un cambio que rompe el validador deja el job en rojo y el despliegue no corre; se comprueba en la primera ejecución que Chrome existe en el runner. (DT-E1, TASTE: no se activa protección de rama.)
- D38 (estrategia de pruebas): `node:test` sin dependencias para el validador, los Code nodes de n8n (cargados con `$input` simulado), `medir.mjs` y la coherencia de `formulario.json`; `scripts/qa-form.mjs` prueba los estados de D22 con `fetch` simulado; `qa-a11y.mjs` suma una pasada sin JavaScript y una medición de opacidad y momento de pintura del elemento LCP, y deja de inyectar `.reveal{opacity:1}` en esas pasadas; su lista `PAGES` se deriva del manifiesto. Verificación: las pruebas fallan si el elemento LCP arranca con opacidad 0 o si una página comercial no se cubre.
- D39 (validador endurecido; TASTE DT-E2): `node-html-parser` entra como dependencia de desarrollo (no llega a producción) y reemplaza la regex sobre HTML; los bloques rompen el build ante una lista vacía; el validador exige conteos mayores que cero, que las preguntas del FAQPage coincidan con las visibles y que el precio visible, `Offer.price` y `data-price-state` coincidan; los precios confirmados salen de `src/data/precios.json`, que leen `site.ts` y el validador (así R27 se comprueba sin importar TypeScript). Verificación: `node --test` con listas vacías, precio distinto y FAQ distinta.
- D40 (mediciones y rendimiento; ajusta la etiqueta de D6): la etiqueta visible nombra la herramienta de la medición guardada (`metodo`) y el validador comprueba que coincidan; `medir.mjs` usa la API de PageSpeed Insights si existe la clave `~/.ssh/psi.key` (gratuita, tarea del dueño) y, si no, Lighthouse local con mediana de 5 corridas y su versión en `metodo`; un cron mensual de GitHub Actions corre `medir.mjs --check` y abre una incidencia si una cifra supera los 45 días; `verify` avisa si el archivo fuente de una página tiene un commit posterior a su `fecha` de `answer`; `scripts/presupuestos.json` fija el máximo de bytes de JS y CSS por plantilla (medido en `dist/` con una tabla de máquina, N y mediana) y `verify` falla al superarlo; `ServiceForm` se carga como isla diferida y las páginas de servicio no cargan gsap ni lenis salvo necesidad. Verificación: prueba con fecha inyectable; el cron abre la incidencia en un caso de 46 días; `verify` falla con un bundle sobre el presupuesto.
- D41 (reversión de n8n): antes de cada subida el uploader exporta el flujo vivo a `docs/contacto-n8n/respaldo/<fecha>.json` y escribe el id y la versión en el resultado, que se copian al mensaje del commit; la reversión es `git revert` más volver a correr `scripts/subir-flujo-contacto.mjs`; `scripts/check-prod.sh` gana una sonda del honeypot (200 sin efecto); tras cada subida se hace una prueba de punta a punta con un lead v1 y uno v2 de prueba que se borran después. Verificación: la sonda responde 200 y no deja ficha ni correo.
- D42 (secuencia): la fase 3 no se cierra sin volver a medir las páginas de la ola 1 con `ServiceForm` activo; D30 a D33 son requisito de la activación de `ServiceForm` y del correo opcional; D34 a D39 entran en la fase 1; D40 a D41 entre las fases 1 y 3. Verificación: el criterio de salida de la fase 3 lista las mediciones nuevas con fecha posterior a la activación.
- D43 (documento único de construcción): tras el gate final, la tarea T30 reescribe el encabezado y las secciones 3, 5, 6 y 7 del SPEC para que no contradigan a `DECISIONES.md`, y `verify` comprueba que el encabezado nombre `DECISIONES.md`. Verificación: el encabezado del SPEC nombra `DECISIONES.md`.
<!-- /autoplan-accepted:eng -->

### Gate final (autoplan, 13-oct-2026)

Aprobado por el dueño el 13-oct-2026 con «Procede con todo», leído como `all`: UC1 = a (se mantiene su dirección, 3 olas con revisión de datos a las 8 y 12 semanas antes de la ola 3), decisiones de gusto d1 a d8 en su valor por defecto y plan = p1a (aprobar tal cual). Aprobar el plan no publica nada: cada push a `main` sigue necesitando su aprobación.
