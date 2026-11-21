/* Bloque de cierre contextual del pie y CTA a mitad de artículo (plan cta-blog-2026-11, fase A).
   Antes el cierre decía lo mismo en todas las páginas («¿Listo para una web…?») aunque la página fuera de pauta, IA o
   WhatsApp, y su botón no llevaba el servicio al formulario. Ahora el tema sale de la página y el botón pide el
   diagnóstico sin costo con ese servicio. Función pura: la usa [...slug].astro y la prueba scripts/cierre.test.mjs. */

export type Tema = 'web' | 'ecommerce' | 'seo' | 'pauta' | 'whatsapp' | 'ia' | 'automatizacion';

export interface PaginaCierre {
  slug: string;
  h1?: string;
  category?: string;
  serviceKey?: string;
  cta?: { h2?: string; text?: string; wa?: string };
}

export interface Cierre {
  h2: string;
  texto: string;
  boton: string;
  href: string;
  wa: string;
  servicio: string;
  medio?: { slug: string; label: string; texto: string };
}

/* Clave del formulario (src/data/formulario.json) y página de servicio de cada tema. */
const CLAVE: Record<Tema, string> = {
  web: 'pyme', ecommerce: 'ecommerce', seo: 'seo', pauta: 'pauta', whatsapp: 'whatsapp', ia: 'ia', automatizacion: 'automatizacion',
};

export const DESTINO: Record<Tema, { slug: string; label: string }> = {
  web: { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
  ecommerce: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online en Panamá' },
  seo: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
  pauta: { slug: 'marketing', label: 'Marketing digital y pauta' },
  whatsapp: { slug: 'funcionalidades/agente-de-ventas-ia-whatsapp-panama', label: 'Agente de ventas con IA en WhatsApp' },
  ia: { slug: 'inteligencia-artificial-para-empresas-panama', label: 'Inteligencia artificial para empresas' },
  automatizacion: { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones con n8n' },
};

const COPIA: Record<Tema, { h2: string; texto: string; medio: string }> = {
  web: {
    h2: '¿Tu web te trae clientes o solo existe?',
    texto: 'Revisamos tu caso sin costo y te mandamos una propuesta con precio cerrado, por escrito.',
    medio: 'Si prefieres que lo hagamos por ti, te decimos qué necesita tu negocio y cuánto cuesta.',
  },
  ecommerce: {
    h2: '¿Quieres vender en línea sin enredos?',
    texto: 'Te decimos qué plataforma, pagos y envíos te convienen, con precio cerrado por escrito.',
    medio: 'Armamos tu tienda con Yappy, tarjeta y envíos. Te damos el precio antes de empezar.',
  },
  seo: {
    h2: '¿Quieres aparecer cuando tu cliente te busca?',
    texto: 'Revisamos tu web y tu ficha de Google sin costo y te decimos qué arreglar primero.',
    medio: '¿No tienes tiempo de hacerlo tú? Revisamos tu web sin costo y te decimos qué la frena en Google.',
  },
  pauta: {
    h2: '¿Tu publicidad trae consultas o solo clics?',
    texto: 'Revisamos tus campañas o te armamos un plan, con la inversión y el costo por consulta claros.',
    medio: 'Si quieres que alguien lleve tus campañas, revisamos tu caso sin costo y con números claros.',
  },
  whatsapp: {
    h2: '¿Se te escapan clientes en WhatsApp?',
    texto: 'Te mostramos cómo responder al momento y dar seguimiento con la API oficial de Meta.',
    medio: 'Un agente con IA puede responder, cotizar y pasarle la venta a tu equipo. Te lo mostramos sin costo.',
  },
  ia: {
    h2: '¿Dónde te ahorraría tiempo la IA?',
    texto: 'Revisamos tus procesos sin costo y te decimos qué conviene automatizar primero y cuánto cuesta.',
    medio: 'Te decimos qué tareas de tu negocio puede hacer la IA, con precio y plazo por escrito.',
  },
  automatizacion: {
    h2: '¿Cuántas tareas repites cada día a mano?',
    texto: 'Revisamos tu flujo sin costo y te decimos qué se puede automatizar y cuánto cuesta.',
    medio: 'Conectamos tus formularios, WhatsApp y CRM para que el seguimiento salga solo.',
  },
};

const POR_CATEGORIA: Record<string, Tema> = {
  'E-commerce': 'ecommerce', SEO: 'seo', Marketing: 'pauta', 'Marketing digital': 'pauta', WhatsApp: 'whatsapp', 'IA y Automatización': 'ia',
};

const POR_CLAVE: Record<string, Tema> = Object.fromEntries(
  (Object.entries(CLAVE) as [Tema, string][]).map(([t, c]) => [c, t]),
);
POR_CLAVE.landing = 'web';
POR_CLAVE.rediseno = 'web';
POR_CLAVE.revision = 'web';
POR_CLAVE.mensual = 'web';

export function temaDe(p: Pick<PaginaCierre, 'slug' | 'category' | 'serviceKey'>): Tema {
  if (p.serviceKey && POR_CLAVE[p.serviceKey]) return POR_CLAVE[p.serviceKey];
  if (p.category && POR_CATEGORIA[p.category]) return POR_CATEGORIA[p.category];
  const s = p.slug;
  if (/whatsapp/.test(s)) return 'whatsapp';
  if (/n8n|automatiza/.test(s)) return 'automatizacion';
  if (/inteligencia-artificial|chatbot|agente|\bia\b|-ia-/.test(s)) return 'ia';
  if (/seo|posicionamiento|google-maps|geo-/.test(s)) return 'seo';
  if (/ecommerce|tienda|yappy|cybersource|pago/.test(s)) return 'ecommerce';
  if (s.startsWith('marketing')) return 'pauta';
  return 'web';
}

export function cierreDe(p: PaginaCierre): Cierre {
  const tema = temaDe(p);
  const servicio = p.serviceKey && POR_CLAVE[p.serviceKey] ? p.serviceKey : CLAVE[tema];
  const copia = COPIA[tema];
  const esArticulo = p.slug.startsWith('blog/');
  const nombre = p.h1 ?? 'su servicio';
  return {
    h2: p.cta?.h2 ?? copia.h2,
    texto: p.cta?.text ?? copia.texto,
    boton: 'Pedir diagnóstico sin costo',
    href: `/contacto/?servicio=${servicio}#formulario`,
    wa: p.cta?.wa ?? (esArticulo ? `Hola, leí «${nombre}» y quiero un diagnóstico sin costo.` : `Hola, me interesa ${nombre}.`),
    servicio,
    medio: esArticulo ? { ...DESTINO[tema], texto: copia.medio } : undefined,
  };
}

/* Cierre de las páginas que no salen del registro (blog, 404, recursos): tema web. */
export const CIERRE_GENERAL: Cierre = cierreDe({ slug: '', h1: 'una propuesta para mi negocio' });
