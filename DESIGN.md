---
# gstack: design-md-format=spec
name: Elemento Web
description: Agencia que muestra evidencia auditable (comprobantes, precios y mediciones con fecha) sobre una portada marino y un cuerpo claro, con el cian como único acento.
colors:
  primary: "#0a1a3a"
  primary-raised: "#123a6b"
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

**Portada como póster:** H1 y texto a la izquierda; a la derecha una ilustración del servicio con un comprobante superpuesto; en el borde inferior, un riel de cuatro cifras publicadas (precios en la home; alcance en servicios). Debe caber en 1440 por 900 y en 390 por 844 con el botón principal visible.

**Anatomía de toda sección de servicio:** respuesta de 40 a 60 palabras (con fecha) → evidencia (comprobante, captura o tabla) → por qué es mejor, con criterios que el visitante pueda verificar → qué incluye y qué no → botón propio del servicio.

**Marcador de 10 puntos por página de servicio:** alcance, entregables, precio de partida, plazo, qué no incluye, FAQ de 6 o más, schema Service y FAQPage, una medición real, una prueba de proyecto, y una comparación con criterios verificables. Toda afirmación comparativa se basa en la oferta publicada, nunca en un ataque a terceros.

## Elevation & Depth

Profundidad por desplazamiento, no por halo: sombras con offset (10 a 12 px, sin desenfoque) en el color de la elevación contigua, y bordes de 1 px. Sin esferas borrosas, sin resplandores de borde, sin vidrio esmerilado como superficie por defecto. La cuadrícula fina de 56 px existe solo en la portada.

## Shapes

Radios 6, 12 y 20 px; la píldora completa queda para la barra de navegación y los botones de acción de la portada. El comprobante tiene borde inferior dentado (diente de 9 px) hecho con máscara CSS.

## Components

- **Comprobante:** tira blanca, voz de datos (Roboto 500 con cifras tabulares), filas con puntos guía hasta el valor, una cifra con `marker`, línea de encabezado con fecha y método, y pie con lo que no incluye. Una fila sin dato se imprime con "sin medir" o "sin publicar aún" en peso 500 y borde punteado. Nunca se rellena con un número de plantilla.
- **Botón primario (portada):** `accent` con texto marino, píldora, 52 px de alto, foco con anillo `accent-on-dark` de 3 px. **Botón sólido (cuerpo):** marino con texto claro, radio 6 px. **WhatsApp:** verde con texto oscuro, píldora.
- **Formulario por servicio:** un solo componente que conoce todos los servicios. Fichas de servicio (radio accesible) cambian el título, las preguntas, el botón y el payload. Obligatorios: nombre, correo y WhatsApp. Campos: borde `field-border` de 1,5 px (4,31:1), foco con anillo de 3 px, error en `error` con texto que dice cómo corregirlo y foco al primer campo inválido. El envío lleva `servicio`, `origen` y un `detalle` por pregunta hacia n8n y NousCRM, y el evento `generate_lead` de GA4 lleva `service`.
- **Preguntas frecuentes:** `details` nativos, visibles en el HTML, con el mismo texto que el schema FAQPage.
- **Imagen de héroe:** una ilustración 3D de vidrio por página (marino a azul, cian, sin texto, personas ni logos), 3:2, con alt descriptivo y `ImageObject`. Las fotos de stock no entran como portada de servicio.

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
- **The one authored moment:** el comprobante que se imprime al llegar a la vista. La portada nunca se anima. Con `prefers-reduced-motion` todo aparece sin transición, y sin JavaScript todo es visible. El script pesa menos de 2 KB y no entra ninguna librería.

## Decisions Log
| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-10-12 | Sistema "Comprobante" creado | Dos voces independientes (Claude y Codex) coincidieron en evidencia visible, sin acento cálido y sin tarjeta flotante; preview HTML aprobada visualmente |
| 2026-10-12 | Outfit e Inter se mantienen | Tipografía de marca decidida por el dueño; se compensa con peso, tracking y voz mono. Reemplazada la misma noche por la fila siguiente |
| 2026-10-12 | Roboto en todo el sitio, única familia | Instrucción directa del dueño; sustituye a Outfit, Inter y JetBrains Mono. Se carga variable y autoalojada para conservar los pesos 600 y 800 |
| 2026-10-12 | Tracking del display -0,022 em (no -0,04) | A 72 px, -0,04 em hacía chocar las letras en la preview real |
| 2026-10-12 | Acento único: cian | La categoría local es toda cálida; el cian marca verificación y coincide con las ilustraciones |
| 2026-10-12 | Cuerpo claro, sin modo oscuro | Se lee, se compara y se llena un formulario; la portada oscura impone confianza |
