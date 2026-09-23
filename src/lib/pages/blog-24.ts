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
      alt: 'Pasillo de una bodega de distribución mayorista con estanterías industriales llenas de cajas de producto en pallets y un montacargas amarillo al fondo, instalación amplia y bien iluminada',
    },
    lead: [
      'El gerente de compras de una ferretería en David, el dueño de un minimarket en Santiago o un comprador en San José que busca proveedor en Panamá hacen lo mismo antes de levantar el teléfono: buscan en Google si el importador tiene la línea que necesitan. Si tu web no lo muestra en los primeros segundos, sin que tengan que escribirte primero para preguntar, ese comprador ya está mirando el catálogo de otro distribuidor.',
      'Esta guía va sobre eso: cómo organizar un catálogo mayorista por línea de producto para que se navegue en vez de preguntarse, qué significa de verdad que Panamá sea un hub comercial regional para tu web, cuándo las fichas técnicas y certificaciones pesan en la decisión de compra —y cuándo no—, y también cuándo, con honestidad, todavía no te conviene invertir en nada de esto.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Un comprador B2B te investiga antes de escribirte, no después',
        paragraphs: [
          'Comprar al por mayor no es una decisión de impulso: hay continuidad e inventario en juego. El comprador que ya tiene un proveedor y evalúa cambiar, o el que abre una línea nueva, no llama a cuatro distribuidores para preguntar lo mismo cuatro veces. Revisa en silencio dos o tres catálogos, compara qué marcas manejan y qué tan formal se ve cada uno, y recién ahí escribe, casi siempre a uno solo.',
          'Ese proceso de descarte pasa antes de que tu teléfono suene, y si tu web no responde "¿tienen esto?" sin obligar a preguntar, quedas fuera de la ronda sin enterarte siquiera de que estuviste en ella. No perdiste una venta que rechazaste: perdiste una que nunca supiste que existió.',
          'Nuestra <a href="/industrias/diseno-web-importadoras-distribuidoras-panama/">página de diseño web para importadoras y distribuidoras</a> cubre la base de credibilidad B2B completa: RUC visible, marcas representadas, zona privada de precios. Esta guía se enfoca en la pieza que más rendimiento deja y que casi ningún distribuidor en Panamá resuelve bien: cómo se organiza el catálogo para que ese comprador silencioso encuentre lo que busca sin escribirte primero.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué necesita el catálogo para no perder al comprador silencioso',
        intro: 'El comprador mayorista no navega para curiosear: entra a confirmar algo puntual. Si el catálogo no se lo confirma rápido, no pregunta por qué no lo encuentra: cierra la pestaña.',
        items: [
          'Categorías por línea de producto, no por fecha de ingreso ni todo apretado bajo un solo "Productos"',
          'Buscador interno que entienda código, modelo o referencia, no solo el nombre comercial',
          'Una página por línea o categoría relevante, con las marcas que representas dentro de cada una',
          'Foto real del producto o del catálogo del fabricante, nunca un ícono genérico de caja',
          'Disponibilidad visible o al menos "consultar stock", sin obligar a escribir solo para saberlo',
          'Fecha de actualización del catálogo a la vista: uno sin fecha se asume viejo, y de ahí se duda del inventario',
          'Un formulario de cotización o apertura de cuenta que pida línea, cantidad y zona de entrega antes del teléfono',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo organizar un catálogo grande por línea de producto',
        intro: 'Cuando el catálogo tiene cientos de referencias, la estructura decide más que el diseño. Así lo ordenamos.',
        items: [
          { h3: '1. Agrupar por línea, no por llegada', text: 'El criterio nunca es "lo que entró este mes": es la línea o categoría que tu comprador ya tiene en la cabeza cuando busca —tornillería, iluminación, autopartes, abarrotes—. Agrupar por fecha de ingreso sirve para tu bodega, no para quien te busca para comprarte.' },
          { h3: '2. Una página por línea, con sus marcas adentro', text: 'Cada línea con volumen real merece su propia página, con las marcas que representas dentro de ella. Así, quien busca "distribuidor de [marca] en Panamá" encuentra una página dedicada, no un PDF de sesenta páginas mezclado con todo lo demás.' },
          { h3: '3. La ficha con lo que el comprador necesita para decidir', text: 'Presentación, empaque por caja, unidad mínima de pedido y especificación técnica cuando aplica. Foto y nombre solamente no alcanza: eso obliga a preguntar por WhatsApp justo lo que la ficha debió responder.' },
          { h3: '4. Filtros que un comprador mayorista usa de verdad', text: 'Marca, presentación, rango de precio si lo publicas, disponibilidad. Un filtro mal pensado para el rubro —por color, por ejemplo, en un catálogo industrial— es trabajo de diseño que nadie va a tocar.' },
          { h3: '5. Descarga actualizada, además del catálogo navegable', text: 'El catálogo web es lo que te encuentra en Google; una descarga en PDF o en hoja de cálculo, con fecha visible, es lo que tu comprador usa después para armar su propio pedido interno.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Panamá es un hub: tu web puede captar más que a tus clientes de siempre',
        paragraphs: [
          'Panamá redistribuye mercancía a media región desde hace décadas: la Zona Libre de Colón es la zona franca más grande de América, y esa posición comercial no es exclusiva de quien opera dentro de ella. Un comprador en Costa Rica, República Dominicana o Guatemala que busca proveedor para una línea puntual también busca en Google, y también puede llegar a tu catálogo si tu web está armada para que lo encuentre.',
          'Eso no pasa solo ni es automático: hay que aparecer para las búsquedas correctas, tener la cobertura logística explicada —a qué países despachas, con qué plazo, quién asume el trámite aduanero— y un catálogo en el idioma y las unidades que ese comprador regional entiende. Es <a href="/crecimiento/seo-posicionamiento-web-panama/">trabajo de SEO y posicionamiento</a> sostenido en el tiempo, no un interruptor que se enciende al publicar la web. Pero es una oportunidad que un catálogo en PDF por correo nunca va a captar, porque Google no indexa lo que no vive en una página.',
          'Y conviene ser realista con el tamaño de esa oportunidad: si tu línea es muy específica o el volumen regional es bajo, esto suma alcance, no duplica el negocio de la noche a la mañana. Es una puerta más, no una promesa de expansión.',
        ],
      },
      {
        type: 'prose',
        h2: 'Fichas técnicas y certificaciones: cuándo sí hacen falta',
        paragraphs: [
          'No todo lo que importas necesita una ficha técnica de tres páginas. Si distribuyes ropa, artículos para el hogar o mercancía general, al comprador le importa presentación, precio y margen: una foto clara, el empaque y la unidad de venta bastan. Construir ahí una sección de certificaciones es trabajo que nadie va a leer.',
          'Donde sí pesa, y pesa antes que el precio, es en productos regulados: alimentos, cosméticos, dispositivos médicos, material eléctrico, insumos de construcción. Ahí un comprador serio —sobre todo una cadena o un supermercado— va a pedir registro sanitario, ficha de seguridad o certificación del fabricante antes de sacar la primera orden. No publicarlo no es un detalle menor: es una barrera para cerrar justo con el comprador que más volumen mueve.',
          'La regla práctica: si tu producto necesita un papel para pasar por aduana o para que el comprador lo revenda sin problema, ese papel debería estar en la ficha del producto, no solo en tu carpeta interna. Si tu producto no lo necesita, no lo inventes: sumar certificaciones que no aplican solo genera preguntas que después no tienes cómo responder. Confirma con tu asesor legal o el ente regulador correspondiente cuáles aplican a cada línea antes de publicar nada.',
        ],
      },
      {
        type: 'statement',
        text: 'Un comprador mayorista no elige al proveedor con el catálogo más bonito: elige al que le confirma más rápido',
        strong: 'que tiene la línea que busca, en el empaque y la cantidad que necesita.',
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene invertir todavía en esto',
        paragraphs: [
          'Nada de esto es necesario si tu negocio funciona bien tal como está y no tienes intención —ni capacidad operativa— de atender más clientes de los que ya tienes. Si eres un importador con una cartera de cuatro o cinco clientes fijos de toda la vida, que te compran por relación y no por lo que encuentran en Google, un catálogo grande organizado por línea, SEO regional y fichas técnicas son trabajo e inversión para una demanda que no vas a atender: no tienes bodega, ni equipo comercial, ni ganas de crecer esa cartera.',
          'Ahí lo honesto es no gastar en catálogo ni en SEO. Si necesitas presencia mínima —para que alguien te busque y confirme que existes, con tu RUC y tu contacto claro—, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 más ITBMS resuelve eso sin sobre-construir nada que no vas a usar.',
          'La inversión en catálogo y alcance regional se justifica cuando quieres lo contrario: dejar de depender de esa cartera fija, captar al comprador que hoy no te conoce, o cuando ya tienes más líneas de las que un PDF puede ordenar con claridad. Si no es tu caso todavía, está bien decirlo y esperar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta la web de una importadora o distribuidora en Panamá',
        paragraphs: [
          'Depende del tamaño del catálogo, no de si vendes en línea. Con pocas líneas de producto, un <a href="/servicios/diseno-web-corporativo-panama/">sitio corporativo</a> —una Página PYME desde $950 más ITBMS— alcanza para una página por línea, formulario de cotización y blog. Con un catálogo grande, de cientos de referencias que necesitan buscador, filtros y fichas por producto, el trabajo se acerca al rango de <a href="/servicios/tiendas-online-ecommerce-panama/">catálogo con sistema de inventario</a> desde $1,500, aunque no cobres un centavo en línea: lo que sube el costo es organizar el catálogo, no el checkout.',
          'Si además necesitas zona privada con precios por cliente, integración con tu ERP o inventario, o presencia en varios idiomas para compradores regionales, eso se cotiza como proyecto corporativo a medida desde $2,900. A cualquiera de los tres formatos se le suma infraestructura anual —hosting compartido desde $225, cloud desde $350 (la opción que usamos por defecto) o VPS dedicado desde $550, todos con dominio y SSL incluidos— y mantenimiento desde $59, $99 o $189 al mes, según cuánto necesites que te acompañemos después de publicado. Todos los precios están en dólares y no incluyen el 7% de ITBMS. El desglose completo, con todo lo que suma o resta al costo, está en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para importadoras y distribuidoras',
        items: [
          { q: '¿Necesito una tienda online si no vendo directo al consumidor?', a: 'No necesariamente un carrito de compra, pero sí un catálogo con la misma solidez técnica que una tienda: buscador, filtros, fichas y disponibilidad. El objetivo no es cobrar en línea, es que el comprador mayorista confirme que tienes lo que busca y te deje una cotización calificada.' },
          { q: '¿Cuánto cuesta la web de una importadora o distribuidora en Panamá?', a: 'Depende del tamaño del catálogo. Con pocas líneas, un sitio corporativo parte de $950. Con un catálogo grande que necesita buscador y fichas por producto, el rango se acerca al de e-commerce, desde $1,500. Un proyecto con zona privada de precios, integración con tu ERP o varios idiomas se cotiza a medida desde $2,900. Todo en dólares, sin el 7% de ITBMS.' },
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
