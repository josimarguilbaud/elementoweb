/* BLOG — Lote 41: cómo elegir agencia de diseño web en Miami cuando el negocio
   opera en español, y qué necesita la web de un negocio hispano de Miami-Dade.
   Sin cifras de mercado ni precios de terceros. Elemento Web: sede en Panamá,
   100% remoto, factura en USD, sin oficina en Miami. Tratamiento fiscal: se
   confirma en la cotización. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog41: PageData[] = [
  {
    slug: 'blog/agencia-diseno-web-miami-en-espanol',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Agencia de diseño web en Miami en español: cómo elegir',
    description: 'Criterios y preguntas para elegir agencia de diseño web en Miami si tu negocio opera en español: proceso, dominio, mantenimiento, medición y pagos.',
    h1: 'Cómo elegir una agencia de diseño web en Miami si tu negocio opera en español',
    breadcrumb: 'Elegir agencia de diseño web en Miami',
    category: 'Diseño web',
    date: '2026-09-30',
    heroImage: {
      src: '/images/hero/miami--diseno-web-en-miami-en-espanol.jpg',
      alt: 'Propietario de un negocio en Miami comparando agencias de diseño web desde su computadora',
    },
    lead: [
      'Elige la agencia que trabaje en español de verdad (no solo que traduzca), que te muestre su proceso por escrito, que deje el dominio y el código a tu nombre, y que te diga qué pasa después de publicar. Dónde esté su oficina importa menos que esas cinco cosas.',
      'Esta guía te da los criterios, las preguntas que puedes hacerle a cualquier agencia y una sección honesta sobre cuándo conviene una con oficina en Miami y cuándo una remota como la nuestra. Somos de Panamá y trabajamos 100% remoto; lo decimos desde ya para que lo tengas en cuenta al leer.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Siete criterios para comparar agencias',
        intro: 'Úsalos como una lista para comparar cotizaciones por escrito, no solo por precio.',
        items: [
          { h3: '1. Español nativo', text: 'Que quien escribe y quien te atiende piense en español. Pide ver textos reales en español de trabajos anteriores, no una plantilla en inglés traducida. Pregunta quién revisa el contenido final.' },
          { h3: '2. Proceso claro', text: 'Etapas, entregables y tiempos escritos: qué recibes primero, cuándo ves una demo y cuántas rondas de cambios incluye la cotización. Un proceso que no se puede explicar en un párrafo suele improvisarse.' },
          { h3: '3. Propiedad del dominio y del código', text: 'El dominio debe estar registrado a tu nombre y debes recibir accesos. Pregunta si el código o el contenido quedan tuyos al terminar y qué pasa si un día cambias de proveedor.' },
          { h3: '4. Mantenimiento', text: 'Quién actualiza, respalda y vigila la web después de publicarla, y si eso está incluido, es opcional o se cobra aparte. Una web sin mantenimiento se degrada aunque nadie la toque.' },
          { h3: '5. Medición', text: 'Que la web quede lista para saber de dónde llegan las consultas (WhatsApp, formulario, llamadas). Sin medición, decidir qué mejorar es adivinar.' },
          { h3: '6. Pagos y facturación', text: 'Cuánto se paga al inicio y cuánto al entregar, en qué moneda y por qué medios, y qué documento recibes. Un pago por etapas te protege a ti y a la agencia.' },
          { h3: '7. Comunicación', text: 'Quién es tu contacto, por qué canal responde y en qué horario. Si tu negocio vive en WhatsApp, un proveedor que solo responde por tickets te va a frenar.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Preguntas para hacerle a cualquier agencia',
        intro: 'Funcionan igual con una agencia de Miami, de otra ciudad o con nosotros. Pide las respuestas por escrito.',
        items: [
          '¿Quién escribe los textos en español y quién los revisa antes de publicar?',
          '¿Qué incluye exactamente la cotización y qué queda fuera?',
          '¿Cuándo voy a ver una demo, antes o después de pagar la totalidad?',
          '¿A nombre de quién queda el dominio y quién tiene los accesos al terminar?',
          '¿Puedo llevarme la web a otro proveedor si algún día lo decido?',
          '¿Quién se encarga del hosting, los respaldos y las actualizaciones? ¿Cuánto cuesta y es obligatorio?',
          '¿Cómo voy a medir las consultas que llegan por WhatsApp y por formulario?',
          '¿Cómo se divide el pago, en qué moneda y qué documento recibo?',
          '¿Con quién hablo durante el proyecto y en qué horario responde?',
          '¿Puedo ver proyectos reales en español, con el enlace publicado?',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo conviene una agencia con oficina en Miami y cuándo una remota como nosotros',
        paragraphs: [
          'Conviene una agencia con oficina en Miami si para ti es importante reunirte en persona, hacer sesiones de trabajo presenciales, sesiones de fotos o video coordinadas con el equipo, o si tu proyecto exige alguien presente en tu local con frecuencia. Esa cercanía es un valor real y no lo minimizamos.',
          'Una agencia remota como Elemento Web puede convenirte si tu trabajo con el proveedor ya ocurre por WhatsApp, correo y videollamada, si tu web se construye con contenido que tú envías y revisas a distancia, y si quieres precios publicados en dólares. Tenemos sede en Panamá, trabajamos 100% remoto con negocios de Miami-Dade y no tenemos oficina en Miami; el contacto es por WhatsApp y videollamada, en tu horario de oficina.',
          'No comparamos precios con otras agencias porque no tenemos datos verificados de ellas. Lo más sano es pedir la misma información a dos o tres proveedores, remotos o locales, y compararla por alcance, plazos, propiedad y mantenimiento. Si quieres ver cómo trabajamos con negocios de la zona, empieza por <a href="/miami/diseno-web-en-miami-en-espanol/">diseño web en Miami en español</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué precios puedes esperar de nosotros',
        paragraphs: [
          'Nuestros precios están publicados en dólares: Landing desde $550, Web empresarial desde $1,250 (hasta 6 páginas en total), E-commerce desde $1,950 y proyectos a medida desde $2,900. El detalle de cada plan está en <a href="/precios/">precios</a>, y para un análisis de qué influye en el costo, tienes <a href="/blog/cuanto-cuesta-pagina-web-miami/">cuánto cuesta una página web en Miami</a>.',
          'Facturamos en USD desde nuestra empresa en Panamá. El tratamiento fiscal de tu factura se confirma en la cotización, antes de que pagues nada.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene contratar una agencia (o esta guía no te aplica)',
        paragraphs: [
          'Si tu negocio apenas está probando la idea y todavía no sabes qué vendes ni a quién, una agencia puede ser prematura: una página muy simple o una ficha en redes te da información más barata. Contratar antes de tener claro el mensaje suele terminar en rehacer el trabajo.',
          'Tampoco conviene si no puedes dedicar tiempo a enviar textos, fotos y revisiones. Ninguna agencia, local o remota, puede inventar el contenido de tu negocio por ti. Y si tu prioridad es tener a alguien presencial cada semana, elige un proveedor local desde el principio.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre elegir agencia en Miami',
        items: [
          { q: '¿Es mejor una agencia con oficina en Miami?', a: 'Depende de lo que valores. Si necesitas reuniones y sesiones presenciales, sí conviene. Si todo tu trabajo con el proveedor ocurre por WhatsApp y videollamada, una agencia remota puede servirte igual. Compara alcance, proceso y propiedad por escrito antes de decidir.' },
          { q: '¿Cómo sé si una agencia realmente trabaja en español?', a: 'Pídele ejemplos publicados en español, pregunta quién redacta y revisa los textos, y fíjate en cómo te escribe a ti. Un sitio traducido de una plantilla en inglés suele notarse en las frases y en el orden de la información.' },
          { q: '¿El dominio y el código deben ser míos?', a: 'Sí, lo razonable es que el dominio esté registrado a tu nombre y que recibas los accesos. Pregunta también qué pasa con el código y el contenido si cambias de proveedor, y que la respuesta quede por escrito.' },
          { q: '¿Cómo trabajan ustedes si no tienen oficina en Miami?', a: 'Somos de Panamá y trabajamos 100% remoto, por WhatsApp y videollamada, con demo en línea antes de publicar y pago por etapas. Facturamos en USD y el tratamiento fiscal se confirma en la cotización.' },
          { q: '¿Qué debo pedirle a una agencia antes de firmar?', a: 'Alcance por escrito, tiempos, forma de pago, propiedad del dominio y del contenido, qué incluye el mantenimiento y cómo se van a medir las consultas. Con eso puedes comparar cotizaciones de forma justa.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami', label: 'Diseño web en Miami, en español' },
          { slug: 'miami/diseno-web-en-miami-en-espanol', label: 'Páginas web para negocios hispanos de Miami' },
          { slug: 'miami/diseno-web-doral', label: 'Diseño web en Doral' },
          { slug: 'miami/diseno-web-hialeah', label: 'Diseño web en Hialeah' },
          { slug: 'blog/cuanto-cuesta-pagina-web-miami', label: 'Cuánto cuesta una página web en Miami' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
    ],
    cta: {
      h2: 'Pide una cotización por escrito y compárala con las demás',
      wa: 'Hola, tengo un negocio en Miami y quiero cotizar una página web en español. ¿Me asesoran?',
    },
  },
  {
    slug: 'blog/diseno-web-para-negocios-hispanos-miami',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para negocios hispanos en Miami: guía',
    description: 'Qué debe tener la web de un negocio hispano de Miami-Dade: español nativo, WhatsApp, precio visible, SEO local, versión bilingüe y velocidad en celular.',
    h1: 'Diseño web para negocios hispanos de Miami-Dade: qué necesita tu web para vender',
    breadcrumb: 'Diseño web para negocios hispanos en Miami',
    category: 'Diseño web',
    date: '2026-09-30',
    heroImage: {
      src: '/images/hero/miami--diseno-web-kendall.jpg',
      alt: 'Dueña de un negocio local en Miami-Dade revisando su página web desde el celular',
    },
    lead: [
      'La web de un negocio hispano de Miami-Dade necesita, como mínimo: textos en español nativo, un botón de WhatsApp visible, precios o rangos a la vista, información pensada para búsquedas locales en español, carga rápida en el celular y, solo si tu cliente lo pide, una versión en inglés bien hecha.',
      'No es una lista de adornos: cada punto responde a cómo un cliente hispano suele buscar, comparar y escribirte. Te explicamos cada pieza con ejemplos por tipo de negocio, sin cifras inventadas, y también cuándo no hace falta tanto.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Lo que necesita la web de un negocio hispano en Miami',
        intro: 'Estas piezas se aplican a casi cualquier negocio; el orden de prioridad cambia según lo que vendas.',
        items: [
          { h3: 'Español nativo', text: 'Textos escritos pensando en cómo habla tu cliente, no traducidos palabra por palabra de una plantilla en inglés. Vocabulario claro, tildes correctas y un tono que suene a tu negocio.' },
          { h3: 'WhatsApp como canal principal', text: 'Un botón visible desde el primer vistazo, con un mensaje inicial ya escrito que diga qué servicio consulta la persona. Es el canal donde muchos clientes prefieren escribir antes que llenar un formulario.' },
          { h3: 'Precio visible', text: 'Si puedes mostrar precios, rangos o un "desde", hazlo. Si el precio depende del caso, explica de qué depende. Obligar a llamar para saber el costo hace que parte de las visitas se vaya.' },
          { h3: 'SEO local en español', text: 'Páginas que expliquen qué haces y en qué zonas atiendes, con las palabras que tu cliente usa al buscar. No prometemos posiciones: el SEO ayuda a que te encuentren, pero depende de la competencia y de la constancia.' },
          { h3: 'Bilingüe cuando el cliente lo requiera', text: 'Si parte de tus clientes prefiere inglés, se agrega como segundo idioma con contenido revisado. Un inglés a medias resta credibilidad; es mejor uno solo bien hecho que dos incompletos.' },
          { h3: 'Velocidad en el celular', text: 'La mayoría de los clientes locales te verán desde el teléfono. Imágenes ligeras, poco código innecesario y botones grandes hacen que la web se abra y se use bien.' },
          { h3: 'Google Business Profile, si aplica a tu negocio', text: 'Si tienes un local o das servicio en una zona, tu ficha de Google Business Profile complementa la web: horario, dirección o zona de servicio y reseñas. Tiene requisitos propios de Google, y la web debe coincidir con los datos de la ficha.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Ejemplos por tipo de negocio',
        intro: 'No son casos reales ni datos de mercado: son ejemplos de cómo cambia la prioridad según el negocio.',
        items: [
          { h3: 'Restaurante o cafetería', text: 'Menú legible desde el celular (en la página, no solo en un PDF), horario, ubicación y botón para pedir o reservar por WhatsApp. Si tiene local, la ficha de Google Business Profile pesa mucho.' },
          { h3: 'Clínica, consultorio o servicio de salud', text: 'Especialidades explicadas en español sencillo, cómo pedir cita, ubicación y qué documentos llevar. Nada de promesas médicas: solo información clara y contacto directo.' },
          { h3: 'Contador, abogado o agente de seguros', text: 'Servicios explicados por tipo de caso, cómo es la primera consulta y en qué idiomas atiendes. El cliente quiere sentir confianza antes de escribir.' },
          { h3: 'Servicios a domicilio (limpieza, plomería, aire acondicionado)', text: 'Zonas que atiendes, tipos de servicio, forma de pedir presupuesto por WhatsApp con fotos y una explicación de cómo cotizas. La zona de servicio pesa más que la dirección.' },
          { h3: 'Tienda o comercio de barrio', text: 'Catálogo básico con precios, horario, cómo comprar o recoger, y si conviene, una tienda en línea. Depende de cuántos productos tengas y de si puedes atender los pedidos.' },
          { h3: 'Bienes raíces o comercio internacional', text: 'Fichas claras de propiedades o líneas de producto, contacto directo y, cuando el cliente viene de varios países, versión bilingüe desde el inicio.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo lo trabajamos y cuánto cuesta',
        paragraphs: [
          'Trabajamos desde Panamá, 100% remoto, con negocios de Miami-Dade: coordinamos por WhatsApp y videollamada, mostramos una demo en línea antes de publicar y cobramos por etapas. Facturamos en USD y no tenemos oficina en Miami. Tienes la explicación de la oferta en <a href="/miami/diseno-web-en-miami-en-espanol/">diseño web en Miami en español</a>.',
          'Los precios publicados son: Landing desde $550, Web empresarial desde $1,250 (hasta 6 páginas en total), E-commerce desde $1,950 y proyectos a medida desde $2,900. Puedes ver el detalle en <a href="/precios/">precios</a>. El tratamiento fiscal de tu factura se confirma en la cotización.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir en todo esto',
        paragraphs: [
          'Si tu negocio recibe casi todos sus clientes por recomendación y todavía no necesitas que te encuentren nuevos, una landing sencilla con tus servicios y un botón de WhatsApp suele ser suficiente. No hace falta una web de muchas páginas para empezar.',
          'La versión bilingüe tampoco conviene si nadie va a mantener el inglés al día o si tus clientes no lo piden: es mejor un solo idioma bien cuidado. Y el SEO local rinde poco si no tienes tiempo para publicar contenido o pedir reseñas; en ese caso, mejor mejorar primero lo que ya tienes.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre webs para negocios hispanos en Miami',
        items: [
          { q: '¿Mi web tiene que estar en inglés y en español?', a: 'No necesariamente. Si tus clientes hablan español, un sitio en español bien hecho es lo principal. Si también atiendes clientes que prefieren inglés, se agrega como segundo idioma con contenido revisado, sin duplicar el proyecto desde cero.' },
          { q: '¿Por qué importa tanto WhatsApp?', a: 'Porque para muchos negocios es el canal donde el cliente prefiere preguntar. Un botón visible con un mensaje inicial listo reduce pasos y te deja la conversación ya iniciada. Conviene medir cuántas consultas llegan por ahí.' },
          { q: '¿Debo poner precios en mi web?', a: 'Si puedes, sí: un precio, un "desde" o una explicación de qué lo define. Cuando no es posible, explica cómo cotizas y cuánto tardas en responder, para que el cliente sepa qué esperar.' },
          { q: '¿Necesito Google Business Profile?', a: 'Solo si aplica a tu negocio, por ejemplo si tienes un local abierto al público o das servicio en una zona definida. Google tiene sus propias reglas para crear la ficha. Si aplica, conviene que los datos coincidan con los de tu web.' },
          { q: '¿Pueden garantizarme que aparezca en Google?', a: 'No, y desconfía de quien lo prometa. Podemos dejar la web bien estructurada, rápida y con contenido útil en español, pero la posición depende de la competencia, de Google y de la constancia en el tiempo.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami', label: 'Diseño web en Miami, en español' },
          { slug: 'miami/diseno-web-en-miami-en-espanol', label: 'Páginas web para negocios hispanos de Miami' },
          { slug: 'miami/diseno-web-doral', label: 'Diseño web en Doral' },
          { slug: 'miami/diseno-web-hialeah', label: 'Diseño web en Hialeah' },
          { slug: 'blog/cuanto-cuesta-pagina-web-miami', label: 'Cuánto cuesta una página web en Miami' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
    ],
    cta: {
      h2: 'Cuéntanos qué vende tu negocio y qué necesita tu web',
      wa: 'Hola, tengo un negocio hispano en Miami-Dade y quiero una web en español. ¿Me asesoran?',
    },
  },
];
