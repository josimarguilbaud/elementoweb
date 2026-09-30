# Plan de implementación SEO / GEO / UX — Elemento Web (Panamá + Miami)

Base: auditoría externa del 29-sep-2026 (ChatGPT) **verificada contra el código actual** (rama `claude/festive-mendel-ld3j60`, 30-sep-2026).
Estado: **solo plan. No se ha modificado código del sitio.** Nada de esto se publica sin tu aprobación (un push a `main` despliega a producción).

Leyenda: ✅ confirmado en código · ⚠️ parcial · ➖ ya corregido · 🔒 requiere decisión tuya · 🏗️ fuera del repo (Coolify/Traefik/DNS/GBP)

---

## 0. Qué se verificó (resumen)

| ID auditoría | Estado | Evidencia en el repo |
|---|---|---|
| UX-01 navbar recortada en tablet | ✅ | `Navbar.astro:14,28,33,62` usa `md:` (768px); no cabe |
| A11Y-01 foco en panel cerrado | ✅ | `Navbar.astro:39,53` solo `opacity-0 pointer-events-none`; `setPanel` (l.111-118) no usa `inert` |
| A11Y-02 Escape no cierra menú móvil | ✅ | `Navbar.astro:130` solo `setPanel(null)`; sin retorno de foco, sin `aria-modal`, `aria-label` fijo, overflow no se restaura al hacer resize |
| A11Y-03 contraste CTA | ✅ | `global.css:75` `#333` sobre `#0099cc` (~3,2:1); mismo patrón en `[...slug].astro:62,94`, `Footer:13`, `index:341`, `Blocks:119/268` |
| CRO-01 alcance $950 | ✅ | PYME 8–12 págs (`site.ts:203-205`, ~30 sitios) vs "hasta 6 internas" (`servicios.ts:212`); home dice "corporativa desde $950" (`index:65,347`) |
| CRO-02 marketing vs Nosotros | ✅ | `core.ts:208` "no hacemos pauta…" vs `index:12`, `marketing.ts:39-41`, `servicios.ts:505` |
| CRO-03 anchor de contacto | ✅ | `[...slug].astro:65,95`, `cybersource/index.astro:561` → `/contacto/` sin ancla; el form no tiene `id` de bloque; planes "Empezar" pierden selección |
| SEO-01 `/blog/blog/` | ✅ | `schema.ts:134` concatena `/blog/` sobre un slug que ya empieza por `blog/`. Fix de 1 línea con `url(a.slug)` |
| SEO-02/03 redirects | ⚠️ | El 301 a HTTP viene de nginx (`try_files $uri/` sin `absolute_redirect off`) → **arreglable en repo**. 302 http→https y www→200 → 🏗️ Coolify/Traefik |
| PERF-01 hero bloqueado | ✅ | Preloader ~3 s con `overflow:hidden` (`Preloader.astro:32-66`); `.reveal{opacity:0}` (`global.css:47`) en H1/lead/CTAs/imagen hero (`index:82-96`, `[...slug]:44-69`); sin fallback noscript |
| PERF-02 imágenes | ✅ | Sin `srcset`, sin `astro:assets`, sin `sharp`; JPEG de 1,0–1,3 MB en portfolio; heros Miami 440–560 KB; PNG de marca hasta 2,4 MB |
| Fuentes | ✅ | Se piden Outfit 300–800 e Inter 400–600; 300/400 de Outfit no se usan; `font-black` (900) no está cargado |
| Reduced-motion / cursor touch | ➖ | Ya resueltos (`global.css:104-108`, `effects.ts:8,93`). Solo queda no instanciar Lenis en touch/reduce (opcional) |
| Formulario | ✅ | `novalidate`, sin `required`/`autocomplete`/`type=tel`, sin error por campo, sin `aria-invalid`, sin live region ni foco en éxito, sin timeout, `fecha` viene del cliente, honeypot no llega al backend |
| Secreto histórico | ⚠️ | Solo comentario en `site.ts:41-49` y `ContactForm:73-76`; **no hay valor vigente**. Sigue en historial git → 🔒 confirmar que se rotó |
| SEC-01 headers | ✅ | `nginx.conf` sin ningún header de seguridad ni `server_tokens off` |
| DATA-01 analítica | ✅ | `site.ts:25-28` `gaId`/`searchConsole` **vacíos**: GA4 y GSC no están activos; sin eventos |
| 404 | ✅ | `Base.astro:37` robots fijo `index,follow`; `PageData.noindex` existe (`types.ts:59`) pero nadie lo lee |
| Privadas | ⚠️ | 49/50 HTML de `/demo /propuestas /presentaciones /hackathon` ya tienen noindex; falta `propuestas/evolutionpmc-servidor-vps/index.html` |
| Miami thin/duplicado | ✅ | 7 de 14 páginas <220 palabras; hub y "en español" comparten H1 exacto |
| Skip link | ✅ ausente | `Base.astro`; `<main>` sin id |
| Alt logos / enlaces genéricos | ✅ | `index:148` `alt=""` + copia duplicada sin `aria-hidden`; "Ver servicio →" (`index:321`), "Ver más" ×13 (`miami.ts:30-42`). "Empezar" ya tiene `aria-label` ➖ |
| Casos / equipo | ✅ ausentes | No existe `/casos-de-exito/`; `/nosotros/` sin personas |

### Hallazgos **nuevos** (no estaban en la auditoría)
1. `schema.ts` `logo` apunta a `/favicon.svg` que **no existe** en `public/` → logo de Organization roto.
2. `ProfessionalService` se emite en decenas de páginas (todas con `service`), contra el comentario del propio código ("solo home y contacto"); `/contacto/` no lo recibe. `Service.areaServed` siempre = Panamá, incluso en páginas Miami. `Article` sin `@id`, `image`, `dateModified`; `og:type` siempre `website`; fecha fallback `2026-01-15`. `sameAs` con un solo Instagram de aspecto dudoso y un `⚠️ completar`. `GeoCircle` de 60 km en Ciudad de Panamá: revisar que sea intencional.
3. Twitter card sin `title`/`description`; `<html lang="es">` (schema/OG usan `es-PA`).
4. `robots.txt` bloquea carpetas privadas a 12 bots de IA: `Disallow` no desindexa ni protege. Falta `X-Robots-Tag` en nginx.
5. Comentario de `schema.ts:148` dice "108 páginas": desactualizado. El registro tiene ~151 + home + blog hub + 2 páginas propias.
6. `check-links.mjs` solo valida `href="/…"` internos; no anchors, `src=`, canonical, sitemap ni JSON-LD.

---

## 1. Principios (heredados del mega-prompt, adaptados a este repo)

- Conservar las 155 URLs, sus slugs y titles. Cero borrados/fusiones/301 de contenido sin datos GSC + tu aprobación.
- No inventar casos, métricas, equipo, direcciones, reseñas ni certificaciones.
- Un commit por fase, en la rama `claude/festive-mendel-ld3j60`. **No merge a `main`, no deploy, no PR** hasta que lo pidas.
- Antes de cada commit: `npm run build` + `node scripts/check-links.mjs` + nuevos checks (Fase 11).
- Stack actual se respeta (Astro 5 estático + Tailwind 4 + nginx). Sin migraciones de framework.

---

## 2. Decisiones que necesito de ti 🔒 (no bloquean las fases técnicas)

| # | Decisión | Afecta |
|---|---|---|
| D1 | **Alcance real de $950**: ¿8–12 páginas (PYME) o hasta 6? ¿Nombre oficial del paquete? Y el tramo de redacción "6–8 / más de 8" | Fase 1, 6 |
| D2 | **Pauta y contenido**: ¿ejecutan Google/Meta Ads y Reels ustedes, o refieren? Si hay algo que sí refieren (¿foto/video de estudio?), cuál | Fase 1 |
| D3 | **Secreto histórico del webhook**: ¿ya se rotó en n8n/Brevo? | Fase 1 |
| D4 | **Equipo**: nombres, roles, fotos y permiso para publicarlos en `/nosotros/` | Fase 5/8 |
| D5 | **Casos**: permiso de TRAMITAPA, San Blas Full, KL Contable, Movers y datos reales (leads, reservas, periodo). Sin datos → se publica el caso sin cifras | Fase 6 |
| D6 | **Testimonio de Jhair Davis**: ¿tienes cita textual/cifra aprobada? Si no, se suaviza a "aumentaron" | Fase 4 |
| D7 | **Sello "Meta Verified Tech Provider"**: enlace/documento verificable y denominación exacta | Fase 4/8 |
| D8 | **Sede / GBP**: ¿atienden presencialmente? ¿Dirección pública real? ¿Existe ficha de Google? ¿Razón social? | Fase 7 |
| D9 | **Miami**: ¿priorizar Doral/Hialeah con negocio real? ¿Fusionar zonas thin? (requiere GSC). ¿Inglés? | Fase 5/7 |
| D10 | **Analítica**: ¿ya usas GA4/GSC fuera del código? Necesito el ID de GA4 y confirmar propiedad GSC; ¿Clarity sí/no? ¿Política de consentimiento? | Fase 10 |
| D11 | **Accesos para datos**: export GSC 12–16 meses (páginas/consultas/país), leads del CRM por servicio | Fase 5 |
| D12 | **Home**: ¿aceptas el nuevo H1 orientado a resultado? (title se mantiene) | Fase 4 |
| D13 | **Privacidad**: revisión legal de la política antes de publicar versión definitiva | Fase 10 |

---

## 3. Fases

Prioridad P1 (alto impacto/bajo riesgo) → P3. Esfuerzo en horas de trabajo mío (S ≤2h, M 2–6h, L >6h).

### FASE 0 — Baseline y seguridad de trabajo (P1, S)
- Rama de trabajo ya creada (`claude/festive-mendel-ld3j60`); commit base `cbff42e`.
- `npm ci && npm run build` → registrar tiempo, nº de páginas, tamaño de `dist/`.
- Script `scripts/snapshot-seo.mjs`: extrae de `dist/` por URL → title, description, H1, canonical, robots, JSON-LD (hash) + lista de sitemap. Se guarda `audit/baseline-seo.json`. Sirve para probar "cero cambios de title/canonical no deseados".
- Capturas baseline (Playwright/Chromium preinstalado) a 320/390/768/1024/1440 de home, corporativa, contacto, miami.
- Lighthouse local ×3 por plantilla (home, servicio, artículo) en móvil/desktop; guardar medianas en `audit/baseline-perf.md`.
- Rollback: todo es git; cada fase = un commit revertible.

### FASE 1 — Fricciones críticas (P1, M-L)
1. **Navbar**: breakpoint `md:` → `lg:` (o el menor ancho en que quepa; medir a 1024). Cotizar visible desde `lg`. Comprobar a 768/820/1024/1280.
2. **Paneles**: `inert` + `aria-hidden` + `invisible` al cerrar, marcado inicial cerrado, `aria-controls`.
3. **Menú móvil**: `closeMobile()`; Escape cierra, devuelve foco al botón; al abrir `inert` en `main`/footer y foco al primer enlace; `aria-label` dinámico; restaurar `overflow` en resize; `role="dialog" aria-modal`.
4. **Skip link** + `<main id="contenido" tabindex="-1">` en `Base.astro`.
5. **Contraste CTA**: definir `--color-teal-cta` (texto blanco AA ≥4,5:1 o texto `#0b1220` sobre teal) y aplicarlo en `global.css:75` y CTAs WhatsApp/Cotizar. Verificar con cálculo de contraste automatizado.
6. **Contacto**: `id="formulario"` en el contenedor; todos los CTA → `/contacto/#formulario`; planes → `/contacto/?servicio=<clave>#formulario` (solo clave, sin PII) y preselección en `ContactForm`; scroll + foco lógico.
7. **Formulario accesible**: `required`, `autocomplete` (name/organization/email/tel), `type="tel" inputmode="tel"`, mensajes de error por campo (`aria-invalid`, `aria-describedby`), resumen de errores con `role="alert"`, éxito con `role="status"` + foco, `AbortController` timeout ~15 s con reintento, ID de intento opaco (dedupe) en el payload, `fecha` generada en servidor n8n o ISO UTC, enviar `botcheck` al backend. Reducir campos según D-negocio (mantener Nombre + un canal + mensaje; empresa opcional) — 🔒 confirmar.
8. **Coherencia comercial (tras D1/D2)**: centralizar alcance en `site.ts` (`pricing.scope`), alinear `servicios.ts:212`, `index:65,347`, tramo de redacción; reescribir `core.ts:208` y `core.ts:80,83`; suavizar "Se paga sola / ganancia neta" (`index:176`) y el testimonio (`index:277`).
9. **Test**: E2E del formulario contra webhook **de prueba** (nunca el n8n de producción) — 🔒 necesito un endpoint sandbox o pruebo solo con mock local.

### FASE 2 — SEO técnico (P1, M)
1. `schema.ts:134` → `url(a.slug)`; añadir `@id`, `url`, `image`, `dateModified` real si existe (si no, omitir), `BlogPosting`. Test: ningún `/blog/blog/` en `dist/`.
2. `logo` de Organization → asset real existente (`/marca/…` o `/logos/…`); ideal un PNG/SVG cuadrado ≥112 px.
3. `ProfessionalService`: solo home + contacto (+ nosotros), como dice el código; `Service.areaServed` correcto por página (Miami-Dade en `/miami/*`, proveedor en Panamá); sin `LocalBusiness` en Miami; revisar `GeoCircle`; `sameAs` solo perfiles verificados (D8).
4. `Base.astro`: prop `noindex` cableada (`page.noindex`, 404), sin canonical en 404, `lang="es-PA"`, `og:type=article` + `article:published_time` en blog, `twitter:title/description`.
5. `nginx.conf`: `absolute_redirect off; port_in_redirect off; server_tokens off;` + headers (`nosniff`, `Referrer-Policy`, `X-Frame-Options`/`frame-ancestors`, `Permissions-Policy`) **repetidos en cada `location`** (o `include snippets/security.conf`); `X-Robots-Tag: noindex, nofollow` para `/demo|propuestas|presentaciones|hackathon`; CSP solo en **Report-Only** (scripts inline, Google Fonts, n8n). HSTS: mejor en Traefik.
6. `propuestas/evolutionpmc-servidor-vps/index.html` → añadir noindex.
7. Sitemap: excluir `/404`; comprobar que solo hay canónicas 200. `lastmod` solo si es real.
8. 🏗️ **Fuera del repo** (te dejo instrucciones exactas): en Coolify activar "Force HTTPS" con redirect **permanente**, añadir `www.elementoweb.com` con redirect 301 a no-www (+ DNS/cert). Verificar tras deploy con `curl -I` (matriz http/https × www/no-www × con/sin slash).
9. Snapshot antes/después (Fase 0): diff de titles/canonicals = 0 salvo lo esperado.

### FASE 3 — Rendimiento (P1, L)
1. **Hero visible sin animación**: quitar `.reveal` de breadcrumb/H1/lead/CTAs/imagen en `index.astro:82-96` y `[...slug].astro:44-69`; `.reveal` solo bajo `html.js` (script inline en `<head>`) → sin JS todo visible. Conservar `fetchpriority=high`/eager/dimensiones.
2. **Preloader**: recortar a ≤1 s o solo primera visita (`sessionStorage`), timeout de seguridad, `<noscript>` de respaldo, no bloquear scroll/LCP. Decorativo, no gate.
3. **Lenis**: no instanciar en touch / reduced-motion.
4. **Imágenes**: añadir `sharp` como devDependency; script `scripts/optimize-images.mjs` que genera AVIF/WebP + variantes 480/800/1200/1600 a partir de los originales (originales se conservan en git); componente `<Pic>` con `<picture>`/`srcset`/`sizes`; aplicar a heros, portfolio, blog y OG (JPEG para OG). Objetivo: portfolio ≤150 KB, hero móvil ~120–180 KB, PNG de `public/marca` fuera del camino crítico. Imágenes ocultas de filtros: `loading=lazy` y no renderizar las no visibles.
5. **Fuentes**: `Outfit 500;600;700;800` + `Inter 400;500;600;700`, o self-host woff2 con `size-adjust` fallback; eliminar preload de estilo no necesario; sin 900.
6. Comparativa: 3 corridas por plantilla, medianas, mismas condiciones (Lighthouse local + PSI cuando haya red). INP no se reclama sin RUM.
7. Alt de logos con nombre real (`{file,name}`) y copia duplicada `aria-hidden`.

### FASE 4 — UX y conversión de la home (P2, M-L)
- Hero nuevo (tras D12): H1 "Diseño web en Panamá que convierte visitas en consultas" (variante a elegir) + subtítulo con precio cerrado/SEO técnico/Miami remoto + CTAs "Solicitar diagnóstico" / "Ver proyectos reales". Sin promesas de resultados.
- Orden nuevo: hero → proyectos (con problema resuelto) → formatos y precios → sistema web→CRM/IA (con límites) → proceso/garantías → equipo/testimonio → FAQ → contacto. Fusionar bloques repetidos (Soluciones vs Arquitectura; industrias y tecnologías compactas). Cero rutas eliminadas.
- Enlaces genéricos: "Ver servicio →" y "Ver más" (13 en Miami) con nombre accesible descriptivo.
- Bajar tono de frases contra competidores/freelancers; sustituir por entregables comprobables.
- Miami visible en navbar y footer (ya está el link; revisar prominencia).

### FASE 5 — Arquitectura y páginas nuevas (P2, L)
Se añaden **solo** vía `src/lib/pages/*.ts` + registro en `index.ts` (con guard de slugs duplicados):
1. `/precios/` (bloque `pricing` existente; alcance por D1; fecha de revisión; qué no incluye; renovaciones; impuestos "a confirmar" hasta D-fiscal). Enlazada desde navbar, footer, home, blog de precios.
2. `/casos-de-exito/` + casos autorizados (usa bloque `projects`; plantilla de caso del informe; sin cifras sin fuente).
3. `/nosotros/` ampliada (equipo real, D4).
4. `/como-trabajamos/` absorbe "metodología" (no crear `/metodologia/`).
5. `/recursos/calculadora-costo-total-web/` (JS pequeño, supuestos editables, método publicado) y `/recursos/checklist-migracion-seo/`.
6. `/comparativas/web-a-medida-vs-suscripcion/` (neutral, con método). Hub `/comparativas/` solo si hay ≥2.
7. **Miami** (requiere D9 + GSC): diferenciar H1 hub vs "en español"; ampliar Doral/Hialeah con escenarios reales; las 5 zonas thin (Sweetwater, Hialeah Gardens, Miami Lakes, Cutler Bay, North Miami): mejorar o marcar candidatas a fusión. **No se hace ningún 301 sin tu aprobación explícita y datos.**
8. Navegación/footer reorganizados (Panamá / Miami / Servicios / Industrias) reutilizando `site.ts`.
9. **No** crear páginas por buscador de IA, ni matriz ciudad×servicio×industria.

### FASE 6 — Contenido y casos (P2, continuo)
- Calendario de 12 semanas del informe (sección M) como backlog: precios → TRAMITAPA → San Blas → Shopify vs Woo → calculadora → KL/Movers → Miami → checklist → medición WhatsApp/GA4/CRM.
- Nuevos artículos: `reservas-directas-tours-san-blas`, `medir-leads-whatsapp-ga4-crm`, `cuanto-cuesta-pagina-web-miami` (solo con evidencia de mercado).
- Separar intención blog vs landing en los 30 pares industria/artículo (revisión selectiva, empezar por turismo, logística, contabilidad — donde hay prueba).
- Doc `docs/brief-contenido.md`: plantilla de brief por URL.

### FASE 7 — SEO local (P2, S + trabajo tuyo)
- Consistencia NAP en web (teléfono +507 6190-3007, hola@elementoweb.com). Dirección/GBP solo si D8 lo justifica; Miami = servicio remoto, sin dirección virtual ni GBP.
- Yo preparo: checklist GBP, texto de solicitud de reseñas (sin incentivos ni filtro), lista de citaciones/directorios reales. **Tú** ejecutas (no publico nada externo).

### FASE 8 — GEO / schema (P2, M)
- `AboutPage`+`Person` (con D4), `ContactPage`, `CollectionPage` para hubs, `Offer` solo con plan visible, `SoftwareApplication` en SaaS con datos reales, `BlogPosting` con autor real. Sin `Review`/`AggregateRating`/`VideoObject` inventados.
- Bloques "respuesta corta" + tabla de decisión en guías clave; FAQ visible se mantiene (sin prometer rich results).
- `llms.txt`: actualizar datos y quitar redundancias (opcional, sin expectativas). robots: revisar que la política de entrenamiento (GPTBot, Google-Extended…) sea decisión tuya distinta de la de búsqueda (OAI-SearchBot). 🔒
- Doc `docs/geo-panel-preguntas.md`: 12–20 preguntas estables para medición mensual manual.

### FASE 9 — Autoridad (P3, preparación)
- Kit para ti: lista de 20 objetivos (clientes, partners de pago, cámaras/asociaciones, medios PA/Miami), plantillas de outreach y de caso coautorado. **No se envía nada.**

### FASE 10 — Analítica y privacidad (P1 baseline, M)
- Con D10: activar `gaId` y `searchConsole`; delegado de eventos en `Base.astro`: `cta_click`, `click_whatsapp`, `click_phone/email`, `form_start`, `form_error` (solo tipo), `generate_lead` (tras respuesta OK del webhook, con ID opaco), `pricing_view`, `case_study_view`, `calculator_complete`. Sin PII en parámetros ni URLs. Sin `purchase`.
- Bing Webmaster y GSC: instrucciones (tuyas). Clarity solo si lo apruebas.
- `docs/event-dictionary.md` + definición de lead calificado para el CRM.
- Privacidad: inventario de proveedores (Google Fonts, n8n, Brevo, GA4…) para el revisor legal (D13). Sin afirmar cumplimiento.

### FASE 11 — QA (P1, en cada fase)
- Nuevo `scripts/qa-seo.mjs` sobre `dist/`: JSON-LD parseable, sin `/blog/blog/`, `@id`/`url` que resuelven, canonical único y autorreferente, 404 noindex, todo HTML privado con noindex, sitemap = 200 canónicas, diff contra `baseline-seo.json`, `alt` presente, `src=` locales existentes, anclas `#` válidas.
- Extender `check-links.mjs` (anchors, `src=`).
- Playwright: navegación teclado (tab order, Escape, foco), responsive 320–1440, formulario (mock), reduced-motion.
- Lighthouse antes/después; tabla comparativa con condiciones.
- Validación schema.org (validator local) y Rich Results manual con URLs de staging.

### FASE 12 — Entrega y monitoreo (P1)
- Changelog por fase, tabla antes/después, mapa de cambios SEO, guía de despliegue y rollback.
- Despliegue: cuando lo apruebes, merge a `main` → `deploy.yml`; seguir con `gh run watch`; verificar 200 y matriz de redirects. Monitoreo: GSC (indexación/404), leads por país/servicio, CWV con RUM ligero si autorizas.
- **Última pregunta: aprobación de una versión concreta ya revisable.**

---

## 4. Orden de ejecución propuesto

| Lote | Contenido | Necesita de ti |
|---|---|---|
| A (arranca ya) | Fase 0 + Fase 2 (schema, meta, nginx, noindex) + Fase 1.1-1.6 + 1.7 + Fase 3.1-3.3, 3.5 | Nada |
| B | Fase 3.4 (imágenes) + Fase 11 scripts QA + Fase 4 (estructura, sin textos dudosos) | D12 |
| C | Fase 1.8 (precios/marketing) + Fase 10 | D1, D2, D10 |
| D | Fase 5 (`/precios/`, `/casos-de-exito/`, recursos) + Fase 6/8 | D4, D5, D7, D8 |
| E | Miami (diferenciar/mejorar; fusiones solo con datos) | D9, D11 |
| F | Autoridad, GBP, reseñas (trabajo tuyo con mis plantillas) | Tú |

## 5. Riesgos
- Cambiar navbar/hero puede mover CLS → medir antes/después.
- `add_header` de nginx no se hereda entre `location` → test con `curl -I` en contenedor local (Docker).
- CSP mal puesta rompe fuentes/formulario → solo Report-Only en esta entrega.
- Optimización de imágenes aumenta el tamaño del repo si se versionan variantes → generar en build (`prebuild`) o commitear solo variantes finales; decidir en Lote B.
- Redirects www/HTTPS dependen de Coolify: sin tu acceso no se pueden cerrar.

---

## Estado de avance (actualizado 30-sep-2026)

| Fase | Estado |
|---|---|
| 0 Baseline | Hecho: `audit/baseline-seo.json` (155 URLs originales), `scripts/qa-seo.mjs` |
| 1 Fricciones críticas | Hecho: navbar/foco/Escape, contraste, formulario, anclas + plan preseleccionado, alcance $950 = hasta 6 páginas, pauta propia. Pendiente: prueba E2E con webhook sandbox |
| 2 SEO técnico | Hecho salvo Coolify (HTTPS 301 y www) y probar nginx en contenedor |
| 3 Rendimiento | Hecho: hero sin reveal, preloader corto, WebP responsive, fuentes. Pendiente: medir en PSI real tras deploy |
| 4 UX/conversión | Hecho: H1 nuevo, orden de secciones. Pendiente: reducir bloques repetidos, enlaces "Ver más" de Miami |
| 5 Arquitectura | `/precios/` hecho. Pendiente: `/casos-de-exito/`, recursos, comparativa, Miami |
| 6-9 | Pendiente (necesita datos de casos, GSC, GBP, permisos) |
| 10 Analítica | Eventos listos (`track.ts`); falta ID de GA4 y código de Search Console |
| 11 QA | `qa-seo.mjs` + `check-links.mjs` limpios (0 problemas). Faltan tests de responsive completos |
