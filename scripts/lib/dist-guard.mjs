/* Guarda de las pruebas sobre dist/ (antes vivía en scripts/portada.test.mjs). dist/ falta o está desactualizado si
   algún archivo de src/ o public/, astro.config.mjs o package-lock.json es más nuevo que dist/index.html. Con VERIFY=1
   (lo pasa scripts/verify.mjs) o en CI eso falla; fuera de ahí las pruebas de dist/ se saltan con el mensaje, para que
   una propuesta nueva en public/ no ponga en rojo `npm test`. SOLO_UNIDAD=1 las salta siempre (ciclo rápido).
   La raíz es un parámetro para poder probar el mensaje sin tocar el dist/ real. */
import { existsSync, statSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

function masNuevo(rutas) {
  let max = { t: 0, f: '' };
  const ver = (f) => { const s = statSync(f); if (s.isDirectory()) readdirSync(f).forEach((n) => ver(`${f}/${n}`)); else if (s.mtimeMs > max.t) max = { t: s.mtimeMs, f }; };
  rutas.filter((r) => existsSync(r)).forEach(ver);
  return max;
}

/** null si dist/ está al día; si no, el motivo. */
export function estadoDist(raiz = '.') {
  const home = join(raiz, 'dist/index.html');
  if (!existsSync(home)) return 'dist/ desactualizado: corre npm run build (falta dist/index.html)';
  const n = masNuevo(['src', 'public', 'astro.config.mjs', 'package-lock.json'].map((r) => join(raiz, r)));
  return n.t > statSync(home).mtimeMs ? `dist/ desactualizado: corre npm run build (${n.f} es más nuevo que dist/index.html)` : null;
}

/** Opciones de `test()` para las pruebas que leen dist/, más el estado, para la prueba «dist/ existe y está al día». */
export function guardaDist(raiz = '.', env = process.env) {
  const ESTRICTO = env.VERIFY === '1' || !!env.CI;
  const SOLO_UNIDAD = env.SOLO_UNIDAD === '1';
  const viejo = SOLO_UNIDAD ? null : estadoDist(raiz);
  const conDist = { skip: SOLO_UNIDAD ? 'SOLO_UNIDAD=1: sin las pruebas de dist/' : !ESTRICTO && viejo ? viejo : false };
  return { ESTRICTO, SOLO_UNIDAD, viejo, conDist };
}
