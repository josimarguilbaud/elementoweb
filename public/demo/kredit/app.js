// Recupera · demo para Kredit — router por hash, vistas, recorrido guiado.
import { PRODUCT_NAME, PRODUCT_BY, WORKSPACE, DEMO_TODAY, BASE, RULE_TEMPLATES, DEFAULT_RULE, MOTIVOS, COBRADORES, SIN_ASIGNAR, money, moneyShort, int, pct, fmtDate, fmtDateShort, fmtDateTime, fmtDateLong, stageLabel, withinRule, ruleReasons, moraHistory, mulberry32, SEED } from './data.js?v=20261007b';
import { getState, dispatch, subscribe, kpis, ruleStats, exceptions, pendingExceptions, scenarioEnd, verifyChain } from './store.js?v=20261007b';
import { moraChart, hBars, stackBar, sparkline, hideTip } from './charts.js?v=20261007b';
import { SCRIPTS, SCRIPT_TABS, VOICE, chatPlayer, voicePlayer } from './scripts.js?v=20261007b';
import { toCsv, csvFilename, downloadCsv } from './csv.js?v=20261007b';

// ---------- utilidades ----------
const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));
const esc = (v) => String(v ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' })[c]);
const ic = (name, cls = '') => `<svg class="ic ${cls}" aria-hidden="true"><use href="#i-${name}"/></svg>`;
const tag = (text = 'ejemplo') => `<span class="tag-ej">${esc(text)}</span>`;
const plural = (n, one, many) => (n === 1 ? one : many);

document.querySelectorAll('[data-product-name]').forEach((n) => { n.textContent = PRODUCT_NAME; });
document.querySelectorAll('[data-product-by]').forEach((n) => { n.textContent = PRODUCT_BY; });
document.querySelectorAll('[data-workspace]').forEach((n) => { n.textContent = WORKSPACE; });

// ---------- tema claro / oscuro ----------
const THEME_KEY = 'recupera-tema';
function effectiveDark() {
  const t = document.documentElement.dataset.theme;
  if (t) return t === 'dark';
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function syncThemeButton() {
  const dark = effectiveDark();
  $$('[data-action="theme-toggle"]').forEach((b) => b.setAttribute('aria-label', dark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'));
  const meta = document.querySelector('meta[name="theme-color"]');
  if (meta) meta.content = dark ? '#0b1220' : '#f6f8fc';
}
try { const t = localStorage.getItem(THEME_KEY); if (t === 'dark' || t === 'light') document.documentElement.dataset.theme = t; } catch { /* sin almacenamiento */ }

// ---------- navegación ----------
const NAV = [
  { id: 'resumen', label: 'Resumen', icon: 'resumen' },
  { id: 'reglas', label: 'Reglas y cumplimiento', icon: 'reglas' },
  { id: 'aprobaciones', label: 'Aprobaciones', short: 'Aprobar', icon: 'aprobaciones', badge: true },
  { id: 'conciliacion', label: 'Conciliación', icon: 'conciliacion' },
  { id: 'conversacion', label: 'Conversación', short: 'Chat', icon: 'conversacion' },
  { id: 'bandeja', label: 'Bandeja', icon: 'bandeja', cases: true },
  { id: 'cuenta', label: 'Cuentas', icon: 'cuentas' },
  { id: 'conectores', label: 'Conectores', icon: 'conectores' },
  { id: 'ruta', label: 'Qué llega y cuándo', short: 'Ruta', icon: 'ruta' },
];
const TAB_IDS = ['resumen', 'bandeja', 'aprobaciones', 'conversacion'];

function navItem(n, cls) {
  return `<li><a class="${cls}" href="#${n.id}" data-nav="${n.id}"><svg class="ic" aria-hidden="true"><use href="#i-${n.icon}"/></svg><span class="nav-label">${esc(cls === 'tab-link' ? (n.short || n.label) : n.label)}</span>${n.badge ? '<span class="badge" data-badge hidden></span>' : ''}${n.cases ? '<span class="badge badge-soft" data-cases hidden></span>' : ''}</a></li>`;
}
$('#side-nav').innerHTML = NAV.map((n) => navItem(n, 'nav-link')).join('');
$('#tab-nav').innerHTML = NAV.filter((n) => TAB_IDS.includes(n.id)).map((n) => navItem(n, 'tab-link')).join('') +
  `<li><button type="button" class="tab-link" data-action="more-open" aria-haspopup="dialog" aria-expanded="false" aria-controls="more-sheet"><svg class="ic" aria-hidden="true"><use href="#i-more"/></svg><span class="nav-label">Más</span></button></li>`;
$('#more-nav').innerHTML = NAV.filter((n) => !TAB_IDS.includes(n.id)).map((n) => navItem(n, 'more-link')).join('');
// Etiqueta accesible del menú en modo riel (solo iconos): el texto existe, se oculta visualmente con CSS.

function updateChrome(s) {
  const k = kpis(s);
  $$('[data-badge]').forEach((b) => {
    b.hidden = k.pending === 0;
    b.textContent = String(k.pending);
    b.setAttribute('aria-label', `${k.pending} ${plural(k.pending, 'pendiente', 'pendientes')}`);
  });
  $$('[data-cases]').forEach((b) => {
    b.hidden = k.openCases === 0;
    b.textContent = String(k.openCases);
    b.setAttribute('aria-label', `${k.openCases} ${plural(k.openCases, 'caso abierto', 'casos abiertos')}`);
  });
}

// ---------- estado de interfaz (no va al store) ----------
const ui = {
  bandejaMotive: 'todos',
  bandejaOwner: 'todos',
  selectedCase: null,
  tables: {},
  lastFeedHighlight: null,
};

// ---------- router ----------
const ROUTES = {};
let current = { name: null, param: null, cleanup: [], update: null };

function parseHash() {
  const h = decodeURIComponent(location.hash.replace(/^#\/?/, ''));
  const [name, ...rest] = h.split('/');
  return { name: name || 'resumen', param: rest.join('/') || null };
}

function cleanupView() {
  current.cleanup.forEach((fn) => { try { fn(); } catch { /* nada */ } });
  current.cleanup = [];
  current.update = null;
  hideTip();
}

function render({ focus = true, keepScroll = false } = {}) {
  const { name, param } = parseHash();
  const route = ROUTES[name] ? name : 'noencontrado';
  const def = ROUTES[route];
  const sameView = current.name === route && current.param === param;
  const scrollY = window.scrollY;
  const active = document.activeElement;
  const focusKey = active && active.closest('#view') ? (active.id || active.dataset.focus) : null;
  cleanupView();
  current.name = route;
  current.param = param;
  const root = $('#view');
  const ctx = { root, param, cleanup: current.cleanup, setUpdate: (fn) => { current.update = fn; } };
  root.innerHTML = def.html(getState(), param);
  if (def.mount) def.mount(ctx, getState());
  const title = typeof def.title === 'function' ? def.title(getState(), param) : def.title;
  document.title = `${title} · Demo · ${PRODUCT_NAME} — cobranza con IA`;
  $('#crumb-current').textContent = title;
  const navId = route === 'noencontrado' ? null : route;
  $$('[data-nav]').forEach((a) => {
    if (a.dataset.nav === navId) a.setAttribute('aria-current', 'page'); else a.removeAttribute('aria-current');
  });
  updateChrome(getState());
  if (keepScroll || sameView) {
    window.scrollTo(0, scrollY);
    if (focusKey) {
      const el = document.getElementById(focusKey) || root.querySelector(`[data-focus="${CSS.escape(focusKey)}"]`);
      if (el) el.focus({ preventScroll: true });
    }
  } else {
    window.scrollTo(0, 0);
    if (focus) {
      const h1 = root.querySelector('h1');
      if (h1) h1.focus({ preventScroll: true });
    }
  }
}

window.addEventListener('hashchange', () => {
  closeMore(false);
  render({ focus: true });
  if (tour.active) positionTour();
});

subscribe((s, action) => {
  updateChrome(s);
  if (action.type === 'RESET_DEMO') return;
  if (current.update) current.update(s, action);
  else render({ keepScroll: true });
});

// ---------- delegación de eventos ----------
const ACTIONS = {};
document.addEventListener('click', (e) => {
  const t = e.target.closest('[data-action]');
  if (!t) return;
  const fn = ACTIONS[t.dataset.action];
  if (fn) { fn(t, e); }
});
document.addEventListener('input', (e) => {
  const t = e.target.closest('[data-input]');
  if (t && INPUTS[t.dataset.input]) INPUTS[t.dataset.input](t, e, false);
});
document.addEventListener('change', (e) => {
  const t = e.target.closest('[data-input]');
  if (t && INPUTS[t.dataset.input]) INPUTS[t.dataset.input](t, e, true);
});
const INPUTS = {};

ACTIONS['theme-toggle'] = () => {
  const next = effectiveDark() ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem(THEME_KEY, next); } catch { /* nada */ }
  syncThemeButton();
};

ACTIONS.skip = (t, e) => {
  e.preventDefault();
  const h1 = $('#view h1');
  if (h1) h1.focus();
};

ACTIONS['reset-demo'] = () => {
  closeMore(false);
  endTour();
  dispatch({ type: 'RESET_DEMO' });
  Object.assign(ui, { bandejaMotive: 'todos', bandejaOwner: 'todos', selectedCase: null, tables: {} });
  if (location.hash === '#resumen') render({ focus: true }); else location.hash = '#resumen';
  toast('Demo reiniciada: todo vuelve al estado inicial.');
};

ACTIONS['toggle-table'] = (t) => {
  const id = t.getAttribute('aria-controls');
  const box = document.getElementById(id);
  const open = t.getAttribute('aria-expanded') !== 'true';
  t.setAttribute('aria-expanded', String(open));
  t.textContent = open ? 'Ocultar tabla' : 'Ver como tabla';
  box.hidden = !open;
  ui.tables[id] = open;
};

// ---------- hoja "Más" (móvil) ----------
let moreReturn = null;
ACTIONS['more-open'] = (t) => {
  moreReturn = t;
  $('#more-sheet').hidden = false;
  $('#more-backdrop').hidden = false;
  t.setAttribute('aria-expanded', 'true');
  const first = $('#more-sheet a, #more-sheet button');
  if (first) first.focus();
};
function closeMore(restore = true) {
  if ($('#more-sheet').hidden) return;
  $('#more-sheet').hidden = true;
  $('#more-backdrop').hidden = true;
  $$('[data-action="more-open"]').forEach((b) => b.setAttribute('aria-expanded', 'false'));
  if (restore && moreReturn) moreReturn.focus();
}
ACTIONS['more-close'] = () => closeMore(true);
$('#more-backdrop').addEventListener('click', () => closeMore(true));
$('#more-nav').addEventListener('click', (e) => { if (e.target.closest('a')) closeMore(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    if (!$('#more-sheet').hidden) closeMore(true);
    else if (tour.active) endTour();
  }
  if (e.key === 'Tab' && !$('#more-sheet').hidden) {
    const items = $$('#more-sheet a, #more-sheet button');
    const i = items.indexOf(document.activeElement);
    if (e.shiftKey && i <= 0) { e.preventDefault(); items[items.length - 1].focus(); }
    else if (!e.shiftKey && i === items.length - 1) { e.preventDefault(); items[0].focus(); }
  }
});

// ---------- toasts ----------
let toastTimer = null;
function toast(msg, opts = {}) {
  const region = $('#toast-region');
  region.replaceChildren();
  const box = document.createElement('div');
  box.className = 'toast' + (opts.tone ? ' toast-' + opts.tone : '');
  const icon = document.createElement('span');
  icon.innerHTML = ic(opts.tone === 'warn' ? 'alert' : 'check-circle');
  const p = document.createElement('p');
  p.textContent = msg;
  box.append(icon.firstChild, p);
  if (opts.undo) {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'btn btn-link toast-undo';
    b.textContent = 'Deshacer';
    b.addEventListener('click', () => { opts.undo(); region.replaceChildren(); });
    box.appendChild(b);
  }
  region.appendChild(box);
  clearTimeout(toastTimer);
  const dur = opts.undo ? 6000 : 4000;
  const arm = () => { clearTimeout(toastTimer); toastTimer = setTimeout(() => box.remove(), dur); };
  box.addEventListener('pointerenter', () => clearTimeout(toastTimer));
  box.addEventListener('pointerleave', arm);
  box.addEventListener('focusin', () => clearTimeout(toastTimer));
  box.addEventListener('focusout', arm);
  arm();
}

// ---------- piezas comunes ----------
function pageHead(eyebrow, title, lede, extra = '') {
  return `<header class="page-head"><div><p class="eyebrow">${esc(eyebrow)}</p><h1 tabindex="-1">${esc(title)}</h1>${lede ? `<p class="lede">${lede}</p>` : ''}</div>${extra}</header>`;
}
function tableToggle(id, label = 'Ver como tabla') {
  const open = !!ui.tables[id];
  return `<button type="button" class="btn btn-link small" data-action="toggle-table" aria-expanded="${open}" aria-controls="${id}">${open ? 'Ocultar tabla' : esc(label)}</button>`;
}
function tableBox(id, caption, head, rows) {
  return `<div class="table-box" id="${id}" ${ui.tables[id] ? '' : 'hidden'}><div class="table-scroll"><table><caption class="sr-only">${esc(caption)}</caption><thead><tr>${head.map((h, i) => `<th scope="col"${i ? ' class="n"' : ''}>${esc(h)}</th>`).join('')}</tr></thead><tbody>${rows.map((r) => `<tr>${r.map((c, i) => (i ? `<td class="n">${esc(c)}</td>` : `<th scope="row">${esc(c)}</th>`)).join('')}</tr>`).join('')}</tbody></table></div></div>`;
}
const STATUS = {
  en_secuencia: { label: 'En secuencia', icon: 'clock', tone: 'info' },
  pagado: { label: 'Pagado · fuera de secuencia', icon: 'check-circle', tone: 'ok' },
  disputa: { label: 'Disputa · contactos pausados', icon: 'pause', tone: 'warn' },
  no_titular: { label: 'Número de tercero · contactos detenidos', icon: 'x-circle', tone: 'warn' },
  promesa: { label: 'Promesa de pago vigente', icon: 'calendar', tone: 'ai' },
  humano: { label: 'Gestión humana', icon: 'user', tone: 'neutral' },
};
function statusChip(acc) {
  const st = STATUS[acc.status] || STATUS.en_secuencia;
  return `<span class="chip chip-${st.tone}">${ic(st.icon)}${esc(st.label)}</span>`;
}
const PRIORITY = { alta: { label: 'Alta', icon: 'up', tone: 'crit' }, media: { label: 'Media', icon: 'next', tone: 'warn' }, baja: { label: 'Baja', icon: 'down', tone: 'neutral' } };
const MOTIVE_ICON = { disputa: 'alert', ya_pague: 'coin', legal: 'file', no_contactar: 'x-circle', fuera_regla: 'reglas', nivel_d: 'user' };
const CHANNEL_ICON = { WhatsApp: 'conversacion', Email: 'mail', SMS: 'sms', 'Llamada IA': 'phone', Sistema: 'database', Pago: 'coin', Cobrador: 'user' };
function levelChip(l) { return `<span class="level level-${l}" title="Nivel de riesgo ${l}">Nivel ${l}</span>`; }

// =====================================================================
// RESUMEN
// =====================================================================
const HISTORY = moraHistory();
function scenarioSeries(sim) {
  const end = scenarioEnd(sim);
  const k = 18;
  const norm = 1 - Math.exp(-60 / k);
  const out = [];
  for (let d = 0; d <= 60; d++) out.push({ day: d, value: Math.round((10 - (10 - end) * ((1 - Math.exp(-d / k)) / norm)) * 100) / 100 });
  return out;
}
const CONTROL = (() => {
  const rnd = mulberry32(SEED + 60);
  const out = [];
  for (let d = 0; d <= 60; d++) out.push({ day: d, value: d === 0 ? 10 : Math.round((9.97 + (rnd() - 0.5) * 0.12) * 100) / 100 });
  return out;
})();

ROUTES.resumen = {
  title: 'Resumen gerencial',
  html(s) {
    const k = kpis(s);
    const end = scenarioEnd(s.sim);
    const up = k.recoveredDeltaPct >= 0;
    const st = ruleStats(s);
    const hist = [...HISTORY.filter((p) => p.day % 15 === 0)];
    const sc = scenarioSeries(s.sim).filter((p) => p.day % 15 === 0 && p.day > 0);
    const levels = BASE.levels;
    return `
${pageHead('Resumen gerencial · octubre 2026', 'Resumen gerencial', `Demo navegable de ${esc(PRODUCT_NAME)} para Kredit. No es el producto terminado: todas las cifras son de ejemplo.`)}
<section class="grid-hero" aria-label="Mora y resultados del mes">
  <article class="card hero-card" data-tour="hero">
    <div class="card-head">
      <div>
        <h2 class="kpi-label">Mora sobre cartera ${tag()}</h2>
        <p class="hero-value"><span id="mora-value">${k.moraPct.toFixed(1)}%</span>
          <span class="chip chip-crit">${ic('alert')}En el límite de 10%</span></p>
        <p class="muted small" id="mora-detail">${money(k.moraCents)} en mora de ${money(k.carteraCents)} de cartera</p>
      </div>
    </div>
    <ul class="legend" aria-label="Leyenda del gráfico">
      <li><i class="key key-line brand"></i>Mora real, 90 días sin la plataforma</li>
      <li><i class="key key-dash violet"></i>Escenario con la plataforma</li>
      <li><i class="key key-dash gray"></i>Grupo de control</li>
      <li><i class="key key-dash crit"></i>Límite 10%</li>
      <li><i class="key key-dot ok"></i>Meta 8%</li>
    </ul>
    <div class="chart-host" id="mora-chart"></div>
    <p class="caption"><strong>Escenario ilustrativo, no una proyección.</strong> La curva punteada muestra cómo podría verse la mora 60 días después de la puesta en marcha con las palancas de abajo. El grupo de control son cuentas que siguen el proceso actual.</p>
    <div class="sim" role="group" aria-labelledby="sim-title">
      <h3 id="sim-title" class="sim-title">${ic('gauge')}Simulador de escenario</h3>
      <div class="sim-grid">
        <label class="slider">
          <span class="slider-top"><span>Mora temprana contactada el día 0</span><output id="out-d0" for="sim-d0">${s.sim.d0Pct}%</output></span>
          <input type="range" id="sim-d0" min="20" max="100" step="5" value="${s.sim.d0Pct}" data-input="sim" data-key="d0Pct" aria-describedby="sim-result">
        </label>
        <label class="slider">
          <span class="slider-top"><span>Planes resueltos por regla</span><output id="out-rule" for="sim-rule">${s.sim.rulePct}%</output></span>
          <input type="range" id="sim-rule" min="20" max="100" step="1" value="${s.sim.rulePct}" data-input="sim" data-key="rulePct" aria-describedby="sim-result">
        </label>
      </div>
      <p class="sim-result" id="sim-result" aria-live="polite">${simResult(end)}</p>
      <p class="muted small">Con su regla actual, ${st.auto} de 120 planes se resuelven solos (${(st.auto / 1.2).toFixed(1)}%). <a href="#reglas/planes">Ajustar la regla</a></p>
    </div>
    <div class="chart-foot">${tableToggle('tbl-mora')}</div>
    ${tableBox('tbl-mora', 'Mora sobre cartera por fecha', ['Momento', 'Mora real', 'Escenario'], [...hist.map((p) => [p.day === 0 ? 'Hoy' : `Hace ${-p.day} días`, p.value.toFixed(2) + '%', '—']), ...sc.map((p) => [`Día ${p.day}`, '—', p.value.toFixed(2) + '%'])])}
  </article>
  <div class="hero-side">
    <article class="card kpi">
      <h2 class="kpi-label">Recuperado este mes ${tag()}</h2>
      <p class="kpi-value" id="kpi-recovered">${money(k.recoveredCents)}</p>
      <p class="delta ${up ? 'delta-up' : 'delta-down'}">${ic(up ? 'up' : 'down')}<span>${up ? '+' : '−'}${Math.abs(k.recoveredDeltaPct).toFixed(1)}% vs. septiembre (${moneyShort(k.recoveredPrevCents)})</span></p>
      ${sparkline(k.recoveredHistory, 'Recuperado de mayo a octubre, en aumento')}
    </article>
    <article class="card kpi">
      <h2 class="kpi-label">Resuelto sin intervención humana ${tag()}</h2>
      <p class="kpi-value">${k.autoPct.toFixed(1)}%</p>
      <p class="muted small">Pagos, planes y promesas que cerró el asistente solo. El resto pasó a una persona con el contexto completo.</p>
    </article>
    <article class="card value-card">
    <h2 class="card-title">Valor del mes ${tag()}</h2>
    <dl class="value-list">
      <div><dt>Recuperado atribuible vs. grupo de control</dt><dd>+${money(BASE.controlDiffCents)}</dd></div>
      <div><dt>Horas de gerencia liberadas</dt><dd>${k.hoursFreed.toFixed(1)} h <small>${k.ruleAuto} planes × 12 min</small></dd></div>
      <div><dt>Mensajes evitados a clientes que ya pagaron</dt><dd>${int(k.messagesAvoided)}</dd></div>
    </dl>
  </article>
  </div>
</section>

<section class="kpi-row" aria-label="Indicadores del mes">
  <article class="card kpi">
    <h2 class="kpi-label">Promesas cumplidas ${tag()}</h2>
    <p class="kpi-value">${k.promisesPct.toFixed(1)}%</p>
    <p class="muted small">${BASE.promisesKept} de ${BASE.promisesTotal} promesas del mes</p>
  </article>
  <article class="card kpi">
    <h2 class="kpi-label">Contactos fuera de límite</h2>
    <p class="kpi-value">${k.outOfLimit} <span class="chip chip-ok">${ic('check')}Dentro de límites</span></p>
    <p class="muted small">${k.blockedAttempts} intentos bloqueados por horario o tope diario</p>
  </article>
  <article class="card kpi">
    <h2 class="kpi-label">Mensajes evitados a quien ya pagó ${tag()}</h2>
    <p class="kpi-value">${int(k.messagesAvoided)}</p>
    <p class="muted small">Gracias a la conciliación automática</p>
  </article>
  <article class="card kpi">
    <h2 class="kpi-label">Tiempo a primer contacto ${tag()}</h2>
    <p class="kpi-value">&lt; 1 h</p>
    <p class="delta delta-up">${ic('down')}<span>antes ~${BASE.firstContactBeforeH} h</span></p>
  </article>
</section>

<section class="grid-2" aria-label="Gráficos de la secuencia">
  <article class="card">
    <div class="card-head"><h2 class="card-title">Embudo de la secuencia ${tag()}</h2></div>
    <p class="muted small">Cuentas que llegan a cada etapa y porcentaje recuperado en ella.</p>
    <div id="funnel-chart"></div>
    <div class="chart-foot">${tableToggle('tbl-funnel')}</div>
    ${tableBox('tbl-funnel', 'Embudo de la secuencia', ['Etapa', 'Cuentas', '% recuperado'], BASE.funnel.map((f) => [f.label, int(f.accounts), f.recoveredPct + '%']))}
  </article>
  <article class="card">
    <div class="card-head"><h2 class="card-title">Recuperación por canal ${tag()}</h2></div>
    <p class="muted small">Monto recuperado este mes según el canal que cerró el pago.</p>
    <div id="channel-chart"></div>
    <div class="chart-foot">${tableToggle('tbl-channel')}</div>
    ${tableBox('tbl-channel', 'Recuperación por canal', ['Canal', 'Recuperado'], k.channels.map((c) => [c.key, money(c.cents)]))}
  </article>
</section>

<section class="grid-2" aria-label="Uso y cartera">

  <article class="card">
    <h2 class="card-title">Uso del plan ${tag()}</h2>
    <p class="usage"><strong>${int(BASE.managed)}</strong> de ${int(BASE.planLimit)} cuentas gestionadas</p>
    <div class="meter" role="meter" aria-valuemin="0" aria-valuemax="${BASE.planLimit}" aria-valuenow="${BASE.managed}" aria-label="Cuentas gestionadas"><span class="meter-fill meter-48"></span></div>
    <h3 class="sub-title">Consumo de terceros, a costo</h3>
    <ul class="cost-list">${BASE.thirdParty.map((t) => `<li><span>${esc(t.key)}</span><span class="num">${t.note ? esc(t.note) : money(t.cents)}</span></li>`).join('')}</ul>
  </article>
  <article class="card">
    <h2 class="card-title">Cartera en mora por nivel ${tag()}</h2>
    <p class="muted small">480 cuentas en mora, de menor (A) a mayor riesgo (D).</p>
    <div id="level-chart"></div>
    <div class="chart-foot">${tableToggle('tbl-level')}</div>
    ${tableBox('tbl-level', 'Cartera en mora por nivel', ['Nivel', 'Cuentas'], levels.map((l) => ['Nivel ' + l.key, String(l.count)]))}
  </article>
</section>`;
  },
  mount(ctx, s) {
    const drawMora = (st) => {
      const host = $('#mora-chart', ctx.root);
      if (host._cleanup) host._cleanup();
      host._cleanup = moraChart(host, { history: HISTORY, scenario: scenarioSeries(st.sim), control: CONTROL, limit: BASE.limitPct, goal: BASE.goalPct, yMin: 6, yMax: 12, label: `Mora sobre cartera: 10.0% hoy, plana en los últimos 90 días; el escenario llega a ${scenarioEnd(st.sim).toFixed(1)}% a los 60 días. Límite 10%, meta 8%.` });
    };
    drawMora(s);
    ctx.cleanup.push(() => { const h = $('#mora-chart', ctx.root); if (h && h._cleanup) h._cleanup(); });
    const k = kpis(s);
    hBars($('#funnel-chart', ctx.root), { label: 'Embudo de la secuencia: ' + BASE.funnel.map((f) => `${f.label}, ${f.accounts} cuentas, ${f.recoveredPct}% recuperado`).join('; '), unit: 'cuentas', rows: BASE.funnel.map((f) => ({ label: f.label, value: f.accounts, display: int(f.accounts), sub: ` · ${f.recoveredPct}% recuperado` })) });
    hBars($('#channel-chart', ctx.root), { label: 'Recuperación por canal: ' + k.channels.map((c) => `${c.key} ${moneyShort(c.cents)}`).join('; '), unit: 'recuperado', rows: k.channels.map((c) => ({ label: c.key, value: c.cents, display: moneyShort(c.cents) })) });
    ctx.cleanup.push(stackBar($('#level-chart', ctx.root), { label: 'Cartera en mora por nivel', segments: BASE.levels.map((l) => ({ label: 'Nivel ' + l.key, short: l.key, value: l.count })) }));
    ctx.setUpdate((st, action) => {
      if (action.type === 'SIM_SET') {
        drawMora(st);
        $('#out-d0').textContent = st.sim.d0Pct + '%';
        $('#out-rule').textContent = st.sim.rulePct + '%';
        $('#sim-result').innerHTML = simResult(scenarioEnd(st.sim));
      } else render({ keepScroll: true });
    });
  },
};
function simResult(end) {
  const below = end <= BASE.goalPct;
  return `En este escenario la mora llegaría a <strong>${end.toFixed(1)}%</strong> a los 60 días: ${end < BASE.limitPct ? `${(BASE.limitPct - end).toFixed(1)} puntos por debajo del límite` : 'sin bajar del límite'}${below ? ', dentro de la meta.' : `, a ${(end - BASE.goalPct).toFixed(1)} puntos de la meta.`}`;
}
INPUTS.sim = (t) => {
  dispatch({ type: 'SIM_SET', [t.dataset.key]: Number(t.value) });
};

// =====================================================================
// REGLAS Y CUMPLIMIENTO
// =====================================================================
const REGLAS_TABS = [
  { id: 'planes', label: 'Planes' },
  { id: 'limites', label: 'Límites y horario' },
  { id: 'guiones', label: 'Guiones' },
  { id: 'bitacora', label: 'Bitácora' },
];
ROUTES.reglas = {
  title: (s, p) => 'Reglas y cumplimiento' + (p && REGLAS_TABS.find((t) => t.id === p) ? ' · ' + REGLAS_TABS.find((t) => t.id === p).label : ''),
  html(s, param) {
    const tab = REGLAS_TABS.find((t) => t.id === param) ? param : 'planes';
    const body = { planes: reglasPlanes, limites: reglasLimites, guiones: reglasGuiones, bitacora: reglasBitacora }[tab](s);
    return `${pageHead('Reglas y cumplimiento', 'Reglas y cumplimiento', 'Usted define las reglas una vez; el sistema las aplica en cada contacto y deja registro de todo.')}
<nav class="tabs" aria-label="Secciones de reglas">${REGLAS_TABS.map((t) => `<a href="#reglas/${t.id}" class="tab" ${t.id === tab ? 'aria-current="page"' : ''}>${esc(t.label)}</a>`).join('')}</nav>
<div class="tab-panel" data-tab="${tab}">${body}</div>`;
  },
  mount(ctx, s) {
    const tab = REGLAS_TABS.find((t) => t.id === ctx.param) ? ctx.param : 'planes';
    if (tab === 'planes') {
      ctx.setUpdate((st, action) => {
        if (action.type === 'RULE_SET' || action.type === 'RULE_TEMPLATE') updatePlanes(st, action.type === 'RULE_TEMPLATE');
        else render({ keepScroll: true });
      });
    }
  },
};

function ruleDots(s) {
  return s.requests.map((r) => {
    const ok = withinRule(r, s.rule);
    return `<li class="dot ${ok ? 'dot-auto' : 'dot-exc'}" title="${esc(r.name)} · ${money(r.amountCents)} · ${r.cuotas} cuotas · nivel ${r.level}${ok ? '' : ' · a gerencia'}"></li>`;
  }).join('');
}
function ruleSentence(st) {
  return `Con esta regla, <strong class="big-n" id="rule-n">${st.auto}</strong> de los 120 planes del mes pasado se habrían aprobado solos. A usted le habrían llegado <strong class="big-m" id="rule-m">${st.exceptions}</strong>.`;
}
function templateMatch(rule) {
  const t = RULE_TEMPLATES.find((x) => x.rule.maxAmountCents === rule.maxAmountCents && x.rule.maxCuotas === rule.maxCuotas && x.rule.levels.join() === rule.levels.join());
  return t ? t.id : null;
}
function reglasPlanes(s) {
  const st = ruleStats(s);
  const r = s.rule;
  const tm = templateMatch(r);
  const LEVEL_DESC = { A: 'riesgo bajo', B: 'riesgo moderado', C: 'riesgo medio', D: 'riesgo alto' };
  return `
<div class="rules-layout">
  <article class="card rule-form">
    <h2 class="card-title">Planes de pago preaprobados</h2>
    <p class="muted small">Si la solicitud cumple las tres condiciones, el asistente ofrece el plan y lo aprueba sin pasar por usted.</p>
    <div class="templates" role="group" aria-label="Plantillas de regla">
      <span class="templates-label">Plantillas:</span>
      ${RULE_TEMPLATES.map((t) => `<button type="button" class="seg-btn" data-action="rule-template" data-id="${t.id}" data-focus="tpl-${t.id}" aria-pressed="${tm === t.id}">${esc(t.name)}</button>`).join('')}
    </div>
    <label class="slider">
      <span class="slider-top"><span>Monto máximo del plan</span><output id="out-amount" for="rule-amount">${money(r.maxAmountCents)}</output></span>
      <input type="range" id="rule-amount" min="100000" max="1500000" step="25000" value="${r.maxAmountCents}" data-input="rule" aria-describedby="rule-result">
      <span class="slider-scale" aria-hidden="true"><span>B/. 1,000</span><span>B/. 15,000</span></span>
    </label>
    <label class="slider">
      <span class="slider-top"><span>Cuotas máximas</span><output id="out-cuotas" for="rule-cuotas">${r.maxCuotas} cuotas</output></span>
      <input type="range" id="rule-cuotas" min="2" max="12" step="1" value="${r.maxCuotas}" data-input="rule" aria-describedby="rule-result">
      <span class="slider-scale" aria-hidden="true"><span>2</span><span>12</span></span>
    </label>
    <fieldset class="levels">
      <legend>Niveles de riesgo permitidos</legend>
      ${['A', 'B', 'C', 'D'].map((l) => `<label class="check"><input type="checkbox" id="rule-level-${l}" value="${l}" data-input="rule" ${r.levels.includes(l) ? 'checked' : ''}><span>${levelChip(l)} <small>${LEVEL_DESC[l]}</small></span></label>`).join('')}
    </fieldset>
    <p class="muted small">${ic('info')} Cada cambio queda en la bitácora con fecha, hora y responsable.</p>
  </article>
  <article class="card rule-result" data-tour="wow">
    <p class="eyebrow">Aplicada a las 120 solicitudes de septiembre ${tag()}</p>
    <p class="rule-sentence" id="rule-result" aria-live="polite">${ruleSentence(st)}</p>
    <ul class="dots" id="rule-dots" aria-hidden="true">${ruleDots(s)}</ul>
    <ul class="legend"><li><i class="key key-dotfill"></i>Aprobado solo por la regla</li><li><i class="key key-ring"></i>Le llega a usted</li></ul>
    <div class="rule-cta">
      <a class="btn btn-primary" href="#aprobaciones" id="rule-cta">${ic('aprobaciones')}<span id="rule-cta-text">Ver ${plural(st.exceptions, 'la excepción', `las ${st.exceptions} excepciones`)} en Aprobaciones</span></a>
      <p class="muted small" id="rule-hours">Equivale a unas <strong>${((st.auto * 12) / 60).toFixed(1)} horas</strong> de gerencia al mes (12 min por plan, ejemplo).</p>
    </div>
  </article>
</div>`;
}
function updatePlanes(s, fromTemplate) {
  const st = ruleStats(s);
  const r = s.rule;
  $('#rule-result').innerHTML = ruleSentence(st);
  $('#rule-dots').innerHTML = ruleDots(s);
  $('#out-amount').textContent = money(r.maxAmountCents);
  $('#out-cuotas').textContent = r.maxCuotas + ' cuotas';
  $('#rule-cta-text').textContent = st.exceptions ? `Ver ${plural(st.exceptions, 'la excepción', `las ${st.exceptions} excepciones`)} en Aprobaciones` : 'Ir a Aprobaciones';
  $('#rule-hours').innerHTML = `Equivale a unas <strong>${((st.auto * 12) / 60).toFixed(1)} horas</strong> de gerencia al mes (12 min por plan, ejemplo).`;
  const tm = templateMatch(r);
  $$('[data-action="rule-template"]').forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.id === tm)));
  if (fromTemplate) {
    $('#rule-amount').value = r.maxAmountCents;
    $('#rule-cuotas').value = r.maxCuotas;
    ['A', 'B', 'C', 'D'].forEach((l) => { $('#rule-level-' + l).checked = r.levels.includes(l); });
  }
}
INPUTS.rule = (t, e, commit) => {
  // los checkboxes solo disparan "change"; los deslizadores, "input" (vista previa) y "change" (registro)
  if (t.type === 'checkbox' && !commit) return;
  const rule = {
    maxAmountCents: Number($('#rule-amount').value),
    maxCuotas: Number($('#rule-cuotas').value),
    levels: ['A', 'B', 'C', 'D'].filter((l) => $('#rule-level-' + l).checked),
  };
  dispatch({ type: 'RULE_SET', rule, commit });
};
ACTIONS['rule-template'] = (t) => {
  dispatch({ type: 'RULE_TEMPLATE', id: t.dataset.id });
  const tpl = RULE_TEMPLATES.find((x) => x.id === t.dataset.id);
  const st = ruleStats(getState());
  toast(`Plantilla “${tpl.name}” aplicada: ${st.auto} automáticos, ${st.exceptions} a gerencia.`);
};

function reglasLimites() {
  const rows = [
    ['Intentos por cliente al día', '2', 'Todos los canales sumados'],
    ['Intentos por cliente a la semana', '6', 'Incluye mensajes, correos y llamadas'],
    ['Llamadas por semana', '2', 'Solo desde el día 10 de atraso'],
    ['Pausa automática', 'Disputa, “no contactar”, mención legal', 'Se reanuda solo cuando una persona lo decide'],
    ['Opción de baja', 'Responder BAJA', 'Incluida desde el primer mensaje'],
    ['Contacto a terceros', 'Nunca se revelan datos', 'Sin nombre, monto ni detalles del préstamo'],
  ];
  const days = [['Lunes', 'wd'], ['Martes', 'wd'], ['Miércoles', 'wd'], ['Jueves', 'wd'], ['Viernes', 'wd'], ['Sábado', 'sat'], ['Domingo', 'none'], ['Feriados', 'none']];
  const k = kpis(getState());
  return `
<div class="grid-2">
  <article class="card">
    <h2 class="card-title">Límites de contacto ${tag('valores de ejemplo')}</h2>
    <dl class="limits">${rows.map((r) => `<div><dt>${esc(r[0])}</dt><dd><strong>${esc(r[1])}</strong><small>${esc(r[2])}</small></dd></div>`).join('')}</dl>
    <p class="note-ok">${ic('check-circle')}<span><strong>${k.outOfLimit} contactos fuera de límite</strong> este mes. El sistema bloqueó ${k.blockedAttempts} intentos antes de enviarlos.</span></p>
  </article>
  <article class="card">
    <h2 class="card-title">Horario permitido ${tag('valores de ejemplo')}</h2>
    <p class="muted small">Fuera de esta franja, el mensaje o la llamada se reprograma para la siguiente hora permitida.</p>
    <div class="hours" role="table" aria-label="Horario permitido por día">
      <div class="hours-row hours-scale" role="row"><span role="columnheader">Día</span><span class="hours-axis" role="columnheader"><span>6 a. m.</span><span>9 p. m.</span></span></div>
      ${days.map(([d, c]) => `<div class="hours-row" role="row"><span role="rowheader">${d}</span><span class="hours-track" role="cell"><span class="hours-band hours-${c}"></span><span class="hours-text">${c === 'wd' ? '8:00 a. m. – 7:00 p. m.' : c === 'sat' ? '9:00 a. m. – 1:00 p. m.' : 'Sin contacto'}</span></span></div>`).join('')}
    </div>
  </article>
</div>`;
}

const GUIONES = [
  { name: 'Día 0 · WhatsApp', v: 'v3', date: '2026-10-02', by: 'Cumplimiento Kredit', text: 'Hola, le escribe el asistente automatizado de Kredit. Su cuota de {monto} venció el {fecha}. Puede pagar aquí: {enlace}. Si necesita un plan, responda PLAN. Para no recibir más mensajes, responda BAJA.', change: 'v3: se agregó la opción de baja en el primer mensaje.' },
  { name: 'Días 3–5 · Email', v: 'v2', date: '2026-09-18', by: 'Cumplimiento Kredit', text: 'Asunto: Estado de su préstamo con Kredit. Le compartimos su estado de cuenta y las opciones de pago disponibles. Si ya pagó, ignore este mensaje.', change: 'v2: texto más corto y aviso “si ya pagó”.' },
  { name: 'Días 10–15 · Llamada con IA', v: 'v4', date: '2026-10-05', by: 'Cumplimiento Kredit', text: 'Aviso de grabación al inicio → verificación de identidad (últimos 4 dígitos de cédula) → saldo leído del sistema → plan preaprobado o promesa de pago → resumen por WhatsApp.', change: 'v4: la verificación pasa antes de mencionar cualquier monto.' },
  { name: 'Respuesta “ya pagué”', v: 'v2', date: '2026-09-25', by: 'Operaciones Kredit', text: 'Busca el pago en enlace de pago, Yappy y archivo del banco. Si no lo encuentra: crea caso, pausa contactos y pide el comprobante. Nunca insiste.', change: 'v2: pausa automática de contactos.' },
  { name: 'Tercero / no es el titular', v: 'v1', date: '2026-09-12', by: 'Cumplimiento Kredit', text: 'No menciona nombre, monto ni datos del préstamo. Se disculpa, registra el hecho y retira el número.', change: 'Versión inicial.' },
];
function reglasGuiones() {
  return `
<p class="muted">Cada guion tiene versión, fecha y quién lo aprobó. El asistente solo usa la versión vigente.</p>
<div class="scripts-grid">${GUIONES.map((g) => `
  <article class="card script-card">
    <div class="script-head"><h2 class="card-title">${esc(g.name)}</h2><span class="chip chip-info">${esc(g.v)} vigente</span></div>
    <p class="muted small">Aprobado el ${fmtDate(g.date)} por ${esc(g.by)}</p>
    <blockquote class="script-text">${esc(g.text)}</blockquote>
    <p class="small">${ic('file')} ${esc(g.change)}</p>
  </article>`).join('')}
</div>`;
}

function reglasBitacora(s) {
  const rows = s.audit.slice().reverse();
  return `
<article class="card">
  <div class="card-head wrap">
    <div>
      <h2 class="card-title">Bitácora de cumplimiento</h2>
      <p class="muted small">Cada contacto, decisión y pago, con fecha, responsable y un sello encadenado: si alguien altera una fila, la cadena deja de cuadrar.</p>
    </div>
    <div class="actions" data-tour="export">
      <button type="button" class="btn btn-secondary" data-action="verify-chain" id="btn-verify">${ic('shield')}Verificar integridad</button>
      <button type="button" class="btn btn-primary" data-action="export-csv" id="btn-export">${ic('download')}Exportar CSV</button>
    </div>
  </div>
  <p class="verify-result" id="verify-result" role="status"></p>
  <p class="note">${ic('info')}<span>Formato y campos a acordar con su oficial de cumplimiento. ${s.audit.length} registros en esta sesión.</span></p>
  <div class="table-scroll">
    <table class="audit">
      <caption class="sr-only">Bitácora de cumplimiento, del más reciente al más antiguo</caption>
      <thead><tr><th scope="col">#</th><th scope="col">Fecha y hora</th><th scope="col">Actor</th><th scope="col">Acción</th><th scope="col">Entidad</th><th scope="col">Detalle</th><th scope="col">Sello</th></tr></thead>
      <tbody>${rows.map((e) => `<tr><td class="num">${e.seq}</td><td class="nowrap">${esc(fmtDateTime(e.ts))}</td><td>${esc(e.actor)}</td><td><strong>${esc(e.action)}</strong></td><td class="mono">${esc(e.entity)}</td><td class="detail">${esc(e.detail)}</td><td class="mono hash" title="${esc(e.hash)}">${esc(e.hash.slice(0, 10))}…</td></tr>`).join('')}</tbody>
    </table>
  </div>
</article>`;
}
ACTIONS['export-csv'] = () => {
  const s = getState();
  downloadCsv(toCsv(s.audit), csvFilename(DEMO_TODAY));
  toast(`Bitácora exportada: ${csvFilename(DEMO_TODAY)} (${s.audit.length} registros).`);
};
ACTIONS['verify-chain'] = () => {
  const r = verifyChain(getState().audit);
  $('#verify-result').innerHTML = r.ok ? `${ic('check-circle')} Cadena íntegra: ${r.count} registros verificados, ninguno alterado.` : `${ic('alert')} La cadena no cuadra en el registro ${r.at}.`;
  $('#verify-result').className = 'verify-result ' + (r.ok ? 'ok' : 'crit');
};

// =====================================================================
// APROBACIONES
// =====================================================================
ROUTES.aprobaciones = {
  title: 'Aprobaciones',
  html(s) {
    const st = ruleStats(s);
    const pending = pendingExceptions(s);
    const decided = exceptions(s).filter((r) => s.decisions[r.id]);
    return `${pageHead('Aprobaciones', 'Aprobaciones', `Solo le llegan los planes fuera de la regla vigente: <strong>${st.exceptions} de 120</strong> el mes pasado. Lo demás se aprobó solo. <a href="#reglas/planes">Cambiar la regla</a>`)}
<section aria-labelledby="pend-title" data-tour="approvals">
  <h2 class="section-title" id="pend-title">Pendientes de su decisión <span class="count">${pending.length}</span></h2>
  ${pending.length ? `<div class="approvals">${pending.map((r) => approvalCard(r, s)).join('')}</div>` : `<div class="empty">${ic('check-circle')}<p><strong>No tiene planes pendientes.</strong> Todo lo demás se resolvió según su regla.</p><a class="btn btn-secondary" href="#reglas/planes">Revisar la regla</a></div>`}
</section>
${decided.length ? `<section aria-labelledby="dec-title" class="decided">
  <h2 class="section-title" id="dec-title">Decididas en esta sesión <span class="count">${decided.length}</span></h2>
  <ul class="decided-list">${decided.map((r) => { const d = s.decisions[r.id]; return `<li><span class="chip ${d.decision === 'aprobado' ? 'chip-ok' : 'chip-crit'}">${ic(d.decision === 'aprobado' ? 'check' : 'x')}${d.decision === 'aprobado' ? 'Aprobado' : 'Rechazado'}</span><span><strong>${esc(r.name)}</strong> · ${money(r.amountCents)} en ${r.cuotas} cuotas</span><span class="muted small">${esc(fmtDateTime(d.ts))}</span><button type="button" class="btn btn-link small" data-action="undo-decision" data-id="${r.id}" data-focus="undo-${r.id}">Deshacer</button></li>`; }).join('')}</ul>
</section>` : ''}`;
  },
};
function approvalCard(r, s) {
  const reasons = ruleReasons(r, s.rule);
  const cuota = Math.round(r.amountCents / r.cuotas);
  const context = r.context || `Ha pagado ${r.paidBefore} cuotas antes de este atraso. Score ${r.score}.`;
  const suggestion = r.suggestion || (r.level === 'D' ? 'Revisar con un cobrador antes de aprobar.' : 'El historial es razonable para el monto pedido.');
  return `<article class="card approval" aria-labelledby="ap-${r.id}">
  <div class="approval-head">
    <div><h3 id="ap-${r.id}">${esc(r.name)}</h3><p class="muted small mono">${r.id} · solicitada el ${fmtDateShort(r.date)}</p></div>
    ${levelChip(r.level)}
  </div>
  <dl class="facts">
    <div><dt>Monto del plan</dt><dd>${money(r.amountCents)}</dd></div>
    <div><dt>Cuotas</dt><dd>${r.cuotas} × ${money(cuota)}</dd></div>
    <div><dt>Días de atraso</dt><dd>${r.days}</dd></div>
    <div><dt>Score externo</dt><dd>${r.score}</dd></div>
  </dl>
  <div class="why"><p class="why-title">${ic('alert')}Por qué le llega</p><ul>${reasons.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></div>
  <p class="small"><strong>Motivo del cliente:</strong> ${esc(r.reason)}. ${esc(context)}</p>
  <p class="ai-note">${ic('spark')}<span><strong>Sugerencia del asistente:</strong> ${esc(suggestion)}</span></p>
  <div class="approval-actions">
    <button type="button" class="btn btn-secondary" data-action="decide" data-decision="rechazado" data-id="${r.id}">${ic('x')}Rechazar</button>
    <button type="button" class="btn btn-primary" data-action="decide" data-decision="aprobado" data-id="${r.id}">${ic('check')}Aprobar</button>
  </div>
</article>`;
}
ACTIONS.decide = (t) => {
  const id = t.dataset.id;
  const decision = t.dataset.decision;
  const r = getState().requests.find((x) => x.id === id);
  if (!dispatch({ type: 'DECIDE', id, decision })) return;
  const k = kpis(getState());
  toast(`${decision === 'aprobado' ? 'Plan aprobado' : 'Plan rechazado'}: ${r.name}. Quedó en la bitácora. ${k.pending ? `Le ${plural(k.pending, 'queda', 'quedan')} ${k.pending}.` : 'No le queda ninguno.'}`, { undo: () => { dispatch({ type: 'UNDO_DECISION', id }); toast('Decisión deshecha. El plan vuelve a pendientes.'); } });
  const next = $('#view [data-action="decide"][data-decision="aprobado"]') || $('#view h1');
  if (next) next.focus({ preventScroll: true });
};
ACTIONS['undo-decision'] = (t) => {
  dispatch({ type: 'UNDO_DECISION', id: t.dataset.id });
  toast('Decisión deshecha. El plan vuelve a pendientes.');
  const h = $('#pend-title'); if (h) { h.tabIndex = -1; h.focus({ preventScroll: true }); }
};

// =====================================================================
// CONCILIACIÓN
// =====================================================================
const SOURCE_ICON = { 'Link de pago': 'coin', Yappy: 'sms', 'Archivo del banco': 'file' };
const SOURCE_LABEL = { 'Link de pago': 'Enlace de pago', Yappy: 'Yappy', 'Archivo del banco': 'Archivo del banco' };
ROUTES.conciliacion = {
  title: 'Conciliación de pagos',
  html(s) {
    const k = kpis(s);
    const auto = s.payments.filter((p) => p.status === 'conciliado').length;
    const unmatched = s.payments.filter((p) => p.status === 'sin_coincidencia').length;
    const received = new Set(s.payments.map((p) => p.id));
    const remaining = s.queue.filter((q) => !received.has(q.id)).length;
    return `${pageHead('Conciliación', 'Conciliación de pagos', 'Los pagos entran solos desde el enlace de pago, Yappy y el archivo del banco. Si un cliente ya pagó, no se le vuelve a escribir.')}
<section class="kpi-row" aria-label="Indicadores de conciliación">
  <article class="card kpi"><h2 class="kpi-label">Conciliados hoy</h2><p class="kpi-value">${auto}</p><p class="muted small">automáticamente, sin intervención</p></article>
  <article class="card kpi"><h2 class="kpi-label">Sin coincidencia</h2><p class="kpi-value">${unmatched}</p><p class="muted small">esperan revisión de una persona</p></article>
  <article class="card kpi"><h2 class="kpi-label">Mensajes evitados a clientes que ya pagaron ${tag()}</h2><p class="kpi-value" id="kpi-avoided">${int(k.messagesAvoided)}</p><p class="muted small">en el mes</p></article>
  <article class="card kpi"><h2 class="kpi-label">Tiempo de conciliación ${tag()}</h2><p class="kpi-value">40 s</p><p class="delta delta-up">${ic('down')}<span>antes: hasta 1 día</span></p></article>
</section>
<section class="card" aria-labelledby="feed-title">
  <div class="card-head wrap">
    <div><h2 class="card-title" id="feed-title">Pagos recibidos hoy</h2><p class="muted small">Del más reciente al más antiguo.</p></div>
    <div class="actions" data-tour="simular">
      <button type="button" class="btn btn-primary" data-action="simulate-payment" id="btn-simulate" ${remaining ? '' : 'disabled'}>${ic('coin')}Simular pago entrante</button>
      <span class="muted small">${remaining ? `${remaining} ${plural(remaining, 'pago listo', 'pagos listos')} para simular` : 'No hay más pagos en la simulación'}</span>
    </div>
  </div>
  <ul class="feed">${s.payments.map((p) => feedRow(p, s)).join('')}</ul>
</section>`;
  },
};
function feedRow(p, s) {
  const acc = p.accountId ? s.accounts[p.accountId] : null;
  const isNew = p.id === ui.lastFeedHighlight;
  let status;
  if (p.status === 'conciliado') status = `<span class="chip chip-ok">${ic('check-circle')}${p.manual ? 'Conciliado tras revisión' : 'Conciliado automático'}</span>`;
  else if (p.status === 'en_revision') status = `<span class="chip chip-neutral">${ic('user')}En revisión del equipo</span>`;
  else status = `<span class="chip chip-warn">${ic('alert')}Sin coincidencia · revisar</span>`;
  const who = acc ? `<a href="#cuenta/${acc.id}">${esc(acc.name)}</a> <span class="mono muted small">${acc.id}</span>` : `<span>Depositante: ${esc(p.payer || '—')}</span>`;
  let extra = '';
  if (p.status === 'conciliado') extra = p.cancelled ? `<span class="small muted">${ic('x-circle')}${p.cancelled} ${plural(p.cancelled, 'mensaje programado cancelado', 'mensajes programados cancelados')} · sale de la secuencia</span>` : '<span class="small muted">Sin mensajes pendientes</span>';
  else if (p.status === 'sin_coincidencia') {
    const sug = p.suggestedId ? s.accounts[p.suggestedId] : null;
    extra = `<span class="small muted">${esc(p.note)}</span><span class="row-actions">${sug ? `<button type="button" class="btn btn-secondary small" data-action="resolve-payment" data-id="${p.id}" data-focus="res-${p.id}">Asociar a ${esc(sug.name)} (sugerida)</button>` : `<button type="button" class="btn btn-secondary small" data-action="resolve-payment" data-id="${p.id}" data-focus="res-${p.id}">Enviar a revisión</button>`}</span>`;
  }
  return `<li class="feed-row${isNew ? ' is-new' : ''}${p.status === 'conciliado' ? ' is-done' : ''}">
  <span class="feed-time mono">${esc(p.ts.slice(11, 16))}</span>
  <span class="feed-source">${ic(SOURCE_ICON[p.source] || 'coin')}<span>${esc(SOURCE_LABEL[p.source] || p.source)}<small class="mono">${esc(p.ref)}</small></span></span>
  <span class="feed-amount num">${money(p.amountCents)}</span>
  <span class="feed-who">${who}</span>
  <span class="feed-status">${status}</span>
  <span class="feed-extra">${extra}</span>
</li>`;
}
ACTIONS['simulate-payment'] = () => {
  const s = getState();
  const received = new Set(s.payments.map((p) => p.id));
  const next = s.queue.find((q) => !received.has(q.id));
  if (!next) return;
  ui.lastFeedHighlight = next.id;
  dispatch({ type: 'SIMULATE_INCOMING' });
  const p = getState().payments.find((x) => x.id === next.id);
  const acc = getState().accounts[next.accountId];
  toast(`Pago de ${money(p.amountCents)} conciliado (${SOURCE_LABEL[p.source]}). ${acc.name} sale de la secuencia; ${p.cancelled} ${plural(p.cancelled, 'mensaje cancelado', 'mensajes cancelados')}.`);
  const b = $('#btn-simulate');
  if (b && !b.disabled) b.focus({ preventScroll: true });
};
ACTIONS['resolve-payment'] = (t) => {
  const id = t.dataset.id;
  dispatch({ type: 'RESOLVE_UNMATCHED', id });
  const p = getState().payments.find((x) => x.id === id);
  toast(p.status === 'conciliado' ? `Pago asociado a ${getState().accounts[p.accountId].name}. Quedó en la bitácora.` : 'Pago enviado a revisión del equipo.');
};

// =====================================================================
// CONVERSACIÓN
// =====================================================================
const SCN_KEY = { pago: 'pago', disputa: 'disputa', titular: 'titular', voz: 'voz' };
ROUTES.conversacion = {
  title: (s, p) => 'Conversación simulada' + (SCRIPT_TABS.find((t) => t.id === p) ? ' · ' + SCRIPT_TABS.find((t) => t.id === p).label.replace(/[“”]/g, '') : ''),
  html(s, param) {
    const id = SCRIPT_TABS.find((t) => t.id === param) ? param : 'pago';
    const seg = `<nav class="segmented" aria-label="Guiones">${SCRIPT_TABS.map((t) => `<a href="#conversacion/${t.id}" ${t.id === id ? 'aria-current="page"' : ''}>${esc(t.label)}</a>`).join('')}</nav>`;
    const head = pageHead('Conversación simulada', 'Conversación simulada', 'Así conversa el asistente: se identifica como sistema automatizado, verifica identidad y nunca inventa montos. Nada de esto se envía de verdad.');
    if (id === 'voz') return head + seg + voiceHtml(s);
    const sc = SCRIPTS[id];
    const acc = s.accounts[sc.accountId];
    return `${head}${seg}
<div class="convo">
  <div class="convo-phone">
    <p class="convo-intro">${esc(sc.intro)} <a href="#cuenta/${acc.id}">Ver ficha de ${esc(acc.name)}</a></p>
    <div class="phone" aria-label="Conversación de WhatsApp simulada">
      <div class="phone-head"><span class="phone-avatar" aria-hidden="true">K</span><span><strong>Kredit · Asistente automatizado</strong><small>con ${esc(sc.contact)}</small></span></div>
      <div class="phone-thread" id="thread" aria-live="polite"></div>
      <div class="phone-input" aria-hidden="true"><span>Mensaje</span></div>
    </div>
    <div class="player-controls" data-tour="phone-controls">
      <button type="button" class="btn btn-primary" data-action="chat-play" id="chat-play">${ic('play')}Reproducir</button>
      <button type="button" class="btn btn-secondary" data-action="chat-step" id="chat-step">Paso a paso ${ic('next')}</button>
      <button type="button" class="btn btn-link" data-action="chat-reset" id="chat-reset">${ic('reset')}Reiniciar</button>
      <span class="player-progress muted small" id="chat-progress" aria-live="off">0 de ${sc.steps.length}</span>
    </div>
  </div>
  <aside class="card sys-panel" aria-labelledby="sys-title">
    <h2 class="card-title" id="sys-title">${ic('database')}Qué está pasando en el sistema</h2>
    <ol class="sys-list" id="sys-list"></ol>
    <p class="muted small sys-empty" id="sys-empty">Pulse “Reproducir” o “Paso a paso” para empezar.</p>
    <div id="convo-after">${afterHtml(id, s)}</div>
  </aside>
</div>`;
  },
  mount(ctx, s) {
    const id = SCRIPT_TABS.find((t) => t.id === ctx.param) ? ctx.param : 'pago';
    if (id === 'voz') return mountVoice(ctx, s);
    const sc = SCRIPTS[id];
    const thread = $('#thread', ctx.root);
    const list = $('#sys-list', ctx.root);
    const player = chatPlayer(sc, {
      thread,
      onAction: () => dispatch({ type: sc.action }),
      sysText: (step) => (step.sys === 'RULE_CHECK' ? ruleCheckText(getState()) : step.sys),
      addSys: (text, tone) => {
        $('#sys-empty').hidden = true;
        const li = document.createElement('li');
        li.className = 'sys-item' + (tone ? ' tone-' + tone : '');
        li.innerHTML = ic(tone === 'ok' ? 'check-circle' : tone === 'warn' ? 'alert' : tone === 'ai' ? 'spark' : 'info');
        const span = document.createElement('span');
        span.textContent = text;
        li.appendChild(span);
        list.appendChild(li);
        li.scrollIntoView({ block: 'nearest' });
      },
      clearSys: () => { list.replaceChildren(); $('#sys-empty').hidden = false; },
      onState: (idx, total, playing) => {
        $('#chat-progress').textContent = `${idx} de ${total}`;
        const play = $('#chat-play');
        play.innerHTML = playing ? `${ic('pause')}Pausar` : idx >= total ? `${ic('reset')}Repetir` : `${ic('play')}${idx ? 'Continuar' : 'Reproducir'}`;
        play.dataset.action = playing ? 'chat-pause' : 'chat-play';
        $('#chat-step').disabled = idx >= total;
      },
    });
    ctx.player = player;
    activePlayer = player;
    ctx.cleanup.push(() => { player.stop(); activePlayer = null; });
    ctx.setUpdate((st) => { const a = $('#convo-after'); if (a) a.innerHTML = afterHtml(id, st); });
  },
};
let activePlayer = null;
ACTIONS['chat-play'] = () => activePlayer && activePlayer.play();
ACTIONS['chat-pause'] = () => activePlayer && activePlayer.stop();
ACTIONS['chat-step'] = async () => {
  if (!activePlayer) return;
  await activePlayer.step();
  if (activePlayer && activePlayer.done) $('#chat-play').focus();
};
ACTIONS['chat-reset'] = () => activePlayer && activePlayer.reset();

function ruleCheckText(s) {
  const ok = withinRule({ amountCents: 375000, cuotas: 3, level: 'B' }, s.rule);
  return ok
    ? `Plan dentro de la regla vigente (hasta ${money(s.rule.maxAmountCents)}, hasta ${s.rule.maxCuotas} cuotas, nivel B permitido) → aprobado solo, sin pasar por gerencia.`
    : 'Con la regla que usted dejó, este plan iría a Aprobaciones. Para el demo, el guion sigue como si estuviera dentro de la regla.';
}
function afterHtml(id, s) {
  const done = !!s.scenarios[SCN_KEY[id]];
  if (!done) return '';
  const sc = id === 'voz' ? VOICE : SCRIPTS[id];
  const k = kpis(s);
  const link = {
    pago: `<a class="btn btn-primary" href="#resumen">${ic('resumen')}Ver el resumen: recuperado ${money(k.recoveredCents)}</a>`,
    disputa: `<a class="btn btn-primary" href="#bandeja">${ic('bandeja')}Ver el caso C-2041 en la bandeja</a>`,
    titular: `<a class="btn btn-primary" href="#cuenta/${sc.accountId}">${ic('cuentas')}Ver la ficha de la cuenta</a>`,
    voz: `<a class="btn btn-primary" href="#cuenta/${sc.accountId}">${ic('cuentas')}Ver la promesa en la ficha</a>`,
  }[id];
  return `<div class="after">${link}<p class="muted small">${esc(sc.doneNote)} <button type="button" class="btn btn-link small" data-action="scenario-reset" data-scenario="${SCN_KEY[id]}">Deshacer este guion</button></p></div>`;
}
ACTIONS['scenario-reset'] = (t) => {
  if (activePlayer) activePlayer.reset();
  dispatch({ type: 'RESET_SCENARIO', scenario: t.dataset.scenario });
  toast('La cuenta volvió a su estado inicial. Puede reproducir el guion de nuevo.');
};

function voiceHtml(s) {
  const rnd = mulberry32(SEED + 3);
  const bars = Array.from({ length: 72 }, (_, i) => 1 + Math.floor((0.25 + rnd() * 0.75) * (i % 9 === 0 ? 4 : 8)));
  const acc = s.accounts[VOICE.accountId];
  return `
<div class="convo">
  <div class="convo-phone">
    <p class="convo-intro">Llamada del día 12 a ${esc(acc.name)}. Aviso de grabación, verificación de identidad y promesa de pago. <a href="#cuenta/${acc.id}">Ver ficha</a></p>
    <article class="card call">
      <div class="call-head">
        <span class="call-icon">${ic('phone')}</span>
        <span><strong>Llamada · Asistente de voz de Kredit</strong><small>${esc(acc.name)} · ${esc(acc.phone)}</small></span>
        <span class="chip chip-ai">${ic('mic')}Simulación sin audio</span>
      </div>
      <div class="wave" id="wave" aria-hidden="true">${bars.map((h) => `<span class="wb h${h}"></span>`).join('')}</div>
      <div class="call-time"><span id="voice-time" class="mono">0:00</span><span class="mono muted">${fmtSec(VOICE.duration)}</span></div>
      <div class="player-controls" data-tour="phone-controls">
        <button type="button" class="btn btn-primary" data-action="voice-play" id="voice-play">${ic('play')}Reproducir</button>
        <button type="button" class="btn btn-secondary" data-action="voice-next" id="voice-next">Siguiente frase ${ic('next')}</button>
        <button type="button" class="btn btn-link" data-action="voice-reset">${ic('reset')}Reiniciar</button>
      </div>
      <p class="muted small">Espacio preparado para la grabación real de la llamada (Demo 2). Aquí la transcripción avanza sincronizada.</p>
      <ol class="transcript" id="transcript">${VOICE.lines.map((l, i) => `<li><button type="button" class="tline" data-action="voice-seek" data-i="${i}" data-focus="tline-${i}"><span class="mono muted">${fmtSec(l.t)}</span><span><strong>${esc(l.who)}:</strong> ${esc(l.text)}</span></button></li>`).join('')}</ol>
    </article>
  </div>
  <aside class="card sys-panel" aria-labelledby="sys-title">
    <h2 class="card-title" id="sys-title">${ic('database')}Qué está pasando en el sistema</h2>
    <ol class="sys-list" id="sys-list"></ol>
    <p class="muted small sys-empty" id="sys-empty">Pulse “Reproducir” para empezar la llamada.</p>
    <div id="convo-after">${afterHtml('voz', s)}</div>
  </aside>
</div>`;
}
function fmtSec(t) { const s = Math.max(0, Math.floor(t)); return Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0'); }
function mountVoice(ctx) {
  const list = $('#sys-list', ctx.root);
  const bars = $$('#wave .wb', ctx.root);
  const lines = $$('#transcript .tline', ctx.root);
  const vp = voicePlayer({
    onAction: () => dispatch({ type: VOICE.action }),
    addSys: (text, tone) => {
      $('#sys-empty').hidden = true;
      const li = document.createElement('li');
      li.className = 'sys-item' + (tone ? ' tone-' + tone : '');
      li.innerHTML = ic(tone === 'ok' ? 'check-circle' : tone === 'ai' ? 'spark' : 'info');
      const span = document.createElement('span');
      span.textContent = text;
      li.appendChild(span);
      list.appendChild(li);
    },
    clearSys: () => { list.replaceChildren(); $('#sys-empty').hidden = false; },
    onTime: (t, k, playing) => {
      const tt = Math.max(0, t);
      $('#voice-time').textContent = fmtSec(tt);
      const n = Math.round((tt / VOICE.duration) * bars.length);
      bars.forEach((b, i) => b.classList.toggle('played', t >= 0 && i < n));
      lines.forEach((l, i) => { if (i === k) l.setAttribute('aria-current', 'true'); else l.removeAttribute('aria-current'); l.classList.toggle('past', i < k); });
      const p = $('#voice-play');
      p.innerHTML = playing ? `${ic('pause')}Pausar` : t >= VOICE.duration ? `${ic('reset')}Repetir` : `${ic('play')}${t > 0 ? 'Continuar' : 'Reproducir'}`;
      p.dataset.action = playing ? 'voice-pause' : 'voice-play';
      $('#voice-next').disabled = k >= VOICE.lines.length - 1 && t >= VOICE.duration;
    },
  });
  activeVoice = vp;
  ctx.cleanup.push(() => { vp.stop(); activeVoice = null; });
  ctx.setUpdate((st) => { const a = $('#convo-after'); if (a) a.innerHTML = afterHtml('voz', st); });
}
let activeVoice = null;
ACTIONS['voice-play'] = () => activeVoice && activeVoice.play();
ACTIONS['voice-pause'] = () => activeVoice && activeVoice.pause();
ACTIONS['voice-next'] = () => {
  if (!activeVoice) return;
  activeVoice.next();
  if ($('#voice-next').disabled) $('#voice-play').focus();
};
ACTIONS['voice-reset'] = () => activeVoice && activeVoice.reset();
ACTIONS['voice-seek'] = (t) => activeVoice && activeVoice.seekLine(Number(t.dataset.i));
const _scenarioReset = ACTIONS['scenario-reset'];
ACTIONS['scenario-reset'] = (t) => { if (activeVoice) activeVoice.reset(); _scenarioReset(t); };

// =====================================================================
// BANDEJA
// =====================================================================
ROUTES.bandeja = {
  title: 'Bandeja de cobradores',
  html(s) {
    const owners = [...COBRADORES, SIN_ASIGNAR];
    const usedMotives = Object.keys(MOTIVOS);
    const list = s.cases.filter((c) => (ui.bandejaMotive === 'todos' || c.motive === ui.bandejaMotive) && (ui.bandejaOwner === 'todos' || c.owner === ui.bandejaOwner));
    if (ui.selectedCase && !s.cases.some((c) => c.id === ui.selectedCase)) ui.selectedCase = null;
    const sel = s.cases.find((c) => c.id === ui.selectedCase);
    const open = s.cases.filter((c) => c.status !== 'cerrado').length;
    return `${pageHead('Bandeja de cobradores', 'Bandeja de cobradores', `Casos que el asistente pasó a una persona, con el motivo y un resumen. ${open} ${plural(open, 'abierto', 'abiertos')}. <a href="#cuenta">Ver todas las cuentas</a>`)}
<div class="filters" role="group" aria-label="Filtros">
  <label><span>Motivo</span><select id="f-motive" data-input="filter" data-key="bandejaMotive"><option value="todos">Todos</option>${usedMotives.map((m) => `<option value="${m}" ${ui.bandejaMotive === m ? 'selected' : ''}>${esc(MOTIVOS[m])}</option>`).join('')}</select></label>
  <label><span>Responsable</span><select id="f-owner" data-input="filter" data-key="bandejaOwner"><option value="todos">Todos</option>${owners.map((o) => `<option value="${esc(o)}" ${ui.bandejaOwner === o ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select></label>
  <p class="muted small" aria-live="polite">${list.length} ${plural(list.length, 'caso', 'casos')}</p>
</div>
<div class="inbox ${sel ? 'has-sel' : ''}">
  <div class="card inbox-list">
    ${list.length ? `<div class="table-scroll"><table class="cases">
      <caption class="sr-only">Casos escalados</caption>
      <thead><tr><th scope="col">Cliente</th><th scope="col">Motivo</th><th scope="col">Prioridad y espera</th><th scope="col" class="n">Vencido</th><th scope="col">Responsable</th></tr></thead>
      <tbody>${list.map((c) => caseRow(c, s)).join('')}</tbody></table></div>`
    : `<div class="empty">${ic('bandeja')}<p><strong>No hay casos con estos filtros.</strong></p><button type="button" class="btn btn-secondary" data-action="clear-filters">Quitar filtros</button></div>`}
  </div>
  ${sel ? casePanel(sel, s) : `<aside class="card case-panel case-empty"><p class="muted">${ic('info')} Seleccione un caso para ver el resumen del asistente y las acciones.</p></aside>`}
</div>`;
  },
};
function caseRow(c, s) {
  const a = s.accounts[c.accountId];
  const pr = PRIORITY[c.priority];
  const closed = c.status === 'cerrado';
  return `<tr class="${ui.selectedCase === c.id ? 'is-selected' : ''}${closed ? ' is-closed' : ''}${c.isNew ? ' is-new' : ''}">
    <th scope="row" data-label="Cliente"><button type="button" class="row-btn" data-action="open-case" data-id="${c.id}" data-focus="case-${c.id}" aria-pressed="${ui.selectedCase === c.id}"><strong>${esc(a.name)}</strong><small class="mono">${c.id} · ${a.id}${closed ? ' · cerrado' : ''}</small></button></th>
    <td data-label="Motivo"><span class="motive">${ic(MOTIVE_ICON[c.motive])}${esc(MOTIVOS[c.motive])}</span>${c.paused ? `<small class="paused">${ic('pause')}Contactos pausados</small>` : ''}</td>
    <td data-label="Prioridad"><span class="chip chip-${pr.tone}">${ic(pr.icon)}${pr.label}</span><small>${c.waitH ? 'espera ' + c.waitH + ' h' : 'recién llegado'}</small></td>
    <td data-label="Vencido" class="n">${money(a.overdue)}<small>${a.days} días de atraso</small></td>
    <td data-label="Responsable">${c.owner === SIN_ASIGNAR ? `<span class="muted">${SIN_ASIGNAR}</span>` : esc(c.owner)}</td>
  </tr>`;
}
function casePanel(c, s) {
  const a = s.accounts[c.accountId];
  const hist = a.timeline.slice(-3).reverse();
  return `<aside class="card case-panel" id="case-panel" aria-labelledby="case-title">
  <div class="case-head">
    <div><p class="eyebrow">${c.id} · ${esc(MOTIVOS[c.motive])}</p><h2 id="case-title" tabindex="-1">${esc(a.name)}</h2></div>
    <button type="button" class="icon-btn" data-action="close-panel" aria-label="Cerrar panel del caso">${ic('x')}</button>
  </div>
  <p class="chips">${levelChip(a.level)} ${statusChip(a)} ${c.status === 'cerrado' ? `<span class="chip chip-neutral">${ic('check')}Caso cerrado</span>` : ''}</p>
  <div class="ai-summary"><p class="ai-title">${ic('spark')}Resumen del asistente</p><p>${esc(c.summary)}</p></div>
  <dl class="facts">
    <div><dt>Vencido</dt><dd>${money(a.overdue)}</dd></div>
    <div><dt>Días de atraso</dt><dd>${a.days}</dd></div>
    <div><dt>Teléfono</dt><dd class="mono">${esc(a.phone)}</dd></div>
    <div><dt>Responsable</dt><dd>${esc(c.owner)}</dd></div>
  </dl>
  <h3 class="sub-title">Últimos contactos</h3>
  <ol class="mini-timeline">${hist.map((e) => `<li>${ic(CHANNEL_ICON[e.channel] || 'info')}<span><strong>${esc(e.channel)}</strong> · ${esc(fmtDateTime(e.ts))}<br>${esc(e.text)} <em>${esc(e.result)}</em></span></li>`).join('')}</ol>
  <h3 class="sub-title">Acciones</h3>
  <div class="case-actions">
    <label class="assign"><span>Asignar a</span><select id="assign-${c.id}">${[...COBRADORES, SIN_ASIGNAR].map((o) => `<option ${o === c.owner ? 'selected' : ''}>${esc(o)}</option>`).join('')}</select></label>
    <button type="button" class="btn btn-secondary" data-action="case-assign" data-id="${c.id}" data-focus="assign-btn-${c.id}">Asignar</button>
    <button type="button" class="btn btn-secondary" data-action="case-pause" data-id="${c.id}" data-focus="pause-${c.id}">${ic(c.paused ? 'play' : 'pause')}${c.paused ? 'Reanudar contactos' : 'Pausar contactos'}</button>
    <button type="button" class="btn btn-secondary" data-action="case-close" data-id="${c.id}" data-focus="close-${c.id}">${ic(c.status === 'cerrado' ? 'reset' : 'check')}${c.status === 'cerrado' ? 'Reabrir caso' : 'Cerrar caso'}</button>
  </div>
  <a class="btn btn-link" href="#cuenta/${a.id}">Ver ficha completa ${ic('next')}</a>
</aside>`;
}
INPUTS.filter = (t, e, commit) => {
  if (!commit) return;
  ui[t.dataset.key] = t.value;
  render({ keepScroll: true });
  const el = document.getElementById(t.id); if (el) el.focus();
};
ACTIONS['clear-filters'] = () => { ui.bandejaMotive = 'todos'; ui.bandejaOwner = 'todos'; render({ keepScroll: true }); $('#f-motive').focus(); };
ACTIONS['open-case'] = (t) => {
  ui.selectedCase = t.dataset.id;
  render({ keepScroll: true });
  const h = $('#case-title');
  if (h) { h.focus({ preventScroll: true }); if (window.innerWidth < 1180) h.scrollIntoView({ block: 'start', behavior: 'smooth' }); }
};
ACTIONS['close-panel'] = () => { const id = ui.selectedCase; ui.selectedCase = null; render({ keepScroll: true }); const b = document.querySelector(`[data-focus="case-${id}"]`); if (b) b.focus(); };
ACTIONS['case-assign'] = (t) => {
  const owner = $('#assign-' + t.dataset.id).value;
  if (dispatch({ type: 'CASE_ASSIGN', id: t.dataset.id, owner })) toast(`Caso ${t.dataset.id} asignado a ${owner}.`);
};
ACTIONS['case-pause'] = (t) => {
  dispatch({ type: 'CASE_PAUSE', id: t.dataset.id });
  const c = getState().cases.find((x) => x.id === t.dataset.id);
  toast(c.paused ? 'Contactos pausados: no saldrá ningún mensaje ni llamada a esta cuenta.' : 'Contactos reanudados según la secuencia.');
};
ACTIONS['case-close'] = (t) => {
  dispatch({ type: 'CASE_CLOSE', id: t.dataset.id });
  const c = getState().cases.find((x) => x.id === t.dataset.id);
  toast(c.status === 'cerrado' ? `Caso ${c.id} cerrado.` : `Caso ${c.id} reabierto.`);
};

// =====================================================================
// CUENTA
// =====================================================================
ROUTES.cuenta = {
  title: (s, p) => (p && s.accounts[p] ? `Cuenta ${s.accounts[p].name}` : p ? 'Cuenta no encontrada' : 'Cuentas en mora'),
  html(s, param) {
    if (!param) return accountsList(s);
    const a = s.accounts[param];
    if (!a) return `${pageHead('Cuenta', 'Cuenta no encontrada', `No hay ninguna cuenta con el código ${esc(param)} en este demo.`)}<p><a class="btn btn-secondary" href="#cuenta">Ver todas las cuentas</a></p>`;
    const pending = Math.max(0, a.overdue - a.paidCents);
    const c = s.cases.find((x) => x.accountId === a.id && x.status !== 'cerrado');
    return `<p class="back"><a href="#bandeja">${ic('back')}Bandeja</a><span aria-hidden="true">·</span><a href="#cuenta">Todas las cuentas</a></p>
${pageHead(`Cuenta ${a.id}`, a.name, `${levelChip(a.level)} ${statusChip(a)} ${c ? `<a class="chip chip-info" href="#bandeja" data-action="goto-case" data-id="${c.id}">${ic('bandeja')}Caso ${c.id}</a>` : ''}`)}
<div class="account-grid">
  <article class="card">
    <h2 class="card-title">Saldo</h2>
    <dl class="facts facts-2">
      <div><dt>Vencido</dt><dd class="big">${money(a.overdue)}</dd></div>
      <div><dt>Pagado hoy</dt><dd class="big">${a.paidCents ? money(a.paidCents) : '—'}</dd></div>
      <div><dt>Pendiente vencido</dt><dd>${money(pending)}</dd></div>
      <div><dt>Monto del préstamo</dt><dd>${money(a.principal)}</dd></div>
      <div><dt>Cuota</dt><dd>${money(a.cuota)} × ${a.cuotas}</dd></div>
      <div><dt>Días de atraso</dt><dd>${a.days}</dd></div>
    </dl>
  </article>
  <article class="card">
    <h2 class="card-title">Datos ${tag('ficticios')}</h2>
    <dl class="facts facts-2">
      <div><dt>Cédula</dt><dd class="mono">${esc(a.cedula)}</dd></div>
      <div><dt>Teléfono</dt><dd class="mono">${esc(a.phone)}</dd></div>
      <div><dt>Nivel de riesgo</dt><dd>${a.level}</dd></div>
      <div><dt>Score externo</dt><dd>${a.score}</dd></div>
      <div><dt>Etapa</dt><dd>${esc(stageLabel(a.stage))}</dd></div>
      <div><dt>Contactos</dt><dd>${a.contactsPaused || a.status === 'pagado' ? 'Detenidos' : 'Activos'}</dd></div>
    </dl>
  </article>
  <article class="card">
    <h2 class="card-title">Próximos contactos</h2>
    <ul class="next-list">${a.next.map((n) => `<li class="${n.status === 'cancelado' ? 'is-cancelled' : ''}">${ic(CHANNEL_ICON[n.channel] || 'info')}<span><strong>${esc(fmtDateTime(n.ts))}</strong> · ${esc(n.channel)}<br><span class="${n.status === 'cancelado' ? 'strike' : ''}">${esc(n.label)}</span>${n.status === 'cancelado' ? `<span class="chip chip-neutral small">${ic('x-circle')}Cancelado · ${esc(n.reason || '')}</span>` : `<span class="chip chip-info small">${ic('clock')}Programado</span>`}</span></li>`).join('') || '<li class="muted">Sin contactos programados.</li>'}</ul>
    <h3 class="sub-title">Promesas y planes</h3>
    ${a.promises.length ? `<ul class="promise-list">${a.promises.map((p) => `<li><span>${esc(p.label)} · ${fmtDateShort(p.due)}</span><span class="num">${money(p.amountCents)}</span><span class="chip ${p.status === 'cumplida' ? 'chip-ok' : 'chip-ai'} small">${ic(p.status === 'cumplida' ? 'check' : 'clock')}${p.status === 'cumplida' ? 'Cumplida' : 'Pendiente'}</span></li>`).join('')}</ul>` : '<p class="muted small">Sin promesas registradas.</p>'}
  </article>
  <article class="card timeline-card">
    <h2 class="card-title">Línea de tiempo</h2>
    <ol class="timeline">${a.timeline.slice().reverse().map((e) => `<li><span class="tl-icon">${ic(CHANNEL_ICON[e.channel] || 'info')}</span><div><p class="tl-meta"><strong>${esc(e.channel)}</strong> · ${esc(fmtDateTime(e.ts))}</p><p>${esc(e.text)}</p><p class="tl-result">${esc(e.result)}</p>${e.transcript ? `<details><summary>Ver transcripción</summary><ul class="tl-transcript">${e.transcript.map((x) => `<li>${esc(x)}</li>`).join('')}</ul></details>` : ''}</div></li>`).join('')}</ol>
  </article>
</div>`;
  },
};
ACTIONS['goto-case'] = (t) => { ui.selectedCase = t.dataset.id; };
function accountsList(s) {
  const rows = s.accountOrder.map((id) => s.accounts[id]);
  return `${pageHead('Cuentas', 'Cuentas en mora', `Muestra de ${rows.length} cuentas ficticias de las 480 en mora. Los totales del resumen usan agregados de ejemplo.`)}
<div class="card">
  <div class="table-scroll"><table class="accounts stack-mobile">
    <caption class="sr-only">Cuentas en mora (muestra)</caption>
    <thead><tr><th scope="col">Cliente</th><th scope="col">Nivel</th><th scope="col">Etapa</th><th scope="col" class="n">Vencido</th><th scope="col" class="n">Días</th><th scope="col">Estado</th></tr></thead>
    <tbody>${rows.map((a) => `<tr class="${a.status === 'pagado' ? 'is-paid' : ''}"><th scope="row"><a href="#cuenta/${a.id}">${esc(a.name)}</a><small class="mono">${a.id}</small></th><td data-label="Nivel">${levelChip(a.level)}</td><td data-label="Etapa">${esc(a.stage)}</td><td data-label="Vencido" class="n">${money(a.overdue)}</td><td data-label="Días" class="n">${a.days}</td><td data-label="Estado" class="span-2">${statusChip(a)}</td></tr>`).join('')}</tbody>
  </table></div>
</div>`;
}

// =====================================================================
// CONECTORES
// =====================================================================
const CONNECTORS = [
  { name: 'SIF · sistema central de préstamos', desc: 'Cuentas, saldos, cuotas y pagos. Sincroniza cada 15 minutos.', status: 'on', icon: 'database' },
  { name: 'AgileCheck', desc: 'Score externo para la segmentación por nivel de riesgo.', status: 'on', icon: 'gauge' },
  { name: 'Enlace de pago', desc: 'Enlaces de un solo uso con el monto exacto de la cuota o del plan.', status: 'on', icon: 'coin' },
  { name: 'Yappy', desc: 'Pagos entrantes conciliados en segundos.', status: 'on', icon: 'sms' },
  { name: 'Archivo del banco', desc: 'Lectura automática del archivo diario de depósitos.', status: 'on', icon: 'file' },
  { name: 'WhatsApp Business (API oficial)', desc: 'Plantillas aprobadas y conversación con el asistente.', status: 'on', icon: 'conversacion' },
  { name: 'Email', desc: 'Estados de cuenta y recordatorios.', status: 'on', icon: 'mail' },
  { name: 'SMS', desc: 'Respaldo cuando el cliente no lee WhatsApp.', status: 'off', icon: 'sms' },
  { name: 'Voz IA', desc: 'Llamadas del asistente con número local. Se muestra en el Demo 2.', status: 'off', icon: 'mic' },
];
ROUTES.conectores = {
  title: 'Conectores',
  html() {
    return `${pageHead('Conectores', 'Conectores', `<span class="chip chip-ok">${ic('shield')}Configurado para Kredit</span> Cada empresa conecta sus propios sistemas; los datos de Kredit no se mezclan con los de nadie más.`)}
<ul class="connectors">${CONNECTORS.map((c) => `<li class="card connector">
  <span class="conn-icon">${ic(c.icon)}</span>
  <div><h2 class="card-title">${esc(c.name)}</h2><p class="muted small">${esc(c.desc)}</p></div>
  ${c.status === 'on' ? `<span class="chip chip-ok">${ic('check-circle')}Conectado</span>` : `<span class="chip chip-neutral">${ic('conectores')}Disponible</span>`}
  ${c.status === 'on' ? '<p class="conn-meta mono">Última sincronización: hoy 10:03 ' + tag() + '</p>' : '<p class="conn-meta mono">Se activa en la fase correspondiente</p>'}
</li>`).join('')}</ul>`;
  },
};

// =====================================================================
// RUTA
// =====================================================================
const RUTA = [
  { screen: 'Reglas, aprobaciones y bitácora', today: 'Regla editable, excepciones y registro encadenado', phase: 1, weeks: 'Semanas 1–3', href: '#reglas/planes' },
  { screen: 'Conciliación de pagos', today: 'Feed de pagos y simulación', phase: 1, weeks: 'Semanas 2–4', href: '#conciliacion' },
  { screen: 'Conectores SIF y AgileCheck', today: 'Catálogo', phase: 1, weeks: 'Semanas 1–4', href: '#conectores' },
  { screen: 'Bandeja y secuencia multicanal', today: 'Casos escalados y acciones', phase: 2, weeks: 'Semanas 4–6', href: '#bandeja' },
  { screen: 'Conversación por WhatsApp', today: 'Guiones simulados', phase: 3, weeks: 'Semanas 6–9', href: '#conversacion/pago' },
  { screen: 'Llamada de voz', today: 'Transcripción sincronizada (audio en el Demo 2)', phase: 4, weeks: 'Semanas 9–12', href: '#conversacion/voz' },
  { screen: 'Resumen gerencial', today: 'Indicadores y escenario ilustrativo', phase: 5, weeks: 'Semanas 11–14', href: '#resumen' },
];
const PHASES = ['Descubrimiento y bases', 'Segmentación y secuencia', 'Asistente de WhatsApp', 'Asistente de voz', 'Resumen y ajuste'];
ROUTES.ruta = {
  title: 'Qué llega y cuándo',
  html() {
    return `${pageHead('Ruta', 'Qué ve hoy y cuándo llega', 'Todo lo que muestra este demo es una maqueta. Así se construye, por fases, en 8 a 14 semanas.')}
<article class="card">
  <h2 class="card-title">Fases</h2>
  <ol class="phases">${PHASES.map((p, i) => `<li class="phase phase-${i + 1}"><span class="phase-n">Fase ${i + 1}</span><span>${esc(p)}</span></li>`).join('')}</ol>
  <p class="muted small">La fase 4 (voz) arranca solo con la fase 1 funcionando.</p>
</article>
<article class="card">
  <h2 class="card-title">Pantalla por pantalla</h2>
  <div class="table-scroll"><table class="ruta stack-mobile">
    <caption class="sr-only">Pantallas del demo, fase y semana en que llegan</caption>
    <thead><tr><th scope="col">Pantalla</th><th scope="col">Qué ve hoy en el demo</th><th scope="col">Fase</th><th scope="col">Cuándo</th></tr></thead>
    <tbody>${RUTA.map((r) => `<tr><th scope="row"><a href="${r.href}">${esc(r.screen)}</a></th><td data-label="Qué ve hoy">${esc(r.today)}</td><td data-label="Fase"><span class="phase-chip phase-${r.phase}">Fase ${r.phase}</span></td><td data-label="Cuándo" class="nowrap">${esc(r.weeks)}</td></tr>`).join('')}</tbody>
  </table></div>
</article>
<article class="card cta-card">
  <div>
    <h2>Siguiente paso</h2>
    <p>Un taller de reglas de 1 hora con usted y los datos de su cartera (cuentas en mora por nivel y por días) para fijar el precio. ¿Quiere oír la llamada de voz en vivo? Eso es el Demo 2.</p>
  </div>
  <a class="btn btn-primary" href="#conversacion/voz">${ic('phone')}Ver la llamada simulada</a>
</article>`;
  },
};

ROUTES.noencontrado = {
  title: 'Página no encontrada',
  html() { return `${pageHead('Demo', 'Esta sección no existe', 'Puede volver al resumen o usar el menú.')}<p><a class="btn btn-primary" href="#resumen">Ir al resumen</a></p>`; },
};

// =====================================================================
// RECORRIDO GUIADO (6 pasos)
// =====================================================================
const TOUR = [
  { hash: '#resumen', target: '[data-tour="hero"]', title: 'Hoy están aquí', text: () => 'La mora está en 10.0%, justo en la línea roja del límite, y así ha estado 90 días. Mueva las dos palancas: la curva punteada muestra cómo podría verse a los 60 días. Es un escenario ilustrativo, no una proyección.' },
  { hash: '#reglas/planes', target: '[data-tour="wow"]', title: 'Usted pone la regla una vez', text: (s) => { const st = ruleStats(s); return `Con estos valores, ${st.auto} de los 120 planes del mes pasado se habrían aprobado solos y a usted le habrían llegado ${st.exceptions}. Mueva el monto o las cuotas y vea cómo cambia.`; } },
  { hash: '#aprobaciones', target: '[data-tour="approvals"]', title: 'Solo ve las excepciones', text: (s) => { const st = ruleStats(s); return `Esto es lo único que le llega: ${st.exceptions} ${plural(st.exceptions, 'caso', 'casos')} fuera de regla, no 120. Cada decisión queda en la bitácora y se puede deshacer.`; } },
  { hash: '#conciliacion', target: '[data-tour="simular"]', title: 'Nadie le escribe a quien ya pagó', text: () => 'Pulse “Simular pago entrante”: el pago se concilia solo, la cuenta sale de la secuencia y se cancela el próximo mensaje.' },
  { hash: '#conversacion/pago', target: '[data-tour="phone-controls"]', title: 'El asistente cobra por WhatsApp', text: () => 'Reproduzca la conversación: se identifica como sistema automatizado, verifica identidad, ofrece un plan dentro de la regla y el pago se concilia. Después vuelva al Resumen: el recuperado sube.' },
  { hash: '#reglas/bitacora', target: '[data-tour="export"]', title: 'Todo queda registrado', text: () => 'Cada contacto, decisión y pago queda en una bitácora encadenada que puede exportar. Límites y horario están en la pestaña de al lado. Siguiente paso: un taller de reglas de 1 hora y los datos de su cartera para fijar el precio.' },
];
const tour = { active: false, i: 0, returnFocus: null };
ACTIONS['tour-start'] = (t) => { closeMore(false); tour.returnFocus = t; startTour(0); };
ACTIONS['tour-next'] = () => { if (tour.i >= TOUR.length - 1) endTour(true); else startTour(tour.i + 1); };
ACTIONS['tour-prev'] = () => { if (tour.i > 0) startTour(tour.i - 1); };
ACTIONS['tour-end'] = () => endTour(true);
function startTour(i) {
  tour.active = true;
  tour.i = i;
  const step = TOUR[i];
  const box = $('#tour');
  $('#tour-step').textContent = `Recorrido guiado · paso ${i + 1} de ${TOUR.length}`;
  $('#tour-title').textContent = step.title;
  $('#tour-text').textContent = step.text(getState());
  $('[data-action="tour-prev"]').disabled = i === 0;
  $('[data-action="tour-next"]').textContent = i === TOUR.length - 1 ? 'Terminar' : 'Siguiente';
  box.hidden = false;
  if (location.hash !== step.hash) location.hash = step.hash;
  else positionTour();
  requestAnimationFrame(() => $('#tour-title').focus({ preventScroll: true }));
}
function positionTour() {
  if (!tour.active) return;
  const step = TOUR[tour.i];
  $$('.tour-focus').forEach((n) => n.classList.remove('tour-focus'));
  const box = $('#tour');
  const target = $(step.target);
  $('#tour-text').textContent = step.text(getState());
  if (!target) { box.classList.add('tour-floating'); return; }
  target.classList.add('tour-focus');
  const mobile = window.innerWidth < 720;
  box.classList.toggle('tour-floating', mobile);
  const tall = target.offsetHeight > window.innerHeight * 0.75;
  target.scrollIntoView({ block: mobile || tall ? 'start' : 'center' });
  if (mobile) { box.style.removeProperty('transform'); return; }
  const r = target.getBoundingClientRect();
  const bw = box.offsetWidth, bh = box.offsetHeight;
  const minTop = 28 + 56 + 12; // banda + barra superior
  let top, left;
  if (tall) {
    // objetivo muy alto: el globo va dentro, arriba a la derecha, sin tapar la cifra principal
    top = Math.max(minTop, r.top + 16);
    left = Math.min(r.right - bw - 16, window.innerWidth - bw - 12);
  } else {
    top = r.bottom + 12;
    if (top + bh > window.innerHeight - 12) top = r.top - bh - 12;
    if (top < minTop) top = minTop;
    left = Math.min(Math.max(12, r.left), window.innerWidth - bw - 12);
  }
  box.style.transform = `translate(${Math.round(left)}px, ${Math.round(top)}px)`;
  requestAnimationFrame(() => $('#tour-title').focus({ preventScroll: true }));
}
function endTour(restore) {
  if (!tour.active) return;
  tour.active = false;
  $('#tour').hidden = true;
  $$('.tour-focus').forEach((n) => n.classList.remove('tour-focus'));
  if (restore && tour.returnFocus && document.body.contains(tour.returnFocus)) tour.returnFocus.focus();
}
window.addEventListener('resize', () => { if (tour.active) positionTour(); });

// ---------- arranque ----------
if (!location.hash) history.replaceState(null, '', '#resumen');
syncThemeButton();
render({ focus: false });
// Para pruebas automatizadas: estado de solo lectura.
window.__recupera = { getState, kpis: () => kpis(getState()) };
