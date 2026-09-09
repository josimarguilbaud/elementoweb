# Logotipo de Elemento Web

El logo vive como SVG dentro del código (`src/components/Navbar.astro` y
`Footer.astro`). Esta carpeta es la **exportación lista para entregar** a un
imprentero, bordador o proveedor de promocionales, para no tener que sacarlo a
capturas de pantalla nunca más.

Estos archivos no se publican: Astro solo sirve `public/`.

## Qué es cada archivo

| Archivo | Para qué |
|---|---|
| `logo-horizontal-color.svg` / `.png` | El principal, sobre fondo claro |
| `logo-horizontal-oscuro.svg` / `.png` | Sobre fondo oscuro (la palabra "elemento" en blanco) |
| `logo-horizontal-1tinta-negro.svg` / `.png` | Una sola tinta o un solo hilo |
| `logo-horizontal-1tinta-blanco.svg` | Una sola tinta, para prendas oscuras |
| `isotipo-teal / negro / blanco .svg` | Solo el cubo, sin la palabra |
| `elementoweb-logo.pdf` | Vectorial, por si el proveedor no abre SVG |

**El texto ya está convertido a curvas.** El proveedor no necesita instalar la
tipografía y no se le va a sustituir por otra. Los PNG van a 3000 px de ancho
con fondo transparente.

## La marca

- Cubo y la palabra "web": **`#2dd4bf`**
- La palabra "elemento": **`#0f172a`**
- Tipografía original: **Outfit Bold** (Google Fonts, licencia OFL), tracking −0.025 em
- Proporción del lockup horizontal: **6.196 : 1**

En la web el navbar pone " web" en gris al 60 % y el footer lo pone en teal.
Para producción física se eligió **la versión teal**: aguanta mejor la distancia
y usa el color de marca.

## Para bordado, leer esto antes de mandarlo

El cubo es de **línea**, no de relleno. Al achicarlo, esa línea se adelgaza
proporcionalmente, y por debajo de ~1,2 mm un bordador no puede hacer una
columna de satín limpia (le queda hilo suelto o se deforma).

Lockup completo (cubo + palabra):

| Ancho | Alto | Línea del cubo | Altura de mayúscula |
|---|---|---|---|
| 60 mm | 9,7 mm | 0,70 mm ❌ | 5,6 mm |
| 70 mm | 11,3 mm | 0,81 mm ❌ | 6,5 mm |
| 80 mm | 12,9 mm | 0,93 mm ⚠️ | 7,4 mm |
| 100 mm | 16,1 mm | 1,16 mm ⚠️ | 9,3 mm |
| 120 mm | 19,4 mm | 1,39 mm ✅ | 11,1 mm |

Solo el cubo:

| Ancho | Línea |
|---|---|
| 25 mm | 2,49 mm ✅ |
| 30 mm | 2,99 mm ✅ |
| 40 mm | 3,98 mm ✅ |
| 50 mm | 4,98 mm ✅ |

**Lo que conviene pedir:**

- **Pecho izquierdo:** el **isotipo solo**, 40–50 mm. Queda con línea de 4–5 mm,
  que es terreno cómodo para satín y sale impecable.
- **Si quieren el logo completo en el pecho:** mínimo 80 mm de ancho, y avisarle
  al digitalizador que el cubo va en **pespunte triple (bean stitch)**, no en
  satín. A ese tamaño el satín no da.
- **Espalda o parte de atrás del cuello:** ahí sí cabe el lockup completo a
  120 mm o más, con satín en todo.
- La palabra aguanta bien: a 80 mm la mayúscula mide 7,4 mm, por encima de los
  5 mm que se piden como mínimo para texto bordado.

Los `#2dd4bf` y `#0f172a` son colores de pantalla (RGB). El bordador tiene que
elegir el hilo más cercano de su carta (Madeira, Isacord) — pedirle que enseñe
el carrete o una muestra antes de correr la producción, porque el teal es un
color que se desvía fácil hacia verde o hacia azul.

## Cómo se regeneran

El logo es el SVG del código; estos archivos salieron de convertir la palabra a
curvas con `fonttools` sobre la Outfit oficial de Google Fonts. Si cambia la
marca, se rehacen desde `Navbar.astro`, no al revés: **el código es la fuente
de verdad.**
