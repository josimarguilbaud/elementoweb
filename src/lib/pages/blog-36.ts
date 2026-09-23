/* BLOG — Lote 36: guía long-form sobre diseño web para empresas de seguridad
   y vigilancia en Panamá. PageData con parent { slug: 'blog' }; el listado
   /blog la recoge por fecha y categoría. Enlaces internos solo a slugs reales
   del sitio. */
import type { PageData } from '../types';

export const blog36: PageData[] = [
  {
    slug: 'blog/diseno-web-para-seguridad-vigilancia-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para seguridad y vigilancia en Panamá: dos rutas',
    description: 'Qué debe tener la web de una empresa de seguridad en Panamá: credenciales para el comité que decide y una sección de empleo que el rubro no usa.',
    h1: 'Diseño web para seguridad y vigilancia en Panamá: dos públicos muy distintos, una sola web',
    breadcrumb: 'Diseño web para seguridad y vigilancia',
    category: 'Diseño web',
    date: '2026-09-08',
    heroImage: {
      src: '/images/blog/diseno-web-para-seguridad-vigilancia-panama.jpg',
      alt: 'Centro de monitoreo de seguridad con varias pantallas de CCTV mostrando distintas vistas de un edificio, sala de control con iluminación ambiental oscura',
    },
    lead: [
      'A la web de una empresa de seguridad llegan dos personas que no podrían ser más distintas. Un administrador de edificio o un gerente de compras que compara tres propuestas y necesita justificar ante su junta por qué te eligió a ti. Y alguien que busca "trabajo de seguridad en Panamá" desde el celular, con el currículum a medio armar, viendo a quién escribirle hoy mismo.',
      'La mayoría de las webs del rubro solo le habla al primero, y a medias. En esta guía repasamos qué necesita el lado que vende —licencias, pólizas, casos, cobertura—, qué necesita el lado que recluta, que el sector entero deja en manos del referido sin publicar nada, y también cuándo, con honestidad, todavía no conviene invertir en ninguno de los dos.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Una web que vende seguridad y otra que consigue personal, en el mismo sitio',
        paragraphs: [
          'Nadie contrata seguridad por impulso. Un comité o un gerente de compras evalúa licencias, pólizas, años de operación y referencias antes de invitarte siquiera a cotizar, y esa evaluación empieza en tu web, no en la reunión. Si ahí no encuentra con qué justificar la elección ante su jefe o su junta, la conversación se enfría antes de que tengas oportunidad de defenderla en persona.',
          'Al mismo tiempo, y sin ninguna relación con lo anterior, tu empresa necesita contratar personal de forma constante. La rotación es estructural en el rubro, y el problema real no es administrativo: es no poder tomar un contrato nuevo porque no hay con quién cubrirlo. Casi ninguna web de seguridad en Panamá le habla a este segundo público. Toda la comunicación apunta al cliente corporativo, y el aspirante a guardia que busca trabajo desde su celular no encuentra nada, o encuentra un correo genérico donde nadie lee lo que le llega.',
          'Tratar esto como un anexo menor —un enlace de "trabaja con nosotros" al fondo del menú— desperdicia lo que en este rubro es una ventaja competitiva real: el sector entero recluta casi exclusivamente por referido, y "trabajo de seguridad en Panamá" es una búsqueda con volumen alto y casi sin competencia porque nadie más la está atendiendo todavía. Entramos en el detalle completo de cómo estructuramos ambos lados en nuestra <a href="/industrias/diseno-web-seguridad-vigilancia-panama/">página de diseño web para empresas de seguridad</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que revisa el comité antes de invitarte a cotizar',
        intro: 'Esto es lo que un comprador corporativo busca en tu web antes de la primera llamada. Si falta, no tiene con qué defenderte ante quien firma.',
        items: [
          'Licencia de operación y registros del sector, con número visible, no solo mencionados',
          'Póliza de responsabilidad civil y qué cubre exactamente',
          'Años de operación y el tipo de cliente que atiendes hoy: residencial, comercial, industrial',
          'Cómo seleccionas, capacitas y supervisas al personal que vas a poner en su instalación',
          'Cobertura geográfica real y capacidad de respuesta si hay que reforzar un turno',
          'Un documento descargable con tus credenciales que su encargado pueda adjuntar a un expediente de aprobación',
          'Canal de emergencia operativo 24/7, no un número que nadie contesta después de las 6pm',
          'Casos o clientes que puedas nombrar, aunque sea por tipo de instalación si el contrato exige discreción',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo construir la sección de empleo que el resto del rubro no tiene',
        intro: 'Esta es la parte que casi ninguna empresa de seguridad en Panamá publica, y por eso mismo es la más fácil de ganar.',
        items: [
          { h3: '1. Vacantes reales por zona y turno', text: 'No una sola página de "trabaja con nosotros" genérica: qué se busca, en qué corregimiento o edificio y en qué turno. Alguien que busca trabajo revisa esto antes que cualquier otra cosa.' },
          { h3: '2. Requisitos claros, sin jerga de recursos humanos', text: 'Edad, certificado de salud, antecedentes, si se pide curso de seguridad vigente. Decirlo de frente evita que alguien pierda un día completo yendo a preguntar algo que la web pudo responder.' },
          { h3: '3. Qué se ofrece, incluido el salario o el rango', text: 'Es la pregunta que todo aspirante tiene y casi ninguna empresa contesta en la web. Publicarlo no compromete a más de lo que ya se va a decir en la entrevista, y filtra antes de que alguien pierda el tiempo.' },
          { h3: '4. Un formulario de dos minutos que funcione en el celular', text: 'Nombre, teléfono, zona donde puede trabajar y disponibilidad. Nada de subir un currículum en PDF desde un teléfono con poco espacio: es la forma más rápida de perder al candidato antes de que aplique.' },
          { h3: '5. Fotos reales del equipo en servicio', text: 'Uniformados, en una garita o haciendo una ronda, sin necesidad de mostrar el rostro si no hay autorización. Le dice a quien busca trabajo que la empresa existe de verdad, igual que las credenciales se lo dicen al comprador corporativo.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Fotos reales de tu operación, sin exponer a nadie que no dio permiso',
        paragraphs: [
          'El banco de imágenes traiciona a las empresas de seguridad más rápido que a casi cualquier otro rubro: el actor de traje con un pinganillo mirando a cámara se reconoce a un kilómetro, y en un negocio que vende confianza, una foto que se ve falsa resta más de lo que suma cualquier texto.',
          'La alternativa no exige una producción cara: una garita real, una unidad rotulada, el centro de monitoreo con las pantallas encendidas, el uniforme correcto, dicen más que cualquier stock. Lo que sí hay que cuidar es la privacidad de tu propio personal: si vas a mostrar rostros identificables, pide autorización explícita primero; si no la tienes, hay de sobra que fotografiar sin necesidad de una cara —de espaldas, la instalación, el equipo, el uniforme.',
          'Lo mismo aplica al cliente. Si trabajas en un edificio o una empresa que exige discreción sobre quién los protege, una foto genérica de un edificio de oficinas parecido —no el suyo— sigue siendo mucho más honesta y más fuerte que una ilustración de banco de imágenes que cualquiera reconoce.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie más en el rubro está publicando vacantes con salario y zona en su web.',
        strong: 'El aspirante que hoy no encuentra esa información en ningún lado, la encuentra en la tuya.',
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene invertir en esto todavía',
        paragraphs: [
          'No toda empresa de seguridad necesita esta web hoy, y decirlo con honestidad ahorra un gasto que no le va a servir a todo el mundo. Si trabajas con un solo cliente corporativo grande, ganado por licitación o por una relación de años, y no tienes intención de crecer a más clientes ni de aumentar la planilla, una web elaborada con sección de empleo es gastar en captar algo que no necesitas captar. Ese caso funciona con un sitio institucional simple que confirme que existes, tus licencias y un contacto directo, y ni siquiera necesita SEO, porque no vas a competir por búsquedas que no te interesan.',
          'Tampoco conviene todavía si apenas estás empezando, sin licencias completas ni póliza vigente: primero eso, después la web que lo muestre. Publicar credenciales que no tienes es peor que no tener web.',
          'Donde sí se justifica —y se paga sola con el primer contrato adicional o las primeras contrataciones que ya no salieron de un referido— es cuando quieres crecer más allá de tu cartera actual, cuando manejas más de un tipo de cliente (residencial, comercial, industrial), o cuando la rotación de personal es un problema constante y hoy no tienes ningún canal propio para atenderla. Ahí una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> con ambos lados bien resueltos deja de ser un gasto de imagen y empieza a pagarse con contratos y con plazas cubiertas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta, en números reales',
        paragraphs: [
          'Los precios son en dólares y no incluyen el 7% de ITBMS. Para la mayoría de las empresas de seguridad —credenciales, servicios por tipo de cliente, cobertura y una sección de empleo real— el punto de entrada recomendado es una Página PYME de 8 a 12 páginas desde $950, porque necesitas más de una página para hablarle a dos públicos distintos. Si el proyecto es solo una presencia mínima —licencias, contacto y poco más, sin sección de empleo— una landing page desde $550 puede bastar, aunque por lo que ya explicamos arriba no siempre es la mejor idea en este rubro.',
          'Si necesitas algo a medida —portal de cliente para reportes de ronda, integración con tu sistema de monitoreo, multi-idioma para clientes internacionales— es un proyecto corporativo desde $2,900, con arquitectura propia en lugar de un paquete cerrado.',
          'A esto se suma, aparte, la infraestructura anual —desde $225 en hosting compartido hasta $550 en un VPS dedicado, con $350 en <a href="/crecimiento/hosting-infraestructura-panama/">hosting cloud</a> como el punto medio que recomendamos a la mayoría— y el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento mensual</a>, que va de $59 en el plan Básico a $189 en el Empresarial, con un intermedio de $99, según qué tan rápido necesitas que respondamos si algo falla. Para una empresa cuyo negocio depende de que un canal de emergencia esté siempre disponible, no es el rubro donde conviene ahorrarse el mantenimiento.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para empresas de seguridad',
        items: [
          { q: '¿De verdad vale la pena publicar vacantes de empleo en la web de una empresa de seguridad?', a: 'Sí, y es la parte que casi nadie hace en este rubro. El sector entero recluta por referido, así que "trabajo de seguridad en Panamá" y búsquedas similares tienen volumen real y casi ninguna empresa publicando algo serio para captarlas. Una sección simple —vacante, zona, turno, requisitos, un formulario corto— capta aplicaciones que hoy no le están llegando a nadie por esta vía.' },
          { q: '¿Puedo mostrar fotos de mi personal uniformado en la web?', a: 'Sí, y conviene: le da a la web una seriedad que ningún banco de imágenes da. Lo que hay que cuidar es la privacidad de las personas —pide autorización explícita antes de mostrar un rostro identificable— y si no la tienes, hay suficiente que fotografiar sin necesidad de un rostro: uniformes, unidades, la garita, el centro de monitoreo.' },
          { q: '¿Qué pasa si trabajo solo con un cliente corporativo grande?', a: 'Si no tienes intención de crecer a más clientes ni de aumentar la planilla, probablemente no necesitas esta web todavía. Un sitio institucional simple que confirme licencias y un contacto directo es suficiente cuando no vas a competir por búsquedas ni a reclutar por esta vía.' },
          { q: '¿Cuánto cuesta la web de una empresa de seguridad en Panamá?', a: 'Para la mayoría, una Página PYME de 8 a 12 páginas desde $950 —con credenciales, servicios por tipo de cliente y sección de empleo— es el punto de entrada recomendado. Si necesitas portal de cliente o integraciones con tu sistema de monitoreo, es un proyecto a medida desde $2,900. La infraestructura anual va de $225 a $550 y el mantenimiento mensual de $59 a $189, aparte y según lo que necesites. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Debo publicar mis tarifas por puesto de vigilancia?', a: 'No suele convenir, porque el precio depende de turnos, riesgo y requisitos específicos de cada instalación. Lo que sí ayuda a que un comprador te compare de forma justa es publicar cómo se estructura el costo y qué incluye —supervisión, reemplazos, equipo— sin comprometerte a una cifra que no aplica a todos los casos.' },
          { q: '¿El SEO me garantiza aparecer primero en Google para "empresa de seguridad Panamá"?', a: 'No, y cualquiera que lo prometa está exagerando: es una de las categorías más competidas del rubro. Lo que sí funciona, y con mucha menos competencia, son las búsquedas de empleo del sector; ahí una página bien hecha tiene muchas más posibilidades reales de aparecer. Profundizamos el resto en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-seguridad-vigilancia-panama', label: 'Diseño web para empresas de seguridad y vigilancia' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
          { slug: 'crecimiento/hosting-infraestructura-panama', label: 'Hosting e infraestructura' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que le vende al comité y le recluta al aspirante',
      wa: 'Hola, quiero una web para mi empresa de seguridad en Panamá. ¿Me asesoran?',
    },
  },
];
