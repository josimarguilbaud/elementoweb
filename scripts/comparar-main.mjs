/* No se degrada nada existente (AC14, D52): compara el <main> de cada página de dos builds.
     node scripts/comparar-main.mjs <dist-de-la-base> <dist-nuevo> --permitidas scripts/main-permitidas.json
   El archivo de permitidas lista { "cambian": [rutas], "nuevas": [rutas] }. Sale con 1 si cambia el <main> de una ruta
   que no está en `cambian`, si aparece una página que no está en `nuevas` o si desaparece una página de la base. Fuera del
   <main> (menú y pie) no compara: esos cambios se declaran aparte. Sale con 2 si el uso es incorrecto. */
import { readdirSync, readFileSync, statSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';

const args = process.argv.slice(2);
const i = args.indexOf('--permitidas');
const permitidasArchivo = i >= 0 ? args[i + 1] : null;
const [base, nueva] = args.filter((_, k) => k !== i && k !== i + 1);
if (!base || !nueva || !permitidasArchivo || !existsSync(base) || !existsSync(nueva) || !existsSync(permitidasArchivo)) {
  console.error('MKIA-MAIN: uso: node scripts/comparar-main.mjs <dist-de-la-base> <dist-nuevo> --permitidas <archivo.json>');
  process.exit(2);
}
const { cambian = [], nuevas = [] } = JSON.parse(readFileSync(permitidasArchivo, 'utf8'));

const paginas = (dist) => {
  const out = new Map();
  const ver = (d) => {
    for (const n of readdirSync(d)) {
      const p = join(d, n);
      if (statSync(p).isDirectory()) ver(p);
      else if (n === 'index.html') out.set('/' + relative(dist, d).replaceAll('\\', '/').replace(/^\/?/, '').replace(/([^/])$/, '$1/'), p);
    }
  };
  ver(dist);
  return out;
};
const mainDe = (archivo) => {
  const html = readFileSync(archivo, 'utf8');
  const m = html.match(/<main[\s\S]*?<\/main>/);
  return (m ? m[0] : '').replace(/\s+/g, ' ').trim();
};

const a = paginas(base);
const b = paginas(nueva);
const errores = [];
let iguales = 0, cambiadas = 0;
for (const [ruta, archivo] of a) {
  if (!b.has(ruta)) { errores.push(`${ruta}: estaba en la base y ya no existe`); continue; }
  if (mainDe(archivo) === mainDe(b.get(ruta))) { iguales++; continue; }
  if (cambian.includes(ruta)) { cambiadas++; continue; }
  errores.push(`${ruta}: el <main> cambió y no está en «cambian»`);
}
for (const ruta of b.keys()) if (!a.has(ruta) && !nuevas.includes(ruta)) errores.push(`${ruta}: página nueva que no está en «nuevas»`);
for (const ruta of cambian) if (a.has(ruta) && b.has(ruta) && mainDe(a.get(ruta)) === mainDe(b.get(ruta))) console.log(`· aviso: ${ruta} está en «cambian» pero su <main> no cambió`);

console.log(`${a.size} páginas en la base, ${b.size} nuevas: ${iguales} iguales, ${cambiadas} cambiadas como se declaró, ${nuevas.filter((r) => b.has(r) && !a.has(r)).length} nuevas.`);
if (errores.length) {
  for (const e of errores) console.error(`✗ ${e}`);
  console.error(`MKIA-MAIN: ${errores.length} diferencia(s) sin declarar.`);
  process.exit(1);
}
