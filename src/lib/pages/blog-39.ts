/* BLOG — Lote 39: reservas directas para tours, medición de leads de WhatsApp
   y costo de una web para un negocio de Miami contratando desde Panamá.
   PageData con parent { slug: 'blog' }; el listado /blog la recoge por fecha y
   categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog39: PageData[] = [
  {
    slug: 'blog/reservas-directas-tours-san-blas',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Reservas directas para tours: cómo recibirlas en tu web',
    description: 'Cómo un negocio de tours puede recibir reservas directas: selector de tour, depósito, varios idiomas, WhatsApp para dudas y políticas claras.',
    h1: 'Reservas directas para tours: cómo pasar del mensaje suelto a la reserva confirmada',
    breadcrumb: 'Reservas directas para tours',
    category: 'Diseño web',
    date: '2026-09-30',
    heroImage: {
      src: '/images/blog/diseno-web-para-turismo-hoteles-panama.jpg',
      alt: 'Timbre de recepción junto a una llave de hotel con su etiqueta, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Para recibir reservas directas, tu web tiene que permitir que el viajero elija el tour, la fecha y el número de personas, pague un depósito y reciba una confirmación, todo sin depender de que alguien le conteste un mensaje. WhatsApp queda para lo que sí necesita conversación: dudas, casos especiales y tranquilidad antes de pagar.',
      'Esta guía recorre las piezas de ese flujo —selector de tour, depósito, idiomas, WhatsApp de soporte, políticas de cancelación y confirmación— con el sitio de San Blas Full, un proyecto de Elemento Web, como ejemplo, y explica cuándo todavía no conviene montarlo.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué una reserva directa cambia la operación de un tour?',
        paragraphs: [
          'Un viajero que decide un tour suele estar en el celular, comparando varias opciones y con poco tiempo. Si para reservar tiene que escribir, esperar respuesta, preguntar disponibilidad y luego coordinar el pago, cada paso es una oportunidad de que se vaya con otro operador que le resolvió más rápido.',
          'La reserva directa mueve esa fricción a la web: el viajero ve qué tours hay, qué incluye cada uno y cuánto cuesta, y avanza a su ritmo. Para el negocio, la reserva llega con los datos ordenados (tour, fecha, personas, contacto), no repartidos entre una docena de chats.',
          'Construimos este flujo en el sitio de <a href="/casos-de-exito/san-blas-full/">San Blas Full</a>: un sitio multi-idioma para tours de un día a San Blas, con selector de tour, reserva con depósito y soporte por WhatsApp. No tenemos cifras medidas de su efecto y no las vamos a inventar; sí podemos contar cómo está armado y por qué existe cada pieza.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Qué piezas tiene un flujo de reserva directa para tours?',
        intro: 'No hace falta que todas estén el primer día, pero conviene saber qué papel cumple cada una.',
        items: [
          { h3: '1. Selector de tour', text: 'Una vista donde el viajero compara los tours disponibles y elige uno sin salir de la página. Cada opción dice qué incluye, cuánto dura, desde dónde sale y cuánto cuesta por persona.' },
          { h3: '2. Fecha y número de personas', text: 'Los dos datos que definen la reserva. Si la disponibilidad se maneja a mano, la web recoge la solicitud y el equipo confirma; si se maneja con calendario, el sistema la valida en el momento.' },
          { h3: '3. Depósito para asegurar el cupo', text: 'Un pago parcial reduce las reservas que nunca se presentan y le da al viajero una confirmación concreta. El monto y las condiciones se definen con el negocio y se muestran antes de pagar.' },
          { h3: '4. Idiomas', text: 'Si tus clientes vienen de otros países, el sitio en su idioma les permite entender el itinerario y las condiciones sin adivinar. Traducir solo el menú no basta: deben estar traducidos el detalle del tour, el flujo de reserva y las políticas.' },
          { h3: '5. WhatsApp para dudas', text: 'Un botón visible para preguntar antes de reservar: qué llevar, si aplica para niños, qué pasa si llueve. Apoya el flujo, no lo reemplaza: la reserva se completa en la web.' },
          { h3: '6. Confirmación clara', text: 'Al terminar, el viajero ve y recibe por correo el resumen: tour, fecha, personas, depósito pagado, saldo pendiente, punto de encuentro y cómo contactarte.' },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué políticas publicar antes de que alguien pregunte?',
        intro: 'Casi todas las discusiones con un cliente vienen de algo que no estaba escrito.',
        items: [
          'Qué incluye y qué no incluye cada tour (transporte, entradas, comidas, tasas)',
          'Cuánto se paga de depósito y cuándo se paga el saldo',
          'Qué pasa si el viajero cancela o cambia de fecha, y hasta cuándo puede hacerlo',
          'Qué pasa si el tour se cancela por clima u otra causa fuera de control del operador',
          'Punto y hora de encuentro, y qué ocurre si el viajero llega tarde',
          'Requisitos o restricciones (edad, condición física, documentos)',
          'Por qué canal se resuelven las dudas y en qué horario se responde',
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué resuelve cada canal en una reserva de tour?',
        intro: 'Mezclar todo en WhatsApp es lo que hace lento el proceso. Separar el trabajo de cada canal lo ordena.',
        items: [
          { h3: 'La web', text: 'Muestra los tours, valida la reserva, cobra el depósito y envía la confirmación. Trabaja a cualquier hora, sin que nadie tenga que estar conectado.' },
          { h3: 'WhatsApp', text: 'Atiende las dudas previas y los casos que no encajan en el flujo estándar, como grupos grandes o solicitudes especiales.' },
          { h3: 'El correo de confirmación', text: 'Deja por escrito lo acordado. Es lo primero que revisa el viajero el día anterior y lo que respalda al negocio si hay un desacuerdo.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene montar reservas directas?',
        paragraphs: [
          'Si vendes pocos tours al mes, casi todos a clientes que ya te conocen o llegan por recomendación, un flujo con depósito puede ser más maquinaria de la que necesitas. Una página clara con los tours, los precios y un botón de WhatsApp resuelve la mayor parte y es más barata de mantener; crecer después es una decisión razonable.',
          'Tampoco conviene si tu disponibilidad cambia constantemente y nadie la mantendrá al día en la web: un sistema que promete cupos que no existen genera más problemas que un mensaje directo. Y si aún no tienes claras tus políticas de cancelación, defínelas primero: la web solo puede mostrar reglas que el negocio ya decidió.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo empezar a recibir reservas directas sin complicarlo?',
        paragraphs: [
          'Escribe en un documento los tours que ofreces, qué incluye cada uno, el precio por persona, el depósito y la política de cancelación. Si eso no está claro en papel, no se puede construir bien en la web.',
          'Con eso se decide cuánto del flujo se automatiza y cuánto se confirma a mano. Las opciones de agenda están en nuestra página de <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistemas de reservas y citas en línea</a>, el enfoque por sector en la de <a href="/industrias/diseno-web-turismo-hoteles-panama/">diseño web para turismo y hoteles</a> y los precios de referencia en <a href="/precios/">precios</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre reservas directas para tours',
        items: [
          { q: '¿Necesito cobrar un depósito para aceptar reservas directas?', a: 'No es obligatorio, pero ayuda: le da al viajero una confirmación concreta y reduce las reservas que no se presentan. Si no cobras nada por adelantado, la web puede recibir la solicitud y tu equipo confirmar por WhatsApp o correo.' },
          { q: '¿Sirve tener el sitio en varios idiomas?', a: 'Sí, cuando parte de tus clientes no habla español. Lo importante es traducir el detalle del tour, el proceso de reserva y las políticas, no solo el menú. Un sitio a medias en otro idioma genera más dudas que uno bien hecho en uno solo.' },
          { q: '¿WhatsApp sigue siendo necesario si la web ya recibe reservas?', a: 'Sí, como apoyo. Sirve para resolver dudas antes de pagar y atender casos especiales. La idea es que la reserva estándar no dependa de un chat, no que el chat desaparezca.' },
          { q: '¿Qué políticas debo publicar?', a: 'Como mínimo: qué incluye cada tour, cuánto es el depósito y cuándo se paga el saldo, cómo funcionan las cancelaciones y cambios de fecha, qué pasa si el tour se cancela por clima y dónde y a qué hora es el encuentro.' },
          { q: '¿Cuándo NO conviene montar un flujo de reservas directas?', a: 'Cuando vendes muy pocos tours y casi todos por recomendación, cuando tu disponibilidad cambia todo el tiempo y nadie la actualizaría en la web, o cuando aún no tienes definidas tus políticas de cancelación.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'casos-de-exito/san-blas-full', label: 'Caso San Blas Full' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Sistemas de reservas y citas en línea' },
          { slug: 'industrias/diseno-web-turismo-hoteles-panama', label: 'Diseño web para turismo y hoteles' },
          { slug: 'blog/diseno-web-para-turismo-hoteles-panama', label: 'Diseño web para turismo y hoteles en Panamá' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
    ],
    cta: {
      h2: 'Una web donde el viajero elige, paga el depósito y recibe su confirmación',
      wa: 'Hola, tengo un negocio de tours y quiero recibir reservas directas en mi web. ¿Me asesoran?',
    },
  },
  {
    slug: 'blog/medir-leads-whatsapp-ga4-crm',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Medir leads de WhatsApp con GA4 y CRM: guía práctica',
    description: 'Cómo medir consultas de WhatsApp y formulario: qué eventos registrar en GA4, qué guardar en el CRM y por qué un clic no es una venta.',
    h1: 'Cómo medir los leads que llegan por WhatsApp y formulario con GA4 y un CRM',
    breadcrumb: 'Medir leads de WhatsApp',
    category: 'Marketing digital',
    date: '2026-09-30',
    heroImage: {
      src: '/images/blog/como-medir-los-resultados-de-tu-pagina-web.jpg',
      alt: 'Gráfico circular con una porción separada, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'Para medir bien los leads de WhatsApp y de formulario hay que separar cuatro cosas que suelen mezclarse: el clic en el botón, la conversación que realmente empieza, el lead calificado y la venta. GA4 sirve para ver las dos primeras desde la web; el CRM es donde se registran las últimas dos.',
      'Aquí explicamos qué eventos definir, cuándo dispararlos, qué datos nunca deben viajar a la analítica, cómo deduplicar con un identificador opaco y por qué la atribución siempre será imperfecta. Es un método para que tus números signifiquen algo, no una promesa de cifras.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Un clic en WhatsApp no es una conversación, y una conversación no es una venta',
        paragraphs: [
          'El error más común es contar cada clic en el botón de WhatsApp como un lead. Alguien puede hacer clic y no enviar nada, enviar un «hola» y desaparecer, o preguntar por algo que tu negocio no ofrece. Los tres aparecen igual en un reporte, y ninguno es una venta en camino.',
          'Lo que sí puedes medir con rigor es una escalera de etapas, cada una más estricta que la anterior: clic en WhatsApp, conversación iniciada, lead calificado y venta. La gente que se pierde entre una etapa y la siguiente es el dato útil: te dice dónde mejorar.',
          'Si aún estás decidiendo qué medir en tu sitio en general, empieza por nuestra guía de <a href="/blog/como-medir-los-resultados-de-tu-pagina-web/">cómo medir los resultados de tu página web</a>.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué etapas de un lead se miden en GA4 y cuáles en el CRM?',
        intro: 'Cada etapa tiene un lugar natural donde se registra. Forzarlas todas en GA4 produce reportes que nadie cree.',
        items: [
          { h3: 'click_whatsapp', text: 'Se dispara en la web cuando alguien pulsa el botón. Es una señal de interés, no un lead. Se registra en GA4.' },
          { h3: 'form_start', text: 'Se dispara cuando la persona empieza a llenar el formulario. Sirve para ver cuánta gente abandona antes de enviar. Se registra en GA4.' },
          { h3: 'generate_lead', text: 'Se dispara solo cuando el backend confirma que el envío se recibió, no cuando se pulsa el botón de enviar. Se registra en GA4.' },
          { h3: 'Lead calificado', text: 'Lo marca una persona en el CRM después de revisar la consulta: encaja con lo que vendes, tiene un presupuesto o necesidad real. Vive en el CRM.' },
          { h3: 'Venta', text: 'Se registra en el CRM cuando se cierra. Es el número que importa para el negocio, y el más difícil de conectar con el origen.' },
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo medir leads de WhatsApp con GA4 y un CRM, paso a paso?',
        intro: 'No exige herramientas raras: exige disciplina en qué se dispara y cuándo.',
        items: [
          { h3: '1. Define los eventos por escrito', text: 'Antes de tocar código, anota el nombre, el momento exacto en que se dispara y qué significa, para que el equipo comercial y quien implementa entiendan lo mismo.' },
          { h3: '2. Dispara generate_lead solo con confirmación del backend', text: 'Si lo disparas al pulsar «enviar», contarás envíos fallidos, duplicados y spam. Espera a que el servidor confirme la recepción.' },
          { h3: '3. Genera un ID opaco por consulta', text: 'Un identificador aleatorio, sin significado, que se envía tanto a GA4 como al CRM. Evita contar dos veces la misma consulta y permite cruzar el evento de la web con el registro del CRM.' },
          { h3: '4. Registra el lead en el CRM con su origen', text: 'Guarda la fuente, la página de entrada y ese ID, y un campo para que quien atiende marque si el lead fue calificado.' },
          { h3: '5. Cierra el ciclo con la venta', text: 'Cuando una consulta termina en venta, se marca en el CRM. Con eso ves, por origen, cuántas consultas terminaron en cliente.' },
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué datos no deben viajar nunca a GA4?',
        intro: 'GA4 no es un lugar para datos personales: además del riesgo legal, ensucia los reportes.',
        items: [
          'Nombre de la persona',
          'Correo electrónico',
          'Número de teléfono',
          'Texto del mensaje o del formulario',
          'Cualquier dato que permita identificar a alguien al combinarlo con otros',
          'Solo debe viajar el nombre del evento, la página, la fuente y el ID opaco',
        ],
      },
      {
        type: 'prose',
        h2: 'Compara periodos equivalentes y acepta que la atribución es imperfecta',
        paragraphs: [
          'Comparar una semana con otra, o un mes con otro distinto, sin ajustar por lo que cambió lleva a conclusiones falsas. Compara ventanas equivalentes: mismo número de días, mismos días de la semana y, si tu negocio es estacional, el mismo periodo de otro año. Anota qué cambió en el sitio o en las campañas en cada ventana.',
          'La atribución tampoco es exacta. Alguien puede ver tu anuncio en el celular, buscarte después desde la computadora del trabajo y escribirte por WhatsApp una semana más tarde: la analítica verá tráfico directo o de búsqueda de marca. No es un error de configuración, sino un límite de medir a través de dispositivos, navegadores y bloqueadores.',
          'Por eso conviene preguntarle al cliente «¿cómo nos conociste?», en un campo del formulario o anotado en el CRM por el equipo. Es un dato subjetivo, pero rescata orígenes que la analítica no ve, como una recomendación o una publicación compartida por un contacto.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene montar todo esto?',
        paragraphs: [
          'Si recibes muy pocas consultas al mes, un sistema de eventos, ID y CRM puede ser más trabajo que valor: una hoja de cálculo con cada consulta, su origen y si terminó en venta ya dice bastante.',
          'Tampoco conviene si nadie va a revisar los números ni a marcar los leads en el CRM: un dato incompleto engaña más de lo que ayuda. Y si el sitio cambia cada semana, estabiliza la estructura antes de definir los eventos, porque cada cambio los rompe.',
          'En ese punto, empieza por lo mínimo: un contador de clics, un registro manual y una revisión mensual. Crece cuando el volumen lo justifique.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre medir leads de WhatsApp',
        items: [
          { q: '¿Cuenta como lead cada clic en el botón de WhatsApp?', a: 'No. Es una señal de interés. Un lead es una consulta real que llegó, y un lead calificado es la que una persona revisó y confirmó que encaja con lo que vendes. Conviene medir cada etapa por separado.' },
          { q: '¿Cuándo debo disparar generate_lead?', a: 'Solo cuando el backend confirme que el formulario se recibió. Si lo disparas al pulsar «enviar», contarás envíos fallidos, duplicados y spam como si fueran consultas reales.' },
          { q: '¿Puedo enviar el teléfono o el correo a GA4 para identificar al lead?', a: 'No. No envíes nombre, correo, teléfono ni el texto del mensaje a la analítica. Usa un ID opaco, sin significado, que sirva para deduplicar y para cruzar el evento con el registro del CRM.' },
          { q: '¿Por qué mis números de GA4 no coinciden con mi CRM?', a: 'Porque miden cosas distintas y con limitaciones distintas: GA4 depende del navegador y de que la persona acepte ser medida; el CRM depende de que el equipo registre bien. Una diferencia es normal; lo que importa es entender por qué existe y mantenerla estable.' },
          { q: '¿Cuándo NO vale la pena montar este sistema?', a: 'Cuando recibes muy pocas consultas, cuando nadie va a completar los datos en el CRM o cuando el sitio cambia constantemente. En esos casos, un registro manual sencillo y una revisión mensual dan mejor resultado.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/como-medir-los-resultados-de-tu-pagina-web', label: 'Cómo medir los resultados de tu página web' },
          { slug: 'blog/crm-con-whatsapp-para-vender-mas-en-panama', label: 'CRM con WhatsApp para vender más en Panamá' },
          { slug: 'blog/como-vender-por-whatsapp-en-panama', label: 'Cómo vender por WhatsApp en Panamá' },
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbots con IA y WazaCRM' },
        ],
      },
    ],
    cta: {
      h2: 'Saber de dónde vienen tus consultas, sin datos personales en la analítica',
      wa: 'Hola, quiero medir las consultas que me llegan por WhatsApp y formulario. ¿Me asesoran?',
    },
  },
  {
    slug: 'blog/cuanto-cuesta-pagina-web-miami',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Cuánto cuesta una página web para un negocio en Miami',
    description: 'Cómo calcular el costo de una web para tu negocio en Miami con una agencia remota en Panamá: qué sumar, precios propios en USD e impuestos.',
    h1: 'Cuánto cuesta una página web para un negocio en Miami si contratas a una agencia desde Panamá',
    breadcrumb: 'Costo de una web en Miami',
    category: 'Precios',
    date: '2026-09-30',
    heroImage: {
      src: '/images/blog/cuanto-cuesta-diseno-web-panama.jpg',
      alt: 'Etiqueta de precio junto a tres bloques escalonados, en cromo plateado, render 3D sobre fondo gris claro',
    },
    lead: [
      'El costo de una página web para un negocio de Miami que contrata a una agencia en Panamá se calcula sumando cinco cosas: implementación, hosting y dominio, mantenimiento, contenido e impuestos aplicables. En Elemento Web, la implementación parte de $550 (Landing), $1,250 (Web empresarial), $1,950 (E-commerce) y $2,900 (a medida), en dólares.',
      'No citamos rangos de mercado de Miami ni de agencias locales, porque no los tenemos verificados y un número inventado no sirve para decidir. Te damos un método y nuestros precios reales, para que armes tu presupuesto y lo compares con cualquier otra cotización.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué componentes suma el costo real de una web?',
        intro: 'El precio de construir el sitio es solo una parte. Pide que cada cotización, nuestra o de otra agencia, muestre estos cinco componentes por separado; si uno viene «incluido», pregunta qué cubre exactamente.',
        items: [
          'Implementación: el diseño y la construcción del sitio, un pago que se hace una vez',
          'Hosting y dominio: la infraestructura donde vive la web y su dirección, con costo recurrente',
          'Mantenimiento: actualizaciones, respaldos y soporte para que el sitio siga funcionando, también recurrente',
          'Contenido: textos, fotos, traducciones y logotipo; si no los tienes, alguien tiene que producirlos',
          'Impuestos aplicables: el tratamiento depende de dónde se factura y de tu situación fiscal, y se confirma en la cotización',
        ],
      },
      {
        type: 'cards',
        h2: '¿Cuánto cuesta la implementación de una página web para un negocio en Miami?',
        intro: 'Son precios propios, en dólares estadounidenses. Cada proyecto se cotiza según su alcance real.',
        items: [
          { h3: 'Landing: $550', text: 'Una página enfocada en una oferta o servicio, pensada para recibir consultas. Es el punto de partida más sencillo.' },
          { h3: 'Web empresarial: $1,250', text: 'Para un negocio que necesita presentarse con varias secciones, hasta 6 páginas en total.' },
          { h3: 'E-commerce: $1,950', text: 'Una tienda en línea para vender productos directamente desde el sitio.' },
          { h3: 'A medida: $2,900', text: 'Para proyectos con funciones específicas que no encajan en un formato estándar, como portales, reservas o integraciones.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Infraestructura y mantenimiento: lo que se paga cada año o cada mes',
        paragraphs: [
          'Una web necesita dónde vivir y alguien que la cuide. Nuestra infraestructura parte desde $350 al año y el mantenimiento desde $99 al mes. El detalle está en las páginas de <a href="/crecimiento/hosting-infraestructura-panama/">hosting e infraestructura</a> y de <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento web</a>.',
          'Al comparar cotizaciones, suma estos costos recurrentes a lo largo de un año. Una implementación barata con mantenimiento caro, o sin mantenimiento definido, puede salir más cara que una opción con precio inicial más alto.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo se factura desde Panamá a un negocio de Miami?',
        paragraphs: [
          'Elemento Web factura desde Panamá y en dólares estadounidenses: sin conversión de moneda en el precio. El trabajo se coordina de forma remota, en español, por videollamada, correo y WhatsApp.',
          'No afirmamos ninguna exención ni tratamiento especial de impuestos de forma general. Cómo aplican a tu caso depende de tu situación y de cómo se factura, y lo confirmamos por escrito en la cotización, antes de que pagues nada. Si tu contador necesita revisarlo, mejor con la cotización en la mano.',
          'El enfoque para tu ciudad está en las páginas de <a href="/miami/">diseño web para Miami</a> y de <a href="/miami/diseno-web-en-miami-en-espanol/">diseño web en Miami en español</a>. Los precios completos, en <a href="/precios/">precios</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo comparar contra otras cotizaciones sin adivinar?',
        paragraphs: [
          'Con los cinco componentes en una tabla propia, la comparación se vuelve mecánica: para cada cotización anota implementación, pago anual de hosting y dominio, pago mensual de mantenimiento, contenido incluido e impuestos que se suman.',
          'Añade dos preguntas que no son de precio pero pesan mucho: quién es el dueño del sitio y del dominio al terminar, y qué pasa si dejas de pagar el mantenimiento. Una cotización que no responde eso con claridad no está lista para compararse.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene contratar a una agencia remota desde Panamá?',
        paragraphs: [
          'Si necesitas reuniones presenciales frecuentes con tu proveedor, o si tu negocio exige que el equipo esté en Estados Unidos por razones contractuales o de cumplimiento.',
          'Tampoco si tu prioridad es un sitio principalmente en inglés con textos de marketing de un redactor nativo: nuestro punto fuerte es el español. Y con un presupuesto muy bajo, empezar con una plataforma de plantillas puede ser más sensato que una web hecha por una agencia. Preferimos decírtelo antes de cotizar.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo de una web para Miami',
        items: [
          { q: '¿Cuánto cuesta una página web para un negocio en Miami con ustedes?', a: 'La implementación parte de $550 para una Landing, $1,250 para una Web empresarial de hasta 6 páginas en total, $1,950 para un E-commerce y $2,900 para un proyecto a medida. A eso se suma la infraestructura, desde $350 al año, y el mantenimiento, desde $99 al mes.' },
          { q: '¿Cuánto cobran otras agencias de Miami?', a: 'No lo sabemos con certeza y no queremos inventar rangos. Lo recomendable es pedir cotizaciones por escrito y compararlas con los cinco componentes: implementación, hosting y dominio, mantenimiento, contenido e impuestos.' },
          { q: '¿En qué moneda facturan?', a: 'En dólares estadounidenses, y la factura sale desde Panamá.' },
          { q: '¿Tengo que pagar impuestos adicionales?', a: 'Depende de tu situación y de cómo se facture. No damos por hecho ninguna exención: el tratamiento de impuestos se confirma en la cotización, y conviene que tu contador la revise.' },
          { q: '¿Cuándo NO conviene contratar una agencia remota desde Panamá?', a: 'Cuando necesitas reuniones presenciales frecuentes, cuando tu negocio exige un proveedor dentro de Estados Unidos, o cuando lo que buscas es un sitio principalmente en inglés con redacción nativa.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'miami', label: 'Diseño web para Miami' },
          { slug: 'miami/diseno-web-en-miami-en-espanol', label: 'Diseño web en Miami en español' },
          { slug: 'precios', label: 'Precios' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
        ],
      },
    ],
    cta: {
      h2: 'Una cotización por escrito, con cada componente separado',
      wa: 'Hola, tengo un negocio en Miami y quiero cotizar una página web. ¿Me asesoran?',
    },
  },
];
