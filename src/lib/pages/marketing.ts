/* SILO MARKETING: pauta, contenido, email y automatización.
   Modelo de cobro: fee de gestión mensual (nos pagan a nosotros) + inversión
   publicitaria aparte (va directo a Google/Meta desde la cuenta del cliente).
   ⚠️ PRECIOS PROPUESTOS por confirmar con el cliente — ver README. */
import type { PageData } from '../types';

const parent = { slug: 'marketing', label: 'Marketing' };

/* Bloque reutilizado: aclara el modelo fee + inversión, coherente con la
   sección "costos de terceros" de /como-trabajamos/. */
const modeloCobro = {
  type: 'prose' as const,
  h2: 'Cómo se cobra la pauta',
  paragraphs: [
    'La pauta tiene dos costos distintos y conviene no confundirlos. El primero es <strong>nuestro fee de gestión</strong>: lo que nos pagas por crear, optimizar y reportar tus campañas. El segundo es <strong>la inversión publicitaria</strong>: el dinero que se muestra en anuncios, y ese va directo a Google o Meta desde tu propia cuenta.',
    'No intermediamos tu inversión ni le aplicamos margen. La cargas en tu cuenta de anunciante, tú la ves y tú la controlas. Nosotros cobramos solo la gestión. Así sabes exactamente cuánto va a trabajo nuestro y cuánto va a mostrar tus anuncios.',
    'Esto también significa que la cuenta publicitaria queda a tu nombre. Si algún día te vas, te llevas el historial y el aprendizaje del algoritmo. No es rehén de nadie.',
  ],
};

export const marketingPages: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'marketing',
    title: 'Marketing Digital y Pauta en Panamá | Google, Meta y Más',
    description: 'Marketing digital en Panamá: Google Ads, Facebook e Instagram Ads, contenido para redes, email marketing y automatizaciones. Fee claro, tu inversión aparte.',
    h1: 'Marketing digital que trae clientes',
    breadcrumb: 'Marketing',
    heroImage: { src: 'https://picsum.photos/seed/marketing-digital-equipo-panama/1200/675', alt: 'Equipo de marketing digital analizando métricas de campañas en pantallas' },
    lead: [
      'Tu web es el destino; el marketing es lo que lleva gente hasta ella. Hacemos las dos cosas, así que tus campañas y tu sitio hablan el mismo idioma.',
      'La mayoría de las agencias de pauta manda el tráfico a una web que no convierte, y la mayoría de las agencias web no sabe traer tráfico. Nosotros cerramos el círculo: atraemos, convertimos y medimos, con un fee de gestión claro y tu inversión publicitaria siempre bajo tu control.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Qué hacemos en marketing',
        items: [
          { h3: 'Google Ads', text: 'Aparece justo cuando alguien busca lo que vendes. Búsqueda, display y remarketing gestionados y optimizados.', link: { slug: 'marketing/google-ads-panama', label: 'Google Ads' } },
          { h3: 'Facebook e Instagram Ads', text: 'Campañas en Meta para descubrimiento, captación y ventas, con segmentación afinada y creativos que detienen el scroll.', link: { slug: 'marketing/facebook-instagram-ads-panama', label: 'Meta Ads' } },
          { h3: 'Contenido para redes', text: 'Publicaciones, diseño gráfico y Reels que mantienen tu marca viva entre campaña y campaña.', link: { slug: 'marketing/contenido-redes-sociales-panama', label: 'Contenido para Redes' } },
          { h3: 'Email marketing', text: 'El canal con mejor retorno: newsletters, automatizaciones y recuperación de clientes que ya te conocen.', link: { slug: 'marketing/email-marketing-panama', label: 'Email Marketing' } },
          { h3: 'WhatsApp marketing masivo', text: 'Campañas por WhatsApp Business API oficial. Somos Meta Verified Tech Provider, así que sin riesgo de bloqueo.', link: { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp Marketing' } },
          { h3: 'Automatizaciones con n8n', text: 'Conectamos tus herramientas para que el marketing y las ventas funcionen sin trabajo manual repetitivo.', link: { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones n8n' } },
        ],
      },
      modeloCobro,
      {
        type: 'statement',
        text: 'La pauta a una web que no convierte es dinero quemado.',
        strong: 'Nosotros hacemos las dos: el anuncio y el destino.',
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Necesito tener web para hacer pauta con ustedes?', a: 'No siempre, pero ayuda mucho. Para campañas de captación, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page de conversión</a> es el destino ideal. Si no la tienes, la incluimos en la propuesta.' },
          { q: '¿Cuánto debo invertir en pauta?', a: 'Depende de tu objetivo, tu mercado y la competencia. En el diagnóstico definimos un presupuesto de inversión realista, separado de nuestro fee de gestión, y lo ajustamos con los resultados.' },
          { q: '¿Manejan la pauta y el contenido a la vez?', a: 'Sí, y es lo ideal: el contenido alimenta la pauta y la pauta amplifica el contenido. Puedes contratar cada servicio por separado o como un plan integral.' },
          { q: '¿Hay permanencia?', a: 'No. Los servicios de marketing son mensuales y cancelables. La pauta necesita unos meses para madurar, pero no te amarramos con contrato: te retenemos con resultados.' },
          { q: '¿Por dónde conviene empezar si tengo presupuesto limitado?', a: 'Casi siempre por el canal con mayor intención de compra y por asegurar el destino. Si vendes servicios que la gente busca activamente, <a href="/marketing/google-ads-panama/">Google Ads</a> hacia una buena <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> suele rendir primero; si tu producto entra por los ojos, <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a>. En el diagnóstico priorizamos según tu caso, no según lo que esté de moda.' },
          { q: '¿Cómo mido si el marketing está funcionando?', a: 'No con "me gusta", sino con métricas de negocio: costo por lead, costo por venta y retorno sobre la inversión. Configuramos el seguimiento de conversiones antes de encender pauta, para que cada mes sepas cuánto entró por cada canal y no solo cuánto se gastó.' },
          { q: '¿Trabajan con negocios fuera de la capital?', a: 'Sí. La pauta y las automatizaciones son digitales, así que atendemos negocios de todo Panamá. Para comercios locales combinamos campañas con <a href="/crecimiento/seo-local-google-maps-panama/">SEO local en Google Maps</a>, que es donde busca quien está cerca y listo para comprar.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo trabajamos tu marketing',
        intro: 'No encendemos pauta el primer día. Primero entendemos el negocio, aseguramos el destino y medimos; solo entonces invertimos.',
        items: [
          { h3: '1. Diagnóstico', text: 'Revisamos tu negocio, tu margen, tu competencia y por dónde entra hoy tu cliente. De ahí sale qué canal conviene primero y con qué presupuesto de inversión realista arrancar.' },
          { h3: '2. Destino', text: 'Antes de traer tráfico, revisamos a dónde llega. Una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> o página bien armada convierte el mismo clic en el doble de clientes. Sin buen destino, no se pauta.' },
          { h3: '3. Medición', text: 'Instalamos seguimiento de conversiones, píxel y eventos antes de gastar el primer dólar. Optimizar sin medir es adivinar, y adivinar con presupuesto es caro.' },
          { h3: '4. Lanzamiento', text: 'Encendemos el canal elegido con varios ángulos de mensaje y creativo. Los primeros días son de aprendizaje: el algoritmo necesita datos para afinar a quién le muestra.' },
          { h3: '5. Optimización y reporte', text: 'Cada mes recortamos lo que no rinde, escalamos lo que sí y te entregamos un reporte claro: qué se invirtió, qué se obtuvo y qué sigue. Sobre datos, no sobre corazonadas.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es este servicio',
        intro: 'El marketing digital no le sirve igual a todos. Estos son los perfiles donde más rinde lo que hacemos.',
        items: [
          { h3: 'Negocios que ya venden y quieren escalar', text: 'Si tu producto o servicio ya funciona de boca en boca, la pauta le echa gasolina a algo que ya arde. Es el escenario ideal: sabemos qué convence, solo hay que ponerlo frente a más gente.' },
          { h3: 'Negocios que lanzan algo nuevo', text: 'Un producto, una sucursal o una temporada. Cuando nadie te busca todavía porque no saben que existes, Meta y contenido construyen el conocimiento que después Google Ads cosecha.' },
          { h3: 'Negocios que dependen de referidos', text: 'Si toda tu venta viene de recomendaciones, estás a merced de un canal que no controlas. Email, WhatsApp y automatizaciones convierten esos contactos sueltos en un activo tuyo que puedes reactivar cuando quieras.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Un solo equipo para atraer y para convertir',
        paragraphs: [
          'La mayoría de los negocios contrata la web por un lado y la pauta por otro, y ahí empieza el problema: la agencia de anuncios culpa a la web por no convertir, y la de web culpa a los anuncios por traer mal tráfico. En el medio, tu presupuesto se evapora sin que nadie se haga responsable del resultado.',
          'Nosotros cerramos ese círculo porque hacemos las dos cosas. El anuncio y el destino se diseñan juntos: el mensaje que promete algo en el anuncio es el mismo que cumple en la landing, y la conversión se mide de punta a punta. Cuando algo no rinde, sabemos exactamente dónde está la fuga.',
          'Y no todo es pauta. El <a href="/marketing/email-marketing-panama/">email</a>, el <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp</a> y las <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones</a> exprimen a los contactos que la pauta ya te consiguió, para que no pagues dos veces por el mismo cliente. Ese es el marketing que trae clientes y, sobre todo, que los conserva.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing Pages' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
        ],
      },
    ],
    cta: { h2: 'Hablemos de tu marketing', wa: 'Hola, quiero información sobre sus servicios de marketing digital.' },
  },

  /* ---------- GOOGLE ADS ---------- */
  {
    slug: 'marketing/google-ads-panama',
    parent,
    title: 'Agencia de Google Ads en Panamá | Gestión de Campañas',
    description: 'Gestión de Google Ads en Panamá: búsqueda, display y remarketing. Aparece cuando tu cliente busca. Fee de gestión claro, tu inversión va directo a Google.',
    h1: 'Google Ads: aparece cuando te buscan',
    breadcrumb: 'Google Ads',
    heroImage: { src: 'https://picsum.photos/seed/google-ads-busqueda-panama/1200/675', alt: 'Resultados de búsqueda en Google mostrados en una laptop' },
    service: { type: 'Gestión de campañas de Google Ads' },
    lead: [
      'Cuando alguien escribe en Google "lo que tú vendes", hay una subasta invisible por aparecer primero. Google Ads te pone en esa conversación, en el momento exacto de la intención de compra.',
      'A diferencia de las redes, aquí no interrumpes a nadie: el cliente ya está buscando. Por eso Google Ads suele ser el canal con la intención de compra más alta. El truco no es pagar más, sino estructurar la campaña para que cada clic sea de alguien que realmente puede comprar.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué gestionamos',
        // ⚠️ Fee propuesto: desde $300/mes de gestión + inversión aparte.
        intro: 'Gestión desde $300/mes. La inversión publicitaria es aparte y va directo a Google desde tu cuenta.',
        items: [
          'Investigación de palabras clave con intención de compra',
          'Campañas de búsqueda, display, remarketing y Google Shopping',
          'Redacción de anuncios y pruebas A/B constantes',
          'Palabras clave negativas para no gastar en clics inútiles',
          'Configuración de conversiones y seguimiento real',
          'Optimización semanal de pujas y presupuesto',
          'Landing pages alineadas al anuncio, si las necesitas',
          'Reporte mensual claro: qué se invirtió y qué se obtuvo',
        ],
      },
      modeloCobro,
      {
        type: 'prose',
        h2: 'Por qué la mayoría desperdicia su presupuesto en Google',
        paragraphs: [
          'El error más común es dejar la campaña en automático y pujar por palabras demasiado amplias. "Abogado" atrae a estudiantes de derecho, curiosos y competencia; "abogado migratorio en Panamá" atrae a quien tiene el problema y el dinero para resolverlo.',
          'La otra fuga silenciosa son las <strong>palabras clave negativas</strong>: si no le dices a Google por qué NO quieres pagar, pagarás por "gratis", "empleo" y "cómo hacerlo yo mismo". Una campaña sin lista de negativas quema presupuesto todos los días.',
          'Y sin medición de conversiones, todo es fe. Configuramos el seguimiento para saber qué anuncio, qué palabra y qué campaña genera clientes reales, no solo clics. Sobre eso se optimiza.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta hacer Google Ads en Panamá?', a: 'Nuestro fee de gestión parte desde $300 al mes. Aparte está tu inversión publicitaria, que se carga en tu cuenta de Google y defines tú según tu objetivo. En el diagnóstico proponemos un presupuesto de inversión realista.' },
          { q: '¿En cuánto tiempo veo resultados?', a: 'Google Ads genera tráfico desde el primer día, pero la optimización real toma de 4 a 8 semanas: el algoritmo necesita datos para afinar. Los primeros meses son de aprendizaje acelerado.' },
          { q: '¿La cuenta de Google Ads es mía?', a: 'Sí, siempre. La creamos a tu nombre, cargas tu propia inversión y conservas todo el historial. Si te vas, te llevas la cuenta y su aprendizaje.' },
          { q: '¿Google Ads o SEO?', a: 'Ads te da resultados hoy pero se apaga al dejar de pagar; el <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a> es un activo de largo plazo. La estrategia madura usa ambos: Ads mientras el SEO crece.' },
          { q: '¿Qué es el Quality Score y por qué me importa?', a: 'Es la nota del 1 al 10 que Google le pone a la relevancia de tu anuncio, tus palabras clave y tu página de destino. Un puntaje alto te hace pagar menos por cada clic y aparecer mejor posicionado. Por eso alineamos el anuncio con la palabra buscada y con una landing que responda exactamente a esa búsqueda: subir el Quality Score es bajar el costo.' },
          { q: '¿Puedo anunciarme solo en ciertas zonas de Panamá?', a: 'Sí. Segmentamos por ubicación para que solo pagues por clics de la ciudad, provincia o incluso el radio de kilómetros que te interesa. Si atiendes solo la ciudad de Panamá, no tiene sentido pagar por búsquedas de David o Colón, salvo que quieras expandirte.' },
          { q: '¿Sirve Google Ads si mi servicio es muy nuevo y nadie lo busca?', a: 'Si nadie escribe tu solución en Google, la búsqueda rinde poco porque se alimenta de la intención existente. En ese caso conviene empezar por <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a> y contenido para crear la demanda, y usar Google Ads más adelante para capturarla cuando la gente ya te busque.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo montamos una campaña de Google Ads',
        intro: 'Una campaña que rinde no es cuestión de subir el presupuesto, sino de estructura. Este es el orden con el que trabajamos.',
        items: [
          { h3: '1. Palabras clave con intención', text: 'Separamos las búsquedas que compran de las que solo curiosean. Priorizamos términos concretos ("plomero de emergencia 24 horas Panamá") sobre genéricos ("plomería"), porque los primeros traen a quien tiene el problema y el dinero para resolverlo.' },
          { h3: '2. Estructura y anuncios', text: 'Agrupamos palabras por tema para que cada anuncio le hable directo a esa búsqueda. Redactamos varias versiones de titular y descripción para probar cuál convence más.' },
          { h3: '3. Palabras clave negativas', text: 'Le decimos a Google por qué NO queremos pagar: "gratis", "empleo", "cómo hacerlo yo mismo". Esta lista se afina cada semana y es de lo que más presupuesto salva.' },
          { h3: '4. Destino y conversiones', text: 'Conectamos el anuncio a una <a href="/servicios/landing-pages-alta-conversion-panama/">landing</a> que cumple lo prometido y medimos la conversión real, no solo el clic. Sin esto, optimizar es adivinar.' },
          { h3: '5. Optimización de pujas', text: 'Semana a semana movemos presupuesto hacia las palabras y anuncios que traen clientes y apagamos los que solo gastan. El aprendizaje se acumula y el costo por cliente baja con el tiempo.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Tipos de campaña que gestionamos',
        intro: 'Google Ads no es un solo formato. Elegimos el tipo según lo que vendes y en qué momento del proceso está tu cliente.',
        items: [
          { h3: 'Búsqueda', text: 'Apareces cuando alguien escribe exactamente lo que ofreces. Es el formato de mayor intención de compra y el punto de partida para casi todo negocio de servicios.' },
          { h3: 'Remarketing', text: 'Le vuelves a mostrar tu anuncio a quien ya visitó tu web y no compró. Barato y efectivo: le recuerdas tu marca a alguien que ya te conoce y estuvo cerca de decidir.' },
          { h3: 'Shopping y Display', text: 'Google Shopping pone tu producto con foto y precio arriba de la búsqueda, ideal para <a href="/servicios/tiendas-online-ecommerce-panama/">tiendas en línea</a>. Display te da presencia visual en millones de sitios para reconocimiento de marca.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El destino decide tanto como el anuncio',
        paragraphs: [
          'Puedes tener la mejor campaña de Google, pero si el clic aterriza en una página lenta, confusa o que no responde a lo que la persona buscó, el dinero se pierde en el último metro. La mitad del resultado de Google Ads se juega después del clic, en la página de destino.',
          'Por eso no basta con enviar el tráfico a tu página de inicio. Cada campaña merece una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> enfocada, con el mismo mensaje del anuncio, una sola acción clara y cero distracciones. Si el anuncio promete "cotización en 24 horas", eso es lo primero que la página debe ofrecer.',
          'Como hacemos web y pauta con el mismo equipo, alineamos las dos cosas desde el inicio. No hay pelota que se lance de un lado a otro: el anuncio y su destino se diseñan juntos, se miden juntos y se mejoran juntos.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Facebook e Instagram Ads' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing Pages' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
        ],
      },
    ],
    cta: { h2: 'Aparece en Google esta semana', wa: 'Hola, quiero cotizar la gestión de Google Ads.' },
  },

  /* ---------- META ADS (FB + IG) ---------- */
  {
    slug: 'marketing/facebook-instagram-ads-panama',
    parent,
    title: 'Publicidad en Facebook e Instagram en Panamá | Meta Ads',
    description: 'Gestión de publicidad en Facebook e Instagram (Meta Ads) en Panamá: segmentación, creativos y ventas. Fee de gestión claro, tu inversión va directo a Meta.',
    h1: 'Publicidad en Facebook e Instagram',
    breadcrumb: 'Facebook e Instagram Ads',
    heroImage: { src: 'https://picsum.photos/seed/redes-sociales-anuncios-panama/1200/675', alt: 'Persona viendo anuncios en redes sociales desde su teléfono' },
    service: { type: 'Gestión de campañas en Facebook e Instagram (Meta Ads)' },
    lead: [
      'Facebook e Instagram comparten el mismo motor de anuncios (Meta Ads), así que los gestionamos juntos y decidimos con datos en cuál aparece cada campaña.',
      'Aquí no esperas a que te busquen: interrumpes con algo tan bueno que el usuario deja de hacer scroll. Por eso Meta es imbatible para dar a conocer una marca, captar interesados y vender productos con buena foto. El reto es la segmentación y el creativo, y ahí es donde se gana o se pierde el presupuesto.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué gestionamos',
        // ⚠️ Fee propuesto: desde $300/mes de gestión + inversión aparte.
        intro: 'Gestión desde $300/mes. La inversión publicitaria es aparte y va directo a Meta desde tu cuenta.',
        items: [
          'Estrategia por objetivo: reconocimiento, mensajes, ventas o leads',
          'Segmentación de audiencias frías, tibias y de remarketing',
          'Públicos similares (lookalike) a partir de tus mejores clientes',
          'Creativos que detienen el scroll: imagen, carrusel y Reels',
          'Píxel de Meta y API de conversiones bien instalados',
          'Pruebas A/B de creativo, público y mensaje',
          'Integración con WhatsApp e Instagram Direct para captar la conversación',
          'Reporte mensual claro de inversión y resultados',
        ],
      },
      modeloCobro,
      {
        type: 'prose',
        h2: 'El creativo pesa más que la segmentación',
        paragraphs: [
          'Durante años el juego de Meta fue la segmentación milimétrica. Hoy el algoritmo encuentra a tu público casi solo; lo que decide el resultado es <strong>el creativo</strong>: el primer segundo del video, la imagen que frena el pulgar, el texto que da una razón para tocar.',
          'Por eso no producimos un solo anuncio: probamos varios ángulos y dejamos que los datos digan cuál funciona. El que gana se escala, el que pierde se apaga. Es método, no corazonada.',
          'Y como el <a href="/marketing/contenido-redes-sociales-panama/">contenido orgánico</a> y la pauta se alimentan mutuamente, lo que mejor funciona en tus publicaciones suele ser el mejor punto de partida para un anuncio.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta la publicidad en Facebook e Instagram?', a: 'Nuestro fee de gestión parte desde $300 al mes. La inversión en anuncios es aparte, va directo a Meta desde tu cuenta y la defines según tu objetivo. Proponemos un presupuesto realista en el diagnóstico.' },
          { q: '¿Facebook o Instagram para mi negocio?', a: 'No tienes que elegir: ambas se gestionan desde Meta Ads y el algoritmo reparte tu presupuesto donde rinde mejor. En general, Instagram pesa más para marcas visuales y público joven; Facebook para alcance amplio y públicos mayores.' },
          { q: '¿Sirve para vender directo o solo para marca?', a: 'Para ambos. Configuramos la campaña según tu objetivo real: mensajes a WhatsApp, ventas en tu tienda o registro de interesados. La estructura cambia según lo que quieras lograr.' },
          { q: '¿Qué pasa si Meta bloquea mi cuenta?', a: 'Es un riesgo real con cuentas mal gestionadas. Como Meta Verified Tech Provider trabajamos con las cuentas comerciales correctamente verificadas, lo que reduce mucho ese riesgo.' },
          { q: '¿Qué es el remarketing y por qué lo recomiendan tanto?', a: 'Es volver a mostrarle anuncios a quien ya interactuó contigo: visitó tu web, vio tu video o abandonó un carrito. Es la parte más rentable de Meta, porque le hablas a gente que ya te conoce en lugar de a desconocidos. Para que funcione, el píxel de Meta debe estar bien instalado desde el inicio, y eso es de lo primero que revisamos.' },
          { q: '¿Cuántos creativos hacen falta para arrancar?', a: 'Recomendamos empezar con varios ángulos, no con un solo anuncio. El algoritmo aprende más rápido cuando tiene opciones para comparar, y así descubrimos con datos cuál mensaje conecta antes de escalar el presupuesto en el ganador.' },
          { q: '¿Necesito grabar videos o sirven fotos?', a: 'Las fotos funcionan, pero el video corto suele rendir más porque frena el scroll y el algoritmo lo empuja. No necesitas producción de estudio: muchas veces un clip auténtico grabado con celular convierte mejor que algo demasiado pulido. Si ya haces <a href="/marketing/contenido-redes-sociales-panama/">contenido para redes</a>, lo aprovechamos para la pauta.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo estructuramos tu campaña en Meta',
        intro: 'La segmentación afinada y el creativo correcto son lo que separa una campaña que vende de una que solo gasta. Este es nuestro proceso.',
        items: [
          { h3: '1. Objetivo real', text: 'Definimos qué quieres lograr de verdad: mensajes a WhatsApp, ventas en tu tienda o registro de interesados. La estructura de la campaña cambia por completo según la meta, y Meta optimiza hacia lo que le pidas.' },
          { h3: '2. Públicos', text: 'Armamos audiencias frías (quien no te conoce), tibias (quien ya interactuó) y de remarketing. Con tus mejores clientes creamos públicos similares (lookalike) para encontrar más gente parecida a quien ya te compra.' },
          { h3: '3. Píxel y conversiones', text: 'Instalamos el píxel de Meta y la API de conversiones para que el algoritmo aprenda de resultados reales y no de suposiciones. Sin esta base, la optimización es ciega.' },
          { h3: '4. Creativos por ángulos', text: 'Producimos varias versiones (imagen, carrusel, Reel) con mensajes distintos. El primer segundo del video y el gancho del texto son lo que decide si el usuario se detiene.' },
          { h3: '5. Escalar y podar', text: 'Los datos deciden: el creativo y el público que ganan reciben más presupuesto, los que pierden se apagan. Cada semana afinamos para bajar el costo por resultado.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Tipos de campaña según tu objetivo',
        intro: 'Meta permite perseguir metas muy distintas. Estructuramos la campaña según en qué momento está tu cliente.',
        items: [
          { h3: 'Reconocimiento y alcance', text: 'Para marcas nuevas o lanzamientos: poner tu nombre frente a mucha gente que aún no te conoce. Es la siembra que después cosechan las campañas de venta y el remarketing.' },
          { h3: 'Mensajes y leads', text: 'Campañas que abren una conversación en WhatsApp o Instagram Direct, o que capturan datos de interesados. Ideales para servicios donde la venta se cierra hablando, no en un botón de compra.' },
          { h3: 'Ventas y retargeting', text: 'Para <a href="/servicios/tiendas-online-ecommerce-panama/">tiendas en línea</a>: catálogo dinámico y remarketing a quien vio un producto o dejó el carrito. Es donde Meta demuestra retorno directo y medible.' },
        ],
      },
      {
        type: 'prose',
        h2: 'A dónde llega el clic también importa en Meta',
        paragraphs: [
          'En redes es fácil obsesionarse con el creativo y olvidar el destino, pero la lógica es la misma que en cualquier canal: si el anuncio detiene el scroll y luego manda a la persona a una web lenta o confusa, se rompe la cadena justo antes de la venta.',
          'Para campañas de venta o captación, el mejor destino no es tu página de inicio, sino una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> alineada al anuncio, o una conversación directa por WhatsApp cuando el negocio se cierra hablando. Cada objetivo tiene su destino ideal y lo elegimos contigo.',
          'Al hacer el anuncio y la web con el mismo equipo, no perdemos el creativo que funcionó en una página que no convierte. Diseñamos las dos piezas para que trabajen juntas, y medimos de punta a punta para saber qué campaña de verdad trae clientes.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/google-ads-panama', label: 'Google Ads' },
          { slug: 'marketing/contenido-redes-sociales-panama', label: 'Contenido para Redes' },
          { slug: 'marketing/whatsapp-marketing-masivo-panama', label: 'WhatsApp Marketing' },
        ],
      },
    ],
    cta: { h2: 'Lanza tu campaña en Meta', wa: 'Hola, quiero cotizar publicidad en Facebook e Instagram.' },
  },

  /* ---------- CONTENIDO PARA REDES (incluye diseño gráfico + Reels/video) ---------- */
  {
    slug: 'marketing/contenido-redes-sociales-panama',
    parent,
    title: 'Contenido para Redes Sociales en Panamá | Diseño y Reels',
    description: 'Gestión de contenido para redes sociales en Panamá: publicaciones, diseño gráfico y Reels. Mantén tu marca viva y consistente todos los meses.',
    h1: 'Contenido para redes que sí mueve la marca',
    breadcrumb: 'Contenido para Redes',
    heroImage: { src: 'https://picsum.photos/seed/contenido-redes-creador-panama/1200/675', alt: 'Creador de contenido grabando un video para redes sociales' },
    service: { type: 'Gestión de contenido para redes sociales' },
    lead: [
      'Publicar por publicar no construye nada. El contenido que funciona tiene un plan detrás, una línea visual consistente y el formato que la plataforma premia hoy: el video corto.',
      'Manejamos tus redes como un canal de negocio, no como un álbum de fotos. Incluye la estrategia, el diseño gráfico de las piezas, la redacción y la producción de Reels, todo con una identidad coherente que hace que tu marca se reconozca de un vistazo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye la gestión de contenido',
        // ⚠️ Precio propuesto: paquetes desde $250/mes según cantidad de piezas.
        intro: 'Paquetes mensuales desde $250, según la cantidad de piezas y plataformas. Todo bajo una misma línea visual.',
        items: [
          'Plan de contenido mensual alineado a tus objetivos',
          'Diseño gráfico de publicaciones e historias con tu identidad',
          'Redacción de textos que invitan a interactuar',
          'Producción y edición de Reels y video corto vertical',
          'Calendario de publicación y programación',
          'Cobertura de fechas clave y campañas de temporada',
          'Respuesta a comentarios y mensajes (community management), opcional',
          'Reporte mensual de crecimiento y alcance',
        ],
      },
      {
        type: 'prose',
        h2: 'El Reel es hoy el rey del alcance',
        paragraphs: [
          'Meta e Instagram están empujando el video corto con todo su algoritmo: un Reel bien hecho le llega a mucha más gente que una foto, incluso a personas que no te siguen. Ignorar ese formato es renunciar al alcance orgánico gratis que la plataforma está regalando.',
          'Por eso el video no es un extra en nuestros planes: es el centro. Producimos Reels pensados para los primeros tres segundos, que es donde se decide si el usuario se queda o sigue de largo.',
          'Y el contenido orgánico no vive aislado: lo que mejor funciona aquí se convierte en el mejor material para tu <a href="/marketing/facebook-instagram-ads-panama/">pauta en Meta</a>. Orgánico y pagado, trabajando juntos.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta manejar mis redes sociales?', a: 'Los paquetes parten desde $250 al mes según la cantidad de piezas, si incluye video y cuántas plataformas manejamos. Definimos el paquete correcto según tus objetivos, no un número al azar.' },
          { q: '¿Incluye el diseño gráfico o solo los textos?', a: 'Incluye ambos: diseño de las piezas con tu identidad visual y la redacción. El diseño gráfico es parte del servicio, no un cobro aparte.' },
          { q: '¿Producen los videos o los grabo yo?', a: 'Editamos y producimos Reels con el material que acordemos. Para algunas marcas grabamos nosotros; para otras, tú envías clips crudos y nosotros los convertimos en Reels listos. Lo definimos según tu caso.' },
          { q: '¿Manejan también los mensajes y comentarios?', a: 'El community management (responder comentarios y mensajes) es opcional. Muchos negocios prefieren manejar la conversación con su equipo o con un <a href="/funcionalidades/chatbots-ia-web-chatmantis-panama/">asistente de IA</a>; nosotros nos concentramos en el contenido.' },
          { q: '¿Cada cuánto se debe publicar?', a: 'Más que la cantidad, importa la consistencia. Preferimos un ritmo sostenible de piezas bien hechas antes que saturar una semana y desaparecer la siguiente. El algoritmo premia a las cuentas activas de forma constante, así que definimos una frecuencia que podamos mantener todos los meses, no solo el primero.' },
          { q: '¿El contenido en redes ayuda al SEO?', a: 'De forma indirecta. Las redes no posicionan en Google por sí solas, pero construyen marca y generan búsquedas de tu nombre, que sí son una señal positiva. El contenido que de verdad mueve tu posicionamiento vive en tu web; ahí entra nuestro trabajo de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a>.' },
          { q: '¿Puedo usar el mismo contenido en todas las plataformas?', a: 'Se aprovecha la base, pero adaptamos el formato. Un Reel vertical funciona en Instagram y TikTok, pero el texto, el tono y el tamaño cambian entre una historia, un feed y un post de LinkedIn. Reciclar sin adaptar se nota y rinde menos.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo producimos tu contenido mes a mes',
        intro: 'El contenido que funciona no sale de la improvisación. Este es el proceso detrás de cada mes de publicaciones.',
        items: [
          { h3: '1. Estrategia y línea visual', text: 'Definimos los pilares de contenido, el tono de voz y una identidad gráfica consistente para que tu marca se reconozca de un vistazo, sin importar quién vea la pieza.' },
          { h3: '2. Calendario', text: 'Planificamos el mes completo: qué se publica, cuándo y con qué objetivo. Incluimos fechas clave y campañas de temporada para que nada importante te agarre desprevenido.' },
          { h3: '3. Diseño y guiones', text: 'Diseñamos las piezas gráficas con tu identidad y escribimos los guiones de los Reels pensados para enganchar en los primeros tres segundos, que es donde se decide el alcance.' },
          { h3: '4. Producción de video', text: 'Editamos y producimos los Reels con el material acordado, cuidando ritmo, subtítulos y ese gancho inicial. El video corto es el centro, no un extra.' },
          { h3: '5. Publicación y reporte', text: 'Programamos las piezas y, al cierre del mes, te entregamos un reporte de alcance y crecimiento con lo que mejor funcionó, para orientar el mes siguiente.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es este servicio',
        intro: 'Manejar redes con estrategia rinde distinto según tu negocio. Estos son los perfiles donde más aporta.',
        items: [
          { h3: 'Marcas visuales y de consumo', text: 'Restaurantes, moda, belleza, bienes raíces: negocios que entran por los ojos. Aquí el contenido es prácticamente el escaparate, y una buena línea visual vende antes de que hables de precio.' },
          { h3: 'Negocios que ya pautan', text: 'Si inviertes en <a href="/marketing/facebook-instagram-ads-panama/">Meta Ads</a>, el contenido orgánico prueba mensajes gratis y le da credibilidad a tu perfil. Nadie compra a una marca cuyo último post es de hace un año.' },
          { h3: 'Marcas personales y profesionales', text: 'Consultores, médicos, abogados y coaches que venden su experiencia. El contenido constante construye la autoridad que después cierra la consulta o el contrato.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Tus redes apuntan a un destino: tu web',
        paragraphs: [
          'El contenido en redes es alquilado: hoy el algoritmo te muestra, mañana cambia las reglas. Por eso el mejor contenido no se queda en el feed, sino que empuja a la gente hacia un lugar que sí controlas, tu web, donde puedes convertir esa atención en un lead o una venta.',
          'Cuidamos que tu perfil apunte a un destino que funcione: un enlace en la biografía hacia tu <a href="/servicios/landing-pages-alta-conversion-panama/">landing</a>, tu <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> o tu WhatsApp. De nada sirve mover miles de vistas si no hay a dónde mandarlas a comprar.',
          'Y como también hacemos tu web, alineamos las dos puntas: la estética de tus redes y la de tu sitio hablan el mismo idioma, y el visitante que llega desde un Reel encuentra exactamente lo que el video prometió.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/facebook-instagram-ads-panama', label: 'Meta Ads' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
          { slug: 'saas/chatmantis', label: 'ChatMantis' },
        ],
      },
    ],
    cta: { h2: 'Pon tus redes a trabajar', wa: 'Hola, quiero cotizar la gestión de contenido para mis redes.' },
  },

  /* ---------- EMAIL MARKETING ---------- */
  {
    slug: 'marketing/email-marketing-panama',
    parent,
    title: 'Email Marketing en Panamá | Newsletters y Automatización',
    description: 'Email marketing en Panamá: newsletters, automatizaciones y recuperación de clientes. El canal con mejor retorno, sobre una base de datos que sí es tuya.',
    h1: 'Email marketing: el canal que sí es tuyo',
    breadcrumb: 'Email Marketing',
    heroImage: { src: 'https://picsum.photos/seed/email-marketing-bandeja-panama/1200/675', alt: 'Bandeja de correo con una campaña de email marketing abierta' },
    service: { type: 'Gestión de email marketing' },
    lead: [
      'En redes sociales le alquilas la audiencia al algoritmo: hoy te muestra, mañana no. Tu lista de correos es distinta: es un activo que te pertenece y que puedes contactar cuando quieras.',
      'El email sigue siendo el canal de mayor retorno del marketing digital, y no está peleado con lo moderno. Bien hecho, no es spam: es hablarle a gente que ya te dio permiso, en el momento correcto, con el mensaje correcto.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué gestionamos',
        // ⚠️ Fee propuesto: desde $200/mes de gestión.
        intro: 'Gestión desde $200/mes, sobre la plataforma de envío que mejor se ajuste a tu volumen.',
        items: [
          'Estrategia de captación de correos desde tu web y redes',
          'Diseño de plantillas con tu identidad de marca',
          'Newsletters periódicos con contenido que se abre',
          'Automatizaciones: bienvenida, carrito abandonado, reactivación',
          'Segmentación de la lista por interés y comportamiento',
          'Configuración técnica de entregabilidad (SPF, DKIM, DMARC)',
          'Cumplimiento de buenas prácticas y consentimiento',
          'Reporte de aperturas, clics y conversiones',
        ],
      },
      {
        type: 'prose',
        h2: 'La automatización es donde el email paga solo',
        paragraphs: [
          'Un newsletter manual está bien, pero el verdadero retorno está en las <strong>automatizaciones</strong>: correos que se envían solos en el momento exacto. El de bienvenida cuando alguien se suscribe. El de carrito abandonado cuando dejó una compra a medias. El de reactivación cuando un cliente lleva meses sin volver.',
          'Se configuran una vez y trabajan para siempre, recuperando ventas que de otro modo se perderían en silencio. Es la parte del marketing que más se parece a tener un vendedor que nunca duerme y nunca olvida hacer seguimiento.',
          'Para tiendas en línea, estas automatizaciones se conectan directo con tu catálogo y se potencian con nuestras <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones con n8n</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta el email marketing?', a: 'Nuestro fee de gestión parte desde $200 al mes. Aparte está el costo de la plataforma de envío (Mailchimp, Brevo u otra), que depende del tamaño de tu lista y se paga directo al proveedor.' },
          { q: '¿El email marketing no es spam?', a: 'El spam es enviar sin permiso. Nosotros trabajamos solo sobre listas de gente que se suscribió voluntariamente, con opción de darse de baja siempre visible. Eso es lo que mantiene alta la entregabilidad y legal la operación.' },
          { q: '¿Necesito ya tener una lista de correos?', a: 'Ayuda, pero si no la tienes, parte del trabajo es construirla: formularios en tu web, incentivos de suscripción y captación desde tus redes. Una lista propia es de los activos más valiosos de tu negocio.' },
          { q: '¿Por qué mis correos caen en spam?', a: 'Casi siempre es configuración técnica: sin SPF, DKIM y DMARC bien puestos, los servidores desconfían de ti. Es de lo primero que revisamos y corregimos.' },
          { q: '¿Cada cuánto debo enviar correos sin cansar a mi lista?', a: 'No hay un número mágico; depende de tu negocio y de tener algo que valga la pena decir. Más importante que la frecuencia es la relevancia: segmentamos la lista para que cada persona reciba lo que le interesa. Un correo útil cada dos semanas rinde más que uno vacío cada tres días, que solo genera bajas.' },
          { q: '¿Qué diferencia hay entre newsletter y automatización?', a: 'El newsletter lo envías tú a toda la lista en un momento (una promoción, una novedad). La automatización se dispara sola según lo que hace cada persona: se suscribió, abandonó un carrito, lleva meses sin comprar. El newsletter mantiene la relación; las automatizaciones son las que recuperan ventas de forma constante y sin trabajo manual.' },
          { q: '¿Puedo conectar el email con mi tienda o mi CRM?', a: 'Sí, y es donde el canal se vuelve poderoso. Conectamos tu plataforma de correo con tu <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a> o tu CRM mediante <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones con n8n</a>, para que los correos reaccionen a compras reales, no a una lista estática.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo montamos tu email marketing',
        intro: 'El email rinde cuando la base técnica está sana y los envíos son relevantes. Este es el orden con el que trabajamos.',
        items: [
          { h3: '1. Captación', text: 'Ponemos formularios en tu web y tus redes, con un incentivo claro para suscribirse. Una lista propia, construida con permiso, es de los activos más valiosos de tu negocio.' },
          { h3: '2. Entregabilidad', text: 'Configuramos SPF, DKIM y DMARC para que los servidores confíen en ti. Sin esta base técnica, hasta el mejor correo cae en spam y todo el esfuerzo se pierde.' },
          { h3: '3. Plantillas y segmentación', text: 'Diseñamos plantillas con tu identidad y dividimos la lista por interés y comportamiento, para que cada persona reciba lo que le importa, no un envío genérico.' },
          { h3: '4. Automatizaciones', text: 'Configuramos los flujos que trabajan solos: bienvenida, carrito abandonado y reactivación. Se arman una vez y recuperan ventas para siempre.' },
          { h3: '5. Medición', text: 'Revisamos aperturas, clics y conversiones, y ajustamos asuntos, horarios y segmentos. El email es de los pocos canales donde cada mejora se ve con números claros.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Los envíos que más retorno dejan',
        intro: 'No todos los correos rinden igual. Estos son los tipos de campaña por donde el email paga solo.',
        items: [
          { h3: 'Serie de bienvenida', text: 'Los correos que se disparan cuando alguien se suscribe. Es cuando más atención te presta y el momento ideal para contar quién eres y por qué comprarte. Se configura una vez y trabaja con cada nuevo suscriptor.' },
          { h3: 'Carrito abandonado', text: 'Para <a href="/servicios/tiendas-online-ecommerce-panama/">tiendas en línea</a>: un recordatorio automático a quien dejó una compra a medias. Recupera ventas que de otro modo se perderían en silencio, sin que nadie mueva un dedo.' },
          { h3: 'Reactivación', text: 'Correos a clientes que llevan meses sin volver, con un motivo real para regresar. Cuesta mucho menos despertar a un cliente dormido que conseguir uno nuevo desde cero.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Tu lista es tuya, y eso lo cambia todo',
        paragraphs: [
          'En redes sociales le alquilas la audiencia al algoritmo: puede recortar tu alcance o cambiar las reglas de un día para otro, y no hay nada que puedas hacer. Con el email, la relación es directa. Nadie se interpone entre tu mensaje y tu cliente, y nadie te puede quitar esa lista.',
          'Por eso el email es más resistente que cualquier canal prestado. Si mañana una plataforma te suspende la cuenta de anuncios o te baja el alcance orgánico, tu lista de correos sigue ahí, lista para contactarse. Es la parte de tu marketing que de verdad te pertenece.',
          'Construir ese activo empieza en tu web: cada visitante que se suscribe es un contacto que capturaste una vez y puedes reactivar mil veces. Por eso el email y una buena web se potencian, y por eso lo tratamos como una inversión de largo plazo, no como un envío suelto.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones n8n' },
          { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' },
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
        ],
      },
    ],
    cta: { h2: 'Activa tu email marketing', wa: 'Hola, quiero cotizar email marketing.' },
  },

  /* ---------- WHATSAPP MARKETING MASIVO ---------- */
  {
    slug: 'marketing/whatsapp-marketing-masivo-panama',
    parent,
    title: 'WhatsApp Marketing Masivo en Panamá | API Oficial',
    description: 'Campañas de WhatsApp marketing masivo en Panamá con la API oficial de WhatsApp Business. Meta Verified Tech Provider: sin riesgo de bloqueo de tu número.',
    h1: 'WhatsApp marketing, sin que te bloqueen',
    breadcrumb: 'WhatsApp Marketing',
    heroImage: { src: 'https://picsum.photos/seed/whatsapp-marketing-campana-panama/1200/675', alt: 'Teléfono mostrando una campaña de mensajes de WhatsApp' },
    service: { type: 'Campañas de WhatsApp marketing masivo con API oficial' },
    lead: [
      'El WhatsApp masivo tiene un problema que casi nadie te cuenta: hecho con apps no oficiales, Meta detecta el patrón y <strong>bloquea tu número para siempre</strong>. Perder el número por el que te escriben todos tus clientes no es un riesgo teórico.',
      'Nosotros lo hacemos por la API oficial de WhatsApp Business, como Meta Verified Tech Provider. Es la forma correcta: mensajes con plantillas aprobadas, a contactos que aceptaron recibirlos, sin poner en riesgo tu línea.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye',
        // ⚠️ Precio propuesto: setup + gestión desde $150/mes (o por campaña). Confirmar.
        intro: 'Implementación inicial más gestión de campañas desde $150/mes. El costo de los mensajes lo cobra Meta por conversación, desde tu cuenta.',
        items: [
          'Verificación oficial de tu número en la API de WhatsApp Business',
          'Creación y aprobación de plantillas de mensaje ante Meta',
          'Segmentación de tu base de contactos por interés',
          'Campañas de promociones, novedades y recordatorios',
          'Gestión del consentimiento (opt-in) y las bajas',
          'Integración con ChatMantis para las respuestas',
          'Métricas de entrega, lectura y respuesta',
          'Buenas prácticas para no saturar ni molestar a tu cliente',
        ],
      },
      {
        type: 'prose',
        h2: 'La diferencia entre una promoción y un bloqueo',
        paragraphs: [
          'WhatsApp tiene tasas de apertura que ningún otro canal alcanza: la gente sí lee sus mensajes. Eso lo hace tentador y peligroso a la vez, porque usado mal, satura al cliente y activa las alarmas de Meta.',
          'La clave está en dos cosas: <strong>usar la API oficial</strong> y <strong>enviar solo a quien aceptó recibir</strong>. Las plantillas se aprueban previamente, los envíos respetan las reglas de Meta y cada contacto puede darse de baja. Así el canal se mantiene sano y tu número, seguro.',
          'Y como las respuestas caen en <a href="/saas/chatmantis/">ChatMantis</a>, la conversación que abre una campaña la puede atender un asistente de IA o tu equipo, sin que un mensaje se quede sin respuesta.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Es legal el WhatsApp masivo?', a: 'Sí, cuando se hace por la API oficial y solo a contactos que dieron su consentimiento. Lo ilegal (y peligroso) es comprar bases de datos y enviar con apps no autorizadas: eso viola las reglas de Meta y te expone a bloqueo.' },
          { q: '¿Cuánto cuesta?', a: 'La implementación y gestión parten desde $150 al mes. Aparte, Meta cobra por conversación según el tipo y el país, y ese consumo se paga desde tu cuenta. Te armamos el estimado según tu volumen.' },
          { q: '¿Me pueden bloquear el número?', a: 'Ese es justo el riesgo que eliminamos usando la API oficial y respetando las reglas de Meta. El bloqueo le pasa a quien usa herramientas no autorizadas, no a quien opera por el canal correcto.' },
          { q: '¿Puedo mandar promociones a toda mi lista?', a: 'Solo a quienes aceptaron recibir mensajes tuyos (opt-in). Parte de nuestro trabajo es ayudarte a construir esa lista de forma correcta, que además es la que mejor responde.' },
          { q: '¿Qué es una plantilla aprobada y por qué la necesito?', a: 'Es un mensaje que Meta revisa y autoriza antes de que puedas enviarlo de forma masiva. Toda campaña que inicia una conversación (una promoción, un recordatorio) debe usar una plantilla aprobada; no puedes escribir texto libre a una lista fría. Nosotros redactamos y gestionamos la aprobación de esas plantillas ante Meta como parte del servicio.' },
          { q: '¿En qué se diferencia de mandar difusiones desde WhatsApp normal?', a: 'La lista de difusión del WhatsApp común solo llega a quien te tiene guardado como contacto, no escala y, en volumen, activa las alarmas de Meta. La API oficial de WhatsApp Business está hecha para envíos masivos con plantillas, métricas de entrega y lectura, e integración con tu CRM. Es la diferencia entre un truco casero y una herramienta de negocio.' },
          { q: '¿Cuánto cobra Meta por los mensajes?', a: 'Meta cobra por conversación iniciada, y la tarifa varía según el tipo (marketing, utilidad, servicio) y el país. Ese consumo se paga desde tu propia cuenta, aparte de nuestro fee. Te armamos un estimado según tu volumen antes de arrancar, para que no haya sorpresas.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo lanzamos una campaña por WhatsApp',
        intro: 'Hacerlo por la API oficial tiene un orden que protege tu número y respeta las reglas de Meta. Este es el proceso.',
        items: [
          { h3: '1. Verificación del número', text: 'Damos de alta tu número en la API oficial de WhatsApp Business y verificamos tu cuenta comercial. Este paso, que hacemos como Meta Verified Tech Provider, es el que blinda tu línea contra bloqueos.' },
          { h3: '2. Opt-in', text: 'Construimos o revisamos tu base de contactos que aceptaron recibir mensajes. Solo se envía a quien dio permiso: es la regla de Meta y también la lista que mejor responde.' },
          { h3: '3. Plantillas', text: 'Redactamos los mensajes y gestionamos su aprobación ante Meta. Una plantilla clara y bien categorizada se aprueba rápido y evita que la campaña se caiga por incumplir reglas.' },
          { h3: '4. Segmentación y envío', text: 'Dividimos tu base por interés para que cada grupo reciba lo relevante, no un mensaje genérico. Enviamos respetando frecuencia y horarios para no saturar ni molestar.' },
          { h3: '5. Respuestas y métricas', text: 'Las respuestas caen en <a href="/saas/chatmantis/">ChatMantis</a>, donde tu equipo o un asistente de IA las atiende. Medimos entrega, lectura y respuesta para afinar la siguiente campaña.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para qué se usa el WhatsApp masivo',
        intro: 'El canal con la tasa de apertura más alta rinde en momentos concretos. Estos son los usos que mejor funcionan.',
        items: [
          { h3: 'Promociones y ofertas', text: 'Un descuento por tiempo limitado o el lanzamiento de un producto llega y se lee casi de inmediato. Ideal para mover inventario o llenar una fecha floja, siempre con plantilla aprobada y a tu lista con opt-in.' },
          { h3: 'Recordatorios y utilidad', text: 'Confirmación de citas, avisos de pedido listo o recordatorios de pago. Son mensajes que el cliente agradece, tienen tarifa más baja en Meta y mantienen sano tu canal porque aportan valor real.' },
          { h3: 'Reactivación de clientes', text: 'Despertar a quien te compró hace meses con un motivo concreto para volver. Combinado con tu <a href="/marketing/email-marketing-panama/">email marketing</a>, cubres a quien lee correos y a quien solo abre WhatsApp.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Un canal poderoso solo si se cuida',
        paragraphs: [
          'WhatsApp tiene una tasa de lectura que ningún otro canal alcanza: la gente sí abre sus mensajes, casi siempre en minutos. Eso lo vuelve enormemente efectivo y, al mismo tiempo, delicado, porque el mismo canal que puede vender también puede quemar tu relación con el cliente si lo saturas.',
          'La disciplina está en enviar poco y bueno: mensajes relevantes, a quien dio permiso, con una salida fácil para quien ya no quiere recibir. Ese respeto no es solo cortesía; es lo que mantiene alta la calidad de tu número ante Meta y evita las alarmas que terminan en bloqueo.',
          'Por eso no vendemos "envíos ilimitados", sino campañas medidas y sostenibles. Un número de WhatsApp sano es un activo que dura años; uno quemado por spam se pierde de un día para otro, y con él, la vía por la que te escriben todos tus clientes.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'saas/chatmantis', label: 'ChatMantis' },
          { slug: 'funcionalidades/chatbots-ia-web-chatmantis-panama', label: 'Chatbot con IA' },
          { slug: 'marketing/email-marketing-panama', label: 'Email Marketing' },
        ],
      },
    ],
    cta: { h2: 'Haz campañas por WhatsApp sin riesgo', wa: 'Hola, quiero hacer campañas de WhatsApp marketing.' },
  },

  /* ---------- AUTOMATIZACIONES n8n ---------- */
  {
    slug: 'marketing/automatizaciones-n8n-panama',
    parent,
    title: 'Automatizaciones con n8n en Panamá | Conecta tus Herramientas',
    description: 'Automatizaciones de marketing y ventas con n8n en Panamá: conectamos tus herramientas para eliminar el trabajo manual repetitivo. Flujos a tu medida.',
    h1: 'Automatizaciones con n8n',
    breadcrumb: 'Automatizaciones (n8n)',
    heroImage: { src: 'https://picsum.photos/seed/automatizacion-flujos-n8n-panama/1200/675', alt: 'Diagrama de flujo de automatización conectando varias aplicaciones' },
    service: { type: 'Automatización de procesos con n8n' },
    lead: [
      'Si alguien de tu equipo copia datos de un formulario al CRM, del CRM a una hoja de cálculo y de ahí a WhatsApp, ese proceso es una automatización esperando a existir.',
      'Con n8n conectamos las herramientas que ya usas para que se hablen entre sí, sin intervención humana. Es el pegamento invisible entre tu web, tu marketing y tus ventas: lo que hace que un lead se registre, se etiquete, se le escriba y se le dé seguimiento, solo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué podemos automatizar',
        // ⚠️ Precio propuesto: cotización por flujo, desde $300 por automatización. Confirmar.
        intro: 'Se cotiza por flujo, desde $300 por automatización según la complejidad. La mayoría se paga sola en horas ahorradas.',
        items: [
          'Lead de tu web o pauta directo a tu CRM, etiquetado y asignado',
          'Mensaje de bienvenida automático por WhatsApp o correo',
          'Sincronización entre tu tienda, tu contabilidad y tu inventario',
          'Notificaciones a tu equipo cuando algo requiere atención',
          'Reportes automáticos que llegan solos cada semana',
          'Respaldo y archivo de datos entre plataformas',
          'Conexión de formularios, pagos y calendarios',
          'Flujos a medida para tu proceso específico',
        ],
      },
      {
        type: 'prose',
        h2: 'Por qué n8n y no otra herramienta',
        paragraphs: [
          'Herramientas como Zapier cobran por cada tarea ejecutada, y en volumen se vuelven caras. <strong>n8n se puede alojar en tu propia infraestructura</strong>, sin límite de ejecuciones y con tus datos bajo tu control, no en el servidor de un tercero.',
          'Además permite lógica más avanzada: condiciones, ramificaciones y conexión con casi cualquier servicio que tenga API. Para un negocio que crece, es la diferencia entre una automatización de juguete y una que sostiene la operación real.',
          'Empezamos por el proceso que más horas te consume y menos criterio requiere. Esa primera automatización libera tiempo real y financia las siguientes. Es la misma disciplina con la que operamos <a href="/saas/">nuestros propios SaaS</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta una automatización?', a: 'Se cotiza por flujo, desde $300 por automatización según la complejidad. Un flujo sencillo entre dos herramientas parte de ahí; uno con varias condiciones e integraciones toma más. Lo dimensionamos antes de empezar.' },
          { q: '¿Vale la pena automatizar mi caso?', a: 'La cuenta es simple: multiplica las horas semanales que consume la tarea manual por el año. Si automatizarla se paga en meses, casi siempre conviene, sin contar la reducción de errores.' },
          { q: '¿Necesito cambiar las herramientas que ya uso?', a: 'No necesariamente. n8n se construye encima de lo que ya tienes, conectándolo. Cambiar de herramienta es una decisión aparte.' },
          { q: '¿Qué pasa si una herramienta falla?', a: 'Diseñamos los flujos con reintentos y alertas: si un servicio se cae, la tarea se reintenta o te avisa, en lugar de perderse en silencio.' },
          { q: '¿n8n conecta con las herramientas que uso en Panamá?', a: 'Casi siempre sí. n8n se integra con cientos de servicios listos (Google Sheets, WhatsApp, Gmail, Stripe, tu CRM) y, cuando una herramienta no tiene conector directo pero ofrece una API, la conectamos igual. Si algo no expone API, buscamos el punto intermedio: un formulario, un correo o un webhook que sí podamos enganchar.' },
          { q: '¿Necesito conocimientos técnicos para usar las automatizaciones?', a: 'No. Nosotros diseñamos, montamos y mantenemos los flujos; tú solo ves el resultado: el lead que ya llegó a tu CRM etiquetado, el reporte que apareció solo en tu correo. Si en algún momento quieres entender o ajustar algo, te explicamos cómo funciona sin tecnicismos.' },
          { q: '¿Las automatizaciones reemplazan a mi equipo?', a: 'No lo reemplazan, lo liberan. La idea es quitarle a tu gente las tareas repetitivas y sin criterio (copiar datos, reenviar avisos) para que dedique su tiempo a lo que sí requiere una persona: vender, atender y decidir. Menos trabajo mecánico, menos errores y el mismo equipo rindiendo más.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo implementamos una automatización',
        intro: 'No automatizamos todo de golpe. Empezamos por donde más duele y crecemos desde ahí. Este es el proceso.',
        items: [
          { h3: '1. Mapa del proceso', text: 'Dibujamos el flujo manual tal como ocurre hoy: quién copia qué, de dónde a dónde y cuántas veces. Ver el proceso completo revela dónde están las horas perdidas y los errores.' },
          { h3: '2. Priorización', text: 'Elegimos el flujo que más tiempo consume y menos criterio humano requiere. Esa primera automatización libera horas reales rápido y financia las siguientes.' },
          { h3: '3. Construcción en n8n', text: 'Montamos el flujo conectando tus herramientas actuales, con la lógica que haga falta: condiciones, ramificaciones y filtros. No cambiamos lo que ya usas, lo conectamos.' },
          { h3: '4. Pruebas y control de errores', text: 'Probamos con datos reales y añadimos reintentos y alertas: si un servicio se cae, la tarea se reintenta o te avisa, en lugar de perderse en silencio.' },
          { h3: '5. Puesta en marcha y ajuste', text: 'Dejamos el flujo trabajando solo y lo afinamos con el uso. Cuando ese proceso ya corre sin fricción, pasamos al siguiente candidato.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Automatizaciones que más se piden',
        intro: 'Casi todo proceso repetitivo es candidato, pero estos son los que más retorno dejan en la práctica.',
        items: [
          { h3: 'Captura y seguimiento de leads', text: 'El interesado que llega de tu web o de tu <a href="/marketing/google-ads-panama/">pauta</a> entra solo a tu CRM, se etiqueta, se le asigna un vendedor y recibe un mensaje de bienvenida. Cero leads perdidos por olvido o demora.' },
          { h3: 'Sincronización de datos', text: 'Tu <a href="/servicios/tiendas-online-ecommerce-panama/">tienda en línea</a>, tu inventario y tu contabilidad hablando entre sí. Se acabó copiar pedidos a mano de un sistema a otro, con los errores que eso arrastra.' },
          { h3: 'Reportes y avisos', text: 'Los números que revisas cada lunes llegan solos a tu correo, y tu equipo recibe una alerta justo cuando algo requiere atención. Menos tiempo armando reportes, más tiempo actuando sobre ellos.' },
        ],
      },
      {
        type: 'prose',
        h2: 'El pegamento invisible de tu marketing y tus ventas',
        paragraphs: [
          'Cada herramienta que usas (tu web, tu CRM, tu correo, tu WhatsApp) es una isla que hace bien lo suyo, pero que no habla con las demás. El resultado es una persona de tu equipo copiando datos de una a otra todo el día, un trabajo mecánico, caro y propenso a errores.',
          'Las automatizaciones con n8n son los puentes entre esas islas. Hacen que un lead de tu pauta entre a tu CRM, dispare un correo de <a href="/marketing/email-marketing-panama/">bienvenida</a>, avise a tu vendedor y quede listo para seguimiento, todo sin que nadie mueva un dedo. Es la infraestructura silenciosa que hace que el resto del marketing rinda de verdad.',
          'Es la misma disciplina con la que operamos <a href="/saas/">nuestros propios SaaS</a>: automatizar lo repetitivo para que las personas se dediquen a lo que solo las personas pueden hacer. Empezamos pequeño, medimos las horas ahorradas y crecemos sobre resultados, no sobre promesas.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/email-marketing-panama', label: 'Email Marketing' },
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a Medida' },
        ],
      },
    ],
    cta: { h2: 'Automatiza lo repetitivo', wa: 'Hola, quiero automatizar procesos con n8n.' },
  },
];
