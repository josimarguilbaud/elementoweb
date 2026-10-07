# Revisión de ingeniería — resumen aplicado

Demo 1
- CSP (Report-Only) no permitía Google Fonts → errores de consola solo en producción. Aplicado: style-src + https://fonts.googleapis.com, font-src + https://fonts.gstatic.com en nginx/security.conf.
- Archivos externos (index.html, styles.css, app.js, store.js, data.js, charts.js, scripts.js, csv.js) con ES modules, rutas relativas, sin onclick/style inline, `?v=` en referencias por la caché de 10 min de /demo/.
- Dinero en centavos; DEMO_TODAY fijo; PRNG con semilla (mulberry32); nada de Date.now() en datos.
- Estado único + dispatch(action) que muta entidades, añade bitácora con hash encadenado y aplica delta a métricas; KPIs por selectores puros.
- Escenarios idempotentes con RESET_SCENARIO; "Reiniciar demo"; sessionStorage con try/catch; reproducción cancelable (AbortController) al navegar.
- Router por hash con tabla de rutas, foco al h1, document.title, aria-current. Sin pushState.
- CSV: BOM, comillas escapadas, neutralizar fórmulas (= + - @), nombre bitacora-kredit-AAAAMMDD.csv, revokeObjectURL.
- Formato de moneda manual "B/. 1,234.56" (no Intl PAB).
- Tests Playwright contra dist servido (no astro dev): rutas, sin errores, solo peticiones self+fonts, determinismo, coherencia KPI tras pago (y no doble), disputa→bandeja, aprobaciones decrementan badge, CSV válido, sin scroll horizontal 390/1024/1440.

Producción (para el MVP)
- RLS: rol sin BYPASSRLS, FORCE RLS, SET LOCAL por transacción, tenant en cada job, test de fuga entre tenants; vistas materializadas filtradas.
- canContact() en el punto de envío, transaccional; flags verificados al enviar; property tests de límites.
- Conciliación idempotente (UNIQUE source+external_id, inbox de webhooks, dedupe de archivos del banco por hash), cola de pagos sin match, fence que cancela envíos encolados al recibir un pago; SLA < 5 min.
- Secuencias como máquina de estados en Postgres (stage, next_action_at) + scheduler con SKIP LOCKED; n8n fuera del camino crítico.
- LLM: herramientas de solo lectura + create_payment_link validado en servidor; validación determinista de montos; clasificador de intención; identidad desde la sesión; plantillas Meta; evals adversariales.
- Voz detrás de interfaz VoiceProvider, mismas herramientas que texto, aviso de grabación.
- Bitácora append-only con hash encadenado, ancla externa, export firmado; seudonimización para conciliar con supresión (Ley 81/2019 y DE 285/2021).
- Transferencias internacionales (Anthropic, Meta, voz, Brevo, Twilio, Sentry) con contratos de encargado; Sentry con scrubbing; DPA Kredit–Elemento Web; confirmar residencia de datos.
- Infra: backups WAL a otro proveedor con restauración probada, réplica, monitoreo de webhooks; evaluar Postgres gestionado.
