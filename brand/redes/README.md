# Piezas para redes (Elemento Web)

Kit visual del primer mes de redes: avatar, portadas y las seis primeras piezas del feed, hechas con el
sistema «Comprobante» de `DESIGN.md` (marino, cian como único acento, Roboto, sin caras).
La estrategia está en `docs/redes/ESTRATEGIA.md` y el calendario con los textos en
`docs/redes/CALENDARIO-30-DIAS.md`.

Estos archivos **no se publican en el sitio** (Astro solo sirve `public/`). Se suben a mano o con
Meta Business Suite.

## Regenerar

```bash
npm ci                                  # una vez (playwright-core y sharp son devDependencies)
node brand/redes/render.mjs             # todo
node brand/redes/render.mjs p02         # solo las piezas cuyo id empieza por «p02»
node brand/redes/render.mjs perfil      # avatar y portadas
```

Necesita Chrome o Chromium (`scripts/chrome.mjs` lo localiza; `CHROMIUM_PATH` lo fuerza). El script
termina con error si algún texto invade la cabecera o el pie de una lámina, así que un cambio de copy
que no cabe se nota al renderizar y no al publicar.

## Qué hay en `exportado/`

| Carpeta | Qué es | Se publica en | Fecha prevista |
|---|---|---|---|
| `perfil/avatar-1080.png` | Isotipo cian sobre marino, pensado para recorte circular | Todas las redes | Semana 0 |
| `perfil/portada-linkedin-4200x700.png` | Portada de la página de empresa | LinkedIn | Semana 0 |
| `perfil/portada-facebook-1640x624.png` | Portada de la página | Facebook | Semana 0 |
| `p01-presentacion/` (5 láminas + PDF) | Presentación: qué hacemos y qué publicamos | IG, FB, TikTok (fotos), LinkedIn (PDF) | Lun 19 oct |
| `p02-cuanto-cuesta/` (5 láminas + PDF) | Comprobante de precios y lo que se paga aparte | IG, FB, TikTok (fotos), LinkedIn (PDF) | Mié 21 oct |
| `p03-cinco-dias/` (1) | Plazo de la landing: 5 días hábiles | IG, FB, LinkedIn, Google Business Profile | Vie 23 oct |
| `p04-caso-san-blas-full/` (5 láminas + PDF) | Caso de portafolio con la fila «sin publicar aún» | IG, FB, TikTok (fotos), LinkedIn (PDF) | Lun 26 oct |
| `p05-todos-incluyen/` (1) | Lo que incluyen todos los proyectos | IG, FB, LinkedIn, Google Business Profile | Mié 28 oct |
| `p06-tres-preguntas/` (1) | Tres preguntas antes de contratar una agencia | IG, FB, LinkedIn | Vie 30 oct |

Las láminas son de 1080 x 1350 px (4:5). El mensaje principal de cada portada y de cada pieza única
queda entre y = 135 y y = 1215, para que sobreviva a un recorte cuadrado en la cuadrícula del perfil.

## Archivos fuente

| Archivo | Para qué |
|---|---|
| `base.css` | Tokens de `DESIGN.md` y estilos de las plantillas (comprobante, filas, marco de navegador, botones) |
| `capas.mjs` | Plantillas: `portada`, `lista`, `recibo`, `proyecto`, `texto`, `cierre`, `preguntas`, `dato`, y las piezas de perfil |
| `piezas.mjs` | **El contenido de cada pieza.** Es lo único que se edita para cambiar un texto o crear otra pieza |
| `render.mjs` | Renderiza a PNG (paleta de 256 colores) y a PDF (los carruseles de LinkedIn) |

En los textos, `{{cifra}}` pone el marcador cian detrás de una sola cifra por lámina y `[[palabra]]`
pinta la palabra con el acento.

### Crear una pieza nueva

1. Añade un objeto a `piezas.mjs` con `id` (`pNN-tema`), `red` y `slides: (t) => [ ... ]`, donde cada
   lámina llama a una plantilla de `capas.mjs` con `...t(n)` para numerarla.
2. `node brand/redes/render.mjs pNN`.
3. Mira cada PNG. Si el contenido no cabe, el script lo avisa.

## Reglas que no se rompen

- **Cifras:** solo las que están en `confirmados` de `src/data/precios.json` o publicadas en una
  página del sitio. Los precios «propuestos» (pauta, contenido para redes, email, logo) no se
  publican en redes.
- **Lo que no se ha medido** se imprime «sin medir» o «sin publicar aún», nunca con un número de plantilla.
- **Sin caras** ni «el equipo» (decisión del dueño), sin testimonios, sin logos de clientes y sin
  «Meta Verified», «equipo interno» ni «100% interno» (`scripts/afirmaciones-bloqueadas.json`).
- Las capturas son solo de proyectos ya publicados en el portafolio (D11) y se avisa al cliente antes.
  La captura de San Blas Full lleva a la vista cifras que son del propio cliente («4.9», «+2,000
  travelers»); no se repiten en ningún texto nuestro.

## Contraste (WCAG, calculado el 13/10/2026)

| Par | Contraste |
|---|---|
| Texto `#1c2230` sobre `surface-alt` `#eaf0f5` | 13,84:1 |
| `text-muted` `#4f5f75` sobre `surface-alt` / `surface` / blanco | 5,67 / 6,18 / 6,51:1 |
| `accent-on-light` `#00688c` sobre `surface-alt` / `surface` | 5,44 / 5,93:1 |
| `accent-on-dark` `#5ec8e8` sobre marino | 8,92:1 |
| `on-primary-muted` `#b9cad5` sobre marino | 10,21:1 |
| Marino sobre `marker` `#aee8ff` | 12,92:1 |
| Marino sobre `accent` `#0099cc` (botón) | 5,26:1 |
| `on-whatsapp` `#06260f` sobre `whatsapp` `#25d366` (botón) | 8,20:1 |
| Isotipo `#0099cc` sobre marino (gráfico, mínimo 3:1) | 5,26:1 |

Todos superan AA. Tamaños mínimos en el lienzo: cuerpo 35 a 40 px y voz de datos 26 a 28 px, que en
una pantalla de 390 px de ancho equivalen a unos 13 a 14 px y 9 a 10 px.

## Tamaños por red

Las medidas salen de guías de terceros (no de la documentación oficial) y **se contradicen en algunos
puntos**: la cuadrícula del perfil de Instagram (3:4 o recorte cuadrado) y el tamaño de la portada de
LinkedIn (4200 x 700 o el antiguo 1128 x 191). Las piezas están hechas para tolerar ambas lecturas;
aun así, sube una prueba y mira el recorte en el móvil antes de programar todo el mes.

- Instagram y Facebook, feed: 1080 x 1350 (4:5). Foto de perfil: se sube a 1080 y la red la muestra en círculo.
- LinkedIn: carrusel como documento PDF de 1080 x 1350; portada de 6:1 con el texto desplazado a la
  derecha, porque el logo de la página tapa la esquina inferior izquierda.
- Facebook, portada de 1640 x 624: el texto queda entre x = 560 y x = 1270; en móvil se recortan unos
  180 px por lado y la foto de perfil tapa abajo a la izquierda.
- TikTok, modo foto: las mismas láminas 4:5. Si la app las recorta, hará falta una versión 9:16 (no existe todavía).
