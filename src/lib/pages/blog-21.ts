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
      'El diseño web para salones de belleza y spas en Panamá llena la agenda con tres piezas: reserva en línea que deja elegir a la estilista o terapeuta, no solo el horario; un portafolio de resultados reales por servicio; y recordatorios automáticos contra el ausentismo. Así las armamos en Elemento Web, en Ciudad de Panamá.',
      'La clienta no busca "un salón": busca a esa estilista, ese barbero o esa cosmetóloga cuyo trabajo vio en Instagram, y quiere saber si tiene cupo esta semana. Esta guía explica cada pieza, los precios y cuándo todavía no conviene invertir.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué en belleza se reserva con una persona y no con un local?',
        paragraphs: [
          'La clienta que vuelve cada seis semanas por su color no vuelve "al salón": vuelve con su colorista, la que ya conoce su cabello. Aun así, la mayoría de las webs del rubro ofrecen un formulario que pregunta el servicio y muestra un horario genérico, como si cualquier estilista sirviera igual. Resultado: la clienta vuelve a escribir por WhatsApp para preguntar si "su" persona tiene espacio, el paso manual que la web debía evitar.',
          'Resolverlo exige dos piezas juntas: un perfil real por profesional (quién es, qué hace mejor, su propio trabajo) y una reserva que filtre disponibilidad por esa persona. El detalle está en nuestra guía de <a href="/industrias/diseno-web-belleza-spa-panama/">diseño web para belleza y spas</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe tener el diseño web de un salón de belleza o spa?',
        intro: 'Si te faltan más de dos, hay clientas que ya te encontraron y no supieron cómo reservar contigo.',
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
        h2: '¿Cómo funciona una reserva por estilista, paso a paso?',
        intro: 'Es el mismo flujo de cualquier sistema de reservas, con un paso que la mayoría se salta.',
        items: [
          { h3: '1. Elegir el servicio', text: 'Corte, color, manicura, masaje: la clienta empieza eligiendo qué necesita.' },
          { h3: '2. Elegir a la persona, no solo el horario', text: 'En vez de un calendario genérico del local, la clienta ve la disponibilidad de "su" estilista o de quien prefiera, y reserva directo con esa persona.' },
          { h3: '3. Confirmar, con anticipo si el servicio lo amerita', text: 'En tratamientos largos o de ticket alto, un pequeño anticipo por <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a> convierte una reserva en un compromiso real, no en una intención.' },
          { h3: '4. Recordatorio automático, no un mensaje manual', text: 'El propio <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> avisa un día antes, sin que nadie en el salón tenga que acordarse.' },
          { h3: '5. Volver a reservar con la misma persona', text: 'Al salir de la cita, un enlace corto para agendar la próxima con el mismo profesional construye recurrencia mejor que cualquier promoción.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué fotos debe mostrar el portafolio de un salón o spa?',
        paragraphs: [
          'Resultados propios, organizados por servicio. Nadie reserva un balayage, un diseño de uñas o un facial leyendo "servicios de calidad": se convence viendo el resultado en un cabello, unas manos o una piel parecida a la suya. Una clienta que ya vio cientos de fotos de belleza en Instagram reconoce al instante una foto de stock, y lo que entiende es que ese salón no tiene trabajo propio que mostrar.',
          'Instagram y la web se reparten el trabajo: Instagram descubre, pero no responde precio, duración ni disponibilidad sin que alguien conteste. Por eso una campaña de <a href="/marketing/facebook-instagram-ads-panama/">Facebook e Instagram Ads</a> rinde más cuando manda el clic a una página con portafolio y reserva real que cuando termina en una bandeja de mensajes sin responder.',
        ],
      },
      {
        type: 'statement',
        text: 'El recordatorio automático no hace que una clienta llegue.',
        strong: 'Hace que la que sí pensaba llegar no se le olvide, y esa diferencia, multiplicada por semana, es la agenda llena o la agenda con huecos.',
      },
      {
        type: 'prose',
        h2: '¿Cómo reducir el ausentismo en un salón de belleza?',
        paragraphs: [
          'Cada cita reserva el tiempo de una persona específica: si la clienta no llega ni avisa, ese bloque no se recupera y el estilista se queda sin ingresos por esa hora. Recordar por WhatsApp uno por uno funciona a medias y le quita tiempo a recepción. Un recordatorio automático disparado por el sistema de reservas un día antes resuelve el ausentismo que es simple olvido.',
          'Para quien nunca pensó cumplir, funciona un anticipo pequeño aplicado solo a los servicios donde el hueco duele: la clienta que valora tu tiempo lo paga sin pensarlo, y la que iba a faltar normalmente ni reserva.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de un salón o spa en Panamá?',
        paragraphs: [
          'Para un salón con más de un estilista y servicios que se buscan por separado, la <strong>Web empresarial desde $1,250</strong> es el punto de partida habitual: página por servicio, reserva por profesional y blog. Un salón unipersonal que arranca puede empezar con una <strong>landing page desde $550</strong>: portafolio inicial y WhatsApp directo. Si vendes línea de productos propia en línea, es <strong>E-commerce desde $1,950</strong>; una cadena con varias sedes, agendas independientes y cobro anticipado entra como <strong>proyecto corporativo desde $2,900</strong>.',
          'La infraestructura —dominio, hosting y SSL— va desde <strong>$225 al año</strong> en el plan compartido, <strong>$350 al año</strong> en el cloud (el recomendado para la mayoría) o <strong>$550 al año</strong> en VPS dedicado. El mantenimiento mensual arranca en <strong>$99</strong>, sube a <strong>$169</strong> si tu agenda no puede darse el lujo de una caída y llega a <strong>$319</strong> para operaciones que no pueden esperar un día por respuesta. Precios en dólares, sin el 7% de ITBMS; el desglose está en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de un salón?',
        paragraphs: [
          'Si tu salón es unipersonal, la agenda se llena con referidos y no buscas clientela nueva por internet, una reserva por profesional, portafolio y pauta resuelven un problema que no tienes: basta un perfil simple con fotos de tu trabajo y un botón de WhatsApp. Tampoco conviene salir con un portafolio a medias: rellenar con imágenes de banco disfrazadas de trabajo propio se nota y cuesta confianza. Mejor esperar a tener diez o doce fotos reales y buenas.',
          'Sí se justifica cuando tienes más de un profesional con agenda propia, dependes de clientela nueva y no solo de referidos, o el ausentismo ya se nota en los números del mes.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para belleza y spas',
        items: [
          { q: '¿Cuánto cuesta la web de un salón o spa en Panamá?', a: 'Depende de cuántos profesionales y servicios vas a mostrar. Una landing page para un salón unipersonal parte de $550, y la Web empresarial —la opción recomendada cuando hay varios estilistas y reserva por profesional— parte de $1,250. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Puedo cobrar un anticipo o depósito al reservar?', a: 'Sí, es una de las funciones más pedidas del rubro. Se integra con Yappy o tarjeta, y conviene aplicarlo solo a los servicios largos o de ticket alto, donde una ausencia sin aviso duele de verdad en la agenda.' },
          { q: '¿La clienta puede elegir su estilista o terapeuta de siempre?', a: 'Sí. El sistema de reservas se configura para mostrar la disponibilidad real de cada profesional por separado, no solo un horario genérico del local. Es, de hecho, la función que más retiene clientela en este rubro.' },
          { q: '¿Esto reemplaza a Instagram?', a: 'No, lo complementa. Instagram sigue siendo donde se descubre el trabajo; la web es donde esa persona resuelve precio, disponibilidad y reserva sin escribir un mensaje. Si además inviertes en pauta, rinde más cuando el anuncio manda a una página con portafolio y reserva, no a una bandeja de mensajes directos.' },
          { q: '¿De verdad los recordatorios automáticos bajan el ausentismo?', a: 'Bajan la parte que es olvido genuino, que es la mayoría de los casos. A quien nunca pensó cumplir, lo que lo filtra es un anticipo al reservar, no un recordatorio adicional.' },
          { q: '¿Cuándo NO conviene invertir en nada de esto?', a: 'Cuando tu salón es unipersonal, ya tienes la agenda llena solo con referidos y no buscas clientela nueva por internet. En ese caso, un perfil simple con WhatsApp directo alcanza, y una reserva por profesional o una campaña de pauta resuelven un problema que todavía no tienes.' },
          { q: '¿El mantenimiento mensual es obligatorio?', a: 'No es obligatorio, pero sí recomendable: cubre actualizaciones, respaldos y monitoreo para que el sitio no se caiga ni quede desactualizado. Arranca en $99 al mes y sube según cuánto dependa tu negocio de que la web y las reservas no fallen ni un día.' },
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
