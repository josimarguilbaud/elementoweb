# Marketing Digital pro y cuatro servicios de IA creativa (anuncios, videos, fotografía de producto, avatares y voz)

_Spec de /gstack-spec del 17-oct-2026. Aprobada por el dueño («procede»); puerta de Codex 7/10 (las 4 ambigüedades que marcó ya están resueltas en el texto); escaneo de secretos limpio. Siguiente paso: /gstack-autoplan._

## Context

`/marketing/` es hoy la página de «marketing digital panamá» (KEYWORDS.md, fila de `/marketing/`) y reúne 6 servicios de pauta y contenido. La IA creativa ya se vende, pero sin página propia: aparece como bloque «Producción» en `/servicios/` (imágenes con IA, set desde US$ 100, precio fijado por el dueño en jul-2026, producido con Higgsfield). El sitio no compite en Google por «anuncios con ia», «videos con ia», «fotografía de producto con ia» ni «avatar con ia», aunque el negocio ya paga las herramientas (fal y Higgsfield, con avatares, voz y doblaje). El dueño pidió el 17-oct-2026 un Marketing Digital «pro» y cuatro servicios de IA creativa con página propia, SEO y GEO.

Decisiones del dueño (17-oct-2026, registradas en el log de decisiones de gstack):
- D1: Marketing Digital = mejorar el hub `/marketing/`, no una página nueva. Autoriza cambiar su title, H1, descripción y schema (excepción a D36 solo para `/marketing/`).
- D2: cuatro páginas nuevas: anuncios, videos, imágenes, avatares y voz con IA.
- D3: precios = punto medio estimado del mercado, con fuentes; el dueño los confirmó con «procede» sobre el borrador (ver tabla de precios).
- D4: cada página muestra ejemplos propios marcados «Ejemplo»; tope nuevo de US$ 15 para esta tanda (D46 se amplía solo para esta tanda).

## Current State (verificado el 17-oct-2026)

| Pieza | Hoy | Falta |
|---|---|---|
| `src/lib/pages/marketing.ts:24` (hub `/marketing/`) | 6 servicios (líneas 87-92); title «Marketing Digital y Pauta en Panamá \| Google, Meta y Más»; H1 «Marketing digital que trae clientes»; manifiesto fase 5 | Bloque «Producción con IA» con las 4 páginas, contenido nuevo y metadatos nuevos |
| `src/lib/site.ts:370-395` (`pricing.production`) | Redacción con IA (US$ 150/200/350, confirmados), imágenes con IA (set desde US$ 100, confirmado), logo con IA (US$ 120, propuesto) | Sin cambios; el set de US$ 100 se queda como extra de proyectos web |
| `src/lib/site.ts:190` (lista `marketing`) | 6 enlaces; los usan `Navbar.astro:58,82`, `Footer.astro:66` y la sección Marketing de la portada (prueba «8. marketing: 6 módulos») | NO se toca; va una lista nueva `iaCreativa` |
| Páginas de IA creativa | No existen | 4 páginas v2 |
| Search Console | 0 impresiones de búsquedas con «IA» (`audit/gsc-baseline-2026-10.md`) | Línea base 0; volumen sin medir (sin Planificador de Google Ads) |
| `scripts/paginas-comerciales.json` | 34 páginas; entradas `{slug, tipo, fase, precio}`; fase actual 2b | 4 entradas nuevas |

## Proposed Change (épica, 9 partes)

```
#1 Precios en precios.json ──┐
#2 Ejemplos propios ─────────┼─> #3-#6 Las 4 páginas ──> #7 Hub /marketing/ ──> #8 Menú, pie, llms.txt, enlaces ──> #9 Verificación
#2b Fotos de portada (D45) ──┘
```
Orden: precios y ejemplos primero porque las páginas los consumen (Offer del schema y bloque «Así se vería»); el hub después porque enlaza las 4 páginas; enlaces globales al final porque cambian el HTML de todas las páginas.

### #1 Precios (confirmados por el dueño el 17-oct-2026; estimados de mercado, no hay tarifas publicadas en Panamá)

| Clave en `src/data/precios.json` → `confirmados` | Monto | Unidad | Alcance |
|---|---|---|---|
| `anuncios-ia` | 450 | paquete | 10 creativos (8 imágenes y 2 videos de hasta 15 s) en formatos de Meta y Google, 2 rondas de cambios |
| `videos-ia` | 400 | paquete | 4 videos cortos de 15 a 30 s con guion, voz y subtítulos |
| `fotos-producto-ia` | 250 | paquete | 10 fotos de producto a partir de fotos reales del cliente, en 3 escenarios |
| `avatar-ia` | 150 | video | 1 video con presentador virtual de hasta 1 minuto, con guion, voz y subtítulos |

Cada clave lleva `"desde": true` y `"fuente"` con el archivo de la página. Referencias (estimados, citar en `docs/specs/rediseno-elementoweb/DECISIONES.md` como D52): 100ads.ai (diseñador o agencia ~US$ 1.500/mes por 8-12 creativos, cifra del proveedor); usastreams.com/reels (paquetes de video con avatar IA US$ 300-700/mes); inreels.ai y novoads.ai (US$ 2-11 por video con herramientas; UGC freelance US$ 150-500); cronoshare/annasemiguk (fondos con IA 25-60 € por foto); es.fiverr.com (avatar parlante US$ 50/min, un solo vendedor); guillermodelpino.com (HeyGen y Synthesia desde US$ 29/mes).

### #2 Ejemplos propios (tope US$ 15 en total para #2 y #2b)

| Página | Ejemplos | Herramienta | Carpeta |
|---|---|---|---|
| Anuncios | 3 creativos (2 imágenes 4:5 y 1 video de 8-10 s) para un «negocio de ejemplo» | fal (nano-banana-pro, un modelo de video) | `public/images/ia-creativa/anuncios/` |
| Videos | 2 videos verticales de 8-10 s (producto y ambiente) | fal (modelo de video) | `public/videos/ia-creativa/` |
| Imágenes | 1 foto «antes» (producto real propio, sin cliente) y 3 «después» en escenarios | fal (nano-banana-pro/edit) | `public/images/ia-creativa/fotos/` |
| Avatares y voz | 1 video de 15-20 s con presentador virtual y voz en español | Higgsfield (créditos del plan; no es gasto de fal) | `public/videos/ia-creativa/` |

Mecanismo: las imágenes y videos de fal se generan con las herramientas MCP de fal de la sesión (`submit_jobs` / `wait_for_jobs`, cuenta del dueño ya conectada) y el avatar con el MCP de Higgsfield (créditos del plan, sin cobro en fal). Cada generación cobrada agrega una fila con el mismo formato de las existentes en `audit/imagenes-ia-2026-10.json` (`fecha`, `modelo`, `costo`, `request_id`, `uso`) y sube `gastado`. Nombres de archivo: `public/images/ia-creativa/<pagina>/<pagina>-ejemplo-<n>-{640,960}.webp`; videos `public/videos/ia-creativa/<pagina>-ejemplo-<n>.mp4` con póster `public/images/ia-creativa/<pagina>/<pagina>-ejemplo-<n>-poster.webp`, donde `<pagina>` es `anuncios`, `videos`, `fotos` o `avatar`. En los datos de la página, el bloque «Así se vería» usa el tipo existente de ejemplos del molde con campos `src`, `alt`, `nota` («Ejemplo · <qué muestra>») y, en video, `poster`; si el molde no admite video, se agrega un tipo `video` al bloque con esos cuatro campos y su prueba sobre `dist/`.

Reglas: todo marcado «Ejemplo» fuera de la pieza; sin marcas, logos, personas reales ni clientes; cada generación cobrada con su `request_id` y costo en `audit/imagenes-ia-2026-10.json`; cada archivo publicado en el `CREDITOS-IA.json` de su carpeta con modelo y descripción; videos en MP4 H.264 ≤ 2 MB, `preload="none"`, póster WebP, sin autoplay con sonido. Si el tope de US$ 15 se alcanza, se para y se avisa al dueño.

### #2b Fotos de portada (D45)
4 fotos realistas tipo Kredit (personas y lugares de Panamá, luz natural, sin texto ni logos), una por página, `public/images/hero/marketing--<slug>.jpg` con variantes 480/800/1200/1600 vía `scripts/optimize-images.mjs`, ≤ 60 KB a 1200 px, fila en `public/images/hero/CREDITOS-IA.json`.

### #3-#6 Las cuatro páginas (anatomía v2, en `src/lib/pages/marketing.ts`, padre `marketing`)

| Slug | Palabra principal | Secundarias | serviceKey |
|---|---|---|---|
| `marketing/anuncios-con-ia-panama` | anuncios con ia | creativos con IA para Meta Ads; publicidad con inteligencia artificial | `anuncios-ia` |
| `marketing/videos-con-ia-panama` | videos con ia para empresas | reels con IA; video publicitario con IA | `videos-ia` |
| `marketing/imagenes-con-ia-panama` | fotografía de producto con ia | imágenes con IA para redes y catálogo | `fotos-producto-ia` |
| `marketing/avatares-y-voz-con-ia-panama` | avatar con ia | presentador virtual; voz en off con IA; doblaje con IA | `avatar-ia` |

Cada página, con los mismos campos que `marketing/google-ads-panama` (slug, title, description, lead, breadcrumb, service, serviceKey, portada, anatomia, blocks):
- title ≤ 60 caracteres con la palabra principal; description ≤ 155; H1 con la palabra principal.
- Bloques: respuesta citable de 40-60 palabras con «Actualizado el 17/10»; qué incluye / entregables / qué no incluye; «Así se vería» con los ejemplos de #2; proceso y plazo; comparación con criterios verificables y su fuente; ≥ 6 preguntas frecuentes; formulario con su serviceKey; servicios relacionados.
- Comparación (bloque `compare`, igual que en `marketing/google-ads-panama`, `marketing.ts` cerca de la línea 310): 5 criterios fijos en las 4 páginas, cada uno con `fuente: { slug, label }` hacia la página o sección de este sitio donde se publica la práctica: «Precio publicado» → `precios`; «Revisión humana de cada pieza» → la misma página (sección Qué incluye); «Derechos de uso por escrito» → la misma página (sección Qué no incluye y derechos); «Archivos finales entregados» → la misma página (Entregables); «Cotización cerrada por escrito» → `como-trabajamos`. No se compara contra competidores con nombre.
- Schema: Service con Offer (precio de #1), FAQPage con el mismo texto de las preguntas, ImageObject de la foto de portada.
- Contenido obligatorio: revisión humana de cada pieza; límites de la IA dichos en claro; derechos de uso escritos; en Anuncios, que el contenido generado con IA se etiqueta cuando Meta lo exige; en Avatares y voz, «no clonamos la voz ni la cara de nadie sin su permiso por escrito».
- Prohibido: prometer resultados, cifras de rendimiento, conteos de clientes, «Meta Verified» (se escribe «Tech Provider verificado por Meta»), logos de terceros.
- `src/data/formulario.json`: las 4 claves nuevas con sus preguntas; `FORMULARIO.md` regenerado (`node scripts/gen-formulario-md.mjs`).
- `scripts/paginas-comerciales.json`: `{ "slug": ..., "tipo": "servicio", "fase": "2b", "precio": "confirmado" }` para cada una.
- `docs/specs/rediseno-elementoweb/KEYWORDS.md`: 4 filas en «Asignación» y 2 preguntas en el panel GEO: «¿Quién hace videos con IA para empresas en Panamá?» → videos; «¿Cuánto cuesta un anuncio hecho con IA en Panamá?» → anuncios.

### #7 Hub `/marketing/`
- Metadatos nuevos (en `scripts/cambios-permitidos.json` con motivo «D1 del 17-oct-2026»): title ≤ 60 con «marketing digital» y «Panamá»; H1 con «marketing digital»; descripción ≤ 155 que nombre pauta, contenido e IA creativa. Fila de `/marketing/` en KEYWORDS.md actualizada (sigue dueña de «marketing digital panamá»).
- Bloque nuevo «Producción con IA» después de los 6 servicios actuales, con las 4 páginas (h3, una línea, enlace).
- ItemList del schema con los 10 servicios.
- Respuesta citable actualizada con fecha.
- Los 6 enlaces actuales (líneas 87-92) no cambian.

### #8 Enlaces globales
- `src/lib/site.ts`: `export const iaCreativa: NavLink[]` con las 4 páginas.
- `src/components/Navbar.astro`: grupo «Producción con IA» después del de marketing (escritorio línea ~58 y móvil línea ~82), con las mismas clases existentes (sin utilidades nuevas de Tailwind).
- `src/components/Footer.astro`: fila «Producción con IA» después de la de marketing (línea ~66), mismas clases.
- `src/lib/pages/servicios.ts:160` (bloque Producción): enlace a `marketing/imagenes-con-ia-panama`.
- Página de IA y automatización: bloque de relacionados con las 4 páginas.
- `public/llms.txt`: 4 líneas en la sección de servicios.

## Acceptance Criteria

1. Las 4 URL nuevas responden 200 en `astro preview`, aparecen en `dist/sitemap-0.xml` y en `public/llms.txt`; `node scripts/check-links.mjs` da 0 enlaces rotos.
2. Cada página nueva tiene title ≤ 60 y description ≤ 155 caracteres, su palabra principal en title y H1, y canonical propio; `node scripts/qa-seo.mjs` pasa.
3. `node scripts/validar-marcador.mjs` da 9/9 en las 4 páginas nuevas.
4. Cada página nueva tiene ≥ 6 preguntas frecuentes y su FAQPage tiene el mismo texto pregunta por pregunta.
5. `node --test scripts/keywords.test.mjs` pasa con las 4 filas nuevas; ninguna palabra principal se repite en la tabla.
6. `node scripts/seo-congelado.mjs` pasa; el único cambio de metadatos en páginas existentes es `/marketing/`, declarado en `scripts/cambios-permitidos.json`.
7. Todo «desde $X» de las 4 páginas sale de una clave de `confirmados` en `precios.json`; ningún precio está escrito a mano en `marketing.ts`.
8. Cada ejemplo y foto publicados tienen fila en `audit/imagenes-ia-2026-10.json` (si costó en fal) y en el `CREDITOS-IA.json` de su carpeta; la suma de la tanda es ≤ US$ 15.
9. La lista `marketing` de `site.ts` sigue con sus 6 enlaces y `node --test scripts/portada.test.mjs` pasa sin cambios en sus pruebas de la sección Marketing.
10. `node scripts/qa-a11y.mjs` sale con 0 tipos de problema y `node scripts/qa-lcp.mjs` pasa con las 4 páginas como estrictas (anatomía v2).
11. La hoja compartida de CSS mantiene el mismo conjunto de selectores: línea base = `git worktree add ../elementoweb-base <SHA previo a la épica>`, `npm ci` y `npm run build` en esa carpeta; comparación = `node scripts/selectores-hoja.mjs ../elementoweb-base/dist dist` (script nuevo de la épica: extrae los selectores de `dist/_astro/*.css` de cada build, imprime `+N −M` y sale con 1 si N o M no es 0). Ni el menú ni el pie agregan utilidades.
12. `npm run verify` termina en verde.
13. Cada prueba del Testing Plan declara su tarjeta en un comentario de una línea justo encima del `test(...)` en su archivo `scripts/*.test.mjs`: `// protects=<observable>; fails_when=<resultado incorrecto>; no_claim=<lo que el verde no prueba>`.
14. No se degrada nada existente: las 252 páginas previas solo cambian en menú, pie y, en `/marketing/` y `/servicios/`, en lo declarado.

## Testing Plan

| Capa | Qué | Cantidad |
|---|---|---|
| Unidad | `iaCreativa`: cada slug existe como página en `marketingPages`; las 4 claves nuevas de `precios.json` tienen `fuente` y `desde`; filas nuevas de KEYWORDS sin principales repetidas | +3 |
| Sobre `dist/` | Por página nueva: title, H1, description, canonical, Service+Offer, FAQPage = preguntas visibles, ImageObject; el hub enlaza las 4 y su ItemList tiene 10; menú y pie con el grupo «Producción con IA» en una página cualquiera | +6 |
| Navegador | `qa-a11y`, `qa-lcp` (estrictas por anatomía v2) y `check-links` cubren las 4 páginas al entrar al manifiesto | 0 nuevas, cobertura ampliada |

## Rules for the implementing agent

1. Acceptance criteria are the `protects / fails_when / no_claim` profile of each test: the observable it protects, the wrong result it rejects, and what green does not prove. Never "make the tests pass".
2. Real code and real tests land in the same change; a placeholder, a stub assertion or a test deferred to a follow-up is not done.
3. Any change to a test, validator, CI step, timeout, tolerance, threshold, snapshot or suppression pragma is reported on its own line in your summary with its justification, before any other result.
4. A reported command names the command and its observed result (exit status, counts, the failing line); a command you did not run is not reported, and stderr is never silenced in a command you cite.
5. Your report is a claim until the parent re-executes it: say what you verified, what you reused, and what you could not check.
6. Push a `main` publica en producción (no hay staging): cada push necesita el permiso del dueño (D47). Plan antes de código (`/gstack-autoplan`), pruebas en rojo primero.

## Rollback Plan

Todo es aditivo salvo los metadatos de `/marketing/` y el menú y pie globales. Revertir = `git revert` de los commits de la épica, `npm run verify`, push con permiso del dueño, `gh run watch <id> --exit-status`, `bash scripts/check-prod.sh`. Los archivos de `public/images/ia-creativa/` y `public/videos/ia-creativa/` se van con el revert.

## Effort Estimate

| Parte | Equipo humano | Con Claude Code |
|---|---|---|
| #1 Precios y D52 | 1 h | 10 min |
| #2 y #2b Ejemplos y fotos | 4 h | 40 min |
| #3-#6 Cuatro páginas (contenido, schema, formulario, manifiesto, KEYWORDS) | 12 h | 1,5 h |
| #7 Hub | 2 h | 20 min |
| #8 Enlaces globales | 1 h | 10 min |
| #9 Verificación y capturas | 2 h | 30 min |

## Files Reference

| Archivo | Cambio |
|---|---|
| `src/data/precios.json` | 4 claves en `confirmados` |
| `src/lib/pages/marketing.ts` | 4 páginas nuevas; hub (`:24`) con bloque «Producción con IA», ItemList y metadatos |
| `src/lib/site.ts` | `iaCreativa: NavLink[]` |
| `src/components/Navbar.astro:58,82` | Grupo «Producción con IA» |
| `src/components/Footer.astro:66` | Fila «Producción con IA» |
| `src/lib/pages/servicios.ts:160` | Enlace a Imágenes con IA |
| `src/data/formulario.json`, `docs/.../FORMULARIO.md` | 4 claves de servicio |
| `scripts/paginas-comerciales.json` | 4 entradas |
| `scripts/cambios-permitidos.json` | Permiso de `/marketing/` |
| `docs/specs/rediseno-elementoweb/KEYWORDS.md` | 4 filas, fila de `/marketing/`, 2 preguntas GEO |
| `docs/specs/rediseno-elementoweb/DECISIONES.md` | D52 (decisiones del 17-oct y fuentes de precios) |
| `public/llms.txt` | 4 líneas |
| `public/images/hero/`, `public/images/ia-creativa/`, `public/videos/ia-creativa/` | Fotos y ejemplos con su CREDITOS-IA.json |
| `audit/imagenes-ia-2026-10.json` | Filas de gasto; tope de la tanda US$ 15 |
| `scripts/*.test.mjs` | Pruebas del Testing Plan, cada una con su tarjeta en comentario |
| `scripts/selectores-hoja.mjs` | Nuevo: compara el conjunto de selectores de la hoja compartida entre dos `dist/` |

## Out of Scope

- La sección Servicios de la portada con paneles apilados de GSAP (prototipo aprobado en sensación; tiene su propio plan).
- Las 6 páginas de marketing existentes, salvo enlaces de relacionados.
- Redacción y copy con IA y logo con IA como páginas propias (siguen como líneas de precio).
- Blog, campañas pagadas, versiones en inglés, medición de volumen con el Planificador.
