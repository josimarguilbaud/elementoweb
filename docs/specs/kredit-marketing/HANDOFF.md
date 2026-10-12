# Traspaso — Kredit (cobranza + marketing) · estado al 12-oct-2026

Para continuar en una sesión local de Claude Code. Repo: `josimarguilbaud/elementoweb`
(todo está en `main` y en la rama `claude/festive-mendel-ld3j60`). **Un push a `main` publica
en producción** (ver `CLAUDE.md`).

## 1. Cliente

- **Kredit** · razón social CREDU HOLDINGS, S.A. · RUC 155770767-2-2025 DV9 · Torre de las
  Américas, Torre B, Of. 602-B, Punta Pacífica · WhatsApp +507 6997-5664 · ventas@kredit.com.pa
- Web en vivo (WordPress, hecha por jacs3d.com): https://kredit.com.pa — hero "Tu crédito, sin
  vueltas.", foto de mujer con celular, mockups de la app, "Accede a tu cuenta" (portal
  /app/), "Afiliar empresa", Quiénes somos, FAQ. Copia del HTML y captura en `referencias/`.
- Instagram @kredit_pa: 5 publicaciones, 13 seguidores (11-oct). Colores #1559ED, #4F6BF2,
  #C5D0FA, #091845; Poppins; "K" en degradado cian→azul.
- **Modelo (según su FAQ):** crédito solo para colaboradores de **empresas afiliadas**, cuota
  descontada por planilla, desembolso el mismo día de la aprobación.
- Contexto: fintech regulada (dijeron SBP; en Panamá las financieras suelen ser del **MICI** —
  sin confirmar), core SIF, score AgileCheck, mora en 10% (su límite), el Gerente General aprueba
  cada plan de pago y la conciliación de pagos es manual (por correo).

## 2. Entregables publicados

| Qué | URL | Fuente |
|---|---|---|
| Propuesta cobranza con IA (EW-KRE-2026-01) | elementoweb.com/propuestas/kredit-cobranza-ia-19bfe5dc/ (+ PDF) | `scripts/propuestas-kredit/gen_kredit.py` |
| Propuesta marketing digital (EW-KRE-2026-02) | elementoweb.com/propuestas/kredit-marketing-digital-4a6a12dc/ (+ PDF) | `scripts/propuestas-kredit/gen_kredit_mkt.py` + `kredit_mkt_extra.json` |
| Demo 1 "Recupera" (cobranza) | elementoweb.com/demo/kredit/ | `public/demo/kredit/`, pruebas `scripts/test-demo-kredit.mjs` (96 OK) |
| Landing personas (Google) | elementoweb.com/demo/kredit-landings/prestamos/ | `public/demo/kredit-landings/` |
| Landing empresas (B2B) | elementoweb.com/demo/kredit-landings/empresas/ | pruebas `scripts/test-landings-kredit.mjs` (236 OK) |
| Artifact privado de la propuesta de marketing | https://claude.ai/artifact/P3C8AzrWG6RRgh2r6hgxLg | copia con `<title>` corto |

Specs y revisiones: `docs/specs/kredit-cobranza/` (spec, reviews, guion-presentacion.md,
demo2-agente-voz.md) y `docs/specs/kredit-marketing/spec.md`.

Precios marketing (USD sin ITBMS): Esencial 4,250 + 900/mes · Crecimiento (recomendado) 4,700 +
1,700/mes · Integral 5,650 + 2,399/mes · VPS 550/año en los tres · pauta recomendada 2,700/mes
(Google 1,200 / Meta 1,500) · WhatsApp Meta ≈ US$ 0.074–0.085 por mensaje.
Precios cobranza: **por definir** (placeholders amarillos).

## 3. Pendientes (en orden)

1. **Rehacer las DOS propuestas con el diseño de la casa** (el que pidió Josimar):
   referencia `public/propuestas/tramitapa-entrega/index.html` y, para marketing,
   `public/propuestas/max-impresiones-marketing-digital/index.html`. Es Tailwind (CDN), `main`
   glass `max-w-4xl rounded-[28px]`, header oscuro `#0b1220→#1e3a8a` con orbes y rejilla, logo
   "elementoweb.com · Desarrollo Web · IA · Automatización", pill de tipo de documento, título
   con `.shine`, caja "Preparado para", secciones con `h2` + línea degradada, `service-card`
   numeradas con precio a la derecha, bloque "INVERSIÓN, NO FEE", "Cómo se cobra la pauta",
   "Resumen de Inversión" oscuro con "Para arrancar hoy", "Condiciones Comerciales" con ◆, CTA
   en degradado claro con WhatsApp + correo, footer oscuro y botón flotante de WhatsApp.
   Mantener todo el contenido actual (diagnóstico, estrategia, diagramas SVG, tablas, planes,
   lo que necesitamos, riesgos) y los diagramas, re-estilizados para ese formato.
   Regenerar los PDF (Carta, `printBackground`) y revisar página por página.
2. **Usar el skill local de gráficos y planificación** (el que se usó en la propuesta de MGI
   Chambonett) para mejorar diagramas, cronograma y gráficos.
3. Revisar de nuevo kredit.com.pa e Instagram (en local sí abren) y ajustar el diagnóstico.
4. **Cobranza y WhatsApp:** la política de WhatsApp Business parece prohibir la cobranza de
   deudas (aun con licencia); los recordatorios de pago antes del vencimiento como plantillas
   de utilidad sí parecen viables. Confirmar en la política oficial de Meta y, si aplica,
   ajustar EW-KRE-2026-01 (mora avanzada por voz/SMS/correo) y el demo.
5. Precios de la propuesta de cobranza (implementación, mensualidad por cuentas, plazo
   mínimo, anticipo) cuando Kredit dé tamaño de cartera.
6. Voz real del demo (llamada): generar en Higgsfield con la voz Gia
   (`530df032-c311-483b-a750-cb3c9e1bcdfd`) + voz masculina para el cliente, montar el MP3 en
   `public/demo/kredit/audio/` y sincronizar `VOICE.lines[].t` en `scripts.js`. Requiere
   créditos (≈ 8). Hoy suena con la voz del navegador (Web Speech API).
7. Demo 2 (llamada en vivo con Retell/Vapi): diseño listo en `demo2-agente-voz.md`.
8. Opcional: cargar las cotizaciones de Kredit en NousCRM (empresa Elemento Web).

## 4. Comandos

```bash
npm run build                                   # obligatorio antes de pushear a main
python3 scripts/propuestas-kredit/gen_kredit_mkt.py   # regenera la propuesta de marketing (HTML)
node scripts/propuestas-kredit/pdf-marketing.mjs      # PDF (necesita playwright instalado)
NODE_PATH=$(npm root -g) node scripts/test-landings-kredit.mjs
NODE_PATH=$(npm root -g) node scripts/test-demo-kredit.mjs
```

Nota: `gen_kredit_mkt.py` toma CSS y utilidades SVG de `gen_kredit.py` (que usa la plantilla
de MGI Chambonett). Al pasar al diseño de la casa conviene un generador nuevo con la
plantilla Tailwind.
