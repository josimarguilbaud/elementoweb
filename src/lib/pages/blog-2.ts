import type { PageData } from '../types';

export const blog2: PageData[] = [
  {
    slug: 'blog/como-integrar-yappy-tu-tienda-online',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cómo integrar Yappy en tu tienda online paso a paso',
    description: 'Aprende a integrar el Botón de Pago Yappy en tu tienda online en Panamá: requisitos, pasos, comisiones y ventajas para cobrar sin fricción y vender más.',
    h1: 'Cómo integrar Yappy en tu tienda online paso a paso',
    breadcrumb: 'Integrar Yappy en tu tienda',
    category: 'E-commerce',
    date: '2026-07-18',
    heroImage: {
      src: '/images/blog/como-integrar-yappy-tu-tienda-online.jpg',
      alt: 'Teléfono móvil con ondas de pago sin contacto, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Para integrar Yappy en tu tienda online en Panamá necesitas el Botón de Pago Yappy comercial del Banco General: cuenta comercial, aviso de operación vigente y una tienda funcional. Con las credenciales aprobadas, Elemento Web lo conecta a WooCommerce, Shopify o a una web a medida por API, activa la confirmación automática y lo prueba con una compra real.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es el Botón de Pago Yappy?',
        paragraphs: [
          'Yappy es la billetera digital del Banco General que los panameños usan para enviarse dinero entre personas. Su versión comercial, el <strong>Botón de Pago Yappy</strong>, sirve para cobrar en una tienda online sin que el cliente escriba un número de celular ni salga del sitio.',
          'El Yappy personal sirve para transferencias entre amigos y familiares. El Botón de Pago comercial se integra al checkout, confirma cada pago de forma automática y deja un registro de cada transacción, lo que elimina la conciliación manual.',
          'En Panamá muchos compradores no tienen tarjeta de crédito o prefieren no darla por internet, pero la mayoría tiene Yappy. Ofrecerlo en el checkout baja la barrera de compra con un canal de pago que el cliente ya conoce.',
        ],
      },
      {
        type: 'prose',
        h2: 'Requisitos para activar el Botón de Pago Yappy',
        paragraphs: [
          'El Botón de Pago Yappy se solicita como negocio, no como persona natural. El Banco General pide una cuenta comercial, el <strong>aviso de operación</strong> vigente, los datos de tu empresa y una tienda online funcional donde instalar el botón. El banco valida tu actividad comercial antes de habilitarte, y ese trámite lo gestionas directamente con ellos.',
          'Gestiona la aprobación del banco en paralelo mientras se construye la tienda: cuando el sitio esté listo, solo se conectan las credenciales y puedes vender el mismo día. El alcance completo está en el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">servicio de integración de Yappy y pasarelas de pago</a>.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo integrar Yappy en tu tienda online paso a paso',
        intro: 'Los pasos son los mismos en cualquier plataforma; solo cambia el método de conexión del paso 3.',
        items: [
          { h3: 'Solicita el Botón de Pago al banco', text: 'Pide al Banco General el Botón de Pago Yappy comercial con tus documentos de negocio. El banco valida tu aviso de operación y tu cuenta antes de darte acceso.' },
          { h3: 'Obtén tus credenciales', text: 'Tras la aprobación, el banco entrega las llaves técnicas (identificadores y secretos) que conectan tu tienda con Yappy. Guárdalas como cualquier contraseña de cobro.' },
          { h3: 'Instala el módulo o la integración', text: 'En WooCommerce o Shopify se instala el módulo correspondiente; en una web a medida, la conexión se hace por API.' },
          { h3: 'Configura la confirmación automática', text: 'Se define la URL de notificación para que la tienda marque el pedido como pagado en cuanto el cliente paga, sin intervención manual ni descuadres.' },
          { h3: 'Haz una compra de prueba real', text: 'Antes de publicar, procesa una transacción real por un monto pequeño y confirma que el dinero llega y el pedido cambia de estado.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Comisiones de Yappy y tiempos de abono',
        paragraphs: [
          'El Banco General cobra una comisión por transacción según el acuerdo comercial que tengas con el banco. Ese porcentaje no lo define Elemento Web: confírmalo por escrito con tu ejecutivo antes de fijar tus precios.',
          'Frente a las pasarelas de tarjeta, el dinero de Yappy se mueve dentro del sistema bancario panameño, lo que suele traducirse en abonos ágiles y menos rechazos. Yappy cubre al cliente local que no usa tarjeta; una pasarela con tarjeta cubre a quien la prefiere o compra desde el exterior. Por eso conviene <strong>ofrecer ambos</strong> en el checkout.',
        ],
      },
      {
        type: 'prose',
        h2: 'Ventajas de cobrar con Yappy en tu web',
        paragraphs: [
          'Ver el logo de Yappy en el checkout le indica al comprador panameño que paga por un canal que usa a diario, y eso reduce el abandono en el último paso de la compra.',
          'Yappy también ordena la operación: en lugar de recibir capturas de pantalla por WhatsApp y verificar transferencias a mano, cada pago queda registrado y asociado a su pedido, sin riesgo de dar por pagado algo que nunca llegó.',
          'Si tu tienda se conecta además con <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas o citas online</a> o con atención por WhatsApp, Yappy cierra el ciclo: el cliente descubre, decide y paga sin salir de tu sitio.',
        ],
      },
      {
        type: 'statement',
        text: 'Aceptar Yappy no es un lujo técnico: es hablar el idioma de pago que tu cliente panameño ya usa todos los días.',
        strong: 'ya usa todos los días',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Puedo usar mi Yappy personal para cobrar en mi tienda?', a: 'Técnicamente puedes pedir transferencias a tu número, pero no es lo recomendable para un negocio. El Yappy personal no confirma pagos de forma automática ni se integra al checkout; el <strong>Botón de Pago comercial</strong> sí, y eso evita errores y trabajo manual.' },
          { q: '¿Cuánto cobra Yappy por transacción?', a: 'La comisión la define el Banco General según tu acuerdo comercial. No inventamos ese número: confírmalo por escrito con tu ejecutivo del banco antes de fijar tus precios de venta.' },
          { q: '¿Yappy funciona con WooCommerce y Shopify?', a: 'Sí. Existe integración para las plataformas más usadas y también por API para webs a medida. Nosotros conectamos el método que corresponda a tu tienda y lo dejamos probado en vivo.' },
          { q: '¿Cuánto tarda en estar listo?', a: 'La parte técnica es rápida una vez tienes las credenciales del banco. El tiempo real depende de que el Banco General apruebe tu Botón de Pago comercial, por eso conviene gestionarlo en paralelo mientras se construye la tienda.' },
          { q: '¿Debo ofrecer solo Yappy o también tarjeta?', a: 'Lo ideal es ofrecer ambos. Muchos panameños prefieren Yappy, pero otros pagan con tarjeta o compran desde el exterior. Combinar métodos reduce el abandono del carrito y maximiza tus ventas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Integración de Yappy y pasarelas de pago' },
          { slug: 'blog/metodos-de-pago-online-en-panama', label: 'Métodos de pago online en Panamá' },
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online en Panamá' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },

          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Diseño web para retail y moda' },
          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Diseño web para restaurantes' },
        ],
      },
    ],
    cta: {
      h2: 'Activa Yappy en tu tienda y cobra sin fricción',
      wa: 'Hola, quiero integrar el Botón de Pago Yappy en mi tienda online. ¿Me ayudan con el proceso?',
    },
  },

  {
    slug: 'blog/como-crear-una-tienda-online-en-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cómo crear una tienda online en Panamá: guía completa 2026',
    description: 'Guía paso a paso para crear tu tienda online en Panamá: plataforma, catálogo, pagos con Yappy, envíos y logística local.',
    h1: 'Cómo crear una tienda online en Panamá: guía completa 2026',
    breadcrumb: 'Crear tienda online',
    category: 'E-commerce',
    date: '2026-07-04',
    heroImage: {
      src: '/images/blog/como-crear-una-tienda-online-en-panama.jpg',
      alt: 'Caja de envío abierta, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Para crear una tienda online en Panamá define primero qué vendes, a quién y cómo entregas. Después elige plataforma (Shopify o WooCommerce), carga el catálogo con fotos y precios, conecta Yappy y una pasarela con tarjeta, configura envíos por zona y prueba una compra completa antes de publicar. Así arma Elemento Web cada tienda.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Antes de vender: define qué, a quién y cómo entregas',
        paragraphs: [
          'Empezar por la plataforma es el error más común. Antes, haz una lista de tus productos, sus variantes (tallas, colores, sabores) y las zonas donde puedes entregar. Una tienda de joyas artesanales para todo el país no se arma igual que una que reparte comida caliente en la ciudad: esa lista define el catálogo, los costos de envío y la plataforma.',
          'Define también tu diferencia frente a la competencia online que ya existe en casi todos los rubros en Panamá: precio, rapidez de entrega, atención personalizada o un producto exclusivo. Esa respuesta ordena después el mensaje de toda la tienda.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué plataforma usar para una tienda online en Panamá?',
        paragraphs: [
          'Las plataformas más usadas en Panamá son Shopify y WooCommerce sobre WordPress. <strong>Shopify</strong> conviene si quieres empezar rápido, con poco mantenimiento técnico y una mensualidad fija. <strong>WooCommerce</strong> da más control y no cobra comisiones de plataforma, a cambio de hacerte cargo del hosting y las actualizaciones. La comparación completa está en <a href="/blog/shopify-vs-woocommerce-panama/">Shopify vs WooCommerce en Panamá</a>.',
          'Para catálogos grandes, integraciones especiales o un rendimiento exigente, a veces conviene una tienda a medida. Elegir la plataforma según tu negocio es el punto de partida de nuestro <a href="/servicios/tiendas-online-ecommerce-panama/">servicio de tiendas online</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo armar un catálogo que venda',
        paragraphs: [
          'Cada ficha de producto necesita fotos claras, una descripción que responda las dudas del cliente y el precio visible. Como el comprador no puede tocar el producto, la foto hace el trabajo del vendedor: invertir en fotografía rinde más que casi cualquier otra mejora visual.',
          'Organiza los productos en categorías lógicas para que el cliente encuentre lo que busca en pocos clics: ropa por tipo y talla, servicios por resultado. Esa estructura también ayuda a Google a entender tu tienda y mostrarla a quien busca lo que vendes.',
        ],
      },
      {
        type: 'steps',
        h2: 'Pasos para crear una tienda online en Panamá',
        intro: 'El orden que seguimos en Elemento Web para pasar de cero a vender sin saltarse nada crítico.',
        items: [
          { h3: 'Registra tu dominio y define la marca', text: 'Consigue un dominio propio (tunegocio.com) y ten listo tu logo y colores. Un dominio propio transmite más confianza que un subdominio gratuito.' },
          { h3: 'Monta la plataforma y el diseño', text: 'Se instala la tienda, se aplica tu identidad visual y se optimiza para celular, que es donde compra la mayoría en Panamá.' },
          { h3: 'Carga el catálogo con fotos y precios', text: 'Se suben los productos con variantes, descripciones y precios, y se decide qué destacar primero.' },
          { h3: 'Configura los pagos', text: 'Se conecta el Botón de Pago Yappy y una pasarela de tarjeta para cubrir a ambos tipos de cliente.' },
          { h3: 'Define envíos y zonas de entrega', text: 'Se configuran las tarifas por zona o el retiro en tienda. El cliente debe saber cuánto cuesta y cuándo llega antes de pagar.' },
          { h3: 'Prueba todo y lanza', text: 'Se hace una compra de prueba completa, se revisa el flujo en el celular y solo entonces se publica.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué métodos de pago ofrecer en tu tienda online?',
        paragraphs: [
          'En Panamá conviene ofrecer <strong>Yappy y tarjeta</strong> juntos. Muchos compradores no usan tarjeta en línea pero tienen Yappy; otros prefieren la tarjeta o compran desde el exterior. Combinarlos evita perder al cliente que ya decidió comprar y no encuentra su método. El detalle técnico está en cómo <a href="/blog/como-integrar-yappy-tu-tienda-online/">integrar Yappy en tu tienda online</a>.',
          'Las transferencias manuales con captura por WhatsApp funcionan al principio, pero con volumen se convierten en verificaciones y errores. El Botón de Pago Yappy y la pasarela confirman cada pago de forma automática.',
        ],
      },
      {
        type: 'prose',
        h2: 'Envíos y logística local en Panamá',
        paragraphs: [
          'Si el envío es caro, lento o incierto, el cliente no vuelve. Define desde el inicio si entregas tú, si usas un servicio de mensajería o si combinas ambos según la zona, y publica tiempos y costos reales (por ejemplo, entrega en 2 a 3 días hábiles en la ciudad).',
          'Cubrir todo el país desde el primer día es un riesgo si tu operación no lo sostiene. Una opción rentable en Panamá es ofrecer <strong>retiro en punto</strong> o coordinar la entrega por WhatsApp en zonas específicas, y ampliar la cobertura a medida que ordenas los envíos.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta crear una tienda online en Panamá?', a: 'Nuestro e-commerce parte desde <strong>$1,950</strong> según el catálogo, las integraciones y el nivel de personalización. Antes de empezar recibes una cotización cerrada por escrito, sin costos sorpresa a mitad del proyecto.' },
          { q: '¿Necesito tener aviso de operación para vender online?', a: 'Para operar formalmente y activar cobros comerciales como el Botón de Pago Yappy, sí necesitas tu aviso de operación vigente. Es un requisito del banco, no algo que dependa de nosotros.' },
          { q: '¿Puedo administrar la tienda yo mismo después?', a: 'Sí. Te entregamos la tienda a tu nombre y te capacitamos para cargar productos, ver pedidos y gestionar el día a día. Si prefieres delegarlo, ofrecemos planes de mantenimiento desde $99 al mes.' },
          { q: '¿Cuánto tarda tener la tienda lista?', a: 'Depende del tamaño del catálogo y de las integraciones. Una tienda bien planificada suele estar lista en pocas semanas; lo que más influye es la rapidez con la que nos entregas fotos, precios y textos.' },
          { q: '¿Sirve para vender en todo el país o solo en la ciudad?', a: 'Sirve para el alcance que tu logística soporte. Puedes empezar entregando en tu zona y ampliar cobertura a medida que ordenas los envíos. La tienda se configura según lo que puedas cumplir bien.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce en Panamá' },
          { slug: 'blog/shopify-vs-woocommerce-panama', label: 'Shopify vs WooCommerce en Panamá' },
          { slug: 'blog/como-integrar-yappy-tu-tienda-online', label: 'Cómo integrar Yappy en tu tienda' },
          { slug: 'blog/metodos-de-pago-online-en-panama', label: 'Métodos de pago online en Panamá' },

          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Diseño web para retail y moda' },
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Diseño web para importadoras' },
        ],
      },
    ],
    cta: {
      h2: 'Convierte tu idea en una tienda que vende',
      wa: 'Hola, quiero crear una tienda online en Panamá. ¿Me ayudan a armarla de cero?',
    },
  },

  {
    slug: 'blog/shopify-vs-woocommerce-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Shopify vs WooCommerce en Panamá: cuál te conviene',
    description: 'Comparativa honesta entre Shopify y WooCommerce para vender en Panamá: costos reales, comisiones, control, mantenimiento y cuál conviene según tu negocio.',
    h1: 'Shopify vs WooCommerce en Panamá: cuál te conviene',
    breadcrumb: 'Shopify vs WooCommerce',
    category: 'E-commerce',
    date: '2026-06-20',
    heroImage: {
      src: '/images/blog/shopify-vs-woocommerce-panama.jpg',
      alt: 'Dos carritos de compra de diseños distintos, lado a lado, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Entre Shopify vs WooCommerce en Panamá, Shopify conviene si quieres lanzar rápido con una mensualidad fija y sin administrar hosting. WooCommerce conviene si buscas control total, cero comisiones de plataforma por venta y costos que no crecen con tu volumen, a cambio de más mantenimiento técnico. Elemento Web trabaja con ambas y recomienda según tu catálogo y volumen.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La diferencia de fondo entre Shopify y WooCommerce',
        paragraphs: [
          'Shopify es un servicio que alquilas y WooCommerce es un software que instalas. Con <strong>Shopify</strong> pagas una mensualidad y la plataforma se encarga del hosting, la seguridad y las actualizaciones. <strong>WooCommerce</strong> es un complemento gratuito de WordPress: tú o tu proveedor controlan todo, incluido el hosting y el mantenimiento.',
          'De esa diferencia sale todo lo demás: Shopify cambia control por comodidad y una cuota fija; WooCommerce cambia comodidad por control y más responsabilidad técnica. La comparación más amplia entre ambas tecnologías está en <a href="/blog/diferencia-wordpress-shopify-diseno-web/">la diferencia entre WordPress y Shopify</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta Shopify vs WooCommerce?',
        paragraphs: [
          'Shopify tiene una mensualidad predecible que pagas mientras uses la plataforma, sin preocuparte por infraestructura. WooCommerce no cobra mensualidad de plataforma, pero requiere hosting, dominio y mantenimiento, y algunos complementos avanzados tienen costo propio. En Elemento Web la <strong>infraestructura anual parte desde $350</strong> y el mantenimiento desde $99 al mes, con cotización cerrada por escrito.',
          'Con pocas ventas, ambas cuestan parecido. Al crecer el volumen, WooCommerce suele salir más económico porque no escalas una mensualidad de plataforma, aunque exige más disciplina de mantenimiento.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Shopify o WooCommerce cobran comisión por venta en Panamá?',
        paragraphs: [
          'Shopify tiene su propio sistema de pagos; si usas una pasarela externa en su lugar, puede aplicar una comisión adicional por transacción, además de la de tu procesador. Multiplicada por cada venta, esa diferencia suma.',
          'WooCommerce no cobra comisión por venta: solo pagas la de tu pasarela o de Yappy. Como en Panamá <a href="/blog/como-integrar-yappy-tu-tienda-online/">integrar el Botón de Pago Yappy</a> es casi obligatorio, conectar el método local sin recargos de plataforma es una ventaja concreta si vendes volumen; con pocas ventas, la diferencia apenas se nota.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Elige Shopify si te identificas con esto',
        intro: 'Shopify conviene cuando priorizas rapidez y tranquilidad técnica sobre el control total.',
        items: [
          'Quieres lanzar rápido sin administrar hosting, seguridad ni actualizaciones.',
          'Prefieres una cuota mensual fija y predecible antes que gestionar costos por separado.',
          'No quieres ocuparte de lo técnico y valoras el soporte de la plataforma.',
          'Tu catálogo es estándar y no necesitas integraciones muy particulares.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Elige WooCommerce si te identificas con esto',
        intro: 'WooCommerce conviene cuando quieres control, ahorro a largo plazo y flexibilidad.',
        items: [
          'Quieres control total sobre el diseño, los datos y las integraciones de tu tienda.',
          'Buscas evitar comisiones de plataforma por venta y pagar solo las de tu pasarela y Yappy.',
          'Planeas crecer en volumen y no quieres que los costos escalen con una mensualidad de plataforma.',
          'Tienes o planeas un blog o contenido fuerte en WordPress junto a la tienda.',
          'Cuentas con un proveedor que se encargue del mantenimiento y las copias de seguridad.',
        ],
      },
      {
        type: 'statement',
        text: 'No existe la mejor plataforma en abstracto; existe la mejor plataforma para tu negocio, tu volumen y tu forma de trabajar.',
        strong: 'para tu negocio',
      },
      {
        type: 'prose',
        h2: '¿Shopify o WooCommerce? Recomendación según tu caso',
        paragraphs: [
          'Si estás empezando y no quieres ocuparte de lo técnico, Shopify te deja concentrarte en vender. Si buscas control, planeas crecer en volumen y quieres reducir comisiones, WooCommerce suele rendir mejor a mediano plazo, siempre que tengas el mantenimiento cubierto.',
          'Decide según tu catálogo, tu volumen esperado, tu presupuesto y cuánto quieres involucrarte en lo técnico, no por lo que usó un conocido. Ese análisis de tu caso concreto es parte de nuestro <a href="/servicios/tiendas-online-ecommerce-panama/">servicio de tiendas online</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuál es más barata, Shopify o WooCommerce?', a: 'Depende del volumen. Shopify tiene una mensualidad fija; WooCommerce no cobra plataforma pero necesita hosting y mantenimiento. En ventas bajas se parecen; a mayor volumen, WooCommerce suele salir más económico a cambio de más responsabilidad técnica.' },
          { q: '¿Las dos aceptan Yappy?', a: 'Sí, ambas pueden integrar el Botón de Pago Yappy. La diferencia es que WooCommerce te da libertad total sin comisiones de plataforma por venta, mientras que Shopify puede aplicar un cargo extra si no usas su pasarela propia.' },
          { q: '¿Puedo migrar de una a otra después?', a: 'Se puede, pero cuesta tiempo y dinero porque hay que mover productos, pedidos y configuraciones. Por eso conviene elegir bien desde el inicio en lugar de rehacer la tienda más adelante.' },
          { q: '¿WooCommerce es más difícil de mantener?', a: 'Requiere más atención: actualizaciones, copias de seguridad y seguridad del hosting. No es complicado si tienes un plan de mantenimiento; nosotros lo cubrimos desde $99 al mes para que no te preocupes por eso.' },
          { q: '¿Con cuál posiciono mejor en Google?', a: 'Ambas pueden posicionar bien si están bien construidas. WordPress con WooCommerce tiene fama de flexible para contenido y SEO, pero lo que realmente decide es la estructura, la velocidad y el trabajo de posicionamiento, no la plataforma en sí.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online en Panamá' },
          { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Diseño web con Shopify' },
          { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web con WordPress' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },

          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Diseño web para retail y moda' },
          { slug: 'industrias/diseno-web-arquitectos-diseno-interiores-panama', label: 'Diseño web para arquitectos' },
        ],
      },
    ],
    cta: {
      h2: 'Te decimos con franqueza cuál te conviene',
      wa: 'Hola, no sé si elegir Shopify o WooCommerce para mi tienda. ¿Me ayudan a decidir?',
    },
  },

  {
    slug: 'blog/como-vender-por-whatsapp-en-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cómo vender por WhatsApp en Panamá y no perder ventas',
    description: 'Aprende a vender por WhatsApp en Panamá sin perder ventas: WhatsApp Business, catálogo, respuestas rápidas, conectar tu web y automatizar con un chatbot de IA.',
    h1: 'Cómo vender por WhatsApp en Panamá y no perder ventas',
    breadcrumb: 'Vender por WhatsApp',
    category: 'E-commerce',
    date: '2026-06-06',
    heroImage: {
      src: '/images/blog/como-vender-por-whatsapp-en-panama.jpg',
      alt: 'Teléfono móvil con dos burbujas de conversación, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Para vender por WhatsApp en Panamá sin perder ventas, pasa de tu WhatsApp personal a WhatsApp Business (gratis), comparte tu catálogo en el chat, responde en minutos con respuestas rápidas y conecta un botón de WhatsApp desde tu web. Cuando el volumen crezca, suma un chatbot de IA que atienda las preguntas repetitivas a cualquier hora.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué WhatsApp vende tanto en Panamá?',
        paragraphs: [
          'Para muchos negocios panameños, WhatsApp es el verdadero mostrador: ahí el cliente pregunta el precio, pide fotos, negocia el envío y decide. Al panameño le gusta preguntar antes de comprar y prefiere el trato directo, así que incluso con tienda online gran parte de las ventas pasa por un chat.',
          'Las ventas se pierden por responder tarde, de forma desordenada o cuando el cliente ya compró en otro lado. <strong>Vender bien</strong> por WhatsApp requiere orden, rapidez y las herramientas que se explican abajo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Empieza con WhatsApp Business, no con el personal',
        paragraphs: [
          '<strong>WhatsApp Business</strong> es gratuito y separa tu negocio de tu vida personal. Permite configurar un perfil de empresa con horario, dirección, sitio web y descripción, para que el cliente vea que trata con un negocio y no con un número cualquiera.',
          'Activa también el mensaje de bienvenida y el de ausencia: así nadie queda sin respuesta cuando no estás atendiendo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Catálogo y respuestas rápidas en WhatsApp Business',
        paragraphs: [
          'El <strong>catálogo</strong> de WhatsApp Business muestra tus productos con foto, precio y descripción dentro del chat. En vez de reenviar las mismas fotos todo el día, compartes el catálogo con un enlace.',
          'Las <strong>respuestas rápidas</strong> guardan mensajes para las preguntas de siempre (precios, métodos de pago, zonas de envío) y se envían con un atajo. Un cliente que pregunta un precio y no recibe respuesta en minutos muchas veces ya le escribe a la competencia.',
        ],
      },
      {
        type: 'prose',
        h2: 'Conecta tu web con WhatsApp para no perder a nadie',
        paragraphs: [
          'La web genera confianza, muestra el catálogo completo y aparece en Google; WhatsApp cierra la venta con trato cercano. Lo básico es un botón de WhatsApp visible en tu web que abra el chat con un mensaje ya escrito, del tipo “Hola, vi tu página y me interesa este producto”: el cliente llega listo para comprar y sabes de dónde viene.',
          'Si vendes con carrito, el checkout puede convivir con la opción de coordinar por chat. Si aún no tienes una web que alimente ese flujo, es lo que resuelve nuestro <a href="/servicios/diseno-web-corporativo-panama/">diseño web</a> para el mercado panameño.',
        ],
      },
      {
        type: 'prose',
        h2: 'Automatiza WhatsApp con un chatbot de IA sin perder el trato humano',
        paragraphs: [
          'Cuando responder todo a mano ya no es sostenible, un <strong>chatbot con inteligencia artificial</strong> atiende las preguntas frecuentes al instante y a cualquier hora (“¿cuánto cuesta?”, “¿hacen envíos?”, “¿aceptan Yappy?”) y pasa la conversación a una persona cuando hace falta. Eso hace <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">WazaCRM, nuestro chatbot de IA</a>: responde en tu tono y con tu información.',
          'Con volumen, el siguiente paso son las campañas: promociones y novedades a clientes que aceptaron recibirlas. Eso lo cubre <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp marketing masivo</a>, con reglas claras para no caer en spam.',
        ],
      },
      {
        type: 'steps',
        h2: 'Pasos para vender por WhatsApp en Panamá',
        intro: 'El orden para pasar de un chat improvisado a un canal de ventas.',
        items: [
          { h3: 'Instala WhatsApp Business', text: 'Migra tu número o crea uno nuevo para el negocio, y completa el perfil de empresa con horario, web y descripción.' },
          { h3: 'Arma tu catálogo', text: 'Sube tus productos con foto, precio y descripción para compartirlos con un solo enlace.' },
          { h3: 'Configura respuestas rápidas y automáticas', text: 'Crea plantillas para las preguntas de siempre y activa los mensajes de bienvenida y ausencia.' },
          { h3: 'Conecta tu web al chat', text: 'Agrega un botón de WhatsApp con mensaje predefinido en tu página.' },
          { h3: 'Suma un chatbot de IA cuando el volumen crezca', text: 'Automatiza las consultas repetitivas y reserva tu tiempo para cerrar ventas y atender los casos que necesitan una persona.' },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿WhatsApp Business es gratis?', a: 'Sí, la aplicación de WhatsApp Business es gratuita e incluye perfil de empresa, catálogo, respuestas rápidas y mensajes automáticos. Los costos aparecen solo si sumas herramientas avanzadas como campañas masivas o un chatbot conectado.' },
          { q: '¿Puedo tener el mismo número en varios dispositivos?', a: 'WhatsApp Business permite usar el mismo número en varios dispositivos vinculados, útil si atiende más de una persona. Si tu operación es grande, conviene una solución conectada por API para trabajar en equipo de forma ordenada.' },
          { q: '¿Un chatbot no hace que pierda el trato personal?', a: 'Al contrario. Un buen chatbot responde lo repetitivo y te libera para atender bien lo importante. La conversación pasa a una persona en cuanto se necesita, así nadie queda esperando y tú no te agotas respondiendo lo mismo.' },
          { q: '¿Puedo enviar promociones a mis clientes por WhatsApp?', a: 'Sí, con una solución de WhatsApp marketing y respetando las reglas para no ser marcado como spam. Se envía a quienes aceptaron recibirte, con contenido útil, no bombardeo. Así aprovechas el canal que más abre tu cliente.' },
          { q: '¿Vale la pena tener web si vendo por WhatsApp?', a: 'Sí. La web da confianza, aparece en Google y muestra tu catálogo completo, mientras WhatsApp cierra la venta. Juntos rinden mucho más que cada uno por separado; lo ideal es conectarlos para no perder ningún cliente.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbots con IA para tu web' },
          { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp marketing masivo' },
          { slug: 'blog/chatbots-con-ia-para-negocios-en-panama', label: 'Chatbots con IA para negocios' },
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online en Panamá' },

          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Diseño web para restaurantes' },
          { slug: 'industrias/diseno-web-belleza-spa-panama', label: 'Diseño web para belleza y spas' },
        ],
      },
    ],
    cta: {
      h2: 'Convierte tu WhatsApp en una máquina de ventas',
      wa: 'Hola, quiero vender mejor por WhatsApp y conectar mi web con un chatbot. ¿Me ayudan?',
    },
  },

  {
    slug: 'blog/metodos-de-pago-online-en-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Métodos de pago online en Panamá: Yappy, tarjetas y más',
    description: 'Panorama de los métodos de pago online en Panamá: Yappy, pasarelas con tarjeta y transferencias. Pros, contras y cuál elegir para vender más en tu tienda.',
    h1: 'Métodos de pago online en Panamá: Yappy, tarjetas y más',
    breadcrumb: 'Métodos de pago online',
    category: 'E-commerce',
    date: '2026-05-23',
    heroImage: {
      src: '/images/blog/metodos-de-pago-online-en-panama.jpg',
      alt: 'Tarjetas de pago en abanico junto a unas monedas, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Los principales métodos de pago online en Panamá son el Botón de Pago Yappy, las pasarelas con tarjeta Visa y Mastercard, la transferencia bancaria y el pago contra entrega. La combinación que recomienda Elemento Web para una tienda online es Yappy más una pasarela con tarjeta, con transferencia o contra entrega solo como respaldo.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El pago es donde se gana o se pierde la venta',
        paragraphs: [
          'Si el cliente llega al checkout y no encuentra su método de pago, abandona una compra que ya había decidido. En Panamá no todos usan tarjeta de crédito en línea, muchos desconfían de darla en sitios que no conocen y una parte importante prefiere canales locales, así que copiar la configuración de pagos de una tienda extranjera casi nunca funciona.',
          'La regla: <strong>ofrece más de un método</strong> e incluye el que tu cliente panameño usa a diario.',
        ],
      },
      {
        type: 'prose',
        h2: 'Yappy: el método de pago local en Panamá',
        paragraphs: [
          'El <strong>Botón de Pago Yappy</strong>, versión comercial de Yappy, se integra en el checkout y confirma los pagos de forma automática, sin que el cliente salga de tu sitio ni te envíe una captura.',
          'Ventajas: confianza local, dinero que se mueve dentro del sistema bancario panameño y comodidad para quien no usa tarjeta. Contras: se gestiona como negocio con el Banco General (aviso de operación y cuenta comercial) y paga una comisión que define el banco; confirma ese porcentaje por escrito antes de fijar precios.',
          'Para la mayoría de tiendas panameñas, Yappy es el método base. El proceso de activación está en <a href="/blog/como-integrar-yappy-tu-tienda-online/">cómo integrar Yappy en tu tienda online</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Pasarelas con tarjeta: alcance nacional e internacional',
        paragraphs: [
          'Las <strong>pasarelas de pago con tarjeta</strong> procesan Visa y Mastercard de crédito y débito. Son indispensables para clientes que prefieren la tarjeta o compran desde el exterior, donde Yappy no llega.',
          'Suelen cobrar un porcentaje por transacción más una tarifa fija, y la aprobación como comercio puede pedir más requisitos. Algunas tarjetas se rechazan por seguridad del banco emisor; tener Yappy como alternativa evita perder esas ventas. Tarjeta y Yappy cubren públicos distintos: la primera abre el mercado internacional, el segundo asegura al cliente local que no quiere dar su tarjeta en línea.',
        ],
      },
      {
        type: 'prose',
        h2: 'Transferencia bancaria y pago contra entrega: útiles pero con cuidado',
        paragraphs: [
          'La <strong>transferencia bancaria</strong> y el pago con captura por WhatsApp generan confianza, sobre todo en montos altos, pero dependen de verificación manual: alguien debe confirmar que el dinero llegó antes de despachar, y eso no escala con el volumen.',
          'El <strong>pago contra entrega</strong> reduce el miedo de quien compra por primera vez, pero trae riesgo operativo: pedidos que no se concretan, cambios de opinión y efectivo circulando. Úsalo por zonas o tipo de cliente. Ninguno de los dos debería ser tu único método.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Cómo elegir los métodos de pago online para tu tienda en Panamá?',
        intro: 'No se trata de tenerlos todos, sino los correctos para tu cliente.',
        items: [
          'Incluye siempre Yappy: es el método que tu cliente panameño usa y espera encontrar.',
          'Suma una pasarela con tarjeta si vendes a clientes con tarjeta o desde el exterior.',
          'Confirma por escrito las comisiones de cada método antes de fijar tus precios de venta.',
          'Prioriza los métodos que confirman el pago de forma automática y evitan verificación manual.',
          'Usa transferencia o contra entrega como complemento, no como tu única opción de cobro.',
          'Revisa que todo el checkout funcione bien en el celular, que es donde compra la mayoría.',
        ],
      },
      {
        type: 'statement',
        text: 'El mejor método de pago no es el que a ti te conviene cobrar, sino el que a tu cliente le da confianza para pagar.',
        strong: 'le da confianza para pagar',
      },
      {
        type: 'prose',
        h2: 'La combinación de métodos de pago que recomendamos en Panamá',
        paragraphs: [
          'La combinación que recomendamos es <strong>Yappy más una pasarela con tarjeta</strong>, con transferencia o contra entrega como respaldo para casos puntuales: así cubres al cliente local, al que usa tarjeta y al que compra desde afuera.',
          'Cada método debe estar integrado y probado en vivo antes de lanzar; un botón de pago que falla hace más daño que no tener esa opción. Por eso el cobro es parte central de nuestro <a href="/servicios/tiendas-online-ecommerce-panama/">servicio de tiendas online</a> y del trabajo de <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">integración de Yappy y pasarelas de pago</a>. Si ya tienes tienda y pierdes ventas en el último paso, revisar y ampliar los métodos de pago suele ser el primer arreglo.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuál es el método de pago más usado en Panamá?', a: 'Yappy es el favorito para pagos locales por su confianza y comodidad, ya que casi todos lo tienen. Aun así, la tarjeta sigue siendo indispensable para quienes la prefieren o compran desde el exterior, por eso lo ideal es combinarlos.' },
          { q: '¿Cuánto cobran de comisión los métodos de pago?', a: 'Cada método tiene su comisión: Yappy la define el Banco General y las pasarelas de tarjeta suelen cobrar un porcentaje más una tarifa fija. No inventamos cifras; confirma cada una por escrito con el proveedor antes de fijar tus precios.' },
          { q: '¿Es seguro cobrar con tarjeta en mi tienda?', a: 'Sí, siempre que uses una pasarela seria que procese el pago en un entorno seguro. Tú no almacenas los datos de la tarjeta; los maneja el procesador con sus estándares de seguridad. Una buena integración protege a ambas partes.' },
          { q: '¿Puedo cobrar solo por transferencia y WhatsApp?', a: 'Puedes, pero no es lo recomendable. La verificación manual no escala y pierdes a quien quiere pagar en el momento con Yappy o tarjeta. Sirve como complemento, no como único método si quieres crecer sin caos.' },
          { q: '¿Qué pasa si una tarjeta se rechaza?', a: 'Algunas tarjetas se rechazan por seguridad del banco emisor. Tener Yappy como alternativa evita perder esa venta, porque el cliente puede pagar de inmediato por otro canal. Ofrecer más de un método es justamente el mejor respaldo.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Integración de Yappy y pasarelas de pago' },
          { slug: 'blog/como-integrar-yappy-tu-tienda-online', label: 'Cómo integrar Yappy en tu tienda' },
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online en Panamá' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },

          { slug: 'industrias/diseno-web-agencias-viajes-tours-panama', label: 'Diseño web para agencias de viajes' },
          { slug: 'industrias/diseno-web-turismo-hoteles-panama', label: 'Diseño web para turismo y hoteles' },
        ],
      },
    ],
    cta: {
      h2: 'Ofrece los pagos que tu cliente panameño espera',
      wa: 'Hola, quiero configurar bien los métodos de pago de mi tienda online en Panamá. ¿Me asesoran?',
    },
  },
];
