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
      'Alguien ve un vestido en una historia de Instagram, pregunta talla y precio por mensaje directo, y si la respuesta tarda más de unos minutos ya está viendo la historia de la siguiente cuenta. Esa es la competencia real de una tienda de ropa o accesorios en Panamá: no es otra agencia de diseño web ni el sitio bonito de la marca de al lado, es una cuenta de Instagram bien armada, con fotos que dan ganas de comprar y alguien rápido contestando DMs.',
      'Una web no le gana a Instagram en descubrimiento, y no tiene por qué intentarlo: ahí es donde tu clienta ya pasa el tiempo y te encuentra. Pero hay trabajo que un feed no puede hacer bien —organizar tallas, colores y precios que se acumulan con cada colección, cobrar sin salir de la conversación, seguir existiendo el día que el algoritmo decide no mostrarte— y ese es justo el trabajo que le toca a tu web. En esta guía repasamos qué debe ofrecer esa tienda que Instagram no da, cómo integrarla con Instagram Shopping en vez de competir contra tus propias redes, por qué las fotos consistentes venden más que las fotos sueltas de cada publicación, y cuándo, con honestidad, todavía no conviene construir un catálogo estructurado.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué tu competencia real no es otra página web',
        paragraphs: [
          'Es fácil pensar que compites contra el catálogo de otra tienda o contra el sitio que se mandó a hacer la competencia el año pasado. En retail y moda casi nunca es así. La comparación que hace tu clienta, sin pensarlo dos veces, es entre comprarte a ti por Instagram —rápido, visual, con el chat ya abierto— o entrar a un sitio nuevo que no sabe si le va a mostrar su talla. Instagram gana esa comparación casi siempre, porque hace muy bien una sola cosa: mostrar el producto justo donde tu clienta ya está mirando.',
          'Lo que Instagram no hace bien es organizar un catálogo que crece con cada colección, cobrar sin sacar a nadie de la conversación, ni seguir ahí el día que el algoritmo decide enseñarle tu contenido solo a la mitad de tus seguidores. Ahí es donde una tienda propia gana terreno: no compitiendo por atención, sino ofreciendo lo que una cuenta social deja de poder sostener a partir de cierto tamaño de catálogo. <a href="/industrias/diseno-web-retail-moda-panama/">Nuestra página de diseño web para retail y moda</a> entra en el detalle de cómo montamos ese catálogo; aquí nos enfocamos en cuándo tiene sentido dar el paso y qué debe traer sí o sí.',
          'La pregunta que de verdad importa no es "¿necesito una web?" sino "¿qué necesito que mi web haga que mi Instagram ya no puede?". Si la respuesta es nada —si con DMs y una historia fijada te alcanza— seguir así es la decisión correcta, no una etapa pendiente por superar. Si la respuesta es filtros, checkout propio o dejar de depender de quién esté libre para contestar el mensaje, ahí empieza a justificarse la inversión.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que tu tienda debe ofrecer que Instagram no puede',
        intro: 'Si tu web es solo una versión más lenta de tu feed —las mismas fotos, sin filtros, sin carrito—, no está haciendo el trabajo que le corresponde. Esto es lo mínimo para que justifique su propia existencia:',
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
        h2: 'Instagram Shopping conecta tu catálogo: no hace falta elegir uno u otro',
        paragraphs: [
          'Mudar toda la operación a una tienda propia de un día para otro y abandonar Instagram sería tirar por la ventana el lugar donde tu clienta ya te encuentra. No hace falta elegir: Instagram Shopping conecta tu catálogo a las publicaciones, así que cada foto puede llevar directo a la ficha del producto en tu propia web, con talla, color y precio ya filtrados, en vez de terminar en un DM que alguien tiene que contestar a mano uno por uno.',
          'Ahí es donde se cierra el círculo: Instagram sigue haciendo lo que hace bien —mostrar, generar antojo, sostener la relación con quien ya te compró—, y tu <a href="/servicios/tiendas-online-ecommerce-panama/">tienda online</a> hace lo que un feed no puede: cobrar ahí mismo, sin que la clienta tenga que salir de la compra para transferir y mandar captura de pantalla. La <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">integración de Yappy y pasarelas de pago</a> es la pieza que de verdad cierra la venta; el catálogo bonito solo la prepara.',
        ],
      },
      {
        type: 'steps',
        h2: 'Fotos consistentes: lo que separa un catálogo de un álbum de fotos sueltas',
        intro: 'Cuando cada foto de producto viene de una story distinta —otra luz, otro fondo, otro ángulo—, el catálogo se ve improvisado aunque la ropa sea buena. La clienta no siempre sabe explicar por qué desconfía, pero lo nota. Esto no exige un estudio fotográfico, exige repetir lo mismo cada vez:',
        items: [
          { h3: '1. Un fondo fijo, siempre el mismo', text: 'Una pared lisa, una cortina o un fondo de cartón de un solo color, igual para todo el catálogo. Cambiar de fondo entre fotos es la señal más rápida de que vienen de sesiones distintas, sin plan.' },
          { h3: '2. Una sola fuente de luz repetible', text: 'La misma ventana a la misma hora, o el mismo par de luces si usas equipo. No hace falta luz profesional: hace falta que sea la misma en la foto del lunes y en la del sábado.' },
          { h3: '3. El mismo ángulo y la misma distancia', text: 'De frente, a la misma altura, con el mismo encuadre para cada prenda. Un catálogo donde cada foto parece tomada por otra persona rompe la sensación de tienda organizada.' },
          { h3: '4. Un solo ajuste de color al editar', text: 'El mismo preset o el mismo ajuste de blancos para todas las fotos antes de subirlas. Sin esto, la misma prenda cambia de tono de una foto a otra, y eso también se nota como desorden aunque nadie lo diga en voz alta.' },
        ],
      },
      {
        type: 'statement',
        text: 'Un catálogo con el mismo fondo y la misma luz en cada foto no se ve "más bonito" por casualidad:',
        strong: 'se ve organizado, y organizado es la señal de confianza más barata que existe para una tienda que recién empieza.',
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene todavía construir un catálogo estructurado',
        paragraphs: [
          'No toda marca de ropa o accesorios en Panamá necesita una tienda online hoy, y decirlo con honestidad ahorra un gasto que no toca todavía. Si vendes por temporadas cortas y cambiantes —una maleta de viaje que trajiste, un lote que se agota en dos semanas y no se repite— un catálogo estructurado con talla, color y stock por variante es trabajo de mantenimiento que vas a abandonar al segundo mes, porque el inventario cambia más rápido de lo que alguien puede actualizarlo.',
          'Tampoco conviene si el volumen todavía es bajo y manejable por mensaje: cinco o diez pedidos a la semana que una sola persona contesta sin ahogarse, con clientas que de todas formas prefieren preguntar por WhatsApp antes de comprar ropa que no se han probado. Ahí, gastar $1,500 más ITBMS en una tienda con catálogo y checkout propio es adelantarse a un problema que todavía no tienes. Rinde más invertir ese dinero en mejores fotos, en <a href="/marketing/facebook-instagram-ads-panama/">pauta en Instagram y Facebook</a> para crecer el alcance, o como mucho en una landing sencilla desde $550 más ITBMS con tu catálogo destacado y un botón directo a WhatsApp.',
          'Donde sí se justifica el salto es cuando el catálogo ya es estable —referencias que se repiten, tallas y colores que vuelves a pedir— y el cuello de botella pasó a ser el tiempo de quien contesta cada mensaje, no la demanda. Ahí una tienda con checkout propio no reemplaza el trato personal: libera el tiempo que hoy se va en repetir precio y talla, para dedicarlo a lo que sí necesita una persona real. El desglose completo de precios, con lo que suma o resta al costo según el proyecto, está en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para retail y moda',
        items: [
          { q: '¿Cuánto cuesta una tienda online para una marca de ropa o retail en Panamá?', a: 'El plan de E-commerce parte de $1,500 más el 7% de ITBMS, e incluye catálogo y carrito completos, Yappy y pasarelas locales, gestión de inventario y configuración de envíos. Si el catálogo todavía es pequeño o cambia todo el tiempo, una landing page desde $550 más ITBMS con tu catálogo destacado y WhatsApp directo puede ser más que suficiente por ahora.' },
          { q: '¿La tienda online reemplaza mi cuenta de Instagram?', a: 'No, y no debería. Instagram sigue siendo donde tu clienta descubre la marca y genera el antojo de compra; tu web es donde ese antojo se convierte en venta sin depender de que el algoritmo te muestre esa semana. Con Instagram Shopping, cada publicación puede llevar directo al producto en tu propia tienda.' },
          { q: '¿Necesito un fotógrafo profesional para el catálogo?', a: 'No necesariamente un estudio, pero sí consistencia: mismo fondo, misma luz, mismo ángulo en cada foto. Un catálogo tomado con el celular pero disciplinado en esos tres puntos se ve más serio que fotos profesionales sueltas con fondos distintos entre sí.' },
          { q: '¿Cuánto cuesta mantener la tienda al día después de publicada?', a: 'Aparte de la infraestructura —desde $225 al año en hosting compartido, $350 en hosting cloud (la opción que recomendamos para la mayoría) o $550 en VPS dedicado, todos con dominio y SSL incluidos—, el mantenimiento mensual va desde $59 en el plan Básico hasta $189 en el Empresarial, según qué tan rápido necesitas respuesta y cuántos cambios al mes incluye. Precios en USD, sin el 7% de ITBMS.' },
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
