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
      alt: 'Huella de mascota, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para veterinarias en Panamá debe calmar a un dueño angustiado en segundos: cita en línea visible desde la portada con horarios reales, WhatsApp para la urgencia, horario y si atienden emergencias sin hacer scroll, una sección por servicio y fotos reales de la clínica y del equipo. Así lo construimos en Elemento Web, en Ciudad de Panamá.',
      'Son las nueve de la noche, el perro no para de temblar y el dueño busca "veterinaria de urgencia cerca de mí". Abre dos o tres resultados y en menos de un minuto decide a cuál llamar. Esta guía explica cada pieza, cuánto cuesta y cuándo todavía no conviene una web nueva.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué la cita en línea es lo más importante en la web de una veterinaria?',
        paragraphs: [
          'Porque el dueño de una mascota decide con más urgencia que alguien que agenda su propio chequeo. Si su perro no come hace dos días o su gata no para de rascarse, no quiere un formulario largo ni esperar a que contesten en horario de oficina: quiere ver un horario libre, tocar un botón y saber que quedó agendado. Por eso la reserva va visible desde que se abre el sitio, con disponibilidad real, no enterrada en "Contacto" ni confirmada por teléfono al día siguiente.',
          'No reemplaza el WhatsApp: el cliente de siempre agenda solo y el que tiene una urgencia escribe para que alguien le diga "tráelo ya". La web deja los dos caminos igual de visibles, con un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> conectado a la disponibilidad de tu equipo. El detalle está en nuestra <a href="/industrias/diseno-web-veterinarias-panama/">página de diseño web para veterinarias</a>.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué servicios explicar por separado en la web de una veterinaria?',
        intro: 'Un único "Servicios" obliga al dueño a adivinar. Cada uno de estos responde una pregunta distinta.',
        items: [
          { h3: 'Consulta general', text: 'La puerta de entrada de casi todo dueño nuevo, con una duda simple: "¿cuánto cuesta que le revisen esto?". Publicar el precio de la consulta, o un "desde", filtra al que solo preguntaba.' },
          { h3: 'Vacunación', text: 'La busca el dueño de un cachorro o gatito reciente, varias veces en los primeros meses. Su duda es qué vacuna toca y a qué edad: publicar el esquema completo la responde antes del WhatsApp.' },
          { h3: 'Cirugía', text: 'Esterilización, una fractura, un tumor. El dueño quiere saber si es grave, cuánto se queda internada la mascota y qué cuidados sigue en casa. Eso no cabe en una viñeta de tres palabras.' },
          { h3: 'Emergencias 24 horas', text: '"¿Está abierto ahora mismo?". Si atiendes urgencias, ese horario va arriba de todo. Si no, decirlo con la misma claridad evita que alguien llegue de madrugada a una puerta cerrada.' },
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo debe funcionar la reserva en línea de una veterinaria?',
        intro: 'No hace falta una app compleja: del clic a la cita confirmada sin llamadas de por medio.',
        items: [
          { h3: '1. Elegir el servicio', text: 'Consulta, vacunación, control, peluquería o baño: la elección filtra el resto del flujo y le dice a tu equipo qué preparar.' },
          { h3: '2. Ver horarios reales', text: 'Nada de "te confirmamos por teléfono": el dueño ve la disponibilidad real de la clínica y elige ahí mismo.' },
          { h3: '3. Datos básicos de la mascota', text: 'Nombre, especie y una línea sobre el motivo de la visita, sin pedir un historial completo que nadie llena bien desde un formulario.' },
          { h3: '4. Confirmación inmediata', text: 'Un mensaje por correo o WhatsApp que quite la duda de "¿quedó agendado?". El mismo canal sirve después para el recordatorio de la próxima vacuna o control.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo aparecer cuando buscan "veterinaria cerca de mí"?',
        paragraphs: [
          'Con la ficha de Google Business Profile al día, porque esa búsqueda la responde Google Maps antes que tu web. Si la ficha tiene el horario mal, le falta el teléfono o no dice si atienden los domingos, pierdes al dueño antes de que haga clic en tu sitio.',
          'En este rubro el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> es la diferencia entre aparecer o no en el momento en que alguien te necesita: horario correcto, dirección que abra bien en el mapa, fotos reales de la fachada para reconocer dónde estacionar y reseñas que confirmen que atienden rápido. <strong>Ninguna de esas cuatro cosas cuesta una campaña de pauta: cuesta mantenerlas al día</strong>, el mismo día que cierras temprano por un feriado o se suma un veterinario nuevo.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe mostrar la web para calmar a un dueño asustado?',
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
        h2: '¿Cuándo no conviene a una veterinaria invertir en una web nueva?',
        paragraphs: [
          'Si eres el único veterinario y tu agenda ya está llena semanas hacia adelante, una web nueva o SEO empujan más demanda hacia una puerta sin espacio: dueños que escriben y no reciben respuesta, reseñas de "nunca contestan" y un veterinario más quemado. <strong>Ahí lo que resuelve no es diseño: es capacidad.</strong> Sumar un segundo veterinario, ajustar horarios o pausar clientes nuevos rinde más que cualquier rediseño.',
          'Mientras tanto basta lo mínimo: horario, ubicación, un WhatsApp de la clínica (no el celular personal de quien atiende) y claridad sobre si se toman pacientes nuevos. Cuando haya margen para atender más mascotas, la web y la cita en línea empiezan a valer lo que cuestan.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de una veterinaria en Panamá?',
        paragraphs: [
          'Una clínica pequeña que solo necesita presencia clara y captar la urgencia con WhatsApp puede resolverlo con una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550. Con varios servicios por separado —consulta, vacunación, cirugía, peluquería—, cita en línea y blog de cuidado, la opción recomendada es una <a href="/servicios/diseno-web-corporativo-panama/">Web empresarial</a> desde $1,250, con hasta 6 páginas y panel autoadministrable. Si además vendes alimento, medicamentos o accesorios, una tienda en línea con catálogo, carrito, Yappy y pasarelas locales parte de $1,950; una red de sedes o un hospital veterinario con integraciones propias es un proyecto corporativo a medida desde $2,900.',
          'El hosting —dominio, servidor y SSL— va desde $225 al año en plan compartido, $350 al año en cloud (el recomendado para la mayoría) o $550 al año en VPS dedicado. El mantenimiento —actualizaciones, respaldos y monitoreo— tiene tres niveles: $99, $169 o $319 al mes, según la prioridad de respuesta y los cambios que necesites. Precios en dólares, sin el 7% de ITBMS.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para veterinarias',
        items: [
          { q: '¿Cuánto cuesta la web de una veterinaria en Panamá?', a: 'Depende de cuántos servicios vas a mostrar. Una landing page enfocada en captar la urgencia parte de $550, y una Web empresarial con servicios por separado, blog y cita en línea —la opción recomendada para la mayoría de las clínicas— parte de $1,250. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
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
