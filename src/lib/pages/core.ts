/* PÁGINAS NÚCLEO: portafolio, nosotros, contacto y legales.
   (La home tiene su propia página: src/pages/index.astro) */
import type { PageData } from '../types';

export const core: PageData[] = [
  /* ---------- CÓMO TRABAJAMOS ---------- */
  {
    slug: 'como-trabajamos',
    title: 'Cómo Trabajamos: Precios, Pagos y Alcance Claros | Elemento Web',
    description: 'Reglas claras desde el primer día: estructura de pago, qué necesitamos de ti, costos de terceros que pagas directo y qué no incluimos. Sin sorpresas.',
    h1: 'Reglas claras desde el primer día',
    breadcrumb: 'Cómo Trabajamos',
    heroImage: { src: 'https://picsum.photos/seed/reunion-acuerdo-trabajo-panama/1200/675', alt: 'Reunión de trabajo donde se acuerdan los términos de un proyecto' },
    heroCtas: [
      { label: 'Cotizar mi proyecto', href: '/contacto/', primary: true },
      { label: 'Ver precios', href: '/servicios/#precios' },
    ],
    lead: [
      'Los malentendidos caros casi siempre nacen de lo que no se dijo al principio. Por eso ponemos todo sobre la mesa antes de que firmes: cómo se paga, qué necesitamos de ti, qué corre por tu cuenta y qué no hacemos.',
      'Ninguna de estas condiciones es letra chica. Son las mismas que te repetimos en la propuesta y en el contrato, porque un cliente que entiende las reglas es un cliente que vuelve.',
    ],
    blocks: [
      {
        type: 'steps',
        h2: 'El proceso, de principio a fin',
        intro: 'Cuatro etapas con entregas que puedes revisar. Sin desapariciones a mitad del proyecto.',
        items: [
          { h3: 'Inicio (50%)', text: 'Con el anticipo del 50% arrancamos. Definimos la estructura y el diseño, y los apruebas antes de programar.' },
          { h3: 'Demo online (30%)', text: 'Montamos el sitio completo en un demo en línea para que lo veas funcionando y lo apruebes. Aquí abonas el 30%.' },
          { h3: 'Publicación (20%)', text: 'Con tu visto bueno, publicamos en tu dominio final, entregamos accesos y capacitamos a tu equipo. El 20% final se abona para publicar.' },
          { h3: 'Post-entrega', text: '30 días de garantía por fallas técnicas. El dominio, el código y los accesos quedan a tu nombre.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué necesitamos de ti',
        intro: 'Los tiempos de entrega se cuentan desde que recibimos esto. Y si no lo tienes completo, no es un bloqueo: lo generamos por ti con IA (ver abajo).',
        items: [
          'Los textos base, o la información para que los redactemos contigo',
          'Tu logo en buena calidad, o lo diseñamos con IA si no lo tienes',
          'Fotos propias, o autorización para conseguir las imágenes',
          'Accesos a dominio, hosting o redes cuando el proyecto lo requiera',
          'Una persona responsable que apruebe cada etapa',
          'Feedback dentro de los plazos acordados: de esto dependen las fechas',
        ],
      },
      {
        type: 'production',
        h2: '¿No tienes el contenido, las imágenes o el logo?',
      },
      {
        type: 'checklist',
        h2: 'Estructura y formas de pago',
        intro: 'El pago se divide en tres etapas atadas a lo que puedes ver: arranque, demo aprobado y publicación. Así ni tú ni nosotros asumimos todo el riesgo de una vez.',
        items: [
          '50% para iniciar: confirma el proyecto y cubre el arranque',
          '30% al aprobar el demo online, con el sitio completo funcionando',
          '20% para publicar en tu dominio final y recibir los accesos',
          'Formas de pago: tarjeta de crédito o débito, transferencia bancaria y Yappy',
          'Los servicios mensuales (mantenimiento, licencias) se facturan por adelantado',
          'El cobro mensual arranca cuando el sitio pasa a producción',
          'Las cotizaciones son válidas por 30 días desde su emisión',
          'Precios en USD; no incluyen ITBMS (7%)',
        ],
      },
      {
        type: 'cards',
        h2: 'Costos de terceros que pagas directamente',
        intro: 'Algunos servicios consumen plataformas externas. <strong>Estos consumos se configuran en tus propias cuentas y los pagas directo al proveedor, por uso, sin margen nuestro.</strong> Así tienes control y visibilidad total del gasto.',
        items: [
          { h3: 'Meta (WhatsApp Business API)', text: 'Meta cobra por conversación de WhatsApp, con tarifas que varían según el tipo y el país. Se paga desde tu propia cuenta de Meta.' },
          { h3: 'Motor de inteligencia artificial', text: 'El chatbot con IA consume el servicio de OpenAI o Anthropic por uso. Se paga desde tu cuenta del proveedor, según el volumen de conversaciones.' },
          { h3: 'Pasarela de pago', text: 'Yappy (Banco General) y las pasarelas con tarjeta cobran una comisión por transacción que define cada proveedor. La relación comercial es directa entre tu empresa y el banco.' },
          { h3: 'Suscripción de plataforma', text: 'Shopify cobra una mensualidad por usar su infraestructura; algunos plugins o servicios especializados también. Se paga directo a la plataforma.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué no incluimos',
        intro: 'Somos una software house con equipo interno enfocado en diseño, desarrollo, SEO técnico y automatización. Lo que no hacemos, te lo decimos de frente y te referimos con quien sí lo hace bien.',
        items: [
          { h3: 'Registro de marca y trámites legales', text: 'No tramitamos registro de marca, patentes ni gestiones legales. Te orientamos sobre qué necesitas y con quién resolverlo.' },
          { h3: 'Producción audiovisual profesional', text: 'No hacemos fotografía ni video de estudio. Si el proyecto lo necesita, coordinamos con productores de confianza.' },
          { h3: 'Redacción sin ningún insumo', text: 'Si no tienes nada de contenido, te ayudamos a producirlo, pero es un trabajo que se cotiza aparte del diseño.' },
          { h3: 'Garantía de primera posición en Google', text: 'Nadie honesto la ofrece: el algoritmo no es nuestro. Garantizamos el método completo de SEO técnico, no un lugar en el ranking.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Nuestras garantías',
        intro: 'Lo que sí te aseguramos por escrito.',
        items: [
          'El dominio, el código y todos los accesos quedan a nombre de tu empresa al completar el pago',
          '30 días de garantía por fallas técnicas después de la entrega',
          'Hasta 2 rondas de revisión incluidas por proyecto',
          'Cotización cerrada por escrito antes de empezar, sin costos sorpresa',
          'Sin permanencia mínima en los servicios mensuales: cancelables cuando quieras',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Por qué el pago se divide en tres etapas y no 50/50?', a: 'Porque atar cada pago a algo que puedes ver reparte el riesgo de forma justa. El 50% inicial cubre el arranque; el 30% se abona cuando ya viste el sitio completo funcionando en un demo online; y el 20% final, para publicarlo en tu dominio y recibir los accesos. Tú nunca pagas la mitad por adelantado sin ver avances, y nosotros no publicamos antes de cerrar el proyecto.' },
          { q: '¿Por qué algunos costos los pago yo directamente?', a: 'Porque son servicios de terceros (Meta, motores de IA, pasarelas de pago, plataformas) que se consumen por uso y se cobran a la cuenta del titular. Si los intermediáramos, tendrías menos control y pagarías un margen. Preferimos que veas exactamente cuánto gastas y en qué.' },
          { q: '¿Qué pasa si me atraso en enviar el contenido?', a: 'Los tiempos de entrega se pausan hasta recibir el material completo. No es una penalización: simplemente no podemos avanzar sin él. Por eso definimos desde el inicio qué necesitamos de ti.' },
          { q: '¿Y si el proyecto necesita algo fuera del alcance?', a: 'Te lo decimos apenas lo detectamos, con su cotización aparte, y tú decides si lo incluyes. Nunca aparece como sorpresa en la factura final.' },
          { q: '¿Puedo cambiar de proveedor después?', a: 'Sí, cuando quieras. El dominio, el código y los accesos son tuyos. No retenemos nada como mecanismo de permanencia: te vas con todo si así lo decides.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios', label: 'Ver servicios y precios' },
          { slug: 'terminos', label: 'Términos y condiciones' },
          { slug: 'contacto', label: 'Contacto' },
        ],
      },
    ],
    cta: { h2: 'Reglas claras, empecemos', text: 'Ya conoces cómo trabajamos. El siguiente paso es un diagnóstico sin costo de tu proyecto.', wa: 'Hola, quiero cotizar un proyecto web.' },
  },

  /* ---------- PORTAFOLIO ---------- */
  {
    slug: 'portafolio',
    title: 'Portafolio | Proyectos de Diseño Web en Panamá',
    description: 'Proyectos de diseño web, e-commerce y automatización desarrollados por Elemento Web para empresas en Panamá y la región.',
    h1: 'Portafolio',
    breadcrumb: 'Portafolio',
    lead: [
      'Sitios reales, en producción, que trabajan por sus dueños todos los días. Estos son algunos de los proyectos que hemos construido para empresas en Panamá y la región.',
      'Un buen portafolio no es una galería bonita: es la prueba de que entendemos distintos negocios —turismo, construcción, servicios profesionales, trámites— y sabemos convertir cada uno en una web que capta clientes.',
    ],
    heroCtas: [
      { label: 'Cotizar mi proyecto', href: '/contacto/', primary: true },
      { label: 'Ver servicios', href: '/servicios/' },
    ],
    blocks: [
      {
        type: 'projects',
        h2: 'Proyectos que hemos construido',
        intro: 'Cada uno está en vivo. Haz clic para visitarlo, o filtra por tipo de proyecto.',
      },
      {
        type: 'faq',
        h2: 'Sobre nuestro trabajo',
        items: [
          { q: '¿Puedo ver un sitio de muestra en vivo?', a: 'Sí: en la demostración recorremos proyectos publicados según tu industria y te mostramos el panel de administración por dentro. Agenda por WhatsApp.' },
          { q: '¿Por qué no publican todos los casos?', a: 'Porque publicar el nombre, las métricas o el detalle de un cliente exige su autorización escrita. La confidencialidad que le ofrecemos a cada cliente también te protege a ti cuando seas parte del portafolio.' },
          { q: '¿Trabajan solo en Panamá?', a: 'Panamá es la base, pero trabajamos con clientes en toda la región de forma remota, con reuniones por videollamada y entregas digitales.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias', label: 'Diseño web por industria' },
          { slug: 'servicios', label: 'Servicios' },
          { slug: 'nosotros', label: 'Nosotros' },
        ],
      },
    ],
    cta: { h2: 'Tu proyecto puede ser el siguiente', wa: 'Hola, quiero cotizar un proyecto web.' },
  },

  /* ---------- NOSOTROS ---------- */
  {
    slug: 'nosotros',
    title: 'Nosotros | Elemento Web, Software House en Panamá',
    description: 'Elemento Web: agencia de diseño web y software house en Panamá. Meta Verified Tech Provider con tres productos SaaS propios en producción.',
    h1: 'Diseñamos webs con disciplina de software',
    breadcrumb: 'Nosotros',
    creds: true,
    lead: [
      'Somos una software house panameña que diseña webs. La diferencia se nota en cómo construimos: con la disciplina de quien mantiene su propio producto.',
      'Tres credenciales nos definen y las tres son verificables. Somos Meta Verified Tech Provider: Meta validó oficialmente nuestra capacidad técnica para integrar las APIs de WhatsApp e Instagram. Operamos tres SaaS propios (ChatMantis, WapyCRM y Cifrao) con clientes reales. Y todo el desarrollo es de equipo interno: lo que te vendemos, lo hacemos nosotros.',
    ],
    heroCtas: [
      { label: 'Agendar una llamada', href: '/contacto/', primary: true },
      { label: 'Ver nuestros SaaS', href: '/saas/' },
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué operar software propio nos hace mejor agencia',
        paragraphs: [
          'Una agencia tradicional entrega el proyecto y pasa al siguiente. Si la base técnica era frágil, el costo aparece meses después y lo paga el cliente. El incentivo está torcido desde el diseño.',
          'Nosotros vivimos del otro lado también: cuando nuestro software falla, la factura del servidor, la madrugada de soporte y el cliente molesto son nuestros. <strong>Esa experiencia enseña qué decisiones técnicas importan de verdad</strong> y cuáles son teatro.',
          'Por eso insistimos en lo que parece menor: respaldos que se prueban, código documentado, accesos a nombre del cliente. No son buenas prácticas de manual; son las que nos han salvado a nosotros.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Cómo trabajamos',
        items: [
          'Cotización cerrada antes de empezar, sin sorpresas',
          'Entregas por etapa que puedes revisar y aprobar',
          'Dominio, código y accesos a nombre de tu empresa',
          'SEO técnico y velocidad de serie, no como extra',
          'Capacitación grabada para tu equipo',
          'Respuesta el mismo día hábil, en español claro',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué es exactamente Meta Verified Tech Provider?', a: 'Una acreditación oficial de Meta para proveedores tecnológicos autorizados a integrar sus APIs de WhatsApp Business e Instagram. Significa verificación de números por el canal oficial y soporte directo, sin intermediarios improvisados.' },
          { q: '¿Subcontratan parte del trabajo?', a: 'No. Diseño, desarrollo, SEO técnico e integraciones son de equipo interno. Lo que no hacemos (pauta publicitaria, producción audiovisual) te lo decimos y te referimos con especialistas.' },
          { q: '¿Dónde están ubicados?', a: 'En Ciudad de Panamá, con trabajo remoto para todo el país y la región. Las reuniones presenciales se coordinan según el proyecto.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'saas', label: 'Nuestros SaaS' },
          { slug: 'portafolio', label: 'Portafolio' },
          { slug: 'servicios', label: 'Servicios' },
        ],
      },
    ],
  },

  /* ---------- CONTACTO ---------- */
  {
    slug: 'contacto',
    title: 'Contacto | Cotiza tu Página Web en Panamá',
    description: 'Cotiza tu página web con Elemento Web: respuesta el mismo día hábil, diagnóstico sin costo y propuesta con precio cerrado.',
    h1: 'Hablemos de tu proyecto',
    breadcrumb: 'Contacto',
    lead: [
      'Cuéntanos qué necesitas y respondemos el mismo día hábil con los siguientes pasos. El diagnóstico inicial no tiene costo ni compromiso.',
      'Si no somos el proveedor correcto para tu caso, te lo decimos en la primera conversación y te orientamos hacia quien sí lo sea. Preferimos esa franqueza a un proyecto que no deberíamos tomar.',
    ],
    heroCtas: [
      { label: 'Llenar el formulario', href: '#formulario', primary: true },
      { label: 'Escribir por WhatsApp', href: 'https://wa.me/50761622787?text=Hola%2C%20quiero%20cotizar%20una%20p%C3%A1gina%20web.' },
    ],
    blocks: [
      {
        type: 'form',
        h2: 'Cuéntanos de tu proyecto',
        intro: 'Completa el formulario y te respondemos el mismo día hábil con los siguientes pasos. Mientras más contexto nos des, más útil será nuestra primera respuesta.',
      },
      {
        type: 'steps',
        h2: 'Qué pasa después de enviar el formulario',
        items: [
          { h3: 'Respondemos', text: 'El mismo día hábil, con preguntas concretas si algo necesita aclararse.' },
          { h3: 'Diagnóstico', text: 'Videollamada sin costo para entender el problema a fondo.' },
          { h3: 'Propuesta', text: 'Alcance, tiempos y precio cerrado, por escrito.' },
          { h3: 'Arranque', text: 'Con el anticipo del 50% arrancamos y avanzamos por etapas hasta la publicación.' },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuáles son las formas de pago?', a: 'Tarjeta de crédito o débito, transferencia bancaria y Yappy. El pago se divide en tres etapas: 50% para iniciar, 30% al aprobar el demo online y 20% para publicar en tu dominio. Ver <a href="/como-trabajamos/">cómo trabajamos</a>.' },
          { q: '¿Atienden fuera de horario?', a: 'El asistente de IA responde de inmediato a cualquier hora, resuelve lo básico y agenda el seguimiento con una persona del equipo. Es el mismo sistema que instalamos a nuestros clientes.' },
          { q: '¿El diagnóstico de verdad es gratis?', a: 'Sí: la conversación para entender tu problema y dimensionar el proyecto no cuesta nada ni te compromete. Si el caso exige un análisis técnico profundo antes de cotizar, te lo decimos por adelantado.' },
        ],
      },
    ],
    cta: { h2: 'Escríbenos ahora', text: 'Por WhatsApp la respuesta es inmediata. Por correo, el mismo día hábil.', wa: 'Hola, quiero cotizar una página web.' },
  },

  /* ---------- PRIVACIDAD (plantilla: revisar por abogado) ---------- */
  {
    slug: 'politica-de-privacidad',
    noindex: true,
    title: 'Política de Privacidad | Elemento Web',
    description: 'Política de privacidad y tratamiento de datos personales de Elemento Web.',
    h1: 'Política de Privacidad',
    breadcrumb: 'Privacidad',
    heroCtas: [{ label: 'Contacto', href: '/contacto/', primary: true }],
    lead: [
      'Cómo recopilamos, usamos y protegemos tu información.',
      'Documento base sujeto a revisión legal conforme a la Ley 81 de 2019 de Protección de Datos Personales de Panamá.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué información recopilamos',
        paragraphs: [
          'La que nos proporcionas voluntariamente al escribirnos por formulario, WhatsApp o correo: nombre, empresa, datos de contacto y la descripción de tu proyecto.',
          'También datos técnicos de navegación mediante herramientas de analítica (páginas visitadas, origen de la visita, tipo de dispositivo), tratados de forma agregada.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo la usamos',
        paragraphs: [
          'Exclusivamente para responder tu consulta, preparar propuestas, ejecutar los servicios contratados y, con tu autorización, enviarte comunicaciones sobre nuestros servicios.',
          '<strong>No vendemos ni cedemos tus datos a terceros con fines comerciales.</strong> Compartimos información con proveedores tecnológicos solo en la medida necesaria para prestar el servicio.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Tus derechos',
        intro: 'Conforme a la legislación panameña, puedes ejercerlos escribiendo a hola@elementoweb.com:',
        items: [
          'Acceder a los datos que tenemos sobre ti',
          'Rectificar datos inexactos',
          'Solicitar la supresión de tus datos',
          'Oponerte al uso con fines comerciales',
          'Solicitar la portabilidad',
          'Retirar tu consentimiento en cualquier momento',
        ],
      },
    ],
    cta: { h2: '¿Dudas sobre tus datos?', text: 'Escríbenos y te respondemos.', wa: 'Hola, tengo una consulta sobre privacidad.' },
  },

  /* ---------- TÉRMINOS (plantilla: revisar por abogado) ---------- */
  {
    slug: 'terminos',
    noindex: true,
    title: 'Términos y Condiciones | Elemento Web',
    description: 'Términos y condiciones de contratación de los servicios de Elemento Web.',
    h1: 'Términos y Condiciones',
    breadcrumb: 'Términos',
    heroCtas: [{ label: 'Contacto', href: '/contacto/', primary: true }],
    lead: [
      'Condiciones bajo las cuales prestamos nuestros servicios.',
      'Documento base sujeto a revisión legal antes de su publicación definitiva.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Condiciones comerciales',
        items: [
          'Pago en tres etapas: 50% para iniciar, 30% al aprobar el demo online, 20% para publicar en el dominio final',
          'Formas de pago: tarjeta, transferencia bancaria y Yappy',
          'Servicios mensuales facturados por adelantado',
          'Infraestructura anual renovable para mantener el sitio activo',
          'Cotizaciones válidas por 30 días desde su emisión',
          'Precios en USD; no incluyen ITBMS (7%)',
        ],
      },
      {
        type: 'checklist',
        h2: 'Alcance, entregas y propiedad',
        items: [
          'El alcance se define por escrito en la propuesta aceptada',
          'Cada proyecto incluye hasta 2 rondas de revisión',
          'Lo que exceda el alcance se cotiza por separado',
          'Los plazos corren desde la recepción completa del material',
          'Dominio, código y accesos quedan a nombre del cliente al completar el pago',
          '30 días de garantía por fallas técnicas tras la entrega',
        ],
      },
      {
        type: 'prose',
        h2: 'Servicios de terceros y responsabilidad',
        paragraphs: [
          'Algunos servicios consumen plataformas de terceros (Meta para mensajería, motores de IA, pasarelas de pago). <strong>Esos consumos corren por cuenta del cliente</strong>, en sus propias cuentas, y sus tarifas pueden cambiar según cada proveedor.',
          'Ejecutamos con diligencia profesional, pero no garantizamos posiciones específicas en buscadores ni resultados comerciales concretos: dependen de factores fuera de nuestro control. No respondemos por modificaciones de terceros sobre los entregables ni por incidentes derivados de falta de mantenimiento cuando este no fue contratado.',
        ],
      },
    ],
    cta: { h2: '¿Dudas sobre las condiciones?', text: 'Escríbenos antes de contratar.', wa: 'Hola, tengo una consulta sobre los términos.' },
  },
];
