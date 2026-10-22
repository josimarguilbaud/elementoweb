/* BLOG — Lote 25: guía sobre diseño web para corredores de seguros en Panamá.
   PageData con parent { slug: 'blog' }; el listado /blog la recoge por fecha
   y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog25: PageData[] = [
  {
    slug: 'blog/diseno-web-para-seguros-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para corredores de seguros en Panamá: qué cotiza',
    description: 'Qué necesita la web de un corredor de seguros en Panamá: una página por ramo, un cotizador simple y por qué el SEO en este rubro toma tiempo real.',
    h1: 'Diseño web para corredores de seguros en Panamá: ramos claros y un cotizador que sí convierte',
    breadcrumb: 'Diseño web para seguros',
    category: 'Diseño web',
    date: '2026-08-28',
    heroImage: {
      src: '/images/blog/diseno-web-para-seguros-panama.jpg',
      alt: 'Paraguas abierto, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para corredores de seguros en Panamá convierte cuando cada ramo (auto, salud, vida, colectivo) tiene su propia página, las aseguradoras y el número de corredor están a la vista y un cotizador corto pide solo el ramo y dos datos del riesgo. Así lo planteamos en Elemento Web, en Ciudad de Panamá.',
      'Quien busca "seguro de auto Panamá" abre tres o cuatro corredores y en menos de un minuto decide a cuáles escribir. Esta guía explica cada pieza, por qué el SEO en este rubro toma tiempo real y cuándo todavía no conviene una web nueva.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué busca un cliente en la web de un corredor de seguros?',
        paragraphs: [
          'Señales de que ese corredor entiende su ramo y estará ahí el día del siniestro, no solo el de la venta. Nadie compra un seguro por impulso: el visitante decide a cuál de los corredores abiertos en pestañas le escribe primero, y gana el que explica más claro, no el que grita "el seguro más barato de Panamá".',
          'Si tu página de "Seguros" mezcla auto, salud, vida y colectivo en un bloque, quien busca un ramo tiene que leer los otros tres y normalmente vuelve a Google. Nuestra <a href="/industrias/diseno-web-seguros-corredores-panama/">página de diseño web para corredores de seguros</a> detalla cómo estructuramos la web completa, del cotizador a la renovación de cartera.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Por qué cada ramo de seguros necesita su propia página?',
        intro: 'Nadie busca "corredor de seguros" a secas: busca el ramo que necesita, y cada uno trae un comprador con otra urgencia y otro criterio.',
        items: [
          { h3: 'Seguro de auto', text: 'El más buscado y el más competido: "seguro de auto Panamá" lo pelean corredores, aseguradoras y comparadores. El comprador cotiza con tres o cuatro corredores el mismo día y decide por quién respondió más rápido y más claro.' },
          { h3: 'Seguro de salud', text: 'Búsqueda más lenta y personal: "seguro médico Panamá" o "seguro de salud para la familia" lo escribe alguien pensando en sus hijos o sus padres. Quiere entender coberturas y exclusiones antes de dar un dato.' },
          { h3: 'Seguro de vida', text: 'Rara vez se busca con urgencia: se pospone hasta que algo lo empuja, un hijo, una hipoteca, un susto de salud. La página tiene que educar más que vender, porque muchos visitantes no saben qué póliza necesitan.' },
          { h3: 'Seguro empresarial y colectivo', text: 'Lo busca una empresa: "seguro colectivo para empleados" o "fianza de cumplimiento Panamá". Decide por respaldo y experiencia con negocios de su tamaño, no por el precio más bajo.' },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe incluir el diseño web para corredores de seguros?',
        items: [
          'Una página propia por cada ramo que de verdad coloques, no una lista de viñetas',
          'Un formulario de cotización corto, sin pedir cédula ni datos de salud en el primer paso',
          'Las aseguradoras con las que trabajas y tu número de corredor, visibles, no en el pie de página',
          'WhatsApp directo para la duda rápida antes de llenar cualquier formulario',
          'Contenido que explica coberturas y exclusiones en español simple, sin jerga de póliza',
          'Un rango o ejemplo de prima cuando sea posible darlo, en vez de esconder el precio por completo',
          'Cero promesas de "el seguro más barato de Panamá": casi nadie la compite en serio y suena a spam',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo debe ser el cotizador en la web de un corredor?',
        intro: 'Simple, no un motor de cotización: la prima real depende de la aseguradora y del perfil de riesgo. Lo que sí resuelve un formulario bien diseñado es la fricción del "quiero un precio ya".',
        items: [
          { h3: '1. El ramo primero', text: 'Una sola pregunta —auto, salud, vida o empresarial— antes de cualquier otro dato. Define a qué ejecutivo y con qué aseguradoras responder.' },
          { h3: '2. Solo los datos mínimos', text: 'Nombre, teléfono y uno o dos datos del riesgo (año del auto, cuántas personas en la familia). Nada de veinte campos con cédula o condición de salud desde el primer contacto.' },
          { h3: '3. Expectativa honesta antes de enviar', text: 'Una línea que aclare que no es un precio final, sino el primer paso para que un ejecutivo cotice con la aseguradora correcta.' },
          { h3: '4. Canal de respuesta a elección del cliente', text: 'Llamada, WhatsApp o correo. En un rubro que se cierra hablando, dejar elegir el canal sube cuántos contestan cuando les respondes.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto tarda el SEO para un corredor de seguros en Panamá?',
        paragraphs: [
          'Meses, no semanas. "Seguro de auto Panamá" y "seguro de salud Panamá" están entre las búsquedas más peleadas del país, entre corredores grandes, aseguradoras y comparadores internacionales. Gana quien sostiene contenido por ramo durante meses. Las preguntas más específicas —"qué cubre un seguro de auto todo riesgo en Panamá", "cuánto cuesta un seguro colectivo para diez empleados"— posicionan antes y traen tráfico que ya sabe lo que busca. Es el trabajo que explicamos en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
          'Mientras ese contenido madura, <a href="/marketing/google-ads-panama/">Google Ads</a> te pone arriba de las búsquedas genéricas desde la primera semana, con un costo por clic que hay que vigilar porque varios corredores pagan por el mismo clic. Pauta para el volumen inmediato, contenido propio para lo que se sostiene sin pagar cada mes.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie te puede prometer el primer lugar en "seguro de auto Panamá" en dos meses.',
        strong: 'Quien te lo prometa, o no conoce el rubro, o te está cobrando por algo que no va a entregar.',
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene a un corredor invertir en una web nueva?',
        paragraphs: [
          'Si tu cartera vive casi completa de renovaciones y referidos y no te interesa buscar clientes nuevos, una web con página por ramo es un canal que no usarás: basta un sitio de una página con tu contacto, tu licencia y WhatsApp, algo cercano a una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 más ITBMS. Tampoco conviene si aún no sabes en qué ramos te especializarás o llevas pocos meses colocando pólizas: el contenido saldría genérico.',
          'Una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> —Web empresarial desde $1,250 más ITBMS, con página por ramo y blog— se justifica cuando ya colocas en dos o más ramos con volumen real, quieres dejar de depender de referidos o la web actual no refleja el tamaño de la corredora. Precios en dólares, sin el 7% de ITBMS.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para corredores de seguros',
        items: [
          { q: '¿Cuánto cuesta la web de un corredor de seguros en Panamá?', a: 'Depende de cuántos ramos vas a mostrar. Una landing page enfocada en un solo ramo parte de $550, y una Web empresarial de hasta 6 páginas —la opción recomendada cuando colocas varios ramos— parte de $1,250. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿El cotizador de la web calcula la prima real?', a: 'No, y cualquiera que lo prometa está vendiendo más de lo que puede cumplir. La prima depende de la aseguradora y del perfil de riesgo. Lo que sí hace un buen formulario es recoger los datos mínimos para que tú cotices rápido con la aseguradora correcta.' },
          { q: '¿Vale la pena pelear el SEO de "seguro de auto Panamá"?', a: 'A largo plazo sí, pero hay que ser honesto: es una de las búsquedas más peleadas del país y toma meses de contenido sostenido, no semanas. Mientras ese trabajo madura, Google Ads te pone visible en esas mismas palabras desde la primera semana.' },
          { q: '¿Necesito una página distinta por cada ramo?', a: 'Si colocas más de uno con volumen real, sí. "Seguro de auto" y "seguro de vida" son búsquedas distintas, con compradores distintos, y una sola página de "Seguros" no le habla bien a ninguno de los dos. Si solo trabajas un ramo, no hace falta fragmentar nada.' },
          { q: '¿Cuándo no conviene invertir en una web nueva?', a: 'Si tu cartera vive casi completa de renovaciones y referidos, y no buscas clientes nuevos, una web grande es gastar en un canal que no vas a usar. Ahí basta un sitio simple de contacto. La web con página por ramo se justifica cuando sí quieres captar tráfico frío desde Google.' },
          { q: '¿Qué datos debe pedir el formulario de cotización?', a: 'Los mínimos: nombre, teléfono, ramo y uno o dos datos del riesgo. Pedir cédula o información de salud desde el primer contacto convierte peor y te hace responsable de custodiar datos sensibles, que la Ley 81 de Protección de Datos Personales trata con más cuidado.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-seguros-corredores-panama', label: 'Diseño web para corredores de seguros' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'marketing/google-ads-panama', label: 'Google Ads en Panamá' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Una web con página por ramo y un cotizador que sí convierte',
      wa: 'Hola, quiero una web para mi corredora de seguros en Panamá. ¿Me asesoran?',
    },
  },
];
