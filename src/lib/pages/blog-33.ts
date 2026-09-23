/* BLOG — Lote 33: guía long-form sobre diseño web para navieras y servicios
   marítimos en Panamá. PageData con parent { slug: 'blog' }; el listado /blog
   la recoge por fecha y categoría. Enlaces internos solo a slugs reales del
   sitio (verificados contra industrias-3.ts, servicios.ts y crecimiento.ts).
   ⚠️ Este archivo todavía no está importado en src/lib/pages/index.ts (se
   generó junto a otros lotes de blog en paralelo); falta agregar
   `import { blog33 } from './blog-33'` y `...blog33` al array final. */
import type { PageData } from '../types';

export const blog33: PageData[] = [
  {
    slug: 'blog/diseno-web-para-navieras-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para navieras en Panamá: qué decide el contrato',
    description: 'Qué debe tener la web de una naviera o proveedor marítimo en Panamá: credenciales verificables, versión en inglés y contenido técnico, no genérico.',
    h1: 'Diseño web para navieras y servicios marítimos: qué decide el contrato',
    breadcrumb: 'Diseño web para navieras',
    category: 'Diseño web',
    date: '2026-09-05',
    heroImage: {
      src: '/images/blog/diseno-web-para-navieras-panama.jpg',
      alt: 'Buque de carga grande atracado en una terminal portuaria, con contenedores apilados y grúas pórtico bajo un cielo despejado',
    },
    lead: [
      'Un operador en Hamburgo, un agente en Singapur o un charterer en Houston escribe "ship agency Panama" o "bunkering services Panama Canal" y abre las primeras cuatro o cinco webs que le devuelve Google. No va a llamar a ninguna todavía: va a comparar certificaciones, cobertura de puertos y capacidad operativa en la pantalla, en inglés, sin que nadie le explique nada por teléfono. Esa comparación silenciosa decide quién entra a la lista corta y quién no.',
      'La mayoría de las webs de navieras y proveedores marítimos en Panamá pierden esa decisión antes de que alguien escriba un correo: hablan de "servicios marítimos integrales" sin decir qué carga manejan, publican certificaciones sin número ni vigencia y dejan el inglés para "cuando haya tiempo". En esta guía repasamos qué credenciales de verdad mueven la aguja, por qué el inglés casi nunca es opcional en este rubro, cómo se ve el contenido técnico específico frente al genérico, y también cuándo, con honestidad, todavía no conviene invertir en una web así.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué aquí la web hace el trabajo que en otros rubros hace una visita',
        paragraphs: [
          'En la mayoría de los rubros, el cliente puede visitar el local, llamar y hacer preguntas, o pedirle una referencia a un conocido antes de decidir. En servicios marítimos, casi nunca. El comprador —un armador, un operador, un agente internacional o un charterer— evalúa proveedores desde otro país, en otro huso horario y casi siempre en otro idioma, y lo único que tiene enfrente para decidir es lo que encuentra en la web.',
          'Eso cambia la función de cada página. No es una vitrina que acompaña a un vendedor: es, en la práctica, todo el proceso de evaluación. Si la información que ese comprador necesita para justificar la contratación —muchas veces dentro de un proceso formal de aprobación de proveedor dentro de su propia empresa— no está publicada con el detalle correcto, no hay llamada de seguimiento que la reemplace.',
          'Nuestra <a href="/industrias/diseno-web-navieras-servicios-maritimos-panama/">página de diseño web para navieras y servicios marítimos</a> entra en el detalle completo de cómo estructuramos esa evaluación por tipo de comprador. Aquí nos enfocamos en las cuatro decisiones de contenido que, en nuestra experiencia, más pesan a la hora de ganar o perder ese primer filtro.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Las credenciales que de verdad deciden el contrato',
        intro: 'Un comprador internacional no puede visitar tus instalaciones antes de decidir. Todo lo que necesita verificar tiene que estar publicado, con el dato exacto, no como adjetivo.',
        items: [
          'Certificaciones y licencias con número y fecha de vigencia, no solo el logo del sello',
          'Capacidad de carga y composición de la flota: cuántas unidades, qué capacidad, qué antigüedad',
          'Cobertura real de puertos y fondeaderos: Balboa, Cristóbal, Colón, Manzanillo, o el punto exacto donde opera su buque',
          'Seguros de responsabilidad civil, con el monto de cobertura publicado',
          'Años de operación y el tipo de cliente que atiendes habitualmente (armador, agencia, naviera, industria)',
          'Contacto de emergencia 24/7 visible en cada página, no escondido dentro de "Contacto"',
          'Tiempo de respuesta comprometido para solicitudes urgentes',
          'Fotos reales de flota, equipo o instalaciones propias, nunca un banco de imágenes de un buque genérico',
        ],
      },
      {
        type: 'prose',
        h2: 'Contenido técnico específico, no "servicios marítimos integrales"',
        paragraphs: [
          '"Servicios marítimos integrales" o "soluciones logísticas a su medida" no le dicen nada a un comprador que ya sabe exactamente qué necesita. Ese comprador busca "reefer cargo agent Panama" o "underwater hull cleaning Balboa", no "servicios integrales", y una página que no usa ese vocabulario específico no aparece en su búsqueda ni responde su pregunta cuando llega.',
          'La especificidad no es un detalle de redacción: es lo que separa a un proveedor real de uno que subcontrata todo. Decir qué tipo de carga manejas —general, contenedorizada, granel sólido o líquido, refrigerada, sobredimensionada o de proyecto— y en qué puertos, es información que un intermediario no puede replicar con la misma seguridad.',
          '<strong>Cada servicio necesita su propia página, con su propio vocabulario técnico</strong>, de la misma forma en que cada área de práctica necesita la suya en la web de un abogado. Mezclar bunkering, husbandry, agenciamiento y servicios subacuáticos en una sola página de "Servicios" diluye a los cuatro y no compite bien en ninguno.',
        ],
      },
      {
        type: 'steps',
        h2: 'De lo genérico a lo específico, servicio por servicio',
        intro: 'La misma información se puede escribir en genérico o en específico. Solo una de las dos versiones convence a alguien que ya conoce el rubro.',
        items: [
          { h3: 'Agenciamiento naviero', text: 'No "gestionamos su buque en Panamá", sino qué trámites cubres exactamente —practicaje, recalada, despacho de zarpe— y en qué puertos.' },
          { h3: 'Bunkering y abastecimiento', text: 'No "abastecimiento de combustible", sino qué tipos de combustible, con qué capacidad de suministro y en qué fondeaderos.' },
          { h3: 'Husbandry y crew change', text: 'No "atención a la tripulación", sino qué gestionas en concreto: cambio de tripulación entre océanos, visas, alojamiento, transporte.' },
          { h3: 'Ship chandling y servicios subacuáticos', text: 'No "suministros y mantenimiento", sino qué suministras o inspeccionas, y con qué certificación respaldas ese trabajo.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El inglés no es un plus: es la mitad del negocio',
        paragraphs: [
          'Panamá compite por naturaleza en un mercado internacional: el Canal, el registro de buques más grande del mundo y una posición que ninguna otra plaza puede copiar hacen que buena parte del cliente potencial de una naviera o proveedor marítimo panameño esté, literalmente, en otro continente. Ese cliente busca en inglés, con la terminología del sector, y compara Panamá contra otras plazas antes de escribir.',
          'Una web solo en español lo deja fuera de la conversación por completo. Y una traducción automática suele ser peor que no tenerla: en un rubro técnico, un término mal traducido de forma literal se lee como amateurismo y descalifica antes de la primera línea.',
          'Aquí conviene ser honestos con el presupuesto: la versión en inglés no viene incluida por defecto en ningún paquete. Se cotiza como contenido adicional, sobre las páginas de servicio que sí vendes internacionalmente —no hace falta traducir el sitio completo—, y en la práctica suele ser lo que empuja un proyecto del rango de Página PYME hacia un proyecto corporativo a medida. No es un costo escondido: traducir bien contenido técnico es trabajo real, y cobrarlo aparte es más honesto que subirlo al precio base sin decirlo.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie va a visitar tus oficinas antes de decidir si te contrata.',
        strong: 'Tu web hace esa evaluación completa, en los dos idiomas, o la pierdes ante quien sí la hace.',
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir todavía en esta web',
        paragraphs: [
          'No toda naviera o proveedor marítimo necesita el mismo nivel de inversión, y decirlo con honestidad ahorra dinero mal gastado. Si tu operación trabaja prácticamente al cien por ciento a través de agentes o brókers externos —ellos consiguen la carga, ellos negocian, ellos mantienen la relación con el cliente final— y no tienes ningún interés en captar clientes de forma directa, invertir en una web bilingüe extensa, con página propia por servicio y por puerto, es pagar por una capacidad que no vas a usar.',
          'En ese caso, lo honesto es una presencia simple: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 más ITBMS que confirme que existes, muestre tus certificaciones básicas y dé un canal de contacto directo, es suficiente. El bróker que te subcontrata no decide por tu web; decide por la relación que ya tiene contigo.',
          'Donde sí se justifica ir más allá —una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> bilingüe, con página propia por línea de servicio y por cobertura de puerto— es cuando quieres reducir la dependencia de esos intermediarios y competir directo por el cliente internacional que hoy le está pagando el margen a una agencia de fuera. Es una decisión de negocio antes que de diseño: primero decide si quieres captar directo, después se diseña la web que lo soporta.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para navieras y servicios marítimos',
        items: [
          { q: '¿Realmente necesito la web en inglés?', a: 'Para la mayoría de las navieras y proveedores marítimos en Panamá, sí. El comprador internacional —armador, operador, agente o charterer— busca en inglés y compara Panamá contra otras plazas. Una web solo en español lo deja fuera, y una traducción automática de terminología técnica suele hacer más daño que no tenerla.' },
          { q: '¿La versión en inglés está incluida en el paquete de Página PYME?', a: 'No. Ningún paquete incluye por defecto un segundo idioma: se cotiza como contenido adicional, sobre las páginas de servicio que vendes internacionalmente. En la práctica, sumar inglés técnico suele llevar el proyecto del rango de Página PYME ($950) a un proyecto corporativo a medida (desde $2,900).' },
          { q: '¿Cuánto cuesta la web de una naviera o proveedor marítimo en Panamá?', a: 'Depende de cuántos servicios y puertos vas a documentar y de si necesitas inglés. Una landing simple para confirmar presencia parte de $550; una Página PYME de 8 a 12 páginas en español parte de $950; con inglés técnico y varias líneas de servicio, casi siempre conviene un proyecto corporativo a medida desde $2,900. Todos los precios son en USD y no incluyen el 7% de ITBMS. El desglose completo está en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.' },
          { q: '¿Por qué publicar certificaciones con número y vigencia, y no solo el nombre?', a: 'Porque buena parte de las contrataciones en este rubro pasan por un proceso interno de aprobación de proveedor. La persona que te va a contratar necesita documentar por qué te eligió, y solo puede hacerlo con datos verificables. Un proveedor que publica el número y la vigencia pasa ese filtro; uno que solo pone el logo del sello, no.' },
          { q: '¿Sirve mencionar el Canal de Panamá y el registro de buques aunque no opere ahí directamente?', a: 'Sí, si lo traduces a algo concreto para el cliente: puede resolver un cambio de tripulación entre dos océanos, atender un buque en tránsito sin desviarlo o abastecer en una escala que igual iba a ocurrir. El dato suelto por sí solo no convence a nadie; el beneficio concreto que se deriva de él, sí.' },
          { q: '¿El precio de la web incluye hosting y mantenimiento?', a: 'No, son costos aparte y recurrentes. El <a href="/crecimiento/hosting-infraestructura-panama/">hosting</a> va de $225/año en un plan compartido a $550/año en VPS dedicado, según el tráfico que esperes. El <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento</a> mensual —actualizaciones, respaldos y monitoreo— va de $59 a $189/mes según qué tan grave sea para tu operación que el sitio se caiga. Si publicas un contacto de emergencia 24/7, que el sitio nunca esté caído es parte de esa misma credibilidad.' },
          { q: '¿Cuándo NO conviene invertir en esta web?', a: 'Cuando tu operación depende casi completamente de agentes o brókers externos que ya tienen la relación con el cliente final, y no te interesa captar de forma directa. Ahí una presencia simple y honesta basta; el gasto mayor solo se justifica cuando de verdad quieres competir por el cliente internacional que hoy paga el margen a alguien más.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-navieras-servicios-maritimos-panama', label: 'Diseño web para navieras y servicios marítimos' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que un armador o agente internacional pueda evaluar sin llamarte primero',
      wa: 'Hola, quiero una web para mi naviera o empresa de servicios marítimos en Panamá. ¿Me asesoran?',
    },
  },
];
