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
      'El diseño web para agencias de aduana en Panamá capta al importador primerizo cuando explica el proceso en español simple, cotiza con pocos datos (mercancía, valor, origen), muestra el estado del expediente sin llamar y publica licencia y cobertura. En Elemento Web, una landing parte desde $550 y una Web empresarial desde $1,250, más ITBMS.',
      'Quien busca «cómo importar mercancía a Panamá» o «cuánto cuesta nacionalizar un contenedor» suele tener la carga en camino o detenida en el puerto. No sabe qué es un aforo ni una partida arancelaria, y teme un error caro. Abre dos o tres webs escritas para el gremio, no entiende ninguna y termina llamando a la que le explicó algo primero.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué el español simple capta al importador que nadie atiende?',
        paragraphs: [
          'El importador recurrente ya sabe lo que necesita: precio, tiempo de despacho y respuesta rápida. El primerizo no entiende la mitad de lo que lee en una web de agencia típica. «Levante», «aforo», «partida arancelaria», «consolidado» son palabras del oficio, y una web que las usa sin explicarlas filtra justo al comprador que más vale la pena captar.',
          'Ese primerizo no es un cliente menor: cuando encuentra una agencia que le explica el proceso sin hacerlo sentir tonto, vuelve directo la próxima vez, sin comparar. Y casi nadie compite por él. Escribir para él cambia el contenido, el formulario de cotización y las preguntas que la web responde antes de que suene el teléfono. Nuestra página de <a href="/industrias/diseno-web-agencias-aduana-zona-libre-panama/">diseño web para agencias de aduana y Zona Libre</a> detalla cómo lo estructuramos para una agencia en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué necesita la web de una agencia de aduana para no perder al importador primerizo?',
        intro: 'Si falta algo de esto, el cliente que no conoce el rubro se va antes de escribirte.',
        items: [
          'El proceso explicado en español simple, no en la jerga del gremio',
          'Un formulario de cotización que pide lo justo — mercancía, valor aproximado, origen —, no veinte campos',
          'Consulta del estado del expediente sin tener que llamar',
          'Licencia de corredor de aduana y número de registro visibles, no escondidos en el pie de página',
          'Cobertura clara por punto de entrada: puertos, aeropuerto, Zona Libre, frontera',
          'Un plazo de respuesta comprometido y cumplido',
          'WhatsApp directo, que es como se trabaja este rubro',
          'Contenido que responda lo que el primerizo busca antes de llamar a nadie',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo diseñar la cotización que un importador primerizo sí termina de llenar?',
        intro: 'El importador suele escribirle a la agencia que contestó primero y con algo claro. Un formulario mal diseñado pierde ese momento.',
        items: [
          { h3: '1. Pregunta lo que la persona sabe, no lo que sabe el gremio', text: 'En vez de pedir la partida arancelaria en el primer campo, pregunta qué trae: ropa, repuestos, electrónicos, maquinaria. El código lo defines tú después; pedírselo al primerizo es la razón principal por la que abandona el formulario.' },
          { h3: '2. Lo justo para dar un número', text: 'Tipo de mercancía, valor aproximado, origen y si es contenedor completo o carga suelta alcanzan para cotizar. La documentación fina y el código exacto se piden en un segundo paso, cuando el cliente ya invirtió tiempo en la conversación.' },
          { h3: '3. Explica qué sigue, no solo cuánto cuesta', text: 'Tras enviar el formulario, dile en cuánto tiempo le responden, qué documentos necesitará y cuál es el siguiente paso. Al primerizo le preocupa más no saber en qué se mete que el costo.' },
          { h3: '4. Compromete un plazo y cúmplelo', text: 'Basta con decir cuándo tendrá respuesta —«hoy mismo» o «antes de las 5pm»— y cumplirlo siempre. Es la señal que más rápido lo decide por una agencia y no por otra.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo reducir las llamadas de «¿cómo va mi trámite?»?',
        paragraphs: [
          'Es la llamada que más se repite en una agencia de aduana: decenas de veces a la semana, cada una quitándole minutos a alguien que debería estar despachando carga.',
          'No hace falta integrar el sistema aduanero completo. Basta con que el cliente entre con su número de expediente o referencia y vea la etapa —documentación recibida, en aforo, liberado, listo para retiro—, aunque alguien del equipo la actualice a mano al final del día. Es menos trabajo que contestar la misma pregunta quince veces.',
          'Conectarlo con tu sistema interno para que se actualice solo es un proyecto a medida, no parte de una web institucional estándar. Lo sensato es empezar simple, medir cuánto bajan las llamadas de seguimiento y decidir con ese dato si la integración vale la inversión.',
        ],
      },
      {
        type: 'prose',
        h2: 'Zona Libre de Colón: el argumento que casi ninguna agencia usa bien',
        paragraphs: [
          'La Zona Libre de Colón es una de las zonas francas más grandes del hemisferio y punto de partida para operar hacia México, Centroamérica y el Caribe, por eso empresas extranjeras evalúan agencias panameñas todo el tiempo. Aun así, en la mayoría de las webs del rubro aparece como una línea más en la lista de servicios, no como el motivo para escribirte a ti y no a un operador en su propio mercado.',
          'Ese cliente quiere saber si puedes reexportar rápido, mantener inventario sin nacionalizarlo y consolidar carga de varios proveedores en un envío. Si tu agencia lo hace, merece una página que lo explique en ese lenguaje, no una viñeta entre «otros servicios».',
          'Y ese cliente busca en inglés. Una versión en inglés de tu página de reexportación y Zona Libre te pone frente a una competencia local casi inexistente en ese idioma.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de tu agencia?',
        paragraphs: [
          'Si trabajas casi en exclusiva para dos o tres clientes corporativos grandes, con contrato y volumen asegurado, y no buscas importadores nuevos, el contenido para captar al primerizo es dinero mal puesto: ese cliente ya te conoce y no llega buscando en Google.',
          'Ahí alcanza con una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> que confirme quién eres, tu licencia y un WhatsApp directo, desde $550 más ITBMS. No tiene sentido pagar páginas de trámites ni seguimiento de expediente que nadie nuevo va a usar.',
          'Sí se justifica una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> —una Web empresarial desde $1,250 más ITBMS, con los trámites explicados por página y consulta de expediente— cuando quieres dejar de depender de esos contratos, cuando la Zona Libre es parte real de tu operación o cuando explicas por WhatsApp, todos los días, lo que podría estar escrito una sola vez. Los precios completos están en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para agencias de aduana y Zona Libre',
        items: [
          { q: '¿Cuánto cuesta la web de una agencia de aduana o empresa de Zona Libre en Panamá?', a: 'Depende de si necesitas solo presencia institucional o consulta de expediente. Una landing page parte de $550, una Web empresarial de hasta 6 páginas —trámites explicados uno por uno, más un formulario de estado— parte de $1,250, y si necesitas integración real con tu sistema aduanero es un proyecto a medida desde $2,900. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Qué más hay que pagar además del diseño?', a: 'Infraestructura y mantenimiento, que son gastos separados del diseño. La infraestructura —dominio, hosting y SSL— va desde $225 al año en el plan compartido, $350 en el cloud (el que recomendamos para la mayoría) o $550 en VPS dedicado si esperas mucho tráfico. El mantenimiento —actualizaciones, respaldos, monitoreo— arranca en $99 al mes y sube a $169 o $319 según cuánto necesites que respondamos. Ninguno de estos precios incluye ITBMS.' },
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
