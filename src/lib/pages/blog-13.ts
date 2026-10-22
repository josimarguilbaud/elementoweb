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
      alt: 'Casco de obra sobre una viga de acero, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para constructoras en Panamá convence cuando muestra evidencia comprobable: portafolio con fotos fechadas de antes, durante y después de cada obra, idoneidad y permisos a la vista, testimonios con nombre y un cotizador que pida tipo de proyecto, metraje y zona, en vez de prometer un precio exacto sin visitar el sitio.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El portafolio no es una vitrina: es lo que cierra el trato',
        paragraphs: [
          'En construcción el portafolio es la venta. El cliente que va a construir o remodelar compromete más dinero que en casi cualquier otra compra, y lo que compra es la certeza de que el proyecto se termina. Esa certeza solo la da trabajo real y terminado, no un render ni una foto de stock con casco amarillo.',
          'Lo que mueve la decisión es el avance de obra documentado: fotos fechadas del sitio el primer día, a la mitad y al entregar. Alcanza con una foto de celular cada semana, ordenada por fecha. Esa bitácora ataca el miedo más común del rubro: que la obra se quede a medias.',
          'Organiza el portafolio por proyecto, no por servicio genérico: zona, tipo de trabajo (obra nueva, remodelación, ampliación), metraje aproximado, duración y fotos de antes y después. Así está nuestro propio <a href="/portafolio/">portafolio</a>, donde Remodelaciones JG, empresa de remodelación y construcción en Panamá, se presenta con sus trabajos reales. Cada proyecto documentado es además una página que Google puede mostrar a quien busca una constructora en su zona, la lógica del <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
        ],
      },
      {
        type: 'steps',
        h2: 'Diseño web para constructoras en Panamá: ¿qué no puede faltar?',
        intro: 'Seis piezas; a la web de una constructora no le puede faltar ninguna.',
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
        h2: '¿Debe una constructora publicar precios en su web?',
        paragraphs: [
          'Un rango sí; un precio exacto sin visitar el proyecto, no. Una obra tiene demasiadas variables para cotizarse a ciegas: acceso al terreno, estado de la estructura existente si es remodelación, tipo de suelo, permisos tramitados o pendientes y acabados sin decidir. Una calculadora que da un precio final por metro cuadrado sin que nadie pise el sitio obliga a corregir hacia arriba después, y esa corrección es la que rompe la confianza.',
          'Con tres campos —tipo de proyecto (obra nueva, remodelación, ampliación), metraje aproximado y zona— la web puede devolver un rango razonable y separar al que busca información del que está por decidir. El precio cerrado llega cuando alguien del equipo ya vio el sitio en persona.',
          'Decir que <strong>necesitas ver el proyecto para dar un número real</strong> transmite más seriedad que un simulador. Elemento Web aplica la misma lógica: los precios de referencia de una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> están publicados, y el número final de un proyecto a medida se cierra después de entender el alcance.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Certificaciones y permisos: la confianza que no se puede improvisar',
        intro: 'En construcción la confianza son documentos que el cliente puede verificar. Si la web no los muestra, el cliente asume que no los tienes.',
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
          'Un testimonio genérico —"muy profesionales, quedamos encantados"— lo puede inventar cualquiera, y el cliente que evalúa arriesgar su dinero lo sabe. Pesa el testimonio con nombre y apellido, la empresa o el proyecto, y la foto del trabajo terminado al lado.',
          'Pídelo apenas se entrega el proyecto, cuando el cliente está contento, no meses después. Una frase corta, publicada en la ficha de ese proyecto dentro del portafolio, no en una página de "testimonios" sin contexto.',
          'Pesa todavía más cuando el proyecto se vende sobre plano. Un comprador de preventa inmobiliaria que va a pagar durante meses por algo que no puede pisar necesita referencias de proyectos anteriores con nombre y fecha; lo desarrollamos en <a href="/industrias/diseno-web-constructoras-panama/">diseño web para constructoras y promotoras</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo una web NO es la prioridad para una constructora',
        paragraphs: [
          'Si tu constructora vive casi por completo de licitaciones públicas o de contratos corporativos por relación directa o adjudicación, una web de conversión no te va a traer el próximo contrato. Ahí te evalúan <strong>por expediente</strong> —capacidad financiera, fianzas, referencias, experiencia certificada—, no por lo que aparece en Google.',
          'En ese caso no vale la pena invertir en un cotizador optimizado, testimonios en video o una bitácora de avance para un comprador que no llega por ese camino. Basta un sitio institucional sobrio que respalde tu seriedad cuando alguien del comité verifica quién eres.',
          'La web sí decide cuando del otro lado hay alguien que elige sin pliego de licitación: el dueño de una casa que quiere remodelar, un desarrollador mediano que vende directo al público, una empresa que necesita ampliar su local. Ese cliente compara constructoras en Google o en redes, y ahí portafolio, certificaciones, testimonios y cotización honesta definen a quién escribe.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre la web de una constructora',
        items: [
          { q: '¿Cuánto cuesta la web de una constructora en Panamá?', a: 'Depende de cuántos proyectos actives a la vez. Una constructora con uno o dos proyectos, o que solo necesita mostrar portafolio y trayectoria, suele cubrirse con una Web empresarial (desde $1,250, de hasta 6 páginas). Si maneja varios desarrollos con ficha propia por proyecto, bitácora de avance y financiamiento, el proyecto crece hacia un corporativo a medida (desde $2,900). La infraestructura se cotiza aparte, desde $225 al año, y el mantenimiento desde $99 al mes. Precios en USD, sin el 7% de ITBMS.' },
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
