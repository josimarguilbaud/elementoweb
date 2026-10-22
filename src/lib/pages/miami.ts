/* SILO MIAMI: primer mercado fuera de Panamá. Wedge deliberado — no "toda
   LatAm", solo Panamá + Miami-Dade. Ver checkpoint 20260927-231834 para el
   porqué (autoridad de dominio nueva, 0 backlinks: repartir el mensaje entre
   20 países no rankea en ninguno). Facturación: todo sale de la empresa
   panameña, en USD, sin abrir entidad en EE.UU. — nunca prometer factura de
   EE.UU. ni mencionar Yappy en estas páginas (es solo Panamá). El ITBMS (7%)
   es un impuesto panameño: aclarar que no aplica a un cliente facturado
   fuera de Panamá, no dejarlo como nota genérica. */
import type { PageData } from '../types';

const parent = { slug: 'miami', label: 'Miami' };

export const miamiPages: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'miami',
    title: 'Diseño Web en Miami en Español | Elemento Web',
    description: 'Agencia de diseño web para negocios hispanos de Miami-Dade. Mismo huso horario, mismo precio en USD, soporte 100% en español. Sede en Panamá, servicio remoto.',
    h1: 'Diseño web en Miami, en español',
    breadcrumb: 'Miami',
    heroImage: { src: '/images/hero/miami--diseno-web-en-miami-en-espanol.jpg', alt: 'Diseño web en Miami en español' },
    lead: [
      'Miami-Dade se vende y se compra en español. Tu web debería hablar el mismo idioma que tu cliente, no una traducción de plantilla.',
      'Elemento Web diseña páginas web en español para negocios hispanos de Miami-Dade desde Ciudad de Panamá, sin oficina en Miami: cero a una hora de diferencia horaria, precios en USD sin ITBMS (landing desde $550, corporativa desde $1,250) y demo antes de publicar. Abajo, las 12 zonas; la oferta completa está en <a href="/miami/diseno-web-en-miami-en-espanol/">diseño web en Miami en español</a>.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Dónde trabajamos en Miami-Dade',
        items: [
          { h3: 'Miami en general', text: 'Diseño web para negocios hispanos de todo el condado: qué esperar, cómo se cobra y por qué no hace falta una agencia local.', link: { slug: 'miami/diseno-web-en-miami-en-espanol', label: 'Diseño web en Miami' } },
          { h3: 'Doral', text: 'El corredor corporativo y de comercio internacional cerca de MIA: importadoras, bienes raíces, clínicas y servicios profesionales.', link: { slug: 'miami/diseno-web-doral', label: 'Diseño web en Doral' } },
          { h3: 'Hialeah', text: 'La ciudad con más densidad de pequeños negocios cubanoamericanos de Florida: retail, servicios y comercio de barrio.', link: { slug: 'miami/diseno-web-hialeah', label: 'Diseño web en Hialeah' } },
          { h3: 'Kendall', text: 'Negocios y consultorios profesionales del suroeste de Miami-Dade.', link: { slug: 'miami/diseno-web-kendall', label: 'Diseño web en Kendall' } },
          { h3: 'Westchester', text: 'Alta concentración de negocios y familias cubanoamericanas.', link: { slug: 'miami/diseno-web-westchester', label: 'Diseño web en Westchester' } },
          { h3: 'Brickell', text: 'Distrito financiero: bancos, legal y real estate con cliente latinoamericano.', link: { slug: 'miami/diseno-web-brickell', label: 'Diseño web en Brickell' } },
          { h3: 'Coral Gables', text: 'Boutiques, despachos y marcas de alto poder adquisitivo.', link: { slug: 'miami/diseno-web-coral-gables', label: 'Diseño web en Coral Gables' } },
          { h3: 'Homestead', text: 'Comercio local y agroindustria en el extremo sur del condado.', link: { slug: 'miami/diseno-web-homestead', label: 'Diseño web en Homestead' } },
          { h3: 'Sweetwater', text: 'Una de las comunidades hispanas más densas de Miami-Dade.', link: { slug: 'miami/diseno-web-sweetwater', label: 'Diseño web en Sweetwater' } },
          { h3: 'Hialeah Gardens', text: 'Comercio, logística y pequeña industria.', link: { slug: 'miami/diseno-web-hialeah-gardens', label: 'Diseño web en Hialeah Gardens' } },
          { h3: 'Miami Lakes', text: 'Comunidad planificada con fuerte presencia corporativa.', link: { slug: 'miami/diseno-web-miami-lakes', label: 'Diseño web en Miami Lakes' } },
          { h3: 'Cutler Bay', text: 'Comercio y servicios de barrio en el sur de Miami-Dade.', link: { slug: 'miami/diseno-web-cutler-bay', label: 'Diseño web en Cutler Bay' } },
          { h3: 'North Miami', text: 'Comercio diverso con fuerte presencia hispana y caribeña.', link: { slug: 'miami/diseno-web-north-miami', label: 'Diseño web en North Miami' } },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Por qué contratar desde Panamá el diseño web de un negocio en Miami?',
        items: [
          'Panamá está en UTC-5 todo el año: con Miami hay cero o una hora de diferencia, según el horario de verano',
          'Español nativo en el texto y en la conversación, no un brief traducido',
          'Precios en USD sin conversión de moneda, y sin ITBMS porque es un impuesto panameño',
          'La misma base técnica con la que operamos tres SaaS propios en producción',
          'Sin el costo de estructura de una agencia con oficina en EE.UU.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo funciona un proyecto web remoto entre Panamá y Miami?',
        paragraphs: [
          'Igual que con un cliente en Ciudad de Panamá: demo en línea antes de publicar, tres pagos en lugar de todo por adelantado y un interlocutor fijo que conoce tu negocio. Coordinamos por WhatsApp y videollamada en tu horario de oficina; no hay reuniones en persona porque no tenemos oficina en Miami.',
          'Los formatos y precios son los de la <a href="/precios/">lista publicada</a>: <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a>, <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> o <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a>. Lo que cambia por zona es el cliente: bilingüe y B2B en Doral o Brickell, comercio de barrio en español en Hialeah o Sweetwater.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cómo se factura si están en Panamá?', a: 'Facturamos desde la empresa panameña, en dólares, igual que cualquier cliente de Elemento Web. El pago se hace por tarjeta o transferencia internacional; no manejamos Yappy fuera de Panamá porque es un método de pago exclusivo de ahí.' },
          { q: '¿Aplica el ITBMS (7%) que mencionan en los precios?', a: 'No. El ITBMS es un impuesto panameño y no aplica a un servicio facturado a un cliente fuera de Panamá. Los precios publicados son los que pagas, sin ese recargo.' },
          { q: '¿Por qué no contratar una agencia que ya esté en Miami?', a: 'Puedes, y puede convenirte si valoras reunirte en persona. Nosotros trabajamos remoto desde Panamá, con el mismo proceso que usamos con nuestros clientes en Panamá y precios publicados en dólares. Compara alcance, plazos y precio por escrito antes de decidir.' },
          { q: '¿Hay diferencia horaria real?', a: 'Panamá está en UTC-5 todo el año. Miami está en UTC-5 en invierno y UTC-4 en horario de verano, así que la diferencia es de cero a una hora. En la práctica, coordinamos en tu jornada laboral sin fricción.' },
          { q: '¿El sitio queda en español, en inglés, o en los dos?', a: 'Depende de a quién le vendes. Si tu cliente en Miami opera en español (la mayoría en Doral, Hialeah y buena parte del condado), el sitio va en español. Si necesitas atender también al cliente angloparlante, agregamos inglés como segundo idioma sin duplicar el trabajo desde cero.' },
          { q: '¿Cuánto cuesta comparado con una web para un cliente en Panamá?', a: 'Los mismos precios: landing desde $550, sitio corporativo desde $1,250, e-commerce desde $1,950. No cobramos más por atender Miami; la moneda y el proceso ya son los mismos.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios', label: 'Servicios de diseño web' },
          { slug: 'portafolio', label: 'Portafolio' },
          { slug: 'industrias', label: 'Diseño web por industria' },
          { slug: 'contacto', label: 'Contacto' },
        ],
      },
    ],
    cta: { h2: 'Hablemos de tu negocio en Miami', wa: 'Hola, tengo un negocio en Miami y me interesa una web en español.' },
  },

  /* ---------- MIAMI (ANCLA) ---------- */
  {
    slug: 'miami/diseno-web-en-miami-en-espanol',
    parent,
    title: 'Diseño Web en Miami en Español | Sin Sobreprecio de Agencia de EE.UU.',
    description: 'Diseño web para negocios hispanos de Miami: mismo huso horario, mismo precio en USD, soporte 100% en español. Sede en Panamá, servicio remoto, sin intermediarios.',
    h1: 'Páginas web para negocios hispanos de Miami',
    breadcrumb: 'Diseño Web en Miami',
    lead: [
      'En buena parte de Miami-Dade el negocio se vende, se cobra y se atiende en español. Una web que no habla ese idioma nativo pierde al cliente antes de que lea la segunda línea.',
      'Elemento Web hace diseño web en español para negocios hispanos de Miami desde Ciudad de Panamá, sin oficina en Florida: texto en español nativo, WhatsApp como contacto principal, SEO local en español y opción bilingüe. Se cobra en USD por tarjeta o transferencia, sin ITBMS. Una landing tarda 5 días hábiles; un sitio corporativo, de 2 a 3 semanas.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita la web de un negocio hispano en Miami?',
        items: [
          'Español nativo escrito para tu cliente, no una plantilla en inglés traducida con IA',
          'Botón directo a WhatsApp, el canal por el que ya te escribe el cliente hispano',
          'Precios o rangos en USD a la vista, sin obligar a llamar',
          'SEO local para búsquedas en español como «diseño web en Miami» o «página web para mi negocio»',
          'Inglés como segundo idioma cuando también atiendes al cliente angloparlante',
          'Un interlocutor fijo durante todo el proyecto',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué cambia si tu agencia de diseño web trabaja desde Panamá?',
        paragraphs: [
          'La estructura de costos: no pagamos oficina en Miami, y eso no se carga al precio. No comparamos cifras con agencias locales porque no tenemos datos verificados de otros proveedores; pide cotizaciones con alcance por escrito y compara.',
          'El proceso es el que usamos en Panamá: demo en línea antes de publicar, pago por etapas y un interlocutor fijo. La misma base técnica sostiene <a href="/saas/">tres productos SaaS propios en producción</a>. Lo único que no hay son reuniones en persona: todo se coordina por WhatsApp y videollamada. Los formatos y precios están en la <a href="/precios/">lista publicada</a>.',
        ],
      },
      {
        type: 'cards',
        h2: '¿A qué negocios de Miami les conviene una agencia remota en español?',
        intro: 'No a todos. Si valoras reunirte en persona, una agencia local te sirve mejor. Estos son los casos donde el modelo rinde más.',
        items: [
          { h3: 'Negocios que ya atienden en español', text: 'Si tu cliente te escribe y te llama en español, la web debe estar escrita para él desde el principio, no traducida de una plantilla en inglés.' },
          { h3: 'Servicios profesionales y de confianza', text: 'Contadores, abogados, clínicas, agentes de seguros: rubros donde el cliente hispano prefiere explicar su caso en su idioma antes de decidir. Ver <a href="/industrias/">diseño web por industria</a>.' },
          { h3: 'Negocios que ya pidieron cotizaciones en Miami', text: 'Si ya tienes propuestas locales, compáralas por escrito con la nuestra: alcance, plazo y precio, punto por punto.' },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cómo coordinamos si están en otro país?', a: 'Por WhatsApp y videollamada, en tu horario de oficina: la diferencia horaria entre Panamá y Miami es de cero a una hora según la época del año. En la práctica, coordinamos igual que si estuviéramos en la ciudad.' },
          { q: '¿Cómo pago si la empresa está en Panamá?', a: 'Tarjeta o transferencia internacional, en dólares. No hay conversión de moneda ni comisión extra por eso, y no aplica el ITBMS (7%) porque es un impuesto panameño que no se cobra a un cliente facturado fuera de Panamá.' },
          { q: '¿El sitio se puede hacer bilingüe?', a: 'Sí. Empezamos por el idioma donde vive tu cliente principal (casi siempre español en estos rubros) y agregamos inglés como segundo idioma si atiendes también al mercado angloparlante.' },
          { q: '¿Cuánto tarda el proyecto siendo remoto?', a: 'Los mismos plazos que cualquier proyecto: landing en 5 días hábiles, sitio corporativo entre 2 y 3 semanas desde que recibimos tu contenido. Ser remoto no alarga el proceso, porque todo el trabajo (diseño, desarrollo, revisión) ya ocurre a distancia con cualquier cliente.' },
          { q: '¿Qué pasa si prefiero una agencia físicamente en Miami?', a: 'Es una opción válida si valoras reunirte en persona. Lo que ofrecemos es la alternativa cuando lo que buscas es calidad al mismo nivel sin pagar el costo de esa presencia física.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-doral', label: 'Diseño web en Doral' },
          { slug: 'miami/diseno-web-hialeah', label: 'Diseño web en Hialeah' },
          { slug: 'servicios', label: 'Servicios de diseño web' },
          { slug: 'portafolio', label: 'Portafolio' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Miami?', wa: 'Hola, tengo un negocio en Miami y quiero cotizar una página web.' },
  },

  /* ---------- DORAL ---------- */
  {
    slug: 'miami/diseno-web-doral',
    parent,
    title: 'Diseño Web en Doral, Miami | Empresas y Comercio Internacional',
    description: 'Diseño web para empresas de Doral: importadoras, bienes raíces, clínicas y servicios profesionales. Sede en Panamá, servicio remoto, precios en USD.',
    h1: 'Diseño web en Doral',
    breadcrumb: 'Doral',
    lead: [
      'Doral se construyó alrededor del comercio internacional y el aeropuerto de Miami: aquí operan importadoras, oficinas regionales y profesionales que ya piensan en varios países a la vez.',
      'Elemento Web hace diseño web para empresas de Doral desde Ciudad de Panamá, sin oficina en Miami: sitios bilingües español/inglés, catálogo por línea de producto o servicio, credenciales a la vista y un contacto que filtra la consulta B2B antes de la llamada. Se cobra en USD, sin ITBMS, con demo antes de publicar y pago por etapas.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de una empresa en Doral?',
        items: [
          'Versión en español y en inglés pensada desde el inicio, para clientes de Latinoamérica y de EE.UU.',
          'Licencias, certificaciones y años de operación visibles: el comprador B2B decide con papeles',
          'Catálogo o líneas de servicio por página, para quien compara tres proveedores a la vez',
          'Formulario o WhatsApp que pregunte volumen, origen y destino antes de la llamada',
          'Cobertura explícita: qué países atiendes, desde qué bodega o puerto y en qué plazos',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué una empresa de Doral puede trabajar su web con una agencia en Panamá?',
        paragraphs: [
          'Doral concentra importadoras, freight forwarders y oficinas regionales cerca del aeropuerto de Miami, muchas con dueños venezolanos, colombianos o centroamericanos. Son empresas que ya coordinan proveedores en varios países; un proveedor de diseño web en Panamá, a cero o una hora de diferencia, es el mismo modelo con el que operan.',
          'El rubro decide la estructura más que la ciudad. Lo que aplicamos a una importadora o a una empresa de carga está detallado en <a href="/industrias/diseno-web-importadoras-distribuidoras-panama/">diseño web para importadoras</a> y <a href="/industrias/diseno-web-logistica-transporte-panama/">diseño web para logística</a>; el formato habitual es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> bilingüe.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Manejan proyectos bilingües español/inglés?', a: 'Sí, es de lo más común en Doral. Construimos la estructura pensando en ambos idiomas desde el inicio, no como una traducción pegada después.' },
          { q: '¿Sirve para una oficina regional o solo para pymes locales?', a: 'Para ambas. El mismo proceso aplica si eres una pyme local de Doral o la oficina regional de una empresa que opera en varios países: lo que cambia es el alcance del sitio, no el método.' },
          { q: '¿Cómo se paga desde una empresa en Doral?', a: 'Tarjeta o transferencia internacional, en dólares, sin ITBMS (ese impuesto es panameño y no aplica a un cliente facturado en EE.UU.).' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-en-miami-en-espanol', label: 'Diseño web en Miami' },
          { slug: 'miami/diseno-web-hialeah', label: 'Diseño web en Hialeah' },
          { slug: 'industrias', label: 'Diseño web por industria' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Doral?', wa: 'Hola, tengo una empresa en Doral y quiero cotizar una página web.' },
  },

  /* ---------- HIALEAH ---------- */
  {
    slug: 'miami/diseno-web-hialeah',
    parent,
    title: 'Diseño Web en Hialeah, Miami | Negocios y Comercio Local',
    description: 'Diseño web para negocios de Hialeah: retail, servicios y comercio de barrio. Sede en Panamá, servicio remoto, en español, precios en USD.',
    h1: 'Diseño web en Hialeah',
    breadcrumb: 'Hialeah',
    lead: [
      'Hialeah es una de las ciudades con más pequeños negocios por habitante de Florida, y el día a día se vive casi enteramente en español.',
      'Elemento Web hace diseño web para negocios de Hialeah desde Ciudad de Panamá, sin oficina en Miami: sitios en español, rápidos en el celular, con WhatsApp visible, precios a la vista y fotos reales del local. Una landing parte desde $550 y un sitio de varias páginas desde $1,250, cobrados en USD y sin ITBMS.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de un negocio en Hialeah?',
        items: [
          'Todo en español, escrito como habla tu cliente, sin plantilla traducida',
          'Botón de WhatsApp visible desde la primera pantalla',
          'Precios o rangos a la vista: aquí se decide rápido si el número está claro',
          'Dirección, horario y mapa del local, coherentes con tu ficha de Google',
          'Fotos reales del negocio, no imágenes de stock que podrían ser de cualquier local',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué web le sirve a un comercio de barrio en Hialeah?',
        paragraphs: [
          'Una corta y directa. El cliente de Hialeah busca en español y desde el celular («taller cerca de mí», «cake para cumpleaños en Hialeah») y decide en segundos entre los negocios que salen en el mapa. La web tiene que confirmar lo que vio ahí y llevarlo a un mensaje de WhatsApp.',
          'Para la mayoría basta una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con servicios, precios y ubicación; si vendes varias líneas o tienes más de un local, un sitio de varias páginas. Es el mismo tipo de pyme y comercio local con el que trabajamos en Panamá.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿La web queda solo en español o también en inglés?', a: 'Para la mayoría de negocios en Hialeah, español es suficiente porque es el idioma en el que ya opera el cliente. Si además atiendes clientes angloparlantes, agregamos inglés sin problema.' },
          { q: '¿Cuánto cuesta una web para un negocio pequeño en Hialeah?', a: 'Los mismos rangos que en Panamá: landing desde $550, sitio de varias páginas desde $1,250. Sin ITBMS, porque ese impuesto es panameño y no aplica facturando a un cliente en EE.UU.' },
          { q: '¿Cómo nos comunicamos durante el proyecto?', a: 'Por WhatsApp, en español, con la diferencia horaria de cero a una hora entre Panamá y Miami. El mismo canal que ya usas para hablar con tus propios clientes.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami/diseno-web-en-miami-en-espanol', label: 'Diseño web en Miami' },
          { slug: 'miami/diseno-web-doral', label: 'Diseño web en Doral' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de conversión' },
        ],
      },
    ],
    cta: { h2: '¿Empezamos tu proyecto en Hialeah?', wa: 'Hola, tengo un negocio en Hialeah y quiero cotizar una página web.' },
  },
];
