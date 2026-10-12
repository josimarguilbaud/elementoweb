#!/usr/bin/env python3
"""Propuesta de cobranza con IA para Kredit (EW-KRE-2026-01), con el diseño de la casa (casa.py).
La cobranza no usa WhatsApp: la Política de Mensajería de WhatsApp Business prohíbe la cobranza
de deudas aunque la empresa tenga licencia (sección 4, actualizada el 23-sep-2026).
Uso: python scripts/propuestas-kredit/gen_kredit.py"""
import pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from casa import *  # noqa: F401,F403
from casa import esc

OUT_DIR = ROOT / 'public/propuestas/kredit-cobranza-ia-19bfe5dc'
REF = 'EW-KRE-2026-01'
DEMO = 'https://elementoweb.com/demo/kredit/'


# =====================================================================================
# Diagramas (skill diagram-design, tokens de la casa)
# =====================================================================================

def d_mora():
    """Escala 0–15%: la mora de Kredit frente al límite regulatorio."""
    p, W, H = 'dm', 800, 220
    x0, x1, y = 40, 760, 100
    sc = lambda v: x0 + (x1 - x0) * v / 15
    X = sc(10)
    tgt = sc(7.5)
    b = eyebrow(x0, 30, 'Cartera en mora sobre cartera total')
    b += rect(x0, y, sc(10) - x0, 24, BLUE_T, '#bfdbfe', r=4)
    b += rect(sc(10), y, x1 - sc(10), 24, RED_T, '#fecaca', r=4)
    for v in range(16):
        Xv = sc(v)
        b += f'<line x1="{Xv:g}" y1="{y + 24}" x2="{Xv:g}" y2="{y + (36 if v % 5 == 0 else 30)}" stroke="{SOFT}" stroke-width="0.8"/>'
        if v % 5 == 0:
            b += t(Xv, y + 52, f'{v}%', 10.5, SOFT, 500, 'middle', MONO)
    b += t(x0 + 10, y + 17, 'Dentro del límite', 11, DEEP, 600)
    b += t(x1 - 10, y + 17, 'Fuera del límite', 11, RED, 600, 'end')
    b += f'<line x1="{X:g}" y1="{y - 40}" x2="{X:g}" y2="{y + 24}" stroke="{RED}" stroke-width="2.5"/>'
    b += t(X + 10, y - 26, 'Límite regulatorio: 10%', 13, RED, 700)
    b += t(X + 10, y - 10, 'por encima: zona de infracción', 11, RED)
    b += t(X - 14, y - 26, 'Kredit hoy: 10%', 13, INK, 700, 'end')
    b += t(X - 14, y - 10, 'sin margen ante una mala quincena', 11, MUTED, 400, 'end')
    b += conn([(X - 12, y + 72), (tgt + 10, y + 72)], p, OK, 'g', sw=2)
    b += f'<circle cx="{X:g}" cy="{y + 12}" r="8" fill="{NAVY}" stroke="#fff" stroke-width="2"/>'
    b += t(tgt - 8, y + 76, 'Objetivo: margen bajo el límite (la meta se fija con Kredit en la fase 1)', 11.5, OK, 600, 'end')
    return svg(p, W, H, 'Mora de Kredit frente al límite regulatorio',
               'Escala de 0 a 15 por ciento de cartera en mora. El límite regulatorio está en 10 por ciento y Kredit '
               'está hoy en ese mismo punto. La flecha verde indica el objetivo de bajar con margen de seguridad.', b)


def d_cuello(pid, titulo, hoy, nuevo, desc):
    """Antes y después de un proceso: dos carriles de cuatro pasos."""
    W, H = 800, 204
    L, X0, NW, G, NH = 20, 168, 136, 22, 56
    xs = [X0 + i * (NW + G) for i in range(4)]
    b = eyebrow(L, 26, titulo)
    lanes =[(44, hoy, RED, 'HOY', 'cada caso sube' if 'plan' in titulo.lower() else 'aviso por correo'),
             (124, nuevo, OK, 'CON LA PLATAFORMA', 'solo excepciones suben' if 'plan' in titulo.lower() else 'en minutos')]
    for y, steps, col, name, sub in lanes:
        for i in range(3):
            b += conn([(xs[i] + NW, y + NH / 2), (xs[i + 1] - 1, y + NH / 2)], pid)
    for y, steps, col, name, sub in lanes:
        b += t(L, y + 24, name, 11, col, 700, ls='0.08em')
        b += t(L, y + 42, sub, 11, MUTED)
        for i, (ti, s, kind) in enumerate(steps):
            b += node(xs[i], y, NW, NH, ti, (s,), kind, ts=12.5, ss=10.5)
    return svg(pid, W, H, titulo, desc, b)


def d_cuellos():
    planes = d_cuello('dc1', 'Planes de pago',
        [('Cliente pide plan', 'por teléfono o chat', 'step'), ('Cobrador arma', 'la propuesta a mano', 'step'),
         ('Gerente General', 'aprueba caso por caso', 'bad'), ('Respuesta', 'horas o días después', 'bad')],
        [('Cliente pide plan', 'SMS, portal o llamada', 'step'), ('Motor de reglas', 'planes preaprobados', 'ok'),
         ('Agente IA lo ofrece', 'y registra la promesa', 'ok'), ('Gerencia revisa', 'solo lo fuera de regla', 'step')],
        'Hoy el Gerente General aprueba cada plan de pago y el cliente espera horas o días; con la plataforma, un motor '
        'de reglas preaprobadas permite que el agente ofrezca el plan y solo las excepciones suben a gerencia.')
    concil = d_cuello('dc2', 'Conciliación de pagos',
        [('Cliente paga', 'banco, ACH o Yappy', 'step'), ('Aviso por correo', 'a una persona', 'step'),
         ('Registro manual', 'hasta 1 día de retraso', 'bad'), ('Riesgo: se cobra', 'a quien ya pagó', 'bad')],
        [('Cliente paga', 'link de pago o banco', 'step'), ('Conciliación auto.', 'aviso o archivo del banco', 'ok'),
         ('SIF actualizado', 'saldo al día', 'ok'), ('Sale de la secuencia', 'y recibe su recibo', 'step')],
        'Hoy el pago se avisa por correo y se registra a mano con hasta un día de retraso, con riesgo de cobrar a quien '
        'ya pagó; con la plataforma se concilia automáticamente, se actualiza el SIF y la cuenta sale de la secuencia.')
    return planes, concil


def d_arq():
    """Arquitectura: sistemas de Kredit → plataforma (8 módulos) → canales → cliente."""
    p, W, H = 'da', 800, 452
    b = ''
    # conectores
    b += conn([(172, 132), (211, 132)], p)
    b += conn([(212, 172), (173, 172)], p, ACC, 'v', '4 3')
    b += conn([(572, 132), (611, 132)], p)
    b += conn([(696, 204), (696, 239)], p)
    b += conn([(300, 288), (300, 323)], p)
    b += conn([(486, 288), (486, 323)], p, RED, 'r')
    # sistemas
    b += eyebrow(20, 30, 'Sistemas de Kredit')
    b += list_node(20, 44, 152, 192, [('SIF', 'sistema core, cartera'), ('AgileCheck', 'score de riesgo'), ('Banco y pagos', 'ACH, Yappy, link')])
    # plataforma
    b += rect(212, 40, 360, 248, BLUE_T, BLUE, r=8, sw=1.2)
    b += eyebrow(392, 62, 'Plataforma de cobranza · Elemento Web', DEEP, 'middle')
    mods = [('Conector de datos', 'lee SIF y AgileCheck', False), ('Segmentación', '4 niveles de riesgo', False),
            ('Motor de reglas', 'planes y límites', True), ('Orquestador (n8n)', 'secuencias por etapa', False),
            ('Agente conversacional', 'SMS y chat del portal', False), ('Agente de voz IA', 'llamadas en mora avanzada', False),
            ('Conciliación', 'pagos al instante', True), ('Bitácora auditable', 'cada contacto, exportable', False)]
    for i, (ti, s, foc) in enumerate(mods):
        cx = 224 + (i % 2) * 176
        cy = 76 + (i // 2) * 52
        b += chip(cx, cy, 164, 44, ti, s, foc)
    # canales y cliente
    b += eyebrow(612, 30, 'Canales')
    b += list_node(612, 44, 168, 160, [('SMS', 'remitente de Kredit'), ('Correo', 'dominio de Kredit'),
                                       ('Portal de clientes', 'chat y pagos en línea'), ('Llamada de voz', 'número local')])
    b += node(612, 240, 168, 64, 'Cliente en mora', ('responde, paga', 'o pide un plan'), 'dark')
    # abajo
    b += node(212, 324, 176, 56, 'Dashboard gerencial', ('mora, recuperación, límites',), ts=12.5, ss=10.5)
    b += node(400, 324, 172, 56, 'Bandeja de cobradores', ('disputas y casos de riesgo',), 'bad', ts=12.5, ss=10.5)
    b += t(20, 256, 'Escritura de vuelta:', 11, ACC, 600)
    b += t(20, 272, 'pagos, promesas y', 11, MUTED)
    b += t(20, 288, 'gestiones al SIF', 11, MUTED)
    b += legend(432, [('focal', 'Quitan los frenos de hoy'), ('line:' + ACC + ':4 3', 'Escritura de vuelta al SIF'), ('bad', 'Pasa a una persona')], W)
    return svg(p, W, H, 'Arquitectura de la plataforma de cobranza',
               'A la izquierda, los sistemas de Kredit: SIF, AgileCheck y banco o pagos, que alimentan la plataforma. En el '
               'centro, la plataforma de Elemento Web con ocho módulos: conector de datos, segmentación, motor de reglas, '
               'orquestador n8n, agente conversacional por SMS y chat del portal, agente de voz, conciliación y bitácora '
               'auditable. A la derecha, los canales SMS, correo, portal de clientes y llamada que llegan al cliente en mora. '
               'Abajo, el dashboard gerencial y la bandeja de cobradores para disputas y casos de riesgo. La cobranza no usa WhatsApp.', b)


def d_sec():
    """Secuencia por días de mora: cuatro etapas y dos reglas que la cortan."""
    p, W, H = 'ds', 800, 352
    NW, G, X0 = 176, 16, 20
    st = [('Día 0', 'Recordatorio amable', ['SMS + correo', 'con link de pago'], 'Tono cordial', 'brand', BLUE),
          ('Días 3 a 5', 'Segundo aviso', ['SMS + correo', 'aviso en el portal'], 'Tono claro', 'brand', BLUE),
          ('Días 10 a 15', 'Gestión firme', ['Llamada con IA', 'plan preaprobado'], 'Firme y respetuoso', 'focal', ACC),
          ('Día 20 en adelante', 'Escalamiento', ['Cobrador humano', 'o vía legal'], 'Decisión de Kredit', 'warn', AMB)]
    b = f'<line x1="30" y1="48" x2="770" y2="48" stroke="{SOFT}" stroke-width="1.2"/>'
    for i, (d, ti, chs, tone, kind, c) in enumerate(st):
        x = X0 + i * (NW + G)
        f, s, dash, _, _ = KINDS[kind]
        b += f'<circle cx="{x + NW / 2:g}" cy="48" r="7" fill="{c}" stroke="#fff" stroke-width="2"/>'
        b += eyebrow(x + NW / 2, 30, d, c, 'middle')
        b += rect(x, 68, NW, 140, PAPER, 'none') + rect(x, 68, NW, 140, f, s, sw=1.2)
        b += t(x + 14, 96, ti, 14.5, INK, 700, fam=DISP)
        for j, ch in enumerate(chs):
            b += t(x + 14, 122 + j * 18, ch, 12.5 if j == 0 else 11.5, INK if j == 0 else MUTED, 600 if j == 0 else 400)
        b += f'<line x1="{x + 14}" y1="168" x2="{x + NW - 14}" y2="168" stroke="{RULE}"/>'
        b += t(x + 14, 190, tone, 11.5, MUTED)
    b += rect(20, 228, 760, 36, OK_T, OK, r=6)
    b += t(36, 251, 'Si paga en cualquier etapa: la cuenta sale de la secuencia de inmediato y recibe su comprobante.', 12.5, OK, 600)
    b += rect(20, 272, 760, 36, RED_T, RED, r=6)
    b += t(36, 295, 'Si dice «ya pagué», «no es mío», pide no ser contactado o menciona un abogado: se detiene todo y pasa a una persona.', 12, RED, 600)
    b += t(20, 336, 'Los días, canales y tonos son el punto de partida; se ajustan por nivel de riesgo y con los resultados de las primeras semanas.', 11.5, MUTED)
    return svg(p, W, H, 'Secuencia de cobranza por días de mora',
               'Línea de tiempo en cuatro etapas: día 0 recordatorio amable por SMS y correo con link de pago; días 3 a 5 '
               'segundo aviso por SMS y correo, con aviso en el portal; días 10 a 15 gestión firme con llamada de IA y oferta de '
               'plan preaprobado; día 20 en adelante escalamiento a cobrador humano o vía legal. Si paga en cualquier etapa sale '
               'de la secuencia; ante disputa o pedido de no contacto se detiene todo y pasa a una persona.', b)


def d_gantt():
    """Gantt de 14 semanas: escenario ágil (sólido) y conservador (punteado)."""
    p, W = 'dg', 800
    LX, X0, X1, Y0, RH = 20, 252, 780, 64, 52
    wk = (X1 - X0) / 14
    ph = [('1 · Descubrimiento y bases', 'reglas, conciliación, datos', 0, 1.5, True),
          ('2 · Segmentación y secuencia', 'SMS, correo y portal', 1.5, 3.5, False),
          ('3 · Agente conversacional', 'SMS y chat del portal', 3.5, 5.5, False),
          ('4 · Agente de voz', 'llamadas con guardrails', 5, 7, False),
          ('5 · Dashboard y ajuste', 'panel en vivo y afinado', 7, 8, False)]
    cons = [(0, 3), (3, 6), (6, 9), (9, 13), (12, 14)]
    H = Y0 + 5 * RH + 100
    b = ''
    for w in range(15):
        X = X0 + wk * w
        b += f'<line x1="{X:g}" y1="52" x2="{X:g}" y2="{Y0 + 5 * RH:g}" stroke="rgba(15,23,42,.07)"/>'
        if w < 14:
            b += t(X + wk / 2, 42, f'S{w + 1}', 9.5, SOFT, 500, 'middle', MONO)
    b += f'<line x1="12" y1="52" x2="788" y2="52" stroke="rgba(15,23,42,.14)"/>'
    for i, (ti, s, a, e, foc) in enumerate(ph):
        y = Y0 + i * RH
        c = ACC if foc else '#3b82f6'
        b += t(LX, y + 20, ti, 12.5, INK, 600)
        b += t(LX, y + 36, s, 11, MUTED)
        ca, ce = cons[i]
        b += rect(X0 + wk * ca, y + 8, wk * (ce - ca), 28, c + '22', c + '88', r=5, dash='4 3')
        b += rect(X0 + wk * a, y + 14, wk * (e - a), 16, c, c, r=4)
    for at, row in ((1.5, 0), (3.5, 1), (7, 3)):
        x = X0 + wk * at
        y = Y0 + row * RH + 22
        b += f'<path d="M{x:g} {y - 9} L{x + 9:g} {y} L{x:g} {y + 9} L{x - 9:g} {y} Z" fill="{NAVY}" stroke="#fff" stroke-width="1.5"/>'
    yb = Y0 + 5 * RH + 26
    b += t(LX, yb, 'Requisito: la fase 4 (voz) se activa solo con las reglas y la conciliación de la fase 1 funcionando.', 11.5, ACC, 600)
    b += legend(yb + 44, [('swatch:#3b82f6:#3b82f6', 'Escenario ágil: 8 semanas'), ('swatch:#3b82f622:#3b82f688:4 3', 'Conservador: hasta 14'),
                          ('diamond:' + NAVY, 'Hito')], W)
    return svg(p, W, H, 'Cronograma por fases en semanas',
               'Gantt de 14 semanas con cinco fases. Escenario ágil: descubrimiento y bases en la semana y media inicial; '
               'segmentación y secuencia hasta la semana 4; agente conversacional hasta la 6; agente de voz de la 6 a la 7; '
               'dashboard y ajuste en la 8. El escenario conservador, punteado, llega a 14 semanas. La fase de voz depende de '
               'que las reglas y la conciliación de la fase 1 estén funcionando.', b)


# =====================================================================================
# Contenido
# =====================================================================================

S = []

S.append(intro('Recuperar más, con menos horas y <span class="gradient-text">con cada contacto registrado</span>', [
    'Proponemos poner en marcha, en 8 a 14 semanas, una operación de cobranza automatizada sobre su cartera actual. La plataforma trabaja en tres capas: <b class="text-slate-800">segmenta</b> cada cuenta por riesgo con los datos del SIF y de AgileCheck, <b class="text-slate-800">contacta</b> de forma automática por SMS, correo y el portal de clientes según los días de mora, y <b class="text-slate-800">llama</b> con un agente de voz con IA a las cuentas en mora avanzada.',
    'Antes de encender la IA resolvemos los dos frenos de hoy: los planes de pago que aprueba la Gerencia General uno por uno y la conciliación de pagos por correo. Sin eso, el sistema contactaría más rápido, pero cada caso seguiría esperando una aprobación o un registro manual.'],
    chips=['🧭 Segmentación por riesgo', '✉️ SMS y correo', '🖥️ Portal de clientes', '📞 Agente de voz con IA', '⚖️ Motor de reglas', '🧾 Bitácora auditable'])
    .replace('</section>', stats([('10%', 'Mora actual, igual al límite', True), ('3', 'Capas: segmentar, contactar, llamar'),
                                  ('8–14', 'Semanas hasta operar completo'), ('100%', 'De los contactos con registro auditable')], 'mt-8') + '</section>'))

S.append(sec('Diagnóstico', 'La mora ya está en el límite que permite la regulación',
    p('Según nos indicaron, la cartera en mora de Kredit está en el 10%, que es el tope regulatorio que les aplica. Eso cambia la naturaleza del proyecto: no se trata solo de cobrar mejor, sino de <b class="text-slate-800">salir de la zona de riesgo regulatorio</b> y mantener un margen de seguridad. Cualquier deterioro adicional de la cartera los pondría por encima del límite.')
    + figure(d_mora(), 'El valor de 10% y el límite aplicable se confirman con el oficial de cumplimiento de Kredit en la fase 1, junto con la meta de mora que fijaremos como objetivo del proyecto.')
    + callout('Por qué importa ahora.', 'Un cliente que entra en mora temprana y no recibe contacto en los primeros días tiene mucha más probabilidad de pasar a mora avanzada. Hoy el primer contacto depende de que una persona tenga tiempo; con la plataforma ocurre el mismo día, en todas las cuentas.', 'red')
    + h3('Dos frenos que hay que quitar primero', 'mt-12 mb-3')
    + p('En la reunión identificamos dos cuellos de botella que hoy limitan cualquier esfuerzo de cobranza, con o sin IA. Por eso la fase 1 los resuelve antes de activar el agente de voz.')
    + figure(d_cuellos()[0], None, 'mt-4')
    + figure(d_cuellos()[1], 'Cobrar a un cliente que ya pagó, porque el pago todavía no se registró, es una de las causas más comunes de reclamos. La conciliación automática elimina ese riesgo.', 'mt-4')))

S.append(sec('Tecnología disponible hoy', 'Un agente de voz que llama, negocia dentro de reglas y deja todo grabado',
    p('Hoy existen agentes de voz con IA que hacen llamadas de cobranza con voz natural en español. Se identifican como sistema automatizado, recuerdan el saldo, ofrecen planes de pago preaprobados y transfieren a una persona cuando detectan una disputa o un caso delicado. No reemplazan a su equipo: le quitan las llamadas repetitivas para que se concentre en los casos que de verdad necesitan criterio humano.')
    + cards([('Escala', 'Cientos de llamadas al día', 'Cada cuenta en la etapa correspondiente recibe su llamada a tiempo, dentro del horario permitido, sin depender de la disponibilidad del equipo.'),
             ('Consistencia', 'El mismo guion, siempre', 'Ninguna llamada sale del tono aprobado ni ofrece algo fuera de las reglas. Cada conversación queda grabada y transcrita.'),
             ('Control', 'Una persona decide lo delicado', 'Disputas, menciones legales o clientes vulnerables pasan de inmediato a un cobrador, con el resumen de la conversación.')])))

S.append(sec('La solución', 'Una plataforma propia, conectada a sus sistemas',
    p('Es una plataforma de Elemento Web que operamos como servicio: Kredit no compra servidores ni licencias sueltas ni mantiene integraciones. Se conecta al SIF y a AgileCheck, usa sus canales oficiales y escribe de vuelta en el SIF los pagos, promesas y gestiones.')
    + figure(d_arq(), 'En violeta, los dos módulos que resuelven los frenos actuales: el motor de reglas, que sustituye la aprobación caso por caso, y la conciliación automática. La forma de conexión con el SIF (API, base de datos de solo lectura o archivo diario) se define en la fase 1 con su equipo de sistemas.')
    + checks([('Conector de datos', 'Lee del SIF saldos, cuotas, días de mora e historial de pago, y de AgileCheck el score de cada cliente. Escribe de vuelta pagos, promesas y gestiones.'),
              ('Motor de reglas', 'La Gerencia General define una vez qué planes se pueden ofrecer, a quién y con qué condiciones. Lo que entra en la regla se ofrece al instante; solo las excepciones le llegan a aprobar.'),
              ('Conciliación de pagos', 'Recibe los pagos por link de pago o por el aviso o archivo del banco, los cruza con la cuenta y saca al cliente de la secuencia en minutos, no al día siguiente.'),
              ('Bandeja de cobradores', 'Las disputas, los casos de riesgo y las excepciones llegan a su equipo con el historial completo de la cuenta y de cada contacto.')])))

S.append(advantage('Decisión de diseño', 'La cobranza no pasa por WhatsApp', [
    'La Política de Mensajería de WhatsApp Business prohíbe usar WhatsApp para cobrar deudas, y la prohibición aplica aunque la empresa tenga licencia. Una plataforma que cobre por WhatsApp arriesga el bloqueo del número y de la cuenta de Kredit en Meta.',
    'Por eso los avisos salen por <b>SMS y correo</b>, el cliente conversa con el asistente por <b>SMS o en el chat de su portal</b> ("Accede a tu cuenta") y las cuentas en mora avanzada reciben <b>llamada</b>. El WhatsApp de Kredit queda libre para ventas y atención.'],
    icon_path='M12 9v3.75m9-.75a9 9 0 11-18 0 9 9 0 0118 0zm-9 3.75h.008v.008H12v-.008z'))

S.append(sec('Demo navegable', 'Véalo funcionando antes de decidir',
    p('Preparamos una maqueta navegable de la plataforma con datos ficticios de una cartera como la suya. Puede recorrerla por su cuenta: definir una regla y ver cuántos planes se aprobarían solos, simular un pago entrante, reproducir una conversación por SMS y una llamada, y exportar la bitácora.')
    + shots([('demo-resumen.webp', 2160, 1350, 'Pantalla de resumen gerencial del demo: mora sobre cartera en 10% frente al límite, simulador de escenario e indicadores del mes',
              '<b class="text-slate-900">Resumen gerencial.</b> La mora frente al límite y un simulador de escenarios, con cifras de ejemplo.'),
             ('demo-reglas.webp', 2160, 1350, 'Pantalla de reglas del demo: con la regla recomendada, 117 de 120 planes se aprueban solos y 3 llegan a la Gerencia General',
              '<b class="text-slate-900">Reglas de planes.</b> Con la regla de ejemplo, 117 de 120 planes se aprueban solos y a usted le llegan 3.')])
    + buttons([('Abrir el demo', DEMO)])
    + '<p class="text-xs text-slate-500 mt-2">elementoweb.com/demo/kredit · datos ficticios, nada se envía a clientes reales.</p>'))

S.append(sec('Capa 1 · Segmentación', 'Cada cuenta recibe la intensidad que le corresponde',
    p('Aprovechamos el score de AgileCheck que ya usan, en vez de construir otro, y lo combinamos con el comportamiento de pago de cada cliente. Así el esfuerzo se concentra donde más se recupera.')
    + table(['Criterio', 'Fuente', 'Uso en la segmentación'], [
        ['<b>Días de mora</b>', 'SIF', 'Define en qué etapa de la secuencia entra la cuenta.'],
        ['<b>Monto adeudado</b>', 'SIF', 'Prioriza el esfuerzo hacia los montos altos.'],
        ['<b>Score de riesgo</b>', 'AgileCheck', 'Ajusta la probabilidad de pago estimada.'],
        ['<b>Historial de pagos y promesas</b>', 'SIF y plataforma', 'Distingue al cliente que se atrasa por descuido del que no tiene intención de pagar.'],
        ['<b>Canal que responde</b>', 'Plataforma', 'Prioriza el canal en el que ese cliente suele contestar.'],
        ['<b>Disputas o reclamos abiertos</b>', 'SIF o atención al cliente', 'Saca la cuenta de la automatización y la asigna a una persona.']])
    + table(['Nivel', 'Perfil', 'Tratamiento'], [
        ['<span class="inline-block rounded-full bg-emerald-50 text-emerald-800 border border-emerald-200 px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap">A · Bajo</span>', 'Buen historial, atraso corto', 'Recordatorios amables por SMS y correo; sin llamadas.'],
        ['<span class="inline-block rounded-full bg-blue-50 text-blue-800 border border-blue-200 px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap">B · Medio</span>', 'Atrasos ocasionales', 'Secuencia completa por mensajes; llamada con IA desde el día 10.'],
        ['<span class="inline-block rounded-full bg-amber-50 text-amber-800 border border-amber-200 px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap">C · Alto</span>', 'Atrasos repetidos o score bajo', 'Llamada con IA más temprana y oferta de plan preaprobado.'],
        ['<span class="inline-block rounded-full bg-red-50 text-red-800 border border-red-200 px-2.5 py-0.5 text-xs font-semibold whitespace-nowrap">D · Crítico</span>', 'Monto alto, mora avanzada o promesas incumplidas', 'Cobrador humano desde el inicio, con apoyo de la plataforma.']],
        caption='Cuatro niveles como punto de partida, con reglas simples y explicables. Los cortes se calibran con su cartera real en la fase 2.')))

S.append(sec('Capa 2 · Secuencia multicanal', 'El contacto correcto, el día correcto, por el canal correcto',
    p('Cada cuenta avanza por una secuencia según sus días de mora. Todo ocurre de forma automática, dentro del horario y de los límites de contacto permitidos.')
    + figure(d_sec(), 'Los SMS salen con el remitente registrado de Kredit y los correos desde su dominio, con textos aprobados por Kredit. La cobranza no usa WhatsApp, cuya política lo prohíbe aun con licencia.')))

S.append(sec('Capa 3 · Agentes con IA', 'Dos agentes que atienden, ofrecen y escalan',
    f'''<div class="reveal grid md:grid-cols-2 gap-4">
        <div class="item-card bg-white/70 rounded-2xl p-6 border border-slate-100"><p class="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1.5">SMS y portal, desde el día 0</p><h3 class="display text-lg font-bold text-slate-900 mb-3">Agente conversacional</h3>{bullets([
            'Responde saldo, fecha de vencimiento e historial con datos reales del SIF. No inventa montos.',
            'Envía el link de pago y confirma cuando el pago entra.',
            'Ofrece planes dentro de las reglas preaprobadas y registra la promesa de pago.',
            'Detecta «ya pagué», «no es mío» o «quiero hablar con un abogado» y pasa el caso a una persona, deteniendo los mensajes.'])}</div>
        <div class="item-card bg-white/70 rounded-2xl p-6 border border-slate-100"><p class="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1.5">Voz, desde el día 10–15</p><h3 class="display text-lg font-bold text-slate-900 mb-3">Agente de llamadas</h3>{bullets([
            'Llama desde un número local y se identifica como sistema automatizado de Kredit.',
            'Verifica la identidad antes de hablar de la deuda.',
            'Negocia solo dentro de las reglas y confirma el acuerdo por SMS y correo.',
            'Graba y transcribe cada llamada, y transfiere a un cobrador ante disputa o riesgo.'])}</div>
      </div>'''
    + table(['Plataforma de voz', 'Fortaleza', 'Costo de referencia'], [
        ['<b>Retell AI</b>', 'Casos de cobranza ya probados e integración con sistemas de préstamos.', 'US$0.07–0.31 / min'],
        ['<b>Vapi</b>', 'Más flexible para integrar reglas de cumplimiento propias.', 'US$0.05 / min + telefonía y voz'],
        ['<b>Bland AI</b>', 'Modelo de voz propio y baja latencia.', 'Variable']], num=(2,),
        caption='Elegimos la plataforma en la fase 1 con pruebas de voz en español de Panamá. El orquestador no depende de un solo proveedor: si uno sube de precio o baja de calidad, se cambia sin rehacer el sistema.')))

S.append(sec('Cumplimiento y gobernanza', 'Diseñado para resistir una auditoría',
    p('En una entidad regulada, lo que importa no es solo cuánto se cobra, sino cómo. Cada regla se configura dentro de los límites que exigen la Dirección General de Empresas Financieras del MICI y la normativa de protección al consumidor, y queda documentada.')
    + checks([('Límites de contacto', 'Máximo de intentos por cuenta, por día y por semana, y horario permitido. El sistema no puede pasarse aunque alguien lo intente.'),
              ('Identificación', 'El agente, por voz, SMS o chat, se identifica siempre como sistema automatizado de Kredit al inicio.'),
              ('Pausa y escalamiento', 'Ante una disputa, un reclamo, una mención legal o un pedido de no contacto, se detiene la automatización y el caso pasa a una persona.'),
              ('Terceros', 'Nunca se habla de la deuda con alguien distinto al titular. La identidad se verifica antes de dar cualquier dato.'),
              ('Bitácora auditable', 'Fecha, hora, canal, contenido, grabación y resultado de cada contacto. Se exporta para una auditoría o para responder un reclamo.'),
              ('Datos personales', 'Tratamiento conforme a la Ley 81 de 2019 de protección de datos personales: acceso por roles, cifrado y datos que no se usan para entrenar modelos de IA.'),
              ('Canales permitidos', 'Ningún aviso de cobranza sale por WhatsApp: su política lo prohíbe aun con licencia. SMS, correo, portal y voz, todos con registro en la bitácora.'),
              ('Aprobación de guiones', 'Todos los mensajes y guiones de llamada los aprueba Kredit antes de salir, y cualquier cambio queda versionado.')])
    + callout('', 'Los límites exactos de frecuencia, horario y contenido se confirman con su oficial de cumplimiento en la fase 1, antes de enviar el primer mensaje.', 'blue')))

S.append(sec('Dashboard', 'La cobranza en tiempo real, en una sola pantalla',
    p('La Gerencia General ve en todo momento cuánto se recupera, por qué canal y si se cumplen los límites. Medimos la situación inicial en la fase 1 para que el resultado se pueda comparar con datos y no con impresiones.')
    + table(['Métrica', 'Qué responde'], [
        ['<b>Mora sobre cartera total</b>', '¿Cuánto margen tenemos frente al límite regulatorio?'],
        ['<b>Recuperación por etapa y canal</b>', '¿Qué mensaje, canal o llamada está funcionando?'],
        ['<b>Monto recuperado frente a mora</b>', '¿Cuánto dinero devolvió el sistema este mes?'],
        ['<b>Promesas de pago cumplidas</b>', '¿Los acuerdos que se cierran se pagan de verdad?'],
        ['<b>Paso de mora temprana a avanzada</b>', '¿Estamos frenando el deterioro de la cartera?'],
        ['<b>Casos resueltos sin intervención humana</b>', '¿Cuántas horas del equipo liberamos?'],
        ['<b>Tiempo hasta el primer contacto</b>', '¿Qué tan rápido actuamos sobre una cuenta nueva en mora?'],
        ['<b>Casos escalados y motivo</b>', '¿Cuántas disputas y casos de riesgo hay, y por qué?'],
        ['<b>Cumplimiento de límites</b>', '¿Alguna cuenta recibió más contactos de los permitidos? Debe ser siempre cero.']])
    + callout('', 'Para medir el efecto real, durante las primeras semanas dejamos un grupo pequeño de cuentas con el proceso actual y lo comparamos con las gestionadas por la plataforma.', 'blue')))

S.append(sec('Fases y cronograma', 'De 8 a 14 semanas, empezando por quitar los frenos',
    figure(d_gantt(), 'El plazo depende sobre todo de qué tan rápido tengamos acceso a los datos del SIF y de la aprobación de las reglas y guiones por parte de Kredit.', 'mt-0')
    + table(['Fase', 'Duración', 'Entregables', 'Criterio de salida'], [
        ['<b>1 · Descubrimiento y bases</b>', '1–3 sem.', 'Acceso a datos del SIF y AgileCheck; reglas de planes preaprobados con la Gerencia General; conciliación automática de pagos; límites de cumplimiento confirmados; medición inicial.', 'Un pago se concilia solo y un plan dentro de regla se aprueba sin intervención'],
        ['<b>2 · Segmentación y secuencia</b>', '2–3 sem.', 'Niveles de riesgo calibrados; secuencia por SMS, correo y portal en n8n; remitente de SMS registrado y textos aprobados por Kredit; bitácora activa.', 'Cuentas reales reciben su secuencia y salen al pagar'],
        ['<b>3 · Agente conversacional</b>', '2–3 sem.', 'Agente en producción por SMS y en el chat del portal con consultas de saldo, links de pago, planes preaprobados y escalamiento a la bandeja.', 'Resuelve consultas simples sin persona y escala bien las disputas'],
        ['<b>4 · Agente de voz</b>', '2–4 sem.', 'Plataforma de voz elegida, número local, guiones aprobados, grabación y transcripción; salida gradual por volumen.', 'Llamadas activas en mora avanzada sin incumplir ningún límite'],
        ['<b>5 · Dashboard y ajuste</b>', '1–2 sem.', 'Panel en vivo, comparación con la medición inicial, ajuste de reglas, mensajes y horarios.', 'La Gerencia General sigue la cobranza desde el panel']]),
    newpage=True))

S.append(sec('Inversión', 'Implementación única y servicio mensual',
    p('La plataforma se cobra como servicio: una implementación inicial para conectarla a sus sistemas y a sus reglas, y una mensualidad que cubre la operación, el soporte y las mejoras continuas. El consumo de terceros se factura a costo, sin margen.')
    + service_card('1', 'Implementación', 'Fases 1 a 5, de 8 a 14 semanas', PH('US$ por definir'), 'Pago único · sin ITBMS',
                   items=['Integración con SIF y AgileCheck', 'Motor de reglas y conciliación', 'Secuencia multicanal y agentes de IA', 'Dashboard, capacitación y puesta en marcha'], cls='mt-2 mb-6')
    + service_card('2', 'Plataforma de cobranza', 'Operación continua desde la puesta en marcha', PH('US$ por definir'), '/ mes · sin ITBMS',
                   items=['Alojamiento, seguridad y respaldos', f'Hasta {PH("___")} cuentas gestionadas al mes', 'Soporte y ajustes de reglas y guiones', 'Mejoras continuas de la plataforma', 'Informe mensual de resultados'], extra='Recomendado: incluye la operación completa')
    + service_card('3', 'Consumo de terceros', 'Facturado a costo, con el detalle del proveedor', 'A costo', 'Sin margen de Elemento Web',
                   items=['Minutos del agente de voz y telefonía', 'SMS (tarifa del operador) y correo transaccional', 'Uso de modelos de IA'], ribbon='SEGÚN USO', cls='mb-0')))

resumen_inner = (
    sum_head('Pago único')
    + '<div class="space-y-0.5 text-sm mb-3">' + sum_row('Implementación (fases 1 a 5)', PH('por definir'), last=True) + '</div>'
    + sum_head('Pagos mensuales', 'bg-violet-400', 'mt-8')
    + '<div class="grid md:grid-cols-2 gap-8"><div><h4 class="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">A Elemento Web</h4><div class="space-y-0.5 text-sm">'
    + sum_row('Plataforma de cobranza', PH('por definir')) + sum_row('Cuentas gestionadas al mes', f'hasta {PH("___")}', last=True)
    + '</div></div><div><h4 class="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">Consumo de terceros, a costo</h4><div class="space-y-0.5 text-sm">'
    + sum_row('Voz y telefonía', 'según uso') + sum_row('SMS y correo', 'según uso') + sum_row('Modelos de IA', 'según uso', last=True)
    + '</div></div></div>'
    + '<p class="text-[11px] text-blue-300/70 mt-4">Precio por definir: Kredit no tiene un presupuesto asignado para este proyecto. Lo fijamos con usted tras confirmar el tamaño de la cartera y el volumen de cuentas en mora.</p>')

S.append(summary(resumen_inner, 'Para arrancar · primer paso', 'Taller de reglas',
    'Una sesión con la Gerencia General para definir los planes preaprobados y otra con sistemas para conectar el SIF. Con el tamaño de la cartera, fijamos el precio.',
    f'Hola, queremos agendar el taller de reglas de la propuesta {REF} de cobranza con IA para Kredit.',
    'Precios en USD, sin ITBMS (7%); se aplicará según corresponda. El consumo de terceros se factura a costo, con el detalle del proveedor.',
    btn='Agendar el taller →', cls='mb-14 sumblock--flow'))

S.append(sec('Riesgos del plan', 'Lo que puede complicarlo y cómo lo evitamos',
    table(['Riesgo', 'Mitigación'], [
        ['El SIF no tiene una API o el acceso a los datos se demora', 'Plan B con base de datos de solo lectura o archivo diario; el plazo cuenta desde que tenemos acceso.'],
        ['Las reglas de planes de pago no se definen y todo vuelve a la Gerencia General', 'Taller con la Gerencia General en la fase 1. El agente de voz no sale hasta tener las reglas.'],
        ['Un mensaje o llamada fuera de tono afecta la marca o genera un reclamo', 'Guiones aprobados por Kredit, límites que no se pueden saltar, salida gradual y revisión de muestras grabadas.'],
        ['Usar WhatsApp para cobrar y perder el número', 'La cobranza no pasa por WhatsApp: su política lo prohíbe aun con licencia. SMS, correo, portal y voz; el WhatsApp de Kredit queda para ventas y atención.'],
        ['Costo de voz por encima de lo previsto', 'Llamadas solo a los niveles de riesgo que lo justifican, tope mensual de minutos y reporte de consumo.']], cls='mt-0')))

S.append(sec('Para avanzar', 'Lo que necesitamos de Kredit',
    checks([('Acceso a datos', 'Contacto en sistemas y forma de conexión con el SIF (API, base de solo lectura o archivo diario) y con AgileCheck.'),
            ('Cartera', 'Número de cuentas activas y en mora por tramo de días, y monto total, para dimensionar el servicio y fijar el precio.'),
            ('Reglas de planes', 'Una sesión de una hora con la Gerencia General para definir los planes de pago preaprobados.'),
            ('Pagos', 'Bancos y medios de pago que usan sus clientes, y cómo les llega hoy el aviso de cada pago.'),
            ('Cumplimiento', 'Su oficial de cumplimiento, para confirmar límites de contacto, horarios y textos obligatorios.'),
            ('Canales', 'Remitente de SMS con un proveedor local, dominio de correo de Kredit y acceso al portal de clientes ("Accede a tu cuenta") para el chat.')], cls='mt-0')))

S.append(terms([
    ('Pago de la implementación', f'{PH()} al firmar y el resto contra entrega de cada fase. Transferencia, ACH o Yappy.'),
    ('Mensualidad', f'Empieza con la puesta en marcha de la fase 2. Plazo mínimo de {PH("__ meses")}.'),
    ('Datos', 'Los datos de cartera, clientes y contactos son de Kredit. Se exportan completos cuando lo pida y se eliminan al terminar el servicio.'),
    ('Plataforma', 'El software de la plataforma es de Elemento Web y se presta como servicio.'),
    ('Confidencialidad', 'Acuerdo de confidencialidad y de tratamiento de datos firmado antes de recibir cualquier dato. Los datos no se usan para entrenar modelos de IA.'),
    ('Disponibilidad y soporte', 'Soporte en horario laboral, atención prioritaria a incidentes que detengan la cobranza y respaldos diarios.'),
    ('Alcance', 'El descrito en esta propuesta. Los cambios de alcance se cotizan aparte.'),
    ('Validez', 'Esta propuesta vale hasta el 6 de noviembre de 2026. Precios en USD sin ITBMS (7%).')]))

S.append(cta('¿Empezamos por quitar los frenos? 🚀',
    'Al aceptar, agendamos el taller de reglas con la Gerencia General y la sesión con sistemas para conectar el SIF. En dos semanas los pagos se concilian solos.',
    f'Hola, quiero conversar sobre la propuesta {REF} de cobranza con IA.',
    f'Propuesta {REF}: cobranza con IA', f'Hola, queremos avanzar con la propuesta {REF} de cobranza con IA de Elemento Web.',
    extra=[('Ver el demo', DEMO)], wa_label='Conversar por WhatsApp', mail_label='Avanzar por correo'))

S.append(sources('La mora de 10% y el límite regulatorio aplicable son datos indicados por Kredit, a confirmar con su oficial de cumplimiento. La licencia de CREDU HOLDINGS, S.A. como empresa financiera (Resolución No. 638 de 2025 de la Dirección General de Empresas Financieras del MICI) consta en su política de privacidad publicada en kredit.com.pa, revisada el 12 de octubre de 2026. La Política de Mensajería de WhatsApp Business (sección 4, actualizada el 23 de septiembre de 2026) prohíbe la cobranza de deudas aunque la empresa tenga licencia; por eso la plataforma no la usa. Los costos de referencia de Retell AI, Vapi y Bland AI provienen de las tarifas publicadas por cada proveedor y pueden cambiar; se confirman al elegir la plataforma en la fase 1. Los plazos son estimaciones de Elemento Web y dependen del acceso a los datos y de las aprobaciones de Kredit.'))

html = page(title='Cobranza con IA · Propuesta para Kredit — elementoweb.com',
            doc_type='Propuesta · Cobranza con IA', client='KREDIT',
            headline='Bajar la mora del límite, sin sumar personal',
            subtitle='Una plataforma de cobranza con inteligencia artificial que contacta a cada cliente en el momento correcto, ofrece planes de pago dentro de sus reglas, concilia los pagos al instante y deja registro de cada contacto, listo para cualquier revisión del MICI.',
            prepared_for='Kredit · Gerencia General', prepared_sub='CREDU HOLDINGS, S.A.',
            date='7 de octubre de 2026', ref=REF, valid='6 de noviembre de 2026',
            body='\n'.join(S), client_footer='Kredit', wa_consulta=f'Hola, tengo una consulta sobre la propuesta {REF} de cobranza con IA para Kredit.')
write(OUT_DIR / 'index.html', html)
print('ok', OUT_DIR / 'index.html', len(html))
