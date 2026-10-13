/* Plantillas de las láminas (1080 x 1350). Cada función devuelve HTML.
   Marcado mínimo en los textos: {{cifra}} = marcador cian detrás de UNA cifra;
   [[palabra]] = acento (accent-on-dark sobre marino, accent-on-light sobre claro). */
import { pathToFileURL } from 'node:url';
import { resolve, dirname } from 'node:path';

const AQUI = dirname(new URL(import.meta.url).pathname);
export const RAIZ = resolve(AQUI, '../..');
export const f = (rel) => pathToFileURL(resolve(RAIZ, rel)).href;

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
export const rich = (s, tone = 'dark') =>
  esc(s)
    .replace(/\{\{(.+?)\}\}/g, '<span class="mk">$1</span>')
    .replace(/\[\[(.+?)\]\]/g, `<span class="${tone === 'dark' ? 'hl-dark' : 'hl-light'}">$1</span>`);

const ARROW = '<svg viewBox="0 0 44 28" fill="none" stroke="currentColor" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 14h38M28 3l12 11-12 11"/></svg>';
const CHAT = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 12a9 9 0 0 1-13.4 7.8L3 21l1.3-4.4A9 9 0 1 1 21 12Z"/></svg>';
const CHECK = '<svg viewBox="0 0 32 32" width="40" height="40" fill="none" stroke="#00688c" stroke-width="3.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 17 7 7L26 9"/></svg>';

/* Marco común: cabecera de voz de datos, contenido, pie con logo y señal de deslizar o dirección */
function marco({ tone = 'dark', grid = false, n, total, label = 'Elemento Web · Panamá', pie = 'cue', contenido }) {
  const logo = f(tone === 'dark' ? 'brand/logo-horizontal-oscuro.svg' : 'brand/logo-horizontal-color.svg');
  const idx = n && total ? `${String(n).padStart(2, '0')}/${String(total).padStart(2, '0')}` : '';
  const derecha =
    pie === 'cue'
      ? `<span class="data cue">Desliza ${ARROW}</span>`
      : `<span class="data">elementoweb.com</span>`;
  return `<section class="slide ${tone}${grid ? ' grid' : ''}">
  <div class="top"><span class="data">${esc(label)}</span><span class="data">${idx}</span></div>
  ${contenido}
  <div class="bot"><img src="${logo}" alt="Elemento Web">${derecha}</div>
</section>`;
}

export const portada = (o) =>
  marco({
    ...o, tone: 'dark', grid: true,
    contenido: `<div class="center stack">
      ${o.kicker ? `<p class="data">${esc(o.kicker)}</p>` : ''}
      <h1 class="display">${rich(o.h1)}</h1>
      ${o.sub ? `<p class="sub" style="color:var(--on-navy-muted);max-width:880px">${rich(o.sub)}</p>` : ''}
    </div>`,
  });

export const lista = (o) =>
  marco({
    tone: o.tone ?? 'light', ...o,
    contenido: `<div class="center stack" style="width:100%">
      <h2 class="headline" style="${o.rows.length >= 6 ? 'font-size:76px' : ''}">${rich(o.h2, o.tone ?? 'light')}</h2>
      <div class="rows${o.rows.length >= 6 ? ' compact' : ''}${o.rows.every((r) => r.n === '') ? ' sin-num' : ''}">${o.rows
        .map((r, i) => `<div><span class="n">${r.n ?? String(i + 1).padStart(2, '0')}</span><span class="t">${esc(r.t)}</span>${r.d ? `<span class="d">${esc(r.d)}</span>` : ''}</div>`)
        .join('')}</div>
    </div>`,
  });

export function recibo(o) {
  const tone = o.tone ?? 'alt';
  const filas = o.rows
    .map((r) => {
      if (r.chk) return `<div class="row" style="align-items:flex-start;gap:24px;padding:6px 0"><span style="flex:none;margin-top:3px">${CHECK}</span><span class="k" style="font-size:35px;font-weight:500;line-height:1.25">${esc(r.k)}</span></div>`;
      const v = r.blank ? esc(r.v) : r.mk ? `<span class="mk">${esc(r.v)}</span>` : esc(r.v);
      return `<div class="row${r.blank ? ' blank' : ''}"><span class="k">${esc(r.k)}${r.sub ? `<span class="sub2">${esc(r.sub)}</span>` : ''}</span><span class="dots"></span><span class="v">${v}${r.u ? ` <small>${esc(r.u)}</small>` : ''}</span></div>`;
    })
    .join('');
  return marco({
    tone, ...o,
    contenido: `<div class="center stack" style="width:100%">
      ${o.h2 ? `<h2 class="headline" style="${o.h2Size ? `font-size:${o.h2Size}px` : ''}">${rich(o.h2, 'light')}</h2>` : ''}
      <div class="rc-wrap" style="margin-right:16px"><div class="rc${o.tight ? ' tight' : ''}">
        <div class="hd"><span class="data">${esc(o.hd[0])}</span><span class="data">${esc(o.hd[1])}</span></div>
        ${filas}
        ${o.ft ? `<div class="ft">${rich(o.ft, 'light').replace(/\*\*(.+?)\*\*/g, '<b>$1</b>')}</div>` : ''}
      </div></div>
    </div>`,
  });
}

export const proyecto = (o) =>
  marco({
    ...o, tone: 'dark', grid: true,
    contenido: `<div class="center stack" style="width:100%">
      <p class="data">${esc(o.kicker)}</p>
      <h2 class="headline">${rich(o.h2)}</h2>
      <div class="br-wrap" style="margin:16px 18px 0 0"><div class="br">
        <div class="bar"><span class="data">${esc(o.url)}</span></div>
        <img src="${f(o.img)}" alt="${esc(o.alt)}" style="aspect-ratio:${o.ratio ?? '3/2'}">
      </div></div>
      ${o.caption ? `<p class="body" style="color:var(--on-navy-muted);font-size:36px">${rich(o.caption)}</p>` : ''}
    </div>`,
  });

export const texto = (o) =>
  marco({
    tone: o.tone ?? 'light', ...o,
    contenido: `<div class="center stack" style="width:100%">
      ${o.kicker ? `<p class="data">${esc(o.kicker)}</p>` : ''}
      <h2 class="headline">${rich(o.h2, o.tone ?? 'light')}</h2>
      ${(o.p ?? []).map((p) => `<p class="body">${rich(p, o.tone ?? 'light')}</p>`).join('')}
    </div>`,
  });

export const cierre = (o) =>
  marco({
    ...o, tone: 'dark', grid: true, pie: 'url',
    contenido: `<div class="center stack" style="width:100%">
      <h2 class="display" style="font-size:96px">${rich(o.h2)}</h2>
      ${o.sub ? `<p class="sub" style="color:var(--on-navy-muted)">${rich(o.sub)}</p>` : ''}
      <div class="btns" style="margin-top:20px">
        <span class="btn pri">${esc(o.btn)}</span>
        ${o.wa ? `<span class="btn wa">${CHAT}${esc(o.wa)}</span>` : ''}
      </div>
      ${o.nota ? `<p class="note data" style="text-transform:none;letter-spacing:.02em;font-size:30px">${esc(o.nota)}</p>` : ''}
    </div>`,
  });

export const preguntas = (o) =>
  marco({
    tone: 'light', ...o,
    contenido: `<div class="center stack" style="width:100%">
      <h2 class="headline" style="font-size:70px">${rich(o.h2, 'light')}</h2>
      <div>${o.qs.map((q, i) => `<div class="q"><span class="num">${i + 1}</span><div><div class="t">${esc(q.t)}</div><div class="d">${esc(q.d)}</div></div></div>`).join('')}</div>
      ${o.ft ? `<p class="body" style="font-size:36px;color:var(--muted)">${rich(o.ft, 'light')}</p>` : ''}
    </div>`,
  });

export const dato = (o) =>
  marco({
    ...o, tone: 'dark', grid: true, pie: 'url',
    contenido: `<div class="center stack" style="width:100%">
      <p class="data">${esc(o.kicker)}</p>
      <div class="display" style="font-size:200px;line-height:.95">${rich(o.big)}</div>
      <p class="sub" style="color:var(--on-navy)">${rich(o.p)}</p>
      ${o.nota ? `<p class="note data" style="text-transform:none;letter-spacing:.02em;font-size:30px">${esc(o.nota)}</p>` : ''}
    </div>`,
  });

/* Piezas de perfil: avatar y portadas (lienzo propio). */
export function avatar() {
  return `<div class="profile" style="width:1080px;height:1080px;display:grid;place-items:center">
    <img src="${f('brand/isotipo-azul.svg')}" style="width:560px;height:auto;display:block" alt="Elemento Web">
  </div>`;
}
export function portadaLinkedIn() {
  /* 2100 x 350 (6:1). El logo de la página tapa el borde inferior izquierdo: el texto empieza a la derecha. */
  return `<div class="profile grid" style="width:2100px;height:350px;display:flex;align-items:center;padding:0 90px 0 640px">
    <div style="display:flex;flex-direction:column;gap:14px">
      <div style="font-size:64px;line-height:1.05;font-weight:800;letter-spacing:-.025em">Diseño web en Panamá <span class="hl-dark">con precios públicos.</span></div>
      <div class="data" style="font-size:26px;color:var(--on-navy-muted);white-space:nowrap">Landing desde $550 · Web empresarial desde $1,250 · Tienda online desde $1,950</div>
    </div></div>`;
}
export function portadaFacebook() {
  /* 1640 x 624. En móvil se recortan ~180 px por lado y la foto de perfil tapa abajo a la izquierda. */
  return `<div class="profile grid" style="width:1640px;height:624px;display:flex;align-items:center;padding:0 200px 0 560px">
    <div style="display:flex;flex-direction:column;gap:22px">
      <div class="data" style="font-size:28px;color:var(--on-navy-muted)">Agencia en Ciudad de Panamá</div>
      <div style="font-size:92px;line-height:1.02;font-weight:800;letter-spacing:-.025em">Diseño web con el precio <span class="hl-dark">a la vista.</span></div>
      <div class="data" style="font-size:28px;color:var(--on-navy-muted)">Landing desde $550 · elementoweb.com</div>
    </div></div>`;
}
