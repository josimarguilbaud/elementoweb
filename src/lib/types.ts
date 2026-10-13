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
  /* `incluye` acepta texto suelto o { t, d } (molde Kredit, D44): título en negrita y una línea de explicación.
     `medimos` son los indicadores de «Cómo lo medimos». */
  | { type: 'includes'; h2: string; intro?: string; incluye: (string | ItemDetalle)[]; entregables: string[]; noIncluye: string[]; medimos?: string[] }
  /* «Así se vería» (D44): maquetas del entregable hechas en HTML. Nunca afirman un resultado. */
  | { type: 'ejemplos'; h2: string; intro?: string; items: Ejemplo[]; nota: string; columnas?: 1 | 2 | 3 }
  /* Tabla de ejemplo (campañas y palabras, pilares del mes, páginas del sitio). */
  | { type: 'tabla'; h2: string; intro?: string; columnas: string[]; filas: string[][]; nota?: string }
  | { type: 'blank'; punto: 'prueba'; h2?: string }
  /* Formulario por servicio (D10). Existe pero NINGUNA página lo usa hasta la fase 3: reemplaza al bloque `form` cuando n8n acepte el contrato v2. */
  | { type: 'service-form'; h2?: string; intro?: string; servicio?: string }
  | { type: 'showcase'; id?: string; ctaLabel?: string; extraViews?: { label: string; src: string }[]; h2: string; intro?: string; project?: string; image?: { src: string; alt: string; width: number; height: number; caption: string }; notes: { label: string; text: string }[]; caption?: string };

/** Elemento de «Qué incluye» con título y explicación (molde Kredit, D44). */
export interface ItemDetalle { t: string; d: string }

/** Imagen local de una maqueta: ruta pública, texto alternativo y dimensiones reales. */
export interface ImgEjemplo { src: string; alt: string; width: number; height: number }

/** Resultado en la maqueta de Google: anuncio (Patrocinado), orgánico o con preguntas desplegadas. */
export interface ResultadoGoogle {
  clase: 'anuncio' | 'organico';
  sitio: string;
  url: string;
  titulo: string;
  texto: string;
  enlaces?: string[];
  preguntas?: string[];
}

/** Maquetas de «Así se vería» (D44). Todas son ejemplos y lo dicen en pantalla. */
export type Ejemplo =
  | { tipo: 'google'; consulta: string; resultados: ResultadoGoogle[] }
  | { tipo: 'anuncio-social'; cuenta: string; inicial: string; img: ImgEjemplo; pill?: string; titular: string; enfasis?: string; sub?: string; cta: string; texto: string }
  | { tipo: 'post'; img: ImgEjemplo; pill: string; titular: string; enfasis?: string; sub?: string; boton?: string; reel?: boolean; formato: string; objetivo: string; llamado: string }
  | { tipo: 'web'; dominio: string; escritorio: ImgEjemplo; movil?: ImgEjemplo; pie: string }
  | { tipo: 'whatsapp'; negocio: string; mensajes: { de: 'negocio' | 'cliente'; texto: string; hora: string; botones?: string[]; img?: ImgEjemplo }[] }
  | { tipo: 'correo'; remitente: string; asunto: string; previa: string; img?: ImgEjemplo; titular: string; texto: string; boton: string }
  | { tipo: 'flujo'; titulo: string; pasos: { t: string; d: string }[] }
  | { tipo: 'asistente'; pregunta: string; respuesta: string; fuentes: string[] }
  /** Ficha de producto de una tienda de ejemplo: precio con ITBMS claro, envío visible y formas de pago antes del carrito. */
  | { tipo: 'producto'; tienda: string; dominio: string; img: ImgEjemplo; nombre: string; precio: string; nota: string; opciones?: { k: string; v: string[] }; envio: string; boton: string; pagos: string }
  /** Resumen de pago de una tienda de ejemplo: envío por zona elegible y pago local antes de confirmar. */
  | { tipo: 'checkout'; tienda: string; lineas: { t: string; v: string }[]; envios: { t: string; d: string; v: string; sel?: boolean }[]; total: { t: string; v: string }; pagos: { t: string; sel?: boolean }[]; boton: string }
  /** Los tres negocios del mapa de Google para una búsqueda local; el destacado muestra sus botones. */
  | { tipo: 'mapa'; consulta: string; lugares: { nombre: string; nota: string; resenas: string; categoria: string; detalle: string; destacado?: boolean }[]; botones: string[] }
  /** Pantalla de edición de un panel (WordPress, portal a medida): los campos exactos que ve el equipo. */
  | { tipo: 'panel'; sitio: string; titulo: string; campos: { k: string; v: string; largo?: boolean }[]; boton: string }
  /** Agenda de reservas en la web: servicio, días, horas libres y ocupadas, depósito opcional. */
  | { tipo: 'agenda'; negocio: string; servicio: string; dias: { d: string; sel?: boolean }[]; horas: { h: string; libre: boolean; sel?: boolean }[]; deposito?: string; boton: string }
  /** Reseña de Google con la respuesta del negocio. */
  | { tipo: 'resena'; negocio: string; autor: string; inicial: string; estrellas: number; hace: string; texto: string; respuesta: string; respondio: string }
  /** Ficha de auditoría de un sitio de ejemplo: cada fila con su estado (bien, revisar, mal). */
  | { tipo: 'informe'; titulo: string; sitio: string; filas: { k: string; v: string; estado: 'bien' | 'ojo' | 'mal' }[]; pie: string };

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
  /** Portada con foto (D45, solo anatomía v2): pie corto sobre la foto y riel con datos de alcance. La foto es la de
   *  public/images/hero/<slug>; su alt sale de src/lib/img.ts. */
  portada?: { pie: string; riel: { k: string; v: string }[] };
  heroCtas?: { label: string; href: string; primary?: boolean }[];
  blocks: Block[];
  /** `boton` sustituye el texto del botón principal de la portada v2 cuando la clave del formulario es genérica. */
  cta?: { h2?: string; text?: string; wa?: string; boton?: string };
  noindex?: boolean;
  /** Schema Service. `name` cuando el H1 no nombra el servicio (un H1 de campaña); si falta, el nombre es el H1. */
  service?: { type: string; name?: string };
  /** Hub padre para migas: 'servicios' | 'tecnologias' | ... */
  parent?: { slug: string; label: string };
  /** Muestra la banda de credenciales (hubs y páginas clave, no en todas). */
  creds?: boolean;
  /** Blog: fecha ISO (YYYY-MM-DD) y categoría, para listado y schema Article. */
  date?: string;
  category?: string;
}
