// form.js — motor compartido de formularios multipaso (vista previa Kredit · Elemento Web).
//
// Un mismo motor sirve a la landing de préstamos (B2C) y a la de empresas (B2B):
// cada página le pasa su configuración (pasos, rutas, campos, reglas de puntaje,
// textos del resultado). Así el JSON que recibe n8n tiene siempre la misma forma:
//   { form_id, submitted_at, lead:{...}, score, tier, score_detail, consents:{...},
//     attribution:{ utm_source, utm_medium, utm_campaign, utm_term, utm_content,
//                   gclid, fbclid, landing, landing_url, referrer } }
//
// MODO DEMO: si el <form> tiene data-endpoint="" (vacío) no se envía NADA a ningún
// servidor: se valida, se calcula el puntaje y se muestra el JSON que se enviaría.
// Con data-endpoint="https://…/webhook/…" se hace POST del JSON con fetch.
//
// Los helpers puros se exportan para las pruebas en Node (no tocan el DOM al importar).

/* ------------------------------------------------------------------ */
/* Helpers puros                                                       */
/* ------------------------------------------------------------------ */

// Cédula panameña (validación flexible): 8-123-456, 8-AV-12-345, 1PI-12-345, PE-12-345,
// E-8-123456, N-19-1234. Provincias 1–13.
export const CEDULA_RE = /^(?:PE|E|N|(?:[1-9]|1[0-3])(?:-?(?:AV|PI))?)-\d{1,4}-\d{1,6}$/;

export function normalizeCedula(v) {
  return String(v ?? '').toUpperCase().replace(/[‐-―]/g, '-').replace(/\s+/g, '');
}
export function isValidCedula(v) {
  return CEDULA_RE.test(normalizeCedula(v));
}
/** Enmascara la cédula para mostrarla en pantalla: 8-123-456 → 8-***-*56. */
export function maskCedula(v) {
  const parts = normalizeCedula(v).split('-');
  if (parts.length < 2) return '***';
  const first = parts.shift();
  const last = parts.pop();
  const mid = parts.map((p) => '*'.repeat(p.length));
  return [first, ...mid, '*'.repeat(Math.max(0, last.length - 2)) + last.slice(-2)].join('-');
}

/** Solo dígitos, sin el prefijo 507. */
export function normalizePhone(v) {
  let d = String(v ?? '').replace(/\D/g, '');
  if (d.length === 11 && d.startsWith('507')) d = d.slice(3);
  return d;
}
/** Celular panameño: 8 dígitos que empiezan por 6 (6123-4567). */
export const isMobilePA = (v) => /^6\d{7}$/.test(normalizePhone(v));
/** Teléfono panameño: celular o fijo de 7 dígitos. */
export const isPhonePA = (v) => /^(?:6\d{7}|[2-9]\d{6})$/.test(normalizePhone(v));
export function formatPhone(v) {
  const d = normalizePhone(v);
  if (d.length === 8) return `${d.slice(0, 4)}-${d.slice(4)}`;
  if (d.length === 7) return `${d.slice(0, 3)}-${d.slice(3)}`;
  return String(v ?? '').trim();
}
export const toE164PA = (v) => {
  const d = normalizePhone(v);
  return d ? '+507' + d : '';
};

export const isEmail = (v) => /^[^\s@]+@[^\s@.]+(?:\.[^\s@.]+)+$/.test(String(v ?? '').trim());
export const emailDomain = (v) => String(v ?? '').trim().toLowerCase().split('@')[1] || '';
export const FREE_EMAIL_DOMAINS = [
  'gmail.com', 'googlemail.com', 'hotmail.com', 'hotmail.es', 'outlook.com', 'outlook.es', 'live.com',
  'msn.com', 'yahoo.com', 'yahoo.es', 'ymail.com', 'icloud.com', 'me.com', 'aol.com', 'proton.me',
  'protonmail.com', 'gmx.com', 'mail.com', 'zoho.com',
];
export const isFreeEmail = (v) => FREE_EMAIL_DOMAINS.includes(emailDomain(v));

/** RUC panameño (validación flexible): 155612345-2-2021 DV 45, 8-123-456 DV 12… */
export function isValidRuc(v) {
  const s = String(v ?? '').trim().toUpperCase();
  const digits = s.replace(/\D/g, '').length;
  return digits >= 5 && /^[0-9A-Z]+(?:-[0-9A-Z]+){1,4}(?:\s*DV\s*\d{1,2})?$/.test(s);
}

export const isPersonName = (v) => /^[\p{L}'´.-]{2,}(?:\s+[\p{L}'´.-]{2,})+$/u.test(String(v ?? '').trim());

/** Suma los puntos de las reglas que se cumplen y asigna el nivel según los umbrales. */
export function computeScore(scoreCfg, lead) {
  let score = 0;
  const detail = [];
  for (const rule of scoreCfg.rules) {
    let ok = false;
    try { ok = !!rule.when(lead); } catch { ok = false; }
    if (ok) { score += rule.points; detail.push(rule.id); }
  }
  const t = scoreCfg.thresholds;
  const tier = score >= t.calificado ? 'calificado' : score >= t.revisar ? 'revisar' : 'no_calificado';
  return { score, tier, detail };
}

export const ATTR_KEYS = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_term', 'utm_content', 'gclid', 'fbclid'];

/** Atribución: parámetros de la URL (o los guardados en la sesión si la URL ya no los trae). */
export function buildAttribution(search, stored, extra = {}) {
  const params = new URLSearchParams(search || '');
  const fromUrl = {};
  let any = false;
  for (const k of ATTR_KEYS) {
    const v = params.get(k);
    if (v) { fromUrl[k] = v.slice(0, 200); any = true; }
  }
  const base = any ? fromUrl : (stored || {});
  const out = {};
  for (const k of ATTR_KEYS) out[k] = base[k] || null;
  return { ...out, landing: extra.landing || null, landing_url: extra.landingUrl || null, referrer: extra.referrer || null, _fromUrl: any ? fromUrl : null };
}

/** Pinta texto con marcadores [[dato por confirmar]] como etiquetas visibles, sin innerHTML. */
export function renderRich(el, text) {
  const doc = el.ownerDocument;
  String(text).split(/(\[\[[^\]]+\]\])/).forEach((part) => {
    if (!part) return;
    const m = part.match(/^\[\[([^\]]+)\]\]$/);
    if (m) {
      const s = doc.createElement('span');
      s.className = 'tbd';
      s.textContent = '[' + m[1] + ']';
      el.appendChild(s);
    } else el.appendChild(doc.createTextNode(part));
  });
  return el;
}

/** Copia del payload para mostrar en pantalla: la cédula va enmascarada. */
export function previewPayload(payload) {
  const copy = JSON.parse(JSON.stringify(payload));
  if (copy.lead && copy.lead.cedula) copy.lead.cedula = maskCedula(copy.lead.cedula);
  return copy;
}

/* ------------------------------------------------------------------ */
/* Motor del formulario (DOM)                                          */
/* ------------------------------------------------------------------ */

const DEFAULT_MSG = {
  required: 'Este dato es obligatorio.',
  choose: 'Elige una opción.',
  accept: 'Debes marcar esta casilla para continuar.',
  email: 'Escribe un correo válido, por ejemplo nombre@empresa.com.',
  cedula: 'Revisa tu cédula. Ejemplos válidos: 8-123-456, PE-12-345, E-8-123456, N-19-1234.',
  mobile: 'Escribe un celular panameño de 8 dígitos que empiece por 6, por ejemplo 6123-4567.',
  phone: 'Escribe un teléfono panameño válido (7 u 8 dígitos).',
  ruc: 'Revisa el RUC. Ejemplo: 1234567-1-123456 DV 12.',
  name: 'Escribe tu nombre y al menos un apellido.',
  money: 'Escribe un monto válido, solo números.',
  minChecked: 'Elige al menos una opción.',
};

const SVG_NS = 'http://www.w3.org/2000/svg';
function icon(doc, id, cls = 'ic') {
  const svg = doc.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('class', cls);
  svg.setAttribute('aria-hidden', 'true');
  svg.setAttribute('focusable', 'false');
  const use = doc.createElementNS(SVG_NS, 'use');
  use.setAttribute('href', '#' + id);
  svg.appendChild(use);
  return svg;
}

export function pushDataLayer(obj) {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(obj);
}

function readStoredAttribution() {
  try { return JSON.parse(sessionStorage.getItem('kredit_attr') || 'null'); } catch { return null; }
}
function storeAttribution(obj) {
  try { sessionStorage.setItem('kredit_attr', JSON.stringify(obj)); } catch { /* sin almacenamiento */ }
}

export function initLeadForm(form, config) {
  const doc = form.ownerDocument;
  const card = form.closest('[data-form-card]') || form.parentElement;
  const resultBox = card.querySelector('[data-result]');
  const steps = new Map([...form.querySelectorAll('[data-step]')].map((el) => [el.dataset.step, el]));
  const q = (sel) => form.querySelector(sel);
  const progress = card.querySelector('[data-progress]');
  const progressFill = card.querySelector('[data-progress-fill]');
  const progressLabel = card.querySelector('[data-progress-label]');
  const progressList = card.querySelector('[data-progress-list]');
  const prevBtn = q('[data-prev]');
  const nextBtn = q('[data-next]');
  const nextLabel = q('[data-next-label]') || nextBtn;
  const status = q('[data-form-status]');
  const submitError = q('[data-submit-error]');
  const fields = config.fields;
  const msgs = { ...DEFAULT_MSG, ...(config.messages || {}) };

  const st = { stepId: null, submitting: false, done: false, invalid: new Set(), lastPath: null };

  const raw = readStoredAttribution();
  const attribution = buildAttribution(location.search, raw, {
    landing: config.landing,
    landingUrl: location.origin + location.pathname,
    referrer: doc.referrer,
  });
  if (attribution._fromUrl) storeAttribution(attribution._fromUrl);
  delete attribution._fromUrl;

  const inputsFor = (name) => [...form.querySelectorAll(`[name="${name}"]`)];
  const hiddenByCondition = (el) => !!el.closest('[data-show-if][hidden]');

  function rawValue(name) {
    const el = inputsFor(name)[0];
    return el ? String(el.value ?? '') : '';
  }

  function readValue(name) {
    const f = fields[name];
    const els = inputsFor(name);
    if (!els.length || hiddenByCondition(els[0])) {
      if (f.kind === 'checkbox') return false;
      if (f.kind === 'checkboxes') return [];
      if (f.kind === 'money') return NaN;
      return '';
    }
    switch (f.kind) {
      case 'checkbox': return els[0].checked;
      case 'checkboxes': return els.filter((e) => e.checked).map((e) => e.value);
      case 'radio': return (els.find((e) => e.checked) || {}).value || '';
      case 'money': {
        const s = String(els[0].value).replace(/[^\d.]/g, '');
        return s ? Number(s) : NaN;
      }
      default: return String(els[0].value ?? '').trim();
    }
  }

  function values() {
    const v = {};
    for (const name of Object.keys(fields)) v[name] = readValue(name);
    return v;
  }

  function ctx() {
    const v = values();
    const c = { values: v, config, attribution, form };
    c.path = config.resolvePath ? config.resolvePath(c) : 'principal';
    c.steps = config.paths[c.path];
    return c;
  }

  /* ---------- validación ---------- */
  function isEmpty(name, v) {
    const k = fields[name].kind;
    if (k === 'checkbox') return v === false;
    if (k === 'checkboxes') return v.length === 0;
    if (k === 'money') return rawValue(name).trim() === '';
    return v === '' || v == null;
  }

  function fieldError(name, c) {
    const f = fields[name];
    const v = c.values[name];
    const m = { ...msgs, ...(f.messages || {}) };
    const required = typeof f.required === 'function' ? f.required(c) : !!f.required;
    if (isEmpty(name, v)) {
      if (!required) return '';
      if (f.kind === 'checkbox') return m.accept;
      if (f.kind === 'checkboxes') return m.minChecked;
      if (f.kind === 'select' || f.kind === 'radio') return m.choose;
      return m.required;
    }
    switch (f.kind) {
      case 'email': if (!isEmail(v)) return m.email; break;
      case 'cedula': if (!isValidCedula(v)) return m.cedula; break;
      case 'mobile': if (!isMobilePA(v)) return m.mobile; break;
      case 'phone': if (!isPhonePA(v)) return m.phone; break;
      case 'ruc': if (!isValidRuc(v)) return m.ruc; break;
      case 'name': if (!isPersonName(v)) return m.name; break;
      case 'money':
        if (!Number.isFinite(v)) return m.money;
        if (f.min != null && v < f.min) return m.min || m.money;
        if (f.max != null && v > f.max) return m.max || m.money;
        break;
      default: break;
    }
    if (f.validate) return f.validate(v, c) || '';
    return '';
  }

  function setError(name, message) {
    const wrap = form.querySelector(`[data-field="${name}"]`);
    const err = form.querySelector(`[data-error-for="${name}"]`);
    inputsFor(name).forEach((el) => (message ? el.setAttribute('aria-invalid', 'true') : el.removeAttribute('aria-invalid')));
    if (wrap) wrap.classList.toggle('is-invalid', !!message);
    if (err) {
      err.textContent = '';
      if (message) { err.appendChild(icon(doc, 'i-alert')); err.appendChild(doc.createTextNode(message)); }
      err.hidden = !message;
    }
    if (message) st.invalid.add(name); else st.invalid.delete(name);
  }

  function setWarning(name, message) {
    const w = form.querySelector(`[data-warn-for="${name}"]`);
    if (!w) return;
    w.textContent = '';
    if (message) { w.appendChild(icon(doc, 'i-info')); w.appendChild(doc.createTextNode(message)); }
    w.hidden = !message;
  }

  function updateWarnings(c) {
    for (const [name, f] of Object.entries(fields)) {
      if (!f.warn) continue;
      const v = c.values[name];
      setWarning(name, v && !fieldError(name, c) ? f.warn(v, c) || '' : '');
    }
  }

  function fieldsInStep(stepId) {
    const stepEl = steps.get(stepId);
    return Object.keys(fields).filter((name) => {
      const el = inputsFor(name)[0];
      return el && stepEl.contains(el) && !hiddenByCondition(el);
    });
  }

  function validateStep(stepId) {
    const c = ctx();
    const bad = [];
    for (const name of fieldsInStep(stepId)) {
      const m = fieldError(name, c);
      setError(name, m);
      if (m) bad.push(name);
    }
    if (bad.length) {
      const labels = bad.map((n) => fields[n].label || n);
      status.textContent = `Revisa ${bad.length === 1 ? 'el campo' : `${bad.length} campos`}: ${labels.join(', ')}.`;
      const first = inputsFor(bad[0])[0];
      first.focus();
      return false;
    }
    status.textContent = '';
    return true;
  }

  /* ---------- condiciones y progreso ---------- */
  function refreshConditions(c) {
    form.querySelectorAll('[data-show-if]').forEach((el) => {
      const fn = config.conditions && config.conditions[el.dataset.showIf];
      const on = fn ? !!fn(c) : true;
      if (el.hidden === on) {
        el.hidden = !on;
        if (!on) el.querySelectorAll('[name]').forEach((i) => fields[i.name] && setError(i.name, ''));
      }
    });
  }

  function renderProgress(c) {
    const path = c.steps;
    const i = Math.max(0, path.indexOf(st.stepId));
    const n = path.length;
    const title = config.stepTitles[st.stepId] || '';
    if (progressLabel) progressLabel.textContent = `Paso ${i + 1} de ${n} · ${title}`;
    if (progressFill) progressFill.style.transform = `scaleX(${(i + 1) / n})`;
    if (progress) {
      progress.setAttribute('aria-valuemax', String(n));
      progress.setAttribute('aria-valuenow', String(i + 1));
      progress.setAttribute('aria-valuetext', `Paso ${i + 1} de ${n}: ${title}`);
    }
    if (progressList) {
      progressList.textContent = '';
      path.forEach((id, k) => {
        const li = doc.createElement('li');
        li.className = k < i ? 'is-done' : k === i ? 'is-current' : '';
        if (k === i) li.setAttribute('aria-current', 'step');
        const dot = doc.createElement('span');
        dot.className = 'lf-dot';
        dot.setAttribute('aria-hidden', 'true');
        if (k < i) dot.appendChild(icon(doc, 'i-check'));
        else dot.textContent = String(k + 1);
        const lab = doc.createElement('span');
        lab.className = 'lf-dot-label';
        lab.textContent = config.stepTitles[id];
        li.append(dot, lab);
        progressList.appendChild(li);
      });
    }
    const last = i === n - 1;
    if (prevBtn) prevBtn.hidden = i === 0;
    nextLabel.textContent = last ? (config.submitLabels?.[c.path] || 'Enviar') : (config.nextLabel || 'Continuar');
    nextBtn.classList.toggle('is-final', last);
    st.lastPath = c.path;
  }

  function show(stepId, { focus = true } = {}) {
    st.stepId = stepId;
    for (const [id, el] of steps) el.hidden = id !== stepId;
    const c = ctx();
    refreshConditions(c);
    renderProgress(c);
    if (focus) {
      const target = steps.get(stepId);
      target.focus({ preventScroll: true });
      const top = card.getBoundingClientRect().top;
      const offset = (parseFloat(getComputedStyle(doc.documentElement).getPropertyValue('--sticky-offset')) || 110);
      if (top < offset - 8 || top > window.innerHeight * 0.6) {
        window.scrollTo({ top: window.scrollY + top - offset, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    }
    if (config.onStep) config.onStep(stepId, c);
    pushDataLayer({ event: 'form_step', form_id: config.formId, step_id: stepId, step_number: c.steps.indexOf(stepId) + 1, lead_path: c.path });
  }

  function next() {
    if (st.done || st.submitting) return;
    const id = st.stepId;
    if (!validateStep(id)) return;
    const c = ctx();
    if (config.beforeNext) config.beforeNext(id, c);
    const i = c.steps.indexOf(id);
    if (i === c.steps.length - 1) { submit(); return; }
    show(c.steps[i + 1]);
  }

  function prev() {
    const c = ctx();
    const i = c.steps.indexOf(st.stepId);
    if (i > 0) show(c.steps[i - 1]);
  }

  /* ---------- envío ---------- */
  async function submit() {
    if (st.submitting || st.done) return;
    st.submitting = true;
    nextBtn.disabled = true;
    nextBtn.setAttribute('aria-busy', 'true');
    nextLabel.textContent = 'Enviando…';
    if (submitError) submitError.hidden = true;

    const c = ctx();
    const lead = config.toLead(c);
    const scoring = (config.scoreFor && config.scoreFor(c, lead)) || computeScore(config.score, lead);
    const payload = {
      form_id: config.formId,
      submitted_at: new Date().toISOString(),
      lead,
      score: scoring.score,
      tier: scoring.tier,
      score_detail: scoring.detail,
      consents: config.toConsents(c),
      attribution: { ...attribution },
    };
    const hp = config.honeypot ? form.querySelector(`[name="${config.honeypot}"]`) : null;
    const isBot = !!(hp && hp.value.trim());
    const endpoint = (form.dataset.endpoint || '').trim();

    if (!isBot && endpoint) {
      try {
        const ctrl = new AbortController();
        const timer = setTimeout(() => ctrl.abort(), 15000);
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
          credentials: 'omit',
          signal: ctrl.signal,
        });
        clearTimeout(timer);
        if (!res.ok) throw new Error('HTTP ' + res.status);
      } catch {
        st.submitting = false;
        nextBtn.disabled = false;
        nextBtn.removeAttribute('aria-busy');
        renderProgress(c);
        if (submitError) {
          submitError.textContent = '';
          submitError.append(icon(doc, 'i-alert'), doc.createTextNode(config.sendErrorText || 'No pudimos enviar tu solicitud. Revisa tu conexión e inténtalo de nuevo.'));
          submitError.hidden = false;
        }
        return;
      }
    } else {
      // Modo demo (o bot): no sale nada del navegador. Pausa breve para que se note el envío.
      await new Promise((r) => setTimeout(r, 450));
    }

    st.done = true;
    st.submitting = false;
    if (isBot) { renderResult('revisar', c, null); return; }
    pushDataLayer({ event: 'lead_submit', form_id: config.formId, lead_tier: scoring.tier, lead_score: scoring.score, lead_path: c.path, demo_mode: !endpoint });
    renderResult(scoring.tier, c, endpoint ? null : payload);
  }

  function renderResult(tier, c, payload) {
    const r = config.result(tier, c);
    resultBox.textContent = '';
    const wrap = doc.createElement('div');
    wrap.className = `lf-result tone-${r.tone || 'ok'}`;
    wrap.dataset.tier = tier;

    const ic = doc.createElement('div');
    ic.className = 'lf-result__icon';
    ic.appendChild(icon(doc, r.icon || 'i-check'));
    const badge = doc.createElement('p');
    badge.className = 'lf-result__badge';
    badge.textContent = r.badge;
    const h = doc.createElement('h3');
    h.className = 'lf-result__title';
    h.tabIndex = -1;
    h.textContent = r.title;
    wrap.append(ic, badge, h);
    (r.body || []).forEach((t) => {
      const p = doc.createElement('p');
      p.className = 'lf-result__text';
      wrap.appendChild(renderRich(p, t));
    });
    if (r.next && r.next.length) {
      const ul = doc.createElement('ul');
      ul.className = 'lf-result__next';
      r.next.forEach((t) => {
        const li = doc.createElement('li');
        li.appendChild(icon(doc, 'i-check'));
        const sp = doc.createElement('span');
        li.appendChild(renderRich(sp, t));
        ul.appendChild(li);
      });
      wrap.appendChild(ul);
    }
    if (r.actions && r.actions.length) {
      const box = doc.createElement('div');
      box.className = 'lf-result__actions';
      r.actions.forEach((a) => {
        const el = doc.createElement('a');
        el.className = 'btn ' + (a.primary ? 'btn--blue' : 'btn--outline');
        el.href = a.href || '#';
        if (a.whatsapp != null) { el.dataset.whatsapp = a.whatsapp; el.dataset.waText = a.waText || ''; }
        if (a.external) { el.target = '_blank'; el.rel = 'noopener'; }
        if (a.icon) el.appendChild(icon(doc, a.icon));
        el.appendChild(doc.createTextNode(a.label));
        box.appendChild(el);
      });
      wrap.appendChild(box);
    }
    if (r.fine) {
      const p = doc.createElement('p');
      p.className = 'lf-result__fine';
      wrap.appendChild(renderRich(p, r.fine));
    }
    if (payload) {
      const det = doc.createElement('details');
      det.className = 'payload';
      det.dataset.payloadPanel = '';
      const sum = doc.createElement('summary');
      sum.append(icon(doc, 'i-code'), doc.createTextNode('Datos que se enviarían a n8n'));
      const note = doc.createElement('p');
      note.className = 'payload__note';
      note.textContent = config.demoNote || 'Modo demo: no se envió nada. En producción, este JSON se envía por POST al flujo de n8n configurado en data-endpoint. En esta vista la cédula aparece enmascarada.';
      const pre = doc.createElement('pre');
      pre.className = 'payload__json';
      pre.tabIndex = 0;
      pre.setAttribute('aria-label', 'JSON de la solicitud');
      const code = doc.createElement('code');
      code.textContent = JSON.stringify(previewPayload(payload), null, 2);
      pre.appendChild(code);
      det.append(sum, note, pre);
      wrap.appendChild(det);
    }
    const reset = doc.createElement('button');
    reset.type = 'button';
    reset.className = 'link-btn lf-result__reset';
    reset.append(icon(doc, 'i-refresh'), doc.createTextNode('Volver a empezar (demo)'));
    reset.addEventListener('click', () => api.reset(true));
    wrap.appendChild(reset);

    resultBox.appendChild(wrap);
    if (progressLabel) progressLabel.textContent = r.head || 'Solicitud enviada';
    if (progressFill) progressFill.style.width = '100%';
    if (progress) { progress.setAttribute('aria-valuenow', progress.getAttribute('aria-valuemax')); progress.setAttribute('aria-valuetext', r.head || 'Solicitud enviada'); }
    if (progressList) progressList.querySelectorAll('li').forEach((li) => {
      li.className = 'is-done';
      li.removeAttribute('aria-current');
      const dot = li.querySelector('.lf-dot');
      dot.textContent = '';
      dot.appendChild(icon(doc, 'i-check'));
    });
    form.hidden = true;
    resultBox.hidden = false;
    card.classList.add('is-result');
    if (config.onResult) config.onResult(tier, c);
    h.focus({ preventScroll: true });
    const top = card.getBoundingClientRect().top;
    if (top < 0 || top > window.innerHeight * 0.5) card.scrollIntoView({ block: 'start', behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  /* ---------- eventos ---------- */
  function onEdit(e) {
    const name = e.target.name;
    if (!name || !fields[name]) return;
    const c = ctx();
    if (st.invalid.has(name) || (e.type === 'change' && ['radio', 'checkbox', 'checkboxes', 'select'].includes(fields[name].kind) && st.invalid.has(name))) {
      setError(name, fieldError(name, c));
    }
    refreshConditions(c);
    updateWarnings(c);
    if (c.path !== st.lastPath) renderProgress(c);
    if (config.onInput) config.onInput(name, c);
  }
  form.addEventListener('input', onEdit);
  form.addEventListener('change', onEdit);

  // Validar al salir de un campo puede insertar un mensaje de error y mover el diseño
  // justo entre mousedown y mouseup (el clic "se pierde"). Si hay un puntero presionado,
  // la validación espera a que se suelte.
  let pointerDown = false;
  const pending = new Set();
  const flush = () => {
    pointerDown = false;
    if (!pending.size) return;
    const names = [...pending];
    pending.clear();
    setTimeout(() => names.forEach(blurValidate), 0);
  };
  doc.addEventListener('pointerdown', () => { pointerDown = true; }, true);
  doc.addEventListener('pointerup', flush, true);
  doc.addEventListener('pointercancel', flush, true);

  function blurValidate(name) {
    const f = fields[name];
    if (['radio', 'checkbox', 'checkboxes'].includes(f.kind)) return;
    const c = ctx();
    if (!isEmpty(name, c.values[name]) || st.invalid.has(name)) setError(name, fieldError(name, c));
    updateWarnings(c);
  }

  form.addEventListener('focusout', (e) => {
    const el = e.target;
    const name = el.name;
    if (!name || !fields[name]) return;
    const f = fields[name];
    if (f.kind === 'money' && el.value.trim()) {
      const n = Number(el.value.replace(/[^\d.]/g, ''));
      if (Number.isFinite(n) && n > 0) el.value = new Intl.NumberFormat('en-US', { maximumFractionDigits: 2 }).format(n);
    }
    if ((f.kind === 'mobile' || f.kind === 'phone') && el.value.trim()) el.value = formatPhone(el.value);
    if (f.kind === 'cedula' && el.value.trim()) el.value = normalizeCedula(el.value);
    if (pointerDown) pending.add(name);
    else blurValidate(name);
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    next();
  });
  if (prevBtn) prevBtn.addEventListener('click', prev);

  const api = {
    get stepId() { return st.stepId; },
    get path() { return ctx().path; },
    values,
    ctx,
    goTo: (id) => show(id),
    next,
    refresh() { const c = ctx(); refreshConditions(c); renderProgress(c); },
    setValue(name, value) {
      const els = inputsFor(name);
      const f = fields[name];
      if (!els.length) return;
      if (f && f.kind === 'radio') els.forEach((el) => { el.checked = el.value === String(value); });
      else if (f && f.kind === 'checkbox') els[0].checked = !!value;
      else els[0].value = value;
      els[0].dispatchEvent(new Event('change', { bubbles: true }));
    },
    reset(focus) {
      form.reset();
      for (const n of [...st.invalid]) setError(n, '');
      Object.keys(fields).forEach((n) => setWarning(n, ''));
      st.done = false; st.submitting = false;
      nextBtn.disabled = false;
      nextBtn.removeAttribute('aria-busy');
      resultBox.hidden = true;
      resultBox.textContent = '';
      form.hidden = false;
      card.classList.remove('is-result');
      if (config.onReset) config.onReset(api);
      show(config.paths[ctx().path][0], { focus: !!focus });
    },
  };

  show(config.paths[ctx().path][0], { focus: false });
  if (config.onInit) config.onInit(api);
  return api;
}
