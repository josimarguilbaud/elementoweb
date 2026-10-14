/* PÁGINA PILAR: "diseño web panamá" — la búsqueda principal del negocio.
   Anatomía v2 con el molde Kredit (D21, D44, D45): portada con foto, respuesta citable, los cuatro formatos,
   maquetas con proyectos reales del portafolio, comparación de 8 criterios, qué incluye, proceso, precios,
   tecnologías y 8 preguntas frecuentes. Title, H1 y canonical no cambian (D36). */
import type { PageData } from '../types';

const portafolio = (archivo: string, nombre: string) => ({ src: `/portfolio/${archivo}-800.webp`, alt: `Página de inicio de ${nombre} en escritorio, proyecto publicado de Elemento Web`, width: 800, height: 600 });
const movil = (archivo: string, nombre: string) => ({ src: `/images/ejemplos/movil-${archivo}.webp`, alt: `La web de ${nombre} en un celular`, width: 390, height: 844 });

export const disenoWebPanama: PageData[] = [
  {
    slug: 'diseno-web-panama',
    anatomia: 'v2',
    serviceKey: 'pyme',
    title: 'Diseño Web en Panamá | Páginas que Consiguen Clientes',
    description:
      'Diseño web en Panamá para empresas que quieren vender: sitios corporativos, tiendas online y landing pages. SEO, WhatsApp y precio cerrado desde $1,250.',
    h1: 'Diseño web en Panamá',
    breadcrumb: 'Diseño Web en Panamá',
    service: { type: 'Diseño y desarrollo web' },
    creds: true,
    lead: ['Sitios corporativos, tiendas online y landing pages hechos para que te encuentren en Google y te escriban.'],
    portada: {
      pie: 'Una web pensada para que el cliente te encuentre, entienda qué haces y te escriba en el mismo minuto.',
      riel: [
        { k: 'Sitio corporativo', v: 'desde $1,250' },
        { k: 'Tienda online', v: 'desde $1,950' },
        { k: 'Landing page', v: 'desde $550' },
        { k: 'Entrega', v: 'De 1 a 5 semanas según el formato' },
      ],
    },
    blocks: [
      {
        type: 'answer',
        fecha: '2026-10-13',
        text: 'Elemento Web diseña páginas web en Panamá para empresas que quieren conseguir clientes: sitios corporativos desde $1,250, tiendas online desde $1,950 y landing pages desde $550, con SEO técnico, WhatsApp y panel autoadministrable. Cada proyecto arranca con un diagnóstico sin costo y una cotización cerrada por escrito antes de empezar.',
      },
      {
        type: 'cards',
        h2: 'Los cuatro formatos de diseño web',
        intro: 'No todo negocio necesita lo mismo. Elegimos el formato según tu objetivo, no según lo que sea más cómodo de vender.',
        items: [
          { h3: 'Diseño web corporativo · desde $1,250', text: 'El sitio institucional que tus clientes revisan antes de firmar: una página por servicio, estructura clara y panel autoadministrable. Para empresas B2B, despachos profesionales y proveedores.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Ver diseño corporativo' } },
          { h3: 'Tienda online · desde $1,950', text: 'Catálogo, carrito, Yappy y pasarelas locales. Una tienda pensada para vender en Panamá, con la logística y los pagos que tus clientes ya usan.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Ver tiendas online' } },
          { h3: 'Landing page · desde $550', text: 'Una página, una oferta, una acción: el destino correcto para tu pauta en Google y Meta y tus campañas de WhatsApp.', link: { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Ver landing pages' } },
          { h3: 'Rediseño web', text: 'Tu sitio ya existe pero no genera clientes. Lo auditamos, reconstruimos su estructura y planificamos las redirecciones para cuidar el posicionamiento que ya ganaste.', link: { slug: 'servicios/redisenio-web-panama', label: 'Ver rediseño web' } },
        ],
      },
      {
        type: 'ejemplos',
        h2: 'Webs que ya entregamos',
        intro: 'Proyectos publicados del portafolio, en escritorio y en celular. Cada uno tiene un trabajo distinto: llevar la consulta a WhatsApp, ordenar muchos servicios o vender un tour en minutos.',
        columnas: 2,
        items: [
          { tipo: 'web', dominio: 'tramitapa.com', escritorio: portafolio('tramitapa', 'TramitaPa'), movil: movil('tramitapa', 'TramitaPa'), pie: 'TramitaPa · sitio a medida enfocado en una sola acción: llevar la consulta de visa a WhatsApp.' },
          { tipo: 'web', dominio: 'panamainternationalmovers.com', escritorio: portafolio('panamainternationalmovers-2026', 'Panama International Movers'), movil: movil('movers', 'Panama International Movers'), pie: 'Panama International Movers · más de 30 servicios y destinos ordenados en un solo sitio, con cotización por WhatsApp.' },
          { tipo: 'web', dominio: 'ciclofrio.com', escritorio: portafolio('ciclofrio', 'CicloFrio'), movil: movil('ciclofrio', 'CicloFrio'), pie: 'CicloFrio · siete servicios de aire acondicionado, pólizas para empresas y cobertura por zona.' },
          { tipo: 'web', dominio: 'sanblasfull.com', escritorio: portafolio('sanblasfull', 'San Blas Full'), movil: movil('sanblasfull', 'San Blas Full'), pie: 'San Blas Full · selector de tours y reserva con depósito, en varios idiomas.' },
        ],
        nota: 'Capturas reales de proyectos publicados, tomadas el 13 de octubre de 2026. Las cifras de resultados de cada cliente se publican solo con su autorización.',
      },
      {
        type: 'receipt',
        titulo: 'Diseño web',
        fecha: '2026-10-13',
        precio: { estado: 'confirmado', desde: '$550', unidad: 'por proyecto (landing page)' },
        plazo: 'De 1 semana (landing) a 5 semanas (tienda online)',
        medicionId: 'pilar-lcp',
        pie: ['Dominio, hosting y mantenimiento se pagan aparte.', 'Precios en dólares, sin ITBMS (7%).'],
      },
      {
        type: 'compare',
        h2: 'Por qué con nosotros',
        intro: 'Ocho criterios que puedes verificar en esta página y pedirle a cualquier proveedor. Usa la última columna para comparar con tu otra cotización.',
        otraCotizacion: true,
        criterios: [
          { criterio: 'Precio publicado', nosotros: 'Sí: landing desde $550, corporativo desde $1,250, tienda desde $1,950', fuente: { slug: 'precios', label: 'Precios' } },
          { criterio: 'Cotización', nosotros: 'Cerrada y por escrito antes de empezar' },
          { criterio: 'Plazo', nosotros: 'De 1 a 5 semanas según el formato, desde que recibimos el contenido' },
          { criterio: 'Diseño', nosotros: 'A medida sobre tu marca, sin plantillas revendidas' },
          { criterio: 'SEO técnico incluido', nosotros: 'Metadatos, datos estructurados, sitemap y URLs limpias' },
          { criterio: 'WhatsApp y formularios', nosotros: 'Botones con el mensaje escrito y formularios conectados' },
          { criterio: 'Administración', nosotros: 'Panel autoadministrable y capacitación grabada' },
          { criterio: 'Medición', nosotros: 'Google Analytics y Search Console desde el día uno' },
        ],
      },
      {
        type: 'includes',
        h2: 'Qué incluye siempre, sin costo extra',
        intro: 'No son mejoras opcionales que aparecen en la factura al final: vienen en todo proyecto de diseño web que entregamos.',
        incluye: [
          { t: 'Diseño a medida', d: 'Sobre tu marca, sin plantillas revendidas ni constructores pesados.' },
          { t: 'Responsivo de verdad', d: 'Pensado primero para el celular, que es donde te buscan, y revisado en tablet y escritorio.' },
          { t: 'SEO técnico', d: 'Metadatos, datos estructurados, sitemap, URLs limpias y una página por servicio.' },
          { t: 'Velocidad', d: 'Imágenes optimizadas y Core Web Vitals cuidados desde el diseño.' },
          { t: 'WhatsApp con el mensaje escrito', d: 'Botones que abren la conversación con el servicio ya elegido.' },
          { t: 'Formularios conectados', d: 'Las consultas llegan a tu correo corporativo o a tu CRM.' },
          { t: 'Seguridad', d: 'Certificado SSL y sitio servido de forma segura.' },
          { t: 'Medición desde el día uno', d: 'Google Analytics y Search Console configurados y a tu nombre.' },
        ],
        entregables: ['Sitio publicado en tu dominio', 'Panel autoadministrable con capacitación grabada', 'Cuentas de Analytics y Search Console a tu nombre', 'Lista de páginas, textos y accesos entregada por escrito'],
        noIncluye: ['Dominio y hosting (te asesoramos y los configuramos)', 'Mantenimiento mensual, que es un plan aparte desde $99 al mes', 'Redacción de contenido y fotografía, si no los tienes (se cotizan aparte)', 'Licencias de terceros, como temas o plugins de pago'],
        medimos: ['Velocidad (LCP)', 'Estabilidad (CLS)', 'Consultas por WhatsApp y formulario', 'Búsquedas en Search Console'],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu proyecto',
        intro: 'Cuatro etapas con hitos claros. Siempre sabes en qué punto está tu web.',
        items: [
          { h3: 'Diagnóstico y estrategia', text: 'Entendemos tu negocio, tu cliente ideal y las búsquedas que te traen ventas. Definimos objetivos medibles y la arquitectura del sitio. De aquí sale tu propuesta de precio cerrado.' },
          { h3: 'Diseño y contenido', text: 'Diseñamos a medida sobre tu marca y estructuramos el contenido contigo, servicio por servicio, para que cada página responda a una búsqueda real.' },
          { h3: 'Desarrollo e integraciones', text: 'Construimos con la tecnología correcta para tu caso, conectamos WhatsApp, formularios, Yappy, chatbot o reservas según necesites, y optimizamos velocidad y SEO técnico.' },
          { h3: 'Lanzamiento y acompañamiento', text: 'Publicamos, medimos, te capacitamos con video grabado para que administres tu sitio y quedamos disponibles con planes de mantenimiento y crecimiento.' },
        ],
      },
      {
        type: 'pricing',
        h2: 'Precios de diseño web en Panamá',
        intro: 'Precios de partida transparentes. Cada proyecto se cotiza cerrado según páginas, funciones e integraciones, siempre por escrito antes de empezar.',
      },
      {
        type: 'prose',
        h2: 'Qué es (y qué no es) un buen diseño web en Panamá',
        paragraphs: [
          'En Panamá abundan las páginas hechas para verse, no para funcionar: se ven modernas, pero no aparecen en Google, no cargan rápido en el celular y no le dicen al visitante qué hacer. El resultado es una web que existe pero no trabaja.',
          'Un buen diseño web parte de la pregunta correcta: <strong>¿qué necesita lograr tu negocio con este sitio?</strong> Conseguir cotizaciones, vender en línea, llenar una agenda de citas, generar confianza antes de una reunión. La respuesta define la estructura, el contenido y cada botón.',
          'Por eso todo lo que construimos se sostiene en tres pilares: <strong>que te encuentren</strong> (SEO técnico y contenido para las búsquedas que hace tu cliente), <strong>que entiendan</strong> (mensaje claro en los primeros segundos, jerarquía visual, velocidad) y <strong>que actúen</strong> (un siguiente paso obvio: escribir por WhatsApp, comprar, agendar).',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué el SEO local en Panamá lo cambia todo',
        paragraphs: [
          'La mayoría de tus clientes no busca "la mejor empresa del mundo": busca "abogado en Panamá", "restaurante en Costa del Este", "taller mecánico cerca de mí". Son búsquedas con intención de compra inmediata, y quien aparece de primero se lleva el cliente.',
          'Trabajamos el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> como parte del diseño, no como un añadido: estructuramos la web para esas búsquedas geolocalizadas y te ayudamos con tu ficha de Google Business Profile. A diferencia de la pauta, no deja de traer resultados cuando dejas de pagar.',
        ],
      },
      {
        type: 'cards',
        h2: 'Con qué tecnología construimos',
        intro: 'Recomendamos la herramienta según tu caso, con argumentos, no por comodidad nuestra.',
        items: [
          { h3: 'WordPress', text: 'Cuando tu equipo publica contenido con frecuencia y necesita autonomía total. Temas propios y ligeros, sin constructores pesados.', link: { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web WordPress' } },
          { h3: 'Shopify', text: 'Cuando quieres vender en línea rápido sin administrar servidores. La plataforma se encarga de la infraestructura; nosotros de que tu tienda convierta.', link: { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Diseño web Shopify' } },
          { h3: 'Desarrollo a medida', text: 'Cuando el rendimiento, las integraciones o el producto mismo exigen código propio: el mismo stack con el que construimos nuestros SaaS.', link: { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida' } },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué una agencia panameña con producto propio?',
        paragraphs: [
          'Cualquiera puede montar un sitio con una plantilla en un fin de semana. Lo difícil, y lo que mueve tu negocio, es la estrategia: qué páginas crear, cómo estructurarlas, qué integrar y cómo posicionarlas.',
          'Desarrollamos y operamos software propio en producción, como <a href="/saas/wazacrm/">WazaCRM</a> y <a href="/saas/nouscrm/">NousCRM</a>. Eso significa que resolvemos a diario los mismos problemas de rendimiento, integración y escala que tu web podría necesitar mañana. Y hablas con quien construye: las decisiones se toman rápido y el acompañamiento después del lanzamiento es real.',
          'También diseñamos por rubro: mira cómo cambia una web para <a href="/industrias/diseno-web-clinicas-salud-panama/">clínicas</a>, <a href="/industrias/diseno-web-constructoras-panama/">constructoras</a> o <a href="/industrias/diseno-web-restaurantes-panama/">restaurantes</a> en el <a href="/industrias/">índice de industrias</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web en Panamá',
        items: [
          { q: '¿Cuánto cuesta una página web en Panamá?', a: 'Depende del formato: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> parte desde $550, un <a href="/servicios/diseno-web-corporativo-panama/">sitio corporativo</a> desde $1,250 y una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a> desde $1,950. Toda cotización es cerrada y por escrito antes de empezar, según tus páginas e integraciones.' },
          { q: '¿En cuánto tiempo tienen lista mi web?', a: 'Una landing sencilla puede estar en 1 semana; un sitio corporativo entre 2 y 3 semanas; un e-commerce entre 3 y 5 semanas. El reloj arranca cuando recibimos tu contenido base. Si no lo tienes, te ayudamos a producirlo.' },
          { q: '¿La página aparecerá en Google?', a: 'Todo sitio se entrega con SEO técnico completo y estructura optimizada, que es la base para posicionar. Aparecer de primero en búsquedas competidas requiere además trabajo continuo de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y contenido</a>, que ofrecemos como servicio de crecimiento.' },
          { q: '¿Puedo administrar la web yo mismo después?', a: 'Sí. Entregamos un panel autoadministrable y una capacitación grabada. Cambiar textos, fotos, precios o publicar en el blog no requiere llamar a un programador.' },
          { q: '¿Trabajan con negocios fuera de la Ciudad de Panamá?', a: 'Sí. Trabajamos con clientes de todo el país y con negocios panameños que venden al exterior. El proceso es remoto, con reuniones por videollamada y WhatsApp.' },
          { q: '¿Incluye el dominio y el hosting?', a: 'Te asesoramos y configuramos ambos: ve <a href="/crecimiento/hosting-infraestructura-panama/">hosting e infraestructura</a> para los planes. Aparte, el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento desde $99 al mes</a> mantiene tu sitio actualizado, respaldado y monitoreado.' },
          { q: '¿Qué pasa si ya tengo una web pero no funciona?', a: 'Ese es el caso de nuestro servicio de <a href="/servicios/redisenio-web-panama/">rediseño web</a>: auditamos lo que tienes, reconstruimos lo que no funciona y planificamos las redirecciones para cuidar el posicionamiento que ya ganaste.' },
          { q: '¿Cuándo NO necesitas contratar una agencia?', a: 'Si vendes por Instagram, tu ticket es bajo y tu cliente decide en dos mensajes, una página propia no te va a cambiar el negocio todavía. La web se paga cuando el cliente te investiga antes de comprar, cuando compites por búsquedas en Google, o cuando contestar lo mismo veinte veces al día ya te está costando ventas.' },
        ],
      },
      { type: 'form', h2: 'Cotiza tu página web', intro: 'Cuéntanos qué necesita tu negocio: te damos un diagnóstico honesto y una propuesta con precio cerrado, sin compromiso.' },
      {
        type: 'related',
        h2: 'Explora más',
        items: [
          { slug: 'servicios', label: 'Todos los servicios' },
          { slug: 'precios', label: 'Precios' },
          { slug: 'industrias', label: 'Diseño web por industria' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento' },
          { slug: 'portafolio', label: 'Portafolio' },
          { slug: 'blog/cuando-hacer-rediseno-pagina-web', label: 'Cuándo rediseñar tu web' },
        ],
      },
    ],
    cta: {
      h2: 'Tu próxima web empieza con una conversación',
      text: 'Cuéntanos qué necesita tu negocio. Te damos un diagnóstico honesto y una propuesta con precio cerrado, sin compromiso.',
      wa: 'Hola, quiero cotizar el diseño de mi página web en Panamá.',
    },
  },
];
