/* Portada de agencia: una sola fuente para los textos y enlaces de la portada v3 (D56), el ItemList de servicios, las
   preguntas y la respuesta citable. Funciones puras que reciben `precios` (src/data/precios.json) para que
   scripts/portada.test.mjs las pruebe sin compilar Astro. Vive fuera de src/lib/pages/ para que [...slug].astro no la
   publique como página. */

export interface Precio { nombre?: string; monto: number; unidad?: string; desde?: boolean }
export interface Precios { confirmados: Record<string, Precio>; [k: string]: unknown }
export interface Enlace { label: string; slug: string }
export interface FilaMapa {
  id: string;
  nombre: string;
  /** Texto del enlace principal de la fila (respeta SEO, IA, Google, Meta y WhatsApp). */
  ir: string;
  resuelve: string;
  /** Línea del módulo de la portada v2: 70 caracteres o menos, acortada de `resuelve` (sin line-clamp). */
  linea: string;
  /** Maqueta del módulo (data-maqueta), única en la página. */
  maqueta: string;
  slug: string;
  precio: string | null;
  secundarios: Enlace[];
  /** Panel apilado de Servicios (D53): texto de 60 a 200 caracteres, de 5 a 6 ítems de lo que incluye, el «Cotizar» con la
   *  clave del formulario que deja elegida y la imagen aprobada (public/images/portada/servicios/, 640 y 960 px). */
  texto: string;
  incluye: string[];
  cotizar: { texto: string; servicio: string };
  imagen: { src: string; src640: string; alt: string; width: number; height: number; nota?: string };
}

const imagenPanel = (id: string, alt: string, height: number, nota?: string) =>
  ({ src: `/images/portada/servicios/${id}-960.webp`, src640: `/images/portada/servicios/${id}-640.webp`, alt, width: 960, height, nota });

export interface Pregunta { q: string; a: string }

/** H1 de la portada (D60, 23-oct-2026): agencia de marketing digital e IA. «Agencia de diseño web» pasó a la pilar
   /diseno-web-panama/ (antes, D50: «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp»). */
export const H1_PORTADA = 'Agencia de marketing digital e IA en Panamá: web, publicidad, WhatsApp y automatización';

/** «desde $1,950», leído por clave de `confirmados` (D23). Una clave que no está confirmada rompe el build. */
export function precioDesde(precios: Precios, clave: string): string {
  const p = precios.confirmados[clave];
  if (!p) throw new Error(`precios.json no tiene confirmado «${clave}»: la portada solo publica precios confirmados (D23)`);
  return `desde $${p.monto.toLocaleString('en-US')}`;
}

/* Sufijo de cada unidad de precios.json. Una unidad que no está aquí no se publica en la portada (rompe el build). */
const SUFIJOS: Record<string, string> = {
  proyecto: '',
  'una vez': '',
  mes: '/mes',
  año: '/año',
  'proyecto, más el consumo de los modelos': ' más el consumo de los modelos',
};

/** El precio completo de una clave confirmada: «desde $99/mes», «$350», «desde $2,900 más el consumo de los modelos».
    «desde» sale del dato (`desde: true` en precios.json); quien llama solo lo fuerza con motivo escrito. */
export function precioTexto(precios: Precios, clave: string, { desde }: { desde?: boolean } = {}): string {
  const p = precios.confirmados[clave];
  if (!p) throw new Error(`precios.json no tiene confirmado «${clave}»: la portada solo publica precios confirmados (D23)`);
  const unidad = p.unidad ?? 'proyecto';
  if (!(unidad in SUFIJOS)) {
    throw new Error(`precios.json: «${clave}» tiene la unidad «${unidad}», que la portada no sabe escribir. Unidades admitidas: ${Object.keys(SUFIJOS).join(', ')}`);
  }
  return `${(desde ?? p.desde) ? 'desde ' : ''}$${p.monto.toLocaleString('en-US')}${SUFIJOS[unidad]}`;
}

/** Mapa clave → opción del selector del formulario: la opción es la etiqueta `servicio` de formulario.json cuando
    ContactForm la ofrece en su lista. Se arma en el frontmatter de index.astro con los datos de site.ts. */
export function mapaOpciones(services: string[], servicios: { clave: string; servicio: string }[]): Record<string, string> {
  return Object.fromEntries(servicios.filter((s) => services.includes(s.servicio)).map((s) => [s.clave, s.servicio]));
}

/** La opción que deja elegida un «Cotizar». «definir» no cambia lo elegido; una clave sin opción rompe el build. */
export function opcionDe(mapa: Record<string, string>, clave: string, seccion: string): string | undefined {
  if (clave === 'definir') return undefined;
  const opcion = mapa[clave];
  if (!opcion) {
    const validas = Object.keys(mapa).filter((k) => k !== 'definir');
    throw new Error(`El «Cotizar» de la sección «${seccion}» usa la clave «${clave}», que no tiene opción en el formulario. Claves válidas: ${validas.join(', ')}`);
  }
  return opcion;
}

/** Las 6 filas del mapa (D19, D20). La URL principal es la que usan el riel y el ItemList. */
export function filasMapa(precios: Precios): FilaMapa[] {
  return [
    {
      id: 'diseno-web', nombre: 'Diseño web', ir: 'Ver diseño web', slug: 'diseno-web-panama', precio: precioDesde(precios, 'web-landing'),
      resuelve: 'Sitios corporativos y landing pages para empresas que necesitan que su web traiga consultas, no solo que exista.',
      linea: 'Sitios y landing pages pensados para que tu web traiga consultas.', maqueta: 'captura-tramitapa',
      secundarios: [{ label: 'Ver casos', slug: 'casos-de-exito' }, { label: '¿Ya tienes web? Rediseño', slug: 'servicios/redisenio-web-panama' }],
      texto: 'Sitios y landing pages pensados para que tu web traiga consultas. Diseño a medida sobre tu marca, sin plantillas revendidas ni constructores pesados.',
      incluye: ['Diseño a medida', 'Responsivo de verdad', 'SEO técnico', 'Velocidad', 'WhatsApp con el mensaje escrito', 'Formularios conectados'],
      cotizar: { texto: 'Cotizar diseño web', servicio: 'pyme' },
      imagen: imagenPanel('diseno-web', 'La web de TramitaPa, tramitapa.com, hecha por Elemento Web, en una laptop y un celular', 1200, 'tramitapa.com · proyecto publicado'),
    },
    {
      id: 'tiendas', nombre: 'Tiendas online', ir: 'Ver tiendas online', slug: 'servicios/tiendas-online-ecommerce-panama', precio: precioDesde(precios, 'web-ecommerce'),
      resuelve: 'Para negocios que quieren vender y cobrar en línea con Yappy y tarjeta, con inventario y envíos en Panamá.',
      linea: 'Vende y cobra en línea con Yappy y tarjeta, con envíos en Panamá.', maqueta: 'tienda',
      secundarios: [],
      texto: 'Vende y cobra en línea con Yappy y tarjeta, con envíos en Panamá. Cotización cerrada según catálogo e integraciones.',
      incluye: ['Catálogo y carrito', 'Yappy y tarjeta', 'Envíos por zona', 'Fichas que venden', 'Correos automáticos', 'Carritos abandonados'],
      cotizar: { texto: 'Cotizar mi tienda', servicio: 'ecommerce' },
      imagen: imagenPanel('tiendas', 'Ilustración: caja de envío abierta con un pedido y una terminal de pago', 1192),
    },
    {
      id: 'seo', nombre: 'SEO y SEO local', ir: 'Ver SEO y SEO local', slug: 'crecimiento/seo-posicionamiento-web-panama', precio: null,
      resuelve: 'Para aparecer en Google y en Google Maps cuando te buscan, con contenido y técnica.',
      linea: 'Para aparecer en Google y en Google Maps cuando te buscan.', maqueta: 'mapa',
      secundarios: [{ label: 'SEO local en Google Maps', slug: 'crecimiento/seo-local-google-maps-panama' }],
      texto: 'Para aparecer en Google y en Google Maps cuando te buscan. Arranca con una auditoría: antes de cobrar un solo mes te decimos en qué estás parado.',
      incluye: ['Auditoría inicial', 'Base técnica', 'Mapa de palabras clave', 'Contenido mensual', 'Datos estructurados', 'SEO local en Google Maps'],
      cotizar: { texto: 'Pedir revisión de mi web', servicio: 'revision' },
      imagen: imagenPanel('seo', 'Ilustración: un pin de mapa sobre la maqueta de una ciudad costera', 1192),
    },
    {
      id: 'publicidad', nombre: 'Publicidad en Google y Meta', ir: 'Ver publicidad en Google y Meta', slug: 'marketing/google-ads-panama', precio: null,
      resuelve: 'Campañas en Google, Facebook e Instagram medidas hasta la consulta; tu inversión va directo a la plataforma.',
      linea: 'Google, Facebook e Instagram, medidos hasta la consulta.', maqueta: 'campanas',
      secundarios: [{ label: 'Facebook e Instagram Ads', slug: 'marketing/facebook-instagram-ads-panama' }],
      texto: 'Google, Facebook e Instagram, medidos hasta la consulta. La inversión publicitaria va aparte, directo a Google y a Meta.',
      incluye: ['Investigación de palabras clave', 'Campañas por intención', 'Anuncios completos', 'Públicos de remarketing', 'Píxel y API de conversiones', 'Palabras negativas desde el día uno'],
      cotizar: { texto: 'Cotizar publicidad', servicio: 'pauta' },
      imagen: imagenPanel('publicidad', 'Ilustración: anuncios en tarjetas de vidrio que caen sobre una diana', 1192),
    },
    {
      id: 'whatsapp', nombre: 'WhatsApp marketing', ir: 'Ver WhatsApp marketing', slug: 'marketing/whatsapp-marketing-masivo-panama', precio: null,
      resuelve: 'Mensajes y seguimiento por la API oficial de WhatsApp, para que tus clientes vuelvan a comprar.',
      linea: 'Mensajes y seguimiento por la API oficial de WhatsApp.', maqueta: 'whatsapp-conversacion',
      secundarios: [],
      texto: 'Mensajes y seguimiento por la API oficial de WhatsApp. El costo de los mensajes lo cobra Meta, desde tu cuenta.',
      incluye: ['Alta del número en la API oficial', 'Plantillas aprobadas', 'Segmentación', 'Campañas', 'Consentimiento y bajas', 'Respuestas en WazaCRM'],
      // WhatsApp no tiene opción propia en el selector del formulario: deja elegido «Marketing digital / Pauta», como #marketing.
      cotizar: { texto: 'Cotizar WhatsApp', servicio: 'pauta' },
      imagen: imagenPanel('whatsapp', 'Ilustración: globos de conversación sobre un celular', 1192),
    },
    {
      id: 'ia', nombre: 'IA y automatización', ir: 'Ver IA y automatización', slug: 'inteligencia-artificial-para-empresas-panama', precio: precioDesde(precios, 'ia'),
      resuelve: 'Asistentes que responden con tu información y automatizaciones que cotizan y agendan, con control humano.',
      linea: 'Asistentes con tu información y automatizaciones con control humano.', maqueta: 'asistente',
      secundarios: [{ label: 'Automatizaciones con n8n', slug: 'marketing/automatizaciones-n8n-panama' }],
      texto: 'Asistentes con tu información y automatizaciones con control humano. Cada respuesta dice de qué documento y página sale.',
      incluye: ['Diagnóstico sin costo', 'Base de conocimiento privada', 'Respuestas con cita', 'Permisos por rol', 'Automatización de procesos'],
      cotizar: { texto: 'Cotizar IA', servicio: 'ia' },
      imagen: imagenPanel('ia', 'Ilustración: esfera de vidrio con un núcleo cian, como un asistente de IA', 1192),
    },
  ];
}

/** ItemList del mapa: cada elemento referencia por @id el Service que su página ya publica, sin repetir nombre,
    proveedor ni zona (que exige qa-seo) y sin Offer (R37). */
export function itemListPortada(dominio: string, filas: FilaMapa[]) {
  return {
    '@type': 'ItemList',
    name: 'Servicios de Elemento Web',
    itemListElement: filas.map((f, i) => ({ '@type': 'ListItem', position: i + 1, item: { '@id': `${dominio}/${f.slug}/#servicio` } })),
  };
}

/* ============================================================
   PORTADA V3 (D56): agencia de marketing digital + proyectos de IA, en monocromo. Sin precios ni sección de proyectos
   (reglas del dueño del 21-oct-2026); el diseño web tiene su sección. Las URL son todas páginas que ya existen.
   ============================================================ */

/** Titular de display del héroe (un <p>; el H1 real es H1_PORTADA, en la etiqueta pequeña). */
export const DISPLAY_PORTADA = ['Marketing que vende.', 'IA que trabaja.'];
export const BAJADA_PORTADA = 'Campañas, contenido y agentes de IA para empresas en Panamá, sobre una web que convierte. Todo medido hasta la consulta.';

/** Franja de 6 servicios del héroe: orienta, un enlace por servicio. */
export const FRANJA_PORTADA: Enlace[] = [
  { label: 'Google Ads', slug: 'marketing/google-ads-panama' },
  { label: 'Meta Ads', slug: 'marketing/facebook-instagram-ads-panama' },
  { label: 'SEO y GEO', slug: 'crecimiento/seo-posicionamiento-web-panama' },
  { label: 'WhatsApp API', slug: 'marketing/whatsapp-marketing-masivo-panama' },
  { label: 'Agentes IA', slug: 'inteligencia-artificial-para-empresas-panama' },
  { label: 'Diseño web', slug: 'diseno-web-panama' },
];

export interface MitadDiptico { num: string; titulo: string; linea: string; enlaces: Enlace[]; img: { src: string; width: number; height: number; alt: string } }
/** Recorrido (#soluciones, D61): tres pasos que conectan los servicios, 3 enlaces cada uno. El del medio va en negro. */
export const DIPTICO_PORTADA: MitadDiptico[] = [
  {
    num: '01', titulo: 'Atraer', linea: 'Que te encuentren en Google, en las redes y en las respuestas de la IA.',
    enlaces: [
      { label: 'Google y Meta Ads', slug: 'marketing' },
      { label: 'SEO y posicionamiento en ChatGPT', slug: 'crecimiento/posicionamiento-en-chatgpt-e-ia-panama' },
      { label: 'Contenido y videos con IA', slug: 'marketing/videos-publicitarios-panama' },
    ],
    img: { src: '/images/portada-v3/diptico-marketing-800.webp', width: 800, height: 520, alt: 'Una mano sostiene un celular con un anuncio patrocinado de una panadería en un café' },
  },
  {
    num: '02', titulo: 'Atender', linea: 'Cada consulta se responde al momento por WhatsApp, con un agente de IA y tu equipo detrás.',
    enlaces: [
      { label: 'Agente de ventas con IA en WhatsApp', slug: 'funcionalidades/agente-de-ventas-ia-whatsapp-panama' },
      { label: 'WhatsApp con la API oficial', slug: 'marketing/whatsapp-marketing-masivo-panama' },
      { label: 'Reservas y citas online', slug: 'funcionalidades/sistemas-reservas-citas-online-panama' },
    ],
    img: { src: '/images/portada-v3/diptico-ia-800.webp', width: 800, height: 597, alt: 'Una profesional en una oficina de Ciudad de Panamá revisa una conversación con un asistente en su laptop' },
  },
  {
    num: '03', titulo: 'Automatizar', linea: 'El seguimiento se hace solo y la IA trabaja con la información de tu empresa.',
    enlaces: [
      { label: 'Automatizaciones con n8n', slug: 'marketing/automatizaciones-n8n-panama' },
      { label: 'IA para empresas', slug: 'inteligencia-artificial-para-empresas-panama' },
      { label: 'Paquetes que unen los tres pasos', slug: 'soluciones' },
    ],
    img: { src: '/images/portada-v3/diptico-automatizar-800.webp', width: 800, height: 537, alt: 'Una coordinadora de ventas trabaja en su laptop mientras su celular recibe un aviso' },
  },
];

export interface TarjetaBento { id: string; titulo: string; linea: string; slug: string; ancha?: boolean; img?: { src: string; width: number; height: number }; nota: string }
/** Bento: cómo se ve el resultado. Las maquetas son HTML y CSS; donde hay imagen (anuncio, videos) va a color. */
export const BENTO_PORTADA: TarjetaBento[] = [
  { id: 'publicidad', titulo: 'Publicidad en Google y Meta', linea: 'Anuncios que aparecen cuando tu cliente busca o navega.', slug: 'marketing', ancha: true, img: { src: '/images/portada-v3/bento-anuncio-600.webp', width: 600, height: 448 }, nota: 'un anuncio en el feed con su resultado de búsqueda' },
  { id: 'seo', titulo: 'SEO y GEO', linea: 'Que Google y los asistentes de IA te encuentren y te citen.', slug: 'crecimiento/seo-posicionamiento-web-panama', nota: 'un resultado de Google y una respuesta de IA que te citan' },
  { id: 'whatsapp', titulo: 'WhatsApp Marketing', linea: 'Campañas y seguimiento por la API oficial.', slug: 'marketing/whatsapp-marketing-masivo-panama', nota: 'un mensaje de campaña por WhatsApp' },
  { id: 'agentes', titulo: 'Agentes de IA', linea: 'Responden con tu información y pasan el dato a tu CRM.', slug: 'inteligencia-artificial-para-empresas-panama', nota: 'un agente que responde y agenda' },
  { id: 'contenido', titulo: 'Contenido con IA', linea: 'Videos y piezas para redes, hechos con IA.', slug: 'marketing/videos-publicitarios-panama', img: { src: '/images/portada-v3/bento-videos-600.webp', width: 600, height: 448 }, nota: 'miniaturas de videos para redes' },
];

/** Sección de diseño web: lista y un mockup de laptop y celular con dos webs reales del portafolio. */
export const WEB_PORTADA = {
  titulo: 'Webs que trabajan como un vendedor.',
  linea: 'La base de todo: rápida, medible y a tu nombre.',
  items: ['Sitios corporativos', 'Landing pages', 'Tiendas online con Yappy', 'Desarrollo a medida'],
  laptop: { cap: '/portfolio/sanblasfull', t: 'San Blas Full' },
  movil: { src: '/images/ejemplos/movil-tramitapa.webp', src2x: '/images/ejemplos/movil-tramitapa-780.webp', t: 'TramitaPa' },
};

/** Bloque negro de proyectos de IA: el diagrama y la franja de confianza. */
export const IA_PORTADA = {
  titulo: 'Un agente que atiende mientras tú vendes.',
  linea: 'Diagnóstico sin costo. Del primer mensaje al reporte, con control humano en cada paso.',
  pasos: ['WhatsApp', 'Agente IA', 'CRM', 'Reporte'],
  confianza: ['API oficial de WhatsApp', 'Tech Provider verificado por Meta', 'Respuesta el mismo día hábil'],
};

/** Posicionamiento (29-oct-2026): sección propia para SEO, GEO y SEO local, con el recorrido atraer, atender y
    automatizar dibujado en SVG. Los plazos son los mismos que publican las páginas de SEO y SEO local. */
export const POSICIONAMIENTO_PORTADA = {
  titulo: 'Posicionamiento en Google y en ChatGPT.',
  linea:
    'Tu cliente busca en Google, mira el mapa y cada vez más le pregunta a ChatGPT, Gemini o Perplexity. Trabajamos los tres frentes con un mismo método: una web técnicamente limpia, respuestas claras con fecha, datos estructurados y una ficha de Google con reseñas al día.',
  items: [
    { slug: 'crecimiento/seo-posicionamiento-web-panama', t: 'SEO y posicionamiento web', l: 'Aparecer en Google por lo que vendes. Mejoras técnicas en semanas; posiciones competidas en 3 a 6 meses.' },
    { slug: 'crecimiento/posicionamiento-en-chatgpt-e-ia-panama', t: 'Posicionamiento en ChatGPT (GEO)', l: 'Que las IA nombren tu negocio y citen tu web cuando alguien pregunta por tu servicio.' },
    { slug: 'crecimiento/seo-local-google-maps-panama', t: 'SEO local y Google Maps', l: 'Salir en el mapa cuando buscan cerca de ti. Las primeras señales llegan en semanas.' },
  ],
  pasos: [
    { t: 'Atraer', l: 'Google, ChatGPT y anuncios' },
    { t: 'Atender', l: 'WhatsApp y agente de IA' },
    { t: 'Automatizar', l: 'CRM y seguimiento' },
  ],
};

/** Respuesta citable (40 a 60 palabras, con fecha), reescrita para marketing + IA. Sin cifras: la portada no publica precios. */
export function respuestaPortada() {
  return {
    fecha: '2026-10-23',
    text:
      '<a href="/nosotros/">Elemento Web</a> es una agencia de marketing digital e IA en Panamá, con sede en ' +
      'Ciudad de Panamá. Hacemos campañas en Google y Meta, SEO, contenido con IA, agentes de IA y <a href="/diseno-web-panama/">diseño web</a> ' +
      'para empresas en Panamá y <a href="/miami/">negocios de Miami</a>. Somos Tech Provider verificado por Meta para la API oficial de WhatsApp.',
  };
}

/** Preguntas de la portada v3: el mismo texto alimenta el bloque visible y el FAQPage. Sin cifras «$». */
export function faqsPortada(): Pregunta[] {
  return [
    { q: '¿Qué hace una agencia de marketing digital como Elemento Web?', a: 'Planeamos y corremos <a href="/marketing/">campañas en Google y Meta</a>, <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y GEO</a>, contenido con IA y WhatsApp marketing por la API oficial. Todo se mide hasta la consulta, no solo hasta el clic.' },
    { q: '¿Qué es un agente de IA y para qué le sirve a mi empresa?', a: 'Es un asistente que responde con la información de tu negocio, cotiza o agenda por WhatsApp y pasa los datos a tu CRM, con control humano. Cada respuesta dice de qué documento sale. Más en <a href="/inteligencia-artificial-para-empresas-panama/">IA para empresas</a>.' },
    { q: '¿Siguen haciendo diseño web?', a: 'Sí. Hacemos sitios corporativos, landing pages, tiendas online con Yappy y desarrollo a medida. La web es la base que mide y convierte las campañas. Más en <a href="/diseno-web-panama/">diseño web en Panamá</a>.' },
    { q: '¿Qué es la API oficial de WhatsApp y por qué importa?', a: 'Es la vía que Meta aprueba para que las empresas envíen mensajes y campañas sin arriesgar el número. Somos Tech Provider verificado por Meta y conectamos tu número a la API. Más en <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp marketing</a>.' },
    { q: '¿Trabajan con negocios fuera de Panamá?', a: 'Sí. Desde Ciudad de Panamá trabajamos a distancia y en español con negocios de todo el país y de <a href="/miami/">Miami</a>, por WhatsApp y videollamada. Facturamos en dólares. No tenemos oficina en Miami.' },
    { q: '¿Cómo funciona el agente de ventas con IA en WhatsApp?', a: 'Corre sobre <a href="/saas/wazacrm/">WazaCRM</a> y la API oficial de WhatsApp: responde con la información de tu negocio, cotiza, agenda y pasa a tu equipo lo que necesita una persona. Te lo entregamos montado y entrenado; el precio publicado está en <a href="/funcionalidades/agente-de-ventas-ia-whatsapp-panama/">la página del agente</a>.' },
    { q: '¿Tienen paquetes que junten varios servicios?', a: 'Sí, tres: Clientes por WhatsApp, Visible en Google y en la IA, y Empresa con IA. Cada uno conecta atraer, atender y automatizar, con precio de partida publicado en <a href="/soluciones/">Soluciones</a>.' },
    { q: '¿Cómo se cotiza un proyecto?', a: 'Nos cuentas qué quieres lograr en el formulario o por WhatsApp. El diagnóstico no tiene costo y recibes una cotización cerrada por escrito, con alcance, plazo y precio, antes de empezar. Los precios de partida están en <a href="/precios/">precios</a>.' },
    { q: '¿Qué es el posicionamiento en ChatGPT o GEO?', a: 'Es preparar tu web para que ChatGPT, Gemini y Perplexity la entiendan y la citen: respuestas directas con fecha, datos estructurados, información consistente en todo internet y menciones en sitios que las IA consultan. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT</a>.' },
    { q: '¿Cuánto tarda el SEO en dar resultados?', a: 'Las mejoras técnicas se notan en semanas; las posiciones competidas toman de 3 a 6 meses de trabajo constante. El mapa de Google suele moverse antes. Quien promete la primera página en 30 días te vende humo. Más en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.' },
    { q: '¿El GEO reemplaza al SEO?', a: 'No, se apoya en él. Las IA leen sobre todo páginas que ya están bien indexadas en los buscadores, así que una web sin SEO técnico casi nunca aparece citada. Por eso trabajamos los dos juntos, junto con <a href="/crecimiento/seo-local-google-maps-panama/">la ficha de Google Maps</a>.' },
    { q: '¿De quién son las cuentas de Google Ads y Meta?', a: 'Tuyas. Nosotros las gestionamos, pero la cuenta publicitaria queda a tu nombre y la inversión se carga ahí directamente. Si algún día cambias de agencia, te llevas el historial.' },
  ];
}

