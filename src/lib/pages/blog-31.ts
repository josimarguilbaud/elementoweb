/* BLOG — Lote 31: guía long-form sobre diseño web para arquitectos y
   diseñadores de interiores en Panamá. PageData con parent { slug: 'blog' };
   el listado /blog la recoge por fecha y categoría. Enlaces internos solo a
   slugs reales del sitio. */
import type { PageData } from '../types';

export const blog31: PageData[] = [
  {
    slug: 'blog/diseno-web-para-arquitectos-panama',
    parent: { slug: 'blog', label: 'Blog' },
    title: 'Diseño web para arquitectos en Panamá: el portafolio vende',
    description: 'Qué debe tener el portafolio de un arquitecto en Panamá: fotos reales de proyectos, una página por obra con su historia y cuándo no conviene todavía.',
    h1: 'Diseño web para arquitectos y diseñadores de interiores en Panamá: el portafolio es la venta',
    breadcrumb: 'Diseño web para arquitectos e interiores',
    category: 'Diseño web',
    date: '2026-09-03',
    heroImage: {
      src: '/images/blog/diseno-web-para-arquitectos-panama.jpg',
      alt: 'Sala de estar minimalista y contemporánea con líneas arquitectónicas limpias, materiales naturales, mobiliario elegante y luz natural entrando por ventanales amplios',
    },
    lead: [
      'Alguien busca "diseñador de interiores en Panamá" o "arquitecto para remodelación residencial" y abre cuatro o cinco portafolios en pestañas distintas. No lee la biografía de nadie todavía, ni compara certificaciones ni años de experiencia: mira fotos. En menos de un minuto, antes de escribir el primer mensaje, ya decidió con cuál de esos cuatro se imagina discutiendo los planos de su casa durante los próximos meses.',
      'Esa es la particularidad del rubro: la decisión es casi enteramente visual y emocional, y el portafolio no acompaña la venta, la hace. En esta guía repasamos qué debe tener un portafolio para vender de verdad —fotos reales, no renders de catálogo—, por qué una página por proyecto cuenta más que una galería sin contexto, cuánto cuesta este tipo de web en Panamá y, con la misma honestidad, cuándo todavía no conviene invertir en ella.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: 'El portafolio no es una sección de tu web: es la venta completa',
        paragraphs: [
          'En casi cualquier otro negocio, el texto hace parte del trabajo de convencer: explica beneficios, resuelve objeciones, compara precios. En arquitectura y diseño de interiores, el texto acompaña; la imagen vende. Ningún párrafo sobre "quince años de trayectoria y compromiso con la excelencia" convence tanto como una sola fotografía bien tomada de un proyecto terminado.',
          'Por eso la regla más importante, y la que más se rompe, es simple: fotos reales de proyectos reales, nunca renders genéricos de banco de imágenes ni el clásico interior perfecto que cualquiera puede comprar por diez dólares en un stock. Un render presentado como si fuera la obra terminada, o una foto de catálogo que no corresponde a ningún proyecto tuyo, no llena espacio: le dice al visitante, sin que lo digas con palabras, que no tienes trabajo real suficiente para mostrar.',
          'Organizar ese portafolio por tipo de proyecto —residencial, comercial, remodelación, diseño de interiores puro— importa casi tanto como la calidad de las fotos. El cliente que busca una remodelación de cocina no quiere abrirse paso entre diez oficinas corporativas para encontrar algo parecido a lo suyo; quiere llegar directo a lo que le interesa. Nuestra <a href="/industrias/diseno-web-arquitectos-diseno-interiores-panama/">página de diseño web para arquitectos y diseño de interiores</a> entra en el detalle de cómo estructuramos ese portafolio para que cumpla ese trabajo.',
        ],
      },
      {
        type: 'checklist',
        h2: 'Lo que tu portafolio necesita para vender, no solo para existir',
        intro: 'Un portafolio puede verse ordenado y aun así no convencer a nadie. Esto es lo que de verdad mueve la aguja.',
        items: [
          'Fotografía profesional de proyectos reales y terminados, nunca renders de catálogo ni bancos de imágenes genéricos',
          'Categorías claras por tipo de proyecto: residencial, comercial, remodelación, diseño de interiores',
          'Antes y después visible en cada remodelación, no solo la foto final del resultado',
          'Una página propia por proyecto, no una cuadrícula de miniaturas sin contexto',
          'Ubicación, año y tipo de encargo en cada proyecto, no solo fotos bonitas sin datos',
          'Imágenes optimizadas que carguen rápido y se vean nítidas también en celular',
          'Renders claramente identificados como tal cuando se usan, nunca mezclados con fotos reales sin aviso',
          'Pocos proyectos bien contados, en vez de una veintena mostrados a la ligera',
        ],
      },
      {
        type: 'steps',
        h2: 'Un proyecto, una página: el reto, la solución, el resultado',
        intro: 'Una galería de fotos sin contexto se ve bien pero no convence. Cada proyecto necesita contarse como lo que fue: un problema real que resolviste con criterio.',
        items: [
          { h3: '1. El reto', text: 'Qué pedía el cliente y con qué limitaciones —de espacio, de presupuesto, de una estructura existente que no se podía tocar—. Nombrar el reto real, en vez de saltar directo a las fotos bonitas, es lo que hace que el siguiente cliente con un problema parecido se reconozca en tu historia.' },
          { h3: '2. La solución', text: 'Qué decisiones de diseño tomaste y por qué, no solo la etiqueta de estilo. "Diseño minimalista" no explica nada; "abrimos la cocina hacia la sala para ganar luz natural sin perder almacenaje" sí, y es lo que separa un portafolio con criterio de uno decorativo.' },
          { h3: '3. El antes y después', text: 'Cuando el proyecto fue una remodelación, la comparación lado a lado es la pieza más convincente de todo el portafolio. No hace falta narrarla demasiado: se explica sola, y es la prueba más honesta de que tu trabajo transforma un espacio de verdad.' },
          { h3: '4. El resultado', text: 'Fotografía final a pantalla completa, sin apuros ni recortes forzados. Es el momento donde el cliente deja de mirar tu trabajo y empieza a imaginarse el suyo: el punto exacto donde se enamora del proyecto.' },
        ],
      },
      {
        type: 'statement',
        text: 'El cliente que revisa tu portafolio no está comparando estilos de diseño: se está imaginando a sí mismo trabajando contigo los próximos meses.',
        strong: 'Por eso vende confianza antes que estética.',
      },
      {
        type: 'prose',
        h2: 'Por qué esta decisión es casi 100% visual y emocional',
        paragraphs: [
          'Nadie contrata un arquitecto o un diseñador de interiores como quien contrata un plomero: comparando tres cotizaciones y eligiendo la más barata. El proyecto va a tomar meses, va a exigir decisiones constantes —de materiales, de presupuesto, de plazos— y el cliente va a tener que confiar en el criterio de otra persona sobre algo tan personal como su propia casa u oficina.',
          'Esa confianza se decide antes de la primera llamada, y se decide con los ojos. El cliente no está evaluando si sabes de estructuras o de normativa de construcción —eso lo da por hecho—; está evaluando si tu gusto coincide con el suyo y si se imagina, en la práctica, teniendo esa conversación larga y a veces incómoda sobre dinero y expectativas contigo. El portafolio hace ese trabajo de preselección emocional antes de que exista cualquier cotización.',
          'Esto no es un matiz menor: cambia qué se prioriza en la web. No hace falta convencer con argumentos racionales de por qué eres la mejor opción; hace falta mostrar suficiente trabajo real, bien presentado, para que el cliente correcto —el que comparte tu gusto— se reconozca en él y quiera ser el próximo proyecto de la lista.',
        ],
      },
      {
        type: 'cards',
        h2: 'El mismo portafolio no vende igual en cada tipo de proyecto',
        intro: 'Residencial, comercial y remodelación son ventas distintas, aunque las tres vivan en el mismo portafolio.',
        items: [
          { h3: 'Proyecto residencial', text: 'El cliente se imagina viviendo ahí. Importan los ambientes completos, la luz, cómo se siente el espacio de día a día, más que el detalle técnico de cada acabado.' },
          { h3: 'Proyecto comercial', text: 'El cliente —una empresa, un restaurante, una tienda— necesita ver cómo el diseño sirve a su operación y a su marca, no solo que se ve bien en foto. Aquí el contexto del negocio pesa tanto como la estética.' },
          { h3: 'Remodelación', text: 'Es donde el antes y después hace casi todo el trabajo de convencer. Ningún otro tipo de proyecto tiene una prueba tan directa e innegable de que tu intervención transformó el espacio.' },
        ],
      },
      {
        type: 'prose',
        h2: 'Cuánto cuesta la web de un arquitecto o diseñador de interiores en Panamá',
        paragraphs: [
          'Depende de cuántos proyectos vas a mostrar y de qué tan segmentado necesitas el portafolio. Si eres un profesional independiente que recién arranca su marca personal, con pocos proyectos pero sólidos, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> enfocada —una sola página, fotos fuertes, botón directo a WhatsApp— parte de $550 más ITBMS, y alcanza perfectamente para esa etapa.',
          'Cuando ya tienes proyectos suficientes para separarlos por tipo —residencial, comercial, remodelación— y cada uno merece su propia página con reto, solución y resultado, la Página PYME, desde $950 más ITBMS, es la opción recomendada: entre 8 y 12 páginas internas, con blog incluido para posicionar por tipo de proyecto con el tiempo. Si además vendes piezas de mobiliario o decoración curada junto con tus servicios de diseño, ahí sí entra el plan E-commerce, desde $1,500 más ITBMS: es prácticamente el único caso en este rubro donde tiene sentido.',
          'Para estudios más grandes que necesitan algo a medida —un portal de seguimiento de obra para clientes, integración con un CRM de leads, contenido en varios idiomas para clientes que llegan de fuera de Panamá—, hablamos de un proyecto corporativo desde $2,900 más ITBMS. Todos estos precios son en dólares y no incluyen el 7% de ITBMS, que se aplica según corresponda.',
          'Vale la pena no escatimar en dos cosas más allá del diseño: el hosting y el mantenimiento. Un portafolio vive de fotografía pesada, y el Hosting Cloud, desde $350 al año, carga esas imágenes mejor que el plan Compartido de $225; el VPS de $550 al año solo se justifica con tráfico alto o un estudio ya muy conocido. El mantenimiento —desde $59 al mes en el plan Básico, o $99 al mes si actualizas el portafolio seguido y no puedes esperar hasta el día siguiente para un cambio— mantiene esas fotos respaldadas y el sitio rápido con el tiempo. El desglose completo, con todo lo que suma o resta al costo, está en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: 'Cuándo no conviene invertir todavía en esto',
        paragraphs: [
          'Si tu estudio tiene una lista de espera de varios meses y honestamente no necesitas más clientes potenciales por ahora, invertir en un portafolio nuevo y más completo es resolver un problema que no tienes. El dinero rinde más guardado, o invertido en mejorar la fotografía de los proyectos que ya tienes en cola, hasta que esa lista de espera se acorte y de verdad necesites atraer al siguiente cliente.',
          'Tampoco conviene si todavía no tienes fotografía profesional de tu trabajo terminado, solo fotos de celular tomadas de afán al entregar la obra. Una web bien construida con fotos mediocres socava exactamente lo que se supone que debe vender. En ese caso, el mejor primer paso no es la web: es invertir en un fotógrafo para un puñado de proyectos, aunque sean pocos, y construir el portafolio alrededor de esas fotos cuando estén listas.',
          'Donde sí se justifica claramente invertir es cuando ya tienes proyectos reales bien fotografiados esperando a ser mostrados, cuando compites por clientes que todavía no te conocen, o cuando la web actual —si tienes una— no refleja ni de lejos la calidad del trabajo que muestran tus fotos guardadas en el teléfono o en Instagram.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para arquitectos y diseño de interiores',
        items: [
          { q: '¿Puedo usar renders en vez de fotos reales de mis proyectos?', a: 'Puedes, pero identificados claramente como renders, nunca presentados como si fueran la obra terminada. Mezclarlos sin aviso con fotografía real, apenas se nota, rompe la confianza que el portafolio existe para construir. Los renders sirven para proyectos en curso o por iniciar; para obra terminada, la fotografía real siempre pesa más.' },
          { q: '¿Cuántos proyectos necesito para lanzar mi portafolio?', a: 'Menos de los que crees, si están bien contados. Ocho o diez proyectos con fotografía profesional, reto, solución y resultado bien explicados convencen más que treinta con dos fotos cada uno. Publicar de más, solo para llenar espacio, diluye el trabajo bueno que sí tienes.' },
          { q: '¿Cuánto cuesta una web para un estudio de arquitectura o diseño de interiores en Panamá?', a: 'Para un profesional independiente con pocos proyectos, una landing page parte de $550 más ITBMS. Para un portafolio segmentado por tipo de proyecto con una página por obra, la Página PYME —la opción recomendada— parte de $950 más ITBMS. Un proyecto corporativo a medida, con portal de cliente o integraciones, parte de $2,900 más ITBMS.' },
          { q: '¿Qué hago si todavía no tengo fotografía profesional de mis proyectos?', a: 'Resolver eso antes que la web. Una fotografía profesional de un puñado de proyectos, aunque sean pocos, vale más que una web impecable llena de fotos de celular. El portafolio se construye alrededor de las fotos, no al revés.' },
          { q: '¿El SEO me va a traer clientes garantizado?', a: 'No, y cualquiera que lo prometa está exagerando. En este rubro la mayoría de los clientes llegan por recomendación o porque vieron tu trabajo en algún lado, no necesariamente buscando en Google. El SEO y el blog ayudan a que te encuentre quien todavía está averiguando —"cuánto cuesta remodelar un apartamento en Panamá", por ejemplo— pero no reemplazan un portafolio que convenza cuando esa persona por fin llega.' },
          { q: '¿Necesito mostrar antes y después en todos los proyectos?', a: 'Solo cuando aplica. Una remodelación se beneficia enormemente del antes y después porque es la prueba más directa de tu trabajo; una obra nueva no tiene "antes" que mostrar, y ahí el peso recae en el proceso, del concepto a la entrega, y en el resultado final.' },
        ],
      },
      {
        type: 'related',
        items: [
          { slug: 'industrias/diseno-web-arquitectos-diseno-interiores-panama', label: 'Diseño web para arquitectos y diseño de interiores' },
          { slug: 'servicios/diseno-web-corporativo-panama', label: 'Diseño web corporativo' },
          { slug: 'industrias/diseno-web-constructoras-panama', label: 'Diseño web para constructoras' },
          { slug: 'servicios/landing-pages-alta-conversion-panama', label: 'Landing pages de alta conversión' },
          { slug: 'blog/cuanto-cuesta-diseno-web-panama', label: '¿Cuánto cuesta una página web en Panamá?' },
        ],
      },
    ],
    cta: {
      h2: 'Una web donde tu portafolio hace el trabajo de convencer',
      wa: 'Hola, quiero una web para mi estudio de arquitectura o diseño de interiores en Panamá. ¿Me asesoran?',
    },
  },
];
