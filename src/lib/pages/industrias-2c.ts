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
    heroImage: { src: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Pasillo de una ferretería con estanterías de herramientas y materiales' },
    service: { type: 'Diseño web para ferreterías y materiales de construcción' },
    lead: [
      'Tu cliente ya no arranca en el mostrador: busca en el celular quién tiene el producto, a cuánto y si lo puede recoger hoy. Si tu ferretería no aparece con esa respuesta, compró en la de al lado.',
      'El mostrador te limita a quien pasa por el frente. Una web con catálogo real, precios y disponibilidad convierte tu inventario en una vitrina que vende de noche, los domingos y a clientes que nunca habrían entrado a la tienda.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una ferretería',
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
        h2: 'Competir más allá del mostrador',
        paragraphs: [
          'La ferretería tradicional vive de la cercanía: le compras a la que te queda de paso. Ese radio de cuadras es tu techo, y las cadenas grandes y las tiendas en línea ya se están comiendo ese radio con catálogos que el cliente revisa antes de salir de casa.',
          'Una web con tu inventario real rompe ese techo. El cliente compara, ve que tienes el producto, y te escribe o te compra sin importar si tu local está a diez cuadras o al otro lado de la ciudad. <strong>Tu ventaja deja de ser la ubicación y pasa a ser tener lo que buscan, visible y disponible.</strong>',
          'No es dejar el mostrador: es sumarle un segundo mostrador que atiende cuando la tienda está cerrada. Con una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> bien montada, el pedido entra solo y tu equipo solo lo prepara.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de ferretería',
        items: [
          { h3: 'Orden del catálogo', text: 'Estructuramos tus líneas por categoría y subcategoría como las busca el cliente, con búsqueda por marca y código. Un catálogo grande solo vende si se navega fácil.' },
          { h3: 'Precios, stock y pago', text: 'Montamos las fichas con precio y disponibilidad, la venta en línea con Yappy o tarjeta y la opción de retiro en tienda. Definimos qué se vende en línea y qué solo se cotiza.' },
          { h3: 'Panel para que tú mandes', text: 'Te dejamos actualizando precios, subiendo productos y marcando agotados en minutos. Nada de llamar al programador cada vez que sube el cemento.' },
          { h3: 'Que te encuentren en Google', text: 'Optimizamos el catálogo para que tus productos aparezcan en las búsquedas y trabajamos el SEO local para el cliente que busca una ferretería cerca, listo para comprar.' },
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
        h2: 'El precio y la disponibilidad deciden la venta',
        paragraphs: [
          'En ferretería el cliente rara vez es leal a una marca de tienda: es leal a quien tiene el producto, al precio justo, hoy. Un catálogo que muestra fotos bonitas pero esconde el precio y dice "consulte disponibilidad" pierde contra el que responde de una: sí lo tengo, cuesta esto, lo recoges o te lo llevo.',
          'Por eso el corazón de la web no es el diseño: es que el precio y el stock estén al día y sean fáciles de actualizar. <strong>Un catálogo desactualizado es peor que no tener web</strong>, porque promete algo que no cumples. Te dejamos un panel donde cambiar un precio o marcar agotado toma segundos, para que el maestro de obra confíe en lo que ve.',
          'Y cuando el pago es tan simple como un <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy</a>, el cliente cierra la compra desde la obra, sin cuadrar efectivo ni pasar por caja.',
        ],
      },
      {
        type: 'statement',
        text: 'En ferretería no gana el que tiene la tienda más bonita, sino el que responde primero: sí lo tengo, cuesta esto, lo recoges hoy. Esa respuesta ahora se da en el celular.',
        strong: 'el que responde primero: sí lo tengo, cuesta esto, lo recoges hoy',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una ferretería?', a: 'Con catálogo y venta en línea funciona como un <a href="/servicios/tiendas-online-ecommerce-panama/">e-commerce</a>: desde el rango de $1,500 según el tamaño del catálogo y las integraciones. Si arrancas solo con catálogo y cotización por WhatsApp, puedes partir de una <a href="/servicios/diseno-web-corporativo-panama/">web PYME</a> desde $950. Todo con cotización cerrada por escrito antes de empezar.' },
          { q: '¿Tengo que subir miles de productos a mano?', a: 'No necesariamente. Si tu inventario ya vive en un sistema o en un Excel ordenado, evaluamos importarlo en bloque. Cuando no hay sistema, priorizamos las líneas que más vendes y el resto se va sumando; no hace falta cargar todo el día uno.' },
          { q: '¿Puedo cobrar en línea con Yappy?', a: 'Sí. Integramos <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy</a> y tarjeta para que el cliente pague desde la obra o desde casa. También dejamos la opción de pagar al retirar en tienda, que en ferretería sigue siendo muy usada.' },
          { q: '¿Y si no quiero vender en línea, solo mostrar el catálogo?', a: 'Es válido y muy común al empezar. Montamos el catálogo con precios y disponibilidad y un botón de WhatsApp por producto para cerrar la venta por chat. Si más adelante quieres activar el pago en línea, la base ya queda lista.' },
          { q: '¿Cómo mantengo los precios al día si cambian seguido?', a: 'Con un panel simple hecho para eso: cambias un precio o marcas agotado en segundos, sin depender de nadie. Es la parte más importante del proyecto, porque un catálogo desactualizado hace perder la confianza del cliente.' },
        ],
      },
      {
        type: 'related',
        items: [
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
    heroImage: { src: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Salón de bodas decorado y montado para una celebración elegante' },
    service: { type: 'Diseño web para eventos, catering y bodas' },
    lead: [
      'En eventos nadie contrata por una lista de servicios: contrata por lo que ve. La foto de tu último montaje vende más que mil palabras, y tu web es donde esa foto trabaja para ti a toda hora.',
      'La novia, la empresa o la familia que organiza comparan tres o cuatro proveedores con el celular en la mano. Ganan los que muestran un portafolio que emociona, paquetes que se entienden y una forma fácil de apartar la fecha antes de que la tome otro.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de eventos y catering',
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
        h2: 'Se compra con los ojos',
        paragraphs: [
          'En eventos el producto es una emoción futura: una boda soñada, un lanzamiento impecable, una fiesta que la gente recuerde. Nadie puede tocar eso antes de contratarlo, así que lo juzga por la evidencia visual de lo que ya hiciste. Una web con fotos pequeñas, pocas o de banco de imágenes mata la venta antes de la primera conversación.',
          'Por eso construimos la web alrededor del portafolio, no del texto. Galerías amplias, montadas por tipo de evento, con foto y video reales que dejan sentir el ambiente. <strong>Cada evento bien documentado es un vendedor que trabaja para ti sin parar.</strong>',
          'Y organizamos ese portafolio para que el cliente se proyecte: quien busca boda ve bodas, quien organiza un corporativo ve corporativos. Nadie tiene que imaginar si haces lo suyo; lo ve de una.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de eventos',
        items: [
          { h3: 'Curaduría del portafolio', text: 'Seleccionamos y organizamos tus mejores eventos por categoría. No es subir todo: es elegir lo que mejor te representa y montarlo para que impacte.' },
          { h3: 'Paquetes que se entienden', text: 'Traducimos tu oferta a paquetes claros con qué incluye cada uno y desde qué inversión, para atraer al cliente correcto y filtrar al que no calza.' },
          { h3: 'Captación con la fecha primero', text: 'Montamos el formulario y el sistema de reservas o citas que capta fecha, tipo de evento e invitados, y agenda la cita para cotizar sin perder el hilo.' },
          { h3: 'Confianza y cierre', text: 'Sumamos testimonios reales y el botón de WhatsApp directo para que la emoción de la galería se convierta en una conversación de inmediato.' },
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
        h2: 'Los paquetes claros y la fecha que se aparta',
        paragraphs: [
          'La segunda gran fuga es la incertidumbre del precio y la disponibilidad. Un cliente que no entiende qué incluye tu servicio ni por dónde arranca la inversión duda, y la duda en eventos se traduce en escribirle al siguiente proveedor. Paquetes explicados con claridad (qué incluye, para cuántos invitados, desde qué monto) filtran y acercan al cliente correcto.',
          'Y como aquí el recurso escaso es la fecha, la web tiene que empujar a apartarla. Con un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas o citas</a> el cliente solicita disponibilidad para su día y agenda una cita para cotizar sin el ida y vuelta de mensajes. <strong>En eventos, quien facilita apartar la fecha primero, gana el contrato.</strong>',
        ],
      },
      {
        type: 'statement',
        text: 'En eventos el cliente no compra lo que prometes: compra lo que ya lograste y puede ver. Una web sin portafolio de peso es una tarjeta de presentación cara.',
        strong: 'compra lo que ya lograste y puede ver',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de eventos o catering?', a: 'Para la mayoría de organizadores y caterings, una <a href="/servicios/diseno-web-corporativo-panama/">web PYME</a> con portafolio, paquetes y captación desde $950 es el punto ideal. Si necesitas reservas en línea, cobro de anticipo o catálogo de menús con pago, entra el rango de e-commerce (desde $1,500). Siempre con cotización cerrada por escrito.' },
          { q: '¿Cómo muestro mi portafolio sin que la web se ponga lenta?', a: 'Optimizando cada imagen y video para web sin sacrificar calidad visible. Se pueden mostrar decenas de fotos por evento cargando rápido; el trabajo técnico es justo lo que evita que un portafolio pesado espante al cliente en celular.' },
          { q: '¿Puedo recibir reservas o apartar fechas en línea?', a: 'Sí. Con un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas y citas</a> el cliente consulta disponibilidad de su fecha y agenda una cita para cotizar. Si quieres asegurar el compromiso, se puede pedir un anticipo con Yappy o tarjeta para bloquear el día.' },
          { q: '¿Sirve igual para bodas que para eventos corporativos?', a: 'Sí, y conviene separarlos. Montamos secciones distintas para que la pareja vea bodas y la empresa vea eventos corporativos, cada una con su tono, su portafolio y sus paquetes. Así ninguno siente que llegó al lugar equivocado.' },
          { q: '¿Puedo actualizar el portafolio después de cada evento?', a: 'Sí, y es clave hacerlo. Te dejamos un panel para subir las fotos de tu evento más reciente en minutos. Un portafolio que crece muestra que estás activo y en tendencia, algo que en este rubro pesa mucho.' },
        ],
      },
      {
        type: 'related',
        items: [
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
    heroImage: { src: 'https://images.unsplash.com/photo-1573497491765-dccce02b29df?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Reunión de consultoría profesional en una sala de trabajo moderna' },
    service: { type: 'Diseño web para consultoras y servicios profesionales' },
    lead: [
      'Vendes algo intangible: criterio, experiencia, resultados. Tu cliente no puede tocarlo antes de pagarlo, así que decide por las señales de autoridad que encuentra, y la primera es tu web.',
      'Un consultor, un coach o una firma de servicios profesionales compite por contratos grandes con márgenes altos. A ese nivel el cliente no busca el más barato: busca al que le da más confianza. Una web que proyecta autoridad justifica tu tarifa antes de la primera reunión.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una consultora',
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
          'Todo consultor dice ser experto; el cliente ya no lo cree por afirmarlo. La autoridad real se construye con evidencia: casos donde explicas el problema, lo que hiciste y el resultado; artículos donde demuestras cómo piensas; una trayectoria verificable. Eso convence a quien va a confiarte una decisión importante.',
          'Una web que solo lista servicios con adjetivos ("soluciones integrales", "resultados garantizados") suena igual que toda tu competencia y no dice nada. <strong>El cliente de alto valor compra criterio demostrado, no promesas genéricas.</strong> Por eso trabajamos tu <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> alrededor de tus casos y tu forma de pensar, no de una plantilla de agencia.',
          'Y como muchas decisiones empiezan en Google, ese contenido de autoridad también posiciona: cada artículo que responde la pregunta real de tu cliente ideal es una puerta de entrada. Es la base del <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento</a> que atrae al cliente correcto sin perseguirlo.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de consultoría',
        items: [
          { h3: 'Claridad de posicionamiento', text: 'Definimos a quién sirves, qué problema resuelves y qué te hace distinto. Sin esa claridad ningún diseño convierte; con ella, todo lo demás cae en su lugar.' },
          { h3: 'Casos y prueba de autoridad', text: 'Estructuramos tus casos de éxito, credenciales y testimonios de forma que un cliente exigente vea evidencia real, no adjetivos.' },
          { h3: 'Contenido que posiciona', text: 'Dejamos la base de contenido y SEO para que tus artículos capturen las búsquedas de tu cliente ideal y trabajen la autoridad a largo plazo.' },
          { h3: 'Captación de alto valor', text: 'Diseñamos la llamada a la acción correcta (diagnóstico, sesión, consulta) y su formulario, para que llegue el cliente que sí calza con tu tarifa.' },
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
        h2: 'Atraer al cliente correcto, no a cualquiera',
        paragraphs: [
          'El error caro en servicios profesionales es una web que atrae volumen equivocado: consultas de gente que no puede pagar tu tarifa o que busca algo que no haces. Cada una de esas conversaciones te cuesta tiempo que no facturas. La web bien pensada filtra desde el primer momento.',
          'Eso se logra siendo específico: a quién sirves, qué problema resuelves y qué nivel de compromiso implica trabajar contigo. Una llamada a la acción de alto valor (un diagnóstico, una sesión estratégica) atrae a quien va en serio y descarta al curioso. <strong>Menos consultas, pero de clientes que sí cierran, vale más que una bandeja llena de mensajes que no llegan a nada.</strong>',
        ],
      },
      {
        type: 'statement',
        text: 'En servicios profesionales el cliente no compra tu tiempo: compra la confianza de que sabes resolver su problema. Esa confianza empieza a construirse o a perderse en tu web.',
        strong: 'compra la confianza de que sabes resolver su problema',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una consultora?', a: 'Para la mayoría, una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $950, con páginas por servicio, casos y perfil del equipo, es lo indicado. Firmas con varias áreas, blog activo o dos idiomas se cotizan según alcance. Siempre con cotización cerrada por escrito.' },
          { q: '¿No tengo muchos casos todavía, sirve igual?', a: 'Sí. Cuando los casos son pocos, trabajamos la autoridad por otros medios: tu trayectoria, tu enfoque, testimonios de los clientes que sí has tenido y contenido que demuestra criterio. La web crece contigo y los casos se van sumando.' },
          { q: '¿Cómo hace la web para atraer clientes y no solo verse bien?', a: 'Con dos piezas: contenido que posiciona en las búsquedas de tu cliente ideal (<a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a>) y una llamada a la acción de alto valor que filtra y capta al que va en serio. Una web bonita sin esto es un folleto; con esto, es un canal de captación.' },
          { q: '¿Puedo mostrar clientes con los que trabajé si no puedo dar nombres?', a: 'Sí. Cuando hay confidencialidad, presentamos los casos por sector y resultado sin identificar a la empresa ("una fintech regional", "un grupo retail"). El cliente valora el resultado y el criterio; el nombre no siempre es lo que decide.' },
          { q: '¿Sirve para un profesional independiente y no una firma grande?', a: 'Sí, y suele rendir más. Para un consultor o coach solo, la web se centra en su marca personal, su enfoque y una oferta de entrada clara. Bien hecha, compite de igual a igual con firmas grandes por el cliente que busca cercanía y especialización.' },
        ],
      },
      {
        type: 'related',
        items: [
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
    heroImage: { src: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Interior arquitectónico contemporáneo con líneas limpias y luz natural' },
    service: { type: 'Diseño web para arquitectos y diseño de interiores' },
    lead: [
      'Tu trabajo es visual por naturaleza, y tu web debería serlo aún más. Un cliente que ama un proyecto tuyo en pantalla ya llega convencido; uno que ve fotos apretadas en una plantilla genérica, se va.',
      'Arquitectos y diseñadores de interiores venden una visión: cómo se verá y se sentirá un espacio que todavía no existe. Se contrata por el gusto y la confianza que transmite tu portafolio. Por eso tu web no puede verse como la de cualquier negocio; tiene que ser, ella misma, una muestra de tu criterio estético.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de un arquitecto o interiorista',
        items: [
          'Un portafolio protagonista, con proyectos a pantalla completa',
          'Una página por proyecto: fotos, concepto, retos y solución de diseño',
          'Fotografía profesional bien presentada, sin comprimir ni recortar mal',
          'Categorías por tipo: residencial, comercial, remodelación, interiorismo',
          'Un diseño sobrio que deje respirar tu trabajo, no que compita con él',
          'Tu proceso de trabajo explicado, del concepto a la entrega',
          'Tu perfil o el del estudio con enfoque, formación y filosofía',
          'Carga rápida y nitidez impecable en celular y en pantalla grande',
        ],
      },
      {
        type: 'prose',
        h2: 'El portafolio es el producto, y la web es el estuche',
        paragraphs: [
          'Para un arquitecto o interiorista, el portafolio no es una sección de la web: es la web. El cliente llega a ver trabajo, y todo lo demás (el texto, los botones, el menú) debe apartarse para que tus proyectos ocupen el centro. Una plantilla recargada, con sombras, colores y tipografías que gritan, compite con tu diseño y lo apaga.',
          'Por eso trabajamos con una estética deliberadamente sobria: mucho espacio en blanco, tipografía cuidada y foco absoluto en la imagen. <strong>La web de un diseñador es, ella misma, una prueba de su criterio.</strong> Si tu sitio no está bien diseñado, ningún cliente creerá que diseñará bien su casa.',
          'Y cada proyecto merece su propia página, no una miniatura en una cuadrícula. Ahí es donde el cliente se enamora: fotografía a pantalla completa, el concepto detrás, el reto que resolviste y el antes y después que hace visible tu valor.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de arquitectura o interiorismo',
        items: [
          { h3: 'Curaduría y dirección visual', text: 'Elegimos tus proyectos más fuertes y definimos una estética sobria que ponga tu trabajo al frente. Menos, pero impecable, vende más que un catálogo desordenado.' },
          { h3: 'Un proyecto, una página', text: 'Montamos cada proyecto como una historia visual: fotografía a pantalla completa, concepto, reto y solución. Es donde el cliente pasa de mirar a desear.' },
          { h3: 'Fotografía que carga y se ve bien', text: 'Optimizamos cada imagen para que se vea nítida y cargue rápido en cualquier pantalla. En tu rubro, una foto lenta o mal comprimida es una venta perdida.' },
          { h3: 'Proceso y contacto', text: 'Explicamos cómo trabajas del concepto a la entrega y dejamos una vía de contacto simple, para que el cliente enamorado dé el primer paso sin fricción.' },
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
        h2: 'Tu web se distingue de la de una constructora',
        paragraphs: [
          'A un arquitecto se le mide por el gusto; a una constructora, por cumplir la obra. Son ventas distintas y merecen webs distintas. Donde una <a href="/industrias/diseno-web-constructoras-panama/">constructora</a> necesita bitácora de avance, fichas de modelos y financiamiento, tú necesitas emoción, concepto y una fotografía que haga sentir el espacio.',
          'El cliente de diseño no compra metros cuadrados: compra una visión y la confianza de que la vas a materializar con buen gusto. <strong>Tu web tiene que hacerlo soñar, no cotizar.</strong> El presupuesto y los detalles vienen después, en la conversación; el trabajo de la web es lograr que esa conversación ocurra porque quedó enamorado de lo que vio.',
        ],
      },
      {
        type: 'statement',
        text: 'Un arquitecto que muestra su trabajo en una web mal diseñada envía el peor mensaje posible: que el diseño no le importa tanto. Tu sitio es tu primera obra visible.',
        strong: 'Tu sitio es tu primera obra visible',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un arquitecto o diseñador de interiores?', a: 'Para un portafolio profesional bien montado, una <a href="/servicios/diseno-web-corporativo-panama/">web PYME</a> desde $950 suele ser lo indicado. Estudios con muchos proyectos, necesidades visuales especiales o desarrollo <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">a medida</a> se cotizan según alcance, con precio cerrado por escrito.' },
          { q: '¿En qué se diferencia de la web de una constructora?', a: 'En el objetivo. La de una <a href="/industrias/diseno-web-constructoras-panama/">constructora</a> vende obra y confianza en la entrega: avance, modelos, financiamiento. La tuya vende gusto y visión: emoción, concepto y fotografía. Por eso no usamos la misma plantilla ni la misma estructura para ambas.' },
          { q: '¿Necesito fotografía profesional de mis proyectos?', a: 'Es lo más rentable que puedes invertir. Tu trabajo se juzga por cómo se ve, y una buena foto multiplica el efecto de todo lo demás. Si aún no la tienes, montamos la web con lo que hay y la vamos elevando a medida que fotografías tus proyectos.' },
          { q: '¿Puedo actualizar el portafolio cuando termino un proyecto?', a: 'Sí. Te dejamos un panel para agregar un proyecto nuevo con sus fotos y su historia en minutos. Un portafolio que se mantiene fresco muestra un estudio activo, y eso pesa cuando el cliente elige a quién confiarle su espacio.' },
          { q: '¿Sirve si trabajo residencial y comercial a la vez?', a: 'Sí. Organizamos el portafolio por tipología para que quien busca una remodelación de casa vea residencial y quien proyecta una oficina vea comercial. Cada cliente se reconoce sin tener que filtrar entre trabajos que no le hablan.' },
        ],
      },
      {
        type: 'related',
        items: [
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
