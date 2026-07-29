/* Modelo de datos de páginas. El contenido vive en src/lib/pages/*. */

export type Block =
  | { type: 'prose'; h2: string; paragraphs: string[] }
  | { type: 'cards'; h2: string; intro?: string; items: { h3: string; text: string; link?: { slug: string; label: string } }[] }
  | { type: 'catalog'; h2: string; intro?: string; groups: { title: string; hub: string; items: { h3: string; text: string; link: { slug: string; label: string } }[] }[] }
  | { type: 'checklist'; h2: string; intro?: string; items: string[] }
  | { type: 'steps'; h2: string; intro?: string; items: { h3: string; text: string }[] }
  | { type: 'pricing'; h2: string; intro?: string }
  | { type: 'extras'; h2: string; intro?: string }
  | { type: 'production'; h2: string; intro?: string }
  | { type: 'projects'; h2?: string; intro?: string }
  | { type: 'faq'; h2: string; items: { q: string; a: string }[] }
  | { type: 'related'; h2?: string; items: { slug: string; label: string }[] }
  | { type: 'form'; h2?: string; intro?: string }
  | { type: 'statement'; text: string; strong?: string };

export interface PageData {
  slug: string;
  title: string;
  description: string;
  h1: string;
  breadcrumb?: string;
  /** Primer párrafo corto (hero); el resto se renderiza como intro bajo el hero. */
  lead: string[];
  /** ⚠️ TEMPORAL: placeholders de picsum.photos con seed descriptivo (sin créditos de
   *  generación disponibles). Reemplazar por fotografía real o generada antes de publicar. */
  heroImage?: { src: string; alt: string };
  heroCtas?: { label: string; href: string; primary?: boolean }[];
  blocks: Block[];
  cta?: { h2?: string; text?: string; wa?: string };
  noindex?: boolean;
  /** Schema Service */
  service?: { type: string };
  /** Hub padre para migas: 'servicios' | 'tecnologias' | ... */
  parent?: { slug: string; label: string };
  /** Muestra la banda de credenciales (hubs y páginas clave, no en todas). */
  creds?: boolean;
  /** Blog: fecha ISO (YYYY-MM-DD) y categoría, para listado y schema Article. */
  date?: string;
  category?: string;
}
