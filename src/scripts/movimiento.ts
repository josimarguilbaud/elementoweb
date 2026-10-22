/* Movimiento de la portada v3 (D56). Dos niveles:
   1. CSS (portada.css): la entrada del héroe y los revelados por sección con animation-timeline: view(). No necesitan
      JavaScript y nunca bajan la opacidad del texto.
   2. GSAP con ScrollTrigger, pedidos con import() en la PRIMERA INTERACCIÓN REAL del visitante (rueda, toque, clic o
      tecla). Nunca en la carga ni en el tiempo libre: D53 se revirtió por pedirlo en el tiempo libre. El evento `scroll`
      no cuenta, porque la restauración del scroll y el salto a un ancla lo disparan durante la carga.
   Con «reducir movimiento», con data-mov-off en <html> o con MOVIMIENTO_ACTIVO en false no se llama a import(): la
   página queda completa y estática. Si el import() falla, igual. El estado queda en <html data-gsap="…"> para
   scripts/qa-movimiento.mjs.
   Efectos (data-efecto en elementos con data-mov="gsap"): trazo (diagrama de IA), armar (maquetas del bento), lineas
   (titulares de sección) y parallax (escultura del héroe, ligado al scroll; nunca oculta contenido). */

/** Interruptor de emergencia: en false apaga todo el movimiento de GSAP sin tocar menú, pie ni contenido (paso 0 de la
    reversión de D56). Para apagar también el CSS, poner data-mov-off en <html>. */
export const MOVIMIENTO_ACTIVO = true;

const EVENTOS = ['wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
type Gsap = typeof import('gsap')['gsap'];
type ST = typeof import('gsap/ScrollTrigger')['ScrollTrigger'];

export function iniciar(): void {
  const html = document.documentElement;
  if (!MOVIMIENTO_ACTIVO || html.hasAttribute('data-mov-off') || matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const cargar = () => {
    for (const e of EVENTOS) removeEventListener(e, cargar);
    html.dataset.gsap = 'cargando';
    Promise.all([import('gsap'), import('gsap/ScrollTrigger')])
      .then(([{ gsap }, { ScrollTrigger }]) => {
        gsap.registerPlugin(ScrollTrigger);
        // Se leen las posiciones en el cuadro siguiente, para no preparar elementos que el visitante ya está viendo.
        requestAnimationFrame(() => { montar(gsap, ScrollTrigger); html.dataset.gsap = 'listo'; });
      })
      .catch(() => { html.dataset.gsap = 'fallo'; });
  };
  for (const e of EVENTOS) addEventListener(e, cargar, { passive: true });
}

/** Un revelado que parte oculto o desarmado solo se prepara si está a más de una pantalla por debajo del borde inferior:
    así un desplazamiento rápido no lo esconde cuando ya entró a la vista. */
const lejos = (el: Element) => el.getBoundingClientRect().top > innerHeight * 2;

function montar(gsap: Gsap, ScrollTrigger: ST): void {
  const ancho = matchMedia('(min-width: 768px)').matches;
  for (const el of document.querySelectorAll<HTMLElement>('[data-mov="gsap"]')) {
    const efecto = el.dataset.efecto;
    if (efecto === 'parallax') {
      if (ancho) gsap.to(el, { yPercent: -8, ease: 'none', scrollTrigger: { trigger: el, start: 'top top', end: 'bottom top', scrub: true } });
      continue;
    }
    if (!lejos(el)) continue;
    if (efecto === 'trazo') trazo(gsap, el);
    else if (efecto === 'armar') armar(gsap, el);
    else if (efecto === 'lineas' && ancho) lineas(gsap, el);
  }
  ScrollTrigger.refresh();
}

/** Diagrama de IA: las líneas entre pasos se dibujan y los pasos aparecen en orden. */
function trazo(gsap: Gsap, el: HTMLElement): void {
  const lineasSvg = el.querySelectorAll<SVGPathElement | SVGLineElement>('.pv3-trazo');
  const nodos = el.querySelectorAll('.pv3-nodo');
  for (const l of lineasSvg) { const n = (l as SVGGeometryElement).getTotalLength(); gsap.set(l, { strokeDasharray: n, strokeDashoffset: n }); }
  gsap.set(nodos, { opacity: 0, scale: 0.92, transformOrigin: '50% 50%' });
  gsap.timeline({ scrollTrigger: { trigger: el, start: 'top 75%', once: true } })
    .to(nodos[0] ?? [], { opacity: 1, scale: 1, duration: 0.35, ease: 'power2.out' })
    .to(lineasSvg, { strokeDashoffset: 0, duration: 0.5, stagger: 0.35, ease: 'power1.inOut' }, '<0.15')
    .to([...nodos].slice(1), { opacity: 1, scale: 1, duration: 0.35, stagger: 0.35, ease: 'power2.out' }, '<0.25');
}

/** Maquetas del bento: sus piezas entran una tras otra. Son decorativas (aria-hidden), no llevan texto que se lea. */
function armar(gsap: Gsap, el: HTMLElement): void {
  const piezas = el.querySelectorAll('[data-pieza]');
  gsap.from(piezas, { y: 14, opacity: 0, duration: 0.45, stagger: 0.08, ease: 'power2.out', scrollTrigger: { trigger: el, start: 'top 80%', once: true } });
}

/** Titular por líneas: el texto completo queda en un span visualmente oculto y los fragmentos van con aria-hidden. Al
    terminar se devuelve el marcado original, así un cambio de tamaño de la ventana no deja líneas mal cortadas. */
function lineas(gsap: Gsap, el: HTMLElement): void {
  const original = el.innerHTML;
  const esc = (t: string) => t.replace(/&/g, '&amp;').replace(/</g, '&lt;');
  const texto = esc(el.textContent ?? '');
  const palabras = texto.trim().split(/\s+/);
  el.innerHTML = palabras.map((p) => `<span class="pv3-palabra">${p}</span>`).join(' ');
  const grupos: string[][] = [];
  let top = -1;
  for (const s of el.querySelectorAll<HTMLElement>('.pv3-palabra')) {
    if (s.offsetTop !== top) { grupos.push([]); top = s.offsetTop; }
    grupos[grupos.length - 1].push(s.textContent ?? '');
  }
  el.innerHTML = `<span class="pv3-sr">${texto}</span>` + grupos.map((g) => `<span class="pv3-linea" aria-hidden="true"><span>${g.join(' ')}</span></span>`).join('');
  gsap.from(el.querySelectorAll('.pv3-linea > span'), {
    yPercent: 105, duration: 0.6, stagger: 0.08, ease: 'power3.out',
    scrollTrigger: { trigger: el, start: 'top 85%', once: true },
    onComplete: () => { el.innerHTML = original; },
  });
}
