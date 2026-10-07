// Gráficos en SVG/HTML propios, sin librerías. Marcas finas, rejilla en línea fina,
// tooltip al pasar el puntero y con teclado; cada gráfico tiene su tabla alternativa.

const NS = 'http://www.w3.org/2000/svg';
function el(tag, attrs = {}, parent) {
  const n = document.createElementNS(NS, tag);
  for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, v);
  if (parent) parent.appendChild(n);
  return n;
}
function txt(tag, attrs, text, parent) {
  const n = el(tag, attrs, parent);
  n.textContent = text;
  return n;
}

// ---------- tooltip compartido ----------
let tip;
function getTip() {
  if (!tip) {
    tip = document.createElement('div');
    tip.className = 'chart-tip';
    tip.setAttribute('role', 'presentation');
    tip.hidden = true;
    document.body.appendChild(tip);
  }
  return tip;
}
// rows: [{value, label, key:'line'|'dash'|'rect', color}]
function showTip(x, y, title, rows) {
  const t = getTip();
  t.replaceChildren();
  if (title) {
    const h = document.createElement('div');
    h.className = 'chart-tip-title';
    h.textContent = title;
    t.appendChild(h);
  }
  for (const r of rows) {
    const row = document.createElement('div');
    row.className = 'chart-tip-row';
    const k = document.createElement('span');
    k.className = 'chart-tip-key ' + (r.key || 'line');
    k.dataset.color = r.colorName || '';
    const v = document.createElement('strong');
    v.textContent = r.value;
    const l = document.createElement('span');
    l.textContent = r.label;
    row.append(k, v, l);
    t.appendChild(row);
  }
  t.hidden = false;
  const w = t.offsetWidth, h = t.offsetHeight;
  let left = x + 14, top = y - h - 12;
  if (left + w > window.innerWidth - 8) left = x - w - 14;
  if (left < 8) left = 8;
  if (top < 8) top = y + 16;
  t.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;
}
export function hideTip() { if (tip) tip.hidden = true; }

function observe(container, draw) {
  let last = 0;
  const ro = new ResizeObserver(() => {
    const w = Math.floor(container.clientWidth);
    if (w && w !== last) { last = w; draw(w); }
  });
  ro.observe(container);
  const w0 = Math.floor(container.clientWidth);
  if (w0) { last = w0; draw(w0); }
  return () => ro.disconnect();
}

// ---------- línea: mora sobre cartera ----------
// opts: { history:[{day,value}], scenario:[{day,value}], control:[{day,value}], limit, goal, yMin, yMax, label }
export function moraChart(container, opts) {
  return observe(container, (W) => {
    container.replaceChildren();
    const narrow = W < 560;
    const H = narrow ? 250 : 300;
    const m = { t: 22, r: narrow ? 14 : 112, b: 34, l: 40 };
    const iw = W - m.l - m.r, ih = H - m.t - m.b;
    const x0 = -90, x1 = 60;
    const sx = (d) => m.l + ((d - x0) / (x1 - x0)) * iw;
    const sy = (v) => m.t + (1 - (v - opts.yMin) / (opts.yMax - opts.yMin)) * ih;
    const svg = el('svg', { width: W, height: H, viewBox: `0 0 ${W} ${H}`, class: 'chart-svg', role: 'img', 'aria-label': opts.label, tabindex: '0' }, container);
    txt('title', {}, opts.label, svg);
    // rejilla
    const g = el('g', { class: 'grid' }, svg);
    for (let v = opts.yMin; v <= opts.yMax; v += 1) {
      el('line', { x1: m.l, x2: m.l + iw, y1: sy(v), y2: sy(v), class: 'gridline' }, g);
      txt('text', { x: m.l - 8, y: sy(v) + 4, class: 'tick', 'text-anchor': 'end' }, v + '%', g);
    }
    const ticks = narrow ? [-90, 0, 60] : [-90, -60, -30, 0, 30, 60];
    for (const d of ticks) {
      const label = d === 0 ? 'Hoy' : d < 0 ? `hace ${-d} d` : `+${d} d`;
      txt('text', { x: sx(d), y: H - 10, class: 'tick' + (d === 0 ? ' tick-strong' : ''), 'text-anchor': d === -90 ? 'start' : d === 60 ? 'end' : 'middle' }, label, g);
    }
    // zona del escenario
    el('rect', { x: sx(0), y: m.t, width: sx(60) - sx(0), height: ih, class: 'zone-scenario' }, svg);
    txt('text', { x: sx(0) + 8, y: m.t + 14, class: 'zone-label' }, narrow ? 'Escenario' : 'Escenario ilustrativo · 60 días', svg);
    // referencias
    el('line', { x1: m.l, x2: m.l + iw, y1: sy(opts.limit), y2: sy(opts.limit), class: 'ref-limit' }, svg);
    el('line', { x1: m.l, x2: m.l + iw, y1: sy(opts.goal), y2: sy(opts.goal), class: 'ref-goal' }, svg);
    const refX = narrow ? m.l + 6 : m.l + iw + 8;
    const refAnchor = 'start';
    txt('text', { x: refX, y: sy(opts.limit) + (narrow ? -6 : 4), class: 'ref-text', 'text-anchor': refAnchor }, `Límite ${opts.limit}%`, svg);
    txt('text', { x: refX, y: sy(opts.goal) + (narrow ? -6 : 4), class: 'ref-text', 'text-anchor': refAnchor }, `Meta ${opts.goal}%`, svg);
    // marcador de puesta en marcha
    el('line', { x1: sx(0), x2: sx(0), y1: m.t - 6, y2: m.t + ih, class: 'marker-line' }, svg);
    // series
    const path = (pts) => pts.map((p, i) => (i ? 'L' : 'M') + sx(p.day).toFixed(1) + ' ' + sy(p.value).toFixed(1)).join(' ');
    el('path', { d: path(opts.control), class: 'series-control' }, svg);
    el('path', { d: path(opts.scenario), class: 'series-scenario' }, svg);
    el('path', { d: path(opts.history), class: 'series-history' }, svg);
    const lastH = opts.history[opts.history.length - 1];
    const lastS = opts.scenario[opts.scenario.length - 1];
    const lastC = opts.control[opts.control.length - 1];
    el('circle', { cx: sx(lastH.day), cy: sy(lastH.value), r: 5, class: 'dot-history' }, svg);
    el('circle', { cx: sx(lastS.day), cy: sy(lastS.value), r: 5, class: 'dot-scenario' }, svg);
    if (!narrow) {
      txt('text', { x: sx(60) + 10, y: sy(lastS.value) + 4, class: 'end-label' }, `Escenario ${lastS.value.toFixed(1)}%`, svg);
      txt('text', { x: sx(60) + 10, y: sy(lastC.value) + 20, class: 'end-label muted' }, `Control ${lastC.value.toFixed(1)}%`, svg);
    }
    txt('text', { x: sx(lastH.day) - 8, y: sy(lastH.value) - 12, class: 'end-label', 'text-anchor': 'end' }, `Hoy ${lastH.value.toFixed(1)}%`, svg);

    // capa de interacción
    const cross = el('line', { y1: m.t, y2: m.t + ih, class: 'crosshair', visibility: 'hidden' }, svg);
    const hit = el('rect', { x: m.l, y: m.t, width: iw, height: ih, class: 'hit' }, svg);
    const valAt = (arr, d) => arr.find((p) => p.day === d);
    let cur = 0;
    const show = (d, cx, cy) => {
      cur = d;
      cross.setAttribute('x1', sx(d)); cross.setAttribute('x2', sx(d));
      cross.setAttribute('visibility', 'visible');
      const rows = [];
      const h = valAt(opts.history, d), sc = valAt(opts.scenario, d), c = valAt(opts.control, d);
      if (h) rows.push({ value: h.value.toFixed(2) + '%', label: 'Mora real', key: 'line', colorName: 'brand' });
      if (sc && d > 0) rows.push({ value: sc.value.toFixed(2) + '%', label: 'Escenario', key: 'dash', colorName: 'violet' });
      if (c && d > 0) rows.push({ value: c.value.toFixed(2) + '%', label: 'Grupo de control', key: 'dash', colorName: 'gray' });
      const title = d === 0 ? 'Hoy · 15 oct 2026' : d < 0 ? `Hace ${-d} días` : `Día ${d} tras la puesta en marcha`;
      const r = svg.getBoundingClientRect();
      showTip(cx ?? r.left + sx(d), cy ?? r.top + m.t + 20, title, rows);
    };
    hit.addEventListener('pointermove', (e) => {
      const r = svg.getBoundingClientRect();
      const d = Math.round(x0 + ((e.clientX - r.left - m.l) / iw) * (x1 - x0));
      show(Math.max(x0, Math.min(x1, d)), e.clientX, e.clientY);
    });
    hit.addEventListener('pointerleave', () => { cross.setAttribute('visibility', 'hidden'); hideTip(); });
    svg.addEventListener('keydown', (e) => {
      if (e.key !== 'ArrowLeft' && e.key !== 'ArrowRight') return;
      e.preventDefault();
      show(Math.max(x0, Math.min(x1, cur + (e.key === 'ArrowRight' ? 5 : -5))));
    });
    svg.addEventListener('focus', () => show(cur));
    svg.addEventListener('blur', () => { cross.setAttribute('visibility', 'hidden'); hideTip(); });
  });
}

// ---------- barras horizontales (una serie) ----------
// rows: [{label, value, display, sub}]
export function hBars(container, { rows, label, unit }) {
  container.replaceChildren();
  container.classList.add('hbars');
  container.setAttribute('role', 'img');
  container.setAttribute('aria-label', label);
  const max = Math.max(...rows.map((r) => r.value)) || 1;
  for (const r of rows) {
    const row = document.createElement('div');
    row.className = 'hbar-row';
    const lab = document.createElement('div');
    lab.className = 'hbar-label';
    lab.textContent = r.label;
    const track = document.createElement('div');
    track.className = 'hbar-track';
    const bar = document.createElement('div');
    bar.className = 'hbar';
    bar.style.setProperty('--w', ((r.value / max) * 100).toFixed(2) + '%');
    bar.tabIndex = -1;
    const val = document.createElement('div');
    val.className = 'hbar-value';
    val.textContent = r.display;
    if (r.sub) {
      const s = document.createElement('span');
      s.textContent = r.sub;
      val.appendChild(s);
    }
    track.append(bar, val);
    row.append(lab, track);
    const tipRows = [{ value: r.display, label: unit, key: 'rect', colorName: 'brand' }];
    if (r.sub) tipRows.push({ value: r.sub.trim(), label: '', key: 'none' });
    row.addEventListener('pointermove', (e) => showTip(e.clientX, e.clientY, r.label, tipRows));
    row.addEventListener('pointerleave', hideTip);
    container.appendChild(row);
  }
  return () => {};
}

// ---------- barra apilada 100% (secuencial) ----------
export function stackBar(container, { segments, label }) {
  container.replaceChildren();
  container.classList.add('stack');
  const total = segments.reduce((t, s) => t + s.value, 0);
  const bar = document.createElement('div');
  bar.className = 'stack-bar';
  bar.setAttribute('role', 'img');
  bar.setAttribute('aria-label', label + ': ' + segments.map((s) => `${s.label} ${Math.round((s.value / total) * 100)}%`).join(', '));
  const legend = document.createElement('ul');
  legend.className = 'legend';
  segments.forEach((s, i) => {
    const p = (s.value / total) * 100;
    const seg = document.createElement('div');
    seg.className = 'stack-seg seq-' + i;
    seg.style.setProperty('--w', p.toFixed(2) + '%');
    const t = document.createElement('span');
    t.textContent = `${s.short || s.label} · ${Math.round(p)}%`;
    seg.appendChild(t);
    seg.addEventListener('pointermove', (e) => showTip(e.clientX, e.clientY, s.label, [{ value: `${s.value} cuentas`, label: `${Math.round(p)}%`, key: 'rect', colorName: 'seq-' + i }]));
    seg.addEventListener('pointerleave', hideTip);
    bar.appendChild(seg);
    const li = document.createElement('li');
    const sw = document.createElement('i');
    sw.className = 'swatch seq-' + i;
    li.append(sw, document.createTextNode(`${s.label} · ${s.value}`));
    legend.appendChild(li);
  });
  container.append(bar, legend);
  // Una etiqueta que no cabe con holgura no se recorta: se quita (queda en leyenda, tooltip y tabla).
  const fit = () => bar.querySelectorAll('.stack-seg').forEach((seg) => { const t = seg.querySelector('span'); if (t) { t.hidden = false; if (t.offsetWidth + 12 > seg.clientWidth) t.hidden = true; } });
  fit();
  const ro = new ResizeObserver(fit);
  ro.observe(bar);
  return () => ro.disconnect();
}

// ---------- sparkline ----------
export function sparkline(values, label) {
  const w = 96, h = 28, p = 4;
  const min = Math.min(...values), max = Math.max(...values);
  const x = (i) => p + (i / (values.length - 1)) * (w - 2 * p);
  const y = (v) => h - p - ((v - min) / (max - min || 1)) * (h - 2 * p);
  const d = values.map((v, i) => (i ? 'L' : 'M') + x(i).toFixed(1) + ' ' + y(v).toFixed(1)).join(' ');
  const li = values.length - 1;
  return `<svg class="spark" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="${label}"><path d="${d}"/><circle cx="${x(li).toFixed(1)}" cy="${y(values[li]).toFixed(1)}" r="3.5"/></svg>`;
}
