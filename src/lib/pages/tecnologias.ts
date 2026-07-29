/* SILO TECNOLOGÍAS: cómo lo construimos. Vista técnica del servicio. */
import type { PageData } from '../types';

const parent = { slug: 'tecnologias', label: 'Tecnologías' };

export const tecnologias: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'tecnologias',
    title: 'Tecnologías de Desarrollo Web | WordPress, Shopify y A Medida',
    description: 'La tecnología correcta según tu objetivo: WordPress para contenido, Shopify para vender rápido, Vue y React cuando el proyecto exige código a medida.',
    h1: 'La tecnología se elige por tu objetivo',
    breadcrumb: 'Tecnologías',
    heroImage: { src: 'https://picsum.photos/seed/desarrollador-codigo-panama/1200/675', alt: 'Desarrollador trabajando en código frente a varios monitores' },
    lead: [
      'WordPress, Shopify o código a medida: cada uno gana en un escenario distinto. Elegimos por tu operación, no por nuestra comodidad.',
      'Una agencia que solo domina una herramienta te recomendará siempre esa herramienta. Nosotros operamos las tres a diario (y nuestros propios productos SaaS corren sobre stack a medida), así que la recomendación sale del caso, no del catálogo.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Tres caminos, un criterio',
        items: [
          { h3: 'WordPress', text: 'Cuando tu equipo publica contenido con frecuencia y necesita autonomía total. Temas propios, sin constructores pesados.', link: { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web WordPress' } },
          { h3: 'Shopify', text: 'Cuando quieres vender rápido sin administrar servidores. La plataforma se encarga de la infraestructura; nosotros de que convierta.', link: { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Diseño web Shopify' } },
          { h3: 'A medida con Vue y React', text: 'Cuando el rendimiento, las integraciones o el producto mismo exigen código propio. El mismo stack de nuestros SaaS.', link: { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo decidimos',
        paragraphs: [
          'Tres preguntas definen la tecnología. Primera: <strong>¿quién editará el contenido y con qué frecuencia?</strong> Si tu equipo publica cada semana, el panel de WordPress paga su peso en oro. Si el sitio cambia dos veces al año, hay opciones más rápidas.',
          'Segunda: <strong>¿qué integraciones necesita tu operación?</strong> Inventario, facturación, CRM, reservas. Cada plataforma integra distinto, y forzar una integración contra la corriente sale caro para siempre.',
          'Tercera: <strong>¿cuánto pesa la velocidad en tu negocio?</strong> Para una tienda o un sitio que recibe pauta, cada segundo de carga es dinero. Ahí el desarrollo a medida con generación estática no tiene rival.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué tecnología es más barata?', a: 'WordPress suele tener el menor costo inicial; Shopify cobra suscripción mensual pero elimina el mantenimiento de infraestructura; a medida cuesta más al inicio y rinde más a escala. El barato de verdad es el que se ajusta a tu operación: cambiar de plataforma a mitad de camino es lo caro.' },
          { q: '¿Puedo migrar de una tecnología a otra después?', a: 'Sí, y lo hacemos con frecuencia (ver <a href="/servicios/redisenio-web-panama/">rediseño web</a>). Con mapa de URLs y redirecciones 301 la migración conserva tu posicionamiento.' },
          { q: '¿El código queda a mi nombre?', a: 'Siempre. Dominio, repositorio y accesos se registran a nombre de tu empresa al completar el pago. No retenemos nada como mecanismo de permanencia.' },
          { q: '¿Ustedes solo trabajan con una tecnología?', a: 'No. Operamos WordPress, Shopify y stack a medida (Vue, React, Laravel) a diario, y nuestros propios <a href="/saas/">productos SaaS</a> corren sobre código propio. Por eso la recomendación sale de tu caso y no del catálogo: no ganamos nada empujándote a la herramienta que más nos conviene.' },
          { q: '¿Qué tecnología posiciona mejor en Google?', a: 'Ninguna gana por sí sola: Google mira velocidad, estructura y contenido, no la plataforma. Las tres pueden posicionar bien si el SEO técnico está bien hecho. Lo que hunde el ranking es un sitio pesado, sin <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a> ni contenido, en cualquier tecnología.' },
          { q: '¿Cuánto tardan en decidir qué tecnología usar?', a: 'Una sola conversación de diagnóstico suele bastar. Revisamos quién edita el contenido, qué integraciones necesitas y cuánto pesa la velocidad en tu negocio. Con eso sale la recomendación y una cotización cerrada por escrito antes de empezar.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo elegimos la tecnología de tu proyecto',
        intro: 'No hay corazonada ni preferencia de agencia. Es un proceso corto y en orden.',
        items: [
          { h3: '1. Diagnóstico de tu operación', text: 'Escuchamos cómo trabajas hoy: quién publica, qué vendes, con qué sistemas te toca integrar. La tecnología correcta se deduce de tu día a día, no de una moda.' },
          { h3: '2. Prueba de las tres preguntas', text: 'Aplicamos el criterio de edición, integraciones y velocidad. Si dos apuntan a la misma plataforma, la decisión está clara; si compiten, te explicamos el intercambio.' },
          { h3: '3. Recomendación por escrito', text: 'Recibes la tecnología propuesta con la razón concreta detrás y una cotización cerrada por escrito antes de empezar. Nada de sorpresas a mitad del proyecto.' },
          { h3: '4. Construcción y entrega a tu nombre', text: 'Desarrollamos, capacitamos a tu equipo y te entregamos dominio, accesos y repositorio a nombre de tu empresa. Coordinamos todo por WhatsApp y el pago admite Yappy.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Casos típicos y qué elegimos',
        intro: 'Ejemplos reales de cómo cae la decisión según el negocio.',
        items: [
          { h3: 'Empresa que publica seguido', text: 'Un despacho, una revista o una marca con blog activo necesita autonomía para publicar sin depender de nadie. Ahí WordPress con tema propio gana.', link: { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Ver WordPress' } },
          { h3: 'Marca que quiere vender ya', text: 'Catálogo claro, pagos con tarjeta y Yappy, envíos locales. Si no quieres administrar servidores, Shopify te pone a vender rápido.', link: { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Ver Shopify' } },
          { h3: 'Producto o portal propio', text: 'Cuando tu operación vive en hojas de cálculo o tu producto ES la aplicación, la plantilla se queda corta y toca código a medida.', link: { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Ver a medida' } },
        ],
      },
      {
        type: 'statement',
        text: 'La mejor tecnología no es la más nueva ni la más popular: es la que tu equipo puede operar sin nosotros el día que ya no estemos.',
        strong: 'la que tu equipo puede operar sin nosotros',
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios', label: 'Servicios de diseño web' },
          { slug: 'funcionalidades', label: 'Funcionalidades' },
          { slug: 'blog/diferencia-wordpress-shopify-diseno-web', label: 'WordPress vs Shopify' },
        ],
      },
    ],
  },

  /* ---------- WORDPRESS ---------- */
  {
    slug: 'tecnologias/diseno-web-wordpress-panama',
    parent,
    title: 'Diseño Web WordPress en Panamá | Temas Propios, sin Plantillas',
    description: 'Diseño web en WordPress para empresas en Panamá: temas desarrollados a medida, sin plantillas compradas ni constructores lentos. Rápido y autoadministrable.',
    h1: 'Diseño web en WordPress, sin plantillas',
    breadcrumb: 'WordPress',
    service: { type: 'Diseño y desarrollo web en WordPress' },
    lead: [
      'WordPress no es sinónimo de lento. Lo lento es la plantilla comprada con veinte plugins encima. Nosotros construimos el tema desde cero para tu marca.',
      'La razón para elegir WordPress sigue siendo imbatible: su panel es el más fácil de usar del mercado, y tu equipo publica sin abrir un ticket. La razón para huirle (sitios pesados que se rompen con cada actualización) no es culpa de WordPress: es culpa de cómo se implementa.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye un WordPress nuestro',
        items: [
          'Tema propio desarrollado a medida para tu diseño',
          'Cero constructores visuales que inflan el código',
          'Solo los plugins indispensables, auditados',
          'Campos personalizados por tipo de contenido',
          'Optimización de imágenes y carga diferida',
          'SEO técnico: metadatos, schema y sitemap',
          'Blog listo para posicionamiento orgánico',
          'Capacitación grabada para tu equipo',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué no usamos constructores visuales',
        paragraphs: [
          'Elementor y similares generan hasta diez veces más código del necesario para cada sección. Ese peso se paga en velocidad de carga, y la velocidad se paga en posiciones de Google y en conversiones perdidas.',
          'Peor aún: el constructor te ata. Si algún día lo desinstalas, el diseño desaparece con él. <strong>Un tema a medida no tiene esa hipoteca</strong>: es tuyo, es liviano y cualquier desarrollador competente puede mantenerlo.',
          'El panel que recibe tu equipo queda limpio: los campos exactos de tu contenido, sin cien opciones que nadie pidió.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta un sitio WordPress en Panamá?', a: 'Los rangos de <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> aplican: desde $950 con hasta 6 páginas. WordPress es la tecnología, no un servicio aparte.' },
          { q: '¿WordPress es seguro?', a: 'Sí, mantenido correctamente. Los sitios comprometidos son casi siempre instalaciones abandonadas con plugins sin actualizar. Nuestro <a href="/crecimiento/mantenimiento-hosting-web-panama/">plan de mantenimiento</a> cubre actualizaciones, respaldos verificados y monitoreo.' },
          { q: '¿Puedo seguir usando mi WordPress actual?', a: 'Si la base es sana, sí: lo auditamos y modernizamos encima. Si está construido sobre una plantilla pesada, suele ser más barato reconstruir el tema que pelear contra él. La auditoría lo determina.' },
          { q: '¿WordPress sirve para SEO en Panamá?', a: 'Muy bien, si se implementa liviano. WordPress da control total sobre metadatos, estructura de URLs, schema y un blog para contenido orgánico. Sobre esa base montamos tu <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a> y, si atiendes clientes por zona, el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local en Google Maps</a>.' },
          { q: '¿Puedo administrar el sitio yo mismo sin saber programar?', a: 'Ese es justo el punto fuerte de WordPress. Dejamos el panel limpio, con los campos exactos de tu contenido, y te entregamos una capacitación grabada. Publicas, editas y subes fotos sin abrir un ticket ni pagarnos por cada cambio.' },
          { q: '¿Puedo vender por WhatsApp desde mi WordPress?', a: 'Sí. Sumamos botón flotante de WhatsApp, enlaces con mensaje prellenado por producto o servicio y formularios que te llegan directo al chat. Es la vía más usada para cerrar en Panamá y la dejamos lista de serie.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo construimos tu WordPress',
        intro: 'Sin plantillas compradas y sin constructores pesados. Este es el orden.',
        items: [
          { h3: '1. Diseño primero, código después', text: 'Definimos el diseño de tu marca antes de tocar WordPress. El tema se construye para ese diseño, no al revés forzando una plantilla ajena.' },
          { h3: '2. Tema propio y liviano', text: 'Programamos el tema a medida, con solo los plugins indispensables y auditados. Cero código inflado que arrastre la velocidad de carga.' },
          { h3: '3. Panel a la medida de tu equipo', text: 'Creamos campos personalizados por tipo de contenido para que publicar sea llenar casillas claras, no pelear con un editor de mil opciones.' },
          { h3: '4. SEO técnico y capacitación', text: 'Dejamos metadatos, schema, sitemap y blog listos para posicionar, y te entregamos una capacitación grabada. El sitio queda a tu nombre.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién encaja WordPress',
        intro: 'No es para todos. Estos son los perfiles donde rinde de verdad.',
        items: [
          { h3: 'Equipos que publican seguido', text: 'Si tu empresa saca noticias, artículos o novedades cada semana, la autonomía del panel de WordPress paga su peso en oro.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Web corporativa' } },
          { h3: 'Marcas que quieren blog', text: 'El contenido orgánico es de los canales más rentables a largo plazo. WordPress trae el blog listo y se lleva bien con una estrategia de SEO.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO' } },
          { h3: 'Negocios que crecerán por etapas', text: 'Empiezas con una web sólida y luego sumas reservas, pagos o un chatbot sin reconstruir todo desde cero.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' } },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' },
          { slug: 'blog/diferencia-wordpress-shopify-diseno-web', label: 'WordPress vs Shopify' },
        ],
      },
    ],
  },

  /* ---------- SHOPIFY ---------- */
  {
    slug: 'tecnologias/diseno-web-shopify-panama',
    parent,
    title: 'Diseño Web Shopify en Panamá | Tiendas que Venden desde el Día 1',
    description: 'Diseño de tiendas Shopify en Panamá: catálogo, pagos y envíos configurados para el mercado local, con fichas de producto que convierten.',
    h1: 'Diseño web en Shopify',
    breadcrumb: 'Shopify',
    service: { type: 'Diseño de tiendas Shopify' },
    lead: [
      'Shopify resuelve la infraestructura: servidores, seguridad y pagos certificados. Nuestro trabajo es que tu tienda convierta y funcione para Panamá.',
      'La trampa de Shopify es creer que basta con activar una plantilla. Una tienda que vende necesita fichas de producto pensadas para decidir, envíos que cuadren con la logística local y el pago que tu cliente panameño realmente usa. Eso no viene en la caja.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué configuramos en tu Shopify',
        items: [
          'Diseño de tienda alineado a tu marca',
          'Carga y estructura del catálogo completo',
          'Fichas de producto orientadas a conversión',
          'Pagos: tarjetas y alternativas locales',
          'Zonas de envío, tarifas e ITBMS',
          'Correos automáticos de pedido y seguimiento',
          'Recuperación de carritos abandonados',
          'Analítica de ventas y píxeles de pauta',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo Shopify es la decisión correcta',
        paragraphs: [
          'Shopify gana cuando el negocio es vender productos y no quieres que la tecnología sea tu problema. La plataforma absorbe servidores, certificados, seguridad de pagos y actualizaciones. Tú vendes; ella sostiene.',
          'El intercambio es una suscripción mensual y trabajar dentro de su modelo. Para catálogos estándar es un trato claramente favorable. Cuando necesitas reglas de negocio muy particulares o integración profunda con sistemas internos, evaluamos WooCommerce o <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">a medida</a>.',
          'Y sí: <strong>Shopify funciona en Panamá</strong>, con dólares, envíos locales e internacionales, y pasarelas compatibles con bancos panameños. Configurarlo bien es nuestro trabajo.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una tienda Shopify?', a: 'Nuestro desarrollo parte desde <strong>$1,500</strong> según catálogo e integraciones. La suscripción de Shopify se paga aparte, directo a la plataforma.' },
          { q: '¿Puedo cobrar con Yappy en Shopify?', a: 'Sí, mediante la <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">integración del Botón de Pago Yappy</a>. Es una de las configuraciones que más pedimos en tiendas panameñas y la hacemos de serie.' },
          { q: '¿Shopify o WooCommerce?', a: 'Shopify para vender rápido sin administrar infraestructura; WooCommerce para control total y cero comisiones de plataforma. Publicamos una <a href="/blog/diferencia-wordpress-shopify-diseno-web/">comparación honesta</a> y te recomendamos según tu caso.' },
          { q: '¿Cómo cobra el ITBMS mi tienda Shopify?', a: 'Configuramos el impuesto en las zonas de envío para que el ITBMS se calcule y muestre correctamente al pagar. También dejamos las tarifas de envío por zona para que el cliente vea el total real antes de confirmar, sin sorpresas que abandonen el carrito.' },
          { q: '¿Puedo recuperar los carritos que se abandonan?', a: 'Sí. Shopify permite correos automáticos de recuperación de carrito, y los dejamos activados de serie. Recuperar una parte de esos carritos suele ser de las acciones más rentables de una tienda, porque son clientes que ya estaban por comprar.' },
          { q: '¿Mi tienda Shopify sirve para pauta en Facebook e Instagram?', a: 'Sí. Instalamos los píxeles y la analítica de ventas para que tus campañas de <a href="/marketing/facebook-instagram-ads-panama/">Facebook e Instagram Ads</a> midan compras reales. Sin ese seguimiento bien puesto, estás pautando a ciegas.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo dejamos tu Shopify lista para Panamá',
        intro: 'Activar una plantilla no es tener una tienda. Este es el trabajo real.',
        items: [
          { h3: '1. Marca y catálogo', text: 'Alineamos el diseño a tu marca y cargamos el catálogo completo con fichas de producto pensadas para decidir la compra, no solo para listar.' },
          { h3: '2. Pagos que usa tu cliente', text: 'Configuramos tarjetas y el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Botón de Pago Yappy</a>, la forma que el comprador panameño realmente usa. El pago que falta es la venta que se pierde.' },
          { h3: '3. Envíos, ITBMS y correos', text: 'Definimos zonas de envío, tarifas e ITBMS, y activamos los correos de pedido y seguimiento para que el cliente sepa dónde va su compra.' },
          { h3: '4. Analítica y recuperación', text: 'Dejamos píxeles de pauta, analítica de ventas y recuperación de carritos abandonados. La tienda arranca midiendo desde el primer pedido.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El error caro de tratar Shopify como algo que se activa solo',
        paragraphs: [
          'La plataforma resuelve la infraestructura, pero no decide por ti cómo se presenta un producto, qué envíos ofreces ni con qué se paga. Una tienda que salió de la caja se ve bien y vende poco, porque le falta justo lo que empuja al cliente a completar la compra.',
          'La diferencia está en detalles concretos: una ficha que responde las dudas antes de que aparezcan, el <strong>Botón de Pago Yappy</strong> visible, envíos que cuadran con la logística local y el ITBMS calculado bien. Ninguno viene configurado por defecto.',
          'Por eso cotizamos el trabajo de configuración aparte de la suscripción de Shopify, con precio cerrado por escrito antes de empezar. Pagas por que la tienda venda, no por encender un tema.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas' },
          { slug: 'blog/diferencia-wordpress-shopify-diseno-web', label: 'WordPress vs Shopify' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu tienda Shopify', wa: 'Hola, quiero cotizar una tienda en Shopify.' },
  },

  /* ---------- A MEDIDA ---------- */
  {
    slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama',
    parent,
    title: 'Desarrollo Web a Medida en Panamá | Vue 3, React y Laravel',
    description: 'Desarrollo web a medida en Panamá con Vue 3, React y Laravel: el mismo stack con el que operamos nuestros propios SaaS en producción.',
    h1: 'Desarrollo web a medida',
    breadcrumb: 'A Medida (Vue / React)',
    service: { type: 'Desarrollo web a medida con Vue y React' },
    lead: [
      'Cuando la plantilla se queda corta, se programa. Plataformas, portales de clientes e integraciones con el stack que sostiene nuestros propios productos.',
      'La credencial importa: no vendemos tecnología que solo conocemos de talleres. ChatMantis, WapyCRM y Cifrao (nuestros tres SaaS) corren en producción sobre Vue, React y Laravel, con clientes reales y datos que no se pueden perder. Ese es el estándar con el que construimos lo tuyo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Cuándo necesitas código a medida',
        items: [
          'Tu operación vive en hojas de cálculo paralelas al sistema',
          'Pagas varias suscripciones que no se hablan entre sí',
          'Necesitas un portal donde tus clientes gestionen sus trámites',
          'El rendimiento del sitio es un requisito de negocio, no un deseo',
          'Las integraciones (ERP, facturación, logística) mandan',
          'Tu producto ES la aplicación, no un folleto de ella',
        ],
      },
      {
        type: 'prose',
        h2: 'Nuestro stack y por qué',
        paragraphs: [
          '<strong>Vue 3 y React</strong> en el frontend: interfaces rápidas, componentes reutilizables y estado predecible. <strong>Laravel</strong> en el backend: autenticación, permisos, colas y auditoría resueltos con un framework maduro. <strong>Docker</strong> en infraestructura: el mismo código corre igual en desarrollo y producción.',
          'Para sitios públicos usamos generación estática cuando aplica: páginas servidas como archivos, con tiempos de carga que ningún CMS tradicional alcanza. Es la misma arquitectura de este sitio.',
          'Todo se entrega documentado y con el repositorio a tu nombre. <strong>La continuidad no puede depender de nosotros</strong>: ese es el diseño, no una promesa.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta un desarrollo a medida?', a: 'Depende del alcance, por eso no publicamos una cifra única. El proceso: sesión de diagnóstico sin costo, dimensionamos el proyecto y recibes un rango realista antes de invertir más tiempo. Los proyectos se dividen en entregas funcionales con precio por etapa.' },
          { q: '¿Cómo evitan que el proyecto se alargue para siempre?', a: 'Entregas funcionales: cada etapa produce algo usable que puedes evaluar. Si el alcance cambia, se cotiza aparte y tú decides. El contrato define qué incluye cada entrega.' },
          { q: '¿Qué pasa si después quiero cambiar de proveedor?', a: 'Te llevas todo: repositorio, documentación y entornos dockerizados que cualquier equipo competente puede levantar. Lo decimos en la propuesta y lo cumplimos en la entrega.' },
          { q: '¿Pueden integrar Yappy y WhatsApp en un desarrollo a medida?', a: 'Sí, y es de lo que más pedimos. Conectamos el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Botón de Pago Yappy</a>, pasarelas de tarjeta y flujos de WhatsApp directo en tu plataforma. Al ser código propio, la integración se hace exactamente como tu operación la necesita, sin las limitaciones de un plugin genérico.' },
          { q: '¿Un sitio a medida es mejor para SEO?', a: 'Puede serlo cuando la velocidad manda: con generación estática, las páginas se sirven como archivos y cargan más rápido que cualquier CMS tradicional. Eso ayuda al <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento</a>, siempre acompañado de estructura y contenido bien trabajados.' },
          { q: '¿Puedo empezar pequeño y crecer después?', a: 'Es la vía recomendada. Dividimos el proyecto en entregas funcionales: arrancas con lo esencial en producción y sumas módulos por etapas, cada uno con su cotización cerrada por escrito. Así inviertes a medida que el proyecto prueba su valor.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos un desarrollo a medida',
        intro: 'Sin cheques en blanco ni proyectos que no terminan nunca. Este es el método.',
        items: [
          { h3: '1. Diagnóstico sin costo', text: 'Una sesión para entender tu operación y qué debe resolver el software. De ahí sale el alcance real, no una lista de deseos sin fin.' },
          { h3: '2. Dimensionamiento y rango', text: 'Dividimos el proyecto en entregas funcionales y recibes un rango realista, con cotización cerrada por escrito por etapa antes de invertir más tiempo.' },
          { h3: '3. Entregas usables por etapa', text: 'Cada etapa produce algo que puedes probar y usar. Si el alcance cambia, se cotiza aparte y tú decides; el contrato define qué incluye cada entrega.' },
          { h3: '4. Entrega documentada y a tu nombre', text: 'Cierras con repositorio, documentación y entornos dockerizados a nombre de tu empresa. La continuidad no depende de nosotros por diseño.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué construimos a medida',
        intro: 'Cuando la plantilla se queda corta, esto es lo que programamos.',
        items: [
          { h3: 'Portales de cliente', text: 'Un espacio donde tus clientes consultan estados, suben documentos o gestionan sus trámites sin llamarte. Menos correos, más autoservicio.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas' } },
          { h3: 'Plataformas con IA', text: 'Chatbots y flujos inteligentes conectados a tu operación, el mismo tipo de producto que corre en nuestro ChatMantis.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' } },
          { h3: 'Automatizaciones internas', text: 'Conectar los sistemas que hoy no se hablan entre sí para que la información fluya sola, sin hojas de cálculo paralelas.', link: { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones' } },
        ],
      },
      {
        type: 'statement',
        text: 'No vendemos tecnología que solo conocemos de talleres: el stack con el que construimos lo tuyo es el mismo que sostiene nuestros SaaS en producción, con clientes y datos reales.',
        strong: 'el mismo que sostiene nuestros SaaS en producción',
      },
      {
        type: 'related',
        items: [
          { slug: 'saas', label: 'Nuestros SaaS' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Sistemas de Reservas' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
        ],
      },
    ],
    cta: { h2: 'Agenda un diagnóstico técnico', wa: 'Hola, quiero cotizar un desarrollo a medida.' },
  },
];
