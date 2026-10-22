/* BLOG — Lote 24: guía long-form sobre diseño web para importadoras y
   distribuidoras en Panamá. PageData con parent { slug: 'blog' }; el listado
   /blog la recoge por fecha y categoría. Enlaces internos solo a slugs reales
   del sitio. */
import type { PageData } from '../types';

export const blog24: PageData[] = [
  {
    slug: 'blog/diseno-web-para-importadoras-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para importadoras en Panamá: catálogo que vende',
    description: 'Qué necesita la web de una importadora en Panamá: catálogo por línea de producto, alcance regional y cuándo no conviene invertir.',
    h1: 'Diseño web para importadoras y distribuidoras en Panamá: el catálogo que sí vende',
    breadcrumb: 'Diseño web para importadoras',
    category: 'Diseño web',
    date: '2026-08-27',
    heroImage: {
      src: '/images/blog/diseno-web-para-importadoras-panama.jpg',
      alt: 'Palé con cajas apiladas, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para importadoras y distribuidoras en Panamá vende cuando el catálogo responde "¿tienen esta línea?" sin que el comprador escriba: categorías por línea de producto, buscador por código o referencia, una página por línea con sus marcas y formulario de cotización por cantidad y zona. Así lo armamos en Elemento Web, Ciudad de Panamá.',
      'El comprador de una ferretería en David, un minimarket en Santiago o una empresa en San José busca en Google antes de levantar el teléfono. Esta guía explica cómo organizar el catálogo, qué aporta el hub regional de Panamá, cuándo pesan las fichas técnicas y cuándo todavía no conviene invertir.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Cómo elige proveedor un comprador mayorista?',
        paragraphs: [
          'En silencio. Comprar al por mayor no es impulso: hay continuidad e inventario en juego. El comprador revisa dos o tres catálogos, compara qué marcas manejan y qué tan formal se ve cada uno, y escribe casi siempre a uno solo. Si tu web no responde "¿tienen esto?" sin obligar a preguntar, quedas fuera de la ronda sin saber que estuviste en ella.',
          'Nuestra <a href="/industrias/diseno-web-importadoras-distribuidoras-panama/">página de diseño web para importadoras y distribuidoras</a> cubre la base de credibilidad B2B: RUC visible, marcas representadas, zona privada de precios. Esta guía se enfoca en cómo organizar el catálogo para ese comprador silencioso.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe tener el diseño web para importadoras?',
        intro: 'El comprador mayorista entra a confirmar algo puntual. Si el catálogo no se lo confirma rápido, cierra la pestaña.',
        items: [
          'Categorías por línea de producto, no por fecha de ingreso ni todo apretado bajo un solo "Productos"',
          'Buscador interno que entienda código, modelo o referencia, no solo el nombre comercial',
          'Foto real del producto o del catálogo del fabricante, nunca un ícono genérico de caja',
          'Disponibilidad visible o al menos "consultar stock", sin obligar a escribir solo para saberlo',
          'Fecha de actualización del catálogo a la vista: uno sin fecha se asume viejo, y de ahí se duda del inventario',
          'Un formulario de cotización o apertura de cuenta que pida línea, cantidad y zona de entrega antes del teléfono',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo organizar un catálogo grande por línea de producto?',
        intro: 'Con cientos de referencias, la estructura decide más que el diseño. Así lo ordenamos.',
        items: [
          { h3: '1. Agrupar por línea, no por llegada', text: 'El criterio es la línea que tu comprador ya tiene en la cabeza —tornillería, iluminación, autopartes, abarrotes—, no "lo que entró este mes". Agrupar por fecha de ingreso sirve para tu bodega, no para quien te compra.' },
          { h3: '2. Una página por línea, con sus marcas adentro', text: 'Cada línea con volumen real merece su propia página, con las marcas que representas. Así, quien busca "distribuidor de [marca] en Panamá" encuentra una página dedicada, no un PDF de sesenta páginas.' },
          { h3: '3. La ficha con lo que el comprador necesita para decidir', text: 'Presentación, empaque por caja, unidad mínima de pedido y especificación técnica cuando aplica. Con solo foto y nombre, el comprador tiene que preguntar por WhatsApp lo que la ficha debió responder.' },
          { h3: '4. Filtros que un comprador mayorista usa de verdad', text: 'Marca, presentación, rango de precio si lo publicas, disponibilidad. Un filtro por color en un catálogo industrial es trabajo que nadie usará.' },
          { h3: '5. Descarga actualizada, además del catálogo navegable', text: 'El catálogo web es lo que te encuentra en Google; una descarga en PDF o en hoja de cálculo, con fecha visible, es lo que tu comprador usa después para armar su pedido interno.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Puede la web de una importadora captar compradores de otros países?',
        paragraphs: [
          'Sí, si está armada para eso. Panamá redistribuye mercancía a media región desde hace décadas —la Zona Libre de Colón es la zona franca más grande de América—, y un comprador en Costa Rica, República Dominicana o Guatemala que busca proveedor también busca en Google. Para que llegue a tu catálogo hace falta aparecer en las búsquedas correctas, explicar la cobertura logística (a qué países despachas, con qué plazo, quién asume el trámite aduanero) y usar el idioma y las unidades que ese comprador entiende.',
          'Es <a href="/crecimiento/seo-posicionamiento-web-panama/">trabajo de SEO y posicionamiento</a> sostenido, no un interruptor, y un catálogo en PDF por correo nunca lo captará porque Google no indexa lo que no vive en una página. Si tu línea es muy específica o el volumen regional es bajo, suma alcance: es una puerta más, no una promesa de expansión.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo necesita una importadora fichas técnicas y certificaciones?',
        paragraphs: [
          'En productos regulados: alimentos, cosméticos, dispositivos médicos, material eléctrico, insumos de construcción. Ahí una cadena o un supermercado pide registro sanitario, ficha de seguridad o certificación del fabricante antes de la primera orden, y no publicarlo frena justo al comprador que más volumen mueve. En ropa, artículos para el hogar o mercancía general, bastan foto clara, empaque y unidad de venta.',
          'Regla práctica: si tu producto necesita un papel para pasar por aduana o para revenderse, ese papel va en la ficha del producto. Si no lo necesita, no lo inventes. Confirma con tu asesor legal o el ente regulador cuáles aplican a cada línea antes de publicar.',
        ],
      },
      {
        type: 'statement',
        text: 'Un comprador mayorista no elige al proveedor con el catálogo más bonito: elige al que le confirma más rápido',
        strong: 'que tiene la línea que busca, en el empaque y la cantidad que necesita.',
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en el catálogo de una importadora?',
        paragraphs: [
          'Si tienes cuatro o cinco clientes fijos que te compran por relación y no tienes bodega, equipo comercial ni intención de crecer esa cartera, un catálogo grande, SEO regional y fichas técnicas son inversión para una demanda que no atenderás. Para presencia mínima —que te encuentren y confirmen RUC y contacto— basta una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 más ITBMS.',
          'La inversión se justifica cuando quieres dejar de depender de esa cartera fija, captar al comprador que hoy no te conoce o ya tienes más líneas de las que un PDF puede ordenar con claridad.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de una importadora o distribuidora en Panamá?',
        paragraphs: [
          'Depende del tamaño del catálogo, no de si vendes en línea. Con pocas líneas, un <a href="/servicios/diseno-web-corporativo-panama/">sitio corporativo</a> —Web empresarial desde $1,250 más ITBMS— alcanza para una página por línea, formulario de cotización y blog. Con cientos de referencias que necesitan buscador, filtros y fichas, el trabajo entra en el rango de <a href="/servicios/tiendas-online-ecommerce-panama/">catálogo con sistema de inventario</a> desde $1,950, aunque no cobres en línea: lo que sube el costo es organizar el catálogo, no el checkout. Zona privada con precios por cliente, integración con tu ERP o varios idiomas se cotizan como proyecto corporativo a medida desde $2,900.',
          'Se suma infraestructura anual —hosting compartido desde $225, cloud desde $350 (la opción que usamos por defecto) o VPS dedicado desde $550, con dominio y SSL incluidos— y mantenimiento de $99, $169 o $319 al mes, según el acompañamiento que necesites. Precios en dólares, sin el 7% de ITBMS. El desglose está en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para importadoras y distribuidoras',
        items: [
          { q: '¿Necesito una tienda online si no vendo directo al consumidor?', a: 'No necesariamente un carrito de compra, pero sí un catálogo con la misma solidez técnica que una tienda: buscador, filtros, fichas y disponibilidad. El objetivo no es cobrar en línea, es que el comprador mayorista confirme que tienes lo que busca y te deje una cotización calificada.' },
          { q: '¿Cuánto cuesta la web de una importadora o distribuidora en Panamá?', a: 'Depende del tamaño del catálogo. Con pocas líneas, un sitio corporativo parte de $1,250. Con un catálogo grande que necesita buscador y fichas por producto, el rango se acerca al de e-commerce, desde $1,950. Un proyecto con zona privada de precios, integración con tu ERP o varios idiomas se cotiza a medida desde $2,900. Todo en dólares, sin el 7% de ITBMS.' },
          { q: '¿De verdad me sirve para vender a Centroamérica o el Caribe?', a: 'Puede sumar alcance real, porque Panamá funciona como hub comercial regional y un comprador en otro país también busca proveedor en Google. Pero no es automático: hay que trabajar el SEO, publicar cobertura logística clara y no prometerte una expansión que depende de más factores que tu sitio web.' },
          { q: '¿Necesito fichas técnicas y certificaciones en mi catálogo?', a: 'Solo si tu producto las necesita. Alimentos, cosméticos, dispositivos médicos o material eléctrico suelen exigir registro sanitario o certificación antes de que un comprador serio compre. Mercancía general, como ropa o artículos para el hogar, no lo necesita: ahí pesa más la foto, el empaque y el precio.' },
          { q: '¿Puedo mostrar el catálogo sin publicar mi precio mayorista?', a: 'Sí, y es lo que hacen la mayoría de nuestros clientes en este rubro. El catálogo público muestra qué distribuyes y de qué marcas; el precio vive detrás de un registro, para clientes con cuenta aprobada. Publicar qué vendes es visibilidad, publicar a cuánto es una decisión aparte.' },
          { q: '¿Cuándo no me conviene invertir en esto?', a: 'Si tu cartera de clientes fijos te sostiene, no piensas crecerla y no tienes capacidad de atender más volumen, gastar en catálogo grande, SEO regional o fichas técnicas es pagar por una demanda que no vas a atender. Ahí una presencia mínima, una landing con tus datos y tu contacto, es más honesta que sobre-construir.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Diseño web para importadoras y distribuidoras' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas online y e-commerce' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Un catálogo que confirma que tienes lo que buscan, no una consulta perdida',
      wa: 'Hola, quiero una web para mi importadora o distribuidora en Panamá. ¿Me asesoran?',
    },
  },
];
