import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';
import { existsSync, readFileSync } from 'node:fs';

/* lastmod del sitemap: solo donde hay una fecha real de revisión (hoy, el blog, por su article:modified_time). Una
   fecha inventada para el resto enseña a Google a ignorarla. Se lee del HTML ya construido porque la configuración
   también la carga Node a secas (scripts/astro-config.test.mjs) y ahí no se pueden importar las páginas en TS. */
const SALIDA = process.argv.includes('--outDir') ? process.argv[process.argv.indexOf('--outDir') + 1] : 'dist';
function lastmod(url) {
  const f = `${SALIDA}${new URL(url).pathname}index.html`;
  if (!existsSync(f)) return null;
  return readFileSync(f, 'utf8').match(/<meta property="article:modified_time" content="(\d{4}-\d{2}-\d{2})"/)?.[1] ?? null;
}

export default defineConfig({
  site: 'https://elementoweb.com',
  build: { format: 'directory' },
  integrations: [sitemap({ serialize: (item) => { const d = lastmod(item.url); return d ? { ...item, lastmod: `${d}T12:00:00.000Z` } : item; } })],
  vite: {
    plugins: [tailwindcss()],
    // dist-fixture/ es la salida de `npm run build:fixtures`: si el dev la vigila, cada archivo reescrito
    // dispara una recarga de rutas y el servidor cae en EMFILE (scripts/astro-config.test.mjs).
    server: { watch: { ignored: ['**/dist-fixture/**'] } },
  },
});
