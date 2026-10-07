// Exportación CSV de la bitácora: BOM UTF-8, comillas escapadas, fórmulas neutralizadas.

export const AUDIT_COLUMNS = [
  ['seq', 'secuencia'],
  ['ts', 'fecha_hora'],
  ['actor', 'actor'],
  ['action', 'accion'],
  ['entity', 'entidad'],
  ['detail', 'detalle'],
  ['prev', 'hash_anterior'],
  ['hash', 'hash'],
];

// Una celda que empieza con = + - @ (o tabulador / retorno) se abre como fórmula en
// una hoja de cálculo. Se antepone un apóstrofo para que se lea como texto.
export function neutralize(value) {
  const s = value == null ? '' : String(value);
  return /^[=+\-@\t\r]/.test(s) ? "'" + s : s;
}

export function csvCell(value) {
  const s = neutralize(value);
  return /[",\r\n;]/.test(s) || s !== s.trim() ? '"' + s.replace(/"/g, '""') + '"' : s;
}

export function toCsv(rows, columns = AUDIT_COLUMNS) {
  const head = columns.map(([, label]) => csvCell(label)).join(',');
  const body = rows.map((r) => columns.map(([key]) => csvCell(r[key])).join(','));
  return '﻿' + [head, ...body].join('\r\n') + '\r\n';
}

export function csvFilename(isoDate) {
  return 'bitacora-kredit-' + isoDate.replace(/-/g, '') + '.csv';
}

export function downloadCsv(text, filename) {
  const blob = new Blob([text], { type: 'text/csv;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.hidden = true;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
