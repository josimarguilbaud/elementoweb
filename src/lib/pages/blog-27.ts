/* BLOG — Lote 27: guía long-form sobre diseño web para veterinarias en Panamá.
   PageData con parent { slug: 'blog' }; el listado /blog la recoge por fecha
   y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog27: PageData[] = [
  {
    slug: 'blog/diseno-web-para-veterinarias-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para veterinarias en Panamá: citas y confianza',
    description: 'Qué necesita la web de una veterinaria en Panamá: cita en línea central, servicios claros y fotos que calman en vez de asustar.',
    h1: 'Diseño web para veterinarias en Panamá: qué de verdad calma a un dueño de mascota',
    breadcrumb: 'Diseño web para veterinarias',
    category: 'Diseño web',
    date: '2026-08-30',
    heroImage: {
      src: '/images/blog/diseno-web-para-veterinarias-panama.jpg',
      alt: 'Sala de espera de una clínica veterinaria moderna, luminosa y acogedora, con asientos cómodos y colores pasteles suaves',
    },
    lead: [
      'Son las nueve de la noche y el perro no para de temblar. El dueño no busca "veterinaria" a secas: busca "veterinaria de urgencia cerca de mí" o "veterinaria 24 horas Panamá", con el celular en una mano y la mascota en la otra. Abre dos o tres resultados y en menos de un minuto decide a cuál llamar o escribirle. No es la misma calma con la que alguien compara dos contadores o dos abogados: aquí hay angustia real, y la web tiene que responderla en segundos, no en tres clics.',
      'La mayoría de las webs de veterinarias en Panamá todavía funcionan como un directorio: nombre, dirección, teléfono, una foto de un cachorro de banco de imágenes. En esta guía repasamos por qué la cita en línea es la pieza central de esa web —no un extra de última hora—, qué servicios hay que explicar por separado porque cada uno resuelve una duda distinta, cómo calmar la ansiedad del dueño con información clara y fotos reales, cuánto cuesta según el tamaño de tu clínica, y cuándo, con honestidad, todavía no conviene invertir en una web nueva.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La cita en línea es la pieza central, no un extra de último momento',
        paragraphs: [
          'En salud humana ya funciona así: el paciente agenda su chequeo de rutina desde el celular sin hablar con nadie. En veterinaria pasa lo mismo, pero con una vuelta de tuerca: el dueño de una mascota decide con más urgencia y más ansiedad que alguien que agenda una cita médica para sí mismo. Cuando su perro no come hace dos días o su gata no para de rascarse, no quiere llenar un formulario largo ni esperar a que alguien conteste el teléfono en horario de oficina: quiere ver un horario disponible, tocar un botón y saber que ya quedó agendado.',
          'Eso convierte la reserva en línea de un "bonus" a la función que más pesa en toda la web. No sirve enterrada bajo un menú de "Contacto": tiene que estar visible desde que se abre el sitio, con la disponibilidad real de la clínica y no un formulario que alguien confirma por teléfono al día siguiente —para entonces, la urgencia real ya se resolvió en otro lado. Nuestra <a href="/industrias/diseno-web-veterinarias-panama/">página de diseño web para veterinarias</a> entra en el detalle completo de cómo estructuramos esa doble necesidad, la urgencia y el cliente de siempre, para una clínica en Panamá.',
          'Y la cita en línea no reemplaza el WhatsApp: lo complementa. El dueño que ya conoce tu clínica agenda solo, sin llamar; el que tiene una urgencia real prefiere escribir porque necesita que alguien le confirme "sí, tráelo ya" en el momento. La web tiene que dejar los dos caminos igual de visibles, con un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> conectado a la disponibilidad real de tu equipo.',
        ],
      },
      {
        type: 'cards',
        h2: 'Cuatro servicios, cuatro dudas distintas',
        intro: 'Meter todo bajo un único "Servicios" obliga al dueño a adivinar. Cada uno de estos resuelve una pregunta que no tiene nada que ver con las otras tres.',
        items: [
          { h3: 'Consulta general', text: 'La puerta de entrada de casi todo dueño nuevo. La duda es simple: "¿cuánto cuesta que le revisen esto?". Publicar el precio de la consulta, o un "desde", filtra al que solo preguntaba y deja pasar al que sí va a agendar.' },
          { h3: 'Vacunación', text: 'La busca sobre todo el dueño de un cachorro o gatito reciente, y vuelve a buscarla varias veces en los primeros meses. Su duda es el calendario: qué vacuna toca y a qué edad. Publicar el esquema completo responde la pregunta antes de que la haga por WhatsApp.' },
          { h3: 'Cirugía', text: 'Aquí la ansiedad sube un nivel: esterilización, una fractura, un tumor. El dueño quiere saber si es grave, cuánto se queda internada la mascota y qué cuidados sigue en casa. Nada de eso se resuelve con una viñeta de tres palabras.' },
          { h3: 'Emergencias 24 horas', text: 'La pregunta más urgente de todas: "¿está abierto ahora mismo?". Si atiendes urgencias, ese horario va arriba de todo, sin scroll. Si no las atiendes, decirlo con la misma claridad evita que alguien llegue de madrugada a una puerta cerrada.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo debe verse la reserva en línea, paso a paso',
        intro: 'No hace falta una app compleja: hace falta que el dueño llegue del clic a la cita confirmada sin llamadas de por medio.',
        items: [
          { h3: '1. Elegir el servicio', text: 'Consulta, vacunación, control, peluquería o baño: la primera elección filtra el resto del flujo y le dice a tu equipo qué preparar antes de que llegue la mascota.' },
          { h3: '2. Ver horarios reales', text: 'Nada de "te confirmamos por teléfono": el dueño necesita ver la disponibilidad real de la clínica y elegir ahí mismo, igual que reservaría cualquier otra cita desde el celular.' },
          { h3: '3. Datos básicos de la mascota', text: 'Nombre, especie y una línea sobre el motivo de la visita. Suficiente para que el veterinario llegue preparado, sin pedir un historial completo que nadie llena bien desde un formulario web.' },
          { h3: '4. Confirmación inmediata', text: 'Un mensaje de confirmación, por correo o WhatsApp, que quite la duda de "¿quedó agendado de verdad?". El mismo canal sirve después para el recordatorio de la próxima vacuna o control.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Que te encuentren cuando el dueño no puede esperar',
        paragraphs: [
          'Nadie busca "veterinaria" a secas cuando tiene un problema encima: busca "veterinaria cerca de mí", con el celular en la mano y muchas veces desde el carro. Esa búsqueda la responde Google Maps antes que tu propia web, así que si tu ficha de Google Business Profile tiene el horario mal, le falta el teléfono o no dice si atienden los domingos, pierdes al dueño antes de que llegue a hacer clic en tu sitio.',
          'El <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> en este rubro no es una táctica de crecimiento a largo plazo: es la diferencia entre aparecer o no aparecer en el momento exacto en que alguien te necesita. Horario correcto, dirección que abra bien en el mapa, fotos reales de la fachada para que el dueño reconozca dónde estacionar, y reseñas que confirmen que sí atienden rápido cuando es urgente. <strong>Ninguna de esas cuatro cosas cuesta una campaña de pauta: cuesta mantenerlas al día.</strong>',
          'Y conviene revisarlo con la misma frecuencia con la que cambia tu horario real: si un feriado cierras temprano o si se suma un veterinario nuevo al equipo, esa ficha tiene que reflejarlo el mismo día, no el mes que viene.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que calma la ansiedad de un dueño asustado',
        intro: 'Nadie entrega a su mascota tranquilo si la web no le quitó antes las dudas obvias.',
        items: [
          'Fotos reales de la sala de espera y del consultorio, no una foto de banco de un perro que nunca pisó tu clínica',
          'Nombre, cara y años de experiencia de cada veterinario, no un "nuestro equipo" sin rostro',
          'Horario y si atienden urgencias, visible sin hacer scroll',
          'Un WhatsApp que conteste rápido, no un formulario de contacto de tres pantallas',
          'Qué esperar en la primera visita, explicado en dos o tres líneas, no un instructivo clínico',
          'Fotos que muestren cuidado y calidez, nunca el instrumental quirúrgico ni nada que luzca a sala de operaciones',
          'Reseñas o testimonios que hablen del trato, no solo una calificación de estrellas sin contexto',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie elige veterinaria comparando precios de consulta en una hoja de cálculo. La elige',
        strong: 'porque algo en la web le dijo que ahí van a cuidar a su mascota con el mismo cariño con que la cuida en casa.',
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene invertir todavía en una web nueva',
        paragraphs: [
          'No toda veterinaria necesita una web nueva ahora, y decirlo con honestidad evita un gasto que no vas a aprovechar. Si eres el único veterinario de tu clínica y ya tienes la agenda llena semanas para adelante, invertir en una web —o peor, en SEO para atraer más tráfico— es empujar más demanda hacia una puerta que ya no tiene espacio. El resultado no es más ingresos: son dueños frustrados que escriben y no reciben respuesta, reseñas negativas por "nunca contestan" y un veterinario más quemado que antes.',
          '<strong>En ese caso, lo que resuelve el problema no es diseño: es capacidad.</strong> Sumar un segundo veterinario, ajustar los horarios de consulta o cerrar temporalmente la puerta a clientes nuevos mientras se estabiliza la agenda rinde más que cualquier rediseño. Una vez que la clínica tenga margen real para atender más mascotas, ahí sí una web que muestre esa capacidad, y la cita en línea que la ordene, empieza a valer lo que cuesta.',
          'Mientras tanto, alcanza con lo mínimo: horario, ubicación, un WhatsApp de la clínica (no el celular personal de quien atiende) y claridad sobre si se están tomando pacientes nuevos. Eso ya es honesto con el dueño que escribe, y no le promete una atención que hoy no puedes dar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta la web de una veterinaria en Panamá',
        paragraphs: [
          'El precio depende de cuántos servicios vas a mostrar y de si necesitas vender algo más que consultas. Una clínica pequeña que solo necesita presencia clara y captar la urgencia con un WhatsApp directo puede resolverlo con una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550. Si vas a mostrar varios servicios por separado —consulta, vacunación, cirugía, peluquería— con cita en línea y blog de cuidado, la opción recomendada es una <a href="/servicios/diseno-web-corporativo-panama/">Página PYME</a> desde $950, con 8 a 12 páginas internas y panel autoadministrable.',
          'Si además vendes alimento, medicamentos o accesorios, sumar una tienda en línea completa —catálogo, carrito, Yappy y pasarelas locales— parte de $1,500. Y si eres una red de varias sedes o un hospital veterinario con integraciones propias, hablamos de un proyecto corporativo a medida desde $2,900. Todos los precios son en dólares y no incluyen el 7% de ITBMS, que se aplica según corresponda.',
          'La web tampoco termina en la entrega. El hosting —dominio, servidor y certificado SSL— va desde $225 al año en un plan compartido, $350 al año en cloud (la opción recomendada para la mayoría) o $550 al año en un VPS dedicado si el tráfico lo justifica. Y el mantenimiento —actualizaciones, respaldos y monitoreo para que el sitio no se caiga ni envejezca— tiene tres niveles: $59, $99 o $189 al mes, según cuánta prioridad de respuesta y cuántos cambios necesites cada mes.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para veterinarias',
        items: [
          { q: '¿Cuánto cuesta la web de una veterinaria en Panamá?', a: 'Depende de cuántos servicios vas a mostrar. Una landing page enfocada en captar la urgencia parte de $550, y una Página PYME con servicios por separado, blog y cita en línea —la opción recomendada para la mayoría de las clínicas— parte de $950. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Puedo agendar citas en línea aunque mi clínica sea pequeña?', a: 'Sí, y suele ser justo la funcionalidad que más alivio le da a una clínica chica: reduce las llamadas repetidas a recepción y deja la línea libre para las urgencias reales. Se conecta a la disponibilidad real de tu equipo con un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a>.' },
          { q: '¿De verdad hace falta una página por cada servicio?', a: 'Para los que generan consultas por separado, sí. "Esterilización de gata", "vacunas cachorro" y "peluquería canina" las busca gente distinta con preguntas distintas, y una sola lista de viñetas no le responde bien a ninguno.' },
          { q: '¿Qué fotos debo evitar en la web?', a: 'El instrumental quirúrgico, camillas o cualquier imagen que luzca a sala de operaciones. No transmiten profesionalismo: transmiten miedo. Mejor la sala de espera, el equipo con sus mascotas o el consultorio con buena luz.' },
          { q: '¿Debo publicar si atiendo o no urgencias 24 horas?', a: 'Sí, en ambos casos, y con la misma claridad. El dueño que llega de madrugada a una web que no lo aclara se lleva una mala experiencia; el que lo lee a tiempo y va a otro lado, igual puede volver el lunes para la consulta de rutina.' },
          { q: '¿Cómo me encuentra alguien que busca "veterinaria cerca de mí"?', a: 'Con SEO local. Cuidamos tu <a href="/crecimiento/seo-local-google-maps-panama/">ficha de Google Maps</a> —horario, dirección, fotos y reseñas— para que aparezcas cuando alguien busca por urgencia o cercanía en tu zona.' },
          { q: '¿Cuándo no me conviene invertir en una web nueva?', a: 'Si eres el único veterinario y ya tienes la agenda llena por semanas, atraer más tráfico solo genera dueños frustrados que no consigues atender. Ahí conviene resolver primero la capacidad —otro veterinario, otros horarios— antes de invertir en visibilidad.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-veterinarias-panama', label: 'Diseño web para veterinarias' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas y citas online' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO local y Google Maps' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Diseño web para clínicas y salud' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que agenda la cita y calma al dueño antes de que pise la clínica',
      wa: 'Hola, quiero una web para mi veterinaria en Panamá. ¿Me asesoran?',
    },
  },
];
