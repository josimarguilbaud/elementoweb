/* BLOG · Preguntas de IA (fase 2 SEO, 23-oct-2026): seis páginas que responden una
   pregunta concreta de un comprador sobre chatbots, agentes de IA, costos, seguridad
   de datos y Ley 81. Precios de Elemento Web solo de precios.json (confirmados:
   WazaCRM desde $349 al mes; IA para empresas desde $2,900 más consumo). Cifras de
   terceros solo de páginas abiertas el 23-oct-2026 y enlazadas en el texto: Ley 81 de
   2019 (texto de Legispan), Decreto Ejecutivo 285 de 2021 (Gaceta Oficial 29296-A),
   condiciones de Meta para la plataforma de WhatsApp Business (sección 4.7) y políticas
   de datos de las API de Anthropic y OpenAI. Sin heroImage ni updated. */
import type { PageData } from '../types';

const parent = { slug: 'blog', label: 'Blog' };

const LEY81 = 'https://www.superbancos.gob.pa/documentos/sac/leyes/ley_2019_645_3008.pdf';
const DE285 = 'https://dgi.mef.gob.pa/Dts/pdf/DECRETO_EJECUTIVO_No._285_28_MAYO_2021.pdf';
const META_TERMS = 'https://www.facebook.com/legal/Meta-Terms-for-WhatsApp-Business-Platform';
const ANTHROPIC_DATA = 'https://privacy.claude.com/en/articles/7996868-is-my-data-used-for-model-training';
const OPENAI_DATA = 'https://developers.openai.com/api/docs/guides/your-data';

export const preguntasIa: PageData[] = [
  /* ============================================================= *
   * 6 · Quién hace chatbots de WhatsApp con IA en Panamá
   * ============================================================= */
  {
    slug: 'blog/quien-hace-chatbots-de-whatsapp-con-ia-en-panama',
    parent,
    title: '¿Quién hace chatbots de WhatsApp con IA en Panamá?',
    description: 'Qué tipos de proveedor hacen chatbots de WhatsApp con IA en Panamá, qué criterios usar para elegir, qué preguntar antes de firmar y dónde encaja Elemento Web.',
    h1: '¿Quién hace chatbots de WhatsApp con IA en Panamá? Cómo elegir proveedor',
    breadcrumb: 'Quién hace chatbots de WhatsApp con IA',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'En Panamá hacen chatbots de WhatsApp con IA tres tipos de proveedor: plataformas SaaS que configuras tú, agencias que lo montan y lo operan, y programadores independientes que lo construyen a medida. Para elegir, revisa cuatro cosas: API oficial de Meta, respuestas con tu información, traspaso a una persona y costos a la vista.',
      'Nosotros somos uno de esos proveedores: Elemento Web es Tech Provider verificado por Meta y opera WazaCRM, desde US$ 349 al mes. Abajo van los criterios para comparar a cualquiera, incluidos nosotros.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: '¿Qué tipos de proveedor hacen chatbots de WhatsApp con IA?',
        intro: 'No hay un tipo mejor que otro. Cada uno conviene a un negocio distinto.',
        items: [
          { h3: 'Plataforma SaaS que configuras tú', text: 'Pagas una suscripción y armas el bot desde un panel. Conviene si alguien de tu equipo tiene tiempo para cargar la información, probar y ajustar. El soporte suele ser por tickets y en el horario del proveedor.' },
          { h3: 'Agencia que lo monta y lo opera', text: 'Te entrega el asistente funcionando, conectado a tus canales, y lo mantiene. Conviene si no tienes a nadie para operarlo. Pregunta qué parte es licencia, qué parte es servicio y quién ajusta las respuestas cada mes.' },
          { h3: 'Programador independiente', text: 'Construye una solución a medida con modelos de IA y la API de WhatsApp. Puede ser flexible y económico al inicio. Pregunta quién lo mantiene si esa persona no está disponible y dónde quedan el código y los accesos.' },
          { h3: 'Tu propio equipo técnico', text: 'Si ya tienes desarrolladores, pueden montarlo. El reto no es programar: es operar la cuenta, vigilar la calidad del número y revisar las respuestas.' },
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué criterios usar para elegir proveedor?',
        intro: 'Siete criterios que puedes pedir por escrito a cualquier proveedor, local o de fuera.',
        items: [
          { h3: '1. API oficial de Meta', text: 'El asistente debe conectarse a tu número por la API oficial de WhatsApp Business. Las conexiones no oficiales ponen la línea en riesgo de bloqueo. Lo explicamos en <a href="/blog/por-que-bloquean-un-numero-de-whatsapp-business/">por qué bloquean un número de WhatsApp Business</a>.' },
          { h3: '2. Responde solo con tu información', text: 'Pregunta de dónde saca las respuestas. Lo sano es que busque en documentos que tú apruebas (precios, horarios, políticas) y que diga «no lo sé» cuando el dato no está.' },
          { h3: '3. Traspaso a una persona', text: 'Pide ver cómo pasa la conversación a tu equipo: en qué casos, a quién y con qué contexto. Un bot sin salida a una persona frustra al cliente justo cuando más importa.' },
          { h3: '4. Costos separados y visibles', text: 'Hay al menos tres costos: la licencia o el servicio, los mensajes que cobra Meta y el consumo del modelo de IA. Mira <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje</a> antes de comparar.' },
          { h3: '5. Tus datos son tuyos', text: 'Pregunta si puedes exportar contactos y conversaciones cuando quieras, y qué pasa con ellos si cancelas. La respuesta debe quedar en el contrato.' },
          { h3: '6. Quién lo opera después', text: 'Un asistente necesita revisión: preguntas que no supo responder, precios que cambian, temporadas. Define quién hace ese trabajo y cada cuánto.' },
          { h3: '7. Datos personales', text: 'Tu chatbot recoge nombres, teléfonos y a veces datos de salud. Pregunta cómo te ayuda a cumplir la <a href="/blog/ley-81-proteccion-de-datos-chatbots-panama/">Ley 81 de protección de datos</a>.' },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué preguntarle a un proveedor antes de firmar?',
        intro: 'Sirven con cualquier proveedor. Pide las respuestas por escrito y compáralas lado a lado.',
        items: [
          '¿Se conecta por la API oficial de WhatsApp Business y a nombre de quién queda la cuenta?',
          '¿Puedo conservar mi número actual?',
          '¿De qué documentos saca las respuestas y quién los aprueba?',
          '¿Qué hace cuando no sabe algo?',
          '¿Cómo pasa la conversación a una persona de mi equipo y con qué información?',
          '¿Qué incluye el precio mensual y qué se cobra aparte?',
          '¿Los mensajes de Meta y el consumo de IA se cobran a costo o con margen?',
          '¿Puedo exportar mis contactos y conversaciones?',
          '¿Quién revisa y mejora las respuestas después de publicar?',
          '¿Cuánto tarda en estar funcionando, incluida la verificación del número?',
        ],
      },
      {
        type: 'prose',
        h2: '¿Dónde encaja Elemento Web entre estos proveedores?',
        paragraphs: [
          'Somos una agencia que además opera su propio software. Meta verificó nuestro negocio como <strong>Tech Provider</strong> para conectar la API de WhatsApp Business en nombre de nuestros clientes. Quién está detrás y cómo trabajamos está en <a href="/nosotros/">nosotros</a>.',
          'El asistente corre sobre <a href="/saas/wazacrm/">WazaCRM</a>, nuestro CRM para WhatsApp. Usa Claude, de Anthropic, y responde solo con los documentos que apruebas. Une WhatsApp, Instagram, Facebook y el chat web en una bandeja, con embudo de ventas y ficha por cliente.',
          'La licencia parte de <strong>US$ 349 al mes</strong>, sin ITBMS. Los mensajes de Meta y el consumo de IA se facturan aparte, a precio de costo. Suele estar en marcha en unas 2 semanas, incluida la verificación del número, que depende de los tiempos de Meta.',
          'Si buscas el asistente para tu web, el detalle está en <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA para tu web</a>. Si te conviene más una plataforma que configures tú, también es una buena opción: usa los criterios de arriba para elegirla.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene contratar a nadie todavía?',
        paragraphs: [
          'Si recibes pocos mensajes al mes, un asistente con IA no compensa: tú respondes más rápido y más barato. Lo mismo si cada consulta requiere criterio, como un proyecto a medida o un caso técnico.',
          'Tampoco conviene si tu información está desordenada. Un asistente que lee precios viejos responde con seguridad cosas equivocadas. Primero ordena tus precios, horarios y políticas por escrito. Después automatiza.',
          'Si dudas entre un bot sencillo y uno con IA, lee <a href="/blog/chatbot-con-reglas-o-con-ia-cual-conviene/">chatbot con reglas o con IA</a>. Si quieres entender qué hace un asistente que también ejecuta tareas, mira <a href="/blog/que-es-un-agente-de-ia-para-whatsapp/">qué es un agente de IA para WhatsApp</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre proveedores de chatbots de WhatsApp',
        items: [
          { q: '¿Es mejor un proveedor de Panamá?', a: 'No necesariamente, pero ayuda que entienda cómo escribe tu cliente, que responda en tu zona horaria y que conozca la Ley 81. Lo más importante es la conexión oficial con Meta, la propiedad de tus datos y que alguien opere el asistente después de publicarlo.' },
          { q: '¿Qué es un Tech Provider de Meta?', a: 'Es el programa de Meta para empresas que conectan la API de WhatsApp Business en nombre de sus clientes. Para entrar, Meta verifica el negocio y revisa la aplicación. Para ti significa que tu número se conecta por el canal oficial y no por herramientas no autorizadas.' },
          { q: '¿Puedo usar el WhatsApp Business de mi celular con un bot de IA?', a: 'Para conectar un asistente de IA a tu número se usa la API oficial de WhatsApp Business, no solo la aplicación del celular. Las diferencias y cuándo te conviene cada una están en <a href="/blog/whatsapp-business-o-api-cual-necesita-tu-negocio/">WhatsApp Business o API</a>.' },
          { q: '¿Cuánto cuesta un chatbot de WhatsApp con IA?', a: 'Depende de la licencia, de la puesta en marcha, de los mensajes que cobra Meta y del consumo del modelo de IA. Con nosotros, WazaCRM parte de US$ 349 al mes. El desglose completo está en <a href="/blog/cuanto-cuesta-un-chatbot-de-whatsapp-en-panama/">cuánto cuesta un chatbot de WhatsApp</a>.' },
          { q: '¿Qué pasa con mis conversaciones si cambio de proveedor?', a: 'Depende del contrato, por eso conviene preguntarlo antes de firmar. Lo razonable es que puedas exportar contactos y conversaciones en un formato de uso común. En WazaCRM puedes exportarlos cuando quieras, sin pedir permiso.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbot con IA para tu web' },
          { slug: 'saas/wazacrm', label: 'WazaCRM' },
          { slug: 'blog/que-es-un-agente-de-ia-para-whatsapp', label: 'Qué es un agente de IA para WhatsApp' },
          { slug: 'blog/chatbot-con-reglas-o-con-ia-cual-conviene', label: 'Chatbot con reglas o con IA' },
          { slug: 'blog/cuanto-cuesta-un-chatbot-de-whatsapp-en-panama', label: 'Cuánto cuesta un chatbot de WhatsApp' },
        ],
      },
    ],
    cta: {
      h2: 'Compara proveedores con la información por escrito',
      wa: 'Hola, estoy comparando proveedores de chatbots de WhatsApp con IA. ¿Me ayudan a revisar mi caso?',
    },
  },

  /* ============================================================= *
   * 7 · Qué es un agente de IA para WhatsApp
   * ============================================================= */
  {
    slug: 'blog/que-es-un-agente-de-ia-para-whatsapp',
    parent,
    title: '¿Qué es un agente de IA para WhatsApp y qué hace?',
    description: 'Qué es un agente de IA para WhatsApp, en qué se diferencia de un chatbot, qué tareas puede hacer, qué no debe hacer y qué reglas de Meta debes conocer.',
    h1: '¿Qué es un agente de IA para WhatsApp y qué puede hacer por tu negocio?',
    breadcrumb: 'Agente de IA para WhatsApp',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'Un agente de IA para WhatsApp es un asistente que entiende al cliente, responde con la información de tu negocio y ejecuta tareas. Puede agendar una cita, armar una cotización, registrar al cliente en tu CRM o enviar un enlace de pago. A diferencia de un chatbot, no solo contesta: actúa, y pasa a una persona lo que no le toca.',
      'Aquí va qué hace, cómo funciona por dentro, dónde debe detenerse y qué dicen las reglas de Meta sobre la IA en WhatsApp.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿En qué se diferencia un agente de IA de un chatbot?',
        paragraphs: [
          'Un chatbot responde preguntas. Puede ser de botones («presiona 1») o con IA, que entiende lo que la persona escribe con sus propias palabras. En ambos casos, su trabajo termina cuando contesta.',
          'Un agente de IA da un paso más: <strong>usa herramientas</strong>. Consulta tu calendario y aparta la cita. Busca el precio en tu lista y arma la cotización. Llena la ficha del cliente en el CRM. Todo dentro de la misma conversación de WhatsApp.',
          'La diferencia importa porque cambia lo que pasa después del chat. Con un chatbot, alguien de tu equipo tiene que copiar los datos y dar seguimiento. Con un agente, la conversación ya deja la cita, la cotización o el registro hechos.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué tareas puede hacer un agente de IA en WhatsApp?',
        intro: 'Las más comunes en negocios que venden o atienden por chat. Cada una se activa solo si la configuras.',
        items: [
          { h3: 'Responder con tu información', text: 'Precios, horarios, requisitos, cobertura y políticas, sacados de documentos que tú apruebas. Si el dato no está, lo dice.' },
          { h3: 'Calificar al cliente', text: 'Pregunta lo necesario para saber qué busca, para cuándo y con qué presupuesto, y lo anota en la ficha.' },
          { h3: 'Agendar', text: 'Revisa tu disponibilidad real y aparta la cita en tu calendario, sin pisar horarios ni cupos.' },
          { h3: 'Cotizar', text: 'Arma la cotización con los precios de tus documentos, nunca inventados, y la deja lista para enviar o para que alguien la revise.' },
          { h3: 'Cobrar', text: 'Envía un enlace de pago y recuerda los pagos pendientes, dentro de lo que tú definas.' },
          { h3: 'Registrar en el CRM', text: 'Cada conversación queda como contacto con su historial, para que tu equipo la retome con contexto.' },
          { h3: 'Dar seguimiento', text: 'Retoma a quien dejó la conversación a medias, respetando las reglas de mensajes de Meta.' },
          { h3: 'Pasar a una persona', text: 'Reclamos, casos delicados o lo que el cliente pida: la conversación pasa a tu equipo con todo el contexto.' },
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo funciona un agente de IA por dentro?',
        intro: 'El recorrido de un mensaje, de la pregunta del cliente a la tarea hecha.',
        items: [
          { h3: '1. Llega el mensaje', text: 'El cliente escribe a tu número. El mensaje entra por la API oficial de WhatsApp Business al sistema del agente.' },
          { h3: '2. El modelo entiende la intención', text: 'Un modelo de lenguaje interpreta qué quiere la persona: una duda, una cita, un precio, un reclamo.' },
          { h3: '3. Busca en tus documentos', text: 'Antes de responder, busca en tu base de conocimiento. Esta técnica se llama RAG: el modelo responde con lo que encontró, no de memoria.' },
          { h3: '4. Usa una herramienta si hace falta', text: 'Si la tarea lo pide, consulta el calendario, el CRM o el sistema de pagos, con los permisos que le diste.' },
          { h3: '5. Responde o deriva', text: 'Contesta al cliente o pasa la conversación a una persona, según los límites que definiste.' },
          { h3: '6. Deja registro', text: 'Queda guardado qué preguntó el cliente, qué respondió el agente y qué tarea ejecutó.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué no debe hacer un agente de IA?',
        paragraphs: [
          'Un agente bien configurado tiene límites escritos antes de encenderlo. No da diagnósticos médicos ni asesoría legal o financiera. No negocia descuentos fuera de lo publicado. No promete lo que no está en tus documentos.',
          'Las acciones sensibles, como un reembolso o un correo a un cliente importante, deben esperar la aprobación de una persona. <strong>Preferimos un agente que derive de más a uno que invente.</strong>',
          'También debe identificarse como asistente virtual. Ocultarlo genera desconfianza cuando el cliente lo descubre. Y como maneja datos personales, debe cumplir la <a href="/blog/ley-81-proteccion-de-datos-chatbots-panama/">Ley 81 de protección de datos</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué dicen las reglas de Meta sobre la IA en WhatsApp?',
        paragraphs: [
          'Las <a href="' + META_TERMS + '" rel="noopener">condiciones de Meta para la plataforma de WhatsApp Business</a> fueron actualizadas el 23 de septiembre de 2026 (consultado el 23 de octubre de 2026). Su sección 4.7 prohíbe a los proveedores de IA usar la plataforma cuando la IA es su funcionalidad principal. No aplica si es incidental o auxiliar, y Meta decide qué caso entra ahí.',
          'Esa misma sección permite que un negocio use a un proveedor de IA como su proveedor de soluciones. Lo que no permite es usar los datos de la plataforma para crear o entrenar modelos de IA.',
          'En la práctica, un agente que atiende a los clientes de tu propio negocio usa la IA como apoyo de tu servicio. Aun así, pregúntale a tu proveedor cómo cumple esta sección y que te lo deje por escrito.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta un agente de IA para WhatsApp?',
        paragraphs: [
          'Hay tres costos que se suman: la plataforma o el servicio, los mensajes que cobra Meta y el consumo del modelo de IA. Meta cobra según la categoría del mensaje; lo explicamos en <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje en Panamá</a>.',
          'Con nosotros, el agente corre sobre <a href="/saas/wazacrm/">WazaCRM</a>, desde <strong>US$ 349 al mes</strong> sin ITBMS. Los mensajes de Meta y el consumo de IA se facturan aparte, a precio de costo. Si quieres el agente también en tu web, mira <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA para tu web</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre agentes de IA para WhatsApp',
        items: [
          { q: '¿Un agente de IA reemplaza a mi equipo de atención?', a: 'No. Se queda con lo repetitivo y con el primer contacto fuera de horario. Tu equipo atiende lo que requiere criterio, negociación o trato humano. El agente le entrega cada conversación con el contexto, para que nadie tenga que preguntar todo de nuevo.' },
          { q: '¿Puede equivocarse?', a: 'Puede, como cualquier sistema. Por eso responde solo con tus documentos, dice cuando no sabe y deja las acciones sensibles a la aprobación de una persona. Revisar cada mes las preguntas que no supo responder es la mejor forma de mejorarlo.' },
          { q: '¿Funciona con mi número actual de WhatsApp?', a: 'Sí, si el número se conecta a la API oficial de WhatsApp Business. Antes de conectarlo, conviene entender qué cambia frente a la aplicación del celular. Las diferencias están en <a href="/blog/whatsapp-business-o-api-cual-necesita-tu-negocio/">WhatsApp Business o API</a>.' },
          { q: '¿Puede escribirle primero a mis clientes?', a: 'Sí, pero con reglas. Fuera de una conversación abierta, Meta exige plantillas aprobadas y cobra por mensaje. También hay límites de envío por día, que se explican en <a href="/blog/limites-de-mensajes-de-whatsapp-business-api/">límites de mensajes de la API</a>.' },
          { q: '¿Qué modelo de IA usa?', a: 'Depende del proveedor. WazaCRM usa Claude, de Anthropic, que responde con tus documentos mediante RAG. Lo importante no es solo el modelo, sino de dónde saca las respuestas y qué límites tiene.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'saas/wazacrm', label: 'WazaCRM' },
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbot con IA para tu web' },
          { slug: 'blog/chatbot-con-reglas-o-con-ia-cual-conviene', label: 'Chatbot con reglas o con IA' },
          { slug: 'blog/quien-hace-chatbots-de-whatsapp-con-ia-en-panama', label: 'Quién hace chatbots de WhatsApp con IA' },
          { slug: 'blog/como-atender-clientes-24-7-con-un-asistente-de-ia', label: 'Atender clientes 24/7 con IA' },
          { slug: 'funcionalidades/agente-de-ventas-ia-whatsapp-panama', label: 'Agente de ventas con IA en WhatsApp' },
        ],
      },
    ],
    cta: {
      h2: '¿Vemos qué tareas podría hacer un agente en tu WhatsApp?',
      wa: 'Hola, quiero saber qué podría hacer un agente de IA en el WhatsApp de mi negocio. ¿Me ayudan?',
    },
  },

  /* ============================================================= *
   * 8 · Chatbot con reglas o con IA
   * ============================================================= */
  {
    slug: 'blog/chatbot-con-reglas-o-con-ia-cual-conviene',
    parent,
    title: 'Chatbot con reglas o con IA: cuál conviene a tu negocio',
    description: 'Diferencias entre un chatbot con reglas y uno con IA: cómo entiende, cuánto cuesta operarlo, qué riesgos tiene y cuándo conviene cada uno o los dos juntos.',
    h1: 'Chatbot con reglas o con IA: cuál conviene a tu negocio',
    breadcrumb: 'Chatbot con reglas o con IA',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'Un chatbot con reglas conviene cuando las opciones son pocas y fijas: menús, estado de un pedido, horarios. Un chatbot con IA conviene cuando los clientes preguntan con sus propias palabras y las preguntas cambian. Muchos negocios usan los dos: reglas para lo predecible, IA para lo abierto y una persona para lo delicado.',
      'Abajo comparamos los dos tipos punto por punto, con señales claras para saber cuál te toca.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es un chatbot con reglas y qué es un chatbot con IA?',
        paragraphs: [
          'Un <strong>chatbot con reglas</strong> sigue un árbol de decisiones que alguien escribió. Muestra botones o reconoce palabras clave, y responde con textos fijos. Si la pregunta no cabe en el árbol, se traba o repite el menú.',
          'Un <strong>chatbot con IA</strong> usa un modelo de lenguaje para entender lo que la persona escribe, aunque lo diga de mil formas. Busca la respuesta en tus documentos y la redacta en el momento. Entiende igual «¿abren el sábado?» que «¿mañana sábado están?».',
          'Ninguno es mejor en abstracto. El de reglas es predecible y barato de operar. El de IA es flexible, pero necesita buena información y límites claros.',
        ],
      },
      {
        type: 'cards',
        h2: '¿En qué se diferencian en la práctica?',
        intro: 'Seis puntos para comparar antes de decidir.',
        items: [
          { h3: 'Cómo entiende', text: 'Reglas: solo lo que previste, por botón o palabra clave. IA: lo que el cliente escriba con sus palabras, incluso con errores de ortografía.' },
          { h3: 'Cómo se equivoca', text: 'Reglas: se traba y no avanza, lo que frustra. IA: puede responder algo equivocado con seguridad si no está acotada a tus documentos.' },
          { h3: 'Control de las respuestas', text: 'Reglas: control total, porque cada texto lo escribiste tú. IA: el texto se redacta en el momento; el control viene de los documentos y los límites.' },
          { h3: 'Costo de operación', text: 'Reglas: no consume un modelo de IA. IA: cada respuesta consume el modelo y se paga por uso. En WhatsApp, Meta cobra sus mensajes en los dos casos.' },
          { h3: 'Mantenimiento', text: 'Reglas: cada pregunta nueva es una rama nueva que alguien debe programar. IA: basta con actualizar el documento para que el asistente lo use.' },
          { h3: 'Experiencia del cliente', text: 'Reglas: rápida si lo que busca está en el menú. IA: más natural cuando la pregunta es abierta o combina varios temas.' },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Cuándo conviene un chatbot con reglas?',
        intro: 'Si te reconoces en la mayoría de estos puntos, empieza por reglas.',
        items: [
          'Tus clientes preguntan casi siempre lo mismo y las respuestas no cambian',
          'Las opciones caben en un menú corto: horario, ubicación, estado del pedido, hablar con alguien',
          'Necesitas que cada respuesta diga exactamente el texto aprobado, sin variaciones',
          'Recibes pocos mensajes y no quieres pagar consumo de un modelo de IA',
          'El objetivo principal es encaminar al cliente a la persona correcta',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Cuándo conviene un chatbot con IA?',
        intro: 'Si te reconoces en la mayoría de estos puntos, la IA rinde más.',
        items: [
          'Tus clientes escriben preguntas abiertas, largas o con varios temas a la vez',
          'Tienes mucha información: catálogo, requisitos, políticas, preguntas frecuentes',
          'Tu menú de opciones ya creció tanto que los clientes se pierden en él',
          'Recibes muchos mensajes fuera de horario y quieres resolverlos sin una persona',
          'Tienes tu información ordenada por escrito y alguien que la mantenga al día',
        ],
      },
      {
        type: 'prose',
        h2: '¿Se pueden combinar los dos?',
        paragraphs: [
          'Sí, y suele ser lo más sensato. Las reglas manejan lo predecible: un saludo con opciones, la confirmación de una cita, un recordatorio. La IA entra cuando el cliente escribe algo que no cabe en un botón.',
          'Sobre los dos va una persona. Los reclamos, los casos delicados y lo que el cliente pida pasan a tu equipo con el contexto. <strong>El asistente filtra; tu equipo cierra.</strong>',
          'Si además quieres que el asistente agende, cotice o registre al cliente en el CRM, ya hablamos de un agente. Lo explicamos en <a href="/blog/que-es-un-agente-de-ia-para-whatsapp/">qué es un agente de IA para WhatsApp</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cambia el costo entre uno y otro?',
        paragraphs: [
          'El de reglas no paga consumo de modelo, pero cada cambio de menú requiere a alguien que lo programe. El de IA paga el consumo por uso, pero se actualiza con solo cambiar un documento.',
          'En WhatsApp, los dos pagan los mensajes que cobra Meta según su categoría. Lo detallamos en <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje</a>, y el costo total en <a href="/blog/cuanto-cuesta-un-chatbot-de-whatsapp-en-panama/">cuánto cuesta un chatbot de WhatsApp</a>.',
          'Con nosotros, el asistente con IA corre sobre <a href="/saas/wazacrm/">WazaCRM</a>, desde US$ 349 al mes sin ITBMS. Meta e IA se cobran a precio de costo. El montaje para tu web está en <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA para tu web</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre chatbots con reglas y con IA',
        items: [
          { q: '¿Un chatbot con IA inventa respuestas?', a: 'Puede hacerlo si responde de memoria. Por eso se acota a tus documentos con una técnica llamada RAG: busca primero en tu información y responde solo con lo que encontró. Si el dato no está, debe decirlo y pasar la conversación a una persona.' },
          { q: '¿Puedo empezar con reglas y pasar a IA después?', a: 'Sí. Es un buen camino si aún no tienes tu información ordenada. Mientras usas reglas, anota las preguntas que el menú no resuelve. Esa lista es el punto de partida de la base de conocimiento del asistente.' },
          { q: '¿El cliente nota la diferencia?', a: 'Sí. Con reglas, el cliente elige opciones. Con IA, escribe como le escribiría a una persona. En los dos casos, el asistente debe identificarse como asistente virtual y ofrecer hablar con alguien de tu equipo.' },
          { q: '¿Cuál es más seguro con los datos de mis clientes?', a: 'Los dos manejan datos personales y deben cumplir la Ley 81. Con IA, además, revisa a dónde viaja la información y si el proveedor la usa para entrenar. Lo explicamos en <a href="/blog/es-seguro-usar-ia-con-los-datos-de-mi-empresa/">es seguro usar IA con los datos de tu empresa</a>.' },
          { q: '¿Cuál se monta más rápido?', a: 'Un menú corto de reglas se monta rápido. Un asistente con IA tarda más por el trabajo de reunir y aprobar tu información, no por la tecnología. Con WazaCRM, la puesta en marcha suele tomar unas 2 semanas, incluida la verificación del número en Meta.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbot con IA para tu web' },
          { slug: 'blog/chatbots-con-ia-para-negocios-en-panama', label: 'Chatbots con IA para negocios' },
          { slug: 'blog/que-es-un-agente-de-ia-para-whatsapp', label: 'Qué es un agente de IA para WhatsApp' },
          { slug: 'blog/quien-hace-chatbots-de-whatsapp-con-ia-en-panama', label: 'Quién hace chatbots de WhatsApp con IA' },
          { slug: 'blog/cuanto-cuesta-un-chatbot-de-whatsapp-en-panama', label: 'Cuánto cuesta un chatbot de WhatsApp' },
        ],
      },
    ],
    cta: {
      h2: '¿No sabes cuál te conviene? Revisamos tus mensajes contigo',
      wa: 'Hola, no sé si me conviene un chatbot con reglas o con IA. ¿Me ayudan a decidir?',
    },
  },

  /* ============================================================= *
   * 9 · Cuánto cuesta implementar IA en una empresa
   * ============================================================= */
  {
    slug: 'blog/cuanto-cuesta-implementar-inteligencia-artificial-en-una-empresa',
    parent,
    title: '¿Cuánto cuesta implementar IA en una empresa en Panamá?',
    description: 'Cuánto cuesta implementar IA en una empresa en Panamá: de qué se compone el precio, qué lo sube, cómo se cobra el consumo de los modelos y cómo se paga.',
    h1: '¿Cuánto cuesta implementar inteligencia artificial en una empresa en Panamá?',
    breadcrumb: 'Cuánto cuesta implementar IA',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'Implementar IA en una empresa en Panamá cuesta, con Elemento Web, desde US$ 2,900 por proyecto. A eso se suma el consumo de los modelos, que se paga por uso. Si lo que necesitas es un agente que atienda por WhatsApp, WazaCRM parte de US$ 349 al mes. El monto final depende de cuántos procesos, integraciones y documentos entren.',
      'Los precios están en dólares y no incluyen ITBMS (7 %). Abajo va de qué se compone el costo y qué lo sube o lo baja.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: '¿De qué se compone el costo de implementar IA?',
        intro: 'Son cinco partes. Una cotización seria las separa para que sepas qué pagas una vez y qué pagas cada mes.',
        items: [
          { h3: 'El proyecto', text: 'Diagnóstico, base de conocimiento con tus documentos, integraciones con tus sistemas, controles humanos y paso a producción. Se paga una vez, por etapas.' },
          { h3: 'El consumo de los modelos', text: 'Cada pregunta y cada respuesta consume el modelo de IA. Se factura por uso, aparte del proyecto, y sube o baja con el volumen.' },
          { h3: 'Las licencias que ya tienes', text: 'Tu CRM, tu ERP o Google Workspace siguen con sus propias licencias. La IA se conecta a ellos; no los reemplaza.' },
          { h3: 'Los mensajes de Meta', text: 'Si la IA atiende por WhatsApp, Meta cobra por mensaje según la categoría. Lo explicamos en <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje</a>.' },
          { h3: 'La operación', text: 'Revisar la calidad de las respuestas, actualizar documentos y vigilar el consumo. Puede hacerlo tu equipo o el proveedor como servicio.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué sube o baja el precio de un proyecto de IA?',
        paragraphs: [
          'Lo que más pesa es el <strong>número de procesos</strong>. Un asistente que responde sobre tu manual interno es un proyecto. Sumarle cotizaciones, aprobaciones y conexión con el ERP es otro tamaño.',
          'Después vienen las <strong>integraciones</strong>. Conectar con un sistema que tiene API documentada es más sencillo que con un sistema viejo sin ella. Muchas conexiones se resuelven con <a href="/blog/que-es-n8n-y-para-que-sirve/">n8n</a>, sin cambiar lo que ya usas.',
          'También pesa el <strong>estado de tu documentación</strong>. Si tus políticas están al día y en un solo lugar, el trabajo baja. Si están contradictorias, alguien tiene que ordenarlas primero, y eso no lo hace la IA.',
          'Por último, el <strong>volumen</strong>: cuántas personas la usan y cuántas preguntas al mes. Eso mueve sobre todo el consumo de los modelos, no el proyecto.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo se cobra el consumo de los modelos de IA?',
        paragraphs: [
          'Los proveedores de modelos cobran por <strong>tokens</strong>, que son pedazos de texto. Se cuentan los que entran (tu pregunta y los fragmentos de documentos que se le pasan al modelo) y los que salen (la respuesta).',
          'Por eso el consumo depende del volumen y del tamaño de las respuestas. Una respuesta corta con la cita del documento consume menos que un informe largo.',
          'En nuestros proyectos, el consumo se factura por uso, aparte del proyecto. El reporte mensual te dice cuánto se consumió, para que no haya sorpresas.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo se paga un proyecto de IA con nosotros?',
        intro: 'El mismo esquema por etapas del resto de nuestros proyectos.',
        items: [
          { h3: '1. Diagnóstico sin costo', text: 'Mapeamos tus procesos y te decimos dónde una IA ahorra más horas. Con eso armamos la cotización por escrito.' },
          { h3: '2. 50 % para arrancar', text: 'Se diseña la arquitectura y se monta un piloto sobre un solo proceso real y medible.' },
          { h3: '3. 30 % al ver el piloto funcionando', text: 'Lo pruebas con preguntas y tareas reales antes de seguir.' },
          { h3: '4. 20 % para pasar a producción', text: 'Con el piloto validado, entra a producción con sus integraciones y sus controles humanos.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Proyecto a medida o suscripción mensual?',
        paragraphs: [
          'Si lo que necesitas es atender clientes por WhatsApp, Instagram y la web, no hace falta un proyecto a medida. <a href="/saas/wazacrm/">WazaCRM</a> es una suscripción desde <strong>US$ 349 al mes</strong>, con el agente, la bandeja y el embudo de ventas. Los mensajes de Meta y el consumo de IA van aparte, a precio de costo.',
          'Si necesitas una IA que trabaje con tus documentos internos y ejecute tareas en tu CRM, ERP o correo, eso es un proyecto. Parte de <strong>US$ 2,900</strong> más el consumo de los modelos. El detalle está en <a href="/inteligencia-artificial-para-empresas-panama/">IA para empresas</a>.',
          'Si tu empresa es pequeña y quieres ver por dónde empezar, lee <a href="/blog/inteligencia-artificial-para-pequenas-empresas-en-panama/">IA para pequeñas empresas en Panamá</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué preparar para pedir una cotización de IA?',
        intro: 'Con esto, cualquier proveedor puede darte un precio cerrado y no un rango al aire.',
        items: [
          'El proceso que más horas te quita, descrito en un párrafo',
          'Los sistemas que usas hoy: CRM, ERP, correo, hojas de cálculo, WhatsApp',
          'Los documentos que la IA debería conocer y dónde están guardados',
          'Cuántas personas la usarían y cuántas consultas esperas al mes',
          'Qué acciones deben pasar siempre por la aprobación de una persona',
          'Quién en tu empresa será el dueño interno del proyecto',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene gastar en IA todavía?',
        paragraphs: [
          'Cuando la información está desordenada. Una IA que lee documentos contradictorios responde con seguridad cosas equivocadas, y la gente le cree.',
          'Tampoco conviene sin un dueño interno. Alguien tiene que decidir qué es verdad cuando el sistema se equivoca. Si nadie va a hacer ese trabajo, mejor ordenar primero y automatizar después.',
          'Antes de invertir, revisa también cómo se protegen tus datos. Lo explicamos en <a href="/blog/es-seguro-usar-ia-con-los-datos-de-mi-empresa/">es seguro usar IA con los datos de tu empresa</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo de implementar IA',
        items: [
          { q: '¿Por qué el consumo de los modelos va aparte?', a: 'Porque depende de cuánto uses la IA, y eso cambia cada mes. Separarlo te deja ver el costo real del uso y no esconderlo en una tarifa fija. En nuestros proyectos se factura por uso y aparece en el reporte mensual.' },
          { q: '¿El diagnóstico tiene costo?', a: 'No. Mapeamos tus procesos, te decimos dónde una IA ahorra más horas y armamos la cotización por escrito, con el alcance y los plazos. Si decides no seguir adelante, no pagas nada.' },
          { q: '¿Cuánto tarda en estar funcionando?', a: 'Empezamos con un piloto sobre un solo proceso, para que veas resultados sin comprometer toda la operación. El tiempo exacto depende del alcance y lo fijamos por escrito tras el diagnóstico. Un agente sobre WazaCRM suele estar en marcha en unas 2 semanas.' },
          { q: '¿Tengo que cambiar mis sistemas?', a: 'No. La IA se conecta a lo que ya usas, por API o con automatizaciones en n8n. Puede ser tu correo, CRM, ERP, hojas de cálculo o WhatsApp. Las licencias de esos sistemas siguen corriendo por tu cuenta.' },
          { q: '¿Los precios incluyen ITBMS?', a: 'No. Todos nuestros precios están en dólares y no incluyen ITBMS (7 %). El proyecto parte de US$ 2,900 y WazaCRM de US$ 349 al mes, más los consumos por uso de cada caso.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'inteligencia-artificial-para-empresas-panama', label: 'IA para empresas' },
          { slug: 'saas/wazacrm', label: 'WazaCRM' },
          { slug: 'precios', label: 'Precios' },
          { slug: 'blog/es-seguro-usar-ia-con-los-datos-de-mi-empresa', label: 'Es seguro usar IA con tus datos' },
          { slug: 'blog/cuanto-cuesta-automatizar-procesos-con-n8n-en-panama', label: 'Cuánto cuesta automatizar con n8n' },
        ],
      },
    ],
    cta: {
      h2: 'Pide el diagnóstico y recibe una cotización por escrito',
      wa: 'Hola, quiero saber cuánto costaría implementar IA en mi empresa. ¿Me ayudan con el diagnóstico?',
    },
  },

  /* ============================================================= *
   * 10 · Es seguro usar IA con los datos de mi empresa
   * ============================================================= */
  {
    slug: 'blog/es-seguro-usar-ia-con-los-datos-de-mi-empresa',
    parent,
    title: '¿Es seguro usar IA con los datos de mi empresa?',
    description: 'Cuándo es seguro usar IA con los datos de tu empresa: qué es RAG, qué hacen los proveedores con tus datos, los riesgos reales y qué preguntar al contratar.',
    h1: '¿Es seguro usar IA con los datos de mi empresa?',
    breadcrumb: 'Seguridad de datos con IA',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'Usar IA con los datos de tu empresa puede ser seguro, si controlas cuatro cosas. Qué datos entran, dónde se procesan, quién puede consultarlos y si el proveedor entrena con ellos. Las API de Anthropic y OpenAI, por defecto, no entrenan con tus datos. El riesgo real suele estar en las copias sueltas y en los permisos de más.',
      'Aquí explicamos cómo funciona una base de conocimiento privada, qué dicen los proveedores y qué preguntar antes de contratar.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es una base de conocimiento privada con RAG?',
        paragraphs: [
          'RAG significa generación aumentada por recuperación. En lugar de responder de memoria, la IA <strong>busca primero en tus documentos</strong> y responde solo con lo que encontró, citando de dónde salió.',
          'Tus documentos se guardan en una base propia del proyecto, no dentro del modelo. Cuando alguien pregunta, el sistema elige los fragmentos relevantes y solo esos se envían al modelo para redactar la respuesta.',
          'Esto importa para la seguridad por dos razones. El modelo no «aprende» tus documentos: los lee en el momento y no los retiene como parte de su entrenamiento. Y puedes controlar qué fragmentos ve cada persona, según sus permisos.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué hacen los proveedores de modelos con tus datos?',
        paragraphs: [
          'Depende del producto. Las versiones de consumo (las aplicaciones gratuitas o personales) y las API para empresas suelen tener políticas distintas. Por eso hay que leer la del producto exacto que se usa.',
          'Anthropic dice que, por defecto, no usa las entradas ni las salidas de sus productos comerciales, incluida su API, para entrenar sus modelos. La excepción es si reportas comentarios o eliges permitirlo. Lo dice su <a href="' + ANTHROPIC_DATA + '" rel="noopener">centro de privacidad</a>, actualizado el 18 de agosto de 2026 (consultado el 23 de octubre de 2026).',
          'OpenAI dice que los datos enviados a su API no se usan para entrenar ni mejorar sus modelos, salvo que optes por compartirlos. Por defecto, guarda registros de monitoreo de abuso hasta 30 días. Lo dice su <a href="' + OPENAI_DATA + '" rel="noopener">guía de datos de la API</a> (consultada el 23 de octubre de 2026).',
          'Estas políticas cambian. Pídele a tu proveedor que te diga qué modelo usa, bajo qué contrato y con qué retención, y vuelve a revisarlo cada cierto tiempo.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Cuáles son los riesgos reales y cómo se controlan?',
        intro: 'Seis riesgos frecuentes. Ninguno se resuelve solo con elegir un buen modelo.',
        items: [
          { h3: 'Copiar datos en herramientas de consumo', text: 'Un empleado pega una lista de clientes en una aplicación gratuita de IA. Se controla con una política interna clara y con una herramienta aprobada para el trabajo.' },
          { h3: 'Permisos de más', text: 'Si todos pueden preguntar todo, alguien verá la planilla que no le toca. Se controla con permisos por rol: cada persona solo obtiene respuestas de lo que ya puede ver.' },
          { h3: 'Datos que no hacen falta', text: 'Cargar todo «por si acaso» aumenta el riesgo. Se controla cargando solo lo necesario para cada proceso y excluyendo datos sensibles que no aportan.' },
          { h3: 'Registros que nadie revisa', text: 'Las conversaciones quedan guardadas. Se controla definiendo cuánto tiempo se conservan, quién puede verlas y cuándo se borran.' },
          { h3: 'Acciones sin control', text: 'Una IA que envía correos o mueve dinero sin revisión puede causar daño. Se controla con aprobación humana en las acciones sensibles y con auditoría de lo que hizo.' },
          { h3: 'Datos que salen del país', text: 'Muchos modelos corren fuera de Panamá. La Ley 81 tiene reglas para ese tratamiento transfronterizo; las vemos abajo.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué dice la Ley 81 sobre usar IA con datos personales?',
        paragraphs: [
          'Si los datos son de personas (clientes, empleados, pacientes), aplica la <a href="' + LEY81 + '" rel="noopener">Ley 81 de 2019</a> (consultada el 23 de octubre de 2026). Su artículo 2 pide recolectar solo lo necesario y tomar medidas técnicas y organizativas de seguridad.',
          'El artículo 5 regula el tratamiento transfronterizo de datos confidenciales o sensibles. Lo permite si quien los almacena o custodia cumple estándares iguales o superiores a los de la ley. Entre las excepciones está el consentimiento del titular.',
          'El artículo 19 protege a las personas de decisiones que les afecten basadas solo en un tratamiento automatizado. Hay excepciones, como su consentimiento o un contrato. Lo explicamos completo en <a href="/blog/ley-81-proteccion-de-datos-chatbots-panama/">qué exige la Ley 81 a un chatbot o CRM</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué preguntarle a un proveedor de IA sobre tus datos?',
        intro: 'Pide las respuestas por escrito. Si no las sabe responder, es una señal.',
        items: [
          '¿Qué modelo de IA usa y bajo qué contrato: API para empresas o aplicación de consumo?',
          '¿El proveedor del modelo usa mis datos para entrenar? ¿Dónde está escrito?',
          '¿Dónde se guardan mis documentos y en qué país se procesan?',
          '¿Cuánto tiempo se conservan las conversaciones y quién puede verlas?',
          '¿Cada persona ve solo lo que ya tiene permiso de ver en mi empresa?',
          '¿Qué acciones esperan la aprobación de una persona?',
          '¿Queda un registro de qué consultó, qué respondió y qué ejecutó la IA?',
          '¿Puedo exportar y borrar mis datos si termino el contrato?',
          '¿Qué pasa y en cuánto tiempo me avisan si hay una filtración?',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo lo hacemos en Elemento Web?',
        paragraphs: [
          'En nuestros proyectos de <a href="/inteligencia-artificial-para-empresas-panama/">IA para empresas</a>, trabajamos sobre un entorno privado. Tus documentos se usan solo para responder a tu empresa y no se usan para entrenar modelos públicos.',
          'Cada persona solo obtiene respuestas de lo que ya tiene permiso de ver. Pagos, correos externos y cambios críticos esperan la aprobación de una persona. Queda registro de qué consultó, qué respondió y qué ejecutó la IA.',
          'En <a href="/saas/wazacrm/">WazaCRM</a>, el agente usa Claude, de Anthropic, y responde solo desde los documentos que apruebas. Puedes exportar tus contactos y conversaciones cuando quieras. Cómo tratamos los datos de quien nos escribe está en nuestra <a href="/politica-de-privacidad/">política de privacidad</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre IA y datos de empresa',
        items: [
          { q: '¿Puedo usar la versión gratuita de un chatbot de IA con datos de clientes?', a: 'No es buena idea. Las aplicaciones de consumo tienen políticas distintas a las de las API para empresas, y lo que pegas ahí queda fuera de tu control. Para datos de clientes o internos, usa una herramienta aprobada, con contrato y permisos.' },
          { q: '¿La IA aprende mis documentos y se los cuenta a otros?', a: 'Con RAG, no. Los documentos viven en tu base de conocimiento y el modelo solo lee los fragmentos necesarios para responder. Si el contrato del modelo excluye el entrenamiento con tus datos, tampoco pasan a formar parte del modelo.' },
          { q: '¿Es más seguro un modelo instalado en mis propios servidores?', a: 'Puede darte más control sobre dónde están los datos, pero no es más seguro por sí solo. Tú asumes el mantenimiento, las actualizaciones y la seguridad del servidor. Para muchas empresas, una API con buen contrato y permisos por rol es suficiente.' },
          { q: '¿Qué datos no debería cargar nunca?', a: 'Los que no aportan a la tarea. Contraseñas, números de tarjeta y datos de salud que no hacen falta no deben entrar. La Ley 81 pide recolectar solo lo adecuado y limitado al mínimo necesario para la finalidad.' },
          { q: '¿Necesito un oficial de protección de datos?', a: 'El Decreto Ejecutivo 285 de 2021 dice que para el sector privado no es obligatorio, pero que se toma en cuenta al graduar sanciones. Lo vemos en <a href="/blog/ley-81-proteccion-de-datos-chatbots-panama/">la guía de la Ley 81</a>.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'inteligencia-artificial-para-empresas-panama', label: 'IA para empresas' },
          { slug: 'blog/ley-81-proteccion-de-datos-chatbots-panama', label: 'Ley 81 para chatbots y CRM' },
          { slug: 'blog/cuanto-cuesta-implementar-inteligencia-artificial-en-una-empresa', label: 'Cuánto cuesta implementar IA' },
          { slug: 'blog/inteligencia-artificial-para-pequenas-empresas-en-panama', label: 'IA para pequeñas empresas' },
          { slug: 'politica-de-privacidad', label: 'Política de privacidad' },
        ],
      },
    ],
    cta: {
      h2: '¿Revisamos cómo se protegerían tus datos?',
      wa: 'Hola, quiero usar IA en mi empresa y me preocupa la seguridad de los datos. ¿Me ayudan a revisarlo?',
    },
  },

  /* ============================================================= *
   * 11 · Ley 81 de protección de datos para chatbots y CRM
   * ============================================================= */
  {
    slug: 'blog/ley-81-proteccion-de-datos-chatbots-panama',
    parent,
    title: 'Ley 81 de protección de datos: chatbots y CRM en Panamá',
    description: 'Qué exige la Ley 81 de 2019 y su Decreto Ejecutivo 285 a un chatbot o CRM en Panamá: consentimiento, derechos ARCO, seguridad, filtraciones y sanciones.',
    h1: 'Ley 81 de protección de datos: qué exige a un chatbot o CRM en Panamá',
    breadcrumb: 'Ley 81 para chatbots y CRM',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'La Ley 81 de 2019 aplica a cualquier chatbot o CRM que trate datos personales en Panamá. Exige una base legal, como el consentimiento informado, y usar los datos solo para la finalidad declarada. También pide medidas de seguridad y atender los derechos de acceso, rectificación, cancelación, oposición y portabilidad. Su reglamento pide avisar de una filtración en 72 horas.',
      'Abajo citamos los artículos que leímos en el texto oficial y qué significan para tu WhatsApp, tu chatbot y tu CRM. Esto no es asesoría legal; confírmalo con tu abogado.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es la Ley 81 y desde cuándo rige?',
        paragraphs: [
          'La <a href="' + LEY81 + '" rel="noopener">Ley 81 de 26 de marzo de 2019</a> fija los principios, derechos y obligaciones para tratar datos de personas naturales (artículo 1). Usamos el texto de Legispan, de la Asamblea Nacional, publicado en el sitio de la Superintendencia de Bancos y consultado el 23 de octubre de 2026.',
          'La reglamenta el <a href="' + DE285 + '" rel="noopener">Decreto Ejecutivo 285 de 28 de mayo de 2021</a>, publicado en la Gaceta Oficial 29296-A y consultado el 23 de octubre de 2026. Sus considerandos indican que la ley entró en vigor el 29 de marzo de 2021.',
          'La autoridad de control es la Autoridad Nacional de Transparencia y Acceso a la Información, ANTAI (decreto, artículo 4).',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué aplica a tu chatbot y a tu CRM?',
        paragraphs: [
          'La ley llama <strong>dato personal</strong> a cualquier información que identifica o hace identificable a una persona natural (artículo 4). Un nombre, un número de WhatsApp o una consulta ya lo son.',
          'Llama <strong>tratamiento</strong> a recolectar, almacenar, organizar, transferir o usar datos, de forma automatizada o no (artículo 4). Un chatbot que pide el nombre y un CRM que guarda el historial hacen justo eso.',
          'El decreto también la aplica a tratamientos hechos en una actividad comercial por internet, dirigidos al mercado panameño (artículo 2).',
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué exige la Ley 81 a un chatbot o CRM?',
        intro: 'Las obligaciones que más tocan a un asistente de WhatsApp y a un CRM, con su artículo.',
        items: [
          { h3: 'Base legal', text: 'Hace falta al menos una condición: consentimiento, un contrato, una obligación legal o una ley especial (Ley 81, artículo 6). El consentimiento debe poder rastrearse y se puede revocar.' },
          { h3: 'Informar al recoger datos', text: 'Debes decir quién eres, para qué usas los datos, cuánto los guardas y cómo ejercer los derechos (decreto, artículo 14). En pantallas pequeñas puedes informar por capas (artículo 16).' },
          { h3: 'Solo para la finalidad declarada', text: 'Otro uso requiere nuevo consentimiento u otra base legal (Ley 81, artículo 11). Usar la lista de consultas para campañas es otro fin.' },
          { h3: 'Solo los datos necesarios', text: 'Los datos deben ser adecuados, pertinentes y limitados al mínimo necesario (Ley 81, artículo 2). Si el bot no necesita la cédula, que no la pida.' },
          { h3: 'Seguridad y confidencialidad', text: 'Medidas técnicas y organizativas para la confidencialidad, integridad y disponibilidad de los datos (decreto, artículo 36). Quien accede a ellos debe guardar reserva (Ley 81, artículo 9).' },
          { h3: 'Datos de salud', text: 'Son datos sensibles (Ley 81, artículo 4). El consentimiento para tratarlos debe ser previo, irrefutable y expreso (artículo 8). Clave si tu bot atiende una clínica.' },
          { h3: 'Transferencias a terceros', text: 'Requieren consentimiento previo, informado e inequívoco, salvo excepciones (Ley 81, artículo 25). Quien transfiere bases de datos debe llevar un registro (artículo 31; decreto, artículo 35).' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué derechos tienen tus clientes y en qué plazos?',
        paragraphs: [
          'La ley reconoce los derechos de <strong>acceso, rectificación, cancelación, oposición y portabilidad</strong> (artículo 15). Ningún acuerdo entre partes puede limitarlos (artículo 21).',
          'Si una persona pide su información, debes entregarla en no más de diez días hábiles (artículo 16). Los datos erróneos o incompletos se corrigen dentro de cinco días hábiles (artículo 17). Atender estas solicitudes es gratuito (artículo 16).',
          'Si el tratamiento es para mercadeo, la persona puede oponerse en todo momento (decreto, artículo 29). Eso toca directo a las campañas de WhatsApp. Tu CRM debe dejarte encontrar, corregir, exportar y borrar los datos de una persona.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué pasa si hay una filtración de datos?',
        paragraphs: [
          'El decreto pide notificar a la ANTAI y a los titulares afectados cuando una violación de seguridad represente un riesgo. El plazo es de setenta y dos horas desde que se conoce el incidente (artículo 37).',
          'La notificación debe decir qué pasó, qué datos se comprometieron, qué se corrigió y qué puede hacer la persona (artículo 37). Toda violación se documenta con fecha, motivo, hechos y medidas (artículo 38).',
          'Si un proveedor custodia tus datos, como la plataforma de tu chatbot, debe avisarte de inmediato (artículo 37). Pídelo por escrito en el contrato.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué sanciones prevé la Ley 81?',
        paragraphs: [
          'Las infracciones son leves, graves o muy graves (artículo 38). Tratar datos sin el consentimiento requerido o guardarlos sin seguridad adecuada son infracciones graves (artículo 40).',
          'La ANTAI fija las multas según la gravedad, desde mil hasta diez mil balboas (artículo 36). Las faltas muy graves pueden llevar a la clausura de registros o a suspender el tratamiento (artículo 43).',
          'El responsable también debe indemnizar el daño que cause (artículo 37). Para el sector privado, el oficial de protección de datos no es obligatorio, pero cuenta al graduar sanciones (decreto, artículo 42).',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué revisar en tu chatbot o CRM esta semana?',
        intro: 'Una lista práctica para tu abogado y tu proveedor. No sustituye una revisión legal.',
        items: [
          'El primer mensaje del asistente dice quién eres y enlaza tu política de privacidad',
          'Tu política de privacidad explica cómo ejercer los derechos',
          'El bot pide solo los datos que necesita',
          'Si atiendes salud, el consentimiento es previo, expreso y queda registrado',
          'Las campañas solo van a quien aceptó recibirlas, y pueden darse de baja',
          'Puedes encontrar, corregir, exportar y borrar los datos de una persona',
          'Solo quien lo necesita tiene acceso a las conversaciones',
          'El contrato con tu proveedor dice dónde se guardan los datos y que te avisará de una filtración',
          'Tienes un procedimiento escrito para notificar una filtración en 72 horas',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo ayuda Elemento Web con esto?',
        paragraphs: [
          'No damos asesoría legal. Montamos el asistente y el CRM para que cumplir sea más fácil: el asistente se identifica como tal, pide solo lo necesario y pasa a una persona lo delicado.',
          'En <a href="/saas/wazacrm/">WazaCRM</a> puedes exportar contactos y conversaciones cuando quieras. Eso facilita atender el acceso y la portabilidad. En proyectos de <a href="/inteligencia-artificial-para-empresas-panama/">IA para empresas</a>, cada persona solo ve lo que su rol permite.',
          'Si te preocupa a dónde viajan los datos con IA, lee <a href="/blog/es-seguro-usar-ia-con-los-datos-de-mi-empresa/">es seguro usar IA con los datos de tu empresa</a>. Para elegir proveedor, mira <a href="/blog/quien-hace-chatbots-de-whatsapp-con-ia-en-panama/">quién hace chatbots de WhatsApp con IA</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre la Ley 81 y los chatbots',
        items: [
          { q: '¿Necesito consentimiento para responder a quien me escribe por WhatsApp?', a: 'El artículo 8 de la Ley 81 no exige autorización para datos necesarios en una relación comercial establecida, para atender o vender lo pactado. Cuándo aplica a tu caso y cuándo necesitas consentimiento expreso debe confirmarlo tu abogado.' },
          { q: '¿Puedo usar los números de mis clientes para campañas?', a: 'Solo si el mercadeo está dentro de los fines autorizados o tienes otra base legal. La persona puede oponerse en todo momento al uso para mercadeo (decreto, artículo 29). Además, Meta exige que el cliente haya aceptado recibir tus mensajes.' },
          { q: '¿Aplica la ley si mi proveedor guarda los datos fuera de Panamá?', a: 'Sí. El artículo 5 permite tratar fuera del país datos confidenciales o sensibles si el custodio cumple estándares iguales o superiores a los de la ley. Hay excepciones, como el consentimiento del titular o la ejecución de un contrato.' },
          { q: '¿En cuánto tiempo debo responder si un cliente pide sus datos?', a: 'En un plazo no mayor de diez días hábiles desde la solicitud, según el artículo 16 de la Ley 81. Si pide corregir datos erróneos o incompletos, el artículo 17 da cinco días hábiles. Entregar la información es gratuito.' },
          { q: '¿Quién supervisa el cumplimiento?', a: 'La Autoridad Nacional de Transparencia y Acceso a la Información (ANTAI). Puede investigar quejas y sancionar al responsable y al custodio de la base de datos (Ley 81, artículo 36). Si tu sector tiene un regulador propio, también interviene.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Dónde leer la norma completa?',
        paragraphs: [
          'Lee los dos textos completos: la <a href="' + LEY81 + '" rel="noopener">Ley 81 de 2019</a> y el <a href="' + DE285 + '" rel="noopener">Decreto Ejecutivo 285 de 2021</a>, consultados el 23 de octubre de 2026. Si tu sector tiene regulador propio, puede haber reglas adicionales.',
          '<strong>Esto no es asesoría legal; confírmalo con tu abogado.</strong>',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'politica-de-privacidad', label: 'Política de privacidad' },
          { slug: 'saas/wazacrm', label: 'WazaCRM' },
          { slug: 'blog/es-seguro-usar-ia-con-los-datos-de-mi-empresa', label: 'Es seguro usar IA con tus datos' },
          { slug: 'blog/que-es-un-agente-de-ia-para-whatsapp', label: 'Qué es un agente de IA para WhatsApp' },
          { slug: 'blog/crm-con-whatsapp-para-vender-mas-en-panama', label: 'CRM con WhatsApp' },
        ],
      },
    ],
    cta: {
      h2: '¿Revisamos tu chatbot o CRM con esta lista?',
      wa: 'Hola, quiero revisar si mi chatbot o CRM está preparado para la Ley 81. ¿Me ayudan?',
    },
  },
];
