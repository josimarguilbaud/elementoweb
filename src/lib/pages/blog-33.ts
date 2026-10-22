/* BLOG — Lote 33: guía long-form sobre diseño web para navieras y servicios
   marítimos en Panamá. PageData con parent { slug: 'blog' }; el listado /blog
   la recoge por fecha y categoría. Enlaces internos solo a slugs reales del
   sitio (verificados contra industrias-3.ts, servicios.ts y crecimiento.ts). */
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
      alt: 'Ancla de barco, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El diseño web para navieras y servicios marítimos en Panamá gana contratos cuando publica credenciales verificables (certificaciones con número y vigencia, flota, puertos, seguros), una página técnica por servicio y una versión en inglés. En Elemento Web, una landing parte desde $550, una Web empresarial desde $1,250 y un proyecto bilingüe a medida desde $2,900.',
      'Un operador en Hamburgo, un agente en Singapur o un charterer en Houston busca «ship agency Panama» o «bunkering services Panama Canal» y compara certificaciones, cobertura de puertos y capacidad operativa en pantalla, en inglés, sin llamar a nadie. Esa comparación decide quién entra a la lista corta, y la mayoría de las webs del rubro la pierden con «servicios marítimos integrales» y certificaciones sin número ni vigencia.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué en servicios marítimos la web hace el trabajo de una visita?',
        paragraphs: [
          'En la mayoría de los rubros el cliente puede visitar el local, llamar o pedir una referencia antes de decidir. En servicios marítimos, casi nunca: el armador, el operador, el agente internacional o el charterer evalúa proveedores desde otro país, en otro huso horario y casi siempre en otro idioma. Lo único que tiene enfrente es tu web.',
          'Esa web es, en la práctica, todo el proceso de evaluación. Muchas veces el comprador debe justificar la contratación dentro de un proceso formal de aprobación de proveedor; si la información que necesita no está publicada con el detalle correcto, ninguna llamada de seguimiento la reemplaza. Nuestra página de <a href="/industrias/diseno-web-navieras-servicios-maritimos-panama/">diseño web para navieras y servicios marítimos</a> detalla cómo estructuramos esa evaluación por tipo de comprador.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué credenciales revisa un comprador marítimo antes de contratar?',
        intro: 'Todo lo que necesita verificar tiene que estar publicado con el dato exacto, no como adjetivo.',
        items: [
          'Certificaciones y licencias con número y fecha de vigencia, no solo el logo del sello',
          'Capacidad de carga y composición de la flota: cuántas unidades, qué capacidad, qué antigüedad',
          'Cobertura real de puertos y fondeaderos: Balboa, Cristóbal, Colón, Manzanillo, o el punto exacto donde opera su buque',
          'Seguros de responsabilidad civil, con el monto de cobertura publicado',
          'Años de operación y el tipo de cliente que atiendes (armador, agencia, naviera, industria)',
          'Contacto de emergencia 24/7 visible en cada página, no escondido dentro de «Contacto»',
          'Tiempo de respuesta comprometido para solicitudes urgentes',
          'Fotos reales de flota, equipo o instalaciones propias, nunca un buque genérico de banco de imágenes',
        ],
      },
      {
        type: 'prose',
        h2: 'Contenido técnico específico, no «servicios marítimos integrales»',
        paragraphs: [
          'El comprador que ya sabe qué necesita busca «reefer cargo agent Panama» o «underwater hull cleaning Balboa», no «servicios integrales». Una página sin ese vocabulario no aparece en su búsqueda ni responde su pregunta cuando llega. Decir qué carga manejas —general, contenedorizada, granel sólido o líquido, refrigerada, sobredimensionada o de proyecto— y en qué puertos es información que un intermediario no puede replicar con la misma seguridad.',
          '<strong>Cada servicio necesita su propia página, con su propio vocabulario técnico.</strong> Mezclar bunkering, husbandry, agenciamiento y servicios subacuáticos en una sola página de «Servicios» diluye a los cuatro y no compite bien en ninguno.',
        ],
      },
      {
        type: 'steps',
        h2: 'De lo genérico a lo específico, servicio por servicio',
        intro: 'La misma información escrita en genérico o en específico. Solo la segunda convence a alguien que conoce el rubro.',
        items: [
          { h3: 'Agenciamiento naviero', text: 'No «gestionamos su buque en Panamá», sino qué trámites cubres —practicaje, recalada, despacho de zarpe— y en qué puertos.' },
          { h3: 'Bunkering y abastecimiento', text: 'No «abastecimiento de combustible», sino qué tipos de combustible, con qué capacidad de suministro y en qué fondeaderos.' },
          { h3: 'Husbandry y crew change', text: 'No «atención a la tripulación», sino qué gestionas: cambio de tripulación entre océanos, visas, alojamiento, transporte.' },
          { h3: 'Ship chandling y servicios subacuáticos', text: 'No «suministros y mantenimiento», sino qué suministras o inspeccionas y con qué certificación respaldas ese trabajo.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Necesita una naviera en Panamá su web en inglés?',
        paragraphs: [
          'En la mayoría de los casos, sí. El Canal, el registro de buques más grande del mundo y una posición geográfica que ninguna otra plaza puede copiar hacen que buena parte del cliente potencial esté en otro continente. Ese cliente busca en inglés, con la terminología del sector, y compara Panamá contra otras plazas antes de escribir.',
          'Una web solo en español lo deja fuera. Una traducción automática suele ser peor: en un rubro técnico, un término traducido de forma literal se lee como amateurismo y descalifica antes de la primera línea.',
          'La versión en inglés no viene incluida por defecto en ningún paquete. Se cotiza como contenido adicional, solo sobre las páginas de servicio que vendes internacionalmente, y en la práctica suele llevar el proyecto de Web empresarial a un proyecto corporativo a medida. Traducir bien contenido técnico es trabajo real, y cobrarlo aparte es más transparente que subirlo al precio base sin decirlo.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de una naviera?',
        paragraphs: [
          'Si tu operación trabaja casi al cien por ciento a través de agentes o brókers externos —ellos consiguen la carga, negocian y mantienen la relación con el cliente final— y no te interesa captar clientes directos, una web bilingüe extensa con página por servicio y por puerto es pagar una capacidad que no vas a usar.',
          'Ahí basta una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 más ITBMS que confirme que existes, muestre tus certificaciones básicas y dé un canal de contacto directo. El bróker que te subcontrata decide por la relación que ya tiene contigo, no por tu web.',
          'Sí se justifica una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> bilingüe, con página por línea de servicio y por cobertura de puerto, cuando quieres reducir la dependencia de intermediarios y competir directo por el cliente internacional que hoy le paga el margen a una agencia de fuera. Primero se decide si quieres captar directo; después se diseña la web que lo soporta.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para navieras y servicios marítimos',
        items: [
          { q: '¿Realmente necesito la web en inglés?', a: 'Para la mayoría de las navieras y proveedores marítimos en Panamá, sí. El comprador internacional —armador, operador, agente o charterer— busca en inglés y compara Panamá contra otras plazas. Una web solo en español lo deja fuera, y una traducción automática de terminología técnica suele hacer más daño que no tenerla.' },
          { q: '¿La versión en inglés está incluida en el paquete de Web empresarial?', a: 'No. Ningún paquete incluye por defecto un segundo idioma: se cotiza como contenido adicional, sobre las páginas de servicio que vendes internacionalmente. En la práctica, sumar inglés técnico suele llevar el proyecto del rango de Web empresarial ($1,250) a un proyecto corporativo a medida (desde $2,900).' },
          { q: '¿Cuánto cuesta la web de una naviera o proveedor marítimo en Panamá?', a: 'Depende de cuántos servicios y puertos vas a documentar y de si necesitas inglés. Una landing simple para confirmar presencia parte de $550; una Web empresarial de hasta 6 páginas en español parte de $1,250; con inglés técnico y varias líneas de servicio, casi siempre conviene un proyecto corporativo a medida desde $2,900. Todos los precios son en USD y no incluyen el 7% de ITBMS. El desglose completo está en <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.' },
          { q: '¿Por qué publicar certificaciones con número y vigencia, y no solo el nombre?', a: 'Porque buena parte de las contrataciones en este rubro pasan por un proceso interno de aprobación de proveedor. La persona que te va a contratar necesita documentar por qué te eligió, y solo puede hacerlo con datos verificables. Un proveedor que publica el número y la vigencia pasa ese filtro; uno que solo pone el logo del sello, no.' },
          { q: '¿Sirve mencionar el Canal de Panamá y el registro de buques aunque no opere ahí directamente?', a: 'Sí, si lo traduces a algo concreto para el cliente: puede resolver un cambio de tripulación entre dos océanos, atender un buque en tránsito sin desviarlo o abastecer en una escala que igual iba a ocurrir. El dato suelto por sí solo no convence a nadie; el beneficio concreto que se deriva de él, sí.' },
          { q: '¿El precio de la web incluye hosting y mantenimiento?', a: 'No, son costos aparte y recurrentes. El <a href="/crecimiento/hosting-infraestructura-panama/">hosting</a> va de $225/año en un plan compartido a $550/año en VPS dedicado, según el tráfico que esperes. El <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento</a> mensual —actualizaciones, respaldos y monitoreo— va de $99 a $319/mes según qué tan grave sea para tu operación que el sitio se caiga. Si publicas un contacto de emergencia 24/7, que el sitio nunca esté caído es parte de esa misma credibilidad.' },
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
