/* BLOG — Lote 23: guía long-form sobre diseño web para agencias de viajes y tours en Panamá.
   PageData con parent { slug: 'blog' }; el listado /blog la recoge por fecha
   y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog23: PageData[] = [
  {
    slug: 'blog/diseno-web-para-agencias-de-viajes-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para agencias de viajes en Panamá: qué reserva',
    description: 'Qué debe tener la web de una agencia de viajes en Panamá: reserva con depósito, fotos que venden la experiencia e itinerarios claros.',
    h1: 'Diseño web para agencias de viajes y tours en Panamá: qué de verdad genera reservas',
    breadcrumb: 'Diseño web para agencias de viajes',
    category: 'Diseño web',
    date: '2026-08-26',
    heroImage: {
      src: '/images/blog/diseno-web-para-agencias-de-viajes-panama.jpg',
      alt: 'Bote de tour navegando aguas turquesas cerca de islas tropicales verdes, día soleado, sin rostros visibles',
    },
    lead: [
      'Son las once de la noche y alguien decide entre San Blas y Bocas del Toro para el próximo puente. Si tu web no le deja ver el paquete completo y reservar ahí mismo, mañana reserva con otra agencia.',
      'Trabajas el itinerario, cuidas cada detalle del tour y aun así muchas ventas se te van por depender de un WhatsApp que nadie contesta a esa hora. Esta guía repasa qué debe tener la web de una agencia de viajes o tours en Panamá para convertir esa decisión de las once de la noche en una reserva confirmada, y también cuándo, con honestidad, todavía no conviene invertir en ella.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La reserva se decide en la web, no en el WhatsApp de mañana',
        paragraphs: [
          'A esa misma persona que sueña con San Blas o Bocas del Toro a las once de la noche le sobra tiempo y le faltan ganas de esperar. Abre tres o cuatro páginas de agencias, compara fotos, precios y qué tan fácil es reservar, y decide sin hablar con nadie. Si una de esas webs le permite ver el itinerario completo, elegir fecha y dejar un depósito ahí mismo, esa se lleva la venta esa misma noche; las demás dependen de que alguien conteste el WhatsApp al día siguiente.',
          'La mayoría de las webs de agencias de viajes y tours en Panamá todavía compiten en desventaja: precio "desde" sin desglosar, fotos genéricas del destino y un solo botón de WhatsApp como única forma de avanzar. En esta guía repasamos las decisiones que de verdad mueven la aguja —reserva con depósito online, fotos y video que venden la experiencia, itinerarios sin letra pequeña y SEO por destino— y también cuándo, con honestidad, todavía no conviene invertir en esto. Nuestra <a href="/industrias/diseno-web-agencias-viajes-tours-panama/">página de diseño web para agencias de viajes y tours</a> entra en el detalle completo de cómo construimos esa web; aquí nos enfocamos en el porqué de cada decisión.',
          'La pieza que más rápido se nota es la <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reserva online</a>: el viajero elige fecha, ve el cupo disponible y confirma con un <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">depósito por Yappy o tarjeta</a> en el momento en que está más entusiasmado, sin esperar a que alguien conteste. El depósito además compromete: baja los "confirmo y luego no aparece" que descuadran un tour de cupo limitado. El WhatsApp no desaparece —sigue siendo el canal para dudas—, pero deja de ser el único camino para cerrar una venta.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que necesita la web de una agencia de viajes o tours para vender, no solo para verse bien',
        intro: 'Si tu web —o la que estás por encargar— no tiene esto, se está quedando en la vitrina cuando podría estar cerrando la venta.',
        items: [
          'Una página propia por destino o tour (San Blas, Bocas del Toro, Boquete, city tour por Casco Viejo), no un solo catálogo genérico',
          'Reserva online con calendario de disponibilidad real y pago de depósito para asegurar el cupo',
          'Pago con Yappy y tarjeta, para el turista panameño y el extranjero por igual',
          'Fotos y video propios del tour, con gente disfrutando el momento, no imágenes de banco del destino vacío',
          'Itinerario día por día con qué incluye y qué no: transporte, comidas, entradas, guía, punto de salida',
          'Contenido bilingüe (español e inglés) para el turista que decide en su propio idioma',
          'Política de cambios y cancelación clara, antes de que la pregunten por WhatsApp',
          'Botón de WhatsApp por tour, con el paquete ya referenciado, para quien igual quiere hablar con alguien',
        ],
      },
      {
        type: 'steps',
        h2: 'Un itinerario que no deja nada a la letra pequeña',
        intro: 'El reclamo más común después de un tour no es el precio: es "no sabía que no incluía tal cosa". Un buen itinerario en la web evita ese problema antes de que exista.',
        items: [
          { h3: '1. El día completo, hora por hora', text: 'Punto de encuentro, hora de salida, actividades principales y hora estimada de regreso. El viajero quiere saber en qué se le va el día, no solo el nombre del tour.' },
          { h3: '2. Qué incluye, en una lista, no en un párrafo', text: 'Transporte, comidas, entradas, equipo, guía. Una lista corta se lee en cinco segundos; un párrafo largo se salta y la pregunta llega igual por WhatsApp.' },
          { h3: '3. Qué NO incluye, con la misma claridad', text: 'Propinas, bebidas alcohólicas, seguro de viaje, gastos personales. Decirlo de entrada evita el reclamo en el bus de regreso, que es el peor momento para descubrirlo.' },
          { h3: '4. Qué llevar y qué preparar', text: 'Protector solar, ropa de cambio, efectivo para gastos no incluidos, documento de identidad. Un viajero preparado disfruta más y reclama menos.' },
          { h3: '5. Política de cambios y cancelación, antes de pagar', text: 'Hasta cuándo se puede reprogramar, si el depósito es reembolsable y qué pasa si llueve. Publicarlo de antemano evita la negociación incómoda el mismo día del tour.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Fotos y video que venden la experiencia, no el destino',
        paragraphs: [
          'San Blas ya se vende solo: todo el mundo conoce el agua turquesa. Lo que el viajero todavía no ha visto es cómo se va a sentir en tu tour específico —si es el que ríe en la lancha, el que prueba el pescado recién sacado, el que se queda en silencio viendo el atardecer— y eso no lo transmite una foto de banco del archipiélago vacío. Nadie compra un mapa: compra cómo se va a sentir ese día, y solo tus propias fotos y video pueden mostrarlo.',
          'No hace falta una producción de cine: un video corto de treinta segundos grabado con el celular, con buena luz y el sonido real del mar, comunica más que una foto perfecta bajada de internet. Lo mismo con las fotos: mejor un grupo real disfrutando, aunque no sea una toma profesional, que una postal genérica que cualquier competidor puede tener en su propia web. Si además cuidas de no identificar a ningún cliente sin su permiso, evitas un problema de privacidad que muchas agencias pasan por alto.',
          'Esto también cambia qué fotos priorizas: menos toma aérea del archipiélago y más close-ups de la experiencia —la comida, la lancha, el grupo, el guía explicando algo con las manos—. Son esas imágenes, no el paisaje, las que hacen que alguien se imagine ahí y reserve.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie reserva un tour por el nombre del destino. Reserva porque',
        strong: 'se imaginó ahí, disfrutando, y tu web fue la que se lo mostró primero.',
      },
      {
        type: 'prose',
        h2: 'SEO por destino: cada tour es una búsqueda distinta',
        paragraphs: [
          'Nadie busca "agencia de tours en Panamá" cuando ya sabe a dónde quiere ir. Busca "tour a San Blas desde Panamá", "qué hacer en Bocas del Toro tres días" o "excursión de un día a Boquete". Son búsquedas distintas, con intención distinta, y Google las trata como preguntas distintas.',
          'Si todos tus tours viven apretados en una sola página de "Paquetes", le estás pidiendo a esa página que responda cuatro o cinco preguntas a la vez, y no gana ninguna. Con una página por destino —el itinerario, las fotos reales, el precio y la reserva como llamado a la acción— compites de verdad en la búsqueda donde el viajero ya te está buscando, no en una genérica que casi nadie escribe en Google.',
          'El blog cumple un papel parecido un paso antes: cada pregunta que el viajero hace mientras todavía está decidiendo —"cuándo es mejor época para ir a San Blas", "cuánto cuesta en promedio un tour a Bocas"— es un artículo que te capta antes de que elija agencia. Nadie garantiza el primer lugar en Google —quien lo prometa está exagerando—, pero una página por destino bien escrita, sostenida en el tiempo, es la diferencia entre aparecer en esa búsqueda o no aparecer para ninguna. Lo explicamos con más detalle en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene invertir todavía en esta web',
        paragraphs: [
          'No toda agencia necesita el paquete completo, y decirlo con honestidad ahorra dinero mal gastado. Si tu operación vive prácticamente 100% de paquetes corporativos por contrato —viajes de incentivo, retiros de empresa, grupos que ya llegan cerrados por una relación comercial existente— y no necesitas captar viajeros individuales desde Google ni redes sociales, invertir en páginas por destino, reserva online y SEO es pagar por un canal que no vas a usar. En ese caso, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> profesional con tu portafolio de servicios corporativos y un WhatsApp directo, desde $550 más ITBMS, es más que suficiente.',
          'Tampoco conviene si todavía no tienes fotos ni video propios de ningún tour: antes de pagar por una web completa, vale más invertir un fin de semana en producir ese material real, porque es lo que de verdad va a vender. Una web con paquetes claros pero fotos de banco no es mucho mejor que no tener web: el viajero nota la diferencia entre lo real y lo genérico aunque no sepa explicar por qué.',
          'Donde sí se justifica una web completa —una Página PYME desde $950 más ITBMS, con una página por destino y blog para SEO— es cuando manejas varios tours que compiten por búsquedas distintas y quieres dejar de depender solo del WhatsApp y de intermediarios. Si además vendes muchos tours a la vez y quieres un flujo de reserva y cobro más robusto, con manejo de cupos como si fuera un carrito de compra, el paquete de E-commerce ($1,500 más ITBMS) ya incluye Yappy y pasarelas de pago integradas. Ningún precio de esta guía incluye el 7% de ITBMS, y a eso se suma la infraestructura anual —desde $225 al año, aunque para un sitio con reservas online conviene más el plan Cloud a $350 al año— y el mantenimiento, desde $59 al mes.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para agencias de viajes y tours',
        items: [
          { q: '¿Necesito una página por cada destino o tour?', a: 'Si manejas más de dos o tres y cada uno tiene volumen real de búsquedas, sí. "Tour a San Blas" y "qué hacer en Bocas del Toro" son búsquedas distintas, y una sola página de "Paquetes" no responde bien a ninguna. Si por ahora solo ofreces un tour, no hace falta fragmentar nada: profundiza esa única página.' },
          { q: '¿La reserva online reemplaza el WhatsApp?', a: 'No, lo complementa. El WhatsApp sigue siendo el canal para dudas y para quien prefiere hablar con alguien antes de decidir. La reserva con depósito captura al que ya decidió y no quiere esperar a que alguien conteste, sobre todo de noche o fuera de horario.' },
          { q: '¿Cuánto cuesta una web para una agencia de viajes o tours en Panamá?', a: 'Depende de cuántos destinos vas a mostrar y si necesitas reserva y cobro integrados. Una landing page enfocada parte de $550, y una Página PYME de 8 a 12 páginas —la opción recomendada cuando manejas varios tours— parte de $950. Si necesitas un flujo de reserva más robusto tipo carrito, el paquete de E-commerce parte de $1,500. Ningún precio incluye el 7% de ITBMS.' },
          { q: '¿Qué pasa si todavía no tengo fotos ni video profesional de mis tours?', a: 'No hace falta una producción cara: fotos y video reales tomados con el celular, con buena luz, valen más que imágenes de banco del destino. Si de plano no tienes nada todavía, vale más invertir primero en producir ese material que en pagar por una web completa que se apoye en fotos genéricas.' },
          { q: '¿El contenido bilingüe es obligatorio desde el día uno?', a: 'No es obligatorio, pero sí recomendable si una parte importante de tus clientes son turistas extranjeros que deciden en inglés. Si hoy casi toda tu venta es a panameños, puedes lanzar en español y sumar el inglés después, cuando ya tengas el contenido base validado.' },
          { q: '¿Qué pasa si mi agencia vive de contratos corporativos y no de viajeros individuales?', a: 'Entonces probablemente no necesitas todavía páginas por destino ni SEO orientado al viajero individual. Una presencia simple que muestre tu portafolio corporativo y un canal directo de contacto puede ser suficiente, y vale la pena revisarlo si algún día decides abrir también a viajeros individuales.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-agencias-viajes-tours-panama', label: 'Diseño web para agencias de viajes y tours' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Yappy y pasarelas de pago' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que reserva mientras el viajero todavía sueña con el viaje',
      wa: 'Hola, quiero una web para mi agencia de viajes o tours en Panamá. ¿Me asesoran?',
    },
  },
];
