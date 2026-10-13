/* Páginas de ejemplo para probar el contrato del marcador (D7, D38) con HTML real.
   Solo las usa src/pages/qa-fixture/[...slug].astro y únicamente cuando se compila con ASTRO_FIXTURES=1
   (npm run build:fixtures → dist-fixture/). En la compilación normal no existe ninguna de estas rutas.
   El texto es de ejemplo: nada de aquí se publica. */
import type { PageData, Block } from './types';

const faq = (n: number): Block => ({
  type: 'faq',
  h2: 'Preguntas frecuentes',
  items: Array.from({ length: n }, (_, i) => ({ q: `¿Pregunta de ejemplo número ${i + 1}?`, a: `Respuesta de ejemplo número ${i + 1}, con un enlace <a href="/precios/">a precios</a>.` })),
});

const answer: Block = {
  type: 'answer',
  fecha: '2026-10-13',
  text: 'Una página web corporativa en Panamá parte desde 1,250 dólares e incluye diseño adaptado a móvil, hasta seis páginas, SEO inicial y capacitación grabada. Se entrega en cinco a diez días hábiles desde que recibimos el contenido y apruebas el alcance. Lo que no incluye, como dominio y hosting, se cotiza aparte y por escrito.',
};

const includes: Block = {
  type: 'includes',
  h2: 'Qué incluye y qué no',
  incluye: ['Hasta 6 páginas en total', 'Diseño adaptado a móvil y computadora', 'SEO inicial por página'],
  entregables: ['Sitio publicado', 'Capacitación grabada', 'Accesos y archivos'],
  noIncluye: ['Dominio, hosting y certificado SSL', 'Redacción de contenido', 'Licencias de terceros'],
};

const compare: Block = {
  type: 'compare',
  h2: 'Por qué es mejor',
  intro: 'Cada criterio sale de la oferta publicada; compáralo con cualquier otra cotización.',
  otraCotizacion: true,
  criterios: [
    { criterio: 'Precio de partida', nosotros: 'Publicado: desde $1,250', fuente: { slug: 'precios', label: 'Ver precios' } },
    { criterio: 'Plazo', nosotros: '5 a 10 días hábiles desde el contenido' },
    { criterio: 'Qué no incluye', nosotros: 'Dominio, hosting y licencias, por escrito' },
    { criterio: 'Quién es el dueño de la web', nosotros: 'Tú: el dominio queda a tu nombre' },
  ],
};

const showcase: Block = {
  type: 'showcase',
  h2: 'Un proyecto real',
  project: 'KL Contable',
  notes: [{ label: 'Alcance', text: 'Diez servicios, guías por tipo de cliente y blog propio.' }],
};

const base = (slug: string, blocks: Block[], precio: Extract<Block, { type: 'receipt' }>['precio']): PageData => ({
  slug,
  title: `Ejemplo ${slug}`,
  description: 'Página de ejemplo para probar el contrato del marcador. No se publica.',
  h1: `Ejemplo ${slug}`,
  lead: ['Página de ejemplo.'],
  kind: 'service',
  anatomia: 'v2',
  serviceKey: 'pyme',
  service: { type: 'Diseño web' },
  noindex: true,
  blocks: [
    { type: 'receipt', titulo: 'Sitio corporativo', fecha: '2026-10-13', metodo: 'ejemplo', precio, plazo: '5 a 10 días hábiles desde recibir el contenido', pie: ['No incluye dominio, hosting ni licencias de terceros.'] },
    answer,
    ...blocks,
  ],
});

const formularioPagina = (slug: string, servicio?: string): PageData => ({
  slug,
  title: `Ejemplo ${slug}`,
  description: 'Página de ejemplo del formulario por servicio. No se publica.',
  h1: `Ejemplo ${slug}`,
  lead: ['Página de ejemplo.'],
  noindex: true,
  blocks: [{ type: 'service-form', h2: 'Cotiza tu proyecto', servicio }],
});

export const fixtures: PageData[] = [
  // Formulario por servicio (ServiceForm): con servicio preseleccionado y sin él.
  formularioPagina('qa-fixture/formulario', 'ecommerce'),
  formularioPagina('qa-fixture/formulario-libre'),
  // Válida: precio confirmado, los 10 puntos (la medición queda en blanco honesto y la prueba es un proyecto real).
  base('qa-fixture/servicio-valido', [showcase, includes, compare, faq(6)], { estado: 'confirmado', desde: '$1,250', unidad: 'por proyecto' }),
  // Precio propuesto: la portada dice cotización cerrada, no hay Offer en el schema.
  base('qa-fixture/servicio-propuesto', [showcase, includes, compare, faq(6)], { estado: 'propuesto', desde: '$300', unidad: 'al mes' }),
  // Medición y prueba de proyecto en blanco a la vez: el validador debe rechazarla (D17).
  base('qa-fixture/servicio-sin-prueba', [{ type: 'blank', punto: 'prueba' }, includes, compare, faq(6)], { estado: 'cotizado' }),
];
