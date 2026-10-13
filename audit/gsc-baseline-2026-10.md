# Línea base de Search Console — 28 de julio a 11 de octubre de 2026

Fuente: Search Console, propiedad de prefijo `https://elementoweb.com/`, informe Rendimiento en la Búsqueda, últimos 3 meses (28-jul-2026 a 11-oct-2026). Se leyó la tabla en pantalla con la sesión de Chrome de Josimar, solo lectura: no se descargó ningún archivo ni se tocó ninguna configuración. Los datos crudos están en [`gsc-2026-10-consultas.tsv`](gsc-2026-10-consultas.tsv) (257 consultas) y [`gsc-2026-10-paginas.tsv`](gsc-2026-10-paginas.tsv) (95 páginas); el cruce de consulta por página de las 14 páginas que importan, en [`gsc-2026-10-consulta-por-pagina.tsv`](gsc-2026-10-consulta-por-pagina.tsv). Posición con coma decimal, como la muestra Search Console.

Es la foto **antes** del rediseño. Todo cambio de las fases 2a a 5 se mide contra este archivo (Search Console tarda días en reflejar un cambio; comparar ventanas equivalentes, nunca el día siguiente al deploy).

## Totales

| Métrica | Valor |
|---|---|
| Clics | 10 |
| Impresiones | 7,78 mil |
| CTR medio | 0,13 % |
| Posición media | 79,9 |

Cómo leer las cifras:
- La suma de las 257 consultas da 7.479 impresiones, menos que el total: Google oculta las consultas poco frecuentes por privacidad. Por eso ninguna consulta muestra clics (los 10 clics salen de la tabla de páginas).
- La suma de las 95 páginas da 8.859 impresiones, **más** que el total del sitio: en la tabla de páginas cada URL cuenta su propia impresión aunque dos páginas del sitio aparezcan en la misma búsqueda. Comparar páginas con páginas y consultas con consultas, no una tabla con otra.
- Con menos de 10 impresiones la posición es ruido: una sola búsqueda hecha desde un lugar distinto la mueve decenas de puestos.

## Lo que dicen los datos

**1. Hay demanda y casi nada se ve.** El 66,5 % de las impresiones está en posición 80 a 100 (páginas 8 a 10 de Google) y el 28,5 % en 50 a 80. Solo el 2,4 % está dentro de las tres primeras páginas. Es lo esperable en un dominio de julio de 2026 sin enlaces entrantes: el cuello de botella es la autoridad y la antigüedad, no el marcado técnico. Los 10 clics son 9 de la portada (69,2 de posición media) y 1 de una guía por industria (agencias de viajes, posición 2,2).

**2. Las dos palabras que importan están en la página 10.** «diseño web panama» (202 impresiones, posición 92,8), «diseño web en panama» (216, 91,3), «agencia de diseño web» (97, 90,4). La página con más impresiones del tema es `/diseno-web-panama/` (1.829, posición 88,4). Qué URL recibe cada consulta está en el cruce de más abajo (puntos 7 a 11).

**3. La mayor demanda medida es SEO, no diseño web.** `/crecimiento/seo-posicionamiento-web-panama/` reúne 2.685 impresiones (posición 86,0), más que cualquier otra URL, y el grupo de consultas de SEO suma más que el de diseño web (tabla de abajo). Google Ads (771 impresiones en una sola página, posición 82,0) es el tercer foco. Esto no cambia el plan —la prioridad del dueño es diseño web— pero dice dónde está el volumen que las páginas de fase 2a ya heredan.

**4. Nichos donde ya hay posición decente.** Instagram para negocios en Panamá (posiciones 19 a 56), clínicas (`clinica web`, posición 26,5), `diseño web brickell` (15,2) y `diseño web gimnasios` (20,0). Son búsquedas largas y específicas en las que, sin autoridad de dominio, el sitio ya aparece cerca de la página 2 o 3. Marcan dónde una página bien dirigida avanza primero; no mueven las dos palabras principales.

**5. URLs con impresiones que hoy dan 404.** `/saas/chatmantis/`, `/saas/wapycrm/` y `/funcionalidades/chatbots-ia-web-chatmantis-panama/` aparecen en Search Console (2, 1 y 1 impresiones) y devuelven 404 en producción (comprobado el 13-oct-2026). Son páginas que ya no existen (la de chatbots pasó a `/funcionalidades/chatbots-ia-web-wazacrm-panama/`). Son pocas impresiones, pero una redirección 301 es el arreglo correcto; está anotado en TODOS.md y necesita tu aprobación porque cambia `nginx.conf` y se publica con el push.

**6. Una URL histórica ya está bien resuelta.** `/crecimiento/mantenimiento-hosting-web-panama/` (5 impresiones) tiene 301 a `/crecimiento/mantenimiento-web-panama/` en `nginx.conf`.

### Lo que mostró el cruce consulta por página

Fuente: filtro por página de Search Console, 13-oct-2026, mismo rango, en las 14 páginas con más impresiones o con una palabra del plan (archivo [`gsc-2026-10-consulta-por-pagina.tsv`](gsc-2026-10-consulta-por-pagina.tsv)). Las impresiones por página no suman el total de la consulta porque dos páginas del sitio pueden salir en la misma búsqueda.

**7. Dos páginas del propio sitio compiten por las dos palabras principales.** `/servicios/diseno-web-corporativo-panama/` recibe 153 impresiones de «diseño web en panama» (la pilar, 190), 94 de «diseño web panama» (la pilar, 175) y 75 de «diseño de paginas web en panama» (la pilar, 163). `/servicios/` suma 21 de «creacion de paginas web panama». Google reparte la señal en vez de concentrarla en `/diseno-web-panama/`.

**8. «agencia de diseño web» la recibe una guía del blog, no la portada.** `/blog/como-elegir-agencia-diseno-web-panama/` aparece en 94 de las 97 búsquedas de esa consulta (posición 90,4) y en otras como «empresa de diseño web» (18) y «agencia de diseño de páginas web» (16 y 13). La portada aparece solo en 9 (posición 97,9). Regla R35: la palabra de una página comercial no puede ser la principal de una guía.

**9. «manejo de Instagram» aterriza en la página equivocada.** Diez consultas de manejo, administración y estrategia de Instagram (posiciones 19 a 52) llegan a `/marketing/facebook-instagram-ads-panama/`, que es publicidad de pago. `/marketing/contenido-redes-sociales-panama/`, que es gestión de contenido, solo recibe «creación de contenido para instagram» (30). Quien busca que le manejen el Instagram no pide campañas de pago: es un desajuste de intención.

**10. SEO general y SEO local se pisan.** La página de SEO general recibe «seo local panamá» (135) y «seo local ciudad de panamá» (56); la de SEO local, 215 y 101. «seo para ecommerce» (179 + 90) y «posicionamiento tienda online» (96) también caen en la de SEO general, no en la de tiendas online.

**11. `/precios/` no tiene ni una impresión** en el rango. «pagina web precio» (77 impresiones, posición 89,4) la recibe `/blog/cuanto-cuesta-diseno-web-panama/`.

## Frente a la lectura del 30 de septiembre

Los rangos se solapan (el actual contiene al anterior), así que la diferencia son las dos semanas añadidas, no una medición independiente.

| Métrica | 28-jul a 27-sep ([lectura anterior](gsc-baseline-2026-09.md)) | 28-jul a 11-oct (esta) |
|---|---|---|
| Clics | 6 | 10 |
| Impresiones | 6.269 | 7.780 aprox. |
| Posición media | 83,4 | 79,9 |
| Consultas visibles | 164 | 257 |
| `/diseno-web-panama/` | 1.569 impresiones, posición 89,5 | 1.829, posición 88,4 |
| `/servicios/diseno-web-corporativo-panama/` | 447, posición 93,3 | 525, posición 93,2 |
| `/blog/cuanto-cuesta-diseno-web-panama/` | 77, posición 88,7 | 84, posición 89,0 |
| `/` | 13 impresiones, 5 clics, posición 3,6 | 197 impresiones, 9 clics, posición 69,2 |

## Posición de las consultas

| Posición | Consultas | Impresiones | Parte del total |
|---|---|---|---|
| 1 a 10 | 4 | 9 | 0,1 % |
| 10 a 30 | 15 | 170 | 2,3 % |
| 30 a 50 | 29 | 198 | 2,6 % |
| 50 a 80 | 79 | 2.129 | 28,5 % |
| 80 a 100 | 129 | 4.971 | 66,5 % |
| más de 100 | 1 | 2 | 0,0 % |

## Grupos de consultas (agrupación aproximada por palabras)

| Grupo | Consultas | Impresiones | Posición media (ponderada) |
|---|---|---|---|
| SEO y posicionamiento | 44 | 2.886 | 82,8 |
| Diseño web, páginas web y agencia web | 77 | 2.414 | 85,7 |
| Google Ads y publicidad | 12 | 823 | 81,4 |
| Instagram, redes y contenido | 23 | 515 | 56,8 |
| Email marketing | 8 | 269 | 81,4 |
| Otras (marca, ruido, nichos sueltos) | 28 | 250 | 69,8 |
| Tienda online, pagos, Shopify y WordPress | 29 | 180 | 81,6 |
| IA, automatización y CRM | 13 | 73 | 79,9 |
| Landing page | 13 | 46 | 88,0 |
| Hosting y mantenimiento | 10 | 23 | 71,9 |

La agrupación se hace con palabras clave y el primer grupo que coincide gana; sirve para orientar, no para auditar una por una.

## Consultas de diseño web con más impresiones

| Consulta | Impresiones | Posición |
|---|---|---|
| diseño web en panama | 216 | 91,3 |
| diseño web panama | 202 | 92,8 |
| diseño de paginas web en panama | 180 | 93,8 |
| paginas web en panama | 168 | 80,9 |
| creacion de paginas web panama | 129 | 94,0 |
| website design panama | 116 | 91,8 |
| agencia de diseño web | 97 | 90,4 |
| pagina web panama | 93 | 60,0 |
| diseño de sitios web en panama | 92 | 95,1 |
| paginas web panama | 90 | 75,7 |
| web design panama | 79 | 91,5 |
| pagina web precio | 77 | 89,4 |
| sitios web en panama | 64 | 79,0 |
| web design in panama | 61 | 91,6 |

## Oportunidades

Consultas en posición 30 o mejor con 10 o más impresiones:

| Consulta | Impresiones | Posición |
|---|---|---|
| clinica web | 37 | 26,5 |
| marketing de instagram para negocios en panamá | 37 | 28,9 |
| administración de instagram en panamá | 31 | 18,9 |
| creación de contenido para instagram en panamá | 30 | 26,1 |
| paginas web para clinicas panama | 17 | 29,5 |

Consultas entre la posición 30 y la 50 con 9 o más impresiones (a un empujón de la página 3):

| Consulta | Impresiones | Posición |
|---|---|---|
| estrategia de instagram para empresas en panamá | 29 | 46,6 |
| servicio de instagram para empresas en panamá | 28 | 33,2 |
| manejo de instagram en panamá | 26 | 43,0 |
| manejo profesional de instagram en panamá | 23 | 37,1 |
| servicio de manejo de instagram en panamá | 13 | 49,9 |
| gestión de contenido de instagram en panamá | 11 | 45,4 |
| portafolio web en panama | 10 | 41,4 |
| sistemas de citas online | 10 | 47,6 |
| desarrollo laravel en panama | 9 | 30,9 |
| portafolio de paginas web panama | 9 | 44,2 |

## Páginas por sección

| Sección | Páginas | Impresiones | Posición media (ponderada) | Clics |
|---|---|---|---|---|
| `/crecimiento/` | 5 | 3.323 | 82,5 | 0 |
| `/diseno-web-panama/` | 1 | 1.829 | 88,4 | 0 |
| `/marketing/` | 7 | 1.472 | 71,8 | 0 |
| `/blog/` | 36 | 920 | 76,5 | 0 |
| `/servicios/` | 5 | 692 | 91,4 | 0 |
| `/` | 1 | 197 | 69,2 | 9 |
| `/industrias/` | 15 | 173 | 56,6 | 1 |
| `/inteligencia-artificial-para-empresas-panama/` | 1 | 71 | 86,3 | 0 |
| `/funcionalidades/` | 4 | 63 | 30,7 | 0 |
| `/portafolio/` | 1 | 54 | 65,2 | 0 |
| `/tecnologias/` | 3 | 30 | 44,7 | 0 |
| `/miami/` | 5 | 9 | 11,4 | 0 |
| `/nosotros/` | 1 | 7 | 12,4 | 0 |
| `/saas/` | 6 | 7 | 7,4 | 0 |
| `/como-trabajamos/` | 1 | 5 | 32,8 | 0 |
| `/contacto/` | 1 | 3 | 33,7 | 0 |
| `/terminos/` | 1 | 3 | 5,0 | 0 |
| `/politica-de-privacidad/` | 1 | 1 | 7,0 | 0 |

## 25 páginas con más impresiones

| Página | Clics | Impresiones | Posición |
|---|---|---|---|
| `/crecimiento/seo-posicionamiento-web-panama/` | 0 | 2.685 | 86,0 |
| `/diseno-web-panama/` | 0 | 1.829 | 88,4 |
| `/marketing/google-ads-panama/` | 0 | 771 | 82,0 |
| `/crecimiento/seo-local-google-maps-panama/` | 0 | 622 | 68,1 |
| `/servicios/diseno-web-corporativo-panama/` | 0 | 525 | 93,2 |
| `/marketing/email-marketing-panama/` | 0 | 320 | 80,4 |
| `/marketing/facebook-instagram-ads-panama/` | 0 | 244 | 38,6 |
| `/` | 9 | 197 | 69,2 |
| `/blog/marketing-de-contenidos-para-redes-sociales-panama/` | 0 | 197 | 79,4 |
| `/blog/como-elegir-agencia-diseno-web-panama/` | 0 | 165 | 89,4 |
| `/marketing/contenido-redes-sociales-panama/` | 0 | 121 | 56,6 |
| `/industrias/diseno-web-clinicas-salud-panama/` | 0 | 105 | 51,8 |
| `/servicios/tiendas-online-ecommerce-panama/` | 0 | 104 | 87,3 |
| `/blog/seo-para-pymes-en-panama-guia/` | 0 | 98 | 73,3 |
| `/blog/cuanto-cuesta-diseno-web-panama/` | 0 | 84 | 89,0 |
| `/inteligencia-artificial-para-empresas-panama/` | 0 | 71 | 86,3 |
| `/blog/como-aparecer-primero-en-google-en-panama/` | 0 | 65 | 82,9 |
| `/portafolio/` | 0 | 54 | 65,2 |
| `/servicios/` | 0 | 54 | 84,0 |
| `/blog/como-crear-una-tienda-online-en-panama/` | 0 | 51 | 73,1 |
| `/blog/email-marketing-para-negocios-en-panama/` | 0 | 32 | 78,8 |
| `/blog/landing-page-vs-sitio-web-cual-necesitas/` | 0 | 32 | 90,2 |
| `/blog/diseno-web-para-clinicas-salud-panama/` | 0 | 31 | 62,3 |
| `/blog/diseno-web-para-clinicas-esteticas-panama/` | 0 | 28 | 60,3 |
| `/industrias/diseno-web-consultoras-servicios-profesionales-panama/` | 0 | 27 | 88,1 |

La lista completa de 95 páginas está en [`gsc-2026-10-paginas.tsv`](gsc-2026-10-paginas.tsv).

## Cómo repetir la medición

1. Search Console → Rendimiento en la Búsqueda → misma propiedad de prefijo de URL (`https://elementoweb.com/`).
2. Rango personalizado de **28 días** que termine el día de la lectura. No hay año anterior con que comparar (el dominio es de julio de 2026): se compara contra este archivo y contra la lectura previa.
3. Pestañas **Consultas** y **Páginas**, ordenadas por impresiones. Para cruzar consulta por página: filtrar por la página y mirar su pestaña Consultas.
4. Fechas de lectura previstas: **28-oct-2026** (primera ventana tras publicar la ola 1), **28-nov** y **28-dic**.
5. Anotar en este mismo directorio un archivo nuevo (`gsc-AAAA-MM.md`) con la misma estructura. No sobrescribir este.
