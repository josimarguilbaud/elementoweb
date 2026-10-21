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

/* Qué evento manda un clic, uno solo y en este orden: WhatsApp, teléfono, correo, `cta_click` y, al final,
   `select_content` para un enlace con data-content-id (las filas de la vitrina de Marketing, D54). */
export interface Clic extends ClicCta {
  contentId: string;
  contentType: string;
}
export type EventoClic =
  | { nombre: 'click_whatsapp' | 'click_phone' | 'click_email' }
  | { nombre: 'cta_click'; servicio: string }
  | { nombre: 'select_content'; contentType: string; contentId: string };

export function clasificarClic(c: Clic): EventoClic | null {
  if (c.href.includes('wa.me') || c.href.includes('api.whatsapp.com')) return { nombre: 'click_whatsapp' };
  if (c.href.startsWith('tel:')) return { nombre: 'click_phone' };
  if (c.href.startsWith('mailto:')) return { nombre: 'click_email' };
  const cta = clicCta(c);
  if (cta) return { nombre: 'cta_click', servicio: cta.servicio };
  if (c.contentId) return { nombre: 'select_content', contentType: c.contentType || 'servicio', contentId: c.contentId };
  return null;
}
