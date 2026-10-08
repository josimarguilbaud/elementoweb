// Estado único del demo: dispatch(action) muta entidades, añade bitácora con hash
// encadenado (SHA-256) y los KPIs salen de selectores puros.
import { BASE, DEFAULT_RULE, RULE_TEMPLATES, DEMO_TODAY, buildSeed, withinRule, money, addDays, COBRADORES } from './data.js?v=20261008a';

// ---------- SHA-256 síncrono (para la cadena de la bitácora) ----------
const K = new Uint32Array([
  0x428a2f98, 0x71374491, 0xb5c0fbcf, 0xe9b5dba5, 0x3956c25b, 0x59f111f1, 0x923f82a4, 0xab1c5ed5, 0xd807aa98, 0x12835b01, 0x243185be, 0x550c7dc3, 0x72be5d74, 0x80deb1fe, 0x9bdc06a7, 0xc19bf174,
  0xe49b69c1, 0xefbe4786, 0x0fc19dc6, 0x240ca1cc, 0x2de92c6f, 0x4a7484aa, 0x5cb0a9dc, 0x76f988da, 0x983e5152, 0xa831c66d, 0xb00327c8, 0xbf597fc7, 0xc6e00bf3, 0xd5a79147, 0x06ca6351, 0x14292967,
  0x27b70a85, 0x2e1b2138, 0x4d2c6dfc, 0x53380d13, 0x650a7354, 0x766a0abb, 0x81c2c92e, 0x92722c85, 0xa2bfe8a1, 0xa81a664b, 0xc24b8b70, 0xc76c51a3, 0xd192e819, 0xd6990624, 0xf40e3585, 0x106aa070,
  0x19a4c116, 0x1e376c08, 0x2748774c, 0x34b0bcb5, 0x391c0cb3, 0x4ed8aa4a, 0x5b9cca4f, 0x682e6ff3, 0x748f82ee, 0x78a5636f, 0x84c87814, 0x8cc70208, 0x90befffa, 0xa4506ceb, 0xbef9a3f7, 0xc67178f2,
]);
export function sha256(str) {
  const bytes = new TextEncoder().encode(str);
  const len = bytes.length;
  const total = ((len + 9 + 63) >> 6) << 6;
  const buf = new Uint8Array(total);
  buf.set(bytes);
  buf[len] = 0x80;
  const bits = len * 8;
  const dv = new DataView(buf.buffer);
  dv.setUint32(total - 4, bits >>> 0);
  dv.setUint32(total - 8, Math.floor(bits / 4294967296));
  const H = new Uint32Array([0x6a09e667, 0xbb67ae85, 0x3c6ef372, 0xa54ff53a, 0x510e527f, 0x9b05688c, 0x1f83d9ab, 0x5be0cd19]);
  const W = new Uint32Array(64);
  const rotr = (x, n) => (x >>> n) | (x << (32 - n));
  for (let off = 0; off < total; off += 64) {
    for (let i = 0; i < 16; i++) W[i] = dv.getUint32(off + i * 4);
    for (let i = 16; i < 64; i++) {
      const s0 = rotr(W[i - 15], 7) ^ rotr(W[i - 15], 18) ^ (W[i - 15] >>> 3);
      const s1 = rotr(W[i - 2], 17) ^ rotr(W[i - 2], 19) ^ (W[i - 2] >>> 10);
      W[i] = (W[i - 16] + s0 + W[i - 7] + s1) >>> 0;
    }
    let [a, b, c, d, e, f, g, h] = H;
    for (let i = 0; i < 64; i++) {
      const S1 = rotr(e, 6) ^ rotr(e, 11) ^ rotr(e, 25);
      const ch = (e & f) ^ (~e & g);
      const t1 = (h + S1 + ch + K[i] + W[i]) >>> 0;
      const S0 = rotr(a, 2) ^ rotr(a, 13) ^ rotr(a, 22);
      const mj = (a & b) ^ (a & c) ^ (b & c);
      const t2 = (S0 + mj) >>> 0;
      h = g; g = f; f = e; e = (d + t1) >>> 0; d = c; c = b; b = a; a = (t1 + t2) >>> 0;
    }
    H[0] += a; H[1] += b; H[2] += c; H[3] += d; H[4] += e; H[5] += f; H[6] += g; H[7] += h;
  }
  return Array.from(H, (x) => x.toString(16).padStart(8, '0')).join('');
}

const GENESIS = '0'.repeat(64);
function entryHash(e) {
  return sha256([e.prev, e.seq, e.ts, e.actor, e.action, e.entity, e.detail].join('|'));
}
export function verifyChain(audit) {
  let prev = GENESIS;
  for (let i = 0; i < audit.length; i++) {
    const e = audit[i];
    if (e.prev !== prev || e.seq !== i + 1 || entryHash(e) !== e.hash) return { ok: false, at: i + 1 };
    prev = e.hash;
  }
  return { ok: true, count: audit.length };
}

// ---------- reloj virtual (determinista) ----------
const CLOCK_START = 10 * 60 + 12; // 10:12 del DEMO_TODAY
function clockTs(min) {
  const day = Math.floor(min / 1440);
  const m = min % 1440;
  return addDays(DEMO_TODAY, day) + ' ' + String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0');
}

const clone = (o) => JSON.parse(JSON.stringify(o));
const STORAGE_KEY = 'recupera-demo-kredit-v1';

function initialState() {
  const seed = buildSeed();
  const s = {
    v: 1,
    clock: CLOCK_START,
    rule: clone(DEFAULT_RULE),
    decisions: {},
    sim: { d0Pct: 80, rulePct: 97 },
    accounts: seed.accounts,
    accountOrder: seed.accountOrder,
    requests: seed.requests,
    cases: seed.cases,
    payments: seed.payments,
    queue: seed.queue,
    scenarios: {},
    audit: [],
  };
  for (const c of s.cases) if (c.paused) pauseAccount(s, c.accountId, 'Caso en bandeja');
  for (const e of seed.seedAudit) appendAudit(s, e, e.ts);
  return s;
}

function appendAudit(s, { actor, action, entity, detail }, fixedTs) {
  const prev = s.audit.length ? s.audit[s.audit.length - 1].hash : GENESIS;
  let ts = fixedTs;
  if (!ts) { ts = clockTs(s.clock); s.clock += 2; }
  const e = { seq: s.audit.length + 1, ts, actor, action, entity, detail: String(detail), prev };
  e.hash = entryHash(e);
  s.audit.push(e);
  return e;
}
function nowTs(s) { return clockTs(s.clock); }

function pauseAccount(s, id, reason) {
  const a = s.accounts[id];
  if (!a) return 0;
  a.contactsPaused = true;
  let n = 0;
  a.next = a.next.map((x) => { if (x.status === 'programado') { n++; return { ...x, status: 'cancelado', reason }; } return x; });
  return n;
}
function resumeAccount(s, id) {
  const a = s.accounts[id];
  if (!a || a.status === 'pagado') return;
  a.contactsPaused = false;
  a.next = a.next.map((x) => (x.status === 'cancelado' && x.reason !== 'Pagó' ? { ...x, status: 'programado', reason: undefined } : x));
}

function applyPayment(s, p, actor) {
  const a = s.accounts[p.accountId];
  const cancelled = a ? a.next.filter((x) => x.status === 'programado').length : 0;
  const pay = { ...p, ts: nowTs(s), status: 'conciliado', isNew: true, cancelled };
  s.payments.unshift(pay);
  if (a) {
    a.status = 'pagado';
    a.paidCents += p.amountCents;
    a.next = a.next.map((x) => (x.status === 'programado' ? { ...x, status: 'cancelado', reason: 'Pagó' } : x));
    a.timeline.push({ ts: pay.ts, channel: 'Pago', text: `Pago de ${money(p.amountCents)} por ${p.source}.`, result: 'Conciliado automático · sale de la secuencia' });
  }
  appendAudit(s, { actor, action: 'Pago conciliado', entity: p.id, detail: `${p.source} · ${money(p.amountCents)} · cuenta ${p.accountId} · ${cancelled} mensaje(s) programado(s) cancelado(s)` });
  return pay;
}

// ---------- escenarios (idempotentes) ----------
const SCN = {
  pago: { accountId: 'K-10482', paymentId: 'PG-WA-10482' },
  disputa: { accountId: 'K-10517', caseId: 'C-2041' },
  titular: { accountId: 'K-10533' },
  voz: { accountId: 'K-10560' },
};
export const SCENARIO_ACCOUNTS = Object.fromEntries(Object.entries(SCN).map(([k, v]) => [k, v.accountId]));

function reduce(s, a) {
  switch (a.type) {
    case 'RULE_SET': {
      s.rule = { maxAmountCents: a.rule.maxAmountCents, maxCuotas: a.rule.maxCuotas, levels: ['A', 'B', 'C', 'D'].filter((l) => a.rule.levels.includes(l)) };
      if (a.commit) {
        const st = ruleStats(s);
        appendAudit(s, { actor: 'Gerencia General', action: 'Regla de planes actualizada', entity: 'Regla', detail: `Hasta ${money(s.rule.maxAmountCents)} · hasta ${s.rule.maxCuotas} cuotas · niveles ${s.rule.levels.join(', ') || 'ninguno'} · ${st.auto} de 120 automáticos, ${st.exceptions} a gerencia` });
      }
      return true;
    }
    case 'RULE_TEMPLATE': {
      const t = RULE_TEMPLATES.find((x) => x.id === a.id);
      if (!t) return false;
      return reduce(s, { type: 'RULE_SET', rule: t.rule, commit: true });
    }
    case 'DECIDE': {
      const r = s.requests.find((x) => x.id === a.id);
      if (!r || s.decisions[a.id] || withinRule(r, s.rule)) return false;
      s.decisions[a.id] = { decision: a.decision, ts: nowTs(s) };
      appendAudit(s, { actor: 'Gerencia General', action: a.decision === 'aprobado' ? 'Plan aprobado (excepción)' : 'Plan rechazado (excepción)', entity: r.id, detail: `${r.name} · nivel ${r.level} · ${money(r.amountCents)} en ${r.cuotas} cuotas` });
      return true;
    }
    case 'UNDO_DECISION': {
      if (!s.decisions[a.id]) return false;
      delete s.decisions[a.id];
      appendAudit(s, { actor: 'Gerencia General', action: 'Decisión deshecha', entity: a.id, detail: 'Vuelve a pendientes' });
      return true;
    }
    case 'SIM_SET': {
      s.sim = { d0Pct: clamp(a.d0Pct ?? s.sim.d0Pct, 20, 100), rulePct: clamp(a.rulePct ?? s.sim.rulePct, 20, 100) };
      return true;
    }
    case 'SCENARIO_PAGO': {
      if (s.scenarios.pago) return false; // idempotente: el pago solo cuenta una vez
      const c = SCN.pago;
      s.scenarios.pago = { before: clone(s.accounts[c.accountId]) };
      const acc = s.accounts[c.accountId];
      acc.timeline.push({ ts: nowTs(s), channel: 'WhatsApp', text: 'Asistente automatizado: verificación de identidad (últimos 4 dígitos), saldo y plan de 3 cuotas de B/. 1,250.00.', result: 'Aceptó el plan · link de pago enviado' });
      acc.promises.push({ ts: nowTs(s), amountCents: 125000, due: DEMO_TODAY, status: 'cumplida', label: 'Cuota 1 de 3' }, { ts: nowTs(s), amountCents: 125000, due: '2026-11-15', status: 'pendiente', label: 'Cuota 2 de 3' }, { ts: nowTs(s), amountCents: 125000, due: '2026-12-15', status: 'pendiente', label: 'Cuota 3 de 3' });
      appendAudit(s, { actor: 'Asistente WhatsApp', action: 'Plan aprobado por regla', entity: c.accountId, detail: '3 cuotas de B/. 1,250.00 · identidad verificada · dentro de la regla vigente' });
      applyPayment(s, { id: c.paymentId, source: 'Link de pago', ref: 'LK-74482', amountCents: 125000, accountId: c.accountId, channel: 'WhatsApp' }, 'Conciliación');
      return true;
    }
    case 'SCENARIO_DISPUTA': {
      if (s.scenarios.disputa) return false;
      const c = SCN.disputa;
      s.scenarios.disputa = { before: clone(s.accounts[c.accountId]) };
      const acc = s.accounts[c.accountId];
      appendAudit(s, { actor: 'Asistente WhatsApp', action: 'Búsqueda de pago', entity: c.accountId, detail: 'Link de pago, Yappy y archivo del banco (7 días) · sin coincidencia' });
      const n = pauseAccount(s, c.accountId, 'Disputa en revisión');
      acc.status = 'disputa';
      acc.timeline.push({ ts: nowTs(s), channel: 'WhatsApp', text: 'Cliente: “Yo ya pagué eso el viernes en el banco.” El asistente buscó el pago y no lo encontró.', result: 'Escalado a bandeja · contactos pausados' });
      s.cases.unshift({ id: c.caseId, accountId: c.accountId, motive: 'ya_pague', priority: 'alta', waitH: 0, owner: 'Sin asignar', status: 'abierto', paused: true, isNew: true,
        summary: 'El cliente dice que pagó el viernes en el banco. No hay coincidencia en link de pago, Yappy ni archivo del banco de los últimos 7 días. Envió foto del comprobante. Mensajes automáticos detenidos hasta que una persona lo revise.' });
      appendAudit(s, { actor: 'Sistema', action: 'Caso creado en bandeja', entity: c.caseId, detail: `Dice que ya pagó · cuenta ${c.accountId} · ${n} contacto(s) programado(s) cancelado(s)` });
      return true;
    }
    case 'SCENARIO_TITULAR': {
      if (s.scenarios.titular) return false;
      const c = SCN.titular;
      s.scenarios.titular = { before: clone(s.accounts[c.accountId]) };
      const acc = s.accounts[c.accountId];
      const n = pauseAccount(s, c.accountId, 'Número no es del titular');
      acc.status = 'no_titular';
      acc.timeline.push({ ts: nowTs(s), channel: 'WhatsApp', text: 'Respondió una persona que no es el titular. No se reveló nombre, monto ni datos del préstamo.', result: 'Número retirado · verificación de datos' });
      appendAudit(s, { actor: 'Asistente WhatsApp', action: 'Contacto con tercero', entity: c.accountId, detail: `No se reveló información · número marcado “no es el titular” · ${n} contacto(s) detenido(s)` });
      return true;
    }
    case 'SCENARIO_VOZ': {
      if (s.scenarios.voz) return false;
      const c = SCN.voz;
      s.scenarios.voz = { before: clone(s.accounts[c.accountId]) };
      const acc = s.accounts[c.accountId];
      acc.status = 'promesa';
      acc.promises.push({ ts: nowTs(s), amountCents: 194000, due: '2026-10-30', status: 'pendiente', label: 'Promesa por llamada' });
      acc.timeline.push({ ts: nowTs(s), channel: 'Llamada IA', text: 'Llamada con aviso de grabación e identidad verificada. Promesa de pago por B/. 1,940.00 para el 30 oct.', result: 'Promesa registrada' });
      acc.next = acc.next.map((x) => (x.status === 'programado' ? { ...x, status: 'cancelado', reason: 'Promesa vigente' } : x));
      acc.next.push({ id: c.accountId + '-p1', ts: '2026-10-29 10:00', channel: 'WhatsApp', label: 'Recordatorio de la promesa (1 día antes)', status: 'programado' });
      appendAudit(s, { actor: 'Asistente de voz', action: 'Promesa de pago registrada', entity: c.accountId, detail: 'B/. 1,940.00 para el 30 oct 2026 · aviso de grabación · identidad verificada' });
      return true;
    }
    case 'RESET_SCENARIO': {
      const k = a.scenario;
      const rec = s.scenarios[k];
      if (!rec) return false;
      const c = SCN[k];
      s.accounts[c.accountId] = rec.before;
      if (c.paymentId) s.payments = s.payments.filter((p) => p.id !== c.paymentId);
      if (c.caseId) s.cases = s.cases.filter((x) => x.id !== c.caseId);
      delete s.scenarios[k];
      appendAudit(s, { actor: 'Demo', action: 'Guion reiniciado', entity: c.accountId, detail: 'La cuenta vuelve a su estado inicial (solo en el demo)' });
      return true;
    }
    case 'SIMULATE_INCOMING': {
      const received = new Set(s.payments.map((p) => p.id));
      const next = s.queue.find((q) => !received.has(q.id));
      if (!next) return false;
      const channels = ['WhatsApp', 'Email', 'Llamada IA', 'SMS'];
      applyPayment(s, { ...next, channel: channels[s.queue.indexOf(next) % channels.length] }, 'Conciliación');
      return true;
    }
    case 'RESOLVE_UNMATCHED': {
      const p = s.payments.find((x) => x.id === a.id);
      if (!p || p.status !== 'sin_coincidencia') return false;
      if (p.suggestedId) {
        const acc = s.accounts[p.suggestedId];
        p.status = 'conciliado'; p.isNew = true; p.accountId = p.suggestedId; p.manual = true; p.channel = 'Cobrador';
        p.cancelled = acc.next.filter((x) => x.status === 'programado').length;
        acc.paidCents += p.amountCents;
        acc.status = 'pagado';
        acc.next = acc.next.map((x) => (x.status === 'programado' ? { ...x, status: 'cancelado', reason: 'Pagó' } : x));
        acc.timeline.push({ ts: nowTs(s), channel: 'Pago', text: `Pago de ${money(p.amountCents)} por ${p.source}, asociado por una persona del equipo.`, result: 'Conciliado tras revisión' });
        appendAudit(s, { actor: 'Equipo de cobranza', action: 'Pago asociado manualmente', entity: p.id, detail: `${p.source} · ${money(p.amountCents)} · cuenta ${p.suggestedId}` });
      } else {
        p.status = 'en_revision';
        appendAudit(s, { actor: 'Equipo de cobranza', action: 'Pago enviado a revisión', entity: p.id, detail: `${p.source} · ${money(p.amountCents)} · sin cuenta sugerida` });
      }
      return true;
    }
    case 'CASE_ASSIGN': {
      const c = s.cases.find((x) => x.id === a.id);
      if (!c || c.owner === a.owner) return false;
      c.owner = a.owner;
      appendAudit(s, { actor: 'Supervisión', action: 'Caso asignado', entity: c.id, detail: `Responsable: ${a.owner}` });
      return true;
    }
    case 'CASE_PAUSE': {
      const c = s.cases.find((x) => x.id === a.id);
      if (!c) return false;
      c.paused = !c.paused;
      if (c.paused) pauseAccount(s, c.accountId, 'Pausado desde bandeja'); else resumeAccount(s, c.accountId);
      appendAudit(s, { actor: 'Supervisión', action: c.paused ? 'Contactos pausados' : 'Contactos reanudados', entity: c.accountId, detail: `Desde el caso ${c.id}` });
      return true;
    }
    case 'CASE_CLOSE': {
      const c = s.cases.find((x) => x.id === a.id);
      if (!c) return false;
      c.status = c.status === 'cerrado' ? 'abierto' : 'cerrado';
      appendAudit(s, { actor: 'Supervisión', action: c.status === 'cerrado' ? 'Caso cerrado' : 'Caso reabierto', entity: c.id, detail: `Cuenta ${c.accountId}` });
      return true;
    }
    default:
      return false;
  }
}

function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, Math.round(Number(v) || 0))); }

// ---------- selectores puros ----------
export function ruleStats(s) {
  let auto = 0;
  for (const r of s.requests) if (withinRule(r, s.rule)) auto++;
  return { auto, exceptions: s.requests.length - auto, total: s.requests.length };
}
export function exceptions(s) {
  return s.requests.filter((r) => !withinRule(r, s.rule));
}
export function pendingExceptions(s) {
  return exceptions(s).filter((r) => !s.decisions[r.id]);
}
export function newPayments(s) {
  return s.payments.filter((p) => p.isNew && p.status === 'conciliado');
}
export function kpis(s) {
  const np = newPayments(s);
  const extra = np.reduce((t, p) => t + p.amountCents, 0);
  const recovered = BASE.recoveredCents + extra;
  const mora = BASE.moraCents - extra;
  const autoPays = np.filter((p) => !p.manual).length;
  const humanAdds = s.cases.filter((c) => c.isNew).length + np.filter((p) => p.manual).length;
  const autoResolved = BASE.autoResolved + autoPays;
  const totalResolved = BASE.totalResolved + autoPays + humanAdds;
  const avoided = BASE.messagesAvoided + np.reduce((t, p) => t + (p.cancelled ? 1 : 0), 0);
  const channels = BASE.channels.map((c) => ({ ...c, cents: c.cents + np.filter((p) => (p.channel || 'WhatsApp') === c.key).reduce((t, p) => t + p.amountCents, 0) }));
  const st = ruleStats(s);
  return {
    recoveredCents: recovered,
    recoveredPrevCents: BASE.recoveredPrevCents,
    recoveredDeltaPct: ((recovered - BASE.recoveredPrevCents) / BASE.recoveredPrevCents) * 100,
    recoveredHistory: [...BASE.recoveredHistory.slice(0, -1), recovered],
    moraCents: mora,
    carteraCents: BASE.carteraCents,
    moraPct: (mora / BASE.carteraCents) * 100,
    autoPct: (autoResolved / totalResolved) * 100,
    promisesPct: (BASE.promisesKept / BASE.promisesTotal) * 100,
    outOfLimit: BASE.outOfLimit,
    blockedAttempts: BASE.blockedAttempts,
    messagesAvoided: avoided,
    channels,
    hoursFreed: (st.auto * 12) / 60,
    ruleAuto: st.auto,
    ruleExceptions: st.exceptions,
    pending: pendingExceptions(s).length,
    openCases: s.cases.filter((c) => c.status !== 'cerrado').length,
  };
}

// Curva de escenario a 60 días (ilustrativa): la palanca D0 pesa más que la de reglas.
export function scenarioEnd(sim) {
  return Math.round((10 - (sim.d0Pct / 100) * 1.4 - (sim.rulePct / 100) * 0.6) * 100) / 100;
}

// ---------- tienda ----------
let state = load() || initialState();
const listeners = new Set();

function load() {
  try {
    const raw = sessionStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const s = JSON.parse(raw);
    if (!s || s.v !== 1 || !verifyChain(s.audit).ok) return null;
    return s;
  } catch { return null; }
}
function save() {
  try { sessionStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch { /* sin almacenamiento: el demo sigue en memoria */ }
}

export function getState() { return state; }
export function subscribe(fn) { listeners.add(fn); return () => listeners.delete(fn); }
export function dispatch(action) {
  if (action.type === 'RESET_DEMO') {
    state = initialState();
    try { sessionStorage.removeItem(STORAGE_KEY); } catch { /* nada */ }
    listeners.forEach((fn) => fn(state, action));
    return true;
  }
  const changed = reduce(state, action);
  if (changed) {
    save();
    listeners.forEach((fn) => fn(state, action));
  }
  return changed;
}
export { COBRADORES };
