/* /inteligencia-artificial-para-empresas-panama/: antes era una página hecha a mano
   (src/pages/inteligencia-artificial-para-empresas-panama/index.astro). Pasa a la plantilla
   con anatomía v2 y molde Kredit (D44, D45). Conserva title, description y H1; salen la
   afirmación «Meta Verified Tech Provider» (nombre mezclado; desde D48 se escribe «Tech Provider verificado por Meta») y la cifra de «4 minutos de
   respuesta promedio», que no tenía medición detrás. */
import type { PageData } from '../types';

export const iaEmpresas: PageData[] = [
  {
    slug: 'inteligencia-artificial-para-empresas-panama',
    anatomia: 'v2',
    serviceKey: 'ia',
    title: 'Inteligencia Artificial para Empresas en Panamá | Elemento Web',
    description: 'Ecosistema de IA privado para tu empresa en Panamá: base de conocimiento (RAG) y automatización de procesos 24/7, siempre con control humano.',
    h1: 'Tu empresa, ahora con un cerebro propio.',
    breadcrumb: 'Inteligencia Artificial para Empresas',
    service: { type: 'Implementación de IA privada (RAG) y automatización de procesos', name: 'Inteligencia artificial para empresas en Panamá' },
    lead: ['Inteligencia artificial para empresas en Panamá: unimos una IA privada que entiende tu negocio con automatización de procesos, para que tu equipo le deje el trabajo repetitivo a las máquinas.'],
    portada: {
      pie: 'Una IA que responde con tus documentos y ejecuta en tus sistemas, con una persona aprobando lo que importa.',
      riel: [
        { k: 'Entiende', v: 'Tus documentos, con la cita exacta' },
        { k: 'Ejecuta', v: 'En tu CRM, ERP y WhatsApp' },
        { k: 'Control', v: 'Una persona aprueba lo sensible' },
        { k: 'Arranque', v: 'Diagnóstico sin costo' },
      ],
    },
    blocks: [
      {
        type: 'answer',
        fecha: '2026-10-23',
        text: 'Elemento Web, agencia de Ciudad de Panamá, implementa inteligencia artificial para empresas en dos niveles. La IA privada responde con tus documentos y cita la fuente, desde $2,900. La IA conectada a tu ERP o CRM ejecuta acciones con aprobación humana, desde $6,900. Ambas llevan aparte el consumo de los modelos, y la llamada de diagnóstico inicial no tiene costo.',
      },
      {
        type: 'receipt',
        titulo: 'IA para empresas',
        fecha: '2026-10-23',
        precio: { estado: 'confirmado', desde: '$2,900', unidad: 'por proyecto, más el consumo de los modelos' },
        plazo: 'Se fija por escrito tras el diagnóstico; se empieza por un piloto de un solo proceso',
        medicionId: 'ia-empresas-lcp',
        pie: ['IA privada desde $2,900; IA conectada a tu ERP o CRM desde $6,900. El consumo de los modelos se factura por uso, aparte.', 'Diagnóstico de IA por escrito opcional: $290, que se descuenta del proyecto si lo contratas.', 'Precios en dólares, sin ITBMS (7%). La llamada de diagnóstico inicial no tiene costo.'],
      },
      { type: 'blank', punto: 'prueba', h2: 'Resultados de clientes' },
      {
        type: 'ejemplos',
        h2: 'Así se vería en tu empresa',
        intro: 'Una empresa de ejemplo con su manual de políticas, su planilla y su sistema de pedidos conectados. La IA responde con la cita del documento y se detiene antes de cualquier acción sensible.',
        columnas: 2,
        items: [
          {
            tipo: 'asistente',
            pregunta: '¿Cuál es la política de devoluciones para clientes VIP?',
            respuesta: 'Según <strong>Políticas 2025</strong> (página 14), los clientes VIP tienen 60 días para devolver un producto, sin costo de envío. Si el pedido supera $500, la devolución la aprueba la gerencia comercial.',
            fuentes: ['Politicas_2025.docx · pág. 14', 'Manual_Ventas.pdf · pág. 3'],
          },
          {
            tipo: 'panel',
            sitio: 'Aprobaciones · tu empresa',
            titulo: 'Nota de crédito pendiente de aprobación',
            campos: [
              { k: 'Pedido', v: 'Cliente VIP · pedido 4471 · $240.00' },
              { k: 'Motivo', v: 'Devolución a los 12 días, dentro de los 60 de la política' },
              { k: 'Fuente', v: 'Politicas_2025.docx · pág. 14' },
              { k: 'Correo propuesto', v: 'Hola, ya registramos tu devolución del pedido 4471. La nota de crédito por $240.00 queda disponible en tu cuenta hoy mismo.', largo: true },
            ],
            boton: 'Aprobar y enviar',
          },
          {
            tipo: 'whatsapp',
            negocio: 'Asistente interno',
            mensajes: [
              { de: 'cliente', texto: '¿Cuántos días de vacaciones me quedan y cómo las pido?', hora: '8:41' },
              { de: 'negocio', texto: 'Te quedan 9 días hábiles según la planilla al 30 de septiembre. El Manual del empleado (sección 4.2) pide solicitarlas con 15 días de anticipación. ¿Envío la solicitud a tu supervisora?', hora: '8:41', botones: ['Enviar solicitud', 'Hablar con Recursos Humanos'] },
            ],
          },
          {
            tipo: 'informe', titulo: 'Reporte del mes del asistente', sitio: 'Tu empresa · ejemplo',
            filas: [
              { k: 'Preguntas respondidas con cita', v: '1,240', estado: 'bien' },
              { k: 'Sin respuesta en tus documentos', v: '38', estado: 'ojo' },
              { k: 'Acciones aprobadas por una persona', v: '112', estado: 'bien' },
              { k: 'Acciones rechazadas', v: '6', estado: 'ojo' },
              { k: 'Consumo de los modelos', v: 'Dentro del presupuesto', estado: 'bien' },
            ],
            pie: 'Lo que no encontró en tus documentos es la lista de lo que conviene documentar el mes siguiente.',
          },
          {
            tipo: 'flujo',
            titulo: 'Del correo del cliente a la nota de crédito',
            pasos: [
              { t: 'El detonante', d: 'Entra el correo de un cliente VIP pidiendo un reembolso.' },
              { t: 'La IA entiende', d: 'Lee tu política de devoluciones y valida el pedido en tu sistema.' },
              { t: 'Aprobación humana', d: 'Se detiene y avisa al responsable con la opción de aprobar.' },
              { t: 'Ejecución', d: 'Con el visto bueno, genera la nota de crédito y envía el correo.' },
              { t: 'Registro', d: 'Queda en la auditoría qué consultó, qué propuso y quién aprobó.' },
            ],
          },
        ],
        nota: 'Empresa, documentos, conversaciones y cifras de ejemplo. En tu proyecto, las fuentes son tus propios documentos.',
      },
      {
        type: 'tabla',
        h2: 'Inteligencia artificial para empresas: qué hace en cada área',
        intro: 'La misma arquitectura sirve a varios departamentos. Se empieza por uno y se suman los demás:',
        columnas: ['Área', 'Entiende', 'Ejecuta', 'Se conecta con'],
        filas: [
          ['Ventas y CRM', 'Lee el historial de correos y propuestas y sugiere la siguiente acción según acuerdos que sí cerraron.', 'Genera la cotización o el contrato y lo mueve al CRM cuando la oportunidad cambia de etapa.', 'HubSpot, Salesforce, WhatsApp'],
          ['Recursos Humanos', 'Responde sobre vacaciones, planilla o políticas leyendo el manual del empleado, con la cita exacta.', 'Coordina entrevistas y crea el correo y los accesos del nuevo empleado el primer día.', 'Slack, Google Workspace, manual interno'],
          ['Finanzas', 'Lee facturas escaneadas y extrae montos, proveedores e impuestos sin plantillas rígidas.', 'Cruza el monto con la orden de compra y prepara el pago; lo aprueba una persona.', 'ERP, sistema contable'],
          ['Soporte e IT', 'Analiza cada ticket con el historial y los manuales de producto.', 'Resuelve lo repetitivo y asigna lo demás al experto correcto, con prioridad.', 'Zendesk, Jira, base de conocimiento'],
        ],
        nota: 'Las integraciones se hacen por API o con <a href="/marketing/automatizaciones-n8n-panama/">n8n</a>. No tienes que cambiar los sistemas que ya usas.',
      },
      {
        type: 'includes',
        h2: 'Qué incluye el proyecto',
        intro: 'IA privada desde $2,900 e IA conectada a tus sistemas desde $6,900, por proyecto. Sube según cuántos procesos automaticemos y el volumen de tu operación.',
        incluye: [
          { t: 'Llamada de diagnóstico sin costo', d: 'Mapeamos tus procesos y detectamos dónde una IA ahorra más horas.' },
          { t: 'Base de conocimiento privada (RAG)', d: 'Tus manuales, contratos, listas de precios y procedimientos en PDF, Word o Drive, sincronizados: actualizas un documento y la IA lo asimila.' },
          { t: 'Respuestas con cita', d: 'Cada respuesta dice de qué documento y página sale. Si no está en tus documentos, lo dice en vez de inventar.' },
          { t: 'Permisos por rol', d: 'Cada persona solo obtiene respuestas de lo que ya tiene permiso de ver en tu organización.' },
          { t: 'Automatización de procesos', d: 'Con <a href="/marketing/automatizaciones-n8n-panama/">n8n</a> y las APIs de tu CRM, ERP, Google Workspace, WhatsApp o sistemas heredados.' },
          { t: 'Aprobación humana', d: 'Pagos, correos externos y cambios críticos esperan el visto bueno de una persona. Tú decides dónde van esos puntos de control.' },
          { t: 'Auditoría completa', d: 'Registro de qué consultó, qué respondió y qué ejecutó la IA, con un panel de horas ahorradas y tareas hechas.' },
          { t: 'Operación y monitoreo', d: 'Respaldo del historial, alertas si el tiempo de respuesta se degrada, revisión de la calidad de las respuestas y reporte mensual de uso y costo.' },
        ],
        entregables: ['Diagnóstico escrito con los procesos priorizados', 'Piloto funcionando sobre un proceso real', 'Paso a producción con integraciones y controles humanos', 'Documentación y capacitación para tu equipo', 'Reporte mensual de uso, costo y calidad'],
        noIncluye: ['El consumo de los modelos de IA, que se factura por uso', 'Las licencias de los sistemas que ya usas (CRM, ERP, Workspace)', 'Ordenar la documentación interna que esté contradictoria o desactualizada'],
        medimos: ['Preguntas respondidas con cita', 'Preguntas sin respuesta en tus documentos', 'Acciones aprobadas y rechazadas', 'Tiempo de respuesta', 'Costo de consumo por mes'],
      },
      {
        type: 'cards',
        h2: 'Dos niveles: IA privada o IA conectada a tus sistemas',
        intro: 'Se empieza por el nivel que pide tu proceso. En los dos, el consumo de los modelos va aparte y por uso. Para sumar automatizaciones en un solo paquete, mira <a href="/soluciones/">Empresa con IA</a>.',
        items: [
          { h3: 'IA privada, desde $2,900', text: 'Responde con tus manuales, contratos y políticas, y cita el documento y la página. Es el punto de partida para la mayoría.' },
          { h3: 'IA conectada a tus sistemas, desde $6,900', text: 'Suma conectores a tu ERP o CRM. Consulta datos reales y propone acciones, como una nota de crédito, que una persona aprueba antes de ejecutarse.' },
          { h3: 'Diagnóstico de IA por escrito, $290', text: 'Opcional, después de la llamada sin costo. Un informe con tus procesos priorizados y el nivel que conviene. Si contratas el proyecto, se descuenta.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo lo implementamos',
        intro: 'Un proceso primero; se escala cuando el piloto demuestra valor.',
        items: [
          { h3: '1. Diagnóstico', text: 'Mapeamos tus procesos y detectamos dónde una IA operativa ahorra más horas. La llamada es sin costo; el informe por escrito, opcional, cuesta $290 y se descuenta del proyecto.' },
          { h3: '2. Diseño y piloto', text: 'Definimos la arquitectura y lanzamos un piloto acotado a un proceso concreto y medible.' },
          { h3: '3. Producción', text: 'Con el piloto validado, lo llevamos a producción con sus integraciones y sus controles humanos.' },
          { h3: '4. Mejora continua', text: 'Operamos y afinamos el ecosistema como servicio, sumando procesos con el tiempo.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Pensado para el entorno empresarial',
        intro: 'Además de los permisos por rol, la auditoría y la aprobación humana que incluye el proyecto:',
        items: [
          { h3: 'Donde tu equipo ya trabaja', text: 'Se consulta desde WhatsApp, Slack o Microsoft Teams. Sin aplicaciones nuevas que aprender.' },
          { h3: 'Visión y voz', text: 'Envías la foto de un recibo o una nota de voz: la IA extrae los datos, los valida contra tus políticas y los carga en el sistema.' },
          { h3: 'Infraestructura dedicada', text: 'Corre en infraestructura dedicada, con respaldo continuo del historial y conmutación a otro proveedor de modelo si uno falla.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Un asistente de IA también necesita infraestructura',
        paragraphs: [
          'Un asistente de IA es un sistema que tiene que seguir respondiendo bien el día 200, no solo en la demostración del día uno. Por eso vigilamos algo que un hosting normal no mide: si el modelo empieza a responder mal o más lento, no solo si el servidor sigue encendido. Cada conversación, documento consultado y acción ejecutada queda respaldado, y si algo falla se recupera el estado exacto de antes. Es la misma disciplina con la que operamos el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento de los sitios web</a> de nuestros clientes.',
        ],
      },
      {
        type: 'compare',
        h2: 'Por qué con nosotros',
        intro: 'Criterios que puedes verificar en esta página y pedirle a cualquier proveedor de IA. Usa la última columna para comparar.',
        otraCotizacion: true,
        criterios: [
          { criterio: 'Tus datos', nosotros: 'Entorno privado; no se usan para entrenar modelos públicos' },
          { criterio: 'De dónde sale cada respuesta', nosotros: 'Con la cita del documento y la página; si no está, lo dice' },
          { criterio: 'Acciones sensibles', nosotros: 'Esperan la aprobación de una persona' },
          { criterio: 'Tus sistemas actuales', nosotros: 'Se conectan por API o n8n; no tienes que migrar' },
          { criterio: 'Cómo se empieza', nosotros: 'Llamada de diagnóstico sin costo y piloto de un solo proceso' },
          { criterio: 'Quién lo mantiene', nosotros: 'Lo operamos y mantenemos como servicio; tu equipo puede involucrarse' },
          { criterio: 'Precio', nosotros: 'IA privada desde $2,900; conectada a tu ERP o CRM desde $6,900. El consumo de los modelos aparte y por uso' },
        ],
      },
      {
        type: 'faq',
        h2: 'Lo que toda empresa pregunta primero',
        items: [
          { q: '¿Mis datos quedan expuestos o se usan para entrenar modelos públicos?', a: 'No. Trabajamos sobre un entorno privado y aislado. Tus documentos y datos se usan solo para responder a tu empresa; no se comparten con modelos públicos ni se usan para entrenarlos. El acceso respeta los permisos que cada persona ya tiene en tu organización.' },
          { q: '¿Qué es una base de conocimiento con RAG?', a: 'RAG (generación aumentada por recuperación) es la técnica con la que la IA busca primero en tus documentos y responde solo con lo que encontró, citando la fuente. Así no responde de memoria ni con información general de internet, y cuando la respuesta no está en tus documentos, lo dice.' },
          { q: '¿Tengo que cambiar los sistemas que ya uso?', a: 'No. El ecosistema se conecta a lo que ya tienes vía API o con automatización (n8n): correo, CRM, ERP, hojas de cálculo, Drive, WhatsApp y más. La idea es potenciar tu operación actual, no obligarte a migrar todo.' },
          { q: '¿Y si la IA se equivoca en algo importante?', a: 'Por diseño, las acciones sensibles (pagos, correos externos, cambios críticos) se detienen y esperan la aprobación de una persona. Es un copiloto, no un piloto automático a ciegas. Tú decides dónde poner esos puntos de control.' },
          { q: '¿Cuánto tarda en implementarse?', a: 'Empezamos con un diagnóstico y un piloto acotado a un proceso concreto, para que veas resultados sin comprometer toda la operación. A partir de ahí escalamos. El tiempo exacto depende del alcance, y lo definimos por escrito antes de empezar.' },
          { q: '¿Cuánto cuesta?', a: 'Hay dos niveles. La IA privada con tus documentos parte de $2,900. La IA conectada a tu ERP o CRM, con acciones que aprueba una persona, parte de $6,900. De ahí sube según cuántos procesos automaticemos y el volumen de tu operación. Aparte van los costos de consumo de los modelos, que se facturan por uso. El pago sigue el mismo esquema del resto: 50% para arrancar, 30% al ver el piloto funcionando y 20% para pasar a producción. La llamada de diagnóstico inicial no tiene costo. Si quieres el diagnóstico por escrito, cuesta $290 y se descuenta del proyecto. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene meter IA en la empresa?', a: 'Cuando la información está desordenada. Una IA que lee documentos contradictorios responde con seguridad cosas equivocadas, y eso es peor que no tenerla: la gente le cree. Tampoco conviene sin un dueño interno, porque alguien tiene que decidir qué es verdad cuando el sistema se equivoca. Si nadie va a hacer ese trabajo, mejor ordenar primero y automatizar después.' },
          { q: '¿Esto funciona en español de Panamá y con nuestros documentos locales?', a: 'Sí. El sistema responde en el español que se habla aquí y trabaja sobre tus propios documentos: manuales, contratos, listas de precios, procedimientos. No inventa a partir de conocimiento general; cita de dónde sacó cada respuesta, y si no está en tus documentos, lo dice en vez de rellenar.' },
          { q: '¿Necesito un equipo técnico interno para mantenerlo?', a: 'No es obligatorio. Somos una software house: construimos, operamos y mantenemos el ecosistema como un servicio. Si tu equipo quiere involucrarse, lo documentamos y los capacitamos.' },
        ],
      },
      { type: 'form', h2: 'Agenda un diagnóstico sin costo', intro: 'Cuéntanos qué procesos te quitan más horas y qué sistemas usas: te mostramos dónde una IA privada puede ahorrarlas.' },
      {
        type: 'related',
        h2: 'Servicios relacionados',
        items: [
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbot con IA para tu web' },
          { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones con n8n' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a medida' },
          { slug: 'saas/wazacrm', label: 'WazaCRM' },
          { slug: 'marketing/videos-publicitarios-panama', label: 'Videos publicitarios con IA' },
          { slug: 'marketing/video-inmobiliario-panama', label: 'Video inmobiliario con IA' },
          { slug: 'blog/inteligencia-artificial-para-pequenas-empresas-en-panama', label: 'Guía: IA para pequeñas empresas' },
          { slug: 'soluciones', label: 'Soluciones: Empresa con IA' },
        ],
      },
    ],
    cta: { h2: 'Deja de gestionar tareas. Empieza a gestionar resultados', wa: 'Hola, quiero un diagnóstico del ecosistema de IA para mi empresa.', boton: 'Agendar diagnóstico gratuito' },
  },
];
