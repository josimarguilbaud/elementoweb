/* BLOG — blog-10: guía long-form sobre diseño web para restaurantes en Panamá.
   Mismo patrón que los demás lotes: PageData con parent { slug: 'blog' }; el
   listado /blog la recoge por fecha y categoría. Enlaces internos solo a slugs
   reales del sitio (verificados contra src/lib/site.ts y src/lib/pages/*). */
import type { PageData } from '../types';

export const blog10: PageData[] = [
  {
    slug: 'blog/diseno-web-para-restaurantes-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para restaurantes en Panamá: qué debe tener',
    description: 'Qué debe tener la web de un restaurante en Panamá: menú con fotos reales, SEO local, reservas o pedidos, y cuándo todavía no conviene.',
    h1: 'Diseño web para restaurantes en Panamá: qué debe tener tu web para vender',
    breadcrumb: 'Diseño web para restaurantes',
    category: 'Diseño web',
    date: '2026-09-16',
    heroImage: {
      src: '/images/blog/diseno-web-para-restaurantes-panama.jpg',
      alt: 'Plato gourmet bien emplatado sobre una mesa de restaurante, con luz cálida de ambiente',
    },
    lead: [
      'Nadie decide dónde va a comer parado en la puerta de tu restaurante. Lo decide antes, en el celular, comparando dos o tres opciones en menos de un minuto: el menú, las fotos, el horario, si hay mesa o si conviene pedir para la casa. Ese minuto lo gana quien muestra esa información rápido y bien, no quien tiene la carta más bonita impresa junto a la entrada.',
      'En esta guía vemos qué de verdad decide si la web de un restaurante en Panamá vende: el menú visual con fotos reales del plato, por qué el mapa de Google pesa más que la propia página para "cerca de mí", si conviene reserva de mesa o pedido para llevar según cómo vendes, y también cuándo un restaurante todavía no necesita invertir en esto.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El menú visual decide antes de que el cliente llegue',
        paragraphs: [
          'En un restaurante, la venta casi nunca empieza en la puerta: empieza en el celular, minutos u horas antes, cuando alguien decide dónde va a comer. Mira dos o tres opciones, compara fotos y precios, y elige. Si tu web no le muestra el plato tal como es, perdiste esa decisión sin enterarte siquiera.',
          'Por eso el menú visual, con fotos reales de tus platos —tomadas en tu cocina, con tu vajilla, tu porción real—, es la pieza más importante de la web de un restaurante. Pesa más que la animación de portada, que la tipografía elegida o que cualquier otro detalle de diseño. Una foto de banco de imágenes, por bonita que sea, no es tu comida, y el cliente lo nota apenas se sienta a la mesa.',
          'El otro extremo, igual de común, es el menú en PDF, muchas veces fotografiado con el celular o escaneado hace años: hay que descargarlo, ampliarlo con los dedos y a veces ni siquiera se lee bien el precio. Un menú en página real, organizado por categorías, se lee cómodo y se actualiza en minutos. Repasamos cada pieza de esa web, sede por sede si tienes varias, en <a href="/industrias/diseno-web-restaurantes-panama/">diseño web para restaurantes</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que no puede faltar en la web de un restaurante',
        intro: 'Si tu web ya cumple con todo esto, tienes lo esencial resuelto. Si falla en varios puntos, ahí está la prioridad.',
        items: [
          'Menú en página real, no en PDF, organizado por categorías y con precios visibles',
          'Fotos reales de los platos y del local, no banco de imágenes genérico',
          'Ubicación, horario y botón de WhatsApp visibles sin tener que buscarlos',
          'Reserva de mesa o pedido para llevar, según cómo vendas de verdad',
          'Ficha de Google Business Profile con el mismo horario y menú que la web',
          'Carga rápida en el celular, incluso con datos móviles y poca señal',
          'Precios y platos agotados que tu propio equipo puede actualizar en minutos',
          'Menú en otro idioma si atiendes zona turística o clientela extranjera',
        ],
      },
      {
        type: 'prose',
        h2: 'SEO local: el mapa es el buscador para "cerca de mí"',
        paragraphs: [
          'Nadie que busca "restaurante cerca de mí" o "dónde comer cerca" pasa primero por un buscador tradicional: pasa por el mapa. Google le muestra tres negocios con fotos, calificación y horario, y la decisión ocurre ahí, muchas veces sin llegar a abrir ninguna web. Para un restaurante, esa cajita de mapa es el canal número uno, por encima del sitio propio.',
          'Esa cajita se alimenta de tu ficha de Google Business Profile, no de tu web. Si tiene fotos viejas, un horario que no coincide con la realidad o el menú desactualizado, estás perdiendo clientes que ya te habían encontrado. Ya escribimos una guía completa sobre <a href="/blog/optimizar-google-business-profile-panama/">cómo optimizar tu ficha de Google</a>, con los pasos para dejarla lista.',
          'La web entra después: su trabajo es sostener lo que el mapa promete, con el mismo horario, el mismo menú y una carga rápida en el celular. Esto se trabaja como una estrategia continua, no como un botón que se aprieta una vez —lo profundizamos en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>—, y como con cualquier SEO, nadie te puede garantizar el primer lugar: lo que sí se puede es dejar de perder clientes por una ficha o una web descuidadas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Reservas o pedidos para llevar: dos modelos, dos webs distintas',
        paragraphs: [
          'No toda web de restaurante necesita lo mismo, porque no todos venden igual. Si tu fuerte es la mesa —cenas, grupos, ocasiones especiales—, lo que más importa es que reservar sea fácil sin depender de que alguien conteste el teléfono en hora pico. Una <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reserva online</a> conectada a tu disponibilidad real confirma sola y llena mesas mientras la cocina trabaja.',
          'Si en cambio vives del para llevar y el delivery, el problema es otro: las plataformas externas cobran una comisión importante en cada pedido y se quedan con el contacto del cliente, que termina siendo suyo, no tuyo. Un pedido directo desde tu web, coordinado por WhatsApp y cobrado con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a>, te deja el margen completo con el cliente que ya te conoce y repite.',
          'La mayoría de los restaurantes en Panamá viven un poco de cada modelo, y está bien que la web lo refleje: reserva para el grupo del sábado, pedido directo para quien ya sabe qué va a pedir un martes cualquiera. Lo que no conviene es construir la web pensando solo en el modelo que menos usas.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué formato de web conviene según tu restaurante',
        intro: 'Precios en USD y no incluyen ITBMS (7%). El formato correcto depende de cuánto necesitas resolver, no de cuál se ve mejor.',
        items: [
          { h3: 'Landing — $550', text: 'Para un puesto, food truck o restaurante pequeño que solo necesita el menú, fotos y un botón directo a WhatsApp, sin reservas ni ambición de posicionar en Google. Una sola página bien resuelta.', link: { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages' } },
          { h3: 'Página PYME — $950 (recomendada)', text: 'Menú por categorías, reserva online, ficha de Google alineada y un blog para posicionar en búsquedas locales, dentro de 8 a 12 páginas internas. El punto de partida para un restaurante con mesa que quiere su propio canal.' },
          { h3: 'E-commerce — $1,500', text: 'Para cuando el pedido para llevar es una parte real del negocio y quieres carrito, inventario de platos del día y pago integrado, no solo coordinar cada pedido por WhatsApp.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online' } },
        ],
      },
      {
        type: 'statement',
        text: 'El cliente no elige tu restaurante en tu web.',
        strong: 'Lo elige en el mapa, con hambre, en menos de un minuto.',
      },
      {
        type: 'prose',
        h2: 'Ubicación, horario y WhatsApp: lo que se ve sin buscar',
        paragraphs: [
          'Quien busca dónde comer casi nunca está de humor para investigar. Quiere saber, en el mismo primer vistazo y sin hacer scroll, dónde queda el lugar, si está abierto ahora mismo y cómo escribir para preguntar o reservar. Si esa información está escondida detrás de un menú de tres niveles, perdiste al cliente apurado, que es la mayoría.',
          'Esto no es un detalle de diseño: es una decisión de prioridad. La ubicación con mapa, el horario de hoy —no solo el horario general— y un botón de WhatsApp fijo, visibles desde el celular sin tener que buscarlos, valen más que cualquier sección institucional sobre la historia del restaurante.',
          'Todo esto además tiene que cargar rápido con datos móviles, no solo con el wifi del local, porque la decisión ocurre casi siempre antes de llegar. Si sospechas que tu web tiene ese problema en general, conviene revisarla completa: escribimos una guía aparte sobre <a href="/blog/diseno-web-responsive-mobile-first-panama/">diseño responsive pensado primero para el celular</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir en una web propia (todavía)',
        paragraphs: [
          'No todo restaurante necesita esto ahora, y decirlo con honestidad ahorra un gasto que no tocaba todavía. Si tu negocio vive casi al cien por ciento de las apps de delivery, no tienes local para recibir gente y ningún cliente te ha pedido un canal directo, una web completa es una inversión adelantada a su momento. Antes de pagar por un canal propio, conviene que exista, aunque sea de a poco, la demanda que lo justifique.',
          'Lo mismo pasa con el local de barrio, informal, de toda la vida: la fonda o el puesto donde la clientela es fija, llega por recomendación y por el letrero de la esquina, no por una búsqueda en Google. Ahí muchas veces alcanza con tener bien resuelta la ficha de Google Business Profile, que es gratis, antes de pagar por un sitio completo que casi nadie va a visitar.',
          'La señal de que sí llegó el momento suele ser concreta: clientes recurrentes que preguntan si pueden pedir directo, una comisión de delivery que empieza a doler en el margen, o una segunda sede que ya no se puede explicar bien por WhatsApp. Ahí la web deja de ser un gasto estético y se vuelve la herramienta que faltaba.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre la web de un restaurante',
        items: [
          { q: '¿Cuánto cuesta la web de un restaurante en Panamá?', a: 'Depende de lo que necesites resolver. Un menú simple con WhatsApp parte de una Landing ($550); la mayoría de los restaurantes con mesa arrancan en Página PYME ($950), con reserva y SEO local; si necesitas carrito y pago integrado para pedidos, es E-commerce ($1,500). Precios en USD, sin ITBMS (7%).' },
          { q: '¿Me garantizan salir primero en Google o en el mapa?', a: 'No, y conviene desconfiar de quien lo prometa. Nadie controla el algoritmo de Google. Lo que sí se puede hacer es tener la ficha y la web bien trabajadas —horario real, fotos propias, reseñas respondidas— para competir con una base sólida, no con un atajo que no existe.' },
          { q: '¿Mi web reemplaza a las apps de delivery?', a: 'No, las complementa. Las apps te dan visibilidad ante gente que todavía no te conoce; tu web y tu WhatsApp convierten al cliente que ya te conoce en un pedido directo, sin pagarle comisión a nadie por una venta que ya tenías ganada.' },
          { q: '¿Necesito reserva online si mi restaurante es informal?', a: 'Probablemente no. La reserva online rinde en restaurantes donde se pierden mesas por no contestar el teléfono a tiempo: grupos, ocasiones, fines de semana. Si tu negocio es de paso y no maneja mesas para reservar, esa función sobra; mejor invertir en que el menú y la ficha de Google estén impecables.' },
          { q: '¿Quién actualiza el menú y los precios después de publicada la web?', a: 'Tu propio equipo, desde un panel, sin llamar a nadie. Cambiar un precio o marcar un plato agotado es de lo que más rápido se necesita resolver en un restaurante, y no puede depender de un tercero.' },
          { q: '¿Qué pasa si todavía no tengo fotos profesionales de mis platos?', a: 'Se puede resolver, pero no con banco de imágenes: una sesión de fotos real, aunque sea sencilla, rinde más que cualquier foto bonita que no sea tu comida. Es una de las pocas partidas donde vale la pena invertir antes de publicar.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Diseño web para restaurantes' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps' },
          { slug: 'blog/optimizar-google-business-profile-panama', label: 'Optimizar tu ficha de Google' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas de Pago' },
          { slug: 'blog/diseno-web-responsive-mobile-first-panama', label: 'Diseño web responsive' },
        ],
      },
    ],
    cta: {
      h2: '¿Le hacemos la web a tu restaurante?',
      wa: 'Hola, quiero cotizar la web de mi restaurante: menú con fotos reales, reservas o pedidos. ¿Me ayudan?',
    },
  },
];
