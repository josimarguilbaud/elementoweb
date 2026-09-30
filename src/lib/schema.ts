/* Datos estructurados JSON-LD. El FAQPage SIEMPRE se deriva del bloque faq
   visible: no puede desincronizarse de lo que el usuario ve. */
import { site, url, pricing } from './site';
import type { PageData } from './types';

const ORG_ID = `${site.domain}/#organizacion`;

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

/* ProfessionalService solo en home y contacto. Dirección: TODO bloqueante
   (sin dirección real verificada no se añade PostalAddress). El área servida sí
   se puede declarar sin dirección: es el país y un radio sobre Ciudad de Panamá,
   que es lo que responde a "agencia web cerca de mí". */
export function localBusinessNode() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${site.domain}/#negocio`,
    name: `${site.name}: Diseño Web en Panamá y Miami`,
    url: site.domain,
    parentOrganization: { '@id': ORG_ID },
    telephone: site.phone.replace(/\s/g, '-'),
    email: site.email,
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

export function faqNode(page: PageData) {
  const block = page.blocks.find((b) => b.type === 'faq') as { items: { q: string; a: string }[] } | undefined;
  if (!block?.items?.length) return null;
  const strip = (h: string) => h.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
  return {
    '@type': 'FAQPage',
    mainEntity: block.items.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: strip(f.a) },
    })),
  };
}

export function serviceNode(page: PageData) {
  if (!page.service) return null;
  return {
    '@type': 'Service',
    '@id': `${site.domain}${url(page.slug)}#servicio`,
    name: page.h1,
    serviceType: page.service.type,
    description: page.description,
    provider: { '@id': ORG_ID },
    areaServed: page.slug.startsWith('miami')
      ? { '@type': 'Place', name: 'Miami-Dade County, Florida' }
      : { '@type': 'Country', name: 'Panamá' },
    inLanguage: 'es-PA',
  };
}

/* Tipo de página según su función real. Solo se declara donde la página ES eso. */
const COLLECTIONS = new Set(['portafolio', 'casos-de-exito', 'recursos', 'miami', 'industrias', 'servicios', 'saas', 'marketing', 'crecimiento', 'tecnologias', 'funcionalidades']);
function webPageNode(page: PageData) {
  const type = page.slug === 'nosotros' ? 'AboutPage' : page.slug === 'contacto' ? 'ContactPage' : COLLECTIONS.has(page.slug) ? 'CollectionPage' : 'WebPage';
  const pageUrl = `${site.domain}${url(page.slug)}`;
  return {
    '@type': type,
    '@id': `${pageUrl}#pagina`,
    url: pageUrl,
    name: page.title,
    description: page.description,
    inLanguage: 'es-PA',
    isPartOf: { '@id': `${site.domain}/#sitio` },
    about: { '@id': ORG_ID },
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

/* /precios/: ofertas a partir de la fuente única de precios (site.ts). "Desde" = precio mínimo. */
function offersNode(page: PageData) {
  if (page.slug !== 'precios') return null;
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
    })),
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
export function articleJsonLd(a: { title: string; description: string; slug: string; date: Date; image?: string }) {
  const pageUrl = `${site.domain}${url(a.slug)}`;
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
        ...(a.image ? { image: a.image } : {}),
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
 * Datos estructurados del home.
 *
 * Recibe las preguntas visibles de la portada porque eran las unicas del sitio
 * que no llegaban al JSON-LD: el resto de paginas si emiten FAQPage y el
 * home, que trae justo las preguntas que la gente busca ("cuanto cuesta una
 * pagina web en Panama"), se quedaba fuera.
 */
export function homeJsonLd(faqs: [string, string][] = []) {
  const faqNodeHome = faqs.length
    ? {
        '@type': 'FAQPage',
        mainEntity: faqs.map(([q, a]) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim() },
        })),
      }
    : null;
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [orgNode(), webSiteNode(), localBusinessNode(), faqNodeHome].filter(Boolean),
  });
}
