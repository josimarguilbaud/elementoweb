# Plan: darle vida a la portada (21-nov-2026)

Pedido del dueño: «darle un poco de vida al landing principal». En la tarjeta eligió **toque de color**,
**más contenido real** y **fondos con más textura** (no eligió más movimiento).

Hoy `/` es la portada v3 monocromo (D56): blanco, negro y gris, y el cromo es lo único con color. Se ve limpia
pero plana, con mucho aire vacío.

## Lo que este plan revierte (con permiso)

- **D56 «UI en mono-*»:** vuelve un acento de color. Es el cian del logo, que ya está en el sistema.
- **«Sin sección de proyectos en la portada»** (PLAN-PORTADA-V3, regla 4 y su prueba): entra una franja de
  trabajos reales. Siguen sin entrar los precios.

Se registra como D63 en `docs/specs/rediseno-elementoweb/DECISIONES.md` y en DESIGN.md.

## 1. Color: el cian como acento de verificación

Un solo acento, con los tokens que ya existen y su contraste medido:

| Uso | Token | Contraste |
|---|---|---|
| Sobre blanco o #F5F5F5 | `accent-on-light` #00688C | 5,9:1 |
| Sobre negro | `accent-on-dark` #5EC8E8 | 8,9:1 |
| Rellenos grandes y trazos | `accent` #0099CC | solo para formas, no para texto |

Dónde va (poco, para que se note):
- La segunda línea del titular, «IA que trabaja.», pasa de gris a cian. Es el elemento LCP: solo cambia el color, sin opacidad.
- Los números 01, 02 y 03 de los tres pasos, y las flechas de los enlaces al pasar el mouse.
- Un sello «Tech Provider verificado por Meta» con un check cian (hoy es texto gris perdido).
- En el bloque negro de IA: las líneas del diagrama y el nodo del agente en cian.
- En el recorrido de posicionamiento: el paso activo y las flechas.
- La barra activa y el subrayado de los enlaces de la franja de servicios.

Los botones siguen negros (es el contraste que convierte) y el WhatsApp sigue verde.

## 2. Textura en los fondos

- **Héroe:** una cuadrícula fina de puntos, desvanecida en los bordes con una máscara radial, y un tinte cian muy
  suave detrás del cromo (un degradado radial al 6 %, sin desenfoque ni esferas borrosas). Todo en CSS, 0 KB de imagen.
- **Bloque de IA:** la misma cuadrícula en blanco al 6 % dentro del negro y un filete cian arriba.
- **Una franja oscura más:** la sección «Qué hace una agencia» pasa a negro, con texto blanco y acentos cian, para
  alternar claro y oscuro en vez de tres blancos seguidos.
- Las secciones `--humo` reciben un degradado vertical de #F5F5F5 a blanco, para que no corten en seco.

## 3. Contenido real

- **Franja «Webs que hicimos»** (nueva, después de Diseño web): carrusel de 6 capturas reales de `public/portfolio/`:
  Grupo Viesa, La Vida es Bella, Max Impresiones, Panama International Movers, Remodelaciones JG y TramitaPa.
  - En compacto, scroll-snap horizontal, igual que el bento.
  - Imágenes de 480 y 800 px con carga diferida, ancho y alto declarados.
  - Cada una con el nombre del negocio y su rubro, enlazando a `/diseno-web-panama/`. Sin cifras ni resultados inventados.
- **Quedan fuera** KL Contable (vínculo familiar, no se presenta como cliente), y CicloFrio y WazaCRM (son marcas
  propias, no clientes).
- **Testimonios:** solo si el dueño manda textos reales con nombre y permiso. No se inventa ninguno. Si no hay, la
  sección no se crea.

## Lo que no se toca

URL, title, H1, la respuesta citable, las FAQ, el schema, el formulario y los CTA con su `data-cta-loc`. Sin GSAP nuevo.

## Riesgos y cómo se miden

- **Lighthouse:** la portada estaba en 98, con LCP de 1,4 s, y ya hubo una reversión por bajar a 80 (D53).
  - Las imágenes nuevas van con carga diferida y por debajo del pliegue.
  - El CSS nuevo se estima en menos de 3 KB.
  - Puerta: `npm run verify` completo en local antes de pushear (Lighthouse, a11y, presupuesto de CSS, tramos entre CTA).
- **Tope de 1.400 elementos:** la franja suma unos 30.
- **Tramos entre CTA en celular (qa-lcp, menos de 2.110 px):** la franja nueva va en carrusel horizontal, que suma
  poca altura. Si el tramo se pasa, se agrega un CTA.
- **Pruebas:**
  - `portada.test.mjs` cambia la prueba «sin sección de proyectos» por «la franja de trabajos usa capturas reales locales».
  - Se suma una prueba de contraste de los pares cian.

## Orden

1. Prueba roja: la franja de trabajos y los tokens de acento.
2. Color.
3. Textura.
4. Franja de trabajos.
5. DESIGN.md y D63.
6. Build, `node --test scripts/portada.test.mjs` y `npm run verify`.
7. Capturas antes y después, a 1440 y 390 px, para que el dueño apruebe el push.
