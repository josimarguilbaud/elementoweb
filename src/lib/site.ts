/* ============================================================
   FUENTE ÚNICA DE VERDAD del sitio: identidad, navegación,
   precios y mapa keyword → URL (anti-canibalización).
   Cambiar un enlace aquí lo cambia en todo el sitio.
   ============================================================ */

import precios from '../data/precios.json';
import formulario from '../data/formulario.json';
import iaCreativaData from '../data/ia-creativa.json';

/* Cifras confirmadas: salen de src/data/precios.json (D39). El validador del marcador lee el mismo archivo. */
const usd = (n: number) => '$' + n.toLocaleString('en-US');
const monto = (id: keyof typeof precios.confirmados) => precios.confirmados[id].monto;

export const site = {
  name: 'Elemento Web',
  domain: 'https://elementoweb.com',
  email: 'hola@elementoweb.com',
  phone: '+507 6190-3007',
  phoneRaw: '50761903007',
  /* Dirección y horario tal como los publica la ficha de Google Business Profile (13-oct-2026). Tienen que coincidir
     letra por letra con la ficha y con cada directorio (docs/autoridad/KIT-AUTORIDAD.md): si cambia uno, cambian todos. */
  address: { street: 'Vía Grecia, PH Ventury Plaza', locality: 'Panamá', country: 'PA', texto: 'Vía Grecia, PH Ventury Plaza, Panamá' },
  horario: [
    { dias: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], abre: '08:00', cierra: '17:00', texto: 'Lunes a viernes, 8:00 a. m. a 5:00 p. m.' },
    { dias: ['Saturday'], abre: '09:00', cierra: '13:00', texto: 'Sábados, 9:00 a. m. a 1:00 p. m.' },
  ],
  maps: 'https://www.google.com/maps?cid=8956925184559299099',
  locale: 'es_PA',
  tagline: 'Agencia de diseño web en Panamá. Sitios de alto rendimiento respaldados por desarrollo a medida e inteligencia artificial.',
};

/* Analítica y verificación. Pega tus IDs aquí y funcionan en todo el sitio.
   - gaId: ID de medición de Google Analytics 4 (formato G-XXXXXXXXXX).
           Lo obtienes en analytics.google.com → Admin → Flujos de datos.
   - searchConsole: código de verificación por etiqueta HTML de Search Console
           (solo el valor del content="", no la etiqueta completa). Alternativa:
           verifica en Search Console con el método "Google Analytics" una vez
           que gaId esté activo, y puedes dejar esto vacío.
   Vacío = no se carga nada (sin scripts de terceros). */
export const analytics = {
  gaId: 'G-J0NHHRTV75',
  searchConsole: '', // ej: 'aBc123...'
};

/* Configuración del formulario de contacto. El sitio es estático (nginx), así que
   el envío se procesa fuera del servidor de archivos. Elige UNA opción:
   1) Web3Forms (recomendado, sin backend, gratis): crea una access key en
      web3forms.com y ponla en `web3formsKey`. El endpoint ya queda listo.
   2) Webhook propio de n8n (on-brand, lo más controlable): deja `web3formsKey`
      vacío y pon la URL de tu webhook en `endpoint`. Recibe JSON por POST.
   3) Formspree u otro: pon su URL en `endpoint`.
   ⚠️ VACÍO = el formulario muestra un aviso; configúralo antes de publicar. */
export const contactForm = {
  web3formsKey: '', // (no se usa: el formulario va por n8n, ver endpoint)
  endpoint: 'https://n8n.aiwebstudio.co/webhook/elementoweb-contacto', // Webhook n8n → correo por SMTP (docs/contacto-n8n)
  /* Aquí vivía un bloque `crm` con la URL del webhook de WazaCRM, el clientId y
     el SECRETO, y el navegador llamaba directo al CRM con ellos. El comentario
     que lo acompañaba decía que ese secreto «sirve para identificar al cliente,
     no es una credencial de administración». Era falso: ese secreto es
     exactamente lo que autoriza a escribir en el CRM de este cliente, y estaba
     en el HTML público de elementoweb.com, a la vista de cualquiera.

     Un sitio estático no puede guardar un secreto. Desde el 16-sep-2026 el lead
     entra al CRM desde n8n, servidor a servidor, en el mismo flujo que ya manda
     el correo (`scripts/subir-flujo-contacto.mjs`). Aquí no queda nada que
     proteger. */
  services: [
    'Diseño web / Sitio corporativo',
    'Tienda online / E-commerce',
    'Landing page',
    'Web empresarial gestionada — plan mensual',
    'Revisión de mi web',
    'Rediseño web',
    'Ayúdame a definir mi proyecto',
    'Marketing digital / Pauta',
    'Automatización / Inteligencia artificial',
    'Software a medida',
    'Otro',
  ],
  budgets: [
    'Menos de $2,000',
    '$2,000 - $5,000',
    '$5,000 - $10,000',
    'Más de $10,000',
    'Por definir',
  ],
};

/* ------------------------------------------------------------
   MAPA KEYWORD → URL (una keyword primaria por página)
   home ................. diseño web en panamá
   corporativo .......... diseño web corporativo panamá
   ecommerce ............ tienda online panamá / e-commerce panamá
   landing .............. landing page panamá
   redisenio ............ rediseño web panamá
   wordpress ............ diseño web wordpress panamá
   shopify .............. diseño web shopify panamá
   a-medida ............. desarrollo web a medida panamá
   yappy ................ integrar yappy página web
   chatbots ............. chatbot para página web panamá
   reservas ............. sistema de reservas online panamá
   industrias/* ......... diseño web para [nicho] panamá
   seo .................. posicionamiento web panamá
   seo-local ............ google maps / seo local panamá
   mantenimiento ........ mantenimiento web panamá
   hosting-infra ........ hosting e infraestructura web panamá
   blog/cuanto-cuesta ... cuánto cuesta una página web en panamá (informacional)
   ------------------------------------------------------------ */

export type NavLink = { slug: string; label: string };

export const cols: { title: string; hub: string; links: NavLink[] }[] = [
  {
    title: 'Diseño Web',
    hub: 'servicios',
    links: [
      { slug: 'diseno-web-panama', label: 'Diseño Web en Panamá' },
      { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
      { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online y E-commerce' },
      { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing Pages de Conversión' },
      { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' },
    ],
  },
  {
    title: 'Tecnologías',
    hub: 'tecnologias',
    links: [
      { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'WordPress' },
      { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Shopify' },
      { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'A Medida (Vue / React)' },
    ],
  },
  {
    title: 'Funcionalidades',
    hub: 'funcionalidades',
    links: [
      { slug: 'inteligencia-artificial-para-empresas-panama', label: 'Ecosistema de IA Empresarial' },
      { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas de Pago' },
      { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbot con IA para tu Web' },
      { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y Citas Online' },
    ],
  },
  {
    title: 'Crecimiento',
    hub: 'crecimiento',
    links: [
      { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
      { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps' },
      { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento Web' },
      { slug: 'crecimiento/hosting-infraestructura-panama', label: 'Hosting e Infraestructura' },
    ],
  },
];

export const industrias: NavLink[] = [
  { slug: 'industrias/diseno-web-abogados-panama', label: 'Abogados' },
  { slug: 'industrias/diseno-web-bienes-raices-panama', label: 'Bienes Raíces' },
  { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Restaurantes' },
  { slug: 'industrias/diseno-web-turismo-hoteles-panama', label: 'Turismo y Hoteles' },
  { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Clínicas y Salud' },
  { slug: 'industrias/diseno-web-constructoras-panama', label: 'Constructoras' },
  { slug: 'industrias/diseno-web-educacion-panama', label: 'Educación' },
  { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Retail y Moda' },
  { slug: 'industrias/diseno-web-gimnasios-fitness-panama', label: 'Gimnasios y Fitness' },
  { slug: 'industrias/diseno-web-talleres-automotriz-panama', label: 'Talleres y Automotriz' },
  { slug: 'industrias/diseno-web-belleza-spa-panama', label: 'Belleza y Spas' },
  { slug: 'industrias/diseno-web-logistica-transporte-panama', label: 'Logística y Transporte' },
  { slug: 'industrias/diseno-web-contadores-panama', label: 'Contadores' },
  { slug: 'industrias/diseno-web-agencias-viajes-tours-panama', label: 'Agencias de Viajes y Tours' },
  { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Importadoras y Distribuidoras' },
  { slug: 'industrias/diseno-web-dentistas-odontologia-panama', label: 'Dentistas y Odontología' },
  { slug: 'industrias/diseno-web-seguros-corredores-panama', label: 'Seguros y Corredores' },
  { slug: 'industrias/diseno-web-concesionarios-autos-panama', label: 'Concesionarios de Autos' },
  { slug: 'industrias/diseno-web-clinicas-esteticas-panama', label: 'Clínicas Estéticas' },
  { slug: 'industrias/diseno-web-veterinarias-panama', label: 'Veterinarias' },
  { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Ferreterías y Materiales' },
  { slug: 'industrias/diseno-web-eventos-catering-bodas-panama', label: 'Eventos, Catering y Bodas' },
  { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Consultoras y Servicios Profesionales' },
  { slug: 'industrias/diseno-web-arquitectos-diseno-interiores-panama', label: 'Arquitectos y Diseño de Interiores' },
  /* Las seis siguientes ya estaban publicadas pero faltaban aquí, así que la portada no las enlazaba (15-oct-2026,
     portada v2: la lista tiene que coincidir con las páginas de /industrias/ para que «Ver las N industrias» sea cierto). */
  { slug: 'industrias/diseno-web-agencias-aduana-zona-libre-panama', label: 'Agencias de Aduana y Zona Libre' },
  { slug: 'industrias/diseno-web-aire-acondicionado-refrigeracion-panama', label: 'Aire Acondicionado y Refrigeración' },
  { slug: 'industrias/diseno-web-cooperativas-financieras-panama', label: 'Cooperativas y Financieras' },
  { slug: 'industrias/diseno-web-imprentas-publicidad-panama', label: 'Imprentas y Publicidad' },
  { slug: 'industrias/diseno-web-navieras-servicios-maritimos-panama', label: 'Navieras y Servicios Marítimos' },
  { slug: 'industrias/diseno-web-seguridad-vigilancia-panama', label: 'Seguridad y Vigilancia' },
];

export const marketing: NavLink[] = [
  { slug: 'marketing/google-ads-panama', label: 'Google Ads' },
  { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
  { slug: 'marketing/contenido-redes-sociales-panama', label: 'Contenido para Redes' },
  { slug: 'marketing/email-marketing-panama', label: 'Email Marketing' },
  { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp Marketing' },
  { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones (n8n)' },
];

/* Producción con IA (D52): las páginas de IA creativa que salen en esta tanda, desde src/data/ia-creativa.json. El menú y
   el pie las muestran como grupo propio, después del de marketing, con las mismas clases. */
export const iaCreativa: NavLink[] = iaCreativaData.paginas.map((p) => ({ slug: p.slug, label: p.etiqueta }));

export const saas: (NavLink & { blurb: string })[] = [
  { slug: 'saas/wazacrm', label: 'WazaCRM', blurb: 'CRM de WhatsApp con IA: atiende, cotiza, agenda y cobra en piloto automático.' },
  { slug: 'saas/nouscrm', label: 'NousCRM', blurb: 'Cotizaciones y facturas con tu logo, cobros por WhatsApp.' },
  { slug: 'saas/cifrao', label: 'Cifrao', blurb: 'Software contable para empresas en Panamá.' },
];

/* Enlaces de texto del header (además de los 4 desplegables). Portafolio salió
   del top nav para no saturarlo con Marketing; sigue en footer, hero y related. */
export const navExtra: NavLink[] = [
  { slug: 'como-trabajamos', label: 'Cómo trabajamos' },
  { slug: 'blog', label: 'Blog' },
];

/* GRUPOS del menú y del pie (portada v3, D56): una sola tabla donde cada enlace tiene exactamente un dueño. El
   megamenú, el acordeón móvil y las 4 primeras columnas del pie salen de aquí; scripts/menu-pie.test.mjs falla si un
   slug aparece en dos grupos o si se pierde uno de las listas de arriba. WhatsApp Marketing es de Marketing; los
   chatbots, n8n y la IA empresarial son de Inteligencia artificial (salen de Funcionalidades). El díptico y el bento de
   la portada no son grupos y pueden enlazar a cualquier dueño. */
export type IconoGrupo = 'anuncio' | 'chispa' | 'agente' | 'caja' | 'ventana' | 'codigo' | 'enchufe' | 'libro' | 'brujula';
export type Grupo = {
  id: 'marketing' | 'ia' | 'web' | 'recursos';
  titulo: string;
  columnas: { titulo: string; linea: string; icono: IconoGrupo; links: NavLink[] }[];
  /** Tarjeta destacada del panel de escritorio (no va en el móvil); su enlace también está en una columna. */
  destacada: { slug: string; titulo: string; linea: string };
};

const sinDueno = (links: NavLink[], fuera: string[]) => links.filter((l) => !fuera.includes(l.slug));
const IA_EMPRESAS = 'inteligencia-artificial-para-empresas-panama';
const CHATBOTS = 'funcionalidades/chatbots-ia-web-wazacrm-panama';
const N8N = 'marketing/automatizaciones-n8n-panama';
const columna = (titulo: string) => cols.find((c) => c.title === titulo)!.links;

export const grupos: Grupo[] = [
  {
    id: 'marketing',
    titulo: 'Marketing',
    columnas: [
      { titulo: 'Publicidad y redes', linea: 'Campañas que traen clientes y se miden.', icono: 'anuncio', links: sinDueno(marketing, [N8N]) },
      { titulo: 'Producción con IA', linea: 'Videos y piezas hechas con IA.', icono: 'chispa', links: iaCreativa },
    ],
    destacada: { slug: 'marketing/videos-publicitarios-panama', titulo: 'Videos publicitarios', linea: 'Anuncios en video hechos con IA.' },
  },
  {
    id: 'ia',
    titulo: 'Inteligencia artificial',
    columnas: [
      {
        titulo: 'Proyectos de IA', linea: 'Agentes y automatizaciones que trabajan por ti.', icono: 'agente',
        links: [
          { slug: IA_EMPRESAS, label: 'IA para empresas' },
          { slug: CHATBOTS, label: 'Chatbot con IA para tu web' },
          { slug: N8N, label: 'Automatizaciones (n8n)' },
        ],
      },
      { titulo: 'Nuestros SaaS', linea: 'Software propio, listo para usar.', icono: 'caja', links: [{ slug: 'saas', label: 'Todos los SaaS' }, ...saas.map((s) => ({ slug: s.slug, label: s.label }))] },
    ],
    destacada: { slug: IA_EMPRESAS, titulo: 'IA para empresas', linea: 'Del diagnóstico al agente en producción.' },
  },
  {
    id: 'web',
    titulo: 'Diseño web',
    columnas: [
      { titulo: 'Diseño web', linea: 'Sitios que trabajan como un vendedor.', icono: 'ventana', links: [...columna('Diseño Web'), { slug: 'industrias', label: 'Por industria' }] },
      { titulo: 'Tecnologías', linea: 'La plataforma que tu negocio necesita.', icono: 'codigo', links: columna('Tecnologías') },
      { titulo: 'Funcionalidades', linea: 'Pagos y reservas dentro de tu web.', icono: 'enchufe', links: sinDueno(columna('Funcionalidades'), [IA_EMPRESAS, CHATBOTS]) },
    ],
    destacada: { slug: 'diseno-web-panama', titulo: 'Diseño web en Panamá', linea: 'Sitios rápidos, medibles y a tu nombre.' },
  },
  {
    id: 'recursos',
    titulo: 'Recursos',
    columnas: [
      {
        titulo: 'Aprender', linea: 'Guías y casos para decidir mejor.', icono: 'libro',
        links: [
          { slug: 'blog', label: 'Blog' },
          { slug: 'guias', label: 'Guías' },
          { slug: 'recursos', label: 'Recursos' },
          { slug: 'casos-de-exito', label: 'Casos de éxito' },
          { slug: 'como-trabajamos', label: 'Cómo trabajamos' },
        ],
      },
      {
        titulo: 'Explorar', linea: 'Proyectos, precios y crecimiento.', icono: 'brujula',
        links: [
          { slug: 'portafolio', label: 'Proyectos' },
          { slug: 'precios', label: 'Precios' },
          { slug: 'miami', label: 'Miami' },
          ...columna('Crecimiento'),
        ],
      },
    ],
    destacada: { slug: 'guias', titulo: 'Guías', linea: 'Lo que conviene saber antes de cotizar.' },
  },
];

export const legal: NavLink[] = [
  { slug: 'politica-de-privacidad', label: 'Privacidad' },
  { slug: 'terminos', label: 'Términos' },
  { slug: 'contacto', label: 'Contacto' },
];

/* PRECIOS: confirmados por el cliente (jul 2026). Fuente única para todo el sitio. */
export const pricing = {
  note: 'Precios en USD. No incluyen ITBMS (7%); se aplicará según corresponda.',
  infra: 'Infraestructura anual desde $350: dominio, hosting cloud y certificado SSL. Mantenimiento web desde $99/mes.',
  tiers: [
    {
      name: 'Landing Page',
      price: usd(monto('web-landing')),
      ideal: 'Campañas de Google Ads o Meta, lanzamientos, promociones y captar consultas para un solo servicio.',
      features: [
        'Una sola página de hasta 7 secciones, enfocada en una oferta',
        'Textos y orden pensados para que la visita te escriba',
        'Te escriben en un clic: formulario y botón de WhatsApp',
        'Sabes cuántas consultas trajo: medición de contactos',
        'Dos rondas de ajustes del diseño incluidas',
        'Lista en 5 días hábiles desde que recibimos el contenido y apruebas el alcance',
      ],
    },
    {
      name: 'Web empresarial',
      price: usd(monto('web-empresarial')),
      featured: true,
      ideal: 'Clínicas, despachos de abogados, contadores, constructoras, consultoras y empresas de servicios.',
      features: [
        'Hasta 6 páginas: tu empresa completa, explicada',
        'Una página por servicio, para que cada uno pueda aparecer en Google',
        'SEO inicial en cada página: títulos, descripciones y datos para Google',
        'Cambias textos y fotos tú mismo: panel editable y capacitación grabada',
        'Blog listo para publicar (la redacción se contrata aparte)',
        'Te escriben en un clic: formularios y WhatsApp conectados',
      ],
    },
    {
      name: 'E-commerce',
      price: usd(monto('web-ecommerce')),
      ideal: 'Negocios que ya venden por WhatsApp o Instagram: ropa, cosmética, repostería, ferretería, regalos.',
      features: [
        'Abre con tus primeros 25 productos ya cargados',
        'Categorías y carrito para que compren sin escribirte',
        'Cobras en línea: pagos y envíos configurados (las pasarelas se definen en la cotización)',
        'Compras de prueba antes de abrir, para que el primer cliente no encuentre errores',
        'Capacitación para gestionar tus pedidos',
        'Inventario propio (la sincronización con un ERP se cotiza aparte)',
      ],
    },
  ],

  /* Base común de todos los proyectos. Cada punto es un compromiso de entrega: no añadir
     nada aquí que el equipo no vaya a cumplir en cada proyecto. */
  included: {
    title: 'Todos nuestros proyectos incluyen',
    items: [
      'Diseño adaptado a móvil y computadora',
      'Formularios y WhatsApp configurados y comprobados',
      'SEO inicial: títulos, descripciones, sitemap e indexación solicitada',
      'Analytics y medición de clics en WhatsApp y envíos de formularios',
      'Dos rondas de revisión del diseño',
      'Capacitación grabada cuando hay panel de administración',
      'Corrección de errores del desarrollo durante 30 días después de publicar',
    ],
  },

  /* Lo que NO está en el precio del proyecto y se cotiza o paga aparte. */
  separate: {
    title: 'Lo que se paga aparte del proyecto',
    items: [
      { name: 'Dominio, hosting y certificado SSL', text: 'Infraestructura anual desde $350 (hosting cloud; hay niveles desde $225 hasta $550 al año según el proyecto). No está incluida en el precio del proyecto.' },
      { name: 'Correo corporativo', text: 'Desde $60 al año. No incluido.' },
      { name: 'Mantenimiento', text: 'Desde $99 al mes si lo contratas. No incluido.' },
      { name: 'Licencias y comisiones de terceros', text: 'Plugins, temas, pasarelas de pago y plataformas cobran sus propias licencias y comisiones; se detallan en la cotización.' },
      { name: 'Redacción de contenido, imágenes y logo con IA', text: 'Contenido desde $150, imágenes $100, logo desde $120. Se cotizan aparte y los apruebas antes de publicar.' },
    ],
  },

  /* Plan mensual: una sola opción por ahora, para medir cuánto soporte consume antes de ampliarla. */
  managed: {
    name: 'Web empresarial gestionada',
    headline: 'Tu web profesional, con un equipo que la mantiene',
    text: 'Diseñamos tu página, la publicamos y nos encargamos del hosting, la seguridad y los cambios cotidianos. Tú puedes concentrarte en atender tu negocio.',
    setup: monto('gestionada-puesta-en-marcha'),
    monthly: monto('gestionada-mensual'),
    afterYear: monto('gestionada-desde-el-mes-13'),
    development: 75,
    ongoing: 94,
    firstYearTotal: 2378,
    summary: ['Hasta 6 páginas en total', 'Hosting y dominio', 'Mantenimiento', '1 hora mensual de cambios'],
    includes: [
      'Web de hasta 6 páginas en total',
      'Dominio estándar, hosting y certificado SSL',
      'Formularios, WhatsApp y medición inicial',
      'Actualizaciones aplicables, respaldos y monitoreo',
      'Hasta 1 hora mensual (no acumulable) de cambios de textos e imágenes',
      'Respuesta de soporte el siguiente día hábil',
      'Resumen mensual de visitas y contactos medidos',
    ],
    excludes: ['Artículos mensuales', 'Campañas publicitarias', 'Nuevas páginas', 'Rediseños', 'IA e integraciones especiales (cada una se cotiza con su alcance)'],
    terms: [
      'El dominio queda a nombre del cliente y la web es suya.',
      'Si cancela antes de los 12 meses, liquida las cuotas pendientes del desarrollo y recibe los accesos y archivos; el servicio continuo deja de cobrarse.',
      'Desde el mes 13 se cobran solo $94 al mes por el servicio continuo, mientras continúe.',
      'No incluye ITBMS (7%).',
    ],
  },

  /* Franja premium bajo las tarjetas: el proyecto corporativo grande no es un
     paquete cerrado; se presenta como servicio a medida de alto valor. */
  custom: {
    eyebrow: 'Proyectos a medida',
    title: 'Páginas web corporativas a medida',
    price: usd(monto('web-medida')),
    text: 'Para empresas que necesitan más que un paquete: arquitectura propia, integraciones con tus sistemas y funcionalidad hecha a la medida de tu operación. El mismo equipo y el mismo stack con el que construimos nuestros propios SaaS.',
    features: [
      'Arquitectura y diseño 100% a tu medida',
      'Integraciones con CRM, ERP, pagos o inventario',
      'Multi-idioma y portales de cliente',
      'Desarrollo a medida con Vue / React',
      'SEO técnico avanzado y rendimiento premium',
      'Acompañamiento y soporte prioritario',
    ],
    cta: 'Agendar diagnóstico',
    wa: 'Hola, me interesa una página web corporativa a medida.',
  },

  /* Hosting: el precio depende del proyecto (tráfico, control, integraciones). */
  hosting: {
    intro: 'El hosting no es único: depende de tu proyecto. Cuánto tráfico esperas, qué integraciones necesita y cuánto control quieres definen el nivel correcto. Todos incluyen dominio y certificado SSL.',
    tiers: [
      {
        name: 'Hosting Compartido',
        price: usd(monto('hosting-compartido')),
        unit: '/año',
        for: 'Sitios corporativos y landing pages con tráfico moderado.',
        features: ['Recursos compartidos optimizados', 'Ideal para sitios de contenido', 'Dominio y SSL incluidos'],
      },
      {
        name: 'Hosting Cloud',
        price: usd(monto('hosting-cloud')),
        unit: '/año',
        featured: true,
        for: 'La opción recomendada para la mayoría de las empresas.',
        features: ['Recursos garantizados y escalables', 'Mejor rendimiento y estabilidad', 'Dominio y SSL incluidos'],
      },
      {
        name: 'VPS Dedicado',
        price: usd(monto('hosting-vps')),
        unit: '/año',
        for: 'Proyectos a medida, e-commerce grande o alta demanda.',
        features: ['Servidor dedicado a tu proyecto', 'Control total del entorno', 'Dominio y SSL incluidos'],
      },
    ],
  },

  /* Producción de contenido e imágenes con IA para clientes que no tienen el
     material listo. Precios fijos definidos por el cliente (jul 2026). */
  production: {
    intro: '¿No tienes los textos, las imágenes o el logo listos? No es un bloqueo. Los generamos con inteligencia artificial, 100% originales para tu negocio, y te los mostramos para tu aprobación antes de publicarlos.',
    content: {
      name: 'Redacción de contenido con IA',
      note: 'Textos originales creados con IA a partir de la información de tu negocio y revisados por nuestro equipo. Nada de relleno genérico: contenido pensado para tu sitio.',
      tiers: [
        { label: 'Landing page', price: usd(monto('contenido-ia-landing')) },
        { label: 'Web corporativa (hasta 6 páginas en total)', price: usd(monto('contenido-ia-corporativa')) },
        { label: 'Web extensa (más de 6 páginas)', price: usd(monto('contenido-ia-extensa')) },
      ],
    },
    images: {
      name: 'Generación de imágenes con IA',
      price: usd(monto('imagenes-ia')),
      note: 'Un set de imágenes originales generadas con IA (Higgsfield) cuando no cuentas con fotografía propia. Alineadas al estilo de tu sitio.',
    },
    // ⚠️ Precio propuesto por confirmar (logo) — ver README.
    logo: {
      name: 'Logo e identidad básica con IA',
      price: 'desde $120',
      note: 'Un logo original creado con IA y refinado por nuestro equipo, más una paleta de color y tipografía base para tu marca. Para negocios que arrancan sin identidad visual.',
    },
  },

  /* Servicios que suman al precio base. Se aclaran desde la cotización, sin sorpresas.
     Sin cifras inventadas: lo que no tiene precio fijo dice "cotización aparte". */
  addons: {
    intro: 'Algunos requerimientos suman al precio base porque implican trabajo o infraestructura adicional. Los dejamos claros desde la cotización, nunca como sorpresa a mitad del proyecto.',
    items: [
      // ⚠️ Precio propuesto por confirmar (correo, express) — ver README.
      { name: 'Correo corporativo con tu dominio', text: 'Cuentas de correo profesionales con tu dominio (info@tuempresa.com), configuradas y listas para usar.', price: 'desde $60/año' },
      { name: 'Entrega express', text: 'Cuando necesitas el sitio antes del plazo normal, priorizamos tu proyecto en la fila de producción.', price: 'recargo 30%' },
      { name: 'Base de datos nueva', text: 'Diseño e implementación de una base de datos cuando el proyecto la requiere: catálogos dinámicos, portales de clientes, sistemas a medida. Es trabajo aparte del diseño web.', price: 'Cotización aparte' },
      { name: 'Migración de datos', text: 'Traslado de contenido, productos o clientes desde tu sistema o sitio actual, sin perder información en el camino.', price: 'Cotización aparte' },
      { name: 'Integraciones externas', text: 'Conexión con sistemas de terceros vía API: inventario, facturación, CRM o logística.', price: 'Cotización aparte' },
      { name: 'Sitio en varios idiomas', text: 'Estructura y contenido adicional por cada idioma extra, con el etiquetado SEO correcto por idioma.', price: 'Cotización aparte' },
    ],
  },
};

/* Logos de clientes descargados de Drive (26 JPG en /public/logos).
   ⚠️ Confirmar autorización de cada cliente antes de publicar. */
export const clientLogos: string[] = [
  '36.jpg','37.jpg','38.jpg','39.jpg','40.jpg','41.jpg','42.jpg','43.jpg','44.jpg',
  '45.jpg','46.jpg','47.jpg','48.jpg','49.jpg','50.jpg','51.jpg','52.jpg','53.jpg',
  '54.jpg','55.jpg','56.jpg','57.jpg','58.jpg','59.jpg','60.jpg','61.jpg',
];

/* Proyectos reales del portafolio (fuente única: home + página /portafolio/).
   Las imágenes son capturas reales guardadas en public/portfolio/. */
export const portfolioCats = [
  { key: 'all', label: 'Todos' },
  { key: 'corporativo', label: 'Web corporativa' },
  { key: 'turismo', label: 'Turismo' },
];
export const portfolio = [
  { t: 'San Blas Full', did: 'Organizamos los tours en un selector y simplificamos la reserva con depósito, en varios idiomas y con WhatsApp para resolver dudas.', caso: 'casos-de-exito/san-blas-full', cat: 'turismo', catLabel: 'Turismo · Tours', tag: 'Turismo', year: '2025', featured: true, img: '/portfolio/sanblasfull.jpg', href: 'https://sanblasfull.com', desc: 'Sitio multi-idioma para tours de un día a San Blas: selector de tour, reserva con depósito y soporte por WhatsApp. Diseñado para convertir al viajero en minutos.' },
  { t: 'Remodelaciones JG', did: 'Mostramos su portafolio de trabajos y facilitamos pedir una cotización por WhatsApp.', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Construcción', year: '2025', img: '/portfolio/remodelacionesjg.jpg', href: 'https://remodelacionesjg.com', desc: 'Web corporativa para una empresa de remodelación y construcción en Panamá, con portafolio de trabajos y captación de cotizaciones por WhatsApp.' },
  { t: 'Panama International Movers', did: 'Ordenamos más de 30 servicios y los destinos en un solo sitio, con cotización por WhatsApp.', caso: 'casos-de-exito/panama-international-movers', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Mudanzas', year: '2025', img: '/portfolio/panamainternationalmovers-2026.jpg', href: 'https://panamainternationalmovers.com', desc: 'Sitio para una empresa familiar de mudanzas internacionales desde 1990, con más de 30 servicios (marítimo, aéreo, autos, mascotas, oficinas), mapa de destinos y cotización por WhatsApp.' },
  { t: 'TramitaPa', did: 'Un sitio a medida enfocado en una sola acción: llevar la consulta de visa directo a WhatsApp.', caso: 'casos-de-exito/tramitapa', cat: 'corporativo', catLabel: 'Sitio a medida', tag: 'Trámites de visa', year: '2025', img: '/portfolio/tramitapa.jpg', href: 'https://tramitapa.com', desc: 'Sitio a medida para un servicio de trámites y asesoría de visa, orientado a convertir consultas directo por WhatsApp.' },
  { t: 'KL Contable', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Contabilidad', year: '2026', img: '/portfolio/klcontable.jpg', href: 'https://klcontable.com', desc: 'Web corporativa para una firma de contabilidad en Panamá, con diez servicios, guías por tipo de cliente, calculadora de Seguro Social y blog propio.' },
  { t: 'Max Impresiones', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Imprenta', year: '2026', img: '/portfolio/maximpresiones.jpg', href: 'https://maximpresiones.com', desc: 'Sitio para una imprenta y centro de bordados en San Miguelito, con cotizador de ocho servicios (papelería, gigantografía, bordados, planos, sublimación) y pedidos enviados directo por WhatsApp.' },
  { t: 'La Vida es Bella', cat: 'turismo', catLabel: 'Turismo · Hospedaje', tag: 'Hospedaje', year: '2026', img: '/portfolio/lavidaesbella.jpg', href: 'https://lavidaesbellapanama.com', desc: 'Sitio para una cabaña de montaña en Aires de Chicá, Chame, con calculadora de estadía, tarifas claras por día de la semana y reservas directas por WhatsApp.' },
  { t: 'Panamá Worldwide Express', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Logística', year: '2026', img: '/portfolio/panamaworldwideexpress.jpg', href: 'https://panamaworldwideexpress.com/es/', desc: 'Sitio para una empresa de mudanzas y carga internacional en Panamá, con once servicios (mudanzas, carga aérea, marítima y terrestre, aduana, relocation) y corredores por destino con tiempos estimados.' },
  { t: 'Grupo Viesa', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Consultoría', year: '2025', img: '/portfolio/grupoviesa.jpg', href: 'https://grupoviesa.com', desc: 'Web corporativa para una firma de consultoría estratégica y administrativa en Panamá, con 20 años de experiencia y seis servicios: estrategia, finanzas, contabilidad, planillas, RRHH y outsourcing.' },
  { t: 'CicloFrio', did: 'Organizamos sus siete servicios, las pólizas para empresas y la cobertura por zona.', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Climatización', year: '2026', img: '/portfolio/ciclofrio.jpg', href: 'https://ciclofrio.com', desc: 'Sitio para técnicos de aire acondicionado en Panamá, con siete servicios (mantenimiento, reparación, instalación, recarga de gas, refrigeración comercial), pólizas para empresas y cobertura por zona en Ciudad de Panamá.' },
  { t: 'WazaCRM', propio: true, cat: 'corporativo', catLabel: 'SaaS propio', tag: 'CRM', year: '2026', img: '/portfolio/wazacrm.jpg', href: 'https://wazacrm.com', desc: 'Sitio del CRM de WhatsApp con IA que desarrollamos nosotros mismos: agente que atiende, cotiza y cobra sobre la API oficial de Meta, con bandeja compartida y pipeline de ventas.' },
];

export const url = (slug: string) => (slug === '' ? '/' : `/${slug}/`);
export const wa = (text: string) =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;

/* Clave de servicio que viaja en /contacto/?servicio=… para preseleccionar el
   formulario. Solo la clave, nunca datos personales. */
export const planKey = (name: string) =>
  /landing/i.test(name) ? 'landing' : /pyme|empresarial|corporativ/i.test(name) ? 'pyme' : /commerce|tienda/i.test(name) ? 'ecommerce' : 'medida';

/* Guardia de build (D34): toda clave que devuelve planKey existe en el esquema del formulario. */
for (const k of ['landing', 'pyme', 'ecommerce', 'medida']) {
  if (!formulario.servicios.some((s) => s.clave === k)) throw new Error(`planKey devuelve "${k}" y no existe en src/data/formulario.json`);
}
