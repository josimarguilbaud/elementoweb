/* BLOG — Lote 9: guía long-form sobre diseño web para clínicas y centros de
   salud en Panamá. Mismo formato que blog-7: PageData con parent { slug: 'blog' },
   contenido extenso y enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog9: PageData[] = [
  {
    slug: 'blog/diseno-web-para-clinicas-salud-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para clínicas y centros de salud en Panamá',
    description: 'Qué debe tener la web de una clínica en Panamá: citas online, especialidades claras, confianza real y cuándo no conviene invertir aún.',
    h1: 'Diseño web para clínicas y centros de salud: qué de verdad importa',
    breadcrumb: 'Diseño web para clínicas',
    category: 'Diseño web',
    date: '2026-09-15',
    heroImage: {
      src: '/images/blog/diseno-web-para-clinicas-salud-panama.jpg',
      alt: 'Recepción y sala de espera de una clínica moderna, con sillas cómodas y luz natural',
    },
    lead: [
      'El diseño web para clínicas en Panamá funciona cuando el paciente confirma en segundos especialidad, médico, seguros aceptados, horario y cómo agendar. Lo esencial: una página por especialidad, fotos reales, idoneidad visible, citas online y un formulario que nunca pide síntomas. En Elemento Web, una Web empresarial de hasta 6 páginas parte de $1,250 más ITBMS.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué la confianza se gana distinto cuando se trata de tu salud',
        paragraphs: [
          'Alguien busca "pediatra en San Francisco" o "dermatólogo para acné en Panamá" desde el celular, a las nueve de la noche, y entra a tu web sin haber hablado nunca contigo. Elegir quién va a atender a un hijo o a una madre no tolera el margen de error de elegir un restaurante: el paciente compara dos o tres clínicas y decide por las señales de seriedad que percibe antes de la primera llamada.',
          'Esas señales se rompen rápido: "servicios médicos integrales" sin decir cuáles, fotos de stock con un actor en bata que aparece en veinte webs de otros países, o ningún nombre de médico visible. Lo que sí genera confianza no es caro: fotos reales del consultorio y del equipo, el nombre y la idoneidad de cada médico, contenido serio por especialidad y respuestas a las dudas previas, como qué seguro aceptas o si atiendes los sábados.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de una clínica en Panamá necesita sí o sí',
        items: [
          'Agendamiento de citas online, además del teléfono',
          'Una página propia por especialidad, no una lista genérica de "servicios médicos"',
          'Fotos reales de tu consultorio y tu equipo, nunca banco de imágenes',
          'Nombre, especialidad e idoneidad de cada médico, visibles y verificables',
          'Seguros aceptados y formas de pago, claros desde la página de inicio',
          'Horario real y actualizado, incluidos sábados o urgencias si aplica',
          'Ubicación con punto de referencia y dónde estacionar, no solo un pin en el mapa',
          'Un canal de contacto que pida lo mínimo para coordinar, nunca síntomas ni historial',
        ],
      },
      {
        type: 'prose',
        h2: 'Diseño web para clínicas: una página por especialidad',
        paragraphs: [
          'Nadie busca en Google "clínica". Busca "pediatra en San Francisco", "cardiólogo cerca de Vía España" o "ginecólogo que atienda los sábados". Cada especialidad tiene su propio paciente, su urgencia y su momento de búsqueda; es la lógica de nuestra <a href="/industrias/diseno-web-clinicas-salud-panama/">página de diseño web para clínicas y salud</a>. Una cuadrícula con los ocho médicos de la clínica intenta responder a todos y no aparece para ninguna búsqueda concreta.',
          'Una página por especialidad explica qué se atiende, qué señales llevan a consultar, cómo es la primera cita y con qué seguros se trabaja, y de paso ahorra a recepción buena parte de las llamadas de "¿ustedes atienden esto?". Nadie puede prometer el primer lugar en una búsqueda competida, pero sin esa página propia la clínica ni siquiera compite.',
        ],
      },
      {
        type: 'prose',
        h2: '¿El agendamiento de citas online reemplaza las llamadas?',
        paragraphs: [
          'Las reduce, no las reemplaza. Tu recepción atiende el mostrador y el teléfono a la vez, y cada llamada sin contestar es un paciente que prueba con otro número. Un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas y citas online</a> le da disponibilidad real a cualquier hora y se lleva el volumen repetitivo; el número de la clínica sigue visible para quien prefiere llamar: alguien mayor, una urgencia, una duda antes de decidir.',
          'Lo que sí cambia son las ausencias: un recordatorio automático el día antes de la cita reduce los huecos en la agenda de las especialidades de alta demanda. Si la clínica ya usa un sistema de agenda propio, primero se evalúa si conviene integrarlo en vez de duplicarlo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Privacidad del paciente: lo que el formulario de una clínica nunca debe pedir',
        paragraphs: [
          'La web de una clínica recoge, sin proponérselo, lo que la Ley 81 de 2019 de Protección de Datos Personales considera datos sensibles: motivo de consulta, síntomas, a veces resultados. La regla práctica: el formulario público sirve para coordinar, no para consultar. Pide nombre, teléfono, especialidad de interés y preferencia de horario; nunca un campo abierto para síntomas, resultados de laboratorio o historial.',
          'Lo mismo aplica al WhatsApp de la clínica. Si vive en el celular personal de alguien de recepción, el día que esa persona se va, las conversaciones de los pacientes se van con ella. Un número de empresa con acceso controlado resuelve el problema operativo y el de privacidad a la vez, y es una de las correcciones más baratas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo responder las dudas del paciente sin saturar a recepción',
        paragraphs: [
          'Antes de escribir, el paciente ya se preguntó: ¿aceptan mi seguro?, ¿a qué hora abren?, ¿dónde queda?, ¿necesito cita? Si la web no lo responde a simple vista, llama a la siguiente clínica. Muchos ni llegan a la web: te encuentran en el mapa al buscar "cerca de mí", terreno de tu <a href="/crecimiento/seo-local-google-maps-panama/">ficha de Google y el SEO local</a>, y una ficha con el horario viejo manda pacientes a la clínica de al lado.',
          'Una sección de preguntas frecuentes resuelve parte; para quien pregunta un domingo a las nueve de la noche, un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA</a> responde con la información real de la clínica —seguros, horario, ubicación, qué llevar a la primera cita— y deriva a una persona cuando la pregunta es clínica. Ese asistente debe tener prohibido dar diagnósticos o interpretar síntomas.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de una clínica?',
        paragraphs: [
          'Si acabas de abrir un consultorio sin flujo constante de pacientes, un sistema de citas completo resuelve un problema que aún no tienes, y una agenda vacía no inspira confianza. Rinde más una página clara con tu especialidad y un WhatsApp visible, y sumar el agendamiento cuando haya volumen.',
          'Si tu clínica opera dentro de un hospital o una red con su propio sistema de citas, una agenda paralela confunde al paciente sobre dónde reservar. La web debe mostrar tu perfil, tu especialidad y un enlace al sistema oficial.',
          'Una web completa con agenda integrada vale la inversión cuando hay especialidades que posicionar y pacientes privados que comparan antes de llamar. En Panamá parte desde $1,250 para un sitio de hasta 6 páginas y sube a proyectos a medida desde $2,900 con varias sedes o médicos; a eso se suma infraestructura desde $350 al año y <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento</a> desde $99 al mes. Ningún precio incluye ITBMS (7%).',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre la web de tu clínica',
        items: [
          { q: '¿Necesito un sistema de citas propio si mi clínica ya usa el de un hospital o red mayor?', a: 'No siempre. Si la institución de la que dependes ya tiene su propio sistema de agenda, duplicar uno en tu página confunde al paciente sobre dónde reservar de verdad. En ese caso, tu web cumple mejor su función mostrando tu perfil, tu especialidad y un enlace claro al sistema oficial, en vez de montar una agenda paralela que compite con la que ya funciona.' },
          { q: '¿Qué hacemos si un paciente escribe sus síntomas en el formulario de contacto?', a: 'El diseño del formulario debería evitar que eso pase desde el inicio: pocos campos, ninguno que invite a describir un síntoma o adjuntar un resultado. Si igual ocurre, esa información debe llegar a un buzón de la clínica con acceso controlado, nunca al correo personal de quien esté de turno esa semana, y tratarse como el dato sensible que es bajo la Ley 81 de 2019.' },
          { q: '¿Debemos publicar los precios de la consulta?', a: 'Al menos el de la consulta inicial, y la lista de seguros que aceptas. Es de las primeras cosas que busca el paciente panameño antes de escribir, y cuando no la encuentra, asume lo peor y sigue buscando en vez de preguntar. Los tratamientos que varían por caso pueden mostrarse con un "desde".' },
          { q: '¿Sirve para un consultorio de un solo médico recién abierto?', a: 'Sirve, pero con otra prioridad. Al principio pesa más un perfil claro, la especialidad bien explicada y un WhatsApp visible que un sistema de citas completo, que con poco volumen de pacientes se ve más vacío que profesional. El agendamiento online se suma cuando ya hay flujo constante que lo justifique.' },
          { q: '¿Un chatbot con IA puede responder preguntas médicas de los pacientes?', a: 'No debería, y el nuestro está configurado para no hacerlo. Responde con información real de la clínica —seguros, horario, ubicación, qué llevar a la primera cita— y deriva a una persona en cuanto la pregunta se vuelve clínica. Un asistente que opina sobre síntomas genera más riesgo que el que resuelve al no contestar.' },
          { q: '¿Cuánto cuesta la web de una clínica en Panamá?', a: 'Un sitio de hasta 6 páginas con especialidades y formulario de contacto parte desde $1,250 (Web empresarial); si además integra agenda propia, varios médicos o sedes, se vuelve un proyecto a medida desde $2,900. A eso se suma infraestructura (dominio, hosting y SSL) desde $350 al año y mantenimiento desde $99 al mes. Ningún precio incluye ITBMS (7%).' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Diseño web para clínicas y salud' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas online' },
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbot con IA' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },

          { slug: 'industrias/diseno-web-dentistas-odontologia-panama', label: 'Diseño web para dentistas' },
          { slug: 'industrias/diseno-web-clinicas-esteticas-panama', label: 'Diseño web para clínicas estéticas' },
        ],
      },
    ],
    cta: {
      h2: 'Cotiza la web de tu clínica o consultorio',
      wa: 'Hola, quiero cotizar la web de mi clínica o consultorio. ¿Me orientan?',
    },
  },
];
