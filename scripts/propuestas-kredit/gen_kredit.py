#!/usr/bin/env python3
"""Genera la propuesta de cobranza con IA para Kredit con la plantilla de Elemento Web."""
import re, sys, pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]  # raíz del repo elementoweb
TPL = ROOT / 'public/propuestas/mgi-chambonett-plataforma-ia-123088c3/index.html'
OUT = ROOT / 'public/propuestas/kredit-cobranza-ia-19bfe5dc/index.html'
REF = 'EW-KRE-2026-01'

tpl = TPL.read_text()
head_links = re.search(r'(<link rel="preconnect".*?)\n<style>', tpl, re.S).group(1)
css = re.search(r'<style>(.*?)</style>', tpl, re.S).group(1)

css += """
/* propios de esta propuesta */
.ph{background:#fef9c3;border:1px dashed #ca8a04;color:#854d0e;border-radius:4px;padding:1px 6px;font-weight:600;white-space:nowrap}
.pkg .price .ph{font-size:20px;padding:4px 8px}
.alert{border-left:3px solid #b91c1c;background:#fef2f2;padding:14px 18px;border-radius:0 6px 6px 0;font-size:14.5px;color:var(--ink-2);margin-top:18px;max-width:70ch}
.alert b{color:#991b1b}
.legend{display:flex;gap:18px;flex-wrap:wrap;font:500 11px/1 var(--mono);letter-spacing:.06em;color:var(--soft);margin-top:10px}
.legend i{display:inline-block;width:12px;height:12px;border-radius:3px;vertical-align:-2px;margin-right:6px}
.shots{display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-top:22px}
.shots figure{margin:0;background:var(--card);border:1px solid var(--rule);border-radius:8px;overflow:hidden;break-inside:avoid}
.shots img{display:block;width:100%;height:auto;border-bottom:1px solid var(--rule)}
.shots figcaption{font-size:13px;color:var(--muted);padding:10px 14px}
.demo-cta{display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-top:18px}
.demo-cta .btn{display:inline-block}
.demo-cta span{font-size:13px;color:var(--soft)}
@media(max-width:700px){.shots{grid-template-columns:1fr}}
@media print{.demo-block{break-inside:avoid}.shots{grid-template-columns:1fr 1fr}.alert{break-inside:avoid}footer .wrap{break-inside:avoid}footer{padding-bottom:0}}
"""

# ---------- utilidades SVG ----------
MONO = "'Geist Mono', ui-monospace, monospace"
SANS = "Inter, system-ui, sans-serif"
DISP = "'Bricolage Grotesque', Inter, sans-serif"
INK, MUTED, SOFT = '#0f172a', '#475569', '#64748b'
NAVY, BRAND, DEEP, VIOLET = '#0b1220', '#3b82f6', '#1e3a8a', '#7c3aed'
OK, RED, AMBER = '#047857', '#b91c1c', '#c2410c'

def esc(s):
    return s.replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')

def txt(x, y, s, size=12, fill=INK, weight=400, anchor='start', family=SANS, ls=None):
    l = f' letter-spacing="{ls}"' if ls else ''
    return (f'<text x="{x}" y="{y}" fill="{fill}" font-size="{size}" font-weight="{weight}" '
            f'font-family="{family}" text-anchor="{anchor}"{l}>{esc(s)}</text>')

def lines(x, y, rows, size=12, fill=INK, weight=400, anchor='start', lh=None, family=SANS):
    lh = lh or size * 1.3
    return ''.join(txt(x, y + i * lh, r, size, fill, weight, anchor, family) for i, r in enumerate(rows))

def box(x, y, w, h, fill='#fff', stroke='rgba(15,23,42,.18)', r=8, dash=None, sw=1):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    return f'<rect x="{x}" y="{y}" width="{w}" height="{h}" rx="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{d}/>'

def card(x, y, w, h, title, sub=(), fill='#fff', stroke='rgba(15,23,42,.18)', tc=INK, sc=MUTED, ts=13, ss=11, dash=None):
    out = box(x, y, w, h, fill, stroke, dash=dash)
    n = 1 + len(sub)
    top = y + h / 2 - (n - 1) * 7.5 + 4
    out += txt(x + w / 2, top, title, ts, tc, 600, 'middle')
    for i, s in enumerate(sub):
        out += txt(x + w / 2, top + 16 + i * 14, s, ss, sc, 400, 'middle')
    return out

def arrow(x1, y1, x2, y2, pid, color=MUTED, dash=None, sw=1.4, mk='a'):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    return f'<line x1="{x1}" y1="{y1}" x2="{x2}" y2="{y2}" stroke="{color}" stroke-width="{sw}"{d} marker-end="url(#{pid}-{mk})"/>'

def path(d, pid, color=MUTED, dash=None, sw=1.4, mk='a'):
    da = f' stroke-dasharray="{dash}"' if dash else ''
    return f'<path d="{d}" fill="none" stroke="{color}" stroke-width="{sw}"{da} marker-end="url(#{pid}-{mk})"/>'

def svg(pid, w, h, title, desc, body):
    defs = ''.join(
        f'<marker id="{pid}-{k}" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">'
        f'<polygon points="0 0,8 3,0 6" fill="{c}"/></marker>'
        for k, c in (('a', MUTED), ('v', VIOLET), ('g', OK), ('r', RED), ('b', BRAND)))
    return (f'<svg viewBox="0 0 {w} {h}" xmlns="http://www.w3.org/2000/svg" role="img" '
            f'aria-labelledby="{pid}-title {pid}-desc"><title id="{pid}-title">{esc(title)}</title>'
            f'<desc id="{pid}-desc">{esc(desc)}</desc><defs>{defs}</defs>'
            f'<rect width="100%" height="100%" fill="#f6f8fc"/>{body}</svg>')

# ---------- D1: mora frente al límite ----------
def d_mora():
    p = 'dm'
    x0, x1, y = 60, 900, 110
    sc = lambda v: x0 + (x1 - x0) * v / 15
    b = txt(x0, 40, 'CARTERA EN MORA SOBRE CARTERA TOTAL', 10, SOFT, 500, family=MONO, ls='0.12em')
    b += f'<rect x="{x0}" y="{y}" width="{sc(10)-x0}" height="26" rx="4" fill="#dbeafe"/>'
    b += f'<rect x="{sc(10)}" y="{y}" width="{x1-sc(10)}" height="26" rx="4" fill="#fee2e2"/>'
    for v in range(0, 16, 1):
        X = sc(v)
        b += f'<line x1="{X}" y1="{y+26}" x2="{X}" y2="{y+32 if v % 5 else y+38}" stroke="{SOFT}" stroke-width="0.8"/>'
        if v % 5 == 0:
            b += txt(X, y + 54, f'{v}%', 11, SOFT, 500, 'middle', MONO)
    X = sc(10)
    b += f'<line x1="{X}" y1="{y-40}" x2="{X}" y2="{y+26}" stroke="{RED}" stroke-width="2.5"/>'
    b += txt(X + 8, y - 28, 'Límite regulatorio: 10%', 13, RED, 700)
    b += txt(X + 8, y - 12, 'Por encima: zona de infracción', 11, RED, 400)
    b += f'<circle cx="{X}" cy="{y+13}" r="9" fill="{NAVY}" stroke="#fff" stroke-width="2"/>'
    b += txt(X - 14, y - 28, 'Kredit hoy: 10%', 13, INK, 700, 'end')
    b += txt(X - 14, y - 12, 'sin margen ante una mala quincena', 11, MUTED, 400, 'end')
    tgt = sc(7.5)
    b += path(f'M{X-12} {y+70} L{tgt+12} {y+70}', p, OK, sw=2, mk='g')
    b += txt((X + tgt) / 2, y + 90, 'Objetivo: margen de seguridad bajo el límite (la meta se fija con Kredit en la fase 1)', 11.5, OK, 600, 'middle')
    b += txt(x0 + 4, y + 18, 'Dentro del límite', 11, DEEP, 600)
    b += txt(x1 - 4, y + 18, 'Fuera del límite', 11, RED, 600, 'end')
    return svg(p, 960, 230, 'Mora de Kredit frente al límite regulatorio',
               'Escala de 0 a 15 por ciento de cartera en mora. El límite regulatorio está en 10 por ciento y Kredit está hoy en ese mismo punto. La flecha verde indica el objetivo de bajar con margen de seguridad.', b)

# ---------- D2: cuellos de botella ----------
def d_cuellos():
    p = 'dc'
    b = ''
    L, X0, W, G, H = 20, 196, 170, 22, 58
    xs = [X0 + i * (W + G) for i in range(4)]

    def row(y, label, sub, steps, kind):
        nonlocal b
        col = RED if kind == 'hoy' else OK
        b += txt(L, y + 24, label, 12, col, 700, family=MONO, ls='0.06em')
        b += txt(L, y + 41, sub, 11, MUTED)
        for i, (t, s, hl) in enumerate(steps):
            if hl == 'bad':
                f, st = '#fef2f2', RED
            elif hl == 'good':
                f, st = '#ecfdf5', OK
            else:
                f, st = '#fff', 'rgba(15,23,42,.18)'
            b += card(xs[i], y, W, H, t, s, f, st, ts=12.5, ss=10.5)
            if i < 3:
                b += arrow(xs[i] + W + 2, y + H / 2, xs[i + 1] - 3, y + H / 2, p)

    b += txt(L, 32, 'PLANES DE PAGO', 11, SOFT, 500, family=MONO, ls='0.14em')
    row(46, 'HOY', 'cada caso sube', [
        ('Cliente pide plan', ('por teléfono o chat',), None),
        ('Cobrador arma la', ('propuesta a mano',), None),
        ('Gerente General', ('aprueba caso por caso',), 'bad'),
        ('Respuesta al cliente', ('horas o días después',), 'bad')], 'hoy')
    row(118, 'CON LA PLATAFORMA', 'solo excepciones suben', [
        ('Cliente pide plan', ('WhatsApp o llamada',), None),
        ('Motor de reglas', ('planes preaprobados',), 'good'),
        ('Agente IA lo ofrece', ('y registra la promesa',), 'good'),
        ('Gerencia revisa', ('solo lo fuera de regla',), None)], 'new')
    b += f'<line x1="{L}" y1="200" x2="940" y2="200" stroke="rgba(15,23,42,.12)"/>'
    b += txt(L, 228, 'CONCILIACIÓN DE PAGOS', 11, SOFT, 500, family=MONO, ls='0.14em')
    row(242, 'HOY', 'aviso por correo', [
        ('Cliente paga', ('banco, ACH o Yappy',), None),
        ('Aviso por correo', ('a una persona',), None),
        ('Registro manual', ('hasta 1 día de retraso',), 'bad'),
        ('Riesgo: se cobra', ('a quien ya pagó',), 'bad')], 'hoy')
    row(314, 'CON LA PLATAFORMA', 'en minutos', [
        ('Cliente paga', ('link de pago o banco',), None),
        ('Conciliación auto.', ('aviso o archivo del banco',), 'good'),
        ('SIF actualizado', ('saldo al día',), 'good'),
        ('Sale de la secuencia', ('y recibe su recibo',), None)], 'new')
    return svg(p, 960, 392, 'Los dos cuellos de botella de hoy y cómo quedan',
               'Comparación de dos procesos. Planes de pago: hoy el Gerente General aprueba cada caso y el cliente espera horas o días; con la plataforma, un motor de reglas preaprobadas permite que el agente ofrezca el plan y solo las excepciones suben a gerencia. Conciliación: hoy el pago se avisa por correo y se registra a mano con hasta un día de retraso, con riesgo de cobrar a quien ya pagó; con la plataforma se concilia automáticamente, se actualiza el SIF y la cuenta sale de la secuencia.', b)

# ---------- D3: arquitectura ----------
def d_arq():
    p = 'da'
    b = ''
    b += txt(20, 36, 'SISTEMAS DE KREDIT', 10, SOFT, 500, family=MONO, ls='0.12em')
    kre = [(96, 'SIF', ('sistema core', 'cartera y saldos')),
           (186, 'AgileCheck', ('score de riesgo', 'ya existente')),
           (276, 'Banco y pagos', ('ACH, Yappy,', 'link de pago'))]
    for y, t, s in kre:
        b += card(20, y, 170, 66, t, s, '#fff', 'rgba(15,23,42,.22)')
    # plataforma
    b += box(226, 56, 492, 316, '#eff6ff', BRAND, r=10, sw=1.5)
    b += txt(472, 82, 'PLATAFORMA DE COBRANZA · ELEMENTO WEB', 10.5, DEEP, 600, 'middle', MONO, '0.1em')
    mods = [('Conector de datos', ('lee SIF y AgileCheck',)),
            ('Segmentación', ('4 niveles de riesgo',)),
            ('Motor de reglas', ('planes y límites de contacto',)),
            ('Orquestador (n8n)', ('secuencias por etapa',)),
            ('Agente WhatsApp IA', ('consultas, pagos, planes',)),
            ('Agente de voz IA', ('llamadas en mora avanzada',)),
            ('Conciliación', ('pagos al instante',)),
            ('Bitácora auditable', ('cada contacto, exportable',))]
    for i, (t, s) in enumerate(mods):
        cx = 244 + (i % 2) * 232
        cy = 98 + (i // 2) * 66
        hl = t.startswith('Motor') or t.startswith('Concil')
        b += card(cx, cy, 216, 54, t, s, '#fff', VIOLET if hl else 'rgba(30,58,138,.25)', ts=12.5, ss=10.5)
    for y, _, _ in kre:
        b += arrow(192, y + 24, 224, y + 24, p)
    b += arrow(224, 96 + 46, 192, 96 + 46, p, VIOLET, '4 3', mk='v')
    # canales
    b += txt(756, 36, 'CANALES', 10, SOFT, 500, family=MONO, ls='0.12em')
    ch = [(56, 'WhatsApp', ('API oficial de Meta',)), (112, 'Email', ()),
          (168, 'SMS', ()), (224, 'Llamada de voz', ('número local',))]
    for y, t, s in ch:
        b += card(756, y, 184, 46, t, s, '#fff', 'rgba(15,23,42,.22)', ts=12.5, ss=10)
        b += arrow(720, y + 23, 754, y + 23, p)
    b += card(756, 300, 184, 64, 'Cliente en mora', ('responde, paga o', 'pide un plan'), NAVY, NAVY, '#fff', '#cbd5e1')
    b += arrow(848, 272, 848, 298, p)
    # abajo
    b += card(244, 400, 216, 56, 'Dashboard gerencial', ('mora, recuperación, cumplimiento',), '#fff', 'rgba(15,23,42,.22)', ts=12.5, ss=10.5)
    b += card(476, 400, 216, 56, 'Bandeja de cobradores', ('disputas y casos de riesgo',), '#fff5f5', RED, ts=12.5, ss=10.5)
    b += arrow(352, 374, 352, 398, p)
    b += arrow(584, 374, 584, 398, p, RED, mk='r')
    b += f'<line x1="20" y1="424" x2="44" y2="424" stroke="{VIOLET}" stroke-width="1.4" stroke-dasharray="4 3"/>'
    b += txt(52, 428, 'Escritura de vuelta:', 11, VIOLET, 600)
    b += txt(20, 446, 'pagos, promesas y gestiones', 11, MUTED)
    b += txt(20, 462, 'quedan registrados en el SIF', 11, MUTED)
    b += path('M190 300 L208 300', p, VIOLET, '4 3', mk='v') if False else ''
    return svg(p, 960, 476, 'Arquitectura de la plataforma de cobranza',
               'A la izquierda, los sistemas de Kredit: SIF, AgileCheck y banco o pagos, que alimentan la plataforma. En el centro, la plataforma de Elemento Web con ocho módulos: conector de datos, segmentación, motor de reglas, orquestador n8n, agente de WhatsApp, agente de voz, conciliación y bitácora auditable. A la derecha, los canales WhatsApp, email, SMS y llamada que llegan al cliente en mora. Abajo, el dashboard gerencial y la bandeja de cobradores para disputas y casos de riesgo.', b)

# ---------- D4: secuencia ----------
def d_sec():
    p = 'ds'
    b = ''
    W, G, X0 = 214, 18, 20
    st = [('DÍA 0', 'Recordatorio amable', ['WhatsApp + link de pago'], 'Tono cordial', '#eff6ff', BRAND),
          ('DÍA 3 A 5', 'Segundo aviso', ['WhatsApp + email', 'SMS si no lee'], 'Tono claro', '#eff6ff', BRAND),
          ('DÍA 10 A 15', 'Gestión firme', ['Llamada con IA', 'oferta de plan preaprobado'], 'Tono firme y respetuoso', '#f5f3ff', VIOLET),
          ('DÍA 20 EN ADELANTE', 'Escalamiento', ['Cobrador humano', 'o vía legal'], 'Decisión de Kredit', '#fff7ed', AMBER)]
    b += f'<line x1="30" y1="52" x2="930" y2="52" stroke="{SOFT}" stroke-width="1.2"/>'
    for i, (d, t, chs, tone, f, c) in enumerate(st):
        x = X0 + i * (W + G)
        b += f'<circle cx="{x+W/2}" cy="52" r="7" fill="{c}"/>'
        b += txt(x + W / 2, 32, d, 11, c, 600, 'middle', MONO, '0.1em')
        b += box(x, 74, W, 150, f, c, sw=1.2)
        b += txt(x + 16, 102, t, 15, INK, 700, family=DISP)
        b += lines(x + 16, 128, chs, 12.5, INK, 500, lh=18)
        b += f'<line x1="{x+16}" y1="178" x2="{x+W-16}" y2="178" stroke="rgba(15,23,42,.12)"/>'
        b += txt(x + 16, 200, tone, 11.5, MUTED)
        if i < 3:
            b += arrow(x + W + 2, 149, x + W + G - 2, 149, p)
    b += box(20, 246, 920, 38, '#ecfdf5', OK, r=6)
    b += txt(36, 270, 'Si paga en cualquier etapa: la cuenta sale de la secuencia de inmediato y recibe su comprobante.', 12.5, OK, 600)
    b += box(20, 294, 920, 38, '#fef2f2', RED, r=6)
    b += txt(36, 318, 'Si dice «ya pagué», «no es mío», pide no ser contactado o menciona un abogado: se detiene todo y pasa a una persona.', 12.5, RED, 600)
    b += txt(20, 360, 'Los días, canales y tonos son el punto de partida; se ajustan por nivel de riesgo y con los resultados de las primeras semanas.', 11.5, MUTED)
    return svg(p, 960, 376, 'Secuencia de cobranza por días de mora',
               'Línea de tiempo en cuatro etapas: día 0 recordatorio amable por WhatsApp con link de pago; días 3 a 5 segundo aviso por WhatsApp y email, SMS si no lee; días 10 a 15 gestión firme con llamada de IA y oferta de plan preaprobado; día 20 en adelante escalamiento a cobrador humano o vía legal. Si paga en cualquier etapa sale de la secuencia; ante disputa o pedido de no contacto se detiene todo y pasa a una persona.', b)

# ---------- D5: cronograma ----------
def d_gantt():
    p = 'dg'
    b = ''
    LX, X0, X1, Y0, RH = 20, 250, 940, 70, 56
    wk = (X1 - X0) / 14
    for w in range(14):
        b += txt(X0 + wk * (w + .5), 52, f'S{w+1}', 9.5, SOFT, 500, 'middle', MONO, '0.08em')
        b += f'<line x1="{X0+wk*w}" y1="60" x2="{X0+wk*w}" y2="{Y0+5*RH+6}" stroke="rgba(15,23,42,.07)"/>'
    b += f'<line x1="{X1}" y1="60" x2="{X1}" y2="{Y0+5*RH+6}" stroke="rgba(15,23,42,.07)"/>'
    ph = [('1 · Descubrimiento y bases', 'reglas, conciliación, datos', 0, 1.5, 0, VIOLET),
          ('2 · Segmentación y secuencia', 'WhatsApp, email y SMS', 1.5, 3.5, 0, BRAND),
          ('3 · Agente de WhatsApp', 'consultas, pagos y planes', 3.5, 5.5, 0, BRAND),
          ('4 · Agente de voz', 'llamadas con guardrails', 5, 7, 0, BRAND),
          ('5 · Dashboard y ajuste', 'panel en vivo y afinado', 7, 8, 0, OK)]
    # escenario conservador desplazado
    cons = [(0, 3), (3, 6), (6, 9), (9, 13), (12, 14)]
    for i, (t, s, a, e, _, c) in enumerate(ph):
        y = Y0 + i * RH
        b += txt(LX, y + 20, t, 12.5, INK, 600)
        b += txt(LX, y + 36, s, 11, MUTED)
        ca, ce = cons[i]
        b += f'<rect x="{X0+wk*ca}" y="{y+8}" width="{wk*(ce-ca)}" height="30" rx="5" fill="{c}" fill-opacity=".14" stroke="{c}" stroke-opacity=".5" stroke-dasharray="4 3"/>'
        b += f'<rect x="{X0+wk*a}" y="{y+12}" width="{wk*(e-a)}" height="22" rx="4" fill="{c}"/>'
    # hitos
    def hito(wk_at, row, label):
        nonlocal b
        x = X0 + wk * wk_at
        y = Y0 + row * RH + 23
        b += f'<path d="M{x} {y-9} L{x+9} {y} L{x} {y+9} L{x-9} {y} Z" fill="{NAVY}" stroke="#fff" stroke-width="1.5"/>'
    hito(1.5, 0, '')
    hito(3.5, 1, '')
    hito(7, 3, '')
    yb = Y0 + 5 * RH + 26
    b += txt(LX, yb, 'Requisito: la fase 4 (voz) se activa solo con las reglas y la conciliación de la fase 1 funcionando.', 11.5, VIOLET, 600)
    b += f'<rect x="{LX}" y="{yb+16}" width="22" height="12" rx="3" fill="{BRAND}"/>'
    b += txt(LX + 30, yb + 26, 'Escenario ágil: 8 semanas', 11, MUTED)
    b += f'<rect x="{LX+250}" y="{yb+16}" width="22" height="12" rx="3" fill="{BRAND}" fill-opacity=".14" stroke="{BRAND}" stroke-opacity=".5" stroke-dasharray="4 3"/>'
    b += txt(LX + 280, yb + 26, 'Escenario conservador: hasta 14 semanas', 11, MUTED)
    b += f'<path d="M{LX+560} {yb+22-7} L{LX+567} {yb+22} L{LX+560} {yb+22+7} L{LX+553} {yb+22} Z" fill="{NAVY}"/>'
    b += txt(LX + 576, yb + 26, 'Hito: reglas listas · primer mensaje · primera llamada', 11, MUTED)
    return svg(p, 960, Y0 + 5 * RH + 66, 'Cronograma por fases en semanas',
               'Gantt de 14 semanas con cinco fases. Escenario ágil: descubrimiento y bases en la semana y media inicial; segmentación y secuencia hasta la semana 4; agente de WhatsApp hasta la 6; agente de voz de la 6 a la 7; dashboard y ajuste en la 8. El escenario conservador, punteado, llega a 14 semanas. La fase de voz depende de que las reglas y la conciliación de la fase 1 estén funcionando.', b)


def fig(s, cap):
    return f'<div class="figure scroll-x">{s}</div>\n  <p class="caption">{cap}</p>'

PH = lambda s='por definir': f'<span class="ph">{s}</span>'

html = f'''<!doctype html>
<html lang="es"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><meta name="robots" content="noindex, nofollow"><title>Cobranza con IA · Propuesta para Kredit — elementoweb.com</title>
{head_links}
<style>{css}</style></head>
<body>

<header class="hero"><div class="wrap">
  <div class="brandrow"><div class="wordmark"><i aria-hidden="true"></i>Elemento Web</div><div class="doctype">Propuesta · Cobranza con IA</div></div>
  <h1>Bajar la mora del límite, sin sumar personal</h1>
  <p class="sub">Una plataforma de cobranza con inteligencia artificial que contacta a cada cliente en el momento correcto, ofrece planes de pago dentro de sus reglas, concilia los pagos al instante y deja registro de cada contacto, listo para cualquier revisión de su ente regulador.</p>
  <dl class="facts">
    <div><dt>Preparada para</dt><dd>Kredit · Gerencia General</dd></div>
    <div><dt>Fecha</dt><dd>7 de octubre de 2026</dd></div>
    <div><dt>Válida hasta</dt><dd>6 de noviembre de 2026</dd></div>
    <div><dt>Referencia</dt><dd>{REF}</dd></div>
  </dl>
</div></header>
<main class="wrap">

<section>
  <p class="eyebrow">Resumen ejecutivo</p>
  <h2>Recuperar más, con menos horas y con cada contacto registrado</h2>
  <p class="lede">Proponemos poner en marcha, en 8 a 14 semanas, una operación de cobranza automatizada sobre su cartera actual. La plataforma trabaja en tres capas: <b>segmenta</b> cada cuenta por riesgo con los datos del SIF y de AgileCheck, <b>contacta</b> de forma automática por WhatsApp, email y SMS según los días de mora, y <b>llama</b> con un agente de voz con IA a las cuentas en mora avanzada.</p>
  <p class="prose">Antes de encender la IA resolvemos los dos frenos de hoy: los planes de pago que aprueba la Gerencia General uno por uno y la conciliación de pagos por correo. Sin eso, el sistema contactaría más rápido, pero cada caso seguiría esperando una aprobación o un registro manual.</p>
  <div class="stats">
    <div class="c"><b>10%</b><span>Mora actual, igual al límite</span></div>
    <div><b>3</b><span>Capas: segmentar, contactar, llamar</span></div>
    <div><b>8–14</b><span>Semanas hasta operar completo</span></div>
    <div><b>100%</b><span>De los contactos con registro auditable</span></div>
  </div>
</section>

<section class="newpage">
  <p class="eyebrow">Diagnóstico</p>
  <h2>La mora ya está en el límite que permite la regulación</h2>
  <p class="prose">Según nos indicaron, la cartera en mora de Kredit está en el 10%, que es el tope regulatorio que les aplica. Eso cambia la naturaleza del proyecto: no se trata solo de cobrar mejor, sino de <b>salir de la zona de riesgo regulatorio</b> y mantener un margen de seguridad. Cualquier deterioro adicional de la cartera los pondría por encima del límite.</p>
  {fig(d_mora(), 'El valor de 10% y el límite aplicable se confirman con el oficial de cumplimiento de Kredit en la fase 1, junto con la meta de mora que fijaremos como objetivo del proyecto.')}
  <div class="alert"><b>Por qué importa ahora.</b> Un cliente que entra en mora temprana y no recibe contacto en los primeros días tiene mucha más probabilidad de pasar a mora avanzada. Hoy el primer contacto depende de que una persona tenga tiempo; con la plataforma ocurre el mismo día, en todas las cuentas.</div>

  <h2 style="margin-top:44px">Dos frenos que hay que quitar primero</h2>
  <p class="prose">En la reunión identificamos dos cuellos de botella que hoy limitan cualquier esfuerzo de cobranza, con o sin IA. Por eso la fase 1 los resuelve antes de activar el agente de voz.</p>
  {fig(d_cuellos(), 'Cobrar a un cliente que ya pagó, porque el pago todavía no se registró, es una de las causas más comunes de reclamos. La conciliación automática elimina ese riesgo.')}
</section>

<section>
  <p class="eyebrow">Tecnología disponible hoy</p>
  <h2>Un agente de voz que llama, negocia dentro de reglas y deja todo grabado</h2>
  <p class="prose">Hoy existen agentes de voz con IA que hacen llamadas de cobranza con voz natural en español. Se identifican como sistema automatizado, recuerdan el saldo, ofrecen planes de pago preaprobados y transfieren a una persona cuando detectan una disputa o un caso delicado. No reemplazan a su equipo: le quitan las llamadas repetitivas para que se concentre en los casos que de verdad necesitan criterio humano.</p>
  <div class="cols3">
    <div class="opt"><p class="k">Escala</p><h3>Cientos de llamadas al día</h3><p>Cada cuenta en la etapa correspondiente recibe su llamada a tiempo, dentro del horario permitido, sin depender de la disponibilidad del equipo.</p></div>
    <div class="opt"><p class="k">Consistencia</p><h3>El mismo guion, siempre</h3><p>Ninguna llamada sale del tono aprobado ni ofrece algo fuera de las reglas. Cada conversación queda grabada y transcrita.</p></div>
    <div class="opt"><p class="k">Control</p><h3>Una persona decide lo delicado</h3><p>Disputas, menciones legales o clientes vulnerables pasan de inmediato a un cobrador, con el resumen de la conversación.</p></div>
  </div>
</section>

<section>
  <p class="eyebrow">La solución</p>
  <h2>Una plataforma propia, conectada a sus sistemas</h2>
  <p class="prose">Es una plataforma de Elemento Web que operamos como servicio: Kredit no compra servidores ni licencias sueltas ni mantiene integraciones. Se conecta al SIF y a AgileCheck, usa sus canales oficiales y escribe de vuelta en el SIF los pagos, promesas y gestiones.</p>
  {fig(d_arq(), 'En violeta, los dos módulos que resuelven los frenos actuales: el motor de reglas, que sustituye la aprobación caso por caso, y la conciliación automática. La forma de conexión con el SIF (API, base de datos de solo lectura o archivo diario) se define en la fase 1 con su equipo de sistemas.')}
  <ul class="checks">
    <li><b>Conector de datos</b><span>Lee del SIF saldos, cuotas, días de mora e historial de pago, y de AgileCheck el score de cada cliente. Escribe de vuelta pagos, promesas y gestiones.</span></li>
    <li><b>Motor de reglas</b><span>La Gerencia General define una vez qué planes se pueden ofrecer, a quién y con qué condiciones. Lo que entra en la regla se ofrece al instante; solo las excepciones le llegan a aprobar.</span></li>
    <li><b>Conciliación de pagos</b><span>Recibe los pagos por link de pago o por el aviso o archivo del banco, los cruza con la cuenta y saca al cliente de la secuencia en minutos, no al día siguiente.</span></li>
    <li><b>Bandeja de cobradores</b><span>Las disputas, los casos de riesgo y las excepciones llegan a su equipo con el historial completo de la cuenta y de cada contacto.</span></li>
  </ul>
</section>

<section>
  <p class="eyebrow">Demo navegable</p>
  <h2>Véalo funcionando antes de decidir</h2>
  <p class="prose">Preparamos una maqueta navegable de la plataforma con datos ficticios de una cartera como la suya. Puede recorrerla por su cuenta: definir una regla y ver cuántos planes se aprobarían solos, simular un pago entrante, reproducir una conversación de WhatsApp y una llamada, y exportar la bitácora.</p>
  <div class="demo-block">
  <div class="shots">
    <figure><img src="demo-resumen.webp" width="2160" height="1350" alt="Pantalla de resumen gerencial del demo: mora sobre cartera en 10% frente al límite, simulador de escenario e indicadores del mes" loading="lazy"><figcaption><b>Resumen gerencial.</b> La mora frente al límite y un simulador de escenarios, con cifras de ejemplo.</figcaption></figure>
    <figure><img src="demo-reglas.webp" width="2160" height="1350" alt="Pantalla de reglas del demo: con la regla recomendada, 117 de 120 planes se aprueban solos y 3 llegan a la Gerencia General" loading="lazy"><figcaption><b>Reglas de planes.</b> Con la regla de ejemplo, 117 de 120 planes se aprueban solos y a usted le llegan 3.</figcaption></figure>
  </div>
  <div class="demo-cta"><a class="btn" href="https://elementoweb.com/demo/kredit/">Abrir el demo</a><span>elementoweb.com/demo/kredit · datos ficticios, nada se envía a clientes reales</span></div>
  </div>
</section>

<section>
  <p class="eyebrow">Capa 1 · Segmentación</p>
  <h2>Cada cuenta recibe la intensidad que le corresponde</h2>
  <p class="prose">Aprovechamos el score de AgileCheck que ya usan, en vez de construir otro, y lo combinamos con el comportamiento de pago de cada cliente. Así el esfuerzo se concentra donde más se recupera.</p>
  <div class="tbl"><table>
    <thead><tr><th>Criterio</th><th>Fuente</th><th>Uso en la segmentación</th></tr></thead>
    <tbody>
      <tr><td><b>Días de mora</b></td><td>SIF</td><td>Define en qué etapa de la secuencia entra la cuenta.</td></tr>
      <tr><td><b>Monto adeudado</b></td><td>SIF</td><td>Prioriza el esfuerzo hacia los montos altos.</td></tr>
      <tr><td><b>Score de riesgo</b></td><td>AgileCheck</td><td>Ajusta la probabilidad de pago estimada.</td></tr>
      <tr><td><b>Historial de pagos y promesas</b></td><td>SIF y plataforma</td><td>Distingue al cliente que se atrasa por descuido del que no tiene intención de pagar.</td></tr>
      <tr><td><b>Canal que responde</b></td><td>Plataforma</td><td>Prioriza el canal en el que ese cliente suele contestar.</td></tr>
      <tr><td><b>Disputas o reclamos abiertos</b></td><td>SIF o atención al cliente</td><td>Saca la cuenta de la automatización y la asigna a una persona.</td></tr>
    </tbody>
  </table></div>
  <div class="tbl"><table>
    <thead><tr><th>Nivel</th><th>Perfil</th><th>Tratamiento</th></tr></thead>
    <tbody>
      <tr><td><span class="sev bajo">A · Bajo</span></td><td>Buen historial, atraso corto</td><td>Recordatorios amables por WhatsApp; sin llamadas.</td></tr>
      <tr><td><span class="sev medio">B · Medio</span></td><td>Atrasos ocasionales</td><td>Secuencia completa por mensajes; llamada con IA desde el día 10.</td></tr>
      <tr><td><span class="sev alto">C · Alto</span></td><td>Atrasos repetidos o score bajo</td><td>Llamada con IA más temprana y oferta de plan preaprobado.</td></tr>
      <tr><td><span class="sev crit">D · Crítico</span></td><td>Monto alto, mora avanzada o promesas incumplidas</td><td>Cobrador humano desde el inicio, con apoyo de la plataforma.</td></tr>
    </tbody>
  </table></div>
  <p class="caption">Cuatro niveles como punto de partida, con reglas simples y explicables. Los cortes se calibran con su cartera real en la fase 2.</p>
</section>

<section>
  <p class="eyebrow">Capa 2 · Secuencia multicanal</p>
  <h2>El contacto correcto, el día correcto, por el canal correcto</h2>
  <p class="prose">Cada cuenta avanza por una secuencia según sus días de mora. Todo ocurre de forma automática, dentro del horario y de los límites de contacto permitidos.</p>
  {fig(d_sec(), 'Los mensajes de WhatsApp salen por la API oficial de Meta, con plantillas aprobadas y con la marca de Kredit verificada. Así se evita el bloqueo del número y se cumple la política de mensajes de la plataforma.')}
</section>

<section>
  <p class="eyebrow">Capa 3 · Agentes con IA</p>
  <h2>Dos agentes que atienden, ofrecen y escalan</h2>
  <div class="two">
    <div class="opt"><p class="k">WhatsApp, desde el día 0</p><h3>Agente conversacional</h3>
      <ul>
        <li>Responde saldo, fecha de vencimiento e historial con datos reales del SIF. No inventa montos.</li>
        <li>Envía el link de pago y confirma cuando el pago entra.</li>
        <li>Ofrece planes dentro de las reglas preaprobadas y registra la promesa de pago.</li>
        <li>Detecta «ya pagué», «no es mío» o «quiero hablar con un abogado» y pasa el caso a una persona, deteniendo los mensajes.</li>
      </ul></div>
    <div class="opt"><p class="k">Voz, desde el día 10–15</p><h3>Agente de llamadas</h3>
      <ul>
        <li>Llama desde un número local y se identifica como sistema automatizado de Kredit.</li>
        <li>Verifica la identidad antes de hablar de la deuda.</li>
        <li>Negocia solo dentro de las reglas y confirma el acuerdo por WhatsApp.</li>
        <li>Graba y transcribe cada llamada, y transfiere a un cobrador ante disputa o riesgo.</li>
      </ul></div>
  </div>
  <div class="tbl"><table>
    <thead><tr><th>Plataforma de voz</th><th>Fortaleza</th><th class="n">Costo de referencia</th></tr></thead>
    <tbody>
      <tr><td><b>Retell AI</b></td><td>Casos de cobranza ya probados e integración con sistemas de préstamos.</td><td class="n">US$0.07–0.31 / min</td></tr>
      <tr><td><b>Vapi</b></td><td>Más flexible para integrar reglas de cumplimiento propias.</td><td class="n">US$0.05 / min + telefonía y voz</td></tr>
      <tr><td><b>Bland AI</b></td><td>Modelo de voz propio y baja latencia.</td><td class="n">Variable</td></tr>
    </tbody>
  </table></div>
  <p class="caption">Elegimos la plataforma en la fase 1 con pruebas de voz en español de Panamá. El orquestador no depende de un solo proveedor: si uno sube de precio o baja de calidad, se cambia sin rehacer el sistema.</p>
</section>

<section>
  <p class="eyebrow">Cumplimiento y gobernanza</p>
  <h2>Diseñado para resistir una auditoría</h2>
  <p class="prose">En una entidad regulada, lo que importa no es solo cuánto se cobra, sino cómo. Cada regla se configura dentro de los límites que exigen su ente regulador y la normativa de protección al consumidor, y queda documentada.</p>
  <ul class="checks">
    <li><b>Límites de contacto</b><span>Máximo de intentos por cuenta, por día y por semana, y horario permitido. El sistema no puede pasarse aunque alguien lo intente.</span></li>
    <li><b>Identificación</b><span>El agente, por voz o por WhatsApp, se identifica siempre como sistema automatizado de Kredit al inicio.</span></li>
    <li><b>Pausa y escalamiento</b><span>Ante una disputa, un reclamo, una mención legal o un pedido de no contacto, se detiene la automatización y el caso pasa a una persona.</span></li>
    <li><b>Terceros</b><span>Nunca se habla de la deuda con alguien distinto al titular. La identidad se verifica antes de dar cualquier dato.</span></li>
    <li><b>Bitácora auditable</b><span>Fecha, hora, canal, contenido, grabación y resultado de cada contacto. Se exporta para una auditoría o para responder un reclamo.</span></li>
    <li><b>Datos personales</b><span>Tratamiento conforme a la Ley 81 de 2019 de protección de datos personales: acceso por roles, cifrado y datos que no se usan para entrenar modelos de IA.</span></li>
    <li><b>Aprobación de guiones</b><span>Todos los mensajes y guiones de llamada los aprueba Kredit antes de salir, y cualquier cambio queda versionado.</span></li>
  </ul>
  <div class="note">Los límites exactos de frecuencia, horario y contenido se confirman con su oficial de cumplimiento en la fase 1, antes de enviar el primer mensaje.</div>
</section>

<section>
  <p class="eyebrow">Dashboard</p>
  <h2>La cobranza en tiempo real, en una sola pantalla</h2>
  <p class="prose">La Gerencia General ve en todo momento cuánto se recupera, por qué canal y si se cumplen los límites. Medimos la situación inicial en la fase 1 para que el resultado se pueda comparar con datos y no con impresiones.</p>
  <div class="tbl"><table>
    <thead><tr><th>Métrica</th><th>Qué responde</th></tr></thead>
    <tbody>
      <tr><td><b>Mora sobre cartera total</b></td><td>¿Cuánto margen tenemos frente al límite regulatorio?</td></tr>
      <tr><td><b>Recuperación por etapa y canal</b></td><td>¿Qué mensaje, canal o llamada está funcionando?</td></tr>
      <tr><td><b>Monto recuperado frente a mora</b></td><td>¿Cuánto dinero devolvió el sistema este mes?</td></tr>
      <tr><td><b>Promesas de pago cumplidas</b></td><td>¿Los acuerdos que se cierran se pagan de verdad?</td></tr>
      <tr><td><b>Paso de mora temprana a avanzada</b></td><td>¿Estamos frenando el deterioro de la cartera?</td></tr>
      <tr><td><b>Casos resueltos sin intervención humana</b></td><td>¿Cuántas horas del equipo liberamos?</td></tr>
      <tr><td><b>Tiempo hasta el primer contacto</b></td><td>¿Qué tan rápido actuamos sobre una cuenta nueva en mora?</td></tr>
      <tr><td><b>Casos escalados y motivo</b></td><td>¿Cuántas disputas y casos de riesgo hay, y por qué?</td></tr>
      <tr><td><b>Cumplimiento de límites</b></td><td>¿Alguna cuenta recibió más contactos de los permitidos? Debe ser siempre cero.</td></tr>
    </tbody>
  </table></div>
  <div class="note">Para medir el efecto real, durante las primeras semanas dejamos un grupo pequeño de cuentas con el proceso actual y lo comparamos con las gestionadas por la plataforma.</div>
</section>

<section class="newpage">
  <p class="eyebrow">Fases y cronograma</p>
  <h2>De 8 a 14 semanas, empezando por quitar los frenos</h2>
  {fig(d_gantt(), 'El plazo depende sobre todo de qué tan rápido tengamos acceso a los datos del SIF y de la aprobación de las reglas y guiones por parte de Kredit.')}
  <div class="tbl"><table>
    <thead><tr><th>Fase</th><th>Duración</th><th>Entregables</th><th>Criterio de salida</th></tr></thead>
    <tbody>
      <tr><td><b>1 · Descubrimiento y bases</b></td><td>1–3 sem.</td><td>Acceso a datos del SIF y AgileCheck; reglas de planes preaprobados con la Gerencia General; conciliación automática de pagos; límites de cumplimiento confirmados; medición inicial.</td><td>Un pago se concilia solo y un plan dentro de regla se aprueba sin intervención</td></tr>
      <tr><td><b>2 · Segmentación y secuencia</b></td><td>2–3 sem.</td><td>Niveles de riesgo calibrados; secuencia por WhatsApp, email y SMS en n8n; plantillas aprobadas por Meta; bitácora activa.</td><td>Cuentas reales reciben su secuencia y salen al pagar</td></tr>
      <tr><td><b>3 · Agente de WhatsApp</b></td><td>2–3 sem.</td><td>Agente en producción con consultas de saldo, links de pago, planes preaprobados y escalamiento a la bandeja.</td><td>Resuelve consultas simples sin persona y escala bien las disputas</td></tr>
      <tr><td><b>4 · Agente de voz</b></td><td>2–4 sem.</td><td>Plataforma de voz elegida, número local, guiones aprobados, grabación y transcripción; salida gradual por volumen.</td><td>Llamadas activas en mora avanzada sin incumplir ningún límite</td></tr>
      <tr><td><b>5 · Dashboard y ajuste</b></td><td>1–2 sem.</td><td>Panel en vivo, comparación con la medición inicial, ajuste de reglas, mensajes y horarios.</td><td>La Gerencia General sigue la cobranza desde el panel</td></tr>
    </tbody>
  </table></div>
</section>

<section>
  <p class="eyebrow">Inversión</p>
  <h2>Implementación única y servicio mensual</h2>
  <p class="prose">La plataforma se cobra como servicio: una implementación inicial para conectarla a sus sistemas y a sus reglas, y una mensualidad que cubre la operación, el soporte y las mejoras continuas. El consumo de terceros se factura a costo, sin margen.</p>
  <div class="pkgs">
    <div class="pkg"><p class="tag">Pago único</p><h3>Implementación</h3><p class="for">Fases 1 a 5, de 8 a 14 semanas.</p><div class="price">{PH('US$ por definir')}<small>Sin ITBMS</small></div>
      <ul><li>Integración con SIF y AgileCheck</li><li>Motor de reglas y conciliación</li><li>Secuencia multicanal y agentes de IA</li><li>Dashboard, capacitación y puesta en marcha</li></ul></div>
    <div class="pkg rec"><span class="badge">Recomendado</span><p class="tag">Mensual</p><h3>Plataforma de cobranza</h3><p class="for">Operación continua desde la puesta en marcha.</p><div class="price">{PH('US$ por definir')}<small>Por mes, sin ITBMS</small></div>
      <ul><li>Alojamiento, seguridad y respaldos</li><li>Hasta {PH('___')} cuentas gestionadas al mes</li><li>Soporte y ajustes de reglas y guiones</li><li>Mejoras continuas de la plataforma</li><li>Informe mensual de resultados</li></ul></div>
    <div class="pkg"><p class="tag">Según uso</p><h3>Consumo de terceros</h3><p class="for">Facturado a costo, con el detalle del proveedor.</p><div class="price" style="font-size:24px">A costo<small>Sin margen de Elemento Web</small></div>
      <ul><li>Minutos del agente de voz y telefonía</li><li>Conversaciones de WhatsApp (tarifa de Meta)</li><li>SMS y correo transaccional</li><li>Uso de modelos de IA</li></ul></div>
  </div>
  <p class="caption">Precio por definir: Kredit no tiene un presupuesto asignado para este proyecto. Lo fijamos con usted tras confirmar el tamaño de la cartera y el volumen de cuentas en mora.</p>
</section>

<section>
  <p class="eyebrow">Riesgos del plan</p>
  <h2>Lo que puede complicarlo y cómo lo evitamos</h2>
  <div class="tbl"><table>
    <thead><tr><th>Riesgo</th><th>Mitigación</th></tr></thead>
    <tbody>
      <tr><td>El SIF no tiene una API o el acceso a los datos se demora</td><td>Plan B con base de datos de solo lectura o archivo diario; el plazo cuenta desde que tenemos acceso.</td></tr>
      <tr><td>Las reglas de planes de pago no se definen y todo vuelve a la Gerencia General</td><td>Taller con la Gerencia General en la fase 1. El agente de voz no sale hasta tener las reglas.</td></tr>
      <tr><td>Un mensaje o llamada fuera de tono afecta la marca o genera un reclamo</td><td>Guiones aprobados por Kredit, límites que no se pueden saltar, salida gradual y revisión de muestras grabadas.</td></tr>
      <tr><td>Bloqueo del número de WhatsApp</td><td>API oficial de Meta, plantillas aprobadas y opción de baja en cada mensaje.</td></tr>
      <tr><td>Costo de voz por encima de lo previsto</td><td>Llamadas solo a los niveles de riesgo que lo justifican, tope mensual de minutos y reporte de consumo.</td></tr>
    </tbody>
  </table></div>
</section>

<section>
  <p class="eyebrow">Para avanzar</p>
  <h2>Lo que necesitamos de Kredit</h2>
  <ul class="checks">
    <li><b>Acceso a datos</b><span>Contacto en sistemas y forma de conexión con el SIF (API, base de solo lectura o archivo diario) y con AgileCheck.</span></li>
    <li><b>Cartera</b><span>Número de cuentas activas y en mora por tramo de días, y monto total, para dimensionar el servicio y fijar el precio.</span></li>
    <li><b>Reglas de planes</b><span>Una sesión de una hora con la Gerencia General para definir los planes de pago preaprobados.</span></li>
    <li><b>Pagos</b><span>Bancos y medios de pago que usan sus clientes, y cómo les llega hoy el aviso de cada pago.</span></li>
    <li><b>Cumplimiento</b><span>Su oficial de cumplimiento, para confirmar límites de contacto, horarios y textos obligatorios.</span></li>
    <li><b>Canales</b><span>Número de WhatsApp Business y dominio de correo de Kredit, y la verificación de la empresa en Meta.</span></li>
  </ul>
</section>

<section>
  <p class="eyebrow">Condiciones</p>
  <h2>Condiciones comerciales</h2>
  <div class="terms">
    <p><b>Pago de la implementación.</b> {PH()} al firmar y el resto contra entrega de cada fase. Transferencia, ACH o Yappy.</p>
    <p><b>Mensualidad.</b> Empieza con la puesta en marcha de la fase 2. Plazo mínimo de {PH('__ meses')}.</p>
    <p><b>Datos.</b> Los datos de cartera, clientes y contactos son de Kredit. Se exportan completos cuando lo pida y se eliminan al terminar el servicio.</p>
    <p><b>Plataforma.</b> El software de la plataforma es de Elemento Web y se presta como servicio.</p>
    <p><b>Confidencialidad.</b> Acuerdo de confidencialidad y de tratamiento de datos firmado antes de recibir cualquier dato. Los datos no se usan para entrenar modelos de IA.</p>
    <p><b>Disponibilidad y soporte.</b> Soporte en horario laboral, atención prioritaria a incidentes que detengan la cobranza y respaldos diarios.</p>
    <p><b>Alcance.</b> El descrito en esta propuesta. Los cambios de alcance se cotizan aparte.</p>
    <p><b>Validez.</b> Esta propuesta vale hasta el 6 de noviembre de 2026. Precios en USD sin ITBMS (7%).</p>
  </div>
</section>

<div class="cta">
  <div><h2>¿Empezamos por quitar los frenos?</h2><p>Al aceptar, agendamos el taller de reglas con la Gerencia General y la sesión con sistemas para conectar el SIF. En dos semanas los pagos se concilian solos.</p></div>
  <div class="btns"><a class="btn" href="mailto:info@elementoweb.com?subject=Propuesta%20{REF}%3A%20cobranza%20con%20IA&body=Hola%2C%20queremos%20avanzar%20con%20la%20propuesta%20{REF}%20de%20cobranza%20con%20IA%20de%20Elemento%20Web.">Avanzar por correo</a><a class="btn alt" href="https://elementoweb.com/demo/kredit/">Ver el demo</a><a class="btn alt" href="https://wa.me/50761622787?text=Hola%2C%20quiero%20conversar%20sobre%20la%20propuesta%20{REF}%20de%20cobranza%20con%20IA.">Conversar por WhatsApp</a></div>
</div>
</main>

<footer><div class="wrap">
  <div class="src"><b>Fuentes y supuestos.</b> La mora de 10% y el límite regulatorio aplicable son datos indicados por Kredit, a confirmar con su oficial de cumplimiento. Los costos de referencia de Retell AI, Vapi y Bland AI provienen de las tarifas publicadas por cada proveedor y pueden cambiar; se confirman al elegir la plataforma en la fase 1. Los mensajes de WhatsApp siguen las políticas y tarifas de Meta para la API de WhatsApp Business. Los plazos son estimaciones de Elemento Web y dependen del acceso a los datos y de las aprobaciones de Kredit.</div>
  <div class="legalrow"><span>elementoweb.com · info@elementoweb.com · +507 6162-2787</span><span>Documento confidencial · Preparado para Kredit · {REF}</span></div>
</div></footer>
</body></html>
'''

OUT.parent.mkdir(parents=True, exist_ok=True)
OUT.write_text(html)
print('ok', OUT, len(html))
