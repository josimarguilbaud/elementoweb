/* BLOG — Lote 21: guía long-form sobre diseño web para salones de belleza y spas en Panamá.
   PageData con parent { slug: 'blog' }; el listado /blog la recoge por fecha y categoría.
   Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog21: PageData[] = [
  {
    slug: 'blog/diseno-web-para-belleza-spa-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para belleza y spas en Panamá: llena la agenda',
    description: 'Qué debe tener la web de un salón o spa en Panamá: reserva por estilista, portafolio real de resultados y recordatorios contra el ausentismo.',
    h1: 'Diseño web para salones de belleza y spas en Panamá: qué de verdad llena la agenda',
    breadcrumb: 'Diseño web para belleza y spas',
    category: 'Diseño web',
    date: '2026-08-24',
    heroImage: {
      src: '/images/blog/diseno-web-para-belleza-spa-panama.jpg',
      alt: 'Interior moderno de un salón de belleza con estaciones de peinado y espejos, luz suave y estética minimalista, sin personas visibles',
    },
    lead: [
      'Nadie decide dónde cortarse el pelo o hacerse las uñas mirando la fachada del local. Decide viendo el trabajo de una persona: desliza el feed de Instagram, compara dos o tres perfiles, y cuando encuentra el corte, el diseño o el tratamiento que quiere, no está buscando "un salón": está buscando a esa estilista, ese barbero o esa cosmetóloga en particular, y quiere saber si tiene un cupo esta semana.',
      'En esta guía repasamos lo que de verdad mueve la aguja en belleza y spas: una reserva que deje elegir profesional, no solo servicio; un portafolio de resultados reales que reemplace la descripción; y el recordatorio automático que ataca el ausentismo, uno de los gastos más caros y menos medidos del rubro. También decimos, con honestidad, cuándo todavía no conviene invertir en nada de esto.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'En belleza no se elige un local: se elige a una persona',
        paragraphs: [
          'Un restaurante compite por la mesa; una tienda, por el precio. Un salón o un spa compite por la fidelidad a una persona específica, y esa diferencia cambia todo lo que la web tiene que resolver. La clienta que vuelve cada seis semanas por su color no vuelve "al salón": vuelve a que la atienda su colorista, la que ya conoce su cabello y no tiene que empezar de cero cada vez.',
          'La mayoría de las webs del rubro ignoran esto por completo. Ofrecen un formulario de reserva que pregunta el servicio y muestra un horario genérico, como si cualquier estilista disponible sirviera igual. Para el negocio es más simple de programar; para la clienta que quiere a "su" persona, es una razón para volver a escribir por WhatsApp y preguntar si esa estilista tiene espacio, que es exactamente el paso manual que la web debería haber evitado.',
          'Resolver esto bien exige dos piezas que casi nunca van juntas en una web de salón: un perfil real por profesional (quién es, qué hace mejor, su propio trabajo) y una reserva que filtre disponibilidad por esa persona, no por el local completo. Entramos en el detalle de cómo estructurar las dos en nuestra guía de <a href="/industrias/diseno-web-belleza-spa-panama/">diseño web para belleza y spas</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de un salón o spa necesita para convertir en reservas, no solo en "me gusta"',
        intro: 'Si te faltan más de dos de estos, hay clientas que ya te encontraron y no supieron cómo reservar contigo.',
        items: [
          'Reserva en línea que deje elegir profesional específico, no solo un horario cualquiera',
          'Galería de resultados reales organizada por servicio (cortes, uñas, tratamientos), nunca banco de imágenes',
          'Un perfil corto por cada estilista o terapeuta: su especialidad, no solo su nombre en una lista',
          'Recordatorio automático de cita, sin depender de que alguien en recepción se acuerde de escribir',
          'Precio "desde" visible en los servicios principales, para no convertir cada mensaje en una cotización',
          'Política de cancelación y, si el servicio lo amerita, un anticipo claro antes de confirmar',
          'Feed de Instagram conectado, para que el trabajo que ya publicas alimente la web sin trabajo doble',
          'Botón de WhatsApp directo para la duda puntual que ningún formulario resuelve bien',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo funciona una reserva por estilista, paso a paso',
        intro: 'No es más complicado que cualquier sistema de reservas genérico. Es el mismo flujo, con un paso que la mayoría se salta.',
        items: [
          { h3: '1. Elegir el servicio', text: 'Corte, color, manicura, masaje: la clienta empieza igual que en cualquier sistema de reservas, eligiendo qué necesita.' },
          { h3: '2. Elegir a la persona, no solo el horario', text: 'Aquí está la diferencia real: en vez de un calendario genérico del local, la clienta ve la disponibilidad de "su" estilista o de quien prefiera, y reserva directo con esa persona.' },
          { h3: '3. Confirmar, con anticipo si el servicio lo amerita', text: 'En tratamientos largos o de ticket alto, un pequeño anticipo por <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a> convierte una reserva en un compromiso real, no en una intención.' },
          { h3: '4. Recordatorio automático, no un mensaje manual', text: 'El propio <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> avisa un día antes, sin que nadie en el salón tenga que acordarse de hacerlo.' },
          { h3: '5. Volver a reservar con la misma persona', text: 'Al salir de la cita, un enlace corto para agendar la próxima con el mismo profesional es lo que de verdad construye recurrencia, más que cualquier promoción.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El portafolio visual: aquí se elige con los ojos',
        paragraphs: [
          'Nadie reserva un balayage, un diseño de uñas o un tratamiento facial leyendo que el salón ofrece "servicios de calidad". Se convence viendo el resultado en un cabello, unas manos o una piel parecida a la suya. El portafolio no es una sección decorativa de la web: es, con diferencia, lo que más empuja a reservar a quien todavía está comparando.',
          'Por eso el banco de imágenes juega en contra en este rubro más que en casi cualquier otro. Una clienta que ya vio cientos de fotos de belleza en Instagram reconoce al instante una foto de stock, y lo que transmite no es "somos profesionales": transmite que ese salón no tiene trabajo propio que mostrar, que es la peor señal posible antes de confiarle el cabello o la piel a alguien.',
          'Instagram y la web no compiten, se reparten el trabajo: Instagram es donde se descubre, pero no responde precio, duración ni disponibilidad real sin que alguien conteste un mensaje. Por eso una campaña de <a href="/marketing/facebook-instagram-ads-panama/">Facebook e Instagram Ads</a> rinde mucho más cuando manda el clic a una página con portafolio y reserva real, que cuando termina, otra vez, en una bandeja de mensajes directos sin responder.',
        ],
      },
      {
        type: 'statement',
        text: 'El recordatorio automático no hace que una clienta llegue.',
        strong: 'Hace que la que sí pensaba llegar no se le olvide, y esa diferencia, multiplicada por semana, es la agenda llena o la agenda con huecos.',
      },
      {
        type: 'prose',
        h2: 'El ausentismo: el gasto silencioso que casi nadie mide en belleza',
        paragraphs: [
          'Cada cita en un salón o spa reserva el tiempo de una persona específica, no de un mostrador. Cuando una clienta no llega y no avisa, ese bloque no se recupera: el estilista se queda sin ingresos por esa hora y, salvo que alguien de última hora cubra el hueco, el negocio también. Multiplicado por semana, es de lo que más margen se lleva en el rubro, y casi nadie lo mide como un número real.',
          'Recordar por WhatsApp uno por uno funciona a medias y le cuesta tiempo a recepción, que ya está ocupada con quien sí está en el salón. Un recordatorio automático, disparado por el propio sistema de reservas un día antes, resuelve la parte del ausentismo que es simple olvido, sin sumarle trabajo a nadie.',
          'Lo que el recordatorio no resuelve es a quien nunca pensó cumplir. Ahí es donde un anticipo pequeño, aplicado solo a los servicios donde el hueco duele de verdad, filtra distinto: la clienta que valora tu tiempo lo paga sin pensarlo, y la que iba a faltar generalmente ni siquiera llega a reservar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Precios reales: cuánto cuesta la web de un salón o spa en Panamá',
        paragraphs: [
          'Para un salón con más de un estilista y servicios que se buscan por separado, la <strong>Página PYME desde $950</strong> es el punto de partida habitual: página por servicio, reserva por profesional y blog para aparecer en búsquedas puntuales. Un salón unipersonal que recién arranca puede empezar con una <strong>landing page desde $550</strong>: presencia, portafolio inicial y WhatsApp directo, sin la estructura completa todavía. Si además vendes línea de productos propia en línea, es <strong>E-commerce desde $1,500</strong>; y una cadena con varias sedes, agendas independientes y cobro anticipado entra como <strong>proyecto corporativo desde $2,900</strong>.',
          'A eso se suma la infraestructura, que no es opcional: dominio, hosting y certificado SSL van desde <strong>$225 al año</strong> en el plan compartido, <strong>$350 al año</strong> en el plan cloud (el recomendado para la mayoría) o <strong>$550 al año</strong> en VPS dedicado para operaciones grandes. El mantenimiento mensual —actualizaciones, respaldos y monitoreo— arranca en <strong>$59</strong>, sube a <strong>$99</strong> si tu agenda y tu facturación no pueden darse el lujo de una caída, y llega a <strong>$189</strong> para operaciones que no pueden esperar ni un día a que alguien responda.',
          'Todos estos precios son en dólares y no incluyen el 7% de ITBMS. El desglose completo, con lo que suma o resta al costo según el proyecto, está en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir todavía en todo esto',
        paragraphs: [
          'Si tu salón es unipersonal, la agenda ya se llena solo con referidos y no te interesa captar clientela nueva por internet, montar un sistema de reservas por profesional, portafolio y pauta es resolver un problema que hoy no tienes. Un perfil simple con tus datos, algunas fotos de tu trabajo y un botón de WhatsApp puede ser más que suficiente, y gastar de más ahí no te devuelve nada.',
          'Tampoco conviene mostrar un portafolio a medias. Si apenas estás empezando y todavía no tienes fotos propias de resultados —solo un par de trabajos, con mala luz o de hace tiempo—, rellenar la web con imágenes de banco disfrazadas de trabajo propio se nota casi de inmediato en este rubro, y cuesta más confianza de la que ahorra tiempo. Mejor esperar a tener diez o doce fotos reales, buenas, y salir con eso.',
          'Donde sí se justifica invertir es cuando ya tienes más de un profesional compitiendo por agenda propia, cuando dependes de clientela nueva y no solo de referidos, o cuando el ausentismo ya se nota en los números del mes. Ahí una reserva bien construida se paga sola en pocos meses.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para belleza y spas',
        items: [
          { q: '¿Cuánto cuesta la web de un salón o spa en Panamá?', a: 'Depende de cuántos profesionales y servicios vas a mostrar. Una landing page para un salón unipersonal parte de $550, y la Página PYME —la opción recomendada cuando hay varios estilistas y reserva por profesional— parte de $950. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Puedo cobrar un anticipo o depósito al reservar?', a: 'Sí, es una de las funciones más pedidas del rubro. Se integra con Yappy o tarjeta, y conviene aplicarlo solo a los servicios largos o de ticket alto, donde una ausencia sin aviso duele de verdad en la agenda.' },
          { q: '¿La clienta puede elegir su estilista o terapeuta de siempre?', a: 'Sí. El sistema de reservas se configura para mostrar la disponibilidad real de cada profesional por separado, no solo un horario genérico del local. Es, de hecho, la función que más retiene clientela en este rubro.' },
          { q: '¿Esto reemplaza a Instagram?', a: 'No, lo complementa. Instagram sigue siendo donde se descubre el trabajo; la web es donde esa persona resuelve precio, disponibilidad y reserva sin escribir un mensaje. Si además inviertes en pauta, rinde más cuando el anuncio manda a una página con portafolio y reserva, no a una bandeja de mensajes directos.' },
          { q: '¿De verdad los recordatorios automáticos bajan el ausentismo?', a: 'Bajan la parte que es olvido genuino, que es la mayoría de los casos. A quien nunca pensó cumplir, lo que lo filtra es un anticipo al reservar, no un recordatorio adicional.' },
          { q: '¿Cuándo NO conviene invertir en nada de esto?', a: 'Cuando tu salón es unipersonal, ya tienes la agenda llena solo con referidos y no buscas clientela nueva por internet. En ese caso, un perfil simple con WhatsApp directo alcanza, y una reserva por profesional o una campaña de pauta resuelven un problema que todavía no tienes.' },
          { q: '¿El mantenimiento mensual es obligatorio?', a: 'No es obligatorio, pero sí recomendable: cubre actualizaciones, respaldos y monitoreo para que el sitio no se caiga ni quede desactualizado. Arranca en $59 al mes y sube según cuánto dependa tu negocio de que la web y las reservas no fallen ni un día.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-belleza-spa-panama', label: 'Diseño web para belleza y spas' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pagos con Yappy' },
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que reserva por estilista y muestra tu trabajo real',
      wa: 'Hola, quiero una web para mi salón o spa en Panamá, con reserva por estilista. ¿Me asesoran?',
    },
  },
];
