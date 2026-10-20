/* Paneles apilados de Servicios en la portada (D53), como el prototipo que aprobó el dueño: la pila se fija al llegar a la
   sección y cada panel entra desde abajo y tapa al anterior, que se encoge, sube y se oscurece con un velo; el H3 entra
   desde 0,72 y las palabras del texto se revelan. Lo carga index.astro con import(), así que no pesa en el JS inicial.
   Sin este módulo (sin JS, con «reducir movimiento» o con menos de 560 px de alto) los paneles quedan como lista. */
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

/** Parte el texto de cada [data-revelar] en palabras, sin innerHTML: el texto completo sigue en el DOM. */
function enPalabras(raiz: HTMLElement) {
  for (const p of raiz.querySelectorAll<HTMLElement>('[data-revelar]')) {
    if (p.dataset.revelado) continue;
    p.dataset.revelado = '1';
    const palabras = (p.textContent ?? '').trim().split(/\s+/);
    p.textContent = '';
    palabras.forEach((w, i) => {
      const s = document.createElement('span');
      s.className = 'pv2-palabra';
      s.textContent = w;
      p.append(s);
      if (i < palabras.length - 1) p.append(' ');
    });
  }
}

export function apilar(raiz: HTMLElement) {
  gsap.registerPlugin(ScrollTrigger);
  enPalabras(raiz);
  const mm = gsap.matchMedia();
  mm.add('(min-height: 560px) and (prefers-reduced-motion: no-preference)', () => {
    raiz.classList.add('pv2-anim');
    const pila = raiz.querySelector<HTMLElement>('.pv2-pila')!;
    const paneles = gsap.utils.toArray<HTMLElement>('.pv2-panel', raiz);
    for (const p of paneles) if (!p.querySelector('.pv2-velo')) { const v = document.createElement('span'); v.className = 'pv2-velo'; v.setAttribute('aria-hidden', 'true'); p.append(v); }
    gsap.set(paneles.slice(1), { yPercent: 108 });

    // Las palabras se revelan desde --ew-muted (6,5:1 sobre blanco), no desde un gris claro: el texto sigue en AA (D53).
    const estilo = getComputedStyle(raiz);
    const desde = estilo.getPropertyValue('--ew-muted').trim() || '#4f5f75';
    const hasta = estilo.getPropertyValue('--ew-text').trim() || '#1c2230';
    const tope = parseFloat(estilo.getPropertyValue('--pv2-tope')) || 24;
    const palabras = (p: HTMLElement) => p.querySelectorAll('.pv2-palabra');

    const tl = gsap.timeline({
      defaults: { ease: 'none' },
      // 1,4 pantallas de desplazamiento por servicio: la entrada se alcanza a ver con la rueda.
      scrollTrigger: { trigger: pila, start: `top top+=${tope}`, end: () => `+=${innerHeight * (paneles.length - 1) * 1.4}`, pin: true, scrub: 0.8, anticipatePin: 1, invalidateOnRefresh: true },
    });
    tl.from(paneles[0].querySelector('h3'), { scale: 0.72, yPercent: 18, duration: 0.45 }, 0)
      .fromTo(palabras(paneles[0]), { color: desde }, { color: hasta, stagger: 0.025, duration: 0.2 }, 0)
      .addLabel('panel-0', 0);
    paneles.slice(1).forEach((p, i) => {
      const previo = paneles[i];
      const t = 1 + i;
      tl.to(p, { yPercent: 0, duration: 0.75, ease: 'power1.out' }, t)
        .to(previo, { scale: 0.88, y: -28, duration: 0.75 }, t)
        .to(previo.querySelector('.pv2-velo'), { opacity: 0.5, duration: 0.75 }, t)
        .from(p.querySelector('h3'), { scale: 0.72, yPercent: 18, duration: 0.55 }, t + 0.2)
        .fromTo(palabras(p), { color: desde }, { color: hasta, stagger: 0.025, duration: 0.2 }, t + 0.35)
        .addLabel(`panel-${i + 1}`, t + 0.75);
    });

    // Con teclado: al enfocar un enlace de un panel que todavía no entró, la página baja hasta ese panel. Si el salto cruza
    // el inicio de la pila, ScrollTrigger la fija y el navegador suelta el foco: se le devuelve sin volver a desplazar.
    // Solo se devuelve si el foco se perdió (quedó en <body>) y al último enlace enfocado: con Tabs rápidos el foco ya pasó
    // al siguiente, y devolverlo al anterior lo haría retroceder en bucle (lo encontró qa-a11y en CI).
    let ultimo: HTMLElement | null = null;
    const alEnfocar = (e: FocusEvent) => {
      const destino = e.target as HTMLElement;
      ultimo = destino;
      const i = paneles.findIndex((p) => p.contains(destino));
      const st = tl.scrollTrigger;
      if (i < 0 || !st) return;
      const y = st.labelToScroll(`panel-${i}`);
      if (Math.abs(scrollY - y) <= 4) return;
      scrollTo({ top: y, behavior: 'auto' });
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const activo = document.activeElement;
        if (ultimo === destino && (!activo || activo === document.body)) destino.focus({ preventScroll: true });
      }));
    };
    raiz.addEventListener('focusin', alEnfocar);
    return () => { raiz.classList.remove('pv2-anim'); raiz.removeEventListener('focusin', alEnfocar); };
  });
}
