// page.js — comportamientos comunes de las landings de Kredit (vista previa Elemento Web).
// - Mide la banda de vista previa y el encabezado (variables CSS --band-h / --header-h).
// - WhatsApp: los enlaces llevan data-whatsapp="507…". Con <html data-demo="true"> NO se abre
//   ningún chat real: se muestra un aviso. Con data-demo="false" abren wa.me con el texto.
// - Enlaces por conectar (data-placeholder-link) muestran un aviso en vez de navegar.
// - Barra de acción fija en móvil: visible cuando el formulario no está en pantalla.

const root = document.documentElement;
const band = document.querySelector('[data-demo-band]');
const header = document.querySelector('[data-header]');

function syncHeights() {
  if (band) root.style.setProperty('--band-h', band.offsetHeight + 'px');
  if (header) root.style.setProperty('--header-h', header.offsetHeight + 'px');
}
syncHeights();
if ('ResizeObserver' in window) {
  const ro = new ResizeObserver(syncHeights);
  if (band) ro.observe(band);
  if (header) ro.observe(header);
}

/* ---------- aviso flotante ---------- */
const toastEl = document.querySelector('[data-toast]');
let toastTimer = 0;
export function toast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.hidden = false;
  toastEl.classList.add('is-on');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove('is-on');
    toastTimer = setTimeout(() => { toastEl.hidden = true; }, 250);
  }, 4200);
}

function prettyPhone(num) {
  const d = String(num).replace(/\D/g, '');
  const local = d.startsWith('507') ? d.slice(3) : d;
  return local.length === 8 ? `+507 ${local.slice(0, 4)}-${local.slice(4)}` : '+' + d;
}

document.addEventListener('click', (e) => {
  const wa = e.target.closest('[data-whatsapp]');
  if (wa) {
    const num = (wa.dataset.whatsapp || '').replace(/\D/g, '');
    const demo = root.dataset.demo !== 'false';
    if (!num || demo) {
      e.preventDefault();
      toast(num
        ? `Modo demo: aquí se abriría WhatsApp con Kredit (${prettyPhone(num)}). No se inició ningún chat.`
        : 'Número de WhatsApp por confirmar con Kredit.');
      return;
    }
    e.preventDefault();
    const text = wa.dataset.waText ? `?text=${encodeURIComponent(wa.dataset.waText)}` : '';
    window.open(`https://wa.me/${num}${text}`, '_blank', 'noopener');
    return;
  }
  const ph = e.target.closest('[data-placeholder-link]');
  if (ph) {
    e.preventDefault();
    toast(ph.dataset.placeholderLink || 'Enlace por confirmar con Kredit.');
  }
});

/* ---------- encabezado con sombra al desplazarse ---------- */
const onScroll = () => { if (header) header.classList.toggle('is-scrolled', window.scrollY > 8); };
window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

/* ---------- barra fija en móvil ---------- */
const sticky = document.querySelector('[data-sticky-cta]');
if (sticky && 'IntersectionObserver' in window) {
  const hideWhen = [...document.querySelectorAll('[data-sticky-hide]')];
  const visible = new Set();
  const update = () => {
    const show = visible.size === 0 && window.scrollY > 240;
    sticky.classList.toggle('is-on', show);
    document.body.classList.toggle('sticky-on', show);
    sticky.setAttribute('aria-hidden', String(!show));
    sticky.querySelectorAll('a, button').forEach((el) => { el.tabIndex = show ? 0 : -1; });
  };
  const io = new IntersectionObserver((entries) => {
    entries.forEach((en) => (en.isIntersecting ? visible.add(en.target) : visible.delete(en.target)));
    update();
  }, { threshold: 0.12 });
  hideWhen.forEach((el) => io.observe(el));
  window.addEventListener('scroll', update, { passive: true });
  update();
}

/* ---------- WhatsApp flotante: no tapar el formulario en pantallas angostas ---------- */
const formCard = document.querySelector('[data-form-card]');
if (formCard && 'IntersectionObserver' in window) {
  new IntersectionObserver(([en]) => document.body.classList.toggle('form-visible', en.isIntersecting), { threshold: 0.05 }).observe(formCard);
}

/* ---------- año del pie ---------- */
document.querySelectorAll('[data-year]').forEach((el) => { el.textContent = String(new Date().getFullYear()); });
