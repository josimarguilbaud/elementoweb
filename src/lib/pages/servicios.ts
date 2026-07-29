/* SILO SERVICIOS: la puerta principal de venta (diseño web). */
import type { PageData } from '../types';

const parent = { slug: 'servicios', label: 'Servicios' };

/* Catálogo completo del hub: agrupa TODO lo que ofrece la agencia (los 4 formatos
   de diseño web + tecnologías + funcionalidades + crecimiento + SaaS propios) en
   una sola vista. Los textos se reutilizan de los hubs de cada silo (misma copy,
   distinto contexto: aquí sirve de directorio; allá es la página dedicada). */
const catalogGroups = [
  {
    title: 'Diseño Web',
    hub: 'servicios',
    items: [
      { h3: 'Diseño web corporativo', text: 'El sitio institucional que tus clientes revisan antes de firmar contigo. Estructura clara, páginas por servicio y panel autoadministrable.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' } },
      { h3: 'Tiendas online y e-commerce', text: 'Catálogo, carrito, Yappy y pasarelas locales. Una tienda pensada para vender en Panamá, no una traducción de un template extranjero.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' } },
      { h3: 'Landing pages de alta conversión', text: 'Una página, una oferta, una acción. El destino correcto para tu pauta y tus campañas de WhatsApp.', link: { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing Pages' } },
      { h3: 'Rediseño web', text: 'Tu sitio existe pero no genera clientes. Lo auditamos, lo reconstruimos y conservamos el posicionamiento que ya ganaste.', link: { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' } },
    ],
  },
  {
    title: 'Tecnologías',
    hub: 'tecnologias',
    items: [
      { h3: 'WordPress', text: 'Cuando tu equipo publica contenido con frecuencia y necesita autonomía total. Temas propios, sin constructores pesados.', link: { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web WordPress' } },
      { h3: 'Shopify', text: 'Cuando quieres vender rápido sin administrar servidores. La plataforma se encarga de la infraestructura; nosotros de que convierta.', link: { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Diseño web Shopify' } },
      { h3: 'A medida con Vue y React', text: 'Cuando el rendimiento, las integraciones o el producto mismo exigen código propio. El mismo stack de nuestros SaaS.', link: { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida' } },
    ],
  },
  {
    title: 'Funcionalidades',
    hub: 'funcionalidades',
    items: [
      { h3: 'Yappy y pasarelas de pago', text: 'Cobra en tu web como pagan los panameños: Botón de Pago Yappy oficial más tarjetas. Sin transferencias por captura de pantalla.', link: { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas' } },
      { h3: 'Chatbot con IA', text: 'Un asistente entrenado con tu información que responde en tu web, WhatsApp e Instagram las 24 horas. Con ChatMantis, nuestro producto.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' } },
      { h3: 'Reservas y citas online', text: 'Tu cliente agenda solo, con disponibilidad real, recordatorios automáticos y pago anticipado si lo necesitas.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' } },
    ],
  },
  {
    title: 'Crecimiento',
    hub: 'crecimiento',
    items: [
      { h3: 'SEO y posicionamiento', text: 'Contenido y autoridad para competir por las búsquedas que traen clientes, no solo visitas.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' } },
      { h3: 'SEO local y Google Maps', text: 'Aparecer en el mapa cuando buscan tu servicio cerca. Para negocios con puerta abierta, es el canal número uno.', link: { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' } },
      { h3: 'Mantenimiento y hosting', text: 'Actualizaciones, respaldos verificados y monitoreo desde $59/mes. Tu sitio no se cae ni envejece.', link: { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' } },
    ],
  },
  {
    title: 'Marketing y Pauta',
    hub: 'marketing',
    items: [
      { h3: 'Google Ads', text: 'Aparece cuando tu cliente busca lo que vendes. Gestión de campañas de búsqueda, display y remarketing.', link: { slug: 'marketing/google-ads-panama', label: 'Google Ads' } },
      { h3: 'Facebook e Instagram Ads', text: 'Campañas en Meta para descubrimiento, captación y ventas, con creativos que detienen el scroll.', link: { slug: 'marketing/facebook-instagram-ads-panama', label: 'Meta Ads' } },
      { h3: 'Contenido, Email y Automatización', text: 'Contenido para redes con Reels, email marketing, WhatsApp masivo y automatizaciones con n8n.', link: { slug: 'marketing', label: 'Ver todo Marketing' } },
    ],
  },
  {
    title: 'Nuestros SaaS',
    hub: 'saas',
    items: [
      { h3: 'ChatMantis', text: 'Omnicanalidad con IA: WhatsApp, Instagram y el chat de tu web en una sola bandeja, con asistentes entrenados con tu información.', link: { slug: 'saas/chatmantis', label: 'Conocer ChatMantis' } },
      { h3: 'WapyCRM', text: 'CRM de ventas construido alrededor de WhatsApp: embudos, seguimiento automático y cierre asistido.', link: { slug: 'saas/wapycrm', label: 'Conocer WapyCRM' } },
      { h3: 'Cifrao', text: 'Software contable para empresas en Panamá: facturación, conciliación y cuentas por cobrar que avisan solas.', link: { slug: 'saas/cifrao', label: 'Conocer Cifrao' } },
    ],
  },
];

export const servicios: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'servicios',
    title: 'Servicios de Diseño Web en Panamá | Elemento Web',
    description: 'Todo lo que ofrece Elemento Web en un solo lugar: diseño web, tecnologías, funcionalidades, crecimiento y SaaS propios para empresas en Panamá.',
    h1: 'Servicios de diseño web',
    breadcrumb: 'Servicios',
    heroImage: { src: 'https://picsum.photos/seed/equipo-diseno-web-panama/1200/675', alt: 'Equipo de diseño revisando una maqueta de página web en pantalla' },
    lead: [
      'Diseño web, tecnología, funcionalidades, crecimiento y software propio: todo lo que ofrece la agencia, en un solo lugar.',
      'No partimos de una plantilla: partimos de la pregunta de negocio. ¿Necesitas proyectar solidez, vender productos, convertir una campaña, automatizar tu atención o posicionarte en Google? Cada respuesta tiene su propia página, con su propio alcance y precio.',
    ],
    blocks: [
      {
        type: 'catalog',
        h2: 'Todo lo que ofrecemos',
        intro: 'Agrupado por categoría. Cada tarjeta lleva a su página dedicada, con el detalle completo.',
        groups: catalogGroups,
      },
      { type: 'pricing', h2: '¿Cuánto cuesta?', intro: 'Rangos reales según alcance. Antes de empezar recibes una <strong>cotización cerrada</strong>, sin costos sorpresa a mitad del proyecto.' },
      { type: 'extras', h2: 'Hosting y servicios adicionales', intro: 'Todo lo que va aparte del diseño, claro desde el inicio: el hosting según tu proyecto y los servicios que suman al precio base.' },
      { type: 'production', h2: 'Contenido e imágenes con IA' },
      {
        type: 'steps',
        h2: 'Cómo trabajamos',
        intro: 'Cuatro etapas con entregas verificables. Sin misterio y sin desapariciones.',
        items: [
          { h3: 'Diagnóstico', text: 'Entendemos tu negocio, a quién le vendes y qué acción debe tomar el visitante.' },
          { h3: 'Estructura y diseño', text: 'Arquitectura de la información y pantallas aprobadas antes de programar.' },
          { h3: 'Desarrollo', text: 'SEO técnico y velocidad desde el primer día, no como parche final.' },
          { h3: 'Lanzamiento', text: 'Publicamos, conectamos analítica y capacitamos a tu equipo.' },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué incluye cada servicio?', a: 'Cada página de servicio detalla su alcance exacto. En todos los casos: diseño a medida (sin plantillas compradas), responsive verificado, SEO técnico, formularios conectados a WhatsApp y capacitación para tu equipo.' },
          { q: '¿El dominio y el hosting van incluidos?', a: 'La infraestructura anual parte desde $350 (hosting cloud) e incluye dominio y certificado SSL; el compartido desde $225 y el VPS desde $550, según el proyecto. El dominio y todos los accesos quedan a nombre de tu empresa. Ver <a href="/crecimiento/mantenimiento-hosting-web-panama/">mantenimiento y hosting</a>.' },
          { q: '¿Trabajan con empresas fuera de la ciudad?', a: 'Sí. El proceso es 100% digital: reuniones por videollamada, entregas en ambientes de prueba y pagos por transferencia, tarjeta o Yappy.' },
          { q: '¿Puedo ver avances durante el proyecto?', a: 'Siempre. Cada etapa termina en algo que puedes revisar: la estructura, el diseño de pantallas y el sitio en un ambiente de prueba antes de publicar.' },
        ],
      },
      {
        type: 'related',
        h2: 'Antes de decidir',
        items: [
          { slug: 'como-trabajamos', label: 'Cómo trabajamos' },
          { slug: 'industrias', label: 'Diseño web por industria' },
          { slug: 'portafolio', label: 'Portafolio' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Guía de precios 2026' },
        ],
      },
    ],
  },

  /* ---------- CORPORATIVO ---------- */
  {
    slug: 'servicios/diseno-web-corporativo-panama',
    parent,
    title: 'Diseño Web Corporativo en Panamá | Sitios que Generan Confianza',
    description: 'Diseño web corporativo en Panamá para empresas que necesitan proyectar solidez: estructura clara, SEO por servicio y panel autoadministrable.',
    h1: 'Diseño web corporativo en Panamá',
    breadcrumb: 'Diseño Web Corporativo',
    service: { type: 'Diseño web corporativo' },
    lead: [
      'El sitio que tus clientes revisan antes de firmar contigo. Si no proyecta la solidez de tu empresa, te está costando contratos.',
      'Un buen sitio corporativo en Panamá debe lograr tres cosas: que te encuentren en Google cuando buscan tu servicio, que el visitante entienda en segundos qué haces y por qué eres confiable, y que el siguiente paso (escribirte) sea obvio. Todo lo demás es decoración.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye tu web corporativa',
        intro: 'Alcance base del servicio. Desde $950, con cotización cerrada según páginas e integraciones.',
        items: [
          'Diseño a medida alineado a tu marca, sin plantillas compradas',
          'Hasta 6 páginas internas con estructura de venta',
          'Una página por servicio, optimizada para su búsqueda en Google',
          'Redacción y estructura del contenido junto a tu equipo',
          'Formularios conectados a tu correo y botones directos a WhatsApp',
          'Blog configurado para posicionamiento orgánico',
          'Panel autoadministrable con capacitación grabada',
          'SEO técnico completo: metadatos, datos estructurados y sitemap',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué una página por servicio',
        paragraphs: [
          'El error más común de los sitios corporativos es la página única de "Servicios" con una lista de todo. Google posiciona páginas, no listas: si tu servicio de contabilidad vive en la misma URL que tu servicio de auditoría, no compites en ninguna de las dos búsquedas.',
          'Nosotros estructuramos el sitio como lo busca tu cliente: <strong>una página por servicio, cada una respondiendo una intención de búsqueda concreta</strong>. Esa arquitectura es la diferencia entre aparecer y no existir.',
          'Además cada página termina en una acción específica, con el mensaje de WhatsApp ya escrito. El cliente que llega desde Google te escribe listo para hablar de su caso, no para preguntar qué haces.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta un sitio corporativo en Panamá?', a: 'Desde <strong>$950</strong> con hasta 6 páginas internas. Sitios con más secciones, dos idiomas o integraciones especiales se cotizan según alcance, siempre con precio cerrado antes de empezar.' },
          { q: '¿En cuánto tiempo estará listo?', a: 'Entre 2 y 3 semanas desde que recibimos tu contenido (textos base, logo e imágenes). Si no tienes contenido, te ayudamos a producirlo.' },
          { q: '¿Puedo editarlo yo mismo después?', a: 'Sí. Entregamos un panel autoadministrable y una capacitación grabada. Cambiar textos, fotos o publicar en el blog no requiere programador.' },
          { q: '¿Con qué tecnología lo construyen?', a: 'Depende de tu caso: <a href="/tecnologias/diseno-web-wordpress-panama/">WordPress</a> cuando el cliente edita contenido con frecuencia, o <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">desarrollo a medida</a> cuando el rendimiento o las integraciones lo exigen. Te recomendamos con argumentos, no por comodidad nuestra.' },
          { q: '¿Necesito tener listo el contenido antes de empezar?', a: 'Ayuda tenerlo, pero no es obligatorio. Trabajamos la estructura y los textos contigo en la etapa de contenido. Si necesitas fotografía profesional o redacción, lo producimos como servicio adicional con precio cerrado.' },
          { q: '¿El sitio va a funcionar bien en celular?', a: 'Sí, y es una prioridad, no un extra. En Panamá la mayoría de tus visitantes llega desde el celular. Diseñamos primero para móvil y verificamos en dispositivos reales antes de publicar.' },
          { q: '¿Qué pasa después de entregar la web?', a: 'No desaparecemos. Te capacitamos para administrarla y ofrecemos <a href="/crecimiento/mantenimiento-hosting-web-panama/">planes de mantenimiento</a> que mantienen tu sitio actualizado, respaldado y seguro. Muchos clientes también suman <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO continuo</a> para seguir creciendo.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo construimos tu sitio corporativo',
        intro: 'Un proceso claro, con hitos definidos y sin sorpresas. En cada etapa sabes qué se está haciendo y qué sigue.',
        items: [
          { h3: 'Estrategia y arquitectura', text: 'Definimos tu cliente ideal, las búsquedas que te traen negocio y la estructura del sitio: qué páginas crear y cómo enlazarlas para posicionar cada servicio.' },
          { h3: 'Diseño sobre tu marca', text: 'Diseñamos a medida respetando tu identidad —logo, colores, tono— y creamos una jerarquía visual que guía al visitante hacia la acción, sin ruido.' },
          { h3: 'Contenido y SEO', text: 'Redactamos y estructuramos el contenido servicio por servicio, con metadatos, datos estructurados y una página optimizada por cada intención de búsqueda.' },
          { h3: 'Publicación y capacitación', text: 'Lanzamos, conectamos Analytics y Search Console, y te entregamos el panel autoadministrable con una capacitación grabada para que edites sin depender de nadie.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es este servicio',
        intro: 'El diseño web corporativo brilla cuando la confianza es parte de la venta. Estos son los casos donde más rinde.',
        items: [
          { h3: 'Empresas B2B y proveedores', text: 'Tu cliente investiga antes de contactarte. Un sitio sólido, con casos y páginas por servicio, es lo que inclina la balanza a tu favor frente a la competencia.' },
          { h3: 'Despachos y profesionales', text: 'Abogados, contadores, arquitectos, consultores. La percepción de seriedad se construye en los primeros segundos: tu web es tu primera reunión.' },
          { h3: 'Empresas en expansión', text: 'Si estás creciendo o entrando a nuevos mercados, necesitas una base digital escalable que sume páginas y servicios sin rehacerse cada año.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Qué separa un sitio corporativo que vende de uno que solo se ve bien',
        paragraphs: [
          'La mayoría de las webs corporativas en Panamá comete el mismo error: se diseñan para impresionar al dueño, no para convencer al cliente. Se llenan de fotos genéricas, frases vacías ("somos líderes en soluciones integrales") y un menú con quince opciones. El visitante no encuentra lo que busca y se va.',
          'Un sitio que vende hace lo contrario: <strong>habla el idioma del cliente</strong>, responde sus dudas antes de que las haga y le muestra pruebas concretas de que puedes resolver su problema. Cada página tiene un propósito y termina en una acción. La estética está al servicio del mensaje, no al revés.',
          'Esa diferencia no se ve en una captura de pantalla, se ve en los resultados: más consultas calificadas, menos curiosos, y un equipo comercial que recibe clientes que ya entienden lo que haces y llegan listos para hablar de su caso.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
          { slug: 'industrias', label: 'Diseño web por industria' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu web corporativa', wa: 'Hola, quiero cotizar una web corporativa.' },
  },

  /* ---------- E-COMMERCE ---------- */
  {
    slug: 'servicios/tiendas-online-ecommerce-panama',
    parent,
    title: 'Tiendas Online en Panamá | E-commerce con Yappy y Pasarelas',
    description: 'Desarrollo de tiendas online en Panamá: catálogo, carrito, Yappy, pasarelas de pago locales y envíos. E-commerce que sí vende.',
    h1: 'Tiendas online y e-commerce en Panamá',
    breadcrumb: 'Tiendas Online y E-commerce',
    service: { type: 'Desarrollo de tiendas online y e-commerce' },
    lead: [
      'Una tienda pensada para vender en Panamá: con Yappy, pasarelas locales y envíos configurados, no una plantilla extranjera adaptada a medias.',
      'La diferencia entre una tienda que vende y una que solo existe está en los detalles operativos: cómo paga tu cliente, cuánto cuesta el envío a David o a Colón, y qué pasa después de la compra. Eso es exactamente lo que configuramos.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye tu e-commerce',
        intro: 'Desde $1,500 según catálogo e integraciones. El mejor e-commerce para Panamá debe incluir:',
        items: [
          'Catálogo y carrito completos con gestión de inventario',
          '<a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Botón de Pago Yappy</a> y pasarelas con tarjeta',
          'Cálculo de envíos por zona y retiro en tienda',
          'Fichas de producto orientadas a conversión',
          'Correos automáticos de pedido y seguimiento',
          'Recuperación de carritos abandonados',
          'Panel para gestionar productos, precios y pedidos',
          'Analítica de ventas y seguimiento de conversiones',
        ],
      },
      {
        type: 'prose',
        h2: 'Shopify o WooCommerce: te decimos cuál',
        paragraphs: [
          'Las dos plataformas venden bien; la decisión correcta depende de tu operación. <a href="/tecnologias/diseno-web-shopify-panama/">Shopify</a> conviene cuando quieres vender rápido sin administrar infraestructura: la plataforma se encarga de servidores, seguridad y actualizaciones a cambio de una suscripción mensual.',
          '<strong>WooCommerce</strong> conviene cuando necesitas control total: reglas de precio propias, integración con tu inventario o cero comisiones de plataforma. El costo es que la infraestructura corre por tu cuenta, y por eso lo entregamos con <a href="/crecimiento/mantenimiento-hosting-web-panama/">hosting gestionado</a>.',
          'Evaluamos tu catálogo, tu volumen y tus integraciones antes de recomendar. La respuesta honesta a veces es la plataforma que nos deja menos trabajo recurrente, y te lo decimos igual.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una tienda online en Panamá?', a: 'Desde <strong>$1,500</strong> con catálogo, carrito, pagos y envíos configurados. El precio sube según el tamaño del catálogo y las integraciones (inventario, facturación, logística).' },
          { q: '¿Puedo cobrar con Yappy?', a: 'Sí. Integramos el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Botón de Pago Yappy oficial</a> además de pasarelas con tarjeta, para que el cliente pague como prefiera.' },
          { q: '¿Quién administra los productos?', a: 'Tu equipo, desde un panel diseñado para eso. Agregar productos, cambiar precios y despachar pedidos no requiere conocimientos técnicos. Entregamos capacitación grabada.' },
          { q: '¿Qué pasa con los carritos abandonados?', a: 'Configuramos recuperación automática por correo y, si activas WhatsApp Business API, seguimiento por chat. La mayor parte de las ventas perdidas se pierde ahí, no en el catálogo.' },
          { q: '¿Puedo conectar mi tienda con Instagram y Facebook?', a: 'Sí. Sincronizamos tu catálogo con Instagram Shopping y Facebook para que vendas donde tu cliente ya te descubre. Combinado con <a href="/marketing/facebook-instagram-ads-panama/">pauta en Meta</a>, cierra el círculo entre descubrimiento y compra.' },
          { q: '¿Cómo manejo los envíos dentro de Panamá?', a: 'Configuramos tarifas por zona (ciudad, interior, retiro en tienda) y podemos integrar tu courier. El cliente ve el costo real antes de pagar, que es donde muchas tiendas pierden la venta por falta de claridad.' },
          { q: '¿Emiten factura fiscal?', a: 'Integramos tu tienda con tu sistema de facturación electrónica autorizado en Panamá para que cada pedido genere su comprobante. Lo coordinamos con tu contador durante la implementación.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo lanzamos tu tienda',
        intro: 'Del catálogo a la primera venta con un proceso probado que reduce el riesgo en cada etapa.',
        items: [
          { h3: 'Estrategia comercial', text: 'Definimos tu catálogo, márgenes, formas de pago y logística de envíos. Elegimos entre Shopify o WooCommerce según tu operación, no por moda.' },
          { h3: 'Montaje del catálogo', text: 'Cargamos productos con fichas orientadas a conversión: fotos, descripciones que venden, variantes y categorías pensadas para que el cliente encuentre y compre.' },
          { h3: 'Pagos y envíos', text: 'Integramos Yappy, tarjetas y tarifas de envío por zona. Probamos cada método con transacciones reales antes de abrir al público.' },
          { h3: 'Lanzamiento y optimización', text: 'Publicamos, activamos recuperación de carritos y analítica de ventas, y te capacitamos para gestionar pedidos, inventario y promociones.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es una tienda online',
        intro: 'El e-commerce rinde distinto según tu modelo. Estos son los casos donde una tienda propia marca la diferencia.',
        items: [
          { h3: 'Comercios con inventario', text: 'Ropa, accesorios, tecnología, hogar. Si vendes productos físicos, una tienda propia te libera de las comisiones y las reglas de los marketplaces.' },
          { h3: 'Marcas que venden por redes', text: 'Si hoy vendes por DM y transferencia, una tienda profesionaliza el proceso: el cliente compra solo, paga con Yappy y tú dejas de perder ventas fuera de horario.' },
          { h3: 'Negocios de nicho', text: 'Productos especializados, artesanales o de suscripción. Una tienda a medida se adapta a tu forma de vender en lugar de forzarte a un molde genérico.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La operación importa más que el diseño',
        paragraphs: [
          'Una tienda online no se gana con la plantilla más bonita, se gana con la operación más fluida. En Panamá, eso significa resolver tres fricciones que hacen abandonar el carrito: cómo paga el cliente, cuánto y cuándo llega su pedido, y qué pasa si algo sale mal.',
          'Por eso configuramos <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy y pasarelas locales</a> desde el inicio: tu cliente paga con lo que ya usa todos los días, sin capturas de pantalla ni transferencias manuales que frenan la compra. Cada método se prueba con transacciones reales antes de abrir.',
          'Y después de la venta, la tienda sigue trabajando: correos automáticos de confirmación y seguimiento, recuperación de carritos abandonados y analítica que te muestra qué productos venden y cuáles no. Una tienda no termina en "pagar"; ahí es donde empieza la relación con tu cliente.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas' },
          { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Shopify' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu tienda online', wa: 'Hola, quiero cotizar una tienda online.' },
  },

  /* ---------- LANDING PAGES ---------- */
  {
    slug: 'servicios/landing-pages-alta-conversion-panama',
    parent,
    title: 'Landing Pages en Panamá | Alta Conversión desde $550',
    description: 'Landing pages de alta conversión en Panamá: una página, una oferta, una acción. El destino correcto para tu pauta. Entrega en 5 días hábiles.',
    h1: 'Landing pages de alta conversión',
    breadcrumb: 'Landing Pages',
    service: { type: 'Diseño de landing pages de conversión' },
    lead: [
      'Una página, una oferta, una acción. Si estás pagando pauta y la mandas a tu página de inicio, estás quemando presupuesto.',
      'La página de inicio habla de toda tu empresa; una landing habla de una sola cosa: la oferta de tu campaña. Esa concentración es lo que multiplica la conversión. El visitante no tiene menú para distraerse ni cinco servicios para dudar: entiende, confía y actúa.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye tu landing',
        intro: 'Desde $550, entregada en 5 días hábiles desde que recibimos tu material.',
        items: [
          'Estructura de conversión: promesa, prueba, oferta y acción',
          'Redacción persuasiva del contenido junto a tu equipo',
          'Botón de WhatsApp con el mensaje de la campaña ya escrito',
          'Formulario corto conectado a tu correo o CRM',
          'Velocidad de carga optimizada para pauta móvil',
          'Medición de conversiones lista para Meta y Google Ads',
          'Versión responsive verificada en dispositivos reales',
          'Una ronda de ajustes tras la primera semana de campaña',
        ],
      },
      {
        type: 'prose',
        h2: 'El destino decide el costo de tu pauta',
        paragraphs: [
          'Meta y Google premian la relevancia: si tu anuncio promete una cosa y la página de destino habla de otra, pagas más por cada clic y conviertes menos. Es matemática de subasta, no opinión.',
          'Una landing dedicada alinea el mensaje completo: el anuncio, el titular y la acción piden lo mismo. El resultado directo es <strong>costo por lead más bajo con el mismo presupuesto</strong>.',
          'Y como carga rápido y mide cada conversión, sabes exactamente qué campaña funciona. Sin eso, la pauta es fe, no estrategia.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una landing page en Panamá?', a: 'Desde <strong>$550</strong>, con redacción, diseño a medida, WhatsApp integrado y medición de conversiones. Entrega en 5 días hábiles.' },
          { q: '¿Sirve para campañas de WhatsApp?', a: 'Sí, es su mejor uso en Panamá: la landing califica al visitante y lo entrega a tu WhatsApp con el mensaje de la campaña ya escrito. Tu equipo recibe conversaciones listas para cerrar.' },
          { q: '¿Incluye la pauta publicitaria?', a: 'La landing y la gestión de pauta son servicios distintos, pero ofrecemos ambos y trabajan mejor juntos. Ver <a href="/marketing/google-ads-panama/">Google Ads</a> y <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a>. Si ya tienes agencia de pauta, coordinamos los píxeles y eventos de conversión.' },
          { q: '¿Una landing o un sitio completo?', a: 'Si necesitas validar una oferta o correr una campaña puntual, landing. Si necesitas presencia permanente y posicionamiento en Google, un <a href="/servicios/diseno-web-corporativo-panama/">sitio corporativo</a>. Muchos clientes empiezan con la landing y crecen al sitio completo.' },
          { q: '¿Cuántas conversiones debería esperar?', a: 'Depende de tu oferta, tu tráfico y tu mercado, así que sería deshonesto prometer un número. Lo que sí garantizamos es una página construida sobre principios de conversión probados y medición configurada, para que optimices con datos reales desde la primera semana.' },
          { q: '¿Puedo tener varias landings para distintas campañas?', a: 'Sí, y es lo recomendable. Cada oferta, público o canal merece su propia landing con un mensaje alineado. Ofrecemos precio preferencial al desarrollar varias landings juntas sobre la misma base.' },
          { q: '¿Qué necesitan de mí para empezar?', a: 'Tu oferta clara, logo, y cualquier material o testimonio que tengas. El resto —estructura, redacción persuasiva y diseño— lo trabajamos nosotros. Si no tienes contenido, te guiamos con preguntas para extraerlo.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo creamos tu landing',
        intro: 'Cinco días hábiles, un proceso enfocado en una sola métrica: que tu campaña convierta más.',
        items: [
          { h3: 'Brief de la oferta', text: 'Entendemos tu oferta, tu público y la acción que quieres provocar. Definimos la promesa central y la objeción principal a resolver.' },
          { h3: 'Estructura y redacción', text: 'Escribimos la página con arquitectura de conversión: titular, prueba, beneficios, manejo de objeciones y llamado a la acción, en el orden que decide el visitante.' },
          { h3: 'Diseño y velocidad', text: 'Diseñamos a medida y optimizamos la carga para pauta móvil. Una landing lenta quema presupuesto antes de que el visitante la vea.' },
          { h3: 'Medición y ajuste', text: 'Conectamos los eventos de conversión de Meta y Google Ads, publicamos y ajustamos tras la primera semana con datos reales de la campaña.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Tipos de landing que construimos',
        intro: 'No todas las campañas piden la misma página. Adaptamos la estructura al objetivo.',
        items: [
          { h3: 'Captación de leads', text: 'Formulario corto o botón a WhatsApp para llenar tu pipeline. Ideal para servicios, consultorías e inmobiliarias que cierran por conversación.' },
          { h3: 'Venta directa', text: 'Una oferta con precio y botón de compra o pago con Yappy. Para productos, cursos, eventos y promociones con acción inmediata.' },
          { h3: 'Lanzamiento o registro', text: 'Lista de espera, inscripción a un webinar o descarga de un recurso. Para validar demanda antes de invertir en más.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Anatomía de una landing que convierte',
        paragraphs: [
          'Una landing efectiva no es una página bonita con un botón. Es una secuencia diseñada para llevar al visitante de la duda a la acción, respondiendo en el orden correcto las preguntas que se hace sin decirlas: ¿esto es para mí?, ¿puedo confiar?, ¿qué gano?, ¿qué me cuesta?, ¿qué hago ahora?',
          'Todo empieza con un <strong>titular que promete un resultado concreto</strong>, no un eslogan. Luego llega la prueba —testimonios, cifras, logos, casos— que sostiene esa promesa. Después los beneficios traducidos al lenguaje del cliente, el manejo de sus objeciones más comunes, y finalmente un llamado a la acción único y sin distracciones.',
          'Lo que <em>no</em> lleva es tan importante como lo que lleva: sin menú de navegación que invite a irse, sin cinco ofertas compitiendo, sin párrafos que nadie lee. Esa disciplina —quitar todo lo que no empuja hacia la conversión— es exactamente lo que multiplica los resultados de tu pauta.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Cobrar con Yappy' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu landing page', wa: 'Hola, quiero cotizar una landing page.' },
  },

  /* ---------- REDISEÑO ---------- */
  {
    slug: 'servicios/redisenio-web-panama',
    parent,
    title: 'Rediseño Web en Panamá | Moderniza sin Perder tu SEO',
    description: 'Rediseño web en Panamá: auditamos tu sitio actual, lo reconstruimos con estándares modernos y conservamos el posicionamiento que ya ganaste.',
    h1: 'Rediseño web sin perder tu posicionamiento',
    breadcrumb: 'Rediseño Web',
    service: { type: 'Rediseño de sitios web' },
    lead: [
      'Tu sitio existe, pero no genera clientes, carga lento o da vergüenza abrirlo en celular. Eso tiene arreglo sin empezar de cero a ciegas.',
      'Un rediseño serio empieza por una auditoría: qué está funcionando (y no se debe tocar), qué está roto y qué le falta. El error caro es rehacer el sitio "bonito" y perder en el proceso las posiciones de Google que tardaste años en ganar.',
    ],
    blocks: [
      {
        type: 'steps',
        h2: 'Cómo rediseñamos',
        items: [
          { h3: 'Auditoría', text: 'Velocidad, SEO actual, contenido que posiciona y fallas de conversión. Con datos, no impresiones.' },
          { h3: 'Mapa de URLs', text: 'Inventario completo de tus URLs y plan de redirecciones 301. Aquí se salva o se pierde tu SEO.' },
          { h3: 'Reconstrucción', text: 'Diseño moderno, velocidad real y estructura de venta, conservando lo que ya funciona.' },
          { h3: 'Verificación', text: 'Publicamos, monitoreamos Search Console y confirmamos que el tráfico se mantiene.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Señales de que necesitas un rediseño',
        items: [
          'El sitio no aparece en Google ni buscando tu propio nombre',
          'Tarda más de 3 segundos en cargar en celular',
          'El diseño no ha cambiado en más de 4 años',
          'No puedes editar el contenido sin llamar a alguien',
          'Los formularios llegan a un correo que nadie revisa',
          'Tu competencia se ve más profesional que tú en línea',
          'No hay botón de WhatsApp o está escondido',
          'No sabes cuántas visitas ni consultas genera',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Voy a perder mi posición en Google al rediseñar?', a: 'No, si se hace con mapa de URLs y redirecciones 301. Es el paso que la mayoría omite y la causa número uno de desplomes de tráfico tras un rediseño. En nuestro proceso es una etapa obligatoria, no un extra.' },
          { q: '¿Cuánto cuesta un rediseño?', a: 'Depende del estado actual y el alcance. Como referencia, un rediseño corporativo se mueve en el rango de un sitio nuevo (desde $950) más la auditoría y migración. Cotización cerrada tras auditar.' },
          { q: '¿Pueden trabajar sobre mi sitio actual sin rehacerlo todo?', a: 'A veces sí: si la base técnica es sana, una modernización parcial (tipografía, estructura, velocidad) logra el 70% del resultado por menos. La auditoría lo revela y te lo decimos con franqueza.' },
          { q: 'Perdí los accesos de mi sitio anterior. ¿Pueden ayudar?', a: 'Sí, es más común de lo que crees. Si puedes demostrar la titularidad del dominio o de la empresa, gestionamos la recuperación antes de rediseñar.' },
          { q: '¿Cuánto tarda un rediseño?', a: 'Entre 2 y 4 semanas según el tamaño del sitio y el estado de su contenido. La auditoría y el mapa de redirecciones toman los primeros días; la reconstrucción, el resto. Te damos un cronograma con fechas al cerrar el alcance.' },
          { q: '¿Mi sitio seguirá en línea mientras lo rediseñan?', a: 'Sí. Construimos la nueva versión en un entorno de pruebas y solo hacemos el cambio cuando está aprobada y verificada. Tus clientes nunca ven un sitio "en construcción".' },
          { q: '¿Puedo conservar mi contenido y solo cambiar el diseño?', a: 'Claro. La auditoría identifica qué contenido posiciona y merece conservarse. Reestructuramos y modernizamos sin tirar a la basura el trabajo de SEO que ya rinde frutos.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué mejora un rediseño bien hecho',
        intro: 'No es solo estética. Un rediseño con estrategia mueve las métricas que importan para tu negocio.',
        items: [
          { h3: 'Velocidad y experiencia', text: 'Un sitio que carga rápido y se ve impecable en celular retiene más visitantes y convierte mejor. Google también lo premia con mejor posición.' },
          { h3: 'Estructura de conversión', text: 'Reorganizamos el contenido para que cada página guíe hacia una acción. El visitante deja de perderse y empieza a contactarte.' },
          { h3: 'SEO conservado y potenciado', text: 'Con mapa de URLs y redirecciones 301 conservas tu posicionamiento y, con la nueva estructura, lo mejoras. Modernizas sin retroceder.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El error de $10,000: rehacer sin auditar',
        paragraphs: [
          'Cada mes recibimos consultas del mismo tipo: "rediseñamos la web hace seis meses, se ve preciosa, pero desde entonces no nos llega ni una sola consulta". Casi siempre la causa es la misma: alguien rehizo el sitio sin un mapa de URLs ni redirecciones, y Google perdió el rastro de todas las páginas que posicionaban.',
          'El posicionamiento en Google es un activo que se construye durante años. Cada URL que rankeaba tenía autoridad acumulada. Cuando cambias la estructura sin redirigir las URLs antiguas a las nuevas, esa autoridad se evapora de la noche a la mañana: el sitio nuevo arranca de cero, como si acabara de nacer.',
          'Por eso en nuestro proceso la <strong>auditoría y el mapa de redirecciones 301 son etapas obligatorias</strong>, no un extra que se cobra aparte. Antes de tocar el diseño, inventariamos cada URL, medimos qué posiciona y planificamos cómo migrar sin perder nada. Un sitio bonito que nadie encuentra no es un rediseño: es un retroceso caro.',
        ],
      },
      {
        type: 'statement',
        text: 'Modernizar tu web no debería costarte los clientes que Google ya te',
        strong: 'estaba enviando.',
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: 'Errores comunes de diseño web' },
        ],
      },
    ],
    cta: { h2: 'Solicita la auditoría de tu sitio', wa: 'Hola, quiero una auditoría para rediseñar mi sitio web.' },
  },
];
