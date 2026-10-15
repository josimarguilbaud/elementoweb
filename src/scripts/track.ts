/* Eventos de medición. No hace nada mientras no exista `gtag` (es decir, mientras
   `analytics.gaId` esté vacío en site.ts). Nunca se envían nombre, correo,
   teléfono, mensaje ni URLs con datos personales: solo ubicación y servicio.
   `service` es la CLAVE del servicio (src/data/formulario.json), p. ej. `ecommerce` (D9): la toma del enlace
   (/contacto/?servicio=…), de lo que informa el formulario o de <main data-service> en las páginas con servicio. */
import { clicCta } from '../lib/clic-cta';

type Params = Record<string, string | number>;
const send = (name: string, params: Params = {}) => {
  const g = (window as any).gtag;
  if (typeof g === 'function') g('event', name, { page_path: location.pathname, ...params });
};

const where = (el: Element) => el.closest('[data-cta-loc]')?.getAttribute('data-cta-loc')
  || (el.closest('header') ? 'header' : el.closest('footer') ? 'footer' : el.closest('main') ? 'main' : 'other');

/** Servicio de la página, si la plantilla nueva lo declaró; las páginas actuales no lo tienen y sus eventos no cambian. */
const servicioDePagina = () => document.querySelector('main')?.getAttribute('data-service') || '';
const conServicio = (servicio: string | undefined, extra: Params = {}): Params => {
  const s = servicio || servicioDePagina();
  return s ? { service: s, ...extra } : extra;
};

document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null;
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) send('click_whatsapp', conServicio(undefined, { location: where(a) }));
  else if (href.startsWith('tel:')) send('click_phone', { location: where(a) });
  else if (href.startsWith('mailto:')) send('click_email', { location: where(a) });
  else {
    // Botones de cotizar: enlaces a /contacto/ y el ancla #formulario de las páginas v2 y la portada (D50).
    const cta = clicCta({ href, pagina: location.pathname, servicioEnlace: a.dataset.service || '', servicioPagina: servicioDePagina() });
    if (cta) send('cta_click', { location: where(a), ...(cta.servicio ? { service: cta.servicio } : {}) });
  }
});

window.addEventListener('cf:start', (e) => send('form_start', conServicio((e as CustomEvent).detail?.servicio, { form: 'contacto' })));
window.addEventListener('cf:error', (e) => send('form_error', conServicio((e as CustomEvent).detail?.servicio, { form: 'contacto', fields: ((e as CustomEvent).detail?.fields || []).join(',') })));
// generate_lead solo tras aceptación del backend; el id es opaco (uuid por intento)
window.addEventListener('cf:lead', (e) => {
  const d = (e as CustomEvent).detail || {};
  send('generate_lead', { form: 'contacto', service: d.servicio || servicioDePagina(), lead_id: d.id || '' });
});

if (location.pathname.startsWith('/precios')) send('pricing_view');
// vista de un caso de éxito individual (no del hub): el parámetro es el slug del caso
const caso = location.pathname.match(/^\/casos-de-exito\/([^/]+)\/?$/);
if (caso) send('case_study_view', { case_slug: caso[1] });
