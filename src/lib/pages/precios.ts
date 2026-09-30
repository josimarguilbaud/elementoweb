/* /precios/: resumen comercial en un solo lugar. Todas las cifras salen de
   `pricing` (site.ts) a través de los bloques; el texto de aquí no repite números
   salvo los que ya son públicos en el resto del sitio. Actualizar la fecha de
   revisión cuando cambien las tarifas. */
import type { PageData } from '../types';

export const precios: PageData[] = [
  {
    slug: 'precios',
    title: 'Precios de páginas web en Panamá: Landing, PYME y E-commerce | Elemento Web',
    description: 'Precios de diseño web en Panamá: landing desde $550, sitio corporativo desde $1,250 y tienda online desde $1,950. Qué incluye cada uno, qué se paga aparte y cómo se paga.',
    h1: 'Precios de páginas web en Panamá',
    breadcrumb: 'Precios',
    heroImage: { src: '/images/hero/servicios--diseno-web-corporativo-panama.jpg', alt: 'Diseño web corporativo en Panamá' },
    creds: false,
    service: { type: 'Diseño y desarrollo web' },
    lead: [
      'Precios en USD, con alcance por escrito antes de empezar. Esta página resume lo que cuesta cada formato, qué incluye y qué se cotiza aparte.',
      'Los precios son de partida y no incluyen ITBMS (7%). Última revisión: septiembre de 2026.',
    ],
    heroCtas: [
      { label: 'Pedir cotización cerrada', href: '/contacto/#formulario', primary: true },
      { label: 'Ver proyectos reales', href: '/portafolio/' },
    ],
    blocks: [
      { type: 'pricing', full: true, h2: 'Tres formatos, un precio de partida cada uno', intro: 'Elige por lo que necesita tu negocio, no por el precio: una landing sirve para una campaña, el sitio corporativo para presentar toda la empresa y la tienda para vender en línea. Si tu caso no encaja, el proyecto <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">a medida</a> se cotiza según alcance.' },
      {
        type: 'checklist',
        h2: 'Cómo se paga y qué queda a tu nombre',
        items: [
          'Pago en tres etapas: 50% para iniciar, 30% al aprobar el demo en línea y 20% para publicar en tu dominio',
          'Métodos: tarjeta de crédito o débito, transferencia bancaria y Yappy',
          'Cotización cerrada por escrito antes de empezar, con el alcance definido',
          'Dominio, código y accesos a nombre de tu empresa',
          'Los precios no incluyen ITBMS (7%); se aplica según corresponda',
        ],
      },
      { type: 'extras', h2: 'Infraestructura anual: hosting, dominio y SSL', intro: 'Además del proyecto, tu sitio necesita dónde vivir. El nivel depende del tráfico, las integraciones y el control que necesites. Mantenimiento web desde $59/mes.' },
      { type: 'production', h2: '¿No tienes textos, imágenes o logo?', intro: 'Se cotizan aparte del diseño y los apruebas antes de publicarlos.' },
      {
        type: 'faq',
        h2: 'Preguntas sobre precios',
        items: [
          { q: '¿Qué incluye la Web empresarial de $1,250?', a: 'Hasta 6 páginas en total, estructura por servicios, SEO inicial por página, panel editable con capacitación grabada, blog listo para publicar artículos (la redacción se contrata aparte), formularios y WhatsApp configurados. Más páginas, más idiomas o integraciones se cotizan según alcance.' },
          { q: '¿Qué incluye la tienda online de $1,950?', a: 'Carga inicial de hasta 25 productos, categorías, carrito, configuración de pagos y envíos, pruebas de compra y capacitación para gestionar pedidos. Las pasarelas de pago y su cantidad se definen en la cotización; las comisiones y licencias de terceros se pagan aparte. El inventario es propio: sincronizarlo con un ERP es otro alcance y se cotiza aparte.' },
          { q: '¿Qué incluyen todos los proyectos?', a: 'Diseño adaptado a móvil y computadora, formularios y WhatsApp comprobados, SEO inicial (títulos, descripciones, sitemap e indexación solicitada), medición de clics en WhatsApp y envíos de formularios, dos rondas de revisión del diseño, capacitación grabada cuando hay panel de administración y corrección de errores del desarrollo durante 30 días después de publicar.' },
          { q: '¿Qué es la Web empresarial gestionada?', a: 'Un plan mensual: $350 de puesta en marcha más $169 al mes durante 12 meses (incluye el desarrollo y el servicio continuo de hosting, mantenimiento y cambios menores). Total de los primeros 12 meses: $2,378 antes de impuestos. Desde el mes 13 son $94 al mes por el servicio continuo. El dominio queda a nombre del cliente y la web es suya. Si cancelas antes de los 12 meses, liquidas las cuotas pendientes del desarrollo y recibes los accesos y archivos.' },
          { q: '¿Hosting, dominio y correo están incluidos?', a: 'En los proyectos con pago único, no: la infraestructura anual (dominio, hosting y SSL) parte desde $350, el correo corporativo desde $60 al año y el mantenimiento desde $59 al mes. En el plan mensual gestionado sí están incluidos el dominio estándar, el hosting y el mantenimiento.' },
          { q: '¿Los precios incluyen impuestos?', a: 'No. Son precios de partida en USD, sin ITBMS (7%). El impuesto se aplica según corresponda al facturar.' },
          { q: '¿Qué pasa si necesito algo que no está en los paquetes?', a: 'Se cotiza aparte y por escrito antes de empezar: base de datos nueva, migración de datos, integraciones con sistemas de terceros o un sitio en varios idiomas. No hay costos sorpresa a mitad del proyecto.' },
          { q: '¿El dominio y el sitio quedan a mi nombre?', a: 'Sí. Dominio, código y accesos quedan a nombre de tu empresa.' },
          { q: '¿Cómo se paga?', a: 'En tres etapas: 50% para iniciar, 30% cuando apruebas el demo en línea y 20% para publicar en tu dominio. Aceptamos tarjeta, transferencia y Yappy.' },
          { q: '¿Cobran diferente si mi negocio está en Miami?', a: 'El trabajo es remoto y en dólares. Los impuestos aplicables a clientes en Estados Unidos se confirman en la cotización; no los damos por supuestos. Más detalle en <a href="/miami/">diseño web para Miami</a>.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Guía: cuánto cuesta una web en Panamá' },
          { slug: 'recursos/calculadora-costo-total-web', label: 'Calculadora de costo total' },
          { slug: 'comparativas/web-a-medida-vs-suscripcion', label: 'Web a medida vs suscripción' },
          { slug: 'casos-de-exito', label: 'Casos de éxito' },
          { slug: 'portafolio', label: 'Portafolio' },
        ],
      },
      { type: 'form', h2: 'Pide tu cotización cerrada', intro: 'Cuéntanos qué necesitas y te respondemos el mismo día hábil.' },
    ],
  },
];
