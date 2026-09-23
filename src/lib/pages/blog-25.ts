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
      alt: 'Escritorio de oficina con laptop, documentos y un paraguas negro abierto sobre la silla como símbolo de cobertura, con luz natural de ventana',
    },
    lead: [
      'Nadie llega a la web de un corredor listo para pagar. Escribe "seguro de auto Panamá" o "seguro de salud para la familia", abre tres o cuatro resultados y en menos de un minuto decide a cuáles vale la pena escribirles. No está evaluando quién tiene el sitio más bonito: busca señales de que ese corredor entiende su ramo y va a estar ahí el día del siniestro, no solo el día de la venta.',
      'La mayoría de las webs de corredores en Panamá pierden esa primera decisión sin darse cuenta: mezclan todos los ramos en una sola página de "Seguros", no dicen con qué aseguradoras trabajan y no dan ninguna forma de pedir un precio sin llamar. En esta guía repasamos por qué cada ramo necesita su propia página, cómo armar un cotizador simple que sí convierte, por qué el SEO en este rubro es una carrera larga —y qué hacer mientras tanto—, y cuándo, con honestidad, todavía no conviene invertir en una web nueva.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué nadie compra un seguro por impulso, y qué significa eso para tu web',
        paragraphs: [
          'Comparar es el verbo que define este rubro. El visitante que llega a tu web no está decidiendo entre comprar hoy o mañana: está decidiendo a cuál de los tres o cuatro corredores que tiene abiertos en pestañas distintas le va a escribir primero. Gana el que explica más claro, no el que grita más fuerte "el seguro más barato de Panamá".',
          'Esa comparación no perdona una web genérica. Si tu página de "Seguros" mezcla auto, salud, vida y colectivo en un solo bloque de texto, el visitante que busca un ramo específico tiene que leer sobre los otros tres para encontrar el suyo, y la mayoría simplemente no lo hace: vuelve a Google y prueba con el siguiente resultado.',
          'Esta guía se enfoca en tres decisiones concretas de diseño web para una corredora en Panamá: por qué cada ramo merece su propia página, cómo diseñar un cotizador simple que baje la fricción sin fingir ser un motor de cotización real, y cómo pelear un mercado de palabras clave carísimas sin prometer magia. Nuestra <a href="/industrias/diseno-web-seguros-corredores-panama/">página de diseño web para corredores de seguros</a> entra en más detalle sobre cómo estructuramos toda la web, del cotizador a la renovación de cartera.',
        ],
      },
      {
        type: 'cards',
        h2: 'Ramos claros: cada uno es una búsqueda y un comprador distintos',
        intro: 'Nadie busca "corredor de seguros" a secas. Busca el ramo que necesita, y cada ramo trae un comprador con una urgencia y un criterio de decisión distintos.',
        items: [
          { h3: 'Seguro de auto', text: 'El más buscado y el más competido: "seguro de auto Panamá" lo pelean corredores, aseguradoras y comparadores a la vez. El comprador típico cotiza con tres o cuatro corredores el mismo día y decide por quién respondió más rápido y más claro.' },
          { h3: 'Seguro de salud', text: 'Búsqueda más lenta y más personal: "seguro médico Panamá" o "seguro de salud para la familia" casi siempre lo escribe alguien pensando en sus hijos o en sus padres. Quiere entender coberturas y exclusiones antes de dar un solo dato, no un precio a ciegas.' },
          { h3: 'Seguro de vida', text: 'Rara vez se busca con urgencia real: se pospone hasta que algo lo empuja, un hijo, una hipoteca, un susto de salud cercano. La página tiene que educar más que vender, porque buena parte de los visitantes todavía no sabe qué tipo de póliza necesita.' },
          { h3: 'Seguro empresarial y colectivo', text: 'Lo busca una empresa, no una persona: "seguro colectivo para empleados" o "fianza de cumplimiento Panamá". Decide por respaldo y experiencia con negocios de su tamaño, no por el precio más bajo de una lista de aseguradoras.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de un corredor necesita sí o sí',
        intro: 'Si tu web mete los cuatro ramos en una sola página de "Seguros", ya perdiste la mitad de estas búsquedas antes de competir por ellas.',
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
        h2: 'Un cotizador simple, no un motor de cotización',
        intro: 'La prima real depende de la aseguradora y del perfil de riesgo, y eso no lo resuelve ninguna web. Lo que sí resuelve un formulario bien diseñado es la fricción del "quiero un precio ya".',
        items: [
          { h3: '1. El ramo primero', text: 'Una sola pregunta —auto, salud, vida o empresarial— antes de pedir cualquier otro dato. Define de inmediato a qué ejecutivo y con qué aseguradoras responder.' },
          { h3: '2. Solo los datos mínimos', text: 'Nombre, teléfono y uno o dos datos del riesgo (año del auto, cuántas personas en la familia). Nada de formularios de veinte campos que piden cédula o condición de salud desde el primer contacto.' },
          { h3: '3. Expectativa honesta antes de enviar', text: 'Una línea que aclare que esto no es un precio final, sino el primer paso para que un ejecutivo cotice con la aseguradora correcta. Evita la queja de "pedí una cotización y me llamaron a vender otra cosa".' },
          { h3: '4. Canal de respuesta a elección del cliente', text: 'Llamada, WhatsApp o correo. En un rubro que se cierra hablando, dejar elegir el canal sube cuántos de verdad contestan cuando les respondes.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Un mercado carísimo por palabras clave genéricas: seamos honestos con el SEO',
        paragraphs: [
          '"Seguro de auto Panamá", "seguro de salud Panamá" y variantes parecidas están entre las búsquedas más peleadas del país: las disputan corredores grandes, aseguradoras con presupuesto propio y comparadores internacionales. Cualquiera que te prometa la primera posición orgánica en esas frases en pocos meses te está vendiendo algo que no puede cumplir.',
          'El SEO orgánico ahí sí funciona, pero con las reglas del rubro: gana el que sostiene contenido por ramo durante meses, no el que publica una vez y espera. Preguntas más específicas y menos peleadas —"qué cubre un seguro de auto todo riesgo en Panamá", "cuánto cuesta un seguro colectivo para diez empleados"— tardan menos en posicionar y traen un tráfico que ya sabe lo que busca. Ese es el trabajo de fondo que explicamos en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
          'Mientras ese contenido madura, el camino más rápido para aparecer en las búsquedas genéricas desde el primer día es la pauta. <a href="/marketing/google-ads-panama/">Google Ads</a> te pone arriba de esas palabras peleadas desde la primera semana, con un costo por clic que hay que vigilar de cerca en un rubro donde varios corredores pagan por el mismo clic. Es la combinación honesta: pauta para el volumen inmediato, contenido propio para el que se sostiene sin pagar cada mes.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie te puede prometer el primer lugar en "seguro de auto Panamá" en dos meses.',
        strong: 'Quien te lo prometa, o no conoce el rubro, o te está cobrando por algo que no va a entregar.',
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir en una web nueva',
        paragraphs: [
          'Si tu cartera vive casi completa de renovaciones y de referidos —clientes de siempre, recomendados por otros clientes— y honestamente no te interesa salir a buscar nuevos, una web grande con página por ramo es gastar en un canal que no vas a usar. Ahí rinde más un sitio simple de una sola página con tu contacto, tu licencia y un WhatsApp directo: algo cercano a una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 más ITBMS, no una web pensada para captar tráfico frío por ramo.',
          'Tampoco conviene si todavía no sabes en qué ramos te vas a especializar o llevas pocos meses colocando pólizas: no hay experiencia real que mostrar en cada página, y ese contenido saldría genérico, que es justo lo que hace que la web de un corredor no se distinga de otra.',
          'Donde sí se justifica una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> —una Página PYME desde $950 más ITBMS, con página por ramo y blog— es cuando ya colocas en dos o más ramos con volumen real, quieres dejar de depender solo de referidos, o la cartera creció y la web actual, si existe, ya no refleja el tamaño real de la corredora. Los precios son en dólares y no incluyen el 7% de ITBMS.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para corredores de seguros',
        items: [
          { q: '¿Cuánto cuesta la web de un corredor de seguros en Panamá?', a: 'Depende de cuántos ramos vas a mostrar. Una landing page enfocada en un solo ramo parte de $550, y una Página PYME de 8 a 12 páginas —la opción recomendada cuando colocas varios ramos— parte de $950. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
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
