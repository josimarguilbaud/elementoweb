/* SILO INDUSTRIAS (lote 2b): seguros, concesionarios, clínicas estéticas y
   veterinarias. Regla dura: contenido REAL por industria, con su dolor y su
   checklist propios. Nada de plantillas clonadas con el nombre cambiado. */
import type { PageData } from '../types';

const parent = { slug: 'industrias', label: 'Industrias' };

export const industrias2b: PageData[] = [
  /* ---------- SEGUROS Y CORREDORES ---------- */
  {
    slug: 'industrias/diseno-web-seguros-corredores-panama',
    parent,
    title: 'Diseño Web para Corredores de Seguros en Panamá | Por Ramo',
    description: 'Diseño web para corredores de seguros en Panamá: una página por ramo, contenido que explica coberturas y recordatorios que evitan perder la renovación.',
    h1: 'Diseño web para seguros y corredores',
    breadcrumb: 'Seguros',
    heroImage: { src: '/images/industrias/diseno-web-seguros-corredores-panama.jpg', alt: 'Escudo protector, en cromo plateado, render 3D sobre fondo gris claro' },
    service: { type: 'Diseño web para corredores de seguros' },
    lead: [
      'Quien busca un seguro no compra por impulso: compara coberturas, pide varias cotizaciones y decide por confianza. Tu web tiene que ganar esa comparación antes de que suene el teléfono.',
      'Elemento Web, en Ciudad de Panamá, hace diseño web para corredores de seguros en Panamá con una página por ramo (auto, salud, vida, hogar, colectivo, fianzas), solicitud de cotización corta, sección de siniestros y recordatorios de renovación. El formato típico es una web corporativa desde $1,250; una landing para un solo ramo arranca desde $550.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita la web de un corredor de seguros en Panamá?',
        intro: 'No es un catálogo de aseguradoras: aclara dudas y filtra solicitudes serias.',
        items: [
          'Una página por ramo (auto, salud, vida, hogar, colectivo, fianzas)',
          'Solicitud de cotización que pide solo los datos mínimos para responder',
          'Explicación honesta de qué cubre y qué no cada tipo de póliza',
          'Señales de respaldo: aseguradoras con las que trabajas y tu licencia de corredor de la Superintendencia de Seguros y Reaseguros',
          'Canal directo por WhatsApp para dudas rápidas antes de cotizar',
          'Sección de renovación y siniestros para el cliente que ya tienes',
          'Contenido que responde las preguntas previas (deducible, cobertura, exclusiones)',
          'Diseño sobrio que transmita respaldo, no una promoción de descuentos',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué una página por ramo de seguro?',
        paragraphs: [
          'Nadie busca "corredor de seguros" a secas: busca "seguro de auto Panamá", "seguro de salud para la familia" o "fianza de cumplimiento". Si todos tus ramos viven en una sola página, no compites en ninguna de esas búsquedas y obligas al visitante a leer coberturas que no le interesan.',
          'Cada ramo merece su propia URL: qué cubre, qué deja fuera, cuándo conviene y qué se necesita para cotizar. <strong>Así se posiciona un corredor: ramo por ramo</strong>, y el asegurado llega a la cotización sabiendo lo que pide.',
          'Cada duda frecuente (qué es un deducible, cómo funciona un colectivo, qué exclusiones tiene un seguro de auto) es además un artículo que atrae al siguiente cliente con la misma pregunta. Es el principio del <a href="/crecimiento/seo-posicionamiento-web-panama/">posicionamiento por contenido</a>.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué busca cada asegurado antes de escribirte',
        intro: 'Un corredor atiende perfiles con miedos distintos. La web bien armada le habla a cada uno sin marearlo con lo que no le toca.',
        items: [
          { h3: 'El particular que compara precio', text: 'Cotiza el mismo auto o la misma salud con tres corredores. Decide por rapidez de respuesta y por sentir que le explicaron, no que le vendieron. Le pesa una cotización clara y sin letra pequeña.' },
          { h3: 'La empresa que necesita colectivo o fianza', text: 'Busca respaldo y cumplimiento: seguro colectivo para su personal, fianzas para licitar. Le importa tu experiencia y con qué aseguradoras trabajas más que el precio de lista.', link: { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Servicios profesionales' } },
          { h3: 'El cliente que ya tienes', text: 'Vuelve a renovar o a reportar un siniestro. Si no encuentra rápido cómo hacerlo, te llama para lo básico y te satura. Una sección de renovación y siniestros libera tu tiempo y lo fideliza.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de seguros',
        items: [
          { h3: 'Mapeo de ramos y aseguradoras', text: 'Listamos los ramos que colocas y con qué compañías. Decidimos cuáles merecen página propia posicionable y cómo mostrar el respaldo sin convertir la web en un muro de logos.' },
          { h3: 'Redacción que aclara, no que asusta', text: 'Explicamos cada ramo en el idioma del cliente: qué cubre, qué no, cuándo conviene. Sin promesas de "el más barato" y sin jerga de póliza que espanta.' },
          { h3: 'Solicitud de cotización que filtra', text: 'Armamos el formulario por ramo pidiendo solo lo mínimo para responder. Y si lo activas, el <a href="/funcionalidades/chatbots-ia-web-wazacrm-panama/">asistente con IA</a> resuelve las dudas básicas y solo te pasa la solicitud lista para cotizar.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Se vende un seguro desde la web en Panamá?',
        paragraphs: [
          'Casi nunca se cierra ahí. El asegurado investiga en internet (qué cubre, qué no, cuánto cuesta más o menos, a quién llamar) y contrata por teléfono o WhatsApp. Cuando llama, ya eligió corredor, y lo eligió leyendo. <strong>El objetivo de la web no es cerrar la póliza, es ganarte la llamada.</strong>',
          'Por eso no conviene un cotizador complejo que casi nadie termina, sino contenido que responda: qué cubre cada ramo, qué exclusiones sorprenden, qué documentos piden, qué pasa al reclamar. El corredor que explica bien parece el que sabe.',
          'Competir solo por "la cotización más barata" atrae al cliente que se va apenas otro le baje cinco dólares. Mostrar las aseguradoras con las que trabajas, tu licencia y una sección clara de siniestros pesa más: el asegurado compra al corredor que confía que va a estar cuando lo necesite.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo ayuda la web a no perder renovaciones?',
        paragraphs: [
          'Un corredor vive de la cartera, y la cartera se pierde en silencio: el asegurado no renueva y a veces ni recuerda quién era su corredor. Casi todas las webs del rubro están hechas solo para captar y no tienen nada para el cliente que ya tienes.',
          'Lo que funciona: un área donde el asegurado consulte pólizas y vencimientos, instrucciones claras de qué hacer ante un siniestro y recordatorios automáticos antes de cada renovación.',
          '<strong>Renovar es varias veces más barato que captar</strong>, y una llamada a tiempo antes del vencimiento evita la mayoría de las fugas. Lo montamos con <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones</a> conectadas a tu cartera.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que un asegurado llame a otro corredor',
        intro: 'En un rubro donde la confianza lo es todo, cada uno de estos detalles cuesta llamadas.',
        items: [
          'Sin licencia de corredor ni número de registro visible',
          'Sin decir con qué aseguradoras se trabaja, que es la primera pregunta',
          'Ramos listados en jerga de póliza, sin traducir a qué te pasa si no lo tienes',
          'Nada sobre qué hacer ante un siniestro, el momento de mayor angustia',
          'Cotizador largo que pide veinte datos antes de dar cualquier referencia',
          'Ni un rango de precio ni un ejemplo de prima en ningún ramo',
          'Formulario que pide datos personales sin explicar quién los recibe',
          'Sin teléfono directo visible, cuando el rubro se resuelve hablando',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué datos puede pedir el cotizador de un corredor de seguros?',
        paragraphs: [
          'Un formulario de cotización recoge cédula, edad, a veces condición de salud, datos del vehículo o de la vivienda. La <strong>Ley 81 de 2019 de Protección de Datos Personales</strong> trata varios de esos con más cuidado, en especial los de salud.',
          'Pedir menos convierte mejor y reduce tu exposición: nombre, teléfono y ramo bastan para una primera conversación. Lo recibido va a un buzón de la corredora con acceso controlado (no al correo personal del corredor ni a un WhatsApp compartido) y, con varios ejecutivos, con registro de quién atendió cada solicitud.',
          'Montamos la parte técnica: HTTPS, formulario mínimo con aviso de privacidad y almacenamiento con acceso controlado. <strong>El texto legal lo revisa tu asesor.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: llamadas y solicitudes por ramo',
        paragraphs: [
          'Como la venta se cierra por teléfono, se miden también las llamadas desde el botón del sitio y las conversaciones de WhatsApp, que en seguros suelen superar a los formularios.',
          'El corte útil es por ramo: auto, salud, vida, incendio y fianzas tienen comisiones y ciclos distintos, y saber de cuál viene cada contacto dice qué página ampliar y dónde pautar. Conviene separar además el contacto de cliente nuevo del de cliente existente.',
          'El segundo número es la tasa de renovación de la cartera: no sale de la web, pero sube si los recordatorios automáticos funcionan. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué le pregunta tu cliente a la IA antes de escoger un corredor de seguros?',
        paragraphs: [
          'Quien necesita un seguro y no tiene corredor ya no siempre pide referencias. Le pregunta a ChatGPT: «¿qué corredor de seguros en Panamá me cotiza un seguro de auto con varias aseguradoras?», «¿qué seguro de salud me conviene si trabajo como independiente en Panamá?» o «¿quién me tramita una fianza de cumplimiento para una licitación?». La respuesta trae pocos nombres, y esos reciben la llamada.',
          'Para estar entre ellos, la IA tiene que encontrar una página por ramo, tu licencia de corredor visible, con qué aseguradoras trabajas, una ficha de Google Business Profile completa y con reseñas de asegurados, el mismo nombre, teléfono y dirección en la web, la ficha y los directorios, y respuestas a esas dudas escritas en tu sitio. <strong>Un asistente no recomienda a un corredor que no puede verificar.</strong>',
          'Eso no asegura que te nombre, pero sube las probabilidades, y el punto de partida es el SEO de siempre. Lo explicamos en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a> y en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un corredor de seguros?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $1,250, con una página por ramo. Si solo quieres captar para un ramo concreto (auto, por ejemplo) con una <a href="/servicios/landing-pages-alta-conversion-panama/">landing</a>, arranca desde $550. Siempre con cotización cerrada por escrito antes de empezar.' },
          { q: '¿La web cotiza sola las pólizas?', a: 'No calcula la prima final (eso depende de la aseguradora y del perfil de riesgo), pero sí recoge la solicitud con los datos correctos para que tú respondas rápido. Cotizar en automático requiere integración con cada compañía y rara vez conviene: el valor del corredor está justo en asesorar la cotización.' },
          { q: '¿Puedo mostrar todas las aseguradoras con las que trabajo?', a: 'Sí, pero con criterio. En vez de un muro de logos que parece publicidad de ellas, las mostramos como respaldo dentro de cada ramo: quién asegura auto, quién salud. Así el logo suma confianza en lugar de robarte el protagonismo.' },
          { q: '¿Sirve para un corredor independiente o solo para agencias grandes?', a: 'Sirve especialmente al independiente. Un corredor solo que posiciona bien dos o tres ramos concretos capta de igual a igual con agencias grandes en esas búsquedas, sin el costo de una estructura completa.' },
          { q: '¿Cómo evito que me lleguen solicitudes que no puedo colocar?', a: 'Con el formulario correcto por ramo y, si lo activas, el asistente con IA que filtra antes. Recoge tipo de seguro, datos mínimos y expectativa, para que solo llegue a tu bandeja la solicitud que sí trabajas.' },
                  { q: '¿Debo poner un cotizador en línea?', a: 'Uno corto, si acaso. En Panamá casi nadie contrata la póliza desde la web: investiga y después llama. Un cotizador que pide veinte datos convierte mal y acumula información sensible que hay que custodiar. Pedir nombre, teléfono y ramo convierte mejor.' },
          { q: '¿Qué contenido trae clientes a un corredor?', a: 'El que explica de verdad: qué cubre cada ramo, qué exclusiones sorprenden, qué documentos piden, qué hacer al reclamar. El corredor que explica bien parece el que sabe, y ese es a quien la gente llama.' },
          { q: '¿Cómo evito perder cartera en las renovaciones?', a: 'Con recordatorios automáticos antes de cada vencimiento y un área donde el asegurado vea sus pólizas. Renovar es varias veces más barato que captar, y la mayoría de las fugas son por olvido, no por precio.' },
          { q: '¿Qué pasa con los datos que pide el cotizador?', a: 'Cédula, edad y a veces condición de salud caen bajo la Ley 81 de 2019, y los de salud con más exigencia. Conviene pedir el mínimo para una primera conversación y que lleguen a un buzón de la corredora con acceso controlado, no a un correo personal.' },
          { q: '¿Cuándo NO conviene la web de un corredor?', a: 'Si toda tu cartera es de renovaciones y referidos y no buscas clientes nuevos, con una página de contacto cumples. La web trabaja cuando quieres captar a quien busca «seguro de auto en Panamá» sin tener corredor todavía, y ahí sí conviene una página por ramo.' },
          { q: '¿Cómo se paga y qué queda como gasto fijo?', a: 'Tres pagos: 50% al inicio, 30% al ver el sitio funcionando en demo y 20% para publicar, con 30 días de garantía por fallas técnicas. Como gasto fijo quedan la infraestructura, desde $350 al año, y el mantenimiento, desde $99 al mes. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Puede un asistente de IA recomendar a un corredor de seguros?', a: 'Sí, cuando encuentra datos claros y consistentes: ramos explicados, licencia visible, aseguradoras con las que trabajas y reseñas en Google. Nadie puede garantizar que te mencione, pero sin esa base es difícil que lo haga. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a>.' },
          { q: '¿Qué contenido de seguros ayuda a aparecer en ChatGPT?', a: 'Respuestas claras a dudas reales: qué cubre un seguro de auto completo frente a uno de daños a terceros, qué necesita un independiente para asegurarse, cómo se tramita una fianza. Escritas en tu web, ramo por ramo, le dan a la IA material para citarte.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-seguros-panama', label: 'Guía: diseño web para seguros' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'funcionalidades/chatbots-ia-web-wazacrm-panama', label: 'Chatbot con IA' },
          { slug: 'industrias/diseno-web-contadores-panama', label: 'Web para Contadores' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu corredora', wa: 'Hola, quiero cotizar la web de una corredora de seguros.' },
  },

  /* ---------- CONCESIONARIOS Y VENTA DE AUTOS ---------- */
  {
    slug: 'industrias/diseno-web-concesionarios-autos-panama',
    parent,
    title: 'Diseño Web para Concesionarios de Autos en Panamá',
    description: 'Diseño web para concesionarios y venta de autos en Panamá: inventario con fotos que vende, financiamiento claro, captación de prospectos y agenda de test drive.',
    h1: 'Diseño web para concesionarios y venta de autos',
    breadcrumb: 'Concesionarios',
    heroImage: { src: '/images/industrias/diseno-web-concesionarios-autos-panama.jpg', alt: 'Auto deportivo sin marca a escala, en cromo plateado, render 3D sobre fondo gris claro' },
    service: { type: 'Diseño web para concesionarios de autos' },
    lead: [
      'El comprador de un auto lo elige en el celular mucho antes de pisar el salón. Ve las fotos, calcula la letra y decide a cuál concesionario visitar. Si tu inventario no está en línea, no estás en esa lista.',
      'Elemento Web, en Ciudad de Panamá, hace diseño web para concesionarios de autos en Panamá: inventario en línea con fotos reales y filtros, ficha por vehículo con precio, simulador de financiamiento, agenda de prueba de manejo y WhatsApp por unidad. Un sitio de hasta 6 páginas arranca desde $1,250; con inventario que se actualiza solo, desde $2,900.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita la web de un concesionario de autos en Panamá?',
        items: [
          'Inventario en línea con fotos reales de cada unidad, no del catálogo del fabricante',
          'Filtros por marca, modelo, año, precio, kilometraje y tipo (nuevo o usado)',
          'Ficha por vehículo con equipamiento, precio y varias fotos del auto real',
          'Simulador o solicitud de financiamiento que capte al prospecto',
          'Botón de agendar test drive por unidad',
          'Sección de seminuevos o recibimos tu usado si aplica',
          'Captación de prospectos con WhatsApp directo desde cada ficha',
          'Carga fácil del inventario para que tu equipo lo mantenga al día',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué el inventario en línea decide la visita al salón?',
        paragraphs: [
          'El comprador de auto ve fotos, compara modelos, calcula la letra y descarta concesionarios desde el celular. Si tu web no muestra la unidad que de verdad está en piso, se va al concesionario que sí la muestra.',
          'Cada unidad necesita su ficha con fotos reales, precio y filtros por marca, presupuesto y año, más un botón para dejar el interés sin llamar. <strong>La foto de catálogo del fabricante no vende: vende el auto real que puede tocar el sábado.</strong>',
          'Un catálogo así funciona parecido a una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a>, pero el cierre no es un pago: es un prospecto calificado y una prueba de manejo agendada.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué necesita cada tipo de comprador',
        intro: 'No todos llegan igual: unos compran auto nuevo con financiamiento, otros buscan seminuevo de contado. La web tiene que servir a los dos.',
        items: [
          { h3: 'El comprador de auto nuevo', text: 'Compara modelos y le importa la letra mensual. Necesita ver el equipamiento por versión y calcular el financiamiento antes de decidir a cuál agencia ir. Se cierra con una buena simulación y un test drive fácil de agendar.' },
          { h3: 'El comprador de seminuevo', text: 'Desconfía por naturaleza: quiere fotos reales, kilometraje, historial y precio sin sorpresas. Le pesa la transparencia. La ficha honesta con muchas fotos vale más que cualquier promoción.' },
          { h3: 'El que quiere entregar su usado', text: 'Trae un auto para dar de inicial y necesita saber si lo reciben y cuánto le dan. Un formulario de valoración de su usado lo convierte en prospecto doble: compra y entrega.', link: { slug: 'funcionalidades/integracion-yappy-pasarelas-pago-panama', label: 'Cobro de reservas' } },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de concesionario',
        items: [
          { h3: 'Estructura del inventario', text: 'Definimos cómo se carga cada unidad, qué campos filtran (marca, año, precio, kilometraje) y cómo tu equipo sube y baja autos sin depender de nosotros. El inventario tiene que respirar solo.' },
          { h3: 'Captación de prospectos', text: 'Conectamos la solicitud de financiamiento, la valoración del usado y el <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">agendamiento de test drive</a> para que cada interés se convierta en un dato accionable para tu equipo de ventas.' },
          { h3: 'Publicación y medición', text: 'Publicamos, conectamos el seguimiento y dejamos todo listo para amplificar con <a href="/marketing/google-ads-panama/">Google Ads</a>, que en autos rinde: quien busca "camioneta 2024 Panamá" está a semanas de comprar.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo mostrar el financiamiento en la web de un concesionario?',
        paragraphs: [
          'En Panamá muy pocos compran un auto de contado: la pregunta que importa es "cuánto pago al mes". Un simulador con letra estimada según monto, inicial y plazo, o al menos una solicitud de financiamiento clara con los bancos con los que trabajas y el abono mínimo, avanza la venta desde el celular.',
          'La aprobación y la tasa real dependen del banco o la financiera, y la web lo dice para no crear falsas expectativas. A diferencia de un <a href="/industrias/diseno-web-talleres-automotriz-panama/">taller</a>, donde el cliente busca confianza en la reparación, aquí llega con un deseo: <strong>la web acelera una decisión que ya casi está tomada.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué debe tener la ficha de un auto usado?',
        paragraphs: [
          'El auto nuevo llega con el material de la marca; el usado suele publicarse con tres fotos tomadas de prisa en el patio. Y el comprador de usado es el que compara unidades concretas: cada duda que no le resuelvas la resuelve descartando.',
          'La ficha que convierte lleva kilometraje real, año, dueños anteriores, si tuvo mantenimiento en agencia, historial de choques, estado de llantas y batería, y muchas fotos con luz de día, incluidos los detalles feos. <strong>La transparencia en usados no baja el precio, sube la conversión.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Un lead de auto se enfría en minutos, no en días',
        paragraphs: [
          'Quien llena un formulario a las ocho de la noche está mirando cuatro concesionarios a la vez y responde al que conteste primero. Lo habitual es otro: el lead llega a un correo, se asigna al día siguiente y el vendedor llama dos días después.',
          'La solución es automatizar la primera respuesta (un WhatsApp inmediato con la ficha de la unidad consultada y el enlace para agendar prueba de manejo) y que el lead entre directo al CRM asignado. Lo montamos con <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones y CRM</a>.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que un comprador se vaya a otro patio',
        intro: 'En una compra de este tamaño, cada dato que falta se interpreta como algo que se esconde.',
        items: [
          'Unidades sin precio: "consultar" en un patio de usados',
          'Fotos insuficientes o tomadas de noche bajo luz artificial',
          'Kilometraje ausente o redondeado sospechosamente',
          'Sin decir si el vehículo tuvo mantenimiento en agencia',
          'Nada sobre financiamiento: bancos con los que se trabaja, abono mínimo',
          'Unidades vendidas que siguen publicadas semanas después',
          'Sin forma de agendar prueba de manejo que no sea llamar',
          'Nada sobre si se recibe el carro del cliente como parte de pago',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué debe tener la sección de postventa de un concesionario?',
        paragraphs: [
          'La venta ocurre una vez cada varios años; el taller, los repuestos y el mantenimiento, varias veces al año durante toda la vida del carro. Aun así, casi ninguna web de concesionario tiene canal para el cliente que ya compró.',
          'La sección de servicio lleva cita de mantenimiento en línea, precios de los servicios programados por kilometraje, disponibilidad de repuestos y estado de la garantía. El cliente que vuelve al taller cada seis meses es al que le ofreces el cambio de unidad cuando llegue el momento.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: leads por unidad y tiempo hasta la primera respuesta',
        paragraphs: [
          'El primer número es cuánto tarda tu equipo en responder un lead, medido en minutos. El segundo, leads por unidad publicada: una unidad con muchas visitas y ningún contacto tiene un problema de precio o de fotos, no de difusión.',
          'Conviene separar el interés en nuevo del interés en usado, que tienen ciclos distintos, y contar las pruebas de manejo agendadas, el paso que mejor predice la venta. El planteamiento está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué le pregunta un comprador de auto a ChatGPT antes de ir al salón?',
        paragraphs: [
          'El comprador llega al salón con la tarea hecha, y parte de esa tarea ya la hace con un asistente de IA: «¿qué concesionario en Panamá tiene SUV usadas con financiamiento?», «¿dónde puedo entregar mi carro usado como inicial para uno nuevo en Ciudad de Panamá?» o «¿qué agencia tiene taller autorizado cerca de la Vía España?». Los concesionarios que aparecen en esa respuesta son los que visita.',
          'La IA necesita encontrar tu inventario con ficha propia por unidad, una página por marca y modelo, el financiamiento explicado, una ficha de Google Business Profile completa y con reseñas por cada sucursal, el mismo nombre, teléfono y dirección en la web, las fichas y los directorios, y respuestas a esas preguntas escritas en tu sitio. <strong>Un inventario que solo vive en fotos de redes no le da a la IA nada que citar.</strong>',
          'Con eso suben las probabilidades de que te nombre, sin garantías de nadie, y todo se sostiene en el SEO. Te lo explicamos en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a> y en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de un concesionario?', a: 'Depende del inventario. Con catálogo de vehículos, filtros y fichas el punto de partida se acerca a la <a href="/servicios/tiendas-online-ecommerce-panama/">plataforma con catálogo</a> desde $1,950, porque el sistema de inventario es lo que da el trabajo. Si es un lote pequeño de seminuevos, se puede resolver más liviano. Siempre con cotización cerrada por escrito.' },
          { q: '¿Puedo subir y bajar autos yo mismo?', a: 'Sí, esa es la idea. Dejamos la carga del inventario tan simple que tu equipo suba una unidad nueva con sus fotos en minutos y la baje cuando se venda, sin llamarnos. Un inventario desactualizado espanta más que no tener web.' },
          { q: '¿La web calcula el financiamiento?', a: 'Podemos poner un simulador que dé una letra estimada según monto, inicial y plazo, para que el prospecto se haga una idea. La aprobación y la tasa real dependen del banco o financiera, así que lo dejamos claro para no generar falsas expectativas.' },
          { q: '¿Sirve para vender también seminuevos y recibir usados?', a: 'Sí. Manejamos secciones separadas para nuevos y seminuevos, con filtros distintos, y un formulario de valoración para el cliente que quiere entregar su usado como inicial. Es una de las funciones que más prospectos genera.' },
          { q: '¿Cómo llegan los prospectos a mi equipo de ventas?', a: 'Cada ficha tiene botón de WhatsApp, agenda de test drive y solicitud de financiamiento. Todo eso llega con los datos del auto de interés y del cliente, para que tu vendedor tome la conversación sabiendo qué modelo lo movió.' },
                  { q: '¿Publico el precio de los usados?', a: 'Sí. En un patio de usados, "consultar precio" hace que la mayoría siga de largo y los pocos que escriben solo preguntan precio. La transparencia en usados no baja el margen, sube la conversión: el que llega sabiendo qué va a ver llega a comprar.' },
          { q: '¿Cuánto tiempo tengo para responder un lead de auto?', a: 'Minutos, no días. Quien consulta a las ocho de la noche está mirando cuatro concesionarios y responde al que conteste primero. Una respuesta automática por WhatsApp con la ficha y el enlace para agendar prueba mantiene la conversación abierta hasta que un vendedor pueda tomarla.' },
          { q: '¿Qué debe llevar la ficha de un usado?', a: 'Kilometraje real, año, dueños anteriores, si tuvo mantenimiento en agencia, historial de choques, estado de llantas y batería, y muchas fotos con luz de día incluyendo los detalles feos. Publicar un rayón cuesta menos que perder la confianza cuando el cliente lo ve en persona.' },
          { q: '¿Vale la pena una sección de postventa?', a: 'Es donde está el negocio recurrente. La venta ocurre una vez cada varios años; el taller y los repuestos, varias veces al año durante toda la vida del carro. Y el cliente que vuelve al taller es al que le puedes ofrecer el cambio de unidad cuando llegue el momento.' },
          { q: '¿Cuándo se justifica un inventario que se actualiza solo?', a: 'Un inventario navegable con fichas por vehículo, filtros y solicitud de prueba de manejo es proyecto a medida desde $2,900, porque el inventario tiene que actualizarse solo. Si vendes pocas unidades y las publicas a mano, un sitio de hasta 6 páginas desde $1,250 te sirve. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO conviene el sitio propio con inventario?', a: 'Si tu rotación es baja y publicas dos o tres autos al mes, mantener un inventario en línea cuesta más trabajo del que devuelve: publica en los portales y usa la web para presentarte. El inventario propio se paga cuando el volumen hace que actualizar a mano sea imposible.' },
          { q: '¿Puede ChatGPT recomendar mi concesionario?', a: 'Puede, si encuentra información concreta y verificable: inventario publicado, sucursales con su ficha de Google, reseñas y datos de contacto consistentes. Nadie puede asegurar que te mencione, pero esa base sube las probabilidades. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a>.' },
          { q: '¿Publicar el inventario ayuda a aparecer en la IA?', a: 'Ayuda, porque cada unidad con su ficha (modelo, año, kilometraje, precio o cuota) es información que un asistente puede leer. Un inventario que solo existe en un PDF o en historias de Instagram no le sirve para responderle a nadie.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-concesionarios-autos-panama', label: 'Guía: diseño web para concesionarios' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Plataformas con Catálogo' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Agenda de Test Drive' },
          { slug: 'marketing/google-ads-panama', label: 'Google Ads' },
          { slug: 'industrias/diseno-web-talleres-automotriz-panama', label: 'Web para Talleres' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu concesionario', wa: 'Hola, quiero cotizar la web de un concesionario de autos con inventario en línea.' },
  },

  /* ---------- CLÍNICAS ESTÉTICAS ---------- */
  {
    slug: 'industrias/diseno-web-clinicas-esteticas-panama',
    parent,
    title: 'Diseño Web para Clínicas Estéticas en Panamá | Antes y Después',
    description: 'Diseño web para clínicas estéticas en Panamá: una página por procedimiento, galerías de antes y después que convierten y captación sin depender de la pauta.',
    h1: 'Diseño web para clínicas estéticas',
    breadcrumb: 'Clínicas Estéticas',
    heroImage: { src: '/images/industrias/diseno-web-clinicas-esteticas-panama.jpg', alt: 'Flor de loto, en cromo plateado, render 3D sobre fondo gris claro' },
    service: { type: 'Diseño web para clínicas estéticas' },
    lead: [
      'Un tratamiento estético se decide con dos preguntas: se ve bien el resultado y confío en quien me lo va a hacer. Tu web tiene que responder ambas antes de que el paciente pida una cita.',
      'Elemento Web, en Ciudad de Panamá, hace diseño web para clínicas estéticas en Panamá con una página por procedimiento, galería de antes y después con consentimiento del paciente, credenciales del médico, precio «desde» por tratamiento y reserva de valoración en línea con recordatorio. El formato típico es una web corporativa desde $1,250.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita la web de una clínica estética en Panamá?',
        items: [
          'Una página por tratamiento (botox, rellenos, láser, corporales, faciales)',
          'Antes y después reales, con el consentimiento del paciente',
          'Credenciales del médico o especialista y equipos que usa',
          'Reserva de valoración en línea, no solo un teléfono',
          'Explicación honesta de cada tratamiento: qué hace, qué esperar, recuperación',
          'Testimonios y señales de confianza sin promesas de resultado garantizado',
          'Diseño cuidado que transmita limpieza, seriedad y buen gusto',
          'WhatsApp para la duda íntima que el paciente no quiere hacer en público',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo mostrar antes y después en la web de una clínica estética?',
        paragraphs: [
          'Ninguna descripción convence tanto como el resultado en una persona real. El antes y después bien tomado (misma luz, mismo ángulo y distancia, con consentimiento del paciente para publicarlo en internet) es la prueba que mueve la reserva.',
          'Mostrar no es prometer: se muestra el resultado real de un caso, no se garantiza que a todos les pase igual. <strong>La clínica seria explica qué esperar y qué no</strong>, y esa honestidad baja el miedo que frena un ticket alto.',
        ],
      },
      {
        type: 'cards',
        h2: 'Qué mueve a cada paciente a reservar',
        intro: 'La estética atiende motivaciones distintas. La web bien armada le habla a cada una sin prometer de más.',
        items: [
          { h3: 'La paciente de mantenimiento', text: 'Ya se hace tratamientos y busca continuidad y buena mano. Le importa la agenda cómoda y que la clínica recuerde su historial. Se fideliza con una reserva fácil y un trato constante.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Reservas en línea' } },
          { h3: 'El paciente primerizo', text: 'Nunca se ha hecho nada y llega lleno de miedo. Necesita ver resultados reales, entender el procedimiento y sentir que puede preguntar sin compromiso. Se cierra con una valoración, no con una venta directa.' },
          { h3: 'Quien busca un tratamiento puntual', text: 'Vio algo en redes (un relleno, un láser) y quiere ese resultado concreto. Llega a la página del tratamiento específico. Le pesa el antes y después de ese procedimiento y el precio de la valoración.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de clínica estética',
        items: [
          { h3: 'Menú de tratamientos', text: 'Ordenamos tu oferta en páginas por tratamiento y definimos cuáles posicionar por separado y cuáles agrupar, empezando por los de mayor margen.' },
          { h3: 'Reserva de valoración', text: 'Conectamos el <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de citas</a> para que el paciente reserve su valoración en línea, con recordatorio automático que baja las ausencias, y WhatsApp para la duda íntima previa.' },
          { h3: 'Publicación y captación', text: 'Publicamos y dejamos listo el terreno para amplificar con <a href="/marketing/facebook-instagram-ads-panama/">Instagram Ads</a>, el canal natural de la estética, con las páginas de tratamiento como destino que convierte.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué la valoración es el primer paso y no la venta?',
        paragraphs: [
          'Competir con promociones agresivas atrae al paciente que se va a la próxima oferta: sobre su cara y su cuerpo, nadie quiere lo barato. "Ven, te evalúo y te digo con honestidad qué te conviene" convierte mejor que "reserva tu botox hoy".',
          '<strong>La valoración es donde se construye la confianza que justifica el ticket</strong>, y la web tiene que hacer que pedirla sea tan fácil como reservar una mesa, con un diseño limpio y cuidado: nadie confía su rostro a una clínica cuya web se ve descuidada.',
        ],
      },
      {
        type: 'prose',
        h2: 'Una página por procedimiento: así te encuentra quien ya decidió',
        paragraphs: [
          'El paciente rara vez busca "clínica estética". Busca el procedimiento por su nombre: "ácido hialurónico Panamá", "depilación láser Costa del Este", "criolipólisis precio", "botox arrugas frente". Ya sabe qué quiere y compara dónde hacérselo, y una lista de doce procedimientos en viñetas no le responde.',
          'Cada página explica en qué consiste, cuánto dura la sesión, cuántas se necesitan, qué se siente, qué cuidados hay después, cuánto dura el resultado y desde cuánto sale, con la galería de casos de ese procedimiento. Es el principio de un <a href="/industrias/diseno-web-belleza-spa-panama/">spa o centro de belleza</a>, pero aquí pesa además la credencial médica.',
          '<strong>Cinco procedimientos con página propia rinden más que veinte listados</strong>, y te permiten pautar sobre el que más margen deja.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué rechazan los anuncios de una clínica estética?',
        paragraphs: [
          'Meta y Google tratan la salud y la estética como categorías restringidas. Anuncios con antes y después explícitos, promesas de resultado o textos que señalan una condición física del usuario se rechazan, y una cuenta con rechazos repetidos termina limitada.',
          '<strong>Si tu captación depende solo de la pauta, construyes sobre terreno prestado</strong>: una cuenta restringida deja la agenda vacía de un día para otro. Las páginas por procedimiento y la ficha de Google no dependen de que un revisor apruebe un anuncio.',
          'Las galerías completas, las explicaciones y los precios que la pauta restringe sí caben en tu web, y los anuncios llevan ahí. Lo trabajamos en <a href="/marketing/facebook-instagram-ads-panama/">campañas de Meta</a> junto con el sitio.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace dudar a un paciente de estética',
        intro: 'En un rubro donde el paciente teme al mal resultado, cada una de estas cosas lo empuja a seguir buscando.',
        items: [
          'Fotos de banco de modelos que evidentemente no son pacientes tuyos',
          'Antes y después sin la misma luz, ángulo y distancia: parecen trucados',
          'Cero mención del profesional que aplica: nombre, idoneidad, formación',
          'Ni un rango de precio en ningún procedimiento',
          'Promesas absolutas de resultado, que además espantan al paciente informado',
          'Nada sobre qué pasa si el resultado no es el esperado',
          'Equipos y marcas de tecnología sin especificar, cuando el paciente los busca por nombre',
          'Última publicación de casos con más de un año',
        ],
      },
      {
        type: 'prose',
        h2: '¿Se publican los precios en la web de una clínica estética?',
        paragraphs: [
          'Esconder el precio del todo hace que el paciente asuma que es carísimo o escriba solo para preguntarlo y desaparezca. Lo que funciona es publicar el <strong>desde</strong> por procedimiento y el precio de la valoración inicial; el precio final queda para la consulta, después de evaluar el caso.',
          'Los paquetes de sesiones también rinden publicados, porque el paciente compara el tratamiento completo, no la sesión suelta, y el financiamiento disponible mueve tickets altos más que un descuento. La regla: <strong>si tu equipo la contesta veinte veces por semana por WhatsApp, esa respuesta va en la web.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: valoraciones agendadas y cuántas cierran',
        paragraphs: [
          'La métrica es la <strong>valoración</strong> agendada y qué porcentaje termina en tratamiento. Muchas valoraciones sin cierre indican que llega el paciente fuera de rango, casi siempre porque la web no habla de precio; pocas con cierre alto indican que conviene invertir en visibilidad.',
          'El tercer dato es de qué procedimiento venía cada valoración: con márgenes tan distintos entre procedimientos, decide dónde poner el esfuerzo. Cómo lo planteamos, en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué le pregunta una paciente a ChatGPT antes de elegir una clínica estética?',
        paragraphs: [
          'Un tratamiento estético se investiga con calma, y cada vez más esa investigación empieza en un asistente de IA: «¿qué clínica en Panamá aplica bótox con médico idóneo?», «¿dónde me hago depilación láser en Ciudad de Panamá con buenas reseñas?» o «¿qué clínica en Obarrio hace valoración para rellenos faciales?». La paciente agenda en las que aparecen.',
          'Para que tu clínica esté ahí, la IA necesita una página por procedimiento con el médico responsable y su idoneidad, qué esperar en la recuperación, una ficha de Google Business Profile completa y con reseñas, el mismo nombre, teléfono y dirección en la web, la ficha y los directorios, y respuestas prudentes a esas preguntas escritas en tu sitio. <strong>En salud, la IA busca respaldo antes de mencionar a alguien.</strong>',
          'Nada de esto garantiza que te recomiende, pero sube las probabilidades, y empieza por el SEO. Lo explicamos en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a> y en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una clínica estética?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $1,250, con página por tratamiento, galería de resultados y reserva de valoración. Si sumas un catálogo grande de tratamientos o venta de productos, se cotiza según alcance. Siempre con precio cerrado por escrito.' },
          { q: '¿Pueden manejar el antes y después sin problemas legales?', a: 'Sí, con el marco correcto: usamos solo casos con consentimiento del paciente y evitamos prometer que todos obtendrán el mismo resultado. Mostrar es legítimo; garantizar resultado no lo es. Te ayudamos a montar la galería del lado seguro de esa línea.' },
          { q: '¿El paciente puede reservar la valoración en línea?', a: 'Sí. Integramos un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> para que agende su valoración según tu disponibilidad real, con recordatorio automático que reduce las ausencias, que en clínicas cuestan caro.' },
          { q: '¿Qué diferencia hay con la web de un spa?', a: 'El spa vende bienestar y se elige por experiencia y portafolio; la clínica estética vende un procedimiento médico y se elige por resultados, credenciales y seguridad. La estructura, el tono y las pruebas de confianza cambian de raíz, aunque ambas reserven en línea.' },
          { q: '¿Sirve para un médico estético que trabaja solo, no una clínica grande?', a: 'Sí, y a menudo rinde más. Un especialista que posiciona bien dos o tres tratamientos y muestra sus propios resultados compite de igual a igual con clínicas grandes en esas búsquedas, apoyado en su nombre y su mano.' },
                  { q: '¿Puedo publicar fotos de antes y después de mis pacientes?', a: 'Con consentimiento por escrito y específico para publicación en internet, distinto del consentimiento del tratamiento. Conviene que lo redacte tu asesor legal. Dejamos la galería preparada para retirar un caso en cualquier momento si el paciente cambia de opinión.' },
          { q: '¿Por qué me rechazan los anuncios de estética?', a: 'Meta y Google tratan salud y estética como categoría restringida: antes y después explícitos, promesas de resultado o textos que señalan una condición del usuario se rechazan. Por eso conviene no depender solo de la pauta: el tráfico orgánico de tu web no se rechaza.' },
          { q: '¿Publico precios o los dejo para la consulta?', a: 'Un "desde" por procedimiento y el precio de la valoración inicial. Filtra al que nunca iba a agendar, le da seguridad al que sí, y deja el precio final donde debe estar: después de evaluar el caso.' },
          { q: '¿Conviene una página por procedimiento?', a: 'Sí, al menos para los cuatro o cinco de mayor margen. El paciente de estética busca el procedimiento por su nombre, no la clínica, y una lista de viñetas no compite en esas búsquedas.' },
          { q: '¿Cuándo NO conviene invertir en la web de la clínica?', a: 'Si tu agenda está llena tres semanas por delante, primero resuelve capacidad. Traer más consultas a una agenda saturada solo genera pacientes molestos. Tampoco conviene si no tienes material propio: en estética, fotos genéricas de banco de imágenes le dicen al paciente que no tienes resultados que mostrar.' },
          { q: '¿Cómo se paga y qué incluye el precio de la web de la clínica?', a: 'El pago va en tres partes: 50% para arrancar, 30% cuando ya viste el sitio funcionando en un demo en línea y 20% para publicarlo en tu dominio. Incluye diseño, contenido estructurado por tratamiento y 30 días de garantía por fallas técnicas. Aparte y recurrente: infraestructura desde $350 al año y mantenimiento desde $99 al mes. Los precios no incluyen ITBMS (7%).' },
          { q: '¿Puede ChatGPT recomendar mi clínica estética?', a: 'Puede, si encuentra información clara y verificable: procedimientos con página propia, médicos con su idoneidad, ficha de Google y reseñas. Nadie puede garantizar que te nombre, pero esa base sube las probabilidades. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a>.' },
          { q: '¿Qué dudas de pacientes conviene responder en la web para aparecer en la IA?', a: 'Las de antes de la valoración: cuántas sesiones suele llevar un tratamiento, cómo es la recuperación, quién lo aplica. Respondidas con prudencia médica y sin prometer resultados, le dan al asistente información confiable para mencionar tu clínica.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-clinicas-esteticas-panama', label: 'Guía: diseño web para clínicas estéticas' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Sistemas de Reservas' },
          { slug: 'industrias/diseno-web-belleza-spa-panama', label: 'Web para Belleza y Spas' },
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Instagram Ads' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu clínica estética', wa: 'Hola, quiero cotizar la web de una clínica estética con reserva de valoración.' },
  },

  /* ---------- VETERINARIAS ---------- */
  {
    slug: 'industrias/diseno-web-veterinarias-panama',
    parent,
    title: 'Diseño Web para Veterinarias en Panamá | Citas y Urgencias',
    description: 'Diseño web para veterinarias y clínicas de mascotas en Panamá: urgencias visibles, citas online y recordatorios que traen de vuelta al cliente.',
    h1: 'Diseño web para veterinarias',
    breadcrumb: 'Veterinarias',
    heroImage: { src: '/images/industrias/diseno-web-veterinarias-panama.jpg', alt: 'Collar de mascota con placa redonda, en cromo plateado, render 3D sobre fondo gris claro' },
    service: { type: 'Diseño web para veterinarias' },
    lead: [
      'Para tu cliente la mascota no es un animal: es de la familia. Elige veterinaria como elegiría pediatra, y la web es donde decide si te confía a su perro o a su gato.',
      'Elemento Web, en Ciudad de Panamá, hace diseño web para veterinarias en Panamá: urgencias y horario visibles sin hacer scroll, cita en línea según tu disponibilidad real, recordatorios automáticos de vacunas por WhatsApp y una página por servicio (vacunación, esterilización, peluquería). El formato típico es una web corporativa desde $1,250; una landing, desde $550.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: '¿Qué necesita la web de una veterinaria en Panamá?',
        intro: 'Mitad respuesta rápida para la urgencia, mitad relación de años con el cliente de vacunas y controles.',
        items: [
          'Servicios claros por área (consulta, cirugía, vacunación, peluquería, laboratorio)',
          'Cita en línea según la disponibilidad real de la clínica',
          'Horario, ubicación y si atienden urgencias, visible de inmediato',
          'Recordatorios de vacunas y controles para el cliente de años',
          'WhatsApp directo para la consulta angustiada de "¿la traigo ya?"',
          'Perfil del equipo veterinario que transmita cariño y capacidad',
          'Contenido útil de cuidado (desparasitación, alimentación, síntomas de alarma)',
          'Ficha por servicio especial si ofreces algo distintivo (exóticos, hospitalización)',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo elige un dueño a la veterinaria de su mascota?',
        paragraphs: [
          'Quien busca veterinaria busca a alguien en quien confiar a un miembro de su familia. El tono no puede ser frío como el de un taller: las fotos del equipo real, la forma de hablar de los servicios y los colores dicen "aquí van a cuidar a tu perro como tú lo cuidas" antes que cualquier texto.',
          'La web atiende además dos momentos distintos: la urgencia, que se resuelve con teléfono, horario y ubicación inmediatos, y la relación de años, que se sostiene con cita en línea y recordatorios. Para el primero el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> es clave: el que busca "veterinaria cerca de mí" tiene que encontrarte a ti.',
        ],
      },
      {
        type: 'cards',
        h2: 'A quién atiende la web de tu veterinaria',
        intro: 'Distintos dueños llegan con necesidades distintas. La estructura correcta le habla a cada uno en su momento.',
        items: [
          { h3: 'El dueño con una urgencia', text: 'Su mascota está mal ahora. No lee: busca teléfono, horario, si atienden urgencias y cómo llegar ya. Se gana con información inmediata y un WhatsApp que responda rápido.' },
          { h3: 'El cliente de siempre', text: 'Vuelve cada año para vacunas y controles. Le importa reservar cómodo y que le recuerden cuándo toca. Se fideliza con la cita en línea y los recordatorios automáticos.', link: { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Citas en línea' } },
          { h3: 'El que adoptó o cambió de veterinaria', text: 'Estrena mascota o busca un mejor trato que en su clínica anterior. Investiga servicios, equipo y opiniones antes de decidir. Se cierra con una web que transmite cariño y capacidad.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu web de veterinaria',
        items: [
          { h3: 'Mapa de servicios y urgencias', text: 'Ordenamos tus servicios (consulta, cirugía, vacunación, peluquería, laboratorio) y decidimos qué va primero. Si atiendes urgencias, eso sube a lo más visible, porque es la búsqueda que no espera.' },
          { h3: 'Cita en línea y recordatorios', text: 'Conectamos el <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de citas</a> a tu disponibilidad real y dejamos listos los recordatorios de vacunas y controles, que traen de vuelta al cliente sin que tengas que perseguirlo.' },
          { h3: 'Publicación y visibilidad local', text: 'Publicamos y afinamos tu presencia en <a href="/crecimiento/seo-local-google-maps-panama/">Google Maps</a>, para que quien busque "veterinaria cerca de mí" en tu zona te encuentre a ti, con horario y ubicación correctos.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué los recordatorios de vacunas traen de vuelta al cliente?',
        paragraphs: [
          'Un cachorro que llega a su primera vacuna debería volver toda su vida para refuerzos, desparasitación y controles, pero el dueño ocupado olvida cuándo toca. El recordatorio automático por correo o WhatsApp le avisa la fecha y le deja el enlace para reservar, sin que tu recepción llame uno por uno.',
          '<strong>Un cliente al que le recuerdas la vacuna no se va a otra clínica.</strong> Cada mascota registrada es una relación que se mantiene sola, en lugar de depender del cuaderno y del teléfono que nadie contesta a mediodía.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué debe mostrar la web de una veterinaria de urgencias?',
        paragraphs: [
          'El cliente para toda la vida se gana un domingo por la noche, con un perro que no para de vomitar y un dueño buscando "veterinaria 24 horas Panamá" o "veterinaria de urgencia cerca". En ese momento nadie lee: se llama, y el que contesta se queda con el cliente.',
          'Lo primero es lo aburrido: teléfono visible sin hacer scroll y tocable desde el celular, horario de urgencias arriba y no en el pie, carga rápida, y una ficha de <a href="/crecimiento/seo-local-google-maps-panama/">Google Business Profile</a> que diga la verdad sobre si abres domingo.',
          '<strong>Y si no atiendes 24 horas, dilo igual de claro.</strong> El dueño que llega de madrugada y encuentra una web que no lo aclara se lleva una mala experiencia y una reseña; el que lo lee y va a otro lado vuelve el lunes para la consulta normal.',
        ],
      },
      {
        type: 'prose',
        h2: 'Una página por servicio, porque no es lo mismo vacunar que operar',
        paragraphs: [
          'Consulta, vacunación, esterilización, cirugía, hospitalización, peluquería, alimento y a veces guardería: cada servicio lo busca una persona distinta. Quien busca "esterilización de gata precio" quiere el costo y cuánto se queda internada; "peluquería canina", fotos y si atienden razas grandes; "vacunas cachorro", el esquema y en qué mes toca cada una.',
          'Una página por servicio compite por su propia búsqueda. La peluquería y el alimento son puertas de entrada baratas: el dueño llega por un baño y termina haciendo las consultas ahí. Y el esquema de vacunación con las edades trae tráfico recurrente, porque el dueño primerizo lo busca varias veces en los primeros meses.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que hace que un dueño no lleve a su mascota contigo',
        intro: 'Cosas encontradas en webs de veterinarias reales. En un rubro donde el cliente decide con el corazón, cada una pesa.',
        items: [
          'No queda claro si se atienden urgencias ni en qué horario',
          'Teléfono que no se puede tocar para llamar desde el celular',
          'Fotos de banco de perritos que nunca pisaron tu clínica',
          'Sin mención de los veterinarios: nombre, idoneidad, años de práctica',
          'Nada sobre qué animales se atienden (exóticos, aves, grandes)',
          'Cero información de precios, ni siquiera de la consulta',
          'Ninguna foto del área de cirugía ni de hospitalización',
          'Sin información de cómo llegar ni dónde estacionar',
        ],
      },
      {
        type: 'prose',
        h2: 'El expediente es de la mascota, pero los datos son del dueño',
        paragraphs: [
          'La web recoge nombre, teléfono y dirección del dueño, a veces datos de pago y el historial de la mascota. Esos datos personales caen bajo la <strong>Ley 81 de 2019 de Protección de Datos Personales</strong>: sitio en HTTPS, formulario que explique qué se hace con lo que se escribe y nada que termine en un correo personal.',
          'El caso más común del rubro es el WhatsApp de la clínica en el teléfono personal de quien atiende, con años de conversaciones, fotos de heridas y datos de clientes. Un número de empresa con varios usuarios evita perder ese historial cuando la persona se va y permite que otro conteste mientras ella está en consulta. <strong>El texto legal lo revisa tu asesor.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: consultas agendadas y quién vuelve',
        paragraphs: [
          'El número clave es <strong>cuántos clientes vuelven</strong>: qué porcentaje de clientes nuevos regresó en los seis meses siguientes. Además, citas agendadas por la web, conversaciones de WhatsApp y de qué servicio venía cada una, con las urgencias separadas del resto.',
          'Si la recurrencia es baja, casi nunca es por mal servicio: nadie le avisó al dueño que tocaba la vacuna, y eso se arregla con recordatorios automáticos, no con publicidad. El detalle está en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué le pregunta un dueño de mascota a ChatGPT antes de escoger veterinaria?',
        paragraphs: [
          'Con el perro enfermo o el gato recién adoptado, mucha gente le pregunta a un asistente de IA antes de llamar: «¿qué veterinaria en Condado del Rey atiende urgencias de noche?», «¿dónde vacunan a un cachorro en Ciudad de Panamá un sábado?» o «¿qué clínica veterinaria en Panamá atiende conejos y aves?». La respuesta nombra pocas clínicas, y el dueño va a la primera que le queda cerca.',
          'Para estar en esa respuesta, la IA tiene que encontrar una página por servicio, las especies que atiendes, el horario de urgencias claro, una ficha de Google Business Profile completa y con reseñas, el mismo nombre, teléfono y dirección en la web, la ficha y los directorios, y respuestas a esas preguntas escritas en tu sitio. <strong>Lo que no está publicado, la IA no lo puede afirmar.</strong>',
          'No hay garantía de que te recomiende, pero esa base sube las probabilidades, y es el mismo SEO que te pone en Google Maps. Lo detallamos en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a> y en <a href="/crecimiento/seo-local-google-maps-panama/">SEO local y Google Maps</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la web de una veterinaria?', a: 'El formato típico es una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa</a> desde $1,250, con servicios, equipo y cita en línea. Si es una clínica pequeña que solo necesita presencia y captar por urgencia, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing</a> desde $550 puede bastar. Siempre con cotización cerrada por escrito.' },
          { q: '¿El cliente puede pedir cita en línea?', a: 'Sí. Integramos un <a href="/funcionalidades/sistemas-reservas-citas-online-panama/">sistema de reservas</a> conectado a tu disponibilidad real, para consulta, peluquería o control. El dueño agenda sin llamar y tú reduces las llamadas repetidas a la recepción.' },
          { q: '¿Se pueden enviar recordatorios de vacunas?', a: 'Sí, es una de las funciones que más valor da. Configuramos recordatorios automáticos de vacunas y controles por correo o WhatsApp, para que el dueño vuelva a tiempo y tú no pierdas la continuidad del cuidado.' },
          { q: '¿Cómo me encuentra quien busca una veterinaria urgente cerca?', a: 'Con SEO local. Optimizamos tu <a href="/crecimiento/seo-local-google-maps-panama/">ficha de Google Maps</a> y la web para que aparezcas en "veterinaria cerca de mí" en tu zona, con horario, si atiendes urgencias y cómo llegar, que es lo que ese dueño necesita al instante.' },
          { q: '¿Sirve si además vendo alimentos y accesorios?', a: 'Sí. Podemos sumar un catálogo o una <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> para alimentos, medicamentos y accesorios, combinada con la parte de servicios clínicos. Muchas veterinarias fidelizan justo por ser también el punto de compra de confianza.' },
                  { q: '¿Debo publicar si atiendo urgencias 24 horas?', a: 'Sí, y con la misma claridad si NO las atiendes. El dueño que llega de madrugada a una web que no lo aclara se lleva una mala experiencia y una reseña. El que lo lee y va a otro lado vuelve el lunes para la consulta normal.' },
          { q: '¿Conviene una página por servicio o basta con una lista?', a: 'Una por servicio para los que más consulta generan. "Esterilización de gata", "vacunas cachorro" y "peluquería canina" son tres búsquedas de tres personas distintas, y una lista de viñetas no compite en ninguna.' },
          { q: '¿Qué hago con el WhatsApp de la clínica?', a: 'Sacarlo del celular personal de quien atiende. Un número de empresa con varios usuarios evita perder el historial cuando esa persona se va, y permite que otro conteste mientras ella está en consulta.' },
          { q: '¿Publico precios de consulta y procedimientos?', a: 'Al menos el de la consulta y un "desde" en los procedimientos más buscados, como esterilización. Es la pregunta que más llega por WhatsApp, y publicarla filtra al que nunca iba a agendar y te ahorra horas de equipo.' },
          { q: '¿Cuándo NO conviene invertir en la web de la veterinaria?', a: 'Si tu clientela es del barrio y llega caminando, tu prioridad es la ficha de Google Business Profile, que es gratis, no el sitio. La web se paga cuando vendes servicios que la gente busca y compara antes de ir: cirugía, hospedaje de mascotas, planes de vacunación o urgencias 24 horas.' },
          { q: '¿Puede ChatGPT recomendar mi veterinaria?', a: 'Puede, si encuentra datos claros: servicios, especies que atiendes, horario, ubicación y reseñas en Google, todo consistente entre tu web y tu ficha. Nadie puede asegurar que te nombre, pero esa base sube las probabilidades. Más en <a href="/crecimiento/posicionamiento-en-chatgpt-e-ia-panama/">posicionamiento en ChatGPT e IA</a>.' },
          { q: '¿Publicar el horario de urgencias ayuda a salir en la IA?', a: 'Sí. Cuando alguien pregunta por una veterinaria abierta de noche, el asistente solo puede nombrar las que publican ese horario de forma clara en su web y en su ficha de Google. Si el horario cambia, hay que actualizarlo en los dos lugares.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'blog/diseno-web-para-veterinarias-panama', label: 'Guía: diseño web para veterinarias' },
          { slug: 'funcionalidades/sistemas-reservas-citas-online-panama', label: 'Citas en Línea' },
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local y Google Maps' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' },
        ],
      },
    ],
    cta: { h2: 'Cotiza la web de tu veterinaria', wa: 'Hola, quiero cotizar la web de una veterinaria con citas en línea y recordatorios.' },
  },
];
