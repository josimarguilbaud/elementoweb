/* BLOG — Lote 29: guía long-form sobre diseño web para eventos, catering y
   bodas en Panamá. Mismo formato que blog-8: PageData con parent { slug: 'blog' },
   contenido extenso y enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog29: PageData[] = [
  {
    slug: 'blog/diseno-web-para-eventos-catering-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para eventos y catering en Panamá: qué vende',
    description: 'Qué debe tener la web de un catering o salón de eventos en Panamá: portafolio real, paquetes por tipo de evento y disponibilidad de fecha visible.',
    h1: 'Diseño web para eventos, catering y bodas en Panamá: qué de verdad convierte',
    breadcrumb: 'Diseño web para eventos y catering',
    category: 'Diseño web',
    date: '2026-09-01',
    heroImage: {
      src: '/images/blog/diseno-web-para-eventos-catering-panama.jpg',
      alt: 'Mesa de recepción de boda montada con elegancia, vajilla fina y centro de mesa floral, bajo luz cálida y ambiente romántico',
    },
    lead: [
      'El diseño web para eventos, catering y bodas en Panamá funciona cuando muestra portafolio real organizado por tipo de evento, paquetes con un precio «desde», fechas disponibles a la vista y un formulario que pide fecha, invitados y tipo de evento. En Elemento Web, una landing con portafolio parte desde $550 y una Web empresarial desde $1,250, sin ITBMS.',
      'Quien se va a casar, o la persona de Recursos Humanos que organiza la fiesta de fin de año, abre Instagram y Google antes de escribirle a nadie: mira montajes, mesas e iluminación, y decide en segundos si tu estilo se parece al que imagina. La mayoría de las webs del rubro fallan justo ahí: seis fotos genéricas, un formulario sin fecha ni tipo de evento y ningún paquete claro.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué el diseño web para eventos y catering se decide con fotos?',
        paragraphs: [
          'Un catering o un salón de eventos no se contrata comparando credenciales, como un servicio contable o legal. El criterio es sensorial: cómo se ve la mesa servida, cómo luce el salón de noche y si el montaje se parece al que la pareja o la empresa tienen en mente. Antes de preguntar precio, el cliente ya decidió si le gusta lo que ve.',
          'Por eso gana la web que mejor muestra eventos reales, organizados para que cada visitante encuentre rápido su tipo de evento: quien busca boda no debería pasar por fotos de un coctel corporativo para llegar a una mesa nupcial. Los paquetes, el calendario y el formulario solo funcionan después de esa decisión visual. En nuestra página de <a href="/industrias/diseno-web-eventos-catering-bodas-panama/">diseño web para eventos, catering y bodas</a> explicamos cómo estructuramos esa vitrina para un negocio en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de un catering, salón de eventos o wedding planner?',
        intro: 'Sin esto, ninguna plantilla compensa lo que hace que alguien te escriba.',
        items: [
          'Un portafolio de eventos reales, organizado por tipo (bodas, corporativo, cumpleaños), no una galería genérica de seis fotos',
          'Fotos o video del montaje completo, la mesa servida y el espacio vacío, nunca banco de imágenes de una boda que no es la tuya',
          'Paquetes por tipo de evento, con lo que incluye cada uno',
          'Disponibilidad de fecha visible, aunque sea básica, para no vivir el «¿tienen libre tal día?» por WhatsApp',
          'Un rango de precio o un «desde» por número de invitados, aunque el cierre se cotice a la medida',
          'Un formulario o WhatsApp que pida fecha, número de invitados y tipo de evento antes de la primera llamada',
          'Testimonios con nombre, y con foto del evento cuando el cliente lo autorice',
          'Instagram y ficha de Google Maps activos, porque ahí empieza la búsqueda',
        ],
      },
      {
        type: 'cards',
        h2: 'Paquetes por tipo de evento, para no cotizar lo que no aplica',
        intro: 'Un solo formulario de «cotización a medida» obliga a preguntar lo mismo cien veces. Separar por tipo de evento filtra antes de que empiece la conversación.',
        items: [
          { h3: 'Bodas', text: 'Es el paquete que más se compara entre proveedores. Aclara qué incluye la tarifa base —menú, montaje, mobiliario, coordinación el día del evento— y desde cuántos invitados aplica, para que la pareja no tenga que escribirte solo para confirmar que es el mismo paquete que vio en Instagram.' },
          { h3: 'Eventos corporativos', text: 'Decide una sola persona, casi siempre con presupuesto aprobado y poco tiempo. Le sirve ver capacidad del salón, montajes tipo coctel o banquete y si emites factura con crédito fiscal, más que fotos de decoración romántica.' },
          { h3: 'Cumpleaños y eventos sociales', text: 'Más volumen y ticket más bajo que una boda. Rinde un paquete estándar con precio o rango visible y variantes claras —infantil, quinceañera, aniversario— en vez de forzarlo todo por la cotización a medida.' },
          { h3: 'Eventos a la medida', text: 'Una activación de marca o una producción de varios días no encaja en ningún paquete. Dilo en la web y deriva directo a WhatsApp, en lugar de forzarlo dentro de un paquete que no le queda.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo mostrar la disponibilidad de fechas sin exponer a otros clientes?',
        paragraphs: [
          'La pregunta que más recibe un catering o salón es alguna variación de «¿tienen libre el 14 de marzo?». Contestarla una por una, por WhatsApp o teléfono, consume tiempo del equipo justo en los meses en que las consultas se multiplican.',
          'Basta con mostrar qué fechas están tomadas y cuáles libres, sin nombres ni detalles de otros eventos, conectado a un sistema real de reservas y no a una hoja de cálculo que alguien olvida actualizar. Así el cliente tampoco se ilusiona con una fecha que ya no existe y se entera tres días después. Explicamos cómo se monta en nuestra página de <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas online</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Portafolio real o banco de imágenes: cuál vende un evento',
        paragraphs: [
          'Llenar la web con fotos de stock —la mesa de boda perfecta que aparece en veinte sitios de otros países— es tentador cuando aún no tienes material propio organizado. Pero quien compara dos o tres proveedores reconoce esa foto, y la reacción es sospechar que no quisiste, o no pudiste, mostrar trabajo real.',
          'Tres o cuatro eventos propios, bien fotografiados y organizados por categoría, valen más que cincuenta fotos de stock. Con ese portafolio ya en la web, tiene sentido llevarle tráfico: en este rubro la pauta que muestra trabajo real suele rendir bien porque la decisión ya es visual. Lo explicamos en nuestra guía de <a href="/marketing/facebook-instagram-ads-panama/">Facebook e Instagram Ads</a>.',
          'El otro canal es Google Maps. Quien busca «salón de bodas cerca de mí» o «catering para evento corporativo en Panamá» revisa fotos y reseñas ahí antes de llegar a tu web. Mantener esa ficha con fotos actualizadas y reseñas reales es trabajo aparte del sitio, pero pesa en el mismo momento de decisión. Ver <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir en captar más eventos?',
        paragraphs: [
          'Cuando el catering o el salón ya trabaja al tope en temporada alta —diciembre, temporada de bodas— y no tiene capacidad para un evento más en esas fechas. Ahí el problema es de capacidad operativa, no de diseño ni de marketing, y ninguna web lo resuelve.',
          'Pautar para un mes que ya está lleno produce gente que se ilusiona, escribe y recibe un «no»: eso cuesta reputación. La web sigue cumpliendo su papel —mostrar el trabajo, confirmar que existes—, pero la captación activa (pauta, SEO) rinde más dirigida a temporada baja o a los tipos de evento donde sí tienes espacio.',
          'Sí se justifica invertir cuando quieres dejar de depender del boca en boca, cuando manejas varios tipos de evento que compiten por búsquedas distintas o cuando tu web actual no refleja la calidad que muestras en Instagram. Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing de alta conversión</a> con tu portafolio parte desde $550 si estás arrancando; una Web empresarial completa, con portafolio por tipo de evento, paquetes y blog, parte desde $1,250 y es la opción que recomendamos para la mayoría de estos negocios.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para eventos y catering',
        items: [
          { q: '¿Debo publicar precios de mis paquetes o solo cotizar a la medida?', a: 'Un rango o un "desde" ayuda más de lo que asusta. Por número de invitados o por tipo de evento, un precio de referencia filtra al que busca algo totalmente fuera de presupuesto, sin comprometerte a una cifra cerrada que después tengas que ajustar según menú, temporada o locación exacta.' },
          { q: '¿Cómo muestro disponibilidad sin exponer los datos de otros clientes?', a: 'No hace falta un calendario con nombres ni detalles de otros eventos. Basta con un indicador simple de qué fechas están tomadas y cuáles libres, conectado a tu sistema real de reservas, o al menos un botón de "consulta tu fecha" que abra WhatsApp con la fecha ya incluida en el mensaje.' },
          { q: '¿Qué hago si mi catering ya trabaja al tope en diciembre o en temporada de bodas?', a: 'No inviertas en captar más eventos para esas fechas: no tienes dónde ponerlos. El problema ahí es de capacidad, no de marketing. La web sigue cumpliendo su papel de mostrar el trabajo y confirmar que existes, pero la pauta activa rinde mejor dirigida a temporada baja o a los tipos de evento donde sí tienes espacio.' },
          { q: '¿Instagram no es suficiente, tengo que tener página web también?', a: 'Instagram muestra trabajo reciente, pero no reemplaza la web: un feed no separa por tipo de evento, no explica paquetes ni precios de referencia, y depende de un algoritmo que no controlas. Lo que mejor funciona es la web como base y las redes —incluyendo pauta— como el canal que le manda tráfico. Más en Facebook e Instagram Ads.' },
          { q: '¿Cuánto cuesta la web de un catering, salón de eventos o wedding planner en Panamá?', a: 'Depende de cuánto necesitas mostrar. Una landing con tu portafolio destacado y WhatsApp directo parte desde $550; una Web empresarial de hasta 6 páginas —portafolio por tipo de evento, paquetes y blog— parte desde $1,250 y es la opción que recomendamos para la mayoría. Si además vendes cajas de catering o menús para llevar con pago en línea, es una tienda online desde $1,950. Un proyecto a medida, con reservas y calendario integrados, arranca desde $2,900. A eso se suma infraestructura —hosting compartido desde $225 al año, cloud desde $350 (la opción recomendada) o VPS desde $550— y mantenimiento desde $99, $169 o $319 al mes según el nivel de soporte. Ningún precio incluye el 7% de ITBMS.' },
          { q: '¿Necesito fotógrafo profesional para armar el portafolio?', a: 'Ayuda, pero no es obligatorio desde el día uno. Fotos reales de tus últimos tres o cuatro eventos, tomadas con buena luz y bien organizadas por tipo, valen más que un banco de imágenes de una boda que no es la tuya. El portafolio se puede —y debe— seguir creciendo con cada evento nuevo.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-eventos-catering-bodas-panama', label: 'Diseño web para eventos, catering y bodas' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas online' },
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que muestra tu trabajo y filtra la fecha antes de la llamada',
      wa: 'Hola, quiero una web para mi catering, salón de eventos o servicio de bodas en Panamá. ¿Me asesoran?',
    },
  },
];
