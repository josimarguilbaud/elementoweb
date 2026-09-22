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
      'Alguien busca "pediatra en San Francisco" o "dermatólogo para acné en Panamá" desde el celular, a las nueve de la noche, después de que el niño se quejó todo el día. Entra a tu web sin haber hablado nunca contigo, y en los primeros segundos decide algo que no tiene vuelta atrás: si te escribe o si prueba con la siguiente clínica de la lista de Google. Esa decisión no se parece en nada a comprar una camiseta online.',
      'En salud la confianza se construye distinto, y una web genérica de plantilla lo delata de inmediato. En esta guía repasamos lo que de verdad importa en la web de una clínica o consultorio en Panamá: el agendamiento de citas, las páginas por especialidad, las señales de confianza que sí funcionan, qué información del paciente nunca debe pedirse por un formulario abierto, y también cuándo, honestamente, todavía no conviene invertir en todo esto.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué la confianza se gana distinto cuando se trata de tu salud',
        paragraphs: [
          'Elegir un restaurante o una tienda online tolera el error: si sale mal, la próxima vez cambias de opción y ya. Elegir quién va a atender a tu hijo, a tu madre o a ti mismo no tolera el mismo margen. El paciente panameño investiga antes de escribir, compara dos o tres clínicas y decide, casi siempre, por señales de seriedad que percibe antes de la primera llamada.',
          'Esas señales se rompen rápido. Una página que habla de "servicios médicos integrales" sin decir cuáles, fotos de banco de imágenes con un actor en bata blanca que aparece igual en veinte webs de clínicas de otro país, o ningún nombre de médico visible: todo eso el paciente lo lee, aunque no sepa explicarlo, como que esa clínica no se tomó en serio su propia web, y por extensión duda de que se tome en serio su atención.',
          'Lo que sí genera confianza no es caro ni complicado: fotos reales de tu consultorio y de tu equipo, el nombre y la idoneidad de cada médico a la vista, contenido específico por especialidad escrito con seriedad, y respuestas a las preguntas que el paciente ya trae en la cabeza antes de escribir, como qué seguro aceptas o si atiendes los sábados.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de una clínica en Panamá necesita sí o sí',
        intro: 'No hace falta que tu clínica tenga las ocho cosas el primer día, pero si le faltan varias, estás perdiendo pacientes en el camino sin darte cuenta.',
        items: [
          'Agendamiento de citas online, no solo un teléfono que suena ocupado',
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
        h2: 'Cada especialidad es una búsqueda distinta, con su propio paciente',
        paragraphs: [
          'Nadie busca en Google "clínica". Busca "pediatra en San Francisco", "cardiólogo cerca de Vía España" o "ginecólogo que atienda los sábados". Cada especialidad es, para efectos de una web, casi un negocio aparte: tiene su propio paciente, su propia urgencia y su propio momento de búsqueda. Es la misma lógica detrás de nuestra <a href="/industrias/diseno-web-clinicas-salud-panama/">página de diseño web para clínicas y salud</a>, y aplica igual dentro de tu propio sitio.',
          'Meter a los ocho médicos de tu clínica en una sola cuadrícula —foto, nombre, especialidad— es prolijo y no le habla a nadie en particular. La página intenta responder a todo el mundo y termina sin aparecer para ninguna búsqueda concreta, porque Google tampoco sabe a quién mostrarla primero.',
          'Una página por especialidad, en cambio, sí compite: explica qué se atiende, qué señales llevan a consultar, cómo es la primera cita y con qué seguros trabaja. De paso, le ahorra a recepción buena parte de las llamadas de "¿ustedes atienden esto?". Nadie te puede prometer el primer lugar en una búsqueda competida —quien lo haga, miente—, pero sin esa página propia ni siquiera entras a competir.',
        ],
      },
      {
        type: 'prose',
        h2: 'El agendamiento online reduce llamadas; no las reemplaza del todo',
        paragraphs: [
          'Tu recepción atiende el mostrador y el teléfono al mismo tiempo, y el teléfono casi siempre pierde. Cada llamada que nadie contesta es un paciente que prueba con el siguiente número de la lista. Un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas y citas online</a> le da a ese paciente disponibilidad real, a cualquier hora, sin depender de que alguien conteste.',
          'Pero sería deshonesto decir que la agenda online elimina el teléfono. Siempre va a haber pacientes que prefieren llamar: alguien mayor, alguien con una urgencia, alguien con una duda antes de decidir. Un buen sistema de citas no esconde el número de la clínica; convive con él y se lleva el volumen repetitivo, no la excepción que sí necesita una voz humana.',
          'Lo que sí cambia de raíz son las ausencias. Un recordatorio automático el día antes de la cita reduce esos huecos en la agenda que, en una especialidad de alta demanda, cuestan más que cualquier campaña de pauta. Y si tu clínica ya usa un sistema de agenda propio, lo primero que revisamos es si conviene integrarlo o si es mejor no duplicar lo que ya funciona.',
        ],
      },
      {
        type: 'statement',
        text: 'Un sistema de citas online no reemplaza a tu recepcionista.',
        strong: 'Le quita las llamadas repetitivas para que atienda bien las que sí necesitan una persona.',
      },
      {
        type: 'prose',
        h2: 'Privacidad del paciente: lo que tu formulario nunca debe pedir',
        paragraphs: [
          'Una web de clínica recoge, sin proponérselo, lo que la Ley 81 de 2019 de Protección de Datos Personales considera datos sensibles: motivo de consulta, síntomas, a veces resultados. No es lo mismo que un correo pidiendo una cotización, y tratarlo igual es un riesgo real, no solo legal.',
          'La regla práctica es simple: el formulario público sirve para coordinar, no para consultar. Pide nombre, teléfono, la especialidad de interés y una preferencia de horario; nunca invites a describir el síntoma, adjuntar un resultado de laboratorio o contar el historial en un campo de texto abierto.',
          'Lo mismo aplica al WhatsApp de la clínica. Si vive en el celular personal de alguien de recepción, el día que esa persona se va, las conversaciones —con lo que los pacientes escribieron ahí— se van con ella. Un número de empresa con acceso controlado resuelve el problema operativo y el de privacidad al mismo tiempo, y es de las correcciones más baratas y más pasadas por alto que existen.',
        ],
      },
      {
        type: 'prose',
        h2: 'Reducir la fricción del paciente sin ocupar a recepción todo el día',
        paragraphs: [
          'Antes de escribir, el paciente ya se hizo las mismas cuatro o cinco preguntas: ¿aceptan mi seguro?, ¿a qué hora abren?, ¿dónde queda exactamente?, ¿necesito cita o puedo llegar directo? Si tu web no responde eso a simple vista, buena parte simplemente no escribe: llama a la siguiente clínica que sí lo aclaró. Muchos, de hecho, ni siquiera llegan a tu web: te encuentran primero en el mapa cuando buscan "cerca de mí", terreno de tu <a href="/crecimiento/seo-local-google-maps-panama/">ficha de Google y el SEO local</a>, y una ficha con el horario viejo manda pacientes a la clínica de al lado aunque tu sitio esté impecable.',
          'Una sección de preguntas frecuentes bien pensada resuelve parte del problema, pero no todo: alguien va a preguntar un domingo a las nueve de la noche, cuando recepción lleva horas cerrada. Ahí es donde un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a> rinde de verdad: responde con la información real de tu clínica —seguros, horario, ubicación, qué llevar a la primera cita— a cualquier hora, y cuando la pregunta ya es clínica, la deriva a una persona en vez de improvisar.',
          'Esa distinción no es opcional: un asistente de este tipo debe tener prohibido dar diagnósticos o interpretar síntomas, y decirlo con todas sus letras cuando corresponde. Su trabajo es absorber las preguntas repetidas del día para que tu equipo se dedique a las que sí necesitan criterio médico, no a competir con él.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo, honestamente, no conviene invertir en todo esto',
        paragraphs: [
          'Si acabas de abrir un consultorio y todavía no tienes flujo constante de pacientes, montar un sistema de citas online completo desde el primer día resuelve un problema que aún no tienes. Una agenda vacía no inspira confianza; inspira la pregunta contraria. En esa etapa rinde más una página clara, con tu especialidad bien explicada y un WhatsApp visible, y sumar el agendamiento cuando ya haya volumen real que lo justifique.',
          'Lo mismo si tu clínica opera dentro de un hospital o una red que ya tiene su propio sistema de citas. Montar uno paralelo en tu página no suma: confunde al paciente sobre dónde reservar de verdad, y probablemente termina compitiendo con la agenda oficial de la institución. Ahí el trabajo de tu web es otro: mostrar tu perfil, tu especialidad y un enlace claro al sistema que ya existe, no duplicarlo.',
          'En ambos casos el error no es tener menos web: es pagar por una pieza que hoy no resuelve nada. Una web completa, con agenda propia integrada, vale la inversión cuando hay especialidades que posicionar y pacientes privados que de verdad comparan antes de llamar. En Panamá eso parte desde $950 para un sitio de 8 a 12 páginas y sube a proyectos a medida desde $2,900 con varias sedes o médicos; a eso se suma infraestructura desde $350 al año y <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento</a> desde $59 al mes. Ningún precio incluye ITBMS (7%).',
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
          { q: '¿Cuánto cuesta la web de una clínica en Panamá?', a: 'Un sitio de 8 a 12 páginas con especialidades y formulario de contacto parte desde $950 (Página PYME); si además integra agenda propia, varios médicos o sedes, se vuelve un proyecto a medida desde $2,900. A eso se suma infraestructura (dominio, hosting y SSL) desde $350 al año y mantenimiento desde $59 al mes. Ningún precio incluye ITBMS (7%).' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Diseño web para clínicas y salud' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas online' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
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
