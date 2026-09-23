/* BLOG — Lote 22: guía long-form sobre diseño web para logística y transporte
   en Panamá. PageData con parent { slug: 'blog' }; el listado /blog la recoge
   por fecha y categoría. Enlaces internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog22: PageData[] = [
  {
    slug: 'blog/diseno-web-para-logistica-transporte-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para logística en Panamá: qué convence a un B2B',
    description: 'Qué debe tener la web de una empresa de logística en Panamá: credenciales verificables, cotizador de envío y cobertura de rutas clara, no adjetivos.',
    h1: 'Diseño web para logística y transporte en Panamá: qué de verdad convence a un comprador B2B',
    breadcrumb: 'Diseño web para logística y transporte',
    category: 'Diseño web',
    date: '2026-08-25',
    heroImage: {
      src: '/images/blog/diseno-web-para-logistica-transporte-panama.jpg',
      alt: 'Interior de una bodega logística moderna con contenedores de carga organizados por color y camiones de reparto estacionados bajo luz natural',
    },
    lead: [
      'Un gerente de compras que necesita mover carga de Colón a David, o una empresa que busca transporte de última milla en la ciudad, escribe "transporte de carga Panamá" o "empresa de logística Panamá" con una decisión que tomar antes de fin de semana. Abre cuatro o cinco resultados, los compara en un par de minutos y descarta los que no le dan nada concreto en los primeros segundos. No está buscando quién dice ser "el líder en soluciones logísticas": está buscando quién puede probar que no le va a fallar la carga.',
      'La mayoría de las webs de transporte y logística en Panamá pierden esa decisión sin darse cuenta: hablan en superlativos, mezclan todos los servicios en una sola página y no dejan cotizar sin escribir primero. En esta guía repasamos qué credenciales debe mostrar la web para pasar el primer filtro B2B, cómo diseñar un cotizador que reemplace el ida y vuelta de correos, por qué la cobertura de rutas se revisa antes que el precio, y cuándo, con honestidad, todavía no conviene invertir en ella.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'Por qué la confianza en logística se construye con evidencia, no con adjetivos',
        paragraphs: [
          'Nadie contrata transporte de carga como quien elige un restaurante por las fotos. La persona que llega a la web de una empresa de logística está evaluando a quién le va a confiar mercancía que probablemente vale más que el flete mismo, y muchas veces tiene que justificar esa elección ante su jefe o ante finanzas. Por eso no decide por diseño bonito: decide por señales verificables de que la operación es real y responde si algo sale mal.',
          'Ahí está la diferencia con la mayoría de los negocios. Un restaurante compite con fotos que dan hambre; una tienda compite con precio y disponibilidad. Una empresa de transporte compite con evidencia: seguro de carga vigente, certificaciones del sector, flota real, cobertura de rutas nombrada una por una, y clientes que lo confirmen. Quitar cualquiera de esas señales no simplifica la web: la hace ver como una opción informal más, justo lo que un comprador corporativo evita.',
          'Esto no es un detalle de diseño, es la estrategia completa. Antes de elegir plantilla o colores hay que decidir qué credenciales va a mostrar la web y en qué orden, porque de eso depende si el comprador te pone en la lista corta o sigue buscando. Nuestra <a href="/industrias/diseno-web-logistica-transporte-panama/">página de diseño web para logística y transporte</a> entra en el detalle de cómo montamos esa evidencia para una operación en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que la web de una empresa de logística y transporte en Panamá debe tener sí o sí',
        intro: 'Si tu web —o la de tu operación— no muestra esto, no importa qué tan bien se vea: le falta lo que un comprador B2B revisa antes de escribir.',
        items: [
          'RUC, razón social y años de operación visibles, no escondidos en el pie de página',
          'Cobertura geográfica clara, con las rutas o zonas que cubres nombradas una por una',
          'Flota y capacidad de carga reales, con fotos propias, no íconos genéricos',
          'Seguro de carga: si está incluido o es opcional, qué cubre y hasta qué monto',
          'Certificaciones y licencias del sector, con número y vigencia visibles',
          'Un cotizador o formulario que pida origen, destino y tipo de carga antes de pedir el teléfono',
          'Testimonios de empresas clientes que se puedan verificar, no frases sin firma',
          'Un plazo de respuesta publicado —"cotizamos en menos de 24 horas hábiles"— y cumplido',
        ],
      },
      {
        type: 'steps',
        h2: 'Un cotizador de envío en vez de un formulario genérico de contacto',
        intro: 'El cuello de botella de casi toda operación de transporte no es conseguir consultas: es el ida y vuelta de correos preguntando lo que faltó. Un cotizador bien diseñado pide justo lo necesario para dar un estimado.',
        items: [
          { h3: '1. Origen y destino', text: 'Lo primero, porque de ahí sale la mitad del cálculo. Si cubres varias rutas o países, una lista o un mapa clicable evita que alguien escriba a mano un destino que ni siquiera cubres.' },
          { h3: '2. Tipo de carga y modo', text: 'Marítimo, aéreo, terrestre o multimodal, y si es carga general, refrigerada o peligrosa. Cada modo tiene un cálculo distinto, y preguntarlo de entrada evita cotizar a ciegas.' },
          { h3: '3. Peso, volumen o contenedor', text: 'Contenedor completo o carga suelta, y peso o dimensiones aproximadas. Con eso —no antes— se puede dar un número real en vez de un rango que no compromete a nadie.' },
          { h3: '4. Fecha estimada e incoterm si aplica', text: 'Cuándo necesita moverse la carga y, si el cliente ya lo sabe, en qué incoterm. Quien no lo sepa, que pueda dejarlo en blanco: no es el momento de exigir jerga de comercio exterior a un importador pequeño.' },
          { h3: '5. Cómo prefiere que lo contacten', text: 'Correo, llamada o WhatsApp. Dejar elegir el canal sube la tasa de respuesta, porque quien compra transporte para su empresa no revisa todos los canales con la misma prisa.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cobertura geográfica: lo primero que revisa un comprador antes de escribir',
        paragraphs: [
          'Antes de llenar cualquier formulario, quien busca transporte quiere saber una cosa muy simple: si tú cubres su ruta. Panamá funciona como bisagra regional —Zona Libre de Colón, puerto y tránsito hacia Centroamérica y el Caribe—, y esa posición es una ventaja competitiva real que casi ninguna web comunica con claridad. Decir "cobertura nacional e internacional" no dice nada; nombrar las rutas, las ciudades y los países sí.',
          'Un mapa simple con las rutas marcadas, o al menos una lista ordenada por zona —área metropolitana, interior, fronteras, marítimo internacional—, resuelve en diez segundos lo que un párrafo de texto no resuelve en dos minutos. Es información que el comprador va a buscar de todos modos; la diferencia es si la encuentra en tu web o en la de otro.',
          'Y conviene mostrarlo con evidencia, no solo con la lista: fotos reales de bodega, patio y flota, y casos concretos por tipo de operación (importación, mudanza internacional, carga refrigerada, última milla). Puedes ver cómo lo organizamos en la práctica en nuestro <a href="/portafolio/">portafolio</a>, con proyectos reales de mudanzas y carga internacional en Panamá.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie en logística compite diciendo que es "el más rápido" o "el más confiable".',
        strong: 'Compite mostrando el seguro vigente, la ruta exacta y el cliente que ya lo comprobó.',
      },
      {
        type: 'prose',
        h2: 'SEO por ruta y tipo de servicio: cada búsqueda es distinta',
        paragraphs: [
          'Nadie escribe en Google "empresa de logística en Panamá" cuando tiene una carga que mover esta semana. Escribe "transporte de carga Colón a David", "mudanza internacional desde Panamá" o "carga refrigerada Panamá ciudad". Son búsquedas distintas, con una urgencia detrás, y Google las trata como preguntas distintas.',
          'Si todos tus servicios viven apretados en una sola página de "Servicios", le pides a esa página que responda cinco preguntas a la vez, y normalmente no gana ninguna. Con una página por tipo de carga o por ruta principal —el problema en el idioma del cliente, la cobertura exacta y el cotizador como llamado a la acción— compites de verdad en las búsquedas donde ese comprador ya te está buscando.',
          'No hay atajo honesto: nadie garantiza el primer lugar en Google, y quien lo prometa está exagerando. Lo que sí es cierto es que el contenido específico, sostenido en el tiempo, tiene muchas más posibilidades de aparecer que una sola página genérica. Lo explicamos con más detalle en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta la web de una empresa de logística en Panamá',
        paragraphs: [
          'Depende de cuántos servicios vas a mostrar y de si necesitas cotizador o portal de seguimiento. Una <a href="/servicios/diseno-web-corporativo-panama/">Página PYME</a> de 8 a 12 páginas —una por tipo de servicio o ruta principal, con cotizador y blog— parte de $950 y es el punto de partida recomendado para la mayoría de las operaciones de transporte y logística. Una landing enfocada, si solo necesitas presencia y contacto directo, parte de $550. Los precios son en dólares y no incluyen el 7% de ITBMS.',
          'Un portal de seguimiento de envíos o una integración con tu sistema de operaciones ya no es un paquete cerrado: es desarrollo a medida desde $2,900, según qué tan a fondo se integre con lo que ya usas. Un e-commerce completo (desde $1,500) casi nunca aplica en este rubro, salvo que además de transportar vendas insumos o repuestos con carrito y pago en línea.',
          'A esto se suma la infraestructura —Hosting Compartido $225/año, Cloud $350/año o VPS Dedicado $550/año, todos con dominio y SSL incluidos— y el mantenimiento mensual, con tres niveles: Básico $59, Prioritario $99 y Empresarial $189. Si el cotizador o el rastreo son parte de tu operación diaria, el plan Empresarial está pensado justo para negocios que no se pueden dar el lujo de una caída; si tu web es más una carta de presentación, el Básico cubre lo esencial. El detalle completo está en nuestra guía de <a href="/crecimiento/hosting-infraestructura-panama/">hosting e infraestructura</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir todavía en la web de tu operación de transporte',
        paragraphs: [
          'No toda empresa de transporte necesita este aparato de confianza B2B, y decirlo con honestidad ahorra dinero mal gastado. Si trabajas en exclusiva para dos o tres clientes fijos, con contrato renovado cada año, y no tienes ninguna intención de captar carga nueva por tu cuenta, gran parte de lo anterior —cotizador público, SEO por ruta, cobertura detallada— es una inversión que no vas a usar. Ese cliente ya te conoce; no te está comparando en Google.',
          'En ese caso rinde más algo simple: una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 con tus datos, tu RUC, tus certificaciones y un WhatsApp directo para lo administrativo, sin pretender competir por tráfico frío que no necesitas.',
          'Donde sí se justifica el paquete completo —la Página PYME desde $950, con cotizador, cobertura y una página por servicio— es cuando quieres dejar de depender solo de esos dos o tres contratos, cuando manejas rutas o modos que compiten por búsquedas distintas, o cuando ya perdiste una cotización frente a un competidor que simplemente se veía más serio en Google.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para logística y transporte',
        items: [
          { q: '¿De verdad hace falta un cotizador en la web, o basta con un formulario de contacto?', a: 'Si vives de cotizar carga, sí hace falta. Un formulario genérico de "nombre, correo, mensaje" obliga a un ida y vuelta para pedir origen, destino y tipo de carga, y en ese tiempo el cliente ya cotizó con otros dos. Un cotizador que pida esos datos de una vez agiliza tu respuesta y filtra mejor lo que realmente puedes atender.' },
          { q: '¿Necesito un portal de rastreo en tiempo real con GPS?', a: 'No necesariamente. Basta con que el cliente entre con un número de referencia y vea el estado y una fecha estimada. Eso elimina buena parte de las consultas de "¿dónde está mi carga?" sin exigir una integración compleja; si más adelante quieres GPS en vivo, es un desarrollo aparte.' },
          { q: '¿Cuánto cuesta la web de una empresa de logística en Panamá?', a: 'Para la mayoría, una Página PYME de 8 a 12 páginas con cotizador y una página por servicio parte de $950. Una landing simple, si solo necesitas presencia y contacto, parte de $550. Un portal de seguimiento o una integración con tu sistema de operaciones es desarrollo a medida desde $2,900. Precios en dólares, sin el 7% de ITBMS.' },
          { q: '¿Vale la pena mostrar el seguro de carga y las certificaciones?', a: 'Es de lo que más pesa en la decisión B2B. Casi ningún operador panameño explica en su web si el seguro está incluido, qué cubre y hasta qué monto, y es justo lo que el comprador pregunta en la primera llamada. Publicarlo te adelanta antes de que suene el teléfono.' },
          { q: '¿Cómo sé qué plan de mantenimiento me conviene?', a: 'Depende de qué tan crítico sea que el sitio no se caiga. Si el cotizador o el rastreo son parte de tu operación diaria, el plan Empresarial ($189/mes) está pensado para eso. Si tu web es más una carta de presentación, el plan Básico ($59/mes) cubre lo esencial: seguridad, respaldos y monitoreo.' },
          { q: '¿Cuándo NO conviene invertir en la web de mi empresa de transporte?', a: 'Si trabajas en exclusiva para dos o tres clientes con contrato fijo y no buscas carga nueva, el aparato completo de cotizador, SEO por ruta y cobertura detallada es gasto que no vas a aprovechar. Una presencia simple con tus datos y certificaciones suele bastar.' },
          { q: '¿Sirve esto para transporte de pasajeros o solo para carga?', a: 'Sirve para ambos, ajustando el énfasis. En transporte de personal o turístico el peso va a rutas, flota, seguros de pasajeros y contratos corporativos; la lógica de mostrar formalidad y capacidad verificable es la misma que para carga.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-logistica-transporte-panama', label: 'Diseño web para logística y transporte' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño Web Corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'industrias/diseno-web-importadoras-distribuidoras-panama', label: 'Diseño web para importadoras' },
          { slug: 'crecimiento/hosting-infraestructura-panama', label: 'Hosting e Infraestructura' },
          { slug: 'portafolio', label: 'Portafolio' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que filtra cotizaciones y muestra evidencia real de tu operación',
      wa: 'Hola, quiero una web para mi empresa de logística o transporte en Panamá. ¿Me asesoran?',
    },
  },
];
