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
| R29 | Vigente con la salida de emergencia de D8 y con D37 (el CI corre el navegador) | D8 y D37 |
| R30 | Vigente con las precisiones de D10 y D30 a D34 | D10 y D30 a D34 |
| R45 (alcance de R44) | Vigente: R44 se lee con D1 a D43 | Todo el documento |
| R32 | Vigente con la precisión de D2 | D2 |
| R33 | Vigente sin `blog-4.ts` (fuera de alcance) | D11 |
| R35, R36, R37, R38, R39, R40 | Vigentes con las precisiones de D12, D13 y D14 | D12 a D14 |

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
