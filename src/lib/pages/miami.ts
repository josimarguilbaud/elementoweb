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
    lead: [
      'Miami-Dade se vende y se compra en español. Tu web debería hablar el mismo idioma que tu cliente, no una traducción de plantilla.',
      'Somos una agencia con sede en Panamá que trabaja 100% remoto para negocios hispanos de Miami: mismo huso horario (una hora de diferencia como mucho), precios en USD y el mismo proceso que usamos con nuestros clientes en Panamá. Aquí ves las zonas donde trabajamos; si buscas la oferta y cómo se cobra, está en <a href="/miami/diseno-web-en-miami-en-espanol/">páginas web para negocios hispanos de Miami</a>.',
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
        h2: 'Por qué Panamá para un negocio de Miami',
        items: [
          'Mismo huso horario: coordinamos sin el desfase de un equipo asiático o europeo',
          'Mismo idioma nativo, no un traductor leyendo un brief en inglés',
          'Precios en USD, sin conversión de moneda ni sorpresas cambiarias',
          'La misma calidad técnica con la que operamos tres SaaS propios en producción',
          'Comunicación directa por WhatsApp, en tu horario de oficina',
          'Sin el costo de estructura de una agencia física en EE.UU.',
        ],
      },
      {
        type: 'prose',
        h2: 'Remoto no significa a distancia',
        paragraphs: [
          '"Remoto" suena a que perdiste el control del proyecto. En la práctica es al revés: trabajamos con el mismo proceso que usamos con clientes en Panamá — demo online antes de publicar, tres pagos (no todo por adelantado) y un interlocutor fijo que conoce tu negocio, no un ticket de soporte genérico.',
          'Lo que no necesitas para que una web funcione es que quien la construye esté sentado en tu misma ciudad. Lo que sí necesitas es que responda rápido, en tu idioma y en tu horario. Eso es exactamente lo que resolvemos operando desde Panamá.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cómo se factura si están en Panamá?', a: 'Facturamos desde la empresa panameña, en dólares, igual que cualquier cliente de Elemento Web. El pago se hace por tarjeta o transferencia internacional; no manejamos Yappy fuera de Panamá porque es un método de pago exclusivo de ahí.' },
          { q: '¿Aplica el ITBMS (7%) que mencionan en los precios?', a: 'No. El ITBMS es un impuesto panameño y no aplica a un servicio facturado a un cliente fuera de Panamá. Los precios publicados son los que pagas, sin ese recargo.' },
          { q: '¿Por qué no contratar una agencia que ya esté en Miami?', a: 'Puedes, y vas a pagar la estructura de costos de EE.UU. por el mismo trabajo. Nosotros operamos desde Panamá con el mismo nivel técnico (los mismos estándares con los que mantenemos <a href="/saas/">tres SaaS propios en producción</a>) a un costo que no carga ese sobreprecio.' },
          { q: '¿Hay diferencia horaria real?', a: 'Panamá está en UTC-5 todo el año. Miami está en UTC-5 en invierno y UTC-4 en horario de verano, así que la diferencia es de cero a una hora. En la práctica, coordinamos en tu jornada laboral sin fricción.' },
          { q: '¿El sitio queda en español, en inglés, o en los dos?', a: 'Depende de a quién le vendes. Si tu cliente en Miami opera en español (la mayoría en Doral, Hialeah y buena parte del condado), el sitio va en español. Si necesitas atender también al cliente angloparlante, agregamos inglés como segundo idioma sin duplicar el trabajo desde cero.' },
          { q: '¿Cuánto cuesta comparado con una web para un cliente en Panamá?', a: 'Los mismos precios: landing desde $550, sitio corporativo desde $950, e-commerce desde $1,500. No cobramos más por atender Miami; la moneda y el proceso ya son los mismos.' },
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
      'Trabajamos remoto desde Panamá con negocios hispanos de Miami: mismo huso horario, precios en dólares y el mismo proceso que usamos en cada proyecto, con demo online antes de publicar y pago por etapas.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que necesita la web de un negocio hispano en Miami',
        items: [
          'Contenido en español nativo, no traducido con IA sin revisión',
          'Botón directo a WhatsApp: así se contacta un negocio hispano, no un formulario de contacto genérico',
          'Precios en USD, claros desde la web, sin obligar a llamar para saber cuánto cuesta',
          'SEO local para búsquedas en español ("diseño web en Miami", "página web para mi negocio")',
          'Diseño que compite visualmente con agencias de EE.UU., sin el precio de EE.UU.',
          'Un interlocutor fijo, no un call center que cambia de persona cada vez',
        ],
      },
      {
        type: 'prose',
        h2: 'El sobreprecio de "estar en Miami" no es calidad, es renta',
        paragraphs: [
          'Una agencia física en Miami paga oficina, nómina en dólares de EE.UU. y overhead que no tiene nada que ver con la calidad del sitio que te entrega. Ese costo se traslada al cliente.',
          'Nosotros operamos desde Panamá con estructura de costos panameña, pero con el mismo nivel de exigencia técnica: el mismo que usamos para mantener <a href="/saas/">tres productos SaaS propios en producción</a> con clientes reales. La diferencia de precio no es por hacer menos: es por no cargar una renta que no aporta nada a tu web.',
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le sirve más',
        intro: 'No es para todo el mundo. Estos son los negocios donde el ángulo "en español, remoto desde Panamá" rinde más.',
        items: [
          { h3: 'Negocios que ya atienden en español', text: 'Si tu cliente te escribe y te llama en español, tu web debería hacer lo mismo. Traducir una plantilla en inglés no es lo mismo que construirla pensando en cómo vende un hispanohablante.' },
          { h3: 'Servicios profesionales y de confianza', text: 'Contadores, abogados, clínicas, agentes de seguros: rubros donde el cliente hispano prefiere explicar su caso en su idioma antes de decidir.' },
          { h3: 'Negocios que ya compararon precios en Miami', text: 'Si ya pediste cotizaciones locales y el número te sorprendió, vale la pena comparar contra una estructura de costos distinta antes de resignarte a pagarlo.' },
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
      'Ese perfil de negocio no necesita explicarle a una agencia qué es trabajar remoto: ya lo hace todos los días. Trabajamos desde Panamá con el mismo estándar que exige un negocio acostumbrado a operar sin fronteras.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Doral',
        items: [
          'Presentación bilingüe (español/inglés) para clientes de la región y de EE.UU.',
          'Credenciales y certificaciones visibles: aquí se decide con papeles, no solo con diseño',
          'Catálogo o líneas de servicio claras para un comprador B2B que compara varias opciones',
          'Formulario o WhatsApp que filtre el tipo de consulta antes de la llamada',
          'Contenido pensado para un cliente que ya trabaja con proveedores en más de un país',
        ],
      },
      {
        type: 'prose',
        h2: 'Un negocio acostumbrado a lo internacional entiende lo remoto',
        paragraphs: [
          'Si tu empresa ya importa, exporta o coordina con oficinas en otros países, la idea de que tu proveedor de diseño web esté en Panamá no es un riesgo: es el mismo modelo con el que ya operas todos los días.',
          'La diferencia está en el resultado: mismo nivel de exigencia técnica, comunicación en tu idioma y en tu horario, y una estructura de precio que no carga el costo de estar en uno de los códigos postales más caros de Florida.',
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
      'Aquí una web genérica en inglés no conecta. Construimos sitios pensados para cómo un negocio de Hialeah realmente vende: en español, por WhatsApp, con precio claro desde el primer clic.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que suele necesitar un negocio en Hialeah',
        items: [
          'Web 100% en español, sin traducción de plantilla',
          'Botón de WhatsApp visible desde el primer scroll',
          'Precios o rangos de precio claros: aquí se decide rápido si el número está a la vista',
          'Fotos reales del negocio, no stock genérico que podría ser cualquier local',
          'Diseño simple y rápido de cargar, pensado para que se abra bien desde el celular',
        ],
      },
      {
        type: 'prose',
        h2: 'El comercio de barrio no necesita una web complicada, necesita una que convierta',
        paragraphs: [
          'Un negocio de Hialeah no compite por tener la web más sofisticada de Miami: compite por aparecer cuando alguien busca en español y por convertir esa visita en un mensaje de WhatsApp. Eso es diseño enfocado en resultado, no en aparentar.',
          'Trabajamos remoto desde Panamá con el mismo idioma y el mismo tipo de negocio que ya conocemos de sobra en nuestro propio mercado: pymes, comercio local, servicios de barrio. El terreno es el mismo aunque el país cambie.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿La web queda solo en español o también en inglés?', a: 'Para la mayoría de negocios en Hialeah, español es suficiente porque es el idioma en el que ya opera el cliente. Si además atiendes clientes angloparlantes, agregamos inglés sin problema.' },
          { q: '¿Cuánto cuesta una web para un negocio pequeño en Hialeah?', a: 'Los mismos rangos que en Panamá: landing desde $550, sitio de varias páginas desde $950. Sin ITBMS, porque ese impuesto es panameño y no aplica facturando a un cliente en EE.UU.' },
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
