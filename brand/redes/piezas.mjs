/* Contenido de las piezas. Regla de la casa: ninguna cifra que no salga de src/data/precios.json,
   src/lib/site.ts o de una página publicada; lo que no se ha medido se imprime «sin publicar aún». */
import { portada, lista, recibo, proyecto, texto, cierre, preguntas, dato } from './capas.mjs';

const WA = 'WhatsApp +507 6190-3007';
const T = (n) => ({ n });

export const piezas = [
  {
    id: 'p01-presentacion', red: 'IG · FB · LinkedIn (PDF) · TikTok (fotos)', pdf: true,
    slides: (t) => [
      portada({ ...t(1), kicker: 'Agencia en Ciudad de Panamá', h1: 'Diseño web con el [[precio]] a la vista.', sub: 'Elemento Web. Atención remota también desde Miami.' }),
      lista({ ...t(2), h2: 'Qué hacemos', rows: [
        { t: 'Diseño web corporativo', d: 'Sitios con SEO inicial y panel editable.' },
        { t: 'Tiendas online', d: 'Catálogo, carrito, Yappy y pasarelas.' },
        { t: 'Landing pages', d: 'Una página enfocada en una sola acción.' },
        { t: 'SEO y Google Ads', d: 'Para que te encuentren y te escriban.' },
        { t: 'Meta Ads y contenido', d: 'Fee claro; tu inversión va directo a Meta.' },
        { t: 'WhatsApp, chatbots e IA', d: 'Atender, cotizar y cobrar dentro del chat.' },
      ] }),
      lista({ ...t(3), tone: 'alt', h2: 'Lo que publicamos en nuestra web', rows: [
        { t: 'Precios de partida', d: 'En USD y sin ITBMS, en elementoweb.com/precios.' },
        { t: 'Plazos', d: 'Cuánto tarda y desde cuándo empieza a contar.' },
        { t: 'Qué incluye', d: 'Los entregables de cada servicio.' },
        { t: 'Qué no incluye', d: 'Hosting, licencias, contenido y lo que se cotiza aparte.' },
      ] }),
      proyecto({ ...t(4), kicker: 'Proyectos publicados', h2: 'Trabajo real, con su enlace.', url: 'sanblasfull.com', img: 'public/portfolio/sanblasfull.jpg', ratio: '16/9', alt: 'Captura de la página de inicio de San Blas Full, con el selector de tour y la reserva con depósito', caption: 'San Blas Full · Turismo · 2025. Selector de tours, reserva con depósito, varios idiomas y WhatsApp.' }),
      cierre({ ...t(5), h2: '¿Cuánto costaría [[tu web]]?', sub: 'Mira los precios o cuéntanos tu caso.', btn: 'elementoweb.com/precios', wa: WA }),
    ],
  },
  {
    id: 'p02-cuanto-cuesta', red: 'IG · FB · LinkedIn (PDF) · TikTok (fotos)', pdf: true,
    slides: (t) => [
      portada({ ...t(1), kicker: 'Precios de partida · oct 2026', h1: '¿Cuánto cuesta una página web en [[Panamá]]?', sub: 'Lo que cuesta, lo que trae y lo que se paga aparte.' }),
      recibo({ ...t(2), h2: 'Precios de partida', h2Size: 76, hd: ['Comprobante de precios', 'USD · oct 2026'], rows: [
        { k: 'Landing page', sub: 'Una página, hasta 7 secciones', v: '$550', mk: true },
        { k: 'Web empresarial', sub: 'Hasta 6 páginas en total', v: '$1,250' },
        { k: 'Tienda online', sub: 'Carga inicial de hasta 25 productos', v: '$1,950' },
        { k: 'Web a medida', sub: 'Integraciones propias', v: 'desde $2,900' },
      ], ft: '**No incluyen ITBMS (7%).** Se aplica según corresponda.' }),
      lista({ ...t(3), tone: 'light', h2: 'Qué trae cada una', rows: [
        { n: '', t: 'Landing page', d: 'Formulario, botón de WhatsApp y medición de contactos. 5 días hábiles desde recibir el contenido y aprobar el alcance.' },
        { n: '', t: 'Web empresarial', d: 'SEO inicial por página, panel editable y capacitación grabada.' },
        { n: '', t: 'Tienda online', d: 'Categorías, carrito, pruebas de compra y capacitación para gestionar pedidos.' },
      ] }),
      recibo({ ...t(4), h2: 'Lo que se paga aparte', h2Size: 76, hd: ['No está en el precio del proyecto', 'USD'], rows: [
        { k: 'Hosting compartido', v: '$225', u: '/año' },
        { k: 'Hosting cloud', v: '$350', u: '/año' },
        { k: 'VPS dedicado', v: '$550', u: '/año' },
        { k: 'Mantenimiento web', v: 'desde $59', u: '/mes' },
        { k: 'Licencias y pasarelas', v: 'en tu cotización', blank: true },
      ], ft: 'Cada nivel de hosting incluye dominio y certificado SSL. **ITBMS (7%) no incluido.**' }),
      cierre({ ...t(5), h2: 'Cotiza con tu [[caso real]]', sub: 'Te decimos qué entra, qué no y cuándo.', btn: 'elementoweb.com/precios', wa: WA }),
    ],
  },
  {
    id: 'p03-cinco-dias', red: 'IG · FB · LinkedIn · Google Business Profile', pdf: false,
    slides: () => [
      dato({ kicker: 'Landing page · plazo', big: '{{5}} días hábiles', p: 'El plazo cuenta desde que recibimos el contenido y apruebas el alcance. Incluye 2 rondas de revisión del diseño.', nota: 'Landing desde $550 + ITBMS. elementoweb.com/precios' }),
    ],
  },
  {
    id: 'p04-caso-san-blas-full', red: 'IG · FB · LinkedIn (PDF) · TikTok (fotos)', pdf: true,
    slides: (t) => [
      proyecto({ ...t(1), kicker: 'Caso · Turismo · 2025', h2: 'San Blas Full: de elegir el tour a reservar.', url: 'sanblasfull.com', img: 'public/portfolio/sanblasfull.jpg', alt: 'Captura de la página de inicio de San Blas Full' }),
      texto({ ...t(2), kicker: 'El reto', h2: 'Reservar y pagar un depósito en pocos minutos.', p: ['San Blas Full vende tours de un día a viajeros de distintos países. El sitio tenía que permitirles elegir el tour, reservar y pagar un depósito sin dar vueltas.'] }),
      lista({ ...t(3), tone: 'alt', h2: 'Qué hicimos', rows: [
        { t: 'Selector de tour', d: 'Los tours ordenados en un solo lugar.' },
        { t: 'Reserva con depósito', d: 'Menos pasos entre elegir y reservar.' },
        { t: 'Varios idiomas', d: 'El viajero lee el sitio en el suyo.' },
        { t: 'WhatsApp', d: 'Para resolver dudas antes de reservar.' },
      ] }),
      recibo({ ...t(4), h2: '¿Y los resultados?', h2Size: 76, hd: ['Comprobante del caso', 'San Blas Full'], rows: [
        { k: 'Reservas medidas', v: 'sin publicar aún', blank: true },
        { k: 'Consultas recibidas', v: 'sin publicar aún', blank: true },
        { k: 'Velocidad en producción', v: 'sin medir', blank: true },
      ], ft: 'Publicamos una cifra solo cuando el cliente la autoriza y tiene **fuente y fecha**.' }),
      cierre({ ...t(5), h2: 'Lee el [[caso completo]]', sub: 'Qué necesitaba el negocio y qué construimos.', btn: 'Ver el caso', nota: 'elementoweb.com/casos-de-exito/san-blas-full/' }),
    ],
  },
  {
    id: 'p05-todos-incluyen', red: 'IG · FB · LinkedIn · Google Business Profile', pdf: false,
    slides: () => [
      recibo({ tone: 'alt', pie: 'url', h2: 'Todos los proyectos incluyen', h2Size: 64, tight: true, hd: ['Base común', 'Cada proyecto'], rows: [
        { chk: true, k: 'Diseño adaptado a móvil y computadora' },
        { chk: true, k: 'Formularios y WhatsApp configurados y comprobados' },
        { chk: true, k: 'SEO inicial: títulos, descripciones, sitemap e indexación solicitada' },
        { chk: true, k: 'Analytics y medición de clics en WhatsApp y envíos de formularios' },
        { chk: true, k: 'Dos rondas de revisión del diseño' },
        { chk: true, k: 'Capacitación grabada cuando hay panel de administración' },
        { chk: true, k: 'Corrección de errores durante 30 días después de publicar' },
      ], ft: 'Lo que no entra se lista aparte, con precio.' }),
    ],
  },
  {
    id: 'p06-tres-preguntas', red: 'IG · FB · LinkedIn', pdf: false,
    slides: () => [
      preguntas({ pie: 'url', h2: '3 preguntas antes de contratar una agencia web', qs: [
        { t: '¿Está publicado el precio?', d: 'Sabrás si te alcanza antes de hablar con nadie.' },
        { t: '¿Qué no incluye?', d: 'Hosting, licencias, contenido, impuestos: pídelo por escrito.' },
        { t: '¿Cuántas revisiones y qué pasa después?', d: 'Nosotros: 2 rondas de revisión y 30 días de corrección de errores.' },
      ], ft: 'Nuestras respuestas están en [[elementoweb.com/precios]]' }),
    ],
  },
];
