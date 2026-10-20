# Decisiones vigentes del rediseño de elementoweb.com

Estado: normativo. Revisión del 12 de octubre de 2026 (cierre de la fase de estrategia de /autoplan), ampliada con las decisiones de diseño D20 a D29 (fase de diseño de /autoplan, 12-13 de octubre). Aprobado por el dueño en la puerta final de /autoplan el 13-oct-2026 (UC1 = a, d1 a d8 por defecto, plan = p1a).

**Regla de precedencia:** este documento prevalece sobre `SPEC.md` (cuerpo y enmiendas S1 a S6 y R1 a R44) y sobre el resumen CEO. Donde otro texto lo contradiga, manda este. El SPEC conserva el razonamiento y los datos; este documento fija lo que se construye.

## 1. Tabla de vigencia

| Enmienda | Estado | Vale lo de |
|---|---|---|
| S1, R3, R5, R41 | Reemplazadas | D6 |
| S2, R8 | Reemplazadas | D9 |
| S3, R22 | Vigentes | D7 |
| S4, R7 | Reemplazadas | D9 |
| S5, R9, R31 | Reemplazadas | D3 |
| S6, R10 | Reemplazadas | D5 |
| R1, R16 | Reemplazadas | D1 |
| R2 | Vigente en lo del blanco honesto; el origen de datos lo fija D7 | D7 |
| R4 | Reemplazada | D8 |
| R6 | Reemplazada | D10 |
| R11 | Reemplazada | D4 |
| R12 | Vigente con la precisión de D2 | D2 |
| R13, R34 | Reemplazadas | D11 |
| R14 | Reemplazada | D12 |
| R15 | Reemplazada | D13 |
| R18, R19, R20, R21, R23, R24 | Vigentes; R24 sin el H1 entre lo que bloquea construir (D3) | D3 |
| R25 | Reemplazada | D2 y D3 |
| R17 | Vigente: las 15 páginas de la ola 3 son las de la fase 5 | D1 |
| R26 | Vigente con los ajustes de D1 | D1 |
| R42 | Vigente: es esta tabla y este documento | Todo el documento |
| R43 | Vigente: D15 a D19 | D15 a D19 |
| R44 (precedencia) | Vigente: manda este documento (D1 a D29); después, las obligaciones que esta tabla declara vigentes; después, el cuerpo. Reemplaza la línea «PRECEDENCIA» del encabezado del SPEC. `DESIGN.md` y el prototipo son referencia visual y ceden ante este documento | Todo el documento |
| Viñetas D20 a D29 del bloque de diseño del SPEC | Vigentes: son resúmenes de las decisiones D20 a D29 de este documento; si difieren, valen las de aquí | D20 a D29 |
| Viñetas D30 a D43 del bloque de ingeniería del SPEC | Vigentes: son resúmenes de las decisiones D30 a D43 de este documento; si difieren, valen las de aquí | D30 a D43 |
| R4 y la parte «sin dependencias nuevas» de R29 | Reemplazadas en ese punto: el validador usa un parser como dependencia de desarrollo | D39 |
| La parte «sin navegador» del CI de R29 y de D8 | Reemplazada: el job `verificar` corre el navegador | D37 |
| Etiqueta fija de D6 | Vigente como etiqueta del respaldo local; la etiqueta nombra la herramienta real | D40 |
| D19 (correo opcional) | Vigente solo cuando D30 esté en producción; mientras tanto `ContactForm` exige el correo | D30 |
| R27 | Vigente con las precisiones de D4 | D4 |
| R28 | Vigente con las precisiones de D5, D7, D35 y D39 (el manifiesto reemplaza a `olas.json`) | D7 y D35 |
| `SPEC-MARKETING-IA.md`: 4 páginas, sus slugs, palabras principales y titles, y el corte vertical de Anuncios | Reemplazados en esos puntos por la medición del 20-oct: salen 2 páginas con slugs nuevos y el corte vertical es Videos; el resto del plan sigue vigente con N = 2 | D52 |
| R29 | Vigente con la salida de emergencia de D8 y con D37 (el CI corre el navegador) | D8 y D37 |
| R30 | Vigente con las precisiones de D10 y D30 a D34 | D10 y D30 a D34 |
| R45 (alcance de R44) | Vigente: R44 se lee con D1 a D43 | Todo el documento |
| R32 | Vigente con la precisión de D2 | D2 |
| R33 | Vigente sin `blog-4.ts` (fuera de alcance) | D11 |
| R35, R36, R37, R38, R39, R40 | Vigentes con las precisiones de D12, D13 y D14 | D12 a D14 |
| D2 (tope de $4) | Reemplazada | D46 |
| D25 (ilustración 3D en la portada) | Reemplazada en lo de la ilustración; sigue vigente que la imagen nunca va sola | D45 |
| Regla «Imagen de héroe» de `DESIGN.md` | Reemplazada | D45 |

## 2. Decisiones

### D1. Fases (única tabla)

| Fase | Entrega | Puerta |
|---|---|---|
| 0 | Roboto, `DESIGN.md`, `CLAUDE.md` y SPEC (commits locales `4cdaab4` y `f0720e5`) | El dueño aprueba el push |
| 1 Fundación | Paso 0: export completo de Search Console y línea base de PageSpeed Insights en `audit/baseline-perf.md`. Tokens de `DESIGN.md` en `global.css`; bloques `answer`, `receipt`, `compare` e `includes`; `ServiceForm` construido y sin activar; validador y `scripts/olas.json`; `npm run verify`; `KEYWORDS.md`, `SCORECARD.md` y `FORMULARIO.md`; archivo y script de mediciones; `llms.txt` base; corrección del `Footer` (D11); limpieza de `@fontsource`; dos portadas piloto para fijar el peso (D14) | `npm run verify` en verde |
| 2a Ola 1 | Pilar ampliada y las 3 páginas de servicio de la ola 1 (`servicios/diseno-web-corporativo-panama`, `crecimiento/seo-posicionamiento-web-panama`, `marketing/google-ads-panama`) con sus ilustraciones; formulario actual con `?servicio=` | Medición de PageSpeed Insights de esas páginas (D14) |
| 2b Home | Home de agencia, `/servicios/` (H1, title, description y bajada) y `/precios/` | Puerta B (D11) y aprobación del H1 con el resultado de S5 (D3) |
| 3 Formulario | `workflow.json` acepta payload v1 y v2; subir el flujo; prueba de punta a punta con un lead de prueba en WazaCRM (se borra); activar `ServiceForm`; eventos GA4; WhatsApp estandarizado; actualizar `docs/event-dictionary.md` | Lead de prueba recibido con servicio y detalle |
| 4 Ola 2 | Tiendas, landing, rediseño, WhatsApp, chatbots, IA (migrada a la plantilla) y SEO local, con sus ilustraciones | `npm run verify` y PageSpeed Insights |
| 5 Ola 3 | Las 15 páginas de R17 (cybersource migrada) y los 5 hubs restantes (`crecimiento`, `marketing`, `tecnologias`, `funcionalidades`, `saas`) | `npm run verify` y PageSpeed Insights |

Cada fase se publica con aprobación explícita del dueño por push, con `scripts/check-prod.sh` y `gh run watch`, y con un export de Search Console el día antes en las fases 2a, 2b, 4 y 5.

### D2. Gasto en imágenes
El tope de $4 es adicional a los $3 ya gastados. Antes de la primera generación se muestra la tabla página × estado × modelo × costo (R12) en el gate final y el dueño confirma el tope; sin esa confirmación no se genera. Por encima de $4 se pide una aprobación nueva. Las 56 imágenes débiles quedan fuera.

### D3. Orden de la home y puertas del dueño
S5 es informativa y no bloquea construir. Para la home, la construcción usa el H1 propuesto; lo que se bloquea es publicarla hasta que el dueño apruebe el H1 viendo el resultado de S5 (demanda en el Planificador de palabras clave y los 5 primeros resultados de la SERP). La Puerta B, antes de 2b, es: insignia «Meta Verified», «100% interno», logos, permisos de equipo y de capturas. Los valores por defecto deciden qué se construye, nunca qué se publica ni qué se gasta. «Gate final» es la puerta de aprobación de este /autoplan.

### D4. Precios
Fuentes confirmadas: `src/lib/site.ts` (web 550, 1.250, 1.950 y 2.900; infraestructura desde 350 al año, con niveles de 225 a 550; mantenimiento desde 59 al mes; plan gestionado de 350 de puesta en marcha más 169 al mes) y `src/lib/pages/saas.ts` (WazaCRM desde 349 al mes). Propuestos, en `marketing.ts`: Google Ads y Meta desde 300 al mes, trafficker dedicado 300 al mes por cuenta, contenido desde 250, email desde 200, WhatsApp desde 150, n8n desde 300 por automatización. Las páginas con precio propuesto (Google Ads entra en la ola 1) son del tipo «servicio cotizado»: la portada y la respuesta citable no llevan cifra, el cuerpo conserva el texto que ya está publicado, y `Offer` solo se emite con precio confirmado. SEO e IA no tienen precio.

### D5. Páginas hechas a mano
IA migra a la plantilla en la fase 4 y cybersource en la fase 5. Si el dueño no confirma S6 en el gate final, ambas quedan en `scripts/exclusiones-marcador.json`. La lista no caduca, pero el validador falla si una página excluida ya emite `data-page-type`.

### D6. Mediciones
La etiqueta es fija: «medido el DD/MM con Lighthouse móvil a 150 ms». No hay lógica de caducidad en el build ni en el navegador; «medida hoy» se elimina del diseño. `verify` imprime la antigüedad de cada medición (con fecha inyectable en las pruebas) y no falla por ella. La medición de una página nueva sale del Lighthouse local antes de publicar y se renueva con `scripts/medir.mjs`, que falla con un mensaje claro si no encuentra Lighthouse. Esquema: `{url, metrica, valor, herramienta, fecha, metodo}` en `src/data/mediciones.json`.

### D7. Validador y marcador
Lee `dist/` y no importa TypeScript. Alcance por ola: `scripts/olas.json` lista los slugs obligados en cada fase; las páginas fuera de la lista se omiten. Tipos de página: servicio con precio, servicio cotizado, producto o plan, home, pilar, hub y precios; los cuatro últimos usan las reglas reducidas de `SCORECARD.md`. Contrato de los 10 puntos:

| Punto | Dónde se emite | Atributo |
|---|---|---|
| 1 Alcance | bloque `includes`, lista «Incluye» | `data-score="alcance"` |
| 2 Entregables | bloque `includes`, lista «Entregables» | `data-score="entregables"` |
| 3 Precio | bloque `receipt` | `data-score="precio"` y `data-price-state="confirmado\|propuesto\|cotizado"` |
| 4 Plazo | bloque `receipt` | `data-score="plazo"` |
| 5 Qué no incluye | bloque `includes`, lista «No incluye» | `data-score="no-incluye"` |
| 6 Preguntas frecuentes (6 o más) | bloque `faq` | `data-score="faq"` |
| 7 Schema | JSON-LD de `Service` y `FAQPage` | se valida leyendo el JSON-LD |
| 8 Medición | bloque `receipt` | `data-score="medicion"` o `data-blank` |
| 9 Prueba de proyecto | bloque `projects` o `showcase` | `data-score="prueba"` o `data-blank` |
| 10 Comparación | bloque `compare` | `data-score="comparacion"` |

El blanco honesto cumple los puntos 8 y 9. El validador informa por página cuántos puntos tienen evidencia y cuántos son blanco. Además comprueba: respuesta citable de 40 a 60 palabras con `fecha` (servicios y pilar), preguntas de 6 o más en servicios y de 8 o más en la pilar, `fecha` no posterior a `dateModified` y aviso si pasa de 180 días, ausencia de `AggregateRating` y `Review`, afirmaciones bloqueadas, y que la portada pese 60 KB o menos con dimensiones y `fetchpriority`.

### D8. `verify` y CI
`npm run verify`: `astro build`, `astro preview` en un puerto libre, `qa-seo`, `check-links`, validador, pruebas con `node:test` y fecha inyectable, `qa-a11y` (con `PAGES` ampliada a las 3 páginas de la ola 1, la home, la pilar y `/precios/`, y `CHROMIUM_PATH` en Windows), y una prueba de `dataLayer` con un `gtag` simulado; cierra el preview al terminar. El job de CI previo al despliegue corre `npm ci`, `astro build`, `qa-seo`, `check-links`, el validador y las pruebas, sin navegador y con la fecha del commit. `deploy.yml` gana un `workflow_dispatch` con la entrada `skip_checks` para una reversión de emergencia. El Dockerfile sigue ejecutando solo `npm run build`.

### D9. Eventos y WhatsApp
`service` es siempre la clave del formulario en todos los eventos, incluido `generate_lead` (`cf:lead` entrega la clave). `track.ts` la toma de un `data-service` del `<main>` o del enlace. Se agrega `service` a `form_start`, `form_error` y `click_whatsapp`. El mensaje de WhatsApp es «Hola, me interesa <serviceName ?? h1>.», con `serviceName` opcional en `PageData`, y solo se sobrescribe cuando la página ya tiene un `cta.wa` propio. Se actualiza `docs/event-dictionary.md`.

### D10. Formulario
Destino: WazaCRM, vía n8n. `origen` ya se envía hoy. Lo nuevo es `detalle` (objeto por servicio) y `servicio_clave`; `servicio` conserva la etiqueta de texto. `FORMULARIO.md` es la fuente normativa; el prototipo es solo referencia visual y de interacción. Son 14 claves: las 13 del prototipo (`pyme`, `ecommerce`, `landing`, `mensual`, `revision`, `rediseno`, `seo`, `pauta`, `whatsapp`, `ia`, `automatizacion`, `medida`, `definir`) más `otro`. `FORMULARIO.md` incluye la tabla página → clave de las 25 páginas, y toda página sin clave propia o un `?servicio=` desconocido usa `definir`. `ServiceForm` vive en `/contacto/` y como sección 10 de cada página de servicio; los botones apuntan a `/contacto/?servicio=<clave>#formulario`. Se construye en la fase 1 y se activa en la fase 3; mientras tanto las páginas usan `ContactForm`. Sin JavaScript el bloque muestra el botón de WhatsApp y el correo, como hoy el formulario actual; con JavaScript, la región de preguntas lleva `aria-live`.

### D11. Afirmaciones y permisos
«Meta Verified», «100% interno» y «equipo interno» aparecen en 8 archivos del alcance (`Footer.astro`, `core.ts`, `diseno-web-panama.ts`, `funcionalidades.ts`, `marketing.ts`, `saas.ts`, `index.astro` y la página de IA); `blog-4.ts` queda fuera de alcance. El `Footer`, que es global, se corrige en la fase 1 según la respuesta del dueño; las demás se corrigen cuando cada página pasa por su ola. Los permisos de equipo y de capturas siguen en la Puerta B; por defecto solo se usan las personas y proyectos ya publicados.

### D12. Palabras clave
Paso 0 de la fase 1: export completo de Search Console. `KEYWORDS.md` cubre las páginas comerciales (home, pilar, `/precios/`, 25 servicios y 6 hubs) con title, description y H1, e incluye el cambio de title y description de `/servicios/`. Blog, industrias y Miami no pueden usar como principal la palabra de una página comercial.

### D13. GEO y éxito
Se reutiliza `docs/geo-panel-preguntas.md` (20 preguntas, 5 motores, mensual) y se fija un subconjunto de 10 preguntas en `KEYWORDS.md`. Metas de las páginas de cada ola, revisables: indexadas en 4 semanas y el doble de impresiones respecto de la línea base a las 8 semanas. La posición no es criterio de éxito de este plan porque depende de S7 (autoridad externa, diferida).

### D14. Rendimiento
PageSpeed Insights móvil es la medida vinculante (línea base: home 89, corporativo 85) y Lighthouse local es el indicador de trabajo. Antes de fijar el presupuesto de $4 se prueban 2 portadas piloto en WebP a 1200 px para confirmar que 60 KB alcanzan. Se mide la ola 1 antes de publicar la home. Si una página medida con PageSpeed Insights queda por debajo de 90, la fase siguiente no avanza hasta corregirla; se revierte solo si queda por debajo de 85 o con LCP mayor a 3,5 s. Meta de CLS: 0,02 o menos por página medida.

### D15. Frente de autoridad en paralelo (reemplaza el diferimiento de S7)
Las dos voces independientes de la fase de estrategia coinciden en que el cuello de botella es autoridad y prueba (dominio del 29-jul-2026, 0 enlaces externos, posición media 83). S7 pasa a ser un frente paralelo desde la fase 1, con acciones del dueño y fechas: verificar la ficha de Google Business Profile esta semana; listar 10 directorios y cámaras locales; añadir un enlace de crédito «Sitio por Elemento Web» en el pie de cada sitio de cliente entregado (con permiso); elegir 3 a 5 objetivos de colaboración. Indicadores adelantados: dominios que enlazan y reseñas de la ficha. El plan solo afirma que la posición mejorará si este frente corre. El detalle vive en `TODOS.md`.

### D16. Línea base de leads y compromisos verificables
Antes de la fase 1 el dueño fija una meta de consultas por mes por fuente (orgánico, WhatsApp, directo, saliente). La línea base sale de GA4 (`generate_lead` y `click_whatsapp`) y de un conteo manual de WhatsApp. A las 8 y 12 semanas hay una revisión de datos antes de abrir la ola 3, sin detener la ola 2. «Superar por 100% al mercado» se mide con 5 compromisos verificables que cada página de servicio cumple: precio o cotización explícita, plazo, qué no incluye, comparación verificable y medición con fecha.

### D17. Tope de blancos en el marcador
La medición (punto 8) siempre existe, porque sale del Lighthouse local (D6). Por eso ninguna página puede salir con la medición y la prueba de proyecto en blanco a la vez; el blanco honesto solo se acepta en la prueba de proyecto. Se pide ya a Panamá Worldwide Express la autorización para publicar cifras.

### D18. S5 como entrada de arquitectura
El resultado de S5 (volumen en el Planificador y los 5 primeros resultados de la SERP de «agencia de diseño web» y de «diseño web panama») va al dueño antes de la fase 2b. Si las dos SERP son casi iguales, el dueño decide si la home y la pilar siguen separadas o si la home queda como única URL fuerte con el mapa de agencia debajo.

### D19. Orden y ajustes de alcance
- Orden de ejecución: 1, 2a, 3, 2b, 4, 5. El formulario por servicio llega antes que la home, para que el primer tráfico de la home ya entre por el circuito de atribución.
- Paso 0 de la fase 1, además: filtrar el export de Search Console a las posiciones 8 a 30 y a las consultas de cola larga por industria, y ordenar la ola 1 con eso y no solo por impresiones.
- Formulario: obligatorios nombre y WhatsApp; el correo pasa a opcional; las preguntas por servicio son opcionales. Se mide la tasa de envío antes y después con `form_start` y `generate_lead`. Se añade una alerta cuando llegan 0 consultas en N días y una prueba sintética programada del flujo de n8n.
- Puerta B suma: confirmar o retirar cada precio propuesto de D4, y dar a SEO e IA un precio de partida o una cotización explícita con su motivo.
- Fechas manuales de la respuesta citable: solo en la home, la pilar y las páginas de la ola 1; el resto usa `dateModified`.
- El mapa de servicios de la home retira la fila de software propio (WazaCRM, NousCRM, Cifrao) y la deja como enlace secundario hasta que haya un cliente que mostrar.
- Ideas de crecimiento fuera del repo, registradas en `TODOS.md`: prueba de búsqueda pagada en los dos términos principales, salida con Fábrica de Webs y una herramienta pública «mide tu web».

### D20. Orden final de la home y héroe (revisión de diseño)
Orden de la home, un solo trabajo por sección: (1) héroe; (2) respuesta citable fechada; (3) mapa de servicios en 6 filas (diseño web, tiendas online, SEO, publicidad en Google y Meta, WhatsApp marketing, IA y automatización), cada fila con qué resuelve, para quién y un enlace principal; (4) prueba: comprobantes y el proyecto real publicado; (5) proceso en 4 etapas; (6) industrias que atendemos; (7) preguntas frecuentes de agencia; (8) cierre con el formulario. Héroe: H1; una bajada de 15 a 20 palabras; botón primario «Cotizar mi proyecto» hacia `/contacto/?servicio=definir`; WhatsApp como secundario; comprobante «esta página, medida» como ancla visual; riel con los nombres de los 6 servicios y sin cifras, para no volver a vender solo web. En móvil el orden es H1, bajada, botón primario, WhatsApp, comprobante y riel. Software propio es un enlace secundario del pie.

### D21. Anatomía de la página de servicio, reordenada para el comprador
Portada (H1, bajada de 15 a 20 palabras, botón y comprobante) → respuesta citable fechada (bloque `answer`, con el rótulo «Actualizado el DD/MM», debajo del botón en móvil) → prueba (un solo sistema: comprobante, captura de proyecto y medición) → qué incluye, entregables y qué no incluye → cómo lo hacemos y plazo (con el botón repetido junto al precio y el plazo) → por qué es mejor (comparación, con el banco de criterios de D28) → preguntas frecuentes → formulario → servicios relacionados, después del formulario. Los 10 puntos del marcador no cambian; cambia el orden de lectura. En móvil hay una barra fija con el botón del servicio y WhatsApp. En las páginas de servicio el botón hace ancla a `#formulario` de la misma página; `/contacto/?servicio=<clave>#formulario` queda para la home, los hubs, el blog y los enlaces externos.

### D22. Estados de `ServiceForm`
| Estado | Qué ve el usuario | Comportamiento |
|---|---|---|
| Inactivo | Formulario con el servicio de la página y las preguntas de ese servicio | Con servicio preseleccionado se muestra «Servicio: X · cambiar»; las 14 fichas solo aparecen al pulsar «cambiar», en 2 columnas en móvil |
| Inválido | Mensaje por campo que dice cómo corregir | Foco al primer campo inválido; resumen con `role="alert"` |
| Enviando | Botón desactivado con el texto «Enviando…» | Id de intento; tope de 15 s |
| Éxito | El formulario se reemplaza por la confirmación y un botón de WhatsApp como siguiente paso | `generate_lead` solo tras respuesta correcta; foco a la confirmación con `role="status"` |
| Fallo de red o de n8n | Mensaje «No pudimos enviar; tus datos siguen aquí» con WhatsApp y correo | Conserva lo escrito; reintento con el mismo id de intento |
| Fallo parcial | Éxito | Si el servidor acepta el lead y `detalle` falla, se muestra éxito y se registra el fallo |
| Campo trampa (`botcheck`) | Éxito simulado | No se envía |
| Cambio de servicio con respuestas escritas | Las respuestas específicas se conservan durante la sesión | Los campos comunes no cambian; aviso corto «guardamos tus respuestas» |
WhatsApp acepta prefijo internacional con +507 por defecto y +1 para Miami.

### D23. Matriz de estado de precio por superficie
| Estado | Fila del mapa | Comprobante de portada | Cuerpo de la página | Schema | Mensaje de WhatsApp |
|---|---|---|---|---|---|
| Confirmado | «desde $X» | «desde $X» | «desde $X» con alcance | `Offer` | menciona el servicio, sin cifra |
| Propuesto | sin cifra | «Cotización cerrada por escrito» | «Referencia publicada: desde $X; se confirma en tu cotización» | sin `Offer` | menciona el servicio, sin cifra |
| Cotizado | sin cifra | «Cotización cerrada por escrito» y el plazo | alcance y plazo | sin `Offer` | menciona el servicio, sin cifra |
La redacción de cada estado es literal y no se improvisa por página. La portada sin precio lleva una pieza de evidencia equivalente: alcance, plazo y primeros entregables.

### D24. Prueba: estados válidos
Estados que pueden publicarse: (a) verificada (proyecto real, cifra y permiso); (b) proyecto real sin cifra; (c) cifra sin proyecto público. Texto literal del blanco: «Resultado medido: sin publicar aún, falta la autorización del cliente». Nunca se publica una prueba sin permiso. La medición propia (Lighthouse) existe siempre, pero solo prueba lo que se puede medir: en páginas web mide LCP y CLS; en hosting, TTFB; en SEO, publicidad, WhatsApp, IA y automatización el comprobante muestra alcance, plazo y entregables y no un Lighthouse. Una cifra floja se publica con su fecha y no se maquilla.

### D25. Regla contra la imagen decorativa
La ilustración 3D nunca va sola: en la misma pantalla lleva un artefacto de prueba (comprobante, captura o tabla). El ancla del héroe de la home es el comprobante y, cuando el dueño lo autorice, la captura de un proyecto real. Las ilustraciones se alternan con capturas reales dentro de la página. Es una decisión de gusto (TASTE) y se confirma en el gate final.

### D26. Alineación con `DESIGN.md`
Se corrigen en `DESIGN.md`: el riel de la home (nombres de los 6 servicios, sin cifras; en servicios, datos de alcance), el destino del lead (WazaCRM) y el momento animado (el comprobante de la sección de prueba, no el del héroe). Se añaden los componentes fila de servicio, `answer`, `includes` y `compare` con sus tokens.

### D27. Responsivo y accesibilidad
Anchos de diseño: compacto (menos de 640 px), medio (640 a 1023 px) y amplio (1024 px o más); se capturan 390, 768 y 1440. En compacto las filas del mapa se apilan, la comparación pasa a filas apiladas con la celda vacía como línea punteada etiquetada, y la imagen de portada va debajo del botón con su caja 3:2 reservada y fondo `primary`. Toques de 44 por 44 px como mínimo; las fichas del formulario se recorren con flechas; etiquetas siempre visibles; resumen de errores con `aria-live`; enlace para saltar al contenido; encabezados de tabla; texto al 200% sin pérdida; texto oculto «espacio para completar» en las celdas vacías; hoja de estilos de impresión para la comparación. La ilustración de portada lleva `alt` descriptivo.

### D28. Banco de criterios de la comparación
Cada criterio sale de la oferta publicada (`src/lib/site.ts` y la página del servicio) con un enlace a su fuente. Mínimo 4 criterios por página; con menos no se publica la comparación y la página lo registra como punto en blanco. Se añade la línea «Qué preguntar a cualquier proveedor» y la columna «tu otra cotización» sigue siendo opcional por página (TASTE).

### D29. Decisiones de diseño que quedan para el implementador
El texto del botón de la home y su destino ya están en D20. Los hubs se rediseñan en la fase 5; mientras tanto cada servicio enlaza a su hub existente o a `/servicios/` (R22).

### Revisión de ingeniería (13-oct-2026): D30 a D43

Las dos voces de ingeniería (14 y 10 hallazgos) coinciden en las seis dimensiones. Estas decisiones ajustan a D6 (la etiqueta nombra la herramienta real), D7 (manifiesto y parser), D8 (el CI corre el navegador), D10 y D19 (contrato del formulario y del flujo) y D22 (la idempotencia deja de ser una promesa sin respaldo). Donde choquen con un texto anterior, mandan D30 a D43. D30 a D33 son requisito de la fase 3.

### D30. Contrato de leads de n8n (v2)
Obligatorios en el servidor: nombre y teléfono (8 dígitos o más). El correo es opcional y, si viene, debe ser válido. `replyTo` de Brevo y el cuerpo del correo son condicionales al correo («Sin correo» en la fila). Un lead inválido responde HTTP 422 con `{"ok": false}`; el honeypot y los duplicados responden 200 `{"ok": true}` sin efecto. El cliente cuenta éxito y emite `generate_lead` solo si `res.ok` y `ok === true` en el cuerpo. Se añade `payload_version` en v2; su ausencia significa v1. **El correo sigue siendo obligatorio en `ContactForm` hasta que este contrato esté en producción**: hoy el flujo descarta cualquier lead sin correo y responde `{"ok": true}` (`docs/contacto-n8n/armar-correo.js:40`, `scripts/subir-flujo-contacto.mjs:200`), de modo que un correo opcional en el navegador perdería leads con una respuesta de éxito. Regresión a preservar: un payload v1 sigue produciendo correo y ficha.

### D31. Idempotencia y aislamiento de fallos
El flujo deduplica por `intento` con los datos estáticos del flujo (`$getWorkflowStaticData`), 24 horas y máximo 500 ids. `Responder OK` pasa justo después de validar, antes de Brevo y del CRM, para que la latencia de un proveedor no cambie lo que ve el visitante. Brevo conserva sus reintentos y su error dispara `errorWorkflow`; el nodo del CRM deja de tragar el error en silencio y avisa por la misma vía. Se confirma a quién llega `sanblasErrorAlert01`, que es el alertador de otro proyecto (T29). El texto «no se duplicará tu solicitud» solo se mantiene mientras esta decisión esté en producción.

### D32. Contrato con WazaCRM
`detalle` viaja aplanado como `detalle_<campo>`, cadenas de hasta 300 caracteres, con los campos de `formulario.json`. El mapper de WazaCRM (`docs/contacto-n8n/armar-lead-crm.js`) reenvía además `servicio_clave`, `intento`, `payload_version`, `web` e `inicio`, que hoy descarta. El correo muestra cada `detalle_*` pasado por `h()`. Antes de activar `ServiceForm` se confirma con el lead de prueba qué guarda WazaCRM en `extras` y que escapa lo que muestra.

### D33. Endurecimiento del webhook público
CORS no es autenticación. En el servidor (Code node): tope de 8 KB al cuerpo, 500 caracteres por campo y 2.000 al mensaje; `servicio_clave` en la lista blanca de `formulario.json` o `definir`; `origen` debe empezar con `/` o con `https://elementoweb.com` o `https://www.elementoweb.com`, si no queda vacío; el teléfono se normaliza (8 dígitos llevan el prefijo 507); más de 20 leads válidos por hora disparan una alerta, además de la de cero consultas de D19. Un límite de tasa en Traefik delante del webhook se evalúa en T29. El desafío Turnstile queda en `TODOS.md`.

### D34. Un solo esquema del formulario
`src/data/formulario.json` define las 14 claves (etiqueta, campos, tipo, máximos y obligatoriedad). Alimenta a `ServiceForm`, al mapa página a clave que el build valida y a la lista blanca que `scripts/subir-flujo-contacto.mjs` inyecta en el flujo. `FORMULARIO.md` se genera de ese archivo. Se retira `SERVICE_KEYS` de `src/pages/[...slug].astro` y se usa `PageData.serviceKey` (hoy sin uso); `planKey` (`src/lib/site.ts:421`) solo devuelve claves que existan en el archivo, y el build falla si no es así.

### D35. Tipo de página y manifiesto
La ruta `src/pages/[...slug].astro` sirve 249 de las 250 páginas construidas, entre ellas blog (80), industrias, Miami, guías y casos. `PageData` gana `kind` (service, hub, pillar, pricing, industry, blog, location, guide, case u other), que una sola función del registro deriva para las páginas existentes. La anatomía de servicio de D21, la barra fija móvil y los atributos `data-*` viven en `src/components/ServicioPagina.astro` y se activan solo con `kind === 'service'`; las demás páginas se renderizan como hoy. `scripts/paginas-comerciales.json` es el manifiesto: cada página comercial (25 servicios, 6 hubs, pilar, `/precios/` y home) con tipo y ola. El validador falla si una página emite `data-page-type` fuera del manifiesto, si un slug de una sección comercial no está ni en el manifiesto ni en la lista de exclusiones, o si una exclusión no tiene motivo. Reemplaza a `olas.json` y a la heurística por el campo `service`.

### D36. Red de seguridad para la plantilla compartida
`npm run verify` toma `qa-seo.mjs --snapshot` antes del cambio y `--compare` después, con `scripts/cambios-permitidos.json` por fase (ruta, campo, motivo). La pilar queda congelada en título, H1 y canónico. El validador exige al menos 3 enlaces entrantes por página comercial (complemento de S3, que solo cuenta salientes). Se capturan con `qa-responsive.mjs` una página por `kind` a 390, 768 y 1440, antes y después, para revisión manual del dueño; la comparación por píxel no es una puerta porque es frágil. El cambio de tokens de `DESIGN.md` en `src/styles/global.css` va en un commit aparte con axe en una página de blog y una de industrias.

### D37. CI con navegador (reemplaza la parte «sin navegador» de R29 y de D8)
`.github/workflows/deploy.yml` hoy tiene un solo job que no hace checkout ni build. Gana un job `verificar` (checkout del mismo SHA, Node, `npm ci`, `npm run verify` con `CHROMIUM_PATH` apuntando al Chrome del runner) y `desplegar` pasa a `needs: verificar`. `verificar` también corre en ramas y pull requests; `desplegar` solo en `main`. `skip_checks` (D8) exige un motivo escrito que queda en el resumen de la ejecución. `verify` es el único punto de entrada, local y en CI. En la primera ejecución se comprueba que Chrome existe en el runner; si no, se instala con `playwright-core`. **TASTE (DT-E1):** no se activa protección de rama con revisiones obligatorias: el repo tiene un solo autor y el dueño aprueba cada push; si el dueño quiere esa red, es un cambio de configuración de GitHub, no de código.

### D38. Estrategia de pruebas
`node:test` (incluido en Node, sin dependencias) para el validador, los Code nodes de n8n (los archivos `.js` se cargan con `$input` y `$('Webhook')` simulados), `medir.mjs` y la coherencia de `formulario.json`. `scripts/qa-form.mjs` (nuevo, `playwright-core`) prueba los estados de D22 con `fetch` simulado. `scripts/qa-a11y.mjs` deja de inyectar `.reveal{opacity:1!important}` en una pasada nueva sin JavaScript y mide la opacidad y el momento de pintura del elemento LCP con `PerformanceObserver`; su lista `PAGES` se deriva del manifiesto. Cobertura de partida: 3 de 36 rutas (8 %).

### D39. Validador endurecido (reemplaza «sin dependencias nuevas» de R4 y R29)
**TASTE (DT-E2):** `node-html-parser` entra como dependencia de desarrollo (no llega a producción) y reemplaza la regex sobre HTML. Los bloques de la plantilla rompen el build ante una lista vacía; el validador exige conteos mayores que cero, que las preguntas del FAQPage coincidan con las visibles y que el precio visible, `Offer.price` y `data-price-state` coincidan. Los precios confirmados salen de `src/data/precios.json`, que leen `site.ts` y el validador; así R27 se comprueba sin que el validador importe TypeScript. Alternativa descartada: la regex (fase 1 más rápida, pero se pierde la comprobación cruzada del FAQPage).

### D40. Mediciones y rendimiento (ajusta la etiqueta de D6)
La etiqueta visible nombra la herramienta de la medición guardada (`metodo`) y el validador comprueba que coincidan; «medido el DD/MM con Lighthouse móvil a 150 ms» queda como la etiqueta del respaldo local. `medir.mjs` usa la API de PageSpeed Insights si existe la clave `~/.ssh/psi.key`; sin clave la API responde 429 [measured: curl del 13-oct-2026] y entonces usa Lighthouse local con la mediana de 5 corridas y su versión en `metodo`. La clave es gratuita y es una tarea del dueño. Un cron mensual de GitHub Actions corre `medir.mjs --check` y abre una incidencia si una cifra supera los 45 días; `verify` avisa, sin fallar, si el archivo fuente de una página tiene un commit posterior a la `fecha` de su `answer`. `scripts/presupuestos.json` fija el máximo de bytes de JS y CSS por plantilla, con una tabla de máquina, N y mediana medida en `dist/`; `verify` falla al superarlo. `ServiceForm` se carga como isla diferida y las páginas de servicio no cargan gsap ni lenis salvo necesidad.

### D41. Reversión de n8n
`git revert` no revierte n8n. Antes de cada subida, `scripts/subir-flujo-contacto.mjs` exporta el flujo vivo a `docs/contacto-n8n/respaldo/<fecha>.json` y escribe el id y la versión en su salida, que se copian al mensaje del commit. Revertir es `git revert` más volver a correr el script (el `workflow.json` del repo es la fuente). `scripts/check-prod.sh` gana una sonda del honeypot (200, sin ficha ni correo). Tras cada subida se prueba de punta a punta con un lead v1 y uno v2 de prueba que se borran después.

### D42. Secuencia y salida de la fase 3
D30 a D33 son requisito de activar `ServiceForm` y el correo opcional. D34 a D39 entran en la fase 1. D40 y D41 entre las fases 1 y 3. La fase 3 no se cierra sin volver a medir las páginas de la ola 1 con `ServiceForm` activo, con fecha posterior a la activación.

### D43. Documento único de construcción
Tras el gate final, T30 reescribe el encabezado y las secciones 3, 5, 6 y 7 del SPEC para que no contradigan a este documento, y `verify` comprueba que el encabezado nombre `DECISIONES.md`. Hasta entonces manda este documento (R44).

### Instrucción del dueño (13-oct-2026): D44 a D47

Tras publicar la fase 1, el dueño pidió «procede con todo» y que cada servicio se trabaje con las secciones de la propuesta de marketing de Kredit (`public/propuestas/kredit-marketing-digital-4a6a12dc/`), con sus imágenes y ejemplos; en diseño web, maquetas de páginas; SEO y GEO avanzados. Respondió dos preguntas el mismo día: tope de fal de US$ 10 y fotos tipo Kredit también en la portada. Donde choquen con un texto anterior, mandan D44 a D47.

### D44. Molde Kredit para las páginas de servicio
Cada página de servicio con anatomía v2 suma, sobre los 10 puntos del marcador, las secciones de la propuesta de Kredit: (1) «Qué incluye» como lista de dos columnas con título en negrita y una línea de explicación; (2) «Así se vería»: maquetas realistas del entregable hechas en HTML y CSS (resultado de Google, anuncio en el feed de Instagram y Facebook, publicaciones del mes, la web en escritorio y celular, conversación de WhatsApp, correo, flujo de automatización, respuesta de un asistente de IA, ficha de producto y resumen de pago de una tienda, mapa de Google con tres negocios, reseña con respuesta, panel de edición, agenda de reservas, ficha de auditoría o de reporte mensual), siempre con la nota «ejemplo» y sin logos de terceros; (3) una tabla de ejemplo (campañas y palabras, pilares del mes, páginas del sitio); (4) entregables y «cómo lo medimos» con los indicadores del servicio. Las maquetas de diseño web usan capturas reales de proyectos publicados del portafolio; las de pauta y contenido usan fotos generadas para un cliente de ejemplo con el nombre «Tu negocio» o un rubro genérico, nunca un cliente real sin permiso. Ninguna maqueta afirma un resultado. Los estilos del molde viven en `src/styles/molde-kredit.css` y van en línea solo en las páginas v2: en la hoja global los pagaban las ~180 páginas de la ruta (presupuesto de D40); las plantillas v2 suben su máximo con ese motivo en `scripts/presupuestos.json`.

### D45. Fotos en la portada (reemplaza la regla de ilustración 3D de `DESIGN.md` y la parte de ilustración de D25)
La portada de cada página de servicio con anatomía v2 lleva una foto realista tipo Kredit (personas y lugares de Panamá, sin texto ni logos en la imagen), con pie corto sobre la foto como en la propuesta. El comprobante sigue en la misma pantalla. La foto se sirve en WebP a 1200 px con 60 KB o menos (D14) y declara ancho y alto; el `ImageObject` del schema describe la foto. Las páginas sin anatomía v2 conservan su imagen actual hasta su ola.

### D46. Presupuesto de imágenes (reemplaza el tope de D2)
Tope de US$ 10 en fal para esta etapa. Modelo superior (`fal-ai/nano-banana-pro`, US$ 0,15) para unas 15 fotos clave (portadas de la ola 1 y de pauta y contenido); el resto con `fal-ai/nano-banana-2` (US$ 0,08), el mismo modelo de Kredit. Cada generación cobrada queda registrada con su costo y su `request_id` en `audit/imagenes-ia-2026-10.json`, y cada foto publicada, con su modelo y descripción, en el `CREDITOS-IA.json` de su carpeta; se revisa el gasto acumulado antes de cada tanda.

### D47. Orden de trabajo
Se construye en continuo y en este orden: ola 1 (pilar, corporativo, SEO, Google Ads); pauta y contenido (Meta, contenido de Instagram, email, WhatsApp); formatos web (tiendas, landing, rediseño); el resto. Cada tanda pasa `npm run verify` y se mide con Lighthouse local (D6, D40); el dueño aprueba cada push. La puerta de PageSpeed Insights de D14 se aplica cuando exista la clave; mientras tanto la medida es Lighthouse local y así lo dice la etiqueta. La afirmación «Meta Verified» sigue bloqueada (D11) hasta que el dueño la confirme.

### D48. Credenciales confirmadas (14-oct-2026; resuelve esa parte de D11 y de la Puerta B)
El dueño confirmó que Elemento Web es Tech Provider de Meta con el negocio verificado, y que tiene la insignia de Google Partner. La credencial de Meta se escribe **«Tech Provider verificado por Meta»** (en texto largo: proveedor de tecnología verificado por Meta para la API de WhatsApp Business). No se escribe «Meta Verified Tech Provider»: «Meta Verified» es la insignia pagada de los perfiles, otro producto, y por eso sigue en `scripts/afirmaciones-bloqueadas.json`. Lo que la credencial no permite afirmar: «sin riesgo de bloqueo», «tu número está protegido», integración de Instagram o soporte directo de Meta. Google Partner se publica solo con el enlace al perfil público de Partner y la insignia oficial que entrega el programa. «100% interno» y «equipo interno» siguen sin confirmar.

### D49. Sin comprobante visible (14-oct-2026; reemplaza la parte visible de D21 y D22 y deja sin efecto D17)
El dueño no quiere el comprobante en las páginas. El bloque `receipt` se queda en los datos, pero no se pinta: su precio y su plazo salen en la portada, bajo los botones (componente `PrecioPlazo`, que lleva el contrato `data-score` del marcador), y su precio confirmado sigue dando la `Offer` del schema. La medición con fecha (LCP) deja de mostrarse y de ser un punto del marcador, que pasa de 10 a 9 puntos; D17 ya no aplica. Las mediciones siguen en `src/data/mediciones.json` para control interno. Las notas al pie del comprobante (lo que se paga aparte, lo que no se promete) pasan a una línea pequeña bajo el precio y el plazo de la portada.

### D50. Portada de agencia (14-oct-2026; resuelve la puerta de `PLAN-PORTADA.md` y enmienda D19, D20 y D21)
El dueño respondió «dale con todo con lo más recomendable y despliega» a la puerta final de `PLAN-PORTADA.md`. Queda decidido:
- **Versión corta** de la portada (9 secciones: héroe, franja de cifras, respuesta citable, mapa de 6 servicios, proyectos y clientes, proceso, industrias, preguntas y formulario). Escenas, maquetas, «lo que no hacemos» y comparación no van.
- **La portada sale antes de la fase 3** con el `ContactForm` actual: el orden de fases pasa a 1, 2a, 2b, 3, 4 y 5 (enmienda D19 y la tabla de D1).
- **El botón «Cotizar mi proyecto» baja al formulario de la misma portada** (`#formulario`), como las páginas v2 (enmienda D20 y D21).
- **Posicionamiento:** el mapa conserva los 6 servicios, pero la bajada y la respuesta citable lideran con web que convierte más WhatsApp oficial (Tech Provider verificado por Meta).
- **Tráfico:** la portada se construye en paralelo con una fuente de tráfico con fecha (ficha de Google con fotos y primeras reseñas, perfil en Clutch o la prueba de pauta hacia páginas de servicio, `TODOS.md`).
- **Permisos:** se retiran los 26 logos sin confirmar (vuelven solo los que el dueño confirme con su nombre); se retira «equipo interno» y «100% interno» de la portada, `/nosotros/` y `/como-trabajamos/`; IA queda confirmada «desde $2,900 más el consumo de los modelos» (`confirmados.ia`); la captura de TramitaPa va en el héroe; el testimonio de TramitaPa sale de la portada y de su caso hasta que el cliente apruebe una frase sin resultado.
- **H1 y D18 (S5 hecha el 14-oct-2026, `audit/s5-agencia-diseno-web-2026-10.md`):** las dos SERP coinciden en 1 de sus 5 primeros resultados, así que no son casi iguales: **la portada y la pilar siguen separadas** (D18). H1 de la portada: «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp», la candidata neutral recomendada (abre como los titles del top 5, nombra el alcance de agencia y no promete resultados). Como contiene la frase de la pilar, `KEYWORDS.md` anota la excepción a su regla 2. El volumen del Planificador queda pendiente de la sesión de Google Ads del dueño; si lo contradice, D18 se reabre en un plan nuevo.
- **Maquetas del héroe y de los proyectos:** capturas reales de los sitios publicados (TramitaPa en el héroe; San Blas Full, Panama International Movers, Remodelaciones JG y CicloFrio en la lista) dentro de marcos de navegador y celular hechos en HTML y CSS (`ew-dev`). El dueño autorizó fal, pero no se usó: un render de IA del sitio de un cliente puede mostrar algo que el sitio no tiene, y la portada vende evidencia. La captura de celular a 780 px de TramitaPa se tomó del sitio en vivo el 14-oct-2026. El gasto de imágenes sigue en $3.27 (D46).
- **Medición:** por sesión con página de entrada `/`: sesiones, `cta_click` y `click_whatsapp` por sesión, y `form_start` y `generate_lead` en cualquier página de esas sesiones. La línea base sale de GA4 entre el 30-sep y la fecha de publicación (GA4 tiene datos desde el 30-sep). Revisión a las 4 y 8 semanas. La meta de consultas por mes de D16 sigue pendiente del dueño; mientras, se compara contra la línea base.

### D51. Portada v2 con piel grafito (15-oct-2026; reemplaza partes de D50 y de D20)
Fuente: el «Procede» del dueño del 15-oct-2026 y sus respuestas a las dos puertas de /autoplan sobre `PLAN-PORTADA-V2.md`. Queda decidido:
- **Puertas.** Primera: UC1 a (publicar con la medición del plan), UC2 a (se queda «premium»), UC3 a (se quedan los bloques y las maquetas), UC4 b (Proyectos e Industrias justo después de la respuesta citable). Segunda: Industrias sobre grafito y «Aprobar y construir». Q1, Q2 y Q3 con su valor por defecto: grafito solo en `/` (el resto, en `TODOS.md`); H1 a tamaño de subtítulo encima de la frase de display (el texto y el marcado del H1 de D50 no cambian; la alternativa de etiqueta pequeña como el mockup no se eligió); display en peso 800.
- **Reemplaza de D50:** la versión corta (escenas, maquetas, «lo que no hacemos» y comparación vuelven: la portada tiene 13 secciones); la captura de TramitaPa en el héroe (pasa al módulo de diseño web); la lista de proyectos (San Blas Full, Panama International Movers, Remodelaciones JG y CicloFrio pasan a la cascada del héroe y Proyectos muestra otros 4); y la bajada que lideraba con WhatsApp oficial. **De D20:** el orden de la home y «Software propio es un enlace secundario del pie» (los 3 SaaS van en la franja de Desarrollo). D23 no cambia: todo precio confirmado se lee «desde $X».
- **Industrias:** `src/lib/site.ts` listaba 24 de las 30 páginas de industria; se sumaron las 6 que faltaban (aduana y zona libre, aire acondicionado, cooperativas, imprentas, navieras y seguridad) para que «Ver las N industrias» cuente las páginas que existen.
- **Compacto (menos de 640 px):** Servicios y Marketing sin maquetas; Proyectos en 2 × 2; sin el riel del héroe ni el pie de la cascada; «Más industrias» en 2 columnas. La puerta de `qa-lcp` (no más de 2.110 px entre un «Cotizar» y el siguiente a 390 × 844) encontró en T4 el tramo Precios → formulario en 3.210 px, que el plan no había estimado; se aplicó su remedio, un «Cotizar» propio en Compara (`compara`/`definir`, «Pedir mi cotización por escrito»). El tramo más largo queda en 2.066 px.
- **Medición de los botones** (`data-cta-loc` / `data-service` → opción que deja elegida en el formulario):

  | Sección | `data-cta-loc` | `data-service` | Opción del formulario |
  |---|---|---|---|
  | Menú (escritorio y móvil) | `header` | `definir` | sin cambio |
  | Héroe | `hero` | `definir` | sin cambio |
  | `#proyectos` | `prueba` | `definir` | sin cambio |
  | `#industrias` | `industrias` | `definir` | sin cambio |
  | `#servicios` | `servicios` | `definir` | sin cambio |
  | `#seo` | `seo` | `revision` | Revisión de mi web |
  | `#desarrollo` | `desarrollo` | `medida` | Software a medida |
  | `#marketing` | `marketing` | `pauta` | Marketing digital / Pauta |
  | `#proceso` | `proceso` | `definir` | sin cambio |
  | `#precios` | `precios` | `landing`, `pyme`, `ecommerce`, `medida`, `mensual` | Landing page; Diseño web / Sitio corporativo; Tienda online / E-commerce; Software a medida; plan mensual |
  | `#compara` | `compara` | `definir` | sin cambio |

  `service=pauta` desde Marketing se lee como marketing digital en general, no solo anuncios. La tarjeta «A medida» elige «Software a medida». El «Cotizar» del menú móvil se mide como `header` en `/` y como `other` en las demás páginas (`#mnav` está fuera de `<header>`). Un «Cotizar» con servicio deja elegida la opción, la anuncia en una región `aria-live` y no emite `form_start`.
- **Lo medido en el build (15-oct-2026, Windows 11, Node 24):** CSS de la portada 26.731 B gzip (máximo nuevo 27.600 B, motivo en `scripts/presupuestos.json`); JS 34.118 B (máximo sin cambio, 34.800 B); los otros 251 HTML del build (252 con `/`), idénticos a la línea base de `4a15209`, y la hoja compartida con el mismo conjunto de selectores. El botón de contorno se declara con borde de 1,5 px, pero Chrome 155 redondea todo borde a píxeles CSS enteros y lo pinta de 1 px (Safari y Firefox, de 1,5 px en pantallas de densidad 2). En la pasada de `qa-a11y` con la página desplazada se excluye la marca «elemento web» del menú, que es logotipo (exento de contraste por WCAG 1.4.3). La hora ocupada de la maqueta de agenda (3,04:1) pasa a `--ew-muted` solo en `/`.
- **Reversión:** los commits de código van de `portada-v2-inicio` (`6bd1067`, T0) a `portada-v2-fin` (`5199b4d`, T5); el registro de gasto de fal (`aea3647`) va antes y la documentación después. Revertir: `git revert --no-edit portada-v2-inicio^..portada-v2-fin`, `npm run verify`, push con permiso del dueño, `gh run watch <id> --exit-status` y `bash scripts/check-prod.sh`. Las etiquetas se pushean con la rama, con permiso del dueño.
- **Medición de la v2 (día P = publicación; pendiente).** La v2 es una decisión de marca y de criterio del dueño, no un experimento: la medición sirve para detectar daño. Search Console (impresiones, clics y posición de «agencia de diseño web» y «diseño web panama») en P + 14 y P + 28 días contra `audit/gsc-baseline-2026-10.md`, solo lectura, sin reversión por SEO; reemplazan las lecturas del 28-oct y el 11-nov, y las del 28-nov y el 28-dic siguen. GA4 por sesión con entrada en `/` (`cta_click`, `click_whatsapp`, `form_start`, `generate_lead`) en P + 4 y P + 8 semanas contra el 30-sep al 14-oct; solo se concluye con al menos 300 sesiones y 5 `generate_lead` por ventana, y si no, «datos insuficientes» y se repite a las 12 semanas. Lighthouse móvil y LCP en producción el día P: reversión si baja de 85 o el LCP pasa de 3,5 s (D14). Los días de D50 en producción no cuentan como periodo medido.
- **Publicación (día P = 15-oct-2026, hora de Panamá):** el dueño autorizó primero la rama (CI de `portada-v2` en verde, run 38834763256) y luego `main` con «Procede»; `main` pasó de `4a15209` a `aff0154`, el despliegue (run 38841000456) quedó en verde y `scripts/check-prod.sh` dio 39 ok y 0 fallos. Lighthouse móvil en producción el día P: 92/100 y LCP 1,8 s (mediana de 5, Lighthouse 13.5.0, desde la PC del dueño en Panamá); en local, 99/100 y 2,1 s. **La línea base de GA4 no se copió antes de publicar:** el dueño pidió seguir sin ella; las sesiones con entrada en `/` del 30-sep al 14-oct son datos históricos y se copian aquí en la primera lectura de GA4 (P + 4 semanas), diciendo si llegan al umbral.

### D52. Marketing Digital pro e IA creativa (17 al 20-oct-2026; plan en `SPEC-MARKETING-IA.md`)
Fuente: decisiones del dueño del 17-oct (D52.1 a D52.4 de la spec), la puerta final de /autoplan del 19-oct («rec», D2 y D3, y «procede» para aprobar el plan), las tarjetas D4 a D6 del 19-oct y la tarjeta D7 del 20-oct, que decide con la medición de demanda. Queda decidido:
- **D52.1:** Marketing Digital es mejorar el hub `/marketing/`, no una página nueva. La excepción a D36 para su title, H1, descripción y schema vale solo para `/marketing/`.
- **D52.2, reemplazada en el número por U1 (D7 del 20-oct):** de las 4 páginas pedidas salen 2 en esta tanda: Videos y Fotografía de producto. Anuncios y Avatares y voz van como secciones de otra página, cada una con su propio plan (`MKIA-DEMANDA`).
- **D52.3, precios** (punto medio del mercado; son estimados, porque en Panamá no hay tarifas publicadas). Se publican en esta tanda:
  - `videos-ia` = US$ 500 por paquete de 4 videos de 15 a 30 s con guion, voz y subtítulos. Fuente: usastreams.com/reels, paquetes de US$ 300 a 700; el punto medio es 500.
  - `fotos-producto-ia` = US$ 480 por paquete de 10 fotos en 3 escenarios, a partir de fotos reales del cliente. Fuente: cronoshare y annasemiguk, de 25 a 60 € por foto con fondo hecho con IA, es decir, de 250 a 600 € por 10. El punto medio es 425 €, que al cambio de 1,1213 del 19-oct (Trading Economics) son US$ 476,55; se redondea hacia arriba para no quedar por debajo. Decididos y guardados para sus secciones, sin entrar todavía a `precios.json`: `anuncios-ia` = US$ 780 por paquete de 5 creativos (4 imágenes y 1 video de hasta 15 s); `avatar-ia` = US$ 150 por video de hasta 1 minuto.
- **D52.4, ejemplos:** cada página muestra ejemplos propios marcados «Ejemplo», con un tope de US$ 15 en fal para esta tanda, controlado por `scripts/gasto-ia.mjs`. Sobre D46: esta tanda usa `nano-banana-pro` también en los ejemplos. El avatar ya no se hace con Higgsfield (0 créditos en el plan gratis): se hará con `fal-ai/kling-video/ai-avatar/v2/pro` (US$ 0,115 por segundo, unos US$ 2,30 por 20 s) cuando se construya su sección (tarjeta D6).
- **Método de los videos con voz (20-oct-2026).** Los subtítulos salen de las marcas de tiempo que devuelve `fal-ai/elevenlabs/tts/multilingual-v2` con `timestamps: true`, sobre el texto exacto del guion. Así no hace falta `fal-ai/whisper` ni corregir el `.srt` a mano, y el resultado es el que pedía la spec: subtítulos iguales al guion y sincronizados con la voz. Para que libass use Roboto (no abre el `woff2`), se generan instancias TTF estáticas de 400 y 700 a partir de `public/fonts/roboto-latin-wght-normal.woff2` con fontTools, en `.gstack/tmp/fonts/`. Es el mismo archivo del sitio con la misma licencia (Apache 2.0), sin descargar nada. La voz entra a los 0,8 s y se rellena con silencio hasta el final del clip (`adelay` y `apad`), para que `-shortest` no recorte el video.
- **Medición de demanda (U1, 19 y 20-oct-2026, `audit/demanda-ia-creativa-2026-10.md`).** Planificador en Panamá, oct-2025 a sept-2026, «Todos los idiomas» porque el filtro de idioma no abrió en la cuenta cancelada. Primera página de Google con `gl=pa&hl=es&pws=0`, en una pestaña normal, porque la extensión no abre ventanas privadas. La regla de U1 no decía si los 3 servicios se cuentan con la palabra sola o con «panamá»; el dueño eligió contarlos con «panamá», porque las URL terminan así (D7 = A).

  | Paquete | Palabra principal del plan | Planificador | Google | Decisión |
  |---|---|---|---|---|
  | Videos | videos con ia para empresas | sin datos | 1 servicio y 8 herramientas | Página propia con «videos publicitarios» (10 a 100; 8 productoras locales con «panamá»). «videos con ia» (100 a 1.000) trae solo herramientas y queda como diferenciador |
  | Fotografía de producto | fotografía de producto con ia | sin datos | 1 servicio, 5 herramientas y 1 curso | Página propia con «fotografía de producto» (10 a 100; 7 estudios locales con «panamá»). «imágenes con ia» (100 a 1.000) trae solo herramientas |
  | Anuncios | anuncios con ia | 10 a 100 | 0 servicios y 7 herramientas | Sección. Las alternativas de la categoría (10 a 100) tampoco llegan a 3 servicios; con «panamá», «anuncios para redes sociales» es pauta en redes, la intención de `/marketing/facebook-instagram-ads-panama/` |
  | Avatares y voz | avatar con ia | 10 a 100 | 0 servicios y 9 herramientas | Sección. «avatar ia» (10 a 100), «presentador virtual» (0 a 10) y «voz en off» (10 a 100) no traen servicios; con «panamá», «voz en off» busca locutores humanos |
- **Hoja de contactos de Videos, aprobada por el dueño el 20-oct-2026 (tarjeta D8 = A).** Salen: el video 1 (café de un negocio de ejemplo, voz «Laura» de ElevenLabs con el guion «Café de altura, tostado esta semana. Pídelo hoy y te lo llevamos a tu oficina en Ciudad de Panamá.», subtítulos en Roboto), el video 2 (sérum, base visual sin voz) y la portada (una vendedora en un café del Casco Viejo graba el video 1 con el celular). Gasto de la tanda hasta aquí: US$ 1,86 de 15.
- **Fuentes del bloque «¿Cuándo te basta la herramienta gratis?» (leídas el 20-oct-2026).** Canva, Magic Video: video vertical de hasta 60 s con 1 a 10 fotos, con plantillas, transiciones y música, en todos los planes, incluido el gratis (canva.com/en_gb/help/magic-video/). Canva, imagen a video: clip de 5 s sin audio (canva.com/en_gb/help/image-to-video/). Google Ads, biblioteca de recursos: video con plantilla, logo, imágenes, texto y música (support.google.com/google-ads/answer/14753669). Google Ads, imagen a animación: clip de 4 s sin sonido, que rechaza caras e imágenes de stock (support.google.com/google-ads/answer/17007771). De Meta no se nombra ninguna función: la búsqueda en su ayuda oficial no dio una página que describa con claridad cómo pasar una foto a video en el Administrador de anuncios.
- **Corte vertical de Videos (paso 4), en verde el 20-oct-2026.** El paso 1 empezó a las 00:08 (`precios.json`). Las 8 pruebas de la página sobre `dist/` pasaron con el build de las 07:06. El TTHW de la épica es de unas 7 h, e incluye la espera de la tarjeta D8 del dueño. El marcador da 8 con evidencia y 1 en blanco honesto. El único error es el esperado del paso 5: 0 páginas enlazan todavía a la nueva.
- **Salida de la tanda (20-oct-2026): N = 1.** Sale solo `/marketing/videos-publicitarios-panama/`. Fotografía de producto no llegó a su mínimo de ejemplos (la «antes» y 2 «después»): la foto de celular del dueño (G4) no llegó antes del build, y bajar una de stock pide su permiso. Por la regla del mínimo de ejemplos, esa página no sale en esta tanda y las demás sí; queda en `TODOS.md` con su slug ya congelado y su precio en `precios.json`. El dueño pidió terminar y publicar («sigue con lo que falta hasta que termines y déjalo en producción para revisarlo», 20-oct-2026), que vale como permiso del push (D47).
- **Publicación (día P = 20-oct-2026, hora de Panamá).** `main` pasó de `81c038d` a `5d187f0`; el despliegue (run 39458648383) quedó en verde y `scripts/check-prod.sh` dio 39 ok y 0 fallos. Antes del push, `npm run verify` salió en verde (211 pruebas). Contra la línea base (`003e17d`), la hoja compartida no cambió (+0 −0) y el `<main>` difiere solo en `/marketing/`, `/servicios/` e IA para empresas, más la página nueva. `seo-congelado` dio un solo error, «URL nueva», y el snapshot suma esa URL y la descripción nueva de `/marketing/`, nada más. Lighthouse móvil en producción el día P: 94 a 96 y LCP de 2,0 a 2,3 s en 3 corridas (Lighthouse 13.5.0, desde la PC del dueño en Panamá), por encima del umbral de reversión de D14 (85 y 3,5 s). En local, `medir.mjs` dio LCP 2,5 s (mediana de 5), que queda en `mediciones.json`. El video se reproduce en producción como `video/mp4`, con caché de 30 días y `Accept-Ranges`.
- **Slugs congelados:** `marketing/videos-publicitarios-panama` (principal «videos publicitarios») y `marketing/fotografia-de-producto-panama` (principal «fotografía de producto»; reemplaza el valor de G6). El title y el H1 de cada una llevan su palabra principal, la IA va como diferenciador en el texto, y el dueño aprueba el texto en las capturas antes del commit. Las claves de precio y de medición no cambian (`videos-ia`, `fotos-producto-ia`, `videos-ia-lcp`, `fotos-ia-lcp`). El corte vertical del paso 4 del «Runbook» pasa de Anuncios a Videos.
- **Líneas de la puerta** (`id = valor`):
  - `G1` = 780 (5 creativos), 500, 480 y 150; en esta tanda se publican 500 y 480.
  - `G2` = claves existentes del formulario, sin tocar Hetzner: las 2 páginas usan `definir`.
  - `G3` = sin ItemList en el hub.
  - `G4` = foto «antes» de celular del dueño, de un producto sin marca.
  - `G5` = plazos de 7 días hábiles (Videos, desde que apruebas el guion) y 5 días hábiles (Fotografía de producto, desde que recibimos tus fotos).
  - `G6` = `marketing/fotografia-de-producto-panama`, por U1.
  - `G7` = descripción nueva del hub, sus filas en la tabla de decisión (2 en esta tanda), riel, respuesta citable y frases sin superlativos.
  - `G8` = sin cifra en la frontera con la gestión de Meta Ads.
  - `U1` = medida el 19 y 20-oct-2026; decisión en la tabla de arriba (D7 = A).
  - `U2` = un paquete sin búsquedas va como sección con plan propio: Anuncios y Avatares y voz.
  - `U3` = paquetes de un solo pago; el plan mensual se nombra sin cifra.
  - `T1` = menú y pie se incluyen.
  - `T2` = sin rótulo en las portadas hechas con IA.
  - `T3` = «Negocio de ejemplo» ficticio.
  - `T4` = «Más», como hoy.
  - `T5` = conteos literales, editados una sola vez con N = 1 (34 → 35 páginas y 25 → 26 servicios); pasan a 27 cuando salga Fotografía de producto.

### D53. Paneles apilados en Servicios de la portada (20-oct-2026; enmienda D51 y la regla de movimiento de `DESIGN.md`)
Fuente: el «me gusta» del dueño al prototipo de paneles apilados (con el pedido de imágenes que representen cada servicio, ya generadas en `aa173af`) y la tarjeta D9 del 20-oct-2026, «B: igual al prototipo, con GSAP», después de ver que el cambio no había llegado al home. Plan: `PLAN-SERVICIOS-APILADOS.md`. Queda decidido:
- La sección 5 de la portada deja el bento de 6 módulos y pasa a 6 paneles apilados: número, H3, precio confirmado, texto, lista de lo que incluye, su «Cotizar» y la imagen del servicio. Los datos salen de `filasMapa`; el ItemList del schema no cambia.
- El efecto es el del prototipo: la pila se fija debajo del menú, cada panel entra y tapa al anterior, que se encoge a 0,88 y se oscurece; el H3 entra desde 0,72 y las palabras se revelan. Sin JavaScript, con «reducir movimiento» o con menos de 560 px de alto, los paneles son una lista.
- **Peso.** El núcleo de GSAP ya estaba en el JS inicial de todas las páginas, por el menú móvil (`Navbar.astro`). Lo nuevo es ScrollTrigger y el módulo del efecto (`src/scripts/servicios-apilados.ts`), unos 18 KB gzip, que se cargan con `import()` solo cuando la sección se acerca a menos de 2 pantallas. El JS inicial del home sube 1.083 B (34.118 → 35.201 B) por el cargador y el ayudante de `import()`, y su máximo pasa a 36.400 B. El CSS queda en 26.890 B.
- **Diferencias declaradas con el prototipo.** Las palabras se revelan desde `--ew-muted` y no desde `#c3ccd6`, que no pasa WCAG AA. Al enfocar con teclado un enlace de un panel que no entró, la página baja hasta él y le devuelve el foco. Cada panel lleva su «Cotizar» con la opción del servicio (`pyme`, `ecommerce`, `revision`, `pauta`, `pauta` para WhatsApp, que no tiene opción propia, e `ia`). El botón final de la sección sigue con `definir`.
- **Reglas que cambian:** `DESIGN.md` («la portada no se anima», con esta excepción) y las pruebas 5 y «la portada no se anima» de `scripts/portada.test.mjs`. `qa-lcp` comprueba el efecto a 1440 y 390, el teclado y «reducir movimiento».
- Las maquetas del bento de Servicios (tienda, mapa y campañas) salen del CSS; el bento sigue en la sección de Marketing.
- **Primera publicación revertida (20-oct-2026).** `246c3a4` no pasó CI: el Tab retrocedía en bucle dentro de los paneles (corregido en `8e7fb96`, y la prueba del Tab de `qa-a11y` corre ahora con la CPU frenada 4 veces). Ya publicado, Lighthouse móvil del home dio 79 a 83 (TBT de 478 a 640 ms), por debajo del umbral de 85 de D14, porque ScrollTrigger se pedía en el tiempo libre después de la carga. Se revirtió en `ce1a4b0`. Además, la clase `.pv2-panel` ya era de la sección Desarrollo, y el CSS nuevo le cambió el aspecto mientras estuvo publicado. La segunda versión pide ScrollTrigger solo al acercarse a la sección (Lighthouse local de 99 en 5 de 6 corridas, igual que sin el efecto) y usa clases `pv2-ap-*`, con una prueba de que no salen de `#servicios`.
- **Publicación (20-oct-2026).** `2e29bbf`, despliegue 39507053192 en verde, `check-prod` con 39 ok. Lighthouse móvil del home en producción, 5 corridas desde la PC del dueño: de 87 a 91 (mediana 90), LCP 1,75 s y CLS 0, sin pedir ScrollTrigger. Queda por encima del umbral de D14, y el TBT que sigue (unos 300 ms) no viene del efecto. En producción se comprobó que la pila se fija, que el foco con teclado queda a la vista y que Desarrollo conserva su aspecto. Las lecturas de la portada v2 (D51: GSC del 29-oct y del 12-nov, GA4 del 12-nov y del 10-dic) incluyen desde hoy este cambio, y así se anota al leerlas.

## 3. Responsables y dependencias humanas

| Dependencia | Responsable | Cuándo |
|---|---|---|
| Aprobación de cada push | Dueño | Cada fase |
| Export de Search Console | Claude, con la sesión de Search Console del dueño en Chrome | Paso 0 de la fase 1 y el día antes de 2a, 2b, 4 y 5 |
| Planificador de palabras clave (S5) | Dueño o Claude con su sesión | Antes de aprobar el H1 |
| Puerta B | Dueño | Antes de 2b |
| Confirmar el tope de $4 | Dueño, en el gate final | Antes de generar imágenes |
| Clave gratuita de la API de PageSpeed Insights en `~/.ssh/psi.key` (D40) | Dueño | Antes de medir la ola 1 |
| Confirmar a quién avisa `sanblasErrorAlert01` y si Traefik admite límite de tasa en el webhook (T29) | Dueño o Claude con acceso a n8n | Antes de la fase 3 |

## 4. Trazabilidad de la tercera revisión

| Hallazgo | Decisión |
|---|---|
| C-1 | D6 |
| C-2 | D10 |
| C-3 | D7 |
| C-4 | D14 |
| C-5 | D13 |
| C-6 | D7 |
| C-7 | D11 |
| C-8 | D10 |
| C-9 | D3 y D12 |
| K-1 | D6 |
| K-2 | D4 |
| K-3 | D3 |
| K-4 | D2 |
| K-5 | D13 |
| K-6 | D1 y la tabla de vigencia |
| K-7 | D10 |
| K-8 | D9 |
| K-9 | D4 |
| K-10 | Tabla de vigencia |
| K-11 | D13 |
| Y-1 | Tabla de vigencia |
| Y-2 | D7 |
| Y-3 | D6 y D14 |
| Y-4 | D10 |
| Y-5 | D14 |
| Y-6 | Sección 3 |
| S-1 | D5 |
| S-2 | D2 |
| S-3 | D6 y D8 |
| S-4 | D11 |
| S-5 | Resumen CEO actualizado |
| F-1 | D8 |
| F-2 | D14 |
| F-3 | D1 y D14 |
| F-4 | D6 |
| F-5 | D8 |
| F-6 | D8 |

## 5. Trazabilidad de la revisión de ingeniería

Voz de Claude (14 hallazgos, numerados en el orden de su informe) y Codex (10 hallazgos, en el orden de su informe).

| Hallazgo | Decisión |
|---|---|
| Claude 1 (correo opcional descarta leads) y Codex «correo opcional» | D30 |
| Claude 2 (idempotencia falsa) y Codex «contrato v1 y v2 sin idempotencia» | D31 |
| Codex «el éxito no significa que el CRM recibió el lead» | D30 y D31 |
| Claude 3 (plantilla compartida sin red) y Codex «23 páginas subestima el radio» | D35 y D36 |
| Claude 4 (la puerta real vive en la máquina del dueño) y Codex «CI solo despliega» y «pruebas más fuertes que su automatización» | D37 y D38 |
| Claude 5 (PageSpeed frágil) y Codex «presupuesto de rendimiento insuficiente» | D40 |
| Claude 6 (esquema triplicado) | D34 y D32 |
| Claude 7 (webhook sin control) y Codex «webhook abusable» | D33 |
| Claude 8 (validador fácil de engañar) y Codex «marcador sobre `dist` eludible» | D35 y D39 |
| Claude 9 (mediciones y fechas envejecen) | D40 |
| Claude 10 (controles automáticos de SEO) | D36 |
| Claude 11 (arqueología de tres capas) | R44 y D43 |
| Claude 12 (mediciones de la ola 1 quedan viejas) | D42 |
| Claude 13 (reversión de n8n) y Codex «rollback sin especificar» | D41 |
| Claude 14 (FAQPage sin resultados enriquecidos) | Sin cambio: se conserva por GEO |
| Codex «protección de rama» (implícito en el CI) | Rechazado: DT-E1 en D37 |
