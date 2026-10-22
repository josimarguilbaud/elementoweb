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
      alt: 'Cámara de vigilancia con su soporte, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para empresas de seguridad y vigilancia en Panamá debe hablarle a dos públicos: al comité que contrata, con licencias, pólizas, cobertura y un documento de credenciales descargable, y al aspirante a guardia, con vacantes por zona y turno. En Elemento Web, esa web parte desde $1,250 en el paquete Web empresarial, sin ITBMS.',
      'Al mismo sitio llegan un administrador de edificio o un gerente de compras que compara tres propuestas y debe justificar ante su junta por qué te eligió, y alguien que busca «trabajo de seguridad en Panamá» desde el celular, con el currículum a medio armar. La mayoría de las webs del rubro solo le hablan al primero, y a medias.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué la web de una empresa de seguridad tiene dos públicos?',
        paragraphs: [
          'Nadie contrata seguridad por impulso. Un comité o un gerente de compras evalúa licencias, pólizas, años de operación y referencias antes de invitarte a cotizar, y esa evaluación empieza en tu web. Si ahí no encuentra con qué justificar la elección ante su jefe o su junta, la conversación se enfría antes de que puedas defenderla en persona.',
          'Al mismo tiempo, tu empresa necesita contratar personal de forma constante. La rotación es estructural en el rubro, y el problema real es no poder tomar un contrato nuevo porque no hay con quién cubrirlo. Casi ninguna web de seguridad en Panamá le habla a ese aspirante: encuentra un correo genérico, o nada.',
          'Un enlace de «trabaja con nosotros» al fondo del menú desperdicia una ventaja: el sector recluta casi solo por referido, y «trabajo de seguridad en Panamá» es una búsqueda con volumen real y poca competencia. Detallamos cómo resolvemos ambos lados en nuestra página de <a href="/industrias/diseno-web-seguridad-vigilancia-panama/">diseño web para empresas de seguridad</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué revisa el comité antes de invitarte a cotizar?',
        intro: 'Si falta algo de esto, el comprador corporativo no tiene con qué defenderte ante quien firma.',
        items: [
          'Licencia de operación y registros del sector, con número visible',
          'Póliza de responsabilidad civil y qué cubre exactamente',
          'Años de operación y el tipo de cliente que atiendes hoy: residencial, comercial, industrial',
          'Cómo seleccionas, capacitas y supervisas al personal que pondrás en su instalación',
          'Cobertura geográfica real y capacidad de respuesta si hay que reforzar un turno',
          'Un documento descargable con tus credenciales para adjuntar a un expediente de aprobación',
          'Canal de emergencia operativo 24/7, no un número que nadie contesta después de las 6pm',
          'Casos o clientes que puedas nombrar, aunque sea por tipo de instalación si el contrato exige discreción',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo construir la sección de empleo de una empresa de seguridad?',
        intro: 'Es la parte que casi ninguna empresa de seguridad en Panamá publica, y por eso la más fácil de ganar.',
        items: [
          { h3: '1. Vacantes reales por zona y turno', text: 'Qué se busca, en qué corregimiento o edificio y en qué turno, en vez de una página genérica de «trabaja con nosotros».' },
          { h3: '2. Requisitos claros, sin jerga de recursos humanos', text: 'Edad, certificado de salud, antecedentes, si se pide curso de seguridad vigente. Decirlo evita que alguien pierda un día yendo a preguntar.' },
          { h3: '3. Qué se ofrece, incluido el salario o el rango', text: 'Es la pregunta de todo aspirante y casi nadie la contesta en la web. Publicarlo no compromete a más de lo que se dirá en la entrevista, y filtra antes.' },
          { h3: '4. Un formulario de dos minutos que funcione en el celular', text: 'Nombre, teléfono, zona donde puede trabajar y disponibilidad. Pedir un currículum en PDF desde un teléfono es la forma más rápida de perder al candidato.' },
          { h3: '5. Fotos reales del equipo en servicio', text: 'Uniformados, en una garita o haciendo una ronda, sin mostrar rostros si no hay autorización. Le dicen al aspirante que la empresa existe de verdad.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Fotos reales de tu operación, sin exponer a nadie que no dio permiso',
        paragraphs: [
          'En un negocio que vende confianza, el banco de imágenes resta: el actor de traje con un pinganillo mirando a cámara se reconoce a un kilómetro. Una garita real, una unidad rotulada, el centro de monitoreo con las pantallas encendidas y el uniforme correcto dicen más, sin producción cara.',
          'Cuida la privacidad de tu personal: para mostrar rostros identificables, pide autorización explícita; sin ella, fotografía de espaldas, la instalación, el equipo o el uniforme. Si un cliente exige discreción, una foto de un edificio de oficinas parecido —no el suyo— sigue siendo más honesta que una ilustración de stock.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de una empresa de seguridad?',
        paragraphs: [
          'Si trabajas con un solo cliente corporativo grande, ganado por licitación o por una relación de años, y no piensas crecer en clientes ni en planilla, una web elaborada con sección de empleo capta algo que no necesitas. Basta un sitio institucional simple con tus licencias y un contacto directo, sin SEO.',
          'Tampoco conviene si estás empezando sin licencias completas ni póliza vigente: primero eso, después la web que lo muestre. Publicar credenciales que no tienes es peor que no tener web.',
          'Sí se justifica cuando quieres crecer más allá de tu cartera actual, cuando manejas más de un tipo de cliente (residencial, comercial, industrial) o cuando la rotación es un problema constante sin canal propio para atenderla. Ahí una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> con ambos lados resueltos puede recuperar su costo con el primer contrato adicional o con plazas cubiertas sin depender de un referido.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de una empresa de seguridad en Panamá?',
        paragraphs: [
          'Los precios son en dólares y no incluyen el 7% de ITBMS. Para la mayoría —credenciales, servicios por tipo de cliente, cobertura y sección de empleo— el punto de entrada recomendado es una Web empresarial de hasta 6 páginas desde $1,250, porque hablarle a dos públicos exige más de una página. Una landing page desde $550 puede bastar para una presencia mínima sin sección de empleo, aunque en este rubro no siempre es la mejor idea.',
          'Si necesitas algo a medida —portal de cliente para reportes de ronda, integración con tu sistema de monitoreo, varios idiomas para clientes internacionales— es un proyecto corporativo desde $2,900, con arquitectura propia en lugar de un paquete cerrado.',
          'Aparte va la infraestructura anual —$225 en hosting compartido, $350 en <a href="/crecimiento/hosting-infraestructura-panama/">hosting cloud</a>, el punto medio que recomendamos a la mayoría, o $550 en un VPS dedicado— y el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento mensual</a>: $99 en el plan Básico, $169 en el Prioritario y $319 en el Empresarial, según qué tan rápido necesitas respuesta si algo falla. Si tu negocio depende de un canal de emergencia siempre disponible, no conviene ahorrar en mantenimiento.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para empresas de seguridad',
        items: [
          { q: '¿De verdad vale la pena publicar vacantes de empleo en la web de una empresa de seguridad?', a: 'Sí, y es la parte que casi nadie hace en este rubro. El sector entero recluta por referido, así que "trabajo de seguridad en Panamá" y búsquedas similares tienen volumen real y casi ninguna empresa publicando algo serio para captarlas. Una sección simple —vacante, zona, turno, requisitos, un formulario corto— capta aplicaciones que hoy no le están llegando a nadie por esta vía.' },
          { q: '¿Puedo mostrar fotos de mi personal uniformado en la web?', a: 'Sí, y conviene: le da a la web una seriedad que ningún banco de imágenes da. Lo que hay que cuidar es la privacidad de las personas —pide autorización explícita antes de mostrar un rostro identificable— y si no la tienes, hay suficiente que fotografiar sin necesidad de un rostro: uniformes, unidades, la garita, el centro de monitoreo.' },
          { q: '¿Qué pasa si trabajo solo con un cliente corporativo grande?', a: 'Si no tienes intención de crecer a más clientes ni de aumentar la planilla, probablemente no necesitas esta web todavía. Un sitio institucional simple que confirme licencias y un contacto directo es suficiente cuando no vas a competir por búsquedas ni a reclutar por esta vía.' },
          { q: '¿Cuánto cuesta la web de una empresa de seguridad en Panamá?', a: 'Para la mayoría, una Web empresarial de hasta 6 páginas desde $1,250 —con credenciales, servicios por tipo de cliente y sección de empleo— es el punto de entrada recomendado. Si necesitas portal de cliente o integraciones con tu sistema de monitoreo, es un proyecto a medida desde $2,900. La infraestructura anual va de $225 a $550 y el mantenimiento mensual de $99 a $319, aparte y según lo que necesites. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
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
