# Changelog final: SEO / GEO / UX de Elemento Web (30-sep-2026)

Base: `cbff42e`. Publicado en `main` hasta `e73f70f` (despliegues 131 y 132: exitosos). Todo lo posterior está en la rama `claude/festive-mendel-ld3j60`.

## Resumen
- 12 páginas nuevas (sitemap de 155 a 167 URLs): `/precios/`, `/casos-de-exito/` (+4 casos), `/recursos/calculadora-costo-total-web/`, `/recursos/checklist-migracion-seo/`, `/comparativas/web-a-medida-vs-suscripcion/` y 3 artículos del blog.
- Ninguna URL existente cambió de ruta, title, descripción o canonical (comprobado contra `audit/baseline-seo.json`). Únicos cambios: el H1 de `/miami/diseno-web-en-miami-en-espanol/` (ya no repite el del hub) y la home (H1 nuevo, orden de secciones, sin la sección «Arquitectura»).
- Correcciones de fricción y accesibilidad, schema, rendimiento, seguridad, analítica y documentos de trabajo (ver abajo).

## Antes / después (método y condiciones)
| Aspecto | Antes | Después | Método / condiciones |
|---|---|---|---|
| `mainEntityOfPage` con `/blog/blog/` | 70 de 70 artículos | 0 | `scripts/qa-seo.mjs` sobre `dist/` |
| Logo de Organization | `/favicon.svg` (no existía) | `/marca/favicon.png` | `qa-seo.mjs` |
| 404 | indexable, con canonical | `noindex`, sin canonical | `qa-seo.mjs` |
| Navbar a 768 px | desbordada (872 px de ancho) | cabe (357 px de ancho) | Chromium, ancho 768 |
| Foco en paneles cerrados / Escape en móvil | entraba en enlaces invisibles / no cerraba | inertes / cierra y devuelve el foco | Chromium, Tab y Escape |
| Enlace «saltar al contenido» | no existía | existe | HTML generado |
| Contraste del botón azul | texto `#333` sobre `#0099cc` (< 4,5:1) | texto `#14232b` sobre `#0099cc` (~4,9:1, estimado) | cálculo manual; sin herramienta externa |
| Formulario | sin errores por campo, sin `autocomplete`, sin foco en éxito | errores por campo, `autocomplete`, `type=tel`, foco y `role=status`, tope de 15 s, ID por intento | Chromium; **sin envío real** (sandbox bloqueado) |
| Hero de servicios y home | `opacity:0` hasta cargar JS; preloader ~3 s en cada visita | visible sin JS; preloader de ~2 s solo en la primera visita | código + Chromium |
| Portafolio (JPEG) | 1,28 MB / 1,15 MB / 1,07 MB | ~69 KB / 75 KB / 75 KB (WebP 1200 px); JPEG queda de respaldo | tamaño de archivo |
| Fuentes | Google Fonts (2 orígenes + CSS bloqueante; 6+3 pesos) | autoalojadas (4+4 pesos, 164 KB) | HTML y `document.fonts` |
| Lighthouse móvil, home | 89 (PSI de la auditoría, 29-sep) | 93–94 (una corrida dio 73) | **No comparable**: herramienta y entorno distintos; local, sin latencia real |
| Lighthouse móvil, servicio corporativo | 85 (PSI) | 100 | igual que arriba |
| Cabeceras de seguridad | ninguna | `nosniff`, `Referrer-Policy`, `X-Frame-Options`, `Permissions-Policy`, CSP solo-reporte | nginx local |
| Redirect de directorio (`/servicios`) | 301 a `http://` | 301 relativo (`/servicios/`) | nginx local con la config real |
| Carpetas de cliente | 49 de 50 HTML con noindex | 50 de 50 + `X-Robots-Tag` | `qa-seo.mjs` y nginx local |
| Analítica | GA4 sin ID (0 eventos) | GA4 activo, 9 eventos propios definidos | `docs/event-dictionary.md`; verificar en Tiempo real tras publicar |
| Contraste y accesibilidad automática (axe-core, WCAG 2.x A/AA, 10 páginas × 2 tamaños) | no medida (texto gris con contraste insuficiente en ~446 puntos) | 0 problemas | `scripts/qa-a11y.mjs`; texto `text-ink/30–65` subido a `/70`; numeración decorativa `aria-hidden`; región desplazable con foco. No sustituye la revisión con lector de pantalla |
| Matriz responsive (10 tamaños × 9 páginas) | no medida | 0 fallos de desbordamiento | `scripts/qa-responsive.mjs` |

**Search Console (línea base, 28-jul a 27-sep-2026):** 6 clics, 6.269 impresiones, posición media 83,4 (`audit/gsc-baseline-2026-09.md`). No se atribuye ninguna mejora comercial: falta la ventana de datos posterior.

## Cambios por fase
- **0 Línea base:** `audit/baseline-seo.json`, `scripts/qa-seo.mjs`, `audit/gsc-baseline-2026-09.md`.
- **1 Fricciones:** navbar (breakpoint, paneles inertes, menú móvil), enlace de salto, contraste, formulario accesible, anclas `/contacto/#formulario` y plan preseleccionado (`?servicio=`), $950 = hasta 6 páginas internas, pauta y contenido como servicio propio, bloque de Josimar Guilbaud (CEO) en Nosotros.
- **2 SEO técnico:** schema de artículos, logo, ProfessionalService solo en home y contacto, `noindex` en 404, `lang=es-PA`, Twitter/OG, nginx (redirects relativos, cabeceras, `X-Robots-Tag`).
- **3 Rendimiento:** hero sin animación de entrada, preloader corto, 429 variantes WebP, componente `Pic`, fuentes autoalojadas.
- **4 UX:** H1 y subtítulo nuevos, orden de secciones (prueba y precios primero), copy menos confrontacional, sin sección repetida.
- **5 Arquitectura:** `/precios/`, `/casos-de-exito/`, recursos y comparativa.
- **6 Contenido:** 3 artículos; análisis de pares blog/industria (`audit/pares-blog-industria.md`).
- **8 GEO / schema:** `AboutPage`, `ContactPage`, `CollectionPage`, `Person`, `OfferCatalog`; sin `sameAs` sin verificar; `llms.txt` actualizado; panel de preguntas (`docs/geo-panel-preguntas.md`).
- **9 Autoridad:** `docs/kit-autoridad.md` (nada enviado).
- **10 Analítica:** GA4 `G-J0NHHRTV75`, `src/scripts/track.ts`, `docs/event-dictionary.md`.
- **11 QA:** `scripts/qa-seo.mjs`, `scripts/qa-responsive.mjs`, `scripts/check-links.mjs`.
- **Documentos para ti:** `docs/prompt-chrome-search-console.md`, `docs/prompt-chrome-datos-clientes.md`, `audit/miami-zonas.md`, `audit/implementation-plan.md`.

## Commits
| Commit | Mensaje |
|---|---|
| `007114d` | Plan de implementación SEO/GEO/UX verificado contra el código (Panamá + Miami) |
| `86aebf9` | Fase 1-3 (lote A): navbar/foco/Escape, skip link, schema blog, noindex 404, nginx, hero sin reveal, contraste CTA |
| `b40aa7d` | Formulario accesible, contacto con ancla y plan preseleccionado, alcance $950 = hasta 6 páginas, marketing propio, equipo, eventos GA4 |
| `1d1b764` | Imágenes WebP responsive (429 variantes), componente Pic, QA de SEO sobre dist y baseline |
| `a23eccd` | Nueva página /precios/ (bloques y cifras desde site.ts), enlazada desde home y footer |
| `e2169ce` | Home: H1 orientado a resultado, subtítulo con oferta, orden de secciones (prueba y precios antes de argumentos) |
| `cc39d54` | Miami: H1 propio para la landing en español, enlaces descriptivos en el hub y regla de decisión para zonas |
| `3de1c17` | Casos de éxito: hub y 4 casos (TramitaPa, San Blas Full, KL Contable, Panama International Movers) sin cifras |
| `2f7c07b` | Prompt para Claude en Chrome: extraer Search Console y GA4 en solo lectura |
| `9d337ad` | GA4: activar medición con el ID G-J0NHHRTV75 |
| `f64cf24` | audit: línea base de Search Console (28-jul a 27-sep-2026) |
| `d396f20` | audit: precisar la fecha de despliegue de las páginas de Miami |
| `4f1a114` | Fuentes autoalojadas, CSP report-only, schema (AboutPage/ContactPage/CollectionPage/Person/Offer), calculadora, checklist, comparativa, 3 artículos, QA responsive, docs |
| `e73f70f` | Precios: enlaza calculadora, comparativa y casos |
| `67198c7` | docs: prompt para sacar datos de los clientes (Search Console/GA4) para los casos |

## Riesgos y pendientes
- El formulario no se probó con un envío real al n8n de producción: hacerlo con datos marcados como prueba.
- GA4 carga sin aviso de cookies; falta actualizar la política de privacidad y decidir el aviso con asesoría legal.
- El texto de Miami dice que el ITBMS no aplica a clientes facturados fuera de Panamá: confirmar con un contador.
- Redirect HTTPS permanente y `www` → no-www: pendiente en Coolify/Traefik.
- La CSP está en solo-reporte (no bloquea). Revisar avisos en la consola antes de activarla.
- No se han medido PageSpeed real, INP ni datos de campo.
- Las cifras de los 4 casos de éxito no están publicadas: faltan los datos de cada cliente.
- Google Business Profile, reseñas, logos con nombre en el `alt`, y las decisiones sobre Miami (con datos) siguen abiertos.

## Lote 3 (30-sep-2026): red interna, Nosotros, guías y hubs
- **Footer:** filas de Miami (5 enlaces) e industrias con más prueba (8 + «ver todas»), y enlace a Guías.
- **Home:** selector «Trabajamos en: Panamá · Miami» bajo los botones del hero.
- **Nosotros:** bloque «Elemento Web en una página» (qué somos, dónde, tecnología, casos, precios, proceso) y 4 preguntas nuevas (qué es, quién dirige, Miami, cuánto cuesta). Sin años de experiencia ni tamaño de equipo: no hay dato confirmado.
- **Guías de precio sueltas (5):** tienda online, landing, mantenimiento, rediseño y desarrollo a medida. Solo cifras propias de `site.ts` y `crecimiento.ts`.
- **Guías de Miami (2):** agencia de diseño web en Miami en español y diseño web para negocios hispanos. Sin cifras de mercado ni exenciones fiscales.
- **Hubs de clúster:** `/guias/` y 7 hubs (`/guias/diseno-web-panama/`, `tiendas-online-y-pagos`, `seo-y-posicionamiento`, `whatsapp-ia-y-automatizacion`, `marketing-y-pauta`, `diseno-web-miami`, `diseno-web-por-industria`) con 82 enlaces a guías; enlazados desde el blog y el footer.
- **Cadena de enlaces:** 76 páginas comerciales revisadas con `scripts/qa-chain.mjs`: las 76 tenían huecos (precio, prueba o contacto). Una franja «Siguiente paso» en la plantilla lo resuelve: 0 huecos.
- **QA:** 235 páginas, 0 problemas de SEO, 0 de enlaces rotos, 0 de accesibilidad (axe, 15 páginas × 2 tamaños) y 0 fallos responsive (13 páginas × 10 tamaños).

## Lote 4 (30-sep-2026): afinado de la home y cierre de QA
- **Home:** meta descripción coherente con agencia de diseño web; párrafo del hero más corto (Miami queda en el selector de mercado); botón «Cotizar mi página web» al formulario; palabra delineada con más contraste; cada proyecto destacado con «Qué resolvimos» y «Ver caso del proyecto» (San Blas, TramitaPa, Panama International Movers); nota de plazos y de qué se cotiza aparte junto a los precios; Josimar Guilbaud (CEO) en el bloque de equipo.
- **Recortes:** fuera la tabla contra freelancers, el bloque «problema» (integrado en Soluciones), la sección «por qué invertir», el ecosistema grande de IA y la lista de tecnologías. IA queda como complemento opcional en un bloque pequeño y los SaaS en una frase con enlace. La home pasó de 16 a 14 secciones (y las de la segunda mitad son mucho más cortas).
- **Foco visible global** (`:focus-visible`), detectado por `scripts/qa-sr.mjs` en «Ver proyectos reales».
- **QA nuevo:** `scripts/qa-sr.mjs` (encabezados, landmarks, nombres, enlace de salto, foco visible en 45 Tab por página), validación local de schema dentro de `scripts/qa-seo.mjs` (propiedades obligatorias, `@id`, URLs; probada inyectando errores) y `scripts/check-prod.sh` (26 comprobaciones de redirects, cabeceras y contenido; probado contra nginx local).
- **Documentos:** `docs/checklist-lector-pantalla.md` (revisión manual con NVDA/VoiceOver/TalkBack y validadores externos) y `docs/outreach-clientes.md` (borradores por cliente; no se envió nada).
- **Pendiente de confirmar:** que los plazos de la nota de precios (landing 5 días hábiles; sitio corporativo 2 a 3 semanas, desde que recibimos el contenido) son los que quieres publicar. Si el «home» cuenta dentro de las 6 páginas de la Página PYME, y qué alcance mínimo tiene un proyecto a medida ($2,900), tampoco está definido.

## Lote 5 (30-sep-2026): paquetes con entregables, nuevos precios y plan mensual
- **Precios:** Web empresarial $950 → **$1,250** (hasta 6 páginas **en total**; antes «internas») y tienda online $1,500 → **$1,950** (hasta 25 productos cargados). Landing $550 y a medida $2,900 sin cambio. «Página PYME» pasa a llamarse «Web empresarial» en todo el sitio.
- **Paquetes:** cada tarjeta lista entregables concretos y límites (landing de hasta 7 secciones y 5 días hábiles desde recibir el contenido y aprobar el alcance; blog listo para publicar, con la redacción aparte; tienda con pagos y envíos configurados, pruebas de compra y capacitación; pasarelas y su cantidad se definen en la cotización; sincronizar con un ERP se cotiza aparte).
- **Base común** «Todos nuestros proyectos incluyen» (7 puntos: diseño responsive, formularios y WhatsApp comprobados, SEO inicial, medición de clics y formularios, dos rondas de revisión, capacitación grabada, 30 días de corrección de errores). Son compromisos de entrega.
- **Lo que se paga aparte:** dominio/hosting/SSL (desde $350/año), correo (desde $60/año), mantenimiento (desde $59/mes), licencias y comisiones de terceros, y contenido/imágenes/logo con IA.
- **Plan mensual «Web empresarial gestionada»:** $350 de puesta en marcha + $169/mes durante 12 meses (desarrollo $75 + servicio continuo $94), total del primer año $2,378 antes de impuestos; desde el mes 13, $94/mes. Tarjeta en la home, desglose y condiciones en `/precios/#plan-mensual`, oferta en el schema y opción en la calculadora (12 meses: $2,378; 36 meses: $4,634).
- **Consistencia:** barrido de `$950`/`$1,500`/«Página PYME»/«páginas internas» en 57 archivos (páginas, artículos, `llms.txt`, docs); recalculadas las cuentas de la comparativa a 12 y 36 meses; frases de alcance obsoletas («catálogo completo», «blog para posicionamiento») reescritas; las menciones a «5 días hábiles» aclaran desde cuándo cuentan.
- **QA:** 235 páginas, 0 problemas de SEO/schema, 0 de enlaces, 0 de accesibilidad (axe), 0 fallos responsive y 0 de teclado/estructura.
- **Pendiente de definir por el negocio:** qué pasarelas y cuántas incluye la tienda; alcance mínimo de un proyecto a medida ($2,900); revisión legal de las condiciones de cancelación del plan mensual; confirmar que cada compromiso de la base común se cumple en todos los proyectos.

## Lote 6 — selector de necesidades y continuidad del plan mensual
- Home: sección "¿Qué necesita tu negocio ahora?" (4 situaciones → página del servicio + "Cotizar esto" con la elección marcada en el formulario).
- Home: el bloque genérico de diagnóstico pasa a oferta concreta ("Solicitar revisión de mi web" / "ayúdame a definir mi proyecto").
- Plan mensual: el botón envía `?servicio=mensual` y el formulario muestra "Web empresarial gestionada — plan mensual". Proceso y FAQ de la home distinguen proyecto por etapas y plan mensual (propiedad, mes 13).
- Formulario: empresa y mensaje pasan a opcionales; nota "Te contactamos el mismo día hábil…". Correo y teléfono siguen obligatorios porque el flujo n8n exige correo válido.
- Pendiente (necesita material/decisión del dueño): testimonios y foto autorizados, menú simplificado, WhatsApp-o-correo (requiere cambio en n8n).

## Lote 7 — recorrido de la revisión gratuita, menú y textos
- Formulario según la oferta: "Revisión de mi web" pide la dirección de la web (obligatoria), sin presupuesto, botón "Solicitar mi revisión" y confirmación propia; "Ayúdame a definir mi proyecto" pregunta actividad y objetivo; plan mensual pregunta cuándo quiere empezar en vez del presupuesto. Se envían `web`, `inicio` y `modalidad`, y web/inicio también van dentro de `mensaje` para que lleguen al correo y al CRM aunque n8n no mapee los campos nuevos.
- Contacto: arranque y formas de pago incluyen el plan mensual.
- Casos: el bloque "Resultados" pasa a "La solución en funcionamiento" (sin cifras inventadas).
- Textos: selector con beneficio, "Consultar este proyecto", botones "Cotizar mi landing/web/tienda", nota corta de costos aparte; SEO de la página corporativa sin promesa de posicionamiento.
- Menú: Servicios · Más · Proyectos · Precios · Nosotros · Cotizar (marketing, SaaS, industrias, Miami y blog dentro de "Más").
- Pendiente: contacto WhatsApp-o-correo (requiere n8n), testimonios y foto reales, seguimiento posterior al formulario (CRM).

## Lote 8 — páginas de servicio que muestran el producto
- Nuevo bloque `showcase` (captura real de un proyecto con notas numeradas, enlace al caso y al sitio en vivo).
- Landing: imagen principal = TramitaPa; bloque "Así puede verse la página de tu campaña". Web empresarial: imagen principal y bloque con Panama International Movers.
- Botones de las páginas de servicio conservan el servicio en el formulario ("Cotizar mi landing/web/tienda", "Revisar mi web") y enlazan a "Ver un ejemplo real".
- Alcance unificado: la redacción desde cero se cotiza aparte (landing, corporativa y home coinciden); ajuste post-campaña acotado; carritos por WhatsApp y comisiones de pasarela marcados como aparte.
- Rediseño: sin promesa de conservar posiciones (redirecciones reducen el riesgo; Google advierte fluctuaciones).
- Pendiente (necesita material): tienda con demo visual de compra, antes/después real para rediseño, ejemplo de diagnóstico anotado, capturas de panel/video, resto de servicios (SEO, publicidad, automatización, mantenimiento, hosting).

## Lote 9 — corrección: los proyectos publicados no son landings + scroll
- Los proyectos del portafolio son sitios a medida de más de 30 páginas con SEO avanzado. Se retira TramitaPa como "ejemplo de landing" (portafolio, caso, hero y bloque de la página de landing) y Panama International Movers como ejemplo del paquete de $1,250. TramitaPa pasa a "Sitio a medida"; se elimina el filtro "Landing" del portafolio.
- La página de landing usa una ilustración propia de la estructura (`public/images/servicios/landing-estructura.*`), rotulada como ilustración con texto de ejemplo, no como proyecto de cliente. fal.ai no es accesible desde el entorno de trabajo; la ilustración se dibujó en HTML y se renderizó.
- Web empresarial aclara que es un formato acotado frente a los sitios a medida del portafolio; /portafolio/ lo dice en su introducción.
- Scroll: Lenis lerp 0.2, reveals de 0.5 s con umbral 98 %, recálculo de disparadores tras carga de imágenes/fuentes, cursor sin bucle ocioso, preloader ~1.1 s.
- Pendiente: caso real de una landing de publicidad (lo aportará el dueño) para reemplazar la ilustración.

## Lote 10 — página de landing: oferta visible, menos repetición, promesas suaves
- Botón "Ver cómo se estructura una landing" (antes "Ver un ejemplo real", que llevaba a una ilustración). La ilustración se puede ampliar y verse por separado en computadora y celular.
- Línea de oferta bajo los botones: Desde $550 · Hasta 7 secciones · 2 rondas de revisión; entrega en 5 días hábiles (datos de `pricing`).
- Alcance: las 2 rondas de revisión del diseño se separan del ajuste posterior a la campaña; se precisa cuándo la conexión a CRM va incluida (webhook o correo) y cuándo se cotiza aparte.
- Contenido recortado: anatomía fusionada con el esquema visual; una sola comparación landing/sitio; se eliminan "el destino decide el costo", "una landing por campaña", errores de conversión y "qué medir"; FAQ reducidas a dudas de contratación (de 12 a 7).
- Promesas: "costo por lead más bajo" y "multiplica la conversión" pasan a "puede mejorar la conversión; medimos para ajustar".
- Pendiente: captura real de una landing de publicidad (caso que aportará el dueño) para la cabecera y para "demostrar"; confirmar la regla de CRM incluida.
