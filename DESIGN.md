---
# gstack: design-md-format=spec
name: Elemento Web
description: Agencia que muestra evidencia auditable (comprobantes, precios y mediciones con fecha) sobre una portada marino y un cuerpo claro, con el cian como único acento.
colors:
  primary: "#0a1a3a"
  primary-raised: "#123a6b"
  graphite: "#0e0f11"
  on-primary: "#f5fafc"
  on-primary-muted: "#b9cad5"
  accent: "#0099cc"
  on-accent: "#0a1a3a"
  accent-on-light: "#00688c"
  accent-on-dark: "#5ec8e8"
  marker: "#aee8ff"
  surface: "#f8f9fa"
  surface-alt: "#eaf0f5"
  surface-raised: "#ffffff"
  text: "#1c2230"
  text-muted: "#4f5f75"
  border: "#d4dee8"
  field-border: "#6b7b92"
  whatsapp: "#25d366"
  on-whatsapp: "#06260f"
  success: "#167a58"
  warning: "#a65a00"
  error: "#b42318"
  info: "#00688c"
  mono-black: "#0a0a0a"
  mono-hover: "#262626"
  mono-text: "#525252"
  mono-muted: "#737373"
  mono-on-dark-muted: "#a3a3a3"
  mono-rule: "#e5e5e5"
  mono-surface: "#f5f5f5"
typography:
  display:
    fontFamily: Roboto
    fontWeight: 800
    fontSize: clamp(2.3rem, 1.2rem + 4.1vw, 4.5rem)
    lineHeight: 1.05
    letterSpacing: -0.025em
  headline:
    fontFamily: Roboto
    fontWeight: 800
    fontSize: clamp(1.75rem, 1.2rem + 2vw, 2.75rem)
    lineHeight: 1.08
    letterSpacing: -0.025em
  title:
    fontFamily: Roboto
    fontWeight: 700
    fontSize: 1.4rem
    lineHeight: 1.2
    letterSpacing: -0.015em
  body:
    fontFamily: Roboto
    fontWeight: 400
    fontSize: 1.0625rem
    lineHeight: 1.65
  label:
    fontFamily: Roboto
    fontWeight: 600
    fontSize: 0.92rem
    lineHeight: 1.4
  data:
    fontFamily: Roboto
    fontWeight: 500
    fontSize: 0.78rem
    lineHeight: 1.5
    letterSpacing: 0.04em
    fontFeature: tnum
rounded:
  sm: 6px
  md: 12px
  lg: 20px
  full: 9999px
spacing:
  xs: 8px
  sm: 16px
  md: 24px
  lg: 32px
  xl: 56px
  2xl: 80px
  3xl: 112px
components:
  button-primary:
    backgroundColor: "{colors.accent}"
    textColor: "{colors.on-accent}"
    rounded: "{rounded.full}"
  button-primary-hover:
    backgroundColor: "{colors.accent-on-dark}"
  button-solid:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.sm}"
  button-whatsapp:
    backgroundColor: "{colors.whatsapp}"
    textColor: "{colors.on-whatsapp}"
    rounded: "{rounded.full}"
  input:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    borderColor: "{colors.field-border}"
    rounded: "{rounded.sm}"
  receipt:
    backgroundColor: "{colors.surface-raised}"
    textColor: "{colors.text}"
    borderColor: "{colors.border}"
    rounded: "{rounded.sm}"
  nav-link:
    textColor: "{colors.on-primary-muted}"
---

# Elemento Web

## Overview

**Creative North Star:** Comprobante. Cada prueba y cada precio se muestra como un comprobante que el visitante puede auditar, no como una promesa. Es la forma visual de "Muestran evidencia, no promesas".
**Product context:** Agencia de diseño web en Ciudad de Panamá, con atención remota en Miami. Servicios: sitios corporativos, landing pages, tiendas online con Yappy y pasarelas, SEO, Google y Meta Ads, WhatsApp marketing con API oficial, chatbots e IA, automatización con n8n, CRM y software a medida. Precios de partida públicos. Competidores locales: Website Panamá, Web Studio Panamá, Faro507, 123 Web Mobile.
**Mode per surface:** Persuade en portada, servicios, precios, industrias y Miami. Read en guías y blog.
**Reference sites:** websitepanama.com, webstudiopanama.com, faro507.com, 123webmobile.com/es/, clay.global (investigados el 12 de octubre de 2026, solo lectura).
**Key characteristics:** portada marino con una pieza de evidencia a la vista de inmediato; cuerpo claro que explica; cian como único acento (verificación); precios visibles desde la primera pantalla; lo que falta por medir se imprime en blanco y se dice.

**Criterio rector (SEO y GEO):** todo cambio visual se juzga primero por lo que hace por el posicionamiento en "agencia de diseño web" y "diseño web panama". El contenido vive en el HTML sin JavaScript. No se toca la URL, el title ni el H1 de `/` ni de `/diseno-web-panama/` sin una línea base de Search Console. Ningún elemento LCP lleva `opacity:0`.

## Colors

**Strategy:** Committed. El marino de las ilustraciones es el tono de la portada; el cuerpo es claro; el cian es el único acento y significa "esto se puede verificar".
**Light or dark:** portada oscura (se mira en pantalla de celular, de día o de noche, y debe imponer confianza en segundos); cuerpo claro (se lee, se compara y se llena un formulario). No hay modo oscuro del sitio.
El texto de acento sobre claro usa `accent-on-light` (5,93:1 sobre `surface`); sobre marino usa `accent-on-dark` (8,92:1). `accent` solo rellena botones y marca elementos grandes (3,10:1 sobre claro). `marker` se usa detrás de una sola cifra medida por pantalla. `whatsapp` es exclusivo del botón de WhatsApp. No hay acento cálido: la categoría local ya es toda ámbar, naranja y amarillo.

## Typography

Una sola familia en todo el sitio: Roboto, por decisión del dueño (12 de octubre de 2026). Reemplaza a Outfit, Inter y a la mono de los comprobantes; no entra ninguna otra familia, ni siquiera Roboto Mono. Roboto está en la lista de fuentes sobreusadas: se acepta y se aleja del aspecto por defecto con peso 800 y tracking -0,025 em en titulares, alineación a la izquierda, tope de 4,5 rem y una voz de datos propia (Roboto 500, 12,5 px, mayúsculas con 0,04 em de tracking y cifras tabulares) en etiquetas, comprobantes y mediciones.

**Carga:** Roboto variable (eje de peso 100 a 900, subconjunto latino, OFL-1.1) autoalojado en `/fonts/`, con una sola precarga y `font-display: swap`. Se usa la variable y no las estáticas porque Roboto estático no trae los pesos 600 ni 800 que el sitio usa hoy, y el navegador los sustituiría por 700 y 900. La pila de reserva es `ui-sans-serif, system-ui, sans-serif`; al cambiar de fuente no puede moverse el diseño (CLS 0 se vuelve a medir). Cuerpo a 17 px con 62 caracteres de ancho máximo. Cifras tabulares en todo dato. El logo es una imagen y no cambia.

## Layout

Ancho máximo 1200 px, márgenes laterales de 16 a 32 px. Base de 8 px. Ritmo de secciones 112, 80 y 64 px, alternando `surface` y `surface-alt`. Alineado a la izquierda; las secciones usan una columna estrecha para el título y una ancha para el contenido (0,8 fr y 1,2 fr). Nada de filas de tres tarjetas iguales: el contenido de distinto peso lleva filas de distinto peso.

**Portada como póster:** H1 y texto a la izquierda; a la derecha una ilustración del servicio con un comprobante superpuesto; en el borde inferior, un riel: en la home, los nombres de los 6 servicios sin cifras (para no volver a vender solo web); en una página de servicio, los datos de alcance de ese servicio. Debe caber en 1440 por 900 y en 390 por 844 con el botón principal visible. La ilustración nunca va sola: en la misma pantalla lleva un artefacto de prueba (comprobante, captura o tabla).

**Variante «portada v3 monocromo» (solo `/`, D56; reemplaza a «portada grafito» cuando se publique, después del 18-nov-2026):** agencia de marketing digital + proyectos de IA. UI en `mono-*`; solo las fotos, las capturas y la escultura de cromo llevan color. Sin precios ni sección de proyectos. En `/` quedan suspendidas dos reglas: «publicar el precio de partida junto al botón» y la estrella norte «Comprobante» como pieza de la portada.
- **Escala en Roboto:** display `clamp(2.5rem, 1.6rem + 4vw, 4.5rem)` 800 con tracking -0,025 em (la segunda línea en `mono-muted`, texto grande); título de sección `clamp(2rem, 1.4rem + 2vw, 3rem)` 800 con -0,02 em; título de tarjeta 1,25 rem 700; bajada 1,125 rem; cuerpo 1,0625 rem con 62 caracteres de ancho máximo; etiqueta 0,875 rem 500 (el H1 de D50 va en la etiqueta). Relleno vertical de sección 128, 96 y 72 px (1440, 768 y 390).
- **Formas:** radio 12 en paneles, maquetas y marcos; 16 en tarjetas y mitades del díptico; 24 en el bloque negro de IA; píldora en botones (48 px de alto). Sombra solo en los marcos de captura.
- **Fondos:** héroe, bento y preguntas en `mono-surface`; díptico, diseño web, respuesta y formulario en blanco; la mitad «Proyectos de IA» del díptico y el bloque de IA en `mono-black`.
- **Movimiento:** entrada del héroe en CSS (8 px, sin opacidad), revelados por sección con `animation-timeline: view()` (16 px), y con GSAP diferido a la primera interacción el trazo del diagrama, el armado de las maquetas, el parallax de la escultura y los titulares por líneas. Nada se mueve con «reducir movimiento» ni con `html[data-mov-off]`. Reglas en `src/styles/portada.css` y `src/scripts/movimiento.ts`.

**Páginas internas en monocromo (D57, desde el 22-oct-2026):** las páginas de servicio, blog, industrias, Miami y recursos usan los mismos colores que la portada v3. Los tokens de color conservan su nombre (`primary`, `accent`, `teal`, `night`…) pero valen negro, blanco y grises; el marino y el cian ya no se usan en la interfaz (el logo conserva su cian). Héroe claro en `mono-surface` con migas, H1 negro, bajada en `mono-text`, botón negro y botón de contorno, y a la derecha un render de cromo plateado del tema sobre `#F5F5F5`. Las reglas de «Colors» y «Components» que hablan de marino y cian quedan como historia.

**Variante «portada grafito» (solo `/`, desde el 15-oct-2026, D51):** reemplaza en la portada a «Portada como póster»; las páginas de servicio siguen con su portada marino.
- **Fondos:** `graphite` en el héroe y en las franjas de Industrias, SEO, Proceso, Compara y Contacto; `surface` en la respuesta citable y en Desarrollo; `surface-alt` en Proyectos, Servicios, Marketing, Precios y Preguntas (sobre `surface-alt` los módulos blancos se leen). Relleno vertical 112, 80 y 64 px. La cuadrícula de 56 px va solo en el héroe; las franjas son grafito liso.
- **Dentro de una franja grafito** se redefinen los tokens en vez de pisar regla por regla: el texto pasa a `on-primary`, el texto secundario a `on-primary-muted`, los enlaces y el anillo de foco a `accent-on-dark`, los filetes a blanco al 16 % y las superficies elevadas a transparente. El formulario de Contacto (blanco opaco) y las maquetas vuelven a los valores claros, y el anillo de foco dentro del formulario vuelve a `accent-on-light`. Al imprimir, las franjas salen en tinta sobre blanco. Las reglas viven en `src/styles/piel-grafito.css`; llevar la piel a otra página es incluir esa hoja.
- **Héroe:** H1 a tamaño de subtítulo (la frase de SEO de D50), frase de display (Roboto 800, `clamp(2.5rem, 1.6rem + 4vw, 4.5rem)`), bajada, botón cian y WhatsApp, y la cascada de 4 capturas reales de proyectos, estática. En compacto, la captura de celular recortada a 3:2.
- **Menú fijo:** en la portada va en blanco opaco al bajar (el `.glass` translúcido deja sus enlaces cerca de 2,6:1 sobre grafito).
- **Paneles apilados** (Servicios de la portada, D53): número «01 / 06», H3 grande, precio en voz de datos si lo hay, texto, lista de lo que incluye, su «Cotizar» y la imagen del servicio. Sin el efecto son una lista; con el efecto, la pila se fija y cada panel tapa al anterior.
- **Vitrina** (Marketing de la portada, D54): a la izquierda el escenario, con una escena por servicio apilada en la misma celda (solo la activa se ve, sin transición). Cada escena es una tarjeta `raised` de 16/10 con borde de 1 px, radio 20 y sombra de 10 px sin desenfoque, un lienzo `surface-alt` de radio 12 adentro y la nota «Ejemplo» debajo. A la derecha, la lista numerada de filas enlace: número «01» a 2 rem en `text-muted`, H3 a 1,25 rem, una línea de 40 caracteres o menos, «Se mide: A · B · C» con tres indicadores que publica la página del servicio y una flecha; la fila entera es el blanco del clic y mide 44 px o más. La fila activa lleva una barra de 3 px en `accent-on-light` y fondo `raised`, solo con puntero fino desde 1024 px; con teclado, el anillo de foco se pinta en la fila. La escena cambia al pasar el mouse con intención (movimiento real y ~100 ms) o al enfocar con el teclado, y se queda hasta que se active otra. En táctil y en compacto la escena 1 queda fija. Las garantías de la sección llevan un check en SVG `aria-hidden` con trazo `accent-on-light` (el acento de verificación), no el «+» de las listas de qué incluye.
- **Botón de contorno:** transparente, borde de 1,5 px en `primary` y texto `primary`; solo en las tres tarjetas de precio no destacadas. Chrome lo pinta de 1 px (redondea todo borde a píxeles enteros).

**Excepciones a este documento en `/` (15-oct-2026):**
1. «Fila de servicio (mapa de la home)»: en la portada ya no queda ningún bento: Servicios usa los paneles apilados (D53) y Marketing la vitrina (D54); las filas siguen en los hubs.
2. «Tarjetas dentro de tarjetas»: dentro de la tarjeta de cada escena de la vitrina, la maqueta va sin borde ni sombra propios sobre `surface-alt` con radio 12; el navegador y los celulares de las escenas conservan solo el borde de la interfaz que imitan, sin sombra.
3. «Tres tarjetas iguales en fila»: Servicios usa rejillas de dos tamaños; Precios son 4 tarjetas de precio (artefacto real); Industrias son imágenes con rótulo, sin borde ni fondo.
4. «Botón sólido (cuerpo)»: los «Cotizar» de las secciones usan el botón primario cian; en Precios solo la tarjeta destacada lo lleva y las otras tres van con el de contorno.
5. Valores fuera de la escala: `#1A1C20`, fondo de reserva de los marcos de captura (si una captura no carga, se ven la barra y el dominio), con su sombra desplazada en `#1D2026`; tamaños de 1,125 rem (bajada del héroe y nombre de proyecto), 1,25 rem (H3 de tarjetas y de las filas de la vitrina, y el número de fila en compacto), 2 rem (número de etapa y número de fila de la vitrina), 2,25 rem (precio de tarjeta) y 0,8125 rem (nota «Ejemplo» e indicadores de «Se mide» en la vitrina).
6. Maquetas: imitan interfaces ajenas (resultado de Google, anuncio de Meta, editor de código, mapa, tienda, agenda), así que llevan los radios (4, 8 y 10 px y círculos) y colores de esa interfaz, no los de la marca. Su texto cumple AA igual: `qa-a11y` lo mide aunque vayan con `aria-hidden`.

**Anatomía de toda página de servicio (orden de lectura):** portada (H1, bajada de 15 a 20 palabras, botón y comprobante) → respuesta citable de 40 a 60 palabras con fecha → prueba (comprobante, captura de proyecto y medición en un solo sistema) → qué incluye, entregables y qué no incluye → cómo lo hacemos y plazo, con el botón repetido → por qué es mejor, con criterios que el visitante pueda verificar → preguntas frecuentes → formulario → servicios relacionados. En móvil hay una barra fija con el botón del servicio y WhatsApp.

**Marcador de 10 puntos por página de servicio:** alcance, entregables, precio de partida, plazo, qué no incluye, FAQ de 6 o más, schema Service y FAQPage, una medición real, una prueba de proyecto, y una comparación con criterios verificables. Toda afirmación comparativa se basa en la oferta publicada, nunca en un ataque a terceros.

## Elevation & Depth

Profundidad por desplazamiento, no por halo: sombras con offset (10 a 12 px, sin desenfoque) en el color de la elevación contigua, y bordes de 1 px. Sin esferas borrosas, sin resplandores de borde, sin vidrio esmerilado como superficie por defecto. La cuadrícula fina de 56 px existe solo en la portada.

## Shapes

Radios 6, 12 y 20 px; la píldora completa queda para la barra de navegación y los botones de acción de la portada. El comprobante tiene borde inferior dentado (diente de 9 px) hecho con máscara CSS.

## Components

- **Comprobante:** tira blanca, voz de datos (Roboto 500 con cifras tabulares), filas con puntos guía hasta el valor, una cifra con `marker`, línea de encabezado con fecha y método, y pie con lo que no incluye. Una fila sin dato se imprime con "sin medir" o "sin publicar aún" en peso 500 y borde punteado. Nunca se rellena con un número de plantilla.
- **Botón primario (portada):** `accent` con texto marino, píldora, 52 px de alto, foco con anillo `accent-on-dark` de 3 px. **Botón sólido (cuerpo):** marino con texto claro, radio 6 px. **WhatsApp:** verde con texto oscuro, píldora.
- **Formulario por servicio:** un solo componente que conoce todos los servicios. Fichas de servicio (radio accesible) cambian el título, las preguntas, el botón y el payload. Obligatorios: nombre y WhatsApp; el correo es opcional. Campos: borde `field-border` de 1,5 px (4,31:1), foco con anillo de 3 px, error en `error` con texto que dice cómo corregirlo y foco al primer campo inválido. Con un servicio preseleccionado se muestra «Servicio: X · cambiar» y las fichas solo aparecen al pulsar «cambiar». El envío conserva `servicio` (etiqueta de texto) y `origen` y suma `servicio_clave` y un `detalle` por pregunta hacia n8n y WazaCRM; el evento `generate_lead` de GA4 lleva `service` con la clave. Los estados (enviando, éxito, fallo de red, fallo parcial) están en `docs/specs/rediseno-elementoweb/DECISIONES.md`, D22.
- **Fila de servicio (mapa de la home):** fila, no tarjeta: nombre en `title`, una línea de qué resuelve y para quién en `body`, enlace principal con `accent-on-light`, filete inferior de 1 px en `border`; en compacto se apila y el enlace ocupa el ancho completo (toque de 44 px).
- **Respuesta citable (`answer`):** párrafo de 40 a 60 palabras en `body` a 1,1 veces, con el rótulo en voz de datos «Actualizado el DD/MM» debajo; sin caja ni fondo propio.
- **Incluye y no incluye (`includes`):** tres listas simples (incluye, entregables, no incluye) con el signo «+» y «−» en voz de datos y filetes `border`; sin iconos en círculos.
- **Comparación (`compare`):** tabla con encabezados reales; la columna «tu otra cotización» son celdas vacías con línea punteada y el texto oculto «espacio para completar»; en compacto cada fila se apila; con hoja de estilos de impresión.
- **Preguntas frecuentes:** `details` nativos, visibles en el HTML, con el mismo texto que el schema FAQPage.
- **Imagen de héroe:** una foto realista por página de servicio, al estilo de la propuesta de Kredit (personas y lugares de Panamá, luz natural, sin texto ni logos dentro de la imagen), con un pie corto sobre la foto y el comprobante en la misma pantalla. WebP a 1200 px de 60 KB o menos, ancho y alto declarados, alt descriptivo e `ImageObject`. Las fotos de stock de bancos de imágenes no entran (D45 de `docs/specs/rediseno-elementoweb/DECISIONES.md`).
- **Qué incluye (molde Kredit):** lista de dos columnas; cada elemento lleva el signo «+» en `accent-on-light`, el título en `title` 600 y una línea de explicación en `muted`; filete superior de 1 px, sin tarjeta ni icono en círculo.
- **Así se vería:** maquetas del entregable hechas en HTML y CSS sobre `raised` con borde de 1 px y radio 20: resultado de Google, anuncio en el feed, publicaciones del mes, navegador y celular con capturas reales del portafolio, conversación de WhatsApp, correo, flujo de automatización, respuesta de un asistente de IA, ficha de producto y resumen de pago de una tienda, los tres negocios del mapa de Google, una reseña con la respuesta del dueño, la pantalla de edición de un panel, una agenda de reservas con horas libres y ocupadas, y ficha de auditoría con estado por fila (verde, ámbar, rojo, siempre con el estado escrito para lector de pantalla). El flujo ocupa la fila entera de la rejilla porque se lee de izquierda a derecha. Cada una lleva la nota «Ejemplo» en voz de datos y nunca afirma un resultado. Son artefactos reales del servicio, por eso sí pueden ser tarjetas.
- **Menú y pie monocromo (D56):** barra blanca fija de 64 px (`--nav-h`) con filete `mono-rule`, cuatro disparadores (Marketing, Inteligencia artificial, Diseño web, Recursos), «Nosotros», «Hablar con ventas» (WhatsApp, avisa que abre otra pestaña) y botón píldora `mono-black` «Empezar proyecto →» que pasa a `mono-hover`. Paneles blancos de radio 12 con columnas (ícono de línea propio de 20 px y trazo 1,5, título, una línea en `mono-text` y la lista) y una tarjeta destacada en `mono-surface` cuyo enlace también está en la lista. Abren con clic y teclado; con ratón tras 150 ms y cierran 180 ms después de salir. Escritorio desde 1200 px; debajo, acordeón a pantalla completa en blanco con los mismos enlaces y el foco atrapado. El pie va en `mono-surface` con 5 columnas (los 4 grupos y Empresa) y debajo las franjas de Miami, industrias y legales; el bloque de cierre de las páginas internas va en `mono-black` con texto y botón blancos. Texto sobre blanco: `mono-black`, `mono-text` o `mono-muted`; sobre `mono-surface`: `mono-black` o `mono-text`; sobre `mono-black`: blanco o `mono-on-dark-muted`. Anillo de foco de 2 px con 2 px de separación, negro sobre claro y blanco sobre negro. Los enlaces salen de `grupos` en `src/lib/site.ts`, donde cada uno tiene un solo dueño. La portada tiene tope de 1.400 elementos: el menú y el pie no usan listas ni SVG decorativos de más.
- **Tabla de ejemplo y «cómo lo medimos»:** tabla con encabezados reales en el estilo de la comparación; los indicadores van como lista en línea en voz de datos.

## Do's and Don'ts

- Do: poner la respuesta citable de 40 a 60 palabras antes de cualquier adorno, con fecha de actualización.
- Do: publicar el precio de partida, el plazo y lo que no incluye junto al botón.
- Do: medir hero y botón principal a 1440 por 900 y a 390 por 844 antes de dar algo por terminado.
- Do: comprobar contraste AA de cada par nuevo y mostrar el resultado.
- Do: imprimir en blanco lo que no se ha medido y decirlo.
- Don't: texto con degradado, palabra en contorno en un titular, esferas con halo, etiquetas en píldora sobre los titulares.
- Don't: acento cálido (ámbar, naranja, amarillo) ni un segundo acento junto al cian.
- Don't: cifras de resultados, conteos de clientes o logos sin permiso y fuente.
- Don't: ocultar contenido con JavaScript ni poner `opacity:0` en el elemento LCP.
- Don't: tres tarjetas iguales en fila, tarjetas dentro de tarjetas, ni una tarjeta que no sea un artefacto real (precio, proyecto, captura, cotización).

## Motion

- **Approach:** intentional, solo bajo la primera pantalla.
- **Easing:** enter(ease-out) exit(ease-in) move(ease-in-out)
- **Duration:** revelado 200 ms (opacidad y 8 px de desplazamiento); impresión del comprobante 350 ms (`clip-path`). Se anima solo `opacity`, `transform` y `clip-path`.
- **The one authored moment:** el comprobante de la sección de prueba, que se imprime al llegar a la vista (no el de la portada). La portada no se anima, con una excepción que eligió el dueño el 20-oct-2026 (D53): los paneles apilados de Servicios, con GSAP y ScrollTrigger cargados aparte, después de la carga. Con `prefers-reduced-motion` todo aparece sin transición, y sin JavaScript todo es visible. El script pesa menos de 2 KB y no entra ninguna librería.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-10-12 | Sistema "Comprobante" creado | Dos voces independientes (Claude y Codex) coincidieron en evidencia visible, sin acento cálido y sin tarjeta flotante; preview HTML aprobada visualmente |
| 2026-10-12 | Outfit e Inter se mantienen | Tipografía de marca decidida por el dueño; se compensa con peso, tracking y voz mono. Reemplazada la misma noche por la fila siguiente |
| 2026-10-12 | Roboto en todo el sitio, única familia | Instrucción directa del dueño; sustituye a Outfit, Inter y JetBrains Mono. Se carga variable y autoalojada para conservar los pesos 600 y 800 |
| 2026-10-12 | Tracking del display -0,022 em (no -0,04) | A 72 px, -0,04 em hacía chocar las letras en la preview real |
| 2026-10-12 | Acento único: cian | La categoría local es toda cálida; el cian marca verificación y coincide con las ilustraciones |
| 2026-10-12 | Cuerpo claro, sin modo oscuro | Se lee, se compara y se llena un formulario; la portada oscura impone confianza |
| 2026-10-13 | Secciones de servicio con el molde de la propuesta de Kredit y fotos realistas en la portada | Instrucción del dueño: cada servicio explica qué incluye, cómo se vería el entregable con ejemplos, cómo se mide y qué se entrega. Reemplaza la ilustración 3D de portada (D44 y D45) |
| 2026-10-15 | Variante «portada grafito» en `/` | El dueño eligió entre los mockups de fal la dirección grafito con el cian de la marca (no la lima del mockup) y aprobó el plan de 13 secciones con cascada de capturas reales; las 6 excepciones quedan escritas en «Layout». Detalle en D51 |
| 2026-10-21 | Vitrina en Marketing de la portada (D54) | El dueño eligió la variante «Vitrina» entre 4 maquetas de fal y la vitrina completa con las 6 escenas. Reemplaza al módulo bento: ya no queda ningún bento en la portada. Sin transición: la portada sigue sin animarse fuera de D53 |
| 2026-10-22 | Menú y pie monocromo en todo el sitio (D56, PR-A) | Plan de la portada v3 aprobado en la puerta de /autoplan («rec»): menú y pie al estilo Stripe en negro, blanco y grises, sin GSAP. Las páginas de servicio conservan su héroe marino hasta otro plan (E4 en TODOS.md) |
| 2026-10-22 | Variante «portada v3 monocromo» en `/` (D56, PR-B) | Mezcla de los mockups I y L de fal aprobada por el dueño: titular «Marketing que vende. / IA que trabaja.», escultura de cromo plateado, díptico, bento, diseño web, bloque de IA, respuesta citable, preguntas y formulario; efectos GSAP diferidos (pedido del dueño del 21-oct). Se publica después del 18-nov-2026 |
