/* SILO CRECIMIENTO: upsells recurrentes (SEO, SEO local, mantenimiento). */
import type { PageData } from '../types';

const parent = { slug: 'crecimiento', label: 'Crecimiento' };

export const crecimiento: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'crecimiento',
    title: 'Crecimiento Digital en Panamá | SEO, Google Maps y Mantenimiento',
    description: 'Servicios de crecimiento para tu web en Panamá: posicionamiento SEO, SEO local en Google Maps y mantenimiento con hosting gestionado.',
    h1: 'Tu web se lanzó. Ahora tiene que crecer.',
    breadcrumb: 'Crecimiento',
    heroImage: { src: 'https://picsum.photos/seed/crecimiento-grafico-negocio-panama/1200/675', alt: 'Gráfico de crecimiento ascendente proyectado en una pantalla' },
    lead: [
      'Publicar el sitio es el kilómetro cero. El tráfico, las posiciones y la seguridad se construyen mes a mes, con método.',
      'Estos tres servicios sostienen la inversión que ya hiciste: el SEO trae visitas que no pagas por clic, el SEO local te pone en el mapa donde busca tu vecindario, y el mantenimiento evita que el sitio envejezca hasta romperse.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Los tres motores',
        items: [
          { h3: 'SEO y posicionamiento', text: 'Contenido y autoridad para competir por las búsquedas que traen clientes, no solo visitas.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' } },
          { h3: 'SEO local y Google Maps', text: 'Aparecer en el mapa cuando buscan tu servicio cerca. Para negocios con puerta abierta, es el canal número uno.', link: { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' } },
          { h3: 'Mantenimiento y hosting', text: 'Actualizaciones, respaldos verificados y monitoreo desde $59/mes. Tu sitio no se cae ni envejece.', link: { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' } },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Necesito los tres servicios?', a: 'El mantenimiento es prácticamente obligatorio (un sitio sin actualizar termina comprometido). El SEO y el SEO local dependen de tu estrategia: si tu cliente te busca en Google, sí; si todo tu negocio entra por referidos, puedes esperar.' },
          { q: '¿Puedo contratarlos para un sitio que no hicieron ustedes?', a: 'Sí, previa auditoría técnica. Si el sitio tiene problemas de base que limitan el SEO o el mantenimiento, te lo decimos antes de facturar el primer mes.' },
          { q: '¿Hay permanencia mínima?', a: 'No. Los servicios son mensuales y cancelables. Preferimos retenerte por resultados que por contrato.' },
          { q: '¿Por dónde conviene empezar?', a: 'Casi siempre por el mantenimiento, porque protege lo que ya invertiste. Si tu negocio depende de que te encuentren en Google, arrancamos en paralelo con <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> (resultados más rápidos) y luego sumamos el <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO orgánico</a> para las búsquedas competidas.' },
          { q: '¿Reciben reportes o hay que pedirlos?', a: 'Cada servicio con componente mensual entrega un reporte que un dueño entiende: posiciones, tráfico, llamadas o estado del sitio según el caso. Nada de capturas sueltas ni jerga para justificar la factura.' },
          { q: '¿Trabajan con negocios fuera de la ciudad de Panamá?', a: 'Sí. Atendemos clientes en todo el país por WhatsApp y videollamada. Para el SEO local ajustamos la estrategia a tu zona de cobertura, sea Chitré, David, Coronado o el área metropolitana.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo arrancamos contigo',
        intro: 'Sin diagnósticos genéricos ni planes de escritorio. Primero miramos tu situación real y de ahí sale la prioridad.',
        items: [
          { h3: 'Revisamos lo que ya tienes', text: 'Tu sitio, tu ficha de Google y tu presencia actual. Detectamos qué frena el crecimiento antes de proponer nada.' },
          { h3: 'Definimos la prioridad', text: 'No todo a la vez. Ordenamos por impacto y presupuesto: qué mueve la aguja primero en tu negocio y qué puede esperar.' },
          { h3: 'Cerramos alcance por escrito', text: 'Una cotización cerrada con lo que incluye cada servicio, su precio mensual y lo que no incluye. Sin sorpresas en la factura.' },
          { h3: 'Ejecutamos y medimos', text: 'Trabajo constante mes a mes con reporte claro. Ajustamos según los números, no según corazonadas.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es cada motor',
        intro: 'No todos los negocios necesitan lo mismo. Estas son las señales de que un servicio te conviene hoy.',
        items: [
          { h3: 'Tu cliente te googlea', text: 'Si la gente busca tu servicio en Google antes de decidir, el SEO orgánico te pone en esa conversación mes a mes sin pagar por clic.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' } },
          { h3: 'Tienes puerta abierta', text: 'Restaurantes, clínicas, talleres y locales con dirección física viven del "cerca de mí". Ahí el mapa de Google es el buscador.', link: { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' } },
          { h3: 'No quieres sustos', text: 'Si tu web factura, agenda o vende, no puede caerse ni envejecer. El mantenimiento la mantiene rápida, segura y respaldada.', link: { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Crecer es sostener, no reinventar',
        paragraphs: [
          'El error más común después de lanzar una web es tratarla como un cuadro colgado: se admira un mes y se olvida. Pero una web viva compite todos los días contra la de tu competencia, que quizá sí la está trabajando. El crecimiento no es un empujón puntual, es una rutina.',
          'Por eso estos tres servicios son mensuales y no proyectos que terminan. El <strong>SEO</strong> acumula autoridad con el tiempo, el <strong>SEO local</strong> gana prominencia reseña a reseña, y el <strong>mantenimiento</strong> evita que un descuido de meses se convierta en un sitio hackeado. Todo suma cuando es constante.',
          'Si no sabes por dónde empezar, escríbenos por WhatsApp y revisamos tu caso sin compromiso. A veces la respuesta honesta es "todavía no necesitas SEO, arregla primero esto otro", y preferimos decírtelo a venderte un plan que no te va a servir. Mira también nuestros <a href="/servicios/">servicios de diseño web</a> si tu sitio aún no está a la altura.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' },
          { slug: 'blog', label: 'Blog' },
          { slug: 'servicios', label: 'Servicios de diseño web' },
        ],
      },
    ],
  },

  /* ---------- SEO ---------- */
  {
    slug: 'crecimiento/seo-posicionamiento-web-panama',
    parent,
    title: 'SEO y Posicionamiento Web en Panamá | Tráfico que Compra',
    description: 'Posicionamiento SEO en Panamá: contenido, técnica y autoridad para aparecer en Google donde busca tu cliente. Sin promesas mágicas.',
    h1: 'Posicionamiento web en Panamá',
    breadcrumb: 'SEO y Posicionamiento',
    service: { type: 'Posicionamiento SEO' },
    lead: [
      'Cada búsqueda de tu servicio en Google es un cliente decidiendo a quién contactar. El SEO define si apareces en esa conversación.',
      'Desconfía de quien garantice la primera posición: nadie controla el algoritmo. Lo que sí se controla es el método: técnica impecable, contenido que responde búsquedas reales y autoridad construida con paciencia. Eso es lo que vendemos, con reportes que un humano entiende.',
    ],
    blocks: [
      {
        type: 'steps',
        h2: 'Cómo trabajamos el SEO',
        items: [
          { h3: 'Auditoría y keywords', text: 'Qué buscan tus clientes en Panamá, qué posiciona hoy tu sitio y contra quién compites.' },
          { h3: 'Base técnica', text: 'Velocidad, indexación, datos estructurados y arquitectura. Sin esto, el contenido rema contra corriente.' },
          { h3: 'Contenido mensual', text: 'Páginas y artículos que responden búsquedas con intención de compra, no relleno.' },
          { h3: 'Medición', text: 'Posiciones, tráfico y consultas generadas. Reporte mensual sin humo.' },
        ],
      },
      {
        type: 'prose',
        h2: 'SEO o pauta: la cuenta que importa',
        paragraphs: [
          'La pauta funciona como un grifo: pagas, hay tráfico; dejas de pagar, se acaba. El SEO funciona como un activo: cada posición ganada trae visitas todos los meses sin costo por clic.',
          'La estrategia madura usa ambos: <strong>pauta para resultados inmediatos mientras el SEO construye el activo</strong>. Con los meses, las posiciones orgánicas van reemplazando presupuesto de pauta en las búsquedas que ya dominas.',
          'En Panamá la ventana sigue abierta: la mayoría de los competidores tiene webs técnicas débiles y cero estrategia de contenido. Quien haga el trabajo serio primero, se queda con las posiciones.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto tarda en verse resultado?', a: 'Las mejoras técnicas se notan en semanas; las posiciones competitivas toman de 3 a 6 meses de trabajo constante. Quien te prometa la primera página en 30 días te está vendiendo humo o técnicas que Google penaliza.' },
          { q: '¿Cuánto cuesta el SEO mensual?', a: 'Depende de la competencia de tus keywords y el volumen de contenido. Tras la auditoría inicial recibes un plan con alcance y precio fijo mensual, cancelable sin permanencia.' },
          { q: '¿Garantizan la primera posición?', a: 'No, y nadie honesto lo hace: el algoritmo no es nuestro. Garantizamos el método completo (técnica, contenido, medición) y transparencia total sobre el avance.' },
          { q: '¿Escriben el contenido ustedes?', a: 'Sí, junto a tu equipo: ustedes aportan el conocimiento del negocio, nosotros la estructura que posiciona. Cada pieza se aprueba antes de publicar.' },
          { q: '¿El SEO sirve si mi web es lenta o vieja?', a: 'Sirve poco: Google prioriza sitios rápidos y bien construidos, así que invertir en contenido sobre una base frágil es remar contra corriente. Si ese es tu caso, primero conviene un <a href="/servicios/redisenio-web-panama/">rediseño</a> o migrar a una base sólida, y de ahí el SEO rinde.' },
          { q: '¿Compito contra webs de otros países o solo de Panamá?', a: 'Para búsquedas locales ("abogado en Panamá", "clínica dental en Costa del Este") compites contra negocios panameños, y ahí la ventaja es tuya con el trabajo bien hecho. En temas más generales sí aparece contenido internacional, y por eso enfocamos las keywords donde tu negocio realmente puede ganar.' },
          { q: '¿Qué pasa con el SEO si dejo de pagarlo?', a: 'Las posiciones ya ganadas no desaparecen de un día para otro: el contenido publicado sigue trabajando. Lo que se detiene es el avance: sin contenido nuevo ni mantenimiento de autoridad, la competencia que sí sigue empujando termina pasándote con el tiempo.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué revisa nuestra auditoría SEO',
        intro: 'Antes de cobrar un solo mes te decimos en qué estás parado. Esto es lo que miramos.',
        items: [
          'Keywords reales que buscan tus clientes en Panamá y su intención de compra',
          'Posiciones actuales de tu sitio y las de tu competencia directa',
          'Velocidad de carga y experiencia en celular (donde busca la mayoría)',
          'Indexación: qué páginas ve Google y cuáles ignora',
          'Datos estructurados y etiquetas que ayudan a aparecer mejor',
          'Arquitectura de contenido y enlaces internos',
          'Estado del contenido actual: qué sirve, qué sobra y qué falta',
          'Perfil de enlaces y autoridad frente a tu sector',
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién rinde más el SEO',
        intro: 'El SEO no es para todos por igual. Estos perfiles son los que más lo aprovechan.',
        items: [
          { h3: 'Servicios profesionales', text: 'Abogados, contadores, clínicas: tu cliente investiga en Google antes de escribir. Aparecer con contenido útil genera confianza y consultas.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Web Corporativa' } },
          { h3: 'Tiendas online', text: 'Cada producto y categoría es una puerta de entrada desde Google. El SEO de ecommerce trae ventas que no pagas por clic.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' } },
          { h3: 'Negocios de barrio', text: 'Si atiendes una zona, el SEO orgánico y el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> se potencian: te encuentran por servicio y por cercanía.', link: { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' } },
        ],
      },
      {
        type: 'prose',
        h2: 'El contenido es el trabajo, no el adorno',
        paragraphs: [
          'Mucha gente cree que el SEO es "meter palabras clave" en la web y esperar. Esa época terminó hace años. Hoy Google premia el contenido que de verdad responde lo que la persona buscaba: una guía clara, una comparación honesta, una respuesta a la duda que frena la compra.',
          'Por eso cada mes producimos páginas y artículos con intención real, no relleno. <strong>Un artículo que responde bien una búsqueda concreta puede traer clientes durante años</strong>, mientras la pauta se apaga en cuanto cortas el presupuesto. Esa es la diferencia entre gastar y construir un activo.',
          'El trabajo se hace de la mano tuya: nadie conoce tu negocio como tú. Tú aportas el criterio y las respuestas que solo un experto del sector da; nosotros los convertimos en contenido que posiciona y que se lee como escrito por un humano, no por una máquina. Cuando el contenido y el <a href="/crecimiento/mantenimiento-hosting-web-panama/">mantenimiento técnico</a> van juntos, el sitio crece parejo.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie honesto te garantiza la primera posición, porque el algoritmo no es nuestro.',
        strong: 'Lo que sí garantizamos es el método completo y la verdad sobre cada avance.',
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' },
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' },
          { slug: 'blog', label: 'Blog' },
        ],
      },
    ],
    cta: { h2: 'Solicita tu auditoría SEO', wa: 'Hola, quiero una auditoría SEO de mi sitio.' },
  },

  /* ---------- SEO LOCAL ---------- */
  {
    slug: 'crecimiento/seo-local-google-maps-panama',
    parent,
    title: 'SEO Local y Google Maps en Panamá | Aparece Donde te Buscan',
    description: 'SEO local en Panamá: optimizamos tu ficha de Google, reseñas y presencia en Maps para que te encuentren cuando buscan tu servicio cerca.',
    h1: 'SEO local: aparece en el mapa',
    breadcrumb: 'SEO Local y Google Maps',
    service: { type: 'SEO local y Google Business Profile' },
    lead: [
      'Cuando alguien busca "cerca de mí", Google muestra tres negocios en el mapa. O estás en esos tres, o el cliente llegó a otro local.',
      'Para restaurantes, clínicas, talleres y todo negocio con puerta abierta, el mapa ES el buscador. La ficha de Google bien trabajada (categorías, fotos, reseñas, respuestas) compite ahí; la ficha abandonada regala los clientes del vecindario.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué trabajamos en tu presencia local',
        items: [
          'Ficha de Google Business Profile completa y verificada',
          'Categorías, servicios y atributos correctos',
          'Fotos reales del local, el equipo y el producto',
          'Estrategia de reseñas: pedirlas bien y responderlas todas',
          'Coherencia de nombre, dirección y teléfono en toda la web',
          'Página local en tu sitio conectada a la ficha',
          'Publicaciones periódicas en la ficha',
          'Reporte de llamadas, rutas y visitas generadas',
        ],
      },
      {
        type: 'prose',
        h2: 'Las reseñas son la moneda del mapa',
        paragraphs: [
          'Google ordena el mapa por relevancia, distancia y prominencia. Sobre la distancia no hay nada que hacer; la relevancia se optimiza una vez; la prominencia (reseñas, cantidad, frecuencia y respuestas) se construye cada semana.',
          'El sistema correcto hace que pedir la reseña sea parte natural del servicio: el momento justo, el enlace directo y el recordatorio. <strong>Diez reseñas nuevas al mes cambian tu posición en el mapa</strong> más que cualquier truco.',
          'Responderlas todas (las buenas y las malas) pesa doble: Google lo mide y tu próximo cliente lo lee.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta el SEO local?', a: 'La puesta a punto inicial (ficha, coherencia de datos, fotos) es un proyecto cerrado. El mantenimiento mensual (publicaciones, reseñas, reporte) es opcional. Precio fijo tras revisar tu situación actual.' },
          { q: '¿Sirve si no tengo local físico?', a: 'Sí, con matices: Google permite negocios de área de servicio (a domicilio). Si tu negocio es 100% digital sin zona de cobertura, el <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO orgánico</a> es tu herramienta, no el mapa.' },
          { q: 'Mi ficha tiene datos viejos y no puedo entrar. ¿Ayudan?', a: 'Sí. Recuperamos el acceso o reclamamos la ficha (es un caso común) y luego la ponemos a punto.' },
          { q: '¿Cada cuánto hay que pedir reseñas?', a: 'De forma constante, no en tandas. Un negocio que junta veinte reseñas en una semana y luego nada durante meses se ve raro ante Google y ante el cliente. Lo que funciona es un flujo natural: pedir la reseña en el momento justo del servicio, cada semana, con el enlace directo listo.' },
          { q: '¿Puedo tener varias fichas si tengo varias sucursales?', a: 'Sí, y debes: cada local con dirección física propia lleva su ficha de Google Business Profile, con sus fotos, horario y reseñas. Las trabajamos por separado para que cada sucursal aparezca en el mapa de su zona.' },
          { q: '¿Qué hago con una reseña falsa o injusta?', a: 'Primero se responde con calma y profesionalismo, porque tu próximo cliente la va a leer. Si viola las políticas de Google (spam, competencia, contenido ofensivo) se puede reportar para que la revisen, aunque no siempre la quitan. Nunca conviene ignorarla ni contestar a la defensiva.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo ponemos tu negocio en el mapa',
        intro: 'La presencia local se construye por orden. Saltarse pasos es lo que deja fichas a medias que no posicionan.',
        items: [
          { h3: 'Reclamamos y verificamos la ficha', text: 'Recuperamos el acceso o creamos la ficha desde cero y completamos la verificación de Google, el paso que muchos dejan a medias.' },
          { h3: 'La llenamos completa y correcta', text: 'Categorías, servicios, horario, atributos, fotos reales del local y el equipo. Una ficha completa pesa más que una vacía en el orden del mapa.' },
          { h3: 'Alineamos tus datos en toda la web', text: 'Nombre, dirección y teléfono idénticos en tu sitio, redes y directorios. La incoherencia confunde a Google y te baja.' },
          { h3: 'Activamos reseñas y publicaciones', text: 'Montamos el flujo para pedir reseñas y las respondemos todas, más publicaciones periódicas que mantienen la ficha viva.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Negocios donde el mapa lo es todo',
        intro: 'Si tu cliente decide "cerca de mí", estás en esta lista y el SEO local es tu mejor inversión.',
        items: [
          { h3: 'Restaurantes y cafés', text: 'La gente busca dónde comer cerca y decide por fotos y reseñas en segundos. Una ficha cuidada llena mesas.', link: { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' } },
          { h3: 'Clínicas y consultorios', text: 'Pacientes buscan por especialidad y cercanía. Reseñas y datos claros en el mapa generan la primera cita.', link: { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' } },
          { h3: 'Servicios a domicilio', text: 'Aunque no tengas local, Google permite negocios de área de servicio. Definimos tu zona y apareces donde atiendes.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO Orgánico' } },
        ],
      },
      {
        type: 'prose',
        h2: 'El mapa premia al que aparece completo',
        paragraphs: [
          'Piensa en cómo buscas tú: escribes "ferretería cerca" y de los tres negocios que salen, entras al que tiene fotos reales, horario claro y decenas de reseñas respondidas. La ficha abandonada, con una foto borrosa y sin horario, ni la consideras. Tu cliente hace exactamente lo mismo con tu negocio.',
          'Por eso la puesta a punto no es "llenar campos" sino construir la impresión que decide la visita. <strong>Cada foto, cada reseña respondida y cada dato correcto empuja tu ficha hacia esos tres lugares del mapa</strong> donde ocurre casi todo el clic. Fuera de ahí, la competencia se lleva a tu vecindario.',
          'El trabajo de fondo es la coherencia y la constancia: datos alineados en toda tu web, publicaciones vivas y un flujo de reseñas que no se detiene. Conectamos la ficha con una página local en tu <a href="/servicios/">sitio</a> para que ambos se refuercen, y complementamos con <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO orgánico</a> cuando tu negocio también compite por búsquedas más amplias.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
        ],
      },
    ],
    cta: { h2: 'Ponte en el mapa', wa: 'Hola, quiero mejorar mi presencia en Google Maps.' },
  },

  /* ---------- MANTENIMIENTO ---------- */
  {
    slug: 'crecimiento/mantenimiento-hosting-web-panama',
    parent,
    title: 'Mantenimiento Web y Hosting en Panamá | desde $59/mes',
    description: 'Mantenimiento web y hosting gestionado en Panamá: actualizaciones, respaldos verificados, monitoreo y soporte desde $59 al mes.',
    h1: 'Mantenimiento web y hosting gestionado',
    breadcrumb: 'Mantenimiento y Hosting',
    service: { type: 'Mantenimiento web y hosting gestionado' },
    lead: [
      'Un sitio web es software conectado a internet: sin mantenimiento envejece, se vuelve lento y termina comprometido.',
      'Los ataques no eligen empresas grandes: son robots que escanean internet buscando sitios sin actualizar. Un año sin mantenimiento convierte tu web en un objetivo fácil, y recuperar un sitio hackeado (y el posicionamiento que Google le quita) cuesta mucho más que prevenirlo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye desde $59/mes',
        items: [
          'Actualizaciones de seguridad del sitio y sus componentes',
          'Respaldos automáticos con restauración verificada',
          'Monitoreo de caídas con alerta inmediata',
          'Hosting cloud con recursos dedicados',
          'Certificado SSL con renovación automática',
          'Ajustes menores de contenido (textos e imágenes)',
          'Revisión periódica de velocidad',
          'Reporte mensual del estado del sitio',
        ],
      },
      {
        type: 'extras',
        h2: 'Hosting y servicios adicionales',
        intro: 'El hosting depende del proyecto y hay servicios que se cotizan aparte. Aquí está todo claro, desde el inicio.',
      },
      {
        type: 'prose',
        h2: 'Respaldos que sí restauran',
        paragraphs: [
          'La palabra "backup" aparece en todos los planes de hosting baratos. La pregunta correcta es otra: ¿alguien ha probado restaurarlo? Un respaldo nunca verificado es una suposición, y lo descubres el peor día posible.',
          'Nosotros probamos restauraciones periódicamente y conservamos varias versiones: si un problema pasó desapercibido dos semanas, el respaldo de ayer ya lo incluye. <strong>Poder volver más atrás es lo que salva el sitio.</strong>',
          'La infraestructura anual (dominio, hosting y SSL) más el mantenimiento mensual cubren todo lo que tu web necesita para operar sin sustos. Y el dominio queda a tu nombre, siempre.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué cuenta como "ajuste menor"?', a: 'Cambiar textos, reemplazar imágenes, actualizar datos de contacto, publicar una entrada. Páginas nuevas o funciones se cotizan aparte, y te lo decimos antes, no en la factura.' },
          { q: '¿Es obligatorio contratarlo con ustedes?', a: 'No. Puedes encargarte tú o tu equipo técnico. Lo innegociable es que alguien lo haga: el sitio abandonado termina comprometido, y Google penaliza sitios hackeados.' },
          { q: '¿Cubren sitios que no construyeron ustedes?', a: 'Sí, previa auditoría. Si el sitio ya está comprometido o su base es frágil, primero hay que sanearlo (ver <a href="/servicios/redisenio-web-panama/">rediseño</a>).' },
          { q: '¿Qué pasa si mi sitio se cae un domingo?', a: 'El monitoreo nos alerta automáticamente, casi siempre antes de que lo notes. Restauramos desde el respaldo o corregimos el origen, según la causa.' },
          { q: 'Mi sitio funciona bien. ¿Para qué pago mantenimiento?', a: 'Precisamente porque funciona bien hoy. El mantenimiento es como el cambio de aceite del carro: no lo notas hasta que dejas de hacerlo. Los componentes de tu web reciben parches de seguridad todo el tiempo, y un sitio sin actualizar durante meses se vuelve el objetivo fácil que los robots de ataque buscan.' },
          { q: '¿El hosting está incluido o se paga aparte?', a: 'La infraestructura anual (dominio, hosting y SSL) se cotiza según tu proyecto y va por separado del mantenimiento mensual desde $59. Te lo mostramos todo desglosado desde el inicio, con cotización cerrada por escrito. El dominio siempre queda a tu nombre.' },
          { q: '¿Y si mi sitio ya fue hackeado?', a: 'Primero hay que sanearlo: limpiar el código malicioso, cerrar la puerta por donde entraron y pedir a Google que lo revise si te marcó como inseguro. Eso es un trabajo puntual, no mantenimiento normal. Después sí entra el plan mensual para que no vuelva a pasar. Si la base es muy frágil, a veces sale mejor un <a href="/servicios/redisenio-web-panama/">rediseño</a>.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Qué hacemos cada mes con tu sitio',
        intro: 'El mantenimiento no es esperar a que algo se rompa. Es trabajo rutinario que evita que se rompa.',
        items: [
          { h3: 'Actualizamos con respaldo previo', text: 'Antes de tocar nada, respaldamos. Luego aplicamos las actualizaciones de seguridad y verificamos que todo siga funcionando igual.' },
          { h3: 'Verificamos que el respaldo restaure', text: 'Guardar un backup no basta. Probamos restauraciones para saber que, el día malo, de verdad podemos volver atrás.' },
          { h3: 'Vigilamos velocidad y caídas', text: 'El monitoreo avisa si el sitio se cae, casi siempre antes que tú, y revisamos la velocidad para que no se degrade con el tiempo.' },
          { h3: 'Reportamos el estado real', text: 'Cada mes recibes un reporte claro: qué se actualizó, cómo está la seguridad y la velocidad, y cualquier alerta a atender.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Recuperar un sitio cuesta más que cuidarlo',
        paragraphs: [
          'Un ataque no llega porque tu negocio sea importante. Llega porque un robot escaneó millones de sitios y el tuyo tenía un componente sin actualizar. No es personal, es automático, y por eso ningún negocio es "demasiado pequeño" para que le pase.',
          'Cuando ocurre, la factura no es solo técnica. Limpiar el sitio, recuperar los datos y pedir a Google que te quite la marca de "sitio peligroso" toma tiempo, y mientras tanto <strong>pierdes el posicionamiento que tardaste meses en ganar y la confianza de quien intentó entrar y vio una alerta roja</strong>. Todo eso cuesta mucho más que el plan mensual que lo habría evitado.',
          'El mantenimiento es la parte aburrida del crecimiento, la que nadie presume, y por eso es la más fácil de descuidar. Pero es la base sobre la que se sostiene todo lo demás: no tiene sentido invertir en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a> para traer visitas a un sitio que un día amanece caído o comprometido.',
        ],
      },
      {
        type: 'statement',
        text: 'Un respaldo que nadie ha probado restaurar no es un respaldo, es una suposición que descubres el peor día.',
        strong: 'Nosotros los probamos antes de que los necesites.',
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' },
          { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'WordPress' },
          { slug: 'blog/hosting-panama-evitar-hosting-barato', label: 'Por qué evitar el hosting barato' },
        ],
      },
    ],
    cta: { h2: 'Protege tu inversión', wa: 'Hola, quiero el plan de mantenimiento web.' },
  },
];
