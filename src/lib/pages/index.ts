/* Registro central de páginas. El orden no importa; los slugs sí. */
import type { PageData } from '../types';
import formulario from '../../data/formulario.json';
import { core } from './core';
import { precios } from './precios';
import { iaEmpresas } from './ia-empresas';
import { casos } from './casos';
import { recursos } from './recursos';
import { clusters } from './clusters';
import { disenoWebPanama } from './diseno-web-panama';
import { servicios } from './servicios';
import { tecnologias } from './tecnologias';
import { funcionalidades } from './funcionalidades';
import { industriasPages } from './industrias';
import { industrias2a } from './industrias-2a';
import { industrias2b } from './industrias-2b';
import { industrias2c } from './industrias-2c';
import { industrias3 } from './industrias-3';
import { crecimiento } from './crecimiento';
import { miamiPages } from './miami';
import { miamiPages2 } from './miami-2';
import { saasPages } from './saas';
import { marketingPages } from './marketing';
import { blog1 } from './blog-1';
import { blog2 } from './blog-2';
import { blog3 } from './blog-3';
import { blog4 } from './blog-4';
import { blog5 } from './blog-5';
import { blog6 } from './blog-6';
import { blog7 } from './blog-7';
import { blog8 } from './blog-8';
import { blog9 } from './blog-9';
import { blog10 } from './blog-10';
import { blog11 } from './blog-11';
import { blog12 } from './blog-12';
import { blog13 } from './blog-13';
import { blog14 } from './blog-14';
import { blog15 } from './blog-15';
import { blog16 } from './blog-16';
import { blog17 } from './blog-17';
import { blog18 } from './blog-18';
import { blog19 } from './blog-19';
import { blog20 } from './blog-20';
import { blog21 } from './blog-21';
import { blog22 } from './blog-22';
import { blog23 } from './blog-23';
import { blog24 } from './blog-24';
import { blog25 } from './blog-25';
import { blog26 } from './blog-26';
import { blog27 } from './blog-27';
import { blog28 } from './blog-28';
import { blog29 } from './blog-29';
import { blog30 } from './blog-30';
import { blog31 } from './blog-31';
import { blog32 } from './blog-32';
import { blog33 } from './blog-33';
import { blog34 } from './blog-34';
import { blog35 } from './blog-35';
import { blog36 } from './blog-36';
import { blog37 } from './blog-37';
import { blog38 } from './blog-38';
import { blog39 } from './blog-39';
import { blog40 } from './blog-40';
import { blog41 } from './blog-41';
import { preguntasWhatsapp } from './preguntas-whatsapp';
import { preguntasIa } from './preguntas-ia';
import { preguntasN8n } from './preguntas-n8n';
import { servicios2026 } from './servicios-2026';

export const pages: PageData[] = [
  ...core,
  ...precios,
  ...iaEmpresas,
  ...casos,
  ...recursos,
  ...clusters,
  ...disenoWebPanama,
  ...servicios,
  ...tecnologias,
  ...funcionalidades,
  ...industriasPages,
  ...industrias2a,
  ...industrias2b,
  ...industrias2c,
  ...industrias3,
  ...crecimiento,
  ...miamiPages,
  ...miamiPages2,
  ...saasPages,
  ...marketingPages,
  ...blog1,
  ...blog2,
  ...blog3,
  ...blog4,
  ...blog5,
  ...blog6,
  ...blog7,
  ...blog8,
  ...blog9,
  ...blog10,
  ...blog11,
  ...blog12,
  ...blog13,
  ...blog14,
  ...blog15,
  ...blog16,
  ...blog17,
  ...blog18,
  ...blog19,
  ...blog20,
  ...blog21,
  ...blog22,
  ...blog23,
  ...blog24,
  ...blog25,
  ...blog26,
  ...blog27,
  ...blog28,
  ...blog29,
  ...blog30,
  ...blog31,
  ...blog32,
  ...blog33,
  ...blog34,
  ...blog35,
  ...blog36,
  ...blog37,
  ...blog38,
  ...blog39,
  ...blog40,
  ...blog41,
  /* Páginas de pregunta de WhatsApp, IA y n8n (fase 2 de la estrategia SEO y GEO, 23-oct-2026). */
  ...preguntasWhatsapp,
  ...preguntasIa,
  ...preguntasN8n,
  /* Servicios de 2026 (D60): posicionamiento en ChatGPT (GEO), agente de ventas con IA en WhatsApp y los paquetes de /soluciones/. */
  ...servicios2026,
];

/* Guardia de build: slugs duplicados rompen la compilación aquí mismo. */
const seen = new Set<string>();
const claves = new Set(formulario.servicios.map((s) => s.clave));
for (const p of pages) {
  if (seen.has(p.slug)) throw new Error(`Slug duplicado en lib/pages: "${p.slug}"`);
  seen.add(p.slug);
  /* D34: el serviceKey de una página existe en el esquema único del formulario. */
  if (p.serviceKey && !claves.has(p.serviceKey)) throw new Error(`serviceKey "${p.serviceKey}" de "${p.slug}" no existe en src/data/formulario.json`);
}

/* Fecha de actualización del blog (dateModified en el schema, «Actualizado» visible y lastmod del sitemap). D57 reescribió
   los artículos del blog el 22-oct-2026 (commits abdf9d8, 7348ea9 y 4c81470): esa es su última revisión salvo que el
   artículo declare otra. Al cambiar el contenido de un artículo, se pone su `updated` en la página. */
const REVISION_BLOG = '2026-10-22';
for (const p of pages) {
  if (p.parent?.slug === 'blog' && p.date && !p.updated) p.updated = p.date > REVISION_BLOG ? p.date : REVISION_BLOG;
}
