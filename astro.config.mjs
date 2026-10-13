import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://elementoweb.com',
  build: { format: 'directory' },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
    // dist-fixture/ es la salida de `npm run build:fixtures`: si el dev la vigila, cada archivo reescrito
    // dispara una recarga de rutas y el servidor cae en EMFILE (scripts/astro-config.test.mjs).
    server: { watch: { ignored: ['**/dist-fixture/**'] } },
  },
});
