/* Portada de agencia (D50, tanda B): una sola fuente para el mapa de servicios, el riel, el ItemList, las preguntas y la
   respuesta citable. Funciones puras que reciben `precios` (src/data/precios.json) para que scripts/portada.test.mjs las
   pruebe sin compilar Astro. Vive fuera de src/lib/pages/ para que [...slug].astro no la publique como página. */

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
}

/** Corte de compacto (D27): bajo este ancho el héroe sirve la captura de celular. Lo leen MarcoCaptura y la prueba
    de paridad con portada.css, que lo repite fijo (un .astro no se puede importar desde node --test). */
export const COMPACTO = 639;
export interface Pregunta { q: string; a: string }

/** H1 elegido tras S5 (audit/s5-agencia-diseno-web-2026-10.md, D50). */
export const H1_PORTADA = 'Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp';

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

/** Franja de Precios (portada v2). Excepciones a «desde por dato», con su motivo: el hosting compartido es el más
    barato de tres planes (desde); la web gestionada es un plan cerrado y va sin «desde», como la publica /precios/. */
export function franjaPrecios(precios: Precios) {
  return [
    {
      nombre: 'Web empresarial gestionada', slug: 'precios', clave: 'mensual',
      texto: `${precioTexto(precios, 'gestionada-puesta-en-marcha')} de puesta en marcha + ${precioTexto(precios, 'gestionada-mensual')} durante 12 meses`,
    },
    { nombre: 'Mantenimiento', slug: 'crecimiento/mantenimiento-web-panama', clave: 'mensual', texto: precioTexto(precios, 'mantenimiento') },
    { nombre: 'Hosting', slug: 'crecimiento/hosting-infraestructura-panama', clave: 'mensual', texto: precioTexto(precios, 'hosting-compartido', { desde: true }) },
  ];
}

/** Lista de Desarrollo web a medida: cada página y su precio solo si está confirmado. */
export function desarrolloPortada(precios: Precios): (Enlace & { precio: string | null })[] {
  return [
    { label: 'A medida con React o Vue', slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', precio: precioTexto(precios, 'web-medida', { desde: true }) },
    { label: 'WordPress sin plantillas', slug: 'tecnologias/diseno-web-wordpress-panama', precio: null },
    { label: 'Tiendas en Shopify', slug: 'tecnologias/diseno-web-shopify-panama', precio: null },
    { label: 'Pagos con Yappy y tarjeta', slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', precio: null },
    { label: 'CyberSource Unified Checkout', slug: 'funcionalidades/integracion-cybersource-panama', precio: precioDesde(precios, 'cybersource-esencial') },
    { label: 'Reservas y citas en línea', slug: 'funcionalidades/sistemas-reservas-citas-online-panama', precio: null },
    { label: 'Mantenimiento', slug: 'crecimiento/mantenimiento-web-panama', precio: precioTexto(precios, 'mantenimiento') },
    { label: 'Hosting', slug: 'crecimiento/hosting-infraestructura-panama', precio: precioTexto(precios, 'hosting-compartido', { desde: true }) },
  ];
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

/* Marketing por slug (no por posición: la lista de site.ts la comparten el menú y el pie). Líneas acortadas de la
   description publicada de cada página. `ancho`: 2 = celda doble desde 1024 px; 'fila' = fila entera. */
const MARKETING: Record<string, { linea: string; maqueta: string; ancho?: 2 | 'fila' }> = {
  'marketing/google-ads-panama': { linea: 'Aparece cuando tu cliente busca; tu inversión va directo a Google.', maqueta: 'google', ancho: 2 },
  'marketing/facebook-instagram-ads-panama': { linea: 'Segmentación, creativos y ventas; tu inversión va directo a Meta.', maqueta: 'anuncio' },
  'marketing/contenido-redes-sociales-panama': { linea: 'Publicaciones, diseño gráfico y Reels para mantener tu marca viva.', maqueta: 'parrilla' },
  'marketing/email-marketing-panama': { linea: 'Newsletters y recuperación de clientes, sobre una base que es tuya.', maqueta: 'correo', ancho: 2 },
  'marketing/whatsapp-marketing-masivo-panama': { linea: 'Campañas por la API oficial de WhatsApp Business.', maqueta: 'whatsapp-plantilla', ancho: 2 },
  'marketing/automatizaciones-n8n-panama': { linea: 'Conectamos tus herramientas para quitar el trabajo manual repetitivo.', maqueta: 'flujo', ancho: 'fila' },
};

export function modulosMarketing(lista: Enlace[]) {
  return lista.map((l) => {
    const d = MARKETING[l.slug];
    if (!d) throw new Error(`La lista de marketing de site.ts tiene «${l.slug}» y la portada no tiene sus datos (línea y maqueta) en portada.ts`);
    return { slug: l.slug, nombre: l.label, ...d };
  });
}

/** «2025–2026» con el menor y el mayor año del portafolio; uno solo si coinciden. Un proyecto sin año rompe el build. */
export function aniosPortafolio(portfolio: { t: string; year?: string }[]): string {
  const sinAnio = portfolio.filter((p) => !p.year).map((p) => p.t);
  if (sinAnio.length) throw new Error(`Proyectos del portafolio sin año: ${sinAnio.join(', ')}`);
  const anios = portfolio.map((p) => Number(p.year));
  const [min, max] = [Math.min(...anios), Math.max(...anios)];
  return min === max ? String(min) : `${min}–${max}`;
}

/* Industrias de la portada por evidencia: las 3 con proyectos publicados, las 2 con más impresiones con héroe en
   Search Console (audit/gsc-2026-10-paginas.tsv) y 3 más. */
const DESTACADAS = ['turismo-hoteles', 'constructoras', 'logistica-transporte', 'clinicas-salud', 'gimnasios-fitness', 'restaurantes', 'retail-moda', 'abogados'];

export function industriasDestacadas(lista: Enlace[]) {
  const slug = (x: string) => `industrias/diseno-web-${x}-panama`;
  const destacadas = DESTACADAS.map((x) => {
    const i = lista.find((l) => l.slug === slug(x));
    if (!i) throw new Error(`La industria destacada «${x}» no está en la lista de industrias de site.ts`);
    return i;
  });
  return { destacadas, resto: lista.filter((l) => !destacadas.includes(l)) };
}

/** Compara antes de firmar: cada fila enlaza la página que publica esa práctica y la prueba busca la frase ahí. */
export function comparaPortada() {
  return [
    { texto: 'Precio publicado', ruta: '/precios/', frase: 'Precios publicados y cotización cerrada por escrito' },
    { texto: 'Cotización cerrada por escrito', ruta: '/como-trabajamos/', frase: 'Cotización cerrada por escrito antes de empezar' },
    { texto: 'Alcance, tiempos y precio por escrito', ruta: '/contacto/', frase: 'Alcance, tiempos y precio cerrado, por escrito' },
    { texto: 'Dominio, código y accesos a tu nombre al completar el pago', ruta: '/como-trabajamos/', frase: 'quedan a nombre de tu empresa al completar el pago' },
    { texto: 'Respuesta el mismo día hábil', ruta: '/contacto/', frase: 'respondemos el mismo día hábil' },
    { texto: 'WhatsApp por la API oficial', ruta: '/marketing/whatsapp-marketing-masivo-panama/', frase: 'Campañas por la API oficial de WhatsApp Business' },
  ];
}

/** Líneas del panel de código de Desarrollo (maqueta pv2-codigo): un fragmento de Astro sin claves ni datos reales.
    Son cadenas para que el .astro las pinte con {linea} y no las compile como componentes. */
export const CODIGO_PORTADA = [
  '---',
  "import Reserva from '../components/Reserva.astro';",
  'const tours = await getTours();',
  '---',
  '<Reserva tours={tours} deposito="30%" />',
];

/** Lo que no hacemos: solo líneas con fuente publicada; la frase incluye la negación de la fuente. */
export function noHacemosPortada() {
  return [
    { texto: 'No revendemos plantillas', ruta: '/diseno-web-panama/', frase: 'sin plantillas revendidas' },
    { texto: 'No prometemos el primer lugar en Google', ruta: '/crecimiento/seo-posicionamiento-web-panama/', frase: 'Si alguien te garantiza el primer lugar en Google' },
    { texto: 'No intermediamos tu inversión publicitaria', ruta: '/marketing/google-ads-panama/', frase: 'No intermediamos tu inversión' },
  ];
}

/** Las 6 filas del mapa (D19, D20). La URL principal es la que usan el riel y el ItemList. */
export function filasMapa(precios: Precios): FilaMapa[] {
  return [
    {
      id: 'diseno-web', nombre: 'Diseño web', ir: 'Ver diseño web', slug: 'diseno-web-panama', precio: precioDesde(precios, 'web-landing'),
      resuelve: 'Sitios corporativos y landing pages para empresas que necesitan que su web traiga consultas, no solo que exista.',
      linea: 'Sitios y landing pages pensados para que tu web traiga consultas.', maqueta: 'captura-tramitapa',
      secundarios: [{ label: 'Ver casos', slug: 'casos-de-exito' }, { label: '¿Ya tienes web? Rediseño', slug: 'servicios/redisenio-web-panama' }],
    },
    {
      id: 'tiendas', nombre: 'Tiendas online', ir: 'Ver tiendas online', slug: 'servicios/tiendas-online-ecommerce-panama', precio: precioDesde(precios, 'web-ecommerce'),
      resuelve: 'Para negocios que quieren vender y cobrar en línea con Yappy y tarjeta, con inventario y envíos en Panamá.',
      linea: 'Vende y cobra en línea con Yappy y tarjeta, con envíos en Panamá.', maqueta: 'tienda',
      secundarios: [],
    },
    {
      id: 'seo', nombre: 'SEO y SEO local', ir: 'Ver SEO y SEO local', slug: 'crecimiento/seo-posicionamiento-web-panama', precio: null,
      resuelve: 'Para aparecer en Google y en Google Maps cuando te buscan, con contenido y técnica.',
      linea: 'Para aparecer en Google y en Google Maps cuando te buscan.', maqueta: 'mapa',
      secundarios: [{ label: 'SEO local en Google Maps', slug: 'crecimiento/seo-local-google-maps-panama' }],
    },
    {
      id: 'publicidad', nombre: 'Publicidad en Google y Meta', ir: 'Ver publicidad en Google y Meta', slug: 'marketing/google-ads-panama', precio: null,
      resuelve: 'Campañas en Google, Facebook e Instagram medidas hasta la consulta; tu inversión va directo a la plataforma.',
      linea: 'Google, Facebook e Instagram, medidos hasta la consulta.', maqueta: 'campanas',
      secundarios: [{ label: 'Facebook e Instagram Ads', slug: 'marketing/facebook-instagram-ads-panama' }],
    },
    {
      id: 'whatsapp', nombre: 'WhatsApp marketing', ir: 'Ver WhatsApp marketing', slug: 'marketing/whatsapp-marketing-masivo-panama', precio: null,
      resuelve: 'Mensajes y seguimiento por la API oficial de WhatsApp, para que tus clientes vuelvan a comprar.',
      linea: 'Mensajes y seguimiento por la API oficial de WhatsApp.', maqueta: 'whatsapp-conversacion',
      secundarios: [],
    },
    {
      id: 'ia', nombre: 'IA y automatización', ir: 'Ver IA y automatización', slug: 'inteligencia-artificial-para-empresas-panama', precio: precioDesde(precios, 'ia'),
      resuelve: 'Asistentes que responden con tu información y automatizaciones que cotizan y agendan, con control humano.',
      linea: 'Asistentes con tu información y automatizaciones con control humano.', maqueta: 'asistente',
      secundarios: [{ label: 'Automatizaciones con n8n', slug: 'marketing/automatizaciones-n8n-panama' }],
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

/** Respuesta citable (40 a 60 palabras): los mismos hechos que docs/autoridad/KIT-AUTORIDAD.md, no el mismo texto. */
export function respuestaPortada(precios: Precios) {
  return {
    fecha: '2026-10-14',
    text:
      '<a href="/nosotros/">Elemento Web</a> es una agencia de diseño web con sede en Ciudad de Panamá. Atendemos ' +
      '<a href="/diseno-web-panama/">empresas en Panamá</a> y, a distancia y en español, <a href="/miami/">negocios de Miami</a>. ' +
      'Hacemos webs pensadas para generar consultas, conectadas a WhatsApp por la API oficial como Tech Provider verificado por Meta. ' +
      `También SEO, publicidad e IA. Landing ${precioDesde(precios, 'web-landing')}, con cotización cerrada.`,
  };
}

/** Preguntas de agencia (D50): el mismo texto alimenta el bloque visible y el FAQPage. */
export function faqsPortada(precios: Precios): Pregunta[] {
  const p = (k: string) => precioDesde(precios, k);
  return [
    { q: '¿Cuánto cuesta una página web con Elemento Web?', a: `Landing ${p('web-landing')}, sitio corporativo ${p('web-empresarial')}, tienda online ${p('web-ecommerce')} y proyectos a medida ${p('web-medida')}. Sin ITBMS (7%). Siempre con cotización cerrada por escrito antes de empezar. El detalle está en <a href="/precios/">precios</a>.` },
    { q: '¿Pueden hacer SEO o publicidad sin rehacer mi web?', a: 'Sí, si la base sirve. Primero revisamos tu web: si carga bien y se puede editar, trabajamos el <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a> o la <a href="/marketing/google-ads-panama/">publicidad</a> sobre lo que ya tienes. Si está por rehacerse, te lo decimos antes, porque posicionar una página que vas a cambiar es tirar el trabajo.' },
    { q: 'Ya tengo web. ¿Me conviene rediseñarla?', a: 'Depende de qué falla. Con la revisión de tu web (la eliges en el formulario) te decimos si basta con corregir o si conviene un <a href="/servicios/redisenio-web-panama/">rediseño</a>, y por qué.' },
    { q: '¿Trabajan con negocios fuera de Panamá?', a: 'Sí. Desde Ciudad de Panamá trabajamos a distancia y en español con negocios de todo el país y de <a href="/miami/">Miami</a>, por WhatsApp y videollamada. Facturamos en dólares. No tenemos oficina en Miami.' },
    { q: '¿De quién son las cuentas de Google Ads y Meta?', a: 'Tuyas. Nosotros las gestionamos, pero la cuenta publicitaria queda a tu nombre y la inversión se carga ahí directamente. Si algún día cambias de agencia, te llevas el historial.' },
    { q: '¿Cuánto tarda el proyecto?', a: 'De 5 días hábiles para una landing a 5 semanas para una tienda online, contados desde que recibimos tu contenido. El plazo exacto va por escrito en la cotización.' },
    { q: '¿Cómo se paga?', a: 'En tres etapas: 50% para iniciar, 30% cuando apruebas el demo en línea y 20% para publicar en tu dominio. Aceptamos tarjeta, transferencia y Yappy.' },
    { q: '¿El dominio y la web quedan a mi nombre?', a: 'Sí. El dominio queda a nombre de tu empresa. En el plan mensual gestionado, si cancelas antes de los 12 meses liquidas las cuotas pendientes del desarrollo y recibes los accesos y archivos.' },
  ];
}
