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
      'El diseño web para restaurantes en Panamá vende cuando el cliente, desde el celular y en menos de un minuto, ve menú con fotos reales, precios, horario de hoy, ubicación y cómo reservar o pedir. En Elemento Web, una landing con menú y WhatsApp parte de $550 y una Web empresarial con reservas, de $1,250, sin ITBMS.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El menú visual decide antes de que el cliente llegue',
        paragraphs: [
          'La venta de un restaurante empieza en el celular, minutos u horas antes de llegar: el cliente compara dos o tres opciones por fotos y precios, y elige. Por eso el menú con fotos reales de tus platos —tomadas en tu cocina, con tu vajilla y tu porción real— es la pieza más importante de la web, por encima de la animación de portada o la tipografía. Una foto de banco de imágenes no es tu comida, y el cliente lo nota al sentarse a la mesa.',
          'El otro error común es el menú en PDF, escaneado o fotografiado hace años: hay que descargarlo, ampliarlo con los dedos y a veces el precio no se lee. Un menú en página real, organizado por categorías, se lee cómodo y se actualiza en minutos. Repasamos cada pieza de esa web, sede por sede si tienes varias, en <a href="/industrias/diseno-web-restaurantes-panama/">diseño web para restaurantes</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de un restaurante en Panamá?',
        items: [
          'Menú en página real, no en PDF, organizado por categorías y con precios visibles',
          'Fotos reales de los platos y del local, no banco de imágenes',
          'Ubicación, horario de hoy y botón de WhatsApp visibles sin hacer scroll',
          'Reserva de mesa o pedido para llevar, según cómo vendas de verdad',
          'Ficha de Google Business Profile con el mismo horario y menú que la web',
          'Carga rápida en el celular, incluso con datos móviles y poca señal',
          'Precios y platos agotados que tu propio equipo puede actualizar en minutos',
          'Menú en otro idioma si atiendes zona turística o clientela extranjera',
        ],
      },
      {
        type: 'prose',
        h2: 'SEO local para restaurantes: el mapa decide las búsquedas "cerca de mí"',
        paragraphs: [
          'Quien busca "restaurante cerca de mí" o "dónde comer cerca" decide en el mapa de Google: tres negocios con fotos, calificación y horario, muchas veces sin abrir ninguna web. Esa cajita se alimenta de tu ficha de Google Business Profile, no de tu sitio; con fotos viejas, horario equivocado o menú desactualizado, pierdes clientes que ya te habían encontrado. Los pasos para dejarla lista están en nuestra guía sobre <a href="/blog/optimizar-google-business-profile-panama/">cómo optimizar tu ficha de Google</a>.',
          'La web sostiene lo que el mapa promete: el mismo horario, el mismo menú y una carga rápida en el celular. Es un trabajo continuo, que profundizamos en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>; nadie puede garantizar el primer lugar, pero sí dejar de perder clientes por una ficha o una web descuidadas.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Reservas online o pedidos para llevar? Dos modelos, dos webs',
        paragraphs: [
          'Si tu fuerte es la mesa —cenas, grupos, ocasiones especiales—, lo prioritario es reservar sin depender de que alguien conteste el teléfono en hora pico. Una <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reserva online</a> conectada a tu disponibilidad real confirma sola mientras la cocina trabaja.',
          'Si vives del para llevar y el delivery, las plataformas externas cobran comisión en cada pedido y se quedan con el contacto del cliente. Un pedido directo desde tu web, coordinado por WhatsApp y cobrado con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a>, te deja el margen completo con el cliente que ya te conoce. La mayoría de los restaurantes en Panamá combinan ambos modelos; la web debe priorizar el que más usas.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué formato de web conviene según tu restaurante',
        intro: 'Precios en USD y no incluyen ITBMS (7%). El formato correcto depende de cuánto necesitas resolver, no de cuál se ve mejor.',
        items: [
          { h3: 'Landing — $550', text: 'Para un puesto, food truck o restaurante pequeño que solo necesita el menú, fotos y un botón directo a WhatsApp, sin reservas ni ambición de posicionar en Google. Una sola página bien resuelta.', link: { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages' } },
          { h3: 'Web empresarial — $1,250 (recomendada)', text: 'Menú por categorías, reserva online, ficha de Google alineada y un blog para posicionar en búsquedas locales, dentro de un máximo de 6 páginas internas. El punto de partida para un restaurante con mesa que quiere su propio canal.' },
          { h3: 'E-commerce — $1,950', text: 'Para cuando el pedido para llevar es una parte real del negocio y quieres carrito, inventario de platos del día y pago integrado, no solo coordinar cada pedido por WhatsApp.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Ubicación, horario y WhatsApp: lo que se ve sin buscar',
        paragraphs: [
          'Quien busca dónde comer quiere saber, en el primer vistazo y sin hacer scroll, dónde queda el lugar, si está abierto ahora y cómo escribir para reservar. La ubicación con mapa, el horario de hoy —no solo el general— y un botón de WhatsApp fijo valen más que una sección sobre la historia del restaurante.',
          'Todo eso tiene que cargar rápido con datos móviles, no solo con el wifi del local, porque la decisión ocurre antes de llegar. Para revisar ese punto en toda la web, escribimos una guía sobre <a href="/blog/diseno-web-responsive-mobile-first-panama/">diseño responsive pensado primero para el celular</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene que un restaurante invierta en web propia?',
        paragraphs: [
          'Si tu negocio vive casi por completo de las apps de delivery, no tienes local para recibir gente y ningún cliente te ha pedido un canal directo, una web completa se adelanta a la demanda.',
          'Tampoco la necesita todavía la fonda o el puesto de barrio con clientela fija, que llega por recomendación y por el letrero de la esquina: ahí suele bastar con una ficha de Google Business Profile bien resuelta, que es gratis.',
          'Las señales de que sí llegó el momento son concretas: clientes recurrentes que preguntan si pueden pedir directo, una comisión de delivery que ya pesa en el margen, o una segunda sede que no se puede explicar bien por WhatsApp.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre la web de un restaurante',
        items: [
          { q: '¿Cuánto cuesta la web de un restaurante en Panamá?', a: 'Depende de lo que necesites resolver. Un menú simple con WhatsApp parte de una Landing ($550); la mayoría de los restaurantes con mesa arrancan en Web empresarial ($1,250), con reserva y SEO local; si necesitas carrito y pago integrado para pedidos, es E-commerce ($1,950). Precios en USD, sin ITBMS (7%).' },
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
