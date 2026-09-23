/* BLOG — Lote 28: guía sobre diseño web para ferreterías y materiales de
   construcción en Panamá. PageData con parent { slug: 'blog' }; el listado
   /blog la recoge por fecha y categoría. Enlaces internos solo a slugs
   reales del sitio. */
import type { PageData } from '../types';

export const blog28: PageData[] = [
  {
    slug: 'blog/diseno-web-para-ferreterias-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para ferreterías en Panamá: vender más',
    description: 'Qué necesita la web de una ferretería en Panamá: catálogo con disponibilidad real, cotización rápida para contratistas y cuándo NO conviene.',
    h1: 'Diseño web para ferreterías en Panamá: catálogo, disponibilidad y cuándo sí conviene vender en línea',
    breadcrumb: 'Diseño web para ferreterías',
    category: 'Diseño web',
    date: '2026-08-31',
    heroImage: {
      src: '/images/blog/diseno-web-para-ferreterias-panama.jpg',
      alt: 'Interior de una ferretería organizada, con estanterías llenas de herramientas y materiales de construcción bajo luz industrial',
    },
    lead: [
      'Un contratista necesita cien bloques y una funda de cemento para el lunes, y a un vecino se le rompió el tubo del lavamanos un domingo en la noche: los dos van a hacer lo mismo antes de mover un dedo — buscar en el celular quién tiene el producto y puede resolverlo hoy. Si tu ferretería no aparece ahí con una respuesta clara, perdiste esa venta sin enterarte.',
      'El mostrador sigue siendo el corazón del negocio y no va a dejar de serlo. Pero ya no es la única puerta de entrada: cadenas y tiendas en línea llevan años mostrando su inventario antes de que el cliente salga de casa. En esta guía vemos qué necesita de verdad la web de una ferretería o distribuidora de materiales en Panamá —catálogo con disponibilidad real, categorías que no se vuelvan un caos, cotización rápida para el contratista— y también cuándo, con honestidad, todavía no conviene invertir en ella.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La decisión ya no se toma parado frente al mostrador',
        paragraphs: [
          'Antes, escoger ferretería era casi automático: entrabas a la que te quedaba más cerca o a la que conocías de toda la vida, y ahí se acababa la comparación. Hoy esa decisión casi siempre ya se tomó antes de salir de casa — el cliente escribe en el celular qué necesita, ve quién lo tiene y a cuánto, y sale sabiendo exactamente adónde ir. Si tu ferretería no aparece en esa búsqueda, ni siquiera entra en la comparación.',
          'Esto no es un fenómeno lejano ni exclusivo de las cadenas grandes: pasa todos los días, con el vecino que busca "ferretería cerca de mí" desde el celular o con el contratista que compara precio y existencia en tres proveedores antes de hacer un pedido grande. Se queda con la venta el que responde primero y sin rodeos, así su local esté más lejos que el de al lado.',
          'Nada de esto reemplaza el mostrador —seguirá siendo el corazón del negocio—, pero deja de ser la única puerta de entrada. Cada producto publicado con precio y disponibilidad real es una venta que se puede cerrar a las nueve de la noche o un domingo, cuando la tienda está cerrada pero el cliente sigue buscando. El detalle completo de cómo lo estructuramos está en nuestra <a href="/industrias/diseno-web-ferreterias-materiales-panama/">página de diseño web para ferreterías</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que necesita la web de una ferretería para competir en serio',
        intro: 'Si tu web —o la que estás por encargar— no resuelve esto, no importa cuán bien se vea: le falta lo que de verdad convierte una visita en una venta.',
        items: [
          'Categorías reales del rubro —plomería, eléctrico, pintura, ferretería general, materiales de construcción— en vez de un solo listado gigante',
          'Precio visible en la ficha siempre que sea posible: un "consulte" en cada producto empuja a llamar por algo que debería verse de un vistazo',
          'Un buscador que funcione escribiendo el nombre, la marca o el código, no solo navegando categorías',
          'Una forma de armar y enviar una lista de varios productos a la vez, para el pedido de obra que hoy se manda por WhatsApp a mano',
          'Retiro en tienda disponible siempre, exista o no pago o entrega en línea',
          'Que alguien de tu propio equipo —no un programador externo— pueda cambiar un precio o marcar "agotado" el mismo día',
          'Carga rápida desde un celular con señal débil, porque ahí se hace la mayoría de las consultas',
          'Ficha con marca, medida y para qué sirve cada producto, no solo una foto y un nombre',
        ],
      },
      {
        type: 'prose',
        h2: 'Categorías claras, porque el catálogo de una ferretería es enorme',
        paragraphs: [
          'Plomería, eléctrico, pintura, tornillería, herramienta manual y eléctrica, materiales de construcción: una ferretería mediana fácilmente maneja varios cientos de referencias distintas. Meter todo eso en una sola página de "Productos" no simplifica nada — esconde la mayor parte del catálogo detrás de un scroll que casi nadie termina de revisar.',
          'La estructura pesa tanto como el contenido. Categorías y subcategorías pensadas como las nombra el cliente —no como está acomodado el almacén— evitan que alguien abandone la búsqueda a medio camino. Sumarle un buscador que funcione por nombre, marca o código resuelve el resto: el que ya sabe qué quiere no debería tener que navegar ni una sola categoría para encontrarlo.',
          'No es un detalle menor de diseño: es la diferencia entre un catálogo que se usa y uno que se abre una vez, no muestra nada claro, y no se vuelve a abrir. <strong>Un catálogo grande mal organizado convence menos que no tener catálogo</strong>, porque le confirma al cliente la sospecha de que ahí tampoco va a encontrar lo que busca rápido.',
        ],
      },
      {
        type: 'steps',
        h2: 'Catálogo, cotización o tienda completa: no hace falta empezar por lo más caro',
        intro: 'No todas las ferreterías necesitan lo mismo desde el primer día. De menos a más inversión, esto es lo que resuelve cada nivel.',
        items: [
          { h3: '1. Catálogo con disponibilidad y WhatsApp', text: 'Publicas el inventario con ficha, precio y disponibilidad, y el cliente cierra por chat o en el mostrador. Sin carrito ni pasarela de pago — el paso mínimo para dejar de ser invisible en una búsqueda.' },
          { h3: '2. Cotización para pedidos de obra', text: 'Un formulario donde el contratista arma su lista desde el catálogo sin moverse de la obra, indica cantidades y la envía ordenada. Le ahorra dictar un audio de tres minutos, y a ti te ahorra transcribirlo a mano.' },
          { h3: '3. Tienda con carrito y pago en línea', text: 'Cuando ya hay volumen que lo justifica, sumas <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a>, gestión de inventario y checkout completo, con retiro en tienda como alternativa a la entrega.' },
          { h3: '4. Definir la logística antes que el diseño', text: 'Si vas a entregar a obra, decide desde qué monto es gratis y hasta dónde llegas antes de publicarlo. Prometer una entrega que después no puedes cumplir pesa más en contra que no tener el dato publicado.' },
        ],
      },
      {
        type: 'statement',
        text: 'En ferretería nadie compra por el sitio más bonito.',
        strong: 'Compra quien no lo deja esperando un "déjeme revisar y le aviso".',
      },
      {
        type: 'prose',
        h2: 'No hace falta un sistema de inventario perfecto para publicar el catálogo',
        paragraphs: [
          'La duda más común, y la más razonable, suena así: "mi stock cambia a diario, ¿cómo publico algo que puede estar mal en una hora?". Tiene sentido — mostrar disponibilidad falsa es peor que no decir nada, porque le promete al cliente algo que después no cumples.',
          'La salida práctica es separar el catálogo en dos capas. La ficha del producto —qué es, para qué sirve, marca, medida, foto— casi nunca cambia, y esa se puede publicar completa desde el día uno. El precio y la existencia sí cambian, y para esos alcanza con empezar con un botón de WhatsApp que diga "preguntar disponibilidad", hasta que tengas cómo mantenerlo al día en la propia web.',
          'Con eso ya resolviste lo que hoy es imposible sin ir o llamar: que el cliente sepa que tienes el producto. Para las líneas de mayor rotación y precio estable —las que más se buscan— sí vale la pena publicar precio real desde el arranque, aunque el resto del catálogo empiece más simple.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta y qué versión te conviene',
        paragraphs: [
          'Depende de cuánto de esto quieras resolver de una vez. Si tu ferretería es de un solo local y por ahora solo quieres presencia y un WhatsApp directo, sin catálogo, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> parte de $550. Si quieres el catálogo organizado por categoría con cotización por WhatsApp pero sin vender en línea todavía, una <a href="/servicios/diseno-web-corporativo-panama/">Página PYME</a> de 8 a 12 páginas parte de $950. Y si ya vas a vender en línea de verdad —carrito, Yappy o tarjeta, gestión de inventario—, es un proyecto de <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> desde $1,500.',
          'Para una ferretería que ya es cadena o distribuidora, con varias sucursales o la necesidad de conectar el catálogo a un sistema de inventario propio, el proyecto pasa a ser a medida, desde $2,900, con esa integración dentro del alcance.',
          'A eso se suma la infraestructura anual —dominio, hosting y SSL—, que también depende del proyecto: $225 en el plan compartido para un catálogo simple, $350 en el plan cloud que recomendamos para la mayoría, o $550 en un VPS dedicado si la tienda ya mueve tráfico alto. El mantenimiento, para que el catálogo no se quede desactualizado ni el sitio se vuelva un blanco fácil, arranca en $59 al mes y sube a $99 o $189 según qué tan rápido necesites respuesta. Todos los precios están en dólares y no incluyen el 7% de ITBMS. El desglose completo está en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene montar un catálogo en línea',
        paragraphs: [
          'No toda ferretería necesita esto ahora, y decirlo con honestidad ahorra una inversión que no se va a recuperar pronto. Si tu negocio es una ferretería de barrio, prácticamente de puro paso, con una clientela fija que ya sabe que tienes lo que busca y compra en el mostrador sin pensarlo, un catálogo en línea no te va a traer más ventas de las que ya haces — te va a traer el trabajo de mantenerlo actualizado sin un cliente nuevo detrás.',
          'Tampoco conviene si no tienes cómo despachar un pedido. Si vender por internet implica prometer entrega y no tienes quién la haga ni el volumen para justificar contratar a alguien, el catálogo genera una expectativa que no puedes cumplir, y eso pesa más en contra que a favor. Ahí rinde más una ficha de Google Business Profile completa —horario real, fotos, categoría correcta— y un WhatsApp que responda rápido, sin abrir una puerta que del otro lado no puedes atender.',
          'El catálogo empieza a justificarse cuando quieres captar al cliente que hoy se va a la cadena o a otra ferretería porque no sabía que tú también lo tenías, cuando el negocio de obra y contratistas ya pesa lo suficiente como para que cotizar rápido marque la diferencia, o cuando el trabajo de <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a> ya te trae búsquedas que hoy no tienes cómo responder sin catálogo.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para ferreterías',
        items: [
          { q: '¿Cuánto cuesta la web de una ferretería en Panamá?', a: 'Depende de si vas a vender en línea o solo mostrar catálogo. Una landing sin catálogo parte de $550; una Página PYME con catálogo por categoría y cotización por WhatsApp parte de $950; y una tienda completa con carrito y pago en línea parte de $1,500. Los precios están en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Tengo que subir todo mi inventario para empezar?', a: 'No. Si ya vive en un sistema o un Excel ordenado, se puede importar en bloque. Si no existe ese archivo, se prioriza lo que más rota y el resto se va sumando después — no hace falta cargar el catálogo completo el primer día.' },
          { q: '¿Se puede cobrar en línea con Yappy?', a: 'Sí, se integra junto con tarjeta, y conviene dejar el retiro en tienda como alternativa a la entrega para el cliente que prefiere pagar en línea pero pasar a recoger su pedido.' },
          { q: '¿Qué pasa si mis precios cambian todo el tiempo?', a: 'La ficha —qué es, marca, medida, foto— se publica una sola vez y casi no cambia. El precio y la disponibilidad se actualizan aparte, desde un panel propio, empezando por los productos que sí puedes mantener al día. Un catálogo desactualizado es peor que no tener catálogo.' },
          { q: '¿Un catálogo online me garantiza aparecer primero en Google?', a: 'No, y cualquiera que lo prometa está exagerando. Lo que sí ayuda al cliente que busca "ferretería cerca de mí" es una ficha de Google Business Profile completa y SEO local sostenido en el tiempo; el catálogo vende una vez que ese cliente ya entró a tu web.' },
          { q: '¿Me conviene si soy una ferretería pequeña de barrio?', a: 'Si vives de una clientela fija que ya te compra en el mostrador y no buscas crecer más allá de eso, probablemente no todavía. El catálogo rinde cuando quieres captar al cliente que no sabe que tienes el producto, o cuando el negocio de obra ya pesa lo suficiente como para que cotizar rápido haga la diferencia.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Diseño web para ferreterías y materiales' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pagos con Yappy' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que venda tu catálogo más allá del mostrador',
      wa: 'Hola, quiero cotizar la web de mi ferretería o distribuidora de materiales en Panamá. ¿Me asesoran?',
    },
  },
];
