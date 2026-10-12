"""Hero y bloques dedicados por servicio de la propuesta de marketing de Kredit (EW-KRE-2026-02).

Cada bloque sigue la misma forma: foto descriptiva, promesa, precio con la letra del ítem de la
inversión, «Qué incluye», una muestra (anuncios, posts o capturas) y cómo se mide. Las fotos son de
fal · nano-banana-2 (sin texto); los titulares de anuncios y posts van en HTML para que se lean nítidos.
"""
from casa import esc

ROBOTO = ('<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;800;900&display=swap" '
          'rel="stylesheet">')

CSS = r"""
        /* ---------- hero ---------- */
        .hero-eyebrow { display:inline-flex; align-items:center; gap:10px; font-size:11px; font-weight:600; letter-spacing:.16em; text-transform:uppercase; color:#bfdbfe; }
        .hero-eyebrow::before { content:""; width:22px; height:1px; background:#93c5fd; }
        .doc-meta > div { background:rgba(11,18,32,.45); padding:12px 14px; }
        .doc-meta dt { font-size:10px; letter-spacing:.12em; text-transform:uppercase; color:#93c5fd; margin-bottom:3px; }
        .doc-meta dd { font-size:13px; font-weight:600; color:#fff; line-height:1.3; }
        .toc a { display:inline-flex; align-items:center; gap:8px; font-size:12.5px; font-weight:600; color:#e0e7ff; background:rgba(255,255,255,.07); border:1px solid rgba(255,255,255,.14); border-radius:999px; padding:7px 13px; transition:background .2s, border-color .2s; }
        .toc a:hover { background:rgba(255,255,255,.14); border-color:rgba(255,255,255,.3); }
        .toc a:focus-visible { outline:2px solid #93c5fd; outline-offset:2px; }
        .toc i { width:7px; height:7px; border-radius:2px; display:block; }
        .hv { position:relative; height:360px; }
        .hv-browser { position:absolute; left:0; top:44px; width:86%; border-radius:14px; overflow:hidden; background:#fff; box-shadow:0 34px 70px -24px rgba(2,6,23,.85), 0 0 0 1px rgba(255,255,255,.14); transform:rotate(-1.4deg); }
        .bar { display:flex; align-items:center; gap:5px; height:24px; padding:0 9px; background:#eef2f7; border-bottom:1px solid #dfe5ee; }
        .bar i { width:7px; height:7px; border-radius:50%; background:#cbd5e1; display:block; }
        .bar span { margin-left:7px; flex:1; height:15px; border-radius:5px; background:#fff; font:500 9px/15px 'Geist Mono', monospace; color:#64748b; padding:0 8px; white-space:nowrap; overflow:hidden; }
        .hv-browser img, .dev-browser img { display:block; width:100%; height:auto; }
        .hv-post { position:absolute; right:0; bottom:0; width:37%; transform:rotate(2deg); box-shadow:0 30px 60px -20px rgba(2,6,23,.8); }
        .hv-serp { position:absolute; left:-12px; bottom:4px; width:58%; background:#fff; border-radius:14px; padding:12px 14px; box-shadow:0 24px 50px -18px rgba(2,6,23,.8); color:#202124; font-family:Roboto, Arial, sans-serif; }
        .hv-toast { position:absolute; right:0; top:0; display:flex; gap:10px; align-items:flex-start; background:rgba(255,255,255,.96); color:#0f172a; border-radius:14px; padding:10px 13px; box-shadow:0 20px 40px -16px rgba(2,6,23,.75); font-size:12px; line-height:1.35; max-width:250px; }
        .hv-toast .dot { width:9px; height:9px; border-radius:50%; background:#22c55e; margin-top:4px; flex:none; box-shadow:0 0 0 4px rgba(34,197,94,.18); }
        @media (max-width: 640px) {
            .hv { height:300px; }
            .hv-browser { width:94%; top:52px; }
            .hv-post { width:42%; }
            .hv-serp { display:none; }
            .hv-toast { right:auto; left:8px; max-width:230px; font-size:11px; }
        }
        /* ---------- bloques de servicio ---------- */
        .svc { scroll-margin-top:24px; }
        .svc-head { display:grid; border-radius:24px; overflow:hidden; border:1px solid #e2e8f0; background:linear-gradient(135deg,#ffffff,#f8fafc); }
        @media (min-width: 768px) { .svc-head { grid-template-columns: 1fr 1.08fr; } }
        .svc-tag { display:inline-flex; align-items:center; gap:8px; font-size:11px; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:var(--svc); }
        .svc-tag i { width:9px; height:9px; border-radius:3px; background:var(--svc); display:block; }
        .svc-media { position:relative; min-height:270px; margin:0; }
        .svc-media img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .svc-media figcaption { position:absolute; left:14px; right:14px; bottom:14px; font-size:11.5px; line-height:1.4; color:#fff; background:rgba(11,18,32,.62); backdrop-filter:blur(6px); -webkit-backdrop-filter:blur(6px); border:1px solid rgba(255,255,255,.18); border-radius:12px; padding:8px 11px; }
        .price-chip { display:inline-flex; flex-direction:column; gap:1px; border:1px solid #e2e8f0; background:#fff; border-radius:12px; padding:8px 12px; }
        .price-chip b { font-size:15px; color:#0f172a; font-family:'Bricolage Grotesque', Inter, sans-serif; }
        .price-chip span { font-size:11px; color:#64748b; }
        .inc { display:grid; gap:10px; list-style:none; padding:0; margin:0; }
        @media (min-width: 640px) { .inc { grid-template-columns: 1fr 1fr; } }
        .inc li { display:flex; gap:12px; padding:13px 15px; border-radius:16px; background:rgba(255,255,255,.75); border:1px solid #eef2f7; font-size:13.5px; line-height:1.5; color:#475569; }
        .inc li b { display:block; color:#0f172a; font-size:14px; margin-bottom:1px; }
        .inc .ck { flex:none; width:22px; height:22px; border-radius:7px; background:color-mix(in srgb, var(--svc) 13%, white); color:var(--svc); display:grid; place-items:center; margin-top:1px; }
        .svc-sub { font-family:'Bricolage Grotesque', Inter, sans-serif; font-size:17px; font-weight:700; color:#0f172a; margin:30px 0 14px; display:flex; align-items:center; gap:10px; }
        .svc-sub::after { content:""; flex:1; height:1px; background:linear-gradient(90deg,#e2e8f0,transparent); }
        .kpis { display:flex; flex-wrap:wrap; gap:6px; }
        .kpis span { font-size:12px; font-weight:500; color:#334155; background:#f1f5f9; border-radius:999px; padding:5px 10px; }
        .mock-note { font-size:11.5px; color:#64748b; margin-top:10px; }
        /* ---------- Google: resultado de búsqueda ---------- */
        .serp { background:#fff; border:1px solid #e5e7eb; border-radius:18px; padding:16px 18px 18px; font-family:Roboto, Arial, sans-serif; color:#202124; }
        .serp-q { display:flex; align-items:center; gap:10px; border:1px solid #dfe1e5; border-radius:999px; padding:8px 14px; font-size:13.5px; color:#202124; margin-bottom:14px; }
        .serp-q svg { color:#9aa0a6; flex:none; }
        .serp-sp { font-size:12px; font-weight:700; color:#202124; margin-bottom:6px; }
        .serp-site { display:flex; align-items:center; gap:9px; margin-bottom:4px; }
        .serp-fav { width:26px; height:26px; border-radius:50%; background:#091845; color:#22D3EE; font:900 14px/26px Roboto, sans-serif; text-align:center; flex:none; }
        .serp-site p { font-size:13px; line-height:1.2; }
        .serp-site small { display:block; font-size:11.5px; color:#4d5156; }
        .serp-h { font-size:18px; line-height:1.3; color:#1a0dab; margin:4px 0 3px; }
        .serp-d { font-size:13px; line-height:1.55; color:#4d5156; }
        .serp-links { display:flex; flex-wrap:wrap; gap:6px 16px; margin-top:8px; font-size:13px; color:#1a0dab; }
        /* ---------- Meta / Instagram: anuncio en el feed ---------- */
        .igad { background:#fff; border:1px solid #e5e7eb; border-radius:18px; overflow:hidden; font-family:Roboto, Arial, sans-serif; color:#0f172a; }
        .igad-top { display:flex; align-items:center; gap:9px; padding:10px 12px; }
        .igav { width:30px; height:30px; border-radius:50%; background:#091845; color:#22D3EE; font:900 15px/30px Roboto, sans-serif; text-align:center; flex:none; box-shadow:0 0 0 2px #fff, 0 0 0 3.5px #db2777; }
        .igad-top p { font-size:13px; font-weight:700; line-height:1.15; }
        .igad-top small { display:block; font-size:11px; font-weight:400; color:#64748b; }
        .igad-cta { display:flex; justify-content:space-between; align-items:center; padding:10px 12px; font-size:13px; font-weight:700; color:#1559ED; border-top:1px solid #f1f5f9; border-bottom:1px solid #f1f5f9; background:#f8fafc; }
        .igad-cap { padding:10px 12px 12px; font-size:12.5px; line-height:1.5; color:#334155; }
        /* ---------- pieza con la marca de Kredit (anuncio o post) ---------- */
        .kp { position:relative; aspect-ratio:4/5; overflow:hidden; background:#091845; font-family:Roboto, Arial, sans-serif; container-type:inline-size; }
        .kp img { position:absolute; inset:0; width:100%; height:100%; object-fit:cover; }
        .kp-shade { position:absolute; inset:0; background:linear-gradient(180deg, rgba(9,24,69,.95) 0%, rgba(9,24,69,.86) 30%, rgba(9,24,69,.45) 48%, rgba(9,24,69,0) 64%); }
        .kp-txt { position:absolute; left:7%; right:7%; top:6.5%; }
        .kp-pill { display:inline-block; font-size:clamp(7px, 3.3cqi, 10.5px); font-weight:700; letter-spacing:.08em; text-transform:uppercase; border-radius:999px; padding:4px 9px; margin-bottom:9px; background:rgba(255,255,255,.16); color:#fff; border:1px solid rgba(255,255,255,.28); }
        .kp-h { font-size:clamp(12px, 8.6cqi, 27px); font-weight:900; line-height:1.08; letter-spacing:-.01em; color:#fff; }
        .kp-h em { font-style:normal; color:#22D3EE; }
        .kp-s { font-size:clamp(8px, 4.5cqi, 13.5px); font-weight:500; line-height:1.35; color:#dbe6ff; margin-top:8px; max-width:92%; }
        .kp-list { margin-top:10px; display:grid; gap:5px; font-size:clamp(8px, 4.4cqi, 13px); font-weight:700; color:#091845; }
        .kp-list span { display:flex; gap:8px; align-items:center; }
        .kp-list b { width:1.7em; height:1.7em; border-radius:6px; background:#1559ED; color:#fff; display:grid; place-items:center; font-size:11px; flex:none; }
        .kp-btn { display:inline-block; margin-top:11px; font-size:clamp(8px, 4.1cqi, 12px); font-weight:700; color:#091845; background:#fff; border-radius:999px; padding:6px 12px; }
        .kp-foot { position:absolute; left:0; right:0; bottom:0; display:flex; justify-content:space-between; align-items:center; padding:2.6cqi 4cqi; background:rgba(9,24,69,.86); color:#c6daff; font-size:clamp(7px, 3.4cqi, 10.5px); font-weight:500; }
        .kp-logo { font:900 clamp(10px, 5.6cqi, 17px)/1 Roboto, sans-serif; color:#fff; letter-spacing:-.02em; }
        .kp-logo i { font-style:normal; color:#22D3EE; }
        .kp--light .kp-shade { background:linear-gradient(180deg, rgba(255,255,255,.96) 0%, rgba(255,255,255,.9) 34%, rgba(255,255,255,.55) 50%, rgba(255,255,255,0) 64%); }
        .kp--light .kp-pill { background:#E8F0FF; color:#1559ED; border-color:#C6DAFF; }
        .kp--light .kp-h { color:#091845; }
        .kp--light .kp-h em { color:#1559ED; }
        .kp--light .kp-s { color:#334155; }
        .kp--light .kp-btn { background:#1559ED; color:#fff; }
        .kp-play { position:absolute; left:50%; top:68%; transform:translate(-50%,-50%); width:17cqi; height:17cqi; border-radius:50%; background:rgba(255,255,255,.92); display:grid; place-items:center; box-shadow:0 10px 30px -8px rgba(0,0,0,.5); }
        .ig-col { display:grid; grid-template-columns:repeat(3,1fr); gap:3px; background:#fff; min-height:0; }
        .ig-col img { position:static; width:100%; height:100%; aspect-ratio:4/5; object-fit:cover; }
        .posts { display:grid; grid-template-columns:repeat(2, minmax(0,1fr)); gap:14px; }
        @media (min-width: 768px) { .posts { grid-template-columns:repeat(3, minmax(0,1fr)); } }
        .post { border-radius:16px; overflow:hidden; border:1px solid #e2e8f0; background:#fff; }
        .post dl { padding:10px 12px 12px; display:grid; grid-template-columns:auto 1fr; gap:3px 8px; font-size:11.5px; line-height:1.4; }
        .post dt { color:#94a3b8; font-weight:600; }
        .post dd { color:#334155; }
        /* ---------- capturas en dispositivos ---------- */
        .dev { position:relative; padding:0 16% 7% 0; }
        .dev-browser { border-radius:14px; overflow:hidden; background:#fff; border:1px solid #e2e8f0; box-shadow:0 24px 50px -28px rgba(15,23,42,.45); }
        .dev-phone { position:absolute; right:0; bottom:0; width:23%; border-radius:22px; border:5px solid #0f172a; overflow:hidden; background:#0f172a; box-shadow:0 24px 44px -18px rgba(15,23,42,.6); }
        .dev-phone img { display:block; width:100%; height:auto; }
        .pages { display:flex; flex-wrap:wrap; gap:6px; }
        .pages span { font-size:12px; font-weight:500; color:#3730a3; background:#eef2ff; border:1px solid #e0e7ff; border-radius:8px; padding:5px 9px; }
        @media print {
            .svc-head, .serp, .igad, .post, .dev { break-inside: avoid; }
            .hv-browser, .hv-post { transform:none; }
        }
        @media (prefers-reduced-motion: reduce) { .toc a { transition:none; } }
"""

CHECK = ('<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" '
         'stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12l5 5L20 7"/></svg>')
SEARCH = ('<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" '
          'aria-hidden="true"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5" stroke-linecap="round"/></svg>')
PLAY = ('<svg width="20" height="20" viewBox="0 0 24 24" fill="#091845" aria-hidden="true"><path d="M8 5v14l11-7z"/></svg>')

COLORS = {'landings': '#0891b2', 'google': '#2563eb', 'meta': '#7c3aed', 'instagram': '#db2777', 'web': '#4f46e5'}


def bar(url):
    return f'<div class="bar" aria-hidden="true"><i></i><i></i><i></i><span>{esc(url)}</span></div>'


def logo():
    return '<span class="kp-logo"><i>k</i>redit</span>'


def piece(img, alt, pill, head_html, *, sub=None, items=None, btn=None, light=False, play=False, foot='kredit.com.pa'):
    """Pieza cuadrada 4:5 con la marca de Kredit: foto de fal + titular en HTML."""
    extra = ''
    if sub:
        extra += f'<p class="kp-s">{sub}</p>'
    if items:
        extra += '<div class="kp-list">' + ''.join(f'<span><b>{i}</b>{esc(t)}</span>' for i, t in enumerate(items, 1)) + '</div>'
    if btn:
        extra += f'<span class="kp-btn">{esc(btn)}</span>'
    return f'''<div class="kp{' kp--light' if light else ''}">
            <img src="{img}" alt="{esc(alt)}" width="800" height="993" loading="lazy">
            <div class="kp-shade"></div>
            {f'<div class="kp-play">{PLAY}</div>' if play else ''}
            <div class="kp-txt"><span class="kp-pill">{esc(pill)}</span><p class="kp-h">{head_html}</p>{extra}</div>
            <div class="kp-foot">{logo()}<span>{esc(foot)}</span></div>
        </div>'''


# =====================================================================================
# Hero
# =====================================================================================

def hero(*, ref, date, valid, money):
    toc = [('#svc-landings', 'Landings', COLORS['landings']), ('#svc-google', 'Google Ads', COLORS['google']),
           ('#svc-meta', 'Meta Ads', COLORS['meta']), ('#svc-instagram', 'Contenido de Instagram', COLORS['instagram']),
           ('#svc-web', 'Web nueva', COLORS['web']), ('#inversion', 'Inversión', '#94a3b8')]
    toc_html = ''.join(f'<li><a href="{h}"><i style="background:{c}"></i>{esc(t)}</a></li>' for h, t, c in toc)
    return f'''
                <div class="pt-9">
                    <p class="hero-eyebrow mb-4">Propuesta comercial · Marketing digital y captación</p>
                    <p class="text-sm text-blue-100/90 mb-3">Para <b class="text-white tracking-wide">KREDIT</b> · CREDU HOLDINGS, S.A.</p>
                    <h1 class="display text-[2.3rem] sm:text-[3.15rem] font-extrabold leading-[1.03] tracking-tight max-w-[760px]">Más solicitudes calificadas, <span class="shine">directo a sus vendedores</span></h1>
                </div>
                <div class="mt-7 grid md:grid-cols-[1fr_1.12fr] gap-8 md:gap-6 items-center">
                    <div>
                        <p class="text-blue-100/90 text-[15px] leading-relaxed mb-6">Publicidad en Google y Meta, dos landings que precalifican, contenido de Instagram pensado para captar y una web nueva. Todo conectado al CRM de Kredit con n8n: cada lead llega con su puntaje y su vendedor asignado.</p>
                        <dl class="doc-meta grid grid-cols-2 gap-px rounded-2xl overflow-hidden border border-white/15 bg-white/15">
                            <div><dt>Preparado para</dt><dd>Kredit · Gerencia General</dd></div>
                            <div><dt>Referencia</dt><dd>{esc(ref)}</dd></div>
                            <div><dt>Fecha</dt><dd>{esc(date)}</dd></div>
                            <div><dt>Válida hasta</dt><dd>{esc(valid)}</dd></div>
                        </dl>
                    </div>
                    <div class="hv" aria-hidden="true">
                        <div class="hv-browser">{bar('kredit.com.pa/prestamos')}<img src="landing-prestamos.webp" alt="" width="1440" height="900"></div>
                        <div class="hv-serp">
                            <p style="font-size:10.5px;font-weight:700;margin-bottom:5px">Patrocinado</p>
                            <div class="serp-site"><span class="serp-fav" style="width:20px;height:20px;font-size:11px;line-height:20px">k</span><p style="font-size:11.5px">Kredit<small style="font-size:10.5px">kredit.com.pa › prestamos</small></p></div>
                            <p style="font-size:13.5px;line-height:1.3;color:#1a0dab;margin-top:3px">Préstamos hasta B/. 3,000 | Cuota Fija por Planilla</p>
                        </div>
                        <div class="hv-post">{piece('img/ad-personas.webp', '', 'Publicidad', 'Tu cuota fija, <em>por planilla</em>', foot='Calcula la tuya')}</div>
                        <div class="hv-toast"><span class="dot wa-pulse"></span><span><b>Lead calificado · 85 pts</b><br><span style="color:#64748b">Desde Google · asignado a su vendedor hace 42 s</span></span></div>
                    </div>
                </div>
                <nav class="toc mt-10 pt-6 border-t border-white/15" aria-label="Servicios de la propuesta">
                    <p class="text-[11px] font-semibold uppercase tracking-[.14em] text-blue-200/80 mb-3">Servicios que incluye</p>
                    <ul class="flex flex-wrap gap-2">{toc_html}</ul>
                </nav>'''


# =====================================================================================
# Bloque de servicio
# =====================================================================================

def svc(key, *, tag, title, lead, img, img_alt, img_caption, prices, includes, sample_title=None, sample='',
        deliver=(), measure=(), after='', media_html=None):
    color = COLORS[key]
    price_html = ''.join(f'<span class="price-chip"><b>{esc(v)}</b><span>{esc(n)}</span></span>' for v, n in prices)
    inc = ''.join(f'<li><span class="ck">{CHECK}</span><span><b>{esc(t)}</b>{d}</span></li>' for t, d in includes)
    foot = ''
    if deliver or measure:
        foot = f'''<div class="grid md:grid-cols-2 gap-4 mt-6">
                    <div class="item-card bg-white/80 rounded-2xl p-5 border border-slate-100"><p class="svc-tag mb-3"><i></i>Entregables</p><ul class="space-y-1.5 text-sm text-slate-700">{''.join(f'<li class="flex gap-2"><span class="text-slate-400">▸</span><span>{x}</span></li>' for x in deliver)}</ul></div>
                    <div class="item-card bg-white/80 rounded-2xl p-5 border border-slate-100"><p class="svc-tag mb-3"><i></i>Cómo lo medimos</p><div class="kpis">{''.join(f'<span>{esc(x)}</span>' for x in measure)}</div></div>
                </div>'''
    st = f'<p class="svc-sub">{esc(sample_title)}</p>' if sample_title else ''
    return f'''
            <section id="svc-{key}" class="svc mb-16" style="--svc:{color}">
                <div class="reveal svc-head">
                    <div class="p-7 sm:p-9 flex flex-col">
                        <p class="svc-tag"><i></i>{esc(tag)}</p>
                        <h2 class="display text-[1.65rem] sm:text-[2rem] font-bold text-slate-900 leading-[1.1] mt-3 mb-3">{esc(title)}</h2>
                        <p class="text-slate-600 text-[15px] leading-relaxed mb-6">{lead}</p>
                        <div class="mt-auto flex flex-wrap gap-2">{price_html}</div>
                    </div>
                    {media_html or f'<figure class="svc-media"><img src="{img}" alt="{esc(img_alt)}" width="1200" height="805" loading="lazy"><figcaption>{img_caption}</figcaption></figure>'}
                </div>
                <p class="svc-sub reveal">Qué incluye</p>
                <ul class="inc reveal">{inc}</ul>
                {st}
                {sample}
                {after}
                {foot}
            </section>'''


# =====================================================================================
# Los cinco bloques
# =====================================================================================

def serp(query, head, desc, links, path):
    return f'''<div class="serp">
                <div class="serp-q">{SEARCH}<span>{esc(query)}</span></div>
                <p class="serp-sp">Patrocinado</p>
                <div class="serp-site"><span class="serp-fav">k</span><p>Kredit<small>https://www.kredit.com.pa › {esc(path)}</small></p></div>
                <p class="serp-h">{esc(head)}</p>
                <p class="serp-d">{esc(desc)}</p>
                <div class="serp-links">{''.join(f'<span>{esc(x)}</span>' for x in links)}</div>
            </div>'''


def igad(img, alt, pill, head_html, sub, cta, caption):
    return f'''<div class="igad">
                <div class="igad-top"><span class="igav">k</span><p>kredit_pa<small>Publicidad</small></p><span class="ml-auto text-slate-400" aria-hidden="true">···</span></div>
                {piece(img, alt, pill, head_html, sub=sub, foot='Ejemplo de anuncio')}
                <div class="igad-cta"><span>{esc(cta)}</span><span aria-hidden="true">›</span></div>
                <p class="igad-cap"><b>kredit_pa</b> {caption}</p>
            </div>'''


def block_landings(*, money, u, shots_html, demo_b2c, demo_b2b, buttons):
    sample = f'''<div class="reveal grid md:grid-cols-2 gap-6">
                <figure class="m-0"><div class="dev"><div class="dev-browser">{bar('kredit.com.pa/prestamos')}<img src="landing-prestamos.webp" alt="Vista previa de la landing de préstamos de Kredit con calculadora de cuota y formulario de precalificación" width="1440" height="900" loading="lazy"></div><div class="dev-phone"><img src="img/movil-prestamos.webp" alt="La misma landing en el celular" width="390" height="844" loading="lazy"></div></div>
                    <figcaption class="text-xs text-slate-600 mt-3"><b class="text-slate-900">Préstamos (A).</b> La cuota quincenal, la tasa de ejemplo y la licencia del MICI en la primera pantalla; solicitud en 4 pasos.</figcaption></figure>
                <figure class="m-0"><div class="dev"><div class="dev-browser">{bar('kredit.com.pa/empresas')}<img src="landing-empresas.webp" alt="Vista previa de la landing de empresas de Kredit para el convenio de préstamos para colaboradores" width="1440" height="900" loading="lazy"></div><div class="dev-phone"><img src="img/movil-empresas.webp" alt="La landing de empresas en el celular" width="390" height="844" loading="lazy"></div></div>
                    <figcaption class="text-xs text-slate-600 mt-3"><b class="text-slate-900">Empresas (B).</b> El convenio explicado para RR. HH. y finanzas, con formulario de afiliación.</figcaption></figure>
            </div>''' + buttons([('Abrir la landing de préstamos', demo_b2c), ('Abrir la landing de empresas', demo_b2b)]) + \
        '<p class="text-xs text-slate-500 mt-2 no-print">Vista previa · formularios en modo demo, no se envía nada.</p>'
    return svc('landings', tag='Landings · personas y empresas',
        title='Dos puertas de entrada que precalifican antes de pedir datos',
        lead='Una landing para quien busca un préstamo y otra para las empresas que quieren el convenio. Ya están hechas en vista previa: el cliente ve su cuota antes de dar sus datos, y cada solicitud sale con su campaña, su puntaje y sus consentimientos.',
        img='img/landings-parada.webp', img_alt='Hombre en una parada de bus de Ciudad de Panamá usando su celular a la hora del almuerzo',
        img_caption='Casi todo el tráfico pagado llega desde el celular, en ratos cortos: las landings se diseñaron primero para esa pantalla.',
        prices=[(money(u['A']), 'Landing de préstamos · ítem A'), (money(u['B']), 'Landing de empresas · ítem B')],
        includes=[('Calculadora de cuota quincenal', 'Montos de B/. 50 a B/. 3,000: cuota por quincena, mensual y total estimado antes de enviar datos, con la información de costo que exigen las plataformas.'),
                  ('Formularios multipaso', 'Preguntas cortas en 3 o 4 pasos con barra de avance: más solicitudes completas y datos útiles para calificar.'),
                  ('Primera pantalla que se entiende', 'Titular, cuota, licencia del MICI y botón caben en el celular. En Panamá las landings piden entre 8 y 14 datos antes de dar algo a cambio.'),
                  ('Validación al momento', 'Cédula y celular panameños, correo corporativo en empresas, protección contra spam y envíos duplicados.'),
                  ('Consentimientos claros', 'Aviso de privacidad (Ley 81 de 2019), autorización para consultar referencias de crédito y permiso aparte para WhatsApp.'),
                  ('Atribución completa', 'Cada solicitud lleva su campaña, anuncio y palabra clave (UTM, gclid, fbclid) hasta el CRM.'),
                  ('Página de gracias que se mide', 'Cada envío es una conversión para Google y Meta, y el siguiente paso queda claro para el cliente.'),
                  ('Velocidad', 'Páginas livianas en nuestro VPS, sin plantillas pesadas: cargan rápido con datos móviles.')],
        sample_title='Así se ven hoy, en escritorio y en el celular', sample=sample,
        deliver=['Landing de préstamos y landing de empresas publicadas en su dominio',
                 'Formularios conectados a n8n y al CRM de Kredit', 'Textos legales y de costo del crédito revisados con su oficial de cumplimiento',
                 'Eventos de conversión listos para Google y Meta'],
        measure=['Tasa de conversión por landing', 'Abandono por paso del formulario', 'Leads calificados', 'Tiempo de carga en móvil'])


def block_google(*, money, u, m):
    sample = f'''<div class="reveal grid md:grid-cols-2 gap-4">
                {serp('préstamo personal panamá', 'Préstamos hasta B/. 3,000 | Cuota Fija por Planilla | Depósito el Día de Aprobación',
                      'Calcula tu cuota quincenal en 1 minuto. Financiera autorizada por el MICI, Res. 638-2025. Sin costos ocultos.',
                      ['Calcula tu cuota', 'Requisitos', 'Preguntas frecuentes', 'Contacto'], 'prestamos')}
                {serp('beneficios para colaboradores', 'Préstamos para tus Colaboradores | Convenio con Descuento Directo | Kredit',
                      'Un beneficio que tu equipo sí usa. Kredit coordina el descuento de planilla con RR. HH. Agenda una reunión.',
                      ['Cómo funciona el convenio', 'Para RR. HH.', 'Agendar reunión'], 'empresas')}
            </div>
            <p class="mock-note reveal">Anuncios de ejemplo con los límites de Google (titulares de 30 caracteres y descripciones de 90). Los textos finales los aprueba su oficial de cumplimiento.</p>'''
    kw = '''<div class="reveal overflow-x-auto rounded-2xl border border-slate-200 bg-white/80 mt-6"><table class="tbl w-full text-sm">
                <thead><tr class="text-left text-[11px] uppercase tracking-wider text-slate-500"><th class="px-4 py-3">Campaña</th><th class="px-4 py-3">Palabras clave de ejemplo</th><th class="px-4 py-3">Lleva a</th></tr></thead>
                <tbody class="text-slate-700">
                <tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold text-slate-900">Personas</td><td class="px-4 py-3">préstamo personal panamá · préstamo rápido · préstamo con descuento directo · préstamo por planilla</td><td class="px-4 py-3">Landing de préstamos</td></tr>
                <tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold text-slate-900">Empresas</td><td class="px-4 py-3">beneficios para colaboradores · bienestar financiero empleados · convenio de préstamos para empleados</td><td class="px-4 py-3">Landing de empresas</td></tr>
                <tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold text-slate-900">Marca</td><td class="px-4 py-3">kredit · kredit panamá · kredit préstamos</td><td class="px-4 py-3">Web y landing</td></tr>
                <tr class="border-t border-slate-100"><td class="px-4 py-3 font-semibold text-slate-900">Negativas</td><td class="px-4 py-3">empeño · hipoteca · auto · gratis · empleo · casa de empeño</td><td class="px-4 py-3 text-slate-500">No se pagan</td></tr>
                </tbody></table></div>'''
    return svc('google', tag='Google Ads · búsqueda',
        title='Aparecer justo cuando alguien busca un préstamo',
        lead='Google es el canal de intención: la persona ya está buscando. Montamos campañas separadas para personas, empresas y marca, cada una con su landing, y le enseñamos a Google cuáles leads terminan en desembolso para que puje por esos y no por clics.',
        img='img/google-busqueda.webp', img_alt='Hombre en su casa en Ciudad de Panamá buscando en su celular al atardecer',
        img_caption='De noche, en el celular: así llega buena parte de las búsquedas de "préstamo personal" en Panamá.',
        prices=[(money(u['E']), 'Creación de campañas · ítem E'), (f"{money(m['1'])} / mes", 'Gestión · servicio 1')],
        includes=[('Investigación de palabras clave', 'Volumen y costo por clic en Panamá para préstamos personales, por planilla y beneficios para empresas.'),
                  ('Campañas por intención', 'Personas, empresas y marca por separado, cada una con su presupuesto, sus anuncios y su landing.'),
                  ('Anuncios adaptables completos', 'Hasta 15 titulares y 4 descripciones por grupo, con enlaces a secciones, textos destacados, llamada y ubicación.'),
                  ('Palabras negativas desde el día uno', 'Empeño, hipotecas, autos, empleo, "gratis": y revisión semanal de las búsquedas reales para no pagar clics inútiles.'),
                  ('Conversiones que importan', 'Formulario enviado, lead calificado y desembolso, importados desde el CRM para que Google optimice por calidad.'),
                  ('Remarketing', 'Anuncios para quien usó la calculadora y no terminó la solicitud.'),
                  ('Cumplimiento de Google', 'Plazo de 61 días o más, tasa anual máxima, ejemplo de costo y dirección visibles en la landing, como exige la política de préstamos personales.'),
                  ('Optimización semanal y reporte', 'Pujas, anuncios y presupuesto cada semana; informe mensual con costo por lead calificado y por desembolso.')],
        sample_title='Así se verían los anuncios', sample=sample + kw,
        deliver=['Cuenta de Google Ads a nombre de Kredit (los datos son suyos)', 'Campañas de personas, empresas, marca y remarketing',
                 'Conversiones configuradas con GA4 y conversiones offline desde el CRM', 'Informe mensual y tablero en vivo'],
        measure=['Costo por clic', 'CTR', 'Costo por lead calificado', 'Costo por desembolso', 'Cuota de impresiones'])


def block_meta(*, money, u, m):
    sample = f'''<div class="reveal grid sm:grid-cols-2 gap-5 max-w-[680px]">
                {igad('img/ad-personas.webp', 'Mujer sonriente que revisa su celular en la cocina de su apartamento', 'Préstamos de B/. 50 a B/. 3,000',
                      'Tu cuota fija, <em>descontada de tu planilla</em>', 'Calcula la tuya antes de solicitar. Tasa y costo total a la vista.',
                      'Más información', 'Calcula tu cuota quincenal en 1 minuto. Kredit es empresa financiera autorizada por el MICI. Tasa, cargos y costo total antes de firmar.')}
                {igad('img/ad-empresas.webp', 'Gerente de RR. HH. conversando con dos colaboradores en una oficina de Panamá', 'Para RR. HH.',
                      'Préstamos para tu equipo, <em>por convenio</em>', 'Kredit coordina el descuento de planilla con tu empresa.',
                      'Contactarnos', 'Un beneficio que tus colaboradores sí usan. Agenda 20 minutos con un ejecutivo de Kredit y te explicamos el convenio.')}
            </div>
            <p class="mock-note reveal">Anuncios de ejemplo para el feed de Instagram y Facebook. Nunca dicen "aprobado", "garantizado" ni "adelanto de salario".</p>'''
    return svc('meta', tag='Meta Ads · Instagram y Facebook',
        title='Llegar a quien todavía no está buscando, y volver por quien ya vino',
        lead='Meta crea la demanda: muestra la cuota a personas con el perfil de sus clientes y recuerda la oferta a quien ya visitó la landing. Con artes nuevos cada mes y pruebas de mensaje, la pauta aprende qué convence a cada público.',
        img='img/meta-feed.webp', img_alt='Mujer joven revisando Instagram en su celular en un café del Casco Viejo',
        img_caption='En el feed, el anuncio compite con todo lo demás: por eso la cuota va en grande y el costo, claro.',
        prices=[(money(u['F']), 'Creación de campañas · ítem F'), (f"{money(m['2'])} / mes", 'Gestión con 8 artes · servicio 2')],
        includes=[('Configuración completa', 'Business Manager, píxel y API de conversiones, dominio verificado y categoría especial de servicios financieros si Meta la aplica.'),
                  ('Campañas de clientes potenciales', 'Hacia la landing de préstamos y hacia la de empresas, o con formulario instantáneo con preguntas de calificación.'),
                  ('Públicos y exclusiones', 'Intereses y zonas de trabajo, remarketing a visitantes e interacciones de Instagram, y clientes actuales excluidos.'),
                  ('8 artes nuevos al mes', 'Estáticos, carruseles y 2 reels con la marca de Kredit y el costo del crédito cuando se menciona la oferta.'),
                  ('Pruebas A/B', 'Mensaje (cuota, rapidez o confianza) y formato; cada mes queda un ganador y se prueba el siguiente.'),
                  ('Señal de calidad', 'Los leads calificados y desembolsados vuelven a Meta para que busque personas parecidas a sus mejores clientes.'),
                  ('Cumplimiento de Meta', 'Sin adelantos de nómina ni plazos de 90 días o menos; el convenio se comunica como préstamo con descuento directo.'),
                  ('Optimización y reporte', 'Revisión semanal de frecuencia, costo y calidad; informe mensual junto con Google.')],
        sample_title='Así se verían los anuncios', sample=sample,
        deliver=['Cuenta publicitaria y píxel a nombre de Kredit', 'Campañas de personas, empresas y remarketing',
                 '8 artes al mes listos para publicar, aprobados por Kredit', 'Informe mensual con el ganador de cada prueba'],
        measure=['Costo por lead', '% de leads calificados', 'Frecuencia', 'CTR', 'Costo por desembolso'])


IG_COLLAGE = ('<figure class="svc-media ig-col" aria-label="Vista del perfil con seis piezas del mes">'
              + ''.join(f'<img src="img/{n}.webp" alt="" width="800" height="993" loading="lazy">' for n in
                        ('post-cuota', 'post-confianza', 'post-metas', 'post-consejos', 'post-reel', 'post-empresas'))
              + '<figcaption>Cada publicación tiene un trabajo: llevar a la calculadora, a WhatsApp o a una reunión con RR. HH.</figcaption></figure>')


def block_instagram(*, money, m, pillars_table):
    posts = [
        (piece('img/post-cuota.webp', 'Manos con un celular junto a una agenda y un café', 'Oferta', '¿Cuánto pagarías <em>por quincena?</em>',
               sub='Calcúlalo en 1 minuto, antes de dar tus datos.', btn='Calcula tu cuota', light=True),
         'Imagen', 'Visitas a la calculadora', 'Enlace de la biografía'),
        (piece('img/post-consejos.webp', 'Libreta, calculadora y café sobre un escritorio', 'Educación', '3 cosas que mirar <em>antes de pedir un préstamo</em>',
               items=['La tasa efectiva', 'El costo total', 'Que tenga licencia'], light=True),
         'Carrusel · 5 láminas', 'Guardados y confianza', 'Guardar y compartir'),
        (piece('img/post-confianza.webp', 'Asesor de Kredit sonriendo en su escritorio', 'Confianza', 'Kredit nunca cobra <em>por adelantado</em> para aprobar un préstamo',
               sub='Financiera autorizada por el MICI · Res. 638-2025'),
         'Imagen', 'Confianza y mensajes', 'Escribir por WhatsApp'),
        (piece('img/post-metas.webp', 'Estudiante universitaria caminando por el campus', 'Metas', '¿Se viene <em>la matrícula?</em>',
               sub='Calcula tu cuota quincenal en kredit.com.pa', btn='Calcula tu cuota'),
         'Imagen', 'Visitas a la calculadora', 'Enlace de la biografía'),
        (piece('img/post-reel.webp', 'Mano usando el celular en el Metro de Panamá', 'Reel · 30 s', 'Solicita desde el celular, <em>en 4 pasos</em>',
               sub='Te mostramos cómo en 30 segundos.', play=True),
         'Reel', 'Solicitudes', 'Empieza en kredit.com.pa'),
        (piece('img/post-empresas.webp', 'Dos colaboradores revisando una tableta en un almacén', 'Empresas', 'Bienestar financiero <em>para tu equipo</em>',
               sub='Un convenio de préstamos con descuento directo de planilla.'),
         'Carrusel para RR. HH.', 'Reuniones agendadas', 'Agendar en la landing de empresas'),
    ]
    grid = '<div class="reveal posts">' + ''.join(
        f'<div class="post">{pc}<dl><dt>Formato</dt><dd>{esc(f)}</dd><dt>Objetivo</dt><dd>{esc(o)}</dd><dt>Llamado</dt><dd>{esc(c)}</dd></dl></div>'
        for pc, f, o, c in posts) + '</div>'
    grid += '<p class="mock-note reveal">Piezas de ejemplo para mostrar el enfoque. Cuando un post menciona la oferta, lleva la tasa efectiva; los textos finales los aprueba su oficial de cumplimiento.</p>'
    return svc('instagram', tag='Contenido de Instagram',
        title='Un mes de contenido que lleva a la calculadora, no solo likes',
        lead='Con nuestro sistema de generación de contenido entregamos el mes completo de una vez: calendario, artes, textos y llamados a la acción. Cada pieza tiene un objetivo de captación (calculadora, WhatsApp o reunión) y las que mejor funcionan pasan a la pauta de Meta.',
        img='', img_alt='', img_caption='', media_html=IG_COLLAGE,
        prices=[(f"{money(m['3'])} / mes", 'Contenido mensual · servicio 3'), ('16 + 12', 'Publicaciones e historias al mes')],
        includes=[('Calendario mensual', '16 publicaciones (imágenes, carruseles y reels) y 12 historias, entregadas de una vez para aprobar.'),
                  ('Textos con llamado a la acción', 'Cada pieza lleva a la calculadora, a WhatsApp o a la landing de empresas, con enlace medible.'),
                  ('Diseño con su marca', 'Azul rey, cian y la "K" de Kredit, con plantillas que mantienen el perfil reconocible.'),
                  ('Cinco pilares de contenido', 'Educación, oferta, confianza, casos y empresas, en las proporciones de la tabla de abajo.'),
                  ('Perfil listo para convertir', 'Biografía, enlace, historias destacadas y respuestas rápidas optimizadas al iniciar.'),
                  ('Lo mejor pasa a pauta', 'Las piezas con más guardados y clics se convierten en anuncios de Meta.'),
                  ('Revisión de cumplimiento', 'Tasa efectiva cuando se menciona la oferta; nunca "aprobado", "garantizado" ni "adelanto de salario".'),
                  ('Informe mensual', 'Alcance, guardados, clics al enlace y mensajes iniciados por pieza.')],
        sample_title='Seis piezas de ejemplo, pensadas para captar', sample=grid,
        after='<p class="svc-sub reveal">Cómo se reparte el mes</p>' + pillars_table,
        deliver=['Calendario y artes del mes, aprobados antes de publicar', 'Textos, hashtags y horarios por pieza',
                 'Plantillas de marca reutilizables', 'Informe mensual de resultados'],
        measure=['Alcance', 'Guardados', 'Clics al enlace', 'Mensajes iniciados', 'Visitas a la calculadora'])


def block_web(*, money, u, m, demo_web, buttons, cards_html, vps_html):
    pages = ['Inicio', 'Préstamos', 'Empresas', 'Nosotros', 'Preguntas frecuentes', 'Contacto', 'Accede a tu cuenta',
             'Política de privacidad', 'Aviso legal', 'Política de cookies']
    sample = f'''<div class="reveal grid md:grid-cols-[1.4fr_1fr] gap-6 items-center">
                <figure class="m-0"><div class="dev"><div class="dev-browser">{bar('kredit.com.pa')}<img src="web-inicio.webp" alt="Vista previa del rediseño multipágina de kredit.com.pa: página de inicio" width="1440" height="900" loading="lazy"></div><div class="dev-phone"><img src="img/movil-web.webp" alt="La web nueva en el celular" width="390" height="844" loading="lazy"></div></div></figure>
                <div><p class="text-sm text-slate-600 leading-relaxed mb-4">Misma marca, sus colores y su estructura, ahora en un sitio de varias páginas, con la calculadora, la licencia y el costo del crédito a la vista.</p>
                    <p class="svc-tag mb-2"><i></i>Las 10 páginas</p><div class="pages">{''.join(f'<span>{esc(x)}</span>' for x in pages)}</div></div>
            </div>''' + buttons([('Recorrer la web nueva', demo_web)])
    return svc('web', tag='Web nueva · SEO y GEO',
        title='Una web de varias páginas que convierte y aparece en Google y en la IA',
        lead='La publicidad trae tráfico mientras se paga; la web y el SEO traen solicitudes cada mes sin pagar por clic. Rehacemos kredit.com.pa con su misma marca y trabajamos su posicionamiento en Google y en los asistentes de IA.',
        img='img/web-pareja.webp', img_alt='Pareja en su casa revisando juntos una página web en la laptop',
        img_caption='Antes de pedir un préstamo, muchos revisan la web con calma y en familia: ahí se decide la confianza.',
        prices=[(money(u['G']), 'Rediseño multipágina · ítem G'), (f"{money(m['5'])} / mes", 'SEO + GEO · servicio 5'), (f"{money(m['6'])} / mes", 'Mantenimiento · servicio 6')],
        includes=[('Hasta 10 páginas con su marca', 'Inicio, préstamos, empresas, nosotros, preguntas frecuentes, contacto, acceso de clientes y páginas legales.'),
                  ('Formularios reales', 'Afiliar empresa y solicitar préstamo conectados a n8n y al CRM, con página de gracias medible.'),
                  ('Lo que pide Google para préstamos', 'Licencia del MICI, tasa, plazos, ejemplo de costo y una sola dirección, visibles sin clics.'),
                  ('SEO técnico desde el inicio', 'Títulos, meta descripciones, H1, datos estructurados de organización financiera y preguntas frecuentes, sitemap y velocidad en móvil.'),
                  ('SEO + GEO mensual', 'Search Console y GA4, 2 contenidos nuevos al mes y datos para que ChatGPT y Gemini mencionen a Kredit.'),
                  ('Perfil de Google', 'Ficha de empresa optimizada y estrategia de reseñas: en financieras pesan tanto como el anuncio.'),
                  ('VPS de Elemento Web', 'Servidor privado con respaldos diarios, certificados y monitoreo; los datos de los leads quedan bajo su control.'),
                  ('Mantenimiento prioritario', 'Seguridad, respaldos, monitoreo, respuesta el mismo día y 1 hora de cambios al mes.')],
        sample_title='La web nueva, en vista previa', sample=sample,
        after=cards_html + vps_html,
        deliver=['Sitio de hasta 10 páginas publicado en kredit.com.pa', 'Formularios conectados y medición instalada',
                 'Informe mensual de Search Console y GA4', 'Ficha de Google optimizada'],
        measure=['Visitas orgánicas', 'Consultas en Search Console', 'Solicitudes desde la web', 'Core Web Vitals', 'Menciones en asistentes de IA'])
