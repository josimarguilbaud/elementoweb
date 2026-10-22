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
      alt: 'Martillo cruzado con un destornillador, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para ferreterías en Panamá sirve para que el cliente sepa, desde el celular, que tienes el producto antes de salir de casa: catálogo por categorías del rubro, buscador por nombre, marca o código, precio y disponibilidad cuando es posible, y cotización de pedidos de obra para contratistas. Así lo armamos en Elemento Web, en Ciudad de Panamá.',
      'Un contratista que necesita cien bloques para el lunes y un vecino con el tubo del lavamanos roto un domingo buscan lo mismo: quién lo tiene hoy. Esta guía explica qué publicar, por dónde empezar, cuánto cuesta y cuándo todavía no conviene.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué una ferretería necesita mostrar su catálogo en línea?',
        paragraphs: [
          'Porque la elección de ferretería ya no se hace frente al mostrador. El vecino busca "ferretería cerca de mí" y el contratista compara precio y existencia en tres proveedores antes de un pedido grande; se queda con la venta el que responde primero y sin rodeos, aunque su local quede más lejos. Si tu ferretería no aparece en esa búsqueda, ni entra en la comparación.',
          'El mostrador sigue siendo el corazón del negocio, pero deja de ser la única puerta: cada producto publicado con precio y disponibilidad es una venta que se puede cerrar a las nueve de la noche o un domingo. El detalle de cómo lo estructuramos está en nuestra <a href="/industrias/diseno-web-ferreterias-materiales-panama/">página de diseño web para ferreterías</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué necesita el diseño web de una ferretería para competir?',
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
        h2: '¿Cómo organizar el catálogo de una ferretería con cientos de productos?',
        paragraphs: [
          'Por categorías y subcategorías como las nombra el cliente, no como está acomodado el almacén. Una ferretería mediana maneja varios cientos de referencias —plomería, eléctrico, pintura, tornillería, herramienta manual y eléctrica, materiales de construcción—, y meterlas en una sola página de "Productos" esconde la mayor parte detrás de un scroll que casi nadie termina.',
          'El buscador por nombre, marca o código resuelve el resto: quien ya sabe qué quiere no debería navegar ninguna categoría. <strong>Un catálogo grande mal organizado convence menos que no tener catálogo</strong>, porque confirma la sospecha de que ahí tampoco se encuentra nada rápido.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Catálogo, cotización o tienda completa: por dónde empezar?',
        intro: 'No hace falta empezar por lo más caro. De menos a más inversión:',
        items: [
          { h3: '1. Catálogo con disponibilidad y WhatsApp', text: 'Publicas el inventario con ficha, precio y disponibilidad, y el cliente cierra por chat o en el mostrador. Sin carrito ni pasarela: el paso mínimo para dejar de ser invisible.' },
          { h3: '2. Cotización para pedidos de obra', text: 'El contratista arma su lista desde el catálogo, indica cantidades y la envía ordenada, en vez de dictar un audio de tres minutos que alguien transcribe a mano.' },
          { h3: '3. Tienda con carrito y pago en línea', text: 'Cuando el volumen lo justifica, sumas <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a>, gestión de inventario y checkout completo, con retiro en tienda como alternativa a la entrega.' },
          { h3: '4. Definir la logística antes que el diseño', text: 'Si vas a entregar a obra, decide desde qué monto es gratis y hasta dónde llegas antes de publicarlo. Prometer una entrega que no puedes cumplir pesa más que no tener el dato.' },
        ],
      },
      {
        type: 'statement',
        text: 'En ferretería nadie compra por el sitio más bonito.',
        strong: 'Compra quien no lo deja esperando un "déjeme revisar y le aviso".',
      },
      {
        type: 'prose',
        h2: '¿Cómo publicar el catálogo si el stock cambia a diario?',
        paragraphs: [
          'Separándolo en dos capas. La ficha del producto —qué es, para qué sirve, marca, medida, foto— casi nunca cambia y se publica completa desde el día uno. Precio y existencia sí cambian: para esos basta empezar con un botón de WhatsApp de "preguntar disponibilidad" hasta que puedas mantenerlos al día en la web, porque mostrar disponibilidad falsa es peor que no decir nada.',
          'Así ya resuelves lo que hoy exige ir o llamar: que el cliente sepa que tienes el producto. En las líneas de mayor rotación y precio estable, las más buscadas, sí vale publicar precio real desde el arranque.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de una ferretería en Panamá?',
        paragraphs: [
          'Solo presencia y un WhatsApp directo, sin catálogo: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550. Catálogo por categoría con cotización por WhatsApp, sin vender en línea: una <a href="/servicios/diseno-web-corporativo-panama/">Web empresarial</a> de hasta 6 páginas desde $1,250. Venta en línea con carrito, Yappy o tarjeta y gestión de inventario: <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> desde $1,950. Una cadena o distribuidora con varias sucursales o catálogo conectado a un sistema de inventario propio pasa a proyecto a medida desde $2,900.',
          'Se suma la infraestructura anual —dominio, hosting y SSL—: $225 en el plan compartido para un catálogo simple, $350 en el cloud que recomendamos para la mayoría o $550 en un VPS dedicado si la tienda ya mueve tráfico alto. El mantenimiento arranca en $99 al mes y sube a $169 o $319 según la rapidez de respuesta que necesites. Precios en dólares, sin el 7% de ITBMS; el desglose está en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene a una ferretería montar un catálogo en línea?',
        paragraphs: [
          'Si eres una ferretería de barrio, de paso, con clientela fija que compra en el mostrador sin pensarlo, un catálogo en línea te traerá el trabajo de mantenerlo sin un cliente nuevo detrás. Tampoco conviene si vender por internet implica prometer entrega y no tienes quién la haga. Ahí rinde más una ficha de Google Business Profile completa —horario real, fotos, categoría correcta— y un WhatsApp que responda rápido.',
          'El catálogo se justifica cuando quieres captar al cliente que hoy se va a la cadena porque no sabía que tú también lo tenías, cuando el negocio de obra y contratistas pesa lo suficiente como para que cotizar rápido marque la diferencia, o cuando el trabajo de <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a> ya te trae búsquedas que no puedes responder sin catálogo.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para ferreterías',
        items: [
          { q: '¿Cuánto cuesta la web de una ferretería en Panamá?', a: 'Depende de si vas a vender en línea o solo mostrar catálogo. Una landing sin catálogo parte de $550; una Web empresarial con catálogo por categoría y cotización por WhatsApp parte de $1,250; y una tienda completa con carrito y pago en línea parte de $1,950. Los precios están en dólares y no incluyen el 7% de ITBMS.' },
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
