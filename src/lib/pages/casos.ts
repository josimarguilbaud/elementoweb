/* Casos de éxito. Solo hechos ya publicados en el portafolio (site.ts) y, cuando existe,
   el testimonio de la portada. NO llevan cifras de resultados hasta que estén medidas y
   con fuente (Search Console / CRM): el bloque «Resultados» lo dice de frente. Al añadir
   números, poner periodo, fuente y qué cuenta como consulta. */
import type { PageData } from '../types';

const parent = { slug: 'casos-de-exito', label: 'Casos de éxito' };

export const casos: PageData[] = [
  {
    slug: 'casos-de-exito',
    title: 'Casos de éxito de diseño web en Panamá | Elemento Web',
    description: 'Proyectos reales de Elemento Web: qué necesitaba cada negocio, qué construimos y qué medimos. TramitaPa, San Blas Full, KL Contable y Panama International Movers.',
    h1: 'Casos de éxito',
    breadcrumb: 'Casos de éxito',
    lead: [
      'Cuatro proyectos reales, contados con lo que cada negocio necesitaba y lo que construimos. Cuando un resultado está medido, lo publicamos con su periodo y su fuente; mientras tanto, no inventamos cifras.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Proyectos',
        items: [
          { h3: 'TramitaPa', text: 'Trámites de visa · 2025. TramitaPa ofrece trámites y asesoría de visa. Necesitaba una página que explicara el servicio y llevara a la persona a una conversación por WhatsApp sin pasos de más.', link: { slug: 'casos-de-exito/tramitapa', label: 'Ver caso TramitaPa' } },
          { h3: 'San Blas Full', text: 'Turismo · Tours · 2025. San Blas Full vende tours de un día a San Blas a viajeros de distintos países. El sitio tenía que permitirles elegir el tour, reservar y pagar un depósito en pocos minutos.', link: { slug: 'casos-de-exito/san-blas-full', label: 'Ver caso San Blas Full' } },
          { h3: 'KL Contable', text: 'Contabilidad · 2026. KL Contable es una firma de contabilidad en Panamá. Su web tenía que explicar con claridad qué servicios ofrece y ayudar a cada tipo de cliente a encontrar el suyo.', link: { slug: 'casos-de-exito/kl-contable', label: 'Ver caso KL Contable' } },
          { h3: 'Panama International Movers', text: 'Mudanzas internacionales · 2025. Panama International Movers es una empresa familiar de mudanzas internacionales que opera desde 1990. Su web debía ordenar una oferta amplia y facilitar pedir una cotización.', link: { slug: 'casos-de-exito/panama-international-movers', label: 'Ver caso Panama International Movers' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo documentamos un caso',
        paragraphs: [
          'Cada caso parte del problema del negocio, explica qué construimos y define de antemano qué se mide. Los resultados solo se publican cuando existe una medición con periodo y fuente, con el permiso del cliente.',
          'Si quieres ver más proyectos, el <a href="/portafolio/">portafolio</a> reúne todos los sitios que hemos publicado, con enlace a cada uno en vivo.',
        ],
      },
      { type: 'related', items: [{ slug: 'portafolio', label: 'Portafolio' }, { slug: 'precios', label: 'Precios' }, { slug: 'nosotros', label: 'Nosotros' }] },
      { type: 'form', h2: '¿Tu proyecto se parece a alguno de estos?', intro: 'Cuéntanos qué necesitas y te respondemos el mismo día hábil.' },
    ],
  },
  {
    slug: 'casos-de-exito/tramitapa',
    parent,
    title: 'Caso TramitaPa: landing de captación para trámites de visa | Elemento Web',
    description: 'Cómo diseñamos la landing de TramitaPa, un servicio de trámites y asesoría de visa en Panamá, pensada para convertir consultas directo por WhatsApp.',
    h1: 'Caso TramitaPa: landing para captar consultas de visa por WhatsApp',
    breadcrumb: 'TramitaPa',
    lead: ['TramitaPa ofrece trámites y asesoría de visa. Necesitaba una página que explicara el servicio y llevara a la persona a una conversación por WhatsApp sin pasos de más.'],
    blocks: [
      { type: 'prose', h2: 'El problema', paragraphs: ['Un servicio de trámites vive de consultas. Quien busca una visa quiere saber rápido si puedes ayudarle y cómo empezar; una web larga o un formulario frío le hace perder el interés.'] },
      {
        type: 'checklist',
        h2: 'Qué construimos',
        items: [
          'Landing de captación enfocada en una sola acción: escribir por WhatsApp',
          'Estructura pensada para explicar el servicio y resolver las dudas frecuentes antes del contacto',
          'Diseño responsive, porque buena parte de las consultas llegan desde el celular',
          'Botón de WhatsApp visible en todo el recorrido',
        ],
      },
      { type: 'prose', h2: 'El sitio en vivo', paragraphs: ['TramitaPa · Trámites de visa · 2025. <a href="https://tramitapa.com" target="_blank" rel="noopener">Visitar tramitapa.com</a>.'] },
      { type: 'prose', h2: 'Lo que dice el cliente', paragraphs: ['<p>«Rehicieron nuestro sitio y las consultas por WhatsApp se multiplicaron. Entienden de negocio, no solo de diseño.» — Jhair Davis, fundador de TramitaPa.</p>'] },
      { type: 'prose', h2: 'Resultados', paragraphs: ['Todavía no publicamos cifras de este proyecto. Lo que vamos a medir: consultas calificadas recibidas por WhatsApp. Cuando esté documentado, con su periodo y su fuente, lo añadimos aquí.'] },
      {
        type: 'related',
        items: [
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'casos-de-exito', label: 'Todos los casos' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
      { type: 'form', h2: '¿Necesitas algo parecido?', intro: 'Cuéntanos tu caso y te respondemos el mismo día hábil.' },
    ],
    cta: { h2: '¿Hablamos de tu proyecto?', wa: 'Hola, vi el caso de TramitaPa y quiero cotizar algo parecido.' },
  },
  {
    slug: 'casos-de-exito/san-blas-full',
    parent,
    title: 'Caso San Blas Full: web de tours con reserva y depósito | Elemento Web',
    description: 'Cómo construimos el sitio multi-idioma de San Blas Full: selector de tour, reserva con depósito y soporte por WhatsApp para tours de un día.',
    h1: 'Caso San Blas Full: reservas de tours con depósito, en varios idiomas',
    breadcrumb: 'San Blas Full',
    lead: ['San Blas Full vende tours de un día a San Blas a viajeros de distintos países. El sitio tenía que permitirles elegir el tour, reservar y pagar un depósito en pocos minutos.'],
    blocks: [
      { type: 'prose', h2: 'El problema', paragraphs: ['El viajero compara varias opciones a la vez y decide rápido. Si no entiende qué tour elegir o cómo reservar, se va a otra oferta.'] },
      {
        type: 'checklist',
        h2: 'Qué construimos',
        items: [
          'Sitio multi-idioma para atender a viajeros de distintos idiomas',
          'Selector de tour para comparar y elegir la opción adecuada',
          'Reserva con depósito para asegurar el cupo',
          'Soporte por WhatsApp para resolver dudas antes de reservar',
        ],
      },
      { type: 'prose', h2: 'El sitio en vivo', paragraphs: ['San Blas Full · Turismo · Tours · 2025. <a href="https://sanblasfull.com" target="_blank" rel="noopener">Visitar sanblasfull.com</a>.'] },
      { type: 'prose', h2: 'Resultados', paragraphs: ['Todavía no publicamos cifras de este proyecto. Lo que vamos a medir: reservas con depósito. Cuando esté documentado, con su periodo y su fuente, lo añadimos aquí.'] },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-agencias-viajes-tours-panama', label: 'Diseño web para agencias de viajes y tours' },
          { slug: 'casos-de-exito', label: 'Todos los casos' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
      { type: 'form', h2: '¿Necesitas algo parecido?', intro: 'Cuéntanos tu caso y te respondemos el mismo día hábil.' },
    ],
    cta: { h2: '¿Hablamos de tu proyecto?', wa: 'Hola, vi el caso de San Blas Full y quiero cotizar algo parecido.' },
  },
  {
    slug: 'casos-de-exito/kl-contable',
    parent,
    title: 'Caso KL Contable: web corporativa para una firma contable | Elemento Web',
    description: 'Cómo diseñamos la web de KL Contable, una firma de contabilidad en Panamá: diez servicios, guías por tipo de cliente, calculadora de Seguro Social y blog propio.',
    h1: 'Caso KL Contable: web corporativa con guías y calculadora para una firma contable',
    breadcrumb: 'KL Contable',
    lead: ['KL Contable es una firma de contabilidad en Panamá. Su web tenía que explicar con claridad qué servicios ofrece y ayudar a cada tipo de cliente a encontrar el suyo.'],
    blocks: [
      { type: 'prose', h2: 'El problema', paragraphs: ['Los servicios contables se parecen entre sí y el cliente rara vez sabe cuál necesita. Una web que solo lista servicios no ayuda a decidir.'] },
      {
        type: 'checklist',
        h2: 'Qué construimos',
        items: [
          'Web corporativa con diez servicios explicados por separado',
          'Guías por tipo de cliente para orientar a quien no sabe por dónde empezar',
          'Calculadora de Seguro Social como herramienta útil y motivo de visita',
          'Blog propio para publicar contenido y posicionar por búsquedas específicas',
        ],
      },
      { type: 'prose', h2: 'El sitio en vivo', paragraphs: ['KL Contable · Contabilidad · 2026. <a href="https://klcontable.com" target="_blank" rel="noopener">Visitar klcontable.com</a>.'] },
      { type: 'prose', h2: 'Resultados', paragraphs: ['Todavía no publicamos cifras de este proyecto. Lo que vamos a medir: consultas por servicio y posicionamiento de las páginas de servicio y del blog. Cuando esté documentado, con su periodo y su fuente, lo añadimos aquí.'] },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Diseño web para contadores' },
          { slug: 'casos-de-exito', label: 'Todos los casos' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
      { type: 'form', h2: '¿Necesitas algo parecido?', intro: 'Cuéntanos tu caso y te respondemos el mismo día hábil.' },
    ],
    cta: { h2: '¿Hablamos de tu proyecto?', wa: 'Hola, vi el caso de KL Contable y quiero cotizar algo parecido.' },
  },
  {
    slug: 'casos-de-exito/panama-international-movers',
    parent,
    title: 'Caso Panama International Movers: web de mudanzas internacionales | Elemento Web',
    description: 'Cómo diseñamos la web de Panama International Movers: más de 30 servicios (marítimo, aéreo, autos, mascotas, oficinas), mapa de destinos y cotización por WhatsApp.',
    h1: 'Caso Panama International Movers: web para una empresa de mudanzas con más de 30 servicios',
    breadcrumb: 'Panama International Movers',
    lead: ['Panama International Movers es una empresa familiar de mudanzas internacionales que opera desde 1990. Su web debía ordenar una oferta amplia y facilitar pedir una cotización.'],
    blocks: [
      { type: 'prose', h2: 'El problema', paragraphs: ['Con más de 30 servicios, el riesgo es que el cliente se pierda. Una mudanza internacional depende del destino, la carga y el medio de transporte, así que la cotización arranca con esos datos.'] },
      {
        type: 'checklist',
        h2: 'Qué construimos',
        items: [
          'Estructura que organiza más de 30 servicios: marítimo, aéreo, autos, mascotas y oficinas',
          'Mapa de destinos para ubicar rápido a dónde se envía',
          'Cotización por WhatsApp desde cualquier página del sitio',
          'Diseño responsive para quien cotiza desde el celular',
        ],
      },
      { type: 'prose', h2: 'El sitio en vivo', paragraphs: ['Panama International Movers · Mudanzas internacionales · 2025. <a href="https://panamainternationalmovers.com" target="_blank" rel="noopener">Visitar panamainternationalmovers.com</a>.'] },
      { type: 'prose', h2: 'Resultados', paragraphs: ['Todavía no publicamos cifras de este proyecto. Lo que vamos a medir: cotizaciones recibidas por ruta y tipo de carga. Cuando esté documentado, con su periodo y su fuente, lo añadimos aquí.'] },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-logistica-transporte-panama', label: 'Diseño web para logística y transporte' },
          { slug: 'casos-de-exito', label: 'Todos los casos' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
      { type: 'form', h2: '¿Necesitas algo parecido?', intro: 'Cuéntanos tu caso y te respondemos el mismo día hábil.' },
    ],
    cta: { h2: '¿Hablamos de tu proyecto?', wa: 'Hola, vi el caso de Panama International Movers y quiero cotizar algo parecido.' },
  },
];
