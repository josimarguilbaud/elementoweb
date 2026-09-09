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
        type: 'prose',
        h2: 'Búsqueda, Display y Performance Max: cuál sirve para qué',
        paragraphs: [
          'Google no vende un solo producto publicitario y confundirlos es la causa más común de presupuesto quemado en Panamá.',
          'Las campañas de <strong>búsqueda</strong> muestran tu anuncio a quien ya está buscando lo que vendes. Es la que casi siempre conviene empezar, porque la intención de compra ya existe: alguien que escribe "plomero urgente Panamá" quiere un plomero ahora.',
          'Las de <strong>Display</strong> ponen banners en sitios de terceros a gente que no te estaba buscando. Sirven para recordar a quien ya te visitó, y son terribles como primera campaña: mucho clic barato, casi ninguna venta.',
          '<strong>Performance Max</strong> mezcla todos los canales y decide sola dónde gastar. Rinde cuando ya hay historial de conversiones que le enseñen qué buscar; arrancar con ella sin datos es entregarle el presupuesto a un sistema que todavía no sabe qué es un buen cliente para ti.',
          '<strong>Regla corta:</strong> empieza en búsqueda, suma remarketing en Display cuando ya tengas visitas, y considera Performance Max solo cuando la cuenta tenga conversiones medidas de forma fiable.',
        ],
      },
      {
        type: 'prose',
        h2: 'Las palabras negativas son la mitad del trabajo',
        paragraphs: [
          'Google no solo muestra tu anuncio en la palabra exacta que elegiste: lo muestra en búsquedas que considera relacionadas. Ahí es donde se va el dinero sin que nadie lo note.',
          'Un ejemplo real del rubro: una empresa que vende "diseño web" termina pagando clics por "diseño web gratis", "curso de diseño web", "diseño web empleo" y "diseño de uñas". Cada uno de esos clics cuesta lo mismo que uno bueno y no puede convertir jamás.',
          'La lista de palabras negativas —los términos donde tu anuncio NO debe aparecer— es lo que corta esa fuga. Se arma revisando el informe de términos de búsqueda reales cada semana al principio, y se sigue puliendo mientras la campaña vive.',
          '<strong>Es el trabajo menos vistoso y el que más ahorra.</strong> Una cuenta sin negativas suele estar desperdiciando entre un cuarto y un tercio del presupuesto en búsquedas que nunca iban a comprar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo Google Ads no es tu mejor inversión',
        paragraphs: [
          'Hay negocios donde pagar por búsqueda es tirar dinero, y conviene saberlo antes de empezar.',
          'Si tu producto no se busca porque la gente no sabe que existe, no hay demanda que capturar: ahí funciona mejor Meta, que muestra a quien no te estaba buscando. Si tu margen por venta es muy bajo y tu ticket también, el costo por clic se come la ganancia antes de la primera venta.',
          'Y si el destino del anuncio es malo —una portada genérica en vez de una <a href="/servicios/landing-pages-alta-conversion-panama/">landing</a>, o un sitio lento en celular— la campaña va a fallar sin importar cuán bien esté armada. Arreglar el destino antes de pautar suele multiplicar el resultado sin subir el presupuesto.',
          'También hay un piso práctico de presupuesto: con muy poca inversión diaria la campaña no acumula datos suficientes para optimizarse, y termina siendo un experimento caro sin conclusión. <strong>Es más honesto no empezar que empezar con la mitad de lo necesario.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: costo por venta, no costo por clic',
        paragraphs: [
          'El costo por clic es la métrica que más se mira y la que menos importa. Un clic barato que nunca compra es más caro que uno caro que compra.',
          'Lo que hay que medir es la cadena completa: clics, conversiones y de esas conversiones cuántas terminaron en venta real. Ese último eslabón casi nunca está conectado, y sin él se optimiza hacia el lead barato en vez de hacia el cliente rentable.',
          'El segundo corte es por término de búsqueda, no por campaña. Dentro de una misma campaña suele haber tres o cuatro búsquedas que traen casi todo el negocio y una docena que solo consumen. Ese detalle es donde está la optimización real.',
          'Y el presupuesto perdido: cuánto se gastó en términos que después se agregaron como negativos. Puesto en dólares al mes, es el número que más rápido justifica la gestión profesional de una cuenta.',
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
                  { q: '¿Con qué tipo de campaña de Google debo empezar?', a: 'Con búsqueda, casi siempre. Es la única donde la intención de compra ya existe: quien escribe "plomero urgente Panamá" quiere un plomero ahora. Display sirve para recordar a quien ya te visitó, y Performance Max solo rinde cuando la cuenta ya tiene conversiones medidas.' },
          { q: '¿Por qué mi campaña gasta y no vende?', a: 'La causa más común son las palabras negativas ausentes. Google muestra tu anuncio en búsquedas que considera relacionadas: quien vende diseño web termina pagando por "diseño web gratis", "curso de diseño web" y hasta "diseño de uñas". Una cuenta sin negativas suele desperdiciar entre un cuarto y un tercio del presupuesto.' },
          { q: '¿Cuándo NO conviene Google Ads?', a: 'Si tu producto no se busca porque nadie sabe que existe, no hay demanda que capturar y funciona mejor Meta. Si el margen y el ticket son muy bajos, el costo por clic se come la ganancia. Y si el destino del anuncio es lento o genérico, la campaña falla por bien armada que esté.' },
          { q: '¿Qué métrica debo mirar?', a: 'El costo por venta, no el costo por clic. Un clic barato que nunca compra es más caro que uno caro que sí. Y el corte por término de búsqueda, no por campaña: dentro de una campaña suele haber tres o cuatro búsquedas que traen casi todo el negocio.' },
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
        type: 'prose',
        h2: 'Por qué te rechazan anuncios, y qué hacer',
        paragraphs: [
          'El rechazo de anuncios es la frustración número uno de quien pauta en Meta, y casi siempre tiene causas concretas y evitables.',
          'Las categorías restringidas son la primera: salud, estética, finanzas, empleo y vivienda tienen reglas especiales. En estética, por ejemplo, los antes y después demasiado explícitos y las promesas de resultado se rechazan de forma sistemática.',
          'La segunda causa es más sutil y sorprende a mucha gente: los textos que señalan una característica personal del usuario. "¿Tienes sobrepeso?" o "¿Sufres de calvicie?" violan la política porque implican que la plataforma sabe algo personal de quien lo lee. La misma idea escrita en primera persona —"baja de peso con…"— sí pasa.',
          '<strong>Y una cuenta con rechazos repetidos termina limitada</strong>, lo que deja la captación en cero de un día para otro. Por eso conviene no depender solo de la pauta: el tráfico orgánico de tu web no lo puede rechazar nadie.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto presupuesto hace falta para que Meta aprenda',
        paragraphs: [
          'Meta optimiza automáticamente, pero necesita datos para hacerlo. Una campaña con muy poco presupuesto diario nunca sale de la fase de aprendizaje y por tanto nunca rinde a su potencial.',
          'La lógica es simple: el sistema necesita acumular una cantidad razonable de conversiones por semana para identificar patrones. Con un presupuesto que solo genera dos o tres conversiones semanales, no hay patrón que encontrar y el rendimiento se queda plano.',
          'Eso lleva a una recomendación incómoda pero honesta: <strong>es mejor concentrar todo el presupuesto en una campaña bien armada que repartirlo entre cinco</strong>. Cinco campañas pequeñas es cinco veces la misma fase de aprendizaje sin completar.',
          'Y hay un piso por debajo del cual conviene no empezar: si el presupuesto disponible no permite sostener varias semanas de prueba, el dinero rinde más arreglando el destino del anuncio o trabajando el orgánico primero.',
        ],
      },
      {
        type: 'prose',
        h2: 'El creativo se agota, y eso no es un error tuyo',
        paragraphs: [
          'Toda campaña de Meta que funciona termina bajando su rendimiento. No es que se rompa: es que la audiencia ya vio ese anuncio demasiadas veces y deja de reaccionar.',
          'La señal es reconocible: el costo por resultado sube de forma sostenida sin que se haya cambiado nada. Cuando eso pasa, subirle presupuesto lo empeora, porque significa mostrar aún más el anuncio que ya cansó.',
          'Lo que funciona es rotar creativos antes de que se agoten, no después. Tener tres o cuatro variantes en circulación y sumar una nueva de forma regular mantiene el costo estable, y de paso te dice qué tipo de creativo funciona con tu audiencia.',
          '<strong>Por eso el creativo pesa más que la segmentación en Meta hoy.</strong> La plataforma ya sabe a quién mostrarle; lo que no puede hacer es inventar el anuncio que le va a interesar.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: costo por resultado y frecuencia',
        paragraphs: [
          'El costo por resultado es la métrica base: cuánto pagas por cada acción que te importa, sea un mensaje, un lead o una venta.',
          'La segunda, y la que casi nadie mira, es la <strong>frecuencia</strong>: cuántas veces la misma persona vio tu anuncio. Cuando esa cifra sube y el costo por resultado sube con ella, el problema no es la segmentación ni el presupuesto: es que el creativo se agotó y toca rotarlo.',
          'El tercero es la calidad del resultado. Meta es muy bueno consiguiendo mensajes baratos, y muchos de esos mensajes no compran. Si el costo por mensaje baja mientras el costo por venta sube, la campaña está optimizando hacia la métrica equivocada.',
          'Por eso medimos hasta donde el negocio pueda seguir el rastro, y no solo hasta el clic. <strong>Sin ese último eslabón, optimizar en Meta es optimizar hacia el ruido barato.</strong>',
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
                  { q: '¿Por qué me rechazan los anuncios en Meta?', a: 'Por categorías restringidas —salud, estética, finanzas, empleo, vivienda— o por textos que señalan una característica personal del usuario. "¿Tienes sobrepeso?" viola la política; "baja de peso con…" sí pasa. Los rechazos repetidos terminan limitando la cuenta.' },
          { q: '¿Cuánto presupuesto necesito en Meta?', a: 'El suficiente para que la campaña salga de la fase de aprendizaje, que requiere acumular conversiones cada semana. Por eso conviene concentrar el presupuesto en una campaña bien armada en vez de repartirlo entre cinco: cinco campañas pequeñas es cinco veces el mismo aprendizaje sin completar.' },
          { q: '¿Por qué mi campaña funcionaba y dejó de funcionar?', a: 'Casi siempre porque el creativo se agotó: la audiencia ya lo vio demasiadas veces. La señal es que el costo por resultado sube sin haber cambiado nada. Subirle presupuesto lo empeora. Se resuelve rotando creativos antes de que se agoten, no después.' },
          { q: '¿Qué métrica me avisa de que algo va mal?', a: 'La frecuencia, que casi nadie mira: cuántas veces la misma persona vio tu anuncio. Si sube junto con el costo por resultado, el problema es el creativo agotado, no la segmentación ni el presupuesto.' },
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
        type: 'prose',
        h2: 'Cuánto contenido hace falta de verdad',
        paragraphs: [
          'La respuesta que circula —publicar todos los días— es la razón por la que la mayoría de las cuentas de negocio en Panamá se abandonan a los dos meses.',
          'La constancia importa más que la frecuencia. Tres publicaciones semanales sostenidas durante un año rinden muchísimo más que publicaciones diarias durante seis semanas seguidas de tres meses de silencio. El algoritmo penaliza el abandono más de lo que premia el volumen.',
          'Y no todo el contenido cuesta lo mismo de producir. Un Reel bien hecho toma tiempo; una foto de producto con buen texto, mucho menos. Una mezcla realista —un par de piezas de esfuerzo al mes y el resto ligero— es lo que se sostiene sin equipo dedicado.',
          '<strong>La pregunta correcta no es cuánto publicar, sino cuánto puedes sostener doce meses seguidos.</strong> Ese número, sea el que sea, es tu frecuencia.',
        ],
      },
      {
        type: 'prose',
        h2: 'El contenido que caduca y el que sigue trabajando',
        paragraphs: [
          'Una publicación de redes vive horas. Un artículo en tu web vive años. Casi todos los negocios invierten en el primero y descuidan el segundo, y por eso sienten que empiezan de cero cada semana.',
          'El contenido de redes es de alcance: sirve para que te descubran y para mantenerte presente. Pero muere rápido y no lo controlas: la cuenta no es tuya, el alcance lo decide otro y una suspensión te deja sin nada.',
          'El contenido de tu web es de captación: sigue apareciendo en búsquedas meses o años después, sin pagar por alcance. Es más lento de arrancar y no se apaga.',
          'La forma eficiente de trabajar los dos es que se alimenten. <strong>Un artículo de la web da material para cinco publicaciones</strong>, y esas publicaciones mandan tráfico al artículo. Lo trabajamos junto, no como dos servicios separados.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo NO conviene invertir en redes',
        paragraphs: [
          'Hay negocios donde el esfuerzo en redes rinde poco, y decirlo antes evita gastar meses en el canal equivocado.',
          'Si vendes a otras empresas un servicio técnico y especializado, tu comprador no te va a encontrar en Instagram: te busca en Google cuando tiene el problema. Ahí el contenido de la web y el SEO rinden mucho más que el contenido social.',
          'Si tu producto se compra por urgencia —un plomero, un cerrajero, una grúa— la búsqueda es el canal, no el descubrimiento. Nadie se acuerda de una cuenta bonita cuando tiene una tubería rota.',
          'Y si no hay quién sostenga la producción, es mejor no empezar: una cuenta abandonada comunica peor que no tener cuenta. <strong>Un perfil con la última publicación de hace ocho meses le dice al cliente que quizá el negocio también cerró.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: qué hizo la gente, no cuántos te siguen',
        paragraphs: [
          'El número de seguidores es la métrica más visible y la menos útil. Se puede comprar, se puede inflar y no paga nada.',
          'Lo que hay que medir es qué pasó después de ver el contenido: cuántos entraron al perfil, cuántos hicieron clic al enlace, cuántos escribieron por mensaje directo. Ese último es el que más se parece a una venta en Panamá, donde casi todo se cierra por conversación.',
          'El segundo corte es qué tipo de contenido genera esas acciones. Suele haber un formato que produce la mayoría de los mensajes, y descubrirlo cambia la producción entera del mes siguiente. Sin medirlo, se publica por costumbre.',
          'Y cuánto tráfico de tu web viene de redes, que es lo que dice si el canal está alimentando al activo que sí es tuyo. <strong>Si las redes crecen y tu web no recibe nada de ellas, estás construyendo en terreno prestado.</strong>',
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
                  { q: '¿Cada cuánto debo publicar?', a: 'Lo que puedas sostener doce meses seguidos. Tres publicaciones semanales durante un año rinden más que publicaciones diarias durante seis semanas y luego tres meses de silencio: el algoritmo penaliza el abandono más de lo que premia el volumen.' },
          { q: '¿Qué diferencia hay entre contenido de redes y contenido de web?', a: 'El de redes vive horas y sirve para que te descubran, pero no lo controlas: la cuenta no es tuya. El de tu web sigue apareciendo en búsquedas años después sin pagar alcance. Lo eficiente es que se alimenten: un artículo da material para cinco publicaciones.' },
          { q: '¿Cuándo NO conviene invertir en redes sociales?', a: 'Si vendes a empresas un servicio técnico, tu comprador te busca en Google cuando tiene el problema, no en Instagram. Si tu producto se compra por urgencia, la búsqueda es el canal. Y si no hay quién sostenga la producción, mejor no empezar: una cuenta abandonada comunica peor que no tener cuenta.' },
          { q: '¿Qué mido si no son los seguidores?', a: 'Qué hizo la gente: entradas al perfil, clics al enlace y mensajes directos, que es lo que más se parece a una venta en Panamá. Y cuánto tráfico llega a tu web desde redes: si crecen y tu web no recibe nada, estás construyendo en terreno prestado.' },
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
        type: 'prose',
        h2: 'Por qué tus correos caen en spam, y cómo se arregla',
        paragraphs: [
          'Es el problema más común y el peor entendido. Que un correo llegue a la bandeja de entrada no depende de lo que escribas: depende sobre todo de tres registros técnicos en tu dominio.',
          'Son <strong>SPF, DKIM y DMARC</strong>. En resumen, le dicen al servidor que recibe el correo que tu plataforma de envío tiene permiso para enviar en nombre de tu dominio, que el mensaje no fue alterado, y qué hacer si algo no cuadra. Sin ellos, Gmail y Outlook desconfían por defecto.',
          'Desde 2024 los grandes proveedores endurecieron esto: quien envía volumen sin autenticación configurada, sencillamente no entra. Muchos negocios en Panamá descubren el problema cuando su campaña tiene una tasa de apertura ridícula y culpan al contenido.',
          '<strong>Es lo primero que revisamos, antes de escribir una sola línea de un correo.</strong> Configurarlo es un trabajo de una vez y sin él todo lo demás es inútil.',
        ],
      },
      {
        type: 'prose',
        h2: 'La lista comprada no funciona, y además te quema el dominio',
        paragraphs: [
          'Aparece siempre la misma propuesta: comprar una base de miles de correos de empresas panameñas. Es tentador y es la forma más rápida de destruir la reputación de tu dominio.',
          'El mecanismo es este: esa gente no te conoce, así que marca tu correo como spam. Los proveedores registran esa señal y empiezan a mandar todos tus correos a la carpeta de spam, incluidos los que van a tus clientes reales. El daño no se limita a la campaña: afecta a tu dominio entero, incluidos los correos que escribes uno a uno.',
          'Recuperar la reputación de un dominio quemado toma meses de envíos limpios y no siempre se logra del todo. Es de los pocos errores de marketing digital que dejan cicatriz.',
          'Lo que sí funciona es construir lista propia, más lenta pero tuya: un motivo real para suscribirse, permiso explícito y contenido que valga la pena abrir. <strong>Mil suscriptores que te dieron permiso rinden más que cincuenta mil comprados</strong>, y no ponen en riesgo tu correo de trabajo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Los tres envíos automáticos que pagan el servicio solos',
        paragraphs: [
          'El email marketing tiene fama de trabajoso porque se piensa como boletín mensual. La parte que de verdad rinde no es esa: son unos pocos correos automáticos que se escriben una vez y trabajan solos durante años.',
          'El primero es la <strong>bienvenida</strong>: el correo que se envía justo cuando alguien se suscribe. Es el momento de mayor interés de toda la relación y casi nadie lo aprovecha.',
          'El segundo es el <strong>carrito abandonado</strong>, si vendes en línea. Recupera ventas que ya estaban prácticamente hechas y es, de lejos, el correo con mejor retorno del comercio electrónico.',
          'El tercero es la <strong>reactivación</strong>: una secuencia para quien hace meses no te compra ni abre nada. Recuperar a alguien que ya te conoce es más barato que conseguir un cliente nuevo, y esa lista dormida suele ser más grande de lo que el negocio cree.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: entregas antes que aperturas',
        paragraphs: [
          'La tasa de apertura es la métrica más citada y hoy es la menos fiable: las protecciones de privacidad de Apple y otros clientes de correo marcan aperturas que no ocurrieron. Sirve para comparar campañas entre sí, no como número absoluto.',
          'Lo que hay que mirar primero es la <strong>entregabilidad</strong>: qué porcentaje de tus correos llegó realmente a la bandeja, cuántos rebotaron y cuántas quejas de spam hubo. Si eso está mal, ninguna otra métrica significa nada.',
          'Después, los clics y qué se hizo tras el clic. Un correo con muchas aperturas y ningún clic no está fallando en el asunto: está fallando en lo que promete adentro.',
          'Y la evolución de la lista: cuántos entran y cuántos se dan de baja al mes. <strong>Una lista que crece pero pierde suscriptores más rápido de lo que suma está muriendo despacio</strong>, aunque el número total todavía se vea bien.',
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
                  { q: '¿Por qué mis correos caen en spam?', a: 'Casi siempre por falta de SPF, DKIM y DMARC en tu dominio: los registros que autorizan a tu plataforma a enviar en tu nombre. Desde 2024 los grandes proveedores endurecieron esto y quien envía volumen sin autenticación no entra. Se configura una vez y sin eso lo demás es inútil.' },
          { q: '¿Puedo comprar una base de correos?', a: 'Es la forma más rápida de quemar tu dominio. Esa gente no te conoce, te marca como spam, y los proveedores empiezan a mandar a spam todos tus correos, incluidos los que escribes uno a uno a tus clientes. Recuperarse toma meses y no siempre se logra.' },
          { q: '¿Qué correos automáticos dan más retorno?', a: 'Tres: la bienvenida, que llega en el momento de mayor interés y casi nadie aprovecha; el carrito abandonado, el de mejor retorno del comercio electrónico; y la reactivación de quien hace meses no compra, que suele ser una lista más grande de lo que el negocio cree.' },
          { q: '¿Sirve mirar la tasa de apertura?', a: 'Solo para comparar campañas entre sí. Las protecciones de privacidad marcan aperturas que no ocurrieron, así que como número absoluto engaña. Primero hay que mirar la entregabilidad: cuánto llegó de verdad, cuánto rebotó y cuántas quejas de spam hubo.' },
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
        type: 'prose',
        h2: 'API oficial o aplicación no oficial: la decisión que evita el bloqueo',
        paragraphs: [
          'Existen dos formas de hacer envíos masivos por WhatsApp y solo una no pone en riesgo tu número.',
          'Las <strong>aplicaciones no oficiales</strong> —esas que prometen enviar a mil contactos desde tu celular— funcionan conectándose a WhatsApp de una forma que la plataforma prohíbe expresamente. Son baratas, funcionan un tiempo, y terminan con el número bloqueado. Cuando ese número es el que usa tu negocio para vender, el daño no es la campaña: es quedarte sin canal de ventas de un día para otro.',
          'La <strong>API oficial de WhatsApp Business</strong> es el camino permitido. Tiene reglas: los mensajes promocionales deben usar plantillas aprobadas previamente, hace falta consentimiento del destinatario, y cada envío tiene un costo. A cambio, tu número no corre riesgo y el volumen es legítimo.',
          '<strong>La regla es simple:</strong> si el número que vas a usar es el de tu negocio, no existe la opción barata. El ahorro de la app no oficial se paga con el activo más valioso que tienes en el canal.',
        ],
      },
      {
        type: 'prose',
        h2: 'La ventana de 24 horas y por qué existen las plantillas',
        paragraphs: [
          'WhatsApp separa dos situaciones y entenderlo explica casi todas las reglas del canal.',
          'Cuando un cliente te escribe, se abre una <strong>ventana de 24 horas</strong> en la que puedes responderle lo que quieras, con el texto que quieras y sin costo por mensaje. Es una conversación normal.',
          'Fuera de esa ventana, o cuando tú inicias el contacto, solo puedes enviar <strong>plantillas aprobadas</strong>: mensajes cuyo texto fue revisado por Meta de antemano. No se puede improvisar, y cada envío tiene costo.',
          'De ahí sale la estrategia que funciona: usar la plantilla para abrir la conversación y resolver la venta dentro de la ventana. Y por eso importa que las plantillas estén bien redactadas y aprobadas antes de la campaña, no el mismo día. <strong>Una plantilla rechazada a último momento deja la campaña sin salida.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'El consentimiento no es un trámite: es lo que evita el reporte',
        paragraphs: [
          'La diferencia entre una campaña que vende y una que quema tu número casi nunca está en el mensaje: está en a quién se lo mandas.',
          'WhatsApp exige consentimiento previo, y la razón es práctica antes que legal: cuando alguien recibe un mensaje que no pidió, lo reporta. Suficientes reportes y el número queda restringido o bloqueado, sin importar cuán bueno fuera el contenido.',
          'El consentimiento válido es explícito y verificable: una casilla en tu formulario, un mensaje del propio cliente pidiendo información, una compra donde se indicó que se le escribiría. Una lista de teléfonos de clientes antiguos que nunca dieron permiso no es una lista de opt-in, por más que sean clientes reales.',
          'Y hay que dejar salir con facilidad. <strong>Un cliente que puede darse de baja con una palabra no te reporta</strong>, y esa baja cuesta infinitamente menos que un número restringido. Los datos de esos contactos, además, son datos personales bajo la Ley 81 de 2019.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: respuestas, no entregas',
        paragraphs: [
          'En WhatsApp la métrica de entrega dice poco, porque casi todo se entrega. Lo que importa es qué pasó después.',
          'El número central es la <strong>tasa de respuesta</strong>: cuántos de los que recibieron la plantilla contestaron algo. Es la que dice si el mensaje conectó, y es muchísimo más alta que en cualquier otro canal, lo que también significa que el mal uso se nota más rápido.',
          'El segundo es la tasa de bajas y reportes. Es la señal temprana de que la lista o el mensaje están mal, y hay que vigilarla campaña a campaña, no al final del trimestre: para cuando el número está restringido, ya es tarde.',
          'Y el costo por conversación iniciada frente al valor de lo que se vendió en ella. WhatsApp cobra por conversación, así que ese cálculo se puede hacer con precisión y es el que dice si el canal está rindiendo.',
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
                  { q: '¿Puedo usar una app para enviar masivos desde mi celular?', a: 'Puedes, y terminas con el número bloqueado. Esas apps se conectan de una forma que WhatsApp prohíbe. Si el número es el que usa tu negocio para vender, el ahorro se paga quedándote sin canal de ventas de un día para otro.' },
          { q: '¿Qué es la ventana de 24 horas?', a: 'Cuando un cliente te escribe, se abre una ventana de 24 horas en la que puedes responderle lo que quieras sin costo por mensaje. Fuera de ella, o cuando tú inicias, solo puedes enviar plantillas aprobadas previamente por Meta y cada envío tiene costo.' },
          { q: '¿Sirve mi lista de clientes antiguos para una campaña?', a: 'Solo si dieron permiso explícito. Ser cliente no es consentimiento. Cuando alguien recibe un mensaje que no pidió, lo reporta, y suficientes reportes restringen el número por bueno que fuera el contenido.' },
          { q: '¿Qué debo vigilar durante una campaña?', a: 'La tasa de respuesta, que dice si el mensaje conectó, y la tasa de bajas y reportes, que es la señal temprana de que la lista o el mensaje están mal. Hay que mirarla campaña a campaña: cuando el número ya está restringido, es tarde.' },
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
        type: 'prose',
        h2: 'Qué NO conviene automatizar',
        paragraphs: [
          'Automatizar lo que no toca es la forma más rápida de que un proyecto de automatización se abandone a los tres meses.',
          'No conviene automatizar un proceso que todavía cambia todas las semanas: la automatización se rompe cada vez que el proceso se mueve y termina generando más trabajo del que ahorra. Primero se estabiliza el proceso a mano, después se automatiza.',
          'Tampoco conviene automatizar decisiones que requieren criterio. Aprobar un descuento, atender un reclamo delicado o decidir si un cliente es viable son cosas donde el error automático cuesta más que el tiempo humano que ahorra.',
          'Y no conviene automatizar algo que ocurre tres veces al mes. La cuenta es simple: si el proceso toma diez minutos y ocurre tres veces al mes, son treinta minutos; montar y mantener la automatización cuesta más que eso. <strong>La automatización rinde en lo repetitivo y aburrido, no en lo importante y ocasional.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Toda automatización se rompe alguna vez, y hay que planearlo',
        paragraphs: [
          'Es la parte que nadie menciona al vender automatización y la que decide si el proyecto sobrevive: los flujos se rompen. Una API cambia, una contraseña expira, un servicio cae, alguien renombra una columna en la hoja de cálculo.',
          'Lo grave no es que se rompa: es que se rompa en silencio. Un flujo que dejó de mandar los leads al CRM y nadie se enteró significa dos semanas de contactos perdidos que ya no se recuperan.',
          'Por eso lo primero que montamos no es el flujo: es el aviso de fallo. Si algo se cae, alguien se entera el mismo día por WhatsApp o correo, con el detalle de qué paso falló. Suena básico y es lo que separa una automatización que se puede confiar de una que hay que revisar a mano cada lunes.',
          'También importa que quede documentado: qué hace cada flujo, qué lo dispara y a qué se conecta. <strong>Una automatización que solo entiende quien la montó es una dependencia, no una mejora.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: 'Dónde vive n8n y qué cuesta de verdad',
        paragraphs: [
          'n8n se puede usar de dos maneras y la diferencia de costo es grande, sobre todo cuando el volumen crece.',
          'En la <strong>nube de n8n</strong> pagas una mensualidad y no te ocupas de nada. Es lo razonable para empezar o para volúmenes bajos, y el precio sube según cuántas ejecuciones tengas.',
          'En un <strong>servidor propio</strong> el costo es el del servidor, y ese costo no cambia aunque multipliques las ejecuciones. Para un negocio con automatizaciones intensivas suele salir varias veces más barato, a cambio de que alguien se ocupe de mantener y respaldar el servidor.',
          'Hay una tercera consideración que en Panamá pesa: los datos. Si tus flujos mueven información de clientes, tenerlos en tu propio servidor te da control sobre dónde vive esa información, lo que simplifica la conversación de protección de datos bajo la Ley 81 de 2019.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: horas devueltas y errores evitados',
        paragraphs: [
          'Una automatización se justifica con dos números y ninguno de los dos es técnico.',
          'El primero son las <strong>horas devueltas</strong>: cuántas veces al mes corre el flujo, multiplicado por cuánto tomaba hacerlo a mano. Puesto en horas y en dinero, es lo que dice si valió la pena, y suele sorprender hacia arriba en procesos que nadie había cronometrado.',
          'El segundo son los <strong>errores evitados</strong>. El dato que se copió mal, el lead que no se registró, el mensaje que nadie envió. Son costos invisibles porque nunca aparecen en una factura, pero un lead perdido por transcripción cuesta lo mismo que uno que nunca llegó.',
          'Y la tasa de fallo del propio flujo: cuántas ejecuciones fallaron y por qué. <strong>Si ese número no se mira, la automatización deja de ser confiable sin que nadie lo note</strong>, que es exactamente como mueren la mayoría.',
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
                  { q: '¿Qué no conviene automatizar?', a: 'Un proceso que todavía cambia cada semana, porque el flujo se rompe cada vez. Decisiones que requieren criterio, donde el error automático cuesta más que el tiempo humano. Y cualquier cosa que ocurra tres veces al mes: montarla y mantenerla cuesta más que hacerla a mano.' },
          { q: '¿Qué pasa cuando una automatización se rompe?', a: 'Se rompen todas alguna vez: una API cambia, una contraseña expira, alguien renombra una columna. Lo grave es que se rompa en silencio. Por eso lo primero que montamos es el aviso de fallo, para que alguien se entere el mismo día y no dos semanas de leads después.' },
          { q: '¿Conviene n8n en la nube o en servidor propio?', a: 'En la nube pagas mensualidad y no te ocupas de nada; el precio sube con las ejecuciones. En servidor propio el costo es fijo aunque multipliques el volumen, y además controlas dónde viven los datos de tus clientes, lo que simplifica la conversación de protección de datos.' },
          { q: '¿Cómo sé si la automatización valió la pena?', a: 'Con dos números: horas devueltas (cuántas veces corre por lo que tomaba a mano) y errores evitados (el dato mal copiado, el lead no registrado). Y la tasa de fallo del flujo: si nadie la mira, la automatización deja de ser confiable sin que se note.' },
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
          { slug: 'inteligencia-artificial-para-empresas-panama', label: 'Ecosistema de IA Empresarial' },
          { slug: 'marketing/email-marketing-panama', label: 'Email Marketing' },
          { slug: 'saas/wapycrm', label: 'WapyCRM' },
          { slug: 'tecnologias/desarrollo-web-a-medida-vue-react-panama', label: 'Desarrollo a Medida' },
        ],
      },
    ],
    cta: { h2: 'Automatiza lo repetitivo', wa: 'Hola, quiero automatizar procesos con n8n.' },
  },
];
