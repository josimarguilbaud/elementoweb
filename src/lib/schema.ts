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

/* LocalBusiness solo en home y contacto. Dirección: TODO bloqueante
   (sin dirección real verificada no se añade PostalAddress). */
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
    areaServed: { '@type': 'Country', name: 'Panamá' },
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
  };
}

export function pageJsonLd(page: PageData, opts: { localBusiness?: boolean } = {}) {
  const graph = [
    orgNode(),
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
