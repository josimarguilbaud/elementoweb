/* Registro central de páginas. El orden no importa; los slugs sí. */
import type { PageData } from '../types';
import { core } from './core';
import { disenoWebPanama } from './diseno-web-panama';
import { servicios } from './servicios';
import { tecnologias } from './tecnologias';
import { funcionalidades } from './funcionalidades';
import { industriasPages } from './industrias';
import { industrias2a } from './industrias-2a';
import { industrias2b } from './industrias-2b';
import { industrias2c } from './industrias-2c';
import { crecimiento } from './crecimiento';
import { saasPages } from './saas';
import { marketingPages } from './marketing';
import { blog1 } from './blog-1';
import { blog2 } from './blog-2';
import { blog3 } from './blog-3';
import { blog4 } from './blog-4';
import { blog5 } from './blog-5';
import { blog6 } from './blog-6';

export const pages: PageData[] = [
  ...core,
  ...disenoWebPanama,
  ...servicios,
  ...tecnologias,
  ...funcionalidades,
  ...industriasPages,
  ...industrias2a,
  ...industrias2b,
  ...industrias2c,
  ...crecimiento,
  ...saasPages,
  ...marketingPages,
  ...blog1,
  ...blog2,
  ...blog3,
  ...blog4,
  ...blog5,
  ...blog6,
];

/* Guardia de build: slugs duplicados rompen la compilación aquí mismo. */
const seen = new Set<string>();
for (const p of pages) {
  if (seen.has(p.slug)) throw new Error(`Slug duplicado en lib/pages: "${p.slug}"`);
  seen.add(p.slug);
}
