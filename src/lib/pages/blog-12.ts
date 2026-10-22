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
      alt: 'Ábaco con sus filas de cuentas, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para contadores en Panamá tiene que demostrar seriedad con datos verificables: número de idoneidad del CPA, una página por servicio (renta, planilla, auditoría, asesoría fiscal), HTTPS y la web posicionada meses antes de la temporada de renta del primer trimestre. En Elemento Web, una Web empresarial para una firma contable arranca desde $1,250.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'La confianza profesional se demuestra, no se declara',
        paragraphs: [
          'Nadie entrega su contabilidad por impulso. Quien llega a la web de un contador está por compartir su facturación y su planilla, y antes de escribir compara dos o tres firmas. Lo que necesita puntualmente esa web lo detallamos en la guía de <a href="/industrias/diseno-web-contadores-panama/">diseño web para contadores y firmas contables</a>; aquí van las decisiones de contenido.',
          'Una frase como "brindamos servicios contables de calidad" la puede copiar cualquier competidor sin cambiar una coma. La seriedad se construye con datos verificables: el número de idoneidad del CPA a cargo, los años reales de ejercicio y el tipo de cliente que atiendes. Una firma que solo lleva personas naturales no es igual a una que audita empresas medianas, y decirlo filtra a quien te escribe.',
          'Un <a href="/industrias/diseno-web-abogados-panama/">abogado</a> enfrenta el mismo problema en su web, con la misma respuesta: especificidad, no adjetivos.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué no puede faltar en el diseño web para contadores?',
        intro: 'Sin estos ocho puntos, a la web de un contador le falta justo lo que convence a alguien de confiarle sus números.',
        items: [
          'Idoneidad del CPA y del equipo, con número de registro visible — no solo el título',
          'Años de experiencia y a qué tipo de cliente atiendes: persona natural, pyme, empresa, o los tres',
          'Cada servicio en su propia página — declaración de renta, planilla, auditoría, asesoría fiscal — no todos amontonados en un solo "Servicios"',
          'Un canal de contacto claro (WhatsApp o formulario) que no pida cifras financieras por un medio abierto',
          'Una explicación honesta de cómo se reciben los documentos del cliente, sin prometer un sistema que no existe',
          'Los plazos fiscales de Panamá vigentes — un vencimiento desactualizado resta credibilidad',
          'HTTPS activo antes de pedirle a nadie un solo dato financiero',
          'Un teléfono y un correo profesionales, no un Gmail personal ni un número que nadie contesta',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo debe estar lista la web de un contador antes de la temporada de impuestos?',
        paragraphs: [
          'La demanda de servicios contables en Panamá se dispara en fechas concretas: la declaración de renta, los informes de ITBMS y el cierre de planilla generan cada uno un pico de búsquedas. Una web ya posicionada captura ese tráfico; una web a medio armar se lo deja al competidor que empezó antes.',
          'El <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento en Google</a> no se activa de un día para otro: publicar contenido, ordenar la estructura del sitio y ganar autoridad toma semanas, a veces meses. Si la temporada fuerte de tu firma cae en el primer trimestre con la declaración de renta, la web y su contenido deberían estar listos y madurando desde el año anterior, no la semana de los vencimientos.',
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
        intro: 'Quien busca "declaración de renta" no es quien busca "auditoría para mi empresa". Cada servicio contable compite por su propia búsqueda y necesita su propia página para ganarla.',
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
          'En la mayoría de las firmas contables en Panamá, el cliente manda las facturas fotografiadas por WhatsApp al celular personal de alguien del equipo. Funciona con pocos clientes y deja de funcionar en plena temporada, cuando el volumen se triplica.',
          'Un <strong>formulario simple</strong> que agenda la consulta y pide lo mínimo es lo que la mayoría de las firmas necesita. Un <strong>portal real</strong> —usuario por cliente, carpeta propia e historial de qué se subió y cuándo— es una inversión más grande que solo se justifica con volumen. Prometer un portal que no está construido es peor que no mencionarlo: el cliente lo nota la primera vez que intenta usarlo.',
          'Si tu software contable incluye área de cliente —como <a href="/saas/cifrao/">Cifrao</a> u otro similar—, la web puede enlazar directo a ese acceso. Sea cual sea el canal, entre esos documentos viajan planillas con salarios y cédulas, datos personales protegidos por la Ley 81 de 2019: el sitio necesita HTTPS y un canal que no sea un formulario abierto pidiendo cifras de facturación.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta y cuándo NO conviene una web nueva para tu firma contable?',
        paragraphs: [
          'Si eres un contador independiente que vive de referidos, con la agenda llena y sin capacidad para clientes nuevos, una web robusta con SEO y páginas por servicio atrae gente que no vas a poder atender bien. En ese caso basta una página sencilla de presencia, para que quien te busque por nombre te encuentre y confirme que existes.',
          'La web empieza a valer la pena cuando quieres crecer: el referido ya no llena la agenda, buscas un tipo de cliente que no te llega por recomendación (empresas más grandes, un sector nuevo) o se acerca una temporada con consultas de gente que todavía no te conoce.',
          'Una <a href="/servicios/diseno-web-corporativo-panama/">Web empresarial desde $1,250</a> cubre a la mayoría de las firmas que quieren páginas por servicio, panel propio y un blog para el calendario fiscal. Una firma con varios socios, líneas de servicio o integraciones puede necesitar un proyecto corporativo a medida desde $2,900. Precios en USD, sin ITBMS (7%); la cotización se cierra por escrito antes de empezar.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre la web de un contador en Panamá',
        items: [
          { q: '¿Cuánto cuesta la web de un contador o firma contable?', a: 'Depende del tamaño de la firma. Una Web empresarial desde $1,250 cubre la mayoría de los casos: páginas por servicio, panel autoadministrable y espacio para blog. Un proyecto corporativo a medida, desde $2,900, tiene sentido cuando hay varios socios, líneas de servicio o integraciones de por medio. Los precios son en USD y no incluyen ITBMS (7%); la cotización final se entrega por escrito.' },
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
