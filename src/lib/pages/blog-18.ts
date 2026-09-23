/* BLOG — Lote 18: guía long-form sobre diseño web para colegios e instituciones
   educativas en Panamá. PageData con parent { slug: 'blog' }; el listado /blog la
   recoge por fecha y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog18: PageData[] = [
  {
    slug: 'blog/diseno-web-para-educacion-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para colegios en Panamá: qué decide matricular',
    description: 'Qué debe tener la web de un colegio en Panamá: admisiones sin fricción, portal de padres honesto y fotos reales del campus, no de stock.',
    h1: 'Diseño web para colegios en Panamá: qué de verdad decide una matrícula',
    breadcrumb: 'Diseño web para educación',
    category: 'Diseño web',
    date: '2026-08-21',
    heroImage: {
      src: '/images/blog/diseno-web-para-educacion-panama.jpg',
      alt: 'Fachada moderna de un campus escolar con patio verde arbolado, arquitectura limpia y luz natural de día',
    },
    lead: [
      'Un padre o una madre escribe "colegio bilingüe en Panamá" o "instituto con bachillerato en San Francisco" a las nueve de la noche, después de acostar a los niños, con el teléfono en la mano y dos pestañas más abiertas de otros dos colegios. No está comparando logos ni la foto del edificio: está buscando la fecha de admisión, cuánto cuesta y si hay cupo antes de decidir a cuál escribirle primero por WhatsApp.',
      'La mayoría de las webs de colegios en Panamá no está lista para esa comparación: el proceso de admisión vive repartido en un PDF que hay que descargar, la mensualidad no aparece por ningún lado y las fotos son de un banco de imágenes que no se parece en nada al campus real. En esta guía repasamos cómo diseñar una admisión online que no le sume ansiedad a un padre nuevo, qué es de verdad un portal de padres —y qué todavía no lo es—, por qué las fotos reales del campus pesan más que cualquier eslogan, y cuándo, con honestidad, tu colegio no necesita invertir en captar más matrícula.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué la web de un colegio vende tranquilidad, no un edificio',
        paragraphs: [
          'Nadie matricula a un hijo por impulso, y pocas decisiones generan tanta ansiedad como esta: un padre está por confiarle a un desconocido ocho horas al día de su hijo, cinco días a la semana, durante varios años. Esa ansiedad se calma con información concreta —fechas, precios, requisitos, fotos reales—, no con un párrafo sobre la misión y visión del colegio.',
          'Y quien decide no es quien recibe el servicio: son los padres investigando durante semanas, comparando tres o cuatro colegios a la vez, mientras el estudiante casi no participa en la decisión salvo en bachillerato o en programas técnicos. Diseñar para esa dinámica —dos adultos ansiosos comparando de noche desde el celular— es distinto a diseñar para casi cualquier otro negocio.',
          'Nuestra <a href="/industrias/diseno-web-educacion-panama/">página de diseño web para colegios e institutos</a> entra en el detalle completo de qué necesita una institución educativa en Panamá. Aquí nos enfocamos en la pieza donde de verdad se gana o se pierde la decisión —el proceso de admisión— y en algunas honestidades sobre precio y alcance que casi ninguna agencia dice en voz alta.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo diseñar una admisión online que no espante a un padre nuevo',
        intro: 'El cuello de botella de la mayoría de los colegios no es la falta de familias interesadas: es que el proceso online agrega fricción justo donde el padre está más nervioso. Un proceso bien diseñado la quita, paso por paso.',
        items: [
          { h3: '1. Cupos y fechas visibles desde la portada', text: 'Si hay cupo para el nivel que buscan y cuándo cierra el proceso tiene que verse en los primeros segundos, no dentro de un PDF de admisiones que hay que descargar y abrir aparte.' },
          { h3: '2. Un formulario corto: el aspirante y el tutor, no el expediente completo', text: 'Nombre y edad del aspirante, nivel al que aplica, nombre y contacto del tutor. Es suficiente para reservar el interés; pedir notas, certificados o el expediente completo en ese primer paso hace que la familia lo cierre sin enviarlo.' },
          { h3: '3. Decir qué pasa después de enviarlo', text: 'Una pantalla o un correo que confirme "te contactamos en 24 a 48 horas para agendar la evaluación" quita la duda de si el formulario de verdad llegó, que es la ansiedad más común después de enviar cualquier solicitud online.' },
          { h3: '4. Requisitos y documentos en una sola página', text: 'Certificado de nacimiento, notas del año anterior, fotos, carné de vacunas: lo que pida tu colegio, completo y en un solo lugar, no repartido entre la web, un PDF y lo que responda alguien de admisiones por correo.' },
          { h3: '5. Un canal directo para la pregunta antes del formulario', text: 'Un WhatsApp visible para "¿tienen cupo en kínder para el próximo año?" evita que la familia abandone el sitio solo porque no se atreve a llenar un formulario completo sin saber si hay espacio.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Señales de que tu web de admisiones genera más dudas de las que resuelve',
        intro: 'Detalles que un padre nota en los primeros minutos de la comparación nocturna entre colegios.',
        items: [
          'Un padre nuevo no puede saber, en menos de un minuto, si hay cupo para el nivel de su hijo',
          'El formulario pide el expediente completo antes de la primera respuesta del colegio',
          'Nadie explica qué sigue después de enviar la solicitud, ni en cuánto tiempo responden',
          'La mensualidad no aparece ni siquiera como rango, y hay que llamar para saberla',
          'Las fotos son de un banco de imágenes y no se parecen al campus real',
          'El "portal de padres" se anuncia en la portada sin decir qué incluye de verdad',
          'La web obliga a hacer zoom en el celular, que es donde ocurre la comparación real',
        ],
      },
      {
        type: 'prose',
        h2: 'Portal de padres: qué es un portal simple y qué ya es un sistema académico',
        paragraphs: [
          '"Portal de padres" es una de las frases más elásticas del sector: para un colegio significa un calendario con las fechas del año y las circulares en PDF; para otro significa boletas, asistencia en tiempo real, mensajería con cada profesor y pago de mensualidad en línea. Son dos productos completamente distintos, y confundirlos a mitad de proyecto es la fuente más común de decepción entre lo que el colegio esperaba y lo que de verdad se cotizó.',
          'Lo que entra en una web corporativa normal —una <a href="/servicios/diseno-web-corporativo-panama/">Página PYME</a> de 8 a 12 páginas, desde $950 más ITBMS— es la versión informativa: calendario académico, circulares, fechas de pago y contacto por nivel, con panel para que el propio colegio lo actualice ciclo a ciclo. Para la mayoría de los colegios, honestamente, esto es suficiente.',
          'Lo que ya no entra ahí es un sistema con boletas de calificaciones, asistencia diaria, mensajería en tiempo real con el profesor o pago de mensualidad integrado a tu banco. Eso es software académico, no una página de contenido, y se dimensiona como <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">desarrollo a medida</a>, con un proyecto propio desde $2,900 más ITBMS, no como un módulo que se agrega gratis al sitio.',
          'Antes de aprobar cualquier presupuesto que diga "portal de padres", pide la lista exacta de qué incluye. La diferencia entre las dos versiones no es de diseño: es la diferencia entre un proyecto de $950 y uno que arranca en $2,900.',
        ],
      },
      {
        type: 'statement',
        text: 'Ningún portal de padres reemplaza el sistema académico del colegio. Lo que sí hace la web es',
        strong: 'dejar claro el proceso de admisión antes de que la familia tenga que preguntar por WhatsApp qué significa cada paso.',
      },
      {
        type: 'prose',
        h2: 'Las fotos reales del campus pesan más que cualquier folleto',
        paragraphs: [
          'Un colegio se elige casi con los ojos. La foto de un aula luminosa, la fachada de la entrada, la cancha, el laboratorio o la biblioteca —reales, de tu propio campus— dicen en un segundo lo que un párrafo entero sobre "instalaciones de primer nivel" no logra decir. Y cuando la familia por fin visita en persona, si lo que ve coincide con lo que vio en la web, esa coherencia ya es parte de la confianza que después la lleva a matricular.',
          'El problema es el atajo contrario: una foto de banco de imágenes con niños que nunca pisaron ese campus, un aula genérica que podría ser de cualquier país. Se nota casi de inmediato, y lo que comunica no es "colegio serio", sino "no quisieron mostrar el suyo".',
          'Esto no exige una producción cara: un celular con buena luz natural y quince minutos recorriendo el campus —entrada, aulas, áreas comunes, algún momento real de clase o actividad— rinde más que cualquier sesión de stock. Si vas a publicar fotos de alumnos reales, pide el consentimiento del padre o tutor específicamente para eso, no un párrafo genérico firmado hace años al momento de matricular.',
        ],
      },
      {
        type: 'prose',
        h2: 'Mantener la web viva ciclo a ciclo: fechas, circulares y quién las actualiza',
        paragraphs: [
          'Una web de colegio envejece rápido si nadie la toca entre agosto y agosto: las fechas de admisión quedan del año pasado, la circular de vacaciones sigue arriba en marzo, y eso le cuesta credibilidad justo frente a la familia que está comparando. La Página PYME incluye panel autoadministrable para que alguien del colegio —admisiones, dirección, quien sea— cambie esas fechas sin depender de la agencia ni de un ticket de soporte.',
          'El problema real casi nunca es la herramienta: es que pocas veces hay alguien con el tiempo o las ganas de entrar a un panel cada dos semanas. Ahí es donde tiene sentido un plan de <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento web</a>: el plan Básico, desde $59 al mes, ya incluye ajustes menores de contenido —justo lo que es cambiar una fecha o subir una circular— además de respaldos y seguridad. Si los cambios son más frecuentes, sobre todo en plena temporada de admisiones, el plan Prioritario ($99 al mes, con una hora de cambios incluida y respuesta el mismo día hábil) suele rendir mejor que perder una semana esperando a que alguien interno tenga tiempo.',
          'Ninguna opción es obligatoria: hay colegios donde la persona de admisiones sí actualiza el panel sin problema, y ahí no hace falta pagar mantenimiento por contenido. La decisión depende de cuánta gente tienes disponible, no de cuánto cueste el plan.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo tu colegio no necesita invertir todavía en captar más matrícula',
        paragraphs: [
          'No todo colegio necesita el mismo esfuerzo de captación, y decirlo con honestidad ahorra un gasto que no tiene sentido. Si tu colegio ya tiene lista de espera de varios años en la mayoría de los niveles, y el problema real no es conseguir solicitudes sino administrar las que ya llegan de sobra, invertir en un proceso de admisión online agresivo —con formulario optimizado, campañas y contenido pensado para captar tráfico frío— es resolver un problema que no tienes. En ese caso, lo que sí rinde es una web simple y honesta —una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 más ITBMS— que confirme quién eres, publique el proceso para quien de verdad quiere anotarse en la lista de espera, y no mucho más.',
          'Tampoco conviene rehacer nada a mitad de la temporada de admisiones, sin importar qué tan urgente parezca: mover el sitio, cambiar URLs o lanzar un rediseño justo cuando las familias están decidiendo es el peor momento posible para introducir errores o tiempo caído. Ese trabajo se hace en temporada baja, con el sitio nuevo probado y listo antes de que abra la siguiente ventana de admisión.',
          'Donde sí se justifica invertir en una <a href="/industrias/diseno-web-educacion-panama/">web completa para colegios e institutos</a> es cuando compites de verdad por matrícula: un colegio nuevo, uno que perdió alumnos frente a la competencia, uno que abrió una sede o un nivel nuevo, o uno cuya web actual todavía no refleja ni de lejos la seriedad del proyecto educativo real.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para colegios',
        items: [
          { q: '¿El precio de la web incluye mantenerla después de publicada?', a: 'No, son dos cosas distintas y así se cotizan en todo el sitio. La web (Página PYME desde $950, landing desde $550) es el proyecto de diseño y desarrollo. Después, la infraestructura para que viva en internet va desde $225 al año en hosting compartido, o $350 al año en el plan cloud recomendado, y el mantenimiento (actualizaciones, respaldos, ajustes de contenido) desde $59 al mes. Todos los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Qué tan corto debe ser el formulario de admisión online?', a: 'Lo mínimo para reservar el interés: nombre y edad del aspirante, nivel al que aplica, y nombre y contacto del tutor. Pedir notas, certificados o el expediente completo en ese primer paso es la razón más común por la que una familia abandona el formulario a la mitad.' },
          { q: '¿Cuál es la diferencia real entre un portal de padres y un sistema académico?', a: 'Un portal de padres, en la mayoría de los proyectos, es informativo: calendario, circulares, fechas de pago. Un sistema académico —boletas, asistencia en tiempo real, mensajería con el profesor, pago de mensualidad en línea— es software distinto, se cotiza como desarrollo a medida y arranca en un rango de precio muy distinto al de una web corporativa. Antes de aprobar un presupuesto que diga "portal de padres", conviene pedir la lista exacta de qué incluye.' },
          { q: '¿Podemos usar fotos de banco de imágenes si no tenemos fotógrafo?', a: 'Mejor evitarlo. Una familia que visita el colegio en persona y no reconoce nada de lo que vio en la web pierde confianza de inmediato. Un celular con buena luz natural, recorriendo aulas y áreas comunes reales, rinde más que cualquier foto de stock.' },
          { q: 'Mi colegio ya tiene lista de espera de años, ¿igual necesito invertir en la web?', a: 'Probablemente no en captación agresiva. Si el problema es administrar el exceso de solicitudes y no conseguirlas, un proceso de admisión optimizado para convertir tráfico frío resuelve algo que no te falta. Ahí rinde más una presencia simple y honesta que confirme el proceso para quien de verdad quiere anotarse en la lista de espera.' },
          { q: '¿El SEO garantiza que aparezcamos primero cuando alguien busque "colegio" en nuestra zona?', a: 'No, y cualquiera que lo prometa está exagerando. Lo que sí ayuda de verdad es tener contenido real y específico —proceso de admisión, niveles, metodología, vida escolar— en vez de una sola página genérica. Es una carrera de fondo, no un interruptor que se enciende al publicar el sitio.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-educacion-panama', label: 'Diseño web para colegios e institutos' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida (Vue / React)' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que resuelve la admisión antes de que la familia llame',
      wa: 'Hola, quiero una web para mi colegio o instituto en Panamá. ¿Me asesoran?',
    },
  },
];
