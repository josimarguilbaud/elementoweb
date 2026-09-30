/* BLOG — Lote 40: serie «cuánto cuesta» por tipo de proyecto (tienda online,
   landing page, mantenimiento, rediseño y desarrollo a medida).
   Cifras solo de src/lib/site.ts (pricing) y de las páginas de servicio del repo.
   PageData con parent { slug: 'blog' }; enlaces internos solo a slugs reales. */
import type { PageData } from '../types';

const parent = { slug: 'blog', label: 'Blog' };

export const blog40: PageData[] = [
  /* 1 — Tienda online */
  {
    slug: 'blog/cuanto-cuesta-tienda-online-panama',
    parent,
    title: 'Cuánto cuesta una tienda online en Panamá',
    description: 'Una tienda online con Elemento Web parte desde $1,950 sin ITBMS. Qué define el precio final, qué se paga aparte y cuándo una tienda no te conviene.',
    h1: 'Cuánto cuesta una tienda online en Panamá',
    breadcrumb: 'Cuánto cuesta una tienda online',
    category: 'Precios',
    date: '2026-09-30',
    heroImage: {
      src: '/images/blog/como-crear-una-tienda-online-en-panama.jpg',
      alt: 'Persona comprando desde el celular en una tienda online con carrito y método de pago',
    },
    lead: [
      'Nuestro paquete de E-commerce parte desde $1,950 (precios en USD, sin ITBMS del 7%). Incluye hasta 25 productos cargados, categorías y carrito, configuración de pagos y envíos (las pasarelas y su cantidad se definen en la cotización), pruebas de compra y capacitación para gestionar pedidos. El precio final sube o se queda en ese piso según el tamaño de tu catálogo y las integraciones que necesites.',
      'Esta guía no repite la <a href="/blog/cuanto-cuesta-diseno-web-panama/">guía general de precios</a>: se centra en lo que solo aplica a una tienda, es decir, qué mueve el costo, qué se cotiza aparte y en qué casos una tienda completa es más de lo que tu negocio necesita.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué incluye el precio base de una tienda online',
        paragraphs: [
          'El paquete E-commerce de $1,950 cubre lo que una tienda necesita para vender: hasta 25 productos cargados, categorías y carrito, configuración de pagos y envíos (las pasarelas y su cantidad se definen en la cotización), pruebas de compra y capacitación para gestionar pedidos. Los precios vigentes están siempre en la página de <a href="/precios/">precios</a>.',
          'El detalle de lo que incluye, con la lógica de cómo lo construimos, está en la página de <a href="/servicios/tiendas-online-ecommerce-panama/">tiendas online y e-commerce</a>. Aquí nos concentramos en el costo.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué determina el costo final de tu tienda',
        intro: 'El piso de $1,950 se mueve por estos factores. Los dejamos claros desde la cotización.',
        items: [
          { h3: 'Tamaño del catálogo', text: 'No es lo mismo cargar veinte productos con pocas variantes que un catálogo grande con tallas, colores y categorías. Más productos y más variantes significan más trabajo de carga y de orden.' },
          { h3: 'Medios de pago', text: 'Yappy y las pasarelas locales están dentro del paquete. Cada método se prueba antes de abrir la tienda; cuanto más particular sea tu forma de cobrar, más trabajo de integración hay.' },
          { h3: 'Envíos', text: 'Tarifas por zona, retiro en tienda o la conexión con tu courier. Mientras más reglas tenga tu logística, más configuración requiere.' },
          { h3: 'Integraciones con tus sistemas', text: 'Conectar la tienda con tu inventario, tu facturación, tu CRM o tu logística se cotiza aparte, porque depende del sistema con el que haya que hablar.' },
          { h3: 'Plataforma', text: 'Según tu operación, la tienda puede montarse en Shopify o en WooCommerce. La elección influye en el costo recurrente; la comparativa está en <a href="/blog/shopify-vs-woocommerce-panama/">Shopify vs WooCommerce en Panamá</a>.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué se paga aparte del paquete',
        intro: 'Nada de esto es una sorpresa si se habla desde el principio. Estos son los conceptos que suman al precio base.',
        items: [
          'Infraestructura anual: desde $350 con dominio, hosting cloud y certificado SSL. Hosting compartido $225 al año, cloud $350 y VPS $550; para un e-commerce grande o de alta demanda el nivel lo definimos según el proyecto',
          'Mantenimiento web: desde $59 al mes, con actualizaciones, respaldos verificados y monitoreo',
          'Contenido: si no tienes textos o fotos de producto listos, ofrecemos redacción con IA y generación de imágenes con IA a precios fijos publicados en la página de precios',
          'Base de datos nueva o migración de datos: si traes productos o clientes de otro sistema, se cotiza aparte',
          'Integraciones externas por API (inventario, facturación, CRM, logística): cotización aparte',
          'Sitio en varios idiomas: cotización aparte, por cada idioma extra',
          'Entrega express: recargo del 30% si necesitas la tienda antes del plazo normal',
          'ITBMS del 7% sobre el total',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo se paga el proyecto',
        paragraphs: [
          'El pago se divide en tres partes: 50% al iniciar, 30% en el avance y 20% al entregar. Así cada etapa está respaldada y ambas partes saben qué se debe en cada momento.',
          'Antes de cerrar, recibes una cotización con el alcance por escrito: qué entra, qué no y qué conceptos van aparte. Si durante el proyecto aparece algo que cambia el alcance, se te dice antes de hacerlo, no en la factura.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene una tienda online completa',
        paragraphs: [
          'Si tu catálogo son unos pocos productos y toda la venta ya ocurre por WhatsApp, una tienda completa puede ser infraestructura de más. En ese caso una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> ($550) con tus productos y un botón directo de contacto o de pago te resuelve, y puedes crecer a tienda cuando las ventas lo justifiquen.',
          'Tampoco conviene si todavía no tienes resuelta la logística. Una tienda que vende y no entrega a tiempo genera reclamos, no clientes; conviene tener claro cómo se despacha antes de abrir la caja registradora.',
          'Y si no vas a tener a nadie que cargue productos, atienda pedidos y actualice el inventario, la tienda se quedará desactualizada. Es mejor una web simple bien mantenida que una tienda abandonada.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo de una tienda online',
        items: [
          { q: '¿Cuánto cuesta una tienda online en Panamá con ustedes?', a: 'El paquete E-commerce parte desde $1,950, sin ITBMS del 7%. Incluye hasta 25 productos cargados, categorías y carrito, configuración de pagos y envíos (las pasarelas y su cantidad se definen en la cotización), pruebas de compra y capacitación para gestionar pedidos. El precio final depende del tamaño del catálogo y de las integraciones.' },
          { q: '¿Los $1,950 incluyen hosting y dominio?', a: 'No. La infraestructura anual es aparte y parte desde $350 con dominio, hosting cloud y certificado SSL. Según el proyecto puede ser hosting compartido ($225 al año), cloud ($350) o VPS ($550).' },
          { q: '¿Yappy tiene un costo adicional de integración?', a: 'El Botón de Pago Yappy y las pasarelas con tarjeta forman parte del paquete E-commerce. Cada método se prueba antes de abrir la tienda. Más detalle en la página de <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy y pasarelas de pago</a>.' },
          { q: '¿Cómo se paga la tienda?', a: 'En tres pagos: 50% al iniciar, 30% en el avance y 20% al entregar. Los precios no incluyen ITBMS del 7%.' },
          { q: '¿Cuándo NO me conviene una tienda online?', a: 'Cuando vendes muy pocos productos y todo ya se cierra por WhatsApp, cuando no tienes resuelta la logística de entrega o cuando nadie va a mantener el catálogo al día. En esos casos una landing page o una web simple es más sensata.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'precios', label: 'Precios' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Guía general de precios' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y pasarelas de pago' },
          { slug: 'blog/shopify-vs-woocommerce-panama', label: 'Shopify vs WooCommerce en Panamá' },
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online en Panamá' },
        ],
      },
      { type: 'form', h2: 'Cuéntanos qué vendes y te cotizamos', intro: 'Con tu catálogo y tu forma de cobrar y enviar podemos darte una cotización con el alcance por escrito.' },
    ],
    cta: {
      h2: 'Una cotización de tienda online con el alcance claro',
      wa: 'Hola, quiero cotizar una tienda online. ¿Me asesoran?',
    },
  },

  /* 2 — Landing page */
  {
    slug: 'blog/cuanto-cuesta-una-landing-page-panama',
    parent,
    title: 'Cuánto cuesta una landing page en Panamá',
    description: 'Una landing page con Elemento Web cuesta $550 sin ITBMS. Qué incluye, qué se paga aparte y cuándo una landing no es lo que tu negocio necesita.',
    h1: 'Cuánto cuesta una landing page en Panamá',
    breadcrumb: 'Cuánto cuesta una landing page',
    category: 'Precios',
    date: '2026-09-30',
    heroImage: {
      src: '/images/blog/landing-page-vs-sitio-web-cual-necesitas.jpg',
      alt: 'Diseño de una landing page en una pantalla con una oferta y un botón de contacto',
    },
    lead: [
      'Una landing page en Elemento Web cuesta $550 (USD, sin ITBMS del 7%). Es una página enfocada en conversión, con diseño a medida, responsive y un botón directo a WhatsApp, con entrega en 5 días hábiles desde recibir el contenido y aprobar el alcance.',
      'La <a href="/blog/cuanto-cuesta-diseno-web-panama/">guía general de precios</a> compara todos los paquetes. Aquí respondemos solo esta pregunta: qué hay detrás de esos $550, qué se suma aparte y cuándo una landing no es la herramienta correcta.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué incluye el precio de $550',
        paragraphs: [
          'El paquete Landing Page incluye una página enfocada en conversión, diseño a medida, responsive, un botón directo a WhatsApp y entrega en 5 días hábiles desde recibir el contenido y aprobar el alcance. Es un solo destino con una sola acción: la que quieres que haga tu visitante.',
          'Sirve como destino de una campaña, de una oferta o de un servicio concreto. Si quieres entender bien en qué se diferencia de un sitio con varias páginas, lo explicamos en <a href="/blog/landing-page-vs-sitio-web-cual-necesitas/">landing page vs sitio web</a>, y el detalle del servicio está en <a href="/servicios/landing-pages-alta-conversion-panama/">landing pages de alta conversión</a>.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué determina el costo de una landing',
        intro: 'El piso es $550. Estos son los factores que pueden moverlo.',
        items: [
          { h3: 'Si ya tienes el contenido', text: 'Los textos y las imágenes son la parte que más retrasa una landing. Si no los tienes listos, hay opciones de producción con precio fijo (ver abajo), y así el proyecto no se detiene.' },
          { h3: 'Idiomas', text: 'Cada idioma adicional requiere estructura y contenido extra, con el etiquetado SEO correcto por idioma. Se cotiza aparte.' },
          { h3: 'Integraciones', text: 'Si la landing debe conectarse con un CRM, un sistema de citas u otra herramienta por API, esa conexión es trabajo adicional que se cotiza aparte.' },
          { h3: 'Urgencia', text: 'Si necesitas la landing antes del plazo normal, existe la entrega express, con un recargo del 30%.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué se paga aparte de los $550',
        intro: 'Todo esto se aclara en la cotización, antes de empezar.',
        items: [
          'Hosting, dominio y SSL: infraestructura anual desde $350 (dominio, hosting cloud y certificado SSL). Para una landing con tráfico moderado también existe el hosting compartido, a $225 al año',
          'Redacción de contenido con IA para landing: $150, si no tienes los textos listos',
          'Generación de imágenes con IA: $100, si no cuentas con fotografía propia',
          'Logo e identidad básica con IA: desde $120, si arrancas sin identidad visual',
          'Correo corporativo con tu dominio: desde $60 al año',
          'Mantenimiento web: desde $59 al mes, si quieres que alguien se encargue de actualizaciones, respaldos y monitoreo',
          'ITBMS del 7% sobre el total',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo se paga',
        paragraphs: [
          'El proyecto se paga en tres partes: 50% al iniciar, 30% en el avance y 20% al entregar. La cotización detalla el alcance por escrito, y cualquier cambio se conversa antes de hacerlo.',
          'Tu dominio queda a tu nombre. Los detalles de infraestructura están en la página de <a href="/crecimiento/hosting-infraestructura-panama/">hosting e infraestructura</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene una landing page',
        paragraphs: [
          'Si ofreces varios servicios distintos y cada uno necesita explicarse, una sola página se queda corta: mezclar todo en un mismo scroll confunde al visitante. Ahí conviene una web con páginas por servicio, como la <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a>.',
          'Tampoco conviene si quieres posicionar varios servicios en Google, porque cada búsqueda distinta pide su propia página. Una landing puede recibir visitas, pero no reemplaza una estructura pensada para buscadores.',
          'Y si todavía no sabes qué oferta quieres presentar, conviene definirla primero. Una landing solo puede ordenar una propuesta que ya está clara; no la inventa por ti.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo de una landing page',
        items: [
          { q: '¿Cuánto cuesta una landing page en Panamá con ustedes?', a: 'El paquete Landing Page cuesta $550 (USD, sin ITBMS del 7%). Incluye una página enfocada en conversión, diseño a medida, responsive, botón directo a WhatsApp y entrega en 5 días hábiles desde recibir el contenido y aprobar el alcance.' },
          { q: '¿El precio incluye dominio y hosting?', a: 'No, la infraestructura es aparte. Va desde $350 al año con dominio, hosting cloud y SSL, y para una landing de tráfico moderado existe el hosting compartido a $225 al año.' },
          { q: '¿Y si no tengo los textos ni las imágenes?', a: 'No es un bloqueo. Podemos redactar el contenido con IA ($150 para una landing) y generar imágenes originales ($100), y te los mostramos para tu aprobación antes de publicar.' },
          { q: '¿Cómo se paga?', a: 'En tres pagos: 50% al iniciar, 30% en el avance y 20% al entregar. Los precios no incluyen ITBMS.' },
          { q: '¿Cuándo NO me conviene una landing page?', a: 'Cuando tienes varios servicios que explicar, cuando quieres posicionar varias búsquedas distintas en Google o cuando aún no tienes clara la oferta. En esos casos una web con varias páginas es mejor punto de partida.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'precios', label: 'Precios' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Guía general de precios' },
          { slug: 'blog/landing-page-vs-sitio-web-cual-necesitas', label: 'Landing page vs sitio web' },
          { slug: 'crecimiento/hosting-infraestructura-panama', label: 'Hosting e infraestructura' },
        ],
      },
      { type: 'form', h2: 'Cuéntanos tu oferta y te cotizamos', intro: 'Dinos qué quieres promover y qué acción esperas del visitante; te respondemos con el alcance por escrito.' },
    ],
    cta: {
      h2: 'Una landing con una oferta clara y un solo camino',
      wa: 'Hola, quiero cotizar una landing page. ¿Me asesoran?',
    },
  },

  /* 3 — Mantenimiento */
  {
    slug: 'blog/cuanto-cuesta-mantenimiento-web-panama',
    parent,
    title: 'Cuánto cuesta el mantenimiento web en Panamá',
    description: 'El mantenimiento web parte desde $59 al mes, sin ITBMS. Qué cambia entre los planes, qué se paga aparte y cuándo no necesitas contratarlo.',
    h1: 'Cuánto cuesta el mantenimiento web en Panamá',
    breadcrumb: 'Cuánto cuesta el mantenimiento web',
    category: 'Precios',
    date: '2026-09-30',
    heroImage: {
      src: '/images/hero/crecimiento--mantenimiento-web-panama.jpg',
      alt: 'Panel de monitoreo de un sitio web con estado, respaldos y actualizaciones',
    },
    lead: [
      'El mantenimiento web en Elemento Web parte desde $59 al mes (USD, sin ITBMS del 7%). Hay tres planes: Básico a $59, Prioritario a $99 y Empresarial a $189. Los tres incluyen la misma base; lo que cambia es la velocidad de respuesta y las horas de cambios incluidas cada mes.',
      'Esta guía se centra en el costo: qué compras en cada plan, qué queda fuera y cuándo no necesitas contratarlo con nosotros. El detalle técnico está en la página de <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento web</a>.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Qué cambia entre los tres planes',
        intro: 'La base es la misma en los tres: actualizaciones de seguridad, respaldos automáticos con restauración verificada, monitoreo de caídas con alerta, certificado SSL con renovación automática, ajustes menores de contenido y reporte mensual.',
        items: [
          { h3: 'Básico, $59 al mes', text: 'La base completa, con respuesta el siguiente día hábil. Es el piso: no contratamos por debajo de esto.' },
          { h3: 'Prioritario, $99 al mes', text: 'Todo lo del Básico, con respuesta el mismo día hábil, un reporte más detallado (velocidad, seguridad, uptime), 1 hora al mes de cambios o ajustes y revisión de velocidad prioritaria.' },
          { h3: 'Empresarial, $189 al mes', text: 'Todo lo del Prioritario, con respuesta el mismo día incluso fuera de horario si el sitio está caído, 3 horas al mes de cambios, una llamada mensual de seguimiento y prioridad máxima en soporte.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Qué determina el plan que te toca',
        paragraphs: [
          'La decisión se reduce a dos preguntas. Primera: ¿qué pasa si tu sitio se cae o falla? Si tu web ya factura, agenda o recibe clientes a diario, el tiempo de respuesta importa más, y ahí los planes Prioritario o Empresarial tienen sentido. Si es una web informativa, el Básico suele bastar.',
          'Segunda: ¿cuántos cambios haces al mes? El plan Básico cubre ajustes menores de contenido, como textos e imágenes. Si tu equipo pide cambios con frecuencia, las horas incluidas en Prioritario y Empresarial evitan cotizar cada cosa por separado. Páginas nuevas o funciones nuevas se cotizan aparte.',
          'Puedes cambiar de plan cuando quieras, sin permanencia; el ajuste aplica desde el siguiente ciclo de facturación.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué se paga aparte del mantenimiento',
        intro: 'El plan mensual no cubre todo lo que necesita una web para funcionar. Esto es lo que va por separado.',
        items: [
          'Infraestructura anual: desde $350 con dominio, hosting cloud y certificado SSL. Hosting compartido $225 al año, cloud $350 y VPS $550',
          'Páginas nuevas o funciones nuevas: se cotizan aparte, y te lo decimos antes de hacerlas',
          'Sanear un sitio ya comprometido: es un trabajo puntual, no mantenimiento normal; después entra el plan mensual',
          'ITBMS del 7% sobre el total',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO necesitas contratar mantenimiento con nosotros',
        paragraphs: [
          'Si tu sitio es estático, no tiene panel ni formularios y alguien de tu equipo sabe renovar el dominio y el certificado, puedes vivir sin un plan mensual. También si tu proveedor actual ya cubre las actualizaciones y los respaldos: pagar dos veces por lo mismo no mejora nada.',
          'Tampoco es obligatorio contratarlo con nosotros: tú o tu equipo técnico pueden encargarse. Lo innegociable es que alguien lo haga, porque un sitio sin dueño, sobre todo en WordPress, termina comprometido, y recuperarlo cuesta más que el plan Básico.',
          'Y si el sitio ya fue hackeado o su base es muy frágil, lo primero no es un plan mensual sino sanearlo o, en algunos casos, un <a href="/servicios/redisenio-web-panama/">rediseño</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo del mantenimiento web',
        items: [
          { q: '¿Cuánto cuesta el mantenimiento web?', a: 'Desde $59 al mes en el plan Básico. El Prioritario cuesta $99 al mes y el Empresarial $189 al mes. Los precios están en USD y no incluyen ITBMS del 7%.' },
          { q: '¿El plan incluye el hosting y el dominio?', a: 'No. La infraestructura (dominio, hosting y SSL) se cotiza aparte y parte desde $350 al año. Está explicada en la página de <a href="/crecimiento/hosting-infraestructura-panama/">hosting e infraestructura</a>.' },
          { q: '¿Puedo cambiar de plan o cancelar?', a: 'Sí, sin permanencia. Si un mes necesitas más horas de cambios subes de plan, y si no las necesitas, bajas. El ajuste aplica desde el siguiente ciclo de facturación.' },
          { q: '¿Cubren sitios que no construyeron ustedes?', a: 'Sí, previa auditoría. Si el sitio ya está comprometido o su base es frágil, primero hay que sanearlo.' },
          { q: '¿Cuándo NO necesito un plan de mantenimiento?', a: 'Cuando tu sitio es estático y sin formularios y alguien de tu equipo se encarga de renovar dominio y certificado, o cuando tu proveedor actual ya lo cubre. Lo que no recomendamos es dejar la web sin dueño.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'precios', label: 'Precios' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Guía general de precios' },
          { slug: 'crecimiento/hosting-infraestructura-panama', label: 'Hosting e infraestructura' },
          { slug: 'blog/hosting-panama-evitar-hosting-barato', label: 'Por qué evitar el hosting barato' },
        ],
      },
      { type: 'form', h2: 'Cuéntanos cómo está tu web hoy', intro: 'Revisamos tu sitio y te decimos qué plan tiene sentido, sin compromiso.' },
    ],
    cta: {
      h2: 'Un mantenimiento que se ajusta a lo que tu web necesita',
      wa: 'Hola, quiero cotizar el mantenimiento de mi página web. ¿Me asesoran?',
    },
  },

  /* 4 — Rediseño */
  {
    slug: 'blog/cuanto-cuesta-redisenar-una-pagina-web',
    parent,
    title: 'Cuánto cuesta rediseñar una página web',
    description: 'Un rediseño web parte del precio de un sitio nuevo (desde $1,250) más la auditoría y la migración. Qué lo define, qué va aparte y cuándo no rediseñar.',
    h1: 'Cuánto cuesta rediseñar una página web',
    breadcrumb: 'Cuánto cuesta rediseñar una web',
    category: 'Precios',
    date: '2026-09-30',
    heroImage: {
      src: '/images/blog/cuando-hacer-rediseno-pagina-web.jpg',
      alt: 'Comparación entre un sitio web antiguo y su versión rediseñada en pantalla',
    },
    lead: [
      'Un rediseño en Elemento Web se mueve en el rango de un sitio nuevo, desde $1,250 (USD, sin ITBMS del 7%), más la auditoría y la migración. El precio cerrado se da después de auditar tu sitio actual, porque depende de su estado y del alcance.',
      'No damos una cifra sin mirar antes: rediseñar sin auditar es justo lo que hace perder el posicionamiento. Esta guía explica qué mueve el costo, qué se suma aparte y cuándo conviene no rediseñar todavía. Los precios de los paquetes, en la <a href="/blog/cuanto-cuesta-diseno-web-panama/">guía general</a>.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué el rediseño no tiene un precio único',
        paragraphs: [
          'Un sitio nuevo se cotiza sobre una hoja en blanco. Un rediseño parte de algo que ya existe, y eso cambia el trabajo: hay que inventariar las páginas, saber cuáles reciben visitas y cuáles tienen enlaces externos, y planificar las redirecciones 301 para conservar lo que ya posiciona.',
          'Por eso la auditoría y el mapa de redirecciones son etapas obligatorias de nuestro proceso, no un extra. El alcance real del servicio está en la página de <a href="/servicios/redisenio-web-panama/">rediseño web</a>.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué determina el costo de un rediseño',
        intro: 'Como referencia, el rango parte del precio de un sitio nuevo. Estos factores lo mueven.',
        items: [
          { h3: 'Tamaño del sitio actual', text: 'Cuántas páginas hay que revisar, conservar y redirigir. Un sitio pequeño no se trabaja igual que uno con muchas páginas y entradas de blog.' },
          { h3: 'Estado técnico de la base', text: 'Si la base es sana, a veces basta una modernización parcial (tipografía, estructura, velocidad). Si es frágil o está comprometida, hay que sanearla primero o reconstruir.' },
          { h3: 'Cuánto contenido se conserva', text: 'Si los textos actuales sirven, se reestructuran. Si están obsoletos, hay que reescribirlos, y para eso existen opciones de producción de contenido con precio fijo.' },
          { h3: 'Integraciones activas', text: 'Formularios, pagos, CRM, correo y analítica que ya funcionan y no deben romperse en el cambio. Conectarlos de nuevo o migrarlos se cotiza según el caso.' },
          { h3: 'Migración de datos', text: 'Trasladar productos, clientes o contenido desde tu sitio o sistema actual sin perder información se cotiza aparte.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué se paga aparte',
        intro: 'Para que la cotización sea cerrada, estos conceptos se definen desde el inicio.',
        items: [
          'Auditoría y migración: se suman al precio base del sitio nuevo y se cierran tras auditar',
          'Migración de datos: cotización aparte',
          'Integraciones externas por API: cotización aparte',
          'Sitio en varios idiomas: cotización aparte, por cada idioma extra',
          'Contenido nuevo: redacción con IA, $200 para una web corporativa de hasta 6 páginas en total ($350 si es más extensa)',
          'Infraestructura anual: desde $350 con dominio, hosting cloud y SSL',
          'Mantenimiento web: desde $59 al mes',
          'Entrega express: recargo del 30%',
          'ITBMS del 7% sobre el total',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué revisar antes de pedir una cotización',
        paragraphs: [
          'Para que la auditoría sea rápida, ten a mano los accesos al dominio y al hosting (aparecen siempre a última hora) y anota los números actuales: visitas mensuales, cuántas llegan de buscadores, cuántos contactos entran al mes y la velocidad en celular. Sin esos datos no se puede demostrar después si el rediseño mejoró algo.',
          'También conviene conocer los pasos para no perder posicionamiento. Nuestra <a href="/recursos/checklist-migracion-seo/">checklist de migración SEO</a> recoge qué hacer antes, durante y después de un cambio de sitio.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene rediseñar todavía',
        paragraphs: [
          'Cuando el sitio funciona y lo que falta es contenido o difusión. Rediseñar por aburrimiento reinicia el trabajo de posicionamiento sin ganar nada a cambio.',
          'Tampoco cuando estás en temporada alta: un rediseño mueve direcciones y conviene hacerlo en un mes tranquilo, no la semana antes de tu pico de ventas. Y si tu sitio actual no recibe visitas de Google ni tiene nada que conservar, quizás no necesitas un rediseño sino un sitio nuevo desde cero, que suele salir más simple.',
          'Para saber si te toca, revisa <a href="/blog/cuando-hacer-rediseno-pagina-web/">cuándo hacer el rediseño de tu página web</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo de un rediseño',
        items: [
          { q: '¿Cuánto cuesta rediseñar una página web?', a: 'Como referencia, un rediseño se mueve en el rango de un sitio nuevo, desde $1,250, más la auditoría y la migración. Sin ITBMS del 7%. La cotización cerrada se da tras auditar el sitio actual.' },
          { q: '¿Por qué no dan un precio sin ver mi sitio?', a: 'Porque el costo depende del tamaño del sitio, del estado de su base, del contenido que se conserva y de las integraciones activas. Rediseñar sin auditar es la causa número uno de desplomes de tráfico.' },
          { q: '¿Perderé mi posicionamiento en Google?', a: 'No, si se hace con un mapa de URLs y redirecciones 301, que en nuestro proceso son una etapa obligatoria y no un extra que se cobra aparte.' },
          { q: '¿Se paga por adelantado todo?', a: 'No. El pago se divide en 50% al iniciar, 30% en el avance y 20% al entregar.' },
          { q: '¿Cuándo NO conviene rediseñar?', a: 'Cuando el sitio funciona y lo que falta es contenido o difusión, cuando estás en temporada alta o cuando no hay nada que conservar y conviene más un sitio nuevo.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'precios', label: 'Precios' },
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño web' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Guía general de precios' },
          { slug: 'recursos/checklist-migracion-seo', label: 'Checklist de migración SEO' },
          { slug: 'blog/cuando-hacer-rediseno-pagina-web', label: 'Cuándo rediseñar tu web' },
        ],
      },
      { type: 'form', h2: 'Cuéntanos qué sitio tienes hoy', intro: 'Con la dirección de tu web actual empezamos por la auditoría y te decimos qué conviene conservar.' },
    ],
    cta: {
      h2: 'Antes de tocar el diseño, una auditoría de tu sitio actual',
      wa: 'Hola, quiero cotizar el rediseño de mi página web. ¿Me asesoran?',
    },
  },

  /* 5 — Desarrollo a medida */
  {
    slug: 'blog/cuanto-cuesta-desarrollo-web-a-medida-panama',
    parent,
    title: 'Cuánto cuesta el desarrollo web a medida',
    description: 'El desarrollo web a medida parte desde $2,900 sin ITBMS. Qué mueve el costo, qué se cotiza aparte y cuándo un proyecto a medida no te conviene.',
    h1: 'Cuánto cuesta el desarrollo web a medida en Panamá',
    breadcrumb: 'Cuánto cuesta el desarrollo a medida',
    category: 'Precios',
    date: '2026-09-30',
    heroImage: {
      src: '/images/hero/tecnologias--desarrollo-web-a-medida-vue-react-panama.jpg',
      alt: 'Código de una aplicación web a medida en la pantalla de un desarrollador',
    },
    lead: [
      'Las páginas web corporativas a medida de Elemento Web parten desde $2,900 (USD, sin ITBMS del 7%). No es un paquete cerrado: el precio final se define tras un diagnóstico, porque depende de la arquitectura, las integraciones y la funcionalidad que tu operación necesite.',
      'La <a href="/blog/cuanto-cuesta-diseno-web-panama/">guía general de precios</a> compara los paquetes cerrados. Aquí explicamos por qué un proyecto a medida no se cotiza igual, qué lo hace subir y en qué casos no lo necesitas.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es lo que se paga en un proyecto a medida',
        paragraphs: [
          'En un paquete cerrado, el alcance está definido de antemano. En un proyecto a medida, el alcance se construye contigo: arquitectura y diseño 100% a tu medida, integraciones con tus sistemas y funcionalidad hecha para tu operación. Se desarrolla con Vue o React, el mismo stack con el que construimos nuestros propios productos SaaS.',
          'El punto de partida es un diagnóstico. Con él se define qué se construye, en qué orden y con qué integraciones, y se te entrega una cotización con el alcance por escrito. El detalle técnico está en la página de <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">desarrollo a medida con Vue y React</a>.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué determina el costo de un desarrollo a medida',
        intro: 'El piso es $2,900. Estos factores explican por qué dos proyectos a medida pueden costar muy distinto.',
        items: [
          { h3: 'Integraciones con tus sistemas', text: 'Conectar la web con un CRM, un ERP, pagos o inventario por API. Cada sistema tiene sus reglas, y el trabajo depende de cuántos y de qué tan documentados estén.' },
          { h3: 'Base de datos', text: 'Catálogos dinámicos, portales de clientes o sistemas propios requieren diseñar e implementar una base de datos, que es trabajo aparte del diseño web.' },
          { h3: 'Idiomas y portales de cliente', text: 'Multi-idioma con SEO correcto por idioma y áreas privadas para clientes suman estructura y contenido.' },
          { h3: 'Complejidad de la funcionalidad', text: 'No es lo mismo un sitio corporativo con integraciones puntuales que una herramienta con reglas de negocio propias. El alcance funcional es lo que más mueve el precio.' },
          { h3: 'SEO técnico y rendimiento', text: 'Un proyecto a medida incluye SEO técnico avanzado y rendimiento premium, lo que exige trabajo específico de arquitectura.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué se paga aparte del desarrollo',
        intro: 'Lo dejamos claro en la cotización, no a mitad del proyecto.',
        items: [
          'Infraestructura anual: desde $350 con dominio, hosting cloud y SSL. Para proyectos a medida o de alta demanda suele corresponder el VPS dedicado, a $550 al año; el nivel se define según el proyecto',
          'Base de datos nueva: cotización aparte',
          'Migración de datos desde tu sistema actual: cotización aparte',
          'Integraciones externas por API: cotización aparte',
          'Sitio en varios idiomas: cotización aparte, por cada idioma extra',
          'Contenido e imágenes, si no los tienes listos: producción con IA a precios fijos publicados en la página de precios',
          'Mantenimiento web: desde $59 al mes',
          'Entrega express: recargo del 30%',
          'ITBMS del 7% sobre el total',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo se paga',
        paragraphs: [
          'El pago se divide en tres partes: 50% al iniciar, 30% en el avance y 20% al entregar. Cada etapa queda respaldada por un alcance escrito y aprobado, y cualquier cambio de alcance se conversa antes de hacerse.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene un desarrollo a medida',
        paragraphs: [
          'Si tu necesidad cabe en un paquete, un desarrollo a medida es pagar de más. Una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $1,250, con hasta 6 páginas en total, o una tienda desde $1,950, cubren la mayoría de los negocios que solo necesitan presencia o venta en línea.',
          'Tampoco conviene si todavía no sabes qué quieres que haga el sistema. Un proyecto a medida necesita reglas claras; si el proceso de tu negocio aún cambia cada semana, lo sensato es empezar con algo más simple y aprender con el uso.',
          'Y si el presupuesto no alcanza para el piso de $2,900, es mejor arrancar con un paquete y dejar lo a medida para una segunda etapa, que forzar un proyecto complejo con recursos ajustados.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo del desarrollo a medida',
        items: [
          { q: '¿Cuánto cuesta el desarrollo web a medida?', a: 'Las páginas web corporativas a medida parten desde $2,900, sin ITBMS del 7%. El precio final se define tras un diagnóstico, según la arquitectura, las integraciones y la funcionalidad.' },
          { q: '¿Por qué no hay un precio cerrado?', a: 'Porque cada proyecto a medida tiene un alcance distinto. Lo que se integra, la base de datos y la complejidad funcional cambian el trabajo. Por eso se parte de un diagnóstico y se entrega una cotización con el alcance por escrito.' },
          { q: '¿La base de datos y las integraciones están incluidas?', a: 'No. La base de datos nueva, la migración de datos y las integraciones externas por API se cotizan aparte, según el caso.' },
          { q: '¿Cómo se paga un proyecto a medida?', a: 'En tres pagos: 50% al iniciar, 30% en el avance y 20% al entregar. Los precios no incluyen ITBMS.' },
          { q: '¿Cuándo NO me conviene un desarrollo a medida?', a: 'Cuando tu necesidad cabe en un paquete, cuando aún no tienes claras las reglas de lo que debe hacer el sistema o cuando el presupuesto no alcanza el piso de $2,900. En esos casos conviene empezar con un paquete.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'precios', label: 'Precios' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida con Vue y React' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Guía general de precios' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/hosting-infraestructura-panama', label: 'Hosting e infraestructura' },
        ],
      },
      { type: 'form', h2: 'Cuéntanos qué necesita tu operación', intro: 'Agenda un diagnóstico: definimos el alcance contigo y te entregamos una cotización por escrito.' },
    ],
    cta: {
      h2: 'Un diagnóstico antes de fijar el alcance y el precio',
      wa: 'Hola, me interesa un desarrollo web a medida. ¿Podemos agendar un diagnóstico?',
    },
  },
];
