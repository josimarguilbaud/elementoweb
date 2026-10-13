/* Clasificación de páginas (D35). Una sola función deriva el tipo de las 250 páginas existentes sin
   tocar cada archivo; una página puede fijar `kind` a mano. Solo clasifica: no cambia cómo se ve nada.
   Este archivo no importa nada más que tipos para que `node --test` lo pueda cargar directamente. */
import type { PageData, PageKind } from '../types';

/** Tipo de página que lee el validador en `<main data-page-type>` (D7). Solo las páginas con anatomía v2 lo emiten:
 *  una página que no lo declara no entra al marcador y una excluida no puede llevarlo (D5). */
export function pageTypeOf(page: Pick<PageData, 'slug' | 'kind' | 'anatomia' | 'blocks'>): string | undefined {
  if (page.anatomia !== 'v2') return undefined;
  const kind = kindOf(page);
  if (kind === 'service') {
    const rc = page.blocks.find((b) => b.type === 'receipt');
    return rc && rc.type === 'receipt' && rc.precio.estado === 'confirmado' ? 'servicio-con-precio' : 'servicio-cotizado';
  }
  if (kind === 'pillar') return 'pilar';
  if (kind === 'hub') return 'hub';
  if (kind === 'pricing') return 'precios';
  return 'otro';
}

/** Los 6 hubs comerciales: su índice es `hub` y lo que cuelga de ellos es `service`. */
export const HUBS = ['servicios', 'crecimiento', 'marketing', 'tecnologias', 'funcionalidades', 'saas'] as const;

/** Páginas de servicio que viven en la raíz del sitio, fuera de los hubs. */
export const SERVICIOS_EN_RAIZ = ['inteligencia-artificial-para-empresas-panama'] as const;

export function kindOf(page: Pick<PageData, 'slug' | 'kind'>): PageKind {
  if (page.kind) return page.kind;
  const s = page.slug;
  const raiz = s.split('/')[0];
  if (s === 'diseno-web-panama') return 'pillar';
  if (s === 'precios') return 'pricing';
  if ((SERVICIOS_EN_RAIZ as readonly string[]).includes(s)) return 'service';
  if (raiz === 'blog') return 'blog';
  if (raiz === 'industrias') return 'industry';
  if (raiz === 'miami') return 'location';
  if (raiz === 'guias' || raiz === 'recursos') return 'guide';
  if (raiz === 'casos-de-exito') return 'case';
  if ((HUBS as readonly string[]).includes(raiz)) return s === raiz ? 'hub' : 'service';
  return 'other';
}
