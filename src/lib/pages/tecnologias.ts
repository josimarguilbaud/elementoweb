/* SILO TECNOLOGÍAS: cómo lo construimos. Vista técnica del servicio. */
import type { PageData } from '../types';

const parent = { slug: 'tecnologias', label: 'Tecnologías' };

export const tecnologias: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'tecnologias',
    title: 'Tecnologías de Desarrollo Web | WordPress, Shopify y A Medida',
    description: 'La tecnología correcta según tu objetivo: WordPress para contenido, Shopify para vender rápido, Vue y React cuando el proyecto exige código a medida.',
    h1: 'La tecnología se elige por tu objetivo',
    breadcrumb: 'Tecnologías',
    heroImage: { src: 'https://picsum.photos/seed/desarrollador-codigo-panama/1200/675', alt: 'Desarrollador trabajando en código frente a varios monitores' },
    lead: [
      'WordPress, Shopify o código a medida: cada uno gana en un escenario distinto. Elegimos por tu operación, no por nuestra comodidad.',
      'Una agencia que solo domina una herramienta te recomendará siempre esa herramienta. Nosotros operamos las tres a diario (y nuestros propios productos SaaS corren sobre stack a medida), así que la recomendación sale del caso, no del catálogo.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Tres caminos, un criterio',
        items: [
          { h3: 'WordPress', text: 'Cuando tu equipo publica contenido con frecuencia y necesita autonomía total. Temas propios, sin constructores pesados.', link: { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web WordPress' } },
          { h3: 'Shopify', text: 'Cuando quieres vender rápido sin administrar servidores. La plataforma se encarga de la infraestructura; nosotros de que convierta.', link: { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Diseño web Shopify' } },
          { h3: 'A medida con Vue y React', text: 'Cuando el rendimiento, las integraciones o el producto mismo exigen código propio. El mismo stack de nuestros SaaS.', link: { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo decidimos',
        paragraphs: [
          'Tres preguntas definen la tecnología. Primera: <strong>¿quién editará el contenido y con qué frecuencia?</strong> Si tu equipo publica cada semana, el panel de WordPress paga su peso en oro. Si el sitio cambia dos veces al año, hay opciones más rápidas.',
          'Segunda: <strong>¿qué integraciones necesita tu operación?</strong> Inventario, facturación, CRM, reservas. Cada plataforma integra distinto, y forzar una integración contra la corriente sale caro para siempre.',
          'Tercera: <strong>¿cuánto pesa la velocidad en tu negocio?</strong> Para una tienda o un sitio que recibe pauta, cada segundo de carga es dinero. Ahí el desarrollo a medida con generación estática no tiene rival.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué tecnología es más barata?', a: 'WordPress suele tener el menor costo inicial; Shopify cobra suscripción mensual pero elimina el mantenimiento de infraestructura; a medida cuesta más al inicio y rinde más a escala. El barato de verdad es el que se ajusta a tu operación: cambiar de plataforma a mitad de camino es lo caro.' },
          { q: '¿Puedo migrar de una tecnología a otra después?', a: 'Sí, y lo hacemos con frecuencia (ver <a href="/servicios/redisenio-web-panama/">rediseño web</a>). Con mapa de URLs y redirecciones 301 la migración conserva tu posicionamiento.' },
          { q: '¿El código queda a mi nombre?', a: 'Siempre. Dominio, repositorio y accesos se registran a nombre de tu empresa al completar el pago. No retenemos nada como mecanismo de permanencia.' },
          { q: '¿Ustedes solo trabajan con una tecnología?', a: 'No. Operamos WordPress, Shopify y stack a medida (Vue, React, Laravel) a diario, y nuestros propios <a href="/saas/">productos SaaS</a> corren sobre código propio. Por eso la recomendación sale de tu caso y no del catálogo: no ganamos nada empujándote a la herramienta que más nos conviene.' },
          { q: '¿Qué tecnología posiciona mejor en Google?', a: 'Ninguna gana por sí sola: Google mira velocidad, estructura y contenido, no la plataforma. Las tres pueden posicionar bien si el SEO técnico está bien hecho. Lo que hunde el ranking es un sitio pesado, sin <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a> ni contenido, en cualquier tecnología.' },
          { q: '¿Cuánto tardan en decidir qué tecnología usar?', a: 'Una sola conversación de diagnóstico suele bastar. Revisamos quién edita el contenido, qué integraciones necesitas y cuánto pesa la velocidad en tu negocio. Con eso sale la recomendación y una cotización cerrada por escrito antes de empezar.' },
          { q: '¿Cuánto cuesta según la tecnología que elijamos en Panamá?', a: 'La tecnología casi no mueve el precio: lo mueve el alcance. Una landing va desde $550, un sitio PYME de 8 a 12 páginas desde $950, una tienda desde $1,500 y un proyecto a medida desde $2,900. Lo que sí cambia con la tecnología es el costo de vivir con ella: WordPress pide mantenimiento constante, Shopify cobra su mensualidad, y un sitio a medida casi no pide nada. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO importa qué tecnología uses?', a: 'Cuando el sitio es chico y estático. Para una landing de una página, discutir WordPress contra React es perder tiempo: cualquiera sirve y el resultado se decide en el contenido y en la velocidad. En Panamá pesa más otra cosa: que cargue rápido con datos móviles y que se pueda pagar y escribir por WhatsApp. La decisión pesa cuando hay catálogo, usuarios, integraciones o alguien de tu equipo publicando cada semana.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo elegimos la tecnología de tu proyecto',
        intro: 'No hay corazonada ni preferencia de agencia. Es un proceso corto y en orden.',
        items: [
          { h3: '1. Diagnóstico de tu operación', text: 'Escuchamos cómo trabajas hoy: quién publica, qué vendes, con qué sistemas te toca integrar. La tecnología correcta se deduce de tu día a día, no de una moda.' },
          { h3: '2. Prueba de las tres preguntas', text: 'Aplicamos el criterio de edición, integraciones y velocidad. Si dos apuntan a la misma plataforma, la decisión está clara; si compiten, te explicamos el intercambio.' },
          { h3: '3. Recomendación por escrito', text: 'Recibes la tecnología propuesta con la razón concreta detrás y una cotización cerrada por escrito antes de empezar. Nada de sorpresas a mitad del proyecto.' },
          { h3: '4. Construcción y entrega a tu nombre', text: 'Desarrollamos, capacitamos a tu equipo y te entregamos dominio, accesos y repositorio a nombre de tu empresa. Coordinamos todo por WhatsApp y el pago admite Yappy.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Casos típicos y qué elegimos',
        intro: 'Ejemplos reales de cómo cae la decisión según el negocio.',
        items: [
          { h3: 'Empresa que publica seguido', text: 'Un despacho, una revista o una marca con blog activo necesita autonomía para publicar sin depender de nadie. Ahí WordPress con tema propio gana.', link: { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Ver WordPress' } },
          { h3: 'Marca que quiere vender ya', text: 'Catálogo claro, pagos con tarjeta y Yappy, envíos locales. Si no quieres administrar servidores, Shopify te pone a vender rápido.', link: { slug: 'tecnologias/diseno-web-shopify-panama', label: 'Ver Shopify' } },
          { h3: 'Producto o portal propio', text: 'Cuando tu operación vive en hojas de cálculo o tu producto ES la aplicación, la plantilla se queda corta y toca código a medida.', link: { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Ver a medida' } },
        ],
      },
      {
        type: 'statement',
        text: 'La mejor tecnología no es la más nueva ni la más popular: es la que tu equipo puede operar sin nosotros el día que ya no estemos.',
        strong: 'la que tu equipo puede operar sin nosotros',
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios', label: 'Servicios de diseño web' },
          { slug: 'funcionalidades', label: 'Funcionalidades' },
          { slug: 'blog/diferencia-wordpress-shopify-diseno-web', label: 'WordPress vs Shopify' },
          { slug: 'blog/tendencias-de-diseno-web-2026-panama', label: 'Tendencias de diseño 2026' },
        ],
      },
    ],
  },

  /* ---------- WORDPRESS ---------- */
  {
    slug: 'tecnologias/diseno-web-wordpress-panama',
    parent,
    title: 'Diseño Web WordPress en Panamá | Temas Propios, sin Plantillas',
    description: 'Diseño web en WordPress para empresas en Panamá: temas desarrollados a medida, sin plantillas compradas ni constructores lentos. Rápido y autoadministrable.',
    h1: 'Diseño web en WordPress, sin plantillas',
    breadcrumb: 'WordPress',
    service: { type: 'Diseño y desarrollo web en WordPress' },
    lead: [
      'WordPress no es sinónimo de lento. Lo lento es la plantilla comprada con veinte plugins encima. Nosotros construimos el tema desde cero para tu marca.',
      'La razón para elegir WordPress sigue siendo imbatible: su panel es el más fácil de usar del mercado, y tu equipo publica sin abrir un ticket. La razón para huirle (sitios pesados que se rompen con cada actualización) no es culpa de WordPress: es culpa de cómo se implementa.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye un WordPress nuestro',
        items: [
          'Tema propio desarrollado a medida para tu diseño',
          'Cero constructores visuales que inflan el código',
          'Solo los plugins indispensables, auditados',
          'Campos personalizados por tipo de contenido',
          'Optimización de imágenes y carga diferida',
          'SEO técnico: metadatos, schema y sitemap',
          'Blog listo para posicionamiento orgánico',
          'Capacitación grabada para tu equipo',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué no usamos constructores visuales',
        paragraphs: [
          'Elementor y similares generan hasta diez veces más código del necesario para cada sección. Ese peso se paga en velocidad de carga, y la velocidad se paga en posiciones de Google y en conversiones perdidas.',
          'Peor aún: el constructor te ata. Si algún día lo desinstalas, el diseño desaparece con él. <strong>Un tema a medida no tiene esa hipoteca</strong>: es tuyo, es liviano y cualquier desarrollador competente puede mantenerlo.',
          'El panel que recibe tu equipo queda limpio: los campos exactos de tu contenido, sin cien opciones que nadie pidió.',
        ],
      },
            {
        type: 'prose',
        h2: 'Cuándo NO conviene WordPress',
        paragraphs: [
          'WordPress mueve una porción enorme de la web y eso no lo convierte en la respuesta correcta para todo.',
          'No conviene cuando el sitio es pequeño y no va a cambiar: una landing o un sitio de cinco páginas estáticas funciona más rápido y sin mantenimiento si se construye con tecnología estática. Poner WordPress ahí es asumir actualizaciones mensuales de por vida a cambio de nada.',
          'Tampoco cuando nadie va a mantenerlo. WordPress necesita cuidado continuo, y un WordPress abandonado no se queda quieto: se vuelve un problema de seguridad. Si no hay presupuesto ni intención de mantenimiento, es mejor otra tecnología.',
          'Y no conviene cuando el proyecto es realmente una aplicación —lógica compleja, cálculos, roles de usuario, integraciones profundas—. Forzar eso dentro de WordPress con plugins produce algo frágil que cuesta más mantener que un <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">desarrollo a medida</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cada plugin es una deuda que se paga todos los meses',
        paragraphs: [
          'Un plugin resuelve un problema hoy y crea una obligación permanente: actualizarlo, verificar que no rompa nada al actualizarse, y confiar en que su autor siga manteniéndolo dentro de tres años.',
          'El problema no es tener plugins, es tener treinta. Cada uno multiplica las combinaciones posibles de fallo, y llega un punto donde nadie se atreve a actualizar por miedo a romper el sitio. Ese es exactamente el estado en el que un sitio termina hackeado.',
          'También pesa en velocidad: muchos plugins cargan sus propios archivos en todas las páginas, incluso donde no se usan. Un sitio con demasiados plugins es lento por acumulación, no por una causa concreta que se pueda arreglar.',
          '<strong>La regla que aplicamos es preguntar si vale su costo anual de mantenimiento</strong>, no si resuelve el problema. Muchos se sustituyen por unas líneas de código que no hay que actualizar nunca.',
        ],
      },
      {
        type: 'prose',
        h2: 'Por dónde entran los sitios de WordPress que se caen',
        paragraphs: [
          'Casi ninguna intrusión en WordPress es un ataque dirigido. Son sistemas automáticos que recorren internet probando lo mismo en millones de sitios, y entran por unas pocas puertas conocidas.',
          'La primera es un plugin o tema desactualizado con una vulnerabilidad ya publicada. La segunda son contraseñas débiles en la administración, probadas por fuerza bruta. La tercera son temas o plugins descargados de sitios que regalan versiones de pago, que muchas veces vienen con código malicioso incluido: es la forma más eficiente de infectarse a propósito.',
          'Las defensas son proporcionalmente simples: actualizar, contraseñas fuertes con doble factor, limitar los intentos de acceso, no instalar nada de origen dudoso y tener respaldo fuera del servidor.',
          '<strong>Nada de eso es sofisticado y por eso funciona:</strong> los sistemas automáticos buscan lo fácil, y un sitio que cumple lo básico deja de ser lo fácil.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en un WordPress',
        paragraphs: [
          'Además del tráfico y los contactos, un WordPress tiene métricas de salud que conviene vigilar porque avisan antes del problema.',
          'La velocidad en celular es la primera, y hay que medirla cada cierto tiempo, no solo al lanzar. Los sitios de WordPress se degradan: se suman plugins, se cargan imágenes sin optimizar, y un sitio que arrancó rápido puede estar lento un año después sin que nadie lo notara.',
          'La segunda es el número de plugins activos y cuántos están desactualizados. Es el mejor indicador anticipado de riesgo que existe en esta plataforma.',
          'Y los intentos de acceso fallidos. Un pico repentino indica que alguien está probando entrar, y detectarlo a tiempo permite cerrar la puerta antes de que la encuentren abierta.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta un sitio WordPress en Panamá?', a: 'Los rangos de <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> aplican: desde $950 con hasta 6 páginas. WordPress es la tecnología, no un servicio aparte.' },
          { q: '¿WordPress es seguro?', a: 'Sí, mantenido correctamente. Los sitios comprometidos son casi siempre instalaciones abandonadas con plugins sin actualizar. Nuestro <a href="/crecimiento/mantenimiento-hosting-web-panama/">plan de mantenimiento</a> cubre actualizaciones, respaldos verificados y monitoreo.' },
          { q: '¿Puedo seguir usando mi WordPress actual?', a: 'Si la base es sana, sí: lo auditamos y modernizamos encima. Si está construido sobre una plantilla pesada, suele ser más barato reconstruir el tema que pelear contra él. La auditoría lo determina.' },
          { q: '¿WordPress sirve para SEO en Panamá?', a: 'Muy bien, si se implementa liviano. WordPress da control total sobre metadatos, estructura de URLs, schema y un blog para contenido orgánico. Sobre esa base montamos tu <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a> y, si atiendes clientes por zona, el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local en Google Maps</a>.' },
          { q: '¿Puedo administrar el sitio yo mismo sin saber programar?', a: 'Ese es justo el punto fuerte de WordPress. Dejamos el panel limpio, con los campos exactos de tu contenido, y te entregamos una capacitación grabada. Publicas, editas y subes fotos sin abrir un ticket ni pagarnos por cada cambio.' },
          { q: '¿Puedo vender por WhatsApp desde mi WordPress?', a: 'Sí. Sumamos botón flotante de WhatsApp, enlaces con mensaje prellenado por producto o servicio y formularios que te llegan directo al chat. Es la vía más usada para cerrar en Panamá y la dejamos lista de serie.' },
                  { q: '¿Cuándo NO conviene WordPress?', a: 'Cuando el sitio es pequeño y no va a cambiar (una estática funciona más rápido y sin mantenimiento), cuando nadie va a mantenerlo (un WordPress abandonado se vuelve un problema de seguridad), y cuando el proyecto es realmente una aplicación con lógica compleja.' },
          { q: '¿Cuántos plugins son demasiados?', a: 'El problema no es tener plugins, es tener treinta: cada uno multiplica las combinaciones de fallo hasta que nadie se atreve a actualizar por miedo a romper el sitio, que es el estado en el que se termina hackeado. La regla es preguntar si vale su costo anual de mantenimiento.' },
          { q: '¿Por qué hackean los sitios de WordPress?', a: 'Casi nunca es dirigido: son sistemas automáticos probando lo mismo en millones de sitios. Entran por plugins desactualizados con vulnerabilidad publicada, contraseñas débiles, y temas de pago descargados gratis de sitios dudosos, que suelen venir con código malicioso.' },
          { q: '¿Qué debo vigilar en mi WordPress?', a: 'La velocidad en celular medida cada cierto tiempo, porque los sitios se degradan al sumar plugins e imágenes sin optimizar. El número de plugins desactualizados, que es el mejor indicador anticipado de riesgo. Y los intentos de acceso fallidos.' },
          { q: '¿Cuánto cuesta mantener un WordPress al año?', a: 'La construcción entra en los mismos rangos del sitio: desde $950 para un corporativo de 8 a 12 páginas. Lo que la gente subestima es lo de después: hosting desde $225 al año y mantenimiento desde $59 al mes, que en WordPress no es opcional. Un WordPress sin actualizar termina comprometido, y limpiarlo cuesta más que el año entero de mantenimiento. Los precios no incluyen ITBMS (7%).' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo construimos tu WordPress',
        intro: 'Sin plantillas compradas y sin constructores pesados. Este es el orden.',
        items: [
          { h3: '1. Diseño primero, código después', text: 'Definimos el diseño de tu marca antes de tocar WordPress. El tema se construye para ese diseño, no al revés forzando una plantilla ajena.' },
          { h3: '2. Tema propio y liviano', text: 'Programamos el tema a medida, con solo los plugins indispensables y auditados. Cero código inflado que arrastre la velocidad de carga.' },
          { h3: '3. Panel a la medida de tu equipo', text: 'Creamos campos personalizados por tipo de contenido para que publicar sea llenar casillas claras, no pelear con un editor de mil opciones.' },
          { h3: '4. SEO técnico y capacitación', text: 'Dejamos metadatos, schema, sitemap y blog listos para posicionar, y te entregamos una capacitación grabada. El sitio queda a tu nombre.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién encaja WordPress',
        intro: 'No es para todos. Estos son los perfiles donde rinde de verdad.',
        items: [
          { h3: 'Equipos que publican seguido', text: 'Si tu empresa saca noticias, artículos o novedades cada semana, la autonomía del panel de WordPress paga su peso en oro.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Web corporativa' } },
          { h3: 'Marcas que quieren blog', text: 'El contenido orgánico es de los canales más rentables a largo plazo. WordPress trae el blog listo y se lleva bien con una estrategia de SEO.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO' } },
          { h3: 'Negocios que crecerán por etapas', text: 'Empiezas con una web sólida y luego sumas reservas, pagos o un chatbot sin reconstruir todo desde cero.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' } },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' },
          { slug: 'blog/diferencia-wordpress-shopify-diseno-web', label: 'WordPress vs Shopify' },
        ],
      },
    ],
  },

  /* ---------- SHOPIFY ---------- */
  {
    slug: 'tecnologias/diseno-web-shopify-panama',
    parent,
    title: 'Diseño Web Shopify en Panamá | Tiendas Listas para Vender',
    description: 'Diseño de tiendas Shopify en Panamá: catálogo, pagos y envíos configurados para el mercado local, con fichas de producto que convierten.',
    h1: 'Diseño web en Shopify',
    breadcrumb: 'Shopify',
    service: { type: 'Diseño de tiendas Shopify' },
    lead: [
      'Shopify resuelve la infraestructura: servidores, seguridad y pagos certificados. Nuestro trabajo es que tu tienda convierta y funcione para Panamá.',
      'La trampa de Shopify es creer que basta con activar una plantilla. Una tienda que vende necesita fichas de producto pensadas para decidir, envíos que cuadren con la logística local y el pago que tu cliente panameño realmente usa. Eso no viene en la caja.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué configuramos en tu Shopify',
        items: [
          'Diseño de tienda alineado a tu marca',
          'Carga y estructura del catálogo completo',
          'Fichas de producto orientadas a conversión',
          'Pagos: tarjetas y alternativas locales',
          'Zonas de envío, tarifas e ITBMS',
          'Correos automáticos de pedido y seguimiento',
          'Recuperación de carritos abandonados',
          'Analítica de ventas y píxeles de pauta',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo Shopify es la decisión correcta',
        paragraphs: [
          'Shopify gana cuando el negocio es vender productos y no quieres que la tecnología sea tu problema. La plataforma absorbe servidores, certificados, seguridad de pagos y actualizaciones. Tú vendes; ella sostiene.',
          'El intercambio es una suscripción mensual y trabajar dentro de su modelo. Para catálogos estándar es un trato claramente favorable. Cuando necesitas reglas de negocio muy particulares o integración profunda con sistemas internos, evaluamos WooCommerce o <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">a medida</a>.',
          'Y sí: <strong>Shopify funciona en Panamá</strong>, con dólares, envíos locales e internacionales, y pasarelas compatibles con bancos panameños. Configurarlo bien es nuestro trabajo.',
        ],
      },
            {
        type: 'prose',
        h2: 'El costo real de Shopify no es la mensualidad',
        paragraphs: [
          'Comparar Shopify con otras plataformas por su precio mensual es el error de cálculo más común, porque la mensualidad es solo una de tres partidas.',
          'La segunda es la <strong>comisión por transacción</strong>. Shopify cobra un porcentaje de cada venta si no usas su propia pasarela de pago, y en Panamá, donde se suele necesitar una pasarela local o Yappy, esa comisión aplica. Es un costo que crece exactamente al ritmo de tu facturación.',
          'La tercera son las <strong>aplicaciones</strong>. Shopify base no hace todo, y cada función extra —reseñas, suscripciones, envíos avanzados, informes— suele ser una app con su propia mensualidad. Una tienda con seis apps puede duplicar su costo mensual sin darse cuenta.',
          '<strong>La cuenta correcta es mensualidad + comisión estimada sobre tu facturación + apps.</strong> Con volumen bajo Shopify suele salir a cuenta; con volumen alto y margen ajustado, la comisión empieza a pesar más que todo lo demás junto.',
        ],
      },
      {
        type: 'prose',
        h2: 'Lo que hay que resolver para vender en Panamá desde Shopify',
        paragraphs: [
          'Shopify está pensado para mercados donde todo el mundo paga con tarjeta y los envíos los resuelve un operador nacional. Panamá no funciona exactamente así, y esas diferencias hay que configurarlas a mano.',
          'El pago es la primera. Hay que resolver cómo se cobra con <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy</a>, que para buena parte del país es la forma natural de pagar, además de la tarjeta. Sin esa opción, una porción del mercado no completa la compra.',
          'La segunda son los impuestos: el ITBMS tiene que quedar bien configurado y mostrarse con claridad, no como una sorpresa en el último paso.',
          'Y la tercera es el envío, que en Panamá se comporta distinto dentro y fuera de la ciudad. Hay que definir zonas con costos y plazos realistas, y activar el retiro en tienda, que en la práctica funciona mejor de lo que muchos esperan.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué pasa si algún día quieres salirte',
        paragraphs: [
          'Es la pregunta que nadie hace al empezar y la que más cuesta cuando llega. Shopify es un servicio alquilado: la tienda vive en su infraestructura y funciona con su lenguaje de plantillas.',
          'Lo que sí puedes llevarte son tus datos: productos, clientes y pedidos se exportan. Lo que no se lleva es el diseño, que está construido para Shopify y hay que rehacer, ni las personalizaciones hechas con sus apps.',
          'El punto delicado son las direcciones de las páginas. Shopify impone su propia estructura de URLs, y al migrar esa estructura cambia. Sin un mapa de redirecciones bien hecho, se pierde el posicionamiento acumulado, que suele ser el activo más valioso de una tienda con años.',
          '<strong>No es un argumento contra Shopify:</strong> es un argumento para elegir a conciencia, sabiendo que la salida tiene un costo. Si el volumen y las necesidades son estables, ese costo puede no llegar nunca.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en una tienda Shopify',
        paragraphs: [
          'Shopify reporta mucho y casi todo el mundo mira lo mismo: ventas totales. Es el número que menos ayuda a decidir.',
          'Lo que dice dónde actuar es el embudo: cuántos vieron producto, cuántos agregaron al carrito, cuántos iniciaron el pago y cuántos terminaron. La caída entre iniciar el pago y terminar es la más cara de todas y casi siempre se explica por el envío o por la falta de la forma de pago que la gente esperaba.',
          'El segundo número es el costo real por venta, sumando comisión y apps. Es el que dice si la plataforma sigue siendo la correcta a tu volumen actual, y conviene recalcularlo cada año.',
          'Y el ticket promedio, que orienta si conviene trabajar en vender más por pedido en vez de conseguir más pedidos, casi siempre más barato de lograr.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una tienda Shopify?', a: 'Nuestro desarrollo parte desde <strong>$1,500</strong> según catálogo e integraciones. La suscripción de Shopify se paga aparte, directo a la plataforma.' },
          { q: '¿Puedo cobrar con Yappy en Shopify?', a: 'Sí, mediante la <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">integración del Botón de Pago Yappy</a>. Es una de las configuraciones que más pedimos en tiendas panameñas y la hacemos de serie.' },
          { q: '¿Shopify o WooCommerce?', a: 'Shopify para vender rápido sin administrar infraestructura; WooCommerce para control total y cero comisiones de plataforma. Publicamos una <a href="/blog/diferencia-wordpress-shopify-diseno-web/">comparación honesta</a> y te recomendamos según tu caso.' },
          { q: '¿Cómo cobra el ITBMS mi tienda Shopify?', a: 'Configuramos el impuesto en las zonas de envío para que el ITBMS se calcule y muestre correctamente al pagar. También dejamos las tarifas de envío por zona para que el cliente vea el total real antes de confirmar, sin sorpresas que abandonen el carrito.' },
          { q: '¿Puedo recuperar los carritos que se abandonan?', a: 'Sí. Shopify permite correos automáticos de recuperación de carrito, y los dejamos activados de serie. Recuperar una parte de esos carritos suele ser de las acciones más rentables de una tienda, porque son clientes que ya estaban por comprar.' },
          { q: '¿Mi tienda Shopify sirve para pauta en Facebook e Instagram?', a: 'Sí. Instalamos los píxeles y la analítica de ventas para que tus campañas de <a href="/marketing/facebook-instagram-ads-panama/">Facebook e Instagram Ads</a> midan compras reales. Sin ese seguimiento bien puesto, estás pautando a ciegas.' },
                  { q: '¿Cuánto cuesta Shopify al mes, aparte de nuestro trabajo?', a: 'Mensualidad más comisión por transacción más apps. La comisión aplica si no usas su propia pasarela, y en Panamá suele hacer falta una local o Yappy. Las apps se acumulan: una tienda con seis puede duplicar su costo mensual. Con volumen alto y margen ajustado, la comisión pesa más que todo lo demás.' },
          { q: '¿Qué hay que configurar para vender en Panamá?', a: 'Yappy además de la tarjeta, porque sin él una porción del mercado no completa la compra. El ITBMS bien configurado y visible, no como sorpresa al final. Y zonas de envío con costos y plazos realistas para ciudad e interior, más retiro en tienda.' },
          { q: '¿Puedo salirme de Shopify si un día quiero?', a: 'Puedes llevarte los datos —productos, clientes, pedidos— pero no el diseño ni las personalizaciones hechas con apps. Lo delicado son las URLs: Shopify impone su estructura y al migrar cambia. Sin un mapa de redirecciones se pierde el posicionamiento acumulado.' },
          { q: '¿Qué mido en mi tienda?', a: 'El embudo, no las ventas totales. La caída entre iniciar el pago y terminarlo es la más cara y casi siempre se explica por el envío o por faltar la forma de pago esperada. Y el costo real por venta sumando comisión y apps, recalculado cada año.' },
          { q: '¿Qué se paga aparte del diseño de la tienda?', a: 'El diseño y la puesta en marcha entran en el rango de E-commerce, desde $1,500. Aparte, y directo a ellos, van la mensualidad de Shopify y las comisiones de los medios de pago que actives. El pago del proyecto va 50% para arrancar, 30% al verlo funcionando en demo y 20% para publicar. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene Shopify?', a: 'Cuando tu venta no es un carrito: si cobras por cotización, por proyecto o con precios distintos por cliente, Shopify te queda apretado y peleas contra la plataforma. Tampoco si necesitas integrar tu inventario o tu ERP de una forma que la plataforma no contempla; ahí conviene un desarrollo a medida.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo dejamos tu Shopify lista para Panamá',
        intro: 'Activar una plantilla no es tener una tienda. Este es el trabajo real.',
        items: [
          { h3: '1. Marca y catálogo', text: 'Alineamos el diseño a tu marca y cargamos el catálogo completo con fichas de producto pensadas para decidir la compra, no solo para listar.' },
          { h3: '2. Pagos que usa tu cliente', text: 'Configuramos tarjetas y el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Botón de Pago Yappy</a>, la forma que el comprador panameño realmente usa. El pago que falta es la venta que se pierde.' },
          { h3: '3. Envíos, ITBMS y correos', text: 'Definimos zonas de envío, tarifas e ITBMS, y activamos los correos de pedido y seguimiento para que el cliente sepa dónde va su compra.' },
          { h3: '4. Analítica y recuperación', text: 'Dejamos píxeles de pauta, analítica de ventas y recuperación de carritos abandonados. La tienda arranca midiendo desde el primer pedido.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El error caro de tratar Shopify como algo que se activa solo',
        paragraphs: [
          'La plataforma resuelve la infraestructura, pero no decide por ti cómo se presenta un producto, qué envíos ofreces ni con qué se paga. Una tienda que salió de la caja se ve bien y vende poco, porque le falta justo lo que empuja al cliente a completar la compra.',
          'La diferencia está en detalles concretos: una ficha que responde las dudas antes de que aparezcan, el <strong>Botón de Pago Yappy</strong> visible, envíos que cuadran con la logística local y el ITBMS calculado bien. Ninguno viene configurado por defecto.',
          'Por eso cotizamos el trabajo de configuración aparte de la suscripción de Shopify, con precio cerrado por escrito antes de empezar. Pagas por que la tienda venda, no por encender un tema.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y Pasarelas' },
          { slug: 'blog/diferencia-wordpress-shopify-diseno-web', label: 'WordPress vs Shopify' },
          { slug: 'blog/como-aumentar-ventas-tienda-online-panama', label: 'Cómo vender más online' },
        ],
      },
    ],
    cta: { h2: 'Cotiza tu tienda Shopify', wa: 'Hola, quiero cotizar una tienda en Shopify.' },
  },

  /* ---------- A MEDIDA ---------- */
  {
    slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama',
    parent,
    title: 'Desarrollo Web a Medida en Panamá | Vue 3, React y Laravel',
    description: 'Desarrollo web a medida en Panamá con Vue 3, React y Laravel: el mismo stack con el que operamos nuestros propios SaaS en producción.',
    h1: 'Desarrollo web a medida',
    breadcrumb: 'A Medida (Vue / React)',
    service: { type: 'Desarrollo web a medida con Vue y React' },
    lead: [
      'Cuando la plantilla se queda corta, se programa. Plataformas, portales de clientes e integraciones con el stack que sostiene nuestros propios productos.',
      'La credencial importa: no vendemos tecnología que solo conocemos de talleres. ChatMantis, WapyCRM y Cifrao (nuestros tres SaaS) corren en producción sobre Vue, React y Laravel, con clientes reales y datos que no se pueden perder. Ese es el estándar con el que construimos lo tuyo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Cuándo necesitas código a medida',
        items: [
          'Tu operación vive en hojas de cálculo paralelas al sistema',
          'Pagas varias suscripciones que no se hablan entre sí',
          'Necesitas un portal donde tus clientes gestionen sus trámites',
          'El rendimiento del sitio es un requisito de negocio, no un deseo',
          'Las integraciones (ERP, facturación, logística) mandan',
          'Tu producto ES la aplicación, no un folleto de ella',
        ],
      },
      {
        type: 'prose',
        h2: 'Nuestro stack y por qué',
        paragraphs: [
          '<strong>Vue 3 y React</strong> en el frontend: interfaces rápidas, componentes reutilizables y estado predecible. <strong>Laravel</strong> en el backend: autenticación, permisos, colas y auditoría resueltos con un framework maduro. <strong>Docker</strong> en infraestructura: el mismo código corre igual en desarrollo y producción.',
          'Para sitios públicos usamos generación estática cuando aplica: páginas servidas como archivos, con tiempos de carga que ningún CMS tradicional alcanza. Es la misma arquitectura de este sitio.',
          'Todo se entrega documentado y con el repositorio a tu nombre. <strong>La continuidad no puede depender de nosotros</strong>: ese es el diseño, no una promesa.',
        ],
      },
            {
        type: 'prose',
        h2: 'Cuándo NO necesitas código a medida',
        paragraphs: [
          'El desarrollo a medida es la opción más cara y más lenta, y por eso conviene descartarla antes de elegirla.',
          'No lo necesitas si lo que quieres ya existe como producto. Una tienda estándar, un sitio corporativo, un blog, un sistema de reservas común: hay plataformas que hacen eso bien, y construir tu versión propia significa pagar por reinventar algo que además tendrás que mantener solo.',
          'Tampoco lo necesitas si la diferencia con lo estándar es cosmética. "Quiero que el carrito se vea distinto" no justifica un desarrollo; "necesito que el carrito calcule precios según un contrato por cliente" sí, porque eso ninguna plataforma lo hace.',
          '<strong>La pregunta que decide es si tu proceso es realmente distinto o solo te acostumbraste a hacerlo distinto.</strong> Muchas veces adaptar el proceso a una herramienta existente sale mucho más barato que construir una herramienta para el proceso.',
        ],
      },
      {
        type: 'prose',
        h2: 'El software propio no se termina: se mantiene',
        paragraphs: [
          'Es la parte que casi nadie presupuesta y la que decide si el proyecto sobrevive. Un desarrollo a medida no acaba el día que se entrega: empieza ahí.',
          'Las dependencias que usa se actualizan, y quedarse atrás demasiados años convierte una actualización sencilla en una reescritura. Los navegadores cambian. Aparecen requisitos nuevos, y cada cambio en el negocio se traduce en trabajo de desarrollo, porque no hay un proveedor que lo saque en su próxima versión.',
          'Por eso, antes de empezar, hay que responder quién va a mantener esto y con qué presupuesto anual. Si no hay respuesta, el proyecto va a funcionar dos años y después se va a volver un problema del que nadie quiere hacerse cargo.',
          '<strong>Un software a medida sin plan de mantenimiento es una deuda con fecha diferida.</strong> Y esa deuda vence siempre en el peor momento.',
        ],
      },
      {
        type: 'prose',
        h2: 'De quién es el código, y por qué preguntarlo antes',
        paragraphs: [
          'Es la pregunta más incómoda de hacerle a un proveedor y la que más problemas evita. Cuando alguien construye software para tu empresa, hay que dejar por escrito quién es dueño del resultado.',
          'Si el código es tuyo, puedes cambiar de proveedor, contratar a otro para ampliarlo o llevártelo internamente. Si es del proveedor y solo tienes licencia de uso, dependes de él para siempre, incluidos sus plazos y sus precios.',
          'Hay tres cosas concretas que conviene tener claras desde el inicio: dónde vive el código y si tienes acceso al repositorio, quién controla los servidores y los dominios, y qué documentación se entrega al final. La respuesta a la tercera suele ser "ninguna", y es lo que hace que cambiar de proveedor cueste tanto.',
          'Nosotros entregamos el código y los accesos, y documentamos. <strong>No por generosidad: porque un cliente atrapado es un cliente que se va en cuanto puede</strong>, y porque un proyecto que solo entiende quien lo escribió es frágil.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en un desarrollo a medida',
        paragraphs: [
          'Un desarrollo a medida no se mide en visitas: se mide en si resolvió el problema que lo justificó.',
          'Por eso el número que hay que definir es antes de empezar, no después: qué proceso se va a acortar, cuántas horas se van a devolver al mes, cuántos errores manuales se van a evitar. Sin esa línea base, al final no hay forma de decir si valió la pena y la discusión se vuelve una cuestión de opinión.',
          'Durante la operación, lo que se vigila es distinto: cuántos errores registra el sistema, qué funciones se usan de verdad y cuáles nadie tocó nunca. Esa segunda lista suele ser larga y es información valiosa: son las funciones que se pidieron, se pagaron y no hacían falta.',
          'Y el tiempo de respuesta ante un fallo. <strong>En software propio no hay un proveedor externo que lo resuelva</strong>, así que ese número depende enteramente del acuerdo de mantenimiento que tengas.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta un desarrollo a medida?', a: 'Desde $2,900, y de ahí sube según lo que haya que construir: integraciones con CRM, ERP, pagos o inventario, portales de cliente, multi-idioma. No hay una cifra única porque no hay dos proyectos iguales, pero sí un piso publicado y una cotización cerrada por escrito antes de arrancar. El pago va 50% al inicio, 30% al ver el sistema funcionando en demo y 20% para publicar, con 30 días de garantía por fallas técnicas. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cómo evitan que el proyecto se alargue para siempre?', a: 'Entregas funcionales: cada etapa produce algo usable que puedes evaluar. Si el alcance cambia, se cotiza aparte y tú decides. El contrato define qué incluye cada entrega.' },
          { q: '¿Qué pasa si después quiero cambiar de proveedor?', a: 'Te llevas todo: repositorio, documentación y entornos dockerizados que cualquier equipo competente puede levantar. Lo decimos en la propuesta y lo cumplimos en la entrega.' },
          { q: '¿Pueden integrar Yappy y WhatsApp en un desarrollo a medida?', a: 'Sí, y es de lo que más pedimos. Conectamos el <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Botón de Pago Yappy</a>, pasarelas de tarjeta y flujos de WhatsApp directo en tu plataforma. Al ser código propio, la integración se hace exactamente como tu operación la necesita, sin las limitaciones de un plugin genérico.' },
          { q: '¿Un sitio a medida es mejor para SEO?', a: 'Puede serlo cuando la velocidad manda: con generación estática, las páginas se sirven como archivos y cargan más rápido que cualquier CMS tradicional. Eso ayuda al <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento</a>, siempre acompañado de estructura y contenido bien trabajados.' },
          { q: '¿Puedo empezar pequeño y crecer después?', a: 'Es la vía recomendada. Dividimos el proyecto en entregas funcionales: arrancas con lo esencial en producción y sumas módulos por etapas, cada uno con su cotización cerrada por escrito. Así inviertes a medida que el proyecto prueba su valor.' },
                  { q: '¿Cuándo NO necesito desarrollo a medida?', a: 'Si lo que quieres ya existe como producto: tienda estándar, sitio corporativo, blog, reservas comunes. Y si la diferencia con lo estándar es cosmética. "Quiero que se vea distinto" no lo justifica; "necesito que calcule precios según un contrato por cliente" sí, porque eso ninguna plataforma lo hace.' },
          { q: '¿Qué costo se olvida presupuestar?', a: 'El mantenimiento. Un desarrollo no acaba al entregarse: las dependencias se actualizan, los navegadores cambian y cada cambio del negocio es trabajo de desarrollo, porque no hay proveedor que lo saque en su próxima versión. Sin plan de mantenimiento, funciona dos años y se vuelve un problema.' },
          { q: '¿De quién es el código que me desarrollan?', a: 'Hay que dejarlo por escrito antes de empezar. Si es tuyo, puedes cambiar de proveedor o ampliarlo con otro. Si solo tienes licencia de uso, dependes de él para siempre. Pregunta también dónde vive el repositorio, quién controla servidores y dominios, y qué documentación se entrega.' },
          { q: '¿Cómo mido si el desarrollo valió la pena?', a: 'Definiendo la línea base antes de empezar: qué proceso se acorta, cuántas horas se devuelven al mes, cuántos errores manuales se evitan. Sin eso, al final la discusión es de opinión. Después, qué funciones se usan de verdad: la lista de las que nadie tocó suele ser larga.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos un desarrollo a medida',
        intro: 'Sin cheques en blanco ni proyectos que no terminan nunca. Este es el método.',
        items: [
          { h3: '1. Diagnóstico sin costo', text: 'Una sesión para entender tu operación y qué debe resolver el software. De ahí sale el alcance real, no una lista de deseos sin fin.' },
          { h3: '2. Dimensionamiento y rango', text: 'Dividimos el proyecto en entregas funcionales y recibes un rango realista, con cotización cerrada por escrito por etapa antes de invertir más tiempo.' },
          { h3: '3. Entregas usables por etapa', text: 'Cada etapa produce algo que puedes probar y usar. Si el alcance cambia, se cotiza aparte y tú decides; el contrato define qué incluye cada entrega.' },
          { h3: '4. Entrega documentada y a tu nombre', text: 'Cierras con repositorio, documentación y entornos dockerizados a nombre de tu empresa. La continuidad no depende de nosotros por diseño.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué construimos a medida',
        intro: 'Cuando la plantilla se queda corta, esto es lo que programamos.',
        items: [
          { h3: 'Portales de cliente', text: 'Un espacio donde tus clientes consultan estados, suben documentos o gestionan sus trámites sin llamarte. Menos correos, más autoservicio.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas' } },
          { h3: 'Plataformas con IA', text: 'Chatbots y flujos inteligentes conectados a tu operación, el mismo tipo de producto que corre en nuestro ChatMantis.', link: { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' } },
          { h3: 'Automatizaciones internas', text: 'Conectar los sistemas que hoy no se hablan entre sí para que la información fluya sola, sin hojas de cálculo paralelas.', link: { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones' } },
        ],
      },
      {
        type: 'statement',
        text: 'No vendemos tecnología que solo conocemos de talleres: el stack con el que construimos lo tuyo es el mismo que sostiene nuestros SaaS en producción, con clientes y datos reales.',
        strong: 'el mismo que sostiene nuestros SaaS en producción',
      },
      {
        type: 'related',
        items: [
          { slug: 'saas', label: 'Nuestros SaaS' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Sistemas de Reservas' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
          { slug: 'blog/diseno-web-responsive-mobile-first-panama', label: 'Diseño responsive' },
        ],
      },
    ],
    cta: { h2: 'Agenda un diagnóstico técnico', wa: 'Hola, quiero cotizar un desarrollo a medida.' },
  },
];
