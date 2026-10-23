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
      alt: 'Copa de trofeo, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Para aparecer primero en Google en Panamá necesitas tres cosas a la vez: contenido que responda la búsqueda exacta de tu cliente, autoridad (reseñas, enlaces y menciones locales) y un sitio rápido en el celular. No hay pago ni truco que lo acelere: en búsquedas competidas, el movimiento serio suele tomar de tres a seis meses.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué significa "aparecer primero" en Google?',
        paragraphs: [
          'Primero hay que definir <strong>para qué búsqueda</strong>. Aparecer de primero con el nombre exacto de tu empresa es fácil y casi automático. Aparecer de primero cuando alguien escribe "abogado de migración en Panamá" es una posición que pelean decenas de negocios.',
          'La búsqueda que trae clientes es la segunda: la de una persona que todavía no te conoce y tiene un problema que tú resuelves. El objetivo real no es "estar en Google" (ya estás), sino posicionarte en las frases exactas que escribe tu cliente justo antes de contratar.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo decide Google qué página va primero?',
        paragraphs: [
          'El orden orgánico no se compra: lo pagado son los anuncios, marcados como "Patrocinado". Para cada resultado, Google evalúa tres cosas: si la página <strong>responde</strong> lo que la persona buscó, si el sitio es <strong>confiable</strong> en ese tema y si ofrece una <strong>buena experiencia</strong> a quien la visita.',
          'La relevancia sale del contenido: una página que trata el tema a fondo, con las palabras que la gente usa. La confianza sale de la autoridad: enlaces de otros sitios, reseñas y trayectoria. La experiencia se mide con señales técnicas: velocidad, buena visualización en el celular y ausencia de ventanas molestas.',
          'Ningún factor por sí solo te pone de primero. Un sitio rápido con contenido pobre no sube, y un buen contenido en un sitio lento y sin autoridad tampoco. Por eso el <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento SEO</a> trabaja los tres frentes a la vez.',
        ],
      },
      {
        type: 'prose',
        h2: 'Contenido: responder la intención de búsqueda, no rellenar de palabras',
        paragraphs: [
          'Repetir la palabra clave cincuenta veces dejó de funcionar hace más de una década. Google entiende el significado de la búsqueda y premia la página que resuelve la duda.',
          'La clave es la <strong>intención de búsqueda</strong>: qué espera encontrar la persona. Quien busca "cuánto cuesta una página web en Panamá" quiere rangos y factores, no un folleto de ventas; quien busca "cómo elegir un diseñador web" quiere criterios. En la práctica, eso se traduce en una página clara por servicio y en artículos que respondan las preguntas reales de tus clientes. Cada uno es una puerta de entrada más desde Google.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Los fundamentos que no puedes saltarte',
        intro: 'Sin esta base, ninguna estrategia avanzada de SEO funciona.',
        items: [
          'Cada página tiene un título (title) y una meta descripción únicos y con la palabra clave principal.',
          'El sitio carga rápido y se ve bien en el celular, que es donde busca la mayoría en Panamá.',
          'Existe una página específica por cada servicio o producto importante, no todo amontonado en una sola.',
          'El sitio está verificado en Google Search Console para saber qué páginas indexa Google.',
          'Tienes una ficha de Google Business Profile activa si atiendes clientes locales.',
          'La estructura de enlaces internos conecta tus páginas entre sí de forma lógica.',
        ],
      },
      {
        type: 'prose',
        h2: 'Autoridad: por qué Google confía más en unos sitios que en otros',
        paragraphs: [
          'Imagina dos plomeros de la misma ciudad. Del primero solo habla su propia web; del segundo hablan directorios, blogs, reseñas y otras páginas que enlazan a su sitio. Google interpreta esos enlaces y menciones como votos de confianza y le da ventaja al segundo.',
          'La autoridad se construye con tiempo: reseñas reales de clientes, presencia en directorios serios de Panamá, colaboraciones y contenido que otros citan. No se compra en paquetes de "1000 enlaces por $20": eso te penaliza. Para un negocio local panameño, la fuente de autoridad más valiosa suele ser las reseñas de Google.',
        ],
      },
      {
        type: 'prose',
        h2: 'SEO técnico: la base que sostiene todo',
        paragraphs: [
          'Si Google no puede leer tu sitio, o si carga tan lento que la gente se va, el contenido no posiciona. El SEO técnico cubre velocidad, estructura de código, versión móvil, indexación correcta y datos estructurados que ayudan al buscador a entender cada página.',
          'La velocidad afecta al ranking y a la conversión al mismo tiempo; si sospechas que ese es tu problema, revisa la guía de <a href="/blog/como-mejorar-la-velocidad-de-tu-pagina-web/">cómo mejorar la velocidad de tu página web</a>. Muchos fallos técnicos se arreglan una vez y quedan resueltos, y en un sitio nuevo bien construido esa base viene incluida desde el primer día.',
        ],
      },
      {
        type: 'statement',
        text: 'El SEO no es un gasto único ni un truco: es una inversión que rinde intereses. Cada mes de trabajo constante suma sobre el anterior, y las posiciones ganadas siguen trayendo clientes sin pagar por cada clic.',
        strong: 'El SEO no es un gasto único ni un truco: es una inversión que rinde intereses.',
      },
      {
        type: 'prose',
        h2: '¿Cuánto tarda aparecer primero en Google en Panamá?',
        paragraphs: [
          'Para palabras clave competidas en Panamá, lo normal es ver movimiento serio entre tres y seis meses, y a veces más, según el punto de partida del sitio y la competencia. El SEO orgánico no da resultados en dos semanas.',
          'Desconfía de quien prometa el primer lugar en un mes: o usará técnicas que te penalizan después, o no cumplirá. Lo medible es el avance gradual: de la página cinco a la dos, de la dos al top tres y de ahí al primer lugar. A diferencia de los anuncios, que dejan de traer visitas el día que dejas de pagar, ese avance se acumula y se sostiene.',
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
        
          { slug: 'industrias/diseno-web-abogados-panama', label: 'Diseño web para abogados' },
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Diseño web para contadores' },
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
    description: 'Qué es el SEO local y cómo aparecer en el mapa cuando alguien busca "cerca de mí" en Panamá. Guía práctica paso a paso.',
    h1: 'SEO local: cómo aparecer en Google Maps cuando te buscan cerca',
    breadcrumb: 'SEO local y Google Maps',
    category: 'SEO',
    date: '2026-07-02',
    heroImage: {
      src: '/images/blog/que-es-el-seo-local-y-google-maps-panama.jpg',
      alt: 'Marcador de ubicación sobre un disco con cuadrícula de calles, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El SEO local es el trabajo para que tu negocio aparezca en Google Maps y en el "pack local" cuando alguien en Ciudad de Panamá busca "farmacia cerca de mí" o "mecánico en Costa del Este". Depende de tres cosas: una ficha de Google Business Profile verificada y completa, reseñas recientes y los mismos datos de contacto en toda la web.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué es el SEO local y en qué se diferencia del SEO normal?',
        paragraphs: [
          'El SEO local posiciona tu negocio en búsquedas con intención geográfica: las que incluyen una ciudad, una zona o "cerca de mí". A diferencia del SEO tradicional, el factor decisivo no es solo tu web, sino tu presencia en el <strong>mapa de Google</strong>.',
          'En esas búsquedas, Google muestra arriba un mapa con tres negocios destacados, el llamado "pack local". Es lo primero que ve el usuario y de ahí salen las llamadas y las visitas, así que aparecer en él suele valer más que el primer resultado orgánico.',
          'Para un restaurante, una clínica, un taller o cualquier negocio con puerta abierta, el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local en Google Maps</a> suele pesar más que un sitio web perfecto. No exige un sitio enorme, sino hacer bien un puñado de cosas.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué es Google Business Profile y por qué es la base del SEO local?',
        paragraphs: [
          'Google Business Profile (antes Google My Business) es la ficha gratuita que representa a tu negocio en Google y en Maps. Muchos negocios en Panamá la tienen abandonada o ni siquiera reclamada.',
          'Una ficha bien trabajada lleva la categoría correcta, horarios reales, teléfono con WhatsApp, fotos actualizadas, una descripción con tus servicios y publicaciones frecuentes. Esos datos le indican a Google que el negocio está activo; una ficha vacía o con datos viejos manda la señal contraria.',
          'El primer paso es reclamar y verificar la ficha. Sin verificación no puedes editarla, y cualquiera podría reportar datos incorrectos sobre tu negocio sin que lo notes.',
        ],
      },
      {
        type: 'prose',
        h2: 'Reseñas: la moneda del SEO local',
        paragraphs: [
          'Después de la ficha, las reseñas de Google son el factor que más mueve tu posición en el mapa, y además pesan en la decisión: entre dos negocios parecidos, la gente suele llamar al de más estrellas y comentarios recientes.',
          'Pide reseñas de forma sistemática a los clientes satisfechos, dales el enlace directo y <strong>responde todas</strong>, buenas y malas; una crítica respondida con calma y una solución habla bien de tu negocio. Nunca compres reseñas falsas: Google las detecta y puede penalizar la ficha.',
          'La frecuencia también cuenta. Un negocio con cincuenta reseñas del año pasado y ninguna reciente pierde terreno frente a uno que suma comentarios cada semana.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo optimizar tu presencia local paso a paso',
        intro: 'Este es el orden que seguimos en Elemento Web con negocios locales; los primeros pasos los puedes dar tú hoy.',
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
        h2: '¿Qué es el NAP y por qué afecta tu posición en Google Maps?',
        paragraphs: [
          'NAP son las siglas en inglés de Nombre, Dirección y Teléfono (Name, Address, Phone). Esos tres datos deben ser <strong>exactamente iguales</strong> en tu web, tu ficha de Google, los directorios y las redes sociales.',
          'Si tu web dice "Calle 50", un directorio dice "Cll. 50" y otro muestra un teléfono viejo, Google recibe señales confusas y confía menos en tu negocio. Ordenar el NAP se hace una sola vez y es de las tareas de SEO local con mejor relación esfuerzo-resultado.',
        ],
      },
      {
        type: 'prose',
        h2: 'Las búsquedas "cerca de mí" y el celular',
        paragraphs: [
          'La mayoría de las búsquedas locales en Panamá se hacen desde el teléfono y con intención inmediata: alguien que va a llamar o visitar en los próximos minutos. Quien busca "ferretería cerca de mí" a las 3 de la tarde quiere teléfono, horario y ubicación, no tu historia.',
          'Por eso la ficha necesita el botón de llamar y la ruta a un clic, y la web debe funcionar bien en el móvil. La ficha te hace aparecer; el sitio y el WhatsApp cierran la visita. Si vendes o agendas, las <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas online</a> convierten esa búsqueda en un cliente confirmado.',
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
        
          { slug: 'industrias/diseno-web-dentistas-odontologia-panama', label: 'Diseño web para dentistas' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Diseño web para clínicas y salud' },
        
          { slug: 'industrias/diseno-web-aire-acondicionado-refrigeracion-panama', label: 'Diseño web para aire acondicionado' },
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
      alt: 'Cronómetro, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Para mejorar la velocidad de carga de tu página web, empieza por lo que más pesa: comprime las imágenes y sírvelas en WebP, sal del hosting barato, activa la caché y quita los plugins y scripts que no usas. Mide antes y después con PageSpeed Insights: la meta de Google es que el contenido principal aparezca en menos de 2,5 segundos.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué la velocidad de carga afecta tu SEO y tus ventas?',
        paragraphs: [
          'La velocidad pega por dos lados. Google la usa como factor de posicionamiento: entre dos sitios parecidos, favorece al más rápido. Y afecta la conversión: quien hace clic en tu web y ve una pantalla en blanco por varios segundos suele volver atrás y entrar a la competencia sin llegar a ver tu contenido.',
          'En Panamá pesa más porque gran parte del tráfico entra desde el celular y desde redes móviles que no siempre son rápidas. Un sitio pesado castiga justo a esos usuarios.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué son los Core Web Vitals?',
        paragraphs: [
          'Los <strong>Core Web Vitals</strong> son las métricas con las que Google mide cómo se siente un sitio al usarlo. Son tres: cuánto tarda en aparecer el contenido principal (LCP, idealmente menos de 2,5 segundos), qué tan rápido responde el sitio cuando el usuario toca un botón, y la estabilidad visual, es decir, que los elementos no salten mientras la página carga.',
          'Se miden gratis con PageSpeed Insights de Google, que da una nota para móvil y escritorio y señala qué está frenando tu sitio para que sepas por dónde empezar.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué una página web carga lento? Las causas más comunes',
        paragraphs: [
          'La causa más frecuente que vemos en Panamá son las <strong>imágenes sin optimizar</strong>: fotos de varios megabytes subidas tal cual salen de la cámara o del celular, que pesan diez o veinte veces lo necesario. Comprimirlas y redimensionarlas ya transforma muchos sitios.',
          'La segunda es el <strong>hosting barato</strong>. Un servidor lento o compartido con cientos de sitios arrastra todo el rendimiento; si pagas dos dólares al mes, ese suele ser el cuello de botella. Lo explicamos en <a href="/blog/hosting-panama-evitar-hosting-barato/">por qué evitar el hosting barato</a>.',
          'Otras causas frecuentes: exceso de plugins en WordPress, plantillas recargadas, demasiados scripts de terceros (chats, píxeles, banners) y falta de caché.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Cómo mejorar la velocidad de carga de tu sitio',
        intro: 'Ordenadas aproximadamente por impacto: las primeras suelen dar la mayor mejora con el menor esfuerzo.',
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
          'Si la lentitud viene de imágenes, plugins o hosting, se resuelve con ajustes puntuales. Si viene de la raíz (una plantilla pesada, un sitio hecho de capas de parches o una tecnología que ya no da más), optimizar es ponerle curitas a algo que necesita cirugía.',
          'Si el sitio se acelera con ajustes, en Elemento Web te lo decimos y no te vendemos uno nuevo. Si cada mejora choca con otra, suele salir más rentable un <a href="/servicios/redisenio-web-panama/">rediseño web</a> sobre una base moderna con buen hosting, que nace rápida y no necesita optimizaciones de emergencia después.',
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
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Cómo aparecer primero en Google' },
        
          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Diseño web para retail y moda' },
          { slug: 'industrias/diseno-web-turismo-hoteles-panama', label: 'Diseño web para turismo y hoteles' },
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
      alt: 'Lupa sobre un brote de planta, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El SEO para pymes en Panamá empieza por lo que cuesta tiempo y no dinero: una ficha de Google Business Profile completa y con reseñas, tres o cuatro palabras clave locales, una página por servicio y artículos que respondan las dudas de tus clientes. La ficha puede dar señales en semanas; la web, en algunos meses.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué el SEO le conviene a una pyme en Panamá?',
        paragraphs: [
          'En una pyme cada dólar de marketing tiene que rendir. La publicidad es un grifo: sale agua mientras pagas y se corta cuando cierras. El SEO es un pozo: cuesta cavarlo, pero una página bien posicionada sigue trayendo clientes mes tras mes sin pagar por cada clic.',
          'Tampoco necesitas ganarle a las grandes cadenas en todo. Necesitas ganar en <strong>tu nicho y tu zona</strong>: búsquedas específicas y locales donde una empresa enfocada puede superar a un competidor genérico.',
        ],
      },
      {
        type: 'prose',
        h2: 'Empieza por las palabras clave locales',
        paragraphs: [
          'Palabras enormes como "abogado" o "restaurante" a secas las pelea todo el país, y con poco presupuesto es casi imposible ganarlas. Apunta a búsquedas específicas y locales: "abogado de sucesiones en Panamá", "restaurante de mariscos en Casco Antiguo", "taller de aires acondicionados en San Miguelito".',
          'Esas búsquedas tienen menos volumen, pero más intención de compra y mucha menos competencia. Para encontrarlas, pregúntate qué escribiría tu cliente en Google justo antes de contratarte. Empieza por tres o cuatro frases y construye tu contenido alrededor de ellas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Tu ficha de Google: la victoria más rápida',
        paragraphs: [
          'Si solo puedes hacer una cosa, optimiza tu Google Business Profile. Es gratis, se monta rápido y para una pyme local suele dar el resultado más inmediato de todo el SEO: reclamarla, verificarla y completarla te puede poner en el mapa en cuestión de días.',
          'Completa categoría, horarios, teléfono con WhatsApp, fotos reales, servicios y descripción; luego pide reseñas de forma constante y respóndelas todas. El paso a paso está en la guía de <a href="/blog/que-es-el-seo-local-y-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'steps',
        h2: 'Plan de SEO para pymes en cinco pasos',
        intro: 'Un orden realista para empezar. No hace falta hacerlo todo en una semana: avanza un paso a la vez.',
        items: [
          { h3: 'Define tus palabras clave locales', text: 'Anota las tres o cuatro frases que escribiría tu cliente ideal justo antes de contratarte, siempre con tu zona o ciudad.' },
          { h3: 'Optimiza tu ficha de Google', text: 'Reclámala, complétala al 100% y arranca un flujo constante de reseñas.' },
          { h3: 'Ordena tu web por servicios', text: 'Crea una página clara por cada servicio principal, con su palabra clave, en lugar de amontonar todo en la página de inicio.' },
          { h3: 'Publica contenido que responda dudas', text: 'Escribe respuestas a las preguntas reales de tus clientes. Cada artículo útil es una puerta más desde Google a tu negocio.' },
          { h3: 'Mide y ajusta', text: 'Instala Google Search Console y revisa qué búsquedas te traen visitas. Refuerza lo que funciona y corrige lo que no.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Contenido: responde las preguntas de tus clientes',
        paragraphs: [
          'No hace falta publicar todos los días. Cada duda que te llega por WhatsApp o en el mostrador es un tema que otras personas también buscan en Google. Un dentista puede escribir sobre "cuánto dura un blanqueamiento" o "duele una limpieza dental"; un contador, sobre plazos de declaraciones; un taller, sobre cada cuánto cambiar ciertas piezas.',
          'Un artículo útil al mes vale más que diez textos vacíos, y con el tiempo ese contenido se acumula como un activo que posiciona y genera confianza antes de que te contraten. Si te falta tiempo, el <a href="/marketing/contenido-redes-sociales-panama/">contenido para redes y web</a> se puede delegar.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué SEO puede hacer una pyme por su cuenta y cuándo pedir ayuda?',
        paragraphs: [
          'Sin gastar dinero puedes cuidar tu ficha de Google, pedir reseñas, escribir sobre lo que sabes y mantener tus datos coherentes. Con eso ya te adelantas a los competidores locales que ni siquiera hacen lo básico.',
          'La ayuda profesional rinde más en la parte técnica y estratégica: una web rápida y bien construida, una estructura de páginas lógica y un plan de palabras clave y autoridad bien planteado. Muchas pymes empiezan por lo accionable y suman un servicio de <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento SEO</a> cuando el presupuesto lo permite; el SEO premia la constancia más que el gasto.',
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
        
          { slug: 'industrias/diseno-web-talleres-automotriz-panama', label: 'Diseño web para talleres' },
          { slug: 'industrias/diseno-web-belleza-spa-panama', label: 'Diseño web para belleza y spas' },
          { slug: 'crecimiento/posicionamiento-en-chatgpt-e-ia-panama', label: 'Posicionamiento en ChatGPT y la IA' },
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
    title: '¿Por qué mi página no aparece en Google? 8 razones',
    description: 'Tu web no aparece en Google y no sabes por qué. Estas son las 8 causas más comunes, desde problemas de indexación hasta falta de SEO, y cómo resolver cada una.',
    h1: '¿Por qué mi página no aparece en Google? 8 razones y sus soluciones',
    breadcrumb: 'Mi página no aparece',
    category: 'SEO',
    date: '2026-05-21',
    heroImage: {
      src: '/images/blog/por-que-mi-pagina-no-aparece-en-google.jpg',
      alt: 'Brújula abierta, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Si tu página no aparece en Google, la causa casi siempre es concreta: o el sitio no está indexado (es nuevo, tiene un noindex activo o no está en Search Console), o está indexado pero mal posicionado (sin SEO, lento o con poco contenido). Para saber cuál es tu caso, busca site:tudominio.com en Google.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Mi página no está indexada o está mal posicionada?',
        paragraphs: [
          '"No aparecer" puede ser dos problemas distintos. Si tu sitio <strong>no está indexado</strong>, Google no lo tiene en su base de datos y no puede mostrarlo. Si está indexado pero <strong>mal posicionado</strong>, aparece, pero tan abajo que nadie lo ve.',
          'Para distinguirlos, busca en Google <strong>site:tudominio.com</strong> con tu dirección real. Si salen páginas de tu sitio, el problema es de posicionamiento. Si no sale nada, es de indexación, que es más grave y más urgente. La solución cambia por completo según el caso.',
        ],
      },
      {
        type: 'prose',
        h2: 'Razones de indexación: cuando Google ni te ve',
        paragraphs: [
          '<strong>1. Tu sitio es demasiado nuevo.</strong> Google puede tardar desde unos días hasta varias semanas en descubrir e indexar un sitio recién publicado.',
          '<strong>2. El sitio está bloqueado para Google.</strong> Una etiqueta noindex o un ajuste en el archivo robots les dice a los buscadores que no indexen el sitio. Es habitual dejarla puesta durante el desarrollo y olvidar quitarla al publicar: es una de las causas más frecuentes y de las más fáciles de resolver.',
          '<strong>3. No está en Google Search Console.</strong> Sin esta herramienta gratuita de Google no puedes pedir que indexe tus páginas, ver qué problemas detecta ni enviar tu mapa del sitio. Muchas webs nunca se verificaron ahí.',
        ],
      },
      {
        type: 'prose',
        h2: 'Razones de posicionamiento: apareces, pero nadie te encuentra',
        paragraphs: [
          '<strong>4. Tu sitio no tiene SEO.</strong> Está indexado, pero sin títulos optimizados ni contenido enfocado en las palabras que busca la gente, así que Google no tiene motivos para mostrarlo arriba. Es como una tienda hermosa en un callejón sin letrero.',
          '<strong>5. Compites por palabras imposibles.</strong> Con un sitio nuevo, es normal no aparecer en las primeras páginas para términos genéricos y muy competidos. La solución es apuntar a búsquedas más específicas y locales, como explica la <a href="/blog/seo-para-pymes-en-panama-guia/">guía de SEO para pymes</a>.',
          '<strong>6. Tu web es lenta o no funciona en móvil.</strong> Google prioriza la experiencia, y un sitio pesado o roto en el celular pierde posiciones. Para corregirlo, revisa <a href="/blog/como-mejorar-la-velocidad-de-tu-pagina-web/">cómo mejorar la velocidad de tu página web</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Razones estructurales y de contenido',
        paragraphs: [
          '<strong>7. Estructura y contenido pobres.</strong> Un sitio de una sola página que amontona todo, con textos mínimos o contenido copiado, le da poco material a Google para posicionar. Cada servicio importante necesita su propia página con contenido real.',
          '<strong>8. Penalización o problemas técnicos graves.</strong> Es la causa menos común: técnicas de SEO prohibidas usadas en el pasado, enlaces tóxicos comprados o errores técnicos serios pueden hacer que Google ignore o penalice el sitio. Detectarlo y limpiarlo requiere un diagnóstico profesional.',
          'La mayoría de los sitios que no aparecen combinan varias de estas razones a la vez: son nuevos, no tienen SEO, cargan algo lento y tienen una estructura pobre.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Diagnóstico rápido: por qué tu página no aparece en Google',
        intro: 'Muchos casos se resuelven en minutos revisando estos puntos tú mismo.',
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
        h2: '¿Qué hacer si tu página sigue sin aparecer en Google?',
        paragraphs: [
          'Si revisaste la lista y el sitio sigue sin aparecer, lo probable es una combinación de causas técnicas y de SEO, a veces originada en cómo se construyó el sitio, que ninguna optimización superficial resuelve.',
          'En ese punto conviene una auditoría que revise indexación, estructura, velocidad, contenido y posibles penalizaciones, y que separe lo que se arregla con ajustes de lo que no. Si la base está muy comprometida, se valora un <a href="/servicios/redisenio-web-panama/">rediseño</a> junto con una estrategia de <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento SEO</a>.',
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
        
          { slug: 'industrias/diseno-web-veterinarias-panama', label: 'Diseño web para veterinarias' },
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Diseño web para ferreterías' },
        ],
      },
    ],
    cta: {
      h2: 'Descubramos por qué tu página no aparece',
      wa: 'Hola, mi página web no aparece en Google y quiero que revisen qué está pasando.',
    },
  },
];
