// Datos ficticios y deterministas del demo. Nada aquí usa Date.now() ni Math.random().
// Todo el dinero está en centavos enteros.

export const PRODUCT_NAME = 'Recupera';
export const PRODUCT_BY = 'por Elemento Web';
export const WORKSPACE = 'Kredit';
export const DEMO_TODAY = '2026-10-15';
export const SEED = 20261015;

// ---------- utilidades ----------
export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

export function money(cents) {
  const neg = cents < 0;
  const abs = Math.abs(Math.round(cents));
  const whole = Math.floor(abs / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  const dec = String(abs % 100).padStart(2, '0');
  return (neg ? '−' : '') + 'B/. ' + whole + '.' + dec;
}

export function moneyShort(cents) {
  // Sin decimales, para ejes y etiquetas de gráficos.
  const whole = Math.round(cents / 100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return 'B/. ' + whole;
}

export function int(n) {
  return Math.round(n).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}

export function pct(n, d = 1) {
  return n.toFixed(d) + '%';
}

const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
const MESES_LARGOS = ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio', 'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'];

// Fechas como cadenas ISO "AAAA-MM-DD" o "AAAA-MM-DD HH:MM" (sin zona horaria).
export function addDays(iso, days) {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  const t = Date.UTC(y, m - 1, d) + days * 86400000;
  const dt = new Date(t);
  return dt.toISOString().slice(0, 10);
}
export function fmtDate(iso) {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  return `${d} ${MESES[m - 1]} ${y}`;
}
export function fmtDateShort(iso) {
  const [, m, d] = iso.slice(0, 10).split('-').map(Number);
  return `${d} ${MESES[m - 1]}`;
}
export function fmtDateLong(iso) {
  const [y, m, d] = iso.slice(0, 10).split('-').map(Number);
  return `${d} de ${MESES_LARGOS[m - 1]} de ${y}`;
}
export function fmtDateTime(ts) {
  return `${fmtDateShort(ts)} · ${ts.slice(11, 16)}`;
}

// ---------- catálogos ----------
const NOMBRES = ['María Fernanda', 'Luis Alberto', 'Carmen Isabel', 'Ricardo', 'Yaritza', 'Ernesto', 'Rodrigo', 'Itzel', 'José Manuel', 'Gabriela', 'Aníbal', 'Daniela', 'Rubén Darío', 'Marisol', 'Edwin', 'Katherine', 'Omar', 'Lourdes', 'Kevin', 'Yamileth', 'Héctor', 'Rosaura', 'Alexis', 'Mitzi', 'Fernando', 'Nathalie', 'Iván', 'Elvia', 'Gilberto', 'Anayansi', 'Abdiel', 'Dayana', 'Eric', 'Zuleika', 'Moisés', 'Vielka', 'Joel', 'Arelys', 'Saúl', 'Melany'];
const APELLIDOS = ['Quintero', 'Batista', 'Rodríguez', 'Pinzón', 'Morales', 'Vásquez', 'Castillo', 'González', 'Herrera', 'Sánchez', 'Barría', 'Cedeño', 'Ríos', 'Jaén', 'Pérez', 'Domínguez', 'Saldaña', 'Villarreal', 'Montenegro', 'Arosemena', 'De León', 'Samudio', 'Guerra', 'Navarro', 'Tejada', 'Caballero', 'Ortega', 'Chávez', 'Mendoza', 'Ábrego'];

export const COBRADORES = ['Ana Ríos', 'Jorge Sánchez', 'Melissa Cedeño'];
export const SIN_ASIGNAR = 'Sin asignar';

export const STAGES = ['D0', 'D3–5', 'D10–15', 'D20+'];
const STAGE_LABEL = { 'D0': 'Día 0 · WhatsApp + link de pago', 'D3–5': 'Días 3–5 · WhatsApp + email', 'D10–15': 'Días 10–15 · Llamada con IA', 'D20+': 'Día 20+ · Cobrador' };
export function stageLabel(s) { return STAGE_LABEL[s] || s; }
function stageFor(days) {
  if (days < 3) return 'D0';
  if (days < 10) return 'D3–5';
  if (days < 20) return 'D10–15';
  return 'D20+';
}

// ---------- cuentas (≈40 visibles) ----------
// Cuentas fijas que usan los guiones; el resto sale del PRNG.
const FIXED = [
  { id: 'K-10482', name: 'María Fernanda Quintero', level: 'B', score: 641, overdue: 375000, principal: 900000, days: 18, cuota: 125000, cuotas: 8, last4: '8417', ph: '41' },
  { id: 'K-10517', name: 'Luis Alberto Batista', level: 'C', score: 588, overdue: 218000, principal: 650000, days: 9, cuota: 109000, cuotas: 6, last4: '3052', ph: '07' },
  { id: 'K-10533', name: 'Carmen Isabel Rodríguez', level: 'A', score: 712, overdue: 98000, principal: 420000, days: 4, cuota: 49000, cuotas: 10, last4: '6620', ph: '93' },
  { id: 'K-10560', name: 'Ricardo Pinzón', level: 'B', score: 655, overdue: 194000, principal: 780000, days: 12, cuota: 97000, cuotas: 9, last4: '2209', ph: '58' },
  { id: 'K-10591', name: 'Ernesto Vásquez', level: 'D', score: 502, overdue: 640000, principal: 1180000, days: 34, cuota: 160000, cuotas: 7, last4: '1184', ph: '26' },
  { id: 'K-10604', name: 'Itzel Herrera', level: 'C', score: 571, overdue: 152000, principal: 510000, days: 16, cuota: 76000, cuotas: 7, last4: '9031', ph: '15' },
  { id: 'K-10618', name: 'José Manuel Barría', level: 'B', score: 630, overdue: 287500, principal: 1150000, days: 22, cuota: 115000, cuotas: 10, last4: '4478', ph: '62' },
  { id: 'K-10627', name: 'Gabriela Montenegro', level: 'A', score: 734, overdue: 61000, principal: 305000, days: 2, cuota: 61000, cuotas: 5, last4: '5306', ph: '84' },
  { id: 'K-10639', name: 'Aníbal Saldaña', level: 'C', score: 560, overdue: 336000, principal: 1340000, days: 27, cuota: 112000, cuotas: 12, last4: '7752', ph: '30' },
];

function baseTimeline(acc, rnd) {
  const ev = [];
  const start = addDays(DEMO_TODAY, -acc.days);
  ev.push({ ts: start + ' 08:30', channel: 'Sistema', text: `Cuota de ${money(acc.cuota)} vencida. Entra a la secuencia de cobranza.`, result: 'Inicio de secuencia' });
  if (acc.days >= 0) ev.push({ ts: start + ' 09:02', channel: 'WhatsApp', text: 'Recordatorio con link de pago. Incluye opción de baja (responder BAJA).', result: rnd() > 0.3 ? 'Leído' : 'Entregado' });
  if (acc.days >= 3) ev.push({ ts: addDays(start, 3) + ' 10:15', channel: 'Email', text: 'Estado de cuenta y link de pago.', result: 'Abierto' });
  if (acc.days >= 4) ev.push({ ts: addDays(start, 4) + ' 11:40', channel: 'WhatsApp', text: 'Segundo recordatorio con opciones de plan.', result: rnd() > 0.5 ? 'Respondió: “Pago la próxima semana”' : 'Leído, sin respuesta' });
  if (acc.days >= 10) ev.push({
    ts: addDays(start, 10) + ' 15:05', channel: 'Llamada IA', text: 'Llamada del asistente automatizado (aviso de grabación al inicio).', result: 'Contestó · 2 min 14 s',
    transcript: ['Asistente: Buenas tardes. Le llama el asistente automatizado de Kredit; esta llamada se graba.', 'Asistente: Para confirmar su identidad, ¿me indica los últimos 4 dígitos de su cédula?', 'Cliente: Sí, ' + acc.last4.split('').join(' ') + '.', 'Asistente: Gracias. Su cuenta tiene ' + money(acc.overdue) + ' vencidos.', 'Cliente: Estoy esperando un pago, le aviso.'],
  });
  if (acc.days >= 20) ev.push({ ts: addDays(start, 20) + ' 09:00', channel: 'Sistema', text: 'Pasa a gestión humana por días de mora.', result: 'Escalado' });
  return ev;
}

function nextContacts(acc) {
  const s = acc.stage;
  const next = [];
  if (s === 'D0' || s === 'D3–5') {
    next.push({ id: acc.id + '-n1', ts: addDays(DEMO_TODAY, 2) + ' 10:00', channel: 'WhatsApp', label: 'Recordatorio con opciones de plan', status: 'programado' });
    next.push({ id: acc.id + '-n2', ts: addDays(DEMO_TODAY, 5) + ' 10:30', channel: 'Email', label: 'Estado de cuenta actualizado', status: 'programado' });
  } else if (s === 'D10–15') {
    next.push({ id: acc.id + '-n1', ts: addDays(DEMO_TODAY, 1) + ' 15:00', channel: 'Llamada IA', label: 'Llamada con plan preaprobado', status: 'programado' });
    next.push({ id: acc.id + '-n2', ts: addDays(DEMO_TODAY, 3) + ' 10:00', channel: 'WhatsApp', label: 'Resumen de la llamada y link de pago', status: 'programado' });
  } else {
    next.push({ id: acc.id + '-n1', ts: addDays(DEMO_TODAY, 1) + ' 09:30', channel: 'Cobrador', label: 'Gestión personal del cobrador asignado', status: 'programado' });
  }
  return next;
}

function buildAccounts() {
  const rnd = mulberry32(SEED);
  const list = [];
  const used = new Set(FIXED.map((f) => f.name));
  for (const f of FIXED) list.push({ ...f });
  let idn = 10650;
  while (list.length < 40) {
    const name = NOMBRES[Math.floor(rnd() * NOMBRES.length)] + ' ' + APELLIDOS[Math.floor(rnd() * APELLIDOS.length)];
    if (used.has(name)) continue;
    used.add(name);
    const r = rnd();
    const level = r < 0.28 ? 'A' : r < 0.63 ? 'B' : r < 0.87 ? 'C' : 'D';
    const principal = Math.round((30000 + rnd() * 1470000) / 500) * 500; // 300 a 15,000
    const cuotas = 4 + Math.floor(rnd() * 20);
    const cuota = Math.round(principal / cuotas / 100) * 100;
    const days = Math.floor(Math.pow(rnd(), 2.4) * 38);
    const k = 1 + Math.floor(days / 30);
    const overdue = Math.min(principal, cuota * k);
    const score = Math.round(({ A: 720, B: 640, C: 575, D: 505 })[level] + (rnd() - 0.5) * 50);
    list.push({ id: 'K-' + idn, name, level, score, overdue, principal, days, cuota, cuotas, last4: String(1000 + Math.floor(rnd() * 9000)), ph: String(10 + Math.floor(rnd() * 90)) });
    idn += 3 + Math.floor(rnd() * 9);
  }
  const rnd2 = mulberry32(SEED + 7);
  return list.map((a) => {
    const stage = stageFor(a.days);
    const acc = {
      ...a,
      stage,
      phone: '+507 6•••-••' + a.ph,
      cedula: '•-•••-' + a.last4,
      status: stage === 'D20+' ? 'humano' : 'en_secuencia',
      contactsPaused: false,
      promises: [],
      paidCents: 0,
    };
    acc.timeline = baseTimeline(acc, rnd2);
    acc.next = nextContacts(acc);
    return acc;
  });
}

// ---------- 120 solicitudes de plan del mes pasado (el "wow" de reglas) ----------
// Con la regla por defecto (≤ B/. 5,000.00, ≤ 6 cuotas, niveles A–C) salen 117 automáticas y 3 excepciones.
export const DEFAULT_RULE = { maxAmountCents: 500000, maxCuotas: 6, levels: ['A', 'B', 'C'] };
export const RULE_TEMPLATES = [
  { id: 'conservadora', name: 'Conservadora', rule: { maxAmountCents: 250000, maxCuotas: 4, levels: ['A', 'B'] } },
  { id: 'recomendada', name: 'Recomendada', rule: DEFAULT_RULE },
  { id: 'amplia', name: 'Amplia', rule: { maxAmountCents: 1000000, maxCuotas: 10, levels: ['A', 'B', 'C', 'D'] } },
];

const MOTIVOS_PLAN = ['Reducción de jornada', 'Gasto médico familiar', 'Retraso en pago de salario', 'Cierre temporal de su negocio', 'Gastos escolares', 'Reparación de vehículo de trabajo'];

function buildRequests() {
  const rnd = mulberry32(SEED + 120);
  const reqs = [];
  const names = new Set();
  const pickName = () => {
    for (;;) {
      const n = NOMBRES[Math.floor(rnd() * NOMBRES.length)] + ' ' + APELLIDOS[Math.floor(rnd() * APELLIDOS.length)];
      if (!names.has(n)) { names.add(n); return n; }
    }
  };
  ['Ernesto Vásquez', 'Yaritza Morales', 'Rodrigo Castillo'].forEach((n) => names.add(n));
  for (let i = 0; i < 117; i++) {
    const r = rnd();
    const level = r < 0.36 ? 'A' : r < 0.76 ? 'B' : 'C';
    // montos sesgados hacia lo bajo, 300 a 5,000
    const amount = Math.round((30000 + Math.pow(rnd(), 1.6) * 470000) / 5000) * 5000;
    const cuotas = 2 + Math.floor(rnd() * 5); // 2..6
    reqs.push({ name: pickName(), level, amountCents: amount, cuotas, score: Math.round(({ A: 720, B: 640, C: 575 })[level] + (rnd() - 0.5) * 50), days: 3 + Math.floor(rnd() * 25), reason: MOTIVOS_PLAN[Math.floor(rnd() * MOTIVOS_PLAN.length)], paidBefore: 4 + Math.floor(rnd() * 20) });
  }
  const exceptions = [
    { name: 'Yaritza Morales', level: 'B', amountCents: 840000, cuotas: 6, score: 662, days: 21, reason: 'Retraso en pago de salario', paidBefore: 22, accountId: null,
      context: 'Ha pagado 22 cuotas puntuales antes de este atraso. Ingresos verificados en el sistema.', suggestion: 'Aprobar: buen historial; el monto supera la regla, no el riesgo.' },
    { name: 'Ernesto Vásquez', level: 'D', amountCents: 120000, cuotas: 4, score: 502, days: 34, reason: 'Cierre temporal de su negocio', paidBefore: 7, accountId: 'K-10591',
      context: 'Nivel D: dos atrasos previos en el año. Ya hay una cobradora asignada (Ana Ríos).', suggestion: 'Revisar con la cobradora asignada antes de aprobar.' },
    { name: 'Rodrigo Castillo', level: 'C', amountCents: 360000, cuotas: 10, score: 579, days: 15, reason: 'Gasto médico familiar', paidBefore: 11, accountId: null,
      context: 'Pide 10 cuotas; con 6 cuotas la cuota supera el 30% de su ingreso declarado.', suggestion: 'Contraoferta posible: 8 cuotas.' },
  ];
  // posiciones fijas para que las excepciones queden repartidas
  const out = reqs.slice();
  out.splice(14, 0, exceptions[0]);
  out.splice(61, 0, exceptions[1]);
  out.splice(98, 0, exceptions[2]);
  return out.map((r, i) => ({ id: 'P-' + String(2601 + i), date: addDays('2026-09-01', Math.floor((i * 30) / 120)), ...r }));
}

export function withinRule(req, rule) {
  return req.amountCents <= rule.maxAmountCents && req.cuotas <= rule.maxCuotas && rule.levels.includes(req.level);
}

export function ruleReasons(req, rule) {
  const out = [];
  if (req.amountCents > rule.maxAmountCents) out.push(`Monto ${money(req.amountCents)} supera el máximo de ${money(rule.maxAmountCents)}`);
  if (req.cuotas > rule.maxCuotas) out.push(`${req.cuotas} cuotas; la regla permite hasta ${rule.maxCuotas}`);
  if (!rule.levels.includes(req.level)) out.push(`Nivel ${req.level} no está entre los permitidos (${rule.levels.join(', ') || 'ninguno'})`);
  return out;
}

// ---------- bandeja: casos escalados ----------
export const MOTIVOS = {
  disputa: 'Disputa',
  ya_pague: 'Dice que ya pagó',
  legal: 'Mención legal',
  no_contactar: 'Pidió no contactar',
  fuera_regla: 'Fuera de regla',
  nivel_d: 'Nivel D',
};

function buildCases() {
  return [
    { id: 'C-2033', accountId: 'K-10591', motive: 'nivel_d', priority: 'alta', waitH: 30, owner: 'Ana Ríos', status: 'abierto', paused: false,
      summary: 'Cliente nivel D con 34 días de atraso. Solicitó plan de 4 cuotas por cierre temporal de su negocio. Asignado a una persona desde el inicio por política de nivel D.' },
    { id: 'C-2036', accountId: 'K-10618', motive: 'legal', priority: 'alta', waitH: 5, owner: SIN_ASIGNAR, status: 'abierto', paused: true,
      summary: 'En la llamada del día 22 el cliente dijo que “lo va a ver con su abogado”. El asistente dejó de insistir, no hizo ninguna amenaza y pasó el caso a una persona.' },
    { id: 'C-2037', accountId: 'K-10639', motive: 'no_contactar', priority: 'media', waitH: 12, owner: 'Jorge Sánchez', status: 'abierto', paused: true,
      summary: 'Respondió BAJA al mensaje de WhatsApp. Los mensajes automáticos están detenidos. Requiere contacto por carta o en persona según la política de Kredit.' },
    { id: 'C-2038', accountId: 'K-10604', motive: 'disputa', priority: 'media', waitH: 8, owner: SIN_ASIGNAR, status: 'abierto', paused: true,
      summary: 'No reconoce un cargo por mora de B/. 18.00 del mes de agosto. Pide el detalle de cargos antes de pagar.' },
    { id: 'C-2039', accountId: 'K-10627', motive: 'fuera_regla', priority: 'baja', waitH: 2, owner: 'Melissa Cedeño', status: 'abierto', paused: false,
      summary: 'Pidió mover la fecha de pago al día 30 de cada mes. El cambio de fecha no está en las reglas preaprobadas.' },
  ];
}

// ---------- conciliación ----------
export const SOURCES = ['Link de pago', 'Yappy', 'Archivo del banco'];

function buildPayments(accounts) {
  const byId = Object.fromEntries(accounts.map((a) => [a.id, a]));
  const pick = accounts.filter((a) => !FIXED.some((f) => f.id === a.id) && a.stage !== 'D20+').slice(0, 8);
  const times = ['07:12', '07:48', '08:05', '08:31', '08:52', '09:14', '09:40', '10:03'];
  const src = ['Yappy', 'Link de pago', 'Archivo del banco', 'Yappy', 'Link de pago', 'Link de pago', 'Archivo del banco', 'Yappy'];
  const out = pick.map((a, i) => ({
    id: 'PG-' + (88410 + i * 7), ts: DEMO_TODAY + ' ' + times[i], source: src[i], ref: src[i] === 'Yappy' ? 'YP-' + (551200 + i * 13) : src[i] === 'Link de pago' ? 'LK-' + (73100 + i * 11) : 'BCO-1015-' + (40 + i),
    amountCents: a.cuota, accountId: a.id, status: 'conciliado', isNew: false, cancelled: 1,
  }));
  // dos sin coincidencia
  out.splice(3, 0, { id: 'PG-88431', ts: DEMO_TODAY + ' 08:20', source: 'Archivo del banco', ref: 'BCO-1015-37', amountCents: 152000, accountId: null, suggestedId: 'K-10604', payer: 'I. HERRERA', status: 'sin_coincidencia', isNew: false, cancelled: 0, note: 'El nombre del depositante no coincide exactamente y el monto es distinto a la cuota.' });
  out.splice(7, 0, { id: 'PG-88452', ts: DEMO_TODAY + ' 09:02', source: 'Yappy', ref: 'YP-551274', amountCents: 41500, accountId: null, suggestedId: null, payer: '+507 6•••-••19', status: 'sin_coincidencia', isNew: false, cancelled: 0, note: 'El número de Yappy no está registrado en ninguna cuenta.' });
  out.forEach((p) => { if (p.accountId) { const a = byId[p.accountId]; if (a) { a.status = 'pagado'; a.paidCents = p.amountCents; a.next = a.next.map((n) => ({ ...n, status: 'cancelado', reason: 'Pagó' })); a.timeline.push({ ts: p.ts, channel: 'Pago', text: `Pago de ${money(p.amountCents)} por ${p.source}.`, result: 'Conciliado automático' }); } } });
  return out.sort((a, b) => (a.ts < b.ts ? 1 : -1));
}

// Pagos que llegan con "Simular pago entrante" (en orden).
export function incomingQueue(accounts) {
  const cands = accounts.filter((a) => a.status === 'en_secuencia' && !FIXED.some((f) => f.id === a.id));
  const src = ['Yappy', 'Link de pago', 'Archivo del banco', 'Yappy'];
  return cands.slice(0, 4).map((a, i) => ({ id: 'PG-9' + (1001 + i), source: src[i], ref: src[i] === 'Yappy' ? 'YP-5519' + (10 + i) : src[i] === 'Link de pago' ? 'LK-7399' + (10 + i) : 'BCO-1015-9' + i, amountCents: a.cuota, accountId: a.id }));
}

// ---------- métricas base (ejemplo) ----------
export const BASE = {
  carteraCents: 1248000000, // B/. 12,480,000.00
  moraCents: 124800000, // 10.0%
  limitPct: 10,
  goalPct: 8,
  recoveredCents: 18642350,
  recoveredPrevCents: 16120000,
  recoveredHistory: [14210000, 15030000, 14880000, 15560000, 16120000, 18642350],
  autoResolved: 336,
  totalResolved: 480,
  promisesKept: 214,
  promisesTotal: 274,
  outOfLimit: 0,
  blockedAttempts: 14,
  messagesAvoided: 312,
  firstContactH: 0.7,
  firstContactBeforeH: 26,
  managed: 480,
  planLimit: 1000,
  controlDiffCents: 3895000,
  channels: [
    { key: 'WhatsApp', cents: 8264350 },
    { key: 'Llamada IA', cents: 4120000 },
    { key: 'Email', cents: 1438000 },
    { key: 'SMS', cents: 690000 },
    { key: 'Cobrador', cents: 4130000 },
  ],
  funnel: [
    { key: 'D0', label: 'Día 0 · WhatsApp + link', accounts: 480, recoveredPct: 41 },
    { key: 'D3–5', label: 'Días 3–5 · WhatsApp + email', accounts: 283, recoveredPct: 27 },
    { key: 'D10–15', label: 'Días 10–15 · Llamada IA', accounts: 162, recoveredPct: 19 },
    { key: 'D20+', label: 'Día 20+ · Cobrador', accounts: 74, recoveredPct: 9 },
  ],
  levels: [
    { key: 'A', count: 132 },
    { key: 'B', count: 168 },
    { key: 'C', count: 117 },
    { key: 'D', count: 63 },
  ],
  thirdParty: [
    { key: 'Mensajes de WhatsApp', cents: 21240 },
    { key: 'Minutos de voz IA', cents: 31875 },
    { key: 'SMS', cents: 4120 },
    { key: 'Email', cents: 0, note: 'incluido' },
  ],
};

// 90 días de historia SIN plataforma: plana entre 9.8 y 10.1, termina en 10.0
export function moraHistory() {
  const rnd = mulberry32(SEED + 90);
  const out = [];
  let v = 9.95;
  for (let i = -90; i <= 0; i++) {
    v += (rnd() - 0.5) * 0.08 + (9.95 - v) * 0.15;
    v = Math.max(9.8, Math.min(10.1, v));
    out.push({ day: i, value: i === 0 ? 10.0 : Math.round(v * 100) / 100 });
  }
  return out;
}

// ---------- bitácora inicial ----------
function seedAudit() {
  return [
    { ts: '2026-10-14 08:00', actor: 'Sistema', action: 'Regla de planes vigente', entity: 'Regla', detail: 'Hasta B/. 5,000.00 · hasta 6 cuotas · niveles A, B, C' },
    { ts: '2026-10-14 09:02', actor: 'Asistente WhatsApp', action: 'Mensaje enviado', entity: 'K-10627', detail: 'Plantilla Día 0 v3 · dentro de horario · 1 de 2 intentos del día' },
    { ts: '2026-10-14 10:41', actor: 'Asistente WhatsApp', action: 'Plan aprobado por regla', entity: 'K-10650', detail: '3 cuotas · dentro de la regla vigente' },
    { ts: '2026-10-14 15:05', actor: 'Asistente de voz', action: 'Llamada realizada', entity: 'K-10604', detail: 'Aviso de grabación · identidad verificada · 3 min 02 s' },
    { ts: '2026-10-14 19:00', actor: 'Sistema', action: 'Contacto bloqueado', entity: 'K-10639', detail: 'Fuera de horario permitido · reprogramado para el día siguiente' },
    { ts: '2026-10-14 20:12', actor: 'Asistente WhatsApp', action: 'Baja registrada', entity: 'K-10639', detail: 'Cliente respondió BAJA · mensajes automáticos detenidos' },
    { ts: '2026-10-15 07:12', actor: 'Conciliación', action: 'Pago conciliado', entity: 'PG-88410', detail: 'Yappy · conciliado automático · mensaje programado cancelado' },
    { ts: '2026-10-15 08:20', actor: 'Conciliación', action: 'Pago sin coincidencia', entity: 'PG-88431', detail: 'Archivo del banco · enviado a revisión' },
  ];
}

export function buildSeed() {
  const accounts = buildAccounts();
  const payments = buildPayments(accounts);
  const queue = incomingQueue(accounts);
  return {
    accounts: Object.fromEntries(accounts.map((a) => [a.id, a])),
    accountOrder: accounts.map((a) => a.id),
    requests: buildRequests(),
    cases: buildCases(),
    payments,
    queue,
    seedAudit: seedAudit(),
  };
}
