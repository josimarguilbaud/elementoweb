/* BLOG — Lote 8: guía long-form sobre diseño web para abogados en Panamá.
   PageData con parent { slug: 'blog' }; el listado /blog la recoge por fecha
   y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog8: PageData[] = [
  {
    slug: 'blog/diseno-web-para-abogados-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para abogados en Panamá: qué genera consultas',
    description: 'Qué debe tener la web de un abogado en Panamá: credibilidad sin prometer resultados, un formulario que filtra el caso y SEO por área de práctica.',
    h1: 'Diseño web para abogados en Panamá: qué de verdad genera consultas',
    breadcrumb: 'Diseño web para abogados',
    category: 'Diseño web',
    date: '2026-09-14',
    heroImage: {
      src: '/images/blog/diseno-web-para-abogados-panama.jpg',
      alt: 'Escritorio de un despacho de abogados con documentos legales y una balanza de la justicia, estantería con libros de derecho de fondo',
    },
    lead: [
      'Alguien escribe "abogado laboral en Panamá" o "cuánto cuesta un divorcio de mutuo acuerdo" con un problema real encima: lo despidieron, se está separando, necesita constituir una sociedad antes de fin de mes. Abre tres o cuatro resultados, los compara en menos de un minuto y decide a cuál escribirle. No está evaluando quién tiene el logo más bonito: está buscando señales de que ese abogado puede con su caso y de que puede confiarle algo serio.',
      'La mayoría de las webs de abogados en Panamá pierden esa primera decisión sin darse cuenta: hablan de la firma en genérico, meten media docena de áreas de práctica en una sola página de "Servicios" y no filtran nada antes de que suene el teléfono. En esta guía repasamos qué debe tener sí o sí la web de un abogado o una firma, cómo diseñar el formulario que filtra el caso antes de la llamada, por qué el SEO se juega área por área, y también cuándo, con honestidad, todavía no conviene invertir en ella.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué la web de un abogado vende confianza, no un servicio',
        paragraphs: [
          'Nadie contrata un servicio legal por impulso ni comparando precios como quien compara dos restaurantes. El visitante que llega a tu web está por confiarte una sociedad, una herencia, una demanda o su situación migratoria: algo que probablemente no vuelva a necesitar en años y que no sabe evaluar técnicamente. Por eso decide con las únicas señales que sí entiende: si te ves serio, si eres claro, si pareces alguien capaz de manejar exactamente su tipo de problema.',
          'Ahí está la diferencia con casi cualquier otro negocio. Un restaurante vende con fotos que dan hambre; una tienda vende con precio y disponibilidad. Un abogado vende con credibilidad, y la credibilidad se construye con detalles concretos: número de colegiado visible, áreas de práctica explicadas sin jerga, un equipo con nombre y cara, y ninguna promesa que no se pueda cumplir. Quitar cualquiera de esos detalles no hace la web más simple: la hace menos confiable.',
          'Esto no es un matiz de diseño, es la estrategia completa. Antes de decidir colores o plantilla, hay que decidir qué señales de confianza va a transmitir la web y en qué orden. Todo lo demás —el formulario, el SEO por área, las fotos— sirve a ese único objetivo: que un desconocido con un problema serio decida confiarte su caso a ti antes que al siguiente resultado de Google. Nuestra <a href="/industrias/diseno-web-abogados-panama/">página de diseño web para abogados</a> entra en el detalle de cómo estructuramos esa confianza para una firma en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de un abogado en Panamá debe tener sí o sí',
        intro: 'Si tu web —o la de tu firma— no cumple con esto, no importa cuán bonita sea: le falta lo que de verdad genera confianza.',
        items: [
          'El número de colegiado y el nombre completo de cada abogado, visibles, no escondidos en un pie de página',
          'Una página propia por cada área de práctica, no una lista de viñetas dentro de "Servicios"',
          'Fotos reales del abogado y del equipo, nunca el clásico banco de imágenes de alguien de traje sonriendo a la cámara',
          'Un formulario de consulta que pregunta el tipo de caso y la urgencia antes de pedir el teléfono',
          'Cero promesas de resultado: ni "ganamos el 90% de los casos" ni "resultado garantizado"',
          'Testimonios centrados en el trato y el proceso, nunca en el resultado de un caso específico',
          'Un canal directo —WhatsApp o teléfono— sin formularios de contacto genéricos de tres pantallas',
          'Aviso claro de si la primera consulta tiene costo o no: la ambigüedad ahuyenta al cliente serio',
        ],
      },
      {
        type: 'steps',
        h2: 'Un formulario que filtra el caso antes de la llamada',
        intro: 'El cuello de botella de casi toda práctica legal no es conseguir consultas: es perder tiempo con las que no aplican. Un formulario bien diseñado filtra antes de que suene el teléfono.',
        items: [
          { h3: '1. Área o tipo de caso', text: 'Una lista simple —laboral, familiar, corporativo, inmigración, otro— evita que un caso de bienes raíces le llegue a quien solo lleva litigios laborales, y dice al instante a quién asignarlo dentro del equipo.' },
          { h3: '2. Urgencia real', text: 'Preguntar si hay una audiencia, un plazo legal o una fecha límite encima separa lo urgente de lo que puede esperar una respuesta al día siguiente, sin que nadie tenga que adivinarlo por teléfono.' },
          { h3: '3. Un resumen breve, no un relato completo', text: 'Dos o tres líneas del caso bastan para evaluar si aplica. Pedir el expediente completo en un formulario web es demasiado y hace que el cliente serio abandone antes de enviarlo.' },
          { h3: '4. Si ya tiene abogado en el caso', text: 'Una sola pregunta evita reuniones incómodas y consultas que en realidad buscan una segunda opinión no solicitada por la otra parte.' },
          { h3: '5. Cómo prefiere que lo contacten', text: 'Llamada, WhatsApp o correo: dejar elegir al cliente el canal sube la tasa de respuesta, porque no todos revisan el correo con la misma prisa con la que revisan WhatsApp.' },
        ],
      },
      {
        type: 'prose',
        h2: 'SEO por área de práctica: cada especialidad es una búsqueda distinta',
        paragraphs: [
          'Nadie busca "bufete de abogados en Panamá" cuando tiene un problema concreto. Busca "abogado laboral Panamá", "cuánto cuesta un divorcio de mutuo acuerdo", "cómo constituir una sociedad anónima en Panamá" o "abogado de inmigración para visa de trabajo". Son búsquedas distintas, con intención distinta, y Google las trata como preguntas distintas.',
          'Si todas esas áreas viven apretadas en una sola página de "Servicios", le estás pidiendo a esa página que responda cuatro o cinco preguntas a la vez, y Google casi nunca la premia por ninguna. Con una página por área —el problema descrito en el idioma del cliente, los casos típicos que resuelves y la consulta como llamado a la acción— compites de verdad, área por área, en las búsquedas donde tu cliente ya te está buscando.',
          'El blog cumple el mismo papel un escalón antes: cada pregunta que tus clientes hacen antes de decidirse —"qué documentos necesito para una liquidación laboral", "cuánto tarda un trámite de residencia"— es un artículo que te capta cuando todavía están averiguando, antes de elegir abogado. Nadie garantiza el primer lugar en Google —quien lo prometa está exagerando—, pero una página por área bien escrita, sostenida en el tiempo, es la diferencia entre aparecer para una búsqueda o no aparecer para ninguna. Lo explicamos con más detalle en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Ningún despacho serio promete ganar un caso. La web que sí convence promete',
        strong: 'algo más honesto: explicar el proceso, ser claro con los tiempos y estar disponible cuando el cliente pregunta.',
      },
      {
        type: 'prose',
        h2: 'El error de prometer resultados (y qué decir en su lugar)',
        paragraphs: [
          'Es tentador escribir "ganamos el 95% de nuestros casos" o "resultado garantizado" porque suena a argumento de venta fuerte. En la práctica legal es, además de poco creíble, un problema ético: ningún abogado controla el resultado de un caso —depende de hechos, de un juez, de la otra parte— y anunciarlo como si dependiera de la firma raya en publicidad engañosa. Conviene revisar las reglas de publicidad del Colegio Nacional de Abogados antes de publicar cualquier cifra de "éxito".',
          'Lo que sí genera confianza, sin prometer nada que no se pueda cumplir, es la claridad: cuántos años lleva la firma en esa área, qué tipo de casos maneja con regularidad, cómo es el proceso paso a paso, qué documentos va a pedir y en cuánto tiempo aproximado responde una primera consulta. Un cliente que entiende el proceso confía más que uno al que le prometieron un resultado que después no se cumplió.',
          'Lo mismo aplica a los testimonios: uno que diga "explicó todo el proceso con paciencia y respondió cada mensaje" genera confianza real y no compromete a nadie. Uno que diga "gracias a ellos gané el caso" expone detalles de un asunto que probablemente sigue siendo confidencial, y además reintroduce la misma promesa de resultado por la puerta trasera. La discreción no es solo buen gusto: es parte del oficio.',
        ],
      },
      {
        type: 'prose',
        h2: 'Fotos reales, no banco de imágenes',
        paragraphs: [
          'El cliente que va a contarte un problema de familia, una demanda o el futuro de su empresa quiere saber con quién está hablando. Una foto de stock de un actor con toga y birrete, o del típico grupo de personas de traje sonriendo alrededor de una mesa, no genera confianza: genera la sospecha correcta de que la firma no quiso mostrar su cara.',
          'Una fotografía real del abogado o del equipo, aunque sea sencilla —en la oficina, con buena luz, sin poses forzadas— pesa más que cualquier texto de "sobre nosotros". Lo mismo con las instalaciones: si atiendes clientes en persona, una foto real de la sala de reuniones dice más sobre seriedad que una descripción larga.',
          'Esto no exige una sesión de fotos costosa antes de lanzar la web: exige priorizar lo real sobre lo genérico, aunque sea con el celular y buena luz natural, y dejar el banco de imágenes solo para lo que de verdad no tiene rostro, como un ícono o una ilustración de proceso. El mismo criterio aplica a los testimonios que sí decidas publicar: mejor pocos y reales que muchos y genéricos.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene invertir todavía en una web para tu práctica',
        paragraphs: [
          'No toda práctica legal necesita una web completa hoy, y decirlo con honestidad ahorra dinero mal gastado. Si acabas de empezar, no tienes casos que mostrar ni trayectoria más allá del título, y todavía no sabes en qué área te vas a especializar, invertir en una Página PYME con varias áreas de práctica es prematuro: no hay contenido real que poner en esas páginas todavía. En ese punto rinde más empezar con algo simple y honesto —una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con tus datos, tu colegiatura y un WhatsApp directo, desde $550 más ITBMS— y crecer hacia el sitio completo cuando ya tengas trayectoria que mostrar.',
          'Tampoco conviene si tu práctica vive prácticamente de referidos, te va bien así y honestamente no piensas cambiarlo. Si cada cliente nuevo llega recomendado por otro abogado o por un cliente anterior, y no te interesa captar tráfico frío desde Google, gastar en SEO por área de práctica es pagar por un canal que no vas a usar. Una web mínima que confirme que existes, dé confianza y facilite el contacto puede ser suficiente.',
          'Donde sí se justifica una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> —una Página PYME desde $950 más ITBMS, con una página por área de práctica y blog— es cuando quieres dejar de depender solo de referidos, cuando manejas varias áreas que compiten por búsquedas distintas, o cuando la firma ya creció y la web actual no refleja ni de lejos la seriedad del trabajo que hacen. Los precios completos, con todo lo que suma o resta al costo, están en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para abogados',
        items: [
          { q: '¿Puedo prometer en mi web que voy a ganar el caso?', a: 'No conviene, aunque la norma exacta varíe según el caso: ningún abogado controla el resultado final, que depende de hechos, jueces y de la otra parte. Prometerlo es publicidad poco creíble y, según las reglas de ejercicio de la abogacía, puede rayar en publicidad engañosa. Lo que sí conviene comunicar es experiencia real en el área, claridad sobre el proceso y disponibilidad para responder dudas.' },
          { q: '¿De verdad necesito una página distinta por cada área de práctica?', a: 'Si manejas más de una y cada una tiene volumen real de consultas, sí. Cada área es una búsqueda distinta en Google —"abogado laboral" y "abogado de inmigración" no compiten por las mismas palabras— y una sola página de "Servicios" no responde bien a ninguna de las dos. Si solo llevas una especialidad, no hace falta fragmentar nada: profundiza esa única página.' },
          { q: '¿Cuánto cuesta una web para un abogado o una firma en Panamá?', a: 'Depende de cuántas áreas de práctica vas a mostrar y de si necesitas blog. Una landing page enfocada parte de $550, y una Página PYME de 8 a 12 páginas —la opción recomendada cuando hay varias áreas— parte de $950. Los precios son en dólares y no incluyen el 7% de ITBMS. El detalle completo está en nuestra guía de cuánto cuesta una página web en Panamá.' },
          { q: '¿Puedo usar testimonios de clientes en mi web?', a: 'Con cuidado. Un testimonio sobre el trato, la claridad al explicar el proceso o la disponibilidad para responder genera confianza sin problema. Uno que hable del resultado de un caso específico expone información que probablemente sigue siendo confidencial y reintroduce, por la puerta trasera, la misma promesa de resultado que la ética profesional no permite. Antes de publicar cualquier testimonio, pide autorización explícita al cliente.' },
          { q: '¿El SEO me garantiza aparecer primero en Google?', a: 'No, y cualquiera que lo prometa está exagerando. Lo que sí es cierto es que una página bien escrita por área de práctica, sostenida en el tiempo con contenido útil, tiene muchas más posibilidades de aparecer que una sola página genérica de "Servicios". El SEO es una carrera de fondo, no un interruptor que se enciende al publicar la web.' },
          { q: '¿Qué pasa si mi práctica funciona bien solo con referidos?', a: 'Entonces probablemente no necesitas invertir todavía en SEO por área de práctica ni en una web extensa. Si cada cliente llega recomendado y no te interesa captar tráfico frío desde Google, una presencia simple que confirme quién eres, tu colegiatura y un canal directo de contacto puede ser suficiente. Vale la pena revisarlo si algún día ese canal de referidos se reduce.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-abogados-panama', label: 'Diseño web para abogados y firmas legales' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },

          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Diseño web para consultoras y servicios profesionales' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que filtra consultas y transmite la seriedad de tu práctica',
      wa: 'Hola, quiero una web para mi firma o práctica legal en Panamá. ¿Me asesoran?',
    },
  },
];
