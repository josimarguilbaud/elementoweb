/* Imágenes de portada. Primero las propias (public/images/hero/), y solo
   como respaldo el CDN de Unsplash, cuyos IDs están verificados con HTTP 200. */

import { HERO_SLUGS, OG_SLUGS } from './heroes';

export const PHOTOS = {
  office: '1497366216548-37526070297c',
  team: '1522071820081-009f0129c71c',
  meeting: '1600880292203-757bb62b4baf',
  code: '1461749280684-dccba630e2f6',
  code2: '1555066931-4365d14bab8c',
  laptop: '1517180102446-f3ece451e9d8',
  ecommerce: '1556742049-0cfed4f6a45d',
  shop: '1563013544-824ae1b704d3',
  retail: '1441986300917-64674bd600d8',
  analytics: '1551288049-bebda4e38f71',
  marketing: '1533750349088-cd871a92f312',
  restaurant: '1517248135467-4c7edcad34c4',
  food: '1414235077428-338989a2e8c0',
  hotel: '1566073771259-6a8506099945',
  hotelRoom: '1551882547-ff40c63fe5fa',
  realEstate: '1560518883-ce09059eeffa',
  property: '1568605114967-8130f3a36994',
  legal: '1589829545856-d10d557cf95f',
  law: '1505664194779-8beaceb93744',
  medical: '1519494026892-80bbd2d6fd0d',
  health: '1576091160399-112ba8d25d1d',
  construction: '1541888946425-d81bb19240f5',
  education: '1509062522246-3755977927d7',
  fashion: '1490481651871-ab68de25d43d',
  gym: '1534438327276-14e5300c3a48',
  fitness: '1571902943202-507ec2618e8f',
  automotive: '1486262715619-67b85e0b08d3',
  car: '1487754180451-c456f719a1fc',
  spa: '1540555700478-4be289fbecef',
  beauty: '1596178065887-1198b6148b2b',
  logistics: '1601584115197-04ecc0da31d7',
  social: '1611926653458-09294b3142bf',
  content: '1563986768609-322da13575f3',
  ai: '1677442136019-21780ecad995',
  tech: '1620712943543-bcc4688e7485',
} as const;

/** URL optimizada de Unsplash. w = ancho, ar = alto/ancho (0.5625 = 16:9). */
export function unsplash(id: string, w = 1600, ar = 0.62): string {
  const h = Math.round(w * ar);
  return `https://images.unsplash.com/photo-${id}?w=${w}&h=${h}&q=80&auto=format&fit=crop&crop=entropy`;
}

/**
 * Elige una foto temática según el slug de la página.
 *
 * Compara por PALABRA, no por substring suelto. La versión anterior usaba
 * `slug.includes(clave)` y eso reventaba en silencio:
 *
 *   'auto'  casaba dentro de  automatizaciones  -> la página de n8n salía con
 *                                                  la foto de un motor de carro
 *   'ia'    casaba dentro de  industrias, tecnologias
 *   'app'   casaba dentro de  whatsapp, yappy
 *
 * Ahora una clave casa solo si algún trozo del slug EMPIEZA por ella, así
 * 'abogad' sigue casando 'abogados' pero 'ia' ya no casa 'industrias'. Además
 * la regla de automatización va antes que la de automotriz, porque
 * 'automatizaciones' sí empieza por 'auto'.
 */
export function pickImg(slug: string): keyof typeof PHOTOS {
  const partes = slug.toLowerCase().split(/[/\-_.]+/).filter(Boolean);
  const has = (...k: string[]) => k.some((x) => partes.some((p) => p.startsWith(x)));
  if (has('legal', 'abogad', 'juridic', 'notari')) return 'legal';
  if (has('inmobiliar', 'bienes', 'propiedad', 'real')) return 'realEstate';
  if (has('restaurant', 'gastronom', 'comida', 'cafe')) return 'restaurant';
  if (has('hotel', 'hospedaj', 'turismo', 'turistic')) return 'hotel';
  if (has('clinic', 'medic', 'salud', 'dental', 'odontolog')) return 'medical';
  if (has('construc', 'inmobili', 'arquitect', 'obra')) return 'construction';
  if (has('educac', 'colegio', 'escuela', 'academi', 'instituto')) return 'education';
  if (has('retail', 'moda', 'ropa')) return 'fashion';
  if (has('gimnasio', 'fitness', 'gym', 'deporte')) return 'gym';
  if (has('belleza', 'spa', 'estetica', 'salon')) return 'spa';
  // Antes que 'automotriz': 'automatizaciones' también empieza por 'auto'.
  if (has('email', 'automatiz', 'n8n', 'chatbot', 'wazacrm', 'inteligencia', 'ia')) return 'ai';
  if (has('taller', 'automotr', 'mecanic', 'auto')) return 'automotive';
  if (has('logistic', 'transport', 'envio', 'delivery')) return 'logistics';
  if (has('ecommerce', 'ecomm', 'tienda', 'yappy', 'pasarela', 'pago')) return 'ecommerce';
  if (has('landing', 'campaña', 'campana')) return 'analytics';
  if (has('corporativ', 'empresa', 'institucional')) return 'office';
  if (has('wordpress', 'shopify', 'astro', 'react', 'next', 'desarrollo', 'saas', 'software', 'codigo', 'sistema')) return 'code';
  if (has('seo', 'posicionamiento', 'analitic', 'crecimiento', 'growth')) return 'analytics';
  if (has('google', 'facebook', 'instagram', 'pauta', 'ads', 'publicidad')) return 'content';
  if (has('redes', 'social', 'community', 'contenido', 'whatsapp')) return 'social';
  if (has('mantenimiento', 'hosting', 'seguridad', 'infraestructura')) return 'tech';
  return 'meeting';
}

/**
 * Devuelve {src, alt} listo para <img>.
 *
 * Orden de preferencia:
 *   1. heroImage declarado en la página.
 *   2. portada propia en /images/hero/ (ver HERO_SLUGS).
 *   3. foto de stock de Unsplash, como último recurso.
 *
 * El paso 2 importa más de lo que parece: este src también alimenta el
 * og:image, así que una página sin portada propia se comparte en WhatsApp y
 * LinkedIn con la foto de stock de otro. Con imagen propia, la miniatura es
 * nuestra y se sirve desde nuestro dominio.
 */
/* Alt descriptivo de las portadas de /images/hero/ (slug → texto). Describe lo que SE VE y
   nombra el tema de forma natural, sin relleno de palabras clave. Sin entrada aquí, el alt
   cae al H1, que repite el título y no describe la imagen (peor para accesibilidad y SEO de imágenes). */
export const HERO_ALTS: Record<string, string> = {
  'diseno-web-panama': 'Emprendedora sonríe al revisar la página web de su tienda en una laptop, frente a los balcones del Casco Viejo de Panamá',
  'marketing/automatizaciones-n8n-panama': 'Gerente de operaciones con una taza de café mira su laptop en una oficina de Ciudad de Panamá mientras el trabajo avanza solo',
  'marketing/whatsapp-marketing-masivo-panama': 'Dueño de una ferretería de barrio en Ciudad de Panamá responde mensajes de clientes en su celular desde el mostrador',
  'saas/nouscrm': 'Dueña de una imprenta de rótulos envía una cotización desde su celular en el mostrador, con su laptop abierta al lado',
  'servicios': 'Una diseñadora muestra en su laptop la maqueta de una web al dueño de un negocio, en una mesa con bocetos y vista a la bahía de Panamá',
  'tecnologias/diseno-web-wordpress-panama': 'Recepcionista de una clínica dental actualiza la web de la clínica en una laptop desde el mostrador, con pacientes esperando al fondo',
  'guias': 'Abanico de tarjetas de vidrio con pictogramas de navegador, lupa, bolsa, chat, engranaje y gráfico: biblioteca de guías de diseño web y marketing',
  'guias/diseno-web-miami': 'Dos marcadores unidos por un arco sobre un mapa, de Panamá a Florida, con una ventana de sitio web: diseño web para negocios de Miami',
  'guias/diseno-web-panama': 'Skyline de torres de vidrio frente a una bahía con una ventana de sitio web y un marcador de ubicación: diseño web en Panamá',
  'guias/diseno-web-por-industria': 'Ventana de sitio web rodeada de un anillo de íconos de industrias: tienda, hotel, salud, taller, viajes, educación, inmuebles y restaurantes',
  'guias/marketing-y-pauta': 'Un anuncio de búsqueda y uno de redes sociales entran a un embudo que termina en barras de resultados y una diana: marketing y pauta',
  'guias/seo-y-posicionamiento': 'Red de palabras clave que converge en una página de resultados, con una curva de crecimiento y un podio: SEO y posicionamiento',
  'guias/tiendas-online-y-pagos': 'Tienda online con productos y bolsa de compra junto a una terminal de pago sin contacto y una caja de envío',
  'guias/whatsapp-ia-y-automatizacion': 'Teléfono con chat conectado a un asistente de IA y a un flujo de automatización con nodos y engranajes',
  'recursos': 'Calculadora, lista de verificación con marcas y flecha de descarga: herramientas gratuitas para planear tu sitio web',
  'como-trabajamos': 'Mesa de madera con dos sillas vacías, dos vasos de agua y una hoja de papel, para explicar cómo trabajamos con reglas claras',
  'contacto': 'Dos hombres conversan animados en una mesa con tazas de café y una libreta abierta, como al cotizar una página web',
  'crecimiento/hosting-infraestructura-panama': 'Técnica de TI revisa los cables de un rack de servidores con una laptop encima, en la sala de servidores de una oficina en Panamá',
  'crecimiento': 'Clientes en fila ante el mostrador de una tienda de barrio con palmeras afuera, un negocio local que crece con su web',
  'crecimiento/seo-local-google-maps-panama': 'Dueño de un taller mecánico de barrio sonríe al ver su celular en la entrada del taller, con un carro con el capó abierto detrás',
  'crecimiento/seo-posicionamiento-web-panama': 'Mujer de negocios busca en Google desde su laptop en un coworking de Ciudad de Panamá, con café y su celular en la mesa',
  'funcionalidades/chatbots-ia-web-wazacrm-panama': 'Mujer sonriente escribe en su celular desde un sofá en penumbra, como quien conversa con el chatbot de IA de un negocio',
  'funcionalidades': 'Dos hombres ante un monitor en un escritorio con libretas y plantas, uno señala la pantalla al planear funcionalidades web',
  'funcionalidades/integracion-yappy-pasarelas-pago-panama': 'Mujer sonríe en el sofá de su casa al confirmar un pago en el celular, con una caja de envío y un café en la mesa',
  'funcionalidades/sistemas-reservas-citas-online-panama': 'Barbero revisa en una tableta las citas del día en el mostrador de su barbería mientras un cliente espera en la silla',
  'industrias/diseno-web-educacion-panama': 'Aula vacía con pupitres de madera, pizarra verde y ventanas con persianas hacia las palmeras, para el diseño web de colegios',
  'industrias/diseno-web-gimnasios-fitness-panama': 'Gimnasio amplio sin personas, con rack de mancuernas, máquinas y ventanales con luz natural, para el diseño web de gimnasios',
  'industrias/diseno-web-logistica-transporte-panama': 'Nave de almacén con estanterías llenas de cajas y un montacargas naranja en el pasillo, para el diseño web de logística',
  'industrias/diseno-web-restaurantes-panama': 'Salón de restaurante luminoso con mesas de madera servidas y lámparas colgantes, para el diseño web de restaurantes',
  'industrias/diseno-web-retail-moda-panama': 'Boutique de ropa con perchero de chaquetas y una chaqueta de mezclilla doblada en el mostrador, para el diseño web de moda',
  'industrias/diseno-web-talleres-automotriz-panama': 'Taller mecánico con un sedán elevado en un elevador de dos columnas y carros de herramientas, para el diseño web de talleres',
  'industrias/diseno-web-turismo-hoteles-panama': 'Terraza de hotel frente al mar con dos camastros de madera y una palmera al atardecer, para el diseño web de turismo',
  'industrias': 'Calle comercial de barrio antiguo con toldos y fachadas coloniales donde la gente compra frutas, en diseño web por industria',
  'marketing/contenido-redes-sociales-panama': 'Creadora de contenido fotografía con su celular en trípode un plato de patacones con pescado en una fonda de Panamá, con el dueño sonriendo al fondo',
  'marketing/email-marketing-panama': 'Mujer abre un boletín por correo en su laptop junto a la ventana de su apartamento en Ciudad de Panamá, con café y plantas',
  'marketing/facebook-instagram-ads-panama': 'Dos jóvenes se ríen mientras miran su feed en el celular sentados en la Cinta Costera, con los rascacielos de Panamá al fondo',
  'marketing/google-ads-panama': 'Hombre busca un servicio en su celular de noche en la mesa de su cocina, con las luces de Ciudad de Panamá en la ventana',
  'marketing': 'Avenida comercial al atardecer con tráfico, peatones y rótulos luminosos, donde el marketing digital busca clientes',
  'miami/diseno-web-brickell': 'Rascacielos de vidrio azul vistos desde la calle, con palmeras y avenida al pie, para diseño web en Brickell',
  'miami/diseno-web-coral-gables': 'Calle sombreada por banianos junto a fachadas mediterráneas con toldos verdes y un sedán, para diseño web en Coral Gables',
  'miami/diseno-web-cutler-bay': 'Centro comercial de una planta con toldos rojos, palmeras y gran estacionamiento al atardecer, para diseño web en Cutler Bay',
  'miami/diseno-web-doral': 'Edificios de oficinas de vidrio y concreto junto a una avenida con palmeras y cielo azul, para diseño web en Doral',
  'miami/diseno-web-hialeah': 'Acera de comercios de barrio con fachadas pastel, toldo rojo y vitrina de pastelería, para diseño web en Hialeah',
  'miami/diseno-web-hialeah-gardens': 'Calle vacía junto a naves industriales con muelles de carga y palmeras, para diseño web en Hialeah Gardens',
  'miami/diseno-web-homestead': 'Calle principal con tiendas de colores, farolas y palmeras, y campos verdes al fondo, para diseño web en Homestead',
  'miami/diseno-web-miami-lakes': 'Laguna azul con puente blanco frente a edificios comerciales claros y palmeras, para el diseño web en Miami Lakes',
  'miami/diseno-web-north-miami': 'Hilera de locales rosa, lila y amarillo con toldos, murales y un ciclista, el comercio que necesita diseño web en North Miami',
  'miami/diseno-web-sweetwater': 'Pasaje cubierto con vitrinas, peatones y palmeras a la luz del atardecer, el comercio que atiende el diseño web en Sweetwater',
  'miami/diseno-web-westchester': 'Plaza comercial de una planta con locales de vidrio oscuro, setos y palmeras y poca gente, para diseño web en Westchester',
  'nosotros': 'Manos de varias personas dibujando bocetos de casas sobre hojas blancas en una mesa de madera, metáfora del trabajo en equipo',
  'politica-de-privacidad': 'Archivador metálico gris con cerradura de llave junto a una ventana, para ilustrar el resguardo de datos personales',
  'saas/cifrao': 'Manos con calculadora sobre facturas en papel, junto a una laptop y una taza de café, el trabajo contable que se automatiza',
  'saas': 'Tres hombres en una oficina con monitores, uno de pie supervisando, ante una ventana con edificios, como equipo de software',
  'saas/wazacrm': 'Mujer sonriente con diadema y micrófono tecleando ante un monitor, con otras operadoras al fondo, atención al cliente con CRM',
  'servicios/tiendas-online-ecommerce-panama': 'Manos sellando con cinta una caja de cartón sobre una mesa de madera, con más cajas al fondo, el despacho de pedidos online',
  'tecnologias/diseno-web-shopify-panama': 'Mostrador de tienda física con bolsa de papel kraft, datáfono y estantes al fondo, el comercio que pasa a vender con Shopify',
  'tecnologias': 'Manos tecleando ante un monitor con código en un editor oscuro, con tazas y plantas al fondo, el desarrollo web a medida',
  'terminos': 'Hojas en blanco y un bolígrafo negro sobre una mesa de madera junto a una ventana, para los términos de contratación',
  'servicios/redisenio-web-panama': 'Dueño de un negocio familiar y una diseñadora revisan el nuevo diseño de su web en un monitor, con las páginas del sitio viejo anotadas sobre el escritorio',
  'servicios/landing-pages-alta-conversion-panama': 'Hombre con mochila toca el botón de una página en su celular en el lobby de un edificio de oficinas de Costa del Este',
  'crecimiento/mantenimiento-web-panama': 'Técnico web revisa el panel de estado de un sitio en dos monitores y marca una lista de verificación en una oficina de Panamá',
  'industrias/diseno-web-abogados-panama': 'Escritorio de madera con cuaderno de cuero, pluma y estantes de libros jurídicos, en una página de diseño web para abogados',
  'industrias/diseno-web-belleza-spa-panama': 'Salón de belleza luminoso con sillones, mesón con brochas y espejos, para el diseño web de salones de belleza y spas',
  'industrias/diseno-web-bienes-raices-panama': 'Apartamento vacío con ventanal y vista a las torres de la ciudad, para el diseño web de inmobiliarias en Panamá',
  'industrias/diseno-web-clinicas-salud-panama': 'Consultorio con camilla, taburetes y lavamanos junto a una ventana, para el diseño web de clínicas y centros de salud',
  'industrias/diseno-web-constructoras-panama': 'Edificio en obra con andamios y grúa torre entre palmeras, para el diseño web de constructoras en Panamá',
  'miami/diseno-web-en-miami-en-espanol': 'Avenida costera de Miami con torres de vidrio y palmeras frente al mar, para el diseño web en español de negocios de Miami',
  'miami/diseno-web-kendall': 'Edificio comercial de una planta con palmeras y estacionamiento al atardecer, para el diseño web de negocios en Kendall',
  'portafolio': 'Mesa con impresiones de maquetas de sitios web y dos celulares que muestran páginas, junto al portafolio de proyectos de diseño web',
  'precios': 'La dueña de un negocio lee con calma una cotización impresa en su escritorio, con café y una planta, frente a una ventana con edificios de Ciudad de Panamá',
  'servicios/diseno-web-corporativo-panama': 'Dos ejecutivos revisan el sitio web corporativo de su empresa en una pantalla de sala de reuniones con vista a Punta Paitilla',
  'tecnologias/desarrollo-web-a-medida-vue-react-panama': 'Desarrolladora señala la interfaz de una aplicación en un monitor mientras su compañero toma notas, en una oficina de Ciudad de Panamá',
};

export function heroFor(page: { slug: string; h1: string; heroImage?: { src: string; alt: string } }, w = 1600, ar = 0.62) {
  if (page.heroImage?.src && !page.heroImage.src.includes('picsum')) return page.heroImage;
  if (HERO_SLUGS.has(page.slug)) {
    return { src: `/images/hero/${page.slug.replace(/\//g, '--')}.jpg`, alt: HERO_ALTS[page.slug] ?? page.h1 };
  }
  return { src: unsplash(PHOTOS[pickImg(page.slug)], w, ar), alt: page.h1 };
}

/**
 * Imagen para compartir (og:image), 1200x630 de verdad.
 *
 * Antes se compartia la foto del hero, que mide 1600x1120, mientras el HTML
 * declaraba 1200x630. WhatsApp y Facebook usan esas medidas para encuadrar la
 * miniatura, asi que la recortaban mal. Ahora cada pagina tiene su recorte
 * 1.91:1 en /images/og/ y las medidas declaradas son ciertas.
 */
export function ogFor(slug: string): string {
  const clave = slug === '' ? 'home' : slug;
  if (OG_SLUGS.has(clave)) return `/images/og/${clave.replace(/\//g, '--')}.jpg`;
  return '/og-default.jpg';
}
