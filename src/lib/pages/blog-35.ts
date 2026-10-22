/* BLOG — Lote 35: guía long-form sobre diseño web para empresas de aire
   acondicionado y refrigeración en Panamá. PageData con parent { slug: 'blog' };
   el listado /blog la recoge por fecha y categoría. Enlaces internos solo a
   slugs reales del sitio. */
import type { PageData } from '../types';

export const blog35: PageData[] = [
  {
    slug: 'blog/diseno-web-para-aire-acondicionado-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para aire acondicionado en Panamá: dos negocios',
    description: 'Una empresa de A/C en Panamá vende dos cosas: la reparación de hoy y el contrato anual. Cómo separar las dos rutas en la web sin perder ninguna.',
    h1: 'Diseño web para aire acondicionado en Panamá: la emergencia y el contrato',
    breadcrumb: 'Diseño web para aire acondicionado',
    category: 'Diseño web',
    date: '2026-09-07',
    heroImage: {
      src: '/images/blog/diseno-web-para-aire-acondicionado-panama.jpg',
      alt: 'Unidad split de aire acondicionado en una pared blanca de una habitación luminosa, para el diseño web de empresas de A/C',
    },
    lead: [
      'El diseño web para aire acondicionado en Panamá debe separar dos rutas: la emergencia, con WhatsApp y teléfono visibles, precio de la visita y zonas de cobertura, y el contrato de mantenimiento, con su propia página que explica visitas y frecuencia. En Elemento Web, una landing parte desde $550 y una web de hasta 6 páginas desde $1,250.',
      'A las dos de la tarde, en plena ola de calor, a alguien se le daña el aire: quiere saber si alguien puede ir hoy y cuánto cuesta la visita, y decide en lo que tarda en abrir dos o tres páginas. Ese mismo mes, la empresa puede estar cerrando un contrato anual con la administración de un edificio o una cadena de restaurantes, una decisión con presupuesto y comparación. Casi ninguna web del rubro separa los dos casos.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué una empresa de aire acondicionado necesita dos rutas en su web?',
        paragraphs: [
          'La mayoría de las webs de aire acondicionado y refrigeración en Panamá dicen «Instalación, mantenimiento y reparación de aires acondicionados. Contáctanos» sobre la foto de un split nuevo. Ese mensaje no le habla bien ni al que tiene el equipo dañado ahora ni al que evalúa un contrato de todo el año.',
          'El cliente de emergencia busca una sola cosa: el teléfono o el WhatsApp. Si antes tiene que leer sobre mantenimiento preventivo, abre la siguiente pestaña y llama a otro. El cliente del contrato —gerente de edificio, dueño de restaurante, encargado de una clínica— evalúa si la empresa tiene capacidad técnica y seriedad para sostener su equipo todo el año, y una página que grita «emergencia» en el primer scroll lo hace dudar.',
          'Los dos son negocios reales y casi siempre conviven en la misma empresa, como explicamos en nuestra página de <a href="/industrias/diseno-web-aire-acondicionado-refrigeracion-panama/">diseño web para aire acondicionado y refrigeración</a>. La solución es tratarlos como dos rutas dentro del mismo sitio, cada una con su diseño, su ritmo y su llamado a la acción.',
        ],
      },
      {
        type: 'checklist',
        h2: 'La ruta de la emergencia: cero fricción desde el primer segundo',
        intro: 'Con el aire dañado, cada clic de más es un cliente que se va a la siguiente pestaña.',
        items: [
          'Botón de WhatsApp y teléfono fijos arriba, visibles sin hacer scroll',
          'Un mensaje pre-armado en el botón de WhatsApp («Hola, mi aire no enfría, necesito una visita hoy»)',
          'El horario de emergencias sin ambigüedad: si atiendes 24/7 dilo, y si es hasta cierta hora, también',
          'El precio o rango de la visita de diagnóstico visible, no una sorpresa por teléfono',
          'Cero formularios largos: nadie con el aire dañado llena ocho campos',
          'Zonas de cobertura claras, para que alguien del interior sepa de inmediato si llegas',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo vender el contrato de mantenimiento de aire acondicionado en la web?',
        paragraphs: [
          'Para la mayoría de estas empresas, el contrato anual es el negocio que sostiene el año: más estable que la reparación suelta, con equipos que además fallan menos. Pero nadie lo decide con la urgencia de una avería, así que necesita su propia página, no un párrafo al final de «servicios».',
          'Esa página explica lo que una llamada de emergencia no deja explicar: qué incluye cada visita (limpieza de filtros y serpentines, revisión de gas refrigerante, chequeo eléctrico), cada cuánto se programa —normalmente dos o tres veces al año— y qué cuesta el plan frente a una reparación mayor que el mantenimiento habría evitado.',
          'El llamado a la acción también cambia: la emergencia dice «Llama ahora» o «Escribe por WhatsApp»; el contrato, «Cotiza el plan para tu negocio», con un enlace para agendar la primera visita de diagnóstico. Un sistema simple de <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas online</a> resuelve ese segundo caso y permite programar la próxima visita sin depender de que alguien se acuerde de llamar.',
        ],
      },
      {
        type: 'prose',
        h2: 'La foto del compresor que instalaste vale más que cualquier banco de imágenes',
        paragraphs: [
          'Casi todas las webs del rubro usan el mismo split blanco en una pared perfecta, o una mano con guantes ajustando algo que ni siquiera es un equipo real. Eso hace que todas las empresas se vean iguales y no dice nada de lo que tú instalas.',
          'Una foto real de un condensador instalado la semana pasada, de un cuarto frío armado para un restaurante o de un chiller comercial que mantienes desde hace tres años prueba que ese trabajo existe y que sabes trabajar con equipos que no son un split doméstico. Al cliente de emergencia le importa poco en el momento; al que evalúa un contrato comercial, mucho. Basta el celular, buena luz y el hábito de tomar la foto antes de irte de cada instalación.',
        ],
      },
      {
        type: 'prose',
        h2: 'Dónde se pelea la emergencia: el mapa de Google, no solo el buscador',
        paragraphs: [
          'Cuando alguien busca «aire acondicionado cerca de mí» o «técnico de aire acondicionado urgente» desde el celular, Google suele mostrar primero el paquete de mapa —tres negocios con nombre, reseñas y botón de llamar— antes que los resultados orgánicos. Para la emergencia, la ficha de Google Business Profile pesa tanto o más que la web: sin horario real y reseñas recientes, ese cliente ni llega a tu sitio.',
          'El contrato juega otro juego, más lento: búsquedas como «contrato de mantenimiento de aire acondicionado Panamá» tienen menos volumen y mucha menos competencia bien hecha, y ahí ayuda el contenido propio. Nadie puede prometer el primer lugar, pero entre una ficha completa y una que nadie actualiza hace un año, la diferencia en llamadas de emergencia es medible. Más en nuestra guía de <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de una empresa de aire acondicionado en Panamá?',
        paragraphs: [
          'Si tu negocio vive casi solo de la emergencia y aún no vendes contratos como línea aparte, basta una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de alta conversión</a> enfocada en el botón de contacto, desde $550.',
          'Si ya manejas las dos rutas —contratos comerciales, varios tipos de servicio, zonas de cobertura, quizás un blog para búsquedas de mantenimiento—, conviene una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> de hasta 6 páginas, nuestra Web empresarial, desde $1,250, con una página para el contrato y otra para el cliente comercial. Para operaciones con integración a un sistema de despacho de técnicos o portal de clientes con contrato, el proyecto corporativo a medida arranca en $2,900.',
          'Aparte va la infraestructura —dominio, hosting y SSL—: $225 al año en compartido, $350 en cloud (el que recomendamos para la mayoría) o $550 en VPS dedicado si el volumen lo justifica, más mantenimiento desde $99 al mes. Si tu botón de emergencia genera el ingreso del día, conviene al menos el plan Prioritario ($169/mes), con respuesta el mismo día hábil, o el Empresarial ($319/mes) si no puedes permitirte una caída ni fuera de horario: un sitio caído en plena ola de calor es una llamada que se fue a la competencia. Todos los precios son en dólares y no incluyen el 7% de ITBMS.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web?',
        paragraphs: [
          'Cuando no tienes dónde poner a más clientes de emergencia. Un técnico independiente que ya trabaja al tope con sus contratos fijos necesita un sitio simple que confirme quién es, no una web que atraiga más llamadas urgentes.',
          'En ese escenario, optimizar la ruta de emergencia genera llamadas que no podrás contestar a tiempo, y las reseñas de esa fricción —«nunca contestó», «llegó tres días después»— pesan más que cualquier búsqueda ganada. Primero la capacidad de atender, después la visibilidad.',
          'Separar las dos rutas se justifica en el caso opuesto: cuando ya tienes equipo para responder emergencias sin ahogarte y quieres crecer el contrato de mantenimiento de forma deliberada.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para empresas de aire acondicionado',
        items: [
          { q: '¿De verdad hace falta separar la emergencia del contrato de mantenimiento en la web?', a: 'Si tu empresa vende las dos cosas, sí. Son compradores distintos, con urgencia y proceso de decisión distintos: uno decide en minutos por teléfono, el otro evalúa con calma y compara. Una sola página genérica que intenta convencer a los dos casi siempre se queda corta con ambos.' },
          { q: '¿Cuánto cuesta una web para una empresa de aire acondicionado en Panamá?', a: 'Depende de cuántas rutas necesitas cubrir. Si solo necesitas resolver la emergencia, una landing page desde $550 alcanza. Si ya manejas contratos comerciales y varios tipos de servicio, conviene un sitio de hasta 6 páginas desde $1,250. Los proyectos a medida, con integraciones propias, arrancan en $2,900. Todo en dólares, sin el 7% de ITBMS.' },
          { q: '¿Debo mostrar el precio de la visita de diagnóstico?', a: 'Al menos un rango, sí. Es la primera pregunta de alguien con el equipo dañado, y no responderla en la web solo empuja esa pregunta a una llamada que quizás nunca llega, o que llega directo a la competencia que sí lo dice.' },
          { q: '¿Qué fotos debo usar si no tengo presupuesto para un fotógrafo?', a: 'Las que ya puedes tomar tú mismo: el equipo que acabas de instalar, con el celular y buena luz, antes de irte del sitio. Una foto real de un trabajo tuyo, aunque no sea profesional, transmite más que cualquier banco de imágenes de un split genérico.' },
          { q: '¿El SEO sirve si la mayoría de mis clientes de emergencia me encuentran por Google Maps?', a: 'Sirve para la otra mitad del negocio. La ficha de Google Business Profile es lo que más pesa para la emergencia; el contenido y el SEO ayudan más para las búsquedas de contrato de mantenimiento, que tienen menos volumen pero también mucha menos competencia bien hecha. Nadie garantiza el primer lugar en ninguno de los dos casos.' },
          { q: '¿Cuándo no me conviene invertir todavía en esto?', a: 'Si ya trabajas al tope con tus contratos fijos y no tienes capacidad para atender más emergencias, atraer más llamadas urgentes no ayuda: genera trabajo que no vas a poder cumplir y reseñas negativas por eso. Ahí conviene resolver primero la capacidad, después la visibilidad.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-aire-acondicionado-refrigeracion-panama', label: 'Diseño web para aire acondicionado y refrigeración' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas online' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que separa la emergencia del contrato, sin perder a ninguno de los dos',
      wa: 'Hola, quiero una web para mi empresa de aire acondicionado o refrigeración en Panamá. ¿Me asesoran?',
    },
  },
];
