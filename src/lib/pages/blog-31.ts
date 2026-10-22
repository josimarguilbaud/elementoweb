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
      'En el diseño web para arquitectos y diseñadores de interiores en Panamá, el portafolio hace la venta: fotos reales de obras terminadas, una página por proyecto con reto, solución y resultado, y categorías por tipo de encargo. En Elemento Web, una landing parte desde $550 y una Web empresarial con portafolio segmentado desde $1,250, más ITBMS.',
      'Quien busca «diseñador de interiores en Panamá» o «arquitecto para remodelación residencial» abre cuatro o cinco portafolios y, antes de leer una biografía o comparar certificaciones, mira fotos. En menos de un minuto decide con cuál se imagina discutiendo los planos de su casa durante los próximos meses.',
    ],
    blocks: [
      {
        type: 'prose',
        h2: '¿Por qué el portafolio es la venta en la web de un arquitecto?',
        paragraphs: [
          'En arquitectura y diseño de interiores, el texto acompaña y la imagen vende. Ningún párrafo sobre «quince años de trayectoria» convence tanto como una fotografía bien tomada de un proyecto terminado. El cliente da por hecho que sabes de estructuras y normativa; lo que evalúa es si tu gusto coincide con el suyo y si se imagina meses de decisiones sobre materiales, presupuesto y plazos contigo. El portafolio vende confianza antes que estética.',
          'La regla que más se rompe: fotos reales de proyectos reales, nunca renders genéricos ni el interior perfecto que cualquiera compra por diez dólares en un banco de imágenes. Un render presentado como obra terminada, o una foto de catálogo que no es tuya, le dice al visitante que no tienes trabajo real suficiente para mostrar.',
          'Organizar el portafolio por tipo de proyecto —residencial, comercial, remodelación, interiorismo— importa casi tanto como la calidad de las fotos: quien busca remodelar su cocina no quiere pasar por diez oficinas corporativas para encontrar algo parecido. Nuestra página de <a href="/industrias/diseno-web-arquitectos-diseno-interiores-panama/">diseño web para arquitectos y diseño de interiores</a> detalla cómo estructuramos ese portafolio.',
        ],
      },
      {
        type: 'checklist',
        h2: '¿Qué necesita el portafolio de un arquitecto para vender?',
        intro: 'Un portafolio puede verse ordenado y aun así no convencer. Esto es lo que cambia el resultado.',
        items: [
          'Fotografía profesional de proyectos reales y terminados, nunca renders de catálogo ni bancos de imágenes',
          'Categorías claras por tipo de proyecto: residencial, comercial, remodelación, diseño de interiores',
          'Antes y después visible en cada remodelación',
          'Una página propia por proyecto, no una cuadrícula de miniaturas sin contexto',
          'Ubicación, año y tipo de encargo en cada proyecto',
          'Imágenes optimizadas que carguen rápido y se vean nítidas en el celular',
          'Renders identificados como tal cuando se usan, nunca mezclados con fotos reales sin aviso',
          'Pocos proyectos bien contados en vez de una veintena mostrados a la ligera',
        ],
      },
      {
        type: 'steps',
        h2: 'Un proyecto, una página: el reto, la solución, el resultado',
        intro: 'Una galería sin contexto se ve bien pero no convence. Cada proyecto se cuenta como lo que fue: un problema real resuelto con criterio.',
        items: [
          { h3: '1. El reto', text: 'Qué pedía el cliente y con qué limitaciones de espacio, presupuesto o estructura existente. Nombrar el reto es lo que hace que el siguiente cliente con un problema parecido se reconozca en tu historia.' },
          { h3: '2. La solución', text: 'Qué decisiones tomaste y por qué. «Diseño minimalista» no explica nada; «abrimos la cocina hacia la sala para ganar luz natural sin perder almacenaje» sí, y separa un portafolio con criterio de uno decorativo.' },
          { h3: '3. El antes y después', text: 'En una remodelación, la comparación lado a lado es la pieza más convincente del portafolio y se explica sola.' },
          { h3: '4. El resultado', text: 'Fotografía final a pantalla completa, sin recortes forzados: el momento en que el cliente deja de mirar tu trabajo y empieza a imaginar el suyo.' },
        ],
      },
      {
        type: 'cards',
        h2: 'El mismo portafolio no vende igual en cada tipo de proyecto',
        intro: 'Residencial, comercial y remodelación son ventas distintas, aunque vivan en el mismo portafolio.',
        items: [
          { h3: 'Proyecto residencial', text: 'El cliente se imagina viviendo ahí. Importan los ambientes completos, la luz y cómo se siente el espacio día a día, más que el detalle técnico de cada acabado.' },
          { h3: 'Proyecto comercial', text: 'Una empresa, un restaurante o una tienda necesita ver cómo el diseño sirve a su operación y a su marca. Aquí el contexto del negocio pesa tanto como la estética.' },
          { h3: 'Remodelación', text: 'El antes y después hace casi todo el trabajo: ningún otro tipo de proyecto tiene una prueba tan directa de que tu intervención transformó el espacio.' },
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuánto cuesta la web de un arquitecto o diseñador de interiores en Panamá?',
        paragraphs: [
          'Depende de cuántos proyectos vas a mostrar y de qué tan segmentado necesitas el portafolio. Para un profesional independiente con pocos proyectos sólidos, una <a href="/servicios/landing-pages-alta-conversion-panama/">landing page</a> —una página, fotos fuertes, botón directo a WhatsApp— parte de $550 más ITBMS.',
          'Con proyectos suficientes para separarlos por tipo, cada uno con su página de reto, solución y resultado, la opción recomendada es la Web empresarial, desde $1,250 más ITBMS: hasta 6 páginas en total, con blog para posicionar por tipo de proyecto. Si además vendes mobiliario o decoración curada, entra el plan E-commerce, desde $1,950 más ITBMS; es prácticamente el único caso del rubro donde tiene sentido.',
          'Estudios que necesitan algo a medida —portal de seguimiento de obra, integración con un CRM de leads, varios idiomas para clientes de fuera de Panamá— van a un proyecto corporativo desde $2,900. Todos los precios son en dólares y no incluyen el 7% de ITBMS.',
          'No conviene escatimar en hosting ni mantenimiento. Un portafolio vive de fotografía pesada: el Hosting Cloud, desde $350 al año, la carga mejor que el plan Compartido de $225, y el VPS de $550 al año solo se justifica con tráfico alto. El mantenimiento —$99 al mes en el plan Básico, o $169 al mes si actualizas el portafolio seguido y no puedes esperar al día siguiente— mantiene las fotos respaldadas y el sitio rápido. El desglose completo está en nuestra guía de <a href="/blog/cuanto-cuesta-diseno-web-panama/">cuánto cuesta una página web en Panamá</a>.',
        ],
      },
      {
        type: 'prose',
        h2: '¿Cuándo no conviene invertir todavía en el portafolio web?',
        paragraphs: [
          'Si tu estudio tiene lista de espera de varios meses y no necesitas más clientes por ahora, un portafolio nuevo resuelve un problema que no tienes. El dinero rinde más mejorando la fotografía de los proyectos en cola hasta que la lista se acorte.',
          'Tampoco conviene si aún no tienes fotografía profesional de tu trabajo terminado, solo fotos de celular tomadas al entregar la obra: una web bien construida con fotos mediocres socava lo que debe vender. El primer paso es un fotógrafo para un puñado de proyectos; el portafolio se construye alrededor de esas fotos.',
          'Sí se justifica cuando ya tienes proyectos bien fotografiados esperando a ser mostrados, cuando compites por clientes que aún no te conocen o cuando tu web actual no refleja la calidad de lo que muestras en Instagram.',
        ],
      },
      {
        type: 'faq',
        h2: 'Preguntas frecuentes sobre diseño web para arquitectos y diseño de interiores',
        items: [
          { q: '¿Puedo usar renders en vez de fotos reales de mis proyectos?', a: 'Puedes, pero identificados claramente como renders, nunca presentados como si fueran la obra terminada. Mezclarlos sin aviso con fotografía real, apenas se nota, rompe la confianza que el portafolio existe para construir. Los renders sirven para proyectos en curso o por iniciar; para obra terminada, la fotografía real siempre pesa más.' },
          { q: '¿Cuántos proyectos necesito para lanzar mi portafolio?', a: 'Menos de los que crees, si están bien contados. Ocho o diez proyectos con fotografía profesional, reto, solución y resultado bien explicados convencen más que treinta con dos fotos cada uno. Publicar de más, solo para llenar espacio, diluye el trabajo bueno que sí tienes.' },
          { q: '¿Cuánto cuesta una web para un estudio de arquitectura o diseño de interiores en Panamá?', a: 'Para un profesional independiente con pocos proyectos, una landing page parte de $550 más ITBMS. Para un portafolio segmentado por tipo de proyecto con una página por obra, la Web empresarial —la opción recomendada— parte de $1,250 más ITBMS. Un proyecto corporativo a medida, con portal de cliente o integraciones, parte de $2,900 más ITBMS.' },
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
