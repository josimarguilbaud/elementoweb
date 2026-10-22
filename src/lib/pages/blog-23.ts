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
      alt: 'Islotes de San Blas con palmeras y un teléfono de vidrio con calendario y mapa que ilustran las reservas de una agencia de viajes',
    },
    lead: [
      'El diseño web para agencias de viajes en Panamá genera reservas cuando el viajero puede cerrar solo, a cualquier hora: una página por tour, itinerario con qué incluye y qué no, fotos y video propios, y reserva online con depósito por Yappy o tarjeta. Así construimos estas webs en Elemento Web, en Ciudad de Panamá.',
      'Son las once de la noche y alguien decide entre San Blas y Bocas del Toro para el próximo puente. Si tu web no le deja ver el paquete completo y reservar ahí mismo, mañana reserva con otra agencia. Esta guía explica cada pieza y cuándo todavía no conviene invertir.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué una agencia de viajes necesita reserva online y no solo WhatsApp?',
        paragraphs: [
          'Porque el viajero compara tres o cuatro agencias de noche, sin hablar con nadie. La que le deja ver el itinerario, elegir fecha y dejar un depósito se lleva la venta esa misma noche; las demás dependen de que alguien conteste el WhatsApp al día siguiente. La mayoría de las webs del rubro compiten en desventaja: precio "desde" sin desglosar, fotos genéricas del destino y un solo botón de WhatsApp.',
          'Con <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reserva online</a>, el viajero ve el cupo disponible y confirma con un <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">depósito por Yappy o tarjeta</a> cuando está más entusiasmado. El depósito además compromete y baja los "confirmo y luego no aparece" que descuadran un tour de cupo limitado. El WhatsApp sigue para dudas, pero deja de ser el único camino. El detalle de cómo construimos esta web está en nuestra <a href="/industrias/diseno-web-agencias-viajes-tours-panama/">página de diseño web para agencias de viajes y tours</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe tener el diseño web para agencias de viajes y tours?',
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
        h2: '¿Cómo escribir un itinerario de tour sin letra pequeña?',
        intro: 'El reclamo más común después de un tour no es el precio: es "no sabía que no incluía tal cosa".',
        items: [
          { h3: '1. El día completo, hora por hora', text: 'Punto de encuentro, hora de salida, actividades principales y hora estimada de regreso.' },
          { h3: '2. Qué incluye, en una lista, no en un párrafo', text: 'Transporte, comidas, entradas, equipo, guía. Una lista se lee en cinco segundos; un párrafo se salta y la pregunta llega igual por WhatsApp.' },
          { h3: '3. Qué NO incluye, con la misma claridad', text: 'Propinas, bebidas alcohólicas, seguro de viaje, gastos personales. Decirlo de entrada evita el reclamo en el bus de regreso.' },
          { h3: '4. Qué llevar y qué preparar', text: 'Protector solar, ropa de cambio, efectivo para gastos no incluidos, documento de identidad. Un viajero preparado disfruta más y reclama menos.' },
          { h3: '5. Política de cambios y cancelación, antes de pagar', text: 'Hasta cuándo se puede reprogramar, si el depósito es reembolsable y qué pasa si llueve.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué fotos y videos venden un tour?',
        paragraphs: [
          'Los de la experiencia, no los del destino. Todo el mundo conoce el agua turquesa de San Blas; lo que el viajero no ha visto es cómo se sentirá en tu tour: la lancha, el pescado recién sacado, el atardecer, el guía explicando algo. Eso no lo transmite una foto de banco del archipiélago vacío, y cualquier competidor puede tener la misma postal.',
          'No hace falta una producción de cine: un video de treinta segundos grabado con el celular, con buena luz y el sonido real del mar, comunica más que una foto perfecta bajada de internet. Prioriza menos tomas aéreas y más close-ups de la comida, la lancha y el grupo, y no identifiques a ningún cliente sin su permiso.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie reserva un tour por el nombre del destino. Reserva porque',
        strong: 'se imaginó ahí, disfrutando, y tu web fue la que se lo mostró primero.',
      },
      {
        type: 'prose',
        h2: '¿Por qué hacer una página por destino para el SEO?',
        paragraphs: [
          'Quien ya sabe a dónde quiere ir no busca "agencia de tours en Panamá": busca "tour a San Blas desde Panamá", "qué hacer en Bocas del Toro tres días" o "excursión de un día a Boquete". Una sola página de "Paquetes" que intenta responder cinco búsquedas a la vez no gana ninguna; una página por destino con itinerario, fotos reales, precio y reserva compite donde el viajero ya te busca.',
          'El blog trabaja un paso antes: "cuándo es mejor época para ir a San Blas" o "cuánto cuesta en promedio un tour a Bocas" son artículos que te captan antes de que el viajero elija agencia. Nadie garantiza el primer lugar en Google, pero una página por destino sostenida en el tiempo es la diferencia entre aparecer o no. Lo explicamos en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de una agencia de viajes?',
        paragraphs: [
          'Si vives casi por completo de paquetes corporativos por contrato —viajes de incentivo, retiros de empresa, grupos cerrados— y no necesitas captar viajeros individuales, las páginas por destino, la reserva online y el SEO son un canal que no usarás. Basta una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con tu portafolio corporativo y WhatsApp directo, desde $550 más ITBMS. Tampoco conviene si aún no tienes fotos ni video propios: invierte primero un fin de semana en producir ese material.',
          'La web completa —Web empresarial desde $1,250 más ITBMS, con una página por destino y blog— se justifica cuando manejas varios tours que compiten por búsquedas distintas y quieres dejar de depender del WhatsApp y de intermediarios. Si vendes muchos tours a la vez y necesitas manejo de cupos como un carrito, el paquete de E-commerce ($1,950 más ITBMS) incluye Yappy y pasarelas integradas. Se suma la infraestructura anual —desde $225 al año, aunque para reservas online conviene el plan Cloud a $350 al año— y el mantenimiento, desde $99 al mes. Ningún precio incluye el 7% de ITBMS.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para agencias de viajes y tours',
        items: [
          { q: '¿Necesito una página por cada destino o tour?', a: 'Si manejas más de dos o tres y cada uno tiene volumen real de búsquedas, sí. "Tour a San Blas" y "qué hacer en Bocas del Toro" son búsquedas distintas, y una sola página de "Paquetes" no responde bien a ninguna. Si por ahora solo ofreces un tour, no hace falta fragmentar nada: profundiza esa única página.' },
          { q: '¿La reserva online reemplaza el WhatsApp?', a: 'No, lo complementa. El WhatsApp sigue siendo el canal para dudas y para quien prefiere hablar con alguien antes de decidir. La reserva con depósito captura al que ya decidió y no quiere esperar a que alguien conteste, sobre todo de noche o fuera de horario.' },
          { q: '¿Cuánto cuesta una web para una agencia de viajes o tours en Panamá?', a: 'Depende de cuántos destinos vas a mostrar y si necesitas reserva y cobro integrados. Una landing page enfocada parte de $550, y una Web empresarial de hasta 6 páginas —la opción recomendada cuando manejas varios tours— parte de $1,250. Si necesitas un flujo de reserva más robusto tipo carrito, el paquete de E-commerce parte de $1,950. Ningún precio incluye el 7% de ITBMS.' },
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
