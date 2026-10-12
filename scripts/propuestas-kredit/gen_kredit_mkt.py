#!/usr/bin/env python3
"""Propuesta de marketing digital y captación de leads para Kredit (EW-KRE-2026-02),
con el diseño de la casa (ver casa.py). Uso: python scripts/propuestas-kredit/gen_kredit_mkt.py"""
import pathlib, sys
sys.path.insert(0, str(pathlib.Path(__file__).parent))
from casa import *  # noqa: F401,F403
from casa import esc, q
import bloques_mkt as B

OUT_DIR = ROOT / 'public/propuestas/kredit-marketing-digital-4a6a12dc'
REF = 'EW-KRE-2026-02'
DEMO_B2C = 'https://elementoweb.com/demo/kredit-landings/prestamos/'
DEMO_B2B = 'https://elementoweb.com/demo/kredit-landings/empresas/'
DEMO_WEB = 'https://elementoweb.com/demo/kredit-web/'
GOOGLE, META = '#1e40af', '#93c5fd'


# =====================================================================================
# Diagramas (skill diagram-design, tokens de la casa)
# =====================================================================================

def d_embudo():
    """Flujo de captación: canales → landings → n8n → CRM y vendedor, con la señal de vuelta."""
    p, W, H = 'de', 800, 356
    b = ''
    # conectores primero
    b += conn([(180, 96), (219, 96)], p)
    b += conn([(180, 200), (219, 200)], p)
    b += conn([(364, 96), (403, 96)], p)
    b += conn([(364, 200), (403, 200)], p)
    b += conn([(572, 84), (611, 84)], p, OK, 'g')
    b += conn([(696, 116), (696, 139)], p)
    b += conn([(572, 212), (592, 212), (592, 264), (611, 264)], p, SOFT, 's')
    b += conn([(780, 172), (792, 172), (792, 320), (100, 320), (100, 253)], p, ACC, 'v', '5 4', 1.5)
    # columnas
    for x, s in ((20, 'Canales'), (220, 'Landings'), (404, 'Automatización'), (612, 'Venta')):
        b += eyebrow(x, 30, s)
    b += list_node(20, 44, 160, 208, [('Google Ads', 'búsqueda con intención'), ('Meta Ads', 'Facebook e Instagram'),
                                      ('Instagram', 'contenido mensual'), ('WhatsApp', 'envíos a su base'),
                                      ('Web + SEO/GEO', 'Google y asistentes IA')])
    b += node(220, 64, 144, 64, 'Préstamos', ('personas · calculadora', 'y precalificación'), 'brand')
    b += node(220, 168, 144, 64, 'Empresas', ('convenio para', 'colaboradores'), 'brand')
    b += list_node(404, 56, 168, 184, ['valida y deduplica', 'puntaje del lead', 'AgileCheck (si aplica)',
                                       'asigna vendedor', 'responde por WhatsApp'], 'focal', head='n8n')
    b += node(612, 52, 168, 64, 'CRM de Kredit', ('lead calificado', 'con su historial'))
    b += node(612, 140, 168, 64, 'Vendedor', ('contacta en', 'menos de 5 min'), 'dark')
    b += node(612, 232, 168, 64, 'No calificado', ('respuesta clara y', 'nutrición, sin vendedor'), 'optional')
    b += t(116, 341, 'Señal de vuelta: lead calificado y préstamo desembolsado → Google y Meta optimizan por calidad', 11.5, ACC, 600)
    return svg(p, W, H, 'Embudo de captación de Kredit',
               'Cinco canales (Google Ads, Meta Ads, Instagram, WhatsApp y la web con SEO) llevan a dos landings, '
               'de préstamos y de empresas. Un flujo en n8n valida, deduplica, puntúa, asigna vendedor y responde por '
               'WhatsApp. Los calificados pasan al CRM de Kredit y a un vendedor que contacta en menos de cinco minutos; '
               'los no calificados reciben una respuesta clara y nutrición, sin ocupar al vendedor. El resultado vuelve '
               'a Google y Meta como señal de calidad.', b)


def d_calif():
    """Calificación: formulario → reglas en n8n → tres niveles."""
    p, W, H = 'dq', 800, 336
    b = ''
    b += conn([(152, 152), (187, 152)], p)
    b += conn([(412, 104), (430, 104), (430, 72), (447, 72)], p, OK, 'g')
    b += conn([(412, 152), (430, 152), (430, 164), (447, 164)], p, AMB, 'w')
    b += conn([(412, 200), (430, 200), (430, 256), (447, 256)], p, SOFT, 's')
    b += node(20, 116, 132, 72, 'Formulario', ('multipaso, con', 'consentimientos'), 'input')
    b += list_node(188, 56, 224, 192, ['✓ Formato de cédula y celular', '✓ Duplicados y spam', '✓ Puntaje según sus reglas',
                                       '✓ Empresa e ingreso', '✓ AgileCheck (opcional)', '✓ Etiqueta UTM y campaña'],
                   'focal', head='n8n · en segundos')
    tiers = [(32, 'Calificado', '70 puntos o más', ['CRM + vendedor asignado', 'WhatsApp si lo autorizó', 'contacto en menos de 5 min'], 'ok', OK),
             (124, 'Revisar', '40 a 69 puntos', ['CRM en etapa «revisión»', 'se atiende el mismo día', 'pide los datos que faltan'], 'warn', AMB),
             (216, 'No calificado', 'menos de 40', ['respuesta respetuosa', 'nutrición si la aceptó', 'no ocupa al vendedor'], 'optional', SOFT)]
    for y, name, score, items, kind, c in tiers:
        f, s, d, _, _ = KINDS[kind]
        b += rect(448, y, 332, 80, PAPER, 'none') + rect(448, y, 332, 80, f, s, dash=d, sw=1.2)
        b += eyebrow(464, y + 30, name, c)
        b += t(464, y + 50, score, 11.5, MUTED)
        b += f'<line x1="584" y1="{y + 14}" x2="584" y2="{y + 66}" stroke="{RULE}"/>'
        for i, it in enumerate(items):
            b += t(598, y + 25 + i * 19, '· ' + it, 11.5, INK)
    b += t(20, 318, 'Umbrales y pesos de ejemplo: los define Kredit en el taller de calificación y se ajustan con los resultados reales.', 11.5, MUTED)
    return svg(p, W, H, 'Cómo se califica cada lead',
               'El formulario multipaso entra a n8n, que valida cédula y celular, descarta duplicados y spam, calcula un '
               'puntaje según las reglas de Kredit, revisa la empresa, la antigüedad y el tipo de ingreso, puede consultar AgileCheck '
               'y etiqueta la campaña. Con 70 puntos o más el lead es calificado y va al CRM con vendedor asignado; de 40 '
               'a 69 queda en revisión; con menos de 40 recibe una respuesta respetuosa y nutrición, sin ocupar al vendedor.', b)


SCEN = [('Arranque', 700, 800), ('Recomendada', 1200, 1500), ('Escala (desde el mes 3)', 2000, 2500)]


def d_pauta():
    """Barras apiladas horizontales: inversión mensual por escenario."""
    p, W, H = 'dp', 800, 270
    x0, PW, maxv = 196, 480, 4500
    sc = lambda v: PW * v / maxv
    b = ''
    rec_y = 36 + 60
    b += rect(12, rec_y - 6, 776, 52, ACC_T, ACC, r=8, sw=1)
    for v in range(0, 5000, 1000):
        X = x0 + sc(v)
        b += f'<line x1="{X:g}" y1="30" x2="{X:g}" y2="204" stroke="{"rgba(15,23,42,.25)" if v == 0 else "rgba(15,23,42,.08)"}" stroke-width="{1 if v == 0 else 0.8}"/>'
        b += t(X, 222, f'{v:,}', 10, SOFT, 500, 'middle', MONO)
    for i, (n, g, m) in enumerate(SCEN):
        y = 36 + i * 60
        rec = n == 'Recomendada'
        b += t(28, y + 26, n, 13, INK, 700 if rec else 500)
        b += f'<g><title>{esc(n)}: Google Ads US$ {g:,} · Meta Ads US$ {m:,} · total US$ {g+m:,} al mes</title>'
        b += f'<rect x="{x0}" y="{y + 6}" width="{sc(g) - 1:g}" height="28" rx="4" fill="{GOOGLE}"/>'
        b += f'<rect x="{x0 + sc(g) + 1:g}" y="{y + 6}" width="{sc(m) - 1:g}" height="28" rx="4" fill="{META}"/></g>'
        b += t(x0 + 10, y + 25, f'{g:,}', 11, '#ffffff', 600, fam=MONO)
        b += t(x0 + sc(g) + 11, y + 25, f'{m:,}', 11, INK, 600, fam=MONO)
        b += t(x0 + sc(g + m) + 12, y + 25, f'US$ {g + m:,}/mes', 12.5, INK, 700 if rec else 500)
    b += legend(254, [('swatch:' + GOOGLE + ':' + GOOGLE, 'Google Ads'), ('swatch:' + META + ':' + META, 'Meta Ads'),
                      ('focal', 'Escenario recomendado')], W)
    return svg(p, W, H, 'Inversión publicitaria mensual por escenario',
               'Barras apiladas por escenario, en dólares al mes. Arranque: Google Ads 700 y Meta Ads 800, total 1,500. '
               'Recomendada: Google 1,200 y Meta 1,500, total 2,700. Escala desde el mes 3: Google 2,000 y Meta 2,500, total 4,500.', b)


def d_crono():
    """Gantt de las primeras 8 semanas en dos grupos."""
    p, W = 'dg', 800
    X0, X1 = 256, 780
    wk = (X1 - X0) / 8
    rows = [('Taller, accesos y medición', 0, 1.5), ('Auditoría web y SEO técnico', 0, 2),
            ('Landings de préstamos y empresas', 0.5, 3), ('n8n + integración con el CRM', 1, 3),
            ('WhatsApp: verificación y plantillas', 1, 3), ('Creación de campañas y artes', 2, 3.5),
            ('Pauta en vivo y optimización semanal', 3.5, 8), ('Contenido de Instagram (mes 1)', 1.5, 8),
            ('Rediseño de la web + SEO/GEO', 2, 8)]
    groups = [('Preparación y construcción', 0, 6, 64), ('En marcha', 6, 9, 300)]
    RH = 34
    H = 470
    b = ''
    for name, a, e, gy in groups:
        b += rect(12, gy, 776, 24 + (e - a) * RH + 6, 'rgba(15,23,42,.02)', 'rgba(15,23,42,.08)', r=8)
        b += eyebrow(24, gy + 17, name)
    for w in range(9):
        X = X0 + wk * w
        b += f'<line x1="{X:g}" y1="52" x2="{X:g}" y2="{H - 46}" stroke="rgba(15,23,42,.07)"/>'
        if w < 8:
            b += t(X + wk / 2, 42, f'S{w + 1}', 10, SOFT, 500, 'middle', MONO, '0.06em')
    b += f'<line x1="12" y1="52" x2="788" y2="52" stroke="rgba(15,23,42,.14)"/>'
    for i, (name, a, e) in enumerate(rows):
        g = groups[0] if i < 6 else groups[1]
        y = g[3] + 24 + (i - g[1]) * RH
        focal = name.startswith('Pauta')
        b += t(24, y + 22, name, 12, INK, 600 if focal else 500)
        fill, stroke = (ACC, ACC) if focal else ('#dbeafe', '#3b82f6')
        b += rect(X0 + wk * a, y + 9, wk * (e - a), 18, fill, stroke, r=4)
    xm = X0 + wk * 3.5
    b += f'<line x1="{xm:g}" y1="52" x2="{xm:g}" y2="{H - 46}" stroke="{ACC}" stroke-width="1.5" stroke-dasharray="4 3"/>'
    b += label(xm, H - 28, 'Lanzamiento de la pauta · semana 4', ACC, 'middle', 10.5)
    return svg(p, W, H, 'Cronograma de las primeras 8 semanas',
               'Semana 1: taller, accesos y medición, y auditoría web. Semanas 1 a 3: landings, n8n con el CRM y '
               'verificación de WhatsApp. Semanas 3 y 4: campañas y artes. La pauta sale en vivo a mediados de la semana 4 '
               'y se optimiza cada semana. El contenido de Instagram y el rediseño de la web con SEO avanzan en paralelo '
               'desde la semana 2.', b)


# =====================================================================================
# Precios (sin cambios salvo el ítem G: el rediseño multipágina reemplaza a la mejora)
# =====================================================================================

UNICO = [('A', 'Landing de préstamos (personas)', 'Calculadora de cuota, formulario de precalificación multipaso, información de costo del crédito, carga rápida en móvil', 950),
         ('B', 'Landing de empresas (convenios)', 'Propuesta para RR. HH. y finanzas, pasos del convenio, formulario de afiliación con validación de correo corporativo', 750),
         ('C', 'Automatización n8n + integración con su CRM', 'Validación, deduplicación, puntaje, asignación de vendedor, aviso inmediato y respuesta automática por WhatsApp', 1200),
         ('D', 'Medición y analítica', 'GA4, Google Tag Manager, Search Console, píxel de Meta + API de conversiones, conversiones offline desde el CRM y tablero', 450),
         ('E', 'Creación de campañas de Google Ads', 'Búsqueda para personas y para empresas, palabras clave y negativas, anuncios, extensiones y conversiones', 450),
         ('F', 'Creación de campañas de Meta Ads', 'Estructura por público, audiencias y remarketing, primeros creativos y formularios conectados', 450),
         ('G', 'Rediseño multipágina de kredit.com.pa', 'Sitio nuevo de hasta 10 páginas con su marca: inicio, préstamos, empresas, nosotros, preguntas frecuentes, contacto y legales; calculadora, formularios conectados a n8n, licencia y costo del crédito visibles, SEO on-page y datos estructurados', 3000),
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
CREC_U = ESENCIAL_U + u['H']
INTEGRAL_U = sum(u.values()); INTEGRAL_M = sum(m.values())
PAUTA = 2700
money = lambda v: f'US$ {v:,}'
assert (ESENCIAL_U, ESENCIAL_M, CREC_U, RECOM_M, INTEGRAL_M) == (4250, 900, 4700, 1700, 2399)
assert INTEGRAL_U == 7700


# =====================================================================================
# Contenido
# =====================================================================================

S = []  # secciones en orden

S.append(intro('Captar más, pero sobre todo <span class="gradient-text">captar mejor</span>', [
    'Proponemos un sistema de captación con dos puertas de entrada: una para <b class="text-slate-800">empresas que quieren ofrecer el crédito a sus colaboradores</b> y otra para <b class="text-slate-800">las personas que buscan un préstamo en Google y redes</b>. Cada solicitud se valida, se puntúa y llega al CRM de Kredit ya calificada, con su vendedor asignado y, si la persona lo autorizó, un primer mensaje enviado por WhatsApp en segundos.',
    'La publicidad aprende de lo que pasa después del formulario: le devolvemos a Google y a Meta qué leads resultaron calificados y cuáles se desembolsaron, para que inviertan en personas parecidas a sus mejores clientes y no en las que solo llenan formularios. Cuando la calidad de la cartera es prioridad, eso importa tanto como el volumen.'],
    chips=['🎯 Dos landings', '⚙️ Calificación con n8n', '🔍 Google Ads', '📸 Meta Ads', '💬 WhatsApp oficial', '🌐 Web nueva + SEO/GEO'])
    .replace('</section>', stats([('2', 'Landings: personas y empresas'), ('5', 'Canales trabajando juntos'),
                                  ('<5 min', 'Objetivo de primer contacto del vendedor'), ('4', 'Semanas hasta la pauta en vivo')], 'mt-8') + '</section>'))

S.append(sec('Punto de partida', 'Una marca clara, con un canal digital que recién arranca',
    p('Revisamos el Instagram de Kredit (@kredit_pa) el 12 de octubre de 2026. La identidad ya está bien resuelta: una "K" reconocible, azul rey y cian, titulares fuertes y un mensaje aspiracional ("Tu solución financiera, en un instante", "Opciones de crédito para tus metas"). Ya hay piezas para empresas ("¿Buscas una solución financiera para tu equipo?") y un primer reel que explica cómo solicitar el crédito en 7 pasos.')
    + stats([('6', 'Publicaciones: 5 imágenes y 1 reel'), ('13', 'Seguidores'), ('1', 'Enlace en la biografía: kredit.com.pa'), ('2', 'Públicos en su contenido: personas y empresas')])
    + p('Con esa audiencia, el alcance orgánico todavía no genera solicitudes por sí solo: hoy el crecimiento tiene que venir de la pauta, y el contenido debe trabajar para la pauta (confianza, prueba social y un camino claro a la precalificación).', 'mt-6 mb-4')
    + h3('La página principal hoy')
    + p('También revisamos kredit.com.pa el mismo día. Comunica bien la promesa ("créditos rápidos y fáciles, con cuotas fijas y sin costos ocultos") y explica en sus preguntas frecuentes el modelo: <b class="text-slate-800">el crédito es para colaboradores de empresas afiliadas</b>, se paga con descuento automático en planilla y el desembolso es el mismo día de la aprobación. Su política de privacidad confirma además que CREDU HOLDINGS, S.A. está autorizada como empresa financiera por el MICI (Resolución No. 638 de 2025). Lo que hoy le quita solicitudes:')
    + table(['Hallazgo', 'Por qué importa'], [
        ['<b>"Afiliar empresa" abre un formulario genérico</b>', 'El popup pide solo nombre, correo, teléfono y mensaje: no pregunta empresa, RUC, cargo ni número de colaboradores, y no tiene página de gracias para medir la conversión. Es la puerta más valiosa del negocio.'],
        ['<b>No hay formulario ni precalificación para personas</b>', '"Crear cuenta" no lleva a ninguna parte y el único camino es escribir por WhatsApp: no se sabe de qué empresa viene cada persona ni de qué campaña.'],
        ['<b>No se muestran tasa efectiva, plazos ni un ejemplo de costo</b>', 'Google lo exige en la landing para aprobar anuncios de préstamos, y la normativa panameña pide indicar la tasa efectiva en la publicidad (a validar con su asesor).'],
        ['<b>No hay medición</b>', 'Sin Google Analytics, Tag Manager ni píxel de Meta: hoy no se sabe cuántas visitas llegan ni cuántas escriben, y la pauta no tendría con qué optimizar.'],
        ['<b>La licencia y la dirección no se ven</b>', 'La autorización del MICI solo aparece dentro de la política de privacidad, y el pie y la política muestran dos direcciones distintas. En una financiera, y para Google Ads, ambas deben verse y coincidir.'],
        ['<b>Aviso legal y política de cookies sin página</b>', 'La política de privacidad ya está completa, pero "Aviso legal" y "Política de cookies" son texto sin enlace.'],
        ['<b>Sin título principal, descripción ni datos estructurados</b>', 'El titular no está marcado como H1, no hay meta descripción ni datos estructurados y el sitio es una sola página: Google y los asistentes de IA tienen poco para mostrar.'],
        ['<b>El enlace a Instagram del pie apunta a /kreditpa</b>', 'El perfil activo es @kredit_pa. Conviene corregirlo para no mandar visitas a otra cuenta.'],
    ])))

S.append(sec('La estrategia', 'Dos landings: empresas que se afilian y personas que buscan un préstamo',
    p('La landing de empresas trae convenios nuevos. La de personas es solo para el tráfico de Google y redes: <b class="text-slate-800">no pide que la empresa del cliente esté afiliada</b>; la cuota igual se descuenta de su planilla, porque Kredit coordina el descuento directo con la empresa donde trabaja. Así cada landing habla de una sola cosa y cada campaña mide la suya.')
    + cards([('1 · Afiliar', 'Empresas nuevas', 'Google (búsquedas de beneficios para colaboradores), LinkedIn opcional y la landing de empresas con formulario y reunión con un ejecutivo.'),
             ('2 · Activar', 'Colaboradores de afiliadas', 'Kit para RR. HH. con afiches y QR, mensajes internos, WhatsApp a quienes aceptaron y anuncios alrededor de las empresas afiliadas.'),
             ('3 · Captar en Google y redes', 'Personas que buscan un préstamo', 'Landing con calculadora y precalificación para quien llega desde Google, Facebook o Instagram; la cuota se descuenta de su planilla con descuento directo.')])))

S.append(sec('El sistema', 'Del anuncio al vendedor, sin pasos manuales',
    p('Todos los canales llevan a las landings. Las landings entregan a n8n, que decide qué hacer con cada solicitud. El CRM de Kredit recibe solo lo que vale la pena atender, y el resultado de cada contacto vuelve a las plataformas de publicidad.')
    + figure(d_embudo(), 'Nada se pierde entre herramientas: cada lead conserva de dónde vino (campaña, anuncio, palabra clave) hasta el desembolso, para saber cuánto cuesta un préstamo colocado por canal.')
    + callout('Calidad sobre volumen.', 'Un lead que se desembolsa y no paga cuesta más que ningún lead. Por eso la calificación filtra antes del vendedor y, cuando Kredit lo autorice, consulta AgileCheck desde n8n. Este sistema y la plataforma de cobranza que le propusimos comparten la misma base: n8n y sus reglas.')))

S.append(sec('Dos públicos', 'Un mensaje distinto para cada puerta',
    f'''<div class="reveal grid md:grid-cols-2 gap-4">
        <div class="item-card bg-white/70 rounded-2xl p-6 border border-slate-100"><p class="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1.5">Personas</p><h3 class="display text-lg font-bold text-slate-900 mb-3">Quien busca un préstamo en Google</h3>
          <dl class="grid grid-cols-[96px_1fr] gap-x-3 gap-y-2 text-sm"><dt class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 pt-0.5">Busca</dt><dd class="text-slate-700">Rapidez, cuota fija, saber si califica y cuándo le depositan, sin costos ocultos.</dd>
          <dt class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 pt-0.5">Canales</dt><dd class="text-slate-700">Google (búsqueda con intención), Meta e Instagram, y WhatsApp para atenderlos.</dd>
          <dt class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 pt-0.5">Oferta</dt><dd class="text-slate-700">Calculadora de cuota quincenal y precalificación en 2 minutos, con descuento directo de planilla.</dd>
          <dt class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 pt-0.5">Se mide por</dt><dd class="text-slate-700">Costo por lead calificado y por préstamo desembolsado.</dd></dl></div>
        <div class="item-card bg-white/70 rounded-2xl p-6 border border-slate-100"><p class="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1.5">Empresas</p><h3 class="display text-lg font-bold text-slate-900 mb-3">RR. HH. y finanzas que quieren el convenio</h3>
          <dl class="grid grid-cols-[96px_1fr] gap-x-3 gap-y-2 text-sm"><dt class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 pt-0.5">Buscan</dt><dd class="text-slate-700">Un beneficio para sus colaboradores, sin carga administrativa ni riesgo para la empresa.</dd>
          <dt class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 pt-0.5">Canales</dt><dd class="text-slate-700">Google (búsquedas de beneficios y préstamos para colaboradores), Meta con público empresarial, LinkedIn opcional.</dd>
          <dt class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 pt-0.5">Oferta</dt><dd class="text-slate-700">Cómo funciona el convenio, qué hace la empresa y qué hace Kredit, y una reunión con un ejecutivo.</dd>
          <dt class="text-[11px] font-semibold uppercase tracking-wide text-slate-500 pt-0.5">Se mide por</dt><dd class="text-slate-700">Reuniones agendadas, convenios firmados y colaboradores que solicitan.</dd></dl></div>
      </div>'''
    + p('Una empresa afiliada multiplica: cada convenio abre la puerta a todos sus colaboradores, con la cuota descontada por planilla. Por eso la landing de empresas tiene su propia campaña y su propio seguimiento.', 'mt-5 text-xs')))

S.append(B.block_landings(money=money, u=u, shots_html='', demo_b2c=DEMO_B2C, demo_b2b=DEMO_B2B, buttons=buttons))

S.append(sec('Calificación automática', 'Su vendedor solo atiende lo que vale la pena',
    figure(d_calif(), 'El cliente nunca ve un "aprobado" ni un "rechazado": ve "Solicitud recibida" y el siguiente paso. En producción el puntaje se calcula en n8n, así que las reglas no quedan visibles en la página, y la decisión de crédito sigue siendo de Kredit.', 'mt-0')
    + table(['Criterio (ejemplo)', 'Personas', 'Empresas'], [
        ['<b>Empresa</b>', 'Trabaja en una empresa con planilla en Panamá (Kredit coordina el descuento directo)', 'Empresa formal con planilla en Panamá'],
        ['<b>Perfil</b>', 'Antigüedad en la empresa y tipo de contrato', 'Sector y número de colaboradores'],
        ['<b>Capacidad</b>', 'Ingreso neto mensual frente al monto y plazo pedidos', 'Cargo del contacto (decide o influye)'],
        ['<b>Vínculo</b>', 'Cliente actual o referido por un cliente o una empresa', 'Correo corporativo y RUC válidos'],
        ['<b>Cobertura</b>', 'Provincia donde Kredit atiende', 'Provincia y fecha deseada de inicio'],
        ['<b>Riesgo</b>', 'Consulta de AgileCheck con autorización (opcional)', '—']])))

BENCH = table(['Escenario', 'Leads Google', 'Leads Meta', 'Leads al mes', 'Calificados'], [
    ['Arranque', '18–47', '40–133', '58–180', '15–72'],
    ['Recomendada', '30–80', '75–250', '105–330', '26–132'],
    ['Escala', '50–133', '125–417', '175–550', '44–220']], num=(1, 2, 3, 4), sub_rows=(1,),
    caption='Supuestos: costo por lead de US$ 15–40 en Google (búsqueda financiera, clics de US$ 1–8 en Panamá) y de US$ 6–20 en Meta (referencias de fintech en Latinoamérica), y entre 25% y 40% de leads calificados en la landing de personas, abierta al público de Google y redes. Los leads de empresas cuestan más, pero cada convenio vale por muchos colaboradores. No hay datos públicos específicos de préstamos en Panamá; la cifra real la da el primer mes y se reporta desde la primera semana.')

S.append(B.block_google(money=money, u=u, m=m))
S.append(B.block_meta(money=money, u=u, m=m))

S.append(sec('Inversión publicitaria', 'Cuánto invertir en Google y Meta, y qué esperar',
    p('La gestión (servicios 1 y 2) es lo que hacemos nosotros; la inversión publicitaria es lo que se muestra en anuncios y va directo de las cuentas de Kredit a Google y Meta.')
    + service_card('$', 'Inversión Publicitaria Recomendada · Google + Meta', 'Lo que se muestra en anuncios: va directo a las cuentas de Kredit',
                   money(PAUTA), '/ mes recomendado', ribbon='INVERSIÓN, NO FEE', cls='mt-2 mb-0',
                   text=f'La inversión va directo a Google ({money(1200)}) y a Meta ({money(1500)}) desde las cuentas de Kredit; no pasa por nosotros. Sugerimos empezar con {money(PAUTA)} al mes y subir a {money(4500)} solo cuando el costo por lead calificado esté en meta.')
    + figure(d_pauta(), 'Montos mensuales en dólares, aparte de la gestión. Pase el cursor sobre cada barra para ver el detalle.')
    + table(['Escenario', 'Google Ads', 'Meta Ads', 'Total al mes'],
            [[esc(n), money(g), money(mm), money(g + mm)] for n, g, mm in SCEN], num=(1, 2, 3), sub_rows=(1,))
    + h3('Qué se puede esperar desde el mes 2 (estimación)')
    + BENCH.replace('class="reveal mt-6"', 'class="reveal mt-0"', 1)
    + callout('', 'Los primeros 30 días son de aprendizaje: las plataformas necesitan conversiones para optimizar. Recomendamos un mínimo de 3 meses de pauta antes de juzgar el canal.', 'blue')))

S.append(billing_box('Cómo se cobra la pauta', 'Dos costos distintos, y conviene no confundirlos.',
    ('💼 Nuestro fee de gestión', 'Lo que nos pagan a nosotros por crear, optimizar y reportar las campañas (servicios 1 y 2). Es lo único de la pauta que factura Elemento Web.'),
    ('📢 La inversión publicitaria', 'El dinero que se muestra en anuncios. Va directo a Google y Meta desde las cuentas de Kredit; no la intermediamos ni le aplicamos margen.'),
    'Las cuentas, campañas y datos de Google Ads y Meta son de Kredit desde el día uno.'))

S.append(sec('Cumplimiento en la publicidad', 'Anuncios de crédito pensados para cumplir las políticas',
    p('Google, Meta y la ley panameña tratan la publicidad de crédito con reglas propias. Las cumplimos desde el diseño de anuncios y landings, y su oficial de cumplimiento aprueba cada pieza antes de publicarse.')
    + checks([('Google Ads', 'Solo admite préstamos personales con plazo de pago de 61 días o más. La landing debe mostrar, sin clics: plazo mínimo y máximo, tasa anual máxima, un ejemplo representativo del costo total y la dirección física. Hoy Panamá no figura entre los países que exigen verificación de anunciante financiero; lo revisamos al crear la cuenta.'),
              ('Meta Ads', 'Prohíbe anunciar adelantos de nómina y préstamos a 90 días o menos. El convenio con empresas se comunica como préstamo con descuento directo a varios meses, nunca como "adelanto de salario". Si Meta aplica a Panamá la categoría especial de servicios financieros, la segmentación se ajusta (sin edad, género ni públicos similares).'),
              ('Plazos que se pueden anunciar', 'Con préstamos de B/. 50 a B/. 3,000, solo se anuncian plazos de más de 90 días (Meta) y de 61 días o más (Google). Si Kredit ofrece plazos más cortos, se atienden por los canales propios, sin pauta.'),
              ('Ley panameña', 'La publicidad de una financiera debe indicar la tasa de interés efectiva (Ley 42 de 2001, modificada por la Ley 33 de 2002, y Decreto Ejecutivo 213 de 2010), ser veraz y decir su vigencia (Ley 45 de 2007).'),
              ('Datos y referencias de crédito', 'Casillas separadas y sin marcar para el aviso de privacidad (Ley 81 de 2019), la autorización para consultar referencias de crédito (Ley 24 de 2002) y el permiso para escribir por WhatsApp.'),
              ('Confianza', 'Razón social, licencia del MICI (Resolución No. 638 de 2025), una sola dirección, canales oficiales y la frase "Kredit nunca cobra por adelantado para aprobar un préstamo": en Panamá abundan las financieras falsas en redes y el cliente lo sabe.')], cols=1)
    + p('Resumen de políticas públicas a octubre de 2026, no es asesoría legal: el texto final de anuncios y avisos lo valida su asesor legal o de cumplimiento.', 'mt-4 text-xs')))

S.append(sec('WhatsApp marketing', 'Envíos masivos a su base, por la vía oficial',
    p('Campañas a su base de clientes y prospectos por la API oficial de WhatsApp Business: renovaciones, clientes que pueden volver a solicitar y empresas afiliadas. Cada respuesta llega a una bandeja compartida y, si es un lead, entra al mismo flujo de calificación.')
    + checks([('Incluye', '5,000 mensajes al mes, hasta 5 usuarios, bandeja multiusuario, plantillas con variables, campañas programadas con imágenes, segmentos y panel de métricas.'),
              ('Consentimiento', 'Solo se escribe a contactos que aceptaron recibir mensajes de Kredit, con opción de baja en cada envío. Así se cuida el número y la calidad de la cuenta.'),
              ('Solo ventas y atención', 'La política de WhatsApp Business prohíbe usarlo para cobrar deudas, aun con licencia. Por eso la plataforma de cobranza que le propusimos cobra por SMS, correo y voz, y el número de ventas no se pone en riesgo.'),
              ('Tarifas de Meta', 'Meta cobra cada mensaje de marketing entregado. Para Panamá, las tarifas publicadas a octubre de 2026 rondan US$ 0.074–0.085 por mensaje: 5,000 mensajes serían unos US$ 370–425 al mes, que se facturan aparte, a costo y según el volumen real.'),
              ('Política de WhatsApp', 'Permite promocionar préstamos de una entidad con licencia, pero no adelantos de nómina, préstamos de día de pago ni cobranza, y no se debe pedir la cédula completa por chat: los datos sensibles van en la landing.')])))

PILLARS = table(['Pilar', 'Para qué', 'Peso en el mes'], [
        ['<b>Educación financiera</b>', 'Responder dudas reales: cuota, plazo, cómo mejorar su historial. Genera confianza y búsquedas.', '<span class="meter" style="width:60px"></span>30%'],
        ['<b>Oferta y calculadora</b>', 'Llevar a la precalificación con un mensaje claro y la información de costo.', '<span class="meter" style="width:50px"></span>25%'],
        ['<b>Confianza</b>', 'Quién es Kredit, cómo protege los datos, cómo identificar préstamos falsos.', '<span class="meter" style="width:40px"></span>20%'],
        ['<b>Casos y testimonios</b>', 'Historias reales, con autorización, de clientes y empresas afiliadas.', '<span class="meter" style="width:30px"></span>15%'],
        ['<b>Empresas</b>', 'El convenio como beneficio para colaboradores, para RR. HH. y gerencias.', '<span class="meter" style="width:20px"></span>10%']],
        caption='16 publicaciones (imágenes, carruseles y reels) y 12 historias al mes. El perfil de Instagram se audita al iniciar: biografía, enlaces, historias destacadas y respuesta a mensajes.')
S.append(B.block_instagram(money=money, m=m, pillars_table=PILLARS))

S.append(B.block_web(money=money, u=u, m=m, demo_web=DEMO_WEB, buttons=buttons, cards_html='', vps_html=''))

S.append(sec('Medición', 'Un tablero con lo que importa al negocio',
    table(['Indicador', 'Qué responde'], [
        ['<b>Costo por lead calificado</b>', '¿Cuánto cuesta una solicitud que vale la pena atender, por canal y campaña?'],
        ['<b>Costo por préstamo desembolsado</b>', '¿Cuánto cuesta colocar un préstamo con cada canal? Es la cifra para decidir dónde invertir.'],
        ['<b>Tasa de calificación</b>', '¿Qué parte de los leads cumple el perfil? Si baja, se ajustan anuncios y segmentación.'],
        ['<b>Tiempo a primer contacto</b>', '¿Los vendedores responden en menos de 5 minutos? Un lead atendido tarde se enfría.'],
        ['<b>Convenios y reuniones</b>', '¿Cuántas empresas pidieron reunión y cuántas firmaron?'],
        ['<b>Tráfico orgánico y menciones</b>', '¿Cuántas solicitudes llegan por Google sin pagar y por asistentes de IA?']], cls='mt-0',
        caption='Reporte mensual con recomendaciones y una reunión de resultados. El tablero se actualiza solo y Kredit lo puede ver cuando quiera.')))

S.append(sec('Cronograma', 'Pauta en vivo en la semana 4',
    figure(d_crono(), 'El plazo corre desde que tenemos los accesos y las reglas de calificación. La pauta no sale sin la medición funcionando: invertir sin medir es pagar a ciegas.', 'mt-0')))

PLANS = [
    {'tag': 'Captación', 'name': 'Esencial', 'for': 'Landings, automatización, medición y pauta gestionada.', 'price': money(ESENCIAL_U),
     'price_note': f'pago único · más {money(ESENCIAL_M)} al mes y VPS {money(VPS)} al año',
     'items': ['Landings de préstamos y empresas (A, B)', 'n8n + CRM + calificación (C)', 'Medición completa (D)', 'VPS para landings y n8n', 'Google y Meta: creación y gestión (E, F, 1, 2)']},
    {'tag': 'Captación + contenido', 'name': 'Crecimiento', 'rec': True, 'for': 'Lo esencial más activación de afiliadas, Instagram y WhatsApp.', 'price': money(CREC_U),
     'price_note': f'pago único · más {money(RECOM_M)} al mes y VPS {money(VPS)} al año',
     'items': ['Todo el plan Esencial', 'Kit de activación para empresas afiliadas (H)', 'Contenido mensual de Instagram (3)', 'WhatsApp marketing masivo (4)']},
    {'tag': 'Todo incluido', 'name': 'Integral', 'for': 'Crecimiento más la web nueva, SEO + GEO y mantenimiento.', 'price': money(INTEGRAL_U),
     'price_note': f'pago único · más {money(INTEGRAL_M)} al mes y VPS {money(VPS)} al año',
     'items': ['Todo el plan Crecimiento', 'Rediseño multipágina de la web (G)', 'SEO + GEO avanzado (5)', 'Mantenimiento web Prioritario (6)']},
]

cards_unico = ''.join(service_card(k, ti, esc(d), money(v), 'Pago único', cls='mb-4') for k, ti, d, v in UNICO)
cards_mensual = ''.join(service_card(k, ti, esc(d), money(v), '/ mes', cls='mb-4') for k, ti, d, v in MENSUAL)
cards_mensual += service_card('VPS', 'Servidor VPS de Elemento Web', 'Landings, n8n y web; recursos dedicados, respaldos y monitoreo. Va en los tres planes.', money(VPS), '/ año', cls='mb-0')

S.append(sec('Inversión', 'Tres formas de empezar', id='inversion', cls='mb-14 svc',
    inner=packages(PLANS, 'mt-0')
    + p(f'La inversión publicitaria (escenario recomendado: {money(PAUTA)} al mes) y las tarifas de Meta por mensaje de WhatsApp (unos US$ 370–425 al mes si se usan los 5,000 mensajes) van aparte, a costo. Ejemplo con el plan Crecimiento y la pauta recomendada: US$ 1,700 + US$ 2,700 de pauta + unos US$ 400 de mensajes ≈ US$ 4,800 al mes.', 'mt-5 mb-0 text-xs')))

S.append(sec('Lo que incluye cada servicio', 'Pago único: implementación',
    '<div class="svc-grid">' + cards_unico + '</div>'
    + '<div class="reveal sec-head flex items-center gap-3 mt-10 mb-6"><h2 class="display text-2xl font-bold text-slate-900">Servicios mensuales</h2><div class="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent"></div></div>'
    + '<div class="svc-grid">' + cards_mensual + '</div>'))

resumen_inner = (
    sum_head('Pago único · plan Crecimiento')
    + '<div class="space-y-0.5 text-sm mb-3">'
    + sum_row('Landings, automatización, medición y campañas (A–F)', money(ESENCIAL_U))
    + sum_row('Kit de activación para empresas afiliadas (H)', money(u['H']))
    + sum_total('Total pago único', money(CREC_U)) + '</div>'
    + sum_head('Pagos mensuales', 'bg-violet-400', 'mt-8')
    + '<div class="grid md:grid-cols-2 gap-8"><div>'
    + '<h4 class="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">A Elemento Web · servicios</h4><div class="space-y-0.5 text-sm">'
    + sum_row('Gestión de Google Ads (1)', money(m['1'])) + sum_row('Gestión de Meta Ads con artes (2)', money(m['2']))
    + sum_row('Contenido de Instagram (3)', money(m['3'])) + sum_row('WhatsApp marketing (4)', money(m['4']))
    + sum_total('Subtotal servicios', money(RECOM_M), '/mes') + '</div></div><div>'
    + '<h4 class="text-xs font-semibold text-blue-300 uppercase tracking-wider mb-3">Inversión y consumo, a costo</h4><div class="space-y-0.5 text-sm">'
    + sum_row('Google Ads', money(1200)) + sum_row('Meta Ads', money(1500))
    + sum_row('Mensajes de WhatsApp (tarifa de Meta)', '≈ US$ 370–425')
    + sum_total('Subtotal a costo', '≈ US$ 3,100', '/mes')
    + '<p class="text-[11px] text-blue-300/70">La pauta no la facturamos nosotros: se carga directo en las cuentas de Kredit.</p></div></div></div>'
    + '<div class="flex justify-between items-center gap-4 py-3 mt-4 border-t border-white/15"><span class="font-bold text-blue-200">Total mensual combinado</span><span class="text-xl font-bold text-blue-300 whitespace-nowrap">≈ US$ 4,800 <span class="text-xs font-normal text-blue-300/70">/mes</span></span></div>'
    + sum_row('Servidor VPS de Elemento Web', f'{money(VPS)} al año', last=True)
    + f'<p class="text-[11px] text-blue-300/70 mt-3">Los otros planes: Esencial {money(ESENCIAL_U)} + {money(ESENCIAL_M)} al mes · Integral {money(INTEGRAL_U)} + {money(INTEGRAL_M)} al mes. VPS {money(VPS)} al año en los tres.</p>')

S.append(summary(resumen_inner, 'Para arrancar hoy · a Elemento Web', money(CREC_U // 2),
    f'50% del pago único del plan Crecimiento. El otro 50% ({money(CREC_U // 2)}) se paga al lanzar la pauta, y la mensualidad de {money(RECOM_M)} se factura desde el lanzamiento.',
    f'Hola, queremos aceptar la propuesta {REF} de marketing digital para Kredit (plan Crecimiento).',
    'Precios en USD, sin ITBMS (7%); se aplicará según corresponda. La inversión publicitaria no pasa por nosotros, por lo que no le aplicamos ITBMS de nuestra parte.'))

S.append(sec('Para considerar', 'Lo que suele quedar fuera, y no debería',
    '<ol class="reveal space-y-0 max-w-3xl">' + ''.join(
        f'<li class="flex gap-4 py-3.5 border-t border-slate-200/80 text-sm text-slate-600 leading-relaxed"><span class="num-badge w-8 h-8 rounded-lg grid place-items-center text-white text-xs font-bold shrink-0">{i}</span><span>{x}</span></li>'
        for i, x in enumerate([
            '<b class="text-slate-900">Requisitos para el público de Google y redes.</b> La landing de personas no pide empresa afiliada: Kredit coordina el descuento directo con la empresa de cada cliente. Antes de lanzar la pauta conviene fijar antigüedad, tipo de contrato y salario mínimo, para que el anuncio no pague clics de quien no puede solicitar.',
            '<b class="text-slate-900">Activar a las empresas que ya están afiliadas.</b> Es el lead más barato y de mejor calidad: sus colaboradores ya califican. Suele quedar fuera porque no se ve como "marketing".',
            '<b class="text-slate-900">El formulario para afiliar empresas.</b> El de hoy solo pide nombre, correo, teléfono y mensaje; para calificar un convenio hace falta saber la empresa, su tamaño y quién decide.',
            '<b class="text-slate-900">Vendedores listos antes de la pauta.</b> El mejor anuncio se pierde si el lead espera horas. Acordemos un tiempo de respuesta, horarios y quién atiende cada tipo de lead.',
            '<b class="text-slate-900">Reglas de calificación escritas.</b> Quién califica, con qué ingreso, plazo, monto y cobertura. Sin ellas, el CRM se llena de solicitudes que no se pueden aprobar.',
            '<b class="text-slate-900">Aprobación de anuncios por cumplimiento.</b> Los anuncios de crédito deben mostrar el costo y no prometer aprobación. Su oficial de cumplimiento revisa textos y artes antes de publicar.',
            '<b class="text-slate-900">Consentimientos y base de WhatsApp.</b> Solo se envían campañas a contactos que aceptaron. Si la base actual no tiene ese registro, empezamos por pedirlo.',
            '<b class="text-slate-900">La señal de vuelta desde el CRM.</b> Sin marcar en el CRM qué lead calificó y cuál se desembolsó, Google y Meta optimizan por volumen y no por calidad.',
            '<b class="text-slate-900">Confianza visible.</b> Con tantos préstamos falsos en redes, la licencia del MICI, una sola dirección, los canales oficiales y las reseñas reales venden tanto como la tasa.'], 1)) + '</ol>'
    + h3('Qué más podemos sumar', 'mt-12 mb-4')
    + table(['Opcional', 'Para qué', 'Precio'], [
        ['<b>Asistente de IA en WhatsApp para precalificar 24/7</b>', 'Responde preguntas, calcula la cuota y precalifica de noche y en fin de semana, cuando no hay vendedores.', 'desde US$ 349 al mes'],
        ['<b>LinkedIn Ads para empresas</b>', 'Llegar directo a gerentes de RR. HH. y finanzas para el programa de convenios.', 'US$ 300 al mes de gestión'],
        ['<b>Programa de referidos</b>', 'Clientes y empresas afiliadas recomiendan con un enlace propio que el CRM reconoce.', 'se cotiza según alcance'],
        ['<b>Video testimonial</b>', 'Clientes y empresas reales contando su experiencia, para anuncios y redes.', 'se cotiza según alcance'],
        ['<b>Plataforma de cobranza con IA</b>', 'La propuesta EW-KRE-2026-01: usa el mismo n8n y las mismas reglas, y cobra por SMS, correo y voz, sin poner en riesgo el WhatsApp de ventas.', 'según su propuesta']], num=(2,), cls='mt-0')))

S.append(sec('Para avanzar', 'Lo que necesitamos de Kredit',
    cards([('Accesos', 'Cuentas y plataformas', bullets(['Google Ads, Google Analytics y Search Console (como administrador)', 'Meta Business Suite, cuenta publicitaria e Instagram',
                                                       'Dominio y DNS de kredit.com.pa, y acceso al WordPress', 'CRM: nombre, acceso a su API, campos y etapas', 'Número de WhatsApp Business y verificación de la empresa en Meta'])),
           ('Negocio', 'Reglas y productos', bullets(['Productos: montos, plazos, tasa y costo total, requisitos', 'Reglas de calificación, cobertura por provincia y uso de AgileCheck y la APC',
                                                     'Cómo funciona el convenio, la lista de empresas afiliadas y los requisitos para personas que llegan por Google y redes', 'Vendedores: nombres, horarios y tiempo de respuesta', 'Presupuesto mensual de pauta y medio de pago a las plataformas'])),
           ('Marca y legal', 'Contenido y cumplimiento', bullets(['Logo, colores, tipografías y fotos de marca', 'Aviso de privacidad y autorización de referencias de crédito', 'Datos de licencia, dirección oficial y textos legales obligatorios',
                                                                 'Persona de cumplimiento que aprueba anuncios', 'Base de contactos con su consentimiento para WhatsApp', 'Testimonios y casos con autorización']))], 3, 'mt-0')))

S.append(sec('Riesgos del plan', 'Lo que puede frenar los resultados',
    table(['Riesgo', 'Cómo lo evitamos'], [
        ['Las plataformas rechazan o limitan anuncios de crédito', 'Anuncios y landings con la información de costo que exigen, verificación del anunciante al iniciar y revisión de cumplimiento antes de publicar.'],
        ['Muchos leads, pocos aprobables', 'Calificación en el formulario, puntaje en n8n y señal de vuelta desde el CRM para optimizar por calidad.'],
        ['Leads atendidos tarde', 'Aviso inmediato al vendedor, respuesta automática por WhatsApp y alerta si un lead lleva más de 15 minutos sin contacto.'],
        ['El CRM no tiene API o la integración se demora', 'Plan B por correo estructurado o planilla compartida mientras se conecta; el flujo de n8n no cambia.'],
        ['Bloqueo del número de WhatsApp', 'API oficial, solo contactos con consentimiento, opción de baja en cada envío y la cobranza fuera de WhatsApp (va por SMS, correo y voz).']], cls='mt-0')))

S.append(terms([
    ('Pago único', '50% al aprobar y 50% al lanzar la pauta. Tarjeta, transferencia bancaria o Yappy.'),
    ('Servicios mensuales', 'Se facturan por mes adelantado desde el lanzamiento. Plazo mínimo de 3 meses para pauta y contenido.'),
    ('Inversión publicitaria', 'Va directo a Google y Meta desde las cuentas de Kredit; las cuentas, campañas y datos son de Kredit.'),
    ('Propiedad', 'Las landings, la web, los textos, artes y flujos de n8n hechos para Kredit son de Kredit al completar el pago.'),
    ('Datos', 'Los datos de los leads se tratan conforme a la Ley 81 de 2019; firmamos acuerdo de confidencialidad y de tratamiento de datos.'),
    ('Resultados', 'Las cifras de costo por lead son estimaciones de mercado; los resultados reales se reportan cada mes y guían los ajustes.'),
    ('Validez', 'Esta propuesta vale hasta el 10 de noviembre de 2026. Precios en USD sin ITBMS (7%).')]))

S.append(cta('¿Empezamos por el taller de calificación? 🚀',
    'Una sesión de una hora para definir quién califica y cómo se reparte entre sus vendedores. Con eso arrancamos las landings y la medición.',
    f'Hola, quiero conversar sobre la propuesta {REF} de marketing digital para Kredit.',
    f'Propuesta {REF}: marketing digital Kredit', f'Hola, queremos avanzar con la propuesta {REF} de marketing digital para Kredit.',
    extra=[('Ver la landing de préstamos', DEMO_B2C)], wa_label='Conversar por WhatsApp', mail_label='Avanzar por correo'))

S.append(sources('Políticas de Google Ads sobre servicios financieros y préstamos personales (support.google.com/adspolicy); normas de publicidad de Meta sobre productos financieros (transparency.meta.com); Política de Mensajería de WhatsApp Business (actualizada el 23 de septiembre de 2026) y precios por mensaje vigentes desde octubre de 2026; Ley 42 de 2001 y Ley 33 de 2002 (mici.gob.pa); Ley 45 de 2007 (acodeco.gob.pa); Decreto Ejecutivo 213 de 2010; Ley 81 de 2019 y Decreto Ejecutivo 285 de 2021 (antai.gob.pa); referencias de costo por clic en Panamá y de costo por lead de fintech en Latinoamérica de fuentes de la industria. Los precios de Elemento Web son en dólares, sin ITBMS. Las cifras de inversión y costo por lead son estimaciones de mercado sujetas a los resultados de los primeros 30 días. El perfil de Instagram y el sitio kredit.com.pa (página principal y política de privacidad) se revisaron el 12 de octubre de 2026; la auditoría técnica completa se hace al iniciar.'))

body = '\n'.join(S)
html = page(title='Marketing digital y captación de leads · Propuesta para Kredit — elementoweb.com',
            doc_type='Propuesta · Marketing digital y captación', client='KREDIT',
            headline='Más solicitudes calificadas, directo a sus vendedores',
            subtitle='Un sistema completo de captación para personas y empresas: publicidad en Google y Meta, dos landings con formularios inteligentes, calificación automática con n8n, entrega al CRM de Kredit, WhatsApp marketing, contenido de Instagram y una web nueva, mejor posicionada en Google y en los asistentes de IA.',
            prepared_for='Kredit · Gerencia General', prepared_sub='CREDU HOLDINGS, S.A.',
            date='11 de octubre de 2026', ref=REF, valid='10 de noviembre de 2026',
            body=body, client_footer='Kredit', wa_consulta=f'Hola, tengo una consulta sobre la propuesta {REF} de marketing digital para Kredit.',
            hero=B.hero(ref=REF, date='11 oct 2026', valid='10 nov 2026', money=money), extra_css=B.CSS, extra_fonts=B.ROBOTO)
assert 'id="inversion"' in html
assert '@@' not in html
write(OUT_DIR / 'index.html', html)
print('ok', OUT_DIR / 'index.html', len(html), 'esencial', ESENCIAL_U, ESENCIAL_M, 'crecimiento', CREC_U, RECOM_M, 'integral', INTEGRAL_U, INTEGRAL_M)
