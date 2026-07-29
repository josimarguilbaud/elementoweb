/* Imágenes de portada (Unsplash CDN, gratis, sin API key).
   Todos los IDs verificados con HTTP 200. Uso: unsplash(pickImg(slug)). */

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

/** Elige una foto temática según el slug de la página (palabras clave). */
export function pickImg(slug: string): keyof typeof PHOTOS {
  const s = slug.toLowerCase();
  const has = (...k: string[]) => k.some((x) => s.includes(x));
  if (has('legal', 'abogad', 'juridic', 'notari')) return 'legal';
  if (has('inmobiliar', 'bienes-raices', 'propiedad', 'real-estate')) return 'realEstate';
  if (has('restaurant', 'gastronom', 'comida', 'cafe')) return 'restaurant';
  if (has('hotel', 'hospedaj', 'turismo', 'turistic')) return 'hotel';
  if (has('clinic', 'medic', 'salud', 'dental', 'odontolog')) return 'medical';
  if (has('construc', 'inmobili', 'arquitect', 'obra')) return 'construction';
  if (has('educac', 'colegio', 'escuela', 'academi', 'instituto')) return 'education';
  if (has('retail', 'moda', 'ropa', 'tienda-de')) return 'fashion';
  if (has('gimnasio', 'fitness', 'gym', 'deporte')) return 'gym';
  if (has('taller', 'automotr', 'mecanic', 'auto')) return 'automotive';
  if (has('belleza', 'spa', 'estetica', 'salon')) return 'spa';
  if (has('logistic', 'transport', 'envio', 'delivery')) return 'logistics';
  if (has('ecommerce', 'tienda-online', 'tienda-virtual', 'ecomm')) return 'ecommerce';
  if (has('landing', 'campaña', 'campana')) return 'analytics';
  if (has('corporativ', 'empresa', 'institucional')) return 'office';
  if (has('wordpress', 'shopify', 'astro', 'react', 'next', 'desarrollo', 'app', 'saas', 'software', 'codigo', 'sistema')) return 'code';
  if (has('seo', 'posicionamiento', 'analitic', 'crecimiento', 'growth')) return 'analytics';
  if (has('google-ads', 'facebook-ads', 'instagram-ads', 'pauta', 'ads', 'publicidad')) return 'content';
  if (has('redes-sociales', 'social', 'community', 'contenido')) return 'social';
  if (has('email', 'automatiz', 'n8n', 'chatbot', 'chatmantis', 'ia', 'inteligencia')) return 'ai';
  if (has('mantenimiento', 'hosting', 'seguridad', 'infraestructura')) return 'tech';
  return 'meeting';
}

/** Devuelve {src, alt} listo para <img>, usando heroImage propio si existe. */
export function heroFor(page: { slug: string; h1: string; heroImage?: { src: string; alt: string } }, w = 1600, ar = 0.62) {
  if (page.heroImage?.src && !page.heroImage.src.includes('picsum')) return page.heroImage;
  return { src: unsplash(PHOTOS[pickImg(page.slug)], w, ar), alt: page.h1 };
}
