/* Imágenes de portada. Todas son propias y viven en public/images/hero/: desde el 22-oct-2026 son renders 3D
   de un objeto de cromo sobre gris claro (#F5F5F5), a juego con la escultura de la portada v3. Ya no hay respaldo
   en Unsplash: un hotlink a un CDN ajeno se rompió una vez delante de un cliente. */

import { HERO_SLUGS, OG_SLUGS } from './heroes';

/* Alt descriptivo de las portadas de /images/hero/ (slug → texto). Describe lo que SE VE: el objeto, el material y
   el fondo, sin relleno de palabras clave. Sin entrada aquí, el alt cae al H1, que repite el título y no describe la
   imagen. Las páginas de IA creativa empiezan por «Foto hecha con IA» (lo exige scripts/marketing-ia.test.mjs). */
export const HERO_ALTS: Record<string, string> = {
  'blog': 'Libro abierto con las páginas en abanico, en cromo plateado, render 3D sobre fondo gris claro',
  'blog/cuanto-cuesta-desarrollo-web-a-medida-panama': 'Pila de monedas junto a una ventana de navegador con bloques de diseño, en cromo plateado, render 3D sobre fondo gris claro',
  'blog/cuanto-cuesta-mantenimiento-web-panama': 'Pila de monedas y llave inglesa apoyada en una ventana de navegador, en cromo plateado, render 3D sobre fondo gris claro',
  'como-trabajamos': 'Escalera de tres peldaños redondeados con una esfera en el más alto, en cromo plateado, render 3D sobre fondo gris claro',
  'comparativas/web-a-medida-vs-suscripcion': 'Balancín nivelado con un cubo facetado en un extremo y un aro en el otro, en cromo plateado, render 3D sobre fondo gris claro',
  'contacto': 'Auricular de teléfono junto a una burbuja de conversación, en cromo plateado, render 3D sobre fondo gris claro',
  'crecimiento': 'Gráfico de barras ascendentes con una flecha que sube, en cromo plateado, render 3D sobre fondo gris claro',
  'crecimiento/hosting-infraestructura-panama': 'Torre de servidores con unidades ventiladas, en cromo plateado, render 3D sobre fondo gris claro',
  'crecimiento/mantenimiento-web-panama': 'Llave inglesa cruzada sobre un engranaje, en cromo plateado, render 3D sobre fondo gris claro',
  'crecimiento/seo-local-google-maps-panama': 'Marcador de ubicación sobre un mapa plegado de paneles metálicos, en cromo plateado, render 3D sobre fondo gris claro',
  'crecimiento/seo-posicionamiento-web-panama': 'Lupa sobre tres barras ascendentes, en cromo plateado, render 3D sobre fondo gris claro',
  'diseno-web-panama': 'Laptop abierta con bloques de diseño en relieve en la pantalla, en cromo plateado, render 3D sobre fondo gris claro',
  'funcionalidades': 'Cuatro piezas de rompecabezas encajadas, una levantada, en cromo plateado, render 3D sobre fondo gris claro',
  'funcionalidades/chatbots-ia-web-wazacrm-panama': 'Burbuja de conversación con un destello de cuatro puntas encima, en cromo plateado, render 3D sobre fondo gris claro',
  'funcionalidades/integracion-cybersource-panama': 'Tarjeta bancaria lisa con un escudo protector delante, en cromo plateado, render 3D sobre fondo gris claro',
  'funcionalidades/integracion-yappy-pasarelas-pago-panama': 'Celular con una moneda y ondas de pago sin contacto, en cromo plateado, render 3D sobre fondo gris claro',
  'funcionalidades/sistemas-reservas-citas-online-panama': 'Calendario de escritorio con una marca de verificación, en cromo plateado, render 3D sobre fondo gris claro',
  'guias': 'Brújula de bolsillo con la tapa abierta, en cromo plateado, render 3D sobre fondo gris claro',
  'guias/diseno-web-miami': 'Palmera estilizada junto a una ventana de navegador, en cromo plateado, render 3D sobre fondo gris claro',
  'guias/diseno-web-panama': 'Grupo de rascacielos de distintas alturas sobre una base redonda, en cromo plateado, render 3D sobre fondo gris claro',
  'guias/diseno-web-por-industria': 'Panal de losetas hexagonales, algunas elevadas, en cromo plateado, render 3D sobre fondo gris claro',
  'guias/marketing-y-pauta': 'Megáfono apuntando hacia arriba, en cromo plateado, render 3D sobre fondo gris claro',
  'guias/seo-y-posicionamiento': 'Lupa sobre un marcador de ubicación, en cromo plateado, render 3D sobre fondo gris claro',
  'guias/tiendas-online-y-pagos': 'Carrito de compras, en cromo plateado, render 3D sobre fondo gris claro',
  'guias/whatsapp-ia-y-automatizacion': 'Dos burbujas de conversación unidas a un engranaje, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias': 'Fábrica en miniatura con techo de diente de sierra, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-abogados-panama': 'Balanza de la justicia con dos platillos, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-belleza-spa-panama': 'Flor de loto de pétalos en capas, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-bienes-raices-panama': 'Casa de techo a dos aguas con una llave apoyada, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-clinicas-salud-panama': 'Estetoscopio enrollado, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-constructoras-panama': 'Casco de construcción, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-educacion-panama': 'Birrete de graduación con borla, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-gimnasios-fitness-panama': 'Pesa rusa junto a una mancuerna, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-logistica-transporte-panama': 'Contenedor de carga corrugado, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-restaurantes-panama': 'Campana de servir sobre un plato, con la tapa entreabierta, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-retail-moda-panama': 'Gancho de ropa con una etiqueta en blanco, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-talleres-automotriz-panama': 'Rin de auto de pie con una llave inglesa al lado, en cromo plateado, render 3D sobre fondo gris claro',
  'industrias/diseno-web-turismo-hoteles-panama': 'Maleta de viaje con asa extensible, en cromo plateado, render 3D sobre fondo gris claro',
  'inteligencia-artificial-para-empresas-panama': 'Esfera formada por una red de nodos conectados, como una red neuronal, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing': 'Diana con una flecha en el centro, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing/automatizaciones-n8n-panama': 'Cadena de nodos unidos por tubos con un engranaje en medio, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing/contenido-redes-sociales-panama': 'Cámara de fotos sin marca con su lente, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing/email-marketing-panama': 'Sobre cerrado del que despega un avión de papel, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing/facebook-instagram-ads-panama': 'Celular de pie con un corazón y una estrella flotando a su lado, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing/google-ads-panama': 'Flecha del cursor haciendo clic en una barra de búsqueda, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing/video-inmobiliario-panama': 'Foto hecha con IA: cámara de video en un trípode pequeño apuntando a una casa en miniatura, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing/videos-publicitarios-panama': 'Foto hecha con IA: claqueta de cine entreabierta con un botón de reproducción, en cromo plateado, render 3D sobre fondo gris claro',
  'marketing/whatsapp-marketing-masivo-panama': 'Tres burbujas de conversación superpuestas de distintos tamaños, en cromo plateado, render 3D sobre fondo gris claro',
  'miami/diseno-web-en-miami-en-espanol': 'Forma abstracta de palmera con hojas curvas, en cromo plateado, render 3D sobre fondo gris claro',
  'nosotros': 'Tres aros entrelazados, en cromo plateado, render 3D sobre fondo gris claro',
  'politica-de-privacidad': 'Candado cerrado, en cromo plateado, render 3D sobre fondo gris claro',
  'portafolio': 'Marcos de cuadro vacíos en abanico, de distintos tamaños, en cromo plateado, render 3D sobre fondo gris claro',
  'precios': 'Etiqueta de precio en blanco con su cordel, en cromo plateado, render 3D sobre fondo gris claro',
  'recursos': 'Caja de herramientas cerrada con asa, en cromo plateado, render 3D sobre fondo gris claro',
  'recursos/checklist-migracion-seo': 'Portapapeles con tres casillas marcadas, en cromo plateado, render 3D sobre fondo gris claro',
  'saas': 'Nube redondeada sobre tres capas apiladas, en cromo plateado, render 3D sobre fondo gris claro',
  'saas/cifrao': 'Calculadora de teclas lisas con un recibo de papel enrollado, en cromo plateado, render 3D sobre fondo gris claro',
  'saas/nouscrm': 'Tarjetero giratorio con fichas de contacto en blanco, en cromo plateado, render 3D sobre fondo gris claro',
  'saas/wazacrm': 'Diadema con micrófono junto a una burbuja de conversación, en cromo plateado, render 3D sobre fondo gris claro',
  'servicios': 'Navaja multiuso sin marca con varias herramientas abiertas, en cromo plateado, render 3D sobre fondo gris claro',
  'servicios/diseno-web-corporativo-panama': 'Maletín ejecutivo, en cromo plateado, render 3D sobre fondo gris claro',
  'servicios/landing-pages-alta-conversion-panama': 'Cohete pequeño despegando, en cromo plateado, render 3D sobre fondo gris claro',
  'servicios/redisenio-web-panama': 'Rodillo de pintura sobre una ventana de navegador, en cromo plateado, render 3D sobre fondo gris claro',
  'servicios/tiendas-online-ecommerce-panama': 'Bolsa de compras con asas de cordón, en cromo plateado, render 3D sobre fondo gris claro',
  'tecnologias': 'Microchip con sus patillas, en cromo plateado, render 3D sobre fondo gris claro',
  'tecnologias/desarrollo-web-a-medida-vue-react-panama': 'Cubos modulares que encajan, algunos separados, en cromo plateado, render 3D sobre fondo gris claro',
  'tecnologias/diseno-web-shopify-panama': 'Canasta de compras con asas, en cromo plateado, render 3D sobre fondo gris claro',
  'tecnologias/diseno-web-wordpress-panama': 'Tres losas redondeadas apiladas como capas, en cromo plateado, render 3D sobre fondo gris claro',
  'terminos': 'Pluma estilográfica y su capuchón sobre una hoja en blanco, en cromo plateado, render 3D sobre fondo gris claro',
};

/* Portada de sección para una página sin portada propia: la del índice de su sección, que ya existe en
   /images/hero/. Hoy ninguna página cae aquí (todas tienen la suya o declaran heroImage), pero una página nueva
   sale con una imagen nuestra y no con un hotlink. */
const PORTADA_DE_SECCION: Record<string, string> = {
  blog: 'blog',
  'casos-de-exito': 'portafolio',
  comparativas: 'comparativas/web-a-medida-vs-suscripcion',
  crecimiento: 'crecimiento',
  funcionalidades: 'funcionalidades',
  guias: 'guias',
  industrias: 'industrias',
  marketing: 'marketing',
  miami: 'miami/diseno-web-en-miami-en-espanol',
  recursos: 'recursos',
  saas: 'saas',
  servicios: 'servicios',
  tecnologias: 'tecnologias',
};
const PORTADA_POR_DEFECTO = 'nosotros';

const rutaHero = (slug: string) => `/images/hero/${slug.replace(/\//g, '--')}.jpg`;

/**
 * Devuelve {src, alt} listo para <img>.
 *
 * Orden de preferencia:
 *   1. heroImage declarado en la página. Si apunta a /images/hero/, el alt sale de HERO_ALTS, porque el que
 *      declara la página describe la foto vieja.
 *   2. portada propia en /images/hero/ (ver HERO_SLUGS).
 *   3. portada del índice de su sección (PORTADA_DE_SECCION), también propia.
 *
 * Este src también alimenta el og:image y el ImageObject del schema, así que todas las rutas son de nuestro
 * dominio. w y ar se conservan en la firma por compatibilidad: las portadas locales ya traen su recorte 10:7.
 */
export function heroFor(page: { slug: string; h1: string; heroImage?: { src: string; alt: string } }, _w = 1600, _ar = 0.62) {
  if (page.heroImage?.src && !page.heroImage.src.includes('picsum')) {
    const propia = page.heroImage.src.match(/^\/images\/hero\/(.+)\.jpg$/);
    const slug = propia?.[1]?.replace(/--/g, '/');
    return slug && HERO_ALTS[slug] ? { src: page.heroImage.src, alt: HERO_ALTS[slug] } : page.heroImage;
  }
  if (HERO_SLUGS.has(page.slug)) return { src: rutaHero(page.slug), alt: HERO_ALTS[page.slug] ?? page.h1 };
  const seccion = PORTADA_DE_SECCION[page.slug.split('/')[0] ?? ''] ?? PORTADA_POR_DEFECTO;
  return { src: rutaHero(seccion), alt: HERO_ALTS[seccion] ?? page.h1 };
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
