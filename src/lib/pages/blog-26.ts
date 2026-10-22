/* BLOG — Lote 26: guía long-form sobre diseño web para concesionarios de autos
   en Panamá. Ángulo: inventario con fotos reales del lote (no del catálogo del
   fabricante), filtros de compra, financiamiento como CTA principal y honestidad
   sobre cuándo un concesionario de una sola marca con cupo asignado no lo necesita.
   PageData con parent { slug: 'blog' }; el listado /blog la recoge por fecha
   y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog26: PageData[] = [
  {
    slug: 'blog/diseno-web-para-concesionarios-autos-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para concesionarios en Panamá: qué vende el auto',
    description: 'Qué debe tener la web de un concesionario en Panamá: fotos reales de cada unidad, filtros por marca y precio, y financiamiento como llamado principal.',
    h1: 'Diseño web para concesionarios de autos en Panamá: qué vende el auto antes de que alguien pise el lote',
    breadcrumb: 'Diseño web para concesionarios',
    category: 'Diseño web',
    date: '2026-08-29',
    heroImage: {
      src: '/images/blog/diseno-web-para-concesionarios-autos-panama.jpg',
      alt: 'Llave de auto con control remoto, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para concesionarios de autos en Panamá vende cuando el inventario muestra fotos reales de cada unidad del lote, deja filtrar por marca, precio, año y kilometraje, pone el financiamiento ("cuánto pagaría al mes") como botón principal y abre WhatsApp para la prueba de manejo. Así lo estructuramos en Elemento Web, Ciudad de Panamá.',
      'El comprador compara tres o cuatro concesionarios desde el celular la misma noche y decide a cuál escribir antes de pisar un showroom. Esta guía explica cada pieza y cuándo, con honestidad, todavía no conviene invertir.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué decide el comprador de un auto antes de llegar al lote?',
        paragraphs: [
          'Casi todo. Llega con dos o tres modelos comparados, un rango de precio y una idea de cuánto puede pagar al mes; en el lote solo confirma lo que la web prometió. Muchas webs de concesionarios en Panamá muestran el auto equivocado: la foto de catálogo del fabricante, la misma que usa el concesionario de la otra esquina, en vez de la unidad real con su color, su equipamiento y sus kilómetros. El comprador elige escribirle al que le mostró el auto que puede tocar el sábado.',
          'El detalle completo de cómo estructuramos esa web está en nuestra <a href="/industrias/diseno-web-concesionarios-autos-panama/">página de diseño web para concesionarios</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe tener el diseño web de un concesionario de autos?',
        intro: 'Si tu inventario en línea no resuelve esto, el prospecto decide por otro concesionario antes de escribirte.',
        items: [
          'Fotos de la unidad exacta que está en el lote, tomadas de día, nunca la foto de catálogo del fabricante',
          'Varias fotos por unidad: exterior desde distintos ángulos, interior y el odómetro visible',
          'Filtro por marca, precio, año y kilometraje, visible desde la primera pantalla del inventario',
          'Precio publicado en cada unidad, sin "consultar precio" que hace que el comprador siga de largo',
          'Solicitud de financiamiento como botón principal de cada ficha, no un enlace escondido abajo',
          'WhatsApp directo desde cada ficha para agendar la prueba de manejo de esa unidad específica',
          'Panel simple para que tu equipo suba y baje unidades sin depender de un desarrollador',
          'Retiro inmediato de una unidad vendida: nada daña más la confianza que escribir por un auto que ya no está',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué usar fotos reales del lote y no las del fabricante?',
        paragraphs: [
          'La foto de catálogo es honesta sobre el modelo y esconde lo demás: el color exacto, el paquete de equipamiento de esa unidad y el rayón en la puerta que el comprador verá de todas formas. Esconde justo lo que busca: si es el auto que puede comprar hoy. Con los seminuevos pesa el doble: el comprador de un usado quiere ver kilometraje, desgaste e interior, y una ficha con pocas fotos o tomadas de noche se lee como algo que se esconde.',
          'Definimos con tu equipo cómo fotografiar cada auto que entra al lote —ángulos, luz, kilometraje visible—. El inventario funciona como una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> (catálogo, ficha por unidad, filtros), pero el cierre no es un pago: es un prospecto calificado que ya vio el auto real, tiene idea de la cuota y quiere agendar la prueba de manejo.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Cómo filtra el inventario cada tipo de comprador?',
        intro: 'El inventario tiene que servirle a los tres al mismo tiempo, con filtros que no se queden en cero por un error de indexación.',
        items: [
          { h3: 'El que ya fijó el presupuesto', text: 'No busca una marca: busca qué le alcanza. Filtra por precio y quiere ver en qué se le va la cuota mensual antes de decidir si escribe.' },
          { h3: 'El que ya eligió la marca', text: 'Quiere ver todo lo que tienes de esa marca en un clic: modelo, año, versión. Si el filtro por marca no existe o está escondido, pasa al siguiente concesionario.' },
          { h3: 'El que compara antes de decidir algo', text: 'Filtra por año y kilometraje para poner varias unidades lado a lado. Es el más sensible a fotos reales y a precio publicado: cualquier duda la resuelve descartando, no preguntando.' },
        ],
      },
      {
        type: 'statement',
        text: 'Casi nadie en Panamá compra un auto de contado. La pregunta que de verdad cierra la venta no es cuánto cuesta:',
        strong: 'es cuánto se paga al mes.',
      },
      {
        type: 'prose',
        h2: '¿Por qué el financiamiento debe ser el botón principal?',
        paragraphs: [
          'Porque la pregunta que decide si el comprador te escribe es cuánto le queda la cuota, no el precio total. Un simulador o una solicitud de financiamiento visible avanza la venta desde el celular, antes de que compare el siguiente concesionario. Un formulario corto que pida modelo de interés, inicial disponible y plazo deseado convierte más que una página que solo muestra el precio. La aprobación y la tasa dependen del banco o la financiera, y conviene decirlo claro.',
          'Para apartar una unidad mientras se aprueba el crédito, se puede cobrar un depósito de reserva con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a> desde la ficha. El botón de WhatsApp de cada ficha lleva el modelo y la unidad en el mensaje, para que el vendedor sepa qué auto generó la conversación; si prefieres una agenda formal para la prueba de manejo, se conecta con <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas online</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene a un concesionario invertir en inventario en línea?',
        paragraphs: [
          'Si vendes una sola marca con un cupo mensual asignado por la marca matriz que se vende solo, sin poder traer más unidades, no te faltan prospectos: te falta inventario para atenderlos. Ahí rinde más una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con los modelos disponibles y el WhatsApp del asesor, desde $550 más ITBMS.',
          'El inventario con filtros y financiamiento se justifica cuando manejas varias marcas, tienes lote de seminuevos con rotación real o la marca matriz te deja crecer el volumen y el límite pasa a ser cuántos prospectos conviertes.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para concesionarios',
        items: [
          { q: '¿Cuánto cuesta la web de un concesionario con inventario en Panamá?', a: 'Depende de si necesitas catálogo con filtros o solo presencia informativa. Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con los modelos disponibles y WhatsApp parte de $550. Un inventario tipo catálogo con fichas y filtros se acerca a una <a href="/servicios/tiendas-online-ecommerce-panama/">plataforma con catálogo</a> desde $1,950, y un inventario que se actualiza solo, a medida, parte de $2,900. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Debo publicar el precio de cada unidad?', a: 'Sí, sobre todo en seminuevos. "Consultar precio" hace que la mayoría de los compradores siga de largo, y los pocos que escriben solo preguntan eso. Publicar el precio no baja el margen: sube cuántos de los que ven la ficha terminan escribiendo.' },
          { q: '¿La web puede calcular el financiamiento?', a: 'Se puede montar un simulador que dé una cuota estimada según el monto, el inicial y el plazo. La aprobación y la tasa real siempre dependen del banco o la financiera, así que lo dejamos claro en la misma página para no generar una expectativa que el banco después no confirme.' },
          { q: '¿Puedo cobrar un depósito para apartar un auto?', a: 'Sí. Mientras se aprueba el financiamiento, muchos concesionarios cobran un depósito de reserva para apartar la unidad. Se puede procesar directo desde la ficha con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a>, sin depender de una transferencia y su captura de pantalla.' },
          { q: '¿Cómo subo y bajo unidades del inventario yo mismo?', a: 'Ese es el punto de partida: un panel donde tu equipo carga una unidad nueva con sus fotos en minutos y la retira en cuanto se vende. Un inventario con autos vendidos que siguen publicados semanas después daña más la confianza que no tener catálogo.' },
          { q: '¿Cuánto cuesta mantener la web funcionando cada mes?', a: 'El mantenimiento parte de $99/mes (respaldos, actualizaciones y monitoreo), sube a $169/mes con respuesta el mismo día, y a $319/mes para operaciones que no pueden darse el lujo de una caída. La infraestructura (dominio, hosting y SSL) va aparte: desde $225/año en plan compartido, $350/año en cloud o $550/año en VPS. Todo en dólares y sin el 7% de ITBMS.' },
          { q: '¿Cuándo NO conviene invertir en un inventario propio?', a: 'Cuando vendes una sola marca con un cupo mensual ya asignado por la marca matriz y sin capacidad de vender por encima de eso. Ahí el freno no es la falta de prospectos: es el cupo. Conviene esperar a tener varias marcas, un lote de seminuevos con rotación real, o un cupo que la marca te deje crecer.' },
          { q: '¿Sirve también para vender seminuevos y recibir autos usados como parte de pago?', a: 'Sí, y suele generar tantos prospectos como la venta de nuevos. Un formulario de valoración para quien quiere entregar su usado, más una sección de seminuevos con las mismas fotos reales y filtros, convierte a ese visitante en dos prospectos a la vez: quien vende y quien compra.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-concesionarios-autos-panama', label: 'Diseño web para concesionarios de autos' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y pasarelas de pago' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas online' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que muestra tu inventario real y filtra antes de la llamada',
      wa: 'Hola, quiero cotizar la web de mi concesionario con inventario en línea y financiamiento.',
    },
  },
];
