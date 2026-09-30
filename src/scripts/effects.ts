import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
const fine = matchMedia('(hover:hover) and (pointer:fine)').matches;

/* ---- Lenis smooth scroll enganchado a GSAP ---- */
// Smooth scroll solo con puntero fino y sin reduced-motion; en táctil el scroll es nativo.
// lerp 0.1 arrastraba ~0.6 s tras soltar la rueda: se sentía como retraso. 0.2 sigue suave pero responde al instante.
const lenis = new Lenis({ wheelMultiplier: 1, lerp: 0.2, smoothWheel: fine && !reduce });
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((t) => lenis.raf(t * 1000));
gsap.ticker.lagSmoothing(0);
// expuesto para navegación por anclas
(window as any).__lenis = lenis;

/* Scroll suave a anclas del mismo documento */
document.addEventListener('click', (e) => {
  const a = (e.target as HTMLElement).closest('a[href^="#"]') as HTMLAnchorElement | null;
  if (!a) return;
  const id = a.getAttribute('href');
  if (!id || id === '#') return;
  const el = document.querySelector(id);
  if (el) { e.preventDefault(); lenis.scrollTo(el as HTMLElement, { offset: -80 }); }
});

/* ---- Reveals fade-up por scroll ---- */
function initReveals() {
  const targets = gsap.utils.toArray<HTMLElement>('.reveal');
  if (!targets.length) return;
  if (reduce) { gsap.set(targets, { opacity: 1, y: 0 }); return; }
  gsap.set(targets, { opacity: 0, y: 18 });
  // Entra antes de llegar (98 % del viewport), rápido y con escalón corto: el contenido
  // no debe verse "en blanco" mientras el usuario ya está leyendo esa zona.
  ScrollTrigger.batch(targets, {
    start: 'top 98%',
    once: true,
    interval: 0.05,
    batchMax: 6,
    onEnter: (batch) => gsap.to(batch, { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out', stagger: 0.04, overwrite: true }),
  });
  // Las imágenes y fuentes cambian la altura de la página después de calcular los
  // disparadores; sin recalcular, bloques lejanos podían quedarse invisibles.
  const refresh = () => ScrollTrigger.refresh();
  addEventListener('load', refresh, { once: true });
  (document as any).fonts?.ready?.then(refresh);
}

/* ---- Botones magnéticos ([data-magnetic]) ---- */
function initMagnetic() {
  if (!fine || reduce) return;
  document.querySelectorAll<HTMLElement>('[data-magnetic]').forEach((el) => {
    const s = Number(el.dataset.magnetic || '0.35');
    const xTo = gsap.quickTo(el, 'x', { duration: 0.5, ease: 'power3.out' });
    const yTo = gsap.quickTo(el, 'y', { duration: 0.5, ease: 'power3.out' });
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      xTo((e.clientX - (r.left + r.width / 2)) * s);
      yTo((e.clientY - (r.top + r.height / 2)) * s);
    });
    el.addEventListener('mouseleave', () => { xTo(0); yTo(0); });
  });
}

/* ---- Tilt 3D ([data-tilt]) ---- */
function initTilt() {
  if (!fine || reduce) return;
  document.querySelectorAll<HTMLElement>('[data-tilt]').forEach((el) => {
    const max = Number(el.dataset.tilt || '7');
    el.style.transition = 'transform .35s ease-out';
    el.addEventListener('mousemove', (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `perspective(900px) rotateX(${(-py * max).toFixed(2)}deg) rotateY(${(px * max).toFixed(2)}deg)`;
    });
    el.addEventListener('mouseleave', () => { el.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)'; });
  });
}

/* ---- Contadores ([data-count]) ---- */
function initCounters() {
  document.querySelectorAll<HTMLElement>('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count || '0');
    const pre = el.dataset.prefix || '', suf = el.dataset.suffix || '';
    if (reduce) { el.textContent = pre + end + suf; return; }
    ScrollTrigger.create({
      trigger: el, start: 'top 85%', once: true,
      onEnter: () => {
        const obj = { v: 0 };
        gsap.to(obj, { v: end, duration: 1, ease: 'power2.out', onUpdate: () => { el.textContent = pre + Math.round(obj.v) + suf; } });
      },
    });
  });
}

/* ---- Cursor personalizado ---- */
function initCursor() {
  const ring = document.querySelector<HTMLElement>('.cursor-ring');
  const dot = document.querySelector<HTMLElement>('.cursor-dot');
  if (!ring || !dot || !fine || reduce) return;
  let mx = innerWidth / 2, my = innerHeight / 2, rx = mx, ry = my;
  addEventListener('mousemove', (e) => { mx = e.clientX; my = e.clientY; dot.style.transform = `translate(${mx}px,${my}px)`; kick(); }, { passive: true });
  let running = false;
  const loop = () => {
    rx += (mx - rx) * 0.25; ry += (my - ry) * 0.25;
    ring.style.transform = `translate(${rx}px,${ry}px)`;
    if (Math.abs(mx - rx) + Math.abs(my - ry) > 0.3) requestAnimationFrame(loop); else running = false;
  };
  const kick = () => { if (!running) { running = true; requestAnimationFrame(loop); } };
  const bind = () => document.querySelectorAll('a, button, input, select, textarea, summary, [data-cursor]').forEach((el) => {
    el.addEventListener('mouseenter', () => ring.classList.add('grow'));
    el.addEventListener('mouseleave', () => ring.classList.remove('grow'));
  });
  bind();
  new MutationObserver(bind).observe(document.body, { childList: true, subtree: true });
}

function initAll() { initReveals(); initMagnetic(); initTilt(); initCounters(); initCursor(); }

if (document.readyState !== 'loading') initAll();
else document.addEventListener('DOMContentLoaded', initAll);
