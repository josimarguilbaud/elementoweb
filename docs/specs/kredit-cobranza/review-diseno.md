# Revisión de diseño — Demo 1 (resumen aplicado)

- Shell: sidebar navy 232px (iconos 64px a 1024; tab bar inferior a 390 con Resumen, Bandeja, Aprobaciones, Conversación, Más). Topbar 56px. Banda "Datos ficticios de demostración" fija, 28px, violeta suave, no descartable.
- Resumen: héroe (mora, 2/3) + 2 KPIs; fila de KPIs; solo 2 gráficos (embudo en barras horizontales y canal). Quitar migración semanal (o tile con sparkline).
- KPI: etiqueta Inter 13 muted; valor Inter semibold 32 tabular (héroe 56); delta con flecha+signo+texto; sparkline gris con último punto en marca.
- Mora 90 días: línea 2px marca; límite 10% discontinua roja con etiqueta; meta 8% punteada verde; marcador "Inicio de la plataforma"; eje 6–12%; tooltip.
- Distribución A–D: una barra apilada 100% secuencial azul (nunca rojo de estado). Sin tortas, sin doble eje. "Ver como tabla" en cada gráfico.
- Color: #3b82f6 solo trazos; texto/enlaces #2563eb o #1e3a8a; soft #5b6b82 sobre paper. Violeta = acción de la IA. Estados siempre con icono+texto.
- Oscuro: paper #0b1220, card #111a2e, ink #e2e8f0, muted #94a3b8, brand #60a5fa, violet #a78bfa, ok #34d399, warn #fb923c, crit #f87171, banda #2e1065/#ddd6fe. Hacer al final.
- Teléfono: marco CSS 360×720 genérico (sin marca WhatsApp), cabecera #075e54 "Kredit · Asistente automatizado", burbujas agente blanco / cliente #dcf8c6, "escribiendo…" 600–900ms, entrada 180ms; panel lateral "Qué está pasando en el sistema"; paso a paso con →; reduced-motion. Selector segmentado de guiones. Voz: onda de barras + transcripción resaltada.
- Estados: skeleton 300ms al cambiar periodo; vacío con "Quitar filtros"; banner ámbar; toast 4s con Deshacer (aria-live); fila pagada atenuada "Pagado · fuera de secuencia".
- Microcopy: usted; "B/. 1,250.00"; "Cifras ilustrativas, no una proyección."; sin jerga técnica.
- A11y: foco 3px, saltar al contenido, aria-current, foco al h1 al cambiar de vista, th scope, role=img + aria-label + tabla alternativa, objetivos 44px.
- Recortes: ficha mínima (solo desde Bandeja); Reglas en pestañas abriendo en Bitácora; un guion visible a la vez.
