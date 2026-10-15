/* Datos estructurados JSON-LD. El FAQPage SIEMPRE se deriva del bloque faq
   visible: no puede desincronizarse de lo que el usuario ve. */
import { site, url, pricing } from './site';
import { heroFor } from './img';
import type { PageData } from './types';
import precios from '../data/precios.json';

const ORG_ID = `${site.domain}/#organizacion`;

/* ImageObject de la portada de una página (para primaryImageOfPage y BlogPosting.image).
   Solo imágenes propias servidas desde /images/: una foto de stock enlazada no es nuestra
   y puede romperse. Las medidas son las del archivo real de cada carpeta; si no se conocen,
   se omiten en vez de inventarlas. `caption` es el mismo alt que ve el visitante. */
const IMG_DIMS: Record<string, [number, number]> = { hero: [1600, 1120], blog: [1600, 1073], industrias: [1600, 1073] };
export function imageObject(img: { src: string; alt: string }) {
  if (!img.src.startsWith('/images/')) return null;
  const d = IMG_DIMS[img.src.split('/')[2]];
  const abs = `${site.domain}${img.src}`;
  return {
    '@type': 'ImageObject',
    url: abs,
    contentUrl: abs,
    ...(d ? { width: d[0], height: d[1] } : {}),
    caption: img.alt,
    inLanguage: 'es-PA',
  };
}

export function orgNode() {
  return {
    '@type': 'Organization',
    '@id': ORG_ID,
    name: site.name,
    url: site.domain,
    email: site.email,
    telephone: site.phone.replace(/\s/g, '-'),
    logo: `${site.domain}/marca/favicon.png`,
    areaServed: [{ '@type': 'Country', name: 'Panamá' }, { '@type': 'Place', name: 'América Latina' }, { '@type': 'Place', name: 'Miami-Dade County, Florida' }],
    // sameAs: solo perfiles verificados por el dueño. El Instagram que había aquí no
    // estaba confirmado (el footer tampoco lo publica), así que se quitó. Añadir cada
    // perfil real (Instagram, LinkedIn, Google Business Profile) junto con el enlace visible.
  };
}

/* Identidad del sitio. Sin esto, un motor generativo tiene que deducir de qué
   va el dominio a partir del contenido; con esto se lo decimos. */
export function webSiteNode() {
  return {
    '@type': 'WebSite',
    '@id': `${site.domain}/#sitio`,
    url: site.domain,
    name: site.name,
    inLanguage: 'es-PA',
    publisher: { '@id': ORG_ID },
  };
}

/* ProfessionalService solo en home y contacto. La dirección, el horario y el mapa salen de la ficha de Google
   Business Profile que el dueño compartió el 13-oct-2026 (site.ts): el mismo NAP que la ficha y los directorios.
   El área servida es el país y un radio sobre Ciudad de Panamá, que es lo que responde a "agencia web cerca de mí". */
export function localBusinessNode() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${site.domain}/#negocio`,
    name: `${site.name}: Diseño Web en Panamá y Miami`,
    url: site.domain,
    parentOrganization: { '@id': ORG_ID },
    telephone: site.phone.replace(/\s/g, '-'),
    email: site.email,
    address: { '@type': 'PostalAddress', streetAddress: site.address.street, addressLocality: site.address.locality, addressCountry: site.address.country },
    openingHoursSpecification: site.horario.map((h) => ({ '@type': 'OpeningHoursSpecification', dayOfWeek: h.dias, opens: h.abre, closes: h.cierra })),
    hasMap: site.maps,
    sameAs: [site.maps],
    priceRange: '$$',
    currenciesAccepted: 'USD',
    areaServed: [
      { '@type': 'Country', name: 'Panamá' },
      {
        '@type': 'GeoCircle',
        geoMidpoint: { '@type': 'GeoCoordinates', latitude: 8.9824, longitude: -79.5199 },
        geoRadius: '60000',
      },
      // Miami-Dade: servicio 100% remoto, sin oficina física — sin GeoCircle,
      // solo la declaración del área. Ver /miami/ para el detalle por zona.
      { '@type': 'Place', name: 'Miami-Dade County, Florida' },
    ],
  };
}

export function breadcrumbNode(page: PageData) {
  const items = [{ name: 'Inicio', slug: '' }];
  if (page.parent && page.parent.slug !== page.slug) items.push({ name: page.parent.label, slug: page.parent.slug });
  items.push({ name: page.breadcrumb || page.h1, slug: page.slug });
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({
      '@type': 'ListItem',
      position: i + 1,
      name: it.name,
      item: `${site.domain}${url(it.slug)}`,
    })),
  };
}

/** FAQPage a partir de preguntas visibles: la respuesta va sin HTML y con espacios normalizados, igual que el texto
    que lee el validador en [data-faq-a]. La usan las páginas del registro y la portada (D50). */
export function faqPageNode(items: { q: string; a: string }[]) {
  if (!items.length) return null;
  const strip = (h: string) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: strip(f.a) },
    })),
  };
}

export function faqNode(page: PageData) {
  const block = page.blocks.find((b) => b.type === 'faq') as { items: { q: string; a: string }[] } | undefined;
  return block?.items?.length ? faqPageNode(block.items) : null;
}

/* Oferta de la página (D23, R27): solo con anatomía v2 y precio CONFIRMADO. Un precio propuesto o
   cotizado nunca emite Offer; el validador comprueba además que la cifra esté en src/data/precios.json. */
function pageOffer(page: PageData) {
  if (page.anatomia !== 'v2') return null;
  const rc = page.blocks.find((b) => b.type === 'receipt');
  if (!rc || rc.type !== 'receipt' || rc.precio.estado !== 'confirmado' || !rc.precio.desde) return null;
  const monto = Number(rc.precio.desde.replace(/[^0-9.]/g, ''));
  return {
    '@type': 'Offer',
    priceSpecification: { '@type': 'PriceSpecification', minPrice: monto, priceCurrency: 'USD', valueAddedTaxIncluded: false },
    seller: { '@id': ORG_ID },
  };
}

export function serviceNode(page: PageData) {
  if (!page.service) return null;
  const offer = pageOffer(page);
  return {
    '@type': 'Service',
    '@id': `${site.domain}${url(page.slug)}#servicio`,
    name: page.service.name ?? page.h1,
    serviceType: page.service.type,
    description: page.description,
    provider: { '@id': ORG_ID },
    areaServed: page.slug.startsWith('miami')
      ? { '@type': 'Place', name: 'Miami-Dade County, Florida' }
      : { '@type': 'Country', name: 'Panamá' },
    inLanguage: 'es-PA',
    ...(offer ? { offers: offer } : {}),
  };
}

/* Tipo de página según su función real. Solo se declara donde la página ES eso. */
const COLLECTIONS = new Set(['portafolio', 'casos-de-exito', 'recursos', 'miami', 'industrias', 'servicios', 'saas', 'marketing', 'crecimiento', 'tecnologias', 'funcionalidades']);
function webPageNode(page: PageData) {
  const type = page.slug === 'nosotros' ? 'AboutPage' : page.slug === 'contacto' ? 'ContactPage' : COLLECTIONS.has(page.slug) || page.slug.startsWith('guias') ? 'CollectionPage' : 'WebPage';
  const pageUrl = `${site.domain}${url(page.slug)}`;
  const primary = imageObject(heroFor(page));
  return {
    '@type': type,
    '@id': `${pageUrl}#pagina`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: 'es-PA',
    isPartOf: { '@id': `${site.domain}/#sitio` },
    about: { '@id': ORG_ID },
    ...(primary ? { primaryImageOfPage: primary } : {}),
    breadcrumb: undefined,
  };
}

/* Persona con nombre y cargo confirmados por el dueño. Añadir más solo con permiso. */
function personNodes(page: PageData) {
  if (page.slug !== 'nosotros') return [];
  return [{
    '@type': 'Person',
    '@id': `${site.domain}/nosotros/#josimar-guilbaud`,
    name: 'Josimar Guilbaud',
    jobTitle: 'CEO',
    worksFor: { '@id': ORG_ID },
  }];
}

/* Catálogo de ofertas del servicio. /precios/: los formatos de site.ts y el plan mensual. Cualquier otra página: los ids
   de precios.json que declare en service.catalogo, solo confirmados (R27). "Desde" = precio mínimo. */
function offersNode(page: PageData) {
  if (page.slug !== 'precios') {
    const ids = page.service?.catalogo;
    if (!ids?.length) return null;
    const confirmados = precios.confirmados as Record<string, { nombre: string; monto: number }>;
    return {
      '@type': 'OfferCatalog',
      name: `${page.service!.name ?? page.h1}: alcances y precio de partida`,
      itemListElement: ids.map((id) => {
        const p = confirmados[id];
        if (!p) throw new Error(`service.catalogo de ${page.slug}: «${id}» no está entre los precios confirmados de precios.json`);
        return { '@type': 'Offer', name: p.nombre, priceSpecification: { '@type': 'PriceSpecification', minPrice: p.monto, priceCurrency: 'USD', valueAddedTaxIncluded: false }, seller: { '@id': ORG_ID } };
      }),
    };
  }
  const num = (p: string) => Number(p.replace(/[^0-9.]/g, '').replace(/,/g, ''));
  return {
    '@type': 'OfferCatalog',
    name: 'Formatos de sitio web y precio de partida',
    itemListElement: pricing.tiers.map((t) => ({
      '@type': 'Offer',
      name: t.name,
      description: `${t.name}: ${t.features.join('; ')}. Precio de partida, sin ITBMS.`,
      priceSpecification: { '@type': 'PriceSpecification', minPrice: num(t.price), priceCurrency: 'USD', valueAddedTaxIncluded: false },
      seller: { '@id': ORG_ID },
    })).concat([{
      '@type': 'Offer',
      name: pricing.managed.name,
      description: `${pricing.managed.name}: ${pricing.managed.summary.join('; ')}. Puesta en marcha de $${pricing.managed.setup} más $${pricing.managed.monthly} al mes durante 12 meses; desde el mes 13, $${pricing.managed.afterYear} al mes por el servicio continuo. Sin ITBMS.`,
      priceSpecification: { '@type': 'UnitPriceSpecification', price: pricing.managed.monthly, priceCurrency: 'USD', billingDuration: 12, billingIncrement: 1, unitCode: 'MON', valueAddedTaxIncluded: false },
      seller: { '@id': ORG_ID },
    } as any]),
  };
}

export function pageJsonLd(page: PageData, opts: { localBusiness?: boolean } = {}) {
  const wp: any = webPageNode(page); delete wp.breadcrumb;
  const svc: any = serviceNode(page);
  const offers = offersNode(page);
  if (svc && offers) svc.hasOfferCatalog = offers;
  const graph = [
    orgNode(),
    webSiteNode(),
    opts.localBusiness ? localBusinessNode() : null,
    wp,
    ...personNodes(page),
    breadcrumbNode(page),
    svc,
    faqNode(page),
  ].filter(Boolean);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

/* `a.slug` ya trae el prefijo `blog/` (p. ej. 'blog/cuanto-cuesta-…'), así que
   la URL se arma con url(): concatenar '/blog/' otra vez producía /blog/blog/…
   (404) en el mainEntityOfPage de los 70 artículos. */
export function articleJsonLd(a: { title: string; description: string; slug: string; date: Date; image?: string; hero?: { src: string; alt: string } }) {
  const pageUrl = `${site.domain}${url(a.slug)}`;
  /* image: portada con medidas y descripción + la imagen para compartir (1200x630). */
  const heroObj = a.hero ? imageObject(a.hero) : null;
  const images = [heroObj, a.image].filter(Boolean);
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      orgNode(),
      webSiteNode(),
      {
        '@type': 'BlogPosting',
        '@id': `${pageUrl}#articulo`,
        url: pageUrl,
        headline: a.title,
        ...(images.length ? { image: images } : {}),
        description: a.description,
        datePublished: a.date.toISOString().slice(0, 10),
        inLanguage: 'es-PA',
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: { '@type': 'WebPage', '@id': pageUrl },
      },
    ],
  });
}

/* Portada. Antes pasaba orgNode() suelto, que se serializaba SIN @context y por
   tanto no era JSON-LD valido: la pagina mas importante del sitio tenia los
   datos estructurados rotos. Aqui va el grafo completo. */
/**
 * Datos estructurados del home (D50): organización, sitio, negocio local, los nodos propios de la portada (el ItemList
 * del mapa de servicios) y el FAQPage de las preguntas visibles, limpiado con la misma función que faqNode.
 */
export function homeJsonLd(faqs: { q: string; a: string }[] = [], nodos: Record<string, unknown>[] = []) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [orgNode(), webSiteNode(), localBusinessNode(), ...nodos, faqPageNode(faqs)].filter(Boolean),
  });
}
