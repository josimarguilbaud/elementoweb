# Plan: paneles apilados en Servicios de la portada (D53)

Estado: aprobado por el dueño el 20-oct-2026 (tarjeta D9 = B: «igual al prototipo, con GSAP»). Antes había aprobado el
prototipo con «me gusta» y pedido imágenes que representen cada servicio; las 6 imágenes se generaron y registraron en
`aa173af`. El código del efecto se quedó en el prototipo local y no llegó al home: este plan lo lleva.

## Qué cambia

- La sección 5 de la portada (`#servicios`, `src/pages/index.astro`) deja el bento de 6 módulos y pasa a 6 paneles
  apilados, como el prototipo (`scratchpad/prototipo-servicios/index.html`):
  - Cada panel tiene número («01 / 06»), H3 grande, precio (si está confirmado), texto, lista de lo que incluye, su
    «Cotizar» con la opción del formulario, el enlace a su página y la imagen aprobada. Diseño web lleva la web real de
    TramitaPa compuesta en la laptop y el celular, con la nota «tramitapa.com · proyecto publicado».
  - Con JavaScript y sin «reducir movimiento», al llegar a la sección la pila se fija y cada panel entra desde abajo y tapa
    al anterior, que se encoge a 0,88, sube 28 px y se oscurece con un velo. El H3 entra desde 0,72 y las palabras del
    texto se revelan. Hacen falta 1,4 pantallas de desplazamiento por panel.
  - Sin JavaScript, con «reducir movimiento» o con menos de 560 px de alto, los paneles van como una lista normal.
- Los datos salen de `filasMapa` (`src/lib/portada.ts`), que suma `texto` e `incluye` por servicio, y el ItemList del
  schema no cambia.

## Decisiones de ingeniería

- **GSAP diferido.** El núcleo de GSAP ya venía en el JS inicial de todas las páginas, por el menú móvil (`Navbar.astro`):
  el peso nuevo es ScrollTrigger y el módulo del efecto, unos 18 KB gzip, y no los 46 KB que se estimaron en la tarjeta D9.
  Se cargan con `import()` cuando el navegador queda libre después de la carga, o antes si la sección se acerca a menos de 2
  pantallas. Así no entran en el JS inicial del home (el presupuesto de `scripts/presupuestos.json` no cuenta las islas con
  `import()`), no compiten con el LCP y el efecto queda igual que en el prototipo. El JS inicial solo suma el cargador:
  1.185 B medidos.
- **Contraste.** El prototipo revelaba las palabras desde `#c3ccd6` (1,6:1 sobre blanco, falla WCAG AA y `qa-a11y`). Se
  revelan desde `--ew-muted` (`#4f5f75`, 6,5:1) hasta `--ew-text`. El efecto es más sutil y la página sigue en AA.
- **Teclado.** Con la pila fija, al enfocar un enlace de un panel que todavía no entró, la página se desplaza hasta ese
  panel, para que el foco nunca quede fuera de la vista. Si el salto cruza el inicio de la pila y el navegador suelta el
  foco (queda en `<body>`), se le devuelve al último enlace enfocado, nunca a uno anterior: el primer intento lo devolvía
  siempre y, con Tabs rápidos, el foco retrocedía en bucle. Lo encontró `qa-a11y` en CI (run 39503408790) y ahora su
  prueba del Tab corre con la CPU frenada 4 veces.
- **«Cotizar» por panel.** Cada panel lleva su «Cotizar» con `data-cta-loc="servicios"` y la clave de su servicio, que deja
  elegida su opción. Además mantiene el tramo de 2.110 px entre «Cotizar» que `qa-lcp` mide a 390 px.
- **CSS.** Las reglas del prototipo pasan a `src/styles/portada.css` con los tokens `--ew-`. Se quitan del CSS las reglas
  del bento de servicios que dejan de usarse. Si el CSS del home pasa su máximo (27.600 B), se sube en
  `presupuestos.json` con el motivo.

## Reglas que cambian (se declaran)

- `DESIGN.md`: «La portada nunca se anima» pasa a tener una excepción, los paneles apilados de Servicios (D53).
- `scripts/portada.test.mjs`: la prueba «la portada no se anima» sigue exigiendo que no se cargue `effects.ts` ni las
  clases de movimiento viejas, y suma que GSAP no está en el JS inicial. La prueba 5 pasa del bento a los paneles.

## Pruebas (primero)

- Datos: `filasMapa` trae `texto` e `incluye` (de 5 a 6 ítems) por servicio.
- Sobre `dist/`:
  - 6 paneles en el orden de `filasMapa`, cada uno con su H3, su precio confirmado, su enlace, su «Cotizar» (clave y
    opción) y su imagen con medidas y `loading="lazy"`;
  - la nota de TramitaPa;
  - ningún `<script src>` inicial lleva GSAP.
- Navegador (`qa-lcp` en `/`):
  - a 1440×900, con JS, el efecto se activa (`.pv2-anim`) y el primer panel queda visible al llegar a la sección;
  - con «reducir movimiento», no se activa.
- `npm run verify` en verde y Lighthouse en producción por encima de 85 con LCP de 3,5 s o menos (D14), o se revierte.

## Publicación

- Se publica con el permiso del dueño.
- Reversión: `git revert` del commit y push con su permiso.
