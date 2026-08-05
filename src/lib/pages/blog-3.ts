import type { PageData } from '../types';

const parent = { slug: 'blog', label: 'Blog' };

export const blog3: PageData[] = [
  /* ============================================================
     1. Cómo aparecer primero en Google en Panamá
     ============================================================ */
  {
    slug: 'blog/como-aparecer-primero-en-google-en-panama',
    parent,
    title: 'Cómo aparecer primero en Google en Panamá: guía real de SEO',
    description: 'Guía honesta para aparecer primero en Google en Panamá: cómo funciona el ranking, qué contenido y autoridad necesitas y en cuánto tiempo esperar resultados.',
    h1: 'Cómo aparecer primero en Google en Panamá (sin trucos ni promesas falsas)',
    breadcrumb: 'Aparecer primero en Google',
    category: 'SEO',
    date: '2026-07-16',
    heroImage: {
      src: '/images/blog/como-aparecer-primero-en-google-en-panama.jpg',
      alt: 'Persona analizando datos y posiciones de búsqueda en la pantalla de una laptop',
    },
    lead: [
      '"Quiero salir de primero en Google" es la frase que más escuchamos. Es una meta legítima, pero casi siempre viene con una idea equivocada de cómo se logra.',
      'No hay un botón, ni un pago mágico, ni un truco que te ponga arriba de un día para otro. Lo que sí existe es un método, y en esta guía te explicamos cómo funciona de verdad el ranking de Google y qué depende de ti.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué significa "aparecer primero" y por qué la pregunta importa',
        paragraphs: [
          'Antes de perseguir el primer lugar hay que aclarar una cosa: primero, <strong>¿para qué búsqueda?</strong> No es lo mismo aparecer de primero cuando alguien escribe el nombre exacto de tu empresa que cuando escribe "abogado de migración en Panamá". La primera es fácil y casi automática; la segunda es una posición peleada por decenas de negocios.',
          'La búsqueda que de verdad te trae clientes es la segunda: la que hace una persona que todavía no te conoce y tiene un problema que tú resuelves. Esa es la que vale oro, y también la más difícil. Cuando alguien nos pide "salir de primero", lo que en realidad quiere es aparecer arriba en esas búsquedas comerciales, delante de la competencia.',
          'Entender esto cambia toda la estrategia. No trabajas para "estar en Google" (ahí ya estás), trabajas para posicionarte en las palabras exactas que escribe tu cliente cuando tiene la billetera en la mano.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo decide Google qué página va primero',
        paragraphs: [
          'Google no ordena resultados al azar ni por quien pague más (eso son los anuncios, que van marcados como "Patrocinado"). El orden orgánico responde a tres grandes preguntas que el buscador se hace por cada resultado: ¿esta página <strong>responde</strong> lo que la persona buscó?, ¿el sitio es <strong>confiable</strong> en ese tema?, y ¿ofrece una <strong>buena experiencia</strong> a quien la visita?',
          'La relevancia se construye con contenido: una página que trata a fondo el tema, con las palabras que la gente realmente usa, gana frente a una página vaga o genérica. La confianza se construye con autoridad: enlaces de otros sitios, reseñas, trayectoria y coherencia. Y la experiencia se mide con señales técnicas: que el sitio cargue rápido, se vea bien en el celular y no llene la pantalla de ventanas molestas.',
          'Ningún factor solo te pone de primero. Es la suma. Un sitio rapidísimo pero con contenido pobre no sube; un gran contenido en un sitio lento y sin autoridad tampoco. Por eso el <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento SEO</a> es un trabajo de varios frentes a la vez, no un ajuste puntual.',
        ],
      },
      {
        type: 'prose',
        h2: 'Contenido: responder la intención de búsqueda, no rellenar de palabras',
        paragraphs: [
          'El error más viejo del SEO es repetir la palabra clave cincuenta veces esperando engañar a Google. Eso dejó de funcionar hace más de una década. Hoy el buscador entiende el significado, no solo las letras, y premia a la página que de verdad resuelve la duda de quien busca.',
          'La clave es la <strong>intención de búsqueda</strong>: qué espera encontrar la persona. Si alguien busca "cuánto cuesta una página web en Panamá", quiere rangos, factores y honestidad, no un folleto de ventas. Si busca "cómo elegir un diseñador web", quiere criterios. Tu contenido debe darle exactamente eso, mejor que cualquier competidor.',
          'En la práctica esto significa páginas de servicio claras, y artículos que respondan las preguntas reales de tus clientes, como este mismo blog. Cada pieza bien hecha es una puerta de entrada más a tu sitio desde Google.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Los fundamentos que no puedes saltarte',
        intro: 'Antes de soñar con el primer lugar, revisa que tu sitio cumpla lo básico. Sin esto, ninguna estrategia avanzada funciona.',
        items: [
          'Cada página tiene un título (title) y una meta descripción únicos y con la palabra clave principal.',
          'El sitio carga rápido y se ve perfecto en el celular, que es donde busca la mayoría en Panamá.',
          'Existe una página específica por cada servicio o producto importante, no todo amontonado en una sola.',
          'El contenido responde de verdad la pregunta del usuario, con profundidad y en su idioma.',
          'El sitio está verificado en Google Search Console para saber qué páginas indexa Google.',
          'Tienes una ficha de Google Business Profile activa si atiendes clientes locales.',
          'La estructura de enlaces internos conecta tus páginas entre sí de forma lógica.',
        ],
      },
      {
        type: 'prose',
        h2: 'Autoridad: por qué Google confía en unos sitios más que en otros',
        paragraphs: [
          'Imagina dos negocios que dicen ser los mejores plomeros de la ciudad. Uno lo dice solo en su web; del otro hablan bien en directorios, blogs, reseñas y otras páginas que enlazan a su sitio. Google interpreta esos enlaces y menciones como votos de confianza, y le da ventaja al segundo.',
          'A esto se le llama autoridad, y se construye con el tiempo: reseñas reales de clientes, presencia en directorios serios de Panamá, colaboraciones, contenido tan bueno que otros lo citan. No se compra en paquetes de "1000 enlaces por $20" (eso te penaliza, no te ayuda) y no aparece de la noche a la mañana.',
          'Para un negocio local panameño, la autoridad más valiosa suele venir de las reseñas de Google y de aparecer bien referenciado en el ecosistema local. Es lento, pero es lo que separa a los que se quedan arriba de los que suben y bajan.',
        ],
      },
      {
        type: 'prose',
        h2: 'SEO técnico: la base invisible que sostiene todo',
        paragraphs: [
          'Puedes tener el mejor contenido del país, pero si Google no puede leer tu sitio o si carga tan lento que la gente se va, no vas a posicionar. El SEO técnico es la plomería invisible: velocidad, estructura de código, versión móvil, indexación correcta y datos estructurados que ayudan al buscador a entender tu página.',
          'La velocidad merece atención aparte porque afecta al ranking y a la conversión al mismo tiempo. Un sitio que tarda en cargar pierde visitantes antes de mostrar nada. Si sospechas que ese es tu caso, revisa nuestra guía de <a href="/blog/como-mejorar-la-velocidad-de-tu-pagina-web/">cómo mejorar la velocidad de tu página web</a>.',
          'Lo bueno del SEO técnico es que muchos de sus problemas se arreglan una vez y quedan resueltos. Por eso, en un sitio nuevo bien construido, gran parte de esta base ya viene incluida desde el primer día.',
        ],
      },
      {
        type: 'statement',
        text: 'El SEO no es un gasto único ni un truco: es una inversión que rinde intereses. Cada mes de trabajo constante suma sobre el anterior, y las posiciones ganadas siguen trayendo clientes sin pagar por cada clic.',
        strong: 'El SEO no es un gasto único ni un truco: es una inversión que rinde intereses.',
      },
      {
        type: 'prose',
        h2: 'Expectativas realistas: cuánto tarda de verdad',
        paragraphs: [
          'Aquí es donde muchas agencias mienten y nosotros preferimos ser francos. El SEO orgánico no da resultados en dos semanas. Para palabras clave competidas en Panamá, hablar de tres a seis meses para ver movimiento serio es lo normal, y a veces más según el punto de partida y la competencia.',
          'Si alguien te promete el primer lugar en Google en un mes garantizado, desconfía: o va a usar técnicas que te van a penalizar después, o simplemente no va a cumplir. Lo honesto es medir avances graduales: subir de la página cinco a la dos, de la dos al top tres, y de ahí pelear el primer lugar.',
          'La buena noticia es que ese avance es acumulativo y duradero. A diferencia de los anuncios, que dejan de traer visitas el día que dejas de pagar, una buena posición orgánica te sigue trayendo clientes mes tras mes. Es una carrera de fondo, no un sprint, y por eso vale la pena empezarla cuanto antes.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Se puede garantizar el primer lugar en Google?', a: 'No, y quien lo garantice miente. Nadie controla el algoritmo de Google. Lo que sí se puede garantizar es un trabajo profesional y medible que mejora tus posiciones de forma sostenida. Los resultados llegan, pero por método, no por promesa.' },
          { q: '¿Cuánto tiempo tarda en verse el resultado?', a: 'Para búsquedas competidas, entre tres y seis meses suele ser lo realista para ver avances claros, dependiendo del estado inicial del sitio y de la competencia. El <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> a veces da señales antes que el orgánico general.' },
          { q: '¿Es lo mismo pagar Google Ads que hacer SEO?', a: 'No. Google Ads te pone arriba de inmediato pero dejas de aparecer el día que dejas de pagar. El SEO tarda más pero construye una posición que se sostiene. Muchos negocios usan ambos: <a href="/marketing/google-ads-panama/">Ads</a> para resultados rápidos y SEO para el largo plazo.' },
          { q: '¿Sirve de algo repetir la palabra clave muchas veces?', a: 'No, es contraproducente. Google entiende el significado y penaliza el texto forzado. Lo que funciona es responder bien la intención de búsqueda con contenido claro y útil, usando el lenguaje natural de tus clientes.' },
          { q: '¿Puedo hacer SEO yo mismo?', a: 'Los fundamentos sí: escribir buen contenido, cuidar tus reseñas, mantener tu ficha de Google. La parte técnica y la estrategia de autoridad suelen requerir ayuda profesional. Empieza por lo que puedas y suma apoyo donde se complique.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento Web en Panamá' },
          { slug: 'blog/que-es-el-seo-local-y-google-maps-panama', label: 'Qué es el SEO local y Google Maps' },
          { slug: 'blog/por-que-mi-pagina-no-aparece-en-google', label: 'Por qué mi página no aparece en Google' },
          { slug: 'blog/seo-para-pymes-en-panama-guia', label: 'SEO para pymes en Panamá: guía' },
        ],
      },
    ],
    cta: {
      h2: '¿Listo para pelear las primeras posiciones en Panamá?',
      wa: 'Hola, leí la guía sobre cómo aparecer primero en Google y quiero hablar sobre SEO para mi negocio en Panamá.',
    },
  },

  /* ============================================================
     2. Qué es el SEO local y cómo dominar Google Maps
     ============================================================ */
  {
    slug: 'blog/que-es-el-seo-local-y-google-maps-panama',
    parent,
    title: 'Qué es el SEO local y cómo dominar Google Maps en Panamá',
    description: 'Aprende qué es el SEO local, cómo optimizar tu Google Business Profile y aparecer en el mapa cuando buscan "cerca de mí" en Panamá. Guía práctica paso a paso.',
    h1: 'SEO local: cómo aparecer en Google Maps cuando te buscan cerca',
    breadcrumb: 'SEO local y Google Maps',
    category: 'SEO',
    date: '2026-07-02',
    heroImage: {
      src: '/images/blog/que-es-el-seo-local-y-google-maps-panama.jpg',
      alt: 'Mapa digital con marcadores de ubicación de negocios en una ciudad',
    },
    lead: [
      'Cuando alguien en la ciudad de Panamá busca "farmacia cerca de mí" o "mecánico en Costa del Este", Google no le muestra el sitio web mejor posicionado del mundo: le muestra los negocios más cercanos y mejor valorados. Ese es el terreno del SEO local.',
      'Si tienes un negocio con dirección física o que atiende una zona concreta, este canal puede ser tu mayor fuente de clientes. Y lo mejor: no depende de un sitio web enorme, sino de hacer bien un puñado de cosas.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es el SEO local y en qué se diferencia del SEO normal',
        paragraphs: [
          'El SEO local es la práctica de posicionar tu negocio en las búsquedas con intención geográfica: las que incluyen una ciudad, una zona o el famoso "cerca de mí". Su gran diferencia con el SEO tradicional es que el factor decisivo no es solo tu web, sino tu presencia en el <strong>mapa de Google</strong>.',
          'Cuando buscas un servicio local, Google muestra arriba un bloque especial con un mapa y tres negocios destacados, conocido como el "pack local". Aparecer ahí vale más que estar de primero en los resultados normales, porque es lo primero que ve el usuario y de donde salen las llamadas y las visitas.',
          'Para un restaurante, una clínica, un taller o cualquier negocio con puerta abierta, dominar el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local en Google Maps</a> suele ser el canal digital número uno, por encima incluso de un sitio web perfecto.',
        ],
      },
      {
        type: 'prose',
        h2: 'Tu Google Business Profile es el corazón de todo',
        paragraphs: [
          'El Google Business Profile (antes Google My Business) es la ficha gratuita que representa a tu negocio en Google y en Maps. Es, sin exagerar, la herramienta de marketing local más poderosa que existe, y muchos negocios en Panamá la tienen abandonada o ni siquiera reclamada.',
          'Una ficha bien trabajada incluye tu categoría correcta, horarios reales, teléfono con WhatsApp, fotos actualizadas, descripción con tus servicios y publicaciones frecuentes. Cada uno de esos datos le dice a Google que tu negocio está activo y merece mostrarse. Una ficha vacía o con datos viejos manda la señal contraria.',
          'Lo primero, siempre, es reclamar y verificar tu ficha. Si no la controlas tú, no puedes optimizarla, y peor aún, cualquiera podría reportar datos incorrectos sobre tu negocio sin que lo notes.',
        ],
      },
      {
        type: 'prose',
        h2: 'Reseñas: la moneda del SEO local',
        paragraphs: [
          'Las reseñas de Google son, después de la ficha, el factor que más mueve la aguja en el mapa. No solo influyen en tu posición: son lo que convence al cliente de elegirte. Entre dos negocios parecidos, la gente casi siempre llama al de más estrellas y más comentarios recientes.',
          'La estrategia honesta es simple: pide reseñas de forma sistemática a tus clientes satisfechos, facilítales el enlace directo, y <strong>responde todas</strong>, las buenas y las malas. Responder una crítica con calma y solución dice más de tu negocio que diez estrellas. Lo que nunca debes hacer es comprar reseñas falsas: Google las detecta y puede penalizarte.',
          'Un flujo constante de reseñas nuevas también le indica a Google que tu negocio sigue vivo y atendiendo. Un negocio con cincuenta reseñas del año pasado y ninguna reciente pierde terreno frente a uno que suma comentarios cada semana.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo optimizar tu presencia local paso a paso',
        intro: 'Este es el orden que seguimos con nuestros clientes locales. Puedes empezar tú mismo hoy con los primeros pasos.',
        items: [
          { h3: 'Reclama y verifica tu ficha', text: 'Toma control de tu Google Business Profile. Sin verificación no puedes editar ni proteger tu información.' },
          { h3: 'Completa cada campo al 100%', text: 'Categoría correcta, horarios, teléfono con WhatsApp, servicios, área de cobertura y una descripción con tus palabras clave locales.' },
          { h3: 'Sube fotos reales y buenas', text: 'Fachada, interior, equipo, productos y trabajos terminados. Las fotos aumentan clics y confianza, y Google premia las fichas con imágenes frescas.' },
          { h3: 'Activa un flujo de reseñas', text: 'Pide reseñas a cada cliente satisfecho con un enlace directo y responde todas, siempre, con educación y solución.' },
          { h3: 'Cuida la coherencia de tu NAP', text: 'Que tu Nombre, dirección y teléfono (NAP) sean idénticos en tu web, tu ficha y todos los directorios donde apareces.' },
          { h3: 'Publica y mide', text: 'Usa las publicaciones de Google para promociones y novedades, y revisa las estadísticas para saber cómo te encuentran.' },
        ],
      },
      {
        type: 'prose',
        h2: 'NAP y coherencia: el detalle que muchos ignoran',
        paragraphs: [
          'NAP son las siglas en inglés de Nombre, Dirección y Teléfono (Name, Address, Phone). El principio es sencillo pero crítico: esos tres datos deben ser <strong>exactamente iguales</strong> en todos los lugares donde tu negocio aparece en internet: tu web, tu ficha de Google, directorios, redes sociales.',
          'Si en tu web dice "Calle 50" pero en un directorio dice "Cll. 50" y en otro un teléfono viejo, Google recibe señales confusas sobre cuál es la información correcta y confía menos en tu negocio. Esa inconsistencia frena tu posicionamiento sin que te des cuenta.',
          'Ordenar el NAP es una tarea de una sola vez que muchos negocios nunca hacen. Corregirlo es de las acciones de SEO local con mejor relación esfuerzo-resultado que existen.',
        ],
      },
      {
        type: 'prose',
        h2: 'Las búsquedas "cerca de mí" y el celular',
        paragraphs: [
          'La explosión del SEO local vino con el celular. Hoy la mayoría de las búsquedas locales en Panamá se hacen desde el teléfono, muchas veces con intención inmediata: alguien que necesita algo ahora y va a llamar o visitar en los próximos minutos.',
          'Eso hace que tu sitio web deba estar impecable en móvil y que tu ficha tenga el botón de llamar y la ruta a un clic de distancia. Un cliente que busca "ferretería cerca de mí" a las 3 de la tarde no va a leer tu historia: quiere teléfono, horario y ubicación al instante.',
          'Por eso el SEO local y una web rápida y móvil van de la mano. La ficha te hace aparecer; el sitio y el WhatsApp cierran la visita. Si vendes o agendas, integrar canales como <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas online</a> convierte esa búsqueda en un cliente confirmado.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿El Google Business Profile es gratis?', a: 'Sí, crear y mantener tu ficha de Google Business Profile es totalmente gratuito. Lo que cuesta es el trabajo de optimizarla bien y sostener el flujo de reseñas y publicaciones, que es donde está la verdadera diferencia frente a la competencia.' },
          { q: '¿Necesito una web si ya tengo la ficha de Google?', a: 'La ficha te hace aparecer en el mapa, pero la web es la que da confianza, muestra tu oferta completa y cierra la venta. Lo ideal es tener ambas conectadas: la ficha atrae y el sitio convierte. Una sin la otra deja dinero sobre la mesa.' },
          { q: '¿Cómo consigo más reseñas sin sonar insistente?', a: 'Pídelas en el momento justo, cuando el cliente está contento, y facilítale el enlace directo. Un mensaje amable por WhatsApp tras un buen servicio funciona muy bien. Nunca compres reseñas: Google las detecta y penaliza la ficha.' },
          { q: '¿Qué pasa si tengo varias sucursales?', a: 'Cada sucursal necesita su propia ficha verificada, con su dirección y teléfono. Gestionarlas de forma coherente es parte del trabajo de SEO local para negocios con múltiples ubicaciones en Panamá.' },
          { q: '¿El SEO local funciona fuera de la ciudad de Panamá?', a: 'Sí. Funciona igual de bien en David, Chitré, Coronado o cualquier zona. De hecho, en localidades con menos competencia digital suele ser más fácil dominar el mapa. La estrategia se ajusta a tu área de cobertura.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps en Panamá' },
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Cómo aparecer primero en Google' },
          { slug: 'blog/seo-para-pymes-en-panama-guia', label: 'SEO para pymes en Panamá' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Sistemas de reservas y citas online' },
        ],
      },
    ],
    cta: {
      h2: 'Pongamos tu negocio en el mapa de Panamá',
      wa: 'Hola, quiero mejorar mi SEO local y mi ficha de Google para que me encuentren en el mapa en Panamá.',
    },
  },

  /* ============================================================
     3. Cómo mejorar la velocidad de carga de tu página web
     ============================================================ */
  {
    slug: 'blog/como-mejorar-la-velocidad-de-tu-pagina-web',
    parent,
    title: 'Cómo mejorar la velocidad de carga de tu página web',
    description: 'Por qué la velocidad de tu web afecta el SEO y las ventas, cuáles son las causas más comunes de lentitud y qué hacer para mejorar tus Core Web Vitals.',
    h1: 'Cómo mejorar la velocidad de carga de tu página web (y por qué importa)',
    breadcrumb: 'Velocidad de carga web',
    category: 'SEO',
    date: '2026-06-18',
    heroImage: {
      src: '/images/blog/como-mejorar-la-velocidad-de-tu-pagina-web.jpg',
      alt: 'Velocímetro que representa la rapidez de carga de un sitio web',
    },
    lead: [
      'Una página lenta pierde clientes antes de mostrar lo que ofrece. Cada segundo de más en cargar es gente que se va, ventas que no ocurren y posiciones que Google no te da.',
      'La buena noticia es que la velocidad se puede medir y mejorar con acciones concretas. En esta guía te explicamos por qué importa tanto, qué la vuelve lenta y qué hacer para acelerar tu sitio.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué la velocidad afecta tu SEO y tus ventas',
        paragraphs: [
          'La velocidad de carga golpea tu negocio por dos lados al mismo tiempo. Por un lado, Google la usa como factor de posicionamiento: entre dos sitios parecidos, favorece al más rápido porque ofrece mejor experiencia. Por otro lado, afecta directamente la conversión: la gente impaciente abandona un sitio que tarda, y ese abandono se traduce en ventas perdidas.',
          'Piénsalo desde el cliente. Alguien busca tu servicio, hace clic en tu web y ve una pantalla en blanco por varios segundos. La mayoría no espera: vuelve atrás y entra a tu competencia. No importa lo bueno que sea tu contenido si nunca llega a verlo.',
          'En Panamá esto pesa aún más porque gran parte del tráfico entra desde el celular y desde redes móviles que no siempre son rápidas. Un sitio pesado castiga justo a los usuarios que más te conviene retener.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué son los Core Web Vitals',
        paragraphs: [
          'Google mide la experiencia de carga con un conjunto de métricas llamadas <strong>Core Web Vitals</strong>. No hace falta ser técnico para entender qué evalúan: básicamente responden tres preguntas sobre cómo se siente tu sitio al usarlo.',
          'La primera es cuánto tarda en aparecer el contenido principal (el LCP): idealmente, en menos de dos segundos y medio. La segunda es qué tan rápido responde el sitio cuando el usuario interactúa, por ejemplo al tocar un botón. Y la tercera es la estabilidad visual: que los elementos no salten ni se muevan mientras carga, obligándote a perseguir un botón que se corre.',
          'Estas métricas son públicas y medibles con herramientas gratuitas de Google como PageSpeed Insights. Te dan una nota clara y, mejor aún, te dicen qué está frenando tu sitio para que sepas por dónde empezar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Las causas más comunes de una web lenta',
        paragraphs: [
          'La razón número uno de lentitud que vemos en Panamá son las <strong>imágenes sin optimizar</strong>. Fotos de varios megabytes subidas tal cual salen de la cámara o del celular pesan diez o veinte veces lo que deberían. Solo comprimir y redimensionar imágenes ya transforma muchos sitios.',
          'La segunda causa suele ser el <strong>hosting barato</strong>. Un servidor lento o saturado por compartirlo con cientos de sitios arrastra todo tu rendimiento, hagas lo que hagas por encima. Si pagas dos dólares al mes por tu hosting, ese suele ser el cuello de botella. Lo explicamos a fondo en <a href="/blog/hosting-panama-evitar-hosting-barato/">por qué evitar el hosting barato</a>.',
          'Otras causas frecuentes: exceso de plugins en WordPress, plantillas recargadas, código pesado, demasiados scripts de terceros (chats, píxeles, banners) y falta de caché. Cada uno suma milisegundos que, juntos, vuelven el sitio pesado.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué hacer para acelerar tu sitio',
        intro: 'Ordenadas más o menos por impacto. Las primeras suelen dar la mayor mejora con el menor esfuerzo.',
        items: [
          'Optimiza todas las imágenes: comprímelas y sírvelas en formatos modernos como WebP.',
          'Migra a un hosting de calidad si estás en un servidor barato y saturado.',
          'Activa la caché del sitio para que las páginas no se generen desde cero en cada visita.',
          'Reduce y limpia los plugins o scripts que no usas de verdad.',
          'Carga las imágenes de forma diferida (lazy loading) para que aparezcan al bajar.',
          'Usa una CDN para servir el sitio más rápido según la ubicación del visitante.',
          'Minimiza el código CSS y JavaScript innecesario que retrasa el renderizado.',
          'Mide antes y después con PageSpeed Insights para confirmar que cada cambio ayudó.',
        ],
      },
      {
        type: 'statement',
        text: 'La velocidad no es un lujo técnico: es dinero. Un sitio que carga en dos segundos convierte mejor y posiciona mejor que uno que carga en seis, con exactamente el mismo contenido.',
        strong: 'La velocidad no es un lujo técnico: es dinero.',
      },
      {
        type: 'prose',
        h2: 'Cuándo optimizar y cuándo rehacer el sitio',
        paragraphs: [
          'A veces la lentitud se resuelve con optimización puntual: comprimir imágenes, limpiar plugins, mejorar el hosting. Pero hay casos en que el problema es de raíz: una plantilla pesada, un sitio construido sobre capas y capas de parches, o una tecnología que ya no da más. Ahí, optimizar es ponerle curitas a algo que necesita cirugía.',
          'Nuestro criterio es honesto: si el sitio se puede acelerar con ajustes, te lo decimos y no te vendemos uno nuevo. Pero si la base está tan comprometida que cada mejora choca contra otra, a menudo sale más rentable un <a href="/servicios/redisenio-web-panama/">rediseño web</a> sobre una base moderna y rápida que seguir peleando con lo viejo.',
          'La ventaja de construir bien desde el principio es que la velocidad viene incluida. Un sitio hecho con tecnología actual y un buen hosting nace rápido, sin necesidad de optimizaciones de emergencia después.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cómo sé qué tan rápida es mi web?', a: 'Usa PageSpeed Insights de Google: es gratis, solo pones la dirección de tu sitio y te da una nota para móvil y escritorio, además de una lista de qué mejorar. Es el mismo tipo de datos que Google considera para posicionar, así que es la referencia más confiable.' },
          { q: '¿Cuál es la causa más común de lentitud?', a: 'En la mayoría de los casos que vemos, las imágenes pesadas sin optimizar y el hosting barato. Resolver esos dos puntos suele producir la mejora más grande y notoria en la velocidad de un sitio.' },
          { q: '¿Tener muchas fotos hace lento mi sitio?', a: 'No es la cantidad, es el peso. Puedes tener muchas imágenes si están comprimidas y se cargan de forma diferida. El problema son fotos enormes servidas a tamaño completo. Optimizarlas bien te deja tener un sitio visual y rápido a la vez.' },
          { q: '¿El hosting influye tanto en la velocidad?', a: 'Muchísimo. Es la base sobre la que corre todo. Un servidor lento o saturado limita tu velocidad por más que optimices lo demás. Por eso recomendamos un hosting gestionado de calidad en lugar del más barato del mercado.' },
          { q: '¿Mejorar la velocidad me ayuda a subir en Google?', a: 'Ayuda, sí, aunque no es lo único que cuenta. La velocidad es un factor de ranking y, sobre todo, mejora la experiencia y la conversión. Combinada con buen contenido y autoridad, es una pieza clave para posicionar mejor.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/hosting-panama-evitar-hosting-barato', label: 'Hosting en Panamá: evita el hosting barato' },
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño web en Panamá' },
          { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y hosting web' },
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Cómo aparecer primero en Google' },
        ],
      },
    ],
    cta: {
      h2: '¿Tu web va lenta? Hagamos que vuele',
      wa: 'Hola, mi página web carga lento y quiero mejorar su velocidad. ¿Me pueden ayudar a revisarla?',
    },
  },

  /* ============================================================
     4. SEO para pymes en Panamá: guía práctica
     ============================================================ */
  {
    slug: 'blog/seo-para-pymes-en-panama-guia',
    parent,
    title: 'SEO para pymes en Panamá: guía práctica para empezar',
    description: 'Guía de SEO para pymes en Panamá: pasos accionables con poco presupuesto, palabras clave locales, contenido útil y tu ficha de Google. Empieza hoy.',
    h1: 'SEO para pymes en Panamá: cómo empezar con poco presupuesto',
    breadcrumb: 'SEO para pymes',
    category: 'SEO',
    date: '2026-06-04',
    heroImage: {
      src: '/images/blog/seo-para-pymes-en-panama-guia.jpg',
      alt: 'Emprendedora de una pequeña empresa trabajando en su estrategia digital',
    },
    lead: [
      'El SEO no es solo para grandes empresas con presupuestos enormes. Una pyme panameña puede posicionarse muy bien si enfoca su esfuerzo donde de verdad cuenta, en lugar de intentar competir en todo a la vez.',
      'Esta guía es para dueños de negocios que quieren empezar con lo que tienen: tiempo, sentido común y un presupuesto ajustado. Nada de tecnicismos innecesarios, solo pasos que puedes dar desde hoy.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué el SEO es el mejor aliado de una pyme',
        paragraphs: [
          'Para un negocio pequeño, cada dólar de marketing tiene que rendir. Ahí el SEO tiene una ventaja enorme frente a la publicidad pagada: el tráfico que consigues no se detiene cuando dejas de invertir. Una página bien posicionada te sigue trayendo clientes mes tras mes sin pagar por cada clic.',
          'La publicidad es un grifo: mientras pagas, sale agua; cuando cierras, se acaba. El SEO es un pozo: cuesta cavarlo, pero luego te da agua por mucho tiempo. Para una pyme que no puede quemar presupuesto en anuncios todos los meses, esa diferencia lo cambia todo.',
          'Además, no necesitas ganarle a las grandes cadenas en todo. Necesitas ganar en <strong>tu nicho y tu zona</strong>: las búsquedas específicas y locales donde una empresa enfocada puede superar a un gigante genérico. Ahí es donde una pyme juega con ventaja.',
        ],
      },
      {
        type: 'prose',
        h2: 'Empieza por las palabras clave locales',
        paragraphs: [
          'El error clásico de una pyme es querer posicionar palabras enormes y competidísimas, como "abogado" o "restaurante" a secas. Contra eso pelea todo el país y es casi imposible ganar con poco presupuesto. La jugada inteligente es lo contrario: apuntar a búsquedas más específicas y locales.',
          '"Abogado de sucesiones en Panamá", "restaurante de mariscos en Casco Antiguo", "taller de aires acondicionados en San Miguelito". Estas búsquedas tienen menos volumen, sí, pero mucha más intención de compra y muchísima menos competencia. Quien las busca sabe lo que quiere y está cerca de decidir.',
          'Piensa como tu cliente: ¿qué escribiría en Google justo antes de contratarte? Esas frases son tus palabras clave. Empieza por tres o cuatro y construye tu contenido alrededor de ellas, sin dispersarte en todo el universo de tu sector.',
        ],
      },
      {
        type: 'prose',
        h2: 'Tu ficha de Google: la victoria más rápida',
        paragraphs: [
          'Si tienes que elegir una sola cosa para empezar, empieza por tu Google Business Profile. Es gratis, es rápido de montar y para una pyme local suele dar el resultado más inmediato de todo el SEO. Reclamar, verificar y completar tu ficha te puede poner en el mapa en cuestión de días.',
          'Completa todo: categoría correcta, horarios, teléfono con WhatsApp, fotos reales, servicios y una buena descripción. Luego pide reseñas a tus clientes contentos de forma constante y respóndelas todas. Ese flujo de reseñas es de lo que más te posiciona en el mapa y de lo que más convence a quien te encuentra.',
          'Profundizamos en esto en nuestra guía de <a href="/blog/que-es-el-seo-local-y-google-maps-panama/">SEO local y Google Maps</a>, pero el mensaje para una pyme es claro: esta es tu prioridad número uno y no cuesta nada más que un poco de tiempo.',
        ],
      },
      {
        type: 'steps',
        h2: 'Tu plan de SEO en cinco pasos para arrancar',
        intro: 'Un orden realista para una pyme que empieza. No hace falta hacerlo todo en una semana: avanza un paso a la vez.',
        items: [
          { h3: 'Define tus palabras clave locales', text: 'Anota las tres o cuatro frases que escribiría tu cliente ideal justo antes de contratarte, siempre con tu zona o ciudad.' },
          { h3: 'Optimiza tu ficha de Google', text: 'Reclámala, complétala al 100% y arranca un flujo constante de reseñas. Es tu victoria más rápida y es gratis.' },
          { h3: 'Ordena tu web por servicios', text: 'Crea una página clara por cada servicio principal, con su palabra clave, en lugar de amontonar todo en la página de inicio.' },
          { h3: 'Publica contenido que responda dudas', text: 'Escribe respuestas a las preguntas reales de tus clientes. Cada artículo útil es una puerta más desde Google a tu negocio.' },
          { h3: 'Mide y ajusta', text: 'Instala Google Search Console y revisa qué búsquedas te traen visitas. Refuerza lo que funciona y corrige lo que no.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Contenido: responde las preguntas de tus clientes',
        paragraphs: [
          'No necesitas ser escritor ni publicar todos los días. Necesitas responder, mejor que nadie, las preguntas que tus clientes ya te hacen. Piensa en las dudas que te llegan por WhatsApp o en el mostrador: cada una es un tema de contenido que otros también están buscando en Google.',
          'Un dentista puede escribir sobre "cuánto dura un blanqueamiento" o "duele una limpieza dental". Un contador, sobre plazos de declaraciones. Un taller, sobre cada cuánto cambiar ciertas piezas. Ese contenido posiciona, genera confianza y hace que la gente te elija porque ya le ayudaste antes de contratarte.',
          'La calidad vence a la cantidad. Es mejor un artículo realmente útil al mes que diez textos vacíos. Y con el tiempo, ese contenido se acumula y se convierte en un activo que trabaja por ti sin parar. Si el tiempo te falta, el <a href="/marketing/contenido-redes-sociales-panama/">contenido para redes y web</a> se puede delegar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué puedes hacer tú y cuándo pedir ayuda',
        paragraphs: [
          'Buena parte del SEO para pymes es 100% tuyo y no cuesta dinero: cuidar tu ficha de Google, pedir reseñas, escribir sobre lo que sabes, mantener tus datos coherentes. Empezar por ahí ya te pone por delante de la mayoría de tu competencia, que ni siquiera hace lo básico.',
          'Donde conviene pedir ayuda es en la parte técnica y estratégica: que tu web esté bien construida y sea rápida, que la estructura de páginas tenga sentido, que la estrategia de palabras clave y autoridad esté bien planteada. Ahí una mano profesional evita meses de esfuerzo mal dirigido.',
          'No hace falta contratar todo de golpe. Muchas pymes empiezan haciendo ellas lo accionable y suman un servicio de <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento SEO</a> cuando el negocio lo pide y el presupuesto lo permite. Lo importante es arrancar; el SEO premia la constancia más que el gasto.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Se puede hacer SEO con poco presupuesto?', a: 'Sí. Buena parte del SEO para una pyme es trabajo, no dinero: optimizar tu ficha de Google, pedir reseñas, escribir sobre lo que dominas y ordenar tu web. Con eso ya superas a la mayoría de tu competencia local. Lo pagado se suma después, según crezca el negocio.' },
          { q: '¿Cuál es el primer paso que da más resultado?', a: 'Optimizar tu Google Business Profile. Es gratis, rápido y para un negocio local suele dar el resultado más inmediato de todo el SEO. Empieza por reclamar tu ficha, completarla y conseguir reseñas.' },
          { q: '¿Tengo que escribir un blog para posicionar?', a: 'Ayuda mucho, pero no tiene que ser diario ni extenso. Basta con responder bien las preguntas reales de tus clientes, un artículo útil de vez en cuando. Vale más la calidad y la constancia que la cantidad.' },
          { q: '¿Cuánto tarda una pyme en ver resultados de SEO?', a: 'El SEO local con la ficha de Google puede dar señales en semanas. El posicionamiento orgánico de la web toma más, típicamente algunos meses. Es una inversión de fondo, pero muy rentable porque los resultados se sostienen en el tiempo.' },
          { q: '¿Necesito una web nueva para hacer SEO?', a: 'No siempre. Si tu web actual es rápida y está bien construida, se puede optimizar. Si es lenta, vieja o desordenada, a veces conviene un rediseño sobre una base moderna. Lo evaluamos con honestidad antes de recomendarte gastar.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento Web en Panamá' },
          { slug: 'blog/que-es-el-seo-local-y-google-maps-panama', label: 'Qué es el SEO local y Google Maps' },
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Cómo aparecer primero en Google' },
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
        ],
      },
    ],
    cta: {
      h2: 'Empecemos el SEO de tu pyme por lo que más rinde',
      wa: 'Hola, tengo una pyme en Panamá y quiero empezar con SEO. ¿Me ayudan a saber por dónde arrancar?',
    },
  },

  /* ============================================================
     5. Por qué mi página no aparece en Google: 8 razones
     ============================================================ */
  {
    slug: 'blog/por-que-mi-pagina-no-aparece-en-google',
    parent,
    title: '¿Por qué mi página no aparece en Google? 8 razones y soluciones',
    description: 'Tu web no aparece en Google y no sabes por qué. Estas son las 8 causas más comunes, desde problemas de indexación hasta falta de SEO, y cómo resolver cada una.',
    h1: '¿Por qué mi página no aparece en Google? 8 razones y sus soluciones',
    breadcrumb: 'Mi página no aparece',
    category: 'SEO',
    date: '2026-05-21',
    heroImage: {
      src: '/images/blog/por-que-mi-pagina-no-aparece-en-google.jpg',
      alt: 'Persona frustrada frente a una laptop buscando su sitio web sin encontrarlo',
    },
    lead: [
      'Invertiste en una página web, la publicaste, y cuando buscas tu negocio en Google no aparece por ningún lado. Es una de las frustraciones más comunes, y casi siempre tiene una explicación concreta.',
      'La buena noticia es que la mayoría de las causas se pueden diagnosticar y resolver. Aquí repasamos las ocho razones más frecuentes por las que un sitio no aparece en Google y qué hacer en cada caso.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Primero: "no aparecer" puede significar dos cosas distintas',
        paragraphs: [
          'Antes de entrar en las causas, hay que distinguir dos situaciones muy diferentes que la gente confunde. Una es que tu sitio <strong>no esté indexado</strong>: Google literalmente no lo tiene en su base de datos, así que no puede mostrarlo aunque quiera. La otra es que sí esté indexado pero <strong>mal posicionado</strong>: aparece, pero tan abajo que nadie lo ve.',
          'La forma rápida de saber cuál es tu caso: busca en Google <strong>site:tudominio.com</strong> (con tu dirección real). Si salen páginas de tu sitio, estás indexado y el problema es de posicionamiento. Si no sale nada, el problema es de indexación, que es más grave y más urgente.',
          'Este simple truco te ahorra mucho tiempo, porque la solución es completamente distinta según el caso. Con eso claro, veamos las ocho razones más comunes.',
        ],
      },
      {
        type: 'prose',
        h2: 'Razones de indexación: cuando Google ni te ve',
        paragraphs: [
          '<strong>1. Tu sitio es demasiado nuevo.</strong> Google necesita tiempo para descubrir e indexar un sitio recién publicado. Puede tardar desde unos días hasta varias semanas. Si tu web tiene poco tiempo, a veces solo hay que esperar y ayudar al proceso.',
          '<strong>2. El sitio está bloqueado para Google.</strong> Muchas veces la web se construye con una opción activada que le dice a los buscadores "no me indexes" (una etiqueta noindex o un ajuste en el archivo robots). Es habitual dejarla puesta durante el desarrollo y olvidar quitarla al publicar. Es una de las causas más frecuentes y más fáciles de resolver.',
          '<strong>3. No está en Google Search Console.</strong> Sin esta herramienta gratuita de Google no puedes pedir que indexe tus páginas, ni ver qué problemas detecta, ni enviar tu mapa del sitio. Verificar tu sitio ahí es de las primeras cosas que hay que hacer, y muchas webs simplemente nunca lo hicieron.',
        ],
      },
      {
        type: 'prose',
        h2: 'Razones de posicionamiento: apareces, pero nadie te encuentra',
        paragraphs: [
          '<strong>4. Tu sitio no tiene SEO.</strong> Estás indexado, pero sin títulos optimizados, sin contenido enfocado en lo que busca la gente y sin las palabras clave correctas. Google no tiene motivos para mostrarte arriba. Es como tener una tienda hermosa en un callejón sin letrero.',
          '<strong>5. Compites por palabras imposibles.</strong> Si intentas posicionar términos genéricos y competidísimos desde un sitio nuevo, es normal no aparecer en las primeras páginas. La solución es apuntar a búsquedas más específicas y locales, como explicamos en la <a href="/blog/seo-para-pymes-en-panama-guia/">guía de SEO para pymes</a>.',
          '<strong>6. Tu web es lenta o no funciona en móvil.</strong> Google prioriza la experiencia, y un sitio pesado o roto en celular pierde posiciones. Si sospechas de esto, revisa <a href="/blog/como-mejorar-la-velocidad-de-tu-pagina-web/">cómo mejorar la velocidad de tu página web</a>. La velocidad y el móvil son requisitos, no extras.',
        ],
      },
      {
        type: 'prose',
        h2: 'Razones estructurales y de contenido',
        paragraphs: [
          '<strong>7. Estructura y contenido pobres.</strong> Un sitio con una sola página que amontona todo, textos mínimos o contenido copiado le da poco material a Google para posicionar. Cada servicio importante merece su propia página con contenido real y útil. Sin sustancia, no hay ranking.',
          '<strong>8. Penalización o problemas técnicos graves.</strong> Es la causa menos común, pero existe: técnicas de SEO prohibidas del pasado, enlaces tóxicos comprados, o errores técnicos serios pueden hacer que Google te ignore o te penalice. Aquí hace falta un diagnóstico profesional para identificar y limpiar el problema.',
          'La mayoría de los sitios que "no aparecen" combinan varias de estas razones a la vez: son nuevos, sin SEO, un poco lentos y con estructura pobre. Por eso el diagnóstico ordenado es clave: no se trata de adivinar, sino de revisar punto por punto.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Diagnóstico rápido: revisa esto tú mismo',
        intro: 'Antes de asumir lo peor, verifica estos puntos. Muchos "misterios" se resuelven en minutos con esta lista.',
        items: [
          'Busca site:tudominio.com en Google para saber si estás indexado o no.',
          'Confirma que tu sitio no tenga activada la opción de "desalentar a los buscadores" o noindex.',
          'Verifica tu sitio en Google Search Console y envía tu mapa del sitio (sitemap).',
          'Comprueba cuánto tiempo lleva publicado tu sitio: si es muy nuevo, dale margen.',
          'Prueba la velocidad y la versión móvil de tu web con PageSpeed Insights.',
          'Revisa que cada servicio importante tenga su propia página con contenido real.',
          'Busca tu negocio por su nombre exacto: si ni así apareces, hay un problema de indexación.',
        ],
      },
      {
        type: 'statement',
        text: 'Que tu página no aparezca casi nunca es cuestión de mala suerte: es una causa concreta que se puede encontrar y arreglar. El primer paso siempre es diagnosticar, no adivinar.',
        strong: 'Que tu página no aparezca casi nunca es cuestión de mala suerte.',
      },
      {
        type: 'prose',
        h2: 'Qué hacer si ya revisaste todo y sigue sin aparecer',
        paragraphs: [
          'Si pasaste por la lista y tu sitio sigue sin aparecer, lo más probable es que haya una combinación de causas técnicas y de SEO que requiere una mirada experta. A veces el problema está en cómo se construyó el sitio de origen, y ninguna optimización superficial lo resuelve.',
          'En esos casos hacemos una auditoría honesta: revisamos indexación, estructura, velocidad, contenido y posibles penalizaciones, y te decimos con claridad qué está fallando y qué se puede hacer. Si el arreglo es simple, te lo decimos; si la base está muy comprometida, valoramos si conviene un <a href="/servicios/redisenio-web-panama/">rediseño</a> junto con una estrategia de <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento SEO</a>.',
          'Lo importante es no quedarse en la frustración de "mi web no sirve". Casi siempre sirve; solo hay que encontrar qué la frena y ordenar el trabajo para que Google, por fin, te muestre a quien te está buscando.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cómo sé si mi sitio está indexado en Google?', a: 'Busca en Google site: seguido de tu dominio, sin espacios, por ejemplo site:tunegocio.com. Si aparecen páginas de tu sitio, estás indexado y el problema es de posicionamiento. Si no aparece nada, el problema es de indexación y es más urgente resolverlo.' },
          { q: '¿Cuánto tarda Google en mostrar un sitio nuevo?', a: 'Puede ir de unos pocos días a varias semanas. Verificar el sitio en Google Search Console y enviar el mapa del sitio acelera y confirma el proceso. Si tu web es muy reciente, a veces solo hace falta un poco de paciencia y ayudar a que Google la descubra.' },
          { q: '¿Por qué aparezco por mi nombre pero no por mis servicios?', a: 'Es lo más común: estás indexado pero sin SEO. Google te muestra cuando te buscan por tu nombre exacto, pero no en las búsquedas de tus servicios porque falta contenido optimizado y palabras clave. Ahí es donde entra el trabajo de posicionamiento.' },
          { q: '¿Una web lenta puede impedir que aparezca?', a: 'La velocidad rara vez impide la indexación, pero sí hunde tu posicionamiento y espanta a los visitantes. Google prioriza sitios rápidos y que funcionen bien en móvil, así que un sitio lento difícilmente va a competir por las primeras posiciones.' },
          { q: '¿Puede haber una penalización sin que yo lo sepa?', a: 'Sí, sobre todo si en el pasado alguien usó técnicas de SEO prohibidas o compró enlaces. Es la causa menos frecuente, pero existe. Google Search Console suele avisar de acciones manuales, y una auditoría profesional ayuda a detectar y limpiar el problema.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Cómo aparecer primero en Google' },
          { slug: 'blog/como-mejorar-la-velocidad-de-tu-pagina-web', label: 'Cómo mejorar la velocidad de tu web' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento Web' },
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño web en Panamá' },
        ],
      },
    ],
    cta: {
      h2: 'Descubramos por qué tu página no aparece',
      wa: 'Hola, mi página web no aparece en Google y quiero que revisen qué está pasando.',
    },
  },
];
