# Plan de imágenes del blog

Para aprobar antes de generar nada. Ninguna imagen se genera hasta que este
documento esté aprobado.

## Qué se encontró

No falta ninguna imagen: 39 referenciadas en el código, 39 en disco, cero rotas,
cero huérfanas. El problema es otro y es doble.

**Dos están mal de verdad:**

| Archivo | Qué le pasa |
|---|---|
| `automatizaciones-con-n8n-para-pymes.jpg` | Es una placa de circuito, lee como motor, no como automatización. Además tiene un error de generación: **dos cajas distintas dicen "APP A"**. |
| `embudo-de-ventas-para-negocios-panama.jpg` | Está **entera en inglés** (AWARENESS, INTEREST, CONSIDERATION, INTENT, ACTION) en un artículo en español sobre Panamá. |

**Y la mitad del blog es la misma foto.** De 39 imágenes, unas 16 son "laptop
sobre escritorio de madera con taza de café y planta", y otras 4 son "gente
reunida alrededor de una mesa con pantalla". Ningún par es idéntico —se verificó
por hash, no hay duplicados— pero el concepto se repite, y eso es lo que se nota
al recorrer el blog.

## La regla que evita repetir el error

**Cero texto legible en las imágenes generadas.** Nada de pantallas con interfaz,
rótulos que se lean o diagramas con etiquetas. Las dos imágenes rotas se rompieron
por exactamente eso: la IA escribió "APP A" dos veces y escribió el embudo en
inglés. Un modelo de imagen no es de fiar con texto.

Corolario que ahorra crédito: **los dos diagramas no van a fal.** El flujo de n8n
y el embudo se dibujan en SVG con la paleta de marca, en español y sin errores.
Salen gratis y salen bien.

**Y la prohibición dura: ninguna laptop sobre escritorio.** Es el cliché que creó
el problema.

## Dirección de arte

Lo que mantiene unidas a las 12 sin que se parezcan entre sí:

- **Fotografía documental panameña.** Comercio pequeño, taller, calle, mercado.
  Nada de oficina genérica de stock.
- **Luz natural de día**, sin flash ni HDR.
- **La persona hace algo, no posa.** Plano medio o detalle de manos. Nadie mira
  a la cámara.
- **Profundidad de campo suave**, no exagerada.
- **Paleta cálida natural.** El color de marca aparece solo si cae natural (un
  rótulo, un delantal) y nunca forzado.
- **Formato 3:2**, aprox. 1600 × 1067.

La foto que hoy mejor funciona en el blog es la de Google Business Profile —una
calle panameña con un pin de mapa— y funciona precisamente porque es local. Esa
es la dirección.

## Las 14

Las dos primeras las dibujo yo. Las otras doce van a fal.

| # | Artículo | Concepto | Cómo |
|---|---|---|---|
| 1 | Automatizaciones con n8n | Diagrama de flujo limpio: formulario → CRM → WhatsApp, en español, paleta de marca | **SVG, yo** |
| 2 | Embudo de ventas | El embudo en español: Atracción, Interés, Consideración, Intención, Cierre | **SVG, yo** |
| 3 | Automatizar seguimiento de clientes | Dueño de barbería mira un calendario de pared con nombres apuntados, luz de media tarde. El seguimiento que no ocurre | fal |
| 4 | Carritos abandonados | Un carrito de supermercado dejado a medio pasillo con un solo producto adentro, tienda vacía | fal |
| 5 | Aparecer primero en Google | Fila de rótulos de locales casi iguales en una calle panameña, uno encendido más brillante que el resto | fal |
| 6 | Crear una tienda online | Dueña de tienda empacando una caja, estantería con producto detrás, teléfono apoyado | fal |
| 7 | Elegir el dominio perfecto | Un rotulista pintando a mano el nombre en la fachada de un local. Tu nombre en la puerta | fal |
| 8 | Elegir palabras clave | Alguien en una parada de bus escribiendo en el celular, rótulos de negocios alrededor. Lo que la gente teclea de verdad | fal |
| 9 | Campañas de WhatsApp masivo | Celular sobre el mostrador de un puesto de mercado mientras la vendedora atiende, fila de clientes | fal |
| 10 | Medir resultados de tu web | Dueño contando los recibos del día en el mostrador, caja abierta. Los números que sí importan | fal |
| 11 | Cuánto cuesta una página web | Banco de carpintero con una pieza a medio hacer y un presupuesto escrito a mano al lado | fal |
| 12 | Cuánto invertir en publicidad | Manos repartiendo billetes en montoncitos sobre un mostrador. Presupuesto tangible | fal |
| 13 | Cuánto tiempo toma una web | Edificio en obra en Ciudad de Panamá con andamios, a media construcción. Plazos reales | fal |
| 14 | Email marketing | Pila de sobres escritos a mano listos para salir, en un negocio pequeño. La lista que sí es tuya | fal |

Ninguno de los doce tiene pantalla como protagonista, y ninguno se parece a otro.

## Qué falta decidir

1. **¿Apruebas los conceptos?** Si alguno no te convence, se cambia antes de
   generar, que es cuando sale gratis.
2. **~~¿Qué modelo de fal?~~ Resuelto.** El MCP ya está conectado y los precios
   son los reales del catálogo, no estimados. Para 1600 × 1067 (1,71 MP):

   | Modelo | Por imagen | Las 12 |
   |---|---|---|
   | `fal-ai/flux-2/klein/9b` | $0,0102 | **$0,12** |
   | `fal-ai/flux/dev` | $0,0427 | **$0,51** |
   | `fal-ai/nano-banana-pro` | $0,1500 | **$1,80** |

   El trabajo entero cuesta centavos con cualquiera de los tres. Como el precio
   deja de ser el criterio, la propuesta es hacer una **prueba comparativa**:
   el mismo concepto en los tres modelos, mirar cuál da la fotografía más
   creíble, y con el ganador correr las 12. La prueba cuesta unos $0,20.
3. **La paleta.** Si el color de marca va a aparecer en las fotos, hay que saber
   si es el teal `#2dd4bf` actual o el azul `#0099CC` que estás evaluando. Con la
   marca sin definir, mejor que el color no aparezca y las fotos queden neutras.

## Lo que queda fuera a propósito

Las otras 25 imágenes del blog se quedan como están. Varias funcionan bien —la de
Google Business Profile, la del cuarto de servidores, la de los métodos de pago— y
gastar crédito en reemplazarlas no mejora nada.
