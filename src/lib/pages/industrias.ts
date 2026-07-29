/* SILO INDUSTRIAS: una página por nicho. Regla dura: contenido REAL por
   industria. Páginas clonadas con el nombre cambiado = contenido duplicado
   y Google las descarta. Cada nicho tiene su dolor y su checklist propios. */
import type { PageData } from '../types';

const parent = { slug: 'industrias', label: 'Industrias' };

export const industriasPages: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'industrias',
    title: 'Diseño Web por Industria en Panamá | 24 Especialistas por Nicho',
    description: 'Diseño web especializado por industria en Panamá: abogados, contadores, bienes raíces, restaurantes, turismo, clínicas, dentistas, constructoras, seguros, retail y muchas más.',
    h1: 'Diseño web por industria',
    breadcrumb: 'Industrias',
    lead: [
      'Cada industria vende distinto: lo que convierte en una firma legal espanta en un restaurante. Por eso no diseñamos genérico.',
      'Estas son las industrias donde ya conocemos el terreno: qué busca su cliente, qué pregunta antes de decidir y qué tiene que ver en la web para confiar. Ese conocimiento acumulado es lo que compras junto con el diseño.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Elige tu industria',
        items: [
          { h3: 'Abogados y firmas legales', text: 'Autoridad, discreción y captación de consultas calificadas por área de práctica.', link: { slug: 'industrias/diseno-web-abogados-panama', label: 'Web para Abogados' } },
          { h3: 'Bienes raíces', text: 'Catálogo de propiedades con filtros, fichas que venden y captación de compradores e inversionistas.', link: { slug: 'industrias/diseno-web-bienes-raices-panama', label: 'Web para Bienes Raíces' } },
          { h3: 'Restaurantes', text: 'Menú siempre actualizado, reservas de mesa y pedidos sin regalarle margen a las apps de delivery.', link: { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' } },
          { h3: 'Turismo y hoteles', text: 'Reservas directas sin comisión de intermediarios y contenido que vende la experiencia.', link: { slug: 'industrias/diseno-web-turismo-hoteles-panama', label: 'Web para Turismo' } },
          { h3: 'Clínicas y salud', text: 'Citas online, información confiable por especialidad y la privacidad que el sector exige.', link: { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' } },
          { h3: 'Constructoras y promotoras', text: 'Proyectos con avance de obra, fichas por modelo y captación de preventa.', link: { slug: 'industrias/diseno-web-constructoras-panama', label: 'Web para Constructoras' } },
          { h3: 'Educación', text: 'Admisiones online, portal de padres y la confianza que decide dónde matricular a un hijo.', link: { slug: 'industrias/diseno-web-educacion-panama', label: 'Web para Educación' } },
          { h3: 'Retail y moda', text: 'Catálogo visual de alto impacto e integración con redes, para competir con algo más que una cuenta de Instagram.', link: { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Web para Retail y Moda' } },
          { h3: 'Gimnasios y fitness', text: 'Inscripción y reserva de clases online, la herramienta que más ayuda a retener membresías.', link: { slug: 'industrias/diseno-web-gimnasios-fitness-panama', label: 'Web para Gimnasios' } },
          { h3: 'Talleres y automotriz', text: 'Transparencia de precios y citas online, contra la desconfianza que arrastra el rubro.', link: { slug: 'industrias/diseno-web-talleres-automotriz-panama', label: 'Web para Talleres' } },
          { h3: 'Belleza y spas', text: 'Reserva por estilista y portafolio visual de resultados: aquí se elige con los ojos.', link: { slug: 'industrias/diseno-web-belleza-spa-panama', label: 'Web para Belleza y Spas' } },
          { h3: 'Logística y transporte', text: 'Cobertura, flota y certificaciones visibles: lo que un comprador B2B revisa antes de confiar su carga.', link: { slug: 'industrias/diseno-web-logistica-transporte-panama', label: 'Web para Logística' } },
          { h3: 'Contadores y firmas contables', text: 'Confianza y cumplimiento: servicios por página, captación de clientes y la seriedad que exige manejar las finanzas de otros.', link: { slug: 'industrias/diseno-web-contadores-panama', label: 'Web para Contadores' } },
          { h3: 'Agencias de viajes y tours', text: 'Paquetes, disponibilidad y reservas con depósito: convierte al viajero mientras sueña con el destino.', link: { slug: 'industrias/diseno-web-agencias-viajes-tours-panama', label: 'Web para Agencias de Viajes' } },
          { h3: 'Importadoras y distribuidoras', text: 'Catálogo mayorista, líneas de producto y captación de clientes B2B para el hub comercial de la región.', link: { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Web para Importadoras' } },
          { h3: 'Dentistas y odontología', text: 'Citas online, antes y después y la confianza que hace que un paciente elija tu consultorio.', link: { slug: 'industrias/diseno-web-dentistas-odontologia-panama', label: 'Web para Dentistas' } },
          { h3: 'Seguros y corredores', text: 'Ramos claros, cotización rápida y captación de asegurados en un mercado muy competido.', link: { slug: 'industrias/diseno-web-seguros-corredores-panama', label: 'Web para Seguros' } },
          { h3: 'Concesionarios y venta de autos', text: 'Inventario con fotos, financiamiento y captación de prospectos listos para el test drive.', link: { slug: 'industrias/diseno-web-concesionarios-autos-panama', label: 'Web para Concesionarios' } },
          { h3: 'Clínicas estéticas', text: 'Tratamientos con resultados visibles, reservas y la confianza que justifica un ticket alto.', link: { slug: 'industrias/diseno-web-clinicas-esteticas-panama', label: 'Web para Clínicas Estéticas' } },
          { h3: 'Veterinarias', text: 'Citas, servicios y recordatorios para el negocio que cuida a un miembro más de la familia.', link: { slug: 'industrias/diseno-web-veterinarias-panama', label: 'Web para Veterinarias' } },
          { h3: 'Ferreterías y materiales', text: 'Catálogo de productos, disponibilidad y venta en línea para competir más allá del mostrador.', link: { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Web para Ferreterías' } },
          { h3: 'Eventos, catering y bodas', text: 'Portafolio visual, paquetes y captación de reservas para un rubro donde se compra con los ojos.', link: { slug: 'industrias/diseno-web-eventos-catering-bodas-panama', label: 'Web para Eventos' } },
          { h3: 'Consultoras y servicios profesionales', text: 'Autoridad, casos y captación de clientes de alto valor para consultores, coaches y agencias.', link: { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Web para Consultoras' } },
          { h3: 'Arquitectos y diseño de interiores', text: 'Portafolio que enamora, proyectos por página y captación de clientes que compran con la vista.', link: { slug: 'industrias/diseno-web-arquitectos-diseno-interiores-panama', label: 'Web para Arquitectos' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué el diseño por industria posiciona mejor que una plantilla genérica',
        paragraphs: [
          'Una plantilla bonita puede servir a cualquier negocio, y ese es justo el problema: no dice nada específico de ninguno. Tu cliente no compara diseños, compara respuestas. El paciente quiere ver la especialidad; el comprador de propiedades, el filtro por zona; el comensal, el menú. Cuando la web responde la pregunta correcta en los primeros segundos, convierte; cuando obliga a buscar, pierde.',
          'Google premia lo mismo. Los buscadores rara vez son "diseño web": son "abogado migratorio Panamá", "apartamento en venta Costa del Este", "spa cerca de mí". Cada uno se gana con una página construida para ese intento de búsqueda, no con una home que intenta hablarle a todos a la vez.',
          'Por eso separamos el silo por sector. No es marketing: es que el orden de la información, las pruebas de confianza que pesan y la acción que se pide cambian de raíz según el rubro. <strong>Ese conocimiento del terreno es lo que compras junto con el diseño.</strong>',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo adaptamos la web a tu sector',
        intro: 'El proceso es el mismo; lo que cambia es a qué le prestamos atención en cada paso según tu industria.',
        items: [
          { h3: 'Diagnóstico del rubro', text: 'Entendemos quién decide la compra, qué investiga antes y qué lo hace desconfiar. No es lo mismo un comprador B2B de logística que unos padres eligiendo colegio.' },
          { h3: 'Estructura de venta a medida', text: 'Definimos qué va primero, qué páginas se posicionan por separado y qué acción pedimos: reservar, cotizar, agendar o solicitar cupo.' },
          { h3: 'Funcionalidad según necesidad', text: 'Conectamos solo lo que tu rubro usa de verdad: reservas, catálogo con filtros, pagos con Yappy, citas online o portal de seguimiento.' },
          { h3: 'Contenido que responde y posiciona', text: 'Escribimos las páginas por especialidad, zona o servicio que capturan las búsquedas reales de tu cliente, no textos de relleno.' },
        ],
      },
      {
        type: 'statement',
        text: 'Una web genérica compite en precio; una web que domina su industria compite en confianza. En Panamá, la confianza es lo que cierra.',
        strong: 'una web que domina su industria compite en confianza',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Mi industria no está en la lista?', a: 'La lista muestra donde tenemos experiencia acumulada, no un límite. Escríbenos: el proceso de diagnóstico funciona para cualquier rubro y te decimos con franqueza si conocemos el terreno o lo estaríamos aprendiendo contigo.' },
          { q: '¿Qué cambia entre industrias?', a: 'La estructura de venta: qué información va primero, qué pruebas de confianza pesan y qué acción se pide. Un restaurante convierte con el menú y la reserva; una firma legal con autoridad y una consulta bien filtrada.' },
          { q: '¿Los precios varían por industria?', a: 'No: los rangos son los mismos (landing desde $550, corporativa desde $950, e-commerce desde $1,500). Lo que varía es el alcance funcional que cada rubro suele necesitar.' },
          { q: '¿Cómo saben qué necesita mi industria si no me conocen todavía?', a: 'Partimos de lo acumulado en cada sector y lo afinamos contigo en el diagnóstico. Tú conoces tu negocio mejor que nadie; nosotros sabemos cómo se traduce eso en una web que posiciona y convierte. El cruce de ambos es lo que arma la estructura correcta.' },
          { q: '¿Y si mi negocio encaja en dos industrias a la vez?', a: 'Pasa seguido: una constructora que también vende como inmobiliaria, un spa que además tiene tienda de productos. Tomamos las funciones que cada faceta necesita y las combinamos en un solo sitio coherente, sin duplicar ni forzar plantillas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios', label: 'Servicios de diseño web' },
          { slug: 'funcionalidades', label: 'Funcionalidades' },
          { slug: 'portafolio', label: 'Portafolio' },
        ],
      },
    ],
  },

  /* ---------- ABOGADOS ---------- */
  {
    slug: 'industrias/diseno-web-abogados-panama',
    parent,
    title: 'Diseño Web para Abogados en Panamá | Firmas Legales',
    description: 'Diseño web para abogados y firmas legales en Panamá: autoridad, páginas por área de práctica y captación de consultas calificadas.',
    h1: 'Diseño web para abogados',
    breadcrumb: 'Abogados',
    heroImage: { src: 'https://picsum.photos/seed/abogados-oficina-legal-panama/1200/675', alt: 'Oficina de una firma legal con biblioteca de derecho' },
    service: { type: 'Diseño web para firmas legales' },
    lead: [
      'Tu cliente potencial compara tres firmas antes de escribir. La web decide si tu firma está en esa lista corta o no.',
      'En servicios legales la web no vende: filtra y da confianza. El visitante llega con un problema serio (una sociedad, un migratorio, un pleito) y busca señales de que tu firma lo resuelve. Encontrarlas en treinta segundos es diseño; no encontrarlas es un contrato perdido en silencio.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de una firma legal en Panamá debe incluir',
        items: [
          'Una página por área de práctica (corporativo, migratorio, laboral, marítimo)',
          'Perfiles del equipo con credenciales verificables e idiomas',
          'Contenido bilingüe si atiendes clientes internacionales',
          'Formulario de consulta que filtra el tipo de caso',
          'Artículos que respondan las preguntas previas del cliente',
          'Señales de discreción y confidencialidad explícitas',
          'Datos de contacto directos, sin laberintos',
          'Diseño sobrio: la estridencia cuesta credibilidad en este rubro',
        ],
      },
      {
        type: 'prose',
        h2: 'Una página por área de práctica: la decisión que más pesa',
        paragraphs: [
          'Nadie busca "bufete de abogados" a secas: busca "abogado migratorio Panamá" o "constitución de sociedades". Si todas tus áreas viven en una sola página de "Servicios", no compites en ninguna de esas búsquedas.',
          'Cada área de práctica merece su propia URL, con el problema descrito en el idioma del cliente, los casos típicos que resuelves y una consulta específica como llamado. <strong>Así se posiciona una firma: área por área</strong>, no con la marca genérica.',
          'El blog complementa: cada pregunta frecuente de tus clientes (requisitos, plazos, costos aproximados) es un artículo que te trae al siguiente cliente con la misma duda.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué busca cada cliente antes de escribir a tu firma',
        intro: 'La web de una firma atiende a perfiles distintos con miedos distintos. La estructura correcta le habla a cada uno.',
        items: [
          { h3: 'El cliente corporativo', text: 'Necesita saber que tu firma maneja el volumen y la complejidad: sociedades, contratos, cumplimiento. Le pesan las credenciales del equipo y los idiomas.' },
          { h3: 'El cliente internacional', text: 'Llega en inglés buscando migración, inversión o estructuras en Panamá. Necesita contenido bilingüe y señales de que entiendes su jurisdicción de origen.' },
          { h3: 'El cliente particular', text: 'Trae un problema urgente y personal (laboral, familiar, un pleito) y decide por confianza y discreción. Le pesa una consulta clara y sin letra pequeña.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de una firma legal',
        items: [
          { h3: 'Mapeo de áreas de práctica', text: 'Listamos cada área que atiendes y decidimos cuáles merecen su propia página posicionable y cuáles agrupar. No todas pesan igual en búsqueda.' },
          { h3: 'Redacción con autoridad, sin jerga vacía', text: 'Describimos cada área en el idioma del cliente: el problema, los casos típicos y qué esperar de la consulta. Seriedad sin promesas de resultado, que en este rubro están reguladas.' },
          { h3: 'Filtro de consultas', text: 'Configuramos el formulario y, si lo activas, el asistente con IA para que solo llegue a tu equipo el caso que sí atiendes, con los datos mínimos ya recogidos.' },
          { h3: 'Publicación y contenido continuo', text: 'Dejamos el blog listo para que cada duda frecuente (requisitos, plazos, costos aproximados) se convierta en un artículo que capta al siguiente cliente.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La discreción se diseña, no se promete',
        paragraphs: [
          'En servicios legales el cliente llega con un asunto que preferiría no contarle a nadie. Un formulario que pide media vida antes de dar un teléfono, o un chat que expone su consulta en pantalla, lo espanta. La web tiene que transmitir reserva en cada detalle: pedir solo lo necesario, ofrecer un canal directo y dejar claro cómo se protege lo que comparte.',
          'Ese mismo cuidado aplica al tono. La estridencia (superlativos, "somos los mejores", promesas de ganar el caso) resta credibilidad y además roza lo que la ética profesional permite anunciar. <strong>La sobriedad no es una decisión estética: es lo que un cliente serio espera de un abogado serio.</strong>',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una firma legal?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $950, con páginas por área de práctica. Firmas con dos idiomas o muchas áreas se cotizan según alcance, con precio cerrado.' },
          { q: '¿Pueden manejar contenido bilingüe?', a: 'Sí, español e inglés con URLs separadas por idioma y el etiquetado técnico correcto para que Google muestre la versión adecuada a cada visitante.' },
          { q: '¿Cómo filtramos consultas que no son de nuestras áreas?', a: 'Con el formulario correcto: tipo de caso, urgencia y datos mínimos. Y si activas el <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">asistente con IA</a>, este responde lo básico y solo deriva a tu equipo los casos que sí atiendes.' },
          { q: '¿Pueden mostrar resultados de casos ganados?', a: 'Con cuidado. La publicidad de resultados en servicios legales está limitada por la ética profesional, y prometer resultados es contraproducente. Trabajamos la autoridad de otra forma: áreas bien explicadas, credenciales verificables, artículos que demuestran dominio y testimonios en los términos que la normativa permite.' },
          { q: '¿Sirve para un abogado independiente, no solo para firmas grandes?', a: 'Sí, y muchas veces rinde más. Un abogado solo que posiciona bien dos o tres áreas concretas compite de igual a igual con firmas grandes en esas búsquedas específicas, sin el costo de una estructura completa.' },
          { q: '¿Cada abogado del equipo puede tener su perfil?', a: 'Sí, con formación, colegiatura, áreas e idiomas. Los perfiles verificables son de las páginas más visitadas: muchos clientes eligen a la persona antes que a la firma.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu firma', wa: 'Hola, quiero cotizar la web de una firma legal.' },
  },

  /* ---------- BIENES RAÍCES ---------- */
  {
    slug: 'industrias/diseno-web-bienes-raices-panama',
    parent,
    title: 'Diseño Web para Bienes Raíces en Panamá | Inmobiliarias',
    description: 'Diseño web para inmobiliarias y corredores en Panamá: catálogo de propiedades con filtros, fichas que venden y captación de compradores.',
    h1: 'Diseño web para bienes raíces',
    breadcrumb: 'Bienes Raíces',
    heroImage: { src: 'https://picsum.photos/seed/bienes-raices-propiedad-panama/1200/675', alt: 'Fachada moderna de una propiedad residencial en venta' },
    service: { type: 'Diseño web para inmobiliarias' },
    lead: [
      'El comprador filtra por zona, precio y recámaras antes de hablar contigo. Si tu web no filtra, el comprador se va a un portal que sí.',
      'La inmobiliaria que depende solo de portales de terceros alquila su negocio: paga por destacar sus propias propiedades y compite en la misma vitrina con todos. Tu web propia es el activo donde el interesado ve solo tu inventario y te escribe solo a ti.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de una inmobiliaria en Panamá debe incluir',
        items: [
          'Catálogo con filtros: zona, tipo, precio, recámaras, estado',
          'Fichas con galería amplia, video y recorrido si existe',
          'Botón de WhatsApp por propiedad, con la referencia ya escrita',
          'Páginas por zona (Costa del Este, San Francisco, Coronado) para SEO',
          'Sección de preventa con avance y planes de pago',
          'Captación separada para compradores y para propietarios',
          'Cifras clave visibles: gastos, mantenimiento, ROI de alquiler',
          'Carga rápida con decenas de fotos por propiedad',
        ],
      },
      {
        type: 'prose',
        h2: 'Las páginas por zona son tu mina de oro',
        paragraphs: [
          'Las búsquedas inmobiliarias son geográficas: "apartamento en venta Costa del Este", "casa en Coronado". Una página por zona, con las propiedades activas y una guía del área (precios promedio, plusvalía, estilo de vida) posiciona exactamente donde decide tu comprador.',
          'Los portales no pueden darte eso: su página de zona muestra a toda tu competencia. <strong>La tuya muestra tu inventario y tu WhatsApp.</strong>',
          'Para el corredor individual el mismo principio aplica en escala: una web con diez propiedades bien presentadas y tu cara visible genera más confianza que un perfil perdido entre miles.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de una inmobiliaria',
        items: [
          { h3: 'Estructura del catálogo', text: 'Definimos los filtros que tu comprador usa de verdad (zona, tipo, precio, recámaras, estado) y cómo se organiza el inventario para que encuentre en dos clics.' },
          { h3: 'Fichas que venden', text: 'Diseñamos la ficha de propiedad con galería amplia, datos clave (metraje, mantenimiento, estado legal) y botón de WhatsApp con la referencia ya escrita.' },
          { h3: 'Páginas por zona', text: 'Construimos las páginas geográficas que capturan "apartamento en venta Costa del Este" y similares, con tu inventario activo y una guía del área.' },
          { h3: 'Panel para administrar tú mismo', text: 'Te dejamos subiendo propiedades, cambiando precios y marcando vendido en minutos, sin depender de la agencia para cada movimiento.' },
        ],
      },
      {
        type: 'cards',
        h2: 'A quién capta la web de una inmobiliaria',
        intro: 'Un comprador de vivienda, un inversionista y un propietario que quiere vender buscan cosas distintas. La web separa cada camino.',
        items: [
          { h3: 'El comprador de vivienda', text: 'Filtra por zona, precio y recámaras, y decide con las fotos y el recorrido. Necesita fichas claras y una forma rápida de preguntar por una propiedad concreta.' },
          { h3: 'El inversionista', text: 'Piensa en números: rentabilidad de alquiler, plusvalía de la zona, gastos de mantenimiento. Le pesan las cifras visibles más que el estilo de vida.' },
          { h3: 'El propietario que vende', text: 'Quiere captar corredores serios. Una sección de captación separada, con lo que ofreces al propietario, convierte esa visita en un mandato de venta.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Las fotos y la velocidad deciden la primera impresión',
        paragraphs: [
          'En bienes raíces la primera impresión es visual y es en el celular. Una ficha con fotos oscuras, torcidas o insuficientes transmite descuido justo cuando el comprador está juzgando si eres serio con montos de seis cifras. Vale la pena la foto profesional; la web tiene que presentarla bien y cargarla rápido aunque la propiedad tenga treinta imágenes.',
          'La velocidad no es un lujo técnico: un catálogo que tarda en cargar con datos móviles pierde al comprador antes de la primera ficha. <strong>Optimizamos para que decenas de fotos por propiedad se vean nítidas y carguen al instante</strong>, que es donde muchos sitios inmobiliarios fallan y ceden el comprador al portal.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una web inmobiliaria?', a: 'Con catálogo y filtros funciona como un e-commerce de fichas: desde el rango de $1,500 según el tamaño del inventario y las integraciones. Un corredor con pocas propiedades puede empezar con una corporativa desde $950.' },
          { q: '¿Puedo administrar las propiedades yo mismo?', a: 'Sí: subes fotos, cambias precios y marcas vendido desde un panel simple. Publicar una propiedad nueva toma minutos, no llamadas al programador.' },
          { q: '¿Se integra con los portales existentes?', a: 'Podemos sincronizar tu inventario con portales que acepten alimentación externa, para publicar una sola vez y aparecer en todos. Se evalúa portal por portal en el diagnóstico.' },
          { q: '¿Puedo captar propietarios además de compradores?', a: 'Sí, y conviene: el propietario que quiere vender es tan valioso como el comprador. Montamos una sección de captación separada, con lo que ofreces al dueño y un formulario propio, para que ese lead no se pierda entre las propiedades.' },
          { q: '¿Sirve para propiedades de alquiler y no solo de venta?', a: 'Sí. El catálogo distingue venta y alquiler con sus propios filtros y fichas. Para alquiler solemos destacar las cifras que importan (canon, mantenimiento, requisitos) desde la ficha.' },
          { q: '¿Puedo mostrar recorridos virtuales o video?', a: 'Sí, la ficha admite video y recorridos 360 cuando la propiedad los tiene. Es de lo que más filtra visitas: quien reserva una cita tras ver el recorrido llega mucho más decidido.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Catálogos y E-commerce' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu web inmobiliaria', wa: 'Hola, quiero cotizar una web para bienes raíces.' },
  },

  /* ---------- RESTAURANTES ---------- */
  {
    slug: 'industrias/diseno-web-restaurantes-panama',
    parent,
    title: 'Diseño Web para Restaurantes en Panamá | Menú y Reservas',
    description: 'Diseño web para restaurantes en Panamá: menú actualizado, reservas de mesa online y pedidos directos sin comisión de apps de delivery.',
    h1: 'Diseño web para restaurantes',
    breadcrumb: 'Restaurantes',
    heroImage: { src: 'https://picsum.photos/seed/restaurante-mesa-panama/1200/675', alt: 'Mesa servida en un restaurante con ambiente cálido' },
    service: { type: 'Diseño web para restaurantes' },
    lead: [
      'Tu cliente busca el menú y el horario desde el celular. Si los encuentra en un PDF borroso de 2023, comió en otro lado.',
      'Las apps de delivery se quedan con una comisión de cada pedido y con los datos de tu cliente. Sirven para descubrirte; no pueden ser tu único canal. La web propia toma pedidos y reservas sin regalar margen, y construye la lista de clientes que las apps te ocultan.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de un restaurante en Panamá debe incluir',
        items: [
          'Menú en HTML real (no PDF): legible, buscable y traducible',
          'Precios y horarios que tu equipo actualiza en minutos',
          'Reserva de mesa online con confirmación automática',
          'Pedido directo para llevar con pago Yappy o tarjeta',
          'Fotos reales del plato y del local, no banco de imágenes',
          'Google Maps y ficha de negocio impecables',
          'Página por sede si tienes más de una',
          'Carga instantánea en celular con datos móviles',
        ],
      },
      {
        type: 'prose',
        h2: 'El menú en PDF te está costando clientes',
        paragraphs: [
          'El PDF obliga a descargar, hacer zoom y navegar a ciegas en una pantalla de seis pulgadas. Google tampoco lo lee bien: tus platos no aparecen en búsquedas. Un menú en página real se lee cómodo, se actualiza al momento y posiciona cada categoría.',
          'La reserva por llamada tiene el mismo problema: depende de que alguien conteste en hora pico. La <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reserva online</a> confirma sola, recuerda sola y llena mesas mientras la cocina trabaja.',
          'Y el pedido directo con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy</a> convierte a tus clientes frecuentes en pedidos sin comisión. Las apps para descubrirte; tu web para fidelizarlos.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de un restaurante',
        items: [
          { h3: 'Menú digital que tú controlas', text: 'Pasamos tu carta a página real, organizada por categorías, con precios y fotos. Te dejamos actualizándola y marcando agotados desde el panel, sin llamar a nadie.' },
          { h3: 'Reservas y pedidos', text: 'Conectamos la reserva de mesa con confirmación automática y, si vendes para llevar, el pedido directo con pago Yappy o tarjeta.' },
          { h3: 'Presencia local impecable', text: 'Dejamos la ficha de Google Business y el Maps alineados con la web: horarios, fotos y menú coherentes en todos lados.' },
          { h3: 'Optimización para el celular', text: 'Todo se prueba en la pantalla donde de verdad se usa: rápido con datos móviles, con el menú y el botón de reserva a un toque.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Los tres momentos en que tu web decide la venta',
        intro: 'Un comensal llega a tu web en situaciones muy distintas. Cada una necesita una respuesta inmediata.',
        items: [
          { h3: 'Decidiendo dónde comer hoy', text: 'Busca menú, precios, fotos y horario, casi siempre con hambre y apurado. Si no lo encuentra en segundos, ya eligió otro lugar.' },
          { h3: 'Planeando una ocasión', text: 'Cumpleaños, aniversario, cena de grupo. Quiere ver el ambiente, confirmar que hay espacio y reservar sin depender de que contesten el teléfono.' },
          { h3: 'Repitiendo un pedido', text: 'Ya te conoce y quiere pedir para llevar. El pedido directo con Yappy lo convierte en venta sin regalarle comisión a la app.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Las fotos que dan hambre no son un detalle: son la venta',
        paragraphs: [
          'En comida se compra con los ojos antes que con el estómago. Una foto real y bien tomada de tus platos hace más por la venta que cualquier descripción, y una foto de banco de imágenes (que no es tu comida) genera desconfianza en cuanto el cliente llega y el plato no se parece.',
          'El otro factor silencioso es Google Maps. Muchos comensales nunca llegan a tu web: te encuentran, deciden y llegan directo desde la ficha del mapa. Por eso trabajamos la web y la ficha de negocio juntas, con <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a>. <strong>Aparecer bien en el momento del hambre vale más que cualquier campaña.</strong>',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un restaurante?', a: 'Una web con menú y reservas parte del rango corporativo ($950). Con pedidos en línea y pagos entra al rango de e-commerce (desde $1,500). Depende de sedes y volumen de menú.' },
          { q: '¿Quién actualiza el menú y los precios?', a: 'Tu equipo, desde el panel, en minutos. Cambiar un precio o marcar un plato agotado no puede depender de llamar a una agencia.' },
          { q: '¿Reemplaza a las apps de delivery?', a: 'Las complementa: las apps traen clientes nuevos; tu web convierte a los frecuentes en pedidos sin comisión. La estrategia correcta usa ambas con roles distintos.' },
          { q: '¿Sirve si tengo varias sedes?', a: 'Sí. Montamos una página por sede con su horario, su ubicación en Maps y, si hace falta, su propio menú y reservas. El cliente elige la sede más cercana sin confundirse.' },
          { q: '¿Puedo recibir reservas para grupos grandes o eventos?', a: 'Sí, el formulario de reserva puede pedir el número de personas y separar las solicitudes de eventos privados para que tu equipo las coordine aparte de la mesa normal.' },
          { q: '¿Puedo poner el menú en inglés para turistas?', a: 'Sí, y en un menú de página real (no PDF) es sencillo: se sirve la versión en inglés con su propia URL, algo clave si estás en zona turística.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pagos con Yappy' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu restaurante', wa: 'Hola, quiero cotizar la web de un restaurante.' },
  },

  /* ---------- TURISMO ---------- */
  {
    slug: 'industrias/diseno-web-turismo-hoteles-panama',
    parent,
    title: 'Diseño Web para Turismo y Hoteles en Panamá | Reservas Directas',
    description: 'Diseño web para hoteles, tours y operadores turísticos en Panamá: reservas directas sin comisión de OTAs y contenido que vende la experiencia.',
    h1: 'Diseño web para turismo y hoteles',
    breadcrumb: 'Turismo y Hoteles',
    heroImage: { src: 'https://picsum.photos/seed/hotel-boutique-panama/1200/675', alt: 'Piscina de un hotel boutique en Panamá al atardecer' },
    service: { type: 'Diseño web para turismo y hotelería' },
    lead: [
      'Cada reserva que entra por una OTA te cuesta hasta una quinta parte de la tarifa. La reserva directa por tu web te la deja completa.',
      'Booking y las agencias en línea son un canal, no el dueño de tu negocio. El viajero que ya te encontró ahí suele buscar tu web antes de confirmar: si le ofrece mejor tarifa directa, fotos reales y una reserva simple, esa comisión se queda contigo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de un negocio turístico en Panamá debe incluir',
        items: [
          'Motor de reserva directa con disponibilidad y pago en línea',
          'Incentivo visible por reservar directo (tarifa o beneficio)',
          'Contenido bilingüe: el viajero internacional decide en inglés',
          'Fotos y video propios: la experiencia real, no stock',
          'Páginas por experiencia o tipo de habitación, cada una posicionable',
          'Guías del destino que capturan al viajero que aún planea',
          'Reseñas verificables integradas',
          'Carga rápida incluso con conexión de aeropuerto',
        ],
      },
      {
        type: 'prose',
        h2: 'El contenido del destino trae al viajero antes que la OTA',
        paragraphs: [
          'El viajero no empieza buscando hotel: empieza buscando "qué hacer en Bocas del Toro" o "mejor época para San Blas". Quien responde esas preguntas con contenido útil se presenta antes de que la OTA entre en juego.',
          'Cada guía enlaza a tus experiencias y habitaciones: el lector pasa de investigar a cotizar sin salir de tu sitio. <strong>Ese embudo de contenido es la fuente de reservas directas más barata que existe</strong>, y trabaja todo el año.',
          'Para el mercado internacional el sitio se sirve en inglés y español con etiquetado correcto por idioma. Un traductor automático mal configurado espanta más de lo que ayuda.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de un negocio turístico',
        items: [
          { h3: 'Reserva directa primero', text: 'Montamos el motor de reservas con disponibilidad real y pago en línea, y un incentivo visible por reservar directo. Esa es la pieza que recupera la comisión de las OTAs.' },
          { h3: 'Contenido que vende el destino', text: 'Escribimos las guías del destino y las páginas por experiencia o tipo de habitación que capturan al viajero mientras aún planea, antes de que la OTA entre.' },
          { h3: 'Bilingüe de verdad', text: 'Servimos el sitio en español e inglés con URLs y etiquetado por idioma, no con un traductor automático que rompe la confianza del viajero internacional.' },
          { h3: 'Sincronización de canales', text: 'Conectamos con tu channel manager para que Booking, la web y demás canales compartan el mismo inventario y no haya sobreventa.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué necesita cada tipo de negocio turístico',
        intro: 'Un hotel, un operador de tours y un alojamiento boutique venden distinto. La web se ajusta a cada modelo.',
        items: [
          { h3: 'Hotel u hospedaje', text: 'Necesita motor de reservas con disponibilidad por fecha, páginas por tipo de habitación y tarifas por temporada. La reserva directa es el corazón del sitio.' },
          { h3: 'Operador de tours', text: 'Vende experiencias: San Blas, Bocas, avistamiento, city tours. Cada tour es una página con fotos reales, qué incluye, punto de salida y reserva con anticipo.' },
          { h3: 'Alojamiento boutique', text: 'Compite con la experiencia y la historia del lugar. Le pesan las fotos propias, las reseñas verificables y el contenido del destino que lo rodea.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La temporada manda: la web tiene que moverse con ella',
        paragraphs: [
          'El turismo en Panamá vive de temporadas: seca, verde, feriados largos, fin de año. Los precios, la disponibilidad y hasta qué experiencias promocionas cambian a lo largo del año. Una web que obliga a llamar al programador para cambiar una tarifa o cerrar fechas llega siempre tarde a la temporada.',
          'Por eso dejamos las tarifas, la disponibilidad y los paquetes en tu control, editables al momento. Puedes lanzar una promoción de temporada baja, cerrar fechas ocupadas o destacar el paquete de feriado sin depender de nadie. <strong>El negocio que reacciona rápido a la temporada llena; el que no, deja habitaciones vacías.</strong>',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un hotel u operador?', a: 'Con motor de reservas y pago en línea, desde el rango de $1,500. Un operador de tours con catálogo simple puede partir de la corporativa ($950) e integrar reservas después.' },
          { q: '¿Se integra con Booking y las OTAs?', a: 'Sí: conectamos con gestores de canales para sincronizar disponibilidad y evitar sobreventa. Tu web es un canal más del mismo inventario, el que no cobra comisión.' },
          { q: '¿Puedo cobrar en línea a turistas extranjeros?', a: 'Sí, con pasarelas que aceptan tarjetas internacionales. Yappy suma para el mercado local. Configuramos ambas según tu mezcla de clientes.' },
          { q: '¿Puedo manejar tarifas y paquetes por temporada?', a: 'Sí, es clave en este rubro. Dejas configuradas tarifas por fecha y paquetes de temporada que activas o cierras tú mismo, sin depender de la agencia para reaccionar a un feriado o a temporada baja.' },
          { q: '¿Sirve para un operador de tours como los de San Blas o Bocas?', a: 'Sí, y muy bien. Cada tour se arma como una página propia con fotos reales, qué incluye, punto de salida y reserva con anticipo. Es lo que te independiza de vender solo por WhatsApp o por intermediarios.' },
          { q: '¿Puedo mostrar reseñas de TripAdvisor o Google?', a: 'Sí, integramos reseñas verificables de las plataformas donde ya te califican. Para el viajero internacional, ver reseñas reales pesa más que cualquier texto de la web.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pasarelas de Pago' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
        ],
      },
    ],
    cta: { h2: 'Recupera tus comisiones', wa: 'Hola, quiero cotizar una web de turismo con reservas directas.' },
  },

  /* ---------- CLÍNICAS ---------- */
  {
    slug: 'industrias/diseno-web-clinicas-salud-panama',
    parent,
    title: 'Diseño Web para Clínicas y Salud en Panamá | Citas Online',
    description: 'Diseño web para clínicas, consultorios y profesionales de la salud en Panamá: citas online, contenido confiable por especialidad y privacidad.',
    h1: 'Diseño web para clínicas y salud',
    breadcrumb: 'Clínicas y Salud',
    heroImage: { src: 'https://picsum.photos/seed/clinica-salud-panama/1200/675', alt: 'Sala de espera moderna de una clínica de salud' },
    service: { type: 'Diseño web para clínicas y salud' },
    lead: [
      'El paciente investiga síntomas, compara especialistas y decide por confianza. Tu web es tu primera consulta, antes de la consulta.',
      'En salud las reglas cambian: el contenido debe ser serio y verificable, la privacidad no es negociable y la cita tiene que poder agendarse sin llamar en horario de oficina. Una web de salud que parece de venta agresiva destruye la confianza que el rubro exige.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de una clínica en Panamá debe incluir',
        items: [
          'Agendamiento de citas online con disponibilidad real',
          'Página por especialidad y por procedimiento frecuente',
          'Perfiles médicos con idoneidad y credenciales verificables',
          'Contenido educativo revisado por los propios especialistas',
          'Información clara de seguros y formas de pago aceptadas',
          'Formularios que no piden datos clínicos sensibles por canales abiertos',
          'Recordatorios de cita automáticos que reducen ausencias',
          'Accesibilidad: pacientes de toda edad y condición deben poder usarla',
        ],
      },
      {
        type: 'prose',
        h2: 'La cita online es la mejora de mayor impacto',
        paragraphs: [
          'La recepción de una clínica atiende presencial y teléfono a la vez, y el teléfono pierde. Cada llamada no contestada es un paciente que probó con el siguiente especialista de la lista.',
          'El <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">agendamiento online</a> elimina esa fila invisible: el paciente ve disponibilidad real y confirma solo, a cualquier hora. Los recordatorios automáticos atacan el otro sangrado silencioso: las ausencias.',
          'El contenido por especialidad hace el resto: cada procedimiento explicado con seriedad posiciona en las búsquedas del paciente que investiga, y llega a la consulta con confianza ya construida.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de una clínica',
        items: [
          { h3: 'Mapa de especialidades', text: 'Definimos una página por especialidad y por procedimiento frecuente, cada una posicionable en las búsquedas del paciente que investiga su síntoma.' },
          { h3: 'Agenda de citas conectada', text: 'Integramos el agendamiento online con disponibilidad real y recordatorios automáticos, para descargar el teléfono de recepción y reducir ausencias.' },
          { h3: 'Perfiles médicos verificables', text: 'Armamos el perfil de cada profesional con idoneidad, formación e idiomas. El paciente elige persona, y esas páginas son de las más visitadas.' },
          { h3: 'Privacidad por diseño', text: 'Configuramos formularios que piden solo lo necesario para coordinar, con información cifrada y alineada a la Ley 81 de 2019 de protección de datos.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Cómo llega cada paciente a tu web',
        intro: 'La misma clínica recibe visitas con urgencias y expectativas muy distintas. La web responde a cada una.',
        items: [
          { h3: 'El que investiga un síntoma', text: 'Busca entender qué le pasa antes de decidir. Le sirve el contenido serio por especialidad, que lo lleva de la duda a agendar en tu clínica.' },
          { h3: 'El que ya sabe qué necesita', text: 'Busca un especialista concreto o un procedimiento específico. Quiere ver credenciales, si acepta su seguro y agendar sin llamar.' },
          { h3: 'El que compara y decide por confianza', text: 'Ya tiene dos o tres opciones. Elige por los perfiles médicos, la claridad de la información y lo fácil que sea dar el primer paso.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Los seguros y las formas de pago deciden más de lo que parece',
        paragraphs: [
          'Una de las primeras preguntas del paciente panameño es práctica: "¿aceptan mi seguro?". Cuando esa respuesta no está en la web, muchos ni escriben; llaman a la siguiente clínica que sí lo aclara. Dejar visible qué seguros trabajas y qué formas de pago aceptas elimina una fricción que hace perder pacientes en silencio.',
          'Lo mismo con la información de precios de consulta o procedimientos cuando es posible darla. No hace falta una lista completa; basta con orientar. <strong>La transparencia, en salud, se lee como respeto</strong>, y el paciente que llega ya informado ocupa menos tiempo de recepción y llega más decidido a la consulta.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una clínica?', a: 'Una corporativa con especialidades y citas online parte desde el rango de $950 más la integración de agenda. Clínicas con varios médicos y sedes se cotizan según alcance, cerrado antes de empezar.' },
          { q: '¿Cómo manejan la privacidad del paciente?', a: 'Los formularios piden solo lo necesario para coordinar (nunca historia clínica por la web), la información viaja cifrada y el tratamiento de datos se alinea a la Ley 81 de 2019 de Panamá.' },
          { q: '¿Cada médico puede tener su perfil?', a: 'Sí, con especialidad, formación e idoneidad. Los perfiles verificables son de las páginas más visitadas en sitios de salud: el paciente elige persona, no solo institución.' },
          { q: '¿La cita online se conecta con la agenda que ya usamos?', a: 'Depende del sistema. Si tu software de agenda expone integración, sincronizamos para evitar dobles reservas. Si no, montamos una agenda propia y evaluamos el caso en el diagnóstico antes de prometer nada.' },
          { q: '¿Podemos mostrar qué seguros aceptamos?', a: 'Sí, y conviene mucho. Dejar visibles los seguros y formas de pago aceptados responde una de las primeras dudas del paciente y evita perder al que, sin esa información, simplemente llama a otra clínica.' },
          { q: '¿Sirve para un consultorio de un solo médico?', a: 'Sí. Para un especialista independiente el enfoque es su perfil, su especialidad bien explicada y la cita online. Muchas veces rinde más que estar dentro de una clínica grande donde no destaca.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Citas Online' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu clínica', wa: 'Hola, quiero cotizar la web de una clínica.' },
  },

  /* ---------- CONSTRUCTORAS ---------- */
  {
    slug: 'industrias/diseno-web-constructoras-panama',
    parent,
    title: 'Diseño Web para Constructoras en Panamá | Proyectos y Preventa',
    description: 'Diseño web para constructoras y promotoras en Panamá: proyectos con avance de obra, fichas por modelo y captación de preventa.',
    h1: 'Diseño web para constructoras',
    breadcrumb: 'Constructoras',
    heroImage: { src: 'https://picsum.photos/seed/construccion-obra-panama/1200/675', alt: 'Obra de construcción de un edificio residencial en progreso' },
    service: { type: 'Diseño web para constructoras y promotoras' },
    lead: [
      'La preventa se decide con renders, planos y confianza en que la obra avanza. Tu web debe entregar las tres cosas mejor que el folleto.',
      'Un proyecto inmobiliario es la compra más grande en la vida de tu cliente, hecha muchas veces sobre plano. La web que documenta el avance de obra, muestra cada modelo con su plano y responde el financiamiento con claridad convierte interesados en separaciones.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de una constructora en Panamá debe incluir',
        items: [
          'Una página por proyecto con su propia identidad',
          'Fichas por modelo: plano, metraje, acabados y precio desde',
          'Bitácora de avance de obra con fotos fechadas',
          'Simulador o guía clara de financiamiento y separación',
          'Formulario de preventa conectado al equipo de ventas',
          'Trayectoria: proyectos entregados con fecha y ubicación',
          'Recorridos virtuales cuando el proyecto lo amerita',
          'Versión impecable en celular: ahí ve el cliente los renders',
        ],
      },
      {
        type: 'prose',
        h2: 'El avance de obra publicado vende más que el render',
        paragraphs: [
          'El comprador sobre plano tiene un solo miedo real: que la obra no avance. La bitácora pública con fotos fechadas ataca ese miedo de frente, cada mes, sin que tu vendedor tenga que jurarlo por teléfono.',
          'Es además tu mejor herramienta de seguimiento: cada actualización es una razón legítima para reactivar a los interesados fríos. "Ya vaciamos el piso 12" abre más conversaciones que cualquier promoción.',
          'Los proyectos entregados cierran el círculo: fechas, ubicaciones y fotos reales de lo construido. <strong>En este rubro la trayectoria documentada es la moneda de confianza.</strong>',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de una constructora',
        items: [
          { h3: 'Una página por proyecto', text: 'Cada desarrollo recibe su propia página con identidad, ubicación, renders y modelos disponibles. Los proyectos no se amontonan en una sola sección.' },
          { h3: 'Fichas por modelo', text: 'Detallamos cada modelo con plano, metraje, acabados y precio desde, para que el comprador entienda exactamente qué está separando.' },
          { h3: 'Bitácora de avance', text: 'Montamos la bitácora de obra con fotos fechadas que tu equipo actualiza en minutos. Es la prueba de que el proyecto avanza y tu mejor razón para reactivar interesados.' },
          { h3: 'Captación conectada a ventas', text: 'Los formularios de preventa y el WhatsApp con el proyecto ya referenciado entregan el lead directo a tu equipo o a WapyCRM para el seguimiento.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué necesita ver cada comprador de preventa',
        intro: 'Comprar sobre plano es un acto de fe. La web tiene que sostener esa fe con evidencia para cada tipo de comprador.',
        items: [
          { h3: 'El que compra para vivir', text: 'Necesita imaginarse ahí: recorridos, planos claros, acabados y el entorno del proyecto. Le pesa la fecha de entrega y que la obra vaya avanzando.' },
          { h3: 'El inversionista de preventa', text: 'Compra por plusvalía y forma de pago. Le importan el precio desde, el plan de pagos, la zona y la trayectoria de proyectos entregados a tiempo.' },
          { h3: 'El comprador cauteloso', text: 'Ya escuchó historias de obras paradas. Necesita la bitácora de avance, los proyectos entregados con fecha y ubicación, y una empresa que se muestra sin miedo.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El financiamiento explicado con claridad cierra la separación',
        paragraphs: [
          'Después del render, la pregunta que frena la separación es siempre la misma: "¿cómo lo pago?". El comprador quiere entender el abono inicial, el plan de pagos durante la construcción y qué pasa al momento de la escrituración. Cuando esa información está clara en la web, el interesado llega a la cita ya haciendo cuentas, no preguntando lo básico.',
          'No hace falta prometer una tasa ni sustituir al banco: basta con explicar con honestidad la estructura de pago y guiar el siguiente paso. <strong>La claridad sobre el dinero convierte más que cualquier render</strong>, porque es la duda real que detiene la decisión.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una constructora?', a: 'Depende del número de proyectos activos. La estructura típica (sitio institucional más una página completa por proyecto) parte del rango corporativo ($950) y crece con cada proyecto y sus fichas.' },
          { q: '¿Podemos actualizar el avance de obra nosotros?', a: 'Sí, es el diseño: tu equipo sube fotos y notas desde el panel en minutos. Una bitácora que depende de la agencia termina abandonada, y abandonada es peor que no tenerla.' },
          { q: '¿Manejan la captación de preventa?', a: 'La web capta y filtra: formularios por proyecto, WhatsApp con el proyecto ya referenciado y entrega directa a tu CRM o a <a href="/saas/wapycrm/">WapyCRM</a> para el seguimiento comercial.' },
          { q: '¿Qué pasa con la página del proyecto cuando se vende todo?', a: 'La convertimos en pieza de trayectoria: pasa a "proyectos entregados" con fecha, ubicación y fotos de lo construido. Ese historial es lo que da confianza para vender el siguiente desarrollo.' },
          { q: '¿Sirve para una constructora que hace obra a la medida, no promociones?', a: 'Sí, cambia el enfoque: en vez de fichas de modelos, el peso va al portafolio de obras entregadas, el proceso de trabajo y el cotizador de proyecto. La confianza sigue construyéndose con obra documentada.' },
          { q: '¿Pueden incluir recorridos virtuales de los modelos?', a: 'Sí, cuando el proyecto los tiene. En preventa un recorrido 360 de un apartamento modelo ayuda al comprador a imaginarse el espacio antes de que exista físicamente.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-bienes-raices-panama', label: 'Web para Bienes Raíces' },
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tus proyectos', wa: 'Hola, quiero cotizar la web de una constructora.' },
  },

  /* ---------- EDUCACIÓN ---------- */
  {
    slug: 'industrias/diseno-web-educacion-panama',
    parent,
    title: 'Diseño Web para Colegios e Institutos en Panamá | Admisiones',
    description: 'Diseño web para colegios e institutos en Panamá: admisiones online, portal de padres y la confianza que decide dónde matricular a un hijo.',
    h1: 'Diseño web para colegios e institutos',
    breadcrumb: 'Educación',
    heroImage: { src: 'https://picsum.photos/seed/colegio-aula-panama/1200/675', alt: 'Aula moderna en un colegio, con estudiantes trabajando en grupo' },
    service: { type: 'Diseño web para instituciones educativas' },
    lead: [
      'Matricular a un hijo es una decisión que los padres investigan durante semanas. Tu web es donde comparan tu colegio con los otros tres que también visitaron.',
      'A diferencia de otros rubros, aquí el comprador no es quien recibe el servicio: son los padres decidiendo por sus hijos, con más ansiedad y más tiempo de investigación que en casi cualquier otra compra. La web tiene que responder esa ansiedad con información concreta, no con frases de misión y visión.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de un colegio en Panamá debe incluir',
        items: [
          'Proceso de admisión explicado paso a paso, con fechas y requisitos',
          'Formulario de solicitud de cupo conectado a admisiones',
          'Portal de padres con calendario, circulares y pagos',
          'Información clara de mensualidades, matrícula y becas',
          'Fotos y video reales de instalaciones, no stock genérico',
          'Perfil del cuerpo docente y metodología por nivel',
          'Testimonios verificables de familias actuales',
          'Blog de vida escolar que muestre el día a día, no solo el folleto',
        ],
      },
      {
        type: 'prose',
        h2: 'La decisión que más se investiga y menos se documenta',
        paragraphs: [
          'Casi todos los colegios describen su "modelo pedagógico integral" con las mismas palabras. Los padres ya no distinguen uno de otro por ese texto: buscan pruebas concretas, fotos reales del aula, el proceso exacto de admisión y cuánto cuesta de verdad, sin tener que llamar para averiguarlo.',
          'El <strong>portal de padres</strong> es la pieza que más retiene después de la matrícula: calendario académico, circulares y estado de pagos en un solo lugar reducen las llamadas a secretaría y la fricción del día a día.',
          'Y el proceso de admisión publicado paso a paso (requisitos, fechas de examen, entrevista, respuesta) convierte mejor que cualquier promesa: <strong>la claridad genera más confianza que el eslogan</strong>.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de una institución educativa',
        items: [
          { h3: 'Proceso de admisión claro', text: 'Publicamos el paso a paso (requisitos, fechas, examen, entrevista, respuesta) y conectamos el formulario de solicitud de cupo directo con admisiones.' },
          { h3: 'Información concreta, no folleto', text: 'Dejamos visible lo que los padres de verdad buscan: mensualidades, matrícula, becas, niveles y metodología. La claridad convierte más que la misión y visión.' },
          { h3: 'Prueba real de la vida escolar', text: 'Usamos fotos y video reales de instalaciones y del día a día, con testimonios verificables de familias actuales.' },
          { h3: 'Portal de padres', text: 'Montamos el portal con calendario, circulares y estado de pagos que reduce llamadas a secretaría y retiene después de la matrícula.' },
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le habla la web de un colegio',
        intro: 'En educación quien decide no es quien recibe el servicio. La web tiene que convencer a los adultos y acompañar a la familia ya matriculada.',
        items: [
          { h3: 'Padres que están decidiendo', text: 'Comparan tres o cuatro colegios durante semanas. Buscan pruebas concretas, el proceso exacto de admisión y cuánto cuesta de verdad, sin tener que llamar para averiguarlo.' },
          { h3: 'Familias ya matriculadas', text: 'Usan la web todo el año: calendario, circulares, pagos. El portal de padres es lo que reduce la fricción del día a día y refuerza que eligieron bien.' },
          { h3: 'El estudiante mayor', text: 'En institutos y programas técnicos, el propio joven investiga la oferta académica y la salida laboral. Le pesa ver qué aprende y adónde lo lleva.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El calendario de admisiones manda: la web tiene que estar lista antes',
        paragraphs: [
          'Las admisiones tienen temporada, y la decisión de los padres se concentra en pocas semanas. Un colegio con la web desactualizada, con las fechas del año pasado o sin el formulario de cupo abierto, pierde justo en el momento en que más lo buscan. La web debe llegar a esa ventana con la información del ciclo vigente y el proceso listo para recibir solicitudes.',
          'Por eso dejamos las fechas, los requisitos y el estado de admisiones en tu control, para actualizarlos ciclo a ciclo sin depender de la agencia. <strong>En educación, llegar tarde a la temporada de admisiones es perder una generación completa de matrículas.</strong>',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un colegio?', a: 'El formato típico es una web corporativa desde $950, con portal de padres y proceso de admisión integrados. Institutos con varios niveles o sedes se cotizan según alcance.' },
          { q: '¿El portal de padres requiere desarrollo a medida?', a: 'Depende de cuánto quieras integrar (pagos, calificaciones, mensajería). Un portal informativo básico entra en el rango corporativo; uno con pagos y calificaciones en línea se dimensiona como <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">desarrollo a medida</a>.' },
          { q: '¿Pueden manejar contenido en inglés?', a: 'Sí, con URLs separadas por idioma y el etiquetado correcto para colegios bilingües o internacionales.' },
          { q: '¿Podemos recibir las solicitudes de cupo en línea?', a: 'Sí, ese suele ser el corazón del sitio. El formulario de admisión recoge los datos de la familia y del aspirante y los entrega directo a tu equipo de admisiones, sin papeleo suelto ni correos perdidos.' },
          { q: '¿Sirve para una universidad o instituto técnico, no solo colegios?', a: 'Sí, cambia el enfoque: el peso va a la oferta académica por carrera, la salida laboral, el calendario de inscripción y los testimonios de egresados. Aquí muchas veces decide el propio estudiante, no los padres.' },
          { q: '¿Podemos actualizar fechas y circulares nosotros mismos?', a: 'Sí, desde el panel. Es esencial: las fechas de admisión, las circulares y el calendario cambian cada ciclo y no pueden depender de llamar a la agencia cada vez.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y Citas Online' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a Medida' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu colegio', wa: 'Hola, quiero cotizar la web de un colegio o instituto.' },
  },

  /* ---------- RETAIL Y MODA ---------- */
  {
    slug: 'industrias/diseno-web-retail-moda-panama',
    parent,
    title: 'Diseño Web para Retail y Moda en Panamá | Tiendas Online',
    description: 'Diseño web y tiendas online para retail y moda en Panamá: catálogo visual, integración con redes y checkout rápido. Compite con algo más que Instagram.',
    h1: 'Diseño web para retail y moda',
    breadcrumb: 'Retail y Moda',
    heroImage: { src: 'https://picsum.photos/seed/retail-moda-tienda-panama/1200/675', alt: 'Rack de ropa en una tienda de moda con iluminación cálida' },
    service: { type: 'Diseño web para retail y moda' },
    lead: [
      'Si tu catálogo vive solo en Instagram, dependes de un algoritmo que no controlas y compites contra miles de cuentas idénticas.',
      'Una tienda propia no reemplaza tus redes: las respalda. Instagram descubre; tu web vende, con catálogo permanente, checkout sin fricción y la credibilidad de un dominio propio que una cuenta de venta informal no tiene.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la tienda de retail y moda debe incluir',
        items: [
          'Catálogo visual de alto impacto, fotos profesionales de producto',
          'Guía de tallas clara para reducir devoluciones',
          'Filtros por categoría, talla, color y precio',
          'Checkout rápido con Yappy y tarjeta',
          'Integración con Instagram y catálogo de Meta',
          'Colecciones por temporada fáciles de actualizar',
          'WhatsApp para consultar disponibilidad en tiempo real',
          'Fichas de producto con múltiples ángulos y video corto',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué una web te da credibilidad que Instagram no da',
        paragraphs: [
          'Vender solo por Instagram funciona hasta que el cliente busca tu marca en Google y no encuentra nada: ese vacío genera duda, sobre todo con montos altos o compras nuevas.',
          'Una tienda propia con dominio, catálogo completo y checkout profesional resuelve esa duda al instante. Y a diferencia de la cuenta social, <strong>no depende de que el algoritmo decida mostrar tu contenido</strong>: el cliente que ya te conoce entra directo a comprar.',
          'La integración con Instagram Shopping conecta ambos mundos: sigues publicando donde tu audiencia ya está, pero cada publicación puede llevar directo al producto en tu propia tienda.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu tienda de retail y moda',
        items: [
          { h3: 'Catálogo visual', text: 'Montamos las fichas de producto con fotos profesionales, múltiples ángulos, video corto y guía de tallas clara para reducir devoluciones.' },
          { h3: 'Variantes e inventario', text: 'Configuramos talla y color como variantes con su propio stock, para que sepas exactamente qué queda de cada combinación.' },
          { h3: 'Checkout y pagos', text: 'Dejamos un checkout rápido con Yappy y tarjeta, y WhatsApp para consultas de disponibilidad en tiempo real.' },
          { h3: 'Conexión con redes', text: 'Integramos el catálogo con Instagram y Facebook Shopping para que cada publicación lleve directo al producto en tu web.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Por qué tu web vende lo que Instagram no puede',
        intro: 'Redes y tienda propia hacen trabajos distintos. Juntas venden más que cualquiera por separado.',
        items: [
          { h3: 'Instagram descubre', text: 'Es donde tu audiencia pasa el tiempo y te encuentra. Perfecto para mostrar, generar deseo y construir marca, pero no para gestionar catálogo ni cobrar en serio.' },
          { h3: 'Tu web vende', text: 'Catálogo permanente, filtros, checkout profesional y un dominio propio que da la credibilidad que una cuenta de venta informal nunca tendrá.' },
          { h3: 'El cliente frecuente', text: 'Quien ya te conoce no quiere revisar historias viejas para comprar de nuevo: entra directo a tu tienda, encuentra su talla y paga. Ese cliente es tu margen sin costo de pauta.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La temporada y la colección mandan en moda',
        paragraphs: [
          'La moda vive de rotación: colecciones nuevas, temporada, liquidaciones, ediciones de campaña. Una tienda que obliga a llamar al programador para armar una colección o marcar una liquidación siempre llega tarde al momento de venta. Por eso dejamos las colecciones y las etiquetas de temporada en tu control, para lanzarlas y retirarlas tú mismo.',
          'La guía de tallas es el otro detalle que muchos ignoran y que cuesta dinero. En moda panameña, con marcas de distintos orígenes, la talla no es universal, y una devolución se come el margen de varias ventas. <strong>Una guía de tallas clara por producto reduce devoluciones y la duda que frena la compra</strong> antes del checkout.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una tienda de ropa online?', a: 'Desde el rango de e-commerce ($1,500), según tamaño de catálogo. Ver <a href="/servicios/tiendas-online-ecommerce-panama/">tiendas online</a> para el detalle completo.' },
          { q: '¿Se integra con mi cuenta de Instagram?', a: 'Sí, conectamos tu catálogo con Instagram y Facebook Shopping para que las publicaciones lleven directo al producto en tu web.' },
          { q: '¿Puedo vender tallas y variantes fácilmente?', a: 'Sí, el panel gestiona variantes de talla y color con su propio inventario, para que sepas exactamente qué queda en stock.' },
          { q: '¿Puedo armar colecciones de temporada yo mismo?', a: 'Sí, desde el panel creas y retiras colecciones y etiquetas de temporada sin depender de la agencia. En moda la rotación es constante y tienes que poder reaccionar al momento a un lanzamiento o una liquidación.' },
          { q: '¿Sirve para una tienda de retail que no es solo ropa?', a: 'Sí. El mismo enfoque de catálogo visual, variantes y checkout aplica a calzado, accesorios, decoración o cualquier retail donde la foto y la elección de variante deciden la compra.' },
          { q: '¿Puedo empezar mostrando catálogo y cobrar por WhatsApp al inicio?', a: 'Sí, es una entrada válida: catálogo con filtros y botón de WhatsApp por producto, y activar el checkout con pago en línea cuando el volumen lo justifique. Se construye pensando en ese siguiente paso.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas' },
          { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Shopify' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu tienda de moda', wa: 'Hola, quiero cotizar una tienda online de ropa.' },
  },

  /* ---------- GIMNASIOS Y FITNESS ---------- */
  {
    slug: 'industrias/diseno-web-gimnasios-fitness-panama',
    parent,
    title: 'Diseño Web para Gimnasios y Fitness en Panamá | Membresías',
    description: 'Diseño web para gimnasios y estudios fitness en Panamá: inscripción de membresía online, horarios de clases y reserva, la clave para retener socios.',
    h1: 'Diseño web para gimnasios y fitness',
    breadcrumb: 'Gimnasios y Fitness',
    heroImage: { src: 'https://picsum.photos/seed/gimnasio-fitness-panama/1200/675', alt: 'Interior de un gimnasio moderno con equipo de pesas' },
    service: { type: 'Diseño web para gimnasios y estudios fitness' },
    lead: [
      'La mayoría de las membresías se cancelan en los primeros tres meses. Lo que retiene no es el equipo: es que reservar una clase sea fácil y que el socio sienta que pertenece a algo.',
      'Tu web puede resolver ambas cosas: inscripción y reserva de clases sin fricción, y contenido que mantenga motivado al socio entre visita y visita. Un gimnasio que solo tiene una página con horarios en PDF está perdiendo la mitad de esa batalla antes de empezar.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de un gimnasio en Panamá debe incluir',
        items: [
          'Inscripción de membresía online con pago inicial',
          'Horario de clases en tiempo real, con cupos disponibles',
          'Reserva de clases grupales desde el celular',
          'Perfiles de entrenadores con especialidad y horarios',
          'Planes y precios comparables en una sola vista',
          'Testimonios con transformaciones reales y verificables',
          'Blog motivacional y de contenido de entrenamiento',
          'Recordatorios automáticos de clase para reducir el "no show"',
        ],
      },
      {
        type: 'prose',
        h2: 'La reserva de clases es la funcionalidad que más retiene',
        paragraphs: [
          'Cuando reservar una clase requiere llamar o escribir por WhatsApp a mano, el socio con poca disciplina simplemente no va. La fricción mata el hábito antes de que se forme.',
          'Un sistema de <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas online</a> con recordatorio automático elimina esa fricción: el socio ve cupos disponibles, reserva en segundos y recibe un recordatorio que reduce las ausencias.',
          'El contenido (rutinas, nutrición, logros de otros socios) hace el resto: mantiene al gimnasio presente en la cabeza del cliente los seis días que no viene a entrenar, que es exactamente cuando decide cancelar o no.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de un gimnasio',
        items: [
          { h3: 'Inscripción sin fricción', text: 'Montamos la inscripción de membresía online con pago inicial, para que el prospecto motivado se convierta en socio en el momento, no cuando pase por el local.' },
          { h3: 'Horario y reserva de clases', text: 'Configuramos el horario en tiempo real con cupos disponibles y reserva desde el celular, la funcionalidad que más ayuda a que el socio efectivamente venga.' },
          { h3: 'Recordatorios que reducen ausencias', text: 'Activamos recordatorios automáticos de clase para atacar el "no show" y liberar cupos a tiempo para otro socio.' },
          { h3: 'Comunidad y contenido', text: 'Dejamos el espacio para perfiles de entrenadores, testimonios reales y blog motivacional que mantienen al socio conectado entre visitas.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué retiene a cada tipo de socio',
        intro: 'No todos los socios se van por lo mismo. La web ataca las tres razones más comunes de cancelación.',
        items: [
          { h3: 'El principiante inseguro', text: 'Se va porque no sabe qué hacer ni se siente parte. Lo retiene ver horarios de clases para principiantes, entrenadores accesibles y una comunidad que lo recibe.' },
          { h3: 'El ocupado', text: 'Cancela porque "no le da el tiempo". Lo retiene poder reservar la clase que sí le calza en segundos y un recordatorio que lo empuja a ir.' },
          { h3: 'El que busca resultados', text: 'Se queda si ve progreso y lo ve en otros. Lo retienen los testimonios con transformaciones reales y el contenido de entrenamiento que lo mantiene enganchado.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Captar es caro; retener es donde está el negocio',
        paragraphs: [
          'La pauta que trae socios nuevos cuesta cada mes, y la mayoría de las membresías se cancela en los primeros meses. Un gimnasio que solo invierte en captar y descuida la retención está llenando un balde con hueco: paga por entrar gente que se va antes de volverse rentable.',
          'La web trabaja el otro lado de esa ecuación. La reserva fácil convierte la intención en hábito, el recordatorio reduce las ausencias que llevan al abandono, y el contenido mantiene al gimnasio presente los días que el socio no entrena. <strong>Retener un socio un mes más cuesta mucho menos que conseguir uno nuevo</strong>, y ahí es donde la web paga su inversión.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un gimnasio?', a: 'Con horarios y reserva de clases, desde el rango corporativo ($950) más la integración de reservas. Si además cobras la membresía en línea, entra al rango de e-commerce.' },
          { q: '¿Puedo cobrar la membresía en línea?', a: 'Sí, con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a>, incluyendo cobros recurrentes mensuales si tu operación lo requiere.' },
          { q: '¿Se integra con apps de rutinas que ya uso?', a: 'Depende de si esa app tiene API pública. Lo revisamos en el diagnóstico antes de prometer una integración que no se pueda sostener.' },
          { q: '¿Sirve para un estudio pequeño de yoga, crossfit o spinning?', a: 'Sí, y muchas veces le rinde más que a un gran gimnasio. En un estudio la reserva de clases con cupo limitado es esencial, y la comunidad pesa aún más: el enfoque va justo ahí.' },
          { q: '¿Puedo manejar distintos planes de membresía?', a: 'Sí, se muestran comparables en una sola vista (mensual, trimestral, anual, clases sueltas) para que el prospecto elija sin confundirse, y cada uno con su propio flujo de inscripción y pago.' },
          { q: '¿Los entrenadores pueden tener perfil propio?', a: 'Sí, con su especialidad y horarios. En fitness muchos socios eligen por el entrenador, y un buen perfil ayuda tanto a captar como a que reserven sus clases.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pagos con Yappy' },
          { slug: 'industrias/diseno-web-belleza-spa-panama', label: 'Web para Belleza y Spas' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu gimnasio', wa: 'Hola, quiero cotizar la web de un gimnasio.' },
  },

  /* ---------- TALLERES Y AUTOMOTRIZ ---------- */
  {
    slug: 'industrias/diseno-web-talleres-automotriz-panama',
    parent,
    title: 'Diseño Web para Talleres y Automotriz en Panamá | Confianza',
    description: 'Diseño web para talleres mecánicos y negocios automotrices en Panamá: precios transparentes, citas online y la confianza que el rubro necesita.',
    h1: 'Diseño web para talleres y automotriz',
    breadcrumb: 'Talleres y Automotriz',
    heroImage: { src: 'https://picsum.photos/seed/taller-automotriz-panama/1200/675', alt: 'Mecánico revisando el motor de un vehículo en un taller' },
    service: { type: 'Diseño web para talleres y negocios automotrices' },
    lead: [
      'Confiarle tu carro a un taller que no conoces da la misma ansiedad que confiarle tu salud a un médico nuevo. El rubro arrastra una desconfianza real sobre precios inflados y diagnósticos inventados.',
      'La web que le gana a esa desconfianza es la que muestra precios claros por servicio, permite agendar sin llamar y prueba con fotos reales que el trabajo se hizo bien. Transparencia, no promesas, es lo que convierte en este rubro.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de un taller en Panamá debe incluir',
        items: [
          'Rango de precios claro por tipo de servicio',
          'Agenda de citas online, sin necesidad de llamar',
          'Marcas y especialidades que atiende el taller',
          'Fotos de antes y después de reparaciones reales',
          'Testimonios verificables de clientes',
          'Ubicación exacta con Google Maps',
          'WhatsApp directo para diagnóstico urgente',
          'Garantía de servicios explicada con claridad',
        ],
      },
      {
        type: 'prose',
        h2: 'La transparencia de precios es tu ventaja competitiva',
        paragraphs: [
          'La mayoría de los talleres esconde los precios porque "cada caso es distinto". Es cierto, pero el cliente lo interpreta como que hay algo que ocultar. Publicar rangos por tipo de servicio (cambio de aceite, frenos, diagnóstico) reduce esa sospecha antes de que exista.',
          'La <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">cita online</a> resuelve el otro problema: el cliente con el carro varado no quiere esperar a que alguien conteste el teléfono. Ver disponibilidad y agendar en el momento es lo que gana esa urgencia.',
          'Y como el negocio depende del vecindario, el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local en Google Maps</a> suele pesar más que cualquier otra estrategia digital para este rubro.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de un taller',
        items: [
          { h3: 'Precios de referencia visibles', text: 'Publicamos rangos por tipo de servicio (aceite, frenos, diagnóstico) que reducen la sospecha de precios inflados antes de que exista.' },
          { h3: 'Cita online sin llamar', text: 'Montamos la agenda para que el cliente con el carro varado vea disponibilidad y reserve en el momento, sin esperar a que alguien conteste.' },
          { h3: 'Prueba del trabajo', text: 'Dejamos espacio para fotos de antes y después de reparaciones reales, testimonios verificables y la garantía explicada con claridad.' },
          { h3: 'Presencia local dominante', text: 'Alineamos la web con la ficha de Google Maps, que en este rubro suele traer más clientes que el sitio mismo.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Con qué llega cada cliente a un taller',
        intro: 'La ansiedad del cliente cambia según su urgencia. La web tiene que responder a cada situación.',
        items: [
          { h3: 'La emergencia', text: 'El carro falló y necesita ayuda ya. Busca "taller cerca de mí", quiere ubicación, WhatsApp directo y saber si lo pueden atender hoy. La velocidad de respuesta lo gana.' },
          { h3: 'El mantenimiento planeado', text: 'Toca el service o un cambio programado. Compara precios y reseñas con calma. Le pesan los rangos claros, la especialidad en su marca y poder agendar la fecha que le conviene.' },
          { h3: 'El desconfiado', text: 'Ya lo estafaron antes. Necesita pruebas: fotos de trabajos reales, garantía por escrito y testimonios. La transparencia total es lo único que lo convence.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La especialidad por marca es un imán de búsquedas',
        paragraphs: [
          'El dueño de un carro no busca "taller" a secas: busca "taller Toyota", "especialista en cajas automáticas", "mecánica de diésel". Un taller que deja claras las marcas y los sistemas en los que se especializa captura esas búsquedas específicas, donde hay menos competencia y el cliente llega más convencido de que está en el lugar correcto.',
          'Esa especialización también justifica el precio y filtra al cliente equivocado. <strong>Mejor atraer al dueño de la marca que dominas que a todos los que solo comparan por precio</strong>, y una web que declara con claridad en qué es bueno hace exactamente ese trabajo de filtro.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un taller?', a: 'Una landing o corporativa con agenda de citas parte del rango de $550 a $950 según el alcance. La prioridad suele ser la ficha de Google Maps, que muchas veces rinde más que el sitio mismo.' },
          { q: '¿Vale la pena el SEO local para un taller?', a: 'Casi siempre sí: la mayoría de las búsquedas del rubro son "taller cerca de mí". Ver <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.' },
          { q: '¿Puedo mostrar precios sin comprometerme a ellos?', a: 'Sí, se presentan como rangos de referencia ("desde $X"), con la aclaración de que el precio final se confirma tras el diagnóstico. Es transparencia, no una cotización cerrada por adelantado.' },
          { q: '¿Sirve para un negocio de repuestos o accesorios, no solo mecánica?', a: 'Sí. Para venta de repuestos el enfoque se acerca a un catálogo con búsqueda por marca y modelo, y puede sumar WhatsApp o checkout. La lógica de confianza y claridad de precio es la misma.' },
          { q: '¿Cómo muestro que un trabajo quedó bien hecho?', a: 'Con fotos de antes y después de reparaciones reales y testimonios verificables. En un rubro con fama de desconfianza, la evidencia visual del trabajo terminado convence más que cualquier texto.' },
          { q: '¿Puedo recibir el carro a domicilio o servicio de grúa?', a: 'Si lo ofreces, la web lo deja claro con su cobertura y un contacto directo para coordinarlo. Es un diferenciador real frente a talleres que solo atienden en local.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing Pages' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu taller', wa: 'Hola, quiero cotizar la web de un taller automotriz.' },
  },

  /* ---------- BELLEZA Y SPAS ---------- */
  {
    slug: 'industrias/diseno-web-belleza-spa-panama',
    parent,
    title: 'Diseño Web para Belleza y Spas en Panamá | Reserva por Estilista',
    description: 'Diseño web para salones, barberías y spas en Panamá: reserva de citas por estilista, portafolio visual de resultados y paquetes con tarjetas de regalo.',
    h1: 'Diseño web para belleza y spas',
    breadcrumb: 'Belleza y Spas',
    heroImage: { src: 'https://picsum.photos/seed/spa-belleza-salon-panama/1200/675', alt: 'Interior elegante de un salón de belleza o spa' },
    service: { type: 'Diseño web para salones de belleza y spas' },
    lead: [
      'En belleza se elige con los ojos. Antes de reservar, el cliente quiere ver el trabajo real del estilista, no una foto de banco de imágenes.',
      'La web correcta combina dos cosas que casi nunca van juntas en este rubro: un portafolio visual que muestre resultados reales y un sistema de reserva que elimine la fila de mensajes de WhatsApp sin responder.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de un salón o spa en Panamá debe incluir',
        items: [
          'Reserva de cita por servicio y por estilista específico',
          'Portafolio visual real de resultados, no stock genérico',
          'Perfiles de estilistas con su especialidad',
          'Paquetes de servicios y tarjetas de regalo',
          'Recordatorio automático de cita',
          'Política de cancelación y anticipo clara',
          'Integración con Instagram para mostrar trabajos recientes',
          'Tienda de productos si el negocio los vende',
        ],
      },
      {
        type: 'prose',
        h2: 'Reservar por estilista, no solo por servicio',
        paragraphs: [
          'La mayoría de los sistemas de reserva genéricos solo preguntan qué servicio quieres. En belleza eso no basta: el cliente fiel elige a una persona, no un servicio. Poder reservar directamente con "su" estilista es lo que retiene, y lo que un sistema mal configurado suele ignorar.',
          'El anticipo o depósito al reservar (con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy</a>) resuelve el problema más caro del rubro: las citas que no se presentan, que dejan un espacio vacío en la agenda del estilista sin poder llenarlo con alguien más.',
          'Y el portafolio visual convierte mejor que cualquier descripción: <strong>el cliente que ve el resultado real de un corte o una manicura reserva con mucha más confianza</strong> que el que solo lee "servicios de calidad".',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de un salón o spa',
        items: [
          { h3: 'Reserva por servicio y por estilista', text: 'Montamos el sistema para que el cliente reserve el servicio con "su" profesional, no solo un horario genérico. Eso es lo que retiene al cliente fiel.' },
          { h3: 'Anticipo contra ausencias', text: 'Configuramos el depósito al reservar con Yappy o tarjeta, la mejor defensa contra las citas que no se presentan y dejan un hueco imposible de llenar.' },
          { h3: 'Portafolio visual real', text: 'Armamos la galería de resultados reales por servicio y estilista, que convierte mucho mejor que cualquier descripción.' },
          { h3: 'Recordatorios y fidelización', text: 'Activamos recordatorios automáticos de cita y dejamos el espacio para paquetes y tarjetas de regalo que aumentan el ticket.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué busca cada cliente de belleza',
        intro: 'Del cliente fiel al que prueba por primera vez, cada uno decide distinto. La web les habla a todos.',
        items: [
          { h3: 'El cliente fiel', text: 'Quiere a su estilista de siempre y una forma rápida de reservar con esa persona. Le molesta que el sistema lo trate como si empezara de cero cada vez.' },
          { h3: 'El que prueba por primera vez', text: 'Elige con los ojos: quiere ver resultados reales antes de arriesgar su cabello o su piel. El portafolio visual y las reseñas deciden si reserva o sigue buscando.' },
          { h3: 'El que busca un regalo o una ocasión', text: 'Novia, cumpleaños, día de spa. Le sirven los paquetes claros y las tarjetas de regalo, que además suben el ticket promedio del negocio.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La ausencia sin aviso es el costo silencioso del rubro',
        paragraphs: [
          'En belleza cada cita ocupa el tiempo de un profesional que no puede atender a nadie más mientras espera. Un cliente que no se presenta y no avisa deja ese espacio muerto: no se cobra y ya no se puede llenar. Multiplicado por semana, es de lo que más margen se lleva en el rubro.',
          'La web ataca ese costo por dos lados: el anticipo al reservar compromete al cliente, y el recordatorio automático reduce los olvidos genuinos. <strong>Una política de cancelación clara y un depósito razonable protegen la agenda</strong> sin espantar al cliente que sí piensa venir, que agradece encontrar cupo justamente porque el sistema filtra a los que no.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un salón o spa?', a: 'Con reserva por estilista y portafolio visual, el rango corporativo ($950) es el punto de partida habitual. Salones con varias sedes o servicios de tienda se cotizan según alcance.' },
          { q: '¿Puedo cobrar un depósito al reservar?', a: 'Sí, es de las funciones más pedidas del rubro: reduce las ausencias sin pago. Se integra con Yappy o tarjeta.' },
          { q: '¿El cliente puede elegir su estilista de siempre?', a: 'Sí, el sistema de reservas permite filtrar disponibilidad por profesional específico, no solo por tipo de servicio.' },
          { q: '¿Sirve para una barbería, no solo para salón o spa?', a: 'Sí, el enfoque es el mismo: reserva por barbero específico, portafolio de cortes reales y recordatorio de cita. En barbería la fidelidad al profesional es aún más fuerte, así que la reserva por persona pesa mucho.' },
          { q: '¿Puedo vender paquetes y tarjetas de regalo?', a: 'Sí, y suben bastante el ticket promedio. Se muestran como productos propios (día de spa, paquete de novia, gift card por monto) que el cliente compra y regala en línea.' },
          { q: '¿Puedo mostrar mis trabajos recientes desde Instagram?', a: 'Sí, integramos tu feed para que los trabajos que ya publicas alimenten el portafolio de la web sin doble trabajo, manteniéndolo siempre fresco.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pagos con Yappy' },
          { slug: 'industrias/diseno-web-gimnasios-fitness-panama', label: 'Web para Gimnasios' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu salón o spa', wa: 'Hola, quiero cotizar la web de un salón o spa.' },
  },

  /* ---------- LOGÍSTICA Y TRANSPORTE ---------- */
  {
    slug: 'industrias/diseno-web-logistica-transporte-panama',
    parent,
    title: 'Diseño Web para Logística y Transporte en Panamá | B2B',
    description: 'Diseño web para empresas de logística y transporte en Panamá: cobertura, flota y certificaciones visibles. Lo que un comprador B2B revisa antes de contratar.',
    h1: 'Diseño web para logística y transporte',
    breadcrumb: 'Logística y Transporte',
    heroImage: { src: 'https://picsum.photos/seed/logistica-transporte-camiones-panama/1200/675', alt: 'Camiones de carga en un centro de distribución logística' },
    service: { type: 'Diseño web para empresas de logística y transporte' },
    lead: [
      'Un comprador B2B que va a confiar su carga a tu empresa no busca frases motivadoras: busca pruebas de que no vas a fallarle.',
      'La web correcta muestra cobertura real, flota, seguros y certificaciones antes de pedir cualquier dato de contacto. En logística, la confianza se construye con evidencia verificable, no con "somos líderes en soluciones integrales".',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Lo que la web de una empresa de logística debe incluir',
        items: [
          'Cobertura geográfica clara, idealmente con mapa de rutas',
          'Flota y capacidad de carga visibles',
          'Certificaciones, seguros y cumplimiento normativo',
          'Casos por sector: importación, mudanzas, carga refrigerada',
          'Formulario o cotizador de solicitud de servicio',
          'Testimonios de empresas clientes, verificables',
          'Portal de seguimiento de envíos si tu operación lo permite',
          'Contacto directo para cotizaciones urgentes',
        ],
      },
      {
        type: 'prose',
        h2: 'El comprador B2B compra evidencia, no promesas',
        paragraphs: [
          'Quien decide contratar transporte para su empresa suele comparar varias opciones y necesita justificar la elección internamente. Tu web tiene que darle esa evidencia: qué seguros tienes, qué certificaciones, qué clientes similares ya confían en ti.',
          'La informalidad es el competidor real de este rubro: muchas opciones sin web, sin seguro visible y sin trayectoria documentada. <strong>Una web seria es en sí misma una señal de formalidad</strong> frente a esa competencia.',
          'Si tu operación lo permite, un portal simple de seguimiento de envío (aunque sea básico) diferencia mucho: el cliente corporativo valora poder verificar el estado de su carga sin tener que llamar.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos la web de una empresa de logística',
        items: [
          { h3: 'Evidencia de capacidad primero', text: 'Ponemos por delante lo que el comprador B2B revisa: cobertura con mapa de rutas, flota, capacidad de carga, seguros y certificaciones.' },
          { h3: 'Casos por sector', text: 'Organizamos el servicio por tipo (importación, mudanzas, carga refrigerada, distribución) para que cada cliente se reconozca y encuentre lo suyo.' },
          { h3: 'Cotización clara', text: 'Montamos el cotizador o formulario de solicitud que recoge los datos de la carga y llega directo a tu equipo comercial para responder rápido.' },
          { h3: 'Seguimiento si tu operación lo permite', text: 'Evaluamos un portal de rastreo, aunque sea básico, que le deja al cliente verificar el estado de su carga sin tener que llamar.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué revisa cada comprador antes de confiar su carga',
        intro: 'La decisión B2B pasa por varias manos, cada una con una preocupación distinta. La web tiene que responderlas todas.',
        items: [
          { h3: 'El que opera el día a día', text: 'Jefe de logística o compras. Le importan cobertura, tiempos, capacidad y poder cotizar rápido. Necesita datos concretos, no eslóganes.' },
          { h3: 'El que aprueba el gasto', text: 'Gerencia o finanzas. Necesita justificar la elección: seguros, certificaciones, formalidad y casos de clientes similares que respalden la decisión.' },
          { h3: 'El que revisa el riesgo', text: 'Piensa en qué pasa si algo sale mal. Le pesan los seguros de carga, el cumplimiento normativo y la trayectoria documentada de la empresa.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Frente a la informalidad, la web seria ya es una ventaja',
        paragraphs: [
          'Buena parte de la competencia en transporte y logística opera sin web, sin seguro visible y sin trayectoria documentada. Para el comprador corporativo eso es un riesgo que no puede asumir: necesita un proveedor que exista de verdad y responda si algo falla. Una web seria, con la información de respaldo a la vista, te separa de inmediato de esa informalidad.',
          'No se trata de superlativos ("líderes en soluciones integrales") que cualquiera escribe. Se trata de evidencia verificable: qué transportas, para quién, con qué cobertura y qué te respalda. <strong>En B2B la web no cierra la venta, pero decide si llegas a la lista corta</strong>, y sin ella muchas veces ni te consideran.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una empresa de logística?', a: 'El formato corporativo con casos por sector y cotizador parte desde $950. Un portal de seguimiento de envíos se dimensiona como <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">desarrollo a medida</a>, según la complejidad de tu operación.' },
          { q: '¿Pueden integrar el sitio con mi sistema de rastreo?', a: 'Sí, si tu sistema expone una API. Ver <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">desarrollo a medida</a> o revisamos el caso puntual en el diagnóstico.' },
          { q: '¿Vale la pena mostrar la flota y certificaciones?', a: 'Es de lo que más pesa en la decisión B2B: refuerza que la empresa existe de verdad y opera con seriedad, algo que muchos competidores informales no pueden mostrar.' },
          { q: '¿Sirve para transporte de pasajeros o solo para carga?', a: 'Sirve para ambos, cambiando el enfoque. En transporte de personal o turístico el peso va a rutas, flota, seguros de pasajeros y contratación corporativa; la lógica de mostrar formalidad y capacidad es la misma.' },
          { q: '¿Cómo capto clientes empresariales sin dar precios públicos?', a: 'Con un cotizador o formulario que recoge los datos de la carga o el servicio y llega directo a tu equipo comercial. En B2B casi todo se cotiza a la medida, así que el objetivo de la web es calificar y agilizar ese primer contacto, no publicar tarifas.' },
          { q: '¿Un cotizador en línea me sirve si cada servicio es distinto?', a: 'Sí, pensado como calificador más que como precio final: pregunta origen, destino, tipo y volumen de carga para que tu equipo responda con una cotización cerrada por escrito, sin ida y vuelta de datos básicos.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a Medida' },
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Web para Constructoras' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu empresa logística', wa: 'Hola, quiero cotizar la web de una empresa de logística.' },
  },
];
