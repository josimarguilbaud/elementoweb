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
      alt: 'Manos de un técnico instalando una unidad de aire acondicionado en la pared, con herramientas y equipo profesional de HVAC',
    },
    lead: [
      'Son las dos de la tarde en Panamá y a alguien se le dañó el aire acondicionado en plena ola de calor. No va a leer sobre planes de mantenimiento ni comparar marcas: quiere saber si alguien puede ir hoy y cuánto cuesta la visita, y lo decide en el tiempo que toma abrir dos o tres páginas desde el teléfono. Esa misma empresa, el mismo mes, puede estar cerrando un contrato anual con la administración de un edificio o una cadena de restaurantes: ahí no hay urgencia, hay presupuesto, comparación y una decisión que se toma con calma.',
      'Son dos negocios distintos dentro de la misma empresa, con compradores distintos y hasta un tono de venta distinto — y casi ninguna web de aire acondicionado en Panamá los separa. Todo vive apretado en una sola página genérica que no resuelve bien ninguno de los dos casos. En esta guía repasamos cómo construir las dos rutas por separado —la de la emergencia, sin fricción, y la del contrato de mantenimiento, con su propia explicación—, qué fotos generan confianza real, cuánto cuesta cada opción en Panamá, y cuándo, con honestidad, todavía no conviene invertir en esto.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Dos negocios bajo el mismo techo, y casi ninguna web lo nota',
        paragraphs: [
          'La mayoría de las webs de aire acondicionado y refrigeración en Panamá dicen alguna variación de "Instalación, mantenimiento y reparación de aires acondicionados. Contáctanos" arriba de una foto de un split nuevo y reluciente. Es un mensaje que no le habla bien a nadie: ni al que tiene el equipo dañado ahora mismo, ni al que está evaluando pagar un contrato todo el año.',
          'El cliente de emergencia entra a esa página buscando una sola cosa: el teléfono o el WhatsApp. Si tiene que leer sobre los beneficios del mantenimiento preventivo antes de encontrarlo, ya perdió el tiempo suficiente para abrir la siguiente pestaña y llamar a otro. El cliente del contrato anual —un gerente de edificio, un dueño de restaurante, el encargado de una clínica— evalúa algo completamente distinto: si esta empresa tiene la capacidad técnica y la seriedad para sostener su equipo todo el año. Una página que grita "emergencia" en el primer scroll no transmite eso: hace parecer que la empresa vive del apuro, no de una operación sostenida.',
          'Mezclar los dos mensajes en una sola narrativa no simplifica nada: diluye ambos. La solución no es elegir uno de los dos —los dos son negocios reales y casi siempre conviven en la misma empresa, como explicamos en nuestra <a href="/industrias/diseno-web-aire-acondicionado-refrigeracion-panama/">página de diseño web para aire acondicionado y refrigeración</a>—, sino tratarlos como lo que son: dos rutas separadas dentro del mismo sitio, cada una con su propio diseño, su propio ritmo y su propio llamado a la acción.',
        ],
      },
      {
        type: 'checklist',
        h2: 'La ruta de la emergencia: cero fricción desde el primer segundo',
        intro: 'Si alguien llega a tu web con el aire dañado, cada clic de más es un cliente que se va a la siguiente pestaña.',
        items: [
          'Botón de WhatsApp y teléfono fijos arriba, visibles sin hacer scroll, no enterrados en un menú de "Contacto"',
          'Un mensaje pre-armado en el botón de WhatsApp ("Hola, mi aire no enfría, necesito una visita hoy") para que nadie tenga que escribir desde cero',
          'El horario de emergencias dicho sin ambigüedad: si atiendes 24/7 dilo, y si es hasta cierta hora, dilo también',
          'El precio o rango de la visita de diagnóstico visible, no una sorpresa que se entera por teléfono',
          'Cero formularios largos: nadie con el aire dañado va a llenar ocho campos antes de poder escribirte',
          'Zonas de cobertura claras, para que alguien del interior no pierda cinco minutos escribiendo antes de descubrir que no llegas hasta allá',
        ],
      },
      {
        type: 'prose',
        h2: 'El contrato de mantenimiento no se vende gritando: se explica aparte',
        paragraphs: [
          'El contrato de mantenimiento anual es, para la mayoría de estas empresas, el negocio que de verdad sostiene el año: más estable que la reparación suelta, y con un cliente que además falla menos. Pero es una decisión que nadie toma en el mismo estado de urgencia con el que busca una reparación de emergencia, y por eso necesita su propio espacio en la web, no un párrafo al final de la página de servicios.',
          'Esa sección propia tiene que explicar lo que una llamada de emergencia nunca deja explicar con calma: qué incluye cada visita (limpieza de filtros y serpentines, revisión de gas refrigerante, chequeo eléctrico), cada cuánto se programa —normalmente dos o tres veces al año— y qué cuesta el plan frente al costo de una reparación mayor que el mantenimiento habría evitado. Es un argumento racional, no urgente, y necesita espacio para respirar en vez de competir por atención con un botón de emergencia parpadeando al lado.',
          'El llamado a la acción también tiene que ser distinto. El de la emergencia dice algo como "Llama ahora" o "Escribe por WhatsApp"; el del contrato puede ser más pausado, como "Cotiza el plan para tu negocio", con un enlace para agendar la primera visita de diagnóstico sin compromiso. Un sistema simple de <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reservas y citas online</a> resuelve bien ese segundo caso, sobre todo para programar la próxima visita de mantenimiento sin depender de que alguien se acuerde de llamar.',
        ],
      },
      {
        type: 'prose',
        h2: 'La foto del compresor que instalaste vale más que cualquier banco de imágenes',
        paragraphs: [
          'Casi todas las webs de aire acondicionado en Panamá usan el mismo tipo de foto de banco de imágenes: un split blanco reluciente en una pared perfecta, o una mano con guantes ajustando algo que ni siquiera es un equipo real. El problema no es que se vea mal — es que hace que todas las empresas del rubro se vean exactamente igual, y no dice nada sobre lo que tú realmente instalas.',
          'Una foto real de un condensador que instalaste la semana pasada, de un cuarto frío que armaste para un restaurante, o de un chiller comercial que mantienes desde hace tres años, comunica algo que ninguna foto de stock puede fingir: que ese trabajo existe, que lo hiciste tú y —para el cliente comercial que evalúa capacidad técnica— que sabes trabajar con equipos que no son un split doméstico. No hace falta una sesión de fotos profesional: basta el celular, buena luz, y el hábito de tomar la foto antes de irte de cada instalación.',
          'Esto pesa distinto para cada una de las dos rutas. Al cliente de emergencia una foto real le importa poco en el momento —está mirando el teléfono, no la galería—, pero al que evalúa un contrato comercial le importa mucho: es la prueba de que puedes con equipos de su escala, no solo con el aire de una sala de estar.',
        ],
      },
      {
        type: 'statement',
        text: 'Una web que grita emergencia en cada página no vende contratos anuales. La que sí los vende separa',
        strong: 'la urgencia de hoy del contrato del año, en dos rutas distintas, no en un mensaje a medias.',
      },
      {
        type: 'prose',
        h2: 'Dónde se pelea la emergencia: el mapa de Google, no solo el buscador',
        paragraphs: [
          'Cuando alguien busca "aire acondicionado cerca de mí" o "técnico de aire acondicionado urgente" con el equipo ya dañado, desde el celular, Google casi siempre muestra primero el paquete de mapa —tres negocios con nombre, reseñas y botón de llamar— antes que los resultados orgánicos de siempre. Para el negocio de la emergencia, esa ficha de Google Business Profile pesa tanto o más que la propia web: si no está completa, con horario real y reseñas recientes, ese cliente ni siquiera llega a ver tu sitio.',
          'El contrato de mantenimiento juega otro juego, más lento: búsquedas como "contrato de mantenimiento de aire acondicionado Panamá" o "mantenimiento preventivo de aire acondicionado comercial" tienen menos volumen pero también mucha menos competencia bien hecha, y ahí sí ayuda tener contenido propio, no solo una ficha de mapa. Nadie te puede prometer el primer lugar —quien lo haga está exagerando—, pero entre una ficha completa y consistente y una que nadie actualiza hace un año, la diferencia en cuántas llamadas de emergencia recibes es real y medible. Entramos en el detalle en nuestra guía de <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta construir las dos rutas',
        paragraphs: [
          'Si tu negocio vive casi exclusivamente de la emergencia y todavía no vendes contratos de mantenimiento como línea aparte, no necesitas un sitio grande: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de alta conversión</a> enfocada en el botón de contacto, desde $550, resuelve bien ese caso. Es una sola página, pero construida para que nadie tarde en encontrar el teléfono.',
          'Si ya manejas las dos rutas en serio —contratos comerciales, distintos tipos de servicio, zonas de cobertura, quizás un blog para las búsquedas de mantenimiento— conviene una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> de 8 a 12 páginas, nuestra Página PYME, desde $950: con una página dedicada al contrato de mantenimiento, otra para el cliente comercial, y espacio real para separar los dos mensajes en vez de apretarlos en la página de inicio. Para operaciones más grandes, con integraciones a un sistema de despacho de técnicos o un portal para clientes con contrato, el proyecto corporativo a medida arranca en $2,900.',
          'A eso se suma la infraestructura —dominio, hosting y SSL— desde $225 al año en el plan compartido, $350 al año en el plan cloud (el que recomendamos para la mayoría) o $550 al año en VPS dedicado si el volumen del negocio lo justifica, más el mantenimiento del sitio mismo desde $59 al mes. Para una empresa cuyo botón de emergencia genera directamente el ingreso del día, vale la pena al menos el plan Prioritario de mantenimiento ($99/mes), con respuesta el mismo día hábil, o el Empresarial ($189/mes) si la operación no se puede dar el lujo de una caída ni fuera de horario: un sitio caído en plena ola de calor no es un detalle técnico, es una llamada que se fue a la competencia. Todos los precios son en dólares y no incluyen el 7% de ITBMS.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene abrir la llave todavía',
        paragraphs: [
          'Nada de esto tiene sentido si no tienes dónde poner a más clientes de emergencia. Un técnico independiente que ya trabaja al tope solo con sus contratos de mantenimiento fijos, sin capacidad de tomar trabajos nuevos, no necesita una web que atraiga más llamadas urgentes: necesita justo lo contrario, un sitio simple que confirme quién es para sus clientes actuales y punto.',
          'Invertir en una ruta de emergencia optimizada en ese escenario es contraproducente: vas a generar llamadas que no vas a poder contestar a tiempo, o vas a tener que rechazar trabajo, y las reseñas de esa fricción —"nunca contestó", "llegó tres días después"— terminan pesando más que cualquier búsqueda que sí llegó a encontrarte. Primero la capacidad de atender, después la visibilidad para que te encuentren más; en el orden contrario, la web termina jugando en contra.',
          'Donde sí se justifica separar las dos rutas es en el punto exactamente opuesto: cuando ya tienes equipo para responder emergencias sin ahogarte, y el contrato de mantenimiento es la parte del negocio que quieres crecer de forma deliberada, en vez de dejarla a que alguien se acuerde de llamar.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para empresas de aire acondicionado',
        items: [
          { q: '¿De verdad hace falta separar la emergencia del contrato de mantenimiento en la web?', a: 'Si tu empresa vende las dos cosas, sí. Son compradores distintos, con urgencia y proceso de decisión distintos: uno decide en minutos por teléfono, el otro evalúa con calma y compara. Una sola página genérica que intenta convencer a los dos casi siempre se queda corta con ambos.' },
          { q: '¿Cuánto cuesta una web para una empresa de aire acondicionado en Panamá?', a: 'Depende de cuántas rutas necesitas cubrir. Si solo necesitas resolver la emergencia, una landing page desde $550 alcanza. Si ya manejas contratos comerciales y varios tipos de servicio, conviene un sitio de 8 a 12 páginas desde $950. Los proyectos a medida, con integraciones propias, arrancan en $2,900. Todo en dólares, sin el 7% de ITBMS.' },
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
