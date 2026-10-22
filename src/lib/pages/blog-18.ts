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
      'El diseño web para colegios en Panamá decide matrículas cuando responde rápido lo que el padre compara de noche desde el celular: si hay cupo, cuándo cierra la admisión, cuánto cuesta la mensualidad y cómo es el campus real. En Elemento Web (Ciudad de Panamá) lo resolvemos con admisión online corta, fotos propias y un portal de padres bien definido.',
      'Esta guía repasa cómo diseñar esa admisión, qué es de verdad un portal de padres, por qué pesan las fotos reales y cuándo, con honestidad, tu colegio no necesita invertir en captar más matrícula.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Diseño web para colegios: ¿qué busca un padre antes de escribir?',
        paragraphs: [
          'Un padre busca "colegio bilingüe en Panamá" o "instituto con bachillerato en San Francisco" a las nueve de la noche, con dos pestañas de otros colegios abiertas. No compara logos: busca la fecha de admisión, el costo y si hay cupo antes de decidir a cuál escribirle por WhatsApp. Esa ansiedad se calma con fechas, precios, requisitos y fotos reales, no con un párrafo de misión y visión.',
          'Quien decide no es el estudiante sino los padres, comparando tres o cuatro colegios durante semanas. Las fallas que más los alejan: el proceso de admisión en un PDF que hay que descargar, la mensualidad que no aparece ni como rango, fotos de stock, un "portal de padres" anunciado sin decir qué incluye y una web que obliga a hacer zoom en el celular. El detalle completo por tipo de institución está en nuestra <a href="/industrias/diseno-web-educacion-panama/">página de diseño web para colegios e institutos</a>.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo diseñar una admisión online que no espante a un padre nuevo?',
        intro: 'El cuello de botella casi nunca es la falta de familias interesadas: es la fricción del proceso justo donde el padre está más nervioso.',
        items: [
          { h3: '1. Cupos y fechas visibles desde la portada', text: 'Si hay cupo para el nivel que buscan y cuándo cierra el proceso tiene que verse en los primeros segundos, no dentro de un PDF de admisiones que hay que descargar y abrir aparte.' },
          { h3: '2. Un formulario corto: el aspirante y el tutor, no el expediente completo', text: 'Nombre y edad del aspirante, nivel al que aplica, nombre y contacto del tutor. Pedir notas, certificados o el expediente completo en ese primer paso hace que la familia lo cierre sin enviarlo.' },
          { h3: '3. Decir qué pasa después de enviarlo', text: 'Una pantalla o un correo que confirme "te contactamos en 24 a 48 horas para agendar la evaluación" quita la duda de si el formulario de verdad llegó.' },
          { h3: '4. Requisitos y documentos en una sola página', text: 'Certificado de nacimiento, notas del año anterior, fotos, carné de vacunas: lo que pida tu colegio, completo y en un solo lugar, no repartido entre la web, un PDF y el correo de admisiones.' },
          { h3: '5. Un canal directo para la pregunta antes del formulario', text: 'Un WhatsApp visible para "¿tienen cupo en kínder para el próximo año?" evita que la familia abandone el sitio porque no se atreve a llenar un formulario sin saber si hay espacio.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué incluye un portal de padres y cuándo ya es un sistema académico?',
        paragraphs: [
          'Para un colegio, "portal de padres" es un calendario y circulares en PDF; para otro, boletas, asistencia en tiempo real, mensajería con cada profesor y pago de mensualidad en línea. Son dos productos distintos, y confundirlos a mitad de proyecto es la fuente más común de decepción.',
          'La versión informativa —calendario académico, circulares, fechas de pago y contacto por nivel, con panel para que el colegio la actualice— entra en una <a href="/servicios/diseno-web-corporativo-panama/">Web empresarial</a> de hasta 6 páginas, desde $1,250 más ITBMS. Para la mayoría de los colegios basta.',
          'Boletas, asistencia diaria, mensajería en tiempo real o pago de mensualidad integrado a tu banco ya son software académico, y se dimensionan como <a href="/tecnologias/desarrollo-web-a-medida-vue-react-panama/">desarrollo a medida</a>, desde $2,900 más ITBMS. Antes de aprobar un presupuesto que diga "portal de padres", pide la lista exacta de qué incluye: la diferencia es entre un proyecto de $1,250 y uno que arranca en $2,900.',
        ],
      },
      {
        type: 'statement',
        text: 'Ningún portal de padres reemplaza el sistema académico del colegio. Lo que sí hace la web es',
        strong: 'dejar claro el proceso de admisión antes de que la familia tenga que preguntar por WhatsApp qué significa cada paso.',
      },
      {
        type: 'prose',
        h2: '¿Por qué las fotos reales del campus pesan más que cualquier folleto?',
        paragraphs: [
          'Un colegio se elige casi con los ojos. Un aula luminosa, la entrada, la cancha o la biblioteca de tu propio campus dicen en un segundo lo que un párrafo sobre "instalaciones de primer nivel" no logra, y cuando la familia visita y reconoce lo que vio, esa coherencia suma confianza. Una foto de stock con niños que nunca pisaron ese campus comunica "no quisieron mostrar el suyo".',
          'No exige una producción cara: un celular con luz natural y quince minutos recorriendo entrada, aulas, áreas comunes y algún momento real de clase rinden más que cualquier sesión de stock. Para publicar fotos de alumnos, pide el consentimiento del padre o tutor específicamente para eso, no un párrafo genérico firmado al matricular.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Quién actualiza la web del colegio ciclo a ciclo?',
        paragraphs: [
          'Una web de colegio envejece rápido: fechas de admisión del año pasado o la circular de vacaciones arriba en marzo le restan credibilidad frente a la familia que compara. La Web empresarial incluye panel autoadministrable para que admisiones o dirección cambien esas fechas sin depender de la agencia.',
          'Si nadie en el colegio tiene tiempo de entrar al panel cada dos semanas, conviene un plan de <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento web</a>: el Básico, desde $99 al mes, incluye ajustes menores de contenido, respaldos y seguridad; el Prioritario ($169 al mes, con una hora de cambios incluida y respuesta el mismo día hábil) rinde mejor en plena temporada de admisiones. Si alguien interno ya actualiza el panel sin problema, no hace falta pagar mantenimiento por contenido.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo tu colegio no necesita invertir todavía en captar más matrícula?',
        paragraphs: [
          'Si ya tienes lista de espera de varios años en la mayoría de los niveles, un proceso de admisión optimizado para captar tráfico frío resuelve un problema que no tienes. Ahí basta una web simple —una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 más ITBMS— que confirme quién eres y publique el proceso para quien quiere anotarse en la lista de espera.',
          'Tampoco conviene rehacer el sitio, mover URLs o lanzar un rediseño en plena temporada de admisiones: ese trabajo se hace en temporada baja, con el sitio probado antes de que abra la siguiente ventana. Una <a href="/industrias/diseno-web-educacion-panama/">web completa para colegios e institutos</a> se justifica cuando compites por matrícula: un colegio nuevo, uno que perdió alumnos, uno que abrió sede o nivel, o uno cuya web no refleja la seriedad de su proyecto educativo.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para colegios',
        items: [
          { q: '¿El precio de la web incluye mantenerla después de publicada?', a: 'No, son dos cosas distintas y así se cotizan en todo el sitio. La web (Web empresarial desde $1,250, landing desde $550) es el proyecto de diseño y desarrollo. Después, la infraestructura para que viva en internet va desde $225 al año en hosting compartido, o $350 al año en el plan cloud recomendado, y el mantenimiento (actualizaciones, respaldos, ajustes de contenido) desde $99 al mes. Todos los precios son en dólares y no incluyen el 7% de ITBMS.' },
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
