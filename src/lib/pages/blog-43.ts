/* BLOG — Lote 43: cuánto cuesta una web WordPress en Panamá, qué hace una agencia web, cuánto cuesta Google Ads en
   Panamá y alternativas a Yappy para cobrar. Fuentes de terceros: ayuda oficial de Google Ads (cobro por clic,
   subasta, sin gasto mínimo, presupuesto diario); La Prensa (Yappy con más de 1,8 millones de clientes registrados
   según la empresa; Zinli y Kuara; cierre anunciado de Tigo Money); sitio de Tilopay (tarjeta y Yappy); PagueloFacil
   (tarjetas, Clave y otros medios). Sin porcentajes de comisión ni costos por clic. Precios de Elemento Web solo de
   src/data/precios.json; la gestión de Google Ads (pauta-gestion) es `propuesto` y va como referencia en prose. */
import type { PageData } from '../types';

export const blog43: PageData[] = [
  /* ---------- 1. WORDPRESS: PRECIO Y CÓMO ELEGIR EMPRESA ---------- */
  {
    slug: 'blog/cuanto-cuesta-una-pagina-web-wordpress-en-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cuánto cuesta una página web WordPress en Panamá en 2026',
    description: 'Una web WordPress en Panamá parte de US$ 1,250 con tema propio. Qué sube o baja el precio, cuánto cuestan hosting y mantenimiento y cómo elegir empresa.',
    h1: 'Cuánto cuesta una página web en WordPress en Panamá y cómo elegir quién la hace',
    breadcrumb: 'Cuánto cuesta una web WordPress',
    category: 'Precios',
    date: '2026-11-21',
    heroImage: {
      src: '/images/hero/blog--cuanto-cuesta-una-pagina-web-wordpress-en-panama.jpg',
      alt: 'Tres losas redondeadas apiladas con una etiqueta de precio colgando, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'En Elemento Web, una página web empresarial en WordPress cuesta desde US$ 1,250, con tema propio y hasta 6 páginas. Una tienda en línea parte de US$ 1,950 y un proyecto a medida de US$ 2,900. Aparte se pagan el hosting (desde US$ 225 al año) y el mantenimiento (desde US$ 99 al mes), que en WordPress no es opcional.',
      'Abajo verás qué sube y qué baja el precio de un WordPress, cuánto cuesta mantenerlo cada año, cuándo no te conviene y qué criterios usar para elegir empresa, en vez de creerle a quien se llame «la mejor».',
    ],
    blocks: [
      {
        type: 'answer',
        h2: '¿Cuánto cuesta el diseño web WordPress en Ciudad de Panamá?',
        fecha: '2026-11-21',
        text: 'Elemento Web, agencia de marketing digital y diseño web en Ciudad de Panamá, publica estos precios: landing page desde US$ 550, web empresarial en WordPress desde US$ 1,250 (tema propio, hasta 6 páginas, de 2 a 3 semanas desde que recibe el contenido), e-commerce desde US$ 1,950 y página corporativa a medida desde US$ 2,900. El hosting va aparte, de US$ 225 a US$ 550 al año según el plan, y el mantenimiento parte de US$ 99 al mes.',
      },
      {
        type: 'tabla',
        h2: '¿Qué incluye cada precio y cuánto pagas al año?',
        intro: 'Los cuatro planes de diseño se pagan una vez. El hosting y el mantenimiento son recurrentes. Esta tabla junta las dos cosas para que veas el costo real del primer año.',
        columnas: ['Concepto', 'Precio publicado', 'Cuándo se paga'],
        filas: [
          ['Landing page (una sola página)', 'Desde US$ 550', 'Una vez'],
          ['Web empresarial en WordPress, hasta 6 páginas', 'Desde US$ 1,250', 'Una vez'],
          ['E-commerce (tienda en línea)', 'Desde US$ 1,950', 'Una vez'],
          ['Página corporativa a medida', 'Desde US$ 2,900', 'Una vez'],
          ['Hosting compartido', 'US$ 225', 'Cada año'],
          ['Hosting cloud', 'US$ 350', 'Cada año'],
          ['VPS dedicado', 'US$ 550', 'Cada año'],
          ['Mantenimiento web', 'Desde US$ 99', 'Cada mes'],
        ],
        nota: 'Precios de la página de precios de Elemento Web. El dominio se registra a tu nombre y se paga aparte. El detalle fiscal de la factura se confirma en la cotización.',
      },
      {
        type: 'cards',
        h2: '¿Qué sube o baja el precio de una web en WordPress?',
        intro: 'Dos cotizaciones de WordPress pueden ser muy distintas y las dos ser honestas. Estas son las cinco cosas que más mueven el número.',
        items: [
          { h3: 'Tema propio o plantilla comprada', text: 'Una plantilla comprada sale más barata el primer día, pero trae código y opciones que no usas, y suele depender de un constructor visual pesado. Un tema hecho para tu marca cuesta más al inicio y pesa menos: carga más rápido, se actualiza con menos sustos y no te deja amarrado al constructor.' },
          { h3: 'Plugins de pago', text: 'Formularios avanzados, reservas, membresías o filtros de catálogo a veces requieren plugins con licencia anual. Esa licencia se renueva cada año y se suma al costo. Pregunta qué plugins de pago lleva tu sitio, quién es el titular de la licencia y cuánto cuesta renovarla.' },
          { h3: 'Contenido: textos y fotos', text: 'Si tú entregas textos y fotos listos, el precio baja. Si hay que escribirlos, se suma: en Elemento Web la redacción con IA, revisada por una persona, cuesta US$ 150 para una landing, US$ 200 para una web corporativa y US$ 350 para una web extensa. Un set de imágenes generadas con IA cuesta US$ 100.' },
          { h3: 'Idiomas', text: 'Una segunda versión en inglés no es solo traducir: duplica páginas, menús, formularios y el trabajo de SEO en ese idioma. Si tus clientes no lo piden, es mejor un solo idioma bien cuidado.' },
          { h3: 'Tienda en línea', text: 'Vender en WordPress implica catálogo, carrito, envíos, impuestos y cobro. Por eso un sitio con tienda pasa al plan e-commerce, desde US$ 1,950. Si además quieres cobrar con tarjeta dentro de la web por medio de tu banco, la integración se cotiza aparte.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué en WordPress el mantenimiento no es opcional?',
        paragraphs: [
          'En WordPress, el núcleo, el tema y cada plugin reciben actualizaciones de seguridad con frecuencia, y cada plugin es una puerta más que hay que cuidar. Una web que nadie actualiza no se queda igual: se vuelve más vulnerable cada mes, aunque se vea bien por fuera.',
          'El mantenimiento cubre esas actualizaciones, los respaldos, la vigilancia de que el sitio esté en línea y los cambios pequeños de contenido. En Elemento Web parte de US$ 99 al mes, y el detalle de cada plan está en <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento web en Panamá</a>.',
          'Si prefieres no hacer un pago grande al inicio, existe la web empresarial gestionada: US$ 350 de puesta en marcha y US$ 169 al mes, que bajan a US$ 94 al mes desde el mes 13. Ahí el hosting y el mantenimiento ya van dentro. Todos los planes están en <a href="/precios/">precios</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Cuál es la mejor empresa de diseño web WordPress en Panamá?',
        intro: 'No hay una «mejor» para todos, y desconfía de quien se lo diga a sí mismo, nosotros incluidos. Lo útil es comparar con criterios que puedas verificar. Pide estas respuestas por escrito a cada empresa que coticen:',
        items: [
          'Te muestra webs de WordPress publicadas, con enlace, que puedas abrir desde tu celular y ver qué tan rápido cargan.',
          'Te dice si usa tema propio o plantilla comprada, y qué constructor visual lleva, si lleva alguno.',
          'Te da la lista de plugins que va a instalar, cuáles son de pago y a nombre de quién quedan las licencias.',
          'El dominio, el hosting y el acceso de administrador quedan a tu nombre desde el primer día.',
          'La cotización separa el diseño (pago único) del hosting y el mantenimiento (pagos recurrentes).',
          'Explica qué pasa si mañana cambias de proveedor: te entregan respaldo completo y accesos.',
          'Incluye capacitación para que tu equipo publique y edite sin abrir un ticket cada vez.',
          'Deja medido de dónde llegan las consultas: formulario, WhatsApp y llamadas.',
          'No te promete el primer lugar en Google. Nadie controla eso.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo NO conviene hacer tu web en WordPress?',
        paragraphs: [
          'Si tu negocio solo necesita una página de presentación que casi nunca cambia, WordPress puede ser más de lo que necesitas: tendrás que mantener actualizaciones de un sistema que no vas a aprovechar. Una landing sencilla, en la tecnología que convenga, suele bastar.',
          'Tampoco es la mejor opción si tu prioridad es vender productos con poco trabajo técnico de tu parte. Ahí una plataforma de tienda alojada puede servirte mejor; lo comparamos en <a href="/blog/diferencia-wordpress-shopify-diseno-web/">la diferencia entre WordPress y Shopify</a>.',
          'Y si nadie en tu empresa va a pagar el mantenimiento, mejor no empieces con WordPress. Un sitio sin actualizar es un riesgo, no un ahorro. Si dudas qué tipo de proveedor necesitas, en <a href="/blog/que-hace-una-agencia-web-y-cuando-contratarla/">qué hace una agencia web y cuándo contratarla</a> está la diferencia con un freelancer o un constructor tipo Wix.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo pedir una cotización de WordPress que puedas comparar?',
        intro: 'Si mandas la misma información a cada empresa, las cotizaciones se pueden comparar de verdad.',
        items: [
          { h3: '1. Haz la lista de páginas', text: 'Inicio, servicios, nosotros, contacto y lo que necesites. Si pasan de 6, dilo desde el inicio: cambia el plan.' },
          { h3: '2. Di qué contenido tienes', text: 'Textos listos, fotos propias o nada. Es una de las cosas que más cambia el precio.' },
          { h3: '3. Aclara si vas a vender en línea', text: 'Cuántos productos, cómo envías y cómo quieres cobrar. Si cobras con Yappy o tarjeta, revisa también <a href="/blog/alternativas-a-yappy-para-cobrar-en-panama/">las alternativas a Yappy para cobrar en Panamá</a>.' },
          { h3: '4. Pide el costo del primer año', text: 'Diseño, dominio, hosting, mantenimiento y licencias de plugins, todo junto. Así comparas lo que de verdad vas a pagar.' },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el precio de una web WordPress',
        items: [
          { q: '¿Cuánto cuesta una página web en WordPress en Panamá?', a: 'En Elemento Web, una web empresarial en WordPress parte de US$ 1,250, con tema propio y hasta 6 páginas. Una tienda en línea parte de US$ 1,950. Aparte van el hosting, desde US$ 225 al año, y el mantenimiento, desde US$ 99 al mes.' },
          { q: '¿WordPress es gratis?', a: 'El software es gratuito, pero la web no: pagas dominio, hosting, el diseño y desarrollo, las licencias de plugins de pago que uses y el mantenimiento. Gratis es el punto de partida, no el resultado.' },
          { q: '¿Cuánto tarda en estar lista una web en WordPress?', a: 'Una web empresarial de hasta 6 páginas toma de 2 a 3 semanas desde que recibimos tu contenido. Si el contenido se retrasa, el proyecto también.' },
          { q: '¿Puedo editar mi web yo mismo?', a: 'Sí, esa es la gran ventaja de WordPress. Con un tema propio, el panel muestra solo los campos de tu contenido, y te dejamos una capacitación grabada para que tu equipo publique sin depender de nadie.' },
          { q: '¿Por qué una plantilla comprada sale más barata?', a: 'Porque el diseño ya existe y se adapta. El costo aparece después: código que no usas, constructores pesados, más plugins que actualizar y una web más lenta. Por eso conviene comparar el costo del primer año, no solo el del diseño.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'Diseño web en WordPress en Panamá' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: 'Cuánto cuesta el diseño web en Panamá' },
          { slug: 'blog/diferencia-wordpress-shopify-diseno-web', label: 'WordPress o Shopify: cuál elegir' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web en Panamá' },
        ],
      },
    ],
    cta: {
      h2: 'Cotiza tu web en WordPress con el costo del primer año',
      wa: 'Hola, quiero cotizar una página web en WordPress para mi negocio. ¿Me dicen cuánto sale con hosting y mantenimiento?',
    },
  },

  /* ---------- 2. QUÉ HACE UNA AGENCIA WEB ---------- */
  {
    slug: 'blog/que-hace-una-agencia-web-y-cuando-contratarla',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Agencia web: qué hace y cuándo contratarla en Panamá',
    description: 'Qué hace una agencia web, qué no hace y en qué se diferencia de un freelancer o de Wix. Cuándo te conviene contratarla y cuánto cuesta en Panamá.',
    h1: 'Qué hace una agencia web y cuándo te conviene contratarla',
    breadcrumb: 'Qué hace una agencia web',
    category: 'Diseño web',
    date: '2026-11-21',
    heroImage: {
      src: '/images/hero/blog--que-hace-una-agencia-web-y-cuando-contratarla.jpg',
      alt: 'Caja de herramientas abierta con un cursor de flecha dentro, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Una agencia web es una empresa de especialistas que planifica, diseña, programa, publica y mantiene la página web de un negocio. A diferencia de un freelancer, reparte el trabajo entre varias personas; a diferencia de Wix u otro constructor, lo hace por ti. Conviene cuando la web tiene que vender, integrarse con otros sistemas o crecer.',
      'Aquí tienes lo que hace una agencia web y lo que no, cómo se compara con un freelancer y con un constructor, cuándo no te conviene y cuánto cuesta en Panamá.',
    ],
    blocks: [
      {
        type: 'answer',
        h2: '¿Qué es una agencia web?',
        fecha: '2026-11-21',
        text: 'Una agencia web, o empresa de diseño web, se encarga de todo el proceso de una página: estructura, diseño, textos, programación, velocidad, SEO técnico, publicación y mantenimiento. Elemento Web, agencia de marketing digital y diseño web en Ciudad de Panamá, publica sus precios: landing page desde US$ 550, web empresarial desde US$ 1,250, e-commerce desde US$ 1,950 y proyectos a medida desde US$ 2,900, con mantenimiento desde US$ 99 al mes.',
      },
      {
        type: 'cards',
        h2: '¿Qué hace una agencia web, paso a paso?',
        intro: 'El diseño es la parte que se ve. Detrás hay más trabajo, y es el que separa una web bonita de una web que trae clientes.',
        items: [
          { h3: 'Estrategia y estructura', text: 'Define qué páginas necesitas, en qué orden va la información y qué acción quieres que tome el visitante: escribir por WhatsApp, pedir una cotización o comprar.' },
          { h3: 'Diseño', text: 'Lleva tu marca a una interfaz clara, que se lea bien en el celular y que guíe al visitante hasta el botón de contacto.' },
          { h3: 'Contenido', text: 'Escribe o corrige los textos para que respondan lo que pregunta tu cliente, y prepara fotos e imágenes livianas.' },
          { h3: 'Desarrollo', text: 'Programa el sitio en la tecnología que convenga: WordPress, una tienda en línea o desarrollo a medida, con formularios, pagos o reservas si hacen falta.' },
          { h3: 'SEO técnico y medición', text: 'Deja la web rápida, bien estructurada para Google y lista para medir de dónde llegan las consultas. No promete posiciones: prepara el terreno.' },
          { h3: 'Publicación y mantenimiento', text: 'Configura dominio, hosting y seguridad, publica, y después actualiza, respalda y vigila que el sitio siga en línea.' },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué NO hace una agencia web?',
        intro: 'Saberlo antes de contratar evita frustraciones de los dos lados.',
        items: [
          'No inventa la información de tu negocio: necesita que le digas qué vendes, a quién y a qué precio.',
          'No garantiza el primer lugar en Google ni en ChatGPT. Nadie controla esas plataformas.',
          'No vende por ti si nadie responde el WhatsApp o el formulario a tiempo.',
          'No reemplaza la publicidad: una web nueva no recibe visitas por sí sola el primer mes.',
          'Una agencia solo de diseño web no siempre maneja tus redes ni tus campañas. Pregunta qué incluye.',
        ],
      },
      {
        type: 'tabla',
        h2: '¿Agencia web, freelancer o constructor tipo Wix?',
        intro: 'Las tres opciones sirven. La pregunta es cuál calza con lo que tu web tiene que hacer y con el tiempo que tú puedes dedicarle.',
        columnas: ['', 'Agencia web', 'Freelancer', 'Constructor tipo Wix'],
        filas: [
          ['Quién hace el trabajo', 'Varios especialistas: diseño, contenido, desarrollo, SEO', 'Una persona que cubre todo o subcontrata', 'Tú, con plantillas'],
          ['Inversión inicial', 'Mayor', 'Media', 'Menor, con suscripción mensual'],
          ['Tu tiempo', 'Poco: entregas contenido y revisas', 'Medio', 'Mucho: lo armas y lo cuidas tú'],
          ['Integraciones (pagos, CRM, reservas)', 'Sí, incluso a medida', 'Depende de la persona', 'Las que ofrezca la plataforma'],
          ['Si alguien se enferma o se va', 'Otra persona sigue el proyecto', 'El proyecto se detiene', 'No aplica'],
          ['Propiedad del sitio', 'Debe quedar a tu nombre (pregúntalo)', 'Debe quedar a tu nombre (pregúntalo)', 'Vive dentro de la plataforma'],
        ],
        nota: 'Comparación general, no de proveedores concretos. Cada freelancer y cada agencia trabaja distinto: pide las condiciones por escrito.',
      },
      {
        type: 'prose',
        h2: '¿Cuándo conviene contratar una agencia web?',
        paragraphs: [
          'Conviene cuando la web es parte de cómo vendes: recibes consultas por ella, cobras en línea o la usas como destino de tus anuncios. Ahí cada falla cuesta clientes, y vale la pena que la cuide gente especializada.',
          'También cuando necesitas conectar la web con otros sistemas, como un botón de pago, un CRM, una agenda de citas o WhatsApp. Y cuando no tienes tiempo de aprender a armarla tú: tu tiempo vale más atendiendo el negocio.',
          'Otra señal clara: ya tienes una web, pero no sabes cuántas consultas trae, carga lenta en el celular o nadie la actualiza desde hace meses. En ese caso, una agencia empieza por revisar lo que hay y decirte si conviene arreglarla o hacerla de nuevo. Pide que esa recomendación venga por escrito, con sus razones.',
          'Si ya tienes claro que quieres una agencia, el siguiente paso es elegir bien. Los criterios están en <a href="/blog/como-elegir-agencia-diseno-web-panama/">cómo elegir una agencia de diseño web en Panamá</a>, y lo que hacemos nosotros, en <a href="/diseno-web-panama/">diseño web en Panamá</a>. Si la web va a recibir tráfico pagado, lee también <a href="/blog/cuanto-cuesta-google-ads-en-panama/">cuánto cuesta Google Ads en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo NO conviene contratar una agencia web?',
        paragraphs: [
          'Si apenas estás probando una idea y no sabes todavía qué vendes ni a quién, una agencia es prematura. Una página simple en un constructor o un perfil de negocio bien armado te da información más barata. Contratar antes de tener claro el mensaje suele terminar en rehacer la web.',
          'Tampoco conviene si no vas a poder entregar textos, fotos ni revisiones. Ninguna agencia puede escribir tu negocio sin ti. Y si tu presupuesto solo alcanza para el diseño pero no para el mantenimiento, piénsalo dos veces: una web abandonada pierde seguridad y velocidad con los meses.',
          'Un freelancer de confianza puede ser mejor opción para una página pequeña y estable, sin integraciones. Lo importante es que el dominio y los accesos queden a tu nombre, con quien sea que trabajes.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cobra una agencia web en Panamá?',
        paragraphs: [
          'No tenemos datos verificados de los precios de otras agencias, así que no los comparamos. Lo que sí podemos es mostrarte los nuestros: landing page desde US$ 550, web empresarial desde US$ 1,250 (hasta 6 páginas), e-commerce desde US$ 1,950 y página corporativa a medida desde US$ 2,900. El hosting va de US$ 225 a US$ 550 al año y el mantenimiento parte de US$ 99 al mes.',
          'Todo está en <a href="/precios/">precios</a>, y el resto de lo que hacemos, como marketing, automatización e IA, en <a href="/servicios/">servicios</a>. Si tu web va a ser en WordPress, el desglose está en <a href="/blog/cuanto-cuesta-una-pagina-web-wordpress-en-panama/">cuánto cuesta una página web WordPress en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre agencias web',
        items: [
          { q: '¿Qué diferencia hay entre una agencia web y una empresa de diseño web?', a: 'En la práctica, ninguna: son dos nombres para lo mismo. Lo que sí cambia es el alcance. Algunas solo diseñan y programan; otras también hacen SEO, publicidad y mantenimiento. Pregunta qué incluye cada cotización.' },
          { q: '¿Es mejor un freelancer o una agencia web?', a: 'Depende del proyecto. Para una página pequeña y estable, un freelancer de confianza puede bastar. Si la web vende, se integra con pagos o sistemas, o necesita mantenimiento constante, una agencia reduce el riesgo de que todo dependa de una persona.' },
          { q: '¿Por qué no hacer la web yo mismo en Wix?', a: 'Puedes, y para empezar a veces es lo correcto. El costo es tu tiempo y los límites de la plataforma: el sitio vive dentro de ella y las integraciones son las que ofrece. Cuando la web empieza a ser un canal de ventas, esos límites pesan.' },
          { q: '¿Cuánto tarda una agencia en hacer una web?', a: 'Depende del alcance. En Elemento Web, una web empresarial de hasta 6 páginas toma de 2 a 3 semanas desde que recibimos el contenido. Una tienda o un proyecto a medida toman más.' },
          { q: '¿La web queda a mi nombre si contrato una agencia?', a: 'Debería. Pide por escrito que el dominio, el hosting y el acceso de administrador queden a tu nombre, y qué te entregan si cambias de proveedor.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'diseno-web-panama', label: 'Diseño web en Panamá' },
          { slug: 'blog/como-elegir-agencia-diseno-web-panama', label: 'Cómo elegir una agencia de diseño web' },
          { slug: 'servicios', label: 'Servicios de Elemento Web' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
    ],
    cta: {
      h2: 'Cuéntanos qué tiene que hacer tu web',
      wa: 'Hola, estoy buscando una agencia web para mi negocio y quiero saber qué opción me conviene. ¿Me asesoran?',
    },
  },

  /* ---------- 3. GOOGLE ADS: CUÁNTO CUESTA ---------- */
  {
    slug: 'blog/cuanto-cuesta-google-ads-en-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cuánto cuesta Google Ads en Panamá: inversión y gestión',
    description: 'Google Ads no tiene gasto mínimo: tú fijas el presupuesto diario. Cómo funciona la subasta, qué se le paga a Google y qué a la agencia, y qué medir.',
    h1: 'Cuánto cuesta Google Ads en Panamá: lo que pagas a Google y lo que pagas a la agencia',
    breadcrumb: 'Cuánto cuesta Google Ads',
    category: 'Marketing',
    date: '2026-11-21',
    heroImage: {
      src: '/images/hero/blog--cuanto-cuesta-google-ads-en-panama.jpg',
      alt: 'Lupa de búsqueda apoyada sobre una pila de monedas, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Google Ads no tiene un gasto mínimo obligatorio: tú fijas un presupuesto diario y, en la mayoría de las campañas de búsqueda, pagas solo cuando alguien hace clic. El costo de cada clic sale de una subasta y depende de cuánta competencia hay por cada palabra. A eso se suma, si la contratas, la gestión de una agencia.',
      'Este artículo separa los dos costos, explica cómo funciona la subasta sin inventar cifras, te da un método para fijar tu presupuesto y te dice qué medir para saber si la publicidad en Google te está trayendo clientes.',
    ],
    blocks: [
      {
        type: 'answer',
        h2: '¿Cuánto cuesta anunciarse en Google Ads en Panamá?',
        fecha: '2026-11-21',
        text: 'Según la ayuda oficial de Google Ads, la mayoría de las campañas de búsqueda cobran por clic, el costo de cada clic sale de una subasta que depende de la competencia por cada palabra, no hay un gasto mínimo obligatorio y el anunciante fija su presupuesto diario. Por eso no existe un precio único de Google Ads en Panamá: el costo total es la inversión que le pagas a Google más, si la contratas, la gestión de una agencia, que se cobra aparte.',
      },
      {
        type: 'cards',
        h2: '¿Qué le pagas a Google y qué le pagas a la agencia?',
        intro: 'Son dos costos distintos y conviene verlos siempre por separado.',
        items: [
          { h3: 'La inversión publicitaria (a Google)', text: 'Es el dinero que se gasta en clics. Sale de tu cuenta de Google Ads, con tu tarjeta, y Google te factura directamente. Tú decides cuánto es y puedes pausarlo cuando quieras.' },
          { h3: 'La gestión (a la agencia)', text: 'Es lo que cobra la agencia por investigar palabras, escribir anuncios, configurar la medición, optimizar cada semana y reportar. Es un pago fijo o por alcance, no un porcentaje escondido dentro de tu inversión.' },
          { h3: 'Lo que no debería pasar', text: 'Que la agencia te dé un solo número que mezcla las dos cosas, o que la cuenta quede a nombre de la agencia. Si pasa, pide que separe las cifras y que la cuenta sea tuya desde el primer día.' },
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo funciona la subasta y el costo por clic?',
        intro: 'Cada vez que alguien busca en Google, ocurre una subasta en fracciones de segundo. Así se decide qué anuncios salen y cuánto paga cada uno, según la ayuda oficial de Google Ads:',
        items: [
          { h3: '1. Alguien busca', text: 'Por ejemplo, «abogado de familia en Panamá». Google revisa qué anunciantes quieren aparecer con esa búsqueda.' },
          { h3: '2. Compiten los anuncios', text: 'Cada anunciante tiene una oferta máxima por clic. Google no elige solo por dinero: también pesa la calidad del anuncio y de la página a la que lleva.' },
          { h3: '3. Se define el orden y el precio', text: 'El resultado decide quién aparece y en qué orden. Lo que pagas por clic depende de la competencia en ese momento, no es una tarifa fija. Una palabra por la que pelean muchos anunciantes, como un servicio de alto valor, suele costar más que una búsqueda muy específica de un nicho pequeño.' },
          { h3: '4. Pagas solo si hacen clic', text: 'En la mayoría de las campañas de búsqueda, que tu anuncio se muestre no cuesta. Cuesta el clic. Cuando se agota tu presupuesto del día, el anuncio deja de salir.' },
          { h3: 'Por qué no te damos una cifra de costo por clic', text: 'Porque cambia por palabra, por temporada y por lo que haga tu competencia. Cualquier número genérico que leas para «Panamá» puede estar muy lejos de lo que pagarás tú. Lo serio es investigar tus palabras con la herramienta de planificación de Google antes de lanzar, y ver los datos reales de las primeras semanas.' },
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo fijar tu presupuesto de Google Ads?',
        intro: 'En vez de elegir un número al azar, trabaja de atrás hacia adelante, desde lo que vale un cliente para ti.',
        items: [
          { h3: '1. Calcula cuánto vale un cliente', text: 'Cuánto te deja una venta, o lo que te deja un cliente en un año si vuelve a comprar. Ese número marca cuánto puedes pagar por conseguirlo.' },
          { h3: '2. Elige pocas palabras con intención', text: 'Empieza por las búsquedas de quien ya quiere comprar, no por las genéricas. Con presupuesto limitado, menos palabras bien elegidas rinden más que muchas.' },
          { h3: '3. Fija un presupuesto diario que puedas sostener', text: 'Google te deja fijarlo tú. Elige una cifra que puedas mantener al menos unas semanas, porque las campañas necesitan datos para ajustarse.' },
          { h3: '4. Mide y ajusta', text: 'Después de las primeras semanas, mira cuánto te costó cada consulta. Sube lo que funciona, pausa lo que no y decide con datos si aumentas la inversión.' },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué medir para saber si Google Ads funciona?',
        intro: 'Los clics y las impresiones dicen poco. Lo que importa es lo que pasa después del clic.',
        items: [
          'Conversiones: formularios enviados, clics en WhatsApp y llamadas, medidos desde antes de gastar el primer dólar.',
          'Costo por consulta: inversión dividida entre el número de consultas reales.',
          'Costo por venta o por cliente, si puedes cruzarlo con tu CRM o tu registro de ventas.',
          'Términos de búsqueda: qué escribió de verdad la gente que hizo clic, para excluir lo que no sirve.',
          'Calidad de las consultas: si piden lo que vendes o si llegan curiosos que nunca compran.',
          'Que la cuenta, la analítica y la medición estén a tu nombre, para que el historial sea tuyo.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cobra Elemento Web por gestionar Google Ads?',
        paragraphs: [
          'La gestión de Google Ads y Meta tiene una referencia publicada desde US$ 300 al mes; el precio final se confirma en la cotización, según el número de campañas y canales. La inversión publicitaria va aparte, directo a Google, con tu tarjeta y sin margen nuestro.',
          'Antes de lanzar dejamos la medición instalada y la cuenta a tu nombre. El detalle del servicio está en <a href="/marketing/google-ads-panama/">Google Ads en Panamá</a> y el resto de precios publicados, en <a href="/precios/">precios</a>. Si todavía no sabes cuánto destinar a publicidad en total, lee <a href="/blog/cuanto-invertir-en-publicidad-digital-en-panama/">cuánto invertir en publicidad digital en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo NO conviene invertir en Google Ads?',
        paragraphs: [
          'Si casi nadie busca lo que vendes, Google Ads tiene poco que ofrecerte: funciona con la demanda que ya existe. Un producto nuevo que la gente no conoce suele moverse mejor en redes sociales, donde puedes mostrarlo a quien todavía no lo busca. La comparación está en <a href="/blog/google-ads-vs-facebook-ads-en-panama/">Google Ads o Facebook Ads en Panamá</a>.',
          'Tampoco conviene si tu web no está lista para recibir visitas o si nadie va a responder las consultas a tiempo. Pagar clics que llegan a una página lenta, o a un WhatsApp que contesta al día siguiente, es gastar dos veces. La calidad de la página también pesa en la subasta; en <a href="/blog/que-hace-una-agencia-web-y-cuando-contratarla/">qué hace una agencia web</a> explicamos qué necesita un buen destino. Y si no puedes sostener el presupuesto al menos unas semanas, la campaña no alcanza a darte datos útiles.',
          'Si tu destino es una web en WordPress y está por renovarse, revisa antes <a href="/blog/cuanto-cuesta-una-pagina-web-wordpress-en-panama/">cuánto cuesta una página web WordPress en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo de Google Ads',
        items: [
          { q: '¿Cuál es el presupuesto mínimo para Google Ads en Panamá?', a: 'Según la ayuda oficial de Google Ads, no hay un gasto mínimo obligatorio: tú fijas el presupuesto diario. Lo que sí conviene es un presupuesto que puedas sostener varias semanas para que la campaña tenga datos.' },
          { q: '¿Cuánto cuesta un clic en Google Ads?', a: 'No hay una tarifa fija. El costo sale de una subasta y depende de la competencia por cada palabra y de la calidad de tu anuncio y tu página. Por eso conviene investigar tus palabras antes de lanzar.' },
          { q: '¿Le pago a Google o a la agencia?', a: 'A los dos, por separado. La inversión publicitaria la pagas a Google desde tu cuenta. La gestión la pagas a la agencia. Pide que nunca se mezclen en un solo número.' },
          { q: '¿Pago aunque nadie haga clic en mi anuncio?', a: 'En la mayoría de las campañas de búsqueda, no: pagas cuando alguien hace clic. Otros tipos de campaña pueden cobrar distinto; pregunta cómo cobra cada una antes de activarla.' },
          { q: '¿Cuánto tarda Google Ads en dar resultados?', a: 'Los anuncios pueden salir el mismo día que se aprueban, pero saber qué funciona toma algunas semanas de datos. Desconfía de quien te prometa resultados fijos en una fecha.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/google-ads-panama', label: 'Google Ads en Panamá' },
          { slug: 'blog/cuanto-invertir-en-publicidad-digital-en-panama', label: 'Cuánto invertir en publicidad digital' },
          { slug: 'blog/google-ads-vs-facebook-ads-en-panama', label: 'Google Ads o Facebook Ads' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
    ],
    cta: {
      h2: 'Arma tu primera campaña con la cuenta a tu nombre',
      wa: 'Hola, quiero anunciar mi negocio en Google Ads y saber cuánto debería invertir. ¿Me asesoran?',
    },
  },

  /* ---------- 4. ALTERNATIVAS A YAPPY ---------- */
  {
    slug: 'blog/alternativas-a-yappy-para-cobrar-en-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Alternativas a Yappy en Panamá para cobrar en tu negocio',
    description: 'Tarjeta con CyberSource, PagueloFacil, Tilopay, PayPal, ACH y otras billeteras: las alternativas a Yappy en Panamá y por qué conviene sumarlas, no reemplazar.',
    h1: 'Alternativas a Yappy para cobrar en Panamá: cuáles hay y cuándo usar cada una',
    breadcrumb: 'Alternativas a Yappy',
    category: 'E-commerce',
    date: '2026-11-21',
    heroImage: {
      src: '/images/hero/blog--alternativas-a-yappy-para-cobrar-en-panama.jpg',
      alt: 'Tarjeta de crédito, celular y moneda dispuestos en abanico, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Las principales alternativas a Yappy para cobrar en Panamá son el cobro con tarjeta en tu web por medio de tu banco (CyberSource), pasarelas como PagueloFacil y Tilopay, PayPal para clientes del extranjero, la transferencia o ACH y otras billeteras como Zinli y Kuara. Lo normal no es reemplazar Yappy, sino sumar una o dos de estas opciones.',
      'Abajo tienes cada alternativa, una tabla para compararlas, cómo elegir según tu negocio y cuándo no hace falta agregar nada.',
    ],
    blocks: [
      {
        type: 'answer',
        h2: '¿Qué alternativas a Yappy hay en Panamá?',
        fecha: '2026-11-21',
        text: 'Las alternativas a Yappy para cobrar en Panamá son: tarjeta de crédito y débito dentro de la web con CyberSource, por medio de bancos como Banco General; pasarelas como PagueloFacil, que acepta tarjetas, Clave y otros medios, y Tilopay, que según su sitio permite cobrar con tarjeta y también con Yappy; PayPal para cobros internacionales; transferencia o ACH; y billeteras como Zinli y Kuara. Tigo Money anunció el cierre de su billetera en Panamá. Las comisiones se consultan con cada proveedor.',
      },
      {
        type: 'prose',
        h2: '¿Por qué buscar alternativas si Yappy es tan usado?',
        paragraphs: [
          'Yappy es el método de pago más conocido del país: La Prensa publicó que tiene más de 1,8 millones de clientes registrados, según la propia empresa. Si vendes a panameños, tiene sentido ofrecerlo.',
          'Pero no todos tus clientes lo usan. Un turista, un cliente en el extranjero o una empresa que paga con tarjeta corporativa no van a pagarte por Yappy. Tampoco quien simplemente prefiere pagar con su tarjeta. Cada cliente que no encuentra su método de pago es una venta que puede perderse.',
          'Por eso la pregunta útil no es «¿qué uso en vez de Yappy?», sino «¿qué le sumo a Yappy?». Cómo integrar Yappy en tu web está en <a href="/blog/como-integrar-yappy-tu-tienda-online/">cómo integrar Yappy en tu tienda online</a>.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Cuáles son las alternativas, una por una?',
        intro: 'Cada una resuelve un caso distinto. Las comisiones y los requisitos cambian por proveedor y por negocio: consúltalos directamente antes de decidir.',
        items: [
          { h3: 'Tarjeta con CyberSource, por medio de tu banco', text: 'CyberSource es la plataforma de Visa que bancos panameños como Banco General ofrecen a sus comercios para cobrar con tarjeta dentro de la web. El cliente paga sin salir de tu sitio. Tu banco te da las credenciales y alguien tiene que integrarlas.', link: { slug: 'funcionalidades/integracion-cybersource-panama', label: 'Integración de CyberSource' } },
          { h3: 'PagueloFacil', text: 'Pasarela panameña que acepta tarjetas, Clave y otros medios. Es una opción para quien quiere varias formas de pago con un solo proveedor. Las tarifas se consultan con PagueloFacil.' },
          { h3: 'Tilopay', text: 'Pasarela que, según su sitio, permite cobrar con tarjeta y también con Yappy desde la tienda en línea. Sirve si quieres juntar los dos métodos más pedidos en una misma integración.' },
          { h3: 'PayPal', text: 'Útil cuando vendes a clientes fuera de Panamá que ya tienen cuenta de PayPal y prefieren pagar con ella. Revisa sus condiciones para tu país y tu tipo de negocio.' },
          { h3: 'Transferencia o ACH', text: 'Funciona bien para montos altos y pagos entre empresas. Su punto débil es que el cliente «lo hace después» y tú tienes que confirmar cada pago a mano, lo que frena la compra por impulso.' },
          { h3: 'Otras billeteras: Zinli y Kuara', text: 'Son billeteras que La Prensa mencionó en el mercado panameño. Pueden servir si tu cliente ya las usa; pregunta a tus clientes antes de integrarlas. Ojo: Tigo Money anunció el cierre de su billetera en Panamá, así que no conviene apostar por ella.' },
        ],
      },
      {
        type: 'tabla',
        h2: '¿Cómo se comparan las alternativas a Yappy?',
        intro: 'Una vista rápida para decidir qué sumar. No publicamos porcentajes de comisión porque cambian por negocio y por contrato.',
        columnas: ['Opción', 'Medios que acepta', 'Para quién conviene', 'Cobro dentro de tu web', 'Comisión'],
        filas: [
          ['Tarjeta con CyberSource (banco)', 'Tarjetas de crédito y débito', 'Tiendas y servicios con ventas frecuentes con tarjeta', 'Sí', 'Consultar con tu banco'],
          ['PagueloFacil', 'Tarjetas, Clave y otros medios', 'Quien quiere varios medios con un solo proveedor', 'Sí', 'Consultar con el proveedor'],
          ['Tilopay', 'Tarjeta y Yappy, según su sitio', 'Tiendas que quieren tarjeta y Yappy juntos', 'Sí', 'Consultar con el proveedor'],
          ['PayPal', 'Cuenta PayPal y tarjetas', 'Ventas a clientes del extranjero', 'Según la integración', 'Consultar con el proveedor'],
          ['Transferencia o ACH', 'Cuentas bancarias', 'Montos altos y pagos entre empresas', 'No, se confirma a mano', 'Consultar con tu banco'],
          ['Zinli, Kuara', 'Saldo de la billetera', 'Si tus clientes ya las usan', 'Según el proveedor', 'Consultar con el proveedor'],
        ],
        nota: 'Información general para comparar, revisada en noviembre de 2026. Confirma medios aceptados, requisitos y tarifas con cada proveedor antes de contratar.',
      },
      {
        type: 'steps',
        h2: '¿Cómo elegir qué método sumar a Yappy?',
        intro: 'Cuatro preguntas para decidir sin complicarte.',
        items: [
          { h3: '1. ¿Quién te compra?', text: 'Si son panameños, Yappy y tarjeta cubren a la mayoría. Si vendes al extranjero o a turistas, suma tarjeta internacional o PayPal.' },
          { h3: '2. ¿Cuánto vale cada venta?', text: 'Para ventas pequeñas y frecuentes, que el pago sea inmediato pesa más. Para montos altos entre empresas, la transferencia puede bastar.' },
          { h3: '3. ¿Dónde cobras?', text: 'Si vendes por tu web, conviene que el pago ocurra dentro de ella, sin capturas de pantalla. Si vendes por WhatsApp, un enlace de pago resuelve muchos casos.' },
          { h3: '4. ¿Qué te pide cada proveedor?', text: 'Requisitos de aprobación, tiempo para recibir el dinero y comisiones. Pídelos por escrito y compáralos con tu margen.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta integrar estos pagos en tu web?',
        paragraphs: [
          'Depende del método y de tu sitio. Para el cobro con tarjeta por medio de tu banco, Elemento Web publica precios cerrados de integración de CyberSource: US$ 1,050 el alcance Esencial, US$ 2,150 el Profesional y US$ 3,850 el Avanzado. Las comisiones del banco van aparte y se acuerdan con él.',
          'Para Yappy y otras pasarelas, el detalle está en <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">integración de Yappy y pasarelas de pago</a>. Si todavía no tienes tienda, revisa <a href="/blog/cuanto-cuesta-una-pagina-web-wordpress-en-panama/">cuánto cuesta una página web WordPress en Panamá</a>, donde explicamos cuándo un sitio pasa al plan e-commerce.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo NO hace falta sumar otra opción a Yappy?',
        paragraphs: [
          'Si vendes poco, solo a clientes locales y casi todos ya te pagan con Yappy sin quejarse, agregar una pasarela puede ser más trámite que beneficio. Cada proveedor implica requisitos, comisiones y una integración que mantener.',
          'Tampoco conviene sumar billeteras que tus clientes no usan solo por tener más logos. Pregunta a tus clientes cómo prefieren pagar y mira cuántas ventas se caen en el paso del pago. Si casi ninguna se cae, quizás ya estás bien.',
          'Si estás atrayendo clientes con publicidad, sí vale la pena revisar el pago: un anuncio que trae a alguien que no puede pagar es dinero perdido. Lo vemos en <a href="/blog/cuanto-cuesta-google-ads-en-panama/">cuánto cuesta Google Ads en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre alternativas a Yappy',
        items: [
          { q: '¿Cuál es la mejor alternativa a Yappy en Panamá?', a: 'No hay una sola. Para cobrar con tarjeta dentro de tu web, la integración con tu banco o una pasarela como PagueloFacil o Tilopay. Para clientes del extranjero, PayPal. Lo normal es sumar una de estas a Yappy, no reemplazarlo.' },
          { q: '¿Puedo cobrar con Yappy y con tarjeta en la misma web?', a: 'Sí. Puedes integrar los dos por separado o usar una pasarela que acepte ambos, como Tilopay, que según su sitio permite cobrar con tarjeta y con Yappy desde la tienda en línea.' },
          { q: '¿Cuánto cobran de comisión las pasarelas de pago en Panamá?', a: 'Depende del proveedor, del tipo de negocio y de lo que negocies. No publicamos porcentajes porque cambian; consúltalos directamente con cada proveedor o con tu banco y compáralos con tu margen.' },
          { q: '¿Tigo Money sigue funcionando en Panamá?', a: 'Tigo Money anunció el cierre de su billetera en Panamá, así que no conviene integrarla como método de pago nuevo.' },
          { q: '¿Qué pasa con mis clientes que pagan por transferencia?', a: 'Puedes mantener la transferencia o ACH para montos altos o pagos entre empresas. Solo ten en cuenta que hay que confirmar cada pago a mano y que el cliente puede dejarlo para después.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y pasarelas de pago' },
          { slug: 'funcionalidades/integracion-cybersource-panama', label: 'Integración de CyberSource' },
          { slug: 'blog/metodos-de-pago-online-en-panama', label: 'Métodos de pago online en Panamá' },
          { slug: 'blog/como-integrar-yappy-tu-tienda-online', label: 'Cómo integrar Yappy en tu tienda' },
        ],
      },
    ],
    cta: {
      h2: 'Suma la forma de pago que te falta',
      wa: 'Hola, ya cobro con Yappy y quiero agregar pagos con tarjeta en mi web. ¿Qué opción me recomiendan?',
    },
  },
];
