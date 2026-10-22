/* Movimiento de la marca «linterna» (D58, src/components/SpotlightText.astro), como el wordmark de resend.com.
   Ratón: al entrar, la capa de luz aparece (transición de opacidad en CSS) y el centro de los degradados sigue al
   cursor con un lerp dentro de requestAnimationFrame; los contornos de aberración se separan con la velocidad. El
   bucle corre solo mientras algo se mueve: quieto, no se recalcula nada.
   Táctil (sin hover): la luz recorre la forma sola mientras la franja está a la vista.
   «Reducir movimiento» o data-mov-off: no se monta; queda la forma tenue. */
const SEGUIR = 0.18;
const ABERRACION = 0.5;

export function montar(raiz: HTMLElement) {
  if (matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.hasAttribute('data-mov-off')) return;
  const svg = raiz.querySelector<SVGSVGElement>('.ew-spot__luz');
  if (!svg) return;
  const centros = svg.querySelectorAll('radialGradient');
  const aberracion = svg.querySelectorAll('.ew-spot__aberracion use');
  const vb = svg.viewBox.baseVal;

  let x = vb.x + vb.width / 2, y = vb.y + vb.height / 2, tx = x, ty = y;
  let raf = 0, visible = true;
  const pintar = (vx: number, vy: number) => {
    for (const g of centros) { g.setAttribute('cx', x.toFixed(2)); g.setAttribute('cy', y.toFixed(2)); }
    const v = Math.min(Math.hypot(vx, vy), 8);
    const dx = (vx * ABERRACION).toFixed(2), dy = (vy * ABERRACION).toFixed(2);
    const ancho = (v * 0.08).toFixed(2);
    aberracion.forEach((u, i) => {
      u.setAttribute('stroke-width', ancho);
      u.setAttribute('transform', i === 0 ? `translate(${dx} ${dy})` : i === 1 ? `translate(${-dx} ${-dy})` : 'translate(0 0)');
    });
  };

  const raton = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const paso = (t: number) => {
    raf = 0;
    if (!raton) {
      const s = t / 1000;
      tx = vb.x + vb.width * (0.5 + 0.46 * Math.sin(s * 0.35));
      ty = vb.y + vb.height * (0.5 + 0.3 * Math.sin(s * 0.9));
    }
    const vx = (tx - x) * SEGUIR, vy = (ty - y) * SEGUIR;
    x += vx; y += vy;
    const llego = Math.abs(tx - x) < 0.05 && Math.abs(ty - y) < 0.05;
    pintar(llego ? 0 : vx, llego ? 0 : vy);
    if (visible && (!raton || !llego)) raf = requestAnimationFrame(paso);
  };
  const pedir = () => { if (!raf && visible) raf = requestAnimationFrame(paso); };

  if (raton) {
    raiz.addEventListener('pointermove', (e) => {
      const r = svg.getBoundingClientRect();
      tx = vb.x + ((e.clientX - r.left) * vb.width) / r.width;
      ty = vb.y + ((e.clientY - r.top) * vb.height) / r.height;
      if (!raiz.classList.contains('is-on')) { x = tx; y = ty; raiz.classList.add('is-on'); }
      pedir();
    });
    raiz.addEventListener('pointerleave', () => raiz.classList.remove('is-on'));
  } else {
    raiz.classList.add('is-on');
  }

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) pedir();
    else if (raf) { cancelAnimationFrame(raf); raf = 0; }
  }).observe(raiz);
  pedir();
}
