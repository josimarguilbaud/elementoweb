/* BLOG — Diseño web para dentistas y clínicas odontológicas en Panamá. */
import type { PageData } from '../types';

export const blog15: PageData[] = [
  {
    slug: 'blog/diseno-web-para-dentistas-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para dentistas en Panamá: qué debe incluir',
    description: 'Diseño web para dentistas en Panamá: citas online, una página por especialidad, fotos que no espantan, seguros visibles y cuándo NO conviene hacer marketing.',
    h1: 'Diseño web para dentistas en Panamá: qué necesita la web de tu consultorio',
    breadcrumb: 'Diseño web para dentistas',
    category: 'Diseño web',
    date: '2026-09-21',
    heroImage: {
      src: '/images/blog/diseno-web-para-dentistas-panama.jpg',
      alt: 'Consultorio dental moderno y luminoso con sillón dental y colores claros',
    },
    lead: [
      'Nadie llega feliz a una cita con el dentista. Llega con una duda, un dolor o el recuerdo de una mala experiencia, y busca en el celular quién se la va a resolver sin sorpresas. Esa búsqueda —antes de la llamada, antes de la sala de espera, antes de sentarse en la silla— es la primera cita real que tiene con tu consultorio. Y la hace en tu web.',
      'Si esa web se ve fría, muestra instrumentos en primer plano o no deja agendar sin llamar en horario de oficina, el paciente sigue buscando. En esta guía repasamos qué debe tener sí o sí la web de un consultorio dental en Panamá: reservas online, una página por especialidad, fotos que calman en lugar de asustar, los seguros bien visibles — y también cuándo, honestamente, invertir en esto todavía no te conviene.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La ansiedad del paciente empieza en la web, no en la silla',
        paragraphs: [
          'A la mayoría de la gente no le entusiasma ir al dentista. Es de las pocas citas que se posponen por meses, incluso con dolor, porque el miedo pesa más que la urgencia. Y ese miedo no empieza en la sala de espera: empieza en el celular, buscando "dentista cerca de mí" a las diez de la noche, decidiendo en los primeros segundos si ese consultorio se ve como un lugar seguro o como uno más para evitar.',
          'Ahí es donde muchas webs dentales se disparan en el pie sin darse cuenta. Fotos de banco con pinzas, taladros y bocas abiertas en primer plano; plantillas frías con textos genéricos sobre "excelencia" y "tecnología de punta" que podrían ser de cualquier consultorio del mundo; ni una foto del equipo, ni un precio, ni una cara conocida. Todo eso confirma el miedo en lugar de calmarlo.',
          'El trabajo de la web no es impresionar con tecnicismos: es bajar la guardia antes de que el paciente descuelgue el teléfono. Un espacio que se ve limpio y luminoso, un equipo que se muestra con nombre y cara, información clara sobre lo que cuesta y lo que cubre el seguro —eso convierte más que cualquier lista de servicios con palabras difíciles. Es la misma lógica que aplica a cualquier <a href="/industrias/diseno-web-clinicas-salud-panama/">clínica de salud</a>, solo que en dental el miedo pesa un poco más que en la mayoría.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que tiene que tener sí o sí la web de un consultorio dental',
        intro: 'Si tu web cumple con todo esto, va por buen camino. Si falla en varios puntos, estás perdiendo pacientes que ni te enteras que existieron.',
        items: [
          'Sistema de reservas de citas online, con horarios reales y confirmación automática',
          'Una página propia por especialidad: ortodoncia, implantes, odontología general, estética dental',
          'Fotos reales del consultorio y del equipo, nunca un banco de imágenes con instrumentos en primer plano',
          'Los seguros dentales que aceptas, visibles sin tener que llamar a preguntar',
          'Un precio o al menos un rango orientativo, aunque sea "desde"',
          'Botón de WhatsApp visible para la urgencia o la duda antes de agendar',
          'El nombre y la idoneidad del odontólogo, no solo el nombre del consultorio',
          'Carga rápida y buena lectura en el celular, que es desde donde busca casi todo paciente',
        ],
      },
      {
        type: 'prose',
        h2: 'Reservas online: menos llamadas, más citas confirmadas',
        paragraphs: [
          'En un consultorio dental normal, quien contesta el teléfono suele ser la misma persona que asiste al odontólogo. Mientras atiende a un paciente en la silla, el teléfono suena, nadie puede tomarlo, y quien llamaba —con una duda o ya decidido a agendar— cuelga y prueba con el siguiente resultado de Google. Esa llamada perdida casi nunca vuelve a intentarlo.',
          'Un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas y citas online</a> elimina esa fila invisible. El paciente ve los horarios que de verdad están libres y confirma solo, sin hablar con nadie, a cualquier hora —incluida la noche, que es cuando mucha gente por fin junta el valor para resolver ese diente que viene posponiendo. Nadie decide ir al dentista en horario de oficina; decide cuando puede, y la web tiene que estar lista para recibir esa decisión en el momento en que ocurre.',
          'Los recordatorios automáticos atacan el otro costo silencioso del rubro: las ausencias. Cada cita que se cae sin aviso es un espacio de agenda que ya no se recupera ese día. Y para el paciente ansioso, agendar en línea tiene un beneficio extra: no tiene que explicarle a una recepcionista por teléfono qué le duele o por qué no ha ido en tres años. Menos fricción para agendar es, sin rodeos, más pacientes sentados en la silla.',
        ],
      },
      {
        type: 'statement',
        text: 'Quien busca "ortodoncia invisible" no es la misma persona que busca "dolor de muela urgente".',
        strong: 'Son búsquedas de pacientes distintos, con presupuestos distintos, y una sola página de "servicios" no le habla a ninguno de los dos.',
      },
      {
        type: 'prose',
        h2: 'Cada especialidad es una búsqueda distinta en Google',
        paragraphs: [
          'La mayoría de las webs dentales resuelven sus especialidades con una lista: ortodoncia, implantes, odontología general, estética dental, una debajo de la otra en la misma página. Es lo más rápido de armar, y es el error que más pacientes cuesta, porque cada una de esas palabras es una búsqueda distinta, hecha por una persona distinta, con una urgencia y un presupuesto distintos.',
          'Quien busca "ortodoncia" suele ser más joven y quiere saber cuánto le va a costar al mes, no de una vez. Quien busca "implantes dentales" ya perdió una pieza, tiene más dudas sobre el dolor y el número de visitas, y decide con más calma. Quien busca "odontología general" simplemente quiere un consultorio de confianza para toda la familia, cerca de casa. Y quien busca "estética dental" decide sobre todo con los ojos, viendo resultados reales. Meterlos a los cuatro en la misma página es hablarle a nadie en particular. Si tu consultorio ya tiene esto claro, vale la pena ver cómo lo estructuramos a fondo en nuestra <a href="/industrias/diseno-web-dentistas-odontologia-panama/">página sobre diseño web para dentistas y odontología</a>.',
          'A eso se le suma que casi nadie busca "el mejor dentista de Panamá": busca "dentista cerca de mí" o el nombre de su barrio, porque un tratamiento dental no es una visita, son varias, y nadie cruza la ciudad seis veces si tiene algo decente a diez minutos. Ahí entra el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y una buena ficha de Google Maps</a>, junto con el <a href="/crecimiento/seo-posicionamiento-web-panama/">trabajo de SEO</a> de fondo en cada página de especialidad. Nadie te puede prometer el primer lugar —quien lo garantiza no está siendo honesto— pero sí se puede construir la base real para competir por esas búsquedas.',
        ],
      },
      {
        type: 'cards',
        h2: 'Las primeras preguntas de un paciente nuevo',
        intro: 'Antes de escribirte, casi todo paciente nuevo se hace las mismas tres preguntas en silencio. Si tu web no las contesta, las resuelve en la pestaña de al lado.',
        items: [
          { h3: '¿Aceptan mi seguro?', text: 'Es de las primeras cosas que busca cualquier paciente nuevo. Si tu web no lo dice en algún lugar visible, asume que no y sigue buscando.' },
          { h3: '¿Cuánto cuesta, más o menos?', text: 'No hace falta una lista de precios exacta. Un rango o un "desde" filtra al que nunca iba a agendar y da seguridad al que sí está decidido.' },
          { h3: '¿Este lugar se ve confiable?', text: 'Lo decide en segundos, con fotos reales del consultorio y del equipo, no con una plantilla genérica que podría pertenecer a cualquier clínica del mundo.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir en marketing para tu consultorio',
        paragraphs: [
          'No todo consultorio necesita más pacientes ahora mismo, y decirlo no es común pero es honesto. Si tu agenda ya está llena varias semanas hacia adelante, si no tienes otro odontólogo, otra silla o más horas que ofrecer, invertir en una web nueva o en marketing para atraer más pacientes no te conviene todavía —y lo decimos aunque signifique una venta menos para nosotros.',
          'El problema no es solo que gastes de más. Una web que funciona bien genera consultas, y una consulta que nadie contesta en dos o tres días —porque la agenda real ya no tiene espacio— no se queda callada: se convierte en una reseña mala en Google, la primera cosa que ve el próximo paciente que sí tenías posibilidad de atender. El marketing que no puedes cumplir no atrae pacientes, atrae frustración con tu nombre puesto.',
          'Lo que sí conviene en ese caso es resolver primero la capacidad: contratar a otro odontólogo, sumar horario, abrir una silla más, o al menos dejar clarísimo en la web actual los tiempos de espera reales para no generar expectativas que no vas a cumplir. Cuando ya tengas dónde poner a los pacientes nuevos, ahí sí una web pensada para captar rinde lo que promete.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para dentistas',
        items: [
          { q: '¿Cuánto cuesta una web para un consultorio dental en Panamá?', a: 'Depende de cuántas especialidades necesites mostrar y de si son una o varias sedes. Una Página PYME desde $950 (8 a 12 páginas) suele cubrir a un consultorio con varias especialidades y cita online; un proyecto con múltiples sedes o agenda por odontólogo pasa a una corporativa a medida desde $2,900. El mantenimiento arranca en $59 al mes. Precios en USD, no incluyen ITBMS (7%), y siempre se cierran por escrito antes de empezar.' },
          { q: '¿La reserva de citas se conecta con la agenda que ya uso en el consultorio?', a: 'Si tu sistema de agenda actual permite integración, la conectamos para evitar dobles reservas. Si no, montamos un sistema de reservas propio con recordatorios automáticos. Cuál conviene se define en el diagnóstico, no se asume de entrada.' },
          { q: '¿Necesito una página por cada especialidad o basta con una de "servicios"?', a: 'Al menos para las que más pacientes te traen. Ortodoncia, implantes, odontología general y estética dental son búsquedas distintas hechas por pacientes distintos, y una sola página genérica no compite en ninguna de ellas. Las especialidades secundarias sí pueden agruparse en una página de servicios.' },
          { q: '¿Qué fotos debo usar si no quiero mostrar instrumentos que asustan?', a: 'Fotos reales de tu consultorio limpio y luminoso, de la sala de espera y del equipo, no bancos de imágenes con pinzas o taladros en primer plano. Un paciente ansioso decide en segundos si el lugar se ve tranquilo o intimidante, y esa decisión la toma antes de escribirte.' },
          { q: '¿Cuánto tarda en estar lista la web?', a: 'Una landing enfocada en una sola especialidad sale en 5 días hábiles. Un sitio completo con varias especialidades y cita online toma más, porque hay que preparar fotos, textos por tratamiento y la configuración de reservas; el plazo exacto se cierra junto con la cotización, por escrito.' },
          { q: '¿Con una web nueva voy a salir primero en Google?', a: 'Nadie puede prometerte el primer lugar, y quien lo garantiza no está siendo honesto contigo. Lo que sí hace una web bien construida es darte una base real para posicionar: una página por especialidad, velocidad y SEO técnico bien hecho. A partir de ahí, el tiempo y el contenido hacen su parte.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-dentistas-odontologia-panama', label: 'Diseño web para dentistas y odontología' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Sistemas de reservas y citas online' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Diseño web para clínicas y salud' },

          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
          { slug: 'industrias/diseno-web-clinicas-esteticas-panama', label: 'Diseño web para clínicas estéticas' },
        ],
      },
    ],
    cta: {
      h2: 'Que tu consultorio agende pacientes solo',
      wa: 'Hola, quiero cotizar la web de mi consultorio dental. Vi el artículo sobre diseño web para dentistas.',
    },
  },
];
