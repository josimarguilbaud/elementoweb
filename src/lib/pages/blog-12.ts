/* BLOG — Lote 12: guía para contadores y firmas contables en Panamá.
   Mismo patrón que blog-7.ts: PageData con parent { slug: 'blog' }; el listado
   /blog la recoge por fecha y categoría. Enlaces internos solo a slugs reales. */
import type { PageData } from '../types';

export const blog12: PageData[] = [
  {
    slug: 'blog/diseno-web-para-contadores-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para contadores en Panamá: qué no puede faltar',
    description: 'Qué debe tener la web de un contador en Panamá: credenciales visibles, servicios separados y por qué posicionar antes de la temporada de renta.',
    h1: 'Diseño web para contadores: qué no puede faltar en la web de tu firma',
    breadcrumb: 'Diseño web para contadores',
    category: 'Diseño web',
    date: '2026-09-18',
    heroImage: {
      src: '/images/blog/diseno-web-para-contadores-panama.jpg',
      alt: 'Escritorio de oficina contable con calculadora, documentos financieros y laptop con gráficos en pantalla',
    },
    lead: [
      'Un contador no vende un servicio: vende la tranquilidad de que alguien más va a manejar bien tus números y tu relación con la DGI. Esa tranquilidad no se transmite con un adjetivo en la portada. Se transmite con una web que demuestra, en cada detalle, que sabes de lo que hablas.',
      'La mayoría de las webs de contadores en Panamá cometen el mismo error: hablan de la firma en abstracto, meten los diez servicios en una sola página y recién se acuerdan de internet cuando ya empezó la temporada de impuestos. Esta guía repasa qué debe tener sí o sí la web de un contador o firma contable, por qué conviene moverse antes de la temporada alta, y cuándo, con toda honestidad, esta inversión todavía no te toca.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La confianza profesional se demuestra, no se declara',
        paragraphs: [
          'Nadie entrega su contabilidad por impulso. El cliente que llega a tu web está a punto de compartir su facturación, su planilla y, en muchos casos, información que ni le mostraría a un vecino. Antes de escribirte, compara dos o tres opciones y decide por una sensación difícil de fingir: seriedad. Ya escribimos con detalle qué necesita puntualmente esa web en nuestra guía de <a href="/industrias/diseno-web-contadores-panama/">diseño web para contadores y firmas contables</a>; aquí nos enfocamos en las decisiones de contenido que marcan la diferencia.',
          'Esa seriedad no se construye con frases como "brindamos servicios contables de calidad" — eso no dice nada, y cualquier competidor puede copiarlo sin cambiar una coma. Se construye con datos verificables: el número de idoneidad del CPA a cargo, los años reales de ejercicio, y sobre todo, a qué tipo de cliente atiendes. No es lo mismo una firma que solo lleva personas naturales que una que además hace auditoría a empresas medianas; decirlo claro filtra a quien te escribe.',
          'Lo mismo le pasa a cualquier profesión que se vende con base en confianza y no en un producto que se pueda tocar. Un <a href="/industrias/diseno-web-abogados-panama/">abogado</a> enfrenta el mismo problema en su propia web, y la respuesta es la misma: especificidad, no adjetivos. El cliente no necesita que le digas que eres bueno; necesita ver que entiendes su problema antes de la primera reunión.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo mínimo que no puede faltar en la web de un contador',
        intro: 'Si tu web no tiene esto, no importa cuán bien diseñada esté: le falta justo lo que convence a alguien de confiarte sus números.',
        items: [
          'Idoneidad del CPA y del equipo, con número de registro visible — no solo el título',
          'Años de experiencia y a qué tipo de cliente atiendes: persona natural, pyme, empresa, o los tres',
          'Cada servicio en su propia página — declaración de renta, planilla, auditoría, asesoría fiscal — no todos amontonados en un solo "Servicios"',
          'Un canal de contacto claro (WhatsApp o formulario) que no pida cifras financieras por un medio abierto',
          'Una explicación honesta de cómo se reciben los documentos del cliente, sin prometer un sistema que no existe',
          'Los plazos fiscales de Panamá vigentes — un vencimiento desactualizado en tu propia web resta la credibilidad que buscas transmitir',
          'HTTPS activo antes de pedirle a nadie un solo dato financiero',
          'Un teléfono y un correo profesionales, no un Gmail personal ni un número que nadie contesta',
        ],
      },
      {
        type: 'prose',
        h2: 'La temporada de impuestos no espera a que actives tu web',
        paragraphs: [
          'La demanda de servicios contables en Panamá no es pareja durante el año: se dispara en fechas concretas. La declaración de renta, los informes de ITBMS y el cierre de planilla generan, cada uno, un pico de búsquedas de gente que de golpe necesita un contador. Si tu web ya está posicionada cuando eso pasa, capturas ese tráfico. Si apenas la estás armando, se lo llevó el que empezó antes.',
          'El problema es que el <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento en Google</a> no se activa de un día para otro. Publicar contenido, ordenar la estructura del sitio y ganar autoridad toma semanas, a veces meses — y nadie, ni nosotros ni nadie serio, te va a garantizar el primer lugar para "contador en Panamá". Lo que sí se puede casi garantizar es lo contrario: si empiezas a trabajar tu web en plena temporada, ya llegaste tarde a esa cosecha.',
          'La consecuencia práctica es simple. Si tu temporada fuerte cae en el primer trimestre del año, con la declaración de renta, la web y el contenido que la sostiene deberían estar listos y madurando desde el año anterior — no la semana en que empiezan a llegar los vencimientos.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie te va a garantizar el primer lugar en Google para "contador en Panamá".',
        strong: 'Pero si empiezas a trabajar tu web en plena temporada de renta, sí puedes garantizar que llegaste tarde.',
      },
      {
        type: 'cards',
        h2: 'Cuatro búsquedas distintas piden cuatro páginas distintas',
        intro: 'Quien busca "declaración de renta" no es la misma persona que busca "auditoría para mi empresa". Cada servicio compite por su propia búsqueda, y necesita su propia página para ganarla.',
        items: [
          { h3: 'Declaración de renta', text: 'La busca la persona natural o la pyme que quiere resolver un trámite puntual, muchas veces con la fecha encima. Necesita ver el plazo, los requisitos y una forma rápida de escribirte, no la historia de tu firma.' },
          { h3: 'Nómina y planilla', text: 'La busca el negocio que ya tiene empleados y quiere quitarse de encima el cálculo mensual y las cuotas de la Caja de Seguro Social. Es una relación continua, no un trámite de una sola vez, y así debería sentirse la página.' },
          { h3: 'Auditoría', text: 'La busca la empresa establecida que necesita estados financieros confiables, muchas veces por exigencia de un banco, un socio o un ente regulador. Aquí pesa la formalidad: experiencia con empresas de ese tamaño y un sitio que esté a la altura de esa exigencia.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Web corporativa a medida' } },
          { h3: 'Asesoría fiscal', text: 'La busca quien ya tiene contador pero quiere una segunda opinión, o quien está por tomar una decisión —constituir una sociedad, cambiar de régimen— y necesita orientación antes de firmar nada.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo va a mandarte los documentos tu cliente — dilo en la web',
        paragraphs: [
          'La operación real de la mayoría de las firmas contables en Panamá es esta: el cliente manda las facturas por WhatsApp, a veces fotografiadas de mala manera, al celular personal de alguien del equipo. Funciona con pocos clientes, y deja de funcionar en el momento menos indicado — casi siempre en plena temporada, cuando el volumen se triplica.',
          'Aquí es donde hay que ser honestos con lo que la web puede prometer. Un <strong>formulario simple</strong> que agenda una consulta y pide lo mínimo para dar el primer paso es perfectamente válido, y es lo que la mayoría de las firmas necesita. Un <strong>portal real</strong> —con usuario por cliente, carpeta propia e historial de qué se subió y cuándo— es otra inversión, más grande, y solo tiene sentido cuando ya manejas el volumen que lo justifica. Prometer un portal en la web y no tenerlo construido es peor que no mencionarlo: el cliente lo va a notar la primera vez que intente usarlo.',
          'Si ya trabajas con un software contable que incluye área de cliente —como <a href="/saas/cifrao/">Cifrao</a> u otro similar— tiene sentido que la web enlace directo a ese acceso en vez de inventar una promesa aparte. Y sea cual sea el canal, hay que decirlo: entre esos documentos suelen viajar planillas con salarios y cédulas, datos personales protegidos por la Ley 81 de 2019, así que como mínimo el sitio necesita HTTPS y un canal que no sea un formulario abierto pidiendo cifras de facturación.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir en una web nueva todavía',
        paragraphs: [
          'Vamos a decirlo sin rodeos porque es la pregunta que casi nadie responde con honestidad: si eres un contador independiente que vive de referidos de toda la vida, tienes la agenda llena y no te queda capacidad para atender clientes nuevos, invertir en una web robusta con SEO y páginas por servicio es gastar en atraer gente que después no vas a poder atender bien. En ese caso, una página sencilla de presencia —para que quien te busque por nombre te encuentre y confirme que existes— cumple, y no hace falta más.',
          'La web empieza a valer la pena en el momento en que sí quieres o necesitas crecer: cuando el referido ya no te alcanza para llenar la agenda, cuando quieres atraer al tipo de cliente que hoy no te llega por recomendación (empresas más grandes, un sector nuevo), o cuando se acerca una temporada en la que sabes que vas a recibir consultas de gente que no te conoce todavía.',
          'Ahí sí conviene mirar los formatos: una <a href="/servicios/diseno-web-corporativo-panama/">Página PYME desde $950</a> cubre a la mayoría de las firmas que quieren páginas por servicio, panel propio y un blog para el calendario fiscal. Una firma con varios socios, líneas de servicio o necesidad de integraciones puede necesitar un proyecto corporativo a medida desde $2,900. Los precios son en USD y no incluyen ITBMS (7%). En cualquier caso, la cotización se cierra por escrito antes de empezar.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre la web de un contador en Panamá',
        items: [
          { q: '¿Cuánto cuesta la web de un contador o firma contable?', a: 'Depende del tamaño de la firma. Una Página PYME desde $950 cubre la mayoría de los casos: páginas por servicio, panel autoadministrable y espacio para blog. Un proyecto corporativo a medida, desde $2,900, tiene sentido cuando hay varios socios, líneas de servicio o integraciones de por medio. Los precios son en USD y no incluyen ITBMS (7%); la cotización final se entrega por escrito.' },
          { q: '¿Necesito un portal para que mis clientes suban documentos?', a: 'No necesariamente. Para la mayoría de las firmas alcanza con un formulario que agende la consulta y un canal claro (WhatsApp o correo) para el resto. Un portal con acceso individual por cliente es una inversión más grande que solo se justifica con volumen real. Prometer un portal que no existe hace más daño que no mencionarlo.' },
          { q: '¿Cuándo debo empezar a trabajar mi web si mi temporada fuerte es la declaración de renta?', a: 'Con meses de anticipación, no la semana del vencimiento. El posicionamiento en Google toma tiempo en madurar, así que si tu pico de consultas cae en el primer trimestre, el contenido y la estructura de la web deberían estar trabajándose desde el año anterior.' },
          { q: '¿Sirve la web si ya tengo toda mi cartera por referidos?', a: 'Si tu agenda está llena y no tienes capacidad para clientes nuevos, no es prioridad — una página sencilla de presencia basta. Empieza a valer la pena cuando quieres crecer más allá de lo que el referido te trae, o cuando se acerca una temporada donde vas a recibir consultas de gente que todavía no te conoce.' },
          { q: '¿Debo publicar mis honorarios en la web?', a: 'Al menos un rango, por servicio o por tamaño de empresa. La contabilidad se contrata con miedo a la sorpresa, y un rango tranquiliza más de lo que espanta. Los trabajos que varían mucho por caso pueden ir con un "desde".' },
          { q: '¿La web reemplaza mi software contable?', a: 'No. La web construye confianza y capta al cliente antes de la primera reunión; el software (como Cifrao u otro) es donde llevas la operación después de que ya te contrató. Si ese software tiene área de cliente, la web puede enlazar directo ahí en vez de duplicar esa función.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Diseño web para contadores' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'saas/cifrao', label: 'Cifrao: gestión contable' },

          { slug: 'industrias/diseno-web-abogados-panama', label: 'Diseño web para abogados' },
          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Diseño web para consultoras' },
        ],
      },
    ],
    cta: {
      h2: 'Lleva la web de tu firma contable lista antes de la próxima temporada',
      wa: 'Hola, tengo una firma contable / soy contador y quiero mejorar mi web antes de la próxima temporada de impuestos. ¿Me ayudan?',
    },
  },
];
