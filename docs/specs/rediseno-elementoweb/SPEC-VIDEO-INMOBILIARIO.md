<!-- /autoplan restore point: "C:\\Users\\JosimarG\\Projects\\elementoweb\\.gstack\\tmp\\autoplan\\main-autoplan-restore-20261021-151751.md" -->
## Implementation plan
# Página «Video inmobiliario con IA» (D55)

Estado: plan, pendiente de `/gstack-autoplan` y de la aprobación del dueño. Nada de esto está construido.

## Context

El 21-oct-2026 Ilitch (EconoTour) pidió animar los renders de Luxor500 (El Cangrejo) para un demo. Lo hicimos con
fal (Kling 3 Pro) y salió bien: los muebles y la arquitectura no se deforman. El dueño pidió ofrecer este trabajo en
la web, en una **página propia con precios**.

Decisiones que el dueño ya tomó en tarjetas (21-oct-2026):

| Id | Decisión |
|---|---|
| D55.1 | Diseño de la sección de precios y ejemplos: **variante 4** de los mockups de fal (`mockups-video-inmobiliario/v4.jpg`): texto y checklist a la izquierda, collage de un cuadro 16:9 y una pantalla 9:16 con sombra desplazada a la derecha, precios en pestañas abajo. |
| D55.2 | Precios: **Unidad $550**, **Proyecto $1,450** (hasta 4 tipos de apartamento), **Preventa $2,400** (6 tipos, amenidades y fachada, ~60 s). Son estimados. Unidad es el punto medio de video inmobiliario con IA ($350–750); Proyecto y Preventa escalan por cantidad de videos y quedan dentro del rango de animación 3D en Latinoamérica ($800–2,500), Preventa cerca del tope. No hay tarifas publicadas en Panamá. |
| D55.3 | **Página propia**, no un bloque dentro de Videos publicitarios. |
| D55.4 | Ejemplo: **render ficticio** hecho con IA (no Luxor500, que es de un cliente de Ilitch y no hay permiso). Ya está hecho: 18 s, 16:9, 4 ambientes, narración, música y subtítulos. |
| D55.5 | **Música incluida** en todos los planes; **narración + subtítulos = un extra de $150 por video**. Mercado: voz $50–250 y subtítulos $20–150 por video (fuentes de EE. UU.). |

Fuentes de precios (leídas el 21-oct-2026):
- Video inmobiliario con IA, agencias: básico $150–350, cinematográfico $350–750 — reel-e.ai, amplifiles.ai, vo3ai.com.
- Animación 3D de arquitectura en Latinoamérica: $800–2,500 por video — estudiolatarq.com (lista de precios y blog), render3dquick.com.
- Voz y subtítulos como extra: autoreelapp.com, pps.innovatureinc.com, fash.com.

## Current State

- `/marketing/videos-publicitarios-panama/` existe (D52, publicada el 20-oct-2026), desde $500 por 4 videos verticales. Es el molde: anatomía v2, `ejemplos` con tipo `video`, `receipt`, `includes`, etc. (`src/lib/pages/marketing.ts:1315-1462`).
- `src/data/ia-creativa.json` lista las páginas de IA creativa (hoy 1) y `scripts/marketing-ia.test.mjs` compara ese conjunto con 10 sitios derivados.
- No hay bloque de precios en pestañas ni collage 16:9 + 9:16. `plans` existe (`types.ts:18`) pero pinta tarjetas.
- Activos ya generados (en el scratchpad de la sesión, no en el repo): 4 renders ficticios 2752×1536, 4 clips Kling de 5 s, narración ElevenLabs v4, música ElevenLabs Music v2.5 y el video final de 18,2 s / 13,6 MB.
- Gasto de fal de esta sesión: US$ 6,31 en total, rederivado de los precios por unidad de fal del 21-oct-2026 [estimado: no se leyó el cobro real]. Para la web, US$ 4,21: mockups 4 × 0,15 = 0,60 · renders 4 × 0,15 = 0,60 · clips Kling 4 × 5 s × 0,14 = 2,80 · voz 173 caracteres × 0,08/1.000 ≈ 0,01 · música 20 s × 0,60/min = 0,20. Aparte, US$ 2,10 del demo de Luxor500 (3 clips), que es trabajo para el cliente de Ilitch y no entra en la tanda de la web. Las filas aún no están en `audit/imagenes-ia-2026-10.json`.

## Proposed Change

### #0 Demanda (paso 0b del runbook de D52, antes de fijar el slug)
Medir en Google (Panamá, ventana privada) y, si el dueño puede, en el Planificador: «video inmobiliario», «video
para inmobiliarias», «recorrido virtual apartamento», «render animado», «video de preventa». Regla de U1: página propia
si hay búsquedas y ≥ 3 resultados de agencias o servicios. Slug por defecto: `marketing/video-inmobiliario-panama`.
Si ninguna palabra pasa, se para con `VINM-DEMANDA` y se decide con el dueño (la opción B es el bloque dentro de Videos).

### #1 Precios en `src/data/precios.json` (`confirmados`)
- `video-inmobiliario-unidad`: 550, «video de una unidad, 20 a 30 s, hasta 5 ambientes».
- `video-inmobiliario-proyecto`: 1450, «hasta 4 tipos de apartamento, un video por tipo».
- `video-inmobiliario-preventa`: 2400, «hasta 6 tipos, amenidades y fachada, ~60 s».
- `narracion-subtitulos`: 150, «por video», como extra.
`fuente`: `src/lib/pages/marketing.ts` y D55.

### #2 Activos del ejemplo (ya generados; falta prepararlos)
- Horizontal: el video de 18 s recomprimido a ≤ 2 MB (regla de D52: H.264, `yuv420p`, `profile high`, 720p, escalera de CRF). Si no cabe con voz a 720p, se acepta 3 MB **solo si** el dueño lo aprueba; si no, 960×540.
- Vertical 9:16: recorte central del mismo montaje (720×1280), con los subtítulos re-ubicados. Mismo tope de peso.
- Subtítulos en Roboto (hoy van en Segoe UI): se re-quema con Roboto TTF descargado a `.gstack/tmp/fonts/` con permiso del dueño, como dice el runbook de D52.
- Pósters WebP ≤ 80 KB. Créditos en `public/videos/ia-creativa/CREDITOS-IA.json` y `public/images/ejemplos/CREDITOS.json`.
- Gasto: filas nuevas en `audit/imagenes-ia-2026-10.json` con `"tanda": "video-inmobiliario"` (tope propio de US$ 10, el `tope` del archivo pasa de 25 a 35).
- Archivos: `public/videos/ia-creativa/ia-inmobiliario-1.mp4` (16:9) y `ia-inmobiliario-2.mp4` (9:16).

### #2b Foto de portada (D45)
Una foto realista: una laptop sobre un escritorio de una oficina de ventas inmobiliaria en Panamá, mostrando un cuadro
del recorrido, compuesta con `scripts/componer-pantallas.mjs`. Instalada con `scripts/portadas-fotos.mjs`.

### #3 La página (anatomía v2, `src/lib/pages/marketing.ts`, padre `marketing`)
- Title: «Video Inmobiliario con IA en Panamá | Recorridos de Apartamentos» (≤ 60; se ajusta tras #0).
- H1: «Video inmobiliario con IA para tus proyectos».
- `serviceKey: 'definir'`, `service.catalogo` con las 3 claves de plan.
- Orden de bloques igual al de Videos: `answer` → `receipt` (desde $550 por video de una unidad) → **bloque nuevo `planes-tabs`** (variante 4) → `blank` (prueba) → `includes` → `steps` → `tabla` (¿cuándo basta un recorrido 360 o un video con celular?) → `compare` → `faq` (≥ 6, entre ellas «¿Puedo usar los renders del arquitecto?», «¿Las piezas son exclusivas?», «¿Cuánto cuesta la narración?») → `form` → `related`.
- Contenido obligatorio: el ejemplo es ficticio y lo dice («Ejemplo · proyecto ficticio hecho con IA»); el cliente debe tener derecho de uso sobre los renders o fotos que entrega; la IA no inventa ambientes que no están en el render; revisión humana; licencia no exclusiva.

### #4 Bloque nuevo `planes-tabs` (variante 4)
- Tipo: `{ type: 'planes-tabs'; h2; intro; checklist: string[]; media: { horizontal: EjemploVideo; vertical: EjemploVideo }; planes: { clave: string; nombre: string; detalle: string }[]; extra?: { clave: string; texto: string } }`.
- Precio de cada pestaña leído de `precios.json` por `clave` (nunca escrito a mano).
- Pestañas accesibles: patrón WAI-ARIA Tabs (`role="tablist"`, flechas, `aria-selected`), con el plan Proyecto activo por defecto. Sin JS, los 3 planes se ven apilados (mejora progresiva).
- Collage: cuadro 16:9 y pantalla 9:16 con marco blanco, radio 20 y sombra desplazada de 10 px sin desenfoque en `accent` (DESIGN.md ya define esa sombra para la vitrina). En compacto, el 9:16 va debajo y más chico.
- Checklist con el check SVG en `accent-on-light` (el de la vitrina D54), no el «+» de las listas.
- Estilos en una hoja propia que se pone en línea solo en esta ruta (aprendizaje `astro-css-por-ruta-no-por-componente`); `presupuestos.mjs` sin subir máximos.

### #5 Enlaces
`ia-creativa.json` (2 páginas), menú y pie «Producción con IA», `/servicios/`, `/marketing/` (fila de la tabla «Elige por lo que quieres lograr»), `related` de Videos publicitarios, `llms.txt`, `KEYWORDS.md`, `formulario.json` (`definir`), `paginas-comerciales.json`.

## Runbook
Igual al de `SPEC-MARKETING-IA.md` (pasos 0 a 9), con N = 1 y la tanda `video-inmobiliario`. Los conteos literales de
las pruebas suben en 1 (26 → 27 servicios, etc.) y `seo-congelado` debe dar exactamente 1 error «URL nueva».

## Acceptance Criteria
1. La URL nueva responde 200, está en el sitemap y en `llms.txt`; `check-links` en 0.
2. Title ≤ 60, description ≤ 155, palabra principal en title y H1.
3. Toda cifra `$N` del `<main>` es un `monto` de `precios.json` (planes y extra), y las `minPrice` del schema también.
4. Las pestañas funcionan con teclado y sin JS; `qa-a11y` en 0.
5. Primera pantalla a 1440×900 y 390×844 con H1, precio y botón visibles (`qa-lcp`); cada `<video>` ≤ 900 px de alto.
6. Cada `.mp4` ≤ 2 MB (o el tope que el dueño apruebe), `preload="none"`, póster, sin autoplay; el de voz no va `muted` y tiene su guion en `<details>`.
7. Créditos y gasto de la tanda completos; la tanda ≤ US$ 10.
8. `npm run verify` en verde; `seo-congelado` con 1 URL nueva y nada más.
9. Ninguna página existente cambia fuera de menú, pie y los enlaces declarados en #5.

## Out of Scope
- Usar el demo de Luxor500 en la web (sin permiso del cliente).
- Tours 360 interactivos, renders desde planos (solo animamos renders o fotos que el cliente ya tiene), drones.
- La página de los taludes verdes (otro cliente de Ilitch).

## Puerta del dueño (antes de construir)
- G1: slug y palabra principal tras #0.
- G2: tope de peso del video con voz (2 MB a 720p o 3 MB).
- G3: permiso para descargar Roboto TTF (Apache 2.0) para los subtítulos.
- G4: tope de la tanda (US$ 10 propuesto) y registrar los US$ 4,21 ya gastados para la web (los US$ 2,10 de Luxor500 se anotan aparte, sin tanda).
- G5: plazo de entrega por plan (propuesta: Unidad 5 días hábiles, Proyecto 10, Preventa 15, desde que recibimos los renders).

<!-- autoplan-accepted:ceo -->
- E1: El extra de narración y subtítulos se cobra por video entregado y la página lo dice por plan: Unidad +$150 (1 video), Proyecto +$600 (4 videos), Preventa +$150 (1 video). Cada cifra del extra en el `<main>` sale de `monto` de `narracion-subtitulos` multiplicado por la cantidad de videos del plan, calculada en el componente y no escrita a mano. Prueba sobre `dist/`: las cifras del extra en la página son exactamente 150, 600 y 150 y cambian si cambia el `monto`. Con esto, el criterio de aceptación 3 se lee así: toda cifra `$N` del `<main>` es un `monto` de `precios.json` o el `monto` de `narracion-subtitulos` por la cantidad de videos de un plan, y la prueba de cifras acepta solo esos dos casos.
- E2: La versión vertical 9:16 de cada video va incluida en los 3 planes y está escrita en el bloque «Qué incluye» y en la línea de la pestaña. Prueba sobre `dist/`: el texto «versión vertical» aparece en «Qué incluye».
- E3: La página nueva se suma a la entrada «Medir las páginas de IA creativa» de TODOS.md con su propio día P y las lecturas P, P+28 y P+56 (indexación, impresiones de la palabra principal de #0 y una pregunta GEO de precio de video inmobiliario). Verificación: la entrada de TODOS.md nombra el slug y las 3 fechas.
- T1 (provisional, gusto): La página explica en una frase por qué la narración es un extra aquí y está incluida en Videos publicitarios (otro producto: recorridos de 20 a 60 s para promotoras frente a reels de 15 a 30 s). Verificación: la frase está en la FAQ «¿Cuánto cuesta la narración?».
- SR1 (revisión de spec, auto P1): Cuántos videos entrega cada plan. Unidad: 1 video de 20 a 30 s. Proyecto: 4 videos de 20 a 30 s, uno por tipo. Preventa: 1 video de unos 60 s con los 6 tipos, amenidades y fachada. La narración se cobra por bloque de hasta 30 s de video: Unidad +$150, Proyecto +$600, Preventa +$300. La cantidad de bloques por plan vive en los datos del bloque `planes-tabs` (`bloquesNarracion`: 1, 4 y 2) y la página la multiplica por el `monto` de `narracion-subtitulos`. Reemplaza las cifras de E1 (Preventa pasa de +$150 a +$300). Prueba en `scripts/marketing-ia.test.mjs` sobre `dist/`: las cifras del extra son 150, 600 y 300 y un fixture con otro `monto` cambia las tres.
- SR2 (auto P5): Se quita la opción de 3 MB de G2 y de AC6. Si el video con voz no cabe en 2 MB a 720p, se baja a 960×540 con la escalera de CRF de D52; la prueba existente de 2 MB (`marketing-ia.test.mjs`) no cambia.
- SR3 (auto P1): Entradas completas en `precios.json` `confirmados`, todas con `fuente` exactamente `src/lib/pages/marketing.ts`: `video-inmobiliario-unidad` {nombre «Video inmobiliario con IA, una unidad», monto 550, unidad «video»}; `video-inmobiliario-proyecto` {nombre «Video inmobiliario con IA, proyecto de 4 tipos», monto 1450, unidad «proyecto»}; `video-inmobiliario-preventa` {nombre «Video inmobiliario con IA, preventa completa», monto 2400, unidad «proyecto»}; `narracion-subtitulos` {nombre «Narración y subtítulos para video inmobiliario», monto 150, unidad «bloque de hasta 30 s»}.
- SR4 (auto P1): Schema: `receipt` da la oferta `offers` con `minPrice` 550 (Unidad); `service.catalogo` lista solo las 3 claves de plan, así que `hasOfferCatalog` tiene 3 ofertas; el extra no es una oferta. En `ia-creativa.json` la página lleva `precio: "video-inmobiliario-unidad"`, `serviceKey: "definir"` (intencional, igual que Videos: no hay clave de formulario nueva) y `medicionId: "video-inmobiliario-lcp"`.
- SR5 (auto P5): AC5: el precio visible en la primera pantalla es el «desde $550» del `receipt`, no la pestaña activa.
- SR6 (auto P2): #5 suma TODOS.md (entrada de medición de E3).
- SR7 (auto P1): La foto de portada de #2b cuesta 1 imagen de `nano-banana-pro` (US$ 0,15) y entra en la tanda; criterio: `HERO_SLUGS` contiene el slug y la foto tiene su fila de créditos.
- SR8 (auto P1): Versión vertical: antes de publicarla se revisa una hoja de contactos del recorte central 9:16 de cada clip; el clip cuyo recorte pierde el ambiente se regenera en 9:16 con Kling a partir de su render (US$ 0,70 cada uno, máximo 4). Cuenta de la tanda en el peor caso: 4,21 + 0,15 + 2,80 = US$ 7,16, dentro del tope de 10.
- SR9: G5 (plazos) sigue en la puerta del dueño; el `plazo` del `receipt` y el paso 4 de `steps` usan exactamente la respuesta de G5, con prueba de igualdad sobre `dist/`.
- SR10 (revisión de spec 2; reemplaza las cifras de SR1 y la `unidad` del extra en SR3): Manda la decisión del dueño D55.5, «$150 por video». Por defecto el extra es Unidad +$150, Proyecto +$600 y Preventa +$150, con `bloquesNarracion` igual a los videos del plan (1, 4 y 1) y `unidad` «video» en `narracion-subtitulos`. El cobro por bloque de 30 s (Preventa +$300, `bloquesNarracion` 2) es la decisión de gusto T2 y solo entra si el dueño la aprueba en la puerta. El video de Preventa dura como máximo 60 s.
- SR11: `scripts/marketing-ia.test.mjs` se adapta a páginas con más de un plan sin cambiar lo que comprueba en Videos. Para las páginas con bloque `planes-tabs`: (a) `service.catalogo` es igual a las claves de sus planes (hoy espera `[ia.precio]`); (b) toda cifra `$N` del `<main>` es el `monto` de uno de sus planes o `monto` de `narracion-subtitulos` × `bloquesNarracion` de un plan (hoy exige un solo `monto`); (c) `offers.minPrice` es el `monto` de `ia.precio` y `hasOfferCatalog` trae exactamente los `monto` de sus planes (hoy espera `[monto, monto]`). La prueba de `montos` suma las 4 claves nuevas. La cuenta del extra vive en una función pura de `src/lib/` (por ejemplo `extraNarracion(monto, bloques)`) con su prueba de unidad, que usa otro `monto` como fixture; la prueba sobre `dist/` comprueba las cifras reales. Se declara según la regla 3 de D52.
- SR12: El tipo de #4 queda `planes: { clave; nombre; detalle; videos: number; bloquesNarracion: number }[]` (en `src/lib/types.ts`, cerca de la línea 18). La línea de cada pestaña nombra los videos y dice «versión vertical incluida» (E2).
- SR13: SR2 cierra G2: el texto de 3 MB de #2 y el «o el tope que el dueño apruebe» de AC6 quedan sin efecto; el tope es 2 MB.
- SR14: T1 y T2 son decisiones de gusto y van a la puerta final del dueño junto con G1, G3, G4 y G5.
- SR15 (revisión de spec 3): `scripts/gasto-ia.mjs` deja de tener la tanda fija (`TANDA = 'marketing-ia'` en la línea 22) y recibe `--tanda <id>`, con `marketing-ia` por defecto para no cambiar su uso actual. `audit/imagenes-ia-2026-10.json` suma `"tandas"."video-inmobiliario": { "tope": 10 }` y su `tope` pasa de 25 a 35, con la `_nota` explicada; la prueba de topes de `marketing-ia.test.mjs` cubre las dos tandas. Se declara según la regla 3.
- SR16: Los US$ 4,21 ya cobrados se registran después del cobro, como filas `confirmado` con el `request_id` real de fal (están en esta sesión y en el historial de fal: 4 de mockups, 4 de renders, 4 de clips, 4 de voz y 1 de música). Los US$ 2,10 de Luxor500 van como filas sin tanda con `uso` «demo cliente Ilitch (Luxor500), no web».
- SR17: Antes de la puerta, los activos del ejemplo se copian del scratchpad a `.gstack/tmp/video-inmobiliario/` (ignorada por git, persiste entre sesiones): renders, clips, voz, música y el montaje.
- SR18: Si #0 termina en `VINM-DEMANDA`, este plan se detiene ahí y la opción B se planifica aparte; ningún criterio de este plan aplica a la opción B.
- SR19: `fuente` de las 4 claves nuevas es exactamente `src/lib/pages/marketing.ts` (reemplaza el «y D55» de #1). La duración de Preventa se escribe igual en todas partes: «hasta 60 s».
- SR20: La página no escribe cifras de otras páginas: T1 y `compare` nombran Videos publicitarios con enlace y sin su precio, así SR11(b) sigue estricta.
- SR21: E3 usa la pregunta GEO «¿Cuánto cuesta un video inmobiliario con IA en Panamá?». SR8: el agente arma la hoja de contactos del recorte 9:16 y el dueño decide qué clips se regeneran (regla: se regenera el clip cuyo recorte deja fuera el elemento principal del ambiente: el sofá, la isla, la cama o la baranda).
- CV1 (voz CEO, auto P1): «Qué incluye» fija 2 rondas de cambios por video; cada ronda extra o un cambio de render después de aprobado el guion se cotiza aparte. Prueba sobre `dist/`: «2 rondas» aparece en «Qué incluye».
- CV2 (auto P1): Requisitos de entrada en la FAQ «¿Qué renders sirven?»: renders o fotos de al menos 1920 px de ancho, uno por ambiente, sin texto ni marcas de agua; no sirven planos 2D ni bocetos. Verificación: la FAQ existe con esas condiciones.
- CV3 (auto P1): Cada video entregado lleva al final la nota «Imágenes ilustrativas, sujetas a cambios» y la página lo dice en «Qué incluye». La FAQ de derechos dice que quien entrega los renders declara por escrito tener derecho de uso y modificación, y esa cláusula va en la cotización. Prueba sobre `dist/`: las dos frases existen.
- CV4 (auto P1): Antes de publicar se prueba la calidad con 3 renders de otro tipo (una fachada exterior, un área social con agua y un render de baja calidad), generados con `nano-banana-pro` y animados con Kling (US$ 0,15 + 0,70 cada uno, US$ 2,55 en total). Tanda en el peor caso: 7,16 + 2,55 = US$ 9,71, dentro del tope de 10. Si alguno se deforma, la FAQ lo dice como límite («fachadas con agua pueden necesitar varias tomas»). Los clips de prueba no se publican.
- CV5 (auto P2; extiende E3): En P+56, regla de decisión escrita en TODOS.md: con 0 consultas desde la página y menos de 50 impresiones de su palabra principal, el dueño decide entre pasarla a bloque dentro de Videos (opción B) o dejarla como destino de venta directa sin más inversión SEO. Además se cuentan las reuniones que lleguen por contacto directo.
- CV6 (sección 2, auto P1): Si falta una clave de `precios.json` o un `monto` no es numérico, el build falla con un mensaje que nombra la clave; nunca se pinta «$undefined». Prueba de unidad con una clave inexistente.
- CV7 (sección 4, auto P5): Al reproducir uno de los dos videos del collage, el otro se pausa (un listener de `play`, menos de 20 líneas, en el mismo módulo de las pestañas). Verificación manual en el preview.
- CV8 (sección 5, auto P4): Los dos videos del collage usan el tipo `video` de `Ejemplo.astro` (ficha, «Descargar MP4», `aria-describedby`, guion en `<details>`), no un `<video>` escrito a mano. Prueba sobre `dist/`: cada `<video>` del bloque tiene su enlace «Descargar MP4».
<!-- /autoplan-accepted:ceo -->

<!-- autoplan-accepted:design -->
- DV1 (pase 1): `planes-tabs` lleva un H2 de sección normal, «Planes y ejemplo», sin ceja ni título de tamaño de portada. La foto D45 sigue siendo el ancla visual de la portada y el collage es la segunda pieza, con alto máximo de 520 px en escritorio. Prueba sobre `dist/`: el bloque tiene un solo H2 y ningún elemento con la clase del H1 de portada.
- DV2 (pase 3, ambas voces): Cada panel de pestaña dice, en este orden: «Para quién es» (Unidad: «un apartamento o una casa»; Proyecto: «lanzamientos con 2 a 4 tipos»; Preventa: «la preventa completa de una torre»), la línea de entregables (videos, duración, versión vertical incluida), el plazo de G5, el precio base y una segunda línea en `text-muted` con el total con narración y subtítulos (por ejemplo «Con narración y subtítulos: $2,050»). La etiqueta de cada pestaña muestra nombre y precio. Proyecto va activo por defecto con el chip «Para promotoras»; el orden en el HTML es Unidad, Proyecto, Preventa. El total con narración cuenta como cifra válida para SR11(b): `monto` del plan más `monto` del extra × `bloquesNarracion`. Prueba sobre `dist/`: los 3 paneles tienen «Para quién es», plazo y total.
- DV3 (pase 3, ambas voces): Bajo el collage va una sola fila de pie: «Ejemplo · proyecto ficticio hecho con IA», el guion en un `<details>` (los dos videos son el mismo montaje) y dos enlaces «Descargar MP4 horizontal» y «Descargar MP4 vertical». Prueba sobre `dist/`: el pie está dentro del bloque y junto al collage.
- DV4 (pase 3, ambas voces): El bloque `blank` de prueba se reemplaza por una tira de dos imágenes: un render fijo y el mismo cuadro tomado del clip animado, con las etiquetas «Render» y «Video», y una frase: «La IA mueve la cámara; no agrega muebles ni ambientes». El texto «Todavía no hay casos de clientes publicados» se mantiene debajo. Las dos imágenes salen de los activos ya generados (sin gasto). Prueba sobre `dist/`: las dos imágenes existen, pesan ≤ 80 KB y tienen `alt`.
- DV5 (pase 2): Estados del bloque según la tabla del pase 2: sin JS los 3 planes se ven apilados con un H3 por plan y un filete entre ellos; si el JS falla, el mismo HTML; el póster de cada video es el mejor cuadro (la sala al atardecer), no el cuadro 0; dentro de `<video>` va un texto de respaldo con el enlace de descarga; el copy de T2 y G5 ocupa su lugar con texto provisional hasta la puerta. Prueba sobre `dist/` con JS desactivado: los 3 planes son visibles.
- DV6 (pase 3, ambas voces): Cada panel tiene un botón «Cotizar este plan» que lleva al formulario con `?servicio=definir#form` y un enlace de WhatsApp cuyo mensaje nombra el plan («Hola, quiero cotizar el plan Proyecto de video inmobiliario»), sin cifra (D23). No se agrega un campo nuevo al formulario. Prueba sobre `dist/`: 3 botones y 3 enlaces de WhatsApp con el nombre de su plan.
- DV7 (pase 4): El checklist tiene exactamente estos 4 ítems: «Horizontal y vertical», «Música con licencia», «Revisión humana», «2 rondas de cambios», cada uno repetido en «Qué incluye». No se ofrece el «rótulo con tu marca» del mockup. Prueba sobre `dist/`: 4 ítems y cada uno aparece en «Qué incluye».
- DV8 (pase 5): Tokens del bloque, sin colores nuevos: banda en `surface-alt`; panel y pestaña activa en `surface-raised` con barra superior de 3 px en `accent-on-light`; pestañas inactivas en `surface-alt` con texto `text-muted` y filete `border`; marcos del collage blancos con radio 20 y sombra desplazada de 10 px sin desenfoque en `accent`; check SVG en `accent-on-light`. Verificación: `selectores-hoja.mjs` no muestra utilidades nuevas fuera de la hoja del bloque y la hoja solo usa variables de DESIGN.md.
- DV9 (pase 6, ambas voces): Móvil (≤ 767 px), una sola columna en este orden: intro, checklist, collage, pestañas, panel. El 16:9 va a ancho completo; el 9:16 va centrado al 60 % del ancho con alto máximo de 480 px, y la sombra desplazada cabe dentro del margen de 16 px. Las pestañas son 3 columnas iguales con el nombre arriba y el precio abajo, de 15 px, con objetivo táctil de 44 px como mínimo. Sin scroll horizontal a 390 px. Desde 768 px, dos columnas como v4. `qa-responsive.mjs` suma la ruta nueva y comprueba que no hay scroll horizontal a 390 px.
- DV10 (pase 6, ambas voces): Contrato de las pestañas: `role="tablist"` con `aria-label="Planes"`; cada pestaña `role="tab"` con `id`, `aria-controls` y `aria-selected`; tabindex rotativo (solo la activa en 0); activación automática con flechas izquierda y derecha, Inicio y Fin; cada panel `role="tabpanel"` con `aria-labelledby` y `tabindex="0"`; anillo de foco visible con el token de foco del sitio; cambiar de pestaña no toca los videos. Al llegar con `#plan-preventa` (o el `id` de otro panel) en la URL, esa pestaña queda activa. Los dos videos tienen nombres distintos para el lector de pantalla («Recorrido de ejemplo, versión horizontal» y «versión vertical»). No se agrega `<track>`: los subtítulos van quemados y el guion está en `<details>`. Prueba: `qa-a11y` en 0 y una prueba de teclado en el preview.
- DV11 (pase 1, crítico de Claude): Reemplaza a CV8 en cómo se pintan los videos. Dentro de cada marco del collage va solo el núcleo del video de `Ejemplo.astro` (`<video>`, póster, `aria-describedby` hacia el pie común), extraído a un componente compartido que también usa `Ejemplo.astro`; la ficha, el guion y las descargas van una sola vez en el pie de DV3. Prueba sobre `dist/`: los 2 `<video>` del bloque apuntan con `aria-describedby` al mismo pie y existen los 2 enlaces de descarga.
<!-- /autoplan-accepted:design -->

<!-- autoplan-accepted:eng -->
- EV1 (crítico, ambas voces): `videosDe` de `scripts/marketing-ia.test.mjs` lee también `planes-tabs.media.horizontal` y `.vertical`, así los 2 videos nuevos pasan las mismas pruebas de Videos (≤ 2 MB, avc1, perfil, audio con voz, duración de la ficha). Prueba nueva: la página nueva da exactamente 2 videos.
- EV2 (ambas voces): El orden de bloques se guarda por página en `ia-creativa.json` (`orden`), y la prueba compara cada página con el suyo; Videos conserva su orden actual. Orden de la página nueva: `answer`, `receipt`, `planes-tabs`, `ejemplos` (la tira de DV4, con 2 ejemplos de tipo `foto` con `etiqueta` «Render» y «Video»), `blank` (el texto de «sin casos publicados»), `includes`, `steps`, `tabla`, `compare`, `faq`, `form`, `related`.
- EV3 (Codex, verificado): El botón «Cotizar este plan» de DV6 apunta a `?servicio=definir&plan=<clave>#formulario` (el ancla real de `ContactForm.astro:17`), no a `#form`.
- EV4 (Codex, auto P1): `ContactForm.astro` lee `?plan=` de la URL (igual que ya lee `?servicio=`) y, si es una de las 3 claves de plan, empieza el mensaje con «Plan de interés: <nombre del plan>». Sin el parámetro nada cambia. Sin campo nuevo ni cambio en n8n. Pruebas sobre `dist/`: con y sin `?plan=` en un navegador de prueba.
- EV5 (Codex): Tipos explícitos en `src/lib/types.ts`: el bloque `planes-tabs` con `media: { horizontal: VideoNucleo; vertical: VideoNucleo; guion: string; pie: string }`, donde `VideoNucleo` es `{ src; poster: { src; width; height }; duracion; bytes; voz?: true; nombre }`; los planes como en SR12. El guion vive una sola vez en `media.guion` y la prueba de guion lo lee de ahí (no se duplica en el HTML).
- EV6 (ambas voces): El componente compartido del núcleo de video se llama `VideoNucleo.astro` y lo usan `Ejemplo.astro` y `planes-tabs`. `[...slug].astro` pone `ejemplo-media.css` en línea también cuando la página tiene `planes-tabs`. El `<main>` de `dist/marketing/videos-publicitarios-panama/` se compara antes y después con `comparar-main.mjs`: solo puede cambiar el `related` declarado en #5.
- EV7 (Claude, verificado): `gasto-ia.mjs` acepta `--tanda <id>` como primer argumento opcional (`node scripts/gasto-ia.mjs --tanda video-inmobiliario reservar …`); sin la bandera usa `marketing-ia` como hoy. Si la tanda pedida no existe en el JSON, sale con `MKIA-TANDA` y no la crea: se quita el `??= { tope: 15 }` de la línea 114 y el `?? 15` de la 174 para tandas que no sean `marketing-ia`. Pruebas: tanda desconocida → código 1 con MKIA-TANDA; uso sin bandera, igual que antes.
- EV8 (Claude): El vertical se recorta desde los clips maestros de Kling y desde un montaje sin subtítulos, y los subtítulos se queman después. Si un clip se regenera en 9:16, primero se recorta el render a 9:16 (sin relleno) y esa imagen es la entrada. Fallback de peso vertical: 540×960 con la escalera de CRF (reemplaza el 960×540 de SR2 para el vertical). Prueba: dimensiones y aspecto de cada MP4 con `mdhd`/`tkhd` (16:9 y 9:16).
- EV9 (Claude): Cifras validadas panel por panel: precio base = `monto` del plan del panel; total = `monto` + `monto` de `narracion-subtitulos` × `bloquesNarracion` del mismo plan. Una sola función `formatoPrecio` (con `toLocaleString('en-US')`, como `site.ts`) para el componente y la prueba. Ninguna otra cifra de precio escrita a mano en etiquetas, FAQ, tabla, CTA ni comparación. `validar-marcador` sigue dando `servicio-con-precio`; los mínimos del schema pasan a [550, 550, 1450, 2400].
- EV10 (Claude): Mientras G5 y T2 no tengan respuesta, su texto provisional lleva los centinelas `PENDIENTE-G5` y `PENDIENTE-T2`, y una prueba sobre `dist/` falla si aparece alguno. Así no se publica texto provisional.
- EV11 (ambas voces): Mejora progresiva de las pestañas: el servidor manda 3 secciones con H3, sin roles ARIA de pestañas; el JS agrega `role`, `aria-*`, `tabindex` y `hidden`. Un script en línea del `<head>` pone la clase `js` en `<html>` y el CSS oculta los paneles inactivos antes de pintar, sin salto de diseño. El hash se lee con `getElementById(location.hash.slice(1))`, nunca con `querySelector(location.hash)`. `qa-lcp` mide CLS ≤ 0,05 en la página nueva.
- EV12 (Codex): Title de 60 caracteres o menos, por ejemplo «Video Inmobiliario con IA en Panamá | Recorridos 360 y Reels» se mide antes de fijarlo tras #0. AC5 se lee como alto renderizado: a 1440×900 ningún `<video>` mide más de 900 px de alto en pantalla. Demanda de #0 con umbral escrito: página propia si el Planificador muestra 10 o más búsquedas al mes en Panamá para la palabra principal, o si hay 3 o más resultados de agencias o servicios panameños en la primera página de Google (anotados con URL y fecha en `audit/`).
- EV13 (Claude): Antes de construir se escribe una versión final única de la spec (con E, SR, CV, DV y EV ya fundidos y las respuestas de la puerta aplicadas); las enmiendas quedan como historial.
- EV14 (Codex): Antes de publicar «Música con licencia», D55 anota el proveedor y los términos de uso comercial de cada herramienta usada (ElevenLabs Music y TTS vía fal, Kling vía fal, nano-banana-pro vía fal) con la fecha de lectura. Si alguno no permite uso comercial, el ítem del checklist dice qué se puede usar.
- EV15 (Claude): Los activos del ejemplo se respaldan fuera del repo, en `~/.gstack/projects/josimarguilbaud-elementoweb/assets/video-inmobiliario-20261021/` (hecho el 21-oct-2026: renders, clips, audio, montaje y el demo de Luxor500). SR16 usa costos reales del historial de fal; si no se pueden leer, la fila va con `estado: "estimado"` y no `confirmado`. La narración son 4 pedidos de TTS, uno por frase: 4 filas de unos US$ 0,003 cada una.
<!-- /autoplan-accepted:eng -->
## Review record

### Fase 1, CEO: Paso 0 (run main-20261021-151751, modo SELECTIVE EXPANSION por regla de /autoplan)

**Auditoría previa.** `main` limpio en `606afcc` (D54). Un stash viejo (`orisa-home-migration`, 28-sep) sin relación. D52 publicó Videos publicitarios el 20-oct (`5d187f0`) con el mismo molde que este plan; D53 se revirtió una vez por Lighthouse 80 (`ce1a4b0`), así que el JS de pestañas es zona de riesgo de rendimiento. TODOS.md ya tiene la medición de IA creativa (`TODOS.md:309`), el artículo por página (`:351`), el caso real de Videos (`:363`), el paquete recurrente (`:373`) y las 3 piezas para prospectos (`:411`); este plan toca o extiende las cinco. Decisión vinculante: la regla de demanda de D52 (U1b, «página propia solo con búsquedas medidas»), que el plan respeta con #0.

**Calibración de gusto.** Buenos modelos: el bloque de Videos (`marketing.ts:1315-1462`, orden de bloques y textos honestos sobre la IA) y la vitrina de D54 (escena estática con mejora progresiva). A evitar: el primer D53 (JS de scroll que bajó Lighthouse a 80 y se revirtió).

**Panorama (búsqueda del 21-oct-2026).** [Capa 1] En Panamá el video inmobiliario lo hacen productoras generales (lista de Clutch) o fotógrafos con dron y 360. [Capa 2] Las búsquedas devuelven sobre todo herramientas globales de IA (Atlabs, PixVerse, FlexClip, ScreenApp) y no encontraron una agencia panameña dedicada a animar renders de preventa. [Capa 3] Eso puede ser un hueco (nadie lo ofrece con precio publicado) o falta de demanda en Google: el comprador real, la promotora en preventa, compra por relación y por recomendación, no por búsqueda. Eureka posible: la página sirve primero como material de venta para Nicole y para Ilitch, y el SEO es secundario. Esto no cambia el plan (el dueño eligió página propia), pero sí cómo se mide su éxito.

**0A. Premisas.**

| Premisa | Afirmación | Recibo | Veredicto |
|---|---|---|---|
| P1 | Hay demanda de búsqueda en Panamá para «video inmobiliario» | ninguno; la búsqueda del 21-oct no halló agencias locales dedicadas | unverified: #0 la mide antes de fijar el slug |
| P2 | El ejemplo ficticio basta como prueba | `marketing.ts:1381` (Videos usa el mismo `blank`) | aceptada (P6): igual que Videos |
| P3 | Kling no deforma la arquitectura | contacto de 16 cuadros del 21-oct (Luxor500 y ficticio) | aceptada [measured: 7 clips revisados] |
| P4 | Los precios están en el mercado | fuentes citadas en Context | aceptada como estimado; corregido el texto de «punto medio» |
| P5 | El cliente tiene derecho sobre sus renders | contenido obligatorio de #3 | aceptada; la página lo pide por escrito |
| P6 | El gasto ya hecho es US$ 6,9 | rederivado: US$ 4,21 web + 2,10 Luxor500 | finding corregido en Current State |

unverified=1.

**0B. Código que ya existe.** Página y bloques: `marketingPages` y el molde de Videos (`marketing.ts:1318-1462`). Videos de ejemplo: tipo `video` de `Ejemplo.astro` y `src/lib/ejemplos.ts` (`fichaVideo`). Gasto: `scripts/gasto-ia.mjs` y `audit/imagenes-ia-2026-10.json`. Portada: `scripts/componer-pantallas.mjs` y `scripts/portadas-fotos.mjs`. Conjunto de páginas: `src/data/ia-creativa.json` y `scripts/marketing-ia.test.mjs`. Precios: `src/data/precios.json` y `schema.ts` (`offers`, `hasOfferCatalog`). Lo único nuevo es el bloque `planes-tabs`; el plan explica por qué no reusa `plans` (la variante 4 que eligió el dueño pinta pestañas y un collage, no tarjetas).

**0C. Estado ideal.**
```
  HOY                              ESTE PLAN                          IDEAL A 12 MESES
  Videos publicitarios (4 reels)   + página de video inmobiliario    2-3 casos reales de promotoras,
  sin oferta para promotoras  ---> con precios, ejemplo ficticio ---> trabajo recurrente por proyecto,
  demo Luxor500 sin publicar       y material para Nicole/Ilitch     página indexada y citada por IA
```

**0D.** No hizo falta elegir enfoque: el dueño ya fijó página propia, variante 4, precios y extra (D55.1-D55.5).

**0E.** Modo SELECTIVE EXPANSION (regla de /autoplan). Archivos estimados: unos 18 (página, tipo, componente, hoja, 4 JSON de datos, 5 pruebas con conteos, menú, pie, servicios, hub, llms.txt, KEYWORDS, DECISIONES) [estimado].

**0F/0G. Candidatos de expansión (auto-decididos con los 6 principios).**

| # | Propuesta | Esfuerzo | Decisión | Razón |
|---|---|---|---|---|
| E1 | Decir el extra por plan: Proyecto con 4 videos = +$600 de narración; la página no puede dejarlo ambiguo | S | ACEPTADA | Radio de impacto, < 1 día; sin eso la cifra «$150 por video» engaña en Proyecto (P1) |
| E2 | Versión vertical 9:16 incluida en todos los planes, escrita en «Qué incluye» | S | ACEPTADA | Ya está en la variante 4 elegida; solo se vuelve explícita (P1) |
| E3 | Sumar la página nueva a la entrada de medición de IA creativa (P, P+28, P+56) | S | ACEPTADA | Directiva 5: observabilidad es parte del lanzamiento (P2) |
| E4 | Caso real Luxor500 con permiso escrito del cliente de Ilitch | M | DIFERIDA a TODOS.md | Depende de un tercero (P3) |
| E5 | Piezas para que Nicole e Ilitch prospecten promotoras con la página como destino | M | DIFERIDA (extiende `TODOS.md:411`) | Fuera del radio; no duplicar el TODO existente (P4) |
| E6 | Artículo «cuánto cuesta un video de preventa en Panamá» | M | DIFERIDA (extiende `TODOS.md:351`) | Fuera del radio (P3) |
| E7 | Narración en inglés como extra, para compradores extranjeros de preventa | S | DIFERIDA a TODOS.md | Precio no investigado; decisión de gusto del dueño (P3) |

**Decisiones de gusto (para la puerta final).** T1: la página de Videos publicitarios incluye voz y subtítulos dentro de $500 por 4 videos ($125 c/u), y esta cobra la narración aparte a $150 por video. Es coherente si se explica (otro producto, otra duración), pero un visitante que ve las dos puede leer la diferencia como incoherencia. Se mantiene lo que eligió el dueño (D55.5) y se pide a la página una frase que lo explique.


### Voces CEO (paso 0.5)

**Voz de Claude (subagente independiente, completada, INPUT ceo ca0134d7…):** 10 hallazgos, 4 altos. (1) Es una venta B2B a pocas decenas de promotoras, no un problema de SEO en un dominio de julio de 2026 sin backlinks; propone un canal directo con muestras. (2) El ejemplo ficticio es la prueba más débil; pedir a Ilitch permiso para Luxor500. (3) La escalera de precios confunde: Proyecto sale a $362 por video frente a $550 de Unidad, Preventa es 1 solo video por $2,400 y el extra de narración ya cambió 3 veces. (4) El riesgo es la sustitución (el renderista o la agencia de la promotora), así que el valor debe ser llave en mano, fidelidad y rondas definidas. (5) La calidad descansa en una sola prueba. (6) Riesgo de publicidad de preventa: nota «imagen ilustrativa» y cláusula de derechos. (7) #0 mide competencia, no demanda. (8) La medición no tiene regla de cierre. (9) Alternativas sin analizar: web de preventa con video incluido, canal de Ilitch, landing de Ads. (10) El rigor del proceso es desproporcionado frente a la demanda sin validar.

**Voz de Codex (`gpt-5.6-terra`): unavailable.** Respondió con 10 hallazgos, pero el validador de gstack la rechazó (`missing_markers`: su cierre dice «porque» y no «because»). Por regla no cuenta como cobertura ni como acuerdo. Para el registro: coincidió en la canibalización con Videos publicitarios ($500 por 4 videos con voz incluida), en que los paquetes descuentan donde más crece el riesgo, en que #0 no valida la compra, en vender el resultado y no la tecnología, en el ejemplo ficticio, en las rondas y requisitos sin definir, y recomendó un piloto «kit de preventa» con una promotora real.

```
CEO DUAL VOICES — CONSENSUS TABLE:
  Dimension                             Claude  Codex  Consensus
  1. Premises valid?                    no      —      N/A (Codex unavailable)
  2. Right problem to solve?            reframe —      N/A
  3. Scope calibration correct?         no      —      N/A
  4. Alternatives sufficiently explored? no     —      N/A
  5. Competitive/market risks covered?  no      —      N/A
  6. 6-month trajectory sound?          riesgo  —      N/A
```

**Disposición de los hallazgos de las voces.**
- Aceptados como requisitos (radio de impacto, < 1 día): rondas (CV1), requisitos de entrada (CV2), nota ilustrativa y cláusula de derechos (CV3), prueba de calidad con 3 renders más (CV4) y regla de cierre de la medición (CV5).
- A la puerta del dueño (cambian decisiones suyas, así que no se auto-deciden):
  - **G6** permiso de Luxor500 por medio de Ilitch y confirmar que vender directo a promotoras no choca con su canal.
  - **T3** escalera de precios: la recomendación es que Preventa incluya, además del video de 60 s, un corte vertical de 15 s por tipo (6), y la narración ya incluida. Así el plan más caro da más piezas y el extra solo aplica a Unidad y Proyecto. La alternativa es dejar D55.2 y D55.5 tal cual.
  - **T4** canal directo de lanzamiento: Nicole envía una muestra hecha sobre los renders públicos de 3 preventas activas, con la página como destino (US$ 2,10 a 3 por muestra). Recomendación: sí, como tarea aparte de la página (extiende E5).
- Diferidos: landing de Ads para validar (TODOS.md), web de preventa con video incluido (TODOS.md, encaja con la prioridad «diseño web panamá»).
- Hallazgo 10 (rigor desproporcionado): si el dueño acepta T3, se borran SR11(b), `extraNarracion` y su fixture; si no, se quedan.


### Revisión CEO, secciones 1 a 11

**Alcance vigente.** Modo SELECTIVE EXPANSION (regla de /autoplan). Aceptado: E1-E3, SR1-SR21, CV1-CV8. Diferido: E4-E7, landing de Ads, web de preventa con video. A la puerta: G1, G3, G4, G5, G6, T1, T2, T3, T4. Rechazado: nada.

**1. Arquitectura.** Página estática de Astro, sin servidor nuevo. Componentes nuevos: el tipo y el componente `planes-tabs`, una hoja CSS por ruta, una función pura `extraNarracion` y el flag `--tanda` de `gasto-ia.mjs`. Acoplamiento nuevo: el componente lee `precios.json` por clave (ya lo hacen `receipt` y `schema.ts`), aceptable. Punto único de falla: `precios.json`; si falta una clave, el build tiene que romperse y no pintar «$undefined» (CV6). Reversión: `git revert` del commit y push; GitHub Actions redepliega en ~1 min. Los SR y la tabla de gasto los consume `marketing-ia.test.mjs`; no hay meta-reportes sin consumidor.

```
  precios.json ──► planes-tabs.astro ──► <main> (pestañas, extra calculado)
       │                 ▲
       ├──► schema.ts ───┼──► JSON-LD offers / hasOfferCatalog
       │                 │
  ia-creativa.json ──► marketing.ts (página) ──► menú, pie, servicios, hub, llms.txt
       │
       └──► marketing-ia.test.mjs (conjuntos, cifras, pesos, gasto)
  gasto-ia.mjs --tanda video-inmobiliario ──► audit/imagenes-ia-2026-10.json
```

Flujo de la cifra del extra: feliz (monto 150 × bloques → «+$600»); nulo (clave ausente → error de build que nombra la clave); vacío (`bloquesNarracion` 0 → no se pinta el extra); error (monto no numérico → error de build). Hallazgo: el plan no decía qué pasa con una clave ausente (WARNING → CV6).

**2. Mapa de errores y rescate.**

```
  CODEPATH                      | QUÉ PUEDE FALLAR                 | CLASE
  planes-tabs: precio por clave | clave ausente en precios.json    | Error de build (throw)
  extraNarracion(monto,bloques) | monto o bloques no numéricos     | TypeError explícito
  JS de pestañas                | JS no carga o falla              | (mejora progresiva)
  <video>                       | MP4 ausente o > 2 MB             | prueba de dist falla
  gasto-ia.mjs --tanda          | tanda desconocida o sobre el tope| código 1, MKIA-GASTO
  componer/portadas             | foto sin región magenta          | código 1 (ya existe)

  CLASE                | RESCATADO  | ACCIÓN                       | QUIÉN LO VE
  Error de build       | N (a prop.)| el build y el deploy fallan  | el agente, antes del push
  TypeError            | N (a prop.)| idem                         | idem
  JS de pestañas       | S          | los 3 planes se ven apilados | visitante: lista completa
  MP4 ausente          | S          | prueba roja, no se publica   | el agente
  Gasto sobre el tope  | S          | no se envía el trabajo a fal | el agente y el dueño
```

0 brechas críticas.

**3. Seguridad.** No hay entradas de usuario nuevas: el formulario es el `ContactForm` existente con clave `definir`. No hay secretos nuevos; fal se usa desde la sesión, no desde el sitio. El riesgo real es legal (derechos de los renders y publicidad de un inmueble sin construir), probabilidad media, impacto medio, mitigado por CV3. Sin hallazgos técnicos.

**4. Datos e interacción.** Pestañas: clic, flechas, Inicio/Fin, recarga (vuelve a Proyecto, sin estado guardado), sin JS (lista apilada), pantalla angosta (pestañas en columna, objetivo de 44 px). Video: si el usuario reproduce el 16:9 y el 9:16 a la vez, suenan dos audios (gap → CV7: uno pausa al otro). Lista de planes vacía: imposible por tipo, y la prueba de conjuntos lo cubre.

**5. Calidad de código.** Reusa el patrón de Videos y de la vitrina. Riesgo de duplicar el marco de video: el collage debe reusar el tipo `video` de `Ejemplo.astro` (CV8). Sin métodos con más de 5 ramas previstos.

**6. Pruebas.**

```
  NUEVO                 | TIPO   | FELIZ                      | FALLA                      | BORDE
  precios (4 claves)    | unidad | montos exactos             | clave ausente → rojo       | —
  extraNarracion        | unidad | 150×4=600                  | monto inválido → TypeError | bloques 0 → nada
  planes-tabs en dist   | dist   | 3 pestañas, Proyecto activo| sin JS → 3 planes visibles | 390 px
  cifras del <main>     | dist   | montos o extra × bloques   | cifra ajena → rojo (SR20)  | —
  schema                | dist   | offers 550, catálogo de 3  | catálogo ≠ planes → rojo   | —
  videos                | dist   | ≤ 2 MB, póster, guion      | > 2 MB → rojo              | dos a la vez (CV7, manual)
  gasto --tanda         | unidad | fila en la tanda nueva     | tope superado → código 1   | tanda desconocida
  includes (E2,CV1,CV3) | dist   | frases presentes           | ausentes → rojo            | —
```

La prueba de un viernes a las 2 a.m.: `npm run verify` más la de cifras sobre `dist/`. Ninguna depende del reloj salvo la fecha de `answer`, que ya usa `VALIDAR_HOY`.

**7. Rendimiento.** Riesgo conocido: D53 bajó Lighthouse a 80 con JS de scroll. Aquí el JS de pestañas es pequeño (< 1 KB), sin librerías, como módulo diferido; los videos con `preload="none"`. Se mantienen `presupuestos.mjs` sin subir máximos y Lighthouse móvil ≥ 90 como en D52. Sin hallazgos nuevos.

**8. Observabilidad.** Éxito medido por E3 y CV5 (indexación, impresiones, pregunta GEO, consultas con `origen` del formulario, reuniones por contacto directo) y LCP con `medir.mjs` (`video-inmobiliario-lcp`). Sin paneles nuevos.

**9. Despliegue.** Un push a `main` publica (sin staging): el push lleva permiso del dueño. Sin migraciones ni flags. Después de publicar: 200, video, cifras y fila de `medir.mjs`. Reversión: revert del commit.

**10. Trayectoria.** Reversibilidad 4/5: la URL queda congelada por `seo-congelado`. El bloque `planes-tabs` sirve después a otras páginas con planes. T3 decide si sobrevive la función del extra.

**11. Diseño y UX.** Jerarquía: H1 y «desde $550» arriba (SR5), respuesta citable, bloque de la variante 4. Estados:

```
  FUNCIÓN   | CARGANDO      | VACÍO | ERROR         | ÉXITO       | PARCIAL
  pestañas  | lista apilada | n/a   | lista apilada | 3 pestañas  | n/a
  videos    | póster        | n/a   | enlace MP4    | reproducción| uno a la vez (CV7)
```

El collage con sombra desplazada y el check SVG ya existen en DESIGN.md; las pestañas nuevas deben usar tokens existentes, sin segundo acento. Queda para la fase de diseño.

**Registro de modos de falla.**

```
  CODEPATH            | MODO DE FALLA          | RESCATADO  | PRUEBA | USUARIO VE           | LOG
  precio por clave    | clave ausente          | build roto | S      | nada (no se publica) | build
  extra calculado     | cifra mal multiplicada | S          | S      | nada (prueba roja)   | test
  JS de pestañas      | no carga               | S          | S      | lista apilada        | —
  videos              | > 2 MB o ausente       | S          | S      | nada (prueba roja)   | test
  dos videos a la vez | dos audios             | S (CV7)    | manual | uno se pausa         | —
  gasto               | tope superado          | S          | S      | nada (no se cobra)   | MKIA-GASTO
```

0 brechas críticas.

**No incluido.** Diferidos (a TODOS.md al cerrar la fase): E4 caso Luxor500 con permiso, E5 piezas de prospección, E6 artículo de precio, E7 narración en inglés, landing de Ads para validar demanda, web de preventa con video incluido. Rechazados: ninguno.

**Lo que ya existe.** Ver 0B; se reusa todo salvo `planes-tabs` y `extraNarracion`.

**Delta con el ideal.** Queda una página con precio y ejemplo; para el ideal a 12 meses faltan casos reales (E4), el canal directo (T4) y trabajo recurrente por proyecto.

REALITY: premise-table finding unverified=1 (demanda de búsqueda; #0 la mide) docs/specs/rediseno-elementoweb/SPEC-VIDEO-INMOBILIARIO.md:36
REALITY: already-done pass sin commits de video inmobiliario en main desde el 20-oct (último 606afcc) src/lib/pages/marketing.ts:1318
REALITY: surface-check pass los scripts citados existen; `--tanda` aún no existe y lo agrega SR15 scripts/gasto-ia.mjs:22
REALITY: binding-decisions pass la regla de demanda de D52 (U1b) se respeta en #0 y SR18 docs/specs/rediseno-elementoweb/DECISIONES.md:1
REALITY: numbers finding gasto rederivado 6,9 → 6,31 (4,21 web + 2,10 Luxor500) [estimated]; precios [estimated] docs/specs/rediseno-elementoweb/SPEC-VIDEO-INMOBILIARIO.md:32
REALITY: deferred-asks pass sin issue enlazado; el pedido del dueño está cubierto docs/specs/rediseno-elementoweb/SPEC-VIDEO-INMOBILIARIO.md:9
REALITY: pr-count pass sin ship-policy: un solo cambio, push a main con permiso CLAUDE.md:7

```
  +====================================================================+
  |            MEGA PLAN REVIEW — COMPLETION SUMMARY                   |
  +====================================================================+
  | Mode selected        | SELECTIVE EXPANSION                         |
  | System Audit         | molde D52 reutilizable; riesgo de JS (D53)  |
  | Step 0               | 7 propuestas: 3 aceptadas, 4 diferidas      |
  | Section 1  (Arch)    | 1 issue (clave ausente → CV6)               |
  | Section 2  (Errors)  | 6 error paths mapped, 0 GAPS                |
  | Section 3  (Security)| 0 issues técnicos, 1 riesgo legal (CV3)     |
  | Section 4  (Data/UX) | 6 edge cases mapped, 1 unhandled → CV7      |
  | Section 5  (Quality) | 1 issue (reusar Ejemplo.astro → CV8)        |
  | Section 6  (Tests)   | Diagram produced, 0 gaps                    |
  | Section 7  (Perf)    | 0 issues nuevos (riesgo D53 vigilado)       |
  | Section 8  (Observ)  | 0 gaps (E3 + CV5)                           |
  | Section 9  (Deploy)  | 1 riesgo (push publica; con permiso)        |
  | Section 10 (Future)  | Reversibility: 4/5, debt items: 1 (T3)      |
  | Section 11 (Design)  | 1 issue (pestañas con tokens existentes)    |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (6 items)                           |
  | What already exists  | written                                     |
  | Dream state delta    | written                                     |
  | Error/rescue registry| 6 rows, 0 CRITICAL GAPS                     |
  | Failure modes        | 6 total, 0 CRITICAL GAPS                    |
  | TODOS.md updates     | 6 items proposed                            |
  | Scope proposals      | 7 proposed, 3 accepted (SEL)                |
  | CEO plan             | written                                     |
  | Outside voice        | codex: unavailable (missing_markers)        |
  | Lake Score           | N/A                                         |
  | Diagrams produced    | 3 (arquitectura, errores, estados)          |
  | Stale diagrams found | 0                                           |
  | Unresolved decisions | 0 en la fase (9 a la puerta final)          |
  | Reality rows         | 7/7 rows, 1 unverified                      |
  +====================================================================+
```

<!-- autoplan-accepted:ceo -->
- E1: El extra de narración y subtítulos se cobra por video entregado y la página lo dice por plan: Unidad +$150 (1 video), Proyecto +$600 (4 videos), Preventa +$150 (1 video). Cada cifra del extra en el `<main>` sale de `monto` de `narracion-subtitulos` multiplicado por la cantidad de videos del plan, calculada en el componente y no escrita a mano. Prueba sobre `dist/`: las cifras del extra en la página son exactamente 150, 600 y 150 y cambian si cambia el `monto`. Con esto, el criterio de aceptación 3 se lee así: toda cifra `$N` del `<main>` es un `monto` de `precios.json` o el `monto` de `narracion-subtitulos` por la cantidad de videos de un plan, y la prueba de cifras acepta solo esos dos casos.
- E2: La versión vertical 9:16 de cada video va incluida en los 3 planes y está escrita en el bloque «Qué incluye» y en la línea de la pestaña. Prueba sobre `dist/`: el texto «versión vertical» aparece en «Qué incluye».
- E3: La página nueva se suma a la entrada «Medir las páginas de IA creativa» de TODOS.md con su propio día P y las lecturas P, P+28 y P+56 (indexación, impresiones de la palabra principal de #0 y una pregunta GEO de precio de video inmobiliario). Verificación: la entrada de TODOS.md nombra el slug y las 3 fechas.
- T1 (provisional, gusto): La página explica en una frase por qué la narración es un extra aquí y está incluida en Videos publicitarios (otro producto: recorridos de 20 a 60 s para promotoras frente a reels de 15 a 30 s). Verificación: la frase está en la FAQ «¿Cuánto cuesta la narración?».
- SR1 (revisión de spec, auto P1): Cuántos videos entrega cada plan. Unidad: 1 video de 20 a 30 s. Proyecto: 4 videos de 20 a 30 s, uno por tipo. Preventa: 1 video de unos 60 s con los 6 tipos, amenidades y fachada. La narración se cobra por bloque de hasta 30 s de video: Unidad +$150, Proyecto +$600, Preventa +$300. La cantidad de bloques por plan vive en los datos del bloque `planes-tabs` (`bloquesNarracion`: 1, 4 y 2) y la página la multiplica por el `monto` de `narracion-subtitulos`. Reemplaza las cifras de E1 (Preventa pasa de +$150 a +$300). Prueba en `scripts/marketing-ia.test.mjs` sobre `dist/`: las cifras del extra son 150, 600 y 300 y un fixture con otro `monto` cambia las tres.
- SR2 (auto P5): Se quita la opción de 3 MB de G2 y de AC6. Si el video con voz no cabe en 2 MB a 720p, se baja a 960×540 con la escalera de CRF de D52; la prueba existente de 2 MB (`marketing-ia.test.mjs`) no cambia.
- SR3 (auto P1): Entradas completas en `precios.json` `confirmados`, todas con `fuente` exactamente `src/lib/pages/marketing.ts`: `video-inmobiliario-unidad` {nombre «Video inmobiliario con IA, una unidad», monto 550, unidad «video»}; `video-inmobiliario-proyecto` {nombre «Video inmobiliario con IA, proyecto de 4 tipos», monto 1450, unidad «proyecto»}; `video-inmobiliario-preventa` {nombre «Video inmobiliario con IA, preventa completa», monto 2400, unidad «proyecto»}; `narracion-subtitulos` {nombre «Narración y subtítulos para video inmobiliario», monto 150, unidad «bloque de hasta 30 s»}.
- SR4 (auto P1): Schema: `receipt` da la oferta `offers` con `minPrice` 550 (Unidad); `service.catalogo` lista solo las 3 claves de plan, así que `hasOfferCatalog` tiene 3 ofertas; el extra no es una oferta. En `ia-creativa.json` la página lleva `precio: "video-inmobiliario-unidad"`, `serviceKey: "definir"` (intencional, igual que Videos: no hay clave de formulario nueva) y `medicionId: "video-inmobiliario-lcp"`.
- SR5 (auto P5): AC5: el precio visible en la primera pantalla es el «desde $550» del `receipt`, no la pestaña activa.
- SR6 (auto P2): #5 suma TODOS.md (entrada de medición de E3).
- SR7 (auto P1): La foto de portada de #2b cuesta 1 imagen de `nano-banana-pro` (US$ 0,15) y entra en la tanda; criterio: `HERO_SLUGS` contiene el slug y la foto tiene su fila de créditos.
- SR8 (auto P1): Versión vertical: antes de publicarla se revisa una hoja de contactos del recorte central 9:16 de cada clip; el clip cuyo recorte pierde el ambiente se regenera en 9:16 con Kling a partir de su render (US$ 0,70 cada uno, máximo 4). Cuenta de la tanda en el peor caso: 4,21 + 0,15 + 2,80 = US$ 7,16, dentro del tope de 10.
- SR9: G5 (plazos) sigue en la puerta del dueño; el `plazo` del `receipt` y el paso 4 de `steps` usan exactamente la respuesta de G5, con prueba de igualdad sobre `dist/`.
- SR10 (revisión de spec 2; reemplaza las cifras de SR1 y la `unidad` del extra en SR3): Manda la decisión del dueño D55.5, «$150 por video». Por defecto el extra es Unidad +$150, Proyecto +$600 y Preventa +$150, con `bloquesNarracion` igual a los videos del plan (1, 4 y 1) y `unidad` «video» en `narracion-subtitulos`. El cobro por bloque de 30 s (Preventa +$300, `bloquesNarracion` 2) es la decisión de gusto T2 y solo entra si el dueño la aprueba en la puerta. El video de Preventa dura como máximo 60 s.
- SR11: `scripts/marketing-ia.test.mjs` se adapta a páginas con más de un plan sin cambiar lo que comprueba en Videos. Para las páginas con bloque `planes-tabs`: (a) `service.catalogo` es igual a las claves de sus planes (hoy espera `[ia.precio]`); (b) toda cifra `$N` del `<main>` es el `monto` de uno de sus planes o `monto` de `narracion-subtitulos` × `bloquesNarracion` de un plan (hoy exige un solo `monto`); (c) `offers.minPrice` es el `monto` de `ia.precio` y `hasOfferCatalog` trae exactamente los `monto` de sus planes (hoy espera `[monto, monto]`). La prueba de `montos` suma las 4 claves nuevas. La cuenta del extra vive en una función pura de `src/lib/` (por ejemplo `extraNarracion(monto, bloques)`) con su prueba de unidad, que usa otro `monto` como fixture; la prueba sobre `dist/` comprueba las cifras reales. Se declara según la regla 3 de D52.
- SR12: El tipo de #4 queda `planes: { clave; nombre; detalle; videos: number; bloquesNarracion: number }[]` (en `src/lib/types.ts`, cerca de la línea 18). La línea de cada pestaña nombra los videos y dice «versión vertical incluida» (E2).
- SR13: SR2 cierra G2: el texto de 3 MB de #2 y el «o el tope que el dueño apruebe» de AC6 quedan sin efecto; el tope es 2 MB.
- SR14: T1 y T2 son decisiones de gusto y van a la puerta final del dueño junto con G1, G3, G4 y G5.
- SR15 (revisión de spec 3): `scripts/gasto-ia.mjs` deja de tener la tanda fija (`TANDA = 'marketing-ia'` en la línea 22) y recibe `--tanda <id>`, con `marketing-ia` por defecto para no cambiar su uso actual. `audit/imagenes-ia-2026-10.json` suma `"tandas"."video-inmobiliario": { "tope": 10 }` y su `tope` pasa de 25 a 35, con la `_nota` explicada; la prueba de topes de `marketing-ia.test.mjs` cubre las dos tandas. Se declara según la regla 3.
- SR16: Los US$ 4,21 ya cobrados se registran después del cobro, como filas `confirmado` con el `request_id` real de fal (están en esta sesión y en el historial de fal: 4 de mockups, 4 de renders, 4 de clips, 4 de voz y 1 de música). Los US$ 2,10 de Luxor500 van como filas sin tanda con `uso` «demo cliente Ilitch (Luxor500), no web».
- SR17: Antes de la puerta, los activos del ejemplo se copian del scratchpad a `.gstack/tmp/video-inmobiliario/` (ignorada por git, persiste entre sesiones): renders, clips, voz, música y el montaje.
- SR18: Si #0 termina en `VINM-DEMANDA`, este plan se detiene ahí y la opción B se planifica aparte; ningún criterio de este plan aplica a la opción B.
- SR19: `fuente` de las 4 claves nuevas es exactamente `src/lib/pages/marketing.ts` (reemplaza el «y D55» de #1). La duración de Preventa se escribe igual en todas partes: «hasta 60 s».
- SR20: La página no escribe cifras de otras páginas: T1 y `compare` nombran Videos publicitarios con enlace y sin su precio, así SR11(b) sigue estricta.
- SR21: E3 usa la pregunta GEO «¿Cuánto cuesta un video inmobiliario con IA en Panamá?». SR8: el agente arma la hoja de contactos del recorte 9:16 y el dueño decide qué clips se regeneran (regla: se regenera el clip cuyo recorte deja fuera el elemento principal del ambiente: el sofá, la isla, la cama o la baranda).
- CV1 (voz CEO, auto P1): «Qué incluye» fija 2 rondas de cambios por video; cada ronda extra o un cambio de render después de aprobado el guion se cotiza aparte. Prueba sobre `dist/`: «2 rondas» aparece en «Qué incluye».
- CV2 (auto P1): Requisitos de entrada en la FAQ «¿Qué renders sirven?»: renders o fotos de al menos 1920 px de ancho, uno por ambiente, sin texto ni marcas de agua; no sirven planos 2D ni bocetos. Verificación: la FAQ existe con esas condiciones.
- CV3 (auto P1): Cada video entregado lleva al final la nota «Imágenes ilustrativas, sujetas a cambios» y la página lo dice en «Qué incluye». La FAQ de derechos dice que quien entrega los renders declara por escrito tener derecho de uso y modificación, y esa cláusula va en la cotización. Prueba sobre `dist/`: las dos frases existen.
- CV4 (auto P1): Antes de publicar se prueba la calidad con 3 renders de otro tipo (una fachada exterior, un área social con agua y un render de baja calidad), generados con `nano-banana-pro` y animados con Kling (US$ 0,15 + 0,70 cada uno, US$ 2,55 en total). Tanda en el peor caso: 7,16 + 2,55 = US$ 9,71, dentro del tope de 10. Si alguno se deforma, la FAQ lo dice como límite («fachadas con agua pueden necesitar varias tomas»). Los clips de prueba no se publican.
- CV5 (auto P2; extiende E3): En P+56, regla de decisión escrita en TODOS.md: con 0 consultas desde la página y menos de 50 impresiones de su palabra principal, el dueño decide entre pasarla a bloque dentro de Videos (opción B) o dejarla como destino de venta directa sin más inversión SEO. Además se cuentan las reuniones que lleguen por contacto directo.
- CV6 (sección 2, auto P1): Si falta una clave de `precios.json` o un `monto` no es numérico, el build falla con un mensaje que nombra la clave; nunca se pinta «$undefined». Prueba de unidad con una clave inexistente.
- CV7 (sección 4, auto P5): Al reproducir uno de los dos videos del collage, el otro se pausa (un listener de `play`, menos de 20 líneas, en el mismo módulo de las pestañas). Verificación manual en el preview.
- CV8 (sección 5, auto P4): Los dos videos del collage usan el tipo `video` de `Ejemplo.astro` (ficha, «Descargar MP4», `aria-describedby`, guion en `<details>`), no un `<video>` escrito a mano. Prueba sobre `dist/`: cada `<video>` del bloque tiene su enlace «Descargar MP4».
<!-- /autoplan-accepted:ceo -->

### Fase 2, diseño (run main-20261021-151751)

**Auditoría y alcance.** UI: una página nueva y un bloque nuevo (`planes-tabs`). DESIGN.md existe (portada marino en páginas de servicio, cian como único acento, Roboto, sombra desplazada y check SVG de la vitrina D54). Mockup aprobado por el dueño: variante 4 (`mockups-video-inmobiliario/v4.jpg`), así que no se generaron mockups nuevos. Verificado en el código: el `receipt` no se pinta en el cuerpo (`Blocks.astro:223`, D49); da el precio y el plazo de la portada (`PortadaServicio.astro:20`). `ContactForm.astro:87` ya lee `?servicio=` de la URL.

**Paso 0.** Completitud de diseño inicial: 5/10. Datos, precios y pruebas muy especificados; lo que ve y hace el visitante, poco: jerarquía del bloque, contenido de la pestaña, móvil, estados y contrato de accesibilidad. Un 10 aquí sería: el bloque v4 cabe bajo la portada sin competir con ella, cada pestaña dice para quién es y cuánto cuesta en total, móvil con medidas, estados escritos y pestañas con contrato ARIA completo.

**Voces de diseño.**
- Claude (subagente, completado, INPUT design d2db3c51…): 10 hallazgos; 1 crítico (CV8 choca con el collage de v4), 4 altos (v4 es un héroe y queda tercero; contenido de la pestaña sin definir; etiquetas a 390 px y collage compacto sin medidas; estados), resto medios (anclaje $550 → Proyecto, checklist con «Rótulo con tu marca» no ofrecido, prueba débil, pestañas ocultan la comparación, tokens del fondo).
- Codex (`gpt-5.6-terra`, completado): 10 hallazgos; 1 crítico (la prueba no prueba: etiqueta junto a los videos y tira render → cuadro animado), 5 altos (Proyecto por defecto sin justificar; escalera confusa, pide comparación persistente de los 3 planes; estados de pestañas y video; móvil; contrato ARIA y `<track>`), 3 medios (medidas del collage, contrato único del bloque, CTA que conserve el plan), 1 bajo (`receipt` no se pinta: confirmado).

```
DESIGN OUTSIDE VOICES — LITMUS SCORECARD:
  Check                                    Claude  Codex  Consensus
  1. Brand unmistakable in first screen?   SÍ      SÍ     CONFIRMED (portada v2 con precio)
  2. One strong visual anchor?             NO      NO     CONFIRMED (foto D45 + collage compiten)
  3. Scannable by headlines only?          SÍ      SÍ     CONFIRMED
  4. Each section has one job?             NO      NO     CONFIRMED (v4 hace de héroe y de precios)
  5. Cards actually necessary?             SÍ      SÍ     CONFIRMED (no hay tarjetas decorativas)
  6. Motion improves hierarchy?            N/A     N/A    sin movimiento autoral; videos a demanda
  7. Premium without decorative shadows?   SÍ      SÍ     CONFIRMED (sombra desplazada de DESIGN.md)
  Hard rejections triggered:               0       0      CONFIRMED
```

**Pase 1, arquitectura de la información: 4/10 → 8/10.** Hallazgo confirmado por las dos voces: v4 se diseñó como héroe y aquí va tercero, con la foto D45 arriba. Decisión (auto P5, estructural): el bloque usa H2 de sección normal («Planes y ejemplo»), sin ceja ni título de pantalla; la foto D45 sigue siendo el ancla visual de la portada y el collage es la segunda pieza, más chica (DV1). Jerarquía de la página:
```
  PORTADA v2 (marino): H1 · «desde $550» · plazo · botón · foto D45
  └─ answer (respuesta citable)
  └─ planes-tabs: H2 «Planes y ejemplo»
       ├─ izquierda: intro + checklist (4 ítems)
       ├─ derecha: collage 16:9 + 9:16 con la etiqueta de ejemplo
       └─ abajo: pestañas Unidad · Proyecto · Preventa → panel del plan
  └─ blank (prueba: tira render → cuadro animado)
  └─ includes · steps · tabla · compare · faq · form · related
```
Queda en 8 y no en 10 por la escalera de precios, que decide el dueño (T3).

**Pase 2, estados: 3/10 → 9/10.** Las dos voces piden estados escritos. Decisión (auto P1): tabla de estados del bloque (DV5).
```
  FUNCIÓN    | CARGANDO              | VACÍO | ERROR                         | ÉXITO                      | PARCIAL
  pestañas   | sin JS: 3 planes      | n/a   | JS falla → 3 planes apilados  | 3 pestañas, Proyecto activo| n/a
             | apilados, H3 por plan |       | (mismo HTML)                  | con chip «Para promotoras» |
  videos     | póster = mejor cuadro | n/a   | texto de respaldo dentro de   | reproduce; el otro se      | sin autoplay
             | (sala al atardecer)   |       | <video> + «Descargar MP4»     | pausa (CV7)                |
  copy T2/G5 | texto provisional que | n/a   | n/a                           | texto final tras la puerta | n/a
             | ya ocupa su lugar     |       |                               |                            |
```

**Pase 3, recorrido y emoción: 5/10 → 7/10.**
```
  PASO | EL USUARIO HACE                 | SIENTE                    | LO SOSTIENE
  1    | llega desde Nicole/Ilitch o Google | «¿es para mí?»          | H1, «desde $550», foto D45
  2    | lee la respuesta citable        | entiende qué se vende     | answer
  3    | mira el collage                 | «¿es real o IA genérica?» | etiqueta junto a los videos (DV3)
  4    | ve la tira render → cuadro      | «no inventa nada»         | blank como prueba visual (DV4)
  5    | elige pestaña                   | «¿cuál me toca?»          | «Para quién es» + total con extra (DV2)
  6    | cotiza                          | confianza                 | botón por plan que conserva el plan (DV6)
```
Queda en 7: la duda «¿es real?» solo se cierra con un caso real (G6, E4).

**Pase 4, riesgo de «AI slop»: 7/10 → 9/10.** Clasificador: PERSUADE (página de servicio con precio). 0 rechazos duros. Hallazgo: el checklist del mockup trae «Rotulo con tu marca», que no se ofrece ni se cobra. Decisión (auto P5): los 4 ítems exactos son «Horizontal y vertical», «Música con licencia», «Revisión humana» y «2 rondas de cambios», y cada uno repite una línea de «Qué incluye» (DV7). Las etiquetas de pestaña dicen plan y precio, sin íconos ni emojis.

**Pase 5, sistema de diseño: 6/10 → 9/10.** Decisión (auto, DESIGN.md existe y el arreglo es obvio): mapa de tokens del bloque (DV8). Fondo de la banda `surface-alt`; panel y pestaña activa `surface-raised` con barra superior de 3 px en `accent-on-light` (la barra de la fila activa de la vitrina); pestañas inactivas en `surface-alt` con texto `text-muted` y filete `border`; marcos del collage blancos, radio 20 y sombra desplazada de 10 px sin desenfoque en `accent` (la de la vitrina); check SVG en `accent-on-light`. Ningún color nuevo.

**Pase 6, responsive y accesibilidad: 3/10 → 9/10.** Decisión (auto P1): DV9 (móvil) y DV10 (contrato ARIA). No se agrega `<track>`: los subtítulos van quemados en el video (subtítulos abiertos) y el guion está en `<details>`, lo que cumple WCAG 1.2.2 para video pregrabado igual que en Videos publicitarios; Codex pedía las dos cosas (disentimiento registrado).

**Pase 7, decisiones sin resolver.**
```
  DECISIÓN                                     | SI SE DIFIERE
  Pestañas frente a comparación persistente    | el comprador no ve los 3 planes a la vez (T5, puerta)
  Escalera de precios                          | Proyecto sale más barato por video que Unidad (T3, puerta)
  Caso real en vez de ficticio                 | la duda «¿es real?» persiste (G6, puerta)
```
3 a la puerta, 0 abiertas dentro de la fase.

**Disentimientos (gusto).** T5: Codex pide una comparación persistente de los 3 planes (videos, duración, tipologías, vertical, rondas, plazo, precio base y con narración) y la de Claude acepta las pestañas de v4 si cada etiqueta lleva plan y precio. El dueño aprobó v4; por defecto se quedan las pestañas, con DV2 para que cada panel diga el total con narración. `<track>`: rechazado (P5), ver el pase 6.

```
  +====================================================================+
  |         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | System Audit         | DESIGN.md sí; 1 página + 1 bloque nuevo     |
  | Step 0               | 5/10; foco en las 7 dimensiones             |
  | Pass 1  (Info Arch)  | 4/10 → 8/10 after fixes                    |
  | Pass 2  (States)     | 3/10 → 9/10 after fixes                    |
  | Pass 3  (Journey)    | 5/10 → 7/10 after fixes                    |
  | Pass 4  (AI Slop)    | 7/10 → 9/10 after fixes                    |
  | Pass 5  (Design Sys) | 6/10 → 9/10 after fixes                    |
  | Pass 6  (Responsive) | 3/10 → 9/10 after fixes                    |
  | Pass 7  (Decisions)  | 0 resolved, 3 deferred to the gate         |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (2 items: <track>, comparación)     |
  | What already exists  | written                                     |
  | TODOS.md updates     | 0 items proposed                            |
  | Approved Mockups     | 0 generated, 1 approved (v4 de fal)         |
  | Decisions made       | 11 added to plan (DV1-DV11)                 |
  | Decisions deferred   | 3 (T3, T5, G6)                              |
  | Overall design score | 3/10 → 7/10                                 |
  +====================================================================+
```

**Lo que ya existe.** DESIGN.md (tokens, sombra desplazada, check SVG, barra activa de la vitrina), `Ejemplo.astro` y `ejemplos.ts` (núcleo del video, ficha, descarga), `PortadaServicio.astro` (precio de la portada desde el `receipt`), `ContactForm.astro` con `?servicio=`.

**No incluido.** Pista `<track>` (los subtítulos abiertos y el guion cumplen); comparación persistente de los 3 planes (va a la puerta como T5).

<!-- autoplan-accepted:design -->
- DV1 (pase 1): `planes-tabs` lleva un H2 de sección normal, «Planes y ejemplo», sin ceja ni título de tamaño de portada. La foto D45 sigue siendo el ancla visual de la portada y el collage es la segunda pieza, con alto máximo de 520 px en escritorio. Prueba sobre `dist/`: el bloque tiene un solo H2 y ningún elemento con la clase del H1 de portada.
- DV2 (pase 3, ambas voces): Cada panel de pestaña dice, en este orden: «Para quién es» (Unidad: «un apartamento o una casa»; Proyecto: «lanzamientos con 2 a 4 tipos»; Preventa: «la preventa completa de una torre»), la línea de entregables (videos, duración, versión vertical incluida), el plazo de G5, el precio base y una segunda línea en `text-muted` con el total con narración y subtítulos (por ejemplo «Con narración y subtítulos: $2,050»). La etiqueta de cada pestaña muestra nombre y precio. Proyecto va activo por defecto con el chip «Para promotoras»; el orden en el HTML es Unidad, Proyecto, Preventa. El total con narración cuenta como cifra válida para SR11(b): `monto` del plan más `monto` del extra × `bloquesNarracion`. Prueba sobre `dist/`: los 3 paneles tienen «Para quién es», plazo y total.
- DV3 (pase 3, ambas voces): Bajo el collage va una sola fila de pie: «Ejemplo · proyecto ficticio hecho con IA», el guion en un `<details>` (los dos videos son el mismo montaje) y dos enlaces «Descargar MP4 horizontal» y «Descargar MP4 vertical». Prueba sobre `dist/`: el pie está dentro del bloque y junto al collage.
- DV4 (pase 3, ambas voces): El bloque `blank` de prueba se reemplaza por una tira de dos imágenes: un render fijo y el mismo cuadro tomado del clip animado, con las etiquetas «Render» y «Video», y una frase: «La IA mueve la cámara; no agrega muebles ni ambientes». El texto «Todavía no hay casos de clientes publicados» se mantiene debajo. Las dos imágenes salen de los activos ya generados (sin gasto). Prueba sobre `dist/`: las dos imágenes existen, pesan ≤ 80 KB y tienen `alt`.
- DV5 (pase 2): Estados del bloque según la tabla del pase 2: sin JS los 3 planes se ven apilados con un H3 por plan y un filete entre ellos; si el JS falla, el mismo HTML; el póster de cada video es el mejor cuadro (la sala al atardecer), no el cuadro 0; dentro de `<video>` va un texto de respaldo con el enlace de descarga; el copy de T2 y G5 ocupa su lugar con texto provisional hasta la puerta. Prueba sobre `dist/` con JS desactivado: los 3 planes son visibles.
- DV6 (pase 3, ambas voces): Cada panel tiene un botón «Cotizar este plan» que lleva al formulario con `?servicio=definir#form` y un enlace de WhatsApp cuyo mensaje nombra el plan («Hola, quiero cotizar el plan Proyecto de video inmobiliario»), sin cifra (D23). No se agrega un campo nuevo al formulario. Prueba sobre `dist/`: 3 botones y 3 enlaces de WhatsApp con el nombre de su plan.
- DV7 (pase 4): El checklist tiene exactamente estos 4 ítems: «Horizontal y vertical», «Música con licencia», «Revisión humana», «2 rondas de cambios», cada uno repetido en «Qué incluye». No se ofrece el «rótulo con tu marca» del mockup. Prueba sobre `dist/`: 4 ítems y cada uno aparece en «Qué incluye».
- DV8 (pase 5): Tokens del bloque, sin colores nuevos: banda en `surface-alt`; panel y pestaña activa en `surface-raised` con barra superior de 3 px en `accent-on-light`; pestañas inactivas en `surface-alt` con texto `text-muted` y filete `border`; marcos del collage blancos con radio 20 y sombra desplazada de 10 px sin desenfoque en `accent`; check SVG en `accent-on-light`. Verificación: `selectores-hoja.mjs` no muestra utilidades nuevas fuera de la hoja del bloque y la hoja solo usa variables de DESIGN.md.
- DV9 (pase 6, ambas voces): Móvil (≤ 767 px), una sola columna en este orden: intro, checklist, collage, pestañas, panel. El 16:9 va a ancho completo; el 9:16 va centrado al 60 % del ancho con alto máximo de 480 px, y la sombra desplazada cabe dentro del margen de 16 px. Las pestañas son 3 columnas iguales con el nombre arriba y el precio abajo, de 15 px, con objetivo táctil de 44 px como mínimo. Sin scroll horizontal a 390 px. Desde 768 px, dos columnas como v4. `qa-responsive.mjs` suma la ruta nueva y comprueba que no hay scroll horizontal a 390 px.
- DV10 (pase 6, ambas voces): Contrato de las pestañas: `role="tablist"` con `aria-label="Planes"`; cada pestaña `role="tab"` con `id`, `aria-controls` y `aria-selected`; tabindex rotativo (solo la activa en 0); activación automática con flechas izquierda y derecha, Inicio y Fin; cada panel `role="tabpanel"` con `aria-labelledby` y `tabindex="0"`; anillo de foco visible con el token de foco del sitio; cambiar de pestaña no toca los videos. Al llegar con `#plan-preventa` (o el `id` de otro panel) en la URL, esa pestaña queda activa. Los dos videos tienen nombres distintos para el lector de pantalla («Recorrido de ejemplo, versión horizontal» y «versión vertical»). No se agrega `<track>`: los subtítulos van quemados y el guion está en `<details>`. Prueba: `qa-a11y` en 0 y una prueba de teclado en el preview.
- DV11 (pase 1, crítico de Claude): Reemplaza a CV8 en cómo se pintan los videos. Dentro de cada marco del collage va solo el núcleo del video de `Ejemplo.astro` (`<video>`, póster, `aria-describedby` hacia el pie común), extraído a un componente compartido que también usa `Ejemplo.astro`; la ficha, el guion y las descargas van una sola vez en el pie de DV3. Prueba sobre `dist/`: los 2 `<video>` del bloque apuntan con `aria-describedby` al mismo pie y existen los 2 enlaces de descarga.
<!-- /autoplan-accepted:design -->

### Fase 3, ingeniería (run main-20261021-151751)

**Desafío de alcance.** Archivos estimados: unos 22 (página, tipos, `planes-tabs.astro`, componente compartido del video, `Ejemplo.astro`, `ContactForm.astro`, hoja CSS, `[...slug].astro`, `precios.json`, `ia-creativa.json`, `audit/imagenes-ia-2026-10.json`, `gasto-ia.mjs`, `marketing-ia.test.mjs`, `qa-lcp.mjs`, `qa-responsive.mjs`, menú, pie, `servicios.ts`, hub, `llms.txt`, KEYWORDS, TODOS). Clases o servicios nuevos: 2 (`planes-tabs`, núcleo de video compartido). La puerta de complejidad se dispara (≥ 8 archivos); la pregunta de estructura se auto-decide con la recomendación (P2: nunca reducir alcance): arreglo original, porque cada archivo responde a un requisito ya aceptado y no hay un arreglo más chico que conserve las pruebas. Resultado: scope accepted as-is.

**Verificado en el código (hallazgos de las voces).**
- `scripts/marketing-ia.test.mjs:482`: `const ORDEN_BLOQUES = ['answer', 'receipt', 'ejemplos', 'blank', …]`, exigido igual a toda página de IA creativa en la línea 556.
- `marketing-ia.test.mjs:486` (`videosDe`) solo lee bloques `ejemplos`: los videos de `planes-tabs` quedarían fuera de las pruebas de peso, códec y audio.
- `scripts/gasto-ia.mjs:114`: `reg.tandas[TANDA] ??= { tope: 15, gastado: 0 };` inventa un tope de 15 para una tanda que falte.
- `src/components/ContactForm.astro:17`: el ancla es `id="formulario"`, no `#form`.
- `src/pages/[...slug].astro:16`: `ejemplo-media.css` se pone en línea solo con ejemplos `foto`/`video` en un bloque `ejemplos`.
- El title propuesto mide 64 caracteres (máximo 60).

**Voces de ingeniería.**
- Claude (subagente, completado, INPUT eng 2b241bae…): 13 hallazgos; 1 crítico (`videosDe` no ve los videos nuevos), 5 altos (orden de bloques único, tope inventado de `gasto-ia`, SR16 a mano con costos estimados, margen de 0,29 en la tanda, recorte 9:16 blando y relleno), 5 medios (DV11 toca una página publicada, guion único frente a la prueba, cifras cruzadas, texto provisional publicable, mejora progresiva y CLS), 2 bajos.
- Codex (`gpt-5.6-terra`, completado): 13 hallazgos; 1 crítico (el bloque nuevo rompe el contrato de pruebas), 6 altos (`#form` no existe, se pierde el plan del lead, fallback vertical 960×540 horizontal, «≤ 900 px» contra 720×1280, ARIA sin JS, estilos del núcleo de video), 5 medios (title de 64, demanda no operativa, `EjemploVideo` no existe y falta el tipo de la tira, cifras manuales, licencia de música sin evidencia), 1 bajo (gramática de `--tanda`).

```
ENG DUAL VOICES — CONSENSUS TABLE:
  Dimension                           Claude  Codex  Consensus
  1. Architecture sound?               sí*     no*    CONFIRMED: sirve, con huecos que bloquean
  2. Test coverage sufficient?         no      no     CONFIRMED
  3. Performance risks addressed?      no(CLS) —      DISAGREE (solo Claude) → EV11
  4. Security threats covered?         sí      sí*    CONFIRMED (bajo; licencia de música → EV14)
  5. Error paths handled?              no      no     CONFIRMED
  6. Deployment risk manageable?       no      sí     DISAGREE (texto provisional) → EV10
```

**Sección 1, arquitectura.**
```
  precios.json ─┬─► extraNarracion() / formatoPrecio() ─► planes-tabs.astro ─► <main>
                │                                         │  ├─ VideoNucleo.astro ◄─ Ejemplo.astro (Videos D52)
                │                                         │  └─ pestañas.js (mejora progresiva)
                ├─► schema.ts ─► offers (550) + hasOfferCatalog (550, 1450, 2400)
  ia-creativa.json ─► orden de bloques por página ─► marketing-ia.test.mjs
  ContactForm.astro ◄─ ?servicio=definir&plan=<clave>#formulario
  gasto-ia.mjs --tanda video-inmobiliario ─► audit/imagenes-ia-2026-10.json (tanda con tope escrito)
  [...slug].astro ─► inyecta ejemplo-media.css si hay video en ejemplos O en planes-tabs
```
[P1] (confidence: 9/10) `src/components/ContactForm.astro:17` — `<div id="formulario"` : el CTA de DV6 apunta a `#form`, que no existe → EV3. [P1] (confidence: 8/10) `src/pages/[...slug].astro:16` — `import mediaCss from '../styles/ejemplo-media.css?inline'` se pone solo con `ejemplos`: el núcleo compartido quedaría sin estilos en la página nueva → EV6. [P2] (confidence: 8/10) el plan del lead se pierde (servicio genérico) → EV4.

**Sección 2, calidad de código.** [P2] (confidence: 8/10) `scripts/gasto-ia.mjs:114` — `reg.tandas[TANDA] ??= { tope: 15, gastado: 0 };` → EV7. [P2] el plan se reescribe a sí mismo (E1 → SR1 → SR10, CV8 → DV11) → EV13 (spec final de una sola versión antes de construir). [P3] title de 64 → EV12. `EjemploVideo` no existe en `types.ts`: el tipo se define en EV5.

**Sección 3, pruebas.** Diagrama:
```
CODE PATHS                                          USER FLOWS
[+] planes-tabs.astro                               [+] Elegir plan
  ├── precio por clave       [GAP→EV1 unidad]        ├── [GAP] clic / flechas / hash
  ├── total con narración    [GAP→EV9 por panel]     ├── [GAP] sin JS: 3 secciones
  └── centinelas PENDIENTE   [GAP→EV10 dist]         └── [GAP] [→E2E] cotizar → #formulario con plan
[+] VideoNucleo + Ejemplo.astro                      [+] Ver ejemplo
  ├── 2 videos en la página  [GAP→EV1 videosDe]      ├── [GAP] reproducir uno pausa el otro (manual)
  └── Videos D52 sin cambio  [GAP→EV6 comparar main] └── [★★ TESTED] descargar MP4 (check-links)
[+] gasto-ia.mjs --tanda                             [+] Errores
  ├── tanda escrita          [GAP→EV7]               ├── [GAP] hash inválido no apaga pestañas
  └── uso sin flag igual     [★★★ TESTED hoy]        └── [GAP] clave ausente rompe el build
[+] ContactForm ?plan=        [GAP→EV4 con y sin]
COVERAGE: 2/16 rutas con prueba hoy | GAPS: 14 (1 E2E), todas con prueba exigida abajo
```
Artefacto del plan de pruebas: `~/.gstack/projects/josimarguilbaud-elementoweb/JosimarG-main-eng-review-test-plan-20261021-160516.md`.

**Sección 4, rendimiento.** Página estática; sin consultas. Riesgos: CLS de las pestañas (EV11) y el peso de 2 videos con `preload="none"` (sin costo hasta el play). JS de pestañas < 1 KB. Sin hallazgos de memoria ni caché.

**Modos de falla.**
```
  CODEPATH             | FALLA                         | PRUEBA | MANEJO               | USUARIO VE
  videos del bloque    | > 2 MB y nadie lo detecta     | EV1    | prueba roja          | nada (no se publica)
  orden de bloques     | prueba roja por diseño        | EV2    | orden por página     | nada
  CTA                  | no baja al formulario         | EV3    | ancla correcta       | baja al formulario
  lead                 | se pierde el plan             | EV4    | prefijo en el mensaje| el mensaje trae el plan
  gasto                | tope 15 inventado             | EV7    | MKIA-TANDA           | nada (no se cobra)
  texto provisional    | se publica «PENDIENTE»        | EV10   | prueba roja          | nada
  pestañas sin JS      | ARIA rota                     | EV11   | roles solo con JS    | 3 secciones legibles
```
0 brechas críticas después de EV1-EV14 (todas con prueba o verificación).

**Paralelización.** Sequential implementation, no parallelization opportunity: todo pasa por `marketing.ts`, `types.ts` y `marketing-ia.test.mjs`.

**No incluido.** Pista `<track>` (diseño, ya decidido); campo nuevo en el formulario o flujo de n8n (EV4 usa el mensaje); regenerar en 9:16 con relleno (EV8 lo prohíbe).

**Lo que ya existe.** `Ejemplo.astro`/`ejemplos.ts` (núcleo y ficha), `toLocaleString('en-US')` de `site.ts`/`portada.ts`, `ContactForm` con `?servicio=`, `gasto-ia.mjs`, `validar-marcador.mjs`, `qa-lcp.mjs`, `qa-responsive.mjs`, `selectores-hoja.mjs`, `comparar-main.mjs`.

**Pendientes para TODOS.md (de todas las fases).** E4 caso Luxor500 con permiso, E5 piezas de prospección (extiende «3 piezas»), E6 artículo de precio (extiende «un artículo por página»), E7 narración en inglés, landing de Ads para validar demanda, web de preventa con video incluido, y E3/CV5 en la entrada de medición.

REALITY: premise-table pass unverified=1 (demanda; #0 con umbral EV12) docs/specs/rediseno-elementoweb/SPEC-VIDEO-INMOBILIARIO.md:49
REALITY: already-done pass sin trabajo de video inmobiliario en main (606afcc) src/lib/pages/marketing.ts:1318
REALITY: surface-check finding `#form` no existe, es `#formulario` src/components/ContactForm.astro:17
REALITY: binding-decisions pass D55.5 «$150 por video» se mantiene (SR10) y D52 U1b en #0 docs/specs/rediseno-elementoweb/SPEC-VIDEO-INMOBILIARIO.md:32
REALITY: numbers finding title 64 > 60; margen de la tanda 0,29 → G4 docs/specs/rediseno-elementoweb/SPEC-VIDEO-INMOBILIARIO.md:75
REALITY: deferred-asks pass sin issue enlazado docs/specs/rediseno-elementoweb/SPEC-VIDEO-INMOBILIARIO.md:9
REALITY: pr-count pass un solo cambio, push a main con permiso CLAUDE.md:7

**Resumen de cierre.**
- Step 0: Scope Challenge — scope accepted as-is
- Reality rows: 7/7, 1 unverified
- Architecture Review: 3 issues found
- Code Quality Review: 3 issues found
- Test Review: diagram produced, 14 gaps identified (todas con prueba exigida)
- Performance Review: 1 issue found (CLS)
- NOT in scope: written · What already exists: written
- TODOS.md updates: 6 items (escritos al cerrar)
- Failure modes: 0 critical gaps flagged
- Unresolved decisions: 0 en la fase (T3, T5, G4 a la puerta)
- Outside voice: codex completed
- Parallelization: 1 lane, 0 parallel / 1 sequential
- Lake Score: N/A

<!-- autoplan-accepted:eng -->
- EV1 (crítico, ambas voces): `videosDe` de `scripts/marketing-ia.test.mjs` lee también `planes-tabs.media.horizontal` y `.vertical`, así los 2 videos nuevos pasan las mismas pruebas de Videos (≤ 2 MB, avc1, perfil, audio con voz, duración de la ficha). Prueba nueva: la página nueva da exactamente 2 videos.
- EV2 (ambas voces): El orden de bloques se guarda por página en `ia-creativa.json` (`orden`), y la prueba compara cada página con el suyo; Videos conserva su orden actual. Orden de la página nueva: `answer`, `receipt`, `planes-tabs`, `ejemplos` (la tira de DV4, con 2 ejemplos de tipo `foto` con `etiqueta` «Render» y «Video»), `blank` (el texto de «sin casos publicados»), `includes`, `steps`, `tabla`, `compare`, `faq`, `form`, `related`.
- EV3 (Codex, verificado): El botón «Cotizar este plan» de DV6 apunta a `?servicio=definir&plan=<clave>#formulario` (el ancla real de `ContactForm.astro:17`), no a `#form`.
- EV4 (Codex, auto P1): `ContactForm.astro` lee `?plan=` de la URL (igual que ya lee `?servicio=`) y, si es una de las 3 claves de plan, empieza el mensaje con «Plan de interés: <nombre del plan>». Sin el parámetro nada cambia. Sin campo nuevo ni cambio en n8n. Pruebas sobre `dist/`: con y sin `?plan=` en un navegador de prueba.
- EV5 (Codex): Tipos explícitos en `src/lib/types.ts`: el bloque `planes-tabs` con `media: { horizontal: VideoNucleo; vertical: VideoNucleo; guion: string; pie: string }`, donde `VideoNucleo` es `{ src; poster: { src; width; height }; duracion; bytes; voz?: true; nombre }`; los planes como en SR12. El guion vive una sola vez en `media.guion` y la prueba de guion lo lee de ahí (no se duplica en el HTML).
- EV6 (ambas voces): El componente compartido del núcleo de video se llama `VideoNucleo.astro` y lo usan `Ejemplo.astro` y `planes-tabs`. `[...slug].astro` pone `ejemplo-media.css` en línea también cuando la página tiene `planes-tabs`. El `<main>` de `dist/marketing/videos-publicitarios-panama/` se compara antes y después con `comparar-main.mjs`: solo puede cambiar el `related` declarado en #5.
- EV7 (Claude, verificado): `gasto-ia.mjs` acepta `--tanda <id>` como primer argumento opcional (`node scripts/gasto-ia.mjs --tanda video-inmobiliario reservar …`); sin la bandera usa `marketing-ia` como hoy. Si la tanda pedida no existe en el JSON, sale con `MKIA-TANDA` y no la crea: se quita el `??= { tope: 15 }` de la línea 114 y el `?? 15` de la 174 para tandas que no sean `marketing-ia`. Pruebas: tanda desconocida → código 1 con MKIA-TANDA; uso sin bandera, igual que antes.
- EV8 (Claude): El vertical se recorta desde los clips maestros de Kling y desde un montaje sin subtítulos, y los subtítulos se queman después. Si un clip se regenera en 9:16, primero se recorta el render a 9:16 (sin relleno) y esa imagen es la entrada. Fallback de peso vertical: 540×960 con la escalera de CRF (reemplaza el 960×540 de SR2 para el vertical). Prueba: dimensiones y aspecto de cada MP4 con `mdhd`/`tkhd` (16:9 y 9:16).
- EV9 (Claude): Cifras validadas panel por panel: precio base = `monto` del plan del panel; total = `monto` + `monto` de `narracion-subtitulos` × `bloquesNarracion` del mismo plan. Una sola función `formatoPrecio` (con `toLocaleString('en-US')`, como `site.ts`) para el componente y la prueba. Ninguna otra cifra de precio escrita a mano en etiquetas, FAQ, tabla, CTA ni comparación. `validar-marcador` sigue dando `servicio-con-precio`; los mínimos del schema pasan a [550, 550, 1450, 2400].
- EV10 (Claude): Mientras G5 y T2 no tengan respuesta, su texto provisional lleva los centinelas `PENDIENTE-G5` y `PENDIENTE-T2`, y una prueba sobre `dist/` falla si aparece alguno. Así no se publica texto provisional.
- EV11 (ambas voces): Mejora progresiva de las pestañas: el servidor manda 3 secciones con H3, sin roles ARIA de pestañas; el JS agrega `role`, `aria-*`, `tabindex` y `hidden`. Un script en línea del `<head>` pone la clase `js` en `<html>` y el CSS oculta los paneles inactivos antes de pintar, sin salto de diseño. El hash se lee con `getElementById(location.hash.slice(1))`, nunca con `querySelector(location.hash)`. `qa-lcp` mide CLS ≤ 0,05 en la página nueva.
- EV12 (Codex): Title de 60 caracteres o menos, por ejemplo «Video Inmobiliario con IA en Panamá | Recorridos 360 y Reels» se mide antes de fijarlo tras #0. AC5 se lee como alto renderizado: a 1440×900 ningún `<video>` mide más de 900 px de alto en pantalla. Demanda de #0 con umbral escrito: página propia si el Planificador muestra 10 o más búsquedas al mes en Panamá para la palabra principal, o si hay 3 o más resultados de agencias o servicios panameños en la primera página de Google (anotados con URL y fecha en `audit/`).
- EV13 (Claude): Antes de construir se escribe una versión final única de la spec (con E, SR, CV, DV y EV ya fundidos y las respuestas de la puerta aplicadas); las enmiendas quedan como historial.
- EV14 (Codex): Antes de publicar «Música con licencia», D55 anota el proveedor y los términos de uso comercial de cada herramienta usada (ElevenLabs Music y TTS vía fal, Kling vía fal, nano-banana-pro vía fal) con la fecha de lectura. Si alguno no permite uso comercial, el ítem del checklist dice qué se puede usar.
- EV15 (Claude): Los activos del ejemplo se respaldan fuera del repo, en `~/.gstack/projects/josimarguilbaud-elementoweb/assets/video-inmobiliario-20261021/` (hecho el 21-oct-2026: renders, clips, audio, montaje y el demo de Luxor500). SR16 usa costos reales del historial de fal; si no se pueden leer, la fila va con `estado: "estimado"` y no `confirmado`. La narración son 4 pedidos de TTS, uno por frase: 4 filas de unos US$ 0,003 cada una.
<!-- /autoplan-accepted:eng -->

### Puerta final del dueño (21-oct-2026, gate_rev 1, respuesta «rec except d3b»)

| Id | Decisión | Respuesta |
|---|---|---|
| T3 (d1) | Escalera de precios | **a**: Preventa suma 6 cortes verticales de 15 s (uno por tipo) y trae la narración incluida; el extra de $150 por video queda solo en Unidad y Proyecto. Precios sin cambio. `bloquesNarracion` de Preventa = 0 y su total con narración es su precio base. |
| T5 (d2) | Pestañas o comparación | **a**: pestañas de la variante 4 con plan y precio en cada etiqueta y el total en cada panel. |
| G4 (d3) | Tope de la tanda | **b (override)**: US$ 10. Mitigación: CV4 corre antes que las regeneraciones de SR8 y `gasto-ia` frena cualquier reserva que pase el tope; si se llega al tope, se para y se pregunta. |
| G5 (d4) | Plazos | **a**: Unidad 5, Proyecto 10 y Preventa 15 días hábiles desde que recibimos los renders. Los centinelas `PENDIENTE-G5` se reemplazan con esto. |
| G3 (d5) | Roboto | **a** (auto): se convierte el `roboto-latin-wght-normal.woff2` del sitio a TTF, sin descargar nada. |
| T2 (d6) | Narración por bloque | **a** (auto): no; $150 por video. |
| T4 (d7) | Canal directo | **a** (auto): va a TODOS.md (escrito). |
| T1 (d8) | Frase de la FAQ | **a** (auto): se incluye. |
| Plan (p1) | Aprobación | **a**: aprobado; construir. Pendientes antes de construir: G1 (slug tras #0 con EV12) y G6 (permiso de Luxor500, opcional). |

Nota de proceso: el único override (d3, tope de US$ 10 en vez de 12) cambia un valor y no una arquitectura; no se volvió a correr la fase de ingeniería y el riesgo queda cubierto por el freno de `gasto-ia` (EV7). Las respuestas se funden en la spec final (EV13) antes de construir.

## Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 1 | CEO | Modo SELECTIVE EXPANSION | Mechanical | regla de /autoplan | override fijo de la fase | otros modos |
| 2 | CEO | E1-E3 aceptadas | Mechanical | P1, P2 | radio de impacto, < 1 día | — |
| 3 | CEO | E4-E7 diferidas | Mechanical | P3, P4 | fuera del radio o dependen de terceros | incluirlas |
| 4 | CEO | SR1-SR21 de la revisión de spec | Mechanical | P1, P5 | contradicciones y huecos del plan | — |
| 5 | CEO | SR10 revierte el cobro por bloque | Mechanical | decisión del dueño | D55.5 manda | cobrar por 30 s sin aprobación |
| 6 | CEO | CV1-CV8 de las voces y secciones | Mechanical | P1, P4, P5 | riesgo legal, calidad y errores | — |
| 7 | CEO | T3 y T4 a la puerta | Taste | — | cambian decisiones del dueño | auto-decidirlas |
| 8 | Design | DV1-DV11 | Mechanical | P5, P1 | huecos estructurales y DESIGN.md | — |
| 9 | Design | Sin `<track>` | Taste | P5 | subtítulos abiertos + guion cumplen WCAG 1.2.2 | pista de subtítulos |
| 10 | Design | T5 a la puerta | Taste | — | Codex pedía comparación persistente | auto-decidir |
| 11 | Eng | Arreglo original de archivos | Mechanical | P2 | nunca reducir alcance | arreglo más chico |
| 12 | Eng | EV1-EV15 | Mechanical | P5, P3 | pruebas ciegas, ancla, tope inventado, ARIA sin JS | — |

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` (vía /autoplan) | Scope & strategy | 1 | CLEAR (PLAN via /autoplan) | 7 proposals, 3 accepted, 4 deferred |
| Outside Review | codex `gpt-5.6-terra` (autoplan, CEO/design/eng) | Independent 2nd opinion | 3 | CEO: unavailable (missing_markers); design: completed; eng: completed | design 10 findings, eng 13 findings; resueltos en DV y EV o enviados a la puerta |
| Eng Review | `/plan-eng-review` (vía /autoplan) | Architecture & tests (required) | 1 | CLEAR (PLAN via /autoplan) | 10 issues, 0 critical gaps (todas con requisito aceptado) |
| Design Review | `/plan-design-review` (vía /autoplan) | UI/UX gaps | 1 | CLEAR (PLAN via /autoplan) | score: 3/10 → 7/10, 11 decisions |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | SKIPPED | sin alcance para desarrolladores |

- **OUTSIDE COVERAGE:** codex, fase CEO: unavailable (la respuesta no traía la línea «Recommendation: … because …»); fase de diseño: completed, 10 hallazgos; fase de ingeniería: completed, 13 hallazgos.
- **CROSS-MODEL:** diseño 6/7 de la tabla de comprobación confirmados por Claude y Codex; ingeniería 4/6 dimensiones confirmadas; los dos coincidieron en el hallazgo crítico de ingeniería (el bloque nuevo rompía el contrato de pruebas).
- **VERDICT:** CEO + DESIGN + ENG CLEARED, plan aprobado por el dueño el 21-oct-2026; listo para construir tras G1 (demanda y slug).

NO UNRESOLVED DECISIONS

