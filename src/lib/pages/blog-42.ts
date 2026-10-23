/* BLOG — Lote 42: cómo elegir una agencia de marketing digital en Panamá.
   Sin estadísticas de mercado ni ataques a otras agencias. Precios de Elemento
   Web solo de `confirmados` en src/data/precios.json; la gestión de Google Ads
   y Meta desde $300 al mes es `propuesto` y se presenta como referencia
   publicada que se confirma en la cotización. */
import type { PageData } from '../types';

export const blog42: PageData[] = [
  {
    slug: 'blog/como-elegir-agencia-de-marketing-digital-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cómo elegir una agencia de marketing digital en Panamá',
    description: 'Qué debe hacer una agencia de marketing digital en Panamá en 2026, cómo elegirla, banderas rojas, preguntas para la primera reunión y cómo se cobra.',
    h1: 'Cómo elegir una agencia de marketing digital en Panamá en 2026',
    breadcrumb: 'Elegir agencia de marketing digital',
    category: 'Marketing',
    date: '2026-10-23',
    lead: [
      'Para elegir una agencia de marketing digital en Panamá, revisa seis cosas: que las cuentas publicitarias queden a tu nombre, que publique precios o los dé por escrito, que el contrato explique cómo salir, que mida hasta la consulta o la venta, que sepas quién trabaja tu cuenta y que muestre casos verificables. Desconfía de quien garantice posiciones.',
      'Abajo tienes qué debería hacer una agencia hoy, los criterios uno por uno, las señales de alerta, las preguntas para la primera reunión y cómo se cobra este servicio.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: '¿Qué debe hacer una agencia de marketing digital en 2026?',
        intro: 'No toda agencia hace todo. Lo importante es que lo que haga esté conectado y se mida.',
        items: [
          { h3: 'Pauta en Google y Meta', text: 'Campañas en Google Ads para quien ya te busca, y en Facebook e Instagram para quien todavía no te conoce. Con seguimiento de conversiones antes de gastar el primer dólar.' },
          { h3: 'Contenido', text: 'Publicaciones, videos y textos que respondan lo que pregunta tu cliente. El contenido alimenta la pauta, el SEO y las redes al mismo tiempo.' },
          { h3: 'SEO y posicionamiento en ChatGPT', text: 'Aparecer en Google sigue importando. Hoy también cuenta cómo te nombran ChatGPT y otras IA cuando alguien pregunta qué empresa contratar.' },
          { h3: 'WhatsApp con API oficial', text: 'En Panamá muchas ventas se cierran por chat. La vía correcta es la WhatsApp Business API oficial de Meta, con opt-in y plantillas aprobadas.' },
          { h3: 'Automatización e IA', text: 'Respuestas, recordatorios y seguimiento que no dependan de que alguien se acuerde. Un agente de IA puede atender, cotizar y pasar la venta a tu equipo.' },
          { h3: 'Medición', text: 'Costo por consulta y por venta, no «me gusta». Sin medición, nadie sabe qué canal funciona y cuál solo gasta.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Agencia de pauta o agencia que conecta todo el recorrido?',
        paragraphs: [
          'Una campaña puede atraer clics y aun así no vender. Pasa cuando el anuncio promete una cosa y la página o el chat entregan otra. Por eso conviene que la agencia entienda el recorrido completo: anuncio, destino, conversación y cierre.',
          'Si la agencia solo maneja pauta, pregunta quién se encarga del resto. Alguien tiene que cuidar la landing, responder el WhatsApp y medir qué pasó después del clic. Si nadie lo hace, la fuga queda escondida.',
          'En Elemento Web trabajamos así: la web y la pauta salen del mismo equipo. El detalle de cada canal está en <a href="/marketing/">marketing digital y pauta</a>, y los paquetes que unen atraer, atender y automatizar están en <a href="/soluciones/">soluciones</a>.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué criterios usar para elegir agencia?',
        intro: 'Siete criterios para comparar propuestas por escrito, no solo por el número final.',
        items: [
          { h3: '1. Cuentas a tu nombre', text: 'La cuenta de Google Ads, el administrador comercial de Meta, el píxel y la analítica deben ser tuyos. Si un día cambias de agencia, te llevas el historial y lo aprendido.' },
          { h3: '2. Precios claros', text: 'Precios publicados o, al menos, una propuesta por escrito con lo que incluye y lo que no. Debe quedar claro qué es gestión y qué es inversión publicitaria.' },
          { h3: '3. Contrato y salida', text: 'Duración, aviso para terminar y qué recibes al salir. Un buen contrato protege a las dos partes y evita discusiones después.' },
          { h3: '4. Medición hasta la consulta', text: 'El reporte debe llegar a consultas, citas o ventas, no quedarse en alcance o clics. Pide ver un reporte de ejemplo antes de firmar.' },
          { h3: '5. Quién trabaja tu cuenta', text: 'Pregunta quién arma las campañas, quién las revisa y con quién hablas. No es lo mismo la persona que vende que la que ejecuta.' },
          { h3: '6. Casos verificables', text: 'Trabajos que puedas abrir o confirmar con el cliente. Un caso sin nombre ni enlace no se puede comprobar.' },
          { h3: '7. Ninguna garantía de posiciones', text: 'Nadie controla Google ni las respuestas de una IA. Una agencia seria promete trabajo y medición, no el primer lugar en una fecha.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Banderas rojas al contratar marketing digital',
        intro: 'Si ves dos o más de estas señales, pide aclaraciones por escrito antes de firmar.',
        items: [
          'La cuenta publicitaria se abre a nombre de la agencia y no te dan acceso.',
          'No separan su cobro de la inversión publicitaria, o cobran un margen escondido sobre la pauta.',
          'Prometen el primer lugar en Google o en ChatGPT en pocas semanas.',
          'El reporte mensual solo muestra alcance, seguidores y «me gusta».',
          'Ofrecen mensajes masivos de WhatsApp con apps no oficiales o bases de datos compradas.',
          'No hay contrato, o el contrato no dice cómo terminar la relación.',
          'No pueden mostrar un solo caso que puedas verificar.',
          'Nadie te dice quién va a trabajar tu cuenta día a día.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Qué preguntar en la primera reunión?',
        intro: 'Lleva estas preguntas. La claridad de las respuestas dice tanto como su contenido.',
        items: [
          { h3: 'Sobre tu negocio', text: '¿Qué necesitan saber de mi margen, mi cliente y mi competencia antes de proponer un canal? Una agencia seria pregunta antes de cotizar.' },
          { h3: 'Sobre la propiedad', text: '¿A nombre de quién quedan las cuentas de Google, Meta, analítica y WhatsApp? ¿Qué recibo si terminamos?' },
          { h3: 'Sobre el dinero', text: '¿Cuánto es la gestión y cuánto la inversión publicitaria? ¿La inversión la pago yo directo a la plataforma?' },
          { h3: 'Sobre la medición', text: '¿Cómo voy a saber cuántas consultas o ventas vinieron de cada campaña? ¿Me muestran un reporte de ejemplo?' },
          { h3: 'Sobre el equipo', text: '¿Quién arma y revisa mis campañas? ¿Por qué canal y en qué horario me responden?' },
          { h3: 'Sobre los primeros meses', text: '¿Qué van a hacer el primer mes y qué esperan ver al tercero? ¿Qué pasa si no funciona?' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo se cobra una agencia de marketing digital?',
        paragraphs: [
          'Casi siempre hay dos costos distintos. El <strong>fee de gestión</strong> paga a la agencia por crear, optimizar y reportar. La <strong>inversión publicitaria</strong> es el dinero que se muestra en anuncios y va a Google o a Meta.',
          'Lo sano es que la inversión salga de tu propia cuenta, con tu tarjeta, sin pasar por la agencia. Así ves cada dólar gastado. Si una propuesta mezcla las dos cifras en un solo número, pide que las separe.',
          'Aparte de la gestión mensual, algunos servicios se cobran por proyecto: una landing, un video o la configuración de un agente de WhatsApp. Pide que la propuesta diga qué es único y qué es recurrente.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cobra Elemento Web?',
        paragraphs: [
          'Como <a href="/">agencia de marketing digital en Panamá</a>, publicamos nuestras referencias. La gestión de Google Ads y Meta tiene una referencia publicada desde $300 al mes, que se confirma en la cotización. La inversión publicitaria va aparte, directo a la plataforma, sin margen nuestro. Esas referencias no incluyen ITBMS (7%).',
          'Otros precios publicados: landing page desde $550, plan mensual de anuncios con IA desde $650 al mes y videos publicitarios con IA a $500 por paquete. El <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT y la IA</a> arranca con una auditoría de $490.',
          'Para WhatsApp, el <a href="/funcionalidades/agente-de-ventas-ia-whatsapp-panama/">agente de ventas con IA para WhatsApp</a> corre sobre WazaCRM, desde $349 al mes.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Y si también necesitas una web nueva?',
        paragraphs: [
          'La pauta necesita un destino que convierta. Si tu web es lenta, confusa o no tiene un botón claro de WhatsApp, la campaña paga clics que se pierden. A veces conviene arreglar el destino antes de subir la inversión.',
          'Los criterios para esa decisión son parecidos, pero no iguales. Los vemos en la guía de <a href="/blog/como-elegir-agencia-diseno-web-panama/">cómo elegir una agencia de diseño web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre agencias de marketing digital',
        items: [
          { q: '¿La cuenta de Google Ads o de Meta debe quedar a mi nombre?', a: 'Sí. La cuenta, el píxel y la analítica deben ser tuyos desde el inicio. Así controlas la inversión y, si cambias de agencia, conservas el historial y lo aprendido por las campañas.' },
          { q: '¿Cuánto debo invertir en pauta?', a: 'Depende de tu objetivo, tu mercado y tu competencia. Una agencia seria lo define en un diagnóstico, separado de su fee de gestión, y lo ajusta con los resultados medidos.' },
          { q: '¿Una agencia puede garantizar resultados?', a: 'Puede comprometerse con un plan, con entregables y con medir bien. No puede garantizar posiciones en Google ni en ChatGPT, porque no controla esas plataformas. Desconfía de quien lo prometa.' },
          { q: '¿Cómo sé si el marketing está funcionando?', a: 'Mira el costo por consulta y por venta, no los «me gusta». Para eso, el seguimiento de conversiones debe estar instalado antes de encender la pauta y conectado a WhatsApp o al formulario.' },
          { q: '¿Por qué importa la API oficial de WhatsApp?', a: 'Porque es la vía que Meta habilita para enviar mensajes a escala dentro de sus reglas. Las apps no oficiales y las bases compradas suelen terminar en el bloqueo del número.' },
          { q: '¿Qué pasa con mis cuentas si cambio de agencia?', a: 'Si están a tu nombre, solo quitas el acceso de la agencia anterior y das acceso a la nueva. Si están a nombre de la agencia, pide por escrito cómo te las transfieren antes de firmar.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing', label: 'Marketing digital y pauta en Panamá' },
          { slug: 'soluciones', label: 'Soluciones: paquetes de marketing e IA' },
          { slug: 'crecimiento/posicionamiento-en-chatgpt-e-ia-panama', label: 'Posicionamiento en ChatGPT e IA' },
          { slug: 'blog/como-elegir-agencia-diseno-web-panama', label: 'Cómo elegir una agencia de diseño web' },
        ],
      },
    ],
    cta: {
      h2: 'Pide una propuesta por escrito y compárala',
      wa: 'Hola, estoy evaluando agencias de marketing digital y quiero una propuesta por escrito. ¿Me asesoran?',
    },
  },
];
