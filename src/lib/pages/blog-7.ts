/* BLOG — Lote 7: nueve guías long-form extendidas (≈3x), SEO-first.
   Cada objeto es una PageData con parent { slug: 'blog' }; el listado /blog las
   recoge por fecha y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog7: PageData[] = [
  /* ============================================================ 1 */
  {
    slug: 'blog/diseno-web-responsive-mobile-first-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web responsive: por qué tu web debe pensarse primero para el celular',
    description:
      'Qué es el diseño web responsive y por qué en Panamá tu página debe diseñarse primero para el celular. Errores típicos en móvil y cómo lograr una web que carga y convierte en cualquier pantalla.',
    h1: 'Diseño web responsive: por qué tu web debe pensarse primero para el celular',
    breadcrumb: 'Diseño web responsive',
    category: 'Diseño web',
    date: '2026-07-31',
    heroImage: {
      src: '/images/blog/diseno-web-responsive-mobile-first-panama.jpg',
      alt: 'Persona navegando una página web en su celular en Panamá',
    },
    lead: [
      'Abre tu propia página en el celular ahora mismo, con datos móviles y sin tocar nada más. Si tuviste que hacer zoom para leer, si un botón quedó pegado al borde o si tardó en aparecer, acabas de vivir lo que sienten la mayoría de tus visitantes. Porque en Panamá la web se ve, sobre todo, desde un teléfono.',
      'El diseño responsive no es un detalle técnico que se resuelve al final: es la diferencia entre una web que vende en cualquier pantalla y una que se rompe justo donde tienes más tráfico. En esta guía te explicamos qué es, por qué conviene diseñar primero para móvil y cómo saber si tu sitio está dejando clientes en el camino.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué significa realmente "responsive"',
        paragraphs: [
          'Una web responsive es la que se adapta sola a la pantalla desde la que se abre: se reordena, cambia el tamaño de los textos, apila las columnas y ajusta las imágenes para que todo se lea y se toque cómodo, sea un celular, una tablet o un monitor. No es una versión aparte "para móvil": es el mismo sitio, construido para acomodarse a cualquier tamaño.',
          'La alternativa —una web pensada solo para escritorio— obliga al visitante a hacer zoom, a desplazarse de lado y a pelear con botones diminutos. Cada uno de esos micro-esfuerzos es una excusa para cerrar la pestaña. Y como casi nadie se queja, el negocio nunca se entera de cuántos clientes perdió por algo tan reparable.',
          'Responsive tampoco es solo "que se vea". Es que se lea rápido, que los formularios se llenen con el pulgar, que el botón de WhatsApp esté siempre a mano y que la información importante aparezca sin tener que buscarla. La adaptación visual es la parte fácil; la experiencia es lo que convierte.',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué en Panamá se diseña primero para móvil',
        paragraphs: [
          'La gran mayoría de las visitas a los sitios de negocios panameños llega desde un teléfono. La gente busca un restaurante mientras camina, compara precios en la fila del banco o pide una cotización desde el sofá. El escritorio existe, pero es la minoría, y muchas veces es la segunda visita, no la primera.',
          'Diseñar "mobile-first" significa empezar por la pantalla más exigente y luego crecer hacia la grande, no al revés. Al partir del celular estás obligado a decidir qué es lo esencial: qué mensaje va primero, qué botón importa, qué se puede quitar. Esa disciplina hace mejor a toda la web, incluso en escritorio.',
          'Cuando se hace al revés —diseñar bonito en pantalla ancha y luego "apretar" todo para el móvil— el resultado casi siempre falla donde más duele: menús que no abren, textos cortados, imágenes que pesan de más y formularios imposibles de llenar con una mano. Es el origen silencioso de la mayoría de las ventas perdidas.',
        ],
      },
      {
        type: 'steps',
        h2: 'Los errores de móvil que más clientes cuestan',
        intro: 'Revisa tu web en el celular pensando en cada punto. Basta con dos o tres de estos para estar perdiendo mensajes todos los días.',
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
        h2: 'Velocidad y responsive van de la mano',
        paragraphs: [
          'No sirve de nada que la web se vea perfecta en el celular si tarda cinco segundos en aparecer. En móvil, la paciencia es corta y la conexión es variable, así que la velocidad es parte inseparable del diseño responsive. Una imagen sin optimizar o un constructor recargado pueden arruinar la mejor maquetación.',
          'La buena noticia es que casi todo se optimiza: comprimir imágenes, cargar solo lo necesario, evitar librerías pesadas y elegir un hosting decente. Si quieres profundizar, escribimos una guía completa sobre <a href="/blog/como-mejorar-la-velocidad-de-tu-pagina-web/">cómo mejorar la velocidad de carga de tu página web</a> con pasos concretos.',
          'Google además usa la experiencia en móvil como señal de posicionamiento. Una web lenta o difícil de usar en el teléfono no solo pierde clientes: pierde lugares en los resultados de búsqueda. Responsive bien hecho es, al mismo tiempo, mejor conversión y mejor SEO.',
        ],
      },
      {
        type: 'statement',
        text: 'Tu web no se prueba en el monitor del diseñador. Se prueba',
        strong: 'en el celular de tu cliente, con datos móviles y una sola mano.',
      },
      {
        type: 'prose',
        h2: 'Cómo saber si tu web ya es responsive de verdad',
        paragraphs: [
          'La prueba más honesta es también la más simple: usa tu sitio como lo usaría un cliente apurado. Ábrelo en tu teléfono, sin wifi, e intenta completar la acción principal —cotizar, comprar, agendar, escribir por WhatsApp— sin ayuda. Si en algún punto dudaste o te frustraste, ahí está el problema.',
          'Fíjate en detalles concretos: ¿se lee todo sin zoom?, ¿los botones se tocan fácil?, ¿el WhatsApp está siempre visible?, ¿las imágenes cargan rápido?, ¿el formulario se llena sin pelear? Una web responsive de verdad hace que todo eso pase sin que el visitante lo note. La comodidad invisible es la señal de que está bien hecha.',
          'Si al probarla encontraste varios tropiezos, no siempre hay que empezar de cero. Muchas veces un <a href="/servicios/redisenio-web-panama/">rediseño</a> enfocado corrige la experiencia móvil y conserva el contenido y el posicionamiento que ya tenías. Lo importante es no dejar el problema porque "en la computadora se ve bien".',
        ],
      },
      {
        type: 'checklist',
        h2: 'Checklist rápido de una web responsive que convierte',
        intro: 'Si tu sitio cumple con todo esto, vas por buen camino. Si falla en varios, es momento de revisarlo.',
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
    title: 'Rediseño de página web: 8 señales de que tu sitio ya necesita uno',
    description:
      'Cómo saber cuándo hacer un rediseño de página web: 8 señales claras de que tu sitio quedó atrás, qué se puede conservar y cómo rediseñar sin perder tu posicionamiento en Google.',
    h1: 'Rediseño de página web: 8 señales de que tu sitio ya necesita uno',
    breadcrumb: 'Cuándo rediseñar tu web',
    category: 'Diseño web',
    date: '2026-07-30',
    heroImage: {
      src: '/images/blog/cuando-hacer-rediseno-pagina-web.jpg',
      alt: 'Equipo revisando el rediseño de una página web',
    },
    lead: [
      'Casi nadie decide rediseñar su web de un día para otro. La duda se acumula: se ve algo vieja, tarda en cargar, ya casi no llegan mensajes por ahí. Pero como sigue "funcionando", se posterga temporada tras temporada, mientras la competencia con un sitio fresco se lleva a los clientes que dudan.',
      'Un rediseño no es cambiar el color por gusto. Es recuperar una herramienta de venta que dejó de rendir. En esta guía repasamos las ocho señales que indican que tu sitio ya pide un rediseño, qué se puede conservar y cómo hacerlo sin tirar a la basura el posicionamiento que tanto costó ganar.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Rediseñar no es un capricho estético',
        paragraphs: [
          'Es fácil pensar en el rediseño como una cuestión de moda: cambiar la tipografía, refrescar los colores, poner fotos nuevas. Pero un buen rediseño ataca el fondo, no la superficie. Se hace cuando la web dejó de cumplir su trabajo: no atrae, no convierte, no se puede administrar o no aparece en Google.',
          'La estética importa, claro, porque comunica seriedad en los primeros segundos. Sin embargo, un sitio bonito que carga lento y no genera consultas sigue siendo un mal negocio. Por eso el rediseño debe empezar por una pregunta incómoda: ¿qué debería lograr esta web que hoy no está logrando?',
          'Cuando se responde esa pregunta, el rediseño deja de ser gasto y se vuelve inversión. Cada decisión —estructura, contenido, velocidad, llamados a la acción— apunta a un objetivo de negocio concreto, y el resultado se mide en mensajes, ventas o citas, no en cuántos "me gusta" recibió el nuevo look.',
        ],
      },
      {
        type: 'steps',
        h2: 'Las 8 señales de que tu web necesita un rediseño',
        intro: 'Marca mentalmente cuáles reconoces en tu propio sitio. Con tres o más, el rediseño deja de ser opcional.',
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
        h2: 'Rediseño no siempre significa empezar de cero',
        paragraphs: [
          'Una de las mayores confusiones es creer que rediseñar obliga a tirar todo y volver a empezar. No siempre. Buena parte del valor de una web —su contenido, sus textos de venta, sus URLs posicionadas, sus fotos— puede y debe conservarse. El rediseño ordena, moderniza y corrige, sin desperdiciar lo que ya funciona.',
          'Lo que sí cambia es lo que estaba frenando al sitio: la estructura confusa, la lentitud, la falta de SEO técnico, los llamados a la acción invisibles. Es como remodelar un local con buena ubicación: conservas lo bueno y arreglas lo que espantaba a los clientes.',
          'Cuando la base es demasiado frágil —una plantilla lenta, sin mantenimiento y difícil de administrar— a veces sí conviene reconstruir sobre cimientos nuevos. Pero incluso ahí se migra el contenido y las URLs con cuidado, para no perder el terreno ganado en Google.',
        ],
      },
      {
        type: 'prose',
        h2: 'El error caro: rediseñar y perder el SEO',
        paragraphs: [
          'El riesgo más común de un rediseño mal hecho es despertar un lunes con la web nueva y, sin darse cuenta, haber borrado meses o años de posicionamiento. Pasa cuando se cambian las direcciones (URLs) sin redirigir las antiguas, cuando se pierden los textos que Google ya valoraba o cuando la nueva versión olvida el SEO técnico.',
          'Evitarlo es cuestión de método. Antes de rediseñar se mapea qué páginas traen tráfico y qué palabras clave las sostienen. Si una URL cambia, se configura una redirección para que el visitante —y Google— lleguen al lugar correcto. El contenido valioso se conserva y se mejora, no se elimina.',
          'Por eso un rediseño serio no es solo un trabajo de diseño: es también de estrategia y SEO. Si quieres entender cómo se posiciona una web en Panamá, lee <a href="/blog/como-aparecer-primero-en-google-en-panama/">cómo aparecer primero en Google</a>; ahí verás por qué conservar ese trabajo es tan importante.',
        ],
      },
      {
        type: 'statement',
        text: 'Un rediseño bien hecho no borra tu historia en Google:',
        strong: 'la conserva y la hace rendir mejor.',
      },
      {
        type: 'prose',
        h2: 'Qué esperar de un rediseño bien planteado',
        paragraphs: [
          'Un rediseño ordenado empieza por entender el negocio y el cliente, no por elegir colores. Se define qué debe lograr la web, se revisa qué contenido conservar, se rediseña la estructura para que cada servicio importante tenga su lugar y se construye pensando primero en el celular y en la velocidad.',
          'El resultado no es solo "más bonito". Es una web que aparece en Google, carga rápido, guía al visitante hacia la acción y se puede administrar sin depender de nadie. Muchos negocios aprovechan el rediseño para sumar piezas que antes no tenían, como un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a> o un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a>.',
          'Sobre todo, un buen rediseño se cierra con una cotización por escrito y un plazo claro, para que sepas exactamente qué recibirás y cuándo. Si tienes dudas sobre a quién confiárselo, revisa nuestra guía para <a href="/blog/como-elegir-agencia-diseno-web-panama/">elegir una agencia de diseño web</a> sin arrepentirte.',
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
    description:
      'Diferencias entre una landing page y un sitio web completo, cuándo conviene cada uno y cuánto cuestan en Panamá. Guía para elegir bien y no gastar de más ni quedarte corto.',
    h1: 'Landing page vs sitio web: cuál necesita tu negocio',
    breadcrumb: 'Landing page vs sitio web',
    category: 'Diseño web',
    date: '2026-07-29',
    heroImage: {
      src: '/images/blog/landing-page-vs-sitio-web-cual-necesitas.jpg',
      alt: 'Comparación entre una landing page y un sitio web en dos pantallas',
    },
    lead: [
      'Cuando un negocio decide dar el salto a internet, casi siempre aparece la misma bifurcación: ¿hago una landing page enfocada o un sitio web completo? La respuesta equivocada cuesta caro en las dos direcciones: pagar de más por un sitio grande que no necesitas, o quedarte corto con una sola página cuando tu negocio pedía más.',
      'La verdad es que no hay un ganador absoluto; hay una herramienta correcta para cada objetivo. En esta guía te explicamos en qué se diferencian, cuándo conviene cada una, cuánto cuestan en Panamá y cómo elegir sin arrepentirte. Al final tendrás claro qué pedir en tu próxima cotización.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es una landing page (y qué no es)',
        paragraphs: [
          'Una landing page es una sola página con un único objetivo y una sola acción. Todo en ella —el titular, las imágenes, los textos, el botón— empuja al visitante hacia un mismo lugar: cotizar, comprar un producto, reservar un cupo o dejar sus datos. No tiene menú lleno de secciones porque no quiere que te distraigas; quiere que actúes.',
          'Su fuerza está en el enfoque. Al no dispersar la atención, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de alta conversión</a> suele rendir muchísimo cuando la respalda una campaña de pauta. Mandas el tráfico de Google o Meta a esa página, y esa página tiene un solo trabajo: convertir a ese visitante en cliente.',
          'Lo que una landing no es: no es el lugar para contar toda la historia de tu empresa, listar tus doce servicios o construir presencia de marca a largo plazo. Cuando intenta hacer todo eso, deja de ser landing y se convierte en una página larga y confusa que no convierte ni posiciona.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué es un sitio web completo',
        paragraphs: [
          'Un sitio web completo es un conjunto de páginas conectadas: inicio, servicios, sobre nosotros, portafolio, contacto, blog. Cada sección cumple una función y, en conjunto, construyen presencia, confianza y posicionamiento. Es la casa digital del negocio, no una vitrina de una sola oferta.',
          'Su gran ventaja es el SEO. Cuando cada servicio importante tiene su propia página optimizada, Google puede mostrarte para muchas búsquedas distintas, y ese tráfico llega gratis mes tras mes. Una <strong>Página PYME</strong> bien estructurada es una máquina de captar clientes que buscan lo que ofreces, sin pagar por cada clic.',
          'El sitio completo también da espacio para crecer: sumar un blog que atrae visitas, un catálogo, un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> o una tienda. Es la opción para el negocio que piensa en internet como un canal permanente, no como una campaña puntual.',
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
          { h3: 'Inversión', text: 'La landing parte desde $550; una Página PYME desde $950, según páginas e integraciones.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo conviene una landing page',
        paragraphs: [
          'La landing es la herramienta correcta cuando tienes una oferta concreta y quieres resultados rápidos. Vas a lanzar una campaña en Google o Meta, promocionas un producto estrella, abres inscripciones a un curso o un evento, o pruebas una idea de negocio antes de invertir en algo más grande. En todos esos casos, el enfoque de una sola página trabaja a tu favor.',
          'También es ideal cuando el negocio es muy claro y directo: un servicio, un mensaje, una acción. Si lo único que necesitas es que el cliente te escriba por WhatsApp o compre un producto, una landing sólida cumple sin sobrar. Y como es más rápida de producir, sale antes al aire.',
          'Muchos negocios empiezan por aquí con inteligencia: lanzan una landing bien hecha, validan que genera consultas y luego crecen hacia un sitio completo sobre esa base. Es una forma prudente de entrar cuando el presupuesto aprieta, sin caer en la trampa de una web mala barata.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo conviene un sitio web completo',
        paragraphs: [
          'El sitio completo es la elección cuando tu negocio ofrece varios servicios o productos, cada uno con su propio cliente y su propia búsqueda en Google. Si vendes solo con una landing, le estás pidiendo a una página que hable de todo, y Google no sabe por qué mostrarte. Con una página por servicio, en cambio, apareces para cada búsqueda relevante.',
          'También conviene cuando la confianza es parte de la venta. Un cliente que va a contratar un servicio importante quiere ver quién eres, qué has hecho y por qué confiar. Secciones como portafolio, sobre nosotros y testimonios hacen ese trabajo que una landing sola no puede.',
          'Y es la base para crecer: blog para atraer visitas, tienda para vender, reservas para agendar, automatizaciones para no perder consultas. Si tu visión de internet es de largo plazo, el sitio completo es el terreno donde todo eso cabe. Puedes ver ejemplos reales en nuestro <a href="/portafolio/">portafolio</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'La pregunta no es cuál es mejor, sino',
        strong: 'cuál resuelve tu objetivo hoy sin cerrarte la puerta a mañana.',
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta cada una en Panamá',
        paragraphs: [
          'Una landing page de alta conversión parte desde $550: una sola página enfocada, con diseño a medida y botón directo a WhatsApp. Es la inversión más contenida para empezar a captar con una oferta clara.',
          'Un sitio web tipo Página PYME parte desde $950 e incluye varias secciones, una página por servicio con SEO y un panel para administrarlo tú. Si el proyecto necesita catálogo y pagos, una tienda online parte desde $1,500, y un sitio corporativo a medida se cotiza desde $2,900. En todos los casos, el precio se cierra por escrito antes de empezar.',
          'Si quieres el panorama completo de precios y qué encarece un proyecto, lo desglosamos en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>. La regla de oro: no elijas por precio, elige por objetivo, y deja que el objetivo defina el formato.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Una landing page sirve para posicionar en Google?', a: 'Poco. Una sola página compite por muy pocas búsquedas y no da a Google suficientes motivos para mostrarte en muchas consultas. Para SEO conviene un sitio completo con una página por servicio. La landing brilla más con pauta pagada que con posicionamiento orgánico.' },
          { q: '¿Puedo empezar con una landing y luego crecer?', a: 'Sí, y es una estrategia muy sensata cuando el presupuesto es ajustado. Lanzas una landing sólida, validas que genera consultas y luego construyes el sitio completo sobre esa base. Lo importante es que la landing esté bien hecha desde el inicio, no una plantilla barata.' },
          { q: '¿Qué necesito si voy a hacer pauta en Google o Meta?', a: 'Para pauta, una landing page enfocada suele convertir mejor que mandar el tráfico a la página de inicio de un sitio completo, porque elimina distracciones y guía a una sola acción. Muchos negocios tienen su sitio y, además, landings específicas para cada campaña.' },
          { q: '¿Cuál es más barata?', a: 'La landing, porque es una sola página. Parte desde $550, frente a los $950 de una Página PYME. Pero "más barata" no significa "mejor" en todos los casos: si tu negocio necesita posicionar varios servicios, ahorrar con una landing puede costarte el tráfico gratis que solo un sitio completo genera.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una web?' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
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
    title: 'Cómo aumentar las ventas de tu tienda online en Panamá: 9 tácticas que funcionan',
    description:
      'Nueve tácticas prácticas para aumentar las ventas de tu tienda online en Panamá: velocidad, pagos locales como Yappy, WhatsApp, recuperación de carritos y confianza. Guía aplicable hoy.',
    h1: 'Cómo aumentar las ventas de tu tienda online en Panamá',
    breadcrumb: 'Aumentar ventas online',
    category: 'E-commerce',
    date: '2026-07-28',
    heroImage: {
      src: '/images/blog/como-aumentar-ventas-tienda-online-panama.jpg',
      alt: 'Dueño de una tienda online revisando sus ventas en Panamá',
    },
    lead: [
      'Tienes la tienda online montada, los productos cargados y algo de tráfico entrando, pero las ventas no despegan como esperabas. Es una de las frustraciones más comunes, y casi nunca se debe a una sola causa grande: son varias fugas pequeñas que, sumadas, dejan escapar al cliente justo antes de pagar.',
      'La buena noticia es que la mayoría de esas fugas se tapan sin rehacer la tienda. En esta guía repasamos nueve tácticas concretas, pensadas para el comprador panameño, que mejoran la conversión de una tienda que ya existe. No son teorías: son ajustes que puedes empezar a aplicar esta misma semana.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Antes de vender más, tapa las fugas',
        paragraphs: [
          'Aumentar ventas no siempre significa traer más visitas. Muchas veces significa perder menos de las que ya tienes. Si por tu tienda pasan cien personas y solo compra una, traer otras cien no arregla el problema de fondo: arregla el síntoma y te sale carísimo en pauta.',
          'Por eso conviene mirar primero la conversión —qué porcentaje de visitantes termina comprando— y luego el tráfico. Una tienda que convierte bien multiplica cada dólar de publicidad; una que convierte mal lo desperdicia. El orden correcto es tapar fugas, después abrir la llave del tráfico.',
          'Las fugas más caras suelen estar en tres lugares: la velocidad, la confianza y el momento del pago. Las nueve tácticas que siguen atacan justo esos puntos, en el orden en que más impacto tienen para una tienda en Panamá.',
        ],
      },
      {
        type: 'steps',
        h2: '9 tácticas para vender más en tu tienda online',
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
        h2: 'Los pagos locales cambian el juego',
        paragraphs: [
          'Si hay una sola táctica que mueve la aguja en Panamá, es ofrecer los métodos de pago que la gente ya usa. Muchos compradores no tienen tarjeta a mano o simplemente prefieren Yappy por costumbre y confianza. Si tu tienda solo acepta tarjeta, estás perdiendo a todos ellos en el último y más importante paso.',
          'Integrar <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy y pasarelas de pago</a> elimina esa fricción. El cliente paga como quiere, sin salir de la tienda ni improvisar. Y cada forma de pago que agregas es una excusa menos para abandonar la compra.',
          'Si quieres el detalle de cómo conectarlo, escribimos una guía paso a paso sobre <a href="/blog/como-integrar-yappy-tu-tienda-online/">cómo integrar Yappy en tu tienda online</a>. Es, probablemente, el ajuste con mejor retorno que puede hacer una tienda panameña que aún no lo tiene.',
        ],
      },
      {
        type: 'prose',
        h2: 'La confianza vende tanto como el producto',
        paragraphs: [
          'Comprar en línea es un acto de fe: el cliente entrega su dinero sin ver ni tocar lo que recibe. En una tienda nueva o poco conocida, esa fe es frágil, y cualquier señal de duda —una foto borrosa, una política de envío ausente, la falta de reseñas— la rompe. Ganar confianza es, muchas veces, ganar la venta.',
          'Los elementos que generan confianza no son caros: fotos reales de los productos, opiniones de clientes, políticas de envío y devolución claras, formas de contacto visibles y un sitio que se ve profesional y seguro. Cada uno responde, sin palabras, la pregunta que el comprador se hace en silencio: ¿puedo confiar en esta tienda?',
          'El certificado de seguridad (SSL), un diseño cuidado y un WhatsApp que responde rápido completan el cuadro. La confianza no se pide, se demuestra en cada detalle, y en el comercio en línea es la diferencia entre una tienda que vende y una que solo recibe visitas.',
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
          'A medida que la tienda crece, hay tareas que empiezan a comerse el día: responder las mismas preguntas, recordarle al cliente su carrito, confirmar pedidos, avisar de envíos. Hacer todo eso a mano no escala, y cada mensaje que se enfría por demora es una venta que se apaga.',
          'Aquí es donde la automatización paga sola. Un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a> responde las dudas frecuentes al instante y filtra a quien está listo para comprar. Los recordatorios de carrito y las confirmaciones de pedido salen solos, sin que nadie tenga que acordarse.',
          'Y cuando quieres vender a los clientes que ya te compraron, un buen seguimiento automatizado hace el trabajo pesado. Si te interesa, cuéntamos cómo un <a href="/saas/wapycrm/">CRM de ventas por WhatsApp</a> ordena ese seguimiento para que ningún cliente se pierda entre conversaciones.',
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
    title: 'Carritos abandonados: por qué pierdes ventas y cómo recuperarlas',
    description:
      'Por qué los clientes abandonan el carrito en tu tienda online y cómo recuperar esas ventas con recordatorios por WhatsApp y correo, checkout simple y pagos locales. Guía para Panamá.',
    h1: 'Carritos abandonados: por qué pierdes ventas y cómo recuperarlas',
    breadcrumb: 'Carritos abandonados',
    category: 'E-commerce',
    date: '2026-07-27',
    heroImage: {
      src: '/images/blog/carritos-abandonados-como-recuperar-ventas.jpg',
      alt: 'Carrito de compras abandonado en una tienda online',
    },
    lead: [
      'De cada diez personas que llenan el carrito en una tienda online, la mayoría se va sin pagar. No es un problema tuyo en particular: es el comportamiento normal del comprador en internet. Lo que sí marca la diferencia entre una tienda que crece y una que se estanca es cuántas de esas ventas casi cerradas logra recuperar.',
      'El carrito abandonado es la venta más barata de recuperar que existe, porque le hablas a alguien que ya quería comprar. En esta guía vemos por qué la gente abandona, cómo reducir esos abandonos desde el diseño de la tienda y cómo rescatar las ventas que se escaparon con recordatorios bien hechos.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué la gente abandona el carrito',
        paragraphs: [
          'El abandono casi nunca es un rechazo al producto: es una fricción en el camino. El cliente ya decidió que quiere lo que ofreces —por eso lo puso en el carrito— pero algo en el proceso lo hizo dudar, distraerse o rendirse. Entender esos "algos" es el primer paso para taparlos.',
          'Los motivos más comunes se repiten en toda tienda: costos de envío que aparecen recién al final, la obligación de crear una cuenta, un checkout largo con demasiados campos, la falta del método de pago que la persona usa, o simplemente una duda que nadie respondió a tiempo. Cada uno es un punto donde la venta se enfría.',
          'También hay abandonos "sanos": gente comparando, guardando para después o interrumpida por la vida. Esos no se pierden del todo, y son justamente los que un buen recordatorio puede rescatar. La clave es distinguir la fricción evitable del abandono natural, y trabajar sobre ambos.',
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
        h2: 'El envío sorpresa: el asesino silencioso',
        paragraphs: [
          'Si tuviéramos que señalar un solo culpable del abandono, sería el costo de envío que aparece de golpe en el último paso. El cliente hizo todo el recorrido pensando en un precio, y al final le suman una cifra que no esperaba. La sensación de "me querían sorprender" pesa más que el monto en sí, y muchos cierran la pestaña por principio.',
          'La solución es la transparencia temprana. Muestra los costos de envío desde el inicio, ofrece una calculadora en la ficha del producto o, mejor aún, un umbral de envío gratis ("gratis a partir de X"). Cuando el cliente conoce las reglas desde el comienzo, llega al pago sin sorpresas y sin motivos para arrepentirse.',
          'El envío gratis a partir de cierto monto tiene además un efecto secundario útil: empuja al cliente a agregar un producto más para alcanzarlo. Bien calibrado, no solo reduce el abandono: sube el ticket promedio de cada compra.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo recuperar los carritos que ya se fueron',
        paragraphs: [
          'Aquí está la parte más rentable: rescatar al que ya se fue. Cuando alguien deja el carrito lleno, un recordatorio oportuno puede traerlo de vuelta. La herramienta más poderosa en Panamá es el WhatsApp, porque es donde la gente realmente lee y responde, seguido del correo para quienes dejaron su email.',
          'El recordatorio funciona mejor cuando es rápido, amable y útil: un mensaje a las pocas horas recordando lo que quedó en el carrito, resolviendo la posible duda y facilitando el pago con un enlace directo. A veces basta con eso; otras veces un pequeño incentivo —envío gratis, un descuento moderado— termina de convencer.',
          'Hacer esto a mano no escala. Por eso conviene automatizarlo: un flujo que detecta el carrito abandonado y dispara el recordatorio solo, sin que nadie tenga que acordarse. Un <a href="/saas/wapycrm/">CRM de ventas por WhatsApp</a> o una <a href="/marketing/automatizaciones-n8n-panama/">automatización</a> hacen ese trabajo día y noche.',
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
          'Una secuencia efectiva no es un solo mensaje, sino unos pocos, bien espaciados. El primero, a las pocas horas, es un recordatorio suave: "dejaste esto en tu carrito, aquí lo tienes para terminar". El segundo, al día siguiente, resuelve dudas o suma una razón para decidir. Un tercero, más adelante, puede incluir un incentivo si aún no compró.',
          'La clave es no ser insistente ni desesperado. Dos o tres mensajes útiles rescatan ventas; diez mensajes al día espantan al cliente y te mandan a spam. El tono importa tanto como el momento: ayudas a terminar una compra que la persona ya quería hacer, no persigues a nadie.',
          'Combinada con una tienda sin fricciones, esta secuencia recupera una parte real de las ventas que hoy se pierden en silencio. Si además atiendes rápido las dudas con un <a href="/blog/como-atender-clientes-24-7-con-un-asistente-de-ia/">asistente de IA que responde 24/7</a>, cierras el círculo: menos abandonos y más rescates.',
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
          { slug: 'saas/wapycrm', label: 'CRM de ventas por WhatsApp' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },
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
    description:
      'Guía práctica para elegir palabras clave de SEO en Panamá: intención de búsqueda, palabras locales y de cola larga, y cómo asignarlas a cada página para atraer clientes que compran.',
    h1: 'Cómo elegir las palabras clave que sí traen clientes',
    breadcrumb: 'Palabras clave',
    category: 'SEO',
    date: '2026-07-26',
    heroImage: {
      src: '/images/blog/como-elegir-palabras-clave-seo-panama.jpg',
      alt: 'Investigación de palabras clave para SEO en Panamá',
    },
    lead: [
      'Puedes tener la web más bonita del mundo, pero si está optimizada para palabras que nadie busca —o que buscan personas que jamás te comprarán— no traerá un solo cliente. Elegir bien las palabras clave es la decisión de SEO que más pesa, y la que más negocios pasan por alto.',
      'No se trata de perseguir las búsquedas más populares, sino las que hacen tus clientes cuando están a punto de comprar. En esta guía te enseñamos a distinguir la intención detrás de cada búsqueda, a encontrar las palabras locales y específicas que sí convierten, y a repartirlas en tu web para que Google te muestre a quien importa.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es una palabra clave (y por qué importa tanto)',
        paragraphs: [
          'Una palabra clave es, simplemente, lo que tu cliente escribe en Google cuando busca algo. "Diseño web en Panamá", "restaurante para eventos en la ciudad", "abogado de sucesiones": cada frase es una puerta por la que puede entrar un cliente. El SEO consiste en que tu web sea la respuesta a esas búsquedas.',
          'El error clásico es elegir palabras desde adentro, con la jerga del negocio, en vez de desde afuera, con las palabras del cliente. Tú puedes llamarle "soluciones integrales de comunicación digital" a lo que tu cliente busca como "hacer una página web". Si optimizas para tu jerga, nunca coincidirás con lo que la gente realmente escribe.',
          'Por eso elegir palabras clave no es un ejercicio técnico, sino de empatía: ponerse en la cabeza del cliente y anticipar cómo pediría ayuda. Las herramientas ayudan a medir, pero el punto de partida siempre es entender a quién quieres atraer y qué problema quiere resolver.',
        ],
      },
      {
        type: 'prose',
        h2: 'La intención de búsqueda: lo que de verdad decide',
        paragraphs: [
          'No todas las búsquedas valen lo mismo. Detrás de cada una hay una intención, y esa intención decide si el visitante te comprará o solo está mirando. Alguien que busca "qué es una landing page" está aprendiendo; alguien que busca "hacer una landing page en Panamá precio" está a punto de contratar. La segunda vale oro; la primera, atención más adelante.',
          'Se suelen distinguir tres grandes intenciones: informativa (quiere aprender), de navegación (busca un sitio concreto) y transaccional (quiere comprar o contratar). Para traer clientes, las búsquedas transaccionales y las locales son las que priorizas. Las informativas son valiosas para el blog, para atraer y ganar confianza antes de la venta.',
          'La clave está en asignar cada intención a su lugar. Las búsquedas de "comprar" o "contratar" van a tus páginas de servicio y producto; las de "aprender" van a artículos del blog como este. Cuando cada página responde a la intención correcta, Google entiende tu sitio y te muestra a la persona correcta.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo encontrar tus palabras clave, paso a paso',
        intro: 'Un proceso sencillo que puedes hacer con calma, sin herramientas caras, pensando en tu cliente real.',
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
        h2: 'Lo local y lo específico gana en Panamá',
        paragraphs: [
          'Para un negocio panameño, competir por una palabra genérica y mundial es una batalla perdida y, además, inútil: te traería visitas de todas partes que nunca te comprarán. Lo que trae clientes es lo local. "Diseño web en Panamá", "dentista en Costa del Este", "catering para bodas en la ciudad": esas búsquedas tienen menos volumen, pero cada visita es un cliente potencial de verdad.',
          'Lo mismo pasa con lo específico. Las palabras "de cola larga" —frases más largas y detalladas— tienen poca competencia y una intención clarísima. Quien busca "reparación de aire acondicionado a domicilio en Panamá" sabe exactamente lo que quiere. Sumadas, estas búsquedas específicas suelen traer más clientes que las grandes y disputadas.',
          'Si tu negocio depende de clientes de una zona, el SEO local es tu mejor aliado. Complementa la elección de palabras con una ficha de Google bien trabajada; lo explicamos en <a href="/blog/que-es-el-seo-local-y-google-maps-panama/">qué es el SEO local y cómo dominar Google Maps</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'No persigas las palabras más buscadas.',
        strong: 'Persigue las que buscan tus clientes cuando están a punto de comprar.',
      },
      {
        type: 'prose',
        h2: 'De la lista de palabras a la estructura de tu web',
        paragraphs: [
          'Elegir las palabras es la mitad del trabajo; la otra mitad es acomodarlas en la web. Cada palabra clave principal merece su propia página, optimizada de arriba a abajo para responder a esa búsqueda. Por eso los sitios con una página por servicio posicionan mejor que las webs de una sola página que quieren decirlo todo.',
          'En la práctica, esto define la arquitectura del sitio: la home apunta a tu búsqueda más importante, cada servicio a la suya, cada industria a la de su nicho y cada artículo del blog a una búsqueda informativa. Así construyes una red de páginas que, juntas, aparecen para muchas búsquedas distintas y traen tráfico gratis todos los meses.',
          'Este trabajo de estrategia es la base de cualquier <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento web serio</a>. Si quieres el panorama completo de cómo se sube en Google, lee <a href="/blog/como-aparecer-primero-en-google-en-panama/">cómo aparecer primero en Google en Panamá</a>; la elección de palabras es el primer capítulo de esa historia.',
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
    title: 'Google Business Profile: cómo optimizar tu ficha para vender más en Panamá',
    description:
      'Cómo crear y optimizar tu ficha de Google Business Profile en Panamá para aparecer en Google Maps, ganar reseñas y atraer clientes de tu zona. Guía paso a paso y errores a evitar.',
    h1: 'Google Business Profile: cómo optimizar tu ficha para vender más',
    breadcrumb: 'Google Business Profile',
    category: 'SEO',
    date: '2026-07-25',
    heroImage: {
      src: '/images/blog/optimizar-google-business-profile-panama.jpg',
      alt: 'Negocio local apareciendo en Google Maps en Panamá',
    },
    lead: [
      'Cuando alguien en Panamá busca "cerca de mí" o el nombre de tu servicio en su zona, Google no le muestra primero las webs: le muestra un mapa con tres negocios y sus reseñas. Estar en ese recuadro —o quedar fuera— define quién recibe la llamada y quién ni siquiera es considerado.',
      'Ese recuadro se alimenta de tu ficha de Google Business Profile, la herramienta gratuita más rentable que tiene un negocio local. En esta guía te explicamos cómo crearla, optimizarla y mantenerla para aparecer en Google Maps, ganar reseñas y convertir esas búsquedas locales en clientes que cruzan la puerta o levantan el teléfono.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es Google Business Profile y por qué es oro',
        paragraphs: [
          'Google Business Profile —antes llamado Google My Business— es la ficha gratuita que representa a tu negocio en Google y en Google Maps. Es lo que aparece a la derecha cuando alguien busca tu nombre, y lo que puebla ese recuadro de mapa con tres negocios que Google muestra en las búsquedas locales. No es tu web: es tu escaparate dentro de Google.',
          'Su poder está en el momento. Quien busca un servicio "cerca de mí" no está investigando: está listo para actuar, muchas veces desde el celular y con urgencia. Aparecer ahí, con buenas reseñas y datos claros, es llegar justo cuando el cliente decide. Por eso una ficha bien trabajada suele traer más llamadas y visitas que muchas campañas pagadas.',
          'Y lo mejor: es gratis. Google te da este espacio sin costo, y aun así muchísimos negocios lo tienen abandonado, con datos viejos o sin reclamar. Ese descuido es, para quien sí lo trabaja, una oportunidad enorme de quedarse con los clientes de la zona.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo optimizar tu ficha, paso a paso',
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
        h2: 'Las reseñas: tu mayor palanca (y tu mejor prueba)',
        paragraphs: [
          'Si hay un solo factor que decide quién gana el recuadro de mapa, son las reseñas: cuántas tienes, qué tan buenas son y con qué frecuencia llegan. Para Google, muchas reseñas positivas y recientes son la señal de que eres un negocio activo, real y confiable. Para el cliente, son la prueba social que lo convence de elegirte y no al de al lado.',
          'Conseguirlas no es cuestión de suerte, sino de pedirlas bien. El mejor momento es justo después de una buena experiencia, con un enlace directo que le facilite dejar la reseña en dos toques. La mayoría de los clientes felices deja su opinión si se lo pides de forma sencilla; casi nadie lo hace por iniciativa propia.',
          'Responder también cuenta, y mucho. Agradece las buenas reseñas y atiende las críticas con calma y soluciones, nunca a la defensiva. Una respuesta profesional a una queja transmite más confianza que veinte reseñas de cinco estrellas, porque muestra cómo tratas a un cliente cuando algo sale mal.',
        ],
      },
      {
        type: 'prose',
        h2: 'La ficha y tu web trabajan juntas',
        paragraphs: [
          'La ficha de Google no reemplaza a tu web: se potencian. La ficha te hace aparecer en el mapa y capta al cliente listo para actuar; la web le da la información completa, genera confianza y le permite cotizar o comprar. Cuando ambas apuntan a lo mismo y comparten datos consistentes —mismo nombre, dirección y teléfono— Google confía más en ti y te posiciona mejor.',
          'Ese vínculo es la esencia del SEO local, y va más allá de la ficha. Incluye tener páginas en tu web orientadas a tu zona, aparecer en directorios con datos coherentes y sumar reseñas de forma constante. Lo desarrollamos en <a href="/blog/que-es-el-seo-local-y-google-maps-panama/">qué es el SEO local y cómo dominar Google Maps</a>.',
          'Para muchos negocios de barrio, servicio a domicilio o local físico, esta combinación —ficha optimizada más web local— es el canal de clientes más rentable que existe. Si quieres que lo trabajemos por ti, revisa nuestro servicio de <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
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
        intro: 'Evita estos tropiezos comunes; cualquiera de ellos te resta clientes de tu propia zona.',
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
    title: 'Embudo de ventas: cómo convertir visitas en clientes paso a paso',
    description:
      'Qué es un embudo de ventas y cómo construir uno para tu negocio en Panamá: de la atracción al cierre y la fidelización, con web, WhatsApp y automatización. Guía práctica con ejemplos.',
    h1: 'Embudo de ventas: cómo convertir visitas en clientes',
    breadcrumb: 'Embudo de ventas',
    category: 'Marketing',
    date: '2026-07-24',
    heroImage: {
      src: '/images/blog/embudo-de-ventas-para-negocios-panama.jpg',
      alt: 'Diagrama de un embudo de ventas para un negocio en Panamá',
    },
    lead: [
      'Muchos negocios invierten en atraer visitas —pauta, redes, SEO— y luego se preguntan por qué esas visitas no se convierten en ventas. La respuesta casi siempre es la misma: hay tráfico, pero no hay un camino. La gente llega, mira y se va, porque nadie la guió del interés a la compra.',
      'Ese camino tiene nombre: embudo de ventas. No es un concepto complicado ni exclusivo de las grandes empresas; es simplemente la ruta ordenada que lleva a un desconocido a convertirse en cliente y, con suerte, en cliente que repite. En esta guía te explicamos cada etapa y cómo armar un embudo que funcione para un negocio panameño.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es un embudo de ventas (sin complicaciones)',
        paragraphs: [
          'Un embudo de ventas es la representación del recorrido que hace una persona desde que oye hablar de ti por primera vez hasta que te compra. Se llama embudo porque arriba entran muchos —todos los que te conocen— y abajo salen menos —los que finalmente compran—. El trabajo de marketing y ventas es lograr que la mayor cantidad posible baje de una etapa a la siguiente.',
          'La imagen del embudo ayuda a ver algo importante: perder gente es normal, pero cada etapa donde se pierde de más es una fuga que cuesta dinero. Si mucha gente te conoce pero casi nadie te consulta, la fuga está arriba; si te consultan mucho pero cierras poco, la fuga está abajo. El embudo te dice dónde mirar.',
          'Lo valioso de pensar en embudo es que ordena el caos. En vez de "hacer marketing" en general, defines qué hace falta en cada etapa: contenido para atraer, una web que convenza, un WhatsApp que responda, un seguimiento que cierre. Cada pieza tiene un trabajo claro dentro del recorrido.',
        ],
      },
      {
        type: 'steps',
        h2: 'Las etapas del embudo, una por una',
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
          'El error más común es tratar de vender en la etapa de atracción, cuando la persona apenas te conoce, o esperar a que un desconocido compre sin haberle dado motivos para confiar. Cada etapa pide algo diferente, y usar la herramienta correcta en el momento correcto es lo que hace fluir el embudo.',
          'En la atracción trabajan el SEO, las redes y la pauta —contenido que aparece donde tu cliente ya está—. En el interés trabaja tu web: una <a href="/diseno-web-panama/">página bien hecha</a>, con portafolio y reseñas, es la que convierte al curioso en interesado. En la decisión trabaja el WhatsApp y un camino a la acción sin fricción. Y en la fidelización, el seguimiento y el servicio.',
          'Cuando cada herramienta ocupa su lugar, el embudo deja de tener fugas absurdas. La pauta ya no manda tráfico a una web que no convence; el interesado ya no se pierde por no encontrar cómo escribirte; el cliente ya no se olvida de ti después de comprar. Todo suma en la misma dirección.',
        ],
      },
      {
        type: 'prose',
        h2: 'Dónde se rompen los embudos (y cómo repararlos)',
        paragraphs: [
          'Los embudos se rompen casi siempre en dos lugares. El primero es entre el interés y la decisión: llega gente interesada, pero la web no convence, el WhatsApp tarda en responder o no hay un camino claro a la acción, y el interesado se enfría. Se repara con una web que convierta y una respuesta rápida a cada consulta.',
          'El segundo punto de fuga es después de la primera consulta. Alguien escribe, pide precio, dice "lo pienso" y desaparece. Sin un seguimiento, esa venta casi cerrada se pierde para siempre. La mayoría de las ventas no se cierran en el primer contacto, sino en el segundo o el tercero, y ahí es donde el seguimiento lo cambia todo.',
          'Aquí la automatización marca la diferencia. Responder al instante con un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a>, no dejar ninguna consulta sin seguimiento con un <a href="/saas/wapycrm/">CRM de ventas por WhatsApp</a> y recordar sin ser pesado convierte fugas en ventas, sin contratar más gente.',
        ],
      },
      {
        type: 'statement',
        text: 'La mayoría de las ventas no se pierden por falta de tráfico.',
        strong: 'Se pierden por falta de seguimiento.',
      },
      {
        type: 'prose',
        h2: 'Un embudo sencillo que cualquier negocio puede armar',
        paragraphs: [
          'No necesitas un embudo complicado para empezar. Uno básico y efectivo se ve así: atraes con contenido y pauta local, envías a una web o landing que convence y guía al WhatsApp, respondes rápido las consultas, y haces un seguimiento ordenado hasta cerrar. Después, mantienes el contacto para que el cliente vuelva.',
          'Lo importante no es la sofisticación, sino que no haya huecos: que cada visita tenga a dónde ir, cada interesado tenga cómo escribirte y cada consulta tenga quién le dé seguimiento. Un embudo simple sin fugas vende más que uno elaborado lleno de agujeros.',
          'A medida que crece el volumen, vale la pena automatizar y medir. Saber cuántas visitas llegan, cuántas consultan y cuántas compran te dice exactamente dónde está la fuga más cara. Lo vemos en <a href="/blog/como-medir-los-resultados-de-tu-pagina-web/">cómo medir los resultados de tu página web</a>: sin medir, optimizas a ciegas.',
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
    title: 'Cómo automatizar el seguimiento de clientes y dejar de perder ventas',
    description:
      'Guía para automatizar el seguimiento (follow-up) de clientes en Panamá con WhatsApp, CRM y flujos automáticos. Deja de perder ventas por olvido y cierra más sin contratar más gente.',
    h1: 'Cómo automatizar el seguimiento de clientes y dejar de perder ventas',
    breadcrumb: 'Automatizar seguimiento',
    category: 'IA y Automatización',
    date: '2026-07-23',
    heroImage: {
      src: '/images/blog/automatizar-seguimiento-clientes-panama.jpg',
      alt: 'Automatización del seguimiento de clientes con inteligencia artificial',
    },
    lead: [
      'La escena se repite en casi todos los negocios: un cliente escribe, pide precio, recibe la cotización y dice "lo pienso". Y ahí muere la venta, no porque el cliente no quisiera comprar, sino porque nadie volvió a escribirle. El seguimiento, esa tarea aburrida que siempre se posterga, es donde se pierden la mayoría de las ventas casi cerradas.',
      'Hacer seguimiento a mano no escala: se olvida, se mezcla entre mil conversaciones y depende de que alguien se acuerde en el momento justo. La solución es automatizarlo. En esta guía te explicamos cómo montar un seguimiento automático con WhatsApp, CRM y flujos, para cerrar más ventas sin trabajar más ni contratar a nadie.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué el seguimiento es donde se pierde el dinero',
        paragraphs: [
          'Muy pocas ventas se cierran en el primer contacto. El cliente pregunta, compara, se distrae, consulta con su pareja o su socio, y decide días después. Si en ese lapso nadie le da seguimiento, la venta se enfría y termina yéndose con quien sí lo hizo. No es un problema de precio ni de producto: es un problema de constancia.',
          'El detalle cruel es que esas ventas ya estaban casi ganadas. El cliente mostró interés real —por eso pidió precio— y solo faltaba un empujón oportuno. Dejarlas morir por olvido es la fuga más cara y, a la vez, la más fácil de reparar, porque no requiere traer clientes nuevos, sino no soltar a los que ya llegaron.',
          'El problema es que el seguimiento manual falla justo cuando más se necesita: cuando hay volumen. Con cinco consultas al día, alguien se acuerda; con cincuenta, es imposible. Y cada consulta sin seguimiento es dinero que entró por la puerta y se fue por la ventana sin que nadie lo notara.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué significa automatizar el seguimiento',
        paragraphs: [
          'Automatizar el seguimiento no es mandar mensajes robóticos y fríos a todo el mundo. Es construir un sistema que se asegure de que ninguna consulta quede sin respuesta ni sin continuidad, disparando el mensaje correcto en el momento correcto, y dejando lo humano para cuando de verdad hace falta una persona.',
          'En la práctica, es una combinación de piezas: un lugar donde toda consulta queda registrada (un CRM), reglas que definen qué pasa después de cada interacción, y mensajes automáticos que recuerdan, informan o reactivan sin que nadie tenga que acordarse. El cliente siente que lo atienden bien; el negocio no depende de la memoria de nadie.',
          'La clave es que lo automático libera lo humano. En vez de gastar el día copiando, pegando y recordando, tu equipo dedica su tiempo a las conversaciones que sí necesitan criterio y trato personal. La máquina se encarga de que nada se caiga; las personas, de cerrar.',
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
        h2: 'Las herramientas: WhatsApp, CRM y flujos',
        paragraphs: [
          'En Panamá, el seguimiento vive en WhatsApp, porque es donde la gente lee y responde de verdad. Por eso el corazón de un buen sistema es un <a href="/saas/wapycrm/">CRM de ventas por WhatsApp</a>: registra cada conversación, te dice a quién le debes seguimiento y dispara recordatorios para que ninguna venta se caiga por olvido.',
          'Alrededor de ese CRM se suman los flujos automáticos. Con <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones (n8n)</a> conectas tu web, tu tienda, tu calendario y tu WhatsApp, de modo que un evento —una consulta, una compra, una cita— dispare solo la acción correcta. Es la fontanería invisible que hace que todo fluya sin intervención.',
          'Y para responder al instante y filtrar interesados, un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a> atiende la primera línea. Junto, este trío —IA que responde, CRM que ordena y flujos que ejecutan— es lo que llamamos un <a href="/inteligencia-artificial-para-empresas-panama/">ecosistema de IA empresarial</a>: seguimiento que trabaja solo, 24/7.',
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
          'Existe un miedo comprensible: que automatizar el seguimiento vuelva frío y robótico el trato con el cliente. Bien hecho, ocurre lo contrario. La automatización se encarga de lo repetitivo y lo que se olvida —recordar, confirmar, avisar— y le devuelve tiempo a tu equipo para lo que de verdad requiere una persona: entender, aconsejar, cerrar.',
          'La regla de oro es diseñar puntos donde lo automático le pasa la conversación a un humano en el momento justo. Un cliente listo para comprar, una duda compleja o una queja delicada no las maneja un flujo: las maneja alguien de tu equipo, avisado a tiempo por el sistema. Lo automático abre la puerta; la persona cierra el trato.',
          'El resultado es un negocio que responde rápido, no olvida a nadie y aun así se siente cercano. Ningún cliente queda esperando, ninguna venta se cae por descuido, y tu equipo trabaja en lo que suma, no en copiar y pegar. Esa es la promesa real de automatizar el seguimiento.',
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
        ],
      },
    ],
    cta: {
      h2: 'Deja de perder ventas por falta de seguimiento',
      wa: 'Hola, quiero automatizar el seguimiento de mis clientes. ¿Me ayudan a montarlo?',
    },
  },
];
