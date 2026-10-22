/* SILO INDUSTRIAS (lote 2a): contadores, agencias de viajes, importadoras y
   dentistas. Regla dura: contenido REAL por rubro, con su dolor propio. Nada
   de plantillas clonadas con el nombre cambiado. */
import type { PageData } from '../types';

const parent = { slug: 'industrias', label: 'Industrias' };

export const industrias2a: PageData[] = [
  /* ---------- CONTADORES ---------- */
  {
    slug: 'industrias/diseno-web-contadores-panama',
    parent,
    title: 'Diseño Web para Contadores en Panamá | Firmas Contables',
    description: 'Diseño web para contadores y firmas contables en Panamá: confianza, servicios por página, cumplimiento fiscal y captación de clientes que confían sus finanzas.',
    h1: 'Diseño web para contadores',
    breadcrumb: 'Contadores',
    service: { type: 'Diseño web para firmas contables' },
    heroImage: { src: '/images/industrias/diseno-web-contadores-panama.jpg', alt: 'Escritorio de un contador con estados financieros, calculadora y documentos fiscales' },
    lead: [
      'Un cliente te va a entregar sus números, su planilla y su relación con la DGI. No contrata al primero que aparece: contrata al que se ve serio.',
      'El diseño web para contadores en Panamá que hacemos en Elemento Web, desde Ciudad de Panamá, incluye una página por servicio (contabilidad mensual, planilla, ITBMS, renta, constitución de empresas), la idoneidad del CPA, artículos sobre el calendario fiscal de la DGI y un formulario que filtra por tipo de cliente. El formato típico es una web empresarial desde $1,250.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de un contador en Panamá?',
        items: [
          'Una página por servicio: contabilidad mensual, planilla, ITBMS, renta, auditoría, constitución de empresas',
          'Idoneidad del CPA y del equipo, visible y verificable, con número de registro',
          'Explicación clara de plazos fiscales de Panamá (renta, ITBMS mensual, informes) para demostrar dominio',
          'Formulario que filtra por tipo de cliente: persona natural, PYME, sociedad, Zona Libre',
          'Sección de recursos o blog que responde las dudas fiscales frecuentes',
          'Canal directo de WhatsApp para consultas rápidas sin exponer datos financieros',
          'Señales de confidencialidad y manejo responsable de la información',
          'Diseño sobrio y ordenado: el descuido visual se lee como descuido con los números',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo transmite seriedad la web de una firma contable?',
        paragraphs: [
          'Nadie entrega su contabilidad por impulso: el cliente compara dos o tres firmas y elige la que se ve seria. Eso se demuestra con datos, no con adjetivos: la idoneidad del contador con su número de registro, los años de ejercicio, el tipo de empresas que ya atiendes.',
          '«Brindamos servicios contables de calidad» no dice nada. El cliente quiere ver que entiendes <strong>su</strong> problema: la declaración de ITBMS mensual, el cierre de renta, la planilla de la Caja de Seguro Social, el reporte a la Superintendencia si aplica. Y como se trata de información sensible, el formulario pide solo lo necesario para agendar; las cifras van por otro canal.',
        ],
      },
      {
        type: 'prose',
        h2: 'Una página por servicio contable: así te encuentra el cliente correcto',
        paragraphs: [
          'El empresario no busca «contador» a secas. Busca «declaración de renta Panamá», «contador para planilla», «constitución de sociedad anónima Panamá» o «quién me lleva el ITBMS». Si todos tus servicios viven en una sola página de «Servicios», no compites en ninguna de esas búsquedas.',
          'Cada servicio merece su propia URL: el problema en el idioma del cliente, qué incluye, para quién es y qué plazos maneja. Renta de persona natural, contabilidad mensual de PYME y constitución de empresas son tres páginas, no una. <strong>Así se posiciona una firma contable: servicio por servicio.</strong>',
          'Si llevas la gestión contable en <a href="/saas/cifrao/">Cifrao</a>, la web lo presenta como diferenciador frente al contador que todavía trabaja en hojas de cálculo sueltas.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de firma contable',
        items: [
          { h3: 'Mapa de servicios y clientes', text: 'Listamos cada servicio y a qué cliente atiende (persona natural, PYME, sociedad, Zona Libre) para decidir qué merece página propia.' },
          { h3: 'Contenido con autoridad fiscal', text: 'Redactamos cada servicio con plazos, obligaciones y documentos del sistema panameño, sin jerga vacía y sin prometer lo que la normativa no permite.' },
          { h3: 'Calendario fiscal en el blog', text: 'Dejamos un artículo por vencimiento (renta, ITBMS, planilla) para captar búsquedas en las semanas de más demanda.' },
        ],
      },
      {
        type: 'cards',
        h2: 'A quién le habla la web de tu firma',
        intro: 'Un dueño de PYME, una sociedad y una persona natural buscan cosas distintas. La estructura correcta le responde a cada uno.',
        items: [
          { h3: 'El dueño de PYME', text: 'Quiere quitarse de encima la planilla, el ITBMS mensual y el cierre de renta para dedicarse a su negocio. Le pesa que respondas rápido y que expliques sin tecnicismos qué tiene que pagar y cuándo.' },
          { h3: 'La sociedad o empresa establecida', text: 'Necesita cumplimiento y estados financieros confiables, a veces auditoría o reportes a entes reguladores. Le importan la idoneidad del equipo, la experiencia con empresas de su tamaño y la formalidad.' },
          { h3: 'El emprendedor que arranca', text: 'Busca constituir su empresa, entender qué impuestos le tocan y empezar bien. Valora una firma que lo guíe desde cero, con una página clara de constitución y primeros pasos.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Web corporativa a medida' } },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué contenido trae clientes a una firma contable en Panamá?',
        paragraphs: [
          'El del calendario fiscal. La demanda se dispara en fechas concretas: declaración de renta, informes de ITBMS, planilla, declaración jurada de rentas de personas jurídicas, cierre fiscal. En cada una hay miles de personas buscando qué les toca y hasta cuándo.',
          'Casi ninguna firma panameña capta ese tráfico, porque escribe sobre sus servicios y no sobre las fechas. Un artículo que explique un vencimiento (a quién aplica, qué documentos hacen falta, qué pasa si se presenta tarde) se escribe una vez y sirve cada año actualizando fechas y montos.',
          '<strong>Llega al cliente cuando ya se dio cuenta de que no lo va a resolver solo:</strong> ese es el que contrata, no el que investiga en agosto.',
        ],
      },
      {
        type: 'prose',
        h2: 'El cliente de enero y el de la semana del vencimiento no son el mismo',
        paragraphs: [
          'El de enero busca ordenarse: compara, pregunta por servicios mensuales y decide con calma. El de la semana del vencimiento tiene la fecha encima y solo quiere saber si lo atienden hoy y cuánto cuesta. La mayoría de las webs del rubro solo le hablan al primero.',
          'Se resuelve con dos caminos desde la portada: asesoría continua (página propia y formulario) y trámite puntual (página propia y WhatsApp directo). El cliente de urgencia suele quedarse como cliente fijo si lo sacas del apuro: <strong>es la puerta de entrada más barata de una firma contable.</strong>',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que una empresa no confíe su contabilidad en ti',
        intro: 'La contabilidad se compra con miedo a equivocarse. Cada uno de estos detalles alimenta ese miedo.',
        items: [
          'Contadores sin idoneidad, sin CPA y sin años de ejercicio visible',
          'Sin decir con qué software se trabaja, cuando el cliente ya usa uno',
          'Servicios listados en jerga contable, sin traducir a qué resuelve cada uno',
          'Ni un rango de honorarios, ni por servicio ni por tamaño de empresa',
          'Sin mención de si se atiende a persona natural, jurídica o ambas',
          'Nada sobre cómo se entregan los documentos: correo, drive, sistema',
          'Web sin HTTPS pidiendo datos financieros por formulario',
          'Sin novedades desde la última reforma fiscal, que es lo que el cliente busca',
        ],
      },
      {
        type: 'prose',
        h2: 'Los documentos del cliente no deberían viajar por WhatsApp',
        paragraphs: [
          'En casi toda firma contable panameña el cliente manda las facturas por WhatsApp, a veces mal fotografiadas, al celular personal de alguien del equipo. Ahí viajan planillas con salarios y cédulas de empleados: datos personales bajo la <strong>Ley 81 de 2019</strong>, algunos de terceros que ni siquiera son tu cliente.',
          'La alternativa es simple: un área de cliente en la web donde cada empresa sube sus documentos a su propia carpeta, con acceso por usuario y registro de qué se subió y cuándo. Desaparece el «¿ya me mandaste la factura?» y <strong>mejoran a la vez el cumplimiento y la operación diaria.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: consultas por tipo de servicio y cuántas quedan',
        paragraphs: [
          'No el tráfico, sino cuántas consultas llegaron y de qué tipo: asesoría mensual, trámite puntual, constitución de sociedad, auditoría. Son negocios con márgenes muy distintos.',
          'El dato clave es la proporción entre urgencias y servicio continuo: si el noventa por ciento son urgencias, la web capta en las fechas fuertes pero no construye cartera recurrente. Mide también cuántos clientes de trámite puntual pasan a mensuales; un recordatorio automático antes del siguiente vencimiento suele subir ese número.',
          'Y de qué artículo venía cada consulta, para saber qué escribir. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una firma contable?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">Web empresarial desde $1,250</a>, con páginas por servicio, idoneidad del equipo y formulario de consulta. Firmas con muchos servicios o varias líneas de cliente pueden ir a una corporativa a medida desde $2,900. Siempre te damos una cotización cerrada por escrito antes de empezar.' },
          { q: '¿Puedo publicar recordatorios de plazos fiscales?', a: 'Sí, y es de lo que más engancha. Un calendario o artículos con los vencimientos de renta, ITBMS y planilla posiciona tu firma como la que está al día, y te da razones legítimas para reaparecer ante tus clientes cada mes.' },
          { q: '¿La web se conecta con Cifrao o con mi software contable?', a: 'La web es tu vitrina de confianza y captación, no reemplaza tu sistema contable. Cuando usas <a href="/saas/cifrao/">Cifrao</a> u otra plataforma, la web puede enlazar al portal del cliente y presentar ese respaldo como diferenciador. La integración concreta se evalúa en el diagnóstico.' },
          { q: '¿Cómo manejan la confidencialidad de la información?', a: 'Los formularios piden solo lo necesario para agendar una consulta, nunca cifras sensibles por canales abiertos. Para lo demás dejamos WhatsApp o correo directo, y la web transmite de forma explícita el manejo responsable de los datos que el cliente espera de un contador.' },
          { q: '¿Sirve para un contador independiente y no solo para una firma grande?', a: 'Sí, y muchas veces rinde más. Un CPA independiente que posiciona bien dos o tres servicios concretos (planilla, renta de PYME, constitución de empresas) capta clientes de esas búsquedas específicas sin competir de frente con las firmas grandes en todo a la vez.' },
                  { q: '¿Qué contenido trae clientes a una firma contable?', a: 'El del calendario fiscal. Declaración de renta, ITBMS, planilla, cierre: en cada vencimiento hay miles de búsquedas de gente preocupada. Un artículo que explique a quién aplica, qué documentos hacen falta y qué pasa si se presenta tarde llega justo cuando el cliente decide contratar.' },
          { q: '¿Publico honorarios en la web?', a: 'Al menos un rango por tipo de servicio o por tamaño de empresa. La contabilidad se compra con miedo a la sorpresa, y un rango da más tranquilidad de la que quita. Los trabajos que varían mucho pueden ir con un "desde".' },
          { q: '¿Está bien recibir los documentos del cliente por WhatsApp?', a: 'Funciona hasta que deja de funcionar. Ahí viajan planillas con salarios y cédulas, datos personales bajo la Ley 81 de 2019, guardados en el rollo de fotos de un teléfono personal. Un área de cliente con carpeta por empresa lo resuelve y de paso elimina el "¿ya me lo mandaste?".' },
          { q: '¿Sirve la web si la firma capta por referidos?', a: 'Sí, por dos motivos. El referido igual te busca antes de llamar y compara lo que ve. Y el contenido de calendario fiscal capta al que no tiene quién lo refiera, que en las semanas de vencimiento es mucha gente.' },
          { q: '¿Cuándo NO conviene la web de un contador?', a: 'Si tu cartera está llena y solo atiendes por recomendación, con una página sobria de presentación cumples. La web trabaja de verdad cuando quieres captar al emprendedor que busca «cuánto cuesta llevar la contabilidad de una empresa en Panamá» y todavía no sabe a quién llamar.' },
          { q: '¿Cómo se paga la web y qué gastos quedan después?', a: 'Tres pagos: 50% para arrancar, 30% al ver el sitio funcionando en demo y 20% para publicar, con 30 días de garantía por fallas técnicas. Lo recurrente, que conviene presupuestar desde el principio: infraestructura desde $350 al año y mantenimiento desde $99 al mes. Los precios no incluyen ITBMS (7%), que ya sabes mejor que nosotros cómo se declara.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-contadores-panama', label: 'Guía: diseño web para contadores' },
          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Web para Consultoras' },
          { slug: 'industrias/diseno-web-abogados-panama', label: 'Web para Abogados' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'saas/cifrao', label: 'Cifrao: gestión contable' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu firma contable', wa: 'Hola, quiero cotizar la web de una firma contable.' },
  },

  /* ---------- AGENCIAS DE VIAJES Y TOURS ---------- */
  {
    slug: 'industrias/diseno-web-agencias-viajes-tours-panama',
    parent,
    title: 'Diseño Web para Agencias de Viajes y Tours en Panamá',
    description: 'Diseño web para agencias de viajes y tour operadores en Panamá: paquetes, disponibilidad, reservas con depósito y menos dependencia de intermediarios.',
    h1: 'Diseño web para agencias de viajes y tours',
    breadcrumb: 'Agencias de Viajes',
    service: { type: 'Diseño web para agencias de viajes y tour operadores' },
    heroImage: { src: '/images/industrias/diseno-web-agencias-viajes-tours-panama.jpg', alt: 'Cayos de San Blas con una ruta turística marcada y una tableta con itinerario y botón de reserva para agencias de tours' },
    lead: [
      'El viajero sueña con San Blas o Bocas desde el celular, a las once de la noche. Si en ese momento no puede reservar contigo, mañana reserva con otro.',
      'El diseño web para agencias de viajes y tours en Panamá que hacemos en Elemento Web incluye una página por destino o tour (San Blas, Bocas del Toro, Boquete), reserva online con depósito por Yappy o tarjeta, políticas de cancelación publicadas, paquetes por temporada editables por ti y versión en inglés para el turista que llega.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una agencia de viajes o tour operador?',
        items: [
          'Una página por destino o tour (San Blas, Bocas del Toro, Boquete, city tour) posicionable por separado',
          'Fotos y video propios del tour real, no imágenes de banco',
          'Qué incluye y qué no: transporte, comidas, entradas, guía, punto de salida',
          'Reserva online con pago de depósito para asegurar el cupo',
          'Pago con Yappy y tarjeta para el mercado local e internacional',
          'Contenido bilingüe para el turista extranjero que decide en inglés',
          'Paquetes por temporada, feriados y grupos, editables por ti',
          'Botón de WhatsApp por tour con el paquete ya referenciado',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo se reserva un tour en línea sin depender del WhatsApp?',
        paragraphs: [
          'La agencia que vende solo por WhatsApp pierde la venta cuando nadie contesta a tiempo: el viajero escribe a las once de la noche, recibe el precio al día siguiente y ya reservó con otro.',
          'La <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reserva online</a> cierra ese hueco: el viajero elige fecha, ve el cupo y confirma con un <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">depósito por Yappy o tarjeta</a>. El WhatsApp sigue para dudas y para quien necesita hablar, pero el que ya decidió reserva solo, las 24 horas.',
        ],
      },
      {
        type: 'prose',
        h2: 'Menos dependencia de intermediarios y de la temporada',
        paragraphs: [
          'Cuando tus tours se venden solo a través de otras agencias, plataformas o revendedores, cada reserva llega con la comisión descontada y sin el dato del cliente. Sirven para llenar cupos sueltos, pero en tu web el turista te paga a ti y queda en tu lista para el próximo viaje.',
          'Los precios, los cupos y los tours que conviene promocionar cambian entre temporada seca, verde, feriados largos, Carnaval y fin de año. Por eso los paquetes, las fechas y los precios quedan editables por ti: lanzas la promo de temporada baja o cierras un tour lleno sin depender de nadie.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de agencia de viajes',
        items: [
          { h3: 'Un tour, una página', text: 'Cada destino o tour lleva fotos reales, itinerario, qué incluye, punto de salida y precio, y posiciona por su búsqueda: «tour a San Blas», «paquete Bocas del Toro».' },
          { h3: 'Disponibilidad y depósito', text: 'Montamos la disponibilidad por fecha y el cobro del depósito, con la política de cancelación junto al botón de reservar.' },
          { h3: 'Inglés solo donde vende', text: 'Traducimos las páginas de los tours que compran extranjeros, con URLs por idioma, en lugar de la web entera.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Qué reserva cada tipo de viajero',
        intro: 'El turista extranjero, el panameño que arma un finde y el grupo grande compran distinto. La web separa cada camino.',
        items: [
          { h3: 'El turista internacional', text: 'Investiga en inglés desde antes de aterrizar, compara reseñas y quiere pagar con tarjeta. Le pesan las fotos reales, el itinerario claro y poder reservar sin depender de coordinar por horario de Panamá.' },
          { h3: 'El panameño que arma un escape', text: 'Busca un feriado o fin de semana a Bocas, San Blas o el interior. Decide rápido, con el celular, y le encanta pagar con Yappy. La reserva con depósito lo cierra antes de que se enfríe.', link: { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pagos con Yappy' } },
          { h3: 'El grupo o evento', text: 'Cumpleaños, despedidas, viajes de empresa o de colegio. Necesita cotizar para varias personas y coordinar fechas; un formulario de grupos separado deja que tu equipo arme el paquete a la medida.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El que ya sabe a dónde va y el que todavía sueña compran distinto',
        paragraphs: [
          'Un viajero ya decidió y busca precio y fecha: «paquete a Cartagena», «tour a San Blas desde Panamá». El otro tiene una semana libre y busca ideas: «a dónde viajar en octubre», «destinos baratos desde Panamá». Casi todas las agencias panameñas le hablan solo al primero.',
          'Al indeciso se le capta con contenido, no con más inventario: comparativas entre destinos, qué se hace en cada uno, cuánto cuesta una semana y en qué mes conviene ir. Quien le ayuda a elegir el destino suele quedarse con la venta completa.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué política de depósito y cancelación publicar?',
        paragraphs: [
          'La primera pregunta real de quien compra un viaje para dentro de tres meses no es el precio: es qué pasa si algo cambia. Si la respuesta depende de un WhatsApp que llega a media tarde, el cliente ya está mirando otra opción.',
          'Publica cuánto es el depósito para apartar, hasta cuándo se cancela y con qué penalidad, si el pago se fracciona y hasta qué fecha, y qué pasa si la aerolínea cambia el vuelo. <strong>Una reserva sin depósito no es una reserva</strong>: es una intención que se cae con la primera oferta que aparezca.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que un viajero reserve con otra agencia',
        intro: 'Todo esto se decide mientras alguien compara tres agencias desde el celular.',
        items: [
          'Paquetes sin precio: "consultar disponibilidad"',
          'Sin decir qué incluye y qué no: vuelo, traslados, comidas, entradas',
          'Nada sobre depósito, cancelación ni fraccionamiento del pago',
          'Fotos de banco del destino en vez de fotos de tus propios viajes',
          'Sin licencia de operador turístico ni registro ante la ATP visible',
          'Salidas publicadas sin fecha o con fechas del año pasado',
          'Sin forma de apartar que no sea escribir y esperar respuesta',
          'Nada sobre requisitos de entrada: visa, pasaporte, vacunas',
        ],
      },
      {
        type: 'prose',
        h2: 'Dos negocios distintos: el panameño que sale y el turista que llega',
        paragraphs: [
          'Muchas agencias panameñas hacen emisivo y receptivo con la misma web, en español, para el mismo público. Son negocios distintos. El receptivo, el turista que viene a Panamá, es el de mayor margen y el peor atendido: busca en inglés, compara con operadores internacionales y espera precio en dólares con todo incluido, políticas claras y pago con tarjeta internacional.',
          'Busca la experiencia: «San Blas tour from Panama City», «Panama Canal tour», «Boquete coffee tour». Son búsquedas dominadas por revendedores extranjeros de tu propio producto. <strong>Una sección en inglés con los tours que vendes a extranjeros te pone a competir por tu propio cliente.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: reservas con depósito y de qué contenido vinieron',
        paragraphs: [
          'La métrica es la reserva con depósito, no la consulta: un WhatsApp lleno todo el día puede cerrar poco. Córtala por origen (búsqueda del destino, contenido de inspiración, pauta) y separa emisivo de receptivo, que tienen márgenes y ciclos distintos.',
          'Si la conversión de consulta a depósito es baja, casi nunca es el precio: falta publicar la política de cancelación o lo que incluye el paquete. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una agencia de viajes?', a: 'Un catálogo de tours con reserva y pago de depósito entra en el rango de e-commerce desde $1,950, según el número de tours y las integraciones. Una agencia con pocos paquetes puede partir de una Web empresarial desde $1,250 e integrar la reserva después. Siempre con cotización cerrada por escrito.' },
          { q: '¿Puedo cobrar solo un depósito y el resto en el tour?', a: 'Sí, y es lo más común en el rubro. Configuramos el sistema para cobrar un anticipo por <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a> que asegura el cupo, y el saldo se paga el día del tour o como definas. El depósito reduce los cupos que se reservan y luego no se presentan.' },
          { q: '¿Sirve para un tour operador pequeño, de uno o dos destinos?', a: 'Sí, y muchas veces rinde más. Dos o tres tours bien presentados, con reserva propia, te independizan de vender solo por WhatsApp o a través de intermediarios que se quedan con tu margen.' },
          { q: '¿Puedo manejar precios y cupos por temporada yo mismo?', a: 'Sí, es parte del diseño. Dejas configuradas tarifas por fecha, promociones de temporada y cupos que activas o cierras tú mismo desde el panel, sin depender de nadie para reaccionar a un feriado o a temporada baja.' },
          { q: '¿La web funciona en inglés para los turistas extranjeros?', a: 'Sí. Servimos el sitio en español e inglés con URLs y etiquetado por idioma, no con un traductor automático que rompe la confianza. Para el viajero internacional, poder leer el itinerario y reservar en su idioma es lo que cierra la venta.' },
                  { q: '¿Qué contenido trae viajeros que todavía no eligieron destino?', a: 'Comparativas honestas entre destinos, qué se hace en cada uno, cuánto cuesta de verdad una semana y en qué mes conviene ir. Casi ninguna agencia panameña lo publica, y quien ayuda a decidir el destino suele quedarse con la venta completa.' },
          { q: '¿Debo publicar la política de cancelación?', a: 'Es la primera pregunta real del cliente, antes que el precio. Cuánto es el depósito, hasta cuándo se cancela y con qué penalidad, si se puede fraccionar el pago. Publicarlo evita que el cliente se enfríe esperando una respuesta por WhatsApp.' },
          { q: '¿Vale la pena tener la web en inglés?', a: 'Para el receptivo, que es el de mayor margen. El turista que viene a Panamá busca en inglés y hoy suele llegar a través de un operador extranjero que revende tu producto con margen encima. No hace falta traducir todo: bastan las páginas de los tours que vendes a extranjeros.' },
          { q: '¿Por qué tengo el WhatsApp lleno y cierro poco?', a: 'Casi siempre porque lo que decide —qué incluye, depósito, cancelación, fechas de salida— no está publicado, y el cliente pregunta, espera y se enfría. Publicarlo convierte consultas en reservas con depósito, que es la única métrica que cuenta.' },
          { q: '¿Cuándo NO conviene tener web propia si vendes tours?', a: 'Si toda tu venta viene de una plataforma como Viator o Airbnb Experiences y estás cómodo con su comisión, la web propia es un proyecto paralelo, no urgente. Se vuelve urgente el día que quieres vender directo y dejar de pagar esa comisión: ahí la web deja de ser gasto y empieza a ser margen.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-agencias-de-viajes-panama', label: 'Guía: diseño web para agencias de viajes' },
          { slug: 'industrias/diseno-web-turismo-hoteles-panama', label: 'Web para Turismo y Hoteles' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas Online' },
          { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Pagos con Yappy' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu agencia de viajes', wa: 'Hola, quiero cotizar una web para una agencia de viajes y tours con reservas.' },
  },

  /* ---------- IMPORTADORAS Y DISTRIBUIDORAS ---------- */
  {
    slug: 'industrias/diseno-web-importadoras-distribuidoras-panama',
    parent,
    title: 'Diseño Web para Importadoras y Distribuidoras en Panamá',
    description: 'Diseño web para importadoras y distribuidoras B2B en Panamá: catálogo mayorista, líneas de producto, credibilidad y captación de clientes comerciales.',
    h1: 'Diseño web para importadoras y distribuidoras',
    breadcrumb: 'Importadoras',
    service: { type: 'Diseño web para importadoras y distribuidoras B2B' },
    heroImage: { src: '/images/industrias/diseno-web-importadoras-distribuidoras-panama.jpg', alt: 'Almacén de distribución con estanterías de mercancía y montacargas' },
    lead: [
      'Panamá es el hub que redistribuye a media región, pero muchas importadoras siguen vendiendo con un catálogo en PDF que se manda por correo y ya nadie abre.',
      'El diseño web para importadoras y distribuidoras en Panamá que hacemos en Elemento Web es un sitio B2B: catálogo por línea y marca representada, fichas con empaque por caja, lista descargable con fecha, precios mayoristas solo para clientes registrados y formulario de apertura de cuenta, con RUC, cobertura y, si aplica, operación en Zona Libre visibles.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una importadora o distribuidora?',
        items: [
          'Catálogo por línea de producto y por marca representada, navegable y buscable',
          'Fichas con especificaciones, presentación, empaque por caja y disponibilidad',
          'Sección de marcas que representas: la exclusividad es un argumento de venta',
          'Cobertura logística: a qué zonas del país (o región) despachas y en qué plazos',
          'Formulario de apertura de cuenta mayorista o solicitud de cotización',
          'Zona de precios o pedidos solo para clientes registrados, si vendes B2B cerrado',
          'Credibilidad: años en el mercado, RUC visible, certificaciones y bodega real',
          'Descarga de catálogo o lista de precios actualizada, sin PDF de hace dos años',
        ],
      },
      {
        type: 'prose',
        h2: 'La credibilidad es lo primero que compra un cliente B2B',
        paragraphs: [
          'El minorista que te elige como proveedor apuesta a que tendrás inventario, cumplirás plazos y respaldarás lo que vendes. Antes de mirar precios, comprueba que eres un proveedor formal y estable.',
          'Lo demuestran los años en el mercado, las marcas que representas (sobre todo si tienes exclusividad), una bodega real en fotos, el RUC y la razón social visibles. <strong>Un distribuidor que se muestra con transparencia se ve como un socio; uno con un catálogo desactualizado, como un intermediario de paso.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: '¿Debe vender en línea una importadora?',
        paragraphs: [
          'Rara vez al consumidor final. El objetivo no es un carrito, sino una solicitud de cotización o de apertura de cuenta que llegue a tu equipo comercial con el cliente ya calificado: empresa, zona, líneas de interés.',
          'Ese lead puede entrar directo a un CRM, y un <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">asistente con IA</a> puede contestar las consultas repetidas de disponibilidad y líneas.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de importadora o distribuidora',
        items: [
          { h3: 'Estructura del catálogo', text: 'Organizamos el inventario por línea y marca, con los filtros que usa tu comprador mayorista.' },
          { h3: 'Captación calificada', text: 'Configuramos el formulario de cotización o apertura de cuenta y lo conectamos a tu equipo o CRM, en lugar de correos sueltos.' },
          { h3: 'Zona privada y actualización', text: 'Si vendes B2B cerrado, montamos el acceso con precios y pedidos por cliente, y te dejamos actualizando catálogo y listas desde el panel.' },
        ],
      },
      {
        type: 'cards',
        h2: 'A quién capta la web de una distribuidora',
        intro: 'El minorista, el gran comprador y la marca que busca representante evalúan cosas distintas. La web le habla a cada uno.',
        items: [
          { h3: 'El minorista o revendedor', text: 'Ferretería, abarrotería, tienda o taller que busca un proveedor confiable. Le pesa el surtido de la línea, la disponibilidad constante y unas condiciones claras para abrir cuenta.' },
          { h3: 'El gran comprador o cadena', text: 'Gerente de compras que evalúa volumen, cumplimiento y respaldo. Le importan las marcas que representas, la cobertura logística y la formalidad de la empresa.' },
          { h3: 'La marca que busca representante', text: 'Un fabricante del exterior que evalúa a quién darle la distribución en Panamá. Ve tu web como carta de presentación: cobertura, portafolio y seriedad definen si te confía su línea.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Web corporativa a medida' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Catálogo web o catálogo en PDF: el comprador B2B necesita los dos',
        paragraphs: [
          'El comprador mayorista trabaja con listas: arma el pedido en una hoja de cálculo, lo cruza con su bodega y después cotiza. Lo habitual en el rubro es un PDF de sesenta páginas de hace dos años, con precios que ya no valen, que Google no lee.',
          'Lo que funciona es el catálogo navegable por línea y marca, que posiciona cuando alguien busca «distribuidor de» tal producto en Panamá, más una descarga actualizada (mejor en hoja de cálculo) con códigos, empaque, unidad mínima y disponibilidad. <strong>Con fecha visible:</strong> un catálogo sin fecha se asume viejo, y quien duda del catálogo duda del inventario.',
        ],
      },
      {
        type: 'prose',
        h2: 'Mostrar el producto sin publicar el precio mayorista',
        paragraphs: [
          'Muchas distribuidoras no publican catálogo para que la competencia no vea sus precios ni el cliente final compare con el detallista al que surten. Pero publicar catálogo no obliga a publicar precio: el catálogo público muestra marcas, presentaciones y empaques; el precio vive detrás de un registro que tú apruebas.',
          'Ese registro te dice quién mira tu catálogo (empresa, RUC, zona, líneas de interés), una base de prospectos que el PDF por correo nunca te dio, y permite precios por nivel de cliente sin que nadie vea los del otro.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que un comprador B2B no te tome en serio',
        intro: 'Señales que un comprador profesional lee en el primer minuto.',
        items: [
          'Sin catálogo ni lista de marcas que se distribuyen',
          'Sin RUC, razón social ni años de operación visibles',
          'Correo de contacto en Gmail o Hotmail en vez de dominio propio',
          'Sin decir si se es distribuidor autorizado o exclusivo de las marcas',
          'Nada sobre unidad mínima de compra ni condiciones de pedido',
          'Sin información de cobertura: ciudad, interior, región',
          'Ninguna mención de plazos de entrega ni de si hay stock local',
          'Catálogo o novedades sin fecha, que se asumen desactualizados',
        ],
      },
      {
        type: 'prose',
        h2: 'La Zona Libre y el stock local son argumento de venta, no un dato interno',
        paragraphs: [
          'Al comprador regional que duda entre importar directo o comprarte a ti lo decide el tiempo y el riesgo, no solo el precio. Si tienes stock local, operación en la Zona Libre de Colón o capacidad de reexportación, dilo con plazos: cuánto tarda un pedido a Ciudad de Panamá, al interior y a la región.',
          'Publica también lo que un comprador profesional pregunta siempre: si el producto llega nacionalizado, qué documentación entregas y si hay soporte o garantía local. <strong>Poder llamar a alguien en Panamá cuando algo falla decide compras completas en líneas técnicas.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: solicitudes calificadas y qué líneas se consultan',
        paragraphs: [
          'Cuántas solicitudes llegaron de empresas reales, de qué tamaño, de qué zona y por qué línea. Si una marca que apenas promocionas concentra muchas consultas, quizá convenga ampliarla, negociar con ese proveedor o darle página propia.',
          'Mide el embudo del área de clientes (registrados, aprobados, compradores), que suele revelar una aprobación demasiado lenta, y el origen geográfico, que a veces muestra demanda de países que no estabas trabajando. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una importadora o distribuidora?', a: 'Depende del tamaño del catálogo y de si necesitas zona privada de clientes. Una vitrina B2B con catálogo y captación parte de una Web empresarial desde $1,250; con catálogo grande, precios por cliente y pedidos en línea entra al rango de e-commerce desde $1,950, y los proyectos a medida arrancan desde $2,900. Siempre con cotización cerrada por escrito.' },
          { q: '¿Puedo mostrar precios solo a mis clientes mayoristas?', a: 'Sí. Montamos una zona privada donde precios, disponibilidad y pedidos son visibles solo para clientes registrados y aprobados. La parte pública funciona como vitrina que atrae, sin exponer tus condiciones a la competencia ni al consumidor final.' },
          { q: '¿Necesito vender en línea o solo captar clientes?', a: 'La mayoría de importadoras no cobra en línea al consumidor final: su web capta y califica compradores B2B para el equipo comercial. Si además quieres que tus clientes registrados coloquen pedidos en línea, se puede montar; se define según tu modelo en el diagnóstico.' },
          { q: '¿Cómo actualizo el catálogo cuando cambian precios o llega mercancía?', a: 'Desde un panel simple: agregas productos, cambias precios y marcas agotados en minutos. Es justo el problema del PDF, que se desactualiza y da mala impresión. Un catálogo web siempre al día es parte de la credibilidad que vende.' },
          { q: '¿Sirve si distribuyo a toda la región y no solo a Panamá?', a: 'Sí. Panamá como hub comercial es un argumento fuerte: mostramos tu cobertura logística, los países o zonas que despachas y los plazos. Podemos servir el sitio en español e inglés si atiendes clientes de la región que negocian en otro idioma.' },
                  { q: '¿Cómo publico catálogo sin que la competencia vea mis precios?', a: 'Son dos cosas distintas. El catálogo público muestra qué distribuyes, de qué marcas y en qué presentaciones; el precio vive detrás de un registro que tú apruebas. Además ese registro te dice quién está mirando: empresa, RUC, zona y líneas de interés.' },
          { q: '¿Sigue sirviendo el catálogo en PDF?', a: 'Sirve como herramienta de trabajo, no como catálogo principal. El comprador B2B arma listas en hoja de cálculo, así que conviene tener el catálogo navegable en la web —que es lo que posiciona— más una descarga actualizada con códigos, empaque y unidad mínima. Con fecha visible.' },
          { q: '¿Vale la pena mencionar la Zona Libre y el stock local?', a: 'Es tu ventaja competitiva y casi nadie la comunica. Para el comprador regional que evalúa entre importar directo o comprarte, lo que decide es el tiempo y el riesgo. Ponlo con números: cuánto tarda un pedido a la ciudad, al interior y a la región.' },
          { q: '¿Qué dato de la web cambia decisiones de negocio?', a: 'Las consultas por línea de producto. Si una marca que apenas promocionas concentra un tercio de las consultas, conviene ampliarla o negociar mejores condiciones con ese proveedor. Y el origen geográfico, que suele revelar demanda de países que no estabas trabajando.' },
          { q: '¿Cuándo NO conviene la web de una importadora?', a: 'Si vendes solo a una red cerrada de distribuidores que ya te conoce, un catálogo público te expone precios sin traerte clientes nuevos. Ahí conviene un portal privado, que es proyecto a medida desde $2,900. La web abierta se justifica cuando buscas nuevos puntos de venta o representar marcas nuevas.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-importadoras-panama', label: 'Guía: diseño web para importadoras' },
          { slug: 'industrias/diseno-web-logistica-transporte-panama', label: 'Web para Logística' },
          { slug: 'industrias/diseno-web-ferreterias-materiales-panama', label: 'Web para Ferreterías' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu distribuidora', wa: 'Hola, quiero cotizar una web para una importadora o distribuidora B2B.' },
  },

  /* ---------- DENTISTAS Y ODONTOLOGÍA ---------- */
  {
    slug: 'industrias/diseno-web-dentistas-odontologia-panama',
    parent,
    title: 'Diseño Web para Dentistas y Odontología en Panamá',
    description: 'Diseño web para dentistas y clínicas dentales en Panamá: citas online, casos de antes y después, confianza y captación de pacientes que eligen consultorio.',
    h1: 'Diseño web para dentistas y odontología',
    breadcrumb: 'Dentistas',
    service: { type: 'Diseño web para dentistas y odontología' },
    heroImage: { src: '/images/industrias/diseno-web-dentistas-odontologia-panama.jpg', alt: 'Consultorio dental moderno con sillón odontológico y equipo limpio' },
    lead: [
      'El paciente que busca dentista tiene miedo: al dolor, al costo y a caer en malas manos. Tu web es lo que calma ese miedo antes de que agende.',
      'El diseño web para dentistas en Panamá que hacemos en Elemento Web incluye cita online con recordatorios automáticos, una página por tratamiento (ortodoncia, implantes, blanqueamiento, endodoncia) con casos de antes y después autorizados, perfil del odontólogo con idoneidad, seguros aceptados y ficha de Google alineada por barrio. Parte de una web empresarial desde $1,250.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de un consultorio dental en Panamá?',
        items: [
          'Agendamiento de citas online con disponibilidad real, sin llamar en horario de oficina',
          'Galería de casos de antes y después, con consentimiento del paciente',
          'Página por tratamiento: ortodoncia, implantes, blanqueamiento, endodoncia, estética',
          'Perfil del odontólogo con idoneidad, especialidad y formación',
          'Fotos reales del consultorio: limpieza y equipo tranquilizan más que mil palabras',
          'Formas de pago, financiamiento y seguros aceptados bien visibles',
          'Recordatorios de cita automáticos que reducen las ausencias',
          'WhatsApp directo para la urgencia o la duda antes de agendar',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué un consultorio dental necesita citas online?',
        paragraphs: [
          'En un consultorio dental quien contesta el teléfono suele ser quien asiste al odontólogo. Mientras atiende en el sillón, el teléfono suena y nadie responde: ese paciente agenda con el siguiente consultorio de la búsqueda.',
          'Con el <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">agendamiento online</a> el paciente ve los horarios y confirma solo, incluso de noche, sin explicar por teléfono qué le duele, que es justo lo que frena al que posterga por nervios. Los recordatorios automáticos atacan el otro hueco del rubro: las ausencias.',
        ],
      },
      {
        type: 'prose',
        h2: 'Casos de antes y después y un consultorio que se deja ver',
        paragraphs: [
          'En odontología estética se compra con los ojos. Una galería de casos reales de antes y después, con consentimiento del paciente, prueba tu nivel y ayuda a imaginarse el resultado de un tratamiento de ticket alto. Las sonrisas de banco hacen lo contrario.',
          'Fotos reales del consultorio limpio, del equipo y del odontólogo con su idoneidad calman el miedo de fondo: que el lugar no sea serio o higiénico.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de consultorio dental',
        items: [
          { h3: 'Cita online conectada', text: 'Agendamiento con disponibilidad real y recordatorios automáticos, para descargar el teléfono del consultorio.' },
          { h3: 'Tratamientos y casos', text: 'Una página por tratamiento con su propia galería de antes y después.' },
          { h3: 'Presencia local', text: 'Alineamos la web con tu ficha de Google Business y Maps para la búsqueda «dentista cerca de mí».' },
        ],
      },
      {
        type: 'cards',
        h2: 'Cómo llega cada paciente a tu web',
        intro: 'El mismo consultorio recibe visitas con miedos y urgencias muy distintos. La web responde a cada uno.',
        items: [
          { h3: 'La urgencia', text: 'Un dolor fuerte, un diente roto, algo que no aguanta. Busca desesperado quién lo atienda ya. Necesita ver que tomas urgencias, un WhatsApp directo y poder agendar la cita más cercana sin trámites.' },
          { h3: 'El tratamiento estético', text: 'Quiere ortodoncia, implantes o blanqueamiento. Investiga con calma, compara consultorios y decide por los casos reales, la confianza y el financiamiento. Es el paciente de mayor valor.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Citas Online' } },
          { h3: 'La familia que busca dentista fijo', text: 'Padres que quieren un consultorio de confianza para todos, incluidos los niños. Les pesa el trato, la limpieza del lugar, los horarios y que aceptes su seguro.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Una página por tratamiento dental, no una lista de servicios',
        paragraphs: [
          'Cada tratamiento es una búsqueda distinta de una persona distinta. Quien busca «ortodoncia invisible» quiere saber cuánto dura y cuánto cuesta al mes. Quien busca «implante dental» ya perdió la pieza y pregunta si duele y cuántas visitas son. Quien busca «endodoncia de urgencia» tiene dolor ahora y llama al primero que le resuelva.',
          'Una página por tratamiento le responde a cada uno: el procedimiento sin tecnicismos, cuánto toma, qué se siente, cómo se paga y su galería de casos, y compite por su propia búsqueda. <strong>Si un paciente lo busca con esas palabras, merece su propia página:</strong> cinco tratamientos bien trabajados rinden más que veinte mencionados de pasada.',
        ],
      },
      {
        type: 'prose',
        h2: 'El paciente te busca por barrio, no por «Panamá»',
        paragraphs: [
          'Nadie con dolor de muela busca «el mejor odontólogo de Panamá». Busca «dentista en San Francisco», «ortodoncista Costa del Este», «endodoncia Bethania». Un tratamiento son seis u ocho visitas, y nadie cruza la ciudad ocho veces si tiene algo decente a diez minutos.',
          'Compites contra los consultorios de tu radio, y eso se gana con una ficha de <a href="/crecimiento/seo-local-google-maps-panama/">Google Business Profile</a> completa y con fotos reales, reseñas recientes y una web que diga dónde estás, cómo se llega y dónde se estaciona: en Ciudad de Panamá, «¿dónde dejo el carro?» decide citas. Con más de una sede, cada una lleva su propia página con dirección, horario y teléfono.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que espanta a un paciente antes de que agende',
        intro: 'Cada uno manda pacientes al consultorio de al lado.',
        items: [
          'Fotos de banco: sonrisas perfectas de personas que nunca pisaron tu consultorio',
          'Precios ocultos por completo, sin ni siquiera un rango ni un "desde"',
          'Un formulario que pide historial médico sin explicar quién lo va a leer',
          'El último caso publicado con dos años de antigüedad',
          'Nombre del odontólogo sin idoneidad, sin especialidad y sin foto',
          'Un mapa que cae en la esquina equivocada o una dirección sin punto de referencia',
          'Web que en el celular obliga a hacer zoom para leer el teléfono',
          'Seguros aceptados que no aparecen por ningún lado, cuando es la primera pregunta de media ciudad',
        ],
      },
      {
        type: 'prose',
        h2: 'Los datos del paciente no son un detalle técnico',
        paragraphs: [
          'Una web dental recoge motivo de consulta, historial y a veces fotos de la boca del paciente. En Panamá eso cae bajo la <strong>Ley 81 de 2019 de Protección de Datos Personales</strong>, y los datos de salud son de categoría sensible.',
          'Se traduce en decisiones concretas: sitio en HTTPS, formulario que diga quién lee lo que el paciente escribe, consentimiento por escrito para cada foto de caso y un buzón del consultorio con acceso controlado, no un correo personal compartido por cuatro personas. Nosotros montamos la parte técnica; <strong>el texto legal y el consentimiento clínico los revisa tu asesor.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: citas agendadas, no visitas',
        paragraphs: [
          'Mil visitas sin una cita no sirven; doscientas con quince citas se justifican solas. Mide citas agendadas online, conversaciones por WhatsApp y llamadas desde el botón de la web, y de qué tratamiento venía cada una: eso te dice dónde invertir tiempo y pauta.',
          'Mira también la tasa de ausencia: si faltan tres de cada diez citas, el problema son los recordatorios, no la captación, y se arregla con automatización. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un consultorio dental?', a: 'Una Web empresarial desde $1,250 con páginas por tratamiento, galería de casos y cita online cubre a la mayoría de los consultorios. Clínicas dentales con varios odontólogos, sedes o financiamiento propio pueden ir a una corporativa a medida desde $2,900. Siempre te damos una cotización cerrada por escrito antes de empezar.' },
          { q: '¿La cita online se conecta con la agenda que ya usamos?', a: 'Depende del sistema. Si tu software de agenda permite integración, sincronizamos para evitar dobles reservas. Si no, montamos una agenda propia sencilla con <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">citas online</a> y recordatorios. Lo evaluamos en el diagnóstico antes de prometer nada.' },
          { q: '¿Puedo mostrar casos de antes y después de mis pacientes?', a: 'Sí, y es de lo que más convierte, siempre con el consentimiento del paciente. Montamos galerías por tratamiento con las fotos reales de tu trabajo. Se maneja con cuidado para respetar la privacidad y la ética profesional.' },
          { q: '¿Podemos mostrar qué seguros y financiamiento aceptamos?', a: 'Sí, y conviene mucho. El costo es una de las primeras dudas del paciente dental. Dejar visibles los seguros, las formas de pago y el financiamiento (por ejemplo para ortodoncia o implantes) elimina una fricción que hace perder al paciente que, sin esa información, simplemente llama a otro consultorio.' },
          { q: '¿Sirve para un odontólogo independiente y no solo para una clínica grande?', a: 'Sí, y muchas veces rinde más. Para un odontólogo independiente el enfoque es su perfil, sus tratamientos estrella bien explicados con casos reales y la cita online. Eso compite de igual a igual con clínicas grandes en las búsquedas específicas de tu zona.' },
                  { q: '¿Necesito una página por cada tratamiento o basta con una de servicios?', a: 'Una por tratamiento, al menos para los cuatro o cinco que más facturan. Cada tratamiento es una búsqueda distinta hecha por un paciente distinto, y una sola página de servicios no compite en ninguna de esas búsquedas. Los tratamientos secundarios sí pueden ir agrupados.' },
          { q: '¿Puedo publicar fotos de antes y después de mis pacientes?', a: 'Con consentimiento del paciente por escrito y específico para publicación en internet, que no es lo mismo que el consentimiento del tratamiento. Conviene que ese permiso lo redacte tu asesor legal. Nosotros dejamos la galería preparada para que puedas retirar un caso en cualquier momento si el paciente cambia de opinión.' },
          { q: 'Tengo dos sedes, ¿una web o dos?', a: 'Una web con una página propia por sede: cada una con su dirección, su horario, su teléfono y su ficha de Google Business Profile. Una sola página que mencione ambas no posiciona en ninguna de las dos zonas, y en dental la cercanía decide.' },
          { q: '¿Debo poner precios en la web?', a: 'Un rango o un "desde" suele traer más pacientes de los que espanta: filtra al que nunca iba a agendar y le da seguridad al que sí. Esconderlo del todo hace que el paciente asuma lo peor y siga buscando. Si tu estructura varía mucho por caso, funciona bien publicar el precio de la valoración inicial.' },
          { q: '¿Qué suma al precio: las sedes o la agenda por doctor?', a: 'Una página por tratamiento, con precios orientativos y solicitud de cita: hasta 6 páginas desde $1,250. Con varias sedes, agenda por doctor y recordatorios automáticos, pasa a proyecto a medida desde $2,900. El mantenimiento arranca en $99 al mes y los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene invertir en la web dental?', a: 'Si tu agenda ya está copada, la web te va a generar solicitudes que no puedes atender, y una cita pedida y no respondida es una reseña mala esperando. Primero resuelve quién contesta y en cuánto tiempo; después abre la puerta.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-dentistas-panama', label: 'Guía: diseño web para dentistas' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas y Salud' },
          { slug: 'industrias/diseno-web-clinicas-esteticas-panama', label: 'Web para Clínicas Estéticas' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Citas Online' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu consultorio dental', wa: 'Hola, quiero cotizar la web de un consultorio dental.' },
  },
];
