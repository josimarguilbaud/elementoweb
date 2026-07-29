/* SILO SAAS: producto propio. ⚠️ Verificar cada función descrita contra el
   producto real antes de publicar. No prometer lo que aún no existe. */
import type { PageData } from '../types';

const parent = { slug: 'saas', label: 'Nuestros SaaS' };

export const saasPages: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'saas',
    title: 'Nuestros SaaS | ChatMantis, WapyCRM y Cifrao',
    description: 'Tres productos SaaS propios en producción: ChatMantis (omnicanalidad con IA), WapyCRM (ventas por WhatsApp) y Cifrao (contabilidad).',
    h1: 'Software propio, en producción',
    breadcrumb: 'Nuestros SaaS',
    heroImage: { src: 'https://picsum.photos/seed/software-dashboard-laptop-panama/1200/675', alt: 'Panel de control de software mostrado en una laptop moderna' },
    creds: true,
    heroCtas: [
      { label: 'Agendar demostración', href: '/contacto/', primary: true },
      { label: 'Ver servicios web', href: '/servicios/' },
    ],
    lead: [
      'No solo diseñamos webs: operamos tres productos SaaS con clientes reales. Esa es la vara técnica con la que construimos lo tuyo.',
      'Una agencia entrega y se va; si la arquitectura era frágil, el costo lo descubre el cliente meses después. Cuando operas tu propio software, cada atajo técnico te cobra factura a ti: el servidor caído, la madrugada de soporte, el cliente molesto. Esa disciplina aprendida a golpes es la que aplicamos en cada proyecto de diseño web.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Los tres productos',
        items: [
          { h3: 'ChatMantis', text: 'Omnicanalidad con IA: WhatsApp, Instagram y el chat de tu web en una sola bandeja, con asistentes entrenados con tu información.', link: { slug: 'saas/chatmantis', label: 'Conocer ChatMantis' } },
          { h3: 'WapyCRM', text: 'CRM de ventas construido alrededor de WhatsApp: embudos, seguimiento automático y cierre asistido.', link: { slug: 'saas/wapycrm', label: 'Conocer WapyCRM' } },
          { h3: 'Cifrao', text: 'Software contable para empresas en Panamá: facturación, conciliación y cuentas por cobrar que avisan solas.', link: { slug: 'saas/cifrao', label: 'Conocer Cifrao' } },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Los SaaS se venden por separado del diseño web?', a: 'Sí. Puedes usar ChatMantis, WapyCRM o Cifrao sin contratar diseño web, y viceversa. Donde brillan es juntos: la web capta, la IA atiende y el CRM cierra.' },
          { q: '¿Qué significa Meta Verified Tech Provider?', a: 'Es la validación oficial de Meta que nos acredita para integrar las APIs de WhatsApp Business e Instagram. En la práctica: verificamos tu número oficialmente, sin soluciones improvisadas que Meta bloquea.' },
          { q: '¿Cómo se cobra la licencia?', a: 'Mensual, por producto. El consumo de APIs de terceros (Meta, motores de IA) se paga por uso desde tus propias cuentas, con visibilidad total y sin margen nuestro.' },
          { q: '¿Los datos de mi negocio quedan expuestos a la agencia?', a: 'No. Cada cliente opera en su propia cuenta, con su información y sus credenciales de Meta y de IA. Nosotros configuramos y damos soporte; la operación diaria y los datos son tuyos.' },
          { q: '¿Puedo empezar con un solo producto y sumar los demás después?', a: 'Sí, y es lo más común. Muchos arrancan con WapyCRM o ChatMantis para ordenar la venta por WhatsApp, y luego suman Cifrao cuando la contabilidad se vuelve el cuello de botella. No hay que contratarlos todos de golpe.' },
          { q: '¿Y si ya tengo una web hecha por otra agencia?', a: 'No hay problema. Los tres SaaS se conectan a cualquier web moderna. Si tu sitio actual complica la integración o ya pide un cambio, podemos revisarlo desde <a href="/servicios/redisenio-web-panama/">rediseño web</a>, pero no es requisito para empezar.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es cada producto',
        intro: 'Los tres resuelven problemas distintos. Esta es la forma corta de saber por dónde empezar.',
        items: [
          { h3: 'Te escriben más de lo que puedes atender', text: 'Si WhatsApp e Instagram se te llenan de las mismas preguntas y pierdes mensajes, empieza por ChatMantis: la IA responde lo repetitivo y tu equipo atiende lo que vale.', link: { slug: 'saas/chatmantis', label: 'Ver ChatMantis' } },
          { h3: 'Vendes bien pero se te caen los seguimientos', text: 'Si el problema no es recibir consultas sino cerrarlas, WapyCRM ordena cada chat en un embudo con etapa y responsable para que nada quede sin respuesta.', link: { slug: 'saas/wapycrm', label: 'Ver WapyCRM' } },
          { h3: 'No sabes cuánto te deben ni cuánto ganas', text: 'Si la contabilidad vive en una hoja de cálculo que nadie concilia, Cifrao pone facturación, gastos y cuentas por cobrar en un sistema que sí avisa.', link: { slug: 'saas/cifrao', label: 'Ver Cifrao' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Software propio y diseño web: por qué van juntos',
        paragraphs: [
          'Una web bien hecha capta la atención, pero la atención sin proceso se evapora. El visitante pregunta, nadie responde a tiempo y la venta se enfría. Por eso construimos productos que continúan lo que la web empieza: la página trae al cliente, ChatMantis lo atiende, WapyCRM lo da seguimiento y Cifrao registra la venta.',
          'Cuando la misma casa diseña tu sitio y opera tu software, las piezas encajan sin parches. El chat de la web habla el mismo idioma que tu CRM, y las integraciones no dependen de un plugin de terceros que se rompe en la próxima actualización.',
          'No es obligatorio contratarlo todo. Puedes tomar solo el <a href="/servicios/">servicio de diseño web</a>, solo un SaaS, o combinarlos a tu ritmo. Lo que no cambia es la vara: el mismo cuidado técnico con el que mantenemos software en producción es el que va en cada línea de tu proyecto.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo es empezar con nosotros',
        intro: 'Sin contratos eternos ni sorpresas: primero entendemos tu operación, luego proponemos.',
        items: [
          { h3: '1. Demostración con tus datos', text: 'Agendas por <a href="/contacto/">contacto</a> y te mostramos el producto con ejemplos de tu rubro, no una demo genérica. Si no calza con lo que necesitas, te lo decimos.' },
          { h3: '2. Configuración y conexión', text: 'Verificamos tu número oficialmente en Meta cuando aplica, entrenamos la IA con tus documentos o migramos tus datos, y conectamos los canales. Tú apruebas cada paso.' },
          { h3: '3. Capacitación de tu equipo', text: 'Formamos a quienes lo van a usar de verdad. Un software que solo entiende el dueño no sirve; buscamos que el equipo lo adopte en días.' },
          { h3: '4. Operación con soporte', text: 'Quedas en producción con acompañamiento. Ajustamos la IA, los embudos o los informes según lo que la operación real vaya pidiendo.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA para tu web' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida' },
          { slug: 'servicios', label: 'Servicios de diseño web' },
        ],
      },
    ],
    cta: { h2: 'Agenda una demostración', wa: 'Hola, quiero una demo de sus productos SaaS.' },
  },

  /* ---------- CHATMANTIS ---------- */
  {
    slug: 'saas/chatmantis',
    parent,
    title: 'ChatMantis | Omnicanalidad con IA para WhatsApp e Instagram',
    description: 'ChatMantis unifica WhatsApp, Instagram y el chat de tu web en una bandeja, con agentes de IA entrenados con tu información. Producto de Elemento Web.',
    h1: 'ChatMantis',
    breadcrumb: 'ChatMantis',
    heroCtas: [
      { label: 'Agendar demostración', href: '/contacto/', primary: true },
      { label: 'Verlo en tu web', href: '/funcionalidades/chatbots-ia-web-chatmantis-panama/' },
    ],
    lead: [
      'Todos tus canales en una bandeja, con agentes de IA que responden en segundos y escalan a tu equipo cuando el caso lo pide.',
      'Un cliente te escribe por Instagram, sigue por WhatsApp y termina llenando el formulario de la web. Para él es una sola conversación; para tu equipo son tres pantallas inconexas. ChatMantis las une con historial único por cliente, y pone la IA a resolver lo repetitivo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué hace ChatMantis',
        items: [
          'Bandeja unificada: WhatsApp, Instagram y chat web',
          'Historial único por cliente entre canales',
          'Agentes de IA entrenados con tus documentos (RAG)',
          'Escalamiento a humano con el contexto completo',
          'Varios agentes atendiendo el mismo número',
          'Plantillas aprobadas por Meta y respuestas rápidas',
          'Asignación de conversaciones por equipo o turno',
          'Métricas de tiempo de respuesta y volumen',
        ],
      },
      {
        type: 'prose',
        h2: 'La IA que admite lo que no sabe',
        paragraphs: [
          'El asistente responde únicamente desde los documentos que apruebas: precios, requisitos, políticas, preguntas frecuentes. Cuando el dato no está, lo dice con claridad y deriva a tu equipo.',
          'Ese límite es deliberado. <strong>Un asistente que inventa destruye en una conversación la confianza que costó años construir.</strong> Preferimos que derive de más.',
          'Y la conexión con WhatsApp e Instagram usa las APIs oficiales de Meta: somos Meta Verified Tech Provider, así que la verificación de tu número la gestionamos nosotros, por el canal oficial.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta ChatMantis?', a: 'Implementación única (entrenamiento, conexión de canales, pruebas) más licencia mensual. El consumo de Meta y del motor de IA se paga por uso desde tus cuentas. Pide una demo y te armamos el estimado según tu volumen.' },
          { q: '¿En qué se diferencia de WapyCRM?', a: 'ChatMantis se enfoca en atención omnicanal con IA; <a href="/saas/wapycrm/">WapyCRM</a> en el proceso comercial y el seguimiento de ventas. Se integran, y muchas operaciones usan ambos.' },
          { q: '¿Cuánto tarda la implementación?', a: 'Alrededor de 2 semanas, incluida la verificación oficial del número en Meta, cuyo tiempo de aprobación no depende de nosotros.' },
          { q: '¿Puedo conservar mi número de WhatsApp actual?', a: 'Sí. Trabajamos con la API oficial de WhatsApp Business sobre tu número real. La verificación la gestionamos nosotros como Meta Verified Tech Provider, sin números prestados ni conexiones que Meta pueda bloquear.' },
          { q: '¿La IA responde sola o siempre hay un humano detrás?', a: 'Las dos cosas. La IA resuelve lo repetitivo y frecuente por sí sola, y escala a tu equipo con el historial completo cuando el caso lo amerita o cuando el cliente lo pide. Tú defines dónde está esa línea.' },
          { q: '¿Qué pasa si el cliente pregunta algo que la IA no sabe?', a: 'Lo dice con claridad y deriva a una persona; no inventa. El asistente solo responde desde los documentos que apruebas, así que un dato que no cargaste nunca se convierte en una respuesta falsa.' },
          { q: '¿Se conecta con el chat de mi sitio web?', a: 'Sí. El chat de tu web entra a la misma bandeja que WhatsApp e Instagram, con historial unificado por cliente. Puedes verlo en detalle en <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA para tu web</a>.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es ChatMantis',
        intro: 'Funciona mejor cuando el volumen de mensajes ya supera lo que un equipo pequeño puede atender a mano.',
        items: [
          { h3: 'Comercios y tiendas', text: 'Reciben las mismas preguntas todo el día: precio, disponibilidad, horario, ubicación. La IA las responde al instante y libera al equipo para vender.' },
          { h3: 'Servicios y consultorios', text: 'Clientes que escriben por Instagram, siguen por WhatsApp y esperan respuesta ya. El historial único evita repetir lo mismo tres veces.' },
          { h3: 'Equipos de atención con turnos', text: 'Varios agentes sobre el mismo número, con asignación por turno y métricas de tiempo de respuesta. Se acaba el chat que solo maneja una persona desde su celular.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo se integra con tu web',
        paragraphs: [
          'ChatMantis no vive aislado del sitio. El widget de chat se coloca en tu web y comparte bandeja e historial con WhatsApp e Instagram, así que una conversación que empieza en la página no se pierde cuando el cliente pasa al teléfono.',
          'Para negocios que ya trabajan con nosotros, esto significa que la web deja de ser un folleto y se vuelve un canal de atención real. Si tu sitio todavía no tiene un punto de contacto claro, lo resolvemos como parte del <a href="/servicios/diseno-web-corporativo-panama/">diseño web corporativo</a> o de una <a href="/servicios/landing-pages-alta-conversion-panama/">landing de alta conversión</a>.',
          '<strong>La atención rápida es lo que separa una cotización ganada de una perdida.</strong> Con la IA cubriendo lo repetitivo y tu equipo enfocado en lo que decide la venta, el tiempo de respuesta deja de ser tu punto débil.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA en tu web' },
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
          { slug: 'saas', label: 'Todos los SaaS' },
        ],
      },
    ],
    cta: { h2: 'Pide una demo de ChatMantis', wa: 'Hola, quiero una demo de ChatMantis.' },
  },

  /* ---------- WAPYCRM ---------- */
  {
    slug: 'saas/wapycrm',
    parent,
    title: 'WapyCRM | CRM de Ventas por WhatsApp',
    description: 'WapyCRM organiza tus ventas por WhatsApp: cada conversación es una oportunidad con etapa, responsable y seguimiento automático.',
    h1: 'WapyCRM',
    breadcrumb: 'WapyCRM',
    heroCtas: [
      { label: 'Agendar demostración', href: '/contacto/', primary: true },
      { label: 'Ver ChatMantis', href: '/saas/chatmantis/' },
    ],
    lead: [
      'En Panamá se vende por WhatsApp. WapyCRM convierte ese chat caótico en un embudo con etapas, responsables y seguimiento.',
      'La mayoría de las ventas no se pierden por precio: se pierden porque nadie volvió a escribir. El cliente preguntó, dijo "lo pienso" y desapareció entre cientos de chats. WapyCRM hace que cada conversación tenga etapa y fecha de seguimiento: lo que tocaba retomar hoy, aparece hoy.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué hace WapyCRM',
        items: [
          'Embudo de ventas con etapas configurables',
          'Cada chat de WhatsApp como oportunidad rastreable',
          'Recordatorios y seguimiento automático',
          'Clasificación de clientes asistida por IA',
          'Asignación de oportunidades por vendedor',
          'Historial completo de conversación en la ficha',
          'Métricas de conversión por etapa y vendedor',
          'Notas internas que el cliente no ve',
        ],
      },
      {
        type: 'prose',
        h2: 'Adopción en días, no en trimestres',
        paragraphs: [
          'Los CRM fracasan cuando obligan al vendedor a cambiar su forma de trabajar. WapyCRM parte del canal donde tu equipo ya vive: WhatsApp. Siguen chateando igual; la diferencia es que ahora cada conversación queda registrada, con etapa y responsable.',
          'La curva de aprendizaje es de un día. <strong>Un CRM que nadie usa es un reporte de fantasía</strong>; uno que calza con el hábito real del equipo es una máquina de seguimiento.',
          'Para el gerente, el cambio es visibilidad: cuántas oportunidades hay, en qué etapa, quién las atiende y dónde se caen. Decisiones con datos, no con memoria.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta WapyCRM?', a: 'Licencia mensual según el tamaño del equipo, más una implementación inicial que incluye la verificación oficial del número y la capacitación. Pide una demo para el detalle.' },
          { q: '¿Funciona con varios números?', a: 'Sí: varios números y varios equipos (ventas, soporte) en la misma cuenta, con asignación automática.' },
          { q: '¿Necesito también ChatMantis?', a: 'No necesariamente. Si tu prioridad es el proceso comercial, WapyCRM basta. Si además quieres IA atendiendo Instagram y la web, se integra con <a href="/saas/chatmantis/">ChatMantis</a>.' },
          { q: '¿Se pierden las conversaciones si un vendedor deja la empresa?', a: 'No. Cada chat queda registrado en la cuenta del negocio, con su etapa, notas e historial. Cuando alguien sale del equipo, sus oportunidades se reasignan a otro vendedor sin perder el contexto.' },
          { q: '¿Cómo ayuda la IA dentro de WapyCRM?', a: 'Clasifica los clientes según la conversación para que priorices a quien está más cerca de comprar. No reemplaza el criterio del vendedor: le ordena la lista de a quién escribir primero.' },
          { q: '¿El gerente puede ver el trabajo del equipo sin revisar cada chat?', a: 'Sí. Hay métricas de conversión por etapa y por vendedor, más la vista del embudo completo: cuántas oportunidades hay, en qué etapa están y dónde se caen. Decisiones con datos, no con memoria.' },
          { q: '¿Sirve para preventa inmobiliaria o proyectos de construcción?', a: 'Sí, es uno de los usos más fuertes: ciclos largos con muchos seguimientos donde perder el hilo cuesta caro. Se conecta bien con webs de proyectos como las que hacemos para <a href="/industrias/">distintas industrias</a>.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es WapyCRM',
        intro: 'Pensado para negocios de Panamá donde la venta pasa por WhatsApp y el seguimiento es lo que decide.',
        items: [
          { h3: 'Equipos de ventas', text: 'Vendedores que ya trabajan por WhatsApp y necesitan que nada se les escape. Cada chat es una oportunidad con etapa y fecha de seguimiento.' },
          { h3: 'Negocios con ciclo de venta largo', text: 'Inmobiliarias, servicios profesionales, B2B: donde el cliente dice "lo pienso" y hay que retomar en días. WapyCRM hace que lo pendiente aparezca a tiempo.' },
          { h3: 'Gerentes que vuelan a ciegas', text: 'Dueños que no saben cuántas oportunidades hay ni en qué etapa. El embudo les da visibilidad real sin tener que perseguir a cada vendedor.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Señales de que tu equipo lo necesita',
        intro: 'Si te suenan tres o más de estas, el problema no es el precio: es el seguimiento.',
        items: [
          'Clientes que preguntaron y nunca recibieron una segunda respuesta',
          'Vendedores que llevan sus contactos en su celular personal',
          'Nadie sabe cuántas cotizaciones están abiertas ahora mismo',
          'Se pierde el historial cuando alguien renuncia',
          'El seguimiento depende de que alguien "se acuerde"',
          'No hay forma clara de saber quién vende y quién no',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'saas/chatmantis', label: 'ChatMantis' },
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Preventa inmobiliaria' },
          { slug: 'saas', label: 'Todos los SaaS' },
        ],
      },
    ],
    cta: { h2: 'Pide una demo de WapyCRM', wa: 'Hola, quiero una demo de WapyCRM.' },
  },

  /* ---------- CIFRAO ---------- */
  {
    slug: 'saas/cifrao',
    parent,
    title: 'Cifrao | Software Contable para Empresas en Panamá',
    description: 'Cifrao: facturación, conciliación bancaria y cuentas por cobrar para empresas en Panamá. La contabilidad sale de la hoja de cálculo.',
    h1: 'Cifrao',
    breadcrumb: 'Cifrao',
    heroCtas: [
      { label: 'Agendar demostración', href: '/contacto/', primary: true },
      { label: 'Ver todos los SaaS', href: '/saas/' },
    ],
    lead: [
      'La contabilidad de tu empresa no puede vivir en una hoja de cálculo que no avisa, no concilia y se rompe cuando dos personas la editan.',
      'El punto de quiebre llega siempre igual: nadie sabe cuánto le deben ni desde cuándo. Cifrao pone la facturación, los gastos y las cuentas por cobrar en un sistema que sí avisa cuando una factura vence, sí concilia con el banco y sí guarda el rastro de quién cambió qué.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué hace Cifrao',
        items: [
          'Emisión y control de facturas',
          'Cuentas por cobrar con antigüedad de saldos',
          'Conciliación bancaria',
          'Registro y clasificación de gastos',
          'Informes de ingresos, egresos y resultados',
          'Control de acceso por usuario y rol',
          'Auditoría de cada movimiento',
          'Exportación lista para tu contador',
        ],
      },
      {
        type: 'prose',
        h2: 'Tu contador lo va a agradecer',
        paragraphs: [
          'Cifrao no reemplaza al contador: le entrega información ordenada y al día para que ejerza su criterio sin perseguir documentos. El cierre de mes deja de ser una arqueología de facturas.',
          'La migración desde hojas de cálculo está resuelta: importamos clientes, saldos pendientes e histórico. <strong>La calidad del arranque depende del orden de tus datos</strong>, y te ayudamos a limpiarlos.',
          'Y si vendes en línea, se integra con tu tienda para que cada venta se registre sola. Teclear dos veces la misma factura es el error contable más caro y más evitable.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta Cifrao?', a: 'Licencia mensual según usuarios y volumen. La migración inicial de datos se cotiza según el estado de tus registros actuales. Pide una demo con tus números reales.' },
          { q: '¿Sirve para mi contador externo?', a: 'Sí: acceso propio con permisos de contador y exportaciones en los formatos que necesita. Muchos contadores lo usan con varios clientes a la vez.' },
          { q: '¿Se integra con mi tienda online?', a: 'Sí, vía API con las tiendas que construimos y con plataformas estándar. Ver <a href="/servicios/tiendas-online-ecommerce-panama/">tiendas online</a>.' },
          { q: '¿Puedo migrar desde mi hoja de cálculo actual?', a: 'Sí. Importamos clientes, saldos pendientes e histórico como parte del arranque. La calidad del resultado depende del orden de tus datos, y te ayudamos a limpiarlos antes de cargar.' },
          { q: '¿Cifrao presenta impuestos o reemplaza a mi contador?', a: 'No. Cifrao ordena y mantiene al día tu información contable para que tu contador ejerza su criterio sin perseguir documentos. La declaración y el criterio fiscal siguen siendo de tu profesional.' },
          { q: '¿Varias personas pueden usarlo a la vez sin pisarse?', a: 'Sí, y es una de las razones para salir de la hoja de cálculo. Cada usuario entra con su rol y sus permisos, y cada movimiento queda auditado: se sabe quién cambió qué y cuándo.' },
          { q: '¿Me avisa antes de que se me acumulen las cuentas por cobrar?', a: 'Sí. Las cuentas por cobrar se ordenan por antigüedad de saldos y el sistema avisa cuando una factura vence. Dejas de descubrir tarde que un cliente te debe desde hace meses.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es Cifrao',
        intro: 'Para empresas de Panamá que ya sienten que la hoja de cálculo se les quedó chica.',
        items: [
          { h3: 'Pymes que crecieron', text: 'Negocios donde la contabilidad empezó en Excel y hoy ya son demasiadas facturas, gastos y cobros para controlarlo a mano sin errores.' },
          { h3: 'Empresas con cuentas por cobrar', text: 'Quienes venden a crédito y necesitan saber cuánto les deben y desde cuándo, con avisos antes de que el saldo se vuelva incobrable.' },
          { h3: 'Comercios que venden en línea', text: 'Si tienes tienda online, cada venta se registra sola vía integración. Se acaba el teclear dos veces la misma factura.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Ver tiendas online' } },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo es la puesta en marcha',
        intro: 'Sacar la contabilidad de la hoja de cálculo se hace por pasos, sin frenar la operación.',
        items: [
          { h3: '1. Revisamos tus datos actuales', text: 'Vemos el estado de tus registros, clientes y saldos. De ahí sale el alcance real de la migración, sin sorpresas después.' },
          { h3: '2. Limpiamos y migramos', text: 'Importamos clientes, saldos pendientes e histórico ya ordenados. Un buen arranque evita arrastrar errores viejos al sistema nuevo.' },
          { h3: '3. Configuramos usuarios y roles', text: 'Cada persona entra con sus permisos, y tu contador externo recibe su propio acceso con exportaciones en el formato que necesita.' },
          { h3: '4. Conectamos e informamos', text: 'Enlazamos tu tienda si vendes en línea y dejamos los informes de ingresos, egresos y resultados listos para que el cierre de mes deje de doler.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' },
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
          { slug: 'saas', label: 'Todos los SaaS' },
        ],
      },
    ],
    cta: { h2: 'Pide una demo de Cifrao', wa: 'Hola, quiero una demo de Cifrao.' },
  },
];
