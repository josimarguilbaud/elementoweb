/* BLOG (lote 6): artículos de categoría "Negocio". */
import type { PageData } from '../types';

const parent = { slug: 'blog', label: 'Blog' };

export const blog6: PageData[] = [
  /* ---------- 1. HOSTING BARATO ---------- */
  {
    slug: 'blog/hosting-panama-evitar-hosting-barato',
    parent,
    title: 'Hosting en Panamá: por qué el hosting barato te sale caro',
    description: 'Un hosting barato ahorra unos dólares al mes y cuesta caídas, lentitud y sustos de seguridad. Qué mirar al elegir hosting para tu negocio en Panamá.',
    h1: 'Hosting en Panamá: por qué el barato te sale caro',
    breadcrumb: 'Hosting barato caro',
    category: 'Negocio',
    date: '2026-07-10',
    heroImage: { src: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Servidores de un centro de datos con luces indicando actividad' },
    lead: [
      'El hosting es donde vive tu página web. Es lo que la mantiene encendida, rápida y accesible las 24 horas. Y es, casi siempre, la parte donde más gente intenta ahorrar de la manera equivocada.',
      'Ahorrar cuatro o cinco dólares al mes en hosting parece inteligente hasta el día que el sitio se cae en plena campaña, o carga tan lento que el cliente se va antes de ver tu teléfono. En esta guía te explicamos qué esconde el hosting barato y qué mirar de verdad antes de contratar.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué estás pagando realmente cuando pagas hosting',
        paragraphs: [
          'El hosting es el servidor donde se guardan los archivos de tu web y desde donde se sirven a cada visitante. Cuando alguien escribe tu dirección o te encuentra en Google, su navegador le pide esos archivos a ese servidor. Si el servidor está saturado, lejos o mal configurado, esa entrega tarda o falla. Nada de lo demás importa si esa base no es sólida.',
          'El problema del hosting barato no es el precio en sí, es lo que se recorta para llegar a ese precio. Para vender un plan de dos dólares, el proveedor mete cientos o miles de sitios en un mismo servidor, ofrece cero soporte real y recorta en respaldos y seguridad. Tú no ves ese recorte el primer día. Lo ves el día que algo se rompe.',
          'Un buen hosting es casi invisible: el sitio simplemente está siempre rápido y disponible, y nadie piensa en él. Un mal hosting se hace notar en el peor momento posible, normalmente cuando tienes visitas de verdad.',
        ],
      },
      {
        type: 'prose',
        h2: 'Los cuatro riesgos del hosting barato',
        paragraphs: [
          '<strong>Caídas.</strong> El síntoma más obvio. Cuando cientos de sitios comparten un servidor sobrevendido, basta con que uno reciba un pico de tráfico o sea atacado para que todos se ralenticen o se caigan. Tu web depende de vecinos que no elegiste. Y las caídas nunca avisan: llegan justo cuando lanzaste una promo por WhatsApp y toda tu gente entra a la vez.',
          '<strong>Lentitud.</strong> Un sitio lento espanta clientes y a Google no le gusta. Si tu servidor está saturado o físicamente lejos de tus visitantes, cada página tarda segundos de más en cargar. En Panamá, donde mucha gente entra desde el celular con datos, esos segundos son la diferencia entre una consulta y un cliente que cerró la pestaña.',
          '<strong>Seguridad.</strong> Los planes baratos suelen quedarse atrás en actualizaciones y aislamiento entre cuentas. Si un sitio del servidor es hackeado, el resto queda expuesto. Un sitio comprometido puede terminar enviando spam, mostrando publicidad ajena o, peor, marcado por Google como "sitio engañoso", lo que ahuyenta a cualquiera que te busque.',
          '<strong>Soporte inexistente.</strong> Cuando algo falla, quieres una respuesta rápida de alguien que entienda tu caso. El hosting ultrabarato responde con tickets automáticos, en otro idioma y con horas o días de demora. Mientras tanto, tu web sigue caída y tú perdiendo llamadas.',
        ],
      },
      {
        type: 'statement',
        text: 'El hosting barato no ahorra dinero: lo pospone. Lo pagas después en ventas perdidas, en horas de estrés y a veces en rehacer el sitio entero.',
        strong: 'El hosting barato no ahorra dinero: lo pospone.',
      },
      {
        type: 'prose',
        h2: 'Tipos de hosting: cuál necesita tu negocio',
        paragraphs: [
          '<strong>Hosting compartido.</strong> Tu sitio comparte un servidor con muchos otros. Es lo más económico y, bien gestionado, sirve perfectamente para una web corporativa o una landing con tráfico normal. El problema no es compartir: es compartir en un servidor sobrevendido sin límites ni mantenimiento.',
          '<strong>Hosting gestionado.</strong> Aquí alguien se ocupa por ti de las actualizaciones, los respaldos, la seguridad y el monitoreo. Pagas un poco más, pero no tienes que aprender de servidores ni estar pendiente. Para la mayoría de negocios en Panamá, esta es la opción sensata: te dedicas a vender, no a administrar tecnología.',
          '<strong>Servidor dedicado o en la nube.</strong> El sitio tiene recursos propios. Tiene sentido cuando el tráfico o la tienda en línea ya justifican el costo. La mayoría de las PYME no lo necesita al arrancar, y ofrecértelo de entrada suele ser una venta inflada. Mejor empezar bien dimensionado y escalar cuando los números lo pidan.',
          'La pregunta correcta no es "cuál es el más barato", sino "cuál soporta lo que hace mi negocio sin fallar". Una tienda que factura no puede vivir en el mismo plan de dos dólares que un blog personal.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué mirar antes de contratar un hosting',
        intro: 'Antes de pagar, revisa estos puntos. Si el proveedor no puede responderlos con claridad, es una señal.',
        items: [
          'Respaldos automáticos diarios y, sobre todo, que se puedan restaurar de verdad (un respaldo que no se prueba no existe).',
          'Certificado SSL incluido, para que tu web cargue con candado (https) y no salga marcada como "no segura".',
          'Soporte real, en tu idioma y con tiempos de respuesta claros, no solo un formulario que nadie contesta.',
          'Servidores cercanos o con buena red hacia Panamá y Latinoamérica, para que el sitio cargue rápido a tu público.',
          'Actualizaciones y seguridad gestionadas, no libradas a que tú te acuerdes de hacerlas.',
          'El dominio y el hosting a nombre de tu empresa, con tus accesos: nunca en la cuenta personal de un tercero.',
        ],
      },
      {
        type: 'prose',
        h2: 'El dominio y el hosting deben estar a tu nombre',
        paragraphs: [
          'Este punto merece su propio apartado porque es donde más negocios en Panamá quedan atrapados. Es muy común que un conocido o una agencia registre el dominio y contrate el hosting en su propia cuenta "para agilizar". El día que quieres cambiar de proveedor, actualizar el sitio o simplemente dejar de trabajar con esa persona, descubres que no controlas nada de lo tuyo.',
          'El dominio es tu identidad en internet y el hosting es tu casa. Ambos deben estar registrados a nombre de tu empresa, con tus datos y tus accesos. En <a href="/nosotros/">Elemento Web</a> lo hacemos siempre así: tú eres el dueño de tu dominio y tu hosting desde el primer día, aunque nosotros lo administremos. Si mañana quieres irte, te llevas todo sin pedir permiso.',
          'Tenemos un artículo dedicado a esto que vale la pena leer: <a href="/blog/como-elegir-el-dominio-web-perfecto/">cómo elegir el dominio web perfecto</a>. La propiedad de tus activos digitales no es un detalle técnico, es una decisión de negocio.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta un hosting que no te dé sustos',
        paragraphs: [
          'En Elemento Web manejamos la infraestructura anual (dominio, hosting y certificado SSL) desde $350 al año, todo a nombre del cliente. A eso puedes sumar mantenimiento gestionado desde $59 al mes, que incluye actualizaciones, respaldos verificados y monitoreo para que el sitio no se caiga ni envejezca.',
          'Sí, es más que un plan de dos dólares. Pero compara: un plan barato que se cae un día de campaña te puede costar más en ventas perdidas que un año entero de hosting serio. Y rehacer un sitio hackeado cuesta muchísimo más que haberlo protegido. Todo lo cerramos por escrito, con cotización cerrada, para que sepas exactamente qué pagas.',
          'Si quieres que revisemos tu hosting actual o migremos tu sitio a uno estable, escríbenos por WhatsApp. También puedes ver nuestro servicio de <a href="/crecimiento/mantenimiento-hosting-web-panama/">mantenimiento y hosting web en Panamá</a> con el detalle completo.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿El hosting barato siempre es malo?', a: 'No siempre, pero el riesgo es alto y no lo controlas tú. Hay planes económicos decentes, pero la mayoría de los ultrabaratos sobrevende servidores y recorta en soporte y seguridad. El problema es que no lo sabes hasta que falla. Preferimos pagar un poco más y dormir tranquilos.' },
          { q: '¿Puedo cambiar de hosting sin perder mi web?', a: 'Sí. Si el dominio y los archivos están a tu nombre, migrar es un proceso técnico normal que hacemos sin que tu sitio se caiga. El problema aparece cuando alguien más controla tus accesos; por eso insistimos en que todo esté a nombre de tu empresa.' },
          { q: '¿Necesito un servidor dedicado para mi negocio?', a: 'Casi nunca al arrancar. Una web corporativa o una landing funciona perfecto en hosting compartido bien gestionado. El servidor dedicado tiene sentido cuando el tráfico o una tienda en línea con muchas ventas lo justifican. Ofrecértelo de entrada suele ser sobrevender.' },
          { q: '¿El hosting afecta mi posición en Google?', a: 'Sí, indirectamente. Un sitio lento o que se cae seguido penaliza tu experiencia de usuario, y Google lo tiene en cuenta. La velocidad de carga, en la que el hosting influye mucho, es un factor real de posicionamiento. Buen hosting es también buena base para tu SEO.' },
          { q: '¿Dónde conviene que estén los servidores para Panamá?', a: 'Lo ideal es una red con buena conexión hacia Latinoamérica y Estados Unidos, que es por donde pasa el tráfico de la región. No necesitas un servidor físicamente en Panamá; necesitas uno que responda rápido a tus visitantes panameños, y eso se logra con buena infraestructura y red.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting Web' },
          { slug: 'blog/como-elegir-el-dominio-web-perfecto', label: 'Cómo elegir tu dominio' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: 'Errores comunes de diseño web' },
        ],
      },
    ],
    cta: {
      h2: '¿Tu web vive en un hosting que te da sustos?',
      wa: 'Hola, quiero que revisen mi hosting actual o migren mi sitio a uno estable. ¿Me ayudan?',
    },
  },

  /* ---------- 2. DOMINIO PERFECTO ---------- */
  {
    slug: 'blog/como-elegir-el-dominio-web-perfecto',
    parent,
    title: 'Cómo elegir el dominio web perfecto para tu negocio',
    description: 'Guía práctica para elegir el dominio de tu negocio en Panamá: .com o .com.pa, nombre corto y memorable, a nombre de tu empresa y errores que debes evitar.',
    h1: 'Cómo elegir el dominio web perfecto para tu negocio',
    breadcrumb: 'Elegir dominio web',
    category: 'Negocio',
    date: '2026-06-26',
    heroImage: { src: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Persona escribiendo una dirección web en el teclado de una laptop' },
    lead: [
      'El dominio es tu dirección en internet: eso que la gente escribe para encontrarte y que aparece en tu tarjeta, tu Instagram y tus correos. Es la primera impresión de tu marca antes de que abran siquiera tu página.',
      'Elegirlo bien parece sencillo hasta que te sientas a hacerlo y descubres que todo lo bueno "ya está tomado". En esta guía vas a decidir con criterio: qué extensión usar, cómo dar con un nombre que se recuerde y qué errores te pueden costar caro después.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es un dominio y por qué pesa tanto',
        paragraphs: [
          'Un dominio es el nombre que la gente teclea para llegar a tu web, por ejemplo tunegocio.com. Detrás hay tecnología que lo conecta con tu hosting, pero para tu cliente es simplemente tu nombre en internet. Y como todo nombre, comunica antes de que digas nada.',
          'Un dominio corto y claro transmite seriedad y facilita que te recomienden de boca en boca. Uno largo, con guiones y números, genera desconfianza y errores al escribirlo. La diferencia no es estética: es cuántas personas llegan a tu sitio en lugar de terminar en el de otro por teclear mal.',
          'Además, el dominio es un activo que te acompaña por años. Cambiarlo después es costoso: pierdes posicionamiento en Google, tienes que rehacer material impreso y reeducar a tus clientes. Vale la pena pensarlo bien una vez y quedarte con él.',
        ],
      },
      {
        type: 'prose',
        h2: '.com o .com.pa: cuál te conviene en Panamá',
        paragraphs: [
          'El <strong>.com</strong> sigue siendo el rey. Es el que la gente asume por defecto, el que se recuerda sin esfuerzo y el que da imagen de marca establecida. Si tu .com está disponible y encaja con tu nombre, cómpralo sin pensarlo mucho. Sirve igual dentro y fuera de Panamá.',
          'El <strong>.com.pa</strong> y el <strong>.pa</strong> dejan claro que eres un negocio panameño, y eso puede sumar confianza local. Son buena opción si tu .com ideal ya está tomado, o si tu negocio es marcadamente local (un restaurante, una clínica, un taller de barrio). No te penaliza en Google frente a un .com; simplemente comunica algo distinto.',
          'Nuestra recomendación práctica: si puedes, asegura el .com. Si tu marca es muy panameña o el .com no está disponible, el .com.pa es una alternativa perfectamente válida. Y si el presupuesto lo permite, registra ambos y redirige uno al otro, para que nadie llegue a la versión equivocada ni un competidor te la quite.',
        ],
      },
      {
        type: 'prose',
        h2: 'Un nombre corto, claro y fácil de dictar',
        paragraphs: [
          'La mejor prueba para un dominio es el "test del teléfono": imagina que se lo dictas a alguien por WhatsApp o en una llamada. Si tienes que deletrear, aclarar "con guion" o repetir tres veces, el nombre es demasiado complicado. El dominio ideal se entiende a la primera.',
          'Apunta a algo corto, sin guiones y sin números. Evita las palabras que se escriben distinto a como suenan o que se prestan a confusión entre la ese y la ce, la be y la ve. Si tu marca tiene una grafía rara, considera registrar también la versión "como suena" para no perder a quien la escriba de oído.',
          'Que sea fácil de recordar importa tanto como que sea fácil de escribir. Un nombre con significado, ligado a lo que haces o a tu marca, se queda en la cabeza. Uno genérico y lleno de palabras clave (tipo mejoresserviciospanama24.com) se olvida y, encima, huele a spam.',
        ],
      },
      {
        type: 'statement',
        text: 'Si no puedes dictar tu dominio por teléfono sin deletrearlo, todavía no es el correcto.',
        strong: 'Si no puedes dictar tu dominio por teléfono sin deletrearlo, todavía no es el correcto.',
      },
      {
        type: 'checklist',
        h2: 'Checklist para elegir tu dominio',
        intro: 'Antes de registrar, pásalo por esta lista. Si cumple la mayoría, vas bien encaminado.',
        items: [
          'Es corto y se entiende a la primera al dictarlo en voz alta.',
          'No lleva guiones ni números que la gente olvide o escriba mal.',
          'Se relaciona con tu marca o con lo que haces, no es genérico ni forzado.',
          'La extensión encaja con tu negocio: .com para marca amplia, .com.pa o .pa para negocio local.',
          'Revisaste que el nombre no esté ya usado como marca registrada por otra empresa.',
          'Verificaste que el usuario esté libre en Instagram, Facebook y WhatsApp Business para mantener coherencia.',
          'Se registrará a nombre de tu empresa, con tus datos y tus accesos.',
        ],
      },
      {
        type: 'prose',
        h2: 'El error más caro: que el dominio no esté a tu nombre',
        paragraphs: [
          'Este es el error que más dolores de cabeza causa en Panamá. Por ahorrar tiempo, mucha gente deja que un conocido, un primo "que sabe de computadoras" o una agencia registre el dominio en su propia cuenta. Todo va bien hasta que quieres migrar de proveedor, o esa relación se enfría, y descubres que no eres dueño de tu propio nombre.',
          'Sin acceso al dominio no puedes cambiar de hosting, no puedes renovarlo si el tercero desaparece, y en el peor caso pierdes la dirección que tus clientes ya conocen. Recuperarlo puede ser imposible o costar mucho dinero. Es un secuestro silencioso que se descubre demasiado tarde.',
          'La regla es simple e innegociable: <strong>el dominio se registra a nombre de tu empresa, con tu correo y tus accesos.</strong> En <a href="/nosotros/">Elemento Web</a> siempre entregamos el control al cliente; nosotros lo administramos si quieres, pero el dueño eres tú. El mismo principio aplica al <a href="/blog/hosting-panama-evitar-hosting-barato/">hosting</a>: tu casa digital, a tu nombre.',
        ],
      },
      {
        type: 'prose',
        h2: 'Ya tengo el dominio, ¿ahora qué?',
        paragraphs: [
          'Registrar el dominio es el primer paso, pero un dominio solo no es una web. Necesitas conectarlo a un hosting y montar el sitio que tus clientes van a ver. Si ya tienes claro tu nombre, el siguiente movimiento natural es diseñar la página que vive en esa dirección.',
          'En Elemento Web incluimos el registro y la configuración del dominio dentro de la infraestructura anual desde $350 (dominio, hosting y SSL, todo a tu nombre), y sobre eso construimos tu sitio. Puedes empezar por una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 o una web corporativa. Todo con cotización cerrada por escrito.',
          'Si aún dudas entre dos o tres nombres, escríbenos por WhatsApp con tus opciones y te ayudamos a decidir, revisamos disponibilidad y lo dejamos registrado a tu nombre el mismo día.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Es mejor .com o .com.pa para un negocio panameño?', a: 'Si tu .com está libre, tómalo: es el que la gente asume por defecto. El .com.pa es excelente cuando tu marca es muy local o el .com ya está tomado. Ninguno te penaliza en Google; comunican cosas distintas. Si el presupuesto alcanza, registra ambos.' },
          { q: '¿Puedo cambiar de dominio más adelante?', a: 'Se puede, pero cuesta. Pierdes parte del posicionamiento que ganaste en Google, tienes que reimprimir material y reeducar a tus clientes. Por eso conviene elegir bien de una vez en lugar de "probar" con un nombre provisional.' },
          { q: '¿Debo incluir palabras clave en el dominio?', a: 'No a la fuerza. Antes ayudaba al SEO; hoy Google le da poco peso y los nombres llenos de palabras clave parecen spam. Prioriza que sea corto, memorable y ligado a tu marca. Las palabras clave las trabajas en el contenido, no en el dominio.' },
          { q: '¿Cuánto cuesta un dominio en Panamá?', a: 'El registro anual es económico y varía según la extensión. En Elemento Web va incluido en la infraestructura anual desde $350, junto con hosting y certificado SSL, todo a nombre de tu empresa. Te lo cerramos por escrito para que no haya sorpresas.' },
          { q: '¿Qué pasa si el dominio que quiero ya está tomado?', a: 'Tienes opciones: probar con .com.pa o .pa, ajustar el nombre sin volverlo raro, o sumar una palabra corta que aporte sentido. Lo que no recomendamos es meter guiones o números para forzarlo, porque complican que la gente lo recuerde y lo escriba.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/hosting-panama-evitar-hosting-barato', label: 'Hosting barato te sale caro' },
          { slug: 'blog/por-que-tu-negocio-necesita-una-pagina-web', label: 'Por qué necesitas una web' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing Pages' },
        ],
      },
    ],
    cta: {
      h2: '¿Tienes un nombre en mente? Lo dejamos a tu nombre hoy',
      wa: 'Hola, tengo unas ideas de dominio para mi negocio y quiero registrarlas a mi nombre. ¿Me ayudan a elegir?',
    },
  },

  /* ---------- 3. NECESITAS UNA WEB ---------- */
  {
    slug: 'blog/por-que-tu-negocio-necesita-una-pagina-web',
    parent,
    title: 'Por qué tu negocio en Panamá necesita una web en 2026',
    description: 'Las redes sociales no son tuyas y no bastan. Descubre por qué tu negocio en Panamá necesita una página web propia en 2026: confianza, Google y ventas 24/7.',
    h1: 'Por qué tu negocio en Panamá necesita una web en 2026',
    breadcrumb: 'Necesitas una web',
    category: 'Negocio',
    date: '2026-06-12',
    heroImage: { src: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Dueño de un pequeño negocio revisando su sitio web en una tablet' },
    lead: [
      '"Yo con mi Instagram tengo suficiente." Lo escuchamos todo el tiempo, y se entiende: las redes son gratis, rápidas y ahí está tu gente. Pero construir tu negocio solo sobre redes es levantar tu casa en un terreno alquilado.',
      'En 2026, una página web propia dejó de ser un lujo para volverse la base sobre la que se apoya todo lo demás. En este artículo te explicamos, sin humo, por qué tu negocio en Panamá la necesita y qué te da que las redes, por diseño, no pueden darte.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Tus redes no son tuyas (y pueden desaparecer)',
        paragraphs: [
          'Tu perfil de Instagram o tu página de Facebook no te pertenecen: son de la plataforma. Ellos ponen las reglas, deciden a cuánta gente le muestran tus publicaciones y pueden suspender tu cuenta sin previo aviso por un reporte, un error del sistema o un cambio de política. Le ha pasado a negocios serios de la noche a la mañana.',
          'Cuando eso ocurre, pierdes de golpe tus seguidores, tus fotos, tus mensajes y tu única vitrina. No hay a quién reclamarle de forma efectiva. Todo lo que construiste durante años vive en una cuenta que no controlas y que te pueden apagar.',
          'Una página web, en cambio, es tuya. El dominio está a tu nombre, el contenido lo controlas tú y nadie decide por ti quién la ve. Las redes son fantásticas para atraer y conversar, pero deben apuntar a un lugar que sí sea tu propiedad: tu web.',
        ],
      },
      {
        type: 'statement',
        text: 'Construir tu negocio solo en redes es levantar tu casa en terreno alquilado: el dueño puede pedirte que te vayas cuando quiera.',
        strong: 'Construir tu negocio solo en redes es levantar tu casa en terreno alquilado.',
      },
      {
        type: 'prose',
        h2: 'La web da la confianza que las redes no alcanzan',
        paragraphs: [
          'Cuando alguien está a punto de gastar dinero contigo, especialmente si el monto es alto, te investiga. Y un perfil de redes con cuatro fotos no basta para convencerlo. La gente busca una web: quiere ver tus servicios explicados, tus precios o rangos, tus trabajos anteriores y una forma seria de contactarte.',
          'Una página web propia proyecta que eres un negocio establecido, no alguien que improvisa desde el celular. Ese detalle marca la diferencia entre "parece serio, le escribo" y "mmm, no sé, mejor busco otro". La web es tu carta de presentación trabajando por ti las 24 horas.',
          'Ese efecto se multiplica cuando muestras <a href="/portafolio">trabajos reales</a>, reseñas y una identidad cuidada. En un mercado como el panameño, donde mucho se mueve por confianza y recomendación, tener dónde respaldar esa recomendación con una web sólida cierra ventas que de otro modo se enfrían.',
        ],
      },
      {
        type: 'prose',
        h2: 'Que te encuentren en Google cuando te buscan',
        paragraphs: [
          'Piensa en cómo buscas tú un servicio que no conoces: abres Google y escribes "plomero en Costa del Este", "clínica dental Chitré" o "repuestos para nevera Panamá". Miles de personas hacen exactamente eso cada día buscando lo que tú vendes. Si no tienes web, en esa búsqueda no existes.',
          'Las redes sociales casi no aparecen en Google para esas búsquedas; las páginas web sí. Tener un sitio bien hecho te da la oportunidad de aparecer justo cuando alguien tiene la intención de comprar, que es el mejor momento posible. Ese cliente no te sigue todavía, no te conoce: te está buscando, y quieres estar ahí.',
          'Esto se potencia con el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>, que pone tu negocio en el mapa cuando buscan "cerca de mí". Sin una web como base, esa maquinaria de encontrabilidad simplemente no arranca. Si quieres profundizar, lee <a href="/blog/como-aparecer-primero-en-google-en-panama/">cómo aparecer primero en Google en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Tu vendedor que no duerme: el canal 24/7',
        paragraphs: [
          'Tu negocio tiene horario; tu web no. A las once de la noche, un domingo o mientras atiendes a otro cliente, tu página sigue mostrando tus servicios, resolviendo dudas y dejando que alguien te escriba por WhatsApp con un clic. Cada visita es una oportunidad que no tuviste que atender en persona.',
          'Y puedes ir más allá de la vitrina estática. Una web hoy integra botón de WhatsApp, <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas en línea</a> para que agenden solos, <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">pagos con Yappy</a> y hasta un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con inteligencia artificial</a> que responde preguntas frecuentes cuando tú no puedes. Tu web trabaja mientras tú descansas.',
          'Ese es el salto de mentalidad: la web no es un folleto digital que se cuelga y se olvida, es un canal activo que atrae, convence y convierte todos los días. Para muchos negocios en Panamá es, de hecho, su mejor vendedor.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo empezar sin complicarte',
        intro: 'No necesitas el sitio más grande del país para arrancar. Necesitas uno bien hecho que ya trabaje para ti.',
        items: [
          { h3: 'Asegura tu dominio y hosting a tu nombre', text: 'La base de todo. Registramos tu dominio y montamos el hosting con SSL a nombre de tu empresa, desde $350 al año. Tú eres el dueño desde el día uno.' },
          { h3: 'Empieza por lo esencial', text: 'Una landing bien hecha desde $550 o una web PYME desde $950 ya te da presencia, confianza y un canal de contacto. No hace falta arrancar con todo.' },
          { h3: 'Conecta tus canales', text: 'Botón de WhatsApp, redes y ficha de Google apuntando a tu web. Así conviertes seguidores y curiosos en consultas reales.' },
          { h3: 'Crece según los resultados', text: 'Con el tiempo sumas reservas, pagos, SEO o una tienda. Escalas cuando los números lo pidan, no antes. Todo con cotización cerrada por escrito.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La web y las redes juegan en el mismo equipo',
        paragraphs: [
          'Nada de esto significa abandonar tus redes. Al contrario: la web y las redes se potencian. Las redes atraen, conversan y generan cercanía; la web da confianza, aparece en Google y cierra. Trabajan mejor juntas que separadas.',
          'El error es depender de un solo canal, y peor si es uno que no controlas. Con una web propia en el centro, tus redes tienen a dónde llevar a la gente, tu publicidad tiene dónde aterrizar y tu negocio tiene una base que no te pueden apagar. Conoce nuestro enfoque de <a href="/diseno-web-panama/">diseño web en Panamá</a> pensado exactamente para eso.',
          'Si llevas tiempo diciendo "algún día hago mi web", 2026 es el año. Escríbenos por WhatsApp y conversamos tu caso sin compromiso; te decimos con honestidad por dónde te conviene empezar.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿No me basta con Instagram y WhatsApp?', a: 'Son excelentes para atraer y conversar, pero no aparecen en Google cuando te buscan, no dan la misma confianza al investigarte y no son tuyos: la plataforma manda. La web es la base propia que sostiene y potencia tus redes, no las reemplaza.' },
          { q: '¿Una web no es muy cara para un negocio pequeño?', a: 'Depende del alcance. Una landing bien hecha empieza en $550 y una web PYME en $950, con cotización cerrada por escrito. Comparado con lo que puede traerte un solo cliente que te encontró en Google, la inversión se paga sola.' },
          { q: '¿Cuánto tarda en dar resultados una página web?', a: 'Como canal de confianza y contacto, funciona desde el día que se publica. En Google, aparecer para búsquedas competidas toma tiempo y trabajo de SEO; el SEO local suele dar señales más rápido. Lo importante es que la base ya está trabajando por ti.' },
          { q: '¿Puedo tener web sin saber de tecnología?', a: 'Sí. Nosotros nos encargamos del dominio, el hosting, el diseño y el mantenimiento. Tú te dedicas a tu negocio. Y todo queda a nombre de tu empresa, así que siempre eres el dueño aunque no toques la parte técnica.' },
          { q: '¿Qué pasa si ya tengo muchos seguidores en redes?', a: 'Mejor todavía: una web te da dónde convertir esos seguidores en clientes. Diriges tu tráfico de redes a un sitio que sí es tuyo, con más información, más confianza y herramientas para agendar, pagar o contactarte. Aprovechas lo que ya construiste.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'diseno-web-panama', label: 'Diseño Web en Panamá' },
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Aparecer primero en Google' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Cuánto cuesta una web' },
        ],
      },
    ],
    cta: {
      h2: 'Que tu negocio deje de vivir en terreno alquilado',
      wa: 'Hola, quiero llevar mi negocio a una página web propia. ¿Por dónde me conviene empezar?',
    },
  },

  /* ---------- 4. MEDIR RESULTADOS ---------- */
  {
    slug: 'blog/como-medir-los-resultados-de-tu-pagina-web',
    parent,
    title: 'Cómo medir los resultados de tu página web: qué importa',
    description: 'Deja las métricas de vanidad. Aprende a medir lo que de verdad importa en tu web: visitas útiles, origen del tráfico, conversiones y clics a WhatsApp en Panamá.',
    h1: 'Cómo medir los resultados de tu página web',
    breadcrumb: 'Medir tu web',
    category: 'Negocio',
    date: '2026-05-29',
    heroImage: { src: 'https://images.unsplash.com/photo-1432821596592-e2c18b78144f?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Panel de analítica web con gráficos de visitas y conversiones en pantalla' },
    lead: [
      'Tienes tu página web publicada. Bien. Ahora viene la pregunta que casi nadie sabe responder con números: ¿está funcionando? ¿Te trae clientes o solo se ve bonita?',
      'La buena noticia es que una web se puede medir con precisión, a diferencia de un anuncio en radio o un volante. La mala es que la mayoría mira los datos equivocados y se emociona con cifras que no pagan facturas. En esta guía separamos las métricas que importan de las que solo alimentan el ego.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Métricas de vanidad vs. métricas que pagan',
        paragraphs: [
          'Las <strong>métricas de vanidad</strong> son las que se ven grandes y hacen sentir bien, pero no te dicen si el negocio mejora. El total de visitas por sí solo es la más típica: puedes tener miles de visitas de gente que entró por error, no era tu público o se fue en dos segundos. Un número alto no es lo mismo que un buen resultado.',
          'Las <strong>métricas que importan</strong> se conectan con dinero: ¿cuántas de esas visitas te escribieron por WhatsApp, llenaron el formulario, agendaron o compraron? Diez visitas que generan tres consultas valen más que mil que no generan ninguna. La pregunta correcta nunca es "cuánta gente entró", sino "cuánta gente hizo algo".',
          'Cambiar de mentalidad es el primer paso. Deja de perseguir el número grande y empieza a perseguir la acción: contacto, reserva, venta. Todo lo demás es contexto para entender por qué esas acciones suben o bajan.',
        ],
      },
      {
        type: 'statement',
        text: 'Diez visitas que te escriben valen más que mil que solo pasaron. Mide acciones, no aplausos.',
        strong: 'Mide acciones, no aplausos.',
      },
      {
        type: 'prose',
        h2: 'Las métricas que de verdad importan',
        paragraphs: [
          '<strong>Conversiones.</strong> La reina. Una conversión es cualquier acción valiosa: un clic al botón de WhatsApp, un formulario enviado, una cita agendada, una compra. Es lo más cercano a "esta web me trajo un cliente". Todo lo que midas debe apuntar, al final, a entender y aumentar estas conversiones.',
          '<strong>Origen del tráfico.</strong> Saber de dónde llega tu gente lo cambia todo. ¿Vienen de Google (búsqueda orgánica), de tus redes, de un anuncio o escribiendo tu dirección directamente? Esto te dice qué canal funciona y dónde vale la pena invertir más. Sin origen, estás midiendo a ciegas.',
          '<strong>Páginas más vistas.</strong> Te muestran qué le interesa a tu público y qué se ignora. Si tu página de servicios recibe mucho y la de precios nada, tienes una pista de dónde se traba la decisión. Los datos te señalan qué mejorar.',
          '<strong>Comportamiento en el sitio.</strong> Cuánto tiempo se quedan y si navegan o se van de inmediato. Un porcentaje alto de gente que entra y sale al instante puede indicar que la página carga lento, no comunica claro o atrae al público equivocado. Es una señal, no una condena: te dice dónde mirar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Google Analytics y Search Console: tus dos herramientas base',
        paragraphs: [
          '<strong>Google Analytics</strong> te dice qué pasa dentro de tu web: cuánta gente entra, de dónde viene, qué páginas ve y cuántos hacen la acción que te importa. Es gratis y, bien configurado con tus conversiones marcadas (clic a WhatsApp, formulario, compra), se vuelve tu tablero de control. Sin configurar esas conversiones, solo verás números sueltos.',
          '<strong>Google Search Console</strong>, también gratis, te muestra cómo te ve Google: con qué palabras te encuentra la gente, en qué posición apareces y cuántos hacen clic. Es la herramienta clave para entender y mejorar tu <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento SEO</a>. Analytics mide a los que ya entraron; Search Console mide cómo llegan.',
          'Las dos juntas te dan la foto completa: Search Console te dice cómo te encuentran, Analytics qué hacen una vez dentro. Ambas deben estar instaladas y a nombre de tu empresa desde que se publica el sitio. Si tu web no las tiene, estás manejando sin tablero.',
        ],
      },
      {
        type: 'prose',
        h2: 'Medir el WhatsApp: la conversión clave en Panamá',
        paragraphs: [
          'En Panamá, buena parte de las ventas empiezan por WhatsApp, así que medir cuánta gente pasa de tu web a escribirte es de las métricas más valiosas que tienes. No basta con poner el botón: hay que saber cuántos lo pulsan y desde qué página lo hacen.',
          'Esto se configura marcando el clic al botón de WhatsApp como una conversión en Analytics. Así sabes si tu web realmente está generando conversaciones o solo visitas que no llaman. Y descubres qué página convierte mejor: quizá tu landing de un servicio específico genera más chats que la página de inicio, y eso te dice dónde poner el foco.',
          'Si además usas un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbot con IA</a> o un CRM, puedes ir más allá y medir cuántas de esas conversaciones terminan en venta. Ahí cierras el círculo completo: de la visita al chat, y del chat al cliente. Ese es el dato que de verdad manda.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Checklist de medición para tu web',
        intro: 'Si tu web cumple estos puntos, estás midiendo con criterio y no a ciegas.',
        items: [
          'Google Analytics instalado y a nombre de tu empresa desde el primer día.',
          'Google Search Console verificado para ver cómo te encuentra Google.',
          'El clic al botón de WhatsApp marcado como conversión, no solo como botón.',
          'Los formularios y reservas configurados como conversiones medibles.',
          'Sabes de dónde viene tu tráfico: Google, redes, anuncios o directo.',
          'Revisas los datos con una pregunta clara ("¿esto me trae clientes?"), no por mirar números.',
          'Si vendes en línea, mides ventas y de qué canal viene cada una.',
        ],
      },
      {
        type: 'prose',
        h2: 'De los números a las decisiones',
        paragraphs: [
          'Medir no sirve de nada si no cambias algo con lo que ves. El valor de los datos está en las decisiones que provocan. Si Search Console te dice que apareces para una búsqueda pero casi nadie hace clic, quizá tu título en Google no atrae y hay que mejorarlo. Si mucha gente entra y se va rápido, tal vez la página carga lento o no comunica claro.',
          'La rutina sana es simple: revisa tus datos con una periodicidad razonable, hazte una pregunta concreta ("¿qué canal me trae más consultas?", "¿qué página convierte peor?") y ajusta. Pequeñas mejoras sostenidas rinden mucho más que rediseñar todo por corazonada. Los números te dicen dónde, tú decides el qué.',
          'Si te abruma configurar todo esto o interpretarlo, es normal: por eso lo incluimos y lo explicamos en un lenguaje que un dueño entiende. Escríbenos por WhatsApp y revisamos si tu web está midiendo lo correcto, o si lleva meses ciega. También te puede servir <a href="/blog/como-aparecer-primero-en-google-en-panama/">esta guía para aparecer primero en Google</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuál es la métrica más importante de una web?', a: 'Las conversiones: las acciones que valen dinero, como un clic a WhatsApp, un formulario o una compra. El total de visitas es secundario. Prefiere pocas visitas que te escriben antes que muchas que solo pasan y se van sin hacer nada.' },
          { q: '¿Google Analytics es gratis?', a: 'Sí, tanto Google Analytics como Search Console son gratuitos. Lo que marca la diferencia es configurarlos bien: instalarlos, marcar tus conversiones (WhatsApp, formularios, ventas) y a nombre de tu empresa. Sin esa configuración, solo verás números sueltos que no dicen mucho.' },
          { q: '¿Cada cuánto debo revisar los datos de mi web?', a: 'Para la mayoría de negocios, una revisión mensual con una pregunta clara es suficiente. Mirar los números todos los días genera ansiedad y decisiones apresuradas. Lo importante no es la frecuencia, sino que cada revisión termine en un ajuste concreto.' },
          { q: '¿Cómo sé si mi web me trae clientes de verdad?', a: 'Midiendo las conversiones: cuántas visitas terminan en un chat de WhatsApp, un formulario o una compra. Si eso está bien configurado, puedes decir con números cuántos clientes empezaron su recorrido en tu web, en lugar de suponerlo.' },
          { q: '¿Qué es una métrica de vanidad?', a: 'Es un número que se ve grande y hace sentir bien pero no indica si el negocio mejora, como el total de visitas o los seguidores. Suben el ego pero no las ventas. Conviene mirarlas de reojo y concentrarte en las acciones que sí generan clientes.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'blog/como-aparecer-primero-en-google-en-panama', label: 'Aparecer primero en Google' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbots con IA' },
        ],
      },
    ],
    cta: {
      h2: '¿Tu web mide lo que importa o está a ciegas?',
      wa: 'Hola, quiero saber si mi página web está midiendo bien sus resultados. ¿Me ayudan a revisarlo?',
    },
  },

  /* ---------- 5. TENDENCIAS 2026 ---------- */
  {
    slug: 'blog/tendencias-de-diseno-web-2026-panama',
    parent,
    title: 'Tendencias de diseño web 2026 para negocios en Panamá',
    description: 'Las tendencias de diseño web 2026 que sí valen para tu negocio en Panamá: velocidad, IA con criterio, móvil primero y accesibilidad. Y cuáles ignorar sin culpa.',
    h1: 'Tendencias de diseño web 2026 para negocios en Panamá',
    breadcrumb: 'Tendencias 2026',
    category: 'Negocio',
    date: '2026-05-15',
    heroImage: { src: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=1600&h=1000&q=80&auto=format&fit=crop', alt: 'Pantallas mostrando interfaces de diseño web moderno y limpio' },
    lead: [
      'Cada año aparece una nueva lista de tendencias de diseño web, y cada año hay negocios que gastan dinero persiguiendo modas que no les sirven de nada. Lo llamativo no siempre vende, y muchas veces estorba.',
      'Este artículo es distinto. En lugar de listar efectos de moda, separamos las tendencias 2026 que de verdad ayudan a tu negocio en Panamá de las que puedes ignorar con total tranquilidad. Diseño con criterio, no diseño para ganar premios que nadie te va a dar.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La regla de oro: la tendencia sirve a tu negocio, no al revés',
        paragraphs: [
          'Antes de cualquier tendencia, un principio: el diseño de tu web existe para que un cliente te encuentre, entienda qué ofreces y te contacte. Punto. Toda moda que ayude a eso vale la pena; toda moda que lo estorbe, aunque se vea espectacular, es un lastre.',
          'Muchos "sitios de tendencia" priorizan impresionar a otros diseñadores por encima de servir al dueño del negocio. Animaciones que marean, textos ilegibles sobre fondos de moda, cargas eternas por perseguir un efecto. Se ven en un portafolio, no venden en la vida real.',
          'Con ese filtro en mente, veamos qué tendencias de 2026 pasan la prueba de "¿esto me trae clientes?" y cuáles no. Spoiler: las mejores tendencias suelen ser las menos llamativas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Tendencias que sí valen la pena en 2026',
        paragraphs: [
          '<strong>Velocidad ante todo.</strong> No es glamorosa, pero es la tendencia más rentable. Los sitios rápidos convierten más y Google los prefiere. En 2026 el foco está en webs ligeras que cargan al instante, incluso desde el celular con datos móviles, algo clave en Panamá. Un sitio que carga rápido le gana a uno bonito que tarda, siempre.',
          '<strong>Móvil primero, de verdad.</strong> La mayoría de tus clientes te ve desde el teléfono, así que el diseño se piensa primero para esa pantalla y luego se adapta a la computadora, no al revés. Botones cómodos para el dedo, textos legibles sin hacer zoom y el WhatsApp siempre a mano. Esto dejó de ser tendencia para ser obligación.',
          '<strong>Minimalismo funcional.</strong> Menos ruido, más claridad. Espacios en blanco, una jerarquía visual que guía el ojo y un solo mensaje claro por sección. No es minimalismo por moda estética, es quitar todo lo que distrae de la acción que quieres: que te contacten. Lo simple, bien hecho, convierte.',
          '<strong>Accesibilidad.</strong> Diseñar para que todos puedan usar tu web: buen contraste, textos legibles, navegación clara. Beneficia a personas con dificultades visuales y, de paso, a todos los demás y al SEO. En 2026 es tanto una buena práctica como una ventaja competitiva silenciosa.',
        ],
      },
      {
        type: 'prose',
        h2: 'La IA en el diseño web: útil con criterio',
        paragraphs: [
          'La inteligencia artificial es la gran protagonista de 2026, pero conviene separar el uso útil del humo. Lo que sí aporta valor real a tu negocio son los <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">chatbots con IA</a> que responden preguntas frecuentes a cualquier hora, califican al cliente y lo pasan a WhatsApp cuando hace falta. Eso es la IA trabajando para ti mientras duermes.',
          'También ayuda la IA como herramienta de trabajo interno: para agilizar textos, generar imágenes de apoyo o automatizar tareas repetidas con flujos como los de <a href="/marketing/automatizaciones-n8n-panama/">n8n</a>. Bien usada, te ahorra horas y hace tu operación más ágil.',
          'Lo que no recomendamos es la IA como truco de venta vacío: webs generadas de golpe sin estrategia, textos genéricos que suenan a robot o "efectos de IA" que solo suman peso y confunden. La pregunta de siempre: ¿esto le sirve a mi cliente o solo suena moderno? Si es lo segundo, sáltalo.',
        ],
      },
      {
        type: 'statement',
        text: 'La mejor tendencia de diseño web es la que tu cliente ni nota, porque simplemente encontró lo que buscaba y te escribió.',
        strong: 'La mejor tendencia es la que tu cliente ni nota.',
      },
      {
        type: 'prose',
        h2: 'Tendencias que puedes ignorar sin culpa',
        paragraphs: [
          '<strong>Animaciones pesadas y efectos exagerados.</strong> Elementos que se mueven por todos lados, desplazamientos raros que confunden, videos de fondo que devoran datos. Se ven "modernos" un segundo y luego marean, ralentizan el sitio y espantan al cliente que solo quería tu teléfono. Lo llamativo no es lo mismo que lo efectivo.',
          '<strong>Tendencias visuales puramente estéticas.</strong> Cada año hay un estilo de moda: colores, texturas o efectos que serán viejos en doce meses. Si construyes tu web alrededor de una moda pasajera, en un año se verá anticuada. Mejor un diseño limpio y atemporal que envejezca bien y no te obligue a rehacerlo pronto.',
          '<strong>Complejidad porque sí.</strong> Menús rebuscados, pasos extra, "experiencias interactivas" que estorban. Cada clic o segundo de más que le pides a tu cliente es una oportunidad de que se vaya. La simplicidad casi siempre le gana a la sofisticación cuando el objetivo es vender.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Cómo aplicar tendencias con criterio',
        intro: 'Antes de sumar cualquier moda a tu web, pásala por este filtro honesto.',
        items: [
          '¿Ayuda a que carguen más rápido o solo suma peso? Si suma peso, descártala.',
          '¿Se ve y funciona bien en el celular? Si no, no importa lo linda que sea en computadora.',
          '¿Acerca al cliente a contactarte o lo distrae del botón de WhatsApp?',
          '¿La entenderá cualquier persona o solo un diseñador la aprecia?',
          '¿Seguirá viéndose bien en dos o tres años, o pasará de moda pronto?',
          '¿Resuelve un problema real de tu negocio o solo suena moderno en una reunión?',
        ],
      },
      {
        type: 'prose',
        h2: 'Diseño con criterio, hecho para el mercado panameño',
        paragraphs: [
          'La conclusión de 2026 es la misma de siempre, solo que más clara: las mejores tendencias son las que sirven a tu cliente, no las que impresionan a otros diseñadores. Velocidad, móvil primero, claridad, accesibilidad y una pizca de IA bien usada. Lo demás, con pinzas.',
          'En <a href="/diseno-web-panama/">Elemento Web</a> diseñamos con ese criterio, pensando en cómo compra la gente en Panamá: desde el celular, con datos, buscando confianza y con ganas de escribir por WhatsApp. Aplicamos las tendencias que suman y descartamos las que solo estorban, con cotización cerrada por escrito para que sepas exactamente qué pagas.',
          'Si tu web se ve anticuada o está llena de efectos que no venden, quizá no necesita seguir una moda, sino un <a href="/servicios/redisenio-web-panama/">rediseño con estrategia</a>. Escríbenos por WhatsApp y conversamos qué conviene a tu negocio, sin humo ni tendencias por tendencia.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Debo seguir todas las tendencias de diseño web?', a: 'No. La mayoría de tendencias son estéticas y pasajeras. Sigue solo las que ayudan a tu negocio: velocidad, diseño móvil, claridad y accesibilidad. Perseguir cada moda te hace gastar dinero en rehacer tu web cada año sin que eso te traiga más clientes.' },
          { q: '¿La inteligencia artificial mejora mi página web?', a: 'Sí, cuando se usa con criterio. Un chatbot con IA que atiende y filtra consultas 24/7 aporta valor real. La IA como truco de venta vacío o efectos que solo suman peso, no. La pregunta es siempre si le sirve a tu cliente o solo suena moderno.' },
          { q: '¿Las animaciones hacen que mi web se vea mejor?', a: 'Con moderación pueden ayudar, pero las animaciones pesadas ralentizan el sitio y distraen. En Panamá, donde mucha gente entra desde el celular con datos, un sitio recargado espanta clientes. Casi siempre gana la simplicidad rápida sobre el efecto llamativo.' },
          { q: '¿Cada cuánto debo rediseñar mi web para estar al día?', a: 'Si tu web es rápida, clara y funciona bien en el celular, puede durar años sin verse vieja. El rediseño se justifica cuando cambia tu negocio, cuando la web ya no convierte o cuando la tecnología quedó atrás, no por seguir una moda anual.' },
          { q: '¿Qué es lo más importante en el diseño web en 2026?', a: 'Que tu web cargue rápido, se vea perfecta en el celular y guíe al cliente a contactarte sin distracciones. Esas bases valen más que cualquier efecto de moda. Un diseño limpio y veloz le gana siempre a uno espectacular pero lento y confuso.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web en Panamá' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbots con IA' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: 'Errores comunes de diseño web' },
        ],
      },
    ],
    cta: {
      h2: '¿Tu web sigue modas o trae clientes?',
      wa: 'Hola, quiero saber si mi página web está al día con lo que de verdad importa en 2026. ¿La revisamos?',
    },
  },
];
