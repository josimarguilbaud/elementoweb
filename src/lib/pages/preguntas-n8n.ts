/* PREGUNTAS — grupo n8n (fase 2 de páginas de pregunta, 23-oct-2026).
   Cuatro preguntas de comprador sobre n8n que NO responde el post
   blog/automatizaciones-con-n8n-para-pymes (que explica el flujo formulario → CRM → WhatsApp).
   Cifras de terceros solo de páginas abiertas el 23-oct-2026 y enlazadas en el texto:
   n8n.io/pricing (en euros, solo facturación anual visible), zapier.com/pricing, make.com/en/pricing
   (sin precios visibles en la consulta), docs.n8n.io y developers.facebook.com/docs/whatsapp/pricing.
   Precio propio: automatización con n8n desde $300 es referencia propuesta (fuera del lead). */
import type { PageData } from '../types';

const parent = { slug: 'blog', label: 'Blog' };

export const preguntasN8n: PageData[] = [
  /* ============================================================= *
   * 12 · ¿Qué es n8n y para qué lo usa una pyme?
   * ============================================================= */
  {
    slug: 'blog/que-es-n8n-y-para-que-sirve',
    parent,
    title: '¿Qué es n8n y para qué sirve en una pyme?',
    description: 'Qué es n8n, cómo funciona por dentro (disparadores, nodos, ejecuciones), dónde se instala y para qué lo usa una pyme en ventas, operación y administración.',
    h1: '¿Qué es n8n y para qué lo usa una pyme?',
    breadcrumb: 'Qué es n8n',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'n8n es una herramienta de automatización de flujos de trabajo: une las aplicaciones de tu negocio para que una acción en una dispare tareas en las otras, sin copiar datos a mano. Una pyme la usa para mover leads, avisar a su equipo, generar documentos y conectar asistentes de IA. Se usa en la nube de n8n o instalada en tu propio servidor.',
      'Abajo verás las piezas que la componen, dónde puede vivir y en qué áreas de una pyme rinde más. Si ya sabes qué es y quieres un ejemplo armado paso a paso, lee <a href="/blog/automatizaciones-con-n8n-para-pymes/">automatizaciones con n8n para pymes</a>.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: '¿Cómo funciona n8n por dentro?',
        intro: 'Cuatro palabras explican casi todo lo que vas a ver en la pantalla de n8n.',
        items: [
          { h3: 'Flujo (workflow)', text: 'Es el proceso completo, dibujado como cajas unidas por flechas. Un flujo hace una cosa concreta, por ejemplo «pasar los leads de la web al CRM».' },
          { h3: 'Disparador', text: 'Es lo que arranca el flujo: un formulario enviado, un mensaje recibido, una hora del día o una llamada desde otro sistema. Sin disparador, el flujo no corre solo.' },
          { h3: 'Nodo', text: 'Cada caja es un nodo. Unos se conectan con una aplicación (correo, hoja de cálculo, WhatsApp). Otros deciden, filtran o transforman datos. Cuando no hay nodo listo, uno genérico llama a la API del servicio.' },
          { h3: 'Ejecución', text: 'Cada vez que el flujo corre de principio a fin es una ejecución. n8n la define como una sola corrida del flujo completo, sin importar cuántos pasos tenga. Importa porque así se mide su plan en la nube.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Dónde se instala n8n: en su nube o en tu servidor?',
        paragraphs: [
          'n8n se puede usar de dos maneras. La primera es su nube: creas una cuenta, pagas un plan y n8n se encarga del servidor. La segunda es instalarlo tú, en un servidor propio o alquilado.',
          'Según su <a href="https://docs.n8n.io/hosting/" rel="noopener">documentación de instalación</a> (consultada el 23 de octubre de 2026), sin una clave de licencia <strong>n8n funciona como la edición Community, gratuita</strong>. Las ediciones Business y Enterprise se activan con una clave de pago.',
          'Autoalojado no significa sin costo. Alguien paga el servidor, lo actualiza, lo respalda y lo vigila. La misma guía usa Docker para la instalación rápida y Docker Compose para producción, así que hace falta algo de criterio técnico.',
          'Cuál conviene depende del volumen y de la sensibilidad de tus datos. Lo explicamos con números en <a href="/blog/n8n-zapier-o-make-cual-conviene/">n8n, Zapier o Make: cuál conviene</a>.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Para qué usa n8n una pyme en Panamá?',
        intro: 'Ejemplos por área. No son casos de clientes: son usos comunes que puedes comparar con tu propio día.',
        items: [
          { h3: 'Ventas', text: 'Registrar cada lead de la web o de un anuncio en el CRM, asignarlo a un vendedor por turno y recordarle si no lo contactó a tiempo.' },
          { h3: 'Atención al cliente', text: 'Recibir mensajes de WhatsApp o correo, clasificarlos y pasarlos a la persona correcta. También avisar cuando un pedido cambia de estado.' },
          { h3: 'Operación', text: 'Confirmar citas o reservas, enviar recordatorios el día anterior y mover la información a la agenda del equipo.' },
          { h3: 'Administración', text: 'Crear una cotización o factura a partir de un formulario, guardar comprobantes en una carpeta y anotar cada pago en una hoja.' },
          { h3: 'Reportes', text: 'Juntar cada lunes los números de la semana (leads, ventas, mensajes) y mandarlos por correo o WhatsApp al dueño.' },
          { h3: 'Inteligencia artificial', text: 'Conectar un modelo de IA para resumir un correo, clasificar un mensaje o redactar un borrador que una persona revisa antes de enviarlo.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿En qué se diferencia n8n de un CRM o de un chatbot?',
        paragraphs: [
          'n8n no guarda tus clientes ni conversa con ellos. <strong>Es el puente entre las herramientas que sí lo hacen.</strong> El CRM guarda los contactos, el chatbot atiende y n8n mueve los datos de uno a otro.',
          'Por eso no reemplaza a un <a href="/blog/crm-con-whatsapp-para-vender-mas-en-panama/">CRM con WhatsApp</a> ni a un <a href="/blog/chatbots-con-ia-para-negocios-en-panama/">chatbot con IA</a>. Los complementa. Si hoy no tienes CRM, n8n no lo va a crear por ti; primero define dónde vive la información de tus clientes.',
          'Con la IA pasa algo parecido. n8n trae nodos para conectar modelos de IA, pero el valor está en el proceso que diseñas alrededor: qué datos recibe el modelo, quién revisa lo que escribe y qué hace el flujo si responde algo raro.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Cómo saber si tu pyme necesita n8n?',
        intro: 'Si marcas tres o más, probablemente tienes un flujo que vale la pena automatizar.',
        items: [
          'Alguien copia los mismos datos de una herramienta a otra varias veces al día.',
          'Se te han perdido leads porque nadie los pasó al CRM o a la hoja.',
          'Tu equipo envía a mano mensajes que siempre dicen lo mismo.',
          'Usas tres o más herramientas que no se hablan entre sí.',
          'Te enteras tarde de cosas importantes: un pedido nuevo, un pago, una queja.',
          'Armar el reporte de la semana te toma horas de juntar números.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo n8n no es la respuesta?',
        paragraphs: [
          'Si la tarea pasa pocas veces al mes, montar y mantener un flujo cuesta más que hacerla a mano. Si tu proceso cambia cada semana, el flujo se rompe cada vez que cambia; primero hay que ordenarlo.',
          'Tampoco conviene usarlo para decisiones que requieren criterio, como aprobar un descuento o responder un reclamo delicado. Ahí el error automático cuesta más que el tiempo de una persona.',
          'Y si tu necesidad real es un buzón de WhatsApp con bot y CRM listos, quizá te sirva más una herramienta hecha que un flujo a medida. En nuestro caso es <a href="/saas/wazacrm/">WazaCRM</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Quién monta y mantiene los flujos?',
        paragraphs: [
          'Puedes aprender n8n por tu cuenta: su editor es visual y hay mucha documentación. El reto no es arrastrar cajas, sino prever lo que falla: un campo vacío, un mensaje duplicado, una contraseña que vence.',
          'En Elemento Web montamos flujos de n8n con reintentos, aviso de fallo el mismo día y documentación escrita. Nuestro propio formulario de contacto pasa por un flujo de n8n. El servicio está en <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones con n8n</a>, y lo que cuesta lo explicamos en <a href="/blog/cuanto-cuesta-automatizar-procesos-con-n8n-en-panama/">cuánto cuesta automatizar procesos con n8n</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre n8n',
        items: [
          { q: '¿n8n es gratis?', a: 'La edición Community, instalada en tu propio servidor, funciona sin clave de licencia según la documentación de n8n consultada el 23 de octubre de 2026. Pagas el servidor y el tiempo de mantenerlo. La nube de n8n y las ediciones Business y Enterprise son de pago.' },
          { q: '¿Se pronuncia «ene ocho ene»?', a: 'Mucha gente lo dice así, letra por letra. El nombre viene de «nodemation», con ocho letras entre la n inicial y la final. En la práctica, cualquiera de las dos formas se entiende.' },
          { q: '¿n8n funciona en español?', a: 'Los flujos procesan datos en cualquier idioma, así que tus mensajes, correos y documentos pueden ir en español. La interfaz del editor y la documentación oficial están en inglés, lo que pesa si vas a montarlo tú.' },
          { q: '¿Necesito un programador para usar n8n?', a: 'Para flujos sencillos, no. Para conectar servicios sin nodo propio, manejar errores y mantener un servidor, ayuda tener criterio técnico. Muchas pymes contratan el montaje y luego solo revisan que el flujo siga trabajando.' },
          { q: '¿n8n sirve para conectar WhatsApp?', a: 'Sí. Tiene un nodo para la API de WhatsApp Business Cloud y otro que recibe sus eventos. Requiere una app de Meta y un número en la API oficial. Lo explicamos en la guía de cómo conectar WhatsApp con n8n.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones con n8n' },
          { slug: 'blog/automatizaciones-con-n8n-para-pymes', label: 'Automatizaciones con n8n para pymes' },
          { slug: 'blog/n8n-zapier-o-make-cual-conviene', label: 'n8n, Zapier o Make: cuál conviene' },
          { slug: 'blog/cuanto-cuesta-automatizar-procesos-con-n8n-en-panama', label: 'Cuánto cuesta automatizar con n8n' },
          { slug: 'blog/como-conectar-whatsapp-con-n8n', label: 'Cómo conectar WhatsApp con n8n' },
        ],
      },
    ],
    cta: {
      h2: '¿Qué tarea de tu negocio se hace igual todos los días?',
      wa: 'Hola, quiero saber si n8n le sirve a mi negocio. ¿Me ayudan?',
    },
  },

  /* ============================================================= *
   * 13 · n8n, Zapier o Make: cuál conviene y cuánto cuesta
   * ============================================================= */
  {
    slug: 'blog/n8n-zapier-o-make-cual-conviene',
    parent,
    title: 'n8n, Zapier o Make: cuál conviene y cuánto cuesta',
    description: 'Comparamos n8n, Zapier y Make con sus planes y precios publicados (consulta del 23-oct-2026), cómo cobra cada uno y cuál conviene según tu volumen.',
    h1: 'n8n, Zapier o Make: cuál conviene y cuánto cuesta',
    breadcrumb: 'n8n, Zapier o Make',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'Conviene Zapier si quieres empezar rápido con pocas tareas y muchas aplicaciones listas. Make conviene si quieres flujos visuales con ramas a un costo por crédito. n8n conviene cuando el volumen crece, necesitas lógica compleja o quieres los datos en tu servidor. La diferencia de fondo está en qué cobra cada uno: tareas, créditos o ejecuciones.',
      'Abajo van los planes y precios que cada empresa publica, consultados el 23 de octubre de 2026, y un ejemplo para ver cómo cambia la cuenta con el mismo flujo.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué cobra cada herramienta: tareas, créditos o ejecuciones?',
        paragraphs: [
          'Las tres venden planes mensuales, pero miden el uso con unidades distintas. Esa unidad decide cuánto pagas cuando tu negocio crece.',
          '<strong>Zapier cobra por tarea.</strong> Según su <a href="https://zapier.com/pricing" rel="noopener">página de precios</a>, una tarea se cuenta cada vez que Zapier completa una unidad de trabajo. El disparador y las acciones fallidas no cuentan; algunas acciones cuentan más de una tarea.',
          '<strong>Make cobra por crédito.</strong> Su <a href="https://www.make.com/en/pricing" rel="noopener">página de precios</a> dice que la mayoría de las acciones consume un crédito. Leer de una aplicación, crear registros y transformar datos cuentan. Los routers y los manejadores de errores no.',
          '<strong>n8n cobra por ejecución</strong> en su nube. Su <a href="https://n8n.io/pricing/" rel="noopener">página de precios</a> define la ejecución como una corrida completa del flujo, sin importar cuántos pasos tenga ni cuántos datos procese.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Cuánto cuesta cada una? Planes publicados al 23 de octubre de 2026',
        intro: 'Precios tal como aparecen en cada página oficial, sin ITBMS ni conversiones. Confírmalos antes de contratar: cambian.',
        items: [
          { h3: 'n8n (nube)', text: 'Starter: 20 € al mes con facturación anual, 2.500 ejecuciones. Pro: 50 € al mes anual, 10.000 ejecuciones. Business: 667 € al mes anual, 40.000 ejecuciones, hoy solo autoalojado. Enterprise: a cotizar. Los precios están en euros y el precio con pago mensual no aparecía.' },
          { h3: 'n8n (autoalojado)', text: 'La edición Community funciona sin clave de licencia, según su documentación de instalación. No pagas a n8n, pero sí el servidor y el tiempo de mantenerlo.' },
          { h3: 'Zapier', text: 'Free: 100 tareas al mes. Pro: desde US$ 19.99 al mes anual o US$ 29.99 mensual, con 750 tareas. Team: desde US$ 69 al mes anual o US$ 103.50 mensual, con 2.000 tareas. Enterprise: a cotizar. El precio sube por escalones de tareas.' },
          { h3: 'Make', text: 'El plan Free trae 1.000 créditos al mes. La página nombra los planes Core, Pro, Teams y Enterprise, pero en nuestra consulta no mostraba sus precios. Revisa su página antes de comparar.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Un ejemplo: el mismo flujo en las tres herramientas',
        paragraphs: [
          'Imagina un flujo con un disparador y cuatro acciones: recibe un lead, lo valida, lo guarda en el CRM, avisa al vendedor y le escribe al cliente. Corre 1.000 veces al mes.',
          'En <strong>n8n</strong> son 1.000 ejecuciones, porque cada corrida cuenta una vez. Cabe en el plan Starter publicado. En <strong>Zapier</strong>, si cada acción cuenta como una tarea y el disparador no cuenta, son unas 4.000 tareas al mes. Eso ya pide un escalón de Pro de 5.000 tareas, publicado a US$ 89 al mes anual.',
          'En <strong>Make</strong>, si cada módulo consume un crédito, incluido el que lee el lead, serían unos 5.000 créditos al mes. No ponemos precio porque no lo vimos publicado en la consulta.',
          'Son cuentas aproximadas con las reglas que publica cada empresa. El conteo real depende de cómo se arme el flujo, así que haz la cuenta con tu proceso antes de elegir.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Cuál conviene según tu caso?',
        intro: 'No hay una mejor para todos. Hay una que encaja con tu volumen, tu equipo y tus datos.',
        items: [
          { h3: 'Zapier, si empiezas con poco', text: 'Pocos flujos, pocas corridas y nadie técnico en el equipo. Su catálogo de aplicaciones es amplio y se configura rápido. Vigila la cuenta de tareas cuando el volumen suba.' },
          { h3: 'Make, si quieres ver el flujo dibujado', text: 'Flujos con ramas y transformaciones, armados en un lienzo visual y pagados por crédito. Útil cuando Zapier se queda corto en lógica y aún no quieres un servidor.' },
          { h3: 'n8n en la nube, si los flujos tienen muchos pasos', text: 'Como cobra por ejecución, un flujo largo cuesta lo mismo que uno corto. Conviene cuando cada corrida tiene muchos pasos o condiciones.' },
          { h3: 'n8n autoalojado, si hay volumen o datos sensibles', text: 'Sin límite de ejecuciones por plan y con los datos de tus clientes en tu servidor. A cambio, alguien tiene que actualizarlo, respaldarlo y vigilarlo.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Y los datos de tus clientes?',
        paragraphs: [
          'Con Zapier, Make o la nube de n8n, los datos que pasan por el flujo se procesan en los servidores de esa empresa. Con n8n autoalojado, pasan por el servidor que tú eliges.',
          'En Panamá, la Ley 81 de 2019 regula el tratamiento de datos personales. Tener el servidor bajo tu control facilita saber dónde están los datos y quién los ve. Lo vemos en <a href="/blog/ley-81-proteccion-de-datos-chatbots-panama/">qué exige la Ley 81 a un chatbot o CRM</a>. Esto no es asesoría legal; confírmalo con tu abogado.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Por qué en Elemento Web trabajamos con n8n?',
        paragraphs: [
          'Elegimos n8n porque permite lógica compleja, conecta casi cualquier servicio con API y se puede alojar en el servidor del cliente o en su nube. Eso nos deja recomendar una u otra opción con la cuenta hecha.',
          'No significa que n8n sea siempre la respuesta. Si ya usas Zapier o Make y te funciona, no hace falta migrar. Cuando cotizamos <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones con n8n</a>, te dejamos por escrito si conviene la nube o un servidor propio, y por qué.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes: n8n, Zapier y Make',
        items: [
          { q: '¿Cuál es la más barata?', a: 'Depende del volumen y de cuántos pasos tiene cada flujo. Con pocas corridas, los planes gratis de Zapier o Make pueden bastar. Con muchas corridas de muchos pasos, cobrar por ejecución o autoalojar n8n suele salir más barato. Haz la cuenta con tu flujo real.' },
          { q: '¿Puedo pasar mis flujos de Zapier a n8n?', a: 'No hay un botón que los copie. Los flujos se vuelven a armar en n8n, paso por paso. Conviene hacerlo flujo por flujo, empezando por el que más tareas consume, y apagar el anterior cuando el nuevo ya está probado.' },
          { q: '¿n8n tiene menos integraciones que Zapier?', a: 'Tiene menos nodos listos, pero cuando un servicio no tiene nodo se conecta por su API con un nodo genérico de peticiones HTTP. Eso requiere más conocimiento técnico que elegir una aplicación de una lista.' },
          { q: '¿Los precios incluyen ITBMS?', a: 'Los precios que citamos son los publicados por cada empresa, sin impuestos de Panamá. Los de n8n están en euros. Al pagar con tarjeta, tu banco puede cobrar la conversión y otros cargos.' },
          { q: '¿Por qué no pusieron los precios de Make?', a: 'Porque en nuestra consulta del 23 de octubre de 2026 su página no mostraba montos para los planes de pago, solo los créditos del plan gratis. Preferimos no poner una cifra que no pudimos verificar.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones con n8n' },
          { slug: 'blog/que-es-n8n-y-para-que-sirve', label: 'Qué es n8n y para qué sirve' },
          { slug: 'blog/cuanto-cuesta-automatizar-procesos-con-n8n-en-panama', label: 'Cuánto cuesta automatizar con n8n' },
          { slug: 'blog/automatizaciones-con-n8n-para-pymes', label: 'Automatizaciones con n8n para pymes' },
        ],
      },
    ],
    cta: {
      h2: 'Hagamos la cuenta con tu flujo real',
      wa: 'Hola, no sé si me conviene n8n, Zapier o Make para automatizar mi negocio. ¿Me ayudan?',
    },
  },

  /* ============================================================= *
   * 14 · ¿Cuánto cuesta automatizar procesos con n8n en Panamá?
   * ============================================================= */
  {
    slug: 'blog/cuanto-cuesta-automatizar-procesos-con-n8n-en-panama',
    parent,
    title: '¿Cuánto cuesta automatizar procesos con n8n en Panamá?',
    description: 'Qué pagas al automatizar con n8n en Panamá: el montaje de cada flujo, la plataforma (nube o servidor propio), las herramientas conectadas y el mantenimiento.',
    h1: '¿Cuánto cuesta automatizar procesos con n8n en Panamá?',
    breadcrumb: 'Cuánto cuesta automatizar con n8n',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'Automatizar procesos con n8n en Panamá tiene cuatro costos: el montaje de cada flujo, la plataforma n8n, las herramientas que conectas y el mantenimiento. El montaje se cotiza por flujo según su complejidad. n8n puede ser gratis en tu propio servidor o un plan mensual en su nube. Si buscas un proyecto completo de IA y automatización, en Elemento Web parte de US$ 2,900 más el consumo de los modelos.',
      'Abajo desglosamos cada parte, qué hace subir el precio y cómo saber si la automatización se paga sola.',
    ],
    blocks: [
      {
        type: 'cards',
        h2: '¿Qué pagas cuando automatizas con n8n?',
        intro: 'Cuatro partes. Pide que una cotización las separe para poder comparar.',
        items: [
          { h3: '1. El montaje del flujo', text: 'Mapear el proceso, armar el flujo, probarlo con datos reales y documentarlo. Es un pago por flujo y depende de su complejidad.' },
          { h3: '2. La plataforma n8n', text: 'En su nube pagas un plan mensual según las ejecuciones. Autoalojado, la edición Community no cobra licencia, pero pagas el servidor.' },
          { h3: '3. Las herramientas conectadas', text: 'Tu CRM, tu correo, tu tienda o la API de WhatsApp tienen su propia suscripción o cobro por uso. n8n no las reemplaza ni las paga.' },
          { h3: '4. El mantenimiento', text: 'Actualizar el servidor, revisar fallos y ajustar el flujo cuando cambia tu proceso o una API. Puede ser interno o contratado.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cobra Elemento Web por una automatización con n8n?',
        paragraphs: [
          'Nuestra referencia publicada es <strong>desde US$ 300 por automatización</strong>, y el monto se confirma en la cotización. Ese punto de partida aplica a un flujo sencillo entre dos herramientas.',
          'Un flujo con varias condiciones, más integraciones o conexión a un modelo de IA toma más trabajo y cuesta más. Lo dimensionamos antes de empezar y te damos la fecha de entrega por escrito.',
          'Cada automatización incluye mapa del proceso, reintentos, aviso de fallo el mismo día, documentación y ajuste tras la puesta en marcha. El detalle está en <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones con n8n</a>. Los precios son en USD y sin ITBMS (7 %).',
          'Si lo que necesitas es un proyecto más amplio, con agentes de IA y varias áreas, mira <a href="/inteligencia-artificial-para-empresas-panama/">IA para empresas</a>: parte de US$ 2,900 por proyecto más el consumo de los modelos.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué hace subir el precio de un flujo?',
        intro: 'Si tu proceso tiene varios de estos puntos, espera una cotización por encima del punto de partida.',
        items: [
          'Muchas ramas: el flujo hace cosas distintas según el tipo de cliente, el monto o la hora.',
          'Herramientas sin nodo listo en n8n, que se conectan por su API y hay que estudiar.',
          'Datos sucios que hay que limpiar: teléfonos con formatos distintos, nombres duplicados.',
          'Un modelo de IA que clasifica o redacta, con revisión humana antes de enviar.',
          'Volumen alto que obliga a cuidar límites de las APIs y reintentos.',
          'Datos sensibles que exigen permisos estrictos y un servidor bajo tu control.',
          'Flujos que dependen de otros flujos y tienen que coordinarse.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la plataforma n8n?',
        paragraphs: [
          'En la <a href="https://n8n.io/pricing/" rel="noopener">página de precios de n8n</a>, consultada el 23 de octubre de 2026, el plan Starter de su nube cuesta 20 € al mes con facturación anual e incluye 2.500 ejecuciones. El plan Pro cuesta 50 € al mes anual con 10.000 ejecuciones. Los precios están en euros.',
          'Si prefieres instalarlo, su <a href="https://docs.n8n.io/hosting/" rel="noopener">documentación de instalación</a> indica que sin clave de licencia funciona como la edición Community, gratuita. Pagas el servidor, que cotizamos aparte según el volumen.',
          'La comparación completa con Zapier y Make está en <a href="/blog/n8n-zapier-o-make-cual-conviene/">n8n, Zapier o Make: cuál conviene</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Y si el flujo envía mensajes por WhatsApp?',
        paragraphs: [
          'Si el flujo usa la API oficial de WhatsApp, Meta cobra aparte por mensaje entregado, según la categoría y el país. Ese costo no es de n8n ni nuestro: lo factura Meta.',
          'Desde el 1 de octubre de 2026, según su <a href="https://developers.facebook.com/docs/whatsapp/pricing" rel="noopener">página de precios</a> (consultada el 23 de octubre de 2026), Meta también cobra las respuestas de servicio desde la número 1.001 del mes en cada número. Las tarifas de Panamá las explicamos en <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje de WhatsApp</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cómo saber si la automatización se paga sola?',
        paragraphs: [
          'Haz una cuenta simple antes de cotizar. Mide cuántas veces al mes se hace la tarea y cuántos minutos toma cada vez. Multiplica, y tendrás las horas al mes que hoy se van en eso.',
          'Luego pon esas horas al costo por hora de quien las hace. Compara el resultado con el montaje más lo que pagarás cada mes por plataforma y herramientas. Si el ahorro mensual supera el costo mensual y recupera el montaje en pocos meses, vale la pena.',
          'Suma también lo que no se ve en horas: leads que hoy se pierden, errores al copiar datos y respuestas que llegan tarde. <strong>Un lead perdido al mes puede valer más que todo el flujo.</strong> Para medirlo bien, lee <a href="/blog/medir-leads-whatsapp-ga4-crm/">cómo medir leads de WhatsApp en GA4 y el CRM</a>.',
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo pedir una cotización comparable?',
        intro: 'Con esto, cualquier proveedor puede darte un precio cerrado y tú puedes comparar.',
        items: [
          { h3: 'Describe el proceso actual', text: 'Qué pasa hoy, paso a paso: de dónde llega el dato, quién lo copia y a dónde lo lleva.' },
          { h3: 'Lista las herramientas', text: 'Nombre de cada aplicación que interviene y si tienes acceso de administrador.' },
          { h3: 'Estima el volumen', text: 'Cuántas veces al mes ocurre y si hay picos en ciertos días u horas.' },
          { h3: 'Define qué pasa si falla', text: 'Quién debe enterarse y por qué canal. Eso define el aviso de fallo.' },
          { h3: 'Pide el desglose', text: 'Montaje, plataforma, herramientas y mantenimiento, cada uno por separado y por escrito.' },
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre el costo de n8n',
        items: [
          { q: '¿Hay un pago mensual además del montaje?', a: 'Sí, casi siempre. Pagas la plataforma, ya sea el plan de la nube de n8n o el servidor, y las herramientas conectadas. El mantenimiento puede ser aparte. Pide que la cotización separe el pago único de los mensuales.' },
          { q: '¿Cuánto tarda en quedar lista una automatización?', a: 'Un flujo sencillo entre dos herramientas se entrega en poco tiempo. Los flujos con muchas ramas toman más porque hay que probar cada caso. Damos la fecha de entrega por escrito al dimensionar el flujo, antes de empezar.' },
          { q: '¿Es más barato hacerlo con un freelancer?', a: 'Puede serlo en el montaje. Pregunta siempre quién atiende los fallos después, si deja documentación y a nombre de quién quedan el servidor y las cuentas. Un flujo sin dueño claro sale caro cuando se rompe.' },
          { q: '¿El flujo queda a mi nombre?', a: 'Lo razonable es que sí: la cuenta de n8n o el servidor a tu nombre, con accesos para ti, y la documentación del flujo entregada. Pídelo por escrito a cualquier proveedor.' },
          { q: '¿Puedo empezar con una sola automatización?', a: 'Sí, y es lo que recomendamos. Empieza por el proceso que más horas consume y menos criterio requiere. Cuando funciona, el tiempo que libera ayuda a justificar el siguiente flujo.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones con n8n' },
          { slug: 'blog/n8n-zapier-o-make-cual-conviene', label: 'n8n, Zapier o Make: cuál conviene' },
          { slug: 'blog/que-es-n8n-y-para-que-sirve', label: 'Qué es n8n y para qué sirve' },
          { slug: 'blog/como-conectar-whatsapp-con-n8n', label: 'Cómo conectar WhatsApp con n8n' },
          { slug: 'precios', label: 'Precios' },
        ],
      },
    ],
    cta: {
      h2: 'Cuéntanos tu proceso y te damos un precio por escrito',
      wa: 'Hola, quiero cotizar una automatización con n8n para mi negocio. ¿Me ayudan?',
    },
  },

  /* ============================================================= *
   * 15 · Cómo conectar WhatsApp con n8n
   * ============================================================= */
  {
    slug: 'blog/como-conectar-whatsapp-con-n8n',
    parent,
    title: 'Cómo conectar WhatsApp con n8n: opciones y pasos',
    description: 'Cómo conectar WhatsApp con n8n por la API oficial: el nodo WhatsApp Business Cloud, el disparador de mensajes, el webhook, lo que pide Meta y errores comunes.',
    h1: 'Cómo conectar WhatsApp con n8n',
    breadcrumb: 'Conectar WhatsApp con n8n',
    category: 'IA y Automatización',
    date: '2026-10-23',
    lead: [
      'Para conectar WhatsApp con n8n necesitas un número en la API oficial de WhatsApp Business Cloud y una app de Meta. En n8n usas el nodo WhatsApp Business Cloud para enviar mensajes y plantillas, y el nodo WhatsApp Trigger para recibir los mensajes que llegan. La app de WhatsApp Business del celular no se conecta a n8n.',
      'Abajo van las opciones reales, sacadas de la documentación de n8n y de Meta, los pasos y los errores que más tiempo hacen perder.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Qué necesitas antes de empezar?',
        paragraphs: [
          'La integración usa la <strong>API oficial de WhatsApp Business</strong>, no la app del celular. Si aún no sabes cuál usas, lee <a href="/blog/whatsapp-business-o-api-cual-necesita-tu-negocio/">WhatsApp Business o API: cuál necesitas</a>.',
          'Según la <a href="https://docs.n8n.io/integrations/builtin/credentials/whatsapp/" rel="noopener">guía de credenciales de WhatsApp en n8n</a> (consultada el 23 de octubre de 2026), necesitas tres cosas en Meta: una cuenta de desarrollador, un portafolio de empresa (antes Business Manager) y una app de empresa con el producto WhatsApp agregado.',
          'La misma guía pide poner en la app la URL de tu política de privacidad y de tus términos, y pasarla a modo Live. Para uso completo en producción, Meta exige verificación adicional y su proceso de App Review.',
          'Y necesitas n8n accesible desde internet, en su nube o en tu servidor, para que Meta pueda enviarle los mensajes que llegan.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué opciones hay para conectar WhatsApp con n8n?',
        intro: 'Tres piezas de n8n, según si quieres enviar, recibir o hacer algo que el nodo no trae.',
        items: [
          { h3: 'Nodo WhatsApp Business Cloud (enviar)', text: 'Envía mensajes, envía plantillas y puede enviar un mensaje y esperar la respuesta (aprobación, texto libre o formulario). También sube, descarga y borra archivos. Usa un token de acceso y el ID de la cuenta de WhatsApp Business.' },
          { h3: 'Nodo WhatsApp Trigger (recibir)', text: 'Arranca el flujo cuando Meta avisa de un evento: un mensaje que llega, un cambio de estado de una plantilla, un cambio de calidad del número y otros. Usa una credencial OAuth2 con el ID y el secreto de tu app.' },
          { h3: 'Webhook y HTTP Request (a la medida)', text: 'Si una operación no está en el nodo, n8n permite llamar a la API de WhatsApp con el nodo HTTP Request y la misma credencial. El nodo Webhook recibe peticiones de cualquier servicio que te avise por URL.' },
        ],
      },
      {
        type: 'steps',
        h2: '¿Cómo se conecta, paso a paso?',
        intro: 'Resumen de la guía oficial de n8n. Los nombres de los menús son los de Meta, en inglés.',
        items: [
          { h3: 'Crea la app en Meta', text: 'En el panel de apps de Meta for Developers, crea una app de empresa, agrega el producto WhatsApp y elige tu portafolio de empresa.' },
          { h3: 'Completa los datos de la app', text: 'En App settings, Basic, pon la URL de tu política de privacidad y la de tus términos. Luego cambia App Mode a Live.' },
          { h3: 'Genera la credencial para enviar', text: 'En WhatsApp, API Setup, genera un token de acceso y copia el ID de la cuenta de WhatsApp Business. Cárgalos en n8n como credencial de WhatsApp.' },
          { h3: 'Genera la credencial para recibir', text: 'En App settings, Basic, copia el App ID y el App Secret. En n8n se usan como Client ID y Client Secret de la credencial OAuth2 del disparador.' },
          { h3: 'Arma el flujo y publícalo', text: 'Pon el WhatsApp Trigger con el evento de mensajes, agrega los pasos que necesites y publica el flujo para que quede escuchando en producción.' },
          { h3: 'Confirma la suscripción de la app', text: 'Revisa que tu app esté suscrita a la cuenta de WhatsApp Business. Sin eso, los mensajes no llegan a n8n.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué errores son los más comunes?',
        paragraphs: [
          'La <a href="https://docs.n8n.io/integrations/builtin/trigger-nodes/n8n-nodes-base.whatsapptrigger/" rel="noopener">documentación del WhatsApp Trigger</a> (consultada el 23 de octubre de 2026) advierte tres trampas. La primera: <strong>WhatsApp solo permite registrar un webhook por app</strong>. Si pruebas el flujo, la URL de prueba reemplaza a la de producción y el flujo publicado puede dejar de recibir mensajes.',
          'La segunda: publicar el flujo registra la URL, pero no suscribe tu app a la cuenta de WhatsApp Business. Meta solo envía eventos a las apps suscritas. Los mensajes nunca llegan y n8n no muestra ningún error.',
          'La tercera: no borres la suscripción de la app para arreglar un choque de webhooks. Eso desconecta tu app de la cuenta. Para probar, la documentación sugiere despublicar el flujo y volver a publicarlo al terminar, aunque eso detiene los mensajes en producción mientras pruebas.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Qué reglas de Meta afectan a tu flujo?',
        paragraphs: [
          'Según la <a href="https://developers.facebook.com/docs/whatsapp/pricing" rel="noopener">página de precios de Meta</a> (consultada el 23 de octubre de 2026), cuando un cliente te escribe se abre una ventana de atención de 24 horas. Dentro de ella puedes responder con mensajes libres. Fuera de ella, solo con plantillas aprobadas.',
          'Para tu flujo eso significa algo concreto: <strong>si el flujo escribe primero o responde tarde, debe usar la operación de enviar plantilla</strong>, no un texto libre. Las plantillas se crean y aprueban en Meta antes de usarlas.',
          'Meta cobra por mensaje entregado según la categoría. Desde el 1 de octubre de 2026 cobra también las respuestas de servicio desde la 1.001 del mes en cada número. Las tarifas para Panamá están en <a href="/blog/cuanto-cobra-meta-por-mensaje-de-whatsapp-en-panama/">cuánto cobra Meta por mensaje</a>, y los topes de envío en <a href="/blog/limites-de-mensajes-de-whatsapp-business-api/">límites de mensajes de la API</a>.',
        ],
      },
      {
        type: 'cards',
        h2: '¿Qué puedes automatizar con WhatsApp y n8n?',
        intro: 'Ideas de flujos. Cada una se arma con las piezas de arriba.',
        items: [
          { h3: 'Aviso de lead al vendedor', text: 'Cuando alguien llena tu formulario web, el vendedor recibe por WhatsApp el nombre, lo que pidió y el enlace al CRM.' },
          { h3: 'Mensajes que llegan al CRM', text: 'Cada mensaje entrante crea o actualiza el contacto en tu CRM, con la fecha y el texto, para que nadie lo pierda.' },
          { h3: 'Confirmaciones y recordatorios', text: 'Una cita agendada dispara una plantilla de confirmación y otra de recordatorio el día anterior.' },
          { h3: 'Aprobaciones internas', text: 'El flujo pide por WhatsApp a un gerente que apruebe un descuento y espera su respuesta antes de seguir.' },
          { h3: 'Respuestas con IA', text: 'Un modelo de IA propone una respuesta a partir de tus datos. Conviene que una persona la revise en los casos delicados.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Lo armas tú o usas algo ya hecho?',
        paragraphs: [
          'Si tienes a alguien técnico y quieres un flujo a tu medida, n8n con la API oficial te da control total. Tú decides qué pasa con cada mensaje y dónde se guardan los datos.',
          'Si lo que buscas es una bandeja compartida, un bot y un CRM listos, quizá no necesitas armar nada. Eso es <a href="/saas/wazacrm/">WazaCRM</a>, desde US$ 349 al mes. Para campañas, mira <a href="/marketing/whatsapp-marketing-masivo-panama/">WhatsApp marketing</a>.',
          'En Elemento Web somos Tech Provider verificado por Meta y montamos estos flujos con aviso de fallo y documentación. El servicio está en <a href="/marketing/automatizaciones-n8n-panama/">automatizaciones con n8n</a>.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre WhatsApp y n8n',
        items: [
          { q: '¿Puedo conectar la app de WhatsApp Business del celular a n8n?', a: 'No por la vía oficial. Los nodos de n8n usan la API de WhatsApp Business Cloud de Meta. Las conexiones que imitan a la app del celular no son oficiales y pueden poner en riesgo tu número.' },
          { q: '¿Puedo usar el mismo número que ya tengo?', a: 'Depende de cómo lo uses hoy y de las condiciones que Meta pone al registrar un número en la API. Revísalo antes de migrar, porque cambia cómo atiendes desde el celular. Lo explicamos en la guía de WhatsApp Business o API.' },
          { q: '¿Por qué mi flujo no recibe mensajes?', a: 'Las causas más comunes, según la documentación de n8n, son que la app no está suscrita a la cuenta de WhatsApp Business o que la URL de prueba reemplazó a la de producción. WhatsApp solo admite un webhook por app.' },
          { q: '¿n8n cobra por cada mensaje de WhatsApp?', a: 'No. n8n en la nube cobra por ejecución del flujo y autoalojado no cobra licencia en la edición Community. Los mensajes los cobra Meta según la categoría y el país.' },
          { q: '¿Puedo mandar mensajes masivos desde n8n?', a: 'Técnicamente sí, con plantillas aprobadas. Pero aplican los límites de envío de tu portafolio y las reglas de calidad de Meta. Para campañas conviene una herramienta pensada para eso y una lista con permiso.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'marketing/automatizaciones-n8n-panama', label: 'Automatizaciones con n8n' },
          { slug: 'blog/que-es-n8n-y-para-que-sirve', label: 'Qué es n8n y para qué sirve' },
          { slug: 'blog/whatsapp-business-o-api-cual-necesita-tu-negocio', label: 'WhatsApp Business o API' },
          { slug: 'blog/cuanto-cuesta-automatizar-procesos-con-n8n-en-panama', label: 'Cuánto cuesta automatizar con n8n' },
          { slug: 'blog/limites-de-mensajes-de-whatsapp-business-api', label: 'Límites de mensajes de la API' },
        ],
      },
    ],
    cta: {
      h2: 'Conectemos tu WhatsApp con tus herramientas',
      wa: 'Hola, quiero conectar mi WhatsApp con n8n para automatizar mensajes. ¿Me ayudan?',
    },
  },
];
