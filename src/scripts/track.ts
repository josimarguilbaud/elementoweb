/* Eventos de medición. No hace nada mientras no exista `gtag` (es decir, mientras
   `analytics.gaId` esté vacío en site.ts). Nunca se envían nombre, correo,
   teléfono, mensaje ni URLs con datos personales: solo ubicación y servicio. */
type Params = Record<string, string | number>;
const send = (name: string, params: Params = {}) => {
  const g = (window as any).gtag;
  if (typeof g === 'function') g('event', name, { page_path: location.pathname, ...params });
};

const where = (el: Element) => el.closest('[data-cta-loc]')?.getAttribute('data-cta-loc')
  || (el.closest('header') ? 'header' : el.closest('footer') ? 'footer' : el.closest('main') ? 'main' : 'other');

document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest('a') as HTMLAnchorElement | null;
  if (!a) return;
  const href = a.getAttribute('href') || '';
  if (href.includes('wa.me') || href.includes('api.whatsapp.com')) send('click_whatsapp', { location: where(a) });
  else if (href.startsWith('tel:')) send('click_phone', { location: where(a) });
  else if (href.startsWith('mailto:')) send('click_email', { location: where(a) });
  else if (href.startsWith('/contacto/')) {
    const servicio = new URL(a.href, location.origin).searchParams.get('servicio') || '';
    send('cta_click', { location: where(a), ...(servicio ? { service: servicio } : {}) });
  }
});

window.addEventListener('cf:start', () => send('form_start', { form: 'contacto' }));
window.addEventListener('cf:error', (e) => send('form_error', { form: 'contacto', fields: ((e as CustomEvent).detail?.fields || []).join(',') }));
// generate_lead solo tras aceptación del backend; el id es opaco (uuid por intento)
window.addEventListener('cf:lead', (e) => {
  const d = (e as CustomEvent).detail || {};
  send('generate_lead', { form: 'contacto', service: d.servicio || '', lead_id: d.id || '' });
});

if (location.pathname.startsWith('/precios')) send('pricing_view');
