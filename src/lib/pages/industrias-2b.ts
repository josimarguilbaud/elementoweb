/* SILO INDUSTRIAS (lote 2b): seguros, concesionarios, clínicas estéticas y
   veterinarias. Regla dura: contenido REAL por industria, con su dolor y su
   checklist propios. Nada de plantillas clonadas con el nombre cambiado. */
import type { PageData } from '../types';

const parent = { slug: 'industrias', label: 'Industrias' };

export const industrias2b: PageData[] = [
  /* ---------- SEGUROS Y CORREDORES ---------- */
  {
    slug: 'industrias/diseno-web-seguros-corredores-panama',
    parent,
    title: 'Diseño Web para Seguros y Corredores en Panamá',
    description: 'Diseño web para corredores y agencias de seguros en Panamá: ramos claros, solicitud de cotización que filtra, confianza y captación de asegurados en un mercado muy competido.',
    h1: 'Diseño web para seguros y corredores',
    breadcrumb: 'Seguros',
    heroImage: { src: '/images/industrias/diseno-web-seguros-corredores-panama.jpg', alt: 'Corredor de seguros revisando una póliza con un cliente en su oficina' },
    service: { type: 'Diseño web para corredores de seguros' },
    lead: [
      'Quien busca un seguro no compra por impulso: compara coberturas, pide varias cotizaciones y decide por confianza. Tu web tiene que ganar esa comparación antes de que suene el teléfono.',
      'El corredor vive de la renovación y del boca a boca, pero capta poco por internet porque su web (cuando la tiene) es un folleto que enumera aseguradoras sin explicar nada. El asegurado no quiere una lista de logos: quiere entender qué ramo lo protege y cómo pedir una cotización sin dar media vida por adelantado.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de un corredor de seguros en Panamá',
        intro: 'No es un catálogo de aseguradoras: es una máquina de aclarar dudas y filtrar solicitudes serias.',
        items: [
          'Una página por ramo (auto, salud, vida, hogar, colectivo, fianzas)',
          'Solicitud de cotización que pide solo los datos mínimos para responder',
          'Explicación honesta de qué cubre y qué no cada tipo de póliza',
          'Señales de respaldo: aseguradoras con las que trabajas y tu licencia de corredor',
          'Canal directo por WhatsApp para dudas rápidas antes de cotizar',
          'Sección de renovación y siniestros para el cliente que ya tienes',
          'Contenido que responde las preguntas previas (deducible, cobertura, exclusiones)',
          'Diseño sobrio que transmita respaldo, no una promoción de descuentos',
        ],
      },
      {
        type: 'prose',
        h2: 'Una página por ramo: así se posiciona y así se entiende',
        paragraphs: [
          'Nadie busca "corredor de seguros" a secas: busca "seguro de auto Panamá", "seguro de salud para la familia" o "fianza de cumplimiento". Si todos tus ramos viven apretados en una sola página, no compites en ninguna de esas búsquedas y, peor, obligas al visitante a leer sobre coberturas que no le interesan.',
          'Cada ramo merece su propia URL, con el problema explicado en el idioma del cliente: qué cubre, qué deja fuera, cuándo conviene y qué necesita para cotizar. <strong>Así se posiciona un corredor: ramo por ramo</strong>, no con la marca genérica. Y de paso educas al asegurado, que llega a la cotización sabiendo lo que pide.',
          'El contenido informativo hace el resto. Cada duda frecuente (qué es un deducible, cómo funciona un colectivo, qué exclusiones tiene un seguro de auto) es un artículo que atrae al siguiente cliente con la misma pregunta y que, de camino, deja claro que sabes de lo que hablas. Es el mismo principio del <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento por contenido</a>.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué busca cada asegurado antes de escribirte',
        intro: 'Un corredor atiende perfiles con miedos distintos. La web bien armada le habla a cada uno sin marearlo con lo que no le toca.',
        items: [
          { h3: 'El particular que compara precio', text: 'Cotiza el mismo auto o la misma salud con tres corredores. Decide por rapidez de respuesta y por sentir que le explicaron, no que le vendieron. Le pesa una cotización clara y sin letra pequeña.' },
          { h3: 'La empresa que necesita colectivo o fianza', text: 'Busca respaldo y cumplimiento: seguro colectivo para su personal, fianzas para licitar. Le importa tu experiencia y con qué aseguradoras trabajas más que el precio de lista.', link: { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Servicios profesionales' } },
          { h3: 'El cliente que ya tienes', text: 'Vuelve a renovar o a reportar un siniestro. Si no encuentra rápido cómo hacerlo, te llama para lo básico y te satura. Una sección de renovación y siniestros libera tu tiempo y lo fideliza.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de seguros',
        items: [
          { h3: 'Mapeo de ramos y aseguradoras', text: 'Listamos los ramos que colocas y con qué compañías. Decidimos cuáles merecen página propia posicionable y cómo mostrar el respaldo sin convertir la web en un muro de logos.' },
          { h3: 'Redacción que aclara, no que asusta', text: 'Explicamos cada ramo en el idioma del cliente: qué cubre, qué no, cuándo conviene. Sin promesas de "el más barato" y sin jerga de póliza que espanta.' },
          { h3: 'Solicitud de cotización que filtra', text: 'Armamos el formulario por ramo pidiendo solo lo mínimo para responder. Y si lo activas, el <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">asistente con IA</a> resuelve las dudas básicas y solo te pasa la solicitud lista para cotizar.' },
          { h3: 'Publicación y contenido continuo', text: 'Dejamos el blog listo para que cada pregunta frecuente se vuelva un artículo que capta clientes, y conectamos WhatsApp para la duda rápida que no espera un formulario.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La confianza se gana explicando, no prometiendo el precio más bajo',
        paragraphs: [
          'El seguro es un producto que el cliente compra con desconfianza: paga por algo que espera no usar y teme que, cuando lo use, aparezca la letra chica. El corredor que compite solo por "la cotización más barata" entra en una guerra que no gana y que además atrae al cliente que se va apenas otro le baje cinco dólares. La web que gana es la que explica: por qué esa cobertura, qué pasa en un siniestro, qué diferencia hay entre una póliza y otra.',
          'Ese respaldo se diseña. Mostrar las aseguradoras con las que trabajas, tu licencia de corredor y una sección clara de siniestros dice más que cualquier eslogan. <strong>El asegurado no compra la póliza más barata: compra al corredor que confía que va a estar cuando lo necesite.</strong> Y esa confianza empieza en cómo se ve y qué dice tu web.',
        ],
      },
      {
        type: 'statement',
        text: 'En seguros nadie recuerda al corredor hasta que hay un siniestro. La web es lo que hace que te recuerden antes, cuando toca decidir a quién comprarle.',
        strong: 'la web es lo que hace que te recuerden antes',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un corredor de seguros?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $950, con una página por ramo. Si solo quieres captar para un ramo concreto (auto, por ejemplo) con una <a href="/servicios/landing-pages-alta-conversion-panama/">landing</a>, arranca desde $550. Siempre con cotización cerrada por escrito antes de empezar.' },
          { q: '¿La web cotiza sola las pólizas?', a: 'No calcula la prima final (eso depende de la aseguradora y del perfil de riesgo), pero sí recoge la solicitud con los datos correctos para que tú respondas rápido. Cotizar en automático requiere integración con cada compañía y rara vez conviene: el valor del corredor está justo en asesorar la cotización.' },
          { q: '¿Puedo mostrar todas las aseguradoras con las que trabajo?', a: 'Sí, pero con criterio. En vez de un muro de logos que parece publicidad de ellas, las mostramos como respaldo dentro de cada ramo: quién asegura auto, quién salud. Así el logo suma confianza en lugar de robarte el protagonismo.' },
          { q: '¿Sirve para un corredor independiente o solo para agencias grandes?', a: 'Sirve especialmente al independiente. Un corredor solo que posiciona bien dos o tres ramos concretos capta de igual a igual con agencias grandes en esas búsquedas, sin el costo de una estructura completa.' },
          { q: '¿Cómo evito que me lleguen solicitudes que no puedo colocar?', a: 'Con el formulario correcto por ramo y, si lo activas, el asistente con IA que filtra antes. Recoge tipo de seguro, datos mínimos y expectativa, para que solo llegue a tu bandeja la solicitud que sí trabajas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Web para Contadores' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu corredora', wa: 'Hola, quiero cotizar la web de una corredora de seguros.' },
  },

  /* ---------- CONCESIONARIOS Y VENTA DE AUTOS ---------- */
  {
    slug: 'industrias/diseno-web-concesionarios-autos-panama',
    parent,
    title: 'Diseño Web para Concesionarios de Autos en Panamá',
    description: 'Diseño web para concesionarios y venta de autos en Panamá: inventario con fotos que vende, financiamiento claro, captación de prospectos y agenda de test drive.',
    h1: 'Diseño web para concesionarios y venta de autos',
    breadcrumb: 'Concesionarios',
    heroImage: { src: '/images/industrias/diseno-web-concesionarios-autos-panama.jpg', alt: 'Automóvil deportivo exhibido en el salón de ventas de un concesionario' },
    service: { type: 'Diseño web para concesionarios de autos' },
    lead: [
      'El comprador de un auto lo elige en el celular mucho antes de pisar el salón. Ve las fotos, calcula la letra y decide a cuál concesionario visitar. Si tu inventario no está en línea, no estás en esa lista.',
      'Vender autos no es lo mismo que repararlos: aquí el cliente compra con los ojos y con la calculadora. Quiere ver el modelo real que hay en piso (no una foto de catálogo del fabricante), entender cuánto pagaría al mes y agendar el test drive sin llamar tres veces. El concesionario que no muestra su inventario en línea pierde el prospecto contra el que sí.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de un concesionario de autos en Panamá',
        intro: 'El corazón es el inventario: fotos reales, filtros y una forma de dejar el interés antes de venir al salón.',
        items: [
          'Inventario en línea con fotos reales de cada unidad, no del catálogo del fabricante',
          'Filtros por marca, modelo, año, precio, kilometraje y tipo (nuevo o usado)',
          'Ficha por vehículo con equipamiento, precio y varias fotos del auto real',
          'Simulador o solicitud de financiamiento que capte al prospecto',
          'Botón de agendar test drive por unidad',
          'Sección de seminuevos o recibimos tu usado si aplica',
          'Captación de prospectos con WhatsApp directo desde cada ficha',
          'Carga fácil del inventario para que tu equipo lo mantenga al día',
        ],
      },
      {
        type: 'prose',
        h2: 'El inventario es la web: si no está en línea, el prospecto no llega',
        paragraphs: [
          'El comprador de auto hace todo el trabajo antes de visitarte: ve fotos, compara modelos, calcula la letra mensual y descarta concesionarios sin salir de su casa. Cuando llega al salón, ya casi decidió. Si tu web no muestra el inventario real (el auto que de verdad está en piso, con sus fotos), el prospecto se va al concesionario que sí lo muestra y tú te enteras de que existía cuando ya compró en otro lado.',
          'Por eso el inventario en línea no es un adorno: es el motor. Cada unidad con su ficha, sus fotos reales y su precio, filtrable por lo que el comprador busca de verdad (marca, presupuesto, año). <strong>La foto de catálogo del fabricante no vende: vende el auto real que puede tocar el sábado.</strong> Y cada ficha necesita su botón para dejar el interés en caliente, sin obligar a llamar.',
          'Un catálogo así funciona parecido a una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a>, pero el cierre no es un pago: es un prospecto calificado y un test drive agendado. La diferencia técnica cambia todo el diseño.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué necesita cada tipo de comprador',
        intro: 'No todos llegan igual: unos compran auto nuevo con financiamiento, otros buscan seminuevo de contado. La web tiene que servir a los dos.',
        items: [
          { h3: 'El comprador de auto nuevo', text: 'Compara modelos y le importa la letra mensual. Necesita ver el equipamiento por versión y calcular el financiamiento antes de decidir a cuál agencia ir. Se cierra con una buena simulación y un test drive fácil de agendar.' },
          { h3: 'El comprador de seminuevo', text: 'Desconfía por naturaleza: quiere fotos reales, kilometraje, historial y precio sin sorpresas. Le pesa la transparencia. La ficha honesta con muchas fotos vale más que cualquier promoción.' },
          { h3: 'El que quiere entregar su usado', text: 'Trae un auto para dar de inicial y necesita saber si lo reciben y cuánto le dan. Un formulario de valoración de su usado lo convierte en prospecto doble: compra y entrega.', link: { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Cobro de reservas' } },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de concesionario',
        items: [
          { h3: 'Estructura del inventario', text: 'Definimos cómo se carga cada unidad, qué campos filtran (marca, año, precio, kilometraje) y cómo tu equipo sube y baja autos sin depender de nosotros. El inventario tiene que respirar solo.' },
          { h3: 'Fichas que venden', text: 'Diseñamos la ficha por vehículo con galería de fotos reales, equipamiento claro y el precio visible. Cada una con su llamado: agendar test drive, solicitar financiamiento o escribir por WhatsApp.' },
          { h3: 'Captación de prospectos', text: 'Conectamos la solicitud de financiamiento, la valoración del usado y el <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">agendamiento de test drive</a> para que cada interés se convierta en un dato accionable para tu equipo de ventas.' },
          { h3: 'Publicación y medición', text: 'Publicamos, conectamos el seguimiento y dejamos todo listo para amplificar con <a href="/marketing/google-ads-panama/">Google Ads</a>, que en autos rinde: quien busca "camioneta 2024 Panamá" está a semanas de comprar.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El financiamiento es la conversación que cierra la venta',
        paragraphs: [
          'En Panamá muy pocos compran un auto de contado: casi todos financian. Por eso la pregunta que de verdad importa no es "cuánto cuesta", sino "cuánto pago al mes". El concesionario que responde esa pregunta en la web (con un simulador o al menos una solicitud de financiamiento clara) avanza la venta desde el celular; el que la esconde hasta la visita pierde al prospecto que quería tener la cifra antes de mover el carro.',
          'Ese enfoque separa la venta de autos del taller. En un <a href="/industrias/diseno-web-talleres-automotriz-panama/">taller</a> el cliente llega con un problema y busca confianza en la reparación; en el concesionario llega con un deseo y busca que le hagan fácil la compra. <strong>La web de un concesionario no repara desconfianza: acelera una decisión que ya casi está tomada</strong>, y la letra mensual clara es lo que la empuja al sí.',
        ],
      },
      {
        type: 'statement',
        text: 'El comprador ya vio el auto en su celular antes de estacionarse en tu salón. Tu web no es el catálogo: es la primera prueba de manejo.',
        strong: 'tu web es la primera prueba de manejo',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un concesionario?', a: 'Depende del inventario. Con catálogo de vehículos, filtros y fichas el punto de partida se acerca a la <a href="/servicios/tiendas-online-ecommerce-panama/">plataforma con catálogo</a> desde $1,500, porque el sistema de inventario es lo que da el trabajo. Si es un lote pequeño de seminuevos, se puede resolver más liviano. Siempre con cotización cerrada por escrito.' },
          { q: '¿Puedo subir y bajar autos yo mismo?', a: 'Sí, esa es la idea. Dejamos la carga del inventario tan simple que tu equipo suba una unidad nueva con sus fotos en minutos y la baje cuando se venda, sin llamarnos. Un inventario desactualizado espanta más que no tener web.' },
          { q: '¿La web calcula el financiamiento?', a: 'Podemos poner un simulador que dé una letra estimada según monto, inicial y plazo, para que el prospecto se haga una idea. La aprobación y la tasa real dependen del banco o financiera, así que lo dejamos claro para no generar falsas expectativas.' },
          { q: '¿Sirve para vender también seminuevos y recibir usados?', a: 'Sí. Manejamos secciones separadas para nuevos y seminuevos, con filtros distintos, y un formulario de valoración para el cliente que quiere entregar su usado como inicial. Es una de las funciones que más prospectos genera.' },
          { q: '¿Cómo llegan los prospectos a mi equipo de ventas?', a: 'Cada ficha tiene botón de WhatsApp, agenda de test drive y solicitud de financiamiento. Todo eso llega con los datos del auto de interés y del cliente, para que tu vendedor tome la conversación sabiendo qué modelo lo movió.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Plataformas con Catálogo' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Agenda de Test Drive' },
          { slug: 'marketing/google-ads-panama', label: 'Google Ads' },
          { slug: 'industrias/diseno-web-talleres-automotriz-panama', label: 'Web para Talleres' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu concesionario', wa: 'Hola, quiero cotizar la web de un concesionario de autos con inventario en línea.' },
  },

  /* ---------- CLÍNICAS ESTÉTICAS ---------- */
  {
    slug: 'industrias/diseno-web-clinicas-esteticas-panama',
    parent,
    title: 'Diseño Web para Clínicas Estéticas en Panamá',
    description: 'Diseño web para clínicas de estética y medicina estética en Panamá: resultados visibles, reserva de valoración, confianza médica y captación para tratamientos de ticket alto.',
    h1: 'Diseño web para clínicas estéticas',
    breadcrumb: 'Clínicas Estéticas',
    heroImage: { src: '/images/industrias/diseno-web-clinicas-esteticas-panama.jpg', alt: 'Cabina de tratamiento en una clínica de medicina estética moderna' },
    service: { type: 'Diseño web para clínicas estéticas' },
    lead: [
      'Un tratamiento estético se decide con dos preguntas: se ve bien el resultado y confío en quien me lo va a hacer. Tu web tiene que responder ambas antes de que el paciente pida una cita.',
      'La medicina estética vende un ticket alto sobre el propio cuerpo del paciente, así que la barrera no es el precio: es el miedo. Miedo al resultado, a la mano equivocada, a la mala experiencia que vio en redes. La web que gana no muestra descuentos: muestra resultados reales, credenciales médicas y una forma segura de dar el primer paso, que casi siempre es una valoración.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una clínica estética en Panamá',
        intro: 'Aquí se compra con los ojos y con la confianza. La web tiene que servir las dos cosas sin caer en la promesa exagerada.',
        items: [
          'Una página por tratamiento (botox, rellenos, láser, corporales, faciales)',
          'Antes y después reales, con el consentimiento del paciente',
          'Credenciales del médico o especialista y equipos que usa',
          'Reserva de valoración en línea, no solo un teléfono',
          'Explicación honesta de cada tratamiento: qué hace, qué esperar, recuperación',
          'Testimonios y señales de confianza sin promesas de resultado garantizado',
          'Diseño cuidado que transmita limpieza, seriedad y buen gusto',
          'WhatsApp para la duda íntima que el paciente no quiere hacer en público',
        ],
      },
      {
        type: 'prose',
        h2: 'El resultado se muestra, no se promete: antes y después que convierten',
        paragraphs: [
          'En estética el paciente compra con los ojos. Ninguna descripción de un tratamiento convence tanto como ver el resultado en una persona real. El antes y después bien tomado (misma luz, mismo ángulo, con el consentimiento del paciente) es la prueba que mueve la reserva, mucho más que cualquier texto sobre la técnica. Una clínica que esconde sus resultados le pide al paciente un acto de fe que otra clínica no le pide.',
          'Pero mostrar no es prometer. La ética médica y el sentido común marcan la línea: se muestra el resultado real de un caso, no se garantiza que a todos les pase igual. <strong>La clínica seria explica qué esperar y qué no</strong>, y esa honestidad, lejos de frenar, construye la confianza que cierra un ticket alto. El paciente que siente que le dijeron la verdad reserva con menos miedo.',
          'Cada tratamiento merece su propia página, porque cada uno se busca por separado: "botox Panamá", "tratamiento de manchas", "criolipólisis". Es el mismo principio que usa un <a href="/industrias/diseno-web-belleza-spa-panama/">spa o centro de belleza</a>, pero aquí pesa además la credencial médica, que en estética no es un detalle: es la diferencia entre una clínica y una promoción de redes.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué mueve a cada paciente a reservar',
        intro: 'La estética atiende motivaciones distintas. La web bien armada le habla a cada una sin prometer de más.',
        items: [
          { h3: 'La paciente de mantenimiento', text: 'Ya se hace tratamientos y busca continuidad y buena mano. Le importa la agenda cómoda y que la clínica recuerde su historial. Se fideliza con una reserva fácil y un trato constante.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas en línea' } },
          { h3: 'El paciente primerizo', text: 'Nunca se ha hecho nada y llega lleno de miedo. Necesita ver resultados reales, entender el procedimiento y sentir que puede preguntar sin compromiso. Se cierra con una valoración, no con una venta directa.' },
          { h3: 'Quien busca un tratamiento puntual', text: 'Vio algo en redes (un relleno, un láser) y quiere ese resultado concreto. Llega a la página del tratamiento específico. Le pesa el antes y después de ese procedimiento y el precio de la valoración.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de clínica estética',
        items: [
          { h3: 'Menú de tratamientos', text: 'Ordenamos tu oferta en páginas por tratamiento, cada una con su explicación, su antes y después y su precio de valoración. Definimos cuáles posicionar por separado y cuáles agrupar.' },
          { h3: 'Prueba visual y credenciales', text: 'Montamos la galería de resultados reales con el marco de consentimiento correcto y damos peso a las credenciales del médico y a los equipos, que es lo que separa una clínica seria de una promoción.' },
          { h3: 'Reserva de valoración', text: 'Conectamos el <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de citas</a> para que el paciente reserve su valoración en línea, con recordatorio automático que baja las ausencias, y WhatsApp para la duda íntima previa.' },
          { h3: 'Publicación y captación', text: 'Publicamos y dejamos listo el terreno para amplificar con <a href="/marketing/facebook-instagram-ads-panama/">Instagram Ads</a>, el canal natural de la estética, con las páginas de tratamiento como destino que convierte.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El ticket alto no se cierra con descuento: se cierra con confianza',
        paragraphs: [
          'Un tratamiento estético cuesta, y el paciente lo sabe. La tentación es competir por precio con promociones agresivas, pero eso atrae al paciente que se va a la próxima oferta y baja la percepción de tu clínica justo donde más importa: sobre su cara y su cuerpo, nadie quiere lo barato. La web que convierte en estética no grita descuentos: transmite que la clínica es limpia, seria, con manos capacitadas y resultados que se pueden ver.',
          'Por eso el primer paso rara vez es la venta: es la valoración. Bajar la barrera a "ven, te evalúo y te digo con honestidad qué te conviene" convierte muchísimo mejor que "reserva tu botox hoy". <strong>La valoración es el mostrador donde se construye la confianza que justifica el ticket</strong>, y la web tiene que hacer que pedirla sea tan fácil como reservar una mesa. El diseño cuidado, ahí, no es vanidad: es coherencia. Nadie confía su rostro a una clínica cuya web se ve descuidada.',
        ],
      },
      {
        type: 'statement',
        text: 'En estética el paciente no compra un tratamiento: compra la confianza de que la mano que lo hace sabe lo que hace. Todo en la web trabaja para esa confianza o en contra de ella.',
        strong: 'compra la confianza de que la mano que lo hace sabe lo que hace',
      },
            {
        type: 'prose',
        h2: 'Una página por procedimiento: así te encuentra quien ya decidió',
        paragraphs: [
          'En estética el paciente rara vez busca "clínica estética". Busca el procedimiento con nombre y apellido: "ácido hialurónico Panamá", "depilación láser Costa del Este", "criolipólisis precio", "botox arrugas frente". Ya investigó, ya sabe qué quiere y está comparando dónde hacérselo.',
          'Ese paciente es el más valioso que vas a recibir y es el que peor atiende una página de servicios que lista doce procedimientos en viñetas. Llega buscando una respuesta concreta y encuentra un catálogo.',
          'Una página por procedimiento le da lo que vino a buscar: en qué consiste, cuánto dura la sesión, cuántas se necesitan, qué se siente, qué cuidados hay después, cuánto dura el resultado y desde cuánto sale. Con su galería de casos de ese procedimiento, no de la clínica en general.',
          '<strong>Y compite por su propia búsqueda.</strong> Cinco procedimientos con página propia rinden más que veinte listados, y te permiten pautar sobre el que más margen deja en vez de sobre la clínica entera.',
        ],
      },
      {
        type: 'prose',
        h2: 'La publicidad de estética tiene reglas propias',
        paragraphs: [
          'Meta y Google tratan la salud y la estética como categorías restringidas. Anuncios con antes y después demasiado explícitos, promesas de resultado o textos que señalan una condición física del usuario se rechazan, y una cuenta con rechazos repetidos termina limitada.',
          'Eso tiene una consecuencia práctica que casi nadie anticipa: <strong>si tu captación depende solo de la pauta, estás construyendo sobre terreno prestado</strong>. Una cuenta restringida deja la agenda vacía de un día para otro y no hay a quién reclamarle.',
          'La web resuelve eso porque el tráfico orgánico no se rechaza. Las páginas por procedimiento, el contenido que explica cada tratamiento y la ficha de Google no dependen de que un revisor apruebe un anuncio. Siguen trayendo pacientes mientras la pauta se resuelve.',
          'Además, el material que sí puedes publicar en tu web —galerías completas, explicaciones detalladas, precios— es justo el que la pauta restringe. Los anuncios llevan a esas páginas y ahí sí se puede mostrar todo. Lo trabajamos en <a href="/marketing/facebook-instagram-ads-panama/">campañas de Meta</a> junto con el sitio, no por separado.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace dudar a un paciente de estética',
        intro: 'En un rubro donde el paciente teme al mal resultado, cada una de estas cosas lo empuja a seguir buscando.',
        items: [
          'Fotos de banco de modelos que evidentemente no son pacientes tuyos',
          'Antes y después sin la misma luz, ángulo y distancia: parecen trucados',
          'Cero mención del profesional que aplica: nombre, idoneidad, formación',
          'Ni un rango de precio en ningún procedimiento',
          'Promesas absolutas de resultado, que además espantan al paciente informado',
          'Nada sobre qué pasa si el resultado no es el esperado',
          'Equipos y marcas de tecnología sin especificar, cuando el paciente los busca por nombre',
          'Última publicación de casos con más de un año',
        ],
      },
      {
        type: 'prose',
        h2: 'Hablar de precio sin espantar y sin regalar el margen',
        paragraphs: [
          'El precio es la pregunta que más llega por WhatsApp y la que más webs de estética evitan. Esconderlo del todo tiene un costo invisible: el paciente asume que es carísimo, o escribe solo para preguntar precio y desaparece, y tu equipo pasa el día contestando cotizaciones que no cierran.',
          'Lo que funciona no es publicar la lista completa. Es publicar el <strong>desde</strong> por procedimiento y el precio de la valoración inicial. Eso filtra al que nunca iba a agendar, le da seguridad al que sí, y deja el precio final donde debe estar: en la consulta, después de evaluar el caso.',
          'Los paquetes de sesiones también rinden bien publicados, porque el paciente de estética compara "cuánto me sale el tratamiento completo", no la sesión suelta. Y publicar el financiamiento disponible mueve tickets altos más que cualquier descuento.',
          'La regla que aplicamos: <strong>si tu equipo la contesta veinte veces por semana por WhatsApp, esa respuesta debe estar en la web.</strong> No pierdes ventas por publicarla; ganas tiempo del equipo y filtras mejor.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: valoraciones agendadas y cuántas cierran',
        paragraphs: [
          'En estética la métrica que importa no es la cita, es la <strong>valoración</strong>: la primera consulta donde se evalúa el caso y se cotiza. Y después, qué porcentaje de esas valoraciones termina en tratamiento.',
          'Esos dos números juntos dicen cosas distintas. Muchas valoraciones que no cierran significa que la web está atrayendo al paciente equivocado, normalmente porque no habla de precio y llega gente fuera de rango. Pocas valoraciones con cierre alto significa que la captación está corta pero apunta bien, y ahí sí conviene invertir en visibilidad.',
          'El tercer dato es de qué procedimiento venía cada valoración. Te dice cuál de tus páginas está trabajando y cuál no, y en un rubro donde el margen varía mucho entre procedimientos, eso decide dónde poner el esfuerzo.',
          'Lo dejamos medido desde el arranque, en un tablero corto que se revisa en dos minutos. Cómo lo planteamos, en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una clínica estética?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $950, con página por tratamiento, galería de resultados y reserva de valoración. Si sumas un catálogo grande de tratamientos o venta de productos, se cotiza según alcance. Siempre con precio cerrado por escrito.' },
          { q: '¿Pueden manejar el antes y después sin problemas legales?', a: 'Sí, con el marco correcto: usamos solo casos con consentimiento del paciente y evitamos prometer que todos obtendrán el mismo resultado. Mostrar es legítimo; garantizar resultado no lo es. Te ayudamos a montar la galería del lado seguro de esa línea.' },
          { q: '¿El paciente puede reservar la valoración en línea?', a: 'Sí. Integramos un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> para que agende su valoración según tu disponibilidad real, con recordatorio automático que reduce las ausencias, que en clínicas cuestan caro.' },
          { q: '¿Qué diferencia hay con la web de un spa?', a: 'El spa vende bienestar y se elige por experiencia y portafolio; la clínica estética vende un procedimiento médico y se elige por resultados, credenciales y seguridad. La estructura, el tono y las pruebas de confianza cambian de raíz, aunque ambas reserven en línea.' },
          { q: '¿Sirve para un médico estético que trabaja solo, no una clínica grande?', a: 'Sí, y a menudo rinde más. Un especialista que posiciona bien dos o tres tratamientos y muestra sus propios resultados compite de igual a igual con clínicas grandes en esas búsquedas, apoyado en su nombre y su mano.' },
                  { q: '¿Puedo publicar fotos de antes y después de mis pacientes?', a: 'Con consentimiento por escrito y específico para publicación en internet, distinto del consentimiento del tratamiento. Conviene que lo redacte tu asesor legal. Dejamos la galería preparada para retirar un caso en cualquier momento si el paciente cambia de opinión.' },
          { q: '¿Por qué me rechazan los anuncios de estética?', a: 'Meta y Google tratan salud y estética como categoría restringida: antes y después explícitos, promesas de resultado o textos que señalan una condición del usuario se rechazan. Por eso conviene no depender solo de la pauta: el tráfico orgánico de tu web no se rechaza.' },
          { q: '¿Publico precios o los dejo para la consulta?', a: 'Un "desde" por procedimiento y el precio de la valoración inicial. Filtra al que nunca iba a agendar, le da seguridad al que sí, y deja el precio final donde debe estar: después de evaluar el caso.' },
          { q: '¿Conviene una página por procedimiento?', a: 'Sí, al menos para los cuatro o cinco de mayor margen. El paciente de estética busca el procedimiento por su nombre, no la clínica, y una lista de viñetas no compite en esas búsquedas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Sistemas de Reservas' },
          { slug: 'industrias/diseno-web-belleza-spa-panama', label: 'Web para Belleza y Spas' },
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Instagram Ads' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu clínica estética', wa: 'Hola, quiero cotizar la web de una clínica estética con reserva de valoración.' },
  },

  /* ---------- VETERINARIAS ---------- */
  {
    slug: 'industrias/diseno-web-veterinarias-panama',
    parent,
    title: 'Diseño Web para Veterinarias en Panamá | Clínicas de Mascotas',
    description: 'Diseño web para veterinarias en Panamá: citas en línea, servicios claros, recordatorios de vacunas y la confianza que busca quien cuida a un miembro más de la familia.',
    h1: 'Diseño web para veterinarias',
    breadcrumb: 'Veterinarias',
    heroImage: { src: '/images/industrias/diseno-web-veterinarias-panama.jpg', alt: 'Veterinaria revisando a un perro durante una consulta en la clínica' },
    service: { type: 'Diseño web para veterinarias' },
    lead: [
      'Para tu cliente la mascota no es un animal: es de la familia. Elige veterinaria como elegiría pediatra, y la web es donde decide si te confía a su perro o a su gato.',
      'La veterinaria vive de dos cosas: la urgencia (mi mascota está mal, ¿dónde la llevo ya?) y la relación de años (vacunas, controles, la misma clínica de siempre). La web tiene que servir a ambas: dar respuesta inmediata al que busca con angustia y hacer fácil la cita y el recordatorio al cliente fiel. La que solo pone una dirección y un teléfono pierde al primero y descuida al segundo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una veterinaria en Panamá',
        intro: 'Mitad respuesta rápida para la urgencia, mitad relación de confianza para el cliente de años.',
        items: [
          'Servicios claros por área (consulta, cirugía, vacunación, peluquería, laboratorio)',
          'Cita en línea según la disponibilidad real de la clínica',
          'Horario, ubicación y si atienden urgencias, visible de inmediato',
          'Recordatorios de vacunas y controles para el cliente de años',
          'WhatsApp directo para la consulta angustiada de "¿la traigo ya?"',
          'Perfil del equipo veterinario que transmita cariño y capacidad',
          'Contenido útil de cuidado (desparasitación, alimentación, síntomas de alarma)',
          'Ficha por servicio especial si ofreces algo distintivo (exóticos, hospitalización)',
        ],
      },
      {
        type: 'prose',
        h2: 'La mascota es familia: la web tiene que tratarla así',
        paragraphs: [
          'Quien busca veterinaria no busca un proveedor: busca a alguien en quien confiar a un miembro de su familia. Ese detalle emocional cambia todo el diseño. El tono no puede ser frío ni clínico como el de un taller; tiene que transmitir el mismo cariño con el que el dueño trata a su mascota. Las fotos del equipo, la forma de hablar de los servicios y hasta los colores dicen, antes que cualquier texto, "aquí van a cuidar a tu perro como tú lo cuidas".',
          'Al mismo tiempo, hay una urgencia real que atender. Buena parte de las búsquedas de veterinaria llegan con angustia: la mascota está decaída, vomitó, se lastimó. Ese dueño no quiere leer la historia de la clínica: quiere saber en un segundo si atienden ahora, dónde quedan y cómo llegar. <strong>La web tiene que responder la urgencia sin fricción</strong> y, al mismo tiempo, cuidar la relación larga del cliente que vuelve cada año. Servir a los dos es el reto, y el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> es clave: el que busca "veterinaria cerca de mí" tiene que encontrarte a ti.',
        ],
      },
      {
        type: 'cards',
        h2: 'A quién atiende la web de tu veterinaria',
        intro: 'Distintos dueños llegan con necesidades distintas. La estructura correcta le habla a cada uno en su momento.',
        items: [
          { h3: 'El dueño con una urgencia', text: 'Su mascota está mal ahora. No lee: busca teléfono, horario, si atienden urgencias y cómo llegar ya. Se gana con información inmediata y un WhatsApp que responda rápido.' },
          { h3: 'El cliente de siempre', text: 'Vuelve cada año para vacunas y controles. Le importa reservar cómodo y que le recuerden cuándo toca. Se fideliza con la cita en línea y los recordatorios automáticos.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Citas en línea' } },
          { h3: 'El que adoptó o cambió de veterinaria', text: 'Estrena mascota o busca un mejor trato que en su clínica anterior. Investiga servicios, equipo y opiniones antes de decidir. Se cierra con una web que transmite cariño y capacidad.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de veterinaria',
        items: [
          { h3: 'Mapa de servicios y urgencias', text: 'Ordenamos tus servicios (consulta, cirugía, vacunación, peluquería, laboratorio) y decidimos qué va primero. Si atiendes urgencias, eso sube a lo más visible, porque es la búsqueda que no espera.' },
          { h3: 'Cita en línea y recordatorios', text: 'Conectamos el <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de citas</a> a tu disponibilidad real y dejamos listos los recordatorios de vacunas y controles, que traen de vuelta al cliente sin que tengas que perseguirlo.' },
          { h3: 'Tono y confianza', text: 'Escribimos y diseñamos con el cariño que el dueño espera: fotos del equipo, lenguaje cercano y la capacidad médica clara. Nada de tono frío de taller; aquí se cuida a la familia.' },
          { h3: 'Publicación y visibilidad local', text: 'Publicamos y afinamos tu presencia en <a href="/crecimiento/seo-local-google-maps-panama/">Google Maps</a>, para que quien busque "veterinaria cerca de mí" en tu zona te encuentre a ti, con horario y ubicación correctos.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Los recordatorios no son un extra: son lo que trae de vuelta al cliente',
        paragraphs: [
          'El negocio de una veterinaria no está solo en la primera visita: está en la relación de años. Un cachorro que llega para su primera vacuna debería volver toda su vida para refuerzos, desparasitación y controles. Pero el dueño ocupado olvida cuándo toca, y ahí se pierde la continuidad. El recordatorio automático (por correo o WhatsApp) resuelve justo eso: le avisa al dueño que llegó la fecha y le hace fácil reservar, sin que tu recepción tenga que llamar uno por uno.',
          'Esa mecánica convierte la web en una herramienta de fidelización, no en un folleto. Cada mascota registrada es una relación que se mantiene sola con recordatorios oportunos. <strong>Un cliente al que le recuerdas la vacuna no se va a otra clínica: se queda porque le hiciste fácil cuidar a su mascota.</strong> Y esa comodidad, sumada a la cita en línea, es lo que distingue a la veterinaria moderna de la que todavía depende del cuaderno y del teléfono que nadie contesta a mediodía.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie elige veterinaria por el precio de la consulta: la elige por confiar en quien va a atender a un miembro de su familia. La web es la primera impresión de esa confianza.',
        strong: 'la web es la primera impresión de esa confianza',
      },
            {
        type: 'prose',
        h2: 'La urgencia es a las once de la noche, y ahí se decide todo',
        paragraphs: [
          'El momento en que una veterinaria gana un cliente para toda la vida casi nunca es una consulta programada. Es un domingo por la noche, con un perro que no para de vomitar y un dueño buscando en el celular "veterinaria 24 horas Panamá" o "veterinaria de urgencia cerca".',
          'En ese momento nadie lee. Se busca un teléfono, se llama, y el que contesta se queda con el cliente. Si tu web tarda en cargar, esconde el número o no dice si atiendes urgencias, perdiste antes de empezar.',
          'Por eso lo primero que trabajamos es lo aburrido: que el teléfono esté visible sin hacer scroll y sea tocable desde el celular, que el horario de urgencias esté arriba y no en el pie, y que la ficha de <a href="/crecimiento/seo-local-google-maps-panama/">Google Business Profile</a> diga la verdad sobre si abres domingo.',
          '<strong>Y si no atiendes 24 horas, dilo igual de claro.</strong> El dueño que llega de madrugada y encuentra una web que no lo aclara se lleva una mala experiencia y una reseña; el que lo lee y va a otro lado vuelve el lunes para la consulta normal.',
        ],
      },
      {
        type: 'prose',
        h2: 'Una página por servicio, porque no es lo mismo vacunar que operar',
        paragraphs: [
          'Una veterinaria vende cosas muy distintas bajo el mismo techo: consulta, vacunación, esterilización, cirugía, hospitalización, peluquería, alimento, a veces guardería. Cada una la busca una persona distinta con una preocupación distinta, y casi todas las webs del rubro las resuelven en una lista.',
          'Quien busca "esterilización de gata precio" quiere saber cuánto cuesta y cuánto se queda internada. Quien busca "peluquería canina" quiere ver fotos y saber si atienden razas grandes. Quien busca "vacunas cachorro" quiere el esquema completo y en qué mes toca cada una. Son tres visitas distintas a tu web.',
          'Una página por servicio responde eso y compite por su propia búsqueda. Además la peluquería y el alimento son puertas de entrada baratas: el dueño llega por un baño y termina haciendo las consultas ahí. Vale la pena tratarlas como servicios de verdad y no como una nota al pie.',
          'Y publicar el esquema de vacunación con las edades es de lo que más tráfico recurrente trae, porque el dueño primerizo lo busca varias veces en los primeros meses.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que un dueño no lleve a su mascota contigo',
        intro: 'Cosas encontradas en webs de veterinarias reales. En un rubro donde el cliente decide con el corazón, cada una pesa.',
        items: [
          'No queda claro si se atienden urgencias ni en qué horario',
          'Teléfono que no se puede tocar para llamar desde el celular',
          'Fotos de banco de perritos que nunca pisaron tu clínica',
          'Sin mención de los veterinarios: nombre, idoneidad, años de práctica',
          'Nada sobre qué animales se atienden (exóticos, aves, grandes)',
          'Cero información de precios, ni siquiera de la consulta',
          'Ninguna foto del área de cirugía ni de hospitalización',
          'Sin información de cómo llegar ni dónde estacionar',
        ],
      },
      {
        type: 'prose',
        h2: 'El expediente es de la mascota, pero los datos son del dueño',
        paragraphs: [
          'Una web veterinaria suele recoger más de lo que parece: nombre y teléfono del dueño, dirección, a veces datos de pago y el historial de la mascota. El expediente clínico es del animal, pero los datos personales que lo acompañan son de una persona y caen bajo la <strong>Ley 81 de 2019 de Protección de Datos Personales</strong>.',
          'No es un tema de papeleo, son decisiones de construcción: sitio en HTTPS, formulario que explique qué se hace con lo que se escribe, y datos que no terminen en un correo personal ni en el WhatsApp del celular de alguien del equipo.',
          'Ese último punto es el más común en el rubro. El WhatsApp de la clínica suele vivir en el teléfono personal de quien atiende, con años de conversaciones, fotos de heridas y datos de clientes. Cuando esa persona se va, se va el historial completo. Un número de empresa con varios usuarios lo resuelve y de paso permite que otro atienda cuando la persona está en consulta.',
          'Montamos la parte técnica y dejamos la web preparada; <strong>el texto legal lo revisa tu asesor</strong>, que conoce tu operación.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: consultas agendadas y quién vuelve',
        paragraphs: [
          'En veterinaria el negocio no está en la primera consulta, está en la recurrencia: vacunas, desparasitación, control, peluquería. Por eso el número más importante no es cuánta gente llega, es <strong>cuánta vuelve</strong>.',
          'Lo que vale la pena medir es corto: cuántas citas se agendaron por la web, cuántas conversaciones entraron por WhatsApp, de qué servicio venía cada una, y qué porcentaje de clientes nuevos regresó dentro de los siguientes seis meses.',
          'Ese último dato conecta directo con los recordatorios automáticos. Si la recurrencia es baja, casi nunca es porque el servicio fue malo: es porque nadie le avisó al dueño que tocaba la vacuna. Se arregla con automatización, no con publicidad, y sale mucho más barato.',
          'También conviene separar las urgencias del resto, porque el cliente de urgencia llega distinto y se convierte en cliente fijo o desaparece según cómo lo trates después. Lo dejamos medido en un tablero corto; el detalle está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una veterinaria?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $950, con servicios, equipo y cita en línea. Si es una clínica pequeña que solo necesita presencia y captar por urgencia, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing</a> desde $550 puede bastar. Siempre con cotización cerrada por escrito.' },
          { q: '¿El cliente puede pedir cita en línea?', a: 'Sí. Integramos un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> conectado a tu disponibilidad real, para consulta, peluquería o control. El dueño agenda sin llamar y tú reduces las llamadas repetidas a la recepción.' },
          { q: '¿Se pueden enviar recordatorios de vacunas?', a: 'Sí, es una de las funciones que más valor da. Configuramos recordatorios automáticos de vacunas y controles por correo o WhatsApp, para que el dueño vuelva a tiempo y tú no pierdas la continuidad del cuidado.' },
          { q: '¿Cómo me encuentra quien busca una veterinaria urgente cerca?', a: 'Con SEO local. Optimizamos tu <a href="/crecimiento/seo-local-google-maps-panama/">ficha de Google Maps</a> y la web para que aparezcas en "veterinaria cerca de mí" en tu zona, con horario, si atiendes urgencias y cómo llegar, que es lo que ese dueño necesita al instante.' },
          { q: '¿Sirve si además vendo alimentos y accesorios?', a: 'Sí. Podemos sumar un catálogo o una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> para alimentos, medicamentos y accesorios, combinada con la parte de servicios clínicos. Muchas veterinarias fidelizan justo por ser también el punto de compra de confianza.' },
                  { q: '¿Debo publicar si atiendo urgencias 24 horas?', a: 'Sí, y con la misma claridad si NO las atiendes. El dueño que llega de madrugada a una web que no lo aclara se lleva una mala experiencia y una reseña. El que lo lee y va a otro lado vuelve el lunes para la consulta normal.' },
          { q: '¿Conviene una página por servicio o basta con una lista?', a: 'Una por servicio para los que más consulta generan. "Esterilización de gata", "vacunas cachorro" y "peluquería canina" son tres búsquedas de tres personas distintas, y una lista de viñetas no compite en ninguna.' },
          { q: '¿Qué hago con el WhatsApp de la clínica?', a: 'Sacarlo del celular personal de quien atiende. Un número de empresa con varios usuarios evita perder el historial cuando esa persona se va, y permite que otro conteste mientras ella está en consulta.' },
          { q: '¿Publico precios de consulta y procedimientos?', a: 'Al menos el de la consulta y un "desde" en los procedimientos más buscados, como esterilización. Es la pregunta que más llega por WhatsApp, y publicarla filtra al que nunca iba a agendar y te ahorra horas de equipo.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Citas en Línea' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu veterinaria', wa: 'Hola, quiero cotizar la web de una veterinaria con citas en línea y recordatorios.' },
  },
];
