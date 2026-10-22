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
      'Elemento Web hace diseño web para negocios y consultorios de Kendall desde Ciudad de Panamá, sin oficina en Miami: sitios en español o bilingües, con página por servicio, cita o WhatsApp en un toque y SEO local por barrio. Una landing parte desde $550 y un sitio corporativo desde $1,250, en USD y sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en Kendall?',
        items: [
          'Una página por servicio o especialidad, no todo en una sola lista',
          'Cita en línea o WhatsApp en un toque, para el paciente o cliente que agenda desde el celular',
          'Seguros o formas de pago aceptadas a la vista, si eres consultorio',
          'SEO local con el barrio en el texto: Kendall, The Hammocks, Kendall West',
          'Español primero e inglés como segundo idioma cuando la clientela es mixta',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué tipo de web funciona en Kendall?',
        paragraphs: [
          'Kendall es un suburbio extenso con muchos consultorios médicos y dentales, despachos profesionales y comercio alrededor de Dadeland. El cliente busca por servicio y por cercanía, así que rinde una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> con una página por servicio y la dirección clara, más que una landing de una sola oferta.',
          'Si el negocio vive de citas, el sistema de <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas en línea</a> evita la llamada para agendar. Todo se coordina por WhatsApp y videollamada desde Panamá.',
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
      'Elemento Web hace diseño web para negocios hispanos de Westchester desde Ciudad de Panamá, sin oficina en Miami: sitios en español, con WhatsApp como canal principal, fotos reales, precios a la vista y reseñas visibles. Una landing tarda 5 días hábiles y parte desde $550; un sitio corporativo, desde $1,250. Se cobra en USD, sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en Westchester?',
        items: [
          'Todo en español, escrito para un cliente cubanoamericano que busca en su idioma',
          'WhatsApp visible desde la primera pantalla',
          'Reseñas y fotos reales del negocio, que confirman lo que el vecino ya te contó',
          'Precio o rango de precio a la vista',
          'Dirección y horario claros, coherentes con tu ficha de Google',
        ],
      },
      {
        type: 'prose',
        h2: '¿Para qué sirve una web si el negocio vive del boca a boca?',
        paragraphs: [
          'En Westchester buena parte de los clientes llega recomendada por un vecino o un familiar. Antes de escribir, casi todos buscan el nombre del negocio para confirmar: dónde queda, qué ofrece, cuánto cuesta. La web responde eso en una pantalla y el botón de WhatsApp abre la conversación.',
          'Para ese uso basta una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a>; si tienes varias líneas de servicio, un sitio de varias páginas.',
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
      'Elemento Web hace diseño web para firmas de Brickell desde Ciudad de Panamá, sin oficina en Miami: sitios bilingües español/inglés, diseño sobrio, licencias y trayectoria visibles, perfiles del equipo y un formulario que filtra la consulta antes de la llamada. Pensado para finanzas, legal y real estate con cliente latinoamericano. Se cobra en USD, sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de una empresa en Brickell?',
        items: [
          'Diseño sobrio y a medida: frente a un cliente que maneja capital, la plantilla se nota',
          'Español e inglés con la misma profundidad, no una versión resumida del otro idioma',
          'Licencias, registros y trayectoria verificables',
          'Perfiles del equipo con formación e idiomas: muchos clientes eligen a la persona',
          'Formulario que pregunte el tipo de consulta y el país del cliente antes de la llamada',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo debe verse la web de una firma financiera o legal en Brickell?',
        paragraphs: [
          'Como la oficina: sólida y sin estridencias. El cliente latinoamericano que busca banca privada, estructura legal o un condominio en Brickell compara firmas desde su país, y la web es lo primero que revisa. Pesa más una ficha de credenciales clara que una animación.',
          'El formato habitual es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> bilingüe. Las pautas por rubro están en <a href="/industrias/diseno-web-abogados-panama/">diseño web para abogados</a> y <a href="/industrias/diseno-web-bienes-raices-panama/">diseño web para bienes raíces</a>.',
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
      'Elemento Web hace diseño web para boutiques, despachos y marcas de Coral Gables desde Ciudad de Panamá, sin oficina en Miami: diseño editorial a medida, fotografía cuidada (propia o generada con IA), versión bilingüe si hay cliente internacional y contacto discreto. Una landing parte desde $550 y un sitio corporativo desde $1,250, en USD y sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en Coral Gables?',
        items: [
          'Diseño editorial a medida, coherente con la vitrina o la oficina',
          'Fotografía de calidad del producto, el espacio o el equipo',
          'Español e inglés si atiendes a clientes de fuera de Miami',
          'Contacto discreto por formulario o WhatsApp, sin tono de venta agresiva',
          'Carga rápida aun con fotos grandes',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo sostiene la web la imagen de marca de un local en Coral Gables?',
        paragraphs: [
          'En Miracle Mile y alrededores la vitrina ya vende una idea de marca. La web tiene que sostenerla con la misma tipografía, el mismo cuidado en las fotos y el mismo tono, en lugar de bajarla de nivel con una plantilla.',
          'Coral Gables también reúne oficinas regionales de empresas latinoamericanas y despachos profesionales: para ellos, una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> bilingüe. Si no tienes fotos listas, se pueden generar con IA como parte del proyecto.',
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
      'Elemento Web hace diseño web para negocios de Homestead desde Ciudad de Panamá, sin oficina en Miami: sitios simples en español, rápidos en el celular, con WhatsApp como contacto, precios a la vista y catálogo de productos si vendes al mayor. Una landing tarda 5 días hábiles desde que recibimos el contenido y parte desde $550, sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en Homestead?',
        items: [
          'Español primero, con inglés si atiendes a visitantes de los parques nacionales',
          'WhatsApp como canal principal de contacto',
          'Catálogo simple por línea de producto si eres vivero, finca o mayorista',
          'Precio o rango de precio visible, o al menos el pedido mínimo',
          'Fotos reales del negocio, del vivero o de la operación',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué web le sirve a un negocio agrícola o de comercio local en Homestead?',
        paragraphs: [
          'Homestead tiene dos clientes distintos: el comprador local o mayorista de los viveros y cultivos de The Redland, y el visitante que pasa camino a los parques nacionales Everglades y Biscayne. El primero quiere catálogo, mínimo de compra y WhatsApp; el segundo, ubicación, horario y algo en inglés.',
          'Para casi todos basta una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> que cargue rápido con señal débil, sin funciones que nadie va a usar.',
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
      'Elemento Web hace diseño web para negocios de Sweetwater desde Ciudad de Panamá, sin oficina en Miami: sitios en español, rápidos en el celular, con WhatsApp como contacto principal, menú o lista de precios a la vista y fotos reales. Una landing parte desde $550 y un sitio corporativo desde $1,250, cobrados en USD y sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en Sweetwater?',
        items: [
          'Todo en español, con el vocabulario de tu cliente',
          'WhatsApp como canal de contacto principal',
          'Menú, servicios o lista de precios a la vista, no en un PDF',
          'Horario y ubicación claros, coherentes con tu ficha de Google',
          'Fotos reales del negocio',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué web le sirve a un negocio de Sweetwater?',
        paragraphs: [
          'Sweetwater es pequeña y densa: comercio de barrio, restaurantes con una fuerte presencia nicaragüense y servicios para los estudiantes del campus principal de FIU, al lado. El cliente busca desde el celular, en español y cerca. Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con lo que vendes, el precio y un botón de WhatsApp cubre a la mayoría.',
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
      'Elemento Web hace diseño web para negocios de Hialeah Gardens desde Ciudad de Panamá, sin oficina en Miami: sitios en español con catálogo por línea de producto para mayoristas y talleres, cotización por WhatsApp y precios o rangos claros. Una landing parte desde $550 y un sitio corporativo desde $1,250, en USD y sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en Hialeah Gardens?',
        items: [
          'Español para el comercio y el servicio local',
          'Catálogo por línea de producto si eres mayorista, distribuidor o taller',
          'Cotización por WhatsApp con los datos que necesitas: producto, cantidad y entrega',
          'Precio, rango o pedido mínimo a la vista',
          'Zona de entrega o cobertura explícita',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué web necesita un mayorista o taller en Hialeah Gardens?',
        paragraphs: [
          'En Hialeah Gardens conviven el comercio de barrio con bodegas, distribuidores y pequeña industria. Para el comprador profesional, la web es un catálogo: qué líneas manejas, en qué presentaciones y cómo se pide. Una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> con una página por línea le ahorra la llamada; la pauta B2B está en <a href="/industrias/diseno-web-importadoras-distribuidoras-panama/">diseño web para distribuidoras</a>.',
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
      'Elemento Web hace diseño web para empresas y profesionales de Miami Lakes desde Ciudad de Panamá, sin oficina en Miami: sitios corporativos bilingües español/inglés, una página por servicio, equipo y credenciales visibles y un formulario que filtra la consulta. Un sitio corporativo parte desde $1,250, cobrado en USD y sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de una empresa en Miami Lakes?',
        items: [
          'Diseño corporativo limpio y a medida',
          'Español e inglés cuando atiendes a cliente hispano y angloparlante',
          'Una página por servicio para el comprador que compara opciones',
          'Equipo, licencias y años de operación visibles',
          'Formulario o WhatsApp que pregunte el tipo de consulta',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué web necesita una oficina o despacho en Miami Lakes?',
        paragraphs: [
          'Miami Lakes es una comunidad planificada, con un centro de oficinas y comercio en Main Street y muchas empresas de servicios con gerencia hispana. El cliente compara dos o tres proveedores antes de llamar, así que pesa una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> con servicios explicados por separado, credenciales y un contacto que llegue a la persona correcta.',
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
      'Elemento Web hace diseño web para negocios locales de Cutler Bay desde Ciudad de Panamá, sin oficina en Miami: sitios simples y rápidos en el celular, en español o bilingües, con WhatsApp para consultas y citas, zonas de servicio y precio o rango claro. Una landing parte desde $550, cobrada en USD por tarjeta o transferencia y sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en Cutler Bay?',
        items: [
          'Web simple y rápida de cargar en celular',
          'WhatsApp visible para consultas, citas y presupuestos',
          'Zonas que atiendes, si el servicio es a domicilio',
          'Precio o rango de precio claro',
          'Español, inglés o los dos, según tu clientela',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué web le sirve a un negocio de servicios en Cutler Bay?',
        paragraphs: [
          'Cutler Bay es sobre todo residencial, con comercio alrededor de Southland Mall y muchos servicios para el hogar que van a domicilio. Ese cliente busca «cerca de mí», compara dos opciones y escribe a la que dice con claridad qué zonas cubre y cuánto cuesta. Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con servicios, zonas y WhatsApp resuelve ese recorrido.',
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
      'Elemento Web hace diseño web para negocios de North Miami desde Ciudad de Panamá, sin oficina en Miami: sitios en español, inglés o ambos según tu clientela, con WhatsApp como contacto principal, precio o rango visible y carga rápida en el celular. Una landing parte desde $550 y un sitio corporativo desde $1,250, en USD y sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en North Miami?',
        items: [
          'El idioma de tu cliente: español, inglés o ambos desde el inicio',
          'WhatsApp como canal principal de contacto',
          'Precio o rango de precio visible',
          'Dirección, horario y estacionamiento claros',
          'Diseño simple y rápido de cargar',
        ],
      },
      {
        type: 'prose',
        h2: '¿En qué idioma debe estar la web de un negocio en North Miami?',
        paragraphs: [
          'Depende de quién te compra. North Miami mezcla clientela hispana, angloparlante y una comunidad haitiana grande, además de los estudiantes del campus de FIU en Biscayne Bay. Por eso aquí lo habitual es bilingüe español/inglés, con la página principal en el idioma de la mayoría de tus clientes.',
          'Hacer bilingüe un sitio no es duplicar el trabajo: se arma con las dos versiones desde el principio, cada una con su dirección propia para que Google muestre la correcta. El formato suele ser una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> o, con varias líneas de servicio, una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a>.',
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
