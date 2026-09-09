# Dirección: azul #0099CC + Raleway

Las dos marcas de Elemento Web (el cubo actual y la propuesta del hexágono) con
la paleta y la tipografía que Josimar pidió adoptar, tomadas del manual de estilos
de **Marketing Web Panamá**.

Cada una viene en **claro** (fondo blanco) y **oscuro** (fondo `#333333`).

## La especificación, verificada

No es de oído: salió del `Manual de Estilos.pdf` de la referencia y se contrastó
contra el archivo del logo.

| | Valor |
|---|---|
| Azul | **`#0099CC`** · rgb(0, 153, 204) · CMYK 78/23/8/0 |
| Gris | **`#333333`** · rgb(51, 51, 51) · CMYK 69/60/56/66 |
| Tipografía | **Raleway Bold**, tracking **−0.05 em** (el manual lo escribe como −50) |
| Bajada | **Raleway Light**, tracking **+0.35 em** (en el manual, 350) |

El PNG del logo de referencia mide `#333334` y `#1899cd`, o sea el manual y el
archivo coinciden; las milésimas de diferencia son antialiasing.

Raleway se confirmó comparando las letras contra el logo real, no solo por lo que
dice el manual: coinciden la 'a' de un piso, la 'M' de vértice alto, la 'g' de un
piso y la 'W'. Poppins, Jost y Questrial quedaron descartadas en esa comparación.

Raleway es de Google Fonts, licencia OFL, gratis y de uso comercial libre.

## Archivos

| Archivo | Qué es |
|---|---|
| `logo-cubo-claro` / `-oscuro` | El cubo actual, con la paleta nueva |
| `logo-hex-claro` / `-oscuro` | La propuesta del hexágono, con la paleta nueva |
| `isotipo-cubo-azul` / `-gris` / `-blanco` | Solo el símbolo del cubo |
| `elementoweb-azul-raleway.pdf` | Las cuatro versiones, vectorial |

Texto en curvas: no hace falta tener Raleway instalada. PNG a 3000 px con fondo
transparente. Proporciones: cubo **6.365 : 1**, hexágono **3.864 : 1**.

## Lo que hay que decidir antes de adoptarlo

**1. Esto rompe la coherencia con la web.** El sitio hoy corre en teal `#2dd4bf`
y tipografía **Outfit** (`src/styles/`, `--color-teal` y `--font-display`).
Si el logo pasa a `#0099CC` + Raleway, el logo deja de combinar con su propia web.
Adoptar esta dirección significa cambiar también los tokens del sitio, no solo el
logo. Es un cambio de marca, no un cambio de archivo.

**2. Marketing Web Panamá es una agencia web panameña, o sea competencia
directa.** Colores y tipografías no son propiedad de nadie y usarlos es
perfectamente legal. El riesgo es de mercado: dos agencias web en Panamá, ambas
con nombre "*algo* Web", el mismo azul, la misma tipografía y la misma estructura
de lockup se confunden, y la que llegó después parece la copia. Queda anotado
aquí para que la decisión sea consciente, no por descuido.

Si la dirección avanza, conviene separarse en al menos una variable: otro azul de
la misma familia, otro peso tipográfico, u otra estructura de lockup.
