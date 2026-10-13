# Rediseño de elementoweb.com: la agencia, sus servicios y su sistema de diseño

Estado: borrador para aprobación del dueño (12 de octubre de 2026). Nada de esto está construido.
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
- Cada página de servicio cumple los 10 puntos de la sección 5, sin excepción.
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
| Catálogo de todos los servicios | `/servicios/` | Pasa a ser el índice de TODA la agencia, no solo de diseño web |
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
- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (ya existen) más un `OfferCatalog` con los servicios y sus URL. El FAQPage sale del bloque visible.
- Enlazado interno: la home enlaza a cada hub y a los servicios de ola 1; cada servicio enlaza de vuelta a la home y a su hub.

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

`/servicios/` deja de repetir los cuatro formatos y pasa a ser el índice de toda la agencia (sección 6).

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

Bloques nuevos en `src/lib/types.ts` y `Blocks.astro`: `answer` (respuesta con fecha), `receipt` (comprobante), `compare` (criterios con columna en blanco), `includes` (incluye / no incluye), `scorecard` (validación del marcador en el build). Un script del build rechaza una página de servicio que no tenga los 10 puntos.

## 6. Inventario de servicios y olas de trabajo

24 páginas de servicio más 5 hubs, la pilar y `/servicios/`. Precio publicado: si no está confirmado por el dueño, la página dice «cotización cerrada por escrito» y no inventa cifra.

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
| Google Ads, Meta Ads | gestión desde 300 al mes | **Propuesto**, el código lo marca con «Fee propuesto». Falta que el dueño lo confirme |
| SEO, WhatsApp marketing, IA, n8n, email, contenido | sin precio publicado | **Falta** decisión del dueño |

## 7. Formulario a nivel de todos los servicios

Un solo componente, 13 servicios más «Otro». Ficha de servicio accesible (radio), y al elegirla cambian título, preguntas, botón y lo que viaja. Obligatorios: nombre, correo y WhatsApp. Cada pregunta se guarda en su campo y no en un texto libre.

- Payload a n8n: `servicio`, `origen` (URL de la página), `detalle` (un objeto por servicio), más `botcheck`. n8n lo mapea a NousCRM con el servicio como etiqueta del lead.
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
- Schema válido: `Service` + `Offer` (cuando hay precio), `FAQPage` derivado del bloque visible, `BreadcrumbList`, `ImageObject`, `OfferCatalog` en la home.
- `llms.txt` actualizado con el mapa de servicios.

## 10. Fases y plan de pruebas

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

Cambios de URL o redirects, el logo, las propuestas, demos y presentaciones de clientes, el blog (81 artículos) salvo enlazado y tipografía, y cualquier backlink o contenido externo.
