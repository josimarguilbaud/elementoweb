/* Portada de agencia (D50, tanda B): una sola fuente para el mapa de servicios, el riel, el ItemList, las preguntas y la
   respuesta citable. Funciones puras que reciben `precios` (src/data/precios.json) para que scripts/portada.test.mjs las
   pruebe sin compilar Astro. Vive fuera de src/lib/pages/ para que [...slug].astro no la publique como página. */

export interface Precios { confirmados: Record<string, { monto: number }>; [k: string]: unknown }
export interface Enlace { label: string; slug: string }
export interface FilaMapa {
  id: string;
  nombre: string;
  /** Texto del enlace principal de la fila (respeta SEO, IA, Google, Meta y WhatsApp). */
  ir: string;
  resuelve: string;
  slug: string;
  precio: string | null;
  secundarios: Enlace[];
}
export interface Pregunta { q: string; a: string }

/** H1 elegido tras S5 (audit/s5-agencia-diseno-web-2026-10.md, D50). */
export const H1_PORTADA = 'Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp';

/** «desde $1,950», leído por clave de `confirmados` (D23). Una clave que no está confirmada rompe el build. */
export function precioDesde(precios: Precios, clave: string): string {
  const p = precios.confirmados[clave];
  if (!p) throw new Error(`precios.json no tiene confirmado «${clave}»: la portada solo publica precios confirmados (D23)`);
  return `desde $${p.monto.toLocaleString('en-US')}`;
}

/** Las 6 filas del mapa (D19, D20). La URL principal es la que usan el riel y el ItemList. */
export function filasMapa(precios: Precios): FilaMapa[] {
  return [
    {
      id: 'diseno-web', nombre: 'Diseño web', ir: 'Ver diseño web', slug: 'diseno-web-panama', precio: precioDesde(precios, 'web-landing'),
      resuelve: 'Sitios corporativos y landing pages para empresas que necesitan que su web traiga consultas, no solo que exista.',
      secundarios: [{ label: 'Ver casos', slug: 'casos-de-exito' }, { label: '¿Ya tienes web? Rediseño', slug: 'servicios/redisenio-web-panama' }],
    },
    {
      id: 'tiendas', nombre: 'Tiendas online', ir: 'Ver tiendas online', slug: 'servicios/tiendas-online-ecommerce-panama', precio: precioDesde(precios, 'web-ecommerce'),
      resuelve: 'Para negocios que quieren vender y cobrar en línea con Yappy y tarjeta, con inventario y envíos en Panamá.',
      secundarios: [],
    },
    {
      id: 'seo', nombre: 'SEO y SEO local', ir: 'Ver SEO y SEO local', slug: 'crecimiento/seo-posicionamiento-web-panama', precio: null,
      resuelve: 'Para aparecer en Google y en Google Maps cuando te buscan, con contenido y técnica.',
      secundarios: [{ label: 'SEO local en Google Maps', slug: 'crecimiento/seo-local-google-maps-panama' }],
    },
    {
      id: 'publicidad', nombre: 'Publicidad en Google y Meta', ir: 'Ver publicidad en Google y Meta', slug: 'marketing/google-ads-panama', precio: null,
      resuelve: 'Campañas en Google, Facebook e Instagram medidas hasta la consulta; tu inversión va directo a la plataforma.',
      secundarios: [{ label: 'Facebook e Instagram Ads', slug: 'marketing/facebook-instagram-ads-panama' }],
    },
    {
      id: 'whatsapp', nombre: 'WhatsApp marketing', ir: 'Ver WhatsApp marketing', slug: 'marketing/whatsapp-marketing-masivo-panama', precio: null,
      resuelve: 'Mensajes y seguimiento por la API oficial de WhatsApp, para que tus clientes vuelvan a comprar.',
      secundarios: [],
    },
    {
      id: 'ia', nombre: 'IA y automatización', ir: 'Ver IA y automatización', slug: 'inteligencia-artificial-para-empresas-panama', precio: precioDesde(precios, 'ia'),
      resuelve: 'Asistentes que responden con tu información y automatizaciones que cotizan y agendan, con control humano.',
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
