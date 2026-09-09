/* SILO FUNCIONALIDADES: extras que convierten una web en una herramienta. */
import type { PageData } from '../types';

const parent = { slug: 'funcionalidades', label: 'Funcionalidades' };

export const funcionalidades: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'funcionalidades',
    title: 'Funcionalidades para tu Página Web | Pagos, IA y Reservas',
    description: 'Funcionalidades que convierten tu web en una herramienta de trabajo: pagos con Yappy, chatbot con IA y sistemas de reservas online.',
    h1: 'Funcionalidades que trabajan por ti',
    breadcrumb: 'Funcionalidades',
    heroImage: { src: 'https://picsum.photos/seed/whatsapp-pago-movil-panama/1200/675', alt: 'Persona usando un teléfono para pagar y chatear con un negocio' },
    lead: [
      'Una web moderna no solo informa: cobra, responde y agenda. Estas tres funcionalidades hacen la diferencia entre un folleto y una herramienta.',
      'Cada una se integra a tu sitio actual o al que construyamos juntos. Y las tres comparten un objetivo: que el visitante complete la acción sin fricción y sin esperar a que alguien de tu equipo esté disponible.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Qué puedes integrar',
        items: [
          { h3: 'Yappy y pasarelas de pago', text: 'Cobra en tu web como pagan los panameños: Botón de Pago Yappy oficial más tarjetas. Sin transferencias por captura de pantalla.', link: { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas' } },
          { h3: 'Chatbot con IA', text: 'Un asistente entrenado con tu información que responde en tu web, WhatsApp e Instagram las 24 horas. Con ChatMantis, nuestro producto.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' } },
          { h3: 'Reservas y citas online', text: 'Tu cliente agenda solo, con disponibilidad real, recordatorios automáticos y pago anticipado si lo necesitas.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' } },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Se pueden agregar a mi web actual?', a: 'En la mayoría de los casos sí, tras una revisión técnica de tu sitio. Si la base no lo permite, te lo decimos antes de cobrar un centavo.' },
          { q: '¿Cuánto cuesta integrar una funcionalidad?', a: 'Cada página detalla su rango. Las integraciones se cotizan cerradas: revisamos tu caso, definimos alcance y recibes un precio fijo.' },
          { q: '¿Requieren mensualidad?', a: 'Depende: las pasarelas cobran comisión por transacción (no nosotros), el chatbot con IA tiene licencia mensual y las reservas dependen de la herramienta elegida. Todo queda claro en la propuesta.' },
          { q: '¿Puedo empezar con una sola funcionalidad?', a: 'Sí, y suele ser lo más sensato. Muchos clientes arrancan con el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">cobro con Yappy</a> porque es el que da retorno más rápido, y luego suman el chatbot o las reservas cuando el flujo lo pide. No hay que hacerlo todo de una vez.' },
          { q: '¿Las tres se conectan con WhatsApp?', a: 'De distinta forma: el chatbot con IA atiende directo por WhatsApp con la API oficial, las reservas envían confirmaciones y recordatorios por ese canal, y con Yappy puedes generar enlaces de pago para cerrar ventas por chat. WhatsApp es el hilo que une las tres.' },
          { q: '¿Funcionan sobre WordPress o solo en sitios a medida?', a: 'Funcionan en ambos. La mayoría de integraciones corren sobre <a href="/tecnologias/diseno-web-wordpress-panama/">WordPress</a>, Shopify o un sitio <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">a medida</a>. Lo que revisamos antes es que la base de tu web esté sana; si no lo está, te lo decimos por escrito.' },
          { q: '¿Cuánto suman las funcionalidades al costo del proyecto?', a: 'Depende de cuáles. Un sitio corporativo con formulario y WhatsApp entra en la Página PYME de $950. Sumar catálogo, carrito y pagos lo lleva al rango de E-commerce, desde $1,500. Integraciones con tus sistemas, portales de cliente o multi-idioma son proyecto a medida, desde $2,900. Los precios son en dólares y no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene sumar funcionalidad?', a: 'Cuando todavía no tienes tráfico. Un sistema de reservas sin visitas no reserva nada, y un chatbot sin preguntas que responder es un adorno caro. El orden que funciona es: publicar, traer gente, ver dónde se traba y recién ahí automatizar ese punto concreto.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo integramos una funcionalidad',
        intro: 'Sin sorpresas: revisamos, cotizamos cerrado y recién ahí tocamos tu web.',
        items: [
          { h3: 'Revisión técnica', text: 'Vemos sobre qué está construida tu web y si soporta la integración. Si la base no da, te lo decimos antes de cobrar nada.' },
          { h3: 'Alcance y cotización cerrada', text: 'Definimos exactamente qué se integra y recibes una cotización cerrada por escrito antes de empezar. Cero letra chica.' },
          { h3: 'Integración y pruebas reales', text: 'Conectamos la funcionalidad y la probamos en ambiente real: un pago de prueba, una conversación real, una reserva de punta a punta.' },
          { h3: 'Publicación y acompañamiento', text: 'Publicamos cuando todo funciona y te mostramos cómo operarlo. Quedamos disponibles por WhatsApp para los primeros días.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Cuál te conviene según tu negocio',
        intro: 'No todas las webs necesitan las tres. Este es el punto de partida más común por tipo de operación.',
        items: [
          { h3: 'Vendes productos o servicios', text: 'Si cobras en línea, empieza por el pago: es la funcionalidad que se paga sola. Yappy y tarjeta directo en tu web o tienda.', link: { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas' } },
          { h3: 'Recibes muchas consultas', text: 'Si tu WhatsApp e Instagram no dan abasto y pierdes mensajes fuera de horario, un asistente con IA responde y califica 24/7.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' } },
          { h3: 'Trabajas con citas', text: 'Si tu operación vive de agenda (clínica, barbería, spa, consultoría), las reservas online liberan a tu equipo del teléfono.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Las tres funcionan mejor juntas',
        paragraphs: [
          'Cada funcionalidad rinde sola, pero se potencian cuando conversan entre sí. El <strong>chatbot con IA</strong> agenda una cita, el <strong>sistema de reservas</strong> cobra el anticipo con Yappy y la <strong>pasarela de pago</strong> confirma todo sin que nadie de tu equipo levante un dedo. Ese es el escenario que buscamos: el visitante completa la acción de principio a fin.',
          'También comparten la misma lógica de negocio: reducir la fricción y quitarle trabajo repetitivo a tu equipo. Un mensaje sin responder, un pago que quedó en "lo hago después" o una cita coordinada en diez mensajes son ventas que se enfrían. Automatizar esos tres momentos es donde una web deja de ser un folleto.',
          'Y todo esto suma para tu <strong>posicionamiento</strong>: Google premia las webs donde el usuario completa lo que vino a hacer sin rebotar. Si quieres que además te encuentren, el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local en Panamá</a> hace que estas funcionalidades reciban el tráfico que merecen.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios', label: 'Servicios de diseño web' },
          { slug: 'saas', label: 'Nuestros SaaS' },
          { slug: 'industrias', label: 'Diseño web por industria' },
        ],
      },
    ],
  },

  /* ---------- YAPPY ---------- */
  {
    slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama',
    parent,
    title: 'Integrar Yappy en tu Página Web | Pasarelas de Pago Panamá',
    description: 'Integramos el Botón de Pago Yappy y pasarelas con tarjeta en tu página web o tienda online. Cobra en línea como pagan los panameños.',
    h1: 'Yappy y pasarelas de pago en tu web',
    breadcrumb: 'Yappy y Pasarelas de Pago',
    service: { type: 'Integración de pasarelas de pago' },
    lead: [
      'En Panamá, quien no cobra con Yappy pierde ventas. Integramos el Botón de Pago oficial más tarjetas, directo en tu web o tienda.',
      'El pago por transferencia con captura de pantalla mata la venta por impulso: el cliente "lo hace después" y después no existe. Un botón de pago en la misma página cierra la venta en el momento, con confirmación automática y sin conciliar capturas a mano.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué integramos',
        items: [
          'Botón de Pago Yappy oficial (Banco General)',
          'Pasarelas con tarjeta de crédito y débito',
          'Confirmación automática del pedido al pagar',
          'Conciliación: cada pago ligado a su orden',
          'Pagos en tiendas Shopify y WooCommerce',
          'Enlaces de pago para vender por WhatsApp',
          'Cumplimiento de requisitos de cada pasarela',
          'Pruebas completas en ambiente real antes de publicar',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué necesitas para cobrar en línea en Panamá',
        paragraphs: [
          'Para el <strong>Botón de Pago Yappy</strong> necesitas una cuenta comercial en Banco General y tu registro de comercio. Nosotros gestionamos la parte técnica: credenciales, integración, confirmaciones y pruebas.',
          'Para <strong>tarjetas</strong>, las pasarelas disponibles en Panamá evalúan tu actividad comercial y volumen. Te orientamos sobre cuál conviene según tu banco y tu ticket promedio, y preparamos la documentación técnica que piden.',
          'El resultado: el cliente paga en tu página, tú recibes la confirmación al instante y el pedido queda registrado. <strong>Nada de perseguir capturas de pantalla</strong> a las once de la noche.',
        ],
      },
            {
        type: 'prose',
        h2: 'Yappy, tarjeta y transferencia: cuál conviene para qué',
        paragraphs: [
          'No son alternativas entre las que hay que elegir: son tres cosas distintas que resuelven situaciones distintas, y la mayoría de los negocios panameños necesitan al menos dos.',
          '<strong>Yappy</strong> es lo que buena parte del país usa por costumbre. Es inmediato, el cliente ya lo tiene configurado y no requiere escribir datos de tarjeta. Su ausencia manda a la gente de vuelta al mensaje directo, que es justo lo que la tienda venía a evitar.',
          '<strong>La tarjeta</strong> es imprescindible para el cliente extranjero, para tickets altos y para cualquier cobro recurrente. Tiene comisión más alta y un proceso de afiliación más largo, pero sin ella se pierde una parte del mercado que no se puede recuperar de otra forma.',
          '<strong>La transferencia</strong> sigue funcionando en B2B y en montos grandes, y tiene un costo operativo que casi nadie calcula: alguien tiene que revisar la cuenta, identificar el pago y conciliarlo a mano. Sirve como complemento, no como método principal de una tienda.',
        ],
      },
      {
        type: 'prose',
        h2: 'La conciliación es el trabajo que aparece después',
        paragraphs: [
          'Cobrar en línea resuelve un problema y crea otro que nadie menciona en la venta: saber qué pago corresponde a qué pedido.',
          'Con transferencias es evidente: llegan montos a la cuenta y alguien tiene que emparejarlos con pedidos, muchas veces persiguiendo comprobantes por WhatsApp. Con pasarelas es más sutil pero también existe: el dinero llega en depósitos agrupados con la comisión ya descontada, y cuadrar eso con las ventas del día requiere método.',
          'La integración bien hecha reduce mucho ese trabajo, porque el pedido queda marcado como pagado automáticamente cuando la pasarela confirma. Lo que no desaparece es la conciliación contable de fin de mes, que sigue necesitando que los datos estén ordenados.',
          '<strong>Vale la pena definir desde el inicio quién concilia y con qué frecuencia.</strong> Es la tarea que se acumula en silencio y termina explotando en el cierre del año.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué hace falta para empezar a cobrar en línea',
        intro: 'Lo que hay que tener listo antes de que nada de esto se pueda configurar.',
        items: [
          'Empresa constituida con aviso de operación vigente',
          'Cuenta bancaria a nombre de la empresa, no personal',
          'RUC y documentación del representante legal',
          'Sitio con certificado de seguridad activo',
          'Términos y condiciones publicados en la web',
          'Política de privacidad y de tratamiento de datos',
          'Política de reembolsos y cambios, que las pasarelas revisan',
          'Descripción clara de qué vendes: las afiliaciones se rechazan por esto',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: cuántos pagos se completan',
        paragraphs: [
          'El número que importa no es cuántos pagos entraron, es qué porcentaje de los que empezaron a pagar terminaron. La diferencia entre esos dos es dinero que estuvo a un paso de entrar.',
          'Si mucha gente abandona en el paso del pago, hay tres sospechosos habituales y en este orden: falta el método que esperaban, aparece un costo que no estaba antes, o el proceso pide crear cuenta. Los tres se arreglan sin publicidad.',
          'El segundo dato es el reparto por método. Suele desmentir suposiciones: negocios convencidos de que su clientela paga con tarjeta descubren que la mayoría usa Yappy, o al revés. Ese dato decide dónde vale la pena reducir fricción.',
          'Y los pagos fallidos por causa. <strong>Un pico de fallos técnicos puede pasar semanas desapercibido</strong> mientras se pierden ventas que el negocio ni sabe que existieron.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta integrar Yappy en mi web?', a: 'La integración del Botón de Pago Yappy en un sitio o tienda existente se cotiza cerrada tras revisar tu plataforma; en tiendas nuevas nuestras viene incluida. Yappy no nos paga comisión: la relación comercial es directa entre tu empresa y Banco General.' },
          { q: '¿Puedo cobrar con Yappy sin tener tienda online?', a: 'Sí: integramos el botón en una página de pago simple o generamos enlaces de pago para compartir por WhatsApp. Ideal para servicios y pedidos por encargo.' },
          { q: '¿Qué comisión cobra Yappy?', a: 'La comisión la define Banco General según tu acuerdo comercial y puede cambiar; consúltala directamente con tu ejecutivo. Nosotros cobramos solo la integración técnica, sin porcentaje sobre tus ventas.' },
          { q: '¿Funciona con Shopify?', a: 'Sí, integramos el Botón de Pago Yappy en Shopify y WooCommerce. Es de las integraciones más solicitadas en <a href="/servicios/tiendas-online-ecommerce-panama/">nuestras tiendas online</a>.' },
          { q: '¿Es seguro cobrar con tarjeta en mi web?', a: 'Sí. Los datos de la tarjeta nunca pasan por tu servidor: los captura la pasarela en su entorno certificado y tú solo recibes la confirmación del pago. Esa es justamente la razón para usar una pasarela seria en vez de improvisar con formularios o transferencias por captura.' },
          { q: '¿Puedo ofrecer Yappy y tarjeta al mismo tiempo?', a: 'Sí, y es lo que recomendamos. El cliente elige cómo pagar en la misma pantalla: Yappy para quien vive en el ecosistema panameño, tarjeta para compras grandes o clientes fuera del país. Mientras más opciones de pago, menos carritos abandonados.' },
          { q: '¿Qué pasa con los reembolsos o pagos duplicados?', a: 'Los reembolsos se gestionan desde el panel de la pasarela o con tu ejecutivo de Banco General, según el método. Como cada pago queda ligado a su orden, identificar un cobro duplicado o una devolución es directo, sin cruzar capturas a mano.' },
                  { q: '¿Necesito Yappy y tarjeta, o basta con uno?', a: 'Casi siempre los dos. Yappy es lo que buena parte del país usa por costumbre y su ausencia manda al cliente de vuelta al mensaje directo. La tarjeta es imprescindible para el cliente extranjero, tickets altos y cobros recurrentes. La transferencia sirve de complemento, no como método principal.' },
          { q: '¿Qué necesito para poder cobrar en línea en Panamá?', a: 'Empresa constituida con aviso de operación, cuenta bancaria a nombre de la empresa, RUC y documentos del representante legal, sitio con certificado activo, y términos, privacidad y política de reembolsos publicados. Las afiliaciones se rechazan a menudo por no describir claramente qué se vende.' },
          { q: '¿Qué es la conciliación y por qué importa?', a: 'Saber qué pago corresponde a qué pedido. Con transferencias hay que emparejar montos a mano; con pasarelas, el dinero llega agrupado y con la comisión descontada. La integración reduce el trabajo, pero conviene definir desde el inicio quién concilia y cada cuánto.' },
          { q: '¿Por qué la gente abandona en el paso del pago?', a: 'Tres causas en este orden: falta el método que esperaban, aparece un costo que no estaba antes, o el proceso obliga a crear cuenta. Los tres se arreglan sin gastar en publicidad, y el reparto por método suele desmentir lo que el negocio suponía.' },
          { q: '¿Qué entra en el trabajo de integración y qué cobra el banco?', a: 'Si la tienda se construye con nosotros, la integración va dentro del proyecto de E-commerce, desde $1,500. Sobre una tienda que ya existe se cotiza aparte según la plataforma. A eso se le suman las comisiones que cobra cada medio de pago, que no las define la agencia sino el banco o la pasarela: pídelas por escrito antes de firmar, porque cambian y varían por comercio. Nuestros precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO necesitas una pasarela de pago?', a: 'Si vendes poco volumen y con ticket alto, cobrar por transferencia o Yappy a mano te sale gratis y funciona. La pasarela empieza a pagarse sola cuando el cobro manual te está costando ventas: pedidos que se enfrían esperando confirmación, o clientes fuera de horario que no pueden pagar solos.' },
          { q: '¿Qué incluye el trabajo y qué gastos son recurrentes?', a: 'La integración es un trabajo de una vez: conectar el medio de pago, probar el flujo completo y dejarlo cobrando de verdad, con 30 días de garantía por fallas técnicas. Lo recurrente es otra cosa: infraestructura desde $350 al año y mantenimiento desde $59 al mes, más las comisiones que cobre cada medio de pago por transacción. Nuestros precios no incluyen ITBMS (7%).' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo dejamos tu web cobrando',
        intro: 'De la revisión al primer pago real, con pruebas antes de publicar.',
        items: [
          { h3: 'Revisamos tu plataforma', text: 'Confirmamos que tu web o tienda soporta la pasarela y qué necesitas de tu lado: cuenta comercial en Banco General y registro de comercio para Yappy.' },
          { h3: 'Configuramos credenciales', text: 'Gestionamos la parte técnica: credenciales, botón de pago, confirmaciones automáticas y el enlace de cada pago con su orden.' },
          { h3: 'Probamos en real', text: 'Hacemos pagos de prueba de punta a punta antes de que salga a producción. Nada se publica hasta que un cobro completo funciona.' },
          { h3: 'Publicamos y verificamos', text: 'Activamos el cobro en vivo y confirmamos con una transacción real que la confirmación y la conciliación llegan como deben.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es',
        intro: 'Si en algún punto de tu proceso pides "hazme una transferencia y mándame la captura", esto es para ti.',
        items: [
          { h3: 'Tiendas online', text: 'Cobro dentro del carrito, sin sacar al cliente de la compra. La integración viene incluida en nuestras tiendas nuevas.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' } },
          { h3: 'Landing pages de un solo producto', text: 'Una página de venta con botón de pago directo convierte mejor que mandar al cliente a otro lado a pagar.', link: { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing Pages' } },
          { h3: 'Servicios y pedidos por WhatsApp', text: 'Enlaces de pago Yappy para cerrar la venta por chat, sin tienda completa. Ideal para encargos y servicios.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Ventas por chat' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Menos trabajo manual, menos errores',
        paragraphs: [
          'El costo escondido del pago por transferencia no es solo perder la venta por impulso: es el tiempo de tu equipo <strong>conciliando capturas a mano</strong> cada noche, cruzando montos, persiguiendo al cliente que "ya pagó" pero no mandó comprobante. Ese trabajo desaparece cuando cada pago confirma su propia orden de forma automática.',
          'También baja el riesgo de error humano. Un monto mal leído, un pago aplicado a la orden equivocada o un comprobante falso son problemas reales cuando concilias a mano. Con la pasarela, el sistema registra el pago exacto ligado a su pedido, y tú trabajas sobre datos, no sobre imágenes de WhatsApp.',
          'Si vendes fuera de horario, la diferencia es aún mayor: el cliente paga a las once de la noche y su pedido ya queda listo para despachar al día siguiente, sin que nadie tenga que estar despierto para aprobarlo. Eso es lo que convierte una web en una <strong>herramienta que cobra sola</strong>.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' },
          { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Shopify' },
          { slug: 'blog/como-integrar-yappy-tu-tienda-online', label: 'Guía: integrar Yappy' },
        ],
      },
    ],
    cta: { h2: 'Cobra en línea esta semana', wa: 'Hola, quiero integrar Yappy en mi página web.' },
  },

  /* ---------- CHATBOT IA ---------- */
  {
    slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama',
    parent,
    title: 'Chatbot con IA para tu Página Web | ChatMantis Panamá',
    description: 'Chatbot con inteligencia artificial para tu web: responde con tu información real, capta datos y deriva a WhatsApp. Con ChatMantis, nuestro producto.',
    h1: 'Un chatbot con IA que sí sabe de tu negocio',
    breadcrumb: 'Chatbot con IA',
    service: { type: 'Implementación de chatbots con inteligencia artificial' },
    lead: [
      'No es el robot de "presiona 1": es un asistente entrenado con tu información real que responde en tu web, WhatsApp e Instagram, a toda hora.',
      'El visitante que pregunta y no recibe respuesta se va al competidor que sí contesta. Un asistente con IA responde en segundos, califica al interesado y entrega la conversación a tu equipo con todo el contexto. Corre sobre ChatMantis, nuestro propio producto: lo operamos, no lo revendemos.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué hace el asistente',
        items: [
          'Responde dudas con tu información verificada (técnica RAG)',
          'Admite cuando no sabe y deriva a una persona',
          'Capta nombre, necesidad y contacto del visitante',
          'Conecta la web con WhatsApp e Instagram en una bandeja',
          'Agenda citas según tu disponibilidad real',
          'Da seguimiento a quien dejó la conversación a medias',
          'Registra cada conversación en el CRM',
          'Se identifica como asistente virtual: transparencia ante todo',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué no inventa respuestas',
        paragraphs: [
          'El miedo justificado con la IA es que improvise. Se controla con la técnica correcta: <strong>RAG</strong> (generación aumentada por recuperación). Antes de responder, el asistente busca en los documentos que tú aprobaste (precios, requisitos, políticas) y construye la respuesta solo desde ahí.',
          'Cuando la información no está en sus documentos, lo dice y deriva a tu equipo. <strong>Preferimos un asistente que derive de más a uno que invente</strong>: el segundo destruye la confianza de tu cliente en una sola conversación mala.',
          'Y como somos <strong>Meta Verified Tech Provider</strong>, la conexión con WhatsApp e Instagram usa las APIs oficiales, no soluciones improvisadas que Meta bloquea sin aviso.',
        ],
      },
            {
        type: 'prose',
        h2: 'Lo que un asistente no debe hacer nunca',
        paragraphs: [
          'La mayoría de los fracasos con asistentes de IA no vienen de que responda mal: vienen de haberle dado tareas que no le tocaban.',
          'Un asistente no debe cerrar ventas complejas ni negociar precios fuera de lo publicado. No debe dar diagnósticos médicos, asesoría legal ni recomendaciones financieras, aunque el cliente insista. Y no debe manejar un reclamo delicado: alguien molesto que recibe una respuesta automática se enoja el doble.',
          'Tampoco debe inventar. Cuando la pregunta sale de lo que tiene documentado, la respuesta correcta es decir que no lo sabe y ofrecer pasar a una persona. Un asistente que improvisa genera compromisos que el negocio después tiene que cumplir o desmentir, y las dos salidas son malas.',
          '<strong>El límite se define antes de encenderlo</strong>, no cuando aparece el primer problema. Y esa lista de límites es tan importante como el contenido con el que se le entrena.',
        ],
      },
      {
        type: 'prose',
        h2: 'El traspaso a un humano es la función más importante',
        paragraphs: [
          'Suena contradictorio y es la clave de que la gente acepte hablar con un asistente: saber que hay una salida.',
          'El traspaso tiene que cumplir tres condiciones. Estar siempre disponible, no escondido tras cinco intentos fallidos. Llevar el contexto, para que el cliente no tenga que repetir lo que ya escribió, que es lo que más molesta de estos sistemas. Y ser honesto sobre el horario: si nadie va a responder hasta mañana, hay que decirlo en vez de dejar a la persona esperando.',
          'Bien montado, el asistente actúa como un filtro: resuelve lo repetitivo —precios, horarios, ubicación, qué documentos hacen falta— y le entrega a tu equipo solo las conversaciones que de verdad necesitan una persona, ya con el contexto recogido.',
          '<strong>El objetivo no es que el asistente atienda todo.</strong> Es que tu equipo deje de contestar veinte veces al día la misma pregunta y pueda dedicarse a las conversaciones que cierran.',
        ],
      },
      {
        type: 'prose',
        h2: 'De qué se alimenta, y por qué eso decide si funciona',
        paragraphs: [
          'Un asistente es tan bueno como el contenido que le das. Ese es el trabajo real del proyecto y donde casi nadie pone el esfuerzo.',
          'Lo que necesita no es un documento corporativo: son respuestas concretas a lo que la gente pregunta de verdad. Precios o rangos, horarios, ubicación y cómo llegar, qué incluye cada servicio, plazos, formas de pago, qué documentos hacen falta, política de cambios.',
          'La mejor fuente para armarlo está en tu propio WhatsApp: las últimas doscientas conversaciones muestran exactamente qué se pregunta y con qué palabras. Es mucho más útil que cualquier manual redactado desde cero.',
          '<strong>Y hay que mantenerlo.</strong> Un asistente entrenado con precios del año pasado da respuestas equivocadas con total seguridad, que es peor que no responder. Actualizarlo cuando cambian precios u horarios es parte del servicio, no un extra.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: cuántas conversaciones resolvió solo',
        paragraphs: [
          'La métrica central es qué porcentaje de conversaciones terminó sin que interviniera una persona. Es el trabajo que el asistente absorbió y se puede traducir directamente en horas de equipo.',
          'La segunda, y la más útil para mejorarlo, es la lista de preguntas que no supo responder. Cada una es un hueco en su contenido, y revisarla cada semana al principio hace que el asistente mejore rápido. Sin esa revisión, se queda estancado donde arrancó.',
          'El tercero es qué pasó después del traspaso: de las conversaciones que llegaron a una persona, cuántas terminaron en venta. Si esa tasa es alta, el filtro está funcionando y te está entregando gente calificada.',
          'Y el horario de las conversaciones. <strong>La proporción que ocurre fuera del horario de atención suele ser la sorpresa</strong>, porque son consultas que antes simplemente se perdían.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta un chatbot con IA?', a: 'La implementación (entrenamiento con tu información, conexión de canales y pruebas) se cotiza cerrada; la licencia de ChatMantis es mensual. El consumo de la API de Meta y del motor de IA se paga por uso desde tus propias cuentas, sin margen nuestro.' },
          { q: '¿Cuánto tarda en estar funcionando?', a: 'Alrededor de 2 semanas, incluida la verificación oficial de tu número en WhatsApp (los tiempos de aprobación de Meta no dependen de nosotros, por eso los iniciamos primero).' },
          { q: '¿El cliente sabe que habla con una IA?', a: 'Sí, y es deliberado: el asistente se identifica y ofrece pasar a una persona cuando se lo piden. Ocultarlo genera desconfianza cuando el usuario lo descubre, y siempre lo descubre.' },
          { q: '¿Qué pasa con las conversaciones?', a: 'Quedan en la bandeja de <a href="/saas/chatmantis/">ChatMantis</a> con historial único por cliente, sin importar si escribió por la web, WhatsApp o Instagram. Tu equipo retoma cualquier conversación con el contexto completo.' },
          { q: '¿En qué idiomas responde?', a: 'Principalmente en español de Panamá, con el tono que definas para tu marca. También puede responder en inglés si tu público lo necesita (turismo, clientes extranjeros). El idioma se ajusta al del visitante dentro de la misma conversación.' },
          { q: '¿Puedo editar lo que sabe el asistente?', a: 'Sí, y es tu responsabilidad y tu ventaja. Tú apruebas los documentos que alimentan al asistente (precios, requisitos, políticas) y los actualizas cuando cambian. Si subes un precio nuevo, el asistente responde con ese; no repite información vieja que quedó en su cabeza, porque no funciona así.' },
          { q: '¿Reemplaza a mi equipo de atención?', a: 'No, lo libera. El asistente absorbe las preguntas repetitivas y el primer contacto a toda hora; tu equipo dedica su tiempo a las conversaciones que de verdad cierran ventas. Cuando el caso lo amerita, el asistente entrega la conversación a una persona con todo el contexto ya cargado.' },
                  { q: '¿Qué no debe hacer un asistente de IA?', a: 'Cerrar ventas complejas, negociar precios fuera de lo publicado, dar diagnósticos médicos o asesoría legal, y manejar reclamos delicados: alguien molesto que recibe respuesta automática se enoja el doble. Y no debe inventar: cuando no sabe, debe decirlo y pasar a una persona.' },
          { q: '¿La gente no prefiere hablar con una persona?', a: 'Prefiere saber que puede. Por eso el traspaso a humano es la función más importante: siempre disponible, llevando el contexto para que nadie repita lo que ya escribió, y honesto sobre el horario si nadie va a responder hasta mañana.' },
          { q: '¿Con qué se entrena el asistente?', a: 'Con respuestas concretas a lo que la gente pregunta de verdad: precios o rangos, horarios, ubicación, qué incluye cada servicio, plazos, formas de pago. La mejor fuente son tus últimas doscientas conversaciones de WhatsApp, mucho más útil que un manual redactado desde cero.' },
          { q: '¿Cómo mido si el asistente sirve?', a: 'Por el porcentaje de conversaciones que terminó sin intervención humana, y por la lista de preguntas que no supo responder: cada una es un hueco que se puede llenar. Revisarla cada semana al principio hace que mejore rápido.' },
          { q: '¿Qué se paga aparte del chatbot?', a: 'El bot corre sobre ChatMantis, que es producto propio y se cobra por suscripción mensual según el volumen de conversaciones. El trabajo de montarlo (entrenarlo con tu información, definir cuándo pasa a un humano, conectarlo al sitio) se cotiza una vez. Aparte van los costos de Meta por la API de WhatsApp, que factura Meta y no la agencia. Los precios no incluyen ITBMS (7%).' },
          { q: '¿El bot atiende los fines de semana y de madrugada?', a: 'Sí: responde los 7 días de la semana, a cualquier hora, y esa es buena parte del argumento. La mayoría de las consultas que se pierden llegan fuera de horario de oficina, cuando el cliente por fin tuvo tiempo de escribir. Lo que no hace solo es cerrar: las conversaciones que requieren decisión quedan marcadas para que una persona las retome al día siguiente.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo montamos tu asistente',
        intro: 'De tu información real a un asistente atendiendo por web, WhatsApp e Instagram.',
        items: [
          { h3: 'Reunimos tu información', text: 'Partimos de tus documentos reales: precios, requisitos, preguntas frecuentes, políticas. Solo lo que tú apruebas entra a la base de conocimiento.' },
          { h3: 'Entrenamos y afinamos el tono', text: 'Configuramos el asistente con técnica RAG y definimos su tono, sus límites y cuándo debe derivar a una persona. Probamos con preguntas reales de tu negocio.' },
          { h3: 'Conectamos tus canales', text: 'Enlazamos web, WhatsApp e Instagram con las APIs oficiales de Meta e iniciamos la verificación de tu número, que depende de los tiempos de Meta.' },
          { h3: 'Publicamos y monitoreamos', text: 'Ponemos el asistente a atender y revisamos las primeras conversaciones para ajustar respuestas. Tú ves todo en la bandeja de ChatMantis.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Dónde rinde más un asistente con IA',
        intro: 'Cualquier negocio con muchas consultas repetidas gana; estos son los casos donde el retorno se nota primero.',
        items: [
          { h3: 'Negocios que agendan citas', text: 'El asistente responde dudas y agenda directo en tu sistema de reservas, sin que nadie coordine por chat.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' } },
          { h3: 'Tiendas y catálogos', text: 'Responde por talla, precio y disponibilidad, y deriva al cobro con Yappy cuando el cliente decide comprar.', link: { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Cobro con Yappy' } },
          { h3: 'Equipos que quieren un CRM ordenado', text: 'Cada conversación queda registrada con su historial. Si necesitas más gestión comercial, se integra con nuestro CRM.', link: { slug: 'saas/wapycrm', label: 'WapyCRM' } },
        ],
      },
      {
        type: 'statement',
        text: 'Preferimos un asistente que derive de más a uno que invente de menos: una sola respuesta falsa cuesta más que diez "déjame paso a un compañero".',
        strong: 'La confianza del cliente no se recupera con un descuento.',
      },
      {
        type: 'related',
        items: [
          { slug: 'inteligencia-artificial-para-empresas-panama', label: 'Ecosistema de IA Empresarial' },
          { slug: 'saas/chatmantis', label: 'ChatMantis (el producto)' },
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' },
        ],
      },
    ],
    cta: { h2: 'Pon la IA a atender tu web', wa: 'Hola, quiero un chatbot con IA para mi página web.' },
  },

  /* ---------- RESERVAS ---------- */
  {
    slug: 'funcionalidades/sistemas-reservas-citas-online-panama',
    parent,
    title: 'Sistema de Reservas y Citas Online en Panamá | Agenda 24/7',
    description: 'Sistemas de reservas y citas online para tu web en Panamá: disponibilidad real, recordatorios automáticos y pago anticipado opcional.',
    h1: 'Reservas y citas online en tu web',
    breadcrumb: 'Reservas y Citas Online',
    service: { type: 'Implementación de sistemas de reservas online' },
    lead: [
      'Tu cliente agenda solo, a la hora que le convenga, sin diez mensajes de ida y vuelta para cuadrar una cita.',
      'Cada reserva coordinada a mano por WhatsApp cuesta minutos de tu equipo y horas de espera del cliente. Un sistema de reservas muestra la disponibilidad real, confirma al instante, envía recordatorios y (si quieres) cobra por adelantado para eliminar el no-show.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye el sistema',
        items: [
          'Calendario con tu disponibilidad real, sincronizado',
          'Confirmación inmediata por correo y WhatsApp',
          'Recordatorios automáticos que reducen ausencias',
          'Pago anticipado opcional (Yappy o tarjeta)',
          'Reglas por servicio: duración, margen y cupos',
          'Varios profesionales o sucursales en una agenda',
          'Reprogramación y cancelación sin llamadas',
          'Panel con el historial de cada cliente',
        ],
      },
            {
        type: 'prose',
        h2: 'El depósito es lo que de verdad corta las ausencias',
        paragraphs: [
          'Poner la agenda en línea resuelve la mitad del problema: el cliente reserva sin llamar. La otra mitad —que aparezca— necesita algo más que un recordatorio.',
          'Los recordatorios ayudan y no bastan. El que iba a faltar igual falta, y ese hueco de una hora un sábado ya no se recupera. Lo que sí cambia el comportamiento es que haya algo en juego, aunque sea poco.',
          'Un depósito pequeño al reservar hace que la persona avise cuando no puede ir, y ese aviso te devuelve el cupo con tiempo de llenarlo. No es por el dinero: es por el compromiso. La objeción de siempre es que espanta clientes, y en la práctica espanta exactamente a quien iba a faltar.',
          'Se monta dentro del propio flujo de reserva con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o pasarela</a>, y conviene aplicarlo solo donde la ausencia duele: servicios largos, horarios pico y citas de ticket alto.',
        ],
      },
      {
        type: 'prose',
        h2: 'Dos calendarios sin sincronizar generan citas dobles',
        paragraphs: [
          'Es el fallo más común al poner una agenda en línea y el que peor cae en el cliente: reservó, llegó, y el espacio estaba ocupado.',
          'Ocurre cuando la agenda web vive por su cuenta y el equipo sigue anotando citas en otro lado, sea un cuaderno, una hoja de cálculo o el calendario del teléfono de alguien. Las dos agendas creen que la hora está libre.',
          'La solución técnica es sincronización en dos direcciones: si alguien bloquea una hora en el calendario interno, esa hora desaparece de la web al instante, y viceversa. Sin eso, el sistema en línea es una promesa que el negocio no puede cumplir.',
          '<strong>Y hay una decisión de operación detrás, no solo técnica:</strong> hay que acordar que la agenda oficial es una sola. Un equipo que sigue anotando aparte convierte cualquier sistema en un problema nuevo.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué revisar antes de poner tu agenda en línea',
        intro: 'Cada punto de esta lista es una llamada que te vas a ahorrar o un conflicto que vas a evitar.',
        items: [
          'Duración real de cada servicio, incluido el tiempo de limpieza o preparación',
          'Cuántas citas simultáneas se pueden atender de verdad',
          'Horarios, feriados panameños y bloqueos por vacaciones',
          'Si se reserva por profesional o solo por servicio',
          'Con cuánta anticipación mínima se puede reservar',
          'Política de cancelación y hasta cuándo se puede mover una cita',
          'Qué pasa si el cliente llega tarde: cuánto se espera',
          'A quién le llega el aviso de cada reserva nueva',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: reservas sin intervención y ausencias',
        paragraphs: [
          'El número que justifica el sistema es cuántas reservas se completaron <strong>sin que nadie del equipo tuviera que intervenir</strong>. Ese es el trabajo que se dejó de hacer, y puesto en horas al mes es lo que el sistema devuelve.',
          'El segundo es la tasa de ausencia, comparada antes y después. Si el depósito está activo en algunos servicios y no en otros, la comparación entre ellos dice si conviene extenderlo.',
          'El tercero es el horario en que se reserva. Casi siempre sorprende: una porción grande de las reservas ocurre fuera del horario de atención, de noche o en fin de semana. Esas son las que directamente no existían antes, porque no había a quién llamar.',
          'Y la ocupación por franja horaria, que dice qué horas se llenan solas y cuáles hay que promocionar. Es información de negocio, no solo de sistema.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta un sistema de reservas?', a: 'Depende de si integramos una herramienta existente o construimos a medida. La integración estándar se cotiza cerrada tras revisar tu flujo de citas; el desarrollo a medida se dimensiona en una sesión de diagnóstico sin costo.' },
          { q: '¿Puede cobrar la cita por adelantado?', a: 'Sí, con Yappy o tarjeta. El pago anticipado (total o parcial) es la medida más efectiva contra las ausencias: quien pagó, llega.' },
          { q: '¿Se sincroniza con mi calendario?', a: 'Sí, con Google Calendar y similares. Las citas que agendas a mano bloquean la disponibilidad online y viceversa: una sola agenda, sin dobles reservas.' },
          { q: '¿Funciona con recordatorios por WhatsApp?', a: 'Sí, mediante la API oficial de WhatsApp Business. Como Meta Verified Tech Provider gestionamos la verificación de tu número como parte del proyecto.' },
          { q: '¿Puedo limitar cuántas citas se agendan por día?', a: 'Sí. Defines cupos por servicio, por profesional y por franja horaria, además de márgenes entre citas para prepararte o desplazarte. El sistema deja de ofrecer horarios cuando el día se llena, así no te sobrevendes.' },
          { q: '¿Sirve si tengo varios profesionales o sucursales?', a: 'Sí. Cada profesional tiene su propia agenda y disponibilidad, y el cliente puede elegir con quién o en qué sucursal reservar. Todo vive en un mismo panel para que veas la ocupación completa de un vistazo.' },
          { q: '¿Qué hago con los que agendan y no llegan?', a: 'El pago anticipado es la mejor defensa: quien deja su dinero por adelantado, llega. Súmale los recordatorios automáticos por correo y WhatsApp y las ausencias caen de forma notoria. Para los casos que igual fallan, el cliente puede reprogramar solo sin llamar a nadie.' },
                  { q: '¿Los recordatorios bastan para evitar ausencias?', a: 'Ayudan y no bastan: el que iba a faltar igual falta. Lo que cambia el comportamiento es un depósito pequeño al reservar, porque hace que la persona avise cuando no puede ir y te devuelve el cupo con tiempo de llenarlo. Espanta exactamente a quien iba a faltar.' },
          { q: '¿Por qué se generan citas dobles?', a: 'Porque la agenda web vive por su cuenta y el equipo sigue anotando en un cuaderno o en el calendario de alguien. Hace falta sincronización en dos direcciones, y una decisión de operación: acordar que la agenda oficial es una sola.' },
          { q: '¿Qué hay que definir antes de poner la agenda en línea?', a: 'La duración real de cada servicio incluyendo limpieza o preparación, cuántas citas simultáneas se atienden de verdad, feriados panameños, anticipación mínima, política de cancelación y a quién le llega el aviso de cada reserva.' },
          { q: '¿Cómo sé si el sistema está funcionando?', a: 'Por cuántas reservas se completaron sin que nadie del equipo interviniera, que es el trabajo que se dejó de hacer. Y por el horario en que se reserva: una porción grande ocurre fuera del horario de atención, y esas reservas directamente no existían antes.' },
          { q: '¿Cómo se paga el proyecto y qué garantía tiene?', a: 'Sobre un sitio nuevo, el módulo entra en el proyecto: Página PYME desde $950 si es una agenda simple, y proyecto a medida desde $2,900 si hay varias sedes, profesionales con horarios distintos o cobro anticipado. El pago va 50% para arrancar, 30% al ver el sitio funcionando en demo y 20% para publicar, con 30 días de garantía por fallas técnicas. Los precios no incluyen ITBMS (7%).' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo ponemos tu agenda en línea',
        intro: 'De cómo agendas hoy a una agenda que se llena sola, sincronizada con tu calendario.',
        items: [
          { h3: 'Mapeamos tus reglas', text: 'Anotamos cómo funciona tu agenda real: servicios, duraciones, márgenes, cupos, profesionales y sucursales. Esas reglas son el corazón del sistema.' },
          { h3: 'Elegimos la herramienta', text: 'Integramos la plataforma de reservas que mejor calce con tu caso, o la construimos a medida cuando tus reglas no caben en ninguna existente.' },
          { h3: 'Conectamos calendario y pagos', text: 'Sincronizamos con Google Calendar para evitar dobles reservas y, si lo quieres, activamos el pago anticipado con Yappy o tarjeta.' },
          { h3: 'Activamos recordatorios', text: 'Configuramos confirmaciones y recordatorios por correo y WhatsApp con la API oficial, y probamos una reserva completa antes de publicar.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es',
        intro: 'La regla es simple: si tu operación vive de citas, la agenda no puede vivir en un cuaderno.',
        items: [
          { h3: 'Clínicas y consultorios', text: 'Dejan de perder horas coordinando citas por teléfono y reducen las ausencias con recordatorios y pago anticipado.', link: { slug: 'industrias', label: 'Diseño web por industria' } },
          { h3: 'Barberías, spas y estudios', text: 'Donde la agenda es el negocio, cada hueco cuenta. El cliente reserva a la hora que le convenga, incluso de madrugada.', link: { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Cobro anticipado' } },
          { h3: 'Consultores y firmas', text: 'Sesiones agendadas sin ida y vuelta de correos. Si además atiendes muchas consultas previas, súmale un asistente con IA.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' } },
        ],
      },
      {
        type: 'prose',
        h2: 'La agenda que también trabaja tu SEO',
        paragraphs: [
          'Un sistema de reservas no solo ordena tu operación: cambia cómo te encuentran. Cuando alguien busca "barbería cerca" o "cita dermatólogo Panamá" y llega a una web donde puede <strong>agendar en el momento</strong>, esa persona no vuelve a la lista de resultados a mirar competidores. Google nota ese comportamiento y lo premia.',
          'Por eso las reservas online se llevan tan bien con el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local en Google Maps</a>: el cliente te encuentra en el mapa, entra a tu ficha y reserva sin fricción. El camino de la búsqueda a la cita se acorta a dos o tres toques.',
          'Y como cada reserva queda registrada con el historial del cliente, con el tiempo acumulas datos útiles: qué servicios se piden más, qué horarios se llenan primero, quién repite. Esa información sirve para decidir horarios, personal y hasta campañas, en vez de operar a ciegas.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' },
          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
        ],
      },
    ],
    cta: { h2: 'Deja que tu web agende por ti', wa: 'Hola, quiero un sistema de reservas para mi web.' },
  },
];
