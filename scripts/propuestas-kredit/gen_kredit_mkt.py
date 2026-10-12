#!/usr/bin/env python3
"""Propuesta de marketing digital y captación de leads para Kredit (formato Elemento Web)."""
import pathlib, json

HERE = pathlib.Path(__file__).parent
_src = (HERE / 'gen_kredit.py').read_text()
exec(_src[:_src.index('def d_mora')])  # plantilla, CSS y utilidades SVG compartidas

OUT_DIR = ROOT / 'public/propuestas/kredit-marketing-digital-4a6a12dc'
OUT = OUT_DIR / 'index.html'
REF = 'EW-KRE-2026-02'
DEMO_B2C = 'https://elementoweb.com/demo/kredit-landings/prestamos/'
DEMO_B2B = 'https://elementoweb.com/demo/kredit-landings/empresas/'
GOOGLE, META, TEAL = '#1d4ed8', '#0d9488', '#0d9488'

css += """
.aud{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:22px}
.aud .opt h3{font-size:19px}
.aud dl{margin:10px 0 0;display:grid;grid-template-columns:120px 1fr;gap:6px 12px;font-size:13.5px}
.aud dt{font:600 11px/1.5 var(--mono);letter-spacing:.06em;text-transform:uppercase;color:var(--soft)}
.aud dd{margin:0;color:var(--ink-2)}
@media(max-width:700px){.aud{grid-template-columns:1fr}.aud dl{grid-template-columns:1fr}}
.meter{display:inline-block;height:8px;border-radius:4px;background:#1d4ed8;vertical-align:middle;margin-right:8px}
.miss{counter-reset:m;list-style:none;margin:18px 0 0;padding:0;display:grid;gap:0;max-width:74ch}
.miss li{counter-increment:m;border-top:1px solid var(--rule);padding:13px 0 13px 44px;position:relative;font-size:14.5px;color:var(--ink-2)}
.miss li::before{content:counter(m);position:absolute;left:0;top:12px;width:28px;height:28px;border-radius:50%;background:var(--brand-tint);color:var(--brand-deep);font:700 13px/28px var(--display);text-align:center}
.miss li b{color:var(--ink)}
.need{display:grid;grid-template-columns:repeat(3,1fr);gap:16px;margin-top:22px}
.need .opt ul{margin:8px 0 0;padding-left:18px;font-size:13.5px;color:var(--ink-2)}
.need .opt li{margin-bottom:4px}
@media(max-width:820px){.need{grid-template-columns:1fr}}
tr.sub td{background:#f1f5f9;font-weight:700}
td.ph-cell{white-space:nowrap}
@media print{.keep{break-inside:avoid}.figure,.demo-block,.aud,.cols3{break-before:avoid}section>.eyebrow,section>h2,section>.prose,section>.lede{break-after:avoid}.aud,.need{break-inside:auto}.aud .opt,.need .opt{break-inside:avoid}.need{grid-template-columns:repeat(3,1fr)}.aud{grid-template-columns:1fr 1fr}}
"""

# ---------- D1: embudo completo ----------
def d_embudo():
    p = 'de'
    b = txt(20, 34, 'CANALES', 10, SOFT, 500, family=MONO, ls='0.12em')
    ch = [('Google Ads', 'búsqueda con intención'), ('Meta Ads', 'Facebook e Instagram'),
          ('Instagram', 'contenido mensual'), ('WhatsApp', 'envíos a su base'), ('Web + SEO/GEO', 'Google y asistentes IA')]
    ys = [50, 112, 174, 236, 298]
    for (t, s), y in zip(ch, ys):
        hl = t in ('Google Ads', 'Meta Ads')
        b += card(20, y, 170, 50, t, (s,), '#fff', GOOGLE if t == 'Google Ads' else META if t == 'Meta Ads' else 'rgba(15,23,42,.2)', ts=12.5, ss=10.5)
    b += txt(232, 34, 'LANDINGS', 10, SOFT, 500, family=MONO, ls='0.12em')
    b += card(232, 82, 168, 74, 'Préstamos', ('personas · calculadora', 'precalificación'), '#eff6ff', BRAND, ts=13.5, ss=10.5)
    b += card(232, 214, 168, 74, 'Empresas', ('convenio para', 'colaboradores'), '#eff6ff', BRAND, ts=13.5, ss=10.5)
    for y in ys:
        ty = 119 if y < 200 else 251
        b += path(f'M192 {y+25} C212 {y+25} 210 {ty} 230 {ty}', p, 'rgba(71,85,105,.55)', sw=1.2)
    b += txt(444, 34, 'AUTOMATIZACIÓN', 10, SOFT, 500, family=MONO, ls='0.12em')
    b += box(444, 104, 178, 162, '#f5f3ff', VIOLET, sw=1.4)
    b += txt(533, 128, 'n8n', 15, INK, 700, 'middle', DISP)
    for i, s in enumerate(['valida y deduplica', 'puntaje del lead', 'AgileCheck (si aplica)', 'asigna vendedor', 'responde por WhatsApp']):
        b += txt(460, 152 + i * 21, '· ' + s, 11.5, INK)
    b += arrow(402, 119, 442, 150, p)
    b += arrow(402, 251, 442, 222, p)
    b += txt(664, 34, 'VENTA', 10, SOFT, 500, family=MONO, ls='0.12em')
    b += card(664, 120, 132, 80, 'CRM de Kredit', ('lead calificado', 'con su historial'), '#fff', 'rgba(15,23,42,.25)', ts=13, ss=10.5)
    b += arrow(624, 160, 662, 160, p)
    b += card(818, 120, 122, 80, 'Vendedor', ('contacta en', 'menos de 5 min'), NAVY, NAVY, '#fff', '#cbd5e1', ts=13, ss=10.5)
    b += arrow(798, 160, 816, 160, p)
    b += card(664, 228, 200, 70, 'No calificado', ('respuesta clara y nutrición', 'por WhatsApp, sin vendedor'), '#f8fafc', 'rgba(15,23,42,.2)', '#334155', MUTED, ts=12.5, ss=10.5)
    b += path('M624 236 C640 236 646 262 662 262', p, MUTED, sw=1.2)
    # retorno de señales
    b += path('M905 202 L905 380 L105 380 L105 352', p, VIOLET, '5 4', 1.5, 'v')
    b += txt(492, 372, 'Señal de vuelta: lead calificado y préstamo desembolsado → Google y Meta optimizan por calidad', 11.5, VIOLET, 600, 'middle')
    return svg(p, 960, 400, 'Embudo de captación de Kredit',
               'Cinco canales (Google Ads, Meta Ads, Instagram, WhatsApp y la web con SEO) llevan a dos landings, de préstamos y de empresas. Un flujo en n8n valida, deduplica, puntúa, asigna vendedor y responde por WhatsApp. Los calificados pasan al CRM de Kredit y a un vendedor que contacta en menos de cinco minutos; los no calificados reciben una respuesta clara y nutrición por WhatsApp. El resultado vuelve a Google y Meta como señal de calidad.', b)

# ---------- D2: calificación ----------
def d_calif():
    p = 'dq'
    b = card(20, 120, 150, 70, 'Formulario', ('multipaso, con', 'consentimientos'), '#eff6ff', BRAND, ts=13, ss=10.5)
    b += box(204, 60, 230, 190, '#f5f3ff', VIOLET, sw=1.4)
    b += txt(319, 84, 'n8n · en segundos', 13, INK, 700, 'middle', DISP)
    for i, s in enumerate(['Formato de cédula y celular', 'Duplicados y spam', 'Puntaje según sus reglas', 'Empresa afiliada / tipo de ingreso', 'Consulta AgileCheck (opcional)', 'Etiqueta UTM y campaña']):
        b += txt(220, 110 + i * 22, '✓ ' + s, 11.5, INK)
    b += arrow(172, 155, 202, 155, p)
    tiers = [(40, 'CALIFICADO', '70 puntos o más', ['CRM + vendedor asignado', 'WhatsApp inmediato (si lo autorizó)', 'contacto en menos de 5 min'], '#ecfdf5', OK),
             (128, 'REVISAR', '40 a 69 puntos', ['CRM en etapa "revisión"', 'se atiende el mismo día', 'pide datos que faltan'], '#fff7ed', AMBER),
             (216, 'NO CALIFICADO', 'menos de 40', ['respuesta respetuosa', 'nutrición por WhatsApp (si aceptó)', 'no ocupa al vendedor'], '#f8fafc', SOFT)]
    for y, t, s, items, f, c in tiers:
        b += box(500, y, 440, 78, f, c, sw=1.3)
        b += txt(516, y + 26, t, 11.5, c, 700, family=MONO, ls='0.08em')
        b += txt(516, y + 46, s, 11, MUTED)
        for i, it in enumerate(items):
            b += txt(690, y + 24 + i * 19, '· ' + it, 11.5, INK)
        b += path(f'M436 155 C468 155 468 {y+39} 498 {y+39}', p, c, sw=1.3, mk='g' if c == OK else 'a')
    b += txt(20, 316, 'Umbrales y pesos de ejemplo: los define Kredit en el taller de calificación y se ajustan con los resultados reales.', 11.5, MUTED)
    return svg(p, 960, 330, 'Cómo se califica cada lead',
               'El formulario multipaso entra a n8n, que valida cédula y celular, descarta duplicados y spam, calcula un puntaje según las reglas de Kredit, revisa empresa afiliada y tipo de ingreso, puede consultar AgileCheck y etiqueta la campaña. Con 70 puntos o más el lead es calificado y va al CRM con vendedor asignado; de 40 a 69 queda en revisión; con menos de 40 recibe una respuesta respetuosa y nutrición, sin ocupar al vendedor.', b)

# ---------- D3: inversión publicitaria (gráfico de datos) ----------
SCEN = [('Arranque', 700, 800), ('Recomendada', 1200, 1500), ('Escala (desde el mes 3)', 2000, 2500)]
def d_pauta():
    p = 'dp'
    x0, W, maxv = 210, 640, 4500
    sc = lambda v: W * v / maxv
    b = f'<rect x="20" y="22" width="12" height="12" rx="3" fill="{GOOGLE}"/>' + txt(38, 32, 'Google Ads', 11.5, INK, 500)
    b += f'<rect x="130" y="22" width="12" height="12" rx="3" fill="{META}"/>' + txt(148, 32, 'Meta Ads', 11.5, INK, 500)
    for i, (n, g, m) in enumerate(SCEN):
        y = 62 + i * 58
        rec = n == 'Recomendada'
        b += txt(20, y + 20, n, 13, INK, 700 if rec else 500)
        b += f'<g><title>{esc(n)}: Google Ads US$ {g:,} · Meta Ads US$ {m:,} · total US$ {g+m:,} al mes</title>'
        b += f'<rect x="{x0}" y="{y+4}" width="{sc(g)-1}" height="24" rx="4" fill="{GOOGLE}"/>'
        b += f'<rect x="{x0+sc(g)+1}" y="{y+4}" width="{sc(m)-1}" height="24" rx="4" fill="{META}"/></g>'
        if sc(g) > 70: b += txt(x0 + 10, y + 21, f'{g:,}', 11, '#fff', 600, family=MONO)
        if sc(m) > 70: b += txt(x0 + sc(g) + 11, y + 21, f'{m:,}', 11, '#fff', 600, family=MONO)
        b += txt(x0 + sc(g + m) + 10, y + 21, f'US$ {g+m:,}/mes', 12, INK, 700 if rec else 500)
    b += f'<line x1="{x0}" y1="52" x2="{x0}" y2="{62+3*58-20}" stroke="rgba(15,23,42,.25)"/>'
    return svg(p, 960, 230, 'Inversión publicitaria mensual recomendada por escenario',
               'Barras apiladas por escenario. Arranque: Google Ads 700 y Meta Ads 800, total 1,500 dólares al mes. Recomendada: Google 1,200 y Meta 1,500, total 2,700. Escala desde el mes 3: Google 2,000 y Meta 2,500, total 4,500.', b)

# ---------- D4: cronograma ----------
def d_crono():
    p = 'dg'
    LX, X0, X1, Y0, RH = 20, 270, 940, 64, 40
    wk = (X1 - X0) / 8
    for w in range(8):
        b0 = txt(X0 + wk * (w + .5), 48, f'S{w+1}', 10, SOFT, 500, 'middle', MONO, '0.08em')
        if w == 0: b = b0
        else: b += b0
        b += f'<line x1="{X0+wk*w}" y1="56" x2="{X0+wk*w}" y2="{Y0+9*RH}" stroke="rgba(15,23,42,.07)"/>'
    rows = [('Taller, accesos y medición', 0, 1.5, VIOLET),
            ('Auditoría web y SEO técnico', 0, 2, BRAND),
            ('Landings de préstamos y empresas', 0.5, 3, BRAND),
            ('n8n + integración con el CRM', 1, 3, VIOLET),
            ('WhatsApp: verificación Meta y plantillas', 1, 3, BRAND),
            ('Creación de campañas y artes', 2, 3.5, BRAND),
            ('Pauta en vivo y optimización semanal', 3.5, 8, OK),
            ('Contenido de Instagram (mes 1)', 1.5, 8, BRAND),
            ('Mejora de la página principal + SEO/GEO', 2, 8, BRAND)]
    for i, (t, a, e, c) in enumerate(rows):
        y = Y0 + i * RH
        b += txt(LX, y + 22, t, 12, INK, 500)
        b += f'<rect x="{X0+wk*a}" y="{y+9}" width="{wk*(e-a)}" height="18" rx="4" fill="{c}"/>'
    x = X0 + wk * 3.5
    b += f'<line x1="{x}" y1="56" x2="{x}" y2="{Y0+9*RH}" stroke="{OK}" stroke-width="1.5" stroke-dasharray="4 3"/>'
    b += txt(x + 6, Y0 + 9 * RH + 16, 'Lanzamiento de la pauta (semana 4)', 11.5, OK, 600)
    return svg(p, 960, Y0 + 9 * RH + 30, 'Cronograma de las primeras 8 semanas',
               'Semana 1: taller, accesos y medición, y auditoría web. Semanas 1 a 3: landings, n8n con el CRM y verificación de WhatsApp. Semanas 3 y 4: campañas y artes. La pauta sale en vivo a mediados de la semana 4 y se optimiza cada semana. El contenido de Instagram y la mejora de la web con SEO avanzan en paralelo desde la semana 2.', b)

def fig(s, cap):
    return f'<div class="figure scroll-x">{s}</div>\n  <p class="caption">{cap}</p>'

# ---------- precios ----------
UNICO = [('A', 'Landing de préstamos (personas)', 'Calculadora de cuota, formulario de precalificación multipaso, información de costo del crédito, carga rápida en móvil', 950),
         ('B', 'Landing de empresas (convenios)', 'Propuesta para RR. HH. y finanzas, pasos del convenio, formulario de afiliación con validación de correo corporativo', 750),
         ('C', 'Automatización n8n + integración con su CRM', 'Validación, deduplicación, puntaje, asignación de vendedor, aviso inmediato y respuesta automática por WhatsApp', 1200),
         ('D', 'Medición y analítica', 'GA4, Google Tag Manager, Search Console, píxel de Meta + API de conversiones, conversiones offline desde el CRM y tablero', 450),
         ('E', 'Creación de campañas de Google Ads', 'Búsqueda para personas y para empresas, palabras clave y negativas, anuncios, extensiones y conversiones', 450),
         ('F', 'Creación de campañas de Meta Ads', 'Estructura por público, audiencias y remarketing, primeros creativos y formularios conectados', 450),
         ('G', 'Mejora de la página principal', 'Formulario de afiliación, tasa y costo visibles, aviso legal, velocidad, SEO on-page y datos estructurados', 950),
         ('H', 'Kit de activación para empresas afiliadas', 'Afiches y tarjetas con QR por empresa, mensajes para RR. HH. (correo, WhatsApp, intranet) y enlace con código de empresa para medir; hasta 10 empresas afiliadas', 450)]
MENSUAL = [('1', 'Gestión de Google Ads', 'Optimización semanal, pruebas de anuncios, palabras negativas, reporte', 400),
           ('2', 'Gestión de Meta Ads con artes', '8 piezas al mes (estáticos, carruseles y 2 reels), pruebas A/B, reporte', 500),
           ('3', 'Contenido mensual de Instagram', 'Sistema de generación de Elemento Web: 16 publicaciones + 12 historias, calendario y textos', 450),
           ('4', 'WhatsApp marketing masivo', '5,000 mensajes al mes, hasta 5 usuarios, API oficial; tarifas de Meta aparte, a costo', 350),
           ('5', 'SEO + GEO avanzado', 'Auditoría inicial, 2 contenidos nuevos al mes, optimización de páginas, datos estructurados, perfil de Google e informe mensual de Search Console y GA4', 600),
           ('6', 'Mantenimiento web Prioritario', 'Seguridad, respaldos, monitoreo, respuesta el mismo día y 1 h de cambios', 99)]
VPS = 550
u = {k: v for k, _, _, v in UNICO}
m = {k: v for k, _, _, v in MENSUAL}
ESENCIAL_U = sum(u[k] for k in 'ABCDEF'); ESENCIAL_M = m['1'] + m['2']
RECOM_M = sum(m[k] for k in '1234')
INTEGRAL_U = sum(u.values()); INTEGRAL_M = sum(m.values()); CREC_U = ESENCIAL_U + u['H']
money = lambda v: f'US$ {v:,}'

def rows_table(items):
    return ''.join(f'<tr><td><b>{k}</b></td><td><b>{esc(t)}</b><small>{esc(d)}</small></td><td class="n">{money(v)}</td></tr>' for k, t, d, v in items)

SUBCLS = ' class="sub"'
PAUTA_ROWS = ''.join(f'<tr{SUBCLS if n=="Recomendada" else ""}><td>{esc(n)}</td><td class="n">{money(g)}</td><td class="n">{money(mm)}</td><td class="n">{money(g+mm)}</td></tr>' for n, g, mm in SCEN)

html = f'''<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Marketing digital y captación de leads · Propuesta para Kredit — elementoweb.com</title>
{head_links}
<style>{css}</style></head>
<body>

<header class="hero"><div class="wrap">
  <div class="brandrow"><div class="wordmark"><i aria-hidden="true"></i>Elemento Web</div><div class="doctype">Propuesta · Marketing digital y captación</div></div>
  <h1>Más solicitudes calificadas, directo a sus vendedores</h1>
  <p class="sub">Un sistema completo de captación para personas y empresas: publicidad en Google y Meta, dos landings con formularios inteligentes, calificación automática con n8n, entrega al CRM de Kredit, WhatsApp marketing, contenido de Instagram y una web mejor posicionada en Google y en los asistentes de IA.</p>
  <dl class="facts">
    <div><dt>Preparada para</dt><dd>Kredit · Gerencia General</dd></div>
    <div><dt>Fecha</dt><dd>11 de octubre de 2026</dd></div>
    <div><dt>Válida hasta</dt><dd>10 de noviembre de 2026</dd></div>
    <div><dt>Referencia</dt><dd>{REF}</dd></div>
  </dl>
</div></header>
<main class="wrap">

<section>
  <p class="eyebrow">Resumen ejecutivo</p>
  <h2>Captar más, pero sobre todo captar mejor</h2>
  <p class="lede">Proponemos un sistema de captación con dos puertas de entrada: una para <b>empresas que quieren ofrecer el crédito a sus colaboradores</b> y otra para <b>los colaboradores que lo necesitan</b>. Cada solicitud se valida, se puntúa y llega al CRM de Kredit ya calificada, con su vendedor asignado y, si la persona lo autorizó, un primer mensaje enviado por WhatsApp en segundos.</p>
  <p class="prose">La publicidad aprende de lo que pasa después del formulario: le devolvemos a Google y a Meta qué leads resultaron calificados y cuáles se desembolsaron, para que inviertan en personas parecidas a sus mejores clientes y no en las que solo llenan formularios. Cuando la calidad de la cartera es prioridad, eso importa tanto como el volumen.</p>
  <div class="stats">
    <div><b>2</b><span>Landings: personas y empresas</span></div>
    <div><b>5</b><span>Canales trabajando juntos</span></div>
    <div><b>&lt;5 min</b><span>Objetivo de primer contacto del vendedor</span></div>
    <div><b>4</b><span>Semanas hasta la pauta en vivo</span></div>
  </div>
</section>

<section>
  <p class="eyebrow">Punto de partida</p>
  <h2>Una marca clara, con un canal digital que recién arranca</h2>
  <p class="prose">Revisamos el Instagram de Kredit (@kredit_pa) el 11 de octubre de 2026. La identidad ya está bien resuelta: una "K" reconocible, azul rey y cian, titulares fuertes y un mensaje aspiracional ("Tu solución financiera, en un instante", "Opciones de crédito para tus metas"). Incluso ya hay una pieza para empresas: "¿Buscas una solución financiera para tu equipo?".</p>
  <div class="stats">
    <div><b>5</b><span>Publicaciones en Instagram</span></div>
    <div><b>13</b><span>Seguidores</span></div>
    <div><b>1</b><span>Enlace en la biografía: kredit.com.pa</span></div>
    <div><b>2</b><span>Públicos en su contenido: personas y empresas</span></div>
  </div>
  <p class="prose" style="margin-top:18px">Con esa audiencia, el alcance orgánico todavía no genera solicitudes por sí solo: hoy el crecimiento tiene que venir de la pauta, y el contenido debe trabajar para la pauta (confianza, prueba social y un camino claro a la precalificación).</p>
  <h3 style="margin-top:30px;font-size:19px">La página principal hoy</h3>
  <p class="prose">También revisamos la página principal de kredit.com.pa. Comunica bien la promesa ("créditos rápidos y fáciles, con cuotas fijas y sin costos ocultos") y explica en sus preguntas frecuentes el modelo: <b>el crédito es para colaboradores de empresas afiliadas</b> y se paga con descuento automático en planilla. Lo que hoy le quita solicitudes:</p>
  <div class="tbl"><table>
    <thead><tr><th>Hallazgo</th><th>Por qué importa</th></tr></thead>
    <tbody>
      <tr><td><b>El botón "Afiliar empresa" no lleva a un formulario</b></td><td>Apunta a la misma sección: la empresa interesada no tiene dónde dejar sus datos. Es la puerta más valiosa del negocio.</td></tr>
      <tr><td><b>No hay formulario ni precalificación para personas</b></td><td>El único camino es escribir por WhatsApp; no se sabe de qué empresa viene cada persona ni de qué campaña.</td></tr>
      <tr><td><b>No se muestran tasa efectiva, plazos ni un ejemplo de costo</b></td><td>Google lo exige en la landing para aprobar anuncios de préstamos, y la normativa panameña pide indicar la tasa efectiva en la publicidad (a validar con su asesor).</td></tr>
      <tr><td><b>Aviso legal y política de cookies sin contenido</b></td><td>Los enlaces existen pero no llevan a nada; en una financiera restan confianza.</td></tr>
      <tr><td><b>Sin descripción, datos estructurados ni contenido para buscar</b></td><td>Una sola página sin metadatos ni páginas por tema: Google y los asistentes de IA tienen poco para mostrar.</td></tr>
      <tr><td><b>El enlace a Instagram del pie apunta a /kreditpa</b></td><td>El perfil activo es @kredit_pa. Conviene verificarlo para no mandar visitas a otra cuenta.</td></tr>
    </tbody>
  </table></div>
</section>

<section>
  <p class="eyebrow">La estrategia</p>
  <h2>Dos landings: empresas que se afilian y personas que buscan un préstamo</h2>
  <p class="prose">La landing de empresas trae convenios nuevos; la de personas está pensada para quien busca un préstamo en Google. Hoy su web indica que el crédito es para colaboradores de empresas afiliadas; por eso la landing pregunta dónde trabaja la persona y la regla se ajusta con un interruptor: <b>si Kredit presta al público general</b>, la solicitud sigue su curso; <b>si solo presta a afiliadas</b>, a quien no califica se le invita a recomendar a su empresa, y ese contacto entra como lead de empresa.</p>
  <div class="cols3">
    <div class="opt"><p class="k">1 · Afiliar</p><h3>Empresas nuevas</h3><p>Google (búsquedas de beneficios para colaboradores), LinkedIn opcional y la landing de empresas con formulario y reunión con un ejecutivo.</p></div>
    <div class="opt"><p class="k">2 · Activar</p><h3>Colaboradores de afiliadas</h3><p>Kit para RR. HH. con afiches y QR, mensajes internos, WhatsApp a quienes aceptaron y anuncios alrededor de las empresas afiliadas.</p></div>
    <div class="opt"><p class="k">3 · Captar en Google</p><h3>Personas que buscan un préstamo</h3><p>Landing con calculadora y precalificación para la búsqueda con intención; si su empresa no está afiliada, puede recomendarla y n8n la entrega como lead de empresa.</p></div>
  </div>
</section>

<section class="keep">
  <p class="eyebrow">El sistema</p>
  <h2>Del anuncio al vendedor, sin pasos manuales</h2>
  <p class="prose">Todos los canales llevan a las landings. Las landings entregan a n8n, que decide qué hacer con cada solicitud. El CRM de Kredit recibe solo lo que vale la pena atender, y el resultado de cada contacto vuelve a las plataformas de publicidad.</p>
  {fig(d_embudo(), 'Nada se pierde entre herramientas: cada lead conserva de dónde vino (campaña, anuncio, palabra clave) hasta el desembolso, para saber cuánto cuesta un préstamo colocado por canal.')}
  <div class="alert"><b>Calidad sobre volumen.</b> Un lead que se desembolsa y no paga cuesta más que ningún lead. Por eso la calificación filtra antes del vendedor y, cuando Kredit lo autorice, consulta AgileCheck desde n8n. Este sistema y la plataforma de cobranza que le propusimos comparten la misma base: n8n, WhatsApp oficial y sus reglas.</div>
</section>

<section>
  <p class="eyebrow">Dos públicos</p>
  <h2>Un mensaje distinto para cada puerta</h2>
  <div class="aud">
    <div class="opt"><p class="k">Personas</p><h3>Quien busca un préstamo en Google</h3>
      <dl><dt>Busca</dt><dd>Rapidez, cuota fija, saber si califica y cuándo le depositan, sin costos ocultos.</dd>
      <dt>Canales</dt><dd>Google (búsqueda con intención), Meta, Instagram, WhatsApp y el kit interno de las empresas afiliadas.</dd>
      <dt>Oferta</dt><dd>Calculadora de cuota y precalificación en 2 minutos; si su empresa no está afiliada, puede recomendarla.</dd>
      <dt>Se mide por</dt><dd>Costo por lead calificado, por préstamo desembolsado y empresas recomendadas.</dd></dl></div>
    <div class="opt"><p class="k">Empresas</p><h3>RR. HH. y finanzas que quieren el convenio</h3>
      <dl><dt>Buscan</dt><dd>Un beneficio para sus colaboradores, sin carga administrativa ni riesgo para la empresa.</dd>
      <dt>Canales</dt><dd>Google (búsquedas de beneficios y préstamos para colaboradores), Meta con público empresarial, LinkedIn opcional.</dd>
      <dt>Oferta</dt><dd>Cómo funciona el convenio, qué hace la empresa y qué hace Kredit, y una reunión con un ejecutivo.</dd>
      <dt>Se mide por</dt><dd>Reuniones agendadas, convenios firmados y colaboradores que solicitan.</dd></dl></div>
  </div>
  <p class="caption">Una empresa afiliada multiplica: cada convenio abre la puerta a todos sus colaboradores, con la cuota descontada por planilla. Por eso la landing de empresas tiene su propia campaña y su propio seguimiento.</p>
</section>

<section>
  <div class="keep">
  <p class="eyebrow">Landings</p>
  <h2>Dos landings hechas para convertir</h2>
  <p class="prose">Ya preparamos una vista previa de ambas para que las recorra. Los formularios están en modo demostración: validan los datos y le muestran exactamente lo que recibiría n8n, pero no envían nada.</p>
  @@SHOTS@@
  </div>
  <ul class="checks">
    <li><b>Formularios multipaso</b><span>Preguntas cortas en 3 o 4 pasos con barra de avance: más solicitudes completas que un formulario largo, y datos útiles para calificar.</span></li>
    <li><b>Validación al momento</b><span>Formato de cédula y de celular panameño, correo corporativo en empresas, protección contra spam y envíos duplicados.</span></li>
    <li><b>Calculadora de cuota</b><span>El cliente ve una cuota estimada antes de enviar sus datos, con la información de costo del crédito que exigen las plataformas.</span></li>
    <li><b>Consentimientos claros</b><span>Aviso de privacidad (Ley 81 de 2019), autorización para consultar referencias de crédito y permiso aparte para escribirle por WhatsApp.</span></li>
    <li><b>Atribución completa</b><span>Cada solicitud lleva su campaña, anuncio y palabra clave (UTM, gclid, fbclid) hasta el CRM.</span></li>
    <li><b>Velocidad</b><span>Páginas livianas alojadas en nuestro VPS, pensadas primero para el celular, que es donde llega casi todo el tráfico pagado.</span></li>
  </ul>
</section>

<section class="keep">
  <p class="eyebrow">Calificación automática</p>
  <h2>Su vendedor solo atiende lo que vale la pena</h2>
  {fig(d_calif(), 'El cliente nunca ve un "aprobado" ni un "rechazado": ve "Solicitud recibida" y el siguiente paso. En producción el puntaje se calcula en n8n, así que las reglas no quedan visibles en la página, y la decisión de crédito sigue siendo de Kredit.')}
  <div class="tbl"><table>
    <thead><tr><th>Criterio (ejemplo)</th><th>Personas</th><th>Empresas</th></tr></thead>
    <tbody>
      <tr><td><b>Empresa</b></td><td>Trabaja en una empresa afiliada (requisito o puntaje extra, según decida Kredit)</td><td>Empresa formal con planilla en Panamá</td></tr>
      <tr><td><b>Perfil</b></td><td>Antigüedad en la empresa y tipo de contrato</td><td>Sector y número de colaboradores</td></tr>
      <tr><td><b>Capacidad</b></td><td>Ingreso neto mensual frente al monto y plazo pedidos</td><td>Cargo del contacto (decide o influye)</td></tr>
      <tr><td><b>Vínculo</b></td><td>Cliente actual o referido por un cliente o una empresa</td><td>Correo corporativo y RUC válidos</td></tr>
      <tr><td><b>Cobertura</b></td><td>Provincia donde Kredit atiende</td><td>Provincia y fecha deseada de inicio</td></tr>
      <tr><td><b>Riesgo</b></td><td>Consulta de AgileCheck con autorización (opcional)</td><td>—</td></tr>
    </tbody>
  </table></div>
</section>

<section>
  <p class="eyebrow">Publicidad</p>
  <h2>Google para quien ya busca, Meta para quien todavía no</h2>
  <div class="two">
    <div class="opt"><p class="k">Google Ads</p><h3>Intención de compra</h3>
      <ul><li>Búsqueda para personas: "préstamo rápido Panamá", "préstamo personal", "préstamo con descuento directo" y la marca Kredit, con negativas para no pagar clics inútiles.</li>
      <li>Búsqueda para empresas: "beneficios para colaboradores", "bienestar financiero empleados", "convenio de préstamos para empleados".</li>
      <li>Remarketing a quien visitó la landing y no terminó.</li>
      <li>Conversiones offline: lead calificado y desembolso.</li></ul></div>
    <div class="opt"><p class="k">Meta Ads</p><h3>Demanda y remarketing</h3>
      <ul><li>Anuncios por ubicación alrededor de las empresas afiliadas, para activar a sus colaboradores (si la categoría especial de servicios financieros no lo limita).</li>
      <li>Campañas de clientes potenciales hacia la landing; quien no tiene empresa afiliada la recomienda.</li>
      <li>Remarketing en Instagram y Facebook con casos y preguntas frecuentes.</li>
      <li>8 artes nuevos al mes, con pruebas A/B de mensaje y formato.</li></ul></div>
  </div>
  <h3 style="margin-top:34px;font-size:20px">Inversión publicitaria recomendada</h3>
  <p class="prose">La inversión va directo a Google y a Meta desde las cuentas de Kredit; no pasa por nosotros. Sugerimos empezar con US$ 2,700 al mes y subir a US$ 4,500 solo cuando el costo por lead calificado esté en meta.</p>
  {fig(d_pauta(), 'Montos mensuales en dólares, aparte de la gestión. Pase el cursor sobre cada barra para ver el detalle.')}
  <div class="tbl"><table>
    <thead><tr><th>Escenario</th><th class="n">Google Ads</th><th class="n">Meta Ads</th><th class="n">Total al mes</th></tr></thead>
    <tbody>{PAUTA_ROWS}</tbody>
  </table></div>
  @@BENCH@@
  <div class="note">Los primeros 30 días son de aprendizaje: las plataformas necesitan conversiones para optimizar. Recomendamos un mínimo de 3 meses de pauta antes de juzgar el canal.</div>
</section>

<section>
  <p class="eyebrow">Cumplimiento en la publicidad</p>
  <h2>Anuncios de crédito pensados para cumplir las políticas</h2>
  @@POLICY@@
</section>

<section>
  <p class="eyebrow">WhatsApp marketing</p>
  <h2>Envíos masivos a su base, por la vía oficial</h2>
  <p class="prose">Campañas a su base de clientes y prospectos por la API oficial de WhatsApp Business: renovaciones, clientes que pueden volver a solicitar, empresas afiliadas y recordatorios. Cada respuesta llega a una bandeja compartida y, si es un lead, entra al mismo flujo de calificación.</p>
  <ul class="checks">
    <li><b>Incluye</b><span>5,000 mensajes al mes, hasta 5 usuarios, bandeja multiusuario, plantillas con variables, campañas programadas con imágenes, segmentos y panel de métricas.</span></li>
    <li><b>Consentimiento</b><span>Solo se escribe a contactos que aceptaron recibir mensajes de Kredit, con opción de baja en cada envío. Así se cuida el número y la calidad de la cuenta.</span></li>
    <li><b>Número propio</b><span>Recomendamos un número para ventas y otro para cobranza: si una campaña recibe reportes, no afecta los recordatorios de pago.</span></li>
    <li><b>Tarifas de Meta</b><span>Meta cobra cada mensaje de marketing entregado. Para Panamá, las tarifas publicadas a octubre de 2026 rondan US$ 0.074–0.085 por mensaje: 5,000 mensajes serían unos US$ 370–425 al mes, que se facturan aparte, a costo y según el volumen real.</span></li>
    <li><b>Política de WhatsApp</b><span>Permite promocionar préstamos de una entidad con licencia, pero no adelantos de nómina ni préstamos de día de pago, y no se debe pedir la cédula completa por chat: los datos sensibles van en la landing.</span></li>
  </ul>
</section>

<section>
  <p class="eyebrow">Instagram</p>
  <h2>Un mes de contenido pensado para captar, no solo para publicar</h2>
  <p class="prose">Con nuestro sistema de generación de contenido entregamos el mes completo de Instagram de una vez: calendario, artes, textos y llamados a la acción que llevan a la calculadora o a WhatsApp. Kredit revisa y aprueba antes de publicar.</p>
  <div class="tbl"><table>
    <thead><tr><th>Pilar</th><th>Para qué</th><th>Peso en el mes</th></tr></thead>
    <tbody>
      <tr><td><b>Educación financiera</b></td><td>Responder dudas reales: cuota, plazo, cómo mejorar su historial. Genera confianza y búsquedas.</td><td><span class="meter" style="width:60px"></span>30%</td></tr>
      <tr><td><b>Oferta y calculadora</b></td><td>Llevar a la precalificación con un mensaje claro y la información de costo.</td><td><span class="meter" style="width:50px"></span>25%</td></tr>
      <tr><td><b>Confianza</b></td><td>Quién es Kredit, cómo protege los datos, cómo identificar préstamos falsos.</td><td><span class="meter" style="width:40px"></span>20%</td></tr>
      <tr><td><b>Casos y testimonios</b></td><td>Historias reales, con autorización, de clientes y empresas afiliadas.</td><td><span class="meter" style="width:30px"></span>15%</td></tr>
      <tr><td><b>Empresas</b></td><td>El convenio como beneficio para colaboradores, para RR. HH. y gerencias.</td><td><span class="meter" style="width:20px"></span>10%</td></tr>
    </tbody>
  </table></div>
  <p class="caption">16 publicaciones (imágenes, carruseles y reels) y 12 historias al mes. El perfil de Instagram se audita al iniciar: biografía, enlaces, historias destacadas y respuesta a mensajes.</p>
</section>

<section>
  <p class="eyebrow">Web, SEO y GEO</p>
  <h2>Una página principal que convierte y aparece en Google y en la IA</h2>
  <p class="prose">La publicidad trae tráfico mientras se paga; el SEO trae solicitudes cada mes sin pagar por clic. Mejoramos la página principal de kredit.com.pa y trabajamos su posicionamiento con medición avanzada.</p>
  <div class="cols3">
    <div class="opt"><p class="k">Página principal</p><h3>Mejora</h3><p>Formulario real para afiliar empresas, acceso a la precalificación, tasa efectiva y ejemplo de costo visibles, aviso legal y cookies completos, señales de confianza y velocidad en móvil, sobre el WordPress actual.</p></div>
    <div class="opt"><p class="k">SEO avanzado</p><h3>Search Console y GA4</h3><p>Indexación, rendimiento por consulta, Core Web Vitals, eventos y conversiones en GA4, informes por canal y páginas de servicio que respondan cómo buscan sus clientes.</p></div>
    <div class="opt"><p class="k">GEO</p><h3>Asistentes de IA</h3><p>Contenido y datos estructurados para aumentar la probabilidad de que ChatGPT, Gemini y otros asistentes mencionen a Kredit cuando alguien pregunta por préstamos en Panamá.</p></div>
  </div>
  <ul class="checks">
    <li><b>VPS de Elemento Web</b><span>Alojamos las landings, n8n y, si lo desean, la web principal en un servidor privado virtual administrado por nosotros: recursos dedicados, certificados, respaldos diarios y monitoreo. Va en los tres planes, dimensionado para el volumen de leads; la ficha técnica se entrega al iniciar. Los datos de los leads quedan en un servidor bajo su control contractual, no en una herramienta gratuita.</span></li>
    <li><b>Perfil de Google</b><span>Ficha de empresa optimizada y estrategia de reseñas: en financieras, las reseñas pesan tanto como el anuncio.</span></li>
  </ul>
</section>

<section>
  <p class="eyebrow">Medición</p>
  <h2>Un tablero con lo que importa al negocio</h2>
  <div class="tbl"><table>
    <thead><tr><th>Indicador</th><th>Qué responde</th></tr></thead>
    <tbody>
      <tr><td><b>Costo por lead calificado</b></td><td>¿Cuánto cuesta una solicitud que vale la pena atender, por canal y campaña?</td></tr>
      <tr><td><b>Costo por préstamo desembolsado</b></td><td>¿Cuánto cuesta colocar un préstamo con cada canal? Es la cifra para decidir dónde invertir.</td></tr>
      <tr><td><b>Tasa de calificación</b></td><td>¿Qué parte de los leads cumple el perfil? Si baja, se ajustan anuncios y segmentación.</td></tr>
      <tr><td><b>Tiempo a primer contacto</b></td><td>¿Los vendedores responden en menos de 5 minutos? Un lead atendido tarde se enfría.</td></tr>
      <tr><td><b>Convenios y reuniones</b></td><td>¿Cuántas empresas pidieron reunión y cuántas firmaron?</td></tr>
      <tr><td><b>Tráfico orgánico y menciones</b></td><td>¿Cuántas solicitudes llegan por Google sin pagar y por asistentes de IA?</td></tr>
    </tbody>
  </table></div>
  <p class="caption">Reporte mensual con recomendaciones y una reunión de resultados. El tablero se actualiza solo y Kredit lo puede ver cuando quiera.</p>
</section>

<section class="keep">
  <p class="eyebrow">Cronograma</p>
  <h2>Pauta en vivo en la semana 4</h2>
  {fig(d_crono(), 'El plazo corre desde que tenemos los accesos y las reglas de calificación. La pauta no sale sin la medición funcionando: invertir sin medir es pagar a ciegas.')}
</section>

<section>
  <p class="eyebrow">Inversión</p>
  <h2>Tres formas de empezar</h2>
  <div class="pkgs">
    <div class="pkg"><p class="tag">Captación</p><h3>Esencial</h3><p class="for">Landings, automatización, medición y pauta gestionada.</p><div class="price">{money(ESENCIAL_U)}<small>pago único · más {money(ESENCIAL_M)} al mes y VPS {money(VPS)} al año</small></div>
      <ul><li>Landings de préstamos y empresas (A, B)</li><li>n8n + CRM + calificación (C)</li><li>Medición completa (D)</li><li>VPS para landings y n8n</li><li>Google y Meta: creación y gestión (E, F, 1, 2)</li></ul></div>
    <div class="pkg rec"><span class="badge">Recomendado</span><p class="tag">Captación + contenido</p><h3>Crecimiento</h3><p class="for">Lo esencial más activación de afiliadas, Instagram y WhatsApp.</p><div class="price">{money(CREC_U)}<small>pago único · más {money(RECOM_M)} al mes y VPS {money(VPS)} al año</small></div>
      <ul><li>Todo el plan Esencial</li><li>Kit de activación para empresas afiliadas (H)</li><li>Contenido mensual de Instagram (3)</li><li>WhatsApp marketing masivo (4)</li></ul></div>
    <div class="pkg"><p class="tag">Todo incluido</p><h3>Integral</h3><p class="for">Crecimiento más web, SEO + GEO y mantenimiento.</p><div class="price">{money(INTEGRAL_U)}<small>pago único · más {money(INTEGRAL_M)} al mes y VPS {money(VPS)} al año</small></div>
      <ul><li>Todo el plan Crecimiento</li><li>Mejora de la página principal (G)</li><li>SEO + GEO avanzado (5)</li><li>Mantenimiento web Prioritario (6)</li></ul></div>
  </div>
  <p class="caption">La inversión publicitaria (escenario recomendado: {money(2700)} al mes) y las tarifas de Meta por mensaje de WhatsApp (unos US$ 370–425 al mes si se usan los 5,000 mensajes) van aparte, a costo. Ejemplo con el plan Crecimiento y la pauta recomendada: US$ 1,700 + US$ 2,700 de pauta + unos US$ 400 de mensajes ≈ US$ 4,800 al mes.</p>
  <div class="tbl"><table>
    <thead><tr><th></th><th>Pago único</th><th class="n">Precio</th></tr></thead>
    <tbody>{rows_table(UNICO)}</tbody>
  </table></div>
  <div class="tbl"><table>
    <thead><tr><th></th><th>Servicio mensual</th><th class="n">Al mes</th></tr></thead>
    <tbody>{rows_table(MENSUAL)}<tr><td><b>VPS</b></td><td><b>Servidor VPS de Elemento Web</b><small>Landings, n8n y web; recursos dedicados, respaldos y monitoreo</small></td><td class="n">{money(VPS)} al año</td></tr></tbody>
  </table></div>
</section>

<section>
  <p class="eyebrow">Para considerar</p>
  <h2>Lo que suele quedar fuera, y no debería</h2>
  <ol class="miss">
    <li><b>Decidir a quién se presta.</b> Su web dice que el crédito es para colaboradores de empresas afiliadas. Si sigue así, la pauta de personas en Google debe decirlo en el anuncio para no pagar clics de quien no puede solicitar; si Kredit abre el crédito al público, la landing ya está lista para ambos casos.</li>
    <li><b>Activar a las empresas que ya están afiliadas.</b> Es el lead más barato y de mejor calidad: sus colaboradores ya califican. Suele quedar fuera porque no se ve como "marketing".</li>
    <li><b>El formulario para afiliar empresas.</b> Hoy el botón de la web no lleva a ninguno; cualquier pauta para empresas necesita esa puerta abierta primero.</li>
    <li><b>Vendedores listos antes de la pauta.</b> El mejor anuncio se pierde si el lead espera horas. Acordemos un tiempo de respuesta, horarios y quién atiende cada tipo de lead.</li>
    <li><b>Reglas de calificación escritas.</b> Quién califica, con qué ingreso, plazo, monto y cobertura. Sin ellas, el CRM se llena de solicitudes que no se pueden aprobar.</li>
    <li><b>Aprobación de anuncios por cumplimiento.</b> Los anuncios de crédito deben mostrar el costo y no prometer aprobación. Su oficial de cumplimiento revisa textos y artes antes de publicar.</li>
    <li><b>Consentimientos y base de WhatsApp.</b> Solo se envían campañas a contactos que aceptaron. Si la base actual no tiene ese registro, empezamos por pedirlo.</li>
    <li><b>La señal de vuelta desde el CRM.</b> Sin marcar en el CRM qué lead calificó y cuál se desembolsó, Google y Meta optimizan por volumen y no por calidad.</li>
    <li><b>Confianza visible.</b> Con tantos préstamos falsos en redes, la licencia, la dirección, los canales oficiales y las reseñas reales venden tanto como la tasa.</li>
  </ol>
  <h2 style="margin-top:40px">Qué más podemos sumar</h2>
  <div class="tbl"><table>
    <thead><tr><th>Opcional</th><th>Para qué</th><th class="n">Precio</th></tr></thead>
    <tbody>
      <tr><td><b>Asistente de IA en WhatsApp para precalificar 24/7</b></td><td>Responde preguntas, calcula la cuota y precalifica de noche y en fin de semana, cuando no hay vendedores.</td><td class="n">desde US$ 349 al mes</td></tr>
      <tr><td><b>LinkedIn Ads para empresas</b></td><td>Llegar directo a gerentes de RR. HH. y finanzas para el programa de convenios.</td><td class="n">US$ 300 al mes de gestión</td></tr>
      <tr><td><b>Programa de referidos</b></td><td>Clientes y empresas afiliadas recomiendan con un enlace propio que el CRM reconoce.</td><td class="n">se cotiza según alcance</td></tr>
      <tr><td><b>Video testimonial</b></td><td>Clientes y empresas reales contando su experiencia, para anuncios y redes.</td><td class="n">se cotiza según alcance</td></tr>
      <tr><td><b>Plataforma de cobranza con IA</b></td><td>La propuesta EW-KRE-2026-01: usa el mismo n8n, el mismo WhatsApp oficial y las mismas reglas.</td><td class="n">según su propuesta</td></tr>
    </tbody>
  </table></div>
</section>

<section>
  <p class="eyebrow">Para avanzar</p>
  <h2>Lo que necesitamos de Kredit</h2>
  <div class="need">
    <div class="opt"><p class="k">Accesos</p><h3>Cuentas y plataformas</h3><ul>
      <li>Google Ads, Google Analytics y Search Console (como administrador)</li>
      <li>Meta Business Suite, cuenta publicitaria e Instagram</li>
      <li>Dominio y DNS de kredit.com.pa, y acceso al WordPress</li>
      <li>CRM: nombre, acceso a su API, campos y etapas</li>
      <li>Número de WhatsApp Business y verificación de la empresa en Meta</li></ul></div>
    <div class="opt"><p class="k">Negocio</p><h3>Reglas y productos</h3><ul>
      <li>Productos: montos, plazos, tasa y costo total, requisitos</li>
      <li>Reglas de calificación, cobertura por provincia y uso de AgileCheck y la APC</li>
      <li>Cómo funciona el convenio, la lista de empresas afiliadas y si prestan al público general</li>
      <li>Vendedores: nombres, horarios y tiempo de respuesta</li>
      <li>Presupuesto mensual de pauta y medio de pago a las plataformas</li></ul></div>
    <div class="opt"><p class="k">Marca y legal</p><h3>Contenido y cumplimiento</h3><ul>
      <li>Logo, colores, tipografías y fotos de marca</li>
      <li>Aviso de privacidad y autorización de referencias de crédito</li>
      <li>Datos de licencia y textos legales obligatorios</li>
      <li>Persona de cumplimiento que aprueba anuncios</li>
      <li>Base de contactos con su consentimiento para WhatsApp</li>
      <li>Testimonios y casos con autorización</li></ul></div>
  </div>
</section>

<section>
  <p class="eyebrow">Riesgos del plan</p>
  <h2>Lo que puede frenar los resultados</h2>
  <div class="tbl"><table>
    <thead><tr><th>Riesgo</th><th>Cómo lo evitamos</th></tr></thead>
    <tbody>
      <tr><td>Las plataformas rechazan o limitan anuncios de crédito</td><td>Anuncios y landings con la información de costo que exigen, verificación del anunciante al iniciar y revisión de cumplimiento antes de publicar.</td></tr>
      <tr><td>Muchos leads, pocos aprobables</td><td>Calificación en el formulario, puntaje en n8n y señal de vuelta desde el CRM para optimizar por calidad.</td></tr>
      <tr><td>Leads atendidos tarde</td><td>Aviso inmediato al vendedor, respuesta automática por WhatsApp y alerta si un lead lleva más de 15 minutos sin contacto.</td></tr>
      <tr><td>El CRM no tiene API o la integración se demora</td><td>Plan B por correo estructurado o planilla compartida mientras se conecta; el flujo de n8n no cambia.</td></tr>
      <tr><td>Bloqueo del número de WhatsApp</td><td>API oficial, solo contactos con consentimiento, opción de baja y números separados para ventas y cobranza.</td></tr>
    </tbody>
  </table></div>
</section>

<section>
  <p class="eyebrow">Condiciones</p>
  <h2>Condiciones comerciales</h2>
  <div class="terms">
    <p><b>Pago único.</b> 50% al aprobar y 50% al lanzar la pauta. Tarjeta, transferencia bancaria o Yappy.</p>
    <p><b>Servicios mensuales.</b> Se facturan por mes adelantado desde el lanzamiento. Plazo mínimo de 3 meses para pauta y contenido.</p>
    <p><b>Inversión publicitaria.</b> Va directo a Google y Meta desde las cuentas de Kredit; las cuentas, campañas y datos son de Kredit.</p>
    <p><b>Propiedad.</b> Las landings, textos, artes y flujos de n8n hechos para Kredit son de Kredit al completar el pago.</p>
    <p><b>Datos.</b> Los datos de los leads se tratan conforme a la Ley 81 de 2019; firmamos acuerdo de confidencialidad y de tratamiento de datos.</p>
    <p><b>Resultados.</b> Las cifras de costo por lead son estimaciones de mercado; los resultados reales se reportan cada mes y guían los ajustes.</p>
    <p><b>Validez.</b> Esta propuesta vale hasta el 10 de noviembre de 2026. Precios en USD sin ITBMS (7%).</p>
  </div>
</section>

<div class="cta">
  <div><h2>¿Empezamos por el taller de calificación?</h2><p>Una sesión de una hora para definir quién califica y cómo se reparte entre sus vendedores. Con eso arrancamos las landings y la medición.</p></div>
  <div class="btns"><a class="btn" href="mailto:info@elementoweb.com?subject=Propuesta%20{REF}%3A%20marketing%20digital%20Kredit">Avanzar por correo</a><a class="btn alt" href="{DEMO_B2C}">Ver la landing de préstamos</a><a class="btn alt" href="https://wa.me/50761622787?text=Hola%2C%20quiero%20conversar%20sobre%20la%20propuesta%20{REF}%20de%20marketing%20digital.">Conversar por WhatsApp</a></div>
</div>
</main>

<footer><div class="wrap">
  <div class="src"><b>Fuentes y supuestos.</b> @@SOURCES@@ Los precios de Elemento Web son en dólares, sin ITBMS. Las cifras de inversión y costo por lead son estimaciones de mercado sujetas a los resultados de los primeros 30 días. El perfil de Instagram y la página principal de kredit.com.pa se revisaron el 11 de octubre de 2026; la auditoría técnica completa del sitio se hace al iniciar.</div>
  <div class="legalrow"><span>elementoweb.com · info@elementoweb.com · +507 6162-2787</span><span>Documento confidencial · Preparado para Kredit · {REF}</span></div>
</div></footer>
</body></html>
'''

# bloques que dependen de la investigación y de las capturas
extra = json.loads((HERE / 'kredit_mkt_extra.json').read_text()) if (HERE / 'kredit_mkt_extra.json').exists() else {}
shots = ''
if (OUT_DIR / 'landing-prestamos.webp').exists():
    shots = f'''<div class="demo-block"><div class="shots">
    <figure><img src="landing-prestamos.webp" width="1440" height="900" alt="Vista previa de la landing de préstamos de Kredit con calculadora de cuota y formulario de precalificación" loading="lazy"><figcaption><b>Préstamos.</b> Calculadora, precalificación en 4 pasos y respuesta por WhatsApp.</figcaption></figure>
    <figure><img src="landing-empresas.webp" width="1440" height="900" alt="Vista previa de la landing de empresas de Kredit para el convenio de préstamos para colaboradores" loading="lazy"><figcaption><b>Empresas.</b> El convenio explicado para RR. HH. y finanzas, con formulario de afiliación.</figcaption></figure>
  </div>
  <div class="demo-cta"><a class="btn" href="{DEMO_B2C}">Abrir la landing de préstamos</a><a class="btn" href="{DEMO_B2B}">Abrir la landing de empresas</a><span>Vista previa · formularios en modo demo</span></div></div>'''
html = (html.replace('@@SHOTS@@', shots)
            .replace('@@BENCH@@', extra.get('bench', ''))
            .replace('@@POLICY@@', extra.get('policy', '<p class="prose">Google y Meta tratan los préstamos como categoría sensible. Antes de lanzar verificamos la cuenta de anunciante, incluimos en anuncios y landings la información de costo del crédito que exigen y evitamos promesas de aprobación.</p>'))
            .replace('@@SOURCES@@', extra.get('sources', '')))
assert '@@' not in html
OUT_DIR.mkdir(parents=True, exist_ok=True)
OUT.write_text(html)
print('ok', OUT, len(html), 'esencial', ESENCIAL_U, ESENCIAL_M, 'recom', RECOM_M, 'integral', INTEGRAL_U, INTEGRAL_M)
