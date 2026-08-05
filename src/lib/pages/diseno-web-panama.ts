/* PÁGINA PILAR: "diseño web panamá" — la búsqueda principal del negocio.
   Reúne los 4 formatos de diseño web, el proceso, tecnologías, precios y FAQ
   en una sola página autoridad que enlaza a cada silo. Contenido extenso a
   propósito: es la página que debe posicionar para el término más competido. */
import type { PageData } from '../types';

export const disenoWebPanama: PageData[] = [
  {
    slug: 'diseno-web-panama',
    title: 'Diseño Web en Panamá | Páginas que Consiguen Clientes — Elemento Web',
    description:
      'Diseño web en Panamá para empresas y negocios que quieren vender: sitios corporativos, tiendas online, landing pages y desarrollo a medida. SEO, WhatsApp y panel autoadministrable. Cotización cerrada desde $950.',
    h1: 'Diseño web en Panamá',
    breadcrumb: 'Diseño Web en Panamá',
    service: { type: 'Diseño y desarrollo web' },
    creds: true,
    heroImage: {
      src: '/images/hub/diseno-web-panama.jpg',
      alt: 'Equipo de diseño web en Panamá trabajando en un proyecto',
    },
    lead: [
      'Diseñamos y desarrollamos páginas web en Panamá pensadas para una sola cosa: convertir visitas en clientes. No plantillas compradas ni sitios bonitos que nadie encuentra, sino web con estructura de venta, posicionamiento en Google y un camino claro hacia tu WhatsApp.',
      'Somos una agencia panameña con equipo 100% interno y tres productos SaaS propios en producción. Eso significa que la misma tecnología con la que construimos software a escala está detrás de cada sitio que entregamos. Trabajamos con empresas, comercios y profesionales de todo el país —Ciudad de Panamá, Panamá Oeste, Chiriquí, Coclé, Colón— y con negocios panameños que venden al exterior.',
      'Todo proyecto arranca con un diagnóstico sin costo y termina con una propuesta de precio cerrado, por escrito, antes de que pagues el primer dólar. Sin sorpresas ni cargos ocultos a mitad del camino.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es (y qué no es) un buen diseño web en Panamá',
        paragraphs: [
          'En Panamá abundan las páginas hechas para verse, no para funcionar. Se ven modernas, tienen animaciones, pero no aparecen en Google, no cargan rápido en el celular y no le dicen al visitante qué hacer. El resultado es una web que existe pero no trabaja: nadie la encuentra y quien llega, se va.',
          'Un buen diseño web parte de la pregunta correcta: <strong>¿qué necesita lograr tu negocio con este sitio?</strong> Conseguir cotizaciones, vender en línea, llenar una agenda de citas, generar confianza antes de una reunión. La respuesta define la estructura, el contenido y cada botón. El diseño es la consecuencia de esa estrategia, no el punto de partida.',
          'Por eso todo lo que construimos se sostiene en tres pilares no negociables: <strong>que te encuentren</strong> (SEO técnico y contenido optimizado para las búsquedas que hace tu cliente), <strong>que entiendan</strong> (mensaje claro en los primeros segundos, jerarquía visual, velocidad de carga) y <strong>que actúen</strong> (un siguiente paso obvio: escribir por WhatsApp, comprar, agendar). Sin esos tres pilares, cualquier sitio es decoración cara.',
        ],
      },
      {
        type: 'cards',
        h2: 'Los cuatro formatos de diseño web que ofrecemos',
        intro: 'No todo negocio necesita lo mismo. Elegimos el formato según tu objetivo, no según lo que sea más cómodo de vender.',
        items: [
          { h3: 'Diseño web corporativo', text: 'El sitio institucional que tus clientes revisan antes de firmar. Estructura clara, una página por servicio y panel autoadministrable. Ideal para empresas B2B, despachos profesionales y proveedores.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Ver diseño corporativo' } },
          { h3: 'Tiendas online y e-commerce', text: 'Catálogo, carrito, Yappy y pasarelas locales. Una tienda pensada para vender en Panamá, con logística y pagos que tus clientes ya usan a diario.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Ver tiendas online' } },
          { h3: 'Landing pages de alta conversión', text: 'Una página, una oferta, una acción. El destino correcto para tu pauta en Google y Meta y tus campañas de WhatsApp. Cada elemento empuja hacia la conversión.', link: { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Ver landing pages' } },
          { h3: 'Rediseño web', text: 'Tu sitio ya existe pero no genera clientes. Lo auditamos, reconstruimos su estructura y conservamos —o recuperamos— el posicionamiento que ya habías ganado en Google.', link: { slug: 'servicios/redisenio-web-panama', label: 'Ver rediseño web' } },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu proyecto',
        intro: 'Un proceso de cuatro etapas, con hitos claros y sin desaparecer a mitad del camino. Tú siempre sabes en qué punto está tu web.',
        items: [
          { h3: 'Diagnóstico y estrategia', text: 'Entendemos tu negocio, tu cliente ideal y las búsquedas que te traen ventas. Definimos objetivos medibles y la arquitectura del sitio. De aquí sale tu propuesta de precio cerrado.' },
          { h3: 'Diseño y contenido', text: 'Diseñamos a medida sobre tu marca y estructuramos el contenido contigo, servicio por servicio, para que cada página responda a una intención de búsqueda real.' },
          { h3: 'Desarrollo e integraciones', text: 'Construimos con la tecnología correcta para tu caso, conectamos WhatsApp, formularios, Yappy, chatbot o reservas según necesites, y optimizamos velocidad y SEO técnico.' },
          { h3: 'Lanzamiento y acompañamiento', text: 'Publicamos, medimos, te capacitamos con video grabado para que administres tu sitio y quedamos disponibles con planes de mantenimiento y crecimiento.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué incluye siempre, sin costo extra',
        intro: 'Estas no son mejoras opcionales que aparecen en la factura al final. Vienen en todo proyecto de diseño web que entregamos.',
        items: [
          'Diseño 100% a medida sobre tu marca, sin plantillas revendidas',
          'Sitio responsivo, impecable en celular, tablet y escritorio',
          'SEO técnico: metadatos, datos estructurados, sitemap y URLs limpias',
          'Optimización de velocidad de carga y core web vitals',
          'Botones directos a WhatsApp con el mensaje ya escrito',
          'Formularios conectados a tu correo corporativo',
          'Certificado SSL y sitio servido de forma segura',
          'Panel autoadministrable con capacitación grabada',
          'Google Analytics y Search Console configurados desde el día uno',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué el SEO local en Panamá lo cambia todo',
        paragraphs: [
          'La mayoría de tus clientes potenciales no busca "la mejor empresa del mundo". Busca "abogado en Panamá", "restaurante en Costa del Este", "taller mecánico cerca de mí". Son búsquedas con intención de compra inmediata, y quien aparece de primero se lleva el cliente.',
          'Trabajamos el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> como parte central del diseño, no como un añadido. Estructuramos tu web para responder a esas búsquedas geolocalizadas, optimizamos tu ficha de Google Business Profile y construimos las señales que Google necesita para mostrarte en el mapa y en los primeros resultados.',
          'Para negocios con puerta abierta —comercios, consultorios, restaurantes, servicios a domicilio— el SEO local suele ser el canal número uno de clientes nuevos. Y a diferencia de la pauta, no deja de traer resultados cuando dejas de pagar: es un activo que se acumula con el tiempo.',
        ],
      },
      {
        type: 'cards',
        h2: 'Con qué tecnología construimos',
        intro: 'Recomendamos la herramienta según tu caso, con argumentos, no por comodidad nuestra. Estas son las tres rutas más comunes.',
        items: [
          { h3: 'WordPress', text: 'Cuando tu equipo publica contenido con frecuencia y necesita autonomía total. Temas propios y ligeros, sin constructores pesados que ralentizan el sitio.', link: { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web WordPress' } },
          { h3: 'Shopify', text: 'Cuando quieres vender en línea rápido sin administrar servidores. La plataforma se encarga de la infraestructura; nosotros de que tu tienda convierta.', link: { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Diseño web Shopify' } },
          { h3: 'Desarrollo a medida', text: 'Cuando el rendimiento, las integraciones o el producto mismo exigen código propio. El mismo stack con el que construimos nuestros SaaS.', link: { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida' } },
        ],
      },
      {
        type: 'statement',
        text: 'No vendemos páginas web. Construimos el canal de clientes más rentable que tu negocio',
        strong: 'va a tener.',
      },
      {
        type: 'pricing',
        h2: 'Precios de diseño web en Panamá',
        intro: 'Precios de partida transparentes. Cada proyecto se cotiza cerrado según páginas, funciones e integraciones —siempre por escrito antes de empezar.',
      },
      {
        type: 'prose',
        h2: '¿Por qué elegir una agencia panameña con producto propio?',
        paragraphs: [
          'Cualquiera puede montar un sitio con una plantilla en un fin de semana. Lo difícil —y lo que realmente mueve tu negocio— es la estrategia detrás: qué páginas crear, cómo estructurarlas, qué integrar, cómo posicionarlas. Ahí es donde una agencia con experiencia real marca la diferencia.',
          'Somos <a href="/nosotros/">Meta Verified Tech Provider</a> y desarrollamos tres SaaS propios en producción: un CRM con WhatsApp, un chatbot con IA y una plataforma de gestión. Eso no es un dato decorativo: significa que resolvemos a diario los mismos problemas de rendimiento, integración y escala que tu web podría necesitar mañana.',
          'Y como somos equipo interno, no subcontratamos tu proyecto a terceros ni desapareces en una cola de tickets. Hablas con quien construye, las decisiones se toman rápido y el acompañamiento después del lanzamiento es real.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web en Panamá',
        items: [
          { q: '¿Cuánto cuesta una página web en Panamá?', a: 'Depende del formato: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> parte desde $550, un <a href="/servicios/diseno-web-corporativo-panama/">sitio corporativo</a> desde $950 y una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a> desde $1,500. Toda cotización es cerrada y por escrito antes de empezar, según tus páginas e integraciones.' },
          { q: '¿En cuánto tiempo tienen lista mi web?', a: 'Una landing sencilla puede estar en 1 semana; un sitio corporativo entre 2 y 3 semanas; un e-commerce entre 3 y 5 semanas. El reloj arranca cuando recibimos tu contenido base. Si no lo tienes, te ayudamos a producirlo.' },
          { q: '¿La página aparecerá en Google?', a: 'Todo sitio se entrega con SEO técnico completo y estructura optimizada, que es la base para posicionar. Aparecer de primero en búsquedas competidas requiere además trabajo continuo de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y contenido</a>, que ofrecemos como servicio de crecimiento.' },
          { q: '¿Puedo administrar la web yo mismo después?', a: 'Sí. Entregamos un panel autoadministrable y una capacitación grabada. Cambiar textos, fotos, precios o publicar en el blog no requiere llamar a un programador.' },
          { q: '¿Trabajan con negocios fuera de la Ciudad de Panamá?', a: 'Sí. Trabajamos con clientes de todo el país y con negocios panameños que venden al exterior. El proceso es 100% remoto, con reuniones por videollamada y WhatsApp.' },
          { q: '¿Incluye el dominio y el hosting?', a: 'Te asesoramos y configuramos ambos. El hosting y el mantenimiento se manejan con un <a href="/crecimiento/mantenimiento-hosting-web-panama/">plan mensual desde $59</a> que mantiene tu sitio actualizado, respaldado y monitoreado.' },
          { q: '¿Qué pasa si ya tengo una web pero no funciona?', a: 'Ese es exactamente el caso de nuestro servicio de <a href="/servicios/redisenio-web-panama/">rediseño web</a>: auditamos lo que tienes, reconstruimos lo que no funciona y conservamos el posicionamiento que ya ganaste.' },
        ],
      },
      {
        type: 'related',
        h2: 'Explora más',
        items: [
          { slug: 'servicios', label: 'Todos los servicios' },
          { slug: 'industrias', label: 'Diseño web por industria' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento' },
          { slug: 'portafolio', label: 'Portafolio' },
          { slug: 'contacto', label: 'Cotizar mi proyecto' },
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
