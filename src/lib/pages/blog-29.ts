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
      'Alguien que se va a casar, o la persona de Recursos Humanos que tiene que organizar la fiesta de fin de año, hace lo mismo antes de escribirle a nadie: abre Instagram y Google, y se pone a mirar fotos. No lee una lista de servicios ni un párrafo sobre "trayectoria y compromiso": mira montajes, arreglos de mesa, iluminación, y decide en segundos si ese catering o ese salón se parece a lo que tiene en la cabeza para su evento. En bodas, eventos corporativos y cumpleaños grandes, la decisión es casi 100% visual antes de la primera llamada.',
      'La mayoría de las webs de catering, salones de eventos y wedding planners en Panamá fallan justo ahí: una galería de seis fotos genéricas, un formulario de contacto sin fecha ni tipo de evento, y ningún paquete claro que evite veinte minutos de cotización para algo que ni siquiera aplica. En esta guía repasamos qué necesita de verdad esa web: el portafolio que vende antes de hablar, los paquetes por tipo de evento, un calendario de disponibilidad que evita la ida y vuelta de "¿tienen libre tal fecha?", y también cuándo, con honestidad, no conviene invertir en captar más eventos.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Aquí se compra con los ojos, antes que con cualquier conversación',
        paragraphs: [
          'Nadie contrata un catering o un salón de eventos como quien contrata un servicio contable o legal, comparando credenciales y experiencia en abstracto. Aquí el criterio es sensorial: cómo se ve la mesa servida, qué tan bien está iluminado el salón de noche, si el estilo del montaje se parece al que la pareja o la empresa tienen en mente. Antes de preguntar precio, el cliente ya decidió si le gusta lo que ve.',
          'Eso cambia por completo qué debe priorizar la web. No gana la que más explica en texto la trayectoria de la empresa, gana la que mejor muestra el trabajo real hecho en eventos anteriores, organizado de forma que el visitante encuentre rápido el tipo de evento que le interesa: si busca boda, no debería tener que hacer scroll entre fotos de un coctel corporativo para encontrar una mesa nupcial.',
          'Esto no es un matiz de diseño, es la estrategia completa del sitio. Antes de decidir colores o plantilla, hay que decidir cómo se va a organizar y mostrar el trabajo anterior, porque todo lo demás —los paquetes, el calendario, el formulario— solo funciona después de que el visitante ya decidió, con los ojos, que quiere seguir hablando contigo. Nuestra <a href="/industrias/diseno-web-eventos-catering-bodas-panama/">página de diseño web para eventos, catering y bodas</a> entra en el detalle de cómo estructuramos esa vitrina para un negocio en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de un catering, salón de eventos o wedding planner necesita sí o sí',
        intro: 'Si tu web no cumple con esto, no importa cuán bonita sea la plantilla: le falta lo que de verdad hace que alguien te escriba.',
        items: [
          'Un portafolio de eventos reales anteriores, organizado por tipo (bodas, corporativo, cumpleaños), no una galería genérica de seis fotos',
          'Fotos —o video— del montaje completo, la mesa servida y el espacio vacío, nunca banco de imágenes de una boda que no es la tuya',
          'Paquetes claros por tipo de evento, con lo que incluye cada uno, para no perder tiempo cotizando algo que no aplica',
          'Algún indicio de disponibilidad de fecha, aunque sea básico, para no vivir la ida y vuelta de "¿tienen libre tal día?" por WhatsApp',
          'Un rango de precio o un "desde" por número de invitados, aunque el cierre final se cotice a la medida',
          'Un formulario o WhatsApp que pida fecha, número de invitados y tipo de evento antes de la primera llamada',
          'Testimonios de clientes reales, con nombre, y con foto del evento cuando el cliente lo autorice',
          'Presencia activa en Instagram y en tu ficha de Google Maps, porque ahí es donde de verdad empieza la búsqueda',
        ],
      },
      {
        type: 'cards',
        h2: 'Paquetes por tipo de evento, para no cotizar lo que no aplica',
        intro: 'Meter todo dentro de un solo formulario de "cotización a medida" obliga a preguntar lo mismo cien veces. Separar por tipo de evento filtra antes de que empiece la conversación.',
        items: [
          { h3: 'Bodas', text: 'Es el paquete que más se compara entre proveedores antes de decidir. Aclara en la web qué incluye la tarifa base —menú, montaje, mobiliario, coordinación el día del evento— y desde cuántos invitados aplica, para que la pareja no tenga que escribirte solo para saber si el paquete que vio en Instagram es el mismo que le vas a cotizar.' },
          { h3: 'Eventos corporativos', text: 'Decide una sola persona, casi siempre con presupuesto ya aprobado y poco tiempo para comparar. Le sirve ver capacidad del salón, montajes tipo coctel o banquete y si emites factura con crédito fiscal, más que fotos de decoración romántica.' },
          { h3: 'Cumpleaños y eventos sociales', text: 'Mayor volumen y ticket más bajo que una boda. Aquí rinde más un paquete estándar con precio o rango visible, con variantes claras —infantil, quinceañera, aniversario— en vez de forzar todo por el mismo formulario de cotización a medida.' },
          { h3: 'Eventos a la medida', text: 'Cuando el evento no encaja en ningún paquete —una activación de marca, una producción de varios días— dilo explícitamente en la web en lugar de forzarlo dentro de un paquete que no le queda, y deriva directo a una conversación por WhatsApp.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El calendario de disponibilidad que evita la ida y vuelta por WhatsApp',
        paragraphs: [
          'La pregunta más repetida que recibe cualquier catering o salón de eventos es alguna variación de "¿tienen libre el 14 de marzo?". Contestarla uno por uno, por WhatsApp o por teléfono, es tiempo del equipo que se va en algo que un calendario visible resuelve solo, sobre todo en los meses donde las consultas se multiplican.',
          'No hace falta exponer el detalle de otros eventos ni los nombres de otros clientes: basta con mostrar qué fechas ya están tomadas y cuáles siguen libres, conectado a un sistema real de reservas y no a una hoja de cálculo que alguien olvida actualizar. Entramos en el detalle de cómo se monta esto en nuestra página de <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas online</a>.',
          'El beneficio no es solo para ti: para el cliente, ver de entrada que una fecha ya está ocupada evita la ilusión de haber encontrado el lugar perfecto y enterarse tres días después, por WhatsApp, que no hay disponibilidad. Esa mala experiencia se evita completa con algo tan simple como un calendario a la vista.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie te escribe para conocer tu trabajo:',
        strong: 'te escribe porque ya vio tu portafolio, ya decidió que le gusta, y solo le falta la fecha y el precio.',
      },
      {
        type: 'prose',
        h2: 'El portafolio real vende; el banco de imágenes te delata',
        paragraphs: [
          'La tentación de llenar la web rápido con fotos de banco de imágenes —la típica mesa de boda perfecta que aparece en veinte sitios de otros países— es comprensible cuando todavía no tienes material propio bien organizado. El problema es que cualquiera que haya comparado dos o tres proveedores reconoce esa foto, y la reacción no es neutral: genera la sospecha correcta de que no quisiste, o no pudiste, mostrar trabajo real.',
          'Tres o cuatro eventos propios, bien fotografiados y organizados por categoría, valen más que cincuenta fotos de stock. Y una vez que ese portafolio existe en la web, tiene más sentido invertir en llevarle tráfico: pauta en Instagram y Facebook mostrando exactamente ese trabajo suele rendir mejor en este rubro que en casi cualquier otro, porque la decisión ya es visual por naturaleza. Lo explicamos en nuestra guía de <a href="/marketing/facebook-instagram-ads-panama/">Facebook e Instagram Ads</a>.',
          'El otro canal que no conviene descuidar es Google Maps. Quien busca "salón de bodas cerca de mí" o "catering para evento corporativo en Panamá" revisa fotos y reseñas ahí antes de llegar siquiera a tu web. Mantener esa ficha activa, con fotos actualizadas y reseñas reales, es trabajo aparte del diseño del sitio pero rinde en el mismo momento de decisión. Ver <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene invertir en captar más eventos todavía',
        paragraphs: [
          'Hay un caso específico de este rubro donde invertir en una web más completa, o en pauta para traerle tráfico, es tirar el dinero: cuando el catering o el salón ya trabaja al tope en temporada alta —diciembre, temporada de bodas— y sencillamente no tiene capacidad para tomar un evento más en esas fechas. Ahí el problema no es de diseño ni de marketing, es de capacidad operativa, y ninguna web lo resuelve.',
          'Meter pauta para generar más consultas en un mes que ya está lleno solo produce el peor resultado posible: gente que se ilusiona, escribe, y recibe un "no". Eso cuesta reputación, no la construye. Si este es tu caso, la web todavía cumple un papel —confirmar que existes, mostrar el trabajo, dar información— pero el esfuerzo de captación activa (pauta, SEO agresivo) rinde más dirigido a temporada baja o a los tipos de evento que sí tienes espacio para atender.',
          'Donde sí se justifica invertir es cuando quieres dejar de depender solo de referidos y bodas de boca en boca, cuando manejas varios tipos de evento que compiten por búsquedas distintas, o cuando ya creciste y la web actual —si tienes una— no refleja ni de lejos la calidad del trabajo que muestras en Instagram. Para eso, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing de alta conversión</a> con tu portafolio destacado parte desde $550 y es buen punto de partida si estás arrancando; una Página PYME completa, con portafolio por tipo de evento, paquetes y blog, parte desde $950 y es la opción que recomendamos para la mayoría de estos negocios.',
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
          { q: '¿Cuánto cuesta la web de un catering, salón de eventos o wedding planner en Panamá?', a: 'Depende de cuánto necesitas mostrar. Una landing con tu portafolio destacado y WhatsApp directo parte desde $550; una Página PYME de 8 a 12 páginas —portafolio por tipo de evento, paquetes y blog— parte desde $950 y es la opción que recomendamos para la mayoría. Si además vendes cajas de catering o menús para llevar con pago en línea, es una tienda online desde $1,500. Un proyecto a medida, con reservas y calendario integrados, arranca desde $2,900. A eso se suma infraestructura —hosting compartido desde $225 al año, cloud desde $350 (la opción recomendada) o VPS desde $550— y mantenimiento desde $59, $99 o $189 al mes según el nivel de soporte. Ningún precio incluye el 7% de ITBMS.' },
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
