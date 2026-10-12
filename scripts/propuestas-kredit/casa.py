"""Plantilla de la casa (Elemento Web) para propuestas: Tailwind por CDN, contenedor glass,
encabezado oscuro con orbes y rejilla, secciones con línea degradada, service-cards numeradas,
resumen de inversión oscuro, condiciones, CTA y pie. Referencias:
public/propuestas/tramitapa-entrega/ y public/propuestas/max-impresiones-marketing-digital/.

También trae las primitivas SVG de los diagramas, con las reglas de la skill diagram-design
(conectores ortogonales con esquinas redondeadas, flechas antes que nodos, etiquetas con
máscara, 1–2 acentos por figura) y los tokens de la casa."""
import html as _html
import pathlib

ROOT = pathlib.Path(__file__).resolve().parents[2]  # raíz del repo elementoweb
WA = '50761622787'
WA_SHOW = '6162-2787'
MAIL = 'info@elementoweb.com'


def esc(s):
    return _html.escape(str(s), quote=False)


def q(s):
    """Texto para una URL (wa.me, mailto)."""
    from urllib.parse import quote
    return quote(s, safe='')


def write(path, text):
    path = pathlib.Path(path)
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(text, encoding='utf-8', newline='\n')


# =====================================================================================
# HTML
# =====================================================================================

FONTS = ('<link rel="preconnect" href="https://fonts.googleapis.com">\n'
         '    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n'
         '    <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,600;12..96,700;12..96,800&family=Inter:wght@400;500;600;700&family=Geist+Mono:wght@400;500;600&display=swap" rel="stylesheet">')

CSS = r"""
        :root { --brand: #3b82f6; --brand-deep: #1e3a8a; --violet: #7c3aed; --ink: #0f172a; }
        * { -webkit-font-smoothing: antialiased; }
        body {
            font-family: 'Inter', sans-serif;
            color: #1e293b;
            background: #eef2fb;
            background-image:
                radial-gradient(60rem 60rem at 110% -10%, rgba(124,58,237,0.10), transparent 60%),
                radial-gradient(50rem 50rem at -15% 10%, rgba(59,130,246,0.12), transparent 55%),
                radial-gradient(45rem 45rem at 50% 120%, rgba(37,99,235,0.08), transparent 60%);
            background-attachment: fixed;
        }
        h1, h2, h3, h4, .display { font-family: 'Bricolage Grotesque', 'Inter', sans-serif; letter-spacing: -0.02em; }
        .gradient-text {
            background: linear-gradient(100deg, #60a5fa, #3b82f6 45%, #7c3aed);
            -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
        }
        .glass {
            background: rgba(255,255,255,0.72);
            backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px);
            border: 1px solid rgba(255,255,255,0.9);
            box-shadow: 0 1px 2px rgba(15,23,42,0.04), 0 20px 40px -24px rgba(30,58,138,0.28);
        }
        .service-card { position: relative; transition: transform .35s cubic-bezier(.2,.7,.3,1), box-shadow .35s ease; overflow: hidden; }
        .service-card::before {
            content: ''; position: absolute; inset: 0; border-radius: inherit; padding: 1px;
            background: linear-gradient(135deg, rgba(96,165,250,.6), rgba(124,58,237,.5));
            -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor; mask-composite: exclude;
            opacity: 0; transition: opacity .35s ease; pointer-events: none;
        }
        .service-card:hover { transform: translateY(-6px); box-shadow: 0 30px 60px -30px rgba(30,58,138,0.45); }
        .service-card:hover::before { opacity: 1; }
        .item-card { position: relative; transition: transform .35s cubic-bezier(.2,.7,.3,1), box-shadow .35s ease; overflow: hidden; }
        .item-card:hover { transform: translateY(-4px); box-shadow: 0 24px 48px -28px rgba(30,58,138,0.35); }
        .num-badge { background: linear-gradient(135deg, #60a5fa, #3b82f6 55%, #7c3aed); box-shadow: 0 10px 22px -8px rgba(59,130,246,0.7); }
        .check-badge { background: linear-gradient(135deg, #34d399, #10b981); box-shadow: 0 8px 18px -6px rgba(16,185,129,0.55); }
        .reveal { opacity: 0; transform: translateY(22px); transition: opacity .7s ease, transform .7s cubic-bezier(.2,.7,.3,1); }
        .reveal.in { opacity: 1; transform: none; }
        @keyframes float1 { 0%,100%{ transform: translate(0,0) scale(1);} 50%{ transform: translate(20px,-16px) scale(1.08);} }
        @keyframes float2 { 0%,100%{ transform: translate(0,0) scale(1);} 50%{ transform: translate(-24px,14px) scale(1.12);} }
        .orb1 { animation: float1 11s ease-in-out infinite; }
        .orb2 { animation: float2 14s ease-in-out infinite; }
        @keyframes shine { to { background-position: 200% center; } }
        .shine {
            background: linear-gradient(90deg,#93c5fd,#e0e7ff,#93c5fd,#c4b5fd);
            background-size: 200% auto;
            -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;
            animation: shine 5s linear infinite;
        }
        .price-pill { background: linear-gradient(135deg,#eff6ff,#eef2ff); border:1px solid #dbeafe; }
        .wa-float { box-shadow: 0 14px 30px -8px rgba(22,163,74,0.6); transition: transform .25s ease, box-shadow .25s ease; }
        .wa-float:hover { transform: translateY(-3px) scale(1.04); }
        @keyframes waPulse { 0%{ box-shadow:0 0 0 0 rgba(34,197,94,.5);} 70%{ box-shadow:0 0 0 16px rgba(34,197,94,0);} 100%{ box-shadow:0 0 0 0 rgba(34,197,94,0);} }
        .wa-pulse { animation: waPulse 2.4s infinite; }
        .btn-primary {
            background: linear-gradient(135deg,#3b82f6,#7c3aed);
            transition: transform .2s ease, box-shadow .2s ease, filter .2s ease;
            box-shadow: 0 14px 28px -10px rgba(59,130,246,0.7);
        }
        .btn-primary:hover { transform: translateY(-2px); filter: brightness(1.05); box-shadow: 0 20px 34px -10px rgba(124,58,237,0.6); }
        .section-tag { background: linear-gradient(135deg,#0b1220,#1e3a8a); }
        /* propios de las propuestas largas */
        .tbl { width: 100%; border-collapse: collapse; font-size: 13.5px; }
        .tbl th { text-align: left; font-size: 11px; font-weight: 600; letter-spacing: .06em; text-transform: uppercase; color: #64748b; background: #f8fafc; padding: 10px 14px; border-bottom: 1px solid #e2e8f0; }
        .tbl td { padding: 11px 14px; border-top: 1px solid #f1f5f9; vertical-align: top; color: #475569; line-height: 1.5; }
        .tbl td b { color: #0f172a; font-weight: 600; }
        .tbl td small { display: block; color: #64748b; font-size: 12.5px; margin-top: 2px; }
        .tbl .n { text-align: right; white-space: nowrap; font-variant-numeric: tabular-nums; }
        .tbl tr.sub td { background: #eff6ff; color: #1e3a8a; font-weight: 600; }
        .figure svg { display: block; width: 100%; height: auto; min-width: 620px; }
        .ph { background:#fef9c3; border:1px dashed #ca8a04; color:#854d0e; border-radius:6px; padding:1px 7px; font-weight:600; white-space:nowrap; -webkit-text-fill-color:#854d0e; }
        .meter { display:inline-block; height:8px; border-radius:4px; background:linear-gradient(90deg,#3b82f6,#7c3aed); vertical-align:middle; margin-right:8px; }
        .shot img { display:block; width:100%; height:auto; }
        @page { size: Letter; margin: 12mm 0; }
        @page :first { margin-top: 0; }
        @media print {
            body { background: #fff; }
            .no-print { display: none !important; }
            .reveal { opacity:1 !important; transform:none !important; transition:none !important; }
            main { box-shadow:none !important; margin: 0 !important; max-width: none !important; border-radius: 0 !important; border: 0 !important; background: #fff !important; }
            .glass { backdrop-filter: none !important; -webkit-backdrop-filter: none !important; background: #fff !important; box-shadow: none !important; border-color: #e2e8f0 !important; }
            .service-card, .item-card { box-shadow: none !important; }
            .orb1, .orb2, .shine { animation: none !important; }
            .avoid, .service-card, .item-card, figure, .tbl tr, .terms p { break-inside: avoid; }
            .sec-head { break-inside: avoid; break-after: avoid; }
            .sec-head + * { break-before: avoid; }
            .shine { background: none !important; -webkit-text-fill-color: #c7d2fe !important; color: #c7d2fe !important; }
            .gradient-text { background: none !important; -webkit-text-fill-color: #4338ca !important; color: #4338ca !important; }
            .svc-grid { display: grid !important; grid-template-columns: 1fr 1fr; gap: 10px; }
            .svc-grid .service-card { margin: 0 !important; padding: 12px 14px !important; }
            .svc-grid .service-card p { line-height: 1.35 !important; }
            section.mb-14 { margin-bottom: 36px !important; }
            .py-12 { padding-top: 32px !important; padding-bottom: 32px !important; }
            .svc-grid .service-card h3 { font-size: 15px !important; }
            .svc-grid .service-card .text-2xl { font-size: 18px !important; }
            .svc-grid .service-card .md\:flex-row { flex-direction: column !important; gap: 6px !important; }
            .svc-grid .service-card .md\:text-right { text-align: left !important; padding-left: 3.75rem !important; }
            .sumblock { padding: 22px 26px !important; break-before: page; }
            .sumblock .py-2\.5 { padding-top: 5px !important; padding-bottom: 5px !important; }
            .sumblock .mt-8 { margin-top: 16px !important; }
            .sumblock .text-4xl { font-size: 28px !important; }
            .newpage { break-before: page; }
            .figure svg { min-width: 0; }
            .figure { overflow: visible !important; }
            .fullbleed-footer { break-inside: avoid; }
        }
"""

LOGO_BIG = '''<div class="w-11 h-11 rounded-2xl grid place-items-center shrink-0" style="background:linear-gradient(135deg,#60a5fa,#3b82f6 55%,#7c3aed);box-shadow:0 10px 24px -8px rgba(59,130,246,.7);">
                            <svg width="26" height="26" viewBox="0 0 50 52" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                <path d="M15 38 L25 15 L35 38" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M18.6 30 H31.4" stroke="white" stroke-width="3" stroke-linecap="round"/>
                                <circle cx="25" cy="15" r="3.2" fill="#fff"/>
                                <circle cx="37.5" cy="13" r="2.3" fill="#c4b5fd"/>
                            </svg>
                        </div>'''

ICON_MAIL = '<svg class="w-4 h-4 text-blue-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l9 6 9-6M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>'
WA_PATH = 'M17.5 14.4c-.3-.15-1.7-.85-2-.95-.26-.1-.46-.15-.65.15-.19.28-.74.94-.9 1.13-.17.19-.33.21-.62.07-.29-.15-1.23-.45-2.35-1.44-.87-.78-1.45-1.73-1.62-2.02-.17-.29-.02-.44.13-.59.13-.13.29-.34.43-.5.15-.17.19-.29.29-.48.1-.19.05-.36-.02-.5-.07-.15-.65-1.57-.9-2.15-.24-.57-.48-.49-.65-.5h-.56c-.19 0-.5.07-.76.36-.26.29-1 .98-1 2.4 0 1.41 1.03 2.78 1.17 2.97.14.19 2.02 3.08 4.9 4.32.68.29 1.22.47 1.63.6.69.22 1.31.19 1.81.11.55-.08 1.7-.69 1.94-1.36.24-.67.24-1.24.17-1.36-.07-.12-.26-.19-.55-.34zM12 2C6.48 2 2 6.48 2 12c0 1.77.46 3.43 1.27 4.88L2 22l5.25-1.24A9.96 9.96 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2z'
ICON_CAL = '<svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/></svg>'
ICON_CHECK_CIRCLE = '<svg class="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>'


def wa_icon(cls):
    return f'<svg class="{cls}" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="{WA_PATH}"/></svg>'


def wa_link(text):
    return f'https://wa.me/{WA}?text={q(text)}'


def page(*, title, doc_type, client, headline, subtitle, prepared_for, prepared_sub, date, ref, valid,
         body, client_footer, wa_consulta):
    """Documento completo con encabezado, cuerpo y pie de la casa."""
    return f'''<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="robots" content="noindex, nofollow">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{esc(title)}</title>
    <script src="https://cdn.tailwindcss.com"></script>
    {FONTS}
    <style>{CSS}    </style>
</head>
<body class="text-slate-800 selection:bg-violet-200 selection:text-violet-900">

    <main class="max-w-4xl mx-auto my-6 sm:my-10 glass rounded-[28px] overflow-hidden">

        <!-- ============ HEADER ============ -->
        <header class="relative overflow-hidden text-white px-7 sm:px-10 pt-8 pb-10"
                style="background: linear-gradient(135deg,#0b1220 0%,#122043 45%,#1e3a8a 100%);">
            <div class="orb1 absolute -top-16 -right-10 w-64 h-64 rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(124,58,237,.55),transparent 70%);"></div>
            <div class="orb2 absolute -bottom-24 -left-10 w-72 h-72 rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(59,130,246,.5),transparent 70%);"></div>
            <div class="absolute inset-0 opacity-[0.06]" style="background-image:linear-gradient(rgba(255,255,255,.6) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.6) 1px,transparent 1px);background-size:32px 32px;"></div>

            <div class="relative z-10">
                <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-8 border-b border-white/15">
                    <div class="flex items-center gap-3">
                        {LOGO_BIG}
                        <div class="leading-tight">
                            <p class="display text-lg font-bold tracking-tight">elementoweb<span class="text-violet-300">.com</span></p>
                            <p class="text-[11px] text-blue-200/80 tracking-wide">Desarrollo Web · IA · Automatización</p>
                        </div>
                    </div>
                    <div class="flex flex-wrap gap-x-5 gap-y-1.5 text-sm sm:justify-end">
                        <a href="mailto:{MAIL}" class="flex items-center gap-1.5 text-blue-100 hover:text-white transition">
                            {ICON_MAIL}
                            {MAIL}
                        </a>
                        <a href="https://wa.me/{WA}" target="_blank" rel="noopener" class="flex items-center gap-1.5 text-blue-100 hover:text-white transition">
                            {wa_icon("w-4 h-4 text-green-400")}
                            {WA_SHOW}
                        </a>
                    </div>
                </div>

                <div class="pt-8 flex flex-col md:flex-row md:justify-between md:items-end gap-6">
                    <div>
                        <span class="inline-flex items-center gap-2 text-xs font-semibold tracking-wider uppercase text-blue-200 bg-white/10 border border-white/15 rounded-full px-3 py-1 mb-4">
                            <span class="w-1.5 h-1.5 rounded-full bg-green-400 wa-pulse"></span> {esc(doc_type)}
                        </span>
                        <h1 class="text-4xl sm:text-5xl font-extrabold leading-none mb-4">
                            <span class="shine">{esc(client)}</span>
                        </h1>
                        <p class="display text-lg sm:text-xl font-semibold text-white leading-snug max-w-lg mb-2">{esc(headline)}</p>
                        <p class="text-blue-100/90 max-w-lg text-sm leading-relaxed">{subtitle}</p>
                    </div>
                    <div class="shrink-0 grid gap-3 text-sm">
                        <div class="glass !bg-white/10 !border-white/15 rounded-xl px-4 py-3 text-white">
                            <p class="text-[11px] text-blue-200 uppercase tracking-wider mb-0.5">Preparado para</p>
                            <p class="font-semibold">{esc(prepared_for)}</p>
                            <p class="text-blue-200 text-xs">{esc(prepared_sub)}</p>
                        </div>
                        <div class="flex items-center gap-2 text-blue-200 text-xs justify-end">
                            {ICON_CAL}
                            {esc(date)}
                        </div>
                        <p class="text-blue-200/80 text-[11px] text-right">Ref. {esc(ref)} · válida hasta el {esc(valid)}</p>
                    </div>
                </div>
            </div>
        </header>

        <div class="px-7 sm:px-10 py-12">
{body}
        </div>

        <!-- ============ FOOTER ============ -->
        <footer class="fullbleed-footer px-7 sm:px-10 py-8 text-white relative overflow-hidden" style="background:linear-gradient(135deg,#0b1220,#122043);">
            <div class="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 relative z-10">
                <div class="flex items-center gap-3">
                    <div class="w-9 h-9 rounded-xl grid place-items-center shrink-0" style="background:linear-gradient(135deg,#60a5fa,#3b82f6 55%,#7c3aed);">
                        <svg width="22" height="22" viewBox="0 0 50 52" fill="none" aria-hidden="true"><path d="M15 38 L25 15 L35 38" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><path d="M18.6 30 H31.4" stroke="white" stroke-width="3" stroke-linecap="round"/><circle cx="25" cy="15" r="3.2" fill="#fff"/></svg>
                    </div>
                    <div>
                        <p class="display font-bold">elementoweb<span class="text-violet-300">.com</span></p>
                        <p class="text-[11px] text-blue-200/70">Documento confidencial · Preparado para {esc(client_footer)} · {esc(ref)}</p>
                    </div>
                </div>
                <div class="flex flex-wrap gap-x-5 gap-y-1 text-sm text-blue-100">
                    <a href="mailto:{MAIL}" class="hover:text-white transition">{MAIL}</a>
                    <a href="https://wa.me/{WA}" target="_blank" rel="noopener" class="hover:text-white transition">+507 {WA_SHOW}</a>
                </div>
            </div>
        </footer>
    </main>

    <a href="{wa_link(wa_consulta)}"
       target="_blank" rel="noopener"
       class="wa-float no-print fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-green-500 grid place-items-center wa-pulse"
       aria-label="Escríbenos por WhatsApp">
        {wa_icon("w-7 h-7 text-white")}
    </a>

    <script>
        const io = new IntersectionObserver((entries) => {{
            entries.forEach(e => {{ if (e.isIntersecting) {{ e.target.classList.add('in'); io.unobserve(e.target); }} }});
        }}, {{ threshold: 0.12 }});
        document.querySelectorAll('.reveal').forEach((el, i) => {{
            el.style.transitionDelay = Math.min(i * 40, 200) + 'ms';
            io.observe(el);
        }});
        window.addEventListener('beforeprint', () => document.querySelectorAll('.reveal').forEach(el => el.classList.add('in')));
    </script>
</body>
</html>
'''


# ---------- bloques ----------

def sec(eyebrow, title, inner, *, cls='mb-14', newpage=False, title_html=None):
    """Sección con etiqueta oscura, h2 y línea degradada (formato Max Impresiones)."""
    np = ' newpage' if newpage else ''
    t = title_html if title_html is not None else esc(title)
    tag = f'<span class="section-tag text-white text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full">{esc(eyebrow)}</span>' if eyebrow else ''
    return f'''
            <section class="{cls}{np}">
                <div class="reveal sec-head mb-6">
                    {f'<div class="mb-3">{tag}</div>' if tag else ''}
                    <div class="flex items-center gap-3">
                        <h2 class="display text-2xl font-bold text-slate-900">{t}</h2>
                        <div class="flex-1 h-px bg-gradient-to-r from-blue-200 to-transparent min-w-[2rem]"></div>
                    </div>
                </div>
{inner}
            </section>'''


def h3(title, cls='mt-10 mb-4'):
    return f'<h3 class="reveal sec-head display text-lg font-bold text-slate-900 {cls}">{esc(title)}</h3>'


def p(text, cls='mb-4'):
    return f'<p class="reveal text-sm sm:text-[15px] text-slate-600 leading-relaxed max-w-2xl {cls}">{text}</p>'


def lede(text, cls='mb-4'):
    return f'<p class="reveal text-base text-slate-700 leading-relaxed max-w-2xl {cls}">{text}</p>'


def intro(title_html, paras, chips=None):
    """Bloque inicial centrado (como 'Google busca a quien ya te quiere…')."""
    ps = ''.join(f'<p class="text-slate-600 text-sm sm:text-base leading-relaxed mb-3">{x}</p>' for x in paras)
    ch = ''
    if chips:
        ch = '<div class="flex flex-wrap justify-center gap-2 mt-6">' + ''.join(
            f'<span class="text-xs font-medium text-blue-700 price-pill rounded-full px-3 py-1.5">{esc(c)}</span>' for c in chips) + '</div>'
    return f'''
            <section class="reveal mb-14 text-center max-w-2xl mx-auto">
                <h2 class="display text-2xl sm:text-3xl font-bold text-slate-900 mb-4">{title_html}</h2>
                {ps}
                {ch}
            </section>'''


def stats(items, cls='mt-6'):
    cells = ''.join(
        f'<div class="glass rounded-xl py-4 px-3 text-center"><p class="display text-2xl font-extrabold {"text-red-700" if alert else "text-blue-900"}">{esc(n)}</p>'
        f'<p class="text-[11px] text-slate-500 uppercase tracking-wide leading-snug mt-1">{esc(l)}</p></div>'
        for n, l, *rest in items for alert in [bool(rest and rest[0])])
    return f'<div class="reveal avoid grid grid-cols-2 sm:grid-cols-4 gap-3 {cls}">{cells}</div>'


def cards(items, cols=3, cls='mt-6'):
    """Tarjetas de opción: (etiqueta, título, texto)."""
    grid = {2: 'sm:grid-cols-2', 3: 'md:grid-cols-3'}[cols]
    out = ''.join(f'''<div class="item-card bg-white/70 rounded-2xl p-5 border border-slate-100">
                        <p class="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1.5">{esc(k)}</p>
                        <h3 class="display text-base font-bold text-slate-900 mb-1.5">{esc(t)}</h3>
                        <div class="text-sm text-slate-600 leading-relaxed">{x}</div>
                    </div>''' for k, t, x in items)
    return f'<div class="reveal grid {grid} gap-4 {cls}">{out}</div>'


def checks(items, cols=2, cls='mt-6'):
    """Lista con insignia verde (formato 'Completado y entregado'): (título, texto)."""
    grid = 'sm:grid-cols-2' if cols == 2 else ''
    out = ''.join(f'''<div class="item-card avoid bg-white/70 rounded-2xl p-5 border border-slate-100 flex gap-4">
                        <div class="check-badge w-9 h-9 rounded-xl grid place-items-center text-white font-bold shrink-0" aria-hidden="true">✓</div>
                        <div><h3 class="display text-[15px] font-bold text-slate-900 mb-1">{esc(t)}</h3><p class="text-sm text-slate-600 leading-relaxed">{x}</p></div>
                    </div>''' for t, x in items)
    return f'<div class="reveal grid {grid} gap-4 {cls}">{out}</div>'


def bullets(items):
    return '<ul class="space-y-2 text-sm text-slate-600">' + ''.join(
        f'<li class="flex gap-2"><span class="text-blue-500 mt-0.5" aria-hidden="true">▸</span><span>{x}</span></li>' for x in items) + '</ul>'


def table(head, rows, *, num=(), sub_rows=(), cls='mt-6', caption=None):
    """Tabla con el estilo de la casa. head: lista de encabezados; rows: listas de celdas (HTML)."""
    th = ''.join(f'<th{" class=\"n\"" if i in num else ""}>{h}</th>' for i, h in enumerate(head))
    trs = ''
    for r, row in enumerate(rows):
        tds = ''.join(f'<td{" class=\"n\"" if i in num else ""}>{c}</td>' for i, c in enumerate(row))
        trs += f'<tr{" class=\"sub\"" if r in sub_rows else ""}>{tds}</tr>'
    cap = f'<p class="text-xs text-slate-500 leading-relaxed mt-3 max-w-2xl">{caption}</p>' if caption else ''
    return f'''<div class="reveal {cls}"><div class="bg-white/70 rounded-2xl border border-slate-100 overflow-x-auto"><table class="tbl"><thead><tr>{th}</tr></thead><tbody>{trs}</tbody></table></div>{cap}</div>'''


def figure(svg, caption=None, cls='mt-6'):
    cap = f'<figcaption class="text-xs text-slate-500 leading-relaxed mt-3 max-w-2xl">{caption}</figcaption>' if caption else ''
    return f'''<figure class="reveal avoid {cls}"><div class="figure rounded-2xl border border-slate-100 bg-[#f8fafc] p-3 sm:p-5 overflow-x-auto">{svg}</div>{cap}</figure>'''


def callout(title, text, tone='amber', cls='mt-6'):
    tones = {
        'amber': ('bg-amber-50 border-amber-200 text-amber-900', 'text-amber-900'),
        'red': ('bg-red-50 border-red-200 text-red-900', 'text-red-800'),
        'blue': ('bg-blue-50 border-blue-200 text-blue-950', 'text-blue-900'),
        'green': ('bg-emerald-50 border-emerald-200 text-emerald-950', 'text-emerald-900'),
    }
    box, tc = tones[tone]
    t = f'<strong class="{tc}">{esc(title)}</strong> ' if title else ''
    return f'<div class="reveal avoid {box} p-4 sm:p-5 rounded-xl text-sm border leading-relaxed {cls}">{t}{text}</div>'


def advantage(label, title, paras, icon_path='M13 10V3L4 14h7v7l9-11h-7z', cls='mb-14'):
    """Recuadro ámbar destacado ('La ventaja que ya tienen')."""
    ps = ''.join(f'<p class="text-slate-700 text-sm leading-relaxed mb-3 last:mb-0">{x}</p>' for x in paras)
    return f'''
            <div class="reveal avoid {cls} rounded-[24px] p-7 sm:p-9 relative overflow-hidden border-2" style="background:linear-gradient(135deg,#fffbeb,#fff7ed);border-color:#fcd34d;">
                <div class="absolute top-0 right-0 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl" style="background:linear-gradient(135deg,#d97706,#b45309);">{esc(label)}</div>
                <div class="flex flex-col md:flex-row gap-6 items-start">
                    <div class="w-14 h-14 rounded-2xl grid place-items-center shrink-0" style="background:linear-gradient(135deg,#fbbf24,#d97706);box-shadow:0 10px 22px -8px rgba(217,119,6,.6);">
                        <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="{icon_path}"/></svg>
                    </div>
                    <div>
                        <h2 class="display text-xl sm:text-2xl font-bold text-slate-900 mb-2">{esc(title)}</h2>
                        {ps}
                    </div>
                </div>
            </div>'''


def service_card(num, title, sub, price, price_note, *, text=None, items=None, ribbon=None, extra=None, cls='mb-6'):
    """service-card numerada con precio a la derecha (formato Max Impresiones)."""
    rib = f'<div class="absolute top-0 right-0 num-badge text-white text-[10px] font-bold px-3 py-1 rounded-bl-xl">{esc(ribbon)}</div>' if ribbon else ''
    tx = f'<p class="text-slate-600 text-sm leading-relaxed mb-3 md:pl-[3.75rem]">{text}</p>' if text else ''
    it = f'<div class="md:pl-[3.75rem]">{bullets(items)}</div>' if items else ''
    ex = f'<p class="text-[11px] text-emerald-700 font-medium mt-0.5">{extra}</p>' if extra else ''
    return f'''
                <div class="reveal service-card avoid bg-white/70 rounded-2xl p-6 sm:p-7 {cls} border border-slate-100">
                    {rib}
                    <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-4 {"mb-4" if (text or items) else ""}">
                        <div class="flex gap-4">
                            <div class="num-badge w-11 h-11 rounded-xl grid place-items-center text-white font-bold text-lg shrink-0">{esc(num)}</div>
                            <div>
                                <h3 class="display text-lg font-bold text-slate-900">{esc(title)}</h3>
                                <p class="text-sm text-slate-500 font-medium mt-0.5">{sub}</p>
                            </div>
                        </div>
                        <div class="md:text-right shrink-0 pl-[3.75rem] md:pl-0">
                            <span class="text-2xl font-bold text-slate-900 whitespace-nowrap">{price}</span>
                            <p class="text-[11px] text-slate-500 uppercase tracking-wide">{price_note}</p>
                            {ex}
                        </div>
                    </div>
                    {tx}
                    {it}
                </div>'''


def packages(plans, cls='mt-6'):
    """Tres planes; el recomendado lleva borde degradado e insignia."""
    out = ''
    for pl in plans:
        rec = pl.get('rec')
        border = 'border-2' if rec else 'border'
        style = ' style="border-color:#a5b4fc;background:linear-gradient(180deg,#ffffff,#f5f3ff);"' if rec else ''
        badge = '<span class="absolute top-0 right-0 num-badge text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl">Recomendado</span>' if rec else ''
        lis = ''.join(f'<li class="flex gap-2"><span class="text-blue-500" aria-hidden="true">▸</span><span>{x}</span></li>' for x in pl['items'])
        out += f'''<div class="item-card avoid relative bg-white/80 rounded-2xl p-6 {border} border-slate-100 flex flex-col"{style}>
                        {badge}
                        <p class="text-[11px] font-bold text-blue-700 uppercase tracking-wider mb-1">{esc(pl["tag"])}</p>
                        <h3 class="display text-xl font-bold text-slate-900">{esc(pl["name"])}</h3>
                        <p class="text-xs text-slate-500 mt-1 mb-4 leading-relaxed">{pl["for"]}</p>
                        <p class="display text-3xl font-extrabold text-slate-900">{pl["price"]}</p>
                        <p class="text-[11px] text-slate-500 leading-relaxed mt-1 mb-4">{pl["price_note"]}</p>
                        <ul class="space-y-1.5 text-sm text-slate-600 mt-auto">{lis}</ul>
                    </div>'''
    return f'<div class="reveal grid md:grid-cols-3 gap-4 {cls}">{out}</div>'


def billing_box(title, intro_text, left, right, foot, cls='mb-14'):
    """'Cómo se cobra la pauta': dos tarjetas lado a lado."""
    return f'''
            <div class="reveal avoid glass rounded-2xl p-7 sm:p-8 {cls}">
                <h2 class="display text-2xl font-bold text-slate-900 mb-2">{esc(title)}</h2>
                <p class="text-slate-600 text-sm leading-relaxed mb-5">{intro_text}</p>
                <div class="grid sm:grid-cols-2 gap-4 mb-5">
                    <div class="rounded-xl p-4 border border-slate-100 bg-white/80"><p class="text-sm font-bold text-slate-800 mb-1">{left[0]}</p><p class="text-xs text-slate-600 leading-relaxed">{left[1]}</p></div>
                    <div class="rounded-xl p-4 border border-slate-100 bg-white/80"><p class="text-sm font-bold text-slate-800 mb-1">{right[0]}</p><p class="text-xs text-slate-600 leading-relaxed">{right[1]}</p></div>
                </div>
                <p class="text-xs text-slate-500">{foot}</p>
            </div>'''


def green_tip(label, title, text, cls='mb-14'):
    return f'''
            <div class="reveal avoid rounded-2xl p-6 sm:p-7 {cls} border" style="background:linear-gradient(135deg,#ecfdf5,#eff6ff);border-color:#bbf7d0;">
                <p class="text-[11px] font-bold text-emerald-800 uppercase tracking-wider mb-2">{esc(label)}</p>
                <h3 class="display text-lg font-bold text-slate-900 mb-2">{esc(title)}</h3>
                <p class="text-emerald-900/80 text-sm leading-relaxed">{text}</p>
            </div>'''


# ---------- Resumen de inversión oscuro ----------

def sum_row(label, value, last=False):
    b = '' if last else ' border-b border-white/10'
    return f'<div class="flex justify-between items-center gap-4 py-2.5{b}"><span class="text-blue-100">{label}</span><span class="font-semibold whitespace-nowrap">{value}</span></div>'


def sum_total(label, value, unit=''):
    u = f' <span class="text-xs font-normal text-blue-300/70">{unit}</span>' if unit else ''
    return f'<div class="flex justify-between items-center gap-4 py-3 mt-1"><span class="font-bold text-blue-200">{label}</span><span class="text-xl font-bold text-blue-300 whitespace-nowrap">{value}{u}</span></div>'


def sum_head(text, dot='bg-blue-400', cls=''):
    return f'<h3 class="text-sm font-bold text-white uppercase tracking-wider mb-3 flex items-center gap-2 {cls}"><span class="w-2 h-2 rounded-full {dot}"></span>{esc(text)}</h3>'


def summary(inner, start_label, start_value, start_note, accept_wa, foot, title='Resumen de Inversión', btn='Aceptar y comenzar →', cls='mb-14'):
    return f'''
            <div class="reveal avoid sumblock rounded-[24px] p-7 sm:p-9 text-white shadow-2xl {cls} relative overflow-hidden"
                 style="background:linear-gradient(150deg,#0b1220,#15254d 55%,#1e3a8a);">
                <div class="orb2 absolute -bottom-20 -right-16 w-64 h-64 rounded-full blur-3xl" style="background:radial-gradient(circle,rgba(124,58,237,.4),transparent 70%);"></div>
                <div class="relative z-10">
                    <h2 class="display text-2xl font-bold mb-6">{esc(title)}</h2>
{inner}
                    <div class="mt-8 rounded-2xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                         style="background:linear-gradient(135deg,rgba(59,130,246,.25),rgba(124,58,237,.25));border:1px solid rgba(255,255,255,.18);">
                        <div>
                            <p class="text-blue-200 text-xs uppercase tracking-wider mb-1">{esc(start_label)}</p>
                            <p class="display text-4xl font-extrabold shine">{start_value}</p>
                            <p class="text-blue-200 text-xs mt-1 max-w-md">{start_note}</p>
                        </div>
                        <a href="{wa_link(accept_wa)}" target="_blank" rel="noopener"
                           class="btn-primary text-white font-semibold rounded-xl px-6 py-3.5 text-sm text-center whitespace-nowrap no-print">{esc(btn)}</a>
                    </div>
                    <p class="text-[11px] text-blue-300/70 mt-3">{foot}</p>
                </div>
            </div>'''


def terms(items, cls='mb-8'):
    ps = ''.join(f'<p class="flex items-start gap-2"><span class="text-blue-500 mt-0.5 shrink-0" aria-hidden="true">◆</span><span><strong>{esc(b)}:</strong> {t}</span></p>' for b, t in items)
    return f'''
            <div class="reveal glass rounded-2xl p-7 sm:p-8 {cls}">
                <h3 class="display text-lg font-bold text-slate-900 mb-5 flex items-center gap-2">{ICON_CHECK_CIRCLE} Condiciones Comerciales</h3>
                <div class="terms grid sm:grid-cols-2 gap-x-8 gap-y-4 text-sm text-slate-700">{ps}</div>
            </div>'''


def cta(title, text, wa_text, mail_subject, mail_body, extra=(), wa_label='Aceptar por WhatsApp', mail_label='Aceptar por Correo'):
    ex = ''.join(f'''<a href="{href}" class="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl px-6 py-3.5 text-sm transition border border-slate-200">{esc(label)}</a>''' for label, href in extra)
    return f'''
            <div class="reveal avoid text-center rounded-2xl p-8 sm:p-10 relative overflow-hidden"
                 style="background:linear-gradient(135deg,#eff6ff,#f5f3ff);border:1px solid #e0e7ff;">
                <h3 class="display text-2xl font-bold text-slate-900 mb-2">{esc(title)}</h3>
                <p class="text-sm text-slate-600 max-w-lg mx-auto mb-6">{text}</p>
                <div class="flex flex-col sm:flex-row flex-wrap gap-3 justify-center no-print">
                    <a href="{wa_link(wa_text)}" target="_blank" rel="noopener"
                       class="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl px-6 py-3.5 text-sm transition shadow-lg shadow-green-500/30">
                        {wa_icon("w-5 h-5")}
                        {esc(wa_label)}
                    </a>
                    <a href="mailto:{MAIL}?subject={q(mail_subject)}&amp;body={q(mail_body)}"
                       class="inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl px-6 py-3.5 text-sm transition border border-slate-200">
                        {ICON_MAIL.replace("text-blue-300", "text-blue-600").replace("w-4 h-4", "w-5 h-5")}
                        {esc(mail_label)}
                    </a>
                    {ex}
                </div>
                <p class="hidden print:block text-sm text-slate-600 mt-2">WhatsApp +507 {WA_SHOW} · {MAIL}</p>
            </div>'''


def sources(text, cls='mt-10'):
    return f'<div class="reveal text-[11px] text-slate-500 leading-relaxed border-t border-slate-200 pt-5 {cls}"><strong class="text-slate-600">Fuentes y supuestos.</strong> {text}</div>'


def shots(items, cls='mt-6'):
    """Capturas: (src, w, h, alt, caption_html)."""
    figs = ''.join(f'''<figure class="item-card avoid shot bg-white rounded-2xl border border-slate-100 overflow-hidden"><img src="{s}" width="{w}" height="{h}" alt="{esc(a)}" loading="lazy"><figcaption class="text-xs text-slate-600 px-4 py-3 border-t border-slate-100">{c}</figcaption></figure>''' for s, w, h, a, c in items)
    cols = 'sm:grid-cols-2' if len(items) > 1 else ''
    return f'<div class="reveal grid {cols} gap-4 {cls}">{figs}</div>'


def buttons(items, cls='mt-5'):
    out = ''
    for i, (label, href) in enumerate(items):
        if i == 0:
            out += f'<a href="{href}" class="btn-primary text-white font-semibold rounded-xl px-5 py-3 text-sm text-center">{esc(label)}</a>'
        else:
            out += f'<a href="{href}" class="inline-flex items-center justify-center bg-white hover:bg-slate-50 text-slate-800 font-semibold rounded-xl px-5 py-3 text-sm transition border border-slate-200">{esc(label)}</a>'
    return f'<div class="reveal flex flex-col sm:flex-row flex-wrap gap-3 items-start sm:items-center no-print {cls}">{out}</div>'


PH = lambda s='por definir': f'<span class="ph">{s}</span>'


# =====================================================================================
# SVG (diagram-design con tokens de la casa)
# =====================================================================================

INK, INK2, MUTED, SOFT = '#0f172a', '#1e293b', '#475569', '#64748b'
PAPER = '#f8fafc'
RULE = 'rgba(15,23,42,.12)'
ACC, ACC_T = '#7c3aed', '#f5f3ff'          # acento: 1–2 focos por figura
BLUE, BLUE_T, DEEP = '#2563eb', '#eff6ff', '#1e3a8a'
NAVY = '#0b1220'
OK, OK_T = '#047857', '#ecfdf5'
AMB, AMB_T = '#b45309', '#fffbeb'
RED, RED_T = '#b91c1c', '#fef2f2'
SANS = "Inter, system-ui, sans-serif"
MONO = "'Geist Mono', ui-monospace, monospace"
DISP = "'Bricolage Grotesque', Inter, sans-serif"

KINDS = {  # fill, stroke, dash, title color, sub color
    'step': ('#ffffff', 'rgba(15,23,42,.28)', None, INK, MUTED),
    'focal': (ACC_T, ACC, None, INK, MUTED),
    'brand': (BLUE_T, BLUE, None, INK, MUTED),
    'input': ('#f1f5f9', SOFT, None, INK, MUTED),
    'optional': ('#ffffff', 'rgba(15,23,42,.25)', '4 3', INK2, MUTED),
    'dark': (NAVY, NAVY, None, '#ffffff', '#cbd5e1'),
    'ok': (OK_T, OK, None, INK, MUTED),
    'warn': (AMB_T, AMB, None, INK, MUTED),
    'bad': (RED_T, RED, None, INK, MUTED),
}


def t(x, y, s, size=12, fill=INK, w=400, anchor='start', fam=SANS, ls=None, extra=''):
    l = f' letter-spacing="{ls}"' if ls else ''
    return (f'<text x="{x:g}" y="{y:g}" fill="{fill}" font-size="{size}" font-weight="{w}" '
            f'font-family="{fam}" text-anchor="{anchor}"{l}{extra}>{esc(s)}</text>')


def eyebrow(x, y, s, fill=SOFT, anchor='start'):
    return t(x, y, s.upper(), 10, fill, 600, anchor, SANS, '0.12em')


def rect(x, y, w, h, fill='#fff', stroke=RULE, r=8, dash=None, sw=1, extra=''):
    d = f' stroke-dasharray="{dash}"' if dash else ''
    return f'<rect x="{x:g}" y="{y:g}" width="{w:g}" height="{h:g}" rx="{r}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"{d}{extra}/>'


def node(x, y, w, h, title, sub=(), kind='step', ts=13, ss=11.5, align='middle'):
    """Nodo con máscara opaca (para que las líneas no se vean a través) y texto centrado."""
    f, s, d, tc, sc = KINDS[kind]
    out = rect(x, y, w, h, PAPER, 'none') + rect(x, y, w, h, f, s, dash=d, sw=1.2 if kind in ('focal', 'brand', 'ok', 'warn', 'bad') else 1)
    n = 1 + len(sub)
    lh = ss + 4
    top = y + h / 2 - ((n - 1) * lh) / 2 + ts * 0.36
    cx = x + w / 2 if align == 'middle' else x + 14
    out += t(cx, top, title, ts, tc, 600, align)
    for i, ss_ in enumerate(sub):
        out += t(cx, top + (ts * 0.55) + lh * (i + 1) - 2, ss_, ss, sc, 400, align)
    return out


def list_node(x, y, w, h, rows, kind='step', head=None, row_h=None):
    """Nodo con filas (título + sublabel) separadas por filetes."""
    f, s, d, tc, sc = KINDS[kind]
    out = rect(x, y, w, h, PAPER, 'none') + rect(x, y, w, h, f, s, dash=d, sw=1.2 if kind != 'step' else 1)
    yy = y + 6
    if head:
        out += t(x + 14, y + 24, head, 13.5, tc, 700, fam=DISP)
        yy = y + 36
    rh = row_h or (h - (yy - y) - 6) / len(rows)
    for i, row in enumerate(rows):
        title, *sub = row if isinstance(row, (tuple, list)) else (row,)
        ry = yy + i * rh
        if i:
            out += f'<line x1="{x+12:g}" y1="{ry:g}" x2="{x+w-12:g}" y2="{ry:g}" stroke="{RULE}"/>'
        if sub:
            out += t(x + 14, ry + rh / 2 - 2, title, 12.5, tc, 600)
            out += t(x + 14, ry + rh / 2 + 13, sub[0], 11, sc)
        else:
            out += t(x + 14, ry + rh / 2 + 4, title, 12, tc, 500)
    return out


def chip(x, y, w, h, title, sub=None, focal=False):
    kind = 'focal' if focal else 'step'
    return node(x, y, w, h, title, (sub,) if sub else (), kind, ts=12.5, ss=11)


def orth(pts, r=8):
    """Trazo ortogonal con esquinas redondeadas (cuarto de curva) entre puntos alineados."""
    if len(pts) < 2:
        return ''
    d = f'M{pts[0][0]:g} {pts[0][1]:g}'
    for i in range(1, len(pts) - 1):
        (x0, y0), (x1, y1), (x2, y2) = pts[i - 1], pts[i], pts[i + 1]
        l1 = abs(x1 - x0) + abs(y1 - y0)
        l2 = abs(x2 - x1) + abs(y2 - y1)
        rr = min(r, l1 / 2, l2 / 2)
        sx = (x1 > x0) - (x1 < x0); sy = (y1 > y0) - (y1 < y0)
        ex = (x2 > x1) - (x2 < x1); ey = (y2 > y1) - (y2 < y1)
        d += f' L{x1 - sx * rr:g} {y1 - sy * rr:g} Q{x1:g} {y1:g} {x1 + ex * rr:g} {y1 + ey * rr:g}'
    d += f' L{pts[-1][0]:g} {pts[-1][1]:g}'
    return d


def conn(pts, pid, color=MUTED, mk='a', dash=None, sw=1.3):
    da = f' stroke-dasharray="{dash}"' if dash else ''
    m = f' marker-end="url(#{pid}-{mk})"' if mk else ''
    return f'<path d="{orth(pts)}" fill="none" stroke="{color}" stroke-width="{sw}"{da}{m}/>'


def label(x, y, s, fill=SOFT, anchor='middle', size=10):
    """Etiqueta de flecha con máscara opaca; y es la línea base del texto."""
    w = len(s) * size * 0.62 + 10
    x0 = x - w / 2 if anchor == 'middle' else (x - w + 5 if anchor == 'end' else x - 5)
    return (f'<rect x="{x0:g}" y="{y - size - 1:g}" width="{w:g}" height="{size + 5:g}" rx="2" fill="{PAPER}"/>'
            + t(x, y, s.upper(), size, fill, 600, anchor, SANS, '0.06em'))


def legend(y, items, W, x0=20):
    """Franja de leyenda horizontal al pie: (tipo, texto). Tipos: kind de nodo, 'dash-acc', 'line-…'."""
    out = f'<line x1="{x0}" y1="{y - 14}" x2="{W - x0}" y2="{y - 14}" stroke="{RULE}" stroke-width="0.8"/>'
    out += t(x0, y + 4, 'LEYENDA', 9.5, SOFT, 600, ls='0.14em')
    x = x0 + 82
    for kind, txt in items:
        if kind.startswith('line:'):
            _, color, dash = (kind.split(':') + [''])[:3]
            da = f' stroke-dasharray="{dash}"' if dash else ''
            out += f'<line x1="{x}" y1="{y}" x2="{x + 22}" y2="{y}" stroke="{color}" stroke-width="1.6"{da}/>'
        elif kind.startswith('diamond:'):
            c = kind.split(':')[1]
            out += f'<path d="M{x+11} {y-6} L{x+17} {y} L{x+11} {y+6} L{x+5} {y} Z" fill="{c}"/>'
        elif kind.startswith('swatch:'):
            _, fill, stroke, dash = (kind.split(':') + [''])[:4]
            da = f' stroke-dasharray="{dash}"' if dash else ''
            out += f'<rect x="{x}" y="{y - 6}" width="22" height="12" rx="3" fill="{fill}" stroke="{stroke}"{da}/>'
        else:
            f, s, d, _, _ = KINDS[kind]
            da = f' stroke-dasharray="{d}"' if d else ''
            out += f'<rect x="{x}" y="{y - 6}" width="22" height="12" rx="3" fill="{f}" stroke="{s}"{da}/>'
        out += t(x + 30, y + 4, txt, 11, MUTED)
        x += 30 + len(txt) * 6.1 + 26
    return out


def svg(pid, W, H, title, desc, body):
    defs = ''.join(
        f'<marker id="{pid}-{k}" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto">'
        f'<polygon points="0 0, 8 3, 0 6" fill="{c}"/></marker>'
        for k, c in (('a', MUTED), ('v', ACC), ('g', OK), ('r', RED), ('b', BLUE), ('w', AMB), ('s', SOFT)))
    return (f'<svg viewBox="0 0 {W} {H}" xmlns="http://www.w3.org/2000/svg" role="img" '
            f'aria-labelledby="{pid}-title {pid}-desc"><title id="{pid}-title">{esc(title)}</title>'
            f'<desc id="{pid}-desc">{esc(desc)}</desc><defs>{defs}</defs>'
            f'<rect width="100%" height="100%" fill="{PAPER}"/>{body}</svg>')
