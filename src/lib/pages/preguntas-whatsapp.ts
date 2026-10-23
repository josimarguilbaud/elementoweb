/* PREGUNTAS — grupo WhatsApp (fase 2 de páginas de pregunta, 23-oct-2026).
   Cinco preguntas de comprador sobre WhatsApp: costo de un chatbot, app o API, tarifas de Meta,
   límites de envío y bloqueos. Cifras de terceros solo de páginas abiertas el 23-oct-2026 y
   enlazadas en el texto: developers.facebook.com/docs/whatsapp/pricing (y su hoja de tarifas en USD
   vigente desde el 1-oct-2026, grupo «Rest of Latin America»), /docs/whatsapp/messaging-limits,
   /docs/whatsapp/cloud-api/phone-numbers, /docs/whatsapp/embedded-signup/custom-flows/onboarding-business-app-users,
   whatsappbusiness.com/es-la/policy/ y whatsapp.com/legal/terms-of-service.
   Precios propios: WazaCRM desde $349 al mes e IA para empresas desde $2,900 (confirmados);
   WhatsApp marketing desde $150 al mes es referencia propuesta (fuera del lead). Sin ITBMS. */
import type { PageData } from '../types';

const parent = { slug: 'blog', label: 'Blog' };

const META_PRECIOS = 'https://developers.facebook.com/docs/whatsapp/pricing';
const META_LIMITES = 'https://developers.facebook.com/docs/whatsapp/messaging-limits';
const META_POLITICA = 'https://whatsappbusiness.com/es-la/policy/';

export const preguntasWhatsapp: PageData[] = [
  /* =============================================================
   * 1. ¿Cuánto cuesta un chatbot de WhatsApp en Panamá?
   * ============================================================= */
  {
    slug: 'blog/cuanto-cuesta-un-chatbot-de-whatsapp-en-panama',
    parent,
    title: '¿Cuánto cuesta un chatbot de WhatsApp en Panamá?',
    description: 'Cuánto cuesta un chatbot de WhatsApp en Panamá: plataforma, implementación, mensajes de Meta e IA. Precios publicados y un ejemplo para estimar tu mes.',
    h1: '¿Cuánto cuesta un chatbot de WhatsApp en Panamá?',
    breadcrumb: 'Costo de un chatbot de WhatsApp',
    category: 'WhatsApp',
    date: '2026-10-23',
    lead: [
      'Un chatbot de WhatsApp en Panamá cuesta la suma de tres partes: la plataforma, la implementación y el consumo. En Elemento Web la plataforma es WazaCRM, desde US$ 349 al mes, y en ese plan la entrega va incluida: lo dejamos montado y entrenado. Los mensajes de Meta y el uso de la IA se pagan aparte, por uso y a precio de costo.',
      'Si necesitas un asistente de IA a la medida de tus procesos, el proyecto parte de US$ 2,900 más el consumo de los modelos. Abajo ves qué entra en cada parte y cómo estimar lo que pagarías al mes.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: '¿De qué se compone el precio de un chatbot de WhatsApp?',
        intro: 'Cualquier cotización seria separa estas tres partes. Si una no aparece, pregunta dónde está.',
        items: [
          { h3: '1. La plataforma', text: 'El software donde vive el chatbot: la bandeja, el embudo, la IA y la conexión con la API oficial. Se paga al mes. En nuestro caso es WazaCRM, desde US$ 349 al mes en el plan Starter.' },
          { h3: '2. La implementación', text: 'El trabajo de dejarlo funcionando con tu negocio: verificar el número ante Meta, cargar tus precios y horarios, definir cuándo pasa a una persona y probarlo. Con WazaCRM va incluida en la mensualidad; solo se cotiza aparte una integración a medida, por ejemplo con tu ERP.' },
          { h3: '3. El consumo', text: 'Lo que cobra Meta por cada mensaje entregado y lo que cuesta el modelo de IA por cada respuesta. Depende de tu volumen. Lo pagas por uso, sin margen de la agencia.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cobra Meta por los mensajes del chatbot?',
        paragraphs: [
          'Meta cobra por mensaje entregado, no por mensaje enviado. Panamá está en el grupo «Rest of Latin America» de su <a href="' + META_PRECIOS + '" rel="noopener">página de precios de la plataforma de WhatsApp Business</a> (consultada el 23 de octubre de 2026).',
          'Según su hoja de tarifas en dólares, vigente desde el 1 de octubre de 2026, para Panamá cada mensaje de <strong>marketing</strong> cuesta US$ 0.074. Cada mensaje de <strong>utilidad</strong>, de <strong>autenticación</strong> o de <strong>servicio</strong> cuesta US$ 0.0113.',
          'El chatbot responde casi siempre con mensajes de servicio: respuestas libres a quien te escribió. <strong>Cada número tiene 1,000 mensajes de servicio gratis al mes</strong>; desde el 1,001 se cobran. Ese cambio rige desde el 1 de octubre de 2026 y el cupo no se acumula de un mes a otro.',
          'El detalle de cada categoría está en <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje de WhatsApp en Panamá</a>.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo estimar lo que pagarías al mes?',
        intro: 'Un ejemplo con números redondos, para que hagas el tuyo con tu volumen real. Las tarifas de Meta son las publicadas el 23 de octubre de 2026.',
        items: [
          { h3: 'Cuenta tus respuestas', text: 'Supón que tu negocio responde 3,000 mensajes al mes por WhatsApp. Los primeros 1,000 son gratis. Quedan 2,000 mensajes de servicio por cobrar.' },
          { h3: 'Multiplica por la tarifa', text: '2,000 mensajes por US$ 0.0113 dan US$ 22.60 al mes de Meta por atención. Si además envías 500 avisos de utilidad, como «tu pedido está listo», suma US$ 5.65.' },
          { h3: 'Agrega las campañas, si las haces', text: 'Una campaña de marketing a 1,000 clientes con permiso cuesta US$ 74 en mensajes. Muchas empresas no hacen campañas: el chatbot solo atiende.' },
          { h3: 'Suma la IA y la plataforma', text: 'El consumo del modelo de IA depende del largo de las conversaciones y se ve en tu panel. A eso se suma la licencia de WazaCRM, desde US$ 349 al mes.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué hace que un chatbot cueste más?',
        paragraphs: [
          'El precio sube con el alcance, no con la palabra «IA». Un asistente que responde preguntas frecuentes con tus documentos es lo más simple. Cuesta más uno que <strong>agenda en tu calendario</strong>, consulta inventario, cobra con enlace de pago o se conecta a tu sistema contable.',
          'Si el chatbot debe leer o escribir en tu CRM, tu agenda o tu ERP, esa integración a medida parte de US$ 700, una vez. Lo explicamos en el <a href="/funcionalidades/agente-de-ventas-ia-whatsapp-panama/">agente de ventas con IA</a>.',
          'También pesa el volumen. Un negocio con 300 conversaciones al mes casi no pasa del cupo gratuito de Meta. Uno con 5,000 sí, y ahí conviene medir qué mensajes sobran.',
          'Cuando el proyecto toca varios sistemas internos, ya no es un chatbot: es un proyecto de <a href="/inteligencia-artificial-para-empresas-panama/">inteligencia artificial para tu empresa</a>, que parte de US$ 2,900 más el consumo de los modelos.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué un chatbot muy barato puede salir caro?',
        paragraphs: [
          'Hay herramientas que prometen un bot por pocos dólares conectándose al WhatsApp de tu celular. Las <a href="https://www.whatsapp.com/legal/terms-of-service?lang=es_LA" rel="noopener">Condiciones del servicio de WhatsApp</a> (consultadas el 23 de octubre de 2026) no permiten la mensajería automática ni la masiva fuera de los canales autorizados.',
          'El riesgo no es una multa: es perder el número. Si ese número es el que tus clientes tienen guardado, perderlo te deja sin canal de ventas. Por eso trabajamos solo con la API oficial; somos Tech Provider verificado por Meta.',
          'La otra trampa es el chatbot que inventa. Uno bien hecho responde solo con tu información aprobada y, si no sabe, lo dice y pasa la conversación a una persona. Así funciona nuestro <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué pedir en la cotización de un chatbot?',
        intro: 'Sirve con nosotros o con cualquier proveedor. Pide las respuestas por escrito.',
        items: [
          '¿Usa la API oficial de WhatsApp Business o una conexión no oficial?',
          '¿Cuánto es la mensualidad y qué incluye?',
          '¿Qué incluye la entrega y qué se cobra aparte?',
          '¿Los mensajes de Meta se pagan desde mi cuenta o me los revenden con margen?',
          '¿Cómo se cobra el consumo de la IA y dónde lo veo?',
          '¿Qué hace el chatbot cuando no sabe una respuesta?',
          '¿Puedo ver y exportar las conversaciones y los contactos?',
          '¿Qué pasa con mi número si cambio de proveedor?',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Hay un pago único o siempre es mensual?', a: 'Con WazaCRM es mensual: la entrega va incluida y solo una integración a medida se cotiza aparte, una vez. La plataforma es mensual porque corre en servidores, se actualiza y guarda tus conversaciones. Los mensajes de Meta y la IA se pagan por uso, mes a mes.' },
          { q: '¿Los precios incluyen ITBMS?', a: 'No. Los precios de Elemento Web se publican en dólares y sin ITBMS (7 %), que se suma en la factura. Las tarifas de Meta son las de su hoja de tarifas en dólares.' },
          { q: '¿Cuánto tarda en estar funcionando?', a: 'Alrededor de 2 semanas, incluida la verificación de tu número ante Meta. Los tiempos de Meta no dependen de nosotros. En ese plazo cargamos tu información, definimos cuándo pasa a una persona y lo probamos antes de abrirlo a tus clientes.' },
          { q: '¿Cuánto me cobra Meta si casi no tengo mensajes?', a: 'Si respondes menos de 1,000 mensajes de servicio al mes por número, Meta no te cobra esa atención, según su página de precios consultada el 23 de octubre de 2026. Las plantillas que tú inicias sí se cobran desde el primer mensaje.' },
          { q: '¿El chatbot sirve también para Instagram y la web?', a: 'Sí. WazaCRM une WhatsApp, Instagram, Facebook y el chat de tu web en una bandeja. Qué canales entran depende del plan: Instagram, por ejemplo, no está en el plan de entrada. Los planes están en la página de WazaCRM.' },
        ],
      },
      {
        type: 'related',
        h2: 'Sigue leyendo',
        items: [
          { slug: 'blog/whatsapp-business-o-api-cual-necesita-tu-negocio', label: 'WhatsApp Business o API: cuál necesitas' },
          { slug: 'blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama', label: 'Cuánto cobra Meta por mensaje' },
          { slug: 'blog/chatbot-con-reglas-o-con-ia-cual-conviene', label: 'Chatbot con reglas o con IA' },
          { slug: 'blog/chatbots-con-ia-para-negocios-en-panama', label: 'Chatbots con IA para negocios' },
          { slug: 'saas/wazacrm', label: 'WazaCRM' },
          { slug: 'soluciones', label: 'Paquete Clientes por WhatsApp' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu chatbot de WhatsApp', wa: 'Hola, quiero saber cuánto me costaría un chatbot de WhatsApp. ¿Me ayudan?' },
  },

  /* =============================================================
   * 2. WhatsApp Business o API: cuál necesita tu negocio
   * ============================================================= */
  {
    slug: 'blog/whatsapp-business-o-api-cual-necesita-tu-negocio',
    parent,
    title: 'WhatsApp Business o API: diferencias y cuál necesitas',
    description: 'Diferencias entre la app WhatsApp Business y la API oficial: quién responde, volumen, IA, envíos y costo. Señales para saber cuál necesita tu negocio.',
    h1: '¿WhatsApp Business o la API? Diferencias y cuál necesita tu negocio',
    breadcrumb: 'WhatsApp Business o API',
    category: 'WhatsApp',
    date: '2026-10-23',
    lead: [
      'Necesitas la app WhatsApp Business si atiendes tú, o una o dos personas, desde el celular y con un volumen que alcanzas a responder. Necesitas la API si varias personas atienden el mismo número, si quieres un asistente de IA, campañas a clientes con permiso o conectar WhatsApp con tu CRM. La API cobra por mensaje; la app, no.',
      'No es una decisión para siempre. Muchos negocios empiezan con la app y pasan a la API cuando los mensajes los superan. Esta guía te da las diferencias y las señales para saber cuándo cambiar.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es cada una?',
        paragraphs: [
          'La <strong>app WhatsApp Business</strong> es la aplicación que instalas en el celular. WhatsApp la presenta como <a href="https://whatsappbusiness.com/es-la/products/business-app/" rel="noopener">diseñada para pequeñas empresas</a> (consultado el 23 de octubre de 2026). Tiene perfil de empresa, catálogo y mensajes automáticos básicos.',
          'La <strong>API de WhatsApp Business</strong>, o plataforma, no es una app. Es una conexión que usa un software, como un CRM, para enviar y recibir mensajes de tu número. No la abres en el celular: la usas desde la herramienta que se conecta a ella.',
          'Las dos son oficiales de Meta. Lo que no es oficial son las extensiones y apps que «automatizan» tu WhatsApp personal o la app Business. Esas ponen el número en riesgo, como explicamos en <a href="/blog/por-que-bloquean-un-numero-de-whatsapp-business/">por qué bloquean un número de WhatsApp Business</a>.',
        ],
      },
      {
        type: 'cards',
        h2: '¿En qué se diferencian en el día a día?',
        intro: 'Seis puntos que deciden cuál te conviene.',
        items: [
          { h3: 'Quién responde', text: 'En la app responde quien tiene el celular o los dispositivos enlazados. En la API, varias personas atienden el mismo número desde una bandeja, cada una con sus conversaciones asignadas.' },
          { h3: 'Automatización e IA', text: 'La app trae saludo, mensaje de ausencia y respuestas guardadas. La API permite un asistente de IA que responde con tu información, agenda y pasa a una persona con el contexto.' },
          { h3: 'Mensajes que tú inicias', text: 'Con la API, escribirle primero a un cliente requiere una plantilla aprobada por Meta y su permiso previo. Es el camino oficial para campañas y avisos como «tu pedido está listo».' },
          { h3: 'Integración', text: 'La API se conecta con tu CRM, tu web, tu agenda o herramientas como n8n. Cada conversación queda registrada con su cliente, su etapa y su historial.' },
          { h3: 'Costo', text: 'La API cobra por mensaje entregado según la categoría. Para Panamá, una plantilla de marketing cuesta US$ 0.074 según la hoja de tarifas de Meta consultada el 23 de octubre de 2026.' },
          { h3: 'Medición', text: 'En la API ves cuántas conversaciones llegaron, quién respondió, cuánto tardó y cuántas terminaron en venta. En la app, ese seguimiento queda en la memoria de cada persona.' },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Cuándo es momento de pasar a la API?',
        intro: 'Si te ves en dos o más de estas, la app ya te queda corta.',
        items: [
          'Se te quedan mensajes sin responder, sobre todo fuera de horario.',
          'Dos o más personas necesitan atender el mismo número.',
          'Repites las mismas respuestas sobre precios, horarios y ubicación todo el día.',
          'No sabes cuántas consultas llegaron este mes ni cuántas compraron.',
          'Quieres avisar a tus clientes de forma ordenada y con su permiso.',
          'Pierdes el hilo cuando un cliente vuelve a escribir días después.',
          'Necesitas que WhatsApp hable con tu CRM, tu agenda o tu sistema de pedidos.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Puedo usar la app y la API con el mismo número?',
        paragraphs: [
          'Sí, en muchos casos. Meta permite que una empresa conecte a la API el número que ya usa en la app WhatsApp Business y siga respondiendo desde la app. En sus documentos lo llama a veces <a href="https://developers.facebook.com/docs/whatsapp/embedded-signup/custom-flows/onboarding-business-app-users" rel="noopener">«coexistencia»</a> (consultado el 23 de octubre de 2026).',
          'Tiene condiciones. La app debe estar en la versión 2.24.17 o superior. El alta la hace un Tech Provider o un socio de soluciones de Meta. Se pueden sincronizar los chats de los últimos 6 meses, pero no los grupos.',
          'También cambia la app: las <strong>listas de difusión se desactivan</strong>, y los mensajes temporales y de una sola vista dejan de funcionar en los chats individuales. Conviene saberlo antes de conectar, no después.',
          'Si el número no viene de la app, se registra directo en la API. Un número ya registrado en la API no se puede usar al mismo tiempo en WhatsApp Messenger, según la <a href="https://developers.facebook.com/docs/whatsapp/cloud-api/phone-numbers" rel="noopener">documentación de números de Meta</a> (consultada el 23 de octubre de 2026).',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo es el paso de la app a la API?',
        intro: 'Así lo hacemos en Elemento Web, como Tech Provider verificado por Meta.',
        items: [
          { h3: 'Revisamos el número y la empresa', text: 'Confirmamos a nombre de quién está el número, si conviene la coexistencia y si tu empresa ya está verificada en el administrador comercial de Meta.' },
          { h3: 'Conectamos el número a la API', text: 'Registramos el número con su nombre visible y su PIN de verificación en dos pasos. El número y la cuenta quedan a nombre de tu empresa, no de la agencia.' },
          { h3: 'Armamos la bandeja y el asistente', text: 'Cargamos tus precios, horarios y respuestas en WazaCRM. Definimos qué responde la IA y qué pasa a tu equipo.' },
          { h3: 'Aprobamos las plantillas', text: 'Si vas a escribir primero a tus clientes, redactamos las plantillas y las aprobamos ante Meta antes de usarlas.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta pasarse a la API?',
        paragraphs: [
          'Hay dos costos. El de Meta, por mensaje entregado: con el cupo de 1,000 respuestas de servicio gratis al mes por número, un negocio pequeño casi no paga atención. Las cifras están en <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje en Panamá</a>.',
          'Y el de la herramienta que usa la API. Con nosotros es <a href="/saas/wazacrm/">WazaCRM</a>, desde US$ 349 al mes, con bandeja, embudo y asistente de IA. El desglose completo está en <a href="/blog/cuanto-cuesta-un-chatbot-de-whatsapp-en-panama/">cuánto cuesta un chatbot de WhatsApp en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Pierdo mis conversaciones al pasar a la API?', a: 'Depende de cómo se conecte. Con la coexistencia, Meta permite sincronizar los chats individuales de los últimos 6 meses; los grupos no se sincronizan. Si el número se registra directo en la API, el historial de la app no pasa.' },
          { q: '¿Puedo seguir respondiendo desde el celular?', a: 'Con la coexistencia, sí: sigues usando la app para chats uno a uno y se sincroniza con la API. Sin coexistencia, tu equipo responde desde la bandeja del CRM conectado a la API, no desde la app.' },
          { q: '¿La API sirve para enviar mensajes masivos?', a: 'Sirve para enviar plantillas aprobadas a clientes que dieron su permiso. No es para listas compradas. Además, Meta pone un límite a cuántas personas puedes escribirle primero al día, que crece con tu historial.' },
          { q: '¿Necesito verificar mi empresa con Meta?', a: 'No es obligatorio para empezar, pero conviene. Verificar la empresa sube tu límite de envío de 250 a 2,000 personas por día, según la página de límites de Meta consultada el 23 de octubre de 2026.' },
          { q: '¿Un negocio pequeño necesita la API?', a: 'No siempre. Si atiendes tú, respondes a tiempo y no haces campañas, la app te basta. La API tiene sentido cuando el volumen, el equipo o la falta de seguimiento ya te cuestan ventas.' },
        ],
      },
      {
        type: 'related',
        h2: 'Sigue leyendo',
        items: [
          { slug: 'blog/limites-de-mensajes-de-whatsapp-business-api', label: 'Límites de mensajes de la API' },
          { slug: 'blog/cuanto-cuesta-un-chatbot-de-whatsapp-en-panama', label: 'Cuánto cuesta un chatbot de WhatsApp' },
          { slug: 'blog/crm-con-whatsapp-para-vender-mas-en-panama', label: 'CRM con WhatsApp para vender más' },
          { slug: 'blog/como-vender-por-whatsapp-en-panama', label: 'Cómo vender por WhatsApp en Panamá' },
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbot con IA' },
          { slug: 'soluciones', label: 'Paquete Clientes por WhatsApp' },
        ],
      },
    ],
    cta: { h2: '¿Te queda corta la app?', wa: 'Hola, uso WhatsApp Business y quiero saber si me conviene pasar a la API. ¿Me ayudan?' },
  },

  /* =============================================================
   * 3. ¿Cuánto cobra Meta por mensaje de WhatsApp en Panamá?
   * ============================================================= */
  {
    slug: 'blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama',
    parent,
    title: '¿Cuánto cobra Meta por mensaje de WhatsApp en Panamá?',
    description: 'Tarifas de Meta por mensaje de WhatsApp en Panamá desde el 1 de octubre de 2026: marketing, utilidad, autenticación y servicio, con ejemplos de cálculo.',
    h1: '¿Cuánto cobra Meta por mensaje de WhatsApp en Panamá?',
    breadcrumb: 'Tarifas de Meta por mensaje',
    category: 'WhatsApp',
    date: '2026-10-23',
    lead: [
      'En Panamá, Meta cobra US$ 0.074 por cada mensaje de marketing entregado y US$ 0.0113 por cada mensaje de utilidad, autenticación o servicio. Son las tarifas vigentes desde el 1 de octubre de 2026. Cada número tiene 1,000 mensajes de servicio gratis al mes, y solo se cobra lo que se entrega.',
      'Estas tarifas son de la plataforma de WhatsApp Business, la API. La app WhatsApp Business del celular no cobra por mensaje. Datos de la página de precios de Meta y su hoja de tarifas en dólares, consultadas el 23 de octubre de 2026.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Cómo cobra Meta los mensajes de WhatsApp?',
        paragraphs: [
          'Desde el 1 de julio de 2025, Meta cobra <strong>por mensaje</strong>, no por conversación. Y solo cobra los mensajes <strong>entregados</strong>: un mensaje enviado que no llega no se paga. Lo explica en su <a href="' + META_PRECIOS + '" rel="noopener">página de precios de la plataforma</a> (consultada el 23 de octubre de 2026).',
          'La tarifa depende de dos cosas: la categoría del mensaje y el país del número que lo recibe. Panamá está en el grupo «Rest of Latin America», junto con mercados como Costa Rica, Guatemala, Ecuador y Uruguay. Todo el grupo paga la misma tarifa.',
          'Meta solo cambia sus tarifas el primer día de cada trimestre: 1 de enero, 1 de abril, 1 de julio y 1 de octubre. Avisa al menos con un mes de anticipación. Por eso estas cifras llevan fecha.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Cuánto cuesta cada tipo de mensaje en Panamá?',
        intro: 'Tarifas por mensaje entregado a un número de Panamá, en dólares, vigentes desde el 1 de octubre de 2026.',
        items: [
          { h3: 'Marketing: US$ 0.074', text: 'Promociones, novedades, ofertas y mensajes para reactivar clientes. Es la categoría más cara. Siempre va en plantilla aprobada y solo a contactos con permiso.' },
          { h3: 'Utilidad: US$ 0.0113', text: 'Avisos que el cliente espera por algo que ya hizo: confirmación de pedido, recordatorio de cita, estado de un envío. También van en plantilla.' },
          { h3: 'Autenticación: US$ 0.0113', text: 'Códigos de un solo uso para iniciar sesión o confirmar una operación. Van en plantilla y tienen formato fijo.' },
          { h3: 'Servicio: US$ 0.0113', text: 'Respuestas libres a un cliente que te escribió, dentro de las 24 horas. Los primeros 1,000 del mes por número son gratis; se cobra desde el 1,001.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué cambió el 1 de octubre de 2026?',
        paragraphs: [
          'Dos cosas que afectan a casi todo negocio que atiende por la API. La primera: los <strong>mensajes de servicio</strong>, que antes eran gratis, ahora se cobran después de un cupo. Cada número de empresa tiene <strong>1,000 mensajes de servicio gratis al mes</strong>. Desde el 1,001 se cobran, y el cupo que no usas no pasa al mes siguiente.',
          'La segunda: las <strong>plantillas de utilidad enviadas dentro de la ventana de atención</strong> dejaron de ser gratuitas. Desde el 1 de octubre de 2026 se cobran a la tarifa normal de utilidad.',
          'Si tu cuenta de WhatsApp no tiene un método de pago, Meta entrega los mensajes de servicio del cupo gratuito y deja de entregarlos cuando se acaba. Vale la pena revisarlo antes de que se trabe la atención a fin de mes.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no cobra Meta?',
        paragraphs: [
          'Hay tres casos claros. Los mensajes que <strong>no se entregan</strong> no se pagan. Las primeras <strong>1,000 respuestas de servicio</strong> del mes por número son gratis.',
          'Y las conversaciones que llegan desde un <strong>anuncio que lleva a WhatsApp</strong> abren una ventana de entrada gratuita. Según Meta, puede durar hasta 7 días. En ese tiempo no cobra los mensajes de marketing, utilidad, autenticación ni servicio.',
          'Esa ventana importa si inviertes en anuncios de Facebook o Instagram que abren un chat. Lo trabajamos junto con la publicidad y el <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp marketing</a>.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo calcular tu costo de Meta al mes?',
        intro: 'Un negocio de ejemplo, con las tarifas publicadas para Panamá el 23 de octubre de 2026.',
        items: [
          { h3: 'Atención', text: 'Respondes 2,500 mensajes de servicio en el mes desde un número. Los primeros 1,000 son gratis. Pagas 1,500 por US$ 0.0113: US$ 16.95.' },
          { h3: 'Avisos', text: 'Envías 800 recordatorios de cita como plantillas de utilidad. 800 por US$ 0.0113: US$ 9.04.' },
          { h3: 'Campaña', text: 'Mandas una promoción a 1,200 clientes con permiso. 1,200 por US$ 0.074: US$ 88.80, si todos se entregan.' },
          { h3: 'Total', text: 'US$ 114.79 de Meta en el mes. Es lo que verías en tu cuenta de WhatsApp Manager, sin contar la plataforma ni la IA.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Hay descuento por volumen?',
        paragraphs: [
          'Sí, pero solo en <strong>utilidad y autenticación</strong>. Meta baja la tarifa por tramos según cuántos mensajes de esas categorías envía tu portafolio en el mes. Los tramos se reinician cada mes.',
          'Para el grupo de Panamá, la tarifa de utilidad empieza a bajar después de 100,000 mensajes en el mes, según la hoja de tramos en dólares consultada el 23 de octubre de 2026. Casi ninguna pyme llega ahí. El marketing no tiene tramos.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo se pagan esos mensajes si trabajas con una agencia?',
        paragraphs: [
          'En Elemento Web, el costo de Meta se paga <strong>desde tu propia cuenta</strong>, o se factura aparte a precio de costo, sin margen nuestro. Así ves exactamente lo que cobra Meta y no lo mezclas con la gestión.',
          'La gestión de campañas tiene una referencia publicada desde US$ 150 al mes, que se confirma en la cotización. La licencia de <a href="/saas/wazacrm/">WazaCRM</a> parte de US$ 349 al mes. Antes de arrancar te armamos el estimado de mensajes según tu volumen.',
          'Las tarifas de este artículo son las publicadas por Meta para el grupo de Panamá. Confírmalas en WhatsApp Manager antes de una campaña grande: pueden cambiar en el próximo trimestre.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Responder a un cliente que me escribió es gratis?', a: 'Lo es hasta 1,000 mensajes de servicio al mes por número. Desde el 1,001, cada respuesta cuesta US$ 0.0113 en Panamá, según la página de precios de Meta consultada el 23 de octubre de 2026.' },
          { q: '¿Cuánto cuesta enviar una promoción a 1,000 clientes?', a: 'En mensajes de Meta, US$ 74 si se entregan los 1,000, a US$ 0.074 por plantilla de marketing. A eso se suma la gestión de la campaña, si la hace una agencia.' },
          { q: '¿Las tarifas se cobran en balboas o en dólares?', a: 'Meta publica hojas de tarifas en varias monedas, entre ellas el dólar. Las cifras de esta guía salen de la hoja en dólares. Revisa en WhatsApp Manager en qué moneda está configurada tu cuenta antes de comparar.' },
          { q: '¿Los mensajes que no llegan se cobran?', a: 'No. Meta cobra solo los mensajes entregados, no los enviados, según su página de precios. Si una plantilla no llega a un número, ese envío no te genera costo. Por eso el costo real de una campaña suele quedar por debajo del cálculo con toda la lista.' },
          { q: '¿Cada cuánto cambian las tarifas?', a: 'Meta solo puede cambiarlas el primer día de cada trimestre: enero, abril, julio y octubre, con al menos un mes de aviso. Revisa la hoja de tarifas en cada cambio de trimestre.' },
        ],
      },
      {
        type: 'related',
        h2: 'Sigue leyendo',
        items: [
          { slug: 'blog/cuanto-cuesta-un-chatbot-de-whatsapp-en-panama', label: 'Cuánto cuesta un chatbot de WhatsApp' },
          { slug: 'blog/limites-de-mensajes-de-whatsapp-business-api', label: 'Límites de mensajes de la API' },
          { slug: 'blog/como-hacer-campanas-de-whatsapp-masivo-en-panama', label: 'Campañas de WhatsApp masivo' },
          { slug: 'blog/whatsapp-business-o-api-cual-necesita-tu-negocio', label: 'WhatsApp Business o API' },
          { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp marketing' },
          { slug: 'soluciones', label: 'Paquete Clientes por WhatsApp' },
        ],
      },
    ],
    cta: { h2: 'Calcula tu costo de WhatsApp', wa: 'Hola, quiero un estimado de lo que me cobraría Meta por mis mensajes de WhatsApp. ¿Me ayudan?' },
  },

  /* =============================================================
   * 4. Límites de mensajes de la API de WhatsApp Business
   * ============================================================= */
  {
    slug: 'blog/limites-de-mensajes-de-whatsapp-business-api',
    parent,
    title: 'Límites de mensajes de la API de WhatsApp Business',
    description: 'Cuántos mensajes permite la API de WhatsApp Business al día: de 250 a 2,000, 10,000, 100,000 e ilimitado. Cómo subir de nivel y cómo verlo en tu cuenta.',
    h1: 'Límites de mensajes de la API de WhatsApp Business: cuántos puedes enviar y cómo subir',
    breadcrumb: 'Límites de mensajes de la API',
    category: 'WhatsApp',
    date: '2026-10-23',
    lead: [
      'La API de WhatsApp Business limita a cuántas personas distintas puedes escribirle primero en 24 horas. Arrancas en 250. Subes a 2,000 al verificar tu empresa o al entregar 2,000 mensajes en 30 días. Luego Meta sube a 10,000, 100,000 e ilimitado si usas la mitad de tu límite en 7 días con buena calidad.',
      'El límite es del portafolio de empresa, no de cada número. Datos de la página de límites de mensajes de Meta, consultada el 23 de octubre de 2026.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué cuenta exactamente el límite?',
        paragraphs: [
          'Según la <a href="' + META_LIMITES + '" rel="noopener">página de límites de mensajes de Meta</a> (consultada el 23 de octubre de 2026), el límite es la cantidad máxima de <strong>números distintos</strong> a los que tu empresa puede entregar mensajes en un período móvil de 24 horas.',
          'Cuenta los mensajes enviados <strong>fuera de la ventana de atención</strong>: las plantillas con las que tú inicias el contacto. Si escribes tres plantillas a la misma persona, cuenta como una. El período es móvil, no se reinicia a medianoche.',
          'Y es <strong>compartido por todos los números del portafolio</strong>. Si tu empresa tiene dos números en el mismo administrador comercial, los dos suman contra el mismo límite.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cuáles son los niveles?',
        intro: 'Personas únicas por 24 horas, según la página de Meta consultada el 23 de octubre de 2026.',
        items: [
          { h3: '250', text: 'El nivel de todo portafolio nuevo. Alcanza para probar plantillas y avisar a tus clientes más cercanos, no para una campaña.' },
          { h3: '2,000', text: 'Se llega verificando la empresa, o entregando 2,000 mensajes fuera de la ventana de atención a números distintos en 30 días, con plantillas de buena calidad.' },
          { h3: '10,000', text: 'Primer salto automático. Meta lo da cuando usaste al menos la mitad de tu límite en los últimos 7 días y tus mensajes tienen buena calidad.' },
          { h3: '100,000', text: 'Mismo criterio: uso de la mitad del límite en 7 días y buena calidad en todos tus números y plantillas.' },
          { h3: 'Ilimitado', text: 'El último nivel, también por escalado automático y con los mismos criterios de uso y calidad.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo paso de 250 a 2,000?',
        paragraphs: [
          'Meta da tres caminos. El más directo es <strong>verificar tu empresa</strong> en el administrador comercial. Si un socio de Meta te dio de alta, ese socio también puede verificarla.',
          'El tercer camino es el historial: entregar <strong>2,000 mensajes fuera de la ventana de atención</strong> a números distintos en 30 días, con plantillas de calidad alta. Con un límite de 250, eso toma más de una semana de envíos diarios.',
          'Cumplir un camino no sube el límite al instante. Meta revisa la calidad de tus mensajes y aprueba o niega el escalado. Si lo niega, te quedas en el nivel actual y te avisa qué intentar.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo subo después de 2,000?',
        paragraphs: [
          'Desde 2,000, el escalado es automático. Meta sube un nivel cuando se cumplen dos condiciones a la vez: <strong>mensajes de calidad alta</strong> en todos tus números y plantillas, y <strong>haber usado al menos la mitad de tu límite</strong> en los últimos 7 días.',
          'Cuando se cumplen, el límite sube un nivel en un máximo de 6 horas. Por ejemplo, con 2,000 necesitas haber escrito a 1,000 personas distintas en la semana para pasar a 10,000.',
          'La calidad es la condición que más negocios descuidan. Una plantilla que mucha gente bloquea o reporta frena el escalado de todo el portafolio. Lo explicamos en <a href="/blog/por-que-bloquean-un-numero-de-whatsapp-business/">por qué bloquean un número de WhatsApp Business</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Dónde veo mi límite actual?',
        paragraphs: [
          'En WhatsApp Manager, en el panel de límites de mensajes dentro de las herramientas de la cuenta (en inglés, «Account tools > Messaging limits»). También se puede consultar por la API, en el campo de límite del número.',
          'Revísalo antes de programar una campaña grande, no después.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Cómo planear tu primera campaña con el límite en mente?',
        intro: 'Lo que hacemos antes de cada primer envío en el <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp marketing</a> de un cliente.',
        items: [
          'Verificar la empresa antes de la campaña, no el mismo día.',
          'Contar cuántos contactos con permiso tienes y compararlo con tu límite.',
          'Dividir la base en tandas que quepan en el límite de 24 horas.',
          'Empezar por los clientes más recientes, que reconocen tu marca y no reportan.',
          'Medir bloqueos y reportes después de la primera tanda.',
          'Pausar si la calidad baja, cambiar el mensaje y volver a probar.',
          'Mantener un ritmo constante en la semana para que el escalado se active.',
        ],
      },
      {
        type: 'prose',
        h2: '¿El límite tiene que ver con lo que pago?',
        paragraphs: [
          'No directamente. El límite dice <strong>a cuántas personas</strong> puedes escribir primero. El costo depende de la categoría de cada mensaje entregado. Las tarifas están en <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje en Panamá</a>.',
          'Tampoco limita la atención. Si 5,000 clientes te escriben, puedes responderles a todos dentro de su ventana de 24 horas. El límite frena las campañas, no el servicio.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿El límite es por número o por empresa?', a: 'Por empresa. Meta lo asigna al portafolio comercial y lo comparten todos los números que tiene, según su página de límites consultada el 23 de octubre de 2026. Abrir otro número en el mismo portafolio no duplica el límite.' },
          { q: '¿Responder a clientes cuenta contra el límite?', a: 'El límite cuenta los mensajes que entregas fuera de la ventana de atención, es decir, las plantillas con las que inicias el contacto. Responder a quien te escribió dentro de sus 24 horas es atención, no campaña.' },
          { q: '¿Cuánto tarda en subir el límite?', a: 'Cuando cumples los criterios de escalado automático, Meta sube un nivel en un máximo de 6 horas. Para pasar de 250 a 2,000, primero revisa la calidad de tus mensajes y luego aprueba o niega.' },
          { q: '¿Puedo pagar para tener un límite más alto?', a: 'La página de límites de Meta no ofrece comprar un nivel. Los caminos que describe son verificar la empresa, enviar con constancia hasta usar la mitad de tu límite y cuidar la calidad de las plantillas en todos tus números.' },
          { q: '¿Qué pasa si quiero escribir a más gente de la que permite mi límite?', a: 'Divide el envío en tandas de 24 horas. Una campaña a 5,000 contactos con un límite de 2,000 se reparte en tres días, y ese ritmo ayuda al escalado automático.' },
        ],
      },
      {
        type: 'related',
        h2: 'Sigue leyendo',
        items: [
          { slug: 'blog/por-que-bloquean-un-numero-de-whatsapp-business', label: 'Por qué bloquean un número de WhatsApp' },
          { slug: 'blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama', label: 'Cuánto cobra Meta por mensaje' },
          { slug: 'blog/como-hacer-campanas-de-whatsapp-masivo-en-panama', label: 'Campañas de WhatsApp masivo' },
          { slug: 'blog/whatsapp-business-o-api-cual-necesita-tu-negocio', label: 'WhatsApp Business o API' },
          { slug: 'soluciones', label: 'Paquete Clientes por WhatsApp' },
        ],
      },
    ],
    cta: { h2: 'Prepara tu número para escalar', wa: 'Hola, quiero subir el límite de mensajes de mi WhatsApp Business. ¿Me ayudan?' },
  },

  /* =============================================================
   * 5. ¿Por qué bloquean un número de WhatsApp Business?
   * ============================================================= */
  {
    slug: 'blog/por-que-bloquean-un-numero-de-whatsapp-business',
    parent,
    title: '¿Por qué bloquean un número de WhatsApp Business?',
    description: 'Por qué WhatsApp restringe o bloquea un número de empresa: mensajes sin permiso, bloqueos y reportes, apps no oficiales. Cómo evitarlo y qué hacer si pasa.',
    h1: '¿Por qué bloquean un número de WhatsApp Business y cómo evitarlo?',
    breadcrumb: 'Por qué bloquean un número de WhatsApp',
    category: 'WhatsApp',
    date: '2026-10-23',
    lead: [
      'WhatsApp restringe o bloquea un número de empresa por tres razones: escribir a gente que no dio permiso, acumular bloqueos y reportes de los clientes, o usar herramientas no autorizadas para enviar en masa. Se evita con la API oficial, consentimiento explícito, baja en un toque y envíos medidos.',
      'Lo que sigue se basa en la Política de mensajes de WhatsApp Business y en las Condiciones del servicio de WhatsApp, consultadas el 23 de octubre de 2026.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué dice WhatsApp sobre bloquear cuentas de empresa?',
        paragraphs: [
          'La <a href="' + META_POLITICA + '" rel="noopener">Política de mensajes de WhatsApp Business</a> (actualizada el 23 de septiembre de 2026 y consultada el 23 de octubre de 2026) dice que WhatsApp puede <strong>limitar o eliminar</strong> el acceso de una empresa que la infrinja.',
          'En casos graves, puede prohibir a la empresa y a su organización usar sus productos en el futuro. Es decir, no siempre se pierde solo el número: a veces se pierde la cuenta comercial.',
          'La política también deja claro de qué depende: de la experiencia de las personas. Los usuarios pueden <strong>bloquear o reportar</strong> a una empresa, y si recibe demasiados comentarios negativos, sus sistemas pueden limitar cuántos mensajes envía.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Cuáles son las causas más comunes?',
        intro: 'Las cuatro que se desprenden de la política y de las condiciones de WhatsApp.',
        items: [
          { h3: 'Escribir sin permiso', text: 'Mandar promociones a una lista comprada, a contactos de otra empresa o a gente que solo te dio su número para una factura. La política hace a la empresa responsable de obtener el consentimiento.' },
          { h3: 'Muchos bloqueos y reportes', text: 'Aunque tengas permiso, un mensaje repetitivo, a mala hora o sin forma de darse de baja provoca bloqueos. Esos comentarios negativos son la señal que mira WhatsApp.' },
          { h3: 'Apps y extensiones no oficiales', text: 'Programas que envían en masa desde tu WhatsApp del celular. Las Condiciones del servicio no permiten la mensajería masiva ni la automática fuera de los canales autorizados.' },
          { h3: 'Contenido prohibido', text: 'Hacerse pasar por otra empresa, engañar al cliente o pedir números completos de tarjeta por chat. La política lo prohíbe de forma expresa.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué las apps de envío masivo terminan en bloqueo?',
        paragraphs: [
          'Las <a href="https://www.whatsapp.com/legal/terms-of-service?lang=es_LA" rel="noopener">Condiciones del servicio de WhatsApp</a> (consultadas el 23 de octubre de 2026) mencionan la mensajería masiva, la mensajería automática y el marcado automático entre los usos no aceptables. También prohíben el acceso no autorizado a sus servicios.',
          'Las extensiones que «mandan a mil contactos» desde tu celular hacen justo eso. Pueden funcionar unas semanas. Cuando WhatsApp las detecta, puede inhabilitar o suspender la cuenta, según esas mismas condiciones.',
          'El camino permitido para escribir a muchos clientes es la <strong>API oficial</strong>, con plantillas aprobadas por Meta y a contactos con permiso. Cuesta por mensaje, pero el volumen es legítimo. Por eso nuestro <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp marketing</a> trabaja solo por la API.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué es un consentimiento válido?',
        paragraphs: [
          'La política dice que la empresa es la única responsable de definir cómo obtiene el <strong>consentimiento explícito</strong>. También recomienda pedirlo por tipo de mensaje: no es lo mismo aceptar avisos de pedido que aceptar promociones.',
          'En la práctica, cuenta como permiso una casilla clara en tu formulario, un cliente que te escribe pidiendo información o una compra donde se le dijo que recibiría mensajes. No cuenta un número tomado de un grupo, de una factura o de una base comprada.',
          'Y la baja hay que respetarla siempre, se pida dentro o fuera de WhatsApp. Un botón de «No recibir más mensajes» en cada promoción es lo que evita el reporte. Esos datos son datos personales; lo que exige la ley panameña está en <a href="/blog/ley-81-proteccion-de-datos-chatbots-panama/">la Ley 81 aplicada a chatbots y CRM</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Cómo evitar que te bloqueen?',
        intro: 'Las reglas que seguimos con cada número que administramos.',
        items: [
          'Usar la API oficial de WhatsApp Business, nunca extensiones que automatizan el celular.',
          'Escribir solo a contactos que dieron su permiso, y guardar cuándo y cómo lo dieron.',
          'Pedir permiso aparte para promociones y para avisos de servicio.',
          'Poner la opción de darse de baja en toda plantilla de marketing.',
          'Enviar por segmento, en horario razonable y sin repetir el mismo mensaje cada día.',
          'Probar una plantilla nueva con una tanda pequeña antes de mandarla a todos.',
          'Revisar bloqueos y reportes después de cada campaña y pausar si suben.',
          'Respetar el <a href="/blog/limites-de-mensajes-de-whatsapp-business-api/">límite de mensajes</a> del portafolio, sin forzarlo con números nuevos.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Qué hacer si ya te restringieron el número?',
        intro: 'Pasos generales. Cada caso depende de la razón que indique WhatsApp.',
        items: [
          { h3: 'Detén los envíos', text: 'Pausa toda campaña y automatización. Seguir enviando mientras el número está restringido solo empeora la señal.' },
          { h3: 'Revisa el estado', text: 'Si usas la API, mira el estado del número en WhatsApp Manager y las alertas de la cuenta. Si usas la app, lee el aviso que muestra WhatsApp.' },
          { h3: 'Encuentra la causa', text: '¿Fue una lista sin permiso, una plantilla que mucha gente bloqueó o una herramienta no oficial? Sin esa respuesta, el bloqueo se repite.' },
          { h3: 'Corrige y apela', text: 'Arregla la causa antes de pedir revisión. La documentación de Meta indica que un número bloqueado debe pasar por el proceso de apelación antes de volver a registrarse.' },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Me pueden bloquear aunque use la API oficial?', a: 'Sí. La API no es un permiso para escribir a cualquiera. Si envías sin consentimiento o tus mensajes reciben muchos bloqueos y reportes, WhatsApp puede limitar tus envíos o tu acceso, según su Política de mensajes.' },
          { q: '¿Cuántos reportes hacen falta para un bloqueo?', a: 'WhatsApp no publica un número. Su política habla de recibir «demasiados comentarios negativos». Por eso conviene vigilar bloqueos y reportes en cada campaña en vez de esperar a un umbral.' },
          { q: '¿Puedo usar un número nuevo si me bloquean?', a: 'Puedes, pero no resuelve nada si la causa sigue. Además, la política permite prohibir el uso futuro a la empresa y a su organización, no solo al número. Corrige primero la causa.' },
          { q: '¿Una lista de clientes de mi tienda tiene permiso?', a: 'No por sí sola. Que un cliente te haya comprado no significa que aceptó promociones por WhatsApp. Pide el permiso de forma explícita, por ejemplo en el ticket, el formulario o el primer chat.' },
          { q: '¿Esto aplica también a la app WhatsApp Business?', a: 'Sí. La Política de mensajes y las Condiciones del servicio aplican a la app y a la plataforma. La diferencia es que la app no está hecha para envíos en volumen.' },
        ],
      },
      {
        type: 'related',
        h2: 'Sigue leyendo',
        items: [
          { slug: 'blog/limites-de-mensajes-de-whatsapp-business-api', label: 'Límites de mensajes de la API' },
          { slug: 'blog/whatsapp-business-o-api-cual-necesita-tu-negocio', label: 'WhatsApp Business o API' },
          { slug: 'blog/ley-81-proteccion-de-datos-chatbots-panama', label: 'Ley 81 para chatbots y CRM' },
          { slug: 'blog/como-hacer-campanas-de-whatsapp-masivo-en-panama', label: 'Campañas de WhatsApp masivo' },
          { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp marketing' },
          { slug: 'soluciones', label: 'Paquete Clientes por WhatsApp' },
        ],
      },
    ],
    cta: { h2: 'Cuida el número que te da de comer', wa: 'Hola, quiero enviar mensajes por WhatsApp sin arriesgar mi número. ¿Me ayudan?' },
  },
];
