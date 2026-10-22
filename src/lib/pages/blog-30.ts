/* BLOG — Lote 30: guía long-form sobre diseño web para consultoras y servicios
   profesionales en Panamá. Mismo patrón que blog-8.ts: PageData con parent
   { slug: 'blog' }; el listado /blog la recoge por fecha y categoría. Enlaces
   internos solo a slugs reales del sitio. */
import type { PageData } from '../types';

export const blog30: PageData[] = [
  {
    slug: 'blog/diseno-web-para-consultoras-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para consultoras en Panamá: qué convierte',
    description: 'Qué necesita la web de una consultora en Panamá: casos reales con permiso del cliente, un formulario que filtra por presupuesto y blog propio.',
    h1: 'Diseño web para consultoras en Panamá: qué de verdad convierte visitas en clientes',
    breadcrumb: 'Diseño web para consultoras',
    category: 'Diseño web',
    date: '2026-09-02',
    heroImage: {
      src: '/images/blog/diseno-web-para-consultoras-panama.jpg',
      alt: 'Sala de reuniones de una consultora moderna con escritorio minimalista, laptop y libreta de apuntes, vista de la ciudad de fondo a través de ventanales',
    },
    lead: [
      'El diseño web para consultoras en Panamá convierte cuando muestra evidencia: casos reales contados con situación, acción y resultado, una especialización explícita, credenciales verificables, un formulario que filtra por tipo de proyecto y presupuesto, y un blog activo. En Elemento Web, una landing parte desde $550 y una Web empresarial desde $1,250, sin ITBMS.',
      'Nadie contrata una consultoría por impulso: el cliente va a confiarte una reestructuración, una expansión o una auditoría delicada sin poder probar antes lo que le vas a entregar, y decide con las señales que tiene en pantalla. La mayoría de las webs del rubro describen la firma con adjetivos («soluciones integrales», «resultados garantizados») en vez de mostrar evidencia, y ahí pierden contra la siguiente pestaña.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué la web de una consultora vende criterio y no un servicio?',
        paragraphs: [
          'Lo que vende una consultora es intangible: un diagnóstico, una estrategia, un número que todavía no existe. El visitante no puede evaluarlo técnicamente, así que evalúa lo único que sí puede juzgar: si pareces la persona o la firma correcta para su problema. Una tienda vende con precio y disponibilidad; una consultora, con evidencia de criterio: casos parecidos ya resueltos, credenciales verificables y una especialización clara.',
          'Por eso, antes de elegir plantilla o color, hay que decidir qué evidencia de autoridad mostrará la web y en qué orden. El formulario, el blog y los casos sirven a un solo objetivo: que una empresa con un problema serio te elija antes que al siguiente resultado de Google. Nuestra página de <a href="/industrias/diseno-web-consultoras-servicios-profesionales-panama/">diseño web para consultoras y servicios profesionales</a> detalla cómo estructuramos esa autoridad para una firma en Panamá.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué debe tener la web de una consultora o servicio profesional en Panamá?',
        intro: 'Sin estos puntos, un diseño pulido no genera autoridad.',
        items: [
          'Al menos un caso de éxito con datos reales: situación, qué se hizo, qué cambió',
          'Una especialización explícita: a qué tipo de cliente sirves y qué problema resuelves',
          'Credenciales verificables del consultor o del equipo: formación, años de trayectoria, certificaciones',
          'Un formulario que pregunte tipo de proyecto y presupuesto aproximado antes de agendar',
          'Un blog activo, no una pestaña de «insights» con tres publicaciones de hace dos años',
          'Testimonios con nombre y cargo verificable, no iniciales ni «Cliente satisfecho»',
          'Una llamada a la acción de alto valor —diagnóstico, sesión inicial— en vez de un «contáctanos» genérico',
          'Tono sobrio y específico, coherente con la tarifa que cobras',
        ],
      },
      {
        type: 'steps',
        h2: '¿Qué debe preguntar el formulario antes de la primera llamada?',
        intro: 'El cuello de botella de una consultora no es conseguir contactos: es gastar horas en llamadas de diagnóstico con quien no puede pagar la tarifa o no calza con lo que haces. Estas cinco preguntas filtran antes de la primera reunión.',
        items: [
          { h3: '1. Tipo de proyecto o servicio', text: 'Una lista simple —estrategia, finanzas, RRHH, marketing, legal, otro— dirige la consulta a quien la puede atender dentro del equipo.' },
          { h3: '2. Presupuesto aproximado', text: 'Un rango, no una cifra exacta —"menos de $5,000", "entre $5,000 y $20,000", "más de $20,000"— filtra sin espantar a quien todavía está cotizando y ahorra una llamada completa a quien no calza con tu tarifa.' },
          { h3: '3. Tamaño o alcance de la empresa', text: 'Empleados aproximados o facturación estimada dicen en una pregunta si el proyecto tiene el tamaño que sueles manejar.' },
          { h3: '4. Plazo o urgencia real', text: 'Si debe arrancar ya o está en exploración: separa a quien va en serio de quien arma el presupuesto del próximo año.' },
          { h3: '5. Cómo prefiere que lo contacten', text: 'Llamada, WhatsApp o correo: dejar elegir el canal sube la tasa de respuesta con decisores de agenda llena.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo se demuestra autoridad sin adjetivos?',
        paragraphs: [
          'Con casos. Un caso explica la situación de partida, qué se hizo y qué cambió, con números si se pueden dar y con órdenes de magnitud si no. Un caso sin ningún dato es una anécdota, no una prueba.',
          'La objeción real es la confidencialidad: la mayoría de los clientes de consultoría no quiere su nombre en la web de su proveedor. Pero cuando hay permiso, un caso con nombre pesa mucho más, y conviene pedirlo al cerrar un proyecto que salió bien. Lo hicimos con Grupo Viesa, una consultora de estrategia y administración con 20 años en Panamá: su web real, con su nombre, está en nuestro <a href="/portafolio/">portafolio</a>, junto a otros casos donde el cliente autorizó mostrar su marca.',
          'Sin permiso, el caso se cuenta igual sin identificar a nadie: «distribuidora de consumo masivo, 80 empleados, operación en Panamá y Costa Rica» da contexto real. La estructura es la misma: situación, acción, resultado. <strong>Tres casos bien contados convencen más que veinte logos alineados en una fila.</strong>',
        ],
      },
      {
        type: 'prose',
        h2: '¿El blog trae clientes a una consultora?',
        paragraphs: [
          'En servicios profesionales, el contenido rinde más que en casi cualquier otro rubro: el cliente compra criterio, y un artículo bien escrito es una muestra gratis de ese criterio. Un restaurante no vende más por escribir sobre gastronomía; una consultora sí capta más publicando el análisis que su cliente ideal busca antes de decidirse.',
          'Cada pregunta previa a contratar —«cómo estructurar una expansión regional», «qué revisar antes de una auditoría de RRHH», «cuándo conviene tercerizar la nómina»— es un artículo que te capta semanas o meses antes de que te escriban. Nadie garantiza el primer lugar en Google, pero un blog sostenido con respuestas a preguntas reales es la diferencia entre aparecer en esa búsqueda o no. Más en nuestra guía de <a href="/crecimiento/seo-posicionamiento-web-panama/">SEO y posicionamiento web</a>.',
          'La condición es sostenerlo: un blog con tres artículos de hace dos años dice que la firma dejó de producir criterio nuevo. Si tu captación depende de publicar, el <a href="/crecimiento/mantenimiento-web-panama/">mantenimiento</a> de la web es parte del canal de ventas, no un gasto opcional.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en la web de tu consultora?',
        paragraphs: [
          'Si acabas de independizarte, aún no tienes casos propios y no defines tu especialización, una Web empresarial con varias líneas de servicio es prematura: no hay contenido real que poner en esas páginas. Rinde más una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> con tu perfil, tu enfoque y un WhatsApp directo, desde $550 más ITBMS, y crecer al sitio completo cuando tengas trayectoria propia que mostrar.',
          'Tampoco conviene si vives del 100% de referidos de una red cerrada y no tienes capacidad para más proyectos: pagar por tráfico frío desde Google es pagar un canal que no podrás atender. Ahí basta una presencia mínima que confirme que existes y dé una forma seria de contactarte.',
          'Sí se justifica una <a href="/servicios/diseno-web-corporativo-panama/">web corporativa completa</a> —una Web empresarial desde $1,250 más ITBMS, con una página por servicio, casos y blog— cuando quieres dejar de depender de esa red, cuando manejas varias líneas de servicio que compiten por búsquedas distintas, o cuando la firma necesita integraciones o un portal de cliente, donde entra el proyecto corporativo a medida desde $2,900. Los precios completos están en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para consultoras',
        items: [
          { q: '¿Puedo prometer resultados de negocio en mi web de consultoría?', a: 'No conviene. Ningún consultor controla el resultado final de una decisión de negocio —depende de la ejecución del cliente, del mercado, de factores fuera de tu control— y prometerlo ("aumenta tus ventas 40%", "resultado garantizado") es publicidad poco creíble que además genera expectativas que después nadie puede cumplir. Lo que sí conviene comunicar es la metodología, la experiencia real en ese tipo de proyecto y casos con contexto verificable.' },
          { q: '¿Necesito casos con nombre de cliente o sirven anónimos?', a: 'Sirven los dos, pero no rinden igual. Un caso con nombre y con permiso pesa más porque se puede verificar; uno anónimo bien contado —con la situación, lo que se hizo y qué cambió— sigue siendo mucho mejor que un logo sin explicación. Pide permiso de forma proactiva al cerrar un proyecto que salió bien: la respuesta es "sí" más veces de las que se piensa.' },
          { q: '¿Cuánto cuesta la web de una consultora o firma de servicios profesionales en Panamá?', a: 'Depende de cuántos servicios vas a mostrar y de si necesitas blog. Quien recién arranca puede empezar con una landing page desde $550. Para la mayoría, una Web empresarial desde $1,250 —con página por servicio, casos y blog— es la opción recomendada. Firmas que ya crecieron y necesitan integraciones o portal de cliente entran en el proyecto corporativo a medida desde $2,900. Los precios son en dólares y no incluyen el 7% de ITBMS.' },
          { q: '¿Y los costos que siguen después de publicar la web?', a: 'Dos: infraestructura anual —hosting compartido desde $225, cloud desde $350 (la opción recomendada para la mayoría) o VPS dedicado desde $550— y mantenimiento mensual, con tres planes: $99, $169 y $319, según cuánta prioridad de respuesta y cuántas horas de cambios necesites cada mes. Si tu captación depende de mantener el blog activo, no conviene quedarse en el plan más básico posible.' },
          { q: '¿De verdad el blog trae clientes o es solo para verse activo?', a: 'En servicios profesionales es de los canales que más rinde. Cada artículo que responde una pregunta real de tu cliente ideal —antes de que decida contratar— es una puerta de entrada que trabaja sola, mes tras mes. La condición es sostenerlo: un blog con tres artículos de hace dos años transmite justo lo contrario de lo que quieres decir.' },
          { q: '¿Cuándo no me conviene invertir en la web todavía?', a: 'Si vives cómodo del 100% de referidos de una red cerrada y hoy no tienes capacidad real de tomar más proyectos, invertir en captar tráfico frío desde Google es pagar por un canal que no vas a poder atender. Conviene revisarlo el día que esa capacidad cambie o que ese círculo de referidos se reduzca.' },
          { q: '¿Qué pasa si mi especialización es muy amplia y no sé en qué enfocarme?', a: 'Una web genérica para "todo tipo de consultoría" compite peor que una enfocada, porque no responde ninguna búsqueda específica ni convence a un cliente exigente de que eres el experto en su problema exacto. Conviene elegir un nicho —por industria, por tipo de proyecto o por tamaño de cliente— aunque tu práctica real sea más amplia; siempre se puede ampliar después.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-consultoras-servicios-profesionales-panama', label: 'Diseño web para consultoras y servicios profesionales' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'crecimiento/seo-posicionamiento-web-panama', label: 'SEO y posicionamiento web' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
          { slug: 'crecimiento/mantenimiento-web-panama', label: 'Mantenimiento web' },
          { slug: 'portafolio', label: 'Nuestro portafolio' },
        ],
      },
    ],
    cta: {
      h2: 'Una web que demuestra tu criterio y filtra a los clientes correctos',
      wa: 'Hola, quiero una web para mi consultora o servicio profesional en Panamá. ¿Me asesoran?',
    },
  },
];
