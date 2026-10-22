/* Movimiento de la luz (y del centro de su máscara radial) del texto «linterna» (D58, src/components/SpotlightText.astro).
   Ratón: la luz sigue al cursor con un lerp dentro de requestAnimationFrame y se enciende o apaga con suavidad al entrar
   o salir. El bucle solo corre mientras la luz no llegó a su destino: quieta, no se recalcula el filtro.
   Táctil (sin hover): la luz recorre el texto sola mientras la franja está a la vista.
   «Reducir movimiento» o data-mov-off: una luz fija y tenue, sin bucle. */
const INTENSIDAD = 0.6;
const SEGUIR = 0.14;
const ENCENDER = 0.08;

export function montar(raiz: HTMLElement) {
  const svg = raiz.querySelector('svg');
  const luz = raiz.querySelector('fePointLight');
  const especular = raiz.querySelector('feSpecularLighting');
  const foco = raiz.querySelector('.ew-spot__foco');
  if (!svg || !luz || !especular || !foco) return;
  const { width: w, height: h } = svg.viewBox.baseVal;

  let x = w / 2, y = h / 2, k = 0;
  let tx = x, ty = y, tk = 0;
  let raf = 0, visible = true;
  const pintar = () => {
    luz.setAttribute('x', x.toFixed(1));
    luz.setAttribute('y', y.toFixed(1));
    foco.setAttribute('cx', x.toFixed(1));
    foco.setAttribute('cy', y.toFixed(1));
    especular.setAttribute('specularConstant', k.toFixed(3));
  };

  const quieto = matchMedia('(prefers-reduced-motion: reduce)').matches || document.documentElement.hasAttribute('data-mov-off');
  if (quieto) { x = w * 0.32; y = h * 0.45; k = INTENSIDAD * 0.5; pintar(); return; }

  const raton = matchMedia('(hover: hover) and (pointer: fine)').matches;
  const paso = (t: number) => {
    raf = 0;
    if (!raton) {
      const s = t / 1000;
      tx = w * (0.5 + 0.44 * Math.sin(s * 0.32));
      ty = h * (0.5 + 0.22 * Math.sin(s * 0.55));
      tk = INTENSIDAD * 0.8;
    }
    x += (tx - x) * SEGUIR;
    y += (ty - y) * SEGUIR;
    k += (tk - k) * ENCENDER;
    pintar();
    const llego = Math.abs(tx - x) < 0.5 && Math.abs(ty - y) < 0.5 && Math.abs(tk - k) < 0.004;
    if (visible && (!raton || !llego)) raf = requestAnimationFrame(paso);
  };
  const pedir = () => { if (!raf && visible) raf = requestAnimationFrame(paso); };

  if (raton) {
    raiz.addEventListener('pointermove', (e) => {
      const r = svg.getBoundingClientRect();
      tx = ((e.clientX - r.left) * w) / r.width;
      ty = ((e.clientY - r.top) * h) / r.height;
      // Apagada, la luz aparece donde está el cursor en vez de cruzar el texto desde el último punto.
      if (k < 0.02) { x = tx; y = ty; }
      tk = INTENSIDAD;
      pedir();
    });
    raiz.addEventListener('pointerleave', () => { tk = 0; pedir(); });
  }

  new IntersectionObserver(([e]) => {
    visible = e.isIntersecting;
    if (visible) pedir();
    else if (raf) { cancelAnimationFrame(raf); raf = 0; }
  }).observe(raiz);
  pedir();
}
