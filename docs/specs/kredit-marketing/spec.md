# Spec — Plan de marketing digital y captación de leads para Kredit

Estado: v1 · 2026-10-11 · Elemento Web
Relacionado: propuesta de cobranza con IA (`docs/specs/kredit-cobranza/`, EW-KRE-2026-01).

## 1. Contexto

Kredit es una fintech prestamista en Panamá (core SIF, score AgileCheck, mora en 10%, el límite
que les aplica). Quiere **captar leads**, **filtrarlos** y pasarlos **calificados** a su CRM para
que los atienda un vendedor. Dos públicos:

- **B2C — personas que buscan un préstamo.**
- **B2B — empresas que se afilian** para que sus colaboradores accedan a préstamos (supuesto de
  trabajo: convenio de descuento por planilla / beneficio para colaboradores; **confirmar con
  Kredit** el modelo exacto).

Pidió: WhatsApp marketing masivo; Google Ads y Meta Ads (Elemento Web gestiona, hace los artes y
recomienda la inversión); 2 landings profesionales con formularios avanzados conectados a n8n y
a su CRM; gestión de redes con el sistema de generación de contenido de Instagram; mejora de la
página principal con SEO + GEO avanzado (Search Console, GA4); y un VPS de Elemento Web.

No se pudo acceder a kredit.com.pa (DNS no resolvió desde el entorno) ni a Instagram: la
auditoría del sitio y del perfil se hace al aprobar (o con capturas que envíe Kredit).

## 2. Principio rector

**Calidad sobre volumen.** Con la mora en el límite, un lead que se desembolsa y no paga es
peor que ningún lead. Por eso: precalificación en el formulario, puntaje en n8n (con AgileCheck
cuando sea posible) y se le devuelve a Google y Meta la señal de "lead calificado" y "préstamo
desembolsado" para que optimicen por calidad, no por cantidad.

## 3. Embudo

Anuncio (Google Search / Meta) o contenido IG/WhatsApp → landing (B2C o B2B) → formulario
multipaso → n8n: validación, deduplicación, puntaje, enriquecimiento → CRM de Kredit
(etapa y vendedor asignado) + aviso inmediato al vendedor + respuesta automática al
prospecto por WhatsApp → vendedor contacta (SLA < 5 min en horario) → resultado vuelve
a n8n → conversiones offline a Google/Meta → tablero.

Los no calificados no se descartan: reciben una respuesta clara y, si aceptaron, entran a
nutrición por WhatsApp (o se derivan a otro producto).

## 4. Calificación (propuesta, a definir con Kredit)

B2C — campos: monto deseado, plazo, propósito, tipo de ingreso (empleado público, empleado
privado, jubilado/pensionado, independiente), salario/ingreso mensual neto, antigüedad
laboral, empresa (si es afiliada a Kredit), provincia, nombre, cédula, celular (WhatsApp),
correo, consentimientos (privacidad Ley 81/2019, autorización para consulta de referencias de
crédito, contacto por WhatsApp).

Puntaje (ejemplo): empresa afiliada +30; empleado público/jubilado +20 (si aplica descuento
directo); antigüedad ≥ 1 año +15; ingreso ≥ umbral +15; monto dentro de rango +10; provincia con
cobertura +10. A ≥ 70 "Calificado", 40–69 "Revisar", < 40 "No calificado". Umbrales los fija Kredit.

B2B — campos: empresa, RUC, sector, número de colaboradores, provincia, nombre y cargo del
contacto (RR. HH., finanzas, gerencia), correo corporativo, celular, interés (beneficio para
colaboradores, convenio de descuento por planilla), cuándo desean iniciar, consentimiento.
Puntaje: ≥ 50 colaboradores, cargo decisor, correo corporativo (no gmail/hotmail), sector.

## 5. Componentes y precios (USD, sin ITBMS)

Pago único:
- A. Landing de préstamos (B2C) con calculadora de cuota y formulario de precalificación multipaso — 950
- B. Landing de empresas (B2B) con formulario de afiliación — 750
- C. Automatización n8n + integración con el CRM de Kredit + puntaje y reparto a vendedores + respuesta automática por WhatsApp — 1,200
- D. Medición: GA4, Google Tag Manager, Search Console, píxel de Meta + API de conversiones, conversiones offline desde el CRM, tablero de resultados — 450
- E. Creación de campañas de Google Ads (B2C + B2B) — 450
- F. Creación de campañas de Meta Ads (B2C + B2B) — 450
- G. Mejora de la página principal de kredit.com.pa (estructura, mensajes, velocidad, SEO on-page, schema) — 950 (se confirma tras auditar el sitio)

Mensual:
- 1. Gestión de Google Ads — 400
- 2. Gestión de Meta Ads con artes (8 piezas al mes: estáticos, carruseles y 2 reels) — 500
- 3. Contenido mensual de Instagram con el sistema de generación de Elemento Web (16 publicaciones + 12 historias, calendario, textos) — 450
- 4. WhatsApp marketing masivo (5,000 mensajes al mes, hasta 5 usuarios, API oficial) — 350; tarifas de Meta aparte, a costo
- 5. SEO + GEO avanzado (Search Console, GA4, contenido, schema, perfil de Google) — 600
- 6. Mantenimiento web Prioritario — 99
- VPS de Elemento Web (alojamiento de landings, n8n y web) — 550 al año

Planes: Esencial (A–F + 1–2), Recomendado (A–F + 1–4), Integral (A–G + 1–6 + VPS).

Inversión publicitaria recomendada (aparte, directo a Google/Meta): arranque 1,500/mes;
recomendada 2,700/mes (Google 1,200 · Meta 1,500); escala 4,500/mes desde el mes 3 si el
costo por lead calificado está en meta. Mínimo 3 meses de pauta para aprendizaje.

## 6. Landings (demo)

Ruta: `public/demo/kredit-landings/prestamos/` y `.../empresas/` (noindex, banda de demo).
Formularios en **modo demo**: validan y muestran el JSON que se enviaría a n8n, **no envían
datos a ningún servidor**. Endpoint configurable por atributo `data-endpoint` (vacío = demo).
Marca: Kredit no entregó identidad; se usa una paleta neutral fintech con tokens CSS
reemplazables y un logotipo de texto "Kredit". Ninguna tasa o monto inventado se presenta como
real: campos marcados "dato por confirmar".

## 7. Lo que necesitamos de Kredit

Accesos (Google Ads, Meta Business, Search Console, GA4, dominio/DNS, web, Instagram), CRM
(nombre, API, campos y etapas, usuarios vendedores), reglas de calificación y productos
(montos, plazos, tasas, requisitos, cobertura), modelo B2B, identidad de marca, textos legales
(aviso de privacidad, autorización de referencias de crédito, licencia), aprobación de anuncios
por cumplimiento, número de WhatsApp Business y verificación de la empresa en Meta, base de
contactos con consentimiento, testimonios y casos, SLA de los vendedores, presupuesto de pauta
y forma de pago a las plataformas.
