/* /precios/: resumen comercial en un solo lugar. Todas las cifras salen de
   `pricing` (site.ts) a través de los bloques; el texto de aquí no repite números
   salvo los que ya son públicos en el resto del sitio. Actualizar la fecha de
   revisión cuando cambien las tarifas. */
import type { PageData } from '../types';

export const precios: PageData[] = [
  {
    slug: 'precios',
    title: 'Precios de páginas web en Panamá: Landing, PYME y E-commerce | Elemento Web',
    description: 'Precios de diseño web en Panamá: landing desde $550, sitio corporativo desde $950 y tienda online desde $1,500. Qué incluye cada uno, qué se paga aparte y cómo se paga.',
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
      { type: 'pricing', h2: 'Tres formatos, un precio de partida cada uno', intro: 'Elige por lo que necesita tu negocio, no por el precio: una landing sirve para una campaña, el sitio corporativo para presentar toda la empresa y la tienda para vender en línea. Si tu caso no encaja, el proyecto <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">a medida</a> se cotiza según alcance.' },
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
          { q: '¿Qué incluye el sitio corporativo de $950?', a: 'Un sitio de hasta 6 páginas internas, con una página por servicio optimizada para SEO, blog para posicionamiento y panel autoadministrable. Más secciones, más idiomas o integraciones se cotizan según alcance.' },
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
