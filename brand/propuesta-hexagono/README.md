# Propuesta de logo: hexágono con "e"

**Esto NO es el logo vigente.** El de la web sigue siendo el cubo teal, que está
un nivel arriba en `brand/`. Esta carpeta es la versión vectorial de una propuesta
alterna (hexágono azul con la "e" en negativo y un chevrón), para poder evaluarla,
recolorearla y compararla sin tener que decidir nada todavía.

## De dónde salió

El original era un PNG generado con IA, sin archivo fuente. Aquí está vectorizado:

- **El símbolo** se calcó del PNG (potrace sobre las máscaras de color separadas)
  y quedó en 116 nodos el hexágono y 14 el chevrón. Se comparó contra un calco de
  976 nodos y contra el PNG: no se distingue.
- **La palabra** NO se calcó, se compuso en **Outfit Bold**, que es la tipografía
  de la web. Resultó ser la misma o casi: la proporción ancho/altura-de-mayúscula
  del PNG daba 9,607 y Outfit Bold da 9,528, menos de 1 % de diferencia. Está
  convertida a curvas, no hace falta la fuente instalada.
- **La bajada** ("AGENCIA DE DESARROLLO WEB") va en Outfit Medium con tracking
  +0,284 em, calculado para que mida exactamente lo mismo que la palabra.

El degradado del original se aplanó a color liso a propósito: un degradado no se
puede bordar, no se puede serigrafiar a una tinta y complica el vinil.

## Archivos

**Cada paleta viene en par: `-claro` para fondo blanco y `-oscuro` para fondo
oscuro.** No es el mismo archivo recoloreado a ojo: en las versiones oscuras el
chevrón y "Elemento" van en blanco por obligación, ver la nota más abajo.

| Sufijo | Qué es |
|---|---|
| `logo-*` | Lockup completo: símbolo + palabra + bajada |
| `logo-*-sin-bajada` | Lockup sin la bajada, para tamaños chicos |
| `isotipo-*` | Solo el símbolo |
| `*-azul-claro` / `*-azul-oscuro` | Los colores del PNG que llegó |
| `*-teal-claro` / `*-teal-oscuro` | Con el teal de la web (`#2dd4bf`) |
| `*-teal-hondo-claro` | Con el teal oscuro (`#0f766e`), más sobrio sobre blanco |
| `*-1tinta-negro` / `-blanco` / `-teal` | Un solo color, para bordado o serigrafía a una tinta |

El fondo oscuro de referencia es `#0f172a`, el mismo de la web. Los PNG van a
3000 px de ancho con fondo transparente, así que sirven sobre cualquier fondo.

Proporción del lockup: **3,947 : 1**. Símbolo solo: **0,950 : 1**.

## Cómo recolorearlo

Cada SVG tiene los colores como `fill="#..."` planos, uno por elemento. Se cambian
con un buscar-y-reemplazar en cualquier editor de texto, sin abrir Illustrator:

| Color | Qué pinta |
|---|---|
| `#0a63f0` `#2b7bff` `#2dd4bf` `#0f766e` | El hexágono |
| `#07132b` `#0f172a` `#ffffff` | El chevrón |
| `#0f172a` o `#ffffff` | La palabra "Elemento" |
| `#334155` `#475569` `#94a3b8` | La bajada |

Si recoloreas una versión clara para usarla en oscuro, **acuérdate de cambiar
también el chevrón a blanco**. Es el error fácil de cometer y el que deja el logo
a medias.

## Dos cosas que hay que arreglar si esta propuesta avanza

**1. El chevrón flota, no va encima del hexágono.** Está en el hueco blanco de la
"e", no superpuesto. Consecuencia práctica: sobre fondo oscuro un chevrón oscuro
desaparece. Por eso la versión `para-fondo-oscuro` lo lleva en blanco. Si la
propuesta avanza, conviene decidir si el chevrón debe apoyarse en el hexágono en
vez de flotar.

**2. La "e" no cierra.** El canal blanco que la forma sale por el borde derecho
del hexágono, así que la contraforma queda abierta y a primera vista puede leerse
como "C". Se comprobó midiendo: al intentar aislar el hueco de la "e" da cero
píxeles cerrados, porque está conectado con el exterior. Es un arreglo de dibujo,
no de tamaño: agrandar el logo no lo resuelve.

## Para bordado

Mismo problema que el cubo actual pero peor, y por otra razón: aquí la "e" es
espacio negativo. Sobre una prenda que no sea blanca, ese hueco hay que rellenarlo
con hilo, lo que convierte un símbolo de línea en un bloque macizo. Antes de
mandarlo a bordar hay que decidir si el hueco se rellena, se deja el color de la
prenda, o se rediseña el símbolo en línea.
