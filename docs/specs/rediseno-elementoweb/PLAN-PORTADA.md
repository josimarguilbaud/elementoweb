<!-- /autoplan restore point: "C:\\Users\\JosimarG\\Projects\\elementoweb\\.gstack\\tmp\\autoplan\\main-autoplan-restore-20261014-194115.md" -->
# Plan: portada de agencia con el molde Kredit (fase 2b)

Fecha: 14-oct-2026. Fuente de la dirección: `SPEC.md` sección 3 («Home: de vendo web a soy la agencia»),
`DECISIONES.md` (D3, D11, D18 a D20, D23, D26, D27, D36, D44 a D49) y la revisión del 14-oct de la landing de NousCRM
(nouscrm.app), que el dueño considera mucho mejor que la portada actual.

## Implementation plan

### Objetivo

Que la portada de elementoweb.com venda a Elemento Web como **agencia** (diseño web, tiendas, SEO, publicidad,
WhatsApp e IA) con la misma calidad de prueba que las 33 páginas comerciales ya renovadas, que convierta en consulta
a quien llega (marca, directorios y enlaces del kit de autoridad, pauta) y que sea citable por los motores generativos.
En Google, la portada gana relevancia para «agencia de diseño web» sin quitarle a la pilar `/diseno-web-panama/` la
palabra «diseño web panamá»; la **posición** depende además del frente de autoridad (D13, D15: dominio de julio de
2026, 0 enlaces externos), así que este plan no promete posiciones.
Hoy es la única página comercial sin anatomía v2: texto centrado sin imagen de trabajo real, sin problema del
cliente, sin maquetas, sin respuesta citable y con bloques que ya viven en la pilar y en `/precios/`.

### Lo que ya se hizo (commit dd38640, en producción)

- Sin Preloader (D18).
- Franja de cifras verificables bajo el héroe: proyectos publicados (`portfolio.length`), precio de partida
  (`pricing.tiers[0].price`), respuesta el mismo día hábil, productos propios (`saas.length`).
- Bloque de precios compacto: tres tarjetas y dos accesos (plan mensual y a medida).

### Lo que aprende de NousCRM (lo que hace mejor)

1. Primera pantalla con prueba visual real (capturas del producto en escritorio y celular) y garantías cortas.
2. El problema del cliente en escenas concretas («Por dónde se va el dinero»).
3. Cada promesa con su pantalla real.
4. «Lo que no es»: honestidad que genera confianza.
5. Comparación contra las alternativas, con fuentes.
6. Una historia de principio a fin en pasos.

### Estructura propuesta (en orden)

Enfoque de construcción (decidido en la revisión CEO, 0D): portada híbrida. Un módulo de datos en `src/lib/portada.ts`
(fuera de `src/lib/pages/`, para que la ruta `[...slug].astro` no lo publique como página) alimenta los bloques v2
existentes de `src/components/Blocks.astro`, llamados uno por uno con `v2` e intercalados con el marcado propio de
`src/pages/index.astro`: respuesta citable (`[data-block="answer"]` con `.ew-answer`, que lee el validador), maquetas
(`ejemplos`), comparación (`compare`) y preguntas (`faq`). Héroe, escenas, mapa y proyectos llevan marcado propio. La
hoja `src/styles/molde-kredit.css` va en línea como en `[...slug].astro:14,53`. La ruta `[...slug].astro` no se toca.

Dos versiones, que el dueño elige en la puerta final (T1):
- **Corta** (el orden de D20 más lo que el dueño ya aprobó después): secciones 1, 2, 3, 5, 7, 10, 11, 12 y 13
  (9 secciones).
- **Larga** (este plan): la corta más las secciones marcadas [Larga]: 4, 6, 8 y 9 (13 secciones).

Dos tandas de publicación:
- **Tanda A**, independiente del rediseño, se puede publicar en cuanto el dueño apruebe el push (voces Claude C1 y H3):
  - el arreglo de `cta_click` en `track.ts` con su prueba y su documentación;
  - el enlace de la guía de agencia a la portada;
  - en la portada **actual**, retirar ya lo que no está confirmado: la tira de 26 logos sin nombre
    (`index.astro:155-170`) y toda la afirmación de equipo interno (`index.astro:650-655`); vuelven solo con B2 y B3;
  - en la franja de cifras actual, «proyectos publicados» cuenta solo proyectos de clientes: `portfolio.length` (11)
    incluye WazaCRM, que es producto propio y ya cuenta en «productos propios»; el filtro usa un campo explícito
    `propio: true` en `portfolio` (`src/lib/site.ts`), no el dominio ni la categoría;
  - la misma afirmación de equipo interno sin confirmar sale también de `/nosotros/` y `/como-trabajamos/`
    (`src/lib/pages/core.ts`: «Somos una software house con equipo interno…», «Y todo el desarrollo es de equipo
    interno…» y la respuesta de «¿Subcontratan parte del trabajo?»), hasta que B3 la confirme;
  - medición coherente para la línea base: `track.ts` toma el servicio primero del enlace (`data-service`) y luego de
    `<main data-service>`; `ContactForm` envía en `cf:lead` la clave de `src/data/formulario.json`, no la etiqueta; la
    regla nueva de `cta_click` para `#formulario` no cuenta el enlace «Llenar el formulario» de `/contacto/`;
  - accesibilidad del ancla: `src/scripts/effects.ts` intercepta los enlaces `#…` y hace scroll sin mover el foco;
    después del scroll enfoca el formulario (`focus({ preventScroll: true })`) y actualiza el hash con
    `history.replaceState`; arregla las 33 páginas v2 y se prueba en `scripts/qa-form.mjs`.
- **Tanda B**: la portada nueva. Antes de construirla: S5 (ver su sección) y la puerta final con T1, T3, T4 y B1 a B5;
  antes de publicarla, además, la línea base de medición (ver «Medición y éxito»). Se construye **solo la rama elegida** de cada decisión; las
  ramas que se describen abajo existen para que la puerta final sepa qué implica cada respuesta.

1. **Héroe de agencia.**
   - H1: la construcción usa la candidata de `KEYWORDS.md:77`, «Agencia de diseño web en Panamá que convierte visitas
     en consultas» (D3: se construye con la propuesta; el dueño decide la definitiva al publicar, tras S5). Para que
     `npm run verify` pase antes de esa decisión, `scripts/cambios-permitidos.json` gana el campo `h1` en la entrada de
     `/` con el motivo «candidata D3, pendiente de S5»; si el dueño elige otra candidata se actualiza el motivo, y si
     elige el respaldo se quita el permiso.
   - Bajada de 15 a 20 palabras que dice para quién trabajamos y cómo (precio publicado, respuesta el mismo día hábil);
     los nombres de los servicios quedan para el riel, para no repetirlos tres veces en la primera pantalla.
   - La portada pasa `dark` a `Base` (menú claro sobre el marino) y los botones del héroe llevan
     `data-cta-loc="hero"` y `data-service="definir"` en el enlace (no en `<main>`, para no marcar como «definir»
     todos los eventos de la página).
   - Botón primario «Cotizar mi proyecto» (destino según T4: `/contacto/?servicio=definir#formulario`, que fijan D20
     y D21, o `#formulario` de la misma página, como las 33 páginas v2). WhatsApp como secundario, con el estilo
     `ew-btn--ghost` de `PortadaServicio.astro` (el de las 33 páginas v2) y el mensaje «Hola, quiero cotizar un
     proyecto con Elemento Web.», sin cifras (D23).
   - Insignia con el texto literal «Tech Provider verificado por Meta» (D48), en la píldora con escudo del pie
     (`Footer.astro:41`), enlazada a su explicación publicada en `/nosotros/` (`core.ts:229`); reemplaza al par actual
     «Verificado por Meta / Tech Provider» (`index.astro:104-106`). Los enlaces de mercado Panamá y Miami
     (`index.astro:99-103`) pasan a la respuesta citable (sección 3). El botón «Ver proyectos reales»
     (`index.astro:97`) sale: el pie de la captura enlaza al caso.
   - A la derecha, un proyecto real ya publicado en escritorio y celular: **TramitaPa** (cliente externo con caso en
     `/casos-de-exito/tramitapa/`), sujeto al permiso B5a. Composición: un componente nuevo `src/components/HeroProyecto.astro` que
     reusa las clases `ew-dev` con el modificador `ew-dev--hero` (no se toca `Ejemplo.astro`, cuyo tipo `web` fuerza
     `lazy`, una sola imagen y 16:10 con recorte); el navegador en caja 4:3 (sin recorte) y el celular superpuesto abajo a la
     derecha, a un tercio del ancho, con la sombra desplazada sin desenfoque de `DESIGN.md`. Escritorio:
     `src="/portfolio/tramitapa-800.webp"`, `width="800" height="600"`, `srcset` con `tramitapa-480.webp` (19,5 KB,
     480×360) y `tramitapa-800.webp` (42,5 KB), `sizes` como en `PortadaServicio.astro:39-41`, `fetchpriority="high"`
     y `loading="eager"` (en `Ejemplo.astro:60` hoy es `lazy`). `tramitapa-1200.webp` (74,5 KB) no entra; se intenta
     una versión de 1200 px de 60 KB o menos con `scripts/optimize-images.mjs`, y si no baja se acepta que en pantallas
     2x la captura se vea menos nítida. Celular: `movil-tramitapa.webp`, 390×844, 22,5 KB, con `width` y `height`, sin
     `fetchpriority`. En compacto, un `<picture>` con `media` sirve solo la captura de celular, recortada arriba en la
     caja 3:2, y no descarga la de escritorio (a 358 px una captura de escritorio no se lee); su `<source>` lleva
     `width` y `height` y un `srcset` con una versión de 780 px de 60 KB o menos para pantallas 2x y 3x. El `media` del
     `<source>` y el corte de CSS entre 3:2 y 4:3 salen de una sola constante. El celular superpuesto del escritorio
     va con `loading="lazy"` y oculto en compacto, para que no se descargue en el teléfono.
   - Pie visible en voz de datos, como enlace de texto: «Proyecto real · tramitapa.com · Trámites de visa, 2025 · Ver el
     caso →», con la línea `did` de `site.ts:423` («llevar la consulta de visa directo a WhatsApp») como respaldo sin
     cifras. El `alt` describe la imagen, no el destino; la imagen no es enlace.
   - Si B5a = no: el héroe usa otro proyecto con caso publicado que el dueño autorice (San Blas Full o Panama
     International Movers, los dos en `casos.ts` y en el portafolio). Sin ninguno: héroe de una columna (H1 a 20 ch o
     menos) con la franja de cifras subida bajo los botones como pieza de evidencia, en el patrón de `PrecioPlazo`.
   - Debajo, el riel con los **nombres** de los 6 servicios del mapa, sin cifras (D20, D26), cada uno enlazado a la URL
     principal de su fila: 6 columnas desde 1024 px, 3×2 entre 640 y 1023 px y 2×3 en compacto (hoy `.ew-rail` da 4
     más 2 sueltos). Orden de la banda: riel y luego franja de cifras, las dos sobre el marino del héroe.
   - A 1440×900 se ven sin desplazarse H1, bajada, botón, WhatsApp, insignia y captura con su pie; el riel y la franja
     pueden quedar debajo. A 390×844 el botón principal queda dentro de los 844 px y la caja de la imagen empieza antes
     de los 844 px; para eso el relleno superior de la portada baja a la altura del menú más 24 px (hoy 132 px). En
     móvil el orden es H1, bajada, botón, WhatsApp, insignia, imagen (caja 3:2 reservada con fondo `primary`, D27) y
     riel. El H1 se mide con la candidata más larga (unos 66 caracteres).
2. **Franja de cifras**, como borde inferior de la banda del héroe (aprobada y publicada por el dueño el 14-oct en
   dd38640; conserva «desde $550» y su enlace a `/saas/`, `index.astro:151`, desvíos de D20 que el dueño aprobó al
   publicarla). «Proyectos publicados» cuenta solo proyectos de clientes (tanda A).
3. **Respuesta citable con fecha** (40 a 60 palabras), inmediatamente después de la banda del héroe (`SPEC.md` 3.2,
   D20): quiénes somos (con enlace a `/nosotros/`, destino de las preguntas GEO 18 y 20 de `KEYWORDS.md:101-102`, que
   hoy enlaza la sección de equipo en `index.astro:664`), dónde (Ciudad de Panamá; Miami remoto), qué hacemos y cómo
   cobramos (los enlaces de mercado Panamá y Miami van aquí), con el rótulo «Actualizado el DD/MM». Usa los mismos
   hechos y el mismo nombre, dirección y teléfono que la ficha de Google y los directorios
   (`docs/autoridad/KIT-AUTORIDAD.md`, sección 1), no el mismo texto (allí hay versiones de 22 y de 109 palabras).
4. **[Larga] «Por dónde se te van los clientes»:** seis escenas, una por fila del mapa y enlazadas a la URL principal
   de esa fila, en lista y sin tarjetas: la escena en una frase en voz del cliente y debajo «→ Lo resolvemos con:
   <servicio>». La web no carga en el celular (diseño web); te preguntan «¿cuánto cuesta?» y no pueden comprar ni
   pagar en línea (tiendas online); Google no te encuentra (SEO); gastas en pauta y no sabes qué canal trajo la venta
   (publicidad en Google y Meta, `marketing.ts:105`); tus clientes no vuelven porque nadie les escribe después de la
   primera compra (WhatsApp marketing); nadie contesta el WhatsApp de noche y las cotizaciones se olvidan (IA y
   automatización).
5. **Mapa de servicios (corazón, `SPEC.md` 3.1, D19, D20):** 6 filas, no tarjetas iguales. URL principal de cada
   fila (la que usan el riel y el `ItemList`) y, entre paréntesis, los enlaces secundarios dentro de la fila:
   diseño web `/diseno-web-panama/` («Ver casos», a `/casos-de-exito/`, y «¿Ya tienes web? Rediseño», a
   `/servicios/redisenio-web-panama/`, que reemplaza el camino para quien ya tiene web que hoy dan el selector y el CTA
   intermedio, `index.astro:466` y `:562`); tiendas online `/servicios/tiendas-online-ecommerce-panama/`; SEO y SEO
   local `/crecimiento/seo-posicionamiento-web-panama/` (`/crecimiento/seo-local-google-maps-panama/`); publicidad en
   Google y Meta `/marketing/google-ads-panama/` (`/marketing/facebook-instagram-ads-panama/`); WhatsApp marketing
   `/marketing/whatsapp-marketing-masivo-panama/`; IA y automatización `/inteligencia-artificial-para-empresas-panama/`
   (`/marketing/automatizaciones-n8n-panama/`).
   Cada fila usa el componente «Fila de servicio» de `DESIGN.md` con `id="mapa-<fila>"`: en escritorio, rejilla de tres
   columnas (nombre | qué resuelve y para quién | enlace); en compacto se apila y el enlace ocupa el ancho completo
   (44 px). El precio de partida va en línea, en voz de datos, al final de la línea de qué resuelve; una fila sin
   precio no lleva nada en su lugar. Se lee de `src/data/precios.json` solo si está confirmado (D23): diseño web «desde $550» (`confirmados.web-landing`), tiendas «desde $1,950» (`confirmados.web-ecommerce`);
   SEO, publicidad y WhatsApp sin cifra (sus precios propuestos de D4 no salen en la portada). IA según la pregunta B4:
   - B4 = sí: se agrega `confirmados.ia` (2900, fuente `src/lib/pages/ia-empresas.ts`) y la fila dice «desde $2,900».
   - En los dos casos `sinPrecio` sale de `precios.json`: nadie lo lee y hoy contradice la página de IA.
   - B4 = no: la fila va sin cifra y la página de IA pasa a estado `cotizado` con la redacción literal de D23
     («Cotización cerrada por escrito» y el plazo) en todas las superficies donde hoy dice $2,900: respuesta citable
     (`ia-empresas.ts:32`), precio y plazo de la portada (`:38`, sale su `Offer`), introducción de alcance (`:117`),
     fila de la comparación (`:176`), pregunta frecuente (`:188`, que alimenta el FAQPage) y `public/llms.txt:58`; el
     permiso de su ruta en `scripts/cambios-permitidos.json` cambia de motivo y suma `schema`.
   El software propio se queda en la columna «Nuestros SaaS» del pie (`Footer.astro:22`, D20) y en el enlace de la
   franja de cifras (sección 2); los enlaces entrantes de D36 siguen sobrados (`saas` 10, `saas/nouscrm` 8,
   `saas/cifrao` 6).
6. **[Larga] «Así se vería»:** tres maquetas del molde (`src/components/Ejemplo.astro`) para servicios que no son
   web: un resultado de Google, una conversación de WhatsApp y el reporte del mes, con los datos de maquetas ya
   publicadas (por ejemplo `src/lib/pages/crecimiento.ts:671`). Tres columnas desde 1024 px y una en lo demás (así no
   queda 2 más 1 a 768 px). Nota de ejemplo obligatoria, sin logos de terceros, y ninguna maqueta afirma un resultado
   (D44): el reporte (`informe`) usa estados escritos y no cifras de mejora. Cada maqueta lleva debajo un enlace de texto a su servicio, dibujado por la
   portada (el tipo `Ejemplo` no tiene `href` y no se cambia). La web no se repite aquí: ya la muestran el héroe y los proyectos.
7. **Proyectos reales y clientes** (prueba, D20):
   - El showcase actual se reemplaza por una lista estática de 3 o 4 proyectos del portafolio con la composición
     `ew-dev` y enlace a su caso o, si no tiene, al sitio publicado (hoy solo hay 3 casos además de TramitaPa), sin
     productos propios (`propio: true`), sin esferas, malla, texto con degradado ni acordeón; sale su título «Diseño que desafía lo común» y la
     afirmación sin respaldo «convierten y escalan el negocio» (`index.astro:173-452`). TramitaPa no abre la lista,
     porque ya está en el héroe; su testimonio va pegado a su proyecto. El testimonio de TramitaPa
     (`index.astro:409-415`, también en `src/lib/pages/casos.ts:65`) se publica solo con el permiso B5b, que cubre
     también la página del caso: el cliente aprueba la frase tal cual o una que no implique un resultado, porque
     «las consultas se multiplicaron» convive con «Todavía no publicamos cifras de este proyecto» (`casos.ts:66`). Es
     un testimonio, sin schema `Review` ni `AggregateRating`; se publica con el permiso B5b, aparte de la captura.
   - La tira de logos (retirada de la portada actual en la tanda A) vuelve aquí, junto a los proyectos, solo con B2:
     los logos que el dueño confirme por escrito, en rejilla estática (sin marquee), cada uno con el nombre del cliente
     como `alt`; con menos de 4 confirmados la tira no va.
   - Una línea de responsabilidad del fundador como firma al pie de la sección: «Josimar Guilbaud, CEO. Responde por
     la empresa y por cada proyecto que entregamos.», tal como está publicada en `/nosotros/` (`core.ts:197`), con
     enlace a esa página; la foto solo si el dueño la quiere (voz Claude M2).
   - Botón repetido al cerrar la sección: «Cotizar mi proyecto» y WhatsApp, al mismo destino que el héroe, con
     `data-cta-loc="prueba"`.
8. **[Larga] «Lo que no hacemos»**, cada línea respaldada por una página publicada: no revendemos plantillas
   (`src/lib/pages/diseno-web-panama.ts:80`); no prometemos el primer lugar en Google
   (`src/lib/pages/crecimiento.ts:314`, `core.ts:86`); no intermediamos tu inversión publicitaria (`marketing.ts:47`);
   no publicamos cifras de clientes
   sin su permiso (`/casos-de-exito/tramitapa/`, `casos.ts:66`: «Todavía no publicamos cifras de este proyecto»). No
   se escribe «no te amarramos con contrato» ni «no retenemos tus accesos»: en el plan gestionado de 12 meses los
   accesos se entregan al liquidar las cuotas pendientes (`site.ts:308`, `precios.ts:145`). La línea del dominio no va
   aquí: ya está en la comparación de la sección siguiente.
9. **[Larga] Comparación verificable (D28):** el bloque `compare` existente con `otraCotizacion: true` (columna «tu
   otra cotización» en blanco) y la línea «Qué preguntar a cualquier proveedor» dentro de `intro` (sin campo nuevo en
   el bloque compartido). Criterios, cada uno con enlace a su fuente: precios publicados (`/precios/`,
   `precios.ts:29`); cotización cerrada por escrito (`/precios/`, `precios.ts:18`); plazo por escrito, de 5 días
   hábiles a 5 semanas (`/precios/`, `precios.ts:42`); dominio a nombre de tu empresa (`/precios/`, `precios.ts:145`);
   respuesta el mismo día hábil (`/contacto/`, `core.ts:257`). Sin columnas de freelancer ni de plataformas: sin
   fuente verificable serían generalizaciones.
10. **Proceso en 4 etapas** con el bloque v2 `steps` (en lugar de las tarjetas que se invierten al pasar el ratón,
    `index.astro:610`), cada etapa con su entregable: diagnóstico → propuesta con alcance, precio y plazo por escrito;
    diseño → pantallas aprobadas antes de programar; desarrollo → demo en línea; lanzamiento → web en tu dominio, accesos
    a tu nombre y capacitación. Al final, el botón repetido (`data-cta-loc="proceso"`).
11. **Industrias** en una línea de enlaces de texto a las páginas de industria más «Ver todas las industrias» hacia
    `/industrias/`; sin íconos en mosaico ni fondo marino (`index.astro:621-645`).
12. **Preguntas frecuentes de agencia** (6 o más), el mismo texto en el schema FAQPage. Temas: SEO o publicidad sin
    rehacer la web; trabajo fuera de Panamá (Miami remoto); de quién son las cuentas de Google Ads y Meta; plazos;
    formas de pago; qué pasa si ya tengo web. Todo precio que se cite sale de `confirmados`.
13. **Formulario** dentro de la página (`#formulario`), con el cierre de agencia como encabezado: «Cuéntanos qué
    necesitas resolver primero» y tres líneas de apoyo (respuesta el mismo día hábil; diagnóstico sin costo; cotización
    cerrada por escrito antes de empezar). Reemplaza al CTA intermedio. Según T3:
    - T3 = sí (la portada sale antes de la fase 3): lleva el `ContactForm` actual; en
      `scripts/paginas-comerciales.json` el orden pasa a `["1", "2a", "2b", "3", "4", "5"]` y `faseActual` a `"2b"`.
    - T3 = no: la portada espera a la fase 3 y sale con `ServiceForm` con la clave `definir`.
    - En los dos casos, cuando `ServiceForm` se active, la portada lo usa con `definir`.

Sección de equipo: no va, por el orden de D20 (que no la incluye); `SPEC.md` 3 la mantenía solo con personas con
permiso. La afirmación de equipo interno ya sale de la portada actual en la tanda A: el título «equipo panameño de verdad»
(`index.astro:650`), «Equipo 100% interno. No subcontratamos…» (`:651`) y la insignia (`:655`), porque
`scripts/afirmaciones-bloqueadas.json` bloquea «100% interno» y «equipo interno» en toda página que emite
`data-page-type`. Si el dueño la confirma por escrito (B3), se quitan esas frases de la lista bloqueada (lo que las
desbloquea en todo el sitio) y la afirmación vuelve como una insignia «Equipo 100% interno» junto a la de Meta en el
héroe. Si B3 = no, la corrección de `/nosotros/` y `/como-trabajamos/` que hizo la tanda A se queda.

Lo que queda en la portada actual tras la tanda A (hasta que salga la tanda B): la sección «Quiénes somos» pierde el
título «equipo panameño de verdad» y el párrafo «Equipo 100% interno…» (`index.astro:650-651`), y gana el H2 «Quién
está detrás» (como en `/nosotros/`) con la tarjeta del fundador y su enlace; de la lista de insignias
(`index.astro:655`) sale solo «Equipo 100% interno» y se quedan «Tech Provider verificado por Meta», «3 SaaS propios en
producción» y «Cotización cerrada por escrito».

Salen de la portada: «¿Qué necesita tu negocio ahora?», el bloque de precios y «Sin letra chica» (ya viven completos
en la pilar y en `/precios/`); «Soluciones» (lo reemplaza el mapa); «IA y automatización» como sección aparte (entra al
mapa, `SPEC.md` 3); el bloque de SaaS (queda en el pie, D20); la sección de equipo; el CTA intermedio (pasa a
encabezado del formulario); el botón «Ver proyectos reales» del héroe.

Fuera de la portada (tanda A, salvo `llms.txt`):
- Arreglo de una medición rota, no diseño de eventos de la fase 3: desde el 13-oct los botones de los hubs y de las
  páginas de servicio bajan a `#formulario` y `src/scripts/track.ts:29` solo cuenta `cta_click` para enlaces que
  empiezan con `/contacto/`, así que esos clics no se registran. Regla nueva: un enlace cuyo `href` es exactamente
  `#formulario` envía `cta_click` con `location` y el servicio del enlace (`data-service`) o, si no lo tiene, el de
  `<main data-service>`; no cuenta el enlace «Llenar el formulario» de `/contacto/`; los enlaces a
  `/contacto/…#formulario` siguen por la rama actual, sin doble conteo. Se actualiza `docs/event-dictionary.md` y
  `scripts/qa-form.mjs` gana un caso que hace clic en un enlace `#formulario` de `/qa-fixture/formulario/` (si esa
  página no tiene uno, se le agrega) y comprueba el evento.
- La guía `/blog/como-elegir-agencia-diseno-web-panama/` (`src/lib/pages/blog-1.ts`), que hoy recibe 94 de las 97
  impresiones de «agencia de diseño web», enlaza a la portada con el texto «agencia de diseño web» (`KEYWORDS.md:20`).
- `public/llms.txt` (con la tanda B): el resumen de la agencia se alinea con la nueva respuesta citable.
- Presupuesto: antes de construir se anota el cambio esperado (CSS: unos 4,7 KB del molde más las filas del mapa; JS:
  baja al quitar `effects.ts`); el máximo se fija después en lo medido más 3 %.

### Contrato de interfaz (fase de diseño)

- **Fondos y estilo:** solo el héroe (con su riel y su franja) va en marino; el resto alterna `surface` y
  `surface-alt` (`DESIGN.md`) en lo posible: los bloques compartidos tienen fondo fijo (`answer`, `compare` y `faq`
  en `surface`; `ejemplos`, `steps` y `form` en `surface-alt`) y dos secciones claras seguidas usan el ajuste de
  espacio que ya trae `molde-kredit.css`. Toda adaptación de CSS compartido va como modificador
  (`.ew-rail--6`, `.ew-dev--hero`, `.ew-hero--home`), para no mover las 33 páginas v2. Se usan el contenedor `.ew-wrap` y los títulos del molde (`molde-kredit.css`). En la
  portada nueva no quedan esferas, malla, `grad-text` ni `.reveal` de las secciones viejas (`index.astro:173-452`,
  `:610`, `:621-624`, `:728-731`).
- **Movimiento:** la portada no se anima (`DESIGN.md`, Motion); sin marquee ni revelados; todo visible sin JavaScript.
  `Base.astro` carga `effects.ts` (Lenis, GSAP, cursor y barra de progreso) en todas las páginas junto con
  `track.ts`; gana una opción para no cargar `effects.ts` en la portada (`track.ts` se sigue cargando), así baja su JS.
- **Botón repetido:** «Cotizar mi proyecto» y WhatsApp al cerrar la prueba (sección 7) y el proceso (sección 10), en
  las dos versiones, al mismo destino que el héroe (T4), como marcado propio de la portada después del bloque (sin
  slot nuevo en `Blocks.astro`).
- **Estados:**

| Elemento | Cargando | Vacío | Error | Éxito | Parcial |
|---|---|---|---|---|---|
| Captura del héroe | caja 4:3 (3:2 en compacto) reservada con fondo `primary` | B5a = no: héroe de una columna con la franja bajo los botones | imagen rota: queda la caja con el pie de texto | captura con su pie | — |
| Fila del mapa | — | sin precio confirmado: la fila no lleva cifra ni hueco | — | precio en línea | — |
| Tira de logos | — | menos de 4 confirmados: la tira no va | — | rejilla estática | — |
| Testimonio | — | B5b = no: no va; la lista de proyectos queda sin cita | — | cita pegada a su proyecto | — |
| Formulario | botón desactivado «Enviando…» | sin JavaScript: el aviso con WhatsApp y correo (`noscript`) | por campo, foco al primero; red caída: el mensaje de hoy más los enlaces de WhatsApp y correo, que `ContactForm` gana en todas sus superficies | confirmación con WhatsApp | según `ContactForm` (D22 cuando llegue `ServiceForm`) |

- **Accesibilidad:** recorrido completo por teclado en orden visual; foco visible (anillo de 3 px) en botones, riel,
  filas del mapa y pie de la captura; contraste AA medido de cada par nuevo; texto al 200 % sin pérdida; la página se
  entiende sin JavaScript; `alt` descriptivo en cada captura.

### Datos estructurados y SEO

- Title se conserva («Agencia de Diseño Web en Panamá | Elemento Web»). El H1 cambia solo con aprobación del dueño.
- Description: la ya aprobada en `KEYWORDS.md:77` («Agencia de diseño web en Panamá: sitios corporativos, tiendas
  online y landing pages, con SEO, Google Ads y WhatsApp. Pide tu cotización.»), que `scripts/keywords.test.mjs` ya
  valida en largo.
- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (con dirección, horario y mapa desde el 14-oct) y un
  `ItemList` de 6 elementos, uno por fila del mapa, que referencian por `@id` el nodo `<url>#servicio` que cada página
  de servicio ya publica (así no se repiten `name`, `provider` ni `areaServed`, que exige `qa-seo.mjs`), sin `Offer`
  (R37). FAQPage derivado del bloque visible.
- Una sola estructura de datos en `src/lib/portada.ts` alimenta las filas del mapa, el riel, el `ItemList`, el bloque
  `faq` y el FAQPage (`homeJsonLd` recibe preguntas y servicios); el FAQ se limpia con la misma función que
  `faqNode`. La fecha de la respuesta no puede ser posterior a la del último commit (la compara `verify`).
- La portada emite `data-page-type="home"` y entra al marcador con sus reglas reducidas; permisos de SEO congelado
  (`scripts/cambios-permitidos.json`) para description, schema y H1 (este con el motivo de la sección 1).

### Candidatos de H1 (decide el dueño)

Las tres primeras prometen un resultado («convierte», «trae clientes») que hoy no tiene cifras publicadas que lo
respalden (voz Codex); la cuarta no promete nada.
- «Agencia de diseño web en Panamá que convierte visitas en consultas» (`KEYWORDS.md:77`; la que usa la construcción).
- «Agencia de diseño web en Panamá que te trae clientes» (propuesta de `SPEC.md`).
- «Agencia de diseño web en Panamá: webs, SEO y publicidad que traen clientes».
- «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp».
- Respaldo si el dueño no aprueba ninguna: mantener «Diseño web en Panamá que convierte visitas en consultas» y cerrar
  el cambio solo con la description (`KEYWORDS.md:82`); no nombra la agencia y usa la palabra de la pilar.

### Puerta S5 (antes de construir la tanda B, D3, D18, R31)

Las dos voces de la fase CEO piden adelantarla: es lo único barato que puede invalidar la arquitectura. Revisión de la
SERP de «agencia de diseño web» y de «diseño web panama» (los 5 primeros resultados de cada una; la hace Claude antes
de la puerta final) y volumen en el Planificador de palabras clave (con la sesión de Google Ads del dueño en Chrome,
cuando él la abra, solo en lectura y sin crear campañas; si da rangos amplios, decide la SERP). Se anota en `audit/s5-agencia-diseno-web-2026-10.md`. Si portada y pilar siguen separadas,
`KEYWORDS.md` anota una excepción explícita a su regla 2 para la portada: su title y su H1 contienen «diseño web en
Panamá», la frase reservada a la pilar, y `keywords.test.mjs` hoy no lo comprueba. Con eso el dueño decide el H1 y,
si las dos SERP son casi iguales, si la portada y la pilar siguen separadas (D18). Si elige unirlas, este plan se
detiene: unir las dos URL exige redirección o canónica y enmendar D36, que congela title, H1 y canónica de la pilar, y
eso va en un plan nuevo. S5 bloquea construir la tanda B (V2), no la tanda A.

### Puerta B de la portada (D3, D19)

- B1: H1 (tras S5) y la decisión de D18.
- B2: los 26 logos (cuáles son clientes con permiso).
- B3: la afirmación de equipo interno.
- B4: precio de IA «desde $2,900».
- B5a: permiso para usar la captura de TramitaPa (o de otro proyecto con caso publicado) en el héroe (D3, D25).
- B5b: permiso para publicar la frase del testimonio de TramitaPa, tal cual o reescrita sin resultado.
- Los precios propuestos de D4 (D19) no salen en la portada, así que no bloquean esta tanda; su confirmación sigue
  pendiente para las páginas que los publican.
- Tras las respuestas, `DECISIONES.md` gana una D50 con T1, T3, T4 y B1 a B5; si T3 = sí, se actualizan el orden de fases
  en `SCORECARD.md:8` y en la tabla de D1.

### Medición y éxito

- Línea base: con el arreglo de la tanda A ya midiendo, 2 a 4 semanas de la portada actual en GA4 antes de publicar la
  nueva, medidas por sesión con página de entrada `/` (no por página del evento, porque según T4 el formulario vive en
  `/contacto/` o en `/`): sesiones, `cta_click` y `click_whatsapp` por sesión, `form_start` y `generate_lead` en
  cualquier página de esas sesiones. Esta definición queda en D50 antes de empezar.
- Revisión a las 4 y a las 8 semanas de publicar, con ventanas equivalentes.
- Meta de consultas por mes (D16) escrita en D50, aunque sea pequeña.
- Con tan poco volumen, una señal cualitativa: en cada consulta, Nicole anota si la persona vio la web y qué la
  convenció; el embudo de consulta a reunión a cierre vive en WazaCRM y NousCRM, fuera de este repositorio.
- La portada no atrae tráfico por sí sola: el éxito depende de una fuente de tráfico con fecha (ver el desafío UC1 de
  la puerta final).

### Restricciones

- Solo Roboto (fuente autoalojada). Colores y espaciado de `DESIGN.md` y del molde (`src/styles/molde-kredit.css`).
- Presupuesto de JS y CSS de la plantilla «portada» en `scripts/presupuestos.json`. La hoja del molde en línea suma
  unos 4,7 KB de CSS: el máximo de la portada sube a lo medido más 3 %, con ese motivo (D44), como se hizo con los hubs
  y `/precios/`.
- Rendimiento (D14, D47): LCP de 2,5 s o menos, CLS de 0,02 o menos y Lighthouse móvil local de 90 o más (PageSpeed
  Insights cuando exista la clave). Ninguna variante que el navegador pueda elegir para la imagen LCP pesa más de 60 KB.
- Nada con `opacity: 0` en la primera pantalla ni en el elemento LCP; el contenido es visible sin JavaScript.
- Sin calificaciones con schema; el único testimonio es el de TramitaPa (B5b). Google Partner solo con el código oficial
  de la insignia; «Tech Provider verificado por Meta» con ese nombre (D48).
- Riel sin cifras (D20, D26); precios del mapa según la matriz de D23.
- Responsivo y accesible según D27: 390, 768 y 1440; toques de 44 px; encabezados de tabla en la comparación.
- Enlaces entrantes de contenido: cada página comercial conserva 3 o más (D36); el validador lo comprueba.
- `npm run verify` en verde, marcador y SEO congelado incluidos; cada push lo aprueba el dueño (D47).
- La portada, `audit/seo-snapshot.json` y `scripts/cambios-permitidos.json` cambian en el mismo commit, y la reversión
  se ensaya antes de publicar (una rama con el revert y `npm run verify` en verde); si no, un `git revert` de la
  portada sola chocaría con el SEO congelado y no se desplegaría.
- Si T3 = sí, `qa-a11y` corre sobre `/servicios/` y `/precios/` antes de subir `faseActual`, que las vuelve estrictas.

### Criterios de aceptación

- A 1440×900 se ven H1, bajada, botón, WhatsApp, insignia y captura con su pie (o, si B5a = no, la franja de cifras
  bajo los botones); a 390×844 el botón principal queda dentro de 844 px.
- Respuesta citable de 40 a 60 palabras con fecha, inmediatamente después de la banda del héroe y con enlace a
  `/nosotros/`; FAQPage igual al bloque visible.
- Cada escena y cada fila del mapa enlaza a una página existente; la portada enlaza a todas las del mapa.
- Ningún precio que no esté confirmado en `precios.json`; ninguna afirmación bloqueada; riel sin cifras.
- Un clic en «Cotizar mi proyecto» envía `cta_click` con `service=definir` (el enlace lleva `data-service="definir"`, no
  `<main>`); un clic en un enlace `#formulario` envía
  un solo `cta_click` (caso nuevo en `scripts/qa-form.mjs`).
- LCP, CLS y puntaje medidos en local con `scripts/medir.mjs` y comparados contra la portada actual; las páginas de la
  ola 1 tienen su medición en `src/data/mediciones.json` antes de publicar la portada (D14).
- Capturas a 390, 768 y 1440 de ancho antes de pedir aprobación para publicar.
- Recorrido por teclado y contraste AA de cada par nuevo comprobados; estados del formulario de la portada (error por
  campo, red caída, éxito) probados a 390 y 1440.
- Sin esferas, malla, `grad-text`, `.reveal` ni marquee en el HTML de la portada nueva, y sin `effects.ts` en su JS.
- Pruebas nuevas en `verify`: (a) ninguna frase de `scripts/afirmaciones-bloqueadas.json` en el `<main>` de ninguna
  página de `dist/`, con la excepción ya decidida de `blog-4` (D11); (b) cada «$N» del `<main>` de `/` existe en
  `confirmados`, leído por clave, y una clave inexistente rompe el build; (c) si B4 = no, ni `ia-empresas.ts` ni
  `public/llms.txt` mantienen $2,900; (d) el validador pesa todas las fuentes de la imagen LCP (`srcset` y
  `<source>`), no solo el `src`; (e) los anclas `#formulario` de `/` apuntan a un id que existe; (f) cada
  `@id` del `ItemList` coincide con la URL principal de una fila del mapa; (g) `qa-lcp` mide la posición del botón a
  390×844 y del pie de la captura a 1440×900; (h) `qa-form` prueba `ContactForm` en `/` (error por campo, red caída,
  éxito) y el foco tras el ancla.
- Antes de construir la tanda B: S5 anotada en `audit/` y la puerta final respondida (T1, T3, T4, B1 a B5).
- Antes de publicar la tanda B: B1 a B5 aplicadas, D50 escrita, 2 semanas o más de línea base y export de Search
  Console del día anterior (D1).
- Después de publicar: `gh run watch <id> --exit-status`, `scripts/check-prod.sh` y medición en producción; si
  PageSpeed queda por debajo de 85 o el LCP por encima de 3,5 s, se revierte con `git revert` y un push aprobado (D14).

### Fuera de alcance

- Insignia de Google Partner (pendiente del código oficial).
- Reseñas y casos con cifras (pendientes de autorización de clientes).
- Fotos del equipo (pendientes de permiso).
- La herramienta pública «mide tu web» (`TODOS.md`).
- Eventos GA4 por clic en escenas y filas del mapa: pasan a la fase 3 con el resto de eventos (`TODOS.md`).
- Barra fija en móvil con «Cotizar» y WhatsApp: D21 la pide para las páginas de servicio y nunca se construyó; es un
  componente nuevo para todo el sitio, no de la portada (`TODOS.md`).
- Unir portada y pilar si S5 lo sugiere (plan nuevo, ver Puerta S5).
- Confirmar los precios propuestos de D4 en las páginas que los publican.


<!-- autoplan-accepted:ceo -->
- Obligaciones aceptadas en la revisión CEO (14-oct-2026); el detalle de cada sección está en «Estructura propuesta».
- Enfoque híbrido: módulo `src/lib/portada.ts` fuera de `src/lib/pages/`, bloques v2 existentes llamados uno por uno
  con `v2` para respuesta, maquetas, comparación y preguntas, hoja del molde en línea; `[...slug].astro` no se toca.
- Dos tandas: A (arreglo de `cta_click`, enlace de la guía, retiro de los logos sin confirmar y de la afirmación de
  equipo interno de la portada actual, y «proyectos publicados» solo de clientes; publicable ya con aprobación) y B
  (la portada nueva, construida solo en la rama que elija el dueño).
- Héroe: H1 de `KEYWORDS.md:77` en la construcción con permiso `h1` «candidata D3, pendiente de S5», bajada de 15 a
  20 palabras, botón «Cotizar mi proyecto» a `/contacto/?servicio=definir#formulario`, WhatsApp secundario, insignia
  «Tech Provider verificado por Meta» literal, captura de TramitaPa (`src` 800, 800×600, `srcset` 480 y 800,
  `fetchpriority="high"`; 1200 solo si baja de 60 KB) y celular 390×844; en móvil, caja 3:2 con `object-fit: cover`.
- Riel con los nombres de los 6 servicios, sin cifras (D20, D26), cada nombre a la URL principal de su fila.
- Respuesta citable de 40 a 60 palabras con fecha, inmediatamente después de la banda del héroe, con enlace a
  `/nosotros/` y la misma descripción de la entidad que `docs/autoridad/KIT-AUTORIDAD.md`.
- Mapa de 6 filas con URL principal y secundarias según «Estructura propuesta» (incluye «¿Ya tienes web? Rediseño» y
  «Ver casos» en diseño web); precios de `confirmados.web-landing` y `confirmados.web-ecommerce`; IA según B4 con
  todas sus superficies listadas; SEO, publicidad y WhatsApp sin cifra; software propio en el pie y en la franja.
- Versión corta (9 secciones) o larga (13) según T1.
- «Lo que no hacemos» solo con líneas respaldadas por una página publicada; prohibidos «no te amarramos con
  contrato» y «no retenemos tus accesos» mientras exista el plan gestionado de 12 meses.
- Comparación con el bloque `compare` según D28, `otraCotizacion: true`, «Qué preguntar a cualquier proveedor» en
  `intro` y los 5 criterios con fuente de «Estructura propuesta».
- Proyectos y clientes juntos: testimonio y captura de TramitaPa con permiso B5 (que cubre también la página del caso
  y la frase exacta); logos solo confirmados (B2), con nombre como `alt`, y la tira solo con 4 o más; línea del
  fundador con nombre, rol y enlace a `/nosotros/`.
- Sin sección de equipo; sale toda la afirmación de equipo interno (`index.astro:650`, `:651`, `:655`) salvo B3, que
  la devuelve como insignia en el héroe y la quita de `scripts/afirmaciones-bloqueadas.json`.
- Formulario según T3 (sí: `ContactForm`, orden de fases `1, 2a, 2b, 3, 4, 5` y `faseActual` `2b`; no: esperar a la
  fase 3 y salir con `ServiceForm` `definir`).
- `src/scripts/track.ts`: `href` exactamente `#formulario` envía un solo `cta_click`; se actualiza
  `docs/event-dictionary.md` y `scripts/qa-form.mjs` gana el caso en `/qa-fixture/formulario/`.
- La guía `/blog/como-elegir-agencia-diseno-web-panama/` enlaza a la portada con el texto «agencia de diseño web»;
  `public/llms.txt` se alinea con la nueva respuesta citable.
- Description de `KEYWORDS.md:77`; `ItemList` de 6 `Service` sin `Offer`; FAQ de agencia de 6 o más igual al FAQPage.
- Máximo de CSS de la plantilla «portada» en `scripts/presupuestos.json` = medido + 3 %, con motivo (D44).
- S5 antes de construir la tanda B, con D18 y, si siguen separadas, la excepción a la regla 2 de `KEYWORDS.md` para la
  portada; si el dueño elige unir portada y pilar, este plan se detiene.
- Puertas antes de publicar la tanda B: B1 a B5 aplicadas, T3, D50 en `DECISIONES.md` (con la meta de D16), 2 semanas
  o más de línea base en GA4 y export de Search Console del día anterior; revisión a las 4 y 8 semanas de publicar.
- Verificación: `npm run verify` en verde (incluye 3 enlaces entrantes por página comercial), capturas a 390, 768 y
  1440, LCP, CLS y puntaje locales antes y después, ola 1 medida, primera pantalla visible sin JavaScript; después de
  publicar, `gh run watch`, `scripts/check-prod.sh`, medición en producción y reversión según D14.
<!-- /autoplan-accepted:ceo -->

<!-- autoplan-accepted:design -->
- Obligaciones aceptadas en la revisión de diseño (14-oct-2026); el detalle está en «Estructura propuesta» y en
  «Contrato de interfaz». Donde choquen con el bloque de la fase CEO, mandan estas.
- Destino del botón del héroe y de los botones repetidos según T4 (D20 y D21: `/contacto/?servicio=definir#formulario`;
  o `#formulario` de la misma página, como las 33 páginas v2); revisa la línea del héroe del bloque CEO.
- Héroe: bajada que dice para quién y cómo trabajamos, sin nombrar los servicios; WhatsApp en `ew-btn--ghost` con el
  mensaje «Hola, quiero cotizar un proyecto con Elemento Web.»; insignia de Meta en la píldora del pie enlazada a
  `/nosotros/`; los enlaces Panamá y Miami pasan a la respuesta citable.
- Captura del héroe con la composición `ew-dev` (navegador 4:3 sin recorte y celular superpuesto), `loading="eager"` y
  `fetchpriority="high"` solo en la de escritorio; en compacto un `<picture>` sirve solo la captura de celular en caja
  3:2; pie visible en voz de datos que enlaza al caso; la imagen no es enlace.
- B5 se divide en B5a (captura) y B5b (testimonio); sin captura autorizada, héroe de una columna con la franja de
  cifras bajo los botones.
- Riel en 6 columnas desde 1024 px, 3×2 entre 640 y 1023 px y 2×3 en compacto; relleno superior del héroe a la altura
  del menú más 24 px; la caja de la imagen empieza antes de 844 px a 390×844.
- Escenas (versión larga) en lista, una por fila del mapa y enlazadas a su URL principal.
- Filas del mapa con el componente «Fila de servicio», `id="mapa-<fila>"` y el precio en línea en voz de datos; sin
  hueco en las filas sin precio.
- «Así se vería» en 3 columnas desde 1024 px y 1 en lo demás, con datos de maquetas publicadas, `informe` con estados
  escritos y cada maqueta enlazada a su servicio.
- Proyectos: lista estática de 3 o 4 con `ew-dev` y enlace al caso, sin TramitaPa (ya en el héroe), sin esferas,
  malla, degradado ni acordeón, y sin «Diseño que desafía lo común» ni «convierten y escalan el negocio»; testimonio
  pegado a su proyecto; logos en rejilla estática; firma del fundador con el texto de `core.ts:197`.
- «Lo que no hacemos» sin la línea del dominio (queda en la comparación).
- Proceso con el bloque `steps` y el entregable de cada etapa; industrias como línea de enlaces de texto.
- Preguntas frecuentes de agencia con los 6 temas listados; encabezado del formulario «Cuéntanos qué necesitas
  resolver primero» con sus 3 líneas de apoyo.
- Botón repetido después de la prueba y del proceso, con `data-cta-loc`.
- Solo el héroe en marino; el resto alterna `surface` y `surface-alt`; la portada no se anima (sin marquee ni
  revelados) y todo es visible sin JavaScript.
- Tabla de estados del «Contrato de interfaz» implementada tal cual.
- Accesibilidad: recorrido por teclado, foco visible de 3 px, contraste AA medido de cada par nuevo, texto al 200 %,
  sin JavaScript; estados del formulario de la portada probados a 390 y 1440.
- Tanda A deja en la portada actual el H2 «Quién está detrás» con la tarjeta del fundador y tres insignias (sin
  «Equipo 100% interno»); si B3 = no, se corrige también la pregunta de `/nosotros/` en `core.ts:228`.
<!-- /autoplan-accepted:design -->

<!-- autoplan-accepted:eng -->
- Obligaciones aceptadas en la revisión de ingeniería (14-oct-2026); donde choquen con los bloques CEO o de diseño,
  mandan estas.
- Tanda A suma: retirar la afirmación de equipo interno también de `/nosotros/` y `/como-trabajamos/` (textos de
  `src/lib/pages/core.ts`); campo `propio: true` en `portfolio` para contar solo proyectos de clientes; `track.ts` toma
  el servicio del enlace antes que de `<main>`; `ContactForm` envía la clave del servicio en `cf:lead`; la regla de
  `cta_click` para `#formulario` excluye `/contacto/`; `effects.ts` enfoca el formulario y actualiza el hash tras el
  scroll a un ancla.
- Héroe en un componente nuevo `src/components/HeroProyecto.astro` con el modificador `ew-dev--hero`; `Ejemplo.astro`
  no cambia. `<source>` móvil con `width`, `height` y una versión de 780 px de 60 KB o menos; una sola constante para el
  corte; celular superpuesto `lazy` y oculto en compacto; `dark` en `Base`; `data-cta-loc="hero"` y
  `data-service="definir"` en los enlaces del héroe, no en `<main>`.
- `Base.astro` gana una opción para no cargar `effects.ts` en la portada; `track.ts` se sigue cargando.
- CSS compartido solo con modificadores (`.ew-rail--6`, `.ew-dev--hero`, `.ew-hero--home`); fondos alternos en lo
  posible; botón repetido como marcado propio después del bloque.
- Una sola estructura de datos en `src/lib/portada.ts` para mapa, riel, `ItemList`, bloque `faq` y FAQPage; el
  `ItemList` referencia por `@id` el nodo `<url>#servicio` de cada página; limpieza del FAQ unificada con `faqNode`.
- Precios leídos por clave con error si falta; `sinPrecio` sale de `precios.json`.
- Respuesta citable con los mismos hechos y NAP que el kit de autoridad, no el mismo texto.
- Medición por sesión con página de entrada `/` y `generate_lead` en cualquier página; la definición queda en D50.
- `ContactForm` gana WhatsApp y correo en el estado de red caída y un aviso `noscript`, en todas sus superficies.
- Maquetas de la versión larga con su enlace de texto debajo, dibujado por la portada.
- Proyectos con caso o, si no tiene, con enlace al sitio publicado; sin productos propios.
- Portada, snapshot de SEO y permisos en el mismo commit; reversión ensayada en una rama con `verify` en verde antes
  de publicar; si T3 = sí, `qa-a11y` sobre `/servicios/` y `/precios/` antes de subir `faseActual`.
- Pruebas nuevas en `verify`: frases bloqueadas en todo `dist/` (excepción `blog-4`, D11); precios de `/` por clave;
  IA sin $2,900 si B4 = no; peso de todas las fuentes de la imagen LCP; anclas `#formulario` válidas en `/`; `@id` del
  `ItemList` igual a las filas del mapa; posición de botón y pie en `qa-lcp`; `ContactForm` y foco tras el ancla en
  `qa-form`.
- S5 en el Planificador solo en lectura y sin crear campañas; con rangos amplios decide la SERP.
- Presupuesto con el cambio esperado anotado antes de construir y el máximo en lo medido más 3 % después.
<!-- /autoplan-accepted:eng -->
## Review record

### Fase 1 (CEO), paso 0. Modo: SELECTIVE EXPANSION (regla de /autoplan)

**Auditoría del sistema (14-oct-2026).** `main` en dd38640, sin ramas ni stash; el único archivo sin seguimiento es
este plan. Los últimos 15 commits son las olas del molde Kredit (33 páginas en v2, `exclusiones-marcador.json`
vacío). La portada tiene 751 líneas y 16 secciones (`index.astro:77` a `:728`). La plantilla «portada» mide hoy
58.077 B de JS tras quitar el Preloader. Sin documento de diseño de /office-hours para esta rama: la fuente es
`SPEC.md` 3 y `DECISIONES.md`. Sin `.gstack/ship-policy.json` (un push por tanda, D47).

**Panorama (búsqueda del 14-oct).** Capa 1: la primera pantalla dice qué haces; los servicios, cortos y con enlace a
su página; prueba con logos y casos. Capa 2: los listados de agencias de Panamá (Clutch, GoodFirms) tienen pocas o
ninguna reseña y algunos cobran por posición; casi ninguna agencia local publica precios ni una comparación
verificable. Capa 3: en un mercado sin reseñas confiables, la diferencia que se puede comprobar es precio publicado,
proyectos reales con captura propia y honestidad explícita («lo que no hacemos»). Fuentes:
[Clutch Panamá](https://clutch.co/pa/agencies/digital), [One Little Web](https://onelittleweb.com/?p=78810),
[Semrush, sitios de agencias](https://www.semrush.com/blog/marketing-agency-websites/).

**0A. Premisas.** El problema real: la portada vende solo web (H1 `index.astro:89`, description `index.astro:45`) y
es la puerta de entrada de los enlaces del kit de autoridad (`docs/autoridad/KIT-AUTORIDAD.md` apunta los directorios
a la raíz). Costo de no hacer nada: cada visita que traiga el frente de autoridad aterriza en una página que oculta 5
de los 6 servicios. Premisa corregida: el plan decía que la portada «posiciona»; la posición depende de autoridad
(D13, D15), así que el objetivo pasa a relevancia, conversión y citabilidad.

**0B. Código que se reutiliza.** Bloques v2 de `src/components/Blocks.astro` (`answer`, `ejemplos`, `compare`, `faq`,
`form`), maquetas de `Ejemplo.astro` (tipos `google`, `whatsapp`, `informe`: líneas 9, 68 y 200), el showcase y la
franja de cifras actuales, `homeJsonLd` de `src/lib/schema.ts`, los criterios de comparación de la pilar
(`diseno-web-panama.ts:80`), las páginas `/casos-de-exito/*` y las reglas reducidas del marcador para `home`
(`SCORECARD.md:42`, manifiesto `scripts/paginas-comerciales.json:13`).

**Filas de realidad.**

| Premisa | Afirmación del plan | Comprobante | Veredicto |
|---|---|---|---|
| P1 | La portada es la única comercial sin v2 | 33 páginas con `anatomia: 'v2'`; `paginas-comerciales.json:13` | pass |
| P2 | Title actual | `index.astro:44` | pass |
| P3 | H1 actual | `index.astro:89` | pass |
| P4 | Capturas propias en `/portfolio/*-800.webp` y `movil-*.webp`, 60 KB o menos | `ls`: 19,5 a 46,8 KB | pass |
| P5 | «Diseño web: desde $550» en el riel | `precios.json` web-landing 550; D20 y D26 prohíben cifras en el riel | finding (corregido) |
| P6 | «Mantenimiento: desde $99» en el riel | `precios.json` mantenimiento 99; no es uno de los 6 servicios del mapa | finding (corregido) |
| P7 | «IA: desde $2,900» | `ia-empresas.ts:38` confirmado; `precios.json` aún lista `ia` en `sinPrecio` | finding (dato viejo) |
| P8 | Mapa con fila de software propio | D19 y D20 la retiran | finding (corregido) |
| P9 | «No te amarramos con contrato» | `site.ts:308` y `precios.ts:145`: plan gestionado de 12 meses | finding (corregido) |
| P10 | «No revendemos plantillas» | `diseno-web-panama.ts:80` | pass |
| P11 | «No intermediamos tu inversión» | `marketing.ts:47` | pass |
| P12 | Maquetas web, Google, WhatsApp, reporte | `Ejemplo.astro:9,55,68,200` | pass |
| P13 | Cada escena enlaza a una página de servicio existente | no existe página de analítica; «qué canal trajo la venta» va a `/marketing/` (`marketing.ts:105`) | finding (corregido) |
| P14 | Presupuesto de la plantilla «portada» | `presupuestos.json`: CSS máx. 23.500 B, medido 22.744 B; el molde suma ~4.706 B | finding (corregido) |
| P15 | Puerta S5 | no hay archivo de S5 en `audit/`; solo GSC: «agencia de diseño web» 97 impresiones, posición 90,4 | finding (tarea nueva) |
| P16 | Lecciones de la landing de NousCRM | revisión en la conversación del 14-oct; sin archivo | unverified |
| P17 | Logos de clientes | no los menciona; `site.ts:404` «Confirmar autorización» | finding (Puerta B) |
| P18 | Description | no la menciona; `index.astro:45` solo nombra web | finding (corregido) |

```
REALITY: premise-table finding 18 premisas, 9 hallazgos corregidos o con tarea, unverified=1 src/pages/index.astro:89
REALITY: already-done pass origin/main desde el 14-oct solo trae dd38640 (arreglos rápidos), ya reconocido src/pages/index.astro:75
REALITY: surface-check pass npm run verify, scripts/medir.mjs, seo-congelado.mjs, validar-marcador.mjs y qa-responsive.mjs existen package.json:13
REALITY: binding-decisions finding el plan contradecía D19 (software en el mapa), D20 y D26 (riel con cifras) y D23 (precios del mapa); corregido docs/specs/rediseno-elementoweb/DECISIONES.md:149
REALITY: numbers pass precios [measured: src/data/precios.json], JS 58.077 B [measured: scripts/presupuestos.mjs, commit dd38640], LCP actual [re-measure before gate] scripts/presupuestos.json:9
REALITY: deferred-asks pass Google Partner, reseñas, fotos de equipo y «mide tu web» quedan en Fuera de alcance con motivo docs/specs/rediseno-elementoweb/PLAN-PORTADA.md:284
REALITY: pr-count pass un push a main con aprobación del dueño (D47), sin ship-policy docs/specs/rediseno-elementoweb/DECISIONES.md:246
```

**0C. Estado ideal.**
```
  HOY                               ESTE PLAN                          IDEAL A 12 MESES
  portada que vende solo web,  ---> agencia en la primera pantalla, ---> top 10 en «agencia de diseño web
  16 secciones, sin respuesta       mapa de 6 servicios, prueba         panamá» con autoridad real, casos con
  citable, logos y «100%            real, honestidad explícita,         cifras y permiso, reseñas de la ficha
  interno» sin confirmar,           FAQ y schema de agencia,            de Google, atribución de leads por
  FAQ de web                        afirmaciones confirmadas            servicio, insignia Google Partner
```

**0D. Enfoque (decidido por /autoplan).** A) portada a mano con los bloques nuevos copiados en el `.astro`;
B) portada híbrida: datos en un módulo (`src/lib/pages/portada.ts` o similar) que pasa por los bloques v2 existentes
para respuesta, maquetas, comparación, FAQ y formulario, y marcado propio solo para héroe, escenas, mapa y showcase;
C) mover la portada a la ruta `[...slug].astro` como `PageData` con bloques nuevos para todo. Decisión: **B** (P1: el
contrato FAQ visible = FAQPage y la fecha de la respuesta se validan solos; P4: no se duplica la lógica de bloques;
P5: no toca la ruta de 249 páginas). El diseño concreto de módulos lo cierra la fase de ingeniería.

**0E. Modo.** SELECTIVE EXPANSION, por la regla de /autoplan. Archivos estimados: 10 a 12 (portada, módulo de datos,
`schema.ts`, `Blocks.astro` o un componente nuevo, `types.ts`, `molde-kredit.css`, `presupuestos.json`,
`cambios-permitidos.json`, `precios.json`, pruebas). No new approach decision beyond 0D was needed.

**0F/0G. Revisión del alcance y candidatos.** Comprobaciones de alcance fijo: el núcleo de D20 (héroe, respuesta,
mapa, prueba, proceso, industrias, FAQ, formulario) es el mínimo; lo que el plan suma sobre D20 viene de la landing
de NousCRM. Candidatos (estado final tras las 3 rondas de revisión de especificación):

| # | Propuesta | Esfuerzo | Decisión | Motivo |
|---|---|---|---|---|
| E1 | Escenas «Por dónde se te van los clientes» | S | ACEPTADA, versión larga (T1) | P2: dentro del radio y menos de 1 día |
| E2 | «Así se vería» con 3 maquetas no web | S | ACEPTADA, versión larga (T1) | P4: la web ya sale en héroe y proyectos |
| E3 | «Lo que no hacemos», cada línea con fuente publicada | S | ACEPTADA, versión larga (T1) | P2; sin «sin contrato» ni «no retenemos tus accesos» |
| E4 | Comparación con el bloque `compare` según D28, 5 criterios con fuente | S | ACEPTADA, versión larga (T1) | reemplaza la versión con columnas de freelancer y Wix (ronda 1) |
| X1 | «Ver casos» en la fila de diseño web | S | ACEPTADA | P2: los 4 casos publicados son de web |
| X2 | Evento GA4 por clic en escena y fila del mapa | S | DIFERIDA a `TODOS.md` | P3: el diseño de eventos es de la fase 3 (ronda 1) |
| X3 | Barra fija en móvil (Cotizar y WhatsApp) | S | DIFERIDA a `TODOS.md` | no existe en el sitio; componente nuevo para todo el sitio (ronda 2) |
| X4 | Selector «¿qué necesitas?» en la portada | S | DESCARTADA | `SPEC.md` 3 lo manda a la pilar |
| X5 | Dirección y horario dentro de la respuesta citable | S | DESCARTADA | P4: ya están en el pie y en el schema |
| X6 | Proyecto del héroe que rota por visita | S | DESCARTADA | riesgo de CLS y LCP, sin beneficio medible |

**Decisiones de gusto para la puerta final.**
- **T1.** Largo de la portada: versión corta (9 secciones: el orden de D20 más lo ya aprobado por el dueño) o larga
  (13: la corta más escenas, maquetas, «lo que no hacemos» y comparación). Recomendación (cambiada tras las dos voces,
  V6): la corta, con 2 o 3 líneas de «lo que no hacemos» convertidas en preguntas frecuentes; las secciones extra
  alejan el formulario en el celular y, con 1 o 2 visitas orgánicas por semana, no habría forma de saber si ayudan.
  Aun así la corta es mucho más que la portada de hoy: proyecto real en el héroe, respuesta citable, mapa de la agencia
  y prueba. La primera recomendación era la larga, porque el dueño llamó «básica» a la portada actual.
- **T3.** Publicar la portada (2b) antes del formulario por servicio (fase 3), contra el orden de D19.
  Recomendación: sí, siempre que la tanda A ya esté publicada y `cta_click` midiendo (voz Claude M6): la fase 3
  depende del flujo de n8n y de WazaCRM, y la portada ya funciona con el `ContactForm` que mide `generate_lead`.
- (T2, barra fija en móvil, salió de la puerta: se difirió a `TODOS.md` en la ronda 2.)

**Preguntas del dueño (Puerta B, no se deciden solas).** B1: H1 tras S5 y D18. B2: los 26 logos. B3: equipo interno.
B4: precio de IA «desde $2,900». B5: captura y testimonio de TramitaPa.

**Desvío corregido.** La primera versión mandaba el botón del héroe a `#contacto`, contra D20 y D21. Desde la ronda 2
el botón va a `/contacto/?servicio=definir#formulario`, como fija D20.

**Ciclo de revisión de especificación (3 lanzamientos, tope alcanzado).**
- Ronda 1: 6/10, FAIL, 28 hallazgos. Los de más peso: el plan contradecía D20 (orden), D28 (comparación) y D4
  (precio de IA); el botón del héroe perdía `cta_click`; faltaban D18, D14 (CLS), D1 (export) y el enlace de la guía.
- Ronda 2: 6/10, FAIL, 27 hallazgos. Los de más peso: el desvío del botón no podía decidirlo /autoplan; T2 partía de
  un componente inexistente; el validador bloquea «equipo interno» y la construcción no podía conservarlo; unir portada
  y pilar no tenía camino; el orden de fases del manifiesto.
- Ronda 3: 7/10, FAIL, 17 hallazgos. Los de más peso: faltaba B5 (permiso de la captura); B4 = no dejaba $2,900 en
  cinco superficies de la página de IA; «no retenemos tus accesos» contradice el plan de 12 meses; `verify` no podía
  pasar sin permiso de H1; el arreglo de `cta_click` no debía esperar a la portada.
- Al tope: issues verified: 17 of 17 (ediciones comprobadas en el texto del plan, no veredicto de revisor). Métrica
  guardada en `spec-review.jsonl`: 3 iteraciones, 72 hallazgos, 17 pendientes al tope, puntaje 7.

**Registro de decisiones.**

| ID y dueño | Contrato y evidencia | Actual | Propuesto | Estado | Aprobación exacta y alcance |
|---|---|---|---|---|---|
| C1 enfoque (ingeniería) | 0D | — | B híbrido, `src/lib/portada.ts` | approved | auto /autoplan P1+P4+P5 |
| C2 riel | D20, D26 | riel con cifras | riel con nombres | approved | auto, decisión vinculante D20 |
| C3 mapa | D19, D20, D23 | 7 filas | 6 filas, precios confirmados | approved | auto, D19 y D23 |
| C4 «no hacemos» | `site.ts:308` | «sin contrato» | líneas con fuente, sin «accesos» | approved | auto, corrección de hecho (rondas 0 y 3) |
| C5 escenas | `marketing.ts:105` | escena sin página | escena → `/marketing/` | approved | auto, criterio de aceptación |
| C6 presupuesto CSS | D44 | 23.500 B | medido + 3 % | approved | auto, D44 |
| C7 S5 | D3, D18, R31 | sin tarea | tarea antes de publicar, con D18 | approved | auto, decisión vinculante |
| C8 description | `KEYWORDS.md:77` | solo web | la de `KEYWORDS.md:77` | approved | auto, `SPEC.md` 2 (cita corregida en la ronda 2) |
| C9 `precios.json` | `ia-empresas.ts:38` | `ia` en `sinPrecio` | depende de B4 | superseded | ronda 1: `sinPrecio` no tiene lector; ahora lo decide B4 |
| C10 destino del botón | D20, D21 | `/contacto/` | `/contacto/?servicio=definir#formulario` | approved | ronda 2: se cumple D20; reemplaza el `#contacto` del paso 0 |
| C11 objetivo | D13, D15 | «posiciona» | relevancia y conversión | approved | auto, corrección de premisa |
| C12 `track.ts` | `track.ts:29` | sin `cta_click` para `#formulario` | un `cta_click` por clic | approved | auto P1 (medición rota desde el 13-oct), tanda A |
| C13 guía de agencia | `KEYWORDS.md:20` | sin enlace a `/` | enlace «agencia de diseño web» | approved | auto P2, tanda A |
| C14 permiso de H1 | `seo-congelado.mjs` | solo `schema` en `/` | más `h1` «candidata D3» | approved | auto, sin esto `verify` no pasa (ronda 3) |
| C15 equipo | D20, `afirmaciones-bloqueadas.json` | sección de equipo | sin sección; `/nosotros/` desde la respuesta | approved | auto, D20 y el validador (rondas 2 y 3) |
| C16 logos | D20 | entre respuesta y mapa | dentro de proyectos | approved | auto, orden de D20 (ronda 3) |
| C17 imagen del héroe | D7, D45 | — | 800×600, sin variante de más de 60 KB | approved | auto, ronda 3 |
| E1-E4, X1 | 0G | — | aceptadas | approved | auto P2 (E1-E4 sujetas a T1) |
| X2, X3 | 0G | — | diferidas | deferred | `TODOS.md` (rondas 1 y 2) |
| T1, T3 | 0G, D19 | — | recomendadas | unresolved | puerta final |
| T2 | 0G | — | — | superseded | diferida a `TODOS.md` en la ronda 2 |
| B1-B5 | Puerta B | — | — | unresolved | dueño: H1 y D18, logos, equipo interno, precio de IA, captura y testimonio |

**Obligaciones aceptadas en la fase CEO.**

<!-- autoplan-baseline-edits:ceo {"sourceSha256":"392cbdd451a2a69a9e9ab2913f97bb35a7a8f4a2b030b36ee3ace52ecdb0356a","replacements":[{"oldText":"### Estructura propuesta (en orden)\n\n1. **Héroe de agencia.** H1 de agencia (redacción final del dueño: puerta S5 y D3; candidatos abajo), bajada de 15 a\n   20 palabras que nombra los servicios, botón primario «Cotizar mi proyecto» que baja al formulario de la misma\n   página (`#contacto`, como los hubs ya publicados), WhatsApp como secundario, y a la derecha un proyecto real del\n   portafolio ya publicado en escritorio y celular (capturas propias existentes en `/portfolio/*-800.webp` y\n   `/images/ejemplos/movil-*.webp`, con `width`, `height`, `fetchpriority=\"high\"` en la primera y 60 KB o menos cada\n   una). Debajo, el riel con los **nombres** de los 6 servicios, sin cifras (D20, D26), cada uno enlazado a su página.\n   Cabe en la primera pantalla a 1440×900 y el botón principal queda dentro de 844 px a 390×844. En móvil el orden es\n   H1, bajada, botón, WhatsApp, imagen (caja reservada, debajo del botón, D27) y riel.\n2. **Franja de cifras** (ya existe).\n3. **Tira de logos de clientes** (ya existe): se publica solo si el dueño confirma por escrito que los 26 logos son\n   clientes reales con permiso (Puerta B, D3; `src/lib/site.ts:404` lo marca «Confirmar autorización»). La\n   construcción la conserva; sin confirmación se retira antes de publicar.\n4. **Respuesta citable con fecha** (40 a 60 palabras): quiénes somos, dónde (Ciudad de Panamá; Miami remoto), qué\n   hacemos y cómo cobramos (`SPEC.md` 3.2), con el rótulo «Actualizado el DD/MM».\n5. **«Por dónde se te van los clientes»:** seis escenas que el dueño reconoce, cada una enlazada a una página\n   existente que la resuelve: la web no carga en el celular (`/diseno-web-panama/`); Google no te encuentra\n   (`/crecimiento/seo-posicionamiento-web-panama/`); nadie contesta el WhatsApp de noche\n   (`/funcionalidades/chatbots-ia-web-wazacrm-panama/`); la pauta llega a una página que no convierte\n   (`/servicios/landing-pages-alta-conversion-panama/`); las cotizaciones se olvidan\n   (`/marketing/automatizaciones-n8n-panama/`); no sabes qué canal trajo la venta (`/marketing/`, que configura la\n   medición de conversiones antes de pautar, `src/lib/pages/marketing.ts:105`).\n6. **Mapa de servicios (corazón, `SPEC.md` 3.1, D19, D20):** 6 filas, no tarjetas iguales: diseño web, tiendas\n   online, SEO y SEO local, publicidad en Google y Meta, WhatsApp marketing, IA y automatización. Cada fila: qué\n   resuelve, para quién, enlace principal a su página y precio de partida solo si está **confirmado** en\n   `src/data/precios.json` (D23): diseño web «desde $550», tiendas «desde $1,950», IA «desde $2,900»; SEO, publicidad\n   y WhatsApp sin cifra. Donde exista un caso publicado en `/casos-de-exito/`, la fila lo enlaza como «Ver un caso».\n   El software propio (WazaCRM, NousCRM, Cifrao) sale del mapa y queda como enlace secundario (D19, D20).\n7. **«Así se vería»:** tres maquetas del molde (`src/components/Ejemplo.astro`) para los servicios que no son web:\n   un resultado de Google, una conversación de WhatsApp y el reporte del mes. Nota de ejemplo obligatoria, sin logos de\n   terceros (D44). La web no se repite aquí: ya la muestran el héroe y los proyectos.\n8. **Proyectos reales** (el showcase actual se queda como prueba, con captura propia y enlace a su caso cuando\n   exista).\n9. **«Lo que no hacemos»**, cada línea respaldada por una página publicada: no revendemos plantillas\n   (`diseno-web-panama.ts:80`); no prometemos el primer lugar en Google; no intermediamos tu inversión publicitaria\n   (`marketing.ts:47`); no retenemos tu dominio, tu código ni tus accesos (`core.ts:109`); no publicamos cifras de\n   clientes sin su permiso (D24). No se escribe «no te amarramos con contrato»: el plan gestionado es de 12 meses\n   (`site.ts:308`, `precios.ts:145`).\n10. **Comparación verificable:** agencia frente a freelancer y frente a una plataforma tipo Wix, con 4 criterios o más\n    que se pueden comprobar (D28: precio publicado, quién es dueño del dominio y del código, qué pasa si el proveedor\n    desaparece, soporte, costo del primer año). Un precio ajeno solo se cita con su URL pública y su fecha; si no, el\n    criterio es cualitativo.\n11. **Proceso en 4 etapas** (se queda, con entregables verificables).\n12. **Industrias** compactas, con enlace a `/industrias/`.\n13. **Equipo:** solo personas con permiso; «Equipo 100% interno» (`index.astro:655`) se publica solo si el dueño lo\n    confirma por escrito (D48, Puerta B); si no, se retira.\n14. **Preguntas frecuentes de agencia** (6 o más), el mismo texto en el schema FAQPage.\n15. **Formulario** dentro de la página, con el cierre de agencia como encabezado (reemplaza al CTA intermedio).\n\nSalen de la portada: «¿Qué necesita tu negocio ahora?», el bloque de precios y «Sin letra chica» (ya viven completos\nen la pilar y en `/precios/`); «Soluciones» (lo reemplaza el mapa); «IA y automatización» como sección aparte (entra al\nmapa, `SPEC.md` 3); el bloque de SaaS (pasa a enlace secundario, D20); el CTA intermedio (pasa a encabezado del\nformulario).\n\n### Datos estructurados y SEO\n\n- Title se conserva («Agencia de Diseño Web en Panamá | Elemento Web»). El H1 cambia solo con aprobación del dueño.\n- La description deja de nombrar solo web («Páginas corporativas, tiendas online y landing pages») y nombra la agencia\n  (web, tiendas, SEO, publicidad, WhatsApp e IA); `KEYWORDS.md:82` ya prevé este cambio.\n- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (con dirección, horario y mapa desde el 14-oct) y un\n  `ItemList` de `Service` con los servicios del mapa y sus URL, sin `Offer` (R37). FAQPage derivado del bloque visible.\n- La portada emite `data-page-type=\"home\"` y entra al marcador con sus reglas reducidas; permisos de SEO congelado\n  (`scripts/cambios-permitidos.json`) para description, schema y, cuando se apruebe, el H1.\n- `src/data/precios.json` deja de listar `ia` en `sinPrecio`: la página de IA publica «desde $2,900» confirmado\n  (el piso de `web-medida`).\n\n### Candidatos de H1 (decide el dueño)\n\n- «Agencia de diseño web en Panamá que te trae clientes» (propuesta de `SPEC.md`).\n- «Agencia de diseño web en Panamá: webs, SEO y publicidad que traen clientes».\n- Mantener «Diseño web en Panamá que convierte visitas en consultas» (no nombra la agencia).\n\n### Puerta S5 (antes de publicar, D3, D18, R31)\n\nRevisión de la SERP de «agencia de diseño web» y de «diseño web panama» (los 5 primeros resultados) y volumen en el\nPlanificador de palabras clave, con la sesión de Google Ads del dueño en Chrome. Se anota en\n`audit/s5-agencia-diseno-web-2026-10.md` y el dueño elige el H1 viéndolo. No bloquea construir; bloquea publicar.\n\n### Restricciones\n\n- Solo Roboto (fuente autoalojada). Colores y espaciado de `DESIGN.md` y del molde (`src/styles/molde-kredit.css`).\n- Presupuesto de JS y CSS de la plantilla «portada» en `scripts/presupuestos.json`; LCP de 2,5 s o menos. La hoja del\n  molde en línea suma unos 4,7 KB de CSS: el máximo de la portada sube a lo medido más 3 %, con ese motivo (D44), como\n  se hizo con los hubs y `/precios/`.\n- Nada con `opacity: 0` en la primera pantalla ni en el elemento LCP; el contenido es visible sin JavaScript.\n- Sin calificaciones ni reseñas inventadas (no hay reseñas aún); Google Partner solo con el código oficial de la\n  insignia; «Tech Provider verificado por Meta» con ese nombre (D48).\n- Riel sin cifras (D20, D26); precios del mapa según la matriz de D23.\n- Responsivo y accesible según D27: 390, 768 y 1440; toques de 44 px; encabezados de tabla en la comparación.\n- `npm run verify` en verde, marcador y SEO congelado incluidos; cada push lo aprueba el dueño (D47).\n\n### Criterios de aceptación\n\n- Héroe completo en la primera pantalla a 1440×900; botón principal dentro de 844 px a 390×844.\n- Respuesta citable de 40 a 60 palabras con fecha; FAQPage igual al bloque visible.\n- Cada escena y cada fila del mapa enlaza a una página existente; la portada enlaza a todas las del mapa.\n- Ningún precio que no esté confirmado en `precios.json`; ninguna afirmación bloqueada; riel sin cifras.\n- LCP medido en local con `scripts/medir.mjs` y comparado contra la portada actual.\n- Capturas a 1440×900 y 390×844 antes de pedir aprobación para publicar.\n- Antes de publicar: S5 anotada en `audit/`, H1 aprobado por el dueño, y respuesta del dueño sobre los logos y\n  «Equipo 100% interno» (lo no confirmado se retira).\n\n### Fuera de alcance\n\n- Insignia de Google Partner (pendiente del código oficial).\n- Reseñas y casos con cifras (pendientes de autorización de clientes).\n- Fotos del equipo (pendientes de permiso).\n- La herramienta pública «mide tu web» (`TODOS.md`).\n","newText":"### Estructura propuesta (en orden)\n\nEnfoque de construcción (decidido en la revisión CEO, 0D): portada híbrida. Un módulo de datos en `src/lib/portada.ts`\n(fuera de `src/lib/pages/`, para que la ruta `[...slug].astro` no lo publique como página) alimenta los bloques v2\nexistentes de `src/components/Blocks.astro`, llamados uno por uno con `v2` e intercalados con el marcado propio de\n`src/pages/index.astro`: respuesta citable (`[data-block=\"answer\"]` con `.ew-answer`, que lee el validador), maquetas\n(`ejemplos`), comparación (`compare`) y preguntas (`faq`). Héroe, escenas, mapa y proyectos llevan marcado propio. La\nhoja `src/styles/molde-kredit.css` va en línea como en `[...slug].astro:14,53`. La ruta `[...slug].astro` no se toca.\n\nDos versiones, que el dueño elige en la puerta final (T1):\n- **Corta** (el orden de D20 más lo que el dueño ya aprobó después): secciones 1, 2, 3, 5, 7, 10, 11, 12 y 13\n  (9 secciones).\n- **Larga** (este plan): la corta más las secciones marcadas [Larga]: 4, 6, 8 y 9 (13 secciones).\n\nDos tandas de publicación:\n- **Tanda A**, independiente del rediseño, se puede publicar en cuanto el dueño apruebe el push (voces Claude C1 y H3):\n  - el arreglo de `cta_click` en `track.ts` con su prueba y su documentación;\n  - el enlace de la guía de agencia a la portada;\n  - en la portada **actual**, retirar ya lo que no está confirmado: la tira de 26 logos sin nombre\n    (`index.astro:155-170`) y toda la afirmación de equipo interno (`index.astro:650-655`); vuelven solo con B2 y B3;\n  - en la franja de cifras actual, «proyectos publicados» cuenta solo proyectos de clientes: `portfolio.length` (11)\n    incluye WazaCRM, que es producto propio y ya cuenta en «productos propios».\n- **Tanda B**: la portada nueva. Antes de construirla: S5 (ver su sección) y la puerta final con T1, T3 y B1 a B5;\n  antes de publicarla, además, la línea base de medición (ver «Medición y éxito»). Se construye **solo la rama elegida** de cada decisión; las\n  ramas que se describen abajo existen para que la puerta final sepa qué implica cada respuesta.\n\n1. **Héroe de agencia.**\n   - H1: la construcción usa la candidata de `KEYWORDS.md:77`, «Agencia de diseño web en Panamá que convierte visitas\n     en consultas» (D3: se construye con la propuesta; el dueño decide la definitiva al publicar, tras S5). Para que\n     `npm run verify` pase antes de esa decisión, `scripts/cambios-permitidos.json` gana el campo `h1` en la entrada de\n     `/` con el motivo «candidata D3, pendiente de S5»; si el dueño elige otra candidata se actualiza el motivo, y si\n     elige el respaldo se quita el permiso.\n   - Bajada de 15 a 20 palabras que nombra los servicios.\n   - Botón primario «Cotizar mi proyecto» a `/contacto/?servicio=definir#formulario` (D20, D21); `track.ts` ya envía\n     `cta_click` con `service=definir` para ese enlace. WhatsApp como secundario.\n   - Insignia con el texto literal «Tech Provider verificado por Meta» (D48), en lugar del par actual «Verificado por\n     Meta / Tech Provider» (`index.astro:104-106`). Los enlaces de mercado Panamá y Miami (`index.astro:99-103`) se\n     quedan como enlaces de texto. El botón «Ver proyectos reales» (`index.astro:97`) sale: la captura del héroe enlaza\n     al caso.\n   - A la derecha, un proyecto real ya publicado en escritorio y celular: **TramitaPa** (cliente externo con caso en\n     `/casos-de-exito/tramitapa/`), sujeto al permiso B5. Escritorio: `src=\"/portfolio/tramitapa-800.webp\"`,\n     `width=\"800\" height=\"600\"`, `srcset` con `tramitapa-480.webp` (19,5 KB, 480×360) y `tramitapa-800.webp` (42,5 KB),\n     `sizes` como en `PortadaServicio.astro:39-41` y `fetchpriority=\"high\"`. `tramitapa-1200.webp` (74,5 KB) no entra;\n     se intenta una versión de 1200 px de 60 KB o menos con `scripts/optimize-images.mjs`, y si no baja de 60 KB se\n     acepta que en pantallas 2x la captura se vea menos nítida. Celular: `movil-tramitapa.webp`, 390×844, 22,5 KB, con\n     `width` y `height`.\n   - Si B5 = no: el héroe usa el proyecto que el dueño autorice; sin ninguno, va sin captura.\n   - Debajo, el riel con los **nombres** de los 6 servicios del mapa, sin cifras (D20, D26), cada uno enlazado a la URL\n     principal de su fila.\n   - A 1440×900 se ven sin desplazarse H1, bajada, botón, WhatsApp, insignia y captura; el riel y la franja pueden\n     quedar debajo. A 390×844 el botón principal queda dentro de los 844 px. En móvil el orden es H1, bajada, botón,\n     WhatsApp, insignia, imagen (debajo del botón, caja 3:2 reservada con fondo `primary`, D27; la captura 4:3 se\n     recorta con `object-fit: cover` y `object-position: top`), riel y enlaces de mercado.\n2. **Franja de cifras**, como borde inferior de la banda del héroe (aprobada y publicada por el dueño el 14-oct en\n   dd38640; conserva «desde $550» y su enlace a `/saas/`, `index.astro:151`, desvíos de D20 que el dueño aprobó al\n   publicarla). «Proyectos publicados» cuenta solo proyectos de clientes (tanda A).\n3. **Respuesta citable con fecha** (40 a 60 palabras), inmediatamente después de la banda del héroe (`SPEC.md` 3.2,\n   D20): quiénes somos (con enlace a `/nosotros/`, destino de las preguntas GEO 18 y 20 de `KEYWORDS.md:101-102`, que\n   hoy enlaza la sección de equipo en `index.astro:664`), dónde (Ciudad de Panamá; Miami remoto), qué hacemos y cómo\n   cobramos, con el rótulo «Actualizado el DD/MM». Usa la misma descripción de la entidad que la ficha de Google y los\n   directorios (`docs/autoridad/KIT-AUTORIDAD.md`, sección 1), para que los motores la lean igual en todas partes.\n4. **[Larga] «Por dónde se te van los clientes»:** seis escenas, cada una enlazada a una página existente que la\n   resuelve: la web no carga en el celular (`/diseno-web-panama/`); Google no te encuentra\n   (`/crecimiento/seo-posicionamiento-web-panama/`); nadie contesta el WhatsApp de noche\n   (`/funcionalidades/chatbots-ia-web-wazacrm-panama/`); la pauta llega a una página que no convierte\n   (`/servicios/landing-pages-alta-conversion-panama/`); las cotizaciones se olvidan\n   (`/marketing/automatizaciones-n8n-panama/`); no sabes qué canal trajo la venta (`/marketing/`, que configura la\n   medición de conversiones antes de pautar, `src/lib/pages/marketing.ts:105`).\n5. **Mapa de servicios (corazón, `SPEC.md` 3.1, D19, D20):** 6 filas, no tarjetas iguales. URL principal de cada\n   fila (la que usan el riel y el `ItemList`) y, entre paréntesis, los enlaces secundarios dentro de la fila:\n   diseño web `/diseno-web-panama/` («Ver casos», a `/casos-de-exito/`, y «¿Ya tienes web? Rediseño», a\n   `/servicios/redisenio-web-panama/`, que reemplaza el camino para quien ya tiene web que hoy dan el selector y el CTA\n   intermedio, `index.astro:466` y `:562`); tiendas online `/servicios/tiendas-online-ecommerce-panama/`; SEO y SEO\n   local `/crecimiento/seo-posicionamiento-web-panama/` (`/crecimiento/seo-local-google-maps-panama/`); publicidad en\n   Google y Meta `/marketing/google-ads-panama/` (`/marketing/facebook-instagram-ads-panama/`); WhatsApp marketing\n   `/marketing/whatsapp-marketing-masivo-panama/`; IA y automatización `/inteligencia-artificial-para-empresas-panama/`\n   (`/marketing/automatizaciones-n8n-panama/`).\n   Cada fila: qué resuelve, para quién y precio de partida leído de `src/data/precios.json` solo si está confirmado\n   (D23): diseño web «desde $550» (`confirmados.web-landing`), tiendas «desde $1,950» (`confirmados.web-ecommerce`);\n   SEO, publicidad y WhatsApp sin cifra (sus precios propuestos de D4 no salen en la portada). IA según la pregunta B4:\n   - B4 = sí: se agrega `confirmados.ia` (2900, fuente `src/lib/pages/ia-empresas.ts`), se quita `ia` de\n     `sinPrecio` y la fila dice «desde $2,900».\n   - B4 = no: la fila va sin cifra y la página de IA pasa a estado `cotizado` con la redacción literal de D23\n     («Cotización cerrada por escrito» y el plazo) en todas las superficies donde hoy dice $2,900: respuesta citable\n     (`ia-empresas.ts:32`), precio y plazo de la portada (`:38`, sale su `Offer`), introducción de alcance (`:117`),\n     fila de la comparación (`:176`), pregunta frecuente (`:188`, que alimenta el FAQPage) y `public/llms.txt:58`; el\n     permiso de su ruta en `scripts/cambios-permitidos.json` cambia de motivo y suma `schema`.\n   El software propio se queda en la columna «Nuestros SaaS» del pie (`Footer.astro:22`, D20) y en el enlace de la\n   franja de cifras (sección 2); los enlaces entrantes de D36 siguen sobrados (`saas` 10, `saas/nouscrm` 8,\n   `saas/cifrao` 6).\n6. **[Larga] «Así se vería»:** tres maquetas del molde (`src/components/Ejemplo.astro`) para servicios que no son\n   web: un resultado de Google, una conversación de WhatsApp y el reporte del mes. Nota de ejemplo obligatoria, sin\n   logos de terceros, y ninguna maqueta afirma un resultado (D44): el reporte muestra qué se mide, sin cifras de mejora.\n   La web no se repite aquí: ya la muestran el héroe y los proyectos.\n7. **Proyectos reales y clientes** (prueba, D20):\n   - El showcase actual se queda, con captura propia y enlace a su caso cuando exista. El testimonio de TramitaPa\n     (`index.astro:409-415`, también en `src/lib/pages/casos.ts:65`) se publica solo con el permiso B5, que cubre\n     también la página del caso: el cliente aprueba la frase tal cual o una que no implique un resultado, porque\n     «las consultas se multiplicaron» convive con «Todavía no publicamos cifras de este proyecto» (`casos.ts:66`). Es\n     un testimonio, sin schema `Review` ni `AggregateRating`.\n   - La tira de logos (retirada de la portada actual en la tanda A) vuelve aquí, junto a los proyectos, solo con B2:\n     los logos que el dueño confirme por escrito, cada uno con el nombre del cliente como `alt`; con menos de 4\n     confirmados la tira no va.\n   - Una línea de responsabilidad del fundador: nombre y rol tal como ya están publicados en `/nosotros/`\n     (`core.ts:197`), con enlace a esa página; la foto solo si el dueño la quiere (voz Claude M2).\n8. **[Larga] «Lo que no hacemos»**, cada línea respaldada por una página publicada: no revendemos plantillas\n   (`src/lib/pages/diseno-web-panama.ts:80`); no prometemos el primer lugar en Google\n   (`src/lib/pages/crecimiento.ts:314`, `core.ts:86`); no intermediamos tu inversión publicitaria (`marketing.ts:47`);\n   tu dominio se registra a nombre de tu empresa (`site.ts:307`, `precios.ts:145`); no publicamos cifras de clientes\n   sin su permiso (`/casos-de-exito/tramitapa/`, `casos.ts:66`: «Todavía no publicamos cifras de este proyecto»). No\n   se escribe «no te amarramos con contrato» ni «no retenemos tus accesos»: en el plan gestionado de 12 meses los\n   accesos se entregan al liquidar las cuotas pendientes (`site.ts:308`, `precios.ts:145`).\n9. **[Larga] Comparación verificable (D28):** el bloque `compare` existente con `otraCotizacion: true` (columna «tu\n   otra cotización» en blanco) y la línea «Qué preguntar a cualquier proveedor» dentro de `intro` (sin campo nuevo en\n   el bloque compartido). Criterios, cada uno con enlace a su fuente: precios publicados (`/precios/`,\n   `precios.ts:29`); cotización cerrada por escrito (`/precios/`, `precios.ts:18`); plazo por escrito, de 5 días\n   hábiles a 5 semanas (`/precios/`, `precios.ts:42`); dominio a nombre de tu empresa (`/precios/`, `precios.ts:145`);\n   respuesta el mismo día hábil (`/contacto/`, `core.ts:257`). Sin columnas de freelancer ni de plataformas: sin\n   fuente verificable serían generalizaciones.\n10. **Proceso en 4 etapas** (se queda, con entregables verificables).\n11. **Industrias** compactas, con enlace a `/industrias/`.\n12. **Preguntas frecuentes de agencia** (6 o más), el mismo texto en el schema FAQPage.\n13. **Formulario** dentro de la página (`#formulario`), con el cierre de agencia como encabezado (reemplaza al CTA\n    intermedio). Según T3:\n    - T3 = sí (la portada sale antes de la fase 3): lleva el `ContactForm` actual; en\n      `scripts/paginas-comerciales.json` el orden pasa a `[\"1\", \"2a\", \"2b\", \"3\", \"4\", \"5\"]` y `faseActual` a `\"2b\"`.\n    - T3 = no: la portada espera a la fase 3 y sale con `ServiceForm` con la clave `definir`.\n    - En los dos casos, cuando `ServiceForm` se active, la portada lo usa con `definir`.\n\nSección de equipo: no va, por el orden de D20 (que no la incluye); `SPEC.md` 3 la mantenía solo con personas con\npermiso. La afirmación de equipo interno ya sale de la portada actual en la tanda A: el título «equipo panameño de verdad»\n(`index.astro:650`), «Equipo 100% interno. No subcontratamos…» (`:651`) y la insignia (`:655`), porque\n`scripts/afirmaciones-bloqueadas.json` bloquea «100% interno» y «equipo interno» en toda página que emite\n`data-page-type`. Si el dueño la confirma por escrito (B3), se quitan esas frases de la lista bloqueada (lo que las\ndesbloquea en todo el sitio) y la afirmación vuelve como una insignia «Equipo 100% interno» junto a la de Meta en el\nhéroe.\n\nSalen de la portada: «¿Qué necesita tu negocio ahora?», el bloque de precios y «Sin letra chica» (ya viven completos\nen la pilar y en `/precios/`); «Soluciones» (lo reemplaza el mapa); «IA y automatización» como sección aparte (entra al\nmapa, `SPEC.md` 3); el bloque de SaaS (queda en el pie, D20); la sección de equipo; el CTA intermedio (pasa a\nencabezado del formulario); el botón «Ver proyectos reales» del héroe.\n\nFuera de la portada (tanda A, salvo `llms.txt`):\n- Arreglo de una medición rota, no diseño de eventos de la fase 3: desde el 13-oct los botones de los hubs y de las\n  páginas de servicio bajan a `#formulario` y `src/scripts/track.ts:29` solo cuenta `cta_click` para enlaces que\n  empiezan con `/contacto/`, así que esos clics no se registran. Regla nueva: un enlace cuyo `href` es exactamente\n  `#formulario` envía `cta_click` con `location` y el servicio de `<main data-service>` si existe; los enlaces a\n  `/contacto/…#formulario` siguen por la rama actual, sin doble conteo. Se actualiza `docs/event-dictionary.md` y\n  `scripts/qa-form.mjs` gana un caso que hace clic en un enlace `#formulario` de `/qa-fixture/formulario/` (si esa\n  página no tiene uno, se le agrega) y comprueba el evento.\n- La guía `/blog/como-elegir-agencia-diseno-web-panama/` (`src/lib/pages/blog-1.ts`), que hoy recibe 94 de las 97\n  impresiones de «agencia de diseño web», enlaza a la portada con el texto «agencia de diseño web» (`KEYWORDS.md:20`).\n- `public/llms.txt` (con la tanda B): el resumen de la agencia se alinea con la nueva respuesta citable.\n\n### Datos estructurados y SEO\n\n- Title se conserva («Agencia de Diseño Web en Panamá | Elemento Web»). El H1 cambia solo con aprobación del dueño.\n- Description: la ya aprobada en `KEYWORDS.md:77` («Agencia de diseño web en Panamá: sitios corporativos, tiendas\n  online y landing pages, con SEO, Google Ads y WhatsApp. Pide tu cotización.»), que `scripts/keywords.test.mjs` ya\n  valida en largo.\n- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (con dirección, horario y mapa desde el 14-oct) y un\n  `ItemList` de 6 `Service`, uno por fila del mapa con su URL principal, sin `Offer` (R37). FAQPage derivado del bloque\n  visible.\n- La portada emite `data-page-type=\"home\"` y entra al marcador con sus reglas reducidas; permisos de SEO congelado\n  (`scripts/cambios-permitidos.json`) para description, schema y H1 (este con el motivo de la sección 1).\n\n### Candidatos de H1 (decide el dueño)\n\nLas tres primeras prometen un resultado («convierte», «trae clientes») que hoy no tiene cifras publicadas que lo\nrespalden (voz Codex); la cuarta no promete nada.\n- «Agencia de diseño web en Panamá que convierte visitas en consultas» (`KEYWORDS.md:77`; la que usa la construcción).\n- «Agencia de diseño web en Panamá que te trae clientes» (propuesta de `SPEC.md`).\n- «Agencia de diseño web en Panamá: webs, SEO y publicidad que traen clientes».\n- «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp».\n- Respaldo si el dueño no aprueba ninguna: mantener «Diseño web en Panamá que convierte visitas en consultas» y cerrar\n  el cambio solo con la description (`KEYWORDS.md:82`); no nombra la agencia y usa la palabra de la pilar.\n\n### Puerta S5 (antes de construir la tanda B, D3, D18, R31)\n\nLas dos voces de la fase CEO piden adelantarla: es lo único barato que puede invalidar la arquitectura. Revisión de la\nSERP de «agencia de diseño web» y de «diseño web panama» (los 5 primeros resultados de cada una; la hace Claude antes\nde la puerta final) y volumen en el Planificador de palabras clave (con la sesión de Google Ads del dueño en Chrome,\ncuando él la abra). Se anota en `audit/s5-agencia-diseno-web-2026-10.md`. Si portada y pilar siguen separadas,\n`KEYWORDS.md` anota una excepción explícita a su regla 2 para la portada: su title y su H1 contienen «diseño web en\nPanamá», la frase reservada a la pilar, y `keywords.test.mjs` hoy no lo comprueba. Con eso el dueño decide el H1 y,\nsi las dos SERP son casi iguales, si la portada y la pilar siguen separadas (D18). Si elige unirlas, este plan se\ndetiene: unir las dos URL exige redirección o canónica y enmendar D36, que congela title, H1 y canónica de la pilar, y\neso va en un plan nuevo. S5 bloquea construir la tanda B (V2), no la tanda A.\n\n### Puerta B de la portada (D3, D19)\n\n- B1: H1 (tras S5) y la decisión de D18.\n- B2: los 26 logos (cuáles son clientes con permiso).\n- B3: la afirmación de equipo interno.\n- B4: precio de IA «desde $2,900».\n- B5: permiso para usar la captura de TramitaPa en el héroe y su testimonio (D3, D25).\n- Los precios propuestos de D4 (D19) no salen en la portada, así que no bloquean esta tanda; su confirmación sigue\n  pendiente para las páginas que los publican.\n- Tras las respuestas, `DECISIONES.md` gana una D50 con T1, T3 y B1 a B5; si T3 = sí, se actualizan el orden de fases\n  en `SCORECARD.md:8` y en la tabla de D1.\n\n### Medición y éxito\n\n- Línea base: con el arreglo de la tanda A ya midiendo, 2 a 4 semanas de la portada actual en GA4 antes de publicar la\n  nueva: sesiones de `/`, `cta_click` y `click_whatsapp` por sesión, `form_start` y `generate_lead` con página `/`.\n- Revisión a las 4 y a las 8 semanas de publicar, con ventanas equivalentes.\n- Meta de consultas por mes (D16) escrita en D50, aunque sea pequeña.\n- Con tan poco volumen, una señal cualitativa: en cada consulta, Nicole anota si la persona vio la web y qué la\n  convenció; el embudo de consulta a reunión a cierre vive en WazaCRM y NousCRM, fuera de este repositorio.\n- La portada no atrae tráfico por sí sola: el éxito depende de una fuente de tráfico con fecha (ver el desafío UC1 de\n  la puerta final).\n\n### Restricciones\n\n- Solo Roboto (fuente autoalojada). Colores y espaciado de `DESIGN.md` y del molde (`src/styles/molde-kredit.css`).\n- Presupuesto de JS y CSS de la plantilla «portada» en `scripts/presupuestos.json`. La hoja del molde en línea suma\n  unos 4,7 KB de CSS: el máximo de la portada sube a lo medido más 3 %, con ese motivo (D44), como se hizo con los hubs\n  y `/precios/`.\n- Rendimiento (D14, D47): LCP de 2,5 s o menos, CLS de 0,02 o menos y Lighthouse móvil local de 90 o más (PageSpeed\n  Insights cuando exista la clave). Ninguna variante que el navegador pueda elegir para la imagen LCP pesa más de 60 KB.\n- Nada con `opacity: 0` en la primera pantalla ni en el elemento LCP; el contenido es visible sin JavaScript.\n- Sin calificaciones con schema; el único testimonio es el de TramitaPa (B5). Google Partner solo con el código oficial\n  de la insignia; «Tech Provider verificado por Meta» con ese nombre (D48).\n- Riel sin cifras (D20, D26); precios del mapa según la matriz de D23.\n- Responsivo y accesible según D27: 390, 768 y 1440; toques de 44 px; encabezados de tabla en la comparación.\n- Enlaces entrantes de contenido: cada página comercial conserva 3 o más (D36); el validador lo comprueba.\n- `npm run verify` en verde, marcador y SEO congelado incluidos; cada push lo aprueba el dueño (D47).\n\n### Criterios de aceptación\n\n- A 1440×900 se ven H1, bajada, botón, WhatsApp, insignia y captura; a 390×844 el botón principal queda dentro de\n  844 px.\n- Respuesta citable de 40 a 60 palabras con fecha, inmediatamente después de la banda del héroe y con enlace a\n  `/nosotros/`; FAQPage igual al bloque visible.\n- Cada escena y cada fila del mapa enlaza a una página existente; la portada enlaza a todas las del mapa.\n- Ningún precio que no esté confirmado en `precios.json`; ninguna afirmación bloqueada; riel sin cifras.\n- Un clic en «Cotizar mi proyecto» envía `cta_click` con `service=definir`; un clic en un enlace `#formulario` envía\n  un solo `cta_click` (caso nuevo en `scripts/qa-form.mjs`).\n- LCP, CLS y puntaje medidos en local con `scripts/medir.mjs` y comparados contra la portada actual; las páginas de la\n  ola 1 tienen su medición en `src/data/mediciones.json` antes de publicar la portada (D14).\n- Capturas a 390, 768 y 1440 de ancho antes de pedir aprobación para publicar.\n- Antes de construir la tanda B: S5 anotada en `audit/` y la puerta final respondida (T1, T3, B1 a B5).\n- Antes de publicar la tanda B: B1 a B5 aplicadas, D50 escrita, 2 semanas o más de línea base y export de Search\n  Console del día anterior (D1).\n- Después de publicar: `gh run watch <id> --exit-status`, `scripts/check-prod.sh` y medición en producción; si\n  PageSpeed queda por debajo de 85 o el LCP por encima de 3,5 s, se revierte con `git revert` y un push aprobado (D14).\n\n### Fuera de alcance\n\n- Insignia de Google Partner (pendiente del código oficial).\n- Reseñas y casos con cifras (pendientes de autorización de clientes).\n- Fotos del equipo (pendientes de permiso).\n- La herramienta pública «mide tu web» (`TODOS.md`).\n- Eventos GA4 por clic en escenas y filas del mapa: pasan a la fase 3 con el resto de eventos (`TODOS.md`).\n- Barra fija en móvil con «Cotizar» y WhatsApp: D21 la pide para las páginas de servicio y nunca se construyó; es un\n  componente nuevo para todo el sitio, no de la portada (`TODOS.md`).\n- Unir portada y pilar si S5 lo sugiere (plan nuevo, ver Puerta S5).\n- Confirmar los precios propuestos de D4 en las páginas que los publican.\n"}]} -->

<!-- autoplan-accepted:ceo -->
- Obligaciones aceptadas en la revisión CEO (14-oct-2026); el detalle de cada sección está en «Estructura propuesta».
- Enfoque híbrido: módulo `src/lib/portada.ts` fuera de `src/lib/pages/`, bloques v2 existentes llamados uno por uno
  con `v2` para respuesta, maquetas, comparación y preguntas, hoja del molde en línea; `[...slug].astro` no se toca.
- Dos tandas: A (arreglo de `cta_click`, enlace de la guía, retiro de los logos sin confirmar y de la afirmación de
  equipo interno de la portada actual, y «proyectos publicados» solo de clientes; publicable ya con aprobación) y B
  (la portada nueva, construida solo en la rama que elija el dueño).
- Héroe: H1 de `KEYWORDS.md:77` en la construcción con permiso `h1` «candidata D3, pendiente de S5», bajada de 15 a
  20 palabras, botón «Cotizar mi proyecto» a `/contacto/?servicio=definir#formulario`, WhatsApp secundario, insignia
  «Tech Provider verificado por Meta» literal, captura de TramitaPa (`src` 800, 800×600, `srcset` 480 y 800,
  `fetchpriority="high"`; 1200 solo si baja de 60 KB) y celular 390×844; en móvil, caja 3:2 con `object-fit: cover`.
- Riel con los nombres de los 6 servicios, sin cifras (D20, D26), cada nombre a la URL principal de su fila.
- Respuesta citable de 40 a 60 palabras con fecha, inmediatamente después de la banda del héroe, con enlace a
  `/nosotros/` y la misma descripción de la entidad que `docs/autoridad/KIT-AUTORIDAD.md`.
- Mapa de 6 filas con URL principal y secundarias según «Estructura propuesta» (incluye «¿Ya tienes web? Rediseño» y
  «Ver casos» en diseño web); precios de `confirmados.web-landing` y `confirmados.web-ecommerce`; IA según B4 con
  todas sus superficies listadas; SEO, publicidad y WhatsApp sin cifra; software propio en el pie y en la franja.
- Versión corta (9 secciones) o larga (13) según T1.
- «Lo que no hacemos» solo con líneas respaldadas por una página publicada; prohibidos «no te amarramos con
  contrato» y «no retenemos tus accesos» mientras exista el plan gestionado de 12 meses.
- Comparación con el bloque `compare` según D28, `otraCotizacion: true`, «Qué preguntar a cualquier proveedor» en
  `intro` y los 5 criterios con fuente de «Estructura propuesta».
- Proyectos y clientes juntos: testimonio y captura de TramitaPa con permiso B5 (que cubre también la página del caso
  y la frase exacta); logos solo confirmados (B2), con nombre como `alt`, y la tira solo con 4 o más; línea del
  fundador con nombre, rol y enlace a `/nosotros/`.
- Sin sección de equipo; sale toda la afirmación de equipo interno (`index.astro:650`, `:651`, `:655`) salvo B3, que
  la devuelve como insignia en el héroe y la quita de `scripts/afirmaciones-bloqueadas.json`.
- Formulario según T3 (sí: `ContactForm`, orden de fases `1, 2a, 2b, 3, 4, 5` y `faseActual` `2b`; no: esperar a la
  fase 3 y salir con `ServiceForm` `definir`).
- `src/scripts/track.ts`: `href` exactamente `#formulario` envía un solo `cta_click`; se actualiza
  `docs/event-dictionary.md` y `scripts/qa-form.mjs` gana el caso en `/qa-fixture/formulario/`.
- La guía `/blog/como-elegir-agencia-diseno-web-panama/` enlaza a la portada con el texto «agencia de diseño web»;
  `public/llms.txt` se alinea con la nueva respuesta citable.
- Description de `KEYWORDS.md:77`; `ItemList` de 6 `Service` sin `Offer`; FAQ de agencia de 6 o más igual al FAQPage.
- Máximo de CSS de la plantilla «portada» en `scripts/presupuestos.json` = medido + 3 %, con motivo (D44).
- S5 antes de construir la tanda B, con D18 y, si siguen separadas, la excepción a la regla 2 de `KEYWORDS.md` para la
  portada; si el dueño elige unir portada y pilar, este plan se detiene.
- Puertas antes de publicar la tanda B: B1 a B5 aplicadas, T3, D50 en `DECISIONES.md` (con la meta de D16), 2 semanas
  o más de línea base en GA4 y export de Search Console del día anterior; revisión a las 4 y 8 semanas de publicar.
- Verificación: `npm run verify` en verde (incluye 3 enlaces entrantes por página comercial), capturas a 390, 768 y
  1440, LCP, CLS y puntaje locales antes y después, ola 1 medida, primera pantalla visible sin JavaScript; después de
  publicar, `gh run watch`, `scripts/check-prod.sh`, medición en producción y reversión según D14.
<!-- /autoplan-accepted:ceo -->

**0I. Interrogatorio temporal.**
```
  HORA 1:    qué props espera Blocks.astro y si acepta bloques sueltos fuera de [...slug].astro;
             dónde vive el módulo de datos de la portada
  HORAS 2-3: precio de cada fila desde precios.json (no a mano); FAQ visible = FAQPage con las reglas
             reducidas del marcador; fecha de la respuesta; enlaces de escenas que pasen check-links
  HORAS 4-5: permisos de seo-congelado para "/" (description, schema, H1); subida de presupuesto;
             .reveal y lenis: nada invisible en la primera pantalla sin JS
  HORA 6+:   capturas 390/768/1440, medir.mjs antes y después, llms.txt si cambia el resumen de la portada
```
Esfuerzo: equipo humano ~3 días; CC + gstack ~2 h de construcción más ~30 min de verificación. Pendientes de
ingeniería: forma del módulo de datos, si escenas y mapa son bloques nuevos de `Blocks.astro` o un componente propio,
y qué pasa con la lista `tools` (hoy dentro de una sección que sale).

### Fase 1 (CEO), dos voces independientes

Entrada de las dos voces: `autoplan-ceo-fevElw/ceo-implementation.md`, SHA-256 `66d1fe90…264f` (el plan tras las
3 rondas de especificación).

- **Voz Claude** (subagente, sin contexto previo): aprobar con cambios. Crítico C1: logos sin nombre y «100% interno»
  siguen publicados y su retiro depende de la tanda más lenta. Altos: H1, el cuello de botella es el tráfico (10 clics
  orgánicos en 75 días, 9 en la portada); H2, S5 va después de construir y la regla 2 de `KEYWORDS.md` se rompe en
  silencio; H3, sin métrica de negocio ni criterio de éxito; H4, las decisiones del dueño llegan al final y cambian lo
  que se construye. Medios: M1 posicionamiento generalista (lo defendible es Tech Provider de Meta, software propio y
  mediciones); M2 la portada queda sin ninguna persona; M3 la versión larga duplica y no se puede evaluar; M4 la cifra
  de proyectos incluye un producto propio y el testimonio afirma un resultado sin dato; M5 la meta GEO sobreestima lo
  que logra una página propia; M6 T3 = sí con condiciones.
- **Voz Codex** (`gpt-5.6-terra`, segunda corrida; la primera salió sin el marcador en inglés y no cuenta):
  «Narrow the homepage to one proven ICP and one primary revenue offer, then build measurable proof and a distribution
  plan». Críticos: la «agencia integral» no está probada (la evidencia es solo de web); no hay estrategia de
  adquisición. Altos: falta un cliente ideal y una oferta prioritaria; se vende un resultado sin el circuito que lo
  mida; el alcance excede la capacidad de un fundador y un vendedor; la validación llega tarde. Medios: la comparación
  empuja a competir por precio; las maquetas simulan evidencia; GEO es una meta de superficie; dejar corta o larga para
  el final evita la decisión que importa.

```
CEO DUAL VOICES — CONSENSUS TABLE:
  Dimensión                              Claude      Codex       Consenso
  1. ¿Premisas válidas?                  frágiles    no          CONFIRMED: frágiles (tráfico, separación con la pilar, GEO)
  2. ¿Es el problema correcto?           a medias    no          CONFIRMED: el cuello de botella es tráfico y prueba
  3. ¿Alcance bien calibrado?            reducir     reducir     CONFIRMED: versión corta; desacuerdo en cuánto (Codex: una sola oferta)
  4. ¿Alternativas exploradas?           no          no          CONFIRMED: faltan (portada mínima, oferta líder, distribución)
  5. ¿Riesgos competitivos cubiertos?    no          no          CONFIRMED: lo copiable (precios) no defiende; lo defendible no lidera
  6. ¿Trayectoria a 6 meses sana?        no          no          CONFIRMED: sin medición ni tráfico no se sabrá si funcionó
```

**Desafíos al dueño (las dos voces piden cambiar la dirección que él dio; nunca se deciden solos).**
- **UC1, tráfico antes que portada.** El dueño pidió rediseñar la portada. Las dos voces dicen que la portada no es
  el cuello de botella: sin una fuente de tráfico, la portada nueva no tiene a quién convertir. Recomiendan acotar la
  portada (versión corta, una sesión de construcción) y atar su publicación a una fuente de tráfico con fecha: la
  ficha de Google con fotos y sus primeras reseñas, perfiles en Clutch, GoodFirms y Sortlist (`KIT-AUTORIDAD.md`
  sección 2) y la prueba de búsqueda pagada de `TODOS.md` hacia páginas de servicio. Codex va más lejos: pausar la
  portada. Lo que se pierde si se equivocan: unas semanas de una portada que ya es mejor que la actual. Lo que se
  pierde si aciertan y se ignora: el tiempo de construir para una página que ven 1 o 2 personas orgánicas por semana.
- **UC2, liderar con una ventaja, no con un inventario.** El dueño pidió que la portada venda la agencia completa
  (`SPEC.md` 0, 12-oct). Las dos voces dicen que 6 servicios con el mismo peso se leen como catálogo genérico. La voz
  Claude propone no tocar la estructura y que la bajada y la respuesta citable lideren con «web que convierte + WhatsApp
  oficial, Tech Provider verificado por Meta»; Codex propone estrechar la portada a un cliente ideal y una oferta.
  Lo que se pierde si se equivocan: un mensaje menos amplio. Si aciertan y se ignora: una portada intercambiable con la
  de cualquier agencia.

**Decisiones tomadas por /autoplan a partir de las voces (aplicadas en el plan).**

| ID | Hallazgo | Decisión | Principio |
|---|---|---|---|
| V1 | Claude C1, M4 | Tanda A: retirar ya de la portada actual los logos sin confirmar y la afirmación de equipo interno; «proyectos publicados» solo de clientes | P1; R13 y D3 ya lo exigían |
| V2 | Claude H2, Codex | S5 antes de construir la tanda B; la SERP la revisa Claude antes de la puerta final | P1, P3 |
| V3 | Claude H2 | Excepción explícita a la regla 2 de `KEYWORDS.md` para la portada | P1 |
| V4 | Claude H4 | Se construye solo la rama elegida en la puerta final | P5 |
| V5 | Claude H3, Codex | Línea base de 2 a 4 semanas, revisión a 4 y 8 semanas, meta de D16 en D50, nota cualitativa de Nicole | P1 |
| V6 | Claude M3, Codex | La recomendación de T1 pasa a la versión corta | P3, P5 |
| V7 | Claude M2 | Línea de responsabilidad del fundador con lo ya publicado en `/nosotros/` | P2 |
| V8 | Claude M5 | La respuesta citable usa la descripción de la entidad del kit de autoridad | P1 |
| V9 | Claude M4 | B5 cubre también la página del caso y la frase exacta del testimonio | P1 |
| V10 | Codex | Se agrega un H1 candidato que no promete resultado; la puerta lo señala | P1 |
| V11 | Codex | La prueba de pauta de `TODOS.md` apunta a páginas de servicio, no a la portada | P3 |
| V12 | Codex | Las preguntas de la clave `definir` (presupuesto, objetivo, urgencia) se revisan en la fase 3 | P3, diferida |

Lo que Codex plantea fuera del repositorio (capacidad de entrega, cliente ideal, márgenes) queda en UC2 y en el
informe para el dueño; no se decide aquí.

### Fase 1 (CEO): secciones de revisión

**Alcance vigente al empezar la sección 1.** Modo SELECTIVE EXPANSION (regla de /autoplan). Aprobadas: C1 a C8 y C10
a C17, E1 a E4 (versión larga, T1) y X1. Diferidas: X2 y X3. Descartadas: X4 a X6. Pendientes del dueño: T1, T3 y
B1 a B5. Más las decisiones de las voces (V1 a V12, arriba).

**Sección 1, arquitectura.**
```
  src/pages/index.astro ──usa──> src/lib/portada.ts (datos: respuesta, escenas, mapa, FAQ, comparación)
        │                              │
        │                              ├──lee──> src/data/precios.json (confirmados.*)   [nuevo acoplamiento]
        │                              └──lee──> src/lib/site.ts (portfolio, pricing, saas)
        ├──llama──> src/components/Blocks.astro (answer, ejemplos, compare, faq; compartido con 33 páginas)
        ├──llama──> ContactForm.astro (#formulario)  ── fase 3 ──> ServiceForm (definir)
        └──Base.astro ──> schema.ts homeJsonLd(faqs, servicios) ──> JSON-LD (ItemList de 6 Service, FAQPage)
  dist/index.html ──lo leen──> validar-marcador.mjs, seo-congelado.mjs, presupuestos.mjs, check-links
```
Flujo de datos nuevo, precio de una fila del mapa: feliz (la clave existe en `confirmados` y se pinta «desde $X»);
nulo (la clave no existe, por ejemplo `confirmados.ia` antes de B4): la construcción debe fallar en vez de pintar
«desde $undefined», salvo que la fila esté declarada sin cifra; vacío (fila sin cifra): la fila no deja un hueco; error
(no aplica, es estático). Hallazgo A1: el plan no decía qué pasa con una clave inexistente; se fija que falle el
build (auto P1). Acoplamiento: la portada pasa a depender de `Blocks.astro`, que comparten 33 páginas; el plan no añade
campos al bloque compartido, así que no cambia esas páginas (bien). Hallazgo A2 (voz Claude, H2): el title y las
candidatas de H1 contienen «diseño web en Panamá», que la regla 2 de `KEYWORDS.md` reserva a la pilar; se anota una
excepción explícita para la portada en `KEYWORDS.md` (auto P1, V3). Reversión: `git revert` y push aprobado, unos 3
a 5 minutos hasta producción. Punto único de falla: el despliegue por push a `main` (existente).

**Sección 2, errores y rescate.** Todo ocurre en el build, no en el navegador:

| Ruta | Qué puede fallar | Rescate | Lo ve |
|---|---|---|---|
| precio de fila | clave inexistente en `confirmados` | el build falla con el nombre de la clave (A1) | el equipo, antes del push |
| respuesta citable | menos de 40 o más de 60 palabras, sin fecha | el validador falla | el equipo |
| FAQ | texto visible distinto del FAQPage | el validador falla | el equipo |
| imagen del héroe | más de 60 KB o sin `width`/`height` | el validador falla | el equipo |
| H1, description, schema | cambio sin permiso | `seo-congelado.mjs` falla | el equipo |
| enlaces de escenas y mapa | destino inexistente | `check-links` falla | el equipo |
| `track.ts` | no hay `gtag` | no envía nada (como hoy) | nadie, sin error |
| formulario | n8n caído | sin cambio respecto de hoy (ContactForm muestra WhatsApp y correo) | el visitante |
Sin huecos críticos: lo único que faltaba era A1.

**Sección 3, seguridad.** No hay rutas nuevas, ni parámetros, ni dependencias. El formulario sigue en el mismo webhook
(D30 a D33 no cambian). `track.ts` no envía datos personales. El riesgo real es de reputación y legal: logos y
testimonio sin permiso escrito (amenaza: un prospecto o el cliente lo nota; probabilidad media; impacto alto). Mitigado
por B2, B5 y por la decisión V1 (se retiran ya de la portada publicada).

**Sección 4, datos e interacción.**

| Interacción | Caso borde | ¿Cubierto? | Cómo |
|---|---|---|---|
| botón «Cotizar» | doble clic | sí | navega una vez a `/contacto/` |
| ancla `#formulario` | sin JavaScript | sí | ancla nativa |
| imagen del héroe en móvil | carga lenta | sí | caja 3:2 reservada, sin salto (CLS) |
| tira de logos | 0 a 3 confirmados | sí | la tira no va |
| fila sin precio | SEO, publicidad, WhatsApp, IA si B4 = no | sí | sin hueco, texto de alcance |
| B5 = no | sin captura autorizada | sí | otro proyecto autorizado o héroe sin captura |
| volver desde `/contacto/` | botón atrás | sí | regresa a la portada |
| clic en «Ver casos» | caso nuevo sin captura | sí | el índice `/casos-de-exito/` ya existe |
Sin huecos.

**Sección 5, calidad de código.** `src/lib/portada.ts` concentra los datos; el FAQ visible y el FAQPage salen del
mismo arreglo (como hoy con `homeJsonLd(faqs)`), así no hay duplicación. La regla de `track.ts` es una comparación
exacta, sin ramas nuevas en otros eventos. Riesgo de sobreingeniería: construir las dos ramas de T1, B2 a B5 y T3; se
resuelve con la voz Claude H4 (V4): se construye solo la rama elegida en la puerta final.

**Sección 6, pruebas.**
```
  nuevo                         tipo          prueba                                      existe
  precio de fila desde JSON     unidad        node:test: cada fila lee confirmados; clave   no → nueva (A1)
                                              inexistente lanza error
  cta_click en #formulario      E2E           scripts/qa-form.mjs, caso nuevo              no → nueva
  respuesta 40-60 + fecha       build         validar-marcador.mjs                         sí
  FAQ = FAQPage                 build         validar-marcador.mjs                         sí
  ItemList sin Offer            build         qa-seo.mjs (R37)                             sí
  enlaces de escenas y mapa     build         check-links                                  sí
  3 enlaces entrantes           build         validar-marcador.mjs (D36)                   sí
  description ≤155, tokens H1   unidad        keywords.test.mjs                            sí
  presupuesto CSS/JS            build         presupuestos.mjs                             sí
  accesibilidad portada         navegador     qa-a11y.mjs (PAGES incluye la portada, D8)   sí
```
Prueba de las 2 de la mañana: `npm run verify` completo más las capturas a 390 y 1440. Prueba hostil: quitar
`confirmados.web-landing` y confirmar que el build falla. `no_claim` de la prueba de precio: no prueba que el precio
sea el correcto en el mercado, solo que sale del archivo confirmado.

**Sección 7, rendimiento.** Lo más lento es la imagen LCP (42,5 KB) y la hoja del molde en línea (unos 4,7 KB). El JS
no crece. Sin base de datos ni llamadas externas en el build. Las capturas del showcase deben quedar en `loading="lazy"`
(hoy lo están). Sin hallazgos nuevos.

**Sección 8, observabilidad.** Lo que hoy existe: `cta_click`, `click_whatsapp`, `form_start`, `generate_lead`. Hueco
(voces Claude H3 y Codex): ninguna métrica dice si la portada nueva ayuda al negocio. Decisión V5 (auto P1): antes de
publicar la tanda B, 2 a 4 semanas de línea base de la portada actual en GA4 (sesiones de `/`, `cta_click` y
`click_whatsapp` por sesión, `form_start` y `generate_lead` con página `/`), con el arreglo de la tanda A ya midiendo;
revisión a las 4 y 8 semanas de publicar; la meta de consultas de D16 queda en D50. Lo comercial (consulta a reunión a
cierre) vive en WazaCRM y NousCRM, fuera del repositorio: se anota como pedido al dueño y a Nicole.

**Sección 9, despliegue.** Orden: tanda A (sin puertas, push aprobado) → línea base → puerta final → tanda B. Riesgo
de ventana: ninguno, es estático. Verificación tras el push: `gh run watch --exit-status`, `scripts/check-prod.sh`,
medición en producción. Reversión según D14.

**Sección 10, trayectoria.** Reversibilidad 4 de 5: todo se revierte con un commit, salvo la señal de SEO del cambio
de H1, que tarda en reacomodarse. Deuda: ninguna nueva si se construye una sola rama. Lo que viene después: la portada
cambia a `ServiceForm` en la fase 3, y casos con cifras (D17, S8) cuando haya permisos. Retrospectiva de las
expansiones: la comparación y las escenas aportan menos de lo que cuestan mientras no haya tráfico (voces Claude M3 y
Codex), por eso la recomendación de T1 cambia a la versión corta (V6).

**Sección 11, diseño y experiencia.** Lo que se ve primero: H1, bajada, botón y la captura real; segundo, la respuesta
y el mapa; tercero, la prueba. Estados: precio presente o ausente en la fila, tira de logos presente o ausente, héroe
con o sin captura (B5). Riesgo de genérico: escenas con íconos de manual; la fase de diseño debe exigir texto
concreto de Panamá en cada escena. Alineado con `DESIGN.md` (Roboto, tokens del molde). Móvil explícito (D27). Se
recomienda `/plan-design-review`, que es la fase siguiente de este /autoplan.
```
  portada ──Cotizar──> /contacto/?servicio=definir#formulario ──envío──> gracias + WhatsApp
     │──fila del mapa──> página de servicio ──#formulario──> envío
     │──WhatsApp──> wa.me
     └──scroll──> respuesta → mapa → proyectos → proceso → industrias → FAQ → formulario (#formulario)
```

### Fase 1 (CEO): resultados obligatorios

**Fuera de alcance (con su respuesta).** Diferidos a `TODOS.md`: X2 eventos por clic en escenas y mapa (fase 3); X3
barra fija en móvil (componente de todo el sitio); V12 preguntas de `definir` (fase 3). Descartados, sin TODO: X4
selector en la portada (`SPEC.md` 3 lo manda a la pilar); X5 dirección y horario en la respuesta (ya en pie y schema);
X6 proyecto rotativo en el héroe (CLS y LCP). Fuera de este plan: Google Partner, casos con cifras, fotos del equipo,
«mide tu web», unir portada y pilar, confirmar precios propuestos de D4.

**Lo que ya existe y se reutiliza.** Bloques v2 (`answer`, `ejemplos`, `compare`, `faq`) de `Blocks.astro`; maquetas
de `Ejemplo.astro`; `ContactForm` y su `#formulario`; showcase y franja de cifras de la portada; `homeJsonLd`;
`precios.json` como fuente de precios; páginas de caso; validador, SEO congelado, presupuestos, `check-links`,
`qa-form`, `qa-a11y` y `medir.mjs`. Nada se reconstruye.

**Delta respecto del ideal a 12 meses.** Este plan deja una portada honesta, de agencia y medible. Lo que falta para el
ideal no está en la portada: autoridad externa (reseñas, directorios, enlaces), casos con cifras autorizadas y una
fuente de tráfico con fecha (UC1).

**Registro de errores y rescate.** El de la sección 2: 8 rutas, todas en el build salvo `track.ts` y el formulario;
0 huecos críticos tras A1.

**Registro de modos de falla.**
```
  RUTA                  | FALLA                      | ¿RESCATE?      | ¿PRUEBA?        | ¿LO VE?                | ¿REGISTRO?
  ----------------------|----------------------------|----------------|-----------------|------------------------|-----------------
  precio de fila        | clave inexistente          | build falla    | node:test nueva | equipo, antes del push | salida del build
  respuesta citable     | largo o fecha              | validador      | sí              | equipo                 | salida de verify
  FAQ = FAQPage         | textos distintos           | validador      | sí              | equipo                 | salida de verify
  imagen LCP            | > 60 KB o sin medidas      | validador      | sí              | equipo                 | salida de verify
  H1/description/schema | cambio sin permiso         | seo-congelado  | sí              | equipo                 | salida de verify
  cta_click #formulario | no se envía                | no             | qa-form nueva   | nadie (silencioso)     | GA4
  afirmaciones          | frase bloqueada publicada  | validador      | sí              | equipo                 | salida de verify
  rendimiento en prod   | PSI < 85 o LCP > 3,5 s     | revert (D14)   | medir.mjs       | visitante, luego equipo| mediciones.json
```
0 huecos críticos: la única falla silenciosa (`cta_click`) gana su prueba en la tanda A.

**Diagramas.** Arquitectura, flujo de datos del precio y recorrido del usuario: en las secciones 1 y 11. Despliegue:
tanda A, línea base, puerta final, tanda B, verificación y revert si D14. Sin máquinas de estado nuevas. Diagramas
viejos en archivos que toca el plan: ninguno.

#### Tareas de implementación (fase CEO)
Synthesized from this review's findings. Each task derives from a specific finding above. Run with Claude Code or
Codex; checkbox as you ship.

- [ ] **T1 (P1, human: ~2h / CC: ~15min)** — tracking — Enviar `cta_click` en enlaces `#formulario`
  - Surfaced by: spec review ronda 1 — `track.ts:29` solo cuenta `/contacto/`
  - Files: `src/scripts/track.ts`, `scripts/qa-form.mjs`, `docs/event-dictionary.md`
  - Verify: `npm run verify` con el caso nuevo de `qa-form` en verde
- [ ] **T2 (P1, human: ~15min / CC: ~3min)** — blog — Enlazar la guía de agencia a la portada
  - Surfaced by: spec review ronda 1 — `KEYWORDS.md:20`
  - Files: `src/lib/pages/blog-1.ts`
  - Verify: `check-links` y el enlace con el texto «agencia de diseño web» en la guía construida
- [ ] **T3 (P1, human: ~1h / CC: ~10min)** — portada actual — Retirar logos sin confirmar y equipo interno; contar solo proyectos de clientes
  - Surfaced by: voz Claude C1 y M4 (V1)
  - Files: `src/pages/index.astro`
  - Verify: `npm run verify`; ninguna frase de `scripts/afirmaciones-bloqueadas.json` en `dist/index.html`
- [ ] **T4 (P1, human: ~1h / CC: ~15min)** — SEO — Correr S5 (SERP de los dos términos; volumen con la sesión del dueño)
  - Surfaced by: voces Claude H2 y Codex (V2)
  - Files: `audit/s5-agencia-diseno-web-2026-10.md`
  - Verify: el archivo trae los 5 primeros resultados de cada término con fecha
- [ ] **T5 (P1, human: ~30min / CC: ~10min)** — medición — Línea base de 2 a 4 semanas de la portada actual en GA4
  - Surfaced by: voces Claude H3 y Codex (V5)
  - Files: to be determined (nota en `audit/`)
  - Verify: sesiones, `cta_click`, `click_whatsapp`, `form_start` y `generate_lead` de `/` anotados con fechas
- [ ] **T6 (P1, human: ~2 días / CC: ~2h)** — portada — Construir la tanda B en la rama elegida en la puerta final
  - Surfaced by: estructura propuesta, A1 y V3 a V10
  - Files: `src/pages/index.astro`, `src/lib/portada.ts`, `src/lib/schema.ts`, `scripts/cambios-permitidos.json`, `scripts/presupuestos.json`, `docs/specs/rediseno-elementoweb/KEYWORDS.md`, `public/llms.txt`
  - Verify: `npm run verify`, prueba de precio por fila (A1), capturas 390/768/1440, `medir.mjs` antes y después
- [ ] **T7 (P2, human: ~20min / CC: ~5min)** — decisiones — Escribir D50 con las respuestas de la puerta
  - Surfaced by: spec review ronda 3
  - Files: `docs/specs/rediseno-elementoweb/DECISIONES.md`, `docs/specs/rediseno-elementoweb/SCORECARD.md`
  - Verify: D50 nombra T1, T3, B1 a B5 y la meta de D16
- [ ] **T8 (P2, human: ~30min / CC: ~10min)** — despliegue — Verificar en producción y revisar a 4 y 8 semanas
  - Surfaced by: spec review ronda 3 y V5
  - Files: `scripts/check-prod.sh`, `src/data/mediciones.json`
  - Verify: `gh run watch --exit-status`, `check-prod.sh` en verde, medición en producción dentro del umbral de D14

#### Resumen de la fase CEO
```
  +====================================================================+
  |            MEGA PLAN REVIEW — COMPLETION SUMMARY                   |
  +====================================================================+
  | Mode selected        | SELECTIVE EXPANSION                         |
  | System Audit         | portada sin v2; logos y equipo interno sin  |
  |                      | confirmar en producción; cta_click roto     |
  | Step 0               | enfoque híbrido B; correcciones C1 a C11    |
  | Section 1  (Arch)    | 2 issues found (A1, A2)                     |
  | Section 2  (Errors)  | 8 error paths mapped, 0 GAPS                |
  | Section 3  (Security)| 1 issue found, 0 High severity              |
  | Section 4  (Data/UX) | 8 edge cases mapped, 0 unhandled            |
  | Section 5  (Quality) | 1 issue found (ramas dobles, V4)            |
  | Section 6  (Tests)   | Diagram produced, 2 gaps (precio, qa-form)  |
  | Section 7  (Perf)    | 0 issues found                              |
  | Section 8  (Observ)  | 1 gap found (métrica de negocio, V5)        |
  | Section 9  (Deploy)  | 1 risk flagged (puertas en orden)           |
  | Section 10 (Future)  | Reversibility: 4/5, debt items: 0           |
  | Section 11 (Design)  | 1 issue (escenas genéricas)                 |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (11 items)                          |
  | What already exists  | written                                     |
  | Dream state delta    | written                                     |
  | Error/rescue registry| 8 rows, 0 CRITICAL GAPS                     |
  | Failure modes        | 8 total, 0 CRITICAL GAPS                    |
  | TODOS.md updates     | 4 items (X2, X3, V12 y la nota V11)         |
  | Scope proposals      | 10 proposed, 5 accepted (EXP + SEL)         |
  | CEO plan             | written                                     |
  | Outside voice        | codex completed (segunda corrida)           |
  | Lake Score           | N/A (decisiones automáticas de /autoplan)   |
  | Diagrams produced    | 3 (arquitectura, flujo de precio, usuario)  |
  | Stale diagrams found | 0                                           |
  | Unresolved decisions | 9 (T1, T3, B1 a B5, UC1, UC2)               |
  | Reality rows         | 7/7 rows (PLAN_REALITY), 1 unverified       |
  +====================================================================+
```

### Fase 2 (diseño)

**Paso 0.** Completitud de diseño inicial: 5/10. El plan es preciso en datos, URL, pesos de imagen, schema y puertas,
y genérico justo en la interfaz: composición del héroe, estados, forma de escenas, proyectos, proceso e industrias, y
fondos de sección. Un 10 fija cada una de esas decisiones y la tabla de estados. `DESIGN.md` existe y manda (estrella
polar «Comprobante», Roboto única, marino solo en la portada, cian como único acento, sin tres tarjetas iguales, la
portada no se anima). Patrones que se reutilizan: `PortadaServicio` y `PrecioPlazo` (héroe v2), `ew-dev` de
`Ejemplo.astro`, `.ew-rail`, los bloques `answer`, `steps`, `ejemplos`, `compare` y `faq`, la píldora del pie. Áreas:
todas (regla de /autoplan, P1). Sin maquetas en esta fase: el paso 0.5 de /autoplan son las dos voces.

**Dos voces.**
- **Voz Claude** (subagente, INPUT `design 92502d91…ed73`, que coincide con la instantánea): crítico C1, el héroe sin
  captura no tiene diseño; altos H1 a H7: composición escritorio y celular sin especificar, captura sin pie y enlace
  invisible, botón que saca de la página, 10 secciones sin botón en la versión larga, escenas que no calzan con el
  mapa, precio sin lugar en las filas, página híbrida con dos lenguajes visuales; medios M1 a M10 (riel y franja,
  servicios nombrados tres veces, insignia sin diseño, estilo de WhatsApp, repetición entre «lo que no hacemos» y la
  comparación, columnas de maquetas, sección 7, preguntas sin contenido, móvil sin prueba, restos de la tanda A).
- **Voz Codex** (`gpt-5.6-terra`): no aprueba tal como está. Crítico: la arquitectura visual sigue pendiente de
  decisiones del dueño. Altos: la jerarquía privilegia catálogo y citabilidad; el héroe promete más de lo que prueba;
  composición del héroe subespecificada; estados del formulario no aceptados; responsive intencional solo en el héroe.
  Medios: accesibilidad aspiracional; bloques propios sin decisiones de interfaz. Bajo: movimiento sin decisión.
  «Recommendation: approve only the short, evidence-led home after fixing positioning, hero fallback, interaction
  states, and responsive-accessibility contracts».

```
DESIGN OUTSIDE VOICES — LITMUS SCORECARD:
═══════════════════════════════════════════════════════════════
  Check                                    Claude  Codex  Consensus
  ─────────────────────────────────────── ─────── ─────── ─────────
  1. Brand unmistakable in first screen?   NO      NO     CONFIRMED NO
  2. One strong visual anchor?             YES*    YES    CONFIRMED YES (*composición sin fijar)
  3. Scannable by headlines only?          YES     YES    CONFIRMED YES
  4. Each section has one job?             NO      NO     CONFIRMED NO (banda del héroe, sección 7)
  5. Cards actually necessary?             NOT SPEC'D YES  DISAGREE (forma de las escenas)
  6. Motion improves hierarchy?            NO      NO     CONFIRMED NO (sin decisión; secciones viejas animadas)
  7. Premium without decorative shadows?   NO      YES    DISAGREE (esferas y malla de las secciones viejas)
  ─────────────────────────────────────── ─────── ─────── ─────────
  Hard rejections triggered:               ninguno ninguno CONFIRMED: ninguno
═══════════════════════════════════════════════════════════════
```
Los dos DISAGREE se resuelven en los pasos 4 y 5: las escenas van en lista (sin tarjetas) y las secciones viejas
pierden esferas, malla y degradados.

**Paso 1, arquitectura de información: 4/10 → 8/10.** Lo primero es H1, bajada y botón; segundo, la captura con su
pie; tercero, el riel. La banda traía demasiado (dos botones, insignia, dos enlaces de mercado, captura enlazada,
riel y franja). DZ1: la bajada deja de nombrar los servicios (los nombra el riel). DZ2: los enlaces de mercado pasan a
la respuesta citable. DZ3: orden riel y franja, con su rejilla por ancho. Lo que falta para 10: el posicionamiento
(UC2), que decide el dueño.
```
  [héroe marino: H1 · bajada · Cotizar + WhatsApp · insignia | captura navegador+celular con pie]
  [riel: 6 servicios] [franja: 4 cifras]
  respuesta citable → (larga: escenas) → mapa (6 filas) → (larga: así se vería) → proyectos y clientes + botón
  → (larga: lo que no hacemos, comparación) → proceso + botón → industrias → FAQ → formulario
```

**Paso 2, estados: 3/10 → 9/10.** Faltaban el héroe sin captura, las filas sin precio, la sección 7 según B2 y B5, y
los estados del formulario en la portada. DZ4: B5 se divide en B5a (captura) y B5b (testimonio) y el héroe sin
captura queda definido (otro caso publicado o héroe de una columna con la franja bajo los botones). DZ5: tabla de
estados en el «Contrato de interfaz». DZ6: los estados del formulario se prueban en la portada a 390 y 1440.

**Paso 3, recorrido: 6/10 → 8/10.** Guion (versión corta): llega por un enlace y ve una agencia real con un proyecto
real (confianza en 5 segundos) → la respuesta le dice quiénes, dónde y cómo cobran → el mapa le dice si tienen su
servicio y desde cuánto → los proyectos le prueban que entregan → el proceso le dice qué recibe en cada etapa → las
preguntas quitan objeciones → el formulario. Se rompía en dos lugares: 10 secciones sin botón en la versión larga
(DZ7: botón repetido tras la prueba y tras el proceso, en las dos versiones) y el botón que sale de la página. Este
último choca con D20 y D21, así que va a la puerta como **T4**.

| Paso | El visitante hace | Siente | Lo sostiene |
|---|---|---|---|
| 1 | llega desde un enlace | «¿son reales?» | captura real con pie y enlace al caso |
| 2 | lee la respuesta | orientación | 40 a 60 palabras con fecha |
| 3 | recorre el mapa | «tienen lo mío» | 6 filas con precio confirmado |
| 4 | ve proyectos | confianza | lista con casos publicados |
| 5 | lee el proceso | control | entregable por etapa |
| 6 | resuelve dudas | tranquilidad | 6 preguntas de agencia |
| 7 | escribe | decisión | formulario con 3 líneas de apoyo |

**Paso 4, riesgo de genérico: 5/10 → 8/10.** Sin rechazos duros. Lo genérico estaba en las secciones que «se quedan»:
showcase con esferas, malla, texto con degradado y acordeón; proceso con tarjetas que se invierten; industrias en
mosaico de íconos sobre marino; marquee de logos. DZ8: lista estática de proyectos con `ew-dev`; DZ9: proceso con
`steps` y entregables; DZ10: industrias como línea de enlaces; DZ11: logos en rejilla estática; DZ12: escenas en lista
y una por fila del mapa. Sale la afirmación sin respaldo «convierten y escalan el negocio». El litmus «marca
inconfundible» sigue en NO hasta que el dueño decida UC2: el pie de la captura en voz de datos y la insignia enlazada
materializan el «Comprobante», pero el mensaje sigue siendo de catálogo.

**Paso 5, sistema de diseño: 6/10 → 9/10.** DZ13: solo el héroe en marino, el resto alterna `surface` y
`surface-alt`; DZ14: la portada no se anima; DZ15: filas del mapa con el componente «Fila de servicio» y precio en línea
en voz de datos; DZ16: insignia en la píldora del pie. Desvío registrado: `DESIGN.md` pide WhatsApp en píldora verde,
pero las 33 páginas v2 usan `ew-btn--ghost`; se sigue lo publicado (P5) y queda una tarea para alinear `DESIGN.md`.

**Paso 6, responsive y accesibilidad: 4/10 → 8/10.** DZ17: composición del héroe por ancho (navegador 4:3 más celular
en escritorio; solo la captura de celular en compacto con `<picture>`); DZ18: relleno superior del héroe y criterio de
que la caja de la imagen empiece antes de 844 px; DZ19: riel por ancho; «Así se vería» en 3 o 1 columnas; DZ20:
recorrido por teclado, foco visible, contraste AA medido, texto al 200 % y sin JavaScript como criterios de aceptación.

**Paso 7, decisiones pendientes.**

| Decisión | Si se difiere |
|---|---|
| T4: destino del botón del héroe (`/contacto/` de D20 o `#formulario` de la misma página) | dos formularios y una portada distinta de las 33 v2, o un D20 contradicho sin registro |
| UC2: posicionamiento (lidera una ventaja o un catálogo) | litmus de marca en NO |
| B5a y B5b | héroe sin captura y proyectos sin cita |
| Texto final de bajada, respuesta, escenas y preguntas | se escribe al construir, dentro de las reglas fijadas aquí |

Resueltas en el plan: 20 (DZ1 a DZ20). Diferidas: ninguna nueva. A la puerta: T4.

#### Resultados obligatorios de la fase de diseño

**Fuera de alcance:** maquetas visuales con el diseñador de gstack (no forman parte de esta fase en /autoplan); barra
fija en móvil (ya en `TODOS.md`); rediseñar el pie o el menú.

**Lo que ya existe:** `DESIGN.md`; `PortadaServicio`, `PrecioPlazo`, `ew-dev`, `.ew-rail`, bloques `answer`, `steps`,
`ejemplos`, `compare` y `faq`; píldora del pie; `ContactForm` con sus estados.

**TODOS.md:** ninguna entrada nueva; la alineación de `DESIGN.md` con el botón de WhatsApp en `ew-btn--ghost`
va como tarea T11 de este plan.

#### Tareas de implementación (fase de diseño)

- [ ] **T9 (P1, human: ~3h / CC: ~20min)** — portada — Variante de héroe con `ew-dev`, `<picture>` para compacto y pie
  enlazado
  - Surfaced by: Paso 6 y voz Claude H1, H2
  - Files: `src/pages/index.astro`, `src/components/Ejemplo.astro`, `src/styles/molde-kredit.css`
  - Verify: capturas a 390, 768 y 1440; la caja de la imagen empieza antes de 844 px a 390×844; `medir.mjs`
- [ ] **T10 (P1, human: ~3h / CC: ~20min)** — portada — Secciones viejas al sistema: proyectos, proceso, industrias,
  logos, sin esferas ni animación
  - Surfaced by: Paso 4 y voz Claude H7
  - Files: `src/pages/index.astro`, `src/lib/portada.ts`
  - Verify: `npm run verify`; sin `grad-text`, `.reveal`, `mesh-dark` ni marquee en `dist/index.html`
- [ ] **T11 (P2, human: ~30min / CC: ~5min)** — DESIGN.md — Alinear el botón de WhatsApp con `ew-btn--ghost`
  - Surfaced by: Paso 5, desvío registrado
  - Files: `DESIGN.md`
  - Verify: la sección Components de `DESIGN.md` describe el botón que usan las páginas v2

#### Resumen de la fase de diseño
```
  +====================================================================+
  |         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | System Audit         | DESIGN.md presente; UI: portada completa    |
  | Step 0               | 5/10; todas las áreas                       |
  | Pass 1  (Info Arch)  | 4/10 → 8/10 after fixes                     |
  | Pass 2  (States)     | 3/10 → 9/10 after fixes                     |
  | Pass 3  (Journey)    | 6/10 → 8/10 after fixes                     |
  | Pass 4  (AI Slop)    | 5/10 → 8/10 after fixes                     |
  | Pass 5  (Design Sys) | 6/10 → 9/10 after fixes                     |
  | Pass 6  (Responsive) | 4/10 → 8/10 after fixes                     |
  | Pass 7  (Decisions)  | 20 resolved, 0 deferred, 1 a la puerta (T4) |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (3 items)                           |
  | What already exists  | written                                     |
  | TODOS.md updates     | 1 item proposed                             |
  | Approved Mockups     | 0 generated, 0 approved                     |
  | Decisions made       | 20 added to plan (auto, /autoplan)          |
  | Decisions deferred   | 0; a la puerta: T4, UC2, B5a, B5b           |
  | Overall design score | 3/10 → 8/10                                 |
  +====================================================================+
```

<!-- autoplan-baseline-edits:design {"sourceSha256":"a5eaaa642814deae7ee85d0b0ccbe2088305a320073ad2e0f54ab7721ad035b2","replacements":[{"oldText":"### Estructura propuesta (en orden)\n\nEnfoque de construcción (decidido en la revisión CEO, 0D): portada híbrida. Un módulo de datos en `src/lib/portada.ts`\n(fuera de `src/lib/pages/`, para que la ruta `[...slug].astro` no lo publique como página) alimenta los bloques v2\nexistentes de `src/components/Blocks.astro`, llamados uno por uno con `v2` e intercalados con el marcado propio de\n`src/pages/index.astro`: respuesta citable (`[data-block=\"answer\"]` con `.ew-answer`, que lee el validador), maquetas\n(`ejemplos`), comparación (`compare`) y preguntas (`faq`). Héroe, escenas, mapa y proyectos llevan marcado propio. La\nhoja `src/styles/molde-kredit.css` va en línea como en `[...slug].astro:14,53`. La ruta `[...slug].astro` no se toca.\n\nDos versiones, que el dueño elige en la puerta final (T1):\n- **Corta** (el orden de D20 más lo que el dueño ya aprobó después): secciones 1, 2, 3, 5, 7, 10, 11, 12 y 13\n  (9 secciones).\n- **Larga** (este plan): la corta más las secciones marcadas [Larga]: 4, 6, 8 y 9 (13 secciones).\n\nDos tandas de publicación:\n- **Tanda A**, independiente del rediseño, se puede publicar en cuanto el dueño apruebe el push (voces Claude C1 y H3):\n  - el arreglo de `cta_click` en `track.ts` con su prueba y su documentación;\n  - el enlace de la guía de agencia a la portada;\n  - en la portada **actual**, retirar ya lo que no está confirmado: la tira de 26 logos sin nombre\n    (`index.astro:155-170`) y toda la afirmación de equipo interno (`index.astro:650-655`); vuelven solo con B2 y B3;\n  - en la franja de cifras actual, «proyectos publicados» cuenta solo proyectos de clientes: `portfolio.length` (11)\n    incluye WazaCRM, que es producto propio y ya cuenta en «productos propios».\n- **Tanda B**: la portada nueva. Antes de construirla: S5 (ver su sección) y la puerta final con T1, T3 y B1 a B5;\n  antes de publicarla, además, la línea base de medición (ver «Medición y éxito»). Se construye **solo la rama elegida** de cada decisión; las\n  ramas que se describen abajo existen para que la puerta final sepa qué implica cada respuesta.\n\n1. **Héroe de agencia.**\n   - H1: la construcción usa la candidata de `KEYWORDS.md:77`, «Agencia de diseño web en Panamá que convierte visitas\n     en consultas» (D3: se construye con la propuesta; el dueño decide la definitiva al publicar, tras S5). Para que\n     `npm run verify` pase antes de esa decisión, `scripts/cambios-permitidos.json` gana el campo `h1` en la entrada de\n     `/` con el motivo «candidata D3, pendiente de S5»; si el dueño elige otra candidata se actualiza el motivo, y si\n     elige el respaldo se quita el permiso.\n   - Bajada de 15 a 20 palabras que nombra los servicios.\n   - Botón primario «Cotizar mi proyecto» a `/contacto/?servicio=definir#formulario` (D20, D21); `track.ts` ya envía\n     `cta_click` con `service=definir` para ese enlace. WhatsApp como secundario.\n   - Insignia con el texto literal «Tech Provider verificado por Meta» (D48), en lugar del par actual «Verificado por\n     Meta / Tech Provider» (`index.astro:104-106`). Los enlaces de mercado Panamá y Miami (`index.astro:99-103`) se\n     quedan como enlaces de texto. El botón «Ver proyectos reales» (`index.astro:97`) sale: la captura del héroe enlaza\n     al caso.\n   - A la derecha, un proyecto real ya publicado en escritorio y celular: **TramitaPa** (cliente externo con caso en\n     `/casos-de-exito/tramitapa/`), sujeto al permiso B5. Escritorio: `src=\"/portfolio/tramitapa-800.webp\"`,\n     `width=\"800\" height=\"600\"`, `srcset` con `tramitapa-480.webp` (19,5 KB, 480×360) y `tramitapa-800.webp` (42,5 KB),\n     `sizes` como en `PortadaServicio.astro:39-41` y `fetchpriority=\"high\"`. `tramitapa-1200.webp` (74,5 KB) no entra;\n     se intenta una versión de 1200 px de 60 KB o menos con `scripts/optimize-images.mjs`, y si no baja de 60 KB se\n     acepta que en pantallas 2x la captura se vea menos nítida. Celular: `movil-tramitapa.webp`, 390×844, 22,5 KB, con\n     `width` y `height`.\n   - Si B5 = no: el héroe usa el proyecto que el dueño autorice; sin ninguno, va sin captura.\n   - Debajo, el riel con los **nombres** de los 6 servicios del mapa, sin cifras (D20, D26), cada uno enlazado a la URL\n     principal de su fila.\n   - A 1440×900 se ven sin desplazarse H1, bajada, botón, WhatsApp, insignia y captura; el riel y la franja pueden\n     quedar debajo. A 390×844 el botón principal queda dentro de los 844 px. En móvil el orden es H1, bajada, botón,\n     WhatsApp, insignia, imagen (debajo del botón, caja 3:2 reservada con fondo `primary`, D27; la captura 4:3 se\n     recorta con `object-fit: cover` y `object-position: top`), riel y enlaces de mercado.\n2. **Franja de cifras**, como borde inferior de la banda del héroe (aprobada y publicada por el dueño el 14-oct en\n   dd38640; conserva «desde $550» y su enlace a `/saas/`, `index.astro:151`, desvíos de D20 que el dueño aprobó al\n   publicarla). «Proyectos publicados» cuenta solo proyectos de clientes (tanda A).\n3. **Respuesta citable con fecha** (40 a 60 palabras), inmediatamente después de la banda del héroe (`SPEC.md` 3.2,\n   D20): quiénes somos (con enlace a `/nosotros/`, destino de las preguntas GEO 18 y 20 de `KEYWORDS.md:101-102`, que\n   hoy enlaza la sección de equipo en `index.astro:664`), dónde (Ciudad de Panamá; Miami remoto), qué hacemos y cómo\n   cobramos, con el rótulo «Actualizado el DD/MM». Usa la misma descripción de la entidad que la ficha de Google y los\n   directorios (`docs/autoridad/KIT-AUTORIDAD.md`, sección 1), para que los motores la lean igual en todas partes.\n4. **[Larga] «Por dónde se te van los clientes»:** seis escenas, cada una enlazada a una página existente que la\n   resuelve: la web no carga en el celular (`/diseno-web-panama/`); Google no te encuentra\n   (`/crecimiento/seo-posicionamiento-web-panama/`); nadie contesta el WhatsApp de noche\n   (`/funcionalidades/chatbots-ia-web-wazacrm-panama/`); la pauta llega a una página que no convierte\n   (`/servicios/landing-pages-alta-conversion-panama/`); las cotizaciones se olvidan\n   (`/marketing/automatizaciones-n8n-panama/`); no sabes qué canal trajo la venta (`/marketing/`, que configura la\n   medición de conversiones antes de pautar, `src/lib/pages/marketing.ts:105`).\n5. **Mapa de servicios (corazón, `SPEC.md` 3.1, D19, D20):** 6 filas, no tarjetas iguales. URL principal de cada\n   fila (la que usan el riel y el `ItemList`) y, entre paréntesis, los enlaces secundarios dentro de la fila:\n   diseño web `/diseno-web-panama/` («Ver casos», a `/casos-de-exito/`, y «¿Ya tienes web? Rediseño», a\n   `/servicios/redisenio-web-panama/`, que reemplaza el camino para quien ya tiene web que hoy dan el selector y el CTA\n   intermedio, `index.astro:466` y `:562`); tiendas online `/servicios/tiendas-online-ecommerce-panama/`; SEO y SEO\n   local `/crecimiento/seo-posicionamiento-web-panama/` (`/crecimiento/seo-local-google-maps-panama/`); publicidad en\n   Google y Meta `/marketing/google-ads-panama/` (`/marketing/facebook-instagram-ads-panama/`); WhatsApp marketing\n   `/marketing/whatsapp-marketing-masivo-panama/`; IA y automatización `/inteligencia-artificial-para-empresas-panama/`\n   (`/marketing/automatizaciones-n8n-panama/`).\n   Cada fila: qué resuelve, para quién y precio de partida leído de `src/data/precios.json` solo si está confirmado\n   (D23): diseño web «desde $550» (`confirmados.web-landing`), tiendas «desde $1,950» (`confirmados.web-ecommerce`);\n   SEO, publicidad y WhatsApp sin cifra (sus precios propuestos de D4 no salen en la portada). IA según la pregunta B4:\n   - B4 = sí: se agrega `confirmados.ia` (2900, fuente `src/lib/pages/ia-empresas.ts`), se quita `ia` de\n     `sinPrecio` y la fila dice «desde $2,900».\n   - B4 = no: la fila va sin cifra y la página de IA pasa a estado `cotizado` con la redacción literal de D23\n     («Cotización cerrada por escrito» y el plazo) en todas las superficies donde hoy dice $2,900: respuesta citable\n     (`ia-empresas.ts:32`), precio y plazo de la portada (`:38`, sale su `Offer`), introducción de alcance (`:117`),\n     fila de la comparación (`:176`), pregunta frecuente (`:188`, que alimenta el FAQPage) y `public/llms.txt:58`; el\n     permiso de su ruta en `scripts/cambios-permitidos.json` cambia de motivo y suma `schema`.\n   El software propio se queda en la columna «Nuestros SaaS» del pie (`Footer.astro:22`, D20) y en el enlace de la\n   franja de cifras (sección 2); los enlaces entrantes de D36 siguen sobrados (`saas` 10, `saas/nouscrm` 8,\n   `saas/cifrao` 6).\n6. **[Larga] «Así se vería»:** tres maquetas del molde (`src/components/Ejemplo.astro`) para servicios que no son\n   web: un resultado de Google, una conversación de WhatsApp y el reporte del mes. Nota de ejemplo obligatoria, sin\n   logos de terceros, y ninguna maqueta afirma un resultado (D44): el reporte muestra qué se mide, sin cifras de mejora.\n   La web no se repite aquí: ya la muestran el héroe y los proyectos.\n7. **Proyectos reales y clientes** (prueba, D20):\n   - El showcase actual se queda, con captura propia y enlace a su caso cuando exista. El testimonio de TramitaPa\n     (`index.astro:409-415`, también en `src/lib/pages/casos.ts:65`) se publica solo con el permiso B5, que cubre\n     también la página del caso: el cliente aprueba la frase tal cual o una que no implique un resultado, porque\n     «las consultas se multiplicaron» convive con «Todavía no publicamos cifras de este proyecto» (`casos.ts:66`). Es\n     un testimonio, sin schema `Review` ni `AggregateRating`.\n   - La tira de logos (retirada de la portada actual en la tanda A) vuelve aquí, junto a los proyectos, solo con B2:\n     los logos que el dueño confirme por escrito, cada uno con el nombre del cliente como `alt`; con menos de 4\n     confirmados la tira no va.\n   - Una línea de responsabilidad del fundador: nombre y rol tal como ya están publicados en `/nosotros/`\n     (`core.ts:197`), con enlace a esa página; la foto solo si el dueño la quiere (voz Claude M2).\n8. **[Larga] «Lo que no hacemos»**, cada línea respaldada por una página publicada: no revendemos plantillas\n   (`src/lib/pages/diseno-web-panama.ts:80`); no prometemos el primer lugar en Google\n   (`src/lib/pages/crecimiento.ts:314`, `core.ts:86`); no intermediamos tu inversión publicitaria (`marketing.ts:47`);\n   tu dominio se registra a nombre de tu empresa (`site.ts:307`, `precios.ts:145`); no publicamos cifras de clientes\n   sin su permiso (`/casos-de-exito/tramitapa/`, `casos.ts:66`: «Todavía no publicamos cifras de este proyecto»). No\n   se escribe «no te amarramos con contrato» ni «no retenemos tus accesos»: en el plan gestionado de 12 meses los\n   accesos se entregan al liquidar las cuotas pendientes (`site.ts:308`, `precios.ts:145`).\n9. **[Larga] Comparación verificable (D28):** el bloque `compare` existente con `otraCotizacion: true` (columna «tu\n   otra cotización» en blanco) y la línea «Qué preguntar a cualquier proveedor» dentro de `intro` (sin campo nuevo en\n   el bloque compartido). Criterios, cada uno con enlace a su fuente: precios publicados (`/precios/`,\n   `precios.ts:29`); cotización cerrada por escrito (`/precios/`, `precios.ts:18`); plazo por escrito, de 5 días\n   hábiles a 5 semanas (`/precios/`, `precios.ts:42`); dominio a nombre de tu empresa (`/precios/`, `precios.ts:145`);\n   respuesta el mismo día hábil (`/contacto/`, `core.ts:257`). Sin columnas de freelancer ni de plataformas: sin\n   fuente verificable serían generalizaciones.\n10. **Proceso en 4 etapas** (se queda, con entregables verificables).\n11. **Industrias** compactas, con enlace a `/industrias/`.\n12. **Preguntas frecuentes de agencia** (6 o más), el mismo texto en el schema FAQPage.\n13. **Formulario** dentro de la página (`#formulario`), con el cierre de agencia como encabezado (reemplaza al CTA\n    intermedio). Según T3:\n    - T3 = sí (la portada sale antes de la fase 3): lleva el `ContactForm` actual; en\n      `scripts/paginas-comerciales.json` el orden pasa a `[\"1\", \"2a\", \"2b\", \"3\", \"4\", \"5\"]` y `faseActual` a `\"2b\"`.\n    - T3 = no: la portada espera a la fase 3 y sale con `ServiceForm` con la clave `definir`.\n    - En los dos casos, cuando `ServiceForm` se active, la portada lo usa con `definir`.\n\nSección de equipo: no va, por el orden de D20 (que no la incluye); `SPEC.md` 3 la mantenía solo con personas con\npermiso. La afirmación de equipo interno ya sale de la portada actual en la tanda A: el título «equipo panameño de verdad»\n(`index.astro:650`), «Equipo 100% interno. No subcontratamos…» (`:651`) y la insignia (`:655`), porque\n`scripts/afirmaciones-bloqueadas.json` bloquea «100% interno» y «equipo interno» en toda página que emite\n`data-page-type`. Si el dueño la confirma por escrito (B3), se quitan esas frases de la lista bloqueada (lo que las\ndesbloquea en todo el sitio) y la afirmación vuelve como una insignia «Equipo 100% interno» junto a la de Meta en el\nhéroe.\n\nSalen de la portada: «¿Qué necesita tu negocio ahora?», el bloque de precios y «Sin letra chica» (ya viven completos\nen la pilar y en `/precios/`); «Soluciones» (lo reemplaza el mapa); «IA y automatización» como sección aparte (entra al\nmapa, `SPEC.md` 3); el bloque de SaaS (queda en el pie, D20); la sección de equipo; el CTA intermedio (pasa a\nencabezado del formulario); el botón «Ver proyectos reales» del héroe.\n\nFuera de la portada (tanda A, salvo `llms.txt`):\n- Arreglo de una medición rota, no diseño de eventos de la fase 3: desde el 13-oct los botones de los hubs y de las\n  páginas de servicio bajan a `#formulario` y `src/scripts/track.ts:29` solo cuenta `cta_click` para enlaces que\n  empiezan con `/contacto/`, así que esos clics no se registran. Regla nueva: un enlace cuyo `href` es exactamente\n  `#formulario` envía `cta_click` con `location` y el servicio de `<main data-service>` si existe; los enlaces a\n  `/contacto/…#formulario` siguen por la rama actual, sin doble conteo. Se actualiza `docs/event-dictionary.md` y\n  `scripts/qa-form.mjs` gana un caso que hace clic en un enlace `#formulario` de `/qa-fixture/formulario/` (si esa\n  página no tiene uno, se le agrega) y comprueba el evento.\n- La guía `/blog/como-elegir-agencia-diseno-web-panama/` (`src/lib/pages/blog-1.ts`), que hoy recibe 94 de las 97\n  impresiones de «agencia de diseño web», enlaza a la portada con el texto «agencia de diseño web» (`KEYWORDS.md:20`).\n- `public/llms.txt` (con la tanda B): el resumen de la agencia se alinea con la nueva respuesta citable.\n\n### Datos estructurados y SEO\n\n- Title se conserva («Agencia de Diseño Web en Panamá | Elemento Web»). El H1 cambia solo con aprobación del dueño.\n- Description: la ya aprobada en `KEYWORDS.md:77` («Agencia de diseño web en Panamá: sitios corporativos, tiendas\n  online y landing pages, con SEO, Google Ads y WhatsApp. Pide tu cotización.»), que `scripts/keywords.test.mjs` ya\n  valida en largo.\n- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (con dirección, horario y mapa desde el 14-oct) y un\n  `ItemList` de 6 `Service`, uno por fila del mapa con su URL principal, sin `Offer` (R37). FAQPage derivado del bloque\n  visible.\n- La portada emite `data-page-type=\"home\"` y entra al marcador con sus reglas reducidas; permisos de SEO congelado\n  (`scripts/cambios-permitidos.json`) para description, schema y H1 (este con el motivo de la sección 1).\n\n### Candidatos de H1 (decide el dueño)\n\nLas tres primeras prometen un resultado («convierte», «trae clientes») que hoy no tiene cifras publicadas que lo\nrespalden (voz Codex); la cuarta no promete nada.\n- «Agencia de diseño web en Panamá que convierte visitas en consultas» (`KEYWORDS.md:77`; la que usa la construcción).\n- «Agencia de diseño web en Panamá que te trae clientes» (propuesta de `SPEC.md`).\n- «Agencia de diseño web en Panamá: webs, SEO y publicidad que traen clientes».\n- «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp».\n- Respaldo si el dueño no aprueba ninguna: mantener «Diseño web en Panamá que convierte visitas en consultas» y cerrar\n  el cambio solo con la description (`KEYWORDS.md:82`); no nombra la agencia y usa la palabra de la pilar.\n\n### Puerta S5 (antes de construir la tanda B, D3, D18, R31)\n\nLas dos voces de la fase CEO piden adelantarla: es lo único barato que puede invalidar la arquitectura. Revisión de la\nSERP de «agencia de diseño web» y de «diseño web panama» (los 5 primeros resultados de cada una; la hace Claude antes\nde la puerta final) y volumen en el Planificador de palabras clave (con la sesión de Google Ads del dueño en Chrome,\ncuando él la abra). Se anota en `audit/s5-agencia-diseno-web-2026-10.md`. Si portada y pilar siguen separadas,\n`KEYWORDS.md` anota una excepción explícita a su regla 2 para la portada: su title y su H1 contienen «diseño web en\nPanamá», la frase reservada a la pilar, y `keywords.test.mjs` hoy no lo comprueba. Con eso el dueño decide el H1 y,\nsi las dos SERP son casi iguales, si la portada y la pilar siguen separadas (D18). Si elige unirlas, este plan se\ndetiene: unir las dos URL exige redirección o canónica y enmendar D36, que congela title, H1 y canónica de la pilar, y\neso va en un plan nuevo. S5 bloquea construir la tanda B (V2), no la tanda A.\n\n### Puerta B de la portada (D3, D19)\n\n- B1: H1 (tras S5) y la decisión de D18.\n- B2: los 26 logos (cuáles son clientes con permiso).\n- B3: la afirmación de equipo interno.\n- B4: precio de IA «desde $2,900».\n- B5: permiso para usar la captura de TramitaPa en el héroe y su testimonio (D3, D25).\n- Los precios propuestos de D4 (D19) no salen en la portada, así que no bloquean esta tanda; su confirmación sigue\n  pendiente para las páginas que los publican.\n- Tras las respuestas, `DECISIONES.md` gana una D50 con T1, T3 y B1 a B5; si T3 = sí, se actualizan el orden de fases\n  en `SCORECARD.md:8` y en la tabla de D1.\n\n### Medición y éxito\n\n- Línea base: con el arreglo de la tanda A ya midiendo, 2 a 4 semanas de la portada actual en GA4 antes de publicar la\n  nueva: sesiones de `/`, `cta_click` y `click_whatsapp` por sesión, `form_start` y `generate_lead` con página `/`.\n- Revisión a las 4 y a las 8 semanas de publicar, con ventanas equivalentes.\n- Meta de consultas por mes (D16) escrita en D50, aunque sea pequeña.\n- Con tan poco volumen, una señal cualitativa: en cada consulta, Nicole anota si la persona vio la web y qué la\n  convenció; el embudo de consulta a reunión a cierre vive en WazaCRM y NousCRM, fuera de este repositorio.\n- La portada no atrae tráfico por sí sola: el éxito depende de una fuente de tráfico con fecha (ver el desafío UC1 de\n  la puerta final).\n\n### Restricciones\n\n- Solo Roboto (fuente autoalojada). Colores y espaciado de `DESIGN.md` y del molde (`src/styles/molde-kredit.css`).\n- Presupuesto de JS y CSS de la plantilla «portada» en `scripts/presupuestos.json`. La hoja del molde en línea suma\n  unos 4,7 KB de CSS: el máximo de la portada sube a lo medido más 3 %, con ese motivo (D44), como se hizo con los hubs\n  y `/precios/`.\n- Rendimiento (D14, D47): LCP de 2,5 s o menos, CLS de 0,02 o menos y Lighthouse móvil local de 90 o más (PageSpeed\n  Insights cuando exista la clave). Ninguna variante que el navegador pueda elegir para la imagen LCP pesa más de 60 KB.\n- Nada con `opacity: 0` en la primera pantalla ni en el elemento LCP; el contenido es visible sin JavaScript.\n- Sin calificaciones con schema; el único testimonio es el de TramitaPa (B5). Google Partner solo con el código oficial\n  de la insignia; «Tech Provider verificado por Meta» con ese nombre (D48).\n- Riel sin cifras (D20, D26); precios del mapa según la matriz de D23.\n- Responsivo y accesible según D27: 390, 768 y 1440; toques de 44 px; encabezados de tabla en la comparación.\n- Enlaces entrantes de contenido: cada página comercial conserva 3 o más (D36); el validador lo comprueba.\n- `npm run verify` en verde, marcador y SEO congelado incluidos; cada push lo aprueba el dueño (D47).\n\n### Criterios de aceptación\n\n- A 1440×900 se ven H1, bajada, botón, WhatsApp, insignia y captura; a 390×844 el botón principal queda dentro de\n  844 px.\n- Respuesta citable de 40 a 60 palabras con fecha, inmediatamente después de la banda del héroe y con enlace a\n  `/nosotros/`; FAQPage igual al bloque visible.\n- Cada escena y cada fila del mapa enlaza a una página existente; la portada enlaza a todas las del mapa.\n- Ningún precio que no esté confirmado en `precios.json`; ninguna afirmación bloqueada; riel sin cifras.\n- Un clic en «Cotizar mi proyecto» envía `cta_click` con `service=definir`; un clic en un enlace `#formulario` envía\n  un solo `cta_click` (caso nuevo en `scripts/qa-form.mjs`).\n- LCP, CLS y puntaje medidos en local con `scripts/medir.mjs` y comparados contra la portada actual; las páginas de la\n  ola 1 tienen su medición en `src/data/mediciones.json` antes de publicar la portada (D14).\n- Capturas a 390, 768 y 1440 de ancho antes de pedir aprobación para publicar.\n- Antes de construir la tanda B: S5 anotada en `audit/` y la puerta final respondida (T1, T3, B1 a B5).\n- Antes de publicar la tanda B: B1 a B5 aplicadas, D50 escrita, 2 semanas o más de línea base y export de Search\n  Console del día anterior (D1).\n- Después de publicar: `gh run watch <id> --exit-status`, `scripts/check-prod.sh` y medición en producción; si\n  PageSpeed queda por debajo de 85 o el LCP por encima de 3,5 s, se revierte con `git revert` y un push aprobado (D14).\n\n### Fuera de alcance\n\n- Insignia de Google Partner (pendiente del código oficial).\n- Reseñas y casos con cifras (pendientes de autorización de clientes).\n- Fotos del equipo (pendientes de permiso).\n- La herramienta pública «mide tu web» (`TODOS.md`).\n- Eventos GA4 por clic en escenas y filas del mapa: pasan a la fase 3 con el resto de eventos (`TODOS.md`).\n- Barra fija en móvil con «Cotizar» y WhatsApp: D21 la pide para las páginas de servicio y nunca se construyó; es un\n  componente nuevo para todo el sitio, no de la portada (`TODOS.md`).\n- Unir portada y pilar si S5 lo sugiere (plan nuevo, ver Puerta S5).\n- Confirmar los precios propuestos de D4 en las páginas que los publican.\n","newText":"### Estructura propuesta (en orden)\n\nEnfoque de construcción (decidido en la revisión CEO, 0D): portada híbrida. Un módulo de datos en `src/lib/portada.ts`\n(fuera de `src/lib/pages/`, para que la ruta `[...slug].astro` no lo publique como página) alimenta los bloques v2\nexistentes de `src/components/Blocks.astro`, llamados uno por uno con `v2` e intercalados con el marcado propio de\n`src/pages/index.astro`: respuesta citable (`[data-block=\"answer\"]` con `.ew-answer`, que lee el validador), maquetas\n(`ejemplos`), comparación (`compare`) y preguntas (`faq`). Héroe, escenas, mapa y proyectos llevan marcado propio. La\nhoja `src/styles/molde-kredit.css` va en línea como en `[...slug].astro:14,53`. La ruta `[...slug].astro` no se toca.\n\nDos versiones, que el dueño elige en la puerta final (T1):\n- **Corta** (el orden de D20 más lo que el dueño ya aprobó después): secciones 1, 2, 3, 5, 7, 10, 11, 12 y 13\n  (9 secciones).\n- **Larga** (este plan): la corta más las secciones marcadas [Larga]: 4, 6, 8 y 9 (13 secciones).\n\nDos tandas de publicación:\n- **Tanda A**, independiente del rediseño, se puede publicar en cuanto el dueño apruebe el push (voces Claude C1 y H3):\n  - el arreglo de `cta_click` en `track.ts` con su prueba y su documentación;\n  - el enlace de la guía de agencia a la portada;\n  - en la portada **actual**, retirar ya lo que no está confirmado: la tira de 26 logos sin nombre\n    (`index.astro:155-170`) y toda la afirmación de equipo interno (`index.astro:650-655`); vuelven solo con B2 y B3;\n  - en la franja de cifras actual, «proyectos publicados» cuenta solo proyectos de clientes: `portfolio.length` (11)\n    incluye WazaCRM, que es producto propio y ya cuenta en «productos propios».\n- **Tanda B**: la portada nueva. Antes de construirla: S5 (ver su sección) y la puerta final con T1, T3, T4 y B1 a B5;\n  antes de publicarla, además, la línea base de medición (ver «Medición y éxito»). Se construye **solo la rama elegida** de cada decisión; las\n  ramas que se describen abajo existen para que la puerta final sepa qué implica cada respuesta.\n\n1. **Héroe de agencia.**\n   - H1: la construcción usa la candidata de `KEYWORDS.md:77`, «Agencia de diseño web en Panamá que convierte visitas\n     en consultas» (D3: se construye con la propuesta; el dueño decide la definitiva al publicar, tras S5). Para que\n     `npm run verify` pase antes de esa decisión, `scripts/cambios-permitidos.json` gana el campo `h1` en la entrada de\n     `/` con el motivo «candidata D3, pendiente de S5»; si el dueño elige otra candidata se actualiza el motivo, y si\n     elige el respaldo se quita el permiso.\n   - Bajada de 15 a 20 palabras que dice para quién trabajamos y cómo (precio publicado, respuesta el mismo día hábil);\n     los nombres de los servicios quedan para el riel, para no repetirlos tres veces en la primera pantalla.\n   - Botón primario «Cotizar mi proyecto» (destino según T4: `/contacto/?servicio=definir#formulario`, que fijan D20\n     y D21, o `#formulario` de la misma página, como las 33 páginas v2). WhatsApp como secundario, con el estilo\n     `ew-btn--ghost` de `PortadaServicio.astro` (el de las 33 páginas v2) y el mensaje «Hola, quiero cotizar un\n     proyecto con Elemento Web.», sin cifras (D23).\n   - Insignia con el texto literal «Tech Provider verificado por Meta» (D48), en la píldora con escudo del pie\n     (`Footer.astro:41`), enlazada a su explicación publicada en `/nosotros/` (`core.ts:229`); reemplaza al par actual\n     «Verificado por Meta / Tech Provider» (`index.astro:104-106`). Los enlaces de mercado Panamá y Miami\n     (`index.astro:99-103`) pasan a la respuesta citable (sección 3). El botón «Ver proyectos reales»\n     (`index.astro:97`) sale: el pie de la captura enlaza al caso.\n   - A la derecha, un proyecto real ya publicado en escritorio y celular: **TramitaPa** (cliente externo con caso en\n     `/casos-de-exito/tramitapa/`), sujeto al permiso B5a. Composición: la de navegador y celular de `Ejemplo.astro`\n     (`ew-dev`) en una variante de héroe; el navegador en caja 4:3 (sin recorte) y el celular superpuesto abajo a la\n     derecha, a un tercio del ancho, con la sombra desplazada sin desenfoque de `DESIGN.md`. Escritorio:\n     `src=\"/portfolio/tramitapa-800.webp\"`, `width=\"800\" height=\"600\"`, `srcset` con `tramitapa-480.webp` (19,5 KB,\n     480×360) y `tramitapa-800.webp` (42,5 KB), `sizes` como en `PortadaServicio.astro:39-41`, `fetchpriority=\"high\"`\n     y `loading=\"eager\"` (en `Ejemplo.astro:60` hoy es `lazy`). `tramitapa-1200.webp` (74,5 KB) no entra; se intenta\n     una versión de 1200 px de 60 KB o menos con `scripts/optimize-images.mjs`, y si no baja se acepta que en pantallas\n     2x la captura se vea menos nítida. Celular: `movil-tramitapa.webp`, 390×844, 22,5 KB, con `width` y `height`, sin\n     `fetchpriority`. En compacto, un `<picture>` con `media` sirve solo la captura de celular, recortada arriba en la\n     caja 3:2, y no descarga la de escritorio (a 358 px una captura de escritorio no se lee).\n   - Pie visible en voz de datos, como enlace de texto: «Proyecto real · tramitapa.com · Trámites de visa, 2025 · Ver el\n     caso →», con la línea `did` de `site.ts:423` («llevar la consulta de visa directo a WhatsApp») como respaldo sin\n     cifras. El `alt` describe la imagen, no el destino; la imagen no es enlace.\n   - Si B5a = no: el héroe usa otro proyecto con caso publicado que el dueño autorice (San Blas Full o Panama\n     International Movers, los dos en `casos.ts` y en el portafolio). Sin ninguno: héroe de una columna (H1 a 20 ch o\n     menos) con la franja de cifras subida bajo los botones como pieza de evidencia, en el patrón de `PrecioPlazo`.\n   - Debajo, el riel con los **nombres** de los 6 servicios del mapa, sin cifras (D20, D26), cada uno enlazado a la URL\n     principal de su fila: 6 columnas desde 1024 px, 3×2 entre 640 y 1023 px y 2×3 en compacto (hoy `.ew-rail` da 4\n     más 2 sueltos). Orden de la banda: riel y luego franja de cifras, las dos sobre el marino del héroe.\n   - A 1440×900 se ven sin desplazarse H1, bajada, botón, WhatsApp, insignia y captura con su pie; el riel y la franja\n     pueden quedar debajo. A 390×844 el botón principal queda dentro de los 844 px y la caja de la imagen empieza antes\n     de los 844 px; para eso el relleno superior de la portada baja a la altura del menú más 24 px (hoy 132 px). En\n     móvil el orden es H1, bajada, botón, WhatsApp, insignia, imagen (caja 3:2 reservada con fondo `primary`, D27) y\n     riel. El H1 se mide con la candidata más larga (unos 66 caracteres).\n2. **Franja de cifras**, como borde inferior de la banda del héroe (aprobada y publicada por el dueño el 14-oct en\n   dd38640; conserva «desde $550» y su enlace a `/saas/`, `index.astro:151`, desvíos de D20 que el dueño aprobó al\n   publicarla). «Proyectos publicados» cuenta solo proyectos de clientes (tanda A).\n3. **Respuesta citable con fecha** (40 a 60 palabras), inmediatamente después de la banda del héroe (`SPEC.md` 3.2,\n   D20): quiénes somos (con enlace a `/nosotros/`, destino de las preguntas GEO 18 y 20 de `KEYWORDS.md:101-102`, que\n   hoy enlaza la sección de equipo en `index.astro:664`), dónde (Ciudad de Panamá; Miami remoto), qué hacemos y cómo\n   cobramos (los enlaces de mercado Panamá y Miami van aquí), con el rótulo «Actualizado el DD/MM». Usa la misma\n   descripción de la entidad que la ficha de Google y los\n   directorios (`docs/autoridad/KIT-AUTORIDAD.md`, sección 1), para que los motores la lean igual en todas partes.\n4. **[Larga] «Por dónde se te van los clientes»:** seis escenas, una por fila del mapa y enlazadas a la URL principal\n   de esa fila, en lista y sin tarjetas: la escena en una frase en voz del cliente y debajo «→ Lo resolvemos con:\n   <servicio>». La web no carga en el celular (diseño web); te preguntan «¿cuánto cuesta?» y no pueden comprar ni\n   pagar en línea (tiendas online); Google no te encuentra (SEO); gastas en pauta y no sabes qué canal trajo la venta\n   (publicidad en Google y Meta, `marketing.ts:105`); tus clientes no vuelven porque nadie les escribe después de la\n   primera compra (WhatsApp marketing); nadie contesta el WhatsApp de noche y las cotizaciones se olvidan (IA y\n   automatización).\n5. **Mapa de servicios (corazón, `SPEC.md` 3.1, D19, D20):** 6 filas, no tarjetas iguales. URL principal de cada\n   fila (la que usan el riel y el `ItemList`) y, entre paréntesis, los enlaces secundarios dentro de la fila:\n   diseño web `/diseno-web-panama/` («Ver casos», a `/casos-de-exito/`, y «¿Ya tienes web? Rediseño», a\n   `/servicios/redisenio-web-panama/`, que reemplaza el camino para quien ya tiene web que hoy dan el selector y el CTA\n   intermedio, `index.astro:466` y `:562`); tiendas online `/servicios/tiendas-online-ecommerce-panama/`; SEO y SEO\n   local `/crecimiento/seo-posicionamiento-web-panama/` (`/crecimiento/seo-local-google-maps-panama/`); publicidad en\n   Google y Meta `/marketing/google-ads-panama/` (`/marketing/facebook-instagram-ads-panama/`); WhatsApp marketing\n   `/marketing/whatsapp-marketing-masivo-panama/`; IA y automatización `/inteligencia-artificial-para-empresas-panama/`\n   (`/marketing/automatizaciones-n8n-panama/`).\n   Cada fila usa el componente «Fila de servicio» de `DESIGN.md` con `id=\"mapa-<fila>\"`: en escritorio, rejilla de tres\n   columnas (nombre | qué resuelve y para quién | enlace); en compacto se apila y el enlace ocupa el ancho completo\n   (44 px). El precio de partida va en línea, en voz de datos, al final de la línea de qué resuelve; una fila sin\n   precio no lleva nada en su lugar. Se lee de `src/data/precios.json` solo si está confirmado (D23): diseño web «desde $550» (`confirmados.web-landing`), tiendas «desde $1,950» (`confirmados.web-ecommerce`);\n   SEO, publicidad y WhatsApp sin cifra (sus precios propuestos de D4 no salen en la portada). IA según la pregunta B4:\n   - B4 = sí: se agrega `confirmados.ia` (2900, fuente `src/lib/pages/ia-empresas.ts`), se quita `ia` de\n     `sinPrecio` y la fila dice «desde $2,900».\n   - B4 = no: la fila va sin cifra y la página de IA pasa a estado `cotizado` con la redacción literal de D23\n     («Cotización cerrada por escrito» y el plazo) en todas las superficies donde hoy dice $2,900: respuesta citable\n     (`ia-empresas.ts:32`), precio y plazo de la portada (`:38`, sale su `Offer`), introducción de alcance (`:117`),\n     fila de la comparación (`:176`), pregunta frecuente (`:188`, que alimenta el FAQPage) y `public/llms.txt:58`; el\n     permiso de su ruta en `scripts/cambios-permitidos.json` cambia de motivo y suma `schema`.\n   El software propio se queda en la columna «Nuestros SaaS» del pie (`Footer.astro:22`, D20) y en el enlace de la\n   franja de cifras (sección 2); los enlaces entrantes de D36 siguen sobrados (`saas` 10, `saas/nouscrm` 8,\n   `saas/cifrao` 6).\n6. **[Larga] «Así se vería»:** tres maquetas del molde (`src/components/Ejemplo.astro`) para servicios que no son\n   web: un resultado de Google, una conversación de WhatsApp y el reporte del mes, con los datos de maquetas ya\n   publicadas (por ejemplo `src/lib/pages/crecimiento.ts:671`). Tres columnas desde 1024 px y una en lo demás (así no\n   queda 2 más 1 a 768 px). Nota de ejemplo obligatoria, sin logos de terceros, y ninguna maqueta afirma un resultado\n   (D44): el reporte (`informe`) usa estados escritos y no cifras de mejora. Cada maqueta enlaza a su servicio. La web\n   no se repite aquí: ya la muestran el héroe y los proyectos.\n7. **Proyectos reales y clientes** (prueba, D20):\n   - El showcase actual se reemplaza por una lista estática de 3 o 4 proyectos con la composición `ew-dev` y enlace a\n     su caso, sin esferas, malla, texto con degradado ni acordeón; sale su título «Diseño que desafía lo común» y la\n     afirmación sin respaldo «convierten y escalan el negocio» (`index.astro:173-452`). TramitaPa no abre la lista,\n     porque ya está en el héroe; su testimonio va pegado a su proyecto. El testimonio de TramitaPa\n     (`index.astro:409-415`, también en `src/lib/pages/casos.ts:65`) se publica solo con el permiso B5b, que cubre\n     también la página del caso: el cliente aprueba la frase tal cual o una que no implique un resultado, porque\n     «las consultas se multiplicaron» convive con «Todavía no publicamos cifras de este proyecto» (`casos.ts:66`). Es\n     un testimonio, sin schema `Review` ni `AggregateRating`; se publica con el permiso B5b, aparte de la captura.\n   - La tira de logos (retirada de la portada actual en la tanda A) vuelve aquí, junto a los proyectos, solo con B2:\n     los logos que el dueño confirme por escrito, en rejilla estática (sin marquee), cada uno con el nombre del cliente\n     como `alt`; con menos de 4 confirmados la tira no va.\n   - Una línea de responsabilidad del fundador como firma al pie de la sección: «Josimar Guilbaud, CEO. Responde por\n     la empresa y por cada proyecto que entregamos.», tal como está publicada en `/nosotros/` (`core.ts:197`), con\n     enlace a esa página; la foto solo si el dueño la quiere (voz Claude M2).\n   - Botón repetido al cerrar la sección: «Cotizar mi proyecto» y WhatsApp, al mismo destino que el héroe, con\n     `data-cta-loc=\"prueba\"`.\n8. **[Larga] «Lo que no hacemos»**, cada línea respaldada por una página publicada: no revendemos plantillas\n   (`src/lib/pages/diseno-web-panama.ts:80`); no prometemos el primer lugar en Google\n   (`src/lib/pages/crecimiento.ts:314`, `core.ts:86`); no intermediamos tu inversión publicitaria (`marketing.ts:47`);\n   no publicamos cifras de clientes\n   sin su permiso (`/casos-de-exito/tramitapa/`, `casos.ts:66`: «Todavía no publicamos cifras de este proyecto»). No\n   se escribe «no te amarramos con contrato» ni «no retenemos tus accesos»: en el plan gestionado de 12 meses los\n   accesos se entregan al liquidar las cuotas pendientes (`site.ts:308`, `precios.ts:145`). La línea del dominio no va\n   aquí: ya está en la comparación de la sección siguiente.\n9. **[Larga] Comparación verificable (D28):** el bloque `compare` existente con `otraCotizacion: true` (columna «tu\n   otra cotización» en blanco) y la línea «Qué preguntar a cualquier proveedor» dentro de `intro` (sin campo nuevo en\n   el bloque compartido). Criterios, cada uno con enlace a su fuente: precios publicados (`/precios/`,\n   `precios.ts:29`); cotización cerrada por escrito (`/precios/`, `precios.ts:18`); plazo por escrito, de 5 días\n   hábiles a 5 semanas (`/precios/`, `precios.ts:42`); dominio a nombre de tu empresa (`/precios/`, `precios.ts:145`);\n   respuesta el mismo día hábil (`/contacto/`, `core.ts:257`). Sin columnas de freelancer ni de plataformas: sin\n   fuente verificable serían generalizaciones.\n10. **Proceso en 4 etapas** con el bloque v2 `steps` (en lugar de las tarjetas que se invierten al pasar el ratón,\n    `index.astro:610`), cada etapa con su entregable: diagnóstico → propuesta con alcance, precio y plazo por escrito;\n    diseño → pantallas aprobadas antes de programar; desarrollo → demo en línea; lanzamiento → web en tu dominio, accesos\n    a tu nombre y capacitación. Al final, el botón repetido (`data-cta-loc=\"proceso\"`).\n11. **Industrias** en una línea de enlaces de texto a las páginas de industria más «Ver todas las industrias» hacia\n    `/industrias/`; sin íconos en mosaico ni fondo marino (`index.astro:621-645`).\n12. **Preguntas frecuentes de agencia** (6 o más), el mismo texto en el schema FAQPage. Temas: SEO o publicidad sin\n    rehacer la web; trabajo fuera de Panamá (Miami remoto); de quién son las cuentas de Google Ads y Meta; plazos;\n    formas de pago; qué pasa si ya tengo web. Todo precio que se cite sale de `confirmados`.\n13. **Formulario** dentro de la página (`#formulario`), con el cierre de agencia como encabezado: «Cuéntanos qué\n    necesitas resolver primero» y tres líneas de apoyo (respuesta el mismo día hábil; diagnóstico sin costo; cotización\n    cerrada por escrito antes de empezar). Reemplaza al CTA intermedio. Según T3:\n    - T3 = sí (la portada sale antes de la fase 3): lleva el `ContactForm` actual; en\n      `scripts/paginas-comerciales.json` el orden pasa a `[\"1\", \"2a\", \"2b\", \"3\", \"4\", \"5\"]` y `faseActual` a `\"2b\"`.\n    - T3 = no: la portada espera a la fase 3 y sale con `ServiceForm` con la clave `definir`.\n    - En los dos casos, cuando `ServiceForm` se active, la portada lo usa con `definir`.\n\nSección de equipo: no va, por el orden de D20 (que no la incluye); `SPEC.md` 3 la mantenía solo con personas con\npermiso. La afirmación de equipo interno ya sale de la portada actual en la tanda A: el título «equipo panameño de verdad»\n(`index.astro:650`), «Equipo 100% interno. No subcontratamos…» (`:651`) y la insignia (`:655`), porque\n`scripts/afirmaciones-bloqueadas.json` bloquea «100% interno» y «equipo interno» en toda página que emite\n`data-page-type`. Si el dueño la confirma por escrito (B3), se quitan esas frases de la lista bloqueada (lo que las\ndesbloquea en todo el sitio) y la afirmación vuelve como una insignia «Equipo 100% interno» junto a la de Meta en el\nhéroe. Si B3 = no, también se corrige la pregunta «¿Subcontratan parte del trabajo?» de `/nosotros/` (`core.ts:228`),\nque hoy dice «equipo interno».\n\nLo que queda en la portada actual tras la tanda A (hasta que salga la tanda B): la sección «Quiénes somos» pierde el\ntítulo «equipo panameño de verdad» y el párrafo «Equipo 100% interno…» (`index.astro:650-651`), y gana el H2 «Quién\nestá detrás» (como en `/nosotros/`) con la tarjeta del fundador y su enlace; de la lista de insignias\n(`index.astro:655`) sale solo «Equipo 100% interno» y se quedan «Tech Provider verificado por Meta», «3 SaaS propios en\nproducción» y «Cotización cerrada por escrito».\n\nSalen de la portada: «¿Qué necesita tu negocio ahora?», el bloque de precios y «Sin letra chica» (ya viven completos\nen la pilar y en `/precios/`); «Soluciones» (lo reemplaza el mapa); «IA y automatización» como sección aparte (entra al\nmapa, `SPEC.md` 3); el bloque de SaaS (queda en el pie, D20); la sección de equipo; el CTA intermedio (pasa a\nencabezado del formulario); el botón «Ver proyectos reales» del héroe.\n\nFuera de la portada (tanda A, salvo `llms.txt`):\n- Arreglo de una medición rota, no diseño de eventos de la fase 3: desde el 13-oct los botones de los hubs y de las\n  páginas de servicio bajan a `#formulario` y `src/scripts/track.ts:29` solo cuenta `cta_click` para enlaces que\n  empiezan con `/contacto/`, así que esos clics no se registran. Regla nueva: un enlace cuyo `href` es exactamente\n  `#formulario` envía `cta_click` con `location` y el servicio de `<main data-service>` si existe; los enlaces a\n  `/contacto/…#formulario` siguen por la rama actual, sin doble conteo. Se actualiza `docs/event-dictionary.md` y\n  `scripts/qa-form.mjs` gana un caso que hace clic en un enlace `#formulario` de `/qa-fixture/formulario/` (si esa\n  página no tiene uno, se le agrega) y comprueba el evento.\n- La guía `/blog/como-elegir-agencia-diseno-web-panama/` (`src/lib/pages/blog-1.ts`), que hoy recibe 94 de las 97\n  impresiones de «agencia de diseño web», enlaza a la portada con el texto «agencia de diseño web» (`KEYWORDS.md:20`).\n- `public/llms.txt` (con la tanda B): el resumen de la agencia se alinea con la nueva respuesta citable.\n\n### Contrato de interfaz (fase de diseño)\n\n- **Fondos y estilo:** solo el héroe (con su riel y su franja) va en marino; el resto alterna `surface` y\n  `surface-alt` (`DESIGN.md`), con el contenedor `.ew-wrap` y los títulos del molde (`molde-kredit.css`). En la\n  portada nueva no quedan esferas, malla, `grad-text` ni `.reveal` de las secciones viejas (`index.astro:173-452`,\n  `:610`, `:621-624`, `:728-731`).\n- **Movimiento:** la portada no se anima (`DESIGN.md`, Motion); sin marquee ni revelados; todo visible sin JavaScript.\n- **Botón repetido:** «Cotizar mi proyecto» y WhatsApp al cerrar la prueba (sección 7) y el proceso (sección 10), en\n  las dos versiones, al mismo destino que el héroe (T4).\n- **Estados:**\n\n| Elemento | Cargando | Vacío | Error | Éxito | Parcial |\n|---|---|---|---|---|---|\n| Captura del héroe | caja 4:3 (3:2 en compacto) reservada con fondo `primary` | B5a = no: héroe de una columna con la franja bajo los botones | imagen rota: queda la caja con el pie de texto | captura con su pie | — |\n| Fila del mapa | — | sin precio confirmado: la fila no lleva cifra ni hueco | — | precio en línea | — |\n| Tira de logos | — | menos de 4 confirmados: la tira no va | — | rejilla estática | — |\n| Testimonio | — | B5b = no: no va; la lista de proyectos queda sin cita | — | cita pegada a su proyecto | — |\n| Formulario | botón desactivado «Enviando…» | — | por campo, foco al primero; red caída: «No pudimos enviar; tus datos siguen aquí» con WhatsApp y correo | confirmación con WhatsApp | según `ContactForm` hoy (D22 cuando llegue `ServiceForm`) |\n\n- **Accesibilidad:** recorrido completo por teclado en orden visual; foco visible (anillo de 3 px) en botones, riel,\n  filas del mapa y pie de la captura; contraste AA medido de cada par nuevo; texto al 200 % sin pérdida; la página se\n  entiende sin JavaScript; `alt` descriptivo en cada captura.\n\n### Datos estructurados y SEO\n\n- Title se conserva («Agencia de Diseño Web en Panamá | Elemento Web»). El H1 cambia solo con aprobación del dueño.\n- Description: la ya aprobada en `KEYWORDS.md:77` («Agencia de diseño web en Panamá: sitios corporativos, tiendas\n  online y landing pages, con SEO, Google Ads y WhatsApp. Pide tu cotización.»), que `scripts/keywords.test.mjs` ya\n  valida en largo.\n- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (con dirección, horario y mapa desde el 14-oct) y un\n  `ItemList` de 6 `Service`, uno por fila del mapa con su URL principal, sin `Offer` (R37). FAQPage derivado del bloque\n  visible.\n- La portada emite `data-page-type=\"home\"` y entra al marcador con sus reglas reducidas; permisos de SEO congelado\n  (`scripts/cambios-permitidos.json`) para description, schema y H1 (este con el motivo de la sección 1).\n\n### Candidatos de H1 (decide el dueño)\n\nLas tres primeras prometen un resultado («convierte», «trae clientes») que hoy no tiene cifras publicadas que lo\nrespalden (voz Codex); la cuarta no promete nada.\n- «Agencia de diseño web en Panamá que convierte visitas en consultas» (`KEYWORDS.md:77`; la que usa la construcción).\n- «Agencia de diseño web en Panamá que te trae clientes» (propuesta de `SPEC.md`).\n- «Agencia de diseño web en Panamá: webs, SEO y publicidad que traen clientes».\n- «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp».\n- Respaldo si el dueño no aprueba ninguna: mantener «Diseño web en Panamá que convierte visitas en consultas» y cerrar\n  el cambio solo con la description (`KEYWORDS.md:82`); no nombra la agencia y usa la palabra de la pilar.\n\n### Puerta S5 (antes de construir la tanda B, D3, D18, R31)\n\nLas dos voces de la fase CEO piden adelantarla: es lo único barato que puede invalidar la arquitectura. Revisión de la\nSERP de «agencia de diseño web» y de «diseño web panama» (los 5 primeros resultados de cada una; la hace Claude antes\nde la puerta final) y volumen en el Planificador de palabras clave (con la sesión de Google Ads del dueño en Chrome,\ncuando él la abra). Se anota en `audit/s5-agencia-diseno-web-2026-10.md`. Si portada y pilar siguen separadas,\n`KEYWORDS.md` anota una excepción explícita a su regla 2 para la portada: su title y su H1 contienen «diseño web en\nPanamá», la frase reservada a la pilar, y `keywords.test.mjs` hoy no lo comprueba. Con eso el dueño decide el H1 y,\nsi las dos SERP son casi iguales, si la portada y la pilar siguen separadas (D18). Si elige unirlas, este plan se\ndetiene: unir las dos URL exige redirección o canónica y enmendar D36, que congela title, H1 y canónica de la pilar, y\neso va en un plan nuevo. S5 bloquea construir la tanda B (V2), no la tanda A.\n\n### Puerta B de la portada (D3, D19)\n\n- B1: H1 (tras S5) y la decisión de D18.\n- B2: los 26 logos (cuáles son clientes con permiso).\n- B3: la afirmación de equipo interno.\n- B4: precio de IA «desde $2,900».\n- B5a: permiso para usar la captura de TramitaPa (o de otro proyecto con caso publicado) en el héroe (D3, D25).\n- B5b: permiso para publicar la frase del testimonio de TramitaPa, tal cual o reescrita sin resultado.\n- Los precios propuestos de D4 (D19) no salen en la portada, así que no bloquean esta tanda; su confirmación sigue\n  pendiente para las páginas que los publican.\n- Tras las respuestas, `DECISIONES.md` gana una D50 con T1, T3, T4 y B1 a B5; si T3 = sí, se actualizan el orden de fases\n  en `SCORECARD.md:8` y en la tabla de D1.\n\n### Medición y éxito\n\n- Línea base: con el arreglo de la tanda A ya midiendo, 2 a 4 semanas de la portada actual en GA4 antes de publicar la\n  nueva: sesiones de `/`, `cta_click` y `click_whatsapp` por sesión, `form_start` y `generate_lead` con página `/`.\n- Revisión a las 4 y a las 8 semanas de publicar, con ventanas equivalentes.\n- Meta de consultas por mes (D16) escrita en D50, aunque sea pequeña.\n- Con tan poco volumen, una señal cualitativa: en cada consulta, Nicole anota si la persona vio la web y qué la\n  convenció; el embudo de consulta a reunión a cierre vive en WazaCRM y NousCRM, fuera de este repositorio.\n- La portada no atrae tráfico por sí sola: el éxito depende de una fuente de tráfico con fecha (ver el desafío UC1 de\n  la puerta final).\n\n### Restricciones\n\n- Solo Roboto (fuente autoalojada). Colores y espaciado de `DESIGN.md` y del molde (`src/styles/molde-kredit.css`).\n- Presupuesto de JS y CSS de la plantilla «portada» en `scripts/presupuestos.json`. La hoja del molde en línea suma\n  unos 4,7 KB de CSS: el máximo de la portada sube a lo medido más 3 %, con ese motivo (D44), como se hizo con los hubs\n  y `/precios/`.\n- Rendimiento (D14, D47): LCP de 2,5 s o menos, CLS de 0,02 o menos y Lighthouse móvil local de 90 o más (PageSpeed\n  Insights cuando exista la clave). Ninguna variante que el navegador pueda elegir para la imagen LCP pesa más de 60 KB.\n- Nada con `opacity: 0` en la primera pantalla ni en el elemento LCP; el contenido es visible sin JavaScript.\n- Sin calificaciones con schema; el único testimonio es el de TramitaPa (B5b). Google Partner solo con el código oficial\n  de la insignia; «Tech Provider verificado por Meta» con ese nombre (D48).\n- Riel sin cifras (D20, D26); precios del mapa según la matriz de D23.\n- Responsivo y accesible según D27: 390, 768 y 1440; toques de 44 px; encabezados de tabla en la comparación.\n- Enlaces entrantes de contenido: cada página comercial conserva 3 o más (D36); el validador lo comprueba.\n- `npm run verify` en verde, marcador y SEO congelado incluidos; cada push lo aprueba el dueño (D47).\n\n### Criterios de aceptación\n\n- A 1440×900 se ven H1, bajada, botón, WhatsApp, insignia y captura con su pie (o, si B5a = no, la franja de cifras\n  bajo los botones); a 390×844 el botón principal queda dentro de 844 px.\n- Respuesta citable de 40 a 60 palabras con fecha, inmediatamente después de la banda del héroe y con enlace a\n  `/nosotros/`; FAQPage igual al bloque visible.\n- Cada escena y cada fila del mapa enlaza a una página existente; la portada enlaza a todas las del mapa.\n- Ningún precio que no esté confirmado en `precios.json`; ninguna afirmación bloqueada; riel sin cifras.\n- Un clic en «Cotizar mi proyecto» envía `cta_click` con `service=definir` (si T4 elige la misma página, la portada\n  declara `<main data-service=\"definir\">` para que la regla nueva lo tome); un clic en un enlace `#formulario` envía\n  un solo `cta_click` (caso nuevo en `scripts/qa-form.mjs`).\n- LCP, CLS y puntaje medidos en local con `scripts/medir.mjs` y comparados contra la portada actual; las páginas de la\n  ola 1 tienen su medición en `src/data/mediciones.json` antes de publicar la portada (D14).\n- Capturas a 390, 768 y 1440 de ancho antes de pedir aprobación para publicar.\n- Recorrido por teclado y contraste AA de cada par nuevo comprobados; estados del formulario de la portada (error por\n  campo, red caída, éxito) probados a 390 y 1440.\n- Sin esferas, malla, `grad-text`, `.reveal` ni marquee en el HTML de la portada nueva.\n- Antes de construir la tanda B: S5 anotada en `audit/` y la puerta final respondida (T1, T3, T4, B1 a B5).\n- Antes de publicar la tanda B: B1 a B5 aplicadas, D50 escrita, 2 semanas o más de línea base y export de Search\n  Console del día anterior (D1).\n- Después de publicar: `gh run watch <id> --exit-status`, `scripts/check-prod.sh` y medición en producción; si\n  PageSpeed queda por debajo de 85 o el LCP por encima de 3,5 s, se revierte con `git revert` y un push aprobado (D14).\n\n### Fuera de alcance\n\n- Insignia de Google Partner (pendiente del código oficial).\n- Reseñas y casos con cifras (pendientes de autorización de clientes).\n- Fotos del equipo (pendientes de permiso).\n- La herramienta pública «mide tu web» (`TODOS.md`).\n- Eventos GA4 por clic en escenas y filas del mapa: pasan a la fase 3 con el resto de eventos (`TODOS.md`).\n- Barra fija en móvil con «Cotizar» y WhatsApp: D21 la pide para las páginas de servicio y nunca se construyó; es un\n  componente nuevo para todo el sitio, no de la portada (`TODOS.md`).\n- Unir portada y pilar si S5 lo sugiere (plan nuevo, ver Puerta S5).\n- Confirmar los precios propuestos de D4 en las páginas que los publican.\n"}]} -->

<!-- autoplan-accepted:design -->
- Obligaciones aceptadas en la revisión de diseño (14-oct-2026); el detalle está en «Estructura propuesta» y en
  «Contrato de interfaz». Donde choquen con el bloque de la fase CEO, mandan estas.
- Destino del botón del héroe y de los botones repetidos según T4 (D20 y D21: `/contacto/?servicio=definir#formulario`;
  o `#formulario` de la misma página, como las 33 páginas v2); revisa la línea del héroe del bloque CEO.
- Héroe: bajada que dice para quién y cómo trabajamos, sin nombrar los servicios; WhatsApp en `ew-btn--ghost` con el
  mensaje «Hola, quiero cotizar un proyecto con Elemento Web.»; insignia de Meta en la píldora del pie enlazada a
  `/nosotros/`; los enlaces Panamá y Miami pasan a la respuesta citable.
- Captura del héroe con la composición `ew-dev` (navegador 4:3 sin recorte y celular superpuesto), `loading="eager"` y
  `fetchpriority="high"` solo en la de escritorio; en compacto un `<picture>` sirve solo la captura de celular en caja
  3:2; pie visible en voz de datos que enlaza al caso; la imagen no es enlace.
- B5 se divide en B5a (captura) y B5b (testimonio); sin captura autorizada, héroe de una columna con la franja de
  cifras bajo los botones.
- Riel en 6 columnas desde 1024 px, 3×2 entre 640 y 1023 px y 2×3 en compacto; relleno superior del héroe a la altura
  del menú más 24 px; la caja de la imagen empieza antes de 844 px a 390×844.
- Escenas (versión larga) en lista, una por fila del mapa y enlazadas a su URL principal.
- Filas del mapa con el componente «Fila de servicio», `id="mapa-<fila>"` y el precio en línea en voz de datos; sin
  hueco en las filas sin precio.
- «Así se vería» en 3 columnas desde 1024 px y 1 en lo demás, con datos de maquetas publicadas, `informe` con estados
  escritos y cada maqueta enlazada a su servicio.
- Proyectos: lista estática de 3 o 4 con `ew-dev` y enlace al caso, sin TramitaPa (ya en el héroe), sin esferas,
  malla, degradado ni acordeón, y sin «Diseño que desafía lo común» ni «convierten y escalan el negocio»; testimonio
  pegado a su proyecto; logos en rejilla estática; firma del fundador con el texto de `core.ts:197`.
- «Lo que no hacemos» sin la línea del dominio (queda en la comparación).
- Proceso con el bloque `steps` y el entregable de cada etapa; industrias como línea de enlaces de texto.
- Preguntas frecuentes de agencia con los 6 temas listados; encabezado del formulario «Cuéntanos qué necesitas
  resolver primero» con sus 3 líneas de apoyo.
- Botón repetido después de la prueba y del proceso, con `data-cta-loc`.
- Solo el héroe en marino; el resto alterna `surface` y `surface-alt`; la portada no se anima (sin marquee ni
  revelados) y todo es visible sin JavaScript.
- Tabla de estados del «Contrato de interfaz» implementada tal cual.
- Accesibilidad: recorrido por teclado, foco visible de 3 px, contraste AA medido de cada par nuevo, texto al 200 %,
  sin JavaScript; estados del formulario de la portada probados a 390 y 1440.
- Tanda A deja en la portada actual el H2 «Quién está detrás» con la tarjeta del fundador y tres insignias (sin
  «Equipo 100% interno»); si B3 = no, se corrige también la pregunta de `/nosotros/` en `core.ts:228`.
<!-- /autoplan-accepted:design -->

### Fase 3 (ingeniería)

**Scope Challenge.** Lo que ya resuelve cada parte: `Base.astro` acepta `pageType` y `service` y los pone en `<main>`
(`src/layouts/Base.astro`, props `pageType` y `service`); `Blocks.astro` se puede llamar bloque por bloque
(`interface Props { blocks: Block[]; v2?: boolean }`); el validador ya tiene reglas reducidas para `home` (respuesta
citable, 6 preguntas o más, FAQ igual al schema, enlaces). Lo que no existe: un héroe con `<picture>` (`Ejemplo.astro`
fuerza `loading="lazy"`), un `ItemList` en `homeJsonLd`, una forma de no cargar `effects.ts`, y pruebas para fragmentos,
JSON-LD y fuentes `srcset`. Conteo: unos 20 archivos (con pruebas y documentos) y 2 piezas nuevas
(`src/lib/portada.ts` y `HeroProyecto.astro`), así que la puerta de complejidad salta. Regla de /autoplan para esta
fase: nunca reducir alcance (P2). Arreglo: el original, ya partido en tanda A (8 archivos, independientes) y tanda B.
Resultado: scope accepted as-is.

```
REALITY: premise-table pass 9 afirmaciones de código comprobadas (Base, Blocks, effects, Ejemplo, check-links, validador, homeJsonLd, core.ts), unverified=0 src/layouts/Base.astro:86
REALITY: already-done pass origin/main sin commits nuevos desde el 14-oct salvo dd38640 src/pages/index.astro:75
REALITY: surface-check pass verify, test, qa-form, qa-lcp, qa-a11y, qa-responsive, check-links, optimize-images y check-prod existen package.json:13
REALITY: binding-decisions finding D20 y D21 (destino del botón) quedan en T4; D19 (orden de fases) en T3; D11 mantiene la excepción de blog-4 docs/specs/rediseno-elementoweb/DECISIONES.md:143
REALITY: numbers pass pesos de imagen [measured: ls public/portfolio], CSS del molde ~4,7 KB [measured: scripts/presupuestos.json:13], JS de la portada [re-measure before gate] scripts/presupuestos.json:9
REALITY: deferred-asks pass X2, X3 y V12 en TODOS.md con motivo; nada nuevo diferido en esta fase TODOS.md:127
REALITY: pr-count pass dos pushes a main (tanda A y tanda B), cada uno con aprobación del dueño (D47) docs/specs/rediseno-elementoweb/DECISIONES.md:246
```

**Dos voces.**
- **Voz Claude** (subagente, INPUT `eng eb56fe59…a663`, coincide con la instantánea): arquitectura híbrida sensata.
  Altos: la afirmación de equipo interno sigue en `/nosotros/` y `/como-trabajamos/`; la métrica de éxito no se compara
  entre ramas de T4; `data-service` en `<main>` contamina todos los eventos y `ContactForm` manda etiquetas. Medios: el
  enlace de `/contacto/` contaría como CTA; el ancla no mueve el foco; la reversión choca con el SEO congelado; subir
  `faseActual` vuelve estrictas dos páginas en `qa-a11y`; precios sin control por clave; casi sin proyectos con caso;
  testimonio fuera de la tanda A; fondos fijos de bloques y botón sin lugar; CSS compartido sin modificadores;
  presupuesto que no limita. Bajos: 9 detalles (texto del kit, `srcset` sin pesar, nitidez móvil, una constante de
  corte, `ItemList` con `@id`, `dark` y `data-cta-loc`, citas por línea, S5 en lectura, estados de `ContactForm`).
- **Voz Codex** (`gpt-5.6-terra`): «Recommendation: revise the component contracts, no-JS form path, analytics taxonomy,
  and automated gates before implementation». Altos: `effects.ts` se carga siempre (sin animación es falso); el héroe
  no cabe en `Ejemplo.astro`; las maquetas no admiten enlace; `ContactForm` no cumple los estados (sin WhatsApp ni
  correo al fallar, sin acción sin JavaScript); analítica con claves y etiquetas mezcladas; `homeJsonLd` no tiene
  `ItemList` y habría dos fuentes de verdad. Medios: faltan pruebas de fragmentos, schema y geometría; el validador no
  pesa `srcset` ni `<source>`.

```
ENG DUAL VOICES — CONSENSUS TABLE:
  Dimensión                           Claude  Codex   Consenso
  1. ¿Arquitectura sólida?             sí*     sí*     CONFIRMED (*con contratos de componente por definir)
  2. ¿Cobertura de pruebas suficiente? no      no      CONFIRMED NO
  3. ¿Riesgos de rendimiento cubiertos? no     no      CONFIRMED NO (effects.ts, presupuesto)
  4. ¿Amenazas de seguridad cubiertas? sí      sí**    CONFIRMED (**sin hallazgos de seguridad)
  5. ¿Rutas de error manejadas?        no      no      CONFIRMED NO (estados de ContactForm)
  6. ¿Riesgo de despliegue manejable?  no      —       Claude sola: reversión y faseActual (Codex no lo evaluó)
```
Sin críticos de una sola voz. El de despliegue (una sola voz) se acepta igual: es una corrección de proceso barata.

**Sección 1, arquitectura.**
```
  index.astro ──> portada.ts (datos únicos: mapa, riel, ItemList, faq) ──> precios.json (por clave, error si falta)
      │                │                                                └─> site.ts (portfolio con propio:true)
      ├─> HeroProyecto.astro (nuevo; clases ew-dev con --hero; <picture>)
      ├─> Blocks.astro (answer, ejemplos, compare, steps, faq; v2; compartido: sin cambios)
      ├─> ContactForm.astro (+ WhatsApp/correo al fallar, noscript; cf:lead con clave)
      └─> Base.astro (dark, pageType="home", sin effects.ts) ──> track.ts (servicio del enlace primero)
  schema.ts homeJsonLd(preguntas, servicios) ──> ItemList @id → <url>#servicio de cada página
```
Hallazgos: [P1] (9/10) `Ejemplo.astro:60` fuerza `loading="lazy"` y una sola imagen: el héroe va en un componente
nuevo (EN-héroe, decidido). [P1] (9/10) `Base.astro:96` importa `effects.ts` en todas las páginas: opción para la
portada (EN13). [P2] (8/10) CSS compartido: modificadores (EN12). [P2] (8/10) reversión y SEO congelado (EN6).
Disposiciones: aceptadas por /autoplan (P5, P1).

**Sección 2, calidad de código.** [P1] (9/10) `src/scripts/track.ts` toma el servicio de `<main>`: con
`data-service="definir"` en `<main>` todo evento de la portada saldría «definir»; el servicio va en el enlace (EN3).
[P1] (8/10) `ContactForm` emite la etiqueta en `cf:lead` y `track.ts` documenta claves: se envía la clave (EN3).
[P2] (8/10) dos fuentes de verdad para FAQ y servicios: una estructura en `portada.ts` (Codex). [P2] (7/10) citas por
número de línea ya desfasadas (`core.ts:228` es `:230`): citar por texto (EN20). Disposiciones: aceptadas.

**Sección 3, pruebas.** Marco: `node --test "scripts/*.test.mjs"` y los `qa-*.mjs` con navegador dentro de `verify`.
```
CODE PATHS                                              USER FLOWS
[+] src/lib/portada.ts                                  [+] Portada → cotizar
  ├── precio por clave        [GAP] node:test nueva       ├── [GAP] [→E2E] clic en Cotizar → cta_click con service (qa-form)
  ├── clave inexistente        [GAP] el build falla        ├── [GAP] [→E2E] ancla #formulario → foco en el formulario
  ├── ItemList @id = filas     [GAP] node:test nueva       └── [GAP] [→E2E] ContactForm en /: error, red caída, éxito
  └── FAQ = FAQPage            [★★★ TESTED] validar-marcador
[+] src/scripts/track.ts                                [+] Primera pantalla
  ├── #formulario → 1 evento   [GAP] qa-form               ├── [GAP] botón dentro de 844 px a 390×844 (qa-lcp)
  ├── /contacto/ excluido      [GAP] qa-form               └── [GAP] pie de la captura a 1440×900 (qa-lcp)
  └── servicio del enlace      [GAP] qa-form
[+] Imagen LCP                                          [+] Honestidad
  ├── src ≤ 60 KB              [★★ TESTED] validar-marcador ├── [GAP] frases bloqueadas en todo dist/ (node:test)
  └── srcset y <source> ≤ 60 KB [GAP] extender el validador └── [GAP] IA sin $2,900 si B4 = no (node:test)

COVERAGE: 2/17 rutas con prueba hoy | todas las GAP tienen prueba asignada en el plan
```
Valor de las nuevas (resumen): `protects=precio de la portada sale de confirmados; fails_when=alguien escribe una cifra
a mano o borra la clave; why_new=las reglas reducidas no miran precios; seam=none; no_claim=que el precio sea el
correcto en el mercado`. `protects=ninguna afirmación bloqueada en ninguna página; fails_when=vuelve «equipo interno»
a /nosotros/; why_new=el validador solo mira páginas con data-page-type; seam=none; no_claim=afirmaciones con otras
palabras`. Plan de pruebas escrito en el disco para `/qa`: `~/.gstack/projects/josimarguilbaud-elementoweb/JosimarG-main-eng-review-test-plan-20261014-211242.md`.

**Sección 4, rendimiento.** [P1] (9/10) la portada carga Lenis, GSAP, cursor y barra de progreso aunque no se anima
(`Base.astro:96`): la opción de no cargar `effects.ts` baja su JS (EN13). [P2] (8/10) el validador pesa solo el `src`
(`validar-marcador.mjs`, `img[fetchpriority=high]`): se extiende a `srcset` y `<source>` (EN15). [P3] (7/10) nitidez
del celular a 2x y 3x: versión de 780 px (EN16). Sin consultas, sin caché ni trabajos en segundo plano: es estático.

**Decisiones de esta fase.**

| ID | Hallazgo | Decisión | Principio |
|---|---|---|---|
| EN1 | equipo interno en /nosotros/ y /como-trabajamos/ | sale en la tanda A; prueba en todo `dist/` | P1 |
| EN2 | métrica no comparable entre ramas de T4 | por sesión con entrada `/`; en D50 | P1 |
| EN3 | servicio en `<main>` y etiquetas en `cf:lead` | servicio en el enlace; clave en `cf:lead` | P1 |
| EN4 | doble conteo en /contacto/ | se excluye | P5 |
| EN5 | el ancla no mueve el foco | `effects.ts` enfoca y actualiza el hash | P1 |
| EN6 | reversión bloqueada | mismo commit y ensayo | P1 |
| EN7 | `faseActual` y `qa-a11y` | `qa-a11y` antes de subir la fase | P1 |
| EN8 | precios sin control por clave; `sinPrecio` muerto | lectura por clave, pruebas, `sinPrecio` fuera | P1 |
| EN9 | pocos proyectos con caso | caso o sitio publicado; `propio: true` | P5 |
| EN10 | testimonio fuera de la tanda A | queda hasta B5b (lo decide el dueño) | P3 |
| EN11 | fondos fijos; botón sin lugar | alternancia en lo posible; botón como marcado propio | P5 |
| EN12 | CSS compartido | modificadores | P1 |
| EN13 | `effects.ts` siempre cargado | opción en `Base` para la portada | P1 |
| EN14 | texto del kit vs 40 a 60 palabras | mismos hechos y NAP | P5 |
| EN15 | validador no pesa `srcset` | se extiende | P1 |
| EN16 | nitidez móvil | 780 px en el `<source>` | P3 |
| EN17 | corte duplicado | una constante; medidas en `<source>` | P5 |
| EN18 | `ItemList` y `qa-seo` | `@id` al nodo existente; limpieza unificada | P5 |
| EN19 | menú y origen de clics | `dark` y `data-cta-loc="hero"` | P1 |
| EN20 | citas por línea | por texto | P5 |
| EN21 | Planificador en cuenta nueva | solo lectura; decide la SERP si hay rangos | P3 |
| EN22 | estados de `ContactForm` | WhatsApp y correo al fallar, `noscript`; prueba en `/` | P1 |
| EN23 | héroe y maquetas fuera de `Ejemplo` | `HeroProyecto.astro`; enlace bajo cada maqueta | P5 |
| EN24 | dos fuentes de verdad de FAQ y servicios | una estructura en `portada.ts` | P1 |

#### Resultados obligatorios de la fase de ingeniería

**Fuera de alcance:** cambiar `Ejemplo.astro` o `Blocks.astro` para la portada (se usan tal cual); `ServiceForm` (fase
3); quitar `effects.ts` de las demás páginas (D40 lo deja para su fase).

**Lo que ya existe:** `Base` con `pageType` y `service`; `Blocks` por bloque; reglas reducidas `home` del validador;
`PrecioPlazo` como patrón; `qa-form`, `qa-lcp`, `qa-a11y`, `check-links`, `seo-congelado`, `presupuestos`.

**Modos de falla.**
```
  RUTA                     | FALLA                              | ¿PRUEBA?         | ¿LO VE?        | ¿CRÍTICO?
  -------------------------|------------------------------------|------------------|----------------|----------
  precio de fila           | clave borrada                      | build + node:test| equipo         | no
  cta_click                | no se envía o se duplica           | qa-form          | nadie          | no (con prueba)
  ancla #formulario        | foco queda en el héroe             | qa-form          | usuario teclado| no (con prueba)
  imagen LCP               | variante > 60 KB                   | validador ext.   | visitante lento| no (con prueba)
  afirmación bloqueada     | vuelve a /nosotros/                | node:test dist   | prospecto      | no (con prueba)
  ContactForm sin JS       | formulario sin acción              | qa-form          | visitante      | no (con aviso)
  reversión                | choca con SEO congelado            | ensayo en rama   | equipo         | no (ensayada)
```
0 brechas críticas.

**Paralelización.**

| Paso | Módulos | Depende de |
|---|---|---|
| A1 medición y foco | `src/scripts/`, `scripts/qa-form.mjs`, `src/components/ContactForm.astro`, `docs/` | — |
| A2 honestidad | `src/lib/pages/core.ts`, `src/pages/index.astro`, `src/lib/site.ts`, pruebas | — |
| A3 guía | `src/lib/pages/blog-1.ts` | — |
| B portada nueva | `src/pages/`, `src/lib/portada.ts`, `src/components/`, `src/lib/schema.ts`, `scripts/` | A1, A2, S5, puerta |

Carriles: A1, A2 y A3 en paralelo; B después (comparte `index.astro` con A2 y `ContactForm` con A1).

**TODOS.md:** recogidos de todas las fases: X2, X3 y V12 ya escritos; ninguno nuevo en ingeniería.

#### Tareas de implementación (fase de ingeniería)

- [ ] **T12 (P1, human: ~3h / CC: ~20min)** — tanda A — Medición y foco: servicio del enlace, clave en `cf:lead`,
  exclusión de /contacto/, foco tras el ancla
  - Surfaced by: EN3, EN4, EN5
  - Files: `src/scripts/track.ts`, `src/scripts/effects.ts`, `src/components/ContactForm.astro`, `scripts/qa-form.mjs`, `docs/event-dictionary.md`
  - Verify: `npm run verify` con los casos nuevos de `qa-form`
- [ ] **T13 (P1, human: ~1h / CC: ~10min)** — tanda A — Equipo interno fuera de /nosotros/ y /como-trabajamos/; prueba en todo dist
  - Surfaced by: EN1
  - Files: `src/lib/pages/core.ts`, `scripts/afirmaciones.test.mjs` (nuevo)
  - Verify: la prueba nueva falla si vuelve «equipo interno» a cualquier `<main>` salvo `blog-4`
- [ ] **T14 (P1, human: ~4h / CC: ~30min)** — tanda B — `HeroProyecto.astro`, opción sin `effects.ts`, modificadores CSS
  - Surfaced by: EN13, EN12, EN23, EN16, EN17, EN19
  - Files: `src/components/HeroProyecto.astro`, `src/layouts/Base.astro`, `src/styles/molde-kredit.css`
  - Verify: `qa-lcp` a 390×844 y 1440×900; la portada sin `effects` en su JS; las 33 páginas v2 sin cambio de HTML
- [ ] **T15 (P1, human: ~3h / CC: ~20min)** — tanda B — `portada.ts` como fuente única, `homeJsonLd` con `ItemList`, precios por clave
  - Surfaced by: EN8, EN18, EN24, A1
  - Files: `src/lib/portada.ts`, `src/lib/schema.ts`, `src/data/precios.json`, `scripts/portada.test.mjs` (nuevo)
  - Verify: `npm test`; validador con FAQ igual al schema; `qa-seo` en verde
- [ ] **T16 (P2, human: ~2h / CC: ~15min)** — verify — Validador pesa `srcset` y `<source>`; fragmentos de `/`
  - Surfaced by: EN15 y Codex
  - Files: `scripts/validar-marcador.mjs`, `scripts/check-links.mjs`
  - Verify: una variante de 74,5 KB en el `srcset` hace fallar `verify`
- [ ] **T17 (P2, human: ~1h / CC: ~10min)** — despliegue — Ensayo de reversión y `qa-a11y` previo a `faseActual`
  - Surfaced by: EN6, EN7
  - Files: ninguno nuevo (rama de ensayo)
  - Verify: la rama con el revert pasa `npm run verify`

#### Resumen de la fase de ingeniería
- Step 0: Scope Challenge — scope accepted as-is (regla de /autoplan: nunca reducir)
- Reality rows: 7/7 applicable rows emitted (`PLAN_REALITY` abajo), 0 unverified premises
- Architecture Review: 4 issues found
- Code Quality Review: 4 issues found
- Test Review: diagram produced, 13 gaps identified (todas con prueba asignada)
- Performance Review: 3 issues found
- NOT in scope: written
- What already exists: written
- TODOS.md updates: 0 items proposed to user (X2, X3 y V12 ya escritos)
- Failure modes: 0 critical gaps flagged
- Unresolved decisions: 0 in this review (las del dueño van a la puerta final)
- Outside voice: codex completed
- Parallelization: 4 lanes, 3 parallel / 1 sequential
- Lake Score: N/A (decisiones automáticas de /autoplan)

<!-- autoplan-baseline-edits:eng {"sourceSha256":"53da928785e807f55f6de8908dbfa10bff949fe336a98a1c371118b4a99d7b00","replacements":[{"oldText":"### Estructura propuesta (en orden)\n\nEnfoque de construcción (decidido en la revisión CEO, 0D): portada híbrida. Un módulo de datos en `src/lib/portada.ts`\n(fuera de `src/lib/pages/`, para que la ruta `[...slug].astro` no lo publique como página) alimenta los bloques v2\nexistentes de `src/components/Blocks.astro`, llamados uno por uno con `v2` e intercalados con el marcado propio de\n`src/pages/index.astro`: respuesta citable (`[data-block=\"answer\"]` con `.ew-answer`, que lee el validador), maquetas\n(`ejemplos`), comparación (`compare`) y preguntas (`faq`). Héroe, escenas, mapa y proyectos llevan marcado propio. La\nhoja `src/styles/molde-kredit.css` va en línea como en `[...slug].astro:14,53`. La ruta `[...slug].astro` no se toca.\n\nDos versiones, que el dueño elige en la puerta final (T1):\n- **Corta** (el orden de D20 más lo que el dueño ya aprobó después): secciones 1, 2, 3, 5, 7, 10, 11, 12 y 13\n  (9 secciones).\n- **Larga** (este plan): la corta más las secciones marcadas [Larga]: 4, 6, 8 y 9 (13 secciones).\n\nDos tandas de publicación:\n- **Tanda A**, independiente del rediseño, se puede publicar en cuanto el dueño apruebe el push (voces Claude C1 y H3):\n  - el arreglo de `cta_click` en `track.ts` con su prueba y su documentación;\n  - el enlace de la guía de agencia a la portada;\n  - en la portada **actual**, retirar ya lo que no está confirmado: la tira de 26 logos sin nombre\n    (`index.astro:155-170`) y toda la afirmación de equipo interno (`index.astro:650-655`); vuelven solo con B2 y B3;\n  - en la franja de cifras actual, «proyectos publicados» cuenta solo proyectos de clientes: `portfolio.length` (11)\n    incluye WazaCRM, que es producto propio y ya cuenta en «productos propios».\n- **Tanda B**: la portada nueva. Antes de construirla: S5 (ver su sección) y la puerta final con T1, T3, T4 y B1 a B5;\n  antes de publicarla, además, la línea base de medición (ver «Medición y éxito»). Se construye **solo la rama elegida** de cada decisión; las\n  ramas que se describen abajo existen para que la puerta final sepa qué implica cada respuesta.\n\n1. **Héroe de agencia.**\n   - H1: la construcción usa la candidata de `KEYWORDS.md:77`, «Agencia de diseño web en Panamá que convierte visitas\n     en consultas» (D3: se construye con la propuesta; el dueño decide la definitiva al publicar, tras S5). Para que\n     `npm run verify` pase antes de esa decisión, `scripts/cambios-permitidos.json` gana el campo `h1` en la entrada de\n     `/` con el motivo «candidata D3, pendiente de S5»; si el dueño elige otra candidata se actualiza el motivo, y si\n     elige el respaldo se quita el permiso.\n   - Bajada de 15 a 20 palabras que dice para quién trabajamos y cómo (precio publicado, respuesta el mismo día hábil);\n     los nombres de los servicios quedan para el riel, para no repetirlos tres veces en la primera pantalla.\n   - Botón primario «Cotizar mi proyecto» (destino según T4: `/contacto/?servicio=definir#formulario`, que fijan D20\n     y D21, o `#formulario` de la misma página, como las 33 páginas v2). WhatsApp como secundario, con el estilo\n     `ew-btn--ghost` de `PortadaServicio.astro` (el de las 33 páginas v2) y el mensaje «Hola, quiero cotizar un\n     proyecto con Elemento Web.», sin cifras (D23).\n   - Insignia con el texto literal «Tech Provider verificado por Meta» (D48), en la píldora con escudo del pie\n     (`Footer.astro:41`), enlazada a su explicación publicada en `/nosotros/` (`core.ts:229`); reemplaza al par actual\n     «Verificado por Meta / Tech Provider» (`index.astro:104-106`). Los enlaces de mercado Panamá y Miami\n     (`index.astro:99-103`) pasan a la respuesta citable (sección 3). El botón «Ver proyectos reales»\n     (`index.astro:97`) sale: el pie de la captura enlaza al caso.\n   - A la derecha, un proyecto real ya publicado en escritorio y celular: **TramitaPa** (cliente externo con caso en\n     `/casos-de-exito/tramitapa/`), sujeto al permiso B5a. Composición: la de navegador y celular de `Ejemplo.astro`\n     (`ew-dev`) en una variante de héroe; el navegador en caja 4:3 (sin recorte) y el celular superpuesto abajo a la\n     derecha, a un tercio del ancho, con la sombra desplazada sin desenfoque de `DESIGN.md`. Escritorio:\n     `src=\"/portfolio/tramitapa-800.webp\"`, `width=\"800\" height=\"600\"`, `srcset` con `tramitapa-480.webp` (19,5 KB,\n     480×360) y `tramitapa-800.webp` (42,5 KB), `sizes` como en `PortadaServicio.astro:39-41`, `fetchpriority=\"high\"`\n     y `loading=\"eager\"` (en `Ejemplo.astro:60` hoy es `lazy`). `tramitapa-1200.webp` (74,5 KB) no entra; se intenta\n     una versión de 1200 px de 60 KB o menos con `scripts/optimize-images.mjs`, y si no baja se acepta que en pantallas\n     2x la captura se vea menos nítida. Celular: `movil-tramitapa.webp`, 390×844, 22,5 KB, con `width` y `height`, sin\n     `fetchpriority`. En compacto, un `<picture>` con `media` sirve solo la captura de celular, recortada arriba en la\n     caja 3:2, y no descarga la de escritorio (a 358 px una captura de escritorio no se lee).\n   - Pie visible en voz de datos, como enlace de texto: «Proyecto real · tramitapa.com · Trámites de visa, 2025 · Ver el\n     caso →», con la línea `did` de `site.ts:423` («llevar la consulta de visa directo a WhatsApp») como respaldo sin\n     cifras. El `alt` describe la imagen, no el destino; la imagen no es enlace.\n   - Si B5a = no: el héroe usa otro proyecto con caso publicado que el dueño autorice (San Blas Full o Panama\n     International Movers, los dos en `casos.ts` y en el portafolio). Sin ninguno: héroe de una columna (H1 a 20 ch o\n     menos) con la franja de cifras subida bajo los botones como pieza de evidencia, en el patrón de `PrecioPlazo`.\n   - Debajo, el riel con los **nombres** de los 6 servicios del mapa, sin cifras (D20, D26), cada uno enlazado a la URL\n     principal de su fila: 6 columnas desde 1024 px, 3×2 entre 640 y 1023 px y 2×3 en compacto (hoy `.ew-rail` da 4\n     más 2 sueltos). Orden de la banda: riel y luego franja de cifras, las dos sobre el marino del héroe.\n   - A 1440×900 se ven sin desplazarse H1, bajada, botón, WhatsApp, insignia y captura con su pie; el riel y la franja\n     pueden quedar debajo. A 390×844 el botón principal queda dentro de los 844 px y la caja de la imagen empieza antes\n     de los 844 px; para eso el relleno superior de la portada baja a la altura del menú más 24 px (hoy 132 px). En\n     móvil el orden es H1, bajada, botón, WhatsApp, insignia, imagen (caja 3:2 reservada con fondo `primary`, D27) y\n     riel. El H1 se mide con la candidata más larga (unos 66 caracteres).\n2. **Franja de cifras**, como borde inferior de la banda del héroe (aprobada y publicada por el dueño el 14-oct en\n   dd38640; conserva «desde $550» y su enlace a `/saas/`, `index.astro:151`, desvíos de D20 que el dueño aprobó al\n   publicarla). «Proyectos publicados» cuenta solo proyectos de clientes (tanda A).\n3. **Respuesta citable con fecha** (40 a 60 palabras), inmediatamente después de la banda del héroe (`SPEC.md` 3.2,\n   D20): quiénes somos (con enlace a `/nosotros/`, destino de las preguntas GEO 18 y 20 de `KEYWORDS.md:101-102`, que\n   hoy enlaza la sección de equipo en `index.astro:664`), dónde (Ciudad de Panamá; Miami remoto), qué hacemos y cómo\n   cobramos (los enlaces de mercado Panamá y Miami van aquí), con el rótulo «Actualizado el DD/MM». Usa la misma\n   descripción de la entidad que la ficha de Google y los\n   directorios (`docs/autoridad/KIT-AUTORIDAD.md`, sección 1), para que los motores la lean igual en todas partes.\n4. **[Larga] «Por dónde se te van los clientes»:** seis escenas, una por fila del mapa y enlazadas a la URL principal\n   de esa fila, en lista y sin tarjetas: la escena en una frase en voz del cliente y debajo «→ Lo resolvemos con:\n   <servicio>». La web no carga en el celular (diseño web); te preguntan «¿cuánto cuesta?» y no pueden comprar ni\n   pagar en línea (tiendas online); Google no te encuentra (SEO); gastas en pauta y no sabes qué canal trajo la venta\n   (publicidad en Google y Meta, `marketing.ts:105`); tus clientes no vuelven porque nadie les escribe después de la\n   primera compra (WhatsApp marketing); nadie contesta el WhatsApp de noche y las cotizaciones se olvidan (IA y\n   automatización).\n5. **Mapa de servicios (corazón, `SPEC.md` 3.1, D19, D20):** 6 filas, no tarjetas iguales. URL principal de cada\n   fila (la que usan el riel y el `ItemList`) y, entre paréntesis, los enlaces secundarios dentro de la fila:\n   diseño web `/diseno-web-panama/` («Ver casos», a `/casos-de-exito/`, y «¿Ya tienes web? Rediseño», a\n   `/servicios/redisenio-web-panama/`, que reemplaza el camino para quien ya tiene web que hoy dan el selector y el CTA\n   intermedio, `index.astro:466` y `:562`); tiendas online `/servicios/tiendas-online-ecommerce-panama/`; SEO y SEO\n   local `/crecimiento/seo-posicionamiento-web-panama/` (`/crecimiento/seo-local-google-maps-panama/`); publicidad en\n   Google y Meta `/marketing/google-ads-panama/` (`/marketing/facebook-instagram-ads-panama/`); WhatsApp marketing\n   `/marketing/whatsapp-marketing-masivo-panama/`; IA y automatización `/inteligencia-artificial-para-empresas-panama/`\n   (`/marketing/automatizaciones-n8n-panama/`).\n   Cada fila usa el componente «Fila de servicio» de `DESIGN.md` con `id=\"mapa-<fila>\"`: en escritorio, rejilla de tres\n   columnas (nombre | qué resuelve y para quién | enlace); en compacto se apila y el enlace ocupa el ancho completo\n   (44 px). El precio de partida va en línea, en voz de datos, al final de la línea de qué resuelve; una fila sin\n   precio no lleva nada en su lugar. Se lee de `src/data/precios.json` solo si está confirmado (D23): diseño web «desde $550» (`confirmados.web-landing`), tiendas «desde $1,950» (`confirmados.web-ecommerce`);\n   SEO, publicidad y WhatsApp sin cifra (sus precios propuestos de D4 no salen en la portada). IA según la pregunta B4:\n   - B4 = sí: se agrega `confirmados.ia` (2900, fuente `src/lib/pages/ia-empresas.ts`), se quita `ia` de\n     `sinPrecio` y la fila dice «desde $2,900».\n   - B4 = no: la fila va sin cifra y la página de IA pasa a estado `cotizado` con la redacción literal de D23\n     («Cotización cerrada por escrito» y el plazo) en todas las superficies donde hoy dice $2,900: respuesta citable\n     (`ia-empresas.ts:32`), precio y plazo de la portada (`:38`, sale su `Offer`), introducción de alcance (`:117`),\n     fila de la comparación (`:176`), pregunta frecuente (`:188`, que alimenta el FAQPage) y `public/llms.txt:58`; el\n     permiso de su ruta en `scripts/cambios-permitidos.json` cambia de motivo y suma `schema`.\n   El software propio se queda en la columna «Nuestros SaaS» del pie (`Footer.astro:22`, D20) y en el enlace de la\n   franja de cifras (sección 2); los enlaces entrantes de D36 siguen sobrados (`saas` 10, `saas/nouscrm` 8,\n   `saas/cifrao` 6).\n6. **[Larga] «Así se vería»:** tres maquetas del molde (`src/components/Ejemplo.astro`) para servicios que no son\n   web: un resultado de Google, una conversación de WhatsApp y el reporte del mes, con los datos de maquetas ya\n   publicadas (por ejemplo `src/lib/pages/crecimiento.ts:671`). Tres columnas desde 1024 px y una en lo demás (así no\n   queda 2 más 1 a 768 px). Nota de ejemplo obligatoria, sin logos de terceros, y ninguna maqueta afirma un resultado\n   (D44): el reporte (`informe`) usa estados escritos y no cifras de mejora. Cada maqueta enlaza a su servicio. La web\n   no se repite aquí: ya la muestran el héroe y los proyectos.\n7. **Proyectos reales y clientes** (prueba, D20):\n   - El showcase actual se reemplaza por una lista estática de 3 o 4 proyectos con la composición `ew-dev` y enlace a\n     su caso, sin esferas, malla, texto con degradado ni acordeón; sale su título «Diseño que desafía lo común» y la\n     afirmación sin respaldo «convierten y escalan el negocio» (`index.astro:173-452`). TramitaPa no abre la lista,\n     porque ya está en el héroe; su testimonio va pegado a su proyecto. El testimonio de TramitaPa\n     (`index.astro:409-415`, también en `src/lib/pages/casos.ts:65`) se publica solo con el permiso B5b, que cubre\n     también la página del caso: el cliente aprueba la frase tal cual o una que no implique un resultado, porque\n     «las consultas se multiplicaron» convive con «Todavía no publicamos cifras de este proyecto» (`casos.ts:66`). Es\n     un testimonio, sin schema `Review` ni `AggregateRating`; se publica con el permiso B5b, aparte de la captura.\n   - La tira de logos (retirada de la portada actual en la tanda A) vuelve aquí, junto a los proyectos, solo con B2:\n     los logos que el dueño confirme por escrito, en rejilla estática (sin marquee), cada uno con el nombre del cliente\n     como `alt`; con menos de 4 confirmados la tira no va.\n   - Una línea de responsabilidad del fundador como firma al pie de la sección: «Josimar Guilbaud, CEO. Responde por\n     la empresa y por cada proyecto que entregamos.», tal como está publicada en `/nosotros/` (`core.ts:197`), con\n     enlace a esa página; la foto solo si el dueño la quiere (voz Claude M2).\n   - Botón repetido al cerrar la sección: «Cotizar mi proyecto» y WhatsApp, al mismo destino que el héroe, con\n     `data-cta-loc=\"prueba\"`.\n8. **[Larga] «Lo que no hacemos»**, cada línea respaldada por una página publicada: no revendemos plantillas\n   (`src/lib/pages/diseno-web-panama.ts:80`); no prometemos el primer lugar en Google\n   (`src/lib/pages/crecimiento.ts:314`, `core.ts:86`); no intermediamos tu inversión publicitaria (`marketing.ts:47`);\n   no publicamos cifras de clientes\n   sin su permiso (`/casos-de-exito/tramitapa/`, `casos.ts:66`: «Todavía no publicamos cifras de este proyecto»). No\n   se escribe «no te amarramos con contrato» ni «no retenemos tus accesos»: en el plan gestionado de 12 meses los\n   accesos se entregan al liquidar las cuotas pendientes (`site.ts:308`, `precios.ts:145`). La línea del dominio no va\n   aquí: ya está en la comparación de la sección siguiente.\n9. **[Larga] Comparación verificable (D28):** el bloque `compare` existente con `otraCotizacion: true` (columna «tu\n   otra cotización» en blanco) y la línea «Qué preguntar a cualquier proveedor» dentro de `intro` (sin campo nuevo en\n   el bloque compartido). Criterios, cada uno con enlace a su fuente: precios publicados (`/precios/`,\n   `precios.ts:29`); cotización cerrada por escrito (`/precios/`, `precios.ts:18`); plazo por escrito, de 5 días\n   hábiles a 5 semanas (`/precios/`, `precios.ts:42`); dominio a nombre de tu empresa (`/precios/`, `precios.ts:145`);\n   respuesta el mismo día hábil (`/contacto/`, `core.ts:257`). Sin columnas de freelancer ni de plataformas: sin\n   fuente verificable serían generalizaciones.\n10. **Proceso en 4 etapas** con el bloque v2 `steps` (en lugar de las tarjetas que se invierten al pasar el ratón,\n    `index.astro:610`), cada etapa con su entregable: diagnóstico → propuesta con alcance, precio y plazo por escrito;\n    diseño → pantallas aprobadas antes de programar; desarrollo → demo en línea; lanzamiento → web en tu dominio, accesos\n    a tu nombre y capacitación. Al final, el botón repetido (`data-cta-loc=\"proceso\"`).\n11. **Industrias** en una línea de enlaces de texto a las páginas de industria más «Ver todas las industrias» hacia\n    `/industrias/`; sin íconos en mosaico ni fondo marino (`index.astro:621-645`).\n12. **Preguntas frecuentes de agencia** (6 o más), el mismo texto en el schema FAQPage. Temas: SEO o publicidad sin\n    rehacer la web; trabajo fuera de Panamá (Miami remoto); de quién son las cuentas de Google Ads y Meta; plazos;\n    formas de pago; qué pasa si ya tengo web. Todo precio que se cite sale de `confirmados`.\n13. **Formulario** dentro de la página (`#formulario`), con el cierre de agencia como encabezado: «Cuéntanos qué\n    necesitas resolver primero» y tres líneas de apoyo (respuesta el mismo día hábil; diagnóstico sin costo; cotización\n    cerrada por escrito antes de empezar). Reemplaza al CTA intermedio. Según T3:\n    - T3 = sí (la portada sale antes de la fase 3): lleva el `ContactForm` actual; en\n      `scripts/paginas-comerciales.json` el orden pasa a `[\"1\", \"2a\", \"2b\", \"3\", \"4\", \"5\"]` y `faseActual` a `\"2b\"`.\n    - T3 = no: la portada espera a la fase 3 y sale con `ServiceForm` con la clave `definir`.\n    - En los dos casos, cuando `ServiceForm` se active, la portada lo usa con `definir`.\n\nSección de equipo: no va, por el orden de D20 (que no la incluye); `SPEC.md` 3 la mantenía solo con personas con\npermiso. La afirmación de equipo interno ya sale de la portada actual en la tanda A: el título «equipo panameño de verdad»\n(`index.astro:650`), «Equipo 100% interno. No subcontratamos…» (`:651`) y la insignia (`:655`), porque\n`scripts/afirmaciones-bloqueadas.json` bloquea «100% interno» y «equipo interno» en toda página que emite\n`data-page-type`. Si el dueño la confirma por escrito (B3), se quitan esas frases de la lista bloqueada (lo que las\ndesbloquea en todo el sitio) y la afirmación vuelve como una insignia «Equipo 100% interno» junto a la de Meta en el\nhéroe. Si B3 = no, también se corrige la pregunta «¿Subcontratan parte del trabajo?» de `/nosotros/` (`core.ts:228`),\nque hoy dice «equipo interno».\n\nLo que queda en la portada actual tras la tanda A (hasta que salga la tanda B): la sección «Quiénes somos» pierde el\ntítulo «equipo panameño de verdad» y el párrafo «Equipo 100% interno…» (`index.astro:650-651`), y gana el H2 «Quién\nestá detrás» (como en `/nosotros/`) con la tarjeta del fundador y su enlace; de la lista de insignias\n(`index.astro:655`) sale solo «Equipo 100% interno» y se quedan «Tech Provider verificado por Meta», «3 SaaS propios en\nproducción» y «Cotización cerrada por escrito».\n\nSalen de la portada: «¿Qué necesita tu negocio ahora?», el bloque de precios y «Sin letra chica» (ya viven completos\nen la pilar y en `/precios/`); «Soluciones» (lo reemplaza el mapa); «IA y automatización» como sección aparte (entra al\nmapa, `SPEC.md` 3); el bloque de SaaS (queda en el pie, D20); la sección de equipo; el CTA intermedio (pasa a\nencabezado del formulario); el botón «Ver proyectos reales» del héroe.\n\nFuera de la portada (tanda A, salvo `llms.txt`):\n- Arreglo de una medición rota, no diseño de eventos de la fase 3: desde el 13-oct los botones de los hubs y de las\n  páginas de servicio bajan a `#formulario` y `src/scripts/track.ts:29` solo cuenta `cta_click` para enlaces que\n  empiezan con `/contacto/`, así que esos clics no se registran. Regla nueva: un enlace cuyo `href` es exactamente\n  `#formulario` envía `cta_click` con `location` y el servicio de `<main data-service>` si existe; los enlaces a\n  `/contacto/…#formulario` siguen por la rama actual, sin doble conteo. Se actualiza `docs/event-dictionary.md` y\n  `scripts/qa-form.mjs` gana un caso que hace clic en un enlace `#formulario` de `/qa-fixture/formulario/` (si esa\n  página no tiene uno, se le agrega) y comprueba el evento.\n- La guía `/blog/como-elegir-agencia-diseno-web-panama/` (`src/lib/pages/blog-1.ts`), que hoy recibe 94 de las 97\n  impresiones de «agencia de diseño web», enlaza a la portada con el texto «agencia de diseño web» (`KEYWORDS.md:20`).\n- `public/llms.txt` (con la tanda B): el resumen de la agencia se alinea con la nueva respuesta citable.\n\n### Contrato de interfaz (fase de diseño)\n\n- **Fondos y estilo:** solo el héroe (con su riel y su franja) va en marino; el resto alterna `surface` y\n  `surface-alt` (`DESIGN.md`), con el contenedor `.ew-wrap` y los títulos del molde (`molde-kredit.css`). En la\n  portada nueva no quedan esferas, malla, `grad-text` ni `.reveal` de las secciones viejas (`index.astro:173-452`,\n  `:610`, `:621-624`, `:728-731`).\n- **Movimiento:** la portada no se anima (`DESIGN.md`, Motion); sin marquee ni revelados; todo visible sin JavaScript.\n- **Botón repetido:** «Cotizar mi proyecto» y WhatsApp al cerrar la prueba (sección 7) y el proceso (sección 10), en\n  las dos versiones, al mismo destino que el héroe (T4).\n- **Estados:**\n\n| Elemento | Cargando | Vacío | Error | Éxito | Parcial |\n|---|---|---|---|---|---|\n| Captura del héroe | caja 4:3 (3:2 en compacto) reservada con fondo `primary` | B5a = no: héroe de una columna con la franja bajo los botones | imagen rota: queda la caja con el pie de texto | captura con su pie | — |\n| Fila del mapa | — | sin precio confirmado: la fila no lleva cifra ni hueco | — | precio en línea | — |\n| Tira de logos | — | menos de 4 confirmados: la tira no va | — | rejilla estática | — |\n| Testimonio | — | B5b = no: no va; la lista de proyectos queda sin cita | — | cita pegada a su proyecto | — |\n| Formulario | botón desactivado «Enviando…» | — | por campo, foco al primero; red caída: «No pudimos enviar; tus datos siguen aquí» con WhatsApp y correo | confirmación con WhatsApp | según `ContactForm` hoy (D22 cuando llegue `ServiceForm`) |\n\n- **Accesibilidad:** recorrido completo por teclado en orden visual; foco visible (anillo de 3 px) en botones, riel,\n  filas del mapa y pie de la captura; contraste AA medido de cada par nuevo; texto al 200 % sin pérdida; la página se\n  entiende sin JavaScript; `alt` descriptivo en cada captura.\n\n### Datos estructurados y SEO\n\n- Title se conserva («Agencia de Diseño Web en Panamá | Elemento Web»). El H1 cambia solo con aprobación del dueño.\n- Description: la ya aprobada en `KEYWORDS.md:77` («Agencia de diseño web en Panamá: sitios corporativos, tiendas\n  online y landing pages, con SEO, Google Ads y WhatsApp. Pide tu cotización.»), que `scripts/keywords.test.mjs` ya\n  valida en largo.\n- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (con dirección, horario y mapa desde el 14-oct) y un\n  `ItemList` de 6 `Service`, uno por fila del mapa con su URL principal, sin `Offer` (R37). FAQPage derivado del bloque\n  visible.\n- La portada emite `data-page-type=\"home\"` y entra al marcador con sus reglas reducidas; permisos de SEO congelado\n  (`scripts/cambios-permitidos.json`) para description, schema y H1 (este con el motivo de la sección 1).\n\n### Candidatos de H1 (decide el dueño)\n\nLas tres primeras prometen un resultado («convierte», «trae clientes») que hoy no tiene cifras publicadas que lo\nrespalden (voz Codex); la cuarta no promete nada.\n- «Agencia de diseño web en Panamá que convierte visitas en consultas» (`KEYWORDS.md:77`; la que usa la construcción).\n- «Agencia de diseño web en Panamá que te trae clientes» (propuesta de `SPEC.md`).\n- «Agencia de diseño web en Panamá: webs, SEO y publicidad que traen clientes».\n- «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp».\n- Respaldo si el dueño no aprueba ninguna: mantener «Diseño web en Panamá que convierte visitas en consultas» y cerrar\n  el cambio solo con la description (`KEYWORDS.md:82`); no nombra la agencia y usa la palabra de la pilar.\n\n### Puerta S5 (antes de construir la tanda B, D3, D18, R31)\n\nLas dos voces de la fase CEO piden adelantarla: es lo único barato que puede invalidar la arquitectura. Revisión de la\nSERP de «agencia de diseño web» y de «diseño web panama» (los 5 primeros resultados de cada una; la hace Claude antes\nde la puerta final) y volumen en el Planificador de palabras clave (con la sesión de Google Ads del dueño en Chrome,\ncuando él la abra). Se anota en `audit/s5-agencia-diseno-web-2026-10.md`. Si portada y pilar siguen separadas,\n`KEYWORDS.md` anota una excepción explícita a su regla 2 para la portada: su title y su H1 contienen «diseño web en\nPanamá», la frase reservada a la pilar, y `keywords.test.mjs` hoy no lo comprueba. Con eso el dueño decide el H1 y,\nsi las dos SERP son casi iguales, si la portada y la pilar siguen separadas (D18). Si elige unirlas, este plan se\ndetiene: unir las dos URL exige redirección o canónica y enmendar D36, que congela title, H1 y canónica de la pilar, y\neso va en un plan nuevo. S5 bloquea construir la tanda B (V2), no la tanda A.\n\n### Puerta B de la portada (D3, D19)\n\n- B1: H1 (tras S5) y la decisión de D18.\n- B2: los 26 logos (cuáles son clientes con permiso).\n- B3: la afirmación de equipo interno.\n- B4: precio de IA «desde $2,900».\n- B5a: permiso para usar la captura de TramitaPa (o de otro proyecto con caso publicado) en el héroe (D3, D25).\n- B5b: permiso para publicar la frase del testimonio de TramitaPa, tal cual o reescrita sin resultado.\n- Los precios propuestos de D4 (D19) no salen en la portada, así que no bloquean esta tanda; su confirmación sigue\n  pendiente para las páginas que los publican.\n- Tras las respuestas, `DECISIONES.md` gana una D50 con T1, T3, T4 y B1 a B5; si T3 = sí, se actualizan el orden de fases\n  en `SCORECARD.md:8` y en la tabla de D1.\n\n### Medición y éxito\n\n- Línea base: con el arreglo de la tanda A ya midiendo, 2 a 4 semanas de la portada actual en GA4 antes de publicar la\n  nueva: sesiones de `/`, `cta_click` y `click_whatsapp` por sesión, `form_start` y `generate_lead` con página `/`.\n- Revisión a las 4 y a las 8 semanas de publicar, con ventanas equivalentes.\n- Meta de consultas por mes (D16) escrita en D50, aunque sea pequeña.\n- Con tan poco volumen, una señal cualitativa: en cada consulta, Nicole anota si la persona vio la web y qué la\n  convenció; el embudo de consulta a reunión a cierre vive en WazaCRM y NousCRM, fuera de este repositorio.\n- La portada no atrae tráfico por sí sola: el éxito depende de una fuente de tráfico con fecha (ver el desafío UC1 de\n  la puerta final).\n\n### Restricciones\n\n- Solo Roboto (fuente autoalojada). Colores y espaciado de `DESIGN.md` y del molde (`src/styles/molde-kredit.css`).\n- Presupuesto de JS y CSS de la plantilla «portada» en `scripts/presupuestos.json`. La hoja del molde en línea suma\n  unos 4,7 KB de CSS: el máximo de la portada sube a lo medido más 3 %, con ese motivo (D44), como se hizo con los hubs\n  y `/precios/`.\n- Rendimiento (D14, D47): LCP de 2,5 s o menos, CLS de 0,02 o menos y Lighthouse móvil local de 90 o más (PageSpeed\n  Insights cuando exista la clave). Ninguna variante que el navegador pueda elegir para la imagen LCP pesa más de 60 KB.\n- Nada con `opacity: 0` en la primera pantalla ni en el elemento LCP; el contenido es visible sin JavaScript.\n- Sin calificaciones con schema; el único testimonio es el de TramitaPa (B5b). Google Partner solo con el código oficial\n  de la insignia; «Tech Provider verificado por Meta» con ese nombre (D48).\n- Riel sin cifras (D20, D26); precios del mapa según la matriz de D23.\n- Responsivo y accesible según D27: 390, 768 y 1440; toques de 44 px; encabezados de tabla en la comparación.\n- Enlaces entrantes de contenido: cada página comercial conserva 3 o más (D36); el validador lo comprueba.\n- `npm run verify` en verde, marcador y SEO congelado incluidos; cada push lo aprueba el dueño (D47).\n\n### Criterios de aceptación\n\n- A 1440×900 se ven H1, bajada, botón, WhatsApp, insignia y captura con su pie (o, si B5a = no, la franja de cifras\n  bajo los botones); a 390×844 el botón principal queda dentro de 844 px.\n- Respuesta citable de 40 a 60 palabras con fecha, inmediatamente después de la banda del héroe y con enlace a\n  `/nosotros/`; FAQPage igual al bloque visible.\n- Cada escena y cada fila del mapa enlaza a una página existente; la portada enlaza a todas las del mapa.\n- Ningún precio que no esté confirmado en `precios.json`; ninguna afirmación bloqueada; riel sin cifras.\n- Un clic en «Cotizar mi proyecto» envía `cta_click` con `service=definir` (si T4 elige la misma página, la portada\n  declara `<main data-service=\"definir\">` para que la regla nueva lo tome); un clic en un enlace `#formulario` envía\n  un solo `cta_click` (caso nuevo en `scripts/qa-form.mjs`).\n- LCP, CLS y puntaje medidos en local con `scripts/medir.mjs` y comparados contra la portada actual; las páginas de la\n  ola 1 tienen su medición en `src/data/mediciones.json` antes de publicar la portada (D14).\n- Capturas a 390, 768 y 1440 de ancho antes de pedir aprobación para publicar.\n- Recorrido por teclado y contraste AA de cada par nuevo comprobados; estados del formulario de la portada (error por\n  campo, red caída, éxito) probados a 390 y 1440.\n- Sin esferas, malla, `grad-text`, `.reveal` ni marquee en el HTML de la portada nueva.\n- Antes de construir la tanda B: S5 anotada en `audit/` y la puerta final respondida (T1, T3, T4, B1 a B5).\n- Antes de publicar la tanda B: B1 a B5 aplicadas, D50 escrita, 2 semanas o más de línea base y export de Search\n  Console del día anterior (D1).\n- Después de publicar: `gh run watch <id> --exit-status`, `scripts/check-prod.sh` y medición en producción; si\n  PageSpeed queda por debajo de 85 o el LCP por encima de 3,5 s, se revierte con `git revert` y un push aprobado (D14).\n\n### Fuera de alcance\n\n- Insignia de Google Partner (pendiente del código oficial).\n- Reseñas y casos con cifras (pendientes de autorización de clientes).\n- Fotos del equipo (pendientes de permiso).\n- La herramienta pública «mide tu web» (`TODOS.md`).\n- Eventos GA4 por clic en escenas y filas del mapa: pasan a la fase 3 con el resto de eventos (`TODOS.md`).\n- Barra fija en móvil con «Cotizar» y WhatsApp: D21 la pide para las páginas de servicio y nunca se construyó; es un\n  componente nuevo para todo el sitio, no de la portada (`TODOS.md`).\n- Unir portada y pilar si S5 lo sugiere (plan nuevo, ver Puerta S5).\n- Confirmar los precios propuestos de D4 en las páginas que los publican.\n","newText":"### Estructura propuesta (en orden)\n\nEnfoque de construcción (decidido en la revisión CEO, 0D): portada híbrida. Un módulo de datos en `src/lib/portada.ts`\n(fuera de `src/lib/pages/`, para que la ruta `[...slug].astro` no lo publique como página) alimenta los bloques v2\nexistentes de `src/components/Blocks.astro`, llamados uno por uno con `v2` e intercalados con el marcado propio de\n`src/pages/index.astro`: respuesta citable (`[data-block=\"answer\"]` con `.ew-answer`, que lee el validador), maquetas\n(`ejemplos`), comparación (`compare`) y preguntas (`faq`). Héroe, escenas, mapa y proyectos llevan marcado propio. La\nhoja `src/styles/molde-kredit.css` va en línea como en `[...slug].astro:14,53`. La ruta `[...slug].astro` no se toca.\n\nDos versiones, que el dueño elige en la puerta final (T1):\n- **Corta** (el orden de D20 más lo que el dueño ya aprobó después): secciones 1, 2, 3, 5, 7, 10, 11, 12 y 13\n  (9 secciones).\n- **Larga** (este plan): la corta más las secciones marcadas [Larga]: 4, 6, 8 y 9 (13 secciones).\n\nDos tandas de publicación:\n- **Tanda A**, independiente del rediseño, se puede publicar en cuanto el dueño apruebe el push (voces Claude C1 y H3):\n  - el arreglo de `cta_click` en `track.ts` con su prueba y su documentación;\n  - el enlace de la guía de agencia a la portada;\n  - en la portada **actual**, retirar ya lo que no está confirmado: la tira de 26 logos sin nombre\n    (`index.astro:155-170`) y toda la afirmación de equipo interno (`index.astro:650-655`); vuelven solo con B2 y B3;\n  - en la franja de cifras actual, «proyectos publicados» cuenta solo proyectos de clientes: `portfolio.length` (11)\n    incluye WazaCRM, que es producto propio y ya cuenta en «productos propios»; el filtro usa un campo explícito\n    `propio: true` en `portfolio` (`src/lib/site.ts`), no el dominio ni la categoría;\n  - la misma afirmación de equipo interno sin confirmar sale también de `/nosotros/` y `/como-trabajamos/`\n    (`src/lib/pages/core.ts`: «Somos una software house con equipo interno…», «Y todo el desarrollo es de equipo\n    interno…» y la respuesta de «¿Subcontratan parte del trabajo?»), hasta que B3 la confirme;\n  - medición coherente para la línea base: `track.ts` toma el servicio primero del enlace (`data-service`) y luego de\n    `<main data-service>`; `ContactForm` envía en `cf:lead` la clave de `src/data/formulario.json`, no la etiqueta; la\n    regla nueva de `cta_click` para `#formulario` no cuenta el enlace «Llenar el formulario» de `/contacto/`;\n  - accesibilidad del ancla: `src/scripts/effects.ts` intercepta los enlaces `#…` y hace scroll sin mover el foco;\n    después del scroll enfoca el formulario (`focus({ preventScroll: true })`) y actualiza el hash con\n    `history.replaceState`; arregla las 33 páginas v2 y se prueba en `scripts/qa-form.mjs`.\n- **Tanda B**: la portada nueva. Antes de construirla: S5 (ver su sección) y la puerta final con T1, T3, T4 y B1 a B5;\n  antes de publicarla, además, la línea base de medición (ver «Medición y éxito»). Se construye **solo la rama elegida** de cada decisión; las\n  ramas que se describen abajo existen para que la puerta final sepa qué implica cada respuesta.\n\n1. **Héroe de agencia.**\n   - H1: la construcción usa la candidata de `KEYWORDS.md:77`, «Agencia de diseño web en Panamá que convierte visitas\n     en consultas» (D3: se construye con la propuesta; el dueño decide la definitiva al publicar, tras S5). Para que\n     `npm run verify` pase antes de esa decisión, `scripts/cambios-permitidos.json` gana el campo `h1` en la entrada de\n     `/` con el motivo «candidata D3, pendiente de S5»; si el dueño elige otra candidata se actualiza el motivo, y si\n     elige el respaldo se quita el permiso.\n   - Bajada de 15 a 20 palabras que dice para quién trabajamos y cómo (precio publicado, respuesta el mismo día hábil);\n     los nombres de los servicios quedan para el riel, para no repetirlos tres veces en la primera pantalla.\n   - La portada pasa `dark` a `Base` (menú claro sobre el marino) y los botones del héroe llevan\n     `data-cta-loc=\"hero\"` y `data-service=\"definir\"` en el enlace (no en `<main>`, para no marcar como «definir»\n     todos los eventos de la página).\n   - Botón primario «Cotizar mi proyecto» (destino según T4: `/contacto/?servicio=definir#formulario`, que fijan D20\n     y D21, o `#formulario` de la misma página, como las 33 páginas v2). WhatsApp como secundario, con el estilo\n     `ew-btn--ghost` de `PortadaServicio.astro` (el de las 33 páginas v2) y el mensaje «Hola, quiero cotizar un\n     proyecto con Elemento Web.», sin cifras (D23).\n   - Insignia con el texto literal «Tech Provider verificado por Meta» (D48), en la píldora con escudo del pie\n     (`Footer.astro:41`), enlazada a su explicación publicada en `/nosotros/` (`core.ts:229`); reemplaza al par actual\n     «Verificado por Meta / Tech Provider» (`index.astro:104-106`). Los enlaces de mercado Panamá y Miami\n     (`index.astro:99-103`) pasan a la respuesta citable (sección 3). El botón «Ver proyectos reales»\n     (`index.astro:97`) sale: el pie de la captura enlaza al caso.\n   - A la derecha, un proyecto real ya publicado en escritorio y celular: **TramitaPa** (cliente externo con caso en\n     `/casos-de-exito/tramitapa/`), sujeto al permiso B5a. Composición: un componente nuevo `src/components/HeroProyecto.astro` que\n     reusa las clases `ew-dev` con el modificador `ew-dev--hero` (no se toca `Ejemplo.astro`, cuyo tipo `web` fuerza\n     `lazy`, una sola imagen y 16:10 con recorte); el navegador en caja 4:3 (sin recorte) y el celular superpuesto abajo a la\n     derecha, a un tercio del ancho, con la sombra desplazada sin desenfoque de `DESIGN.md`. Escritorio:\n     `src=\"/portfolio/tramitapa-800.webp\"`, `width=\"800\" height=\"600\"`, `srcset` con `tramitapa-480.webp` (19,5 KB,\n     480×360) y `tramitapa-800.webp` (42,5 KB), `sizes` como en `PortadaServicio.astro:39-41`, `fetchpriority=\"high\"`\n     y `loading=\"eager\"` (en `Ejemplo.astro:60` hoy es `lazy`). `tramitapa-1200.webp` (74,5 KB) no entra; se intenta\n     una versión de 1200 px de 60 KB o menos con `scripts/optimize-images.mjs`, y si no baja se acepta que en pantallas\n     2x la captura se vea menos nítida. Celular: `movil-tramitapa.webp`, 390×844, 22,5 KB, con `width` y `height`, sin\n     `fetchpriority`. En compacto, un `<picture>` con `media` sirve solo la captura de celular, recortada arriba en la\n     caja 3:2, y no descarga la de escritorio (a 358 px una captura de escritorio no se lee); su `<source>` lleva\n     `width` y `height` y un `srcset` con una versión de 780 px de 60 KB o menos para pantallas 2x y 3x. El `media` del\n     `<source>` y el corte de CSS entre 3:2 y 4:3 salen de una sola constante. El celular superpuesto del escritorio\n     va con `loading=\"lazy\"` y oculto en compacto, para que no se descargue en el teléfono.\n   - Pie visible en voz de datos, como enlace de texto: «Proyecto real · tramitapa.com · Trámites de visa, 2025 · Ver el\n     caso →», con la línea `did` de `site.ts:423` («llevar la consulta de visa directo a WhatsApp») como respaldo sin\n     cifras. El `alt` describe la imagen, no el destino; la imagen no es enlace.\n   - Si B5a = no: el héroe usa otro proyecto con caso publicado que el dueño autorice (San Blas Full o Panama\n     International Movers, los dos en `casos.ts` y en el portafolio). Sin ninguno: héroe de una columna (H1 a 20 ch o\n     menos) con la franja de cifras subida bajo los botones como pieza de evidencia, en el patrón de `PrecioPlazo`.\n   - Debajo, el riel con los **nombres** de los 6 servicios del mapa, sin cifras (D20, D26), cada uno enlazado a la URL\n     principal de su fila: 6 columnas desde 1024 px, 3×2 entre 640 y 1023 px y 2×3 en compacto (hoy `.ew-rail` da 4\n     más 2 sueltos). Orden de la banda: riel y luego franja de cifras, las dos sobre el marino del héroe.\n   - A 1440×900 se ven sin desplazarse H1, bajada, botón, WhatsApp, insignia y captura con su pie; el riel y la franja\n     pueden quedar debajo. A 390×844 el botón principal queda dentro de los 844 px y la caja de la imagen empieza antes\n     de los 844 px; para eso el relleno superior de la portada baja a la altura del menú más 24 px (hoy 132 px). En\n     móvil el orden es H1, bajada, botón, WhatsApp, insignia, imagen (caja 3:2 reservada con fondo `primary`, D27) y\n     riel. El H1 se mide con la candidata más larga (unos 66 caracteres).\n2. **Franja de cifras**, como borde inferior de la banda del héroe (aprobada y publicada por el dueño el 14-oct en\n   dd38640; conserva «desde $550» y su enlace a `/saas/`, `index.astro:151`, desvíos de D20 que el dueño aprobó al\n   publicarla). «Proyectos publicados» cuenta solo proyectos de clientes (tanda A).\n3. **Respuesta citable con fecha** (40 a 60 palabras), inmediatamente después de la banda del héroe (`SPEC.md` 3.2,\n   D20): quiénes somos (con enlace a `/nosotros/`, destino de las preguntas GEO 18 y 20 de `KEYWORDS.md:101-102`, que\n   hoy enlaza la sección de equipo en `index.astro:664`), dónde (Ciudad de Panamá; Miami remoto), qué hacemos y cómo\n   cobramos (los enlaces de mercado Panamá y Miami van aquí), con el rótulo «Actualizado el DD/MM». Usa los mismos\n   hechos y el mismo nombre, dirección y teléfono que la ficha de Google y los directorios\n   (`docs/autoridad/KIT-AUTORIDAD.md`, sección 1), no el mismo texto (allí hay versiones de 22 y de 109 palabras).\n4. **[Larga] «Por dónde se te van los clientes»:** seis escenas, una por fila del mapa y enlazadas a la URL principal\n   de esa fila, en lista y sin tarjetas: la escena en una frase en voz del cliente y debajo «→ Lo resolvemos con:\n   <servicio>». La web no carga en el celular (diseño web); te preguntan «¿cuánto cuesta?» y no pueden comprar ni\n   pagar en línea (tiendas online); Google no te encuentra (SEO); gastas en pauta y no sabes qué canal trajo la venta\n   (publicidad en Google y Meta, `marketing.ts:105`); tus clientes no vuelven porque nadie les escribe después de la\n   primera compra (WhatsApp marketing); nadie contesta el WhatsApp de noche y las cotizaciones se olvidan (IA y\n   automatización).\n5. **Mapa de servicios (corazón, `SPEC.md` 3.1, D19, D20):** 6 filas, no tarjetas iguales. URL principal de cada\n   fila (la que usan el riel y el `ItemList`) y, entre paréntesis, los enlaces secundarios dentro de la fila:\n   diseño web `/diseno-web-panama/` («Ver casos», a `/casos-de-exito/`, y «¿Ya tienes web? Rediseño», a\n   `/servicios/redisenio-web-panama/`, que reemplaza el camino para quien ya tiene web que hoy dan el selector y el CTA\n   intermedio, `index.astro:466` y `:562`); tiendas online `/servicios/tiendas-online-ecommerce-panama/`; SEO y SEO\n   local `/crecimiento/seo-posicionamiento-web-panama/` (`/crecimiento/seo-local-google-maps-panama/`); publicidad en\n   Google y Meta `/marketing/google-ads-panama/` (`/marketing/facebook-instagram-ads-panama/`); WhatsApp marketing\n   `/marketing/whatsapp-marketing-masivo-panama/`; IA y automatización `/inteligencia-artificial-para-empresas-panama/`\n   (`/marketing/automatizaciones-n8n-panama/`).\n   Cada fila usa el componente «Fila de servicio» de `DESIGN.md` con `id=\"mapa-<fila>\"`: en escritorio, rejilla de tres\n   columnas (nombre | qué resuelve y para quién | enlace); en compacto se apila y el enlace ocupa el ancho completo\n   (44 px). El precio de partida va en línea, en voz de datos, al final de la línea de qué resuelve; una fila sin\n   precio no lleva nada en su lugar. Se lee de `src/data/precios.json` solo si está confirmado (D23): diseño web «desde $550» (`confirmados.web-landing`), tiendas «desde $1,950» (`confirmados.web-ecommerce`);\n   SEO, publicidad y WhatsApp sin cifra (sus precios propuestos de D4 no salen en la portada). IA según la pregunta B4:\n   - B4 = sí: se agrega `confirmados.ia` (2900, fuente `src/lib/pages/ia-empresas.ts`) y la fila dice «desde $2,900».\n   - En los dos casos `sinPrecio` sale de `precios.json`: nadie lo lee y hoy contradice la página de IA.\n   - B4 = no: la fila va sin cifra y la página de IA pasa a estado `cotizado` con la redacción literal de D23\n     («Cotización cerrada por escrito» y el plazo) en todas las superficies donde hoy dice $2,900: respuesta citable\n     (`ia-empresas.ts:32`), precio y plazo de la portada (`:38`, sale su `Offer`), introducción de alcance (`:117`),\n     fila de la comparación (`:176`), pregunta frecuente (`:188`, que alimenta el FAQPage) y `public/llms.txt:58`; el\n     permiso de su ruta en `scripts/cambios-permitidos.json` cambia de motivo y suma `schema`.\n   El software propio se queda en la columna «Nuestros SaaS» del pie (`Footer.astro:22`, D20) y en el enlace de la\n   franja de cifras (sección 2); los enlaces entrantes de D36 siguen sobrados (`saas` 10, `saas/nouscrm` 8,\n   `saas/cifrao` 6).\n6. **[Larga] «Así se vería»:** tres maquetas del molde (`src/components/Ejemplo.astro`) para servicios que no son\n   web: un resultado de Google, una conversación de WhatsApp y el reporte del mes, con los datos de maquetas ya\n   publicadas (por ejemplo `src/lib/pages/crecimiento.ts:671`). Tres columnas desde 1024 px y una en lo demás (así no\n   queda 2 más 1 a 768 px). Nota de ejemplo obligatoria, sin logos de terceros, y ninguna maqueta afirma un resultado\n   (D44): el reporte (`informe`) usa estados escritos y no cifras de mejora. Cada maqueta lleva debajo un enlace de texto a su servicio, dibujado por la\n   portada (el tipo `Ejemplo` no tiene `href` y no se cambia). La web no se repite aquí: ya la muestran el héroe y los proyectos.\n7. **Proyectos reales y clientes** (prueba, D20):\n   - El showcase actual se reemplaza por una lista estática de 3 o 4 proyectos del portafolio con la composición\n     `ew-dev` y enlace a su caso o, si no tiene, al sitio publicado (hoy solo hay 3 casos además de TramitaPa), sin\n     productos propios (`propio: true`), sin esferas, malla, texto con degradado ni acordeón; sale su título «Diseño que desafía lo común» y la\n     afirmación sin respaldo «convierten y escalan el negocio» (`index.astro:173-452`). TramitaPa no abre la lista,\n     porque ya está en el héroe; su testimonio va pegado a su proyecto. El testimonio de TramitaPa\n     (`index.astro:409-415`, también en `src/lib/pages/casos.ts:65`) se publica solo con el permiso B5b, que cubre\n     también la página del caso: el cliente aprueba la frase tal cual o una que no implique un resultado, porque\n     «las consultas se multiplicaron» convive con «Todavía no publicamos cifras de este proyecto» (`casos.ts:66`). Es\n     un testimonio, sin schema `Review` ni `AggregateRating`; se publica con el permiso B5b, aparte de la captura.\n   - La tira de logos (retirada de la portada actual en la tanda A) vuelve aquí, junto a los proyectos, solo con B2:\n     los logos que el dueño confirme por escrito, en rejilla estática (sin marquee), cada uno con el nombre del cliente\n     como `alt`; con menos de 4 confirmados la tira no va.\n   - Una línea de responsabilidad del fundador como firma al pie de la sección: «Josimar Guilbaud, CEO. Responde por\n     la empresa y por cada proyecto que entregamos.», tal como está publicada en `/nosotros/` (`core.ts:197`), con\n     enlace a esa página; la foto solo si el dueño la quiere (voz Claude M2).\n   - Botón repetido al cerrar la sección: «Cotizar mi proyecto» y WhatsApp, al mismo destino que el héroe, con\n     `data-cta-loc=\"prueba\"`.\n8. **[Larga] «Lo que no hacemos»**, cada línea respaldada por una página publicada: no revendemos plantillas\n   (`src/lib/pages/diseno-web-panama.ts:80`); no prometemos el primer lugar en Google\n   (`src/lib/pages/crecimiento.ts:314`, `core.ts:86`); no intermediamos tu inversión publicitaria (`marketing.ts:47`);\n   no publicamos cifras de clientes\n   sin su permiso (`/casos-de-exito/tramitapa/`, `casos.ts:66`: «Todavía no publicamos cifras de este proyecto»). No\n   se escribe «no te amarramos con contrato» ni «no retenemos tus accesos»: en el plan gestionado de 12 meses los\n   accesos se entregan al liquidar las cuotas pendientes (`site.ts:308`, `precios.ts:145`). La línea del dominio no va\n   aquí: ya está en la comparación de la sección siguiente.\n9. **[Larga] Comparación verificable (D28):** el bloque `compare` existente con `otraCotizacion: true` (columna «tu\n   otra cotización» en blanco) y la línea «Qué preguntar a cualquier proveedor» dentro de `intro` (sin campo nuevo en\n   el bloque compartido). Criterios, cada uno con enlace a su fuente: precios publicados (`/precios/`,\n   `precios.ts:29`); cotización cerrada por escrito (`/precios/`, `precios.ts:18`); plazo por escrito, de 5 días\n   hábiles a 5 semanas (`/precios/`, `precios.ts:42`); dominio a nombre de tu empresa (`/precios/`, `precios.ts:145`);\n   respuesta el mismo día hábil (`/contacto/`, `core.ts:257`). Sin columnas de freelancer ni de plataformas: sin\n   fuente verificable serían generalizaciones.\n10. **Proceso en 4 etapas** con el bloque v2 `steps` (en lugar de las tarjetas que se invierten al pasar el ratón,\n    `index.astro:610`), cada etapa con su entregable: diagnóstico → propuesta con alcance, precio y plazo por escrito;\n    diseño → pantallas aprobadas antes de programar; desarrollo → demo en línea; lanzamiento → web en tu dominio, accesos\n    a tu nombre y capacitación. Al final, el botón repetido (`data-cta-loc=\"proceso\"`).\n11. **Industrias** en una línea de enlaces de texto a las páginas de industria más «Ver todas las industrias» hacia\n    `/industrias/`; sin íconos en mosaico ni fondo marino (`index.astro:621-645`).\n12. **Preguntas frecuentes de agencia** (6 o más), el mismo texto en el schema FAQPage. Temas: SEO o publicidad sin\n    rehacer la web; trabajo fuera de Panamá (Miami remoto); de quién son las cuentas de Google Ads y Meta; plazos;\n    formas de pago; qué pasa si ya tengo web. Todo precio que se cite sale de `confirmados`.\n13. **Formulario** dentro de la página (`#formulario`), con el cierre de agencia como encabezado: «Cuéntanos qué\n    necesitas resolver primero» y tres líneas de apoyo (respuesta el mismo día hábil; diagnóstico sin costo; cotización\n    cerrada por escrito antes de empezar). Reemplaza al CTA intermedio. Según T3:\n    - T3 = sí (la portada sale antes de la fase 3): lleva el `ContactForm` actual; en\n      `scripts/paginas-comerciales.json` el orden pasa a `[\"1\", \"2a\", \"2b\", \"3\", \"4\", \"5\"]` y `faseActual` a `\"2b\"`.\n    - T3 = no: la portada espera a la fase 3 y sale con `ServiceForm` con la clave `definir`.\n    - En los dos casos, cuando `ServiceForm` se active, la portada lo usa con `definir`.\n\nSección de equipo: no va, por el orden de D20 (que no la incluye); `SPEC.md` 3 la mantenía solo con personas con\npermiso. La afirmación de equipo interno ya sale de la portada actual en la tanda A: el título «equipo panameño de verdad»\n(`index.astro:650`), «Equipo 100% interno. No subcontratamos…» (`:651`) y la insignia (`:655`), porque\n`scripts/afirmaciones-bloqueadas.json` bloquea «100% interno» y «equipo interno» en toda página que emite\n`data-page-type`. Si el dueño la confirma por escrito (B3), se quitan esas frases de la lista bloqueada (lo que las\ndesbloquea en todo el sitio) y la afirmación vuelve como una insignia «Equipo 100% interno» junto a la de Meta en el\nhéroe. Si B3 = no, la corrección de `/nosotros/` y `/como-trabajamos/` que hizo la tanda A se queda.\n\nLo que queda en la portada actual tras la tanda A (hasta que salga la tanda B): la sección «Quiénes somos» pierde el\ntítulo «equipo panameño de verdad» y el párrafo «Equipo 100% interno…» (`index.astro:650-651`), y gana el H2 «Quién\nestá detrás» (como en `/nosotros/`) con la tarjeta del fundador y su enlace; de la lista de insignias\n(`index.astro:655`) sale solo «Equipo 100% interno» y se quedan «Tech Provider verificado por Meta», «3 SaaS propios en\nproducción» y «Cotización cerrada por escrito».\n\nSalen de la portada: «¿Qué necesita tu negocio ahora?», el bloque de precios y «Sin letra chica» (ya viven completos\nen la pilar y en `/precios/`); «Soluciones» (lo reemplaza el mapa); «IA y automatización» como sección aparte (entra al\nmapa, `SPEC.md` 3); el bloque de SaaS (queda en el pie, D20); la sección de equipo; el CTA intermedio (pasa a\nencabezado del formulario); el botón «Ver proyectos reales» del héroe.\n\nFuera de la portada (tanda A, salvo `llms.txt`):\n- Arreglo de una medición rota, no diseño de eventos de la fase 3: desde el 13-oct los botones de los hubs y de las\n  páginas de servicio bajan a `#formulario` y `src/scripts/track.ts:29` solo cuenta `cta_click` para enlaces que\n  empiezan con `/contacto/`, así que esos clics no se registran. Regla nueva: un enlace cuyo `href` es exactamente\n  `#formulario` envía `cta_click` con `location` y el servicio del enlace (`data-service`) o, si no lo tiene, el de\n  `<main data-service>`; no cuenta el enlace «Llenar el formulario» de `/contacto/`; los enlaces a\n  `/contacto/…#formulario` siguen por la rama actual, sin doble conteo. Se actualiza `docs/event-dictionary.md` y\n  `scripts/qa-form.mjs` gana un caso que hace clic en un enlace `#formulario` de `/qa-fixture/formulario/` (si esa\n  página no tiene uno, se le agrega) y comprueba el evento.\n- La guía `/blog/como-elegir-agencia-diseno-web-panama/` (`src/lib/pages/blog-1.ts`), que hoy recibe 94 de las 97\n  impresiones de «agencia de diseño web», enlaza a la portada con el texto «agencia de diseño web» (`KEYWORDS.md:20`).\n- `public/llms.txt` (con la tanda B): el resumen de la agencia se alinea con la nueva respuesta citable.\n- Presupuesto: antes de construir se anota el cambio esperado (CSS: unos 4,7 KB del molde más las filas del mapa; JS:\n  baja al quitar `effects.ts`); el máximo se fija después en lo medido más 3 %.\n\n### Contrato de interfaz (fase de diseño)\n\n- **Fondos y estilo:** solo el héroe (con su riel y su franja) va en marino; el resto alterna `surface` y\n  `surface-alt` (`DESIGN.md`) en lo posible: los bloques compartidos tienen fondo fijo (`answer`, `compare` y `faq`\n  en `surface`; `ejemplos`, `steps` y `form` en `surface-alt`) y dos secciones claras seguidas usan el ajuste de\n  espacio que ya trae `molde-kredit.css`. Toda adaptación de CSS compartido va como modificador\n  (`.ew-rail--6`, `.ew-dev--hero`, `.ew-hero--home`), para no mover las 33 páginas v2. Se usan el contenedor `.ew-wrap` y los títulos del molde (`molde-kredit.css`). En la\n  portada nueva no quedan esferas, malla, `grad-text` ni `.reveal` de las secciones viejas (`index.astro:173-452`,\n  `:610`, `:621-624`, `:728-731`).\n- **Movimiento:** la portada no se anima (`DESIGN.md`, Motion); sin marquee ni revelados; todo visible sin JavaScript.\n  `Base.astro` carga `effects.ts` (Lenis, GSAP, cursor y barra de progreso) en todas las páginas junto con\n  `track.ts`; gana una opción para no cargar `effects.ts` en la portada (`track.ts` se sigue cargando), así baja su JS.\n- **Botón repetido:** «Cotizar mi proyecto» y WhatsApp al cerrar la prueba (sección 7) y el proceso (sección 10), en\n  las dos versiones, al mismo destino que el héroe (T4), como marcado propio de la portada después del bloque (sin\n  slot nuevo en `Blocks.astro`).\n- **Estados:**\n\n| Elemento | Cargando | Vacío | Error | Éxito | Parcial |\n|---|---|---|---|---|---|\n| Captura del héroe | caja 4:3 (3:2 en compacto) reservada con fondo `primary` | B5a = no: héroe de una columna con la franja bajo los botones | imagen rota: queda la caja con el pie de texto | captura con su pie | — |\n| Fila del mapa | — | sin precio confirmado: la fila no lleva cifra ni hueco | — | precio en línea | — |\n| Tira de logos | — | menos de 4 confirmados: la tira no va | — | rejilla estática | — |\n| Testimonio | — | B5b = no: no va; la lista de proyectos queda sin cita | — | cita pegada a su proyecto | — |\n| Formulario | botón desactivado «Enviando…» | sin JavaScript: el aviso con WhatsApp y correo (`noscript`) | por campo, foco al primero; red caída: el mensaje de hoy más los enlaces de WhatsApp y correo, que `ContactForm` gana en todas sus superficies | confirmación con WhatsApp | según `ContactForm` (D22 cuando llegue `ServiceForm`) |\n\n- **Accesibilidad:** recorrido completo por teclado en orden visual; foco visible (anillo de 3 px) en botones, riel,\n  filas del mapa y pie de la captura; contraste AA medido de cada par nuevo; texto al 200 % sin pérdida; la página se\n  entiende sin JavaScript; `alt` descriptivo en cada captura.\n\n### Datos estructurados y SEO\n\n- Title se conserva («Agencia de Diseño Web en Panamá | Elemento Web»). El H1 cambia solo con aprobación del dueño.\n- Description: la ya aprobada en `KEYWORDS.md:77` («Agencia de diseño web en Panamá: sitios corporativos, tiendas\n  online y landing pages, con SEO, Google Ads y WhatsApp. Pide tu cotización.»), que `scripts/keywords.test.mjs` ya\n  valida en largo.\n- JSON-LD: `Organization`, `WebSite`, `ProfessionalService` (con dirección, horario y mapa desde el 14-oct) y un\n  `ItemList` de 6 elementos, uno por fila del mapa, que referencian por `@id` el nodo `<url>#servicio` que cada página\n  de servicio ya publica (así no se repiten `name`, `provider` ni `areaServed`, que exige `qa-seo.mjs`), sin `Offer`\n  (R37). FAQPage derivado del bloque visible.\n- Una sola estructura de datos en `src/lib/portada.ts` alimenta las filas del mapa, el riel, el `ItemList`, el bloque\n  `faq` y el FAQPage (`homeJsonLd` recibe preguntas y servicios); el FAQ se limpia con la misma función que\n  `faqNode`. La fecha de la respuesta no puede ser posterior a la del último commit (la compara `verify`).\n- La portada emite `data-page-type=\"home\"` y entra al marcador con sus reglas reducidas; permisos de SEO congelado\n  (`scripts/cambios-permitidos.json`) para description, schema y H1 (este con el motivo de la sección 1).\n\n### Candidatos de H1 (decide el dueño)\n\nLas tres primeras prometen un resultado («convierte», «trae clientes») que hoy no tiene cifras publicadas que lo\nrespalden (voz Codex); la cuarta no promete nada.\n- «Agencia de diseño web en Panamá que convierte visitas en consultas» (`KEYWORDS.md:77`; la que usa la construcción).\n- «Agencia de diseño web en Panamá que te trae clientes» (propuesta de `SPEC.md`).\n- «Agencia de diseño web en Panamá: webs, SEO y publicidad que traen clientes».\n- «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp».\n- Respaldo si el dueño no aprueba ninguna: mantener «Diseño web en Panamá que convierte visitas en consultas» y cerrar\n  el cambio solo con la description (`KEYWORDS.md:82`); no nombra la agencia y usa la palabra de la pilar.\n\n### Puerta S5 (antes de construir la tanda B, D3, D18, R31)\n\nLas dos voces de la fase CEO piden adelantarla: es lo único barato que puede invalidar la arquitectura. Revisión de la\nSERP de «agencia de diseño web» y de «diseño web panama» (los 5 primeros resultados de cada una; la hace Claude antes\nde la puerta final) y volumen en el Planificador de palabras clave (con la sesión de Google Ads del dueño en Chrome,\ncuando él la abra, solo en lectura y sin crear campañas; si da rangos amplios, decide la SERP). Se anota en `audit/s5-agencia-diseno-web-2026-10.md`. Si portada y pilar siguen separadas,\n`KEYWORDS.md` anota una excepción explícita a su regla 2 para la portada: su title y su H1 contienen «diseño web en\nPanamá», la frase reservada a la pilar, y `keywords.test.mjs` hoy no lo comprueba. Con eso el dueño decide el H1 y,\nsi las dos SERP son casi iguales, si la portada y la pilar siguen separadas (D18). Si elige unirlas, este plan se\ndetiene: unir las dos URL exige redirección o canónica y enmendar D36, que congela title, H1 y canónica de la pilar, y\neso va en un plan nuevo. S5 bloquea construir la tanda B (V2), no la tanda A.\n\n### Puerta B de la portada (D3, D19)\n\n- B1: H1 (tras S5) y la decisión de D18.\n- B2: los 26 logos (cuáles son clientes con permiso).\n- B3: la afirmación de equipo interno.\n- B4: precio de IA «desde $2,900».\n- B5a: permiso para usar la captura de TramitaPa (o de otro proyecto con caso publicado) en el héroe (D3, D25).\n- B5b: permiso para publicar la frase del testimonio de TramitaPa, tal cual o reescrita sin resultado.\n- Los precios propuestos de D4 (D19) no salen en la portada, así que no bloquean esta tanda; su confirmación sigue\n  pendiente para las páginas que los publican.\n- Tras las respuestas, `DECISIONES.md` gana una D50 con T1, T3, T4 y B1 a B5; si T3 = sí, se actualizan el orden de fases\n  en `SCORECARD.md:8` y en la tabla de D1.\n\n### Medición y éxito\n\n- Línea base: con el arreglo de la tanda A ya midiendo, 2 a 4 semanas de la portada actual en GA4 antes de publicar la\n  nueva, medidas por sesión con página de entrada `/` (no por página del evento, porque según T4 el formulario vive en\n  `/contacto/` o en `/`): sesiones, `cta_click` y `click_whatsapp` por sesión, `form_start` y `generate_lead` en\n  cualquier página de esas sesiones. Esta definición queda en D50 antes de empezar.\n- Revisión a las 4 y a las 8 semanas de publicar, con ventanas equivalentes.\n- Meta de consultas por mes (D16) escrita en D50, aunque sea pequeña.\n- Con tan poco volumen, una señal cualitativa: en cada consulta, Nicole anota si la persona vio la web y qué la\n  convenció; el embudo de consulta a reunión a cierre vive en WazaCRM y NousCRM, fuera de este repositorio.\n- La portada no atrae tráfico por sí sola: el éxito depende de una fuente de tráfico con fecha (ver el desafío UC1 de\n  la puerta final).\n\n### Restricciones\n\n- Solo Roboto (fuente autoalojada). Colores y espaciado de `DESIGN.md` y del molde (`src/styles/molde-kredit.css`).\n- Presupuesto de JS y CSS de la plantilla «portada» en `scripts/presupuestos.json`. La hoja del molde en línea suma\n  unos 4,7 KB de CSS: el máximo de la portada sube a lo medido más 3 %, con ese motivo (D44), como se hizo con los hubs\n  y `/precios/`.\n- Rendimiento (D14, D47): LCP de 2,5 s o menos, CLS de 0,02 o menos y Lighthouse móvil local de 90 o más (PageSpeed\n  Insights cuando exista la clave). Ninguna variante que el navegador pueda elegir para la imagen LCP pesa más de 60 KB.\n- Nada con `opacity: 0` en la primera pantalla ni en el elemento LCP; el contenido es visible sin JavaScript.\n- Sin calificaciones con schema; el único testimonio es el de TramitaPa (B5b). Google Partner solo con el código oficial\n  de la insignia; «Tech Provider verificado por Meta» con ese nombre (D48).\n- Riel sin cifras (D20, D26); precios del mapa según la matriz de D23.\n- Responsivo y accesible según D27: 390, 768 y 1440; toques de 44 px; encabezados de tabla en la comparación.\n- Enlaces entrantes de contenido: cada página comercial conserva 3 o más (D36); el validador lo comprueba.\n- `npm run verify` en verde, marcador y SEO congelado incluidos; cada push lo aprueba el dueño (D47).\n- La portada, `audit/seo-snapshot.json` y `scripts/cambios-permitidos.json` cambian en el mismo commit, y la reversión\n  se ensaya antes de publicar (una rama con el revert y `npm run verify` en verde); si no, un `git revert` de la\n  portada sola chocaría con el SEO congelado y no se desplegaría.\n- Si T3 = sí, `qa-a11y` corre sobre `/servicios/` y `/precios/` antes de subir `faseActual`, que las vuelve estrictas.\n\n### Criterios de aceptación\n\n- A 1440×900 se ven H1, bajada, botón, WhatsApp, insignia y captura con su pie (o, si B5a = no, la franja de cifras\n  bajo los botones); a 390×844 el botón principal queda dentro de 844 px.\n- Respuesta citable de 40 a 60 palabras con fecha, inmediatamente después de la banda del héroe y con enlace a\n  `/nosotros/`; FAQPage igual al bloque visible.\n- Cada escena y cada fila del mapa enlaza a una página existente; la portada enlaza a todas las del mapa.\n- Ningún precio que no esté confirmado en `precios.json`; ninguna afirmación bloqueada; riel sin cifras.\n- Un clic en «Cotizar mi proyecto» envía `cta_click` con `service=definir` (el enlace lleva `data-service=\"definir\"`, no\n  `<main>`); un clic en un enlace `#formulario` envía\n  un solo `cta_click` (caso nuevo en `scripts/qa-form.mjs`).\n- LCP, CLS y puntaje medidos en local con `scripts/medir.mjs` y comparados contra la portada actual; las páginas de la\n  ola 1 tienen su medición en `src/data/mediciones.json` antes de publicar la portada (D14).\n- Capturas a 390, 768 y 1440 de ancho antes de pedir aprobación para publicar.\n- Recorrido por teclado y contraste AA de cada par nuevo comprobados; estados del formulario de la portada (error por\n  campo, red caída, éxito) probados a 390 y 1440.\n- Sin esferas, malla, `grad-text`, `.reveal` ni marquee en el HTML de la portada nueva, y sin `effects.ts` en su JS.\n- Pruebas nuevas en `verify`: (a) ninguna frase de `scripts/afirmaciones-bloqueadas.json` en el `<main>` de ninguna\n  página de `dist/`, con la excepción ya decidida de `blog-4` (D11); (b) cada «$N» del `<main>` de `/` existe en\n  `confirmados`, leído por clave, y una clave inexistente rompe el build; (c) si B4 = no, ni `ia-empresas.ts` ni\n  `public/llms.txt` mantienen $2,900; (d) el validador pesa todas las fuentes de la imagen LCP (`srcset` y\n  `<source>`), no solo el `src`; (e) los anclas `#formulario` de `/` apuntan a un id que existe; (f) cada\n  `@id` del `ItemList` coincide con la URL principal de una fila del mapa; (g) `qa-lcp` mide la posición del botón a\n  390×844 y del pie de la captura a 1440×900; (h) `qa-form` prueba `ContactForm` en `/` (error por campo, red caída,\n  éxito) y el foco tras el ancla.\n- Antes de construir la tanda B: S5 anotada en `audit/` y la puerta final respondida (T1, T3, T4, B1 a B5).\n- Antes de publicar la tanda B: B1 a B5 aplicadas, D50 escrita, 2 semanas o más de línea base y export de Search\n  Console del día anterior (D1).\n- Después de publicar: `gh run watch <id> --exit-status`, `scripts/check-prod.sh` y medición en producción; si\n  PageSpeed queda por debajo de 85 o el LCP por encima de 3,5 s, se revierte con `git revert` y un push aprobado (D14).\n\n### Fuera de alcance\n\n- Insignia de Google Partner (pendiente del código oficial).\n- Reseñas y casos con cifras (pendientes de autorización de clientes).\n- Fotos del equipo (pendientes de permiso).\n- La herramienta pública «mide tu web» (`TODOS.md`).\n- Eventos GA4 por clic en escenas y filas del mapa: pasan a la fase 3 con el resto de eventos (`TODOS.md`).\n- Barra fija en móvil con «Cotizar» y WhatsApp: D21 la pide para las páginas de servicio y nunca se construyó; es un\n  componente nuevo para todo el sitio, no de la portada (`TODOS.md`).\n- Unir portada y pilar si S5 lo sugiere (plan nuevo, ver Puerta S5).\n- Confirmar los precios propuestos de D4 en las páginas que los publican.\n"}]} -->

<!-- autoplan-accepted:eng -->
- Obligaciones aceptadas en la revisión de ingeniería (14-oct-2026); donde choquen con los bloques CEO o de diseño,
  mandan estas.
- Tanda A suma: retirar la afirmación de equipo interno también de `/nosotros/` y `/como-trabajamos/` (textos de
  `src/lib/pages/core.ts`); campo `propio: true` en `portfolio` para contar solo proyectos de clientes; `track.ts` toma
  el servicio del enlace antes que de `<main>`; `ContactForm` envía la clave del servicio en `cf:lead`; la regla de
  `cta_click` para `#formulario` excluye `/contacto/`; `effects.ts` enfoca el formulario y actualiza el hash tras el
  scroll a un ancla.
- Héroe en un componente nuevo `src/components/HeroProyecto.astro` con el modificador `ew-dev--hero`; `Ejemplo.astro`
  no cambia. `<source>` móvil con `width`, `height` y una versión de 780 px de 60 KB o menos; una sola constante para el
  corte; celular superpuesto `lazy` y oculto en compacto; `dark` en `Base`; `data-cta-loc="hero"` y
  `data-service="definir"` en los enlaces del héroe, no en `<main>`.
- `Base.astro` gana una opción para no cargar `effects.ts` en la portada; `track.ts` se sigue cargando.
- CSS compartido solo con modificadores (`.ew-rail--6`, `.ew-dev--hero`, `.ew-hero--home`); fondos alternos en lo
  posible; botón repetido como marcado propio después del bloque.
- Una sola estructura de datos en `src/lib/portada.ts` para mapa, riel, `ItemList`, bloque `faq` y FAQPage; el
  `ItemList` referencia por `@id` el nodo `<url>#servicio` de cada página; limpieza del FAQ unificada con `faqNode`.
- Precios leídos por clave con error si falta; `sinPrecio` sale de `precios.json`.
- Respuesta citable con los mismos hechos y NAP que el kit de autoridad, no el mismo texto.
- Medición por sesión con página de entrada `/` y `generate_lead` en cualquier página; la definición queda en D50.
- `ContactForm` gana WhatsApp y correo en el estado de red caída y un aviso `noscript`, en todas sus superficies.
- Maquetas de la versión larga con su enlace de texto debajo, dibujado por la portada.
- Proyectos con caso o, si no tiene, con enlace al sitio publicado; sin productos propios.
- Portada, snapshot de SEO y permisos en el mismo commit; reversión ensayada en una rama con `verify` en verde antes
  de publicar; si T3 = sí, `qa-a11y` sobre `/servicios/` y `/precios/` antes de subir `faseActual`.
- Pruebas nuevas en `verify`: frases bloqueadas en todo `dist/` (excepción `blog-4`, D11); precios de `/` por clave;
  IA sin $2,900 si B4 = no; peso de todas las fuentes de la imagen LCP; anclas `#formulario` válidas en `/`; `@id` del
  `ItemList` igual a las filas del mapa; posición de botón y pie en `qa-lcp`; `ContactForm` y foco tras el ancla en
  `qa-form`.
- S5 en el Planificador solo en lectura y sin crear campañas; con rangos amplios decide la SERP.
- Presupuesto con el cambio esperado anotado antes de construir y el máximo en lo medido más 3 % después.
<!-- /autoplan-accepted:eng -->

### Puerta final (14-oct-2026)

El dueño respondió «dale con todo con lo más recomendable y despliega»: `all` en la puerta (gate_rev 1). Decidido:
uc1a, uc2a, d1a (versión corta), d2a (la portada sale antes de la fase 3), d3a (botón a `#formulario` de la misma
página; enmienda D20 y D21), b1a (H1 tras S5; el dueño delegó la elección en la recomendación), b2a, b3a, b4a, b5a,
b6b y p1a. También autorizó el despliegue (D47) y el uso de fal para mejorar la portada.

## GSTACK REVIEW REPORT

| Review | Trigger | Why | Runs | Status | Findings |
|--------|---------|-----|------|--------|----------|
| CEO Review | `/plan-ceo-review` (vía /autoplan) | Scope & strategy | 2 | CLEAR | 10 proposals, 5 accepted, 3 deferred |
| Outside Review | Codex `gpt-5.6-terra` en CEO, diseño e ingeniería | Independent 2nd opinion | 3 | completed | 27 findings; 27 resolved; 0 unresolved |
| Eng Review | `/plan-eng-review` (vía /autoplan) | Architecture & tests (required) | 2 | ISSUES OPEN | 24 issues, 0 critical gaps (todos convertidos en tareas T12 a T17) |
| Design Review | `/plan-design-review` (vía /autoplan) | UI/UX gaps | 2 | CLEAR | score: 3/10 → 8/10, 20 decisions |
| DX Review | `/plan-devex-review` | Developer experience gaps | 0 | SKIPPED | sin alcance para desarrolladores |

- **OUTSIDE COVERAGE:** Codex completó en CEO (10 hallazgos, segunda corrida; la primera salió sin el marcador en inglés y no cuenta), diseño (9) e ingeniería (8). DX omitida.
- **CROSS-MODEL:** Claude (subagente) y Codex coincidieron en 6/6 dimensiones de CEO, 5/7 filas del litmus de diseño y 5/6 dimensiones de ingeniería; los desacuerdos se resolvieron en el plan o fueron a la puerta (UC2).
- **VERDICT:** CEO + DESIGN CLEARED; eng review required (sus 24 hallazgos son trabajo mapeado en tareas, no decisiones abiertas).

**UNRESOLVED DECISIONS:** ninguna. H1 y D18 se resolvieron con S5 el 14-oct-2026
(`audit/s5-agencia-diseno-web-2026-10.md`, D50): las SERP coinciden en 1 de 5, la portada y la pilar siguen separadas y
el H1 es «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp». Queda pendiente solo el volumen del
Planificador, que necesita la sesión de Google Ads del dueño.
