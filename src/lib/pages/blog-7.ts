/* BLOG — Lote 7: nueve guías long-form extendidas (≈3x), SEO-first.
   Cada objeto es una PageData con parent { slug: 'blog' }; el listado /blog las
   recoge por fecha y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog7: PageData[] = [
  /* ============================================================ 1 */
  {
    slug: 'blog/diseno-web-responsive-mobile-first-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web responsive: primero el celular',
    description: 'Qué es el diseño web responsive y por qué en Panamá tu página debe pensarse primero para el celular. Errores típicos en móvil.',
    h1: 'Diseño web responsive: por qué tu web debe pensarse primero para el celular',
    breadcrumb: 'Diseño web responsive',
    category: 'Diseño web',
    date: '2026-07-31',
    heroImage: {
      src: '/images/blog/diseno-web-responsive-mobile-first-panama.jpg',
      alt: 'Persona navegando una página web en su celular en Panamá',
    },
    lead: [
      'El diseño web responsive hace que un mismo sitio se adapte solo a celular, tablet y computadora. En Panamá la mayoría de las visitas a webs de negocios llega desde el teléfono, por eso en Elemento Web diseñamos primero para móvil: texto legible sin zoom, botones para el pulgar, WhatsApp a un toque y carga rápida con datos móviles.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es el diseño web responsive?',
        paragraphs: [
          'Una web responsive se reordena según la pantalla: cambia el tamaño de los textos, apila las columnas y ajusta las imágenes para que todo se lea y se toque cómodo en celular, tablet o monitor. No es una versión aparte "para móvil": es el mismo sitio, construido para acomodarse a cualquier tamaño.',
          'Una web pensada solo para escritorio obliga a hacer zoom, a desplazarse de lado y a pelear con botones diminutos; cada esfuerzo es una excusa para cerrar la pestaña, y casi nadie se queja. Responsive también significa que los formularios se llenen con el pulgar, que el botón de WhatsApp esté siempre a mano y que lo importante aparezca sin buscarlo.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué en Panamá se diseña primero para móvil?',
        paragraphs: [
          'La mayoría de las visitas a los sitios de negocios panameños llega desde un teléfono: la gente busca un restaurante mientras camina, compara precios en la fila del banco o pide una cotización desde el sofá. El escritorio es la minoría, y muchas veces es la segunda visita, no la primera.',
          'Diseñar mobile-first significa empezar por la pantalla más exigente y luego crecer hacia la grande. Partir del celular obliga a decidir qué mensaje va primero, qué botón importa y qué sobra, y esa disciplina mejora también la versión de escritorio. Hacerlo al revés —diseñar en pantalla ancha y luego "apretar" para móvil— suele dejar menús que no abren, textos cortados, imágenes pesadas y formularios imposibles de llenar con una mano.',
        ],
      },
      {
        type: 'steps',
        h2: 'Los errores de móvil que más clientes cuestan',
        intro: 'Revisa tu web en el celular con cada punto. Con dos o tres de estos errores ya pierdes mensajes todos los días.',
        items: [
          { h3: 'Texto que obliga a hacer zoom', text: 'Si el visitante tiene que ampliar con los dedos para leer, la mayoría se rinde antes de entender qué ofreces. El cuerpo de texto debe leerse cómodo sin tocar nada.' },
          { h3: 'Botones pegados o diminutos', text: 'Un botón que no se deja tocar con el pulgar es un botón que no existe. Los llamados a la acción necesitan tamaño, espacio alrededor y contraste.' },
          { h3: 'Carga lenta en datos móviles', text: 'Fuera del wifi, cada imagen pesada suma segundos y cada segundo espanta visitas. La velocidad en 4G es parte del diseño, no un extra.' },
          { h3: 'WhatsApp escondido', text: 'Si el cliente tiene que buscar cómo escribirte, no lo hará. El botón directo a WhatsApp debe estar visible y a un toque de distancia en todo momento.' },
          { h3: 'Formularios largos', text: 'Pedir diez campos en una pantalla pequeña es garantía de abandono. En móvil, mientras menos campos y más grandes, mejor.' },
          { h3: 'Menús que estorban', text: 'Menús que tapan el contenido, no cierran bien o esconden lo importante frustran al visitante justo cuando quería avanzar.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Velocidad y diseño responsive van de la mano',
        paragraphs: [
          'Una web que se ve perfecta en el celular pero tarda cinco segundos en aparecer sigue perdiendo visitas: en móvil la paciencia es corta y la conexión, variable. Una imagen sin optimizar o un constructor recargado arruinan la mejor maquetación.',
          'Casi todo se optimiza: comprimir imágenes, cargar solo lo necesario, evitar librerías pesadas y elegir un hosting decente. Los pasos concretos están en <a href="/blog/como-mejorar-la-velocidad-de-tu-pagina-web/">cómo mejorar la velocidad de carga de tu página web</a>. Además, Google usa la experiencia en móvil como señal de posicionamiento, así que un responsive bien hecho mejora a la vez la conversión y el SEO.',
        ],
      },
      {
        type: 'statement',
        text: 'Tu web no se prueba en el monitor del diseñador. Se prueba',
        strong: 'en el celular de tu cliente, con datos móviles y una sola mano.',
      },
      {
        type: 'prose',
        h2: '¿Cómo saber si tu web es responsive de verdad?',
        paragraphs: [
          'Abre tu sitio en el teléfono, sin wifi, e intenta completar la acción principal —cotizar, comprar, agendar o escribir por WhatsApp— como lo haría un cliente apurado. Si en algún punto hiciste zoom, dudaste o te frustraste, ahí está el problema.',
          'Si encontraste varios tropiezos, no siempre hay que empezar de cero: muchas veces un <a href="/servicios/redisenio-web-panama/">rediseño</a> enfocado corrige la experiencia móvil y conserva el contenido y el posicionamiento que ya tenías.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Checklist rápido de una web responsive que convierte',
        intro: 'Si tu sitio falla en varios puntos, es momento de revisarlo.',
        items: [
          'El texto se lee cómodo en el celular sin necesidad de zoom',
          'Los botones son grandes y se tocan fácil con el pulgar',
          'El botón de WhatsApp está visible y a un toque en todo momento',
          'Las imágenes están optimizadas y cargan rápido con datos móviles',
          'Los formularios piden lo mínimo y son fáciles de llenar en pantalla pequeña',
          'El menú abre y cierra bien, sin tapar el contenido',
          'La información importante aparece primero, sin scroll interminable',
          'La web carga en pocos segundos, no solo con wifi',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web responsive',
        items: [
          { q: '¿Necesito una web aparte para móvil?', a: 'No. Una web responsive es un solo sitio que se adapta a cualquier pantalla. Tener una versión móvil separada es una práctica antigua que hoy complica el mantenimiento y perjudica el SEO. Con un diseño responsive bien hecho, el mismo sitio funciona perfecto en celular, tablet y computadora.' },
          { q: '¿Cómo pruebo si mi web es responsive?', a: 'La prueba más útil es abrirla en tu propio celular con datos móviles e intentar completar la acción principal, como cotizar o escribir por WhatsApp. Si tienes que hacer zoom, los botones son difíciles de tocar o tarda en cargar, no está bien resuelta. También puedes revisarla en pantallas de distintos tamaños.' },
          { q: '¿El diseño responsive afecta mi posición en Google?', a: 'Sí, y bastante. Google evalúa la experiencia en móvil como una señal de posicionamiento. Una web lenta o difícil de usar en el teléfono tiende a perder lugares en los resultados. Un buen diseño responsive mejora al mismo tiempo la conversión y el SEO.' },
          { q: '¿Puedo hacer responsive mi web actual sin rehacerla?', a: 'A veces sí. Si la base es sólida, un rediseño enfocado en la experiencia móvil puede corregir la mayoría de los problemas sin empezar de cero. Si la web está construida sobre una plantilla lenta y rígida, muchas veces sale mejor reconstruirla bien una sola vez.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-mejorar-la-velocidad-de-tu-pagina-web', label: 'Cómo mejorar la velocidad de tu web' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: '7 errores de diseño web' },
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño web' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },

          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Diseño web para restaurantes' },
          { slug: 'industrias/diseno-web-dentistas-odontologia-panama', label: 'Diseño web para dentistas' },

          { slug: 'industrias/diseno-web-navieras-servicios-maritimos-panama', label: 'Diseño web para navieras' },
        ],
      },
    ],
    cta: {
      h2: 'Que tu web funcione impecable en cualquier celular',
      wa: 'Hola, quiero que mi página web funcione bien en el celular. ¿Me ayudan?',
    },
  },

  /* ============================================================ 2 */
  {
    slug: 'blog/cuando-hacer-rediseno-pagina-web',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Rediseño web: 8 señales de que tu sitio ya lo necesita',
    description: 'Ocho señales de que tu sitio necesita rediseño, qué conviene conservar y cómo rehacerlo sin perder tu posicionamiento.',
    h1: 'Rediseño de página web: 8 señales de que tu sitio ya necesita uno',
    breadcrumb: 'Cuándo rediseñar tu web',
    category: 'Diseño web',
    date: '2026-07-30',
    heroImage: {
      src: '/images/blog/cuando-hacer-rediseno-pagina-web.jpg',
      alt: 'Fachada deteriorada con puerta de madera descascarada y pintura desprendida, como señal de que un sitio pide rediseño web',
    },
    lead: [
      'Tu sitio necesita un rediseño de página web cuando no se ve bien en el celular, carga lento, no aparece en Google, no genera mensajes ni ventas o no puedes actualizarlo tú. Con tres o más de estas 8 señales, el rediseño deja de ser opcional; bien hecho, conserva el contenido, las URLs y el posicionamiento ganado.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Rediseñar no es un capricho estético',
        paragraphs: [
          'Un buen rediseño ataca el fondo, no la superficie: se hace cuando la web dejó de cumplir su trabajo porque no atrae, no convierte, no se puede administrar o no aparece en Google. La estética importa porque comunica seriedad en los primeros segundos, pero un sitio bonito que carga lento y no genera consultas sigue siendo un mal negocio.',
          'Por eso el rediseño empieza con una pregunta: ¿qué debería lograr esta web que hoy no logra? Con esa respuesta, cada decisión —estructura, contenido, velocidad, llamados a la acción— apunta a un objetivo medible en mensajes, ventas o citas.',
        ],
      },
      {
        type: 'steps',
        h2: 'Las 8 señales de que tu web necesita un rediseño',
        intro: 'Marca cuáles reconoces en tu propio sitio. Con tres o más, el rediseño deja de ser opcional.',
        items: [
          { h3: '1. No se ve bien en el celular', text: 'Si en el teléfono hay que hacer zoom o los botones no se dejan tocar, estás perdiendo a la mayoría de tus visitantes. Es la señal más urgente de todas.' },
          { h3: '2. Carga lento', text: 'Si tarda varios segundos en aparecer, muchos se van antes de verla. La velocidad envejece rápido cuando el sitio se llenó de plugins y fotos pesadas.' },
          { h3: '3. No aparece en Google', text: 'Si tus clientes buscan tu servicio y no te encuentran, la web no está trabajando. Muchas veces el problema es estructural y un rediseño con SEO lo corrige.' },
          { h3: '4. No genera mensajes ni ventas', text: 'Tráfico sin consultas es señal de que la web no guía al visitante. Faltan llamados a la acción claros y un camino obvio hacia el WhatsApp o el carrito.' },
          { h3: '5. No la puedes actualizar tú', text: 'Si cambiar un precio o subir una foto depende de un tercero, la web se queda vieja sola. Un panel autoadministrable devuelve el control.' },
          { h3: '6. Ya no representa a tu negocio', text: 'Si creciste, cambiaste de servicios o subiste de nivel y la web sigue contando la historia de hace tres años, transmite lo contrario de lo que quieres.' },
          { h3: '7. Se ve claramente desactualizada', text: 'Diseños recargados, animaciones antiguas o estética de otra época restan confianza justo cuando el cliente decide si comprarte.' },
          { h3: '8. Depende de tecnología vieja o insegura', text: 'Plantillas o plugins sin mantenimiento son un riesgo de seguridad y de caídas. Un rediseño sobre una base moderna quita ese peso de encima.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Rediseñar una web obliga a empezar de cero?',
        paragraphs: [
          'No siempre. El contenido, los textos de venta, las URLs posicionadas y las fotos pueden y deben conservarse. Lo que cambia es lo que frenaba al sitio: estructura confusa, lentitud, falta de SEO técnico y llamados a la acción invisibles. Es como remodelar un local con buena ubicación: conservas lo bueno y arreglas lo que espantaba a los clientes.',
          'Cuando la base es demasiado frágil —una plantilla lenta, sin mantenimiento y difícil de administrar— conviene reconstruir sobre cimientos nuevos, migrando el contenido y las URLs con cuidado para no perder el terreno ganado en Google.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo hacer un rediseño web sin perder el posicionamiento en Google?',
        paragraphs: [
          'Un rediseño mal hecho puede borrar meses o años de posicionamiento: pasa cuando se cambian las URLs sin redirigir las antiguas, cuando se pierden los textos que Google ya valoraba o cuando la nueva versión olvida el SEO técnico.',
          'Evitarlo es cuestión de método: antes de rediseñar se mapea qué páginas traen tráfico y qué palabras clave las sostienen; si una URL cambia, se configura una redirección para que el visitante y Google lleguen al lugar correcto; y el contenido valioso se mejora, no se elimina. Para entender qué se protege, lee <a href="/blog/como-aparecer-primero-en-google-en-panama/">cómo aparecer primero en Google</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Un rediseño bien hecho no borra tu historia en Google:',
        strong: 'la conserva y la hace rendir mejor.',
      },
      {
        type: 'prose',
        h2: 'Qué esperar de un rediseño de página web bien planteado',
        paragraphs: [
          'Un rediseño ordenado define qué debe lograr la web, decide qué contenido conservar, da a cada servicio importante su propia página y se construye pensando primero en el celular y en la velocidad. El resultado es una web que aparece en Google, carga rápido, guía al visitante hacia la acción y se administra sin depender de nadie.',
          'Muchos negocios aprovechan para sumar piezas que antes no tenían, como un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA</a> o un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a>. Pide siempre una cotización por escrito con plazo claro; si dudas a quién confiárselo, revisa cómo <a href="/blog/como-elegir-agencia-diseno-web-panama/">elegir una agencia de diseño web</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre rediseño web',
        items: [
          { q: '¿Cada cuánto se debería rediseñar una web?', a: 'No hay una regla fija, pero muchos negocios revisan su web a fondo cada tres o cuatro años, o antes si cambian de rumbo, crecen o notan que ya no genera consultas. Más que el calendario, lo que manda son las señales: si tu web dejó de convertir, se ve vieja o no funciona en móvil, es momento.' },
          { q: '¿Perderé mi posición en Google si rediseño?', a: 'No, si se hace bien. El riesgo aparece cuando se cambian las URLs sin redirigir o se elimina el contenido que Google ya valoraba. Un rediseño serio mapea el posicionamiento actual, conserva el contenido clave y configura redirecciones para no perder terreno.' },
          { q: '¿Es más barato rediseñar o hacer una web nueva?', a: 'Depende del estado de la base. Si el contenido y la estructura son aprovechables, rediseñar suele salir más a cuenta. Si la web está sobre una plantilla lenta e insegura, muchas veces conviene reconstruirla bien una sola vez. Lo definimos tras revisar tu sitio actual.' },
          { q: '¿Cuánto tarda un rediseño?', a: 'Depende del tamaño del sitio y de cuánto contenido haya que reorganizar o crear. Un rediseño se cotiza con un plazo cerrado antes de empezar, para que sepas cuándo estará listo. Suele ser más rápido que una web desde cero cuando se conserva buena parte del contenido.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/redisenio-web-panama', label: 'Servicio de rediseño web' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: '7 errores de diseño web' },
          { slug: 'blog/como-elegir-agencia-diseno-web-panama', label: 'Cómo elegir una agencia' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },

          { slug: 'industrias/diseno-web-arquitectos-diseno-interiores-panama', label: 'Diseño web para arquitectos' },
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Diseño web para importadoras' },
        ],
      },
    ],
    cta: {
      h2: '¿Tu web ya pide un rediseño? Revisémosla juntos',
      wa: 'Hola, creo que mi página web necesita un rediseño. ¿Me ayudan a revisarla?',
    },
  },

  /* ============================================================ 3 */
  {
    slug: 'blog/landing-page-vs-sitio-web-cual-necesitas',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Landing page vs sitio web: cuál necesita tu negocio en Panamá',
    description: 'Landing page o sitio web: en qué se diferencian, cuándo conviene cada uno y cuánto cuestan en Panamá. Guía para elegir bien.',
    h1: 'Landing page vs sitio web: cuál necesita tu negocio',
    breadcrumb: 'Landing page vs sitio web',
    category: 'Diseño web',
    date: '2026-07-29',
    heroImage: {
      src: '/images/blog/landing-page-vs-sitio-web-cual-necesitas.jpg',
      alt: 'Comparación entre una landing page y un sitio web en dos pantallas',
    },
    lead: [
      'Landing page vs sitio web: la landing es una sola página con una sola acción, ideal para pauta y ofertas concretas, desde $550. El sitio web completo tiene una página por servicio, posiciona en Google y, como Web empresarial, parte desde $1,250. En Panamá, elige landing para una campaña y sitio para captar clientes continuamente.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es una landing page?',
        paragraphs: [
          'Una landing page es una sola página con un único objetivo: cotizar, comprar un producto, reservar un cupo o dejar datos. Titular, imágenes, textos y botón empujan hacia esa acción, y no hay menú con secciones que distraigan. Por ese enfoque, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de alta conversión</a> rinde mejor cuando la respalda una campaña de pauta en Google o Meta.',
          'Una landing no es el lugar para contar la historia de la empresa, listar doce servicios o construir marca a largo plazo. Cuando intenta hacer todo eso se convierte en una página larga y confusa que no convierte ni posiciona.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué es un sitio web completo?',
        paragraphs: [
          'Un sitio web completo es un conjunto de páginas conectadas —inicio, servicios, sobre nosotros, portafolio, contacto, blog— que juntas construyen presencia, confianza y posicionamiento. Su ventaja principal es el SEO: cuando cada servicio tiene su propia página optimizada, Google puede mostrarte para muchas búsquedas, y ese tráfico llega gratis mes tras mes. Una <strong>Web empresarial</strong> bien estructurada capta clientes sin pagar por cada clic.',
          'El sitio completo también da espacio para crecer: un blog que atrae visitas, un catálogo, un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> o una tienda.',
        ],
      },
      {
        type: 'cards',
        h2: 'Landing page vs sitio web: diferencias que importan',
        intro: 'Las dos sirven, pero para objetivos distintos. Esta es la comparación que de verdad decide.',
        items: [
          { h3: 'Objetivo', text: 'La landing busca una acción inmediata; el sitio construye presencia y capta clientes de forma continua.' },
          { h3: 'SEO', text: 'La landing rara vez posiciona por sí sola; el sitio completo, con una página por servicio, es el que trae tráfico gratis desde Google.' },
          { h3: 'Ideal para', text: 'La landing brilla con pauta y ofertas concretas; el sitio brilla como presencia permanente del negocio.' },
          { h3: 'Inversión', text: 'La landing es la inversión más contenida; el sitio completo sube según páginas e integraciones (precios abajo).' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo conviene una landing page?',
        paragraphs: [
          'La landing es la herramienta correcta cuando tienes una oferta concreta y quieres resultados rápidos: una campaña en Google o Meta, un producto estrella, inscripciones a un curso o evento, o una idea que quieres probar antes de invertir más. También sirve cuando el negocio es directo —un servicio, un mensaje, una acción— y solo necesitas que el cliente te escriba por WhatsApp. Al ser una sola página, sale antes al aire.',
          'Muchos negocios empiezan con una landing bien hecha, validan que genera consultas y luego crecen hacia un sitio completo sobre esa base. Es una entrada prudente cuando el presupuesto aprieta, siempre que la landing no sea una plantilla barata.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo conviene un sitio web completo?',
        paragraphs: [
          'El sitio completo conviene cuando ofreces varios servicios o productos, cada uno con su propia búsqueda en Google: una sola página que habla de todo no le da a Google motivos para mostrarte, y una página por servicio sí. También conviene cuando la confianza es parte de la venta, porque portafolio, sobre nosotros y testimonios hacen un trabajo que una landing no puede.',
          'Es además la base para sumar blog, tienda, reservas y automatizaciones si tu visión de internet es de largo plazo. Puedes ver ejemplos reales en nuestro <a href="/portafolio/">portafolio</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'La pregunta no es cuál es mejor, sino',
        strong: 'cuál resuelve tu objetivo hoy sin cerrarte la puerta a mañana.',
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta una landing page o un sitio web en Panamá?',
        paragraphs: [
          'Una landing page de alta conversión parte desde $550: una sola página enfocada, con diseño a medida y botón directo a WhatsApp. Una Web empresarial parte desde $1,250 e incluye varias secciones, una página por servicio con SEO y un panel para administrarla tú.',
          'Si el proyecto necesita catálogo y pagos, una tienda online parte desde $1,950, y un sitio corporativo a medida se cotiza desde $2,900. En todos los casos, el precio se cierra por escrito antes de empezar. El desglose de qué encarece un proyecto está en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Una landing page sirve para posicionar en Google?', a: 'Poco. Una sola página compite por muy pocas búsquedas y no da a Google suficientes motivos para mostrarte en muchas consultas. Para SEO conviene un sitio completo con una página por servicio. La landing brilla más con pauta pagada que con posicionamiento orgánico.' },
          { q: '¿Puedo empezar con una landing y luego crecer?', a: 'Sí, y es una estrategia muy sensata cuando el presupuesto es ajustado. Lanzas una landing sólida, validas que genera consultas y luego construyes el sitio completo sobre esa base. Lo importante es que la landing esté bien hecha desde el inicio, no una plantilla barata.' },
          { q: '¿Qué necesito si voy a hacer pauta en Google o Meta?', a: 'Para pauta, una landing page enfocada suele convertir mejor que mandar el tráfico a la página de inicio de un sitio completo, porque elimina distracciones y guía a una sola acción. Muchos negocios tienen su sitio y, además, landings específicas para cada campaña.' },
          { q: '¿Cuál es más barata?', a: 'La landing, porque es una sola página. Parte desde $550, frente a los $1,250 de una Web empresarial. Pero "más barata" no significa "mejor" en todos los casos: si tu negocio necesita posicionar varios servicios, ahorrar con una landing puede costarte el tráfico gratis que solo un sitio completo genera.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una web?' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },

          { slug: 'industrias/diseno-web-eventos-catering-bodas-panama', label: 'Diseño web para eventos y catering' },
          { slug: 'industrias/diseno-web-gimnasios-fitness-panama', label: 'Diseño web para gimnasios' },
        ],
      },
    ],
    cta: {
      h2: 'Te decimos cuál conviene para tu objetivo',
      wa: 'Hola, no sé si necesito una landing o un sitio completo. ¿Me orientan?',
    },
  },

  /* ============================================================ 4 */
  {
    slug: 'blog/como-aumentar-ventas-tienda-online-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cómo aumentar las ventas de tu tienda online en Panamá',
    description: 'Nueve tácticas para vender más en tu tienda online en Panamá: velocidad, Yappy, WhatsApp y recuperación de carritos.',
    h1: 'Cómo aumentar las ventas de tu tienda online en Panamá',
    breadcrumb: 'Aumentar ventas online',
    category: 'E-commerce',
    date: '2026-07-28',
    heroImage: {
      src: '/images/blog/como-aumentar-ventas-tienda-online-panama.jpg',
      alt: 'Pila de cajas de cartón selladas con cinta en la puerta de un depósito pequeño, en una guía para vender más online',
    },
    lead: [
      'Para aumentar las ventas de tu tienda online en Panamá, tapa primero las fugas de conversión antes de pagar más pauta: acelera la carga en el celular, acepta Yappy además de tarjeta y transferencia, deja el WhatsApp a la vista, simplifica el checkout y recupera los carritos abandonados. Son nueve ajustes que se aplican sin rehacer la tienda.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Antes de vender más, tapa las fugas',
        paragraphs: [
          'Vender más no siempre exige más visitas; muchas veces basta con perder menos de las que ya tienes. Si de cada cien visitantes compra uno, traer otros cien no arregla el problema de fondo y te sale caro en pauta. Primero se mira la conversión —qué porcentaje termina comprando— y después el tráfico.',
          'Las fugas más caras de una tienda online están en tres lugares: la velocidad, la confianza y el momento del pago. Las nueve tácticas que siguen atacan esos puntos, en el orden de impacto para una tienda en Panamá.',
        ],
      },
      {
        type: 'steps',
        h2: '9 tácticas para aumentar las ventas de tu tienda online',
        intro: 'Aplícalas de arriba hacia abajo. Las primeras suelen dar el mayor salto con el menor esfuerzo.',
        items: [
          { h3: '1. Acelera la carga', text: 'En el celular, cada segundo de espera hace caer las ventas. Comprime imágenes, quita plugins innecesarios y usa buen hosting. Una tienda rápida vende más con el mismo tráfico.' },
          { h3: '2. Ofrece los pagos que la gente usa', text: 'En Panamá, no ofrecer Yappy es cerrarle la puerta a muchos compradores. Suma Yappy, tarjetas y transferencia. Mientras más formas de pagar, menos ventas perdidas en el último paso.' },
          { h3: '3. Pon el WhatsApp a la vista', text: 'Muchos compradores quieren preguntar antes de pagar. Un botón directo a WhatsApp resuelve dudas al instante y rescata ventas que si no se enfriarían.' },
          { h3: '4. Muestra confianza', text: 'Reseñas, fotos reales, políticas claras de envío y devolución, y datos de contacto visibles. La desconfianza es el freno silencioso de toda tienda nueva.' },
          { h3: '5. Simplifica el checkout', text: 'Menos campos, sin registro obligatorio, con el pago a pocos toques. Cada paso extra en el pago pierde compradores decididos.' },
          { h3: '6. Recupera carritos abandonados', text: 'Un recordatorio automático por correo o WhatsApp a quien dejó el carrito lleno rescata ventas que ya casi tenías. Es de lo más rentable que existe.' },
          { h3: '7. Fotos y descripciones que venden', text: 'Fotos claras desde varios ángulos y descripciones que resuelven dudas reales. El cliente no puede tocar el producto: la ficha tiene que hacer ese trabajo.' },
          { h3: '8. Envíos claros y sin sorpresas', text: 'Costos y tiempos de envío visibles desde el inicio. El costo de envío inesperado en el último paso es una de las mayores causas de abandono.' },
          { h3: '9. Ofertas y urgencia honesta', text: 'Combos, envío gratis a partir de cierto monto o stock real limitado. La urgencia funciona cuando es verdadera; inventada, destruye la confianza.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué aceptar Yappy en tu tienda online?',
        paragraphs: [
          'En Panamá muchos compradores no tienen tarjeta a mano o prefieren Yappy por costumbre y confianza. Una tienda que solo acepta tarjeta los pierde en el último paso. Integrar <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy y pasarelas de pago</a> permite que el cliente pague como quiere sin salir de la tienda.',
          'El paso a paso está en <a href="/blog/como-integrar-yappy-tu-tienda-online/">cómo integrar Yappy en tu tienda online</a>. Para una tienda panameña que aún no lo ofrece, suele ser el ajuste con mejor retorno.',
        ],
      },
      {
        type: 'prose',
        h2: 'La confianza vende tanto como el producto',
        paragraphs: [
          'Comprar en línea es entregar dinero sin ver ni tocar el producto. En una tienda nueva o poco conocida, una foto borrosa, una política de envío ausente o la falta de reseñas bastan para que el cliente se vaya.',
          'Las señales de confianza no son caras: fotos reales, opiniones de clientes, políticas de envío y devolución claras, contacto visible, certificado SSL, un diseño cuidado y un WhatsApp que responde rápido. Cada una contesta la pregunta que el comprador se hace en silencio: ¿puedo confiar en esta tienda?',
        ],
      },
      {
        type: 'statement',
        text: 'No siempre necesitas más visitas para vender más.',
        strong: 'A veces solo necesitas dejar de perder las que ya tienes.',
      },
      {
        type: 'prose',
        h2: 'Automatiza lo que hoy haces a mano',
        paragraphs: [
          'Cuando la tienda crece, responder las mismas preguntas, recordar carritos, confirmar pedidos y avisar de envíos se come el día, y cada mensaje que se enfría por demora es una venta perdida. Un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA</a> responde las dudas frecuentes al instante y filtra a quien está listo para comprar; los recordatorios de <a href="/blog/carritos-abandonados-como-recuperar-ventas/">carritos abandonados</a> y las confirmaciones salen solos.',
          'Para volver a venderle a quien ya te compró, <a href="/saas/wazacrm/">WazaCRM</a> guarda el historial de cada conversación por WhatsApp para que ningún cliente se pierda entre chats.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Por qué tengo visitas pero pocas ventas?', a: 'Casi siempre es un problema de conversión, no de tráfico: la tienda pierde al cliente antes de pagar. Las causas más comunes son carga lenta, falta de pagos locales como Yappy, poca confianza (sin reseñas ni políticas claras) y un checkout complicado. Tapar esas fugas suele subir las ventas sin gastar más en publicidad.' },
          { q: '¿Vale la pena ofrecer Yappy en mi tienda?', a: 'En Panamá, muchísimo. Una parte importante de los compradores prefiere o solo tiene a mano Yappy. Si tu tienda no lo acepta, pierdes esas ventas justo en el último paso. Integrar Yappy suele ser el ajuste con mejor retorno para una tienda panameña.' },
          { q: '¿Qué es un carrito abandonado y cómo lo recupero?', a: 'Es cuando alguien agrega productos y se va sin pagar. Se recuperan con recordatorios automáticos por correo o WhatsApp, muchas veces con un pequeño incentivo. Es una de las tácticas más rentables, porque le hablas a alguien que ya mostró intención de comprar.' },
          { q: '¿Necesito bajar precios para vender más?', a: 'Rara vez es la respuesta. Antes de tocar el precio, conviene mejorar velocidad, pagos, confianza y checkout, que suelen ser la causa real. Competir solo por precio erosiona tu margen; competir por experiencia y confianza te hace vender más sin regalar tu ganancia.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-integrar-yappy-tu-tienda-online', label: 'Cómo integrar Yappy' },
          { slug: 'blog/como-crear-una-tienda-online-en-panama', label: 'Cómo crear una tienda online' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },
          { slug: 'blog/metodos-de-pago-online-en-panama', label: 'Métodos de pago en Panamá' },

          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Diseño web para retail y moda' },
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Diseño web para ferreterías' },
        ],
      },
    ],
    cta: {
      h2: 'Convierte más visitas en ventas reales',
      wa: 'Hola, quiero aumentar las ventas de mi tienda online. ¿Me ayudan a revisarla?',
    },
  },

  /* ============================================================ 5 */
  {
    slug: 'blog/carritos-abandonados-como-recuperar-ventas',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Carritos abandonados: cómo recuperar esas ventas',
    description: 'Por qué se abandonan los carritos en Panamá y cómo recuperar esas ventas: recordatorios, checkout simple y pagos locales.',
    h1: 'Carritos abandonados: por qué pierdes ventas y cómo recuperarlas',
    breadcrumb: 'Carritos abandonados',
    category: 'E-commerce',
    date: '2026-07-27',
    heroImage: {
      src: '/images/blog/carritos-abandonados-como-recuperar-ventas.jpg',
      alt: 'Carrito con un solo producto abandonado en un pasillo de supermercado lleno, como un carrito abandonado en tienda online',
    },
    lead: [
      'Para recuperar carritos abandonados, primero reduce la fricción de la tienda —envío visible desde el inicio, compra sin cuenta, Yappy y checkout corto— y después envía dos o tres recordatorios automáticos con enlace directo al pago, el primero a las pocas horas. En Panamá, WhatsApp suele ser el canal donde más clientes leen y responden.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué la gente abandona el carrito?',
        paragraphs: [
          'El abandono casi nunca es un rechazo al producto: el cliente ya lo quería, por eso lo puso en el carrito, pero una fricción lo hizo dudar o rendirse. Los motivos se repiten en toda tienda: costos de envío que aparecen al final, obligación de crear una cuenta, un checkout con demasiados campos, la falta del método de pago que la persona usa o una duda que nadie respondió a tiempo.',
          'También hay abandonos naturales: gente que compara, guarda para después o se interrumpe. Esos son justamente los que un buen recordatorio rescata. La fricción evitable se corrige en el diseño; el abandono natural, con seguimiento.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Reduce los abandonos desde el diseño de la tienda',
        intro: 'Antes de perseguir carritos, evita que se abandonen. Revisa que tu tienda cumpla con esto.',
        items: [
          'Muestra el costo y el tiempo de envío desde el inicio, sin sorpresas al final',
          'Permite comprar sin obligar a crear una cuenta',
          'Ofrece Yappy, tarjetas y transferencia, los pagos que la gente usa en Panamá',
          'Reduce el checkout a los campos mínimos indispensables',
          'Deja el botón de WhatsApp visible para resolver dudas al instante',
          'Carga rápido en el celular, sobre todo en la pantalla de pago',
          'Muestra señales de confianza: reseñas, políticas claras y sitio seguro',
          'Confirma el pedido de inmediato para dar tranquilidad al comprador',
        ],
      },
      {
        type: 'prose',
        h2: 'El costo de envío sorpresa, la causa más común de abandono',
        paragraphs: [
          'El costo de envío que aparece de golpe en el último paso es el principal culpable del abandono. El cliente recorrió la tienda pensando en un precio y, al final, le suman una cifra que no esperaba; la sensación de sorpresa pesa más que el monto.',
          'La solución es mostrar el envío desde el inicio: una calculadora en la ficha del producto o un umbral de envío gratis ("gratis a partir de X"). Ese umbral, bien calibrado, además empuja al cliente a sumar un producto más y sube el ticket promedio.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo recuperar carritos abandonados?',
        paragraphs: [
          'Cuando alguien deja el carrito lleno, un recordatorio oportuno puede traerlo de vuelta. En Panamá el canal más efectivo es WhatsApp, porque es donde la gente lee y responde; el correo sirve para quienes dejaron su email. Si ya vendes por chat, revisa también <a href="/blog/como-vender-por-whatsapp-en-panama/">cómo vender por WhatsApp en Panamá</a>.',
          'Hacerlo a mano no escala. Un flujo que detecta el carrito abandonado y dispara el recordatorio solo, con <a href="/saas/wazacrm/">WazaCRM</a> o una <a href="/marketing/automatizaciones-n8n-panama/">automatización</a>, hace ese trabajo día y noche.',
        ],
      },
      {
        type: 'statement',
        text: 'Un carrito abandonado no es una venta perdida.',
        strong: 'Es una venta esperando un recordatorio.',
      },
      {
        type: 'prose',
        h2: 'La secuencia de recuperación que funciona',
        paragraphs: [
          'Una secuencia efectiva tiene dos o tres mensajes bien espaciados. El primero, a las pocas horas, recuerda lo que quedó en el carrito con un enlace directo para terminar el pago. El segundo, al día siguiente, resuelve dudas o suma una razón para decidir. El tercero, más adelante, puede incluir un incentivo moderado —envío gratis o un descuento— si aún no compró.',
          'Dos o tres mensajes útiles rescatan ventas; diez al día espantan al cliente y te mandan a spam. Si además respondes las dudas al instante con un <a href="/blog/como-atender-clientes-24-7-con-un-asistente-de-ia/">asistente de IA que responde 24/7</a>, reduces los abandonos y aumentas los rescates.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué porcentaje de carritos se abandona?', a: 'Es normal que la mayoría de los carritos se abandonen; es el comportamiento típico del comercio en línea en todo el mundo. Lo importante no es evitar todos los abandonos, que es imposible, sino reducir la fricción evitable y recuperar la mayor parte posible con recordatorios bien hechos.' },
          { q: '¿Cuál es la mejor forma de recuperar carritos en Panamá?', a: 'El WhatsApp suele ser el canal más efectivo, porque es donde la gente lee y responde de verdad, seguido del correo para quienes dejaron su email. Lo ideal es una secuencia corta y amable, automatizada, con un enlace directo para terminar el pago.' },
          { q: '¿Ofrecer un descuento para recuperar el carrito es buena idea?', a: 'Con medida. Un incentivo moderado en el segundo o tercer recordatorio puede cerrar ventas dudosas. Pero si acostumbras a los clientes a abandonar para recibir descuento, entrenas el comportamiento equivocado. Úsalo como empujón final, no como norma.' },
          { q: '¿Necesito una herramienta especial para esto?', a: 'Para hacerlo a escala, sí conviene. Un CRM de ventas por WhatsApp o una automatización detecta el carrito abandonado y dispara los recordatorios solos. Hacerlo a mano funciona con pocos pedidos, pero deja de escalar en cuanto la tienda crece.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-aumentar-ventas-tienda-online-panama', label: 'Cómo aumentar tus ventas online' },
          { slug: 'blog/como-vender-por-whatsapp-en-panama', label: 'Cómo vender por WhatsApp' },
          { slug: 'saas/wazacrm', label: 'WazaCRM' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },

          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Diseño web para retail y moda' },
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Diseño web para ferreterías' },
        ],
      },
    ],
    cta: {
      h2: 'Recupera las ventas que hoy se te escapan',
      wa: 'Hola, quiero recuperar los carritos abandonados de mi tienda. ¿Cómo lo hacemos?',
    },
  },

  /* ============================================================ 6 */
  {
    slug: 'blog/como-elegir-palabras-clave-seo-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cómo elegir las palabras clave que sí traen clientes en Panamá',
    description: 'Cómo elegir palabras clave de SEO en Panamá: intención de búsqueda, términos locales y de cola larga, y cómo asignarlas.',
    h1: 'Cómo elegir las palabras clave que sí traen clientes',
    breadcrumb: 'Palabras clave',
    category: 'SEO',
    date: '2026-07-26',
    heroImage: {
      src: '/images/blog/como-elegir-palabras-clave-seo-panama.jpg',
      alt: 'Hombre de espaldas en una parada de bus mirando un celular, con buses al fondo, en una guía de palabras clave para SEO',
    },
    lead: [
      'Para elegir palabras clave de SEO que traigan clientes en Panamá, parte de cómo te busca el cliente, prioriza las búsquedas con intención de compra y con "en Panamá" o tu zona, suma frases de cola larga con menos competencia y asigna una palabra clave principal por página: servicios para las de contratar, blog para las de aprender.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es una palabra clave y por qué importa',
        paragraphs: [
          'Una palabra clave es lo que tu cliente escribe en Google cuando busca algo: "diseño web en Panamá", "restaurante para eventos en la ciudad", "abogado de sucesiones". El SEO consiste en que tu web sea la respuesta a esas búsquedas. Si está optimizada para palabras que nadie busca, o que buscan personas que jamás te comprarán, no traerá clientes.',
          'El error clásico es elegir desde la jerga del negocio y no desde las palabras del cliente: tú puedes llamarle "soluciones integrales de comunicación digital" a lo que tu cliente busca como "hacer una página web". Las herramientas ayudan a medir, pero el punto de partida es entender a quién quieres atraer y qué problema quiere resolver.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué es la intención de búsqueda?',
        paragraphs: [
          'La intención de búsqueda es lo que la persona quiere lograr con su consulta, y decide si te comprará o solo está mirando. Quien busca "qué es una landing page" está aprendiendo; quien busca "hacer una landing page en Panamá precio" está a punto de contratar. Se distinguen tres intenciones: informativa (aprender), de navegación (llegar a un sitio concreto) y transaccional (comprar o contratar).',
          'Cada intención va a su lugar: las búsquedas de comprar o contratar, a páginas de servicio y producto; las de aprender, a artículos del blog como este. Cuando cada página responde a la intención correcta, Google entiende tu sitio y te muestra a la persona correcta.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo elegir palabras clave para SEO, paso a paso',
        intro: 'Un proceso que puedes hacer sin herramientas caras, pensando en tu cliente real.',
        items: [
          { h3: '1. Escribe cómo te buscaría un cliente', text: 'Anota, en las palabras del cliente, todas las formas en que buscaría lo que ofreces. Incluye el "en Panamá" o tu ciudad, porque lo local es lo que más convierte.' },
          { h3: '2. Piensa por servicio, no en general', text: 'Cada servicio o producto tiene sus propias búsquedas. Haz una lista por cada uno; así cada página tendrá su palabra clave objetivo.' },
          { h3: '3. Prioriza la intención de compra', text: 'Separa las búsquedas de "quiero contratar/comprar" de las de "quiero aprender". Las primeras van a páginas de servicio; las segundas, al blog.' },
          { h3: '4. Busca variantes de cola larga', text: 'Frases más específicas ("diseño web para restaurantes en Panamá") tienen menos competencia y clientes más decididos. Suman muchas ventas juntas.' },
          { h3: '5. Mira qué usa la competencia', text: 'Busca en Google tus términos y observa quién aparece y con qué palabras. Te da pistas de lo que funciona y de huecos que puedes ocupar.' },
          { h3: '6. Asigna una palabra clave por página', text: 'Cada página apunta a una búsqueda principal. Si dos páginas compiten por la misma, se estorban entre sí y confunden a Google.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Palabras clave locales y de cola larga: las que ganan en Panamá',
        paragraphs: [
          'Para un negocio panameño, competir por una palabra genérica y mundial trae visitas de todas partes que nunca te comprarán. Las búsquedas locales —"diseño web en Panamá", "dentista en Costa del Este", "catering para bodas en la ciudad"— tienen menos volumen, pero cada visita es un cliente potencial.',
          'Las palabras de cola larga, frases más largas y detalladas, tienen poca competencia y una intención clara: quien busca "reparación de aire acondicionado a domicilio en Panamá" sabe lo que quiere. Si tu negocio depende de clientes de una zona, complementa estas palabras con tu ficha de Google; lo explicamos en <a href="/blog/que-es-el-seo-local-y-google-maps-panama/">qué es el SEO local y cómo dominar Google Maps</a> y en cómo <a href="/blog/optimizar-google-business-profile-panama/">optimizar tu ficha de Google Business Profile</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'No persigas las palabras más buscadas.',
        strong: 'Persigue las que buscan tus clientes cuando están a punto de comprar.',
      },
      {
        type: 'prose',
        h2: 'De la lista de palabras clave a la estructura de tu web',
        paragraphs: [
          'Cada palabra clave principal merece su propia página, optimizada para responder a esa búsqueda. La home apunta a tu búsqueda más importante, cada servicio a la suya, cada industria a la de su nicho y cada artículo del blog a una búsqueda informativa. Por eso un sitio con una página por servicio posiciona mejor que una web de una sola página que quiere decirlo todo.',
          'Esta estrategia es la base de cualquier <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento web serio</a>. El panorama completo está en <a href="/blog/como-aparecer-primero-en-google-en-panama/">cómo aparecer primero en Google en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuántas palabras clave debe tener mi web?', a: 'No hay un número mágico. La regla útil es una palabra clave principal por página: la home apunta a tu búsqueda más importante, cada servicio a la suya y cada artículo del blog a una búsqueda informativa. Así, en conjunto, tu web aparece para muchas búsquedas sin que las páginas compitan entre sí.' },
          { q: '¿Conviene ir por las palabras más buscadas?', a: 'No necesariamente. Las palabras muy populares suelen tener mucha competencia y, a veces, intención poco clara. Para un negocio local, las búsquedas específicas y con "en Panamá" o tu ciudad traen menos volumen pero clientes reales, y son mucho más fáciles de posicionar.' },
          { q: '¿Qué son las palabras clave de cola larga?', a: 'Son frases más largas y específicas, como "diseño web para restaurantes en Panamá". Tienen menos competencia y una intención de compra muy clara. Cada una trae poco tráfico, pero sumadas suelen aportar la mayor parte de los clientes que llegan por SEO.' },
          { q: '¿Puedo hacer esto yo mismo o necesito ayuda?', a: 'Puedes empezar tú, pensando como tu cliente y listando cómo te buscaría. Para llevarlo a una estrategia completa —investigar volúmenes, mapear intención y estructurar la web— conviene apoyarse en quien hace SEO a diario. Lo importante es no optimizar a ciegas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Cómo aparecer primero en Google' },
          { slug: 'blog/que-es-el-seo-local-y-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'blog/seo-para-pymes-en-panama-guia', label: 'SEO para pymes' },

          { slug: 'industrias/diseno-web-abogados-panama', label: 'Diseño web para abogados' },
          { slug: 'industrias/diseno-web-clinicas-esteticas-panama', label: 'Diseño web para clínicas estéticas' },
        ],
      },
    ],
    cta: {
      h2: 'Aparece en Google para las búsquedas que sí venden',
      wa: 'Hola, quiero que mi web aparezca en Google para las búsquedas correctas. ¿Me ayudan con el SEO?',
    },
  },

  /* ============================================================ 7 */
  {
    slug: 'blog/optimizar-google-business-profile-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Google Business Profile: optimiza tu ficha en Panamá',
    description: 'Cómo optimizar tu ficha de Google Business Profile en Panamá para aparecer en Maps, ganar reseñas y atraer clientes de tu zona.',
    h1: 'Google Business Profile: cómo optimizar tu ficha para vender más',
    breadcrumb: 'Google Business Profile',
    category: 'SEO',
    date: '2026-07-25',
    heroImage: {
      src: '/images/blog/optimizar-google-business-profile-panama.jpg',
      alt: 'Negocio local apareciendo en Google Maps en Panamá',
    },
    lead: [
      'Para optimizar tu ficha de Google Business Profile en Panamá, reclámala y verifícala, completa todos los campos con la categoría más precisa, sube fotos reales, pide reseñas y responde todas, y mantén horario y teléfono al día. La ficha es gratis y es la que te hace aparecer en el recuadro de Google Maps con tres negocios.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es Google Business Profile?',
        paragraphs: [
          'Google Business Profile —antes Google My Business— es la ficha gratuita que representa a tu negocio en Google y en Google Maps. Aparece a la derecha cuando alguien busca tu nombre y alimenta el recuadro de mapa con tres negocios que Google muestra en las búsquedas locales, como "cerca de mí". No es tu web: es tu escaparate dentro de Google.',
          'Quien busca un servicio "cerca de mí" suele estar listo para actuar, muchas veces desde el celular. Aparecer ahí con buenas reseñas y datos claros es llegar justo cuando el cliente decide. Aun así, muchos negocios tienen la ficha abandonada, con datos viejos o sin reclamar, y eso deja el espacio libre para quien sí la trabaja.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo optimizar tu ficha de Google Business Profile, paso a paso',
        intro: 'Sigue estos pasos en orden. Cada uno suma para que Google te muestre más arriba y a más gente.',
        items: [
          { h3: '1. Reclama y verifica tu ficha', text: 'Busca tu negocio en Google y reclama la ficha, o créala si no existe. Verifica que eres el dueño con el método que Google te ofrezca. Sin verificar, no controlas lo que aparece.' },
          { h3: '2. Completa todo, sin dejar campos vacíos', text: 'Nombre exacto, categoría correcta, dirección, teléfono, horario, sitio web y descripción. Google premia las fichas completas y castiga las incompletas.' },
          { h3: '3. Elige bien la categoría', text: 'La categoría principal le dice a Google para qué búsquedas mostrarte. Elige la más precisa y suma categorías secundarias que apliquen de verdad.' },
          { h3: '4. Sube fotos reales y de calidad', text: 'Fachada, interior, productos, equipo, trabajos hechos. Las fichas con buenas fotos reciben más clics y llamadas. Actualízalas cada cierto tiempo.' },
          { h3: '5. Consigue reseñas y responde todas', text: 'Pide reseñas a tus clientes felices y responde cada una, buena o mala, con amabilidad. Las reseñas son el factor que más mueve el ranking local.' },
          { h3: '6. Publica novedades y mantén todo al día', text: 'Usa las publicaciones para ofertas y noticias, y mantén horario y datos siempre correctos. Un dato equivocado cuesta clientes y confianza.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo conseguir más reseñas en Google?',
        paragraphs: [
          'Las reseñas —cuántas, qué tan buenas y con qué frecuencia llegan— son el factor que más decide quién gana el recuadro de mapa. Para Google indican un negocio activo y real; para el cliente, son la prueba social que lo hace elegirte. Pídelas justo después de una buena experiencia, con un enlace directo que permita dejarla en dos toques: la mayoría de los clientes felices colabora si se lo pides, casi nadie lo hace por iniciativa propia.',
          'Responder también cuenta. Agradece las buenas reseñas y atiende las críticas con calma y soluciones, nunca a la defensiva: una respuesta profesional a una queja muestra cómo tratas a un cliente cuando algo sale mal.',
        ],
      },
      {
        type: 'prose',
        h2: 'La ficha de Google y tu web trabajan juntas',
        paragraphs: [
          'La ficha te hace aparecer en el mapa y capta al cliente listo para actuar; la web le da la información completa y le permite cotizar o comprar. Cuando ambas comparten datos consistentes —mismo nombre, dirección y teléfono— Google confía más en tu negocio. Ese vínculo, junto con páginas orientadas a tu zona, directorios coherentes y palabras clave locales bien <a href="/blog/como-elegir-palabras-clave-seo-panama/">elegidas</a>, es la esencia de lo que explicamos en <a href="/blog/que-es-el-seo-local-y-google-maps-panama/">qué es el SEO local y cómo dominar Google Maps</a>.',
          'Para negocios de barrio, servicio a domicilio o local físico, ficha optimizada más web local suele ser el canal de clientes más rentable. Si quieres que lo trabajemos por ti, revisa nuestro servicio de <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Tu ficha de Google es gratis, y aun así la mayoría la tiene abandonada.',
        strong: 'Ese descuido es tu oportunidad.',
      },
      {
        type: 'checklist',
        h2: 'Errores que hunden una ficha de Google',
        intro: 'Cualquiera de estos tropiezos te resta clientes de tu propia zona.',
        items: [
          'Nunca haber reclamado ni verificado la ficha',
          'Datos desactualizados: horario viejo, teléfono equivocado, dirección incorrecta',
          'Categoría mal elegida, que impide que Google te muestre en las búsquedas correctas',
          'Ninguna foto o fotos viejas de baja calidad',
          'Pocas reseñas o reseñas sin responder',
          'Nombre inflado con palabras clave, que va contra las reglas de Google',
          'Datos distintos entre la ficha, la web y los directorios',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Google Business Profile es gratis?', a: 'Sí, es completamente gratis. Google te da este espacio sin costo para representar a tu negocio en las búsquedas y en Maps. Lo único que "cuesta" es el tiempo de completarla bien, mantenerla al día y conseguir reseñas. Es, probablemente, la herramienta de marketing local con mejor retorno que existe.' },
          { q: '¿Necesito una tienda física para tener ficha?', a: 'No siempre. Si atiendes a clientes en una dirección, la muestras; si das servicio a domicilio o por zonas sin local visible, puedes configurar un área de servicio sin exponer una dirección. Lo importante es que la información refleje con honestidad cómo operas.' },
          { q: '¿Cómo consigo más reseñas sin incomodar?', a: 'Pídelas en el mejor momento, justo después de una buena experiencia, con un enlace directo que facilite dejarla en dos toques. La mayoría de los clientes felices colabora si se lo pones fácil. Lo que no debes hacer es comprar reseñas falsas: Google lo detecta y penaliza.' },
          { q: '¿La ficha reemplaza a mi página web?', a: 'No, se complementan. La ficha te hace aparecer en el mapa y capta al cliente listo para actuar; la web da la información completa, genera confianza y permite cotizar o comprar. Juntas, con datos consistentes, rinden mucho más que cada una por separado.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/que-es-el-seo-local-y-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'Servicio de SEO local' },
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Cómo aparecer primero en Google' },
          { slug: 'blog/como-elegir-palabras-clave-seo-panama', label: 'Cómo elegir palabras clave' },

          { slug: 'industrias/diseno-web-dentistas-odontologia-panama', label: 'Diseño web para dentistas' },
          { slug: 'industrias/diseno-web-talleres-automotriz-panama', label: 'Diseño web para talleres' },

          { slug: 'industrias/diseno-web-aire-acondicionado-refrigeracion-panama', label: 'Diseño web para aire acondicionado' },
        ],
      },
    ],
    cta: {
      h2: 'Aparece en el mapa cuando tus clientes te buscan',
      wa: 'Hola, quiero optimizar mi ficha de Google y aparecer en Maps. ¿Me ayudan?',
    },
  },

  /* ============================================================ 8 */
  {
    slug: 'blog/embudo-de-ventas-para-negocios-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Embudo de ventas: de visita a cliente, paso a paso',
    description: 'Qué es un embudo de ventas y cómo construir uno en Panamá: de la atracción al cierre, con web, WhatsApp y automatización.',
    h1: 'Embudo de ventas: cómo convertir visitas en clientes',
    breadcrumb: 'Embudo de ventas',
    category: 'Marketing',
    date: '2026-07-24',
    heroImage: {
      src: '/images/blog/embudo-de-ventas-para-negocios-panama.jpg',
      alt: 'Diagrama de un embudo de ventas para un negocio en Panamá',
    },
    lead: [
      'Un embudo de ventas es el recorrido que lleva a una persona de no conocerte a comprarte y volver. Para un negocio en Panamá tiene cuatro etapas —atracción, interés, decisión y fidelización— y suele romperse en dos puntos: cuando la web o el WhatsApp no convierten el interés en consulta, y cuando falta seguimiento después de la primera consulta.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es un embudo de ventas?',
        paragraphs: [
          'El embudo de ventas representa el recorrido desde que alguien oye hablar de ti hasta que te compra. Se llama embudo porque arriba entran muchos —todos los que te conocen— y abajo salen menos —los que compran—. Muchos negocios invierten en atraer visitas con pauta, redes o SEO y no venden porque falta ese camino: la gente llega, mira y se va.',
          'Perder gente en cada etapa es normal; perder de más es una fuga que cuesta dinero. Si mucha gente te conoce pero casi nadie te consulta, la fuga está arriba; si te consultan pero cierras poco, está abajo. Pensar en embudo ordena el trabajo: contenido para atraer, una web que convenza, un WhatsApp que responda y un seguimiento que cierre.',
        ],
      },
      {
        type: 'steps',
        h2: 'Las etapas del embudo de ventas, una por una',
        intro: 'Un embudo simple para un negocio panameño tiene cuatro etapas. En cada una, tu trabajo cambia.',
        items: [
          { h3: '1. Atracción (que te conozcan)', text: 'Aquí entran quienes aún no te conocen: llegan por SEO, redes, pauta o recomendación. El objetivo es aparecer donde tu cliente ya está buscando o navegando.' },
          { h3: '2. Interés (que te consideren)', text: 'La persona ya te vio y quiere saber más. Tu web, tu portafolio y tus reseñas hacen el trabajo de convencer y generar confianza para que dé el siguiente paso.' },
          { h3: '3. Decisión (que te escriba o compre)', text: 'El cliente está listo para actuar. Aquí importa un camino claro a la acción: botón de WhatsApp, cotización fácil, carrito simple. La fricción en esta etapa mata ventas.' },
          { h3: '4. Fidelización (que vuelva)', text: 'La venta no es el final. Un buen seguimiento, servicio y recordatorios hacen que el cliente repita y te recomiende. Vender de nuevo a quien ya te compró es lo más rentable.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cada etapa necesita una herramienta distinta',
        paragraphs: [
          'Un error común es intentar vender en la etapa de atracción, cuando la persona apenas te conoce, o esperar que un desconocido compre sin motivos para confiar. En la atracción trabajan el SEO, las redes y la pauta. En el interés trabaja tu web: una <a href="/diseno-web-panama/">página bien hecha</a>, con portafolio y reseñas, convierte al curioso en interesado. En la decisión trabaja el WhatsApp con un camino a la acción sin fricción, y en la fidelización, el seguimiento y el servicio.',
          'Con cada herramienta en su lugar, la pauta ya no manda tráfico a una web que no convence, el interesado encuentra cómo escribirte y el cliente no se olvida de ti después de comprar.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Dónde se rompe un embudo de ventas?',
        paragraphs: [
          'El primer punto de ruptura está entre el interés y la decisión: llega gente interesada, pero la web no convence, el WhatsApp tarda en responder o no hay un camino claro a la acción. Se repara con una web que convierta y una respuesta rápida a cada consulta.',
          'El segundo está después de la primera consulta: alguien pide precio, dice "lo pienso" y desaparece. La mayoría de las ventas se cierra en el segundo o tercer contacto, así que sin seguimiento esa venta se pierde. Un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA</a> que responde al instante y <a href="/saas/wazacrm/">WazaCRM</a> para que ninguna consulta quede sin seguimiento convierten esas fugas en ventas sin contratar más gente; el detalle está en cómo <a href="/blog/automatizar-seguimiento-clientes-panama/">automatizar el seguimiento de clientes</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'La mayoría de las ventas no se pierden por falta de tráfico.',
        strong: 'Se pierden por falta de seguimiento.',
      },
      {
        type: 'prose',
        h2: 'Cómo armar un embudo de ventas sencillo',
        paragraphs: [
          'Un embudo básico y efectivo funciona así: atraes con contenido y pauta local, envías a una web o landing que guía al WhatsApp, respondes rápido, das seguimiento ordenado hasta cerrar y mantienes el contacto para que el cliente vuelva. Un embudo simple sin huecos vende más que uno elaborado lleno de fugas.',
          'Cuando crece el volumen, conviene automatizar y medir cuántas visitas llegan, cuántas consultan y cuántas compran, para saber dónde está la fuga más cara. Lo explicamos en <a href="/blog/como-medir-los-resultados-de-tu-pagina-web/">cómo medir los resultados de tu página web</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Necesito herramientas caras para tener un embudo?', a: 'No. Un embudo básico se arma con lo que probablemente ya tienes: una web o landing, WhatsApp y algo de constancia en el seguimiento. Las herramientas de automatización y CRM ayudan cuando el volumen crece y quieres dejar de perder consultas, pero no son un requisito para empezar.' },
          { q: '¿En qué etapa suelo perder más clientes?', a: 'Casi siempre en dos: entre el interés y la decisión (llega gente pero la web no convence o el WhatsApp tarda) y después de la primera consulta (falta seguimiento). Como la mayoría de las ventas se cierran en el segundo o tercer contacto, no dar seguimiento es la fuga más cara.' },
          { q: '¿El embudo sirve para negocios de servicios y no solo tiendas?', a: 'Totalmente. Un profesional, una clínica, una constructora o una agencia también tienen embudo: alguien los conoce, considera, consulta y contrata. De hecho, en servicios el seguimiento pesa aún más, porque la decisión suele tomar más tiempo y varias conversaciones.' },
          { q: '¿Cómo sé dónde está la fuga de mi embudo?', a: 'Midiendo cada etapa: cuántas visitas llegan, cuántas consultan y cuántas compran. Si te conocen pero no consultan, la fuga está arriba; si consultan pero no cierras, está abajo. Sin medir es imposible saberlo, y por eso conviene configurar analítica desde el día uno.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-medir-los-resultados-de-tu-pagina-web', label: 'Cómo medir los resultados de tu web' },
          { slug: 'blog/crm-con-whatsapp-para-vender-mas-en-panama', label: 'CRM con WhatsApp para vender más' },
          { slug: 'inteligencia-artificial-para-empresas-panama', label: 'Ecosistema de IA empresarial' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },

          { slug: 'industrias/diseno-web-bienes-raices-panama', label: 'Diseño web para bienes raíces' },
          { slug: 'industrias/diseno-web-seguros-corredores-panama', label: 'Diseño web para corredores de seguros' },

          { slug: 'industrias/diseno-web-cooperativas-financieras-panama', label: 'Diseño web para cooperativas' },
        ],
      },
    ],
    cta: {
      h2: 'Convierte tus visitas en clientes, sin fugas',
      wa: 'Hola, quiero armar un embudo de ventas para mi negocio. ¿Me ayudan?',
    },
  },

  /* ============================================================ 9 */
  {
    slug: 'blog/automatizar-seguimiento-clientes-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cómo automatizar el seguimiento de clientes en Panamá',
    description: 'Cómo automatizar el seguimiento de clientes en Panamá con WhatsApp, CRM y flujos automáticos. Deja de perder ventas por olvido.',
    h1: 'Cómo automatizar el seguimiento de clientes y dejar de perder ventas',
    breadcrumb: 'Automatizar seguimiento',
    category: 'IA y Automatización',
    date: '2026-07-23',
    heroImage: {
      src: '/images/blog/automatizar-seguimiento-clientes-panama.jpg',
      alt: 'Silla de barbero vacía con una toalla en el apoyabrazos, en una guía sobre automatizar el seguimiento de clientes',
    },
    lead: [
      'Automatizar el seguimiento de clientes es usar un CRM, mensajes por WhatsApp y flujos automáticos para que ninguna consulta quede sin respuesta ni sin recordatorio. En Panamá, donde el seguimiento vive en WhatsApp, Elemento Web lo monta con WazaCRM, automatizaciones n8n y un chatbot con IA, para rescatar los "lo pienso" sin contratar más gente.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué el seguimiento es donde se pierden las ventas',
        paragraphs: [
          'Muy pocas ventas se cierran en el primer contacto: el cliente pregunta, compara, consulta con su pareja o su socio y decide días después. Si en ese lapso nadie vuelve a escribirle, la venta se enfría y se va con quien sí lo hizo. Son ventas casi ganadas —el cliente pidió precio— que se pierden por olvido, no por precio ni por producto.',
          'El seguimiento manual falla justo cuando hay volumen: con cinco consultas al día alguien se acuerda; con cincuenta, es imposible, y se mezclan entre mil conversaciones.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué significa automatizar el seguimiento de clientes?',
        paragraphs: [
          'No es mandar mensajes robóticos a todo el mundo. Es un sistema que asegura que ninguna consulta quede sin respuesta ni continuidad: un CRM donde toda consulta queda registrada, reglas que definen qué pasa después de cada interacción y mensajes automáticos que recuerdan, informan o reactivan sin que nadie tenga que acordarse.',
          'Lo automático libera lo humano: en vez de copiar, pegar y recordar, tu equipo dedica su tiempo a las conversaciones que necesitan criterio y trato personal.',
        ],
      },
      {
        type: 'steps',
        h2: 'Qué puedes automatizar del seguimiento',
        intro: 'Estos son los momentos donde la automatización rescata más ventas. No hace falta hacerlos todos de golpe.',
        items: [
          { h3: 'Respuesta inmediata a cada consulta', text: 'Un mensaje o un asistente que responde al instante, aunque sea fuera de horario, evita que el cliente se enfríe o se vaya con la competencia mientras espera.' },
          { h3: 'Recordatorio tras una cotización', text: 'Si el cliente recibió precio y no respondió, un recordatorio amable a los pocos días reactiva la conversación y rescata ventas que estaban dormidas.' },
          { h3: 'Seguimiento de carritos y pedidos', text: 'Recordar un carrito abandonado, confirmar un pedido o avisar de un envío, todo automático, mantiene al cliente informado y tranquilo.' },
          { h3: 'Reactivación de clientes antiguos', text: 'Un mensaje a quien te compró hace tiempo, con una novedad o una oferta, despierta ventas de gente que ya confía en ti.' },
          { h3: 'Confirmaciones y recordatorios de citas', text: 'Para negocios con agenda, confirmar y recordar citas automáticamente reduce las ausencias y ahorra llamadas.' },
          { h3: 'Encuestas y pedido de reseñas', text: 'Tras una compra o servicio, pedir opinión o una reseña en Google de forma automática mejora tu reputación sin esfuerzo manual.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué herramientas se usan para automatizar el seguimiento?',
        paragraphs: [
          'En Panamá el seguimiento vive en WhatsApp, porque es donde la gente lee y responde. El centro del sistema es <a href="/saas/wazacrm/">WazaCRM</a>: guarda el historial de cada conversación y dispara recordatorios para que ninguna venta se caiga por olvido. Con <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones (n8n)</a> conectas web, tienda, calendario y WhatsApp, de modo que una consulta, una compra o una cita dispare sola la acción correcta.',
          'Un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA</a> atiende la primera línea y filtra interesados. IA que responde, CRM que ordena y flujos que ejecutan forman un <a href="/inteligencia-artificial-para-empresas-panama/">ecosistema de IA empresarial</a>: seguimiento que trabaja 24/7. Para ver dónde encaja cada pieza en el recorrido del cliente, lee <a href="/blog/embudo-de-ventas-para-negocios-panama/">embudo de ventas para negocios en Panamá</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'La venta rara vez se pierde en el "no".',
        strong: 'Se pierde en el "lo pienso" que nadie volvió a seguir.',
      },
      {
        type: 'prose',
        h2: 'El toque humano no desaparece: se enfoca',
        paragraphs: [
          'Bien hecha, la automatización no enfría el trato: se encarga de recordar, confirmar y avisar, y le devuelve tiempo a tu equipo para entender, aconsejar y cerrar.',
          'La regla es diseñar puntos de traspaso: un cliente listo para comprar, una duda compleja o una queja delicada pasan a alguien de tu equipo, avisado a tiempo por el sistema. Lo automático abre la puerta; la persona cierra el trato.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Automatizar el seguimiento vuelve frío el trato?', a: 'No, si se hace bien. La automatización se encarga de lo repetitivo —recordar, confirmar, avisar— y libera a tu equipo para las conversaciones que sí requieren una persona. Se diseñan puntos donde el flujo le pasa el cliente a un humano en el momento justo, así que el trato se enfoca, no se enfría.' },
          { q: '¿Necesito saber de tecnología para esto?', a: 'No. La idea es justamente que el sistema trabaje por ti. Nosotros montamos el CRM, los flujos y el asistente, y tu equipo solo usa el WhatsApp de siempre. La complejidad queda del lado de quien lo construye; tú recibes un seguimiento que funciona solo.' },
          { q: '¿Es solo para tiendas online?', a: 'Para nada. Cualquier negocio que reciba consultas se beneficia: servicios profesionales, clínicas, constructoras, agencias, comercios. De hecho, en servicios el seguimiento pesa aún más, porque la decisión toma más tiempo y varias conversaciones antes de cerrar.' },
          { q: '¿Por dónde conviene empezar?', a: 'Por lo que más ventas te está costando hoy, que casi siempre es el seguimiento tras una cotización. Empezar con una respuesta rápida a cada consulta y un recordatorio automático a quien no contestó suele dar el mayor salto con el menor esfuerzo. Desde ahí se va sumando el resto.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/crm-con-whatsapp-para-vender-mas-en-panama', label: 'CRM con WhatsApp para vender más' },
          { slug: 'blog/automatizaciones-con-n8n-para-pymes', label: 'Automatizaciones con n8n para pymes' },
          { slug: 'inteligencia-artificial-para-empresas-panama', label: 'Ecosistema de IA empresarial' },
          { slug: 'blog/como-atender-clientes-24-7-con-un-asistente-de-ia', label: 'Atender clientes 24/7 con IA' },

          { slug: 'industrias/diseno-web-bienes-raices-panama', label: 'Diseño web para bienes raíces' },
          { slug: 'industrias/diseno-web-seguros-corredores-panama', label: 'Diseño web para corredores de seguros' },
        ],
      },
    ],
    cta: {
      h2: 'Deja de perder ventas por falta de seguimiento',
      wa: 'Hola, quiero automatizar el seguimiento de mis clientes. ¿Me ayudan a montarlo?',
    },
  },
];
