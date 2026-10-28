/* SILO INDUSTRIAS (lote 2c): ferreterías, eventos/catering/bodas, consultoras
   y arquitectos/interiores. Regla dura: contenido REAL por rubro, no plantillas
   clonadas. Cada nicho tiene su dolor, su checklist y su forma de vender. */
import type { PageData } from '../types';

const parent = { slug: 'industrias', label: 'Industrias' };

export const industrias2c: PageData[] = [
  /* ---------- FERRETERÍAS Y MATERIALES ---------- */
  {
    slug: 'industrias/diseno-web-ferreterias-materiales-panama',
    parent,
    title: 'Diseño Web para Ferreterías en Panamá | Catálogo Online',
    description: 'Diseño web para ferreterías y materiales de construcción en Panamá: catálogo con disponibilidad, venta en línea con Yappy y retiro en tienda.',
    h1: 'Diseño web para ferreterías y materiales',
    breadcrumb: 'Ferreterías y Materiales',
    heroImage: { src: '/images/industrias/diseno-web-ferreterias-materiales-panama.jpg', alt: 'Llave ajustable con tuercas y tornillos, en cromo plateado, render 3D sobre fondo gris claro' },
    service: { type: 'Diseño web para ferreterías y materiales de construcción' },
    lead: [
      'Tu cliente ya no arranca en el mostrador: busca en el celular quién tiene el producto, a cuánto y si lo puede recoger hoy. Si tu ferretería no aparece con esa respuesta, compró en la de al lado.',
      'El diseño web para ferreterías en Panamá que hacemos en Elemento Web incluye catálogo por categoría con precio y disponibilidad, búsqueda por marca o código, cotización de obra y pago con Yappy o retiro en tienda. Un catálogo con cotización por WhatsApp arranca desde $1,250; la tienda con venta en línea, desde $1,950.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una ferretería en Panamá?',
        items: [
          'Catálogo por categoría: plomería, eléctrico, pintura, herramienta y materiales',
          'Precio y disponibilidad visibles, no un catálogo mudo que obliga a llamar',
          'Búsqueda por producto, marca o código para encontrar en segundos',
          'Venta en línea con pago Yappy o tarjeta y opción de retiro en tienda',
          'Cotización rápida para compras de obra y clientes por volumen',
          'Fichas con especificaciones, medidas y usos, no solo una foto',
          'Panel para que tu equipo actualice precios y existencias en minutos',
          'Velocidad en celular, que es donde consulta el maestro de obra en plena faena',
        ],
      },
      {
        type: 'prose',
        h2: '¿Para qué le sirve una web a una ferretería de barrio?',
        paragraphs: [
          'La ferretería tradicional vende en un radio de pocas cuadras, y las cadenas grandes y las tiendas en línea ya se comen ese radio con catálogos que el cliente revisa antes de salir de casa. Una web con tu inventario real rompe ese techo: <strong>tu ventaja deja de ser la ubicación y pasa a ser tener lo que buscan, visible y disponible.</strong>',
          'No reemplaza el mostrador: suma uno que atiende de noche y los domingos. Con una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> el pedido entra solo y tu equipo lo prepara; con <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a> apareces cuando alguien busca «ferretería cerca» con la compra decidida.',
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le vende la web de tu ferretería',
        intro: 'Por el mismo pasillo pasan clientes muy distintos. La web tiene que atender a los tres sin confundir a ninguno.',
        items: [
          { h3: 'El maestro de obra', text: 'Sabe exactamente qué necesita y cuánto. Quiere buscar por código o marca, ver si hay existencia y precio, y resolver rápido para volver a la faena. Le pesa la disponibilidad real.' },
          { h3: 'El cliente de casa', text: 'Va a arreglar algo y no sabe el nombre técnico. Le sirven las categorías claras, las fichas que explican para qué sirve cada cosa y poder preguntar por WhatsApp antes de comprar.' },
          { h3: 'La constructora o comprador por volumen', text: 'Compra en cantidad y necesita cotización. Una sección de cotización rápida y precios por volumen convierte esa consulta en una orden grande, sin ir y venir por teléfono.', link: { slug: 'industrias/diseno-web-constructoras-panama', label: 'Web para Constructoras' } },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué el precio y la disponibilidad deciden la venta?',
        paragraphs: [
          'En ferretería el cliente es leal a quien tiene el producto, al precio justo, hoy. Un catálogo con fotos bonitas que esconde el precio pierde contra el que responde de una: sí lo tengo, cuesta esto, lo recoges o te lo llevo.',
          'El corazón de la web es que precio y stock estén al día. <strong>Un catálogo desactualizado es peor que no tener web</strong>, porque promete algo que no cumples; por eso el panel permite cambiar un precio o marcar agotado en segundos. Y con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy</a> el cliente cierra la compra desde la obra, sin cuadrar efectivo ni pasar por caja.',
        ],
      },
      {
        type: 'prose',
        h2: 'Una entrada por producto y otra por problema',
        paragraphs: [
          'El profesional pide por nombre técnico o por marca; el particular llega el sábado con un problema, no con un producto: "se me está botando el lavamanos". Casi todas las webs del rubro le hablan solo al primero, con códigos y referencias, y el particular, que es el que más margen deja, se pierde.',
          'Servir a los dos no exige dos webs, exige dos entradas: una por categoría de producto y otra por problema —"reparar una fuga", "instalar un abanico de techo", "pintar una habitación"— que lleve a la lista de lo que hace falta comprar. <strong>Esa segunda entrada es tráfico que casi ninguna ferretería panameña captura</strong>, y quien busca cómo resolver algo termina comprándole a quien se lo explicó.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo cotizar una lista de obra más rápido que la competencia?',
        paragraphs: [
          'La venta grande de una ferretería es la cotización de obra. Un contratista pide precio de cuarenta ítems a tres ferreterías y muchas veces elige a la que contestó primero con algo ordenado, no a la más barata.',
          'Hoy esa lista llega por WhatsApp en foto o en audio, alguien la transcribe y busca precios uno por uno. La web recorta ese ciclo sin una tienda completa: un formulario donde el contratista arma su lista desde el catálogo con cantidades, y la solicitud llega ordenada y lista para poner precios.',
          'No hace falta publicar precios para que funcione. <strong>La ventaja está en la velocidad y el orden de la respuesta</strong>, que es lo que valora un contratista con la obra parada.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que un cliente compre en la ferretería de al lado',
        intro: 'Cosas que decide alguien con una obra parada o una gotera en la casa.',
        items: [
          'Sin catálogo: no se sabe si tienes el producto sin ir o llamar',
          'Precios ausentes incluso en los productos de mayor rotación',
          'Sin decir qué marcas se manejan, cuando el profesional compra por marca',
          'Horario de sábado sin especificar, que es el día del cliente particular',
          'Sin forma de mandar una lista de cotización que no sea una foto por WhatsApp',
          'Nada sobre entrega a obra ni desde qué monto es gratis',
          'Sin mención de crédito para contratistas ni cómo se solicita',
          'Ubicación sin indicación de dónde cargar ni si hay acceso para camión',
        ],
      },
      {
        type: 'prose',
        h2: '¿Se puede publicar el catálogo sin sistema de inventario?',
        paragraphs: [
          'Sí, separando lo que cambia de lo que no. La ficha del producto —qué es, para qué sirve, marca, medidas, foto— no cambia; el precio y el stock sí. Se publica el catálogo completo con ficha y un botón de "consultar disponibilidad" a WhatsApp, sin esperar a tener un ERP.',
          'Con eso el cliente descubre que tienes el producto, que hoy no puede saber sin ir, y tú recibes una consulta concreta en lugar de un "¿tienen tubería?". Los productos de alta rotación y precio estable sí conviene publicarlos con precio. <strong>Cincuenta productos bien hechos valen más que esperar dos años al sistema perfecto.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: cotizaciones y qué producto se busca y no tienes',
        paragraphs: [
          'La métrica que más rinde es la <strong>solicitud de cotización</strong>: cuántas entraron, de qué monto aproximado y cuántas se cerraron. Ahí está el volumen del negocio.',
          'La segunda es qué buscó la gente en tu catálogo y no encontró: cada búsqueda sin resultado es un cliente que se fue a otra ferretería, y esa lista es mejor guía de compra que la intuición. Sumado a las consultas por producto, te dice qué artículo merece precio y stock publicados y qué categorías atraen a particulares o a profesionales. El detalle está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué le pregunta un cliente a la IA antes de ir a una ferretería en Panamá?',
        paragraphs: [
          'El maestro de obra y el que repara su casa también le preguntan al celular, y a veces a un asistente de IA: «¿qué ferretería en La Chorrera tiene bloques y cemento con entrega?», «¿dónde compro pintura para exteriores cerca de Villa Lucre?» o «¿qué ferretería en Panamá cotiza una lista de materiales por WhatsApp?». La respuesta nombra pocas tiendas, y el cliente va o escribe a esas.',
          'Para aparecer ahí, la IA tiene que encontrar en tu web qué categorías y marcas vendes, a qué zonas entregas y cómo se cotiza, una ficha de Google Business Profile completa y con reseñas, el mismo nombre, teléfono y dirección en la web, la ficha y los directorios, y respuestas a esas preguntas escritas en tu sitio. <strong>Una ferretería sin web le deja esa respuesta a la que sí tiene.</strong>',
          'Eso no garantiza que te nombre, pero sube las probabilidades, y se apoya en el SEO local de siempre. Lo explicamos en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a> y en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una ferretería?', a: 'Con catálogo y venta en línea funciona como un <a href="/servicios/tiendas-online-ecommerce-panama/">e-commerce</a>: desde el rango de $1,950 según el tamaño del catálogo y las integraciones. Si arrancas solo con catálogo y cotización por WhatsApp, puedes partir de una <a href="/servicios/diseno-web-corporativo-panama/">web PYME</a> desde $1,250. Todo con cotización cerrada por escrito antes de empezar.' },
          { q: '¿Tengo que subir miles de productos a mano?', a: 'No necesariamente. Si tu inventario ya vive en un sistema o en un Excel ordenado, evaluamos importarlo en bloque. Cuando no hay sistema, priorizamos las líneas que más vendes y el resto se va sumando; no hace falta cargar todo el día uno.' },
          { q: '¿Puedo cobrar en línea con Yappy?', a: 'Sí. Integramos <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy</a> y tarjeta para que el cliente pague desde la obra o desde casa. También dejamos la opción de pagar al retirar en tienda, que en ferretería sigue siendo muy usada.' },
          { q: '¿Y si no quiero vender en línea, solo mostrar el catálogo?', a: 'Es válido y muy común al empezar. Montamos el catálogo con precios y disponibilidad y un botón de WhatsApp por producto para cerrar la venta por chat. Si más adelante quieres activar el pago en línea, la base ya queda lista.' },
          { q: '¿Cómo mantengo los precios al día si cambian seguido?', a: 'Con un panel simple hecho para eso: cambias un precio o marcas agotado en segundos, sin depender de nadie. Es la parte más importante del proyecto, porque un catálogo desactualizado hace perder la confianza del cliente.' },
                  { q: 'No tengo sistema de inventario, ¿puedo publicar catálogo igual?', a: 'Sí. Separa lo que no cambia —qué es el producto, marca, medidas, foto— de lo que sí. Publica el catálogo completo con ficha y "consultar disponibilidad" a WhatsApp. El cliente descubre que tienes el producto, que hoy no puede saber sin ir, y tú recibes una consulta concreta.' },
          { q: '¿Tengo que publicar precios?', a: 'No todos. Los de alta rotación y precio estable sí conviene, porque son los que más se buscan. Para el resto, la ventaja competitiva no está en el precio publicado sino en cotizar rápido y ordenado, que es lo que decide una obra.' },
          { q: '¿Cómo atiendo al contratista y al cliente de fin de semana a la vez?', a: 'Con dos entradas, no dos webs. Una por categoría de producto para el que sabe qué busca, y otra por problema —"reparar una fuga", "instalar un abanico"— que lleve a la lista de lo que hace falta. Esa segunda casi ninguna ferretería la tiene y convierte muy bien.' },
          { q: '¿Qué es lo más útil que puedo medir?', a: 'Qué buscó la gente en tu catálogo y no encontró. Cada búsqueda sin resultado es una venta que se fue, y esa lista es mejor guía de compra de inventario que cualquier intuición.' },
          { q: '¿Conviene vender en línea o solo mostrar el catálogo?', a: 'Si vas a vender en línea con carrito y pagos, es proyecto de tienda desde $1,950, e incluye Yappy y pasarelas locales. Si prefieres catálogo para consultar y que la venta se cierre por WhatsApp o en mostrador, un sitio de hasta 6 páginas desde $1,250 alcanza. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Una ferretería de barrio puede aparecer en ChatGPT?', a: 'Sí, si tiene una web que diga qué vende, dónde está y a qué zonas entrega, y una ficha de Google completa con reseñas. Nadie puede garantizar que la IA te nombre, pero sin esa base no tiene de dónde sacarte. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a>.' },
          { q: '¿Qué necesita saber la IA de mi ferretería para nombrarla?', a: 'Qué vendes, dónde estás, a qué zonas entregas y cómo se cotiza. Si eso está en tu web y coincide con tu ficha de Google, el asistente tiene datos verificables para responderle a quien busca materiales cerca.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-ferreterias-panama', label: 'Guía: diseño web para ferreterías' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online y E-commerce' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pagos con Yappy' },
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Web para Importadoras' },
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Web para Constructoras' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu ferretería', wa: 'Hola, quiero cotizar la web de una ferretería con catálogo en línea.' },
  },

  /* ---------- EVENTOS, CATERING Y BODAS ---------- */
  {
    slug: 'industrias/diseno-web-eventos-catering-bodas-panama',
    parent,
    title: 'Diseño Web para Eventos, Catering y Bodas en Panamá',
    description: 'Diseño web para eventos, catering y bodas en Panamá: portafolio visual que enamora, paquetes claros y captación de reservas para tu próxima fecha.',
    h1: 'Diseño web para eventos, catering y bodas',
    breadcrumb: 'Eventos y Bodas',
    heroImage: { src: '/images/industrias/diseno-web-eventos-catering-bodas-panama.jpg', alt: 'Pastel de bodas de tres pisos, en cromo plateado, render 3D sobre fondo gris claro' },
    service: { type: 'Diseño web para eventos, catering y bodas' },
    lead: [
      'En eventos nadie contrata por una lista de servicios: contrata por lo que ve. La foto de tu último montaje vende más que mil palabras, y tu web es donde esa foto trabaja para ti a toda hora.',
      'El diseño web para eventos, catering y bodas en Panamá que hacemos en Elemento Web se arma alrededor del portafolio por tipo de evento, paquetes con rangos de inversión, calendario de fechas libres y un formulario que capta fecha, invitados y tipo de celebración. Un sitio con portafolio y captación parte desde $1,250.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una empresa de eventos o catering?',
        items: [
          'Portafolio visual por tipo de evento: bodas, corporativos, cumpleaños, sociales',
          'Galerías de gran formato con fotos y video reales de tus montajes',
          'Paquetes explicados con qué incluye cada uno y desde qué inversión',
          'Formulario que capta la fecha, el tipo de evento y el número de invitados',
          'Consulta de disponibilidad o solicitud de cita para cotizar',
          'Testimonios reales de clientes y de proveedores aliados cuando los hay',
          'Carga rápida pese al peso de las fotos y el video',
          'Botón de WhatsApp directo, que es donde se cierra en este rubro',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué el portafolio vende más que el texto en eventos?',
        paragraphs: [
          'En eventos el producto es una emoción futura: una boda, un lanzamiento, una fiesta. Nadie puede tocarlo antes de contratarlo, así que lo juzga por la evidencia visual de lo que ya hiciste. Fotos pequeñas, pocas o de banco de imágenes matan la venta antes de la primera conversación.',
          'Por eso la web se construye alrededor de galerías amplias por tipo de evento, con foto y video reales de tus montajes: quien busca boda ve bodas y quien organiza un corporativo ve corporativos. <strong>Cada evento bien documentado es un vendedor que trabaja para ti sin parar.</strong>',
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le hablas según el evento',
        intro: 'No es lo mismo vender una boda que un evento corporativo. La web ordena tu oferta para que cada cliente se reconozca.',
        items: [
          { h3: 'La pareja que se casa', text: 'Decide con el corazón y con Pinterest abierto. Necesita ver bodas reales, entender los paquetes y sentir que entiendes su día. La emoción de las fotos es lo que cierra la cita.' },
          { h3: 'La empresa que organiza', text: 'Busca cumplimiento y logística: lanzamientos, convenciones, fiestas de fin de año. Le pesan la experiencia con marcas, la capacidad y una cotización formal y rápida.' },
          { h3: 'El cliente de catering', text: 'A veces te contratan solo por la comida. Un menú por tipo de evento, con opciones y estilo de servicio, convierte al que buscaba solo comida en un cliente de evento completo.', link: { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' } },
        ],
      },
      {
        type: 'prose',
        h2: '¿Conviene publicar precios de bodas y eventos?',
        paragraphs: [
          'Un negocio de eventos gasta muchísimo tiempo cotizando: preguntar fecha, personas, tipo de evento y presupuesto, armar la propuesta y darle seguimiento. Buena parte no llega a nada, porque el cliente no tenía referencia: no sabía si un evento de cien personas contigo cuesta tres mil o quince mil.',
          'Publicar rangos por tipo de evento y tamaño corta eso de raíz. No la propuesta final, sino el orden de magnitud y qué incluye cada paquete: mesas, mantelería, personal, montaje. El que no está en rango no pide propuesta y el que sí llega más avanzado. <strong>No espanta clientes: espanta cotizaciones que nunca iban a cerrar.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Tu inventario no son los platos, son las fechas',
        paragraphs: [
          'Un negocio de eventos vende días, y un sábado de noviembre que no se vendió no se recupera nunca. Aun así, casi todas las webs del rubro responden "¿tienen el 15 de diciembre?" horas después, cuando el cliente ya preguntó a otros tres.',
          'Un calendario simple de fechas libres, ocupadas y en opción, conectado a un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas o citas</a>, deja que el cliente vea su fecha libre y agende la cita para cotizar sin ida y vuelta de mensajes.',
          'Además hace visibles las fechas flojas: un martes de mayo vacío se puede promocionar con otro precio si sabes con tiempo que está libre. <strong>Gestionar el calendario es gestionar el negocio</strong>, y hoy casi siempre vive en la cabeza de una persona.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que una pareja o una empresa elija a otro proveedor',
        intro: 'Detalles que se revisan mientras se compara entre tres o cuatro opciones.',
        items: [
          'Ni un rango de precio en ningún tipo de evento',
          'Sin decir capacidad mínima ni máxima de personas',
          'Galería con fotos de eventos sin fecha ni tipo, todas mezcladas',
          'Nada sobre qué incluye cada paquete: mesas, mantelería, personal, montaje',
          'Sin política de depósito ni de cancelación por lluvia o fuerza mayor',
          'Sin forma de consultar disponibilidad que no sea escribir y esperar',
          'Fotos de banco de bodas que evidentemente no son tuyas',
          'Sin mención de si se atiende el interior del país y con qué costo',
        ],
      },
      {
        type: 'prose',
        h2: 'Los proveedores aliados son el canal que nadie trabaja',
        paragraphs: [
          'Un evento involucra local, catering, fotógrafo, música, decoración, planificador y transporte. Cada uno recibe consultas que no son de lo suyo y las refiere a quien conoce: es quizá el mayor canal de captación del rubro, y casi nadie lo trabaja de forma deliberada.',
          'Una página de aliados con quienes trabajas habitualmente tranquiliza al cliente que quiere todo resuelto, genera enlaces mutuos que ayudan a ambos a posicionar y te mantiene presente para quien refiere. <strong>Un enlace a tu galería por tipo de evento, con precios de referencia, se reenvía mucho más fácil que un "yo conozco a alguien".</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: consultas por tipo de evento y cuántas se apartan',
        paragraphs: [
          'Cuántas consultas entraron, de qué tipo de evento y tamaño, y cuántas terminaron con fecha apartada y depósito pagado. Bodas, corporativos, quinceaños y cumpleaños tienen márgenes y ciclos distintos: si el corporativo cierra al triple y da menos trabajo, eso cambia dónde poner el esfuerzo comercial.',
          'La ocupación del calendario por mes anticipa el problema: ver en septiembre que noviembre está a media capacidad permite actuar. Y si la conversión de consulta a depósito es baja con rangos publicados, el problema está en la propuesta o en el tiempo de respuesta. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué le pregunta una pareja a ChatGPT antes de contratar su boda en Panamá?',
        paragraphs: [
          'Las parejas y las empresas que organizan un evento ya no solo buscan en Instagram. También le preguntan a un asistente de IA: «¿qué empresa de catering en Panamá atiende bodas de 150 personas?», «¿quién organiza bodas en la playa en Coronado?» o «¿qué catering hace eventos corporativos con estaciones en Ciudad de Panamá?». Con esos nombres arman la lista para cotizar.',
          'Para entrar en esa lista, la IA tiene que encontrar una página por tipo de evento, un portafolio con texto (lugar, invitados, qué serviste), las zonas que cubres, una ficha de Google Business Profile completa y con reseñas, el mismo nombre, teléfono y dirección en la web, la ficha y los directorios, y respuestas a esas preguntas escritas en tu sitio. <strong>Las fotos enamoran a la pareja, pero la IA se apoya en el texto.</strong>',
          'Eso no asegura que te recomiende, pero sube las probabilidades, y todo empieza por el SEO. Lo explicamos en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a> y en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de eventos o catering?', a: 'Para la mayoría de organizadores y caterings, una <a href="/servicios/diseno-web-corporativo-panama/">web PYME</a> con portafolio, paquetes y captación desde $1,250 es el punto ideal. Si necesitas reservas en línea, cobro de anticipo o catálogo de menús con pago, entra el rango de e-commerce (desde $1,950). Siempre con cotización cerrada por escrito.' },
          { q: '¿Cómo muestro mi portafolio sin que la web se ponga lenta?', a: 'Optimizando cada imagen y video para web sin sacrificar calidad visible. Se pueden mostrar decenas de fotos por evento cargando rápido; el trabajo técnico es justo lo que evita que un portafolio pesado espante al cliente en celular.' },
          { q: '¿Puedo recibir reservas o apartar fechas en línea?', a: 'Sí. Con un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas y citas</a> el cliente consulta disponibilidad de su fecha y agenda una cita para cotizar. Si quieres asegurar el compromiso, se puede pedir un anticipo con Yappy o tarjeta para bloquear el día.' },
          { q: '¿Sirve igual para bodas que para eventos corporativos?', a: 'Sí, y conviene separarlos. Montamos secciones distintas para que la pareja vea bodas y la empresa vea eventos corporativos, cada una con su tono, su portafolio y sus paquetes. Así ninguno siente que llegó al lugar equivocado.' },
          { q: '¿Puedo actualizar el portafolio después de cada evento?', a: 'Sí, y es clave hacerlo. Te dejamos un panel para subir las fotos de tu evento más reciente en minutos. Un portafolio que crece muestra que estás activo y en tendencia, algo que en este rubro pesa mucho.' },
                  { q: '¿Publico precios si cada evento es distinto?', a: 'No la propuesta final, sí el orden de magnitud por tipo y tamaño: "una boda de cien personas suele ubicarse entre tanto y tanto". Es lo que más tiempo libera en todo el rubro. No espanta clientes: espanta cotizaciones que nunca iban a cerrar.' },
          { q: '¿Vale la pena publicar disponibilidad de fechas?', a: 'Tu inventario son los días, y un sábado que no se vendió no se recupera. Un calendario simple de fechas libres, ocupadas y en opción hace que el cliente pase directo a apartar en vez de esperar respuesta mientras pregunta a otros tres.' },
          { q: '¿Cómo aprovecho a los proveedores que me refieren?', a: 'Con una página de aliados y material fácil de reenviar: galería por tipo de evento con precios de referencia. El referido entre proveedores es el mayor canal del rubro y casi nadie lo trabaja de forma deliberada, solo por costumbre.' },
          { q: '¿Qué debo medir además de las consultas?', a: 'La ocupación del calendario por mes. Ver en septiembre que noviembre está a media capacidad permite hacer algo; verlo en noviembre, no. Y la conversión de consulta a depósito, que dice si el problema está en captar o en la propuesta.' },
          { q: '¿Cuándo NO conviene una web de eventos o catering?', a: 'Si tu agenda del año ya está cerrada y trabajas por recomendación de wedding planners, la web es portafolio, no captación: con algo simple y bien fotografiado cumples. Se vuelve inversión el día que quieres que la novia te encuentre directo y dejar de depender de quién te recomiende.' },
          { q: '¿Cómo se paga y qué hay que renovar cada año?', a: 'El pago va 50% para arrancar, 30% al ver el sitio funcionando en demo y 20% para publicar, con 30 días de garantía por fallas técnicas. Cada año se renueva la infraestructura, desde $350, que cubre dominio, hosting y certificado. El mantenimiento arranca en $99 al mes. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Puede ChatGPT recomendar mi empresa de eventos o catering?', a: 'Puede, si encuentra información clara: tipos de evento, capacidad, zonas que cubres, portafolio descrito y reseñas en Google. Nadie puede garantizar que te mencione, pero esa base sube las probabilidades. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a>.' },
          { q: '¿Las fotos del portafolio ayudan a aparecer en la IA?', a: 'Ayudan si van con texto: tipo de evento, lugar, número de invitados, qué serviste. El asistente se apoya sobre todo en ese texto, así que un portafolio con descripciones le da algo concreto para mencionarte.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-eventos-catering-panama', label: 'Guía: diseño web para eventos y catering' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y Citas Online' },
          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' },
          { slug: 'industrias/diseno-web-turismo-hoteles-panama', label: 'Web para Turismo y Hoteles' },
          { slug: 'portafolio', label: 'Nuestro Portafolio' },
        ],
      },
    ],
    cta: { h2: 'Aparta tu próxima fecha', wa: 'Hola, quiero cotizar la web de mi servicio de eventos, catering o bodas.' },
  },

  /* ---------- CONSULTORAS Y SERVICIOS PROFESIONALES ---------- */
  {
    slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama',
    parent,
    title: 'Diseño Web para Consultoras y Consultores en Panamá',
    description: 'Diseño web para consultoras, coaches y servicios profesionales en Panamá: autoridad, casos de éxito y captación de clientes de alto valor.',
    h1: 'Diseño web para consultoras y servicios profesionales',
    breadcrumb: 'Consultoras y Servicios',
    heroImage: { src: '/images/industrias/diseno-web-consultoras-servicios-profesionales-panama.jpg', alt: 'Bombilla, en cromo plateado, render 3D sobre fondo gris claro' },
    service: { type: 'Diseño web para consultoras y servicios profesionales' },
    lead: [
      'Vendes algo intangible: criterio, experiencia, resultados. Tu cliente no puede tocarlo antes de pagarlo, así que decide por las señales de autoridad que encuentra, y la primera es tu web.',
      'El diseño web para consultoras y consultores en Panamá que hacemos en Elemento Web gira en torno a la prueba: una página por servicio, casos con situación y resultado, perfil verificable del equipo, material que el comprador interno pueda reenviar y un primer paso concreto, como un diagnóstico. Una web corporativa así parte desde $1,250.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una consultora en Panamá?',
        items: [
          'Una propuesta de valor clara: a quién ayudas y qué problema resuelves',
          'Casos de éxito o resultados con contexto, no solo logos de clientes',
          'Servicios o áreas de práctica explicados por página, no en una lista',
          'Tu perfil o el del equipo con trayectoria y credenciales verificables',
          'Contenido de autoridad: artículos o guías que demuestran criterio',
          'Testimonios reales con nombre y cargo cuando se pueda',
          'Una llamada a la acción de alto valor: diagnóstico, sesión o consulta',
          'Tono sobrio y profesional, coherente con el ticket que cobras',
        ],
      },
      {
        type: 'prose',
        h2: 'La autoridad se demuestra, no se declara',
        paragraphs: [
          'Todo consultor dice ser experto. Una web que lista servicios con adjetivos ("soluciones integrales", "resultados garantizados") suena igual que toda la competencia. <strong>El cliente de alto valor compra criterio demostrado</strong>: casos, artículos que muestran cómo piensas y una trayectoria verificable. Por eso armamos tu <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> alrededor de esa evidencia, no de una plantilla.',
          'Como muchas contrataciones empiezan en Google, ese contenido también posiciona: cada artículo que responde la pregunta real de tu cliente ideal es una puerta de entrada. Es la base del <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento</a> que atrae al cliente correcto sin perseguirlo.',
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién trabaja tu web',
        intro: 'Bajo "servicios profesionales" caben modelos distintos. La web se ajusta a cómo vendes y a quién.',
        items: [
          { h3: 'El consultor o la firma B2B', text: 'Vende proyectos a empresas: estrategia, finanzas, RRHH, tecnología. Le pesan los casos con resultados, la metodología y la trayectoria del equipo frente a decisores exigentes.' },
          { h3: 'El coach o consultor individual', text: 'Vende transformación personal o profesional. Su web es su marca: su historia, su enfoque, testimonios reales y una sesión inicial como puerta de entrada clara.' },
          { h3: 'La agencia o estudio de servicios', text: 'Ofrece un servicio recurrente a varios clientes. Necesita mostrar portafolio, proceso de trabajo y el tipo de cliente ideal para atraer contratos de largo plazo.', link: { slug: 'portafolio', label: 'Ver Portafolio' } },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo publicar casos de consultoría si el cliente exige confidencialidad?',
        paragraphs: [
          'El comprador de consultoría no compra método: compra la evidencia de que ya resolviste un problema parecido al suyo en un contexto parecido. Casi ninguna consultora publica casos por confidencialidad, pero un caso se cuenta sin nombrar al cliente: "Distribuidora de consumo masivo, 80 empleados, operación en Panamá y Costa Rica" da el contexto sin identificar a nadie.',
          'La estructura es corta: situación, qué se hizo, qué cambió y en cuánto tiempo, con números o al menos órdenes de magnitud. <strong>Tres casos bien contados hacen más que veinte logos en una fila</strong>: el logo prueba que trabajaste con alguien; el caso, que sirvió de algo.',
        ],
      },
      {
        type: 'prose',
        h2: 'A una consultoría no la contrata una persona, la aprueba un comité',
        paragraphs: [
          'En consultoría B2B quien te contacta rara vez firma: suele ser un gerente que tendrá que defender la contratación ante su jefe, finanzas o un comité. Tu web tiene dos audiencias, quien te encuentra y quien lo va a cuestionar.',
          'Para la segunda hace falta material reenviable: propuesta de valor en una frase, casos con números y una página de credenciales con el equipo, su formación, sus años de trayectoria y las industrias donde trabajó, más un descargable que sobreviva a un correo interno. <strong>No es vanidad, es munición para tu comprador interno</strong> en la reunión donde alguien pregunta "¿y estos quiénes son?".',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que una empresa descarte a una consultora',
        intro: 'Señales que un comprador B2B lee en segundos y que casi ninguna web de consultoría cuida.',
        items: [
          'Ni un caso, ni un número, ni un resultado concreto en toda la web',
          'Equipo sin nombres ni trayectoria: no se sabe quién va a hacer el trabajo',
          'Servicios descritos en abstracto, sin decir qué entregable recibe el cliente',
          'Fila de logos de clientes sin ninguna explicación de qué se hizo con cada uno',
          'Ninguna señal de tamaño de proyecto: no se sabe si te puede pagar',
          'Blog abandonado hace dos años en un rubro que se vende con criterio',
          'Cero material descargable que el interno pueda reenviar',
          'Correo genérico de Gmail como único contacto corporativo',
        ],
      },
      {
        type: 'prose',
        h2: '¿Debe una consultora publicar sus tarifas?',
        paragraphs: [
          'Publicar honorarios espanta al cliente grande y no publicarlos hace perder tiempo con quien nunca podía pagar. Lo que funciona es el <strong>rango de inversión típica por tipo de proyecto</strong>: "un diagnóstico de este tipo suele ubicarse entre tanto y tanto, según el alcance". Filtra sin encasillar y deja el precio real para después de entender el problema.',
          'También rinde decir con qué tamaño de cliente trabajas: un foco en empresas de cincuenta a trescientos empleados le ahorra la llamada al emprendedor de dos personas. Si tu servicio es demasiado variable para dar rangos, publica el precio y el entregable del primer paso: un diagnóstico acotado atrae a quien va en serio y descarta al curioso.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: consultas calificadas y de qué contenido vinieron',
        paragraphs: [
          'Medir visitas no sirve en un rubro de ciclo largo y volumen bajo, donde un solo cliente bueno puede valer más que el tráfico del año. Sirven tres números: consultas recibidas, cuántas eran del perfil correcto en tamaño e industria, y de qué contenido venían.',
          'Ese tercero cambia decisiones: si un artículo técnico genera tres consultas calificadas al año, conviene escribir cinco más como ese. Y medir el tiempo entre la primera visita y el contacto, que suele ser de semanas o meses, evita dar por muerta una campaña que todavía madura. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué le pregunta un gerente a ChatGPT antes de contratar una consultora en Panamá?',
        paragraphs: [
          'Antes de pedir propuestas, el gerente que necesita apoyo externo arma una lista corta, y cada vez más la empieza con un asistente de IA: «¿qué consultoras en Panamá ayudan a implementar ISO 9001?», «¿qué firma hace estudios de mercado para empresas que entran a Panamá?» o «¿quién asesora en recursos humanos a una empresa mediana en Panamá?». Esa lista es la que después pasa por el comité.',
          'Para estar en ella, la IA tiene que encontrar una página por servicio con el problema que resuelve, los perfiles de los socios con su experiencia, casos publicados sin datos confidenciales, una ficha de Google Business Profile completa y con reseñas, el mismo nombre, teléfono y dirección en la web, la ficha y LinkedIn, y respuestas a esas preguntas escritas en tu sitio. <strong>La autoridad que no está publicada no la puede citar nadie.</strong>',
          'Eso no garantiza que te nombre, pero sube las probabilidades, y la base es el SEO. Lo explicamos en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a> y en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una consultora?', a: 'Para la mayoría, una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $1,250, con páginas por servicio, casos y perfil del equipo, es lo indicado. Firmas con varias áreas, blog activo o dos idiomas se cotizan según alcance. Siempre con cotización cerrada por escrito.' },
          { q: '¿No tengo muchos casos todavía, sirve igual?', a: 'Sí. Cuando los casos son pocos, trabajamos la autoridad por otros medios: tu trayectoria, tu enfoque, testimonios de los clientes que sí has tenido y contenido que demuestra criterio. La web crece contigo y los casos se van sumando.' },
          { q: '¿Cómo hace la web para atraer clientes y no solo verse bien?', a: 'Con dos piezas: contenido que posiciona en las búsquedas de tu cliente ideal (<a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a>) y una llamada a la acción de alto valor que filtra y capta al que va en serio. Una web bonita sin esto es un folleto; con esto, es un canal de captación.' },
          { q: '¿Puedo mostrar clientes con los que trabajé si no puedo dar nombres?', a: 'Sí. Cuando hay confidencialidad, presentamos los casos por sector y resultado sin identificar a la empresa ("una fintech regional", "un grupo retail"). El cliente valora el resultado y el criterio; el nombre no siempre es lo que decide.' },
          { q: '¿Sirve para un profesional independiente y no una firma grande?', a: 'Sí, y suele rendir más. Para un consultor o coach solo, la web se centra en su marca personal, su enfoque y una oferta de entrada clara. Bien hecha, compite de igual a igual con firmas grandes por el cliente que busca cercanía y especialización.' },
                  { q: '¿Cómo publico casos si mis clientes exigen confidencialidad?', a: 'Sin nombrarlos. "Distribuidora de consumo masivo, 80 empleados, operación regional" da el contexto sin identificar a nadie. Lo que hace útil un caso es la situación, lo que se hizo, qué cambió y en cuánto tiempo, no el logo.' },
          { q: '¿Publico mis honorarios?', a: 'No una lista de precios, sí un rango de inversión típica por tipo de proyecto. Filtra sin encasillarte. Si tu servicio es muy variable, publica el precio y el entregable del primer paso: un diagnóstico acotado convierte mucho mejor que "contáctanos para una propuesta".' },
          { q: 'Mi comprador no es quien decide, ¿eso cambia la web?', a: 'Bastante. Quien te contacta va a tener que defender la contratación ante su jefe o un comité. Necesita material reenviable: casos con números, credenciales del equipo y una propuesta de valor en una frase. Esa página trabaja en reuniones donde tú no estás.' },
          { q: '¿Vale la pena un blog en consultoría?', a: 'Es el mecanismo de captación principal del rubro, siempre que se mida. Un artículo técnico que genere tres consultas calificadas al año es el activo más rentable de la empresa; sin medir de qué contenido viene cada consulta, se escribe por intuición y se abandona a los seis meses.' },
          { q: '¿Cómo se paga y qué hay que sostener después?', a: 'El pago va 50% al inicio, 30% al ver el sitio funcionando en demo y 20% para publicar, con 30 días de garantía por fallas técnicas. Después queda lo recurrente: infraestructura desde $350 al año y mantenimiento desde $99 al mes. Si tu venta depende de publicar análisis, el mantenimiento no es opcional: un blog abandonado dice más de lo que crees. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Puede ChatGPT recomendar mi consultora?', a: 'Puede, si encuentra información clara y verificable: servicios con página propia, socios con su trayectoria, casos y reseñas. Nadie puede garantizar que te mencione, pero sin esa base es difícil que lo haga. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a>.' },
          { q: '¿Sirven los casos confidenciales para aparecer en la IA?', a: 'Sí, si los publicas sin datos del cliente: industria, problema, enfoque y lo que cambió, sin cifras privadas. Ese contenido demuestra en qué eres experto y le da al asistente algo concreto para relacionarte con esas preguntas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-consultoras-panama', label: 'Guía: diseño web para consultoras' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Web para Contadores' },
          { slug: 'industrias/diseno-web-abogados-panama', label: 'Web para Abogados' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu web de consultoría', wa: 'Hola, quiero cotizar la web de mi consultora o servicio profesional.' },
  },

  /* ---------- ARQUITECTOS Y DISEÑO DE INTERIORES ---------- */
  {
    slug: 'industrias/diseno-web-arquitectos-diseno-interiores-panama',
    parent,
    title: 'Diseño Web para Arquitectos en Panamá | Portafolio Visual',
    description: 'Diseño web para arquitectos y diseñadores de interiores en Panamá: un portafolio que enamora, cada proyecto por página y clientes que compran con la vista.',
    h1: 'Diseño web para arquitectos y diseño de interiores',
    breadcrumb: 'Arquitectos e Interiores',
    heroImage: { src: '/images/industrias/diseno-web-arquitectos-diseno-interiores-panama.jpg', alt: 'Maqueta de una casa moderna, en cromo plateado, render 3D sobre fondo gris claro' },
    service: { type: 'Diseño web para arquitectos y diseño de interiores' },
    lead: [
      'Tu trabajo es visual por naturaleza, y tu web debería serlo aún más. Un cliente que ama un proyecto tuyo en pantalla ya llega convencido; uno que ve fotos apretadas en una plantilla genérica, se va.',
      'El diseño web para arquitectos y diseñadores de interiores en Panamá que hacemos en Elemento Web pone el portafolio al centro: una página por proyecto con ubicación, metraje, plantas y fotografía optimizada, categorías por tipología, honorarios explicados por fase e idoneidad visible del estudio. Un portafolio profesional suele partir desde $1,250.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de un arquitecto o interiorista en Panamá?',
        items: [
          'Un portafolio protagonista, con proyectos a pantalla completa',
          'Una página por proyecto: fotos, concepto, retos y solución de diseño',
          'Fotografía profesional optimizada: nítida en pantalla grande y rápida en celular',
          'Categorías por tipo: residencial, comercial, remodelación, interiorismo',
          'Un diseño sobrio que deje respirar tu trabajo, no que compita con él',
          'Tu proceso de trabajo explicado, del concepto a la entrega',
          'Perfil del estudio con enfoque, formación e idoneidad de la Junta Técnica de Ingeniería y Arquitectura',
        ],
      },
      {
        type: 'prose',
        h2: 'El portafolio es el producto, y la web es el estuche',
        paragraphs: [
          'Para un arquitecto o interiorista el portafolio no es una sección: es la web. Una plantilla recargada, con sombras, colores y tipografías que gritan, compite con tu diseño y lo apaga. Por eso la estética es deliberadamente sobria: espacio en blanco, tipografía cuidada y foco en la imagen. <strong>Si tu sitio no está bien diseñado, ningún cliente creerá que diseñarás bien su casa.</strong>',
          'Cada proyecto merece su propia página, no una miniatura en una cuadrícula: fotografía a pantalla completa, el concepto, el reto que resolviste y el antes y después. Ahí es donde el cliente pasa de mirar a desear.',
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién y con qué foco',
        intro: 'Bajo el mismo oficio hay enfoques distintos. La web se organiza según lo que ofreces y a quién.',
        items: [
          { h3: 'El estudio de arquitectura', text: 'Proyecta obra nueva y espacios completos. Necesita mostrar el rango de su trabajo por tipología, el proceso de diseño y la solidez para llevar un proyecto de la idea a la realidad.' },
          { h3: 'El diseñador de interiores', text: 'Transforma espacios existentes. Su portafolio vive del antes y después, la selección de materiales y ambientes, y un estilo reconocible que el cliente quiere para su propio espacio.' },
          { h3: 'El profesional independiente', text: 'Arquitecto o interiorista que trabaja su marca personal. Su web es su carta de presentación: pocos proyectos pero impecables, su filosofía y una forma cercana de iniciar la conversación.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿En qué se diferencia de la web de una constructora?',
        paragraphs: [
          'A un arquitecto se le mide por el gusto; a una constructora, por cumplir la obra. Donde una <a href="/industrias/diseno-web-constructoras-panama/">constructora</a> necesita bitácora de avance, fichas de modelos y financiamiento, un estudio necesita concepto y una fotografía que haga sentir el espacio. <strong>Tu web tiene que hacer soñar, no cotizar</strong>: el presupuesto viene después, en la conversación.',
        ],
      },
      {
        type: 'prose',
        h2: 'El proyecto que publicas define el proyecto que te llega',
        paragraphs: [
          'Un portafolio es una declaración de lo que quieres seguir haciendo. Si publicas veinte proyectos y quince son remodelaciones de cocina, te llegarán remodelaciones de cocina aunque tu ambición sea la obra completa. Casi siempre se decide por inercia, subiendo lo último terminado; curarlo hacia arriba cambia el tipo de consulta en cuestión de meses.',
          'En un rubro que se elige por afinidad estética, parecer especialista vale más que parecer versátil: un estudio que publica solo residencial de alto nivel compite mejor por esos encargos. <strong>Ocho obras con proceso, planta, materiales y fotografía profesional pesan más que treinta con dos fotos cada una.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo cobra un arquitecto en Panamá y cómo explicarlo en la web?',
        paragraphs: [
          'El cliente casi nunca sabe cómo se cobra: cree que el arquitecto cobra por plano, no distingue anteproyecto de proyecto ejecutivo y no imagina que la dirección de obra va aparte. Una página que explique los modelos del rubro —por porcentaje de obra, por metro cuadrado o por fases— filtra más que una lista de precios, sin publicar tu tarifa.',
          'Detallar qué incluye cada fase evita el conflicto más común: el cliente que creyó que la dirección de obra venía incluida. Y dar una referencia de escala, el tamaño mínimo de proyecto que tomas, <strong>te ahorra reuniones con quien no calza</strong>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que un cliente no escriba a tu estudio',
        intro: 'En un rubro que se elige con los ojos, estos detalles descartan estudios en segundos.',
        items: [
          'Fotos de obra tomadas con celular mezcladas con fotografía profesional',
          'Proyectos sin ubicación, año, metraje ni tipo de encargo',
          'Sin plantas ni cortes: solo renders bonitos, que cualquiera compra',
          'Renders y fotos finales sin distinguir cuál es cuál',
          'Sin decir qué fases del servicio se ofrecen ni qué incluye cada una',
          'Estudio sin nombres, sin idoneidad y sin años de trayectoria',
          'Galería que tarda en cargar porque son fotos de ocho megas sin optimizar',
          'Sin ninguna referencia de escala ni de tipo de proyecto que se toma',
        ],
      },
      {
        type: 'prose',
        h2: '¿Puedo publicar las fotos de obra y de casas de clientes?',
        paragraphs: [
          'La fotografía de obra la suele hacer un fotógrafo profesional, y salvo que el contrato diga otra cosa, los derechos son suyos. Al contratar la sesión, acuerda por escrito el uso —web, redes, prensa, concursos— y el plazo; cuesta lo mismo y evita el reclamo años después. Darle crédito, aunque tengas los derechos, cuida tu reputación en un gremio pequeño.',
          'Con el propietario pasa igual: muchas viviendas privadas se publican sin su permiso explícito. Basta acordarlo en el contrato del encargo y, si hace falta, publicar sin dirección ni exteriores reconocibles. <strong>Publicar bien también es una señal de cómo trabajas.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: consultas del tipo de proyecto que quieres',
        paragraphs: [
          'Medir visitas engaña en arquitectura: el portafolio atrae a mucha gente que mira por inspiración y nunca contrata. Lo que importa es cuántas consultas llegaron y de qué encargo —obra nueva, remodelación, interiorismo, comercial— y en qué escala. Si la mayoría son remodelaciones pequeñas y buscas obra completa, el problema está en qué proyectos van arriba en tu portafolio.',
          'También vale medir qué proyecto vio la gente antes de escribir: suele haber uno o dos que generan la mayoría de las consultas, y eso cambia cómo ordenas la galería. El detalle está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué le pregunta un cliente a ChatGPT antes de contratar un arquitecto en Panamá?',
        paragraphs: [
          'Quien va a construir o remodelar investiga mucho antes de llamar, y parte de esa investigación ya la hace con un asistente de IA: «¿qué arquitecto en Panamá diseña casas de playa en Coronado?», «¿qué estudio de diseño interior en Ciudad de Panamá remodela apartamentos pequeños?» o «¿cuánto cobra un arquitecto en Panamá por los planos de una casa?». Los estudios que salen en esa respuesta son los que reciben la consulta.',
          'Para estar ahí, la IA tiene que encontrar un portafolio con texto (tipo de obra, zona, qué se resolvió), una página por servicio, la idoneidad visible, cómo cobras explicado, una ficha de Google Business Profile completa y con reseñas, el mismo nombre, teléfono y dirección en la web, la ficha y los directorios, y respuestas a esas preguntas escritas en tu sitio. <strong>Las fotos venden el estudio, pero el texto es lo que la IA puede leer.</strong>',
          'Eso no asegura que te recomiende, pero sube las probabilidades, y todo se apoya en el SEO. Lo explicamos en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a> y en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un arquitecto o diseñador de interiores?', a: 'Para un portafolio profesional bien montado, una <a href="/servicios/diseno-web-corporativo-panama/">web PYME</a> desde $1,250 suele ser lo indicado. Estudios con muchos proyectos, necesidades visuales especiales o desarrollo <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">a medida</a> se cotizan según alcance, con precio cerrado por escrito.' },
          { q: '¿En qué se diferencia de la web de una constructora?', a: 'En el objetivo. La de una <a href="/industrias/diseno-web-constructoras-panama/">constructora</a> vende obra y confianza en la entrega: avance, modelos, financiamiento. La tuya vende gusto y visión: emoción, concepto y fotografía. Por eso no usamos la misma plantilla ni la misma estructura para ambas.' },
          { q: '¿Necesito fotografía profesional de mis proyectos?', a: 'Es lo más rentable que puedes invertir. Tu trabajo se juzga por cómo se ve, y una buena foto multiplica el efecto de todo lo demás. Si aún no la tienes, montamos la web con lo que hay y la vamos elevando a medida que fotografías tus proyectos.' },
          { q: '¿Puedo actualizar el portafolio cuando termino un proyecto?', a: 'Sí. Te dejamos un panel para agregar un proyecto nuevo con sus fotos y su historia en minutos. Un portafolio que se mantiene fresco muestra un estudio activo, y eso pesa cuando el cliente elige a quién confiarle su espacio.' },
          { q: '¿Sirve si trabajo residencial y comercial a la vez?', a: 'Sí. Organizamos el portafolio por tipología para que quien busca una remodelación de casa vea residencial y quien proyecta una oficina vea comercial. Cada cliente se reconoce sin tener que filtrar entre trabajos que no le hablan.' },
                  { q: '¿Cuántos proyectos debe tener mi portafolio?', a: 'Menos de los que crees, mejor contados. Ocho obras con proceso, planta, materiales y fotografía profesional pesan más que treinta con dos fotos. Y el portafolio define lo que te llega: si publicas quince cocinas, te van a llegar cocinas.' },
          { q: '¿Publico mis honorarios?', a: 'No hace falta la tarifa, sí el modelo. Explicar cómo se cobra en el rubro —por porcentaje de obra, por metro cuadrado o por fases— y qué incluye cada fase filtra mejor que cualquier precio, y evita el conflicto del cliente que creyó que la dirección de obra venía incluida.' },
          { q: '¿Puedo publicar las fotos de mis obras sin más?', a: 'Depende del contrato con el fotógrafo: salvo que se acordara lo contrario, los derechos de la imagen son suyos. Conviene acordar por escrito al contratar la sesión para qué se usarán y por cuánto tiempo. Y con el cliente, si la vivienda es privada e identificable.' },
          { q: '¿Cómo hago para que no me lleguen proyectos demasiado pequeños?', a: 'Publicar una referencia de escala mínima y curar el portafolio hacia arriba. En un rubro que se elige por afinidad estética, parecer especialista en cierto tipo y tamaño de encargo vale más que parecer versátil.' },
          { q: '¿Cuándo se justifica pasar del portafolio a un proyecto a medida?', a: 'Aquí el sitio es el portafolio, así que pesa la calidad de las imágenes más que la cantidad de páginas: un sitio de hasta 6 páginas desde $1,250 alcanza para proyectos, servicios y estudio. Si quieres recorridos, planos interactivos o portal de cliente, es proyecto a medida desde $2,900. La infraestructura arranca en $350 al año y los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene lanzar la web de tu estudio?', a: 'Cuando todavía no tienes fotografía profesional de tus obras. Un portafolio de arquitectura con fotos de celular resta en vez de sumar: mejor esperar dos meses, fotografiar bien tres proyectos y salir con eso. El sitio no compensa material flojo, lo amplifica.' },
          { q: '¿Puede ChatGPT recomendar mi estudio de arquitectura?', a: 'Puede, si encuentra información clara y verificable: proyectos descritos, servicios, idoneidad, ubicación y reseñas en Google. Nadie puede garantizar que te nombre, pero esa base sube las probabilidades. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a>.' },
          { q: '¿Basta con un portafolio de fotos para aparecer en la IA?', a: 'No. Cada proyecto necesita texto: tipo de obra, zona, qué se resolvió y qué servicio diste. Esa descripción es lo que un asistente puede leer y relacionar con la pregunta de un cliente.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-arquitectos-panama', label: 'Guía: diseño web para arquitectos' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'portafolio', label: 'Nuestro Portafolio' },
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Web para Constructoras' },
          { slug: 'industrias/diseno-web-bienes-raices-panama', label: 'Web para Bienes Raíces' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu web de portafolio', wa: 'Hola, quiero cotizar la web de mi estudio de arquitectura o diseño de interiores.' },
  },
];
