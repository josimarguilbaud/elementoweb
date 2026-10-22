/* BLOG — nuevo artículo: diseño web para clínicas estéticas en Panamá.
   PageData con parent { slug: 'blog' }; el listado /blog la recoge por fecha y categoría.
   Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog14: PageData[] = [
  {
    slug: 'blog/diseno-web-para-clinicas-esteticas-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Web para clínicas estéticas en Panamá: qué convierte',
    description: 'Qué debe tener la web de una clínica estética en Panamá: antes y después con consentimiento, reservas online, precios orientativos y un WhatsApp discreto.',
    h1: 'Diseño web para clínicas estéticas en Panamá: lo que de verdad convierte',
    breadcrumb: 'Clínicas estéticas',
    category: 'Diseño web',
    date: '2026-09-20',
    heroImage: {
      src: '/images/blog/diseno-web-para-clinicas-esteticas-panama.jpg',
      alt: 'Sala de tratamiento de una clínica estética moderna, minimalista y de líneas limpias',
    },
    lead: [
      'El diseño web para clínicas estéticas en Panamá convierte cuando le quita el miedo a la paciente antes de la primera consulta: galería de antes y después con consentimiento escrito para internet, una página por tratamiento, reserva de valoración en línea, un rango o "desde" por tratamiento y un WhatsApp discreto. En Elemento Web, ese formato arranca desde $1,250 más ITBMS.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La galería de antes y después vende más que cualquier texto, pero el consentimiento no es un detalle',
        paragraphs: [
          'Antes de escribir, la paciente típica compara fotos de antes y después en dos o tres clínicas y busca el nombre del médico. La galería es la pieza que más empuja a un paciente indeciso a pedir una valoración, porque es la única prueba que responde "¿esto me va a servir a mí?".',
          'Esa galería es información sensible sobre el cuerpo de otra persona. Publicar un caso sin autorización específica para internet es una falta ética hacia quien confió su rostro o su cuerpo a la clínica, y un problema legal si esa persona reclama. El consentimiento del tratamiento y el consentimiento para publicar las fotos en la web o en redes son dos documentos distintos, y el segundo no es opcional.',
          'En la práctica: permiso por escrito antes de subir la foto, posibilidad de retirar un caso si el paciente cambia de opinión, y nada de fotos de banco disfrazadas de casos propios, porque un paciente de estética reconoce esa treta rápido. Cómo estructurar esa prueba visual tratamiento por tratamiento lo detallamos en la guía de <a href="/industrias/diseno-web-clinicas-esteticas-panama/">diseño web para clínicas estéticas</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe incluir el diseño web de una clínica estética?',
        intro: 'Si a la web de tu clínica le faltan más de dos de estos ocho puntos, hay consultas ya decididas que se están yendo con la competencia.',
        items: [
          'Galería de antes y después reales, con consentimiento firmado y específico para publicarse en internet',
          'Una página por tratamiento, no una lista de doce servicios en viñetas',
          'Nombre, formación e idoneidad del médico o especialista que aplica cada tratamiento',
          'Reserva de valoración en línea, disponible también fuera de horario de atención',
          'Al menos un rango de precio o un "desde" orientativo por tratamiento',
          'Botón de WhatsApp directo, visible sin tener que llenar un formulario antes',
          'Explicación honesta de la recuperación y los cuidados, no solo la foto del resultado',
          'Certificado de seguridad (SSL) y un diseño cuidado: nadie confía su rostro a una web que se ve descuidada',
        ],
      },
      {
        type: 'prose',
        h2: 'Reservas online: la diferencia entre preguntar y quedarse con la duda',
        paragraphs: [
          'Pedir una cita de estética por teléfono obliga a decir en voz alta, a una recepcionista desconocida, qué te quieres hacer. Esa llamada basta para posponerlo otra semana, sobre todo a las diez de la noche, cuando mucha gente por fin se anima a resolverlo.',
          'Un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas y citas online</a> quita esa fricción: el paciente ve la disponibilidad real, elige horario y confirma sin hablar con nadie. Los recordatorios automáticos reducen las ausencias de último momento, que en un cupo de valoración cuestan tiempo del médico que no se recupera.',
          'La reserva no reemplaza al WhatsApp, lo complementa: unos pacientes solo quieren elegir horario y otros necesitan resolver una duda íntima antes de comprometerse con una fecha. La web de la clínica debe ofrecer las dos puertas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Discreción: aquí un WhatsApp privado pesa más que en otros rubros',
        paragraphs: [
          'Mucha gente busca un tratamiento estético sin que se note frente a su familia, su pareja o quien use el mismo teléfono. Un chat emergente que salta a los tres segundos con el nombre de la clínica y una promoción puede ser la razón por la que alguien cierra la pestaña.',
          'El mensaje precargado del botón de WhatsApp queda escrito en el chat de quien te escribe, visible si alguien más toma su teléfono. Un "Hola, quisiera más información" abre la conversación igual de bien que "Hola, quiero cotizar botox" y no expone nada; el detalle se conversa adentro, en privado.',
          'Lo mismo aplica a la pauta: un anuncio de remarketing que repite el tratamiento exacto en una tablet o un teléfono compartido genera el efecto contrario. Conviene decidir con quien maneje tus campañas de <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a> qué tan explícitos son los creativos que ve quien visitó tu web.',
        ],
      },
      {
        type: 'statement',
        text: 'Mostrar resultados reales no es opcional para vender.',
        strong: 'Pedirle permiso al paciente para mostrarlos, tampoco.',
      },
      {
        type: 'prose',
        h2: '¿Debe una clínica estética publicar sus precios?',
        paragraphs: [
          'Ocultar todo el precio ("cada caso es distinto", "mejor que pregunten") no protege el margen: llena el WhatsApp de gente que solo quiere saber si le alcanza, el equipo cotiza el día entero a curiosos sin presupuesto y el paciente que sí lo tenía se cansa de esperar y escribe a otra clínica.',
          'Funciona publicar un rango o un "desde" por tratamiento junto con el precio de la primera valoración. Eso filtra a quien no está cerca del presupuesto, da seguridad a quien puede pagarlo y deja el número exacto para la consulta, después de evaluar el caso real.',
          'Elemento Web sigue el mismo principio: publica el piso. El formato que mejor sirve a una clínica —página por tratamiento, galería y reserva— es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $1,250 (más ITBMS del 7%); un proyecto a medida más grande, desde $2,900. El número exacto sale después de conversar el alcance.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir todavía en una web grande',
        paragraphs: [
          'Si la clínica acaba de abrir y aún no tiene casos propios con consentimiento y bien fotografiados, una web grande promete una galería que no existe. Rellenarla con fotos de banco disfrazadas de resultados propios es la forma más rápida de que un paciente informado desconfíe.',
          'En esa etapa conviene una web más simple centrada en el médico, su formación, el equipo y cómo agendar la primera valoración. La galería de antes y después se suma cuando haya tres o cuatro casos propios documentados y con permiso para publicarse.',
          'Tampoco conviene con la agenda llena varias semanas por delante: más consultas solo producen pacientes frustrados esperando turno. Y si necesitas llenar la agenda este mes, la respuesta no es una web más grande sino <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento</a> bien enfocado o pauta bien dirigida; ambos toman tiempo, y nadie puede prometer el primer lugar en Google.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Puedo publicar fotos de antes y después de mis pacientes sin problema legal?', a: 'Sí, si tienes su consentimiento por escrito y específico para publicarlas en internet, que es distinto del consentimiento del tratamiento. Te recomendamos que ese texto lo redacte tu asesor legal. Nosotros dejamos la galería armada de forma que puedas retirar un caso en cualquier momento si el paciente cambia de opinión.' },
          { q: '¿Debo publicar los precios de mis tratamientos?', a: 'Al menos un rango o un "desde" por tratamiento, más el precio de la valoración inicial. Ocultarlo todo no protege tu margen: llena tu WhatsApp de gente que solo pregunta precio y nunca agenda, mientras el paciente con presupuesto real se cansa de esperar respuesta.' },
          { q: '¿Cómo hago que el WhatsApp de mi clínica sea discreto?', a: 'Evita que el mensaje precargado del botón nombre el tratamiento exacto: ese texto queda visible en el chat de quien te escribe. Un "Hola, quisiera más información" abre la conversación igual de bien y no expone nada si alguien más ve su teléfono.' },
          { q: '¿Las reservas online reemplazan el WhatsApp?', a: 'No, lo complementan. La reserva sirve a quien ya decidió y solo quiere elegir un horario sin llamar a nadie; el WhatsApp sirve a quien todavía tiene una duda íntima que prefiere resolver antes de agendar. Tu web debería ofrecer las dos puertas.' },
          { q: '¿Cuánto cuesta la web de una clínica estética en Panamá?', a: 'El formato que mejor funciona, con página por tratamiento, galería y reserva de valoración, es una web corporativa desde $1,250 (más ITBMS del 7%). Si necesitas integraciones propias o un catálogo grande de tratamientos, se cotiza como proyecto a medida desde $2,900. Siempre con precio cerrado por escrito antes de empezar.' },
          { q: '¿Cuándo NO conviene hacer la web grande todavía?', a: 'Cuando tu clínica recién abre y no tienes casos propios, con consentimiento, para mostrar en la galería. En ese caso arranca con algo simple centrado en el médico y su formación, y suma la galería más adelante, con casos reales. Publicar fotos de banco disfrazadas de resultados propios cuesta más confianza de la que ahorra tiempo.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-clinicas-esteticas-panama', label: 'Diseño web para clínicas estéticas' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Sistemas de reservas y citas online' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
        ],
      },
    ],
    cta: {
      h2: 'Hagamos la web de tu clínica estética',
      wa: 'Hola, quiero cotizar la web de mi clínica estética, con galería de antes y después y reserva online.',
    },
  },
];
