---
# gstack: design-md-format=spec
name: Kredit · Comprobante claro
description: Fintech panameña utilitaria y cálida; planos navy, papel blanco y cifras protagonistas que prueban «hoy mismo, sin letra pequeña».
colors:
  primary: "#1559ED"
  primary-hover: "#264FE1"
  primary-press: "#1A3FC2"
  on-primary: "#FFFFFF"
  navy: "#091845"
  navy-2: "#0F2363"
  ice: "#C6DAFF"
  ice-surface: "#E8F0FF"
  background: "#F7FAFF"
  surface: "#FFFFFF"
  text: "#091845"
  text-muted: "#3A4F66"
  text-soft: "#55667B"
  link: "#1559ED"
  rule: "#DCE4F2"
  rule-strong: "#C2D0EA"
  accent-mark: "#22D3EE"
  success: "#087A57"
  success-surface: "#E7F6EF"
  error: "#C2362B"
  error-surface: "#FDEEEC"
  warning: "#A84D06"
  warning-surface: "#FFF5E5"
typography:
  display:
    fontFamily: Roboto
    fontWeight: 800
    fontSize: clamp(31px, 4.6vw, 56px)
    letterSpacing: -0.018em
  heading:
    fontFamily: Roboto
    fontWeight: 800
    fontSize: clamp(28px, 3.6vw, 44px)
    letterSpacing: -0.014em
  body:
    fontFamily: Roboto
    fontSize: 17px
    lineHeight: 1.55
  label:
    fontFamily: Roboto Mono
    fontSize: 12px
    letterSpacing: 0.06em
  mono:
    fontFamily: Roboto Mono
    fontFeature: tnum
rounded:
  sm: 6px
  md: 10px
  lg: 16px
  xl: 22px
  full: 9999px
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
  2xl: 48px
  section-desktop: 120px
  section-mobile: 64px
  header-desktop: 72px
  header-mobile: 64px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    rounded: "{rounded.md}"
  button-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  input:
    borderColor: "{colors.rule-strong}"
    rounded: "{rounded.md}"
  card:
    backgroundColor: "{colors.surface}"
    rounded: "{rounded.lg}"
  nav-link:
    textColor: "{colors.on-primary}"
---

# Kredit · Comprobante claro

## Overview

**Creative North Star:** la calculadora es un comprobante de pago con cifras en mono, el sello del MICI y la fecha real; «sin letra pequeña» se ve, no se dice.
**Product context:** Kredit (CREDU HOLDINGS, S.A.), financiera panameña autorizada por el MICI (Res. 638 de 2025). Presta a colaboradores de empresas afiliadas con descuento por planilla y desembolso el mismo día de la aprobación. Superficies: landings de pauta (`/demo/kredit-landings/prestamos/` y `/empresas/`) y la web multipágina (`/demo/kredit-web/`).
**Mode per surface:** landings e inicio = Persuade; préstamos y empresas = Persuade + Operate (formularios); preguntas frecuentes y legales = Read.
**Reference sites:** investigación en `investigacion-landings-panama.md` (Banco General, Global Bank TAP, Banisi, Panacredit, Kueski, BCP Convenios, minu).
**Key characteristics:**
- Plano navy con el corte diagonal de la «K» y un comprobante blanco que lo cruza.
- La cuota quincenal es la cifra más grande del primer pliegue, en Roboto Mono con resaltador hielo.
- Licencia del MICI en un sello de doble filete, en el primer pliegue.
- Regla de quincenas con fechas reales (hoy, el día de la aprobación, las próximas quincenas).
- Fotos documentales (IA, contexto panameño) solo desde la segunda sección; nunca en el hero de las landings.

## Colors

**Strategy:** Committed. El azul de Kredit manda: navy para planos y texto, azul rey solo en el CTA sólido y estados activos.
**Light or dark:** claro con planos navy. Público en celular, de día, muchas veces en la calle o en la oficina: fondo claro y contraste alto.
El cian (#22D3EE) del degradado del logo es solo una marca de «hoy / depositado» y del subrayado del titular; nunca es texto. El enlace de su web (#2872FA) no llega a AA en texto pequeño: los enlaces usan el azul rey. Ámbar solo para «ejemplo ilustrativo / por confirmar» (`.tbd`). Sobre navy, el texto secundario es hielo (#C6DAFF), no gris.

## Typography

Roboto en todo, por decisión de Josimar (12-oct): es la fuente que Kredit ya usa en su web, así que la marca no cambia de voz. Titulares 800 en H1/H2 y 700 en H3 y botones; texto 400 y 500. Roboto Mono para cifras (cuota, montos, fechas, sello, escalas, etiquetas de paso), siempre con números tabulares. Roboto es más ancha que Manrope: el tracking negativo de los titulares se redujo a la mitad (-0.018em en H1, -0.014em en H2) para que no se peguen las letras. Carga: Google Fonts, `display=swap`, Roboto 400/500/700/800/900 y Roboto Mono 400–600. Escala: H1 56 px escritorio / 31 px móvil; H2 44 / 28; cuerpo 17; etiquetas mono 12–13.

## Layout

Contenedor de 1200 px con gutter de 16–40 px. Hero asimétrico: copia 1.15fr y comprobante 0.85fr; en móvil, una columna. **Regla de altura del hero (obligatoria):** a 1440×900 el comprobante cabe completo y el hero termina antes de 840 px; a 390×844 el botón «Continuar» termina antes de 844 px (medido: 820 y 821). Secciones de 96–120 px en escritorio y 64 px en móvil, alternando papel, hielo y navy. Las páginas internas de la web usan un hero corto (máximo 60% de la pantalla).

## Elevation & Depth

La profundidad sale de planos de color y del comprobante que cruza el plano navy (sombra suave con desplazamiento, `--shadow-2`). Sin brillos, sin halos, sin vidrio esmerilado. Bordes de 1 px `rule` en tarjetas claras.

## Shapes

Radios: 6 (etiquetas), 10 (botones y campos), 16 (comprobante y tarjetas), 22 (bloques grandes y fotos). El comprobante lleva borde superior perforado (muescas del color del fondo). El sello de licencia usa doble filete. El corte diagonal del plano navy repite el ángulo de la «K».

## Components

- **Botón primario:** sólido azul rey, texto blanco, 48 px de alto (56 en `--lg`); hover #264FE1; activo #1A3FC2 y 1 px abajo; foco con anillo de 3 px.
- **Comprobante (`.lf-card` en el hero):** paso y barra de avance arriba, monto en mono 26 px con deslizador, plazo en chips, cuota quincenal grande, libro mayor (cuota mensual, total, tasa de ejemplo) con puntos guía, nota ámbar y CTA de ancho completo.
- **Sello (`.seal`):** «Empresa financiera autorizada por el MICI · Resolución No. 638 · 23 sep 2025».
- **Reguladores (`.regs` / `.reg`, en base.css):** placas blancas con el logo oficial y su alcance exacto. MICI: «Licencia de empresa financiera · Resolución No. 638 del 23 de septiembre de 2025». SBP: «Supervisión en prevención de blanqueo de capitales · Ley 23 de 2015». Van en un bloque de confianza debajo de la divulgación y, en versión compacta (`.regs--foot`), en el pie. Nunca «regulada por la Superintendencia de Bancos»: la licencia la da el MICI.
- **Regla de quincenas (`.payline`):** 4 hitos; el de hoy en cian. Las fechas se calculan (`quincenas.js`); fines de semana y feriados cambian el texto con honestidad.
- **Divulgación (`.disclosure`, `.legal-full`):** «Información importante del crédito», con los datos en mono y lo pendiente en `.tbd`.
- **Pasos (`.steps`):** secuencia numerada con filetes, no una grilla de íconos.
- **Formulario:** errores en rojo debajo del campo, `aria-invalid`, foco en el primer error, consentimientos separados y sin marcar.
- **Barra fija móvil:** cuota quincenal + «Solicitar ahora»; se oculta sobre el formulario.

## Do's and Don'ts

- Do: mostrar la cuota quincenal antes que el monto máximo.
- Do: poner la licencia del MICI en el primer pliegue de cada landing y en el pie de cada página.
- Do: marcar toda cifra no confirmada por Kredit como «ejemplo» o `.tbd`.
- Do: hablar como Panamá (quincena, planilla, carta de trabajo, APC, ficha de la CSS).
- Don't: decir «aprobado», «garantizado», «adelanto de salario» ni prometer aprobación.
- Don't: foto de stock en el hero de las landings, texto dentro de imágenes, popups al entrar.
- Don't: kicker o etiqueta encima de cada H2, grillas de 3 tarjetas con ícono, degradados en botones.
- Don't: usar WhatsApp para cobranza (política de Meta); en estas páginas WhatsApp es solo ventas y atención.

## Motion

- **Approach:** minimal-functional.
- **Easing:** enter `cubic-bezier(.2,.7,.3,1)`; exit ease-in; move ease-in-out.
- **Duration:** micro 150 ms; short 200–250 ms; medium 350 ms; entrada del comprobante 600 ms.
- **The one authored moment:** la entrada del comprobante (`rise`) y la barra de avance; todo se apaga con `prefers-reduced-motion`.

## Decisions Log

| Date | Decision | Rationale |
|------|----------|-----------|
| 2026-10-12 | Sistema «Comprobante claro» creado | /design-consultation con investigación de 12 landings y voces externas (subagente Claude «Talonario»; Codex «Claridad que deposita», rechazado por el validador de formato pero leído). Aprobado por Josimar sobre la vista previa de la landing de préstamos. |
| 2026-10-12 | Source Sans 3 e IBM Plex Mono reemplazan a Roboto y Poppins | Tres sans competían; la mono da cifras tabulares al comprobante. |
| 2026-10-12 | Roboto y Roboto Mono reemplazan a Manrope, Source Sans 3 e IBM Plex Mono | Pedido de Josimar: una sola familia en todo lo de Kredit, la misma de su web. Tracking de titulares reescalado. |
| 2026-10-12 | Logos oficiales del MICI y de la SBP con su alcance | Pedido de Josimar. La SBP supervisa a las financieras solo en prevención de blanqueo (Ley 23 de 2015, art. 22; Acuerdo 05-2015); la licencia es del MICI. Logos bajados de mici.gob.pa y superbancos.gob.pa, por confirmar con Kredit. |
| 2026-10-12 | Sin WhatsApp en la cobranza | Política de Mensajería de WhatsApp Business, sección 4. |
