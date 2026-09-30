/* SILO MIAMI · lote 2: 10 zonas adicionales de Miami-Dade. Mismas reglas que
   miami.ts: todo se factura desde Panamá en USD, sin Yappy, sin ITBMS (es
   panameño). Contenido más corto que las 3 páginas ancla porque son 10 a la
   vez — cada una igual sube keyword propia + FAQ (bueno para SEO clásico) y
   respuestas directas y citables (bueno para motores de IA / GEO). */
import type { PageData } from '../types';

const parent = { slug: 'miami', label: 'Miami' };

export const miamiPages2: PageData[] = [
  /* ---------- KENDALL ---------- */
  {
    slug: 'miami/diseno-web-kendall',
    parent,
    title: 'Diseño Web en Kendall, Miami | Negocios y Profesionales',
    description: 'Diseño web para negocios y profesionales de Kendall, Miami. Sede en Panamá, servicio remoto, en español, precios en USD sin ITBMS.',
    h1: 'Diseño web en Kendall',
    breadcrumb: 'Kendall',
    lead: [
      'Kendall es una de las zonas más pobladas y con más pequeños negocios y consultorios profesionales del suroeste de Miami-Dade.',
      'Trabajamos remoto desde Panamá, en español, con el mismo precio y el mismo estándar técnico de cualquier proyecto nuestro.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Kendall',
        items: [
          'Web en español, pensada para un cliente que busca en su idioma',
          'Botón de WhatsApp visible para consultas rápidas',
          'Precios o rangos claros, sin obligar a llamar para saber cuánto cuesta',
          'SEO local para búsquedas tipo "diseño web en Kendall"',
          'Diseño que carga rápido desde el celular, donde ocurre casi toda la búsqueda',
        ],
      },
      {
        type: 'prose',
        h2: 'Remoto desde Panamá, mismo resultado',
        paragraphs: [
          'Kendall tiene desde consultorios y despachos hasta comercio de barrio. En cualquiera de los dos casos, el negocio se atiende igual: en español, por WhatsApp, con un precio claro. Trabajar remoto desde Panamá no cambia esa dinámica, solo la estructura de costos detrás.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una web para un negocio en Kendall?', a: 'Los mismos rangos que cualquier proyecto: landing desde $550, sitio corporativo desde $1,250. Sin ITBMS, porque es un impuesto panameño que no aplica facturando a un cliente en EE.UU.' },
          { q: '¿Cómo se coordina el proyecto siendo remoto?', a: 'Por WhatsApp y videollamada, con una diferencia horaria de cero a una hora entre Panamá y Miami según la época del año.' },
          { q: '¿El sitio puede ir en español e inglés?', a: 'Sí, se puede armar bilingüe desde el inicio si atiendes clientes en ambos idiomas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-en-miami-en-espanol', label: 'Diseño web en Miami' },
          { slug: 'miami/diseno-web-westchester', label: 'Diseño web en Westchester' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Kendall?', wa: 'Hola, tengo un negocio en Kendall y quiero cotizar una página web.' },
  },

  /* ---------- WESTCHESTER ---------- */
  {
    slug: 'miami/diseno-web-westchester',
    parent,
    title: 'Diseño Web en Westchester, Miami | Negocios Hispanos',
    description: 'Diseño web para negocios hispanos de Westchester, Miami. Sede en Panamá, servicio remoto, en español, precios en USD sin ITBMS.',
    h1: 'Diseño web en Westchester',
    breadcrumb: 'Westchester',
    lead: [
      'Westchester es una de las zonas de Miami-Dade con mayor concentración de negocios y familias cubanoamericanas, y casi todo el comercio se vive en español.',
      'Construimos sitios pensados para ese cliente: directos, en español, con WhatsApp como canal principal.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Westchester',
        items: [
          'Web 100% en español, sin traducción de plantilla',
          'WhatsApp visible desde el primer scroll',
          'Fotos reales del negocio, no stock genérico',
          'Precio o rango de precio a la vista',
          'Carga rápida en celular',
        ],
      },
      {
        type: 'prose',
        h2: 'El mismo idioma, el mismo canal de venta',
        paragraphs: [
          'En Westchester el negocio local vive del boca a boca y del WhatsApp, no de un formulario de contacto genérico. Diseñamos alrededor de eso: la web confirma lo que el cliente ya escuchó de un vecino, y el botón de WhatsApp cierra la conversación.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una web en Westchester?', a: 'Landing desde $550, sitio corporativo desde $1,250, sin ITBMS (impuesto panameño que no aplica a EE.UU.).' },
          { q: '¿Se puede pagar en dólares desde EE.UU.?', a: 'Sí, tarjeta o transferencia internacional, facturado desde la empresa panameña.' },
          { q: '¿Cuánto tarda el proyecto?', a: 'Una landing en 5 días hábiles, un sitio corporativo entre 2 y 3 semanas desde que recibimos el contenido.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-kendall', label: 'Diseño web en Kendall' },
          { slug: 'miami/diseno-web-hialeah', label: 'Diseño web en Hialeah' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Westchester?', wa: 'Hola, tengo un negocio en Westchester y quiero cotizar una página web.' },
  },

  /* ---------- BRICKELL ---------- */
  {
    slug: 'miami/diseno-web-brickell',
    parent,
    title: 'Diseño Web en Brickell, Miami | Finanzas y Servicios Profesionales',
    description: 'Diseño web para empresas de Brickell: finanzas, legal, real estate y servicios profesionales. Sede en Panamá, servicio remoto, precios en USD.',
    h1: 'Diseño web en Brickell',
    breadcrumb: 'Brickell',
    lead: [
      'Brickell es el distrito financiero de Miami: bancos, gestoras, firmas legales y real estate de alto valor, con una base de clientes latinoamericana muy fuerte.',
      'Aquí el diseño tiene que verse a la altura del sector financiero, con contenido bilingüe y credenciales visibles desde el primer scroll.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar una empresa en Brickell',
        items: [
          'Diseño sobrio y de alto nivel visual: aquí el diseño genérico se nota',
          'Contenido bilingüe español/inglés para cliente latinoamericano e internacional',
          'Credenciales, licencias y trayectoria visibles',
          'Formulario o WhatsApp que filtre el tipo de consulta antes de la llamada',
          'Tiempos de carga rápidos: un cliente institucional no espera',
        ],
      },
      {
        type: 'prose',
        h2: 'Nivel de Brickell, sin el costo de estar en Brickell',
        paragraphs: [
          'Una firma en Brickell no puede permitirse un sitio que se vea genérico frente a clientes que manejan capital serio. El diseño tiene que transmitir lo mismo que la oficina: solidez. Entregamos ese nivel visual y técnico operando desde Panamá, sin cargar el costo de oficina en uno de los distritos más caros de EE.UU.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Manejan proyectos para el sector financiero o legal?', a: 'Sí, con el nivel de sobriedad y las credenciales que ese tipo de cliente espera ver antes de confiar.' },
          { q: '¿El sitio queda en español, inglés, o los dos?', a: 'La mayoría de firmas en Brickell atiende cliente latinoamericano e internacional a la vez, así que lo habitual es bilingüe desde el inicio.' },
          { q: '¿Cómo se factura desde Panamá?', a: 'En USD, por tarjeta o transferencia internacional, sin ITBMS (impuesto panameño que no aplica a un cliente en EE.UU.).' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-coral-gables', label: 'Diseño web en Coral Gables' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Brickell?', wa: 'Hola, tengo una empresa en Brickell y quiero cotizar una página web.' },
  },

  /* ---------- CORAL GABLES ---------- */
  {
    slug: 'miami/diseno-web-coral-gables',
    parent,
    title: 'Diseño Web en Coral Gables, Miami | Marcas y Profesionales',
    description: 'Diseño web para marcas, boutiques y profesionales de Coral Gables. Sede en Panamá, servicio remoto, diseño de alto nivel, precios en USD.',
    h1: 'Diseño web en Coral Gables',
    breadcrumb: 'Coral Gables',
    lead: [
      'Coral Gables es una de las zonas de mayor poder adquisitivo de Miami-Dade, con boutiques, despachos profesionales y sedes de empresas latinoamericanas.',
      'Un cliente de Coral Gables decide con la vista antes que con el precio: el diseño tiene que estar a ese nivel desde el primer segundo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Coral Gables',
        items: [
          'Diseño editorial, cuidado, sin plantilla genérica',
          'Fotografía de calidad del producto, servicio o equipo',
          'Contenido bilingüe si el cliente incluye mercado internacional',
          'Presencia de marca consistente con lo que se ve en la tienda o la oficina física',
          'Formulario o WhatsApp discreto, sin sonar a venta agresiva',
        ],
      },
      {
        type: 'prose',
        h2: 'Diseño que compite con la calle, no solo con Google',
        paragraphs: [
          'En Coral Gables la vitrina física ya vende una idea de marca. La web tiene que sostener esa misma idea, no bajarla de nivel con un diseño de plantilla. Ese es el trabajo que hacemos: llevar el mismo cuidado visual del local a la pantalla.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿El diseño puede ser tan cuidado como una web de una marca grande?', a: 'Sí, es justamente el estándar que aplicamos: diseño a medida, no plantilla genérica, alineado con la imagen de marca que ya tienes en tu local.' },
          { q: '¿Cuánto cuesta una web para una boutique o despacho en Coral Gables?', a: 'Landing desde $550, sitio corporativo desde $1,250, sin ITBMS (impuesto panameño, no aplica a EE.UU.).' },
          { q: '¿Trabajan con fotografía de producto o solo con lo que ya tengo?', a: 'Podemos trabajar con tu material existente o generar imágenes con IA como parte del proyecto si no tienes fotografía lista.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-brickell', label: 'Diseño web en Brickell' },
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño web' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Coral Gables?', wa: 'Hola, tengo un negocio en Coral Gables y quiero cotizar una página web.' },
  },

  /* ---------- HOMESTEAD ---------- */
  {
    slug: 'miami/diseno-web-homestead',
    parent,
    title: 'Diseño Web en Homestead, Miami | Negocios y Agricultura',
    description: 'Diseño web para negocios de Homestead: comercio, servicios y agroindustria. Sede en Panamá, servicio remoto, en español, precios en USD.',
    h1: 'Diseño web en Homestead',
    breadcrumb: 'Homestead',
    lead: [
      'Homestead combina comercio local con una fuerte base agrícola e industrial en el extremo sur de Miami-Dade.',
      'Construimos sitios simples y directos: precio claro, WhatsApp visible y contenido en español para el cliente que ya opera así todos los días.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Homestead',
        items: [
          'Web en español, directa y fácil de navegar desde el celular',
          'WhatsApp como canal principal de contacto',
          'Catálogo simple de productos o servicios si aplica',
          'Precio o rango de precio visible',
          'Fotos reales del negocio o del campo/operación',
        ],
      },
      {
        type: 'prose',
        h2: 'Simple y directo, como se vende en Homestead',
        paragraphs: [
          'Aquí no hace falta un sitio sofisticado: hace falta uno que cargue rápido, hable en español y lleve al cliente directo al WhatsApp. Ese es el enfoque, sin vestir el proyecto con funciones que nadie va a usar.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una web sencilla en Homestead?', a: 'Una landing desde $550, sin ITBMS (impuesto panameño, no aplica facturando a EE.UU.).' },
          { q: '¿Sirve para un negocio agrícola o de venta al mayor?', a: 'Sí, se puede armar un catálogo simple con tus líneas de producto y un canal de contacto directo por WhatsApp.' },
          { q: '¿Cuánto tarda el proyecto?', a: 'Una landing en 5 días hábiles desde que recibimos el contenido.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-cutler-bay', label: 'Diseño web en Cutler Bay' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de conversión' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Homestead?', wa: 'Hola, tengo un negocio en Homestead y quiero cotizar una página web.' },
  },

  /* ---------- SWEETWATER ---------- */
  {
    slug: 'miami/diseno-web-sweetwater',
    parent,
    title: 'Diseño Web en Sweetwater, Miami | Comercio y Servicios',
    description: 'Diseño web para negocios de Sweetwater, Miami. Sede en Panamá, servicio remoto, en español, precios en USD sin ITBMS.',
    h1: 'Diseño web en Sweetwater',
    breadcrumb: 'Sweetwater',
    lead: [
      'Sweetwater tiene una de las comunidades hispanas más densas de todo Miami-Dade, con comercio y servicios que operan casi enteramente en español.',
      'El enfoque es el mismo que en el resto de nuestras páginas de Miami: web en español, WhatsApp visible, precio claro.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Sweetwater',
        items: [
          'Web 100% en español',
          'WhatsApp como canal de contacto principal',
          'Precio o rango de precio a la vista',
          'Diseño simple, rápido de cargar en celular',
          'Fotos reales del negocio',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una web en Sweetwater?', a: 'Landing desde $550, sitio corporativo desde $1,250, sin ITBMS.' },
          { q: '¿Se puede pagar desde EE.UU.?', a: 'Sí, tarjeta o transferencia internacional, facturado en USD desde la empresa panameña.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-hialeah-gardens', label: 'Diseño web en Hialeah Gardens' },
          { slug: 'miami/diseno-web-hialeah', label: 'Diseño web en Hialeah' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Sweetwater?', wa: 'Hola, tengo un negocio en Sweetwater y quiero cotizar una página web.' },
  },

  /* ---------- HIALEAH GARDENS ---------- */
  {
    slug: 'miami/diseno-web-hialeah-gardens',
    parent,
    title: 'Diseño Web en Hialeah Gardens, Miami | Comercio e Industria',
    description: 'Diseño web para negocios de Hialeah Gardens: comercio, servicios y pequeña industria. Sede en Panamá, servicio remoto, precios en USD.',
    h1: 'Diseño web en Hialeah Gardens',
    breadcrumb: 'Hialeah Gardens',
    lead: [
      'Hialeah Gardens mezcla comercio local con negocios de logística y pequeña industria, en un entorno mayormente hispano.',
      'Construimos sitios directos: en español cuando el cliente lo es, con catálogo simple si el negocio lo requiere, y WhatsApp como canal de cierre.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Hialeah Gardens',
        items: [
          'Web en español para comercio y servicio local',
          'Catálogo o líneas de producto si el negocio es mayorista o industrial',
          'WhatsApp visible para cotizaciones rápidas',
          'Precio o rango de precio claro',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una web para un negocio en Hialeah Gardens?', a: 'Landing desde $550, sitio corporativo desde $1,250, sin ITBMS (impuesto panameño, no aplica a EE.UU.).' },
          { q: '¿Sirve para un negocio de logística o venta al mayor?', a: 'Sí, se puede armar con catálogo de líneas de producto y cotización directa por WhatsApp.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-hialeah', label: 'Diseño web en Hialeah' },
          { slug: 'miami/diseno-web-sweetwater', label: 'Diseño web en Sweetwater' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Hialeah Gardens?', wa: 'Hola, tengo un negocio en Hialeah Gardens y quiero cotizar una página web.' },
  },

  /* ---------- MIAMI LAKES ---------- */
  {
    slug: 'miami/diseno-web-miami-lakes',
    parent,
    title: 'Diseño Web en Miami Lakes | Empresas y Profesionales',
    description: 'Diseño web para empresas y profesionales de Miami Lakes. Sede en Panamá, servicio remoto, en español, precios en USD sin ITBMS.',
    h1: 'Diseño web en Miami Lakes',
    breadcrumb: 'Miami Lakes',
    lead: [
      'Miami Lakes es una comunidad planificada con fuerte presencia de oficinas corporativas y negocios profesionales, muchos con dueños o gerencia hispana.',
      'El diseño aquí necesita verse igual de cuidado que en cualquier suburbio corporativo de EE.UU., sin el costo de estarlo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar una empresa en Miami Lakes',
        items: [
          'Diseño corporativo limpio, sin plantilla genérica',
          'Contenido bilingüe si atiende cliente hispano y angloparlante',
          'Página de servicios clara para un comprador que compara opciones',
          'Formulario o WhatsApp que filtre el tipo de consulta',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Manejan proyectos corporativos en Miami Lakes?', a: 'Sí, con el mismo nivel de diseño y estructura que un sitio corporativo de Panamá, adaptado al cliente de EE.UU.' },
          { q: '¿Cuánto cuesta un sitio corporativo en Miami Lakes?', a: 'Desde $1,250, sin ITBMS (impuesto panameño, no aplica facturando a EE.UU.).' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-doral', label: 'Diseño web en Doral' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Miami Lakes?', wa: 'Hola, tengo una empresa en Miami Lakes y quiero cotizar una página web.' },
  },

  /* ---------- CUTLER BAY ---------- */
  {
    slug: 'miami/diseno-web-cutler-bay',
    parent,
    title: 'Diseño Web en Cutler Bay, Miami | Negocios Locales',
    description: 'Diseño web para negocios locales de Cutler Bay, Miami. Sede en Panamá, servicio remoto, en español, precios en USD sin ITBMS.',
    h1: 'Diseño web en Cutler Bay',
    breadcrumb: 'Cutler Bay',
    lead: [
      'Cutler Bay es una comunidad residencial del sur de Miami-Dade con comercio y servicios de barrio en crecimiento.',
      'Un sitio simple, en español cuando aplica, con WhatsApp y precio claro, es lo que rinde en este tipo de negocio.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Cutler Bay',
        items: [
          'Web simple y rápida de cargar en celular',
          'WhatsApp visible para consultas y citas',
          'Precio o rango de precio claro',
          'Contenido en español si el cliente lo prefiere',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una web para un negocio en Cutler Bay?', a: 'Landing desde $550, sin ITBMS (impuesto panameño, no aplica a EE.UU.).' },
          { q: '¿Cómo se paga desde Cutler Bay?', a: 'Tarjeta o transferencia internacional, en USD, facturado desde la empresa panameña.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-homestead', label: 'Diseño web en Homestead' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Cutler Bay?', wa: 'Hola, tengo un negocio en Cutler Bay y quiero cotizar una página web.' },
  },

  /* ---------- NORTH MIAMI ---------- */
  {
    slug: 'miami/diseno-web-north-miami',
    parent,
    title: 'Diseño Web en North Miami | Negocios y Comercio Diverso',
    description: 'Diseño web para negocios de North Miami: comercio diverso, servicios y pequeñas empresas. Sede en Panamá, servicio remoto, precios en USD.',
    h1: 'Diseño web en North Miami',
    breadcrumb: 'North Miami',
    lead: [
      'North Miami reúne un comercio diverso, con fuerte presencia hispana y caribeña, y negocios que necesitan verse serios sin gastar de más.',
      'Construimos sitios directos: WhatsApp, precio claro y contenido en el idioma de tu cliente.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en North Miami',
        items: [
          'Web en español (o bilingüe si el negocio lo requiere)',
          'WhatsApp como canal principal de contacto',
          'Precio o rango de precio visible',
          'Diseño simple y rápido de cargar',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una web en North Miami?', a: 'Landing desde $550, sitio corporativo desde $1,250, sin ITBMS (impuesto panameño, no aplica a EE.UU.).' },
          { q: '¿Puede ser bilingüe?', a: 'Sí, si tu negocio atiende tanto en español como en inglés lo armamos desde el inicio en ambos idiomas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-en-miami-en-espanol', label: 'Diseño web en Miami' },
          { slug: 'miami', label: 'Todas las zonas de Miami' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en North Miami?', wa: 'Hola, tengo un negocio en North Miami y quiero cotizar una página web.' },
  },
];
