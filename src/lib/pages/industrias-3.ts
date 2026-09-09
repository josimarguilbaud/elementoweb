/* SILO INDUSTRIAS (lote 3): los rubros propios de Panamá. Aduanas y Zona Libre,
   navieras y marítimo, cooperativas, aire acondicionado, seguridad e imprentas.
   Se eligieron por lo mismo: son nichos donde casi nadie ha escrito una página
   decente, así que la competencia real es muy baja, y son negocios que solo
   existen a esta escala aquí. Regla dura: contenido REAL por rubro. */
import type { PageData } from '../types';

const parent = { slug: 'industrias', label: 'Industrias' };

export const industrias3: PageData[] = [
  /* ---------- AGENCIAS DE ADUANA Y ZONA LIBRE ---------- */
  {
    slug: 'industrias/diseno-web-agencias-aduana-zona-libre-panama',
    parent,
    title: 'Diseño Web para Agencias de Aduana en Panamá | Zona Libre',
    description: 'Diseño web para agencias de aduana y empresas de Zona Libre de Colón: cotización de trámites, seguimiento de expedientes y captación de importadores.',
    h1: 'Diseño web para agencias de aduana y Zona Libre',
    breadcrumb: 'Aduanas y Zona Libre',
    heroImage: { src: '/images/industrias/diseno-web-agencias-aduana-zona-libre-panama.jpg', alt: 'Contenedores apilados en una zona franca panameña bajo luz tropical' },
    service: { type: 'Diseño web para agencias de aduana y Zona Libre' },
    lead: [
      'El importador que te busca tiene mercancía detenida o a punto de llegar. No está comparando filosofías de servicio: está buscando quién le contesta hoy y le explica qué sigue.',
      'Es un rubro donde casi ninguna agencia tiene web decente, y eso es una ventaja enorme para la que sí la tenga. Una página que explique bien los trámites, cotice rápido y deje ver el estado de un expediente compite contra agencias que todavía se venden por tarjeta de presentación.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una agencia de aduana',
        intro: 'El importador evalúa dos cosas: si sabes lo que haces y si vas a responder a tiempo.',
        items: [
          'Licencia de corredor de aduana y número de registro bien visibles',
          'Servicios explicados por trámite, no en jerga aduanera',
          'Formulario de cotización que pida lo justo para poder cotizar',
          'Plazo de respuesta comprometido y cumplido',
          'Seguimiento del expediente sin tener que llamar',
          'Cobertura: puertos, aeropuerto, Zona Libre, frontera',
          'Contenido que explique los trámites al importador primerizo',
          'Contacto directo por WhatsApp, que es como se trabaja el rubro',
        ],
      },
      {
        type: 'prose',
        h2: 'El importador primerizo y el recurrente no buscan lo mismo',
        paragraphs: [
          'A una agencia de aduana le llegan dos clientes muy distintos. El recurrente ya sabe cómo funciona todo: quiere precio, tiempo de despacho y que le contesten rápido. El primerizo no sabe nada, y está aterrado de que su mercancía se quede detenida por un error que ni sabe que puede cometer.',
          'Casi todas las webs del rubro le hablan solo al primero, con una lista de servicios en lenguaje técnico. El primerizo entra, no entiende nada, y llama a la agencia que le recomendó alguien.',
          'Ese primerizo es el cliente más valioso a largo plazo, porque una vez que encuentra una agencia que le explica, se queda años. Y captarlo es sorprendentemente fácil: basta con explicar lo que él está buscando en Google, que es "cómo importar a Panamá", "qué documentos necesito para desaduanar", "cuánto cuesta nacionalizar un contenedor".',
          '<strong>Ese contenido no lo está escribiendo nadie en el rubro.</strong> Diez páginas que expliquen bien los trámites que resuelves a diario capturan un tráfico que hoy se reparte entre foros y grupos de WhatsApp.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cotizar rápido y con lo justo es la ventaja competitiva del rubro',
        paragraphs: [
          'La decisión de con qué agencia trabajar se toma, muchas veces, con la primera respuesta que llega. El importador escribe a tres, y le da el trabajo a la que contestó primero con algo claro, no necesariamente a la más barata.',
          'El problema habitual es el formulario. O es un "contáctanos" genérico que no permite cotizar nada, o pide veinte datos que el importador primerizo no tiene a mano y abandona a la mitad.',
          'Lo que funciona es pedir lo mínimo para dar un número: tipo de mercancía, valor aproximado, origen, si es contenedor completo o carga suelta, y por dónde entra. El código arancelario y la documentación fina se piden después, cuando el cliente ya invirtió tiempo en la conversación.',
          'Y publicar el plazo de respuesta. <strong>Decir "cotizamos en menos de 4 horas hábiles" y cumplirlo diferencia más que cualquier descripción de servicios</strong>, porque es exactamente lo que el importador está midiendo sin decírtelo.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de agencia de aduana',
        intro: 'De la tarjeta de presentación a una web que capta importadores y descarga el teléfono.',
        items: [
          { h3: 'Trámites explicados', text: 'Armamos una página por trámite —importación, exportación, tránsito, reexportación desde Zona Libre— explicada para el importador, no para el gremio. Cada una compite por su propia búsqueda.' },
          { h3: 'Cotización que sí se completa', text: 'Formulario corto que pide lo justo para dar un número, con la documentación fina en un segundo paso. Llega ordenado a quien cotiza, no como un audio de tres minutos.' },
          { h3: 'Seguimiento de expediente', text: 'Consulta de estado con número de referencia, para que el cliente deje de llamar a preguntar en qué va su trámite y tu equipo recupere las horas del día.' },
          { h3: 'Credenciales visibles', text: 'Licencia, registro, años de operación y cobertura por punto de entrada. En un rubro donde conviven agencias serias con intermediarios, la evidencia separa.' },
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le habla la web de tu agencia',
        intro: 'Tres clientes con preocupaciones distintas que la misma página tiene que atender.',
        items: [
          { h3: 'Importador primerizo', text: 'No sabe qué documentos necesita ni cuánto va a costar. Busca a alguien que le explique el proceso completo antes de comprometerse. Se queda años con quien lo hace.' },
          { h3: 'Importador recurrente', text: 'Ya conoce el proceso. Compara tiempo de despacho, precio y sobre todo rapidez de respuesta. Cambia de agencia por una mala experiencia, no por precio.' },
          { h3: 'Empresa de Zona Libre', text: 'Necesita reexportación, manejo de inventario en zona franca y trámites de alto volumen. Evalúa capacidad operativa y respaldo, no tarifa por trámite.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La Zona Libre de Colón es un argumento que casi nadie usa',
        paragraphs: [
          'La Zona Libre de Colón es una de las zonas francas más grandes del hemisferio, y para una agencia que opera ahí es una ventaja competitiva concreta frente a cualquier operador regional. Y casi ninguna la comunica: aparece como una línea en la lista de servicios.',
          'Para el comprador regional que evalúa desde dónde distribuir a Centroamérica y el Caribe, lo que decide es la capacidad de reexportar rápido, mantener inventario sin nacionalizar y consolidar carga. Si tu agencia hace eso, merece una página propia explicándolo, no una viñeta.',
          'Lo mismo con la operación aduanera panameña en general: el hecho de que el país sea hub y de que exista infraestructura para mover carga rápido es contexto que un importador extranjero no tiene y que decide contrataciones.',
          'Y hay una consecuencia práctica: <strong>ese cliente busca en inglés</strong>. Una versión en inglés de las páginas de reexportación y logística de Zona Libre abre un mercado donde la competencia local es prácticamente nula.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: cotizaciones, tiempo de respuesta y cuántas cierran',
        paragraphs: [
          'Los tres números del negocio son cuántas solicitudes de cotización entraron, cuánto tardaste en responder cada una, y qué porcentaje terminó en trámite.',
          'El del tiempo de respuesta es el más accionable y casi nadie lo mide. En este rubro responder en dos horas contra responder al día siguiente cambia la tasa de cierre de forma dramática, porque el importador decide con las primeras respuestas que recibe.',
          'El segundo corte útil es por tipo de trámite y por punto de entrada. Saber que las consultas de aéreo cierran al doble que las marítimas, o que cierto puerto concentra la demanda, orienta dónde poner comercial.',
          'Y el volumen de consultas de estado de expediente, que mide cuántas horas de tu equipo se está ahorrando la web. Es la forma más directa de justificar lo que costó. Lo dejamos medido; el planteamiento en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'El importador no elige la agencia más barata: elige la que le contestó primero y le explicó qué sigue.',
        strong: 'Y eso se gana antes de la llamada, en la página que leyó.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué contenido trae importadores a una agencia de aduana?', a: 'El que explica los trámites en lenguaje del importador, no del gremio: "cómo importar a Panamá", "qué documentos necesito para desaduanar", "cuánto cuesta nacionalizar un contenedor". Nadie en el rubro lo está escribiendo y ese tráfico hoy se reparte entre foros y grupos de WhatsApp.' },
          { q: '¿Qué debe pedir el formulario de cotización?', a: 'Lo mínimo para dar un número: tipo de mercancía, valor aproximado, origen, si es contenedor completo o carga suelta y por dónde entra. El código arancelario y la documentación fina se piden después, cuando el cliente ya invirtió tiempo en la conversación.' },
          { q: '¿Vale la pena tener la web en inglés?', a: 'Para el cliente de Zona Libre y el importador regional, sí. Busca en inglés, evalúa desde dónde distribuir a Centroamérica y el Caribe, y la competencia local en ese idioma es prácticamente nula.' },
          { q: '¿Cómo dejo de recibir llamadas preguntando por el estado de un trámite?', a: 'Con una consulta de expediente por número de referencia. No hace falta integrar el sistema completo: basta con que el cliente vea el estado actual y el siguiente paso. Es lo que más horas libera al equipo.' },
          { q: '¿Debo publicar tarifas de mis servicios?', a: 'Los trámites de estructura estable pueden ir con un "desde". El resto se resuelve mejor con rapidez de cotización que con precio publicado, porque el importador decide más por tiempo de despacho y respuesta que por tarifa.' },
          { q: '¿Sirve la web si trabajo por referidos del gremio?', a: 'El referido igual te busca antes de llamar y compara lo que ve: licencia, años, cobertura. Y el contenido de trámites capta al importador primerizo, que no tiene quién lo refiera y que se queda años con quien le explica.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-logistica-transporte-panama', label: 'Web para Logística y Transporte' },
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Web para Importadoras' },
          { slug: 'industrias/diseno-web-navieras-servicios-maritimos-panama', label: 'Web para Navieras y Marítimo' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu agencia de aduana', wa: 'Hola, quiero cotizar la web de mi agencia de aduana o empresa de Zona Libre.' },
  },

  /* ---------- NAVIERAS Y SERVICIOS MARITIMOS ---------- */
  {
    slug: 'industrias/diseno-web-navieras-servicios-maritimos-panama',
    parent,
    title: 'Diseño Web para Navieras y Servicios Marítimos en Panamá',
    description: 'Diseño web para navieras, agencias navieras y servicios marítimos en Panamá: credenciales, cobertura de puertos y captación de clientes internacionales.',
    h1: 'Diseño web para navieras y servicios marítimos',
    breadcrumb: 'Navieras y Marítimo',
    heroImage: { src: '/images/industrias/diseno-web-navieras-servicios-maritimos-panama.jpg', alt: 'Buque de carga atravesando una esclusa al atardecer' },
    service: { type: 'Diseño web para navieras y servicios marítimos' },
    lead: [
      'Tu cliente casi nunca está en Panamá. Es un armador, un operador o un agente que evalúa proveedores desde otro país, en otro idioma y en otro huso horario, y lo único que puede evaluar antes de escribirte es tu web.',
      'Panamá tiene el registro de buques más grande del mundo y una posición que ninguna otra plaza puede copiar. Es una ventaja enorme que casi ningún proveedor marítimo panameño comunica, porque sigue vendiéndose como si el cliente ya lo supiera todo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de un proveedor marítimo',
        intro: 'Un cliente internacional decide con la evidencia que encuentra, sin llamar a nadie primero.',
        items: [
          'Versión en inglés, no una traducción automática',
          'Licencias, registros y certificaciones con número y vigencia',
          'Cobertura por puerto: Balboa, Cristóbal, Colón, Manzanillo, fondeaderos',
          'Servicios explicados con el vocabulario del sector, en ambos idiomas',
          'Flota, equipo o instalaciones propias con fotos reales',
          'Contacto de emergencia 24/7 bien visible, que en este rubro se usa',
          'Años de operación y tipo de clientes atendidos',
          'Tiempos de respuesta comprometidos para solicitudes urgentes',
        ],
      },
      {
        type: 'prose',
        h2: 'Si tu web está solo en español, no existes para tu mejor cliente',
        paragraphs: [
          'El comprador de servicios marítimos rara vez es panameño. Es un armador griego, un operador alemán, un agente en Singapur o un charterer en Houston. Busca en inglés, con terminología del sector, y compara proveedores de varias plazas a la vez.',
          'Una web solo en español lo deja fuera por completo, y una traducción automática es casi peor: en un rubro técnico, la terminología mal traducida se lee como amateurismo y descalifica antes de la primera línea.',
          'La versión en inglés no es una capa encima: es la versión principal para buena parte del negocio. Y no hace falta traducir todo el sitio, sino las páginas de los servicios que sí vendes internacionalmente, con el vocabulario correcto —bunkering, husbandry, crew change, ship chandling, underwater services—.',
          '<strong>Ahí está la competencia real y ahí casi ningún proveedor panameño compite bien</strong>, lo que deja el terreno a agencias internacionales que subcontratan localmente y se quedan el margen.',
        ],
      },
      {
        type: 'prose',
        h2: 'Panamá es tu argumento y casi nadie lo usa',
        paragraphs: [
          'La posición de Panamá en el negocio marítimo es un hecho que da ventaja competitiva: el Canal, el registro de buques más grande del mundo por tonelaje abanderado, puertos en ambos océanos y una infraestructura de servicios construida alrededor de eso.',
          'Para el cliente internacional, esos hechos se traducen en cosas concretas: puede atender un buque en tránsito sin desviarlo, resolver un cambio de tripulación entre océanos, o hacer un abastecimiento en una escala que igual iba a ocurrir. Eso vale dinero y tiempo, y hay que decirlo con esos términos.',
          'Casi ninguna web del rubro lo explica. Se asume que el cliente ya lo sabe, y muchos lo saben; pero el que está comparando Panamá contra otra plaza necesita ver el argumento escrito para poder justificarlo internamente.',
          'También cuenta el respaldo local. <strong>Un cliente que sabe que hay alguien en Panamá respondiendo a las tres de la mañana cuando su buque tiene un problema paga más</strong> que por un proveedor sin presencia real, y esa diferencia se comunica en la web o no se comunica en ningún lado.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de servicios marítimos',
        intro: 'Una web que trabaje para el cliente que nunca va a visitar tus oficinas.',
        items: [
          { h3: 'Bilingüe de verdad', text: 'Español e inglés con terminología correcta del sector, no traducción automática. Cada idioma con su propia estructura de URL, para que posicione en ambas búsquedas.' },
          { h3: 'Servicios por categoría', text: 'Una página por línea de servicio con el vocabulario que usa el comprador internacional, para competir en las búsquedas donde hoy ganan agencias de fuera.' },
          { h3: 'Credenciales y cobertura', text: 'Licencias, certificaciones con vigencia, puertos cubiertos y capacidad operativa con fotos reales de equipo e instalaciones. Es lo que sostiene una decisión a distancia.' },
          { h3: 'Contacto que funciona 24/7', text: 'Canal de urgencia visible y funcionando fuera de horario panameño, porque los buques no operan en horario de oficina.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Quién evalúa tu web antes de escribirte',
        intro: 'Tres compradores distintos, todos decidiendo a distancia.',
        items: [
          { h3: 'Armador u operador', text: 'Evalúa capacidad, cobertura y respaldo. Necesita saber que puedes resolver en ambos océanos y que hay alguien disponible cuando su buque tiene un problema.' },
          { h3: 'Agente internacional', text: 'Busca un socio local confiable a quien subcontratar. Le importan las credenciales, la trazabilidad y la calidad de la comunicación en inglés.' },
          { h3: 'Charterer o trader', text: 'Decide por tiempo y por certeza. Compara plazas y necesita el argumento de por qué resolver en Panamá le sale mejor que desviarse.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Las certificaciones no son un adorno: son el filtro de entrada',
        paragraphs: [
          'En el negocio marítimo, buena parte de las contrataciones pasan por un proceso de aprobación de proveedor. Alguien dentro de la empresa cliente tiene que documentar por qué te eligió, y esa documentación se arma con lo que encuentre publicado.',
          'Por eso las licencias, registros, certificaciones de calidad y seguros deben estar en una página propia, con número y vigencia, no mencionados de pasada. Un proveedor que las publica pasa filtros que otro con el mismo servicio no pasa, simplemente porque el comprador no pudo verificarlo.',
          'Lo mismo con los seguros de responsabilidad y las coberturas. Publicar hasta qué monto respondes y qué cubre no ahuyenta clientes: ahuyenta a los que iban a descubrirlo después y generar un conflicto.',
          'Y conviene mostrar la operación real. <strong>Fotos propias de lanchas, equipos, bodegas o talleres separan a un operador con activos de un intermediario</strong>, que en este rubro es una distinción que el cliente internacional busca activamente.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: solicitudes internacionales y de dónde vienen',
        paragraphs: [
          'La métrica que importa no es el tráfico sino cuántas solicitudes llegaron, de qué país y de qué servicio. En un negocio de pocas operaciones de alto valor, una sola consulta buena puede valer más que un año de visitas.',
          'El corte geográfico es el más revelador. Muchos proveedores panameños descubren al medir que reciben interés de países que ni estaban trabajando comercialmente, y esa es información que ningún vendedor iba a traer solo.',
          'El segundo corte es idioma: qué porcentaje de las solicitudes llegó por la versión en inglés. Suele ser mucho mayor de lo esperado y es el argumento definitivo para mantenerla actualizada en vez de dejarla envejecer.',
          'Y el tiempo de respuesta, que en un rubro con clientes en otros husos horarios decide contrataciones. Lo dejamos medido en un tablero corto; el planteamiento en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Tu cliente decide desde otro continente, en otro idioma, sin llamarte primero.',
        strong: 'Tu web no es la vitrina: es toda la evaluación.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Realmente necesito la web en inglés?', a: 'Para este rubro no es opcional. El comprador es un armador, operador o agente de otro país que busca en inglés con terminología del sector. Una web solo en español lo deja fuera, y una traducción automática se lee como amateurismo en un rubro técnico.' },
          { q: '¿Traduzco todo el sitio?', a: 'No hace falta. Sí las páginas de los servicios que vendes internacionalmente, con el vocabulario correcto del sector. Cada idioma con su propia estructura de URL para que posicione en ambas búsquedas.' },
          { q: '¿Por qué publicar certificaciones con número y vigencia?', a: 'Porque buena parte de las contrataciones pasan por un proceso de aprobación de proveedor, y alguien dentro de la empresa cliente tiene que documentar por qué te eligió. Si no puede verificarlo en tu web, no pasas el filtro aunque tengas el servicio.' },
          { q: '¿Qué diferencia a un operador de un intermediario a ojos del cliente?', a: 'Los activos visibles. Fotos propias de lanchas, equipos, bodegas o talleres, con capacidad operativa descrita. Es una distinción que el comprador internacional busca activamente porque afecta su riesgo.' },
          { q: '¿Sirve mencionar el Canal y el registro de buques?', a: 'Es tu argumento y casi nadie lo usa. Pero traducido a lo concreto: atender un buque en tránsito sin desviarlo, resolver un cambio de tripulación entre océanos, abastecer en una escala que igual iba a ocurrir. El cliente que compara plazas necesita ese argumento escrito para justificarlo internamente.' },
          { q: '¿Qué dato me sorprenderá al medir?', a: 'El origen geográfico de las consultas. Muchos proveedores panameños descubren interés de países que no estaban trabajando comercialmente, información que ningún vendedor iba a traer por su cuenta.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-agencias-aduana-zona-libre-panama', label: 'Web para Agencias de Aduana' },
          { slug: 'industrias/diseno-web-logistica-transporte-panama', label: 'Web para Logística y Transporte' },
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Web para Importadoras' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu empresa marítima', wa: 'Hola, quiero cotizar la web de mi naviera o empresa de servicios marítimos.' },
  },

  /* ---------- COOPERATIVAS Y FINANCIERAS ---------- */
  {
    slug: 'industrias/diseno-web-cooperativas-financieras-panama',
    parent,
    title: 'Diseño Web para Cooperativas y Financieras en Panamá',
    description: 'Diseño web para cooperativas de ahorro y crédito y financieras en Panamá: simulador de préstamo, afiliación en línea, transparencia de tasas y confianza.',
    h1: 'Diseño web para cooperativas y financieras',
    breadcrumb: 'Cooperativas y Financieras',
    heroImage: { src: '/images/industrias/diseno-web-cooperativas-financieras-panama.jpg', alt: 'Dos personas conversando frente a frente en una oficina comunitaria sencilla' },
    service: { type: 'Diseño web para cooperativas de ahorro y crédito' },
    lead: [
      'Tu socio no es un cliente: es dueño de la cooperativa. Eso cambia todo lo que la web tiene que comunicar, y es justo lo que las webs del rubro suelen olvidar cuando copian el tono de un banco.',
      'La gente llega buscando una cosa muy concreta: cuánto le prestan, a qué tasa y qué necesita para afiliarse. Si esas tres respuestas no están, se va a la financiera que sí las publica, aunque cobre más.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una cooperativa o financiera',
        intro: 'Todo lo que alguien pregunta antes de acercarse a una sucursal.',
        items: [
          'Tasas y condiciones publicadas por tipo de préstamo',
          'Simulador de cuota que funcione en el celular',
          'Requisitos de afiliación claros y en lenguaje simple',
          'Registro ante la autoridad correspondiente bien visible',
          'Beneficios reales de ser socio, no frases de folleto',
          'Estados financieros y asamblea: la transparencia que un socio-dueño espera',
          'Ubicación y horario de cada sucursal',
          'Formulario de solicitud que no pida datos sensibles de más',
        ],
      },
      {
        type: 'prose',
        h2: 'El simulador de cuota es la página más visitada, si existe',
        paragraphs: [
          'La pregunta que trae a casi toda persona a la web de una cooperativa o financiera es la misma: "si pido tanto, ¿cuánto pago al mes?". No es una pregunta de curiosidad: es la que determina si la persona sigue adelante o abandona.',
          'Cuando esa respuesta no está publicada, el interesado tiene que llamar o ir a una sucursal solo para averiguar un número. La mayoría no lo hace: busca otra opción que se lo diga de una vez, y esa comparación se pierde antes de empezar.',
          'Un simulador simple —monto, plazo, tipo de préstamo, y la cuota estimada— resuelve eso y hace algo más: filtra. Quien ve la cuota y sigue adelante llega a la sucursal con la expectativa correcta, y el ejecutivo deja de gastar el día explicando números básicos.',
          '<strong>Y tiene que funcionar bien en el celular</strong>, porque es donde ocurre esa consulta, muchas veces de noche y con la calculadora del teléfono al lado.',
        ],
      },
      {
        type: 'prose',
        h2: 'Un socio no es un cliente, y la web debería notarlo',
        paragraphs: [
          'La diferencia entre una cooperativa y un banco no es de tamaño: es de propiedad. El socio es dueño, participa en la asamblea y recibe excedentes. Es una diferencia enorme y la mayoría de las webs del rubro la desperdician copiando el lenguaje corporativo de la banca.',
          'Comunicar bien esa diferencia es la ventaja competitiva más grande que tiene una cooperativa, y se hace con hechos concretos, no con adjetivos: qué se decide en asamblea, cómo se reparten los excedentes, qué beneficios recibe el socio que no recibiría en un banco, y qué se hizo el año pasado con los aportes.',
          'La transparencia va en la misma dirección. Publicar estados financieros, memorias y convocatorias de asamblea no es una obligación incómoda: es la prueba visible de que la cooperativa funciona como dice funcionar, y es exactamente lo que un socio potencial quiere revisar antes de afiliarse.',
          '<strong>El banco no puede copiar eso.</strong> Es lo único que compite con un banco sin entrar en una guerra de tasas que la cooperativa no puede ganar.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de cooperativa',
        intro: 'De un folleto en línea a una herramienta que afilia y descarga las sucursales.',
        items: [
          { h3: 'Simulador y tasas visibles', text: 'Publicamos condiciones por producto y montamos un simulador que funcione en el celular, para que la primera pregunta se responda sola.' },
          { h3: 'Afiliación que avanza en línea', text: 'Requisitos claros y el inicio de la solicitud desde la web, con la documentación en un segundo paso. Menos viajes a sucursal solo para preguntar.' },
          { h3: 'Transparencia publicada', text: 'Estados financieros, memorias y convocatorias en un lugar propio y fácil de encontrar. Es la prueba que un socio-dueño espera poder revisar.' },
          { h3: 'Datos tratados como corresponde', text: 'HTTPS, formularios que piden el mínimo y almacenamiento con acceso controlado. Lo financiero y lo personal exigen ese cuidado.' },
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le habla tu web',
        intro: 'Tres personas con necesidades distintas que llegan por el mismo sitio.',
        items: [
          { h3: 'El que necesita un préstamo', text: 'Llega con una necesidad concreta y una urgencia. Quiere saber cuánto le prestan, a qué tasa, en cuánto tiempo y qué papeles necesita. Si no lo encuentra, sigue buscando.' },
          { h3: 'El que quiere ahorrar', text: 'Compara rendimiento y seguridad. Necesita entender cómo funciona el ahorro en la cooperativa, qué respaldo tiene y qué pasa si necesita retirar antes.' },
          { h3: 'El socio actual', text: 'Ya está adentro. Quiere consultar su estado, pagar, ver convocatorias y resolver trámites sin ir a la sucursal. Es al que menos atienden las webs del rubro.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Datos financieros: lo que la web pide y cómo lo guarda',
        paragraphs: [
          'Una solicitud de crédito en línea recoge información delicada: cédula, ingresos, lugar de trabajo, a veces referencias personales. Son datos personales bajo la <strong>Ley 81 de 2019 de Protección de Datos Personales</strong> y hay que tratarlos en consecuencia.',
          'La primera decisión es de diseño, no legal: pedir el mínimo en el primer paso. Un formulario que exige la vida completa antes de dar una respuesta convierte mal y acumula información sensible que después hay que custodiar. Nombre, monto, plazo y contacto bastan para iniciar; el resto se pide cuando ya hay una conversación.',
          'La segunda es dónde aterriza. No en un correo compartido de la oficina ni en el WhatsApp personal de un ejecutivo, sino en un buzón institucional con acceso controlado y registro de quién atendió cada solicitud.',
          'Montamos esa parte técnica: certificado, formularios con aviso de privacidad y almacenamiento con acceso controlado. <strong>El texto legal y las políticas las revisa el asesor de la cooperativa</strong>, que conoce su marco regulatorio.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: solicitudes, afiliaciones y consultas evitadas',
        paragraphs: [
          'Los números que importan son cuántas solicitudes de préstamo entraron por la web, de qué producto, y cuántas afiliaciones se iniciaron en línea.',
          'El corte por producto es el que ordena las decisiones. Si el préstamo personal concentra las solicitudes y el hipotecario no se mueve, eso dice qué página ampliar y en qué conviene comunicar más, y suele contradecir lo que el equipo intuía.',
          'El segundo número, menos obvio, es cuántas consultas dejó de recibir la sucursal. Si el simulador y las tasas publicadas eliminan cien llamadas al mes de "¿cuánto pago?", eso es tiempo de ejecutivos que se libera para atender solicitudes reales, y se puede calcular en dinero.',
          'Y el uso del área de socio: cuántos entran, qué consultan y qué trámite hacen. Es lo que dice si la web está sirviendo también a quien ya está adentro. Lo dejamos medido; el detalle en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Un banco no puede decir que sus clientes son sus dueños. Tu cooperativa sí.',
        strong: 'Esa es la ventaja que la web tiene que comunicar, y casi ninguna lo hace.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Debo publicar las tasas de interés?', a: 'Es la pregunta que trae a la gente a tu web. Si no la respondes, el interesado busca otra opción que sí lo haga, aunque cobre más. Publicar tasas y condiciones filtra y hace que quien llegue a la sucursal venga con la expectativa correcta.' },
          { q: '¿Vale la pena un simulador de cuota?', a: 'Suele ser la página más visitada del sitio. "Si pido tanto, ¿cuánto pago al mes?" determina si la persona sigue o abandona, y tiene que responderse en el celular, que es donde ocurre esa consulta.' },
          { q: '¿Cómo comunico la diferencia con un banco?', a: 'Con hechos, no adjetivos: qué se decide en asamblea, cómo se reparten los excedentes, qué beneficios tiene el socio que no tendría en un banco. Es lo único que compite con la banca sin entrar en una guerra de tasas que la cooperativa no puede ganar.' },
          { q: '¿Debo publicar los estados financieros?', a: 'Es exactamente lo que un socio-dueño espera poder revisar antes de afiliarse. Publicar memorias, estados y convocatorias no es una obligación incómoda: es la prueba visible de que la cooperativa funciona como dice.' },
          { q: '¿Qué datos debe pedir la solicitud en línea?', a: 'El mínimo en el primer paso: nombre, monto, plazo y contacto. Un formulario que exige la vida completa antes de dar respuesta convierte mal y acumula información sensible bajo la Ley 81 de 2019 que después hay que custodiar.' },
          { q: '¿La web sirve también para el socio actual?', a: 'Es a quien menos atienden las webs del rubro y el que más la usaría: consultar estado, pagar, ver convocatorias y resolver trámites sin ir a la sucursal. Cada trámite resuelto en línea es tiempo de ejecutivo liberado.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-seguros-corredores-panama', label: 'Web para Corredores de Seguros' },
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Web para Contadores' },
          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Web para Consultoras' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu cooperativa', wa: 'Hola, quiero cotizar la web de mi cooperativa o financiera.' },
  },

  /* ---------- AIRE ACONDICIONADO Y REFRIGERACION ---------- */
  {
    slug: 'industrias/diseno-web-aire-acondicionado-refrigeracion-panama',
    parent,
    title: 'Diseño Web para Aire Acondicionado y Refrigeración en Panamá',
    description: 'Diseño web para empresas de aire acondicionado y refrigeración en Panamá: emergencias, contratos de mantenimiento y captación de clientes comerciales.',
    h1: 'Diseño web para aire acondicionado y refrigeración',
    breadcrumb: 'Aire Acondicionado',
    heroImage: { src: '/images/industrias/diseno-web-aire-acondicionado-refrigeracion-panama.jpg', alt: 'Manos de un técnico trabajando en la tubería de cobre de un condensador exterior' },
    service: { type: 'Diseño web para empresas de aire acondicionado y refrigeración' },
    lead: [
      'En Panamá el aire acondicionado no es un lujo: es infraestructura. Cuando se daña, nadie investiga con calma. Busca en el celular quién puede ir hoy y llama al primero que le dé una respuesta clara.',
      'Ese momento de urgencia es donde se gana o se pierde el cliente, y también donde empieza el negocio de verdad, que no es la reparación puntual sino el contrato de mantenimiento que se repite todos los años.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una empresa de A/C',
        intro: 'La mitad de tus clientes llega con un equipo dañado y poca paciencia.',
        items: [
          'Teléfono tocable desde el celular, sin hacer scroll',
          'Si se atienden emergencias y en qué horario, dicho sin ambigüedad',
          'Servicios separados: instalación, mantenimiento, reparación, contratos',
          'Marcas y tipos de equipo que se atienden, incluido comercial',
          'Precio o rango de la visita de diagnóstico',
          'Zonas de cobertura, incluido si se atiende el interior',
          'Técnicos con certificación y años de oficio visibles',
          'Garantía del trabajo: tiempo y qué cubre exactamente',
        ],
      },
      {
        type: 'prose',
        h2: 'La emergencia trae al cliente; el mantenimiento lo conserva',
        paragraphs: [
          'Casi toda empresa de aire acondicionado gana su cliente en una emergencia y lo pierde después. El equipo se daña, alguien busca en Google, llama, se resuelve el problema, y ahí termina la relación hasta la próxima falla, que muchas veces resuelve otro.',
          'El negocio estable no está ahí. Está en el contrato de mantenimiento preventivo: limpieza, revisión de gas, chequeo eléctrico dos o tres veces al año, con un cliente que paga una cuota conocida y que además falla mucho menos.',
          'La web es el mejor lugar para vender eso, porque permite explicar lo que en una llamada de emergencia nadie escucha: cuánto cuesta al año un mantenimiento contra una reparación mayor, cuánto se alarga la vida del equipo, cuánto baja el consumo eléctrico de un equipo limpio.',
          '<strong>Y el momento de proponerlo no es durante la emergencia: es después.</strong> Un recordatorio automático a los tres meses de una reparación, ofreciendo el plan de mantenimiento, convierte mucho mejor que cualquier venta hecha con el cliente sudando.',
        ],
      },
      {
        type: 'prose',
        h2: 'El cliente comercial es otro negocio, con otro ciclo y otro margen',
        paragraphs: [
          'Una empresa de A/C atiende residencias y también restaurantes, supermercados, clínicas, oficinas y bodegas. Son negocios que se parecen poco: en lo comercial hay cuartos fríos, chillers, sistemas centralizados, y una consecuencia distinta cuando algo falla.',
          'Para un supermercado, un cuarto frío dañado no es incomodidad: es mercancía perdida por hora. Ese cliente no compara precio de visita, compara tiempo de respuesta y capacidad técnica, y paga contratos anuales que sostienen una empresa entera.',
          'Casi ninguna web del rubro separa los dos mundos. Todo aparece junto, con lenguaje residencial, y el gerente de mantenimiento de una cadena no encuentra señales de que puedas atenderlo: ni equipos industriales mencionados, ni certificaciones, ni referencias comerciales.',
          'Separarlo es simple y cambia el tipo de cliente que llega. <strong>Una página para residencial y otra para comercial e industrial</strong>, cada una con su vocabulario, sus equipos y su forma de contratar.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de aire acondicionado',
        intro: 'Para que la emergencia te encuentre y el mantenimiento se venda solo.',
        items: [
          { h3: 'Lista para la urgencia', text: 'Teléfono visible sin scroll, horario de emergencias claro y ficha de Google al día. En una falla, la velocidad de contacto decide quién gana el trabajo.' },
          { h3: 'Residencial y comercial separados', text: 'Dos rutas con su propio vocabulario y sus propios equipos, para que el gerente de mantenimiento vea que puedes atenderlo y el dueño de casa no se pierda.' },
          { h3: 'El contrato como producto', text: 'Página propia del plan de mantenimiento, con qué incluye, cada cuánto se visita y qué cuesta al año frente a una reparación mayor.' },
          { h3: 'Recordatorios que traen de vuelta', text: 'Automatización que avisa al cliente cuando toca el siguiente mantenimiento. Es lo que convierte una reparación suelta en un cliente de años.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Con qué llega cada cliente',
        intro: 'Tres situaciones distintas que la misma web tiene que resolver.',
        items: [
          { h3: 'La emergencia residencial', text: 'Equipo dañado, calor, ninguna paciencia. Quiere saber si vas hoy y cuánto cuesta la visita. Decide en minutos y por teléfono.' },
          { h3: 'La instalación planificada', text: 'Casa nueva o remodelación. Compara marcas, capacidades y precio instalado. Investiga con calma y pide varias cotizaciones.' },
          { h3: 'El contrato comercial', text: 'Gerente de mantenimiento de un local, cadena o edificio. Evalúa capacidad técnica, tiempo de respuesta y respaldo. Firma anual y no cambia si lo atienden bien.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Explicar el consumo eléctrico vende más que hablar de marcas',
        paragraphs: [
          'La factura eléctrica es una preocupación constante en Panamá, y el aire acondicionado es la mayor parte de ella en casi cualquier casa u oficina. Sin embargo, casi ninguna empresa del rubro usa eso como argumento en su web.',
          'Contenido que explique lo que la gente realmente busca —cuánto consume un equipo según su capacidad, qué diferencia hay entre uno convencional y uno inverter, cuánto se ahorra de verdad, cada cuánto hay que limpiar para no gastar de más— captura búsquedas con mucho volumen y muy poca competencia bien hecha.',
          'Ese contenido además vende sin parecer venta. El que lee cuánto le está costando tener un equipo sucio entiende solo por qué le conviene el mantenimiento, y llega convencido en vez de haber sido convencido.',
          '<strong>Y funciona para los dos negocios</strong>: el dueño de casa que quiere bajar la factura y el gerente que tiene que justificar el gasto de mantenimiento ante su jefe usan el mismo argumento.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: llamadas de urgencia y contratos firmados',
        paragraphs: [
          'El primer número es cuántas llamadas salieron del botón de la web, porque en este rubro la mayoría del contacto es telefónico y medir solo formularios subestima muchísimo el trabajo del sitio.',
          'El segundo, y el que define la salud del negocio, es cuántos contratos de mantenimiento se firmaron y qué porcentaje de los clientes de emergencia terminó en contrato. Ese porcentaje es la métrica más importante de toda la operación y casi nadie la tiene.',
          'Si es bajo, el problema rara vez es el precio del plan: es que nadie volvió a contactar al cliente después de la reparación. Se arregla con recordatorios automáticos, no con publicidad.',
          'Y conviene separar residencial de comercial, porque tienen ciclos y márgenes distintos y mezclarlos esconde cuál está creciendo. Lo dejamos medido; el detalle en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'La reparación paga el mes. El contrato de mantenimiento paga el año.',
        strong: 'Y es lo único de los dos que se puede vender desde una web.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué es lo primero que debe tener mi web?', a: 'El teléfono tocable sin hacer scroll y si atiendes emergencias, dicho sin ambigüedad. La mitad de tus clientes llega con un equipo dañado y decide en minutos: si tiene que buscar el número, llama a otro.' },
          { q: '¿Cómo vendo contratos de mantenimiento?', a: 'No durante la emergencia, sino después. Una página propia del plan con qué incluye y qué cuesta al año frente a una reparación mayor, más un recordatorio automático a los tres meses de la reparación. Ahí es cuando el cliente escucha.' },
          { q: '¿Conviene separar residencial de comercial?', a: 'Son dos negocios distintos. Para un supermercado, un cuarto frío dañado es mercancía perdida por hora: no compara precio de visita, compara tiempo de respuesta. Si tu web habla solo en lenguaje residencial, el gerente de mantenimiento no ve que puedas atenderlo.' },
          { q: '¿Qué contenido trae clientes en este rubro?', a: 'El del consumo eléctrico. Cuánto consume un equipo según capacidad, qué diferencia hace un inverter, cuánto se ahorra de verdad, cada cuánto limpiar para no gastar de más. Mucho volumen de búsqueda y casi ninguna competencia bien hecha.' },
          { q: '¿Debo publicar el precio de la visita?', a: 'Al menos el de diagnóstico. Es la primera pregunta en una emergencia y no responderla hace que el cliente llame al siguiente. Además filtra al que buscaba una opinión gratis por teléfono.' },
          { q: '¿Cuál es la métrica más importante?', a: 'Qué porcentaje de los clientes de emergencia terminó firmando un contrato de mantenimiento. Casi nadie la tiene, y cuando es baja el problema casi nunca es el precio del plan: es que nadie volvió a contactar al cliente después de la reparación.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Web para Ferreterías' },
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Web para Constructoras' },
          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu empresa de A/C', wa: 'Hola, quiero cotizar la web de mi empresa de aire acondicionado o refrigeración.' },
  },

  /* ---------- SEGURIDAD Y VIGILANCIA ---------- */
  {
    slug: 'industrias/diseno-web-seguridad-vigilancia-panama',
    parent,
    title: 'Diseño Web para Empresas de Seguridad y Vigilancia en Panamá',
    description: 'Diseño web para empresas de seguridad y vigilancia en Panamá: licencias visibles, propuestas para licitaciones, monitoreo y captación de personal.',
    h1: 'Diseño web para empresas de seguridad y vigilancia',
    breadcrumb: 'Seguridad y Vigilancia',
    heroImage: { src: '/images/industrias/diseno-web-seguridad-vigilancia-panama.jpg', alt: 'Vestíbulo de un edificio comercial al amanecer con puesto de control vacío' },
    service: { type: 'Diseño web para empresas de seguridad y vigilancia' },
    lead: [
      'Nadie contrata seguridad por precio. Se contrata por confianza, y esa confianza se evalúa antes de la primera reunión, revisando si tu empresa se ve seria o improvisada.',
      'Es un rubro donde la web pesa doble: capta al cliente corporativo que va a pedir credenciales, y capta al personal que necesitas contratar todos los meses, que es el otro cuello de botella del negocio.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una empresa de seguridad',
        intro: 'Un comprador corporativo revisa todo esto antes de invitarte a cotizar.',
        items: [
          'Licencia de operación y registros del sector con número visible',
          'Años de operación y tipo de clientes atendidos',
          'Servicios separados: vigilancia física, monitoreo, escolta, tecnología',
          'Póliza de responsabilidad civil y coberturas',
          'Cómo se selecciona y capacita al personal',
          'Cobertura geográfica y capacidad de despliegue',
          'Canal de emergencia 24/7 visible y operativo',
          'Sección de empleo, porque el personal también te busca ahí',
        ],
      },
      {
        type: 'prose',
        h2: 'El comprador corporativo tiene que justificar por qué te eligió',
        paragraphs: [
          'La contratación de seguridad en una empresa mediana o grande no la decide una persona sola. Pasa por administración, por finanzas y a veces por un comité, y quien te propone tiene que documentar por qué tú y no otro.',
          'Esa documentación se arma con lo que encuentre publicado. Si tus licencias, tu póliza, tus años de operación y tu forma de seleccionar personal no están en la web, tu contacto no tiene con qué defenderte y la conversación se enfría sin que nadie te avise.',
          'Por eso la página de credenciales no es un trámite de imagen: es munición para tu comprador interno. Licencias con número y vigencia, cobertura de la póliza, procedimiento de selección, capacitación y supervisión, todo en un lugar fácil de encontrar y de enlazar.',
          '<strong>Y conviene tener material descargable.</strong> Un documento con capacidades y credenciales que el interno pueda adjuntar a su expediente de aprobación te mete en procesos donde de otro modo no entrarías.',
        ],
      },
      {
        type: 'prose',
        h2: 'Tu web también recluta, y esa es la mitad del negocio',
        paragraphs: [
          'La rotación es el problema estructural del rubro. Una empresa de seguridad necesita reclutar de forma constante, y el costo real de no lograrlo no es administrativo: es no poder tomar un contrato porque no hay con quién cubrirlo.',
          'La mayoría de las webs del sector ignora eso por completo. Toda la comunicación apunta al cliente corporativo, y el aspirante a oficial —que está buscando trabajo desde su celular— no encuentra nada, o encuentra un correo genérico donde mandar una hoja de vida que nadie va a leer.',
          'Una sección de empleo bien hecha cambia eso: qué se busca, qué requisitos hay, qué se ofrece en salario y beneficios, en qué zonas hay plazas, y un formulario simple que funcione en el teléfono. Nada complejo, pero publicado y actualizado.',
          '<strong>Y es tráfico gratis</strong>: "trabajo de seguridad en Panamá" y "vacantes de oficial de seguridad" son búsquedas con volumen alto y competencia casi nula, porque el rubro entero recluta por referidos y no publica nada.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de seguridad',
        intro: 'Para el comité que evalúa y para el oficial que quieres contratar.',
        items: [
          { h3: 'Credenciales que se pueden verificar', text: 'Licencias, registros, póliza y trayectoria en una página propia, fácil de enlazar y de adjuntar a un expediente de aprobación interno.' },
          { h3: 'Servicios por tipo de cliente', text: 'Residencial, comercial, industrial y corporativo tienen necesidades distintas. Una ruta para cada uno, con el lenguaje y las referencias que cada comprador espera.' },
          { h3: 'Sección de empleo activa', text: 'Vacantes por zona, requisitos, qué se ofrece y un formulario que funcione en el celular. Captura búsquedas de trabajo que hoy nadie está atendiendo.' },
          { h3: 'Solicitud de propuesta ordenada', text: 'Formulario que pide lo necesario para cotizar —tipo de instalación, turnos, cantidad de puestos, ubicación— y llega listo para trabajar.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Quién llega a tu web',
        intro: 'Tres visitantes con objetivos completamente distintos.',
        items: [
          { h3: 'El comprador corporativo', text: 'Necesita credenciales verificables y algo que pueda adjuntar a su expediente interno. Evalúa riesgo y respaldo antes que precio.' },
          { h3: 'El administrador de PH', text: 'Junta directiva de un edificio residencial. Compara propuestas, quiere saber cómo se supervisa al personal y qué pasa cuando alguien falla.' },
          { h3: 'El aspirante a oficial', text: 'Busca trabajo desde el celular. Quiere requisitos, salario, zona y una forma simple de aplicar. Hoy no encuentra nada en casi ninguna web del rubro.' },
        ],
      },
      {
        type: 'prose',
        h2: 'La tecnología es un servicio distinto, no un adorno del principal',
        paragraphs: [
          'Cámaras, control de acceso, alarmas y monitoreo remoto se han vuelto parte del negocio de seguridad, y muchas empresas los mencionan como una línea más dentro de la vigilancia física. Es un desperdicio, porque es un negocio con otro comprador y otro margen.',
          'Quien busca "instalación de cámaras de seguridad Panamá" o "monitoreo de alarmas" muchas veces no está buscando guardias. Es un cliente distinto, con un ticket distinto y una decisión mucho más rápida, y esa búsqueda no la captura una página de vigilancia física.',
          'Darle su propia página, con las tecnologías que instalas, qué incluye el monitoreo, si hay centro propio y cuál es el tiempo de respuesta ante una alarma, abre una línea de captación que hoy se está perdiendo.',
          'Y funciona en ambos sentidos: <strong>el cliente que empieza con cámaras suele terminar contratando vigilancia física</strong>, y el que tiene guardias suele necesitar tecnología. Publicarlos por separado permite que cada uno entre por donde estaba buscando.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: solicitudes de propuesta y aplicaciones de empleo',
        paragraphs: [
          'Hay que medir dos embudos separados, porque son dos negocios distintos que comparten la misma web.',
          'El comercial: cuántas solicitudes de propuesta entraron, de qué tipo de cliente y de qué servicio, y cuántas terminaron en contrato. El corte por tipo de instalación es el más útil, porque un contrato de PH residencial y uno industrial se ganan de formas muy distintas.',
          'El de reclutamiento: cuántas aplicaciones se recibieron por zona y cuántas terminaron en contratación. Si tienes plazas descubiertas y la web no está generando aplicaciones, ahí hay un problema que cuesta contratos, no solo tiempo de recursos humanos.',
          'Y el tiempo de respuesta a una solicitud de propuesta, que en corporativo pesa mucho. Lo dejamos todo medido en un tablero corto; el planteamiento en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'Tu contacto en la empresa cliente tiene que defenderte ante un comité que no te conoce.',
        strong: 'Le das con qué, o no te elige aunque quiera.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Por qué publicar licencias y pólizas en la web?', a: 'Porque quien te propone dentro de la empresa cliente tiene que documentar por qué te eligió, y arma esa documentación con lo que encuentre publicado. Si no está, no tiene con qué defenderte y la conversación se enfría sin que nadie te avise.' },
          { q: '¿Sirve la web para reclutar personal?', a: 'Es la mitad del negocio y casi nadie la usa así. "Trabajo de seguridad en Panamá" y "vacantes de oficial de seguridad" tienen volumen alto y competencia casi nula, porque el rubro entero recluta por referidos y no publica nada.' },
          { q: '¿Conviene separar la tecnología de la vigilancia física?', a: 'Sí. Quien busca "instalación de cámaras" o "monitoreo de alarmas" no está buscando guardias: es otro cliente, otro ticket y una decisión más rápida. Y luego cada uno suele terminar contratando el otro servicio.' },
          { q: '¿Qué debe pedir el formulario de solicitud de propuesta?', a: 'Tipo de instalación, cantidad de puestos, turnos y ubicación. Con eso se puede armar una propuesta seria. Pedir menos genera un ida y vuelta que enfría; pedir mucho más hace que abandonen.' },
          { q: '¿Publico tarifas por puesto?', a: 'No suele convenir, porque el precio depende de turnos, riesgo y requisitos. Lo que sí conviene publicar es cómo se estructura el costo y qué incluye —supervisión, reemplazos, equipo— que es lo que un comprador necesita para comparar propuestas de forma justa.' },
          { q: '¿Qué mido si tengo dos negocios en la misma web?', a: 'Dos embudos separados: solicitudes de propuesta por tipo de cliente, y aplicaciones de empleo por zona. Si tienes plazas descubiertas y la web no genera aplicaciones, eso cuesta contratos, no solo tiempo de recursos humanos.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Web para Constructoras' },
          { slug: 'industrias/diseno-web-logistica-transporte-panama', label: 'Web para Logística' },
          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Web para Consultoras' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu empresa de seguridad', wa: 'Hola, quiero cotizar la web de mi empresa de seguridad y vigilancia.' },
  },

  /* ---------- IMPRENTAS Y PUBLICIDAD ---------- */
  {
    slug: 'industrias/diseno-web-imprentas-publicidad-panama',
    parent,
    title: 'Diseño Web para Imprentas y Publicidad en Panamá',
    description: 'Diseño web para imprentas, gran formato y agencias de publicidad en Panamá: cotización en línea, envío de artes y captación de clientes corporativos.',
    h1: 'Diseño web para imprentas y publicidad',
    breadcrumb: 'Imprentas y Publicidad',
    heroImage: { src: '/images/industrias/diseno-web-imprentas-publicidad-panama.jpg', alt: 'Pliegos de vinil impreso apilados y enrollados en un taller de gran formato' },
    service: { type: 'Diseño web para imprentas y empresas de publicidad' },
    lead: [
      'Una imprenta se pasa el día cotizando. Llega una consulta por WhatsApp sin medidas, sin cantidad y sin material, alguien pregunta lo que falta, y el cliente ya pidió precio en otros dos lados.',
      'El trabajo está ahí, pero el proceso para conseguirlo consume más tiempo del que debería. Una web que cotice bien no reemplaza a tu vendedor: le quita de encima las cuarenta consultas al día que nunca iban a cerrar.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una imprenta',
        intro: 'El cliente corporativo y el particular preguntan lo mismo: cuánto, en cuánto tiempo y cómo mando el arte.',
        items: [
          'Catálogo de productos con medidas y materiales estándar',
          'Formulario de cotización que pida cantidad, medida y material',
          'Tiempos de entrega por tipo de trabajo, publicados',
          'Especificaciones de arte: formato, resolución, sangrado, curvas',
          'Forma de enviar archivos pesados sin depender de WhatsApp',
          'Trabajos realizados por categoría, con fotos propias',
          'Si hay instalación y en qué zonas',
          'Precio o rango en los productos de mayor rotación',
        ],
      },
      {
        type: 'prose',
        h2: 'La cotización es el cuello de botella de todo el rubro',
        paragraphs: [
          'Una consulta típica llega así: "cuánto cuestan unas banderolas". Sin medida, sin cantidad, sin material y sin fecha. Responder exige tres preguntas de vuelta, y en ese ida y vuelta se va el tiempo del vendedor y a menudo el cliente.',
          'La causa no es que el cliente sea desordenado: es que no sabe qué datos hacen falta. Nadie le dijo que la medida, la cantidad y el material cambian el precio por completo, ni que un banner de lona y uno de vinil son cosas distintas.',
          'Un formulario que le guíe —producto, medida, cantidad, material, acabado, fecha requerida— resuelve el problema de raíz. Llega la información completa desde el primer mensaje, y el vendedor pasa de investigar a cotizar.',
          '<strong>Y publicar precio en lo estándar corta la mitad del ruido.</strong> Tarjetas, volantes, banderolas y roll-ups en medidas típicas tienen precio calculable; publicarlo filtra al que solo preguntaba y deja al vendedor para el trabajo grande, que es donde está el margen.',
        ],
      },
      {
        type: 'prose',
        h2: 'El archivo del cliente es donde se pierden los días',
        paragraphs: [
          'El otro consumo silencioso de tiempo en una imprenta es el arte que llega mal. Baja resolución, en RGB, sin sangrado, con textos sin convertir a curvas, o una foto de un diseño tomada con el celular. Cada uno de esos casos es una llamada, una espera y a veces un reimpreso.',
          'Casi ninguna imprenta panameña publica sus especificaciones. Se asume que el diseñador del cliente sabe, y muchas veces no hay diseñador: hay un administrador que armó algo en Word.',
          'Una página de especificaciones técnicas —formatos aceptados, resolución mínima, modo de color, sangrado, márgenes de seguridad, textos en curvas— evita la mayor parte de esos problemas y posiciona además en búsquedas que hacen los propios diseñadores.',
          'Y hace falta una forma de subir archivos pesados que no sea WhatsApp, que comprime y arruina la calidad. <strong>Un enlace de carga en la web, asociado a la cotización, ahorra más problemas de los que parece</strong> y evita que un arte de 200 MB termine en el chat de alguien.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de imprenta',
        intro: 'Para que el vendedor cotice en vez de investigar.',
        items: [
          { h3: 'Catálogo con medidas y materiales', text: 'Cada producto con sus medidas estándar, materiales disponibles y acabados. El cliente entiende qué está pidiendo antes de preguntar.' },
          { h3: 'Cotización guiada', text: 'Formulario que pide producto, medida, cantidad, material y fecha. Llega completo, listo para poner precio, no como un audio de tres minutos.' },
          { h3: 'Carga de artes', text: 'Enlace de subida asociado a la solicitud, con las especificaciones publicadas al lado. Sin compresión de WhatsApp y sin archivos perdidos en chats.' },
          { h3: 'Portafolio por categoría', text: 'Trabajos reales agrupados por tipo —gran formato, editorial, señalización, rotulación— con fotos propias. Es lo que convence al cliente corporativo.' },
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le vende la web de tu imprenta',
        intro: 'Tres clientes con ciclos y tickets muy distintos.',
        items: [
          { h3: 'El cliente corporativo', text: 'Papelería, señalización y material de campaña de forma recurrente. Evalúa capacidad, cumplimiento de plazos y si puedes manejar volumen. Es el que sostiene el año.' },
          { h3: 'La agencia o el diseñador', text: 'Trabaja con especificaciones y espera precisión. Le importa la calidad de impresión, el manejo de color y que los tiempos se cumplan. Trae trabajo repetido si confía.' },
          { h3: 'El cliente puntual', text: 'Un evento, una promoción, un rótulo. Compara precio y velocidad. Es donde más tiempo se pierde cotizando si el proceso no está ordenado.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Gran formato, offset y digital son tres negocios en una sola web',
        paragraphs: [
          'Muchas imprentas panameñas hacen de todo: gran formato, offset, digital, sublimación, bordado, rotulación. Y lo publican todo junto en una lista, con lo cual no compiten en ninguna búsqueda concreta.',
          'Cada línea la busca alguien distinto y con palabras distintas: "impresión de vallas Panamá", "impresión de factureras", "rotulación de vehículos", "banderolas para evento". Son búsquedas con volumen propio y con muy poca competencia bien trabajada.',
          'Una página por línea de producción cambia eso. Y no exige inventar nada: describir bien lo que ya haces, con las medidas, materiales y tiempos reales de esa línea, es suficiente para competir donde hoy no compites.',
          '<strong>La instalación merece mención propia.</strong> Si tienes cuadrilla para montar vallas o rotular flotas, eso te separa de la imprenta que solo entrega el material, y es exactamente lo que busca un cliente corporativo que no quiere coordinar dos proveedores.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: cotizaciones completas y cuántas cierran',
        paragraphs: [
          'El primer número es cuántas solicitudes de cotización llegaron con la información completa. Es la medida directa de si el formulario está haciendo su trabajo, y suele mejorar de golpe apenas se ordena.',
          'El segundo es la tasa de cierre por tipo de producto. Gran formato, editorial y promocional tienen márgenes muy distintos, y saber cuál cierra mejor orienta dónde poner al vendedor y qué línea ampliar.',
          'También conviene medir el tiempo de respuesta. En este rubro el cliente pide precio a tres imprentas y muchas veces contrata a la que respondió primero con algo claro, no a la más barata.',
          'Y cuántas consultas se evitaron por publicar precios estándar y especificaciones. Ese ahorro de tiempo del equipo es la justificación más directa de lo que costó la web. Lo dejamos medido; el detalle en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'statement',
        text: 'El cliente no te pide precio porque quiera negociar: te lo pide porque nadie le dijo qué datos hacían falta.',
        strong: 'Ordenar esa conversación es el mayor ahorro del rubro.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Debo publicar precios si todo es a medida?', a: 'Lo estándar sí: tarjetas, volantes, banderolas y roll-ups en medidas típicas tienen precio calculable. Publicarlo filtra al que solo preguntaba y deja al vendedor para el trabajo grande, que es donde está el margen.' },
          { q: '¿Cómo dejo de recibir consultas incompletas?', a: 'Con un formulario que guíe: producto, medida, cantidad, material, acabado y fecha. El cliente no es desordenado, es que nadie le dijo qué datos cambian el precio. Con el formulario, llega completo desde el primer mensaje.' },
          { q: '¿Vale la pena publicar las especificaciones de arte?', a: 'Evita la mayor parte de los reimpresos y las llamadas por archivos mal enviados. Además posiciona en búsquedas que hacen los propios diseñadores. Muchas veces del otro lado no hay diseñador, hay alguien que armó algo en Word.' },
          { q: '¿Cómo recibo archivos pesados?', a: 'Con un enlace de carga en la web asociado a la solicitud, no por WhatsApp, que comprime y arruina la calidad. Evita además que un arte de 200 MB termine perdido en el chat de alguien.' },
          { q: '¿Conviene una página por línea de producción?', a: 'Sí. "Impresión de vallas", "factureras", "rotulación de vehículos" y "banderolas para evento" son búsquedas distintas con volumen propio y poca competencia. Una lista con todo junto no compite en ninguna.' },
          { q: '¿Qué me diferencia de otra imprenta?', a: 'Si tienes cuadrilla de instalación, eso. Un cliente corporativo que necesita vallas montadas o una flota rotulada prefiere no coordinar dos proveedores, y casi ninguna imprenta lo comunica en su web.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-eventos-catering-bodas-panama', label: 'Web para Eventos y Catering' },
          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Web para Retail y Moda' },
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Web para Ferreterías' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu imprenta', wa: 'Hola, quiero cotizar la web de mi imprenta o empresa de publicidad.' },
  },
];
