/* BLOG — Lote 1: categoría "Diseño web".
   Cinco guías long-form escritas para el mercado panameño. Cada objeto es una
   PageData con parent { slug: 'blog' }, por lo que el listado /blog las recoge
   automáticamente por su fecha y categoría. */
import type { PageData } from '../types';

export const blog1: PageData[] = [
  {
    slug: 'blog/cuanto-cuesta-diseno-web-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: '¿Cuánto cuesta una página web en Panamá? Guía de precios 2026',
    description:
      'Rangos reales de precio para una página web en Panamá según el tipo de proyecto, qué encarece una web y por qué lo barato termina saliendo más caro.',
    h1: '¿Cuánto cuesta una página web en Panamá? Guía de precios 2026',
    breadcrumb: 'Precios de diseño web',
    category: 'Diseño web',
    date: '2026-07-22',
    heroImage: {
      src: '/images/blog/cuanto-cuesta-diseno-web-panama.jpg',
      alt: 'Persona calculando el presupuesto de una página web en Panamá',
    },
    lead: [
      'Es la primera pregunta que nos hace todo el mundo, y la respuesta honesta incomoda un poco: depende. Una página web no es un producto de estante con un precio fijo, sino un proyecto que cambia de precio según lo que necesita tu negocio para vender. Pero eso no significa que estés a ciegas.',
      'En esta guía te explicamos los rangos reales de precio en Panamá según el tipo de proyecto, qué factores encarecen una web, qué debe incluir cualquier cotización seria y por qué la opción más barata casi siempre termina costando más. La idea es que llegues a tu próxima reunión sabiendo exactamente qué estás pagando y por qué.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'De qué depende realmente el precio de una página web',
        paragraphs: [
          'El precio de una web se mueve por tres variables, no por el capricho de quien la cobra. La primera es el <strong>alcance</strong>: cuántas páginas tiene, cuánto contenido hay que estructurar y qué tan compleja es la navegación. No cuesta lo mismo una landing de una sola pantalla que un sitio corporativo con doce servicios, cada uno con su propia página optimizada.',
          'La segunda es la <strong>funcionalidad</strong>. Un sitio informativo que solo presenta tu negocio y empuja al cliente hacia WhatsApp es un mundo distinto de una tienda con catálogo, carrito, inventario y pagos en línea, o de un sistema de reservas con calendario y confirmaciones automáticas. Cada función que se conecta suma horas de desarrollo y de pruebas.',
          'La tercera es el <strong>trabajo estratégico</strong>: la investigación de tus clientes, el copy que convierte, el SEO técnico, la arquitectura de contenidos. Es la parte invisible en la pantalla y la que más pesa en el resultado. Una plantilla comprada por veinte dólares no tiene nada de esto, y por eso una web hecha con estrategia cuesta más y rinde infinitamente más.',
        ],
      },
      {
        type: 'prose',
        h2: 'Rangos de precio por tipo de proyecto en Panamá',
        paragraphs: [
          'Con esas variables en mente, estos son los puntos de partida reales que manejamos en <a href="/diseno-web-panama/">diseño web en Panamá</a>. Son precios de partida: cada proyecto se cotiza cerrado y por escrito antes de empezar, según sus páginas e integraciones.',
          'Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de alta conversión</a> parte desde $550. Es una sola página con una oferta y una acción, el destino ideal para tu pauta en Google o Meta. Una <strong>Página PYME</strong> —el sitio de varias secciones que presenta a un negocio completo— parte desde $950, y es el formato que más contratan los comercios y profesionales panameños.',
          'Una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online o e-commerce</a> parte desde $1,500, porque incluye catálogo, carrito, pasarelas de pago y la logística de venta. Un <strong>sitio corporativo a medida</strong>, con arquitectura amplia y contenido por servicio, se cotiza a medida desde $2,900. A eso se suma la infraestructura anual desde $350 y el mantenimiento desde $59 al mes, que mantienen el sitio en línea, respaldado y actualizado.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué encarece un proyecto (y por qué vale la pena)',
        paragraphs: [
          'Hay decisiones que suben el precio con toda razón porque suben el retorno. La primera es el <strong>contenido a medida</strong>: cuando escribimos los textos de venta, producimos las fotos o construimos las descripciones de producto contigo, el proyecto crece, pero también deja de sonar como todos los demás en tu rubro.',
          'Las <strong>integraciones</strong> son el otro gran factor. Conectar <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy y pasarelas de pago</a>, un chatbot con IA, un sistema de citas o un CRM añade horas de desarrollo, pero cada una de esas piezas es una herramienta que te ahorra trabajo o te trae ventas todos los días. No son adornos: son parte de la máquina.',
          'También encarece —y con motivo— el <strong>SEO técnico bien hecho</strong> y la optimización de velocidad. Es un trabajo que no se ve en la pantalla pero que decide si Google te muestra y si el cliente se queda o se va. Recortar por ahí es lo mismo que abrir una tienda en un callejón sin luz: bonita por dentro, invisible por fuera.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué debe incluir cualquier cotización seria',
        intro:
          'Antes de aceptar un precio, revisa que la propuesta contemple estos puntos. Si falta alguno, probablemente reaparezca como cargo extra a mitad del camino.',
        items: [
          'Precio cerrado por escrito antes de empezar, no una estimación abierta',
          'Diseño a medida sobre tu marca, no una plantilla revendida',
          'Sitio responsivo, impecable en celular, tablet y escritorio',
          'SEO técnico: metadatos, datos estructurados, sitemap y URLs limpias',
          'Optimización de velocidad de carga',
          'Botones directos a WhatsApp y formularios conectados a tu correo',
          'Certificado SSL y sitio servido de forma segura',
          'Panel autoadministrable con capacitación para que administres tu web',
          'Analítica configurada (Google Analytics y Search Console) desde el día uno',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué lo barato termina saliendo más caro',
        paragraphs: [
          'La tentación de pagar $150 por una web es real, sobre todo cuando alguien te la ofrece lista en tres días. El problema es lo que no ves en ese precio. Casi siempre significa una plantilla genérica, sin SEO, lenta, imposible de administrar y sin nadie que responda cuando algo falla. La web existe, pero no trabaja.',
          'Al cabo de unos meses el patrón se repite: no aparece en Google, no genera un solo mensaje y toca rehacerla desde cero. Ahí pagas dos veces —lo barato primero y lo bien hecho después— más los meses de clientes que nunca llegaron. Ese costo de oportunidad no aparece en ninguna factura, pero es el más caro de todos.',
          'Invertir bien de entrada no es gastar más por gusto. Es evitar el ciclo de rehacer, no perder posicionamiento y tener un activo que suma clientes con el tiempo en lugar de uno que hay que reemplazar. Si el presupuesto aprieta, la respuesta no es una web mala barata, sino empezar con un formato más pequeño —una landing sólida— y crecer sobre una base bien construida.',
        ],
      },
      {
        type: 'statement',
        text: 'Una web barata no es la que cuesta poco. Es la que hay que pagar dos veces porque',
        strong: 'nunca funcionó.',
      },
      {
        type: 'prose',
        h2: 'Cómo saber cuánto invertir según tu negocio',
        paragraphs: [
          'El monto correcto no depende de una tabla, sino de qué tan central es la web para tus ventas. Si tu negocio vive de que la gente te encuentre en Google y te escriba —consultorios, servicios, comercios locales— la web es tu vendedor principal y merece una inversión acorde. Recortar ahí es recortar en ventas.',
          'Si vendes en línea, la ecuación es todavía más directa: la tienda es literalmente tu caja registradora, y cada mejora en velocidad, pagos o experiencia se traduce en pedidos completados. Y si apenas estás validando una idea, una landing enfocada te deja probar el mercado con poco riesgo antes de escalar.',
          'La forma sana de decidirlo es al revés de como suele hacerse: no partas del precio más bajo que encuentres, parte de cuánto vale un cliente nuevo para ti. Si un cliente te deja cientos o miles de dólares al año, una web que te trae varios al mes se paga sola en semanas. Cuando tengas ese número claro, <a href="/servicios/">explora los servicios</a> o pídenos una <a href="/contacto/">cotización cerrada</a> y compara con datos, no con corazonadas.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          {
            q: '¿Cuál es el precio mínimo de una página web en Panamá?',
            a: 'Una landing page bien hecha parte desde $550 y una Página PYME de varias secciones desde $950. Por debajo de eso casi siempre hablamos de plantillas genéricas sin SEO ni soporte, que terminan costando más al rehacerlas.',
          },
          {
            q: '¿El precio incluye el dominio y el hosting?',
            a: 'El diseño se cotiza aparte del hosting. La infraestructura anual parte desde $350 y el <a href="/crecimiento/mantenimiento-hosting-web-panama/">mantenimiento desde $59 al mes</a>, que mantiene tu sitio en línea, respaldado y actualizado. Te asesoramos y configuramos dominio y hosting como parte del proceso.',
          },
          {
            q: '¿Puedo pagar en cuotas o con Yappy?',
            a: 'Sí. Trabajamos con esquemas de pago por etapas y aceptamos los medios que ya usas a diario en Panamá, incluido Yappy. Los términos quedan por escrito en la propuesta antes de arrancar.',
          },
          {
            q: '¿Por qué una agencia cobra más que un freelancer barato?',
            a: 'Porque el precio no paga solo el diseño visible, sino la estrategia, el SEO técnico, las integraciones y el acompañamiento después del lanzamiento. Es la diferencia entre una web que se ve bien y una que trae clientes. Lo vemos a fondo en la guía de <a href="/blog/como-elegir-agencia-diseno-web-panama/">cómo elegir agencia</a>.',
          },
          {
            q: '¿La cotización puede cambiar a mitad del proyecto?',
            a: 'No debería. Nosotros entregamos precio cerrado por escrito antes de empezar. Solo cambia si tú decides ampliar el alcance con funciones nuevas, y en ese caso se cotiza el añadido aparte, también por escrito.',
          },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-elegir-agencia-diseno-web-panama', label: 'Cómo elegir una agencia de diseño web' },
          { slug: 'blog/cuanto-tiempo-toma-hacer-una-pagina-web', label: '¿Cuánto tiempo toma hacer una web?' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
          { slug: 'servicios', label: 'Todos los servicios' },
        ],
      },
    ],
    cta: {
      h2: 'Sabe cuánto costará tu web antes de decidir',
      wa: 'Hola, quiero una cotización cerrada para mi página web en Panamá.',
    },
  },

  {
    slug: 'blog/errores-comunes-diseno-web-empresas',
    parent: { slug: 'blog', label: 'Blog' },
    title: '7 errores de diseño web que le cuestan clientes a tu empresa',
    description:
      'Los 7 errores de diseño web más comunes en las empresas panameñas —sin SEO, lentas, sin WhatsApp, sin móvil— y cómo corregirlos para dejar de perder clientes.',
    h1: '7 errores de diseño web que le cuestan clientes a tu empresa',
    breadcrumb: 'Errores de diseño web',
    category: 'Diseño web',
    date: '2026-07-08',
    heroImage: {
      src: '/images/blog/errores-comunes-diseno-web-empresas.jpg',
      alt: 'Empresario frustrado revisando una página web que no funciona',
    },
    lead: [
      'Una página web puede estar en línea, verse moderna y aun así estar ahuyentando clientes todos los días sin que lo notes. No hace ruido cuando falla: simplemente la gente entra, no encuentra lo que busca y se va con la competencia. El dinero perdido no aparece en ningún reporte.',
      'En esta guía repasamos los siete errores de diseño web que vemos una y otra vez en empresas panameñas, por qué cada uno te cuesta clientes reales y qué hacer para corregirlo. La buena noticia es que casi todos tienen arreglo sin empezar de cero.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Tu web trabaja para ti o trabaja en tu contra',
        paragraphs: [
          'No existe la web neutral. Cada sitio, en cada visita, o acerca al cliente a escribirte o lo empuja a cerrar la pestaña. La mayoría de las empresas asume que basta con estar en línea, pero estar en línea sin estrategia es como tener una tienda con la puerta cerrada y las luces apagadas: técnicamente existe, pero no vende.',
          'Lo peligroso de estos errores es que son silenciosos. Nadie te llama para decirte que tu web cargó lento y por eso se fue. Simplemente no llegan los mensajes, y es fácil culpar al mercado o a la temporada cuando la causa está en la pantalla. Identificarlos es el primer paso para taparlos.',
        ],
      },
      {
        type: 'steps',
        h2: 'Los 7 errores que le cuestan clientes a tu empresa',
        intro: 'Revísalos uno por uno pensando en tu propia web. Basta con cometer dos o tres para estar dejando ventas sobre la mesa.',
        items: [
          {
            h3: '1. No aparecer en Google (web sin SEO)',
            text: 'Si tu cliente busca tu servicio en Panamá y no te encuentra, no existes para él. Una web sin SEO técnico, sin contenido optimizado y sin trabajo de posicionamiento es invisible. Es el error que más clientes cuesta y el más común.',
          },
          {
            h3: '2. Cargar lento',
            text: 'En el celular, cada segundo de espera hace que parte de tus visitantes abandone antes de ver nada. Imágenes pesadas, constructores recargados y hosting barato son las causas típicas. La velocidad no es un lujo técnico: es retención de clientes.',
          },
          {
            h3: '3. No tener botón de WhatsApp',
            text: 'En Panamá la conversación de venta ocurre por WhatsApp. Si el cliente tiene que copiar un número o llenar un formulario largo para escribirte, muchos no lo harán. Un botón directo con el mensaje ya escrito quita toda la fricción.',
          },
          {
            h3: '4. Ser una sola página que quiere decirlo todo',
            text: 'Meter todos los servicios en una sola pantalla infinita confunde al visitante y le quita a Google la oportunidad de posicionarte por cada servicio. Cada servicio importante merece su propia página optimizada.',
          },
          {
            h3: '5. No funcionar bien en el celular',
            text: 'La mayoría de tus visitas llegan desde un teléfono. Si el texto se corta, los botones no se dejan tocar o hay que hacer zoom para leer, perdiste al cliente antes de empezar. El diseño debe pensarse primero para móvil.',
          },
          {
            h3: '6. No decirle al visitante qué hacer',
            text: 'Una web sin un llamado a la acción claro deja al cliente sin siguiente paso. ¿Cotizar? ¿Comprar? ¿Agendar? Si no hay un botón obvio que lo guíe, la mayoría se va sin hacer nada, por más interesada que estuviera.',
          },
          {
            h3: '7. Tener contenido genérico y vacío',
            text: 'Textos que podrían servir para cualquier empresa del rubro —"somos los mejores, ofrecemos calidad y compromiso"— no convencen a nadie ni ayudan al SEO. El contenido que vende habla de tu cliente, su problema y tu solución concreta.',
          },
        ],
      },
      {
        type: 'prose',
        h2: 'El error de fondo: una web sin objetivo de negocio',
        paragraphs: [
          'Si miras los siete con calma, todos nacen de la misma raíz: se construyó la web sin preguntarse qué debía lograr. Cuando el objetivo no está definido, el diseñador optimiza para lo que se ve bonito en una presentación, no para lo que mueve tu negocio, y así aparecen las páginas lentas, sin SEO y sin llamados a la acción.',
          'La pregunta que ordena todo es sencilla: <strong>¿qué necesita conseguir tu negocio con este sitio?</strong> Cotizaciones por WhatsApp, ventas en línea, citas agendadas, confianza antes de una reunión. La respuesta define la estructura, el contenido y cada botón. Cuando el objetivo es claro, los siete errores casi no tienen dónde esconderse.',
          'Por eso un buen <a href="/blog/como-elegir-agencia-diseno-web-panama/">proceso de diseño</a> empieza por la estrategia, no por el color de fondo. La estética es la consecuencia de una web bien pensada, nunca su punto de partida.',
        ],
      },
      {
        type: 'prose',
        h2: 'Panamá navega en el celular: diséñalo primero para móvil',
        paragraphs: [
          'Vale la pena detenerse en el móvil porque es donde se concentran los errores 2, 5 y 3. La gran mayoría de las visitas en Panamá llegan desde un teléfono, muchas veces con datos móviles y en movimiento. Una web pensada primero para la pantalla grande y luego "adaptada" al celular casi siempre falla justo donde más tráfico tiene.',
          'Diseñar primero para móvil obliga a lo correcto: mensajes cortos y directos, botones grandes que se dejan tocar con el pulgar, imágenes livianas que cargan rápido y el WhatsApp siempre a mano. Lo que funciona bien en celular casi siempre funciona bien en escritorio; al revés rara vez ocurre.',
        ],
      },
      {
        type: 'statement',
        text: 'Tu web no pierde clientes cuando falla a gritos. Los pierde en silencio, un visitante a la vez, y',
        strong: 'nadie te avisa.',
      },
      {
        type: 'prose',
        h2: 'Cómo se ve una web que sí convierte',
        paragraphs: [
          'La contraparte de estos errores es sencilla de describir. Una web que convierte aparece en Google para las búsquedas que hacen tus clientes, carga rápido en cualquier celular y deja claro en los primeros segundos qué haces y a quién ayudas. No hace falta adivinar nada.',
          'Tiene un siguiente paso obvio en cada pantalla —escribir por WhatsApp, cotizar, comprar, agendar— y un contenido que habla del problema real del cliente en lugar de repetir frases de catálogo. Cuando el volumen de consultas empieza a crecer, muchas empresas suman un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a> que responde al instante y filtra a los interesados de verdad.',
          'Si al leer esto reconociste tu propia web en varios de los siete errores, la solución no siempre es empezar de cero. A menudo un <a href="/servicios/redisenio-web-panama/">rediseño</a> ordenado corrige lo que falla y conserva —o recupera— el posicionamiento que ya tenías ganado en Google.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          {
            q: '¿Cómo sé si mi web está cometiendo estos errores?',
            a: 'Ábrela en tu celular con datos móviles y cronométrala. Busca tu servicio en Google a ver si apareces. Revisa si hay un botón de WhatsApp visible y un llamado a la acción claro en cada pantalla. Con esa prueba rápida detectas la mayoría.',
          },
          {
            q: '¿El error más grave es la velocidad o el SEO?',
            a: 'Suelen ir de la mano, pero no aparecer en Google es el más costoso: si el cliente no te encuentra, la velocidad ya ni importa. Dicho eso, una web lenta también hunde tu posicionamiento, así que conviene resolver ambos juntos.',
          },
          {
            q: '¿Puedo corregir estos errores sin rehacer toda la web?',
            a: 'En muchos casos sí. Optimizar velocidad, añadir WhatsApp, reescribir contenido y mejorar el SEO técnico se puede hacer sobre un sitio existente. Solo cuando la base está mal construida conviene un rediseño completo.',
          },
          {
            q: '¿El contenido genérico realmente afecta las ventas?',
            a: 'Sí, en dos frentes. No convence al visitante, que no siente que le hablan a él, y no le da a Google texto útil para posicionarte. El contenido específico sobre tu cliente y su problema vende y ayuda al SEO al mismo tiempo.',
          },
          {
            q: '¿Cada cuánto debería revisar mi web?',
            a: 'Al menos cada seis meses conviene revisar velocidad, posicionamiento y que todos los botones y formularios funcionen. Un plan de mantenimiento se encarga de eso de forma continua para que nunca se te pase.',
          },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-elegir-agencia-diseno-web-panama', label: 'Cómo elegir una agencia de diseño web' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web?' },
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño web en Panamá' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO local y Google Maps' },
        ],
      },
    ],
    cta: {
      h2: 'Descubre qué errores está cometiendo tu web',
      wa: 'Hola, quiero una revisión de mi página web para ver qué está fallando.',
    },
  },

  {
    slug: 'blog/diferencia-wordpress-shopify-diseno-web',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'WordPress vs Shopify: cuál elegir para tu web en Panamá',
    description:
      'WordPress vs Shopify para tu web en Panamá: cuándo conviene cada uno, costos reales, control, casos de uso y el factor local (Yappy y WhatsApp) para decidir bien.',
    h1: 'WordPress vs Shopify: cuál elegir para tu web en Panamá',
    breadcrumb: 'WordPress vs Shopify',
    category: 'Diseño web',
    date: '2026-06-24',
    heroImage: {
      src: '/images/blog/diferencia-wordpress-shopify-diseno-web.jpg',
      alt: 'Comparación entre las plataformas WordPress y Shopify para diseño web',
    },
    lead: [
      'WordPress o Shopify es una de las decisiones que más veces nos toca aclarar, y casi siempre viene mal planteada. La pregunta no es cuál es mejor en abstracto, porque no hay un ganador universal: hay una herramienta correcta para tu caso y varias que te complicarían la vida.',
      'En esta guía comparamos ambas plataformas como lo que son —dos rutas distintas con fortalezas distintas— y te damos criterios claros para decidir según lo que vende tu negocio, tu presupuesto y cuánto control necesitas. Al final debería quedarte obvio cuál es la tuya.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La pregunta correcta no es cuál es mejor',
        paragraphs: [
          'WordPress y Shopify resuelven problemas diferentes, y compararlos de frente es como preguntar si es mejor un camión o una moto. Depende de qué cargues y hacia dónde vayas. Uno nació para publicar y organizar contenido de todo tipo; el otro nació con un solo propósito muy claro: vender productos en línea.',
          'Por eso, en lugar de buscar un veredicto, conviene responder tres preguntas sobre tu negocio: ¿tu web es principalmente una tienda o un sitio de contenido y servicios? ¿Cuánto control técnico quieres tener? ¿Cuánto quieres administrar tú mismo? Con esas respuestas la elección se vuelve casi automática.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué es WordPress y para quién es',
        paragraphs: [
          'WordPress es la plataforma que mueve una enorme parte de la web mundial. Es un sistema abierto y flexible: te da control total sobre tu sitio, los archivos, la base de datos y hasta el último detalle del diseño. Puedes construir desde un blog hasta un sitio corporativo con decenas de páginas o incluso una tienda con el complemento adecuado.',
          'Es la ruta correcta cuando el <strong>contenido manda</strong>: empresas de servicios, despachos profesionales, negocios que publican artículos o novedades con frecuencia, sitios corporativos que necesitan una página por cada servicio bien optimizada para SEO. Ahí la flexibilidad de WordPress y su fortaleza para posicionar en Google marcan la diferencia.',
          'La contraparte de esa libertad es la responsabilidad: WordPress necesita un buen hosting, actualizaciones y mantenimiento para mantenerse rápido y seguro. Bien administrado es imbatible; abandonado, se vuelve lento y vulnerable. Nosotros lo trabajamos con temas propios y ligeros, sin constructores pesados que lo ralenticen. Puedes ver el enfoque completo en <a href="/tecnologias/diseno-web-wordpress-panama/">diseño web con WordPress</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué es Shopify y para quién es',
        paragraphs: [
          'Shopify es una plataforma pensada de principio a fin para vender en línea. Se encarga de toda la infraestructura —servidores, seguridad, actualizaciones, capacidad para picos de tráfico— para que tú solo te ocupes de tus productos y tus ventas. Catálogo, carrito, inventario y checkout vienen resueltos desde el primer día.',
          'Es la ruta correcta cuando <strong>vender es el corazón del negocio</strong> y quieres arrancar rápido sin administrar aspectos técnicos. Marcas de producto, tiendas que manejan muchos artículos, negocios que quieren escalar sin preocuparse por el servidor. La plataforma te quita de encima justo lo que a un comerciante no le interesa manejar.',
          'A cambio de esa comodidad cedes algo de flexibilidad y pagas una mensualidad a la plataforma, además de comisiones según el medio de pago. Para muchos negocios ese trueque vale totalmente la pena. Trabajamos ese formato en <a href="/tecnologias/diseno-web-shopify-panama/">diseño web con Shopify</a>, enfocados en que la tienda no solo funcione sino que convierta.',
        ],
      },
      {
        type: 'prose',
        h2: 'Costos reales de cada plataforma en Panamá',
        paragraphs: [
          'En costos, la diferencia no está tanto en el diseño inicial como en el modelo de gasto continuo. Con WordPress no pagas licencia de plataforma: tu gasto recurrente es el hosting y el mantenimiento. En nuestro caso, la infraestructura anual parte desde $350 y el <a href="/crecimiento/mantenimiento-hosting-web-panama/">mantenimiento desde $59 al mes</a>. El sitio es tuyo por completo, sin mensualidad a un tercero.',
          'Con Shopify pagas una suscripción mensual a la plataforma, que incluye el hosting y la seguridad, más comisiones de pago. No administras servidores porque eso ya está cubierto en la cuota. Es un gasto más predecible y despreocupado, a cambio de una dependencia mayor del ecosistema de Shopify.',
          'El diseño y desarrollo inicial se cotiza aparte en ambos casos y de forma cerrada por escrito. Como referencia general, una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a> parte desde $1,500 sin importar la plataforma; lo que cambia después es la estructura de gasto mensual. Si quieres el panorama completo de precios, lo desglosamos en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Cómo decidir en una lista',
        intro: 'Marca mentalmente con cuál grupo de frases te identificas más. El que sume más casillas suele ser tu plataforma.',
        items: [
          'Elige WordPress si tu web vive del contenido, el SEO y varias páginas de servicio',
          'Elige WordPress si quieres control total y que el sitio sea 100% tuyo, sin mensualidad de plataforma',
          'Elige WordPress si publicas artículos o novedades con frecuencia',
          'Elige Shopify si vender productos en línea es el corazón del negocio',
          'Elige Shopify si quieres arrancar rápido sin administrar servidores ni seguridad',
          'Elige Shopify si prefieres un gasto mensual predecible a cambio de comodidad',
          'Considera desarrollo a medida si el rendimiento o las integraciones exigen algo que ninguna plantilla resuelve',
        ],
      },
      {
        type: 'statement',
        text: 'No elijas la plataforma de moda. Elige la que resuelve lo que tu negocio hace',
        strong: 'todos los días.',
      },
      {
        type: 'prose',
        h2: 'El factor Panamá: Yappy, WhatsApp y pagos locales',
        paragraphs: [
          'Ninguna comparación sirve en Panamá si ignora cómo compra la gente aquí. El cliente panameño quiere pagar con Yappy, tarjeta o los medios que ya usa, y muchas veces cierra la compra por WhatsApp aunque la haya empezado en la web. La plataforma debe adaptarse a esa realidad, no al revés.',
          'La buena noticia es que ambas plataformas se integran bien con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy y las pasarelas de pago locales</a> y con WhatsApp. La diferencia está en el detalle de la implementación, y ahí es donde entra el trabajo de una agencia que conoce el mercado. Una tienda técnicamente perfecta que no acepta el medio de pago favorito de tu cliente igual pierde la venta.',
          'Por eso nuestra recomendación nunca sale solo de la ficha técnica. Sale de mirar tu negocio, tu cliente panameño y tu forma de vender, y a partir de ahí decidir. Si dudas entre ambas, cuéntanos tu caso y te decimos con argumentos cuál te conviene, sin empujarte a la que sea más cómoda de vender.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          {
            q: '¿Puedo vender en línea con WordPress también?',
            a: 'Sí, con el complemento adecuado WordPress se convierte en tienda. Funciona muy bien cuando la web combina contenido, servicios y una tienda de tamaño moderado. Para negocios donde vender es lo único importante, Shopify suele ser más directo. Lo comparamos a fondo en la guía de Shopify frente a WooCommerce.',
          },
          {
            q: '¿Shopify sirve si no vendo productos físicos?',
            a: 'Shopify está optimizado para venta de productos. Si tu negocio es de servicios, contenido o citas, WordPress o un desarrollo a medida casi siempre encajan mejor y te dan más control sobre el SEO.',
          },
          {
            q: '¿Cuál posiciona mejor en Google?',
            a: 'Ambas pueden posicionar bien si se trabajan con SEO técnico. WordPress da un poco más de control fino sobre el contenido y la estructura, lo que ayuda en sitios donde el posicionamiento por muchas páginas es clave. En una tienda, la diferencia de SEO entre plataformas es menor que la del trabajo que le dediques.',
          },
          {
            q: '¿Puedo migrar de una a otra más adelante?',
            a: 'Se puede, pero implica trabajo: migrar contenido, productos y cuidar el posicionamiento ganado. Por eso conviene elegir bien de entrada. Si tu negocio va a cambiar de rumbo, mejor conversarlo antes de construir.',
          },
          {
            q: '¿Ustedes con cuál trabajan?',
            a: 'Con ambas, y también con desarrollo a medida cuando el caso lo pide. No tenemos una favorita: recomendamos la herramienta según tu negocio, con argumentos, no por comodidad nuestra.',
          },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online en Panamá' },
          { slug: 'blog/shopify-vs-woocommerce-panama', label: 'Shopify vs WooCommerce en Panamá' },
          { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web con WordPress' },
          { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Diseño web con Shopify' },
        ],
      },
    ],
    cta: {
      h2: 'Te decimos cuál plataforma te conviene',
      wa: 'Hola, tengo dudas entre WordPress y Shopify para mi web. ¿Me orientan?',
    },
  },

  {
    slug: 'blog/como-elegir-agencia-diseno-web-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cómo elegir una agencia de diseño web en Panamá sin arrepentirte',
    description:
      'Señales de una buena agencia de diseño web en Panamá, las preguntas que debes hacer antes de firmar y las banderas rojas que anuncian un proyecto que saldrá mal.',
    h1: 'Cómo elegir una agencia de diseño web en Panamá sin arrepentirte',
    breadcrumb: 'Elegir agencia web',
    category: 'Diseño web',
    date: '2026-06-10',
    heroImage: {
      src: '/images/blog/como-elegir-agencia-diseno-web-panama.jpg',
      alt: 'Reunión para elegir una agencia de diseño web en Panamá',
    },
    lead: [
      'Contratar a quien hará tu página web se parece más a elegir socio que a comprar un producto. Vas a depender de esa persona o empresa para uno de tus canales de venta más importantes, y un mal casting se paga con meses perdidos, dinero tirado y un sitio que hay que rehacer.',
      'En esta guía te damos criterios concretos para distinguir una agencia seria de una promesa barata, las preguntas exactas que debes hacer antes de firmar y las banderas rojas que casi siempre anuncian un proyecto que terminará mal. La meta es que elijas con la cabeza, no con la corazonada.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué esta decisión pesa más de lo que parece',
        paragraphs: [
          'Una web mal hecha no solo se ve mal: no aparece en Google, no genera consultas y hay que reemplazarla. Cuando eso pasa, no pierdes únicamente lo que pagaste, sino todos los clientes que no llegaron mientras la web estuvo en línea sin funcionar. Ese costo invisible suele ser el más caro de toda la historia.',
          'Por eso la decisión de a quién contratar pesa tanto. La diferencia entre una buena elección y una mala no es un sitio más bonito o menos bonito: es tener un canal de clientes que trabaja para ti durante años frente a un gasto que hay que repetir. Vale la pena dedicarle tiempo a elegir bien.',
        ],
      },
      {
        type: 'prose',
        h2: 'Agencia, freelancer o conocido: qué obtienes con cada uno',
        paragraphs: [
          'No toda web necesita una agencia, y ser honestos en esto es parte del punto. Un <strong>freelancer</strong> serio puede ser excelente para un proyecto acotado y con presupuesto ajustado, siempre que tenga experiencia real y esté disponible después de entregar. El riesgo es la continuidad: si desaparece o se satura de trabajo, tu web se queda sin quien la sostenga.',
          'El <strong>conocido que sabe de computadoras</strong> es la ruta que más caro sale disfrazada de barata. Suele terminar en una plantilla a medias, sin SEO, sin soporte y con una relación personal de por medio que hace incómodo reclamar. Es tentador por el precio, pero rara vez entrega algo que venda.',
          'Una <strong>agencia</strong> aporta equipo, proceso y continuidad: estrategia, diseño, SEO técnico e integraciones bajo un mismo techo, y alguien que responde cuando algo falla dentro de un año. Cuesta más que un freelancer barato porque incluye todo eso. La pregunta no es cuál es más barato, sino cuál encaja con lo que tu negocio necesita de verdad.',
        ],
      },
      {
        type: 'prose',
        h2: 'Señales de una agencia en la que puedes confiar',
        paragraphs: [
          'La primera señal es que <strong>pregunta antes de cotizar</strong>. Una agencia seria quiere entender tu negocio, tu cliente y tu objetivo antes de darte un número. Quien te suelta un precio en el primer mensaje sin saber qué necesitas está vendiendo una plantilla, no una solución.',
          'La segunda es la <strong>transparencia</strong>: precio cerrado por escrito antes de empezar, alcance claro y sin cargos que aparecen a mitad del camino. La tercera es que tenga <strong>trabajo real que mostrar</strong> —un <a href="/portafolio/">portafolio</a> de sitios en línea, no solo maquetas bonitas— y que puedas verificar que esos proyectos existen y funcionan.',
          'La cuarta señal, y una que pesa mucho, es la <strong>continuidad después del lanzamiento</strong>. Preguntar quién mantiene la web, cómo se administra y qué pasa si algo se rompe en seis meses separa a quien entrega y desaparece de quien construye una relación. Puedes conocer nuestro enfoque en <a href="/nosotros/">quiénes somos</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Preguntas que debes hacer antes de firmar',
        intro: 'Llévalas a la reunión. Las respuestas —y la comodidad con que las den— te dicen casi todo lo que necesitas saber.',
        items: [
          '¿El precio es cerrado y por escrito antes de empezar, o puede cambiar en el camino?',
          '¿El diseño será a medida sobre mi marca o parten de una plantilla?',
          '¿La web incluye SEO técnico para aparecer en Google desde el inicio?',
          '¿Podré administrar mi web yo mismo? ¿Me capacitan para eso?',
          '¿Quién mantiene el sitio y qué cuesta el mantenimiento después del lanzamiento?',
          '¿Qué pasa si algo se rompe dentro de seis meses o un año?',
          '¿Puedo ver proyectos suyos que estén en línea y funcionando hoy?',
          '¿La web queda a mi nombre? ¿Tendré acceso al dominio, hosting y archivos?',
        ],
      },
      {
        type: 'prose',
        h2: 'Banderas rojas: cuándo salir corriendo',
        paragraphs: [
          'Hay señales que valen más que cualquier promesa. La primera es el <strong>precio demasiado bajo</strong>: una web completa por cien dólares no es una ganga, es una plantilla sin SEO ni soporte que tendrás que rehacer. Lo barato aquí casi siempre esconde lo que no está incluido.',
          'La segunda es la <strong>falta de contrato o de claridad en el alcance</strong>. Si no hay nada por escrito, cualquier discusión sobre qué incluía el proyecto la pierdes tú. La tercera es que <strong>no te den acceso</strong> a tu propio dominio, hosting o archivos: si la web no queda a tu nombre, estás rentando algo que creías haber comprado.',
          'Otras banderas: prometer aparecer de primero en Google en una semana (nadie puede garantizar eso de forma honesta), no tener portafolio verificable, y desaparecer entre mensajes durante la etapa de venta. Si cuesta que te respondan antes de firmar, imagina después. Estos patrones también se repiten en los <a href="/blog/errores-comunes-diseno-web-empresas/">errores más comunes de diseño web</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'La agencia correcta no es la más barata ni la más elegante. Es la que sigue respondiendo',
        strong: 'seis meses después.',
      },
      {
        type: 'prose',
        h2: 'El precio no es el criterio (pero tampoco lo ignores)',
        paragraphs: [
          'El error más común al elegir es decidir solo por precio, y el segundo es ignorarlo por completo. La verdad está en el medio: el precio importa, pero como parte de la ecuación de valor, no como único filtro. La pregunta útil no es cuánto cuesta, sino qué recibo a cambio y qué me costaría hacerlo mal.',
          'Compara propuestas por lo que incluyen, no por el número final. Una que cueste más pero traiga estrategia, SEO, integraciones y soporte puede ser mucho más barata en el largo plazo que una barata que hay que rehacer en seis meses. Para tener referencias claras, revisa nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
          'Cuando tengas dos o tres propuestas sobre la mesa, ponlas lado a lado con las preguntas de esta guía. La que responda con claridad, muestre trabajo real y no huya del tema del soporte es, casi siempre, la elección con la que no te arrepentirás. Si quieres, <a href="/contacto/">cuéntanos tu caso</a> y te damos una propuesta con precio cerrado para comparar.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          {
            q: '¿Es mejor una agencia o un freelancer?',
            a: 'Depende del proyecto. Un freelancer serio puede ser ideal para algo acotado y con presupuesto ajustado; una agencia aporta equipo, proceso y continuidad para proyectos donde el sitio es central para tus ventas. El criterio no es el título, sino la experiencia real y la disponibilidad después de entregar.',
          },
          {
            q: '¿Cómo verifico que una agencia es confiable?',
            a: 'Pide ver proyectos en línea y funcionando, no solo maquetas. Confirma que dan precio cerrado por escrito, que la web queda a tu nombre y que ofrecen soporte después del lanzamiento. Que pregunten por tu negocio antes de cotizar es una excelente señal.',
          },
          {
            q: '¿Debo desconfiar de un precio muy bajo?',
            a: 'Sí. Una web completa por un precio irrisorio casi siempre significa una plantilla sin SEO, sin soporte y sin estrategia, que terminarás rehaciendo. Lo barato de entrada suele salir caro cuando toca pagarlo dos veces.',
          },
          {
            q: '¿La web queda a mi nombre?',
            a: 'Debe quedar. Tú tienes que ser dueño de tu dominio, tu hosting y los archivos de tu sitio. Si una agencia no te da ese acceso, estás rentando tu propia web sin saberlo. Es una pregunta que conviene dejar clara por escrito.',
          },
          {
            q: '¿Pueden garantizar que apareceré de primero en Google?',
            a: 'Nadie puede garantizar de forma honesta un primer lugar en una fecha. Lo que sí se garantiza es entregar la web con SEO técnico completo, que es la base para posicionar, y trabajar el crecimiento de forma continua. Quien promete el primer lugar en una semana es una bandera roja.',
          },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web?' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: '7 errores de diseño web' },
          { slug: 'servicios', label: 'Todos los servicios' },
          { slug: 'portafolio', label: 'Ver portafolio' },
        ],
      },
    ],
    cta: {
      h2: 'Conversa con una agencia que te responde',
      wa: 'Hola, estoy evaluando agencias para mi página web y quiero hacerles unas preguntas.',
    },
  },

  {
    slug: 'blog/cuanto-tiempo-toma-hacer-una-pagina-web',
    parent: { slug: 'blog', label: 'Blog' },
    title: '¿Cuánto tiempo toma hacer una página web? Plazos reales',
    description:
      'Plazos reales para hacer una página web en Panamá según el tipo de proyecto, las etapas que atraviesa, qué la retrasa (tu contenido) y cómo acelerarla sin perder calidad.',
    h1: '¿Cuánto tiempo toma hacer una página web? Plazos reales',
    breadcrumb: 'Plazos de una web',
    category: 'Diseño web',
    date: '2026-05-27',
    heroImage: {
      src: '/images/blog/cuanto-tiempo-toma-hacer-una-pagina-web.jpg',
      alt: 'Calendario y planificación del tiempo para desarrollar una página web',
    },
    lead: [
      'Cuando alguien quiere una web, casi siempre la quiere para ayer. Es comprensible: hay una campaña por lanzar, una temporada que aprovechar o simplemente las ganas de dejar de perder clientes por no tener presencia. Pero prometer una web en tres días suele ser señal de que se va a entregar una plantilla, no una solución.',
      'En esta guía te damos plazos reales por tipo de proyecto, te mostramos las etapas por las que pasa toda web y —lo más importante— te explicamos qué la retrasa de verdad y cómo puedes acelerarla sin sacrificar calidad. Spoiler: buena parte del reloj lo controlas tú.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La respuesta honesta: depende, pero hay rangos reales',
        paragraphs: [
          'El tiempo de una web depende de su alcance, sus funciones y —sobre todo— de qué tan rápido fluya el contenido y las aprobaciones entre tú y quien la construye. No es lo mismo una landing de una pantalla que un sitio corporativo de doce servicios o una tienda con catálogo, pagos e inventario.',
          'Aun así, hay rangos confiables que manejamos para el mercado panameño. Y hay un dato que casi nadie te dice de entrada: el reloj no arranca cuando firmas, sino cuando el proyecto tiene lo que necesita para avanzar. Entender eso cambia por completo la expectativa de fecha.',
        ],
      },
      {
        type: 'prose',
        h2: 'Plazos por tipo de proyecto',
        paragraphs: [
          'Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> sencilla puede estar lista en alrededor de una semana. Al ser una sola página con una oferta y una acción, hay menos contenido que estructurar y menos que aprobar, así que es el formato más rápido de sacar al aire.',
          'Un <a href="/servicios/diseno-web-corporativo-panama/">sitio corporativo</a> de varias páginas suele tomar entre dos y tres semanas. El tiempo extra no es por el diseño en sí, sino por la cantidad de contenido a organizar: una página por servicio, textos optimizados para SEO y una arquitectura pensada para que Google entienda todo tu negocio.',
          'Una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a> se mueve entre tres y cinco semanas. Además del diseño, hay que cargar el catálogo, configurar pagos con Yappy y pasarelas, definir envíos y probar todo el flujo de compra de punta a punta antes de abrir. Un desarrollo a medida más complejo puede extenderse más, según sus integraciones.',
        ],
      },
      {
        type: 'steps',
        h2: 'Las etapas por las que pasa tu web (y cuánto dura cada una)',
        intro: 'Toda web recorre estas cuatro etapas. Saber en qué punto estás evita la ansiedad de sentir que no avanza cuando en realidad va según lo previsto.',
        items: [
          {
            h3: '1. Diagnóstico y estrategia',
            text: 'Entendemos tu negocio, tu cliente y tu objetivo, y definimos la arquitectura del sitio. Suele tomar pocos días y es donde sale la propuesta de precio cerrado. Saltarse esta etapa es lo que produce webs bonitas que no venden.',
          },
          {
            h3: '2. Diseño y contenido',
            text: 'Diseñamos a medida sobre tu marca y estructuramos el contenido servicio por servicio. Es la etapa que más depende de ti: si el contenido base llega a tiempo, vuela; si no, se estanca aquí.',
          },
          {
            h3: '3. Desarrollo e integraciones',
            text: 'Construimos el sitio, conectamos WhatsApp, formularios, Yappy, chatbot o reservas según tu caso, y optimizamos velocidad y SEO técnico. El plazo escala con la cantidad de funciones que se conectan.',
          },
          {
            h3: '4. Pruebas y lanzamiento',
            text: 'Revisamos todo en celular y escritorio, probamos formularios y pagos, corregimos detalles, publicamos y te capacitamos para administrar tu web. Una etapa corta pero que no se salta: aquí se caza lo que se rompería frente al cliente.',
          },
        ],
      },
      {
        type: 'prose',
        h2: 'Lo que realmente retrasa un proyecto: el contenido',
        paragraphs: [
          'Si le preguntas a cualquier agencia honesta qué atrasa las webs, la respuesta casi nunca es el diseño o el código. Es <strong>el contenido del cliente</strong>: los textos, las fotos, el logo en buena calidad, la lista de servicios con sus precios, las respuestas a preguntas clave sobre el negocio. Sin esos insumos, el proyecto se queda esperando en la etapa dos.',
          'Es la parte más frecuente de las demoras y, curiosamente, la que menos se anticipa. Se firma el proyecto con entusiasmo, arranca la estrategia, y cuando toca aportar el contenido aparece la vida real: la agenda ocupada, las fotos que hay que tomar, los textos que nadie termina de escribir. Cada día de espera ahí es un día que se suma a la fecha de entrega.',
          'La segunda causa de demora son las <strong>aprobaciones lentas</strong>. Cada ronda de revisión que tarda en volver alarga el proyecto. Una web no se retrasa por semanas de trabajo extra, sino por días sueltos de espera que se acumulan. Y esos días, a diferencia del alcance, están casi siempre en tu cancha.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo acelerar sin sacrificar calidad',
        paragraphs: [
          'La forma más efectiva de acelerar tu web es tener el contenido listo antes de arrancar, o al menos comprometerte a entregarlo en bloque en los primeros días. Textos aproximados de cada servicio, fotos de buena calidad, logo, datos de contacto y una lista clara de lo que ofreces. Con eso en mano, la etapa dos deja de ser un cuello de botella.',
          'La segunda palanca es <strong>agilizar las aprobaciones</strong>: designar a una sola persona que decida y revise, en lugar de pasar cada versión por un comité que tarda semanas en ponerse de acuerdo. Un solo interlocutor con capacidad de decisión vale más que cinco opiniones que nunca coinciden.',
          'Y si de verdad no tienes tiempo para producir el contenido, díselo a tu agencia desde el inicio en vez de dejar el proyecto en pausa. Nosotros ayudamos a producir textos y a estructurar el contenido cuando el cliente no puede, justo para que el reloj no se detenga. Puedes ver cómo trabajamos en <a href="/diseno-web-panama/">diseño web en Panamá</a> o consultar cuánto cuesta cada formato en la <a href="/blog/cuanto-cuesta-diseno-web-panama/">guía de precios</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Una web no se atrasa por el trabajo que falta hacer. Se atrasa por el contenido que falta',
        strong: 'entregar.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          {
            q: '¿Se puede tener una web lista en pocos días?',
            a: 'Una landing sencilla puede estar en alrededor de una semana si el contenido está listo. Prometer un sitio completo y funcional en dos o tres días suele significar una plantilla genérica sin SEO ni estrategia, que después toca rehacer.',
          },
          {
            q: '¿Desde cuándo cuentan el plazo?',
            a: 'El reloj arranca cuando recibimos el contenido base para trabajar, no cuando se firma. Por eso tener textos, fotos y datos listos de entrada es la mejor forma de que la fecha de entrega se cumpla.',
          },
          {
            q: '¿Qué pasa si no tengo el contenido listo?',
            a: 'Te ayudamos a producirlo: redactamos los textos de venta y estructuramos el contenido contigo. Súmale unos días al plazo por esa producción, pero evitas que el proyecto se quede en pausa esperando insumos.',
          },
          {
            q: '¿Por qué una tienda online toma más tiempo?',
            a: 'Porque además del diseño hay que cargar el catálogo, configurar pagos con Yappy y pasarelas, definir envíos y probar todo el flujo de compra de punta a punta. Cada una de esas piezas suma trabajo y pruebas antes de poder abrir con seguridad.',
          },
          {
            q: '¿Puedo lanzar por etapas para salir antes?',
            a: 'Sí, y a menudo es la mejor estrategia. Se lanza primero una versión sólida con lo esencial y se van sumando secciones o funciones después. Así empiezas a captar clientes antes sin esperar a que todo esté perfecto.',
          },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web?' },
          { slug: 'blog/como-elegir-agencia-diseno-web-panama', label: 'Cómo elegir una agencia de diseño web' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
        ],
      },
    ],
    cta: {
      h2: 'Pon fecha real a tu próxima página web',
      wa: 'Hola, quiero saber en cuánto tiempo tendrían lista mi página web.',
    },
  },
];
