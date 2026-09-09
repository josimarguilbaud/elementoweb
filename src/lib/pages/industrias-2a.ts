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
      'En contabilidad la web no cierra la venta, construye la confianza que la hace posible. El empresario que busca contador llega con miedo a las multas, a los reparos y a que le manejen mal el ITBMS. Una web que transmite orden, idoneidad y cumplimiento lo convence de dar el primer paso; una improvisada lo manda al siguiente nombre de la lista.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de un contador o firma contable',
        intro: 'La web de una firma contable vende una sola cosa antes que un servicio: la tranquilidad de que sus números quedan en buenas manos.',
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
        h2: 'La confianza es tu producto, y se diseña',
        paragraphs: [
          'Nadie entrega su contabilidad por impulso. El cliente compara dos o tres firmas, revisa quién las respalda y decide por una sensación difícil de fingir: seriedad. Esa sensación se construye con detalles concretos, no con adjetivos. La idoneidad del contador con su número de registro, los años de experiencia, el tipo de empresas que ya atiendes y un lenguaje que demuestra que dominas el terreno fiscal panameño pesan más que cualquier promesa.',
          'El error común es una web que habla de la firma en abstracto: "brindamos servicios contables de calidad". Eso no dice nada. El cliente quiere ver que entiendes <strong>su</strong> problema: que sabes de la declaración de ITBMS mensual, del cierre de renta, de la planilla del Seguro Social, del reporte a la Superintendencia si aplica. Cuando la web habla ese idioma, el visitante siente que ya lo entendieron antes de la primera reunión.',
          'Y como manejas información sensible, la web tiene que respirar reserva. Un formulario que pide cifras de facturación por un canal abierto asusta; uno que pide solo lo necesario para agendar una consulta y ofrece WhatsApp o correo para lo demás transmite el cuidado que el cliente espera de quien va a ver sus números.',
        ],
      },
      {
        type: 'prose',
        h2: 'Una página por servicio: así te encuentra el cliente correcto',
        paragraphs: [
          'El empresario no busca "contador" a secas. Busca "declaracion de renta Panama", "contador para planilla", "constitucion de sociedad anonima Panama" o "quien me lleva el ITBMS". Si todos tus servicios viven amontonados en una sola pagina de "Servicios", no compites en ninguna de esas busquedas concretas.',
          'Cada servicio merece su propia URL, con el problema explicado en el idioma del cliente, qué incluye, para quién es y qué plazos maneja. Una página para renta de persona natural, otra para contabilidad mensual de PYME, otra para constitución de empresas. <strong>Así se posiciona una firma contable: servicio por servicio</strong>, capturando a cada cliente en el momento exacto de su necesidad.',
          'Ese contenido tambien te ahorra tiempo: las mismas preguntas que respondes veinte veces por WhatsApp (cuando vence el ITBMS, que gastos son deducibles, cuanto cuesta llevar una contabilidad) se convierten en articulos que trabajan solos, atraen busquedas y llegan al cliente con la duda ya medio resuelta. Si ademas usas <a href="/saas/cifrao/">Cifrao</a> para la gestion contable, la web puede presentar ese respaldo tecnologico como un diferenciador frente al contador que aun trabaja todo en hojas de calculo sueltas.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de firma contable',
        intro: 'El mismo proceso ordenado que un cliente espera de su contador, aplicado a tu web.',
        items: [
          { h3: 'Mapa de servicios y clientes', text: 'Listamos cada servicio que ofreces y a qué tipo de cliente atiende (persona natural, PYME, sociedad, Zona Libre) para decidir qué merece página propia y posicionable.' },
          { h3: 'Contenido con autoridad fiscal', text: 'Redactamos cada servicio con dominio real del terreno panameño: plazos, obligaciones y beneficios, sin jerga vacía y sin prometer lo que la normativa no permite.' },
          { h3: 'Confianza y captación', text: 'Montamos idoneidad, equipo, recursos y un formulario que filtra la consulta, con WhatsApp directo para lo que el cliente prefiere no escribir en un formulario.' },
          { h3: 'Publicación y crecimiento', text: 'Dejamos el blog listo para que cada duda fiscal frecuente se convierta en un artículo que capta clientes, y el sitio preparado para SEO local en Panamá.' },
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
        type: 'statement',
        text: 'Un contador vende tranquilidad. Una web desordenada vende justo lo contrario: si tu sitio se ve improvisado, el cliente asume que así llevarás sus números.',
        strong: 'si tu sitio se ve improvisado, el cliente asume que así llevarás sus números',
      },
            {
        type: 'prose',
        h2: 'El calendario fiscal es tu calendario editorial',
        paragraphs: [
          'La demanda de servicios contables en Panamá no es pareja: se dispara en fechas concretas. Declaración de renta, informes de ITBMS, planilla, declaración jurada de rentas de personas jurídicas, cierre fiscal. En cada una de esas fechas hay miles de personas buscando en Google qué les toca y hasta cuándo.',
          'Casi ninguna firma contable panameña capta ese tráfico, porque publica sobre sus servicios en vez de sobre las fechas. Un artículo que explique bien un vencimiento —a quién aplica, qué documentos hacen falta, qué pasa si se presenta tarde— llega justo cuando el cliente potencial está preocupado y buscando.',
          'La ventaja de este contenido es que se escribe una vez y sirve todos los años, actualizando fechas y montos. Un buen artículo sobre la declaración de renta trabaja cada marzo sin que nadie lo toque.',
          '<strong>Y llega al cliente en el peor momento posible para él, que es el mejor para ti:</strong> cuando ya se dio cuenta de que no lo va a resolver solo. Ese es el que contrata, no el que investiga en agosto.',
        ],
      },
      {
        type: 'prose',
        h2: 'El cliente de enero y el de la semana del vencimiento no son el mismo',
        paragraphs: [
          'A una firma contable le llegan dos clientes muy distintos. El de enero busca ordenarse: quiere un contador para el año, compara, pregunta por servicios mensuales, decide con calma. El de la semana del vencimiento tiene un problema encima y necesita a alguien hoy.',
          'La mayoría de las webs del rubro solo le hablan al primero. Explican los servicios, la trayectoria de la firma, la filosofía de trabajo. Todo correcto y todo inútil para el que llegó con la fecha en el cuello, que solo quiere saber si le pueden atender ahora y cuánto cuesta.',
          'Se resuelve con dos caminos visibles desde la portada: uno para el que quiere asesoría continua y otro para el que necesita resolver un trámite puntual. Cada uno con su propia página, su propio tono y su propia forma de contacto: formulario para el primero, WhatsApp directo para el segundo.',
          'El cliente de urgencia además suele convertirse en cliente fijo si lo sacas del apuro. <strong>Atenderlo bien es la puerta de entrada más barata que tiene una firma contable</strong>, y casi nadie la abre.',
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
          'La operación real de casi toda firma contable panameña funciona así: el cliente manda las facturas por WhatsApp, a veces fotografiadas de mala manera, al celular personal de alguien del equipo. Funciona hasta que deja de funcionar.',
          'El problema no es solo de orden. Ahí viajan datos financieros, planillas con salarios y cédulas de empleados: datos personales bajo la <strong>Ley 81 de 2019</strong>, y algunos de terceros que ni siquiera son tu cliente. Que vivan en el rollo de fotos de un teléfono personal es un riesgo que nadie ve hasta que hay un problema.',
          'La web puede ser la puerta de una solución simple: un área de cliente donde cada empresa sube sus documentos a su propia carpeta, con acceso por usuario y registro de qué se subió y cuándo. No hace falta un sistema caro; hace falta que deje de ser un chat.',
          'Eso además elimina la pregunta más repetida de la firma —"¿me mandaste ya la factura de tal cosa?"— porque queda registrado. <strong>Es de los pocos cambios que mejoran el cumplimiento y la operación diaria al mismo tiempo.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: consultas por tipo de servicio y cuántas quedan',
        paragraphs: [
          'La métrica que importa en una firma contable no es el tráfico, es cuántas consultas llegaron y de qué tipo: asesoría mensual, trámite puntual, constitución de sociedad, auditoría. Son negocios distintos con márgenes muy distintos.',
          'El dato que más falta hace es la proporción entre consultas de urgencia y de servicio continuo. Si el noventa por ciento son urgencias, la web está captando bien en las fechas fuertes pero no está construyendo cartera recurrente, que es donde está la estabilidad de la firma.',
          'Vale la pena medir también cuántos clientes de trámite puntual se convirtieron después en clientes mensuales. Ese número dice si el seguimiento posterior funciona, y casi siempre se puede mejorar con un recordatorio automático antes del siguiente vencimiento.',
          'Y de qué contenido venía cada consulta: si tus artículos de calendario fiscal generan la mitad de los contactos del año, ya sabes qué escribir. Lo dejamos medido en un tablero corto; el detalle en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una firma contable?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">Página PYME desde $950</a>, con páginas por servicio, idoneidad del equipo y formulario de consulta. Firmas con muchos servicios o varias líneas de cliente pueden ir a una corporativa a medida desde $2,900. Siempre te damos una cotización cerrada por escrito antes de empezar.' },
          { q: '¿Puedo publicar recordatorios de plazos fiscales?', a: 'Sí, y es de lo que más engancha. Un calendario o artículos con los vencimientos de renta, ITBMS y planilla posiciona tu firma como la que está al día, y te da razones legítimas para reaparecer ante tus clientes cada mes.' },
          { q: '¿La web se conecta con Cifrao o con mi software contable?', a: 'La web es tu vitrina de confianza y captación, no reemplaza tu sistema contable. Cuando usas <a href="/saas/cifrao/">Cifrao</a> u otra plataforma, la web puede enlazar al portal del cliente y presentar ese respaldo como diferenciador. La integración concreta se evalúa en el diagnóstico.' },
          { q: '¿Cómo manejan la confidencialidad de la información?', a: 'Los formularios piden solo lo necesario para agendar una consulta, nunca cifras sensibles por canales abiertos. Para lo demás dejamos WhatsApp o correo directo, y la web transmite de forma explícita el manejo responsable de los datos que el cliente espera de un contador.' },
          { q: '¿Sirve para un contador independiente y no solo para una firma grande?', a: 'Sí, y muchas veces rinde más. Un CPA independiente que posiciona bien dos o tres servicios concretos (planilla, renta de PYME, constitución de empresas) capta clientes de esas búsquedas específicas sin competir de frente con las firmas grandes en todo a la vez.' },
                  { q: '¿Qué contenido trae clientes a una firma contable?', a: 'El del calendario fiscal. Declaración de renta, ITBMS, planilla, cierre: en cada vencimiento hay miles de búsquedas de gente preocupada. Un artículo que explique a quién aplica, qué documentos hacen falta y qué pasa si se presenta tarde llega justo cuando el cliente decide contratar.' },
          { q: '¿Publico honorarios en la web?', a: 'Al menos un rango por tipo de servicio o por tamaño de empresa. La contabilidad se compra con miedo a la sorpresa, y un rango da más tranquilidad de la que quita. Los trabajos que varían mucho pueden ir con un "desde".' },
          { q: '¿Está bien recibir los documentos del cliente por WhatsApp?', a: 'Funciona hasta que deja de funcionar. Ahí viajan planillas con salarios y cédulas, datos personales bajo la Ley 81 de 2019, guardados en el rollo de fotos de un teléfono personal. Un área de cliente con carpeta por empresa lo resuelve y de paso elimina el "¿ya me lo mandaste?".' },
          { q: '¿Sirve la web si la firma capta por referidos?', a: 'Sí, por dos motivos. El referido igual te busca antes de llamar y compara lo que ve. Y el contenido de calendario fiscal capta al que no tiene quién lo refiera, que en las semanas de vencimiento es mucha gente.' },
        ],
      },
      {
        type: 'related',
        items: [
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
    heroImage: { src: '/images/industrias/diseno-web-agencias-viajes-tours-panama.jpg', alt: 'Viajera de espaldas con mochila mirando un mapa, lista para un tour' },
    lead: [
      'El viajero sueña con San Blas o Bocas desde el celular, a las once de la noche. Si en ese momento no puede reservar contigo, mañana reserva con otro.',
      'Tu agencia trabaja el paquete, arma el itinerario y aún así muchas ventas se te van por depender del WhatsApp saturado o de intermediarios que se llevan margen. Una web propia con paquetes claros, disponibilidad y reserva con depósito convierte al viajero en el momento en que está más motivado, sin que nadie más se meta en medio.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una agencia de viajes o tour operador',
        intro: 'El viajero compra una experiencia que todavía no vive: la web tiene que hacerla tangible y fácil de reservar.',
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
        h2: 'Reserva directa: recupera la venta que hoy se va por el camino',
        paragraphs: [
          'Muchas agencias venden solo por WhatsApp: el viajero escribe, alguien responde cuando puede, se manda el precio, el cliente lo piensa y muchas veces desaparece. En hora pico o de noche, esa conversación se enfría y la venta se pierde. La agencia trabajó el interés y no lo cobró.',
          'La <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">reserva online</a> cierra ese hueco: el viajero elige fecha, ve el cupo disponible y confirma con un <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">depósito por Yappy o tarjeta</a> en el momento en que está más entusiasmado. El depósito además compromete: reduce los "confirmo y luego no aparece" que descuadran un tour de cupo limitado.',
          'Esto no elimina el WhatsApp, lo ordena. El canal sigue para dudas y para cerrar al que necesita hablar, pero la reserva con depósito captura al que ya decidió. <strong>La venta que hoy depende de que alguien conteste a tiempo pasa a cerrarse sola, las 24 horas.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Menos dependencia de intermediarios y de la temporada',
        paragraphs: [
          'Cuando tus tours se venden solo a traves de otras agencias, plataformas o revendedores, cada reserva llega con una comision descontada y sin el dato del cliente. Sirven para llenar cupos sueltos, pero no pueden ser tu unico canal: te dejan sin margen y sin base de viajeros a quien volver a venderle. Tu web propia es el activo donde el turista ve tu tour, te paga a ti y queda en tu lista para el proximo viaje.',
          'El otro reto del rubro es la temporada. Los precios, los cupos y hasta qué tours conviene promocionar cambian entre temporada seca, verde, feriados largos y fin de año. Por eso dejamos los paquetes, las fechas y los precios bajo tu control, editables al momento: lanzas una promo de temporada baja, cierras un tour lleno o destacas el paquete de Carnaval sin depender de nadie. <strong>La agencia que reacciona rápido a la temporada vende; la que llega tarde ve pasar el feriado.</strong>',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de agencia de viajes',
        intro: 'De vender por WhatsApp a un sistema que reserva y cobra solo.',
        items: [
          { h3: 'Un tour, una página', text: 'Armamos cada destino o tour como página propia con fotos reales, itinerario, qué incluye, punto de salida y precio. Cada uno posiciona por su búsqueda: "tour a San Blas", "paquete Bocas del Toro".' },
          { h3: 'Reserva con depósito', text: 'Montamos la reserva online con disponibilidad por fecha y pago de depósito por Yappy o tarjeta, para asegurar el cupo y comprometer al viajero.' },
          { h3: 'Bilingüe y para el celular', text: 'Servimos el sitio en español e inglés con URLs por idioma y todo optimizado para el celular, donde el viajero de verdad decide y reserva.' },
          { h3: 'Paquetes y temporadas en tu control', text: 'Te dejamos editando precios, cupos y promociones de temporada tú mismo, sin llamar a la agencia cada vez que cambia un feriado.' },
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
        type: 'statement',
        text: 'El viajero decide cuando está motivado, no cuando tú puedes contestar. Una web que reserva y cobra sola vende en ese instante exacto.',
        strong: 'una web que reserva y cobra sola vende en ese instante exacto',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una agencia de viajes?', a: 'Un catálogo de tours con reserva y pago de depósito entra en el rango de e-commerce desde $1,500, según el número de tours y las integraciones. Una agencia con pocos paquetes puede partir de una Página PYME desde $950 e integrar la reserva después. Siempre con cotización cerrada por escrito.' },
          { q: '¿Puedo cobrar solo un depósito y el resto en el tour?', a: 'Sí, y es lo más común en el rubro. Configuramos el sistema para cobrar un anticipo por <a href="/funcionalidades/integracion-yappy-pasarelas-pago-panama/">Yappy o tarjeta</a> que asegura el cupo, y el saldo se paga el día del tour o como definas. El depósito reduce los cupos que se reservan y luego no se presentan.' },
          { q: '¿Sirve para un tour operador pequeño, de uno o dos destinos?', a: 'Sí, y muchas veces rinde más. Dos o tres tours bien presentados, con reserva propia, te independizan de vender solo por WhatsApp o a través de intermediarios que se quedan con tu margen.' },
          { q: '¿Puedo manejar precios y cupos por temporada yo mismo?', a: 'Sí, es parte del diseño. Dejas configuradas tarifas por fecha, promociones de temporada y cupos que activas o cierras tú mismo desde el panel, sin depender de nadie para reaccionar a un feriado o a temporada baja.' },
          { q: '¿La web funciona en inglés para los turistas extranjeros?', a: 'Sí. Servimos el sitio en español e inglés con URLs y etiquetado por idioma, no con un traductor automático que rompe la confianza. Para el viajero internacional, poder leer el itinerario y reservar en su idioma es lo que cierra la venta.' },
        ],
      },
      {
        type: 'related',
        items: [
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
      'Tu comprador B2B (el dueño de la ferretería, el gerente de compras del supermercado, el minorista que busca proveedor) investiga en línea antes de llamar. Si tu web no muestra las líneas que manejas y no transmite que eres un proveedor formal y con respaldo, ese cliente le compra al distribuidor que sí se lo dejó claro.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de una importadora o distribuidora',
        intro: 'El comprador mayorista no compra por impulso: evalúa proveedor, líneas, respaldo y condiciones. La web tiene que responder eso.',
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
          'En una compra mayorista hay dinero y continuidad en juego: el minorista que te elige como proveedor apuesta a que vas a tener inventario, cumplir plazos y respaldar lo que vende. Por eso, antes de mirar precios, evalúa si eres un proveedor formal y estable. La web es donde se gana o se pierde esa primera impresión.',
          'Señales concretas hacen el trabajo: los años en el mercado, las marcas que representas (sobre todo si tienes exclusividad de alguna), una bodega real que se muestra, el RUC y los datos formales visibles, y las líneas de producto bien organizadas. <strong>Un distribuidor que se muestra con transparencia se ve como un socio; uno con una web pobre o un catálogo desactualizado se ve como un intermediario de paso.</strong>',
          'El otro gran enemigo es el catalogo en PDF que se manda por correo. Se desactualiza el mismo dia que cambia un precio, no lo lee Google y obliga al comprador a bajar un archivo pesado para buscar un producto. Un catalogo web se navega por linea y marca, se actualiza al momento y aparece cuando el comprador busca "distribuidor de" tal producto en Panama.',
        ],
      },
      {
        type: 'prose',
        h2: 'Captar clientes B2B, no vender al consumidor final',
        paragraphs: [
          'Una importadora no vende como una tienda: rara vez cobra en línea al consumidor final. Su web tiene otro trabajo, más valioso: captar al comprador mayorista y darle todo para decidir contactarte. Por eso el objetivo no es un carrito, sino una solicitud de cotización o de apertura de cuenta bien filtrada, que llegue a tu equipo comercial con el cliente ya calificado.',
          'Cuando el modelo lo pide, montamos una zona privada para clientes registrados: precios mayoristas, disponibilidad y pedidos visibles solo para quien ya tiene cuenta, protegiendo tus condiciones de la competencia y del consumidor final. El resto del sitio hace de vitrina pública que atrae y filtra. Para el seguimiento de esos prospectos, la web puede entregar el lead directo a un CRM y, si quieres automatizar respuestas, sumar un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">asistente con IA</a> que atiende las consultas repetidas de disponibilidad y líneas.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de importadora o distribuidora',
        intro: 'De un catálogo en PDF a una plataforma que capta y califica clientes B2B.',
        items: [
          { h3: 'Estructura del catálogo', text: 'Organizamos tu inventario por línea de producto y por marca representada, con los filtros que tu comprador mayorista usa de verdad, para que encuentre en dos clics.' },
          { h3: 'Fichas y respaldo', text: 'Diseñamos la ficha de producto con especificaciones, presentación y empaque por caja, y montamos la sección de marcas, cobertura y credibilidad que un cliente B2B revisa antes de confiar.' },
          { h3: 'Captación calificada', text: 'Configuramos el formulario de cotización o apertura de cuenta mayorista que filtra al cliente y lo entrega calificado a tu equipo o CRM, en lugar de correos sueltos.' },
          { h3: 'Zona privada y actualización', text: 'Si vendes B2B cerrado, montamos el acceso para clientes registrados con precios y pedidos, y te dejamos actualizando catálogo y listas desde el panel, sin depender del programador.' },
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
        type: 'statement',
        text: 'En B2B el comprador ya te investigó antes de la primera llamada. Tu web decide si esa llamada ocurre o si se la hace a tu competencia.',
        strong: 'tu web decide si esa llamada ocurre o si se la hace a tu competencia',
      },
            {
        type: 'prose',
        h2: 'El catálogo que un comprador B2B necesita poder descargar',
        paragraphs: [
          'El comprador de una distribuidora no navega tu web como un consumidor. Trabaja con listas: arma su pedido en una hoja de cálculo, lo pasa a su jefe, lo cruza con lo que ya tiene en bodega y después cotiza. Una web bonita que no se pueda exportar no le sirve de nada.',
          'Por eso el catálogo descargable sigue siendo la pieza más pedida y la peor resuelta del rubro. Lo habitual es un PDF de sesenta páginas de hace dos años, con precios que ya no valen, que alguien manda por correo cuando lo piden.',
          'Lo que funciona es tener las dos cosas: el catálogo navegable en la web, que es lo que posiciona en Google y lo que el comprador usa para descubrir; y una descarga actualizada —en PDF o mejor en hoja de cálculo— con códigos, empaque, unidad mínima y disponibilidad, que es lo que usa para trabajar.',
          '<strong>Y con fecha visible de actualización.</strong> Un catálogo sin fecha se asume viejo, y el comprador que duda del catálogo duda del inventario.',
        ],
      },
      {
        type: 'prose',
        h2: 'Mostrar el producto sin publicar el precio mayorista',
        paragraphs: [
          'La razón por la que la mayoría de las distribuidoras no publica catálogo es siempre la misma: no quieren que la competencia vea sus precios, ni que el cliente final compare con el detallista al que ellos mismos surten. Es una preocupación legítima.',
          'La confusión está en creer que publicar catálogo obliga a publicar precio. Son dos cosas distintas. El catálogo público muestra qué distribuyes, de qué marcas, en qué presentaciones y empaques. El precio vive detrás de un registro: el cliente B2B se registra, tú lo apruebas, y ve su lista con sus condiciones.',
          'Ese registro tiene un beneficio adicional que compensa el trabajo: te dice quién está mirando tu catálogo. Nombre de la empresa, RUC, zona, qué líneas le interesan. Es una base de prospectos calificados que hoy no tienes, porque el que mira un PDF por correo es invisible.',
          'Y permite precios por nivel de cliente sin que nadie vea los del otro. <strong>Publicar qué vendes es visibilidad; publicar a cuánto es una decisión aparte</strong>, y confundirlas deja a muchas distribuidoras sin ninguna de las dos.',
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
          'Panamá es hub, y eso da a las distribuidoras panameñas una ventaja competitiva concreta que casi ninguna comunica: la capacidad de tener producto disponible rápido, sin que el cliente tenga que importar y esperar semanas.',
          'Para un comprador regional que evalúa entre importar directo o comprarte a ti, lo que decide es el tiempo y el riesgo, no solo el precio. Si tienes stock local, operación en Zona Libre de Colón, o capacidad de reexportación, eso vale y hay que decirlo con números: cuánto tarda un pedido a Ciudad de Panamá, cuánto al interior, cuánto a la región.',
          'Lo mismo con la parte aburrida que a un comprador profesional le importa mucho: si manejas los trámites de importación, si el producto llega nacionalizado, qué documentación entregas, y si hay soporte o garantía local. Esa última pregunta decide compras completas en líneas técnicas.',
          '<strong>Un comprador que puede llamar a alguien en Panamá cuando algo falla paga más</strong> que por un contenedor sin respaldo, y esa diferencia se comunica en la web o no se comunica en ningún lado.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: solicitudes calificadas y qué líneas se consultan',
        paragraphs: [
          'En B2B el volumen de tráfico dice poco. Lo que dice mucho es cuántas solicitudes llegaron de empresas reales, de qué tamaño, de qué zona y por qué línea de producto.',
          'El corte por línea es el más accionable de todos. Si una marca que apenas promocionas concentra un tercio de las consultas, eso es información de negocio: puede que convenga ampliar esa línea, negociar mejores condiciones con ese proveedor o darle su propia página.',
          'El segundo dato son los registros al área de clientes: cuántos se registraron, cuántos aprobaste y cuántos terminaron comprando. Ese embudo dice si tu catálogo está atrayendo compradores reales o curiosos, y suele revelar que el proceso de aprobación es demasiado lento.',
          'Y de dónde vienen geográficamente. Muchas distribuidoras panameñas descubren aquí demanda de países que ni estaban trabajando, que es información que ningún vendedor iba a traer solo. Lo dejamos medido; el detalle en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una importadora o distribuidora?', a: 'Depende del tamaño del catálogo y de si necesitas zona privada de clientes. Una vitrina B2B con catálogo y captación parte de una Página PYME desde $950; con catálogo grande, precios por cliente y pedidos en línea entra al rango de e-commerce desde $1,500, y los proyectos a medida arrancan desde $2,900. Siempre con cotización cerrada por escrito.' },
          { q: '¿Puedo mostrar precios solo a mis clientes mayoristas?', a: 'Sí. Montamos una zona privada donde precios, disponibilidad y pedidos son visibles solo para clientes registrados y aprobados. La parte pública funciona como vitrina que atrae, sin exponer tus condiciones a la competencia ni al consumidor final.' },
          { q: '¿Necesito vender en línea o solo captar clientes?', a: 'La mayoría de importadoras no cobra en línea al consumidor final: su web capta y califica compradores B2B para el equipo comercial. Si además quieres que tus clientes registrados coloquen pedidos en línea, se puede montar; se define según tu modelo en el diagnóstico.' },
          { q: '¿Cómo actualizo el catálogo cuando cambian precios o llega mercancía?', a: 'Desde un panel simple: agregas productos, cambias precios y marcas agotados en minutos. Es justo el problema del PDF, que se desactualiza y da mala impresión. Un catálogo web siempre al día es parte de la credibilidad que vende.' },
          { q: '¿Sirve si distribuyo a toda la región y no solo a Panamá?', a: 'Sí. Panamá como hub comercial es un argumento fuerte: mostramos tu cobertura logística, los países o zonas que despachas y los plazos. Podemos servir el sitio en español e inglés si atiendes clientes de la región que negocian en otro idioma.' },
                  { q: '¿Cómo publico catálogo sin que la competencia vea mis precios?', a: 'Son dos cosas distintas. El catálogo público muestra qué distribuyes, de qué marcas y en qué presentaciones; el precio vive detrás de un registro que tú apruebas. Además ese registro te dice quién está mirando: empresa, RUC, zona y líneas de interés.' },
          { q: '¿Sigue sirviendo el catálogo en PDF?', a: 'Sirve como herramienta de trabajo, no como catálogo principal. El comprador B2B arma listas en hoja de cálculo, así que conviene tener el catálogo navegable en la web —que es lo que posiciona— más una descarga actualizada con códigos, empaque y unidad mínima. Con fecha visible.' },
          { q: '¿Vale la pena mencionar la Zona Libre y el stock local?', a: 'Es tu ventaja competitiva y casi nadie la comunica. Para el comprador regional que evalúa entre importar directo o comprarte, lo que decide es el tiempo y el riesgo. Ponlo con números: cuánto tarda un pedido a la ciudad, al interior y a la región.' },
          { q: '¿Qué dato de la web cambia decisiones de negocio?', a: 'Las consultas por línea de producto. Si una marca que apenas promocionas concentra un tercio de las consultas, conviene ampliarla o negociar mejores condiciones con ese proveedor. Y el origen geográfico, que suele revelar demanda de países que no estabas trabajando.' },
        ],
      },
      {
        type: 'related',
        items: [
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
      'Nadie elige dentista por precio a ciegas. Compara consultorios, mira fotos del lugar, busca casos reales y decide por confianza. Una web con casos de antes y después, un equipo que se muestra y una cita que se agenda sin llamar convierte al que investiga en paciente sentado en tu sillón.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué necesita la web de un consultorio dental',
        intro: 'El paciente decide por confianza y por facilidad. La web tiene que dar las dos cosas en los primeros segundos.',
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
        h2: 'La cita online es la mejora que más pacientes te suma',
        paragraphs: [
          'En un consultorio dental, quien contesta el teléfono suele ser la misma persona que asiste al odontólogo. Mientras atiende a un paciente en el sillón, el teléfono suena y nadie responde. Cada llamada perdida es un paciente que agendó con el siguiente consultorio de la búsqueda.',
          'El <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">agendamiento online</a> elimina esa fila invisible: el paciente ve los horarios disponibles y confirma solo, a cualquier hora, incluso de noche que es cuando muchos por fin se deciden a resolver ese diente. Los recordatorios automáticos atacan el otro sangrado silencioso del rubro: las ausencias, esos huecos en la agenda que ya no se recuperan.',
          'Y como el paciente muchas veces llega con miedo, la cita online baja la barrera: agendar sin tener que explicar por teléfono qué le duele es mucho más fácil para el que posterga la visita justo por nervios. <strong>Menos fricción para agendar es, directamente, más pacientes en el sillón.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Los casos de antes y después son tu mejor vendedor',
        paragraphs: [
          'En odontologia, sobre todo en la estetica, se compra con los ojos. Una galeria de casos reales de antes y despues (con el consentimiento del paciente) demuestra tu trabajo mejor que cualquier lista de servicios. El que quiere alinearse los dientes o ponerse implantes necesita ver resultados de tu mano, no fotos de banco de una sonrisa perfecta que no es de tu consultorio.',
          'Esas fotos hacen dos cosas a la vez: prueban tu nivel y ayudan al paciente a imaginarse el resultado, que es lo que empuja la decision de un tratamiento de ticket alto. Cada tratamiento con su galeria propia posiciona ademas en las busquedas: "ortodoncia invisible Panama", "implantes dentales", "blanqueamiento". <strong>El paciente que llega tras ver tus casos ya viene medio convencido</strong>, y decide mas por confianza que por precio.',
          'El otro pilar es que el consultorio se muestre. Fotos reales del lugar limpio, del equipo moderno y del odontologo con su idoneidad calman el miedo de fondo: que el sitio no sea serio o higienico. Ver el lugar antes de ir hace que el paciente cruce la puerta con la decision ya tomada.',
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de consultorio dental',
        intro: 'Del teléfono que nadie contesta a una agenda que se llena sola.',
        items: [
          { h3: 'Cita online conectada', text: 'Montamos el agendamiento con disponibilidad real y recordatorios automáticos, para descargar el teléfono del consultorio y reducir las ausencias que dejan huecos en la agenda.' },
          { h3: 'Tratamientos y casos', text: 'Armamos una página por tratamiento con su galería de antes y después, cada una posicionable en las búsquedas del paciente que investiga su necesidad.' },
          { h3: 'Confianza que se muestra', text: 'Trabajamos el perfil del odontólogo con idoneidad, las fotos reales del consultorio y las formas de pago, financiamiento y seguros que responden las dudas prácticas del paciente.' },
          { h3: 'Presencia local impecable', text: 'Alineamos la web con tu ficha de Google Business y el Maps, para que el paciente que busca "dentista cerca de mí" te encuentre y agende sin fricción.' },
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
        type: 'statement',
        text: 'El paciente elige dentista por confianza, y la confianza se construye antes de la primera cita. Todo pasa en tu web: los casos, el equipo, el consultorio y lo fácil que sea agendar.',
        strong: 'la confianza se construye antes de la primera cita',
      },
            {
        type: 'prose',
        h2: 'Una página por tratamiento, no una lista de servicios',
        paragraphs: [
          'La mayoría de las webs dentales resuelven los tratamientos con una lista: ortodoncia, implantes, blanqueamiento, endodoncia, uno debajo del otro en la misma página. Es cómodo de armar y es el error que más pacientes cuesta, porque cada uno de esos tratamientos es una búsqueda distinta, hecha por una persona distinta, con un presupuesto distinto.',
          'Quien busca "ortodoncia invisible" tiene veintitantos, quiere saber cuánto dura y cuánto cuesta al mes. Quien busca "implante dental" suele pasar de los cincuenta, ya perdió la pieza y necesita saber si duele y cuántas visitas son. Quien busca "endodoncia de urgencia" está con dolor ahora mismo y va a llamar al primero que le resuelva. Meterlos a los tres en la misma página obliga a hablarle a nadie en particular.',
          'Una página por tratamiento le habla a cada uno en su idioma: el procedimiento explicado sin tecnicismos, cuánto suele tomar, qué se siente, cómo se paga y la galería de casos de ese tratamiento específico. Y de paso cada página compite por su propia búsqueda, que es como se gana volumen sin subirle el presupuesto a la pauta.',
          '<strong>La regla es simple: si un paciente lo busca con esas palabras, merece su propia página.</strong> Cinco tratamientos bien trabajados rinden más que veinte mencionados de pasada.',
        ],
      },
      {
        type: 'prose',
        h2: 'El paciente te busca por barrio, no por "Panamá"',
        paragraphs: [
          'Nadie con dolor de muela busca "el mejor odontólogo de la República de Panamá". Busca "dentista cerca", "dentista en San Francisco", "ortodoncista Costa del Este", "endodoncia Bethania". La proximidad manda, porque un tratamiento dental no son dos visitas: son seis, ocho, a veces más, y nadie cruza la ciudad ocho veces si tiene algo decente a diez minutos.',
          'Eso cambia dónde hay que pelear. No es contra todos los consultorios del país, es contra los que están en tu radio. Y esa pelea se gana con tres cosas que no dependen del tamaño de tu clínica: una ficha de <a href="/crecimiento/seo-local-google-maps-panama/">Google Business Profile</a> completa y con fotos reales, reseñas recientes de pacientes, y una web que diga con todas sus letras dónde estás, cómo se llega y dónde se estaciona.',
          'El estacionamiento parece un detalle y no lo es. En Ciudad de Panamá, "¿dónde dejo el carro?" decide más citas de las que cualquiera admite. Ponlo en la página de contacto, con foto si hace falta.',
          'Si tienes más de una sede, cada una necesita su propia página con su dirección, su horario y su teléfono. Una sola página que las mencione a todas no posiciona en ninguna de las dos zonas.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que espanta a un paciente antes de que agende',
        intro: 'Todos estos los hemos visto en webs de consultorios reales. Cada uno manda pacientes al consultorio de al lado.',
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
          'Una web dental recoge cosas que no son un correo cualquiera: motivo de consulta, historial, a veces fotos de la boca del paciente. En Panamá eso cae bajo la <strong>Ley 81 de 2019 de Protección de Datos Personales</strong>, y los datos de salud entran en la categoría sensible, la que más cuidado exige.',
          'En la práctica esto no es un trámite de abogados, son decisiones de cómo está hecha la web. Que el sitio vaya en HTTPS y no en HTTP. Que el formulario diga qué se va a hacer con lo que el paciente escribe y quién lo va a leer. Que las fotos de casos tengan consentimiento por escrito, no un permiso verbal de hace tres años. Que los datos no se queden dando vueltas en la bandeja de entrada de un correo personal.',
          'También importa quién más los ve. Si el formulario dispara un correo a una cuenta compartida por cuatro personas del consultorio, ahí hay un problema que nadie nota hasta que lo hay. Un buzón propio del consultorio, con acceso controlado, cuesta lo mismo y cambia la respuesta si algún día alguien pregunta.',
          'Nosotros montamos la parte técnica: certificado, formularios con aviso de privacidad, almacenamiento con acceso controlado. <strong>El texto legal y el consentimiento clínico los revisa tu asesor</strong>, que es quien conoce tu operación; nosotros dejamos la web preparada para que ese texto tenga dónde vivir.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: citas agendadas, no visitas',
        paragraphs: [
          'La pregunta que casi todo consultorio le hace a su web es cuántas visitas tuvo. Es la métrica más fácil de mirar y la que menos dice. Mil visitas al mes sin una sola cita agendada es una web que no está trabajando; doscientas visitas con quince citas es una web que se paga sola.',
          'Lo que vale la pena mirar es corto: cuántas citas se agendaron online, cuántas conversaciones entraron por WhatsApp, cuántas llamadas salieron del botón de la web, y de qué tratamiento venía cada una. Ese último dato es el más útil de todos, porque te dice en qué tratamiento invertir tu tiempo y tu pauta, y cuál no vale la pena empujar.',
          'El segundo número que casi nadie mira es la tasa de ausencia. Si de cada diez citas agendadas faltan tres, el problema no es de captación, es de recordatorios. Eso se arregla con automatización, no con más publicidad, y sale mucho más barato.',
          'Lo dejamos medido desde el primer día, no como un informe que nadie abre sino como un tablero de tres o cuatro números que puedas revisar en dos minutos. El detalle de cómo lo planteamos está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un consultorio dental?', a: 'Una Página PYME desde $950 con páginas por tratamiento, galería de casos y cita online cubre a la mayoría de los consultorios. Clínicas dentales con varios odontólogos, sedes o financiamiento propio pueden ir a una corporativa a medida desde $2,900. Siempre te damos una cotización cerrada por escrito antes de empezar.' },
          { q: '¿La cita online se conecta con la agenda que ya usamos?', a: 'Depende del sistema. Si tu software de agenda permite integración, sincronizamos para evitar dobles reservas. Si no, montamos una agenda propia sencilla con <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">citas online</a> y recordatorios. Lo evaluamos en el diagnóstico antes de prometer nada.' },
          { q: '¿Puedo mostrar casos de antes y después de mis pacientes?', a: 'Sí, y es de lo que más convierte, siempre con el consentimiento del paciente. Montamos galerías por tratamiento con las fotos reales de tu trabajo. Se maneja con cuidado para respetar la privacidad y la ética profesional.' },
          { q: '¿Podemos mostrar qué seguros y financiamiento aceptamos?', a: 'Sí, y conviene mucho. El costo es una de las primeras dudas del paciente dental. Dejar visibles los seguros, las formas de pago y el financiamiento (por ejemplo para ortodoncia o implantes) elimina una fricción que hace perder al paciente que, sin esa información, simplemente llama a otro consultorio.' },
          { q: '¿Sirve para un odontólogo independiente y no solo para una clínica grande?', a: 'Sí, y muchas veces rinde más. Para un odontólogo independiente el enfoque es su perfil, sus tratamientos estrella bien explicados con casos reales y la cita online. Eso compite de igual a igual con clínicas grandes en las búsquedas específicas de tu zona.' },
                  { q: '¿Necesito una página por cada tratamiento o basta con una de servicios?', a: 'Una por tratamiento, al menos para los cuatro o cinco que más facturan. Cada tratamiento es una búsqueda distinta hecha por un paciente distinto, y una sola página de servicios no compite en ninguna de esas búsquedas. Los tratamientos secundarios sí pueden ir agrupados.' },
          { q: '¿Puedo publicar fotos de antes y después de mis pacientes?', a: 'Con consentimiento del paciente por escrito y específico para publicación en internet, que no es lo mismo que el consentimiento del tratamiento. Conviene que ese permiso lo redacte tu asesor legal. Nosotros dejamos la galería preparada para que puedas retirar un caso en cualquier momento si el paciente cambia de opinión.' },
          { q: 'Tengo dos sedes, ¿una web o dos?', a: 'Una web con una página propia por sede: cada una con su dirección, su horario, su teléfono y su ficha de Google Business Profile. Una sola página que mencione ambas no posiciona en ninguna de las dos zonas, y en dental la cercanía decide.' },
          { q: '¿Debo poner precios en la web?', a: 'Un rango o un "desde" suele traer más pacientes de los que espanta: filtra al que nunca iba a agendar y le da seguridad al que sí. Esconderlo del todo hace que el paciente asuma lo peor y siga buscando. Si tu estructura varía mucho por caso, funciona bien publicar el precio de la valoración inicial.' },
        ],
      },
      {
        type: 'related',
        items: [
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
