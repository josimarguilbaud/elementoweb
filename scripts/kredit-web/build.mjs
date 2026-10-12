// build.mjs — arma la web multipágina de Kredit (vista previa de Elemento Web) desde partes comunes.
// Uso: node scripts/kredit-web/build.mjs
// Escribe public/demo/kredit-web/<página>/index.html (10 páginas). El HTML generado se comitea.
// Encabezado, pie, banda de demo y sprite son idénticos en todas; cada página vive en pages/*.mjs.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { FAQ } from './faq.mjs';

const HERE = path.dirname(fileURLToPath(import.meta.url));
const REPO = path.resolve(HERE, '..', '..');
const OUT = path.join(REPO, 'public', 'demo', 'kredit-web');
const V = '?v=20261012e';
const calc = await import(pathToFileURL(path.join(REPO, 'public', 'demo', 'kredit-landings', 'assets', 'calc.js')).href + V);

export const PAGES = [
  { slug: '', mod: 'inicio' },
  { slug: 'prestamos', mod: 'prestamos' },
  { slug: 'empresas', mod: 'empresas' },
  { slug: 'nosotros', mod: 'nosotros' },
  { slug: 'preguntas-frecuentes', mod: 'preguntas' },
  { slug: 'contacto', mod: 'contacto' },
  { slug: 'accede-a-tu-cuenta', mod: 'cuenta' },
  { slug: 'politica-de-privacidad', mod: 'privacidad' },
  { slug: 'aviso-legal', mod: 'aviso-legal' },
  { slug: 'politica-de-cookies', mod: 'cookies' },
];

const NAV = [
  ['prestamos', 'Préstamos'],
  ['empresas', 'Empresas'],
  ['nosotros', 'Nosotros'],
  ['preguntas-frecuentes', 'Preguntas'],
  ['contacto', 'Contacto'],
];

// Medidas reales de las variantes de 800 px (img/CREDITOS.json). portal-celular no se usa: salió con defectos.
const PHOTOS = {
  'colaboradora-oficina': 537, 'deposito-celular': 993, 'rrhh-reunion': 537, 'equipo-almacen': 537,
  'familia-metas': 537, 'estudiante-metas': 993, 'equipo-kredit': 537, 'atencion-cliente': 537,
  'firma-convenio': 537, 'comercio-colaborador': 537, 'ciudad-panama': 447,
};

const SPRITE = fs.readFileSync(path.join(HERE, 'parts', 'sprite.html'), 'utf8').trim();
// Íconos propios de la web (menú móvil), aparte del sprite copiado de la landing.
const SPRITE_WEB = `<svg class="sprite" aria-hidden="true" focusable="false">
  <symbol id="i-menu" viewBox="0 0 24 24"><path d="M4 7h16M4 12h16M4 17h16"/></symbol>
  <symbol id="i-x" viewBox="0 0 24 24"><path d="M6 6l12 12M18 6L6 18"/></symbol>
  <symbol id="i-ext" viewBox="0 0 24 24"><path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/></symbol>
</svg>`;

export const PORTAL = 'https://kredit.com.pa/app/';
const WA = '50769975664';

/* ------------------------------------------------------------------ ayudas por página */
function helpers(slug) {
  const r = slug ? '../' : '';
  const home = slug ? '../' : './';
  const link = (p) => (p ? `${r}${p}/` : home);
  const ic = (id, cls = '') => `<svg class="ic${cls ? ' ' + cls : ''}" aria-hidden="true"><use href="#i-${id}"/></svg>`;
  const landing = {
    prestamos: `${r}../kredit-landings/prestamos/#solicitud`,
    empresas: `${r}../kredit-landings/empresas/#afiliacion`,
  };
  const photo = (name, alt, { ratio = 'wide', sizes = '(max-width: 860px) 92vw, 600px', cls = '' } = {}) => {
    const h = PHOTOS[name];
    if (!h) throw new Error('foto desconocida: ' + name);
    return `<figure class="photo photo--${ratio}${cls ? ' ' + cls : ''}">
          <img src="${r}img/${name}-800.webp" srcset="${r}img/${name}-800.webp 800w, ${r}img/${name}-1600.webp 1600w" sizes="${sizes}" width="800" height="${h}" alt="${alt}" loading="lazy" decoding="async">
          <figcaption class="photo__tag">Imagen ilustrativa generada con IA</figcaption>
        </figure>`;
  };
  const wa = (text, cls, inner, label = '') => `<a${cls ? ` class="${cls}"` : ''} href="#" data-whatsapp="${WA}" data-wa-text="${text}"${label ? ` aria-label="${label}"` : ''}>${inner}</a>`;
  const seal = (cls = '') => `<p class="seal${cls ? ' ' + cls : ''}">${ic('shield')}<span>Empresa financiera autorizada por el MICI<br><strong>Resolución No. 638 · 23 sep 2025</strong></span></p>`;
  const faqBlock = (ids) => {
    const all = FAQ.flatMap((c) => c.items);
    const items = ids.map((id) => { const it = all.find((x) => x.id === id); if (!it) throw new Error('pregunta desconocida: ' + id); return it; });
    return faqHtml(items, r, landing);
  };
  const ex = (monto, tasa, meses) => calc.escenario(monto, tasa, meses);
  const money = (x) => calc.formatMoney(x);
  const kGhost = '<svg class="k-ghost" viewBox="0 0 29.4 38.6" aria-hidden="true"><use href="#logo-k"/></svg>';

  /** Hero corto de las páginas internas: plano navy con el corte diagonal de la «K». */
  const pageHero = ({ crumb, title, lead, actions = '', aside = '', cls = '', meta = '' }) => `<section class="phero${cls ? ' ' + cls : ''}" aria-labelledby="page-title">
    <div class="wrap phero__grid${aside ? '' : ' phero__grid--solo'}">
      <div class="phero__copy">
        <nav class="crumbs" aria-label="Ruta de navegación"><a href="${home}">Inicio</a><span aria-hidden="true">/</span><span aria-current="page">${crumb}</span></nav>
        <h1 id="page-title">${title}</h1>
        <p class="phero__lead">${lead}</p>${meta ? `
        <p class="phero__meta">${meta}</p>` : ''}${actions ? `
        <div class="phero__actions">${actions}</div>` : ''}
      </div>${aside ? `
      <div class="phero__aside">${aside}</div>` : ''}
    </div>
  </section>`;

  /** Regla de quincenas: mismo marcado data-payline / data-pl que la landing de préstamos. */
  const paylineList = () => `<ol class="payline__list">
          <li class="is-today"><span class="payline__when" data-pl="hoy">Hoy</span><span class="payline__what">Solicitas desde tu celular</span></li>
          <li><span class="payline__when" data-pl="revision">El día de la aprobación</span><span class="payline__what">Recibes el depósito ese mismo día</span></li>
          <li class="is-pay"><span class="payline__when" data-pl="q1">Primera quincena · ejemplo</span><span class="payline__what">Primera cuota, descontada de tu planilla</span></li>
          <li class="is-pay"><span class="payline__when" data-pl="q2">Siguiente quincena</span><span class="payline__what">La misma cuota, sin sorpresas</span></li>
        </ol>
        <p class="payline__note" data-pl="nota">El desembolso es el mismo día de la aprobación; la aprobación depende de la evaluación. Las fechas de descuento las define tu empresa (ejemplo: quincenas del 15 y del último día del mes).</p>`;

  const ctaFinal = ({ title, text, actions }) => `<section class="cta-final" aria-labelledby="cta-title" data-sticky-hide>
    ${kGhost}
    <div class="wrap">
      <h2 class="cta-final__title" id="cta-title">${title}</h2>
      <p>${text}</p>
      <div class="cta-final__actions">${actions}</div>
    </div>
  </section>`;

  /** Maqueta del portal de clientes: ejemplo coherente con la calculadora (B/. 1,000 · 12 meses · 18 %). */
  const acctMock = () => {
    const base = ex(1000, 18, 12);
    const r18 = 0.18 / 12;
    const saldo = 1000 * (1 + r18) ** 3 - base.cuota * (((1 + r18) ** 3 - 1) / r18); // tras 3 meses (6 quincenas)
    return `<figure class="acct">
          <div class="acct__top">
            <div><p class="acct__who">Mi cuenta Kredit</p><p class="acct__id mono">Cédula 8-***-*56</p></div>
            <span class="badge-demo">${ic('eye')}Ejemplo</span>
          </div>
          <p class="acct__label">Saldo pendiente</p>
          <p class="acct__balance mono">${money(saldo)}</p>
          <div class="acct__bar"><span></span></div>
          <p class="acct__progress mono">6 de 24 quincenas pagadas</p>
          <dl class="ledger acct__ledger">
            <div><dt>Crédito</dt><dd>${money(1000)} · 12 meses</dd></div>
            <div><dt>Próximo descuento</dt><dd>${money(base.quincena)}</dd></div>
            <div><dt>Pagos realizados</dt><dd>${money(base.quincena * 6)}</dd></div>
          </dl>
          <p class="acct__extra">${ic('refresh')}<span>¿Necesitas más? Solicita un crédito adicional desde el portal.</span></p>
          <figcaption class="acct__cap">Ejemplo ilustrativo del portal: no son datos reales.</figcaption>
        </figure>`;
  };

  /** Página legal: índice lateral (desplegable en móvil) + texto de lectura numerado. */
  const legalBody = ({ sections, before = '', after = '' }) => {
    const pad = (i) => String(i + 1).padStart(2, '0');
    return `<div class="wrap legal">
    <aside class="legal__aside">
      <details class="toc" data-toc>
        <summary>Contenido</summary>
        <p class="toc__label">Contenido</p>
        <ol>
          ${sections.map((s, i) => `<li><a href="#${s.id}"><span>${pad(i)}</span>${s.title}</a></li>`).join('\n          ')}
        </ol>
      </details>
    </aside>
    <article class="prose">
      ${before}
      ${sections.map((s, i) => `<h2 id="${s.id}"><span>${pad(i)}</span>${s.title}</h2>
      ${s.html.trim()}`).join('\n\n      ')}
      ${after}
    </article>
  </div>`;
  };

  return { slug, r, home, link, ic, landing, photo, wa, seal, faqBlock, ex, money, PORTAL, FAQ, faqHtml, kGhost, pageHero, paylineList, ctaFinal, calc, acctMock, legalBody };
}

export function faqHtml(items, r, landing) {
  return `<div class="faq">
${items.map((it) => `          <details id="faq-${it.id}">
            <summary>${it.q}</summary>
            <div class="answer">${it.a(r, landing)}</div>
          </details>`).join('\n')}
        </div>`;
}

/* ------------------------------------------------------------------ partes comunes */
function header(h, current) {
  const links = NAV.map(([p, label]) => `<a href="${h.link(p)}"${p === current ? ' aria-current="page"' : ''}>${label}</a>`).join('\n      ');
  const mlinks = NAV.map(([p, label]) => `<li><a class="mnav__link" href="${h.link(p)}"${p === current ? ' aria-current="page"' : ''}>${label}${h.ic('arrow-r')}</a></li>`).join('\n          ');
  const cuentaCur = current === 'accede-a-tu-cuenta' ? ' aria-current="page"' : '';
  return `<header class="site-header" data-header>
  <div class="wrap nav">
    <a class="logo logo--white" href="${h.home}" aria-label="Kredit, ir al inicio">
      <svg viewBox="0 0 144.9 38.6" width="145" height="39" aria-hidden="true" focusable="false"><use href="#logo-k" class="logo__k" width="29.4" height="38.6"/><use href="#logo-word" class="logo__word" width="144.9" height="38.6"/></svg>
    </a>
    <nav class="nav__links" aria-label="Principal">
      ${links}
    </nav>
    <div class="nav__actions">
      <a class="portal-link" href="${h.link('accede-a-tu-cuenta')}"${cuentaCur}>
        ${h.ic('login')}
        <span><small>¿Ya eres cliente?</small>Accede a tu cuenta</span>
      </a>
      <a class="btn btn--white btn--sm" href="${h.landing.prestamos}">Solicitar</a>
      <button class="menu-btn" type="button" aria-expanded="false" aria-controls="menu-movil" aria-label="Menú" data-menu-btn>${h.ic('menu', 'ic-open')}${h.ic('x', 'ic-close')}</button>
    </div>
  </div>
  <div class="mnav" id="menu-movil" data-menu hidden>
    <div class="wrap">
      <nav aria-label="Menú móvil">
        <ul>
          ${mlinks}
        </ul>
      </nav>
      <div class="mnav__actions">
        <a class="btn btn--outline-light btn--block" href="${h.link('accede-a-tu-cuenta')}"${cuentaCur}>${h.ic('login')}Accede a tu cuenta</a>
        <a class="btn btn--white btn--block" href="${h.landing.prestamos}">Solicitar mi préstamo${h.ic('arrow-r')}</a>
      </div>
    </div>
  </div>
</header>`;
}

function footer(h) {
  return `<footer class="site-footer">
  <div class="wrap">
    <div class="footer__grid footer__grid--web">
      <div class="footer__brand">
        <a class="logo" href="${h.home}" aria-label="Kredit, ir al inicio">
          <svg viewBox="0 0 144.9 38.6" width="145" height="39" aria-hidden="true" focusable="false"><use href="#logo-k" class="logo__k" width="29.4" height="38.6"/><use href="#logo-word" class="logo__word" width="144.9" height="38.6"/></svg>
        </a>
        <p>Tu crédito, sin vueltas. Fintech panameña con préstamos para colaboradores de empresas afiliadas: cuota fija por planilla y sin costos ocultos.</p>
        <div class="footer__social">
          <a href="https://www.instagram.com/kredit_pa/" target="_blank" rel="noopener" aria-label="Instagram de Kredit (@kredit_pa)">${h.ic('ig')}</a>
          ${h.wa('Hola Kredit, quiero información sobre un préstamo.', '', h.ic('wa'), 'WhatsApp de Kredit')}
          <a href="mailto:ventas@kredit.com.pa" aria-label="Correo de Kredit">${h.ic('mail')}</a>
        </div>
      </div>
      <div>
        <h3>Kredit</h3>
        <ul>
          <li><a href="${h.link('prestamos')}">Préstamos</a></li>
          <li><a href="${h.link('empresas')}">Empresas</a></li>
          <li><a href="${h.link('nosotros')}">Nosotros</a></li>
          <li><a href="${h.link('preguntas-frecuentes')}">Preguntas frecuentes</a></li>
          <li><a href="${h.link('contacto')}">Contacto</a></li>
        </ul>
      </div>
      <div>
        <h3>Clientes</h3>
        <ul>
          <li><a href="${h.landing.prestamos}">Solicitar un préstamo</a></li>
          <li><a href="${h.link('accede-a-tu-cuenta')}">Accede a tu cuenta</a></li>
          <li><a href="${PORTAL}" target="_blank" rel="noopener">Portal de clientes<span class="sr-only"> (se abre en otra pestaña)</span></a></li>
          <li><a href="${h.landing.empresas}">Afiliar mi empresa</a></li>
        </ul>
      </div>
      <div>
        <h3>Legal</h3>
        <ul>
          <li><a href="${h.link('prestamos')}#info-credito">Información del crédito</a></li>
          <li><a href="${h.link('politica-de-privacidad')}">Política de privacidad</a></li>
          <li><a href="${h.link('aviso-legal')}">Aviso legal</a></li>
          <li><a href="${h.link('politica-de-cookies')}">Política de cookies</a></li>
        </ul>
      </div>
      <div>
        <h3>Contacto</h3>
        <ul>
          <li>${h.wa('Hola Kredit, quiero información sobre un préstamo.', '', 'WhatsApp +507 6997-5664')}</li>
          <li><a href="mailto:ventas@kredit.com.pa">ventas@kredit.com.pa</a></li>
          <li><a href="mailto:protecciondedatos@kredit.com.pa">protecciondedatos@kredit.com.pa</a></li>
          <li>Torre de las Américas, Torre B, Of. 602-B, Punta Pacífica, Panamá <span class="tbd">[confirmar dirección oficial]</span></li>
        </ul>
      </div>
    </div>
    <div class="footer__license">
      ${h.seal()}
      <p>CREDU HOLDINGS, S.A. es una empresa financiera autorizada por la Dirección General de Empresas Financieras del Ministerio de Comercio e Industrias, Resolución No. 638 del 23 de septiembre de 2025. <strong>Kredit nunca te pedirá pagos por adelantado.</strong></p>
    </div>
    <div class="footer__bottom">
      <p>© <span data-year>2026</span> CREDU HOLDINGS, S.A. (Kredit) · RUC 155770767-2-2025 DV9</p>
      <p>Vista previa diseñada por Elemento Web</p>
    </div>
  </div>
</footer>`;
}

function sticky(h) {
  return `<div class="sticky-cta" data-sticky-cta aria-hidden="true">
  <div class="sticky-cta__info"><small>Tu cuota quincenal · ejemplo</small><strong data-sticky-cuota>B/. 45.84</strong></div>
  <a class="btn btn--blue btn--sm" href="${h.landing.prestamos}" tabindex="-1">Solicitar ahora</a>
</div>
`;
}

function layout(h, p) {
  const r = h.r;
  const scripts = [
    `<script type="module" src="${r}../kredit-landings/assets/page.js${V}"></script>`,
    `<script type="module" src="${r}assets/site.js${V}"></script>`,
    ...(p.quincenas ? [`<script type="module" src="${r}../kredit-landings/assets/quincenas.js${V}"></script>`] : []),
  ];
  const jsonld = p.jsonld ? `\n<script type="application/ld+json">\n${JSON.stringify(p.jsonld, null, 2)}\n</script>` : '';
  return `<!doctype html>
<html lang="es-PA" data-demo="true">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex, nofollow">
<title>${p.title}</title>
<meta name="description" content="${p.description}">
<meta name="theme-color" content="#091845">
<link rel="icon" href="${r}../kredit-landings/assets/kredit-mark.svg${V}" type="image/svg+xml">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700;800;900&amp;family=Roboto+Mono:wght@400;500;600&amp;display=swap">
<link rel="stylesheet" href="${r}../kredit-landings/assets/base.css${V}">
<link rel="stylesheet" href="${r}assets/site.css${V}">
<link rel="modulepreload" href="${r}../kredit-landings/assets/calc.js${V}">
${scripts.join('\n')}${jsonld}
</head>
<body id="top" class="page-${h.slug || 'inicio'}">
<!-- Generado por scripts/kredit-web/build.mjs: editar allí, no aquí. -->
${SPRITE}
${SPRITE_WEB}

<a class="skip-link" href="#contenido">Saltar al contenido</a>

<div class="demo-band" data-demo-band role="note">
  <span class="demo-band__pill">Demo</span>
  <span>Vista previa · Elemento Web — formulario en modo demo, no se envían datos</span>
</div>

${header(h, h.slug)}

<main id="contenido" tabindex="-1">
${p.body.trim()}
</main>

${footer(h)}

${p.sticky ? sticky(h) : ''}<a class="wa-float" href="#" data-whatsapp="${WA}" data-wa-text="Hola Kredit, quiero información." aria-label="Escríbenos por WhatsApp">${h.ic('wa')}</a>

<div class="toast" data-toast role="status" aria-live="polite" hidden></div>
</body>
</html>
`;
}

/* ------------------------------------------------------------------ escritura */
const only = process.argv.slice(2);
for (const pg of PAGES) {
  if (only.length && !only.includes(pg.mod)) continue;
  const mod = await import(pathToFileURL(path.join(HERE, 'pages', `${pg.mod}.mjs`)).href);
  const h = helpers(pg.slug);
  const p = mod.default(h);
  for (const k of ['title', 'description', 'body']) if (!p[k]) throw new Error(`${pg.mod}: falta ${k}`);
  const dir = path.join(OUT, pg.slug);
  fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(path.join(dir, 'index.html'), layout(h, p));
  console.log('ok', path.relative(REPO, path.join(dir, 'index.html')));
}
