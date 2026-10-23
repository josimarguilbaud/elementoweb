/* /llms-full.txt: la versión larga de public/llms.txt para asistentes de IA. Se arma en cada build desde las mismas
   páginas que ve el visitante (título, URL, descripción, respuesta directa con su fecha y preguntas frecuentes), así no
   se desactualiza. Las páginas privadas (/demo/, /propuestas/, /presentaciones/) no están en `pages`. */
import type { APIRoute } from 'astro';
import { pages } from '../lib/pages';
import { site, url } from '../lib/site';

const texto = (html: string) => html.replace(/<[^>]+>/g, '').replace(/&nbsp;/g, ' ').replace(/\s+/g, ' ').trim();

const GRUPOS: [string, (slug: string) => boolean][] = [
  ['Servicios y páginas comerciales', (s) => !s.startsWith('blog/') && !s.startsWith('industrias/') && !s.startsWith('miami')],
  ['Industrias', (s) => s.startsWith('industrias/')],
  ['Miami (servicio remoto desde Panamá)', (s) => s.startsWith('miami')],
  ['Blog', (s) => s.startsWith('blog/')],
];

function seccion(p: (typeof pages)[number]) {
  const lineas = [`### ${p.title}`, '', `URL: ${site.domain}${url(p.slug)}`];
  if (p.updated) lineas.push(`Actualizado: ${p.updated}`);
  lineas.push('', texto(p.description));
  for (const b of p.blocks) {
    if (b.type === 'answer') lineas.push('', `Respuesta directa (al ${b.fecha}): ${texto(b.text)}`);
    if (b.type === 'faq') for (const it of b.items) lineas.push('', `P: ${texto(it.q)}`, `R: ${texto(it.a)}`);
  }
  return lineas.join('\n');
}

export const GET: APIRoute = () => {
  const partes = [
    `# ${site.name}: versión completa para asistentes de IA`,
    '',
    '> Agencia de marketing digital, inteligencia artificial y diseño web con sede en Ciudad de Panamá. Fundador y CEO: Josimar Guilbaud.',
    '',
    `Resumen y mapa del sitio: ${site.domain}/llms.txt. Precios en USD, sin ITBMS (7%). Contacto: ${site.email}, WhatsApp ${site.phone}.`,
  ];
  for (const [nombre, entra] of GRUPOS) {
    const del = pages.filter((p) => entra(p.slug)).sort((a, b) => a.slug.localeCompare(b.slug));
    if (!del.length) continue;
    partes.push('', `## ${nombre}`, '', ...del.map((p) => seccion(p) + '\n'));
  }
  return new Response(partes.join('\n').trimEnd() + '\n', { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
