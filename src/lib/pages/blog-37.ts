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
      alt: 'Rodillo de imprenta con mango, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para imprentas en Panamá funciona cuando la cotización llega completa: un formulario que pide producto, material, acabado, cantidad, medida y fecha, las especificaciones de arte publicadas y una página por línea de producción. En Elemento Web, ese formato parte desde $1,250 en el paquete Web empresarial, más ITBMS.',
      '«Buenas, ¿cuánto cuestan unas tarjetas de presentación?»: sin cantidad, material ni acabado, los tres datos que cambian el precio. El vendedor responde con preguntas, la respuesta tarda y ese mismo mensaje ya salió para otras dos imprentas. La conversación se repite quince o veinte veces al día en muchos talleres gráficos de Panamá, porque nadie le dijo al cliente qué información hace falta para cotizar.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué hace perder clientes en la web de una imprenta?',
        paragraphs: [
          'La cotización lenta. Nadie elige un taller gráfico por el logo de su web: elige al que cotizó primero con un precio concreto. La mayoría de las webs de imprentas en Panamá se quedan en el catálogo —fotos de trabajos, lista de servicios, un botón de WhatsApp genérico—, que confirma que el negocio existe pero no evita el ida y vuelta.',
          'Cada consulta sin cantidad, medida ni material obliga al vendedor a preguntar de nuevo, y en ese tiempo el cliente cotiza en otro lado. La solución no es otra persona en el teléfono, sino una web que pregunte antes lo que el vendedor iba a preguntar. Nuestra página de <a href="/industrias/diseno-web-imprentas-publicidad-panama/">diseño web para imprentas y publicidad</a> detalla cómo estructuramos esa cotización para un taller en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe pedir el formulario de cotización de una imprenta?',
        intro: 'Si tu formulario no pregunta esto, el vendedor sigue sacándolo por WhatsApp, dato por dato.',
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
        h2: '¿Por qué publicar las especificaciones de arte?',
        paragraphs: [
          'El otro cuello de botella es el archivo: baja resolución, RGB en lugar de CMYK, sin sangrado, textos sin convertir a curvas o una foto del diseño tomada con el celular. Cada caso es una llamada, una espera y, si nadie lo revisa a tiempo, un reimpreso que se come el margen. Muchas veces del otro lado no hay diseñador, sino alguien que armó el arte en Canva o en Word. Casi ninguna imprenta panameña publica sus especificaciones; hacerlo evita buena parte de esos retrasos y posiciona en búsquedas que hacen los diseñadores freelance.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo evitar el archivo mal preparado, paso a paso',
        intro: 'No hace falta asustar al cliente con jerga: basta un proceso simple.',
        items: [
          { h3: '1. Publica las especificaciones en un solo lugar', text: 'Formatos aceptados, resolución mínima, modo de color, sangrado y márgenes de seguridad, en una página que enlazas desde cualquier cotización.' },
          { h3: '2. Muestra el sangrado con un ejemplo visual', text: 'Un diagrama de dónde va el margen de seguridad explica en un segundo lo que un párrafo técnico no logra.' },
          { h3: '3. Da una forma de subir el archivo que no sea WhatsApp', text: 'Un enlace de carga asociado a la cotización evita la compresión que arruina la calidad y que un archivo de 200 MB se pierda en un chat.' },
          { h3: '4. Confirma con una prueba digital antes de imprimir', text: 'Un proof aprobado por el cliente antes de correr la máquina es la última red contra un reimpreso que nadie quiere pagar.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Una página por línea de producción, no una lista genérica',
        intro: 'Gran formato, papelería y rotulación las busca un cliente distinto con palabras distintas. En una sola lista de «servicios», ninguna compite.',
        items: [
          { h3: 'Papelería y tarjetas', text: 'Tarjetas de presentación, facturas, sobres y membretes. Volumen constante, cliente que compara precio por cantidad y tiempo de entrega.' },
          { h3: 'Gran formato', text: 'Banners, vallas, banderolas y lonas. El cliente pregunta por medida exacta y si el precio incluye instalación.' },
          { h3: 'Papelería promocional y eventos', text: 'Volantes, afiches e invitaciones para una fecha concreta, donde la entrega a tiempo pesa más que el precio.' },
          { h3: 'Rotulación y señalización', text: 'Vehículos, fachadas y letreros. El cliente corporativo evalúa si tienes cuadrilla propia de instalación, no solo si vendes el material.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cada línea es también una búsqueda distinta en Google',
        paragraphs: [
          '«Impresión de banners en Panamá», «tarjetas de presentación económicas» y «rotulación de vehículos» son búsquedas con intención propia. Si las tres viven en una sola página de servicios, esa página intenta responder tres preguntas a la vez y Google casi nunca la premia por ninguna.',
          'Si atiendes en un local con puerta abierta, muchas de esas búsquedas llevan «cerca de mí» o el nombre del barrio, y la ficha de Google Business Profile —horario real, fotos del local, reseñas recientes— pesa tanto como la web. Lo trabajamos como parte del <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>; nadie puede garantizar el primer lugar, pero sí dejar de perder búsquedas por una ficha desactualizada.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de tu imprenta?',
        paragraphs: [
          'Cuando tu taller ya trabaja a capacidad tope y no tienes margen para más pedidos en los próximos meses. Un formulario que cotiza mejor sirve para hacer crecer el trabajo que entra; si ese no es tu cuello de botella, el dinero rinde más en capacidad de producción (una prensa más, un turno extra, una cuadrilla de instalación).',
          'Tampoco es urgente si casi todo tu trabajo llega por licitación o contrato corporativo cerrado y no dependes de que te encuentren buscando «imprenta en Panamá». Ahí la web respalda —que se vea seria cuando el cliente la revisa antes de firmar— y el SEO y la cotización guiada pueden esperar.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de una imprenta o empresa de publicidad en Panamá?',
        paragraphs: [
          'Depende de qué necesitas resolver, no de cuántas páginas tenga el sitio. Si el negocio vive de cotizar cada trabajo, el formato que mejor rinde es una <a href="/servicios/diseno-web-corporativo-panama/">Web empresarial desde $1,250</a>, con formulario de cotización guiado, especificaciones de arte publicadas y una página por línea de producción. Para una sola línea puntual —una campaña de gran formato, por ejemplo— una landing enfocada parte de $550.',
          'Si vendes productos estándar que el cliente compra directo —tazas personalizadas, camisetas, imanes—, funciona mejor una tienda en línea, desde $1,950. Con volumen corporativo grande, aprobación de arte y seguimiento de pedidos que hoy llevas en hoja de cálculo y WhatsApp, entra un proyecto a medida con portal de cliente, desde $2,900.',
          'Aparte va la infraestructura —hosting compartido desde $225 al año, el plan cloud recomendado desde $350, o VPS dedicado desde $550 para catálogos grandes— y el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento</a>: $99 al mes en el plan Básico, $169 o $319 según la prioridad de respuesta que necesites. Los precios son en dólares y no incluyen el 7% de ITBMS. El detalle completo está en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">¿Cuánto cuesta una página web en Panamá?</a>',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para imprentas',
        items: [
          { q: '¿Qué debe pedir el formulario de cotización para que llegue completo?', a: 'Como mínimo: tipo de producto, material, acabado, cantidad, medida y fecha en la que lo necesita. Si aplica instalación, también la zona. Con esos datos el vendedor cotiza sin tener que volver a preguntar nada por WhatsApp.' },
          { q: '¿De verdad vale la pena publicar las especificaciones de arte?', a: 'Sí, porque evita buena parte de los reimpresos por resolución baja, sangrado faltante o textos sin convertir a curvas. Muchas veces del otro lado no hay un diseñador: hay alguien que armó el arte en Canva o en Word sin saber que esos detalles importan.' },
          { q: '¿Conviene tener una página por cada línea de producción?', a: 'Si manejas varias —papelería, gran formato, rotulación— sí. Cada una la busca un cliente distinto con palabras distintas, y una sola página de «servicios» no compite bien por ninguna. Si solo trabajas una línea, no hace falta fragmentar nada.' },
          { q: '¿Cuánto cuesta la web de una imprenta o empresa de publicidad en Panamá?', a: 'Depende de qué necesitas resolver. Una <a href="/servicios/diseno-web-corporativo-panama/">Web empresarial desde $1,250</a> cubre formulario de cotización, especificaciones de arte y una página por línea de producción; si vendes productos estándar con carrito de compra, una tienda en línea parte de $1,950. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
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
