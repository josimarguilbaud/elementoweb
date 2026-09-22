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
      'Antes de escribirte, la paciente típica ya hizo su propia investigación: comparó fotos de antes y después en dos o tres clínicas, buscó el nombre del médico y decidió en privado si vale la pena preguntar. Tu web no compite por ser la más vistosa. Compite por ser la que le quita el miedo primero y le da un motivo concreto para escribir hoy, no "después lo pienso".',
      'Diseñar la web de una clínica estética tiene reglas que no aplican igual a un restaurante o una ferretería: hay consentimiento del paciente de por medio, hay pudor en la consulta y hay un precio que casi nadie se atreve a preguntar en persona. En esta guía repasamos qué de verdad mueve la aguja en este rubro —la galería, las reservas, el precio y la discreción— y también cuándo conviene esperar antes de invertir en una web grande.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La galería de antes y después vende más que cualquier texto, pero el consentimiento no es un detalle',
        paragraphs: [
          'En estética nadie se convence leyendo una descripción del tratamiento. Se convence viendo el resultado en una piel, un cuerpo o un rostro parecido al suyo. Por eso la galería de antes y después es, con diferencia, la pieza que más empuja a un paciente indeciso a pedir una valoración: es la única prueba que responde de verdad a la pregunta que lo trajo hasta tu web, que es "¿esto me va a servir a mí?".',
          'Pero esa misma galería es información sensible sobre el cuerpo de otra persona, y ahí la conversación deja de ser solo de diseño. Publicar el caso de un paciente sin su autorización específica para internet no es un descuido menor: primero es una falta ética hacia alguien que confió su rostro o su cuerpo a tu clínica, y después es un problema legal si esa persona reclama. El consentimiento del tratamiento y el consentimiento para publicar esas fotos en tu web o tus redes son dos documentos distintos, y el segundo no es opcional ni negociable por bien que haya quedado el resultado.',
          'En la práctica, eso significa tener el permiso por escrito antes de subir la foto, no después; poder retirar un caso si el paciente cambia de opinión más adelante; y no depender de fotos de banco de imágenes disfrazadas de casos propios, porque un paciente de estética reconoce esa treta más rápido que en cualquier otro rubro. Ya entramos en el detalle de cómo estructurar esa prueba visual, tratamiento por tratamiento, en nuestra guía de <a href="/industrias/diseno-web-clinicas-esteticas-panama/">diseño web para clínicas estéticas</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué debe incluir sí o sí la web de una clínica estética',
        intro: 'Antes de pensar en colores o tipografía, revisa que tu web tenga esto. Si te faltan más de dos, hay consultas que ya estaban decididas y que se te están yendo con la competencia.',
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
          'Pedir una cita de estética por teléfono tiene una fricción que en otros rubros no existe: hay que decir en voz alta, a una recepcionista que no conoces, qué te quieres hacer. Para bastante gente esa sola llamada alcanza para posponerlo otra semana más, sobre todo si decidió preguntar a las diez de la noche, que es cuando muchas personas por fin se animan a resolver algo que llevaban meses pensando.',
          'Un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas y citas online</a> le quita esa fricción de encima: el paciente ve la disponibilidad real, elige el horario que le acomoda y confirma sin hablar con nadie hasta el día de la cita. Los recordatorios automáticos, de paso, atacan el otro problema típico de la agenda de una clínica: las ausencias de último momento, que en un cupo de valoración cuestan un tiempo del médico que no se recupera.',
          'Esto no reemplaza al WhatsApp, lo complementa. Hay pacientes que solo quieren elegir un horario y seguir con su día, y hay quien primero necesita resolver una duda íntima antes de comprometerse con una fecha. Tu web tiene que ofrecer las dos puertas de entrada, no obligar a todos a pasar por la misma.',
        ],
      },
      {
        type: 'prose',
        h2: 'Discreción: aquí un WhatsApp privado pesa más que en otros rubros',
        paragraphs: [
          'Mucha gente busca un tratamiento estético sin querer que se note, ni frente a su familia, ni frente a su pareja, ni frente a nadie que use el mismo teléfono. Eso cambia decisiones de diseño que en otros negocios son puramente estéticas. Un chat emergente que salta a los tres segundos anunciando el nombre completo de la clínica y una promoción puede ser justo la razón por la que alguien cierra la pestaña en lugar de escribir.',
          'El mensaje precargado del botón de WhatsApp también importa más de lo que parece: ese texto queda escrito en el chat de quien te escribe, visible si alguien más toma su teléfono ese día. Un "Hola, quisiera más información" abre la conversación igual de bien que un "Hola, quiero cotizar botox" y no expone nada por adelantado. El detalle se conversa ya adentro, en privado.',
          'La discreción también debería pensarse en la pauta, si la usas. Un anuncio de remarketing que le repite a alguien, en la pantalla de una tablet o un teléfono compartido en casa, el tratamiento exacto que estuvo mirando, genera el efecto contrario al que buscas. Vale la pena conversarlo con quien maneje tus campañas de <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a>, para decidir juntos qué tan explícitos son los creativos que le vuelven a aparecer a quien visitó tu web.',
        ],
      },
      {
        type: 'statement',
        text: 'Mostrar resultados reales no es opcional para vender.',
        strong: 'Pedirle permiso al paciente para mostrarlos, tampoco.',
      },
      {
        type: 'prose',
        h2: 'Precios orientativos vs. ocultar todo: qué genera más consultas reales',
        paragraphs: [
          'Es tentador no publicar ni un número: "cada caso es distinto", "mejor que pregunten", "no quiero que me comparen solo por precio". El problema es que ocultar el precio por completo no protege tu margen: llena tu WhatsApp de mensajes de gente que solo quiere saber si le alcanza, mientras tu equipo cotiza todo el día a curiosos que nunca tuvieron el presupuesto y el paciente que sí lo tenía se cansó de esperar respuesta y escribió a la clínica de al lado.',
          'Lo que funciona, y lo vemos una y otra vez, es publicar un rango o un "desde" por tratamiento junto con el precio de la primera valoración. Eso filtra de entrada a quien no estaba ni cerca de tu presupuesto, le da seguridad a quien sí puede pagarlo, y deja el número exacto donde tiene que quedar: en la consulta, después de evaluar el caso real de esa persona. No es publicar una lista de precios cerrada; es dejar de fingir que el dinero no es parte de la decisión.',
          'Es, de hecho, el mismo principio con el que trabajamos nosotros: no cobramos igual a todos, pero publicamos el piso. El formato que mejor le sirve a una clínica —con página por tratamiento, galería y reserva— es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $950 (más ITBMS del 7%); un proyecto a medida más grande, desde $2,900. El número exacto sale después de conversar el alcance, pero nadie tiene que escribirnos a ciegas para saber si está en el rango.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir todavía en una web grande',
        paragraphs: [
          'Si tu clínica acaba de abrir y todavía no tienes tus propios casos —con consentimiento y bien fotografiados— para armar una galería real, no tiene sentido salir a publicar una web grande con una promesa que no puedes cumplir todavía. Rellenarla con fotos de banco de imágenes disfrazadas de resultados propios es, en este rubro más que en ningún otro, la forma más rápida de que un paciente informado desconfíe y se vaya.',
          'En ese momento conviene algo más simple y honesto: una web centrada en el médico, su formación, el equipo con el que trabaja y cómo agendar una primera valoración, sin prometer una galería que todavía no existe. La galería de antes y después se suma después, en cuanto haya tres o cuatro casos propios bien documentados y con permiso para publicarse. Es mejor crecer la web en ese orden que mentir desde el día uno.',
          'Tampoco conviene si tu agenda ya está llena varias semanas por delante: traer más consultas a una agenda saturada solo produce pacientes frustrados esperando turno. Y si lo que necesitas es llenar la agenda este mismo mes, la respuesta no es una web más grande, es <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento</a> bien enfocado o pauta bien dirigida, dos cosas que toman su tiempo y que nadie te puede prometer con el primer lugar garantizado en Google.',
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
          { q: '¿Cuánto cuesta la web de una clínica estética en Panamá?', a: 'El formato que mejor funciona, con página por tratamiento, galería y reserva de valoración, es una web corporativa desde $950 (más ITBMS del 7%). Si necesitas integraciones propias o un catálogo grande de tratamientos, se cotiza como proyecto a medida desde $2,900. Siempre con precio cerrado por escrito antes de empezar.' },
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
