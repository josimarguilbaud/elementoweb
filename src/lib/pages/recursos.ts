/* Recursos y comparativas. Contenido práctico y neutral. Las cifras de Elemento Web salen
   de `pricing` (site.ts); no se citan precios de competidores ni rangos de mercado. Las
   cuentas de la comparativa son aritmética con variables ilustrativas, no datos de terceros. */
import type { PageData } from '../types';

export const recursos: PageData[] = [
  {
    slug: 'recursos',
    title: 'Recursos para planear tu web: calculadora y guías',
    description: 'Herramientas y guías gratuitas para planear tu página web en Panamá: calculadora de costo total, checklist de migración SEO y comparativa de modelos.',
    h1: 'Recursos para planear tu web',
    breadcrumb: 'Recursos',
    lead: [
      'Herramientas y guías prácticas, sin registro, para decidir con números y sin perder posicionamiento.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Qué puedes usar',
        items: [
          { h3: 'Calculadora de costo total', text: 'Suma proyecto, infraestructura, mantenimiento e impuesto a 12 y 36 meses, y compárala con una suscripción. Todo se calcula en tu navegador.', link: { slug: 'recursos/calculadora-costo-total-web', label: 'Abrir la calculadora' } },
          { h3: 'Checklist de migración SEO', text: 'Qué hacer antes, durante y después de rediseñar o migrar una web para cuidar tu posicionamiento.', link: { slug: 'recursos/checklist-migracion-seo', label: 'Ver el checklist' } },
          { h3: 'Web a medida vs suscripción', text: 'Comparativa neutral: propiedad, costo a 12 y 36 meses, soporte, salida y límites, incluyendo cuándo conviene la suscripción.', link: { slug: 'comparativas/web-a-medida-vs-suscripcion', label: 'Leer la comparativa' } },
        ],
      },
      { type: 'related', items: [{ slug: 'precios', label: 'Precios' }, { slug: 'casos-de-exito', label: 'Casos de éxito' }, { slug: 'blog', label: 'Blog' }] },
      { type: 'form', h2: '¿Prefieres que lo revisemos contigo?', intro: 'Cuéntanos tu caso y te respondemos el mismo día hábil.' },
    ],
  },
  {
    slug: 'recursos/checklist-migracion-seo',
    parent: { slug: 'recursos', label: 'Recursos' },
    title: 'Checklist de migración SEO para rediseñar tu web',
    description: 'Lista práctica para rediseñar o migrar una web sin perder posicionamiento: qué hacer antes, durante y después, con redirecciones 301 y monitoreo.',
    h1: 'Checklist de migración SEO para rediseñar o migrar tu web',
    breadcrumb: 'Checklist de migración SEO',
    heroImage: { src: '/images/hero/servicios--redisenio-web-panama.jpg', alt: 'Rediseño web en Panamá' },
    lead: [
      'Una lista por fases para cambiar de diseño, dominio o plataforma cuidando lo que ya tienes en Google.',
      'Úsala como guía de trabajo: cada punto se marca cuando está hecho. Al final encuentras las preguntas más comunes.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Antes de empezar',
        paragraphs: [
          'Cuando una web cambia de estructura, Google tiene que volver a entender qué página es cuál. Casi todo lo que se pierde en una migración se pierde por no haber registrado lo que existía o por no haber redirigido bien.',
          '<strong>Aviso:</strong> ninguna migración está libre de riesgo, y es normal ver fluctuaciones temporales de tráfico en las primeras semanas mientras Google reprocesa el sitio. Esta lista reduce el riesgo; no lo elimina.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Fase 1: antes de migrar',
        intro: 'Lo que registras hoy es tu punto de comparación mañana. Sin esta línea base no sabrás si algo empeoró.',
        items: [
          'Inventario completo de URLs del sitio actual (rastreo con una herramienta de crawling, sitemap y páginas con tráfico)',
          'Exportar los datos de Search Console: páginas con clics e impresiones, consultas principales y estado de indexación',
          'Línea base por página importante: title, meta description, canonical y H1 actuales',
          'Lista de páginas con backlinks (enlaces desde otros sitios), para priorizar que ninguna quede sin redirección',
          'Medir la velocidad actual de las páginas clave, para comparar después',
          'Guardar una copia completa del sitio actual (archivos y base de datos)',
          'Decidir qué contenido se conserva, se mejora o se elimina, con criterio y por escrito',
        ],
      },
      {
        type: 'checklist',
        h2: 'Fase 2: durante la migración',
        intro: 'Aquí se decide qué URL antigua apunta a qué URL nueva. Un mapa bien hecho es la pieza que más pesa.',
        items: [
          'Mapa de redirecciones 301: cada URL de origen apunta a su equivalente más cercano en destino, en un solo salto (sin cadenas)',
          'Conservar las URLs que ya funcionan y tienen sentido; cambiar una URL solo si hay una razón',
          'No redirigir todo a la página de inicio: una redirección debe ir a contenido equivalente',
          'Mantener el entorno de pruebas (staging) fuera del índice: protegido con contraseña o con noindex, y sin robots abierto por error',
          'Quitar el noindex y los bloqueos de robots.txt del sitio de pruebas antes de publicar en producción',
          'Canonical correcto en cada página, apuntando a su versión definitiva',
          'Generar el sitemap nuevo con las URLs finales, sin redirecciones ni páginas 404',
          'Mantener o reimplementar los datos estructurados (schema) que ya tenías',
          'Revisar que titles, descriptions y H1 de las páginas importantes se conserven o mejoren',
          'Si cambia el dominio, preparar también la configuración en Search Console para el dominio nuevo',
        ],
      },
      {
        type: 'checklist',
        h2: 'Fase 3: después de publicar',
        intro: 'Publicar no termina el trabajo. Las primeras semanas sirven para detectar y corregir lo que se escapó.',
        items: [
          'Probar las redirecciones 301 con curl (por ejemplo, curl -I con la URL antigua) y confirmar código 301 y destino correcto',
          'Revisar una muestra de las URLs más importantes a mano, desde el navegador y desde el celular',
          'Enviar el sitemap nuevo en Search Console',
          'Monitorear durante varias semanas la indexación, los errores 404 y los errores 5xx en Search Console',
          'Corregir cada 404 con tráfico o backlinks: añadir la redirección que faltó',
          'Comparar clics, impresiones y posiciones contra la línea base de la fase 1',
          'Volver a medir la velocidad y compararla con la medición previa',
          'Conservar las redirecciones al menos un año; si puedes, más tiempo',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo leer los resultados',
        paragraphs: [
          'Compara siempre periodos equivalentes y por grupos de páginas, no solo el total. Una baja en unas pocas páginas apunta a un problema concreto que se puede corregir; una baja generalizada suele indicar un problema técnico como un bloqueo o redirecciones mal armadas.',
          'Si cambiaste mucho el contenido además de la estructura, es difícil separar el efecto de cada cambio. Por eso conviene, cuando se pueda, migrar primero y optimizar después. Más contexto sobre medición en la guía de <a href="/blog/como-medir-los-resultados-de-tu-pagina-web/">cómo medir los resultados de tu web</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre migración SEO',
        items: [
          { q: '¿Voy a perder posicionamiento si rediseño mi web?', a: 'No necesariamente, pero ninguna migración está libre de riesgo. Si conservas las URLs útiles, rediriges bien lo que cambia y mantienes el contenido relevante, el riesgo baja. Es normal ver movimientos temporales en el tráfico mientras Google reprocesa el sitio.' },
          { q: '¿Qué es una redirección 301 y por qué importa?', a: 'Es una instrucción que indica que una página cambió de dirección de forma permanente. Permite que visitantes y buscadores lleguen a la URL nueva y que las señales de la antigua (como los enlaces que recibía) se transfieran a ella.' },
          { q: '¿Por qué un solo salto y no una cadena de redirecciones?', a: 'Cada salto añade demora y una posibilidad de error. Si la URL A va a B y B va a C, conviene que A vaya directo a C. Al hacer el mapa, la URL de origen debe apuntar siempre al destino final.' },
          { q: '¿Cuánto tiempo debo mantener las redirecciones?', a: 'Al menos un año, y más si esas URLs siguen recibiendo visitas o enlaces. Quitarlas antes de tiempo puede volver a generar errores 404 en páginas que aún tenían tráfico.' },
          { q: '¿Cuánto tarda en estabilizarse el tráfico después de migrar?', a: 'Depende del tamaño del sitio y de qué tanto cambió, así que no damos un plazo fijo. Lo recomendable es monitorear indexación y errores durante varias semanas y comparar contra la línea base que guardaste antes.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño web en Panamá' },
          { slug: 'precios', label: 'Precios' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'blog/como-medir-los-resultados-de-tu-pagina-web', label: 'Cómo medir los resultados de tu web' },
          { slug: 'blog/como-mejorar-la-velocidad-de-tu-pagina-web', label: 'Cómo mejorar la velocidad de tu web' },
        ],
      },
      { type: 'form', h2: '¿Vas a rediseñar o migrar tu web?', intro: 'Cuéntanos qué tienes hoy y qué quieres cambiar. Te respondemos el mismo día hábil.' },
    ],
    cta: { h2: '¿Quieres que revisemos tu caso?', wa: 'Hola, vi el checklist de migración SEO y quiero migrar o rediseñar mi web.' },
  },
  {
    slug: 'comparativas/web-a-medida-vs-suscripcion',
    title: 'Web a medida vs suscripción mensual: comparativa',
    description: 'Compara pagar un proyecto único con pagar una suscripción mensual: propiedad, costo a 12 y 36 meses, soporte, salida, límites y quién edita el contenido.',
    h1: 'Web a medida (pago único) vs suscripción mensual',
    breadcrumb: 'Web a medida vs suscripción',
    heroImage: { src: '/images/hero/servicios--diseno-web-corporativo-panama.jpg', alt: 'Diseño web a medida en Panamá' },
    lead: [
      'Dos formas de tener un sitio: pagar un proyecto una vez o pagar una cuota cada mes.',
      'Ninguna es mejor en todos los casos. Esta comparativa muestra en qué se diferencian y cuándo conviene cada una, incluyendo las situaciones en que la suscripción es la mejor opción.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Cómo leer esta comparativa',
        paragraphs: [
          'Hablamos de dos modelos. En el primero se paga un proyecto único, como el que ofrece Elemento Web, y después solo la infraestructura anual y, si se quiere, un plan de mantenimiento. En el segundo se paga una cuota mensual por usar un constructor de sitios (del tipo Wix o Squarespace) o un plan mensual de agencia.',
          'Somos parte interesada: vendemos proyectos únicos. Por eso no citamos precios de otros proveedores ni rangos de mercado, porque no tenemos datos verificables de ellos y cambian con frecuencia. Donde hablamos de suscripciones usamos una variable ilustrativa, y donde hablamos de Elemento Web usamos solo nuestras tarifas publicadas. Antes de decidir, revisa los términos vigentes de cada proveedor.',
        ],
      },
      {
        type: 'cards',
        h2: 'Los criterios, uno por uno',
        intro: 'Cada criterio describe cómo suele funcionar cada modelo. Las condiciones exactas dependen del proveedor y del contrato.',
        items: [
          { h3: 'Propiedad del sitio y del dominio', text: 'Con un proyecto único con nosotros, el dominio, el código y los accesos quedan a nombre de tu empresa. En una suscripción, el sitio normalmente vive dentro de la plataforma del proveedor: usas el servicio mientras pagas. Revisa quién es el titular del dominio y qué se puede llevar contigo.' },
          { h3: 'Costo total a 12 y a 36 meses', text: 'La suscripción reparte el costo en cuotas y exige poco dinero al inicio; el proyecto único concentra el pago al inicio y después baja a la infraestructura. Más abajo hay una cuenta con números para comparar ambos.' },
          { h3: 'Soporte', text: 'En una suscripción, el soporte suele ser el del proveedor y sus canales; en un plan de agencia, el de la agencia. En un proyecto único, el soporte posterior depende de si contratas mantenimiento (desde $59/mes) o pides trabajo puntual. Pregunta siempre qué está incluido y en qué plazos se responde.' },
          { h3: 'Capacidad de salida y migración', text: 'Es uno de los puntos más importantes y de los menos mirados. Si el sitio está en una plataforma cerrada, sacar todo el contenido y el diseño puede ser parcial o imposible; verifícalo en los términos del proveedor antes de contratar. Con un sitio propio, mover el código a otro hosting es posible. Si algún día migras, la <a href="/recursos/checklist-migracion-seo/">checklist de migración SEO</a> te ayuda a no perder posicionamiento.' },
          { h3: 'Límites técnicos', text: 'Los constructores ofrecen las funciones que la plataforma soporta; lo que queda fuera se resuelve con extensiones o no se puede. Un sitio a medida no tiene ese techo, aunque cada funcionalidad extra implica trabajo y, a veces, costo aparte. Si tu proyecto es estándar, el límite quizá nunca te afecte.' },
          { h3: 'Velocidad', text: 'La velocidad depende de cómo esté construido cada sitio, no del modelo de pago. Hay sitios rápidos y lentos en ambos. Lo honesto es medir el caso concreto con la misma herramienta, por ejemplo PageSpeed Insights, y comparar. Detalles en la guía para <a href="/blog/como-mejorar-la-velocidad-de-tu-pagina-web/">mejorar la velocidad de tu web</a>.' },
          { h3: 'Quién actualiza el contenido', text: 'Los constructores están pensados para que tú edites textos e imágenes con un editor visual, sin depender de nadie. En nuestro caso, la Página PYME incluye panel autoadministrable, y los cambios más grandes se piden a nosotros. Si tu equipo quiere editar todo solo y con frecuencia, pesa a favor de la suscripción.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La cuenta a 12 y 36 meses',
        paragraphs: [
          '<strong>Suscripción (ejemplo ilustrativo, no es un precio real):</strong> si una suscripción costara X al mes, en 12 meses serían 12×X y en 36 meses serían 36×X. Sustituye X por la cuota real que te cotice el proveedor y suma lo que no venga incluido (dominio, correo, extensiones, comisiones), si aplica.',
          '<strong>Elemento Web (tarifas publicadas, sin ITBMS del 7%):</strong> proyecto único más infraestructura anual desde $350, que incluye dominio, hosting cloud y certificado SSL. El mantenimiento desde $59/mes es opcional y se suma solo si lo contratas.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Elemento Web: proyecto más infraestructura, sin mantenimiento',
        intro: 'Cifras calculadas con las tarifas de partida publicadas. El proyecto se paga una vez y la infraestructura cada año: total a 12 meses = proyecto + $350; total a 36 meses = proyecto + 3×$350.',
        items: [
          'Landing Page ($550): $900 a 12 meses y $1,600 a 36 meses',
          'Página PYME ($950, hasta 6 páginas internas): $1,300 a 12 meses y $2,000 a 36 meses',
          'E-commerce ($1,500): $1,850 a 12 meses y $2,550 a 36 meses',
          'Proyecto a medida ($2,900): $3,250 a 12 meses y $3,950 a 36 meses',
        ],
      },
      {
        type: 'checklist',
        h2: 'Si además contratas mantenimiento',
        intro: 'El mantenimiento desde $59/mes suma $708 por cada año ($59×12), $1,416 en 24 meses y $2,124 en 36 meses.',
        items: [
          'Página PYME con mantenimiento desde $59/mes: desde $2,008 a 12 meses y desde $4,124 a 36 meses',
          'Landing Page con mantenimiento desde $59/mes: desde $1,608 a 12 meses y desde $3,724 a 36 meses',
          'Son cifras «desde»: el alcance final se confirma por escrito en la cotización',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué muestra la cuenta y qué no',
        paragraphs: [
          'Con este método, el punto de equilibrio depende de un solo dato: la cuota real X. Si 12×X es menor que el total a 12 meses del proyecto que te interesa, la suscripción sale más barata el primer año; para saber qué pasa después, compara 36×X con el total a 36 meses. La cuenta solo cubre dinero: no valora la propiedad, la salida ni los límites, que también cuentan.',
          'Las tarifas de Elemento Web las puedes revisar completas en <a href="/precios/">precios</a>. Recuerda que no incluyen ITBMS (7%).',
        ],
      },
      {
        type: 'checklist',
        h2: 'Cuándo conviene la suscripción',
        intro: 'Hay casos donde una suscripción es la decisión más sensata, y decirlo es parte de ser honestos.',
        items: [
          'Tienes poco presupuesto inicial y prefieres pagar en cuotas pequeñas',
          'Estás probando una idea y no sabes si el negocio va a continuar',
          'Tu sitio es simple y estándar: pocas páginas, sin integraciones especiales',
          'Tu equipo quiere editar y publicar por su cuenta, sin intermediarios',
          'Necesitas algo publicado muy rápido y con una plantilla te alcanza',
        ],
      },
      {
        type: 'checklist',
        h2: 'Cuándo conviene el proyecto único',
        intro: 'El pago único tiene sentido cuando estos puntos pesan más para ti.',
        items: [
          'Quieres que dominio, código y accesos queden a nombre de tu empresa',
          'Piensas mantener el sitio varios años y el costo acumulado te importa',
          'Necesitas funciones, integraciones o un diseño que una plantilla no permite',
          'Te preocupa poder mudarte a otro proveedor sin empezar de cero',
          'Quieres definir el alcance por escrito y pagarlo por etapas: 50% para iniciar, 30% al aprobar el demo y 20% para publicar',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Una suscripción siempre sale más cara a largo plazo?', a: 'No podemos afirmarlo sin conocer la cuota real. La cuenta depende de X: multiplica la cuota por 12 y por 36 y compárala con el total del proyecto que te interesa. En un horizonte corto o con un sitio muy simple, la suscripción puede resultar más económica.' },
          { q: '¿Puedo empezar con una suscripción y pasar a un sitio a medida después?', a: 'Sí, es un camino común: pruebas la idea con poca inversión y migras cuando el negocio lo justifique. Al migrar, planifica las redirecciones y la migración de contenido; la <a href="/recursos/checklist-migracion-seo/">checklist de migración SEO</a> sirve para eso.' },
          { q: '¿Qué incluye la infraestructura anual de Elemento Web?', a: 'Desde $350 al año, incluye dominio, hosting cloud y certificado SSL. Hay niveles de hosting según el tráfico y las necesidades del proyecto; el detalle está en la página de precios.' },
          { q: '¿El mantenimiento es obligatorio?', a: 'No. El mantenimiento web desde $59/mes es opcional. Puedes contratarlo, o pedir trabajo puntual cuando lo necesites.' },
          { q: '¿Cómo sé si mi caso pide un sitio a medida?', a: 'Si necesitas integraciones con otros sistemas, funcionalidad propia, un diseño fuera de plantilla o control total del sitio, probablemente sí. Si tu sitio es simple y quieres editarlo tú, revisa primero una suscripción. Si no estás seguro, cuéntanos tu caso y te damos una opinión sincera.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'precios', label: 'Precios' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo web a medida' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
          { slug: 'crecimiento/hosting-infraestructura-panama', label: 'Hosting e infraestructura' },
          { slug: 'recursos/checklist-migracion-seo', label: 'Checklist de migración SEO' },
          { slug: 'blog/como-elegir-agencia-diseno-web-panama', label: 'Cómo elegir una agencia de diseño web' },
        ],
      },
      { type: 'form', h2: '¿Aún dudas entre las dos opciones?', intro: 'Cuéntanos qué necesitas. Si una suscripción te conviene más, te lo decimos.' },
    ],
    cta: { h2: '¿Hablamos de tu caso?', wa: 'Hola, leí la comparativa web a medida vs suscripción y quiero orientación para mi caso.' },
  },
];
