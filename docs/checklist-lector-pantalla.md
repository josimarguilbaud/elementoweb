# Revisión con lector de pantalla y validación externa (lo que no puede hacer una máquina)

Las pruebas automáticas ya cubren contraste, nombres, etiquetas, jerarquía de encabezados, landmarks, foco visible y orden de Tab
(`scripts/qa-a11y.mjs`, `scripts/qa-sr.mjs`, `scripts/qa-responsive.mjs`). Esto es lo que falta y debe hacer una persona.

## A. Lector de pantalla (30 minutos)
Herramienta: **NVDA** (Windows, gratis) con Firefox o Chrome · **VoiceOver** (Mac/iPhone: Cmd+F5) · **TalkBack** (Android).
Páginas: `/`, `/contacto/`, `/precios/`, `/recursos/calculadora-costo-total-web/`, un servicio, un artículo.

| # | Prueba | Cómo | Se espera |
|---|---|---|---|
| 1 | Saltar al contenido | Al cargar, pulsa Tab una vez y Enter | Se anuncia «Saltar al contenido» y el foco pasa al contenido principal |
| 2 | Estructura | Abre la lista de encabezados (NVDA: Insert+F7) | Un solo H1; los H2 cuentan una historia lógica |
| 3 | Landmarks | Lista de regiones (NVDA: D / VoiceOver: rotor) | banner, navegación, principal, pie |
| 4 | Menú de escritorio | Tab hasta «Servicios», Enter/Espacio | Se anuncia «contraído/expandido»; Escape cierra y el foco vuelve al botón |
| 5 | Menú móvil (390 px) | Abre el menú; Escape | Se anuncia «Menú de navegación, diálogo»; el fondo no se lee; Escape cierra y devuelve el foco |
| 6 | Formulario, envío vacío | Pulsa «Enviar solicitud» sin llenar | Se lee el resumen de errores; el foco cae en el primer campo con error, que anuncia su mensaje |
| 7 | Formulario, éxito | Envía uno de prueba | Se anuncia «Solicitud recibida» sin tener que buscarlo |
| 8 | Calculadora | Cambia formato y cuota | El resultado se anuncia al cambiar (región de estado) |
| 9 | Imágenes | Recorre la home | Las de proyectos tienen descripción; las decorativas no molestan |
| 10 | Enlaces | Lista de enlaces | Los botones repetidos («Ver caso del proyecto») tienen contexto; anota los ambiguos |
| 11 | Zoom | 200 % y 400 % de zoom / 320 px de ancho | Sin scroll horizontal; nada recortado |
| 12 | Movimiento | Activa «reducir movimiento» en el sistema | El contenido se ve completo, sin animación de entrada |

Registra: fecha, lector y navegador, página, qué falló y cómo se escuchó. Pásamelo y corrijo.

## B. Datos estructurados: validación externa (10 minutos)
La estructura ya se valida localmente (`scripts/qa-seo.mjs`: tipos, propiedades obligatorias, referencias `@id`, URLs). Falta el validador oficial:

1. **Schema.org Validator** → https://validator.schema.org/ → pega la URL o el código.
2. **Prueba de resultados enriquecidos de Google** → https://search.google.com/test/rich-results
3. **Search Console → Mejoras** (aparece cuando Google procesa las páginas).

URLs a probar (una por tipo): `/` (Organization, WebSite, FAQ) · `/nosotros/` (AboutPage, Person) · `/precios/` (Service + ofertas) · `/blog/cuanto-cuesta-diseno-web-panama/` (BlogPosting) · `/miami/` (CollectionPage) · `/casos-de-exito/tramitapa/`.
Nota: Google retiró los resultados enriquecidos de FAQ; el marcado se conserva por coherencia, no para obtener fragmentos.

## C. Cabeceras y redirects en producción (2 minutos)
```
bash scripts/check-prod.sh
```
Debe terminar en «0 fallos». Los fallos esperados hoy, hasta que se configure Coolify: `http → https 301`, `www → no-www 301` y `HSTS`.
