/* BLOG — Lote 37: guía long-form sobre diseño web para imprentas y empresas
   de publicidad impresa en Panamá. PageData con parent { slug: 'blog' }; el
   listado /blog la recoge por fecha y categoría. Enlaces internos solo a
   slugs reales del sitio. */
import type { PageData } from '../types';

export const blog37: PageData[] = [
  {
    slug: 'blog/diseno-web-para-imprentas-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para imprentas en Panamá: la cotización completa',
    description: 'Qué necesita la web de una imprenta en Panamá: formulario de cotización completo, especificaciones de arte y una página por línea de producción.',
    h1: 'Diseño web para imprentas en Panamá: la cotización que de verdad llega completa',
    breadcrumb: 'Diseño web para imprentas',
    category: 'Diseño web',
    date: '2026-09-09',
    heroImage: {
      src: '/images/blog/diseno-web-para-imprentas-panama.jpg',
      alt: 'Máquina de imprenta industrial en funcionamiento imprimiendo pliegos a color en un taller de artes gráficas',
    },
    lead: [
      'Alguien escribe por WhatsApp: «buenas, ¿cuánto cuestan unas tarjetas de presentación?». Sin cantidad, sin material, sin acabado, y sin saber que esos tres datos cambian el precio por completo. El vendedor responde con preguntas, la respuesta tarda, y mientras tanto ese mismo mensaje ya salió para otras dos imprentas. Esa conversación se repite quince o veinte veces al día en la mayoría de los talleres gráficos en Panamá, y no es porque el cliente sea desordenado: es que nadie le dijo qué información hace falta para cotizar bien.',
      'El problema no se resuelve contratando a alguien más para el teléfono: se resuelve con una web que pregunte, antes de que la conversación empiece, lo que el vendedor de todos modos iba a preguntar. En esta guía vemos qué debe pedir el formulario de cotización para que llegue completo, por qué publicar las especificaciones de arte evita el archivo mal preparado, cómo separar cada línea de producción en su propia página, y también cuándo, con honestidad, todavía no conviene meterle más presupuesto a esto.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Tu web no vende diseño: vende una cotización que no se atrasa',
        paragraphs: [
          'Un restaurante vende con fotos que dan hambre y una tienda vende con el precio a la vista. Una imprenta vende algo distinto: la certeza de que va a responder rápido, con un precio real, sin quince preguntas de por medio. Nadie elige un taller gráfico por el logo de su web; elige al que cotizó primero con algo concreto.',
          'La mayoría de las webs de imprentas en Panamá se quedan en el catálogo: fotos de trabajos anteriores, una lista de servicios y un botón de WhatsApp genérico. Eso confirma que el negocio existe, pero no resuelve lo que de verdad hace perder clientes, que es la cotización. Cada consulta que llega sin cantidad, sin medida y sin material obliga al vendedor a preguntar de nuevo, y en ese ida y vuelta el cliente ya cotizó en otro lado. Nuestra <a href="/industrias/diseno-web-imprentas-publicidad-panama/">página de diseño web para imprentas y publicidad</a> entra en el detalle completo de cómo estructuramos esa cotización para un taller en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que el formulario de cotización debe pedir sí o sí',
        intro: 'Si tu formulario de contacto —o el de tu web actual— no pregunta esto, el vendedor sigue teniendo que sacarlo por WhatsApp, uno por uno, cada vez.',
        items: [
          'Tipo de producto: tarjetas, banners, papelería, gran formato, no una casilla genérica de «otro»',
          'Material y acabado: vinil o lona no cuestan lo mismo, y mate o brillante también cambia el precio',
          'Cantidad exacta o un rango, porque el precio por unidad no baja de forma lineal',
          'Medida o tamaño, con una referencia visual para quien no maneja el término técnico',
          'Fecha en la que necesita el trabajo, para saber si entra en producción normal o es urgente',
          'Si el trabajo necesita instalación y en qué zona, cuando aplica',
          'Un campo para subir el arte, aunque en este primer paso sea opcional',
        ],
      },
      {
        type: 'prose',
        h2: 'El archivo mal preparado también retrasa la producción',
        paragraphs: [
          'El otro cuello de botella no es el precio: es el archivo. Baja resolución, en RGB en lugar de CMYK, sin sangrado, con textos sin convertir a curvas, o directamente una foto del diseño tomada con el celular. Cada uno de esos casos es una llamada, una espera, y si nadie lo revisa a tiempo, un reimpreso que se come el margen del trabajo.',
          'Casi ninguna imprenta panameña publica sus especificaciones técnicas. Se asume que el diseñador del cliente ya las conoce, y muchas veces no hay diseñador: hay alguien que armó el arte en Canva o en Word sin saber que la resolución o el sangrado importan. Publicarlas —formatos aceptados, resolución mínima, modo de color, sangrado y márgenes de seguridad— evita buena parte de esos retrasos antes de que el archivo llegue mal, y de paso posiciona en búsquedas que hacen los propios diseñadores freelance que sí saben qué están buscando.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo evitar el archivo mal preparado, paso a paso',
        intro: 'No hace falta convertirse en imprenta técnica ni asustar al cliente con jerga: hace falta ponerle un proceso simple delante.',
        items: [
          { h3: '1. Publica las especificaciones en un solo lugar', text: 'Formatos aceptados, resolución mínima, modo de color y sangrado, en una página que puedas enlazar desde cualquier cotización, no repetida de memoria por WhatsApp cada vez.' },
          { h3: '2. Muestra el sangrado con un ejemplo visual', text: 'Un diagrama simple de dónde va el margen de seguridad comunica en un segundo lo que un párrafo técnico no logra explicar a alguien sin experiencia en diseño.' },
          { h3: '3. Da una forma de subir el archivo que no sea WhatsApp', text: 'Un enlace de carga asociado a la cotización evita la compresión que arruina la calidad, y evita también que un archivo de 200 MB quede perdido en un chat.' },
          { h3: '4. Confirma con una prueba digital antes de imprimir', text: 'Un proof simple, aprobado por el cliente antes de correr la máquina, es la última red de seguridad contra un reimpreso que nadie quiere pagar.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Una página por línea de producción, no una lista genérica',
        intro: 'Gran formato, papelería y rotulación no las busca el mismo cliente ni con las mismas palabras. Juntarlas todas en una sola lista de «servicios» hace que ninguna compita de verdad.',
        items: [
          { h3: 'Papelería y tarjetas', text: 'Tarjetas de presentación, facturas, sobres y membretes. Volumen constante, cliente que compara precio por cantidad y tiempo de entrega.' },
          { h3: 'Gran formato', text: 'Banners, vallas, banderolas y lonas. Aquí el cliente pregunta por medida exacta y si el precio incluye instalación.' },
          { h3: 'Papelería promocional y eventos', text: 'Volantes, afiches e invitaciones para una fecha concreta, donde la entrega a tiempo pesa más que el precio.' },
          { h3: 'Rotulación y señalización', text: 'Vehículos, fachadas y letreros. El cliente corporativo evalúa si tienes cuadrilla propia de instalación, no solo si vendes el material.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cada línea es también una búsqueda distinta en Google',
        paragraphs: [
          '«Impresión de banners en Panamá», «tarjetas de presentación económicas» y «rotulación de vehículos» son búsquedas con intención y volumen propios. Si las tres viven en una sola página de servicios, le estás pidiendo a esa página que responda tres preguntas a la vez, y Google casi nunca la premia por ninguna.',
          'Si además atiendes en un local con puerta abierta, buena parte de esas búsquedas llevan «cerca de mí» o el nombre del barrio. Ahí la ficha de Google Business Profile pesa tanto como la propia web: horario real, fotos del local y reseñas recientes. Lo trabajamos como parte del <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>, aunque —como con cualquier SEO— nadie te puede garantizar el primer lugar; lo que sí se puede es dejar de perder esas búsquedas por una ficha desactualizada.',
        ],
      },
      {
        type: 'statement',
        text: 'El cliente no pide precio porque quiera negociar contigo.',
        strong: 'Lo pide porque nadie le dijo qué datos hacían falta, y ese es exactamente el problema que resuelve un formulario bien diseñado, no el vendedor más paciente del equipo.',
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir en esto todavía',
        paragraphs: [
          'Hay un caso en el que, con toda honestidad, no conviene meterle presupuesto todavía a una web que capte más consultas: cuando tu taller ya trabaja a capacidad tope y no tienes margen real para tomar más pedidos en los próximos meses. Un formulario que cotiza mejor y filtra consultas incompletas está pensado para un problema distinto —hacer crecer el volumen de trabajo que entra—, y si ese no es tu cuello de botella ahora mismo, el dinero rinde más resolviendo la capacidad de producción (una prensa más, un turno extra, una cuadrilla de instalación) que la captación.',
          'Tampoco es urgente si casi todo tu trabajo llega por licitación o por contrato corporativo ya cerrado, y no dependes de que alguien te encuentre buscando «imprenta en Panamá». Ahí la web cumple un papel de respaldo —que se vea seria cuando el cliente la revisa antes de firmar—, no de captación activa, y no hace falta apurar el SEO ni el formulario de cotización guiada todavía.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta la web de una imprenta o empresa de publicidad en Panamá',
        paragraphs: [
          'Depende de qué necesitas resolver, no de cuántas páginas tiene el sitio. Si el negocio vive de cotizar cada trabajo, el formato que mejor rinde es una <a href="/servicios/diseno-web-corporativo-panama/">Página PYME desde $950</a>, con el formulario de cotización guiado, las especificaciones de arte publicadas y una página por cada línea de producción. Si solo necesitas presencia para una línea puntual —una campaña de gran formato, por ejemplo— una landing enfocada parte de $550.',
          'Si en cambio vendes productos estándar que el cliente compra directo, sin necesidad de que nadie cotice a mano —tazas personalizadas, camisetas, imanes—, eso funciona mejor como tienda en línea, desde $1,500. Y si manejas volumen corporativo grande, con aprobación de arte y seguimiento de pedidos que hoy resuelves por hoja de cálculo y WhatsApp, ahí entra un proyecto a medida con portal de cliente, desde $2,900.',
          'A esto se suma la infraestructura —hosting compartido desde $225 al año, el plan cloud recomendado desde $350, o VPS dedicado desde $550 para catálogos grandes— y el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento</a>, que en el plan Básico parte de $59 al mes y sube a $99 o $189 según cuánta prioridad de respuesta necesites. Los precios son en dólares y no incluyen el 7% de ITBMS. El detalle completo, con todo lo que suma o resta al costo, está en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">¿Cuánto cuesta una página web en Panamá?</a>',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para imprentas',
        items: [
          { q: '¿Qué debe pedir el formulario de cotización para que llegue completo?', a: 'Como mínimo: tipo de producto, material, acabado, cantidad, medida y fecha en la que lo necesita. Si aplica instalación, también la zona. Con esos datos el vendedor cotiza sin tener que volver a preguntar nada por WhatsApp.' },
          { q: '¿De verdad vale la pena publicar las especificaciones de arte?', a: 'Sí, porque evita buena parte de los reimpresos por resolución baja, sangrado faltante o textos sin convertir a curvas. Muchas veces del otro lado no hay un diseñador: hay alguien que armó el arte en Canva o en Word sin saber que esos detalles importan.' },
          { q: '¿Conviene tener una página por cada línea de producción?', a: 'Si manejas varias —papelería, gran formato, rotulación— sí. Cada una la busca un cliente distinto con palabras distintas, y una sola página de «servicios» no compite bien por ninguna. Si solo trabajas una línea, no hace falta fragmentar nada.' },
          { q: '¿Cuánto cuesta la web de una imprenta o empresa de publicidad en Panamá?', a: 'Depende de qué necesitas resolver. Una <a href="/servicios/diseno-web-corporativo-panama/">Página PYME desde $950</a> cubre formulario de cotización, especificaciones de arte y una página por línea de producción; si vendes productos estándar con carrito de compra, una tienda en línea parte de $1,500. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Cuándo NO conviene invertir en esto todavía?', a: 'Si tu taller ya trabaja a capacidad tope y no tienes margen real para tomar más pedidos en los próximos meses, o si casi todo tu trabajo llega por licitación o contrato corporativo ya cerrado. En ambos casos el problema no es de captación, y meterle presupuesto a una web que atrae más consultas no resuelve nada.' },
          { q: '¿El SEO local sirve para una imprenta con local físico?', a: 'Sí, sobre todo si atiendes cliente que llega caminando o busca «imprenta cerca de mí». Una ficha de Google Business Profile completa, con horario real y fotos del local, suele pesar tanto como la propia web para ese tipo de búsqueda.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-imprentas-publicidad-panama', label: 'Diseño web para imprentas' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que cotiza bien y filtra las consultas que no van a cerrar',
      wa: 'Hola, quiero una web para mi imprenta o empresa de publicidad en Panamá. ¿Me asesoran?',
    },
  },
];
