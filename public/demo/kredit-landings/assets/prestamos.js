// prestamos.js — landing de préstamos (B2C): configuración del formulario y calculadora.
// Vista previa para Kredit · Elemento Web. Todos los umbrales y listas son EJEMPLOS de
// trabajo: los define Kredit (spec §4) y se ajustan aquí sin tocar el motor (form.js).
import { initLeadForm, normalizeCedula, toE164PA } from './form.js?v=20261012f';
import { escenario, formatMoney, formatInt, parseMoney } from './calc.js?v=20261012f';

/** Número oficial de WhatsApp de Kredit (kredit.com.pa). En demo no abre chats reales. */
export const WHATSAPP = '50769975664';

const ANTIGUEDAD_1_ANIO = ['1-2a', '2-5a', 'mas-5a'];

export const config = {
  formId: 'kredit-prestamos',
  landing: 'kredit-prestamos',
  honeypot: 'sitio_web',

  /** La autorización de consulta de referencias de crédito (APC) es obligatoria para precalificar. */
  consultaReferenciasObligatoria: true,

  umbrales: {
    montoMin: 50,           // montos de Kredit: de B/. 50 a B/. 3,000 (dato de Kredit, 12-oct-2026)
    montoMax: 3000,
    salarioMinimo: 600,     // salario neto mensual de referencia (por confirmar)
    cuotaMaxSobreSalario: 0.30, // capacidad de descuento de referencia (por confirmar)
  },

  // Puntaje de EJEMPLO (máximo 100). La empresa donde trabaja la persona no suma ni resta:
  // Kredit coordina el descuento directo con la empresa, sea cual sea.
  score: {
    thresholds: { calificado: 70, revisar: 40 },
    rules: [
      { id: 'antiguedad_1_anio_o_mas', points: 30, when: (l) => ANTIGUEDAD_1_ANIO.includes(l.antiguedad) },
      { id: 'antiguedad_6_a_11_meses', points: 15, when: (l) => l.antiguedad === '6-11m' },
      { id: 'salario_sobre_umbral', points: 25, when: (l) => l.salario_neto >= config.umbrales.salarioMinimo },
      { id: 'cuota_dentro_de_capacidad', points: 30, when: (l) => l.cuota_estimada <= l.salario_neto * config.umbrales.cuotaMaxSobreSalario },
      { id: 'monto_en_rango', points: 15, when: (l) => l.monto >= config.umbrales.montoMin && l.monto <= config.umbrales.montoMax },
    ],
  },

  paths: { principal: ['prestamo', 'trabajo', 'datos', 'autorizaciones'] },
  stepTitles: {
    prestamo: 'Tu préstamo',
    trabajo: 'Tu trabajo',
    datos: 'Tus datos',
    autorizaciones: 'Autorizaciones',
  },
  submitLabels: { principal: 'Enviar solicitud' },

  fields: {
    // Paso 1 · calculadora
    monto: { kind: 'money', required: true, min: 50, max: 3000, label: 'Monto',
      messages: { min: 'El monto mínimo es B/. 50.', max: 'El monto máximo es B/. 3,000.' } },
    plazo: { kind: 'radio', required: true, label: 'Plazo' },
    tasa_ejemplo: { kind: 'money', required: true, min: 0, max: 60, label: 'Tasa nominal anual de ejemplo',
      messages: { money: 'Escribe una tasa anual de ejemplo entre 0 y 60 %.', min: 'Escribe una tasa anual de ejemplo entre 0 y 60 %.', max: 'Escribe una tasa anual de ejemplo entre 0 y 60 %.' } },
    // Paso 2 · trabajo
    empresa: { kind: 'text', required: true, label: 'Empresa donde trabajas',
      messages: { required: 'Escribe el nombre de la empresa donde trabajas.' } },
    salario_neto: { kind: 'money', required: true, min: 1, max: 100000, label: 'Salario neto mensual',
      messages: { required: 'Escribe tu salario neto mensual (lo que recibes después de descuentos).' } },
    antiguedad: { kind: 'select', required: true, label: 'Antigüedad' },
    proposito: { kind: 'select', required: true, label: 'Propósito' },
    // Paso 3 · datos
    nombre: { kind: 'name', required: true, label: 'Nombre completo' },
    cedula: { kind: 'cedula', required: true, label: 'Cédula' },
    celular: { kind: 'mobile', required: true, label: 'Celular' },
    correo: { kind: 'email', required: true, label: 'Correo' },
    // Paso 4 · autorizaciones
    acepta_privacidad: { kind: 'checkbox', required: true, label: 'Aviso de privacidad' },
    acepta_referencias: { kind: 'checkbox', required: () => config.consultaReferenciasObligatoria, label: 'Consulta de referencias de crédito' },
    acepta_whatsapp: { kind: 'checkbox', label: 'Contacto por WhatsApp' },
  },

  toLead(c) {
    const v = c.values;
    const esc = escenario(v.monto, v.tasa_ejemplo, v.plazo);
    return {
      empresa: v.empresa,
      monto: Number.isFinite(v.monto) ? v.monto : null,
      plazo_meses: Number(v.plazo) || null,
      tasa_ejemplo: Number.isFinite(v.tasa_ejemplo) ? v.tasa_ejemplo : null,
      cuota_estimada: esc.cuota,
      proposito: v.proposito || null,
      salario_neto: Number.isFinite(v.salario_neto) ? v.salario_neto : null,
      antiguedad: v.antiguedad || null,
      nombre: v.nombre,
      cedula: normalizeCedula(v.cedula),
      celular: toE164PA(v.celular),
      correo: v.correo,
    };
  },

  toConsents(c) {
    const v = c.values;
    return { privacidad: v.acepta_privacidad, referencias_credito: v.acepta_referencias, whatsapp: v.acepta_whatsapp, version: 'demo-2026-10' };
  },

  result(tier, c) {
    const v = c.values;
    const first = String(v.nombre || '').split(/\s+/)[0] || '';
    const wa = v.acepta_whatsapp;
    const waBtn = (primary, text, label = 'Escribir ahora por WhatsApp') => ({ label, whatsapp: WHATSAPP, waText: text, primary, icon: 'i-wa' });
    const fine = 'Este resultado es preliminar y no es una decisión de crédito: un asesor revisa tu solicitud y la evaluación final la realiza Kredit.';
    const planilla = 'Tu cuota se descontará de tu planilla: Kredit coordina el descuento directo con tu empresa.';
    if (tier === 'calificado') {
      return {
        tone: 'ok', icon: 'i-check',
        badge: 'Solicitud recibida',
        title: `¡Listo, ${first}! Recibimos tu solicitud`,
        body: [wa
          ? 'Un asesor te escribirá por WhatsApp en minutos, en horario de atención [[horario por confirmar con Kredit]], para continuar con tu solicitud.'
          : 'Un asesor te contactará al celular o al correo que nos diste, en horario de atención [[horario por confirmar con Kredit]], para continuar con tu solicitud.'],
        next: [
          'Ten a mano tu cédula vigente.',
          'Antes de firmar recibirás por escrito la tasa de interés efectiva, los cargos y el costo total.',
          planilla,
        ],
        actions: [waBtn(true, 'Hola Kredit, acabo de enviar mi solicitud de crédito desde la web.')],
        fine,
      };
    }
    if (tier === 'revisar') {
      return {
        tone: 'review', icon: 'i-clipboard',
        badge: 'Solicitud recibida',
        title: 'Revisaremos tu solicitud',
        body: [`Gracias, ${first}. Un asesor revisará tu información y te contactará [[plazo de respuesta por confirmar con Kredit]] para conversar sobre las opciones que mejor se ajusten a ti.`],
        next: ['Ten a mano tu cédula vigente y tu último comprobante de pago.', planilla],
        actions: [waBtn(false, 'Hola Kredit, envié mi solicitud y quisiera más información.')],
        fine,
      };
    }
    return {
      tone: 'neutral', icon: 'i-heart',
      badge: 'Solicitud recibida',
      title: 'Gracias por confiar en Kredit',
      body: [
        `Gracias, ${first}. Recibimos tu solicitud y un asesor revisará tu información.`,
        'Si por ahora no hay una opción que se ajuste a tu perfil, te lo diremos con claridad; podrás volver a intentarlo cuando cambie tu situación, por ejemplo, con más tiempo en tu trabajo.',
        ...(wa ? ['Como aceptaste mensajes por WhatsApp, te enviaremos consejos para tus finanzas y otras opciones [[alternativa por confirmar con Kredit]].'] : []),
      ],
      next: ['Si tu solicitud avanza, tu cuota se descontará de tu planilla: Kredit coordina el descuento directo con tu empresa.'],
      actions: [waBtn(false, 'Hola Kredit, envié mi solicitud y quisiera hablar con un asesor.', 'Hablar con un asesor')],
      fine: 'Esta respuesta es automática; la evaluación de tu solicitud la realiza Kredit.',
    };
  },
};

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */
if (typeof document !== 'undefined') {
  const form = document.getElementById('form-prestamos');

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
    if (out.sticky) out.sticky.textContent = e ? formatMoney(e.quincena) : 'B/. —';
    if (out.step2) out.step2.textContent = e ? `${formatMoney(monto)} a ${plazo} meses · cuota estimada ${formatMoney(e.cuota)} al mes (${formatMoney(e.quincena)} por quincena)` : '—';
    if (announce && e) out.live.textContent = `Cuota quincenal estimada: ${formatMoney(e.quincena)}; mensual: ${formatMoney(e.cuota)}.`;
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
    recalc();
  };
  config.onReset = () => {
    paintRange();
    recalc();
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

  window.__kredit = { api, config };
}
