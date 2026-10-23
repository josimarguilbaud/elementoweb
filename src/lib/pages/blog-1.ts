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
      alt: 'Etiqueta de precio junto a tres bloques escalonados, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Una página web en Panamá cuesta desde $550 si es una landing page y desde $1,250 si es una Web empresarial de varias secciones; una tienda online parte desde $1,950 y un sitio corporativo a medida desde $2,900. En Elemento Web el precio depende de páginas, funciones y trabajo estratégico, y se entrega cerrado y por escrito antes de empezar.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿De qué depende el precio de una página web?',
        paragraphs: [
          'El precio de una web se mueve por tres variables. La primera es el <strong>alcance</strong>: cuántas páginas tiene, cuánto contenido hay que estructurar y qué tan compleja es la navegación. Una landing de una sola pantalla no cuesta lo mismo que un sitio corporativo con doce servicios, cada uno con su propia página optimizada.',
          'La segunda es la <strong>funcionalidad</strong>. Un sitio informativo que lleva al cliente a WhatsApp es distinto de una tienda con catálogo, carrito, inventario y pagos en línea, o de un sistema de reservas con calendario y confirmaciones automáticas. Cada función que se conecta suma horas de desarrollo y de pruebas.',
          'La tercera es el <strong>trabajo estratégico</strong>: investigación de tus clientes, textos de venta, SEO técnico y arquitectura de contenidos. No se ve en la pantalla, pero decide el resultado. Una plantilla comprada por veinte dólares no incluye nada de eso.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta una página web en Panamá según el tipo de proyecto?',
        paragraphs: [
          'Estos son los precios de partida de Elemento Web en <a href="/diseno-web-panama/">diseño web en Panamá</a>. Cada proyecto se cotiza cerrado y por escrito antes de empezar, según sus páginas e integraciones.',
          'Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de alta conversión</a> parte desde $550: una sola página con una oferta y una acción, pensada como destino de tu pauta en Google o Meta. Una <strong>Web empresarial</strong> —el sitio de varias secciones que presenta a un negocio completo— parte desde $1,250 y es el formato que más contratan comercios y profesionales.',
          'Una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online o e-commerce</a> parte desde $1,950, porque incluye catálogo, carrito, pasarelas de pago y la logística de venta. Un <strong>sitio corporativo a medida</strong>, con arquitectura amplia y contenido por servicio, se cotiza a medida desde $2,900. A eso se suma la infraestructura anual desde $350 y el mantenimiento desde $99 al mes, que mantienen el sitio en línea, respaldado y actualizado.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué encarece una página web (y qué devuelve a cambio)',
        paragraphs: [
          'El <strong>contenido a medida</strong>: cuando se escriben los textos de venta, se producen las fotos o se construyen las descripciones de producto contigo, el proyecto crece, pero tu web deja de sonar igual que las demás de tu rubro.',
          'Las <strong>integraciones</strong>: conectar <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy y pasarelas de pago</a>, un chatbot con IA, un sistema de citas o un CRM añade horas de desarrollo. Cada pieza te ahorra trabajo manual o te permite cobrar y agendar sin intermediarios.',
          'El <strong>SEO técnico y la optimización de velocidad</strong>: no se ven en la pantalla, pero deciden si Google te muestra y si el visitante se queda. Recortar ahí deja una web bonita por dentro e invisible por fuera.',
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
        h2: '¿Por qué una página web barata termina saliendo más cara?',
        paragraphs: [
          'Una web de $150 lista en tres días casi siempre es una plantilla genérica, sin SEO, lenta, difícil de administrar y sin nadie que responda cuando algo falla. Al cabo de unos meses no aparece en Google, no genera mensajes y toca rehacerla: pagas dos veces, más los meses de clientes que no llegaron.',
          'Si el presupuesto aprieta, la salida no es una web barata, sino un formato más pequeño —una landing sólida— sobre el que crecer después sin perder el posicionamiento ganado.',
        ],
      },
      {
        type: 'statement',
        text: 'Una web barata no es la que cuesta poco. Es la que hay que pagar dos veces porque',
        strong: 'nunca funcionó.',
      },
      {
        type: 'prose',
        h2: '¿Cuánto invertir en una página web según tu negocio?',
        paragraphs: [
          'Depende de qué tan central es la web para tus ventas. Si tu negocio vive de que te encuentren en Google y te escriban —consultorios, servicios, comercios locales—, la web es tu vendedor principal. Si vendes en línea, la tienda es tu caja registradora y cada mejora en velocidad o pagos se traduce en pedidos. Si estás validando una idea, una landing enfocada te deja probar el mercado con poco riesgo.',
          'Para fijar el monto, parte de cuánto vale un cliente nuevo para ti, no del precio más bajo que encuentres: si un cliente te deja cientos o miles de dólares al año, una web que trae varios al mes recupera su costo pronto. Con ese número, compara <a href="/servicios/">los servicios</a> y pide una <a href="/contacto/">cotización cerrada</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          {
            q: '¿Cuál es el precio mínimo de una página web en Panamá?',
            a: 'Una landing page bien hecha parte desde $550 y una Web empresarial de varias secciones desde $1,250. Por debajo de eso casi siempre hablamos de plantillas genéricas sin SEO ni soporte, que terminan costando más al rehacerlas.',
          },
          {
            q: '¿El precio incluye el dominio y el hosting?',
            a: 'El diseño se cotiza aparte del hosting. La <a href="/crecimiento/hosting-infraestructura-panama/">infraestructura anual parte desde $350</a> y el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento desde $99 al mes</a>, que mantiene tu sitio en línea, respaldado y actualizado. Te asesoramos y configuramos dominio y hosting como parte del proceso.',
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
          { slug: 'blog/mejor-plataforma-para-crear-una-pagina-web', label: 'Wix, WordPress o a medida: cuál conviene' },
          { slug: 'blog/como-elegir-agencia-diseno-web-panama', label: 'Cómo elegir una agencia de diseño web' },
          { slug: 'blog/cuanto-tiempo-toma-hacer-una-pagina-web', label: '¿Cuánto tiempo toma hacer una web?' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
          { slug: 'servicios', label: 'Todos los servicios' },
        
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Diseño web para constructoras' },
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Diseño web para contadores' },
        
          { slug: 'industrias/diseno-web-seguridad-vigilancia-panama', label: 'Diseño web para empresas de seguridad' },
          { slug: 'recursos/precios-agencias-panama-2026', label: 'Precios de agencias en Panamá, 2026' },
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
      alt: 'Señal triangular de advertencia con una llave inglesa apoyada, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Los 7 errores de diseño web que más clientes les cuestan a las empresas en Panamá son no aparecer en Google, cargar lento, no tener botón de WhatsApp, meter todo en una sola página, fallar en el celular, no indicar el siguiente paso y usar contenido genérico. Casi todos se corrigen sin rehacer la web desde cero.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué los errores de diseño web pasan desapercibidos?',
        paragraphs: [
          'Porque fallan en silencio. Nadie te avisa que se fue porque tu web cargó lento o no encontró cómo escribirte: simplemente no llegan los mensajes, y es fácil culpar al mercado o a la temporada cuando la causa está en la pantalla. Estar en línea sin estrategia es tener una tienda con la puerta cerrada: existe, pero no vende.',
        ],
      },
      {
        type: 'steps',
        h2: 'Los 7 errores de diseño web que le cuestan clientes a tu empresa',
        intro: 'Revísalos pensando en tu propia web. Con dos o tres ya estás dejando ventas sobre la mesa.',
        items: [
          {
            h3: '1. No aparecer en Google (web sin SEO)',
            text: 'Si tu cliente busca tu servicio en Panamá y no te encuentra, no existes para él. Una web sin SEO técnico, sin contenido optimizado y sin trabajo de posicionamiento es invisible, y entonces el resto de la web deja de importar.',
          },
          {
            h3: '2. Cargar lento',
            text: 'En el celular, cada segundo de espera hace que parte de tus visitantes abandone antes de ver nada. Las causas típicas son imágenes pesadas, constructores recargados y hosting barato.',
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
            text: 'Una web sin un llamado a la acción claro deja al cliente sin siguiente paso: ¿cotizar, comprar, agendar? Si no hay un botón obvio en cada pantalla, el visitante interesado se va sin hacer nada.',
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
          'Los siete errores nacen de la misma raíz: la web se construyó sin definir qué debía lograr. Sin objetivo, el diseño se optimiza para verse bien en una presentación, no para vender, y así aparecen las páginas lentas, sin SEO y sin llamados a la acción.',
          'La pregunta que ordena todo es <strong>¿qué necesita conseguir tu negocio con este sitio?</strong>: cotizaciones por WhatsApp, ventas en línea, citas agendadas o confianza antes de una reunión. La respuesta define la estructura, el contenido y cada botón. Por eso un buen <a href="/blog/como-elegir-agencia-diseno-web-panama/">proceso de diseño</a> empieza por la estrategia, no por el color de fondo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Diseño web para celular: cómo evitar los errores de lentitud, móvil y WhatsApp',
        paragraphs: [
          'La mayoría de las visitas en Panamá llegan desde un teléfono, muchas veces con datos móviles. Por eso los errores 2, 3 y 5 se concentran ahí: una web pensada para pantalla grande y luego "adaptada" falla justo donde más tráfico tiene. Diseñar primero para móvil obliga a mensajes cortos, botones grandes que se tocan con el pulgar, imágenes livianas y el WhatsApp siempre a mano; lo que funciona en celular casi siempre funciona en escritorio.',
        ],
      },
      {
        type: 'statement',
        text: 'Tu web no pierde clientes cuando falla a gritos. Los pierde en silencio, un visitante a la vez, y',
        strong: 'nadie te avisa.',
      },
      {
        type: 'prose',
        h2: '¿Cómo es una página web que sí convierte?',
        paragraphs: [
          'Aparece en Google para las búsquedas de tus clientes, carga rápido en cualquier celular y deja claro en los primeros segundos qué haces y a quién ayudas. Tiene un siguiente paso obvio en cada pantalla —escribir por WhatsApp, cotizar, comprar, agendar— y un contenido que habla del problema real del cliente. Cuando crecen las consultas, un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA</a> responde al instante y filtra a los interesados.',
          'Si reconociste tu web en varios de los siete errores, no siempre hay que empezar de cero: un <a href="/servicios/redisenio-web-panama/">rediseño</a> ordenado corrige lo que falla y conserva —o recupera— el posicionamiento ganado en Google.',
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
        
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Diseño web para ferreterías' },
          { slug: 'industrias/diseno-web-talleres-automotriz-panama', label: 'Diseño web para talleres' },
        
          { slug: 'industrias/diseno-web-seguridad-vigilancia-panama', label: 'Diseño web para empresas de seguridad' },
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
    description: 'WordPress vs Shopify en Panamá: cuándo conviene cada uno, costos reales, control y el factor local de Yappy y WhatsApp.',
    h1: 'WordPress vs Shopify: cuál elegir para tu web en Panamá',
    breadcrumb: 'WordPress vs Shopify',
    category: 'Diseño web',
    date: '2026-06-24',
    heroImage: {
      src: '/images/blog/diferencia-wordpress-shopify-diseno-web.jpg',
      alt: 'Bloques de construcción apilados frente a una bolsa de compras, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'WordPress vs Shopify en Panamá: elige WordPress si tu web vive del contenido, el SEO y varias páginas de servicio, sin mensualidad de plataforma; elige Shopify si vender productos en línea es el corazón del negocio y no quieres administrar servidores. Ambas se integran con Yappy y WhatsApp, y una tienda online parte desde $1,950 en cualquiera de las dos.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'WordPress vs Shopify: tres preguntas para decidir',
        paragraphs: [
          'WordPress nació para publicar y organizar contenido de todo tipo; Shopify, para vender productos en línea. Antes de comparar funciones, responde tres preguntas sobre tu negocio: ¿tu web es principalmente una tienda o un sitio de contenido y servicios? ¿Cuánto control técnico quieres tener? ¿Cuánto quieres administrar tú mismo?',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo conviene WordPress?',
        paragraphs: [
          'WordPress es un sistema abierto: te da control sobre el sitio, los archivos, la base de datos y cada detalle del diseño. Sirve para un blog, un sitio corporativo con decenas de páginas o una tienda con el complemento adecuado.',
          'Conviene cuando el <strong>contenido manda</strong>: empresas de servicios, despachos profesionales, negocios que publican artículos con frecuencia y sitios corporativos que necesitan una página optimizada para SEO por cada servicio.',
          'Esa libertad exige buen hosting, actualizaciones y mantenimiento; abandonado, WordPress se vuelve lento y vulnerable. En Elemento Web lo trabajamos con temas propios y ligeros, sin constructores pesados. El enfoque completo está en <a href="/tecnologias/diseno-web-wordpress-panama/">diseño web con WordPress</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo conviene Shopify?',
        paragraphs: [
          'Shopify se encarga de la infraestructura —servidores, seguridad, actualizaciones, picos de tráfico— y trae resueltos catálogo, carrito, inventario y checkout desde el primer día.',
          'Conviene cuando <strong>vender es el corazón del negocio</strong> y quieres arrancar rápido sin administrar aspectos técnicos: marcas de producto, tiendas con muchos artículos y negocios que quieren escalar sin ocuparse del servidor.',
          'A cambio cedes flexibilidad y pagas una mensualidad a la plataforma, más comisiones según el medio de pago. Trabajamos ese formato en <a href="/tecnologias/diseno-web-shopify-panama/">diseño web con Shopify</a>, con foco en que la tienda convierta.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta WordPress vs Shopify en Panamá?',
        paragraphs: [
          'La diferencia está en el gasto continuo más que en el diseño inicial. Con WordPress no pagas licencia de plataforma: el gasto recurrente es hosting y mantenimiento. En Elemento Web, la <a href="/crecimiento/hosting-infraestructura-panama/">infraestructura anual parte desde $350</a> y el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento desde $99 al mes</a>, y el sitio es tuyo por completo.',
          'Con Shopify pagas una suscripción mensual que incluye hosting y seguridad, más comisiones de pago. Es un gasto predecible, a cambio de depender más del ecosistema de Shopify.',
          'El diseño y desarrollo inicial se cotiza aparte, cerrado y por escrito, en ambos casos: una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a> parte desde $1,950 sin importar la plataforma. El panorama completo está en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'WordPress o Shopify: cómo decidir en una lista',
        intro: 'El grupo de frases con el que más te identifiques suele ser tu plataforma.',
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
        h2: '¿WordPress y Shopify aceptan Yappy y WhatsApp en Panamá?',
        paragraphs: [
          'Sí. El cliente panameño quiere pagar con Yappy, tarjeta o los medios que ya usa, y muchas veces cierra la compra por WhatsApp aunque la empiece en la web. Ambas plataformas se integran con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy y las pasarelas de pago locales</a> y con WhatsApp; la diferencia está en el detalle de la implementación. Una tienda que no acepta el medio de pago favorito de tu cliente pierde la venta aunque funcione bien en todo lo demás.',
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
          { slug: 'blog/mejor-plataforma-para-crear-una-pagina-web', label: 'Wix, WordPress o a medida: cuál conviene' },
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online en Panamá' },
          { slug: 'blog/shopify-vs-woocommerce-panama', label: 'Shopify vs WooCommerce en Panamá' },
          { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web con WordPress' },
          { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Diseño web con Shopify' },
        
          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Diseño web para retail y moda' },
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Diseño web para importadoras' },
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
    title: 'Cómo elegir una agencia de diseño web en Panamá',
    description: 'Señales de una buena agencia de diseño web en Panamá, qué preguntar antes de firmar y las banderas rojas que anuncian problemas.',
    h1: 'Cómo elegir una agencia de diseño web en Panamá sin arrepentirte',
    breadcrumb: 'Elegir agencia web',
    category: 'Diseño web',
    date: '2026-06-10',
    heroImage: {
      src: '/images/blog/como-elegir-agencia-diseno-web-panama.jpg',
      alt: 'Lupa sobre tres tarjetas, la del centro más alta, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Para elegir una agencia de diseño web en Panamá, revisa cuatro señales: que pregunte por tu negocio antes de cotizar, que entregue precio cerrado por escrito, que muestre sitios en línea verificables y que dé soporte después del lanzamiento. Exige también que el dominio, el hosting y los archivos queden a tu nombre.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Agencia, freelancer o conocido: ¿qué conviene para tu página web?',
        paragraphs: [
          'Un <strong>freelancer</strong> serio puede servir para un proyecto acotado y con presupuesto ajustado, si tiene experiencia real y sigue disponible después de entregar. El riesgo es la continuidad: si desaparece o se satura de trabajo, tu web se queda sin quien la sostenga.',
          'El <strong>conocido que sabe de computadoras</strong> suele terminar en una plantilla a medias, sin SEO, sin soporte y con una relación personal que hace incómodo reclamar.',
          'Una <strong>agencia</strong> aporta equipo, proceso y continuidad: estrategia, diseño, SEO técnico e integraciones bajo un mismo techo, y alguien que responde cuando algo falla dentro de un año. Cuesta más que un freelancer barato porque incluye todo eso. Una web mal elegida no solo se ve mal: no aparece en Google, no genera consultas y hay que pagarla dos veces.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo saber si una agencia de diseño web es confiable?',
        paragraphs: [
          '<strong>Pregunta antes de cotizar.</strong> Una agencia seria quiere entender tu negocio, tu cliente y tu objetivo antes de darte un número. Un precio en el primer mensaje, sin saber qué necesitas, suele ser una plantilla.',
          '<strong>Es transparente</strong>: precio cerrado por escrito antes de empezar, alcance claro y sin cargos a mitad del camino. Y <strong>tiene trabajo real que mostrar</strong>: un <a href="/portafolio/">portafolio</a> de sitios en línea que puedas abrir y comprobar, no solo maquetas.',
          '<strong>Sigue ahí después del lanzamiento.</strong> Quién mantiene la web, cómo se administra y qué pasa si algo se rompe en seis meses separa a quien entrega y desaparece de quien sostiene el proyecto. Nuestro enfoque como <a href="/diseno-web-panama/">agencia de diseño web</a> está en <a href="/nosotros/">quiénes somos</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Preguntas para una agencia de diseño web antes de firmar',
        intro: 'Llévalas a la reunión. Las respuestas, y la claridad con que las den, te dicen casi todo.',
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
        h2: 'Banderas rojas al contratar una agencia de diseño web',
        paragraphs: [
          '<strong>Precio demasiado bajo</strong>: una web completa por cien dólares suele ser una plantilla sin SEO ni soporte que tendrás que rehacer.',
          '<strong>Sin contrato ni alcance claro</strong>: si no hay nada por escrito, cualquier discusión sobre qué incluía el proyecto la pierdes tú. <strong>Sin acceso a lo tuyo</strong>: si el dominio, el hosting o los archivos no quedan a tu nombre, estás rentando algo que creías haber comprado.',
          'También: prometer el primer lugar en Google en una semana (nadie puede garantizarlo de forma honesta), no tener portafolio verificable y tardar días en responder durante la venta. Varios de estos patrones reaparecen en los <a href="/blog/errores-comunes-diseno-web-empresas/">errores más comunes de diseño web</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'La agencia correcta no es la más barata ni la más elegante. Es la que sigue respondiendo',
        strong: 'seis meses después.',
      },
      {
        type: 'prose',
        h2: '¿Cómo comparar propuestas de agencias de diseño web?',
        paragraphs: [
          'Compara por lo que incluyen, no por el número final. Una propuesta más cara con estrategia, SEO, integraciones y soporte puede salir más barata que una económica que hay que rehacer en seis meses. Para tener referencias de precio, revisa <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
          'Pon dos o tres propuestas lado a lado con las preguntas de esta guía: la que responda con claridad, muestre trabajo real y detalle el soporte suele ser la correcta. Si quieres una más para comparar, <a href="/contacto/">cuéntanos tu caso</a> y te enviamos una con precio cerrado.',
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
          { slug: 'blog/mejor-plataforma-para-crear-una-pagina-web', label: 'Wix, WordPress o a medida: cuál conviene' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web?' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: '7 errores de diseño web' },
          { slug: 'servicios', label: 'Todos los servicios' },
          { slug: 'portafolio', label: 'Ver portafolio' },
        
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Diseño web para constructoras' },
          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Diseño web para consultoras' },
        
          { slug: 'industrias/diseno-web-navieras-servicios-maritimos-panama', label: 'Diseño web para navieras' },
          { slug: '', label: 'Agencia de marketing digital en Panamá' },
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
    description: 'Plazos reales de una página web en Panamá por tipo de proyecto, sus etapas y qué la retrasa de verdad: tu contenido.',
    h1: '¿Cuánto tiempo toma hacer una página web? Plazos reales',
    breadcrumb: 'Plazos de una web',
    category: 'Diseño web',
    date: '2026-05-27',
    heroImage: {
      src: '/images/blog/cuanto-tiempo-toma-hacer-una-pagina-web.jpg',
      alt: 'Reloj de arena, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Hacer una página web en Panamá toma alrededor de una semana si es una landing page sencilla, de dos a tres semanas si es un sitio corporativo de varias páginas y de tres a cinco semanas si es una tienda online. En Elemento Web el plazo corre desde que llega el contenido base, que es lo que más retrasa cualquier proyecto.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿De qué depende cuánto tarda una página web?',
        paragraphs: [
          'De su alcance, sus funciones y, sobre todo, de qué tan rápido fluyen el contenido y las aprobaciones entre tú y quien la construye. El reloj no arranca cuando firmas, sino cuando el proyecto tiene lo que necesita para avanzar. Prometer un sitio completo en tres días suele significar una plantilla, no una solución.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto tiempo toma hacer una página web según el tipo de proyecto?',
        paragraphs: [
          'Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> sencilla puede estar lista en alrededor de una semana: es una sola página con una oferta y una acción, con poco contenido que estructurar y aprobar.',
          'Un <a href="/servicios/diseno-web-corporativo-panama/">sitio corporativo</a> de varias páginas suele tomar entre dos y tres semanas. El tiempo extra se va en organizar el contenido: una página por servicio, textos optimizados para SEO y una arquitectura que Google entienda.',
          'Una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a> toma entre tres y cinco semanas: además del diseño, hay que cargar el catálogo, configurar pagos con Yappy y pasarelas, definir envíos y probar el flujo de compra completo. Un desarrollo a medida puede extenderse más, según sus integraciones.',
        ],
      },
      {
        type: 'steps',
        h2: 'Las etapas de una página web y cuánto dura cada una',
        intro: 'Toda web recorre estas cuatro etapas. Saber en cuál está la tuya te dice si el proyecto va según lo previsto.',
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
        h2: '¿Qué retrasa una página web? El contenido y las aprobaciones',
        paragraphs: [
          'Lo que atrasa una web casi nunca es el diseño o el código, sino <strong>el contenido del cliente</strong>: textos, fotos, logo en buena calidad, la lista de servicios con sus precios y las respuestas a preguntas clave sobre el negocio. Sin esos insumos, el proyecto se queda esperando en la etapa de diseño y contenido, y cada día de espera se suma a la fecha de entrega.',
          'La segunda causa son las <strong>aprobaciones lentas</strong>: cada ronda de revisión que tarda en volver alarga el proyecto. Una web no se retrasa por semanas de trabajo extra, sino por días sueltos de espera que se acumulan del lado del cliente.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo acelerar una página web sin sacrificar calidad?',
        paragraphs: [
          'Ten el contenido listo antes de arrancar, o entrégalo en bloque en los primeros días: textos aproximados de cada servicio, fotos de buena calidad, logo, datos de contacto y la lista de lo que ofreces.',
          '<strong>Agiliza las aprobaciones</strong>: designa a una sola persona que revise y decida, en lugar de pasar cada versión por un comité.',
          'Si no tienes tiempo para producir el contenido, dilo desde el inicio: en Elemento Web ayudamos a redactar textos y estructurar el contenido para que el proyecto no se detenga. Así trabajamos el <a href="/diseno-web-panama/">diseño web en Panamá</a>, y el precio de cada formato está en la <a href="/blog/cuanto-cuesta-diseno-web-panama/">guía de precios</a>.',
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
        
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Diseño web para constructoras' },
          { slug: 'industrias/diseno-web-educacion-panama', label: 'Diseño web para educación' },
        
          { slug: 'industrias/diseno-web-imprentas-publicidad-panama', label: 'Diseño web para imprentas' },
        ],
      },
    ],
    cta: {
      h2: 'Pon fecha real a tu próxima página web',
      wa: 'Hola, quiero saber en cuánto tiempo tendrían lista mi página web.',
    },
  },
];
