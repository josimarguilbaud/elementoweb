/* BLOG · Lote 5 · Categoría "IA y Automatización".
   5 artículos profundos como PageData. Español de Panamá, honesto y práctico. */
import type { PageData } from '../types';

const parent = { slug: 'blog', label: 'Blog' };

export const blog5: PageData[] = [
  /* ============================================================= *
   * 1 · Chatbots con IA para negocios en Panamá
   * ============================================================= */
  {
    slug: 'blog/chatbots-con-ia-para-negocios-en-panama',
    parent,
    title: 'Chatbots con IA para negocios en Panamá: qué son y cómo usarlos',
    description: 'Qué es un chatbot con IA, en qué se diferencia del bot de botones, casos reales en Panamá y cómo integrarlo con tu web y tu WhatsApp sin complicarte.',
    h1: 'Chatbots con IA para negocios en Panamá',
    breadcrumb: 'Chatbots con IA',
    category: 'IA y Automatización',
    date: '2026-07-12',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1591696205602-2f950c417cb9?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Persona conversando por chat en un celular mientras trabaja',
    },
    lead: [
      'La palabra "chatbot" carga años de mala fama: menús rígidos, respuestas robóticas y clientes que terminaban escribiendo "quiero hablar con un humano". Los chatbots con IA cambiaron esa historia.',
      'En esta guía te explicamos qué es realmente un chatbot con inteligencia artificial, para qué sirve en un negocio panameño y cómo se conecta con tu página web y tu WhatsApp. Sin bombo: lo que hace bien, lo que no, y cuándo vale la pena.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es un chatbot con IA (y en qué se diferencia del viejo bot de botones)',
        paragraphs: [
          'El bot tradicional funcionaba con un árbol de opciones: "Presiona 1 para ventas, 2 para soporte". Si tu pregunta no cabía en ese menú, chocabas contra una pared. Era una recepcionista con un guion de tres frases.',
          'Un chatbot con IA usa modelos de lenguaje para <strong>entender lo que la persona escribe en sus propias palabras</strong> y responder de forma natural. No necesita que el cliente adivine la palabra mágica: entiende "¿tienen la talla 42 en negro?" igual que "quería saber si les queda el zapato ese oscuro en mi número".',
          'La diferencia práctica es enorme. El bot de botones frustra; el asistente con IA conversa, resuelve dudas frecuentes y sabe cuándo pasarle la conversación a una persona. No reemplaza a tu equipo: le quita de encima las 30 preguntas repetidas de cada día para que se concentren en las ventas que sí requieren criterio.',
        ],
      },
      {
        type: 'prose',
        h2: 'Casos reales: para qué lo usan los negocios en Panamá',
        paragraphs: [
          'Un chatbot con IA no es un adorno tecnológico; resuelve tareas concretas que hoy te consumen tiempo. Estos son los usos que más se repiten en el mercado local.',
          'Una clínica o consultorio lo usa para responder horarios, ubicación y precios de consulta, y para encaminar la solicitud de cita hacia un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> sin que nadie tenga que estar pegado al teléfono. Un restaurante responde el menú, si hay delivery y hasta qué hora atienden. Una tienda contesta tallas, disponibilidad y formas de pago, y encamina hacia el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">pago con Yappy o tarjeta</a>.',
          'El patrón es siempre el mismo: hay un puñado de preguntas que representan la mayoría de los mensajes que recibes. El asistente se hace cargo de esas, a cualquier hora, y solo escala a un humano lo que de verdad lo necesita.',
        ],
      },
      {
        type: 'prose',
        h2: 'Atención 24/7: el cliente que escribe a las 10 de la noche',
        paragraphs: [
          'En Panamá mucha gente decide y escribe fuera del horario de oficina: en la fila del súper, después de acostar a los niños, un domingo por la tarde. Si tu negocio responde al día siguiente, ese cliente ya le escribió a tres competidores más.',
          'Un chatbot con IA <strong>contesta al instante a cualquier hora</strong>. No para vender a la fuerza, sino para no dejar el mensaje en visto: responde la duda, capta el nombre y el interés, y deja todo ordenado para que tu equipo cierre en la mañana. La primera respuesta rápida es, muchas veces, la que se queda con el cliente.',
          'Lo tratamos en detalle en <a href="/blog/como-atender-clientes-24-7-con-un-asistente-de-ia/">cómo atender a tus clientes 24/7 con un asistente de IA</a>, pero la idea de fondo es simple: responder a tiempo casi siempre pesa más que responder perfecto tres horas después.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué necesita tu negocio para un chatbot que sirva',
        intro: 'Un asistente con IA es tan bueno como la información con la que lo alimentas. Antes de montarlo, conviene tener esto claro.',
        items: [
          'Las preguntas frecuentes reales de tus clientes (revisa tu WhatsApp y anótalas)',
          'Precios, horarios, ubicación y formas de pago actualizados y por escrito',
          'Qué puede resolver solo el bot y en qué punto debe pasar a un humano',
          'A dónde debe encaminar cada intención: reserva, cotización, pago o venta',
          'Un tono de voz que suene a tu negocio, no a robot genérico',
          'Quién revisa las conversaciones para ir mejorando las respuestas',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo se integra con tu web y tu WhatsApp',
        paragraphs: [
          'Un chatbot con IA vive donde está tu cliente. En la web aparece como una burbuja de chat en la esquina; en <strong>WhatsApp</strong> responde en el mismo número por el que la gente ya te escribe. Lo ideal es que sea el mismo asistente en ambos lados, con la misma información y el mismo tono.',
          'Nuestra plataforma <a href="/saas/chatmantis/">ChatMantis</a> es un chatbot con IA omnicanal con CRM de WhatsApp incluido: atiende en la web y en WhatsApp, y guarda cada conversación como un contacto con su historial. Así el bot no solo responde: deja el terreno ordenado para dar seguimiento y vender.',
          'Si quieres los detalles técnicos de la integración en tu sitio, los tienes en <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbots con IA para tu web</a>. Y si aún no tienes una web sólida donde vivir el chat, ahí empieza el trabajo: mira nuestros <a href="/diseno-web-panama/">servicios de diseño web en Panamá</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Un chatbot con IA no reemplaza a tu equipo: le quita de encima lo repetitivo para que se dedique a lo que de verdad cierra ventas.',
        strong: 'La meta no es despedir gente, es no perder al cliente que escribe cuando nadie está.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿El chatbot con IA suena robótico como los de antes?', a: 'No tiene por qué. La diferencia está en cómo se entrena y en el tono que le das. Bien configurado, responde de forma natural y sabe pasar la conversación a una persona cuando el caso lo amerita. Mal configurado, cualquier tecnología suena robótica; por eso importa quién lo monta.' },
          { q: '¿Se puede equivocar y decir algo incorrecto?', a: 'Puede, si lo dejas responder sobre cosas que no sabe. Por eso se le acota a tu información (precios, horarios, servicios) y se le enseña a decir "eso lo confirma un asesor" en vez de inventar. La honestidad también se configura: preferimos un bot que deriva a un humano antes que uno que improvisa datos.' },
          { q: '¿Sirve para mi negocio si es pequeño?', a: 'Sí, y muchas veces es donde más rinde: si eres tú solo o un equipo chico, el asistente responde mientras trabajas, duermes o atiendes a otro cliente. No necesitas ser una empresa grande para dejar de perder mensajes fuera de horario.' },
          { q: '¿Reemplaza a mi personal de atención?', a: 'No. Se encarga de las preguntas repetidas y del primer contacto fuera de horario; tu equipo se queda con las conversaciones que requieren criterio, negociación o trato humano. Es un filtro que libera tiempo, no un sustituto.' },
          { q: '¿Funciona en el WhatsApp que ya uso?', a: 'Funciona sobre WhatsApp Business con la conexión adecuada. Con ChatMantis atiende en tu número y guarda cada chat como contacto en el CRM, así no pierdes el historial ni el seguimiento. Escríbenos por WhatsApp o desde /contacto/ y revisamos tu caso.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbots con IA para tu web' },
          { slug: 'saas/chatmantis', label: 'ChatMantis' },
          { slug: 'blog/como-atender-clientes-24-7-con-un-asistente-de-ia', label: 'Atender clientes 24/7 con IA' },
          { slug: 'blog/inteligencia-artificial-para-pequenas-empresas-en-panama', label: 'IA para pequeñas empresas' },
        ],
      },
    ],
    cta: {
      h2: '¿Le ponemos un chatbot con IA a tu negocio?',
      wa: 'Hola, quiero saber cómo funcionaría un chatbot con IA para mi negocio.',
    },
  },

  /* ============================================================= *
   * 2 · Automatizaciones con n8n para pymes
   * ============================================================= */
  {
    slug: 'blog/automatizaciones-con-n8n-para-pymes',
    parent,
    title: 'Automatizaciones con n8n para pymes: ahorra horas cada semana',
    description: 'Qué es n8n, cómo automatizar tareas repetitivas (lead a CRM a WhatsApp) sin programar y por qué el mayor retorno de las automatizaciones es el tiempo de tu equipo.',
    h1: 'Automatizaciones con n8n para pymes',
    breadcrumb: 'Automatizaciones con n8n',
    category: 'IA y Automatización',
    date: '2026-06-28',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Diagrama de flujo de trabajo conectando distintas aplicaciones',
    },
    lead: [
      'Copiar un dato de un formulario a una hoja de cálculo. Reenviar a mano cada mensaje al vendedor. Mandar el mismo correo de bienvenida uno por uno. Tareas chicas que, sumadas, se comen horas cada semana.',
      'n8n es la herramienta que conecta tus aplicaciones para que esas tareas se hagan solas. En esta guía te explicamos qué es, con ejemplos concretos para una pyme panameña, y por qué su mayor retorno no es la tecnología: es el tiempo que le devuelve a tu equipo.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es n8n y por qué conviene a una pyme',
        paragraphs: [
          'n8n es una plataforma de automatización que conecta las herramientas que ya usas (tu formulario web, tu WhatsApp, tu CRM, tu correo, una hoja de cálculo) y hace que la información fluya entre ellas sin que nadie la copie a mano.',
          'Piénsalo como un empleado invisible que solo sabe hacer una cosa, pero la hace perfecto y sin cansarse: "cada vez que pase A, haz B y luego C". Cuando alguien llena tu formulario, n8n puede <strong>guardarlo en el CRM, avisarte por WhatsApp y enviarle un correo de bienvenida</strong>, todo en segundos y sin intervención humana.',
          'Para una pyme la ventaja es doble: automatizas procesos que antes solo tenían las empresas grandes, y lo haces sin depender de que un empleado se acuerde de cada paso. Los procesos manuales fallan cuando hay mucho trabajo, justo cuando menos te lo puedes permitir.',
        ],
      },
      {
        type: 'prose',
        h2: 'Un ejemplo concreto: del formulario al vendedor en segundos',
        paragraphs: [
          'Tomemos el flujo más común en cualquier negocio que capta clientes por internet. Alguien llena el formulario de contacto de tu web pidiendo una cotización. Sin automatización, ese lead espera en un correo hasta que alguien lo vea, lo copie al sistema y le escriba. Pueden pasar horas.',
          'Con n8n, en el momento en que se envía el formulario ocurre esto: el contacto <strong>entra al CRM con su nombre y su solicitud</strong>, al vendedor le llega un aviso por WhatsApp con los datos, y al cliente le llega un mensaje automático de "recibimos tu solicitud, te contactamos hoy mismo". El lead se atiende en caliente, no frío.',
          'Ese mismo esqueleto (lead → CRM → WhatsApp) se adapta a mil casos: una reserva que agenda y confirma sola, una venta que dispara la factura, un cliente inactivo que recibe un recordatorio. La lógica no cambia, cambian las piezas que conectas.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo se arma una automatización, paso a paso',
        intro: 'No es magia ni es programar de cero. Es identificar una tarea repetitiva y encadenar los pasos que hoy haces a mano.',
        items: [
          { h3: 'Detectamos la tarea repetitiva', text: 'Buscamos ese proceso que alguien hace varias veces al día, siempre igual: copiar datos, reenviar mensajes, avisar a alguien. Ahí está el ahorro.' },
          { h3: 'Definimos el disparador', text: 'Qué evento inicia todo: un formulario enviado, un mensaje de WhatsApp, una venta, una hora del día. Es el "cada vez que pase esto".' },
          { h3: 'Encadenamos las acciones', text: 'Los pasos que deben ocurrir después: guardar en el CRM, notificar por WhatsApp, enviar un correo, actualizar una hoja. En orden y sin saltos.' },
          { h3: 'Probamos con casos reales', text: 'Corremos el flujo con datos de verdad para ver que no falle en los bordes: un campo vacío, un nombre raro, un número mal escrito.' },
          { h3: 'Lo dejamos corriendo y lo vigilamos', text: 'Una vez estable, trabaja solo. Revisamos que siga funcionando y lo ajustamos cuando tu proceso cambia.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Sin código no significa sin criterio',
        paragraphs: [
          'n8n se arma de forma visual: cajas que representan aplicaciones y flechas que representan el flujo. En ese sentido es "sin código", y por eso es accesible para negocios que no tienen un programador de planta.',
          'Pero que sea visual no lo hace trivial. La diferencia entre una automatización que te ahorra horas y una que te crea líos está en el <strong>criterio con que se diseña</strong>: qué pasa si un dato llega vacío, cómo evitar mensajes duplicados, cuándo debe detenerse y avisar en vez de seguir. Ahí es donde el trabajo bien hecho se nota.',
          'Nosotros montamos estos flujos como parte de nuestro servicio de <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones con n8n en Panamá</a>, pensados para que resistan el día a día real de tu negocio y no solo la demo bonita.',
        ],
      },
      {
        type: 'prose',
        h2: 'El verdadero retorno se mide en horas, no en pesos',
        paragraphs: [
          'Cuando la gente pregunta por el retorno de una automatización, espera un número de dinero. El retorno más honesto es otro: el tiempo que le devuelves a tu equipo y los errores que dejas de cometer.',
          'Si copiar leads a mano te toma dos minutos por cada uno y recibes veinte al día, son más de tres horas semanales en una sola tarea aburrida y propensa a errores. Automatizada, ese tiempo se va a vender, a atender mejor o simplemente a no quemar a tu gente en trabajo mecánico. <strong>Y el dato deja de perderse, que es el error más caro de todos.</strong>',
          'La automatización combina muy bien con un <a href="/blog/crm-con-whatsapp-para-vender-mas-en-panama/">CRM con WhatsApp</a>: n8n mete los datos ordenados y el CRM te ayuda a darles seguimiento. Una cosa alimenta a la otra.',
        ],
      },
      {
        type: 'statement',
        text: 'Automatizar no es despedir a tu equipo: es dejar de gastar sus mejores horas en copiar y pegar.',
        strong: 'El proceso manual falla justo cuando más trabajo tienes; el automático no.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Necesito saber programar para usar n8n?', a: 'Para usar los flujos ya montados, no. Para diseñarlos bien sí ayuda tener criterio técnico, sobre todo para prever los casos que fallan. Por eso muchos negocios prefieren que se los armemos y dejarlos corriendo, en vez de pelearse con la curva de aprendizaje.' },
          { q: '¿Qué se puede automatizar realmente?', a: 'Cualquier tarea repetitiva que hoy conecte dos o más herramientas: pasar leads al CRM, avisar por WhatsApp, enviar correos, actualizar hojas, confirmar reservas, generar recordatorios. Si lo haces igual varias veces al día, probablemente se pueda automatizar.' },
          { q: '¿Es seguro dejar que un sistema maneje mis datos?', a: 'Sí, cuando se configura con cuidado: permisos correctos, datos que van solo a donde deben y flujos que se detienen y avisan si algo sale raro. La seguridad depende del diseño, no de la herramienta; por eso importa quién la implementa.' },
          { q: '¿Cuánto tarda en montarse una automatización?', a: 'Un flujo sencillo (formulario a CRM y aviso por WhatsApp) puede quedar listo en poco tiempo. Los procesos con muchas ramas y condiciones toman más, porque hay que probar cada caso. Tras revisar tu proceso te damos un alcance claro.' },
          { q: '¿Esto reemplaza a mi CRM o a mi chatbot?', a: 'No, los conecta. n8n es el pegamento entre tus herramientas: puede llevar lo que capta tu chatbot hacia tu CRM, o disparar mensajes desde tu CRM. Funciona mejor acompañando lo que ya usas que sustituyéndolo. Escríbenos desde /contacto/ y lo vemos.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones con n8n' },
          { slug: 'blog/crm-con-whatsapp-para-vender-mas-en-panama', label: 'CRM con WhatsApp' },
          { slug: 'blog/inteligencia-artificial-para-pequenas-empresas-en-panama', label: 'IA para pequeñas empresas' },
        ],
      },
    ],
    cta: {
      h2: '¿Qué tarea repetitiva quieres dejar de hacer a mano?',
      wa: 'Hola, quiero automatizar una tarea repetitiva de mi negocio con n8n.',
    },
  },

  /* ============================================================= *
   * 3 · Inteligencia artificial para pequeñas empresas en Panamá
   * ============================================================= */
  {
    slug: 'blog/inteligencia-artificial-para-pequenas-empresas-en-panama',
    parent,
    title: 'Inteligencia artificial para pequeñas empresas en Panamá',
    description: 'Usos prácticos y accesibles de la IA para pymes panameñas: atención, contenido y automatización. Por dónde empezar sin gastar de más y qué mitos ignorar.',
    h1: 'Inteligencia artificial para pequeñas empresas en Panamá',
    breadcrumb: 'IA para pymes',
    category: 'IA y Automatización',
    date: '2026-06-14',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Dueña de una pequeña empresa usando una laptop en su local',
    },
    lead: [
      'La inteligencia artificial dejó de ser tema de películas y de grandes corporaciones. Hoy una pyme en Panamá puede usarla para tareas concretas del día a día, sin un departamento de tecnología ni un presupuesto de multinacional.',
      'Pero entre tanto ruido es difícil saber qué es útil de verdad y qué es puro bombo. En esta guía bajamos la IA a tierra: para qué sirve en un negocio pequeño, por dónde empezar y qué mitos te conviene ignorar.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La IA no es magia: es una herramienta que hace tareas',
        paragraphs: [
          'Conviene empezar desinflando el globo. La IA no va a "transformar tu negocio" por sí sola ni piensa por ti. Es una herramienta que hace bien ciertas tareas específicas: entender y responder texto, resumir información, ayudar a redactar, clasificar mensajes, encadenar procesos.',
          'Vista así, la pregunta correcta no es "¿debería usar IA?", sino <strong>"¿qué tarea concreta me está robando tiempo o clientes y podría hacerse con ayuda de IA?"</strong>. Esa pregunta lleva a decisiones útiles; la otra lleva a comprar humo.',
          'Lo bueno para una pyme panameña es que muchas de estas herramientas ya son accesibles y no requieren instalar nada raro ni contratar un equipo técnico. El reto no es la tecnología: es elegir bien dónde aplicarla primero.',
        ],
      },
      {
        type: 'prose',
        h2: 'Tres usos prácticos que rinden desde el primer día',
        paragraphs: [
          'No hace falta empezar por lo complejo. Estos tres usos son los que más rápido devuelven valor en un negocio pequeño.',
          'El primero es <strong>atención al cliente</strong>: un asistente con IA que responde las preguntas repetidas de tu WhatsApp y tu web a cualquier hora, y solo te pasa lo que necesita trato humano. El segundo es <strong>contenido</strong>: la IA ayuda a redactar publicaciones, descripciones de productos o correos, siempre con tu revisión y tu criterio, no como reemplazo de tu voz. El tercero es <strong>automatización</strong>: encadenar tareas para que la información fluya sola entre tus herramientas.',
          'Cada uno tiene su guía propia: la atención en <a href="/blog/chatbots-con-ia-para-negocios-en-panama/">chatbots con IA para negocios</a>, el contenido se apoya en nuestro servicio de <a href="/marketing/contenido-redes-sociales-panama/">contenido para redes sociales</a>, y la automatización la vimos en <a href="/blog/automatizaciones-con-n8n-para-pymes/">automatizaciones con n8n</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Por dónde empezar con la IA en tu negocio',
        intro: 'Empezar bien es empezar chico y por lo que duele. Este orden evita gastar en cosas que no vas a usar.',
        items: [
          'Anota las tres tareas que más tiempo repetitivo te consumen a la semana',
          'Identifica dónde pierdes clientes: mensajes sin responder, seguimiento que se olvida',
          'Elige UNA sola tarea para empezar, la de mayor dolor y menor riesgo',
          'Prueba con volumen real durante unas semanas antes de ampliar',
          'Mantén siempre a un humano revisando lo que la IA produce o responde',
          'Amplía a la siguiente tarea solo cuando la primera ya funcione sola',
        ],
      },
      {
        type: 'prose',
        h2: 'Mitos que te conviene ignorar',
        paragraphs: [
          'Primer mito: "la IA va a reemplazar a mi equipo". En una pyme, casi nunca. Lo que hace es quitarle a tu gente lo repetitivo para que se dedique a lo que sí requiere criterio. Un local que atendía peor por falta de tiempo empieza a atender mejor, no a tener menos empleados.',
          'Segundo mito: "la IA no se equivoca". Sí se equivoca, sobre todo si la dejas opinar sobre cosas que no sabe. Por eso se le acota a tu información y se le enseña a decir "eso lo confirma un asesor". <strong>La IA sin supervisión humana es un riesgo; con supervisión, es una gran ayuda.</strong>',
          'Tercer mito: "es carísimo, es para empresas grandes". Ya no. Muchas soluciones son accesibles para un negocio pequeño, y el costo de no usarlas (mensajes perdidos, seguimiento olvidado) suele ser mayor que el de empezar. Lo caro es hacerlo mal, comprando herramientas que nadie termina de usar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta y cómo no gastar de más',
        paragraphs: [
          'La regla de oro es no comprar tecnología por moda. Antes de invertir, definí qué problema concreto vas a resolver y cómo vas a saber si funcionó. Si no puedes medir el resultado, probablemente no lo necesitas todavía.',
          'Nuestras plataformas propias están pensadas justo para pymes: <a href="/saas/chatmantis/">ChatMantis</a> para atención con IA en web y WhatsApp, <a href="/saas/wapycrm/">WapyCRM</a> para ordenar y dar seguimiento a tus ventas por WhatsApp, y <a href="/saas/cifrao/">Cifrao</a> para la parte contable. La idea no es que uses todo, sino lo que resuelve tu dolor de hoy.',
          'Si no tienes claro por dónde empezar, esa conversación es gratis. Escríbenos desde <a href="/contacto/">contacto</a> y, con honestidad, a veces la respuesta es "todavía no necesitas IA para esto, arregla primero aquello". Preferimos eso a venderte algo que no vas a aprovechar.',
        ],
      },
      {
        type: 'statement',
        text: 'La pregunta útil no es si usar inteligencia artificial, sino qué tarea concreta te está costando tiempo o clientes.',
        strong: 'Empieza por un problema real, no por comprar tecnología de moda.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿La IA sirve para un negocio realmente pequeño?', a: 'Sí, y con frecuencia es donde más ayuda: cuando eres tú solo o un equipo chico, cada mensaje sin responder y cada seguimiento olvidado se siente. La IA cubre justo esos huecos que no alcanzas a atender por falta de tiempo.' },
          { q: '¿Tengo que saber de tecnología para usarla?', a: 'No para usarla en el día a día. Sí conviene apoyarte en alguien que la implemente bien la primera vez, para que quede acotada a tu información y con un humano supervisando. Después, el uso diario es sencillo.' },
          { q: '¿Puedo confiar en lo que la IA responde o redacta?', a: 'Con revisión, sí. La IA es un excelente borrador y un buen primer filtro, pero la palabra final debe ser tuya, sobre todo en precios, promesas y contenido que representa tu marca. Nunca la dejes sin supervisión de cara al cliente.' },
          { q: '¿Por dónde me conviene empezar?', a: 'Por una sola tarea: la que más tiempo repetitivo te quita o donde más clientes pierdes. Casi siempre eso es la atención (responder a tiempo). Domina esa, mídela, y solo después suma la siguiente.' },
          { q: '¿Cuánto tengo que invertir para probar?', a: 'Menos de lo que crees, si empiezas acotado. El error caro es comprar varias herramientas de golpe y no usar ninguna. Escríbenos desde /contacto/ y armamos un primer paso a la medida de tu presupuesto.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/chatbots-con-ia-para-negocios-en-panama', label: 'Chatbots con IA para negocios' },
          { slug: 'blog/automatizaciones-con-n8n-para-pymes', label: 'Automatizaciones con n8n' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbots con IA para tu web' },
          { slug: 'saas/chatmantis', label: 'ChatMantis' },
        ],
      },
    ],
    cta: {
      h2: 'Damos el primer paso con IA en tu negocio',
      wa: 'Hola, tengo una pequeña empresa y quiero saber cómo aprovechar la IA sin gastar de más.',
    },
  },

  /* ============================================================= *
   * 4 · Cómo atender a tus clientes 24/7 con un asistente de IA
   * ============================================================= */
  {
    slug: 'blog/como-atender-clientes-24-7-con-un-asistente-de-ia',
    parent,
    title: 'Cómo atender a tus clientes 24/7 con un asistente de IA',
    description: 'El costo real de no responder a tiempo, cómo un asistente de IA capta clientes fuera de horario y cómo entrenarlo con tu propia información para que responda bien.',
    h1: 'Cómo atender a tus clientes 24/7 con un asistente de IA',
    breadcrumb: 'Atención 24/7 con IA',
    category: 'IA y Automatización',
    date: '2026-05-31',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Pantalla de un asistente de inteligencia artificial respondiendo mensajes',
    },
    lead: [
      'El cliente no escribe cuando te queda cómodo. Escribe en la noche, el domingo, en su hora de almuerzo. Y si nadie responde, no espera: le escribe al siguiente.',
      'Un asistente de IA no duerme ni toma feriados. En esta guía te explicamos cuánto cuesta de verdad no responder a tiempo, cómo un asistente capta a esos clientes fuera de horario y cómo se entrena con tu propia información para que responda como tu negocio respondería.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El costo invisible de no responder a tiempo',
        paragraphs: [
          'La venta perdida por no responder a tiempo no aparece en ningún reporte. Nadie te avisa "este cliente te escribió a las 8 de la noche, no le contestaste y compró en otro lado". Simplemente no pasó nada, y ese silencio se siente como si el mercado estuviera flojo.',
          'Pero la realidad es que <strong>gran parte de las decisiones de compra ocurren fuera del horario de oficina</strong>. La persona investiga, compara y escribe cuando por fin tiene un momento. Si tu respuesta llega al día siguiente, ya perdiste el impulso que la hizo escribir.',
          'No se trata de contestar perfecto, sino de contestar a tiempo. La primera respuesta, aunque sea para decir "recibimos tu mensaje, dame los detalles y te ayudo", muchas veces es la que se queda con el cliente. El resto es seguimiento.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo un asistente capta al cliente que llega de madrugada',
        paragraphs: [
          'Un asistente de IA responde al instante, a cualquier hora, en tu web y en tu WhatsApp. Cuando alguien escribe a medianoche, no encuentra un vacío: encuentra respuestas a sus dudas frecuentes y una conversación que avanza.',
          'Lo importante es que el asistente no solo responde: <strong>capta</strong>. Toma el nombre, entiende qué está buscando, resuelve lo que puede y deja el contacto ordenado para que tu equipo cierre en la mañana. En vez de despertar con veinte mensajes en frío, despiertas con veinte conversaciones ya iniciadas y con contexto.',
          'Y sabe cuándo callarse: si la persona pide algo que requiere criterio humano (una negociación, un caso especial), lo marca para que un asesor lo tome. La meta no es simular que hay alguien despierto, es no dejar al cliente hablando solo.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo se entrena un asistente con tu información',
        intro: 'Un asistente de IA no nace sabiendo de tu negocio. Se le enseña, y de eso depende que responda bien o que diga tonterías.',
        items: [
          { h3: 'Recopilamos tu información real', text: 'Precios, servicios, horarios, ubicación, formas de pago, políticas. Todo lo que un buen empleado necesitaría saber para atender.' },
          { h3: 'Le damos el tono de tu negocio', text: 'No suena igual una clínica que una tienda juvenil. Definimos cómo habla el asistente para que represente tu marca, no un robot genérico.' },
          { h3: 'Marcamos los límites', text: 'Qué puede responder solo y qué debe derivar a un humano. Se le enseña a decir "eso lo confirma un asesor" en vez de inventar.' },
          { h3: 'Definimos a dónde encamina', text: 'Cada intención tiene un destino: una reserva, una cotización, un pago, una venta. El asistente guía la conversación hacia ahí.' },
          { h3: 'Revisamos y afinamos', text: 'Leemos conversaciones reales de las primeras semanas y ajustamos las respuestas que no quedaron bien. Un asistente mejora con uso.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Qué SÍ y qué NO debe hacer tu asistente',
        paragraphs: [
          'Un asistente bien montado tiene claros sus límites. <strong>Sí debe</strong> responder preguntas frecuentes, dar información de precios y horarios, encaminar reservas y ventas, captar datos y responder al instante fuera de horario. Eso lo hace mejor que cualquier persona cansada a las 11 de la noche.',
          '<strong>No debe</strong> inventar datos que no tiene, cerrar negociaciones delicadas por su cuenta, prometer lo que tu negocio no cumple ni fingir que es humano si le preguntan directamente. Un asistente honesto que deriva a una persona genera más confianza que uno que improvisa para parecer listo.',
          'Ese equilibrio es justo lo que configura una buena implementación. Si quieres ver cómo se conecta a tu sitio, míralo en <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbots con IA para tu web</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Web y WhatsApp: el mismo asistente en los dos lados',
        paragraphs: [
          'Tu cliente no distingue canales: a veces te escribe desde la web, a veces por WhatsApp, y espera la misma respuesta en ambos. Lo ideal es un solo asistente con la misma información atendiendo en los dos lugares.',
          'Con <a href="/saas/chatmantis/">ChatMantis</a> el asistente atiende en tu web y en tu WhatsApp, y guarda cada conversación como un contacto con su historial. Así, cuando tu equipo retoma en la mañana, no empieza de cero: ve todo lo que el cliente ya conversó durante la noche.',
          'Ese historial es oro para el seguimiento. Un mensaje respondido a tiempo capta al cliente; un buen seguimiento al día siguiente lo cierra. Sobre eso trata nuestra guía de <a href="/blog/crm-con-whatsapp-para-vender-mas-en-panama/">CRM con WhatsApp</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'No pierdes ventas porque respondes mal; las pierdes porque respondes tarde, cuando el cliente ya le escribió a otro.',
        strong: 'La primera respuesta rápida casi siempre le gana a la respuesta perfecta que llega horas después.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿El asistente atiende de verdad las 24 horas?', a: 'Sí. Al ser software, responde al instante sin importar la hora, el día ni el volumen de mensajes. No se cansa ni deja conversaciones en visto. Tu equipo humano retoma en horario los casos que el asistente derivó.' },
          { q: '¿No se nota que es un bot y molesta al cliente?', a: 'Lo que molesta es un bot que no entiende o que da vueltas. Un asistente con IA bien entrenado responde de forma natural y deriva a un humano cuando corresponde. Bien hecho, el cliente agradece que le respondan al instante en vez de esperar al otro día.' },
          { q: '¿Cómo evito que invente o prometa cosas falsas?', a: 'Acotándolo a tu información y enseñándole a decir "eso lo confirma un asesor" cuando no sabe. Un asistente honesto que deriva genera más confianza que uno que improvisa. Esa configuración es parte del trabajo de montarlo bien.' },
          { q: '¿Sirve si mi negocio ya tiene poco personal?', a: 'Sobre todo ahí. Cuando el equipo es chico, es imposible responder a toda hora. El asistente cubre las noches, los fines de semana y los picos, y te deja las conversaciones ordenadas para atender en tu horario.' },
          { q: '¿Puedo usar mi mismo número de WhatsApp?', a: 'Sí, funciona sobre WhatsApp Business con la conexión adecuada, y guarda cada chat como contacto en el CRM. Escríbenos por WhatsApp o desde /contacto/ y revisamos cómo montarlo en tu número.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'saas/chatmantis', label: 'ChatMantis' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbots con IA para tu web' },
          { slug: 'blog/chatbots-con-ia-para-negocios-en-panama', label: 'Chatbots con IA para negocios' },
          { slug: 'blog/crm-con-whatsapp-para-vender-mas-en-panama', label: 'CRM con WhatsApp' },
        ],
      },
    ],
    cta: {
      h2: 'Deja de perder clientes fuera de horario',
      wa: 'Hola, quiero un asistente de IA que atienda a mis clientes 24/7.',
    },
  },

  /* ============================================================= *
   * 5 · CRM con WhatsApp para vender más en Panamá
   * ============================================================= */
  {
    slug: 'blog/crm-con-whatsapp-para-vender-mas-en-panama',
    parent,
    title: 'CRM con WhatsApp: cómo vender más y no perder clientes',
    description: 'Por qué vender por WhatsApp necesita un CRM, cómo armar un embudo de ventas, dar seguimiento y dejar de perder conversaciones entre cientos de chats sin orden.',
    h1: 'CRM con WhatsApp para vender más en Panamá',
    breadcrumb: 'CRM con WhatsApp',
    category: 'IA y Automatización',
    date: '2026-05-17',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Equipo de ventas revisando conversaciones y datos de clientes',
    },
    lead: [
      'En Panamá se vende por WhatsApp: cotizaciones, catálogos, cierres, todo pasa por ahí. El problema empieza cuando los chats se acumulan y ese cliente que iba a comprar se pierde entre cientos de conversaciones sin orden.',
      'Un CRM le pone estructura a ese caos. En esta guía te explicamos por qué WhatsApp necesita un CRM, cómo armar un embudo de ventas real, cómo dar seguimiento sin que se te olvide nadie y por qué ese orden es la diferencia entre vender y "se me traspapeló".',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué WhatsApp solo no alcanza para vender bien',
        paragraphs: [
          'WhatsApp es excelente para conversar, pero no fue hecho para gestionar ventas. Cuando tienes decenas de chats abiertos, no hay forma de saber de un vistazo quién pidió cotización ayer, a quién prometiste llamar hoy y quién quedó en pensarlo la semana pasada.',
          'El resultado es predecible: <strong>los clientes se pierden no porque digan que no, sino porque nadie les dio seguimiento</strong>. La conversación bajó en la lista, la tapó otro mensaje, y ese interesado que estaba listo para comprar simplemente se enfrió. No fue una venta perdida por precio; fue por desorden.',
          'Un CRM resuelve exactamente eso: convierte cada chat en un contacto con estado, historial y próximo paso. Deja de depender de que alguien "se acuerde" y pasa a un sistema donde nada se cae por el olvido.',
        ],
      },
      {
        type: 'prose',
        h2: 'El embudo: dónde está cada cliente en tu proceso',
        paragraphs: [
          'Vender no es un instante, es un recorrido: alguien pregunta, pide cotización, la evalúa, decide y compra. Un CRM te deja ver ese recorrido como un embudo, con cada contacto en su etapa: nuevo, en conversación, cotizado, por cerrar, ganado o perdido.',
          'Esa foto cambia cómo trabajas. En vez de mirar una lista infinita de chats iguales, ves <strong>cuántos clientes tienes por cerrar hoy y cuáles llevan días sin moverse</strong>. Sabes dónde poner la energía y qué contactos están a punto de enfriarse si no los atiendes.',
          'También revela dónde se te traba la venta: si muchos quedan en "cotizado" y no avanzan, el problema está en el seguimiento o en la propuesta, no en la falta de clientes. El embudo convierte una sensación ("está flojo") en un dato que puedes atacar.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué debe tener tu CRM de WhatsApp',
        intro: 'No todos los CRM sirven para vender por WhatsApp en Panamá. Estas son las funciones que de verdad mueven la aguja.',
        items: [
          'Cada conversación guardada como contacto con su historial completo',
          'Etapas del embudo claras: nuevo, en conversación, cotizado, por cerrar, ganado, perdido',
          'Recordatorios de seguimiento para que ningún cliente se enfríe por olvido',
          'Etiquetas para segmentar por interés, producto o zona',
          'Varios agentes atendiendo el mismo número sin pisarse',
          'Notas internas por contacto para no repetir preguntas ni perder contexto',
          'Conexión con tu chatbot para que lo que capta entre ya ordenado al CRM',
        ],
      },
      {
        type: 'prose',
        h2: 'Seguimiento: donde se ganan (y se pierden) las ventas',
        paragraphs: [
          'La mayoría de las ventas no se cierran en el primer mensaje. El cliente pregunta, lo piensa, compara. Si nadie retoma la conversación en el momento justo, ese interés se apaga solo. El seguimiento no es insistir de más: es estar presente cuando la persona vuelve a estar lista.',
          'Aquí un CRM hace la diferencia real. Te <strong>recuerda a quién prometiste escribir y cuándo</strong>, te muestra los contactos que llevan días sin respuesta y te deja retomar con todo el contexto a la mano, sin preguntar de nuevo lo que el cliente ya te dijo. Eso, del lado del cliente, se siente como buena atención.',
          'Combinado con automatización, el seguimiento se vuelve casi automático: un flujo de <a href="/blog/automatizaciones-con-n8n-para-pymes/">n8n</a> puede recordarte los pendientes o disparar un mensaje a quien lleva días sin moverse. La tecnología no reemplaza el trato humano; se asegura de que ese trato ocurra a tiempo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo dar el paso a un CRM',
        paragraphs: [
          'No todo negocio necesita un CRM desde el día uno. Si atiendes pocos clientes y los tienes todos en la cabeza, quizá aún no. La señal de que ya lo necesitas es clara: cuando empiezas a olvidar seguimientos, cuando dos personas responden al mismo cliente sin saberlo, o cuando la pregunta "¿en qué quedamos con este?" no tiene respuesta rápida.',
          'Para eso construimos <a href="/saas/wapycrm/">WapyCRM</a>, un CRM de ventas pensado para WhatsApp y para el mercado panameño: ordena tus conversaciones en un embudo, no pierde el historial y te ayuda a dar seguimiento sin que se te escape nadie. Y si además quieres atención automática con IA, <a href="/saas/chatmantis/">ChatMantis</a> suma el chatbot y el CRM en uno.',
          'Si quieres profundizar en el método de venta por chat, tenemos las guías de <a href="/blog/como-vender-por-whatsapp-en-panama/">cómo vender por WhatsApp en Panamá</a>. Y si no sabes cuál herramienta te conviene, escríbenos desde <a href="/contacto/">contacto</a> y lo vemos con calma según tu volumen real.',
        ],
      },
      {
        type: 'statement',
        text: 'La mayoría de los clientes no se pierden por decir que no: se pierden porque nadie les dio seguimiento a tiempo.',
        strong: 'Un CRM no vende por ti, pero se asegura de que ninguna conversación con potencial se caiga por olvido.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿No me alcanza con WhatsApp Business y sus etiquetas?', a: 'Para muy pocos clientes, quizá. Cuando el volumen crece, las etiquetas de WhatsApp Business se quedan cortas: no te dan embudo, ni recordatorios de seguimiento, ni buen trabajo en equipo sobre el mismo número. Ahí un CRM cambia el juego.' },
          { q: '¿Un CRM sirve si vendo yo solo, sin equipo?', a: 'Sí. Aunque seas uno, el problema del olvido existe igual: prometes escribir y se te pasa entre otros chats. El CRM te hace de memoria y te muestra a quién le toca seguimiento hoy, para que no dependas de acordarte.' },
          { q: '¿Puedo tener varios agentes en el mismo número?', a: 'Con un CRM de WhatsApp, sí: varios agentes atienden el mismo número sin pisarse, con notas y contexto compartido. Cada quien sabe qué se conversó y quién está a cargo de cada cliente, sin duplicar respuestas.' },
          { q: '¿Se conecta con mi chatbot de atención?', a: 'Debería. Lo ideal es que lo que el chatbot capta fuera de horario entre ya ordenado al CRM como contacto con su historial. Con ChatMantis eso viene integrado: el bot atiende y el CRM guarda y ordena para el seguimiento.' },
          { q: '¿Es complicado de usar o mi equipo se va a perder?', a: 'Un buen CRM de WhatsApp se parece a chatear, con orden encima. La curva es corta si se configura bien y se acompaña al equipo los primeros días. Escríbenos desde /contacto/ y te mostramos cómo se vería con tu operación.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
          { slug: 'blog/como-vender-por-whatsapp-en-panama', label: 'Cómo vender por WhatsApp' },
          { slug: 'blog/como-atender-clientes-24-7-con-un-asistente-de-ia', label: 'Atender clientes 24/7 con IA' },
          { slug: 'saas/chatmantis', label: 'ChatMantis' },
        ],
      },
    ],
    cta: {
      h2: 'Ordena tus ventas por WhatsApp y deja de perder clientes',
      wa: 'Hola, quiero ordenar mis ventas de WhatsApp con un CRM.',
    },
  },
];
