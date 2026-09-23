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
      alt: 'Sala de exhibición de un concesionario de autos moderno, con varias hileras de vehículos nuevos bajo luz brillante de techo',
    },
    lead: [
      'El comprador de un auto en Panamá abre el celular, no la puerta del lote. Compara tres o cuatro concesionarios la misma noche, mira las fotos del modelo que le interesa, calcula mentalmente cuánto pagaría al mes y decide a cuál escribirle antes de haber pisado un solo showroom.',
      'Esa decisión se juega casi entera en cuatro cosas: si la foto que ve es el auto real que está en el lote (no una imagen del catálogo del fabricante), si puede filtrar el inventario por lo que de verdad le importa, si entiende rápido cuánto pagaría al mes, y si puede escribir por WhatsApp para agendar la prueba de manejo sin llamar. Esta guía se enfoca en esas cuatro cosas, y también en cuándo, con honestidad, todavía no conviene invertir en ellas.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La compra ya está casi decidida antes de que alguien pise el lote',
        paragraphs: [
          'Nadie llega a un concesionario a "ver qué hay". Llega con dos o tres modelos ya comparados en el celular, un rango de precio en la cabeza y, casi siempre, una idea aproximada de cuánto puede pagar al mes. El trabajo de decidir ya se hizo antes de manejar hasta el lote: lo que queda es confirmar en persona lo que la web ya prometió.',
          'El problema es que buena parte de las webs de concesionarios en Panamá muestran el auto equivocado: la foto de catálogo del fabricante, la misma que usa el concesionario de la otra esquina, en vez de la unidad real que está parqueada en el lote con su color, su equipamiento y sus kilómetros exactos. El comprador que compara cuatro páginas a la vez nota la diferencia de inmediato, y elige escribirle al que sí le mostró el auto que puede tocar el sábado.',
          'Nuestra <a href="/industrias/diseno-web-concesionarios-autos-panama/">página de diseño web para concesionarios</a> entra en el detalle completo de cómo estructuramos esa web. Aquí nos enfocamos en las cuatro decisiones que de verdad mueven la aguja: fotos reales, filtros que funcionan, financiamiento como llamado principal, y honestidad sobre cuándo esto todavía no te conviene.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que necesita el inventario en línea de un concesionario',
        intro: 'Si tu web no resuelve esto, el prospecto compara tu inventario contra el de otro concesionario y decide antes de escribirte.',
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
        h2: 'La foto real del lote vende; la del catálogo del fabricante no',
        paragraphs: [
          'La foto de catálogo es honesta sobre el modelo y deshonesta sobre todo lo demás: no muestra el color exacto que hay en el lote, ni el paquete de equipamiento de esa unidad, ni el rayón en la puerta que el comprador va a ver de todas formas cuando llegue. Usarla no es mentir, pero sí es esconder la única información que el comprador está buscando: ¿este es el auto que puedo comprar hoy, o es una promesa genérica del fabricante?',
          'Un inventario con fotos reales funciona, en la lógica, parecido a una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a>: catálogo, ficha por unidad, filtros. La diferencia está en el cierre. En una tienda el cierre es un pago; en un concesionario el cierre es un prospecto calificado que ya vio el auto real, ya tiene una idea de la cuota y ya quiere agendar la prueba de manejo.',
          'Con los seminuevos esto pesa el doble. El comprador de un usado desconfía por naturaleza —quiere ver el kilometraje, el desgaste, el interior tal cual— y una ficha con pocas fotos o fotos tomadas de noche se lee como algo que se esconde, no como un detalle menor.',
        ],
      },
      {
        type: 'cards',
        h2: 'Cada comprador filtra distinto antes de escribirte',
        intro: 'El inventario tiene que servirle a los tres al mismo tiempo, no solo al que ya sabe exactamente qué quiere.',
        items: [
          { h3: 'El que ya fijó el presupuesto', text: 'No busca una marca: busca qué le alcanza. Filtra por precio y quiere ver, cerca de ese número, en qué se le va la cuota mensual antes de decidir si sigue mirando o escribe.' },
          { h3: 'El que ya eligió la marca', text: 'Quiere ver todo lo que tienes de esa marca en un clic: modelo, año, versión. Si tu filtro por marca no existe o está escondido, compara tu inventario con el del siguiente concesionario en la misma pestaña del celular.' },
          { h3: 'El que compara antes de decidir algo', text: 'Filtra por año y kilometraje para poner varias unidades una al lado de la otra. Es el más sensible a fotos reales y a que el precio esté publicado: cualquier duda la resuelve descartando, no preguntando.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo estructuramos una web de inventario que filtra antes de la llamada',
        items: [
          { h3: 'Fotos reales por unidad', text: 'Definimos cómo tu equipo fotografía cada auto que entra al lote —ángulos, luz, kilometraje visible— para que la ficha muestre la unidad real, no una versión genérica del modelo.' },
          { h3: 'Filtros que de verdad funcionan', text: 'Marca, precio, año y kilometraje, visibles desde la primera pantalla del inventario, con resultados que no se queden en cero por un filtro mal indexado.' },
          { h3: 'Financiamiento como llamado principal', text: 'Encima de "ver más", el botón que más se nota es "cuánto pagaría al mes". Para apartar una unidad mientras se aprueba el crédito, se puede cobrar un depósito de reserva con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a> directo desde la ficha.' },
          { h3: 'WhatsApp directo para la prueba de manejo', text: 'Cada ficha lleva un botón que ya incluye el modelo y la unidad en el mensaje, para que tu vendedor tome la conversación sabiendo qué auto la generó. Si prefieres una agenda formal, se conecta con <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas online</a>.' },
        ],
      },
      {
        type: 'statement',
        text: 'Casi nadie en Panamá compra un auto de contado. La pregunta que de verdad cierra la venta no es cuánto cuesta:',
        strong: 'es cuánto se paga al mes.',
      },
      {
        type: 'prose',
        h2: 'El financiamiento decide más que el precio total',
        paragraphs: [
          'Publicar el precio total del auto responde una pregunta que casi nadie hace de esa forma. La pregunta real, la que decide si el comprador sigue mirando o te escribe, es cuánto le queda la cuota. Un concesionario que responde eso en la web —con un simulador o al menos una solicitud de financiamiento clara, visible, sin esconderla hasta la visita— avanza la venta desde el celular del comprador, antes de que compare al siguiente concesionario.',
          'La aprobación final y la tasa siempre dependen del banco o la financiera, y conviene decirlo así de claro para no generar una expectativa que después no se cumple. Lo que sí controla el concesionario es qué tan fácil hace pedir esa cifra: un formulario corto que pida el modelo de interés, el inicial disponible y el plazo deseado convierte más que una página que solo muestra el precio y espera la llamada.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir todavía en esto',
        paragraphs: [
          'No todo concesionario necesita un inventario en línea con fotos reales y filtros, y decirlo con honestidad ahorra un gasto que no se recupera. Si tu concesionario vende una sola marca y la marca matriz ya te asignó un cupo mensual de unidades —y ese cupo se vende solo, sin capacidad tuya de traer más inventario ni de vender por encima de lo asignado—, el problema no es que falten prospectos: es que no puedes atenderlos aunque lleguen. Ahí, invertir en un catálogo elaborado compite por un cliente que de todas formas no vas a poder surtir este mes.',
          'En ese caso rinde más una presencia simple: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con los modelos disponibles de la marca y el WhatsApp del asesor, desde $550 más ITBMS. El inventario navegable con filtros y financiamiento se justifica cuando manejas varias marcas, cuando tienes lote de seminuevos con rotación real, o cuando la marca matriz te deja crecer el volumen y la limitación deja de ser el cupo para pasar a ser cuántos prospectos puedes convertir.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para concesionarios',
        items: [
          { q: '¿Cuánto cuesta la web de un concesionario con inventario en Panamá?', a: 'Depende de si necesitas catálogo con filtros o solo presencia informativa. Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con los modelos disponibles y WhatsApp parte de $550. Un inventario tipo catálogo con fichas y filtros se acerca a una <a href="/servicios/tiendas-online-ecommerce-panama/">plataforma con catálogo</a> desde $1,500, y un inventario que se actualiza solo, a medida, parte de $2,900. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Debo publicar el precio de cada unidad?', a: 'Sí, sobre todo en seminuevos. "Consultar precio" hace que la mayoría de los compradores siga de largo, y los pocos que escriben solo preguntan eso. Publicar el precio no baja el margen: sube cuántos de los que ven la ficha terminan escribiendo.' },
          { q: '¿La web puede calcular el financiamiento?', a: 'Se puede montar un simulador que dé una cuota estimada según el monto, el inicial y el plazo. La aprobación y la tasa real siempre dependen del banco o la financiera, así que lo dejamos claro en la misma página para no generar una expectativa que el banco después no confirme.' },
          { q: '¿Puedo cobrar un depósito para apartar un auto?', a: 'Sí. Mientras se aprueba el financiamiento, muchos concesionarios cobran un depósito de reserva para apartar la unidad. Se puede procesar directo desde la ficha con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a>, sin depender de una transferencia y su captura de pantalla.' },
          { q: '¿Cómo subo y bajo unidades del inventario yo mismo?', a: 'Ese es el punto de partida: un panel donde tu equipo carga una unidad nueva con sus fotos en minutos y la retira en cuanto se vende. Un inventario con autos vendidos que siguen publicados semanas después daña más la confianza que no tener catálogo.' },
          { q: '¿Cuánto cuesta mantener la web funcionando cada mes?', a: 'El mantenimiento parte de $59/mes (respaldos, actualizaciones y monitoreo), sube a $99/mes con respuesta el mismo día, y a $189/mes para operaciones que no pueden darse el lujo de una caída. La infraestructura (dominio, hosting y SSL) va aparte: desde $225/año en plan compartido, $350/año en cloud o $550/año en VPS. Todo en dólares y sin el 7% de ITBMS.' },
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
