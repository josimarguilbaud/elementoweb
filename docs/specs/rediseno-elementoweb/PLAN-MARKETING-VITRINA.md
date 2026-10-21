<!-- /autoplan restore point: "C:\\Users\\JosimarG\\Projects\\elementoweb\\.gstack\\tmp\\autoplan\\main-autoplan-restore-20261020-232420.md" -->
## Implementation plan
# Plan: vitrina en Marketing digital de la portada (D54)

Estado: variante elegida por el dueño el 20-oct-2026 (tarjeta D11 = «2 Vitrina») entre 4 maquetas generadas con fal
(Nano Banana Pro, US$ 0,60), guardadas en `mockups-marketing/`. La elegida es `mockups-marketing/2-vitrina.jpg`.
Plan APROBADO el 21-oct-2026 (puerta, revisión 2: `d8a p1a`). Falta el permiso para publicar.

## Por qué

Hoy la sección 8 (`#marketing`, `src/pages/index.astro`) es un bento de 6 módulos con maquetas de 200 px recortadas
(el texto del anuncio de Google se corta, la parrilla se desvanece) y huecos blancos de distinto alto. No se lee la
idea del titular, «Campañas que se miden hasta la consulta». En el bento, el enlace de Facebook e Instagram se parte en
dos líneas.

## Qué cambia

- **Cabecera:** el rótulo y el H2 a la izquierda, sin cambios. Las 3 garantías llevan un check por línea en lugar del
  «+». Según la decisión de gusto d4, van en su fila actual (recomendado) o, desde 1024 px, en la ficha blanca de la
  maqueta, a la derecha del H2.
- **Cuerpo desde 1024 px, en 2 columnas** (escenario de 1,15 fr y lista de 1 fr, como el reparto de la maqueta):
  - **Escenario:** una celda donde se apilan las escenas. Cada escena (`.pv2-vit__escena`) es una rejilla de dos filas.
    En la fila 1 va la tarjeta blanca, que es el propio `.pv2-maqueta` (con la clase `pv2-vit__tarjeta` por la prop
    `clase` de `Maqueta.astro`): radio 20, borde de 1 px, sombra `10px 10px 0 var(--ew-border)` sin desenfoque,
    padding y `aspect-ratio: 16/10`. Adentro, un lienzo `surface-alt` de radio 12 lleva la composición. En la fila 2 va
    la nota «Ejemplo», fuera de la tarjeta, como en la maqueta elegida. Así `Maqueta.astro` y la prueba de su nota
    hermana (`portada.test.mjs:581`) no cambian, y la tarjeta es un elemento real que las pruebas pueden medir.
    - Lleva 6 escenas apiladas en la misma celda de la rejilla. La fila 1 de cada escena (la tarjeta) tiene una
      proporción fija de 16/10 y cada maqueta cabe adentro, así que la tarjeta y la nota no se mueven al cambiar de escena
      (CLS 0).
    - Solo la escena activa (clase `pv2-vit__escena--activa`, que el script alterna y la escena 1 trae en el HTML) es
      visible; las otras van con `visibility: hidden`.
    - Cada escena es una `Maqueta` (con `aria-hidden` y `data-nosnippet`) con su nota «Ejemplo · …» debajo.
    - Las 6 escenas:
      1. **Google Ads:** un navegador con el resultado de Google de hoy (consulta «clínica dental cerca de mí» y el
         anuncio) y, encima, un celular con la conversación de WhatsApp «Hola, vi su anuncio. ¿Tienen cita el sábado?».
         Nota: «un anuncio de búsqueda en Google que termina en WhatsApp».
      2. **Facebook e Instagram Ads:** dos celulares lado a lado, sin navegador: el anuncio del feed de hoy
         (`pv2-anuncio`) y el mismo chat. Van en el flujo normal, sin `position: absolute`.
      3. **Contenido para Redes:** la parrilla de la semana de hoy.
      4. **Email Marketing:** el correo de hoy.
      5. **WhatsApp Marketing:** el mensaje de campaña de hoy.
      6. **Automatizaciones:** el flujo Formulario → CRM → WhatsApp de hoy.
  - **Lista:** un `<ul>` de 6 filas (el orden no significa una secuencia), en el orden de `site.ts` (indexado por slug,
    como hoy). Cada fila lleva:
    - el número «01» a 2 rem con cifras tabulares, peso 500, en `text-muted` (el de la fila activa en `accent-on-light`),
      para que no le gane al H3; por debajo de 640 px, a 1,25 rem;
    - el H3 con el enlace a su página, cuyo texto es el nombre del servicio;
    - su línea de `portada.ts`: con la decisión de gusto d5, la línea corta de la maqueta (40 caracteres o menos, un
      renglón a 1280 px); si el dueño la rechaza, la línea de hoy (70 o menos);
    - si el dueño la aprueba en la puerta (d2), la línea «Se mide: A · B · C» con 3 indicadores, en voz de datos;
    - una flecha.

    La fila entera es el objetivo de clic (el enlace se estira con `::after`) y mide 44 px o más. La fila activa (clase
    `pv2-vit__fila--activa`) lleva una barra de 3 px en `accent-on-light` a la izquierda y fondo blanco (`surface-raised`).
    Todas las filas reservan un borde izquierdo transparente de 3 px, así que activar una no cambia su tamaño ni su
    posición.
- **Pie:** «Cotizar marketing digital» y «Ver todo el marketing digital →», con el mismo texto y destino. Desde 1024 px
  van debajo del escenario, en la columna izquierda, como en la maqueta; en anchos menores, después de la lista.
- **Orden en el DOM:** rótulo, H2 y garantías; escenario; lista; pie. Desde 1024 px la rejilla pone el pie bajo el
  escenario (columna 1, fila 2) y la lista ocupa las dos filas de la columna 2.

## Comportamiento

- **Sin JavaScript:** la escena 1 (Google Ads) está activa y la lista se ve completa. Los 6 servicios (nombre, enlace,
  línea y, con d2, «Se mide») viven en la lista, siempre visibles. Las escenas 2 a 6, con su nota «Ejemplo», están en
  el HTML pero ocultas con CSS hasta que se activan: son apoyo visual, no el contenido del servicio.
- **Con JavaScript:** al pasar el puntero de mouse o lápiz por una fila (solo con `(hover: hover) and (pointer: fine)`)
  o al enfocarla con el teclado (un `focusin` cuyo destino coincide con `:focus-visible`, en cualquier ancho), esa fila
  queda activa y el escenario muestra su escena. Sigue activa hasta que se active otra.
  - Es un script de unos 300 B en `index.astro`, con `pointerover` (que sí burbujea; filtra `pointerType` y busca la
    fila con `closest`) y `focusin` delegados en la lista. No usa librerías.
  - La escena cambia sin transición: la portada no se anima (DESIGN.md, Motion). Es una decisión de gusto que va a la
    puerta final (fundido de 180 ms con la excepción declarada, o sin fundido).
- **Táctil y anchos menores:** tocar una fila navega a su página al primer toque, porque es un enlace. En táctil el
  escenario se queda en la escena 1: es apoyo visual, y el contenido de cada servicio está en su fila.
  - De 640 a 1023 px: el escenario va arriba con la escena activa (la 1 al cargar) y la lista debajo.
  - Por debajo de 640 px, con la decisión de gusto d6, la escena 1 fija sobre la lista si los tramos entre «Cotizar»
    siguen en 2.110 px o menos; si no, sin escenario, como el bento de hoy («en compacto, sin vista»).

## SEO y GEO

- **Enlaces:** los 6 enlaces internos y sus destinos no cambian. El texto ancla pasa de «Ver Google Ads» al nombre del
  servicio («Google Ads»), que es mejor ancla. Siguen los H3 por servicio. Las líneas solo cambian si el dueño aprueba
  d5 (copy corto); solo se muestran en la portada.
- **Cabecera de la página:** no cambian el title, la descripción, el H1, el canonical ni el schema del home
  (`seo-congelado`).
- **`<main>`:** el `<main>` del home cambia, así que se declara en `scripts/main-permitidas.json`, y `comparar-main` se corre a mano porque no está en `npm run verify`.
- **Maquetas:** siguen con `data-nosnippet` y `aria-hidden`. La línea «Se mide», si el dueño la aprueba en la puerta,
  es texto nuevo y visible en cada fila, tomado de los `medimos` ya publicados en la página de cada servicio.

## Ingeniería

- **Marcado:** las escenas y las filas van en `index.astro`, como las maquetas de hoy. Los datos siguen en `MARKETING`
  (`portada.ts`): `linea` y `maqueta` existentes, más `nota`, la línea de la nota «Ejemplo», que hoy está escrita en el
  marcado.
- **Lo que se quita:** `ModuloBento.astro`, las reglas `.pv2-bento*` y `.pv2-modulo*` de `portada.css` y el campo
  `ancho` de `MARKETING`, que solo usaba el bento; antes se confirma con `git grep`. También se quitan el chequeo del
  bento de `qa-lcp` y su objetivo en `qa-a11y`. El detalle de qué reglas del bloque se conservan está en los requisitos
  aceptados de la fase CEO.
- **CSS:**
  - Bloque nuevo «8. Marketing: vitrina» con las clases `pv2-vit` y `pv2-vit__*`. `git grep -n "pv2-vit"` confirma que
    hoy no existen en el repositorio.
  - Tope del CSS del home: 27.600 B en gzip, medidos 26.890 B. No se sube: lo que sale del bento tiene que compensar lo
    nuevo.
- **JS:** suma unos 600 B al JS inicial (hover con intención y guardas). El tope es 36.400 B y hoy se miden 35.201 B.
- **Peso:** las 6 maquetas ya están en el DOM de hoy. Lo nuevo son los marcos de navegador y de celular de las escenas
  1 a 5 (según la composición de la fase de diseño), en HTML con las clases `ew-dev__*` que el home ya carga (ajustadas
  solo bajo `.pv2-vit`), sin imágenes. Si el spike muestra que el CSS o el DOM no alcanzan, rige el orden de recorte de
  la decisión de gusto d7.

## Pruebas (primero)

- **`scripts/portada.test.mjs`**, prueba «8. marketing» reescrita:
  - 6 filas en `.pv2-vit__lista`, cada una con un H3 y un enlace; los enlaces son los servicios del hub sin la IA
    creativa, como hoy;
  - 6 escenas `.pv2-vit__escena` con el mismo `data-escena` que su fila, cada una con su `Maqueta` y su nota;
  - la fila 1 y la escena 1 activas en el HTML, sin JS (una sola `pv2-vit__fila--activa` y una sola
    `pv2-vit__escena--activa`);
  - 3 garantías, el «Cotizar» igual y sin precios.
- **Colisión:** ningún elemento con una clase que contenga `pv2-vit` (`[class*="pv2-vit"]`) fuera de `#marketing`.
- **`scripts/qa-lcp.mjs`**, en navegador; reemplaza el chequeo del bento:
  - a 768, 1024, 1280 y 1440 px, el escenario mide lo mismo con cada escena activa, y el celular de la escena 1 queda
    dentro del rectángulo de su escena;
  - después de pasar el puntero y de enfocar con Tab, la escena visible es la de la fila activa;
  - a 390 px, el escenario no se ve (o, con d6, solo la escena 1 fija) y los tramos entre «Cotizar» siguen en 2.110 px
    o menos;
  - la escena cambia sin transición (si el dueño elige el fundido en la puerta, con «reducir movimiento» no lo hay).
- **`scripts/qa-a11y.mjs`:**
  - el objetivo de 44 px se mide en la fila `.pv2-vit__fila` (el enlace se estira con `::after`), y `elementFromPoint`
    en el centro de cada fila devuelve su enlace;
  - el contraste AA de la fila activa (H3, línea y número sobre su fondo `surface-raised`) entra en el chequeo
    calculado;
  - el foco es visible en las 6 filas: se lee el `outline` de la fila (`.pv2-vit__fila:has(a:focus-visible)`), no el
    del enlace activo.
- **Antes de publicar:** `npm run verify` en verde, y una captura a 1440 × 900 y a 390 × 844 junto a la maqueta elegida.
- **Después de publicar:** seguir el despliegue con `gh run watch <id> --exit-status`, correr `scripts/check-prod.sh` y
  medir PageSpeed Insights móvil del home (la medida vinculante de D14), 5 corridas, contra la línea base de PSI
  tomada antes de empezar. Mediana por debajo de 85 o LCP de más de 3,5 s: se revierte. Mediana por debajo de 90: no
  se avanza a lo siguiente hasta corregir (D14). Lighthouse local es solo el indicador de trabajo.

## Reglas que cambian (se declaran)

- **`DESIGN.md`:**
  - «Módulo bento (Marketing)» pasa a «Vitrina (Marketing)», con su anatomía: escenario con escenas apiladas, lista
    numerada de filas enlace, fila activa y, en compacto, sin escenario.
  - La excepción 1 deja de decir que el mapa pasa a bento: en la portada ya no queda ningún bento (Servicios usa los
    paneles de D53 y Marketing la vitrina).
  - La excepción 3 deja de nombrar a Marketing entre las rejillas de dos tamaños.
  - La excepción 2 se reescribe para la vitrina: dentro de la tarjeta de cada escena, la maqueta va sin borde ni
    sombra propios sobre `surface-alt` de radio 12, y el navegador y los celulares de las escenas 1 y 2 conservan solo
    el borde de la interfaz que imitan, sin sombra.
  - La excepción 5 se reescribe: 1,25 rem pasa a ser «H3 de tarjetas y de las filas de la vitrina» y 2 rem «número de
    etapa y número de fila de la vitrina». La fila activa usa `surface-raised`, así que no suma ningún valor fuera de
    escala.
  - El check de las garantías es un SVG con `aria-hidden` y trazo `accent-on-light`: es el acento de verificación, no
    el signo «+» de las listas de qué incluye. Solo si el dueño elige la ficha en d4 se declara la excepción al «Don't:
    una tarjeta que no sea un artefacto real», con borde de 1 px en `border`, radio 12 y sin sombra.
- **`DECISIONES.md`:** D54.

## Fuera de alcance

- El hub `/marketing/` y las páginas de marketing no cambian.
- Videos publicitarios (IA creativa, D52) sigue fuera de los módulos de la portada.

## Publicación

- Se publica con el permiso del dueño (D47).
- Reversión: `git revert` del commit y push con su permiso.

<!-- autoplan-accepted:ceo -->
- **Comparación manual antes de publicar.** `comparar-main` y `selectores-hoja` no forman parte de `npm run verify`.
  - Se construye `origin/main` en una carpeta aparte.
  - Se corre `node scripts/comparar-main.mjs <dist-base> dist --permitidas scripts/main-permitidas.json`, con
    `main-permitidas.json` reescrito para D54 (`cambian: ["/"]`, `nuevas: []`).
  - Se corre `node scripts/selectores-hoja.mjs <dist-base> dist`, que cuida que la hoja compartida no gane utilidades
    de Tailwind por palabras nuevas del marcado o del script.
  - Los dos tienen que salir con 0.
- **Estilo de maqueta para las 6 escenas.** Pasan bajo `.pv2-vit` las reglas que hoy viven en `.pv2-modulo__vista`:
  - `.pv2-vit .pv2-maqueta`: fondo `surface-alt`, radio 12 y `overflow: hidden`;
  - `.pv2-vit .pv2-maqueta > .ew-mock`, solo el hijo directo: sin borde, sin radio, sin sombra y fondo transparente.
    Las maquetas dentro de los celulares no lo heredan: el chat conserva el fondo de `.ew-wa` (`#efeae2`) y la pantalla
    del celular del anuncio es blanca (`.pv2-vit .ew-dev__phone`, fondo `#fff`). Así ningún texto queda sobre el
    `#0b1220` del marco.

  Dentro de la tarjeta de cada escena no hay tarjeta dentro de tarjeta. La excepción 2 de `DESIGN.md` cubre el borde de
  la interfaz que imitan el navegador y los celulares de las escenas 1 y 2.
- **Escena 1, navegador y celular.** Reusa `ew-dev__stage`, `ew-dev__browser` y `ew-dev__bar` de `molde-kredit.css`.
  - El celular (`ew-dev__phone`, sin imagen) va absoluto dentro del stage, con `top` cerca del 18 %, `bottom: 0`, un
    ancho cerca del 30 % y `overflow: hidden`. El chat queda recortado abajo, como en la maqueta, y el celular nunca
    sale de su escena.
  - Los marcos conservan su borde, sin sombra propia.
  - Prueba en `qa-lcp`: a 768, 1024, 1280 y 1440 px, el rectángulo del celular está dentro del de la escena 1.
- **Escena 2, dos celulares.** Dos celulares lado a lado: el del anuncio `pv2-anuncio` y el del chat.
  - Usan el modificador `pv2-vit__telefono`: `position: static`, proporción cerca de 9:16, `overflow: hidden` y el borde
    de `ew-dev__phone`.
  - La prueba de maquetas sigue exigiendo que no haya `.pv2-marco` dentro de una `.pv2-maqueta`.
- **Script de la vitrina.**
  - Escucha `pointerover` delegado en la lista, que sí burbujea, y busca la fila con `closest('.pv2-vit__fila')`.
  - Con el puntero, solo cambia de escena si el `pointerType` es `mouse` o `pen` y
    `matchMedia('(hover: hover) and (pointer: fine)')` coincide.
  - Con el teclado cambia en `focusin` solo si el destino coincide con `:focus-visible`. Así un clic o un toque, que
    también enfocan el enlace, no cambian la escena.
  - El script alterna dos clases y no usa `aria-current`: `pv2-vit__fila--activa` en la fila y `pv2-vit__escena--activa`
    en la escena. En el HTML sin JS las traen la fila 1 y la escena 1.
  - Una sola regla muestra la escena activa; las demás van con `visibility: hidden`.
- **Prueba de toque** en `qa-lcp`, Chromium con `hasTouch` a 768 px.
  - `page.route` responde a la navegación hacia `/marketing/contenido-redes-sociales-panama/` con
    `route.fulfill({ status: 204 })`. Así Chromium no reemplaza la página y se puede leer el estado después.
  - Un toque en la fila 3 pide esa URL al primer toque, y la escena activa sigue siendo la 1.

  Lo que la prueba no prueba: la heurística de doble toque de WebKit no se ejercita en Chromium. Después de publicar se
  prueba a mano en un iPhone o iPad real y se anota en D54. En táctil el escenario se queda en la escena 1; D54 lo
  declara aceptado.
- **Escena persistente.** La escena activa se queda visible cuando el puntero sale de la lista y hasta que se active
  otra. Así cumple WCAG 1.4.13: no desaparece ni tapa otro contenido. Prueba en `qa-lcp`: pasar el puntero por la
  fila 3, sacarlo de la lista y comprobar que la escena 3 sigue visible.
- **Sin transición** (decisión de gusto d3, provisional hasta la puerta).
  - El bloque CSS de la vitrina no declara `transition` ni `animation`. `portada.test.mjs` lo comprueba junto a la
    prueba «la portada solo anima los paneles de Servicios…»: corta `portada.css` desde «/* ---- 8. Marketing:
    vitrina» hasta «/* ---- 9. Proceso», y exige que los dos `indexOf` sean mayores o iguales a 0.
  - Si el dueño elige el fundido: es de 180 ms, solo de opacidad, y desaparece con «reducir movimiento». La excepción
    se declara en `DESIGN.md` (Motion), en D54 y en esa prueba.
- **Accesibilidad de la lista.**
  - El número «01» y la flecha llevan `aria-hidden`.
  - El anillo de foco se pinta en la fila con `.pv2-vit__fila:has(a:focus-visible)`.
  - El H3 de las filas mide 1,25 rem (excepción 5 de `DESIGN.md`).
  - La barra de la fila activa va en `accent-on-light`. Todas las filas reservan un borde izquierdo transparente de
    3 px. Prueba en `qa-lcp`: el rectángulo de cada fila es igual antes y después de activarla.
  - El enlace no pinta su propio anillo dentro de la fila: `.pv2-vit__fila a:focus-visible { outline: none }`, porque
    el anillo lo dibuja la fila.
  - Prueba en `qa-a11y`: después de cada Tab se lee el `outline` de la fila, no el del enlace activo. No hay transición
    de color en la fila, así que no hace falta esperar.
- **Contraste por escena.** A 768 y a 1280 px, `qa-a11y` activa una por una las 6 escenas, alternando las clases
  directamente, y en cada una mide el contraste calculado de `.pv2-maqueta *` (con la etiqueta «Origen», que va en
  `--ew-muted` sobre el fondo del chat) y de su nota. Con `visibility: hidden`, `checkVisibility` deja fuera a las escenas inactivas. También
  mide el H3, la línea, el número y la línea «Se mide» de la fila activa sobre su fondo cian claro, y el número
  `.pv2-vit__num` de las 6 filas (lleva `aria-hidden` y axe no lo revisa).
- **Validación de datos.** `modulosMarketing(lista, datos = MARKETING, paginas = marketingPages)` en `portada.ts`.
  - Importa `marketingPages` de `./pages/marketing.ts`, con la extensión, porque `portada.test.mjs` carga el módulo en
    Node.
  - Los `medimos` de cada página se buscan en sus `blocks[].medimos`.
  - Por cada slug lanza un error con el slug si la línea pasa de 70 caracteres.
  - Con d2, lanza un error con el slug y el indicador si `mide` no tiene exactamente 3 indicadores, o si uno no está en
    los `medimos` publicados de la página de ese slug.
  - Pruebas unitarias: los 6 slugs de la lista de marketing de `site.ts` pasan. Lanzan error una línea de 71
    caracteres, 2 o 4 indicadores, y un indicador que no está en `medimos`.
- **«Se mide» en la fila** (gusto d2, provisional hasta la puerta).
  - Cada fila lleva, después de su línea,
    `<p class="pv2-vit__mide"><span class="ew-data">Se mide:</span> A · B · C</p>`. Los indicadores van separados
    por « · », sin `<ul>`.
  - Prueba en `portada.test.mjs`: el texto de ese párrafo, con los espacios normalizados, es igual a
    `Se mide: ${mide.join(" · ")}`.
  - Si el dueño la rechaza, se quitan juntos:
    - el campo `mide`, el parámetro `paginas` y la importación de `marketingPages`;
    - las pruebas unitarias de 2 o 4 indicadores y de indicador ausente;
    - la prueba del texto en `portada.test.mjs`;
    - el contraste de esa línea en `qa-a11y`;
    - su CSS.

    No se toca nada más.
- **«Origen: Google Ads»** (gusto d1, provisional hasta la puerta). La conversación de la escena 1 lleva debajo esa
  etiqueta, dentro de la maqueta. Si el dueño la rechaza, se quita sin tocar lo demás.
- **CSS que sale y CSS que se conserva** en `portada.css`.
  - Se quitan `.pv2-bento*`, `.pv2-modulo*` y `.pv2-bento--marketing`, y `.pv2-modulo__enlaces a` sale del selector
    compartido de la línea 65.
  - Se conservan, en un bloque nuevo «/* ---- Maquetas y notas de la portada» que va justo después del bloque de D53:
    `.pv2-nota`, `.pv2-nota .ew-data`, `.pv2-maqueta .ew-agenda__horas > .ew-agenda__ocupada`, `.pv2-sel` y
    `.pv2-pago__*`.
  - La prueba de D53 (`portada.test.mjs:600`-`601`) corta el CSS hasta ese comentario nuevo y comprueba que los dos
    `indexOf` son mayores o iguales a 0.
- **Tope de DOM.** `dist/index.html` sigue en 1.400 elementos o menos (`portada.test.mjs:545`; hoy 1.246). Si se pasa,
  se recorta el marcado de las escenas; no se sube el tope.
- **Escenas y presupuestos.** Las escenas van centradas en vertical dentro del escenario. Los topes de presupuesto son
  en gzip.
- **D54 en `DECISIONES.md`.** Anota cuatro cosas:
  - que las lecturas de la portada v2 (GSC del 29-oct y del 12-nov, GA4 del 12-nov y del 10-dic) incluyen la vitrina
    desde su publicación;
  - que en táctil el escenario se queda en la escena 1;
  - que la etiqueta «Origen: Google Ads» (d1) se apoya en lo ya publicado en `src/lib/pages/blog-39.ts:163` («Registra
    el lead en el CRM con su origen»);
  - el resultado de la prueba manual en iPhone o iPad.
- **TODO de eventos.** La entrada de `TODOS.md` «Eventos por clic en las escenas y el mapa de servicios de la portada»
  suma las 6 filas de la vitrina de Marketing. Sigue en la fase 3.
- **Línea base de PSI antes de empezar.** Se mide PageSpeed Insights móvil del home de producción, 5 corridas, y la
  mediana se anota en D54. La compuerta posterior a la publicación compara contra esa base con los umbrales de D14.
- **Errores de validación útiles.** Cuando `modulosMarketing()` rechaza un indicador, el mensaje nombra el slug, el
  indicador y el archivo que hay que corregir (`src/lib/pages/marketing.ts`). D54 avisa que editar los `medimos` de
  una página de marketing puede romper el build del home, y con él el despliegue.
- **Pruebas de geometría estables.** Las pruebas de `qa-lcp` que miden rectángulos esperan `document.fonts.ready`
  antes de medir.
- **Ficha de garantías (gusto d4, provisional hasta la puerta).** Va la ficha blanca de la maqueta elegida, con la
  excepción declarada. La alternativa es dejar las garantías en su fila actual y cambiar el «+» por el check, sin
  excepción nueva en `DESIGN.md`.
<!-- /autoplan-accepted:ceo -->

<!-- autoplan-accepted:design -->
- **Columnas y alineación.** Desde 1024 px, escenario de 1,15 fr y lista de 1 fr, con `grid-template-rows: auto 1fr`.
  El escenario va con `align-self: start`, alineado con la fila 01, y el pie con `align-self: end`, alineado con el
  final de la fila 06.
- **Tarjeta de proporción fija.** La tarjeta de cada escena (fila 1 de `.pv2-vit__escena`) tiene `aspect-ratio: 16/10`
  y cada maqueta cabe adentro.
  - Los celulares se dimensionan por alto (`height: 100%`, ancho por 9:16).
  - Las escenas van con `align-self: stretch` y `grid-template-rows: 1fr auto`, y la nota en un renglón.
  - Esto reemplaza «las escenas van centradas en vertical dentro del escenario» de la fase CEO.
  - Prueba en `qa-lcp`: a 768, 1024, 1280 y 1440 px, el rectángulo de la tarjeta es idéntico en las 6 escenas.
- **Composición de cada escena dentro de la tarjeta.**
  1. Navegador con el resultado de Google en su 65 % izquierdo, y el celular del chat.
  2. Dos celulares: anuncio y chat.
  3. La parrilla dentro de un celular, como cuadrícula de perfil.
  4. El correo dentro de un `ew-dev__browser` con la barra de un cliente de correo.
  5. La plantilla de campaña con botón dentro de un celular, distinta del chat de la escena 1.
  6. El flujo a todo el ancho.

  Todo dentro del tope de DOM de 1.400 elementos. Prueba en `qa-lcp`: a 768, 1024, 1280 y 1440 px, el celular de la
  escena 1 no corta el rectángulo del título ni del texto del anuncio de Google.
- **Hover con intención.** El cambio de escena por puntero exige movimiento real (coordenadas distintas a las del
  último evento) y unos 100 ms de permanencia sobre la fila, y se cancela al salir. Prueba en `qa-lcp`: la rueda del
  mouse con el puntero quieto sobre la lista no cambia la escena.
- **Fila activa solo desde 640 px.** Por debajo de 640 px ninguna fila tiene la barra ni el fondo; el anillo de foco
  sigue en todos los anchos. Prueba en `qa-lcp` a 390 px.
- **Estados de las filas.**
  - H3 en `text`, sin subrayado.
  - Número en `text-muted`, peso 500, y en `accent-on-light` en la fila activa; a 1,25 rem por debajo de 640 px.
  - Flecha en `text-muted`, y en `accent-on-light` cuando la fila está activa, en `:hover` (CSS, también sin JS) y en
    el foco.
  - Filete inferior de 1 px en `border`.
  - Fila activa en `surface-raised` con la barra de 3 px en `accent-on-light`. Ya no hay fondo cian claro, así que la
    excepción 5 no suma ningún valor.
  - Lista en `<ul>`. D54 anota que va pegada a Proceso, que también tiene números de 2 rem.
- **Foco con respaldo.** El `outline: none` del enlace y el anillo de la fila van dentro de
  `@supports selector(:has(a:focus-visible))`. Sin `:has()`, queda el anillo propio del enlace.
- **Copy de las filas (gusto d5, provisional hasta la puerta).**
  - Las líneas de `MARKETING` pasan a las cortas de la maqueta: 40 caracteres o menos y un renglón a 1280 px, sin
    repetir las garantías.
  - `modulosMarketing()` valida el tope de 40.
  - Prueba en `qa-lcp`: a 1024, 1280 y 1440 px, cada H3 y cada línea caben en un renglón, y la lista no pasa la altura
    de la columna izquierda en más de 48 px.
  - Si el dueño la rechaza, quedan las líneas de hoy, con el tope de 70.
- **«Se mide» en un renglón (si d2 se aprueba).** La línea cabe en un renglón a 1280 px; si no cabe, se eligen
  indicadores más cortos de los `medimos` publicados. Prueba en `qa-lcp`.
- **Etiqueta de origen (d1 refinada, provisional hasta la puerta).** Va como «CRM · Origen: Google Ads», en voz de
  datos, pegada al borde del celular de la escena 1 y fuera de la interfaz de WhatsApp. Su contraste se mide en
  `qa-a11y`.
- **Garantías (gusto d4, provisional hasta la puerta).** La recomendación pasa a la alternativa, en la que coinciden
  las dos voces:
  - las 3 garantías en su fila actual, con un check en SVG con trazo `accent-on-light` en lugar del «+»;
  - sin tarjeta y sin excepción nueva en `DESIGN.md`.

  Si el dueño prefiere la ficha de la maqueta, va con borde y sin sombra.
- **Celular por debajo de 640 px (gusto d6, provisional hasta la puerta).** La escena 1 fija sobre la lista, solo si
  `qa-lcp` mantiene los tramos entre «Cotizar» en 2.110 px o menos a 390 px. Si no los mantiene, sin escenario, como
  hoy, y D54 lo anota.
- **Fundido (d3, si el dueño lo elige).** Las dos escenas son visibles durante el cruce, con `visibility` y
  `transition-delay`.
- **Capturas para el dueño.** Antes de pedir el permiso de publicar se capturan las 6 escenas a 1280 px y la sección a
  1440, 1024, 768 y 390 px, junto a la maqueta elegida, y se le muestran con la tarjeta de permiso.
<!-- /autoplan-accepted:design -->

<!-- autoplan-accepted:eng -->
- **Precedencia.** Si los bloques aceptados se contradicen, manda el de ingeniería, luego el de diseño, luego el de CEO
  y por último el texto del plan. Conflictos ya resueltos:
  - garantías según d4, con la fila con check como recomendación;
  - la fila activa en `surface-raised`;
  - el tope de la línea es 40 con d5 y 70 sin d5, y la prueba unitaria lanza con 41 cuando d5 está aprobada;
  - el peso incluye los marcos de las escenas 1 a 5;
  - las escenas se estiran (`stretch`), no se centran;
  - el JS suma unos 600 B;
  - a 390 px, según d6.
- **Spike antes de las pruebas.** En el scratchpad, no en el repo, se arma la vitrina mínima y a 1024 y 1280 px se
  mide:
  - el CSS en gzip contra el margen de 710 B;
  - que cada maqueta quepa en 16/10;
  - la altura de la lista frente a la columna izquierda;
  - la cuenta de DOM.

  Con ese resultado se aplica el orden de recorte de d7 antes de escribir las pruebas.
- **Tarjeta real.** La tarjeta de cada escena es el propio `.pv2-maqueta`, con la clase `pv2-vit__tarjeta` por la prop
  `clase`:
  - `aspect-ratio: 16/10`, `overflow: hidden`, borde de 1 px, radio 20, sombra `10px 10px 0 var(--ew-border)` y
    padding;
  - adentro, un lienzo `surface-alt` de radio 12.

  Esto reemplaza la tarjeta con `::before` de la fase de diseño. La escena usa `grid-template-rows: auto auto` y todas
  las escenas comparten `grid-area: 1 / 1` en el escenario. Las pruebas miden `.pv2-maqueta` y `.pv2-nota`, con 1 px
  de tolerancia:
  - la tarjeta es idéntica en las 6 escenas;
  - el escenario mide lo mismo que una escena.
- **Composición escalable.** El escenario lleva `container-type: inline-size`, y las medidas internas de las maquetas
  (tipografía, marcos, separaciones) van en `cqi`, como la cascada del héroe (`portada.css:35`). Prueba en `qa-lcp`:
  por escena y por ancho (768, 1024, 1280 y 1440 px), quedan dentro del rectángulo de su `.pv2-maqueta`:
  - el título y el texto del anuncio de Google;
  - el titular del correo;
  - el mensaje de la plantilla;
  - los 3 pasos del flujo;
  - el texto del anuncio de Meta.
- **Marcos sin tarjeta dentro de tarjeta.** Bajo `.pv2-vit`:
  - `.ew-dev__browser > .ew-mock` y `.ew-dev__phone > .ew-mock` van sin borde ni radio, y el chat conserva el fondo de
    `.ew-wa`;
  - se anulan la sombra de `.ew-dev__browser`, el ancho del 24 % y la sombra de `.ew-dev__phone`, y el `padding-bottom`
    de `.ew-dev__stage`.

  Prueba: ningún `.ew-mock` dentro de `#marketing .pv2-maqueta` tiene borde.
- **Hover con intención (reemplaza el de diseño).**
  - Se activa con `pointermove` delegado en la lista, solo si `movementX || movementY`, con `pointerType` `mouse` o
    `pen` y `(hover: hover) and (pointer: fine)`.
  - Se guarda la fila candidata y el temporizador de unos 100 ms no se reinicia si la fila es la misma.
  - Se cancela en `pointerout` solo si `!fila.contains(e.relatedTarget)`.
  - Prueba de la rueda: después de `mouse.wheel`, `elementFromPoint` confirma que otra fila quedó bajo el puntero, y la
    escena no cambió.
- **Fila activa solo con puntero fino.** La barra y el fondo de la fila activa van dentro de
  `@media (hover: hover) and (pointer: fine) and (min-width: 640px)`. El anillo de foco con teclado sigue en cualquier
  ancho. Prueba: en un contexto táctil a 768 px, ninguna fila tiene barra ni fondo.
- **Guardas del script.**
  - Si no hay lista, sale sin hacer nada.
  - Busca la escena destino y alterna las clases solo si existe.
  - `matches(':focus-visible')` va en try/catch.
- **Validación endurecida.** `modulosMarketing()` lanza un error con el slug y nombra los dos archivos
  (`src/lib/portada.ts` y `src/lib/pages/marketing.ts`) en estos casos:
  - una página de la lista sin exactamente un bloque con `medimos`;
  - una entrada de `MARKETING` que ya no está en la lista.

  La cabecera de `marketing.ts` dice que solo admite `import type`. Las pruebas unitarias cubren los dos casos.
- **Geometría por rango.** La regla de un renglón para el H3, la línea y «Se mide», y la de la lista con no más de
  48 px sobre la columna izquierda, rigen desde 1280 px. De 1024 a 1279 px el pie va a todo el ancho, debajo de las dos
  columnas. Tolerancias:
  - 1 px en los rectángulos;
  - el texto ocupa el 95 % o menos del ancho;
  - también se prueba a 1280 − 17 px (barra de desplazamiento de Windows).
- **Pruebas de iOS.**
  - Prueba estática: ninguna regla `:hover` del bloque `.pv2-vit` cambia `display`, `visibility` ni `content`.
  - Antes de publicar, si el dueño tiene un iPhone o iPad a mano, se prueba con `astro preview --host` en la red local.
    Si no, se prueba después y se anota en D54.
- **Contraste con la opción correcta.** Todo chequeo de `qa-a11y` que recorra las escenas usa
  `checkVisibility({ visibilityProperty: true })`.
- **Lista con semántica.** `ul.pv2-vit__lista` lleva `role="list"`.
- **Comparación y reversión.**
  - `comparar-main` y `selectores-hoja` comparan contra el build del commit del que parte el cambio, y se leen también
    los avisos de `selectores-hoja`.
  - D54 anota el rango de commits para que `git revert` lo cubra entero.
- **Recorte por presupuesto (gusto d7, provisional hasta la puerta).** Si el spike muestra que el CSS no entra en
  27.600 B en gzip:
  - primero, las escenas 3 a 5 usan la maqueta de hoy, sin marco de dispositivo;
  - después, d6 sin escenario en celular.

  Solo si aun así no entra, se sube el tope en `presupuestos.json` con su motivo.
- **UC1 = a (puerta, 21-oct-2026).** La vitrina completa sigue, con las 6 escenas y el hover con intención. Es la
  dirección del dueño; la recomendación de la vitrina estática queda registrada como rechazada.
- **Medición antes de publicar (UC2 = b, puerta del 21-oct-2026).**
  - **Línea base de GA4.** Antes de publicar se copia de GA4, en modo lectura desde el Chrome del dueño y sin tocar la
    configuración, a `audit/ga4-portada-linea-base-2026-10.md`:
    - las sesiones que empiezan en `/`, las sesiones con interacción, `cta_click` por `location` y
      `generate_lead` por `service`;
    - las vistas de `/marketing/*` que vienen de `/` (`page_referrer`);
    - todo en dos ventanas: del 30-sep al 14-oct (antes de D51) y del 15-oct al día de la publicación (D51 y D53).
    - Además, el reparto por `deviceCategory` de las sesiones que empiezan en `/` en los últimos 28 días.
  - **Evento `select_content`.** Al hacer clic en el enlace de una fila de la vitrina, `src/scripts/track.ts` envía
    `select_content` con `content_type: "servicio"`, `content_id` (el `id` corto de la fila, p. ej.
    `google-ads-panama`) y `location: "marketing"`.
    - La lista lleva `data-cta-loc="marketing"` y cada enlace de fila lleva `data-content-id`.
    - El código es genérico: cualquier `a[data-content-id]`, con `data-content-type` y `servicio` por defecto.
    - Corre después de las ramas de WhatsApp, `tel:`, `mailto:` y `cta_click`, así que nunca duplica un evento.
    - Nunca se envía al pasar el puntero ni al enfocar.
    - No envía datos personales (regla del diccionario).
  - **Prueba en `qa-lcp`.** Se reusa la navegación interceptada con `route.fulfill({ status: 204 })`:
    - un clic en la fila 3 deja en `window.dataLayer` el evento `select_content` con
      `content_id: "contenido-redes-sociales-panama"` y `location: "marketing"`;
    - pasar el puntero y enfocar con Tab no dejan ningún `select_content`;
    - el «Cotizar» de la sección sigue enviando `cta_click` con `location: "marketing"` y `service: "pauta"`.
  - **Diccionario.** `docs/event-dictionary.md` suma la fila de `select_content`. Registrar `content_id` como
    dimensión personalizada en GA4 es un cambio de configuración de la cuenta: lo hace el dueño, o se le pide permiso.
  - **Regla de decisión (D54).** A los 28 días de publicar se comparan con las dos ventanas de la línea base:
    - las vistas de `/marketing/*` desde `/` por cada 1.000 sesiones del home;
    - `cta_click` con `location: "marketing"` por cada 1.000 sesiones del home.

    También se registra el reparto de `select_content` por fila y por dispositivo. Si ninguna de las dos tasas sube, la
    vitrina estática (UC1 b) vuelve como candidata. La fecha de lectura se anota en D54 y en `TODOS.md`.
  - **Cuándo se publica.** Se publica cuando esto esté listo, sin esperar la lectura de GSC del 29-oct (UC2 b, no c).
- **Especificación final D54 (re-revisión de ingeniería, 21-oct-2026).** Es la única fuente para implementar.
  - Reemplaza toda línea anterior del plan o de los bloques aceptados que diga otra cosa, incluidas las citadas abajo.
  - Los gustos d1 a d7 quedan cerrados con la opción recomendada (puerta, revisión 1). Ningún «provisional hasta la
    puerta» de d1 a d7 sigue vigente; solo d8 sigue abierto.
  - **Marcado de cada escena:** `div.pv2-vit__escena[data-escena]` > `Maqueta(clase="pv2-vit__tarjeta")` >
    `div.pv2-vit__lienzo` > composición. La nota `.pv2-nota` va como hermana inmediata de la tarjeta.
  - **Tarjeta y lienzo:**
    - la tarjeta (el `.pv2-maqueta`) lleva `aspect-ratio: 16/10`, `overflow: hidden`, borde de 1 px en `border`,
      radio 20, sombra `10px 10px 0 var(--ew-border)` y padding;
    - el lienzo (`.pv2-vit__lienzo`) lleva alto 100 %, fondo `surface-alt`, radio 12 y `overflow: hidden`.

    Reemplaza «`.pv2-vit .pv2-maqueta`: fondo `surface-alt`, radio 12».
  - **Sin tarjeta dentro de tarjeta:** van sin borde, radio ni sombra:
    - `.pv2-vit__lienzo > .ew-mock`;
    - `.pv2-vit .ew-dev__browser > .ew-mock`;
    - `.pv2-vit .ew-dev__phone > .ew-mock`.

    El chat conserva el fondo de `.ew-wa`. Reemplaza `.pv2-vit .pv2-maqueta > .ew-mock`.
  - **Escena:** `display: grid`, `grid-template-rows: auto auto`, `grid-area: 1 / 1` y `align-self: start`, con todas
    las escenas en la misma celda del escenario. Reemplaza `1fr auto` con `stretch` y «centradas en vertical».
    - La nota va en un renglón (`white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`), así que todas
      las escenas miden lo mismo.
  - **Celulares:** se dimensionan con un alto en `cqi` y `aspect-ratio: 9/16`, nunca con alturas en %.
    - En la escena 1 el celular va absoluto en el lienzo, abajo a la derecha, con `right` y `bottom` en `cqi`.
    - El spike fija su alto para que no tape el título ni el texto del anuncio.
    - Reemplaza «`top` cerca del 18 %, `bottom: 0`, un ancho cerca del 30 %» y «`height: 100%`, ancho por 9:16».
  - **Letra de las maquetas:**
    - un solo `font-size: clamp(<rem mínimo>, <n>cqi, <rem máximo>)` en `.pv2-vit__lienzo`;
    - las medidas internas en `em`, con selectores agrupados.

    Así respeta el tamaño de letra del usuario y pesa menos que pasar cada regla a `cqi`. Reemplaza «las medidas
    internas de las maquetas (tipografía, marcos, separaciones) van en `cqi`».
  - **Columnas desde 1024 px:** `grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr)`.
    - No se usa `nowrap` en el H3, la línea ni «Se mide».
    - Que cada uno quepa en un renglón se prueba por el alto de su rectángulo.
  - **Pie:**
    - desde 1280 px, en la columna 1 y la fila 2, justo bajo el escenario (`align-self: start`);
    - de 1024 a 1279 px, a todo el ancho, debajo de las dos columnas;
    - por debajo de 1024 px, después de la lista.

    Reemplaza «columna 1, fila 2» desde 1024 px y «el pie con `align-self: end`».
  - **Alto de la lista con «Se mide» (d2 = a).** El spike mide la lista a 1280 px. Si pasa la columna izquierda en más
    de 48 px, se aplica en este orden:
    1. el número en línea con el H3;
    2. el padding vertical de las filas baja de 16 a 12 px.

    Si aun así pasa, D54 anota la diferencia y la prueba de alto se reemplaza por la de renglones: H3, línea y «Se
    mide», un renglón cada uno. «Se mide» no se quita.
  - **Cambio de escena:**
    - por puntero, solo desde 1024 px, con `(hover: hover) and (pointer: fine) and (min-width: 1024px)`, más
      `pointermove` con movimiento, unos 100 ms de permanencia y la cancelación por `relatedTarget`; desaparece toda
      mención a `pointerover`;
    - por teclado, desde 640 px (`focusin` con `:focus-visible`);
    - por debajo de 640 px, la escena 1 queda fija por CSS (d6) y el script no cambia la escena;
    - la barra y el fondo de la fila activa se pintan solo con
      `(hover: hover) and (pointer: fine) and (min-width: 1024px)`, y el anillo de foco en cualquier ancho.
    - Reemplaza «Fila activa solo desde 640 px» y el `(min-width: 640px)` de «Fila activa solo con puntero fino».
  - **Contraste:**
    - la fila activa es `surface-raised`; no hay «fondo cian claro»;
    - todo recorrido de `qa-a11y` usa `checkVisibility({ visibilityProperty: true })`;
    - la etiqueta «CRM · Origen: Google Ads» lleva fondo opaco propio (`surface-raised`) y borde de 1 px, así que el
      contraste medido es el real.
  - **Presupuesto (d7 = a).** Paso 0, antes de los recortes de d7: la letra en `em` sobre un solo `clamp`, con
    selectores agrupados. Después vienen las escenas 3 a 5 sin marco y, al final, d6 sin escenario en celular.
    - Si aun así no entra, el tope no se sube por cuenta propia: los números van en la tarjeta de permiso de publicar y
      decide el dueño.
  - **Spike sobre el build real.**
    - Se hace en un worktree aparte, creado desde `HEAD`, con `npm run build` y el script de presupuestos: lo que cuenta
      es la hoja en línea combinada de molde, piel y portada.
    - El worktree se descarta después. Las pruebas se escriben primero, desde cero, en la copia de trabajo.
  - **Fuentes de Tailwind.** `src/styles/global.css` suma `@source not` para `docs/` y `audit/`.
    - `selectores-hoja`, contra el build base, confirma que la hoja compartida no pierde ningún selector que use
      `dist/`.
  - **Seguridad.**
    - La nota y «Se mide» se renderizan con `{}`, nunca con `set:html`.
    - `astro preview --host` se cierra al terminar la prueba en la red local.
- **Pruebas que se suman (re-revisión de ingeniería).**
  - **`portada.test.mjs`:** la prueba de «sin transición» exige además que el fin esté después del inicio y que el
    bloque tenga más de 200 caracteres, como la de D53.
  - **`qa-lcp`:**
    - **Táctil:** contexto con `hasTouch: true` e `isMobile: true`. Antes de probar se afirma
      `matchMedia('(hover: hover) and (pointer: fine)').matches === false`.
    - **Rueda:** se compara con la escena que dejó el hover inicial, después de que termine el scroll y de esperar más
      de 100 ms.
    - **Escenas ocultas:** ningún descendiente de una escena inactiva calcula `visibility: visible`.
    - **Alto estable:** a 640, 768, 1024, 1263, 1280 y 1440 px, el escenario mide lo mismo con cada escena activa y la
      tarjeta es idéntica. Reemplaza «el escenario mide lo mismo que una escena».
    - **320 px:**
      - `#marketing` no desborda (`scrollWidth <= clientWidth`);
      - el foco se ve en las 6 filas;
      - el orden de Tab es el de la lista.
    - **Letra mínima:** a 1024 px se mide la letra calculada más chica de las maquetas y se anota en D54. Si baja de
      10 px, se sube el mínimo del `clamp`.
  - **`qa-a11y`:** `elementFromPoint` devuelve el enlace de la fila en el número, la línea, «Se mide», la flecha y el
    centro.
  - **WebKit:**
    - si el WebKit de Playwright ya está instalado, la geometría corre una vez en WebKit;
    - si no, se pide permiso para instalarlo, junto con el permiso de publicar;
    - si no se instala, queda la prueba en un iPhone o iPad real, que D54 anota.
- **Medición endurecida (UC2, re-revisión de ingeniería).**
  - **Sin hits de prueba en GA4.** Un ayudante común de QA bloquea con `route.abort()` las peticiones a
    `googletagmanager.com`, `google-analytics.com` y `analytics.google.com`.
    - Va en todos los scripts de Playwright que abren páginas del sitio (`qa-lcp`, `qa-a11y`, `qa-form` y los demás).
    - `gtag()` y `dataLayer` siguen definidos por `Base.astro`, así que las pruebas leen los eventos de la cola.
    - Prueba: el ayudante cuenta las peticiones a esos dominios y todas terminan abortadas.
  - **Forma real de la cola.** Las pruebas leen `dataLayer` como los `arguments` de `gtag()`: `a[0] === 'event'`,
    `a[1]` es el nombre y `a[2]` los parámetros, como en `qa-form.mjs:41`.
  - **Clasificador puro.** La decisión de qué evento manda un clic sale de `track.ts` a una función pura, junto a
    `clicCta`.
    - Una prueba unitaria fija la precedencia: WhatsApp, `tel:`, `mailto:`, `cta_click` y, al final, `select_content`.
    - Un enlace con `data-content-id` que va a `/contacto/` manda solo `cta_click`.
  - **Clics antes de que cargue gtag.js (gusto d8, provisional hasta la puerta).** `select_content` cuenta como mínimo.
    - Se pierden los clics que navegan antes de que cargue gtag.js, que llega después de `load` y de un momento ocioso.
      Hoy pasa lo mismo con `click_whatsapp`.
    - No se demoran los enlaces, y la regla de decisión no depende de `select_content`.
  - **Dimensiones de GA4.** Antes de publicar se comprueba en GA4, en modo lectura, qué dimensiones ya existen:
    - si `location` está registrada como dimensión personalizada;
    - si «ID de contenido» y «Tipo de contenido» (`contentId` y `contentType`, predefinidas de GA4 que se llenan con
      `content_id` y `content_type`) aparecen.

    Lo que falte se registra antes de publicar, por el dueño o con su permiso, porque una dimensión nueva no se aplica a
    datos anteriores. Reemplaza «Registrar `content_id` como dimensión personalizada en GA4».
  - **Regla de decisión reproducible.** Reemplaza el detalle de la regla de decisión de arriba; la intención es la misma.
    - **Filtro:** `hostName` exacto `elementoweb.com` (más `www.elementoweb.com` si aparece), en la línea base y en la
      lectura. El filtro de tráfico interno de GA4 se revisa en modo lectura.
    - **Ventanas de 28 días:**
      - A, del 17-sep al 14-oct, antes de D51;
      - C, los 28 días que siguen a la publicación de D54.

      La ventana B, de D51 y D53 hasta la víspera de D54, se registra solo como contexto. Las ventanas del bloque UC2
      de arriba quedan como contexto.
    - **Definición:**
      - denominador: las sesiones con página de destino `/`, en una exploración de forma libre con alcance de sesión;
      - numerador 1: los `page_view` con `page_location` en `/marketing/` y `page_referrer` igual a la portada;
      - numerador 2: los `cta_click` con `location = marketing`.
    - **Exportaciones:** las CSV se guardan en `audit/`, junto a `ga4-portada-linea-base-2026-10.md`, con la definición
      exacta de la exploración.
    - **Cuándo «sube» una tasa:** la de C supera a la de A en un 20 % o más, con 30 eventos o más en cada ventana.
    - Con menos de 30 eventos en alguna ventana, la lectura es «datos insuficientes»: UC1 b no vuelve y la lectura se
      repite a los 56 días.
    - Si ninguna de las dos tasas sube con datos suficientes, UC1 b vuelve como candidata.
  - **Verificación en vivo después de publicar.** En GA4 Tiempo real, en modo lectura, aparece `select_content` con su
    `content_id` después de un clic real en una fila.
<!-- /autoplan-accepted:eng -->
## Review record

### Fase 1, CEO (autoplan run main-20261020-232420, modo SELECTIVE EXPANSION)

Método leído completo: `autoplan-ceo-methodology-abpp7m/methodology.md`, 2.486 de 2.486 líneas (rangos 1-600,
601-1200, 1201-1800, 1801-2400 y 2401-2486). Documento de diseño encontrado por `gstack-design-doc-find`: el de
mrcomputerpanama (16-sep-2026), ajeno a este plan; no se usa. Investigación: Aside no disponible (NEEDS_ASIDE), se usó
WebSearch.

#### Auditoría del sistema

- `main` limpio salvo este plan y `mockups-marketing/`; un stash viejo (Orisa, 28-sep), ajeno.
- Archivo más tocado en 30 días: `src/pages/index.astro` (28 commits). Retrospectiva: D53 se revirtió una vez el 20-oct
  (Tab en bucle y Lighthouse 79-83 por cargar ScrollTrigger en el tiempo libre) y la clase `.pv2-panel` chocó con
  Desarrollo. Este plan toca la misma página: el foco con teclado, el JS inicial y los nombres de clase son las zonas
  con historial (`DECISIONES.md:345`).
- Aprendizajes aplicados: `transition-colors-animates-outline` (esperar ~300 ms antes de leer el anillo de foco en la
  prueba de foco visible) y `autoplan-amend-desde-fuente`.
- Referencias de buen patrón: `src/components/Maqueta.astro` (maqueta con `aria-hidden` y nota afuera),
  `src/lib/portada.ts:114` (datos por slug que rompen el build si faltan), el cargador de D53 en `index.astro:446`.
  A evitar: el recorte de 200 px con degradado de `portada.css:150`, que corta el texto de las maquetas.

#### 0A. Premisas

| Premisa | Afirmación | Recibo | Veredicto |
|---|---|---|---|
| P1 | El bento recorta las maquetas a 200 px y deja huecos | `portada.css:146`, `portada.css:150`, captura del dueño | verificada |
| P2 | La vitrina hace que más gente entre a los servicios o cotice | sin datos | sin verificar (decisión de gusto del dueño, D11) |
| P3 | `ModuloBento` solo lo usa Marketing | `index.astro:11`, `index.astro:315` | verificada |
| P4 | Topes: JS 36.400 B (medido 35.201), CSS 27.600 B (medido 26.890) | `scripts/presupuestos.json:9` | verificada |
| P5 | Las 6 maquetas ya están en el DOM | `index.astro:316`-`353` | verificada |
| P6 | `comparar-main` corre dentro de la verificación | `scripts/verify.mjs:60`-`79` no lo llama | corregida: se corre a mano |
| P7 | El objetivo de 44 px y el chequeo del bento existen hoy | `scripts/qa-a11y.mjs:87`, `scripts/qa-lcp.mjs:131` | verificada |
| P8 | Tramos entre «Cotizar» de 2.110 px o menos a 390 px | `scripts/qa-lcp.mjs:62` | verificada (se vuelve a medir) |
| P9 | Cada servicio de marketing publica qué se mide | `src/lib/pages/marketing.ts:249`, `:433`, `:631`, `:820`, `:1003`, `:1203` | verificada |

unverified=1. Problema real: la sección no comunica el titular y se ve recortada. Hacer nada cuesta poco a corto plazo,
pero el dueño ya eligió la dirección (D11). La vitrina ataca la claridad, no un proxy; el efecto en clics queda sin medir.

#### 0B. Código que se reusa

- `Ejemplo.astro` (google, whatsapp, correo, flujo), `Maqueta.astro`, `CtaCotizar.astro` y `modulosMarketing()`.
- El marco de navegador y de celular `ew-dev__browser` y `ew-dev__phone` de `molde-kredit.css:131`-`138`, que el home ya
  inyecta (`index.astro:27`). No hace falta CSS de marco nuevo.
- El anuncio `pv2-anuncio` y la parrilla `pv2-parrilla` de `portada.css:201`-`214`.
- Los `medimos` de cada página de marketing (`marketing.ts:249` y siguientes) para la línea «Se mide».

REALITY: premise-table finding 9 premisas, 1 sin verificar (P2) y 1 corregida (P6, comparar-main fuera de verify) scripts/verify.mjs:60
REALITY: already-done pass origin/main sin commits desde el 20-oct sobre los archivos nombrados y sin «vitrina» ni «D54» en el log src/pages/index.astro:302
REALITY: surface-check pass npm run verify existe y comparar-main tiene su uso documentado package.json:13
REALITY: binding-decisions finding los eventos GA4 por fila siguen diferidos a la fase 3 y no se reintroducen; D14, D36, D47 y D53 vigentes TODOS.md:141
REALITY: numbers pass topes medidos el 20-oct, JS nuevo ~300 B estimado, Lighthouse 87-91 a re-medir antes de publicar scripts/presupuestos.json:9
REALITY: deferred-asks pass sin issue enlazado docs/specs/rediseno-elementoweb/PLAN-MARKETING-VITRINA.md:5
REALITY: pr-count pass sin ship-policy; un commit a main con permiso del dueño (D47) docs/specs/rediseno-elementoweb/DECISIONES.md:247

#### 0C. Estado ideal

```
  HOY                                ESTE PLAN                           IDEAL A 12 MESES
  bento de 6 módulos con   --->      vitrina: 6 escenas legibles   --->  la vitrina muestra campañas reales de
  maquetas recortadas,               + lista numerada enlazada,          clientes (con permiso) y un comprobante con
  el titular no se lee               «Se mide» con datos publicados      consultas medidas; eventos GA4 por fila
```

#### 0D y 0E

Sin decisión de enfoque nueva: la dirección es la elegida por el dueño (D11). Se comparó la interacción: A) filas
enlace con vista previa al pasar o enfocar (el plan), B) pestañas ARIA con botón y enlace aparte por fila. Gana A (P5):
un solo control por fila, toque directo en celular, y las escenas son decorativas. Modo: SELECTIVE EXPANSION (regla de
autoplan).

#### 0G. Ampliaciones evaluadas

| # | Propuesta | Esfuerzo | Riesgo | Decisión | Por qué |
|---|---|---|---|---|---|
| E1 | Eventos GA4 por clic en cada fila | S | bajo | OMITIDA | Ya está diferida a la fase 3 de eventos (TODOS.md:141, D1/D9); no se reabre |
| E2 | Mini vista por fila en celular | M | medio | OMITIDA | DESIGN.md: en compacto, sin vista; suma peso al home móvil |
| E3 | Rotación automática de escenas | S | medio | OMITIDA | La portada no se anima (DESIGN.md, Motion) y distrae |
| E4 | La vitrina también en el hub `/marketing/` | M | bajo | OMITIDA | Fuera de alcance; el hub tiene su tabla y no hay evidencia de problema |
| E5 | Navegación con flechas dentro de la lista | S | bajo | OMITIDA | Tab ya recorre las 6 filas; las flechas no aportan |
| E6 | Etiqueta «Origen: Google Ads» bajo el chat de la escena 1 | S | bajo | ACEPTADA (gusto) | Dice en la maqueta lo que promete el H2: la consulta llega medida desde su origen |
| E7 | Línea «Se mide:» por escena con 3 indicadores de esa página | S | bajo | ACEPTADA (gusto) | Respalda «se miden» con datos ya publicados (P9); se valida contra `medimos` |

10x: la vitrina con artefactos reales de campañas de clientes y un comprobante de consultas medidas; pide permisos y
datos que hoy no existen, queda como estado ideal.

#### 0I. Secuencia de trabajo

- Hora 1: datos (`nota` y `mide` en `MARKETING`, validados contra `medimos`) y pruebas de `portada.test.mjs` en rojo.
- Horas 2-3: marcado de las 6 escenas con marcos `ew-dev__*`, la lista y el CSS `pv2-vit-*` con escenas apiladas.
- Horas 4-5: el script de 300 B, `qa-lcp` (puntero, Tab, toque, alto fijo) y `qa-a11y` (44 px, contraste, foco).
- Hora 6+: capturas contra la maqueta, `DESIGN.md`, D54, presupuestos y `comparar-main`.
- Esfuerzo: humano ~1,5 días / CC + gstack ~1,5 h.

#### Libro de decisiones (CEO)

| ID y dueño | Contrato y evidencia | Actual | Propuesto | Estado | Aprobación y alcance |
|---|---|---|---|---|---|
| C1 CEO | Interacción de la vitrina | filas enlace con vista previa | pestañas ARIA | approved | auto-decisión P5 de /autoplan |
| C2 CEO | `comparar-main` fuera de verify (P6) | «se declara» | correrlo a mano contra la base | approved | auto-decisión P1 (mecánica) |
| C3 CEO | Marcos de navegador y celular | CSS nuevo | reusar `ew-dev__*` | approved | auto-decisión P4 (mecánica) |
| C4 CEO | Toque en iPad dispara solo la vista previa | sin regla | solo puntero de mouse o lápiz y `(hover: hover)` | approved | auto-decisión P1 (mecánica) |
| C5 CEO | E6 «Origen: Google Ads» | no | sí | approved (gusto) | auto-decisión P2; va a la puerta |
| C6 CEO | E7 «Se mide:» por escena | no | sí | approved (gusto) | auto-decisión P2; va a la puerta |
| C7 CEO | E1-E5 | no | no | declined | auto-decisión P3/P4 |
| C8 CEO | Revisión de spec 1 (6/10, FAIL): contraste de escenas ocultas, regla de 70 caracteres, CSS compartido del bloque bento, tope de DOM, orden de «Se mide», accesibilidad de la lista, centrado, anatomía en DESIGN.md, protocolo de publicación, prefijo BEM, texto oculto, excepción 2, ficha de garantías, TODO de eventos, `pointerover`, ajustes de marco, valores concretos, posición del pie, E6/E7 provisionales, campo `ancho`, objetivo de 44 px y prueba de iPad | defectos | corregidos en el bloque aceptado y en los reemplazos | approved | auto-decisión P1/P5 (mecánicas) |
| C9 CEO | Fundido de 180 ms contra «la portada no se anima» | fundido | sin fundido | approved (gusto d3) | auto-decisión P5; va a la puerta |
| C10 CEO | Revisión de spec 2 (7/10, FAIL): tarjeta dentro de tarjeta en las escenas 3 a 6, alto a 768 px, puerta de 90 de D14, «Se mide» invisible en táctil, `selectores-hoja`, `focusin` con clic, excepción 1, ficha de garantías, nombre de la prueba de movimiento, clase de escena activa, firma de `modulosMarketing`, anillo de foco, ancla de D53, orden del DOM, token de la barra, escena 2, celular fuera del escenario | defectos | corregidos en el bloque aceptado y en los reemplazos | approved | auto-decisión P1/P5 (mecánicas) |
| C11 CEO | Dónde va «Se mide» (d2) | bajo cada escena | en cada fila de la lista | approved (gusto d2) | auto-decisión P1: visible en todo ancho y ligado a su servicio |
| C12 CEO | Revisión de spec 3 (7/10, FAIL, 2 bloqueantes): estructura de la tarjeta de escena y fondo transparente en los chats de los celulares (bloqueantes); borde reservado de la fila, contraste del número, qué se quita sin d2, ancho de la cabecera, excepción 5, marcado de «Se mide», anillo doble, anchos de contraste, cortes del CSS, `.ts` y `blocks[].medimos`, `fulfill 204`, cita de blog-39 (menores) | defectos | corregidos en el bloque aceptado y en los reemplazos | approved | auto-decisión P1/P5 (mecánicas); tope de 3 revisiones alcanzado |

Correcciones de texto del plan (C2 y C3), registradas como reemplazos exactos:

<!-- autoplan-baseline-edits:ceo {"sourceSha256":"cf587f10766b16fcec735aa6164c2a0e25194ff52087d7beb1d6b43b3030da66","replacements":[{"oldText":"  - **Escenario:** tarjeta blanca de radio 20 con borde de 1 px y sombra desplazada, sin desenfoque.","newText":"  - **Escenario:** una celda donde se apilan las escenas. Cada escena (`.pv2-vit__escena`) es una rejilla de dos filas.\n    En la fila 1 va la tarjeta blanca, dibujada con `.pv2-vit__escena::before` (radio 20, borde de 1 px y sombra\n    `10px 10px 0 var(--ew-border)`, sin desenfoque), y encima, con un margen interior, la maqueta sobre `surface-alt`\n    de radio 12. En la fila 2 va la nota «Ejemplo», fuera de la tarjeta, como en la maqueta elegida. Así\n    `Maqueta.astro` y la prueba de su nota hermana (`portada.test.mjs:581`) no cambian."},{"oldText":"- **Cabecera:** el rótulo y el H2 a la izquierda, sin cambios. A la derecha, las 3 garantías en una ficha blanca con\n  un check cian por línea; hoy son una fila con «+».","newText":"- **Cabecera:** el rótulo y el H2 a la izquierda, sin cambios. Desde 1024 px, a la derecha del H2, las 3 garantías en\n  una ficha blanca con un check por línea; en anchos menores, debajo del H2. Hoy son una fila con «+»."},{"oldText":"    - Solo la escena activa es visible; las otras van con `visibility: hidden`.","newText":"    - Solo la escena activa (clase `pv2-vit__escena--activa`, que el script alterna y la escena 1 trae en el HTML) es\n      visible; las otras van con `visibility: hidden`."},{"oldText":"      2. **Facebook e Instagram Ads:** el anuncio del feed de hoy (`pv2-anuncio`), más grande, con el mismo chat.","newText":"      2. **Facebook e Instagram Ads:** dos celulares lado a lado, sin navegador: el anuncio del feed de hoy\n         (`pv2-anuncio`) y el mismo chat. Van en el flujo normal, sin `position: absolute`."},{"oldText":"    - la línea de hoy de `portada.ts`, de 70 caracteres o menos;\n    - una flecha.","newText":"    - la línea de hoy de `portada.ts`, de 70 caracteres o menos;\n    - si el dueño la aprueba en la puerta (d2), la línea «Se mide: A · B · C» con 3 indicadores, en voz de datos;\n    - una flecha."},{"oldText":"    La fila entera es el objetivo de clic (el enlace se estira con `::after`) y mide 44 px o más. La fila activa lleva una\n    barra cian de 3 px a la izquierda y un fondo cian muy claro.","newText":"    La fila entera es el objetivo de clic (el enlace se estira con `::after`) y mide 44 px o más. La fila activa (clase\n    `pv2-vit__fila--activa`) lleva una barra de 3 px en `accent-on-light` a la izquierda y un fondo cian muy claro.\n    Todas las filas reservan un borde izquierdo transparente de 3 px, así que activar una no cambia su tamaño ni su\n    posición."},{"oldText":"- **Pie:** «Cotizar marketing digital» y «Ver todo el marketing digital →», sin cambios.","newText":"- **Pie:** «Cotizar marketing digital» y «Ver todo el marketing digital →», con el mismo texto y destino. Desde 1024 px\n  van debajo del escenario, en la columna izquierda, como en la maqueta; en anchos menores, después de la lista.\n- **Orden en el DOM:** rótulo, H2 y garantías; escenario; lista; pie. Desde 1024 px la rejilla pone el pie bajo el\n  escenario (columna 1, fila 2) y la lista ocupa las dos filas de la columna 2."},{"oldText":"- **Sin JavaScript:** la escena 1 (Google Ads) está activa y la lista se ve completa. No se esconde texto: los 6\n  servicios viven en la lista y las escenas son maquetas con `aria-hidden`.","newText":"- **Sin JavaScript:** la escena 1 (Google Ads) está activa y la lista se ve completa. Los 6 servicios (nombre, enlace,\n  línea y, con d2, «Se mide») viven en la lista, siempre visibles. Las escenas 2 a 6, con su nota «Ejemplo», están en\n  el HTML pero ocultas con CSS hasta que se activan: son apoyo visual, no el contenido del servicio."},{"oldText":"- **Con JavaScript y puntero fino:** al pasar el puntero por una fila o enfocarla con el teclado, esa fila queda activa y\n  el escenario muestra su escena. Sigue activa hasta que se active otra.\n  - Es un script de unos 300 B en `index.astro`, con `pointerenter` y `focusin` delegados en la lista. No usa\n    librerías.\n  - La escena cambia con una transición de opacidad de 180 ms (DESIGN.md, Motion: «revelado 200 ms», bajo la primera\n    pantalla). Con «reducir movimiento» no hay transición.","newText":"- **Con JavaScript:** al pasar el puntero de mouse o lápiz por una fila (solo con `(hover: hover) and (pointer: fine)`)\n  o al enfocarla con el teclado (un `focusin` cuyo destino coincide con `:focus-visible`, en cualquier ancho), esa fila\n  queda activa y el escenario muestra su escena. Sigue activa hasta que se active otra.\n  - Es un script de unos 300 B en `index.astro`, con `pointerover` (que sí burbujea; filtra `pointerType` y busca la\n    fila con `closest`) y `focusin` delegados en la lista. No usa librerías.\n  - La escena cambia sin transición: la portada no se anima (DESIGN.md, Motion). Es una decisión de gusto que va a la\n    puerta final (fundido de 180 ms con la excepción declarada, o sin fundido)."},{"oldText":"- **Táctil y anchos menores:** tocar una fila navega a su página, porque es un enlace.\n  - De 640 a 1023 px: el escenario va arriba con la escena 1 y la lista debajo.","newText":"- **Táctil y anchos menores:** tocar una fila navega a su página al primer toque, porque es un enlace. En táctil el\n  escenario se queda en la escena 1: es apoyo visual, y el contenido de cada servicio está en su fila.\n  - De 640 a 1023 px: el escenario va arriba con la escena activa (la 1 al cargar) y la lista debajo."},{"oldText":"así que se declara en `scripts/main-permitidas.json` para `comparar-main`.","newText":"así que se declara en `scripts/main-permitidas.json`, y `comparar-main` se corre a mano porque no está en `npm run verify`."},{"oldText":"- **Maquetas:** siguen con `data-nosnippet` y `aria-hidden`; en el texto citable no entra nada nuevo.","newText":"- **Maquetas:** siguen con `data-nosnippet` y `aria-hidden`. La línea «Se mide», si el dueño la aprueba en la puerta,\n  es texto nuevo y visible en cada fila, tomado de los `medimos` ya publicados en la página de cada servicio."},{"oldText":"- **Lo que se quita:** `ModuloBento.astro` y las reglas del bento de `portada.css` solo las usaba Marketing, así que se\n  quitan; antes se confirma con `git grep`. También se quita el chequeo del bento de `qa-lcp` y su objetivo en `qa-a11y`.","newText":"- **Lo que se quita:** `ModuloBento.astro`, las reglas `.pv2-bento*` y `.pv2-modulo*` de `portada.css` y el campo\n  `ancho` de `MARKETING`, que solo usaba el bento; antes se confirma con `git grep`. También se quitan el chequeo del\n  bento de `qa-lcp` y su objetivo en `qa-a11y`. El detalle de qué reglas del bloque se conservan está en los requisitos\n  aceptados de la fase CEO."},{"oldText":"  - Bloque nuevo «8. Marketing: vitrina» con el prefijo `pv2-vit-`. `git grep` confirma que hoy no existe en el\n    repositorio.","newText":"  - Bloque nuevo «8. Marketing: vitrina» con las clases `pv2-vit` y `pv2-vit__*`. `git grep -n \"pv2-vit\"` confirma que\n    hoy no existen en el repositorio."},{"oldText":"Lo nuevo son el marco del navegador y el celular de las escenas 1\n  y 2, en HTML y CSS, sin imágenes.","newText":"Lo nuevo son el marco del navegador y los celulares de las escenas 1\n  y 2, en HTML con las clases `ew-dev__*` que el home ya carga (ajustadas solo bajo `.pv2-vit`), sin imágenes."},{"oldText":"  - la fila 1 y la escena 1 activas en el HTML, sin JS;","newText":"  - la fila 1 y la escena 1 activas en el HTML, sin JS (una sola `pv2-vit__fila--activa` y una sola\n    `pv2-vit__escena--activa`);"},{"oldText":"  - Tope del CSS del home: 27.600 B, medidos 26.890 B. Si lo pasa, se sube en `presupuestos.json` con su motivo.","newText":"  - Tope del CSS del home: 27.600 B en gzip, medidos 26.890 B. No se sube: lo que sale del bento tiene que compensar lo\n    nuevo."},{"oldText":"- **Colisión:** ninguna clase `pv2-vit-*` fuera de `#marketing`.","newText":"- **Colisión:** ningún elemento con una clase que contenga `pv2-vit` (`[class*=\"pv2-vit\"]`) fuera de `#marketing`."},{"oldText":"  - a 1024, 1280 y 1440 px, el escenario mide lo mismo con cada escena activa;","newText":"  - a 768, 1024, 1280 y 1440 px, el escenario mide lo mismo con cada escena activa, y el celular de la escena 1 queda\n    dentro del rectángulo de su escena;"},{"oldText":"  - con «reducir movimiento», la escena cambia sin transición.","newText":"  - la escena cambia sin transición (si el dueño elige el fundido en la puerta, con «reducir movimiento» no lo hay)."},{"oldText":"  - los objetivos de 44 px pasan a `.pv2-vit__fila a`;","newText":"  - el objetivo de 44 px se mide en la fila `.pv2-vit__fila` (el enlace se estira con `::after`), y `elementFromPoint`\n    en el centro de cada fila devuelve su enlace;"},{"oldText":"  - el foco es visible en las 6 filas.","newText":"  - el foco es visible en las 6 filas: se lee el `outline` de la fila (`.pv2-vit__fila:has(a:focus-visible)`), no el\n    del enlace activo."},{"oldText":"- **Después de publicar:** Lighthouse del home en producción por encima de 85, con LCP de 3,5 s o menos (D14). Si no,\n  se revierte.","newText":"- **Después de publicar:** seguir el despliegue con `gh run watch <id> --exit-status`, correr `scripts/check-prod.sh` y\n  medir PageSpeed Insights móvil del home (la medida vinculante de D14), 5 corridas, contra la línea base de PSI\n  tomada antes de empezar. Mediana por debajo de 85 o LCP de más de 3,5 s: se revierte. Mediana por debajo de 90: no\n  se avanza a lo siguiente hasta corregir (D14). Lighthouse local es solo el indicador de trabajo."},{"oldText":"  - «Módulo bento (Marketing)» pasa a «Vitrina (Marketing)».\n  - La excepción 3 deja de nombrar a Marketing entre las rejillas de dos tamaños.\n  - La excepción 2 sigue: las maquetas van sin borde propio dentro del escenario.","newText":"  - «Módulo bento (Marketing)» pasa a «Vitrina (Marketing)», con su anatomía: escenario con escenas apiladas, lista\n    numerada de filas enlace, fila activa y, en compacto, sin escenario.\n  - La excepción 1 deja de decir que el mapa pasa a bento: en la portada ya no queda ningún bento (Servicios usa los\n    paneles de D53 y Marketing la vitrina).\n  - La excepción 3 deja de nombrar a Marketing entre las rejillas de dos tamaños.\n  - La excepción 2 se reescribe para la vitrina: dentro de la tarjeta de cada escena, la maqueta va sin borde ni\n    sombra propios sobre `surface-alt` de radio 12, y el navegador y los celulares de las escenas 1 y 2 conservan solo\n    el borde de la interfaz que imitan, sin sombra.\n  - La excepción 5 se reescribe: 1,25 rem pasa a ser «H3 de tarjetas y de las filas de la vitrina», 2 rem «número de\n    etapa y número de fila de la vitrina», y suma el fondo cian claro de la fila activa (su valor exacto se fija al\n    implementar, con AA medido).\n  - Se declara la ficha blanca de garantías como excepción al «Don't: una tarjeta que no sea un artefacto real»: borde\n    de 1 px en `border`, radio 12, sombra `10px 10px 0 var(--ew-border)` sin desenfoque, y un check en SVG con\n    `aria-hidden` y trazo `accent-on-light`. El check es el acento de verificación, no el signo «+» de las listas de qué\n    incluye."}]} -->

<!-- autoplan-accepted:ceo -->
- **Comparación manual antes de publicar.** `comparar-main` y `selectores-hoja` no forman parte de `npm run verify`.
  - Se construye `origin/main` en una carpeta aparte.
  - Se corre `node scripts/comparar-main.mjs <dist-base> dist --permitidas scripts/main-permitidas.json`, con
    `main-permitidas.json` reescrito para D54 (`cambian: ["/"]`, `nuevas: []`).
  - Se corre `node scripts/selectores-hoja.mjs <dist-base> dist`, que cuida que la hoja compartida no gane utilidades
    de Tailwind por palabras nuevas del marcado o del script.
  - Los dos tienen que salir con 0.
- **Estilo de maqueta para las 6 escenas.** Pasan bajo `.pv2-vit` las reglas que hoy viven en `.pv2-modulo__vista`:
  - `.pv2-vit .pv2-maqueta`: fondo `surface-alt`, radio 12 y `overflow: hidden`;
  - `.pv2-vit .pv2-maqueta > .ew-mock`, solo el hijo directo: sin borde, sin radio, sin sombra y fondo transparente.
    Las maquetas dentro de los celulares no lo heredan: el chat conserva el fondo de `.ew-wa` (`#efeae2`) y la pantalla
    del celular del anuncio es blanca (`.pv2-vit .ew-dev__phone`, fondo `#fff`). Así ningún texto queda sobre el
    `#0b1220` del marco.

  Dentro de la tarjeta de cada escena no hay tarjeta dentro de tarjeta. La excepción 2 de `DESIGN.md` cubre el borde de
  la interfaz que imitan el navegador y los celulares de las escenas 1 y 2.
- **Escena 1, navegador y celular.** Reusa `ew-dev__stage`, `ew-dev__browser` y `ew-dev__bar` de `molde-kredit.css`.
  - El celular (`ew-dev__phone`, sin imagen) va absoluto dentro del stage, con `top` cerca del 18 %, `bottom: 0`, un
    ancho cerca del 30 % y `overflow: hidden`. El chat queda recortado abajo, como en la maqueta, y el celular nunca
    sale de su escena.
  - Los marcos conservan su borde, sin sombra propia.
  - Prueba en `qa-lcp`: a 768, 1024, 1280 y 1440 px, el rectángulo del celular está dentro del de la escena 1.
- **Escena 2, dos celulares.** Dos celulares lado a lado: el del anuncio `pv2-anuncio` y el del chat.
  - Usan el modificador `pv2-vit__telefono`: `position: static`, proporción cerca de 9:16, `overflow: hidden` y el borde
    de `ew-dev__phone`.
  - La prueba de maquetas sigue exigiendo que no haya `.pv2-marco` dentro de una `.pv2-maqueta`.
- **Script de la vitrina.**
  - Escucha `pointerover` delegado en la lista, que sí burbujea, y busca la fila con `closest('.pv2-vit__fila')`.
  - Con el puntero, solo cambia de escena si el `pointerType` es `mouse` o `pen` y
    `matchMedia('(hover: hover) and (pointer: fine)')` coincide.
  - Con el teclado cambia en `focusin` solo si el destino coincide con `:focus-visible`. Así un clic o un toque, que
    también enfocan el enlace, no cambian la escena.
  - El script alterna dos clases y no usa `aria-current`: `pv2-vit__fila--activa` en la fila y `pv2-vit__escena--activa`
    en la escena. En el HTML sin JS las traen la fila 1 y la escena 1.
  - Una sola regla muestra la escena activa; las demás van con `visibility: hidden`.
- **Prueba de toque** en `qa-lcp`, Chromium con `hasTouch` a 768 px.
  - `page.route` responde a la navegación hacia `/marketing/contenido-redes-sociales-panama/` con
    `route.fulfill({ status: 204 })`. Así Chromium no reemplaza la página y se puede leer el estado después.
  - Un toque en la fila 3 pide esa URL al primer toque, y la escena activa sigue siendo la 1.

  Lo que la prueba no prueba: la heurística de doble toque de WebKit no se ejercita en Chromium. Después de publicar se
  prueba a mano en un iPhone o iPad real y se anota en D54. En táctil el escenario se queda en la escena 1; D54 lo
  declara aceptado.
- **Escena persistente.** La escena activa se queda visible cuando el puntero sale de la lista y hasta que se active
  otra. Así cumple WCAG 1.4.13: no desaparece ni tapa otro contenido. Prueba en `qa-lcp`: pasar el puntero por la
  fila 3, sacarlo de la lista y comprobar que la escena 3 sigue visible.
- **Sin transición** (decisión de gusto d3, provisional hasta la puerta).
  - El bloque CSS de la vitrina no declara `transition` ni `animation`. `portada.test.mjs` lo comprueba junto a la
    prueba «la portada solo anima los paneles de Servicios…»: corta `portada.css` desde «/* ---- 8. Marketing:
    vitrina» hasta «/* ---- 9. Proceso», y exige que los dos `indexOf` sean mayores o iguales a 0.
  - Si el dueño elige el fundido: es de 180 ms, solo de opacidad, y desaparece con «reducir movimiento». La excepción
    se declara en `DESIGN.md` (Motion), en D54 y en esa prueba.
- **Accesibilidad de la lista.**
  - El número «01» y la flecha llevan `aria-hidden`.
  - El anillo de foco se pinta en la fila con `.pv2-vit__fila:has(a:focus-visible)`.
  - El H3 de las filas mide 1,25 rem (excepción 5 de `DESIGN.md`).
  - La barra de la fila activa va en `accent-on-light`. Todas las filas reservan un borde izquierdo transparente de
    3 px. Prueba en `qa-lcp`: el rectángulo de cada fila es igual antes y después de activarla.
  - El enlace no pinta su propio anillo dentro de la fila: `.pv2-vit__fila a:focus-visible { outline: none }`, porque
    el anillo lo dibuja la fila.
  - Prueba en `qa-a11y`: después de cada Tab se lee el `outline` de la fila, no el del enlace activo. No hay transición
    de color en la fila, así que no hace falta esperar.
- **Contraste por escena.** A 768 y a 1280 px, `qa-a11y` activa una por una las 6 escenas, alternando las clases
  directamente, y en cada una mide el contraste calculado de `.pv2-maqueta *` (con la etiqueta «Origen», que va en
  `--ew-muted` sobre el fondo del chat) y de su nota. Con `visibility: hidden`, `checkVisibility` deja fuera a las escenas inactivas. También
  mide el H3, la línea, el número y la línea «Se mide» de la fila activa sobre su fondo cian claro, y el número
  `.pv2-vit__num` de las 6 filas (lleva `aria-hidden` y axe no lo revisa).
- **Validación de datos.** `modulosMarketing(lista, datos = MARKETING, paginas = marketingPages)` en `portada.ts`.
  - Importa `marketingPages` de `./pages/marketing.ts`, con la extensión, porque `portada.test.mjs` carga el módulo en
    Node.
  - Los `medimos` de cada página se buscan en sus `blocks[].medimos`.
  - Por cada slug lanza un error con el slug si la línea pasa de 70 caracteres.
  - Con d2, lanza un error con el slug y el indicador si `mide` no tiene exactamente 3 indicadores, o si uno no está en
    los `medimos` publicados de la página de ese slug.
  - Pruebas unitarias: los 6 slugs de la lista de marketing de `site.ts` pasan. Lanzan error una línea de 71
    caracteres, 2 o 4 indicadores, y un indicador que no está en `medimos`.
- **«Se mide» en la fila** (gusto d2, provisional hasta la puerta).
  - Cada fila lleva, después de su línea,
    `<p class="pv2-vit__mide"><span class="ew-data">Se mide:</span> A · B · C</p>`. Los indicadores van separados
    por « · », sin `<ul>`.
  - Prueba en `portada.test.mjs`: el texto de ese párrafo, con los espacios normalizados, es igual a
    `Se mide: ${mide.join(" · ")}`.
  - Si el dueño la rechaza, se quitan juntos:
    - el campo `mide`, el parámetro `paginas` y la importación de `marketingPages`;
    - las pruebas unitarias de 2 o 4 indicadores y de indicador ausente;
    - la prueba del texto en `portada.test.mjs`;
    - el contraste de esa línea en `qa-a11y`;
    - su CSS.

    No se toca nada más.
- **«Origen: Google Ads»** (gusto d1, provisional hasta la puerta). La conversación de la escena 1 lleva debajo esa
  etiqueta, dentro de la maqueta. Si el dueño la rechaza, se quita sin tocar lo demás.
- **CSS que sale y CSS que se conserva** en `portada.css`.
  - Se quitan `.pv2-bento*`, `.pv2-modulo*` y `.pv2-bento--marketing`, y `.pv2-modulo__enlaces a` sale del selector
    compartido de la línea 65.
  - Se conservan, en un bloque nuevo «/* ---- Maquetas y notas de la portada» que va justo después del bloque de D53:
    `.pv2-nota`, `.pv2-nota .ew-data`, `.pv2-maqueta .ew-agenda__horas > .ew-agenda__ocupada`, `.pv2-sel` y
    `.pv2-pago__*`.
  - La prueba de D53 (`portada.test.mjs:600`-`601`) corta el CSS hasta ese comentario nuevo y comprueba que los dos
    `indexOf` son mayores o iguales a 0.
- **Tope de DOM.** `dist/index.html` sigue en 1.400 elementos o menos (`portada.test.mjs:545`; hoy 1.246). Si se pasa,
  se recorta el marcado de las escenas; no se sube el tope.
- **Escenas y presupuestos.** Las escenas van centradas en vertical dentro del escenario. Los topes de presupuesto son
  en gzip.
- **D54 en `DECISIONES.md`.** Anota cuatro cosas:
  - que las lecturas de la portada v2 (GSC del 29-oct y del 12-nov, GA4 del 12-nov y del 10-dic) incluyen la vitrina
    desde su publicación;
  - que en táctil el escenario se queda en la escena 1;
  - que la etiqueta «Origen: Google Ads» (d1) se apoya en lo ya publicado en `src/lib/pages/blog-39.ts:163` («Registra
    el lead en el CRM con su origen»);
  - el resultado de la prueba manual en iPhone o iPad.
- **TODO de eventos.** La entrada de `TODOS.md` «Eventos por clic en las escenas y el mapa de servicios de la portada»
  suma las 6 filas de la vitrina de Marketing. Sigue en la fase 3.
- **Línea base de PSI antes de empezar.** Se mide PageSpeed Insights móvil del home de producción, 5 corridas, y la
  mediana se anota en D54. La compuerta posterior a la publicación compara contra esa base con los umbrales de D14.
- **Errores de validación útiles.** Cuando `modulosMarketing()` rechaza un indicador, el mensaje nombra el slug, el
  indicador y el archivo que hay que corregir (`src/lib/pages/marketing.ts`). D54 avisa que editar los `medimos` de
  una página de marketing puede romper el build del home, y con él el despliegue.
- **Pruebas de geometría estables.** Las pruebas de `qa-lcp` que miden rectángulos esperan `document.fonts.ready`
  antes de medir.
- **Ficha de garantías (gusto d4, provisional hasta la puerta).** Va la ficha blanca de la maqueta elegida, con la
  excepción declarada. La alternativa es dejar las garantías en su fila actual y cambiar el «+» por el check, sin
  excepción nueva en `DESIGN.md`.
<!-- /autoplan-accepted:ceo -->

#### 0H, aprobación del documento

Spec Review Loop:

| Revisión | Nota | Resultado | Hallazgos | Qué se hizo |
|---|---|---|---|---|
| 1 | 6/10 | FAIL | 24 | todos corregidos |
| 2 | 7/10 | FAIL | 18 | todos corregidos; confirmó las 17 correcciones de la revisión 1 |
| 3 | 7/10 | FAIL | 16 (2 bloqueantes) | corregidos y verificados contra el texto: 16 de 16 |

Se alcanzó el tope de 3 revisiones. `spec not re-verified`: ningún revisor independiente vio la versión final, así que
la revisan de nuevo las fases de diseño e ingeniería. Las métricas están en `~/.gstack/analytics/spec-review.jsonl`.
Aprobación del documento: A, auto-decisión de /autoplan (pregunta de administración).

#### 0I. Secuencia

Igual que la de arriba. El esfuerzo sube a humano ~2 días / CC + gstack ~2-3 h por las pruebas de geometría, de toque
y de contraste por escena.

#### Voces duales (fase CEO)

- **Voz nativa (subagente Claude): completada.**
  - Entrada `INPUT: ceo bbb06042…`, que coincide con el snapshot `autoplan-ceo-96ISFi`.
  - Veredicto: técnicamente sólido, pero apunta a lo que menos mueve el negocio.
  - 9 hallazgos: 5 altos y 4 medios.
  - Recomienda aprobar con alcance reducido, la vitrina estática. Las razones:
    - el núcleo, la escena 1 con su origen y «Se mide», quedó como opcional;
    - las escenas 2 a 6 y el hover son caros y casi nadie los ve;
    - falta la métrica de negocio;
    - no queda margen de rendimiento;
    - la portada vende evidencia, no maquetas;
    - DESIGN.md se llena de excepciones;
    - hay acoplamiento con las páginas de marketing.
- **Voz externa (Codex, gpt-5.6-terra): completada en el segundo intento.**
  - El primer intento terminó con «porque» en vez de «because» y el validador lo dio por no disponible por falta de la
    marca de cierre.
  - 6 hallazgos: 2 críticos, 3 altos y 1 medio.
  - Recomendación: «defer D54 until it has a measurable qualified-lead hypothesis and real proof assets because a
    desktop-heavy visual refactor cannot solve the documented authority and evidence deficit».

```
CEO DUAL VOICES — CONSENSUS TABLE:
  Dimension                             Claude                         Codex                          Consensus
  1. Premises valid?                    no (P2 y dispositivos sin dato) no (cuello de botella errado)  CONFIRMED: premisas débiles
  2. Right problem to solve?            no (autoridad, D15)            no (autoridad y evidencia)     CONFIRMED: no es el problema principal
  3. Scope calibration correct?         no: reducir a estática         no: posponer                   CONFIRMED: sobredimensionado (difieren en cuánto)
  4. Alternatives sufficiently explored? no (arreglar bento, estática) no (caso real, landings, GBP)  CONFIRMED: no
  5. Competitive/market risks covered?  no (Sortlist, evidencia)       no (ficción sin prueba)        CONFIRMED: no
  6. 6-month trajectory sound?          no (sin atribución, rígido)    no (catálogo rígido)           CONFIRMED: no
CONFIRMED = completed subagent + outside.
```

Las dos voces piden cambiar la dirección que eligió el dueño, así que no se auto-decide. Va a la puerta final como
desafío al dueño (UC1 y UC2). Hasta que el dueño responda, sigue su dirección.

#### Desafíos al dueño (User Challenges, para la puerta)

- **UC1. Alcance de la vitrina.**
  - Dirección del dueño (D11): vitrina completa, con las 6 escenas que cambian al pasar el puntero.
  - Cambio que proponen las dos voces:
    - Claude: vitrina estática, con la lista, la escena 1 fija y «Se mide», sin script ni escenas 2 a 6.
    - Codex: posponer D54 y poner el esfuerzo en autoridad y prueba real.
  - Por qué:
    - en táctil y en celular el escenario no cambia o no existe;
    - nada indica que haya más escenas;
    - es la parte cara: script, pruebas de toque, contraste por escena y la prueba manual en WebKit.
  - Lo que los modelos no ven: el dueño eligió la vitrina mirando la maqueta, conoce a sus visitantes y puede valorar el
    efecto de las escenas en una reunión de venta en escritorio.
  - Costo si se equivocan: si se reduce y el dueño tenía razón, la sección pierde el «efecto vitrina» y se puede sumar
    después. Si no se reduce y los modelos tenían razón, se invierte en una interacción que casi nadie ve.
- **UC2. Medición antes de publicar.**
  - Decisión vigente: los eventos por clic siguen en la fase 3 (TODOS.md:139).
  - Cambio que proponen las dos voces:
    - copiar la línea base de GA4 de D51 antes de publicar;
    - sacar de GA4 el reparto por dispositivo de quienes entran por `/`;
    - adelantar un evento mínimo en las 6 filas y en el «Cotizar» de esta sección;
    - publicar después de la lectura de GSC del 29-oct, o anotar por qué no.
  - Por qué: una sección que promete «se miden hasta la consulta» saldría sin medirse, y las lecturas de octubre ya
    mezclan D51 y D53.
  - Lo que los modelos no ven: el dueño puede preferir publicar ya, por venta o por oportunidad.
  - Costo si se equivocan: unos días de espera, o una mejora sin dato que la respalde.

#### Section 1: Architecture Review

Alcance vigente:
- **Modo:** SELECTIVE EXPANSION (regla de autoplan).
- **Aprobado:** C1-C12, d1 y d2 provisionales, y d3 sin fundido.
- **Rechazado:** E1-E5.
- **Pendiente:** UC1 y UC2 en la puerta, y d4.

```
  BUILD (Astro SSG)                                               NAVEGADOR
  site.ts (lista marketing) ─┐                                    index.html (#marketing)
  portada.ts MARKETING ──────┼─> modulosMarketing(lista,datos,    ├─ cabecera + ficha de garantías
  pages/marketing.ts ────────┘     paginas) ── valida ──┐         ├─ .pv2-vit__escenario (6 escenas apiladas)
       (blocks[].medimos)          throw(slug,archivo)  │         │    escena--activa ← clase
                                                        v         ├─ ol.pv2-vit__lista (6 filas enlace)
  index.astro ── marca filas y escenas ──> dist/index.html ──────>│    fila--activa ← clase
  portada.css (bloque 8 vitrina, ?inline) ─────────────────────── ├─ pie (Cotizar + Ver todo)
  script en index.astro (~300 B) ─ pointerover/focusin ─────────> └─ alterna clases fila y escena
```

- **Flujo de datos (build):**
  - Camino feliz: los 6 slugs tienen datos y sus indicadores existen.
  - Nulo: un slug sin datos en `MARKETING` hace fallar el build (ya pasa hoy).
  - Vacío: una lista vacía da 0 filas, y la prueba de 6 filas lo detecta.
  - Error: un indicador que no está en `medimos` hace fallar el build con el slug y el archivo. El despliegue se pone
    rojo y la web sigue en la versión anterior.
- **Estado del cliente:**

```
  [S1 activa (HTML)] --pointerover fila k (mouse|pen, hover:hover)--> [Sk activa]
  [Sk] --focusin fila j (:focus-visible)--> [Sj]
  [Sk] --pointerleave / clic / toque--> [Sk] (sin cambio; el toque navega)
  inválido: dos escenas activas → el script quita la clase anterior antes de poner la nueva (una sola regla CSS)
```

- **Acoplamiento nuevo:** `portada.ts` depende de `pages/marketing.ts`, solo en build. Se justifica por la validación y
  el mensaje de error nombra el archivo.
- **Escala, SPOF y seguridad:** es un sitio estático; no hay escala que medir ni un punto único de falla nuevo, y no
  hay superficie de ataque nueva.
- **Reversión:** `git revert` y push, unos 5 minutos hasta el despliegue.
- **Artefactos sobre el trabajo:** no hay; las pruebas protegen el producto.
- **Hallazgo:** el acoplamiento del build, resuelto con el mensaje de error y el aviso en D54.

#### Section 2: Error & Rescue Map

```
  CODEPATH                         | QUÉ PUEDE FALLAR                         | CLASE
  ---------------------------------|------------------------------------------|---------------------
  modulosMarketing (build)         | slug sin datos                           | Error (throw)
                                   | línea > 70 caracteres                    | Error (throw)
                                   | mide ≠ 3 o fuera de medimos              | Error (throw)
  script vitrina (cliente)         | pointerover fuera de una fila            | closest() = null
                                   | matchMedia sin soporte                   | (navegadores viejos)
                                   | el script no carga o falla               | error de JS
  ---------------------------------|------------------------------------------|---------------------
  CLASE                 | ¿RESCATADA? | ACCIÓN                                  | QUÉ VE EL USUARIO
  Error (build)         | S           | el build falla con slug y archivo       | nada: sigue la versión anterior
  closest() = null      | S           | se ignora el evento                     | nada
  matchMedia sin soporte| S           | sin vista previa por puntero            | la escena 1 y la lista completa
  error de JS           | S           | queda el HTML sin JS                    | escena 1 y lista completa
```

Sin brechas: ningún error queda en silencio de cara al usuario, y los de build bloquean el despliegue.

#### Section 3: Security & Threat Model

No hay entradas de usuario, endpoints, secretos, dependencias nuevas ni datos personales. El script es un módulo de
Astro, no `is:inline`, y no lee ni escribe almacenamiento. Las maquetas no muestran datos reales. Sin hallazgos.

#### Section 4: Data Flow & Interaction Edge Cases

| Interacción | Caso borde | ¿Cubierto? | Cómo |
|---|---|---|---|
| Puntero sobre filas | pasar rápido por varias | sí | gana la última; sin transición |
| Puntero y clic | clic después del hover | sí | navega; el foco por clic no cambia la escena |
| Teclado | Tab y Shift+Tab | sí | `focusin` con `:focus-visible` cambia la escena |
| Toque | primer toque | sí | navega; prueba con `fulfill 204` |
| Lápiz | hover con lápiz | sí | `pointerType` `pen` aceptado |
| 640-1023 px | Tab en fila 6 con el escenario arriba | parcial | la escena cambia fuera de la vista; es apoyo visual y se acepta |
| Volver atrás | bfcache | sí | se restaura el último estado; da lo mismo cuál |
| Sin JS | todo | sí | escena 1 y lista completa |
| Zoom al 200 % | el ancho efectivo baja de 1024 | sí | se apila |
| Lista de servicios cambia | 5 o 7 slugs | sí | el build valida los datos; la prueba exige que coincida con el hub |

Orden asíncrono: no aplica (manejadores síncronos de un solo hilo). Sin brechas.

#### Section 5: Code Quality Review

Sigue los patrones del repo:
- datos por slug que rompen el build;
- `Maqueta` con su nota afuera;
- clases con prefijo propio;
- pruebas sobre `dist/`.

Reusa `Ejemplo.astro` y `ew-dev__*`; no hay duplicación. El manejador del script tiene menos de 5 ramas. La validación
contra `medimos` agrega complejidad por 6 cadenas, pero protege que lo publicado sea cierto; se mantiene. Hallazgo
(Codex, medio): las 6 escenas y sus pruebas hacen rígido cambiar la oferta. Mitigado porque todo se indexa por slug y
la lista sale de `site.ts`; el resto queda en UC1.

#### Section 6: Test Review

```
  NUEVO                          TIPO              PRUEBA (feliz / falla / borde)
  filas y enlaces (dist)         unidad sobre dist 6 filas = hub / slug faltante / orden
  escenas y nota (dist)          unidad sobre dist 6 escenas, nota hermana / sin nota / .pv2-marco dentro
  estado inicial (dist)          unidad sobre dist una sola activa / dos activas
  validación de datos            unitaria          6 slugs ok / 71 caracteres, 2 o 4 indicadores, ausente
  «Se mide» (d2)                 unidad sobre dist texto = mide / distinto
  colisión de clases             unidad sobre dist [class*=pv2-vit] fuera de #marketing
  sin transición                 unitaria CSS      bloque 8 sin transition/animation
  tope de DOM                    unidad sobre dist ≤ 1.400
  hover, Tab y persistencia      navegador         escena = fila activa / salir de la lista
  toque                          navegador         primer toque navega / la escena no cambia
  alto y celular dentro          navegador         768-1440 px / el celular sale
  filas que no se mueven         navegador         rectángulo igual antes y después
  44 px, foco y contraste        navegador (a11y)  por fila y por escena a 768 y 1280 px
  comparar-main, selectores-hoja manual            salida 0
```

- **Inestabilidad:** las pruebas de geometría esperan `document.fonts.ready` (aceptado).
- **Lo que no prueban:** la heurística de doble toque de WebKit (va a mano en iPhone o iPad) ni el comportamiento real
  de los usuarios (UC2).

#### Section 7: Performance Review

- **Lo que suma:** unos 60 a 80 elementos de DOM (tope de 1.400) y unos 300 B de JS inicial.
- **CSS:** neto sin subir el tope; lo que sale del bento compensa.
- **Costo de cambiar de escena:** solo cambia `visibility`, sin recalcular el layout, y no hay imágenes nuevas.
- **Hallazgo:** D14 manda PSI móvil y el plan medía con Lighthouse local. Corregido: línea base de PSI antes y
  compuerta en PSI después.
- **Hallazgo:** queda poco margen, porque D53 dio una mediana de 90 justo en el umbral. Por eso la línea base de PSI y
  el CSS sin subir.
- **TBT de unos 300 ms sin explicar:** fuera del radio de este plan; diferido a `TODOS.md`.

#### Section 8: Observability & Debuggability Review

No hay registros ni alertas que agregar; es un sitio estático. La verificación posterior a publicar es `check-prod`,
PSI y la prueba manual. Brecha: no hay métrica de negocio de la sección; va a UC2 y no se auto-decide.

#### Section 9: Deployment & Rollout Review

No hay migraciones ni banderas. Un push a `main` despliega, con el permiso del dueño (D47). No hay ventana de riesgo con
dos versiones a la vez: es estático.

Checklist posterior:
- `gh run watch`;
- `check-prod`;
- PSI con 5 corridas;
- prueba manual en iPhone o iPad;
- anotar D54 en las lecturas de GSC y GA4.

Reversión: `git revert` y push.

#### Section 10: Long-Term Trajectory Review

- **Deuda:** las 6 escenas con sus pruebas y las excepciones de DESIGN.md. Esa erosión de DESIGN.md la señaló Claude
  (medio) y se mitiga declarando solo lo que se use (d4 y UC1).
- **Reversibilidad:** 5/5.
- **Lo que viene después:** reemplazar maquetas por artefactos reales cuando haya permisos (estado ideal).
- **Retrospectiva de las ampliaciones:** d2 («Se mide») resulta clave para el titular (Claude, hallazgo 2). Se mantiene
  recomendada en la puerta.

#### Section 11: Design & UX Review

- **Lo que se ve primero:** el H2 y las garantías; luego la escena 1, la lista y el pie.
- **Estados:** sin JS, hover, foco, toque y compacto. No hay estados de carga, vacío ni error: es contenido estático.
- **Riesgo de aspecto genérico:** la lista con vista previa al pasar el puntero es un patrón común de plantillas de
  Framer y Webflow (investigación de mercado). Lo contrarresta el contenido propio: «Se mide» y la ruta del anuncio a
  WhatsApp.
- **Diseño adaptable:** declarado.
- **Accesibilidad:** cubierta.
- **Siguiente:** la revisión de diseño profunda la hace la fase 2 de /autoplan.

#### NOT in scope

- **Diferido:**
  - E1, los eventos por fila, está en `TODOS.md:139`, fase 3 (puede adelantarse si se acepta UC2).
  - El diagnóstico del TBT de unos 300 ms del home está en `TODOS.md`.
- **Rechazado:** E2, E3, E4 y E5 (ver 0G).
- **Fuera de alcance:** el hub `/marketing/`, las páginas de marketing y Videos publicitarios en la portada.
- **Pendiente de la puerta:**
  - UC1 (estática o posponer);
  - UC2 (medición antes de publicar);
  - d1, d2, d3 y d4.

#### What already exists

- `Ejemplo.astro`, para google, whatsapp, correo y flujo.
- `Maqueta.astro`, para la maqueta con su nota afuera.
- `pv2-anuncio` y `pv2-parrilla`.
- `ew-dev__*`, para los marcos.
- `modulosMarketing()` y `MARKETING`, para los datos por slug.
- `CtaCotizar`, para el pie.
- Los `medimos` de cada página.
- `seo-congelado`, `comparar-main` y `selectores-hoja`, como redes de seguridad.

Todo se reusa.

#### Dream state delta

Este plan deja la estructura de vitrina con «Se mide» respaldado por datos publicados. Para el ideal a 12 meses
faltan artefactos reales de clientes y eventos por fila. El cuello de botella del negocio, la autoridad (D15), no se
mueve con este plan, como dicen las dos voces.

#### Failure Modes Registry

```
  CODEPATH              | FAILURE MODE                     | RESCUED? | TEST? | USER SEES?        | LOGGED?
  ----------------------|----------------------------------|----------|-------|-------------------|--------
  modulosMarketing      | indicador fuera de medimos       | S        | S     | nada (build rojo) | CI
  modulosMarketing      | línea > 70                       | S        | S     | nada (build rojo) | CI
  script                | no carga                         | S        | S     | escena 1 + lista  | no
  escena 1              | celular sale del stage           | S        | S     | —                 | QA
  fila activa           | mueve el layout (CLS)            | S        | S     | —                 | QA
  toque iOS             | doble toque por heurística       | parcial  | manual| 2 toques          | D54
  contraste escena 2-6  | texto bajo AA                    | S        | S     | —                 | QA
```

Sin brechas críticas. La única parcial, la heurística de doble toque de WebKit, queda declarada con prueba manual.

#### Completion Summary (CEO)

```
  +====================================================================+
  |            MEGA PLAN REVIEW — COMPLETION SUMMARY                   |
  +====================================================================+
  | Mode selected        | SELECTIVE EXPANSION                         |
  | System Audit         | D53 revertido una vez; index.astro muy tocado|
  | Step 0               | 9 premisas (1 sin verificar); 2 gustos E6/E7 |
  | Section 1  (Arch)    | 1 issue (acoplamiento de build)             |
  | Section 2  (Errors)  | 7 error paths mapped, 0 GAPS                |
  | Section 3  (Security)| 0 issues found, 0 High severity             |
  | Section 4  (Data/UX) | 10 edge cases mapped, 0 unhandled           |
  | Section 5  (Quality) | 1 issue (rigidez, a UC1)                    |
  | Section 6  (Tests)   | Diagram produced, 0 gaps (+1 manual)        |
  | Section 7  (Perf)    | 3 issues found (PSI, margen, TBT diferido)  |
  | Section 8  (Observ)  | 1 gap (métrica de negocio, a UC2)           |
  | Section 9  (Deploy)  | 0 risks flagged                             |
  | Section 10 (Future)  | Reversibility: 5/5, debt items: 2           |
  | Section 11 (Design)  | 1 issue (patrón genérico, mitigado)         |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (9 items)                           |
  | What already exists  | written                                     |
  | Dream state delta    | written                                     |
  | Error/rescue registry| 7 rows, 0 CRITICAL GAPS                     |
  | Failure modes        | 7 total, 0 CRITICAL GAPS                    |
  | TODOS.md updates     | 2 items (TBT nuevo; eventos ampliada)       |
  | Scope proposals      | 7 proposed, 2 accepted (gusto)              |
  | CEO plan             | written                                     |
  | Outside voice        | codex completed (2.º intento)               |
  | Lake Score           | N/A (sin preguntas con puntaje)             |
  | Diagrams produced    | 4 (arquitectura, estado, error, test)       |
  | Stale diagrams found | 0                                           |
  | Unresolved decisions | 2 (UC1, UC2) + 4 gustos a la puerta         |
  | Reality rows         | 7/7 rows (PLAN_REALITY), 1 unverified       |
  +====================================================================+
```

#### Implementation Tasks (CEO)

- [ ] **T1 (P1, humano: ~30 min / CC: ~5 min)** — PSI. Tomar la línea base de PSI móvil del home (5 corridas) antes de
  tocar código.
  - Surge de: Sección 7. D14 manda PSI.
  - Archivos: `docs/specs/rediseno-elementoweb/DECISIONES.md` (D54).
  - Verificar: la mediana queda anotada.
- [ ] **T2 (P1, humano: ~1 día / CC: ~1 h)** — Vitrina. Construir filas, escenas, CSS y script según el bloque
  aceptado.
  - Surge de: 0B y Secciones 1, 4 y 6.
  - Archivos: `src/pages/index.astro`, `src/lib/portada.ts`, `src/styles/portada.css`; se borra
    `src/components/ModuloBento.astro`.
  - Verificar: `npm run verify`.
- [ ] **T3 (P1, humano: ~4 h / CC: ~30 min)** — Pruebas. Escribir primero las de `portada.test.mjs`, `qa-lcp` y
  `qa-a11y`.
  - Surge de: Sección 6.
  - Archivos: `scripts/portada.test.mjs`, `scripts/qa-lcp.mjs`, `scripts/qa-a11y.mjs`.
  - Verificar: rojas antes y verdes después.
- [ ] **T4 (P2, humano: ~30 min / CC: ~10 min)** — Documentos. `DESIGN.md` (excepciones), D54 y `TODOS.md`.
  - Surge de: Secciones 10 y 11.
  - Archivos: `DESIGN.md`, `DECISIONES.md`, `TODOS.md`.
  - Verificar: lectura.
- [ ] **T5 (P1, humano: ~20 min / CC: ~10 min)** — Comparación. `comparar-main` y `selectores-hoja` contra la base.
  - Surge de: 0A, P6.
  - Archivos: `scripts/main-permitidas.json`.
  - Verificar: los dos salen con 0.
- [ ] **T6 (P1, humano: ~30 min / CC: ~10 min)** — Publicación. Con permiso: `gh run watch`, `check-prod`, PSI con 5
  corridas y prueba manual en iPhone o iPad.
  - Surge de: Sección 9.
  - Archivos: ninguno.
  - Verificar: los umbrales de D14.

### Fase 2, diseño (autoplan run main-20261020-232420)

Método leído completo: `autoplan-design-methodology-3XLHEX/methodology.md`, 1.967 de 1.967 líneas (rangos 1-600,
601-1200, 1201-1800 y 1801-1967). Snapshot de las voces: `autoplan-design-a4v3HC`, sha `0af1846d…`.

#### Step 0

- **Puntaje inicial: 7/10.** El plan está muy atado en interacción, accesibilidad y pruebas.
- **Qué falta para un 10:**
  - densidad real frente a la de la maqueta (copy de las filas);
  - tamaño del escenario;
  - composición de las escenas 2 a 6;
  - estados visuales de las filas;
  - alineación de la rejilla;
  - qué ve el celular.
- **DESIGN.md existe.** Todo se calibra contra él: tokens en `colors.*`, `rounded.*`, Elevation, Motion y las
  excepciones 1 a 6.
- **Lo que se reusa:**
  - `Ejemplo.astro`, `Maqueta.astro`, `ew-dev__*`, `CtaCotizar` y la anatomía «Así se vería»;
  - la regla de números de 2 rem de `#proceso .ew-pasos__n` (`portada.css:221`).
- **Maquetas:** no se generan nuevas con el diseñador de gstack. La dirección ya la eligió el dueño en
  `mockups-marketing/2-vitrina.jpg` (D11). Las capturas de las 6 escenas implementadas se le muestran antes de
  publicar (ver la tarea de capturas).

#### Voces duales (diseño)

- **CLAUDE SUBAGENT (design — independent review): completada.**
  - `INPUT: design 0af1846d…` coincide con el snapshot.
  - 1 crítico, 4 altos y 10 medios.
  - Crítico (C1): con las líneas de hoy (65 a 68 caracteres) y «Se mide», la lista mide unos 840 a 1.100 px frente a
    unos 560 px de la columna izquierda. Además, «Facebook e Instagram Ads» vuelve a partirse a 1024 px.
  - Altos: escenario «el más alto» con escenas centradas (H1), escenas 2 a 6 sin diseño (H2), fila activa resaltada
    en celular sin escenario (H3) y parpadeo del hover al desplazarse (H4).
  - Medios: ficha de garantías (M1), números (M2), `:has()` sin respaldo (M3), estados de las filas (M4), fondo
    activo (M5), «Origen» dentro de WhatsApp (M6), pie que flota (M7), celular (M8), celular sobre el anuncio (M9) y
    capturas (M10).
- **CODEX SAYS (design — UX challenge): completada.**
  - gpt-5.6-terra, `OUTSIDE_STATUS: completed`.
  - 1 crítico, 3 altos, 4 medios y 1 bajo.
  - Crítico: la pieza central es ficción, no autoridad. Ya está en UC1.
  - Altos: «Se mide» no muestra una medición; en celular la experiencia queda de segunda; hay decisiones visuales
    todavía provisionales.
  - Medios:
    - el estado activo no tiene semántica (si la escena es decorativa, debería quedar fija);
    - hay pruebas de geometría pero no de composición;
    - la ficha de garantías es una excepción sin artefacto;
    - la prioridad de lectura está invertida.
  - Recomendación: «defer D54 until it is redesigned around verified proof and a mobile-first static hierarchy».

```
DESIGN OUTSIDE VOICES — LITMUS SCORECARD:
═══════════════════════════════════════════════════════════════
  Check                                    Claude  Codex  Consensus
  ─────────────────────────────────────── ─────── ─────── ─────────
  1. Brand unmistakable in first screen?   N/A     N/A    NOT SPEC'D (sección 8, no es la primera pantalla)
  2. One strong visual anchor?             YES     YES*   CONFIRMED (*Codex: el ancla es ficción)
  3. Scannable by headlines only?          PARCIAL NO     DISAGREE (números que compiten / prioridad invertida)
  4. Each section has one job?             PARCIAL NO     CONFIRMED: la ficha de garantías se mete
  5. Cards actually necessary?             NO      NO     CONFIRMED: la ficha de garantías no
  6. Motion improves hierarchy?            NO      NO     CONFIRMED: el hover tal como está no
  7. Premium without decorative shadows?   NO      NO     CONFIRMED: la sombra de la ficha es decorativa
  ─────────────────────────────────────── ─────── ─────── ─────────
  Hard rejections triggered:               ninguna ninguna CONFIRMED: ninguna
═══════════════════════════════════════════════════════════════
```

Las dos voces piden cambiar elementos de la maqueta del dueño: la ficha de garantías y la jerarquía en celular. La
ficha va a la puerta como gusto d4, con la recomendación cambiada a la alternativa. La jerarquía del celular va como
gusto d6. El cambio de alcance (estática o posponer) ya es UC1.

#### Pass 1: Information Architecture. 6/10 → 9/10

- **C1 (densidad), gusto d5:** líneas cortas de la maqueta, de 40 caracteres o menos, sin repetir las garantías.
  Columnas de 1,15 fr y 1 fr. Prueba: a 1024, 1280 y 1440 cada H3 cabe en un renglón y la lista no pasa la altura de
  la columna izquierda en más de 48 px. Con d2, «Se mide» cabe en un renglón a 1280, o se eligen indicadores más
  cortos.
- **M1 (ficha de garantías), gusto d4:** la recomendación pasa a la alternativa (las dos voces): garantías en su fila
  actual con el check y sin tarjeta.
- **M2 (números):** números en `text-muted`, peso 500, y el activo en `accent-on-light`. Lista en `<ul>`. D54 anota que
  va pegada a Proceso, que también usa números de 2 rem.
- Queda en 9 porque d4 y d5 dependen del dueño.

```
  #marketing (≥1024)
  ┌ rótulo · H2 ───────────────────────────────┐ [garantías: d4]
  ├ escenario (1,15fr) ─────────┬ lista (1fr) ─┤
  │ tarjeta 16/10 (escena)      │ 01 Google Ads│
  │ nota «Ejemplo»              │ 02 …         │
  ├ pie: Cotizar · Ver todo ────┤ 06 …         │
  └─────────────────────────────┴──────────────┘
  <1024: H2 → garantías → escenario (≥640) → lista → pie
```

#### Pass 2: Interaction State Coverage. 6/10 → 9/10

```
  FUNCIÓN          | CARGA     | VACÍO            | ERROR                 | ÉXITO                | PARCIAL
  -----------------|-----------|------------------|-----------------------|----------------------|------------------
  escenario        | HTML, S1  | n/a (6 fijas)    | sin JS: S1 fija       | escena = fila activa | táctil: S1 fija
  fila (≥640)      | 01 activa | n/a              | sin JS: :hover CSS    | barra + blanco       | —
  fila (<640)      | sin activa| n/a              | —                     | navega               | —
  «Se mide» (d2)   | en HTML   | build falla      | build falla           | 1 renglón a 1280     | —
```

- **H3:** los estilos de `--activa` van solo desde 640 px. A 390 ninguna fila tiene barra ni fondo.
- **H4:** el hover exige movimiento real del puntero (coordenadas distintas a las últimas) y unos 100 ms de
  permanencia; se cancela al salir. Prueba: la rueda con el puntero quieto sobre la lista no cambia la escena.
- **M3:** `outline: none` y el anillo de la fila van dentro de `@supports selector(:has(a:focus-visible))`.
- **M4:** estados de las filas:
  - H3 en `text`, sin subrayado;
  - flecha en `text-muted`, y en `accent-on-light` cuando la fila está activa, en `:hover` (CSS, también sin JS) y en
    el foco;
  - filete inferior de 1 px en `border`.
- **M5:** la fila activa va en `surface-raised` (blanco) con la barra, en lugar del cian claro. Ya no suma un valor
  fuera de escala.
- **Codex (estado sin semántica):** se mantiene. La escena es decorativa (`aria-hidden`) y todo el contenido está en
  la fila; si el dueño elige la vitrina estática en UC1, desaparece.

#### Pass 3: User Journey & Emotional Arc. 6/10 → 8/10

```
  PASO | QUÉ HACE                        | QUÉ SIENTE                    | LO RESPALDA EL PLAN
  -----|---------------------------------|-------------------------------|------------------------------
  1    | llega a la sección (escritorio) | «¿miden de verdad?»           | H2 + escena 1 (anuncio → WhatsApp)
  2    | ve el origen de la consulta     | «esto se puede rastrear»      | d1 «CRM · Origen: Google Ads»
  3    | pasa el puntero por 2 o 3 filas | curiosidad                    | escena por fila, sin parpadeo
  4    | lee qué se mide                 | confianza concreta            | d2 «Se mide», de datos publicados
  5    | cotiza o entra a un servicio    | decisión                      | pie alineado al final de la lista
  1m   | llega en celular                | lista clara, sin ilustración  | d6: escena 1 fija sobre la lista
```

- **M6 (d1 refinada):** «Origen» va como etiqueta del CRM en voz de datos, pegada al borde del celular y fuera de la
  interfaz de WhatsApp: «CRM · Origen: Google Ads». WhatsApp no muestra ese dato.
- **M7:** la rejilla usa `grid-template-rows: auto 1fr`; el escenario va con `align-self: start`, alineado con la fila
  01, y el pie con `align-self: end`, alineado con el final de la fila 06.
- **M8, gusto d6:** por debajo de 640 px, la escena 1 fija sobre la lista si el tramo entre «Cotizar» se mantiene en
  2.110 px o menos. La alternativa es sin escenario, como hoy.
- Queda en 8: en celular la promesa sigue a medias, y eso es lo que plantea UC1.

#### Pass 4: AI Slop Risk. 7/10 → 8/10

- **Clasificación:** PERSUADE (sección de marketing). Sin rechazos duros.
- **Litmus:** ver la tarjeta de puntuación.
- **H2 (escenas 2 a 6):** cada escena tiene su composición, dentro de la tarjeta 16/10:
  1. Google: navegador con el celular del chat.
  2. Meta: dos celulares (anuncio y chat).
  3. Contenido: la parrilla dentro de un celular, como cuadrícula de perfil.
  4. Email: el correo en una ventana de cliente de correo, con el marco `ew-dev__browser` y la barra del dominio del
     correo.
  5. WhatsApp: la plantilla con botón en un celular, distinta del chat de la escena 1.
  6. Automatizaciones: el flujo a todo el ancho.

  Se respeta el tope de DOM.
- **Riesgo de patrón genérico** (lista con vista previa, común en plantillas): lo contrarrestan los datos propios
  («Se mide» y el origen).
- Queda en 8 por la objeción de Codex (ficción contra prueba), que es de alcance (UC1).

#### Pass 5: Design System Alignment. 6/10 → 9/10

- **Tokens:**
  - fila activa: `colors.surface-raised` y barra en `colors.accent-on-light`;
  - números: `colors.text-muted`;
  - filete: `colors.border`;
  - tarjeta de escena: `rounded.lg` y sombra `10px 10px 0 {colors.border}`;
  - maqueta: `colors.surface-alt` y `rounded.md`.
- **Excepciones:**
  - la 5 ya no suma un valor fuera de escala (M5);
  - la ficha de garantías depende de d4: si el dueño elige la alternativa, no se agrega su excepción.
- Queda en 9 por d4.

#### Pass 6: Responsive & Accessibility. 6/10 → 9/10

- **H1:** la tarjeta de cada escena tiene proporción fija de 16/10.
  - Los celulares se dimensionan por alto (`height: 100%`, ancho por 9:16).
  - Las escenas van con `align-self: stretch` y `grid-template-rows: 1fr auto`, y la nota en un renglón.
  - Prueba: el rectángulo de la tarjeta es idéntico en las 6 escenas, a 768, 1024, 1280 y 1440.
  - Esto reemplaza «las escenas van centradas en vertical» de la fase CEO.
- **M9:** a 768, 1024, 1280 y 1440, el celular de la escena 1 no corta el rectángulo del título ni del texto del
  anuncio. El resultado de Google ocupa el 65 % izquierdo del navegador.
- **M10:** antes de publicar se capturan las 6 escenas a 1280, y la sección a 1440, 1024, 768 y 390, junto a la
  maqueta. Se le muestran al dueño con la tarjeta de permiso.
- **Accesibilidad:** el teclado, el contraste, 44 px y `aria-hidden` ya están en el plan. Se suman el `@supports` (M3)
  y la ausencia de resaltado en celular (H3).

#### Pass 7: Unresolved Design Decisions

```
  DECISIÓN                              | SI SE DIFIERE
  --------------------------------------|----------------------------------------------
  d5 copy corto de las filas            | la lista dobla la altura y no se parece a la maqueta
  d2 «Se mide» (con regla de 1 renglón) | o se pierde la prueba del H2, o la fila crece
  d4 ficha de garantías o fila con check| una excepción de DESIGN.md para una tarjeta decorativa
  d6 escena 1 en celular                | en celular la promesa no tiene ilustración
  d1 etiqueta del CRM                   | la maqueta muestra un dato que WhatsApp no tiene
  d3 sin fundido                        | con tarjeta fija, el corte seco no se ve roto
  UC1 / UC2 (de la fase CEO)            | ver arriba
```

- **d3 con fundido:** si el dueño lo elige, las dos escenas son visibles durante el cruce (`visibility` con
  `transition-delay`).
- Resueltas por auto-decisión mecánica: C1 sin el copy, H1, H3, H4, M2, M3, M4, M5, M7, M9 y M10.
- Van a la puerta: d1 refinada, d2, d3, d4, d5 y d6.

#### NOT in scope (diseño)

- Generar maquetas nuevas con el diseñador de gstack: el dueño ya eligió la suya.
- Una maqueta «10/10» por dimensión: ninguna pasada quedó por debajo de 7 después de los arreglos.
- Las escenas con artefactos reales de clientes: es el estado ideal y no hay permisos.

#### What already exists (diseño)

DESIGN.md con sus tokens y excepciones, `Ejemplo.astro`, `Maqueta.astro`, `ew-dev__*` (navegador y celular),
`pv2-anuncio`, `pv2-parrilla`, `CtaCotizar`, la anatomía «Así se vería» y la convención de números de 2 rem de Proceso.

#### Design Review Completion Summary

```
  +====================================================================+
  |         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | System Audit         | DESIGN.md existe; UI: sección 8 del home    |
  | Step 0               | 7/10; foco: todas las dimensiones (autoplan)|
  | Pass 1  (Info Arch)  | 6/10 → 9/10 after fixes                    |
  | Pass 2  (States)     | 6/10 → 9/10 after fixes                    |
  | Pass 3  (Journey)    | 6/10 → 8/10 after fixes                    |
  | Pass 4  (AI Slop)    | 7/10 → 8/10 after fixes                    |
  | Pass 5  (Design Sys) | 6/10 → 9/10 after fixes                    |
  | Pass 6  (Responsive) | 6/10 → 9/10 after fixes                    |
  | Pass 7  (Decisions)  | 11 resolved, 6 a la puerta (d1-d6)         |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (3 items)                           |
  | What already exists  | written                                     |
  | TODOS.md updates     | 0 items proposed                            |
  | Approved Mockups     | 0 generated, 1 approved (el del dueño, D11) |
  | Decisions made       | 11 added to plan (auto, mecánicas)          |
  | Decisions deferred   | 6 (gustos a la puerta) + UC1, UC2           |
  | Overall design score | 6/10 → 8/10                                 |
  +====================================================================+
```

Unresolved decisions (diseño): d1, d2, d3, d4, d5 y d6 en la puerta. Ninguna queda sin decisión provisional.

<!-- autoplan-accepted:design -->
- **Columnas y alineación.** Desde 1024 px, escenario de 1,15 fr y lista de 1 fr, con `grid-template-rows: auto 1fr`.
  El escenario va con `align-self: start`, alineado con la fila 01, y el pie con `align-self: end`, alineado con el
  final de la fila 06.
- **Tarjeta de proporción fija.** La tarjeta de cada escena (fila 1 de `.pv2-vit__escena`) tiene `aspect-ratio: 16/10`
  y cada maqueta cabe adentro.
  - Los celulares se dimensionan por alto (`height: 100%`, ancho por 9:16).
  - Las escenas van con `align-self: stretch` y `grid-template-rows: 1fr auto`, y la nota en un renglón.
  - Esto reemplaza «las escenas van centradas en vertical dentro del escenario» de la fase CEO.
  - Prueba en `qa-lcp`: a 768, 1024, 1280 y 1440 px, el rectángulo de la tarjeta es idéntico en las 6 escenas.
- **Composición de cada escena dentro de la tarjeta.**
  1. Navegador con el resultado de Google en su 65 % izquierdo, y el celular del chat.
  2. Dos celulares: anuncio y chat.
  3. La parrilla dentro de un celular, como cuadrícula de perfil.
  4. El correo dentro de un `ew-dev__browser` con la barra de un cliente de correo.
  5. La plantilla de campaña con botón dentro de un celular, distinta del chat de la escena 1.
  6. El flujo a todo el ancho.

  Todo dentro del tope de DOM de 1.400 elementos. Prueba en `qa-lcp`: a 768, 1024, 1280 y 1440 px, el celular de la
  escena 1 no corta el rectángulo del título ni del texto del anuncio de Google.
- **Hover con intención.** El cambio de escena por puntero exige movimiento real (coordenadas distintas a las del
  último evento) y unos 100 ms de permanencia sobre la fila, y se cancela al salir. Prueba en `qa-lcp`: la rueda del
  mouse con el puntero quieto sobre la lista no cambia la escena.
- **Fila activa solo desde 640 px.** Por debajo de 640 px ninguna fila tiene la barra ni el fondo; el anillo de foco
  sigue en todos los anchos. Prueba en `qa-lcp` a 390 px.
- **Estados de las filas.**
  - H3 en `text`, sin subrayado.
  - Número en `text-muted`, peso 500, y en `accent-on-light` en la fila activa; a 1,25 rem por debajo de 640 px.
  - Flecha en `text-muted`, y en `accent-on-light` cuando la fila está activa, en `:hover` (CSS, también sin JS) y en
    el foco.
  - Filete inferior de 1 px en `border`.
  - Fila activa en `surface-raised` con la barra de 3 px en `accent-on-light`. Ya no hay fondo cian claro, así que la
    excepción 5 no suma ningún valor.
  - Lista en `<ul>`. D54 anota que va pegada a Proceso, que también tiene números de 2 rem.
- **Foco con respaldo.** El `outline: none` del enlace y el anillo de la fila van dentro de
  `@supports selector(:has(a:focus-visible))`. Sin `:has()`, queda el anillo propio del enlace.
- **Copy de las filas (gusto d5, provisional hasta la puerta).**
  - Las líneas de `MARKETING` pasan a las cortas de la maqueta: 40 caracteres o menos y un renglón a 1280 px, sin
    repetir las garantías.
  - `modulosMarketing()` valida el tope de 40.
  - Prueba en `qa-lcp`: a 1024, 1280 y 1440 px, cada H3 y cada línea caben en un renglón, y la lista no pasa la altura
    de la columna izquierda en más de 48 px.
  - Si el dueño la rechaza, quedan las líneas de hoy, con el tope de 70.
- **«Se mide» en un renglón (si d2 se aprueba).** La línea cabe en un renglón a 1280 px; si no cabe, se eligen
  indicadores más cortos de los `medimos` publicados. Prueba en `qa-lcp`.
- **Etiqueta de origen (d1 refinada, provisional hasta la puerta).** Va como «CRM · Origen: Google Ads», en voz de
  datos, pegada al borde del celular de la escena 1 y fuera de la interfaz de WhatsApp. Su contraste se mide en
  `qa-a11y`.
- **Garantías (gusto d4, provisional hasta la puerta).** La recomendación pasa a la alternativa, en la que coinciden
  las dos voces:
  - las 3 garantías en su fila actual, con un check en SVG con trazo `accent-on-light` en lugar del «+»;
  - sin tarjeta y sin excepción nueva en `DESIGN.md`.

  Si el dueño prefiere la ficha de la maqueta, va con borde y sin sombra.
- **Celular por debajo de 640 px (gusto d6, provisional hasta la puerta).** La escena 1 fija sobre la lista, solo si
  `qa-lcp` mantiene los tramos entre «Cotizar» en 2.110 px o menos a 390 px. Si no los mantiene, sin escenario, como
  hoy, y D54 lo anota.
- **Fundido (d3, si el dueño lo elige).** Las dos escenas son visibles durante el cruce, con `visibility` y
  `transition-delay`.
- **Capturas para el dueño.** Antes de pedir el permiso de publicar se capturan las 6 escenas a 1280 px y la sección a
  1440, 1024, 768 y 390 px, junto a la maqueta elegida, y se le muestran con la tarjeta de permiso.
<!-- /autoplan-accepted:design -->

Correcciones de texto del plan (diseño), registradas como reemplazos exactos:

<!-- autoplan-baseline-edits:design {"sourceSha256":"026ca6265fa8657cbd4f7403955328fce5db387f6f0ea7d60f411616e38c064e","replacements":[{"oldText":"- **Cuerpo desde 1024 px, en 2 columnas** (escenario de 1,5 fr y lista de 1 fr):","newText":"- **Cuerpo desde 1024 px, en 2 columnas** (escenario de 1,15 fr y lista de 1 fr, como el reparto de la maqueta):"},{"oldText":"    - Lleva 6 escenas apiladas en la misma celda de la rejilla, así que el escenario toma el alto de la más alta.\n      Cambiar de escena no mueve nada (CLS 0).","newText":"    - Lleva 6 escenas apiladas en la misma celda de la rejilla. La fila 1 de cada escena (la tarjeta) tiene una\n      proporción fija de 16/10 y cada maqueta cabe adentro, así que la tarjeta y la nota no se mueven al cambiar de escena\n      (CLS 0)."},{"oldText":"  - **Lista:** un `<ol>` de 6 filas, en el orden de `site.ts` (indexado por slug, como hoy). Cada fila lleva:\n    - el número «01» a 2 rem con cifras tabulares, el tamaño de «número de etapa» de DESIGN.md;","newText":"  - **Lista:** un `<ul>` de 6 filas (el orden no significa una secuencia), en el orden de `site.ts` (indexado por slug,\n    como hoy). Cada fila lleva:\n    - el número «01» a 2 rem con cifras tabulares, peso 500, en `text-muted` (el de la fila activa en `accent-on-light`),\n      para que no le gane al H3; por debajo de 640 px, a 1,25 rem;"},{"oldText":"    - la línea de hoy de `portada.ts`, de 70 caracteres o menos;","newText":"    - su línea de `portada.ts`: con la decisión de gusto d5, la línea corta de la maqueta (40 caracteres o menos, un\n      renglón a 1280 px); si el dueño la rechaza, la línea de hoy (70 o menos);"},{"oldText":"`pv2-vit__fila--activa`) lleva una barra de 3 px en `accent-on-light` a la izquierda y un fondo cian muy claro.","newText":"`pv2-vit__fila--activa`) lleva una barra de 3 px en `accent-on-light` a la izquierda y fondo blanco (`surface-raised`)."},{"oldText":"  - La excepción 5 se reescribe: 1,25 rem pasa a ser «H3 de tarjetas y de las filas de la vitrina», 2 rem «número de\n    etapa y número de fila de la vitrina», y suma el fondo cian claro de la fila activa (su valor exacto se fija al\n    implementar, con AA medido).","newText":"  - La excepción 5 se reescribe: 1,25 rem pasa a ser «H3 de tarjetas y de las filas de la vitrina» y 2 rem «número de\n    etapa y número de fila de la vitrina». La fila activa usa `surface-raised`, así que no suma ningún valor fuera de\n    escala."},{"oldText":"- **Cabecera:** el rótulo y el H2 a la izquierda, sin cambios. Desde 1024 px, a la derecha del H2, las 3 garantías en\n  una ficha blanca con un check por línea; en anchos menores, debajo del H2. Hoy son una fila con «+».","newText":"- **Cabecera:** el rótulo y el H2 a la izquierda, sin cambios. Las 3 garantías llevan un check por línea en lugar del\n  «+». Según la decisión de gusto d4, van en su fila actual (recomendado) o, desde 1024 px, en la ficha blanca de la\n  maqueta, a la derecha del H2."},{"oldText":"  - Por debajo de 640 px no hay escenario, igual que el bento de hoy («en compacto, sin vista»): solo la lista.","newText":"  - Por debajo de 640 px, con la decisión de gusto d6, la escena 1 fija sobre la lista si los tramos entre «Cotizar»\n    siguen en 2.110 px o menos; si no, sin escenario, como el bento de hoy («en compacto, sin vista»)."},{"oldText":"servicio («Google Ads»), que es mejor ancla. Siguen los H3 por servicio y no cambian las líneas.","newText":"servicio («Google Ads»), que es mejor ancla. Siguen los H3 por servicio. Las líneas solo cambian si el dueño aprueba\n  d5 (copy corto); solo se muestran en la portada."},{"oldText":"  - el contraste AA de la fila activa (H3, línea y número sobre el fondo cian claro) entra en el chequeo calculado;","newText":"  - el contraste AA de la fila activa (H3, línea y número sobre su fondo `surface-raised`) entra en el chequeo\n    calculado;"},{"oldText":"  - Se declara la ficha blanca de garantías como excepción al «Don't: una tarjeta que no sea un artefacto real»: borde\n    de 1 px en `border`, radio 12, sombra `10px 10px 0 var(--ew-border)` sin desenfoque, y un check en SVG con\n    `aria-hidden` y trazo `accent-on-light`. El check es el acento de verificación, no el signo «+» de las listas de qué\n    incluye.","newText":"  - El check de las garantías es un SVG con `aria-hidden` y trazo `accent-on-light`: es el acento de verificación, no\n    el signo «+» de las listas de qué incluye. Solo si el dueño elige la ficha en d4 se declara la excepción al «Don't:\n    una tarjeta que no sea un artefacto real», con borde de 1 px en `border`, radio 12 y sin sombra."}]} -->

### Fase 3, ingeniería (autoplan run main-20261020-232420)

Método leído completo: `autoplan-eng-methodology-4EeqEO/methodology.md`, 2.254 de 2.254 líneas (rangos 1-600, 601-1200,
1201-1800 y 1801-2254). Snapshot de las voces: `autoplan-eng-RfShWm`, sha `517bdd57…`. Plan de pruebas:
`~/.gstack/projects/josimarguilbaud-elementoweb/JosimarG-main-eng-review-test-plan-20261021-005657.md`.

#### Step 0: Scope Challenge

- **Lo que ya existe y se reusa:**
  - `Maqueta.astro` (prop `clase`) y `Ejemplo.astro`, con los tipos google, whatsapp, correo y flujo;
  - `ew-dev__*` (`molde-kredit.css:131`-`138`, ya inyectado en el home);
  - el patrón `cqi` y `container-type` de la cascada del héroe (`portada.css:35`-`36`);
  - `modulosMarketing()` (`portada.ts:123`);
  - `CtaCotizar`;
  - `marketingPages` (`marketing.ts:21`, que solo tiene `import type`, así que carga en Node).
- **Lo que no es plug and play (Codex):** `Ejemplo.astro` no trae el correo dentro de un navegador, la cuadrícula de
  perfil en un celular ni el navegador con chat. Cada escena necesita su marcado. `.ew-dev__phone` y `.ew-dev__browser`
  traen sombra, ancho y padding que hay que anular bajo `.pv2-vit`.
- **Complejidad:** unos 13 archivos tocados, que es 8 o más. No hay clases ni servicios nuevos.
  - Archivos: `index.astro`, `portada.ts`, `portada.css`, borrar `ModuloBento.astro`, `marketing.ts` (comentario de
    cabecera), `portada.test.mjs`, `qa-lcp.mjs`, `qa-a11y.mjs`, `DESIGN.md`, `DECISIONES.md`, `TODOS.md`,
    `main-permitidas.json` y, si hiciera falta, `presupuestos.json`.
  - Regla de autoplan: nunca reducir. Pregunta de estructura (`plan-eng-review-structure`): auto-decisión por la
    disposición original. Ninguna disposición más chica conserva las pruebas y los documentos; un componente aparte
    sumaría un archivo.
  - Resultado: **scope accepted as-is**.
- **Búsqueda:** el patrón (lista con vista previa por hover) ya se investigó en la fase CEO, con WCAG 1.4.13. Los
  bloques nativos de la plataforma ya están elegidos: `pointermove` con `movementX`/`movementY`, `:focus-visible`,
  `@supports selector()` y consultas de contenedor [Layer 1].
- **TODOS:** la TODO del TBT ya se escribió en la fase CEO. La de eventos se amplía en la implementación. No hay TODO
  nueva.

| Premisa | Afirmación | Recibo | Veredicto |
|---|---|---|---|
| E1 | Margen de CSS de 710 B en gzip | `scripts/presupuestos.json:9` | verificada; el boceto ya consume ~850 B (Claude) |
| E2 | La tarjeta `::before` se puede medir | `getBoundingClientRect` no ve pseudo-elementos | falsa: pasa a ser un elemento real |
| E3 | `.pv2-vit .pv2-maqueta > .ew-mock` cubre todos los mocks | `molde-kredit.css:87`, mocks dentro de `ew-dev` | falsa: hacen falta selectores en los marcos |
| E4 | `pointerover` con coordenadas evita el parpadeo por la rueda | semántica de `pointerover` | falsa: pasa a `pointermove` |
| E5 | `marketing.ts` carga en Node | `marketing.ts`, solo `import type`; `marketing-ia.test.mjs` | verificada |
| E6 | Margen de DOM de 154 elementos | `portada.test.mjs:545`, 1.246 hoy | verificada; unos +90 estimados |
| E7 | La línea de 40 caracteres cabe en 1 renglón a 1024 px | ~300 px útiles en la columna | dudosa: la regla rige desde 1280 |

REALITY: premise-table finding 7 premisas, 3 falsas (E2, E3, E4) y 1 dudosa (E7), corregidas en el bloque aceptado scripts/presupuestos.json:9
REALITY: already-done pass origin/main sin commits nuevos sobre los archivos nombrados desde el 20-oct src/pages/index.astro:302
REALITY: surface-check pass npm run verify, comparar-main y selectores-hoja existen con el uso documentado scripts/selectores-hoja.mjs:2
REALITY: binding-decisions pass D14 (PSI 85/90), D36, D47, D53 y las decisiones CEO y de diseño se respetan; UC1 y UC2 siguen en la puerta docs/specs/rediseno-elementoweb/DECISIONES.md:120
REALITY: numbers finding el margen de CSS (710 B) no alcanza en el boceto (~850 B solo la base) y no está medido sobre el código real; spike obligatorio scripts/presupuestos.json:9
REALITY: deferred-asks pass sin issue enlazado docs/specs/rediseno-elementoweb/PLAN-MARKETING-VITRINA.md:5
REALITY: pr-count pass un despliegue a main con permiso; commits con pruebas primero, anotando el rango en D54 docs/specs/rediseno-elementoweb/DECISIONES.md:247

#### Voces duales (ingeniería)

- **Claude SUBAGENT (eng — independent review): completada.**
  - `INPUT: eng 517bdd57…` coincide con el snapshot.
  - Hallazgos: 4 altos, 7 medios y 7 bajos.
  - Altos:
    - la tarjeta con `::before` no se puede medir;
    - nada comprueba que cada maqueta quepa;
    - el CSS no alcanza;
    - las enmiendas se contradicen.
  - Medios:
    - `pointerover`;
    - los `.ew-mock` dentro de los marcos;
    - la geometría a 1024 px;
    - la diferencia entre plataformas;
    - el acoplamiento con `marketing.ts`;
    - iPhone antes de publicar;
    - la fila activa en táctil.
  - Recomendación: consolidar la especificación, hacer un spike de una tarde, usar una tarjeta real y `pointermove`.
- **Codex SAYS (eng — architecture challenge): completada.**
  - gpt-5.6-terra.
  - Altos:
    - el alcance no está aprobado;
    - no hay medición de negocio;
    - prueba ficticia;
    - complejidad solo para escritorio;
    - escenas apiladas poco especificadas.
  - Medios:
    - el reuso no es directo;
    - CSS sin demostrar;
    - el acoplamiento de datos es frágil;
    - falta la semántica del hover.
  - Recomendación: «defer implementation until the owner approves a reduced, measurable scope».

```
ENG DUAL VOICES — CONSENSUS TABLE:
  Dimension                           Claude          Codex           Consensus
  1. Architecture sound?               no (::before,   no (apilado,    CONFIRMED: requiere arreglos
                                       contradicciones) reuso)
  2. Test coverage sufficient?         no (encaje,     no (alto del    CONFIRMED: brechas
                                       rueda en vacío)  contenedor)
  3. Performance risks addressed?      no (CSS)        no (CSS)        CONFIRMED: spike obligatorio
  4. Security threats covered?         sí (sin         sin hallazgos   CONFIRMED: sin superficie nueva
                                       superficie)
  5. Error paths handled?              parcial (acople, parcial (acople CONFIRMED: endurecer la validación
                                       guardas)         de datos)
  6. Deployment risk manageable?       sí, con spike   no sin alcance  DISAGREE → puerta (UC1/UC2)
                                       y rango         aprobado
CONFIRMED = native + outside agree.
```

Hallazgo crítico de una sola voz: ninguno. La recomendación de Codex de diferir la implementación coincide con UC1 y
UC2 de la fase CEO: no es un desafío nuevo, refuerza los que ya existen.

#### Section 1: Architecture

```
  site.ts (marketing) ──┐
  portada.ts MARKETING ─┼─> modulosMarketing(lista, datos, paginas) ──valida──> throw(slug, portada.ts, marketing.ts)
  marketing.ts ─────────┘   (blocks[].medimos; exactamente 1 bloque)
                              │
  index.astro #marketing <────┘   Maqueta.astro (clase=pv2-vit__tarjeta) ─ Ejemplo.astro / marcado propio
     ├─ .pv2-vit (grid; container-type: inline-size)
     │    ├─ .pv2-vit__escenario (grid-area 1/1 para las 6 escenas)
     │    │     └─ .pv2-vit__escena[data-escena] ── .pv2-maqueta(16/10) + .pv2-nota
     │    ├─ ul.pv2-vit__lista[role=list] ── li.pv2-vit__fila (H3>a, línea, «Se mide», flecha)
     │    └─ pie (CtaCotizar)
     └─ script (index.astro): pointermove/pointerout/focusin delegados ─> clases --activa
  portada.css: bloque «8. Marketing: vitrina» (+ «Maquetas y notas de la portada» tras D53)
  molde-kredit.css: ew-dev__* (anulado bajo .pv2-vit: sombra, ancho, padding)
```

- [P1] (confianza 9/10) La tarjeta con `.pv2-vit__escena::before` no se puede medir, y su tamaño no está garantizado en
  una rejilla de alto indefinido.
  - Disposición: aceptado. La tarjeta pasa a ser el propio `.pv2-maqueta` (mecánica, P5).
- [P1] (confianza 8/10) Las escenas apiladas tienen que compartir la misma celda; si no, las ocultas ocupan alto.
  - Disposición: aceptado. Todas las escenas van con `grid-area: 1 / 1`, y la prueba exige que el escenario mida lo
    mismo que una escena.
- [P2] (confianza 9/10) `molde-kredit.css:87` y `:131`-`137`: los `.ew-mock` dentro de los marcos conservan borde y
  radio, y `ew-dev` trae sombra, ancho y padding.
  - Disposición: aceptado. Se anulan bajo `.pv2-vit`, con su prueba.
- [P2] (confianza 8/10) Las enmiendas se contradicen en el texto (Claude, punto 4).
  - Disposición: aceptado. Precedencia explícita y lista de conflictos resueltos en el bloque aceptado.

#### Section 2: Code Quality

- [P2] (confianza 9/10) `pointerover` y `pointerout` se disparan entre los hijos de una misma fila, y comparar
  coordenadas no frena la rueda.
  - Disposición: aceptado. `pointermove` con `movementX || movementY`, fila candidata y `relatedTarget`.
- [P2] (confianza 8/10) `portada.ts` deja de ser puro, y una edición en `marketing.ts` puede romper el build del home.
  - Disposición: aceptado:
    - mensajes que nombran los dos archivos;
    - exactamente un bloque `medimos` por slug;
    - rechazar entradas viejas de `MARKETING`;
    - comentario «solo `import type`» en la cabecera de `marketing.ts`.
  - La fuente de métricas compartida (Codex) queda fuera del radio y no se difiere: la validación basta.
- [P3] (confianza 8/10) Guardas del script:
  - escena destino existente antes de alternar;
  - `matches(':focus-visible')` en try/catch;
  - salir si no hay lista.

  Disposición: aceptado.
- [P3] (confianza 7/10) `<ul>` con `list-style: none` pierde la semántica en VoiceOver.
  - Disposición: aceptado. `role="list"`.

#### Section 3: Test review

Framework: `node --test` sobre `dist/` (`scripts/*.test.mjs`) y Playwright Chromium en `qa-lcp`/`qa-a11y`
(`npm run verify`).

```
CODE PATHS                                              USER FLOWS
[+] portada.ts modulosMarketing()                       [+] Escritorio con mouse
  ├── [GAP→★★★] 6 slugs ok / línea >40|>70 / mide≠3       ├── [GAP→★★★] hover con intención (100 ms, misma fila)
  │            / indicador ausente / 0|2 bloques          ├── [GAP→★★★] rueda con puntero quieto (con elementFromPoint)
  │            / entrada vieja                            └── [GAP→★★ ] escena persistente al salir
  └── [GAP→★★ ] mensaje nombra los 2 archivos           [+] Teclado
[+] index.astro #marketing (dist)                         ├── [GAP→★★★] Tab/Shift+Tab: escena y anillo en la fila
  ├── [GAP→★★★] 6 filas = hub, 6 escenas, 1 activa       └── [GAP→★★ ] sin doble anillo
  ├── [GAP→★★ ] nota hermana, «Se mide» exacto          [+] Táctil
  └── [GAP→★★ ] DOM ≤1.400, colisión pv2-vit              ├── [GAP→★★★] primer toque navega, escena 1 (fulfill 204)
[+] portada.css                                           └── [GAP→★★ ] sin estilos activos con puntero grueso
  ├── [GAP→★★ ] D53 corta hasta «Maquetas y notas»      [+] Geometría (768/1024/1280/1440)
  ├── [GAP→★★ ] vitrina sin transition/animation          ├── [GAP→★★★] tarjeta idéntica en 6 escenas (±1 px)
  └── [GAP→★★ ] :hover sin display/visibility/content     ├── [GAP→★★★] nodos clave dentro de su maqueta
[+] script vitrina                                        ├── [GAP→★★ ] celular dentro y sin tapar el anuncio
  └── [GAP→★★ ] guardas (sin lista, sin escena, sin       ├── [GAP→★★ ] filas sin moverse al activarse
               :focus-visible)                            └── [GAP→★★ ] ≥1280: 1 renglón, lista ≤ izq + 48, ≤95 %
                                                        [+] Contraste (768/1280, 6 escenas, visibilityProperty)
                                                          └── [GAP→★★★] maquetas, notas, «Origen», fila activa, números
COVERAGE hoy: 0/24 (todo es nuevo)  |  planificado: 24/24  |  [→E2E]: los flujos de puntero, teclado y toque (Playwright)
QUALITY planificada: ★★★:10 ★★:14  |  sin LLM/eval
```

- **Retiradas:**
  - el chequeo del bento en `qa-lcp.mjs:131`-`145`;
  - el selector del bento en `qa-a11y.mjs:87`;
  - la prueba «8. marketing» se reescribe.
- **Plataforma (Claude, punto 8):** 1 px de tolerancia, texto al 95 % o menos y la variante a 1280 − 17 px. Aceptado.
- **iOS (Claude, punto 10):** prueba estática de los `:hover` y prueba en iPhone o iPad con `astro preview --host`
  antes de publicar, si el dueño tiene uno a mano; si no, después. Aceptado.

#### Section 4: Performance

- [P1] (confianza 8/10) CSS: margen de 710 B. El boceto de Claude (`scratchpad/vit.css`) ya suma unos 850 B en gzip
  solo de la base, y quitar el bento ahorra unos 420 B. Disposición:
  - spike obligatorio antes de las pruebas;
  - decisión de gusto d7 para la puerta: orden de recorte (escenas 3 a 5 con la maqueta de hoy, sin marco) antes que
    subir el tope.
- [P2] (confianza 7/10) DOM: unos +90 elementos de un margen de 154. Se cuenta en el spike.
- [P3] (confianza 6/10) Geometría a 1024: la regla de un renglón y la de altura rigen desde 1280. De 1024 a 1279 px el
  pie va a todo el ancho, debajo de las dos columnas.
- Sin consultas, caché ni memoria en juego: es un sitio estático. El script corre solo con eventos del usuario.

#### NOT in scope (ingeniería)

- Una fuente de métricas compartida entre la portada y las páginas de marketing (Codex). La validación cruzada basta.
- WebKit en CI: pide una descarga; se reemplaza con la prueba estática de `:hover` y la prueba manual en el iPhone.
- Paralelizar en worktrees: no hay oportunidad, ver abajo.

#### What already exists (ingeniería)

Ver Step 0. Se reusa todo lo listado; lo único nuevo son el marcado de 4 composiciones y el bloque CSS `pv2-vit`.

#### Failure modes

| Código | Falla realista | ¿Prueba? | ¿Manejo? | ¿Lo ve el usuario? |
|---|---|---|---|---|
| CSS | supera el tope y el CI frena el despliegue | presupuestos | spike + d7 | no (no se publica) |
| tarjeta 16/10 | una maqueta no cabe y se recorta | nodos dentro de la maqueta | composición en `cqi` | no |
| hover | parpadeo con la rueda | rueda + `elementFromPoint` | `pointermove` | no |
| iOS | doble toque | estática + manual | sin `:hover` que muestre u oculte | posible, se anota |
| datos | se edita `medimos` y falla el build | pruebas unitarias | mensaje con los 2 archivos | no (build rojo) |
| geometría | diferencias Windows/CI | tolerancias | 1280 − 17 px | no |

Sin brechas críticas: no hay falla sin prueba, sin manejo y en silencio.

#### Worktree parallelization strategy

Sequential implementation, no parallelization opportunity. Todo pasa por `index.astro`, `portada.css` y
`portada.test.mjs`.

#### Completion summary (ingeniería)

- Step 0: Scope Challenge, scope accepted as-is.
- Reality rows: 7 de 7 (PLAN_REALITY); 3 premisas falsas corregidas y 1 dudosa.
- Architecture Review: 4 issues found.
- Code Quality Review: 4 issues found.
- Test Review: diagrama hecho; 24 brechas, todas con prueba planificada.
- Performance Review: 3 issues found.
- NOT in scope: written.
- What already exists: written.
- TODOS.md updates: 0 nuevas (la del TBT es de la fase CEO; la de eventos se amplía en la implementación).
- Failure modes: 0 critical gaps flagged.
- Unresolved decisions: 1 nueva para la puerta (d7), más UC1, UC2 y d1-d6.
- Outside voice: codex completed.
- Parallelization: 1 carril, secuencial.
- Lake Score: N/A.

#### Implementation Tasks (ingeniería)

- [ ] **T1 (P1, humano: ~3 h / CC: ~30 min)** — Spike. Medir en el scratchpad, a 1024 y 1280 px, tres cosas:
  - el CSS en gzip contra los 710 B;
  - si cada maqueta cabe en 16/10;
  - la altura de la lista y el DOM.
  - Surge de: Secciones 1 y 4. El margen de CSS y el encaje no están demostrados.
  - Archivos: el scratchpad.
  - Verificar: un reporte con los números y el orden de recorte aplicado (d7).
- [ ] **T2 (P1, humano: ~4 h / CC: ~30 min)** — Pruebas primero. Escribir las pruebas del plan de pruebas, que tienen
  que fallar al principio.
  - Surge de: Sección 3.
  - Archivos: `scripts/portada.test.mjs`, `scripts/qa-lcp.mjs`, `scripts/qa-a11y.mjs`.
  - Verificar: rojas antes y verdes después.
- [ ] **T3 (P1, humano: ~1 día / CC: ~1,5 h)** — Vitrina. Construir según el bloque aceptado, con la precedencia
  ingeniería > diseño > CEO.
  - Surge de: Secciones 1 y 2.
  - Archivos: `src/pages/index.astro`, `src/lib/portada.ts`, `src/styles/portada.css`,
    `src/lib/pages/marketing.ts` (comentario); se borra `src/components/ModuloBento.astro`.
  - Verificar: `npm run verify`.
- [ ] **T4 (P1, humano: ~30 min / CC: ~10 min)** — Antes de publicar.
  - Pasos:
    - `comparar-main` y `selectores-hoja` contra el commit de partida;
    - capturas;
    - iPhone en la red local, si es posible.
  - Surge de: Sección 3, iOS.
  - Archivos: `scripts/main-permitidas.json`.
  - Verificar: los dos scripts salen con 0 y se leen los avisos.

<!-- autoplan-accepted:eng -->
- **Precedencia.** Si los bloques aceptados se contradicen, manda el de ingeniería, luego el de diseño, luego el de CEO
  y por último el texto del plan. Conflictos ya resueltos:
  - garantías según d4, con la fila con check como recomendación;
  - la fila activa en `surface-raised`;
  - el tope de la línea es 40 con d5 y 70 sin d5, y la prueba unitaria lanza con 41 cuando d5 está aprobada;
  - el peso incluye los marcos de las escenas 1 a 5;
  - las escenas se estiran (`stretch`), no se centran;
  - el JS suma unos 600 B;
  - a 390 px, según d6.
- **Spike antes de las pruebas.** En el scratchpad, no en el repo, se arma la vitrina mínima y a 1024 y 1280 px se
  mide:
  - el CSS en gzip contra el margen de 710 B;
  - que cada maqueta quepa en 16/10;
  - la altura de la lista frente a la columna izquierda;
  - la cuenta de DOM.

  Con ese resultado se aplica el orden de recorte de d7 antes de escribir las pruebas.
- **Tarjeta real.** La tarjeta de cada escena es el propio `.pv2-maqueta`, con la clase `pv2-vit__tarjeta` por la prop
  `clase`:
  - `aspect-ratio: 16/10`, `overflow: hidden`, borde de 1 px, radio 20, sombra `10px 10px 0 var(--ew-border)` y
    padding;
  - adentro, un lienzo `surface-alt` de radio 12.

  Esto reemplaza la tarjeta con `::before` de la fase de diseño. La escena usa `grid-template-rows: auto auto` y todas
  las escenas comparten `grid-area: 1 / 1` en el escenario. Las pruebas miden `.pv2-maqueta` y `.pv2-nota`, con 1 px
  de tolerancia:
  - la tarjeta es idéntica en las 6 escenas;
  - el escenario mide lo mismo que una escena.
- **Composición escalable.** El escenario lleva `container-type: inline-size`, y las medidas internas de las maquetas
  (tipografía, marcos, separaciones) van en `cqi`, como la cascada del héroe (`portada.css:35`). Prueba en `qa-lcp`:
  por escena y por ancho (768, 1024, 1280 y 1440 px), quedan dentro del rectángulo de su `.pv2-maqueta`:
  - el título y el texto del anuncio de Google;
  - el titular del correo;
  - el mensaje de la plantilla;
  - los 3 pasos del flujo;
  - el texto del anuncio de Meta.
- **Marcos sin tarjeta dentro de tarjeta.** Bajo `.pv2-vit`:
  - `.ew-dev__browser > .ew-mock` y `.ew-dev__phone > .ew-mock` van sin borde ni radio, y el chat conserva el fondo de
    `.ew-wa`;
  - se anulan la sombra de `.ew-dev__browser`, el ancho del 24 % y la sombra de `.ew-dev__phone`, y el `padding-bottom`
    de `.ew-dev__stage`.

  Prueba: ningún `.ew-mock` dentro de `#marketing .pv2-maqueta` tiene borde.
- **Hover con intención (reemplaza el de diseño).**
  - Se activa con `pointermove` delegado en la lista, solo si `movementX || movementY`, con `pointerType` `mouse` o
    `pen` y `(hover: hover) and (pointer: fine)`.
  - Se guarda la fila candidata y el temporizador de unos 100 ms no se reinicia si la fila es la misma.
  - Se cancela en `pointerout` solo si `!fila.contains(e.relatedTarget)`.
  - Prueba de la rueda: después de `mouse.wheel`, `elementFromPoint` confirma que otra fila quedó bajo el puntero, y la
    escena no cambió.
- **Fila activa solo con puntero fino.** La barra y el fondo de la fila activa van dentro de
  `@media (hover: hover) and (pointer: fine) and (min-width: 640px)`. El anillo de foco con teclado sigue en cualquier
  ancho. Prueba: en un contexto táctil a 768 px, ninguna fila tiene barra ni fondo.
- **Guardas del script.**
  - Si no hay lista, sale sin hacer nada.
  - Busca la escena destino y alterna las clases solo si existe.
  - `matches(':focus-visible')` va en try/catch.
- **Validación endurecida.** `modulosMarketing()` lanza un error con el slug y nombra los dos archivos
  (`src/lib/portada.ts` y `src/lib/pages/marketing.ts`) en estos casos:
  - una página de la lista sin exactamente un bloque con `medimos`;
  - una entrada de `MARKETING` que ya no está en la lista.

  La cabecera de `marketing.ts` dice que solo admite `import type`. Las pruebas unitarias cubren los dos casos.
- **Geometría por rango.** La regla de un renglón para el H3, la línea y «Se mide», y la de la lista con no más de
  48 px sobre la columna izquierda, rigen desde 1280 px. De 1024 a 1279 px el pie va a todo el ancho, debajo de las dos
  columnas. Tolerancias:
  - 1 px en los rectángulos;
  - el texto ocupa el 95 % o menos del ancho;
  - también se prueba a 1280 − 17 px (barra de desplazamiento de Windows).
- **Pruebas de iOS.**
  - Prueba estática: ninguna regla `:hover` del bloque `.pv2-vit` cambia `display`, `visibility` ni `content`.
  - Antes de publicar, si el dueño tiene un iPhone o iPad a mano, se prueba con `astro preview --host` en la red local.
    Si no, se prueba después y se anota en D54.
- **Contraste con la opción correcta.** Todo chequeo de `qa-a11y` que recorra las escenas usa
  `checkVisibility({ visibilityProperty: true })`.
- **Lista con semántica.** `ul.pv2-vit__lista` lleva `role="list"`.
- **Comparación y reversión.**
  - `comparar-main` y `selectores-hoja` comparan contra el build del commit del que parte el cambio, y se leen también
    los avisos de `selectores-hoja`.
  - D54 anota el rango de commits para que `git revert` lo cubra entero.
- **Recorte por presupuesto (gusto d7, provisional hasta la puerta).** Si el spike muestra que el CSS no entra en
  27.600 B en gzip:
  - primero, las escenas 3 a 5 usan la maqueta de hoy, sin marco de dispositivo;
  - después, d6 sin escenario en celular.

  Solo si aun así no entra, se sube el tope en `presupuestos.json` con su motivo.
- **UC1 = a (puerta, 21-oct-2026).** La vitrina completa sigue, con las 6 escenas y el hover con intención. Es la
  dirección del dueño; la recomendación de la vitrina estática queda registrada como rechazada.
- **Medición antes de publicar (UC2 = b, puerta del 21-oct-2026).**
  - **Línea base de GA4.** Antes de publicar se copia de GA4, en modo lectura desde el Chrome del dueño y sin tocar la
    configuración, a `audit/ga4-portada-linea-base-2026-10.md`:
    - las sesiones que empiezan en `/`, las sesiones con interacción, `cta_click` por `location` y
      `generate_lead` por `service`;
    - las vistas de `/marketing/*` que vienen de `/` (`page_referrer`);
    - todo en dos ventanas: del 30-sep al 14-oct (antes de D51) y del 15-oct al día de la publicación (D51 y D53).
    - Además, el reparto por `deviceCategory` de las sesiones que empiezan en `/` en los últimos 28 días.
  - **Evento `select_content`.** Al hacer clic en el enlace de una fila de la vitrina, `src/scripts/track.ts` envía
    `select_content` con `content_type: "servicio"`, `content_id` (el `id` corto de la fila, p. ej.
    `google-ads-panama`) y `location: "marketing"`.
    - La lista lleva `data-cta-loc="marketing"` y cada enlace de fila lleva `data-content-id`.
    - El código es genérico: cualquier `a[data-content-id]`, con `data-content-type` y `servicio` por defecto.
    - Corre después de las ramas de WhatsApp, `tel:`, `mailto:` y `cta_click`, así que nunca duplica un evento.
    - Nunca se envía al pasar el puntero ni al enfocar.
    - No envía datos personales (regla del diccionario).
  - **Prueba en `qa-lcp`.** Se reusa la navegación interceptada con `route.fulfill({ status: 204 })`:
    - un clic en la fila 3 deja en `window.dataLayer` el evento `select_content` con
      `content_id: "contenido-redes-sociales-panama"` y `location: "marketing"`;
    - pasar el puntero y enfocar con Tab no dejan ningún `select_content`;
    - el «Cotizar» de la sección sigue enviando `cta_click` con `location: "marketing"` y `service: "pauta"`.
  - **Diccionario.** `docs/event-dictionary.md` suma la fila de `select_content`. Registrar `content_id` como
    dimensión personalizada en GA4 es un cambio de configuración de la cuenta: lo hace el dueño, o se le pide permiso.
  - **Regla de decisión (D54).** A los 28 días de publicar se comparan con las dos ventanas de la línea base:
    - las vistas de `/marketing/*` desde `/` por cada 1.000 sesiones del home;
    - `cta_click` con `location: "marketing"` por cada 1.000 sesiones del home.

    También se registra el reparto de `select_content` por fila y por dispositivo. Si ninguna de las dos tasas sube, la
    vitrina estática (UC1 b) vuelve como candidata. La fecha de lectura se anota en D54 y en `TODOS.md`.
  - **Cuándo se publica.** Se publica cuando esto esté listo, sin esperar la lectura de GSC del 29-oct (UC2 b, no c).
- **Especificación final D54 (re-revisión de ingeniería, 21-oct-2026).** Es la única fuente para implementar.
  - Reemplaza toda línea anterior del plan o de los bloques aceptados que diga otra cosa, incluidas las citadas abajo.
  - Los gustos d1 a d7 quedan cerrados con la opción recomendada (puerta, revisión 1). Ningún «provisional hasta la
    puerta» de d1 a d7 sigue vigente; solo d8 sigue abierto.
  - **Marcado de cada escena:** `div.pv2-vit__escena[data-escena]` > `Maqueta(clase="pv2-vit__tarjeta")` >
    `div.pv2-vit__lienzo` > composición. La nota `.pv2-nota` va como hermana inmediata de la tarjeta.
  - **Tarjeta y lienzo:**
    - la tarjeta (el `.pv2-maqueta`) lleva `aspect-ratio: 16/10`, `overflow: hidden`, borde de 1 px en `border`,
      radio 20, sombra `10px 10px 0 var(--ew-border)` y padding;
    - el lienzo (`.pv2-vit__lienzo`) lleva alto 100 %, fondo `surface-alt`, radio 12 y `overflow: hidden`.

    Reemplaza «`.pv2-vit .pv2-maqueta`: fondo `surface-alt`, radio 12».
  - **Sin tarjeta dentro de tarjeta:** van sin borde, radio ni sombra:
    - `.pv2-vit__lienzo > .ew-mock`;
    - `.pv2-vit .ew-dev__browser > .ew-mock`;
    - `.pv2-vit .ew-dev__phone > .ew-mock`.

    El chat conserva el fondo de `.ew-wa`. Reemplaza `.pv2-vit .pv2-maqueta > .ew-mock`.
  - **Escena:** `display: grid`, `grid-template-rows: auto auto`, `grid-area: 1 / 1` y `align-self: start`, con todas
    las escenas en la misma celda del escenario. Reemplaza `1fr auto` con `stretch` y «centradas en vertical».
    - La nota va en un renglón (`white-space: nowrap`, `overflow: hidden`, `text-overflow: ellipsis`), así que todas
      las escenas miden lo mismo.
  - **Celulares:** se dimensionan con un alto en `cqi` y `aspect-ratio: 9/16`, nunca con alturas en %.
    - En la escena 1 el celular va absoluto en el lienzo, abajo a la derecha, con `right` y `bottom` en `cqi`.
    - El spike fija su alto para que no tape el título ni el texto del anuncio.
    - Reemplaza «`top` cerca del 18 %, `bottom: 0`, un ancho cerca del 30 %» y «`height: 100%`, ancho por 9:16».
  - **Letra de las maquetas:**
    - un solo `font-size: clamp(<rem mínimo>, <n>cqi, <rem máximo>)` en `.pv2-vit__lienzo`;
    - las medidas internas en `em`, con selectores agrupados.

    Así respeta el tamaño de letra del usuario y pesa menos que pasar cada regla a `cqi`. Reemplaza «las medidas
    internas de las maquetas (tipografía, marcos, separaciones) van en `cqi`».
  - **Columnas desde 1024 px:** `grid-template-columns: minmax(0, 1.15fr) minmax(0, 1fr)`.
    - No se usa `nowrap` en el H3, la línea ni «Se mide».
    - Que cada uno quepa en un renglón se prueba por el alto de su rectángulo.
  - **Pie:**
    - desde 1280 px, en la columna 1 y la fila 2, justo bajo el escenario (`align-self: start`);
    - de 1024 a 1279 px, a todo el ancho, debajo de las dos columnas;
    - por debajo de 1024 px, después de la lista.

    Reemplaza «columna 1, fila 2» desde 1024 px y «el pie con `align-self: end`».
  - **Alto de la lista con «Se mide» (d2 = a).** El spike mide la lista a 1280 px. Si pasa la columna izquierda en más
    de 48 px, se aplica en este orden:
    1. el número en línea con el H3;
    2. el padding vertical de las filas baja de 16 a 12 px.

    Si aun así pasa, D54 anota la diferencia y la prueba de alto se reemplaza por la de renglones: H3, línea y «Se
    mide», un renglón cada uno. «Se mide» no se quita.
  - **Cambio de escena:**
    - por puntero, solo desde 1024 px, con `(hover: hover) and (pointer: fine) and (min-width: 1024px)`, más
      `pointermove` con movimiento, unos 100 ms de permanencia y la cancelación por `relatedTarget`; desaparece toda
      mención a `pointerover`;
    - por teclado, desde 640 px (`focusin` con `:focus-visible`);
    - por debajo de 640 px, la escena 1 queda fija por CSS (d6) y el script no cambia la escena;
    - la barra y el fondo de la fila activa se pintan solo con
      `(hover: hover) and (pointer: fine) and (min-width: 1024px)`, y el anillo de foco en cualquier ancho.
    - Reemplaza «Fila activa solo desde 640 px» y el `(min-width: 640px)` de «Fila activa solo con puntero fino».
  - **Contraste:**
    - la fila activa es `surface-raised`; no hay «fondo cian claro»;
    - todo recorrido de `qa-a11y` usa `checkVisibility({ visibilityProperty: true })`;
    - la etiqueta «CRM · Origen: Google Ads» lleva fondo opaco propio (`surface-raised`) y borde de 1 px, así que el
      contraste medido es el real.
  - **Presupuesto (d7 = a).** Paso 0, antes de los recortes de d7: la letra en `em` sobre un solo `clamp`, con
    selectores agrupados. Después vienen las escenas 3 a 5 sin marco y, al final, d6 sin escenario en celular.
    - Si aun así no entra, el tope no se sube por cuenta propia: los números van en la tarjeta de permiso de publicar y
      decide el dueño.
  - **Spike sobre el build real.**
    - Se hace en un worktree aparte, creado desde `HEAD`, con `npm run build` y el script de presupuestos: lo que cuenta
      es la hoja en línea combinada de molde, piel y portada.
    - El worktree se descarta después. Las pruebas se escriben primero, desde cero, en la copia de trabajo.
  - **Fuentes de Tailwind.** `src/styles/global.css` suma `@source not` para `docs/` y `audit/`.
    - `selectores-hoja`, contra el build base, confirma que la hoja compartida no pierde ningún selector que use
      `dist/`.
  - **Seguridad.**
    - La nota y «Se mide» se renderizan con `{}`, nunca con `set:html`.
    - `astro preview --host` se cierra al terminar la prueba en la red local.
- **Pruebas que se suman (re-revisión de ingeniería).**
  - **`portada.test.mjs`:** la prueba de «sin transición» exige además que el fin esté después del inicio y que el
    bloque tenga más de 200 caracteres, como la de D53.
  - **`qa-lcp`:**
    - **Táctil:** contexto con `hasTouch: true` e `isMobile: true`. Antes de probar se afirma
      `matchMedia('(hover: hover) and (pointer: fine)').matches === false`.
    - **Rueda:** se compara con la escena que dejó el hover inicial, después de que termine el scroll y de esperar más
      de 100 ms.
    - **Escenas ocultas:** ningún descendiente de una escena inactiva calcula `visibility: visible`.
    - **Alto estable:** a 640, 768, 1024, 1263, 1280 y 1440 px, el escenario mide lo mismo con cada escena activa y la
      tarjeta es idéntica. Reemplaza «el escenario mide lo mismo que una escena».
    - **320 px:**
      - `#marketing` no desborda (`scrollWidth <= clientWidth`);
      - el foco se ve en las 6 filas;
      - el orden de Tab es el de la lista.
    - **Letra mínima:** a 1024 px se mide la letra calculada más chica de las maquetas y se anota en D54. Si baja de
      10 px, se sube el mínimo del `clamp`.
  - **`qa-a11y`:** `elementFromPoint` devuelve el enlace de la fila en el número, la línea, «Se mide», la flecha y el
    centro.
  - **WebKit:**
    - si el WebKit de Playwright ya está instalado, la geometría corre una vez en WebKit;
    - si no, se pide permiso para instalarlo, junto con el permiso de publicar;
    - si no se instala, queda la prueba en un iPhone o iPad real, que D54 anota.
- **Medición endurecida (UC2, re-revisión de ingeniería).**
  - **Sin hits de prueba en GA4.** Un ayudante común de QA bloquea con `route.abort()` las peticiones a
    `googletagmanager.com`, `google-analytics.com` y `analytics.google.com`.
    - Va en todos los scripts de Playwright que abren páginas del sitio (`qa-lcp`, `qa-a11y`, `qa-form` y los demás).
    - `gtag()` y `dataLayer` siguen definidos por `Base.astro`, así que las pruebas leen los eventos de la cola.
    - Prueba: el ayudante cuenta las peticiones a esos dominios y todas terminan abortadas.
  - **Forma real de la cola.** Las pruebas leen `dataLayer` como los `arguments` de `gtag()`: `a[0] === 'event'`,
    `a[1]` es el nombre y `a[2]` los parámetros, como en `qa-form.mjs:41`.
  - **Clasificador puro.** La decisión de qué evento manda un clic sale de `track.ts` a una función pura, junto a
    `clicCta`.
    - Una prueba unitaria fija la precedencia: WhatsApp, `tel:`, `mailto:`, `cta_click` y, al final, `select_content`.
    - Un enlace con `data-content-id` que va a `/contacto/` manda solo `cta_click`.
  - **Clics antes de que cargue gtag.js (gusto d8, provisional hasta la puerta).** `select_content` cuenta como mínimo.
    - Se pierden los clics que navegan antes de que cargue gtag.js, que llega después de `load` y de un momento ocioso.
      Hoy pasa lo mismo con `click_whatsapp`.
    - No se demoran los enlaces, y la regla de decisión no depende de `select_content`.
  - **Dimensiones de GA4.** Antes de publicar se comprueba en GA4, en modo lectura, qué dimensiones ya existen:
    - si `location` está registrada como dimensión personalizada;
    - si «ID de contenido» y «Tipo de contenido» (`contentId` y `contentType`, predefinidas de GA4 que se llenan con
      `content_id` y `content_type`) aparecen.

    Lo que falte se registra antes de publicar, por el dueño o con su permiso, porque una dimensión nueva no se aplica a
    datos anteriores. Reemplaza «Registrar `content_id` como dimensión personalizada en GA4».
  - **Regla de decisión reproducible.** Reemplaza el detalle de la regla de decisión de arriba; la intención es la misma.
    - **Filtro:** `hostName` exacto `elementoweb.com` (más `www.elementoweb.com` si aparece), en la línea base y en la
      lectura. El filtro de tráfico interno de GA4 se revisa en modo lectura.
    - **Ventanas de 28 días:**
      - A, del 17-sep al 14-oct, antes de D51;
      - C, los 28 días que siguen a la publicación de D54.

      La ventana B, de D51 y D53 hasta la víspera de D54, se registra solo como contexto. Las ventanas del bloque UC2
      de arriba quedan como contexto.
    - **Definición:**
      - denominador: las sesiones con página de destino `/`, en una exploración de forma libre con alcance de sesión;
      - numerador 1: los `page_view` con `page_location` en `/marketing/` y `page_referrer` igual a la portada;
      - numerador 2: los `cta_click` con `location = marketing`.
    - **Exportaciones:** las CSV se guardan en `audit/`, junto a `ga4-portada-linea-base-2026-10.md`, con la definición
      exacta de la exploración.
    - **Cuándo «sube» una tasa:** la de C supera a la de A en un 20 % o más, con 30 eventos o más en cada ventana.
    - Con menos de 30 eventos en alguna ventana, la lectura es «datos insuficientes»: UC1 b no vuelve y la lectura se
      repite a los 56 días.
    - Si ninguna de las dos tasas sube con datos suficientes, UC1 b vuelve como candidata.
  - **Verificación en vivo después de publicar.** En GA4 Tiempo real, en modo lectura, aparece `select_content` con su
    `content_id` después de un clic real en una fila.
<!-- /autoplan-accepted:eng -->

Correcciones de texto del plan (ingeniería), registradas como reemplazos exactos:

Historial (primera pasada de ingeniería, reemplazos ya aplicados; se conservan con su SHA de origen):

```text
<!-- autoplan-baseline-edits:eng {"sourceSha256":"749e546178988565834a115ba736c4c9597ba9178e06c65621c56662b8e00925","replacements":[{"oldText":"    En la fila 1 va la tarjeta blanca, dibujada con `.pv2-vit__escena::before` (radio 20, borde de 1 px y sombra\n    `10px 10px 0 var(--ew-border)`, sin desenfoque), y encima, con un margen interior, la maqueta sobre `surface-alt`\n    de radio 12. En la fila 2 va la nota «Ejemplo», fuera de la tarjeta, como en la maqueta elegida. Así\n    `Maqueta.astro` y la prueba de su nota hermana (`portada.test.mjs:581`) no cambian.","newText":"    En la fila 1 va la tarjeta blanca, que es el propio `.pv2-maqueta` (con la clase `pv2-vit__tarjeta` por la prop\n    `clase` de `Maqueta.astro`): radio 20, borde de 1 px, sombra `10px 10px 0 var(--ew-border)` sin desenfoque,\n    padding y `aspect-ratio: 16/10`. Adentro, un lienzo `surface-alt` de radio 12 lleva la composición. En la fila 2 va\n    la nota «Ejemplo», fuera de la tarjeta, como en la maqueta elegida. Así `Maqueta.astro` y la prueba de su nota\n    hermana (`portada.test.mjs:581`) no cambian, y la tarjeta es un elemento real que las pruebas pueden medir."},{"oldText":"- **JS:** suma unos 300 B al JS inicial. El tope es 36.400 B y hoy se miden 35.201 B.","newText":"- **JS:** suma unos 600 B al JS inicial (hover con intención y guardas). El tope es 36.400 B y hoy se miden 35.201 B."},{"oldText":"- **Peso:** las 6 maquetas ya están en el DOM de hoy. Lo nuevo son el marco del navegador y los celulares de las escenas 1\n  y 2, en HTML con las clases `ew-dev__*` que el home ya carga (ajustadas solo bajo `.pv2-vit`), sin imágenes.","newText":"- **Peso:** las 6 maquetas ya están en el DOM de hoy. Lo nuevo son los marcos de navegador y de celular de las escenas\n  1 a 5 (según la composición de la fase de diseño), en HTML con las clases `ew-dev__*` que el home ya carga (ajustadas\n  solo bajo `.pv2-vit`), sin imágenes. Si el spike muestra que el CSS o el DOM no alcanzan, rige el orden de recorte de\n  la decisión de gusto d7."},{"oldText":"  - a 390 px el escenario no se ve y los tramos entre «Cotizar» siguen en 2.110 px o menos;","newText":"  - a 390 px, el escenario no se ve (o, con d6, solo la escena 1 fija) y los tramos entre «Cotizar» siguen en 2.110 px\n    o menos;"}]} -->
```

### Puerta final, revisión 1 (21-oct-2026)

Respuesta del dueño, con tarjetas D13-D15, traducida a la gramática de la puerta: `uc1a uc2b d1a d2a d3a d4a d5a d6a d7a p1a`.
`gstack-gate parse`: válida, sin pendientes.

- **UC1 = a.** El dueño mantiene su dirección: vitrina completa, con las 6 escenas que cambian al pasar el puntero. Se
  rechazan la vitrina estática y posponer. El desafío queda registrado: las dos voces lo recomendaban y el dueño decidió
  con su contexto (venta en escritorio).
- **UC2 = b.** El dueño acepta medir antes de publicar:
  - línea base de GA4;
  - reparto por dispositivo;
  - un evento por clic en las 6 filas;
  - el «Cotizar», que ya se mide.

  Esto cambia el alcance, así que, por la regla B2, se repite la fase de ingeniería y después se vuelve a presentar la
  puerta.
- **d1-d7 = recomendadas.**
- **p1 = a.**

### Fase 3 bis, ingeniería: re-revisión por UC2 (21-oct-2026)

Por la regla B2, la fase de ingeniería se repite porque UC2 = b suma alcance nuevo: la línea base de GA4, el evento
`select_content`, su prueba y la regla de decisión. La entrada revisada es el snapshot `autoplan-eng-0ZDems`
(sha256 `d45e2c94…`), que ya incluye UC1 = a y el bloque de medición. Las correcciones aceptadas están al final del
bloque `autoplan-accepted:eng`, bajo «Especificación final D54», «Pruebas que se suman» y «Medición endurecida».

#### Step 0: Scope Challenge (re-revisión)

Se leyó el código que el agregado toca:

- `src/scripts/track.ts:9-12` (`send` llama a `gtag('event', …)`) y `:24-36` (las ramas del clic);
- `src/layouts/Base.astro:64`: `gtag()` y `dataLayer` existen de inmediato, y gtag.js real se inyecta después de
  `load` con `requestIdleCallback` (3 s de tope);
- `scripts/qa-form.mjs:29-41`: lee la cola como `arguments` (`a[0] === 'event'`) y no bloquea los dominios de Google;
- `scripts/qa-form.mjs:271`: hace clic en el «Cotizar» de `#marketing`;
- `.github/workflows/deploy.yml:71`: el CI corre `npm run verify` en cada push;
- `docs/event-dictionary.md`: tabla de eventos y pasos de configuración de GA4.

Premisas del agregado:

| # | Premisa | ¿Se sostiene? | Evidencia |
|---|---|---|---|
| R1 | `dataLayer` guarda objetos `{ event }` | **Falsa** | `Base.astro:64` empuja `arguments`; `qa-form.mjs:41` |
| R2 | Las pruebas no tocan GA4 | **Falsa** | gtag.js real carga en `astro preview`; ningún script de QA bloquea Google |
| R3 | `content_id` necesita una dimensión personalizada | **Falsa** | GA4 trae `contentId` y `contentType` predefinidas |
| R4 | El clic en una fila siempre llega a GA4 | **Dudosa** | navega antes de que cargue gtag.js si el clic es muy temprano |
| R5 | El «Cotizar» de Marketing ya se mide | Verdadera | `href="#formulario"`, `clicCta` y `cta_click` sin navegar |
| R6 | La regla de dos ventanas es comparable | **Falsa** | ventanas de 15 y unos 8 días, con D51 y D53 mezclados |

Alcance aceptado como está (UC1 = a y UC2 = b son del dueño). Complejidad: suma 1 función pura, 1 ayudante de QA y unas
11 pruebas, sin archivos nuevos de producción fuera de `src/lib`.

#### Voces duales (ingeniería, re-revisión)

**Claude SUBAGENT (eng, revisión independiente):** `INPUT` coincide con el snapshot (`d45e2c94…`). Hallazgos:

- 3 altos:
  - A1, el plan se contradice en 7 puntos y la precedencia no se puede aplicar;
  - A2, el presupuesto de CSS deja unos 960 B en gzip y el `cqi` es lo más caro;
  - A3, las pruebas contaminan GA4.
- 8 medios: M1 a M8.
- 10 bajos.

Verificó que `marketing.ts` carga en Node, que cada página de marketing tiene un solo `medimos`, que el DOM queda cerca
de 1.310 elementos y que las citas al código coinciden.

**Codex SAYS (eng, desafío de arquitectura):** `OUTSIDE_STATUS: completed provider=codex` (gpt-5.6-terra). Hallazgos:

- 4 altos:
  - `select_content` se pierde antes de que cargue gtag.js;
  - la dimensión por fila no está garantizada;
  - la regla de decisión no es reproducible;
  - el comportamiento sigue contradictorio.
- 4 medios:
  - la nota que envuelve cambia el alto;
  - la prueba lee una forma de cola equivocada;
  - falta probar 320 px;
  - el tope de CSS no es una puerta dura.

Recomendación: «Do not approve implementation yet because the measurement cannot reliably collect or evaluate the event
data needed for its 28-day decision».

```
ENG DUAL VOICES — CONSENSUS TABLE (re-revisión):
  Dimension                           Claude                 Codex                  Consensus
  1. Architecture sound?               no (7 contradicciones, no (contradicciones,  CONFIRMED: falta una spec final
                                       selector roto, % alto)  geometría)
  2. Test coverage sufficient?         no (táctil, rueda,     no (forma de la cola,  CONFIRMED: brechas
                                       ocultas, GA4)           320 px, notas)
  3. Performance risks addressed?      no (~960 B, cqi caro)  no (tope sin puerta)   CONFIRMED: spike real + letra en em
  4. Security threats covered?         sí (sin superficie)    sin hallazgos          CONFIRMED: sin superficie nueva
  5. Error paths handled?              parcial (hits de QA)   no (clics perdidos,    CONFIRMED: endurecer la medición
                                                               dimensión)
  6. Deployment risk manageable?       sí, con arreglos       no hasta medir bien    DISAGREE → resuelto con los arreglos
CONFIRMED = native + outside agree.
```

La única diferencia de fondo es cómo tratar los clics que navegan antes de gtag.js:

- Codex propone demorar la navegación con `event_callback`;
- el plan los cuenta como mínimo y no demora los enlaces.

Va a la puerta como gusto d8. Nadie propone cambiar la dirección del dueño, así que no hay desafío nuevo.

#### Section 1: Architecture (re-revisión)

```
index.astro #marketing
 ├─ ul.pv2-vit__lista[data-cta-loc=marketing]
 │    └─ li.pv2-vit__fila > h3 > a[data-content-id]  ──click──▶ track.ts ──▶ clasificarClic() (pura, src/lib)
 │                                                                  │            ├─ whatsapp / tel / mailto
 │                                                                  │            ├─ cta_click (clicCta)
 │                                                                  │            └─ select_content
 │                                                                  ▼
 │                                                        gtag() → dataLayer (Base.astro:64)
 │                                                                  │  después de load + idle
 │                                                                  ▼
 │                                                        gtag.js → GA4 (hostName elementoweb.com)
 ├─ script vitrina (pointermove ≥1024 / focusin ≥640) ──▶ clases --activa en fila y escena
 └─ .pv2-vit__escenario (container inline-size)
      └─ 6 × .pv2-vit__escena > Maqueta.pv2-vit__tarjeta > .pv2-vit__lienzo (font-size clamp/cqi) > ew-*

QA (Playwright) ──▶ ayudante bloquear-ga (route.abort) ──▶ lee dataLayer; no sale a GA4
GA4 (lectura) ──▶ audit/ga4-portada-linea-base-2026-10.md + CSV ──▶ regla D54 a 28 días
```

Hallazgos y decisiones:

- **Spec final.** La precedencia por fases no se podía aplicar, porque los bloques reflejados en la implementación no
  llevan rótulo de fase. Se escribe una sola especificación en el bloque de ingeniería que reemplaza por cita cada
  línea en conflicto. Principio P5.
- **Clasificador puro.** `track.ts` hoy decide en línea. Sacar la clasificación a una función pura permite probar la
  precedencia sin navegador (P1, P5). Es el mismo patrón que `clicCta`.
- **Acople con GA4.** El acople es solo por nombres de evento y parámetros. Las dimensiones predefinidas evitan una
  configuración nueva para `content_id`. `location` sí depende de una dimensión personalizada, que se verifica antes
  de publicar.

#### Section 2: Code Quality (re-revisión)

- **Selector roto (M1).** Con el lienzo de por medio, `.pv2-maqueta > .ew-mock` ya no alcanza a ninguna maqueta. Se
  cambia por `.pv2-vit__lienzo > .ew-mock`.
- **Alturas en % (M5).** Una cadena de 4 contenedores define el alto según el navegador. Se cambia por `cqi` con
  `aspect-ratio`.
- **Columnas sin mínimo cero (M6).** Se cambian a `minmax(0, …)`, sin `nowrap`.
- **Duplicación.** Las ventanas de la regla de decisión aparecían en dos sitios. El bloque nuevo declara que reemplaza
  el detalle anterior.

#### Section 3: Test review (re-revisión)

Diagrama del agregado. Cada camino nuevo tiene su prueba:

| Camino nuevo | Tipo | Prueba | Estado |
|---|---|---|---|
| clic en fila → `select_content` con `content_id` | navegador | `qa-lcp`, fila 3 con `route.fulfill(204)`, cola leída como `arguments` | planificada |
| hover y Tab → ningún `select_content` | navegador | `qa-lcp` | planificada |
| precedencia de ramas del clic | unitaria | clasificador puro | planificada (nueva) |
| enlace con `data-content-id` a `/contacto/` | unitaria | solo `cta_click` | planificada (nueva) |
| QA no llega a GA4 | navegador | ayudante `bloquear-ga`, todas abortadas | planificada (nueva) |
| «Cotizar» de Marketing sigue igual | navegador | `qa-lcp` y `qa-form.mjs:271` | existe |
| táctil sin hover real | navegador | `matchMedia` afirmado antes, `isMobile` | planificada (nueva) |
| rueda contra la escena del hover | navegador | `qa-lcp` | planificada (corregida) |
| escenas ocultas sin `visibility: visible` | navegador | `qa-lcp` | planificada (nueva) |
| alto estable con notas | navegador | `qa-lcp` a 640, 768, 1024, 1263, 1280 y 1440 | planificada (ampliada) |
| 320 px sin desborde | navegador | `qa-lcp` | planificada (nueva) |
| clic en número, línea, «Se mide» y flecha | navegador | `qa-a11y` con `elementFromPoint` | planificada (ampliada) |
| «sin transición» no pasa vacía | unitaria | `portada.test.mjs` | planificada (corregida) |
| letra mínima a 1024 | navegador | `qa-lcp`, se anota | planificada (nueva) |
| GA4 recibe el hit en producción | manual | Tiempo real, en modo lectura | planificada |
| regla de decisión | manual | exploración con CSV en `audit/` | planificada |

No es un cambio de LLM ni de prompts: no hay suites de evaluación. El plan de pruebas en disco se reescribió con el
agregado.

#### Section 4: Performance (re-revisión)

- **CSS.** Quitar el bento libera solo unos 250 B en gzip, medido por Claude sobre la hoja en línea combinada. Quedan
  unos 960 B para todo el bloque nuevo.
  - Decisión: paso 0 de d7 (la letra en `em` sobre un solo `clamp`, con selectores agrupados) y spike en un worktree
    con el build real.
  - El tope no se sube por cuenta propia: decide el dueño con los números en la tarjeta de publicar.
- **JS.** El clasificador y la rama de `select_content` suman unas decenas de bytes a `track.ts`, que llega a todas las
  plantillas. Sobra margen: 1.199 B.
- **Red.** Ninguna petición nueva. gtag.js sigue diferido, que es justamente lo que causa R4; no se cambia, por el
  costo medido en LCP (`Base.astro:58-61`).

#### NOT in scope (re-revisión)

- Demorar la navegación con `event_callback` para asegurar `select_content` (Codex): rompe el clic inmediato en todos
  los enlaces y no hace falta para la regla de decisión. Va como d8.
- Sumar `comparar-main` y `selectores-hoja` al CI: va a `TODOS.md`, P3.
- WebKit en el CI: sigue fuera; se corre una vez si está instalado o se prueba en un dispositivo real.

#### What already exists (re-revisión)

- `gtag()` y la cola, en `Base.astro:64`;
- el lector de la cola de `qa-form.mjs:41`;
- `clicCta` en `src/lib/clic-cta.ts`, el patrón de la función pura;
- `route.fulfill` en `qa-lcp`, para leer el estado tras un clic;
- las dimensiones predefinidas `contentId` y `contentType` de GA4;
- los pasos de configuración de `docs/event-dictionary.md`.

#### Failure modes (agregado)

| Código | Falla realista | ¿Prueba? | ¿Manejo? | ¿Lo ve el usuario? |
|---|---|---|---|---|
| GA-QA | cada `verify` del CI suma `cta_click` y leads de prueba a GA4 | ayudante con todas abortadas | bloqueo + filtro `hostName` | no; el dato sale sesgado |
| cola | la prueba busca `{ event }` y pasa vacía | lectura como `arguments` | patrón de `qa-form` | no |
| clic temprano | `select_content` se pierde antes de gtag.js | no (se documenta) | cuenta como mínimo; la regla no depende de él | no |
| dimensión | `location` sin registrar y sin datos hacia atrás | verificación antes de publicar | se registra con permiso | no |
| ruido | pocos datos y se reactiva UC1 b por azar | regla con mínimo de 30 | «datos insuficientes», 56 días | no |
| alto | una nota de dos renglones cambia el escenario | 6 anchos | nota en un renglón | no (CLS 0) |

**Brecha crítica:** ninguna. El clic temprano no tiene prueba, pero la regla de decisión no depende de él y se
documenta como mínimo.

#### Completion summary (ingeniería, re-revisión)

- Step 0: Scope Challenge, alcance aceptado como está; 6 premisas, 4 falsas (R1, R2, R3, R6) y 1 dudosa (R4).
- Reality rows: 7 (PLAN_REALITY).
- Architecture Review: 3 issues found.
- Code Quality Review: 4 issues found.
- Test Review: diagrama hecho, con 16 caminos; 11 pruebas nuevas o corregidas.
- Performance Review: 2 issues found.
- NOT in scope: written.
- What already exists: written.
- TODOS.md updates: 1 nueva (P3, `comparar-main` y `selectores-hoja` en el CI).
- Failure modes: 0 critical gaps flagged.
- Unresolved decisions: 1 nueva para la puerta (d8).
- Outside voice: codex completed.
- Parallelization: 1 carril, secuencial.
- Lake Score: N/A.

#### Implementation Tasks (ingeniería, re-revisión)

Se suman a T1-T4 de la primera pasada:

- [ ] **T0 (P1, humano: ~30 min / CC: ~15 min)**: la línea base de GA4, en modo lectura, desde el Chrome del dueño.
  - Incluye las dimensiones existentes, el filtro de tráfico interno, las ventanas A y B y las CSV en `audit/`.
  - Surge de: Medición endurecida.
  - Archivos: `audit/ga4-portada-linea-base-2026-10.md`.
  - Verificar: el archivo tiene la definición exacta y los conteos absolutos.
- [ ] **T2b (P1, humano: ~2 h / CC: ~20 min)**: el ayudante `bloquear-ga` en los scripts de QA y el clasificador puro,
  con sus pruebas primero.
  - Surge de: A3, R1 y Code Quality.
  - Archivos: `scripts/`, `src/lib/`, `src/scripts/track.ts`.
  - Verificar: las pruebas fallan antes y pasan después, sin peticiones a GA4.
- [ ] **T4b (P1, humano: ~15 min / CC: ~5 min)**: después de publicar, comprobar en Tiempo real `select_content` con su
  `content_id` y anotar en D54 y en `TODOS.md` la fecha de la lectura a 28 días.
  - Surge de: la regla de decisión.
  - Archivos: `docs/specs/rediseno-elementoweb/DECISIONES.md`, `TODOS.md`.
  - Verificar: hay un evento visible en Tiempo real.

### Puerta final, revisión 2 (21-oct-2026)

Respuesta del dueño, con las tarjetas D16 y D17, en la gramática de la puerta: `d8a p1a`. `gstack-gate parse` la da
por válida y sin pendientes.

- **d8 = a.** `select_content` cuenta como mínimo y no se demoran los enlaces. Se rechaza demorar la navegación con
  `event_callback` (Codex).
- **p1 = a.** El plan queda aprobado como está, con la especificación final D54 del bloque de ingeniería como fuente
  única. Lo próximo es implementar con pruebas primero. Publicar sigue pidiendo el permiso del dueño (D47).

<!-- AUTONOMOUS DECISION LOG -->
## Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 1 | CEO | Modo SELECTIVE EXPANSION | Mechanical | regla de autoplan | El override de la fase CEO lo fija | otros modos |
| 2 | CEO | Filas enlace con vista previa (C1) | Mechanical | P5 | Un control por fila; escenas decorativas | pestañas ARIA |
| 3 | CEO | comparar-main a mano (C2) | Mechanical | P1 | No está en verify (`verify.mjs:60`) | darlo por cubierto |
| 4 | CEO | Reusar marcos `ew-dev__*` (C3) | Mechanical | P4 | Ya están en el CSS del home | CSS de marco nuevo |
| 5 | CEO | Solo puntero de mouse o lápiz (C4) | Mechanical | P1 | Evita el doble toque de iPad | escuchar todo `pointerenter` |
| 6 | CEO | E6 «Origen: Google Ads» | Taste | P2 | En el radio, S; refuerza el H2 | dejar el chat sin origen |
| 7 | CEO | E7 «Se mide:» por escena | Taste | P2, P4 | Reusa `medimos` publicados; S | sin línea de medición |
| 8 | CEO | Omitir E1-E5 | Mechanical | P3, P4 | Diferidas por decisión vinculante o fuera de DESIGN.md | incluirlas |
| 9 | CEO | Medir contraste de las 6 escenas activándolas por turno | Mechanical | P1 | `checkVisibility` deja fuera las ocultas (`qa-a11y.mjs:76`) | medir solo la activa |
| 10 | CEO | Regla de 70 caracteres en `modulosMarketing()` | Mechanical | P1 | El único control vivía en `ModuloBento.astro:18`, que se borra | perder la regla |
| 11 | CEO | Lista de reglas CSS que se quitan y que se conservan, y ancla nueva de la prueba de D53 | Mechanical | P1 | `.pv2-nota` y la agenda de Desarrollo viven en el bloque bento | borrar el bloque entero |
| 12 | CEO | Tope de DOM de 1.400 declarado | Mechanical | P1 | `portada.test.mjs:545`, hoy 1.246 | subir el tope |
| 13 | CEO | `pointerover` delegado con filtro de `pointerType` | Mechanical | P5 | `pointerenter` no burbujea | `pointerenter` por fila |
| 14 | CEO | Objetivo de 44 px medido en la fila | Mechanical | P1 | El `::after` no cuenta en el rectángulo del enlace | medir el enlace |
| 15 | CEO | Prueba de toque en Chromium más prueba manual en iPhone o iPad | Mechanical | P1 | Chromium no tiene la heurística de WebKit; descargar WebKit pide permiso | dar la prueba por suficiente |
| 16 | CEO | Sin fundido al cambiar de escena (d3) | Taste | P5 | Respeta «la portada no se anima» sin declarar otra excepción | fundido de 180 ms |
| 17 | CEO | Clases `pv2-vit` y `pv2-vit__*` con prueba `[class*="pv2-vit"]` | Mechanical | P5 | `pv2-vit-` no coincidía con `__` y la prueba pasaba siempre | prefijo con guion |
| 18 | CEO | Pie bajo el escenario en la columna izquierda | Mechanical | P5 | Así está en la maqueta elegida | pie a todo el ancho |
| 19 | CEO | Ampliar la TODO de eventos a las filas de Marketing | Mechanical | P2 | La TODO citada no las cubría | dejarlas sin seguimiento |
| 20 | CEO | Reglas de maqueta bajo `.pv2-vit` para las 6 escenas | Mechanical | P1 | Sin ellas, correo, WhatsApp y flujo serían tarjeta dentro de tarjeta | ajustar solo las escenas 1 y 2 |
| 21 | CEO | `focusin` solo con `:focus-visible` | Mechanical | P1 | Chromium enfoca el enlace al tocarlo y la prueba de toque fallaría | `focusin` siempre |
| 22 | CEO | Celular de la escena 1 acotado con `top` y `bottom` | Mechanical | P1 | Con 9:19,5 al 34 % sobresalía del stage; se prueba su rectángulo | proporción fija |
| 23 | CEO | Escena 2 con dos celulares en flujo normal | Mechanical | P5 | Sin navegador, sin `position: absolute` | celular absoluto |
| 24 | CEO | Clases `--activa` en fila y escena, una sola regla CSS | Mechanical | P5 | Evita 6 selectores atados a slugs | `data-activa` en el contenedor |
| 25 | CEO | `modulosMarketing(lista, datos, paginas)` y exactamente 3 indicadores | Mechanical | P1 | Así las pruebas inyectan datos | constante privada sin probar |
| 26 | CEO | «Se mide» en cada fila (d2) | Taste | P1 | En táctil y celular el escenario no cambia; en la fila se ve siempre | bajo cada escena |
| 27 | CEO | Excepciones 1 y 2 reescritas, ficha de garantías declarada con borde, sombra y check `accent-on-light` | Mechanical | P1 | Sin bento en `/`; DESIGN.md exige sombra sin desenfoque | dejarlas sin declarar |
| 28 | CEO | Anillo de foco con `:has(a:focus-visible)` y leído en la fila | Mechanical | P5 | `:focus-within` responde al clic | `:focus-within` |
| 29 | CEO | Alto del escenario también a 768 px; puerta de 90 de D14; `selectores-hoja` a mano | Mechanical | P1 | El escenario se ve desde 640 px; D14 tiene dos umbrales | solo 1024 px o más |
| 30 | CEO | Tarjeta de escena con `::before` en una rejilla de dos filas | Mechanical | P5 | `Maqueta.astro` y la prueba de su nota hermana no cambian | envoltura nueva en `Maqueta` |
| 31 | CEO | `.pv2-vit .pv2-maqueta > .ew-mock` y pantallas de celular claras | Mechanical | P1 | Con el descendiente, los chats tomaban el `#0b1220` del marco | regla de descendiente |
| 32 | CEO | Borde transparente de 3 px en todas las filas | Mechanical | P1 | El hover no está excluido del CLS | barra que mueve la fila |
| 33 | CEO | `route.fulfill({ status: 204 })` en la prueba de toque | Mechanical | P1 | `abort()` muestra la página de error y no se puede leer el estado | `abort()` |
| 34 | CEO | Correcciones menores restantes de la revisión 3 | Mechanical | P1/P5 | Ver C12 | dejarlas abiertas |
| 35 | CEO | PSI móvil como medida (línea base antes y compuerta después) | Mechanical | P1 | D14 manda PSI; el plan decía Lighthouse | Lighthouse local |
| 36 | CEO | CSS del home sin subir el tope | Mechanical | P1 | D53 dejó la mediana justo en 90 | subir `presupuestos.json` |
| 37 | CEO | Error de validación con slug, indicador y archivo; aviso en D54 | Mechanical | P5 | Editar una página de marketing puede romper el build del home | error genérico |
| 38 | CEO | Pruebas de geometría esperan `document.fonts.ready` | Mechanical | P1 | Evita mediciones inestables | medir al cargar |
| 39 | CEO | Diagnóstico del TBT de unos 300 ms a `TODOS.md` | Mechanical | P3 | Fuera del radio del plan | hacerlo aquí |
| 40 | CEO | Ficha de garantías como en la maqueta (d4) | Taste | P5 | Es lo que eligió el dueño; la alternativa evita una excepción | check en la fila actual |
| 41 | CEO | UC1 (alcance) y UC2 (medición) a la puerta | User Challenge | — | Las dos voces piden cambiar la dirección del dueño | auto-decidir |
| 42 | Design | Columnas 1,15/1 y alineación de la rejilla | Mechanical | P5 | Reparto de la maqueta; el pie cierra la lista | 1,5/1 |
| 43 | Design | Tarjeta de escena de proporción fija 16/10 | Mechanical | P5 | Evita que la tarjeta y la nota salten | alto de la más alta |
| 44 | Design | Composición de las escenas 2 a 6 | Mechanical | P1 | Sin diseño, se veían pobres al lado de la 1 y la 2 | maquetas del bento tal cual |
| 45 | Design | Hover con movimiento real y 100 ms | Mechanical | P1 | El scroll bajo un puntero quieto dispara `pointerover` | cambio inmediato |
| 46 | Design | Fila activa solo desde 640 px | Mechanical | P1 | En celular no hay escenario y el resaltado engaña | resaltado en todo ancho |
| 47 | Design | Estados de fila y activa en `surface-raised` | Mechanical | P5 | Tokens de DESIGN.md; sin valor fuera de escala | cian claro |
| 48 | Design | `<ul>` y números en `text-muted` | Mechanical | P5 | El orden no es secuencia; el H3 manda | `<ol>` y números fuertes |
| 49 | Design | `@supports` para `:has()` | Mechanical | P1 | WCAG 2.4.7 sin `:has()` | sin respaldo |
| 50 | Design | Copy corto de las filas (d5) | Taste | P5 | La densidad de la maqueta no cabe con las líneas de hoy | líneas de hoy |
| 51 | Design | Origen como etiqueta del CRM (d1 refinada) | Taste | P1 | WhatsApp no muestra el origen | etiqueta dentro del chat |
| 52 | Design | Garantías en fila con check (d4, recomendación cambiada) | Taste | P5 | Las dos voces: la ficha es decorativa | ficha con sombra |
| 53 | Design | Escena 1 fija en celular (d6) | Taste | P1 | La mayoría móvil ve la promesa ilustrada | sin escenario |
| 54 | Design | Capturas de las 6 escenas y 4 anchos antes del permiso | Mechanical | P1 | El dueño aprueba el conjunto, no una escena | solo 1440 y 390 |
| 55 | Eng | Estructura original (`plan-eng-review-structure`) | Mechanical | P5 | Ninguna disposición más chica conserva las pruebas y los documentos | componente aparte |
| 56 | Eng | Spike antes de las pruebas | Mechanical | P1 | El margen de CSS y el encaje no están demostrados | encontrarlo en CI |
| 57 | Eng | Tarjeta como elemento real (`.pv2-maqueta`) | Mechanical | P5 | `::before` no se puede medir | `::before` |
| 58 | Eng | Escenas en `grid-area 1/1` y `cqi` | Mechanical | P1 | Sin huecos de las ocultas; escala de 768 a 1440 | puntos de quiebre por escena |
| 59 | Eng | Anular borde, sombra, ancho y padding de `ew-dev` y `.ew-mock` | Mechanical | P1 | Evita tarjeta dentro de tarjeta | hijo directo solo |
| 60 | Eng | `pointermove` con fila candidata y `relatedTarget` | Mechanical | P5 | `pointerover` no frena la rueda ni los hijos | `pointerover` |
| 61 | Eng | Fila activa solo con puntero fino | Mechanical | P1 | En táctil parece una pestaña que no responde | solo desde 640 px |
| 62 | Eng | Validación endurecida y mensajes con los 2 archivos | Mechanical | P1 | El build del home depende de `marketing.ts` | error genérico |
| 63 | Eng | Geometría desde 1280 y pie a todo el ancho de 1024 a 1279 | Mechanical | P5 | A 1024 no caben 40 caracteres en un renglón | regla desde 1024 |
| 64 | Eng | Tolerancias de plataforma e iOS antes de publicar | Mechanical | P1 | D53 falló solo en CI; WebKit no se ejercita | solo Chromium |
| 65 | Eng | Orden de recorte por presupuesto (d7) | Taste | P3 | El margen es de 710 B y la base ya se lleva la mayor parte | subir el tope primero |
| 66 | Eng | Defer de Codex | User Challenge (ya existe) | — | Refuerza UC1 y UC2 | auto-decidir |
| 67 | Eng | Especificación final D54 en el bloque de ingeniería | Mechanical | P5 | Las dos voces: 7 contradicciones sin precedencia aplicable | dejar la precedencia por fases |
| 68 | Eng | Selectores `.pv2-vit__lienzo > .ew-mock` | Mechanical | P1 | El lienzo rompe el selector de hijo directo | `.pv2-maqueta > .ew-mock` |
| 69 | Eng | Celulares en `cqi` con `aspect-ratio` | Mechanical | P5 | Las alturas en % dependen del navegador | `height: 100%` |
| 70 | Eng | Letra de las maquetas en `em` sobre un `clamp` (paso 0 de d7) | Mechanical | P3 | Pasar cada regla a `cqi` no cabe en ~960 B | `cqi` regla por regla |
| 71 | Eng | Spike en un worktree con el build real | Mechanical | P1 | Lo que cuenta es la hoja en línea combinada | spike en el scratchpad |
| 72 | Eng | No subir el tope de CSS sin el dueño | Mechanical | P6 | d7 = a dice recortar primero; subir es decisión suya | subir con motivo por cuenta propia |
| 73 | Eng | Pie bajo el escenario desde 1280, a todo el ancho de 1024 a 1279 | Mechanical | P5 | Resuelve la contradicción (c) | `align-self: end` |
| 74 | Eng | Cambio por puntero desde 1024 y escena fija bajo 640 | Mechanical | P1 | Entre 640 y 1023 el escenario puede quedar fuera de pantalla | desde 640 |
| 75 | Eng | Bloquear GA4 en todos los scripts de QA y filtrar por `hostName` | Mechanical | P1 | El CI suma hits de prueba a los numeradores de D54 | solo filtrar |
| 76 | Eng | Leer la cola como `arguments` | Mechanical | P1 | `Base.astro:64` empuja `arguments` | buscar `{ event }` |
| 77 | Eng | Clasificador puro del clic con prueba de precedencia | Mechanical | P5 | Prueba sin navegador, como `clicCta` | solo prueba en navegador |
| 78 | Eng | Dimensiones predefinidas para `content_id`; verificar `location` | Mechanical | P1 | `contentId` y `contentType` existen; `location` es personalizada | registrar `content_id` |
| 79 | Eng | Regla de decisión con ventanas de 28 días, mínimo de 30 y «datos insuficientes» | Mechanical | P1 | Las dos voces: no reproducible y con ruido | dos ventanas desiguales |
| 80 | Eng | Contar `select_content` como mínimo, sin demorar los enlaces (d8) | Taste | P3, P5 | La regla no depende del evento; demorar afecta a todos los enlaces | `event_callback` con demora (Codex) |
| 81 | Eng | Pruebas de táctil con `matchMedia` afirmado, 320 px, escenas ocultas y alto en 6 anchos | Mechanical | P1 | Las pruebas podían pasar sin probar nada | las pruebas de la primera pasada |
| 82 | Eng | `@source not` para `docs/` y `audit/` | Mechanical | P1 | El plan sin rastrear mete utilidades en la hoja compartida | solo el aviso de `selectores-hoja` |
| 83 | Gate | d8 = a, p1 = a (puerta rev 2) | User | — | Respuesta del dueño en D16 y D17 | d8b |

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` (vía /autoplan) | Scope & strategy | 1 | CLEAR (PLAN via /autoplan) | 9 hallazgos nativos; 6/6 confirmados; UC1 y UC2 a la puerta |
| Design Review | `/plan-design-review` (vía /autoplan) | UI/UX gaps | 1 | CLEAR (PLAN via /autoplan) | score: 6/10 → 8/10; litmus 5 confirmados, 1 desacuerdo, 0 rechazos duros |
| DX Review | — | Developer experience gaps | 0 | SKIPPED | sin alcance para desarrolladores |
| Eng Review | `/plan-eng-review` (vía /autoplan) | Architecture & tests (required) | 2 | CLEAR (PLAN via /autoplan) | 39 hallazgos nativos (18 + 21), 0 brechas críticas; especificación final D54 |
| Outside Review | Codex `gpt-5.6-terra` en CEO, diseño e ingeniería (dos pasadas) | Independent 2nd opinion | 4 | completed | 32 hallazgos (6 + 9 + 9 + 8); resueltos en el plan o en la puerta |

- **OUTSIDE COVERAGE:** Codex completó en todas las fases:
  - CEO, en el segundo intento: el primero salió sin el marcador en inglés y no cuenta;
  - diseño;
  - ingeniería, primera pasada;
  - ingeniería, re-revisión por UC2.
- **CROSS-MODEL:** Claude (subagente) y Codex coincidieron en:
  - 6/6 dimensiones de CEO;
  - 5/7 filas del litmus de diseño;
  - 5/6 dimensiones en cada pasada de ingeniería.

  Los cambios de dirección fueron a la puerta (UC1, UC2) y el dueño los decidió: mantiene UC1 (vitrina completa) y acepta
  UC2 (medir antes de publicar). El desacuerdo de la re-revisión quedó como gusto d8 = a.
- **VERDICT:** CEO + DESIGN + ENG CLEARED. Plan aprobado por el dueño el 21-oct-2026 (puerta, revisión 2: `d8a p1a`).
  La implementación sigue con pruebas primero, y publicar pide el permiso del dueño (D47).

NO UNRESOLVED DECISIONS
