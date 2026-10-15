/* Qué clic cuenta como `cta_click` y con qué servicio (D50, tanda A). Función pura: la usa src/scripts/track.ts y la
   prueba scripts/tanda-a.test.mjs. Cuenta los enlaces a /contacto/ (como siempre) y el ancla exacta #formulario de las
   páginas v2 y la portada, salvo en /contacto/, donde «Llenar el formulario» no es un botón de cotizar.
   El servicio sale primero del propio enlace (data-service o ?servicio=) y después de <main data-service>. */
export interface ClicCta {
  href: string;
  pagina: string;
  servicioEnlace: string;
  servicioPagina: string;
}

export function clicCta({ href, pagina, servicioEnlace, servicioPagina }: ClicCta): { servicio: string } | null {
  if (href.startsWith('/contacto/')) {
    const deUrl = new URL(href, 'https://elementoweb.com').searchParams.get('servicio') || '';
    return { servicio: deUrl || servicioEnlace };
  }
  if (href === '#formulario' && !pagina.startsWith('/contacto/')) return { servicio: servicioEnlace || servicioPagina };
  return null;
}
