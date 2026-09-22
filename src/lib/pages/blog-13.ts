/* BLOG — nuevo artículo: diseño web para constructoras en Panamá.
   PageData con parent { slug: 'blog' }; el listado /blog lo recoge por fecha
   y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog13: PageData[] = [
  {
    slug: 'blog/diseno-web-para-constructoras-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para constructoras en Panamá: qué convence',
    description: 'Qué debe tener la web de una constructora en Panamá: portafolio con avance de obra, certificaciones a la vista y una cotización honesta.',
    h1: 'Diseño web para constructoras en Panamá: lo que de verdad convence a un cliente',
    breadcrumb: 'Diseño web para constructoras',
    category: 'Diseño web',
    date: '2026-09-19',
    heroImage: {
      src: '/images/blog/diseno-web-para-constructoras-panama.jpg',
      alt: 'Obra de construcción con estructura de acero, grúas de fondo y cielo despejado',
    },
    lead: [
      'Un cliente que va a construir o remodelar está por comprometer una cantidad de dinero que casi nunca arriesga en otra decisión de compra. No lo convence un eslogan ni una plantilla con foto de casco amarillo de banco de imágenes: lo convence lo que puede comprobar. Obra entregada, con fecha, con fotos y con alguien real detrás, o no hay trato.',
      'La mayoría de las webs de constructoras en Panamá se diseñan como una tarjeta de presentación cuando deberían diseñarse como un expediente de evidencia. En esta guía repasamos qué debe tener sí o sí la web de una constructora, por qué conviene ser honesto sobre el precio antes de pisar el terreno, y en qué casos —siendo igual de honestos— la web no es lo que te va a traer el próximo contrato.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El portafolio no es una vitrina: es lo que cierra el trato',
        paragraphs: [
          'En casi cualquier otro rubro el portafolio es un adorno que acompaña la venta. En construcción es la venta. El cliente no está comprando una promesa de diseño ni una lista de servicios: está comprando la certeza de que, si te paga, el proyecto se termina. Y esa certeza solo la da ver trabajo real, terminado, con fotos que no son un render ni una foto de stock con un casco amarillo.',
          'Lo que de verdad mueve la decisión es el avance de obra documentado: fotos fechadas que muestran cómo se veía el sitio el primer día, cómo iba a la mitad y cómo quedó al entregar. No hace falta una producción cara; alcanza con una foto tomada con el celular cada semana, ordenada por fecha, sin editar de más. Esa bitácora ataca directamente el miedo más común en este rubro: que la obra se quede a medias.',
          'Organiza el portafolio por proyecto, no por servicio genérico: ubicación o zona, tipo de trabajo (obra nueva, remodelación, ampliación), metraje aproximado, tiempo que tomó y fotos de antes y después. Así lo organizamos en nuestro propio <a href="/portafolio/">portafolio</a>, donde por ejemplo Remodelaciones JG, una empresa de remodelación y construcción en Panamá, se presenta con sus trabajos reales, no con texto de relleno sobre "calidad y compromiso". Cada proyecto bien documentado es además una página más que Google puede mostrarle a quien busca una constructora en su zona, que es la lógica detrás del <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
        ],
      },
      {
        type: 'steps',
        h2: 'Lo que no puede faltar en la web de una constructora en Panamá',
        intro: 'No hace falta que la web tenga cien secciones. Hace falta que no le falte ninguna de estas.',
        items: [
          { h3: 'Portafolio con fotos reales y fechadas', text: 'Cada proyecto con sus propias fotos de antes, durante y después, y con la fecha visible. Sin fecha, una foto de "avance" no prueba nada.' },
          { h3: 'Certificaciones, permisos y años en el mercado', text: 'Idoneidad del responsable, permisos en regla y desde cuándo opera la empresa, a la vista y no escondidos en un PDF que nadie abre.' },
          { h3: 'Un formulario de cotización que pida lo mínimo', text: 'Tipo de proyecto, metraje aproximado y zona. Lo suficiente para dar un primer estimado, nunca un precio cerrado sin visitar el sitio.' },
          { h3: 'Testimonios con nombre y con el proyecto al lado', text: '"Excelente trabajo" sin firma no convence a nadie. El mismo comentario, con el nombre del cliente y la foto de su proyecto, sí.' },
          { h3: 'Zonas y tipos de proyecto que sí atiendes', text: 'Decir con claridad dónde trabajas y qué tamaño de proyecto tomas evita perder tiempo con consultas que nunca vas a poder cerrar.' },
          { h3: 'WhatsApp directo, no solo un formulario', text: 'Quien pregunta por una obra quiere respuesta rápida. Un formulario que nadie revisa hasta el lunes pierde al cliente que ya decidió escribirte.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué no deberías prometer un precio exacto sin visitar el proyecto',
        paragraphs: [
          'Una obra tiene demasiadas variables para cotizarse a ciegas: el acceso al terreno, el estado de una estructura existente si es remodelación, el tipo de suelo, los permisos que ya estén o no tramitados, los acabados que el cliente todavía no ha decidido. Poner en la web una calculadora que escupe un precio final por metro cuadrado, sin que nadie haya pisado el sitio, es prometer algo que después vas a tener que corregir hacia arriba. Y esa corrección es la que rompe la confianza, no el precio en sí.',
          'Lo que sí puede hacer la web es dar un primer estimado honesto con muy pocos datos: tipo de proyecto (obra nueva, remodelación, ampliación), metraje aproximado y zona. Con esos tres campos alcanza para devolver un rango razonable y, más importante, para filtrar: separar al que busca información de rutina del que de verdad está por decidir. El precio cerrado llega después, cuando alguien de tu equipo ya vio el sitio en persona.',
          'Esto no es una limitación técnica, es una decisión de honestidad que también vende. Decir con claridad que <strong>necesitas ver el proyecto para dar un número real</strong> transmite más seriedad que un simulador que le pone precio a algo que nadie ha medido. Aplicamos la misma lógica en nuestros propios servicios: los precios de referencia de una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> están publicados desde el inicio, y el número final de un proyecto a medida se cierra después de entender el alcance real, no antes.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Certificaciones y permisos: la confianza que no se puede improvisar',
        intro: 'En construcción, la confianza no es una sensación: son documentos concretos que el cliente puede verificar. Si tu web no los muestra, alguien va a asumir que no los tienes.',
        items: [
          'Idoneidad del ingeniero o arquitecto responsable, con su número de registro',
          'Permisos de construcción vigentes y en qué etapa está cada trámite',
          'Afiliación a un gremio del sector, si la empresa la tiene',
          'Años de trayectoria y cuántos proyectos se han entregado',
          'Póliza de responsabilidad civil y de los trabajadores en obra',
          'Certificaciones de seguridad ocupacional del personal',
          'Garantía por escrito sobre lo entregado, con plazo y alcance claros',
        ],
      },
      {
        type: 'statement',
        text: 'En este rubro la confianza no se vende con adjetivos.',
        strong: 'Se vende respondiendo una sola pregunta: ¿esto se va a terminar bien y a tiempo?',
      },
      {
        type: 'prose',
        h2: 'Testimonios reales, con el proyecto al lado',
        paragraphs: [
          'Un testimonio genérico —"muy profesionales, quedamos encantados"— no cuesta nada escribirlo y por eso no convence a nadie. Cualquiera puede inventarlo, y el cliente que está evaluando si arriesgar su dinero contigo lo sabe. Lo que sí pesa es un testimonio con nombre y apellido, la empresa o el proyecto al que pertenece, y —siempre que se pueda— la foto del trabajo terminado justo al lado.',
          'La forma más simple de conseguirlos es pedirlos en el momento correcto: apenas se entrega un proyecto y el cliente está contento, no meses después cuando ya se le olvidó el detalle. Pide una frase corta y honesta, y publícala junto a la ficha de ese mismo proyecto en el portafolio, no en una página de "testimonios" separada y sin contexto que nadie relaciona con nada concreto.',
          'Esto pesa todavía más cuando el proyecto se vende sobre plano, antes de existir. Si tu constructora maneja preventas inmobiliarias, un comprador que va a pagar durante meses por algo que todavía no puede pisar necesita ver referencias de proyectos anteriores con nombre y fecha; lo desarrollamos a fondo en <a href="/industrias/diseno-web-constructoras-panama/">diseño web para constructoras y promotoras</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo una web NO es la prioridad para una constructora',
        paragraphs: [
          'Hay que ser honestos: si tu constructora vive casi por completo de licitaciones públicas o de contratos corporativos que llegan por relación directa o por proceso de adjudicación, una web de conversión no es lo que te va a traer el próximo contrato. Ahí te evalúan <strong>por expediente</strong> —capacidad financiera, fianzas, referencias, experiencia certificada— no por lo que encuentran buscando en Google.',
          'Eso no significa que no debas tener presencia en internet. Significa que no vale la pena invertir en un formulario de cotización optimizado, en testimonios en video o en una bitácora de avance pensada para convencer a un comprador que nunca va a llegar por ese camino. En ese caso, con un sitio institucional sobrio que respalde tu seriedad cuando alguien del comité verifica quién eres, es suficiente.',
          'La web sí importa, y mucho, cuando del otro lado hay una persona o una empresa que decide sin pliego de licitación de por medio: el dueño de una casa que quiere remodelar, un desarrollador mediano que vende directo al público, una empresa que necesita ampliar su local. Ese cliente sí te compara con otros buscando en Google o en redes, y ahí es donde todo lo anterior —portafolio, certificaciones, testimonios, cotización honesta— realmente decide.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre la web de una constructora',
        items: [
          { q: '¿Cuánto cuesta la web de una constructora en Panamá?', a: 'Depende de cuántos proyectos actives a la vez. Una constructora con uno o dos proyectos, o que solo necesita mostrar portafolio y trayectoria, suele cubrirse con una Página PYME (desde $950, de 8 a 12 páginas). Si maneja varios desarrollos con ficha propia por proyecto, bitácora de avance y financiamiento, el proyecto crece hacia un corporativo a medida (desde $2,900). La infraestructura se cotiza aparte, desde $225 al año, y el mantenimiento desde $59 al mes. Precios en USD, sin el 7% de ITBMS.' },
          { q: '¿Puedo actualizar el avance de obra yo mismo?', a: 'Si la web se construye con panel autoadministrable, sí: subes las fotos y la fecha desde tu teléfono o computadora en minutos, sin depender de la agencia. Una bitácora que solo puede actualizar un tercero casi siempre termina abandonada, y una bitácora abandonada genera más dudas que no tenerla.' },
          { q: '¿Debo mostrar un precio en la web?', a: 'No un precio cerrado, pero sí un rango o una forma clara de llegar a uno. Un formulario que pida tipo de proyecto, metraje aproximado y zona te permite responder con un estimado honesto sin comprometerte a un número que después tengas que corregir. Un precio exacto publicado sin haber visto el sitio suele ser señal de que se va a ajustar más adelante, y eso el cliente lo nota.' },
          { q: '¿Qué hago si todavía no tengo fotos profesionales de mis proyectos?', a: 'Empieza con lo que tengas: fotos tomadas con el celular, bien iluminadas y en orden, valen más que no mostrar nada. Lo que hay que evitar es rellenar con fotos de stock genéricas de construcción: en este rubro esas fotos no ayudan, delatan que no hay proyectos reales detrás. Si el presupuesto lo permite, una sesión de fotos profesional del proyecto insignia sí vale la pena.' },
          { q: '¿Sirve esto si hago obra a la medida y no promociones inmobiliarias?', a: 'Sí, cambia el énfasis. En vez de fichas por modelo y financiamiento de preventa, el peso va al portafolio de obras entregadas, el proceso de trabajo paso a paso y un cotizador que recoja tipo de proyecto, metraje y zona. La lógica de fondo —evidencia antes que promesas— es la misma para una constructora de obra a la medida que para una promotora de proyectos en preventa.' },
          { q: '¿Cuándo no me conviene invertir en esto?', a: 'Si tu negocio depende casi por completo de licitaciones públicas o de contratos corporativos que llegan por relación directa, el proceso de selección no pasa por buscar en Google, y una web de conversión no es la prioridad. Ahí basta con un sitio sobrio que respalde tu seriedad. Se vuelve prioridad en cuanto una parte de tus clientes decide comparando contratistas por su cuenta, sin pliego de licitación de por medio.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Diseño web para constructoras y promotoras' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'portafolio', label: 'Portafolio de proyectos' },

          { slug: 'industrias/diseno-web-arquitectos-diseno-interiores-panama', label: 'Diseño web para arquitectos' },
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Diseño web para ferreterías' },
        ],
      },
    ],
    cta: {
      h2: 'Que tu web venda con la misma evidencia que tu obra',
      wa: 'Hola, quiero una web para mi constructora con portafolio real y avance de obra. ¿Me ayudan?',
    },
  },
];
