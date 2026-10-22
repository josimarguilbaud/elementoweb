/* BLOG — Lote 19: guía long-form sobre diseño web para retail y moda en Panamá.
   Ángulo: la competencia real de una tienda de ropa no es otra web, es una
   cuenta de Instagram bien armada. PageData con parent { slug: 'blog' }; el
   listado /blog la recoge por fecha y categoría. Enlaces internos solo a
   slugs reales del sitio (verificados contra src/lib/pages y site.ts). */
import type { PageData } from '../types';

export const blog19: PageData[] = [
  {
    slug: 'blog/diseno-web-para-retail-moda-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para retail y moda en Panamá: más que Instagram',
    description: 'Qué debe tener una tienda de moda o retail en Panamá: catálogo con filtros, checkout propio e integración con Instagram Shopping.',
    h1: 'Diseño web para retail y moda en Panamá: lo que tu Instagram no puede darte',
    breadcrumb: 'Diseño web para retail y moda',
    category: 'E-commerce',
    date: '2026-08-22',
    heroImage: {
      src: '/images/blog/diseno-web-para-retail-moda-panama.jpg',
      alt: 'Interior de una tienda de ropa moderna con racks organizados y luz cálida e invitadora',
    },
    lead: [
      'El diseño web para retail y moda en Panamá no compite con Instagram: hace lo que un feed no puede. Filtros por talla, color y precio, stock real por variante, checkout propio con Yappy o tarjeta y un catálogo que sigue ahí después de 24 horas. En Elemento Web, Ciudad de Panamá, lo conectamos a Instagram Shopping.',
      'La competencia real de una tienda de ropa no es otra web: es una cuenta de Instagram bien armada con alguien rápido contestando mensajes. Esta guía explica qué debe ofrecer tu tienda, cómo integrarla con tus redes, por qué las fotos consistentes venden más y cuándo todavía no conviene un catálogo estructurado.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Contra quién compite de verdad una tienda de ropa en Panamá?',
        paragraphs: [
          'Contra tu propio Instagram. Tu clienta ve un vestido en una historia, pregunta talla y precio por mensaje, y si la respuesta tarda unos minutos ya está viendo la siguiente cuenta. La comparación que hace no es entre dos sitios web, sino entre comprarte por Instagram, con el chat ya abierto, o entrar a un sitio nuevo que no sabe si le mostrará su talla.',
          'Instagram no organiza bien un catálogo que crece con cada colección, no cobra sin sacar a nadie de la conversación y no te muestra el día que el algoritmo decide enseñarte a la mitad de tus seguidores. La pregunta útil es "¿qué necesito que mi web haga que mi Instagram ya no puede?". Si la respuesta es nada, seguir con DMs y una historia fijada es la decisión correcta. Si es filtros, checkout propio o dejar de depender de quién conteste, ahí se justifica la inversión. El detalle de cómo montamos ese catálogo está en <a href="/industrias/diseno-web-retail-moda-panama/">nuestra página de diseño web para retail y moda</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe ofrecer el diseño web para retail y moda que Instagram no puede?',
        intro: 'Si tu web es solo una versión más lenta de tu feed, sin filtros ni carrito, no hace su trabajo. Esto es lo mínimo:',
        items: [
          'Filtros reales por talla, color y precio, no un scroll infinito de publicaciones',
          'Checkout propio, sin sacar a la clienta hacia una conversación aparte para cerrar el pago',
          'Ficha de producto con disponibilidad real por talla, no un "pregunta si queda"',
          'Catálogo permanente: la prenda sigue ahí aunque hayan pasado 24 horas de publicada',
          'Buscador y categorías por colección o temporada, no la memoria de en qué mes la subiste',
          'Un dominio propio que aparece cuando buscan tu marca en Google, no solo cuando alguien ya te sigue',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo se conecta Instagram Shopping con tu tienda online?',
        paragraphs: [
          'No hace falta elegir entre uno y otro. Instagram Shopping conecta tu catálogo a las publicaciones: cada foto lleva a la ficha del producto en tu web, con talla, color y precio, en vez de terminar en un DM que alguien contesta a mano.',
          'Instagram sigue mostrando y generando antojo; tu <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a> cobra ahí mismo, sin que la clienta tenga que transferir y mandar captura. La <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">integración de Yappy y pasarelas de pago</a> es la pieza que cierra la venta; el catálogo solo la prepara.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo lograr fotos de catálogo consistentes sin estudio?',
        intro: 'Cuando cada foto viene de una story distinta, con otra luz y otro fondo, el catálogo se ve improvisado aunque la ropa sea buena. No exige un estudio: exige repetir lo mismo cada vez.',
        items: [
          { h3: '1. Un fondo fijo, siempre el mismo', text: 'Una pared lisa, una cortina o un fondo de cartón de un solo color, igual para todo el catálogo. Cambiar de fondo es la señal más rápida de que las fotos vienen de sesiones distintas.' },
          { h3: '2. Una sola fuente de luz repetible', text: 'La misma ventana a la misma hora, o el mismo par de luces si usas equipo. No hace falta luz profesional: hace falta que sea la misma el lunes y el sábado.' },
          { h3: '3. El mismo ángulo y la misma distancia', text: 'De frente, a la misma altura, con el mismo encuadre para cada prenda. Si cada foto parece tomada por otra persona, se rompe la sensación de tienda organizada.' },
          { h3: '4. Un solo ajuste de color al editar', text: 'El mismo preset o ajuste de blancos para todas las fotos. Sin esto, la misma prenda cambia de tono de una foto a otra.' },
        ],
      },
      {
        type: 'statement',
        text: 'Un catálogo con el mismo fondo y la misma luz en cada foto no se ve "más bonito" por casualidad:',
        strong: 'se ve organizado, y organizado es la señal de confianza más barata que existe para una tienda que recién empieza.',
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene todavía una tienda online con catálogo?',
        paragraphs: [
          'Si vendes por temporadas cortas —un lote que se agota en dos semanas y no se repite—, mantener talla, color y stock por variante es trabajo que se abandona al segundo mes. Tampoco conviene con volumen bajo: cinco o diez pedidos a la semana que una persona contesta sin ahogarse. Ahí, gastar $1,950 más ITBMS en una tienda con checkout propio es adelantarse; rinde más invertir en mejores fotos, en <a href="/marketing/facebook-instagram-ads-panama/">pauta en Instagram y Facebook</a> o en una landing desde $550 más ITBMS con tu catálogo destacado y un botón a WhatsApp.',
          'El salto se justifica cuando el catálogo es estable —referencias, tallas y colores que se repiten— y el cuello de botella pasó a ser el tiempo de quien contesta cada mensaje. La tienda no reemplaza el trato personal: libera el tiempo que hoy se va en repetir precio y talla. El desglose de precios está en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para retail y moda',
        items: [
          { q: '¿Cuánto cuesta una tienda online para una marca de ropa o retail en Panamá?', a: 'El plan de E-commerce parte de $1,950 más el 7% de ITBMS, e incluye hasta 25 productos cargados, categorías y carrito, configuración de pagos y envíos (las pasarelas y su cantidad se definen en la cotización), pruebas de compra y capacitación para gestionar pedidos. Si el catálogo todavía es pequeño o cambia todo el tiempo, una landing page desde $550 más ITBMS con tu catálogo destacado y WhatsApp directo puede ser más que suficiente por ahora.' },
          { q: '¿La tienda online reemplaza mi cuenta de Instagram?', a: 'No, y no debería. Instagram sigue siendo donde tu clienta descubre la marca y genera el antojo de compra; tu web es donde ese antojo se convierte en venta sin depender de que el algoritmo te muestre esa semana. Con Instagram Shopping, cada publicación puede llevar directo al producto en tu propia tienda.' },
          { q: '¿Necesito un fotógrafo profesional para el catálogo?', a: 'No necesariamente un estudio, pero sí consistencia: mismo fondo, misma luz, mismo ángulo en cada foto. Un catálogo tomado con el celular pero disciplinado en esos tres puntos se ve más serio que fotos profesionales sueltas con fondos distintos entre sí.' },
          { q: '¿Cuánto cuesta mantener la tienda al día después de publicada?', a: 'Aparte de la infraestructura —desde $225 al año en hosting compartido, $350 en hosting cloud (la opción que recomendamos para la mayoría) o $550 en VPS dedicado, todos con dominio y SSL incluidos—, el mantenimiento mensual va desde $99 en el plan Básico hasta $319 en el Empresarial, según qué tan rápido necesitas respuesta y cuántos cambios al mes incluye. Precios en USD, sin el 7% de ITBMS.' },
          { q: '¿Qué pasa si mi inventario cambia todo el tiempo?', a: 'Entonces vale la pena confirmar primero si te conviene un catálogo estructurado ahora o más adelante. Si compras por lotes que se agotan en semanas y no se repiten, mantener talla, color y stock actualizados por variante es trabajo que pocas operaciones pequeñas sostienen. En ese caso, una presencia más simple —landing o catálogo destacado con WhatsApp— suele rendir más mientras el negocio no tenga referencias que se repiten.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Diseño web para retail y moda' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y pasarelas de pago' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
        ],
      },
    ],
    cta: {
      h2: 'Una tienda que vende incluso cuando el algoritmo no te muestra',
      wa: 'Hola, quiero una tienda online para mi marca de moda o retail en Panamá. ¿Me asesoran?',
    },
  },
];
