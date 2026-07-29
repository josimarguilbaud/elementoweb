/* ============================================================
   FUENTE ÚNICA DE VERDAD del sitio: identidad, navegación,
   precios y mapa keyword → URL (anti-canibalización).
   Cambiar un enlace aquí lo cambia en todo el sitio.
   ============================================================ */

export const site = {
  name: 'Elemento Web',
  domain: 'https://elementoweb.com',
  email: 'hola@elementoweb.com',
  phone: '+507 6162-2787',
  phoneRaw: '50761622787',
  locale: 'es_PA',
  tagline: 'Agencia de diseño web en Panamá. Sitios de alto rendimiento respaldados por desarrollo a medida e inteligencia artificial.',
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
  web3formsKey: '', // ⚠️ pega aquí tu Web3Forms access key (opción recomendada)
  endpoint: '',     // o la URL de tu webhook n8n / Formspree (si no usas Web3Forms)
  services: [
    'Diseño web / Sitio corporativo',
    'Tienda online / E-commerce',
    'Landing page',
    'Rediseño web',
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
   mantenimiento ........ mantenimiento web y hosting panamá
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
      { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas de Pago' },
      { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA para tu Web' },
      { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y Citas Online' },
    ],
  },
  {
    title: 'Crecimiento',
    hub: 'crecimiento',
    links: [
      { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
      { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps' },
      { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' },
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
];

export const marketing: NavLink[] = [
  { slug: 'marketing/google-ads-panama', label: 'Google Ads' },
  { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
  { slug: 'marketing/contenido-redes-sociales-panama', label: 'Contenido para Redes' },
  { slug: 'marketing/email-marketing-panama', label: 'Email Marketing' },
  { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp Marketing' },
  { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones (n8n)' },
];

export const saas: (NavLink & { blurb: string })[] = [
  { slug: 'saas/chatmantis', label: 'ChatMantis', blurb: 'Omnicanalidad con IA: WhatsApp, Instagram y web en una bandeja.' },
  { slug: 'saas/wapycrm', label: 'WapyCRM', blurb: 'CRM de ventas construido alrededor de WhatsApp.' },
  { slug: 'saas/cifrao', label: 'Cifrao', blurb: 'Software contable para empresas en Panamá.' },
];

/* Enlaces de texto del header (además de los 4 desplegables). Portafolio salió
   del top nav para no saturarlo con Marketing; sigue en footer, hero y related. */
export const navExtra: NavLink[] = [
  { slug: 'como-trabajamos', label: 'Cómo trabajamos' },
  { slug: 'blog', label: 'Blog' },
];

export const legal: NavLink[] = [
  { slug: 'politica-de-privacidad', label: 'Privacidad' },
  { slug: 'terminos', label: 'Términos' },
  { slug: 'contacto', label: 'Contacto' },
];

/* PRECIOS: confirmados por el cliente (jul 2026). Fuente única para todo el sitio. */
export const pricing = {
  note: 'Precios en USD. No incluyen ITBMS (7%); se aplicará según corresponda.',
  infra: 'Infraestructura anual desde $350: dominio, hosting cloud y certificado SSL. Mantenimiento web desde $59/mes.',
  tiers: [
    {
      name: 'Landing Page',
      price: '$550',
      features: ['Una página enfocada en conversión', 'Diseño a medida, responsive', 'Botón directo a WhatsApp', 'Entrega en 5 días hábiles'],
    },
    {
      name: 'Página PYME',
      price: '$950',
      featured: true,
      features: ['8 a 12 páginas internas', 'Página por servicio con SEO', 'Blog para posicionamiento', 'Panel autoadministrable'],
    },
    {
      name: 'E-commerce',
      price: '$1,500',
      features: ['Catálogo y carrito completos', 'Yappy y pasarelas locales', 'Gestión de inventario', 'Configuración de envíos'],
    },
  ],

  /* Franja premium bajo las tarjetas: el proyecto corporativo grande no es un
     paquete cerrado; se presenta como servicio a medida de alto valor. */
  custom: {
    eyebrow: 'Proyectos a medida',
    title: 'Páginas web corporativas a medida',
    price: '$2,900',
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
        price: '$225',
        unit: '/año',
        for: 'Sitios corporativos y landing pages con tráfico moderado.',
        features: ['Recursos compartidos optimizados', 'Ideal para sitios de contenido', 'Dominio y SSL incluidos'],
      },
      {
        name: 'Hosting Cloud',
        price: '$350',
        unit: '/año',
        featured: true,
        for: 'La opción recomendada para la mayoría de las empresas.',
        features: ['Recursos garantizados y escalables', 'Mejor rendimiento y estabilidad', 'Dominio y SSL incluidos'],
      },
      {
        name: 'VPS Dedicado',
        price: '$550',
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
        { label: 'Landing page', price: '$150' },
        { label: 'Web corporativa (6 a 8 páginas internas)', price: '$200' },
        { label: 'Web extensa (más de 8 páginas internas)', price: '$350' },
      ],
    },
    images: {
      name: 'Generación de imágenes con IA',
      price: '$100',
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
  { key: 'landing', label: 'Landing' },
  { key: 'turismo', label: 'Turismo' },
];
export const portfolio = [
  { t: 'San Blas Full', cat: 'turismo', catLabel: 'Turismo · Tours', tag: 'Turismo', year: '2025', featured: true, img: '/portfolio/sanblasfull.jpg', href: 'https://sanblasfull.com', desc: 'Sitio multi-idioma para tours de un día a San Blas: selector de tour, reserva con depósito y soporte por WhatsApp. Diseñado para convertir al viajero en minutos.' },
  { t: 'Remodelaciones JG', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Construcción', year: '2025', img: '/portfolio/remodelacionesjg.jpg', href: 'https://remodelacionesjg.com', desc: 'Web corporativa para una empresa de remodelación y construcción en Panamá, con portafolio de trabajos y captación de cotizaciones por WhatsApp.' },
  { t: 'Panama International Movers', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Mudanzas', year: '2025', img: '/portfolio/panamainternationalmovers.jpg', href: 'https://panamainternationalmovers.com', desc: 'Sitio para una empresa de mudanzas internacionales, enfocado en confianza, cobertura de servicios y solicitud de cotización.' },
  { t: 'TramitaPa', cat: 'landing', catLabel: 'Landing', tag: 'Trámites de visa', year: '2025', img: '/portfolio/tramitapa.jpg', href: 'https://tramitapa.com', desc: 'Landing de captación para un servicio de trámites y asesoría de visa, orientada a convertir consultas directo por WhatsApp.' },
  { t: 'KL Contable', cat: 'corporativo', catLabel: 'Web corporativa', tag: 'Contabilidad', year: '2025', img: '/portfolio/klcontable.jpg', href: 'https://klcontable.com', desc: 'Web corporativa para una firma de contabilidad en Panamá, con sus servicios por página y captación de nuevos clientes.' },
];

export const url = (slug: string) => (slug === '' ? '/' : `/${slug}/`);
export const wa = (text: string) =>
  `https://wa.me/${site.phoneRaw}?text=${encodeURIComponent(text)}`;
