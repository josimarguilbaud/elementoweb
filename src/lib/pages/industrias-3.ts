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
      'El diseño web para agencias de aduana en Panamá que hace Elemento Web, desde Ciudad de Panamá, parte de cuatro piezas: una página por trámite (importación, exportación, tránsito, reexportación desde Zona Libre de Colón), cotización con cinco datos, consulta de estado del expediente y licencia de corredor visible. Desde $1,250; con integración a tu sistema aduanero, desde $2,900.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una agencia de aduana en Panamá?',
        intro: 'El importador evalúa dos cosas: si sabes lo que haces y si vas a responder a tiempo.',
        items: [
          'Licencia de corredor de aduana otorgada por la Autoridad Nacional de Aduanas, con número visible',
          'Una página por trámite (importación, exportación, tránsito, reexportación), explicada sin jerga aduanera',
          'Formulario de cotización que pida solo lo necesario para dar un número',
          'Plazo de respuesta publicado y cumplido',
          'Consulta de estado del expediente por número de referencia, sin tener que llamar',
          'Cobertura por punto de entrada: puertos, aeropuerto de Tocumen, Zona Libre, frontera',
          'Versión en inglés de las páginas de Zona Libre y reexportación',
          'Contacto directo por WhatsApp, que es como se trabaja el rubro',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué contenido trae importadores primerizos a una agencia de aduana?',
        paragraphs: [
          'A una agencia le llegan dos clientes distintos. El recurrente ya conoce el proceso y quiere precio, tiempo de despacho y respuesta rápida. El primerizo no sabe nada y teme que su mercancía quede detenida por un error que ni sabe que puede cometer.',
          'Casi todas las webs del rubro le hablan solo al recurrente, con una lista de servicios en lenguaje técnico. El primerizo no entiende nada y llama a la agencia que le recomendó alguien.',
          'Ese primerizo es el cliente más valioso a largo plazo: cuando una agencia le explica, se queda años. Lo que busca en Google es concreto: "cómo importar a Panamá", "qué documentos necesito para desaduanar", "cuánto cuesta nacionalizar un contenedor". <strong>Una página por cada trámite que resuelves a diario</strong> captura un tráfico que hoy se reparte entre foros y grupos de WhatsApp.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo debe ser el formulario de cotización de una agencia de aduana?',
        paragraphs: [
          'El importador escribe a tres agencias y muchas veces le da el trabajo a la que contestó primero con algo claro, no a la más barata.',
          'El formulario habitual falla por un extremo o por el otro: un "contáctanos" genérico que no permite cotizar, o veinte campos que el primerizo no tiene a mano. Lo que funciona es pedir lo mínimo para dar un número: tipo de mercancía, valor aproximado, origen, contenedor completo o carga suelta, y punto de entrada. El código arancelario y la documentación fina van en un segundo paso.',
          'Y conviene publicar el plazo de respuesta. <strong>Una frase como "cotizamos en menos de 4 horas hábiles", cumplida, diferencia más que cualquier descripción de servicios</strong>, porque es lo que el importador está midiendo.',
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le habla la web de tu agencia',
        items: [
          { h3: 'Importador primerizo', text: 'No sabe qué documentos necesita ni cuánto va a costar. Busca a alguien que le explique el proceso completo antes de comprometerse.' },
          { h3: 'Importador recurrente', text: 'Compara tiempo de despacho, precio y rapidez de respuesta. Cambia de agencia por una mala experiencia, no por precio. La consulta de expediente le ahorra llamadas.' },
          { h3: 'Empresa de Zona Libre', text: 'Necesita reexportación, inventario en zona franca y trámites de alto volumen. Evalúa capacidad operativa y respaldo, no tarifa por trámite.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo vender los servicios de Zona Libre de Colón en la web?',
        paragraphs: [
          'La Zona Libre de Colón es una de las zonas francas más grandes del hemisferio, y casi ninguna agencia que opera ahí la comunica: aparece como una línea en la lista de servicios.',
          'El comprador regional que decide desde dónde distribuir a Centroamérica y el Caribe mira tres cosas: reexportar rápido, mantener inventario sin nacionalizar y consolidar carga. Si tu agencia hace eso, merece una página propia que lo explique, no una viñeta.',
          '<strong>Ese cliente busca en inglés.</strong> Una versión en inglés de las páginas de reexportación y logística de Zona Libre abre un mercado donde la competencia local es casi nula.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en la web de una agencia de aduana',
        paragraphs: [
          'Tres números: cuántas solicitudes de cotización entraron, cuánto tardaste en responder cada una y qué porcentaje terminó en trámite. El tiempo de respuesta es el más accionable, porque el importador decide con las primeras respuestas que recibe.',
          'Dos cortes adicionales: por tipo de trámite y punto de entrada (para saber, por ejemplo, si el aéreo cierra mejor que el marítimo), y el volumen de consultas de expediente resueltas en la web, que son horas que tu equipo deja de pasar al teléfono. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
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
          { q: '¿Cuánto cuesta la web de una agencia de aduanas o de Zona Libre?', a: 'El sitio institucional con servicios, cobertura y contacto entra en un sitio de hasta 6 páginas, desde $1,250. Si necesitas consulta de estatus de carga o conexión con tu sistema aduanero, es proyecto a medida desde $2,900, porque hay integración de por medio. El pago va 50% para arrancar, 30% al verlo funcionando en demo y 20% para publicar. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene invertir en la web de la agencia?', a: 'Si trabajas con tres o cuatro clientes grandes de siempre y no buscas nuevos, la web no te va a mover la aguja: con una página de presentación basta. Se justifica cuando quieres que un importador que no te conoce te encuentre buscando en Google, o cuando estás cansado de explicar por WhatsApp lo mismo que podría estar escrito.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-agencias-aduaneras-panama', label: 'Guía: diseño web para agencias de aduana' },
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
      'El diseño web para navieras y servicios marítimos en Panamá que hace Elemento Web, desde Ciudad de Panamá, se construye para un comprador extranjero: versión en inglés con terminología del sector, una página por servicio, licencias de la Autoridad Marítima de Panamá con vigencia, cobertura por puerto y contacto 24/7. Desde $1,250; bilingüe completo, desde $2,900.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una naviera o proveedor marítimo en Panamá?',
        intro: 'Un cliente internacional decide con la evidencia que encuentra, sin llamar a nadie primero.',
        items: [
          'Versión en inglés con terminología del sector, no una traducción automática',
          'Licencias de la Autoridad Marítima de Panamá, registros y certificaciones con número y vigencia',
          'Cobertura por puerto: Balboa, Cristóbal, Colón, Manzanillo, fondeaderos',
          'Una página por línea de servicio, con URL propia en cada idioma',
          'Flota, equipo o instalaciones propias con fotos reales',
          'Contacto de emergencia 24/7 visible y operativo fuera del horario panameño',
          'Años de operación y tipo de clientes atendidos',
          'Tiempos de respuesta comprometidos para solicitudes urgentes',
        ],
      },
      {
        type: 'prose',
        h2: '¿Necesita una naviera panameña su web en inglés?',
        paragraphs: [
          'Sí. El comprador de servicios marítimos rara vez es panameño: es un armador griego, un operador alemán, un agente en Singapur o un charterer en Houston. Busca en inglés, con terminología del sector, y compara proveedores de varias plazas a la vez.',
          'Una web solo en español lo deja fuera, y una traducción automática es casi peor: en un rubro técnico, la terminología mal traducida se lee como amateurismo.',
          'No hace falta traducir todo el sitio, sino las páginas de los servicios que vendes internacionalmente, con el vocabulario correcto: bunkering, husbandry, crew change, ship chandling, underwater services. <strong>Ahí casi ningún proveedor panameño compite bien</strong>, y el terreno queda para agencias internacionales que subcontratan localmente y se quedan el margen.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo usar la posición de Panamá como argumento comercial',
        paragraphs: [
          'El Canal, el registro de buques más grande del mundo por tonelaje abanderado y puertos en ambos océanos son hechos que casi ninguna web del rubro explica, porque se asume que el cliente ya los conoce.',
          'Para el cliente internacional esos hechos se traducen en ventajas concretas: atender un buque en tránsito sin desviarlo, resolver un cambio de tripulación entre océanos o abastecer en una escala que igual iba a ocurrir. Quien compara Panamá contra otra plaza necesita ese argumento escrito para justificarlo internamente.',
          'También cuenta el respaldo local: <strong>un cliente que sabe que alguien responde en Panamá a las tres de la mañana cuando su buque tiene un problema paga más</strong> que por un proveedor sin presencia real.',
        ],
      },
      {
        type: 'cards',
        h2: 'Quién evalúa tu web antes de escribirte',
        items: [
          { h3: 'Armador u operador', text: 'Evalúa capacidad, cobertura y respaldo. Necesita saber que puedes resolver en ambos océanos y que hay alguien disponible cuando su buque tiene un problema.' },
          { h3: 'Agente internacional', text: 'Busca un socio local confiable a quien subcontratar. Le importan las credenciales, la trazabilidad y la calidad de la comunicación en inglés.' },
          { h3: 'Charterer o trader', text: 'Decide por tiempo y por certeza. Compara plazas y necesita el argumento de por qué resolver en Panamá le sale mejor que desviarse.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué publicar certificaciones y seguros en la web de una empresa marítima?',
        paragraphs: [
          'Buena parte de las contrataciones marítimas pasan por una aprobación de proveedor: alguien dentro de la empresa cliente documenta por qué te eligió, con lo que encuentre publicado. Licencias, registros, certificaciones de calidad y seguros deben estar en una página propia, con número y vigencia.',
          'Lo mismo con el seguro de responsabilidad: publicar hasta qué monto respondes y qué cubre no ahuyenta clientes, ahuyenta a los que iban a descubrirlo después y generar un conflicto.',
          '<strong>Fotos propias de lanchas, equipos, bodegas o talleres separan a un operador con activos de un intermediario</strong>, una distinción que el cliente internacional busca activamente.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en la web de una empresa marítima',
        paragraphs: [
          'En un negocio de pocas operaciones de alto valor no importa el tráfico, sino cuántas solicitudes llegaron, de qué país, de qué servicio y por qué idioma. El corte geográfico suele revelar interés de países que no se estaban trabajando comercialmente; el de idioma, cuánto pesa la versión en inglés.',
          'El tiempo de respuesta también se mide, porque con clientes en otros husos horarios decide contrataciones. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
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
          { q: '¿Cuánto cuesta la web de una naviera o de servicios marítimos?', a: 'Un sitio institucional en español e inglés, con servicios y cobertura, entra en un sitio de hasta 6 páginas desde $1,250, y el segundo idioma suele llevarlo a proyecto a medida desde $2,900. Si además conectas con sistemas de agenciamiento o consulta de recaladas, es a medida sin discusión. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene la web de una naviera?', a: 'Si tu cliente es un armador extranjero que te contrata por relación y por agencia, la web no te trae contratos: te confirma que existes y que eres serio. Con un sitio institucional sobrio, en inglés, cumples. La inversión mayor se justifica cuando quieres captar clientes nuevos que no te conocen.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-navieras-panama', label: 'Guía: diseño web para navieras' },
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
    heroImage: { src: '/images/industrias/diseno-web-cooperativas-financieras-panama.jpg', alt: 'Edificio de columnas con una solicitud de préstamo en el móvil, un escudo con candado y monedas, para cooperativas y financieras' },
    service: { type: 'Diseño web para cooperativas de ahorro y crédito' },
    lead: [
      'Tu socio no es un cliente: es dueño de la cooperativa. Eso cambia todo lo que la web tiene que comunicar, y es justo lo que las webs del rubro suelen olvidar cuando copian el tono de un banco.',
      'El diseño web para cooperativas y financieras en Panamá que hace Elemento Web, desde Ciudad de Panamá, responde tres preguntas antes de la sucursal: cuánto pago al mes (simulador de cuota), a qué tasa y qué necesito para afiliarme. Suma estados financieros publicados y formularios bajo la Ley 81 de 2019. Desde $1,250; con simulador o core financiero, desde $2,900.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una cooperativa o financiera en Panamá?',
        intro: 'Todo lo que alguien pregunta antes de acercarse a una sucursal.',
        items: [
          'Tasas y condiciones publicadas por tipo de préstamo',
          'Simulador de cuota que funcione en el celular',
          'Requisitos de afiliación claros y en lenguaje simple',
          'Registro ante el ente supervisor visible: IPACOOP para cooperativas, MICI para empresas financieras',
          'Beneficios concretos de ser socio: excedentes, asamblea, servicios',
          'Estados financieros, memorias y convocatorias de asamblea publicados',
          'Ubicación y horario de cada sucursal',
          'Solicitud en línea que pida el mínimo de datos sensibles',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué una cooperativa necesita un simulador de cuota en su web?',
        paragraphs: [
          'La pregunta que trae a casi todos a la web de una cooperativa o financiera es "si pido tanto, ¿cuánto pago al mes?". Si la respuesta no está publicada, el interesado no llama ni va a la sucursal: busca otra opción que se lo diga de una vez.',
          'Un simulador simple (monto, plazo, tipo de préstamo y cuota estimada) responde y además filtra: quien sigue adelante llega a la sucursal con la expectativa correcta, y el ejecutivo deja de pasar el día explicando números básicos.',
          '<strong>Tiene que funcionar bien en el celular</strong>, porque ahí ocurre esa consulta, muchas veces de noche.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cómo comunica una cooperativa que el socio es dueño',
        paragraphs: [
          'La diferencia entre una cooperativa y un banco es de propiedad: el socio es dueño, vota en asamblea y recibe excedentes. La mayoría de las webs del rubro la desperdician copiando el lenguaje corporativo de la banca.',
          'Se comunica con hechos: qué se decide en asamblea, cómo se reparten los excedentes, qué beneficios recibe el socio que no recibiría en un banco y qué se hizo el año pasado con los aportes. Publicar estados financieros, memorias y convocatorias es la prueba visible de que la cooperativa funciona como dice.',
          '<strong>El banco no puede copiar eso</strong>, y es lo único que compite con la banca sin entrar en una guerra de tasas que la cooperativa no puede ganar.',
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le habla la web de tu cooperativa',
        items: [
          { h3: 'El que necesita un préstamo', text: 'Llega con una necesidad y una urgencia. Quiere saber cuánto le prestan, a qué tasa, en cuánto tiempo y qué papeles necesita.' },
          { h3: 'El que quiere ahorrar', text: 'Compara rendimiento y seguridad. Necesita entender cómo funciona el ahorro, qué respaldo tiene y qué pasa si retira antes.' },
          { h3: 'El socio actual', text: 'Quiere consultar su estado, pagar, ver convocatorias y resolver trámites sin ir a la sucursal. Es al que menos atienden las webs del rubro.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué exige la Ley 81 de 2019 a una solicitud de crédito en línea?',
        paragraphs: [
          'Una solicitud de crédito recoge cédula, ingresos, lugar de trabajo y a veces referencias personales: datos personales bajo la <strong>Ley 81 de 2019 de Protección de Datos Personales</strong>.',
          'La primera decisión es de diseño: pedir el mínimo en el primer paso. Nombre, monto, plazo y contacto bastan para iniciar; el resto se pide cuando ya hay conversación. La segunda es dónde aterriza: en un buzón institucional con acceso controlado y registro de quién atendió cada solicitud, no en un correo compartido ni en el WhatsApp personal de un ejecutivo.',
          'Nosotros montamos la parte técnica: certificado, formularios con aviso de privacidad y almacenamiento con acceso controlado. <strong>El texto legal y las políticas los revisa el asesor de la cooperativa</strong>, que conoce su marco regulatorio.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en la web de una cooperativa',
        paragraphs: [
          'Cuántas solicitudes de préstamo entraron por la web y de qué producto, y cuántas afiliaciones se iniciaron en línea. El corte por producto dice qué página ampliar: si el préstamo personal concentra las solicitudes y el hipotecario no se mueve, ahí está la decisión.',
          'Dos números menos obvios: cuántas consultas de "¿cuánto pago?" dejó de recibir la sucursal gracias al simulador, y cuánto se usa el área de socio. El detalle está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
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
          { q: '¿Cuánto cuesta la web de una cooperativa de ahorro y crédito?', a: 'Un sitio institucional con productos, requisitos y afiliación entra en un sitio de hasta 6 páginas desde $1,250. Si necesitas simulador de préstamos, consulta de saldo o conexión con tu core financiero, es proyecto a medida desde $2,900. Infraestructura desde $350 al año y mantenimiento desde $99 al mes, que en una entidad financiera no es opcional. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene rehacer la web de la cooperativa?', a: 'Si el sitio actual funciona y lo que falta es que los requisitos estén claros y actualizados, eso es contenido, no rediseño: cuesta menos y rinde más. Rehacerlo se justifica cuando el asociado no encuentra lo que busca, cuando no se ve bien en celular, o cuando el sitio ya no se puede actualizar sin ayuda técnica.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-cooperativas-panama', label: 'Guía: diseño web para cooperativas' },
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
      'El diseño web para empresas de aire acondicionado y refrigeración en Panamá que hace Elemento Web, desde Ciudad de Panamá, atiende dos negocios: la emergencia (teléfono sin scroll, horario y precio de la visita de diagnóstico) y el contrato de mantenimiento, con página propia y recordatorios. Residencial y comercial van separados. Landing desde $550; sitio completo desde $1,250.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una empresa de aire acondicionado en Panamá?',
        intro: 'La mitad de tus clientes llega con un equipo dañado y poca paciencia.',
        items: [
          'Teléfono tocable desde el celular, sin hacer scroll',
          'Si se atienden emergencias y en qué horario, dicho sin ambigüedad',
          'Servicios separados: instalación, mantenimiento, reparación, contratos',
          'Marcas y tipos de equipo que se atienden, incluidos cuartos fríos y chillers',
          'Precio o rango de la visita de diagnóstico',
          'Zonas de cobertura, incluido si se atiende el interior',
          'Técnicos con certificación y años de oficio visibles',
          'Garantía del trabajo: tiempo y qué cubre exactamente',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo vender contratos de mantenimiento de aire acondicionado desde la web?',
        paragraphs: [
          'Casi toda empresa de A/C gana al cliente en una emergencia y lo pierde después: se resuelve la falla y la relación termina hasta la próxima, que muchas veces resuelve otro.',
          'El negocio estable es el mantenimiento preventivo: limpieza, revisión de gas y chequeo eléctrico dos o tres veces al año, con una cuota conocida. La web es el lugar para venderlo, con una página propia que explique lo que en una llamada de emergencia nadie escucha: qué incluye, cada cuánto se visita, cuánto cuesta al año frente a una reparación mayor y cuánto baja el consumo de un equipo limpio.',
          '<strong>El momento de proponerlo es después de la emergencia, no durante.</strong> Un recordatorio automático a los tres meses de una reparación, ofreciendo el plan, convierte mejor que cualquier venta hecha con el cliente sudando. Se monta con <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué separar el aire acondicionado residencial del comercial en la web?',
        paragraphs: [
          'Restaurantes, supermercados, clínicas, oficinas y bodegas tienen cuartos fríos, chillers y sistemas centralizados. Para un supermercado, un cuarto frío dañado es mercancía perdida por hora: ese cliente compara tiempo de respuesta y capacidad técnica, no precio de visita, y firma contratos anuales.',
          'Casi ninguna web del rubro separa los dos mundos. Todo aparece en lenguaje residencial y el gerente de mantenimiento de una cadena no ve equipos industriales, certificaciones ni referencias comerciales.',
          '<strong>Una página para residencial y otra para comercial e industrial</strong>, cada una con su vocabulario, sus equipos y su forma de contratar, cambia el tipo de cliente que llega.',
        ],
      },
      {
        type: 'cards',
        h2: 'Con qué llega cada cliente',
        items: [
          { h3: 'La emergencia residencial', text: 'Equipo dañado, calor, ninguna paciencia. Quiere saber si vas hoy y cuánto cuesta la visita. Decide en minutos y por teléfono, muchas veces desde la ficha de Google.' },
          { h3: 'La instalación planificada', text: 'Casa nueva o remodelación. Compara marcas, capacidades y precio instalado. Investiga con calma y pide varias cotizaciones.' },
          { h3: 'El contrato comercial', text: 'Gerente de mantenimiento de un local, cadena o edificio. Evalúa capacidad técnica, tiempo de respuesta y respaldo. Firma anual y no cambia si lo atienden bien.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Qué contenido trae clientes: consumo eléctrico, no marcas',
        paragraphs: [
          'El aire acondicionado es la mayor parte de la factura eléctrica en casi cualquier casa u oficina de Panamá, y casi ninguna empresa del rubro lo usa como argumento.',
          'Lo que la gente busca es concreto: cuánto consume un equipo según su capacidad, qué diferencia hay entre uno convencional y uno inverter, cuánto se ahorra de verdad, cada cuánto limpiar para no gastar de más. Son búsquedas con mucho volumen y poca competencia bien hecha.',
          'Ese contenido vende el mantenimiento sin parecer venta, y sirve a los dos clientes: <strong>el dueño de casa que quiere bajar la factura y el gerente que tiene que justificar el gasto ante su jefe</strong> usan el mismo argumento.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en la web de una empresa de A/C',
        paragraphs: [
          'Primero, las llamadas que salen del botón de la web: en este rubro casi todo el contacto es telefónico, y medir solo formularios subestima el trabajo del sitio.',
          'Segundo, qué porcentaje de los clientes de emergencia terminó en contrato de mantenimiento. Si es bajo, el problema rara vez es el precio del plan: es que nadie volvió a contactar al cliente. Conviene medir residencial y comercial por separado, porque tienen ciclos y márgenes distintos. El detalle está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
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
          { q: '¿Cuánto cuesta la web de una empresa de aire acondicionado?', a: 'Este rubro se decide por urgencia: el cliente busca, llama y contrata. Para eso una landing enfocada en la llamada resuelve, desde $550. Si vendes equipos además del servicio, o das mantenimiento por contrato a empresas, conviene el sitio de hasta 6 páginas desde $1,250 con una página por tipo de servicio. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO te conviene la web todavía?', a: 'Si no puedes atender más trabajos de los que ya tienes, no abras la llave: vas a generar llamadas que no contestas y reseñas malas de gente que nunca fue tu cliente. Primero capacidad, después visibilidad.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-aire-acondicionado-panama', label: 'Guía: diseño web para aire acondicionado' },
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
      'El diseño web para empresas de seguridad y vigilancia en Panamá que hace Elemento Web, desde Ciudad de Panamá, trabaja dos frentes: credenciales verificables (permiso del Ministerio de Seguridad Pública, póliza, selección del personal) para el comité que contrata, y una sección de empleo por zona para reclutar oficiales. Desde $1,250; con portal de reportes para clientes, desde $2,900.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una empresa de seguridad en Panamá?',
        intro: 'Un comprador corporativo revisa todo esto antes de invitarte a cotizar.',
        items: [
          'Permiso de operación del Ministerio de Seguridad Pública y registros del sector, con número visible',
          'Años de operación y tipo de clientes atendidos',
          'Servicios separados: vigilancia física, monitoreo, escolta, tecnología',
          'Póliza de responsabilidad civil y coberturas',
          'Cómo se selecciona, capacita y supervisa al personal',
          'Cobertura geográfica y capacidad de despliegue',
          'Canal de emergencia 24/7 visible y operativo',
          'Formulario de solicitud de propuesta: tipo de instalación, puestos, turnos, ubicación',
          'Sección de empleo, porque el personal también te busca ahí',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué revisa un comprador corporativo en la web de una empresa de seguridad?',
        paragraphs: [
          'La contratación de seguridad en una empresa mediana o grande pasa por administración, finanzas y a veces un comité, y quien te propone tiene que documentar por qué tú y no otro. Esa documentación se arma con lo que encuentre publicado.',
          'Por eso la página de credenciales es munición para tu comprador interno: licencias con número y vigencia, cobertura de la póliza, procedimiento de selección, capacitación y supervisión, en un lugar fácil de encontrar y de enlazar. Si no está, tu contacto no tiene con qué defenderte y la conversación se enfría sin aviso.',
          '<strong>Conviene además un documento descargable</strong> con capacidades y credenciales que el interno pueda adjuntar a su expediente de aprobación.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo reclutar oficiales de seguridad desde la web?',
        paragraphs: [
          'La rotación es el problema estructural del rubro: una empresa de seguridad recluta todo el año, y no lograrlo significa no poder tomar un contrato por falta de personal para cubrirlo.',
          'La mayoría de las webs del sector solo le hablan al cliente corporativo. El aspirante a oficial busca trabajo desde el celular y encuentra, como mucho, un correo genérico para mandar la hoja de vida.',
          'Una sección de empleo resuelve eso: qué se busca, requisitos, salario y beneficios, zonas con plazas y un formulario simple que funcione en el teléfono. <strong>Es tráfico gratis</strong>: "trabajo de seguridad en Panamá" y "vacantes de oficial de seguridad" son búsquedas con volumen y casi sin competencia, porque el rubro recluta por referidos y no publica nada.',
        ],
      },
      {
        type: 'cards',
        h2: 'Quién llega a la web de una empresa de seguridad',
        items: [
          { h3: 'El comprador corporativo', text: 'Necesita credenciales verificables y algo que pueda adjuntar a su expediente interno. Evalúa riesgo y respaldo antes que precio.' },
          { h3: 'El administrador de PH', text: 'Junta directiva de un edificio residencial. Compara propuestas, quiere saber cómo se supervisa al personal y qué pasa cuando alguien falla.' },
          { h3: 'El aspirante a oficial', text: 'Busca trabajo desde el celular. Quiere requisitos, salario, zona y una forma simple de aplicar.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cámaras, alarmas y monitoreo: una página aparte',
        paragraphs: [
          'Cámaras, control de acceso, alarmas y monitoreo remoto suelen aparecer como una línea más dentro de la vigilancia física. Es otro negocio, con otro comprador, otro ticket y una decisión más rápida: quien busca "instalación de cámaras de seguridad Panamá" o "monitoreo de alarmas" muchas veces no busca guardias.',
          'Una página propia con las tecnologías que instalas, qué incluye el monitoreo, si hay centro propio y el tiempo de respuesta ante una alarma abre esa línea de captación. Y <strong>el cliente que entra por cámaras suele terminar contratando vigilancia física</strong>, y al revés.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en la web de una empresa de seguridad',
        paragraphs: [
          'Dos embudos separados. El comercial: solicitudes de propuesta por tipo de cliente y de instalación, tiempo de respuesta y cuántas terminaron en contrato (un PH residencial y una planta industrial se ganan distinto). El de reclutamiento: aplicaciones por zona y cuántas terminaron en contratación.',
          'Si tienes plazas descubiertas y la web no genera aplicaciones, eso cuesta contratos, no solo tiempo de recursos humanos. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
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
          { q: '¿Cuánto cuesta la web de una empresa de seguridad?', a: 'Servicios, cobertura, certificaciones y contacto: hasta 6 páginas desde $1,250. Si quieres portal de cliente para reportes de ronda o monitoreo, es proyecto a medida desde $2,900. Infraestructura desde $350 al año y mantenimiento desde $99 al mes. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene la web de vigilancia?', a: 'Si trabajas solo con contratos corporativos ganados por licitación, la web es respaldo, no captación: con un sitio institucional serio y actualizado cumples. Se vuelve canal de venta cuando buscas residenciales, comercios pequeños o servicios de custodia puntual, que sí se buscan en Google.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-seguridad-vigilancia-panama', label: 'Guía: diseño web para seguridad y vigilancia' },
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
      'El diseño web para imprentas y empresas de publicidad en Panamá que hace Elemento Web, desde Ciudad de Panamá, ordena la cotización: catálogo con medidas y materiales, formulario guiado (producto, medida, cantidad, material, fecha), especificaciones de arte publicadas, carga de archivos pesados y una página por línea de producción. Sitio desde $1,250; con venta directa, tienda desde $1,950.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una imprenta en Panamá?',
        intro: 'El cliente corporativo y el particular preguntan lo mismo: cuánto, en cuánto tiempo y cómo mando el arte.',
        items: [
          'Catálogo de productos con medidas y materiales estándar',
          'Formulario de cotización que pida producto, medida, cantidad, material y fecha',
          'Tiempos de entrega por tipo de trabajo, publicados',
          'Especificaciones de arte: formato, resolución, sangrado, curvas',
          'Carga de archivos pesados asociada a la cotización, sin depender de WhatsApp',
          'Trabajos realizados por categoría, con fotos propias',
          'Si hay instalación y en qué zonas',
          'Precio o rango en los productos de mayor rotación',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo cotizar en línea en una imprenta sin ida y vuelta?',
        paragraphs: [
          'Una consulta típica llega así: "cuánto cuestan unas banderolas". Sin medida, cantidad, material ni fecha. Responder exige tres preguntas de vuelta, y en ese ida y vuelta se va el tiempo del vendedor y a menudo el cliente, que ya pidió precio en otros dos lados.',
          'El cliente no es desordenado: no sabe qué datos cambian el precio, ni que un banner de lona y uno de vinil son cosas distintas. Un formulario que lo guíe (producto, medida, cantidad, material, acabado, fecha requerida) hace que la información llegue completa desde el primer mensaje.',
          '<strong>Publicar precio en lo estándar corta buena parte del ruido.</strong> Tarjetas, volantes, banderolas y roll-ups en medidas típicas tienen precio calculable; publicarlo filtra al que solo preguntaba y deja al vendedor para el trabajo grande, donde está el margen.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué especificaciones de arte debe publicar una imprenta?',
        paragraphs: [
          'El arte que llega mal consume días: baja resolución, RGB, sin sangrado, textos sin convertir a curvas, o la foto de un diseño tomada con el celular. Cada caso es una llamada, una espera y a veces un reimpreso. Muchas veces del otro lado no hay diseñador, sino alguien que armó algo en Word.',
          'Una página de especificaciones (formatos aceptados, resolución mínima, modo de color, sangrado, márgenes de seguridad, textos en curvas) evita la mayor parte de esos problemas y posiciona en búsquedas que hacen los propios diseñadores.',
          '<strong>Los archivos pesados necesitan un enlace de carga en la web, asociado a la cotización</strong>: WhatsApp comprime y arruina la calidad, y un arte de 200 MB termina perdido en el chat de alguien.',
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le vende la web de tu imprenta',
        items: [
          { h3: 'El cliente corporativo', text: 'Papelería, señalización y material de campaña de forma recurrente. Evalúa capacidad, cumplimiento de plazos y volumen. Es el que sostiene el año.' },
          { h3: 'La agencia o el diseñador', text: 'Trabaja con especificaciones y espera precisión en color y plazos. Trae trabajo repetido si confía.' },
          { h3: 'El cliente puntual', text: 'Un evento, una promoción, un rótulo. Compara precio y velocidad. Es donde más tiempo se pierde cotizando si el proceso no está ordenado.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué una página por línea de producción: gran formato, offset y digital?',
        paragraphs: [
          'Muchas imprentas panameñas hacen gran formato, offset, digital, sublimación, bordado y rotulación, y lo publican todo en una lista, con lo que no compiten en ninguna búsqueda concreta.',
          'Cada línea se busca con palabras distintas: "impresión de vallas Panamá", "impresión de factureras", "rotulación de vehículos", "banderolas para evento". Una página por línea, con las medidas, materiales y tiempos reales de esa línea, basta para competir donde hoy no compites.',
          '<strong>La instalación merece página propia.</strong> Si tienes cuadrilla para montar vallas o rotular flotas, eso te separa de la imprenta que solo entrega el material, y es lo que busca un cliente corporativo que no quiere coordinar dos proveedores.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir en la web de una imprenta',
        paragraphs: [
          'Cuántas solicitudes llegaron con la información completa (la medida directa de si el formulario funciona), la tasa de cierre por tipo de producto (gran formato, editorial y promocional tienen márgenes muy distintos) y el tiempo de respuesta, porque el cliente que pide precio a tres imprentas suele contratar a la que respondió primero con algo claro.',
          'También cuántas consultas se evitaron por publicar precios estándar y especificaciones. El detalle está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
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
          { q: '¿Cuánto cuesta la web de una imprenta o agencia de publicidad?', a: 'Catálogo de productos con cotización en línea: si el cliente compra directo, es tienda desde $1,950. Si todo se cotiza a la medida (tirajes, materiales, acabados), un sitio de hasta 6 páginas desde $1,250 con formulario de cotización te resuelve mejor. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene poner precios en la web?', a: 'Cuando cada trabajo depende del tiraje y del material: publicar un precio suelto te obliga a explicar después por qué el real es otro. Publica rangos o «desde», o pide los datos mínimos para cotizar en el formulario. Precios cerrados solo donde de verdad son cerrados.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-imprentas-panama', label: 'Guía: diseño web para imprentas' },
          { slug: 'industrias/diseno-web-eventos-catering-bodas-panama', label: 'Web para Eventos y Catering' },
          { slug: 'industrias/diseno-web-retail-moda-panama', label: 'Web para Retail y Moda' },
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Web para Ferreterías' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu imprenta', wa: 'Hola, quiero cotizar la web de mi imprenta o empresa de publicidad.' },
  },
];
