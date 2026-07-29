/* BLOG · Tanda 4 (categoría Marketing).
   5 artículos profundos de pauta, presupuesto, WhatsApp, email y contenido.
   Español de Panamá. Sin estadísticas inventadas. Precios oficiales solamente. */
import type { PageData } from '../types';

const parent = { slug: 'blog', label: 'Blog' };

export const blog4: PageData[] = [
  /* ============ 1. GOOGLE ADS VS FACEBOOK ADS ============ */
  {
    slug: 'blog/google-ads-vs-facebook-ads-en-panama',
    parent,
    title: 'Google Ads vs Facebook Ads: cuál conviene en Panamá',
    description: 'Google Ads vs Facebook Ads en Panamá: intención de compra vs descubrimiento, cuándo usar cada uno, cómo repartir el presupuesto y por qué conviene combinarlos.',
    h1: 'Google Ads vs Facebook Ads: cuál conviene para tu negocio',
    breadcrumb: 'Google vs Facebook Ads',
    category: 'Marketing',
    date: '2026-07-14',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Persona comparando resultados de campañas de Google y Facebook en dos pantallas',
    },
    lead: [
      'Es la pregunta que nos hacen casi todas las semanas: si tengo un presupuesto limitado, pongo la plata en Google o en Facebook. La respuesta corta es que dependen de cosas distintas y sirven para momentos distintos del cliente.',
      'En esta guía te explicamos la diferencia real entre los dos canales, cuándo conviene cada uno según lo que vendes, cómo repartir el presupuesto sin quemarlo y por qué, cuando el dinero alcanza, lo mejor casi siempre es usarlos juntos.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La diferencia de fondo: intención contra descubrimiento',
        paragraphs: [
          'Google Ads trabaja sobre <strong>intención</strong>. Alguien escribe "plomero urgente en Panamá" o "clínica dental San Francisco" porque ya tiene el problema y está buscando la solución. Tu anuncio aparece justo en ese momento. No creas la necesidad: te pones enfrente de quien ya la tiene y está listo para actuar.',
          'Facebook e Instagram Ads trabajan sobre <strong>descubrimiento</strong>. Nadie abre Instagram a buscar tu producto; entra a ver a sus amigos, memes y videos. Tu anuncio interrumpe ese scroll. Por eso Meta es tan bueno para dar a conocer algo que la gente todavía no sabe que quiere, y por eso el creativo (la imagen o el video) pesa muchísimo más ahí que en Google.',
          'Esa sola distinción explica casi todas las decisiones que siguen. Google captura demanda que ya existe; Meta genera demanda nueva. Uno cosecha, el otro siembra. Y un negocio sano necesita las dos cosas, aunque casi nunca al mismo tiempo ni con el mismo presupuesto.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo conviene Google Ads',
        paragraphs: [
          'Google Ads rinde primero cuando vendes algo que la gente <strong>busca activamente</strong>: servicios profesionales, reparaciones, salud, legal, contabilidad, cursos, repuestos, mudanzas. Si existe una palabra clave con intención clara, ahí hay dinero esperando y lo único que hace falta es aparecer bien y mandar el clic a un buen destino.',
          'La ventaja es la calidad del tráfico: quien busca "abogado de tránsito en Panamá" está mucho más cerca de contratar que quien vio tu anuncio de pasada. La desventaja es que compites por esas palabras, y en rubros disputados el clic sale más caro. Por eso importa tanto la relevancia entre la palabra, el anuncio y la página a la que llega.',
          'Aquí una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de alta conversión</a> hace la diferencia entre pagar clics que se pierden y clics que se vuelven llamadas. Si quieres profundizar, tenemos una guía completa de <a href="/marketing/google-ads-panama/">Google Ads en Panamá</a> con cómo estructuramos las campañas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo conviene Facebook e Instagram Ads',
        paragraphs: [
          'Meta Ads rinde cuando tu producto <strong>entra por los ojos</strong> o cuando la compra es más emocional que urgente: moda, comida, belleza, gimnasios, inmobiliaria, turismo, productos nuevos que nadie está buscando todavía. Si necesitas mostrar antes de que la gente entienda por qué te necesita, este es tu canal.',
          'Su fuerza real está en tres cosas: <strong>públicos</strong> muy afinados (intereses, comportamiento, públicos similares a tus mejores clientes), <strong>creativos</strong> en video que detienen el scroll y, sobre todo, <strong>retargeting</strong>: volver a mostrarte a quien ya visitó tu web o interactuó contigo. Ese retargeting suele ser lo más rentable de todo Meta, porque le hablas a gente que ya te conoce.',
          'La contra es que llegas a gente que no te estaba buscando, así que el mensaje tiene que ganarse la atención en el primer segundo. Un mal creativo quema presupuesto sin importar cuán bien segmentes. Vemos esto a fondo en <a href="/marketing/facebook-instagram-ads-panama/">Facebook e Instagram Ads en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'El destino importa tanto como el canal',
        paragraphs: [
          'Aquí está el error que más caro sale: elegir bien el canal y mandar el tráfico a un mal destino. Un clic de Google que aterriza en una página lenta, confusa o sin un botón claro de contacto se pierde igual que uno de Meta. El anuncio abre la puerta; la web decide si la persona entra o se va.',
          'Por eso, antes de encender pauta, revisamos a dónde llega el clic. A veces conviene una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> dedicada a una sola campaña, con un solo mensaje y una sola acción. Otras veces basta con ajustar una página existente. Lo que no funciona nunca es tráfico pagado hacia una web que no fue pensada para convertir. Si tu sitio ya tiene años, vale la pena mirar un <a href="/servicios/redisenio-web-panama/">rediseño enfocado en conversión</a> antes de invertir en pauta.',
        ],
      },
      {
        type: 'statement',
        text: 'Google busca a quien ya te quiere. Meta te presenta a quien no te conoce.',
        strong: 'Los dos necesitan un buen destino para que el clic no se pierda.',
      },
      {
        type: 'checklist',
        h2: 'Cómo decidir por dónde empezar',
        intro: 'Si tuvieras que elegir uno solo para arrancar, responde estas preguntas antes de gastar el primer dólar.',
        items: [
          '¿La gente busca activamente lo que vendes en Google? Si sí, empieza por Google Ads.',
          '¿Tu producto se vende mostrándolo (foto o video)? Si sí, empieza por Meta Ads.',
          '¿Tienes una landing o página lista para recibir el tráfico y convertirlo?',
          '¿Tienes instalado el seguimiento de conversiones y el píxel antes de encender pauta?',
          '¿Definiste un presupuesto de inversión realista, separado del fee de gestión?',
          '¿Sabes cuánto puedes pagar por un lead sin perder dinero según tu margen?',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué lo ideal es combinarlos',
        paragraphs: [
          'Cuando el presupuesto lo permite, la mejor estrategia casi nunca es Google o Meta: es Google y Meta trabajando juntos. Meta siembra: da a conocer tu marca y genera visitas. Google cosecha: cuando esa gente ya interesada te busca por nombre, apareces de primero. Y el retargeting de Meta cierra a quien visitó y no compró.',
          'Ese circuito (descubrir, buscar, recuperar) es más rentable que cualquier canal por separado, porque cada plataforma hace lo que mejor sabe. No hace falta un presupuesto grande para empezarlo; hace falta orden y medición, para saber qué está aportando cada peso. Si quieres ver los dos canales lado a lado con más detalle, lee también <a href="/blog/cuanto-invertir-en-publicidad-digital-en-panama/">cuánto invertir en publicidad digital en Panamá</a>.',
          'En Elemento Web hacemos el anuncio y el destino, así que las campañas y tu web hablan el mismo idioma. Cobramos un fee de gestión claro y tu inversión publicitaria va directo a Google o Meta desde tu propia cuenta, siempre bajo tu control.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuál es más barato, Google o Facebook?', a: 'No hay uno "más barato" en general: depende de tu rubro y competencia. En Meta el clic suele costar menos, pero es tráfico más frío; en Google el clic cuesta más, pero la intención es mayor. Lo que importa no es el costo por clic sino el costo por cliente real.' },
          { q: '¿Puedo hacer campañas yo mismo sin agencia?', a: 'Se puede, y al inicio muchos lo hacen. El problema no es encender la campaña, es optimizarla: recortar lo que no rinde, afinar públicos y medir bien. Sin ese trabajo, es fácil gastar meses aprendiendo con tu propio presupuesto.' },
          { q: '¿Necesito web para hacer pauta?', a: 'Ayuda muchísimo. Para captar clientes, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de conversión</a> es el destino ideal. Mandar pauta a un perfil de Instagram o a un WhatsApp suelto rinde mucho menos que mandarla a una página pensada para convertir.' },
          { q: '¿Cuánto tardo en ver resultados?', a: 'Google puede dar respuesta en días porque captura intención existente. Meta suele necesitar unas semanas de aprendizaje para que el algoritmo afine a quién mostrar. En ambos, los primeros días son de datos, no de conclusiones.' },
          { q: '¿La cuenta publicitaria queda a mi nombre?', a: 'Sí. Nosotros gestionamos, pero la cuenta es tuya y la inversión se carga ahí directamente. Si algún día trabajas con otra agencia, te llevas el historial y el aprendizaje del algoritmo. No queda de rehén de nadie.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/cuanto-invertir-en-publicidad-digital-en-panama', label: 'Cuánto invertir en publicidad digital en Panamá' },
          { slug: 'marketing/google-ads-panama', label: 'Google Ads en Panamá' },
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
        ],
      },
    ],
    cta: {
      h2: 'Te ayudamos a elegir el canal correcto y a preparar el destino',
      wa: 'Hola, quiero pauta en Google o Meta y no sé por cuál empezar. ¿Me ayudan a decidir?',
    },
  },

  /* ============ 2. CUÁNTO INVERTIR EN PUBLICIDAD DIGITAL ============ */
  {
    slug: 'blog/cuanto-invertir-en-publicidad-digital-en-panama',
    parent,
    title: '¿Cuánto invertir en publicidad digital en Panamá?',
    description: 'Cómo definir tu presupuesto de publicidad digital en Panamá: costo por lead, fase de prueba, cuánto arriesgar al inicio y por qué no quemar dinero sin un buen destino.',
    h1: '¿Cuánto invertir en publicidad digital en Panamá?',
    breadcrumb: 'Cuánto invertir en pauta',
    category: 'Marketing',
    date: '2026-06-30',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Persona planificando presupuesto de publicidad digital con calculadora y laptop',
    },
    lead: [
      'Es la pregunta con la que arranca casi todo negocio que quiere pautar, y no tiene una respuesta de tabla. No existe un número mágico que sirva para todos, porque el presupuesto correcto depende de tu margen, tu objetivo y cuánto puedes pagar por un cliente sin perder dinero.',
      'Lo que sí existe es un método para llegar a ese número sin adivinar. En esta guía te mostramos cómo definir tu inversión, qué es el costo por lead, por qué conviene una fase de prueba y cómo evitar el error más caro de todos: quemar plata mandándola a un destino que no convierte.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'No hay un número mágico, hay un cálculo',
        paragraphs: [
          'Cuando alguien nos pregunta "¿cuánto invierto?", la respuesta honesta es otra pregunta: ¿cuánto vale para ti un cliente nuevo? Un negocio que gana 50 dólares por venta no puede pautar igual que uno que gana 2,000 por contrato. El presupuesto no sale de lo que gasta el vecino, sale de tu propia matemática.',
          'La idea es sencilla: si sabes cuánto te deja en promedio un cliente y cuántos de tus interesados terminan comprando, puedes calcular cuánto puedes pagar por atraer a cada interesado. Ese es tu techo. Mientras la pauta traiga clientes por debajo de ese techo, estás ganando; por encima, estás perdiendo, sin importar cuántos "me gusta" veas.',
          'Por eso no arrancamos preguntando por el presupuesto, sino por el negocio. El número sale del margen, no del antojo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Costo por lead: la métrica que manda',
        paragraphs: [
          'Un <strong>lead</strong> es una persona interesada que te dejó su contacto o te escribió: una llamada, un formulario, un WhatsApp. El <strong>costo por lead</strong> es cuánto te costó, en pauta, conseguir cada uno de esos contactos. Es la métrica que de verdad importa, mucho más que el costo por clic o el alcance.',
          'Con el costo por lead y tu tasa de cierre (cuántos leads se vuelven clientes) sabes tu costo por venta real. Si cierras uno de cada cuatro interesados y cada lead te cuesta cierta cantidad, tu costo por cliente es cuatro veces eso. Comparas ese número con lo que te deja un cliente y sabes al instante si la pauta te conviene o no.',
          'Todo esto exige medir bien. Por eso configuramos el seguimiento de conversiones antes de encender la primera campaña. Si te interesa el tema de medición, tenemos una guía de <a href="/blog/como-medir-los-resultados-de-tu-pagina-web/">cómo medir los resultados de tu página web</a> que se conecta directo con esto.',
        ],
      },
      {
        type: 'prose',
        h2: 'La fase de prueba: no apuestes todo el primer mes',
        paragraphs: [
          'Nadie acierta el público, el mensaje y el canal perfectos en el primer intento. Por eso la primera etapa de cualquier pauta es una <strong>fase de prueba</strong>: se invierte una cantidad controlada para aprender qué funciona, no para vender a lo grande. Los primeros días son de datos; el algoritmo necesita señales para afinar a quién mostrarte.',
          'En esa fase probamos varios ángulos de mensaje y creativo, vemos cuál genera leads más baratos y recortamos lo que no rinde. Solo cuando algo demuestra que funciona, se escala. Meter todo el presupuesto de golpe antes de saber qué sirve es la forma más rápida de quemarlo.',
          'Lo bueno es que no necesitas un presupuesto grande para probar. Necesitas orden, medición y paciencia para dejar que los datos hablen antes de decidir.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo definir tu presupuesto paso a paso',
        intro: 'Un método simple para llegar a un número con lógica en vez de al tanteo.',
        items: [
          { h3: '1. Calcula cuánto vale un cliente', text: 'Toma lo que te deja en promedio una venta (o el valor de un cliente en el tiempo, si es recurrente). Ese número es la base de todo lo demás.' },
          { h3: '2. Estima tu tasa de cierre', text: 'De cada diez interesados que te contactan, cuántos compran. Aunque sea aproximado al inicio, te da un punto de partida para calcular tu costo por venta.' },
          { h3: '3. Fija tu costo por lead máximo', text: 'Con el valor del cliente y la tasa de cierre sabes cuánto puedes pagar por cada interesado sin perder. Ese es tu techo.' },
          { h3: '4. Define un presupuesto de prueba', text: 'Empieza con una cantidad que puedas sostener varias semanas sin nervios. La meta es aprender qué funciona, no vender todo el inventario.' },
          { h3: '5. Mide, recorta y escala', text: 'Cada semana revisas qué trae leads baratos y qué no. Recortas lo que no rinde, subes lo que sí, y solo entonces aumentas la inversión.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El error que más caro sale: buen anuncio, mal destino',
        paragraphs: [
          'Puedes tener el mejor presupuesto y la mejor segmentación, y aun así perder si el tráfico llega a una web lenta, confusa o sin un botón claro de contacto. El anuncio solo compra la visita; el destino decide si se convierte en cliente. Pagar clics para mandarlos a una página que no vende es literalmente quemar dinero.',
          'Por eso, antes de hablar de presupuesto de pauta, revisamos a dónde llega el clic. Muchas veces la mejor inversión inicial no es más pauta, sino una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de conversión</a> o un ajuste a tu sitio. Una misma campaña puede rendir el doble solo con un destino mejor armado.',
          'Si aún no tienes web, vale la pena saber que en Elemento Web una landing arranca en $550 y una web PYME en $950, con cotización cerrada por escrito según el alcance. A veces esa inversión rinde más que subir el presupuesto de anuncios.',
        ],
      },
      {
        type: 'statement',
        text: 'El presupuesto no lo define tu antojo, lo define tu margen.',
        strong: 'Y ningún presupuesto salva a un mal destino.',
      },
      {
        type: 'prose',
        h2: 'Fee de gestión e inversión: no los confundas',
        paragraphs: [
          'Al presupuestar pauta hay dos costos distintos. Uno es <strong>nuestro fee de gestión</strong>: lo que pagas por crear, optimizar y reportar las campañas. El otro es <strong>la inversión publicitaria</strong>: el dinero que se muestra en anuncios, que va directo a Google o Meta desde tu propia cuenta. No intermediamos tu inversión ni le aplicamos margen.',
          'Separar esos dos números te deja ver con claridad cuánto va a trabajo y cuánto va a mostrar tus anuncios. Y como la cuenta queda a tu nombre, controlas la inversión y te llevas el historial si algún día cambias de rumbo. Para ver los canales en detalle, revisa <a href="/marketing/google-ads-panama/">Google Ads</a> y <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a>, o compáralos en <a href="/blog/google-ads-vs-facebook-ads-en-panama/">Google Ads vs Facebook Ads</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuál es el mínimo para empezar a pautar?', a: 'No hay un mínimo oficial de las plataformas que sirva de guía real. Lo importante es que el presupuesto alcance para una fase de prueba de varias semanas sin quedarte sin datos. Preferimos empezar con lo que puedas sostener con calma y escalar con resultados.' },
          { q: '¿La inversión se la pagan a ustedes?', a: 'No. La inversión publicitaria va directo a Google o Meta desde tu propia cuenta de anunciante. A nosotros nos pagas solo el fee de gestión. Así sabes exactamente cuánto va a anuncios y cuánto a nuestro trabajo.' },
          { q: '¿En cuánto tiempo recupero lo invertido?', a: 'Depende de tu margen y de tu ciclo de venta. Un servicio de ticket alto puede recuperar rápido con pocos clientes; un producto de ticket bajo necesita volumen. Por eso partimos del costo por lead y del valor de tu cliente, no de una promesa de tiempo.' },
          { q: '¿Puedo pausar la pauta si no me funciona?', a: 'Sí. La inversión se puede pausar en cualquier momento. Lo que recomendamos es no pausar en plena fase de aprendizaje, porque el algoritmo pierde el ritmo y toca volver a empezar a acumular datos.' },
          { q: '¿Conviene más invertir en pauta o en la web?', a: 'Si tu web no convierte, primero la web. Pautar hacia un mal destino es tirar dinero. Muchas veces una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> bien hecha rinde más que subir el presupuesto de anuncios sobre una página que no vende.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/google-ads-vs-facebook-ads-en-panama', label: 'Google Ads vs Facebook Ads en Panamá' },
          { slug: 'blog/como-medir-los-resultados-de-tu-pagina-web', label: 'Cómo medir los resultados de tu web' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'marketing/google-ads-panama', label: 'Google Ads en Panamá' },
        ],
      },
    ],
    cta: {
      h2: 'Definamos juntos un presupuesto con lógica, no al tanteo',
      wa: 'Hola, quiero invertir en publicidad digital pero no sé cuánto. ¿Me ayudan a calcularlo?',
    },
  },

  /* ============ 3. WHATSAPP MASIVO ============ */
  {
    slug: 'blog/como-hacer-campanas-de-whatsapp-masivo-en-panama',
    parent,
    title: 'Cómo hacer campañas de WhatsApp masivo en Panamá',
    description: 'Guía para campañas de WhatsApp masivo en Panamá con la API oficial: plantillas aprobadas, opt-in, cómo evitar bloqueos y casos donde de verdad funciona.',
    h1: 'Cómo hacer campañas de WhatsApp masivo bien hechas',
    breadcrumb: 'WhatsApp masivo',
    category: 'Marketing',
    date: '2026-06-16',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Persona enviando mensajes de WhatsApp masivo desde una laptop y un celular',
    },
    lead: [
      'WhatsApp es el canal donde de verdad está tu cliente en Panamá: lo abre todos los días y ahí sí lee. Por eso tantos negocios quieren mandar campañas masivas. El problema es que casi todos lo hacen mal, y terminan con el número bloqueado.',
      'Hacer WhatsApp masivo bien no es cargar contactos en una app pirata y disparar. Es usar la API oficial, mensajes con permiso y plantillas aprobadas. En esta guía te explicamos cómo se hace de forma correcta, cómo evitar el bloqueo y en qué casos de verdad rinde.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es (y qué no es) WhatsApp masivo',
        paragraphs: [
          'WhatsApp masivo bien hecho es enviar mensajes a muchos contactos a la vez usando la <strong>WhatsApp Business API oficial</strong> de Meta, con permiso de la gente y con mensajes que Meta aprobó previamente. Es una herramienta seria de marketing, no un truco.',
          'Lo que <strong>no</strong> es: cargar una base comprada en una app no oficial o en un chip con un multiplicador de mensajes y disparar promociones a desconocidos. Eso va contra las reglas de WhatsApp y termina casi siempre igual: el número marcado como spam y bloqueado, a veces de forma permanente. Perder el WhatsApp del negocio es perder un canal de ventas entero.',
          'La diferencia entre las dos cosas es enorme, y confundirlas sale caro. Todo lo que sigue asume que lo haces por la vía oficial, que es la única que protege tu número y tu marca.',
        ],
      },
      {
        type: 'prose',
        h2: 'La API oficial: por qué es el único camino serio',
        paragraphs: [
          'La API oficial de WhatsApp Business es la vía que Meta habilita para que las empresas envíen mensajes a escala sin romper las reglas. Con ella tu número queda verificado, puedes mandar campañas grandes y tener varias personas atendiendo el mismo número, todo de forma legítima y estable.',
          'En Elemento Web somos <strong>Meta Verified Tech Provider</strong>, así que montamos tu WhatsApp masivo por la vía oficial, sin el riesgo de bloqueo de las herramientas piratas. Eso significa que tu número está protegido y tus campañas corren sin sustos. Puedes ver el detalle del servicio en <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp marketing masivo en Panamá</a>.',
          'La API además se integra con lo demás: puedes conectar el WhatsApp a tu web, a un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a> que responda al instante y a un CRM que ordene las conversaciones. El mensaje masivo abre la puerta; la atención cierra la venta.',
        ],
      },
      {
        type: 'prose',
        h2: 'Opt-in y plantillas aprobadas: las dos reglas de oro',
        paragraphs: [
          'La primera regla es el <strong>opt-in</strong>: solo le escribes a quien te dio permiso de escribirle. Ese permiso puede venir de un formulario en tu web, de una casilla que la persona marcó, de una compra o de que ella misma te escribió primero. Mandarle a quien no lo pidió es la receta directa del bloqueo, y además molesta a tu propia audiencia.',
          'La segunda regla son las <strong>plantillas aprobadas</strong>. Para iniciar una conversación (no responder), el mensaje tiene que ser una plantilla que Meta revisó y autorizó antes. No puedes improvisar el texto de un envío masivo: se redacta, se envía a aprobación y, una vez aprobada, se usa. Las plantillas útiles y no invasivas se aprueban sin problema; las que parecen spam agresivo, no.',
          'Estas dos reglas no son burocracia: son lo que mantiene tu número vivo. Un negocio que respeta el opt-in y usa plantillas aprobadas puede hacer campañas por años sin un solo bloqueo.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que necesitas antes de tu primera campaña',
        intro: 'Con esto en orden, tu WhatsApp masivo corre estable y sin riesgo para tu número.',
        items: [
          'WhatsApp Business API oficial configurada (no un chip con app pirata).',
          'Número verificado y perfil de empresa completo, con nombre, logo y descripción.',
          'Una lista de contactos con opt-in real: gente que aceptó recibir tus mensajes.',
          'Plantillas de mensaje redactadas y enviadas a aprobación de Meta.',
          'Una forma clara de que la gente se dé de baja cuando ya no quiera recibir.',
          'Un destino listo: tu web, una landing o alguien atendiendo las respuestas rápido.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo evitar el bloqueo',
        paragraphs: [
          'El bloqueo casi siempre viene de tres cosas: escribir a quien no dio permiso, mandar demasiado y muy seguido, y usar mensajes que la gente reporta como spam. Meta mira las señales de calidad de tu número, y si muchos te bloquean o reportan, te baja la calificación y limita tus envíos hasta cortarlos.',
          'La forma de evitarlo es simple de decir y disciplinada de cumplir: escribe solo a quien te dio opt-in, manda contenido que aporte (no solo "compra"), respeta la frecuencia y facilita darse de baja. Un contacto que se va tranquilo vale más que uno que te reporta. Menos ruido y más relevancia mantienen tu número sano.',
          'También ayuda calentar el número de a poco en vez de disparar miles el primer día, y segmentar para que cada mensaje le llegue a quien de verdad le interesa. La calidad del número es un activo: se cuida.',
        ],
      },
      {
        type: 'statement',
        text: 'Con permiso y por la vía oficial, WhatsApp es tu mejor canal. Sin permiso, es un número bloqueado.',
        strong: 'La diferencia es opt-in y plantillas aprobadas.',
      },
      {
        type: 'prose',
        h2: 'Casos donde de verdad funciona',
        paragraphs: [
          'WhatsApp masivo bien hecho rinde en cosas concretas: avisar una promoción a clientes que ya te compraron, recordar una cita o un pago, confirmar un pedido, recuperar a alguien que dejó un carrito, anunciar algo nuevo a tu propia base. En todos esos casos le escribes a gente que ya te conoce y que agradece el mensaje.',
          'Donde no funciona es como sustituto de la publicidad para conseguir clientes nuevos y fríos: para eso están <a href="/marketing/google-ads-panama/">Google Ads</a> y <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a>. WhatsApp brilla con tu audiencia propia, no con desconocidos. Piensa en él como el canal para hablarle a quien ya levantó la mano.',
          'Combinado con una buena web que capte los opt-in y un chatbot que atienda al instante, el WhatsApp se vuelve una máquina de repetición de compra. Si vendes por ahí, te puede interesar también <a href="/blog/como-vender-por-whatsapp-en-panama/">cómo vender por WhatsApp en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Puedo usar mi WhatsApp normal para mandar masivos?', a: 'No es recomendable. El WhatsApp normal o Business común no está pensado para envíos masivos y te arriesgas al bloqueo. Para campañas se usa la API oficial, que es la vía que Meta habilita para eso.' },
          { q: '¿De dónde saco los contactos con opt-in?', a: 'De tu propia operación: formularios en la web, casillas de suscripción, compras, reservas o gente que te escribió primero. Lo que no debes hacer es comprar bases de datos: además de ilegal, es la vía directa al reporte de spam.' },
          { q: '¿Cuánto tarda en aprobarse una plantilla?', a: 'Meta suele revisar las plantillas en poco tiempo si están bien redactadas y no parecen spam. Las que se rechazan casi siempre es por lenguaje demasiado comercial o engañoso; ajustando el texto se vuelven a enviar.' },
          { q: '¿Somos nosotros o ustedes los que responden los mensajes?', a: 'Como quieras. Puedes atender tú, tu equipo, o conectar un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a> que responda al instante y pase a un humano cuando haga falta. La campaña abre la conversación; alguien tiene que estar para cerrarla.' },
          { q: '¿Qué pasa si alguien se quiere dar de baja?', a: 'Debe poder hacerlo fácil, y hay que respetarlo de inmediato. Facilitar la baja protege tu número: es mejor que alguien se vaya tranquilo a que te reporte como spam y afecte la calidad de todos tus envíos.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp marketing masivo en Panamá' },
          { slug: 'blog/como-vender-por-whatsapp-en-panama', label: 'Cómo vender por WhatsApp en Panamá' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbots con IA para tu web' },
          { slug: 'saas/chatmantis', label: 'ChatMantis' },
        ],
      },
    ],
    cta: {
      h2: 'Montamos tu WhatsApp masivo por la vía oficial, sin riesgo de bloqueo',
      wa: 'Hola, quiero hacer campañas de WhatsApp masivo con la API oficial. ¿Cómo empezamos?',
    },
  },

  /* ============ 4. EMAIL MARKETING ============ */
  {
    slug: 'blog/email-marketing-para-negocios-en-panama',
    parent,
    title: 'Email marketing para negocios en Panamá: guía 2026',
    description: 'Guía de email marketing para negocios en Panamá: construir una lista propia, automatizaciones de bienvenida, carrito y reactivación, y cuidar la entregabilidad.',
    h1: 'Email marketing para negocios en Panamá: guía 2026',
    breadcrumb: 'Email marketing',
    category: 'Marketing',
    date: '2026-06-02',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1553484771-371a605b060b?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Persona revisando una campaña de email marketing en una laptop',
    },
    lead: [
      'A muchos les suena viejo, pero el email sigue siendo el canal con mejor retorno del marketing digital, y por una razón simple: es tuyo. No dependes del algoritmo de nadie ni pagas por cada alcance. Tu lista es un activo que te pertenece.',
      'En esta guía te mostramos cómo hacer email marketing de verdad en 2026: construir una lista propia (no comprada), montar las automatizaciones que trabajan solas y cuidar la entregabilidad para que tus correos lleguen a la bandeja de entrada y no al spam.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué el email sigue rindiendo',
        paragraphs: [
          'En redes sociales alquilas la atención: el algoritmo decide a cuántos de tus seguidores les muestra tu publicación, y cada vez son menos sin pagar. En email, en cambio, eres dueño del canal. Escribes a tu lista y llega a tu lista, sin intermediario cobrando por el alcance.',
          'Ese detalle lo cambia todo. Una lista de correos bien cuidada es un activo que puedes usar cuantas veces quieras sin volver a pagar por conseguir a esa gente. Por eso decimos que en marketing digital, construir lista propia es de las inversiones más rentables que existen.',
          'Además, el email le habla a gente que ya te conoce y te dio permiso: clientes, interesados, suscriptores. No es tráfico frío, es tu audiencia. Y a esa audiencia se le vende mucho mejor que a un desconocido.',
        ],
      },
      {
        type: 'prose',
        h2: 'Lista propia: nunca compres correos',
        paragraphs: [
          'La base de todo es una <strong>lista propia y con permiso</strong>. Se construye ofreciendo algo a cambio del correo: un descuento, una guía útil, acceso a novedades, un recurso que a tu cliente le sirva. La gente te da su email porque quiere saber de ti, y ese permiso es lo que hace que después abran tus correos.',
          'Comprar bases de datos es el error clásico, y sale caro: esos contactos no te conocen, no te pidieron nada y te van a marcar como spam. Eso no solo no vende, sino que arruina tu reputación de envío y hace que hasta tus correos legítimos terminen en spam. Una lista comprada es un pasivo, no un activo.',
          'La lista se alimenta desde tu web: formularios de suscripción, un pop-up bien puesto, la casilla en el checkout de tu <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a>. Tu sitio es la máquina de captar correos; el email es donde esos correos se vuelven ventas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Automatizaciones: el email que trabaja solo',
        paragraphs: [
          'La magia del email moderno está en las <strong>automatizaciones</strong>: secuencias que se envían solas cuando pasa algo, sin que tengas que escribir nada cada vez. Se configuran una vez y trabajan por meses. Estas son las tres que casi todo negocio debería tener.',
          'La <strong>bienvenida</strong>: cuando alguien se suscribe o compra por primera vez, recibe una secuencia que le cuenta quién eres, qué ofreces y por qué confiar en ti. Es el momento de mayor interés, y desperdiciarlo es tirar el mejor cliente potencial. El <strong>carrito abandonado</strong>: si alguien agregó productos y no terminó, un recordatorio automático recupera una parte de esas ventas que ya estaban casi hechas.',
          'Y la <strong>reactivación</strong>: a los clientes que hace tiempo no te compran, una secuencia que los invita a volver, a veces con un incentivo. Recuperar a un cliente que ya te conoce es más barato que conseguir uno nuevo. Estas automatizaciones se pueden conectar con el resto de tu operación usando <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones con n8n</a>.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo montar tu email marketing',
        intro: 'Un orden sensato para arrancar sin complicarte y crecer con base.',
        items: [
          { h3: '1. Elige tu plataforma de envío', text: 'Una herramienta de email marketing que maneje listas, plantillas, automatizaciones y reportes de apertura y clics. La plataforma es la que cuida tu reputación de envío.' },
          { h3: '2. Pon a captar tu web', text: 'Instala formularios y una oferta clara para que la gente deje su correo. Sin captación, la lista no crece y no hay a quién escribirle.' },
          { h3: '3. Configura la bienvenida', text: 'La primera automatización. Que todo suscriptor nuevo reciba una secuencia que lo enamore mientras su interés está caliente.' },
          { h3: '4. Suma carrito y reactivación', text: 'Si vendes online, el carrito abandonado. Para todos, la reactivación de clientes dormidos. Se configuran una vez y recuperan ventas solas.' },
          { h3: '5. Manda contenido con regularidad', text: 'Un boletín útil cada cierto tiempo mantiene tu lista viva y acostumbrada a abrir. No solo vendas: aporta, y las ventas vienen detrás.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Entregabilidad: llegar a la bandeja, no al spam',
        paragraphs: [
          'De nada sirve un correo genial si termina en spam. La <strong>entregabilidad</strong> es el arte de que tus correos lleguen a la bandeja de entrada, y depende de tu reputación como remitente. Los proveedores de correo vigilan cómo te trata tu propia gente: si te abren, es buena señal; si te ignoran o te marcan como spam, mala.',
          'Se cuida con cosas concretas: configurar bien la autenticación técnica de tu dominio (los registros que le dicen a Gmail que eres tú), enviar solo a quien te dio permiso, limpiar los correos que rebotan, no usar asuntos engañosos y facilitar la baja. Una lista pequeña y comprometida entrega mejor que una grande y fría.',
          'Cuidar la entregabilidad es cuidar el canal entero. Un remitente con buena reputación llega a la bandeja; uno con mala reputación desaparece en spam por más bonito que sea el correo. Es trabajo técnico y de disciplina, y es lo que separa el email que vende del que nadie ve.',
        ],
      },
      {
        type: 'statement',
        text: 'Tu lista de correos es tuya. Las redes son alquiladas.',
        strong: 'Por eso el email sigue siendo el canal de mejor retorno.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿El email marketing sigue funcionando en 2026?', a: 'Sí, y sigue siendo de los canales con mejor retorno, justamente porque no dependes del algoritmo de nadie. La clave es tener lista propia, automatizaciones y buena entregabilidad; hecho así, rinde tanto o más que hace años.' },
          { q: '¿Puedo comprar una lista para empezar más rápido?', a: 'No lo hagas. Los correos comprados no te conocen, te marcan como spam y arruinan tu reputación de envío, al punto de que hasta tus correos legítimos terminen en spam. Es mejor una lista pequeña y propia que una grande y comprada.' },
          { q: '¿Cada cuánto debo enviar correos?', a: 'Con regularidad, pero sin saturar. Lo importante es la consistencia y que cada correo aporte algo, no solo que venda. Si solo escribes para pedir compra, la gente deja de abrir; si aportas, se acostumbran a leerte.' },
          { q: '¿Qué es una automatización de email?', a: 'Una secuencia que se envía sola cuando pasa algo: alguien se suscribe (bienvenida), deja un carrito (recordatorio) o lleva tiempo sin comprar (reactivación). Se configura una vez y trabaja por meses sin que tengas que escribir cada vez.' },
          { q: '¿Necesito una web para hacer email marketing?', a: 'Necesitas algo que capte correos, y la web es lo ideal: formularios, un pop-up o la casilla del checkout de tu tienda. La web capta y el email convierte. Sin un lugar donde captar, la lista no crece.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/email-marketing-panama', label: 'Email marketing en Panamá' },
          { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones con n8n' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },
          { slug: 'blog/como-medir-los-resultados-de-tu-pagina-web', label: 'Cómo medir los resultados de tu web' },
        ],
      },
    ],
    cta: {
      h2: 'Te montamos la lista, las automatizaciones y la entregabilidad',
      wa: 'Hola, quiero empezar con email marketing para mi negocio. ¿Me ayudan a montarlo?',
    },
  },

  /* ============ 5. MARKETING DE CONTENIDOS PARA REDES ============ */
  {
    slug: 'blog/marketing-de-contenidos-para-redes-sociales-panama',
    parent,
    title: 'Marketing de contenidos para redes sociales en Panamá',
    description: 'Cómo hacer marketing de contenidos para redes en Panamá: estrategia por pilares, Reels, constancia real y cómo llevar el contenido de las redes hacia tu web.',
    h1: 'Marketing de contenidos para redes sociales en Panamá',
    breadcrumb: 'Contenido para redes',
    category: 'Marketing',
    date: '2026-05-19',
    heroImage: {
      src: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=1600&h=1000&q=80&auto=format&fit=crop',
      alt: 'Creador de contenido grabando un Reel con el celular para redes sociales',
    },
    lead: [
      'Publicar por publicar no es marketing de contenidos. Muchos negocios en Panamá suben cosas a Instagram sin rumbo, se cansan a las pocas semanas y concluyen que las redes no sirven. El problema no fue la red: fue la falta de estrategia y de constancia.',
      'El marketing de contenidos bien hecho construye una marca que la gente sigue, confía y termina comprando. En esta guía te mostramos cómo armar una estrategia por pilares, por qué los Reels mandan, cómo sostener la constancia sin quemarte y cómo llevar ese contenido hacia tu web, que es donde se cierra la venta.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El contenido es un activo, no un relleno',
        paragraphs: [
          'El error de fondo es tratar el contenido como algo que hay que "llenar": subir cualquier cosa para no dejar el perfil vacío. Así se produce ruido, no marca. El buen contenido es un activo que trabaja para ti: educa a tu cliente, muestra que sabes de lo tuyo y construye la confianza que después se convierte en venta.',
          'La gente rara vez compra la primera vez que te ve. Te sigue, te observa un tiempo, se convence de que sabes lo que haces, y entonces compra. El contenido es ese tiempo de cortejo: cada pieza suma a que confíen en ti o resta si es floja. Por eso importa la calidad y la intención, no solo la cantidad.',
          'Pensar el contenido como activo cambia cómo lo produces: dejas de improvisar y empiezas a construir. Cada Reel, cada publicación, aporta a una imagen de marca coherente que se acumula con el tiempo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Estrategia por pilares: de qué vas a hablar',
        paragraphs: [
          'Antes de grabar nada, define tus <strong>pilares de contenido</strong>: tres o cuatro temas de los que tu marca va a hablar siempre. Por ejemplo, un restaurante podría tener platos, detrás de cámara y clientes; un estudio de abogados, dudas comunes, casos y consejos prácticos. Los pilares te dan de qué hablar sin quedarte en blanco.',
          'Con los pilares definidos, cada pieza cumple un rol: unas <strong>educan</strong> (enseñan algo útil), otras <strong>conectan</strong> (muestran el lado humano de tu marca) y otras <strong>venden</strong> (invitan a la acción). El mix importa: si todo es venta, la gente se cansa; si nada vende, no hay negocio. El equilibrio es lo que hace que te sigan y aun así compren.',
          'Esta estrategia es la base de un servicio de <a href="/marketing/contenido-redes-sociales-panama/">contenido para redes sociales en Panamá</a> que rinda. Sin pilares, el contenido es improvisación; con pilares, es construcción de marca. Y una marca construida vende mucho más fácil.',
        ],
      },
      {
        type: 'prose',
        h2: 'Reels y video: el formato que hoy manda',
        paragraphs: [
          'Si tuvieras que apostar por un formato hoy, es el <strong>video corto</strong>: Reels en Instagram, videos en TikTok. Las plataformas lo empujan porque es lo que la gente consume, y por eso un Reel bueno llega a mucha más gente que una foto. El video es donde está el alcance sin pagar.',
          'No hace falta producción de cine. Con un celular, buena luz y un mensaje claro se hacen Reels que funcionan. Lo que sí importa es el primer segundo: si no enganchas de una, la gente sigue el scroll. Por eso el gancho inicial (una pregunta, un dato, una promesa) pesa más que la calidad de la cámara.',
          'El video corto también es el mejor amigo de la pauta: un Reel que funciona orgánicamente suele funcionar aún mejor como anuncio en <a href="/marketing/facebook-instagram-ads-panama/">Facebook e Instagram Ads</a>. El contenido alimenta la pauta y la pauta amplifica el contenido; los dos juntos rinden más que por separado.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Cómo sostener la constancia sin quemarte',
        intro: 'La constancia es lo que separa a los que construyen marca de los que abandonan a las tres semanas. Estas prácticas la hacen sostenible.',
        items: [
          'Define un calendario realista: mejor pocas piezas fijas que muchas insostenibles.',
          'Graba en tandas: junta varios Reels en una sola sesión en vez de improvisar a diario.',
          'Reutiliza: un tema da para un Reel, un carrusel, una historia y un correo.',
          'Ten tus pilares a la vista para no quedarte sin ideas de qué publicar.',
          'Mide qué formato y tema funcionan, y haz más de eso en vez de adivinar.',
          'No persigas viralidad: persigue consistencia, que es lo que de verdad construye.',
        ],
      },
      {
        type: 'prose',
        h2: 'Del contenido a la web: donde se cierra la venta',
        paragraphs: [
          'Aquí está el paso que casi todos olvidan. Las redes son de alquiler: no eres dueño de tus seguidores ni del algoritmo, y un cambio de reglas puede borrar tu alcance de la noche a la mañana. Por eso el contenido no puede terminar en la red; tiene que <strong>llevar a tu web</strong>, que sí es tuya.',
          'El circuito sano es este: el contenido atrae en redes, mueve a la gente a tu web y ahí capturas el contacto o cierras la venta, con un formulario, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> o una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a>. Así conviertes seguidores prestados en clientes y contactos que sí te pertenecen. La red es la vitrina; la web es la caja registradora.',
          'Sin ese puente hacia la web, el mejor contenido se queda en likes que no pagan cuentas. Con él, cada Reel es una puerta que lleva a alguien un paso más cerca de comprarte. Si quieres medir si todo ese trabajo se traduce en resultados, revisa <a href="/blog/como-medir-los-resultados-de-tu-pagina-web/">cómo medir los resultados de tu web</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Las redes son alquiladas; tu web es tuya.',
        strong: 'El contenido atrae, pero la venta se cierra en tu sitio.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cada cuánto debo publicar en redes?', a: 'Más importante que la frecuencia es la constancia sostenible. Es mejor un ritmo que puedas mantener por meses que un arranque intenso que abandonas en tres semanas. Define un calendario realista y cúmplelo; la regularidad vence a los picos.' },
          { q: '¿Necesito equipo caro para grabar Reels?', a: 'No. Con un celular actual, buena luz natural y un mensaje claro se hacen Reels que funcionan. Importa mucho más el gancho del primer segundo y la idea que la cámara. La producción se puede mejorar con el tiempo.' },
          { q: '¿El contenido vende solo o necesito pauta?', a: 'El contenido orgánico construye marca y confianza, pero para acelerar resultados se combina con <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a>. Un Reel que funciona solo suele rendir aún mejor como anuncio. Lo ideal es que el contenido alimente la pauta.' },
          { q: '¿Cómo mido si el contenido está funcionando?', a: 'No solo por likes, sino por lo que aporta al negocio: cuánta gente pasa de las redes a tu web y cuántos de esos se vuelven contactos o clientes. Por eso el contenido debe llevar a un destino medible, no quedarse en la red.' },
          { q: '¿Ustedes manejan el contenido y la pauta?', a: 'Sí, y es lo ideal que vayan juntos: el contenido alimenta la pauta y la pauta amplifica el contenido. Puedes contratar cada servicio por separado o como un plan integral, y siempre conectado a tu web como destino.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/contenido-redes-sociales-panama', label: 'Contenido para redes sociales' },
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/como-medir-los-resultados-de-tu-pagina-web', label: 'Cómo medir los resultados de tu web' },
        ],
      },
    ],
    cta: {
      h2: 'Creamos contenido con estrategia y lo conectamos con tu web',
      wa: 'Hola, quiero una estrategia de contenido para mis redes que lleve gente a mi web. ¿Cómo trabajamos?',
    },
  },
];
