/* SILO CRECIMIENTO: upsells recurrentes (SEO, SEO local, mantenimiento). */
import type { PageData } from '../types';

const parent = { slug: 'crecimiento', label: 'Crecimiento' };

export const crecimiento: PageData[] = [
  /* ---------- HUB ---------- */
  {
    slug: 'crecimiento',
    title: 'Crecimiento Digital en Panamá | SEO, Google Maps y Soporte',
    description: 'Servicios de crecimiento para tu web en Panamá: posicionamiento SEO, SEO local en Google Maps y mantenimiento con hosting gestionado.',
    h1: 'Tu web se lanzó. Ahora tiene que crecer.',
    breadcrumb: 'Crecimiento',
    heroImage: { src: 'https://picsum.photos/seed/crecimiento-grafico-negocio-panama/1200/675', alt: 'Gráfico de crecimiento ascendente proyectado en una pantalla' },
    lead: [
      'Publicar el sitio es el kilómetro cero. El tráfico, las posiciones y la seguridad se construyen mes a mes, con método.',
      'Estos tres servicios sostienen la inversión que ya hiciste: el SEO trae visitas que no pagas por clic, el SEO local te pone en el mapa donde busca tu vecindario, y el mantenimiento evita que el sitio envejezca hasta romperse.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: 'Los tres motores',
        items: [
          { h3: 'SEO y posicionamiento', text: 'Contenido y autoridad para competir por las búsquedas que traen clientes, no solo visitas.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' } },
          { h3: 'SEO local y Google Maps', text: 'Aparecer en el mapa cuando buscan tu servicio cerca. Para negocios con puerta abierta, es el canal número uno.', link: { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' } },
          { h3: 'Mantenimiento y hosting', text: 'Actualizaciones, respaldos verificados y monitoreo desde $59/mes. Tu sitio no se cae ni envejece.', link: { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' } },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Necesito los tres servicios?', a: 'El mantenimiento es prácticamente obligatorio (un sitio sin actualizar termina comprometido). El SEO y el SEO local dependen de tu estrategia: si tu cliente te busca en Google, sí; si todo tu negocio entra por referidos, puedes esperar.' },
          { q: '¿Puedo contratarlos para un sitio que no hicieron ustedes?', a: 'Sí, previa auditoría técnica. Si el sitio tiene problemas de base que limitan el SEO o el mantenimiento, te lo decimos antes de facturar el primer mes.' },
          { q: '¿Hay permanencia mínima?', a: 'No. Los servicios son mensuales y cancelables. Preferimos retenerte por resultados que por contrato.' },
          { q: '¿Por dónde conviene empezar?', a: 'Casi siempre por el mantenimiento, porque protege lo que ya invertiste. Si tu negocio depende de que te encuentren en Google, arrancamos en paralelo con <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> (resultados más rápidos) y luego sumamos el <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO orgánico</a> para las búsquedas competidas.' },
          { q: '¿Reciben reportes o hay que pedirlos?', a: 'Cada servicio con componente mensual entrega un reporte que un dueño entiende: posiciones, tráfico, llamadas o estado del sitio según el caso. Nada de capturas sueltas ni jerga para justificar la factura.' },
          { q: '¿Trabajan con negocios fuera de la ciudad de Panamá?', a: 'Sí. Atendemos clientes en todo el país por WhatsApp y videollamada. Para el SEO local ajustamos la estrategia a tu zona de cobertura, sea Chitré, David, Coronado o el área metropolitana.' },
          { q: '¿Cuánto cuesta mantener y hacer crecer un sitio al mes?', a: 'El mantenimiento arranca en $59 al mes e incluye actualizaciones, respaldos y monitoreo. La infraestructura (dominio, hosting cloud y SSL) va desde $350 al año, o $225 al año en el plan compartido. El SEO se cotiza por alcance, no por paquete cerrado, porque depende de cuántas búsquedas quieras disputar. Todos los precios son en dólares y no incluyen ITBMS (7%).' },
          { q: '¿Cuándo NO vale la pena invertir en crecimiento todavía?', a: 'Cuando el sitio aún no existe o está por rehacerse: posicionar una página que vas a botar en tres meses es tirar el trabajo. Tampoco conviene si tu negocio no tiene capacidad de atender más clientes; primero se arregla la operación y después se le abre la llave al tráfico. Y si todo tu negocio entra por referidos y no piensas cambiar eso, el mantenimiento sí, el SEO puede esperar.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo arrancamos contigo',
        intro: 'Sin diagnósticos genéricos ni planes de escritorio. Primero miramos tu situación real y de ahí sale la prioridad.',
        items: [
          { h3: 'Revisamos lo que ya tienes', text: 'Tu sitio, tu ficha de Google y tu presencia actual. Detectamos qué frena el crecimiento antes de proponer nada.' },
          { h3: 'Definimos la prioridad', text: 'No todo a la vez. Ordenamos por impacto y presupuesto: qué mueve la aguja primero en tu negocio y qué puede esperar.' },
          { h3: 'Cerramos alcance por escrito', text: 'Una cotización cerrada con lo que incluye cada servicio, su precio mensual y lo que no incluye. Sin sorpresas en la factura.' },
          { h3: 'Ejecutamos y medimos', text: 'Trabajo constante mes a mes con reporte claro. Ajustamos según los números, no según corazonadas.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién es cada motor',
        intro: 'No todos los negocios necesitan lo mismo. Estas son las señales de que un servicio te conviene hoy.',
        items: [
          { h3: 'Tu cliente te googlea', text: 'Si la gente busca tu servicio en Google antes de decidir, el SEO orgánico te pone en esa conversación mes a mes sin pagar por clic.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' } },
          { h3: 'Tienes puerta abierta', text: 'Restaurantes, clínicas, talleres y locales con dirección física viven del "cerca de mí". Ahí el mapa de Google es el buscador.', link: { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' } },
          { h3: 'No quieres sustos', text: 'Si tu web factura, agenda o vende, no puede caerse ni envejecer. El mantenimiento la mantiene rápida, segura y respaldada.', link: { slug: 'crecimiento/mantenimiento-hosting-web-panama', label: 'Mantenimiento y Hosting' } },
        ],
      },
      {
        type: 'prose',
        h2: 'Crecer es sostener, no reinventar',
        paragraphs: [
          'El error más común después de lanzar una web es tratarla como un cuadro colgado: se admira un mes y se olvida. Pero una web viva compite todos los días contra la de tu competencia, que quizá sí la está trabajando. El crecimiento no es un empujón puntual, es una rutina.',
          'Por eso estos tres servicios son mensuales y no proyectos que terminan. El <strong>SEO</strong> acumula autoridad con el tiempo, el <strong>SEO local</strong> gana prominencia reseña a reseña, y el <strong>mantenimiento</strong> evita que un descuido de meses se convierta en un sitio hackeado. Todo suma cuando es constante.',
          'Si no sabes por dónde empezar, escríbenos por WhatsApp y revisamos tu caso sin compromiso. A veces la respuesta honesta es "todavía no necesitas SEO, arregla primero esto otro", y preferimos decírtelo a venderte un plan que no te va a servir. Mira también nuestros <a href="/servicios/">servicios de diseño web</a> si tu sitio aún no está a la altura.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' },
          { slug: 'blog', label: 'Blog' },
          { slug: 'servicios', label: 'Servicios de diseño web' },
          { slug: 'blog/optimizar-google-business-profile-panama', label: 'Optimizar tu ficha de Google' },
        ],
      },
    ],
  },

  /* ---------- SEO ---------- */
  {
    slug: 'crecimiento/seo-posicionamiento-web-panama',
    parent,
    title: 'SEO y Posicionamiento Web en Panamá | Tráfico que Compra',
    description: 'Posicionamiento SEO en Panamá: contenido, técnica y autoridad para aparecer en Google donde busca tu cliente. Sin promesas mágicas.',
    h1: 'Posicionamiento web en Panamá',
    breadcrumb: 'SEO y Posicionamiento',
    service: { type: 'Posicionamiento SEO' },
    lead: [
      'Cada búsqueda de tu servicio en Google es un cliente decidiendo a quién contactar. El SEO define si apareces en esa conversación.',
      'Desconfía de quien garantice la primera posición: nadie controla el algoritmo. Lo que sí se controla es el método: técnica impecable, contenido que responde búsquedas reales y autoridad construida con paciencia. Eso es lo que vendemos, con reportes que un humano entiende.',
    ],
    blocks: [
      {
        type: 'steps',
        h2: 'Cómo trabajamos el SEO',
        items: [
          { h3: 'Auditoría y keywords', text: 'Qué buscan tus clientes en Panamá, qué posiciona hoy tu sitio y contra quién compites.' },
          { h3: 'Base técnica', text: 'Velocidad, indexación, datos estructurados y arquitectura. Sin esto, el contenido rema contra corriente.' },
          { h3: 'Contenido mensual', text: 'Páginas y artículos que responden búsquedas con intención de compra, no relleno.' },
          { h3: 'Medición', text: 'Posiciones, tráfico y consultas generadas. Reporte mensual sin humo.' },
        ],
      },
      {
        type: 'prose',
        h2: 'SEO o pauta: la cuenta que importa',
        paragraphs: [
          'La pauta funciona como un grifo: pagas, hay tráfico; dejas de pagar, se acaba. El SEO funciona como un activo: cada posición ganada trae visitas todos los meses sin costo por clic.',
          'La estrategia madura usa ambos: <strong>pauta para resultados inmediatos mientras el SEO construye el activo</strong>. Con los meses, las posiciones orgánicas van reemplazando presupuesto de pauta en las búsquedas que ya dominas.',
          'En Panamá la ventana sigue abierta: la mayoría de los competidores tiene webs técnicas débiles y cero estrategia de contenido. Quien haga el trabajo serio primero, se queda con las posiciones.',
        ],
      },
            {
        type: 'prose',
        h2: 'Cuánto tarda el SEO de verdad, y por qué',
        paragraphs: [
          'Es la pregunta que más se evita responder en el rubro, y la falta de respuesta honesta es lo que hace que la mayoría abandone antes de ver resultados.',
          'El SEO no tarda por capricho: tarda porque Google necesita rastrear las páginas nuevas, evaluarlas, compararlas con lo que ya tiene posicionado y observar cómo se comporta la gente que llega. Ese ciclo toma meses, no semanas, y no se acelera pagando más.',
          'Lo que sí cambia el plazo es de dónde partes. Un dominio nuevo, sin historial y sin enlaces, tarda bastante más que uno con años y contenido existente. Una palabra clave muy competida tarda más que una específica y local. Y un sitio con problemas técnicos no avanza hasta que se arreglan, por mucho contenido que se publique encima.',
          '<strong>La expectativa realista es de meses, con señales tempranas antes que resultados.</strong> Las primeras suelen ser páginas nuevas empezando a aparecer para búsquedas largas y específicas, mucho antes de competir por las principales.',
        ],
      },
      {
        type: 'prose',
        h2: 'Lo que ningún SEO honesto te puede prometer',
        paragraphs: [
          'Si alguien te garantiza el primer lugar en Google, está vendiendo algo que no controla. Nadie fuera de Google decide ese orden, y quien lo promete o desconoce cómo funciona o cuenta con que no lo verifiques.',
          'Tampoco se puede prometer un plazo exacto. Se puede estimar con base en la competencia de las palabras y el estado del sitio, y se debe explicar en qué se basa esa estimación, pero un "en tres meses estarás primero" no tiene fundamento.',
          'Lo que sí se puede comprometer es el trabajo y sus señales: qué se va a auditar, qué se va a corregir, cuánto contenido se va a publicar, y qué métricas se van a reportar. Eso es verificable mes a mes.',
          '<strong>La señal de alarma más clara es quien no te explica qué va a hacer.</strong> Si el trabajo no se puede describir, normalmente es porque no hay trabajo o porque es de los que traen problemas: enlaces comprados, contenido generado en masa, trucos que Google termina castigando.',
        ],
      },
      {
        type: 'prose',
        h2: 'El SEO para respuestas de IA cambia qué contenido funciona',
        paragraphs: [
          'Buena parte de las búsquedas ya no terminan en un clic: terminan en un resumen generado por IA, sea en Google, en ChatGPT o en Perplexity. Eso no elimina el SEO, pero sí cambia qué tipo de contenido rinde.',
          'Un texto que da vueltas antes de responder no se cita. Lo que un motor generativo puede extraer y atribuir es una respuesta directa, cerrada y verificable: una definición clara, una comparación con criterio explícito, un número concreto, una regla de decisión.',
          'Por eso el formato de pregunta y respuesta, las comparativas con reglas y los datos concretos rinden hoy más que el artículo largo que rodea el tema. Y por eso los datos estructurados dejaron de ser un detalle técnico: son la forma de decirle a una máquina qué es cada cosa en tu página.',
          '<strong>Lo que no cambió es lo de fondo:</strong> hay que decir algo que valga la pena citar. El contenido que solo repite lo que ya está en otros diez sitios no lo cita nadie, ni una persona ni un modelo.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: posiciones no, negocio sí',
        paragraphs: [
          'La posición en Google es la métrica más pedida y la más engañosa. Varía por dispositivo, por ubicación y por historial de quien busca, así que dos personas ven cosas distintas el mismo día.',
          'Lo que hay que mirar es el tráfico orgánico y, sobre todo, qué hizo esa gente: cuántos contactaron, de qué página vinieron y cuántos terminaron en cliente. Un sitio que sube de posición y no genera un solo contacto está posicionando para las palabras equivocadas.',
          'El segundo dato es cuántas páginas distintas reciben visitas. Si todo el tráfico entra por dos páginas, el sitio es frágil; si entra por cuarenta, es un activo. Esa distribución dice más sobre la salud del SEO que cualquier ranking.',
          'Y las búsquedas por las que apareces sin haberlas trabajado. <strong>Suelen revelar demanda que nadie en el negocio sospechaba</strong>, y son la mejor guía de qué escribir el próximo trimestre.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto tarda en verse resultado?', a: 'Las mejoras técnicas se notan en semanas; las posiciones competitivas toman de 3 a 6 meses de trabajo constante. Quien te prometa la primera página en 30 días te está vendiendo humo o técnicas que Google penaliza.' },
          { q: '¿Cuánto cuesta el SEO mensual?', a: 'Depende de la competencia de tus keywords y el volumen de contenido. Tras la auditoría inicial recibes un plan con alcance y precio fijo mensual, cancelable sin permanencia.' },
          { q: '¿Garantizan la primera posición?', a: 'No, y nadie honesto lo hace: el algoritmo no es nuestro. Garantizamos el método completo (técnica, contenido, medición) y transparencia total sobre el avance.' },
          { q: '¿Escriben el contenido ustedes?', a: 'Sí, junto a tu equipo: ustedes aportan el conocimiento del negocio, nosotros la estructura que posiciona. Cada pieza se aprueba antes de publicar.' },
          { q: '¿El SEO sirve si mi web es lenta o vieja?', a: 'Sirve poco: Google prioriza sitios rápidos y bien construidos, así que invertir en contenido sobre una base frágil es remar contra corriente. Si ese es tu caso, primero conviene un <a href="/servicios/redisenio-web-panama/">rediseño</a> o migrar a una base sólida, y de ahí el SEO rinde.' },
          { q: '¿Compito contra webs de otros países o solo de Panamá?', a: 'Para búsquedas locales ("abogado en Panamá", "clínica dental en Costa del Este") compites contra negocios panameños, y ahí la ventaja es tuya con el trabajo bien hecho. En temas más generales sí aparece contenido internacional, y por eso enfocamos las keywords donde tu negocio realmente puede ganar.' },
          { q: '¿Qué pasa con el SEO si dejo de pagarlo?', a: 'Las posiciones ya ganadas no desaparecen de un día para otro: el contenido publicado sigue trabajando. Lo que se detiene es el avance: sin contenido nuevo ni mantenimiento de autoridad, la competencia que sí sigue empujando termina pasándote con el tiempo.' },
                  { q: '¿Cuánto tarda el SEO en dar resultados?', a: 'Meses, no semanas, y no se acelera pagando más: Google necesita rastrear, evaluar, comparar y observar cómo se comporta quien llega. El plazo depende de si tu dominio tiene historial, de qué tan competida sea la palabra y del estado técnico del sitio.' },
          { q: '¿Alguien puede garantizarme el primer lugar en Google?', a: 'No. Nadie fuera de Google decide ese orden. Lo que sí se puede comprometer es el trabajo y sus señales: qué se audita, qué se corrige, cuánto contenido se publica y qué se reporta. La alarma es quien no te explica qué va a hacer.' },
          { q: '¿Las respuestas de IA matan el SEO?', a: 'Cambian qué contenido rinde. Un texto que da vueltas antes de responder no se cita; una respuesta directa, cerrada y verificable sí. Por eso el formato de pregunta y respuesta, las comparativas con criterio y los datos concretos rinden más que el artículo largo que rodea el tema.' },
          { q: '¿Debo medir mi posición en Google?', a: 'Es la métrica más engañosa: varía por dispositivo, ubicación e historial de quien busca. Mide tráfico orgánico, de qué página vino cada contacto, y cuántas páginas distintas reciben visitas. Si todo entra por dos páginas, el sitio es frágil.' },
          { q: '¿Qué gastos fijos hay que sostener además del SEO?', a: 'El SEO se cotiza por alcance porque no cuesta lo mismo disputar «diseño web Panamá» que «taller de aire acondicionado en David». Lo que sí es fijo: la infraestructura desde $350 al año y el mantenimiento desde $59 al mes, que es la base sobre la que el SEO se sostiene. Los precios no incluyen ITBMS (7%). Las posiciones competidas toman de 3 a 6 meses de trabajo constante.' },
          { q: '¿Cuándo NO conviene contratar SEO?', a: 'Cuando necesitas ventas este mes: para eso está la pauta, que compra visibilidad hoy. El SEO la abarata después, no la reemplaza al inicio. Tampoco conviene sobre un sitio que vas a rehacer, ni cuando el negocio no puede atender más volumen del que ya tiene.' },
        ],
      },
      {
        type: 'checklist',
        h2: 'Qué revisa nuestra auditoría SEO',
        intro: 'Antes de cobrar un solo mes te decimos en qué estás parado. Esto es lo que miramos.',
        items: [
          'Keywords reales que buscan tus clientes en Panamá y su intención de compra',
          'Posiciones actuales de tu sitio y las de tu competencia directa',
          'Velocidad de carga y experiencia en celular (donde busca la mayoría)',
          'Indexación: qué páginas ve Google y cuáles ignora',
          'Datos estructurados y etiquetas que ayudan a aparecer mejor',
          'Arquitectura de contenido y enlaces internos',
          'Estado del contenido actual: qué sirve, qué sobra y qué falta',
          'Perfil de enlaces y autoridad frente a tu sector',
        ],
      },
      {
        type: 'cards',
        h2: 'Para quién rinde más el SEO',
        intro: 'El SEO no es para todos por igual. Estos perfiles son los que más lo aprovechan.',
        items: [
          { h3: 'Servicios profesionales', text: 'Abogados, contadores, clínicas: tu cliente investiga en Google antes de escribir. Aparecer con contenido útil genera confianza y consultas.', link: { slug: 'servicios/diseno-web-corporativo-panama', label: 'Web Corporativa' } },
          { h3: 'Tiendas online', text: 'Cada producto y categoría es una puerta de entrada desde Google. El SEO de ecommerce trae ventas que no pagas por clic.', link: { slug: 'servicios/tiendas-online-ecommerce-panama', label: 'Tiendas Online' } },
          { h3: 'Negocios de barrio', text: 'Si atiendes una zona, el SEO orgánico y el <a href="/crecimiento/seo-local-google-maps-panama/">SEO local</a> se potencian: te encuentran por servicio y por cercanía.', link: { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' } },
        ],
      },
      {
        type: 'prose',
        h2: 'El contenido es el trabajo, no el adorno',
        paragraphs: [
          'Mucha gente cree que el SEO es "meter palabras clave" en la web y esperar. Esa época terminó hace años. Hoy Google premia el contenido que de verdad responde lo que la persona buscaba: una guía clara, una comparación honesta, una respuesta a la duda que frena la compra.',
          'Por eso cada mes producimos páginas y artículos con intención real, no relleno. <strong>Un artículo que responde bien una búsqueda concreta puede traer clientes durante años</strong>, mientras la pauta se apaga en cuanto cortas el presupuesto. Esa es la diferencia entre gastar y construir un activo.',
          'El trabajo se hace de la mano tuya: nadie conoce tu negocio como tú. Tú aportas el criterio y las respuestas que solo un experto del sector da; nosotros los convertimos en contenido que posiciona y que se lee como escrito por un humano, no por una máquina. Cuando el contenido y el <a href="/crecimiento/mantenimiento-hosting-web-panama/">mantenimiento técnico</a> van juntos, el sitio crece parejo.',
        ],
      },
      {
        type: 'statement',
        text: 'Nadie honesto te garantiza la primera posición, porque el algoritmo no es nuestro.',
        strong: 'Lo que sí garantizamos es el método completo y la verdad sobre cada avance.',
      },
      {
        type: 'related',
        items: [
          { slug: 'crecimiento/seo-local-google-maps-panama', label: 'SEO Local' },
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' },
          { slug: 'blog', label: 'Blog' },
          { slug: 'blog/como-elegir-palabras-clave-seo-panama', label: 'Elegir palabras clave' },
          { slug: 'blog/por-que-mi-pagina-no-aparece-en-google', label: 'Por qué no apareces en Google' },
        ],
      },
    ],
    cta: { h2: 'Solicita tu auditoría SEO', wa: 'Hola, quiero una auditoría SEO de mi sitio.' },
  },

  /* ---------- SEO LOCAL ---------- */
  {
    slug: 'crecimiento/seo-local-google-maps-panama',
    parent,
    title: 'SEO Local y Google Maps en Panamá | Aparece Donde te Buscan',
    description: 'SEO local en Panamá: optimizamos tu ficha de Google, reseñas y presencia en Maps para que te encuentren cuando buscan tu servicio cerca.',
    h1: 'SEO local: aparece en el mapa',
    breadcrumb: 'SEO Local y Google Maps',
    service: { type: 'SEO local y Google Business Profile' },
    lead: [
      'Cuando alguien busca "cerca de mí", Google muestra tres negocios en el mapa. O estás en esos tres, o el cliente llegó a otro local.',
      'Para restaurantes, clínicas, talleres y todo negocio con puerta abierta, el mapa ES el buscador. La ficha de Google bien trabajada (categorías, fotos, reseñas, respuestas) compite ahí; la ficha abandonada regala los clientes del vecindario.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué trabajamos en tu presencia local',
        items: [
          'Ficha de Google Business Profile completa y verificada',
          'Categorías, servicios y atributos correctos',
          'Fotos reales del local, el equipo y el producto',
          'Estrategia de reseñas: pedirlas bien y responderlas todas',
          'Coherencia de nombre, dirección y teléfono en toda la web',
          'Página local en tu sitio conectada a la ficha',
          'Publicaciones periódicas en la ficha',
          'Reporte de llamadas, rutas y visitas generadas',
        ],
      },
      {
        type: 'prose',
        h2: 'Las reseñas son la moneda del mapa',
        paragraphs: [
          'Google ordena el mapa por relevancia, distancia y prominencia. Sobre la distancia no hay nada que hacer; la relevancia se optimiza una vez; la prominencia (reseñas, cantidad, frecuencia y respuestas) se construye cada semana.',
          'El sistema correcto hace que pedir la reseña sea parte natural del servicio: el momento justo, el enlace directo y el recordatorio. <strong>Diez reseñas nuevas al mes cambian tu posición en el mapa</strong> más que cualquier truco.',
          'Responderlas todas (las buenas y las malas) pesa doble: Google lo mide y tu próximo cliente lo lee.',
        ],
      },
            {
        type: 'prose',
        h2: 'Nombre, dirección y teléfono: los tres datos que no pueden variar',
        paragraphs: [
          'Es la base del SEO local y el error más común y más silencioso. Tu nombre comercial, tu dirección y tu teléfono tienen que aparecer exactamente iguales en todas partes: tu web, tu ficha de Google, tus redes, los directorios donde estés listado.',
          'Cuando varían —"Av. Balboa" en un lado y "Avenida Balboa" en otro, un teléfono con el código de país en un sitio y sin él en otro— Google no puede confirmar que se trata del mismo negocio, y esa duda le resta confianza a tu ficha frente a competidores cuyos datos sí cuadran.',
          'El caso peor es el negocio que se mudó o cambió de teléfono y actualizó unos sitios y otros no. Quedan versiones contradictorias circulando durante años, y algunas siguen mandando clientes a una dirección donde ya no estás.',
          '<strong>La corrección es aburrida y barata:</strong> definir una versión oficial de los tres datos y hacer que coincida en todos lados, empezando por tu web y tu ficha de Google.',
        ],
      },
      {
        type: 'prose',
        h2: 'El radio real de tu negocio no es la ciudad entera',
        paragraphs: [
          'La búsqueda local funciona con proximidad: Google le muestra a cada persona lo que está cerca de donde está. Eso significa que no compites contra todos los negocios de Panamá, compites contra los de tu radio.',
          'Es una buena noticia y una limitación. La buena: un negocio pequeño puede dominar su zona sin pelear contra las cadenas. La limitación: por bien optimizada que esté tu ficha, es muy difícil aparecer para alguien que está a veinte kilómetros y tiene diez opciones más cerca.',
          'De ahí salen dos decisiones prácticas. Si tienes varias sedes, cada una necesita su propia ficha y su propia página con dirección y horario propios; una sola página que las mencione a todas no posiciona en ninguna zona. Y si atiendes a domicilio sin local visitable, conviene configurar el área de servicio en lugar de una dirección.',
          '<strong>El contenido por zona es lo que extiende ese radio.</strong> Páginas que hablen de las zonas donde trabajas atraen búsquedas que la sola proximidad no te daría.',
        ],
      },
      {
        type: 'prose',
        h2: 'Las reseñas falsas se notan y salen caras',
        paragraphs: [
          'La tentación es evidente cuando un competidor tiene cuarenta reseñas y tú seis. Y es de las peores decisiones que puede tomar un negocio local.',
          'Google detecta patrones: muchas reseñas de golpe, cuentas sin historial, textos parecidos, todas de cinco estrellas sin detalle. La consecuencia va desde eliminar las reseñas hasta suspender la ficha, y una ficha suspendida deja al negocio fuera del mapa mientras se resuelve.',
          'Lo que sí funciona es pedirlas de forma sistemática y en el momento correcto: justo después de un servicio bien resuelto, con un enlace directo que le ahorre al cliente buscar dónde escribir. La mayoría de la gente contenta no deja reseña simplemente porque nadie se la pidió.',
          'Y responderlas todas, sobre todo las malas. <strong>Una respuesta calmada y concreta a una queja legítima convence más que diez reseñas de cinco estrellas</strong>, porque el que compara está midiendo cómo reaccionas cuando algo sale mal.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: llamadas y rutas, no impresiones',
        paragraphs: [
          'La ficha de Google reporta cuántas veces se mostró, y ese número es el menos accionable de todos. Lo que importa es qué hizo la gente.',
          'Los tres números que valen son cuántos pulsaron para llamar, cuántos pidieron cómo llegar y cuántos entraron a la web desde la ficha. Los dos primeros son intención de compra casi pura: nadie pide la ruta a un negocio que no piensa visitar.',
          'El segundo corte es por tipo de búsqueda: cuántos te encontraron buscando tu nombre y cuántos buscando lo que vendes. El primero es gente que ya te conocía; el segundo es cliente nuevo, y es el que dice si el trabajo local está funcionando.',
          'Y el ritmo de reseñas: cuántas entran al mes y cuántas se respondieron. <strong>Es el factor que más mueve la posición en el mapa</strong> y el que más se descuida cuando el negocio está ocupado.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Cuánto cuesta el SEO local?', a: 'La puesta a punto inicial (ficha, coherencia de datos, fotos) es un proyecto cerrado. El mantenimiento mensual (publicaciones, reseñas, reporte) es opcional. Precio fijo tras revisar tu situación actual.' },
          { q: '¿Sirve si no tengo local físico?', a: 'Sí, con matices: Google permite negocios de área de servicio (a domicilio). Si tu negocio es 100% digital sin zona de cobertura, el <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO orgánico</a> es tu herramienta, no el mapa.' },
          { q: 'Mi ficha tiene datos viejos y no puedo entrar. ¿Ayudan?', a: 'Sí. Recuperamos el acceso o reclamamos la ficha (es un caso común) y luego la ponemos a punto.' },
          { q: '¿Cada cuánto hay que pedir reseñas?', a: 'De forma constante, no en tandas. Un negocio que junta veinte reseñas en una semana y luego nada durante meses se ve raro ante Google y ante el cliente. Lo que funciona es un flujo natural: pedir la reseña en el momento justo del servicio, cada semana, con el enlace directo listo.' },
          { q: '¿Puedo tener varias fichas si tengo varias sucursales?', a: 'Sí, y debes: cada local con dirección física propia lleva su ficha de Google Business Profile, con sus fotos, horario y reseñas. Las trabajamos por separado para que cada sucursal aparezca en el mapa de su zona.' },
          { q: '¿Qué hago con una reseña falsa o injusta?', a: 'Primero se responde con calma y profesionalismo, porque tu próximo cliente la va a leer. Si viola las políticas de Google (spam, competencia, contenido ofensivo) se puede reportar para que la revisen, aunque no siempre la quitan. Nunca conviene ignorarla ni contestar a la defensiva.' },
                  { q: '¿Por qué importa que mi nombre y dirección sean idénticos en todos lados?', a: 'Porque si varían, Google no puede confirmar que se trata del mismo negocio y eso le resta confianza a tu ficha. "Av. Balboa" en un sitio y "Avenida Balboa" en otro basta para generar la duda. El caso peor es el negocio que se mudó y actualizó unos sitios y otros no.' },
          { q: '¿Puedo aparecer en el mapa en toda la ciudad?', a: 'Es muy difícil: la búsqueda local funciona por proximidad y compites contra los de tu radio, no contra todos. Si tienes varias sedes, cada una necesita ficha y página propias. Lo que extiende el radio es el contenido por zona.' },
          { q: '¿Sirve comprar reseñas?', a: 'Google detecta los patrones —muchas de golpe, cuentas sin historial, textos parecidos— y la consecuencia va desde borrarlas hasta suspender la ficha, lo que te deja fuera del mapa. Lo que funciona es pedirlas justo después de un servicio bien resuelto, con enlace directo.' },
          { q: '¿Qué mido en Google Business Profile?', a: 'Llamadas, solicitudes de ruta y clics a la web: los dos primeros son intención casi pura, porque nadie pide cómo llegar a un negocio que no piensa visitar. Y cuántos te encontraron buscando lo que vendes en vez de tu nombre, que es el cliente nuevo.' },
          { q: '¿En cuánto tiempo se ve resultado en el mapa?', a: 'La ficha de Google Business Profile es gratis: el costo está en el trabajo de optimizarla y sostenerla. El SEO local suele mover el mapa antes que el SEO orgánico: las primeras señales aparecen en semanas, no en los 3 a 6 meses que toma competir por búsquedas nacionales. Ayuda tener el sitio rápido: Google mide LCP por debajo de 2,5 segundos, INP por debajo de 200 milisegundos y CLS por debajo de 0,1.' },
          { q: '¿Cuándo NO te sirve el SEO local?', a: 'Si vendes en línea a todo el país o al exterior y no te importa de qué barrio viene el cliente, el mapa no es tu pelea: te conviene SEO orgánico y pauta. Tampoco funciona sin dirección física verificable o sin alguien que atienda el teléfono: Google Maps manda llamadas, y una llamada sin responder es peor que no aparecer.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Cómo ponemos tu negocio en el mapa',
        intro: 'La presencia local se construye por orden. Saltarse pasos es lo que deja fichas a medias que no posicionan.',
        items: [
          { h3: 'Reclamamos y verificamos la ficha', text: 'Recuperamos el acceso o creamos la ficha desde cero y completamos la verificación de Google, el paso que muchos dejan a medias.' },
          { h3: 'La llenamos completa y correcta', text: 'Categorías, servicios, horario, atributos, fotos reales del local y el equipo. Una ficha completa pesa más que una vacía en el orden del mapa.' },
          { h3: 'Alineamos tus datos en toda la web', text: 'Nombre, dirección y teléfono idénticos en tu sitio, redes y directorios. La incoherencia confunde a Google y te baja.' },
          { h3: 'Activamos reseñas y publicaciones', text: 'Montamos el flujo para pedir reseñas y las respondemos todas, más publicaciones periódicas que mantienen la ficha viva.' },
        ],
      },
      {
        type: 'cards',
        h2: 'Negocios donde el mapa lo es todo',
        intro: 'Si tu cliente decide "cerca de mí", estás en esta lista y el SEO local es tu mejor inversión.',
        items: [
          { h3: 'Restaurantes y cafés', text: 'La gente busca dónde comer cerca y decide por fotos y reseñas en segundos. Una ficha cuidada llena mesas.', link: { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' } },
          { h3: 'Clínicas y consultorios', text: 'Pacientes buscan por especialidad y cercanía. Reseñas y datos claros en el mapa generan la primera cita.', link: { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' } },
          { h3: 'Servicios a domicilio', text: 'Aunque no tengas local, Google permite negocios de área de servicio. Definimos tu zona y apareces donde atiendes.', link: { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO Orgánico' } },
        ],
      },
      {
        type: 'prose',
        h2: 'El mapa premia al que aparece completo',
        paragraphs: [
          'Piensa en cómo buscas tú: escribes "ferretería cerca" y de los tres negocios que salen, entras al que tiene fotos reales, horario claro y decenas de reseñas respondidas. La ficha abandonada, con una foto borrosa y sin horario, ni la consideras. Tu cliente hace exactamente lo mismo con tu negocio.',
          'Por eso la puesta a punto no es "llenar campos" sino construir la impresión que decide la visita. <strong>Cada foto, cada reseña respondida y cada dato correcto empuja tu ficha hacia esos tres lugares del mapa</strong> donde ocurre casi todo el clic. Fuera de ahí, la competencia se lleva a tu vecindario.',
          'El trabajo de fondo es la coherencia y la constancia: datos alineados en toda tu web, publicaciones vivas y un flujo de reseñas que no se detiene. Conectamos la ficha con una página local en tu <a href="/servicios/">sitio</a> para que ambos se refuercen, y complementamos con <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO orgánico</a> cuando tu negocio también compite por búsquedas más amplias.',
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-restaurantes-panama', label: 'Web para Restaurantes' },
          { slug: 'industrias/diseno-web-clinicas-salud-panama', label: 'Web para Clínicas' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y Posicionamiento' },
          { slug: 'blog/optimizar-google-business-profile-panama', label: 'Optimizar tu ficha de Google' },
        ],
      },
    ],
    cta: { h2: 'Ponte en el mapa', wa: 'Hola, quiero mejorar mi presencia en Google Maps.' },
  },

  /* ---------- MANTENIMIENTO ---------- */
  {
    slug: 'crecimiento/mantenimiento-hosting-web-panama',
    parent,
    title: 'Mantenimiento Web y Hosting en Panamá | desde $59/mes',
    description: 'Mantenimiento web y hosting gestionado en Panamá: actualizaciones, respaldos verificados, monitoreo y soporte desde $59 al mes.',
    h1: 'Mantenimiento web y hosting gestionado',
    breadcrumb: 'Mantenimiento y Hosting',
    service: { type: 'Mantenimiento web y hosting gestionado' },
    lead: [
      'Un sitio web es software conectado a internet: sin mantenimiento envejece, se vuelve lento y termina comprometido.',
      'Los ataques no eligen empresas grandes: son robots que escanean internet buscando sitios sin actualizar. Un año sin mantenimiento convierte tu web en un objetivo fácil, y recuperar un sitio hackeado (y el posicionamiento que Google le quita) cuesta mucho más que prevenirlo.',
    ],
    blocks: [
      {
        type: 'checklist',
        h2: 'Qué incluye desde $59/mes',
        items: [
          'Actualizaciones de seguridad del sitio y sus componentes',
          'Respaldos automáticos con restauración verificada',
          'Monitoreo de caídas con alerta inmediata',
          'Hosting cloud con recursos dedicados',
          'Certificado SSL con renovación automática',
          'Ajustes menores de contenido (textos e imágenes)',
          'Revisión periódica de velocidad',
          'Reporte mensual del estado del sitio',
        ],
      },
      {
        type: 'extras',
        h2: 'Hosting y servicios adicionales',
        intro: 'El hosting depende del proyecto y hay servicios que se cotizan aparte. Aquí está todo claro, desde el inicio.',
      },
      {
        type: 'prose',
        h2: 'Respaldos que sí restauran',
        paragraphs: [
          'La palabra "backup" aparece en todos los planes de hosting baratos. La pregunta correcta es otra: ¿alguien ha probado restaurarlo? Un respaldo nunca verificado es una suposición, y lo descubres el peor día posible.',
          'Nosotros probamos restauraciones periódicamente y conservamos varias versiones: si un problema pasó desapercibido dos semanas, el respaldo de ayer ya lo incluye. <strong>Poder volver más atrás es lo que salva el sitio.</strong>',
          'La infraestructura anual (dominio, hosting y SSL) más el mantenimiento mensual cubren todo lo que tu web necesita para operar sin sustos. Y el dominio queda a tu nombre, siempre.',
        ],
      },
            {
        type: 'prose',
        h2: 'Qué pasa exactamente cuando un sitio no se actualiza',
        paragraphs: [
          'La respuesta corta es que no pasa nada durante meses, y después pasa todo de golpe. Esa demora es la razón por la que tanta gente cancela el mantenimiento justo antes de necesitarlo.',
          'El mecanismo es conocido: cuando se descubre una vulnerabilidad en WordPress o en un plugin popular, se publica el arreglo. A partir de ese momento, la vulnerabilidad es información pública y hay sistemas automáticos recorriendo internet buscando sitios que todavía no la corrigieron. No te eligen a ti: te encuentran.',
          'Lo que sigue rara vez es un ataque dramático. Lo habitual es que el sitio empiece a redirigir a páginas de apuestas o farmacias, o que se le inyecten enlaces ocultos. El dueño se entera semanas después, cuando Google ya marcó el sitio como peligroso y el tráfico se desplomó.',
          '<strong>Y limpiar cuesta más que mantener.</strong> Hay que encontrar todo lo inyectado, cerrar la puerta de entrada, pedirle a Google que revise el sitio y esperar a que el tráfico vuelva, si vuelve.',
        ],
      },
      {
        type: 'prose',
        h2: 'Un respaldo que nadie ha restaurado no es un respaldo',
        paragraphs: [
          'Casi todos los hostings incluyen respaldo automático y casi nadie ha probado restaurarlo. El día que hace falta es un mal día para descubrir que no funciona.',
          'Los fallos que aparecen en ese momento son siempre los mismos: el respaldo guarda los archivos pero no la base de datos, o al revés. O se guarda en el mismo servidor, así que si el servidor cae se va con él. O existe pero solo del último día, y el problema empezó hace dos semanas sin que nadie lo notara.',
          'Un respaldo utilizable tiene tres condiciones: incluye archivos y base de datos, vive en un lugar distinto del servidor, y guarda varias versiones hacia atrás para poder volver a antes de que empezara el problema.',
          '<strong>Y la cuarta, la que casi nadie cumple: haberlo restaurado alguna vez a modo de prueba.</strong> Un respaldo sin probar es una suposición, no un seguro.',
        ],
      },
      {
        type: 'prose',
        h2: 'El hosting barato no es más lento: es más frágil',
        paragraphs: [
          'La comparación de precios entre hostings es engañosa porque compara el precio y no lo que se recibe. La diferencia real no está tanto en la velocidad como en qué pasa cuando algo sale mal.',
          'En el hosting compartido más barato tu sitio convive con cientos de otros en el mismo servidor. Si uno de esos recibe un pico de tráfico o es atacado, tu sitio se ve afectado. Y el soporte, cuando existe, responde en días.',
          'El costo real aparece en la caída. Un sitio caído un fin de semana largo son tres días sin recibir un solo contacto, y eso suele valer bastante más que la diferencia de precio anual entre un hosting barato y uno decente.',
          'Lo que hay que mirar antes de contratar: si hay respaldo diario y dónde se guarda, si incluye certificado, en cuánto tiempo responde el soporte, y si te puedes llevar tu sitio a otro lado cuando quieras. <strong>Esa última pregunta descarta a más proveedores de los que uno espera.</strong> El desarrollo completo está en <a href="/blog/hosting-panama-evitar-hosting-barato/">por qué el hosting barato sale caro</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Qué medir: tiempo caído y velocidad en celular',
        paragraphs: [
          'El primer número es el <strong>tiempo caído</strong>: cuántos minutos al mes el sitio no respondió. Sin monitoreo, un sitio puede estar cayéndose cada semana de madrugada y nadie enterarse, mientras el posicionamiento se erosiona en silencio.',
          'El segundo es la velocidad medida en celular con conexión móvil, no en la computadora de la oficina con fibra. Es como llega la mayoría de los visitantes en Panamá y es la medición que usa Google.',
          'El tercero, y el que nadie mira hasta que hay problema, es cuándo se restauró un respaldo por última vez a modo de prueba. Es la única forma de saber que el seguro existe.',
          'Y las actualizaciones aplicadas al mes, con nota de cuáles eran de seguridad. <strong>Ese registro es lo que separa un mantenimiento real de una factura mensual sin trabajo detrás.</strong>',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes',
        items: [
          { q: '¿Qué cuenta como "ajuste menor"?', a: 'Cambiar textos, reemplazar imágenes, actualizar datos de contacto, publicar una entrada. Páginas nuevas o funciones se cotizan aparte, y te lo decimos antes, no en la factura.' },
          { q: '¿Es obligatorio contratarlo con ustedes?', a: 'No. Puedes encargarte tú o tu equipo técnico. Lo innegociable es que alguien lo haga: el sitio abandonado termina comprometido, y Google penaliza sitios hackeados.' },
          { q: '¿Cubren sitios que no construyeron ustedes?', a: 'Sí, previa auditoría. Si el sitio ya está comprometido o su base es frágil, primero hay que sanearlo (ver <a href="/servicios/redisenio-web-panama/">rediseño</a>).' },
          { q: '¿Qué pasa si mi sitio se cae un domingo?', a: 'El monitoreo nos alerta automáticamente, casi siempre antes de que lo notes. Restauramos desde el respaldo o corregimos el origen, según la causa.' },
          { q: 'Mi sitio funciona bien. ¿Para qué pago mantenimiento?', a: 'Precisamente porque funciona bien hoy. El mantenimiento es como el cambio de aceite del carro: no lo notas hasta que dejas de hacerlo. Los componentes de tu web reciben parches de seguridad todo el tiempo, y un sitio sin actualizar durante meses se vuelve el objetivo fácil que los robots de ataque buscan.' },
          { q: '¿El hosting está incluido o se paga aparte?', a: 'La infraestructura anual (dominio, hosting y SSL) se cotiza según tu proyecto y va por separado del mantenimiento mensual desde $59. Te lo mostramos todo desglosado desde el inicio, con cotización cerrada por escrito. El dominio siempre queda a tu nombre.' },
          { q: '¿Y si mi sitio ya fue hackeado?', a: 'Primero hay que sanearlo: limpiar el código malicioso, cerrar la puerta por donde entraron y pedir a Google que lo revise si te marcó como inseguro. Eso es un trabajo puntual, no mantenimiento normal. Después sí entra el plan mensual para que no vuelva a pasar. Si la base es muy frágil, a veces sale mejor un <a href="/servicios/redisenio-web-panama/">rediseño</a>.' },
                  { q: '¿Qué pasa si no actualizo mi sitio?', a: 'Nada durante meses y después todo de golpe. Cuando se publica el arreglo de una vulnerabilidad, esa vulnerabilidad es información pública y hay sistemas automáticos buscando sitios sin corregir. No te eligen: te encuentran. Lo habitual es que el sitio empiece a redirigir a páginas de apuestas y te enteres cuando Google ya lo marcó.' },
          { q: '¿Mi hosting ya hace respaldos, no basta con eso?', a: 'Solo si alguien lo ha restaurado alguna vez. Los fallos típicos: guarda archivos pero no la base de datos, vive en el mismo servidor que se cayó, o solo tiene el último día cuando el problema empezó hace dos semanas. Un respaldo sin probar es una suposición, no un seguro.' },
          { q: '¿Qué diferencia hay entre un hosting barato y uno bueno?', a: 'Menos la velocidad y más qué pasa cuando algo falla. En el compartido barato convives con cientos de sitios y el soporte responde en días. Un sitio caído un fin de semana largo son tres días sin un solo contacto, que suele valer más que la diferencia de precio anual.' },
          { q: '¿Cómo sé que el mantenimiento se está haciendo?', a: 'Con el registro de actualizaciones aplicadas al mes indicando cuáles eran de seguridad, el tiempo caído medido, la velocidad en celular y la fecha de la última restauración de prueba. Sin eso, es una factura mensual sin trabajo verificable detrás.' },
          { q: '¿Cuándo NO necesitas contratar mantenimiento con nosotros?', a: 'Si tu sitio es estático, no tiene panel ni formularios y alguien de tu equipo sabe renovar el dominio y el certificado, puedes vivir sin plan mensual. También si tu proveedor actual ya lo cubre: pagar dos veces por lo mismo no mejora nada. Lo que no recomendamos es dejarlo sin dueño: un WordPress sin actualizar termina comprometido, y recuperarlo cuesta más que el plan de $59 al mes.' },
        ],
      },
      {
        type: 'steps',
        h2: 'Qué hacemos cada mes con tu sitio',
        intro: 'El mantenimiento no es esperar a que algo se rompa. Es trabajo rutinario que evita que se rompa.',
        items: [
          { h3: 'Actualizamos con respaldo previo', text: 'Antes de tocar nada, respaldamos. Luego aplicamos las actualizaciones de seguridad y verificamos que todo siga funcionando igual.' },
          { h3: 'Verificamos que el respaldo restaure', text: 'Guardar un backup no basta. Probamos restauraciones para saber que, el día malo, de verdad podemos volver atrás.' },
          { h3: 'Vigilamos velocidad y caídas', text: 'El monitoreo avisa si el sitio se cae, casi siempre antes que tú, y revisamos la velocidad para que no se degrade con el tiempo.' },
          { h3: 'Reportamos el estado real', text: 'Cada mes recibes un reporte claro: qué se actualizó, cómo está la seguridad y la velocidad, y cualquier alerta a atender.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Recuperar un sitio cuesta más que cuidarlo',
        paragraphs: [
          'Un ataque no llega porque tu negocio sea importante. Llega porque un robot escaneó millones de sitios y el tuyo tenía un componente sin actualizar. No es personal, es automático, y por eso ningún negocio es "demasiado pequeño" para que le pase.',
          'Cuando ocurre, la factura no es solo técnica. Limpiar el sitio, recuperar los datos y pedir a Google que te quite la marca de "sitio peligroso" toma tiempo, y mientras tanto <strong>pierdes el posicionamiento que tardaste meses en ganar y la confianza de quien intentó entrar y vio una alerta roja</strong>. Todo eso cuesta mucho más que el plan mensual que lo habría evitado.',
          'El mantenimiento es la parte aburrida del crecimiento, la que nadie presume, y por eso es la más fácil de descuidar. Pero es la base sobre la que se sostiene todo lo demás: no tiene sentido invertir en <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO</a> para traer visitas a un sitio que un día amanece caído o comprometido.',
        ],
      },
      {
        type: 'statement',
        text: 'Un respaldo que nadie ha probado restaurar no es un respaldo, es una suposición que descubres el peor día.',
        strong: 'Nosotros los probamos antes de que los necesites.',
      },
      {
        type: 'related',
        items: [
          { slug: 'servicios/redisenio-web-panama', label: 'Rediseño Web' },
          { slug: 'tecnologias/diseno-web-wordpress-panama', label: 'WordPress' },
          { slug: 'blog/hosting-panama-evitar-hosting-barato', label: 'Por qué evitar el hosting barato' },
          { slug: 'blog/como-elegir-el-dominio-web-perfecto', label: 'Cómo elegir tu dominio' },
        ],
      },
    ],
    cta: { h2: 'Protege tu inversión', wa: 'Hola, quiero el plan de mantenimiento web.' },
  },
];
