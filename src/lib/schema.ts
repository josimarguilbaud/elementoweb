/* Datos estructurados JSON-LD. El FAQPage SIEMPRE se deriva del bloque faq
   visible: no puede desincronizarse de lo que el usuario ve. */
import { site, url } from './site';
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
    logo: `${site.domain}/favicon.svg`,
    areaServed: [{ '@type': 'Country', name: 'Panamá' }, { '@type': 'Place', name: 'América Latina' }],
    // ⚠️ Completar con perfiles sociales reales antes de publicar.
    sameAs: ['https://www.instagram.com/elementoweb.com'],
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

/* LocalBusiness solo en home y contacto. Dirección: TODO bloqueante
   (sin dirección real verificada no se añade PostalAddress). El área servida sí
   se puede declarar sin dirección: es el país y un radio sobre Ciudad de Panamá,
   que es lo que responde a "agencia web cerca de mí". */
export function localBusinessNode() {
  return {
    '@type': 'ProfessionalService',
    '@id': `${site.domain}/#negocio`,
    name: `${site.name}: Diseño Web en Panamá`,
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
    areaServed: { '@type': 'Country', name: 'Panamá' },
    inLanguage: 'es-PA',
  };
}

export function pageJsonLd(page: PageData, opts: { localBusiness?: boolean } = {}) {
  const graph = [
    orgNode(),
    webSiteNode(),
    opts.localBusiness ? localBusinessNode() : null,
    breadcrumbNode(page),
    serviceNode(page),
    faqNode(page),
  ].filter(Boolean);
  return JSON.stringify({ '@context': 'https://schema.org', '@graph': graph });
}

export function articleJsonLd(a: { title: string; description: string; slug: string; date: Date }) {
  return JSON.stringify({
    '@context': 'https://schema.org',
    '@graph': [
      orgNode(),
      webSiteNode(),
      {
        '@type': 'Article',
        headline: a.title,
        description: a.description,
        datePublished: a.date.toISOString().slice(0, 10),
        inLanguage: 'es-PA',
        author: { '@id': ORG_ID },
        publisher: { '@id': ORG_ID },
        mainEntityOfPage: `${site.domain}/blog/${a.slug}/`,
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
 * que no llegaban al JSON-LD: las 108 paginas restantes si emiten FAQPage y el
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
