/* Las pruebas con navegador no le mandan nada a Google Analytics (D54). Base.astro define gtag() y la cola dataLayer de
   inmediato y baja gtag.js después del load; sin este bloqueo, cada `npm run verify` (en local y en CI) sumaba a GA4
   visitas y eventos de localhost a los mismos números que lee la regla de decisión de D54. gtag() y dataLayer siguen
   ahí, así que las pruebas leen los eventos de la cola (como los `arguments` de gtag: a[0] === 'event'). */
export const GA = /^https?:\/\/([^/]+\.)?(googletagmanager\.com|google-analytics\.com|analytics\.google\.com)\//;

/** Aborta toda petición a Google Analytics en el contexto y cuenta las abortadas. */
export async function sinGa(ctx) {
  const cuenta = { abortadas: 0 };
  await ctx.route(GA, (r) => { cuenta.abortadas++; return r.abort(); });
  return cuenta;
}

/** Un contexto nuevo del navegador con Google Analytics bloqueado. */
export async function contextoSinGa(navegador, opciones) {
  const ctx = await navegador.newContext(opciones);
  ctx.ga = await sinGa(ctx);
  return ctx;
}
