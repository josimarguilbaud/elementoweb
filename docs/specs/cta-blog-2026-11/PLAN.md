# Plan: CTA en todas las páginas, mejoras de GSC y lote de blog (nov-2026)

Origen: lectura de Search Console del 18-nov-2026 (memoria `reference_seo_elementoweb.md`).
Josimar pidió el 21-nov: CTA en todas las páginas, mejorar lo que aparezca y crear artículos nuevos
con imágenes, SEO, GEO y CTA, todos enlazados entre sí.

## Lo que hay hoy

- Todas las páginas de `[...slug].astro` tienen botones en la portada: formulario y WhatsApp.
- El bloque «Siguiente paso» solo sale en las secciones comerciales (`CHAIN_SECTIONS`). **El blog no lo tiene.**
- 60 páginas llevan un bloque `form` o `service-form`. **Las ~200 entradas del blog terminan en `faq` o `related`, sin cierre.**
- Search Console (3 meses): 24 clics, 12,5 mil impresiones, CTR 0,2 %. Con tan poco tráfico, cada visita cuenta.

## Fase A: CTA de cierre en todas las páginas (plantilla, no página por página)

1. Componente nuevo `CtaCierre.astro`, sobre la base de DESIGN.md: grafito y Roboto, sin colores nuevos.
   - Título, una línea y dos botones: «Pedir diagnóstico sin costo», que va a `/contacto/?servicio=<clave>#formulario`,
     y «Escribir por WhatsApp», con un texto que nombra la página.
   - Se renderiza en `[...slug].astro` al final, **salvo** cuando la página ya tiene `form` o `service-form`,
     para no repetir el formulario. También se omite en `/contacto/`.
2. En el blog, el servicio de destino sale de un mapa por categoría o por tema: un artículo de SEO lleva a la
   página de SEO y uno de WhatsApp lleva al agente de WhatsApp. El mapa vive en `src/lib/cta-blog.ts` y tiene prueba.
3. CTA a mitad de artículo en el blog: una tarjeta corta después del segundo bloque, que enlaza al servicio
   relacionado. Mismo componente en modo compacto.
4. Medición: los enlaces ya cuentan como `cta_click` o `click_whatsapp` en `clic-cta.ts`. Se agrega `data-service`.
5. Pruebas: una prueba nueva verifica que cada página del `dist` tenga al menos un CTA de cierre o un formulario.

## Fase B: mejoras sacadas de Search Console

1. Títulos y descripciones de las páginas en posiciones 11 a 22, con respuesta directa y precio cuando esté confirmado:
   - `/industrias/diseno-web-clinicas-salud-panama/`: «diseño web para clínicas» (11,9) y «médicos» (15,2).
   - Las páginas que reciben «agencia de diseño web» (20,8), «agencia de marketing digital» (22,2),
     «creación de contenido para instagram» (17,7) y «administración de instagram» (18,2).
   - El cruce exacto de consulta por página se saca de GSC antes de tocar nada.
2. Las dos respuestas sobre WordPress que están en el top 4 y no reciben clics: reescribir el título y la descripción.
3. Corregir los 4 errores 404 de la indexación (redirección o enlace) y revisar las 10 páginas «descubiertas sin indexar».
4. Reglas: no tocar URL, `title` ni H1 de `/` ni de `/diseno-web-panama/` (memoria `prioridad SEO`).
   `KEYWORDS.md` y `keywords.test.mjs` tienen que seguir pasando: una palabra principal por página.

## Fase C: lote de artículos nuevos

Temas sacados de consultas con impresiones que todavía no tienen artículo propio (sin canibalizar páginas de servicio):

| # | Slug propuesto | Consulta de GSC (impresiones en 3 meses) | Enlaza a |
|---|---|---|---|
| 1 | `cuanto-cuesta-una-pagina-web-wordpress-en-panama` | preguntas de WordPress en el top 4 | tecnologías/WordPress, precios |
| 2 | `cuanto-cuesta-google-ads-en-panama` | google ads panama (334), publicidad en google (149) | marketing/google-ads |
| 3 | `seo-para-tiendas-online-en-panama` | seo para ecommerce (206) y estrategias (142) | crecimiento/SEO, tiendas online |
| 4 | `cuanto-cuesta-administrar-instagram-en-panama` | administración de instagram (86, 18,2) y contenido (60) | marketing/contenido-redes |
| 5 | `marketing-digital-para-dentistas-en-panama` | dentistas (57), estrategia dental (32, 19,6) | industrias/clínicas, blog de dentistas |
| 6 | `cuanto-cuesta-email-marketing-en-panama` | email marketing (148) y marketing por email (130) | marketing/email |
| 7 | `que-hace-una-agencia-web-y-cuando-contratarla` | agencia web (28, 13,5) y empresa de diseño web (56) | diseño web panamá, guía para elegir agencia |
| 8 | `alternativas-a-yappy-para-cobrar-en-panama` | alternativas a yappy (8, posición 10) | integración de pagos, CyberSource |

Cada artículo:
- Usa el formato `PageData` de los lotes existentes (`blog-43.ts` en adelante), con un bloque `answer` citable
  (GEO), `faq` con FAQPage, CTA a mitad y al cierre (fase A) y `related` hacia 3 o 4 páginas y artículos.
- Precios solo de `src/data/precios.json` (`confirmados`). Los de terceros, con fuente citada o marcados como estimado.
  Nada de estadísticas inventadas (`afirmaciones.test.mjs`).
- La portada se hace con el mismo estilo 3D cromado de `img.ts`, con fal (unos US$ 0,15 por imagen),
  `portadas-fotos.mjs` y `heroes-manifest.mjs`. La imagen va sin texto adentro y con alt descriptivo.
- Enlaces de vuelta: cada artículo nuevo se enlaza desde 2 o 3 artículos viejos del mismo tema y desde su página de
  servicio. Se actualizan `llms-full.txt`, el sitemap (automático) y el índice del blog (automático).

## Verificación y publicación

- `npm run build`, `npm test` y `node scripts/check-links.mjs`. `npm run verify` antes de pushear, porque aplica el presupuesto de CSS y la regla de Lighthouse.
- Capturas del CTA de cierre a 1440×900 y 390×844 (blog, servicio, industria).
- Un push a `main` publica. Se pushea por fase (A, B y C por separado) para poder revertir cada una.
  **Josimar aprueba antes de cada push.**
- Marcar en GSC la fecha de corte de cada fase para comparar el 19-dic.
