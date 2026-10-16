/* Captura la primera pantalla en celular (500x1083, misma proporción que 390x844) de proyectos publicados del portafolio, para las maquetas de
   «Así se vería» de diseño web (D44). Solo lectura: abre el sitio público con Chrome sin cabeza y guarda la vista.
     node scripts/capturas-movil.mjs <clave> <url> [<clave> <url> ...]
   Escribe public/images/ejemplos/movil-<clave>.webp (390x844) y un .png temporal que borra al terminar.
     node scripts/capturas-movil.mjs --fuente <clave> <url>
   Con --fuente captura a DPR 3 y guarda solo la fuente public/images/ejemplos/movil-<clave>.jpg (1170 px de ancho), de la
   que scripts/optimize-images.mjs saca las variantes recortadas (la captura de celular del héroe de la portada v2). */
import { spawnSync } from 'node:child_process';
import { mkdirSync, rmSync, existsSync, statSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { tmpdir } from 'node:os';
import sharp from 'sharp';
import { rutaChrome } from './chrome.mjs';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const SALIDA = join(RAIZ, 'public/images/ejemplos');
const chrome = rutaChrome();
if (!chrome) { console.error('No se encontró Chrome. Define CHROMIUM_PATH.'); process.exit(1); }
mkdirSync(SALIDA, { recursive: true });

const fuente = process.argv.includes('--fuente');
const args = process.argv.slice(2).filter((a) => a !== '--fuente');
if (!args.length || args.length % 2) { console.error('Uso: node scripts/capturas-movil.mjs <clave> <url> [...]'); process.exit(2); }
for (let i = 0; i < args.length; i += 2) {
  const [clave, url] = [args[i], args[i + 1]];
  const png = join(tmpdir(), `movil-${clave}-${Date.now()}.png`);
  const perfil = join(tmpdir(), `movil-perfil-${Date.now()}`);
  spawnSync(chrome, ['--headless=new', '--disable-gpu', '--hide-scrollbars', '--no-first-run', `--user-data-dir=${perfil}`,
    // Chrome sin cabeza no baja de ~500 px de ancho: a 390 recorta la página por la derecha. 500x1083 tiene la misma
    // proporción que 390x844 y sigue por debajo del corte móvil de los sitios (640 px).
    '--window-size=500,1083', `--force-device-scale-factor=${fuente ? 3 : 2}`, '--virtual-time-budget=8000',
    '--user-agent=Mozilla/5.0 (Linux; Android 14; Pixel 8) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/130.0 Mobile Safari/537.36',
    `--screenshot=${png}`, url], { stdio: 'ignore', timeout: 60000 });
  rmSync(perfil, { recursive: true, force: true });
  if (!existsSync(png)) { console.error(`✗ ${clave}: no se pudo capturar ${url}`); continue; }
  const out = join(SALIDA, fuente ? `movil-${clave}.jpg` : `movil-${clave}.webp`);
  if (fuente) await sharp(png).resize(1170, 2532, { fit: 'cover', position: 'top' }).jpeg({ quality: 90, mozjpeg: true }).toFile(out);
  else await sharp(png).resize(390, 844, { fit: 'cover', position: 'top' }).webp({ quality: 78, effort: 6 }).toFile(out);
  rmSync(png, { force: true });
  console.log(`✓ ${clave}: ${out.replace(RAIZ, '')} ${Math.round(statSync(out).size / 1024)} KB`);
}
