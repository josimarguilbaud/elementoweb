// prestamos.js — landing de préstamos (B2C): configuración del formulario y calculadora.
// Vista previa para Kredit · Elemento Web. Todos los umbrales y listas son EJEMPLOS de
// trabajo: los define Kredit (spec §4) y se ajustan aquí sin tocar el motor (form.js).
import { initLeadForm, normalizeCedula, toE164PA } from './form.js?v=20261011a';
import { escenario, formatMoney, formatInt, parseMoney } from './calc.js?v=20261011a';

/** Número oficial de WhatsApp de Kredit (kredit.com.pa). En demo no abre chats reales. */
export const WHATSAPP = '50769975664';

/** Lista de EJEMPLO para la demo. En producción se consulta la lista real (n8n / CRM). */
export const EMPRESAS_AFILIADAS_DEMO = [
  'Empresa Afiliada Demo, S.A.',
  'Distribuidora Ejemplo, S.A.',
  'Grupo Demo Panamá',
  'Comercial Ejemplo del Istmo, S.A.',
  'Servicios Demo del Pacífico, S.A.',
];

export function normalizeCompany(s) {
  return String(s || '')
    .toLowerCase()
    .normalize('NFD').replace(/[̀-ͯ]/g, '')
    .replace(/\bs\.?\s?a\.?(?=\s|$)/g, ' ')
    .replace(/[^a-z0-9]+/g, ' ')
    .trim();
}
export function isAffiliatedCompany(name, list = EMPRESAS_AFILIADAS_DEMO) {
  const n = normalizeCompany(name);
  return !!n && list.some((e) => normalizeCompany(e) === n);
}

export function affiliation(values) {
  const verified = isAffiliatedCompany(values.empresa);
  const declared = values.afiliada === 'si';
  return { verified, declared, afiliada: verified || declared, answered: !!values.afiliada || verified };
}

const ANTIGUEDAD_1_ANIO = ['1-2a', '2-5a', 'mas-5a'];

export const config = {
  formId: 'kredit-prestamos',
  landing: 'kredit-prestamos',
  honeypot: 'sitio_web',

  /** false = abierto al público (la empresa afiliada suma puntos y llega antes a "Calificado").
   *  true  = solo colaboradores de empresas afiliadas: los demás pasan a "Recomienda a tu empresa". */
  soloEmpresasAfiliadas: false,
  /** La autorización de consulta de referencias de crédito (APC) es obligatoria para precalificar. */
  consultaReferenciasObligatoria: true,

  umbrales: {
    montoMin: 300,          // rango ilustrativo de la calculadora (por confirmar con Kredit)
    montoMax: 15000,
    salarioMinimo: 600,     // salario neto mensual de referencia (por confirmar)
    cuotaMaxSobreSalario: 0.30, // capacidad de descuento de referencia (por confirmar)
  },

  score: {
    thresholds: { calificado: 70, revisar: 40 },
    rules: [
      { id: 'empresa_afiliada_verificada', points: 40, when: (l) => l.empresa_verificada },
      { id: 'empresa_afiliada_declarada', points: 20, when: (l) => !l.empresa_verificada && l.empresa_afiliada === 'si' },
      { id: 'antiguedad_1_anio_o_mas', points: 20, when: (l) => ANTIGUEDAD_1_ANIO.includes(l.antiguedad) },
      { id: 'antiguedad_6_a_11_meses', points: 10, when: (l) => l.antiguedad === '6-11m' },
      { id: 'salario_sobre_umbral', points: 15, when: (l) => l.salario_neto >= config.umbrales.salarioMinimo },
      { id: 'cuota_dentro_de_capacidad', points: 15, when: (l) => l.cuota_estimada <= l.salario_neto * config.umbrales.cuotaMaxSobreSalario },
      { id: 'monto_en_rango', points: 10, when: (l) => l.monto >= config.umbrales.montoMin && l.monto <= config.umbrales.montoMax },
    ],
  },

  paths: {
    principal: ['prestamo', 'trabajo', 'datos', 'autorizaciones'],
    referido: ['prestamo', 'trabajo', 'referido'],
  },
  stepTitles: {
    prestamo: 'Tu préstamo',
    trabajo: 'Tu trabajo',
    datos: 'Tus datos',
    autorizaciones: 'Autorizaciones',
    referido: 'Recomienda a tu empresa',
  },
  submitLabels: { principal: 'Enviar solicitud', referido: 'Enviar recomendación' },

  resolvePath(c) {
    const a = affiliation(c.values);
    return config.soloEmpresasAfiliadas && a.answered && !a.afiliada ? 'referido' : 'principal';
  },

  conditions: {
    noAfiliada: (c) => !affiliation(c.values).afiliada,
    recomendar: (c) => c.values.recomendar === true,
  },

  fields: {
    // Paso 1 · calculadora
    monto: { kind: 'money', required: true, min: 100, max: 100000, label: 'Monto',
      messages: { min: 'El monto mínimo para esta simulación es B/. 100.', max: 'Para montos mayores a B/. 100,000 habla con un asesor.' } },
    plazo: { kind: 'radio', required: true, label: 'Plazo' },
    tasa_ejemplo: { kind: 'money', required: true, min: 0, max: 60, label: 'Tasa de ejemplo',
      messages: { money: 'Escribe una tasa anual de ejemplo entre 0 y 60 %.', min: 'Escribe una tasa anual de ejemplo entre 0 y 60 %.', max: 'Escribe una tasa anual de ejemplo entre 0 y 60 %.' } },
    // Paso 2 · trabajo
    empresa: { kind: 'text', required: true, label: 'Empresa donde trabajas',
      messages: { required: 'Escribe el nombre de la empresa donde trabajas.' } },
    afiliada: { kind: 'radio', required: true, label: '¿Tu empresa está afiliada?' },
    salario_neto: { kind: 'money', required: true, min: 1, max: 100000, label: 'Salario neto mensual',
      messages: { required: 'Escribe tu salario neto mensual (lo que recibes después de descuentos).' } },
    antiguedad: { kind: 'select', required: true, label: 'Antigüedad' },
    proposito: { kind: 'select', required: true, label: 'Propósito' },
    // Paso 3 · datos
    nombre: { kind: 'name', required: true, label: 'Nombre completo' },
    cedula: { kind: 'cedula', required: true, label: 'Cédula' },
    celular: { kind: 'mobile', required: true, label: 'Celular' },
    correo: { kind: 'email', required: true, label: 'Correo' },
    // Paso 4 · autorizaciones (+ recomendación opcional si la empresa no está afiliada)
    recomendar: { kind: 'checkbox', label: 'Recomendar a mi empresa' },
    rec_rrhh_nombre: { kind: 'text', label: 'Contacto de RR. HH.' },
    rec_rrhh_correo: { kind: 'email', label: 'Correo de RR. HH.' },
    rec_rrhh_telefono: { kind: 'phone', label: 'Teléfono de RR. HH.' },
    rec_mencionar: { kind: 'checkbox', label: 'Mencionar mi nombre' },
    acepta_privacidad: { kind: 'checkbox', required: true, label: 'Aviso de privacidad' },
    acepta_referencias: { kind: 'checkbox', required: () => config.consultaReferenciasObligatoria, label: 'Consulta de referencias de crédito' },
    acepta_whatsapp: { kind: 'checkbox', label: 'Contacto por WhatsApp' },
    // Ruta "Recomienda a tu empresa"
    ref_nombre: { kind: 'name', required: true, label: 'Tu nombre' },
    ref_celular: { kind: 'mobile', required: true, label: 'Tu celular' },
    ref_correo: { kind: 'email', label: 'Tu correo' },
    ref_empresa: { kind: 'text', required: true, label: 'Empresa' },
    ref_rrhh_nombre: { kind: 'text', label: 'Contacto de RR. HH.' },
    ref_rrhh_correo: { kind: 'email', label: 'Correo de RR. HH.' },
    ref_rrhh_telefono: { kind: 'phone', label: 'Teléfono de RR. HH.' },
    ref_mencionar: { kind: 'checkbox', label: 'Mencionar mi nombre' },
    ref_privacidad: { kind: 'checkbox', required: true, label: 'Aviso de privacidad' },
    ref_whatsapp: { kind: 'checkbox', label: 'Aviso por WhatsApp' },
  },

  toLead(c) {
    const v = c.values;
    const a = affiliation(v);
    const esc = escenario(v.monto, v.tasa_ejemplo, v.plazo);
    const base = {
      empresa: c.path === 'referido' ? (v.ref_empresa || v.empresa) : v.empresa,
      empresa_verificada: a.verified,
      empresa_afiliada: a.verified ? 'si' : (v.afiliada || null),
      monto: Number.isFinite(v.monto) ? v.monto : null,
      plazo_meses: Number(v.plazo) || null,
      tasa_ejemplo: Number.isFinite(v.tasa_ejemplo) ? v.tasa_ejemplo : null,
      cuota_estimada: esc.cuota,
      proposito: v.proposito || null,
      salario_neto: Number.isFinite(v.salario_neto) ? v.salario_neto : null,
      antiguedad: v.antiguedad || null,
      regla_solo_afiliadas: config.soloEmpresasAfiliadas,
    };
    if (c.path === 'referido') {
      return {
        ...base,
        nombre: v.ref_nombre,
        celular: toE164PA(v.ref_celular),
        correo: v.ref_correo || null,
        referral: {
          empresa: v.ref_empresa || v.empresa,
          rrhh_nombre: v.ref_rrhh_nombre || null,
          rrhh_correo: v.ref_rrhh_correo || null,
          rrhh_telefono: v.ref_rrhh_telefono ? toE164PA(v.ref_rrhh_telefono) : null,
          mencionar_mi_nombre: v.ref_mencionar,
          origen: 'landing-prestamos',
        },
      };
    }
    return {
      ...base,
      nombre: v.nombre,
      cedula: normalizeCedula(v.cedula),
      celular: toE164PA(v.celular),
      correo: v.correo,
      referral: v.recomendar ? {
        empresa: v.empresa,
        rrhh_nombre: v.rec_rrhh_nombre || null,
        rrhh_correo: v.rec_rrhh_correo || null,
        rrhh_telefono: v.rec_rrhh_telefono ? toE164PA(v.rec_rrhh_telefono) : null,
        mencionar_mi_nombre: v.rec_mencionar,
        origen: 'landing-prestamos',
      } : null,
    };
  },

  scoreFor(c) {
    if (c.path === 'referido') return { score: null, tier: 'referido_empresa', detail: [] };
    return null;
  },

  toConsents(c) {
    const v = c.values;
    if (c.path === 'referido') {
      return { privacidad: v.ref_privacidad, referencias_credito: null, whatsapp: v.ref_whatsapp, version: 'demo-2026-10' };
    }
    return { privacidad: v.acepta_privacidad, referencias_credito: v.acepta_referencias, whatsapp: v.acepta_whatsapp, version: 'demo-2026-10' };
  },

  result(tier, c) {
    const v = c.values;
    const referido = c.path === 'referido';
    const first = String((referido ? v.ref_nombre : v.nombre) || '').split(/\s+/)[0] || '';
    const wa = referido ? v.ref_whatsapp : v.acepta_whatsapp;
    const waBtn = (primary, text) => ({ label: 'Escribir ahora por WhatsApp', whatsapp: WHATSAPP, waText: text, primary, icon: 'i-wa' });
    const fine = 'Este resultado es preliminar y no es una decisión de crédito: un asesor revisa tu solicitud y la evaluación final la realiza Kredit.';
    const empresa = (referido ? (v.ref_empresa || v.empresa) : v.empresa) || 'tu empresa';
    if (tier === 'referido_empresa') {
      return {
        tone: 'referral', icon: 'i-sparkles', head: 'Recomendación enviada',
        badge: 'Recomendación recibida',
        title: `¡Gracias, ${first}! Vamos a presentarle Kredit a ${empresa}`,
        body: [
          'Contactaremos a tu empresa para ofrecerle el beneficio de créditos para colaboradores, con cuotas fijas descontadas de la planilla.',
          wa ? 'Te avisaremos por WhatsApp en cuanto tu empresa esté afiliada para que puedas solicitar tu crédito.'
            : 'Te avisaremos al celular que nos diste en cuanto tu empresa esté afiliada para que puedas solicitar tu crédito.',
        ],
        next: ['Si quieres acelerar el proceso, comparte la página para empresas con RR. HH.'],
        actions: [{ label: 'Ver el beneficio para empresas', href: '../empresas/', icon: 'i-building', primary: true }],
        fine: v.ref_mencionar ? 'Le diremos a tu empresa que la recomendaste, como lo autorizaste.' : 'No le diremos a tu empresa quién la recomendó.',
      };
    }
    const refNote = v.recomendar ? [`Gracias por recomendar a ${empresa}: le presentaremos el beneficio para empresas.`] : [];
    if (tier === 'calificado') {
      return {
        tone: 'ok', icon: 'i-check',
        badge: 'Precalificación preliminar · Calificado',
        title: `¡Listo, ${first}! Tu solicitud cumple los criterios preliminares`,
        body: [wa
          ? 'Un asesor te escribirá por WhatsApp en minutos, en horario de atención [[horario por confirmar con Kredit]], para continuar con tu solicitud.'
          : 'Un asesor te contactará al celular o al correo que nos diste, en horario de atención [[horario por confirmar con Kredit]], para continuar con tu solicitud.'],
        next: [
          'Ten a mano tu cédula vigente.',
          'Antes de firmar recibirás por escrito la tasa de interés efectiva, los cargos y el costo total.',
          ...(affiliation(v).afiliada ? ['Con tu empresa afiliada, la cuota se descuenta directo de tu planilla.'] : []),
          ...refNote,
        ],
        actions: [waBtn(true, 'Hola Kredit, acabo de enviar mi solicitud de crédito desde la web.')],
        fine,
      };
    }
    if (tier === 'revisar') {
      return {
        tone: 'review', icon: 'i-clipboard',
        badge: 'Precalificación preliminar · En revisión',
        title: 'Revisaremos tu solicitud',
        body: [`Gracias, ${first}. Un asesor revisará tu información y te contactará [[plazo de respuesta por confirmar con Kredit]] para conversar sobre las opciones que mejor se ajusten a ti.`],
        next: ['Ten a mano tu cédula vigente y tu último comprobante de pago.', ...refNote],
        actions: [waBtn(false, 'Hola Kredit, envié mi solicitud y quisiera más información.')],
        fine,
      };
    }
    return {
      tone: 'neutral', icon: 'i-heart',
      badge: 'Precalificación preliminar',
      title: 'Gracias por confiar en Kredit',
      body: [
        `${first}, con la información que nos diste, por ahora no podemos ofrecerte esta opción de crédito.`,
        'No es definitivo: si cambia tu situación (por ejemplo, tienes más antigüedad o tu empresa se afilia a Kredit), puedes volver a intentarlo cuando quieras.',
        ...(wa ? ['Como aceptaste mensajes por WhatsApp, te enviaremos consejos para tus finanzas y otras opciones [[alternativa por confirmar con Kredit]].'] : []),
      ],
      next: refNote,
      actions: [{ label: '¿Tu empresa podría afiliarse? Recomiéndala', href: '../empresas/', icon: 'i-building' }],
      fine: 'Esta respuesta es preliminar y automática; no afecta tu historial de crédito.',
    };
  },
};

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */
if (typeof document !== 'undefined') {
  const form = document.getElementById('form-prestamos');
  const params = new URLSearchParams(location.search);
  if (params.get('solo_afiliadas') === '1') config.soloEmpresasAfiliadas = true;

  const $ = (s, el = document) => el.querySelector(s);
  const montoInput = $('#f-monto');
  const range = $('#calc-range');
  const tasaInput = $('#f-tasa');
  const out = {
    cuota: $('[data-calc-cuota]'),
    quincena: $('[data-calc-quincena]'),
    total: $('[data-calc-total]'),
    live: $('[data-calc-live]'),
    sticky: $('[data-sticky-cuota]'),
    step2: $('[data-step2-cuota]'),
  };

  const readCalc = () => ({
    monto: parseMoney(montoInput.value),
    tasa: parseMoney(tasaInput.value),
    plazo: Number((form.querySelector('input[name="plazo"]:checked') || {}).value || 0),
  });

  function paintRange() {
    const min = Number(range.min), max = Number(range.max);
    const pct = ((Number(range.value) - min) / (max - min)) * 100;
    range.style.setProperty('--fill', `${Math.min(100, Math.max(0, pct))}%`);
    range.setAttribute('aria-valuetext', formatMoney(Number(range.value)).replace('.00', ''));
  }

  function recalc(announce = false) {
    const { monto, tasa, plazo } = readCalc();
    const ok = monto > 0 && plazo > 0 && tasa >= 0 && tasa <= 60;
    const e = ok ? escenario(monto, tasa, plazo) : null;
    out.cuota.textContent = e ? formatMoney(e.cuota) : 'B/. —';
    out.quincena.textContent = e ? formatMoney(e.quincena) : '—';
    out.total.textContent = e ? formatMoney(e.total) : '—';
    if (out.sticky) out.sticky.textContent = e ? formatMoney(e.cuota) : 'B/. —';
    if (out.step2) out.step2.textContent = e ? `${formatMoney(monto)} a ${plazo} meses · cuota estimada ${formatMoney(e.cuota)}` : '—';
    if (announce && e) out.live.textContent = `Cuota mensual estimada: ${formatMoney(e.cuota)}.`;
    return e;
  }

  range.addEventListener('input', () => {
    montoInput.value = formatInt(range.value);
    paintRange();
    recalc();
    montoInput.dispatchEvent(new Event('input', { bubbles: true }));
  });
  range.addEventListener('change', () => recalc(true));
  montoInput.addEventListener('input', () => {
    const n = parseMoney(montoInput.value);
    if (Number.isFinite(n)) {
      range.value = String(Math.min(Number(range.max), Math.max(Number(range.min), n)));
      paintRange();
    }
    recalc();
  });
  montoInput.addEventListener('change', () => recalc(true));
  tasaInput.addEventListener('input', () => recalc());
  tasaInput.addEventListener('change', () => recalc(true));
  form.querySelectorAll('input[name="plazo"]').forEach((r) => r.addEventListener('change', () => recalc(true)));

  /* ---------- empresa: autocompletar sobre la lista de ejemplo ---------- */
  const empresaInput = $('#f-empresa');
  const list = $('#empresa-list');
  const companyStatus = $('[data-company-status]');
  let options = [];
  let active = -1;

  function openList(items) {
    options = items;
    list.textContent = '';
    items.forEach((name, i) => {
      const li = document.createElement('li');
      li.id = `empresa-opt-${i}`;
      li.setAttribute('role', 'option');
      li.setAttribute('aria-selected', 'false');
      li.dataset.value = name;
      const t = document.createElement('span');
      t.textContent = name;
      const b = document.createElement('span');
      b.className = 'combo__tag';
      b.textContent = 'Afiliada · ejemplo';
      li.append(t, b);
      list.appendChild(li);
    });
    const show = items.length > 0;
    list.hidden = !show;
    empresaInput.setAttribute('aria-expanded', String(show));
    setActive(-1);
  }
  function closeList() { list.hidden = true; empresaInput.setAttribute('aria-expanded', 'false'); setActive(-1); }
  function setActive(i) {
    active = i;
    [...list.children].forEach((li, k) => {
      li.classList.toggle('is-active', k === i);
      li.setAttribute('aria-selected', String(k === i));
    });
    if (i >= 0) {
      empresaInput.setAttribute('aria-activedescendant', `empresa-opt-${i}`);
      list.children[i].scrollIntoView({ block: 'nearest' });
    } else empresaInput.removeAttribute('aria-activedescendant');
  }
  function filter() {
    const qn = normalizeCompany(empresaInput.value);
    const items = EMPRESAS_AFILIADAS_DEMO.filter((e) => !qn || normalizeCompany(e).includes(qn));
    if (qn && items.length === 1 && normalizeCompany(items[0]) === qn) closeList();
    else openList(items);
  }
  function choose(name) {
    empresaInput.value = name;
    closeList();
    api.setValue('afiliada', 'si');
    empresaInput.dispatchEvent(new Event('input', { bubbles: true }));
    updateCompanyStatus();
  }
  empresaInput.addEventListener('focus', filter);
  empresaInput.addEventListener('input', () => { filter(); updateCompanyStatus(); });
  empresaInput.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { e.preventDefault(); if (list.hidden) filter(); setActive(Math.min(options.length - 1, active + 1)); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setActive(Math.max(0, active - 1)); }
    else if (e.key === 'Enter' && !list.hidden && active >= 0) { e.preventDefault(); choose(options[active]); }
    else if (e.key === 'Escape') closeList();
  });
  list.addEventListener('pointerdown', (e) => {
    const li = e.target.closest('[role="option"]');
    if (li) { e.preventDefault(); choose(li.dataset.value); }
  });
  empresaInput.addEventListener('blur', () => setTimeout(closeList, 120));

  function setStatus(text, tone) {
    companyStatus.textContent = text;
    companyStatus.className = 'field-status' + (tone ? ` is-${tone}` : '');
    companyStatus.hidden = !text;
  }
  function updateCompanyStatus() {
    const v = api.values();
    const a = affiliation(v);
    if (!v.empresa) return setStatus('', '');
    if (a.verified) return setStatus(`${v.empresa} está afiliada a Kredit (lista de ejemplo). Tu cuota se descontaría de tu planilla.`, 'ok');
    if (v.afiliada === 'si') return setStatus('Verificaremos la afiliación de tu empresa junto con tu solicitud.', 'info');
    if (v.afiliada === 'no' || v.afiliada === 'no_se') {
      return setStatus(config.soloEmpresasAfiliadas
        ? 'Kredit atiende a colaboradores de empresas afiliadas. En el siguiente paso puedes recomendar a tu empresa y te avisamos cuando se afilie.'
        : 'No hay problema: puedes continuar tu solicitud. Al final también podrás recomendar a tu empresa para que se afilie.', 'info');
    }
    return setStatus('', '');
  }

  /* ---------- resumen del paso 4 ---------- */
  function fillSummary() {
    const v = api.values();
    const e = escenario(v.monto, v.tasa_ejemplo, v.plazo);
    const rows = [
      ['Monto', formatMoney(v.monto)],
      ['Plazo', `${v.plazo} meses`],
      ['Cuota estimada', `${formatMoney(e.cuota)} al mes`],
      ['Empresa', v.empresa],
    ];
    const dl = $('[data-summary]');
    dl.textContent = '';
    rows.forEach(([k, val]) => {
      const d = document.createElement('div');
      const dt = document.createElement('dt'); dt.textContent = k;
      const dd = document.createElement('dd'); dd.textContent = val;
      d.append(dt, dd);
      dl.appendChild(d);
    });
  }

  config.onStep = (id) => {
    if (id === 'autorizaciones') fillSummary();
    if (id === 'referido') {
      const ref = $('#f-ref-empresa');
      if (!ref.value) ref.value = api.values().empresa;
    }
    if (id === 'trabajo') updateCompanyStatus();
    recalc();
  };
  config.onInput = (name) => {
    if (name === 'afiliada') updateCompanyStatus();
  };
  config.onReset = () => {
    paintRange();
    recalc();
    setStatus('', '');
  };

  const api = initLeadForm(form, config);
  paintRange();
  recalc();

  /* ---------- tarjetas de metas: precargan el propósito ---------- */
  document.querySelectorAll('[data-goal]').forEach((btn) => {
    btn.addEventListener('click', () => {
      api.setValue('proposito', btn.dataset.goal);
      const card = document.getElementById('solicitud');
      card.scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth', block: 'start' });
      montoInput.focus({ preventScroll: true });
    });
  });

  /* ---------- ajuste de demo: regla "solo empresas afiliadas" ---------- */
  const toggle = $('#demo-solo-afiliadas');
  const toggleState = $('[data-rule-state]');
  const paintRule = () => {
    toggle.checked = config.soloEmpresasAfiliadas;
    toggleState.textContent = config.soloEmpresasAfiliadas
      ? 'Solo colaboradores de empresas afiliadas: los demás pasan a «Recomienda a tu empresa».'
      : 'Abierto al público: la empresa afiliada suma puntos y llega antes a «Calificado».';
  };
  toggle.addEventListener('change', () => {
    config.soloEmpresasAfiliadas = toggle.checked;
    paintRule();
    api.refresh();
    updateCompanyStatus();
  });
  paintRule();

  window.__kredit = { api, config };
}
