/* /precios/: resumen comercial en un solo lugar. Todas las cifras salen de
   `pricing` (site.ts) a través de los bloques; el texto de aquí no repite números
   salvo los que ya son públicos en el resto del sitio. Actualizar la fecha de
   revisión cuando cambien las tarifas.
   Anatomía v2 con molde Kredit (D44) y metadatos de la fase 2b (KEYWORDS.md): la página
   toma «precios de páginas web en panamá»; la guía del blog conserva «cuánto cuesta». */
import type { PageData } from '../types';

export const precios: PageData[] = [
  {
    slug: 'precios',
    title: 'Precios de Páginas Web en Panamá | Elemento Web',
    description: 'Precios de páginas web en Panamá: landing desde $550, sitio corporativo desde $1,250 y tienda online desde $1,950. Qué incluye y qué se paga aparte.',
    h1: 'Precios de páginas web en Panamá',
    breadcrumb: 'Precios',
    anatomia: 'v2',
    portada: {
      pie: 'Precios publicados y cotización cerrada por escrito. Si algo no está en la cotización, se cotiza por escrito antes de hacerlo.',
      riel: [
        { k: 'Landing page', v: 'desde $550' },
        { k: 'Web empresarial', v: 'desde $1,250' },
        { k: 'Tienda online', v: 'desde $1,950' },
        { k: 'Plan mensual', v: '$350 + $169 al mes' },
      ],
    },
    creds: false,
    service: { type: 'Diseño y desarrollo web' },
    lead: [
      'Precios en USD, publicados y con el alcance por escrito antes de empezar: lo que cuesta cada formato, qué incluye y qué se paga aparte.',
    ],
    blocks: [
      {
        type: 'answer',
        fecha: '2026-10-13',
        text: 'En Panamá, una página web con Elemento Web cuesta desde $550 una landing page, desde $1,250 un sitio corporativo de hasta 6 páginas y desde $1,950 una tienda online con hasta 25 productos cargados. Los precios son en USD, sin ITBMS (7%), y cada proyecto se cierra por escrito antes de empezar. Hosting y dominio van aparte.',
      },
      {
        type: 'receipt',
        titulo: 'Página web',
        fecha: '2026-10-13',
        precio: { estado: 'confirmado', desde: '$550', unidad: 'por proyecto (landing page)' },
        plazo: 'De 5 días hábiles (landing) a 5 semanas (tienda online), desde que recibimos el contenido',
        medicionId: 'precios-lcp',
        pie: ['Dominio, hosting y mantenimiento se pagan aparte.', 'Precios en dólares, sin ITBMS (7%).'],
      },
      { type: 'pricing', full: true, h2: 'Tres formatos, un precio de partida cada uno', intro: 'Elige por lo que necesita tu negocio, no por el precio: una landing sirve para una campaña, el sitio corporativo para presentar toda la empresa y la tienda para vender en línea. Si tu caso no encaja, el proyecto <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">a medida</a> se cotiza según alcance.' },
      {
        type: 'tabla',
        h2: 'Los tres formatos, lado a lado',
        intro: 'Lo que cambia entre uno y otro, con el detalle de cada servicio en su página:',
        columnas: ['', 'Landing page', 'Web empresarial', 'Tienda online'],
        filas: [
          ['Sirve para', 'Una campaña o una sola oferta', 'Presentar toda la empresa y sus servicios', 'Vender productos en línea'],
          ['Desde', '$550', '$1,250', '$1,950'],
          ['Alcance', 'Una página de hasta 7 secciones', 'Hasta 6 páginas, con estructura por servicios', 'Carga inicial de hasta 25 productos, categorías y carrito'],
          ['Lo que la distingue', 'Formulario, WhatsApp y medición de contactos', 'SEO inicial por página, panel editable y blog listo', 'Pagos y envíos configurados y pruebas de compra'],
          ['Plazo', '5 días hábiles', 'Entre 2 y 3 semanas', 'Entre 3 y 5 semanas'],
          ['Detalle', '<a href="/servicios/landing-pages-alta-conversion-panama/">Landing pages</a>', '<a href="/servicios/diseno-web-corporativo-panama/">Diseño web corporativo</a>', '<a href="/servicios/tiendas-online-ecommerce-panama/">Tiendas online</a>'],
        ],
        nota: 'Precios en USD, sin ITBMS (7%). El plazo corre desde que recibimos el contenido y apruebas el alcance.',
      },
      {
        type: 'ejemplos',
        h2: 'Cómo se ve una cotización cerrada',
        intro: 'Antes de empezar recibes el alcance, el plazo y el precio por escrito, y sabes qué se paga aparte y cuándo pagas cada parte.',
        columnas: 2,
        items: [
          {
            tipo: 'whatsapp',
            negocio: 'Elemento Web',
            mensajes: [
              { de: 'cliente', texto: 'Hola, necesito una web para mi consultorio: inicio, servicios, equipo y contacto.', hora: '10:12' },
              { de: 'negocio', texto: 'Con gusto. Eso cabe en la Web empresarial, de hasta 6 páginas. Te enviamos hoy la cotización cerrada con alcance, plazo y precio.', hora: '10:15', botones: ['Ver cotización'] },
            ],
          },
          {
            tipo: 'informe', titulo: 'Cotización · Web empresarial', sitio: 'Tu consultorio · ejemplo',
            filas: [
              { k: 'Alcance', v: 'Hasta 6 páginas', estado: 'bien' },
              { k: 'Plazo', v: '2 a 3 semanas', estado: 'bien' },
              { k: 'Precio', v: '$1,250.00', estado: 'bien' },
              { k: 'ITBMS (7%)', v: '$87.50', estado: 'bien' },
              { k: 'Total del proyecto', v: '$1,337.50', estado: 'bien' },
              { k: 'Dominio, hosting y SSL', v: 'Aparte, desde $350 al año', estado: 'ojo' },
            ],
            pie: 'Lo que se paga aparte va escrito en la misma cotización, no aparece al final.',
          },
          {
            tipo: 'flujo',
            titulo: 'Cómo se paga el proyecto',
            pasos: [
              { t: '50 %', d: 'Para iniciar, con la cotización firmada.' },
              { t: '30 %', d: 'Cuando apruebas el demo en línea.' },
              { t: '20 %', d: 'Para publicar en tu dominio.' },
              { t: '30 días', d: 'De corrección de errores del desarrollo después de publicar.' },
            ],
          },
        ],
        nota: 'Conversación y cotización de ejemplo. Aceptamos tarjeta de crédito o débito, transferencia bancaria y Yappy.',
      },
      {
        type: 'compare',
        h2: 'Compara con tu otra cotización',
        intro: 'Ocho preguntas que puedes hacerle a cualquier proveedor. Usa la última columna para anotar lo que te respondieron.',
        otraCotizacion: true,
        criterios: [
          { criterio: 'Precio publicado', nosotros: 'Sí: landing desde $550, corporativo desde $1,250 y tienda desde $1,950' },
          { criterio: 'Cotización', nosotros: 'Cerrada y por escrito antes de empezar, con el alcance definido' },
          { criterio: 'Forma de pago', nosotros: 'En tres etapas: 50 %, 30 % y 20 %' },
          { criterio: 'Dominio y código', nosotros: 'A nombre de tu empresa' },
          { criterio: 'Lo que se paga aparte', nosotros: 'Detallado en la cotización: hosting, correo, licencias y contenido' },
          { criterio: 'Revisiones del diseño', nosotros: 'Dos rondas incluidas' },
          { criterio: 'Después de publicar', nosotros: '30 días de corrección de errores del desarrollo' },
          { criterio: 'Impuestos', nosotros: 'ITBMS (7%) aparte, dicho desde la primera cotización' },
        ],
      },
      {
        type: 'includes',
        h2: 'Qué incluye siempre y qué se paga aparte',
        intro: 'La base es la misma en los tres formatos. Lo que va aparte también es igual, y lo ves antes de firmar.',
        incluye: [
          { t: 'Diseño adaptado', d: 'Se ve y funciona bien en celular y en computadora.' },
          { t: 'Formularios y WhatsApp', d: 'Configurados y comprobados antes de publicar.' },
          { t: 'SEO inicial', d: 'Títulos, descripciones, sitemap e indexación solicitada en Google.' },
          { t: 'Medición', d: 'Clics en WhatsApp y envíos de formularios, desde el primer día.' },
          { t: 'Dos rondas de revisión', d: 'Del diseño, antes de pasar a desarrollo.' },
          { t: 'Capacitación grabada', d: 'Cuando la web tiene panel de administración.' },
          { t: '30 días de corrección', d: 'De errores del desarrollo después de publicar.' },
        ],
        entregables: ['Cotización cerrada por escrito', 'Sitio publicado en tu dominio', 'Dominio, código y accesos a nombre de tu empresa', 'Capacitación grabada cuando hay panel'],
        noIncluye: ['Dominio, hosting y SSL: desde $350 al año', 'Correo corporativo: desde $60 al año', 'Mantenimiento: desde $59 al mes', 'Licencias y comisiones de terceros', 'Redacción de contenido, imágenes y logo'],
        medimos: ['Clics en WhatsApp', 'Envíos de formularios'],
      },
      { type: 'extras', h2: 'Infraestructura anual: hosting, dominio y SSL', intro: 'Además del proyecto, tu sitio necesita dónde vivir. El nivel depende del tráfico, las integraciones y el control que necesites. Mantenimiento web desde $59/mes.' },
      { type: 'production', h2: '¿No tienes textos, imágenes o logo?', intro: 'Se cotizan aparte del diseño y los apruebas antes de publicarlos.' },
      {
        type: 'faq',
        h2: 'Preguntas sobre precios',
        items: [
          { q: '¿Cuánto cuesta una página web en Panamá?', a: 'Con nosotros, desde $550 una landing page, desde $1,250 un sitio corporativo de hasta 6 páginas y desde $1,950 una tienda online. Un proyecto a medida parte de $2,900. El precio final depende de las páginas, las integraciones y el contenido, y se cierra por escrito antes de empezar.' },
          { q: '¿Y si mi presupuesto es menor a $550?', a: 'La landing de $550 es el proyecto más pequeño que hacemos, porque incluye lo mínimo para que una página trabaje: estructura pensada para convertir, formulario, WhatsApp y medición de contactos. Si hoy no te alcanza, hay dos caminos. Puedes empezar con la landing y ampliarla a un sitio completo cuando el negocio lo pida (la ampliación se cotiza aparte). O puedes repartir el costo con la Web empresarial gestionada: $350 de puesta en marcha más $169 al mes, con hosting y mantenimiento incluidos. Cuéntanos tu presupuesto y te decimos con franqueza qué alcanza.' },
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
      { type: 'form', h2: 'Pide tu cotización cerrada', intro: 'Cuéntanos qué necesitas y te respondemos el mismo día hábil con el alcance, el plazo y el precio por escrito.' },
      {
        type: 'related',
        h2: 'Antes de decidir',
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
    ],
    cta: { h2: 'Tu precio, cerrado y por escrito', wa: 'Hola, quiero una cotización cerrada para mi página web.', boton: 'Pedir cotización cerrada' },
  },
];
