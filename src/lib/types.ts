/* Modelo de datos de páginas. El contenido vive en src/lib/pages/*. */

export type Block =
  | { type: 'prose'; h2: string; paragraphs: string[] }
  | { type: 'cards'; h2: string; intro?: string; items: { h3: string; text: string; link?: { slug: string; label: string } }[] }
  | { type: 'catalog'; h2: string; intro?: string; groups: { title: string; hub: string; items: { h3: string; text: string; link: { slug: string; label: string } }[] }[] }
  | { type: 'checklist'; h2: string; intro?: string; items: string[] }
  | { type: 'steps'; h2: string; intro?: string; items: { h3: string; text: string }[] }
  | { type: 'pricing'; h2: string; intro?: string; full?: boolean }
  | { type: 'extras'; h2: string; intro?: string }
  | { type: 'production'; h2: string; intro?: string }
  | { type: 'projects'; h2?: string; intro?: string }
  | { type: 'faq'; h2: string; items: { q: string; a: string }[] }
  | { type: 'related'; h2?: string; items: { slug: string; label: string }[] }
  | { type: 'form'; h2?: string; intro?: string }
  | { type: 'statement'; text: string; strong?: string }
  | { type: 'infra'; h2: string; intro?: string; columns: InfraColumn[] }
  | { type: 'plans'; h2: string; intro?: string; tiers: PlanTier[]; note?: string }
  | { type: 'seo-momentum'; h2: string; intro?: string }
  /* Bloques de la anatomía nueva (D7, D21 a D24, D28). Cada uno emite el contrato data-* que lee el validador. */
  | { type: 'answer'; h2?: string; text: string; fecha: string }
  | { type: 'receipt'; titulo: string; fecha: string; metodo?: string; precio: ReceiptPrice; plazo: string; medicionId?: string; pie?: string[]; compacto?: boolean }
  | { type: 'compare'; h2: string; intro?: string; criterios: CompareRow[]; otraCotizacion?: boolean }
  | { type: 'includes'; h2: string; incluye: string[]; entregables: string[]; noIncluye: string[] }
  | { type: 'blank'; punto: 'prueba'; h2?: string }
  | { type: 'showcase'; id?: string; ctaLabel?: string; extraViews?: { label: string; src: string }[]; h2: string; intro?: string; project?: string; image?: { src: string; alt: string; width: number; height: number; caption: string }; notes: { label: string; text: string }[]; caption?: string };

/** Estado del precio (D23): solo 'confirmado' puede emitir Offer y llevar cifra en la portada. */
export type PriceState = 'confirmado' | 'propuesto' | 'cotizado';

export interface ReceiptPrice {
  estado: PriceState;
  /** Cifra de partida, p. ej. '$1,250'. Obligatoria si es 'confirmado'; en 'propuesto' es solo la referencia publicada. */
  desde?: string;
  /** Qué cubre o por cuánto tiempo, p. ej. 'por proyecto' o 'al mes'. */
  unidad?: string;
}

/** Fila de la comparación (D28): el criterio sale de la oferta publicada y enlaza a su fuente. */
export interface CompareRow {
  criterio: string;
  nosotros: string;
  fuente?: { slug: string; label: string };
}

/** Clasificación de página (D35). La deriva `kindOf` en src/lib/pages/kind.ts; no cambia cómo se ve. */
export type PageKind = 'service' | 'hub' | 'pillar' | 'pricing' | 'industry' | 'blog' | 'location' | 'guide' | 'case' | 'other';

/** Columna del widget de infraestructura/confiabilidad (3 columnas animadas). */
export interface InfraColumn {
  eyebrow: string;
  title: string;
  text: string;
  bullets: string[];
  link?: { slug: string; label: string };
  /** Qué visual animado renderiza: barras de uso, estado en línea, o monitor con pulso. */
  visual: 'usage' | 'uptime' | 'monitor';
  /** Dato clave que acompaña al visual (p.ej. "99.9" o "4"). No aplica al visual 'usage'. */
  stat?: string;
  statLabel?: string;
}

/** Nivel de un plan (mantenimiento, etc.) con features y CTA propios. */
export interface PlanTier {
  name: string;
  price: string;
  unit?: string;
  for?: string;
  features: string[];
  featured?: boolean;
}

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
  /** Servicio que preselecciona el formulario desde los botones de la página: clave de src/data/formulario.json. */
  serviceKey?: string;
  /** Clasificación explícita (D35); si falta, `kindOf` la deriva del slug. */
  kind?: PageKind;
  /** Opt-in a la anatomía nueva (D21): 'v2' activa el contrato data-* y los bloques de evidencia en esta página.
   *  `kind` clasifica todas las páginas; solo las que declaran 'v2' cambian de aspecto. */
  anatomia?: 'v2';
  /** Línea de oferta bajo los botones de la portada (precio, alcance, plazo). */
  offer?: { line: string; note: string };
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
