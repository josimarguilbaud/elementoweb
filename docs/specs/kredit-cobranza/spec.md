# Spec — Plataforma de cobranza con IA (SaaS) y Demo 1 para Kredit

Estado: borrador v1 · 2026-10-07 · Autor: Elemento Web
Propuesta comercial asociada: `public/propuestas/kredit-cobranza-ia-19bfe5dc/` (EW-KRE-2026-01)

---

## 1. Problema

Kredit (fintech prestamista, Panamá, regulada) tiene la cartera en mora en **10%**, el límite
regulatorio que le aplica. Dos cuellos de botella frenan la cobranza:

1. El **Gerente General aprueba cada plan de pago** caso por caso.
2. La **conciliación de pagos es manual** (aviso por correo, hasta 1 día de retraso), lo que
   provoca contactar a clientes que ya pagaron.

No conocían la existencia de agentes de voz con IA para cobranza. No tienen presupuesto
definido: la propuesta ancla el precio.

## 2. Producto (visión SaaS)

Plataforma multiempresa de Elemento Web, vendida como servicio a prestamistas:

- **Segmentación** por riesgo (niveles A–D) con datos del core (SIF) y score externo (AgileCheck).
- **Secuencia multicanal** por días de mora: D0 WhatsApp + link de pago · D3–5 WhatsApp + email
  (+SMS si no lee) · D10–15 llamada con IA + plan preaprobado · D20+ cobrador humano o legal.
  Sale de la secuencia al pagar; se detiene ante disputa o "no contactar".
- **Motor de reglas**: planes preaprobados y límites de contacto (intentos/día/semana, horario).
- **Conciliación automática** de pagos (link de pago, Yappy, archivo/aviso del banco).
- **Agente de WhatsApp IA** y **agente de voz IA**, siempre identificados como sistema
  automatizado, nunca inventan montos (consultan la base vía herramientas).
- **Bandeja de cobradores**, **aprobaciones** de excepciones, **bitácora auditable** exportable.
- **Dashboard gerencial** en tiempo real.

### Stack objetivo (producción)

TypeScript (Hono) · Postgres con RLS por empresa · motor de secuencias y reglas en código con
cola (pg-boss) · n8n solo para conectores por cliente · WhatsApp Cloud API oficial · Claude API con
tool use para el agente de texto · Retell AI o Vapi + número local para voz · Brevo (email) ·
Twilio (SMS) · React + Vite + Tailwind + shadcn/ui · Coolify en Netcup/Hetzner · Sentry.

### Fases de producto (8–14 semanas, ver propuesta)

1. Descubrimiento y bases (reglas preaprobadas, conciliación, conector SIF, medición inicial)
2. Segmentación y secuencia multicanal
3. Agente de WhatsApp
4. Agente de voz (solo con la fase 1 funcionando)
5. Dashboard y ajuste

## 3. Demo 1 — objetivo

Un **demo navegable con datos ficticios** que el Gerente General de Kredit pueda recorrer en
la reunión (o solo, con el link) y que haga tangible la propuesta en **7 minutos**.
Debe responder a sus tres preguntas: *¿salgo del límite?, ¿dejo de aprobar todo yo?, ¿cómo
sé que no nos meten en un problema con el regulador?*

No es el producto: es una maqueta funcional de alta fidelidad, sin backend.

### No-objetivos

- Sin servidor, base de datos, login real ni integraciones reales.
- Sin llamadas ni mensajes reales (eso es el Demo 2).
- No se reutiliza la marca de Kredit (logo); se muestra "Kredit" solo como nombre de la
  empresa cliente en la interfaz, sin imitar su identidad visual.

## 4. Demo 1 — alcance funcional

Ruta: `public/demo/kredit/` → `elementoweb.com/demo/kredit/` (noindex; robots ya bloquea /demo/).
Un solo `index.html` con navegación interna por hash (`#resumen`, `#bandeja`, `#cuenta/123`,
`#aprobaciones`, `#reglas`, `#conversacion`), JS y CSS propios, **sin dependencias externas**
salvo Google Fonts (funciona aunque falle la red del mall: fuentes con fallback).

### Pantallas

1. **Resumen gerencial** (`#resumen`)
   - KPI héroe: mora / cartera total, con línea del límite (10%) y meta (p. ej. 8%), tendencia
     de 90 días: arranca en 10.2% y baja a ~8.6% tras activar la plataforma (marcador "Inicio de
     la plataforma").
   - KPIs: recuperado este mes (vs. anterior), % resuelto sin humano, promesas cumplidas,
     tiempo a primer contacto (de ~26 h a < 1 h), contactos fuera de límite = 0.
   - Embudo de la secuencia (cuentas por etapa y % recuperado), recuperación por canal,
     distribución por nivel de riesgo, migración temprana→avanzada por semana.
   - Selector de periodo (7/30/90 días) que recalcula con los datos ficticios.
2. **Bandeja de cobradores** (`#bandeja`): casos escalados con motivo (disputa, "ya pagué",
   mención legal, no contactar, fuera de regla), prioridad, monto, días de mora, espera,
   responsable. Filtros por motivo y responsable. Al abrir: resumen IA, historial, acciones
   (asignar, pausar contactos, cerrar) que cambian el estado en pantalla.
3. **Ficha de cuenta** (`#cuenta/:id`): datos, saldo y cuotas, nivel y score, línea de tiempo de
   contactos (canal, fecha, contenido, resultado; llamadas con transcripción), promesas.
4. **Aprobaciones** (`#aprobaciones`): planes fuera de regla con contexto para decidir; aprobar /
   rechazar actualiza el contador del menú y deja registro en la bitácora.
5. **Reglas y cumplimiento** (`#reglas`): planes preaprobados (editable en pantalla), límites de
   contacto, horario, guiones con versión, bitácora con exportación CSV real (descarga generada
   en el navegador).
6. **Conversación simulada** (`#conversacion`): teléfono con WhatsApp que reproduce paso a paso
   una conversación real del agente (saludo identificándose como sistema automatizado →
   consulta de saldo → oferta de plan preaprobado en 3 cuotas → link de pago → pago conciliado
   → la cuenta sale de la secuencia, y el KPI del resumen sube). Botón "Reproducir" y
   "Paso a paso". Segundo guion: disputa "ya pagué" → escala a bandeja y detiene mensajes.
   Tercer elemento: **transcripción de una llamada de voz** con audio opcional (sin audio real
   en el Demo 1; reproductor visual con la transcripción sincronizada).

### Datos ficticios

- Generados con semilla fija (determinista) en JS: ~4,800 cuentas activas, ~480 en mora, montos
  B/. 300–15,000, nombres latinos ficticios, teléfonos `+507 6xxx-xxxx` enmascarados.
- Coherentes entre pantallas (la cuenta de la bandeja existe en la ficha, el pago de la
  conversación impacta el resumen).
- Banda visible "Datos ficticios de demostración" en todas las pantallas.

### Diseño

Sistema visual de Elemento Web (igual que la propuesta): `#f6f8fc` fondo, `#0b1220` navy,
`#3b82f6` marca, `#7c3aed` IA, estados `#047857` / `#c2410c` / `#b91c1c`; Bricolage Grotesque,
Inter, Geist Mono. Modo claro y oscuro. Responsive 1440 / 1024 / 390 px. AA de contraste, foco
visible, el color nunca es la única señal.

## 5. Guion del demo (7 minutos)

1. Resumen: "Hoy están aquí (10%, línea roja). Con la plataforma, así se ve a los 60 días."
2. Conversación: reproducir el pago por WhatsApp; volver al resumen y ver el monto subir.
3. Disputa "ya pagué" → aparece en la bandeja; los mensajes se detienen solos.
4. Aprobaciones: "Usted solo ve esto: 3 casos fuera de regla, no 120."
5. Reglas y cumplimiento: límites, horario, guiones y exportar la bitácora para el regulador.
6. Cierre: "¿Quiere oír la llamada de voz en vivo?" → Demo 2.

## 6. Criterios de aceptación

- [ ] Las 6 vistas funcionan con navegación por hash y botón atrás del navegador.
- [ ] Sin errores de consola; sin peticiones de red salvo Google Fonts.
- [ ] Sin scroll horizontal a 390 px; usable en tablet.
- [ ] Datos coherentes entre vistas; la conversación modifica el resumen y la bitácora.
- [ ] Exportación CSV de la bitácora descarga un archivo válido.
- [ ] `<meta name="robots" content="noindex, nofollow">` y banda de datos ficticios.
- [ ] `npm run build` pasa; desplegado y responde 200 en `/demo/kredit/`.
- [ ] Carga < 1 s en local; peso total < 400 KB sin fuentes.

## 7. Riesgos

- Que parezca producto terminado → banda "demo" y frase en la portada del demo.
- Prometer cifras de recuperación → los números son ilustrativos y se dice explícitamente.
- Astro dev no resuelve índice en `/demo/x/` → probar con `/demo/kredit/index.html` en local.

## 8. Después del Demo 1

Demo 2 (voz en vivo: Retell/Vapi + número + WhatsApp real), luego MVP de producto sobre el
stack objetivo, empezando por la fase 1.
