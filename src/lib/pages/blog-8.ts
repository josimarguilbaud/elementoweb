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
      alt: 'Mazo de juez sobre su base, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para abogados en Panamá genera consultas cuando muestra señales de confianza verificables: número de colegiado visible, una página por área de práctica, un formulario que pregunta tipo de caso y urgencia, y ninguna promesa de resultado. En Elemento Web, una landing para un abogado parte de $550 y una Web empresarial con varias áreas, de $1,250, más ITBMS.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué la web de un abogado vende confianza y no un servicio?',
        paragraphs: [
          'Quien busca "abogado laboral en Panamá" o "cuánto cuesta un divorcio de mutuo acuerdo" tiene un problema real encima: un despido, una separación, una sociedad que constituir antes de fin de mes. Abre tres o cuatro resultados, los compara en menos de un minuto y le escribe a uno. No sabe evaluar técnicamente a un abogado, así que decide con las señales que sí entiende: seriedad, claridad y experiencia en su tipo de caso.',
          'Esas señales son concretas: número de colegiado visible, áreas de práctica explicadas sin jerga, un equipo con nombre y cara, y ninguna promesa que no se pueda cumplir. Por eso, antes de elegir colores o plantilla, se decide qué señales transmite la web y en qué orden; el formulario, el SEO por área y las fotos sirven a ese objetivo. Nuestra <a href="/industrias/diseno-web-abogados-panama/">página de diseño web para abogados</a> detalla cómo estructuramos esa confianza para una firma en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de un abogado en Panamá debe tener sí o sí',
        items: [
          'El número de colegiado y el nombre completo de cada abogado, visibles, no escondidos en el pie de página',
          'Una página propia por cada área de práctica, no una lista de viñetas dentro de "Servicios"',
          'Fotos reales del abogado y del equipo, no banco de imágenes',
          'Un formulario de consulta que pregunta el tipo de caso y la urgencia antes de pedir el teléfono',
          'Testimonios sobre el trato y el proceso, nunca sobre el resultado de un caso',
          'Un canal directo —WhatsApp o teléfono— además del formulario',
          'Aviso claro de si la primera consulta tiene costo o no',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo diseñar un formulario que filtra el caso antes de la llamada',
        intro: 'El cuello de botella de una práctica legal no suele ser conseguir consultas, sino perder tiempo con las que no aplican. Cinco preguntas filtran antes de que suene el teléfono.',
        items: [
          { h3: '1. Área o tipo de caso', text: 'Una lista simple —laboral, familiar, corporativo, inmigración, otro— evita que un caso de bienes raíces le llegue a quien solo lleva litigios laborales, y dice al instante a quién asignarlo dentro del equipo.' },
          { h3: '2. Urgencia real', text: 'Preguntar si hay una audiencia, un plazo legal o una fecha límite separa lo urgente de lo que puede esperar una respuesta al día siguiente.' },
          { h3: '3. Un resumen breve, no un relato completo', text: 'Dos o tres líneas del caso bastan para evaluar si aplica. Pedir el expediente completo en un formulario web hace que el cliente serio abandone antes de enviarlo.' },
          { h3: '4. Si ya tiene abogado en el caso', text: 'Una sola pregunta evita reuniones incómodas y consultas que en realidad buscan una segunda opinión no solicitada por la otra parte.' },
          { h3: '5. Cómo prefiere que lo contacten', text: 'Llamada, WhatsApp o correo: dejar elegir el canal sube la tasa de respuesta, porque no todos revisan el correo con la misma prisa que WhatsApp.' },
        ],
      },
      {
        type: 'prose',
        h2: 'SEO para abogados en Panamá: una página por área de práctica',
        paragraphs: [
          'Nadie con un problema concreto busca "bufete de abogados en Panamá". Busca "abogado laboral Panamá", "cómo constituir una sociedad anónima en Panamá" o "abogado de inmigración para visa de trabajo": búsquedas con intención distinta que Google trata como preguntas distintas. Una sola página de "Servicios" que intenta responder cuatro o cinco a la vez rara vez aparece para alguna.',
          'Una página por área —el problema descrito en el idioma del cliente, los casos típicos que resuelves y la consulta como llamado a la acción— compite en cada búsqueda por separado. El blog cubre el paso anterior: cada pregunta previa a contratar, como "qué documentos necesito para una liquidación laboral" o "cuánto tarda un trámite de residencia", es un artículo que capta al cliente antes de que elija abogado. Nadie puede garantizar el primer lugar en Google; lo detallamos en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Puede un abogado prometer resultados en su web?',
        paragraphs: [
          'No conviene. Frases como "ganamos el 95% de nuestros casos" o "resultado garantizado" son poco creíbles y plantean un problema ético: el resultado depende de los hechos, del juez y de la otra parte, no de la firma, y anunciarlo así raya en publicidad engañosa. Revisa las reglas de publicidad del Colegio Nacional de Abogados antes de publicar cualquier cifra de "éxito".',
          'En su lugar, comunica lo verificable: años de la firma en esa área, tipo de casos que maneja con regularidad, el proceso paso a paso, los documentos que pedirá y el tiempo aproximado de respuesta a una primera consulta. Con los testimonios aplica el mismo criterio: "explicó todo el proceso con paciencia" genera confianza sin comprometer a nadie; "gracias a ellos gané el caso" expone un asunto probablemente confidencial y reintroduce la promesa de resultado.',
        ],
      },
      {
        type: 'prose',
        h2: 'Fotos reales del abogado, no banco de imágenes',
        paragraphs: [
          'Quien va a contarte un problema de familia, una demanda o el futuro de su empresa quiere saber con quién habla. Una foto de stock de un actor con toga, o de un grupo de traje sonriendo alrededor de una mesa, genera la sospecha de que la firma no quiso mostrar su cara. Una foto real del abogado o del equipo en la oficina, con buena luz natural y aunque sea hecha con el celular, pesa más que cualquier texto de "sobre nosotros". El banco de imágenes queda solo para lo que no tiene rostro, como un ícono o una ilustración de proceso.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en una web para tu práctica legal?',
        paragraphs: [
          'Si acabas de empezar, sin casos que mostrar y sin decidir tu área de especialidad, una Web empresarial con varias áreas de práctica es prematura: no hay contenido real para esas páginas. Rinde más una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con tus datos, tu colegiatura y un WhatsApp directo, desde $550 más ITBMS, y crecer hacia el sitio completo cuando tengas trayectoria.',
          'Tampoco conviene invertir en SEO por área si tu práctica vive de referidos y no te interesa captar tráfico frío desde Google: una web mínima que confirme quién eres y facilite el contacto puede bastar.',
          'Una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> —Web empresarial desde $1,250 más ITBMS, con una página por área y blog— se justifica cuando quieres dejar de depender solo de referidos, cuando manejas varias áreas que compiten por búsquedas distintas o cuando la web actual no refleja la seriedad de la firma. Los precios completos están en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para abogados',
        items: [
          { q: '¿Puedo prometer en mi web que voy a ganar el caso?', a: 'No conviene, aunque la norma exacta varíe según el caso: ningún abogado controla el resultado final, que depende de hechos, jueces y de la otra parte. Prometerlo es publicidad poco creíble y, según las reglas de ejercicio de la abogacía, puede rayar en publicidad engañosa. Lo que sí conviene comunicar es experiencia real en el área, claridad sobre el proceso y disponibilidad para responder dudas.' },
          { q: '¿De verdad necesito una página distinta por cada área de práctica?', a: 'Si manejas más de una y cada una tiene volumen real de consultas, sí. Cada área es una búsqueda distinta en Google —"abogado laboral" y "abogado de inmigración" no compiten por las mismas palabras— y una sola página de "Servicios" no responde bien a ninguna de las dos. Si solo llevas una especialidad, no hace falta fragmentar nada: profundiza esa única página.' },
          { q: '¿Cuánto cuesta una web para un abogado o una firma en Panamá?', a: 'Depende de cuántas áreas de práctica vas a mostrar y de si necesitas blog. Una landing page enfocada parte de $550, y una Web empresarial de hasta 6 páginas —la opción recomendada cuando hay varias áreas— parte de $1,250. Los precios son en dólares y no incluyen el 7% de ITBMS. El detalle completo está en nuestra guía de cuánto cuesta una página web en Panamá.' },
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
