/* BLOG — Lote 32: guía long-form sobre diseño web para agencias de aduana y
   Zona Libre en Panamá. PageData con parent { slug: 'blog' }; el listado
   /blog la recoge por fecha y categoría. Enlaces internos solo a slugs
   reales del sitio. */
import type { PageData } from '../types';

export const blog32: PageData[] = [
  {
    slug: 'blog/diseno-web-para-agencias-aduaneras-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para agencias de aduana en Panamá: qué capta',
    description: 'Diseño web para agencias de aduana y Zona Libre en Panamá: cotización clara para el importador primerizo, seguimiento de expediente y cuándo no conviene.',
    h1: 'Diseño web para agencias de aduana en Panamá: qué de verdad capta al importador primerizo',
    breadcrumb: 'Diseño web para agencias de aduana',
    category: 'Diseño web',
    date: '2026-09-04',
    heroImage: {
      src: '/images/blog/diseno-web-para-agencias-aduaneras-panama.jpg',
      alt: 'Puerto de carga con contenedores apilados y grúas pórtico al fondo, bajo un cielo despejado',
    },
    lead: [
      'Alguien escribe "cómo importar mercancía a Panamá" o "cuánto cuesta nacionalizar un contenedor" con la carga ya en camino o detenida en el puerto. No sabe qué es un aforo, no sabe qué es una partida arancelaria, y tiene miedo de cometer un error que le salga caro. Abre dos o tres webs de agencias, no entiende ninguna, y termina llamando a la que le recomendó un conocido — no porque fuera la mejor, sino porque fue la única que le explicó algo antes de que sonara el teléfono.',
      'Es un rubro donde casi ninguna agencia le habla a ese importador primerizo: las webs están escritas para el gremio, en su propio idioma técnico. En esta guía repasamos cómo diseñar una cotización que ese cliente sí termina de llenar, qué hacer con el seguimiento de expediente para que la gente deje de llamar a preguntar, por qué operar desde la Zona Libre de Colón es un argumento que casi nadie usa bien en su web, y también cuándo, con honestidad, esa inversión todavía no tiene sentido.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué la claridad en español simple capta al cliente que nadie más atiende',
        paragraphs: [
          'El importador recurrente ya sabe lo que necesita: precio, tiempo de despacho y que le contesten rápido. Pero el primerizo — el que nunca ha importado nada y tiene la mercancía parada — no entiende ni la mitad de lo que lee en una web de agencia típica. "Levante", "aforo", "partida arancelaria", "consolidado": son palabras del oficio, no del cliente, y una web que las usa sin explicarlas filtra exactamente al comprador que más vale la pena captar.',
          'Ese primerizo no es un cliente menor. Es el que se queda años una vez que encuentra una agencia que le explica el proceso sin hacerlo sentir tonto, porque la próxima vez que importe algo va a volver directo, sin comparar de nuevo. Y hoy casi nadie en el rubro está compitiendo por él: las webs hablan del servicio que prestan, no del problema de la persona que llega asustada por primera vez.',
          'Esto no es un matiz de redacción, es la estrategia completa. Cambia qué contenido escribes, cómo armas el formulario de cotización y qué preguntas responde tu página antes de que alguien levante el teléfono. Nuestra <a href="/industrias/diseno-web-agencias-aduana-zona-libre-panama/">página de diseño web para agencias de aduana y Zona Libre</a> entra en el detalle completo de cómo estructuramos eso para una agencia en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de una agencia de aduana necesita para no perder al importador primerizo',
        intro: 'Si tu web no cumple con esto, el cliente que no sabe nada del rubro se va antes de escribirte.',
        items: [
          'El proceso explicado en español simple, no en la jerga que solo entiende el gremio',
          'Un formulario de cotización que pide lo justo — mercancía, valor aproximado, origen —, no veinte campos',
          'Consulta del estado del expediente sin tener que llamar a preguntar',
          'Licencia de corredor de aduana y número de registro visibles, no escondidos en el pie de página',
          'Cobertura clara por punto de entrada: puertos, aeropuerto, Zona Libre, frontera',
          'Un plazo de respuesta comprometido y, sobre todo, cumplido',
          'WhatsApp directo, que es como de verdad se trabaja este rubro',
          'Contenido que responda lo que el primerizo busca antes de llamar a nadie',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo diseñar la cotización que un importador primerizo sí termina de llenar',
        intro: 'La decisión de a qué agencia escribirle se toma casi siempre con quien contestó primero y con algo claro. Un formulario mal diseñado pierde ese momento antes de que empiece.',
        items: [
          { h3: '1. Pregunta lo que la persona sabe, no lo que sabe el gremio', text: 'En vez de pedir la partida arancelaria desde el primer campo, pregunta qué está trayendo: ropa, repuestos, electrónicos, maquinaria. El código arancelario lo defines tú después con esa información; pedírselo al cliente primerizo es la razón número uno por la que abandona el formulario a la mitad.' },
          { h3: '2. Lo justo para dar un número, nada más', text: 'Tipo de mercancía, valor aproximado, de dónde viene y si es contenedor completo o carga suelta alcanza para cotizar. El resto —documentación fina, código exacto— se pide en un segundo paso, cuando el cliente ya invirtió tiempo en la conversación y es menos probable que se vaya.' },
          { h3: '3. Explica qué sigue, no solo cuánto cuesta', text: 'Después de enviar el formulario, dile qué va a pasar: en cuánto tiempo le responden, qué documentos va a necesitar, cuál es el siguiente paso. Al primerizo el costo le preocupa menos que no saber en qué se está metiendo.' },
          { h3: '4. Compromete un plazo y cúmplelo', text: 'No hace falta prometer inmediatez: alcanza con decir cuándo va a tener respuesta —"hoy mismo" o "antes de las 5pm"— y cumplirlo siempre. Es la señal que el importador primerizo busca sin saber que la está buscando, y la que más rápido lo decide por una agencia y no por otra.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Seguimiento de expediente: la llamada que más se repite en una agencia de aduana',
        paragraphs: [
          'Cualquiera que haya trabajado en una agencia de aduana conoce la llamada: "¿cómo va mi trámite?". Se repite decenas de veces a la semana, y cada una le quita minutos a alguien que debería estar despachando carga, no explicando un estatus por teléfono.',
          'No hace falta integrar el sistema aduanero completo para resolverlo. Basta con que el cliente entre con su número de expediente o de referencia y vea en qué etapa va —documentación recibida, en aforo, liberado, listo para retiro—, aunque ese estado lo actualice alguien del equipo a mano al final del día. Es menos trabajo que contestar la misma pregunta quince veces.',
          'Si de verdad quieres conectar eso con tu sistema interno para que se actualice solo, es un proyecto a medida, no algo que venga incluido en una web institucional estándar. Lo honesto es empezar simple, medir cuánto bajan las llamadas de seguimiento, y decidir con ese dato si la integración completa vale la inversión.',
        ],
      },
      {
        type: 'prose',
        h2: 'Panamá como hub de Zona Libre: un argumento que casi ninguna agencia usa bien',
        paragraphs: [
          'La Zona Libre de Colón es una de las zonas francas más grandes del hemisferio, y punto de partida para operar hacia México, Centroamérica y el Caribe desde Panamá — una razón por la que empresas extranjeras evalúan agencias panameñas todo el tiempo. Aun así, en la mayoría de las webs del rubro esa ventaja aparece como una línea más en la lista de servicios, en vez de ser el motivo por el que alguien de otro país debería escribirte a ti y no a un operador en su propio mercado.',
          'A ese cliente no le preocupa la misma pregunta que al importador local. Quiere saber si puedes reexportar rápido, mantener inventario sin nacionalizarlo y consolidar carga de varios proveedores en un solo envío. Si tu agencia hace eso, merece una página que lo explique con ese lenguaje, no una viñeta perdida entre "otros servicios".',
          'Y hay una consecuencia práctica que cuesta poco resolver: ese cliente busca en inglés. Una versión en inglés de tu página de reexportación y Zona Libre te pone frente a una competencia local casi inexistente en ese idioma, mientras el resto del rubro sigue compitiendo solo en español por el mismo importador de siempre.',
        ],
      },
      {
        type: 'statement',
        text: 'El importador primerizo no elige la agencia con más años en el gremio.',
        strong: 'Elige la primera que le explicó, en español simple, qué iba a pasar con su mercancía.',
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene invertir todavía en la web de tu agencia',
        paragraphs: [
          'No toda agencia de aduana necesita hoy una web completa, y decirlo con honestidad ahorra un gasto que no le va a servir a todo el mundo. Si trabajas casi en exclusiva para dos o tres clientes corporativos grandes, con contrato y volumen asegurado, y no estás buscando importadores nuevos, invertir en contenido para captar al primerizo es dinero mal puesto: ese cliente ya te conoce, ya confía, y no llega buscando en Google.',
          'En ese caso alcanza con algo simple: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> que confirme quién eres, tu licencia y un WhatsApp directo, desde $550 más ITBMS. No tiene sentido pagar por páginas de trámites ni por seguimiento de expediente si nadie nuevo las va a usar.',
          'Donde sí se justifica una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> —una Página PYME desde $950 más ITBMS, con los trámites explicados por página y consulta de expediente— es cuando quieres dejar de depender solo de esos dos o tres contratos, cuando la Zona Libre es parte real de tu operación, o cuando ya estás cansado de explicar por WhatsApp, todos los días, lo mismo que podría estar escrito una sola vez. Los precios completos, con todo lo que suma o resta al costo, están en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para agencias de aduana y Zona Libre',
        items: [
          { q: '¿Cuánto cuesta la web de una agencia de aduana o empresa de Zona Libre en Panamá?', a: 'Depende de si necesitas solo presencia institucional o consulta de expediente. Una landing page parte de $550, una Página PYME de 8 a 12 páginas —trámites explicados uno por uno, más un formulario de estado— parte de $950, y si necesitas integración real con tu sistema aduanero es un proyecto a medida desde $2,900. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Qué más hay que pagar además del diseño?', a: 'Infraestructura y mantenimiento, que son gastos separados del diseño. La infraestructura —dominio, hosting y SSL— va desde $225 al año en el plan compartido, $350 en el cloud (el que recomendamos para la mayoría) o $550 en VPS dedicado si esperas mucho tráfico. El mantenimiento —actualizaciones, respaldos, monitoreo— arranca en $59 al mes y sube a $99 o $189 según cuánto necesites que respondamos. Ninguno de estos precios incluye ITBMS.' },
          { q: '¿Necesito conectar mi sistema interno para el seguimiento de expediente?', a: 'No para empezar. Un formulario simple que muestre el estado por número de referencia —aunque ese estado lo actualice alguien a mano— ya reduce la mayoría de las llamadas de "¿cómo va mi trámite?". La integración en tiempo real con tu sistema aduanero es posible, pero es un proyecto a medida aparte.' },
          { q: '¿Vale la pena tener la web en inglés si opero en Zona Libre?', a: 'Sí, si de verdad atiendes o quieres atender clientes regionales o extranjeros. Ese comprador evalúa desde dónde reexportar hacia Centroamérica y el Caribe, busca en inglés, y la competencia local en ese idioma es casi nula. Si tu operación es puramente local, no es la primera prioridad.' },
          { q: '¿Cuándo no conviene invertir en la web de mi agencia?', a: 'Cuando trabajas casi en exclusiva para dos o tres clientes corporativos grandes, con contrato asegurado, y no buscas importadores nuevos. Ahí una presencia simple basta. Se justifica invertir más cuando quieres que alguien que no te conoce te encuentre buscando en Google, o cuando la Zona Libre es una parte real de tu negocio que hoy no estás explicando bien.' },
          { q: '¿El SEO me garantiza aparecer primero para "agencia de aduana Panamá"?', a: 'No, y cualquiera que lo prometa está exagerando. Lo que sí funciona es tener contenido real por trámite, sostenido en el tiempo, en un rubro donde casi nadie más lo está escribiendo: eso multiplica las posibilidades de aparecer, no las garantiza.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-agencias-aduana-zona-libre-panama', label: 'Diseño web para agencias de aduana y Zona Libre' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Diseño web para importadoras y distribuidoras' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que explica los trámites y filtra consultas antes de la llamada',
      wa: 'Hola, quiero una web para mi agencia de aduana o empresa de Zona Libre en Panamá. ¿Me asesoran?',
    },
  },
];
