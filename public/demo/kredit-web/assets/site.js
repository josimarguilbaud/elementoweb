// site.js — web multipágina de Kredit (vista previa de Elemento Web).
// Complementa a ../kredit-landings/assets/page.js (banda, WhatsApp en demo, barra fija, año del pie):
// - menú móvil accesible (aria-expanded, Escape, clic fuera);
// - calculadoras de cuota ([data-calc]) con las funciones puras de calc.js;
// - formulario de contacto en modo demo ([data-contact-form] con data-endpoint vacío: no envía nada);
// - índice de las páginas legales y de preguntas que marca la sección visible.
import { escenario, formatMoney, formatInt, parseMoney } from '../../kredit-landings/assets/calc.js?v=20261012a';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

/* ------------------------------------------------------------------ menú móvil */
const menuBtn = $('[data-menu-btn]');
const menu = $('[data-menu]');
if (menuBtn && menu) {
  const isOpen = () => menuBtn.getAttribute('aria-expanded') === 'true';
  const setOpen = (open, { returnFocus = false } = {}) => {
    menuBtn.setAttribute('aria-expanded', String(open));
    menu.hidden = !open;
    document.body.classList.toggle('menu-open', open);
    if (!open && returnFocus) menuBtn.focus();
  };
  menuBtn.addEventListener('click', () => setOpen(!isOpen()));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && isOpen()) { e.preventDefault(); setOpen(false, { returnFocus: true }); }
  });
  document.addEventListener('click', (e) => {
    if (isOpen() && !menu.contains(e.target) && !menuBtn.contains(e.target)) setOpen(false);
  });
  menu.addEventListener('click', (e) => { if (e.target.closest('a')) setOpen(false); });
  const wide = window.matchMedia('(min-width: 1121px)');
  wide.addEventListener('change', (m) => { if (m.matches && isOpen()) setOpen(false); });
}

/* ------------------------------------------------------------------ calculadoras */
const MSG_RANGO = 'El monto va de B/. 50 a B/. 3,000.';

function initCalc(root) {
  const montoIn = $('[data-calc-monto]', root);
  const range = $('[data-calc-range]', root);
  const tasaIn = $('[data-calc-tasa]', root);
  const err = $('[data-calc-error]', root);
  const live = $('[data-calc-live]', root);
  const compare = $('[data-calc-compare]', root);
  const sticky = root.hasAttribute('data-sticky-hide') || root.hasAttribute('data-calc-sticky') ? $('[data-sticky-cuota]') : null;
  if (!montoIn || !range) return;
  const MIN = Number(range.min);
  const MAX = Number(range.max);
  const radios = $$('input[type="radio"]', root);

  const read = () => ({
    monto: parseMoney(montoIn.value),
    tasa: tasaIn ? parseMoney(tasaIn.value) : Number(root.dataset.tasa),
    plazo: Number((radios.find((r) => r.checked) || {}).value || 0),
  });
  const set = (k, v) => $$(`[data-out="${k}"]`, root).forEach((n) => { n.textContent = v; });

  function paintCompare(monto, tasa, plazo, ok) {
    const body = compare.tBodies[0];
    body.textContent = '';
    for (const r of radios) {
      const n = Number(r.value);
      const e = ok ? escenario(monto, tasa, n) : null;
      const tr = document.createElement('tr');
      if (n === plazo) tr.className = 'is-current';
      const th = document.createElement('th');
      th.scope = 'row';
      th.textContent = `${n} meses`;
      tr.append(th);
      for (const v of [e ? formatMoney(e.quincena) : '—', e ? formatMoney(e.cuota) : '—', e ? formatMoney(e.total) : '—']) {
        const td = document.createElement('td');
        td.textContent = v;
        tr.append(td);
      }
      body.append(tr);
    }
  }

  function recalc(announce = false) {
    const { monto, tasa, plazo } = read();
    let msg = '';
    if (!Number.isFinite(monto) || monto <= 0) msg = 'Escribe el monto que necesitas.';
    else if (monto < MIN || monto > MAX) msg = MSG_RANGO;
    else if (!(Number.isFinite(tasa) && tasa >= 0 && tasa <= 60)) msg = 'La tasa de ejemplo va de 0 % a 60 % anual.';
    const ok = !msg && plazo > 0;
    if (err) { err.hidden = !msg; err.textContent = msg; }
    montoIn.setAttribute('aria-invalid', String(!!msg && msg !== 'La tasa de ejemplo va de 0 % a 60 % anual.'));
    if (tasaIn) tasaIn.setAttribute('aria-invalid', String(msg === 'La tasa de ejemplo va de 0 % a 60 % anual.'));
    const e = ok ? escenario(monto, tasa, plazo) : null;
    set('quincena', e ? formatMoney(e.quincena) : 'B/. —');
    set('cuota', e ? formatMoney(e.cuota) : '—');
    set('total', e ? formatMoney(e.total) : '—');
    set('intereses', e ? formatMoney(Math.max(0, e.total - monto)) : '—');
    set('quincenas', e ? String(plazo * 2) : '—');
    set('plazo', e ? `${plazo} meses` : '—');
    if (sticky) sticky.textContent = e ? formatMoney(e.quincena) : 'B/. —';
    if (compare) paintCompare(monto, tasa, plazo, ok);
    if (announce && e && live) live.textContent = `Cuota quincenal estimada: ${formatMoney(e.quincena)}; mensual: ${formatMoney(e.cuota)}.`;
    return e;
  }

  function syncRange() {
    range.setAttribute('aria-valuetext', formatMoney(Number(range.value)).replace('.00', ''));
  }

  range.addEventListener('input', () => { montoIn.value = formatInt(range.value); syncRange(); recalc(); });
  range.addEventListener('change', () => recalc(true));
  montoIn.addEventListener('input', () => {
    const n = parseMoney(montoIn.value);
    if (Number.isFinite(n)) { range.value = String(Math.min(MAX, Math.max(MIN, n))); syncRange(); }
    recalc();
  });
  montoIn.addEventListener('change', () => {
    const n = parseMoney(montoIn.value);
    if (Number.isFinite(n) && n > 0) montoIn.value = formatInt(n);
    recalc(true);
  });
  if (tasaIn) { tasaIn.addEventListener('input', () => recalc()); tasaIn.addEventListener('change', () => recalc(true)); }
  radios.forEach((r) => r.addEventListener('change', () => recalc(true)));
  syncRange();
  recalc();
}
$$('[data-calc]').forEach(initCalc);

/* ------------------------------------------------------------------ formulario de contacto */
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
const MOBILE_PA = /^(?:\+?507)?6\d{7}$/;

function initContact(form) {
  const result = $('[data-contact-result]');
  const status = $('[data-form-status]', form);
  const submitError = $('[data-submit-error]', form);
  const fields = {
    nombre: (v) => (v.trim().length >= 3 ? '' : 'Escribe tu nombre completo.'),
    correo: (v) => (EMAIL.test(v.trim()) ? '' : 'Escribe un correo válido, por ejemplo nombre@correo.com.'),
    celular: (v) => (!v.trim() || MOBILE_PA.test(v.replace(/[\s-]/g, '')) ? '' : 'Escribe un celular panameño de 8 dígitos, por ejemplo 6123-4567.'),
    motivo: (v) => (v ? '' : 'Elige el motivo de tu mensaje.'),
    mensaje: (v) => (v.trim().length >= 10 ? '' : 'Cuéntanos en qué te ayudamos (al menos 10 caracteres).'),
    acepta_privacidad: (v, el) => (el.checked ? '' : 'Debes aceptar la política de privacidad para enviar el mensaje.'),
  };
  const labels = { nombre: 'Nombre', correo: 'Correo', celular: 'Celular', motivo: 'Motivo', mensaje: 'Mensaje', acepta_privacidad: 'Privacidad' };

  function showError(name, msg) {
    const el = form.elements[name];
    const box = $(`[data-error-for="${name}"]`, form);
    if (el) el.setAttribute('aria-invalid', msg ? 'true' : 'false');
    if (box) { box.textContent = msg; box.hidden = !msg; }
  }
  function validate() {
    const bad = [];
    for (const [name, rule] of Object.entries(fields)) {
      const el = form.elements[name];
      const msg = rule(el.value || '', el);
      showError(name, msg);
      if (msg) bad.push(name);
    }
    return bad;
  }
  // Al corregir un campo marcado, el error se quita mientras escribes (no al salir del campo):
  // así el contenido no salta justo cuando haces clic en el siguiente control.
  for (const name of Object.keys(fields)) {
    const el = form.elements[name];
    const revalidate = () => { if (el.getAttribute('aria-invalid') === 'true') showError(name, fields[name](el.value || '', el)); };
    el.addEventListener(el.type === 'checkbox' || el.tagName === 'SELECT' ? 'change' : 'input', revalidate);
    if (el.type !== 'checkbox' && el.tagName !== 'SELECT') {
      el.addEventListener('blur', () => { if (el.value && el.getAttribute('aria-invalid') !== 'true') showError(name, fields[name](el.value, el)); });
    }
  }

  let busy = false;
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (busy) return;
    submitError.hidden = true;
    const bad = validate();
    if (bad.length) {
      status.textContent = `Revisa ${bad.length === 1 ? 'el campo' : 'los campos'}: ${bad.map((n) => labels[n]).join(', ')}.`;
      form.elements[bad[0]].focus();
      return;
    }
    if (form.elements.sitio_web && form.elements.sitio_web.value) return; // trampa para bots
    const endpoint = (form.dataset.endpoint || '').trim();
    const data = {
      form_id: 'kredit-contacto',
      submitted_at: new Date().toISOString(),
      nombre: form.elements.nombre.value.trim(),
      correo: form.elements.correo.value.trim(),
      celular: form.elements.celular.value.trim() || null,
      motivo: form.elements.motivo.value,
      mensaje: form.elements.mensaje.value.trim(),
      consents: { privacidad: true },
    };
    busy = true;
    try {
      if (endpoint) {
        const res = await fetch(endpoint, { method: 'POST', headers: { 'content-type': 'application/json' }, body: JSON.stringify(data) });
        if (!res.ok) throw new Error('HTTP ' + res.status);
      }
      form.hidden = true;
      $('[data-result-title]', result).textContent = endpoint ? 'Recibimos tu mensaje' : 'Modo demo: el mensaje no se envió';
      $('[data-result-text]', result).textContent = endpoint
        ? 'Un asesor de Kredit te responde por el canal que elegiste.'
        : `En la web real, el mensaje de ${data.nombre.split(' ')[0]} llegaría al equipo de Kredit, que responde por correo o WhatsApp. En esta vista previa no se envían datos ni se hacen peticiones.`;
      result.hidden = false;
      result.focus();
    } catch {
      submitError.textContent = 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos por WhatsApp.';
      submitError.hidden = false;
    } finally {
      busy = false;
    }
  });
  const again = $('[data-result-again]', result);
  if (again) again.addEventListener('click', () => {
    form.reset();
    Object.keys(fields).forEach((n) => showError(n, ''));
    result.hidden = true;
    form.hidden = false;
    form.elements.nombre.focus();
  });
}
$$('[data-contact-form]').forEach(initContact);

/* ------------------------------------------------------------------ índices (legales y preguntas) */
for (const toc of $$('[data-toc]')) {
  const desktop = window.matchMedia('(min-width: 961px)');
  if (toc.tagName === 'DETAILS') {
    const sync = () => { if (desktop.matches) toc.open = true; };
    sync();
    desktop.addEventListener('change', sync);
  }
  const links = $$('a[href^="#"]', toc);
  const targets = links.map((a) => document.getElementById(decodeURIComponent(a.hash.slice(1)))).filter(Boolean);
  if (!('IntersectionObserver' in window) || !targets.length) continue;
  const visible = new Map();
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => visible.set(en.target.id, en.isIntersecting));
    const current = targets.find((t) => visible.get(t.id));
    if (!current) return;
    links.forEach((a) => {
      if (a.hash === '#' + current.id) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  }, { rootMargin: '-20% 0px -60% 0px' });
  targets.forEach((t) => io.observe(t));
  toc.addEventListener('click', (e) => {
    if (e.target.closest('a') && toc.tagName === 'DETAILS' && !desktop.matches) toc.open = false;
  });
}
