<!-- /autoplan restore point: "C:\\Users\\JosimarG\\Projects\\elementoweb\\.gstack\\tmp\\autoplan\\main-autoplan-restore-20261021-231921.md" -->

> **APROBADO** por el dueño el 22-oct-2026 (puerta de /autoplan main-20261021-231921, gate_rev 1, respuesta «rec»): H1 de D50 como etiqueta pequeña (uc1a); construir ya y publicar después del 18-nov (uc2a); sin franja de pruebas (uc3b); dos PR, primero menú, pie y grupos (d1a); menú y pie monocromo en todo el sitio con los héroes navy de servicio intactos (d2a); segundo botón «Ver soluciones» (d3a); reversión pre-autorizada si el día P da Lighthouse móvil < 85 o LCP > 3,5 s.


## Implementation plan
# Plan: portada v3, agencia de marketing digital + proyectos de IA (D56)

Mockup aprobado por el dueño el 21-oct-2026: `~/.gstack/projects/josimarguilbaud-elementoweb/designs/home-stripe-20261021/home-mezcla-IL-v2.png` (pantallas sueltas: `r3/I-1.png` para el héroe y `mix/s2.png` a `mix/s6.png` para el resto). Viene de 3 rondas de fal (variantes A a L) y de la mezcla de I (Grafito suave) con L (Tipográfico).

## Por qué

El dueño quiere que `/` presente a Elemento Web como agencia de marketing digital y de proyectos de IA, con un look SaaS premium (referencias: stripe.com/es-us y satia.so), en vez de la portada v2 grafito centrada en diseño web (D51, D53, D54). El diseño web no desaparece: tiene una sección propia.

## Reglas que dio el dueño (no se renegocian aquí)

1. UI monocromo: negro `#0A0A0A`, blanco, grises (`#F5F5F5`, `#E5E5E5`, `#A3A3A3`, `#737373`). Color solo en fotos, capturas de webs y renders 3D.
2. La escultura del héroe va en cromo plateado (no a color).
3. Roboto en todo el sitio (regla del 12-oct-2026, sigue vigente).
4. Sin precios y sin sección de proyectos en la portada.
5. Megamenú y footer al estilo Stripe.
6. Bloques limpios, nada apiñado.
7. Mismas URLs en todo el sitio.

## Qué cambia

### Portada `/` (src/pages/index.astro, src/lib/portada.ts, src/styles/portada.css)

Las 13 secciones de la v2 se reemplazan por 8:

1. **Héroe** (pantalla `r3/I-1.png`): fondo `#F5F5F5`, etiqueta pequeña (Roboto 500, 14 px, mayúscula y minúscula normales, como máximo 2 líneas a 390 px), titular de display de dos líneas «Marketing que vende. / IA que trabaja.» (Roboto 800, tracking -0,025 em), una bajada de dos líneas, botón negro «Empezar proyecto →» y botón de contorno «Ver soluciones». A la derecha, una imagen fija de la escultura de cromo (render a WebP, ≤ 60 KB a 800 px, ancho y alto declarados). Abajo, entre filetes, la franja de 6 servicios enlazados: Google Ads · Meta Ads · SEO y GEO · WhatsApp API · Agentes IA · Diseño web.
2. **Díptico** (`mix/s2.png`): mitad blanca «01 Marketing digital» y mitad negra «02 Proyectos de IA», cada una con su línea, una lista de 3 enlaces con flecha y filetes, y una foto a color.
3. **Bento de servicios** (`mix/s3.png`): «Todo lo que tu marca necesita para crecer.», 5 tarjetas blancas (Publicidad en Google y Meta, SEO y GEO, WhatsApp Marketing, Agentes de IA, Contenido con IA) con maquetas en HTML/CSS monocromo y, donde hay imagen (anuncio, miniaturas de video, producto), imagen a color. Cada tarjeta enlaza a su página.
4. **Diseño web** (`mix/s4.png`, sección nueva): «Webs que trabajan como un vendedor.», lista de Sitios corporativos, Landing pages, Tiendas online con Yappy y Desarrollo a medida, botón «Ver diseño web →» a `/diseno-web-panama/`. A la derecha, tres capturas reales del portafolio en marcos de navegador grises más un celular. Son capturas de clientes reales (las que ya existen en `/images/ejemplos/`), no las del mockup.
5. **Proyectos de IA** (`mix/s5.png`): bloque negro redondeado, titular, línea, botón blanco «Agendar diagnóstico →» y el diagrama WhatsApp → Agente IA → CRM → Reporte en SVG en línea. Debajo, la franja de confianza: API oficial de WhatsApp · Tech Provider verificado por Meta · Respuesta el mismo día hábil.
6. **Respuesta citable** (no está en el mockup; se conserva por GEO): el párrafo de 40 a 60 palabras con fecha que ya existe, reescrito para marketing + IA, como bloque de texto sobrio entre Proyectos de IA y Preguntas.
7. **Preguntas frecuentes** (`mix/s6.png`): `details` nativos con el mismo texto que el FAQPage, 6 o más preguntas (agencia de marketing digital, agente de IA, diseño web, API oficial de WhatsApp, fuera de Panamá, cómo se cotiza).
8. **«Hablemos.»** con botón a `#formulario` y el formulario de contacto que ya está en producción (ContactForm), en blanco.

### Imágenes

La escultura de cromo plateado y las fotos a color del díptico y del bento se generan con fal y se guardan en `public/images/portada-v3/` con un `CREDITOS.json` que lleva, por archivo, `archivo`, `ancho`, `bytes`, `limite_bytes`, modelo, prompt, fecha y costo; el gasto se registra antes con `scripts/gasto-ia.mjs`. Límites: escultura WebP de 800 px ≤ 60 KB y de 400 px ≤ 25 KB; fotos del díptico WebP de 800 px ≤ 60 KB; imágenes de las tarjetas del bento WebP de 600 px ≤ 40 KB. Sin fotos de bancos de imágenes (D45). Las capturas de la sección de diseño web son las reales de `/images/ejemplos/`.

### Destinos de los enlaces (todas las URL ya existen)

| Elemento | Destino |
|---|---|
| Héroe «Empezar proyecto» | `#formulario` (`data-cta-loc="hero"`) |
| Héroe «Ver soluciones» | `#soluciones` (el díptico) |
| Franja: Google Ads, Meta Ads, SEO y GEO, WhatsApp API, Agentes IA, Diseño web | `/marketing/google-ads-panama/`, `/marketing/facebook-instagram-ads-panama/`, `/crecimiento/seo-posicionamiento-web-panama/`, `/marketing/whatsapp-marketing-masivo-panama/`, `/inteligencia-artificial-para-empresas-panama/`, `/diseno-web-panama/` |
| Díptico 01 Marketing digital | Google y Meta Ads (`/marketing/`), SEO y GEO (`/crecimiento/seo-posicionamiento-web-panama/`) y WhatsApp Marketing (`/marketing/whatsapp-marketing-masivo-panama/`) |
| Díptico 02 Proyectos de IA | Agentes de IA (`/inteligencia-artificial-para-empresas-panama/`), Chatbots (`/funcionalidades/chatbots-ia-web-wazacrm-panama/`) y Automatización con n8n (`/marketing/automatizaciones-n8n-panama/`) |
| Bento | Publicidad → `/marketing/`; SEO y GEO → `/crecimiento/seo-posicionamiento-web-panama/`; WhatsApp Marketing → `/marketing/whatsapp-marketing-masivo-panama/`; Agentes de IA → `/inteligencia-artificial-para-empresas-panama/`; Contenido con IA → `/marketing/videos-publicitarios-panama/` |
| Proyectos de IA «Agendar diagnóstico» y «Hablemos.» | `#formulario` |
| «Hablar con ventas» del menú | WhatsApp, con el enlace de `wa()` de `site.ts` (se abre en otra pestaña, con aviso para lector de pantalla) |
| Díptico | lleva `id="soluciones"` |
| Panel Marketing | `marketing` e `iaCreativa` de `site.ts`; tarjeta: Videos publicitarios |
| Panel Inteligencia artificial | IA para empresas, Chatbots, Automatizaciones (n8n) y `saas`; tarjeta: IA para empresas (WhatsApp Marketing queda solo en Marketing) |
| Panel Diseño web | las columnas Diseño Web, Tecnologías y Funcionalidades de `cols`, e Industrias (`/industrias/`); tarjeta: `/diseno-web-panama/` |
| Panel Recursos | Blog, Guías, Recursos, Casos de éxito, Cómo trabajamos, Proyectos (`/portafolio/`), Precios, Miami y la columna Crecimiento de `cols`; tarjeta: `/guias/` |
| Los dos «Empezar proyecto» del menú (píldora de escritorio y botón del menú móvil) | `/contacto/`; en la portada, `#formulario` |
| Pie, 5 columnas | Marketing (`marketing`, `iaCreativa`), Inteligencia artificial (los del panel IA y `saas`), Diseño web (Diseño Web, Tecnologías y Funcionalidades de `cols`), Recursos (los del panel Recursos), Empresa (Nosotros, Contacto, correo, WhatsApp, dirección y horario); debajo, las franjas de Miami, industrias y legales de hoy |

### Menú (src/components/Navbar.astro), en todo el sitio

Barra blanca fija con filete inferior: logo, cuatro disparadores («Marketing», «Inteligencia artificial», «Diseño web», «Recursos») y el enlace «Nosotros»; a la derecha «Hablar con ventas» (WhatsApp) y botón negro «Empezar proyecto →» (el actual «Cotizar»). Cada disparador abre un panel blanco al estilo Stripe (radio 12, sombra suave, columnas con icono de línea, título y una línea gris). Los paneles conservan todos los enlaces de hoy (`cols`, `marketing`, `iaCreativa`, SaaS, Industrias, Miami, Blog, Proyectos, Precios). Se mantiene el comportamiento accesible actual (botones con `aria-expanded`, `inert`, Escape devuelve el foco) y el menú móvil a pantalla completa, en blanco, como acordeón por grupo con los mismos enlaces que las listas del escritorio. Cada panel de escritorio lleva además una tarjeta destacada sin imagen (fondo `#F5F5F5`, título, una línea y flecha) con enlace a una página existente, que también está en la lista del panel (en móvil no hay tarjeta). Los íconos de los paneles son SVG de línea propios, en línea, de 20 px y trazo de 1,5 px, con `aria-hidden`; no entra una librería de íconos.

### Pie (src/components/Footer.astro), en todo el sitio

Fondo `#F5F5F5`, filete superior, logo y «Ciudad de Panamá · Miami» a la izquierda, 5 columnas (Marketing, Inteligencia artificial, Diseño web, Recursos, Empresa) y debajo las franjas que ya existen de Miami, industrias y legales, en gris. No se pierde ningún enlace interno de hoy. El bloque de cierre de las páginas internas se conserva con su texto y su botón, en monocromo (fondo `#0A0A0A`, texto blanco, botón blanco), como parte del pie; se comprueba con `qa-a11y` en `/contacto/`, `/diseno-web-panama/` y una página de servicio.

### Sistema de diseño (DESIGN.md)

Nueva variante «portada v3 monocromo» que reemplaza a «portada grafito» en `/`, y tokens monocromo para el menú y el pie. Pares de texto permitidos: sobre `#FFFFFF`, `#0A0A0A`, `#525252` o `#737373`; sobre `#F5F5F5`, `#0A0A0A` o `#525252`, y `#737373` solo en la segunda línea del titular de display (texto grande); sobre `#0A0A0A` (mitad negra del díptico y bloque de Proyectos de IA), `#FFFFFF` o `#A3A3A3` (unos 7,8:1), y `#737373` nunca; `#A3A3A3` y `#E5E5E5` nunca en texto sobre fondos claros, solo en filetes y adornos. En `/` quedan suspendidas dos reglas de DESIGN.md: «publicar el precio de partida junto al botón» y la estrella norte «Comprobante» como pieza de la portada. Las páginas de servicio siguen con su portada marino hasta otro plan (va a `TODOS.md`).

## SEO y GEO

- El title, la description y el canonical de `/` no cambian.
- **H1:** el texto del H1 de D50 («Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp») va en la etiqueta pequeña del héroe, como H1 real; el titular grande es un `p` de display. Así el H1 no cambia y no hace falta la línea base nueva que pide DESIGN.md. Costo: el H1 dice «diseño web» y el resto de la página dice marketing e IA; buscadores y asistentes leen dos mensajes. Decisión para la puerta (ver Preguntas abiertas).
- Schema: se conservan Organization, WebSite, el ItemList de servicios (por `@id`, sin Offer, como hoy por R37) y FAQPage; no se agrega ninguna Offer.
- La respuesta citable y las preguntas frecuentes siguen en el HTML sin JavaScript.
- `seo-congelado`: la entrada que `/` ya tiene en `scripts/cambios-permitidos.json` (`["description","h1","schema"]`) se conserva, porque `audit/seo-snapshot.json` es anterior a D50 y el H1 y la description de D50 ya difieren de él; solo se actualiza su `motivo` para citar D56. Se edita por línea de ruta, nunca por coincidencia de texto. El texto de la respuesta citable y de las preguntas no es un campo congelado (el FAQPage entra en `schema`); las ~250 páginas cambian de menú y pie, que no son campos congelados.
- Enlaces internos: el conteo de enlaces del menú y del pie no baja (prueba nueva).

## Ingeniería

- Reusar: `ContactForm.astro`, `MarcoCaptura.astro`, `Pic.astro`, los datos de `site.ts` (`cols`, `marketing`, `iaCreativa`, `saas`, `legal`) y `track.ts` (`data-cta-loc`, `data-service`).
- Retirar de `/`: cascada de proyectos, paneles apilados (D53, con su GSAP diferido), vitrina (D54), precios, industrias, comparación, desarrollo, «lo que no hacemos». Los componentes que solo usa la portada se borran; los que usan otras páginas se quedan.
- `piel-grafito.css` deja de cargarse en `/`.
- El menú (escritorio y móvil) abre con transiciones CSS y conserva la lógica accesible del script actual; deja de importar GSAP, que hoy entra en el JS inicial de todas las páginas.

## Movimiento

- Efectos premium con GSAP en `/` (pedido del dueño del 21-oct), desde un solo módulo `src/scripts/movimiento.ts` que solo carga la portada: revelados por sección con CSS `animation-timeline: view()` donde haya soporte, y GSAP con ScrollTrigger para el trazo del diagrama de IA, el armado de las maquetas del bento, el parallax de la escultura y los titulares de sección por líneas.
- GSAP y ScrollTrigger se piden con `import()` en la primera interacción real (rueda, toque, puntero o tecla; nunca el evento `scroll`), nunca en la carga ni en el tiempo libre (la reversión de D53 vino de pedirlo en el tiempo libre).
- El elemento LCP (titular de display o escultura) no tiene animación de entrada y se pinta sin JavaScript. La entrada del héroe es solo CSS, en la etiqueta, la bajada, los botones y la franja, con un desplazamiento de 8 px y sin opacidad inicial menor a 1.
- Sin JavaScript todo es visible; con `prefers-reduced-motion` no hay movimiento; si el `import()` falla, la página queda completa y estática. Solo se anima `transform`, `opacity` y `clip-path`.
- Paso de CSS a GSAP: cada elemento animado lleva `data-mov="css"` o `data-mov="gsap"`, nunca los dos. Al cargar GSAP en la primera interacción, los revelados `gsap` (los que parten de un estado oculto o desarmado) solo se preparan si su borde superior está por debajo del borde inferior de la ventana; los que ya están a la vista quedan en su estado final, sin salto. Los efectos ligados al scroll que nunca ocultan contenido (el parallax de la escultura, con `scrub`) quedan fuera de esa regla y corren aunque el elemento ya esté a la vista. Los revelados `css` nunca empiezan con opacidad menor a 1 en el texto: se mueven con `transform` y las imágenes pueden aparecer con `clip-path`.
- La escultura del héroe: `<img>` con `srcset` de 400 y 800 px, `sizes`, `width` y `height` y `fetchpriority="high"`; el titular de display usa la fuente ya precargada. Ambos candidatos a LCP cumplen la regla.

## Pruebas (primero)

- `scripts/portada.test.mjs`: reescribir las pruebas de la v2 para la v3 (8 secciones, H1 igual a D50, franja de 6 servicios con su URL, 6 o más preguntas con el mismo texto que el FAQPage, respuesta citable de 40 a 60 palabras con fecha, sin cifras «$» en la portada, sin sección de proyectos, cada `#formulario` existe una vez, cada `@id` del ItemList existe como Service).
- Prueba nueva de menú y pie: todos los enlaces de hoy siguen presentes (lista fija tomada del HTML actual) y los dos «Empezar proyecto» van a `/contacto/`, o a `#formulario` en la portada.
- `seo-congelado`, `qa-seo`, `qa-a11y` (contraste AA de cada par gris), `qa-lcp`, `qa-responsive` y `qa-sr` en verde.
- Medición: héroe y botón principal visibles a 1440×900 y 390×844; Lighthouse móvil ≥ 90 local.
- `scripts/qa-movimiento.mjs` (nuevo, con `playwright-core` como los demás `qa-*`): (1) con JavaScript apagado, al llevar cada sección a la vista y esperar 1 s, todo su texto tiene opacidad 1 y ningún `display:none` ni `visibility:hidden`; (2) con `prefers-reduced-motion` ningún elemento cambia de `transform` ni de opacidad, incluidos los paneles del menú, que abren sin transición; (3) ni GSAP ni ScrollTrigger se piden antes de la primera interacción; (4) informa los bytes de JS propio pedidos antes de la primera interacción (el tope lo pone `scripts/presupuestos.json`; la analítica de terceros, gtag, se informa aparte y no cambia cuándo carga); (5) el TBT de Lighthouse móvil local (mediana de 3 corridas, reusando `scripts/medir.mjs`, que necesita el CLI `lighthouse` instalado; si falta, el script falla con ese mensaje) es ≤ 200 ms; (6) el elemento LCP, leído con un PerformanceObserver, tiene opacidad 1 y ningún `clip-path` en su primer cuadro; (7) con la CPU frenada 4 veces, un scroll simulado como primera interacción carga GSAP y la suma de tiempo de bloqueo de las tareas largas en los 3 s siguientes es ≤ 200 ms; (8) ningún elemento tiene a la vez `data-mov="css"` y `data-mov="gsap"`. Imprime PASS o FAIL con los valores medidos. El camino sin soporte de `animation-timeline` (revelados apagados) se acepta sin prueba automática: solo quita movimiento.
- Prueba de imágenes: cada archivo de `public/images/portada-v3/` existe, su tamaño coincide con `bytes` y no pasa de `limite_bytes` en `CREDITOS.json`.
- Primer paso, antes de tocar Navbar o Footer: guardar la lista de enlaces del menú y del pie del build actual en `scripts/fixtures/enlaces-menu-pie.json`; la prueba de menú y pie compara contra ese archivo.
- `portada.test.mjs` también comprueba que el díptico tiene `id="soluciones"` y que «Hablar con ventas» usa el enlace de WhatsApp de `wa()` de `site.ts`.
- Línea base medida el 21-oct en `dist/` [measured: build del 21-oct]: el JS propio que `/` pide antes de la interacción suma 30,0 KB comprimidos, de los que 27,7 KB son GSAP importado por el menú; sin él quedan unos 2,4 KB.

## Publicación

- Rama propia y PR; push a `main` despliega a producción (no hay staging).
- Antes del merge, bloqueante: `npm run verify`, que ahora corre también `qa-movimiento` (con Lighthouse móvil local ≥ 90), `qa-responsive` y `qa-sr`.
- Fecha: la decide el dueño en la puerta (pregunta abierta 2). La v3 también retira la vitrina de D54, cuya lectura de GA4 es el 18-nov.
- Día P: Lighthouse móvil en producción ≥ 85 y LCP ≤ 3,5 s, si no se revierte (D14).
- Reversión: el PR se integra con un merge commit (no squash ni rebase); al integrarlo se etiqueta ese commit como `portada-v3`. Revertir es `git revert -m 1 portada-v3`, que restaura portada, menú y pie de todo el sitio a la vez, seguido de `npm run verify`, push con permiso del dueño, `gh run watch <id> --exit-status` y `bash scripts/check-prod.sh`. Antes de revertir se listan los commits posteriores sobre Navbar y Footer (`git log portada-v3..main -- src/components/Navbar.astro src/components/Footer.astro`) y se decide uno por uno qué se conserva; el paso 0 es apagar el movimiento con `data-mov-off`.
- Lecturas de Search Console y GA4 contra la línea base, como en D51.

## Preguntas abiertas (para la puerta)

1. **H1:** conservar el texto de D50 como etiqueta pequeña (recomendado) o cambiarlo a marketing + IA con una línea base nueva de Search Console.
2. **Fecha:** la v2 se publicó el 15-oct y tiene lecturas de Search Console el 29-oct y el 12-nov; publicar la v3 antes contamina esa medición.
3. **Alcance del menú y el pie:** todo el sitio a la vez o solo la portada primero. Si es todo el sitio, valen tal cual las reglas de menú, pie, reversión y pruebas de enlaces de este plan. Si es solo la portada, `Navbar` y `Footer` reciben una prop `variante="monocromo"` que solo pasa `/`: el resto del sitio queda igual (incluido el GSAP del menú móvil), la prueba de enlaces corre en `/` y en una página interna para comprobar que esa no cambió, y la reversión sigue siendo el mismo merge commit.

## Fuera de alcance

- Portadas de las páginas de servicio (siguen en marino); va a TODOS.md (E4), junto con la imagen OG nueva de la portada (E6).
- Nuevas páginas o URLs.


<!-- autoplan-accepted:ceo -->
- Efectos premium con GSAP en la portada `/`, por pedido del dueño del 21-oct («todo este diseño debe llevar efectos bien premium gasp»): revelados por sección, trazo animado del diagrama de IA, maquetas del bento que se arman al entrar, parallax suave de la escultura y titulares de sección por líneas. Reemplaza la línea de «Fuera de alcance» que dejaba el héroe sin animación. Condiciones: (a) el elemento LCP (titular de display o escultura) no tiene animación de entrada y se pinta sin JavaScript en su primer cuadro, sin `opacity:0` ni `clip-path` cerrado; (b) la entrada del héroe es solo CSS y solo en elementos que no son LCP (etiqueta, bajada, botones y franja), con `transform` de 8 px y sin `opacity` inicial menor a 1; (c) todo el contenido es visible sin JavaScript; (d) con `prefers-reduced-motion` no hay movimiento; (e) GSAP y ScrollTrigger se piden con `import()` en la primera interacción del visitante (scroll, puntero, tecla o toque), nunca en la carga ni en el tiempo libre; (f) se anima solo `transform`, `opacity` y `clip-path`. Verificación: `scripts/qa-movimiento.mjs` (nuevo) y Lighthouse móvil ≥ 90 local antes del merge y ≥ 85 en producción.
- E1: un solo módulo `src/scripts/movimiento.ts`, cargado solo en `/`. Dos niveles: revelados por sección con CSS `animation-timeline: view()` donde el navegador lo soporte (sin JavaScript), y GSAP con ScrollTrigger para trazos, armado de maquetas y parallax. Si el `import()` falla, la página queda completa y estática. El megamenú no usa GSAP: sus paneles abren con transiciones CSS en todo el sitio. Verificación: `qa-movimiento` comprueba que ni GSAP ni ScrollTrigger se piden antes de la primera interacción.
- E2: presupuesto de rendimiento como prueba en `scripts/qa-movimiento.mjs`: el JS propio que la portada pide antes de la primera interacción suma ≤ 60 KB comprimido (incluido el del menú; la analítica de terceros, gtag, se informa aparte y no cambia cuándo carga), el TBT de Lighthouse móvil local (mediana de 3 corridas) es ≤ 200 ms y, con la CPU frenada 4 veces, el bloqueo en los 3 s después de un scroll simulado (cuando entra GSAP) es ≤ 200 ms. Para cumplirlo, el menú móvil deja de importar GSAP y abre con CSS. Verificación: `qa-movimiento` imprime PASS o FAIL con los bytes y el TBT medidos.
- E3: cada panel del megamenú de escritorio lleva una tarjeta destacada con enlace a una página existente; ese enlace también está en la lista del panel. Verificación: prueba de enlaces del menú.
- E7: menú móvil como acordeón por grupo, con los mismos enlaces que las listas del escritorio (sin las tarjetas destacadas). Verificación: prueba de paridad de enlaces entre escritorio y móvil.
- Imágenes: la escultura de cromo plateado y las fotos a color del díptico y del bento se generan con fal y se guardan en `public/images/portada-v3/` con un `CREDITOS.json` que lleva, por archivo, `archivo`, `ancho`, `bytes`, `limite_bytes`, modelo, prompt, fecha y costo; el gasto se registra antes con `scripts/gasto-ia.mjs`. Límites: escultura 800 px ≤ 60 KB y 400 px ≤ 25 KB; díptico 800 px ≤ 60 KB; bento 600 px ≤ 40 KB. Sin fotos de bancos de imágenes (D45). Las capturas de la sección de diseño web son las reales de `/images/ejemplos/`. Verificación: prueba de que cada imagen nueva existe, su tamaño coincide con `bytes` y no pasa de `limite_bytes`.
- Prueba de menú y pie contra `scripts/fixtures/enlaces-menu-pie.json`, guardado del build actual antes de tocar Navbar o Footer; «Hablar con ventas» usa `wa()` y el díptico lleva `id="soluciones"`. Verificación: la prueba de menú y pie y `portada.test.mjs`.
- Con `prefers-reduced-motion` los paneles del menú abren sin transición. Verificación: `qa-movimiento` (2).
- El parallax de la escultura (ligado al scroll, nunca oculta contenido) queda fuera de la regla de «solo elementos por debajo de la ventana».
- Contraste de grises: texto sobre `#FFFFFF` solo en `#0A0A0A`, `#525252` o `#737373`; texto sobre `#F5F5F5` solo en `#0A0A0A` o `#525252`, salvo la segunda línea del titular de display (texto grande) en `#737373`; texto sobre `#0A0A0A` en `#FFFFFF` o `#A3A3A3`, nunca `#737373`; `#A3A3A3` y `#E5E5E5` nunca van en texto sobre fondos claros (solo filetes y adornos). Verificación: `qa-a11y` en verde.
- Reversión: el PR se integra con merge commit, etiquetado `portada-v3` al integrarlo; `git revert -m 1 portada-v3` restaura portada, menú y pie de todo el sitio a la vez. Verificación: el plan de publicación nombra el comando.
- Enlaces: cada enlace de la portada, del menú y del pie va al destino de la tabla «Destinos de los enlaces», y todos son URL que ya existen. Verificación: la prueba de menú y pie y `check-links` en verde.
- Paso de CSS a GSAP sin saltos: ningún elemento con `data-mov="css"` y `data-mov="gsap"` a la vez, y GSAP solo prepara elementos que aún están por debajo de la ventana. Verificación: `qa-movimiento` (8).
- TODOS.md recibe dos entradas al cerrar la revisión: E4 (páginas de servicio al sistema monocromo) y E6 (imagen OG nueva de la portada).
- Sección 4: cada sección con ancla (`#soluciones`, `#formulario`) lleva `scroll-margin-top` igual a la altura del menú fijo, para que el salto no quede tapado. Verificación: `portada.test.mjs` lee el valor en el CSS.
- Sección 5: todas las clases nuevas de la portada usan el prefijo `pv3-` y no aparecen fuera de `main` (lección de D53, donde `.pv2-panel` chocó con otra sección); las listas del menú y del pie salen de una sola estructura de grupos en `site.ts`, sin repetir enlaces a mano. Verificación: prueba de que ninguna regla `pv3-` toca elementos fuera de `main`.
- Sección 8: los botones nuevos llevan `data-cta-loc` (`hero`, `soluciones`, `ia`, `hablemos`, `header`) y `data-service`, y `docs/event-dictionary.md` registra los valores nuevos. Verificación: `portada.test.mjs` comprueba que cada CTA tiene los dos atributos.
- Sección 11: ninguna imagen generada sugiere ser de un cliente real; las maquetas del bento llevan la nota «Ejemplo» como pide DESIGN.md; el texto alternativo describe la imagen sin inventar clientes. Verificación: revisión en `qa-a11y` del texto alternativo y prueba de la nota «Ejemplo» en el bento.
<!-- /autoplan-accepted:ceo -->

<!-- autoplan-accepted:design -->
- Un trabajo por bloque: la franja orienta (6 enlaces, uno por servicio); el díptico hace elegir camino con 3 enlaces por mitad (Marketing digital: Google y Meta Ads, SEO y GEO, WhatsApp Marketing; Proyectos de IA: Agentes de IA, Chatbots, Automatización con n8n); el bento muestra cómo se ve el resultado, con una sola flecha por tarjeta. Cada servicio tiene un solo dueño en la estructura de grupos de `site.ts` (Videos y Contenido con IA pertenecen a Marketing), y portada, menú y pie leen de ahí. Verificación: `portada.test.mjs` cuenta 3 enlaces por mitad del díptico y comprueba que ningún servicio aparece en dos grupos.
- Etiqueta del héroe (si la puerta conserva el H1 de D50): mayúscula y minúscula normales, Roboto 500 a 14 px, `#525252` sobre `#F5F5F5`, como máximo 2 líneas a 390 px. Verificación: la prueba de primera pantalla mide su alto a 390×844.
- Estados de interacción, en DESIGN.md (variante v3) y en el CSS: anillo de foco de 2 px con 2 px de separación, `#0A0A0A` sobre fondos claros y `#FFFFFF` sobre `#0A0A0A`; enlaces de texto con subrayado al pasar y al enfocar; botón negro a `#262626` al pasar, botón blanco a `#E5E5E5`, contorno con fondo `#FFFFFF`; disparador del menú abierto con subrayado de 2 px y `aria-expanded=true`; tarjetas del bento con la flecha desplazada 4 px al pasar (sin sombra nueva); preguntas con `details` nativos, el «+» pasa a «−», se pueden abrir varias; imágenes con `aspect-ratio` fijo y fondo `#E5E5E5` mientras cargan; enlaces visitados en el cuerpo con `#525252`. Verificación: `qa-a11y` mide el anillo de foco sobre fondo claro y sobre negro.
- Formulario en monocromo, con los estados de D22: error con icono, borde de 2 px `#0A0A0A` y texto que dice cómo corregir, unido con `aria-describedby` y foco al primer campo inválido; enviando con el botón desactivado y el texto «Enviando…»; éxito que reemplaza el formulario y recibe el foco; fallo de red con el mensaje de D22 y el enlace de WhatsApp como salida. Cada CTA que baja al formulario preselecciona su servicio (`hero` → definir, bloque de IA → proyectos de IA, «Hablemos.» → definir) y se ve «Servicio: X · cambiar». Verificación: `qa-form` en verde con la portada v3.
- Diseño por ancho (1440, 768 y 390 px). Héroe: a 390 el texto va primero y la escultura debajo a 280 px de ancho; etiqueta, titular y botón principal en la primera pantalla. Franja: a 390 se envuelve en 2 filas de 3, cada enlace de 44 px de alto. Díptico: a 768 y 390 se apila, primero la mitad blanca, la foto después de la lista. Bento: 1440 en dos filas (una tarjeta ancha y una angosta, luego tres iguales); 768 en dos columnas; 390 en una. Diseño web: a 390 una sola captura en navegador más el celular. Diagrama de IA: vertical por debajo de 768. Pie: 5 columnas a 1440, 2 a 768 y 390. Menú: escritorio desde 1200 px; por debajo, el botón del menú móvil de 44×44 px. Todo blanco táctil mide 44 px o más. Verificación: `qa-responsive` toma las tres anchuras y falla si algún blanco táctil mide menos de 44 px.
- Megamenú: abre con clic y teclado siempre, y al pasar el puntero con 150 ms de espera; cierra con 180 ms al salir. Paneles: Marketing 2 columnas (560 px), Inteligencia artificial 2 columnas (560 px), Diseño web 3 columnas (820 px), Recursos 2 columnas con subtítulos «Aprender» (Blog, Guías, Recursos, Casos de éxito, Cómo trabajamos) y «Explorar» (Proyectos, Precios, Miami y la columna Crecimiento) (640 px). Verificación: prueba de menú y pie.
- El bloque de cierre del pie no aparece en `/` (la portada termina en «Hablemos.» y su formulario), como hoy con `cierre={false}`. Verificación: `portada.test.mjs`.
- Escala tipográfica en Roboto, en DESIGN.md: display `clamp(2.5rem, 1.6rem + 4vw, 4.5rem)` 800; título de sección `clamp(2rem, 1.4rem + 2vw, 3rem)` 800 con tracking -0,02 em; título de tarjeta 1,25 rem 700; bajada 1,125 rem 400; cuerpo 1,0625 rem 400 con 62 caracteres de ancho máximo; etiqueta 0,875 rem 500. Espaciado vertical entre secciones: 128, 96 y 72 px (1440, 768 y 390). Verificación: `portada.test.mjs` lee los tokens en el CSS.
- Accesibilidad del movimiento: los titulares partidos por líneas conservan el texto completo en `aria-label` y los fragmentos van con `aria-hidden`; no se parten por debajo de 768 px y se vuelven a partir al redimensionar; el parallax de la escultura se apaga por debajo de 768 px; las maquetas del bento sin JavaScript se ven en su estado final. El diagrama SVG lleva `role="img"` y un `aria-label` que describe el flujo. Verificación: `qa-sr` y `qa-movimiento`.
- Intención del movimiento: un solo momento de autor en la primera pantalla (la entrada CSS del héroe); en el resto, tres momentos de GSAP (trazo del diagrama, armado del bento y parallax) y revelados de sección de 16 px y 400 ms con ease-out, una sola vez por sección. Verificación: revisión en `/design-review` tras construir.
- Respuesta citable como ficha: etiqueta «En resumen», texto de 20 px, fecha en `#525252`, 680 px de ancho máximo, entre el bloque de IA y las preguntas. Verificación: `portada.test.mjs` (40 a 60 palabras y fecha).
- Dirección de arte de las imágenes generadas: escultura de cromo plateado sobre fondo neutro; foto del díptico de marketing: un celular con un anuncio de un negocio panameño; foto del díptico de IA: una persona en una oficina de Panamá frente a una laptop con un asistente de chat; bento: creativo de anuncio, miniaturas de video y producto. Ninguna muestra marcas reales ni sugiere ser de un cliente; el texto alternativo describe la imagen. Verificación: revisión en `/design-review`.
<!-- /autoplan-accepted:design -->

<!-- autoplan-accepted:dx -->
- Una sola puerta de merge: `scripts/verify.mjs` suma tres pasos, `qa-movimiento`, `qa-responsive` y `qa-sr`, después de `qa-lcp`; el CI de despliegue ya corre `npm run verify`, así que la puerta no se puede saltar sin querer. Verificación: `npm run verify` falla si cualquiera de los tres falla.
- Un solo presupuesto de JS: el de `scripts/presupuestos.json` (`portada.jsGzipMax`, hoy 36 400 B, medido 35 201 B el 13-oct). Al sacar GSAP del menú se baja al medido nuevo más un 20 %, con el motivo en su `_nota` y en el commit. `qa-movimiento` solo informa los bytes y deja de tener su propio tope de 60 KB; esto reemplaza la parte de bytes de E2 (la parte de TBT y de la tarea larga sigue). Verificación: `presupuestos` en verde con el tope nuevo.
- Migración de las pruebas de la v2: `qa-lcp.mjs` pierde los chequeos de la cascada, de la vitrina (D54) y de los paneles apilados (D53) y gana los del héroe v3; `qa-a11y.mjs` pierde los de la vitrina y los IDs del formulario v2 que cambien; `portada.test.mjs` se reescribe entero. Ninguna prueba vieja queda en verde por no encontrar su selector. Verificación: cada script de `qa-*` imprime qué secciones probó.
- Contrato de `scripts/qa-movimiento.mjs`: se invoca como los demás `qa-*`, `node scripts/qa-movimiento.mjs [base]` (por defecto `http://localhost:4610`, con el servidor de `verify`). Cada chequeo tiene un id estable (`MOV-01` a `MOV-08`) y su línea dice valor medido, umbral y qué cambiar (por ejemplo «MOV-03 gsap-antes-de-interaccion: pedido en la carga; mueve el import() detrás del oyente de primera interacción en src/scripts/movimiento.ts»). Sale con código 1 si algo falla, con los fallos en stderr. Si falta el CLI de Lighthouse sale con código 2 y el mensaje de instalación de `medir.mjs`; la bandera `--sin-lighthouse` imprime «SKIP MOV-05» y nunca PASS, y `verify` no la pasa. Los chequeos de tiempo (5 y 7) usan la mediana de 3 corridas e imprimen «chequeo de tiempo: correr una vez más; si falla dos veces, es real». El encabezado imprime la ruta de Chrome, la versión de Lighthouse, la URL y el freno de CPU. Un error inesperado imprime la pila y guarda captura y traza en `audit/qa-movimiento/`. Los umbrales aceptan variables de entorno solo para diagnóstico local (`MOV_TBT_MAX`); `verify` usa siempre los de este plan. Verificación: una prueba unitaria del formato de salida.
- `scripts/medir.mjs` gana `--runs N` y devuelve el TBT además de LCP, CLS y rendimiento, para que `qa-movimiento` y el día P lo usen. Verificación: `medir.test.mjs`.
- Fixture de enlaces: `node scripts/enlaces-menu-pie.mjs --write` lo genera desde un build de `main` antes de tocar Navbar o Footer (JSON ordenado con texto y destino de cada enlace y el SHA del commit de origen); `--check` lo usa la prueba. Si falta un enlace, el fallo lista las URL que faltan y dice «si es a propósito, regenera con --write y justifícalo en el commit». Verificación: la prueba de menú y pie.
- `CREDITOS.json` con claves fijas por archivo: `archivo`, `ancho`, `bytes`, `limite_bytes`, `modelo`, `prompt`, `fecha` (ISO 8601) y `costo_usd` (número). La prueba de imágenes, al fallar, imprime el archivo, los bytes reales y declarados, el límite y «vuelve a codificar con scripts/optimize-images.mjs». Verificación: la prueba de imágenes.
- Interruptor de movimiento: una constante `MOVIMIENTO_ACTIVO` en `src/scripts/movimiento.ts` y el atributo `data-mov-off` en `<html>`, que el CSS respeta, apagan todos los efectos sin tocar menú, pie ni contenido. Es el paso 0 de la reversión. Verificación: `qa-movimiento` corre una vez con `data-mov-off` y comprueba que nada se mueve.
- Runbook de reversión completo: al integrar, `git tag portada-v3 <sha del merge>` y `git push origin portada-v3` (con permiso del dueño); paso 0, el interruptor de movimiento; antes de revertir, `git log portada-v3..main -- src/components/Navbar.astro src/components/Footer.astro` y decidir commit por commit qué se conserva, sin descartar en bloque; volver a publicar la v3 después de una reversión pide revertir la reversión. Día P: `node scripts/medir.mjs https://elementoweb.com/ --runs 3` (mediana) y `bash scripts/check-prod.sh`, anotando cuántas corridas de Lighthouse se hicieron y a qué hora, para restarlas de GA4. Verificación: el runbook está en DECISIONES.md (D56).
- Bucle interno documentado en `CLAUDE.md` (sección «Portada v3: comandos»): `npm run build && node --test scripts/portada.test.mjs` para el ciclo de pruebas, `npm run verify` como puerta completa (unos 15 minutos) y el requisito del CLI `lighthouse` y de Chrome. Verificación: lectura.
- Si la puerta elige «solo la portada primero», la prop se llama `variante="monocromo"` (no `v3`). Elegir «todo el sitio» significa que la reversión de la portada arrastra el menú y el pie. Verificación: lectura del plan.
- Cada línea «Verificación» del plan lleva la marca [auto] (la corre `verify`) o [revisión] (la hace una persona o `/design-review`). La comprobación del prefijo `pv3-` busca en el HTML construido elementos con `class*="pv3-"` fuera de `<main>`. Verificación: lectura del plan.
<!-- /autoplan-accepted:dx -->

<!-- autoplan-accepted:eng -->
- Formulario: la portada usa `ContactForm`, el que ya está en producción, no `ServiceForm`, por la decisión del 17-oct (ServiceForm sigue sin activar hasta la fase 3, `ServiceForm.astro:2`). Verificación [auto]: `qa-form` y `portada.test.mjs` encuentran `ContactForm` en `#formulario`.
- Lighthouse: `lighthouse` entra como devDependency con versión fija y `medir.mjs` lo llama desde `node_modules/.bin`. En el CI (`CI=true`), `qa-movimiento` corre los chequeos deterministas (MOV-01, 02, 03, 04, 06 y 08) e imprime «SKIP MOV-05» y «SKIP MOV-07», nunca PASS. En local, `verify` los corre todos y su salida completa se pega en el PR, que no se integra sin ella. Verificación [auto]: `npm ci && npm run verify` pasa en el CI sin un CLI global; [revisión]: el PR trae la salida de MOV-05 y MOV-07.
- Navegación con un dueño por servicio: `site.ts` gana `grupos`, una tabla explícita donde cada slug tiene exactamente un dueño. WhatsApp Marketing pertenece a Marketing; Automatizaciones (n8n) y Chatbots pertenecen a Inteligencia artificial (Chatbots sale de la columna Funcionalidades de Diseño web). El menú, el pie y el acordeón móvil leen de `grupos`. El díptico y el bento son bloques de la portada, no grupos, y pueden enlazar a cualquier dueño. Verificación [auto]: prueba de que ningún slug tiene dos dueños.
- Primera interacción: GSAP se pide con `wheel`, `touchstart`, `pointerdown` o `keydown`, nunca con `scroll` (la restauración del scroll y el salto a un ancla lo disparan en la carga). Con `prefers-reduced-motion` o `data-mov-off` nunca se llama `import()`. Los revelados GSAP se preparan dentro de `requestAnimationFrame` y solo si están más de una pantalla por debajo del borde inferior. Verificación [auto]: MOV-03 corre también con `#formulario` en la URL y con el scroll restaurado; MOV-02 comprueba que no hay pedido de GSAP.
- Fixture de enlaces: `--check` compara el conjunto de hrefs internos únicos por región (menú de escritorio, menú móvil, pie): los de `main` deben estar todos en la versión nueva. El texto solo se informa. Verificación [auto]: la prueba de menú y pie.
- Menú: el corte pasa de 1024 a 1200 px en el script y en el CSS a la vez, desde `--corte-menu` y una constante. Los paneles se ocultan con `visibility` e `inert`, no con `display`, para que el cierre tenga transición; Escape devuelve el foco y el cambio de corte cierra bien aunque la transición siga. El hover abre solo con `pointerType === 'mouse'`, y pasar de un disparador a otro cambia de panel sin cerrar. El acordeón móvil atrapa el foco dentro del diálogo. Verificación [auto]: casos de playwright en `qa-a11y` para teclado, Escape, Tab sobre paneles `inert`, foco atrapado y hover táctil.
- Presupuestos: al sacar GSAP del menú se miden todas las plantillas de `presupuestos.json`, no solo la portada, y cada tope queda en lo medido más un 3 % (la regla de `presupuestos.json`), con el motivo en `subida`. Esto reemplaza el «más un 20 %» del bloque DX. Verificación [auto]: `presupuestos` en verde.
- `qa-responsive` y `qa-sr` entran a la puerta después de correrlos sobre `main`: lo que ya falle se arregla o se anota como línea base en un commit aparte, antes del trabajo de la v3. La regla nueva de 44 px se exige solo en `/`, el menú y el pie. Cada `qa-*` falla si no encuentra una sección que espera. Verificación [auto]: `verify` en verde sobre `main` con los dos pasos nuevos.
- Ancla: `--nav-h` es una variable CSS compartida por el menú y por `scroll-margin-top`; `qa-responsive` comprueba que, tras un clic en «Ver soluciones», el díptico no queda bajo la barra a 1440 y 390 px. Reemplaza la lectura del valor en el CSS. Verificación [auto].
- Titulares partidos: un `span` visualmente oculto con el texto completo y fragmentos con `aria-hidden`, en lugar de `aria-label`; el re-partido al redimensionar lleva debounce y no mueve el diseño. Verificación [auto]: `qa-sr` lee el titular completo una vez; CLS ≤ 0,1.
- LCP: MOV-06 y `qa-lcp` comprueban el elemento LCP a 390 y 1440 px. Verificación [auto].
- Selectores `.pv3-`: además de buscar en el HTML, cada selector de `portada.css` que contenga `.pv3-` empieza con `.pv3-` o con `main`. Verificación [auto].
- `CREDITOS.json` público lleva solo archivo, ancho, bytes, límite, modelo y fecha; el prompt y el costo van en `docs/specs/rediseno-elementoweb/creditos-portada-v3.json`. El enlace de WhatsApp con `target="_blank"` lleva `rel="noopener"`. Verificación [auto]: la prueba de imágenes lee los dos archivos.
- Reversión: el filtro de `git log portada-v3..main` incluye `src/lib/site.ts`, `scripts/`, `src/styles/` y `src/pages/index.astro`, además de Navbar y Footer. La salida `skip_checks` de `deploy.yml` queda documentada como vía de emergencia si `verify` falla sobre la reversión. La reversión se ensaya en una rama desechable antes del merge. Aprobar este plan en la puerta incluye autorizar la reversión si el día P da Lighthouse móvil < 85 o LCP > 3,5 s. Verificación [revisión]: runbook en D56 con el ensayo anotado.
- Partir en dos PR (menú, pie y `grupos` primero; portada después) es la recomendación de ingeniería y se decide en la puerta como T1.
- TODOS.md al cerrar: E4 (páginas de servicio a monocromo), E6 (OG nueva), alinear Node 24 del CI con Node 20 de Docker, y quitar el `npm install -g lighthouse` de los mensajes de `medir.mjs`.
- Precedencia: este bloque de ingeniería manda sobre los anteriores donde chocan. En concreto reemplaza el «scroll» como disparador en la condición (e) de efectos premium, el `aria-label` de los titulares partidos en Accesibilidad del movimiento, la lectura de `scroll-margin-top` en el CSS (Sección 4), el «más un 20 %» y el tope de 60 KB de E2, el «`verify` no la pasa» de `--sin-lighthouse` en el contrato de `qa-movimiento` (en el CI la salida es SKIP de MOV-05 y MOV-07, nunca PASS) y el filtro corto de `git log` del runbook. Verificación [revisión]: lectura del plan al implementar.
<!-- /autoplan-accepted:eng -->
## Review record

### Fase 1, CEO (autoplan run main-20261021-231921, modo SELECTIVE EXPANSION)

#### Auditoría del sistema

- Rama `main`, sin cambios de código sin commitear (solo `.gstack/` y `docs/marca/` sin seguimiento). Un stash viejo (`orisa-home-migration`, apartado el 12-oct) que no toca este plan.
- Archivos más tocados en 30 días: `src/pages/index.astro` (29 commits), `src/lib/site.ts` (21), `DECISIONES.md` (20), `scripts/cambios-permitidos.json` (14), `scripts/portada.test.mjs` (13). La portada cambió tres veces en una semana (D51 el 15-oct, D53 el 20-oct, D54 el 21-oct).
- **Retrospectiva:** D53 (paneles apilados con GSAP) se revirtió el 20-oct (`ce1a4b0`) porque Lighthouse móvil en producción bajó a 79 a 83, con TBT de 478 a 640 ms, al pedir ScrollTrigger en el tiempo libre después de la carga (DECISIONES.md:345). La segunda versión lo pide solo al acercarse a la sección. Es un problema que se repite: el movimiento en la portada choca con el umbral de 85 de D14.
- TODOS.md tiene lecturas pendientes de la v2: Search Console el 29-oct y el 12-nov, GA4 el 12-nov y el 10-dic (D51, DECISIONES.md:293). Publicar la v3 antes cambia lo que se mide.
- Ya hay un patrón de GSAP diferido: `src/scripts/servicios-apilados.ts` y `src/scripts/effects.ts`; `gsap` ya está en `package.json` (no hace falta dependencia nueva).
- Prior learning applied: seo-geo-criterion-for-visual-changes (confidence 10/10, from 2026-10-13): todo cambio visual debe servir al SEO/GEO de «agencia de diseño web» y «diseño web panama».
- Prior learning applied: cambios-permitidos-line-edit (confidence 9/10, from 2026-10-15): editar `scripts/cambios-permitidos.json` por línea de ruta.
- Prior learning applied: astro-css-por-ruta-no-por-componente (confidence 9/10, from 2026-10-13).
- **Pedido del dueño a mitad de la revisión (21-oct, chat):** «todo este diseño debe llevar efectos bien premium gasp». Pasa a requisito (ver obligaciones aceptadas) y reemplaza la línea de «Fuera de alcance» que dejaba el héroe sin animación.

#### Calibración de gusto

- Referencias buenas: `src/scripts/servicios-apilados.ts` (efecto pedido al acercarse, con salida limpia si falla), `scripts/seo-congelado.mjs` (red de SEO declarativa), `src/components/ServiceForm.astro` (un formulario que conoce todos los servicios).
- A evitar: el `Navbar.astro` actual mezcla datos, marcado y 95 líneas de script en dos paneles con marcado distinto; el pie repite la lista de servicios en tres formatos.

#### Panorama

- [Capa 1] Las agencias se presentan con servicios y prueba; las SaaS (Stripe, Linear) con producto y bloques limpios.
- [Capa 2] Una agencia panameña (Símbolo) ya se vende como agencia de marketing con agentes de IA (prensa.com, contenido de marca). Guías de rendimiento de 2026: GSAP con ScrollTrigger pesa de 25 a 45 KB comprimidos y la métrica más expuesta es el INP; los revelados simples con CSS de scroll corren fuera del hilo principal (fuentes de practicantes, no de Google).
- [Capa 3] Decir «IA» ya no diferencia en Panamá; mostrar el sistema funcionando sí. El bloque de proyectos de IA con el diagrama es la pieza que puede diferenciar.

#### 0A. Premisas

| Premisa | Afirmación | Recibo | Veredicto |
|---|---|---|---|
| P1 | El dueño quiere la portada dedicada a marketing digital + proyectos de IA | chat del 21-oct | verificada |
| P2 | El H1 de D50 puede quedar como etiqueta pequeña sin cambiar su texto | `src/lib/portada.ts:40` | verificada, con tensión: el H1 dice «diseño web» y la página habla de marketing e IA |
| P3 | Cambiar la portada ahora no afecta ninguna medición en curso | DECISIONES.md:293 | **falsa**: hay lecturas de la v2 el 29-oct y el 12-nov |
| P4 | Menú y pie pueden cambiar sin romper `seo-congelado` | `scripts/seo-congelado.mjs:17` | verificada: los enlaces no son campos congelados |
| P5 | Efectos GSAP en toda la portada mantienen Lighthouse ≥ 85 | DECISIONES.md:345 | **en riesgo**: D53 ya falló una vez |
| P6 | Todo cambio visual sirve a «agencia de diseño web» | aprendizaje del dueño del 13-oct | **choca** con el giro a marketing + IA |
| P7 | Quitar precios de la portada no rompe reglas | DESIGN.md:184 | hay que exceptuar esa regla en `/` |
| P8 | Quitar proyectos no debilita la marca | DESIGN.md, estrella norte «Comprobante» | **choca** con el sistema de marca vigente |
| P9 | GSAP ya está instalado | `package.json` (`gsap` ^3.12.5) | verificada |

unverified=0.

**Problema real:** la portada vende diseño web mientras la oferta nueva (marketing D52, videos con IA D55, WhatsApp, agentes) no tiene vitrina principal, y al dueño no le gusta la estética. **Costo de no hacer nada:** la oferta de marketing e IA sigue escondida. **¿Resuelve el dolor directamente?** Sí en posicionamiento y estética; no prueba que traiga más clientes (la v2 aún no tiene lecturas).

#### 0B. Código que se reusa

| Subproblema | Código existente | Uso |
|---|---|---|
| Formulario por servicio | `src/components/ServiceForm.astro` | tal cual |
| Capturas con marco | `src/components/MarcoCaptura.astro`, `Pic.astro`, `/images/ejemplos/` | sección de diseño web |
| Datos de menú y pie | `src/lib/site.ts` (`cols`, `marketing`, `iaCreativa`, `saas`, `legal`) | se reagrupan, no se duplican |
| Medición de CTA | `src/scripts/track.ts` | tal cual |
| GSAP diferido | `src/scripts/servicios-apilados.ts`, `src/scripts/effects.ts` | patrón de los efectos nuevos |
| Red de SEO | `scripts/seo-congelado.mjs`, `scripts/cambios-permitidos.json`, `scripts/qa-seo.mjs` | tal cual |
| Schema | `src/lib/schema.ts` | se quitan las Offer de la portada |
| Pruebas de portada | `scripts/portada.test.mjs` | se reescriben |

El menú se reconstruye en vez de adaptarse: hoy son dos paneles con marcado distinto más el móvil; cuatro paneles con un solo componente es más corto. Se conserva su lógica de accesibilidad (`aria-expanded`, `inert`, Escape).

REALITY: premise-table finding P3, P5, P6 y P8 chocan con hechos o reglas vigentes DECISIONES.md:293
REALITY: already-done pass sin commits en origin/main desde el 21-oct en index.astro, Navbar.astro ni Footer.astro src/pages/index.astro:1
REALITY: surface-check pass npm run build, npm test y npm run verify existen package.json:6
REALITY: binding-decisions finding D51 fija mediciones de la v2 y D23 el «desde $X»; la v3 quita precios y cambia la portada antes de medir DECISIONES.md:293
REALITY: numbers finding los umbrales ≥ 90 local y ≥ 85 en producción son metas; el 79 a 83 de D53 es medido [measured: DECISIONES.md:345] DECISIONES.md:345
REALITY: deferred-asks pass sin issue enlazado docs/specs/rediseno-elementoweb/PLAN-PORTADA-V3.md:1
REALITY: pr-count pass sin ship-policy, un PR por oleada docs/specs/rediseno-elementoweb/PLAN-PORTADA-V3.md:73

#### 0C. Estado ideal

```
  HOY                             ESTE PLAN                          IDEAL A 12 MESES
  Portada v2 grafito de diseño    Portada monocromo de marketing     Marca de agencia de marketing + IA,
  web: 13 secciones, precios,     + IA: 8 secciones, efectos GSAP,   casos medidos por servicio,
  proyectos, paneles apilados.    menú y pie Stripe en todo el       páginas de servicio en el mismo
  Servicios en marino.            sitio. Servicios siguen marino.    sistema, prueba en cada una.
```

Avanza en marca y navegación. Retrocede en prueba (quita proyectos y precios de la portada) y deja dos sistemas visuales conviviendo.

#### 0D

No hizo falta una decisión de enfoque nueva: el dueño aprobó el mockup y las reglas. Las tensiones de P3, P6 y P8 van a la puerta final.

#### 0E. Modo

Mode: SELECTIVE EXPANSION; approved decisions: none. Lo fija la regla de /autoplan. Son unos 12 archivos (index.astro, portada.ts, portada.css, Navbar.astro, Footer.astro, site.ts, Base.astro, un script de movimiento nuevo, DESIGN.md, DECISIONES.md, portada.test.mjs, cambios-permitidos.json): por debajo de 15, capacidad nueva sobre código existente. No new approach decision was needed.

#### 0F y 0G. Ampliaciones evaluadas

Comprobaciones HOLD: más de 8 archivos, pero son los mínimos para portada, menú y pie; nada diferible sin romper el pedido.

| # | Propuesta | Esfuerzo | Riesgo | Decisión | Principio |
|---|---|---|---|---|---|
| E1 | Un módulo de movimiento (`src/scripts/movimiento.ts`): revelados con CSS de scroll donde haya soporte y GSAP con ScrollTrigger pedido con `import()` solo al acercarse a cada sección | M | medio | ACEPTADA | P1, P2 |
| E2 | Presupuesto de rendimiento como prueba (TBT y JS de la portada) | S | bajo | ACEPTADA | P1, P2 |
| E3 | Tarjeta destacada en cada panel del megamenú, con enlace a una página existente | S | bajo | ACEPTADA | P2 |
| E4 | Páginas de servicio al sistema monocromo | XL | alto | DIFERIDA a TODOS.md | P3 |
| E5 | Franja mínima de prueba (logos con permiso o capturas) | S | medio | SALTADA: el dueño pidió sin proyectos | regla del dueño |
| E6 | Imagen OG nueva de la portada | S | bajo | DIFERIDA a TODOS.md | P3 |
| E7 | Menú móvil como acordeón por grupo | S | bajo | ACEPTADA | P2 |

Prueba de 10x: lo que da 10 veces el valor no es el pulido visual sino que el bloque de IA muestre un caso real funcionando (un agente atendiendo, con datos de un cliente con permiso). Queda como dirección, no como alcance.

#### Obligaciones aceptadas

<!-- autoplan-accepted:ceo -->
- Efectos premium con GSAP en la portada `/`, por pedido del dueño del 21-oct («todo este diseño debe llevar efectos bien premium gasp»): revelados por sección, trazo animado del diagrama de IA, maquetas del bento que se arman al entrar, parallax suave de la escultura y titulares de sección por líneas. Reemplaza la línea de «Fuera de alcance» que dejaba el héroe sin animación. Condiciones: (a) el elemento LCP (titular de display o escultura) no tiene animación de entrada y se pinta sin JavaScript en su primer cuadro, sin `opacity:0` ni `clip-path` cerrado; (b) la entrada del héroe es solo CSS y solo en elementos que no son LCP (etiqueta, bajada, botones y franja), con `transform` de 8 px y sin `opacity` inicial menor a 1; (c) todo el contenido es visible sin JavaScript; (d) con `prefers-reduced-motion` no hay movimiento; (e) GSAP y ScrollTrigger se piden con `import()` en la primera interacción del visitante (scroll, puntero, tecla o toque), nunca en la carga ni en el tiempo libre; (f) se anima solo `transform`, `opacity` y `clip-path`. Verificación: `scripts/qa-movimiento.mjs` (nuevo) y Lighthouse móvil ≥ 90 local antes del merge y ≥ 85 en producción.
- E1: un solo módulo `src/scripts/movimiento.ts`, cargado solo en `/`. Dos niveles: revelados por sección con CSS `animation-timeline: view()` donde el navegador lo soporte (sin JavaScript), y GSAP con ScrollTrigger para trazos, armado de maquetas y parallax. Si el `import()` falla, la página queda completa y estática. El megamenú no usa GSAP: sus paneles abren con transiciones CSS en todo el sitio. Verificación: `qa-movimiento` comprueba que ni GSAP ni ScrollTrigger se piden antes de la primera interacción.
- E2: presupuesto de rendimiento como prueba en `scripts/qa-movimiento.mjs`: el JS propio que la portada pide antes de la primera interacción suma ≤ 60 KB comprimido (incluido el del menú; la analítica de terceros, gtag, se informa aparte y no cambia cuándo carga), el TBT de Lighthouse móvil local (mediana de 3 corridas) es ≤ 200 ms y, con la CPU frenada 4 veces, el bloqueo en los 3 s después de un scroll simulado (cuando entra GSAP) es ≤ 200 ms. Para cumplirlo, el menú móvil deja de importar GSAP y abre con CSS. Verificación: `qa-movimiento` imprime PASS o FAIL con los bytes y el TBT medidos.
- E3: cada panel del megamenú de escritorio lleva una tarjeta destacada con enlace a una página existente; ese enlace también está en la lista del panel. Verificación: prueba de enlaces del menú.
- E7: menú móvil como acordeón por grupo, con los mismos enlaces que las listas del escritorio (sin las tarjetas destacadas). Verificación: prueba de paridad de enlaces entre escritorio y móvil.
- Imágenes: la escultura de cromo plateado y las fotos a color del díptico y del bento se generan con fal y se guardan en `public/images/portada-v3/` con un `CREDITOS.json` que lleva, por archivo, `archivo`, `ancho`, `bytes`, `limite_bytes`, modelo, prompt, fecha y costo; el gasto se registra antes con `scripts/gasto-ia.mjs`. Límites: escultura 800 px ≤ 60 KB y 400 px ≤ 25 KB; díptico 800 px ≤ 60 KB; bento 600 px ≤ 40 KB. Sin fotos de bancos de imágenes (D45). Las capturas de la sección de diseño web son las reales de `/images/ejemplos/`. Verificación: prueba de que cada imagen nueva existe, su tamaño coincide con `bytes` y no pasa de `limite_bytes`.
- Prueba de menú y pie contra `scripts/fixtures/enlaces-menu-pie.json`, guardado del build actual antes de tocar Navbar o Footer; «Hablar con ventas» usa `wa()` y el díptico lleva `id="soluciones"`. Verificación: la prueba de menú y pie y `portada.test.mjs`.
- Con `prefers-reduced-motion` los paneles del menú abren sin transición. Verificación: `qa-movimiento` (2).
- El parallax de la escultura (ligado al scroll, nunca oculta contenido) queda fuera de la regla de «solo elementos por debajo de la ventana».
- Contraste de grises: texto sobre `#FFFFFF` solo en `#0A0A0A`, `#525252` o `#737373`; texto sobre `#F5F5F5` solo en `#0A0A0A` o `#525252`, salvo la segunda línea del titular de display (texto grande) en `#737373`; texto sobre `#0A0A0A` en `#FFFFFF` o `#A3A3A3`, nunca `#737373`; `#A3A3A3` y `#E5E5E5` nunca van en texto sobre fondos claros (solo filetes y adornos). Verificación: `qa-a11y` en verde.
- Reversión: el PR se integra con merge commit, etiquetado `portada-v3` al integrarlo; `git revert -m 1 portada-v3` restaura portada, menú y pie de todo el sitio a la vez. Verificación: el plan de publicación nombra el comando.
- Enlaces: cada enlace de la portada, del menú y del pie va al destino de la tabla «Destinos de los enlaces», y todos son URL que ya existen. Verificación: la prueba de menú y pie y `check-links` en verde.
- Paso de CSS a GSAP sin saltos: ningún elemento con `data-mov="css"` y `data-mov="gsap"` a la vez, y GSAP solo prepara elementos que aún están por debajo de la ventana. Verificación: `qa-movimiento` (8).
- TODOS.md recibe dos entradas al cerrar la revisión: E4 (páginas de servicio al sistema monocromo) y E6 (imagen OG nueva de la portada).
- Sección 4: cada sección con ancla (`#soluciones`, `#formulario`) lleva `scroll-margin-top` igual a la altura del menú fijo, para que el salto no quede tapado. Verificación: `portada.test.mjs` lee el valor en el CSS.
- Sección 5: todas las clases nuevas de la portada usan el prefijo `pv3-` y no aparecen fuera de `main` (lección de D53, donde `.pv2-panel` chocó con otra sección); las listas del menú y del pie salen de una sola estructura de grupos en `site.ts`, sin repetir enlaces a mano. Verificación: prueba de que ninguna regla `pv3-` toca elementos fuera de `main`.
- Sección 8: los botones nuevos llevan `data-cta-loc` (`hero`, `soluciones`, `ia`, `hablemos`, `header`) y `data-service`, y `docs/event-dictionary.md` registra los valores nuevos. Verificación: `portada.test.mjs` comprueba que cada CTA tiene los dos atributos.
- Sección 11: ninguna imagen generada sugiere ser de un cliente real; las maquetas del bento llevan la nota «Ejemplo» como pide DESIGN.md; el texto alternativo describe la imagen sin inventar clientes. Verificación: revisión en `qa-a11y` del texto alternativo y prueba de la nota «Ejemplo» en el bento.
<!-- /autoplan-accepted:ceo -->

<!-- autoplan-baseline-edits:ceo {"sourceSha256":"6af25dd63561030b1cf4b5d10d6861c2ad4c65419636e3b5c066a7d33c282012","replacements":[{"oldText":"- El menú sigue usando GSAP solo para el menú móvil (ya está cargado); los paneles de escritorio son CSS más el script actual.\n- Sin animaciones nuevas en la primera pantalla; el elemento LCP es el titular de display o la escultura, nunca con `opacity:0`.","newText":"- El menú (escritorio y móvil) abre con transiciones CSS y conserva la lógica accesible del script actual; deja de importar GSAP, que hoy entra en el JS inicial de todas las páginas.\n\n## Movimiento\n\n- Efectos premium con GSAP en `/` (pedido del dueño del 21-oct), desde un solo módulo `src/scripts/movimiento.ts` que solo carga la portada: revelados por sección con CSS `animation-timeline: view()` donde haya soporte, y GSAP con ScrollTrigger para el trazo del diagrama de IA, el armado de las maquetas del bento, el parallax de la escultura y los titulares de sección por líneas.\n- GSAP y ScrollTrigger se piden con `import()` en la primera interacción (scroll, puntero, tecla o toque), nunca en la carga ni en el tiempo libre (la reversión de D53 vino de pedirlo en el tiempo libre).\n- El elemento LCP (titular de display o escultura) no tiene animación de entrada y se pinta sin JavaScript. La entrada del héroe es solo CSS, en la etiqueta, la bajada, los botones y la franja, con un desplazamiento de 8 px y sin opacidad inicial menor a 1.\n- Sin JavaScript todo es visible; con `prefers-reduced-motion` no hay movimiento; si el `import()` falla, la página queda completa y estática. Solo se anima `transform`, `opacity` y `clip-path`.\n- Paso de CSS a GSAP: cada elemento animado lleva `data-mov=\"css\"` o `data-mov=\"gsap\"`, nunca los dos. Al cargar GSAP en la primera interacción, los revelados `gsap` (los que parten de un estado oculto o desarmado) solo se preparan si su borde superior está por debajo del borde inferior de la ventana; los que ya están a la vista quedan en su estado final, sin salto. Los efectos ligados al scroll que nunca ocultan contenido (el parallax de la escultura, con `scrub`) quedan fuera de esa regla y corren aunque el elemento ya esté a la vista. Los revelados `css` nunca empiezan con opacidad menor a 1 en el texto: se mueven con `transform` y las imágenes pueden aparecer con `clip-path`.\n- La escultura del héroe: `<img>` con `srcset` de 400 y 800 px, `sizes`, `width` y `height` y `fetchpriority=\"high\"`; el titular de display usa la fuente ya precargada. Ambos candidatos a LCP cumplen la regla."},{"oldText":"- Animaciones del héroe (la escultura es una imagen fija).\n","newText":""},{"oldText":"- Portadas de las páginas de servicio (siguen en marino).","newText":"- Portadas de las páginas de servicio (siguen en marino); va a TODOS.md (E4), junto con la imagen OG nueva de la portada (E6)."},{"oldText":"- Medición: héroe y botón principal visibles a 1440×900 y 390×844; Lighthouse móvil ≥ 90 local.","newText":"- Medición: héroe y botón principal visibles a 1440×900 y 390×844; Lighthouse móvil ≥ 90 local.\n- `scripts/qa-movimiento.mjs` (nuevo, con `playwright-core` como los demás `qa-*`): (1) con JavaScript apagado, al llevar cada sección a la vista y esperar 1 s, todo su texto tiene opacidad 1 y ningún `display:none` ni `visibility:hidden`; (2) con `prefers-reduced-motion` ningún elemento cambia de `transform` ni de opacidad, incluidos los paneles del menú, que abren sin transición; (3) ni GSAP ni ScrollTrigger se piden antes de la primera interacción; (4) el JS propio pedido antes de la primera interacción suma ≤ 60 KB comprimido (la analítica de terceros, gtag, se excluye del total y se informa aparte, sin cambiar cuándo carga); (5) el TBT de Lighthouse móvil local (mediana de 3 corridas, reusando `scripts/medir.mjs`, que necesita el CLI `lighthouse` instalado; si falta, el script falla con ese mensaje) es ≤ 200 ms; (6) el elemento LCP, leído con un PerformanceObserver, tiene opacidad 1 y ningún `clip-path` en su primer cuadro; (7) con la CPU frenada 4 veces, un scroll simulado como primera interacción carga GSAP y la suma de tiempo de bloqueo de las tareas largas en los 3 s siguientes es ≤ 200 ms; (8) ningún elemento tiene a la vez `data-mov=\"css\"` y `data-mov=\"gsap\"`. Imprime PASS o FAIL con los valores medidos. El camino sin soporte de `animation-timeline` (revelados apagados) se acepta sin prueba automática: solo quita movimiento.\n- Prueba de imágenes: cada archivo de `public/images/portada-v3/` existe, su tamaño coincide con `bytes` y no pasa de `limite_bytes` en `CREDITOS.json`.\n- Primer paso, antes de tocar Navbar o Footer: guardar la lista de enlaces del menú y del pie del build actual en `scripts/fixtures/enlaces-menu-pie.json`; la prueba de menú y pie compara contra ese archivo.\n- `portada.test.mjs` también comprueba que el díptico tiene `id=\"soluciones\"` y que «Hablar con ventas» usa el enlace de WhatsApp de `wa()` de `site.ts`.\n- Línea base medida el 21-oct en `dist/` [measured: build del 21-oct]: el JS propio que `/` pide antes de la interacción suma 30,0 KB comprimidos, de los que 27,7 KB son GSAP importado por el menú; sin él quedan unos 2,4 KB."},{"oldText":"- Rama propia y PR; push a `main` despliega a producción (no hay staging).\n- Día P: Lighthouse móvil en producción ≥ 85 y LCP ≤ 3,5 s, si no se revierte (D14).","newText":"- Rama propia y PR; push a `main` despliega a producción (no hay staging).\n- Antes del merge, bloqueante: `npm run verify`, `qa-movimiento` en PASS y Lighthouse móvil local ≥ 90.\n- Fecha: la decide el dueño en la puerta (pregunta abierta 2). La v3 también retira la vitrina de D54, cuya lectura de GA4 es el 18-nov.\n- Día P: Lighthouse móvil en producción ≥ 85 y LCP ≤ 3,5 s, si no se revierte (D14).\n- Reversión: el PR se integra con un merge commit (no squash ni rebase); al integrarlo se etiqueta ese commit como `portada-v3`. Revertir es `git revert -m 1 portada-v3`, que restaura portada, menú y pie de todo el sitio a la vez, seguido de `npm run verify`, push con permiso del dueño, `gh run watch <id> --exit-status` y `bash scripts/check-prod.sh`. Si después hubo commits que tocan Navbar o Footer, se resuelven los conflictos a favor de la versión anterior a la v3."},{"oldText":"Así el H1 no cambia y no hace falta la línea base nueva que pide DESIGN.md. Decisión para la puerta (ver Preguntas abiertas).","newText":"Así el H1 no cambia y no hace falta la línea base nueva que pide DESIGN.md. Costo: el H1 dice «diseño web» y el resto de la página dice marketing e IA; buscadores y asistentes leen dos mensajes. Decisión para la puerta (ver Preguntas abiertas)."},{"oldText":"### Menú (src/components/Navbar.astro), en todo el sitio","newText":"### Imágenes\n\nLa escultura de cromo plateado y las fotos a color del díptico y del bento se generan con fal y se guardan en `public/images/portada-v3/` con un `CREDITOS.json` que lleva, por archivo, `archivo`, `ancho`, `bytes`, `limite_bytes`, modelo, prompt, fecha y costo; el gasto se registra antes con `scripts/gasto-ia.mjs`. Límites: escultura WebP de 800 px ≤ 60 KB y de 400 px ≤ 25 KB; fotos del díptico WebP de 800 px ≤ 60 KB; imágenes de las tarjetas del bento WebP de 600 px ≤ 40 KB. Sin fotos de bancos de imágenes (D45). Las capturas de la sección de diseño web son las reales de `/images/ejemplos/`.\n\n### Destinos de los enlaces (todas las URL ya existen)\n\n| Elemento | Destino |\n|---|---|\n| Héroe «Empezar proyecto» | `#formulario` (`data-cta-loc=\"hero\"`) |\n| Héroe «Ver soluciones» | `#soluciones` (el díptico) |\n| Franja: Google Ads, Meta Ads, SEO y GEO, WhatsApp API, Agentes IA, Diseño web | `/marketing/google-ads-panama/`, `/marketing/facebook-instagram-ads-panama/`, `/crecimiento/seo-posicionamiento-web-panama/`, `/marketing/whatsapp-marketing-masivo-panama/`, `/inteligencia-artificial-para-empresas-panama/`, `/diseno-web-panama/` |\n| Díptico 01 Marketing digital | Google Ads, Facebook e Instagram Ads, SEO y GEO, WhatsApp Marketing y Contenido para redes (`/marketing/contenido-redes-sociales-panama/`) |\n| Díptico 02 Proyectos de IA | Agentes de IA (`/inteligencia-artificial-para-empresas-panama/`), Chatbots (`/funcionalidades/chatbots-ia-web-wazacrm-panama/`), Automatización con n8n (`/marketing/automatizaciones-n8n-panama/`) y Videos con IA (`/marketing/videos-publicitarios-panama/`) |\n| Bento | Publicidad → `/marketing/`; SEO y GEO → `/crecimiento/seo-posicionamiento-web-panama/`; WhatsApp Marketing → `/marketing/whatsapp-marketing-masivo-panama/`; Agentes de IA → `/inteligencia-artificial-para-empresas-panama/`; Contenido con IA → `/marketing/videos-publicitarios-panama/` |\n| Proyectos de IA «Agendar diagnóstico» y «Hablemos.» | `#formulario` |\n| «Hablar con ventas» del menú | WhatsApp, con el enlace de `wa()` de `site.ts` (se abre en otra pestaña, con aviso para lector de pantalla) |\n| Díptico | lleva `id=\"soluciones\"` |\n| Panel Marketing | `marketing` e `iaCreativa` de `site.ts`; tarjeta: Videos publicitarios |\n| Panel Inteligencia artificial | IA para empresas, Chatbots, Automatizaciones (n8n), WhatsApp Marketing y `saas`; tarjeta: IA para empresas |\n| Panel Diseño web | las columnas Diseño Web, Tecnologías y Funcionalidades de `cols`, e Industrias (`/industrias/`); tarjeta: `/diseno-web-panama/` |\n| Panel Recursos | Blog, Guías, Recursos, Casos de éxito, Cómo trabajamos, Proyectos (`/portafolio/`), Precios, Miami y la columna Crecimiento de `cols`; tarjeta: `/guias/` |\n| Los dos «Empezar proyecto» del menú (píldora de escritorio y botón del menú móvil) | `/contacto/`; en la portada, `#formulario` |\n| Pie, 5 columnas | Marketing (`marketing`, `iaCreativa`), Inteligencia artificial (los del panel IA y `saas`), Diseño web (Diseño Web, Tecnologías y Funcionalidades de `cols`), Recursos (los del panel Recursos), Empresa (Nosotros, Contacto, correo, WhatsApp, dirección y horario); debajo, las franjas de Miami, industrias y legales de hoy |\n\n### Menú (src/components/Navbar.astro), en todo el sitio"},{"oldText":"y el menú móvil a pantalla completa, en blanco.","newText":"y el menú móvil a pantalla completa, en blanco, como acordeón por grupo con los mismos enlaces que las listas del escritorio. Cada panel de escritorio lleva además una tarjeta destacada sin imagen (fondo `#F5F5F5`, título, una línea y flecha) con enlace a una página existente, que también está en la lista del panel (en móvil no hay tarjeta). Los íconos de los paneles son SVG de línea propios, en línea, de 20 px y trazo de 1,5 px, con `aria-hidden`; no entra una librería de íconos."},{"oldText":"Nueva variante «portada v3 monocromo» que reemplaza a «portada grafito» en `/`, y tokens monocromo para el menú y el pie.","newText":"Nueva variante «portada v3 monocromo» que reemplaza a «portada grafito» en `/`, y tokens monocromo para el menú y el pie. Pares de texto permitidos: sobre `#FFFFFF`, `#0A0A0A`, `#525252` o `#737373`; sobre `#F5F5F5`, `#0A0A0A` o `#525252`, y `#737373` solo en la segunda línea del titular de display (texto grande); sobre `#0A0A0A` (mitad negra del díptico y bloque de Proyectos de IA), `#FFFFFF` o `#A3A3A3` (unos 7,8:1), y `#737373` nunca; `#A3A3A3` y `#E5E5E5` nunca en texto sobre fondos claros, solo en filetes y adornos. En `/` quedan suspendidas dos reglas de DESIGN.md: «publicar el precio de partida junto al botón» y la estrella norte «Comprobante» como pieza de la portada."},{"oldText":"- `seo-congelado`: `/` declara en `scripts/cambios-permitidos.json` solo el campo `schema`;","newText":"- `seo-congelado`: la entrada que `/` ya tiene en `scripts/cambios-permitidos.json` (`[\"description\",\"h1\",\"schema\"]`) se conserva, porque `audit/seo-snapshot.json` es anterior a D50 y el H1 y la description de D50 ya difieren de él; solo se actualiza su `motivo` para citar D56. Se edita por línea de ruta, nunca por coincidencia de texto. El texto de la respuesta citable y de las preguntas no es un campo congelado (el FAQPage entra en `schema`);"},{"oldText":"- Schema: se conservan Organization, WebSite, el ItemList de servicios (por `@id`) y FAQPage; se quitan las Offer que dependían de la sección de precios.","newText":"- Schema: se conservan Organization, WebSite, el ItemList de servicios (por `@id`, sin Offer, como hoy por R37) y FAQPage; no se agrega ninguna Offer."},{"oldText":"El bloque de cierre de las páginas internas se conserva, en monocromo.","newText":"El bloque de cierre de las páginas internas se conserva con su texto y su botón, en monocromo (fondo `#0A0A0A`, texto blanco, botón blanco), como parte del pie; se comprueba con `qa-a11y` en `/contacto/`, `/diseno-web-panama/` y una página de servicio."},{"oldText":"3. **Alcance del menú y el pie:** todo el sitio a la vez o solo la portada primero.","newText":"3. **Alcance del menú y el pie:** todo el sitio a la vez o solo la portada primero. Si es todo el sitio, valen tal cual las reglas de menú, pie, reversión y pruebas de enlaces de este plan. Si es solo la portada, `Navbar` y `Footer` reciben una prop `v3` que solo pasa `/`: el resto del sitio queda igual (incluido el GSAP del menú móvil), la prueba de enlaces corre en `/` y en una página interna para comprobar que esa no cambió, y la reversión sigue siendo el mismo merge commit."}]} -->

#### Desafíos al dueño (pendientes de las dos voces)

- UC1 (P6): la portada deja de apuntar a «agencia de diseño web», la palabra que el dueño fijó como prioridad SEO el 13-oct.
- UC2 (P3): publicar antes del 12-nov contamina la medición de la v2.
- UC3 (P8): quitar proyectos y precios contradice la estrella norte «Comprobante».

#### 0H. Plan CEO y revisión del spec

- Resumen CEO guardado en `~/.gstack/projects/josimarguilbaud-elementoweb/ceo-plans/2026-10-21-portada-v3-marketing-ia.md`.
- Revisión adversarial del spec, 3 lanzamientos (tope): 5/10 (19 hallazgos), 6/10 (14) y 7/10 (12). Las correcciones de las dos primeras rondas se dieron por confirmadas porque las rondas siguientes no las repitieron. Los 12 hallazgos de la tercera ronda se aplicaron y se verificaron en el texto exportado (issues verified: 12 of 12), sin otro revisor: **spec not re-verified**. Métricas en `analytics/spec-review.jsonl` (iteraciones 3, encontrados 45, confirmados 33, pendientes de confirmar 12, nota 7).
- Aprobación del documento: auto-decidida A (aprobar y seguir a 0I) por la regla de /autoplan (P6); las tres preguntas abiertas siguen para la puerta.

#### 0I. Interrogación temporal

```
  HORA 1 (cimientos):    guardar el fixture de enlaces del menú y del pie; reescribir portada.test.mjs en rojo;
                         generar las imágenes con fal (registrar gasto antes); medir la línea base de JS (hecho: 30,0 KB).
  HORA 2-3 (núcleo):     Navbar y Footer nuevos sin GSAP; las 8 secciones de la portada con datos en portada.ts.
                         Ambigüedad: la tarjeta destacada y los íconos (resuelto: sin imagen, SVG propios).
  HORA 4-5 (integración): movimiento.ts con import() en la primera interacción; data-mov css/gsap; reduced-motion.
                         Sorpresa probable: el H1 pequeño compite con el titular de display en el árbol de accesibilidad.
  HORA 6+ (pulido):      qa-movimiento, qa-a11y en las páginas internas, Lighthouse local, DESIGN.md y DECISIONES.md (D56).
```

Esfuerzo: equipo humano unos 4 a 5 días; CC + gstack unas 5 a 7 horas de trabajo con revisiones. Bloqueos de factibilidad: ninguno técnico; la fecha de publicación depende de la puerta (UC2).

#### Voces duales (fase CEO) [single-model]

- **Voz Claude (subagente, entrada `ceo 36dc68c6…` confirmada):** 9 hallazgos. Críticos: (1) el posicionamiento contradice la prioridad SEO del negocio, sin datos de demanda, margen ni conversión; (3) arruina las lecturas de la v2 (29-oct y 12-nov) y de D54 (18-nov). Altos: (2) H1 y mensaje dicen cosas distintas; (4) arregla la estética y no el cuello de botella (autoridad, 0 enlaces externos); (5) sin proyectos ni precios se va la prueba social. Medios: (6) demasiado alcance en un solo merge (propone PR-A del menú sin GSAP y PR-B de la portada); (7) premisas no probadas (look premium = más clientes, imágenes de IA que se leen genéricas); (8) «marketing digital Panamá» es más disputado que «diseño web Panamá»; el ángulo defendible es IA + WhatsApp oficial + CRM propio; (9) faltan alternativas: sumar el díptico a la v2, o una landing aparte de marketing + IA medida antes de llevarla a `/`.
- **Voz Codex:** dos corridas completas, ambas rechazadas por el validador porque la línea final no traía el marcador `Recommendation: … because …` (la primera por pedirla en español, error del prompt; la segunda por omitir «because»). **outside_status: unavailable (missing_markers)**: sin cobertura externa ni consenso. Su texto coincidía en el fondo con la voz Claude (congelar la v3 hasta medir, no quitar la prueba, validar una sola oferta con caso real), pero según la regla no cuenta.

```
CEO DUAL VOICES — CONSENSUS TABLE:
  Dimension                             Claude  Codex  Consensus
  1. Premises valid?                     No      N/A    N/A
  2. Right problem to solve?             No      N/A    N/A
  3. Scope calibration correct?          No      N/A    N/A
  4. Alternatives sufficiently explored? No      N/A    N/A
  5. Competitive/market risks covered?   No      N/A    N/A
  6. 6-month trajectory sound?           No      N/A    N/A
Outside unavailable (missing_markers): six Consensus cells N/A, never CONFIRMED.
```

**Desafíos al dueño (User Challenges, para la puerta).** Se apoyan en premisas que el Step 0 mostró falsas o en choque con reglas del propio dueño, más la voz Claude; no se auto-deciden.

- **UC1, posicionamiento sin datos.** Lo que dijo el dueño: portada de marketing digital + IA. Lo que se recomienda: antes de cambiar el foco de `/`, reunir tres datos (qué servicio trae hoy los leads y el dinero en NousCRM, el volumen de «agencia de marketing digital panamá» frente a «agencia de diseño web panamá», y una hipótesis medible), o llevar el ángulo a lo defendible: IA + WhatsApp oficial + CRM propio. Puntos ciegos nuestros: el dueño conoce sus ventas y su capacidad de entrega mejor que el repo. Costo si nos equivocamos: perder posición en la palabra que hoy tiene el sitio, o retrasar un cambio de marca que el dueño ya decidió.
- **UC2, fecha.** Lo que dijo el dueño: construir el home nuevo (sin fecha). Lo que se recomienda: construir ya en una rama y publicar después del 12-nov (mejor después del 18-nov), para no perder las lecturas de la v2 y de D54. Puntos ciegos: puede haber una razón comercial para publicar antes (una campaña, una reunión con clientes). Costo: tres rediseños en un mes sin aprender nada de ninguno.
- **UC3, prueba.** Lo que dijo el dueño: sin precios ni sección de proyectos. Lo que se recomienda: respetar los precios fuera, pero permitir una franja de prueba que no sea la sección de proyectos (logos de clientes con permiso, una cifra o un testimonio), pidiendo un sí o un no explícito. Puntos ciegos: el dueño puede querer una portada sin nada de eso por estética. Costo: menos confianza para un dominio joven que ya tuvo un caso de suplantación (el Gmail falso).

#### Section 1: Architecture Review

Current scope: modo SELECTIVE EXPANSION (regla de /autoplan); aceptadas E1, E2, E3 y E7 y el pedido de GSAP del dueño; diferidas E4 y E6; saltada E5; UC1, UC2 y UC3 pendientes de la puerta.

```
  Base.astro ──┬── Navbar.astro (v3: paneles CSS, acordeón móvil; datos: grupos de site.ts) ── en ~250 páginas
               ├── <slot> página
               │     └── index.astro (/) ── portada.ts (datos de 8 secciones)
               │            ├── ServiceForm.astro (sin cambios)   ├── MarcoCaptura.astro / Pic.astro
               │            └── movimiento.ts ──(import() en la 1.ª interacción)──> gsap + ScrollTrigger
               └── Footer.astro (v3: 5 columnas + franjas; datos: grupos de site.ts) ── en ~250 páginas
  Antes: Navbar importaba gsap de forma estática (27,7 KB en todas las páginas). Después: solo / pide gsap, y tarde.
```

Flujo nuevo de datos en tiempo de ejecución, uno solo: movimiento.ts. Camino feliz: la primera interacción dispara `import()`, se registran ScrollTrigger y los revelados `gsap` por debajo de la ventana. Camino nulo: sin interacción no se pide nada y la página queda completa. Camino vacío: sin elementos `data-mov="gsap"`, el módulo no hace nada. Camino de error: el `import()` falla (red), se atrapa y la página queda estática. Acoplamiento nuevo: menú y pie dependen de una estructura de grupos en `site.ts`; se justifica porque hoy la misma lista se repite en tres formatos. Punto único de falla: `site.ts` (ya lo era). Reversión: `git revert -m 1 portada-v3`, menos de 10 minutos con el CI. Hallazgo: la v3 junta un cambio de posicionamiento con un cambio de navegación de todo el sitio en un solo merge (voz Claude, hallazgo 6). Se registra como decisión de gusto T1 (dividir en PR-A y PR-B).

#### Section 2: Error & Rescue Map

```
  CODEPATH                         | WHAT CAN GO WRONG                 | CLASE
  movimiento.ts import()           | la red falla o el chunk no existe | rechazo de la promesa
  movimiento.ts init               | IntersectionObserver ausente      | API faltante
  CSS view() reveals               | navegador sin soporte             | sin soporte
  Navbar paneles                   | JS no carga                       | sin JavaScript
  imágenes portada-v3              | archivo faltante o pesado         | error de build (prueba)

  CLASE                 | RESCATADO | ACCIÓN                              | EL USUARIO VE
  rechazo de import()   | Sí        | catch, sin reintento, página fija   | la página completa, sin movimiento
  API faltante          | Sí        | se salta el módulo                  | la página completa
  sin soporte de view() | Sí        | sin revelados                       | la página completa
  sin JavaScript        | Sí        | los enlaces del menú existen en HTML | el menú abre con :focus-within y el pie tiene todo
  error de build        | Sí        | la prueba falla antes del merge     | nada (no se publica)
```

Sin brechas. El rechazo del `import()` no se registra en consola de producción para no ensuciar; se cubre con la prueba (3) de `qa-movimiento`.

#### Section 3: Security & Threat Model

Sin superficies nuevas: no hay endpoints, parámetros ni dependencias nuevas (GSAP ya está). El formulario y su flujo n8n no cambian. El enlace de WhatsApp sale de `wa()`. Riesgo bajo identificado: el pie muestra el correo real (`hola@elementoweb.com`), útil contra la suplantación del Gmail falso. Probabilidad baja, impacto bajo; no requiere acción.

#### Section 4: Data Flow & Interaction Edge Cases

```
  INTERACCIÓN          | CASO BORDE                              | MANEJADO | CÓMO
  Megamenú             | puntero entra y sale rápido             | Sí       | retardo de cierre de 180 ms del script actual
  Megamenú             | toque en táctil                         | Sí       | el disparador es <button> con clic
  Megamenú             | Escape                                  | Sí       | cierra y devuelve el foco
  Menú móvil           | se agranda a escritorio con el menú abierto | Sí   | matchMedia del script actual
  Ancla #soluciones    | el menú fijo tapa el título             | No → Sí  | scroll-margin-top (aceptado)
  Primera interacción  | ocurre antes de que termine la carga    | Sí       | el import espera; los revelados ya visibles no se preparan
  Botón atrás (bfcache)| vuelve con GSAP ya iniciado             | Sí       | sin estados ocultos en elementos visibles
  Doble clic en CTA    | dos envíos                              | Sí       | ServiceForm ya lo maneja
```

Una brecha (el ancla tapada), resuelta con `scroll-margin-top` (obligación aceptada).

#### Section 5: Code Quality Review

El plan reusa los componentes correctos. Dos hallazgos, aceptados como obligaciones: (a) prefijo `pv3-` en las clases nuevas, porque en D53 `.pv2-panel` chocó con otra sección; (b) una sola estructura de grupos en `site.ts` para el menú y el pie, porque hoy el pie repite la lista de servicios en tres formatos. La complejidad nueva más alta es `movimiento.ts`, con menos de 5 ramas si cada efecto es una función.

#### Section 6: Test Review

```
  NUEVO                                 | TIPO        | PRUEBA
  8 secciones y H1                      | unidad/dist | portada.test.mjs
  Destinos de enlaces y #soluciones      | dist        | portada.test.mjs + prueba de menú y pie
  Fixture de enlaces del menú y el pie   | dist        | prueba de menú y pie contra el fixture
  Paridad escritorio y móvil             | dist        | prueba de menú y pie
  Sin JS, reduced-motion, import tardío  | navegador   | qa-movimiento (1), (2), (3)
  Presupuesto de JS y TBT                | navegador   | qa-movimiento (4), (5), (7)
  LCP sin animación                      | navegador   | qa-movimiento (6)
  data-mov exclusivo                     | navegador   | qa-movimiento (8)
  Contraste de grises                    | navegador   | qa-a11y
  Imágenes y CREDITOS.json               | unidad      | prueba de imágenes
  scroll-margin, prefijo pv3-, CTA       | dist        | portada.test.mjs (nuevas, aceptadas)
```

Prueba de las 2 de la mañana: `qa-movimiento` (7), porque es la que habría atrapado la reversión de D53. Riesgo de prueba inestable: el TBT y la tarea larga dependen de la máquina; se usa la mediana de 3 corridas y la CPU frenada 4 veces.

#### Section 7: Performance Review

Cubierta por E2: línea base medida de 30,0 KB de JS propio, 27,7 de ellos de GSAP (sale del JS inicial de todas las páginas). Los tres caminos más lentos son la carga de GSAP en la primera interacción (cubierta por la prueba 7), la decodificación de la escultura en el LCP (cubierta por el límite de 60 KB y `fetchpriority`) y el pintado del bento con imágenes a color (`loading="lazy"` fuera de la primera pantalla). No hay base de datos ni consultas.

#### Section 8: Observability & Debuggability Review

Los CTA nuevos llevan `data-cta-loc` y `data-service` y se registran en `docs/event-dictionary.md` (obligación aceptada), para que GA4 siga midiendo `cta_click` por ubicación. Lo que dice que funciona: `generate_lead` y `cta_click` por sesión con entrada en `/`. Lo que dice que se rompió: `check-prod.sh` y Lighthouse del día P. No hay panel nuevo; las lecturas siguen el modelo de D51.

#### Section 9: Deployment & Rollout Review

Sitio estático sin migraciones. No hay staging: el push a `main` despliega. Orden: rama, `npm run verify`, `qa-movimiento` en PASS, Lighthouse local ≥ 90, merge commit etiquetado, `gh run watch` y `check-prod.sh`. Primeros 5 minutos: la portada responde 200, el menú abre en una página interna y el formulario envía. Primera hora: Lighthouse móvil en producción ≥ 85 y LCP ≤ 3,5 s. Reversión con `git revert -m 1 portada-v3`. No hay ventana de riesgo con código viejo y nuevo a la vez (nginx sirve archivos estáticos).

#### Section 10: Long-Term Trajectory Review

Deuda: dos sistemas visuales conviviendo (portada monocromo y servicios en marino; E4 en TODOS.md) y tres portadas en una semana, un patrón que ya cuesta mediciones. Reversibilidad: 4/5 (un merge commit). Cumple las convenciones del repo (Astro, `qa-*` con playwright-core, `seo-congelado`). Lo que sigue: E4, y si el dueño valida el ángulo de IA + WhatsApp, un caso real en el bloque de IA (la prueba de 10x).

#### Section 11: Design & UX Review

```
  Llega a /  ->  Héroe (H1 pequeño, display, 2 CTA, franja)  ->  Díptico (#soluciones)  ->  Bento
     -> Diseño web  ->  Proyectos de IA (CTA diagnóstico)  ->  Respuesta citable  ->  Preguntas  ->  Hablemos + formulario
  Desde el menú: Marketing | IA | Diseño web | Recursos (paneles)  ->  página de servicio (marino)
```

Estados: menú abierto, cerrado, hover, foco y móvil; el formulario conserva sus estados de D22. Riesgo de «slop»: escultura de cromo y fotos generadas en una agencia de IA; mitigación aceptada: ninguna imagen sugiere ser de un cliente, y el bento lleva la nota «Ejemplo». Móvil: héroe y botón visibles a 390×844 (prueba existente). Accesibilidad: contraste por pares, foco visible, `aria-expanded`. La fase de diseño de este autoplan hace la revisión profunda.

#### NOT in scope

- Diferido: E4 (páginas de servicio al sistema monocromo), por estar fuera del radio; E6 (imagen OG nueva), porque no bloquea. Los dos van a TODOS.md.
- Rechazado: E5 (franja de prueba como sección), por la regla del dueño; vuelve a la puerta solo como UC3.
- Fuera: páginas o URLs nuevas; cambiar cuándo carga gtag (necesita permiso del dueño).

#### What already exists

Formulario por servicio (`ServiceForm.astro`), marcos de captura (`MarcoCaptura.astro`, `Pic.astro`), capturas reales (`/images/ejemplos/`), datos de navegación (`site.ts`), medición de CTA (`track.ts`), GSAP diferido (`servicios-apilados.ts`), red de SEO (`seo-congelado.mjs`, `cambios-permitidos.json`), `qa-*` con playwright-core, `medir.mjs` para Lighthouse y `gasto-ia.mjs` para el gasto de fal. Todo se reusa.

#### Dream state delta

El plan deja la marca y la navegación del sitio en el estilo deseado y reduce el JS inicial de todas las páginas, pero queda lejos del ideal en prueba (no muestra casos medidos) y en coherencia (dos sistemas visuales). El salto que falta es un caso real de IA + WhatsApp con permiso del cliente.

#### Error & Rescue Registry

| Codepath | Falla | Rescatado | Acción | Usuario ve |
|---|---|---|---|---|
| `movimiento.ts` `import()` | red o chunk faltante | Sí | catch, página fija | página completa |
| `movimiento.ts` init | IntersectionObserver ausente | Sí | se salta | página completa |
| CSS `view()` | sin soporte | Sí | sin revelados | página completa |
| Navbar sin JS | script no carga | Sí | enlaces en HTML | menú utilizable |
| Imágenes portada-v3 | faltante o pesada | Sí | la prueba falla en build | nada publicado |

#### Failure Modes Registry

```
  CODEPATH            | FAILURE MODE                 | RESCUED? | TEST? | USER SEES?        | LOGGED?
  movimiento import   | chunk no carga               | Y        | Y (3) | página estática   | N (a propósito)
  GSAP en 1.ª interac.| tarea larga > 200 ms         | Y        | Y (7) | nada (bloquea merge) | Y (qa)
  LCP animado         | titular oculto al inicio     | Y        | Y (6) | nada (bloquea merge) | Y (qa)
  menú site-wide      | enlace perdido               | Y        | Y     | nada (bloquea merge) | Y (prueba)
  ancla #soluciones   | título tapado por el menú    | Y        | Y     | título visible    | N
  producción          | Lighthouse < 85              | Y        | Y     | reversión         | Y (día P)
```

Sin brechas críticas.

#### Completion Summary (CEO)

```
  +====================================================================+
  |            MEGA PLAN REVIEW — COMPLETION SUMMARY                   |
  +====================================================================+
  | Mode selected        | SELECTIVE EXPANSION                         |
  | System Audit         | 3 portadas en 1 semana; D53 revertido; GSAP  |
  |                      | en el JS inicial de todas las páginas        |
  | Step 0               | 4 premisas en choque; pedido GSAP del dueño   |
  | Section 1  (Arch)    | 1 issue found (merge único → T1)            |
  | Section 2  (Errors)  | 5 error paths mapped, 0 GAPS                |
  | Section 3  (Security)| 0 issues found, 0 High severity             |
  | Section 4  (Data/UX) | 8 edge cases mapped, 1 unhandled → resuelto |
  | Section 5  (Quality) | 2 issues found (aceptados)                  |
  | Section 6  (Tests)   | Diagram produced, 0 gaps                    |
  | Section 7  (Perf)    | 0 issues found (cubierto por E2)            |
  | Section 8  (Observ)  | 1 gap found (aceptado)                      |
  | Section 9  (Deploy)  | 1 risk flagged (sin staging)                |
  | Section 10 (Future)  | Reversibility: 4/5, debt items: 2           |
  | Section 11 (Design)  | 1 issue (imágenes de IA) → aceptado         |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (5 items)                           |
  | What already exists  | written                                     |
  | Dream state delta    | written                                     |
  | Error/rescue registry| 5 rows, 0 CRITICAL GAPS                     |
  | Failure modes        | 6 total, 0 CRITICAL GAPS                    |
  | TODOS.md updates     | 2 items proposed (E4, E6)                   |
  | Scope proposals      | 7 proposed, 4 accepted (EXP + SEL)          |
  | CEO plan             | written                                     |
  | Outside voice        | codex unavailable (missing_markers)         |
  | Lake Score           | N/A                                         |
  | Diagrams produced    | 5 (arquitectura, errores, bordes, pruebas, flujo) |
  | Stale diagrams found | 0                                           |
  | Unresolved decisions | 3 (UC1, UC2, UC3 para la puerta)            |
  | Reality rows         | 7/7 rows (PLAN_REALITY), 0 unverified       |
  +====================================================================+
```

#### Implementation Tasks (CEO)

- [ ] **T1 (P1, human: ~1h / CC: ~10min)** — tests — Guardar `scripts/fixtures/enlaces-menu-pie.json` del build actual
  - Surfaced by: revisión del spec, tercera pasada
  - Files: scripts/fixtures/enlaces-menu-pie.json
  - Verify: el archivo lista todos los enlaces del menú y del pie de hoy
- [ ] **T2 (P1, human: ~1d / CC: ~45min)** — tests — `scripts/qa-movimiento.mjs` con sus 8 comprobaciones
  - Surfaced by: E2 y la reversión de D53
  - Files: scripts/qa-movimiento.mjs
  - Verify: imprime PASS o FAIL con los valores medidos
- [ ] **T3 (P1, human: ~1d / CC: ~45min)** — Navbar y Footer — menú CSS sin GSAP, cuatro paneles, acordeón móvil, pie de 5 columnas desde una estructura de grupos en `site.ts`
  - Surfaced by: secciones 1 y 5
  - Files: src/components/Navbar.astro, src/components/Footer.astro, src/lib/site.ts
  - Verify: prueba de menú y pie contra el fixture
- [ ] **T4 (P1, human: ~2d / CC: ~1h)** — portada — 8 secciones con datos en `portada.ts`, prefijo `pv3-`, `scroll-margin-top`, CTA con `data-cta-loc`
  - Surfaced by: plan y secciones 4, 5 y 8
  - Files: src/pages/index.astro, src/lib/portada.ts, src/styles/portada.css, scripts/portada.test.mjs
  - Verify: `npm test`
- [ ] **T5 (P1, human: ~1d / CC: ~40min)** — movimiento — `src/scripts/movimiento.ts` con `import()` en la primera interacción
  - Surfaced by: pedido del dueño y E1
  - Files: src/scripts/movimiento.ts
  - Verify: `qa-movimiento` en PASS
- [ ] **T6 (P1, human: ~3h / CC: ~20min)** — imágenes — generar con fal, registrar el gasto y escribir `CREDITOS.json`
  - Surfaced by: revisión del spec
  - Files: public/images/portada-v3/
  - Verify: prueba de imágenes
- [ ] **T7 (P2, human: ~2h / CC: ~15min)** — docs — DESIGN.md (variante v3, pares de grises, reglas suspendidas), DECISIONES.md (D56), event-dictionary.md y TODOS.md (E4, E6)
  - Surfaced by: secciones 8 y 10
  - Files: DESIGN.md, docs/specs/rediseno-elementoweb/DECISIONES.md, docs/event-dictionary.md, TODOS.md
  - Verify: lectura

PLAN_REALITY: phase=ceo rows=7/7 missing=none verdict=complete

### Fase 2, diseño (autoplan run main-20261021-231921)

#### Step 0

- **0A. Calificación inicial: 4/10.** El plan describe bien qué se mide (rendimiento, LCP, contraste, enlaces), pero no cómo se ve cada sección en móvil ni en cada estado. Un 10 diría, por sección y por ancho (1440, 768 y 390), la forma, los estados, la escala tipográfica y el espaciado, y le daría un solo trabajo a cada bloque.
- **0B. DESIGN.md existe** (sistema «Comprobante», Roboto, marino + cian). Todo se calibra contra él; la v3 lo cambia en `/` y en menú y pie, así que las excepciones van escritas.
- **0C. Patrones que se reusan:** formulario por servicio con sus estados (D22), `details` para preguntas, `MarcoCaptura`, nota «Ejemplo» de las maquetas, regla de primera pantalla a 1440×900 y 390×844.
- **0D. Foco:** las 7 dimensiones (regla de /autoplan).
- **0.5 Mockups:** no se generan nuevos; la referencia aprobada por el dueño es `~/.gstack/projects/josimarguilbaud-elementoweb/designs/home-stripe-20261021/home-mezcla-IL-v2.png` (héroe `r3/I-1.png`, resto `mix/s2.png` a `mix/s6.png`).

#### Voces duales (diseño)

- **CLAUDE SUBAGENT (design — independent review),** entrada `design eac457f8…` confirmada: 14 hallazgos. Altos: la etiqueta H1 larga en mayúsculas no cabe como etiqueta a 390 px; la franja, el díptico y el bento repiten los mismos servicios; faltan hover, foco y activo, y el foco sobre negro; el formulario monocromo no tiene error, enviando ni éxito; el móvil no está descrito; no se sabe si el megamenú abre con puntero o con clic, ni la densidad de Recursos; cierres duplicados al final de `/`; se pide confianza antes de dar prueba. Medios: «Videos con IA» en dos grupos; paso brusco de monocromo a marino; falta la escala tipográfica; los titulares partidos rompen el lector de pantalla; la respuesta citable no tiene diseño; «Ver soluciones» lleva al bloque de abajo.
- **CODEX SAYS (design — UX challenge),** completado (`OUTSIDE_STATUS: completed`, P0). Críticos: se quitan los mecanismos de confianza antes de tener prueba nueva; el H1 y la promesa visible se contradicen; el plan destruye a sabiendas mediciones activas. Altos: no hay camino principal centrado en el comprador; los CTA no preseleccionan servicio; el responsive es una ocurrencia tardía; el menú y el pie en todo el sitio dejan una división visual sin manejar; faltan los estados del formulario; la accesibilidad está a medias (foco, blancos de 44 px, nombre accesible del diagrama, botón móvil de 40×40). Medios: «Stripe», «premium» y «bento» son etiquetas, no decisiones; imágenes generadas sin dirección de arte; movimiento genérico en la experiencia. Su recomendación: no aprobar la implementación hasta decidir posicionamiento, prueba, fecha, alcance del menú y el pie, responsive y estados.

```
DESIGN OUTSIDE VOICES — LITMUS SCORECARD:
  Check                                    Claude  Codex  Consensus
  1. Brand unmistakable in first screen?   NO      NO     CONFIRMED (no: H1 y titular dicen cosas distintas)
  2. One strong visual anchor?             YES     —      NOT SPEC'D por Codex
  3. Scannable by headlines only?          NO      NO     CONFIRMED (no: tres listas de servicios)
  4. Each section has one job?             NO      NO     CONFIRMED (no)
  5. Cards actually necessary?             YES*    NO     DISAGREE (*solo como maqueta con una flecha)
  6. Motion improves hierarchy?            —       NO     NOT SPEC'D / DISAGREE
  7. Premium without decorative shadows?   —       —      NOT SPEC'D
  Hard rejections triggered:               none    none   —
```

#### Pass 1: Information Architecture. 5/10 → 8/10

Confirmado por las dos voces: la franja (6), el díptico (9) y el bento (5) repiten casi los mismos destinos en las tres primeras pantallas. Auto-decidido (estructural, P5): un trabajo por bloque y un solo dueño por servicio en `site.ts`. Queda en 8 porque la jerarquía de prueba depende de UC3.

```
  1. Héroe: H1 pequeño · titular display · bajada · 2 CTA · escultura · franja (orientarse)
  2. Díptico #soluciones: Marketing (3) | IA (3)  (elegir camino)
  3. Bento: 5 maquetas con resultado (ver cómo se ve)
  4. Diseño web: capturas reales (prueba de oficio)
  5. Proyectos de IA: diagrama + CTA + franja de confianza (diferencial)
  6. En resumen (respuesta citable)
  7. Preguntas
  8. Hablemos + formulario
```

#### Pass 2: Interaction State Coverage. 3/10 → 8/10

```
  FEATURE      | LOADING                        | EMPTY | ERROR                                   | SUCCESS                          | PARTIAL
  Megamenú     | —                              | —     | sin JS: enlaces en HTML                 | panel abierto, disparador subrayado | —
  Imágenes fal | aspect-ratio + fondo #E5E5E5   | —     | queda el fondo con alt                  | imagen                           | —
  GSAP         | página completa sin efecto     | —     | import falla: página estática           | efectos                          | revelados ya visibles no se rehacen
  Formulario   | botón desactivado, «Enviando…» | —     | icono + borde 2 px + texto, foco al campo | reemplaza el formulario, foco al mensaje | fallo parcial de D22 con WhatsApp
  Preguntas    | —                              | —     | —                                       | details abierto, «−»             | varias abiertas
```

Auto-decidido (estructural): estados en DESIGN.md y en CSS, formulario monocromo con los estados de D22 y preselección del servicio por CTA. El estado vacío no aplica a una portada estática.

#### Pass 3: User Journey & Emotional Arc. 5/10 → 7/10

```
  STEP | USER DOES                  | USER FEELS                       | PLAN SPECIFIES?
  1    | Llega a /                  | «¿qué hacen?»                    | titular + etiqueta (H1 en puerta, UC1)
  2    | Escanea el díptico         | «esto es para mí»                | sí, 3 + 3 caminos
  3    | Ve el bento                | «así se vería lo mío»            | sí, maquetas con nota «Ejemplo»
  4    | Ve diseño web              | «lo hacen de verdad»             | sí, capturas reales
  5    | Ve el bloque de IA         | «esto no lo hace cualquiera»     | sí, diagrama + franja de confianza
  6    | Lee preguntas              | «me quitan dudas»                | sí
  7    | Escribe en el formulario   | «me van a responder hoy»         | sí, preselección y éxito
```

5 segundos: el titular. 5 minutos: díptico, bento y bloque de IA. 5 años: casos reales (fuera de este plan). Queda en 7 porque la prueba antes de pedir confianza es UC3.

#### Pass 4: AI Slop Risk. 6/10 → 8/10

Clasificación PERSUADE. Sin rechazos duros confirmados. Riesgos: escultura de cromo e imágenes generadas en una agencia de IA, y «bento» y «premium» como etiquetas. Auto-decidido: dirección de arte para cada imagen e intención de movimiento con un solo momento de autor en la primera pantalla. La regla del método «sin fuentes por defecto como Roboto» choca con la regla del dueño del 12-oct: se respeta al dueño y se compensa con peso 800 y escala propia.

#### Pass 5: Design System Alignment. 5/10 → 8/10

La v3 deja el sistema «Comprobante» en `/` como variante declarada. Auto-decidido: escala tipográfica de 6 pasos, espaciado por ancho y tabla de estados en DESIGN.md. Decisión de gusto T2 para la puerta: convivencia de menú y pie monocromo con las portadas en marino mientras E4 no esté hecho.

#### Pass 6: Responsive & Accessibility. 3/10 → 8/10

Auto-decidido: forma de cada sección a 1440, 768 y 390 px, corte del menú en 1200 px, blancos táctiles de 44 px (incluido el botón del menú móvil, hoy de 40×40), foco sobre claro y sobre negro, nombre accesible del diagrama y titulares partidos con `aria-label`.

#### Pass 7: Unresolved Design Decisions

```
  DECISIÓN                                          | SI SE DIFIERE
  H1 visible (UC1)                                  | el H1 dice diseño web y la página marketing + IA
  Franja de prueba (UC3)                            | la portada pide confianza sin prueba
  Menú y pie con portadas en marino (T2)            | contraste a medio terminar en ~250 páginas
  Segundo CTA del héroe: «Ver soluciones» o WhatsApp (T3) | un ancla que lleva al bloque de abajo
```

Resueltas: 12. Quedan 4 para la puerta.

#### NOT in scope (diseño)

- Mockups nuevos: se usa el aprobado por el dueño.
- Rediseño de las páginas de servicio (E4, diferido).

#### What already exists (diseño)

DESIGN.md, estados del formulario de D22, `details` nativos, `MarcoCaptura`, nota «Ejemplo», regla de primera pantalla, `qa-responsive`, `qa-a11y`, `qa-sr` y `qa-form`.

#### Design Review Completion Summary

```
  +====================================================================+
  |         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | System Audit         | DESIGN.md existe; UI en /, menú y pie        |
  | Step 0               | 4/10; las 7 dimensiones                      |
  | Pass 1  (Info Arch)  | 5/10 → 8/10 after fixes                      |
  | Pass 2  (States)     | 3/10 → 8/10 after fixes                      |
  | Pass 3  (Journey)    | 5/10 → 7/10 after fixes                      |
  | Pass 4  (AI Slop)    | 6/10 → 8/10 after fixes                      |
  | Pass 5  (Design Sys) | 5/10 → 8/10 after fixes                      |
  | Pass 6  (Responsive) | 3/10 → 8/10 after fixes                      |
  | Pass 7  (Decisions)  | 12 resolved, 4 deferred (puerta)             |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (2 items)                           |
  | What already exists  | written                                     |
  | TODOS.md updates     | 0 items proposed                            |
  | Approved Mockups     | 0 generated, 1 approved (del dueño)         |
  | Decisions made       | 12 added to plan                            |
  | Decisions deferred   | 4 (UC1, UC3, T2, T3)                         |
  | Overall design score | 3/10 → 7/10                                 |
  +====================================================================+
```

#### Implementation Tasks (diseño)

- [ ] **D-T1 (P1, human: ~3h / CC: ~15min)** — DESIGN.md — escala tipográfica, espaciado, estados y foco de la variante v3
  - Surfaced by: pasadas 2 y 5
  - Files: DESIGN.md, src/styles/portada.css
  - Verify: `portada.test.mjs` lee los tokens
- [ ] **D-T2 (P1, human: ~1d / CC: ~40min)** — responsive — forma por ancho de las 8 secciones, menú desde 1200 px, blancos de 44 px
  - Surfaced by: pasada 6
  - Files: src/styles/portada.css, src/components/Navbar.astro, src/components/Footer.astro
  - Verify: `qa-responsive`
- [ ] **D-T3 (P1, human: ~3h / CC: ~20min)** — formulario — estados monocromo y preselección por CTA
  - Surfaced by: pasada 2
  - Files: src/components/ServiceForm.astro, src/pages/index.astro
  - Verify: `qa-form`
- [ ] **D-T4 (P2, human: ~2h / CC: ~15min)** — accesibilidad del movimiento — `aria-label` en titulares partidos, diagrama con `role="img"`
  - Surfaced by: pasada 6
  - Files: src/scripts/movimiento.ts, src/pages/index.astro
  - Verify: `qa-sr`

<!-- autoplan-accepted:design -->
- Un trabajo por bloque: la franja orienta (6 enlaces, uno por servicio); el díptico hace elegir camino con 3 enlaces por mitad (Marketing digital: Google y Meta Ads, SEO y GEO, WhatsApp Marketing; Proyectos de IA: Agentes de IA, Chatbots, Automatización con n8n); el bento muestra cómo se ve el resultado, con una sola flecha por tarjeta. Cada servicio tiene un solo dueño en la estructura de grupos de `site.ts` (Videos y Contenido con IA pertenecen a Marketing), y portada, menú y pie leen de ahí. Verificación: `portada.test.mjs` cuenta 3 enlaces por mitad del díptico y comprueba que ningún servicio aparece en dos grupos.
- Etiqueta del héroe (si la puerta conserva el H1 de D50): mayúscula y minúscula normales, Roboto 500 a 14 px, `#525252` sobre `#F5F5F5`, como máximo 2 líneas a 390 px. Verificación: la prueba de primera pantalla mide su alto a 390×844.
- Estados de interacción, en DESIGN.md (variante v3) y en el CSS: anillo de foco de 2 px con 2 px de separación, `#0A0A0A` sobre fondos claros y `#FFFFFF` sobre `#0A0A0A`; enlaces de texto con subrayado al pasar y al enfocar; botón negro a `#262626` al pasar, botón blanco a `#E5E5E5`, contorno con fondo `#FFFFFF`; disparador del menú abierto con subrayado de 2 px y `aria-expanded=true`; tarjetas del bento con la flecha desplazada 4 px al pasar (sin sombra nueva); preguntas con `details` nativos, el «+» pasa a «−», se pueden abrir varias; imágenes con `aspect-ratio` fijo y fondo `#E5E5E5` mientras cargan; enlaces visitados en el cuerpo con `#525252`. Verificación: `qa-a11y` mide el anillo de foco sobre fondo claro y sobre negro.
- Formulario en monocromo, con los estados de D22: error con icono, borde de 2 px `#0A0A0A` y texto que dice cómo corregir, unido con `aria-describedby` y foco al primer campo inválido; enviando con el botón desactivado y el texto «Enviando…»; éxito que reemplaza el formulario y recibe el foco; fallo de red con el mensaje de D22 y el enlace de WhatsApp como salida. Cada CTA que baja al formulario preselecciona su servicio (`hero` → definir, bloque de IA → proyectos de IA, «Hablemos.» → definir) y se ve «Servicio: X · cambiar». Verificación: `qa-form` en verde con la portada v3.
- Diseño por ancho (1440, 768 y 390 px). Héroe: a 390 el texto va primero y la escultura debajo a 280 px de ancho; etiqueta, titular y botón principal en la primera pantalla. Franja: a 390 se envuelve en 2 filas de 3, cada enlace de 44 px de alto. Díptico: a 768 y 390 se apila, primero la mitad blanca, la foto después de la lista. Bento: 1440 en dos filas (una tarjeta ancha y una angosta, luego tres iguales); 768 en dos columnas; 390 en una. Diseño web: a 390 una sola captura en navegador más el celular. Diagrama de IA: vertical por debajo de 768. Pie: 5 columnas a 1440, 2 a 768 y 390. Menú: escritorio desde 1200 px; por debajo, el botón del menú móvil de 44×44 px. Todo blanco táctil mide 44 px o más. Verificación: `qa-responsive` toma las tres anchuras y falla si algún blanco táctil mide menos de 44 px.
- Megamenú: abre con clic y teclado siempre, y al pasar el puntero con 150 ms de espera; cierra con 180 ms al salir. Paneles: Marketing 2 columnas (560 px), Inteligencia artificial 2 columnas (560 px), Diseño web 3 columnas (820 px), Recursos 2 columnas con subtítulos «Aprender» (Blog, Guías, Recursos, Casos de éxito, Cómo trabajamos) y «Explorar» (Proyectos, Precios, Miami y la columna Crecimiento) (640 px). Verificación: prueba de menú y pie.
- El bloque de cierre del pie no aparece en `/` (la portada termina en «Hablemos.» y su formulario), como hoy con `cierre={false}`. Verificación: `portada.test.mjs`.
- Escala tipográfica en Roboto, en DESIGN.md: display `clamp(2.5rem, 1.6rem + 4vw, 4.5rem)` 800; título de sección `clamp(2rem, 1.4rem + 2vw, 3rem)` 800 con tracking -0,02 em; título de tarjeta 1,25 rem 700; bajada 1,125 rem 400; cuerpo 1,0625 rem 400 con 62 caracteres de ancho máximo; etiqueta 0,875 rem 500. Espaciado vertical entre secciones: 128, 96 y 72 px (1440, 768 y 390). Verificación: `portada.test.mjs` lee los tokens en el CSS.
- Accesibilidad del movimiento: los titulares partidos por líneas conservan el texto completo en `aria-label` y los fragmentos van con `aria-hidden`; no se parten por debajo de 768 px y se vuelven a partir al redimensionar; el parallax de la escultura se apaga por debajo de 768 px; las maquetas del bento sin JavaScript se ven en su estado final. El diagrama SVG lleva `role="img"` y un `aria-label` que describe el flujo. Verificación: `qa-sr` y `qa-movimiento`.
- Intención del movimiento: un solo momento de autor en la primera pantalla (la entrada CSS del héroe); en el resto, tres momentos de GSAP (trazo del diagrama, armado del bento y parallax) y revelados de sección de 16 px y 400 ms con ease-out, una sola vez por sección. Verificación: revisión en `/design-review` tras construir.
- Respuesta citable como ficha: etiqueta «En resumen», texto de 20 px, fecha en `#525252`, 680 px de ancho máximo, entre el bloque de IA y las preguntas. Verificación: `portada.test.mjs` (40 a 60 palabras y fecha).
- Dirección de arte de las imágenes generadas: escultura de cromo plateado sobre fondo neutro; foto del díptico de marketing: un celular con un anuncio de un negocio panameño; foto del díptico de IA: una persona en una oficina de Panamá frente a una laptop con un asistente de chat; bento: creativo de anuncio, miniaturas de video y producto. Ninguna muestra marcas reales ni sugiere ser de un cliente; el texto alternativo describe la imagen. Verificación: revisión en `/design-review`.
<!-- /autoplan-accepted:design -->

<!-- autoplan-baseline-edits:design {"sourceSha256":"02f92ca2c5b9fdbe24ad89d048e31f69d54088a6b0211862ccbc844e7350a59a","replacements":[{"oldText":"cada una con su línea, una lista de 4 o 5 enlaces con flecha y filetes, y una foto a color.","newText":"cada una con su línea, una lista de 3 enlaces con flecha y filetes, y una foto a color."},{"oldText":"| Díptico 01 Marketing digital | Google Ads, Facebook e Instagram Ads, SEO y GEO, WhatsApp Marketing y Contenido para redes (`/marketing/contenido-redes-sociales-panama/`) |","newText":"| Díptico 01 Marketing digital | Google y Meta Ads (`/marketing/`), SEO y GEO (`/crecimiento/seo-posicionamiento-web-panama/`) y WhatsApp Marketing (`/marketing/whatsapp-marketing-masivo-panama/`) |"},{"oldText":"| Díptico 02 Proyectos de IA | Agentes de IA (`/inteligencia-artificial-para-empresas-panama/`), Chatbots (`/funcionalidades/chatbots-ia-web-wazacrm-panama/`), Automatización con n8n (`/marketing/automatizaciones-n8n-panama/`) y Videos con IA (`/marketing/videos-publicitarios-panama/`) |","newText":"| Díptico 02 Proyectos de IA | Agentes de IA (`/inteligencia-artificial-para-empresas-panama/`), Chatbots (`/funcionalidades/chatbots-ia-web-wazacrm-panama/`) y Automatización con n8n (`/marketing/automatizaciones-n8n-panama/`) |"},{"oldText":"fondo `#F5F5F5`, etiqueta pequeña en mayúsculas,","newText":"fondo `#F5F5F5`, etiqueta pequeña (Roboto 500, 14 px, mayúscula y minúscula normales, como máximo 2 líneas a 390 px),"}]} -->

### Fase 2.5, DX (autoplan run main-20261021-231921, modo DX POLISH)

La fase se activó por las coincidencias del término «API» (la de WhatsApp); la superficie de desarrollador real son los scripts del repo con los que se construye, verifica, publica y revierte esta portada.

#### Step 0

- **Tipo de producto:** documentación y herramienta de línea de comandos interna (scripts `npm`, `scripts/qa-*.mjs`, `verify.mjs`, runbooks). Auto-decidido por la regla de /autoplan.
- **0A. Persona:**

```
TARGET DEVELOPER PERSONA
========================
Who:       un agente de código (Claude Code) o el dueño, que construye y publica la portada
Context:   rama propia, máquina Windows con Git Bash, sin staging; un push a main publica
Tolerance: 5 minutos para el ciclo de pruebas; unos 15 para la puerta completa
Expects:   un comando por paso, errores que digan qué cambiar, una reversión probada
```

- **0B. Narrativa:** «Abro el plan y veo tres puertas distintas: `npm run verify`, un `qa-movimiento` que no sé cómo correr y Lighthouse aparte. Corro `verify` y pasa, pero no sé si probó la portada nueva o la vieja, porque `qa-lcp` todavía busca la cascada. Necesito un fixture de enlaces y nadie me dice cómo generarlo. Si algo falla en producción, el único botón es revertir el merge entero, menú y pie incluidos, y el plan me pide resolver conflictos "a favor de la versión anterior", lo que podría borrar arreglos posteriores.» (Predicción a partir del plan y del código leído, no una observación de uso.)
- **0C. Benchmark:** referencia interna, sin búsqueda externa. D53 (ScrollTrigger diferido) y D54 (vitrina) ya pasaron por `verify` con `presupuestos.json` y `qa-lcp`; la publicación de D53 se revirtió una vez. Reloj: desde clonar hasta ver `verify` en verde con la v3. Hoy, en máquina limpia, unos 20 minutos [estimado]: `npm ci`, Chrome, `npm install -g lighthouse`, `npm run build`, `npm run verify`, `qa-movimiento` a mano y 3 corridas de Lighthouse. Meta auto-decidida: Competitivo para el ciclo interno (menos de 5 minutos con `dist/` caliente) y una sola puerta de unos 15 minutos.
- **0D. Momento mágico:** `npm run verify` imprime en una línea por chequeo qué probó de la v3 y qué cambiar si falla. Vehículo: los scripts existentes, sin servicios nuevos.
- **0E. Modo:** DX POLISH (regla de /autoplan).

#### Voces duales (DX)

- **Claude SUBAGENT (DX — independent review),** entrada `dx 247bdbd4…` confirmada: 5,5/10, sin hallazgos CAP4. Altos: `qa-movimiento`, `qa-responsive` y `qa-sr` no están en `verify`; dos presupuestos de JS que compiten (60 KB contra `presupuestos.json`); errores de `qa-movimiento` sin arreglo, recuperación ni contexto (CAP6); runbook de reversión incompleto (CAP6); día P sin comando (CAP6); `qa-lcp` con chequeos de D53 que se rompen; bloque de decisiones duplicado; sin interruptor de movimiento en producción. Medios: fixture sin generador, `CREDITOS.json` a medias, prop `v3` mal nombrada, umbrales fijos, verificaciones mezcladas sin marcar.
- **Codex SAYS (DX — developer experience challenge),** completado (P0). Críticos: no se llega a «v3 en verde» en 5 minutos (sin documento de arranque, Node 24 en CI y 20 en Docker, Chrome y Lighthouse externos); la puerta de la v3 no está en `verify` ni en el CI; `qa-movimiento` no tiene contrato ejecutable; la reversión no identifica el SHA del merge ni define conflictos de forma segura. Altos: `medir.mjs` no mide TBT ni acepta número de corridas; `qa-lcp`, `qa-a11y` y `portada.test.mjs` están atados a la v2; errores sin códigos ni artefactos; sin documento de entrada; el flujo de imágenes no es reproducible; el congelamiento de mediciones no está aplicado como guardia; juntar portada y menú agranda el radio. Medios: convenciones de CLI inconsistentes; el fixture no es reproducible. Su recomendación: no aprobar hasta que la puerta de la v3 sea reproducible y la aplique el CI.

```
DX DUAL VOICES — CONSENSUS TABLE:
  Dimension                           Claude  Codex  Consensus
  1. Getting started < 5 min?          No      No     CONFIRMED (no)
  2. API/CLI naming guessable?         No      No     CONFIRMED (no)
  3. Error messages actionable?        No      No     CONFIRMED (no)
  4. Docs findable & complete?         No      No     CONFIRMED (no)
  5. Upgrade path safe?                No      No     CONFIRMED (no)
  6. Dev environment friction-free?    No      No     CONFIRMED (no)
```

#### Pasadas

- **Pass 1, Getting Started: 4/10 → 7/10.** Auto-decidido: una sola puerta en `verify`, el ciclo interno documentado en `CLAUDE.md`. Queda en 7: Chrome y el CLI de Lighthouse siguen siendo externos (a TODOS.md, junto con la alineación de versiones de Node).
- **Pass 2, CLI: 5/10 → 8/10.** Auto-decidido: `qa-movimiento` con la misma convención de argumentos que `qa-lcp`, ids `MOV-01` a `MOV-08`, generador del fixture con `--write` y `--check`, `medir.mjs --runs`, claves fijas de `CREDITOS.json`, prop `variante`.
- **Pass 3, Errores (agent-ready-v1): 4/10 → 8/10.**

```
ERROR PATH MATRIX (agent-ready-v1)
Path                         | Class      | what | fix  | recovery | code | context | trace | redaction | channel | Cap
qa-movimiento (chequeo)      | validation | pass | pass | pass     | pass | pass    | N/A   | pass      | pass    | —   (antes CAP6:fix, recovery, context)
qa-movimiento (sin Lighthouse)| usage     | pass | pass | pass     | pass | pass    | N/A   | pass      | pass    | —   (exit 2, nunca PASS)
prueba de menú y pie         | validation | pass | pass | pass     | N/A  | pass    | N/A   | pass      | pass    | —
reversión / día P            | runbook    | pass | pass | pass     | N/A  | pass    | N/A   | pass      | N/A     | —   (antes CAP6:recovery y CAP6:fix)
error inesperado (Playwright)| unexpected | pass | pass | pass     | pass | pass    | pass  | pass      | pass    | —   (pila + traza en audit/qa-movimiento/)
```

- **Pass 4, Documentación: 4/10 → 7/10.** Auto-decidido: sección «Portada v3: comandos» en `CLAUDE.md`, marcas [auto] y [revisión] en cada verificación y método del chequeo `pv3-`. El bloque de obligaciones aceptadas repetido al final del plan es el formato del exportador de /autoplan; al construir se lee primero el cuerpo y el bloque manda en caso de diferencia.
- **Pass 5, Upgrade y reversión: 4/10 → 8/10.** Auto-decidido: etiqueta y push explícitos, interruptor `data-mov-off` como paso 0, revisión commit por commit en vez de «a favor de la versión anterior», revertir la reversión para volver a publicar, comando del día P.
- **Pass 6, Entorno: 5/10 → 7/10.** Auto-decidido: umbrales por variable de entorno solo en local; artefactos en `audit/qa-movimiento/`. Diferido: Node alineado en CI y Docker, y Lighthouse como dependencia de desarrollo.
- **Pass 7, Comunidad: 5/10 → 5/10.** Repo privado de un solo dueño; no aplica más allá de dejar los comandos escritos. Sin hallazgos que corregir.
- **Pass 8, Medición: 6/10 → 8/10.** El reloj del ciclo interno y la duración de `verify` se imprimen al final de `verify`; las corridas de Lighthouse en producción quedan anotadas para restarlas de GA4.

#### Developer Journey Map

```
STAGE           | DEVELOPER DOES                                   | FRICTION POINTS                       | STATUS
1. Discover     | Lee CLAUDE.md «Portada v3: comandos»             | antes no existía                      | fixed
2. Install      | npm ci, Chrome, lighthouse global                | dependencias externas                 | deferred (TODOS)
3. Hello World  | npm run build && node --test portada.test.mjs    | sin bucle documentado                 | fixed
4. Real Usage   | npm run verify (incluye qa-movimiento, responsive, sr) | tres puertas sueltas            | fixed
5. Debug        | lee MOV-0X con valor, umbral y arreglo           | «PASS o FAIL» sin contexto            | fixed
6. Upgrade      | runbook: data-mov-off, tag, revert -m 1, día P   | conflictos «a favor de la anterior»   | fixed
```

#### First-Time Developer Confusion Report

```
FIRST-TIME DEVELOPER REPORT
Persona: agente de código en una rama nueva
T+0:00  Lee el plan: tres puertas de merge. (resuelto: una sola en verify)
T+0:30  Busca cómo correr qa-movimiento: no hay comando. (resuelto: contrato y argumentos)
T+1:00  Necesita el fixture de enlaces: sin generador. (resuelto: enlaces-menu-pie.mjs --write)
T+2:00  verify pasa, pero qa-lcp busca la cascada. (resuelto: migración de pruebas v2)
T+3:00  Tiene lo que necesita; Lighthouse global sigue siendo un paso aparte. (diferido)
```

#### DX Review Scorecard

```
+====================================================================+
|              DX PLAN REVIEW — SCORECARD                             |
+====================================================================+
| Dimension            | Score  | Prior  | Trend  |
|----------------------|--------|--------|--------|
| Getting Started      | 7/10   | 4/10   | ↑      |
| API/CLI/SDK          | 8/10   | 5/10   | ↑      |
| Error Messages       | 8/10   | 4/10   | ↑      |
| Documentation        | 7/10   | 4/10   | ↑      |
| Upgrade Path         | 8/10   | 4/10   | ↑      |
| Dev Environment      | 7/10   | 5/10   | ↑      |
| Community            | 5/10   | 5/10   | =      |
| DX Measurement       | 8/10   | 6/10   | ↑      |
+--------------------------------------------------------------------+
| TTHW                 | ~5 min (ciclo interno) | ~20 min | ↑ |
| Competitive Rank     | Competitive (ciclo interno)                 |
| Magical Moment       | designed via verify con líneas MOV-0X      |
| Product Type         | Documentation + CLI interna                 |
| Mode                 | POLISH                                      |
| Overall DX           | 7.3/10 | 4.6/10 | ↑      |
+====================================================================+
| DX PRINCIPLE COVERAGE                                               |
| Zero Friction      | gap (Chrome y Lighthouse externos)             |
| Learn by Doing     | covered (bucle interno)                        |
| Fight Uncertainty  | covered (MOV-0X con arreglo)                   |
| Opinionated + Escape Hatches | covered (umbrales locales, data-mov-off) |
| Code in Context    | covered (comandos copiables)                   |
| Magical Moments    | covered                                        |
| Agents Are Users   | covered (exit codes, stderr, SKIP explícito)   |
+====================================================================+
```

#### DX Implementation Checklist

```
DX IMPLEMENTATION CHECKLIST
[ ] Ciclo interno < 5 min: npm run build && node --test scripts/portada.test.mjs
[ ] verify corre qa-movimiento, qa-responsive y qa-sr
[ ] Un solo presupuesto de JS (presupuestos.json, tope bajado)
[ ] qa-lcp, qa-a11y y portada.test.mjs migrados a la v3
[ ] MOV-01 a MOV-08 con valor, umbral, arreglo y código de salida
[ ] medir.mjs con --runs y TBT
[ ] enlaces-menu-pie.mjs --write y --check
[ ] CREDITOS.json con claves fijas
[ ] data-mov-off como paso 0
[ ] Runbook de reversión y día P en DECISIONES.md (D56)
[ ] CLAUDE.md «Portada v3: comandos»
```

#### NOT in scope (DX)

- Node alineado entre CI (24) y Docker (20), y `lighthouse` como dependencia de desarrollo: van a TODOS.md (fuera del radio de la portada).

#### What already exists (DX)

`scripts/verify.mjs` (un punto de entrada local y en CI), `scripts/presupuestos.json`, `scripts/medir.mjs` (con su mensaje de instalación de Lighthouse), `qa-lcp`, `qa-a11y`, `qa-responsive`, `qa-sr`, `seo-congelado`, `check-prod.sh`, `optimize-images.mjs` y `gasto-ia.mjs`.

#### Implementation Tasks (DX)

- [ ] **X-T1 (P1, human: ~3h / CC: ~15min)** — verify — sumar qa-movimiento, qa-responsive y qa-sr; bajar `portada.jsGzipMax`
  - Surfaced by: Pass 1 y 2
  - Files: scripts/verify.mjs, scripts/presupuestos.json
  - Verify: `npm run verify`
- [ ] **X-T2 (P1, human: ~1d / CC: ~45min)** — pruebas — migrar qa-lcp, qa-a11y y portada.test.mjs a la v3
  - Surfaced by: las dos voces
  - Files: scripts/qa-lcp.mjs, scripts/qa-a11y.mjs, scripts/portada.test.mjs
  - Verify: `npm run verify`
- [ ] **X-T3 (P1, human: ~3h / CC: ~20min)** — herramientas — `medir.mjs --runs` con TBT y `enlaces-menu-pie.mjs`
  - Surfaced by: Pass 2
  - Files: scripts/medir.mjs, scripts/enlaces-menu-pie.mjs, scripts/fixtures/enlaces-menu-pie.json
  - Verify: `medir.test.mjs` y la prueba de menú y pie
- [ ] **X-T4 (P2, human: ~1h / CC: ~10min)** — docs — runbook en DECISIONES.md y sección de comandos en CLAUDE.md
  - Surfaced by: Pass 4 y 5
  - Files: docs/specs/rediseno-elementoweb/DECISIONES.md, CLAUDE.md
  - Verify: lectura

<!-- autoplan-accepted:dx -->
- Una sola puerta de merge: `scripts/verify.mjs` suma tres pasos, `qa-movimiento`, `qa-responsive` y `qa-sr`, después de `qa-lcp`; el CI de despliegue ya corre `npm run verify`, así que la puerta no se puede saltar sin querer. Verificación: `npm run verify` falla si cualquiera de los tres falla.
- Un solo presupuesto de JS: el de `scripts/presupuestos.json` (`portada.jsGzipMax`, hoy 36 400 B, medido 35 201 B el 13-oct). Al sacar GSAP del menú se baja al medido nuevo más un 20 %, con el motivo en su `_nota` y en el commit. `qa-movimiento` solo informa los bytes y deja de tener su propio tope de 60 KB; esto reemplaza la parte de bytes de E2 (la parte de TBT y de la tarea larga sigue). Verificación: `presupuestos` en verde con el tope nuevo.
- Migración de las pruebas de la v2: `qa-lcp.mjs` pierde los chequeos de la cascada, de la vitrina (D54) y de los paneles apilados (D53) y gana los del héroe v3; `qa-a11y.mjs` pierde los de la vitrina y los IDs del formulario v2 que cambien; `portada.test.mjs` se reescribe entero. Ninguna prueba vieja queda en verde por no encontrar su selector. Verificación: cada script de `qa-*` imprime qué secciones probó.
- Contrato de `scripts/qa-movimiento.mjs`: se invoca como los demás `qa-*`, `node scripts/qa-movimiento.mjs [base]` (por defecto `http://localhost:4610`, con el servidor de `verify`). Cada chequeo tiene un id estable (`MOV-01` a `MOV-08`) y su línea dice valor medido, umbral y qué cambiar (por ejemplo «MOV-03 gsap-antes-de-interaccion: pedido en la carga; mueve el import() detrás del oyente de primera interacción en src/scripts/movimiento.ts»). Sale con código 1 si algo falla, con los fallos en stderr. Si falta el CLI de Lighthouse sale con código 2 y el mensaje de instalación de `medir.mjs`; la bandera `--sin-lighthouse` imprime «SKIP MOV-05» y nunca PASS, y `verify` no la pasa. Los chequeos de tiempo (5 y 7) usan la mediana de 3 corridas e imprimen «chequeo de tiempo: correr una vez más; si falla dos veces, es real». El encabezado imprime la ruta de Chrome, la versión de Lighthouse, la URL y el freno de CPU. Un error inesperado imprime la pila y guarda captura y traza en `audit/qa-movimiento/`. Los umbrales aceptan variables de entorno solo para diagnóstico local (`MOV_TBT_MAX`); `verify` usa siempre los de este plan. Verificación: una prueba unitaria del formato de salida.
- `scripts/medir.mjs` gana `--runs N` y devuelve el TBT además de LCP, CLS y rendimiento, para que `qa-movimiento` y el día P lo usen. Verificación: `medir.test.mjs`.
- Fixture de enlaces: `node scripts/enlaces-menu-pie.mjs --write` lo genera desde un build de `main` antes de tocar Navbar o Footer (JSON ordenado con texto y destino de cada enlace y el SHA del commit de origen); `--check` lo usa la prueba. Si falta un enlace, el fallo lista las URL que faltan y dice «si es a propósito, regenera con --write y justifícalo en el commit». Verificación: la prueba de menú y pie.
- `CREDITOS.json` con claves fijas por archivo: `archivo`, `ancho`, `bytes`, `limite_bytes`, `modelo`, `prompt`, `fecha` (ISO 8601) y `costo_usd` (número). La prueba de imágenes, al fallar, imprime el archivo, los bytes reales y declarados, el límite y «vuelve a codificar con scripts/optimize-images.mjs». Verificación: la prueba de imágenes.
- Interruptor de movimiento: una constante `MOVIMIENTO_ACTIVO` en `src/scripts/movimiento.ts` y el atributo `data-mov-off` en `<html>`, que el CSS respeta, apagan todos los efectos sin tocar menú, pie ni contenido. Es el paso 0 de la reversión. Verificación: `qa-movimiento` corre una vez con `data-mov-off` y comprueba que nada se mueve.
- Runbook de reversión completo: al integrar, `git tag portada-v3 <sha del merge>` y `git push origin portada-v3` (con permiso del dueño); paso 0, el interruptor de movimiento; antes de revertir, `git log portada-v3..main -- src/components/Navbar.astro src/components/Footer.astro` y decidir commit por commit qué se conserva, sin descartar en bloque; volver a publicar la v3 después de una reversión pide revertir la reversión. Día P: `node scripts/medir.mjs https://elementoweb.com/ --runs 3` (mediana) y `bash scripts/check-prod.sh`, anotando cuántas corridas de Lighthouse se hicieron y a qué hora, para restarlas de GA4. Verificación: el runbook está en DECISIONES.md (D56).
- Bucle interno documentado en `CLAUDE.md` (sección «Portada v3: comandos»): `npm run build && node --test scripts/portada.test.mjs` para el ciclo de pruebas, `npm run verify` como puerta completa (unos 15 minutos) y el requisito del CLI `lighthouse` y de Chrome. Verificación: lectura.
- Si la puerta elige «solo la portada primero», la prop se llama `variante="monocromo"` (no `v3`). Elegir «todo el sitio» significa que la reversión de la portada arrastra el menú y el pie. Verificación: lectura del plan.
- Cada línea «Verificación» del plan lleva la marca [auto] (la corre `verify`) o [revisión] (la hace una persona o `/design-review`). La comprobación del prefijo `pv3-` busca en el HTML construido elementos con `class*="pv3-"` fuera de `<main>`. Verificación: lectura del plan.
<!-- /autoplan-accepted:dx -->

<!-- autoplan-baseline-edits:dx {"sourceSha256":"11619e9cd4a29115399e7d2fcd08861296ae9d58547fdcf5d4b52c23c616de24","replacements":[{"oldText":"(4) el JS propio pedido antes de la primera interacción suma ≤ 60 KB comprimido (la analítica de terceros, gtag, se excluye del total y se informa aparte, sin cambiar cuándo carga);","newText":"(4) informa los bytes de JS propio pedidos antes de la primera interacción (el tope lo pone `scripts/presupuestos.json`; la analítica de terceros, gtag, se informa aparte y no cambia cuándo carga);"},{"oldText":"Antes del merge, bloqueante: `npm run verify`, `qa-movimiento` en PASS y Lighthouse móvil local ≥ 90.","newText":"Antes del merge, bloqueante: `npm run verify`, que ahora corre también `qa-movimiento` (con Lighthouse móvil local ≥ 90), `qa-responsive` y `qa-sr`."},{"oldText":"Si después hubo commits que tocan Navbar o Footer, se resuelven los conflictos a favor de la versión anterior a la v3.","newText":"Antes de revertir se listan los commits posteriores sobre Navbar y Footer (`git log portada-v3..main -- src/components/Navbar.astro src/components/Footer.astro`) y se decide uno por uno qué se conserva; el paso 0 es apagar el movimiento con `data-mov-off`."},{"oldText":"reciben una prop `v3` que solo pasa `/`","newText":"reciben una prop `variante=\"monocromo\"` que solo pasa `/`"}]} -->

<!-- autoplan-accepted:eng -->
- Formulario: la portada usa `ContactForm`, el que ya está en producción, no `ServiceForm`, por la decisión del 17-oct (ServiceForm sigue sin activar hasta la fase 3, `ServiceForm.astro:2`). Verificación [auto]: `qa-form` y `portada.test.mjs` encuentran `ContactForm` en `#formulario`.
- Lighthouse: `lighthouse` entra como devDependency con versión fija y `medir.mjs` lo llama desde `node_modules/.bin`. En el CI (`CI=true`), `qa-movimiento` corre los chequeos deterministas (MOV-01, 02, 03, 04, 06 y 08) e imprime «SKIP MOV-05» y «SKIP MOV-07», nunca PASS. En local, `verify` los corre todos y su salida completa se pega en el PR, que no se integra sin ella. Verificación [auto]: `npm ci && npm run verify` pasa en el CI sin un CLI global; [revisión]: el PR trae la salida de MOV-05 y MOV-07.
- Navegación con un dueño por servicio: `site.ts` gana `grupos`, una tabla explícita donde cada slug tiene exactamente un dueño. WhatsApp Marketing pertenece a Marketing; Automatizaciones (n8n) y Chatbots pertenecen a Inteligencia artificial (Chatbots sale de la columna Funcionalidades de Diseño web). El menú, el pie y el acordeón móvil leen de `grupos`. El díptico y el bento son bloques de la portada, no grupos, y pueden enlazar a cualquier dueño. Verificación [auto]: prueba de que ningún slug tiene dos dueños.
- Primera interacción: GSAP se pide con `wheel`, `touchstart`, `pointerdown` o `keydown`, nunca con `scroll` (la restauración del scroll y el salto a un ancla lo disparan en la carga). Con `prefers-reduced-motion` o `data-mov-off` nunca se llama `import()`. Los revelados GSAP se preparan dentro de `requestAnimationFrame` y solo si están más de una pantalla por debajo del borde inferior. Verificación [auto]: MOV-03 corre también con `#formulario` en la URL y con el scroll restaurado; MOV-02 comprueba que no hay pedido de GSAP.
- Fixture de enlaces: `--check` compara el conjunto de hrefs internos únicos por región (menú de escritorio, menú móvil, pie): los de `main` deben estar todos en la versión nueva. El texto solo se informa. Verificación [auto]: la prueba de menú y pie.
- Menú: el corte pasa de 1024 a 1200 px en el script y en el CSS a la vez, desde `--corte-menu` y una constante. Los paneles se ocultan con `visibility` e `inert`, no con `display`, para que el cierre tenga transición; Escape devuelve el foco y el cambio de corte cierra bien aunque la transición siga. El hover abre solo con `pointerType === 'mouse'`, y pasar de un disparador a otro cambia de panel sin cerrar. El acordeón móvil atrapa el foco dentro del diálogo. Verificación [auto]: casos de playwright en `qa-a11y` para teclado, Escape, Tab sobre paneles `inert`, foco atrapado y hover táctil.
- Presupuestos: al sacar GSAP del menú se miden todas las plantillas de `presupuestos.json`, no solo la portada, y cada tope queda en lo medido más un 3 % (la regla de `presupuestos.json`), con el motivo en `subida`. Esto reemplaza el «más un 20 %» del bloque DX. Verificación [auto]: `presupuestos` en verde.
- `qa-responsive` y `qa-sr` entran a la puerta después de correrlos sobre `main`: lo que ya falle se arregla o se anota como línea base en un commit aparte, antes del trabajo de la v3. La regla nueva de 44 px se exige solo en `/`, el menú y el pie. Cada `qa-*` falla si no encuentra una sección que espera. Verificación [auto]: `verify` en verde sobre `main` con los dos pasos nuevos.
- Ancla: `--nav-h` es una variable CSS compartida por el menú y por `scroll-margin-top`; `qa-responsive` comprueba que, tras un clic en «Ver soluciones», el díptico no queda bajo la barra a 1440 y 390 px. Reemplaza la lectura del valor en el CSS. Verificación [auto].
- Titulares partidos: un `span` visualmente oculto con el texto completo y fragmentos con `aria-hidden`, en lugar de `aria-label`; el re-partido al redimensionar lleva debounce y no mueve el diseño. Verificación [auto]: `qa-sr` lee el titular completo una vez; CLS ≤ 0,1.
- LCP: MOV-06 y `qa-lcp` comprueban el elemento LCP a 390 y 1440 px. Verificación [auto].
- Selectores `.pv3-`: además de buscar en el HTML, cada selector de `portada.css` que contenga `.pv3-` empieza con `.pv3-` o con `main`. Verificación [auto].
- `CREDITOS.json` público lleva solo archivo, ancho, bytes, límite, modelo y fecha; el prompt y el costo van en `docs/specs/rediseno-elementoweb/creditos-portada-v3.json`. El enlace de WhatsApp con `target="_blank"` lleva `rel="noopener"`. Verificación [auto]: la prueba de imágenes lee los dos archivos.
- Reversión: el filtro de `git log portada-v3..main` incluye `src/lib/site.ts`, `scripts/`, `src/styles/` y `src/pages/index.astro`, además de Navbar y Footer. La salida `skip_checks` de `deploy.yml` queda documentada como vía de emergencia si `verify` falla sobre la reversión. La reversión se ensaya en una rama desechable antes del merge. Aprobar este plan en la puerta incluye autorizar la reversión si el día P da Lighthouse móvil < 85 o LCP > 3,5 s. Verificación [revisión]: runbook en D56 con el ensayo anotado.
- Partir en dos PR (menú, pie y `grupos` primero; portada después) es la recomendación de ingeniería y se decide en la puerta como T1.
- TODOS.md al cerrar: E4 (páginas de servicio a monocromo), E6 (OG nueva), alinear Node 24 del CI con Node 20 de Docker, y quitar el `npm install -g lighthouse` de los mensajes de `medir.mjs`.
- Precedencia: este bloque de ingeniería manda sobre los anteriores donde chocan. En concreto reemplaza el «scroll» como disparador en la condición (e) de efectos premium, el `aria-label` de los titulares partidos en Accesibilidad del movimiento, la lectura de `scroll-margin-top` en el CSS (Sección 4), el «más un 20 %» y el tope de 60 KB de E2, el «`verify` no la pasa» de `--sin-lighthouse` en el contrato de `qa-movimiento` (en el CI la salida es SKIP de MOV-05 y MOV-07, nunca PASS) y el filtro corto de `git log` del runbook. Verificación [revisión]: lectura del plan al implementar.
<!-- /autoplan-accepted:eng -->

<!-- autoplan-baseline-edits:eng {"sourceSha256":"ad19497fa659eed71d59a3ac6d24776fb979873c8d548cfedb1307fc62fd1ace","replacements":[{"oldText":"el formulario por servicio que ya existe (ServiceForm), en blanco.","newText":"el formulario de contacto que ya está en producción (ContactForm), en blanco."},{"oldText":"- Reusar: `ServiceForm.astro`, `MarcoCaptura.astro`","newText":"- Reusar: `ContactForm.astro`, `MarcoCaptura.astro`"},{"oldText":"en la primera interacción (scroll, puntero, tecla o toque), nunca en la carga ni en el tiempo libre (la reversión de D53","newText":"en la primera interacción real (rueda, toque, puntero o tecla; nunca el evento `scroll`), nunca en la carga ni en el tiempo libre (la reversión de D53"},{"oldText":"| Panel Inteligencia artificial | IA para empresas, Chatbots, Automatizaciones (n8n), WhatsApp Marketing y `saas`; tarjeta: IA para empresas |","newText":"| Panel Inteligencia artificial | IA para empresas, Chatbots, Automatizaciones (n8n) y `saas`; tarjeta: IA para empresas (WhatsApp Marketing queda solo en Marketing) |"}]} -->

<!-- AUTONOMOUS DECISION LOG -->
## Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 1 | CEO | Modo SELECTIVE EXPANSION | Mechanical | regla de /autoplan | lo fija el skill | otros modos |
| 2 | CEO | Pedido de GSAP del dueño como requisito, con LCP sin animación y GSAP en la primera interacción | Mechanical | P1 | instrucción directa del dueño; la protección viene de la reversión de D53 | GSAP en el tiempo libre |
| 3 | CEO | E1 módulo único de movimiento | Mechanical | P2, P4 | en el radio, evita duplicar el patrón de servicios-apilados | efectos sueltos por sección |
| 4 | CEO | E2 presupuesto de JS y TBT como prueba | Mechanical | P1 | convierte el umbral de D14 en una prueba | solo medir en producción |
| 5 | CEO | E3 tarjeta destacada en el megamenú | Mechanical | P2 | estilo Stripe pedido, menos de un día | sin tarjeta |
| 6 | CEO | E4 servicios al sistema monocromo, diferido | Mechanical | P3 | fuera del radio (XL) | incluirlo |
| 7 | CEO | E5 franja de prueba, saltada | Mechanical | respeto a la regla 4 del dueño | el dueño pidió sin proyectos | incluirla |
| 8 | CEO | E6 imagen OG, diferida | Mechanical | P3 | no bloquea | incluirla |
| 9 | CEO | E7 menú móvil en acordeón | Mechanical | P2 | parte del menú pedido | pantalla completa plana |
| 10 | CEO | Menú con CSS, sin GSAP, en todo el sitio | Mechanical | P5, P3 | GSAP del menú pesa 27,7 KB en el JS inicial de todas las páginas | GSAP en el megamenú |
| 11 | CEO | Analítica de terceros fuera del presupuesto de JS, sin cambiar cuándo carga | Mechanical | P3 | moverla cambia GA4 y necesita permiso del dueño | cargar gtag en la primera interacción |
| 12 | CEO | Reversión por merge commit con `git revert -m 1` | Mechanical | P5 | funciona con cualquier historial de main | rango de etiquetas |
| 13 | CEO | Conservar `["description","h1","schema"]` para `/` en cambios-permitidos | Mechanical | P5 | el snapshot es anterior a D50 | reducir a schema |
| 14 | CEO | Aprobación del documento CEO (0H) | Mechanical | P6 | regla de /autoplan | revisar o pausar |
| 15 | CEO | Codex CEO: un reintento tras el error del prompt, luego unavailable | Mechanical | P6 | el primer rechazo fue por pedir la línea en español | más reintentos |
| 16 | CEO | `scroll-margin-top` en las anclas | Mechanical | P1 | brecha de la sección 4 | dejar el título tapado |
| 17 | CEO | Prefijo `pv3-` y estructura única de grupos en `site.ts` | Mechanical | P4, P5 | lección de D53 y lista repetida en el pie | clases sin prefijo |
| 18 | CEO | `data-cta-loc` en los CTA nuevos y event-dictionary | Mechanical | P1 | conserva la medición de GA4 | sin atributos |
| 19 | CEO | Imágenes generadas sin sugerir clientes, nota «Ejemplo» en el bento | Mechanical | P1 | riesgo de «slop» y de confianza | sin regla |
| 20 | CEO | T1: dividir en PR-A (menú y pie sin GSAP) y PR-B (portada) | Taste | P6 | la voz Claude lo propone; el plan lo junta y la reversión se lleva todo | un solo merge |
| 21 | CEO | UC1, UC2 y UC3 a la puerta | User Challenge | — | premisas en choque con reglas del dueño | auto-decidir |
| 22 | Design | Reusar el mockup aprobado en vez de generar nuevos | Mechanical | P4 | el dueño ya eligió | mockups nuevos |
| 23 | Design | Un trabajo por bloque y dueño único por servicio | Mechanical | P5 | confirmado por las dos voces | tres listas repetidas |
| 24 | Design | Etiqueta H1 en mayúscula y minúscula, 14 px, 2 líneas máx. | Mechanical | P5 | no cabe en mayúsculas a 390 px | mayúsculas |
| 25 | Design | Tabla de estados y foco sobre claro y sobre negro | Mechanical | P1 | estados faltantes (dos voces) | dejarlo al implementador |
| 26 | Design | Formulario monocromo con estados de D22 y preselección | Mechanical | P1 | dos voces | error en rojo |
| 27 | Design | Forma por ancho, menú desde 1200 px, blancos de 44 px | Mechanical | P1 | móvil sin describir (dos voces) | apilar sin más |
| 28 | Design | Megamenú con clic, teclado y puntero con 150 ms | Mechanical | P5 | Stripe abre al pasar; accesible con clic | solo puntero |
| 29 | Design | Sin bloque de cierre en `/` | Mechanical | P5 | cierres duplicados | dos llamados seguidos |
| 30 | Design | Escala tipográfica y espaciado en DESIGN.md | Mechanical | P1 | «bloques limpios» sin medida | sin escala |
| 31 | Design | Accesibilidad del movimiento y del diagrama | Mechanical | P1 | lector de pantalla | partir sin aria |
| 32 | Design | Respuesta citable como ficha «En resumen» | Mechanical | P5 | texto suelto | introducción del FAQ |
| 33 | Design | Dirección de arte de las imágenes | Mechanical | P1 | Codex: imágenes sin dirección | sin regla |
| 34 | Design | T2: menú y pie monocromo con portadas en marino | Taste | P3 | recomendación: el menú y el pie blancos sobre la portada marino, con regla escrita en DESIGN.md hasta E4 | fecha para E4 |
| 35 | Design | T3: segundo CTA del héroe | Taste | P6 | recomendación: mantener «Ver soluciones» del mockup aprobado; alternativa: «Hablar por WhatsApp» | cambiarlo sin el dueño |
| 36 | DX | Modo DX POLISH, persona agente de código o dueño | Mechanical | regla de /autoplan, P6 | lo fija el skill; la superficie son los scripts | otros modos |
| 37 | DX | Una sola puerta: qa-movimiento, qa-responsive y qa-sr dentro de verify | Mechanical | P1, P5 | confirmado por las dos voces; el CI ya corre verify | puertas sueltas |
| 38 | DX | Un solo presupuesto de JS en presupuestos.json; se quita el tope de 60 KB de E2 | Mechanical | P4 | dos presupuestos compitiendo; reabre E2 por evidencia nueva | dos topes |
| 39 | DX | Migrar qa-lcp, qa-a11y y portada.test.mjs a la v3 | Mechanical | P1 | las dos voces: chequeos atados a la v2 | dejarlos |
| 40 | DX | Contrato de qa-movimiento (MOV-0X, exit 1/2, SKIP, mediana, contexto, trazas) | Mechanical | P1 | CAP6 en arreglo, recuperación y contexto | «PASS o FAIL» |
| 41 | DX | medir.mjs con --runs y TBT | Mechanical | P3 | Codex: no mide TBT | script nuevo |
| 42 | DX | Generador del fixture de enlaces y claves fijas de CREDITOS.json | Mechanical | P5 | no reproducible | lista a mano |
| 43 | DX | Interruptor data-mov-off y runbook de reversión completo | Mechanical | P1 | CAP6 de reversión y día P | revertir todo |
| 44 | DX | Comandos en CLAUDE.md, marcas [auto]/[revisión], prop variante | Mechanical | P5 | documentación | sin documento |
| 45 | DX | Node alineado y Lighthouse como dependencia, diferidos | Mechanical | P3 | fuera del radio | incluirlos |
