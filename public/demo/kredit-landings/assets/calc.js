// calc.js — funciones puras de la calculadora de cuota (sin DOM).
// Vista previa para Kredit · Elemento Web. Se importan también desde las pruebas en Node.

/** Cuota mensual con amortización francesa (cuota fija). Tasa anual en %. */
export function cuotaMensual(monto, tasaAnualPct, meses) {
  const P = Number(monto);
  const n = Math.round(Number(meses));
  const r = Number(tasaAnualPct) / 100 / 12;
  if (!(P > 0) || !(n > 0) || !(r >= 0) || !Number.isFinite(r)) return 0;
  if (r === 0) return P / n;
  return (P * r) / (1 - Math.pow(1 + r, -n));
}

export function round2(x) {
  return Math.round((Number(x) + Number.EPSILON) * 100) / 100;
}

const money2 = new Intl.NumberFormat('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
const money0 = new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 });

/** "B/. 1,234.56" (formato panameño: coma de miles, punto decimal). */
export function formatMoney(x) {
  return 'B/. ' + money2.format(round2(x || 0));
}

/** "1,234" para campos de monto. */
export function formatInt(x) {
  return money0.format(Math.round(Number(x) || 0));
}

/** Lee montos escritos como "B/. 1,234.50", "1234" o "1.234" (sin decimales ambiguos). */
export function parseMoney(v) {
  if (typeof v === 'number') return v;
  const s = String(v || '').replace(/[^\d.,]/g, '');
  if (!s) return NaN;
  // "1,234.56" → coma de miles; "1.234" sin decimales tras el punto de 3 cifras → miles
  let clean = s.replace(/,/g, '');
  if (/^\d{1,3}(\.\d{3})+$/.test(s)) clean = s.replace(/\./g, '');
  const n = parseFloat(clean);
  return Number.isFinite(n) ? n : NaN;
}

/** Resumen de un escenario: cuota, total y cuota por quincena (planilla quincenal). */
export function escenario(monto, tasaAnualPct, meses) {
  const cuota = cuotaMensual(monto, tasaAnualPct, meses);
  return {
    cuota: round2(cuota),
    quincena: round2(cuota / 2),
    total: round2(cuota * Math.round(Number(meses) || 0)),
  };
}
