/* Deja que node --test importe módulos de src/ que importan JSON sin `with { type: 'json' }` (como hace Vite), por
   ejemplo src/lib/site.ts. Se importa antes que el módulo: `await import('./lib/json-ts.mjs')` y luego un import()
   dinámico del .ts. */
import { register } from 'node:module';

register('data:text/javascript,' + encodeURIComponent(`
export async function load(url, context, next) {
  if (url.endsWith('.json')) return next(url, { ...context, importAttributes: { ...context.importAttributes, type: 'json' } });
  return next(url, context);
}`));
