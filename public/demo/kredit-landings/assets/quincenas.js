// quincenas.js — «la página sabe qué día es»: fechas reales para la regla de quincenas.
// Vista previa para Kredit · Elemento Web. Funciones puras (se prueban en Node) + pintado del DOM.
// Las quincenas de ejemplo son el 15 y el último día del mes; cada empresa define las suyas.

/** Feriados nacionales de Panamá 2026 (lista de ejemplo para la demo; confirmar con Kredit). */
export const FERIADOS_2026 = [
  '2026-01-01', '2026-01-09', '2026-02-16', '2026-02-17', '2026-04-03', '2026-05-01',
  '2026-11-03', '2026-11-05', '2026-11-10', '2026-11-28', '2026-12-08', '2026-12-25',
];

const iso = (d) => `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;

export function esDiaHabil(d, feriados = FERIADOS_2026) {
  const w = d.getDay();
  return w !== 0 && w !== 6 && !feriados.includes(iso(d));
}

/** El mismo día si es hábil; si no, el próximo día hábil. */
export function proximoHabil(d, feriados = FERIADOS_2026) {
  const x = new Date(d.getFullYear(), d.getMonth(), d.getDate());
  while (!esDiaHabil(x, feriados)) x.setDate(x.getDate() + 1);
  return x;
}

/** Las dos próximas quincenas (15 y último día del mes) estrictamente después de la fecha. */
export function proximasQuincenas(d, n = 2) {
  const out = [];
  let y = d.getFullYear(), m = d.getMonth();
  while (out.length < n) {
    for (const day of [15, new Date(y, m + 1, 0).getDate()]) {
      const q = new Date(y, m, day);
      if (q > d && out.length < n) out.push(q);
    }
    m += 1;
    if (m > 11) { m = 0; y += 1; }
  }
  return out;
}

const DIAS = ['dom', 'lun', 'mar', 'mié', 'jue', 'vie', 'sáb'];
const MESES = ['ene', 'feb', 'mar', 'abr', 'may', 'jun', 'jul', 'ago', 'sep', 'oct', 'nov', 'dic'];
export const corta = (d) => `${DIAS[d.getDay()]} ${d.getDate()} ${MESES[d.getMonth()]}`;

/** Textos de la regla para una fecha dada. */
export function regla(hoy = new Date()) {
  const habil = proximoHabil(hoy);
  const esHoy = iso(habil) === iso(hoy);
  const [q1, q2] = proximasQuincenas(habil);
  return {
    hoy: esHoy ? `Hoy · ${corta(hoy)}` : `${corta(hoy)} · día no hábil`,
    revision: esHoy ? 'El día de la aprobación' : `Desde el ${corta(habil)}`,
    q1: `${corta(q1)} · ejemplo`,
    q2: corta(q2),
    esHoy,
  };
}

if (typeof document !== 'undefined') {
  const el = document.querySelector('[data-payline]');
  if (el) {
    const r = regla();
    const set = (k, v) => { const n = el.querySelector(`[data-pl="${k}"]`); if (n) n.textContent = v; };
    set('hoy', r.hoy);
    set('revision', r.revision);
    set('q1', r.q1);
    set('q2', r.q2);
    if (!r.esHoy) {
      const note = el.querySelector('[data-pl="nota"]');
      if (note) note.textContent = 'Hoy no es día hábil: tu solicitud queda registrada y se revisa el próximo día hábil. El desembolso es el mismo día de la aprobación.';
    }
  }
}
