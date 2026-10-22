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
    heroImage: { src: '/images/blog/hosting-panama-evitar-hosting-barato.jpg', alt: 'Nube sobre un bloque de servidor, en cromo plateado, render 3D sobre fondo gris claro' },
    lead: [
      'Un hosting barato en Panamá casi nunca ahorra dinero: para vender planes de dos dólares al mes, el proveedor mete cientos de sitios en un mismo servidor y recorta soporte, respaldos y seguridad. El costo llega después, en caídas, lentitud y sitios hackeados. En Elemento Web, dominio, hosting y SSL a tu nombre parten de $350 al año.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué pagas realmente cuando contratas hosting?',
        paragraphs: [
          'El hosting es el servidor donde se guardan los archivos de tu web y desde donde se entregan a cada visitante. Cuando alguien escribe tu dirección o te encuentra en Google, su navegador le pide esos archivos al servidor. Si el servidor está saturado, lejos o mal configurado, la entrega tarda o falla.',
          'El problema del hosting barato no es el precio, sino lo que se recorta para llegar a él: cientos o miles de sitios por servidor, soporte mínimo y respaldos y seguridad recortados. Ese recorte no se nota el primer día; se nota el día que algo se rompe, normalmente cuando tienes visitas de verdad.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuáles son los riesgos del hosting barato?',
        paragraphs: [
          '<strong>Caídas.</strong> En un servidor sobrevendido, basta con que un sitio vecino reciba un pico de tráfico o un ataque para que todos se ralenticen o se caigan. Suele pasar justo cuando lanzas una promo por WhatsApp y toda tu gente entra a la vez.',
          '<strong>Lentitud.</strong> Si el servidor está saturado o lejos de tus visitantes, cada página tarda segundos de más, y Google tiene en cuenta la velocidad. En Panamá, donde mucha gente entra desde el celular con datos, esos segundos separan una consulta de una pestaña cerrada.',
          '<strong>Seguridad.</strong> Los planes baratos suelen quedarse atrás en actualizaciones y en aislamiento entre cuentas: si un sitio del servidor es hackeado, el resto queda expuesto. Un sitio comprometido puede enviar spam, mostrar publicidad ajena o quedar marcado por Google como "sitio engañoso".',
          '<strong>Soporte inexistente.</strong> El hosting ultrabarato responde con tickets automáticos, en otro idioma y con horas o días de demora. Mientras tanto, tu web sigue caída y tú pierdes llamadas.',
        ],
      },
      {
        type: 'statement',
        text: 'El hosting barato no ahorra dinero: lo pospone. Lo pagas después en ventas perdidas, en horas de estrés y a veces en rehacer el sitio entero.',
        strong: 'El hosting barato no ahorra dinero: lo pospone.',
      },
      {
        type: 'prose',
        h2: '¿Qué tipo de hosting necesita un negocio en Panamá?',
        paragraphs: [
          '<strong>Hosting compartido.</strong> Tu sitio comparte servidor con otros. Es lo más económico y, bien gestionado, sirve para una web corporativa o una landing con tráfico normal. El problema no es compartir, sino compartir un servidor sobrevendido y sin mantenimiento.',
          '<strong>Hosting gestionado.</strong> Alguien se ocupa por ti de actualizaciones, respaldos, seguridad y monitoreo. Cuesta un poco más, pero no tienes que aprender de servidores. Para la mayoría de negocios en Panamá es la opción sensata.',
          '<strong>Servidor dedicado o en la nube.</strong> El sitio tiene recursos propios. Se justifica cuando el tráfico o una tienda en línea con muchas ventas lo pagan; la mayoría de las PYME no lo necesita al arrancar. Una tienda que factura no puede vivir en el plan de dos dólares de un blog personal, pero tampoco necesita empezar sobredimensionada.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué mirar antes de contratar un hosting',
        intro: 'Si el proveedor no puede responder estos puntos con claridad, es una señal de alerta.',
        items: [
          'Respaldos automáticos diarios que se puedan restaurar de verdad (un respaldo que no se prueba no existe).',
          'Certificado SSL incluido, para que tu web cargue con candado (https) y no salga marcada como "no segura".',
          'Soporte en tu idioma y con tiempos de respuesta claros, no solo un formulario.',
          'Servidores con buena red hacia Panamá y Latinoamérica, para que el sitio cargue rápido a tu público.',
          'Actualizaciones y seguridad gestionadas, no libradas a que tú te acuerdes de hacerlas.',
          'El dominio y el hosting a nombre de tu empresa, con tus accesos: nunca en la cuenta personal de un tercero.',
        ],
      },
      {
        type: 'prose',
        h2: 'El dominio y el hosting deben estar a tu nombre',
        paragraphs: [
          'En Panamá es común que un conocido o una agencia registre el dominio y contrate el hosting en su propia cuenta "para agilizar". El día que quieres cambiar de proveedor o dejar de trabajar con esa persona, descubres que no controlas nada de lo tuyo.',
          'El dominio y el hosting deben estar registrados a nombre de tu empresa, con tus datos y tus accesos. En <a href="/nosotros/">Elemento Web</a> lo hacemos siempre así, aunque nosotros los administremos: si mañana quieres irte, te llevas todo sin pedir permiso. Más detalle en <a href="/blog/como-elegir-el-dominio-web-perfecto/">cómo elegir el dominio web perfecto</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta un hosting confiable en Panamá?',
        paragraphs: [
          'En Elemento Web la infraestructura anual (dominio, hosting y certificado SSL) parte de $350 al año, todo a nombre del cliente. Puedes sumar mantenimiento gestionado desde $99 al mes, con actualizaciones, respaldos verificados y monitoreo. El detalle está en nuestro servicio de <a href="/crecimiento/hosting-infraestructura-panama/">hosting e infraestructura en Panamá</a>.',
          'Es más que un plan de dos dólares, pero un plan barato que se cae un día de campaña puede costar más en ventas perdidas que un año de hosting serio, y rehacer un sitio hackeado cuesta más que haberlo protegido. Todo va con cotización cerrada por escrito.',
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
          { slug: 'crecimiento/hosting-infraestructura-panama', label: 'Hosting e Infraestructura' },
          { slug: 'blog/como-elegir-el-dominio-web-perfecto', label: 'Cómo elegir tu dominio' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: 'Errores comunes de diseño web' },
        
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Diseño web para contadores' },
          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Diseño web para consultoras' },
        
          { slug: 'industrias/diseno-web-agencias-aduana-zona-libre-panama', label: 'Diseño web para agencias de aduana' },
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
    heroImage: { src: '/images/blog/como-elegir-el-dominio-web-perfecto.jpg', alt: 'Globo terráqueo con su base, en cromo plateado, render 3D sobre fondo gris claro' },
    lead: [
      'Para elegir el dominio web de tu negocio en Panamá, toma el .com si está libre, o el .com.pa si tu marca es muy local o el .com ya está tomado. Que sea corto, sin guiones ni números, que se dicte por teléfono sin deletrear y que quede a nombre de tu empresa. En Elemento Web va incluido en la infraestructura desde $350 al año.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Qué es un dominio y por qué pesa tanto',
        paragraphs: [
          'Un dominio es el nombre que la gente teclea para llegar a tu web, por ejemplo tunegocio.com. Técnicamente apunta a tu hosting; para tu cliente es tu nombre en internet, el que aparece en tu tarjeta, tu Instagram y tus correos.',
          'Un dominio corto y claro facilita que te recomienden de boca en boca. Uno largo, con guiones y números, genera desconfianza y errores al escribirlo, y esos errores mandan visitas al sitio de otro.',
          'Cambiar de dominio después es costoso: pierdes posicionamiento en Google, rehaces el material impreso y reeducas a tus clientes. Conviene decidirlo bien una vez.',
        ],
      },
      {
        type: 'prose',
        h2: '¿.com o .com.pa: cuál conviene a un negocio en Panamá?',
        paragraphs: [
          'El <strong>.com</strong> es la extensión que la gente asume por defecto y se recuerda sin esfuerzo. Si tu .com está disponible y encaja con tu nombre, cómpralo; sirve igual dentro y fuera de Panamá.',
          'El <strong>.com.pa</strong> y el <strong>.pa</strong> dejan claro que eres un negocio panameño, lo que puede sumar confianza local. Son buena opción si tu .com ya está tomado o si tu negocio es marcadamente local (un restaurante, una clínica, un taller de barrio). No penalizan en Google frente a un .com; comunican algo distinto.',
          'Si el presupuesto lo permite, registra ambos y redirige uno al otro, para que nadie llegue a la versión equivocada ni un competidor se quede con ella.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo debe ser el nombre de un dominio?',
        paragraphs: [
          'La prueba más útil es el "test del teléfono": dicta el dominio en una llamada o una nota de voz de WhatsApp. Si tienes que deletrear, aclarar "con guion" o repetirlo tres veces, es demasiado complicado.',
          'Apunta a algo corto, sin guiones ni números. Evita palabras que se escriben distinto a como suenan o que confunden la ese con la ce y la be con la ve. Si tu marca tiene una grafía rara, registra también la versión "como suena".',
          'Un nombre ligado a tu marca o a lo que haces se recuerda. Uno genérico y lleno de palabras clave (tipo mejoresserviciospanama24.com) se olvida y parece spam.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Checklist para elegir el dominio web de tu negocio',
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
          'Por ahorrar tiempo, mucha gente en Panamá deja que un conocido, un primo "que sabe de computadoras" o una agencia registre el dominio en su propia cuenta. Todo va bien hasta que quieres migrar de proveedor, o esa relación se enfría, y descubres que no eres dueño de tu propio nombre.',
          'Sin acceso al dominio no puedes cambiar de hosting ni renovarlo si el tercero desaparece, y puedes perder la dirección que tus clientes ya conocen. Recuperarlo puede ser imposible o costar mucho dinero.',
          'La regla es simple e innegociable: <strong>el dominio se registra a nombre de tu empresa, con tu correo y tus accesos.</strong> En <a href="/nosotros/">Elemento Web</a> siempre entregamos el control al cliente; nosotros lo administramos si quieres, pero el dueño eres tú. El mismo principio aplica al <a href="/blog/hosting-panama-evitar-hosting-barato/">hosting</a>: tu casa digital, a tu nombre.',
        ],
      },
      {
        type: 'prose',
        h2: 'Ya tengo el dominio, ¿ahora qué?',
        paragraphs: [
          'Un dominio solo no es una web: hay que conectarlo a un hosting y montar el sitio que tus clientes van a ver.',
          'En Elemento Web el registro y la configuración del dominio van dentro de la infraestructura anual desde $350 (dominio, hosting y SSL, todo a tu nombre), y sobre eso construimos tu sitio: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 o una web corporativa, con cotización cerrada por escrito. Si dudas entre dos o tres nombres, revisamos disponibilidad y lo dejamos registrado a tu nombre el mismo día.',
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
        
          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Diseño web para consultoras' },
          { slug: 'industrias/diseno-web-seguros-corredores-panama', label: 'Diseño web para corredores de seguros' },
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
    heroImage: { src: '/images/blog/por-que-tu-negocio-necesita-una-pagina-web.jpg', alt: 'Pequeño local comercial con toldo, en cromo plateado, render 3D sobre fondo gris claro' },
    lead: [
      'Sí, tu negocio en Panamá necesita una página web propia en 2026. Las redes sociales no son tuyas y pueden suspender tu cuenta sin aviso, casi no aparecen en Google cuando alguien busca tu servicio y no dan la confianza de un sitio propio que atiende 24/7. En Elemento Web, una landing parte de $550 y una web PYME de $1,250.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Tus redes no son tuyas (y pueden desaparecer)',
        paragraphs: [
          'Tu perfil de Instagram o tu página de Facebook pertenecen a la plataforma. Ella pone las reglas, decide a cuánta gente muestra tus publicaciones y puede suspender tu cuenta sin aviso por un reporte, un error del sistema o un cambio de política.',
          'Cuando eso ocurre, pierdes de golpe seguidores, fotos, mensajes y tu única vitrina, sin nadie a quien reclamar de forma efectiva.',
          'Una página web, en cambio, es tuya: el dominio está a tu nombre, el contenido lo controlas tú y nadie decide quién la ve. Las redes sirven para atraer y conversar, pero deben apuntar a tu web.',
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
          'Cuando alguien está a punto de gastar dinero contigo, sobre todo si el monto es alto, te investiga, y un perfil con cuatro fotos no basta. Busca una web con tus servicios explicados, tus precios o rangos, tus trabajos anteriores y una forma seria de contactarte.',
          'Una página web propia separa "parece serio, le escribo" de "mejor busco otro", y pesa más cuando muestra <a href="/portafolio">trabajos reales</a>, reseñas y una identidad cuidada. En el mercado panameño, donde mucho se mueve por recomendación, la web es donde esa recomendación se confirma.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué una página web hace que tu negocio aparezca en Google?',
        paragraphs: [
          'Quien no te conoce te busca en Google: "plomero en Costa del Este", "clínica dental Chitré" o "repuestos para nevera Panamá". Las redes sociales casi no aparecen en esas búsquedas; las páginas web sí. Sin web, en esa búsqueda no existes.',
          'Ese cliente todavía no te sigue, pero tiene intención de comprar. El <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a> pone tu negocio en el mapa cuando buscan "cerca de mí", y necesita una web como base. Para profundizar, lee <a href="/blog/como-aparecer-primero-en-google-en-panama/">cómo aparecer primero en Google en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Tu vendedor que no duerme: el canal 24/7',
        paragraphs: [
          'Tu negocio tiene horario; tu web no. A las once de la noche, un domingo o mientras atiendes a otro cliente, tu página muestra tus servicios, resuelve dudas y deja que alguien te escriba por WhatsApp con un clic.',
          'Una web también integra <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas en línea</a> para que agenden solos, <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">pagos con Yappy</a> y un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con inteligencia artificial</a> que responde preguntas frecuentes cuando tú no puedes. Deja de ser un folleto digital y pasa a ser un canal que atrae, convence y convierte.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo empezar sin complicarte',
        intro: 'No necesitas el sitio más grande del país para arrancar. Necesitas uno bien hecho que ya trabaje para ti.',
        items: [
          { h3: 'Asegura tu dominio y hosting a tu nombre', text: 'La base de todo. Registramos tu dominio y montamos el hosting con SSL a nombre de tu empresa, desde $350 al año. Tú eres el dueño desde el día uno.' },
          { h3: 'Empieza por lo esencial', text: 'Una landing bien hecha desde $550 o una web PYME desde $1,250 ya te da presencia, confianza y un canal de contacto. No hace falta arrancar con todo.' },
          { h3: 'Conecta tus canales', text: 'Botón de WhatsApp, redes y ficha de Google apuntando a tu web. Así conviertes seguidores y curiosos en consultas reales.' },
          { h3: 'Crece según los resultados', text: 'Con el tiempo sumas reservas, pagos, SEO o una tienda. Escalas cuando los números lo pidan, no antes. Todo con cotización cerrada por escrito.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La web y las redes juegan en el mismo equipo',
        paragraphs: [
          'Tener web no significa abandonar tus redes. Las redes atraen, conversan y generan cercanía; la web da confianza, aparece en Google y cierra.',
          'El error es depender de un solo canal, y peor si no lo controlas. Con una web propia en el centro, tus redes tienen a dónde llevar a la gente, tu publicidad tiene dónde aterrizar y tu negocio tiene una base que no te pueden apagar. Ese es el enfoque de nuestro <a href="/diseno-web-panama/">diseño web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿No me basta con Instagram y WhatsApp?', a: 'Son excelentes para atraer y conversar, pero no aparecen en Google cuando te buscan, no dan la misma confianza al investigarte y no son tuyos: la plataforma manda. La web es la base propia que sostiene y potencia tus redes, no las reemplaza.' },
          { q: '¿Una web no es muy cara para un negocio pequeño?', a: 'Depende del alcance. Una landing bien hecha empieza en $550 y una web PYME en $1,250, con cotización cerrada por escrito. Comparado con lo que puede traerte un solo cliente que te encontró en Google, la inversión puede recuperarse rápido.' },
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
        
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Diseño web para ferreterías' },
          { slug: 'industrias/diseno-web-veterinarias-panama', label: 'Diseño web para veterinarias' },
        
          { slug: 'industrias/diseno-web-agencias-aduana-zona-libre-panama', label: 'Diseño web para agencias de aduana' },
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
    heroImage: { src: '/images/blog/como-medir-los-resultados-de-tu-pagina-web.jpg', alt: 'Gráfico circular con una porción separada, en cromo plateado, render 3D sobre fondo gris claro' },
    lead: [
      'Para medir los resultados de tu página web, cuenta conversiones (clics a WhatsApp, formularios, citas y ventas) y de qué canal llegan, no el total de visitas. Google Analytics y Search Console son gratuitos y, configurados a nombre de tu empresa, muestran cuántos clientes empezaron en tu web. En Panamá, el clic a WhatsApp suele ser la conversión clave.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Métricas de vanidad vs. métricas que pagan',
        paragraphs: [
          'Las <strong>métricas de vanidad</strong> se ven grandes pero no dicen si el negocio mejora. El total de visitas es la más típica: pueden ser miles de personas que entraron por error, no eran tu público o se fueron en dos segundos.',
          'Las <strong>métricas que importan</strong> se conectan con dinero: cuántas visitas te escribieron por WhatsApp, llenaron el formulario, agendaron o compraron. Diez visitas que generan tres consultas valen más que mil que no generan ninguna. La pregunta no es "cuánta gente entró", sino "cuánta gente hizo algo".',
        ],
      },
      {
        type: 'statement',
        text: 'Diez visitas que te escriben valen más que mil que solo pasaron. Mide acciones, no aplausos.',
        strong: 'Mide acciones, no aplausos.',
      },
      {
        type: 'prose',
        h2: '¿Qué métricas de una página web importan?',
        paragraphs: [
          '<strong>Conversiones.</strong> Una conversión es cualquier acción valiosa: un clic al botón de WhatsApp, un formulario enviado, una cita agendada, una compra. Es lo más cercano a "esta web me trajo un cliente", y el resto de métricas sirve para entender por qué suben o bajan.',
          '<strong>Origen del tráfico.</strong> Si la gente llega desde Google (búsqueda orgánica), tus redes, un anuncio o escribiendo tu dirección, cada canal rinde distinto. El origen te dice qué funciona y dónde invertir más.',
          '<strong>Páginas más vistas.</strong> Muestran qué le interesa a tu público y qué se ignora. Si tu página de servicios recibe mucho y la de precios nada, ahí hay una pista de dónde se traba la decisión.',
          '<strong>Comportamiento en el sitio.</strong> Cuánto tiempo se quedan y si navegan o se van de inmediato. Mucha gente que entra y sale al instante puede indicar que la página carga lento, no comunica claro o atrae al público equivocado.',
        ],
      },
      {
        type: 'prose',
        h2: 'Google Analytics y Search Console: tus dos herramientas base',
        paragraphs: [
          '<strong>Google Analytics</strong> mide qué pasa dentro de tu web: cuánta gente entra, de dónde viene, qué páginas ve y cuántos hacen la acción que te importa. Es gratis y, con tus conversiones marcadas (clic a WhatsApp, formulario, compra), se vuelve tu tablero de control. Sin esas conversiones, solo verás números sueltos.',
          '<strong>Google Search Console</strong>, también gratis, muestra cómo te ve Google: con qué palabras te encuentran, en qué posición apareces y cuántos hacen clic. Es la herramienta base para mejorar tu <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento SEO</a>.',
          'Search Console mide cómo llegan; Analytics, qué hacen una vez dentro. Ambas deben estar instaladas y a nombre de tu empresa desde que se publica el sitio.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo medir los clics a WhatsApp desde tu web?',
        paragraphs: [
          'En Panamá buena parte de las ventas empieza por WhatsApp, así que medir cuánta gente pasa de tu web a escribirte es de los datos más valiosos. No basta con poner el botón: hay que saber cuántos lo pulsan y desde qué página.',
          'Se configura marcando el clic al botón de WhatsApp como conversión en Google Analytics. Así sabes si la web genera conversaciones y qué página convierte más: quizá la landing de un servicio específico genera más chats que la página de inicio.',
          'Con un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbot con IA</a> o un CRM puedes medir además cuántas de esas conversaciones terminan en venta, y cerrar el recorrido completo: de la visita al chat, y del chat al cliente.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Checklist para medir los resultados de tu página web',
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
          'Medir solo sirve si cambias algo con lo que ves. Si Search Console muestra que apareces para una búsqueda pero casi nadie hace clic, el título que muestra Google no atrae y hay que mejorarlo. Si mucha gente entra y se va rápido, revisa la velocidad o la claridad de la página.',
          'La rutina es simple: revisa los datos cada mes, hazte una pregunta concreta ("¿qué canal me trae más consultas?", "¿qué página convierte peor?") y ajusta. Pequeñas mejoras sostenidas rinden más que rediseñar todo por corazonada. Para el lado de Google, sigue con <a href="/blog/como-aparecer-primero-en-google-en-panama/">esta guía para aparecer primero en Google</a>.',
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
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbots con IA' },
        
          { slug: 'industrias/diseno-web-bienes-raices-panama', label: 'Diseño web para bienes raíces' },
          { slug: 'industrias/diseno-web-gimnasios-fitness-panama', label: 'Diseño web para gimnasios' },
        
          { slug: 'industrias/diseno-web-cooperativas-financieras-panama', label: 'Diseño web para cooperativas' },
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
    heroImage: { src: '/images/blog/tendencias-de-diseno-web-2026-panama.jpg', alt: 'Prisma geométrico facetado, en cromo plateado, render 3D sobre fondo gris claro' },
    lead: [
      'Las tendencias de diseño web 2026 que sí sirven a un negocio en Panamá son cuatro: velocidad, diseño móvil primero, minimalismo funcional y accesibilidad, más IA aplicada con criterio, como chatbots que atienden 24/7. Las animaciones pesadas, las modas estéticas y la complejidad innecesaria se pueden ignorar: ralentizan el sitio en el celular y distraen del botón de WhatsApp.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La regla de oro: la tendencia sirve a tu negocio, no al revés',
        paragraphs: [
          'El diseño de tu web existe para que un cliente te encuentre, entienda qué ofreces y te contacte. Una tendencia que ayuda a eso vale la pena; una que lo estorba, aunque se vea espectacular, es un lastre.',
          'Muchos "sitios de tendencia" buscan impresionar a otros diseñadores: animaciones que marean, textos ilegibles sobre fondos de moda, cargas eternas por perseguir un efecto. Lucen en un portafolio, pero no venden.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué tendencias de diseño web 2026 valen la pena?',
        paragraphs: [
          '<strong>Velocidad ante todo.</strong> Los sitios rápidos convierten más y Google tiene en cuenta la velocidad. En 2026 el foco está en webs ligeras que cargan rápido incluso desde el celular con datos móviles, algo clave en Panamá.',
          '<strong>Móvil primero, de verdad.</strong> La mayoría de tus clientes te ve desde el teléfono, así que el diseño se piensa primero para esa pantalla y luego se adapta a la computadora. Botones cómodos para el dedo, textos legibles sin hacer zoom y el WhatsApp siempre a mano.',
          '<strong>Minimalismo funcional.</strong> Espacios en blanco, una jerarquía visual que guía el ojo y un solo mensaje por sección. No es una moda estética: es quitar lo que distrae de la acción que buscas, que te contacten.',
          '<strong>Accesibilidad.</strong> Buen contraste, textos legibles y navegación clara para que cualquiera pueda usar tu web. Beneficia a personas con dificultades visuales, al resto de visitantes y al SEO.',
        ],
      },
      {
        type: 'prose',
        h2: 'La IA en el diseño web: útil con criterio',
        paragraphs: [
          'En 2026 conviene separar el uso útil de la inteligencia artificial del humo. Aportan valor los <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">chatbots con IA</a> que responden preguntas frecuentes a cualquier hora, califican al cliente y lo pasan a WhatsApp cuando hace falta.',
          'La IA también sirve como herramienta de trabajo: agilizar textos, generar imágenes de apoyo o automatizar tareas repetidas con flujos como los de <a href="/marketing/automatizaciones-n8n-panama/">n8n</a>.',
          'No la recomendamos como truco de venta: webs generadas de golpe sin estrategia, textos genéricos que suenan a robot o "efectos de IA" que solo suman peso. La pregunta es si le sirve a tu cliente o solo suena moderno.',
        ],
      },
      {
        type: 'statement',
        text: 'La mejor tendencia de diseño web es la que tu cliente ni nota, porque simplemente encontró lo que buscaba y te escribió.',
        strong: 'La mejor tendencia es la que tu cliente ni nota.',
      },
      {
        type: 'prose',
        h2: '¿Qué tendencias de diseño web puedes ignorar?',
        paragraphs: [
          '<strong>Animaciones pesadas y efectos exagerados.</strong> Elementos que se mueven por todos lados, desplazamientos que confunden y videos de fondo que consumen datos. Marean, ralentizan el sitio y espantan al cliente que solo quería tu teléfono.',
          '<strong>Tendencias visuales puramente estéticas.</strong> Colores, texturas o efectos de moda que se verán viejos en doce meses. Un diseño limpio y atemporal envejece mejor y no te obliga a rehacerlo pronto.',
          '<strong>Complejidad porque sí.</strong> Menús rebuscados, pasos extra y "experiencias interactivas" que estorban. Cada clic o segundo de más que le pides a tu cliente es una oportunidad de que se vaya.',
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
          'En <a href="/diseno-web-panama/">Elemento Web</a> diseñamos pensando en cómo compra la gente en Panamá: desde el celular, con datos, buscando confianza y con ganas de escribir por WhatsApp. Aplicamos las tendencias que suman y descartamos las que estorban, con cotización cerrada por escrito.',
          'Si tu web se ve anticuada o está llena de efectos que no venden, quizá no necesita seguir una moda, sino un <a href="/servicios/redisenio-web-panama/">rediseño con estrategia</a>.',
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
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbots con IA' },
          { slug: 'blog/errores-comunes-diseno-web-empresas', label: 'Errores comunes de diseño web' },
        
          { slug: 'industrias/diseno-web-arquitectos-diseno-interiores-panama', label: 'Diseño web para arquitectos' },
          { slug: 'industrias/diseno-web-eventos-catering-bodas-panama', label: 'Diseño web para eventos y catering' },
        ],
      },
    ],
    cta: {
      h2: '¿Tu web sigue modas o trae clientes?',
      wa: 'Hola, quiero saber si mi página web está al día con lo que de verdad importa en 2026. ¿La revisamos?',
    },
  },
];
