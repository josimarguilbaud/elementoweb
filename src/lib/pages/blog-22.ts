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
      'El diseño web para logística y transporte en Panamá convence a un comprador B2B con evidencia, no con adjetivos: RUC y años de operación visibles, seguro de carga y certificaciones con vigencia, rutas nombradas una por una, flota real y un cotizador que pida origen, destino y tipo de carga. Así lo construimos en Elemento Web, Ciudad de Panamá.',
      'El gerente de compras que busca "transporte de carga Panamá" abre cuatro o cinco resultados y descarta en segundos los que no le dan nada concreto. Esta guía explica qué mostrar, cómo diseñar el cotizador, cuánto cuesta y cuándo todavía no conviene invertir.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué en logística la confianza se construye con evidencia?',
        paragraphs: [
          'Quien llega a la web de una empresa de logística va a confiarle mercancía que suele valer más que el flete, y muchas veces tiene que justificar la elección ante su jefe o ante finanzas. No decide por diseño: decide por señales verificables de que la operación es real y responde si algo sale mal. Quitar cualquiera de esas señales no simplifica la web: la hace ver como una opción informal más.',
          'Por eso, antes de elegir plantilla o colores, hay que decidir qué credenciales mostrará la web y en qué orden. Nuestra <a href="/industrias/diseno-web-logistica-transporte-panama/">página de diseño web para logística y transporte</a> detalla cómo montamos esa evidencia para una operación en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe tener el diseño web para logística y transporte?',
        intro: 'Lo que un comprador B2B revisa antes de escribir, por bien que se vea la web.',
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
        h2: '¿Qué debe pedir un cotizador de envío en la web?',
        intro: 'El cuello de botella no es conseguir consultas: es el ida y vuelta de correos preguntando lo que faltó. Un cotizador pide justo lo necesario para un estimado.',
        items: [
          { h3: '1. Origen y destino', text: 'De ahí sale la mitad del cálculo. Si cubres varias rutas o países, una lista o un mapa clicable evita que alguien escriba un destino que no cubres.' },
          { h3: '2. Tipo de carga y modo', text: 'Marítimo, aéreo, terrestre o multimodal, y si es carga general, refrigerada o peligrosa. Cada modo tiene un cálculo distinto.' },
          { h3: '3. Peso, volumen o contenedor', text: 'Contenedor completo o carga suelta, y peso o dimensiones aproximadas. Con eso se puede dar un número real en vez de un rango que no compromete a nadie.' },
          { h3: '4. Fecha estimada e incoterm si aplica', text: 'Cuándo debe moverse la carga y, si el cliente lo sabe, en qué incoterm. Que se pueda dejar en blanco: no hay que exigir jerga de comercio exterior a un importador pequeño.' },
          { h3: '5. Cómo prefiere que lo contacten', text: 'Correo, llamada o WhatsApp. Dejar elegir el canal sube la tasa de respuesta.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo mostrar la cobertura de rutas en la web?',
        paragraphs: [
          'Nombrándolas. Antes de llenar cualquier formulario, el comprador quiere saber si cubres su ruta. Panamá es bisagra regional —Zona Libre de Colón, puerto y tránsito hacia Centroamérica y el Caribe—, una ventaja que casi ninguna web comunica: "cobertura nacional e internacional" no dice nada; nombrar rutas, ciudades y países sí. Un mapa con las rutas o una lista por zona (área metropolitana, interior, fronteras, marítimo internacional) lo resuelve en diez segundos.',
          'Acompáñalo con fotos reales de bodega, patio y flota, y casos por tipo de operación: importación, mudanza internacional, carga refrigerada, última milla. Puedes ver cómo lo organizamos en nuestro <a href="/portafolio/">portafolio</a>, con proyectos de mudanzas y carga internacional en Panamá.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie en logística compite diciendo que es "el más rápido" o "el más confiable".',
        strong: 'Compite mostrando el seguro vigente, la ruta exacta y el cliente que ya lo comprobó.',
      },
      {
        type: 'prose',
        h2: '¿Por qué hacer una página por ruta o tipo de servicio?',
        paragraphs: [
          'Quien tiene una carga que mover esta semana no busca "empresa de logística en Panamá": busca "transporte de carga Colón a David", "mudanza internacional desde Panamá" o "carga refrigerada Panamá ciudad". Google las trata como preguntas distintas, y una sola página de "Servicios" que intenta responder cinco a la vez normalmente no gana ninguna.',
          'Una página por tipo de carga o ruta principal —el problema en el idioma del cliente, la cobertura exacta y el cotizador— compite en las búsquedas donde ese comprador ya te busca. Nadie puede garantizar el primer lugar, pero el contenido específico y sostenido tiene muchas más posibilidades que una página genérica. Lo explicamos en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de una empresa de logística en Panamá?',
        paragraphs: [
          'Una <a href="/servicios/diseno-web-corporativo-panama/">Web empresarial</a> de hasta 6 páginas —una por servicio o ruta principal, con cotizador y blog— parte de $1,250 y es el punto de partida recomendado para la mayoría de las operaciones. Una landing enfocada, solo con presencia y contacto directo, parte de $550. Un portal de seguimiento de envíos o una integración con tu sistema de operaciones es desarrollo a medida desde $2,900. Un e-commerce (desde $1,950) solo aplica si además vendes insumos o repuestos con carrito y pago en línea.',
          'Se suma la infraestructura —Hosting Compartido $225/año, Cloud $350/año o VPS Dedicado $550/año, con dominio y SSL incluidos— y el mantenimiento mensual: Básico $99, Prioritario $169 y Empresarial $319. Si el cotizador o el rastreo son parte de tu operación diaria, conviene el Empresarial; si la web es una carta de presentación, el Básico cubre lo esencial. Precios en dólares, sin el 7% de ITBMS. Más detalle en nuestra guía de <a href="/crecimiento/hosting-infraestructura-panama/">hosting e infraestructura</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de tu operación de transporte?',
        paragraphs: [
          'Si trabajas en exclusiva para dos o tres clientes fijos con contrato anual y no buscas carga nueva, el cotizador público, el SEO por ruta y la cobertura detallada son una inversión que no usarás: ese cliente no te compara en Google. Ahí rinde más una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> desde $550 con tus datos, RUC, certificaciones y un WhatsApp directo para lo administrativo.',
          'La Web empresarial desde $1,250, con cotizador, cobertura y una página por servicio, se justifica cuando quieres dejar de depender de esos contratos, cuando manejas rutas o modos que compiten por búsquedas distintas, o cuando ya perdiste una cotización frente a un competidor que se veía más serio en Google.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para logística y transporte',
        items: [
          { q: '¿De verdad hace falta un cotizador en la web, o basta con un formulario de contacto?', a: 'Si vives de cotizar carga, sí hace falta. Un formulario genérico de "nombre, correo, mensaje" obliga a un ida y vuelta para pedir origen, destino y tipo de carga, y en ese tiempo el cliente ya cotizó con otros dos. Un cotizador que pida esos datos de una vez agiliza tu respuesta y filtra mejor lo que realmente puedes atender.' },
          { q: '¿Necesito un portal de rastreo en tiempo real con GPS?', a: 'No necesariamente. Basta con que el cliente entre con un número de referencia y vea el estado y una fecha estimada. Eso elimina buena parte de las consultas de "¿dónde está mi carga?" sin exigir una integración compleja; si más adelante quieres GPS en vivo, es un desarrollo aparte.' },
          { q: '¿Cuánto cuesta la web de una empresa de logística en Panamá?', a: 'Para la mayoría, una Web empresarial de hasta 6 páginas con cotizador y una página por servicio parte de $1,250. Una landing simple, si solo necesitas presencia y contacto, parte de $550. Un portal de seguimiento o una integración con tu sistema de operaciones es desarrollo a medida desde $2,900. Precios en dólares, sin el 7% de ITBMS.' },
          { q: '¿Vale la pena mostrar el seguro de carga y las certificaciones?', a: 'Es de lo que más pesa en la decisión B2B. Casi ningún operador panameño explica en su web si el seguro está incluido, qué cubre y hasta qué monto, y es justo lo que el comprador pregunta en la primera llamada. Publicarlo te adelanta antes de que suene el teléfono.' },
          { q: '¿Cómo sé qué plan de mantenimiento me conviene?', a: 'Depende de qué tan crítico sea que el sitio no se caiga. Si el cotizador o el rastreo son parte de tu operación diaria, el plan Empresarial ($319/mes) está pensado para eso. Si tu web es más una carta de presentación, el plan Básico ($99/mes) cubre lo esencial: seguridad, respaldos y monitoreo.' },
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
