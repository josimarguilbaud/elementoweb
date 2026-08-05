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
      alt: 'Persona pagando desde su celular con una aplicacion de banca movil en Panama',
    },
    lead: [
      'Yappy se volvió la forma preferida de pagar en Panamá, y si tu tienda online no lo acepta estás dejando ventas sobre la mesa. La buena noticia es que integrarlo es más sencillo de lo que parece.',
      'En esta guía te explicamos qué es el Botón de Pago Yappy, qué necesitas para activarlo, los pasos reales para conectarlo a tu web y cómo aprovecharlo para cobrar sin fricción.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es el Botón de Pago Yappy y por qué importa en Panamá',
        paragraphs: [
          'Yappy es la billetera digital del Banco General que hoy usan cientos de miles de panameños para enviarse dinero entre personas. Lo que muchos negocios todavía no aprovechan es que existe una versión comercial: el <strong>Botón de Pago Yappy</strong>, pensado para cobrar en una tienda online sin que el cliente tenga que escribir un número de celular ni salir de tu sitio.',
          'La diferencia es importante. El Yappy personal sirve para transferencias entre amigos y familiares; el comercial te da un botón integrado en el checkout, confirma el pago de forma automática y te permite llevar un registro ordenado de cada transacción. Para un negocio serio, esa automatización es la que ahorra horas de conciliación manual.',
          'En el mercado panameño esto pesa mucho. Muchos clientes no tienen tarjeta de crédito o simplemente prefieren no darla por internet, pero casi todos tienen Yappy. Ofrecerlo baja la barrera de compra y transmite confianza local, algo que una pasarela extranjera no siempre logra.',
        ],
      },
      {
        type: 'prose',
        h2: 'Requisitos para activar el Botón de Pago Yappy',
        paragraphs: [
          'Antes de tocar tu web necesitas cumplir con lo que el banco pide. El Botón de Pago Yappy es un producto comercial, así que se solicita como negocio, no como persona natural con una cuenta personal.',
          'En términos generales vas a necesitar una cuenta comercial en el Banco General, tu <strong>aviso de operación</strong> vigente, los datos de tu empresa o negocio y una tienda online funcional donde se instalará el botón. El banco valida tu actividad comercial antes de habilitarte, y ese proceso lo gestionas directamente con ellos.',
          'Nuestra recomendación honesta: gestiona la aprobación del banco en paralelo mientras construimos la tienda. Así, cuando el sitio esté listo, solo conectamos las credenciales y sales a vender el mismo día. Puedes ver todo lo que cubre el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">servicio de integración de Yappy y pasarelas de pago</a> para entender el alcance completo.',
        ],
      },
      {
        type: 'steps',
        h2: 'Pasos para integrar Yappy en tu tienda',
        intro: 'El proceso varía un poco según tu plataforma, pero la lógica es siempre la misma. Estos son los pasos generales de principio a fin.',
        items: [
          { h3: 'Solicita el Botón de Pago al banco', text: 'Contacta al Banco General con tus documentos de negocio y pide activar el Botón de Pago Yappy comercial. Ellos validan tu aviso de operación y tu cuenta antes de darte acceso.' },
          { h3: 'Obtén tus credenciales', text: 'Una vez aprobado, el banco te entrega las llaves técnicas (identificadores y secretos) que conectan tu tienda con Yappy. Guárdalas con cuidado, son la puerta a tus cobros.' },
          { h3: 'Instala el módulo o la integración', text: 'Si usas WooCommerce o Shopify, se instala el módulo correspondiente; si tu web es a medida, se conecta por API. Aquí es donde entra el trabajo técnico que hacemos por ti.' },
          { h3: 'Configura la confirmación automática', text: 'Se define la URL de notificación para que, cuando el cliente pague, tu tienda marque el pedido como pagado sin intervención manual. Este paso es el que evita errores y descuadres.' },
          { h3: 'Haz una compra de prueba real', text: 'Antes de publicar, procesa una transacción de verdad por un monto pequeño y confirma que el dinero llega y el pedido cambia de estado. Nunca lances sin probar en vivo.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Comisiones, tiempos y qué esperar del dinero',
        paragraphs: [
          'Toda forma de cobro digital tiene un costo, y Yappy comercial no es la excepción: el banco cobra una comisión por transacción según el acuerdo que tengas con ellos. Ese porcentaje lo define el Banco General, no nosotros, así que confírmalo por escrito con tu ejecutivo antes de decidir precios.',
          'La ventaja frente a las pasarelas de tarjeta es que el dinero se mueve dentro del sistema bancario panameño, lo que suele traducirse en abonos ágiles a tu cuenta y menos fricción por rechazos. Aun así, siempre te conviene comparar: Yappy para el cliente local que no usa tarjeta, y una pasarela con tarjeta para quien prefiere ese medio o compra desde el exterior.',
          'Lo inteligente no es elegir uno u otro, sino <strong>ofrecer ambos</strong> en el checkout. Cada cliente paga como le resulta cómodo, y tú no pierdes la venta por no tener su método favorito.',
        ],
      },
      {
        type: 'prose',
        h2: 'Ventajas de vender con Yappy en tu web',
        paragraphs: [
          'Más allá de lo técnico, Yappy resuelve un problema muy panameño: la confianza. Cuando un comprador ve el logo de Yappy en tu checkout sabe que está pagando por un canal que ya conoce y usa a diario, y eso reduce el abandono en el momento decisivo de la compra.',
          'También ordena tu operación. En lugar de recibir capturas de pantalla por WhatsApp y verificar transferencias a mano, cada pago queda registrado y asociado a un pedido. Si vendes volumen, esa diferencia te devuelve horas cada semana y elimina el riesgo de dar por pagado algo que nunca llegó.',
          'Si además conectas tu tienda con <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas o citas online</a> o con un flujo de atención por WhatsApp, Yappy se vuelve la pieza que cierra el círculo: el cliente descubre, decide y paga sin salir de tu ecosistema.',
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
    description: 'Guía paso a paso para crear tu tienda online en Panamá en 2026: plataforma, catálogo, pagos con Yappy, envíos y logística local. Todo lo que necesitas para vender.',
    h1: 'Cómo crear una tienda online en Panamá: guía completa 2026',
    breadcrumb: 'Crear tienda online',
    category: 'E-commerce',
    date: '2026-07-04',
    heroImage: {
      src: '/images/blog/como-crear-una-tienda-online-en-panama.jpg',
      alt: 'Emprendedor preparando pedidos de una tienda online en Panama con laptop y cajas',
    },
    lead: [
      'Montar una tienda online en Panamá dejó de ser un proyecto reservado a grandes empresas. Con las plataformas y los medios de pago actuales, cualquier negocio puede vender por internet de forma profesional.',
      'Esta guía te lleva de cero a vender: cómo elegir plataforma, armar el catálogo, cobrar con Yappy y tarjeta, y resolver la parte que a todos preocupa, los envíos y la logística dentro del país.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Antes de vender: define qué, a quién y cómo entregas',
        paragraphs: [
          'El error más común es empezar por la plataforma. Antes de eso, necesitas claridad en tres cosas: qué vendes, quién es tu cliente y cómo le vas a entregar el producto. Una tienda que vende joyas artesanales a todo el país no se arma igual que una que reparte comida caliente en la ciudad.',
          'Escribe una lista realista de tus productos, cuántas variantes tienen (tallas, colores, sabores) y en qué zonas puedes entregar. Ese inventario mental define después el catálogo, los costos de envío y hasta la plataforma más conveniente. Saltarte este paso significa rehacer trabajo más adelante.',
          'También define tu diferencia. En Panamá ya hay competencia online en casi todos los rubros, así que piensa qué te hace distinto: precio, rapidez de entrega, atención personalizada o un producto que nadie más tiene. Esa respuesta es la que después ordena todo el mensaje de tu tienda.',
        ],
      },
      {
        type: 'prose',
        h2: 'Elegir la plataforma correcta para tu tienda',
        paragraphs: [
          'Aquí no hay una respuesta única, hay una respuesta correcta para tu caso. Las opciones más usadas en Panamá son Shopify y WooCommerce sobre WordPress, y cada una sirve mejor a un tipo de negocio.',
          '<strong>Shopify</strong> es ideal si quieres empezar rápido, con poco mantenimiento técnico y no te molesta pagar una mensualidad. <strong>WooCommerce</strong> te da más control y sin comisiones de plataforma, a cambio de más responsabilidad sobre el hosting y las actualizaciones. Si dudas, escribimos una comparación honesta en <a href="/blog/shopify-vs-woocommerce-panama/">Shopify vs WooCommerce en Panamá</a> que te ayuda a decidir.',
          'Para catálogos grandes, integraciones especiales o un rendimiento exigente, a veces conviene una tienda a medida. Lo importante es que la plataforma se elija por tu negocio, no por moda. Si quieres que lo definamos contigo, ese es justo el punto de partida de nuestro <a href="/servicios/tiendas-online-ecommerce-panama/">servicio de tiendas online</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Arma un catálogo que venda, no solo que exista',
        paragraphs: [
          'El catálogo es el corazón de tu tienda. Un producto con foto oscura, descripción de una línea y sin precio no vende, por bueno que sea. Cada ficha necesita fotos claras, una descripción que responda las dudas del cliente y el precio visible sin sorpresas.',
          'Organiza los productos en categorías lógicas para que la gente encuentre lo que busca en pocos clics. Si vendes ropa, separa por tipo y talla; si vendes servicios, agrupa por resultado. Una buena estructura de catálogo también ayuda a que Google entienda tu tienda y la muestre a quien busca lo que ofreces.',
          'No subestimes las fotos. En Panamá el comprador no puede tocar el producto, así que la imagen es tu vendedor. Invertir en fotografía decente rinde más que casi cualquier otra mejora visual de la tienda.',
        ],
      },
      {
        type: 'steps',
        h2: 'Los pasos para lanzar tu tienda de 0 a vender',
        intro: 'Este es el camino real que seguimos con nuestros clientes, ordenado para que no te saltes nada crítico.',
        items: [
          { h3: 'Registra tu dominio y define la marca', text: 'Consigue un dominio propio (tunegocio.com) y ten listo tu logo y colores. Vender desde un dominio propio transmite mucha más confianza que un subdominio gratuito.' },
          { h3: 'Monta la plataforma y el diseño', text: 'Se instala la tienda, se aplica tu identidad visual y se configura para que se vea bien en el celular, que es donde compra la mayoría en Panamá.' },
          { h3: 'Carga el catálogo con fotos y precios', text: 'Se suben los productos con sus variantes, descripciones y precios. Aquí decides también qué mostrar primero y qué destacar.' },
          { h3: 'Configura los pagos', text: 'Se conecta el Botón de Pago Yappy y una pasarela de tarjeta para no perder ninguna venta. Este paso define cómo entra el dinero a tu cuenta.' },
          { h3: 'Define envíos y zonas de entrega', text: 'Se configuran las tarifas de envío por zona o el retiro en tienda, según tu operación. El cliente debe saber cuánto y cuándo llega antes de pagar.' },
          { h3: 'Prueba todo y lanza', text: 'Se hace una compra de prueba completa, se revisa el flujo en el celular y recién ahí se publica. Nunca lanzamos algo sin probar el checkout en vivo.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Pagos: Yappy y tarjeta, la combinación ganadora en Panamá',
        paragraphs: [
          'De nada sirve una tienda bonita si el cliente no puede pagar como quiere. En Panamá eso significa, casi siempre, ofrecer <strong>Yappy y tarjeta</strong> juntos. Muchos compradores no usan tarjeta en línea, pero casi todos tienen Yappy; otros prefieren la tarjeta o compran desde el exterior.',
          'El Botón de Pago Yappy confirma los pagos de forma automática y transmite confianza local; una pasarela con tarjeta amplía tu alcance. Combinarlos reduce el abandono del carrito en el peor momento, que es cuando el cliente ya decidió comprar y no encuentra su método. Si quieres el detalle técnico, revisa cómo <a href="/blog/como-integrar-yappy-tu-tienda-online/">integrar Yappy en tu tienda online</a>.',
          'Evita depender solo de transferencias manuales con captura por WhatsApp. Funciona al principio, pero cuando crece el volumen se vuelve un caos de verificaciones y errores. Automatizar el cobro es lo que te deja tiempo para vender.',
        ],
      },
      {
        type: 'prose',
        h2: 'Envíos y logística local: el punto que hace o rompe la venta',
        paragraphs: [
          'La logística es donde muchas tiendas panameñas tropiezan. Puedes tener el mejor producto, pero si el envío es caro, lento o incierto, el cliente no vuelve. Define desde el inicio si entregas tú mismo, si usas un servicio de mensajería o si combinas ambos según la zona.',
          'Sé transparente con los tiempos y costos. Es preferible decir la verdad (entrega en 2 a 3 días hábiles en la ciudad) que prometer algo que no cumples. También decide bien tu política de zonas: cubrir todo el país desde el día uno puede ser un problema si no tienes la operación para sostenerlo.',
          'Una opción muy usada y rentable en Panamá es ofrecer <strong>retiro en punto</strong> o coordinar la entrega por WhatsApp para zonas específicas. Empezar acotado y crecer con orden es mejor que prometer de más y quedar mal.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta crear una tienda online en Panamá?', a: 'Nuestro e-commerce parte desde <strong>$1,500</strong> según el catálogo, las integraciones y el nivel de personalización. Antes de empezar recibes una cotización cerrada por escrito, sin costos sorpresa a mitad del proyecto.' },
          { q: '¿Necesito tener aviso de operación para vender online?', a: 'Para operar formalmente y activar cobros comerciales como el Botón de Pago Yappy, sí necesitas tu aviso de operación vigente. Es un requisito del banco, no algo que dependa de nosotros.' },
          { q: '¿Puedo administrar la tienda yo mismo después?', a: 'Sí. Te entregamos la tienda a tu nombre y te capacitamos para cargar productos, ver pedidos y gestionar el día a día. Si prefieres delegarlo, ofrecemos planes de mantenimiento desde $59 al mes.' },
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
      alt: 'Comparacion de dos plataformas de comercio electronico en la pantalla de una laptop',
    },
    lead: [
      'Shopify o WooCommerce es la primera gran decisión de cualquiera que quiere vender online en Panamá. Y como toda decisión de base, cambiarla después cuesta tiempo y dinero.',
      'Aquí no vamos a decirte que una es mejor sin más. Vamos a comparar costos, comisiones, control y mantenimiento con honestidad, para que elijas la que de verdad le conviene a tu negocio.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La diferencia de fondo entre Shopify y WooCommerce',
        paragraphs: [
          'La distinción clave es esta: Shopify es un servicio que alquilas y WooCommerce es un software que instalas. Con <strong>Shopify</strong> pagas una mensualidad y ellos se encargan del hosting, la seguridad y las actualizaciones; tú solo administras tu tienda. Con <strong>WooCommerce</strong>, que es un complemento gratuito de WordPress, tú (o tu proveedor) controlan todo, incluido el hosting y el mantenimiento.',
          'Esa diferencia lo explica casi todo lo demás. Shopify cambia comodidad por menos control y una cuota fija; WooCommerce cambia control total por más responsabilidad técnica. Ninguna es superior en abstracto: la correcta depende de cómo es tu negocio y de cuánto quieres involucrarte en lo técnico.',
          'Si quieres una mirada más amplia sobre qué tecnología conviene según el caso, la desarrollamos en <a href="/blog/diferencia-wordpress-shopify-diseno-web/">la diferencia entre WordPress y Shopify</a>. Aquí nos concentramos en la decisión de e-commerce.',
        ],
      },
      {
        type: 'prose',
        h2: 'Costos reales: mensualidad vs. propiedad',
        paragraphs: [
          'Este es el punto donde más gente se equivoca al comparar. Shopify tiene un costo mensual claro y predecible que pagas mientras uses la plataforma; nunca dejas de pagarlo, pero a cambio no te preocupas por infraestructura. Es un gasto operativo constante.',
          'WooCommerce, en cambio, no tiene mensualidad de plataforma: el complemento es gratuito. Pero necesitas pagar hosting, dominio y mantenimiento, y algunos complementos avanzados tienen su propio costo. En Elemento Web nuestra <strong>infraestructura anual parte desde $350</strong> y el mantenimiento desde $59 al mes; son cifras que puedes conocer de entrada, con cotización cerrada por escrito.',
          'La cuenta honesta es esta: en volúmenes bajos, ambas se parecen; a medida que vendes más, WooCommerce suele salir más económico porque no escalas una mensualidad de plataforma. Pero WooCommerce exige más disciplina de mantenimiento. Comodidad o economía a largo plazo: ese es el verdadero intercambio.',
        ],
      },
      {
        type: 'prose',
        h2: 'Comisiones por venta y pagos en Panamá',
        paragraphs: [
          'Aquí hay un detalle que en Panamá importa mucho. Shopify tiene su propio sistema de pagos, y cuando usas una pasarela externa en lugar del suyo, puede aplicar una comisión adicional por transacción, además de lo que ya cobra tu procesador de pago. Ese pequeño porcentaje, multiplicado por cada venta, suma con el tiempo.',
          'WooCommerce no cobra comisión por venta: lo que pagas es únicamente la comisión de tu pasarela o de Yappy. En un mercado donde <a href="/blog/como-integrar-yappy-tu-tienda-online/">integrar el Botón de Pago Yappy</a> es casi obligatorio, tener libertad total para conectar el método local sin recargos de plataforma es una ventaja concreta.',
          'No es que Shopify sea caro por esto, es que conviene tenerlo en cuenta. Si vendes mucho volumen y usas pagos locales, esas comisiones marcan diferencia. Si vendes poco o valoras la simplicidad, quizás no las notes.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Elige Shopify si te identificas con esto',
        intro: 'Shopify brilla cuando priorizas rapidez y tranquilidad técnica por encima del control total.',
        items: [
          'Quieres lanzar rápido y no te interesa administrar hosting ni actualizaciones.',
          'Prefieres una cuota mensual fija y predecible antes que gestionar costos por separado.',
          'No tienes ni quieres tener conocimientos técnicos, y valoras el soporte de plataforma.',
          'Tu catálogo es estándar y no necesitas integraciones muy particulares.',
          'Te da tranquilidad que la seguridad y el mantenimiento no dependan de ti.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Elige WooCommerce si te identificas con esto',
        intro: 'WooCommerce conviene cuando quieres control, ahorro a largo plazo y flexibilidad total.',
        items: [
          'Quieres control total sobre el diseño, los datos y las integraciones de tu tienda.',
          'Buscas evitar comisiones de plataforma por venta y depender solo de tu pasarela y Yappy.',
          'Planeas crecer en volumen y prefieres que los costos no escalen con una mensualidad de plataforma.',
          'Ya tienes o planeas tener un contenido o blog fuerte en WordPress junto a la tienda.',
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
        h2: 'Nuestra recomendación honesta según tu caso',
        paragraphs: [
          'Si estás empezando, quieres algo simple y valoras no preocuparte por la parte técnica, Shopify es una elección muy sólida y te deja concentrarte en vender. Si en cambio buscas control, planeas crecer en volumen y quieres exprimir cada peso de comisión, WooCommerce suele rendir mejor a mediano plazo, siempre que tengas el mantenimiento cubierto.',
          'Lo que no recomendamos es elegir por moda o por lo que usó un conocido. Tu decisión debe salir de tu catálogo, tu volumen esperado, tu presupuesto y cuánto quieres involucrarte en lo técnico. Nosotros trabajamos con ambas y te recomendamos con argumentos, no por comodidad nuestra.',
          'Si quieres que revisemos tu caso concreto y te digamos con franqueza cuál te conviene, ese análisis es parte de nuestro <a href="/servicios/tiendas-online-ecommerce-panama/">servicio de tiendas online</a>. Preferimos que arranques bien a que arranques rápido y tengas que rehacerlo.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuál es más barata, Shopify o WooCommerce?', a: 'Depende del volumen. Shopify tiene una mensualidad fija; WooCommerce no cobra plataforma pero necesita hosting y mantenimiento. En ventas bajas se parecen; a mayor volumen, WooCommerce suele salir más económico a cambio de más responsabilidad técnica.' },
          { q: '¿Las dos aceptan Yappy?', a: 'Sí, ambas pueden integrar el Botón de Pago Yappy. La diferencia es que WooCommerce te da libertad total sin comisiones de plataforma por venta, mientras que Shopify puede aplicar un cargo extra si no usas su pasarela propia.' },
          { q: '¿Puedo migrar de una a otra después?', a: 'Se puede, pero cuesta tiempo y dinero porque hay que mover productos, pedidos y configuraciones. Por eso conviene elegir bien desde el inicio en lugar de rehacer la tienda más adelante.' },
          { q: '¿WooCommerce es más difícil de mantener?', a: 'Requiere más atención: actualizaciones, copias de seguridad y seguridad del hosting. No es complicado si tienes un plan de mantenimiento; nosotros lo cubrimos desde $59 al mes para que no te preocupes por eso.' },
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
      alt: 'Comerciante panameno atendiendo pedidos de clientes por WhatsApp desde su telefono',
    },
    lead: [
      'En Panamá casi todo se cierra por WhatsApp. El problema no es que la gente escriba, es que muchos negocios pierden ventas por responder tarde, desordenado o cuando el cliente ya compró en otro lado.',
      'En esta guía te mostramos cómo vender por WhatsApp de forma profesional: configurar WhatsApp Business, armar el catálogo, usar respuestas rápidas, conectar tu web y automatizar con un chatbot de IA sin perder el trato humano.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué WhatsApp vende tanto en Panamá',
        paragraphs: [
          'WhatsApp es, para muchos negocios panameños, el verdadero mostrador. Es donde el cliente pregunta el precio, pide fotos, negocia el envío y finalmente decide. Ignorar ese canal o atenderlo mal es como tener una tienda con la puerta entreabierta.',
          'La razón es cultural: al panameño le gusta preguntar antes de comprar y prefiere el trato directo. Un mensaje se siente más cercano y confiable que un formulario frío. Por eso, incluso teniendo una tienda online, gran parte de las ventas terminan pasando por un chat.',
          'El reto no es estar en WhatsApp, es <strong>vender bien</strong> por WhatsApp. Y eso requiere orden, rapidez y algunas herramientas que la mayoría de negocios no aprovecha. Ahí está la diferencia entre un chat caótico y una máquina de cerrar ventas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Empieza con WhatsApp Business, no con el personal',
        paragraphs: [
          'El primer paso es dejar de vender desde tu WhatsApp personal y pasar a <strong>WhatsApp Business</strong>, que es gratuito y está pensado justo para esto. Separa tu vida de tu negocio y te da herramientas que el personal no tiene.',
          'Con WhatsApp Business configuras un perfil de empresa con tu horario, dirección, sitio web y una descripción de lo que vendes. Eso solo ya transmite profesionalismo: el cliente ve que trata con un negocio serio y no con un número cualquiera. Aprovecha también el mensaje de bienvenida y el de ausencia para que nadie quede sin respuesta cuando no estás.',
          'Es un cambio pequeño con impacto grande. La mayoría de negocios que dan el salto notan de inmediato que se ven más ordenados y que pierden menos mensajes en el camino.',
        ],
      },
      {
        type: 'prose',
        h2: 'Catálogo y respuestas rápidas: tu tiempo vale',
        paragraphs: [
          'El <strong>catálogo</strong> de WhatsApp Business te permite mostrar tus productos con foto, precio y descripción dentro del propio chat. En vez de reenviar las mismas fotos cien veces al día, compartes tu catálogo y el cliente ve todo de una. Es rápido para ti y cómodo para él.',
          'Las <strong>respuestas rápidas</strong> son el otro gran ahorro de tiempo. Puedes guardar mensajes predefinidos para las preguntas de siempre (precios, métodos de pago, zonas de envío) y enviarlos con un atajo. Responder al instante, aunque sea con una plantilla bien hecha, evita que el cliente se enfríe o se vaya a la competencia.',
          'La velocidad es todo en WhatsApp. Un cliente que pregunta un precio y no recibe respuesta en minutos muchas veces ya está escribiéndole a otro. Las herramientas están para que no dependas de estar pegado al teléfono todo el día.',
        ],
      },
      {
        type: 'prose',
        h2: 'Conecta tu web con WhatsApp para no perder a nadie',
        paragraphs: [
          'WhatsApp y tu página web no compiten, se complementan. La web genera confianza, muestra tu catálogo completo y aparece en Google; WhatsApp cierra la venta con el trato cercano. La clave es conectarlos para que el visitante pase de uno al otro sin fricción.',
          'Lo básico es un botón de WhatsApp visible en tu web que abra el chat con un mensaje ya escrito, del tipo "Hola, vi tu página y me interesa este producto". Así el cliente llega listo para comprar y tú ya sabes de dónde viene. Si además vendes con carrito, el checkout puede convivir con la opción de coordinar por chat para quien lo prefiera.',
          'Este puente entre web y WhatsApp es una de las cosas más rentables que puedes montar. Si aún no tienes una web que alimente ese flujo, es exactamente lo que resolvemos con nuestro <a href="/servicios/diseno-web-corporativo-panama/">diseño web</a> pensado para el mercado panameño.',
        ],
      },
      {
        type: 'prose',
        h2: 'Automatiza con un chatbot de IA sin perder el trato humano',
        paragraphs: [
          'Llega un punto en que responder todo a mano es insostenible. Ahí entra un <strong>chatbot con inteligencia artificial</strong>, que atiende las preguntas frecuentes al instante, a cualquier hora, y solo te pasa la conversación cuando de verdad hace falta una persona.',
          'Un buen chatbot no reemplaza el trato humano, lo protege. Se ocupa del "¿cuánto cuesta?", "¿hacen envíos?" y "¿aceptan Yappy?" para que tú te concentres en cerrar las ventas que importan. Eso es justo lo que hace <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">ChatMantis, nuestro chatbot de IA</a>: responde en tu tono, con tu información, y no deja a nadie esperando de madrugada.',
          'Cuando ya vendes en volumen, también puedes dar el salto a campañas: enviar promociones y novedades a tus clientes por el canal que más abren. Eso lo cubrimos en <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp marketing masivo</a>, siempre con las reglas del juego claras para no caer en spam.',
        ],
      },
      {
        type: 'steps',
        h2: 'Pasos para montar tu venta por WhatsApp',
        intro: 'Sigue este orden para pasar de un chat improvisado a un canal de ventas que funciona.',
        items: [
          { h3: 'Instala WhatsApp Business', text: 'Migra desde tu número o crea uno nuevo para el negocio, y completa el perfil de empresa con horario, web y descripción.' },
          { h3: 'Arma tu catálogo', text: 'Sube tus productos con foto, precio y descripción para compartirlos con un solo enlace en vez de repetir fotos.' },
          { h3: 'Configura respuestas rápidas y automáticas', text: 'Crea plantillas para las preguntas de siempre y activa mensajes de bienvenida y ausencia para no dejar a nadie sin respuesta.' },
          { h3: 'Conecta tu web al chat', text: 'Agrega un botón de WhatsApp con mensaje predefinido para que los visitantes de tu página lleguen listos para comprar.' },
          { h3: 'Suma un chatbot de IA cuando el volumen crezca', text: 'Automatiza las consultas repetitivas y reserva tu tiempo para cerrar las ventas y atender los casos que necesitan una persona.' },
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
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbots con IA para tu web' },
          { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp marketing masivo' },
          { slug: 'blog/chatbots-con-ia-para-negocios-en-panama', label: 'Chatbots con IA para negocios' },
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online en Panamá' },
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
      alt: 'Distintos metodos de pago digital y tarjetas sobre un escritorio en Panama',
    },
    lead: [
      'El método de pago no es un detalle técnico: es el último paso entre el cliente decidido y tu venta cerrada. Si no ofreces la forma de pago que esa persona prefiere, la pierdes justo al final.',
      'En esta guía repasamos el panorama real de pagos online en Panamá (Yappy, pasarelas con tarjeta y transferencias) con sus pros y contras, para que elijas la combinación que más vende en tu negocio.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El pago es donde se gana o se pierde la venta',
        paragraphs: [
          'Puedes tener la mejor tienda, buenas fotos y un precio justo, pero si el cliente llega al momento de pagar y no encuentra su método, se va. El abandono de carrito por falta de opciones de pago es de los más frustrantes porque ocurre con alguien que ya había decidido comprar.',
          'En Panamá esto tiene un matiz propio. No todos usan tarjeta de crédito en línea, muchos desconfían de meterla en sitios que no conocen, y una parte importante prefiere pagar por canales locales. Por eso, copiar la configuración de pagos de una tienda extranjera casi nunca funciona aquí.',
          'La regla de oro es simple: <strong>ofrece más de un método</strong> y asegúrate de incluir el que tu cliente panameño usa a diario. Cada opción que agregas bien pensada es una razón menos para que abandone la compra.',
        ],
      },
      {
        type: 'prose',
        h2: 'Yappy: el método local que casi todos prefieren',
        paragraphs: [
          'Yappy se convirtió en la forma de pago más natural para el panameño. Su versión comercial, el <strong>Botón de Pago Yappy</strong>, se integra en el checkout de tu tienda y confirma los pagos de forma automática, sin que el cliente tenga que salir de tu sitio ni enviarte una captura.',
          'Sus ventajas son claras: confianza local altísima, dinero que se mueve dentro del sistema bancario panameño y una experiencia cómoda para quien no usa tarjeta. Su contra principal es que requiere gestionarlo como negocio con el Banco General (aviso de operación y cuenta comercial) y paga una comisión que define el banco. Vale la pena confirmar ese porcentaje por escrito antes de fijar precios.',
          'Para la mayoría de tiendas panameñas, Yappy no es opcional: es el método base. Si quieres el detalle de cómo activarlo, lo explicamos paso a paso en <a href="/blog/como-integrar-yappy-tu-tienda-online/">cómo integrar Yappy en tu tienda online</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Pasarelas con tarjeta: alcance nacional e internacional',
        paragraphs: [
          'Las <strong>pasarelas de pago con tarjeta</strong> procesan Visa y Mastercard, tanto de crédito como de débito. Son indispensables si vendes a clientes que prefieren la tarjeta o que compran desde el exterior, donde Yappy no llega.',
          'Su gran ventaja es el alcance: cualquiera con una tarjeta puede pagarte, esté donde esté. A cambio, suelen cobrar una comisión por transacción más una tarifa fija, y el proceso de aprobación como comercio puede pedir más requisitos. También conviene tener presente que algunas tarjetas se rechazan por seguridad, así que tener Yappy como respaldo evita perder esas ventas.',
          'La lectura correcta no es "tarjeta o Yappy", sino entender que cubren públicos distintos. La tarjeta te abre el mercado internacional y a quienes ya la usan con comodidad; Yappy te asegura al cliente local que no quiere darla en línea.',
        ],
      },
      {
        type: 'prose',
        h2: 'Transferencia bancaria y pago contra entrega: útiles pero con cuidado',
        paragraphs: [
          'La <strong>transferencia bancaria</strong> tradicional y el pago con captura por WhatsApp funcionan y son de confianza para muchos, sobre todo en montos altos. El problema es que dependen de verificación manual: alguien de tu equipo tiene que revisar que el dinero llegó antes de despachar, y eso no escala bien cuando crece el volumen.',
          'El <strong>pago contra entrega</strong> (pagar al recibir) reduce el miedo del cliente que compra por primera vez y no confía todavía en tu tienda. Su riesgo es operativo: pedidos que no se concretan, cambios de opinión y dinero en efectivo circulando. Conviene usarlo con criterio, por zonas o por tipo de cliente, no como única opción.',
          'Ninguno de los dos está mal; simplemente no deberían ser tu único método. Sirven muy bien como complemento de Yappy y tarjeta, para captar a quien todavía no se anima a pagar de otra forma.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Cómo elegir tu combinación de métodos de pago',
        intro: 'No se trata de tenerlos todos, sino de tener los correctos para tu cliente. Revisa estos puntos antes de decidir.',
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
        h2: 'La estrategia que más vende en Panamá',
        paragraphs: [
          'Después de trabajar con tiendas de distintos rubros, la conclusión se repite: la combinación que más vende en Panamá es <strong>Yappy más una pasarela con tarjeta</strong>, con transferencia o contra entrega como respaldo para casos puntuales. Así cubres al cliente local, al que usa tarjeta y al que compra desde afuera.',
          'Lo importante es que cada método esté bien integrado y probado en vivo antes de lanzar. Un botón de pago que falla o un checkout confuso hace más daño que no tener esa opción. Por eso el cobro es una parte central de nuestro <a href="/servicios/tiendas-online-ecommerce-panama/">servicio de tiendas online</a> y del trabajo de <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">integración de Yappy y pasarelas de pago</a>.',
          'Si ya tienes tienda y sientes que pierdes ventas en el último paso, muchas veces el arreglo es justamente este: revisar y ampliar los métodos de pago. Es una de las mejoras con mejor retorno que puedes hacer.',
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
        ],
      },
    ],
    cta: {
      h2: 'Ofrece los pagos que tu cliente panameño espera',
      wa: 'Hola, quiero configurar bien los métodos de pago de mi tienda online en Panamá. ¿Me asesoran?',
    },
  },
];
