/* La hoja compartida (dist/_astro/*.css) no gana utilidades que salgan del código (AC11, D52).
     node scripts/selectores-hoja.mjs <dist-de-la-base> <dist-nuevo>
   Extrae los selectores de cada build e imprime «+N −M». Por cada selector nuevo, desescapa sus clases (la hoja escribe
   `md\:flex` o `w-\[12px\]`; en el código van como `md:flex` o `w-[12px]`) y busca cada clase con
   `git grep --untracked -lwF` (-F porque `[` y `.` no son regex aquí; -w para que «italic» no coincida con «italicas»).
   Sale con 1 si alguna clase nueva aparece en src/: hay que quitarla, cambiar la palabra del contenido que la produce o
   declararla con su peso. Las que solo salen de docs/, audit/, scripts/ o TODOS.md se listan como aviso, porque
   Tailwind 4 lee todo archivo que git no ignora. Sale con 2 si el uso es incorrecto. */
import { readdirSync, readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import { spawnSync } from 'node:child_process';

const [base, nueva] = process.argv.slice(2);
if (!base || !nueva || !existsSync(join(base, '_astro')) || !existsSync(join(nueva, '_astro'))) {
  console.error('MKIA-SELECTORES: uso: node scripts/selectores-hoja.mjs <dist-de-la-base> <dist-nuevo> (cada uno con su carpeta _astro/)');
  process.exit(2);
}

/** Selectores de las reglas de estilo de todas las hojas de una carpeta _astro (sin las reglas @, que solo agrupan). */
function selectores(dist) {
  const out = new Set();
  for (const f of readdirSync(join(dist, '_astro')).filter((n) => n.endsWith('.css'))) {
    const css = readFileSync(join(dist, '_astro', f), 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    for (const m of css.matchAll(/([^{}]+)\{/g)) {
      const preludio = m[1].trim();
      if (!preludio || preludio.startsWith('@') || /^(from|to|\d+%)/.test(preludio)) continue;
      for (const s of preludio.split(',')) if (s.trim()) out.add(s.trim());
    }
  }
  return out;
}

const antes = selectores(base);
const despues = selectores(nueva);
const nuevos = [...despues].filter((s) => !antes.has(s));
const quitados = [...antes].filter((s) => !despues.has(s));
console.log(`selectores de la hoja compartida: +${nuevos.length} −${quitados.length}`);

const clasesDe = (sel) => [...sel.matchAll(/\.((?:\\.|[A-Za-z0-9_-])+)/g)].map((m) => m[1].replace(/\\(.)/g, '$1'));
let enSrc = 0;
for (const sel of nuevos) {
  for (const clase of new Set(clasesDe(sel))) {
    const r = spawnSync('git', ['grep', '--untracked', '-lwF', '--', clase], { encoding: 'utf8' });
    const archivos = r.stdout.split('\n').filter(Boolean);
    const deSrc = archivos.filter((a) => a.startsWith('src/'));
    if (deSrc.length) {
      enSrc++;
      console.log(`✗ ${clase} (${sel}) sale de ${deSrc.join(', ')}`);
    } else {
      console.log(`· aviso: ${clase} (${sel}) ${archivos.length ? `solo sale de ${archivos.join(', ')}` : 'no aparece en el repo'}`);
    }
  }
}
for (const sel of quitados) console.log(`− ${sel}`);
if (enSrc) {
  console.error(`MKIA-SELECTORES: ${enSrc} clase(s) nuevas en la hoja compartida salen de src/. Quítalas, usa las clases que ya existen o declara su peso.`);
  process.exit(1);
}
