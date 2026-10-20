<!-- /autoplan restore point: "C:\\Users\\JosimarG\\Projects\\elementoweb\\.gstack\\tmp\\autoplan\\main-autoplan-restore-20261017-093040.md" -->
## Implementation plan
# Marketing Digital pro y cuatro servicios de IA creativa (anuncios, videos, fotografía de producto, avatares y voz)

_Spec de /gstack-spec del 17-oct-2026. Aprobada por el dueño («procede»); puerta de Codex 7/10 (las 4 ambigüedades que marcó ya están resueltas en el texto); escaneo de secretos limpio. Siguiente paso: /gstack-autoplan._

## Context

`/marketing/` es hoy la página de «marketing digital panamá» (KEYWORDS.md, fila de `/marketing/`) y reúne 6 servicios de pauta y contenido. La IA creativa ya se vende, pero sin página propia: aparece como bloque «Producción» en `/servicios/` (imágenes con IA, set desde US$ 100, precio fijado por el dueño en jul-2026, producido con Higgsfield). El sitio no compite en Google por «anuncios con ia», «videos con ia», «fotografía de producto con ia» ni «avatar con ia», aunque el negocio ya paga las herramientas (fal y Higgsfield, con avatares, voz y doblaje). El dueño pidió el 17-oct-2026 un Marketing Digital «pro» y cuatro servicios de IA creativa con página propia, SEO y GEO.

Decisiones del dueño (17-oct-2026, registradas en el log de decisiones de gstack). En `docs/specs/rediseno-elementoweb/DECISIONES.md` entran juntas como D52; aquí se citan D52.1 a D52.4 para no confundirlas con la D1-D4 de ese archivo:
- D52.1: Marketing Digital = mejorar el hub `/marketing/`, no una página nueva. Autoriza cambiar su title, H1, descripción y schema (excepción a D36 solo para `/marketing/`).
- D52.2: cuatro páginas nuevas: anuncios, videos, imágenes, avatares y voz con IA.
- D52.3: precios = punto medio estimado del mercado, con fuentes; el dueño los confirmó con «procede» sobre el borrador (ver tabla de precios). La revisión del 17-oct la reabrió: con las fuentes citadas, 3 de los 4 montos quedan por debajo del punto medio, así que el dueño los reconfirma en la «Puerta del dueño» y #1 escribe lo que decida ahí. El 19-oct-2026 decidió 780 (paquete de 5 creativos), 500, 480 y 150.
- D52.4: cada página muestra ejemplos propios marcados «Ejemplo»; tope nuevo de US$ 15 para esta tanda (D46 se amplía solo para esta tanda). El tope cubre también el avatar de Higgsfield, por su equivalente en dólares. D52 anota además dos precisiones. Primera: esta tanda usa `nano-banana-pro` también en los ejemplos; D46 lo reservaba para unas 15 fotos clave, pero los ejemplos son el producto que se vende y la diferencia frente a `nano-banana-2` es de US$ 0,07 por imagen. Segunda: las 4 páginas entran al manifiesto en fase 2b a propósito, para que se exijan desde ya (D1 define 2b como portada, `/servicios/` y `/precios/`).

## Current State (verificado el 17-oct-2026)

| Pieza | Hoy | Falta |
|---|---|---|
| `src/lib/pages/marketing.ts:24` (hub `/marketing/`) | 6 servicios (líneas 87-92); title «Marketing Digital y Pauta en Panamá \| Google, Meta y Más»; H1 «Marketing digital que trae clientes»; manifiesto fase 5 | 4 filas en su tabla de decisión, el riel, contenido nuevo y descripción nueva (title y H1 se quedan, ver #7) |
| `src/lib/site.ts:370-395` (`pricing.production`) | Redacción con IA (US$ 150/200/350, confirmados), imágenes con IA (set desde US$ 100, confirmado), logo con IA (US$ 120, propuesto) | Sin cambios; el set de US$ 100 se queda como extra de proyectos web |
| `src/lib/site.ts:190` (lista `marketing`) | 6 enlaces; los usan `Navbar.astro:58,82`, `Footer.astro:66` y la sección Marketing de la portada. La prueba «8. marketing» (`scripts/portada.test.mjs:447-453`) compara esos 6 módulos con todos los enlaces `/marketing/…` del `<main>` del hub | NO se toca; va una lista nueva `iaCreativa`. La prueba 8 cambia (regla 3): excluye las 4 URL de IA creativa, escritas como lista literal en la prueba, porque la portada sigue mostrando solo los 6 servicios de pauta |
| Páginas de IA creativa | No existen | 4 páginas v2 |
| Search Console | Ninguna de las 257 consultas de oct-2026 menciona anuncios, videos, imágenes, fotos, avatares, voz ni reels (`audit/gsc-2026-10-consultas.tsv`). Sí hay búsquedas de IA en general: el grupo «IA, automatización y CRM» suma 73 impresiones (`audit/gsc-baseline-2026-10.md:86`) y «agencia de inteligencia artificial en panamá» 32, que hoy recibe `/inteligencia-artificial-para-empresas-panama/` | Línea base 0 para IA creativa; el volumen se mide en el paso 0b del «Runbook» (U1) |
| `scripts/paginas-comerciales.json` | 34 páginas; entradas `{slug, tipo, fase, precio}`; fase actual 2b | 4 entradas nuevas |

## Proposed Change (épica, 9 partes)

```
#1 Precios en precios.json ──┐
#2 Ejemplos propios ─────────┼─> #3-#6 Las 4 páginas ──> #7 Hub /marketing/ ──> #8 Menú, pie, llms.txt, enlaces ──> #9 Verificación
#2b Fotos de portada (D45) ──┘
```
Orden: primero 1 día de medición de demanda (U1, paso 0b del «Runbook»), que fija los slugs y qué paquetes llevan página propia (U2). Después precios y ejemplos, porque las páginas los consumen (Offer del schema y bloque «Así se vería»). Después, la hoja de contactos: el dueño la aprueba y D52 congela qué páginas salen en esta tanda, antes de escribir ninguna página, porque quitar una después toca unos 10 sitios y los conteos de 5 pruebas. Luego un corte vertical: Anuncios con IA de punta a punta y en verde (unidad y `dist/`) antes de replicar las otras 3. El hub después, porque enlaza las páginas, y los enlaces globales al final, porque cambian el HTML de todas las páginas. Los pasos exactos están en el «Runbook».

### #1 Precios (decididos por el dueño en la puerta final del 19-oct-2026; estimados de mercado, no hay tarifas publicadas en Panamá)

| Clave en `src/data/precios.json` → `confirmados` | Monto | Unidad | Alcance |
|---|---|---|---|
| `anuncios-ia` | 780 | paquete | 5 creativos (4 imágenes y 1 video de hasta 15 s) en formatos de Meta y Google, 2 rondas de cambios |
| `videos-ia` | 500 | paquete | 4 videos cortos de 15 a 30 s con guion, voz y subtítulos |
| `fotos-producto-ia` | 480 | paquete | 10 fotos de producto a partir de fotos reales del cliente, en 3 escenarios |
| `avatar-ia` | 150 | video | 1 video con presentador virtual de hasta 1 minuto, con guion, voz y subtítulos |

Los montos de la tabla son los que el dueño decidió en la puerta final del 19-oct-2026 (G1 = opción b, más D2 y D3):
- Videos: el punto medio de su fuente (US$ 300-700).
- Fotos: el punto medio de 250-600 € por 10, 425 €. Al cambio de 1,1213 del 19-oct (Trading Economics) son US$ 476,55, redondeados hacia arriba a 480 para no quedar por debajo.
- Anuncios: US$ 156 por pieza, el punto medio de US$ 1.250-1.875 por 10 creativos, en un paquete de 5 creativos.
- Avatar: 150, por encima de su única fuente.

Cada clave lleva `nombre`, `monto`, `unidad` y `fuente` (el archivo de la página), como las que tienen precio fijo (`web-landing`, `scripts/datos.test.mjs:90-99`), sin `"desde": true`, que en `precios.json` solo llevan los precios que varían (`mantenimiento`, `wazacrm`, `ia`). La portada muestra igual «desde $780 por paquete de 5 creativos», porque `PrecioPlazo.astro:11` antepone «desde» a todo precio confirmado (D23). Al escribir D52, cada monto lleva el rango de su fuente, el punto medio calculado y el motivo si difiere. Referencias (estimados, citar en `docs/specs/rediseno-elementoweb/DECISIONES.md` como D52): 100ads.ai (diseñador o agencia ~US$ 1.500/mes por 8-12 creativos, cifra del proveedor); usastreams.com/reels (paquetes de video con avatar IA US$ 300-700/mes); inreels.ai y novoads.ai (US$ 2-11 por video con herramientas; UGC freelance US$ 150-500); cronoshare/annasemiguk (fondos con IA 25-60 € por foto); es.fiverr.com (avatar parlante US$ 50/min, un solo vendedor); guillermodelpino.com (HeyGen y Synthesia desde US$ 29/mes).

### #2 Ejemplos propios (tope US$ 15 en total para #2 y #2b)

| Página | Ejemplos | Herramienta | Carpeta |
|---|---|---|---|
| Anuncios | 3 creativos (2 imágenes 4:5 y 1 video vertical de 10 s hecho a partir de una tercera imagen 9:16) para un «negocio de ejemplo»; el pie del video dice «Ejemplo · anuncio en video de 10 s para Reels e historias» | fal: `fal-ai/nano-banana-pro` (US$ 0,15 por imagen) y `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` (US$ 0,07 por segundo: 10 s = US$ 0,70; precios de la API de fal del 17-oct) | imágenes en `public/images/ejemplos/`, video en `public/videos/ia-creativa/` |
| Videos | 2 videos verticales de 10 s, cada uno a partir de una imagen fija. El primero es una muestra terminada, como lo que se vende: voz en español con `fal-ai/elevenlabs/tts/multilingual-v2` (US$ 0,10 por 1.000 caracteres, unos 3 centavos por 10 s) y subtítulos quemados con el mismo proceso de `fal-ai/whisper` del avatar. El segundo es la base visual de ambiente y su `pie` lo dice: «Ejemplo · base visual de 10 s, sin voz» | fal: `fal-ai/nano-banana-pro` para la imagen de partida y `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` | `public/videos/ia-creativa/` |
| Fotografía de producto | 1 foto «antes» y 3 «después» en escenarios. La «antes» es una foto real de un producto sin marca, con el origen que se decida en la «Puerta del dueño». Por defecto es una foto de celular del dueño, porque se parece a lo que manda un cliente; si no llega antes del build, va una foto de stock con licencia libre de Unsplash o Pexels, descargada con permiso del dueño y acreditada en `public/images/ejemplos/CREDITOS.json`. Las 4 van con el mismo recorte 4:5, la «antes» primero, y cada una lleva su etiqueta «Antes» o «Después» | fal: `fal-ai/nano-banana-pro/edit` (US$ 0,15 por imagen) | `public/images/ejemplos/` |
| Avatares y voz | 1 video vertical 9:16 de 720×1280 y 15-20 s, con presentador virtual y voz en español, subtítulos quemados desde el guion (un video con voz necesita subtítulos, WCAG 1.2.2, y así se ve el entregable) y el guion corregido debajo en un `<details>` «Ver guion». Su póster es el cuadro de 1 s, con el subtítulo a la vista (`ffmpeg -ss 1`) | Higgsfield, con créditos del plan. Antes de generar se consulta el saldo y el costo; los créditos gastados cuentan dentro de los US$ 15 por su equivalente en dólares según el precio por crédito del plan, y si ese equivalente no se puede calcular, se para y se pregunta | `public/videos/ia-creativa/` |

Mecanismo: las imágenes y videos de fal se generan con las herramientas MCP de fal de la sesión (`submit_jobs` / `wait_for_jobs`, cuenta del dueño ya conectada) y el avatar con el MCP de Higgsfield (créditos del plan, sin cobro en fal). Cada generación cobrada agrega una fila con el mismo formato de las existentes en `audit/imagenes-ia-2026-10.json` (`fecha`, `modelo`, `costo`, `request_id`, `uso`) más `"tanda": "marketing-ia"` y `"estado"` (`reservado`, `pendiente`, `confirmado` o `fallido`, escrito con `scripts/gasto-ia.mjs`; ver «Requisitos aceptados en la revisión»), y sube `gastado` (el total del archivo, que sigue contando todo). El avatar de Higgsfield entra con su equivalente en dólares y `"modelo": "higgsfield:<modelo>"`. El `tope` del archivo pasa de 10 a 25 (D46 más D52.4) y su `_nota` lo explica; el tope de la tanda se lleva aparte en `"tandas": { "marketing-ia": { "tope": 15, "gastado": <suma de las filas de la tanda> } }`. Antes de cada envío, el costo estimado (`estimate_cost` en fal, el costo en créditos en Higgsfield) más `tandas["marketing-ia"].gastado` tiene que dar ≤ 15; si no, se para y se avisa al dueño. Cuenta estimada: 12 imágenes (3 de Anuncios, 2 de partida de Videos, 3 «después» y 4 portadas: US$ 1,80), 3 videos de 10 s (US$ 2,10) y la transcripción del avatar (`fal-ai/whisper`, centavos): unos US$ 3,95 de fal sin repeticiones, más el avatar. Los videos de fal se recomprimen con `ffmpeg` (instalado, versión 8.1.2): Todo comando de `ffmpeg` lleva `-y -nostdin` y cada intento escribe su propio archivo. Sin eso, ffmpeg 8.1.2 se queda esperando «Overwrite? [y/N]», o sale con 0 sin escribir cuando no puede sobrescribir (probado en la revisión DX). Los comandos, desde la raíz del repo:
- Clip sin voz: `ffmpeg -y -nostdin -i <crudo>.mp4 -c:v libx264 -pix_fmt yuv420p -profile:v high -crf 28 -preset slow -vf "scale=-2:1280" -an -movflags +faststart .gstack/tmp/marketing-ia/<base>.crf28.mp4`.
- Clip con voz de ElevenLabs (el primero de Videos): `ffmpeg -y -nostdin -i <crudo>.mp4 -i <voz>.mp3 -map 0:v -map 1:a -vf "scale=-2:1280,subtitles=.gstack/tmp/marketing-ia/<base>.srt" -c:v libx264 -pix_fmt yuv420p -profile:v high -crf 28 -preset slow -c:a aac -b:a 64k -ac 1 -shortest -movflags +faststart .gstack/tmp/marketing-ia/<base>.crf28.mp4`.
- Avatar: como el anterior, sin la segunda entrada; conserva su propio audio con `-c:a aac -b:a 64k -ac 1`.
- `-pix_fmt yuv420p -profile:v high` va siempre: sin eso, libx264 conserva el formato de la entrada y un 4:4:4 da un perfil que iOS y Safari no reproducen.
- El guion de cada video con voz tiene como máximo 2,3 palabras por segundo de clip, para que la voz quepa sin que `-shortest` la corte.

Los `.srt` salen de `fal-ai/whisper` con marcas de tiempo por segmento, se corrigen a mano contra el guion y se guardan en `.gstack/tmp/marketing-ia/`. Esa carpeta está en `.gitignore`, así que Tailwind no la lee, y la ruta va relativa porque en Windows `C:` rompe el filtro `subtitles=`. Después de cada intento se lee el peso real del archivo (`stat -c %s`) y la fila de créditos anota el CRF que dice el nombre del archivo que quedó, no el del intento planeado. Si pasa de 2 MB, la escalera es CRF 30, luego 32, luego altura 960 (`scale=-2:960`). En un clip sin voz, el último escalón es recortar a 8 s (`-t 8`). En uno con voz nunca se recorta, porque cortaría el habla y desincronizaría subtítulos y guion: después de 960 siguen CRF 34 y `-r 25`. Si aun así no alcanza, la pieza no pasa y se aplica el mínimo de ejemplos (D52 lo anota). El archivo que pasa se copia a `public/videos/ia-creativa/`. El póster es un cuadro (`ffmpeg -y -nostdin -ss 1 -i <video>.mp4 -frames:v 1 .gstack/tmp/marketing-ia/<base>-poster.png`; `-ss 0` en los clips sin subtítulos), pasado a WebP con `sharp` (ya es dependencia, `package.json:27`). Nombres de archivo: `public/images/ejemplos/ia-<pagina>-<n>.webp`, como las imágenes de ejemplo que ya existen en esa carpeta (28 archivos con un solo `CREDITOS.json`): 640 px de ancho, 640×795 en `anuncio-social`, ≤ 80 KB cada una, una sola variante porque `ImgEjemplo` tiene un solo `src` y `Ejemplo.astro` no usa srcset; videos `public/videos/ia-creativa/ia-<pagina>-<n>.mp4` (con `-v2`, `-v3`… al regenerar) con póster `public/images/ejemplos/ia-<pagina>-<n>-poster.webp`, donde `<pagina>` es `anuncios`, `videos`, `fotos` o `avatar`. En los datos de la página, «Así se vería» es el bloque `ejemplos` que ya existe (`src/lib/types.ts`, unión `Ejemplo`), con su `nota` obligatoria. Anuncios usa el tipo existente `anuncio-social` con la imagen generada en `img` (`ImgEjemplo`: `src`, `alt`, `width`, `height`). Para fotos y videos sueltos no hay tipo, así que se agregan dos a la unión `Ejemplo` y a `src/components/Ejemplo.astro`: `{ tipo: 'foto'; img: ImgEjemplo; pie: string; etiqueta?: 'Antes' | 'Después' }` y `{ tipo: 'video'; src: string; poster: { src: string; width: number; height: number }; pie: string; voz?: true; guion?: string; duracion: number; bytes: number }`, donde `pie` empieza con «Ejemplo ·» y describe lo que se ve (es la alternativa en texto del video sin voz, WCAG 1.2.1). La `etiqueta` se pinta en voz de datos sobre el marco. El póster no lleva `alt`: el `<video>` se describe con `aria-describedby` apuntando a su pie. Debajo del pie, en voz de datos, van la ficha «Video · 10 s · sin voz · 1,4 MB» (o «con voz y subtítulos»), calculada de `duracion`, `voz` y `bytes`, que escribe el paso de compresión (el render no lee el disco, igual que `heroes-manifest.mjs`), y un enlace visible «Descargar MP4» con área de toque de 44 px en compacto. Con `guion`, debajo va `<details><summary>Ver guion</summary>` con el texto, que también leen los buscadores y los asistentes. El `<video>` lleva `controls`, `preload="none"`, `playsinline`, `poster` y el `width`/`height` del póster, y `muted` solo cuando no tiene `voz`; no lleva `autoplay` ni JavaScript. Su tamaño: `max-height: min(640px, 75vh)`, `width: auto`, `max-width: 100%` y centrado, para que un 9:16 no pase del alto de la pantalla. `columnas` del bloque `ejemplos`: Anuncios 3 (los 2 anuncios y el video en una fila desde 1.024 px), Videos 2, Fotografía de producto 2 (antes y después de a dos) y Avatar 1. Sus estilos van en una hoja nueva, `src/styles/ejemplo-media.css`, que `[...slug].astro` pone en línea solo cuando la página tiene ejemplos `foto` o `video` (aprendizaje `astro-css-por-ruta-no-por-componente`). No van en `molde-kredit.css`, porque esa hoja también va en línea en la portada (`src/pages/index.astro:27`), que tiene solo 869 B de margen de CSS (26.731 de 27.600 B gzip, medido el 19-oct). La hoja nueva reusa el marco y el pie de los tipos que ya existen. `node scripts/presupuestos.mjs` debe seguir en verde sin subir ningún máximo: quedan 2.913 B libres en `servicio`, 3.613 B en `hub` y 869 B en `portada`, gzip, y la portada no cambia.

Reglas: todo marcado «Ejemplo» fuera de la pieza; sin marcas, logos, personas reales ni clientes; cada generación cobrada con su `request_id` y costo en `audit/imagenes-ia-2026-10.json`; cada archivo publicado con su fila de créditos (modelo y descripción) en `public/images/ejemplos/CREDITOS.json` (imágenes y pósters) o en `public/videos/ia-creativa/CREDITOS-IA.json` (videos); videos en MP4 H.264 ≤ 2 MB, `preload="none"`, póster WebP, sin autoplay con sonido. Si el tope de US$ 15 se alcanza, se para y se avisa al dueño.

### #2b Fotos de portada (D45)
4 fotos realistas tipo Kredit (personas y lugares de Panamá, luz natural, sin texto ni logos), una por página, con `fal-ai/nano-banana-pro` (US$ 0,15 cada una, dentro de la cuenta de la tanda). Cada una lleva el entregable del servicio en escena, porque `DESIGN.md` pide que la imagen nunca vaya sola y una foto de ambiente no muestra lo que se vende:
- Anuncios: una persona en un café con el celular mostrando el anuncio de ejemplo.
- Videos: una vendedora graba un producto con el celular, con el cuadro subtitulado en la pantalla.
- Fotografía de producto: el producto en una mesa junto a una ventana, con la foto «después» en una laptop.
- Avatar: una laptop con el cuadro del avatar subtitulado.

La pantalla de cada foto se compone con la pieza de ejemplo real: se genera con la pantalla en magenta y se rellena con la máscara de `componer-pantallas.mjs`, que se promueve del scratchpad de la portada v2 a `scripts/componer-pantallas.mjs`. `HERO_ALTS` dice que la foto es generada con IA. El `portada.pie` describe la escena; su texto exacto depende de T2. Se instalan con `node scripts/portadas-fotos.mjs <foto> marketing/<slug>` (una vez por foto): recorta a 10:7, escribe `public/images/hero/marketing--<slug>.jpg` de 1600×1120, las variantes WebP 480/800/1200/1600 con la de 1200 en 58 KB o menos, y el recorte para compartir `public/images/og/marketing--<slug>.jpg` de 1200×630. La portada v2 sirve 480, 800 y 1200 (`PortadaServicio.astro:17`) y el validador pesa esas fuentes (`validar-marcador.mjs:30-37`), así que el tope de la 1200 que pone el script basta. Después, `node scripts/heroes-manifest.mjs` regenera `src/lib/heroes.ts` (`HERO_SLUGS` y `OG_SLUGS`, archivo generado) y el texto alternativo de cada foto se agrega a `HERO_ALTS` (`src/lib/img.ts:110`). Fila en `public/images/hero/CREDITOS-IA.json`.

### #3-#6 Las cuatro páginas (anatomía v2, en `src/lib/pages/marketing.ts`, padre `marketing`)

| Slug | Palabra principal | Secundarias | Clave de precio (`service.catalogo`) | `serviceKey` (clave del formulario) |
|---|---|---|---|---|
| `marketing/anuncios-con-ia-panama` | anuncios con ia | creativos con IA para Meta Ads; publicidad con inteligencia artificial | `anuncios-ia` | `pauta` |
| `marketing/videos-con-ia-panama` | videos con ia para empresas | reels con IA; video publicitario con IA | `videos-ia` | `definir` |
| `marketing/fotografia-de-producto-con-ia-panama` | fotografía de producto con ia | imágenes con IA para redes y catálogo | `fotos-producto-ia` | `definir` |
| `marketing/avatares-y-voz-con-ia-panama` | avatar con ia | presentador virtual; voz en off con IA; doblaje con IA | `avatar-ia` | `definir` |

La tercera URL lleva la palabra principal («fotografía de producto»), porque una URL publicada ya no puede cambiar (`seo-congelado.mjs` no deja que aparezcan ni desaparezcan URLs); «imágenes con IA», la palabra que usó el dueño en D52.2, queda como secundaria y en el texto. Es la opción por defecto de la «Puerta del dueño».

Identificadores de cada página, en una sola tabla para no confundir sus raíces:

| Página | Slug | Clave de precio | Archivos (`public/images/ejemplos/`, `public/videos/ia-creativa/`) | `medicionId` | `serviceKey` |
|---|---|---|---|---|---|
| Anuncios | `marketing/anuncios-con-ia-panama` | `anuncios-ia` | `ia-anuncios-<n>` | `anuncios-ia-lcp` | `pauta` |
| Videos | `marketing/videos-con-ia-panama` | `videos-ia` | `ia-videos-<n>` | `videos-ia-lcp` | `definir` |
| Fotografía de producto | `marketing/fotografia-de-producto-con-ia-panama` | `fotos-producto-ia` | `ia-fotos-<n>` | `fotos-ia-lcp` | `definir` |
| Avatares y voz | `marketing/avatares-y-voz-con-ia-panama` | `avatar-ia` | `ia-avatar-<n>` | `avatar-ia-lcp` | `definir` |

`serviceKey` es la clave del formulario, no la del precio, y va en el mismo orden que en las hermanas de `marketing.ts` (después de `parent` y `anatomia`, `marketing.ts:160-163`). Con ese orden `paginasDelRegistro` (`datos.test.mjs:22`) no la lee, igual que hoy con Google Ads, así que `datos.test.mjs:66-82` no cambia. En Avatares y voz, la voz en off y el doblaje sueltos se cotizan aparte: la página lo dice en una línea y en una pregunta frecuente, sin cifra.

Metadatos y datos de cada página (los title y H1 contienen la palabra principal tal cual, sin importar mayúsculas ni tildes; entre paréntesis, caracteres):

| Página | Title | H1 | Description | `service.type` | Etiqueta en `iaCreativa` | `related` fuera de IA creativa |
|---|---|---|---|---|---|---|
| Anuncios | Anuncios con IA en Panamá \| Creativos para Meta y Google (56) | Anuncios con IA listos para Meta y Google (41) | Anuncios con IA en Panamá: 5 creativos en imagen y video para Meta y Google, con revisión humana, 2 rondas de cambios y licencia de uso comercial. (146) | Producción de anuncios con IA | Anuncios con IA | Google Ads; Meta Ads |
| Videos | Videos con IA para Empresas en Panamá \| Reels y Anuncios (56) | Videos con IA para empresas, con guion y voz (44) | Videos con IA para empresas en Panamá: reels y anuncios de 15 a 30 s con guion, voz y subtítulos, revisados a mano y con licencia de uso comercial. (147) | Producción de videos con IA | Videos con IA | Meta Ads; Contenido para redes |
| Fotografía de producto | Fotografía de Producto con IA en Panamá \| Catálogo y Redes (58) | Fotografía de producto con IA, desde tus fotos (46) | Fotografía de producto con IA en Panamá: 10 fotos en 3 escenarios a partir de tus fotos reales, para catálogo, web y redes, con revisión humana. (144) | Fotografía de producto con IA | Fotos de producto con IA | Tiendas online; Meta Ads |
| Avatares y voz | Avatar con IA y Voz en Off en Panamá \| Presentador Virtual (58) | Avatar con IA: tu presentador virtual (37) | Avatar con IA en Panamá: un presentador virtual con voz en español para tus videos, con guion y subtítulos. No clonamos a nadie sin su permiso. (143) | Videos con avatar e IA | Avatar y voz con IA | Contenido para redes; IA para empresas |

Los H1 son más cortos que el más largo publicado hoy en una página v2 (47 caracteres, Google Ads), para que la primera pantalla de AC10 quepa con su bajada; las etiquetas de `iaCreativa` son las mismas `h3` del hub y caben en una línea del menú móvil. La portada de cada página lleva, como sus hermanas (`marketing.ts:30-38`):
- `lead`: una bajada de 15 a 20 palabras.
- `portada.riel`: 4 datos de alcance. Por ejemplo, en Anuncios: Entrega «4 imágenes y 1 video» · Formatos «Feed, historias y Reels; Display de Google» · Cambios «2 rondas» · Licencia «Uso comercial por escrito».
- `portada.pie`: describe la escena de la foto.
- Como máximo 2 notas de `receipt.pie` en la portada, solo las que apliquen a esa página.

Antes del commit, el dueño revisa el texto de las 4 páginas en capturas del preview local (como el resto del contenido, nada se publica sin su permiso, D47).

Cada página, con los mismos campos y en el mismo orden que `marketing/google-ads-panama` (`marketing.ts:160-170`: slug, parent, anatomia, serviceKey, title, description, h1, breadcrumb, service, lead, portada, blocks), más `cta: { h2, wa, boton }` como las hermanas con clave `definir` (`marketing.ts:728`). Sin `cta.boton`, `[...slug].astro:35` pondría el rótulo de la clave («Ayúdame a definir mi proyecto»). `boton`: «Cotizar mis anuncios con IA», «Cotizar mis videos con IA», «Cotizar mis fotos de producto», «Cotizar mi video con avatar»; `wa` nombra el servicio y no lleva cifra (D23):
- title ≤ 60 caracteres con la palabra principal; description ≤ 155; H1 con la palabra principal.
- Orden de los bloques, igual en las 4 páginas: `answer` → `receipt` → `ejemplos` («Así se vería») → `blank` (prueba) → `includes` → `steps` (proceso y plazo) → `tabla` «¿Cuándo te basta la herramienta gratis?» → `compare` → `faq` → `form` → `related`. Los ejemplos van antes de la caja de prueba porque en un servicio de producción visual el trabajo es la prueba (`DESIGN.md`: la prueba va después de la respuesta).
- Bloques: respuesta citable de 40-60 palabras con `fecha` igual al día en que se escribe el texto, en formato AAAA-MM-DD (la frase «Actualizado el …» la pinta `Blocks.astro:218` a partir de `fecha`; no se escribe en el texto), y con la cifra «desde $X» y su alcance (D23), porque responde la pregunta GEO de precio; qué incluye / entregables / qué no incluye; «Así se vería» con los ejemplos de #2; proceso y plazo; comparación con criterios verificables y su fuente; el bloque «¿Cuándo te basta la herramienta gratis?» y la línea de frontera con lo que ya se vende (ver «Requisitos aceptados en la revisión»); ≥ 6 preguntas frecuentes, entre ellas «¿Las piezas son exclusivas?» y «¿También como plan mensual?», respondida sin cifra («se cotiza junto a tu pauta»); formulario `{ type: 'form', h2, intro }` (ContactForm), igual que las hermanas (`marketing.ts:329`, `:532`, `:715`): `service-form` no se usa porque `ServiceForm.astro:1-2` está construido y sin activar hasta la fase 3, y el flujo v1 de producción descarta los envíos sin correo (D30); servicios relacionados.
- Comparación (bloque `compare`, igual que en `marketing/google-ads-panama`, `marketing.ts` cerca de la línea 310, con `otraCotizacion: true` como sus hermanas, `marketing.ts:303`): 5 criterios fijos en las 4 páginas. `fuente` (`CompareRow`, `src/lib/types.ts:90-94`) se pinta con `url(slug)` y sin ancla (`Blocks.astro:319`), así que solo la lleva el criterio publicado en otra página: «Cotización cerrada por escrito» → `{ slug: 'como-trabajamos', label: 'Cómo trabajamos' }` (`core.ts:9`). «Precio publicado» va sin `fuente`, porque `/precios/` no publica estos paquetes: su `nosotros` dice «Sí: desde $X, arriba en esta página». «Revisión humana de cada pieza», «Licencia de uso comercial por escrito» y «Archivos finales entregados» se prueban en la misma página y también van sin `fuente`: su `nosotros` nombra la sección («ver Qué incluye», «ver Qué no incluye», «ver Entregables»). «Licencia de uso comercial por escrito» (no «derechos»: lo hecho solo con IA puede no tener protección de autor, así que se da licencia de uso, no exclusividad) solo se publica después de leer los términos de uso comercial de cada herramienta (Kling y `nano-banana-pro` vía fal, el plan de Higgsfield) y anotarlos en D52; si alguna no permite el uso comercial, el criterio dice qué se puede usar y qué no. No se compara contra competidores con nombre.
- Schema: el Service lleva dos ofertas con el mismo monto, y las dos dan la cifra en `priceSpecification.minPrice`, no en `price`: `offers`, que sale del `receipt` (`src/lib/schema.ts:127-135`, el campo que lee `validar-marcador.mjs:166`), y el OfferCatalog de `hasOfferCatalog`, que sale de `service.catalogo: ['<clave de precio>']` (`schema.ts:190-202`, que solo acepta claves de `confirmados`). Además, FAQPage con el mismo texto de las preguntas y `primaryImageOfPage` (ImageObject) de la foto de portada, que sale sola de `HERO_SLUGS`.
- Bloque `receipt` (tipo en `src/lib/types.ts:22`): `titulo` con el nombre del servicio; `fecha` igual al día en que se escribe; `precio: { estado: 'confirmado', desde: '$780', unidad: 'por paquete de 5 creativos' }` con la cifra igual al `monto` de su clave (`$500` por paquete de 4 videos, `$480` por paquete de 10 fotos, `$150` por video de hasta 1 minuto); `plazo` obligatorio, propuesto por página y confirmado en la «Puerta del dueño»: Anuncios «7 días hábiles desde que apruebas textos y oferta», Videos «7 días hábiles desde que apruebas el guion», Fotografía de producto «5 días hábiles desde que recibimos tus fotos», Avatar «3 días hábiles desde que apruebas el guion»; `medicionId: '<pagina>-lcp'` (`anuncios-ia-lcp`, `videos-ia-lcp`, `fotos-ia-lcp`, `avatar-ia-lcp`), como los 27 recibos que ya existen, con su fila escrita en #9 por `node scripts/medir.mjs http://localhost:4602/marketing/<slug>/ --id <id> --escribir`, con el preview levantado en segundo plano (`npx astro preview --port 4602`; en primer plano bloquea al agente) (D47; la medición no se muestra al visitante desde D49); `pie` con lo que el precio no incluye, como máximo 2 notas y solo las que apliquen (la inversión en pauta no aplica a Fotografía de producto; la locución humana, a Anuncios y Videos; el uso de imagen de personas reales, a Avatar).
- Prueba social: `{ type: 'blank', punto: 'prueba', h2: 'Casos de clientes', texto: 'Todavía no hay casos de clientes publicados: el servicio abrió en <mes> de 2026. Los ejemplos de esta página los hicimos nosotros.' }`. El texto fijo de `Blocks.astro:335` («Resultado medido: sin publicar aún, falta la autorización del cliente») insinuaría que hay clientes esperando permiso, y no los hay. Por eso el tipo `blank` gana `texto?: string` (`src/lib/types.ts:31`), y `Blocks.astro:335` lo usa cuando existe; las páginas que no lo pasan se ven igual que hoy. Se declara en el resumen porque cambia un componente compartido.
- Contenido obligatorio: revisión humana de cada pieza; límites de la IA dichos en claro; licencia de uso comercial escrita (no exclusividad), con la pregunta frecuente «¿Las piezas son exclusivas?» respondida con honestidad; en Anuncios, que el contenido generado con IA se marca cuando la plataforma lo pide (la regla de Meta solo se cita con su fuente oficial enlazada; ver «Requisitos aceptados en la revisión»); en Avatares y voz, «no clonamos la voz ni la cara de nadie sin su permiso por escrito», con el consentimiento escrito que la Ley 81 de 2019 pide para datos personales (ya citada en `marketing.ts`, página de WhatsApp), y que los presentadores de Higgsfield se usan según la licencia de su plan, anotada en D52.
- Prohibido: prometer resultados, cifras de rendimiento, conteos de clientes, «Meta Verified» (se escribe «Tech Provider verificado por Meta»), logos de terceros.
- `src/data/formulario.json` (opción por defecto de la «Puerta del dueño»): no se crean claves nuevas, porque una clave nueva obliga a subir el flujo de n8n a Hetzner (`docs/contacto-n8n/armar-correo.js:66-71` manda a «definir» cualquier clave que no conoce). En `paginas` se agregan las 4 rutas con claves que ya existen: anuncios → `pauta`; videos, fotografía de producto y avatar → `definir`, igual que `marketing/contenido-redes-sociales-panama`. El campo `origen` del envío ya dice desde qué página llegó la consulta. `FORMULARIO.md` regenerado con `node scripts/gen-formulario-md.mjs` y `--check` en verde.
- `scripts/paginas-comerciales.json`: `{ "slug": ..., "tipo": "servicio", "fase": "2b", "precio": "confirmado" }` para cada una.
- `related` de cada página nueva: las otras 3 páginas de IA creativa, el hub y las 2 páginas de la columna «`related` fuera de IA creativa» de la tabla de arriba. Con el hub, `/servicios/`, `/inteligencia-artificial-para-empresas-panama/` y sus 3 hermanas, cada una recibe enlaces desde el `<main>` de al menos 5 páginas distintas, por encima de `minEntrantes: 3` (`scripts/paginas-comerciales.json:6`, `scripts/validar-marcador.mjs:268-273`).
- `docs/specs/rediseno-elementoweb/KEYWORDS.md`: 4 filas en «Asignación» con su columna «Reservadas a otra página»: Anuncios → «meta ads panamá; facebook ads panamá (pauta social); google ads panamá (Google Ads)»; Videos → «reels para redes; creación de contenido para instagram (contenido para redes)»; Fotografía de producto → «diseño gráfico para redes (contenido para redes)»; Avatares y voz → «chatbot con ia (chatbots); asistente virtual con ia (IA para empresas)». La fila de `/marketing/` suma a sus reservadas las 4 palabras principales nuevas con la etiqueta «(IA creativa)», para que el hub no compita con ellas. 4 filas en el «Apéndice: metadatos actuales» con el title, la descripción y el H1 publicados. El encabezado del archivo (línea 5) pasa de «34 páginas» a 38 y de «25 servicios» a 29. El panel GEO de 10 preguntas (D13, `scripts/keywords.test.mjs:95-105`) no cambia; las 2 preguntas nuevas («¿Quién hace videos con IA para empresas en Panamá?» → videos; «¿Cuánto cuesta un anuncio hecho con IA en Panamá?» → anuncios) se miden aparte, en la entrada de TODOS.md.

### #7 Hub `/marketing/`
- Metadatos: el title («Marketing Digital y Pauta en Panamá | Google, Meta y Más», 56) y el H1 («Marketing digital que trae clientes») ya cumplen y no cambian, aunque D52.1 lo permite: así no se mueve una URL que ya tiene impresiones. Cambia la descripción, que hoy tiene 156 caracteres y no nombra la IA creativa: «Marketing digital en Panamá: Google Ads, Meta Ads, contenido, email y WhatsApp masivo, más anuncios, videos y fotos hechos con IA y revisados a mano.» (149). En el schema solo cambia `WebPage.description` (`schema.ts:168`), que copia esa descripción; las filas nuevas de la tabla y la respuesta citable no entran al JSON-LD y el hub no suma preguntas frecuentes. En `scripts/cambios-permitidos.json` se edita la línea que ya existe para `/marketing/` (línea 72, hoy `"campos": ["schema"]`): pasa a `"campos": ["description", "schema"]` y su `motivo` suma «D52.1 (17-oct-2026): descripción nueva del hub con la IA creativa». La fila de `/marketing/` en «Asignación» (reservadas) y la del Apéndice (`KEYWORDS.md:143`, descripción) se actualizan en el mismo commit que el snapshot.
- Sin bloque de tarjetas nuevo: 4 tarjetas iguales clasifican pero no orientan, y en v2 se pintarían como la lista «+» de «Qué hacemos en marketing», justo encima (`Blocks.astro:84-96`). Las 4 páginas entran como 4 filas de la tabla «Elige por lo que quieres lograr» (`marketing.ts:50-63`), que ya orienta por objetivo y acepta enlaces en sus celdas:
  - «Tener anuncios listos para tu pauta» → Anuncios con IA → «Desde $780 por 5 creativos».
  - «Videos de producto o de campaña con voz» → Videos con IA → «Desde $500 por 4 videos».
  - «Fotos de catálogo sin estudio» → Fotos de producto con IA → «Desde $480 por 10 fotos».
  - «Un presentador para tus videos» → Avatar y voz con IA → «Desde $150 por video».

  La intro de la tabla deja de hablar solo de «fee de gestión»: pasa a «referencias publicadas de gestión y de producción». El ítem «Contenido» del riel de la portada del hub (`marketing.ts:34`) pasa de «Redes, email y WhatsApp» a «Redes, email, WhatsApp y piezas con IA».
- Sin ItemList (opción por defecto de la «Puerta del dueño»; la spec aprobada lo pedía): `pageJsonLd` (`src/lib/schema.ts:226-244`) no lo emite en ningún hub y este plan no agrega código de schema; los enlaces de la tabla bastan.
- Respuesta citable actualizada, con `fecha` igual al día en que se escribe.
- Los 6 enlaces actuales (líneas 87-92) no cambian de destino; solo cambia el texto de las líneas 88 y 90 (ver «Requisitos aceptados en la revisión»).

### #8 Enlaces globales
- `src/lib/site.ts`: `export const iaCreativa: NavLink[]` con las 4 páginas, construida desde `src/data/ia-creativa.json` (ver «Requisitos aceptados en la revisión»).
- `src/components/Navbar.astro`: grupo «Producción con IA» después del de marketing (escritorio línea ~58 y móvil línea ~82), con las mismas clases existentes (sin utilidades nuevas de Tailwind).
- `src/components/Footer.astro`: fila «Producción con IA» después de la de marketing (línea ~66), mismas clases.
- `src/lib/pages/servicios.ts:10` (`catalogGroups`, el bloque «Todo lo que ofrecemos» de `/servicios/`): grupo nuevo «Producción con IA» (`hub: 'marketing'`) con las 4 páginas. La tarjeta de Fotos de producto con IA y la página dicen, sin cifra, que el set de imágenes para una web nueva (bloque Producción, US$ 100) es otro servicio que el paquete de fotos de producto. El bloque `production` no se toca: lo comparten `/servicios/` (`servicios.ts:160`), `/precios/` (`precios.ts:135`) y `core.ts:49`.
- `src/lib/pages/ia-empresas.ts:196` (bloque `related` de `/inteligencia-artificial-para-empresas-panama/`): suma las 4 páginas.
- `public/llms.txt`: 4 líneas en «## Mapa de servicios», debajo de la de Automatizaciones con n8n (línea 84), con el formato `- [Nombre](URL): una línea con su precio («desde $780 por paquete de 5 creativos», en el mismo formato que `llms.txt:59-60`)`, porque `/precios/` no los publica. La línea 64 («Los precios están en [Precios]») suma que los paquetes de IA creativa tienen su precio en su propia página, y la línea de Marketing de «## Servicios» (línea 55) suma «y producción con IA».

## Runbook (pasos exactos para el implementador)

Cada paso dice qué debe salir. Si no sale eso, se para con el código de error del paso y se reporta.
0. Preflight (2 min):
   - `node -v`, `npm ci` y `npm run build` en verde.
   - `ffmpeg -version`: 8.1.2 o superior.
   - `lighthouse --version`: 13.x. Es el CLI global que llama `medir.mjs` (`medir.mjs:85`), no una dependencia del repo; si falta, `npm install -g lighthouse`. No hay `~/.ssh/psi.key`, así que `medir.mjs` usa Lighthouse.
   - En fal, `check_account_status`, y en Higgsfield, `balance`, con su saldo anotado.
   - `git status` limpio y `BASE=$(git rev-parse HEAD)`, anotado en el resumen.
   - D52 tiene una línea por cada id de G1 a T5; si falta una, se para con `MKIA-PUERTA: falta <id>`.
   - `scripts/componer-pantallas.mjs` promovido desde el scratchpad de la portada v2 (hoy solo existe ahí), con su prueba en verde.
   - Subtítulos en Roboto: un cuadro de prueba con `subtitles=<srt>:fontsdir=public/fonts:force_style='FontName=Roboto'`. Si libass no carga el `woff2` del sitio (en Windows no hay Roboto TTF instalado), se pide permiso al dueño para descargar el Roboto TTF de Google Fonts (Apache 2.0) a `.gstack/tmp/fonts/` y se usa esa carpeta.
0b. Demanda (U1 y U2, decididos el 19-oct-2026), antes de fijar slugs (1 día):
   - Planificador de palabras clave de Google Ads, en Panamá y en español: las 4 palabras principales y 2 alternativas por categoría. Por ejemplo: «anuncios para redes sociales», «diseño de anuncios», «videos publicitarios», «fotografía de producto», «presentador virtual». Lo corre el dueño, o Claude en el navegador del dueño con su permiso. Si la cuenta no muestra datos, se anota y queda la lectura de Google.
   - Lectura de la primera página de Google por palabra, en ventana privada y desde Panamá: cuántos resultados son agencias o servicios y cuántos son herramientas.
   - Regla: la tabla de decisión de U1 en «Requisitos aceptados en la revisión». Lleva página propia la palabra con búsquedas en el Planificador y al menos 3 resultados de agencias o servicios en Google. Si la palabra con «IA» trae solo herramientas, se usa la de la categoría. Un paquete sin búsquedas va como sección de otra página: se para con `MKIA-DEMANDA` y la sección se planifica aparte.
   - Nicole habla con prospectos en paralelo; sus notas no frenan este paso.
   - Salida: D52 anota, por palabra, el rango del Planificador, la lectura de Google, la fecha y la decisión (página propia o sección), y congela los slugs. Si falta una palabra, se para con `MKIA-DEMANDA: falta la medición de <palabra>`.
1. #1 precios en `precios.json`, con D52. Salida: `SOLO_UNIDAD=1 node --test --test-name-pattern=montos scripts/marketing-ia.test.mjs` con exit 0. Las demás pruebas del archivo siguen en rojo hasta su paso, y es lo esperado (pruebas primero).
2. #2 y #2b, generación con la máquina de estados de gasto, con `node scripts/gasto-ia.mjs` antes y después de cada envío (ver «Requisitos aceptados»). Al final de cada pieza, `SOLO_UNIDAD=1 node --test --test-name-pattern=gasto scripts/marketing-ia.test.mjs` con exit 0.
3. La hoja de contactos al dueño. D52 congela qué páginas salen (N) y la fecha de aprobación.
4. Corte vertical de Anuncios con IA:
   - Página, datos, receipt y ejemplos.
   - `npm run build && VERIFY=1 node --test --test-name-pattern=anuncios-con-ia scripts/marketing-ia.test.mjs` con exit 0. Las pruebas por página llevan el slug en su nombre; las del hub, el menú, el pie y los enlaces globales siguen en rojo hasta el paso 5.
   - Preview en 4602 (`npx astro preview --port 4602` en segundo plano) y captura. D52 anota la hora de inicio del paso 1 y la de este verde: es el TTHW de esta épica.
5. Las otras N − 1 páginas, el hub, `/servicios/`, IA para empresas, menú y pie, `llms.txt` y KEYWORDS. Salida: `npm run build` y `VERIFY=1 node --test --test-skip-pattern=mediciones scripts/marketing-ia.test.mjs` con exit 0. La igualdad con `mediciones.json` se cumple en el paso 8, cuando `medir.mjs` escribe sus filas; ahí corre el archivo entero. `keywords.test.mjs` sigue en rojo por las filas nuevas del Apéndice hasta el `--actualizar` del paso 7, y es lo esperado.
6. Línea base:
   - Si `../elementoweb-base` ya existe, primero `git worktree remove --force ../elementoweb-base`.
   - Luego `git worktree add ../elementoweb-base $BASE` y, dentro (`cd ../elementoweb-base`), `npm ci && npm run build`.
   - Comparaciones desde la raíz: `node scripts/selectores-hoja.mjs ../elementoweb-base/dist dist` y `node scripts/comparar-main.mjs ../elementoweb-base/dist dist --permitidas scripts/main-permitidas.json`, las dos con exit 0.
   - Al terminar, `git worktree remove --force ../elementoweb-base`.
7. `node scripts/seo-congelado.mjs`: salen N errores «URL nueva…» y nada más. Luego el diff del snapshot y `--actualizar`. Después se quita `description` del permiso de `/marketing/` (`cambios-permitidos.json:72` vuelve a `"campos": ["schema"]`), para que no quede abierto a cambios futuros, y `seo-congelado` sigue en 0. Es un cambio de permiso declarado según la regla 3.
8. Primero las mediciones con `medir.mjs` en 4602, que escriben `src/data/mediciones.json`, y `qa-responsive.mjs` en 4610. Después `npm run build` y `npm run verify` en verde sobre ese árbol, para que lo verificado sea lo que se sube. Si el texto lleva una `fecha` posterior al último commit, se commitea antes o se corre con `VALIDAR_HOY=<esa fecha>`.
9. Capturas al dueño y el resumen con los cambios declarados según la regla 3. El push, solo con permiso.

Ciclo interno mientras se trabaja: unidad con `SOLO_UNIDAD=1 node --test scripts/marketing-ia.test.mjs`; `dist/` con `npm run build && VERIFY=1 node --test scripts/marketing-ia.test.mjs`; antes de pushear, `npm run verify`.

## Acceptance Criteria

Donde un criterio, una prueba o un conteo dice 4 (páginas, URL, errores, filas o entradas), se lee N: las páginas que salen en esta tanda según D52 (N = 4 si salen todas; el mínimo de ejemplos puede dejar alguna fuera). Igual con los totales: 38 páginas es 34 + N, y 29 servicios es 25 + N.

1. Las 4 URL nuevas responden 200 en `astro preview`, aparecen en `dist/sitemap-0.xml` y en `public/llms.txt`; `node scripts/check-links.mjs` da 0 enlaces rotos.
2. Cada página nueva tiene title ≤ 60 y description ≤ 155 caracteres, su palabra principal en title y H1, y canonical propio; `node scripts/qa-seo.mjs` pasa.
3. `node scripts/validar-marcador.mjs` sale con 0 con las 4 páginas nuevas en el manifiesto: cada punto del marcador tiene su evidencia, salvo «prueba», declarado vacío con su bloque `blank`; y cada página recibe al menos 3 enlaces de contenido (`minEntrantes`).
4. Cada página nueva tiene ≥ 6 preguntas frecuentes y su FAQPage tiene el mismo texto pregunta por pregunta.
5. `node --test scripts/keywords.test.mjs` pasa con las 4 filas nuevas; ninguna palabra principal se repite en la tabla.
6. `node scripts/seo-congelado.mjs`, antes de `--actualizar`, sale con exactamente 4 errores «URL nueva que no estaba en el snapshot» (`seo-congelado.mjs:29`), uno por página nueva, y la cuenta de cambios permitidos que imprime solo suma el de `/marketing/`. `seo-congelado` imprime conteos y no rutas, así que lo de «solo `description` y `schema`» se comprueba en el diff de `audit/seo-snapshot.json`. Si sale cualquier otro error, se para: no se declara sin revisarlo. Después se revisa que el diff de `audit/seo-snapshot.json` suma esas 4 URL y cambia `/marketing/`, nada más; se corre `node scripts/seo-congelado.mjs --actualizar`, y `node scripts/seo-congelado.mjs` sale con 0. El aviso «permiso sin uso» que da después para `/marketing/` es esperado: el archivo conserva los permisos de la fase 2 igual que hoy.
7. Toda cifra `$N` del `<main>` de las 4 páginas es el `monto` de su clave de `precios.json`. Eso incluye la portada, la respuesta citable y el «desde $X» con alcance que pide D23, y el comparador. La prueba sobre `dist/` lo comprueba igual que la prueba (b) de `portada.test.mjs:213`, y comprueba también que las dos `priceSpecification.minPrice` del Service (`offers` y `hasOfferCatalog`) son ese `monto`; `validar-marcador.mjs:164-166` lo acepta. El mensaje de WhatsApp (`cta.wa`) no lleva cifra (D23).
8. Cada ejemplo, póster, video y foto publicados tienen su fila de créditos (`public/images/ejemplos/CREDITOS.json`, `public/videos/ia-creativa/CREDITOS-IA.json` o `public/images/hero/CREDITOS-IA.json`) y, si costó, su fila en `audit/imagenes-ia-2026-10.json`; la suma de la tanda es ≤ US$ 15. Una prueba unitaria lo comprueba sobre los archivos (cada archivo nuevo de esas carpetas tiene su fila; `tandas["marketing-ia"].gastado` es la suma de las filas con `tanda` y no pasa de 15; `gastado` es la suma de todas las filas). Una prueba sobre `dist/` comprueba que cada `src`, `poster` e `img src` del `<main>` de las 4 páginas existe en `dist/`, que cada `.mp4` pesa 2 MB o menos y que cada imagen de ejemplo pesa 80 KB o menos.
9. La lista `marketing` de `site.ts` sigue con sus 6 enlaces, la sección Marketing de la portada sigue con sus 6 módulos y `node --test scripts/portada.test.mjs` pasa. Su prueba 8 solo cambia para excluir las 4 URL de IA creativa (lista literal en la prueba), declarada según la regla 3.
10. `node scripts/qa-a11y.mjs` sale con 0 tipos de problema, con `/marketing/` sumado a su lista fija (`qa-a11y.mjs:16-17`; hoy no lo recorre porque está en fase 5), y `node scripts/qa-lcp.mjs` pasa con las 4 páginas como estrictas (anatomía v2). `qa-lcp.mjs` suma para esas 4 rutas la medida de primera pantalla que hoy solo hace en `/` (`qa-lcp.mjs:47-58`), con los selectores de `PortadaServicio.astro:31-35`: a 1440×900, `.ew-hero__h1`, `[data-score="precio"]` y `.ew-hero .ew-btn--primary` terminan dentro de la pantalla; a 390×844, `.ew-hero .ew-btn--primary`. Además, a 1440×900 cada `<video>` de las 4 páginas mide 900 px de alto o menos. Si una página no cumple, se acorta su H1 o su bajada, no se cambia la medida. Los dos cambios de validador se declaran según la regla 3.
11. La hoja compartida de CSS no gana utilidades que salgan del código. Línea base: `git worktree add ../elementoweb-base <SHA previo a la épica>`, luego `npm ci` y `npm run build` en esa carpeta. Comparación: `node scripts/selectores-hoja.mjs ../elementoweb-base/dist dist`, un script nuevo de la épica.
    - El script extrae los selectores de `dist/_astro/*.css` de cada build e imprime `+N −M`. Cada selector nuevo se desescapa primero, porque la hoja escribe `md\:flex` o `w-\[12px\]` y en el código la clase va como `md:flex` o `w-[12px]`. Después imprime los archivos donde `git grep -lwF -- <clase>` la encuentra: `-F` porque `[` y `.` no son regex aquí, y `-w` para que «italic» no coincida con «italicas».
    - Sale con 1 solo si una clase nueva aparece en `src/`. Las que solo salen de textos de `docs/`, `audit/` o `TODOS.md` se listan como aviso: Tailwind 4 lee todo archivo que git no ignora (`src/styles/global.css:1`).
    - Si la clase sale solo del texto de `src/lib/pages/*.ts` (una palabra del contenido igual a una utilidad, como «italic»), se cambia la palabra o se declara en el resumen con su peso.
    - Una prueba sobre `dist/` comprueba que los enlaces nuevos del menú y del pie llevan exactamente las mismas clases que los de marketing.
12. `npm run verify` termina en verde.
13. Cada prueba del Testing Plan declara su tarjeta en un comentario de una línea justo encima del `test(...)` en su archivo `scripts/*.test.mjs`: `// protects=<observable>; fails_when=<resultado incorrecto>; no_claim=<lo que el verde no prueba>`.
14. No se degrada nada existente. Las páginas previas solo cambian en menú y pie, salvo estas 5, que cambian solo en lo declarado:
    - `/marketing/`: descripción, schema, respuesta citable, 4 filas de la tabla «Elige por lo que quieres lograr» y su intro, el ítem «Contenido» del riel y 2 frases.
    - `/servicios/`: grupo del catálogo y texto de la tarjeta de Facebook e Instagram Ads (`servicios.ts:53`).
    - `/marketing/google-ads-panama/` y `/marketing/facebook-instagram-ads-panama/`: un relacionado.
    - `/inteligencia-artificial-para-empresas-panama/`: 4 relacionados.

    Verificación: con la línea base del AC11 (`../elementoweb-base/dist`), un script compara el `<main>` de cada HTML de los dos builds. Solo pueden diferir esas 5 rutas y faltar en la base las 4 nuevas.
15. Después de publicar (no bloquea el cierre de la implementación, que termina con el push aprobado): la entrada de medición de TODOS.md lleva la fecha del día P y la lectura GEO del día P. La lectura la hace Claude en el navegador del dueño, con su permiso, o el dueño, con el método de `docs/geo-panel-preguntas.md`.

## Testing Plan

| Capa | Qué | Cantidad |
|---|---|---|
| Unidad, en `scripts/marketing-ia.test.mjs`. Importa `marketingPages` de `src/lib/pages/marketing.ts`, que Node 24 carga (probado en la revisión de ingeniería), y lee `src/data/ia-creativa.json`. `site.ts` no se importa porque su import de JSON no carga en `node --test` | Los slugs de `src/data/ia-creativa.json` existen en `marketingPages`. Los 4 montos exactos de las claves nuevas, al estilo de `datos.test.mjs:101-106`. Las 4 filas de KEYWORDS existen con su principal y sus reservadas. Créditos y gasto de la tanda (AC8) | +4 |
| Sobre `dist/`, en el mismo archivo, con la guarda `conDist` de `portada.test.mjs:185-206`, movida a `scripts/lib/dist-guard.mjs`. Con `VERIFY=1` (lo pasa `verify.mjs`) o en CI, un `dist/` ausente o más viejo que `src/` o `public/` hace fallar; fuera de ahí las pruebas de `dist/` se saltan y lo dicen; `SOLO_UNIDAD=1` las salta siempre. Las pruebas por página llevan el slug en su nombre. | Por página nueva: title, H1, description y canonical; `data-page-type="servicio-con-precio"`; toda cifra `$N` del `<main>` y las dos `minPrice` iguales al `monto` de su clave; FAQPage = preguntas visibles; `primaryImageOfPage`; texto del botón principal = su `cta.boton`. El `<main>` del hub y el de `/servicios/` ya no dicen «El canal con mejor retorno» ni «creativos que detienen el scroll» (sin distinguir mayúsculas). Google Ads y Meta Ads enlazan a Anuncios con IA; `/servicios/` e IA para empresas enlazan las 4. Menú y pie con el grupo «Producción con IA» y las mismas clases que los enlaces de marketing. Los tipos `foto` y `video` pintan su pie «Ejemplo ·»; el `<video>` lleva `preload="none"` y `poster`, sin `autoplay`, y `muted` solo si no tiene voz. Cada `src`, `poster` e `img src` existe, cada `.mp4` pesa ≤ 2 MB y cada imagen de ejemplo ≤ 80 KB. Cada `<video>` tiene su enlace de respaldo al mismo `src`. La línea de frontera y el bloque «¿Cuándo te basta la herramienta gratis?» existen en las 4 páginas. Ninguna de las 4 contiene «falta la autorización del cliente» y su caja de prueba muestra su `texto`. Cada `<video>` tiene `aria-describedby` hacia su pie, la ficha de duración y sonido y el enlace visible «Descargar MP4». Avatar tiene su `<details>` «Ver guion». En Fotografía de producto la primera foto lleva la etiqueta «Antes» y las otras «Después». Los bloques siguen el orden fijado (`answer`, `receipt`, `ejemplos`, `blank`…) | +19 |
| Navegador | `qa-a11y` (con `/marketing/` en su lista fija), `qa-lcp` (estrictas por anatomía v2, con la medida de primera pantalla de AC10) y `check-links` cubren las 4 páginas al entrar al manifiesto | 0 nuevas, cobertura ampliada |
| Comparación de builds | `scripts/selectores-hoja.mjs` (AC11) y la comparación del `<main>` de AC14, las dos contra `../elementoweb-base/dist` | 2 scripts nuevos |
| Contratos y robustez (revisión DX), en `scripts/marketing-ia.test.mjs`, capa de unidad | Una prueba por cada script nuevo (`comparar-main`, `selectores-hoja`, `componer-pantallas`), que corre el script con `spawnSync` sobre carpetas temporales y espera exit 2 con un uso incorrecto y exit 1 con un caso que falla. Pista de audio de cada `.mp4` de las páginas que salen: con `voz`, la hay; sin `voz`, no. El mensaje `MKIA-EJEMPLO` de `Ejemplo.astro`. «`dist/` existe y está al día», con su mensaje `MKIA-DIST`. La prueba de créditos y gasto de AC8 suma 2 casos sin subir la cuenta: una fila `pendiente` sin conciliar y una fila con campos fuera de la lista | +6 |
| Ingeniería, en `scripts/marketing-ia.test.mjs` salvo donde se dice | Formulario: ninguna página nueva lleva ServiceForm, `data-service` = `serviceKey` (dist). `check-links` con un `.mp4` ausente falla. `lib/webp.mjs` se importa sin efectos y da `MKIA-PESO`. `gasto-ia.mjs`: transiciones válidas e inválidas y tope. Igualdad de conjuntos de `ia-creativa.json` con sus 10 sitios derivados. Datos de `marketingPages` (`serviceKey`, `cta.boton`, `desde`, orden, `voz` con `guion`). Ficha y códec contra el archivo (`statSync`, `mvhd`, `avc1`). Imágenes publicadas sin EXIF. La prueba «el sitio real» de `validar-marcador.test.mjs` con la fecha de `verify` | +9 |
| Ingeniería, segunda pasada | `componer-pantallas` con dos regiones junto al borde de una fila. `src/lib/ejemplos.ts` (`MKIA-EJEMPLO` y `fichaVideo`). Rótulo «Ejemplo de anuncio» en `dist/`. Se extienden sin subir la cuenta: cajas MP4 (`avcC`, `mdhd`), gasto (`asumido`, `sobrepaso`, bloqueo, tope del archivo y valores con URL), créditos (medidas orientadas) e igualdad de conjuntos (`HERO_ALTS`) | +3 |
| Cambios declarados (regla 3, una línea cada uno en el resumen) | Ver la lista de abajo | 7 pruebas, 4 validadores, 1 snapshot, 1 permiso, 1 umbral |

Cambios declarados (regla 3):
- Pruebas (N = páginas que salen en esta tanda según D52; N = 4 si salen todas):
  - `portada.test.mjs:447-453`: la 8 excluye las URL de IA creativa.
  - `portada.test.mjs:188-206`: la guarda `conDist` se mueve a `scripts/lib/dist-guard.mjs`, que importan esta prueba y `marketing-ia.test.mjs`, sin cambiar su comportamiento.
  - `validar-marcador.test.mjs:248`: 25 → 25 + N páginas de servicio.
  - `kind.test.mjs:23`: 25 → 25 + N, y su mensaje «las 24 páginas…» se corrige.
  - `datos.test.mjs:58`: 25 → 25 + N rutas en `formulario.paginas`.
  - `keywords.test.mjs:37-39` y `:107-109`: nombre y cuenta, 34 → 34 + N en la Asignación y en el Apéndice.
  - `validar-marcador.test.mjs:16` y `:238`: la prueba «el sitio real» usa la fecha de `verify.mjs` (`VALIDAR_HOY` o la del último commit) en lugar de `2026-10-20` fijo, porque toda respuesta escrita después de esa fecha la pondría en rojo (`validar-marcador.mjs:100`). Las pruebas de los fixtures siguen con la fecha fija.
- Validadores:
  - `qa-lcp.mjs`: primera pantalla de las rutas nuevas.
  - `qa-a11y.mjs`: `/marketing/` en la lista fija.
  - `check-links.mjs:35`: los `.mp4` dejan de contarse como enlace roto y se comprueba que existen en `dist/`; sin el cambio, «Descargar MP4» pone en rojo AC1 y `verify`.
  - `qa-responsive.mjs`: suma a su `PAGES` fijo las rutas nuevas y `/marketing/`. No está en `verify`; se corre con `npx astro preview --port 4610` en segundo plano y `node scripts/qa-responsive.mjs http://localhost:4610`, en los 10 tamaños que ya recorre, que incluyen 1440×900, 768×1024 y 390×844.
- Snapshot: `audit/seo-snapshot.json`, reescrito con `--actualizar` según AC6.
- Permiso: `scripts/cambios-permitidos.json:72`, editado para `/marketing/` y vuelto a `["schema"]` después del `--actualizar` (paso 7).
- Umbral: `tope` de `audit/imagenes-ia-2026-10.json`, de 10 a 25.

No cambian `datos.test.mjs:14,29` ni `n8n.test.mjs:137` (no hay claves nuevas) ni ningún máximo de `scripts/presupuestos.json`.

## Rules for the implementing agent

1. Acceptance criteria are the `protects / fails_when / no_claim` profile of each test: the observable it protects, the wrong result it rejects, and what green does not prove. Never "make the tests pass".
2. Real code and real tests land in the same change; a placeholder, a stub assertion or a test deferred to a follow-up is not done.
3. Any change to a test, validator, CI step, timeout, tolerance, threshold, snapshot or suppression pragma is reported on its own line in your summary with its justification, before any other result.
4. A reported command names the command and its observed result (exit status, counts, the failing line); a command you did not run is not reported, and stderr is never silenced in a command you cite.
5. Your report is a claim until the parent re-executes it: say what you verified, what you reused, and what you could not check.
6. Push a `main` publica en producción (no hay staging): cada push necesita el permiso del dueño (D47). Plan antes de código (`/gstack-autoplan`), pruebas en rojo primero.

## Rollback Plan

Todo es aditivo salvo la descripción de `/marketing/` y el menú y pie globales. El registro de gasto (`audit/imagenes-ia-2026-10.json`) y D52 van en un commit propio, aparte de los del sitio, porque registran dinero ya gastado (D46) y no se revierten. Revertir = `git revert` de los commits del sitio (sin ese), `npm run verify`, push con permiso del dueño, `gh run watch <id> --exit-status`, `bash scripts/check-prod.sh`. Las imágenes nuevas de `public/images/ejemplos/`, `public/images/hero/` y `public/images/og/` y los videos de `public/videos/ia-creativa/` se van con el revert. Si se revierte después del día P, las 4 URL ya pueden estar indexadas: el mismo commit suma en `nginx.conf` un 301 de cada una a `/marketing/`, como las URL retiradas que ya redirige (`nginx.conf:58-64`). Después del despliegue del revert, `curl -sI` de cada URL de la tanda debe responder 301 hacia `/marketing/`, y se anota en el resumen.

## Effort Estimate

| Parte | Equipo humano | Con Claude Code |
|---|---|---|
| #0 Medición de demanda (U1) | 1 día | 1 h, más el tiempo del dueño en el Planificador |
| #1 Precios y D52 | 1 h | 10 min |
| #2 y #2b Ejemplos y fotos (generación, compresión, hoja de contactos para el dueño y repeticiones) | 5 h | 1,5 h más el tiempo de cola de fal y Higgsfield |
| #3-#6 Cuatro páginas (contenido, schema, formulario, manifiesto, KEYWORDS) | 12 h | 1,5 h |
| #7 Hub | 2 h | 20 min |
| #8 Enlaces globales | 1 h | 10 min |
| #9 Verificación y capturas (7 pruebas modificadas, 4 validadores, 2 comparaciones de builds, los contratos de los 3 scripts nuevos y sus pruebas, capturas para el dueño) | 3 h | 2 h |

## Files Reference

| Archivo | Cambio |
|---|---|
| `src/data/precios.json` | 4 claves en `confirmados` |
| `src/lib/pages/marketing.ts` | 4 páginas nuevas; hub (`:24`) con 4 filas en su tabla de decisión, el riel, descripción nueva, respuesta citable y 2 frases sin superlativos; un relacionado a Anuncios con IA en Google Ads y Meta Ads |
| `src/components/Blocks.astro:335`, `src/lib/types.ts:31` | `texto?` opcional en el bloque `blank` |
| `scripts/componer-pantallas.mjs` | Nuevo (promovido del scratchpad de la portada v2): compone la pieza de ejemplo en la pantalla de cada foto de portada |
| `src/lib/site.ts` | `iaCreativa: NavLink[]` |
| `src/components/Navbar.astro:58,82` | Grupo «Producción con IA» |
| `src/components/Footer.astro:66` | Fila «Producción con IA» |
| `src/lib/pages/servicios.ts:10,53` | Grupo «Producción con IA» en `catalogGroups`; texto de la tarjeta de Facebook e Instagram Ads sin «detienen el scroll» |
| `src/lib/pages/ia-empresas.ts:196` | 4 relacionados |
| `src/lib/types.ts`, `src/components/Ejemplo.astro`, `src/styles/ejemplo-media.css` | Tipos `foto` y `video` de «Así se vería» y sus estilos (no en `molde-kredit.css`, que también va en la portada) |
| `src/lib/heroes.ts` (generado), `src/lib/img.ts:110` | 4 portadas en `HERO_SLUGS` y `OG_SLUGS`; sus textos alternativos en `HERO_ALTS` |
| `src/data/mediciones.json` | 4 mediciones de LCP escritas por `scripts/medir.mjs` |
| `src/data/formulario.json`, `docs/.../FORMULARIO.md` | 4 rutas en `paginas` con claves que ya existen (`pauta`, `definir`); sin claves nuevas |
| `scripts/paginas-comerciales.json` | 4 entradas |
| `scripts/cambios-permitidos.json` | Permiso de `/marketing/` |
| `docs/specs/rediseno-elementoweb/KEYWORDS.md` | 4 filas en Asignación y 4 en el Apéndice, con sus reservadas; filas de `/marketing/`; encabezado de 34 a 38 páginas y de 25 a 29 servicios; el panel GEO de 10 no cambia |
| `audit/seo-snapshot.json` | Reescrito con `--actualizar` según AC6 |
| `TODOS.md` | Entrada de medición, los 4 ids nuevos en «Volver a medir en producción las páginas del molde Kredit» (`TODOS.md:40-53`) y las diferidas |
| `docs/specs/rediseno-elementoweb/DECISIONES.md` | D52 (decisiones del 17-oct y de la puerta del dueño, cálculo de precios, términos de uso de las herramientas, fuentes del bloque de herramientas gratis, créditos de Higgsfield, regla de modelo, fase 2b, revisión del texto de Meta y aprobación de la hoja de contactos con su fecha) y 2 filas en la «Tabla de vigencia» (línea 47): «D46 (tope y modelo) · Ampliada para la tanda de IA creativa · D52» y «D36 · Excepción en la descripción de `/marketing/` · D52» |
| `public/llms.txt` | 4 líneas |
| `public/images/hero/`, `public/images/og/` | 4 portadas y sus recortes, con su fila en `public/images/hero/CREDITOS-IA.json` |
| `public/images/ejemplos/` y su `CREDITOS.json` | Imágenes y pósters de ejemplo (y la foto «antes», con su licencia si es de stock) |
| `public/videos/ia-creativa/` y su `CREDITOS-IA.json` | 4 videos de ejemplo |
| `audit/imagenes-ia-2026-10.json` | Filas de gasto con `tanda`; `tope` de 10 a 25; bloque `tandas` con el tope de US$ 15 (commit propio) |
| `scripts/marketing-ia.test.mjs` | Nuevo: las pruebas unitarias y sobre `dist/` del Testing Plan, cada una con su tarjeta en comentario |
| `scripts/*.test.mjs` | Las pruebas modificadas que lista el Testing Plan |
| `scripts/qa-lcp.mjs`, `scripts/qa-a11y.mjs`, `scripts/qa-responsive.mjs` | Primera pantalla de las páginas nuevas; `/marketing/` en la lista fija; las rutas nuevas en `PAGES` |
| `scripts/lib/dist-guard.mjs` | Nuevo: la guarda `conDist` que hoy vive en `portada.test.mjs:188-206`, compartida |
| `scripts/main-permitidas.json`, `scripts/selectores-permitidos.json` | Nuevos: rutas que pueden cambiar en AC14 y clases declaradas en AC11, cada una con su motivo |
| `scripts/lib/webp.mjs`, `scripts/portadas-fotos.mjs` | `webpConTope` se mueve a `scripts/lib/webp.mjs` (con su error `MKIA-PESO`); `portadas-fotos.mjs` la importa y la reexporta, y su CLI solo corre si es el script principal, porque hoy ejecuta `process.exit(2)` o `instalar()` al importarlo (`portadas-fotos.mjs:61-63`) |
| `src/data/ia-creativa.json` | Nuevo: la lista de páginas de la tanda (slug, etiqueta, clave de precio, `medicionId`, `serviceKey`), de la que salen `iaCreativa` y las pruebas de conjuntos |
| `scripts/gasto-ia.mjs` | Nuevo: transiciones del registro de gasto (`reservar`, `enviado`, `confirmar`, `fallido`, `asumido` y `sobrepaso`), con el tope de la tanda y el bloqueo `MKIA-BLOQUEO` |
| `scripts/check-links.mjs` | Los `.mp4` se comprueban contra `dist/` en vez de contarse como rutas rotas |
| `scripts/validar-marcador.test.mjs` | La prueba «el sitio real» toma la fecha como `verify.mjs` (`VALIDAR_HOY` o la del último commit), no la fija del 20-oct |
| `nginx.conf` | `mp4` en la regla de caché de 30 días (`nginx.conf:51`) |
| `scripts/selectores-hoja.mjs` | Nuevo: compara los selectores de la hoja compartida entre dos `dist/` y dice de qué archivo sale cada clase nueva |
| `scripts/comparar-main.mjs` | Nuevo: compara el `<main>` de cada HTML entre dos `dist/` (AC14) |
| `src/styles/ejemplo-media.css`, `src/pages/[...slug].astro` | Hoja nueva con los estilos de `foto` y `video`, en línea solo en las páginas que los usan |
| `src/lib/ejemplos.ts` | Nuevo: `assertTipoEjemplo()` (error `MKIA-EJEMPLO`) y `fichaVideo()`, que llama `Ejemplo.astro` y que prueba `node --test` |
| `.gstack/tmp/gasto-ia.lock` (temporal, ignorado por git) | Bloqueo de escritura del registro de gasto mientras `gasto-ia.mjs` lo reescribe |

## Out of Scope

- La sección Servicios de la portada con paneles apilados de GSAP (prototipo aprobado en sensación; tiene su propio plan).
- Las 6 páginas de marketing existentes, salvo enlaces de relacionados.
- Redacción y copy con IA y logo con IA como páginas propias (siguen como líneas de precio).
- Blog, campañas pagadas y versiones en inglés.
- Claves nuevas del formulario y subir el flujo de n8n a Hetzner, salvo que el dueño elija esa opción en la «Puerta del dueño».
- ItemList en el schema de los hubs, con la misma salvedad.
- Sumar los 4 paquetes a `/precios/` (el bloque `production` es compartido).
- Superlativos fuera del radio: «Creativos que detienen el scroll» en la página de Meta Ads (`marketing.ts:423`) y «El canal con mejor retorno» en la descripción congelada de Email marketing (`marketing.ts:738`) y en el blog; van a TODOS.md.

## Puerta del dueño (se decide antes de construir)

Cómo se responde: «procede» acepta todos los valores por defecto; cualquier otra respuesta nombra el id y su valor (por ejemplo «G1: 500, 450, 300, 150»). U1 se resuelve primero, porque puede cambiar slugs y palabras. Cada decisión queda en D52 como una línea `id = valor`, de `G1` a `T5`, y el primer paso del «Runbook» se detiene con `MKIA-PUERTA` si falta alguna.

| # | Decisión | Por defecto | Alternativa | Qué cambia con la alternativa |
|---|---|---|---|---|
| G1 | Precios (D52.3) | Decidido el 19-oct-2026: 780 (5 creativos), 500, 480 y 150 | (a) Otros montos confirmados. (b) No confirmar todavía: rama «propuesto» | (a) #1 escribe esos montos y todo lo demás sigue igual. (b) Las 4 claves van a `propuestos` en `precios.json`; `receipt.precio.estado: 'propuesto'` con `desde` como referencia; sin `service.catalogo` ni Offer; manifiesto con `"precio": "propuesto"`; el cuerpo dice «Referencia publicada: desde $X; se confirma en tu cotización» (D23); `llms.txt` sin cifra; las pruebas esperan `data-page-type="servicio-cotizado"` y ninguna `minPrice` |
| G2 | Claves del formulario | Claves existentes (`pauta`, `definir`), sin tocar Hetzner | 4 claves nuevas con 3 preguntas cada una (qué producto o servicio, cuántas piezas, si ya hay fotos o guion, para cuándo). La voz de diseño la recomienda. Con las claves existentes, el botón dice su `cta.boton`, pero el enlace a `/contacto/` lleva `?servicio=pauta` (Anuncios) o `?servicio=definir` (las otras 3, `[...slug].astro:34`), y el seguimiento (`data-service`) las cuenta dentro de esas claves; el `origen` del envío sí dice la página. Las claves nuevas suman además 4 opciones al `<select>` de ContactForm (`site.ts:67`), que se ve en todo el sitio. El formulario por servicio (ServiceForm) sigue fuera: es la fase 3 | Subir el flujo a Hetzner con `node scripts/subir-flujo-contacto.mjs` (permiso del dueño); `datos.test.mjs:14,29` (14 → 18 claves), `n8n.test.mjs:137` y `datos.test.mjs:76-82` (`botonPagina` de cada clave) cambian; `FORMULARIO.md` crece |
| G3 | ItemList en el hub | Sin ItemList | ItemList con los 10 servicios | Código nuevo en `src/lib/schema.ts` para los hubs, su prueba sobre `dist/` y el permiso `schema` de `/marketing/`, que ya existe |
| G4 | Foto «antes» de Fotografía de producto | Una foto de celular del dueño, de un producto sin marca | Foto de stock con licencia libre, descargada con permiso del dueño | Ninguno en el código; cambia la fila de `CREDITOS.json`. La de stock ya suele ser profesional y la transformación se nota menos |
| G5 | Plazos del recibo | 7, 7, 5 y 3 días hábiles | Los que diga el dueño | Solo el texto de `plazo` |
| G6 | Slug de la tercera página | `marketing/fotografia-de-producto-con-ia-panama` | `marketing/imagenes-con-ia-panama` con principal «imágenes con ia para empresas» | Cambian el slug en todo el plan, la fila de KEYWORDS y el título y H1 de esa página |
| G7 | Qué significa «pro» en el hub (D52.1) | Descripción nueva, 4 filas en la tabla de decisión, riel, respuesta citable y frases sin superlativos | Hub con una oferta integrada (pauta, creativos con IA y reporte como plan mensual) | Contenido nuevo del hub y, si lleva precio, una clave nueva en `precios.json`; va junto con U3 |
| G8 | Cifra de la frontera con la gestión de Meta Ads | Sin cifra: la gestión ya incluye los creativos del mes; el paquete es para quien pauta por su cuenta o necesita una tanda de lanzamiento | Cuántos creativos al mes incluye la gestión | Una cifra en la línea de frontera de Anuncios con IA y de Meta Ads (tocar el contenido de Meta Ads está fuera del alcance de esta épica: pide decisión) |
| U1 | Medir la demanda antes de construir (las dos voces CEO y Codex en ingeniería, que pide que bloquee la arquitectura; User Challenge) | Decidido el 19-oct-2026: medir 1 día antes de fijar slugs (Planificador y primera página de Google); Nicole habla con prospectos en paralelo | Antes de fijar los slugs: Planificador de Google Ads (Panamá) de las 4 palabras y sus alternativas por categoría, lectura manual de la primera página de Google y, si se puede, 5 a 10 conversaciones con prospectos (Nicole) | El arranque se mueve 1 a 3 días; los slugs y las palabras principales pueden cambiar; si una palabra trae solo herramientas, la principal pasa a la categoría del servicio y la IA queda como diferenciador |
| U2 | Número de páginas (las dos voces CEO, User Challenge) | Decidido el 19-oct-2026: según los datos de U1; el paquete sin búsquedas va como sección de otra página | 1 página «Producción con IA» con 4 paquetes, o 2 (Anuncios con IA y Contenido con IA) | Cambian slugs, KEYWORDS, los conteos de las pruebas (29 → 26 o 27), el bloque del hub y el catálogo; dividir después es barato y fusionar después cuesta redirecciones 301 |
| U3 | Oferta central (las dos voces CEO, User Challenge) | Decidido el 19-oct-2026 (se mantiene): paquetes de un solo pago; cada página dice «también como plan mensual junto a tu pauta; se cotiza», sin cifra | Plan mensual de creativos con IA atado a la pauta como oferta principal, con precio | E9 sale de TODOS y entra al plan: clave nueva en `precios.json`, recibo y textos de las 4 páginas y del hub |
| T1 | Menú y pie (gusto, voz CEO de Claude y Codex en ingeniería) | Se incluyen (#8, spec aprobada) | Sacarlos de esta épica y sumarlos cuando las páginas tengan impresiones a P + 56 | Sin #8: no cambia el HTML de todo el sitio durante las lecturas de la portada v2 (29-oct y 12-nov) y de CyberSource (27-oct y 10-nov); AC14 y la prueba de clases del menú y el pie se reducen |
| T2 | Rótulo en las portadas hechas con IA (gusto, voces de Claude en CEO y en diseño) | Sin rótulo, como las demás portadas (D45) | El `portada.pie` dice «Foto hecha con IA por Elemento Web» (en Avatar, «Foto hecha con IA: esta persona no existe») | Solo el texto del `portada.pie`, que ya existe en las 4 páginas (`PortadaServicio.astro:44`) |
| T4 | Nombre del botón «Más» del menú (gusto, voz de diseño de Claude) | «Más», como hoy (`Navbar.astro:22`) | «Marketing» | Cambia el menú de todo el sitio; un grupo nuevo escondido bajo «Más» no promete nada a quien busca videos con IA |
| T3 | Ejemplos con marcas propias (gusto, voz CEO de Claude) | «Negocio de ejemplo» ficticio (D52.4) | Ejemplos de Anuncios, Videos y Avatar para NousCRM o Elemento Web, pautados en una campaña pequeña | Cambia el texto de los ejemplos; la campaña es gasto aparte y da un caso propio con métricas |
| T5 | Conteos de las pruebas que ya existen (gusto, voz de ingeniería de Codex) | Literales, editados una sola vez cuando D52 fija N: es la convención del repo, y un conteo fijo avisa si entra o sale una página sin querer | Derivarlos del manifiesto | Los 5 conteos (`validar-marcador.test`, `kind.test`, `datos.test`, `keywords.test` ×2) ya no se editan con N, pero dejan de avisar cuando se agrega o se quita una página por error |

Respuesta del dueño, 19-oct-2026: «rec» en la puerta final. Después vinieron D2 (anuncios: paquete de 5 creativos por US$ 780) y D3 (fotos: US$ 480). U1, U2 y G1 cambian según su columna «Por defecto», marcada «Decidido». U3, G2-G8 y T1-T5 quedan en su valor por defecto. D52 copia cada línea `id = valor`.

## Requisitos aceptados en la revisión (obligatorios)

Salieron de las revisiones CEO, de diseño, de DX y de ingeniería del 17 y del 19-oct-2026. Pesan lo mismo que «Proposed Change»; sus pruebas ya cuentan en el Testing Plan y sus archivos en Files Reference.

<!-- autoplan-accepted:ceo -->
- Cada una de las 4 páginas nuevas lleva un bloque `receipt` con `precio: { estado: 'confirmado', desde, unidad }`, donde `desde` es el `monto` de su clave de `precios.json` escrito como en las demás páginas (p. ej. `'$450'`), y declara esa clave en `service.catalogo`. Así `pageTypeOf` (`src/lib/pages/kind.ts:13`) la clasifica `servicio-con-precio`, `PrecioPlazo` muestra precio y plazo en la portada (desde D49 el recibo no se pinta como tarjeta, `Blocks.astro:223`) y el schema emite su Offer. Verificación: prueba sobre `dist/` de que las 4 emiten `data-page-type="servicio-con-precio"` y de que el precio de la portada y las dos `priceSpecification.minPrice` del Service (`offers` y `hasOfferCatalog`) son el `monto` de su clave; `validar-marcador.mjs:164-166` acepta el monto.
- La frase sobre etiquetar contenido generado con IA en anuncios solo se publica con la fuente oficial de Meta enlazada en la página; sin fuente leída, se escribe «marcamos el contenido generado con IA cuando la plataforma lo pide» sin atribuir la regla a Meta. Verificación: revisión manual del texto de Anuncios con IA antes del commit, anotada en D52.
- El hub `/marketing/` deja de decir «El canal con mejor retorno» (`marketing.ts:90`, tarjeta de Email marketing) y «creativos que detienen el scroll» (`marketing.ts:88`, tarjeta de Facebook e Instagram Ads), y `/servicios/` deja de decir «creativos que detienen el scroll» (`servicios.ts:53`, la misma tarjeta en `catalogGroups`, que este plan ya edita). El texto nuevo describe el servicio sin superlativos; las páginas de email y Meta Ads conservan sus metadatos congelados. Verificación: prueba sobre `dist/marketing/index.html` y `dist/servicios/index.html` de que ninguna de las dos frases aparece en `<main>`.
- `marketing/google-ads-panama` y `marketing/facebook-instagram-ads-panama` suman a su bloque `related` un enlace a `marketing/anuncios-con-ia-panama`. Verificación: prueba sobre `dist/` de que las dos páginas enlazan esa URL desde `<main>`.
- TODOS.md gana la entrada «Medir las páginas de IA creativa», con la fecha absoluta del día de publicación P escrita al publicar y estas lecturas:
  - Día P y P + 28: las 2 preguntas GEO nuevas («¿Quién hace videos con IA para empresas en Panamá?» y «¿Cuánto cuesta un anuncio hecho con IA en Panamá?»), con el método de `docs/geo-panel-preguntas.md` (sesión nueva, mismos motores, capturas). Van aparte del panel de 10 de D13, que no cambia.
  - P + 28: la inspección de URL de Search Console de las 4 páginas (indexada sí o no) y las impresiones de sus 4 palabras principales. Es la meta de D13 de «indexadas en 4 semanas» (`DECISIONES.md:116`).
  - P + 56: las impresiones por URL de las 4 páginas. Como la línea base es 0, la meta de D13 de «el doble de impresiones» se lee como 1 impresión o más por página, y D52 lo anota.
  - P + 28 y P + 56: las consultas que llegaron desde cada página, contadas por el `origen` de los envíos del formulario (correo de n8n), y los clics de WhatsApp en GA4 si el evento existe; si no existe, se anota y se cuenta solo el formulario.
  - Regla de decisión: si a P + 28 ningún motor cita a Elemento Web y una página no está indexada o tiene 0 impresiones, se adelanta el artículo de blog diferido de esa página y se hace una acción de autoridad del kit (`docs/autoridad/KIT-AUTORIDAD.md`, por ejemplo el alta en Sortlist), porque el freno documentado es la autoridad del dominio, no el contenido.
  - Quién: Claude en el navegador del dueño, con su permiso, o el dueño. No bloquea el cierre de la implementación (AC15).
  - Además, los 4 ids de medición (`anuncios-ia-lcp`, `videos-ia-lcp`, `fotos-ia-lcp`, `avatar-ia-lcp`) se suman a la entrada «Volver a medir en producción las páginas del molde Kredit» (`TODOS.md:40-53`).
  - Verificación: la entrada existe con su fecha, la lectura del día P está anotada y la regla está escrita.
- TODOS.md gana estas entradas diferidas, con contexto y dependencias:
  - «Un artículo de blog por servicio de IA» (P3).
  - «Caso real con piezas de IA de un cliente, con permiso» (P3).
  - «Paquete recurrente de IA creativa atado a la pauta» (P2): es el segundo multiplicador del 10x y necesita que el dueño decida el precio.
  - «Superlativos sin fuente fuera del radio» (P3): `marketing.ts:423`, la descripción congelada de Email marketing (`marketing.ts:738`, cambiarla pide un permiso de D36) y el blog.
  - «Regenerar los ejemplos de IA creativa» (P3): cada 6 meses o cuando cambie el modelo, con su propio tope, porque los ejemplos envejecen con los modelos.
  - «Muestras personalizadas de anuncios con IA para prospectar» (P2): 3 anuncios hechos para un negocio concreto de Panamá, enviados por Nicole, con la página de Anuncios con IA como destino; reusa el patrón de Fábrica de Webs.
- Las 4 páginas llevan una línea de frontera con lo que ya se vende, en el texto y en una pregunta frecuente:
  - Anuncios con IA: la gestión de Meta Ads ya incluye los creativos del mes (`marketing.ts:423-430`); el paquete es para quien pauta por su cuenta o necesita una tanda de lanzamiento.
  - Videos con IA: Contenido para redes ya incluye Reels del mes (`marketing.ts:617-629`); el paquete es para videos de campaña o de producto fuera de ese plan.
  - Fotografía de producto con IA: el set de imágenes para una web nueva (US$ 100) es otro servicio.
  - Verificación: prueba sobre `dist/` de que la línea existe en las 4 páginas.
- Cada página nueva lleva el bloque «¿Cuándo te basta la herramienta gratis?»: cuándo alcanzan las funciones de IA de Meta, Google o Canva y cuándo conviene el servicio (criterio, marca, revisión humana, contexto de Panamá, enlace con la pauta). Solo nombra funciones de esas plataformas leídas en su documentación oficial, con la fuente anotada en D52. Verificación: prueba sobre `dist/` de que el bloque existe en las 4 páginas.
- Antes del commit, el dueño aprueba una hoja de contactos con cada ejemplo, póster y portada generados. Lo que no pasa se regenera dentro del tope de la tanda o se quita. Verificación: la aprobación queda anotada en D52 con la fecha.
- La fila de gasto de cada generación lleva el costo real cobrado, leído del historial de fal (`search_request_history` o el resultado del trabajo) por su `request_id`, no la estimación de `estimate_cost`, que es solo orientativa; el avatar lleva los créditos que descontó Higgsfield. Verificación: la prueba de créditos y gasto de AC8 compara la suma con `tandas["marketing-ia"].gastado`, y cada fila tiene `request_id`.
- El `<video>` del tipo `video` lleva dentro un texto de respaldo con enlace al archivo («Tu navegador no reproduce este video: <a href="…mp4">descárgalo</a>»), para el navegador que no lo reproduce. Verificación: prueba sobre `dist/` de que cada `<video>` de las 4 páginas tiene ese enlace con el mismo `src`.
<!-- /autoplan-accepted:ceo -->

<!-- autoplan-accepted:design -->
- Mínimo de ejemplos aprobados por página: Anuncios, 2 anuncios; Videos, 1 video; Fotografía de producto, la «antes» y 2 «después»; Avatar, 1 video. Una página que no llega a su mínimo (porque la hoja de contactos rechazó piezas, Higgsfield se detuvo o se alcanzó el tope de US$ 15) no sale en esta tanda. Se quita del manifiesto, del menú, del pie, de la tabla del hub, del catálogo, de los `related`, de `llms.txt` y de KEYWORDS, y las pruebas ajustan sus conteos; las otras páginas salen. Verificación: D52 anota qué páginas salieron, y la prueba sobre `dist/` recorre solo las que están en el manifiesto.
- El bloque «¿Cuándo te basta la herramienta gratis?» es un `tabla` con las columnas «Si…», «Te basta Meta, Google o Canva» y «Conviene el paquete», de 3 a 4 filas, justo antes de `compare`. La línea de frontera es el primer ítem de «No incluye», y una pregunta frecuente por página la repite («¿En qué se diferencia de la gestión de Meta Ads?» en Anuncios, «¿En qué se diferencia del plan de Contenido para redes?» en Videos, «¿En qué se diferencia del set de imágenes para mi web?» en Fotografía de producto). Verificación: la prueba sobre `dist/` busca el h2 del bloque y esas preguntas exactas.
- La hoja de contactos que aprueba el dueño se juzga con criterios fijos, anotados en D52:
  - ningún texto deformado dentro de la imagen;
  - manos y caras sin artefactos;
  - en Fotografía de producto, el producto idéntico a la «antes» (forma, color, etiqueta);
  - en Avatar, labios sincronizados con la voz;
  - subtítulos fieles al guion y a tiempo;
  - sin marcas ni logos;
  - pesos dentro del tope.

  Verificación: D52 lista cada pieza con «aprobada» o «rehecha» y su motivo.
- Comportamiento por ancho, verificado a 1440×900, 768×1024 y 390×844 con `node scripts/qa-responsive.mjs` (sin scroll horizontal):
  - portada como el molde v2 actual;
  - `ejemplos` en 1 columna bajo 768 px;
  - videos centrados con `max-height` del 75 % del alto;
  - antes y después apilados, con la etiqueta encima de cada foto;
  - la tabla de herramientas y la comparación, apiladas por fila como `compare` en compacto.

  Verificación: `qa-responsive.mjs` en verde con las 4 páginas y una captura por ancho en el resumen.
<!-- /autoplan-accepted:design -->

<!-- autoplan-accepted:dx -->
- Máquina de estados del gasto de la tanda, para que una sesión cortada no cobre dos veces:
  - Justo después de `submit_jobs`, se escribe la fila con `"estado": "pendiente"` y su `request_id`. Cuando llega el resultado, pasa a `"confirmado"` con el costo real.
  - Antes de reenviar una pieza, se concilia con `search_request_history`; si el trabajo anterior cobró, no se reenvía sin contarlo.
  - Cada pieza tiene como máximo 2 regeneraciones, contadas dentro de la tanda.
  - En Higgsfield se lee `balance` antes y después de cada trabajo, y la diferencia se anota aunque el trabajo falle.
  - Si el tope no alcanza, el aviso al dueño usa una plantilla fija: «MKIA-TOPE: tanda marketing-ia: gastado $X + estimado $Y (modelo M, pieza P) = $Z > $15. Para seguir: aprueba un tope nuevo (`tandas.marketing-ia.tope` y D52) o elige qué pieza se quita (mínimo de ejemplos)».
  - Las filas anteriores a la tanda, sin `estado`, cuentan como confirmadas.
  - Verificación: la prueba de créditos y gasto falla con una fila `pendiente` sin conciliar, y se corre después de cada fila.
- Contratos de los scripts nuevos. Cada uno tiene `--help`, una línea de uso, exit 0 si pasa, 1 si falla y 2 si se usa mal (falta un argumento o un directorio), con su código de error al inicio de cada mensaje:
  - `node scripts/comparar-main.mjs <base/dist> <dist> --permitidas scripts/main-permitidas.json` (`MKIA-MAIN`): por cada ruta no permitida que difiere imprime la ruta y el primer fragmento distinto, unos 200 caracteres por lado.
  - `node scripts/selectores-hoja.mjs <base/dist> <dist> [--permitidas scripts/selectores-permitidos.json]` (`MKIA-SELECTOR`): desescapa el selector y busca su clase con `git grep -lwF -- <clase>` (AC11). Una clase declarada en el JSON, con su motivo, no hace fallar.
  - `node scripts/componer-pantallas.mjs <render.png> <salida.png> <pieza> [<pieza>…] [--ajuste cover|contain] [--umbral N]` (`MKIA-PANTALLAS`): se generaliza el script del scratchpad de la portada v2, que hoy exige 2 pantallas. El número de pantallas es el número de piezas, ordenadas por área. El error dice cuántas esperaba y cuántas encontró, el umbral (R−G>90, B−G>90) y el arreglo («regenera con la pantalla #FF00FF plana o pasa `--umbral`»).
  - Verificación: una prueba de unidad por script cubre el uso incorrecto (exit 2) y un caso que falla (exit 1).
- El video con voz tiene audio de verdad. Una prueba lee con Node las cajas `hdlr` de cada `.mp4` y comprueba que uno con `voz: true` tiene una pista `soun` y que uno sin `voz` no la tiene. No usa `ffprobe`, porque la prueba corre también en CI (`npm test` dentro de `verify`, en `ubuntu-latest`, `deploy.yml:48`) y no está verificado que ese runner traiga ffmpeg. En local, `ffprobe -show_streams` sirve para revisarlo a mano. Verificación: la prueba recorre los videos de las páginas que salen.
- Las pruebas nuevas no cuentan 4 a mano. Recorren las páginas de IA creativa que están en el manifiesto, así que una página que no sale (mínimo de ejemplos) baja los conteos sin editar la prueba.
  - La guarda compartida ya falla con `VERIFY=1` o en CI cuando `dist/` falta o está viejo (`portada.test.mjs:185-206`), y `SOLO_UNIDAD=1` ya salta las de `dist/`.
  - `marketing-ia.test.mjs` suma su propia prueba «dist/ existe y está al día», cuyo mensaje empieza con `MKIA-DIST`, para que `npm run verify` no dé verde sin haber mirado `dist/`.
  - Verificación: correr la prueba con `VERIFY=1` y sin `dist/` da exit 1 con `MKIA-DIST`.
- `Ejemplo.astro` trata la unión de tipos de forma exhaustiva: un `tipo` desconocido rompe el build con `MKIA-EJEMPLO: tipo desconocido <tipo>`, y no deja un hueco en silencio. Verificación: `npm run build` en verde, más una prueba de unidad del mensaje.
- Nada de lo que se escribe en el repo lleva datos de cuentas, URL firmadas de fal, tokens ni el prompt crudo. El registro de gasto guarda `fecha`, `modelo`, `costo`, `request_id`, `uso`, `tanda` y `estado`; los créditos guardan el modelo y una descripción. Verificación: la prueba de créditos rechaza una fila con campos fuera de esa lista.
- Las imágenes de ejemplo pasan por `webpConTope`, exportada de `scripts/portadas-fotos.mjs`, con tope de 80 KB; si no alcanza, sale `MKIA-PESO` con el peso logrado. Verificación: la prueba de `dist/` del tope de 80 KB.
<!-- /autoplan-accepted:dx -->

<!-- autoplan-accepted:eng -->
- Formulario: las páginas nuevas cierran con `{ type: 'form', h2, intro }` (ContactForm), como sus hermanas. `ServiceForm` sigue sin usarse hasta la fase 3, cuando el flujo v2 de n8n esté subido y probado. Hoy el correo es opcional en ServiceForm y el flujo v1 descarta los envíos sin correo respondiendo `{"ok": true}` (D30), así que una consulta así se perdería sin aviso. Verificación: prueba sobre `dist/` de que ninguna página nueva lleva el marcado de ServiceForm, que su `<main>` tiene `data-service` igual a su `serviceKey`, y que `cta.boton` es el texto del botón principal.
- `check-links.mjs` trata los enlaces a `.mp4`: comprueba que el archivo existe en `dist/` y no lo cuenta como ruta rota. Un `.mp4` que falta sí falla. Verificación: `node scripts/check-links.mjs` con 0 enlaces rotos y un caso de unidad con un `.mp4` ausente que falla.
- La prueba «el sitio real» de `validar-marcador.test.mjs` usa la misma fecha que `verify.mjs`: `VALIDAR_HOY` o la fecha del último commit. Las respuestas con `fecha` posterior a esa fecha siguen fallando (`validar-marcador.mjs:100`). Verificación: `npm test` en verde con una `fecha` del día en que se escribe el texto.
- `webpConTope` vive en `scripts/lib/webp.mjs`. `portadas-fotos.mjs` la importa y la reexporta, y su CLI solo corre cuando es el script principal (`process.argv[1] === fileURLToPath(import.meta.url)`, como `validar-marcador.mjs`). Si no llega al tope, sale `MKIA-PESO` con el peso logrado. Verificación: prueba de unidad que importa el módulo sin efectos y una que comprueba el mensaje `MKIA-PESO`.
- Gasto, con un registro que se escribe antes de cobrar:
  - `node scripts/gasto-ia.mjs reservar <pieza> <modelo> <estimado>` escribe una fila `reservado` antes de `submit_jobs`. El estimado cuenta para el tope, y el chequeo suma el lote entero, no una pieza.
  - `enviado <id> <request_id>` la pasa a `pendiente`. `confirmar <id> <costo>` la pasa a `confirmado`. `fallido <id>` deja costo 0 cuando el trabajo tiene `request_id` y no se cobró. Una fila `reservado` cuyo envío devolvió un error (el trabajo no existe) se borra. Si la sesión se cortó y no se sabe si el trabajo existe, la fila espera la conciliación y no se borra.
  - El script valida cada transición. Sale con `MKIA-TOPE` (plantilla de DX) si el tope no alcanza, y recalcula `gastado` y `tandas["marketing-ia"].gastado` en centavos.
  - En fal, el costo real es la tarifa del endpoint (`get_pricing` del día) por las unidades facturadas que trae el resultado (imágenes, segundos, caracteres). `search_request_history` no trae costo y puede no tener los trabajos recientes, así que no sirve para el costo.
  - Para conciliar una fila `pendiente` tras una sesión cortada se usa `check_job` o `get_job_result` con su `request_id`. Una fila `reservado` sin `request_id` se concilia por endpoint y hora en `search_request_history`. Si no aparece, se espera hasta 24 h sin reenviar, y después pasa a `asumido`.
  - En Higgsfield, el costo sale de `transactions` del trabajo; la diferencia de `balance` queda solo como control, porque el dueño puede correr otros trabajos a la vez.
  - Este bloque manda sobre el gasto. Donde los requisitos de CEO y DX dicen que el costo o la conciliación salen de `search_request_history`, o que la fila se escribe después de `submit_jobs`, vale lo de aquí: la fila se reserva antes; el costo es la tarifa por las unidades; se concilia con `check_job`.
  - Tabla única de estados: `reservado` → `pendiente` → `confirmado` | `fallido`. Dos estados terminales más:
    - `asumido`: una fila `reservado` sin `request_id` que no aparece en `search_request_history` después de 24 h. Su estimado cuenta como gastado, y D52 lleva la nota del dueño. Lleva como `request_id` el texto `sin-id:<id local>`, para que se cumpla la regla de CEO (toda fila con `request_id`) y se vea que no hubo trabajo identificado.
    - `sobrepaso`: el costo real que, al confirmar, deja la tanda por encima de US$ 15. Bloquea todo envío nuevo hasta que el dueño apruebe en D52.
  - Para que el costo real no pase el tope, la reserva usa el máximo facturable del trabajo (por ejemplo, la duración máxima pedida), no el promedio.
  - `gasto-ia.mjs` toma un bloqueo exclusivo (`.gstack/tmp/gasto-ia.lock`, `openSync(…, "wx")`) mientras reescribe el registro, porque otras sesiones también escriben en él. Sale con `MKIA-BLOQUEO` si el bloqueo existe.
  - Verificación: una prueba de unidad de `gasto-ia.mjs` con transiciones válidas e inválidas, el tope, `asumido`, `sobrepaso` y el bloqueo. La prueba de AC8 falla con filas `reservado` o `pendiente` sin conciliar, suma en centavos (hoy `gastado` da `7.77000000000001`), exige `gastado` ≤ `tope` del archivo y rechaza valores con `https?://` o `token=`.
- Fuente única de la tanda: `src/data/ia-creativa.json` lista slug, etiqueta, clave de precio, `medicionId` y `serviceKey` de cada página que sale; `site.ts` arma `iaCreativa` desde ahí. Verificación: pruebas de igualdad de conjuntos entre ese archivo y el manifiesto, `marketingPages`, `formulario.paginas`, las 2 tablas de KEYWORDS, `llms.txt` (incluido su `$N`, que debe ser el `monto`), `HERO_SLUGS`, `mediciones.json` y los enlaces del hub, del catálogo y de `related`. Una página que falte en cualquiera de ellos hace fallar, no se salta.
- Las pruebas de datos importan `marketingPages` y comprueban, por página: `serviceKey === formulario.paginas[slug]`, `cta.boton` presente, `receipt.precio.desde` igual al `monto`, el orden de bloques fijado, y `voz` y `guion` en cada video. Las pruebas por página leen `dist/` dentro de cada `test(...)`, no al cargar el archivo, para que en el corte vertical una página sin compilar no rompa las demás. La entrada del manifiesto se agrega junto con su página.
- Portadas compuestas:
  - El prompt pide la pantalla de frente a la cámara, porque `componer-pantallas.mjs` pega la pieza sobre un rectángulo sin perspectiva.
  - El despill (quitar el tono magenta) se limita a un margen alrededor de cada pantalla, para no apagar ropa ni objetos rosados del resto de la foto.
  - Como `PortadaServicio.astro:18` rompe el build si falta la `-1200.webp`, el mínimo de ejemplos de cada página suma «portada instalada»; sin portada, la página no sale.
  - Verificación: la hoja de contactos muestra cada portada a tamaño real, y la prueba de igualdad incluye `HERO_SLUGS`.
- Créditos (AC8):
  - «Archivo nuevo» es `public/images/ejemplos/ia-*`, `public/images/hero/marketing--*`, `public/images/og/marketing--*` y todo `public/videos/ia-creativa/`. Hay 4 archivos viejos sin fila en `CREDITOS.json` (`movil-sanblasfull-390.webp`, `-780.webp`, `movil-sanblasfull.jpg`, `movil-tramitapa-780.webp`) que quedan fuera de esta prueba.
  - Cada carpeta conserva sus claves (`origen` en ejemplos, `modelo` en hero), y la foto de stock lleva licencia, autor y URL, como las filas de stock que ya existen.
  - La lista cerrada de campos de DX aplica al registro de gasto.
  - Verificación: la prueba de créditos con esos patrones.
- La ficha de cada video se comprueba contra el archivo. Una prueba sobre `dist/` compara `bytes` con `statSync` y `duracion` con la caja `mvhd` del `.mp4` (±0,5 s), y que el códec de video sea `avc1` (caja `stsd`). Es la misma lectura de cajas de la prueba de audio, y corre en CI sin ffmpeg.
- Cada video con `voz` lleva `guion`, que es su transcripción en `<details>`, no solo el avatar. Los subtítulos quemados van en Roboto (`force_style`), y la hoja de contactos suma el criterio «subtítulos en Roboto y legibles».
- `selectores-hoja.mjs` busca con `git grep --untracked -lwF`, porque Tailwind lee también archivos que aún no tienen `git add`.
- `nginx.conf:51` suma `mp4` a la regla de 30 días. Al regenerar un video, el archivo cambia de nombre (`-v2`) para no servir la copia vieja de caché.
- Los `id` de `aria-describedby` de cada video salen del nombre del archivo y son únicos en la página. Verificación: `qa-a11y` sin `duplicate-id-aria`.
- La foto «antes» del dueño (G4) se limpia de metadatos (EXIF, GPS) con `sharp` antes de subirla a fal y antes de publicarla. Verificación: prueba de que ninguna imagen nueva publicada tiene EXIF.
- Cada `medicionId` de `ia-creativa.json` tiene su fila en `src/data/mediciones.json` (prueba de igualdad de arriba).
- AC11 y AC14 corren en local y una vez, no en `verify` ni en CI. El resumen lo dice y el padre los vuelve a correr antes del push.
- G1 se presenta en la puerta con una tabla por paquete: rango de la fuente, punto medio, monto propuesto, diferencia y motivo, que D52 copia. Sin esa tabla no se escribe ninguna clave en `confirmados`.
- Puerta del 19-oct-2026: precios y prueba.
  - Los montos de `precios.json` son 780 (`anuncios-ia`, por paquete de 5 creativos), 500 (`videos-ia`), 480 (`fotos-producto-ia`) y 150 (`avatar-ia`).
  - El alcance de Anuncios con IA es de 5 creativos (4 imágenes y 1 video de hasta 15 s), en `precios.json`, en la descripción, en el riel, en la respuesta citable, en la tabla del hub y en `llms.txt`.
  - Verificación: la prueba de montos los compara exactos, y la prueba sobre `dist/` busca «5 creativos» y ninguna mención a «10 creativos» en Anuncios.
- Puerta del 19-oct-2026, U1. El paso 0b del «Runbook» mide la demanda antes de fijar slugs, y D52 anota por palabra el rango del Planificador, la lectura de Google, la fecha y la decisión. La decisión sigue esta tabla:
  - Página propia: el Planificador da un rango mayor que 0 para la principal o para una alternativa de su categoría, y en la primera página de Google hay al menos 3 resultados de agencias o servicios.
  - Si la primera página de la palabra con «IA» trae solo herramientas, la principal pasa a la palabra de la categoría (por ejemplo «fotografía de producto»), siempre que cumpla la regla anterior, y la IA queda como diferenciador en el texto.
  - Una alternativa reemplaza a la principal solo si su rango es mayor y cumple la misma regla de intención. Con el mismo rango, se queda la del plan.
  - Si la cuenta no muestra datos del Planificador, decide la lectura de Google sola, y D52 lo anota.
  - Sin búsquedas o con primera página solo de herramientas: el paquete va como sección (U2).
  - Verificación: el paso 1 no arranca sin esas líneas en D52 (`MKIA-DEMANDA`).
- Puerta del 19-oct-2026, U2: un paquete sin búsquedas va como sección de otra página, como decidió el dueño. Esa sección no se construye con este plan, porque sus contratos (destino con ancla, schema de la página anfitriona, pruebas de precio y medición) dependen de qué páginas salgan.
  - Si el paso 0b deja algún paquete sin búsquedas, se para con `MKIA-DEMANDA: <paquete> sin búsquedas → sección`.
  - Se arma entonces un plan corto de la sección: página anfitriona (la de más búsquedas medidas o el hub), `id` del bloque y enlaces con ancla, `service.catalogo` y las pruebas de `offers` contra `hasOfferCatalog`, `llms.txt` y KEYWORDS. Pasa por una revisión de ingeniería antes de construirse.
  - Las páginas con búsquedas siguen sin esperar. `ia-creativa.json` lista solo páginas, y `medicionId` es de páginas.
  - Verificación: D52 anota la decisión por palabra. Ninguna prueba de esta tanda cubre secciones.
- Segunda revisión de ingeniería (19-oct-2026):
  - Los estilos de `foto` y `video` van en `src/styles/ejemplo-media.css`, en línea solo en las páginas que los usan. Verificación: `presupuestos.mjs` con la portada en sus 26.731 B de CSS gzip, sin cambio.
  - Videos: `-pix_fmt yuv420p -profile:v high` en los tres comandos. Clips con voz con audio `-b:a 64k -ac 1` y sin recorte (`-t`). Guion de 2,3 palabras por segundo como máximo. Verificación: la prueba de cajas lee `avcC` y exige `profile_idc` en {66, 77, 100}; la duración de la pista `soun` (`mdhd`) es la del video ±0,5 s; y `guion` cumple el tope de palabras.
  - `src/lib/ejemplos.ts` exporta `assertTipoEjemplo()` (`MKIA-EJEMPLO`) y `fichaVideo({ duracion, voz, bytes })`, que llama `Ejemplo.astro`. La prueba de unidad importa el módulo, como `tanda-a.test.mjs` importa `src/lib/*.ts`.
  - `componer-pantallas.mjs` se copia hoy a `~/.gstack/projects/josimarguilbaud-elementoweb/` como respaldo, porque el scratchpad se puede borrar. Al promoverlo, su relleno de regiones revisa el borde de cada fila (`x`), para que dos regiones a ambos lados de un borde no se unan. Verificación: una prueba de unidad con dos regiones junto al borde.
  - La foto «antes» pasa por `sharp(...).rotate()` antes de quitar los metadatos, para que no se publique ni se envíe girada. Verificación: la prueba de «sin EXIF» también compara las medidas orientadas.
  - La línea de frontera de Fotografía de producto va sin cifra en la página. El «US$ 100» del requisito CEO describe el servicio, no el texto, y una cifra que no es el `monto` rompería AC7.
  - `HERO_ALTS` entra a la igualdad de conjuntos, y el texto de cada portada nueva dice que la foto es de IA.
  - `dist-guard.mjs` recibe la raíz como parámetro, para probar `MKIA-DIST` sin borrar el `dist/` real.
  - `selectores-hoja.mjs` compara conjuntos de nombres de clase desescapados, no selectores crudos (Tailwind 4 emite `&:hover`, `:where()`, `@media (hover:hover)` y `@property`).
  - En `anuncio-social`, «Ejemplo de anuncio» ya va en el marco del componente (`Ejemplo.astro:36`), fuera de la imagen generada, y el bloque lleva su `nota`. La imagen de fal no lleva la palabra. Verificación: prueba sobre `dist/` de que cada anuncio de las páginas nuevas muestra ese rótulo.
<!-- /autoplan-accepted:eng -->
## Review record

**Estado: APROBADO** por el dueño el 19-oct-2026, en la puerta final, revisión 2: respondió «procede», que el plan define como `rec`, y eligió `p1a`. Antes, en la revisión 1, respondió «rec», más D2 (anuncios: 5 creativos por US$ 780) y D3 (fotos: US$ 480). Ingeniería corrió de nuevo, al final, sobre el plan corregido. Lo siguiente es implementar con pruebas primero, desde el paso 0 del «Runbook». El push, solo con permiso.

_Revisión /autoplan del 17-oct-2026 (run `main-20261017-093040`). Alcance detectado: UI sí (archivos de `src/`), DX sí
(por términos «npm», «command», «MCP»; no es producto para desarrolladores). Codex: listo. Design doc encontrado: el de
mrcomputerpanama (otro proyecto), no aplica; la spec hace de design doc. Metodología CEO leída completa (2.498 líneas,
5 tramos hasta EOF)._

### Fase 1, CEO: auditoría previa

- Rama base `main`; `main` local va 5 commits por delante de `origin/main` (gitignore, mockups de fal, spec), sin código.
- Stash `orisa-home-migration` del 28-sep (apartado el 12-oct a pedido del dueño): ya hubo una portada inspirada en
  Orisa. No toca este plan; sí al plan aparte de los paneles apilados.
- Marcas en archivos que toca el plan: `marketing.ts:4` (precios propuestos del hub por confirmar), `site.ts:388` (logo
  con IA propuesto), `site.ts:413` (autorización de clientes del portafolio).
- Más tocados en 30 días: `site.ts` (20), `cambios-permitidos.json` (14), `servicios.ts` (13), `marketing.ts` (10).
- Aprendizajes aplicados: `astro-css-por-ruta-no-por-componente` (el CSS de un bloque de video lo bajarían las ~250
  páginas de `[...slug].astro` si no va en línea solo donde se usa); `cambios-permitidos-line-edit` (editar por línea de
  ruta); `tabla-encabezados-sin-html`; `gstack-gate-id-format` (ids con número; sin jq, agregador con node).
- Referencias buenas: `marketing/google-ads-panama` (v2, `compare` con fuentes, `includes`) y
  `inteligencia-artificial-para-empresas-panama` (servicio con precio y límites dichos en claro: «si no está en tus
  documentos, lo dice»). A evitar: superlativos sin fuente del hub, «El canal con mejor retorno» (`marketing.ts:90`) y
  «creativos que detienen el scroll» (`marketing.ts:88`).

### Panorama (búsqueda web del 17-oct; Aside no disponible en Windows)

- [Capa 1] Lo probado: agencias que venden producción creativa por paquete o retainer, atada a la gestión de pauta.
- [Capa 2] En Panamá casi nadie tiene páginas de «anuncios con IA» o «videos con IA»: Símbolo y AMD hablan de IA en
  general ([La Prensa](https://www.prensa.com/contenido-de-marcas/agentes-de-ia-la-apuesta-de-simbolo-agencia-de-marketing-digital-para-potenciar-marcas-en-panama/),
  [GoodFirms](https://www.goodfirms.co/company/agencia-de-marketing-digital-panama)); un estudio de UMECIT describe un
  uso limitado de la IA en publicidad local ([UMECIT](https://revistas.umecit.edu.pa/index.php/sc/article/view/1565/2428)).
  Fuera de Panamá, las herramientas dejaron de diferenciar: «the real competitive advantage lies not in access to
  technology» ([Branded](https://www.brandedagency.com/blog/ai-creative-services)).
- [Capa 3] Lo que vende no es la pieza generada (es commodity) sino el criterio, la revisión humana y que llega atada a
  lo que el negocio ya compra (pauta, WhatsApp, web). Con poca competencia local, el premio grande es GEO: ser la agencia
  que un asistente de IA cita cuando le preguntan quién hace videos con IA en Panamá.

### 0A. Premisas

Problema real: la IA creativa ya se vende, pero sin página propia (set de imágenes como extra, `site.ts:384`), así que no
entra por búsqueda ni la citan los asistentes. Resultado buscado: puertas de entrada nuevas y paquetes de más valor
atados a la pauta. Costo de no hacer nada: cero visibilidad en búsquedas de IA creativa mientras la competencia local se
posiciona como «agencia con IA». El plan ataca el problema directo (páginas y oferta), pero el volumen de búsqueda en
Panamá no está medido: el riesgo es publicar 4 páginas que reciban poco tráfico.

| Premisa | Afirmación | Recibo | Veredicto |
|---|---|---|---|
| P1 | `/marketing/` es dueño de «marketing digital panamá» | `KEYWORDS.md:63` | verificada |
| P2 | El hub tiene 6 servicios | `src/lib/pages/marketing.ts:87-92` | verificada |
| P3 | La lista `marketing` alimenta menú, pie y la portada | `Navbar.astro:58,82`, `Footer.astro:66`, `portada.test.mjs:447` | verificada |
| P4 | Imágenes con IA: set desde US$ 100, confirmado | `src/data/precios.json:19` | verificada |
| P5 | El precio y el Offer salen de `precios.json` | `src/lib/pages/kind.ts:13`: el tipo `servicio-con-precio` sale de un bloque `receipt` con `precio.estado: 'confirmado'` | **hallazgo**: cada página necesita su bloque `receipt` (invisible desde D49) |
| P6 | Ya existen las herramientas (fal, Higgsfield) | `site.ts:386` («Higgsfield»); cuenta de fal conectada en esta sesión | verificada |
| P7 | 0 impresiones de búsquedas con «IA» | `audit/gsc-baseline-2026-10.md` (búsqueda sin coincidencias) | verificada [measured] |
| P8 | Precios = punto medio del mercado | sin tarifas publicadas en Panamá [measured: búsqueda web 17-oct]; confirmados por el dueño («procede»). La revisión de la spec (iteración 2) calculó los rangos de las fuentes citadas: anuncios US$ 1.250-1.875 por 10 creativos, fotos 250-600 € por 10, videos US$ 300-700 (avatar IA) o 600-2.000 (UGC humano) | **hallazgo**: 3 de 4 montos bajo el punto medio de sus fuentes; User Challenge en la puerta final |
| P9 | Las páginas nuevas entran en fase 2b | `scripts/paginas-comerciales.json` (fases 2a:4, 2b:3, 4:7, 5:20; actual 2b) | verificada; quedan más estrictas que sus hermanas de fase 4 y 5 |
| P10 | Metadatos congelados por D36 | `scripts/seo-congelado.mjs:1-3`, `scripts/cambios-permitidos.json` | verificada |
| P11 | «Meta exige etiquetar el contenido generado con IA» | sin fuente leída | **unverified** |
| P12 | No clonar voz ni cara sin permiso escrito | consentimiento de datos personales (Ley 81 de 2019) ya citado en `marketing.ts` (WhatsApp) | verificada como política propia |
| P13 | Hay demanda de búsqueda en Panamá para las 4 palabras principales | sin Planificador; 0 de 257 consultas de oct-2026 (`audit/gsc-2026-10-consultas.tsv`) | **unverified**; las dos voces CEO lo marcan crítico (U1 en la puerta) |

`unverified=2` (P11, P13).

### 0B. Código que ya existe

| Subproblema | Código existente | Uso |
|---|---|---|
| Datos de página | `marketingPages` (`marketing.ts:21`), `PageData` (`src/lib/types.ts`), ruta `[...slug].astro` | reusar |
| Bloques | `Blocks.astro` (answer, includes, compare, faq, steps) y `Ejemplo.astro` (15 tipos: agenda, anuncio-social, asistente, checkout, producto, post, web…) | reusar; **no hay tipo video** |
| Precio y tipo | `precios.json`, helpers de `site.ts`, bloque `receipt` (`kind.ts:13`) | reusar |
| Foto de portada | `heroes.ts`, `img.ts`, `scripts/optimize-images.mjs`, `public/images/hero/CREDITOS-IA.json` | reusar |
| Schema | `src/lib/schema.ts` (Service, Offer, FAQPage, ImageObject, ItemList) | reusar |
| Formulario | `src/data/formulario.json`, `scripts/gen-formulario-md.mjs --check` | reusar |
| Marcador y manifiesto | `scripts/validar-marcador.mjs`, `scripts/paginas-comerciales.json` | reusar |
| Palabras clave | `KEYWORDS.md` + `scripts/keywords.test.mjs` | reusar |
| Congelado | `scripts/seo-congelado.mjs` + `cambios-permitidos.json` | reusar |
| Comparar selectores | `comparar-dist.mjs` del scratchpad de la portada v2 | **promover** a `scripts/selectores-hoja.mjs` (DRY) |

REALITY: premise-table finding unverified=2 (P11 sin fuente, P13 demanda sin medir; P5 corregida; P8 hallazgo de precios) docs/specs/rediseno-elementoweb/SPEC-MARKETING-IA.md:58
REALITY: already-done pass git log origin/main --since=2026-10-17 sin commits en los archivos nombrados src/lib/pages/marketing.ts:21
REALITY: surface-check pass npm run verify, gen-formulario-md.mjs, validar-marcador.mjs, check-links.mjs, qa-seo.mjs y dist/sitemap-0.xml existen; selectores-hoja.mjs es nuevo scripts/verify.mjs:56
REALITY: binding-decisions pass D1-D5 del 17-oct respetadas; D46 ampliado por el dueño (tope US$ 15) docs/specs/rediseno-elementoweb/DECISIONES.md:244
REALITY: numbers pass precios [measured: confirmados por el dueño], 0 GSC [measured], 34 páginas [measured], esfuerzos [estimated] scripts/paginas-comerciales.json:1
REALITY: deferred-asks finding «lo que se me esté escapando»: redacción y logo con IA quedan como líneas de precio (fuera de alcance aceptado por el dueño) src/lib/site.ts:374
REALITY: pr-count pass pr_count=1 por defecto (no hay .gstack/ship-policy.json); la épica sale en una sola ola por push a main con permiso del dueño (D47), sin PR; si la fase de ingeniería la parte en 2 commits (F15), siguen siendo 1 ola y 2 permisos de push, sin referencias cruzadas entre ellos .github/workflows/deploy.yml:25
PLAN_REALITY: phase=ceo rows=7/7 missing=none unverified=2 verdict=complete

### 0C. Estado ideal

```
  HOY                                   ESTE PLAN                                 12 MESES
  IA creativa como extra sin página ──> hub /marketing/ pro + 4 páginas de IA ──> Elemento Web es «la agencia con IA»
  /marketing/ con 6 servicios           con precio, ejemplos propios, GEO           que citan los asistentes en Panamá;
  0 entradas por búsquedas de IA        y enlaces desde menú, pie y pauta           paquetes de IA atados a la pauta como
                                                                                  retainer; casos reales con permiso
```
El plan va hacia el ideal: crea la oferta y las puertas de entrada. Faltan para el ideal (fuera de este plan): casos
reales de clientes con permiso, contenido de blog por servicio y medición de leads por página.

### 0D y 0E

No hizo falta ninguna decisión de enfoque nueva: D1-D5 del 17-oct cierran el enfoque. Modo: SELECTIVE EXPANSION (regla
de /autoplan), con D1-D5 como decisiones aprobadas que lo gobiernan.

### 0F y 0G. Chequeos de alcance y ampliaciones

Chequeos de HOLD SCOPE:
1. Complejidad: ~16 archivos cambiados más los archivos de ejemplos y fotos (más de 8). La alternativa con menos piezas
   sería una sola página «Producción con IA» con secciones; pierde las 4 puertas de entrada por palabra clave que el
   dueño eligió (D2). Se mantienen 4 páginas.
2. Mínimo para la meta: precios, ejemplos, 4 páginas, hub y enlaces. Nada de eso se puede quitar sin perder un criterio
   de aceptación.
3. Correcciones necesarias para cumplir los criterios (entran sin ser ampliación): P5 (bloque `receipt`) y P11 (fuente
   de la regla de Meta).

Ampliaciones candidatas (decididas con los principios; las de gusto van a la puerta final):

| # | Ampliación | Esfuerzo | Riesgo | Decisión | Principio |
|---|---|---|---|---|---|
| E1 | Quitar del hub los superlativos sin fuente («El canal con mejor retorno», «creativos que detienen el scroll») | S | bajo | ACEPTADA | P2 (en el radio del cambio del hub, menos de 1 día) |
| E2 | Enlace de relacionados desde Google Ads y Meta Ads hacia Anuncios con IA | S | bajo | ACEPTADA | P2 (2 archivos de datos, ya permitido en «Fuera de alcance») |
| E3 | Fechas de medición de las 4 páginas en TODOS.md (Search Console a P + 28 y las 2 preguntas GEO) | S | bajo | ACEPTADA | P2 |
| E4 | Un artículo de blog por servicio de IA («cuánto cuesta un video con IA en Panamá») | M | bajo | DIFERIDA a TODOS.md | P3 (fuera del radio; el blog está fuera de alcance) |
| E5 | Caso real de un cliente con piezas de IA | M | medio | DIFERIDA a TODOS.md | P3 (necesita permiso de un cliente) |
| E6 | Panel de Marketing Digital e IA en la portada | M | medio | DIFERIDA (plan aparte de los paneles apilados) | P3 |
| E7 | Muestra gratis de 1 creativo como gancho | S | medio | SALTADA | política de precios del dueño; no la pidió |
| E8 | Comparador antes y después con JavaScript en Imágenes | S | bajo | SALTADA | P5 (la foto «antes» y las «después» lado a lado bastan, sin JS) |
| E9 | Paquete recurrente de IA creativa atado a la pauta (segundo multiplicador del 10x) | M | medio | DIFERIDA a TODOS.md | P3 (necesita que el dueño decida el precio) |

Escaneo de detalles (5): mensaje de WhatsApp con el servicio ya escrito (ya existe el patrón, entra en el formulario de
cada página); foto «antes» real del producto propio (entra en #2); pie de cada ejemplo con la herramienta y el tiempo de
entrega (se descarta: el tiempo no está medido); preguntas frecuentes con la pregunta de derechos de uso (entra en #3-#6);
botón «Ver otros servicios con IA» al final de cada página (entra con los relacionados).

### 0H. Documento CEO y revisión de la spec

Resumen CEO: `~/.gstack/projects/josimarguilbaud-elementoweb/ceo-plans/2026-10-17-marketing-digital-ia-creativa.md`.
Spec Review Loop: 3 lanzamientos (tope), puntajes 4/10, 6/10 y 7/10; 100 hallazgos reportados (34, 31 y 35). Las
iteraciones 2 y 3 no repitieron 63 de los anteriores. Los 35 de la iteración 3 se aplicaron y se comprobaron uno por
uno contra el texto del plan (issues verified: 35 of 35, ediciones, no veredicto). Métricas en
`analytics/spec-review.jsonl`. Aprobación del documento: auto-decidida por /autoplan (A, los dos documentos reflejan las
decisiones). Lo que sigue abierto va a la puerta final: el User Challenge de precios (G1) y las decisiones G2 a G6.

### 0I. Interrogación temporal

| Tramo | Qué necesita saber o le va a sorprender al implementador | Resuelto en |
|---|---|---|
| Hora 1 (base) | Las decisiones G1 a G6 tienen que estar cerradas antes de #1: los precios cambian `precios.json`, el manifiesto y las pruebas; el slug de la tercera página no se puede cambiar después de publicar | «Puerta del dueño» |
| Hora 1 | `serviceKey` es la clave del formulario y no la del precio; el orden de campos de las hermanas evita `datos.test.mjs:76-82` | #3-#6 |
| Horas 2-3 (núcleo) | Los ejemplos de fal tardan y cuestan: estimar antes de cada envío y llevar la cuenta de la tanda; el avatar de Higgsfield también cuenta | #2 |
| Horas 2-3 | Leer los términos de uso comercial de Kling, `nano-banana-pro` y Higgsfield antes de escribir «Derechos de uso por escrito» | #3-#6, comparación |
| Horas 4-5 (integración) | Las 6 pruebas con conteos fijos y los 2 validadores cambian en el mismo commit que las páginas; `seo-congelado` falla con 4 «URL nueva» hasta `--actualizar` | Testing Plan, AC6 |
| Horas 4-5 | Tailwind lee `docs/` y `audit/`: el texto de TODOS, D52 y KEYWORDS puede sumar selectores; AC11 los separa de los que salen de `src/` | AC11 |
| Hora 6+ (pulido) | Medida de primera pantalla de las 4 páginas a 1440×900 y 390×844 (H1 largos); MP4 ≤ 2 MB con el avatar con voz | AC10, #2 |
| Hora 6+ | Capturas del preview para que el dueño revise el texto antes del commit; la lectura GEO del día P va después del push | #3-#6, AC15 |

Bloqueos de factibilidad: ninguno técnico. El bloqueo de arranque es G1 (precios): sin decisión no se escribe #1.
Esfuerzo total: equipo humano unas 22 h; con Claude Code unas 3,5 h más el tiempo de generación de fal y Higgsfield.

### Voces CEO (paso 0.5)

Entrada de las dos voces: `autoplan-ceo-E4qsOs/ceo-implementation.md` (sha 673ec287…a1ad3).
- Voz nativa (subagente de Claude): completada; su `INPUT` coincide con la foto. 15 hallazgos: 1 crítico (F1, demanda
  sin medir y URL sin vuelta atrás), 8 altos y 6 medios.
- Voz externa (Codex, `gpt-5.6-terra`): completada al tercer intento. El 1.º se quedó sin plazo en la comprobación previa
  (exit 124, no corrió). El 2.º respondió, pero el verificador lo rechazó: la línea final decía «porque» y no
  «because». El 3.º salió `OUTSIDE_STATUS: completed`. 12 hallazgos: 2 críticos, 6 altos y 4 medios.

```
CEO DUAL VOICES — CONSENSUS TABLE:
  Dimension                           Claude  Codex  Consensus
  1. Premises valid?                   No      No     CONFIRMED: demanda sin medir (P13) y precios sin base comparable (P8)
  2. Right problem to solve?           Parcial No     CONFIRMED: lo defendible es el plan mensual de creativos atado a la pauta, más autoridad
  3. Scope calibration correct?        No      No     CONFIRMED: 4 páginas fragmentan una oferta sin demanda medida; mucho control interno
  4. Alternatives sufficiently explored?No     No     CONFIRMED: 1-2 páginas, oferta recurrente y prospección no se analizaron
  5. Competitive/market risks covered? No      No     CONFIRMED: la pieza hecha con IA es commodity frente a herramientas y plataformas
  6. 6-month trajectory sound?         No      No     CONFIRMED: ejemplos que envejecen, métricas débiles, URL difíciles de deshacer
CONFIRMED = completed subagent + outside.
```

Disposición de los hallazgos de las voces:

| Hallazgo | Voces | Disposición |
|---|---|---|
| Validar la demanda antes de construir (F1; Codex crítico 1) | las dos | User Challenge U1 en la puerta final; la estructura de D52.2 se conserva hasta que el dueño decida |
| Menos páginas (F11; Codex alto 4) | las dos | User Challenge U2 |
| Plan mensual como oferta central (F3, F4; Codex crítico 2) | las dos | User Challenge U3 y G7; mientras tanto, cada página dice «también como plan mensual; se cotiza» (aceptado, P2) |
| Precios bajo el mercado y fuentes no comparables (F5; Codex alto 3) | las dos | User Challenge G1, ya en la puerta |
| Sin plan de autoridad (F2; Codex alto 8) | las dos | Aceptado: acción de autoridad en la regla de P + 28 |
| Métricas débiles (Codex alto 7) | Codex | Aceptado: consultas por `origen` y clics de WhatsApp en la medición |
| Frontera con Meta Ads, Contenido y el set de US$ 100 (F6) | Claude | Aceptado: línea y pregunta frecuente en las 4 páginas; la cifra queda en G8 |
| «Derechos de uso» promete de más (F7; Codex medio 2) | las dos | Aceptado: «licencia de uso comercial», pregunta «¿Las piezas son exclusivas?», consentimiento con la Ley 81 |
| Commodity frente a herramientas gratis (F14; Codex medio 4) | las dos | Aceptado: bloque «¿Cuándo te basta la herramienta gratis?» |
| Ejemplos que restan confianza (F9; Codex alto 6) | las dos | Aceptado: hoja de contactos que aprueba el dueño; TODO para regenerar cada 6 meses |
| Sacar menú y pie (F8) | Claude | Gusto T1 en la puerta; la spec aprobada los incluye |
| Rótulo en las portadas de IA (F10) | Claude | Gusto T2 en la puerta |
| Ejemplos con NousCRM o Elemento Web (F12) | Claude | Gusto T3 en la puerta |
| Prospección con muestras (F13) | Claude | TODO P2 |
| Publicar en 2 commits y re-estimar (F15) | Claude | Esfuerzo re-estimado; la secuencia de commits queda para la fase de ingeniería |
| Formulario con `definir` pierde datos (Codex medio 1) | Codex | Refuerza la alternativa de G2; no cambia el valor por defecto |
| Precios cerrados invitan a pedir de más (Codex medio 3) | Codex | El recibo y el `pie` dicen qué no incluye; los extras se cotizan |
| Mucho control de ingeniería (Codex alto 5) | Codex | Se conserva: las reglas del dueño piden verificar todo; se recorta si gana T1 o U2 |
| Nombres inconsistentes (Codex bajo) | Codex | Ya corregido: «cuatro servicios» con Avatares y voz como uno |

### Revisión CEO, secciones 1 a 11

**Alcance actual.** SELECTIVE EXPANSION (regla de /autoplan). Gobiernan D52.1 a D52.4 (aprobadas). Aceptadas: E1 a E3 y
las correcciones P5 y P11. Diferidas: E4, E5, E6 y E9. Saltadas: E7 y E8. Pendientes de la puerta final: G1 a G8, U1 a
U3 y T1 a T3.

**Sección 1, arquitectura.** Sitio estático: no hay servidor, base de datos ni endpoint nuevo.

```
  precios.json ──> receipt.desde ──> PrecioPlazo (portada) ──> data-amount ──> validar-marcador
       │                     └────> pageOffer (schema.ts:127) ──> offers.minPrice
       └──> service.catalogo ──> offersNode (schema.ts:190) ──> hasOfferCatalog.minPrice
  formulario.json.paginas ──> serviceKey ──> [...slug].astro:35 (botón) ──> n8n (Hetzner, sin cambios)
  fal / Higgsfield ──> ffmpeg / sharp ──> public/images/ejemplos, public/videos ──> Ejemplo.astro (foto, video)
  portadas-fotos.mjs ──> public/images/hero + og ──> heroes-manifest.mjs ──> HERO_SLUGS ──> PortadaServicio
  site.ts iaCreativa ──> Navbar, Footer, hub (cards) ; marketing.ts ──> 4 páginas + related cruzados
```

- Ruta feliz: los montos coinciden en los tres lugares y el validador lo comprueba.
- Ruta vacía o nula: una clave que falta hace fallar el build (`schema.ts:201` lanza error), y una portada que falta
  también (`PortadaServicio.astro:18`). Las dos fallas se ven, no pasan en silencio.
- Ruta de error: n8n caído afecta al formulario de todo el sitio (punto único de falla que ya existe y no cambia).
- Acoplamiento nuevo: `iaCreativa` alimenta el menú, el pie y el hub. Está justificado: es una sola fuente.
- Rollback: `git revert` más push con permiso, unos 10 minutos; 301 si ya pasó el día P.
- Prueba de valor de los artefactos: `selectores-hoja.mjs` y `comparar-main.mjs` los consumen AC11 y AC14. Protegen
  contra cambios no declarados en todo el sitio, un riesgo preventivo concreto (Tailwind lee `docs/`). Son
  reutilizables en la próxima épica. Se retiran si el sitio pasa a fijar `@source`.
- Sin hallazgos nuevos.

**Sección 2, errores y rescate.** El registro está abajo. El gasto real podía diferir de la estimación de `estimate_cost`,
que es solo orientativa → aceptado: cada fila registra el costo real cobrado. No quedan brechas críticas.

**Sección 3, seguridad.** No hay entrada de usuario ni endpoint nuevos; el formulario no cambia. El repo es público: el
registro de gasto guarda `request_id` y costo, nunca claves ni datos personales. Las claves de fal y Higgsfield viven en
el MCP, fuera del repo. Riesgos legales: datos de voz y cara (Ley 81, ya aceptado con consentimiento escrito) y licencia
de la foto de stock (`CREDITOS.json`). Probabilidad baja, impacto medio; los dos quedan mitigados en el plan.

**Sección 4, datos e interacción.**

```
  generación -> estimación (≤ 15) -> envío -> costo real -> fila en audit -> archivo en public/ -> hoja de contactos -> commit
     sombra: timeout o error de fal -> se reintenta dentro del tope o se para; MP4 > 2 MB -> CRF 30, 32 o 960 px
```

| Interacción | Caso borde | ¿Cubierto? | Cómo |
|---|---|---|---|
| Ver un video | red lenta | sí | `preload="none"` y póster |
| Ver un video | navegador sin soporte | ahora sí | texto de respaldo con enlace (aceptado) |
| Ver un video | lector de pantalla | sí | `controls` y subtítulos quemados en el avatar |
| Formulario | consulta desde una página `definir` | sí | `origen` en el correo |
| Doble envío del formulario | — | no aplica | flujo existente, sin cambios |

**Sección 5, calidad de código.** Los tipos nuevos siguen la unión `Ejemplo`, y las imágenes usan `loading="lazy"` como
las existentes (`Ejemplo.astro:31`). Los 2 scripts nuevos tienen una sola tarea cada uno, que es lo explícito (P5).
Sin hallazgos.

**Sección 6, pruebas.** Todo lo nuevo tiene prueba:

| Qué es nuevo | Dónde se prueba |
|---|---|
| Precios | unidad y `dist/` |
| Ejemplos | `dist/` y créditos |
| Portadas | validador y `qa-lcp` |
| Enlaces | `dist/` y `check-links` |
| Formulario | `datos.test` |
| Hub | `dist/` y `portada.test` |
| Menú y pie | `dist/` y AC11 |
| Video sin soporte | `dist/` (nuevo) |

- Prueba que da confianza un viernes a las 2 a. m.: `npm run verify` más la prueba de cifras en el `<main>`.
- Prueba de un QA hostil: un precio distinto entre la portada y el schema, o un MP4 de 3 MB. Las dos están cubiertas.
- Riesgo de pruebas inestables: `qa-lcp` depende de que carguen las fuentes. Ya existe y no cambia.

**Sección 7, rendimiento.** Página estática:
- Portada ≤ 58 KB a 1200 px; ejemplos ≤ 80 KB con carga diferida; video con `preload="none"`.
- El CSS cabe en el presupuesto: quedan 2.913 B en `servicio`.
- Ruta más lenta: la primera reproducción de un video de 2 MB en 4G, unos 2 a 4 s. Es una acción del visitante, no
  afecta el LCP.
- Sin hallazgos.

**Sección 8, observabilidad.** GA4 ya está en el sitio y el `origen` del formulario ya llega en el correo. La medición
de P, P + 28 y P + 56 (aceptada) es el tablero. No hace falta registrar las reproducciones de video (YAGNI).
Sin hallazgos más allá de las métricas de consultas ya aceptadas.

**Sección 9, despliegue.** Un push a `main` es producción, con permiso (D47). El registro de gasto va en un commit propio.
Después del deploy:
- `gh run watch --exit-status` y `bash scripts/check-prod.sh`.
- Las 4 URL responden 200 en producción y aparecen en el sitemap y en `llms.txt`.

La secuencia en 2 commits (F15) queda para la fase de ingeniería.

**Sección 10, trayectoria.**
- Reversibilidad 2/5: una URL indexada no se borra sin 301, y por eso la puerta U1/G6 va antes de construir.
- Deuda: los ejemplos envejecen (TODO) y los conteos fijos de las pruebas suben con cada página.
- Plataforma: los tipos `foto` y `video` sirven después en cualquier página.
- Selección de ampliaciones: E9 resultó más importante de lo que se le dio (las dos voces). Por eso entra como U3.

**Sección 11, diseño y experiencia.** Lo que ve primero el visitante: H1, precio y botón (medido en AC10). Después la
respuesta citable, luego qué incluye, ejemplos y comparación.

| Función | Cargando | Vacío | Error | Éxito |
|---|---|---|---|---|
| Video | póster | — | texto de respaldo | reproducción con controles |
| Imagen de ejemplo | carga diferida | — | `alt` | imagen |

```
  búsqueda o asistente ─> página (H1 + precio + botón) ─> respuesta ─> qué incluye ─> ejemplos ─> herramienta gratis vs servicio
       ─> comparación ─> preguntas ─> formulario o WhatsApp ─> correo con origen
```

- Riesgo de ejemplos genéricos: alto. Cubierto por la hoja de contactos del dueño.
- DESIGN.md: molde v2, solo Roboto, sin animación.
- Móvil: medido a 390×844.
- Accesibilidad: `qa-a11y`, subtítulos y `alt`.

La revisión de diseño profunda es la fase 2 de este /autoplan.

### Salidas obligatorias de la fase CEO

**NOT in scope.**
- Diferido a TODOS.md:
  - E4, blog por servicio.
  - E5, caso real con permiso.
  - E9, plan mensual, ahora también U3.
  - Superlativos fuera del radio.
  - Regenerar los ejemplos.
  - Muestras para prospectar.
- Fuera, con plan propio: E6, el panel de la portada.
- Saltado: E7 (muestra gratis) y E8 (comparador con JavaScript).
- Fuera de la épica: claves nuevas del formulario (G2), ItemList (G3), los paquetes en `/precios/`, blog, pauta pagada
  y versiones en inglés.

**What already exists.** La tabla 0B: molde v2, `Ejemplo.astro`, `precios.json` y `receipt`, `heroes`, `schema.ts`,
`formulario.json`, marcador, KEYWORDS, `seo-congelado`. Se suman `portadas-fotos.mjs`, `medir.mjs` y la carpeta
`public/images/ejemplos/`, que se reusan.

**Dream state delta.** El plan crea la oferta y las puertas de entrada, pero no las hace rentables ni visibles por sí
solo. Para el ideal de 12 meses faltan demanda medida (U1), plan mensual (U3), autoridad del dominio y casos reales.

**Error & Rescue Registry.**

| Capacidad o paso | Qué falla | Rescate | Qué ve el usuario o el dueño |
|---|---|---|---|
| Generación en fal | timeout, error, resultado malo | reintento dentro del tope; si no alcanza, se para y se avisa | el dueño recibe el aviso; el sitio no cambia |
| Avatar en Higgsfield | sin créditos, costo no calculable | se para y se pregunta | aviso al dueño |
| Compresión de video | MP4 > 2 MB | CRF 30, 32 o 960 px | nada; el valor queda anotado |
| Portada | > 58 KB a 1200 px | `portadas-fotos.mjs` baja la calidad | nada |
| Portada sin registrar | falta `-1200.webp` | el build falla (`PortadaServicio.astro:18`) | el deploy no sale; la web sigue en la versión anterior |
| Clave de precio | no está en `confirmados` | el build falla (`schema.ts:201`) | igual |
| URL nueva | no está en el snapshot | `seo-congelado` falla hasta `--actualizar` | igual |
| Video | el navegador no lo reproduce | texto de respaldo con enlace | enlace al archivo |
| Formulario | n8n caído | flujo existente | el error que ya maneja el formulario |
| Gasto | estimado distinto del real | fila con el costo real | prueba de AC8 |

**Failure Modes Registry.**

```
  CODEPATH            | FAILURE MODE          | RESCUED? | TEST? | USER SEES?        | LOGGED?
  --------------------|-----------------------|----------|-------|-------------------|--------
  fal generation      | timeout / mala pieza  | Y        | N/A   | aviso al dueño    | audit
  Higgsfield avatar   | sin créditos          | Y        | N/A   | aviso al dueño    | D52
  ffmpeg              | MP4 > 2 MB            | Y        | Y     | nada              | créditos
  portadas-fotos      | variante pesada       | Y        | Y     | nada              | salida del script
  heroes-manifest     | slug sin registrar    | Y (build)| Y     | build rojo        | CI
  precios.json        | clave ausente         | Y (build)| Y     | build rojo        | CI
  seo-congelado       | URL nueva             | Y        | Y     | verify rojo       | CI
  <video>             | sin soporte           | Y        | Y     | enlace            | —
  gasto               | estimado ≠ real       | Y        | Y     | nada              | audit
```

0 brechas críticas.

**Diagramas producidos:** arquitectura y flujo de datos, flujo de generación con sombras, flujo de usuario. No hay
máquina de estados ni flujo de despliegue nuevo: el despliegue es el que ya existe. Diagramas viejos: ninguno en los
archivos que toca el plan.

### Tareas de implementación (fase CEO)

- [ ] **T1 (P1, humano: ~30 min / CC: ~5 min)**: puerta del dueño, cerrar G1 a G8, U1 a U3 y T1 a T3 antes de #1.
  - Surgió de: voces CEO y revisión de la spec.
  - Archivos: `docs/specs/rediseno-elementoweb/SPEC-MARKETING-IA.md`.
  - Verificar: cada decisión anotada en D52.
- [ ] **T2 (P1, humano: ~1 h / CC: ~15 min)**: leer los términos de uso comercial de Kling, `nano-banana-pro` y
  Higgsfield, y la documentación de IA de Meta, Google y Canva que cite el bloque de herramientas.
  - Surgió de: F7, F14 y Sección 3.
  - Archivos: `DECISIONES.md` (D52).
  - Verificar: fuentes enlazadas en D52.
- [ ] **T3 (P1, humano: ~4 h / CC: ~1,5 h)**: generar los ejemplos y las portadas con costo real registrado, y armar
  la hoja de contactos.
  - Surgió de: #2, #2b y Sección 2.
  - Archivos: `public/images/ejemplos/`, `public/videos/ia-creativa/`, `audit/imagenes-ia-2026-10.json`.
  - Verificar: prueba de AC8 y aprobación del dueño.
- [ ] **T4 (P1, humano: ~12 h / CC: ~1,5 h)**: construir las páginas, el hub y los enlaces según el plan.
  - Surgió de: #3 a #8.
  - Archivos: Files Reference.
  - Verificar: `npm run verify`.
- [ ] **T5 (P2, humano: ~30 min / CC: ~10 min)**: entradas de TODOS.md, medición con fecha del día P y las diferidas.
  - Surgió de: E3, voces CEO y Sección 8.
  - Archivos: `TODOS.md`.
  - Verificar: la entrada existe con su fecha.

**Completion Summary (CEO).**

```
  +====================================================================+
  |            MEGA PLAN REVIEW — COMPLETION SUMMARY                   |
  +====================================================================+
  | Mode selected        | SELECTIVE EXPANSION                         |
  | System Audit         | sin código previo de IA creativa; marcador, |
  |                      | precios y molde v2 reutilizables            |
  | Step 0               | D52.1-D52.4; E1-E3 aceptadas; spec 7/10     |
  | Section 1  (Arch)    | 0 issues found                              |
  | Section 2  (Errors)  | 10 error paths mapped, 0 GAPS (1 corregida) |
  | Section 3  (Security)| 2 issues found, 0 High severity             |
  | Section 4  (Data/UX) | 5 edge cases mapped, 0 unhandled (1 nuevo)  |
  | Section 5  (Quality) | 0 issues found                              |
  | Section 6  (Tests)   | Diagram produced, 0 gaps                    |
  | Section 7  (Perf)    | 0 issues found                              |
  | Section 8  (Observ)  | 1 gap found (métricas de consultas, aceptado)|
  | Section 9  (Deploy)  | 1 risk flagged (secuencia de commits → eng) |
  | Section 10 (Future)  | Reversibility: 2/5, debt items: 2           |
  | Section 11 (Design)  | 1 issue (calidad de ejemplos, aceptado)     |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (13 items)                          |
  | What already exists  | written                                     |
  | Dream state delta    | written                                     |
  | Error/rescue registry| 10 rows, 0 CRITICAL GAPS                    |
  | Failure modes        | 9 total, 0 CRITICAL GAPS                    |
  | TODOS.md updates     | 7 items proposed                            |
  | Scope proposals      | 9 proposed, 3 accepted (EXP + SEL)          |
  | CEO plan             | written                                     |
  | Outside voice        | codex completed (3.er intento)              |
  | Lake Score           | N/A (sin preguntas con puntaje respondidas) |
  | Diagrams produced    | 4 (arquitectura, datos, generación, usuario)|
  | Stale diagrams found | 0                                           |
  | Unresolved decisions | 14 (G1-G8, U1-U3, T1-T3; puerta final)      |
  | Reality rows         | 7/7 rows, 2 unverified (P11, P13)           |
  +====================================================================+
```

<!-- autoplan-baseline-edits:ceo {"sourceSha256":"edc1b6ce383a2d5bec95dbdc6fd7ecfca881836617492ee412748cc0473dc216","replacements":[{"oldText":"Decisiones del dueño (17-oct-2026, registradas en el log de decisiones de gstack):","newText":"Decisiones del dueño (17-oct-2026, registradas en el log de decisiones de gstack). En `docs/specs/rediseno-elementoweb/DECISIONES.md` entran juntas como D52; aquí se citan D52.1 a D52.4 para no confundirlas con la D1-D4 de ese archivo:"},{"oldText":"- D1: Marketing Digital = mejorar","newText":"- D52.1: Marketing Digital = mejorar"},{"oldText":"- D2: cuatro páginas nuevas","newText":"- D52.2: cuatro páginas nuevas"},{"oldText":"- D3: precios = punto medio estimado del mercado, con fuentes; el dueño los confirmó con «procede» sobre el borrador (ver tabla de precios).","newText":"- D52.3: precios = punto medio estimado del mercado, con fuentes; el dueño los confirmó con «procede» sobre el borrador (ver tabla de precios). La revisión del 17-oct la reabrió: con las fuentes citadas, 3 de los 4 montos quedan por debajo del punto medio, así que el dueño los reconfirma en la «Puerta del dueño» y #1 escribe lo que decida ahí."},{"oldText":"- D4: cada página muestra ejemplos propios marcados «Ejemplo»; tope nuevo de US$ 15 para esta tanda (D46 se amplía solo para esta tanda).","newText":"- D52.4: cada página muestra ejemplos propios marcados «Ejemplo»; tope nuevo de US$ 15 para esta tanda (D46 se amplía solo para esta tanda). El tope cubre también el avatar de Higgsfield, por su equivalente en dólares. D52 anota además dos precisiones. Primera: esta tanda usa `nano-banana-pro` también en los ejemplos; D46 lo reservaba para unas 15 fotos clave, pero los ejemplos son el producto que se vende y la diferencia frente a `nano-banana-2` es de US$ 0,07 por imagen. Segunda: las 4 páginas entran al manifiesto en fase 2b a propósito, para que se exijan desde ya (D1 define 2b como portada, `/servicios/` y `/precios/`)."},{"oldText":"6 enlaces; los usan `Navbar.astro:58,82`, `Footer.astro:66` y la sección Marketing de la portada (prueba «8. marketing: 6 módulos») | NO se toca; va una lista nueva `iaCreativa` |","newText":"6 enlaces; los usan `Navbar.astro:58,82`, `Footer.astro:66` y la sección Marketing de la portada. La prueba «8. marketing» (`scripts/portada.test.mjs:447-453`) compara esos 6 módulos con todos los enlaces `/marketing/…` del `<main>` del hub | NO se toca; va una lista nueva `iaCreativa`. La prueba 8 cambia (regla 3): excluye las 4 URL de IA creativa, escritas como lista literal en la prueba, porque la portada sigue mostrando solo los 6 servicios de pauta |"},{"oldText":"| Search Console | 0 impresiones de búsquedas con «IA» (`audit/gsc-baseline-2026-10.md`) | Línea base 0; volumen sin medir (sin Planificador de Google Ads) |","newText":"| Search Console | Ninguna de las 257 consultas de oct-2026 menciona anuncios, videos, imágenes, fotos, avatares, voz ni reels (`audit/gsc-2026-10-consultas.tsv`). Sí hay búsquedas de IA en general: el grupo «IA, automatización y CRM» suma 73 impresiones (`audit/gsc-baseline-2026-10.md:86`) y «agencia de inteligencia artificial en panamá» 32, que hoy recibe `/inteligencia-artificial-para-empresas-panama/` | Línea base 0 para IA creativa; volumen sin medir (sin Planificador de Google Ads) |"},{"oldText":"### #1 Precios (confirmados por el dueño el 17-oct-2026; estimados de mercado, no hay tarifas publicadas en Panamá)","newText":"### #1 Precios (confirmados por el dueño el 17-oct-2026 y reabiertos por la revisión: se reconfirman en la «Puerta del dueño»; estimados de mercado, no hay tarifas publicadas en Panamá)"},{"oldText":"Cada clave lleva `\"desde\": true` y `\"fuente\"` con el archivo de la página.","newText":"Los montos de la tabla son los que el dueño confirmó. Si en la «Puerta del dueño» elige otros, #1 escribe esos; si no los confirma, se sigue la rama «propuesto» descrita ahí. Cada clave lleva `nombre`, `monto`, `unidad` y `fuente` (el archivo de la página), como las que tienen precio fijo (`web-landing`, `scripts/datos.test.mjs:90-99`), sin `\"desde\": true`, que en `precios.json` solo llevan los precios que varían (`mantenimiento`, `wazacrm`, `ia`). La portada muestra igual «desde $450 por paquete de 10 creativos», porque `PrecioPlazo.astro:11` antepone «desde» a todo precio confirmado (D23). Al escribir D52, cada monto lleva el rango de su fuente, el punto medio calculado y el motivo si difiere."},{"oldText":"| Anuncios | 3 creativos (2 imágenes 4:5 y 1 video de 8-10 s) para un «negocio de ejemplo» | fal (nano-banana-pro, un modelo de video) | `public/images/ia-creativa/anuncios/` |\n| Videos | 2 videos verticales de 8-10 s (producto y ambiente) | fal (modelo de video) | `public/videos/ia-creativa/` |\n| Imágenes | 1 foto «antes» (producto real propio, sin cliente) y 3 «después» en escenarios | fal (nano-banana-pro/edit) | `public/images/ia-creativa/fotos/` |\n| Avatares y voz | 1 video de 15-20 s con presentador virtual y voz en español | Higgsfield (créditos del plan; no es gasto de fal) | `public/videos/ia-creativa/` |","newText":"| Anuncios | 3 creativos (2 imágenes 4:5 y 1 video vertical de 10 s hecho a partir de una tercera imagen 9:16) para un «negocio de ejemplo» | fal: `fal-ai/nano-banana-pro` (US$ 0,15 por imagen) y `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` (US$ 0,07 por segundo: 10 s = US$ 0,70; precios de la API de fal del 17-oct) | imágenes en `public/images/ejemplos/`, video en `public/videos/ia-creativa/` |\n| Videos | 2 videos verticales de 10 s (producto y ambiente), cada uno a partir de una imagen fija. Son la base visual, sin voz ni subtítulos, y su `pie` lo dice: «Ejemplo · base visual de 10 s hecha con IA; el paquete suma guion, voz y subtítulos» | fal: `fal-ai/nano-banana-pro` para la imagen de partida y `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` | `public/videos/ia-creativa/` |\n| Fotografía de producto | 1 foto «antes» y 3 «después» en escenarios. La «antes» es una foto real de un producto sin marca, con el origen que se decida en la «Puerta del dueño» (por defecto, una foto de stock con licencia libre de Unsplash o Pexels, descargada con permiso del dueño y acreditada en `public/images/ejemplos/CREDITOS.json`) | fal: `fal-ai/nano-banana-pro/edit` (US$ 0,15 por imagen) | `public/images/ejemplos/` |\n| Avatares y voz | 1 video de 15-20 s con presentador virtual y voz en español, con subtítulos quemados desde el guion, porque un video con voz necesita subtítulos (WCAG 1.2.2) y así se ve el entregable | Higgsfield, con créditos del plan. Antes de generar se consulta el saldo y el costo; los créditos gastados cuentan dentro de los US$ 15 por su equivalente en dólares según el precio por crédito del plan, y si ese equivalente no se puede calcular, se para y se pregunta | `public/videos/ia-creativa/` |"},{"oldText":"Cada generación cobrada agrega una fila con el mismo formato de las existentes en `audit/imagenes-ia-2026-10.json` (`fecha`, `modelo`, `costo`, `request_id`, `uso`) y sube `gastado`.","newText":"Cada generación cobrada agrega una fila con el mismo formato de las existentes en `audit/imagenes-ia-2026-10.json` (`fecha`, `modelo`, `costo`, `request_id`, `uso`) más `\"tanda\": \"marketing-ia\"`, y sube `gastado` (el total del archivo, que sigue contando todo). El avatar de Higgsfield entra con su equivalente en dólares y `\"modelo\": \"higgsfield:<modelo>\"`. El `tope` del archivo pasa de 10 a 25 (D46 más D52.4) y su `_nota` lo explica; el tope de la tanda se lleva aparte en `\"tandas\": { \"marketing-ia\": { \"tope\": 15, \"gastado\": <suma de las filas de la tanda> } }`. Antes de cada envío, el costo estimado (`estimate_cost` en fal, el costo en créditos en Higgsfield) más `tandas[\"marketing-ia\"].gastado` tiene que dar ≤ 15; si no, se para y se avisa al dueño. Cuenta estimada: 12 imágenes (3 de Anuncios, 2 de partida de Videos, 3 «después» y 4 portadas: US$ 1,80), 3 videos de 10 s (US$ 2,10) y la transcripción del avatar (`fal-ai/whisper`, centavos): unos US$ 3,95 de fal sin repeticiones, más el avatar. Los videos de fal se recomprimen con `ffmpeg` (instalado, versión 8.1.2): `ffmpeg -i entrada.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=-2:1280 -an -movflags +faststart salida.mp4`. El del avatar conserva su voz con `-c:a aac -b:a 96k` en lugar de `-an` y quema los subtítulos con `subtitles=avatar.srt` en el filtro. `avatar.srt` sale de `fal-ai/whisper` con marcas de tiempo por segmento sobre el audio del video, corregido a mano contra el guion, y se guarda fuera del repo: el archivo lo leería Tailwind, y lo que se publica es el video con los subtítulos quemados. Si un MP4 pasa de 2 MB, se sube el CRF a 30 y luego a 32, y si no alcanza se baja la altura a 960 (`scale=-2:960`); el valor final se anota en la fila de créditos. El póster es el primer cuadro (`ffmpeg -i salida.mp4 -frames:v 1 poster.png`), pasado a WebP con `sharp` (ya es dependencia, `package.json:27`)."},{"oldText":"`public/images/ia-creativa/<pagina>/<pagina>-ejemplo-<n>-{640,960}.webp`","newText":"`public/images/ejemplos/ia-<pagina>-<n>.webp`, como las imágenes de ejemplo que ya existen en esa carpeta (28 archivos con un solo `CREDITOS.json`): 640 px de ancho, 640×795 en `anuncio-social`, ≤ 80 KB cada una, una sola variante porque `ImgEjemplo` tiene un solo `src` y `Ejemplo.astro` no usa srcset"},{"oldText":"videos `public/videos/ia-creativa/<pagina>-ejemplo-<n>.mp4` con póster `public/images/ia-creativa/<pagina>/<pagina>-ejemplo-<n>-poster.webp`, donde `<pagina>` es `anuncios`, `videos`, `fotos` o `avatar`.","newText":"videos `public/videos/ia-creativa/<pagina>-<n>.mp4` con póster `public/images/ejemplos/ia-<pagina>-<n>-poster.webp`, donde `<pagina>` es `anuncios`, `videos`, `fotos` o `avatar`."},{"oldText":"En los datos de la página, el bloque «Así se vería» usa el tipo existente de ejemplos del molde con campos `src`, `alt`, `nota` («Ejemplo · <qué muestra>») y, en video, `poster`; si el molde no admite video, se agrega un tipo `video` al bloque con esos cuatro campos y su prueba sobre `dist/`.","newText":"En los datos de la página, «Así se vería» es el bloque `ejemplos` que ya existe (`src/lib/types.ts`, unión `Ejemplo`), con su `nota` obligatoria. Anuncios usa el tipo existente `anuncio-social` con la imagen generada en `img` (`ImgEjemplo`: `src`, `alt`, `width`, `height`). Para fotos y videos sueltos no hay tipo, así que se agregan dos a la unión `Ejemplo` y a `src/components/Ejemplo.astro`: `{ tipo: 'foto'; img: ImgEjemplo; pie: string }` y `{ tipo: 'video'; src: string; poster: ImgEjemplo; pie: string; voz?: true }`, donde `pie` empieza con «Ejemplo ·». El `<video>` lleva `controls`, `preload=\"none\"`, `playsinline`, `poster` y el `width`/`height` del póster, y `muted` solo cuando no tiene `voz`; no lleva `autoplay` ni JavaScript. Sus estilos van en `src/styles/molde-kredit.css`, que solo se pone en línea en las páginas v2 (aprendizaje `astro-css-por-ruta-no-por-componente`), reusando el marco y el pie de los tipos que ya existen; `node scripts/presupuestos.mjs` debe seguir en verde sin subir ningún máximo (el 17-oct quedan 2.913 B de CSS en `servicio` y 3.613 B en `hub`, gzip)."},{"oldText":"cada archivo publicado en el `CREDITOS-IA.json` de su carpeta con modelo y descripción;","newText":"cada archivo publicado con su fila de créditos (modelo y descripción) en `public/images/ejemplos/CREDITOS.json` (imágenes y pósters) o en `public/videos/ia-creativa/CREDITOS-IA.json` (videos);"},{"oldText":"4 fotos realistas tipo Kredit (personas y lugares de Panamá, luz natural, sin texto ni logos), una por página, `public/images/hero/marketing--<slug>.jpg` con variantes 480/800/1200/1600 vía `scripts/optimize-images.mjs`, ≤ 60 KB a 1200 px, fila en `public/images/hero/CREDITOS-IA.json`.","newText":"4 fotos realistas tipo Kredit (personas y lugares de Panamá, luz natural, sin texto ni logos), una por página, con `fal-ai/nano-banana-pro` (US$ 0,15 cada una, dentro de la cuenta de la tanda). Se instalan con `node scripts/portadas-fotos.mjs <foto> marketing/<slug>` (una vez por foto): recorta a 10:7, escribe `public/images/hero/marketing--<slug>.jpg` de 1600×1120, las variantes WebP 480/800/1200/1600 con la de 1200 en 58 KB o menos, y el recorte para compartir `public/images/og/marketing--<slug>.jpg` de 1200×630. La portada v2 sirve 480, 800 y 1200 (`PortadaServicio.astro:17`) y el validador pesa esas fuentes (`validar-marcador.mjs:30-37`), así que el tope de la 1200 que pone el script basta. Después, `node scripts/heroes-manifest.mjs` regenera `src/lib/heroes.ts` (`HERO_SLUGS` y `OG_SLUGS`, archivo generado) y el texto alternativo de cada foto se agrega a `HERO_ALTS` (`src/lib/img.ts:110`). Fila en `public/images/hero/CREDITOS-IA.json`."},{"oldText":"| Slug | Palabra principal | Secundarias | serviceKey |\n|---|---|---|---|\n| `marketing/anuncios-con-ia-panama` | anuncios con ia | creativos con IA para Meta Ads; publicidad con inteligencia artificial | `anuncios-ia` |\n| `marketing/videos-con-ia-panama` | videos con ia para empresas | reels con IA; video publicitario con IA | `videos-ia` |\n| `marketing/imagenes-con-ia-panama` | fotografía de producto con ia | imágenes con IA para redes y catálogo | `fotos-producto-ia` |\n| `marketing/avatares-y-voz-con-ia-panama` | avatar con ia | presentador virtual; voz en off con IA; doblaje con IA | `avatar-ia` |","newText":"| Slug | Palabra principal | Secundarias | Clave de precio (`service.catalogo`) | `serviceKey` (clave del formulario) |\n|---|---|---|---|---|\n| `marketing/anuncios-con-ia-panama` | anuncios con ia | creativos con IA para Meta Ads; publicidad con inteligencia artificial | `anuncios-ia` | `pauta` |\n| `marketing/videos-con-ia-panama` | videos con ia para empresas | reels con IA; video publicitario con IA | `videos-ia` | `definir` |\n| `marketing/fotografia-de-producto-con-ia-panama` | fotografía de producto con ia | imágenes con IA para redes y catálogo | `fotos-producto-ia` | `definir` |\n| `marketing/avatares-y-voz-con-ia-panama` | avatar con ia | presentador virtual; voz en off con IA; doblaje con IA | `avatar-ia` | `definir` |\n\nLa tercera URL lleva la palabra principal («fotografía de producto»), porque una URL publicada ya no puede cambiar (`seo-congelado.mjs` no deja que aparezcan ni desaparezcan URLs); «imágenes con IA», la palabra que usó el dueño en D52.2, queda como secundaria y en el texto. Es la opción por defecto de la «Puerta del dueño».\n\n`serviceKey` es la clave del formulario, no la del precio, y va en el mismo orden que en las hermanas de `marketing.ts` (después de `parent` y `anatomia`, `marketing.ts:160-163`). Con ese orden `paginasDelRegistro` (`datos.test.mjs:22`) no la lee, igual que hoy con Google Ads, así que `datos.test.mjs:66-82` no cambia. En Avatares y voz, la voz en off y el doblaje sueltos se cotizan aparte: la página lo dice en una línea y en una pregunta frecuente, sin cifra.\n\nMetadatos y datos de cada página (los title y H1 contienen la palabra principal tal cual, sin importar mayúsculas ni tildes; entre paréntesis, caracteres):\n\n| Página | Title | H1 | Description | `service.type` | Etiqueta en `iaCreativa` | `related` fuera de IA creativa |\n|---|---|---|---|---|---|---|\n| Anuncios | Anuncios con IA en Panamá \\| Creativos para Meta y Google (56) | Anuncios con IA para tus campañas en Meta y Google (50) | Anuncios con IA en Panamá: 10 creativos en imagen y video para Meta y Google, con revisión humana, 2 rondas de cambios y licencia de uso comercial. (147) | Producción de anuncios con IA | Anuncios con IA | Google Ads; Meta Ads |\n| Videos | Videos con IA para Empresas en Panamá \\| Reels y Anuncios (56) | Videos con IA para empresas, con guion, voz y subtítulos (56) | Videos con IA para empresas en Panamá: reels y anuncios de 15 a 30 s con guion, voz y subtítulos, revisados a mano y con licencia de uso comercial. (147) | Producción de videos con IA | Videos con IA | Meta Ads; Contenido para redes |\n| Fotografía de producto | Fotografía de Producto con IA en Panamá \\| Catálogo y Redes (58) | Fotografía de producto con IA a partir de tus fotos (51) | Fotografía de producto con IA en Panamá: 10 fotos en 3 escenarios a partir de tus fotos reales, para catálogo, web y redes, con revisión humana. (144) | Fotografía de producto con IA | Fotografía de producto con IA | Tiendas online; Meta Ads |\n| Avatares y voz | Avatar con IA y Voz en Off en Panamá \\| Presentador Virtual (58) | Avatar con IA: un presentador virtual para tus videos (53) | Avatar con IA en Panamá: un presentador virtual con voz en español para tus videos, con guion y subtítulos. No clonamos a nadie sin su permiso. (143) | Videos con avatar e IA | Avatares y voz con IA | Contenido para redes; IA para empresas |\n\nAntes del commit, el dueño revisa el texto de las 4 páginas en capturas del preview local (como el resto del contenido, nada se publica sin su permiso, D47)."},{"oldText":"Cada página, con los mismos campos que `marketing/google-ads-panama` (slug, title, description, lead, breadcrumb, service, serviceKey, portada, anatomia, blocks):","newText":"Cada página, con los mismos campos y en el mismo orden que `marketing/google-ads-panama` (`marketing.ts:160-170`: slug, parent, anatomia, serviceKey, title, description, h1, breadcrumb, service, lead, portada, blocks), más `cta: { h2, wa, boton }` como las hermanas con clave `definir` (`marketing.ts:728`). Sin `cta.boton`, `[...slug].astro:35` pondría el rótulo de la clave («Ayúdame a definir mi proyecto»). `boton`: «Cotizar mis anuncios con IA», «Cotizar mis videos con IA», «Cotizar mis fotos de producto», «Cotizar mi video con avatar»; `wa` nombra el servicio y no lleva cifra (D23):"},{"oldText":"respuesta citable de 40-60 palabras con «Actualizado el 17/10»;","newText":"respuesta citable de 40-60 palabras con `fecha` igual al día en que se escribe el texto, en formato AAAA-MM-DD (la frase «Actualizado el …» la pinta `Blocks.astro:218` a partir de `fecha`; no se escribe en el texto), y con la cifra «desde $X» y su alcance (D23), porque responde la pregunta GEO de precio;"},{"oldText":"- Comparación (bloque `compare`, igual que en `marketing/google-ads-panama`, `marketing.ts` cerca de la línea 310): 5 criterios fijos en las 4 páginas, cada uno con `fuente: { slug, label }` hacia la página o sección de este sitio donde se publica la práctica: «Precio publicado» → `precios`; «Revisión humana de cada pieza» → la misma página (sección Qué incluye); «Derechos de uso por escrito» → la misma página (sección Qué no incluye y derechos); «Archivos finales entregados» → la misma página (Entregables); «Cotización cerrada por escrito» → `como-trabajamos`. No se compara contra competidores con nombre.","newText":"- Comparación (bloque `compare`, igual que en `marketing/google-ads-panama`, `marketing.ts` cerca de la línea 310, con `otraCotizacion: true` como sus hermanas, `marketing.ts:303`): 5 criterios fijos en las 4 páginas. `fuente` (`CompareRow`, `src/lib/types.ts:90-94`) se pinta con `url(slug)` y sin ancla (`Blocks.astro:319`), así que solo la lleva el criterio publicado en otra página: «Cotización cerrada por escrito» → `{ slug: 'como-trabajamos', label: 'Cómo trabajamos' }` (`core.ts:9`). «Precio publicado» va sin `fuente`, porque `/precios/` no publica estos paquetes: su `nosotros` dice «Sí: desde $X, arriba en esta página». «Revisión humana de cada pieza», «Licencia de uso comercial por escrito» y «Archivos finales entregados» se prueban en la misma página y también van sin `fuente`: su `nosotros` nombra la sección («ver Qué incluye», «ver Qué no incluye», «ver Entregables»). «Licencia de uso comercial por escrito» (no «derechos»: lo hecho solo con IA puede no tener protección de autor, así que se da licencia de uso, no exclusividad) solo se publica después de leer los términos de uso comercial de cada herramienta (Kling y `nano-banana-pro` vía fal, el plan de Higgsfield) y anotarlos en D52; si alguna no permite el uso comercial, el criterio dice qué se puede usar y qué no. No se compara contra competidores con nombre."},{"oldText":"- Schema: Service con Offer (precio de #1), FAQPage con el mismo texto de las preguntas, ImageObject de la foto de portada.","newText":"- Schema: el Service lleva dos ofertas con el mismo monto, y las dos dan la cifra en `priceSpecification.minPrice`, no en `price`: `offers`, que sale del `receipt` (`src/lib/schema.ts:127-135`, el campo que lee `validar-marcador.mjs:166`), y el OfferCatalog de `hasOfferCatalog`, que sale de `service.catalogo: ['<clave de precio>']` (`schema.ts:190-202`, que solo acepta claves de `confirmados`). Además, FAQPage con el mismo texto de las preguntas y `primaryImageOfPage` (ImageObject) de la foto de portada, que sale sola de `HERO_SLUGS`.\n- Bloque `receipt` (tipo en `src/lib/types.ts:22`): `titulo` con el nombre del servicio; `fecha` igual al día en que se escribe; `precio: { estado: 'confirmado', desde: '$450', unidad: 'por paquete de 10 creativos' }` con la cifra igual al `monto` de su clave (`$400` por paquete de 4 videos, `$250` por paquete de 10 fotos, `$150` por video, o lo que se decida en la «Puerta del dueño»); `plazo` obligatorio, propuesto en días hábiles desde que llega el material y se aprueba el guion (anuncios 7, videos 7, fotos 5, avatar 3) y confirmado en la «Puerta del dueño»; `medicionId: '<pagina>-lcp'` (`anuncios-ia-lcp`, `videos-ia-lcp`, `fotos-ia-lcp`, `avatar-ia-lcp`), como los 27 recibos que ya existen, con su fila escrita en #9 por `node scripts/medir.mjs http://localhost:4602/marketing/<slug>/ --id <id> --escribir` (D47; la medición no se muestra al visitante desde D49); `pie` con lo que el precio no incluye (inversión en pauta, locución humana, uso de imagen de personas reales).\n- Prueba social: `{ type: 'blank', punto: 'prueba', h2: 'Resultados de clientes' }`, como en `crecimiento.ts:171`, porque no hay casos de IA de clientes con permiso."},{"oldText":"- `src/data/formulario.json`: las 4 claves nuevas con sus preguntas; `FORMULARIO.md` regenerado (`node scripts/gen-formulario-md.mjs`).","newText":"- `src/data/formulario.json` (opción por defecto de la «Puerta del dueño»): no se crean claves nuevas, porque una clave nueva obliga a subir el flujo de n8n a Hetzner (`docs/contacto-n8n/armar-correo.js:66-71` manda a «definir» cualquier clave que no conoce). En `paginas` se agregan las 4 rutas con claves que ya existen: anuncios → `pauta`; videos, fotografía de producto y avatar → `definir`, igual que `marketing/contenido-redes-sociales-panama`. El campo `origen` del envío ya dice desde qué página llegó la consulta. `FORMULARIO.md` regenerado con `node scripts/gen-formulario-md.mjs` y `--check` en verde."},{"oldText":"- `scripts/paginas-comerciales.json`: `{ \"slug\": ..., \"tipo\": \"servicio\", \"fase\": \"2b\", \"precio\": \"confirmado\" }` para cada una.\n- `docs/specs/rediseno-elementoweb/KEYWORDS.md`: 4 filas en «Asignación» y 2 preguntas en el panel GEO: «¿Quién hace videos con IA para empresas en Panamá?» → videos; «¿Cuánto cuesta un anuncio hecho con IA en Panamá?» → anuncios.","newText":"- `scripts/paginas-comerciales.json`: `{ \"slug\": ..., \"tipo\": \"servicio\", \"fase\": \"2b\", \"precio\": \"confirmado\" }` para cada una.\n- `related` de cada página nueva: las otras 3 páginas de IA creativa, el hub y las 2 páginas de la columna «`related` fuera de IA creativa» de la tabla de arriba. Con el hub, `/servicios/`, `/inteligencia-artificial-para-empresas-panama/` y sus 3 hermanas, cada una recibe enlaces desde el `<main>` de al menos 5 páginas distintas, por encima de `minEntrantes: 3` (`scripts/paginas-comerciales.json:6`, `scripts/validar-marcador.mjs:268-273`).\n- `docs/specs/rediseno-elementoweb/KEYWORDS.md`: 4 filas en «Asignación» con su columna «Reservadas a otra página»: Anuncios → «meta ads panamá; facebook ads panamá (pauta social); google ads panamá (Google Ads)»; Videos → «reels para redes; creación de contenido para instagram (contenido para redes)»; Fotografía de producto → «diseño gráfico para redes (contenido para redes)»; Avatares y voz → «chatbot con ia (chatbots); asistente virtual con ia (IA para empresas)». La fila de `/marketing/` suma a sus reservadas las 4 palabras principales nuevas con la etiqueta «(IA creativa)», para que el hub no compita con ellas. 4 filas en el «Apéndice: metadatos actuales» con el title, la descripción y el H1 publicados. El encabezado del archivo (línea 5) pasa de «34 páginas» a 38 y de «25 servicios» a 29. El panel GEO de 10 preguntas (D13, `scripts/keywords.test.mjs:95-105`) no cambia; las 2 preguntas nuevas («¿Quién hace videos con IA para empresas en Panamá?» → videos; «¿Cuánto cuesta un anuncio hecho con IA en Panamá?» → anuncios) se miden aparte, en la entrada de TODOS.md."},{"oldText":"- Metadatos nuevos (en `scripts/cambios-permitidos.json` con motivo «D1 del 17-oct-2026»): title ≤ 60 con «marketing digital» y «Panamá»; H1 con «marketing digital»; descripción ≤ 155 que nombre pauta, contenido e IA creativa. Fila de `/marketing/` en KEYWORDS.md actualizada (sigue dueña de «marketing digital panamá»).\n- Bloque nuevo «Producción con IA» después de los 6 servicios actuales, con las 4 páginas (h3, una línea, enlace).\n- ItemList del schema con los 10 servicios.\n- Respuesta citable actualizada con fecha.\n- Los 6 enlaces actuales (líneas 87-92) no cambian.","newText":"- Metadatos: el title («Marketing Digital y Pauta en Panamá | Google, Meta y Más», 56) y el H1 («Marketing digital que trae clientes») ya cumplen y no cambian, aunque D52.1 lo permite: así no se mueve una URL que ya tiene impresiones. Cambia la descripción, que hoy tiene 156 caracteres y no nombra la IA creativa: «Marketing digital en Panamá: Google Ads, Meta Ads, contenido, email y WhatsApp masivo, más anuncios, videos y fotos hechos con IA y revisados a mano.» (149). En el schema solo cambia `WebPage.description` (`schema.ts:168`), que copia esa descripción; el bloque nuevo y la respuesta citable no entran al JSON-LD y el hub no suma preguntas frecuentes. En `scripts/cambios-permitidos.json` se edita la línea que ya existe para `/marketing/` (línea 72, hoy `\"campos\": [\"schema\"]`): pasa a `\"campos\": [\"description\", \"schema\"]` y su `motivo` suma «D52.1 (17-oct-2026): descripción nueva del hub con la IA creativa». La fila de `/marketing/` en «Asignación» (reservadas) y la del Apéndice (`KEYWORDS.md:143`, descripción) se actualizan en el mismo commit que el snapshot.\n- Bloque `cards` nuevo con h2 «Producción con IA», justo después del bloque `cards` «Qué hacemos en marketing» (`marketing.ts:83-94`), con las 4 páginas (`h3` igual a su etiqueta de `iaCreativa`, una línea de `text`, `link`).\n- Sin ItemList (opción por defecto de la «Puerta del dueño»; la spec aprobada lo pedía): `pageJsonLd` (`src/lib/schema.ts:226-244`) no lo emite en ningún hub y este plan no agrega código de schema; los enlaces del bloque bastan.\n- Respuesta citable actualizada, con `fecha` igual al día en que se escribe.\n- Los 6 enlaces actuales (líneas 87-92) no cambian de destino; solo cambia el texto de las líneas 88 y 90 (ver «Requisitos aceptados en la revisión»)."},{"oldText":"- `src/lib/pages/servicios.ts:160` (bloque Producción): enlace a `marketing/imagenes-con-ia-panama`.\n- Página de IA y automatización: bloque de relacionados con las 4 páginas.\n- `public/llms.txt`: 4 líneas en la sección de servicios.","newText":"- `src/lib/pages/servicios.ts:10` (`catalogGroups`, el bloque «Todo lo que ofrecemos» de `/servicios/`): grupo nuevo «Producción con IA» (`hub: 'marketing'`) con las 4 páginas. La tarjeta de Fotografía de producto con IA y la página dicen, sin cifra, que el set de imágenes para una web nueva (bloque Producción, US$ 100) es otro servicio que el paquete de fotos de producto. El bloque `production` no se toca: lo comparten `/servicios/` (`servicios.ts:160`), `/precios/` (`precios.ts:135`) y `core.ts:49`.\n- `src/lib/pages/ia-empresas.ts:196` (bloque `related` de `/inteligencia-artificial-para-empresas-panama/`): suma las 4 páginas.\n- `public/llms.txt`: 4 líneas en «## Mapa de servicios», debajo de la de Automatizaciones con n8n (línea 84), con el formato `- [Nombre](URL): una línea con su precio («desde $450 por paquete de 10 creativos», en el mismo formato que `llms.txt:59-60`)`, porque `/precios/` no los publica. La línea 64 («Los precios están en [Precios]») suma que los paquetes de IA creativa tienen su precio en su propia página, y la línea de Marketing de «## Servicios» (línea 55) suma «y producción con IA»."},{"oldText":"3. `node scripts/validar-marcador.mjs` da 9/9 en las 4 páginas nuevas.","newText":"3. `node scripts/validar-marcador.mjs` sale con 0 con las 4 páginas nuevas en el manifiesto: cada punto del marcador tiene su evidencia, salvo «prueba», declarado vacío con su bloque `blank`; y cada página recibe al menos 3 enlaces de contenido (`minEntrantes`)."},{"oldText":"6. `node scripts/seo-congelado.mjs` pasa; el único cambio de metadatos en páginas existentes es `/marketing/`, declarado en `scripts/cambios-permitidos.json`.\n7. Todo «desde $X» de las 4 páginas sale de una clave de `confirmados` en `precios.json`; ningún precio está escrito a mano en `marketing.ts`.\n8. Cada ejemplo y foto publicados tienen fila en `audit/imagenes-ia-2026-10.json` (si costó en fal) y en el `CREDITOS-IA.json` de su carpeta; la suma de la tanda es ≤ US$ 15.","newText":"6. `node scripts/seo-congelado.mjs`, antes de `--actualizar`, sale con exactamente 4 errores «URL nueva que no estaba en el snapshot» (`seo-congelado.mjs:29`), uno por página nueva, y `/marketing/` aparece solo como cambio permitido de `description` y `schema`. Si sale cualquier otro error, se para: no se declara sin revisarlo. Después se revisa que el diff de `audit/seo-snapshot.json` suma esas 4 URL y cambia `/marketing/`, nada más; se corre `node scripts/seo-congelado.mjs --actualizar`, y `node scripts/seo-congelado.mjs` sale con 0. El aviso «permiso sin uso» que da después para `/marketing/` es esperado: el archivo conserva los permisos de la fase 2 igual que hoy.\n7. Toda cifra `$N` del `<main>` de las 4 páginas es el `monto` de su clave de `precios.json`. Eso incluye la portada, la respuesta citable y el «desde $X» con alcance que pide D23, y el comparador. La prueba sobre `dist/` lo comprueba igual que la prueba (b) de `portada.test.mjs:213`, y comprueba también que las dos `priceSpecification.minPrice` del Service (`offers` y `hasOfferCatalog`) son ese `monto`; `validar-marcador.mjs:164-166` lo acepta. El mensaje de WhatsApp (`cta.wa`) no lleva cifra (D23).\n8. Cada ejemplo, póster, video y foto publicados tienen su fila de créditos (`public/images/ejemplos/CREDITOS.json`, `public/videos/ia-creativa/CREDITOS-IA.json` o `public/images/hero/CREDITOS-IA.json`) y, si costó, su fila en `audit/imagenes-ia-2026-10.json`; la suma de la tanda es ≤ US$ 15. Una prueba unitaria lo comprueba sobre los archivos (cada archivo nuevo de esas carpetas tiene su fila; `tandas[\"marketing-ia\"].gastado` es la suma de las filas con `tanda` y no pasa de 15; `gastado` es la suma de todas las filas). Una prueba sobre `dist/` comprueba que cada `src`, `poster` e `img src` del `<main>` de las 4 páginas existe en `dist/`, que cada `.mp4` pesa 2 MB o menos y que cada imagen de ejemplo pesa 80 KB o menos."},{"oldText":"9. La lista `marketing` de `site.ts` sigue con sus 6 enlaces y `node --test scripts/portada.test.mjs` pasa sin cambios en sus pruebas de la sección Marketing.\n10. `node scripts/qa-a11y.mjs` sale con 0 tipos de problema y `node scripts/qa-lcp.mjs` pasa con las 4 páginas como estrictas (anatomía v2).\n11. La hoja compartida de CSS mantiene el mismo conjunto de selectores: línea base = `git worktree add ../elementoweb-base <SHA previo a la épica>`, `npm ci` y `npm run build` en esa carpeta; comparación = `node scripts/selectores-hoja.mjs ../elementoweb-base/dist dist` (script nuevo de la épica: extrae los selectores de `dist/_astro/*.css` de cada build, imprime `+N −M` y sale con 1 si N o M no es 0). Ni el menú ni el pie agregan utilidades.","newText":"9. La lista `marketing` de `site.ts` sigue con sus 6 enlaces, la sección Marketing de la portada sigue con sus 6 módulos y `node --test scripts/portada.test.mjs` pasa. Su prueba 8 solo cambia para excluir las 4 URL de IA creativa (lista literal en la prueba), declarada según la regla 3.\n10. `node scripts/qa-a11y.mjs` sale con 0 tipos de problema, con `/marketing/` sumado a su lista fija (`qa-a11y.mjs:16-17`; hoy no lo recorre porque está en fase 5), y `node scripts/qa-lcp.mjs` pasa con las 4 páginas como estrictas (anatomía v2). `qa-lcp.mjs` suma para esas 4 rutas la medida de primera pantalla que hoy solo hace en `/` (`qa-lcp.mjs:47-58`), con los selectores de `PortadaServicio.astro:31-35`: a 1440×900, `.ew-hero__h1`, `[data-score=\"precio\"]` y `.ew-hero .ew-btn--primary` terminan dentro de la pantalla; a 390×844, `.ew-hero .ew-btn--primary`. Si una página no cumple, se acorta su H1 o su bajada, no se cambia la medida. Los dos cambios de validador se declaran según la regla 3.\n11. La hoja compartida de CSS no gana utilidades que salgan del código. Línea base: `git worktree add ../elementoweb-base <SHA previo a la épica>`, luego `npm ci` y `npm run build` en esa carpeta. Comparación: `node scripts/selectores-hoja.mjs ../elementoweb-base/dist dist`, un script nuevo de la épica.\n    - El script extrae los selectores de `dist/_astro/*.css` de cada build e imprime `+N −M`. Para cada selector nuevo, imprime el archivo donde `git grep -lw <clase>` encuentra su clase.\n    - Sale con 1 solo si una clase nueva aparece en `src/`. Las que solo salen de textos de `docs/`, `audit/` o `TODOS.md` se listan como aviso: Tailwind 4 lee todo archivo que git no ignora (`src/styles/global.css:1`).\n    - Si la clase sale solo del texto de `src/lib/pages/*.ts` (una palabra del contenido igual a una utilidad, como «italic»), se cambia la palabra o se declara en el resumen con su peso.\n    - Una prueba sobre `dist/` comprueba que los enlaces nuevos del menú y del pie llevan exactamente las mismas clases que los de marketing."},{"oldText":"14. No se degrada nada existente: las 252 páginas previas solo cambian en menú, pie y, en `/marketing/` y `/servicios/`, en lo declarado.","newText":"14. No se degrada nada existente. Las páginas previas solo cambian en menú y pie, salvo estas 5, que cambian solo en lo declarado:\n    - `/marketing/`: descripción, schema, respuesta citable, bloque nuevo y 2 frases.\n    - `/servicios/`: grupo del catálogo y texto de la tarjeta de Facebook e Instagram Ads (`servicios.ts:53`).\n    - `/marketing/google-ads-panama/` y `/marketing/facebook-instagram-ads-panama/`: un relacionado.\n    - `/inteligencia-artificial-para-empresas-panama/`: 4 relacionados.\n\n    Verificación: con la línea base del AC11 (`../elementoweb-base/dist`), un script compara el `<main>` de cada HTML de los dos builds. Solo pueden diferir esas 5 rutas y faltar en la base las 4 nuevas.\n15. Después de publicar (no bloquea el cierre de la implementación, que termina con el push aprobado): la entrada de medición de TODOS.md lleva la fecha del día P y la lectura GEO del día P. La lectura la hace Claude en el navegador del dueño, con su permiso, o el dueño, con el método de `docs/geo-panel-preguntas.md`."},{"oldText":"| Unidad | `iaCreativa`: cada slug existe como página en `marketingPages`; las 4 claves nuevas de `precios.json` tienen `fuente` y `desde`; filas nuevas de KEYWORDS sin principales repetidas | +3 |\n| Sobre `dist/` | Por página nueva: title, H1, description, canonical, Service+Offer, FAQPage = preguntas visibles, ImageObject; el hub enlaza las 4 y su ItemList tiene 10; menú y pie con el grupo «Producción con IA» en una página cualquiera | +6 |\n| Navegador | `qa-a11y`, `qa-lcp` (estrictas por anatomía v2) y `check-links` cubren las 4 páginas al entrar al manifiesto | 0 nuevas, cobertura ampliada |","newText":"| Unidad, en `scripts/marketing-ia.test.mjs`. `node --test` lee los `.ts` como texto, igual que `paginasDelRegistro` (`datos.test.mjs:17-24`), porque no puede importar `site.ts` | Los 4 slugs de `iaCreativa` (`site.ts`) existen como `slug:` en `src/lib/pages/marketing.ts`. Los 4 montos exactos de las claves nuevas, al estilo de `datos.test.mjs:101-106`. Las 4 filas de KEYWORDS existen con su principal y sus reservadas. Créditos y gasto de la tanda (AC8) | +4 |\n| Sobre `dist/`, en el mismo archivo, con la guarda `conDist` de `portada.test.mjs:188-206` (sin `dist/` o sin `VERIFY=1` se salta y lo dice) | Por página nueva: title, H1, description y canonical; `data-page-type=\"servicio-con-precio\"`; toda cifra `$N` del `<main>` y las dos `minPrice` iguales al `monto` de su clave; FAQPage = preguntas visibles; `primaryImageOfPage`; texto del botón principal = su `cta.boton`. El `<main>` del hub y el de `/servicios/` ya no dicen «El canal con mejor retorno» ni «creativos que detienen el scroll» (sin distinguir mayúsculas). Google Ads y Meta Ads enlazan a Anuncios con IA; `/servicios/` e IA para empresas enlazan las 4. Menú y pie con el grupo «Producción con IA» y las mismas clases que los enlaces de marketing. Los tipos `foto` y `video` pintan su pie «Ejemplo ·»; el `<video>` lleva `preload=\"none\"` y `poster`, sin `autoplay`, y `muted` solo si no tiene voz. Cada `src`, `poster` e `img src` existe, cada `.mp4` pesa ≤ 2 MB y cada imagen de ejemplo ≤ 80 KB. Cada `<video>` tiene su enlace de respaldo al mismo `src`. La línea de frontera y el bloque «¿Cuándo te basta la herramienta gratis?» existen en las 4 páginas | +14 |\n| Navegador | `qa-a11y` (con `/marketing/` en su lista fija), `qa-lcp` (estrictas por anatomía v2, con la medida de primera pantalla de AC10) y `check-links` cubren las 4 páginas al entrar al manifiesto | 0 nuevas, cobertura ampliada |\n| Comparación de builds | `scripts/selectores-hoja.mjs` (AC11) y la comparación del `<main>` de AC14, las dos contra `../elementoweb-base/dist` | 2 scripts nuevos |\n| Cambios declarados (regla 3, una línea cada uno en el resumen) | Ver la lista de abajo | 6 pruebas, 2 validadores, 1 snapshot, 1 permiso, 1 umbral |\n\nCambios declarados (regla 3):\n- Pruebas: `portada.test.mjs:447-453` (la 8 excluye las 4 URL de IA creativa); `validar-marcador.test.mjs:248` (25 → 29 páginas de servicio); `kind.test.mjs:23` (25 → 29, y su mensaje «las 24 páginas…» se corrige); `datos.test.mjs:58` (25 → 29 rutas en `formulario.paginas`); `keywords.test.mjs:37-39` y `:107-109` (nombre y cuenta 34 → 38 en la Asignación y el Apéndice).\n- Validadores: `qa-lcp.mjs` (primera pantalla de las 4 rutas) y `qa-a11y.mjs` (`/marketing/` en la lista fija).\n- Snapshot: `audit/seo-snapshot.json`, reescrito con `--actualizar` según AC6.\n- Permiso: `scripts/cambios-permitidos.json:72`, editado para `/marketing/`.\n- Umbral: `tope` de `audit/imagenes-ia-2026-10.json`, de 10 a 25.\n\nNo cambian `datos.test.mjs:14,29` ni `n8n.test.mjs:137` (no hay claves nuevas) ni ningún máximo de `scripts/presupuestos.json`."},{"oldText":"Todo es aditivo salvo los metadatos de `/marketing/` y el menú y pie globales. Revertir = `git revert` de los commits de la épica, `npm run verify`, push con permiso del dueño, `gh run watch <id> --exit-status`, `bash scripts/check-prod.sh`. Los archivos de `public/images/ia-creativa/` y `public/videos/ia-creativa/` se van con el revert.","newText":"Todo es aditivo salvo la descripción de `/marketing/` y el menú y pie globales. El registro de gasto (`audit/imagenes-ia-2026-10.json`) y D52 van en un commit propio, aparte de los del sitio, porque registran dinero ya gastado (D46) y no se revierten. Revertir = `git revert` de los commits del sitio (sin ese), `npm run verify`, push con permiso del dueño, `gh run watch <id> --exit-status`, `bash scripts/check-prod.sh`. Las imágenes nuevas de `public/images/ejemplos/`, `public/images/hero/` y `public/images/og/` y los videos de `public/videos/ia-creativa/` se van con el revert. Si se revierte después del día P, las 4 URL ya pueden estar indexadas: el mismo commit suma en `nginx.conf` un 301 de cada una a `/marketing/`, como las URL retiradas que ya redirige (`nginx.conf:58-64`)."},{"oldText":"| `src/lib/pages/marketing.ts` | 4 páginas nuevas; hub (`:24`) con bloque «Producción con IA», ItemList y metadatos |","newText":"| `src/lib/pages/marketing.ts` | 4 páginas nuevas; hub (`:24`) con bloque «Producción con IA», descripción nueva, respuesta citable y 2 frases sin superlativos; un relacionado a Anuncios con IA en Google Ads y Meta Ads |"},{"oldText":"| `src/lib/pages/servicios.ts:160` | Enlace a Imágenes con IA |\n| `src/data/formulario.json`, `docs/.../FORMULARIO.md` | 4 claves de servicio |","newText":"| `src/lib/pages/servicios.ts:10,53` | Grupo «Producción con IA» en `catalogGroups`; texto de la tarjeta de Facebook e Instagram Ads sin «detienen el scroll» |\n| `src/lib/pages/ia-empresas.ts:196` | 4 relacionados |\n| `src/lib/types.ts`, `src/components/Ejemplo.astro`, `src/styles/molde-kredit.css` | Tipos `foto` y `video` de «Así se vería» y sus estilos |\n| `src/lib/heroes.ts` (generado), `src/lib/img.ts:110` | 4 portadas en `HERO_SLUGS` y `OG_SLUGS`; sus textos alternativos en `HERO_ALTS` |\n| `src/data/mediciones.json` | 4 mediciones de LCP escritas por `scripts/medir.mjs` |\n| `src/data/formulario.json`, `docs/.../FORMULARIO.md` | 4 rutas en `paginas` con claves que ya existen (`pauta`, `definir`); sin claves nuevas |"},{"oldText":"| `docs/specs/rediseno-elementoweb/KEYWORDS.md` | 4 filas, fila de `/marketing/`, 2 preguntas GEO |","newText":"| `docs/specs/rediseno-elementoweb/KEYWORDS.md` | 4 filas en Asignación y 4 en el Apéndice, con sus reservadas; filas de `/marketing/`; encabezado de 34 a 38 páginas y de 25 a 29 servicios; el panel GEO de 10 no cambia |\n| `audit/seo-snapshot.json` | Reescrito con `--actualizar` según AC6 |\n| `TODOS.md` | Entrada de medición, los 4 ids nuevos en «Volver a medir en producción las páginas del molde Kredit» (`TODOS.md:40-53`) y las diferidas |"},{"oldText":"| `docs/specs/rediseno-elementoweb/DECISIONES.md` | D52 (decisiones del 17-oct y fuentes de precios) |","newText":"| `docs/specs/rediseno-elementoweb/DECISIONES.md` | D52 (decisiones del 17-oct y de la puerta del dueño, cálculo de precios, términos de uso de las herramientas, fuentes del bloque de herramientas gratis, créditos de Higgsfield, regla de modelo, fase 2b, revisión del texto de Meta y aprobación de la hoja de contactos con su fecha) y 2 filas en la «Tabla de vigencia» (línea 47): «D46 (tope y modelo) · Ampliada para la tanda de IA creativa · D52» y «D36 · Excepción en la descripción de `/marketing/` · D52» |"},{"oldText":"| `public/images/hero/`, `public/images/ia-creativa/`, `public/videos/ia-creativa/` | Fotos y ejemplos con su CREDITOS-IA.json |\n| `audit/imagenes-ia-2026-10.json` | Filas de gasto; tope de la tanda US$ 15 |\n| `scripts/*.test.mjs` | Pruebas del Testing Plan, cada una con su tarjeta en comentario |\n| `scripts/selectores-hoja.mjs` | Nuevo: compara el conjunto de selectores de la hoja compartida entre dos `dist/` |","newText":"| `public/images/hero/`, `public/images/og/` | 4 portadas y sus recortes, con su fila en `public/images/hero/CREDITOS-IA.json` |\n| `public/images/ejemplos/` y su `CREDITOS.json` | Imágenes y pósters de ejemplo (y la foto «antes», con su licencia si es de stock) |\n| `public/videos/ia-creativa/` y su `CREDITOS-IA.json` | 4 videos de ejemplo |\n| `audit/imagenes-ia-2026-10.json` | Filas de gasto con `tanda`; `tope` de 10 a 25; bloque `tandas` con el tope de US$ 15 (commit propio) |\n| `scripts/marketing-ia.test.mjs` | Nuevo: las pruebas unitarias y sobre `dist/` del Testing Plan, cada una con su tarjeta en comentario |\n| `scripts/*.test.mjs` | Las pruebas modificadas que lista el Testing Plan |\n| `scripts/qa-lcp.mjs`, `scripts/qa-a11y.mjs` | Primera pantalla de las 4 páginas; `/marketing/` en la lista fija |\n| `scripts/selectores-hoja.mjs` | Nuevo: compara los selectores de la hoja compartida entre dos `dist/` y dice de qué archivo sale cada clase nueva |\n| `scripts/comparar-main.mjs` | Nuevo: compara el `<main>` de cada HTML entre dos `dist/` (AC14) |"},{"oldText":"- Blog, campañas pagadas, versiones en inglés, medición de volumen con el Planificador.","newText":"- Blog, campañas pagadas, versiones en inglés, medición de volumen con el Planificador.\n- Claves nuevas del formulario y subir el flujo de n8n a Hetzner, salvo que el dueño elija esa opción en la «Puerta del dueño».\n- ItemList en el schema de los hubs, con la misma salvedad.\n- Sumar los 4 paquetes a `/precios/` (el bloque `production` es compartido).\n- Superlativos fuera del radio: «Creativos que detienen el scroll» en la página de Meta Ads (`marketing.ts:423`) y «El canal con mejor retorno» en la descripción congelada de Email marketing (`marketing.ts:738`) y en el blog; van a TODOS.md.\n\n## Puerta del dueño (se decide antes de construir)\n\n| # | Decisión | Por defecto | Alternativa | Qué cambia con la alternativa |\n|---|---|---|---|---|\n| G1 | Precios (D52.3) | Los montos confirmados el 17-oct (450, 400, 250 y 150) | (a) Otros montos confirmados. (b) No confirmar todavía: rama «propuesto» | (a) #1 escribe esos montos y todo lo demás sigue igual. (b) Las 4 claves van a `propuestos` en `precios.json`; `receipt.precio.estado: 'propuesto'` con `desde` como referencia; sin `service.catalogo` ni Offer; manifiesto con `\"precio\": \"propuesto\"`; el cuerpo dice «Referencia publicada: desde $X; se confirma en tu cotización» (D23); `llms.txt` sin cifra; las pruebas esperan `data-page-type=\"servicio-cotizado\"` y ninguna `minPrice` |\n| G2 | Claves del formulario | Claves existentes (`pauta`, `definir`) | 4 claves nuevas con sus preguntas | Subir el flujo a Hetzner con `node scripts/subir-flujo-contacto.mjs` (permiso del dueño); `datos.test.mjs:14,29` (14 → 18 claves), `n8n.test.mjs:137` y `datos.test.mjs:76-82` (`botonPagina` de cada clave) cambian; `FORMULARIO.md` crece |\n| G3 | ItemList en el hub | Sin ItemList | ItemList con los 10 servicios | Código nuevo en `src/lib/schema.ts` para los hubs, su prueba sobre `dist/` y el permiso `schema` de `/marketing/`, que ya existe |\n| G4 | Foto «antes» de Fotografía de producto | Foto de stock con licencia libre, descargada con permiso del dueño | Una foto de celular del dueño | Ninguno en el código; cambia la fila de `CREDITOS.json` |\n| G5 | Plazos del recibo | 7, 7, 5 y 3 días hábiles | Los que diga el dueño | Solo el texto de `plazo` |\n| G6 | Slug de la tercera página | `marketing/fotografia-de-producto-con-ia-panama` | `marketing/imagenes-con-ia-panama` con principal «imágenes con ia para empresas» | Cambian el slug en todo el plan, la fila de KEYWORDS y el título y H1 de esa página |\n| G7 | Qué significa «pro» en el hub (D52.1) | Descripción nueva, bloque «Producción con IA», respuesta citable y frases sin superlativos | Hub con una oferta integrada (pauta, creativos con IA y reporte como plan mensual) | Contenido nuevo del hub y, si lleva precio, una clave nueva en `precios.json`; va junto con U3 |\n| G8 | Cifra de la frontera con la gestión de Meta Ads | Sin cifra: la gestión ya incluye los creativos del mes; el paquete es para quien pauta por su cuenta o necesita una tanda de lanzamiento | Cuántos creativos al mes incluye la gestión | Una cifra en la línea de frontera de Anuncios con IA y de Meta Ads (tocar el contenido de Meta Ads está fuera del alcance de esta épica: pide decisión) |\n| U1 | Medir la demanda antes de construir (las dos voces CEO, User Challenge) | Construir según D52.2 | Antes de fijar los slugs: Planificador de Google Ads (Panamá) de las 4 palabras y sus alternativas por categoría, lectura manual de la primera página de Google y, si se puede, 5 a 10 conversaciones con prospectos (Nicole) | El arranque se mueve 1 a 3 días; los slugs y las palabras principales pueden cambiar; si una palabra trae solo herramientas, la principal pasa a la categoría del servicio y la IA queda como diferenciador |\n| U2 | Número de páginas (las dos voces CEO, User Challenge) | 4 páginas (D52.2) | 1 página «Producción con IA» con 4 paquetes, o 2 (Anuncios con IA y Contenido con IA) | Cambian slugs, KEYWORDS, los conteos de las pruebas (29 → 26 o 27), el bloque del hub y el catálogo; dividir después es barato y fusionar después cuesta redirecciones 301 |\n| U3 | Oferta central (las dos voces CEO, User Challenge) | Paquetes de un solo pago; cada página dice «también como plan mensual junto a tu pauta; se cotiza», sin cifra | Plan mensual de creativos con IA atado a la pauta como oferta principal, con precio | E9 sale de TODOS y entra al plan: clave nueva en `precios.json`, recibo y textos de las 4 páginas y del hub |\n| T1 | Menú y pie (gusto, voz CEO de Claude) | Se incluyen (#8, spec aprobada) | Sacarlos de esta épica y sumarlos cuando las páginas tengan impresiones a P + 56 | Sin #8: no cambia el HTML de todo el sitio durante las lecturas de la portada v2 (29-oct y 12-nov) y de CyberSource (27-oct y 10-nov); AC14 y la prueba de clases del menú y el pie se reducen |\n| T2 | Rótulo en las portadas hechas con IA (gusto, voz CEO de Claude) | Sin rótulo, como las demás portadas (D45) | Pie visible «Foto hecha con IA por Elemento Web» en las 4 portadas | Un elemento nuevo en la portada de esas 4 páginas, con su prueba |\n| T3 | Ejemplos con marcas propias (gusto, voz CEO de Claude) | «Negocio de ejemplo» ficticio (D52.4) | Ejemplos de Anuncios, Videos y Avatar para NousCRM o Elemento Web, pautados en una campaña pequeña | Cambia el texto de los ejemplos; la campaña es gasto aparte y da un caso propio con métricas |\n\n## Requisitos aceptados en la revisión (obligatorios)\n\nSalieron de la revisión CEO del 17-oct-2026. Pesan lo mismo que «Proposed Change»; sus pruebas ya cuentan en el Testing Plan y sus archivos en Files Reference."},{"oldText":"en Anuncios, que el contenido generado con IA se etiqueta cuando Meta lo exige;","newText":"en Anuncios, que el contenido generado con IA se marca cuando la plataforma lo pide (la regla de Meta solo se cita con su fuente oficial enlazada; ver «Requisitos aceptados en la revisión»);"},{"oldText":"| Bloque «Producción con IA» con las 4 páginas, contenido nuevo y metadatos nuevos |","newText":"| Bloque «Producción con IA» con las 4 páginas, contenido nuevo y descripción nueva (title y H1 se quedan, ver #7) |"},{"oldText":"derechos de uso escritos;","newText":"licencia de uso comercial escrita (no exclusividad), con la pregunta frecuente «¿Las piezas son exclusivas?» respondida con honestidad;"},{"oldText":"en Avatares y voz, «no clonamos la voz ni la cara de nadie sin su permiso por escrito».","newText":"en Avatares y voz, «no clonamos la voz ni la cara de nadie sin su permiso por escrito», con el consentimiento escrito que la Ley 81 de 2019 pide para datos personales (ya citada en `marketing.ts`, página de WhatsApp), y que los presentadores de Higgsfield se usan según la licencia de su plan, anotada en D52."},{"oldText":"≥ 6 preguntas frecuentes; formulario con su serviceKey; servicios relacionados.","newText":"el bloque «¿Cuándo te basta la herramienta gratis?» y la línea de frontera con lo que ya se vende (ver «Requisitos aceptados en la revisión»); ≥ 6 preguntas frecuentes, entre ellas «¿Las piezas son exclusivas?» y «¿También como plan mensual?», respondida sin cifra («se cotiza junto a tu pauta»); formulario con su serviceKey; servicios relacionados."},{"oldText":"| #2 y #2b Ejemplos y fotos | 4 h | 40 min |","newText":"| #2 y #2b Ejemplos y fotos (generación, compresión, hoja de contactos para el dueño y repeticiones) | 5 h | 1,5 h más el tiempo de cola de fal y Higgsfield |"},{"oldText":"| #9 Verificación y capturas | 2 h | 30 min |","newText":"| #9 Verificación y capturas (6 pruebas modificadas, 2 validadores, 2 comparaciones de builds, capturas para el dueño) | 3 h | 1 h |"}]} -->

<!-- autoplan-accepted:ceo -->
- Cada una de las 4 páginas nuevas lleva un bloque `receipt` con `precio: { estado: 'confirmado', desde, unidad }`, donde `desde` es el `monto` de su clave de `precios.json` escrito como en las demás páginas (p. ej. `'$450'`), y declara esa clave en `service.catalogo`. Así `pageTypeOf` (`src/lib/pages/kind.ts:13`) la clasifica `servicio-con-precio`, `PrecioPlazo` muestra precio y plazo en la portada (desde D49 el recibo no se pinta como tarjeta, `Blocks.astro:223`) y el schema emite su Offer. Verificación: prueba sobre `dist/` de que las 4 emiten `data-page-type="servicio-con-precio"` y de que el precio de la portada y las dos `priceSpecification.minPrice` del Service (`offers` y `hasOfferCatalog`) son el `monto` de su clave; `validar-marcador.mjs:164-166` acepta el monto.
- La frase sobre etiquetar contenido generado con IA en anuncios solo se publica con la fuente oficial de Meta enlazada en la página; sin fuente leída, se escribe «marcamos el contenido generado con IA cuando la plataforma lo pide» sin atribuir la regla a Meta. Verificación: revisión manual del texto de Anuncios con IA antes del commit, anotada en D52.
- El hub `/marketing/` deja de decir «El canal con mejor retorno» (`marketing.ts:90`, tarjeta de Email marketing) y «creativos que detienen el scroll» (`marketing.ts:88`, tarjeta de Facebook e Instagram Ads), y `/servicios/` deja de decir «creativos que detienen el scroll» (`servicios.ts:53`, la misma tarjeta en `catalogGroups`, que este plan ya edita). El texto nuevo describe el servicio sin superlativos; las páginas de email y Meta Ads conservan sus metadatos congelados. Verificación: prueba sobre `dist/marketing/index.html` y `dist/servicios/index.html` de que ninguna de las dos frases aparece en `<main>`.
- `marketing/google-ads-panama` y `marketing/facebook-instagram-ads-panama` suman a su bloque `related` un enlace a `marketing/anuncios-con-ia-panama`. Verificación: prueba sobre `dist/` de que las dos páginas enlazan esa URL desde `<main>`.
- TODOS.md gana la entrada «Medir las páginas de IA creativa», con la fecha absoluta del día de publicación P escrita al publicar y estas lecturas:
  - Día P y P + 28: las 2 preguntas GEO nuevas («¿Quién hace videos con IA para empresas en Panamá?» y «¿Cuánto cuesta un anuncio hecho con IA en Panamá?»), con el método de `docs/geo-panel-preguntas.md` (sesión nueva, mismos motores, capturas). Van aparte del panel de 10 de D13, que no cambia.
  - P + 28: la inspección de URL de Search Console de las 4 páginas (indexada sí o no) y las impresiones de sus 4 palabras principales. Es la meta de D13 de «indexadas en 4 semanas» (`DECISIONES.md:116`).
  - P + 56: las impresiones por URL de las 4 páginas. Como la línea base es 0, la meta de D13 de «el doble de impresiones» se lee como 1 impresión o más por página, y D52 lo anota.
  - P + 28 y P + 56: las consultas que llegaron desde cada página, contadas por el `origen` de los envíos del formulario (correo de n8n), y los clics de WhatsApp en GA4 si el evento existe; si no existe, se anota y se cuenta solo el formulario.
  - Regla de decisión: si a P + 28 ningún motor cita a Elemento Web y una página no está indexada o tiene 0 impresiones, se adelanta el artículo de blog diferido de esa página y se hace una acción de autoridad del kit (`docs/autoridad/KIT-AUTORIDAD.md`, por ejemplo el alta en Sortlist), porque el freno documentado es la autoridad del dominio, no el contenido.
  - Quién: Claude en el navegador del dueño, con su permiso, o el dueño. No bloquea el cierre de la implementación (AC15).
  - Además, los 4 ids de medición (`anuncios-ia-lcp`, `videos-ia-lcp`, `fotos-ia-lcp`, `avatar-ia-lcp`) se suman a la entrada «Volver a medir en producción las páginas del molde Kredit» (`TODOS.md:40-53`).
  - Verificación: la entrada existe con su fecha, la lectura del día P está anotada y la regla está escrita.
- TODOS.md gana estas entradas diferidas, con contexto y dependencias:
  - «Un artículo de blog por servicio de IA» (P3).
  - «Caso real con piezas de IA de un cliente, con permiso» (P3).
  - «Paquete recurrente de IA creativa atado a la pauta» (P2): es el segundo multiplicador del 10x y necesita que el dueño decida el precio.
  - «Superlativos sin fuente fuera del radio» (P3): `marketing.ts:423`, la descripción congelada de Email marketing (`marketing.ts:738`, cambiarla pide un permiso de D36) y el blog.
  - «Regenerar los ejemplos de IA creativa» (P3): cada 6 meses o cuando cambie el modelo, con su propio tope, porque los ejemplos envejecen con los modelos.
  - «Muestras personalizadas de anuncios con IA para prospectar» (P2): 3 anuncios hechos para un negocio concreto de Panamá, enviados por Nicole, con la página de Anuncios con IA como destino; reusa el patrón de Fábrica de Webs.
- Las 4 páginas llevan una línea de frontera con lo que ya se vende, en el texto y en una pregunta frecuente:
  - Anuncios con IA: la gestión de Meta Ads ya incluye los creativos del mes (`marketing.ts:423-430`); el paquete es para quien pauta por su cuenta o necesita una tanda de lanzamiento.
  - Videos con IA: Contenido para redes ya incluye Reels del mes (`marketing.ts:617-629`); el paquete es para videos de campaña o de producto fuera de ese plan.
  - Fotografía de producto con IA: el set de imágenes para una web nueva (US$ 100) es otro servicio.
  - Verificación: prueba sobre `dist/` de que la línea existe en las 4 páginas.
- Cada página nueva lleva el bloque «¿Cuándo te basta la herramienta gratis?»: cuándo alcanzan las funciones de IA de Meta, Google o Canva y cuándo conviene el servicio (criterio, marca, revisión humana, contexto de Panamá, enlace con la pauta). Solo nombra funciones de esas plataformas leídas en su documentación oficial, con la fuente anotada en D52. Verificación: prueba sobre `dist/` de que el bloque existe en las 4 páginas.
- Antes del commit, el dueño aprueba una hoja de contactos con cada ejemplo, póster y portada generados. Lo que no pasa se regenera dentro del tope de la tanda o se quita. Verificación: la aprobación queda anotada en D52 con la fecha.
- La fila de gasto de cada generación lleva el costo real cobrado, leído del historial de fal (`search_request_history` o el resultado del trabajo) por su `request_id`, no la estimación de `estimate_cost`, que es solo orientativa; el avatar lleva los créditos que descontó Higgsfield. Verificación: la prueba de créditos y gasto de AC8 compara la suma con `tandas["marketing-ia"].gastado`, y cada fila tiene `request_id`.
- El `<video>` del tipo `video` lleva dentro un texto de respaldo con enlace al archivo («Tu navegador no reproduce este video: <a href="…mp4">descárgalo</a>»), para el navegador que no lo reproduce. Verificación: prueba sobre `dist/` de que cada `<video>` de las 4 páginas tiene ese enlace con el mismo `src`.
<!-- /autoplan-accepted:ceo -->

### Fase design: registro de cambios y requisitos aceptados

<!-- autoplan-baseline-edits:design {"sourceSha256":"6c6a2d2c9bd72d530e2e49ed049158a61864b753435899e49c6b1b7cd0867884","replacements":[{"oldText":"| Anuncios | 3 creativos (2 imágenes 4:5 y 1 video vertical de 10 s hecho a partir de una tercera imagen 9:16) para un «negocio de ejemplo» |","newText":"| Anuncios | 3 creativos (2 imágenes 4:5 y 1 video vertical de 10 s hecho a partir de una tercera imagen 9:16) para un «negocio de ejemplo»; el pie del video dice «Ejemplo · anuncio en video de 10 s para Reels e historias» |"},{"oldText":"| Videos | 2 videos verticales de 10 s (producto y ambiente), cada uno a partir de una imagen fija. Son la base visual, sin voz ni subtítulos, y su `pie` lo dice: «Ejemplo · base visual de 10 s hecha con IA; el paquete suma guion, voz y subtítulos» |","newText":"| Videos | 2 videos verticales de 10 s, cada uno a partir de una imagen fija. El primero es una muestra terminada, como lo que se vende: voz en español con `fal-ai/elevenlabs/tts/multilingual-v2` (US$ 0,10 por 1.000 caracteres, unos 3 centavos por 10 s) y subtítulos quemados con el mismo proceso de `fal-ai/whisper` del avatar. El segundo es la base visual de ambiente y su `pie` lo dice: «Ejemplo · base visual de 10 s, sin voz» |"},{"oldText":"La «antes» es una foto real de un producto sin marca, con el origen que se decida en la «Puerta del dueño» (por defecto, una foto de stock con licencia libre de Unsplash o Pexels, descargada con permiso del dueño y acreditada en `public/images/ejemplos/CREDITOS.json`) |","newText":"La «antes» es una foto real de un producto sin marca, con el origen que se decida en la «Puerta del dueño». Por defecto es una foto de celular del dueño, porque se parece a lo que manda un cliente; si no llega antes del build, va una foto de stock con licencia libre de Unsplash o Pexels, descargada con permiso del dueño y acreditada en `public/images/ejemplos/CREDITOS.json`. Las 4 van con el mismo recorte 4:5, la «antes» primero, y cada una lleva su etiqueta «Antes» o «Después» |"},{"oldText":"| Avatares y voz | 1 video de 15-20 s con presentador virtual y voz en español, con subtítulos quemados desde el guion, porque un video con voz necesita subtítulos (WCAG 1.2.2) y así se ve el entregable |","newText":"| Avatares y voz | 1 video vertical 9:16 de 720×1280 y 15-20 s, con presentador virtual y voz en español, subtítulos quemados desde el guion (un video con voz necesita subtítulos, WCAG 1.2.2, y así se ve el entregable) y el guion corregido debajo en un `<details>` «Ver guion». Su póster es el cuadro de 1 s, con el subtítulo a la vista (`ffmpeg -ss 1`) |"},{"oldText":"`{ tipo: 'foto'; img: ImgEjemplo; pie: string }` y `{ tipo: 'video'; src: string; poster: ImgEjemplo; pie: string; voz?: true }`, donde `pie` empieza con «Ejemplo ·».","newText":"`{ tipo: 'foto'; img: ImgEjemplo; pie: string; etiqueta?: 'Antes' | 'Después' }` y `{ tipo: 'video'; src: string; poster: { src: string; width: number; height: number }; pie: string; voz?: true; guion?: string; duracion: number }`, donde `pie` empieza con «Ejemplo ·» y describe lo que se ve (es la alternativa en texto del video sin voz, WCAG 1.2.1). La `etiqueta` se pinta en voz de datos sobre el marco. El póster no lleva `alt`: el `<video>` se describe con `aria-describedby` apuntando a su pie. Debajo del pie, en voz de datos, van la ficha «Video · 10 s · sin voz · 1,4 MB» (o «con voz y subtítulos»), calculada de `duracion`, `voz` y el peso del archivo, y un enlace visible «Descargar MP4» con área de toque de 44 px en compacto. Con `guion`, debajo va `<details><summary>Ver guion</summary>` con el texto, que también leen los buscadores y los asistentes."},{"oldText":"y `muted` solo cuando no tiene `voz`; no lleva `autoplay` ni JavaScript.","newText":"y `muted` solo cuando no tiene `voz`; no lleva `autoplay` ni JavaScript. Su tamaño: `max-height: min(640px, 75vh)`, `width: auto`, `max-width: 100%` y centrado, para que un 9:16 no pase del alto de la pantalla. `columnas` del bloque `ejemplos`: Anuncios 3 (los 2 anuncios y el video en una fila desde 1.024 px), Videos 2, Fotografía de producto 2 (antes y después de a dos) y Avatar 1."},{"oldText":"4 fotos realistas tipo Kredit (personas y lugares de Panamá, luz natural, sin texto ni logos), una por página, con `fal-ai/nano-banana-pro` (US$ 0,15 cada una, dentro de la cuenta de la tanda).","newText":"4 fotos realistas tipo Kredit (personas y lugares de Panamá, luz natural, sin texto ni logos), una por página, con `fal-ai/nano-banana-pro` (US$ 0,15 cada una, dentro de la cuenta de la tanda). Cada una lleva el entregable del servicio en escena, porque `DESIGN.md` pide que la imagen nunca vaya sola y una foto de ambiente no muestra lo que se vende:\n- Anuncios: una persona en un café con el celular mostrando el anuncio de ejemplo.\n- Videos: una vendedora graba un producto con el celular, con el cuadro subtitulado en la pantalla.\n- Fotografía de producto: el producto en una mesa junto a una ventana, con la foto «después» en una laptop.\n- Avatar: una laptop con el cuadro del avatar subtitulado.\n\nLa pantalla de cada foto se compone con la pieza de ejemplo real: se genera con la pantalla en magenta y se rellena con la máscara de `componer-pantallas.mjs`, que se promueve del scratchpad de la portada v2 a `scripts/componer-pantallas.mjs`. `HERO_ALTS` dice que la foto es generada con IA. El `portada.pie` describe la escena; su texto exacto depende de T2."},{"oldText":"| Anuncios | Anuncios con IA en Panamá \\| Creativos para Meta y Google (56) | Anuncios con IA para tus campañas en Meta y Google (50) |","newText":"| Anuncios | Anuncios con IA en Panamá \\| Creativos para Meta y Google (56) | Anuncios con IA listos para Meta y Google (41) |"},{"oldText":"| Videos | Videos con IA para Empresas en Panamá \\| Reels y Anuncios (56) | Videos con IA para empresas, con guion, voz y subtítulos (56) |","newText":"| Videos | Videos con IA para Empresas en Panamá \\| Reels y Anuncios (56) | Videos con IA para empresas, con guion y voz (44) |"},{"oldText":"| Fotografía de producto | Fotografía de Producto con IA en Panamá \\| Catálogo y Redes (58) | Fotografía de producto con IA a partir de tus fotos (51) |","newText":"| Fotografía de producto | Fotografía de Producto con IA en Panamá \\| Catálogo y Redes (58) | Fotografía de producto con IA, desde tus fotos (46) |"},{"oldText":"| Fotografía de producto con IA | Fotografía de producto con IA | Tiendas online; Meta Ads |","newText":"| Fotografía de producto con IA | Fotos de producto con IA | Tiendas online; Meta Ads |"},{"oldText":"| Avatares y voz | Avatar con IA y Voz en Off en Panamá \\| Presentador Virtual (58) | Avatar con IA: un presentador virtual para tus videos (53) |","newText":"| Avatares y voz | Avatar con IA y Voz en Off en Panamá \\| Presentador Virtual (58) | Avatar con IA: tu presentador virtual (37) |"},{"oldText":"| Videos con avatar e IA | Avatares y voz con IA | Contenido para redes; IA para empresas |","newText":"| Videos con avatar e IA | Avatar y voz con IA | Contenido para redes; IA para empresas |\n\nLos H1 son más cortos que el más largo publicado hoy en una página v2 (47 caracteres, Google Ads), para que la primera pantalla de AC10 quepa con su bajada; las etiquetas de `iaCreativa` son las mismas `h3` del hub y caben en una línea del menú móvil. La portada de cada página lleva, como sus hermanas (`marketing.ts:30-38`):\n- `lead`: una bajada de 15 a 20 palabras.\n- `portada.riel`: 4 datos de alcance. Por ejemplo, en Anuncios: Entrega «8 imágenes y 2 videos» · Formatos «Feed, historias y Reels; Display de Google» · Cambios «2 rondas» · Licencia «Uso comercial por escrito».\n- `portada.pie`: describe la escena de la foto.\n- Como máximo 2 notas de `receipt.pie` en la portada, solo las que apliquen a esa página."},{"oldText":"- Bloques: respuesta citable de 40-60 palabras con `fecha` igual al día en que se escribe el texto","newText":"- Orden de los bloques, igual en las 4 páginas: `answer` → `receipt` → `ejemplos` («Así se vería») → `blank` (prueba) → `includes` → `steps` (proceso y plazo) → `tabla` «¿Cuándo te basta la herramienta gratis?» → `compare` → `faq` → `service-form` → `related`. Los ejemplos van antes de la caja de prueba porque en un servicio de producción visual el trabajo es la prueba (`DESIGN.md`: la prueba va después de la respuesta).\n- Bloques: respuesta citable de 40-60 palabras con `fecha` igual al día en que se escribe el texto"},{"oldText":"- Prueba social: `{ type: 'blank', punto: 'prueba', h2: 'Resultados de clientes' }`, como en `crecimiento.ts:171`, porque no hay casos de IA de clientes con permiso.","newText":"- Prueba social: `{ type: 'blank', punto: 'prueba', h2: 'Casos de clientes', texto: 'Todavía no hay casos de clientes publicados: el servicio abrió en <mes> de 2026. Los ejemplos de esta página los hicimos nosotros.' }`. El texto fijo de `Blocks.astro:335` («Resultado medido: sin publicar aún, falta la autorización del cliente») insinuaría que hay clientes esperando permiso, y no los hay. Por eso el tipo `blank` gana `texto?: string` (`src/lib/types.ts:31`), y `Blocks.astro:335` lo usa cuando existe; las páginas que no lo pasan se ven igual que hoy. Se declara en el resumen porque cambia un componente compartido."},{"oldText":"`plazo` obligatorio, propuesto en días hábiles desde que llega el material y se aprueba el guion (anuncios 7, videos 7, fotos 5, avatar 3) y confirmado en la «Puerta del dueño»;","newText":"`plazo` obligatorio, propuesto por página y confirmado en la «Puerta del dueño»: Anuncios «7 días hábiles desde que apruebas textos y oferta», Videos «7 días hábiles desde que apruebas el guion», Fotografía de producto «5 días hábiles desde que recibimos tus fotos», Avatar «3 días hábiles desde que apruebas el guion»;"},{"oldText":"`$150` por video, o lo que se decida en la «Puerta del dueño»);","newText":"`$150` por video de hasta 1 minuto, o lo que se decida en la «Puerta del dueño»);"},{"oldText":"`pie` con lo que el precio no incluye (inversión en pauta, locución humana, uso de imagen de personas reales).","newText":"`pie` con lo que el precio no incluye, como máximo 2 notas y solo las que apliquen (la inversión en pauta no aplica a Fotografía de producto; la locución humana, a Anuncios y Videos; el uso de imagen de personas reales, a Avatar)."},{"oldText":"- Bloque `cards` nuevo con h2 «Producción con IA», justo después del bloque `cards` «Qué hacemos en marketing» (`marketing.ts:83-94`), con las 4 páginas (`h3` igual a su etiqueta de `iaCreativa`, una línea de `text`, `link`).","newText":"- Sin bloque de tarjetas nuevo: 4 tarjetas iguales clasifican pero no orientan, y en v2 se pintarían como la lista «+» de «Qué hacemos en marketing», justo encima (`Blocks.astro:84-96`). Las 4 páginas entran como 4 filas de la tabla «Elige por lo que quieres lograr» (`marketing.ts:50-63`), que ya orienta por objetivo y acepta enlaces en sus celdas:\n  - «Tener anuncios listos para tu pauta» → Anuncios con IA → «Desde $450 por 10 creativos».\n  - «Videos de producto o de campaña con voz» → Videos con IA → «Desde $400 por 4 videos».\n  - «Fotos de catálogo sin estudio» → Fotos de producto con IA → «Desde $250 por 10 fotos».\n  - «Un presentador para tus videos» → Avatar y voz con IA → «Desde $150 por video».\n\n  La intro de la tabla deja de hablar solo de «fee de gestión»: pasa a «referencias publicadas de gestión y de producción». El ítem «Contenido» del riel de la portada del hub (`marketing.ts:33`) pasa de «Redes, email y WhatsApp» a «Redes, email, WhatsApp y piezas con IA»."},{"oldText":"    - `/marketing/`: descripción, schema, respuesta citable, bloque nuevo y 2 frases.","newText":"    - `/marketing/`: descripción, schema, respuesta citable, 4 filas de la tabla «Elige por lo que quieres lograr» y su intro, el ítem «Contenido» del riel y 2 frases."},{"oldText":"a 390×844, `.ew-hero .ew-btn--primary`. Si una página no cumple, se acorta su H1 o su bajada, no se cambia la medida.","newText":"a 390×844, `.ew-hero .ew-btn--primary`. Además, a 1440×900 cada `<video>` de las 4 páginas mide 900 px de alto o menos. Si una página no cumple, se acorta su H1 o su bajada, no se cambia la medida."},{"oldText":"| `src/lib/pages/marketing.ts` | 4 páginas nuevas; hub (`:24`) con bloque «Producción con IA», descripción nueva, respuesta citable y 2 frases sin superlativos; un relacionado a Anuncios con IA en Google Ads y Meta Ads |","newText":"| `src/lib/pages/marketing.ts` | 4 páginas nuevas; hub (`:24`) con 4 filas en su tabla de decisión, el riel, descripción nueva, respuesta citable y 2 frases sin superlativos; un relacionado a Anuncios con IA en Google Ads y Meta Ads |\n| `src/components/Blocks.astro:335`, `src/lib/types.ts:31` | `texto?` opcional en el bloque `blank` |\n| `scripts/componer-pantallas.mjs` | Nuevo (promovido del scratchpad de la portada v2): compone la pieza de ejemplo en la pantalla de cada foto de portada |"},{"oldText":"| G2 | Claves del formulario | Claves existentes (`pauta`, `definir`) | 4 claves nuevas con sus preguntas |","newText":"| G2 | Claves del formulario | Claves existentes (`pauta`, `definir`), sin tocar Hetzner | 4 claves nuevas con 3 preguntas cada una (qué producto o servicio, cuántas piezas, si ya hay fotos o guion, para cuándo). La voz de diseño la recomienda: con las claves existentes, Anuncios muestra «Cotizar mi campaña» y pregunta por la inversión en pauta, y las otras 3 tratan al visitante como indeciso («Ayúdame a definir mi proyecto») |"},{"oldText":"| G4 | Foto «antes» de Fotografía de producto | Foto de stock con licencia libre, descargada con permiso del dueño | Una foto de celular del dueño | Ninguno en el código; cambia la fila de `CREDITOS.json` |","newText":"| G4 | Foto «antes» de Fotografía de producto | Una foto de celular del dueño, de un producto sin marca | Foto de stock con licencia libre, descargada con permiso del dueño | Ninguno en el código; cambia la fila de `CREDITOS.json`. La de stock ya suele ser profesional y la transformación se nota menos |"},{"oldText":"| T2 | Rótulo en las portadas hechas con IA (gusto, voz CEO de Claude) | Sin rótulo, como las demás portadas (D45) | Pie visible «Foto hecha con IA por Elemento Web» en las 4 portadas | Un elemento nuevo en la portada de esas 4 páginas, con su prueba |","newText":"| T2 | Rótulo en las portadas hechas con IA (gusto, voces de Claude en CEO y en diseño) | Sin rótulo, como las demás portadas (D45) | El `portada.pie` dice «Foto hecha con IA por Elemento Web» (en Avatar, «Foto hecha con IA: esta persona no existe») | Solo el texto del `portada.pie`, que ya existe en las 4 páginas (`PortadaServicio.astro:44`) |\n| T4 | Nombre del botón «Más» del menú (gusto, voz de diseño de Claude) | «Más», como hoy (`Navbar.astro:22`) | «Marketing» | Cambia el menú de todo el sitio; un grupo nuevo escondido bajo «Más» no promete nada a quien busca videos con IA |"},{"oldText":"La línea de frontera y el bloque «¿Cuándo te basta la herramienta gratis?» existen en las 4 páginas | +14 |","newText":"La línea de frontera y el bloque «¿Cuándo te basta la herramienta gratis?» existen en las 4 páginas. Ninguna de las 4 contiene «falta la autorización del cliente» y su caja de prueba muestra su `texto`. Cada `<video>` tiene `aria-describedby` hacia su pie, la ficha de duración y sonido y el enlace visible «Descargar MP4». Avatar tiene su `<details>` «Ver guion». En Fotografía de producto la primera foto lleva la etiqueta «Antes» y las otras «Después». Los bloques siguen el orden fijado (`answer`, `receipt`, `ejemplos`, `blank`…) | +19 |"},{"oldText":"| Bloque «Producción con IA» con las 4 páginas, contenido nuevo y descripción nueva (title y H1 se quedan, ver #7) |","newText":"| 4 filas en su tabla de decisión, el riel, contenido nuevo y descripción nueva (title y H1 se quedan, ver #7) |"},{"oldText":"el bloque nuevo y la respuesta citable no entran al JSON-LD y el hub no suma preguntas frecuentes.","newText":"las filas nuevas de la tabla y la respuesta citable no entran al JSON-LD y el hub no suma preguntas frecuentes."},{"oldText":"este plan no agrega código de schema; los enlaces del bloque bastan.","newText":"este plan no agrega código de schema; los enlaces de la tabla bastan."},{"oldText":"La tarjeta de Fotografía de producto con IA y la página dicen","newText":"La tarjeta de Fotos de producto con IA y la página dicen"},{"oldText":"| Descripción nueva, bloque «Producción con IA», respuesta citable y frases sin superlativos |","newText":"| Descripción nueva, 4 filas en la tabla de decisión, riel, respuesta citable y frases sin superlativos |"},{"oldText":"Salieron de la revisión CEO del 17-oct-2026.","newText":"Salieron de las revisiones CEO y de diseño del 17-oct-2026."}]} -->

<!-- autoplan-accepted:design -->
- Mínimo de ejemplos aprobados por página: Anuncios, 2 anuncios; Videos, 1 video; Fotografía de producto, la «antes» y 2 «después»; Avatar, 1 video. Una página que no llega a su mínimo (porque la hoja de contactos rechazó piezas, Higgsfield se detuvo o se alcanzó el tope de US$ 15) no sale en esta tanda. Se quita del manifiesto, del menú, del pie, de la tabla del hub, del catálogo, de los `related`, de `llms.txt` y de KEYWORDS, y las pruebas ajustan sus conteos; las otras páginas salen. Verificación: D52 anota qué páginas salieron, y la prueba sobre `dist/` recorre solo las que están en el manifiesto.
- El bloque «¿Cuándo te basta la herramienta gratis?» es un `tabla` con las columnas «Si…», «Te basta Meta, Google o Canva» y «Conviene el paquete», de 3 a 4 filas, justo antes de `compare`. La línea de frontera es el primer ítem de «No incluye», y una pregunta frecuente por página la repite («¿En qué se diferencia de la gestión de Meta Ads?» en Anuncios, «¿En qué se diferencia del plan de Contenido para redes?» en Videos, «¿En qué se diferencia del set de imágenes para mi web?» en Fotografía de producto). Verificación: la prueba sobre `dist/` busca el h2 del bloque y esas preguntas exactas.
- La hoja de contactos que aprueba el dueño se juzga con criterios fijos, anotados en D52:
  - ningún texto deformado dentro de la imagen;
  - manos y caras sin artefactos;
  - en Fotografía de producto, el producto idéntico a la «antes» (forma, color, etiqueta);
  - en Avatar, labios sincronizados con la voz;
  - subtítulos fieles al guion y a tiempo;
  - sin marcas ni logos;
  - pesos dentro del tope.

  Verificación: D52 lista cada pieza con «aprobada» o «rehecha» y su motivo.
- Comportamiento por ancho, verificado a 1440×900, 768×1024 y 390×844 con `node scripts/qa-responsive.mjs` (sin scroll horizontal):
  - portada como el molde v2 actual;
  - `ejemplos` en 1 columna bajo 768 px;
  - videos centrados con `max-height` del 75 % del alto;
  - antes y después apilados, con la etiqueta encima de cada foto;
  - la tabla de herramientas y la comparación, apiladas por fila como `compare` en compacto.

  Verificación: `qa-responsive.mjs` en verde con las 4 páginas y una captura por ancho en el resumen.
<!-- /autoplan-accepted:design -->

### Fase 2, diseño: revisión

**Auditoría previa.**
- Alcance de UI: 4 páginas v2 nuevas, la tabla y el riel del hub, el grupo del catálogo de `/servicios/`, el menú y el pie,
  y 2 tipos nuevos en «Así se vería».
- `DESIGN.md` existe y manda. Lo que pesa aquí:
  - el orden de lectura de la página de servicio;
  - «la imagen nunca va sola»;
  - D45, sin fotos de stock en la portada;
  - solo Roboto;
  - sin animación en la portada.
- Patrones que se reusan: `PortadaServicio`, `PrecioPlazo`, el bloque `ejemplos` y `Ejemplo.astro`, `tabla`, `compare` y
  `ServiceForm`.
- Sin revisiones de diseño anteriores sobre estas páginas.

**Paso 0.** Completitud de diseño inicial: 4/10. El plan define muy bien qué se publica, pero deja sin decidir qué ve
el visitante:
- la primera pantalla;
- el orden de los bloques;
- los videos en la rejilla;
- el formulario.

Un 10 para este plan define el orden, la primera pantalla de cada página, los estados de los medios, el comportamiento
por ancho y la accesibilidad del video. /autoplan revisa las 7 dimensiones, sin elegir foco, y no genera maquetas: su
paso 0.5 son las voces.

**Voces de diseño.**
- Nativa (subagente de Claude): completada, con `INPUT design ee356a7a…` igual a la foto `autoplan-design-QK9SMs`.
  2 críticos, 8 altos y 8 medios.
- Externa (Codex, `gpt-5.6-terra`): completada al segundo intento; el primero agotó el plazo en la comprobación previa
  (exit 124). 7 altos (uno es un rechazo duro) y 2 medios.

```
DESIGN OUTSIDE VOICES — LITMUS SCORECARD:
  Check                                    Claude     Codex  Consensus
  1. Brand unmistakable in first screen?   NO (H6)    YES    DISAGREE → Pasada 1
  2. One strong visual anchor?             NO (M1)    NO     CONFIRMED NO
  3. Scannable by headlines only?          NO (H1)    NO     CONFIRMED NO
  4. Each section has one job?             NO (C2)    NO     CONFIRMED NO
  5. Cards actually necessary?             NO (H7)    NO     CONFIRMED NO
  6. Motion improves hierarchy?            NOT SPEC'D NO     NOT SPEC'D (DESIGN.md: la portada no se anima; sin hallazgo)
  7. Premium without decorative shadows?   NOT SPEC'D YES    YES (sombras con offset de DESIGN.md)
  Hard rejections triggered:               —          «imagen bonita con marca débil» (portadas)
```

**Pasada 1, arquitectura de información: 4/10 → 8/10.**
- Dos órdenes de bloques se contradecían (Claude H1). Codex pide además que los ejemplos sean la prueba principal.
  Resuelto: un solo orden, con los ejemplos antes de la caja de prueba (P5, `DESIGN.md`).
- El hub clasificaba las páginas en vez de orientar (Claude H7, Codex). Resuelto: las 4 páginas son 4 filas de la
  tabla de decisión, sin tarjetas nuevas, y el riel nombra las piezas con IA (P2, P5).
- Diferencia en el litmus 1: la marca se ve por el menú, pero la primera pantalla no estaba escrita. Resuelto en la
  pasada 7 (bajada, riel y H1).
- Queda abajo de 10: el orden de los ejemplos dentro de cada página se decide en la hoja de contactos.

```
  PORTADA (H1 · bajada · precio y plazo · botón · foto con el entregable · riel)
    → RESPUESTA (40-60 palabras, fecha)
    → ASÍ SE VERÍA (el trabajo: la prueba principal)
    → CASOS DE CLIENTES (texto honesto)
    → QUÉ INCLUYE / ENTREGABLES / NO INCLUYE (frontera primero)
    → PROCESO Y PLAZO
    → ¿TE BASTA LA HERRAMIENTA GRATIS? (tabla)
    → COMPARACIÓN → PREGUNTAS → FORMULARIO → RELACIONADOS
```

**Pasada 2, estados: 3/10 → 8/10.**
- La caja vacía de prueba daba una razón falsa (Claude C2). Resuelto con `texto?` en `blank` (P5, honestidad).
- No estaba definido qué pasa si una página se queda sin ejemplos (Claude H8). Resuelto: hay un mínimo por página, y la
  que no llega a él no sale.
- Los estados del video estaban incompletos (Claude M3, Codex):
  - el texto de respaldo dentro de `<video>` casi nunca se ve;
  - se suman la ficha «Video · 10 s · sin voz · 1,4 MB» y el enlace visible «Descargar MP4».
- Una imagen que no carga muestra su `alt`, y el formulario ya tiene sus estados (D22).

| Función | Cargando | Vacío | Error | Éxito | Parcial |
|---|---|---|---|---|---|
| Video de ejemplo | póster y ficha | — | póster con controles; enlace «Descargar MP4» | reproduce con controles | — |
| Imagen de ejemplo | carga diferida | — | `alt` visible | imagen | — |
| Página sin ejemplos aprobados | — | no se publica en esta tanda | — | — | sale con su mínimo |
| Caja de prueba | — | texto honesto | — | — | — |
| Formulario | «enviando» (D22) | — | fallo de red y fallo parcial (D22) | éxito (D22) | — |

**Pasada 3, recorrido emocional: 5/10 → 7/10.**

| Paso | El visitante hace | Siente | El plan lo cubre con |
|---|---|---|---|
| 1 | Llega desde Google o un asistente | Curiosidad y sospecha de «IA barata» | H1 con la palabra que buscó, precio y entregable en la foto |
| 2 | Lee la respuesta | Orientación | Respuesta citable con «desde $X» y alcance |
| 3 | Mira los ejemplos | Juzga la calidad | Muestra terminada de video, antes y después con etiqueta, avatar con guion |
| 4 | Compara con Canva o Meta | Duda | Tabla «¿Cuándo te basta la herramienta gratis?» |
| 5 | Busca la letra chica | Confianza | Licencia de uso comercial, revisión humana, no incluye |
| 6 | Pide cotización | Decisión | Formulario: aquí se rompe con las claves por defecto (G2) |

- Los videos mudos no mostraban lo que se vende (Claude H4, Codex). Resuelto: una muestra terminada con voz y
  subtítulos, dentro del tope (P1).
- Un antes y después que no se podía comprobar (Claude H5). Resuelto: etiquetas, el mismo recorte y la foto del dueño
  por defecto (G4).
- El formulario contradice la página (Claude C1, crítico). No se auto-decide: cambia G2, que es del dueño. Se recomienda
  la alternativa de claves nuevas, y por eso la pasada no llega a 8.
- Cinco segundos: precio y entregable. Cinco minutos: ejemplos, tabla de herramientas y licencia. A largo plazo:
  regenerar los ejemplos (TODO) y sumar casos reales (TODO).

**Pasada 4, riesgo de diseño genérico: 5/10 → 8/10.**
- Clasificación: PERSUADE.
- Rechazo duro «imagen bonita con marca débil» (Codex; Claude M1 coincide). Resuelto: cada foto de portada lleva el
  entregable en escena, compuesto con la pieza real (`DESIGN.md`: la imagen nunca va sola).
- Litmus 2 a 5: CONFIRMED NO. Se resuelven con el orden de bloques (3 y 4), la tabla del hub en lugar de tarjetas (5) y
  la foto con el entregable (2).
- La forma del bloque de herramientas no estaba decidida (Claude M2). Resuelto: un `tabla` de 3 columnas.
- Marco de Reels para el video de Anuncios (Claude M5): se queda en un pie que lo nombra, sin maqueta nueva, para no
  sumar CSS (P3).
- Lista negra de diseño genérico revisada: sin degradados, sin tres tarjetas iguales, sin íconos en círculos y sin
  texto centrado. Nada más que señalar.

**Pasada 5, sistema de diseño: 6/10 → 8/10.**
- Videos 9:16 gigantes en la rejilla de 2 columnas (Claude H2). Resuelto: `max-height: min(640px, 75vh)` y `columnas`
  por página.
- El avatar no tenía orientación (Claude H3). Resuelto: 9:16 a 720×1280.
- Etiquetas de `iaCreativa` largas para el menú móvil (Claude M6). Resuelto: «Fotos de producto con IA» y «Avatar y voz
  con IA».
- Tokens: la ficha y la etiqueta usan la voz de datos, y el enlace de descarga `accent-on-light`. La nota «Ejemplo»
  ya existe y no hace falta ningún token nuevo.
- Abiertos para la puerta: el botón «Más» del menú (T4) y el rótulo de las portadas (T2).

**Pasada 6, responsive y accesibilidad: 4/10 → 8/10.**
- El comportamiento por ancho no estaba definido (Codex). Resuelto con el requisito aceptado de los 3 anchos y
  `qa-responsive.mjs`.
- La accesibilidad del video estaba incompleta (Codex alto; Claude M4). Resuelto:
  - el pie describe la escena (WCAG 1.2.1);
  - `aria-describedby` apunta al pie;
  - el guion del avatar va en `<details>`;
  - el póster sale del cuadro de 1 s con el subtítulo visible;
  - se quita `poster.alt`.
- Toque de 44 px en el enlace de descarga. El teclado usa los controles nativos y el anillo de foco que ya existe.

**Pasada 7, decisiones pendientes.** Resueltas en el plan:
- H1 más cortos;
- `lead`, riel y pie de cada portada;
- como máximo 2 notas de portada;
- plazos por página;
- la unidad del avatar;
- criterios de la hoja de contactos;
- mínimo de ejemplos.

Para la puerta final:

| Decisión | Si se difiere |
|---|---|
| G2, claves del formulario (recomendado: claves nuevas) | Anuncios pregunta por la pauta y las otras 3 páginas tratan al visitante como indeciso |
| G4, foto «antes» (por defecto, la del dueño) | Con stock, la transformación se nota menos |
| T2, rótulo «hecha con IA» en el pie de la portada | Una persona hecha con IA sin aviso junto a «no clonamos a nadie» |
| T4, «Más» → «Marketing» en el menú | El grupo nuevo queda escondido bajo un botón que no promete nada |

**Fuera de alcance (diseño):**
- El marco de Reels para el video de Anuncios: cuesta CSS en todas las v2, y el pie lo resuelve.
- Las maquetas visuales: /autoplan no las genera; se pueden pedir con /gstack-design-shotgun.
- La animación: `DESIGN.md` no anima la portada.

**Lo que ya existe:** `PortadaServicio` (H1, bajada, riel, pie y `PrecioPlazo`), `Ejemplo.astro` con `anuncio-social`,
`tabla` con enlaces, `compare` con apilado en compacto, `ServiceForm` con `titulo`, `qa-responsive.mjs`, `qa-lcp.mjs` y
`componer-pantallas.mjs` (scratchpad).

**Tareas de implementación (fase de diseño):**
- [ ] **D1 (P1, humano: ~1 h / CC: ~10 min)**, Blocks: `texto?` en `blank` y prueba de que ninguna página nueva dice
  «falta la autorización». Archivos: `src/lib/types.ts`, `src/components/Blocks.astro`. Verificar: prueba sobre `dist/`.
- [ ] **D2 (P1, humano: ~3 h / CC: ~30 min)**, Ejemplo: tipos `foto` (con `etiqueta`) y `video`, con ficha, descarga,
  `aria-describedby`, `max-height` y guion. Archivos: `types.ts`, `Ejemplo.astro`, `molde-kredit.css`. Verificar:
  pruebas sobre `dist/` y `presupuestos.mjs`.
- [ ] **D3 (P1, humano: ~2 h / CC: ~30 min)**, portadas con el entregable en escena: promover
  `componer-pantallas.mjs` y componer las 4 fotos. Archivos: `scripts/componer-pantallas.mjs`, `public/images/hero/`.
  Verificar: hoja de contactos y validador.
- [ ] **D4 (P1, humano: ~1 h / CC: ~10 min)**, hub: 4 filas en la tabla, su intro y el riel. Archivos:
  `src/lib/pages/marketing.ts`. Verificar: prueba sobre `dist/` y AC14.
- [ ] **D5 (P2, humano: ~1 h / CC: ~15 min)**, comportamiento por ancho de las 4 páginas. Verificar: `qa-responsive.mjs`
  y capturas.

**Design Review Completion Summary**

```
  +====================================================================+
  |         DESIGN PLAN REVIEW — COMPLETION SUMMARY                    |
  +====================================================================+
  | System Audit         | DESIGN.md presente; UI: 4 páginas v2 + hub  |
  | Step 0               | 4/10; las 7 dimensiones (sin foco elegido)  |
  | Pass 1  (Info Arch)  | 4/10 → 8/10 after fixes                     |
  | Pass 2  (States)     | 3/10 → 8/10 after fixes                     |
  | Pass 3  (Journey)    | 5/10 → 7/10 after fixes (G2 pendiente)      |
  | Pass 4  (AI Slop)    | 5/10 → 8/10 after fixes                     |
  | Pass 5  (Design Sys) | 6/10 → 8/10 after fixes                     |
  | Pass 6  (Responsive) | 4/10 → 8/10 after fixes                     |
  | Pass 7  (Decisions)  | 7 resolved, 4 deferred (G2, G4, T2, T4)     |
  +--------------------------------------------------------------------+
  | NOT in scope         | written (3 items)                           |
  | What already exists  | written                                     |
  | TODOS.md updates     | 0 items proposed (los de la fase CEO cubren)|
  | Approved Mockups     | 0 generated, 0 approved (/autoplan)         |
  | Decisions made       | 17 added to plan (auto-decididas)           |
  | Decisions deferred   | 4 (listed above)                            |
  | Overall design score | 3/10 → 7/10                                 |
  +====================================================================+
```

### Fase dx: registro de cambios y requisitos aceptados

<!-- autoplan-baseline-edits:dx {"sourceSha256":"d71872a991b9fa1588165508fd64dfc9fa93b8077953ddfac2b7cdba95f906f3","replacements":[{"oldText":"Orden: precios y ejemplos primero porque las páginas los consumen (Offer del schema y bloque «Así se vería»); el hub después porque enlaza las 4 páginas; enlaces globales al final porque cambian el HTML de todas las páginas.","newText":"Orden: precios y ejemplos primero porque las páginas los consumen (Offer del schema y bloque «Así se vería»). Después, la hoja de contactos: el dueño la aprueba y D52 congela qué páginas salen en esta tanda, antes de escribir ninguna página, porque quitar una después toca unos 10 sitios y los conteos de 5 pruebas. Luego un corte vertical: Anuncios con IA de punta a punta y en verde (unidad y `dist/`) antes de replicar las otras 3. El hub después, porque enlaza las páginas, y los enlaces globales al final, porque cambian el HTML de todas las páginas. Los pasos exactos están en el «Runbook»."},{"oldText":"`ffmpeg -i entrada.mp4 -c:v libx264 -crf 28 -preset slow -vf scale=-2:1280 -an -movflags +faststart salida.mp4`. El del avatar conserva su voz con `-c:a aac -b:a 96k` en lugar de `-an` y quema los subtítulos con `subtitles=avatar.srt` en el filtro. `avatar.srt` sale de `fal-ai/whisper` con marcas de tiempo por segmento sobre el audio del video, corregido a mano contra el guion, y se guarda fuera del repo: el archivo lo leería Tailwind, y lo que se publica es el video con los subtítulos quemados. Si un MP4 pasa de 2 MB, se sube el CRF a 30 y luego a 32, y si no alcanza se baja la altura a 960 (`scale=-2:960`); el valor final se anota en la fila de créditos. El póster es el primer cuadro (`ffmpeg -i salida.mp4 -frames:v 1 poster.png`), pasado a WebP con `sharp` (ya es dependencia, `package.json:27`).","newText":"Todo comando de `ffmpeg` lleva `-y -nostdin` y cada intento escribe su propio archivo. Sin eso, ffmpeg 8.1.2 se queda esperando «Overwrite? [y/N]», o sale con 0 sin escribir cuando no puede sobrescribir (probado en la revisión DX). Los comandos, desde la raíz del repo:\n- Clip sin voz: `ffmpeg -y -nostdin -i <crudo>.mp4 -c:v libx264 -crf 28 -preset slow -vf \"scale=-2:1280\" -an -movflags +faststart .gstack/tmp/marketing-ia/<base>.crf28.mp4`.\n- Clip con voz de ElevenLabs (el primero de Videos): `ffmpeg -y -nostdin -i <crudo>.mp4 -i <voz>.mp3 -map 0:v -map 1:a -vf \"scale=-2:1280,subtitles=.gstack/tmp/marketing-ia/<base>.srt\" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k -shortest -movflags +faststart .gstack/tmp/marketing-ia/<base>.crf28.mp4`.\n- Avatar: como el anterior, sin la segunda entrada; conserva su propio audio con `-c:a aac -b:a 96k`.\n\nLos `.srt` salen de `fal-ai/whisper` con marcas de tiempo por segmento, se corrigen a mano contra el guion y se guardan en `.gstack/tmp/marketing-ia/`. Esa carpeta está en `.gitignore`, así que Tailwind no la lee, y la ruta va relativa porque en Windows `C:` rompe el filtro `subtitles=`. Después de cada intento se lee el peso real del archivo (`stat -c %s`) y la fila de créditos anota el CRF que dice el nombre del archivo que quedó, no el del intento planeado. Si pasa de 2 MB, la escalera es CRF 30, luego 32, luego altura 960 (`scale=-2:960`) y luego recortar a 8 s (`-t 8`); si aun así no alcanza, la pieza no pasa y se aplica el mínimo de ejemplos (D52 lo anota). El archivo que pasa se copia a `public/videos/ia-creativa/`. El póster es un cuadro (`ffmpeg -y -nostdin -ss 1 -i <video>.mp4 -frames:v 1 .gstack/tmp/marketing-ia/<base>-poster.png`; `-ss 0` en los clips sin subtítulos), pasado a WebP con `sharp` (ya es dependencia, `package.json:27`)."},{"oldText":"`{ tipo: 'video'; src: string; poster: { src: string; width: number; height: number }; pie: string; voz?: true; guion?: string; duracion: number }`","newText":"`{ tipo: 'video'; src: string; poster: { src: string; width: number; height: number }; pie: string; voz?: true; guion?: string; duracion: number; bytes: number }`"},{"oldText":"calculada de `duracion`, `voz` y el peso del archivo,","newText":"calculada de `duracion`, `voz` y `bytes`, que escribe el paso de compresión (el render no lee el disco, igual que `heroes-manifest.mjs`),"},{"oldText":"con su fila escrita en #9 por `node scripts/medir.mjs http://localhost:4602/marketing/<slug>/ --id <id> --escribir`","newText":"con su fila escrita en #9 por `node scripts/medir.mjs http://localhost:4602/marketing/<slug>/ --id <id> --escribir`, con el preview levantado en segundo plano (`npx astro preview --port 4602`; en primer plano bloquea al agente)"},{"oldText":"`serviceKey` es la clave del formulario, no la del precio, y va en el mismo orden que en las hermanas de `marketing.ts`","newText":"Identificadores de cada página, en una sola tabla para no confundir sus raíces:\n\n| Página | Slug | Clave de precio | Archivos (`public/images/ejemplos/`, `public/videos/ia-creativa/`) | `medicionId` | `serviceKey` |\n|---|---|---|---|---|---|\n| Anuncios | `marketing/anuncios-con-ia-panama` | `anuncios-ia` | `ia-anuncios-<n>` | `anuncios-ia-lcp` | `pauta` |\n| Videos | `marketing/videos-con-ia-panama` | `videos-ia` | `ia-videos-<n>` | `videos-ia-lcp` | `definir` |\n| Fotografía de producto | `marketing/fotografia-de-producto-con-ia-panama` | `fotos-producto-ia` | `ia-fotos-<n>` | `fotos-ia-lcp` | `definir` |\n| Avatares y voz | `marketing/avatares-y-voz-con-ia-panama` | `avatar-ia` | `ia-avatar-<n>` | `avatar-ia-lcp` | `definir` |\n\n`serviceKey` es la clave del formulario, no la del precio, y va en el mismo orden que en las hermanas de `marketing.ts`"},{"oldText":"y `/marketing/` aparece solo como cambio permitido de `description` y `schema`.","newText":"y la cuenta de cambios permitidos que imprime solo suma el de `/marketing/`. `seo-congelado` imprime conteos y no rutas, así que lo de «solo `description` y `schema`» se comprueba en el diff de `audit/seo-snapshot.json`."},{"oldText":"- Pruebas: `portada.test.mjs:447-453` (la 8 excluye las 4 URL de IA creativa); `validar-marcador.test.mjs:248` (25 → 29 páginas de servicio); `kind.test.mjs:23` (25 → 29, y su mensaje «las 24 páginas…» se corrige); `datos.test.mjs:58` (25 → 29 rutas en `formulario.paginas`); `keywords.test.mjs:37-39` y `:107-109` (nombre y cuenta 34 → 38 en la Asignación y el Apéndice).\n- Validadores: `qa-lcp.mjs` (primera pantalla de las 4 rutas) y `qa-a11y.mjs` (`/marketing/` en la lista fija).","newText":"- Pruebas (N = páginas que salen en esta tanda según D52; N = 4 si salen todas):\n  - `portada.test.mjs:447-453`: la 8 excluye las URL de IA creativa.\n  - `portada.test.mjs:188-206`: la guarda `conDist` se mueve a `scripts/lib/dist-guard.mjs`, que importan esta prueba y `marketing-ia.test.mjs`, sin cambiar su comportamiento.\n  - `validar-marcador.test.mjs:248`: 25 → 25 + N páginas de servicio.\n  - `kind.test.mjs:23`: 25 → 25 + N, y su mensaje «las 24 páginas…» se corrige.\n  - `datos.test.mjs:58`: 25 → 25 + N rutas en `formulario.paginas`.\n  - `keywords.test.mjs:37-39` y `:107-109`: nombre y cuenta, 34 → 34 + N en la Asignación y en el Apéndice.\n- Validadores:\n  - `qa-lcp.mjs`: primera pantalla de las rutas nuevas.\n  - `qa-a11y.mjs`: `/marketing/` en la lista fija.\n  - `qa-responsive.mjs`: suma a su `PAGES` fijo las rutas nuevas y `/marketing/`. No está en `verify`; se corre con `npx astro preview --port 4610` en segundo plano y `node scripts/qa-responsive.mjs http://localhost:4610`, en los 10 tamaños que ya recorre, que incluyen 1440×900, 768×1024 y 390×844."},{"oldText":"| `scripts/qa-lcp.mjs`, `scripts/qa-a11y.mjs` | Primera pantalla de las 4 páginas; `/marketing/` en la lista fija |","newText":"| `scripts/qa-lcp.mjs`, `scripts/qa-a11y.mjs`, `scripts/qa-responsive.mjs` | Primera pantalla de las páginas nuevas; `/marketing/` en la lista fija; las rutas nuevas en `PAGES` |\n| `scripts/lib/dist-guard.mjs` | Nuevo: la guarda `conDist` que hoy vive en `portada.test.mjs:188-206`, compartida |\n| `scripts/main-permitidas.json`, `scripts/selectores-permitidos.json` | Nuevos: rutas que pueden cambiar en AC14 y clases declaradas en AC11, cada una con su motivo |\n| `scripts/portadas-fotos.mjs` | Exporta `webpConTope` para las imágenes de ejemplo de 80 KB o menos |"},{"oldText":"## Puerta del dueño (se decide antes de construir)","newText":"## Puerta del dueño (se decide antes de construir)\n\nCómo se responde: «procede» acepta todos los valores por defecto; cualquier otra respuesta nombra el id y su valor (por ejemplo «G1: 500, 450, 300, 150»). U1 se resuelve primero, porque puede cambiar slugs y palabras. Cada decisión queda en D52 como una línea `id = valor`, de `G1` a `T4`, y el primer paso del «Runbook» se detiene con `MKIA-PUERTA` si falta alguna."},{"oldText":"## Acceptance Criteria","newText":"## Runbook (pasos exactos para el implementador)\n\nCada paso dice qué debe salir. Si no sale eso, se para con el código de error del paso y se reporta.\n0. Preflight (2 min):\n   - `node -v`, `npm ci` y `npm run build` en verde.\n   - `ffmpeg -version`: 8.1.2 o superior.\n   - `lighthouse --version`: 13.x. Es el CLI global que llama `medir.mjs` (`medir.mjs:85`), no una dependencia del repo; si falta, `npm install -g lighthouse`. No hay `~/.ssh/psi.key`, así que `medir.mjs` usa Lighthouse.\n   - En fal, `check_account_status`, y en Higgsfield, `balance`, con su saldo anotado.\n   - `git status` limpio y `BASE=$(git rev-parse HEAD)`, anotado en el resumen.\n   - D52 tiene una línea por cada id de G1 a T4; si falta una, se para con `MKIA-PUERTA: falta <id>`.\n1. #1 precios en `precios.json`, con D52. Salida: `SOLO_UNIDAD=1 node --test --test-name-pattern=montos scripts/marketing-ia.test.mjs` con exit 0. Las demás pruebas del archivo siguen en rojo hasta su paso, y es lo esperado (pruebas primero).\n2. #2 y #2b, generación con la máquina de estados de gasto (ver «Requisitos aceptados»). Al final de cada pieza, `SOLO_UNIDAD=1 node --test --test-name-pattern=gasto scripts/marketing-ia.test.mjs` con exit 0.\n3. La hoja de contactos al dueño. D52 congela qué páginas salen (N) y la fecha de aprobación.\n4. Corte vertical de Anuncios con IA:\n   - Página, datos, receipt y ejemplos.\n   - `npm run build && VERIFY=1 node --test --test-name-pattern=anuncios-con-ia scripts/marketing-ia.test.mjs` con exit 0. Las pruebas por página llevan el slug en su nombre; las del hub, el menú, el pie y los enlaces globales siguen en rojo hasta el paso 5.\n   - Preview en 4602 (`npx astro preview --port 4602` en segundo plano) y captura. D52 anota la hora de inicio del paso 1 y la de este verde: es el TTHW de esta épica.\n5. Las otras N − 1 páginas, el hub, `/servicios/`, IA para empresas, menú y pie, `llms.txt` y KEYWORDS. Salida: `npm run build` y `VERIFY=1 node --test scripts/marketing-ia.test.mjs`, el archivo entero, con exit 0.\n6. Línea base:\n   - Si `../elementoweb-base` ya existe, primero `git worktree remove --force ../elementoweb-base`.\n   - Luego `git worktree add ../elementoweb-base $BASE` y, dentro (`cd ../elementoweb-base`), `npm ci && npm run build`.\n   - Comparaciones desde la raíz: `node scripts/selectores-hoja.mjs ../elementoweb-base/dist dist` y `node scripts/comparar-main.mjs ../elementoweb-base/dist dist --permitidas scripts/main-permitidas.json`, las dos con exit 0.\n   - Al terminar, `git worktree remove --force ../elementoweb-base`.\n7. `node scripts/seo-congelado.mjs`: salen N errores «URL nueva…» y nada más. Luego el diff del snapshot y `--actualizar`.\n8. `npm run verify` en verde. Después `qa-responsive.mjs` en 4610 y las mediciones con `medir.mjs` en 4602.\n9. Capturas al dueño y el resumen con los cambios declarados según la regla 3. El push, solo con permiso.\n\nCiclo interno mientras se trabaja: unidad con `SOLO_UNIDAD=1 node --test scripts/marketing-ia.test.mjs`; `dist/` con `npm run build && VERIFY=1 node --test scripts/marketing-ia.test.mjs`; antes de pushear, `npm run verify`.\n\n## Acceptance Criteria\n\nDonde un criterio, una prueba o un conteo dice 4 (páginas, URL, errores, filas o entradas), se lee N: las páginas que salen en esta tanda según D52 (N = 4 si salen todas; el mínimo de ejemplos puede dejar alguna fuera). Igual con los totales: 38 páginas es 34 + N, y 29 servicios es 25 + N."},{"oldText":"    - El script extrae los selectores de `dist/_astro/*.css` de cada build e imprime `+N −M`. Para cada selector nuevo, imprime el archivo donde `git grep -lw <clase>` encuentra su clase.","newText":"    - El script extrae los selectores de `dist/_astro/*.css` de cada build e imprime `+N −M`. Cada selector nuevo se desescapa primero, porque la hoja escribe `md\\:flex` o `w-\\[12px\\]` y en el código la clase va como `md:flex` o `w-[12px]`. Después imprime los archivos donde `git grep -lwF -- <clase>` la encuentra: `-F` porque `[` y `.` no son regex aquí, y `-w` para que «italic» no coincida con «italicas»."},{"oldText":"con la guarda `conDist` de `portada.test.mjs:188-206` (sin `dist/` o sin `VERIFY=1` se salta y lo dice)","newText":"con la guarda `conDist` de `portada.test.mjs:185-206`, movida a `scripts/lib/dist-guard.mjs`. Con `VERIFY=1` (lo pasa `verify.mjs`) o en CI, un `dist/` ausente o más viejo que `src/` o `public/` hace fallar; fuera de ahí las pruebas de `dist/` se saltan y lo dicen; `SOLO_UNIDAD=1` las salta siempre. Las pruebas por página llevan el slug en su nombre."},{"oldText":"| Comparación de builds | `scripts/selectores-hoja.mjs` (AC11) y la comparación del `<main>` de AC14, las dos contra `../elementoweb-base/dist` | 2 scripts nuevos |","newText":"| Comparación de builds | `scripts/selectores-hoja.mjs` (AC11) y la comparación del `<main>` de AC14, las dos contra `../elementoweb-base/dist` | 2 scripts nuevos |\n| Contratos y robustez (revisión DX), en `scripts/marketing-ia.test.mjs`, capa de unidad | Una prueba por cada script nuevo (`comparar-main`, `selectores-hoja`, `componer-pantallas`), que corre el script con `spawnSync` sobre carpetas temporales y espera exit 2 con un uso incorrecto y exit 1 con un caso que falla. Pista de audio de cada `.mp4` de las páginas que salen: con `voz`, la hay; sin `voz`, no. El mensaje `MKIA-EJEMPLO` de `Ejemplo.astro`. «`dist/` existe y está al día», con su mensaje `MKIA-DIST`. La prueba de créditos y gasto de AC8 suma 2 casos sin subir la cuenta: una fila `pendiente` sin conciliar y una fila con campos fuera de la lista | +6 |"},{"oldText":"(`fecha`, `modelo`, `costo`, `request_id`, `uso`) más `\"tanda\": \"marketing-ia\"`","newText":"(`fecha`, `modelo`, `costo`, `request_id`, `uso`) más `\"tanda\": \"marketing-ia\"` y `\"estado\"` (`pendiente` o `confirmado`, ver «Requisitos aceptados en la revisión»)"},{"oldText":"| Ver la lista de abajo | 6 pruebas, 2 validadores, 1 snapshot, 1 permiso, 1 umbral |","newText":"| Ver la lista de abajo | 6 pruebas, 3 validadores, 1 snapshot, 1 permiso, 1 umbral |"},{"oldText":"(6 pruebas modificadas, 2 validadores, 2 comparaciones de builds, capturas para el dueño)","newText":"(6 pruebas modificadas, 3 validadores, 2 comparaciones de builds, los contratos de los 3 scripts nuevos y sus pruebas, capturas para el dueño)"},{"oldText":"Salieron de las revisiones CEO y de diseño del 17-oct-2026.","newText":"Salieron de las revisiones CEO, de diseño y de DX del 17-oct-2026."}]} -->

<!-- autoplan-accepted:dx -->
- Máquina de estados del gasto de la tanda, para que una sesión cortada no cobre dos veces:
  - Justo después de `submit_jobs`, se escribe la fila con `"estado": "pendiente"` y su `request_id`. Cuando llega el resultado, pasa a `"confirmado"` con el costo real.
  - Antes de reenviar una pieza, se concilia con `search_request_history`; si el trabajo anterior cobró, no se reenvía sin contarlo.
  - Cada pieza tiene como máximo 2 regeneraciones, contadas dentro de la tanda.
  - En Higgsfield se lee `balance` antes y después de cada trabajo, y la diferencia se anota aunque el trabajo falle.
  - Si el tope no alcanza, el aviso al dueño usa una plantilla fija: «MKIA-TOPE: tanda marketing-ia: gastado $X + estimado $Y (modelo M, pieza P) = $Z > $15. Para seguir: aprueba un tope nuevo (`tandas.marketing-ia.tope` y D52) o elige qué pieza se quita (mínimo de ejemplos)».
  - Las filas anteriores a la tanda, sin `estado`, cuentan como confirmadas.
  - Verificación: la prueba de créditos y gasto falla con una fila `pendiente` sin conciliar, y se corre después de cada fila.
- Contratos de los scripts nuevos. Cada uno tiene `--help`, una línea de uso, exit 0 si pasa, 1 si falla y 2 si se usa mal (falta un argumento o un directorio), con su código de error al inicio de cada mensaje:
  - `node scripts/comparar-main.mjs <base/dist> <dist> --permitidas scripts/main-permitidas.json` (`MKIA-MAIN`): por cada ruta no permitida que difiere imprime la ruta y el primer fragmento distinto, unos 200 caracteres por lado.
  - `node scripts/selectores-hoja.mjs <base/dist> <dist> [--permitidas scripts/selectores-permitidos.json]` (`MKIA-SELECTOR`): desescapa el selector y busca su clase con `git grep -lwF -- <clase>` (AC11). Una clase declarada en el JSON, con su motivo, no hace fallar.
  - `node scripts/componer-pantallas.mjs <render.png> <salida.png> <pieza> [<pieza>…] [--ajuste cover|contain] [--umbral N]` (`MKIA-PANTALLAS`): se generaliza el script del scratchpad de la portada v2, que hoy exige 2 pantallas. El número de pantallas es el número de piezas, ordenadas por área. El error dice cuántas esperaba y cuántas encontró, el umbral (R−G>90, B−G>90) y el arreglo («regenera con la pantalla #FF00FF plana o pasa `--umbral`»).
  - Verificación: una prueba de unidad por script cubre el uso incorrecto (exit 2) y un caso que falla (exit 1).
- El video con voz tiene audio de verdad. Una prueba lee con Node las cajas `hdlr` de cada `.mp4` y comprueba que uno con `voz: true` tiene una pista `soun` y que uno sin `voz` no la tiene. No usa `ffprobe`, porque la prueba corre también en CI (`npm test` dentro de `verify`, en `ubuntu-latest`, `deploy.yml:48`) y no está verificado que ese runner traiga ffmpeg. En local, `ffprobe -show_streams` sirve para revisarlo a mano. Verificación: la prueba recorre los videos de las páginas que salen.
- Las pruebas nuevas no cuentan 4 a mano. Recorren las páginas de IA creativa que están en el manifiesto, así que una página que no sale (mínimo de ejemplos) baja los conteos sin editar la prueba.
  - La guarda compartida ya falla con `VERIFY=1` o en CI cuando `dist/` falta o está viejo (`portada.test.mjs:185-206`), y `SOLO_UNIDAD=1` ya salta las de `dist/`.
  - `marketing-ia.test.mjs` suma su propia prueba «dist/ existe y está al día», cuyo mensaje empieza con `MKIA-DIST`, para que `npm run verify` no dé verde sin haber mirado `dist/`.
  - Verificación: correr la prueba con `VERIFY=1` y sin `dist/` da exit 1 con `MKIA-DIST`.
- `Ejemplo.astro` trata la unión de tipos de forma exhaustiva: un `tipo` desconocido rompe el build con `MKIA-EJEMPLO: tipo desconocido <tipo>`, y no deja un hueco en silencio. Verificación: `npm run build` en verde, más una prueba de unidad del mensaje.
- Nada de lo que se escribe en el repo lleva datos de cuentas, URL firmadas de fal, tokens ni el prompt crudo. El registro de gasto guarda `fecha`, `modelo`, `costo`, `request_id`, `uso`, `tanda` y `estado`; los créditos guardan el modelo y una descripción. Verificación: la prueba de créditos rechaza una fila con campos fuera de esa lista.
- Las imágenes de ejemplo pasan por `webpConTope`, exportada de `scripts/portadas-fotos.mjs`, con tope de 80 KB; si no alcanza, sale `MKIA-PESO` con el peso logrado. Verificación: la prueba de `dist/` del tope de 80 KB.
<!-- /autoplan-accepted:dx -->

### Fase 2.5, DX: revisión

**Producto y modo.** No es un producto para desarrolladores. Su superficie de DX es el flujo de implementación y
mantenimiento:
- scripts CLI (`scripts/*.mjs`, `npm run verify`);
- el flujo de generación por MCP (fal y Higgsfield);
- los tipos de datos del molde.

Tipo principal: CLI tool + Claude Code skill (MCP). Modo DX POLISH, por regla de /autoplan.

```
TARGET DEVELOPER PERSONA
========================
Who:       el agente que implementa (Claude Code, muchas veces sin supervisión) y, después, quien mantenga el repo
Context:   abre la spec aprobada, con la puerta del dueño resuelta, en Windows con Git Bash
Tolerance: no puede preguntar a mitad de camino; reintenta a ciegas si un error no dice qué hacer, y cada reintento cuesta
Expects:   pasos en orden con su salida esperada, errores con el arreglo, y que un fallo no se reporte como éxito
```

**Narrativa del desarrollador (antes de los arreglos).**
> Abro la spec y tengo 15 decisiones del dueño resueltas en algún lado, pero no sé en qué formato quedaron. Los
> comandos están repartidos en párrafos largos. Genero las fotos en fal y la sesión se corta a mitad de un trabajo: no
> sé si me cobró, y la fila de gasto se escribe al final. La recompresión de un video se queda parada preguntando si
> sobrescribo. Cuando por fin corre, sale con 0 sin haber escrito nada, y anoto un CRF que no quedó.
> `componer-pantallas.mjs` me dice que esperaba 2 pantallas y mi escena tiene 1. Termino las 4 páginas, el menú y los
> conteos de las pruebas, y recién ahí el dueño rechaza los ejemplos de Avatar: toca deshacer en 10 sitios.

Es una predicción, armada con lo que leyeron las voces. Los comportamientos de ffmpeg y de `componer-pantallas.mjs`
están observados; el del MCP de fal ante un fallo no.

**Comparación.** No se hizo búsqueda web en esta fase (Aside no está en Windows y la comparación no pide datos de
mercado). Referencia: un runbook de un servicio interno bien hecho, con el arranque reproducible y un
`make check` que sale con código y mensaje.

| Herramienta | Inicio → resultado | Tiempo y tipo de evidencia | Decisión de DX | Fuente |
|---|---|---|---|---|
| Esta épica (antes) | puerta resuelta → la primera página en preview | unas 3-4 h, estimado | todos los activos antes de pintar la primera página; sin preflight | voz DX de Claude |
| Esta épica (después) | lo mismo | objetivo 45 min, estimado | preflight, corte vertical de Anuncios y runbook | este plan |
| Runbook de referencia | clone → check en verde | 5-10 min, referencia | preflight y un comando de verificación | conocimiento general, no medido |

**Momento mágico.** El preflight sale en verde y, minutos después, Anuncios con IA se ve en el preview con sus ejemplos
reales y su precio. El vehículo es el corte vertical del «Runbook» (P5, sin script nuevo).

**Recorrido del desarrollador.**

| Etapa | Qué hace | Fricción | Estado |
|---|---|---|---|
| 1. Descubrir | lee la spec | 15 decisiones en un formato no dicho | resuelto: «procede» = valores por defecto y D52 con una línea por id |
| 2. Instalar | prepara el entorno | sin preflight | resuelto: paso 0 del runbook |
| 3. Hola mundo | ve la primera página | todo se generaba antes; 3-4 h | resuelto: corte vertical; objetivo 45 min |
| 4. Uso real | genera, comprime y escribe | ffmpeg se colgaba o mentía; gasto sin estado | resuelto: `-y -nostdin`, un archivo por intento, máquina de estados del gasto |
| 5. Depurar | lee un fallo | scripts sin contrato ni código | resuelto: `--help`, exit 0/1/2, códigos `MKIA-*` |
| 6. Actualizar | quita una página | unos 10 sitios y conteos fijos | resuelto: la hoja de contactos va antes, y las pruebas recorren el manifiesto |

**Informe de primera vez (antes de los arreglos).**
```
T+0:00  Abre la spec; busca el orden de trabajo y lo encuentra en un párrafo de «Proposed Change».
T+0:20  Genera las imágenes; la sesión se corta tras un submit_jobs: no sabe si cobró (sin fila pendiente).
T+1:10  ffmpeg pregunta «Overwrite? [y/N]» y el agente queda bloqueado hasta el timeout.
T+1:40  componer-pantallas: «se esperaban 2 pantallas magenta, hay 1». Lee el script para entenderlo.
T+3:30  Termina las 4 páginas; el dueño rechaza Avatar; deshace menú, pie, KEYWORDS y 5 conteos.
```
Cada punto quedó resuelto en el recorrido de arriba.

**Voces DX.**
- Nativa (subagente de Claude): completada, con `INPUT dx 35595a77…` igual a la foto `autoplan-dx-GISk7A`.
  - 2 críticos (CAP4 de ffmpeg) y 10 altos (CAP6 de recuperación, de arreglo y de contexto), más 12 medios.
  - Probó con comandos el bloqueo y el falso éxito de ffmpeg, y el requisito de 2 pantallas de `componer-pantallas.mjs`.
- Externa (Codex, `gpt-5.6-terra`): completada al primer intento. 2 críticos, 5 altos, 5 medios y 2 bajos.

```
DX DUAL VOICES — CONSENSUS TABLE:
  Dimension                           Claude  Codex  Consensus
  1. Getting started < 5 min?          NO      NO     CONFIRMED NO (sin preflight ni runbook)
  2. API/CLI naming guessable?         NO      NO     CONFIRMED NO (scripts sin contrato; varias raíces de nombre)
  3. Error messages actionable?        NO      NO     CONFIRMED NO (ffmpeg CAP4; sin códigos)
  4. Docs findable & complete?         NO      NO     CONFIRMED NO (comandos en prosa)
  5. Upgrade path safe?                NO      NO     CONFIRMED NO (quitar una página; conteos fijos)
  6. Dev environment friction-free?    NO      NO     CONFIRMED NO (rutas de Windows, preview a mano, qa-responsive)
```

Disposición: todo entra como corrección dentro del alcance (P1, P5). Ninguna voz cambia lo que decidió el dueño.
- Nombres de los scripts (Codex, bajo): se saltó, porque renombrar los scripts que ya existen está fuera del radio
  (P3).
- Política de deprecación (Codex, bajo): la cubren el 301 del rollback y la regla de nombres; no se suma nada.

**Pasadas DX.**
1. Arranque: 5/10 → 8/10. Preflight, corte vertical y runbook con salidas esperadas. Queda abajo de 10 porque el
   tiempo de generación de fal y Higgsfield no depende del plan.
2. CLI y datos: 6/10 → 8/10.
   - Contratos con `--help` y exit 0/1/2.
   - Tabla de identificadores por página.
   - `bytes` en el tipo `video`.
   - JSON de excepciones con su motivo.
3. Errores (agent-ready-v1): 3/10 → 7/10.
   - CAP4 de ffmpeg resuelto con `-y -nostdin` y un archivo por intento.
   - Recuperación del gasto con filas pendientes, conciliación y tope de reintentos.
   - Códigos `MKIA-*` y plantilla del aviso del tope.
   - Queda abajo de 8: no se verificó qué hace el MCP de fal cuando un trabajo vence; la conciliación lo cubre, pero
     sin observarlo.
4. Documentación: 5/10 → 8/10. Runbook numerado con su salida esperada y su ciclo interno.
5. Actualización y cambios: 5/10 → 7/10.
   - La hoja de contactos va antes de construir.
   - Las pruebas recorren el manifiesto.
   - Lectura de «las 4 páginas» con N.
   - `Ejemplo.astro` exhaustivo.
   - 301 al revertir.
6. Entorno: 5/10 → 7/10.
   - Rutas relativas para `subtitles=`.
   - Preview en segundo plano en 4602 y 4610.
   - `qa-responsive` declarado.
   - Worktree base con limpieza.
   - Queda Windows: el escape de `subtitles=` se razonó, no se ejecutó.
7. Comunidad: 5/10 → 5/10. Es un repo de una agencia, sin comunidad que cuidar; no se suma nada (fuera de alcance).
8. Medición de DX: 3/10 → 7/10.
   - D52 anota la hora del paso 1 y la del verde del corte vertical, que es el TTHW de la épica.
   - `/gstack-devex-review` lo puede comparar después contra los 45 min.

**DX Review Scorecard**

```
+====================================================================+
|              DX PLAN REVIEW — SCORECARD                             |
+====================================================================+
| Dimension            | Score  | Prior  | Trend  |
|----------------------|--------|--------|--------|
| Getting Started      |  8/10  |  5/10  |  ↑     |
| API/CLI/SDK          |  8/10  |  6/10  |  ↑     |
| Error Messages       |  7/10  |  3/10  |  ↑     |
| Documentation        |  8/10  |  5/10  |  ↑     |
| Upgrade Path         |  7/10  |  5/10  |  ↑     |
| Dev Environment      |  7/10  |  5/10  |  ↑     |
| Community            |  5/10  |  5/10  |  =     |
| DX Measurement       |  7/10  |  3/10  |  ↑     |
+--------------------------------------------------------------------+
| TTHW                 | 45 min | 3-4 h  |  ↑ (estimado, no medido)  |
| Competitive Rank     | Needs Work frente a un hola mundo de 5 min; razonable para una épica con generación |
| Magical Moment       | designed via corte vertical de Anuncios en preview |
| Product Type         | CLI tool + Claude Code skill (MCP)          |
| Mode                 | POLISH                                      |
| Overall DX           |  7/10  |  5/10  |  ↑     |
+====================================================================+
| DX PRINCIPLE COVERAGE                                               |
| Zero Friction      | covered (preflight)                            |
| Learn by Doing     | covered (corte vertical)                       |
| Fight Uncertainty  | covered (salidas esperadas, códigos MKIA-*)    |
| Opinionated + Escape Hatches | covered (valores por defecto y JSON de excepciones) |
| Code in Context    | covered (comandos completos de ffmpeg)         |
| Magical Moments    | covered                                        |
| Agents Are Users   | covered (sin prompts interactivos, exit codes) |
+====================================================================+
```

**DX Implementation Checklist**
```
[ ] Preflight del runbook en verde antes del paso 1
[ ] Corte vertical de Anuncios en preview en 45 min o menos (anotado en D52)
[ ] Todo ffmpeg con -y -nostdin y un archivo por intento
[ ] Filas de gasto pendiente → confirmado; conciliación antes de reenviar
[ ] comparar-main, selectores-hoja y componer-pantallas con --help y exit 0/1/2
[ ] Códigos MKIA-* al inicio de cada error nuevo
[ ] marketing-ia.test recorre el manifiesto; falla sin dist/ con VERIFY=1
[ ] La prueba de cajas hdlr confirma audio en los videos con voz (sin ffprobe: corre en CI)
[ ] Runbook: cada paso con su --test-name-pattern y su exit 0; preflight con lighthouse global
```

**Tareas de implementación (fase DX):**
- [ ] **X1 (P1, humano: ~30 min / CC: ~5 min)**, ffmpeg: comandos con `-y -nostdin` y un archivo por intento.
  Verificar: una segunda corrida no se cuelga y escribe su archivo.
- [ ] **X2 (P1, humano: ~1 h / CC: ~15 min)**, gasto: máquina de estados y prueba con una fila pendiente. Archivos:
  `audit/imagenes-ia-2026-10.json`, `scripts/marketing-ia.test.mjs`. Verificar: la prueba falla con una fila pendiente.
- [ ] **X3 (P1, humano: ~3 h / CC: ~40 min)**, scripts: contratos de `comparar-main`, `selectores-hoja` y
  `componer-pantallas` (generalizado). Verificar: una prueba de unidad por script.
- [ ] **X4 (P2, humano: ~30 min / CC: ~10 min)**, pruebas: `scripts/lib/dist-guard.mjs` y el modo `SOLO_UNIDAD`.
  Verificar: `portada.test` sigue en verde.
- [ ] **X5 (P2, humano: ~30 min / CC: ~5 min)**, runbook: anotar en D52 el TTHW del corte vertical. Verificar: las 2
  horas anotadas.

**Fuera de alcance (DX):** renombrar los scripts que ya existen; un script de preflight versionado (el runbook basta,
P5); una política de deprecación aparte.

### Fase eng: registro de cambios y requisitos aceptados

Historial: registro de cambios de la primera invocación de ingeniería (17-oct-2026), antes de la puerta final. Su texto ya está en el Implementation plan; la segunda invocación parte de ahí.

```text
<!-- autoplan-baseline-edits:eng {"sourceSha256":"dd7fb598747c2e721f177d259d0f478119182987cbef545913a55e9c91bd00b4","replacements":[{"oldText":"→ `faq` → `service-form` → `related`","newText":"→ `faq` → `form` → `related`"},{"oldText":"formulario con su serviceKey; servicios relacionados.","newText":"formulario `{ type: 'form', h2, intro }` (ContactForm), igual que las hermanas (`marketing.ts:329`, `:532`, `:715`): `service-form` no se usa porque `ServiceForm.astro:1-2` está construido y sin activar hasta la fase 3, y el flujo v1 de producción descarta los envíos sin correo (D30); servicios relacionados."},{"oldText":"La voz de diseño la recomienda: con las claves existentes, Anuncios muestra «Cotizar mi campaña» y pregunta por la inversión en pauta, y las otras 3 tratan al visitante como indeciso («Ayúdame a definir mi proyecto»)","newText":"La voz de diseño la recomienda. Con las claves existentes, el botón dice su `cta.boton`, pero el enlace a `/contacto/` lleva `?servicio=pauta` (Anuncios) o `?servicio=definir` (las otras 3, `[...slug].astro:34`), y el seguimiento (`data-service`) las cuenta dentro de esas claves; el `origen` del envío sí dice la página. Las claves nuevas suman además 4 opciones al `<select>` de ContactForm (`site.ts:67`), que se ve en todo el sitio. El formulario por servicio (ServiceForm) sigue fuera: es la fase 3"},{"oldText":"| Unidad, en `scripts/marketing-ia.test.mjs`. `node --test` lee los `.ts` como texto, igual que `paginasDelRegistro` (`datos.test.mjs:17-24`), porque no puede importar `site.ts` |","newText":"| Unidad, en `scripts/marketing-ia.test.mjs`. Importa `marketingPages` de `src/lib/pages/marketing.ts`, que Node 24 carga (probado en la revisión de ingeniería), y lee `site.ts` como texto porque su import de JSON no carga en `node --test` |"},{"oldText":"| `scripts/portadas-fotos.mjs` | Exporta `webpConTope` para las imágenes de ejemplo de 80 KB o menos |","newText":"| `scripts/lib/webp.mjs`, `scripts/portadas-fotos.mjs` | `webpConTope` se mueve a `scripts/lib/webp.mjs` (con su error `MKIA-PESO`); `portadas-fotos.mjs` la importa y la reexporta, y su CLI solo corre si es el script principal, porque hoy ejecuta `process.exit(2)` o `instalar()` al importarlo (`portadas-fotos.mjs:61-63`) |\n| `src/data/ia-creativa.json` | Nuevo: la lista de páginas de la tanda (slug, etiqueta, clave de precio, `medicionId`, `serviceKey`), de la que salen `iaCreativa` y las pruebas de conjuntos |\n| `scripts/gasto-ia.mjs` | Nuevo: transiciones del registro de gasto (`reservar`, `enviado`, `confirmar`, `fallido`) con el tope de la tanda |\n| `scripts/check-links.mjs` | Los `.mp4` se comprueban contra `dist/` en vez de contarse como rutas rotas |\n| `scripts/validar-marcador.test.mjs` | La prueba «el sitio real» toma la fecha como `verify.mjs` (`VALIDAR_HOY` o la del último commit), no la fija del 20-oct |\n| `nginx.conf` | `mp4` en la regla de caché de 30 días (`nginx.conf:51`) |"},{"oldText":"  - `keywords.test.mjs:37-39` y `:107-109`: nombre y cuenta, 34 → 34 + N en la Asignación y en el Apéndice.","newText":"  - `keywords.test.mjs:37-39` y `:107-109`: nombre y cuenta, 34 → 34 + N en la Asignación y en el Apéndice.\n  - `validar-marcador.test.mjs:16` y `:238`: la prueba «el sitio real» usa la fecha de `verify.mjs` (`VALIDAR_HOY` o la del último commit) en lugar de `2026-10-20` fijo, porque toda respuesta escrita después de esa fecha la pondría en rojo (`validar-marcador.mjs:100`). Las pruebas de los fixtures siguen con la fecha fija."},{"oldText":"  - `qa-a11y.mjs`: `/marketing/` en la lista fija.","newText":"  - `qa-a11y.mjs`: `/marketing/` en la lista fija.\n  - `check-links.mjs:35`: los `.mp4` dejan de contarse como enlace roto y se comprueba que existen en `dist/`; sin el cambio, «Descargar MP4» pone en rojo AC1 y `verify`."},{"oldText":"| Ver la lista de abajo | 6 pruebas, 3 validadores, 1 snapshot, 1 permiso, 1 umbral |","newText":"| Ver la lista de abajo | 7 pruebas, 4 validadores, 1 snapshot, 1 permiso, 1 umbral |"},{"oldText":"(6 pruebas modificadas, 3 validadores,","newText":"(7 pruebas modificadas, 4 validadores,"},{"oldText":"8. `npm run verify` en verde. Después `qa-responsive.mjs` en 4610 y las mediciones con `medir.mjs` en 4602.","newText":"8. Primero las mediciones con `medir.mjs` en 4602, que escriben `src/data/mediciones.json`, y `qa-responsive.mjs` en 4610. Después `npm run build` y `npm run verify` en verde sobre ese árbol, para que lo verificado sea lo que se sube. Si el texto lleva una `fecha` posterior al último commit, se commitea antes o se corre con `VALIDAR_HOY=<esa fecha>`."},{"oldText":"   - D52 tiene una línea por cada id de G1 a T4; si falta una, se para con `MKIA-PUERTA: falta <id>`.","newText":"   - D52 tiene una línea por cada id de G1 a T5; si falta una, se para con `MKIA-PUERTA: falta <id>`.\n   - `scripts/componer-pantallas.mjs` promovido desde el scratchpad de la portada v2 (hoy solo existe ahí), con su prueba en verde.\n   - Subtítulos en Roboto: un cuadro de prueba con `subtitles=<srt>:fontsdir=public/fonts:force_style='FontName=Roboto'`. Si libass no carga el `woff2` del sitio (en Windows no hay Roboto TTF instalado), se pide permiso al dueño para descargar el Roboto TTF de Google Fonts (Apache 2.0) a `.gstack/tmp/fonts/` y se usa esa carpeta."},{"oldText":"2. #2 y #2b, generación con la máquina de estados de gasto","newText":"2. #2 y #2b, generación con la máquina de estados de gasto, con `node scripts/gasto-ia.mjs` antes y después de cada envío"},{"oldText":"el archivo entero, con exit 0.","newText":"el archivo entero, con exit 0. `keywords.test.mjs` sigue en rojo por las filas nuevas del Apéndice hasta el `--actualizar` del paso 7, y es lo esperado."},{"oldText":"- `src/lib/site.ts`: `export const iaCreativa: NavLink[]` con las 4 páginas.","newText":"- `src/lib/site.ts`: `export const iaCreativa: NavLink[]` con las 4 páginas, construida desde `src/data/ia-creativa.json` (ver «Requisitos aceptados en la revisión»)."},{"oldText":"como las URL retiradas que ya redirige (`nginx.conf:58-64`).","newText":"como las URL retiradas que ya redirige (`nginx.conf:58-64`). Después del despliegue del revert, `curl -sI` de cada URL de la tanda debe responder 301 hacia `/marketing/`, y se anota en el resumen."},{"oldText":"Cada decisión queda en D52 como una línea `id = valor`, de `G1` a `T4`,","newText":"Cada decisión queda en D52 como una línea `id = valor`, de `G1` a `T5`,"},{"oldText":"| Cambia el texto de los ejemplos; la campaña es gasto aparte y da un caso propio con métricas |","newText":"| Cambia el texto de los ejemplos; la campaña es gasto aparte y da un caso propio con métricas |\n| T5 | Conteos de las pruebas que ya existen (gusto, voz de ingeniería de Codex) | Literales, editados una sola vez cuando D52 fija N: es la convención del repo, y un conteo fijo avisa si entra o sale una página sin querer | Derivarlos del manifiesto | Los 5 conteos (`validar-marcador.test`, `kind.test`, `datos.test`, `keywords.test` ×2) ya no se editan con N, pero dejan de avisar cuando se agrega o se quita una página por error |"},{"oldText":"| U1 | Medir la demanda antes de construir (las dos voces CEO, User Challenge) |","newText":"| U1 | Medir la demanda antes de construir (las dos voces CEO y Codex en ingeniería, que pide que bloquee la arquitectura; User Challenge) |"},{"oldText":"| T1 | Menú y pie (gusto, voz CEO de Claude) |","newText":"| T1 | Menú y pie (gusto, voz CEO de Claude y Codex en ingeniería) |"},{"oldText":"una fila `pendiente` sin conciliar y una fila con campos fuera de la lista | +6 |","newText":"una fila `pendiente` sin conciliar y una fila con campos fuera de la lista | +6 |\n| Ingeniería, en `scripts/marketing-ia.test.mjs` salvo donde se dice | Formulario: ninguna página nueva lleva ServiceForm, `data-service` = `serviceKey` (dist). `check-links` con un `.mp4` ausente falla. `lib/webp.mjs` se importa sin efectos y da `MKIA-PESO`. `gasto-ia.mjs`: transiciones válidas e inválidas y tope. Igualdad de conjuntos de `ia-creativa.json` con sus 10 sitios derivados. Datos de `marketingPages` (`serviceKey`, `cta.boton`, `desde`, orden, `voz` con `guion`). Ficha y códec contra el archivo (`statSync`, `mvhd`, `avc1`). Imágenes publicadas sin EXIF. La prueba «el sitio real» de `validar-marcador.test.mjs` con la fecha de `verify` | +9 |"},{"oldText":"`\"estado\"` (`pendiente` o `confirmado`, ver «Requisitos aceptados en la revisión»)","newText":"`\"estado\"` (`reservado`, `pendiente`, `confirmado` o `fallido`, escrito con `scripts/gasto-ia.mjs`; ver «Requisitos aceptados en la revisión»)"},{"oldText":"(`marketing.ts:33`) pasa de","newText":"(`marketing.ts:34`) pasa de"},{"oldText":"Salieron de las revisiones CEO, de diseño y de DX del 17-oct-2026.","newText":"Salieron de las revisiones CEO, de diseño, de DX y de ingeniería del 17-oct-2026."}]} -->
```


<!-- autoplan-baseline-edits:eng {"sourceSha256":"32318899fd4d220a8b7e4ceff3c389f82c348cbfce1e37f73d2549a33f55723b","replacements":[{"oldText":"y #1 escribe lo que decida ahí.","newText":"y #1 escribe lo que decida ahí. El 19-oct-2026 decidió 780 (paquete de 5 creativos), 500, 480 y 150."},{"oldText":"Línea base 0 para IA creativa; volumen sin medir (sin Planificador de Google Ads)","newText":"Línea base 0 para IA creativa; el volumen se mide en el paso 0b del «Runbook» (U1)"},{"oldText":"Orden: precios y ejemplos primero porque las páginas los consumen (Offer del schema y bloque «Así se vería»).","newText":"Orden: primero 1 día de medición de demanda (U1, paso 0b del «Runbook»), que fija los slugs y qué paquetes llevan página propia (U2). Después precios y ejemplos, porque las páginas los consumen (Offer del schema y bloque «Así se vería»)."},{"oldText":"### #1 Precios (confirmados por el dueño el 17-oct-2026 y reabiertos por la revisión: se reconfirman en la «Puerta del dueño»; estimados de mercado, no hay tarifas publicadas en Panamá)","newText":"### #1 Precios (decididos por el dueño en la puerta final del 19-oct-2026; estimados de mercado, no hay tarifas publicadas en Panamá)"},{"oldText":"| `anuncios-ia` | 450 | paquete | 10 creativos (8 imágenes y 2 videos de hasta 15 s) en formatos de Meta y Google, 2 rondas de cambios |","newText":"| `anuncios-ia` | 780 | paquete | 5 creativos (4 imágenes y 1 video de hasta 15 s) en formatos de Meta y Google, 2 rondas de cambios |"},{"oldText":"| `videos-ia` | 400 | paquete |","newText":"| `videos-ia` | 500 | paquete |"},{"oldText":"| `fotos-producto-ia` | 250 | paquete |","newText":"| `fotos-producto-ia` | 480 | paquete |"},{"oldText":"Los montos de la tabla son los que el dueño confirmó. Si en la «Puerta del dueño» elige otros, #1 escribe esos; si no los confirma, se sigue la rama «propuesto» descrita ahí. Cada clave lleva","newText":"Los montos de la tabla son los que el dueño decidió en la puerta final del 19-oct-2026 (G1 = opción b, más D2 y D3):\n- Videos: el punto medio de su fuente (US$ 300-700).\n- Fotos: el punto medio de 250-600 € por 10, 425 €. Al cambio de 1,1213 del 19-oct (Trading Economics) son US$ 476,55, redondeados hacia arriba a 480 para no quedar por debajo.\n- Anuncios: US$ 156 por pieza, el punto medio de US$ 1.250-1.875 por 10 creativos, en un paquete de 5 creativos.\n- Avatar: 150, por encima de su única fuente.\n\nCada clave lleva"},{"oldText":"La portada muestra igual «desde $450 por paquete de 10 creativos»","newText":"La portada muestra igual «desde $780 por paquete de 5 creativos»"},{"oldText":"Anuncios con IA en Panamá: 10 creativos en imagen y video para Meta y Google, con revisión humana, 2 rondas de cambios y licencia de uso comercial. (147)","newText":"Anuncios con IA en Panamá: 5 creativos en imagen y video para Meta y Google, con revisión humana, 2 rondas de cambios y licencia de uso comercial. (146)"},{"oldText":"Entrega «8 imágenes y 2 videos»","newText":"Entrega «4 imágenes y 1 video»"},{"oldText":"desde: '$450', unidad: 'por paquete de 10 creativos' }` con la cifra igual al `monto` de su clave (`$400` por paquete de 4 videos, `$250` por paquete de 10 fotos, `$150` por video de hasta 1 minuto, o lo que se decida en la «Puerta del dueño»)","newText":"desde: '$780', unidad: 'por paquete de 5 creativos' }` con la cifra igual al `monto` de su clave (`$500` por paquete de 4 videos, `$480` por paquete de 10 fotos, `$150` por video de hasta 1 minuto)"},{"oldText":"«Desde $450 por 10 creativos»","newText":"«Desde $780 por 5 creativos»"},{"oldText":"«Desde $400 por 4 videos»","newText":"«Desde $500 por 4 videos»"},{"oldText":"«Desde $250 por 10 fotos»","newText":"«Desde $480 por 10 fotos»"},{"oldText":"(«desde $450 por paquete de 10 creativos», en el mismo formato","newText":"(«desde $780 por paquete de 5 creativos», en el mismo formato"},{"oldText":"1. #1 precios en `precios.json`, con D52. Salida:","newText":"0b. Demanda (U1 y U2, decididos el 19-oct-2026), antes de fijar slugs (1 día):\n   - Planificador de palabras clave de Google Ads, en Panamá y en español: las 4 palabras principales y 2 alternativas por categoría. Por ejemplo: «anuncios para redes sociales», «diseño de anuncios», «videos publicitarios», «fotografía de producto», «presentador virtual». Lo corre el dueño, o Claude en el navegador del dueño con su permiso. Si la cuenta no muestra datos, se anota y queda la lectura de Google.\n   - Lectura de la primera página de Google por palabra, en ventana privada y desde Panamá: cuántos resultados son agencias o servicios y cuántos son herramientas.\n   - Regla: la tabla de decisión de U1 en «Requisitos aceptados en la revisión». Lleva página propia la palabra con búsquedas en el Planificador y al menos 3 resultados de agencias o servicios en Google. Si la palabra con «IA» trae solo herramientas, se usa la de la categoría. Un paquete sin búsquedas va como sección de otra página: se para con `MKIA-DEMANDA` y la sección se planifica aparte.\n   - Nicole habla con prospectos en paralelo; sus notas no frenan este paso.\n   - Salida: D52 anota, por palabra, el rango del Planificador, la lectura de Google, la fecha y la decisión (página propia o sección), y congela los slugs. Si falta una palabra, se para con `MKIA-DEMANDA: falta la medición de <palabra>`.\n1. #1 precios en `precios.json`, con D52. Salida:"},{"oldText":"- Blog, campañas pagadas, versiones en inglés, medición de volumen con el Planificador.","newText":"- Blog, campañas pagadas y versiones en inglés."},{"oldText":"| #1 Precios y D52 | 1 h | 10 min |","newText":"| #0 Medición de demanda (U1) | 1 día | 1 h, más el tiempo del dueño en el Planificador |\n| #1 Precios y D52 | 1 h | 10 min |"},{"oldText":"| G1 | Precios (D52.3) | Los montos confirmados el 17-oct (450, 400, 250 y 150) |","newText":"| G1 | Precios (D52.3) | Decidido el 19-oct-2026: 780 (5 creativos), 500, 480 y 150 |"},{"oldText":"| Construir según D52.2 |","newText":"| Decidido el 19-oct-2026: medir 1 día antes de fijar slugs (Planificador y primera página de Google); Nicole habla con prospectos en paralelo |"},{"oldText":"| 4 páginas (D52.2) |","newText":"| Decidido el 19-oct-2026: según los datos de U1; el paquete sin búsquedas va como sección de otra página |"},{"oldText":"| Paquetes de un solo pago; cada página dice","newText":"| Decidido el 19-oct-2026 (se mantiene): paquetes de un solo pago; cada página dice"},{"oldText":"dejan de avisar cuando se agrega o se quita una página por error |","newText":"dejan de avisar cuando se agrega o se quita una página por error |\n\nRespuesta del dueño, 19-oct-2026: «rec» en la puerta final. Después vinieron D2 (anuncios: paquete de 5 creativos por US$ 780) y D3 (fotos: US$ 480). U1, U2 y G1 cambian según su columna «Por defecto», marcada «Decidido». U3, G2-G8 y T1-T5 quedan en su valor por defecto. D52 copia cada línea `id = valor`."},{"oldText":"- Clip sin voz: `ffmpeg -y -nostdin -i <crudo>.mp4 -c:v libx264 -crf 28 -preset slow -vf \"scale=-2:1280\" -an -movflags +faststart","newText":"- Clip sin voz: `ffmpeg -y -nostdin -i <crudo>.mp4 -c:v libx264 -pix_fmt yuv420p -profile:v high -crf 28 -preset slow -vf \"scale=-2:1280\" -an -movflags +faststart"},{"oldText":"- Clip con voz de ElevenLabs (el primero de Videos): `ffmpeg -y -nostdin -i <crudo>.mp4 -i <voz>.mp3 -map 0:v -map 1:a -vf \"scale=-2:1280,subtitles=.gstack/tmp/marketing-ia/<base>.srt\" -c:v libx264 -crf 28 -preset slow -c:a aac -b:a 96k -shortest -movflags +faststart","newText":"- Clip con voz de ElevenLabs (el primero de Videos): `ffmpeg -y -nostdin -i <crudo>.mp4 -i <voz>.mp3 -map 0:v -map 1:a -vf \"scale=-2:1280,subtitles=.gstack/tmp/marketing-ia/<base>.srt\" -c:v libx264 -pix_fmt yuv420p -profile:v high -crf 28 -preset slow -c:a aac -b:a 64k -ac 1 -shortest -movflags +faststart"},{"oldText":"- Avatar: como el anterior, sin la segunda entrada; conserva su propio audio con `-c:a aac -b:a 96k`.","newText":"- Avatar: como el anterior, sin la segunda entrada; conserva su propio audio con `-c:a aac -b:a 64k -ac 1`.\n- `-pix_fmt yuv420p -profile:v high` va siempre: sin eso, libx264 conserva el formato de la entrada y un 4:4:4 da un perfil que iOS y Safari no reproducen.\n- El guion de cada video con voz tiene como máximo 2,3 palabras por segundo de clip, para que la voz quepa sin que `-shortest` la corte."},{"oldText":"Si pasa de 2 MB, la escalera es CRF 30, luego 32, luego altura 960 (`scale=-2:960`) y luego recortar a 8 s (`-t 8`); si aun así no alcanza","newText":"Si pasa de 2 MB, la escalera es CRF 30, luego 32, luego altura 960 (`scale=-2:960`). En un clip sin voz, el último escalón es recortar a 8 s (`-t 8`). En uno con voz nunca se recorta, porque cortaría el habla y desincronizaría subtítulos y guion: después de 960 siguen CRF 34 y `-r 25`. Si aun así no alcanza"},{"oldText":"videos `public/videos/ia-creativa/<pagina>-<n>.mp4`","newText":"videos `public/videos/ia-creativa/ia-<pagina>-<n>.mp4` (con `-v2`, `-v3`… al regenerar)"},{"oldText":"Sus estilos van en `src/styles/molde-kredit.css`, que solo se pone en línea en las páginas v2 (aprendizaje `astro-css-por-ruta-no-por-componente`), reusando el marco y el pie de los tipos que ya existen; `node scripts/presupuestos.mjs` debe seguir en verde sin subir ningún máximo (el 17-oct quedan 2.913 B de CSS en `servicio` y 3.613 B en `hub`, gzip).","newText":"Sus estilos van en una hoja nueva, `src/styles/ejemplo-media.css`, que `[...slug].astro` pone en línea solo cuando la página tiene ejemplos `foto` o `video` (aprendizaje `astro-css-por-ruta-no-por-componente`). No van en `molde-kredit.css`, porque esa hoja también va en línea en la portada (`src/pages/index.astro:27`), que tiene solo 869 B de margen de CSS (26.731 de 27.600 B gzip, medido el 19-oct). La hoja nueva reusa el marco y el pie de los tipos que ya existen. `node scripts/presupuestos.mjs` debe seguir en verde sin subir ningún máximo: quedan 2.913 B libres en `servicio`, 3.613 B en `hub` y 869 B en `portada`, gzip, y la portada no cambia."},{"oldText":"Salida: `npm run build` y `VERIFY=1 node --test scripts/marketing-ia.test.mjs`, el archivo entero, con exit 0.","newText":"Salida: `npm run build` y `VERIFY=1 node --test --test-skip-pattern=mediciones scripts/marketing-ia.test.mjs` con exit 0. La igualdad con `mediciones.json` se cumple en el paso 8, cuando `medir.mjs` escribe sus filas; ahí corre el archivo entero."},{"oldText":"7. `node scripts/seo-congelado.mjs`: salen N errores «URL nueva…» y nada más. Luego el diff del snapshot y `--actualizar`.","newText":"7. `node scripts/seo-congelado.mjs`: salen N errores «URL nueva…» y nada más. Luego el diff del snapshot y `--actualizar`. Después se quita `description` del permiso de `/marketing/` (`cambios-permitidos.json:72` vuelve a `\"campos\": [\"schema\"]`), para que no quede abierto a cambios futuros, y `seo-congelado` sigue en 0. Es un cambio de permiso declarado según la regla 3."},{"oldText":"Los 4 slugs de `iaCreativa` (`site.ts`) existen como `slug:` en `src/lib/pages/marketing.ts`.","newText":"Los slugs de `src/data/ia-creativa.json` existen en `marketingPages`."},{"oldText":"capturas para el dueño) | 3 h | 1 h |","newText":"capturas para el dueño) | 3 h | 2 h |"},{"oldText":"| `scripts/comparar-main.mjs` | Nuevo: compara el `<main>` de cada HTML entre dos `dist/` (AC14) |","newText":"| `scripts/comparar-main.mjs` | Nuevo: compara el `<main>` de cada HTML entre dos `dist/` (AC14) |\n| `src/styles/ejemplo-media.css`, `src/pages/[...slug].astro` | Hoja nueva con los estilos de `foto` y `video`, en línea solo en las páginas que los usan |\n| `src/lib/ejemplos.ts` | Nuevo: `assertTipoEjemplo()` (error `MKIA-EJEMPLO`) y `fichaVideo()`, que llama `Ejemplo.astro` y que prueba `node --test` |\n| `.gstack/tmp/gasto-ia.lock` (temporal, ignorado por git) | Bloqueo de escritura del registro de gasto mientras `gasto-ia.mjs` lo reescribe |"},{"oldText":"La prueba «el sitio real» de `validar-marcador.test.mjs` con la fecha de `verify` | +9 |","newText":"La prueba «el sitio real» de `validar-marcador.test.mjs` con la fecha de `verify` | +9 |\n| Ingeniería, segunda pasada | `componer-pantallas` con dos regiones junto al borde de una fila. `src/lib/ejemplos.ts` (`MKIA-EJEMPLO` y `fichaVideo`). Rótulo «Ejemplo de anuncio» en `dist/`. Se extienden sin subir la cuenta: cajas MP4 (`avcC`, `mdhd`), gasto (`asumido`, `sobrepaso`, bloqueo, tope del archivo y valores con URL), créditos (medidas orientadas) e igualdad de conjuntos (`HERO_ALTS`) | +3 |"},{"oldText":"- Permiso: `scripts/cambios-permitidos.json:72`, editado para `/marketing/`.","newText":"- Permiso: `scripts/cambios-permitidos.json:72`, editado para `/marketing/` y vuelto a `[\"schema\"]` después del `--actualizar` (paso 7)."},{"oldText":"| Unidad, en `scripts/marketing-ia.test.mjs`. Importa `marketingPages` de `src/lib/pages/marketing.ts`, que Node 24 carga (probado en la revisión de ingeniería), y lee `site.ts` como texto porque su import de JSON no carga en `node --test` |","newText":"| Unidad, en `scripts/marketing-ia.test.mjs`. Importa `marketingPages` de `src/lib/pages/marketing.ts`, que Node 24 carga (probado en la revisión de ingeniería), y lee `src/data/ia-creativa.json`. `site.ts` no se importa porque su import de JSON no carga en `node --test` |"},{"oldText":"| `src/lib/types.ts`, `src/components/Ejemplo.astro`, `src/styles/molde-kredit.css` | Tipos `foto` y `video` de «Así se vería» y sus estilos |","newText":"| `src/lib/types.ts`, `src/components/Ejemplo.astro`, `src/styles/ejemplo-media.css` | Tipos `foto` y `video` de «Así se vería» y sus estilos (no en `molde-kredit.css`, que también va en la portada) |"},{"oldText":"| `scripts/gasto-ia.mjs` | Nuevo: transiciones del registro de gasto (`reservar`, `enviado`, `confirmar`, `fallido`) con el tope de la tanda |","newText":"| `scripts/gasto-ia.mjs` | Nuevo: transiciones del registro de gasto (`reservar`, `enviado`, `confirmar`, `fallido`, `asumido` y `sobrepaso`), con el tope de la tanda y el bloqueo `MKIA-BLOQUEO` |"},{"oldText":"Salieron de las revisiones CEO, de diseño, de DX y de ingeniería del 17-oct-2026.","newText":"Salieron de las revisiones CEO, de diseño, de DX y de ingeniería del 17 y del 19-oct-2026."}]} -->

<!-- autoplan-accepted:eng -->
- Formulario: las páginas nuevas cierran con `{ type: 'form', h2, intro }` (ContactForm), como sus hermanas. `ServiceForm` sigue sin usarse hasta la fase 3, cuando el flujo v2 de n8n esté subido y probado. Hoy el correo es opcional en ServiceForm y el flujo v1 descarta los envíos sin correo respondiendo `{"ok": true}` (D30), así que una consulta así se perdería sin aviso. Verificación: prueba sobre `dist/` de que ninguna página nueva lleva el marcado de ServiceForm, que su `<main>` tiene `data-service` igual a su `serviceKey`, y que `cta.boton` es el texto del botón principal.
- `check-links.mjs` trata los enlaces a `.mp4`: comprueba que el archivo existe en `dist/` y no lo cuenta como ruta rota. Un `.mp4` que falta sí falla. Verificación: `node scripts/check-links.mjs` con 0 enlaces rotos y un caso de unidad con un `.mp4` ausente que falla.
- La prueba «el sitio real» de `validar-marcador.test.mjs` usa la misma fecha que `verify.mjs`: `VALIDAR_HOY` o la fecha del último commit. Las respuestas con `fecha` posterior a esa fecha siguen fallando (`validar-marcador.mjs:100`). Verificación: `npm test` en verde con una `fecha` del día en que se escribe el texto.
- `webpConTope` vive en `scripts/lib/webp.mjs`. `portadas-fotos.mjs` la importa y la reexporta, y su CLI solo corre cuando es el script principal (`process.argv[1] === fileURLToPath(import.meta.url)`, como `validar-marcador.mjs`). Si no llega al tope, sale `MKIA-PESO` con el peso logrado. Verificación: prueba de unidad que importa el módulo sin efectos y una que comprueba el mensaje `MKIA-PESO`.
- Gasto, con un registro que se escribe antes de cobrar:
  - `node scripts/gasto-ia.mjs reservar <pieza> <modelo> <estimado>` escribe una fila `reservado` antes de `submit_jobs`. El estimado cuenta para el tope, y el chequeo suma el lote entero, no una pieza.
  - `enviado <id> <request_id>` la pasa a `pendiente`. `confirmar <id> <costo>` la pasa a `confirmado`. `fallido <id>` deja costo 0 cuando el trabajo tiene `request_id` y no se cobró. Una fila `reservado` cuyo envío devolvió un error (el trabajo no existe) se borra. Si la sesión se cortó y no se sabe si el trabajo existe, la fila espera la conciliación y no se borra.
  - El script valida cada transición. Sale con `MKIA-TOPE` (plantilla de DX) si el tope no alcanza, y recalcula `gastado` y `tandas["marketing-ia"].gastado` en centavos.
  - En fal, el costo real es la tarifa del endpoint (`get_pricing` del día) por las unidades facturadas que trae el resultado (imágenes, segundos, caracteres). `search_request_history` no trae costo y puede no tener los trabajos recientes, así que no sirve para el costo.
  - Para conciliar una fila `pendiente` tras una sesión cortada se usa `check_job` o `get_job_result` con su `request_id`. Una fila `reservado` sin `request_id` se concilia por endpoint y hora en `search_request_history`. Si no aparece, se espera hasta 24 h sin reenviar, y después pasa a `asumido`.
  - En Higgsfield, el costo sale de `transactions` del trabajo; la diferencia de `balance` queda solo como control, porque el dueño puede correr otros trabajos a la vez.
  - Este bloque manda sobre el gasto. Donde los requisitos de CEO y DX dicen que el costo o la conciliación salen de `search_request_history`, o que la fila se escribe después de `submit_jobs`, vale lo de aquí: la fila se reserva antes; el costo es la tarifa por las unidades; se concilia con `check_job`.
  - Tabla única de estados: `reservado` → `pendiente` → `confirmado` | `fallido`. Dos estados terminales más:
    - `asumido`: una fila `reservado` sin `request_id` que no aparece en `search_request_history` después de 24 h. Su estimado cuenta como gastado, y D52 lleva la nota del dueño. Lleva como `request_id` el texto `sin-id:<id local>`, para que se cumpla la regla de CEO (toda fila con `request_id`) y se vea que no hubo trabajo identificado.
    - `sobrepaso`: el costo real que, al confirmar, deja la tanda por encima de US$ 15. Bloquea todo envío nuevo hasta que el dueño apruebe en D52.
  - Para que el costo real no pase el tope, la reserva usa el máximo facturable del trabajo (por ejemplo, la duración máxima pedida), no el promedio.
  - `gasto-ia.mjs` toma un bloqueo exclusivo (`.gstack/tmp/gasto-ia.lock`, `openSync(…, "wx")`) mientras reescribe el registro, porque otras sesiones también escriben en él. Sale con `MKIA-BLOQUEO` si el bloqueo existe.
  - Verificación: una prueba de unidad de `gasto-ia.mjs` con transiciones válidas e inválidas, el tope, `asumido`, `sobrepaso` y el bloqueo. La prueba de AC8 falla con filas `reservado` o `pendiente` sin conciliar, suma en centavos (hoy `gastado` da `7.77000000000001`), exige `gastado` ≤ `tope` del archivo y rechaza valores con `https?://` o `token=`.
- Fuente única de la tanda: `src/data/ia-creativa.json` lista slug, etiqueta, clave de precio, `medicionId` y `serviceKey` de cada página que sale; `site.ts` arma `iaCreativa` desde ahí. Verificación: pruebas de igualdad de conjuntos entre ese archivo y el manifiesto, `marketingPages`, `formulario.paginas`, las 2 tablas de KEYWORDS, `llms.txt` (incluido su `$N`, que debe ser el `monto`), `HERO_SLUGS`, `mediciones.json` y los enlaces del hub, del catálogo y de `related`. Una página que falte en cualquiera de ellos hace fallar, no se salta.
- Las pruebas de datos importan `marketingPages` y comprueban, por página: `serviceKey === formulario.paginas[slug]`, `cta.boton` presente, `receipt.precio.desde` igual al `monto`, el orden de bloques fijado, y `voz` y `guion` en cada video. Las pruebas por página leen `dist/` dentro de cada `test(...)`, no al cargar el archivo, para que en el corte vertical una página sin compilar no rompa las demás. La entrada del manifiesto se agrega junto con su página.
- Portadas compuestas:
  - El prompt pide la pantalla de frente a la cámara, porque `componer-pantallas.mjs` pega la pieza sobre un rectángulo sin perspectiva.
  - El despill (quitar el tono magenta) se limita a un margen alrededor de cada pantalla, para no apagar ropa ni objetos rosados del resto de la foto.
  - Como `PortadaServicio.astro:18` rompe el build si falta la `-1200.webp`, el mínimo de ejemplos de cada página suma «portada instalada»; sin portada, la página no sale.
  - Verificación: la hoja de contactos muestra cada portada a tamaño real, y la prueba de igualdad incluye `HERO_SLUGS`.
- Créditos (AC8):
  - «Archivo nuevo» es `public/images/ejemplos/ia-*`, `public/images/hero/marketing--*`, `public/images/og/marketing--*` y todo `public/videos/ia-creativa/`. Hay 4 archivos viejos sin fila en `CREDITOS.json` (`movil-sanblasfull-390.webp`, `-780.webp`, `movil-sanblasfull.jpg`, `movil-tramitapa-780.webp`) que quedan fuera de esta prueba.
  - Cada carpeta conserva sus claves (`origen` en ejemplos, `modelo` en hero), y la foto de stock lleva licencia, autor y URL, como las filas de stock que ya existen.
  - La lista cerrada de campos de DX aplica al registro de gasto.
  - Verificación: la prueba de créditos con esos patrones.
- La ficha de cada video se comprueba contra el archivo. Una prueba sobre `dist/` compara `bytes` con `statSync` y `duracion` con la caja `mvhd` del `.mp4` (±0,5 s), y que el códec de video sea `avc1` (caja `stsd`). Es la misma lectura de cajas de la prueba de audio, y corre en CI sin ffmpeg.
- Cada video con `voz` lleva `guion`, que es su transcripción en `<details>`, no solo el avatar. Los subtítulos quemados van en Roboto (`force_style`), y la hoja de contactos suma el criterio «subtítulos en Roboto y legibles».
- `selectores-hoja.mjs` busca con `git grep --untracked -lwF`, porque Tailwind lee también archivos que aún no tienen `git add`.
- `nginx.conf:51` suma `mp4` a la regla de 30 días. Al regenerar un video, el archivo cambia de nombre (`-v2`) para no servir la copia vieja de caché.
- Los `id` de `aria-describedby` de cada video salen del nombre del archivo y son únicos en la página. Verificación: `qa-a11y` sin `duplicate-id-aria`.
- La foto «antes» del dueño (G4) se limpia de metadatos (EXIF, GPS) con `sharp` antes de subirla a fal y antes de publicarla. Verificación: prueba de que ninguna imagen nueva publicada tiene EXIF.
- Cada `medicionId` de `ia-creativa.json` tiene su fila en `src/data/mediciones.json` (prueba de igualdad de arriba).
- AC11 y AC14 corren en local y una vez, no en `verify` ni en CI. El resumen lo dice y el padre los vuelve a correr antes del push.
- G1 se presenta en la puerta con una tabla por paquete: rango de la fuente, punto medio, monto propuesto, diferencia y motivo, que D52 copia. Sin esa tabla no se escribe ninguna clave en `confirmados`.
- Puerta del 19-oct-2026: precios y prueba.
  - Los montos de `precios.json` son 780 (`anuncios-ia`, por paquete de 5 creativos), 500 (`videos-ia`), 480 (`fotos-producto-ia`) y 150 (`avatar-ia`).
  - El alcance de Anuncios con IA es de 5 creativos (4 imágenes y 1 video de hasta 15 s), en `precios.json`, en la descripción, en el riel, en la respuesta citable, en la tabla del hub y en `llms.txt`.
  - Verificación: la prueba de montos los compara exactos, y la prueba sobre `dist/` busca «5 creativos» y ninguna mención a «10 creativos» en Anuncios.
- Puerta del 19-oct-2026, U1. El paso 0b del «Runbook» mide la demanda antes de fijar slugs, y D52 anota por palabra el rango del Planificador, la lectura de Google, la fecha y la decisión. La decisión sigue esta tabla:
  - Página propia: el Planificador da un rango mayor que 0 para la principal o para una alternativa de su categoría, y en la primera página de Google hay al menos 3 resultados de agencias o servicios.
  - Si la primera página de la palabra con «IA» trae solo herramientas, la principal pasa a la palabra de la categoría (por ejemplo «fotografía de producto»), siempre que cumpla la regla anterior, y la IA queda como diferenciador en el texto.
  - Una alternativa reemplaza a la principal solo si su rango es mayor y cumple la misma regla de intención. Con el mismo rango, se queda la del plan.
  - Si la cuenta no muestra datos del Planificador, decide la lectura de Google sola, y D52 lo anota.
  - Sin búsquedas o con primera página solo de herramientas: el paquete va como sección (U2).
  - Verificación: el paso 1 no arranca sin esas líneas en D52 (`MKIA-DEMANDA`).
- Puerta del 19-oct-2026, U2: un paquete sin búsquedas va como sección de otra página, como decidió el dueño. Esa sección no se construye con este plan, porque sus contratos (destino con ancla, schema de la página anfitriona, pruebas de precio y medición) dependen de qué páginas salgan.
  - Si el paso 0b deja algún paquete sin búsquedas, se para con `MKIA-DEMANDA: <paquete> sin búsquedas → sección`.
  - Se arma entonces un plan corto de la sección: página anfitriona (la de más búsquedas medidas o el hub), `id` del bloque y enlaces con ancla, `service.catalogo` y las pruebas de `offers` contra `hasOfferCatalog`, `llms.txt` y KEYWORDS. Pasa por una revisión de ingeniería antes de construirse.
  - Las páginas con búsquedas siguen sin esperar. `ia-creativa.json` lista solo páginas, y `medicionId` es de páginas.
  - Verificación: D52 anota la decisión por palabra. Ninguna prueba de esta tanda cubre secciones.
- Segunda revisión de ingeniería (19-oct-2026):
  - Los estilos de `foto` y `video` van en `src/styles/ejemplo-media.css`, en línea solo en las páginas que los usan. Verificación: `presupuestos.mjs` con la portada en sus 26.731 B de CSS gzip, sin cambio.
  - Videos: `-pix_fmt yuv420p -profile:v high` en los tres comandos. Clips con voz con audio `-b:a 64k -ac 1` y sin recorte (`-t`). Guion de 2,3 palabras por segundo como máximo. Verificación: la prueba de cajas lee `avcC` y exige `profile_idc` en {66, 77, 100}; la duración de la pista `soun` (`mdhd`) es la del video ±0,5 s; y `guion` cumple el tope de palabras.
  - `src/lib/ejemplos.ts` exporta `assertTipoEjemplo()` (`MKIA-EJEMPLO`) y `fichaVideo({ duracion, voz, bytes })`, que llama `Ejemplo.astro`. La prueba de unidad importa el módulo, como `tanda-a.test.mjs` importa `src/lib/*.ts`.
  - `componer-pantallas.mjs` se copia hoy a `~/.gstack/projects/josimarguilbaud-elementoweb/` como respaldo, porque el scratchpad se puede borrar. Al promoverlo, su relleno de regiones revisa el borde de cada fila (`x`), para que dos regiones a ambos lados de un borde no se unan. Verificación: una prueba de unidad con dos regiones junto al borde.
  - La foto «antes» pasa por `sharp(...).rotate()` antes de quitar los metadatos, para que no se publique ni se envíe girada. Verificación: la prueba de «sin EXIF» también compara las medidas orientadas.
  - La línea de frontera de Fotografía de producto va sin cifra en la página. El «US$ 100» del requisito CEO describe el servicio, no el texto, y una cifra que no es el `monto` rompería AC7.
  - `HERO_ALTS` entra a la igualdad de conjuntos, y el texto de cada portada nueva dice que la foto es de IA.
  - `dist-guard.mjs` recibe la raíz como parámetro, para probar `MKIA-DIST` sin borrar el `dist/` real.
  - `selectores-hoja.mjs` compara conjuntos de nombres de clase desescapados, no selectores crudos (Tailwind 4 emite `&:hover`, `:where()`, `@media (hover:hover)` y `@property`).
  - En `anuncio-social`, «Ejemplo de anuncio» ya va en el marco del componente (`Ejemplo.astro:36`), fuera de la imagen generada, y el bloque lleva su `nota`. La imagen de fal no lleva la palabra. Verificación: prueba sobre `dist/` de que cada anuncio de las páginas nuevas muestra ese rótulo.
<!-- /autoplan-accepted:eng -->

### Fase 3, ingeniería: segunda invocación (después de la puerta del 19-oct-2026)

**Por qué hay una segunda pasada.** En la puerta final del 19-oct, el dueño respondió `rec`, y después D2 (anuncios: 5 creativos por US$ 780) y D3 (fotos: US$ 480). Aceptó así 3 User Challenges: U1 (medir la demanda), U2 (páginas según las búsquedas) y G1 (precios). La regla B2 de /autoplan pide volver a correr ingeniería sobre el plan corregido.

Cómo se hizo:
- El registro de cambios de la primera invocación pasó al historial.
- La foto `autoplan-eng-eXrdaT` parte del plan ya revisado.
- Las decisiones de la puerta entraron como cambios registrados.
- Las dos voces revisaron la entrada corregida, `autoplan-eng-FEFjrV` (sha `e201cd96…`).

Objetivo fijo: ese plan, contrastado con el repo en `4119f70`. Modo FULL_REVIEW, con el alcance aceptado tal cual: la sección de U2 se pospone, no se recorta.

**Paso 0, alcance.**
- Lo nuevo frente a la primera pasada:
  - El paso 0b (medición de demanda), que no agrega código: corre a mano en el Planificador y en Google, con su anotación en D52.
  - Los precios y el alcance de Anuncios, que son datos.
  - Las correcciones de la segunda pasada:
    - la hoja `ejemplo-media.css`;
    - el helper `src/lib/ejemplos.ts`;
    - el bloqueo y los estados terminales del gasto;
    - los parámetros de ffmpeg.
- La complejidad sigue sobre el umbral: unos 49 archivos (estimado) y 10 piezas nuevas. Auto-decisión del selector de estructura: «Original arrangement», por P5 y P3. Achica la rama U2, que no se construye ahora; ninguna otra disposición conserva los contratos ya aceptados.
- Búsqueda: un solo dato externo, el cambio EUR/USD del 19-oct (Trading Economics: 1,1213), para el precio de fotos.

**Premisas verificadas en esta pasada:**

| # | Premisa | Recibo | Veredicto |
|---|---|---|---|
| E13 | Los estilos nuevos caben en `molde-kredit.css` | `src/pages/index.astro:27` lo pone en línea en la portada; `presupuestos.mjs`: portada CSS 26.731 / 27.600 B | falsa: 869 B de margen → hoja aparte |
| E14 | La escalera de compresión sirve para clips con voz | el último escalón `-t 8` corta los 15-20 s del avatar | falsa → sin recorte en clips con voz |
| E15 | `avc1` basta para que el video se reproduzca en iOS | libx264 conserva el formato de la entrada; un 4:4:4 da un perfil que Safari no reproduce | falsa → `yuv420p` y prueba de `avcC` |
| E16 | La sección de U2 tiene destino, schema y medición definidos | `NavLink` solo tiene `slug` y `label`, `url()` arma `/${slug}/` (`site.ts:441`); `includes` no emite `id` | falsa → se pospone con su propio plan |
| E17 | `anuncio-social` marca «Ejemplo» fuera de la pieza | `Ejemplo.astro:36` lo pone en el marco del componente, no en la imagen | cierta con esa lectura → prueba sobre `dist/` |
| E18 | El Planificador basta para decidir la página | Codex: una página de solo herramientas indica otra intención | falsa → tabla de decisión con la lectura de Google |
| E19 | Cambio EUR/USD del 19-oct | Trading Economics 1,1213; OFX 1,121 (18-oct) | cierta, estimado del día |

REALITY: premise-table finding unverified=1 (E19 es un dato de mercado del día; E13-E16 y E18 falsas y corregidas) src/pages/index.astro:27
REALITY: already-done pass git log origin/main --since=2026-10-17 sin commits nuevos en los archivos nombrados src/lib/site.ts:441
REALITY: surface-check finding node --test admite --test-skip-pattern en Node 24; `NavLink` sin ancla; `includes` sin id; ffmpeg 8.1.2 sin -pix_fmt fijo src/lib/site.ts:110
REALITY: binding-decisions pass puerta del 19-oct: U1b, U2b, U3a, G1b, D2 (780 por 5) y D3 (480) aplicados; U2 se pospone sin cambiar la dirección del dueño .gstack/tmp/autoplan/decisions.jsonl:1
REALITY: numbers pass portada CSS 26.731/27.600 B [measured: scripts/presupuestos.mjs]; 425 € × 1,1213 = 476,55 [measured: .gstack/tmp/autoplan/autoplan-eng-FEFjrV/eng-implementation.md:46]; 49 archivos [estimated] src/pages/index.astro:27
REALITY: deferred-asks pass la sección de U2 se pospone a su propio plan, con `MKIA-DEMANDA` si ocurre; nada del pedido del dueño queda fuera sin decirlo docs/specs/rediseno-elementoweb/SPEC-MARKETING-IA.md:1
REALITY: pr-count pass pr_count=1 por defecto; una sola ola por push a main con permiso del dueño .github/workflows/deploy.yml:71

`PLAN_REALITY: phase=eng rows=7/7 missing=none unverified=1 verdict=complete` (segunda invocación)

**Voces.**
- Nativa (subagente de Claude): completada en 920 s, con `INPUT eng e201cd96…` igual a la entrada corregida. 22 hallazgos: 4 P1, 6 P2 y 12 P3. Midió los presupuestos y leyó `index.astro`, `componer-pantallas.mjs`, `medir.mjs`, `img.ts`, `nginx` y `security.conf`.
- Externa (Codex, `gpt-5.6-terra`): completada al primer intento, en 482 s. 6 hallazgos: 3 altos y 3 medios. Su recomendación: «Revise the U1/U2 data contract before implementation because section-only packages currently have no unambiguous destination, metric, or schema/test semantics».

```
ENG DUAL VOICES — CONSENSUS TABLE (segunda invocación):
  Dimension                           Claude  Codex  Consensus
  1. Architecture sound?               NO      NO     CONFIRMED NO (gasto contradictorio; contrato de la sección U2 ambiguo)
  2. Test coverage sufficient?         NO      NO     CONFIRMED NO (MKIA-EJEMPLO sin forma de probarse; schema de la sección; rótulo del anuncio)
  3. Performance risks addressed?      NO      —      N/A (solo la nativa: 869 B de CSS en la portada)
  4. Security threats covered?         NO*     —      N/A (solo la nativa: valores con URL en el registro; *bajo)
  5. Error paths handled?              NO      NO     CONFIRMED NO (fila sin salida en el gasto; tope pasado después del cobro)
  6. Deployment risk manageable?       NO      NO     CONFIRMED NO (el paso 5 no puede salir en verde; URL fijas con la intención equivocada)
```
4 de 6 confirmadas y 0 desacuerdos entre las voces.

**Sección 1, arquitectura.**
- [P1] (confidence: 8/10) Contrato de la sección de U2 (Codex alto ×2 y medio; nativa F10, F11).
  - `NavLink` solo tiene `slug` y `label`, y `url()` construye `/${slug}/` (`site.ts:441`).
  - Una sección no tiene URL propia, ni `id` en `includes`, ni una medición que tenga sentido.
  - Disposición: aceptado como posposición, por P3 y P5. La dirección del dueño se mantiene: si 0b deja un paquete sin búsquedas, se para con `MKIA-DEMANDA` y la sección se diseña con su propio plan y su revisión. `ia-creativa.json` lista solo páginas.
- [P1] (confidence: 9/10) Registro de gasto (nativa F4, F6; Codex medio).
  - Las reglas de CEO, DX e ingeniería se contradecían.
  - Una fila `reservado` podía quedar sin salida.
  - El costo real podía pasar el tope después de cobrar.
  - El registro es compartido con otras sesiones.
  - Disposición: aceptado. Este bloque manda sobre los anteriores. Hay tabla única de estados, con `asumido` a las 24 h y `sobrepaso` que bloquea. La reserva usa el máximo facturable, y el script toma un bloqueo `wx`. La prueba exige `gastado` ≤ `tope`.
- [P1] (confidence: 7/10) Regla de demanda de U1 (Codex alto). La lectura de Google no decidía nada. Disposición: aceptado. Ahora hay una tabla de decisión: rango > 0, al menos 3 resultados de servicios, la categoría si la palabra con «IA» trae solo herramientas, y desempate a favor de la palabra del plan.

**Sección 2, calidad del código.**
- [P2] (confidence: 8/10) `MKIA-EJEMPLO` no se puede probar con `node --test` sobre `.astro` (nativa F7). Disposición: aceptado. Se crea `src/lib/ejemplos.ts`, que se importa como en `tanda-a.test.mjs`.
- [P2] (confidence: 8/10) `componer-pantallas.mjs` vive solo en `%TEMP%`, y su relleno con `q±1` puede unir regiones que están a ambos lados del borde de una fila (nativa F8). Disposición: aceptado. Ya se copió como respaldo a `~/.gstack/projects/josimarguilbaud-elementoweb/`, y al promoverlo se arregla el relleno, con su prueba.
- [P2] (confidence: 8/10) `sharp` no aplica la orientación EXIF si no se llama `.rotate()` (nativa F9). Disposición: aceptado.
- [P3] (confidence: 7/10) Nombres de video inconsistentes (nativa F13). Disposición: aceptado. La regla única es `ia-<pagina>-<n>.mp4`, con `-v2` al regenerar.
- [P3] (confidence: 6/10) Valores con URL firmada dentro de `uso` (nativa F19). Disposición: aceptado. La prueba rechaza `https?://` y `token=`.

**Sección 3, pruebas.**
- [P1] (confidence: 9/10) El paso 5 exigía el archivo entero en verde, y la igualdad con `mediciones.json` solo se cumple en el paso 8 (nativa F1). Disposición: aceptado. El paso 5 corre con `--test-skip-pattern=mediciones`, y el paso 8 corre todo.
- [P2] (confidence: 8/10) Formato de color y perfil del H.264 (nativa F5). Disposición: aceptado. Los comandos llevan `yuv420p` y `high`, y la prueba lee `avcC`.
- [P2] (confidence: 7/10) Videos con voz: sin recorte, con tope de palabras y con la duración de `soun` igual a la del video (nativa F3). Disposición: aceptado.
- [P2] (confidence: 7/10) Rótulo «Ejemplo» de `anuncio-social` sin prueba (Codex medio). Disposición: aceptado. Ya va en el marco (`Ejemplo.astro:36`), y se agrega una prueba sobre `dist/`.
- [P3] (confidence: 7/10) Disposición: aceptados.
  - La prueba de slugs lee `ia-creativa.json` (F11).
  - `HERO_ALTS` entra en la igualdad de conjuntos (F14).
  - `dist-guard` recibe la raíz como parámetro (F17).
  - `selectores-hoja` compara conjuntos de nombres de clase (F18).
- [P3] (confidence: 7/10) La frontera de Fotografía de producto va sin cifra, por AC7 (F12). Disposición: aceptado.
- [P3] (confidence: 6/10) El permiso `description` de `/marketing/` quedaba abierto después del `--actualizar` (F15). Disposición: aceptado. Se quita en el paso 7.
- Rechazados, con su motivo:
  - F10, sacar las pruebas de contrato de los comparadores: es un requisito ya aceptado en DX, y se mantiene.
  - F16, el orden de campos que esquiva `paginasDelRegistro`: la prueba nueva de `marketingPages` ya cubre `serviceKey`.
  - F20, guardar los `.srt` en el repo: el texto queda en `guion`, y los tiempos se regeneran con whisper.
- Artefacto del plan de pruebas, actualizado: `~/.gstack/projects/josimarguilbaud-elementoweb/JosimarG-main-eng-review-test-plan-20261019-212500.md`.

**Sección 4, rendimiento.**
- [P1] (confidence: 9/10) CSS de la portada: 869 B de margen, y `molde-kredit.css` también va en línea en `/` (nativa F2). Disposición: aceptado, con `ejemplo-media.css` en línea solo donde hace falta. La portada no cambia.
- Sin otros hallazgos. Los videos van con `preload="none"`, nginx sirve rangos y los presupuestos de `servicio` y `hub` tienen holgura medida.

**Modos de falla nuevos.**

| Ruta | Falla realista | Prueba | Manejo | ¿Se ve? |
|---|---|---|---|---|
| Medición 0b | URL fijada para la intención equivocada | D52 con la decisión | tabla de decisión | no llega a construirse |
| Paquete sin búsquedas | enlace a una URL que no existe | `MKIA-DEMANDA` | plan propio de la sección | se para antes |
| Video con voz | habla cortada | `mdhd` de `soun` igual a la duración | sin `-t` | hoja de contactos |
| Video en iOS | no se reproduce (4:4:4) | `avcC` `profile_idc` | `yuv420p` | no llega a producción |
| Gasto | sesión cortada antes de `enviado` | AC8 con `asumido` | 24 h y nota del dueño | el agente para |
| Gasto | costo real sobre el tope | estado `sobrepaso` | bloquea envíos | el dueño decide |
| Portada `/` | CSS sobre el presupuesto | `presupuestos.mjs` | hoja aparte | `verify` en rojo |

Brechas críticas: 0.

**Fuera de alcance (segunda pasada):**
- La sección de U2, que tendría su propio plan si ocurre.
- Node 20 en el Dockerfile frente a Node 24 en CI, un problema que ya existía (nativa F22).
- El enlace «Precios» del bloque «Siguiente paso» (`[...slug].astro:110`), igual que en las hermanas de marketing (nativa F21).

**Paralelización:** la misma de la primera pasada, con el paso 0b antes del carril de datos y precios.

**Tareas nuevas (segunda pasada):**
- [ ] **E12 (P1, humano: ~1 día / CC: ~1 h)**, demanda: paso 0b con la tabla de decisión y D52. Verificar: `MKIA-DEMANDA` si falta una palabra.
- [ ] **E13 (P1, humano: ~1 h / CC: ~10 min)**, CSS: `ejemplo-media.css` en línea solo donde se usa. Archivos: `src/styles/ejemplo-media.css`, `src/pages/[...slug].astro`. Verificar: `presupuestos.mjs` con la portada sin cambio.
- [ ] **E14 (P1, humano: ~1 h / CC: ~10 min)**, ffmpeg: `yuv420p` y `high`; clips con voz sin `-t`. Verificar: prueba de `avcC` y de `mdhd`.
- [ ] **E15 (P1, humano: ~2 h / CC: ~20 min)**, gasto: `asumido`, `sobrepaso`, bloqueo y tope del archivo. Archivos: `scripts/gasto-ia.mjs`, `scripts/marketing-ia.test.mjs`. Verificar: prueba de unidad.
- [ ] **E16 (P2, humano: ~1 h / CC: ~10 min)**, `src/lib/ejemplos.ts` y su prueba. Verificar: `MKIA-EJEMPLO` con un tipo desconocido.
- [ ] **E17 (P2, humano: ~1 h / CC: ~10 min)**, `componer-pantallas.mjs`: relleno con chequeo de borde. Verificar: prueba con dos regiones junto al borde.
- [ ] **E18 (P2, humano: ~30 min / CC: ~5 min)**, precios: 780 (5 creativos), 500, 480 y 150 en `precios.json` y en los textos. Verificar: prueba de montos y ausencia de «10 creativos».
- [ ] **E19 (P3, humano: ~30 min / CC: ~5 min)**, permiso `description` de vuelta a `schema` después del paso 7. Verificar: `seo-congelado` en 0.

**Resumen de cierre (segunda invocación):**
- Paso 0: alcance aceptado tal cual.
- Filas de realidad: 7/7, 1 premisa sin verificar.
- Arquitectura: 3 hallazgos.
- Calidad de código: 5.
- Pruebas: 9 brechas.
- Rendimiento: 1.
- Modos de falla: 0 brechas críticas.
- Decisiones sin resolver: ninguna; solo falta la aprobación del plan en la puerta.
- Voz externa: Codex completada (6). Voz nativa: completada (22).

### Fase 3, ingeniería: revisión

Objetivo fijo: el «Implementation plan» de esta spec, foto `autoplan-eng-3JFmS9` (sha `9b4bec62…`), contrastado con el repo en
`4119f70`. Modo FULL_REVIEW; el alcance se acepta tal cual (P2: la fase de ingeniería no reduce alcance).

**Paso 0, alcance.**
- Lo que ya resuelve cada parte:
  - Páginas: el molde v2 (`PortadaServicio.astro`, `Blocks.astro`, `Ejemplo.astro`).
  - Precio y schema: `precios.json`, más `schema.ts:127-135` y `:190-202`.
  - Formulario: ContactForm, con `{ type: 'form' }` (`Blocks.astro:72`).
  - Portadas: `portadas-fotos.mjs`, `heroes-manifest.mjs` y `componer-pantallas.mjs`, este último en el scratchpad.
  - Validación: `verify.mjs`, `validar-marcador`, `qa-seo`, `check-links`, `qa-a11y`, `qa-lcp`, `seo-congelado` y la guarda de `dist/` (`portada.test.mjs:185-206`).
  - Generación: los MCP de fal y Higgsfield.
- Cambio mínimo: lo nuevo son datos y textos de las páginas, 2 tipos de ejemplo, 1 campo opcional (`blank.texto`) y herramientas de verificación. Nada de JS en la página, y el JS de `servicio` tiene solo 999 B de holgura.
- Complejidad: la ruta toca unos 45 archivos (estimado sobre Files Reference) y crea 8 piezas nuevas:
  - 6 scripts: `marketing-ia.test`, `selectores-hoja`, `comparar-main`, `componer-pantallas`, `gasto-ia` y `lib/webp`;
  - `lib/dist-guard`;
  - el dato `ia-creativa.json`.

  La puerta de complejidad salta (8 o más archivos). Auto-decisión del selector de estructura: «Original arrangement». Ninguna disposición más chica conserva los contratos ya aceptados en DX: `comparar-main` y `selectores-hoja` tienen contratos separados. Se elige por P5 y P3.
- Búsqueda: ningún patrón de arquitectura nuevo (sitio estático, `node:test`, scripts de Node), así que no hace falta investigar afuera; se sigue con lo que ya sabe el modelo.
- `TODOS.md`: no bloquea nada. Las entradas de esta épica las escribe la implementación (requisito aceptado de CEO), después de la puerta, porque dependen de U1 a U3.
- Distribución: no hay artefactos nuevos que publicar. `nginx.conf` sale por el despliegue de siempre (`deploy.yml`).

**Premisas verificadas en esta fase (tabla de realidad):**

| # | Premisa | Recibo | Veredicto |
|---|---|---|---|
| E1 | `service-form` se puede usar en las páginas nuevas | `ServiceForm.astro:1-2` dice «Construido y SIN activar… hasta la fase 3»; las hermanas usan `type: 'form'` (`marketing.ts:329`) | falsa → corregida |
| E2 | `check-links` acepta los `.mp4` | `check-links.mjs:35` solo salta `css\|js\|svg\|png\|jpg\|jpeg\|webp\|ico\|xml\|txt\|woff2?` | falsa → corregida |
| E3 | Una respuesta con la fecha del día pasa `npm test` | `validar-marcador.test.mjs:16` fija `2026-10-20`; `validar-marcador.mjs:100` rechaza fechas posteriores | falsa después del 20-oct → corregida |
| E4 | `webpConTope` se puede exportar de `portadas-fotos.mjs` | `portadas-fotos.mjs:61-63` corre la CLI al importar | falsa → corregida |
| E5 | `search_request_history` da el costo cobrado | su descripción: ids, endpoint, tiempos, código HTTP, medios; «recent jobs may be absent» | falsa → corregida |
| E6 | `node --test` no puede importar los `.ts` | `import('./src/lib/pages/marketing.ts')` devuelve `marketingPages` (7) con Node 24.18 | falsa para `marketing.ts`; cierta para `site.ts` (JSON) |
| E7 | El render no lee el disco | `PortadaServicio.astro:17-18` usa `existsSync` y lanza error sin la `-1200.webp` | falsa; se mantiene `bytes` y se comprueba contra el archivo |
| E8 | Los `.mp4` se cachean como las imágenes | `nginx.conf:51` no incluye `mp4`; cae en `location /` con `max-age=600` (`:92-94`) | falsa → corregida |
| E9 | Hay Roboto para los subtítulos quemados | `public/fonts/` solo tiene `roboto-latin-wght-normal.woff2`; Windows no trae Roboto TTF | sin verificar si libass carga el `woff2` → paso 0 del runbook |
| E10 | El CI corre `npm test` | `deploy.yml:71` `npm run verify`; `verify.mjs` corre `npm test` con `VERIFY=1` | cierta |
| E11 | Las longitudes de title, H1 y descripción de la tabla son exactas | conteo de la voz nativa sobre la tabla de metadatos | cierta |
| E12 | Holgura de presupuesto de CSS (2.913 B y 3.613 B) | `node scripts/presupuestos.mjs`, corrido por la voz nativa | cierta |

REALITY: premise-table finding unverified=1 (E9 fuente de subtítulos; E1-E8 falsas y corregidas) docs/specs/rediseno-elementoweb/SPEC-MARKETING-IA.md:1
REALITY: already-done pass git log origin/main --since=2026-10-17 sin commits en marketing.ts, site.ts, check-links, portadas-fotos, validar-marcador.test, Blocks, ServiceForm ni nginx.conf src/lib/pages/marketing.ts:1
REALITY: surface-check finding search_request_history sin costo; check-links sin mp4; portadas-fotos CLI al importar; lighthouse global 13.5.0 y ffmpeg 8.1.2 verificados scripts/check-links.mjs:35
REALITY: binding-decisions pass D52.1-D52.4 y D5 respetadas; D30 (flujo v1) y fase 3 de ServiceForm respetadas al volver a ContactForm src/components/ServiceForm.astro:1
REALITY: numbers pass gastado 7.77 con suma de filas 7.77000000000001 en coma flotante [measured: audit/imagenes-ia-2026-10.json:4]; holgura JS 999 B y CSS 2.913/3.613 B [measured: scripts/presupuestos.mjs]; 45 archivos [estimated] audit/imagenes-ia-2026-10.json:4
REALITY: deferred-asks pass ServiceForm (fase 3), ItemList y claves nuevas siguen en la puerta (G2, G3); nada del pedido del dueño queda fuera sin decir docs/specs/rediseno-elementoweb/SPEC-MARKETING-IA.md:1
REALITY: pr-count pass pr_count=1 por defecto (no hay .gstack/ship-policy.json); una sola ola por push a main con permiso del dueño .github/workflows/deploy.yml:71

`PLAN_REALITY: phase=eng rows=7/7 missing=none unverified=1 verdict=complete`

**Voces de ingeniería.**
- Nativa (subagente de Claude): completada en 932 s, con `INPUT eng 9b4bec62…` igual a la foto. 18 hallazgos: 1 crítico, 3 altos, 5 medios y 9 bajos. Importó `marketing.ts` con Node, contó longitudes y presupuestos, y leyó `ServiceForm`, `check-links`, `nginx.conf` y `PortadaServicio`.
- Externa (Codex, `gpt-5.6-terra`): completada al primer intento, en 285 s. 8 hallazgos: 3 altos, 4 medios y 1 bajo. Su recomendación: «do not implement yet because the plan still lacks mandatory demand/offer decisions and has an incorrect embedded-form integration path».

```
ENG DUAL VOICES — CONSENSUS TABLE:
  Dimension                           Claude  Codex  Consensus
  1. Architecture sound?               NO      NO     CONFIRMED NO (formulario por servicio sin activar; gasto sin registro previo)
  2. Test coverage sufficient?         NO      NO     CONFIRMED NO (check-links, fecha fija, punto ciego de serviceKey; códec y subtítulos fuera de CI)
  3. Performance risks addressed?      SÍ*     —      N/A (solo la nativa lo trató; *caché de mp4, bajo)
  4. Security threats covered?         NO      —      N/A (solo la nativa: EXIF con GPS de la foto del dueño)
  5. Error paths handled?              NO      NO     CONFIRMED NO (conciliación imposible como estaba; consulta perdida sin aviso)
  6. Deployment risk manageable?       NO      NO     CONFIRMED NO (verify en rojo por mp4 y fecha; menú global; rollback sin prueba)
```
4 de 6 dimensiones confirmadas. Hay un desacuerdo con el plan, no entre las voces: Codex propone derivar del manifiesto los conteos de las pruebas existentes, y el plan los deja literales. Va a la puerta como T5. Codex además insiste en U1 a U3 y en T1, que ya están en la puerta; se anotó su voto en esas filas.

**Sección 1, arquitectura.**
```
 src/data/ia-creativa.json ─┬─> src/lib/site.ts (iaCreativa) ─> Navbar.astro, Footer.astro
                            ├─> scripts/marketing-ia.test.mjs (igualdad de conjuntos)
 src/data/precios.json ─────┼─> marketing.ts (4 páginas v2, hub) ─> [...slug].astro ─> PortadaServicio, Blocks
                            │        │                                   │       └─> Ejemplo.astro (foto, video)
                            │        └─> schema.ts (offers, hasOfferCatalog, FAQPage)   └─> ContactForm (type: 'form')
 src/data/formulario.json ──┘ (paginas: pauta, definir; sin claves nuevas)
 MCP fal / Higgsfield ─> scripts/gasto-ia.mjs ─> audit/imagenes-ia-2026-10.json (reservado → pendiente → confirmado)
        └─> ffmpeg -y -nostdin ─> public/videos/ia-creativa/*.mp4 ─> nginx.conf (mp4 30 d)
        └─> componer-pantallas.mjs ─> portadas-fotos.mjs ─> lib/webp.mjs ─> public/images/hero|og ─> heroes-manifest.mjs ─> heroes.ts
 dist/ ─> check-links (mp4 contra dist), validar-marcador, qa-*, marketing-ia.test (dist-guard), seo-congelado
 ../elementoweb-base/dist ─> selectores-hoja.mjs, comparar-main.mjs (solo local)
```
- [P0] (confidence: 9/10) `src/lib/pages/marketing.ts` (orden de bloques del plan). Las páginas iban a cerrar con `service-form`, pero `ServiceForm.astro:1-2` dice: «Construido y SIN activar: ninguna página lo usa todavía; las páginas siguen con ContactForm hasta la fase 3». Su correo es opcional, y el flujo v1 descarta los envíos sin correo respondiendo `{"ok": true}` (D30): la consulta se perdería sin aviso. Las dos voces lo vieron, con distinto arreglo; Codex proponía pasarle el `serviceKey` a `service-form`, lo que habría dejado la pérdida en pie. Disposición: aceptado. Se usa `{ type: 'form' }`, se corrige G2 y se agrega una prueba sobre `dist/` (P5, P1).
- [P1] (confidence: 8/10) `audit/imagenes-ia-2026-10.json:1`. El gasto no tenía registro antes de cobrar, y la conciliación se apoyaba en `search_request_history`, que no trae costo. Las dos voces. Disposición: aceptado. Hay estado `reservado` antes de `submit_jobs`, `scripts/gasto-ia.mjs` maneja las transiciones, el costo es la tarifa por las unidades facturadas, se concilia con `check_job` y Higgsfield usa `transactions` (P1).
- [P2] (confidence: 7/10) Fuente única de la tanda: el conjunto de páginas vivía en unos 14 sitios. Disposición: aceptado, con `src/data/ia-creativa.json` y las pruebas de igualdad (P4, P5).
- [P2] (confidence: 7/10) `componer-pantallas.mjs`: pega la pieza sin perspectiva, el despill afecta toda la foto, y `PortadaServicio.astro:18` vuelve la portada dependencia dura. Disposición: aceptado, con pantallas de frente, despill acotado y portada dentro del mínimo (P1).
- [P3] (confidence: 6/10) `nginx.conf:58`: el rollback con 301 no tenía comprobación. Disposición: aceptado, con `curl -sI` después del revert (P1).

**Sección 2, calidad del código.**
- [P1] (confidence: 9/10) `scripts/portadas-fotos.mjs:61-63`: `const args = process.argv.slice(2); if (!args.length || args.length % 2) { … process.exit(2); }`. Importarlo para usar `webpConTope` saldría con 2, o correría `instalar()`. Disposición: aceptado. La función pasa a `scripts/lib/webp.mjs`, se reexporta, y la CLI queda protegida con `import.meta`, igual que `validar-marcador.mjs` (P5).
- [P3] (confidence: 7/10) La ficha (`bytes`, `duracion`) se escribe a mano. Disposición: aceptado, con una comprobación en `dist/` contra el archivo (`statSync` y la caja `mvhd`); el campo se mantiene, como aceptó DX (P5).
- [P3] (confidence: 7/10) Hay 2 videos en una misma página, así que los `id` de `aria-describedby` pueden repetirse. Disposición: aceptado, con ids sacados del nombre del archivo (P1).
- [P3] (confidence: 7/10) La foto de celular del dueño trae EXIF y GPS, y se sube a fal y se publica. Disposición: aceptado, limpiarla con `sharp` y comprobar que lo publicado no lleva EXIF (P1, privacidad).

**Sección 3, pruebas.** Framework: `node:test`, con `npm test` = `node --test "scripts/*.test.mjs"` (`package.json:11`), que `verify.mjs` corre con `VERIFY=1` en local y en CI.
```
CODE PATHS                                              USER FLOWS
[+] marketing.ts (4 páginas, datos)                     [+] Visitante en una página de IA creativa
  ├── [GAP→PRUEBA] serviceKey = formulario.paginas        ├── [GAP→PRUEBA] precio de portada = monto (dist)
  ├── [GAP→PRUEBA] cta.boton, orden de bloques            ├── [GAP→PRUEBA] video: controles, sin autoplay, voz suena
  └── [GAP→PRUEBA] voz ⇒ guion                            ├── [GAP→PRUEBA] «Descargar MP4» y respaldo (check-links + dist)
[+] Ejemplo.astro (foto, video)                           ├── [GAP→PRUEBA] «Ver guion» (dist)
  ├── [GAP→PRUEBA] pie «Ejemplo ·», etiqueta Antes/Después ├── [GAP→PRUEBA] formulario = ContactForm, data-service
  ├── [GAP→PRUEBA] tipo desconocido → MKIA-EJEMPLO          └── [→E2E manual] envío real llega con origen (fuera de CI)
  └── [GAP→PRUEBA] ficha = archivo (bytes, mvhd, avc1)    [+] Agente generando ejemplos
[+] gasto-ia.mjs                                            ├── [GAP→PRUEBA] sesión cortada: reservado/pendiente sin conciliar falla
  ├── [GAP→PRUEBA] transiciones válidas e inválidas         └── [GAP→PRUEBA] tope de la tanda con el lote completo
  └── [GAP→PRUEBA] centavos (7.77000000000001)            [+] Publicación parcial (N < 4)
[+] check-links.mjs mp4  [GAP→PRUEBA] mp4 ausente falla     └── [GAP→PRUEBA] igualdad de conjuntos en 10 sitios derivados
[+] validar-marcador.test fecha  [GAP→PRUEBA] fecha del texto > 20-oct en verde
[+] lib/webp.mjs  [GAP→PRUEBA] import sin efectos; MKIA-PESO
[+] comparar-main, selectores-hoja, componer-pantallas  [GAP→PRUEBA] exit 2 y exit 1 (DX)
COVERAGE: 0/24 rutas nuevas con prueba hoy (todas son nuevas) → 23/24 cubiertas por el plan, 1 manual (envío real a n8n)
```
- [P1] (confidence: 9/10) `scripts/check-links.mjs:35`: sin `mp4` en la lista, «Descargar MP4» cuenta como ruta rota y `verify` queda en rojo. Disposición: aceptado. Se comprueba contra `dist/` (validador declarado).
- [P1] (confidence: 8/10) `scripts/validar-marcador.test.mjs:16`: `const HOY = new Date('2026-10-20T12:00:00Z')`. Con la puerta y U1, el texto probablemente se escriba después del 20-oct. Disposición: aceptado. La prueba del sitio real usa la fecha de `verify.mjs` (prueba declarada).
- [P2] (confidence: 8/10) Punto ciego de `paginasDelRegistro` (`datos.test.mjs:22`): con el orden de campos pedido, nadie comparaba el `serviceKey` de las páginas nuevas. Disposición: aceptado, con el import de `marketingPages` y sus aserciones.
- [P2] (confidence: 7/10) AC8: sumas en coma flotante, «archivo nuevo» sin definir y 4 archivos viejos sin crédito. Disposición: aceptado, con patrones, centavos y las claves de cada carpeta.
- [P2] (confidence: 7/10) Videos: códec, subtítulos y transcripción no se comprobaban (las dos voces). Disposición: aceptado. Hay prueba de `avc1` con cajas, `guion` en todo video con voz y Roboto en los subtítulos.
- [P3] (confidence: 7/10) `selectores-hoja` con `git grep` no ve archivos sin `git add`. Disposición: aceptado, con `--untracked`.
- [P3] (confidence: 7/10) Runbook: `medir.mjs` escribía después de `verify`, y `keywords.test` queda en rojo hasta el paso 7. Disposición: aceptado. Ahora se mide antes de `verify` y queda anotado.
- [P3] (confidence: 7/10) AC11 y AC14 corren solo en local. Disposición: aceptado; se declaran en el resumen y el padre los vuelve a correr.
- [P3] (confidence: 7/10) Corte vertical: si las pruebas leen `dist/` al cargar el archivo, una página sin compilar rompe las demás. Disposición: aceptado. Se lee dentro de cada prueba y la entrada del manifiesto va con su página.
- [P3] (confidence: 6/10) Conteos literales de las pruebas existentes (Codex). Disposición: se mantienen literales y se editan una vez con N; la alternativa va a la puerta como T5.
- Artefacto del plan de pruebas: `~/.gstack/projects/josimarguilbaud-elementoweb/JosimarG-main-eng-review-test-plan-20261017-125635.md`. Pruebas a retirar: ninguna.

**Sección 4, rendimiento.**
- [P3] (confidence: 8/10) `nginx.conf:51`: los `.mp4` (hasta 2 MB cada uno) se cacheaban 10 minutos (`location /`). Disposición: aceptado, con 30 días y un nombre nuevo al regenerar.
- Sin otros hallazgos. Los videos van con `preload="none"` y póster WebP. No se agrega JS (holgura de 999 B en `servicio`). El CSS cabe en la holgura medida, y no hay consultas ni bucles en tiempo de petición, porque el sitio es estático.

**Registro de modos de falla.**

| Ruta nueva | Falla realista | Prueba | Manejo | ¿La ve el usuario? |
|---|---|---|---|---|
| Formulario de la página | consulta sin correo descartada por el flujo v1 | dist: no hay ServiceForm | ContactForm exige correo | con el arreglo, sí (error de validación). Antes: silenciosa, **brecha crítica cerrada** |
| Generación en fal | sesión cortada después de cobrar | gasto: falla con `reservado` o `pendiente` | `check_job` por `request_id` | el agente para; nada se publica |
| Video con voz | sale mudo (`-an`) | cajas `soun` | comando explícito | sí, en la hoja de contactos |
| Descarga del MP4 | archivo faltante | `check-links` contra `dist/` | build en rojo | no llega a producción |
| Portada | falta la `-1200.webp` | build (`PortadaServicio.astro:18`) | mínimo de ejemplos | no llega a producción |
| Fecha del texto | posterior a la del validador | prueba del sitio real con la fecha de `verify` | — | no llega a producción |
| Caché | video viejo tras regenerar | — | nombre nuevo `-v2` | sin el nombre nuevo, hasta 30 días |
| Rollback | URL indexada da 404 | `curl -sI` después del revert | 301 en `nginx.conf` | no, con el 301 |

Brechas críticas después de los arreglos: 0.

**Fuera de alcance (ingeniería):**
- Activar ServiceForm y el flujo v2: es la fase 3, con su propio plan y el lead de prueba de D32.
- Un ejecutor automático que llame a los MCP: el agente sigue llamándolos y `gasto-ia.mjs` registra cada paso.
- Derivar los conteos existentes del manifiesto: depende de T5.
- Pruebas de AC11 y AC14 en CI: necesitan un build base en el runner, y para una sola tanda no compensa.

**Lo que ya existe (y se reusa):**
- ContactForm, el molde v2 y `schema.ts`.
- La guarda `conDist`, que se mueve a una biblioteca sin cambiar su comportamiento.
- `portadas-fotos.mjs` y `heroes-manifest.mjs`.
- `presupuestos.mjs`, `qa-a11y`, `qa-lcp`, `qa-responsive` y `seo-congelado`.
- `medir.mjs`, con Lighthouse global.
- `componer-pantallas.mjs`, del scratchpad, generalizado.

No se reconstruye nada de eso.

**Paralelización.**

| Paso | Módulos | Depende de |
|---|---|---|
| Herramientas | `scripts/`, `scripts/lib/` | — |
| Datos y precios | `src/data/` | puerta (D52) |
| Generación | `public/`, `audit/` | herramientas, datos |
| Páginas y enlaces | `src/lib/`, `src/components/` | generación (hoja de contactos) |
| Config | `nginx.conf` | — |

Carril A: herramientas y config, en paralelo con el carril B: la puerta, D52 y los prompts. Después, en orden: generación, páginas y enlaces. Conflicto: `scripts/marketing-ia.test.mjs` crece en las dos fases; un solo agente lo edita.

**Tareas de implementación (fase de ingeniería):**
- [ ] **E1 (P1, humano: ~30 min / CC: ~5 min)**, páginas: `{ type: 'form' }` en las 4 y prueba de que no hay ServiceForm. Viene de la sección 1, P0. Archivos: `src/lib/pages/marketing.ts`, `scripts/marketing-ia.test.mjs`. Verificar: `VERIFY=1 node --test scripts/marketing-ia.test.mjs`.
- [ ] **E2 (P1, humano: ~1 h / CC: ~10 min)**, `check-links` con `mp4` contra `dist/`. Viene de la sección 3. Archivo: `scripts/check-links.mjs`. Verificar: `node scripts/check-links.mjs` con 0, y el caso de un mp4 ausente.
- [ ] **E3 (P1, humano: ~30 min / CC: ~5 min)**, fecha de la prueba del sitio real. Viene de la sección 3. Archivo: `scripts/validar-marcador.test.mjs`. Verificar: `npm test` con una `fecha` posterior al 20-oct.
- [ ] **E4 (P1, humano: ~1 h / CC: ~10 min)**, `lib/webp.mjs` y la CLI protegida. Viene de la sección 2. Archivos: `scripts/lib/webp.mjs`, `scripts/portadas-fotos.mjs`. Verificar: prueba de import sin efectos.
- [ ] **E5 (P1, humano: ~3 h / CC: ~30 min)**, `gasto-ia.mjs` y sus estados. Viene de la sección 1, P1. Archivos: `scripts/gasto-ia.mjs`, `audit/imagenes-ia-2026-10.json`. Verificar: prueba de transiciones y tope.
- [ ] **E6 (P2, humano: ~2 h / CC: ~20 min)**, `ia-creativa.json` y pruebas de igualdad. Viene de la sección 1, P2. Archivos: `src/data/ia-creativa.json`, `src/lib/site.ts`, `scripts/marketing-ia.test.mjs`. Verificar: quitar una página de un sitio derivado hace fallar.
- [ ] **E7 (P2, humano: ~2 h / CC: ~20 min)**, cajas MP4 (`soun`, `avc1`, `mvhd`) y ficha. Viene de la sección 3. Archivo: `scripts/marketing-ia.test.mjs`. Verificar: un video sin voz con `voz: true` falla.
- [ ] **E8 (P2, humano: ~1 h / CC: ~15 min)**, portadas de frente, despill acotado y portada en el mínimo. Viene de la sección 1. Archivo: `scripts/componer-pantallas.mjs`. Verificar: hoja de contactos.
- [ ] **E9 (P2, humano: ~30 min / CC: ~5 min)**, `nginx.conf`: `mp4` a 30 días. Viene de la sección 4. Verificar: `curl -sI` de un mp4 en producción, con permiso.
- [ ] **E10 (P2, humano: ~30 min / CC: ~5 min)**, EXIF fuera con `sharp`, más su prueba. Viene de la sección 2. Verificar: la prueba de imágenes publicadas.
- [ ] **E11 (P3, humano: ~30 min / CC: ~5 min)**, `selectores-hoja` con `--untracked`, ids únicos y orden del runbook. Vienen de las secciones 2 y 3. Verificar: `qa-a11y` sin `duplicate-id-aria`.

**TODOS.md:** se recogieron las 6 entradas diferidas de CEO, más E9 de CEO (paquete recurrente). Se escriben al implementar, después de la puerta, porque U1 a U3 pueden cambiarlas; ninguna pide una decisión aparte en esta fase.

**Resumen de cierre (ingeniería):**
- Paso 0: alcance aceptado tal cual.
- Filas de realidad: 7/7 emitidas, 1 premisa sin verificar (E9).
- Arquitectura: 5 hallazgos.
- Calidad de código: 4 hallazgos.
- Pruebas: diagrama hecho, 10 brechas.
- Rendimiento: 1 hallazgo.
- Fuera de alcance y «lo que ya existe»: escritos.
- TODOS.md: 7 entradas recogidas, se escriben al implementar.
- Modos de falla: 1 brecha crítica encontrada y cerrada; quedan 0.
- Decisiones sin resolver de esta fase: ninguna (T5 va a la puerta).
- Voz externa: Codex completada (8). Voz nativa: completada (18).
- Paralelización: 2 carriles al inicio, después en orden.
- Lake Score: N/A, porque no hubo preguntas con puntaje de completitud en esta fase.

<!-- AUTONOMOUS DECISION LOG -->
## Decision Audit Trail

| # | Phase | Decision | Classification | Principle | Rationale | Rejected |
|---|-------|----------|----------------|-----------|-----------|----------|
| 1 | CEO 0A | Corregir P5: cada página lleva su bloque `receipt` confirmado | Mechanical | P1 | `kind.ts:13` deriva el tipo y el Offer de ese bloque | precio solo en `precios.json` |
| 2 | CEO 0A | P11 queda sin verificar hasta citar la política de Meta | Mechanical | P5 | sin fuente no se publica la afirmación | afirmarla tal cual |
| 3 | CEO 0F | Mantener 4 páginas (no una sola de «Producción con IA») | Mechanical | D2 | decisión del dueño | página única |
| 4 | CEO 0G | E1 aceptada | Mechanical | P2 | superlativos sin fuente en el hub que se reescribe | dejarlos |
| 5 | CEO 0G | E2 aceptada | Mechanical | P2 | 2 líneas de relacionados, en el radio | sin enlace cruzado |
| 6 | CEO 0G | E3 aceptada | Mechanical | P2 | la medición es alcance de lanzamiento | sin fechas |
| 7 | CEO 0G | E4 diferida | Mechanical | P3 | fuera del radio | incluir blog |
| 8 | CEO 0G | E5 diferida | Mechanical | P3 | depende de permiso de cliente | inventar un caso |
| 9 | CEO 0G | E6 diferida | Mechanical | P3 | tiene su propio plan | mezclar planes |
| 10 | CEO 0G | E7 saltada | Mechanical | P5 | el dueño no la pidió y toca su política de precios | ofrecer muestra gratis |
| 11 | CEO 0G | E8 saltada | Mechanical | P5 | lado a lado sin JS cumple | comparador con JS |
| 12 | CEO 0H revisión 1 | Las 4 páginas usan claves de formulario que ya existen (`pauta`, `definir`); sin claves nuevas | Taste (puerta final) | P3, P5 | `serviceKey` es la clave del formulario (`marketing.ts:163`); una clave nueva obliga a subir el flujo a Hetzner (`armar-correo.js:66-71`); `origen` ya dice la página | 4 claves nuevas y subir el flujo |
| 13 | CEO 0H revisión 1 | El panel GEO de 10 (D13) no cambia; las 2 preguntas nuevas se miden en TODOS.md | Mechanical | decisión vinculante D13 | `keywords.test.mjs:95-105` exige exactamente 10 | ampliar el panel a 12 |
| 14 | CEO 0H revisión 1 | Sin ItemList en el hub | Mechanical | P5 | `pageJsonLd` (`schema.ts:226-244`) no lo emite en ningún hub | código de schema nuevo |
| 15 | CEO 0H revisión 1 | `/servicios/` enlaza por `catalogGroups`, no por el bloque `production` | Mechanical | P4 | `production` lo comparten 3 páginas (`servicios.ts:160`, `precios.ts:135`, `core.ts:49`) | tocar el bloque compartido |
| 16 | CEO 0H revisión 1 | Tipos `foto` y `video` nuevos en `Ejemplo` | Mechanical | P1 | la unión `Ejemplo` (`types.ts`) no tiene video ni foto suelta | maqueta HTML sin la pieza real |
| 17 | CEO 0H revisión 1 | Video con `fal-ai/kling-video/v2.5-turbo/pro/image-to-video` | Mechanical | P3 | US$ 0,07/s en la API de fal del 17-oct; tanda estimada US$ 3,45 | Veo 3 fast (US$ 0,15/s) |
| 18 | CEO 0H revisión 1 | Foto «antes»: del dueño si la manda; si no, stock con licencia libre | Taste (puerta final) | P5 | una «antes» generada con IA no muestra el servicio real | «antes» generada |
| 19 | CEO 0H revisión 1 | Plazos del recibo propuestos (7, 7, 5 y 3 días hábiles), a confirmar por el dueño | Taste (puerta final) | P5 | `plazo` es obligatorio y sale en la portada (D49) | publicar plazos sin confirmar |
| 20 | CEO 0H revisión 1 | La prueba 8 de la portada excluye las 4 URL de IA creativa | Mechanical | P1 | compara con todos los `/marketing/` del hub (`portada.test.mjs:447-453`) | romper la prueba o sacar el bloque del hub |
| 21 | CEO 0H revisión 1 | `fuente` del comparador solo hacia otras páginas | Mechanical | P5 | `Blocks.astro:319` arma `url(slug)` sin ancla | enlaces a la misma página |
| 22 | CEO 0H revisión 1 | Decisiones del dueño citadas como D52.1 a D52.4 | Mechanical | P5 | `DECISIONES.md` ya tiene D1-D4 | D1-D4 |
| 23 | CEO 0H revisión 2 | D52.3 reabierta: los precios van a la puerta final como User Challenge | User Challenge | regla del dueño «nunca por debajo del punto medio» | con las fuentes citadas, 3 de 4 montos quedan bajo el punto medio | publicar sin reconfirmar |
| 24 | CEO 0H revisión 2 | El hub conserva title y H1; solo cambia la descripción (y el schema) | Mechanical | P3 | ya cumplen las reglas; la descripción actual tiene 156 caracteres; no se mueve el title con impresiones | reescribir title y H1 |
| 25 | CEO 0H revisión 2 | Quitar el ItemList pasa a la puerta final | Taste (puerta final) | P5 | la spec aprobada lo pedía | quitarlo sin preguntar |
| 26 | CEO 0H revisión 2 | `cta` propio en las 4 páginas | Mechanical | P1 | `[...slug].astro:35` pondría «Ayúdame a definir mi proyecto» | botón genérico |
| 27 | CEO 0H revisión 2 | `serviceKey` en el orden de las hermanas | Mechanical | P5 | la frase de la iteración 1 era falsa (`marketing.ts:160-163`) | ponerla junto a `slug` |
| 28 | CEO 0H revisión 2 | Portadas con `portadas-fotos.mjs` | Mechanical | P4 | ya recorta a 10:7, limita la de 1200 y hace el recorte OG | `optimize-images.mjs` |
| 29 | CEO 0H revisión 2 | Subtítulos quemados en el avatar; el ejemplo de Videos dice que es base visual | Mechanical | P1, P5 | WCAG 1.2.2; el paquete promete voz y subtítulos | video con voz sin subtítulos |
| 30 | CEO 0H revisión 2 | Prueba de archivos de medios y ≤ 2 MB; primera pantalla en `qa-lcp` | Mechanical | P1 | `check-links` solo lee `href`; regla del dueño de medir hero y botón | sin prueba |
| 31 | CEO 0H revisión 2 | AC11 falla solo por clases que salen de `src/` | Mechanical | P5 | Tailwind 4 lee `docs/` y `audit/` (`global.css:1`) | exigir +0 −0 |
| 32 | CEO 0H revisión 2 | «Precio publicado» sin `fuente` | Mechanical | P5 | `/precios/` no publica los paquetes | enlazar a `/precios/` |
| 33 | CEO 0H revisión 2 | E1 se extiende a `servicios.ts:53` | Mechanical | P2 | en el radio: el plan ya edita `catalogGroups` | dejar la frase |
| 34 | CEO 0H revisión 2 | El registro de gasto va en un commit propio, fuera del revert | Mechanical | P1 | D46 exige registrar cada cobro | revertirlo con el sitio |
| 35 | CEO 0H revisión 2 | Medición GEO del día P con regla de decisión | Mechanical | P1 | sin lectura del día P no hay con qué comparar | medir solo a P + 28 |
| 36 | CEO 0H revisión 2 | E9 diferida | Mechanical | P3 | necesita precio del dueño | incluirla sin precio |
| 37 | CEO 0H revisión 3 | Sección «Puerta del dueño» con G1 a G6 y la rama «propuesto» de precios | Mechanical | P1 | las decisiones abiertas estaban dispersas y sin consecuencias | dejarlas sueltas |
| 38 | CEO 0H revisión 3 | Slug `marketing/fotografia-de-producto-con-ia-panama` por defecto | Taste (puerta final, G6) | P5 | la URL lleva la palabra principal y no se puede cambiar después de publicar | `imagenes-con-ia-panama` |
| 39 | CEO 0H revisión 3 | El avatar de Higgsfield cuenta dentro de los US$ 15 | Mechanical | P1 | sin eso el gasto del avatar no tiene tope | tope aparte sin cifra |
| 40 | CEO 0H revisión 3 | `nano-banana-pro` también en los ejemplos, declarado en D52 | Mechanical | P5 | D46 lo reservaba para fotos clave; diferencia US$ 0,07 por imagen | `nano-banana-2` en los ejemplos |
| 41 | CEO 0H revisión 3 | Ejemplos en `public/images/ejemplos/` a 640 px y ≤ 80 KB | Mechanical | P4 | es la convención de las 28 imágenes que ya existen | carpetas nuevas a 960 px |
| 42 | CEO 0H revisión 3 | Toda cifra del `<main>` igual a su `monto`; «desde $X» en el cuerpo (D23) | Mechanical | P5 | el AC7 anterior contradecía D23 | prohibir otras cifras |
| 43 | CEO 0H | Aprobación del documento CEO | Mechanical | regla de /autoplan | los documentos reflejan las decisiones; lo abierto va a la puerta | pausar |
| 44 | CEO voces | Validar demanda, menos páginas y plan mensual central → U1, U2, U3 | User Challenge | las dos voces cambian D52.2 | nunca se auto-decide; va a la puerta | cambiar la estructura sin el dueño |
| 45 | CEO voces | Acción de autoridad en la regla de P + 28 | Mechanical | P2 | las dos voces; el freno documentado es la autoridad | solo adelantar un artículo |
| 46 | CEO voces | Consultas por `origen` y clics de WhatsApp en la medición | Mechanical | P1 | impresiones e indexación no miden clientes | medir solo impresiones |
| 47 | CEO voces | Línea de frontera con Meta Ads, Contenido y el set de US$ 100 | Mechanical | P1 | evita la pregunta «¿pago dos veces por lo mismo?» | dejarla sin respuesta |
| 48 | CEO voces | «Licencia de uso comercial» en lugar de «derechos de uso» | Mechanical | P5 | lo hecho solo con IA puede no tener protección de autor | prometer derechos |
| 49 | CEO voces | Bloque «¿Cuándo te basta la herramienta gratis?» | Mechanical | P2 | las dos voces: commodity frente a herramientas | callarlo |
| 50 | CEO voces | Hoja de contactos que aprueba el dueño antes del commit | Mechanical | P1 | los ejemplos son el producto que se vende | revisar solo el texto |
| 51 | CEO voces | «¿También como plan mensual?» respondida sin cifra | Mechanical | P2 | empuja hacia lo recurrente sin decidir precio | omitirla |
| 52 | CEO voces | Menú y pie, rótulo en portadas, ejemplos con marcas propias → T1, T2, T3 | Taste | una sola voz | cambian requisitos aprobados; van a la puerta | aplicarlos sin el dueño |
| 53 | CEO voces | Regenerar ejemplos y muestras para prospectar → TODOS | Mechanical | P3 | fuera del radio | incluirlos |
| 54 | CEO S2 | Costo real del historial de fal en cada fila | Mechanical | P1 | la estimación es orientativa | registrar la estimación |
| 55 | CEO S4 | Texto de respaldo con enlace dentro de `<video>` | Mechanical | P1 | navegador sin soporte | video mudo sin salida |
| 56 | Diseño P1 | Un solo orden de bloques, con los ejemplos antes de la caja de prueba | Mechanical | P5 | las dos voces; `DESIGN.md` pone la prueba después de la respuesta | dos órdenes |
| 57 | Diseño P1 | Hub: 4 filas en la tabla de decisión en lugar de tarjetas nuevas; riel con «piezas con IA» | Mechanical | P2, P5 | las dos voces: las tarjetas clasifican y se confunden con la lista de arriba | bloque `cards` |
| 58 | Diseño P2 | `texto?` en `blank` con el texto honesto | Mechanical | P5 | el texto fijo insinúa clientes que no existen | dejar el texto fijo |
| 59 | Diseño P2 | Mínimo de ejemplos por página; la que no llega no sale | Mechanical | P1 | `Blocks.astro:32` rompe con `items` vacío | publicar sin ejemplos |
| 60 | Diseño P2 | Ficha del video y enlace visible «Descargar MP4» | Mechanical | P1 | el respaldo dentro de `<video>` casi nunca se ve | solo el respaldo |
| 61 | Diseño P3 | Una muestra de video terminada con voz y subtítulos | Mechanical | P1 | las dos voces: el visitante no ve lo que compra | solo clips mudos |
| 62 | Diseño P3 | Antes y después con etiqueta, el mismo recorte y la foto del dueño por defecto | Mechanical (G4 en la puerta) | P1 | la transformación no se podía comprobar | 4 fotos sueltas |
| 63 | Diseño P3 | Claves nuevas del formulario recomendadas en G2 | Taste (puerta) | P1 | el formulario por defecto contradice la página | cambiar G2 sin el dueño |
| 64 | Diseño P4 | Portadas con el entregable en escena, compuesto con la pieza real | Mechanical | P1 | rechazo duro de Codex; `DESIGN.md`: la imagen nunca va sola | foto de ambiente |
| 65 | Diseño P4 | Bloque de herramientas como `tabla` de 3 columnas antes de `compare`; frontera primero en «No incluye» | Mechanical | P5 | sin tipo ni lugar no se podía probar | dejarlo libre |
| 66 | Diseño P4 | Pie de Reels para el video de Anuncios, sin maqueta nueva | Mechanical | P3 | una maqueta nueva cuesta CSS en todas las v2 | marco de Reels |
| 67 | Diseño P5 | `max-height` del video y `columnas` por página; avatar en 9:16 | Mechanical | P1 | un 9:16 a 570 px de ancho pasa de los 900 px de alto | sin tope |
| 68 | Diseño P5 | Etiquetas cortas en `iaCreativa` | Mechanical | P5 | se parten en 2 líneas en el menú móvil | etiquetas largas |
| 69 | Diseño P6 | Comportamiento por ancho con `qa-responsive.mjs` a 3 anchos | Mechanical | P1 | Codex: el plan solo medía el encuadre | dejarlo al implementador |
| 70 | Diseño P6 | Accesibilidad del video: pie descriptivo, `aria-describedby`, guion en `<details>`, póster a 1 s | Mechanical | P1 | WCAG 1.2.1 y 1.2.2; el guion también sirve para GEO | solo subtítulos |
| 71 | Diseño P7 | H1 más cortos, bajada, riel y pie por portada, como máximo 2 notas, plazos por página | Mechanical | P1 | el H1 más largo publicado hoy tiene 47 caracteres | acortar después |
| 72 | Diseño P7 | Criterios fijos de la hoja de contactos | Mechanical | P1 | sin criterios, la aprobación es subjetiva | aprobar a ojo |
| 73 | Diseño P5 | «Más» → «Marketing» en el menú → T4 | Taste (puerta) | una sola voz | cambia el menú de todo el sitio | aplicarlo sin el dueño |
| 74 | DX P3 | ffmpeg con `-y -nostdin` y un archivo por intento | Mechanical | P1 | CAP4: se cuelga o sale con 0 sin escribir (probado) | comandos sin flags |
| 75 | DX P3 | Máquina de estados del gasto (pendiente → confirmado, conciliación, 2 reintentos, saldo de Higgsfield) | Mechanical | P1 | las dos voces: una sesión cortada podía cobrar dos veces | escribir solo al final |
| 76 | DX P3 | Plantilla del aviso de tope con cifras | Mechanical | P5 | el aviso no decía qué tenía que dar el dueño | aviso libre |
| 77 | DX P2 | Contratos de los 3 scripts nuevos con `--help`, exit 0/1/2 y códigos `MKIA-*` | Mechanical | P5 | las dos voces: sin sintaxis ni salidas definidas | contratos libres |
| 78 | DX P2 | `componer-pantallas.mjs` generalizado a N pantallas | Mechanical | P4 | el del scratchpad exige 2 y cada escena tiene 1 | escribir otro |
| 79 | DX P3 | Comando explícito para mezclar la voz y prueba de la pista de audio | Mechanical | P1 | con `-an` el video con voz salía mudo | confiar en `muted` |
| 80 | DX P1 | La hoja de contactos va antes de construir las páginas, y el corte vertical de Anuncios primero | Mechanical | P1 | quitar una página después toca unos 10 sitios | aprobar al final |
| 81 | DX P4 | Runbook con preflight y salidas esperadas | Mechanical | P1 | las dos voces: comandos dispersos y sin arranque | dejarlo en prosa |
| 82 | DX P5 | Las pruebas recorren el manifiesto; los conteos pasan a 25 + N | Mechanical | P1 | Codex: la publicación parcial chocaba con los conteos fijos | conteos fijos |
| 83 | DX P5 | `VERIFY=1` sin `dist/` falla con `MKIA-DIST` | Mechanical | P1 | un verde sin mirar `dist/` engaña | saltarse |
| 84 | DX P6 | `.srt` relativos en `.gstack/tmp/`, preview en segundo plano, `qa-responsive` declarado, worktree con limpieza | Mechanical | P5 | rutas de Windows y servidores a mano | dejarlo implícito |
| 85 | DX P2 | Tabla de identificadores por página y `bytes` en `video` | Mechanical | P5 | varias raíces de nombre; el render no lee el disco | calcular el peso al vuelo |
| 86 | DX P5 | `Ejemplo.astro` exhaustivo; redacción del registro de gasto | Mechanical | P1 | Codex: tipos y datos sensibles sin contrato | dejarlo implícito |
| 87 | DX P2 | Nombres de los scripts existentes sin cambiar | Mechanical | P3 | renombrar está fuera del radio | prefijo nuevo para todos |
| 88 | DX cierre | La prueba de audio lee las cajas `hdlr` con Node, sin `ffprobe` | Mechanical | P1 | `npm test` corre en CI (`deploy.yml:71`, `ubuntu-latest`) y no está verificado que el runner traiga ffmpeg | `ffprobe` con salto si falta, que en CI no probaría nada |
| 89 | DX cierre | El Testing Plan describe la guarda de `dist/` tal como es (`portada.test.mjs:185-206`: falla con `VERIFY=1` o en CI; `SOLO_UNIDAD=1` salta) y suma la fila de pruebas DX (+6) | Mechanical | P5 | el texto decía que sin `dist/` se saltaba; la guarda ya falla | inventar un mecanismo nuevo |
| 90 | DX cierre | Runbook con `--test-name-pattern` por paso; preflight con el `lighthouse` global que llama `medir.mjs:85` | Mechanical | P5 | «en verde» era ambiguo mientras otras pruebas siguen en rojo por TDD; `npx lighthouse` no es lo que usa el script | dejar «en verde» |
| 91 | DX cierre | AC11 con `git grep -lwF` tras desescapar, igual que el contrato de `selectores-hoja` | Mechanical | P5 | AC11 y el contrato decían cosas distintas | dos reglas |
| 92 | Ing. S1 | `{ type: 'form' }` (ContactForm) en vez de `service-form` | Mechanical | P5, P1 | `ServiceForm.astro:1-2` sin activar; el flujo v1 pierde consultas sin correo (D30) | pasarle `serviceKey` a ServiceForm (Codex) |
| 93 | Ing. S1 | G2 reescrita con lo que cambian de verdad las claves con ContactForm | Mechanical | P5 | la fila suponía ServiceForm | dejarla |
| 94 | Ing. S1 | Gasto con `reservado` antes de cobrar y `scripts/gasto-ia.mjs` | Mechanical | P1 | las dos voces: una sesión cortada podía cobrar sin dejar rastro | seguir editando el JSON a mano |
| 95 | Ing. S1 | Costo de fal = tarifa × unidades facturadas; conciliar con `check_job`; Higgsfield con `transactions` | Mechanical | P5 | `search_request_history` no trae costo; `balance` cambia con otros trabajos | leer el costo del historial |
| 96 | Ing. S1 | `src/data/ia-creativa.json` como fuente única, más pruebas de igualdad | Mechanical | P4, P5 | unos 14 sitios con la lista de la tanda | contar desde el manifiesto |
| 97 | Ing. S1 | Pantallas de frente, despill acotado, portada dentro del mínimo | Mechanical | P1 | sin perspectiva y `PortadaServicio.astro:18` rompe el build | perspectiva en el script |
| 98 | Ing. S1 | `curl -sI` con 301 después de un revert | Mechanical | P1 | Codex: rollback sin comprobación | confiar en `nginx.conf` |
| 99 | Ing. S2 | `webpConTope` a `scripts/lib/webp.mjs` y CLI protegida | Mechanical | P5 | `portadas-fotos.mjs:61-63` corre al importar | exportar tal cual |
| 100 | Ing. S2 | Ficha comprobada contra el archivo (`statSync`, `mvhd`) | Mechanical | P5 | `bytes` a mano puede mentir | calcular en el build |
| 101 | Ing. S2 | ids de `aria-describedby` desde el nombre del archivo | Mechanical | P1 | 2 videos en Videos | contador |
| 102 | Ing. S2 | EXIF fuera antes de subir y de publicar | Mechanical | P1 | GPS de la foto del dueño | confiar en fal |
| 103 | Ing. S3 | `check-links` con `mp4` contra `dist/` | Mechanical | P1 | `check-links.mjs:35`: verify en rojo | saltar los mp4 |
| 104 | Ing. S3 | Prueba del sitio real con la fecha de `verify.mjs` | Mechanical | P5 | `validar-marcador.test.mjs:16` fija el 20-oct | fechar el texto ≤ 20-oct |
| 105 | Ing. S3 | Las pruebas importan `marketingPages` | Mechanical | P1 | Node 24 lo carga; punto ciego de `serviceKey` | leer como texto |
| 106 | Ing. S3 | AC8 con patrones, centavos y claves por carpeta | Mechanical | P1 | `7.77000000000001` y 4 archivos viejos sin crédito | exigir fila a todo |
| 107 | Ing. S3 | `avc1` con cajas, `guion` en todo video con voz, Roboto en los subtítulos | Mechanical | P1 | las dos voces: códec y transcripción sin prueba; regla de solo Roboto | ffprobe en local |
| 108 | Ing. S3 | `git grep --untracked`; medir antes de `verify`; `dist/` leído dentro de cada prueba | Mechanical | P1 | puntos ciegos del runbook | dejarlos |
| 109 | Ing. S3 | Conteos existentes literales, editados una vez con N → T5 | Taste (puerta) | P5 | Codex propone derivarlos; el repo usa conteos fijos como alarma | decidirlo sin el dueño |
| 110 | Ing. S4 | `mp4` a 30 días en `nginx.conf:51` y nombre nuevo al regenerar | Mechanical | P1 | caía en `max-age=600` | sin caché |
| 111 | Ing. voces | U1 y T1 anotan el voto de Codex en ingeniería | Mechanical | P6 | Codex pide que U1 bloquee la arquitectura | omitirlo |
| 112 | Ing. voces | G1 se presenta con la tabla rango, punto medio y diferencia | Mechanical | P1 | Codex: la prueba de precios no verifica el mercado | presentar solo los montos |
| 113 | Puerta 19-oct | `rec`: U1b, U2b, U3a, G1b; D2 = 5 creativos por 780; D3 = fotos 480 | User Challenge (respondido) | dueño | respuesta del dueño en la puerta y las tarjetas D1-D3 | otras opciones de la puerta |
| 114 | Ing. 2 S1 | Sección de U2 pospuesta a su propio plan, con `MKIA-DEMANDA` | Mechanical | P3, P5 | las dos voces: destino, schema y medición sin definir; quizá nunca ocurra | especificar ahora todo el contrato |
| 115 | Ing. 2 S1 | El bloque de ingeniería manda sobre el gasto; estados `asumido` y `sobrepaso`; bloqueo `wx`; tope del archivo | Mechanical | P1 | reglas de CEO, DX e ingeniería en conflicto; fila sin salida; registro compartido | dejar las 3 versiones |
| 116 | Ing. 2 S1 | Tabla de decisión de U1 con la lectura de Google | Mechanical | P1 | Codex: la lectura de Google no decidía nada | solo el Planificador |
| 117 | Ing. 2 S2 | `src/lib/ejemplos.ts` para probar `MKIA-EJEMPLO` | Mechanical | P5 | `node --test` no renderiza `.astro` | buscar el texto con grep |
| 118 | Ing. 2 S2 | `componer-pantallas.mjs` respaldado y su relleno arreglado al promoverlo | Mechanical | P1 | solo vive en `%TEMP%`; `q±1` cruza el borde de fila | promoverlo sin arreglar |
| 119 | Ing. 2 S2 | `sharp(...).rotate()` antes de quitar metadatos | Mechanical | P1 | la foto saldría girada | solo quitar EXIF |
| 120 | Ing. 2 S3 | Paso 5 con `--test-skip-pattern=mediciones` | Mechanical | P5 | `mediciones.json` se escribe en el paso 8 | medir en cada corte |
| 121 | Ing. 2 S3 | `yuv420p`, `high` y prueba de `avcC`; voz sin `-t`, tope de palabras y `mdhd` | Mechanical | P1 | iOS no reproduce 4:4:4; `-t 8` corta el habla | dejar la escalera |
| 122 | Ing. 2 S3 | Prueba del rótulo de `anuncio-social`; frontera de fotos sin cifra; `HERO_ALTS`; `dist-guard` con raíz; clases desescapadas | Mechanical | P1 | puntos sin cubrir | dejarlos |
| 123 | Ing. 2 S3 | Permiso `description` de `/marketing/` vuelve a `schema` en el paso 7 | Mechanical | P1 | quedaba abierto a cambios futuros | dejarlo |
| 124 | Ing. 2 S3 | Rechazados F10 (contratos de comparadores, decisión de DX), F16 y F20 | Mechanical | P5 | ya cubiertos o decididos | aplicarlos |
| 125 | Ing. 2 S4 | `ejemplo-media.css` en línea solo donde se usa | Mechanical | P1 | la portada tiene 869 B de margen de CSS | `molde-kredit.css` |

Approval readiness: PASS. Filas 1 a 55 revisadas. Las auto-decisiones mecánicas tienen la autorización de /autoplan
(D5 del dueño, «Repo + autoplan»). User Challenges, gustos y G1 a G8 quedan pendientes de la puerta final y fuera del
trabajo aceptado, salvo sus valores por defecto, que son los de la spec aprobada.
