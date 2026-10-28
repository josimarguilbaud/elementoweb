// Genera los diagramas SVG de las páginas de servicio en src/diagramas/ (bloque `diagrama` de Blocks.astro).
//   node scripts/diagramas.mjs
// Monocromo como las internas (D57) y solo Roboto. Una caja en negro por diagrama: la que importa.
// Conectores en ángulo recto con curva de 8 px; las etiquetas llevan fondo blanco y quedan separadas de la línea.
import { mkdirSync, writeFileSync } from 'node:fs';

const OUT = new URL('../src/diagramas/', import.meta.url);
const TINTA = '#0a0a0a', TEXTO = '#525252', SUAVE = '#737373', REGLA = '#d4d4d4', FONDO = '#f5f5f5';
const FUENTE = 'Roboto, system-ui, sans-serif';
const esc = (s) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;');

/* kind: paso (blanco), foco (negro), dato (gris), opcional (línea punteada). */
function caja({ x, y, w, h, nombre, sub, kind = 'paso' }) {
  const estilos = {
    paso: { fill: '#fff', stroke: TINTA, dash: '', c1: TINTA, c2: TEXTO },
    foco: { fill: TINTA, stroke: TINTA, dash: '', c1: '#fff', c2: '#d4d4d4' },
    dato: { fill: FONDO, stroke: SUAVE, dash: '', c1: TINTA, c2: TEXTO },
    opcional: { fill: '#fff', stroke: SUAVE, dash: ' stroke-dasharray="5 4"', c1: TINTA, c2: TEXTO },
  }[kind];
  const cx = x + w / 2, cy = y + h / 2;
  const t = sub
    ? `<text x="${cx}" y="${cy - 3}" fill="${estilos.c1}" font-size="16" font-weight="700" text-anchor="middle">${esc(nombre)}</text>
  <text x="${cx}" y="${cy + 16}" fill="${estilos.c2}" font-size="13" text-anchor="middle">${esc(sub)}</text>`
    : `<text x="${cx}" y="${cy + 5}" fill="${estilos.c1}" font-size="16" font-weight="700" text-anchor="middle">${esc(nombre)}</text>`;
  return `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="8" fill="${estilos.fill}" stroke="${estilos.stroke}" stroke-width="1.5"${estilos.dash}/>
  ${t}`;
}

const linea = (d, { punteada = false } = {}) =>
  `<path d="${d}" fill="none" stroke="${SUAVE}" stroke-width="1.5"${punteada ? ' stroke-dasharray="5 4"' : ''} marker-end="url(#flecha)"/>`;

/* Etiqueta de conector: anchor 'start' la pone a la derecha del punto, 'end' a la izquierda, 'middle' centrada. */
function etiqueta(x, y, texto, anchor = 'start') {
  const w = texto.length * 7.4 + 10;
  const rx = anchor === 'start' ? x - 5 : anchor === 'end' ? x - w + 5 : x - w / 2;
  return `<rect x="${rx}" y="${y - 12}" width="${w}" height="17" fill="#fff"/>
  <text x="${x}" y="${y}" fill="${SUAVE}" font-size="11" font-weight="500" letter-spacing="0.08em" text-anchor="${anchor}">${esc(texto)}</text>`;
}

function svg(id, { w, h, titulo, desc, cuerpo }) {
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${w} ${h}" role="img" aria-labelledby="${id}-title ${id}-desc" font-family="${FUENTE}">
  <title id="${id}-title">${esc(titulo)}</title>
  <desc id="${id}-desc">${esc(desc)}</desc>
  <defs><marker id="flecha" markerWidth="8" markerHeight="6" refX="7" refY="3" orient="auto"><polygon points="0 0, 8 3, 0 6" fill="${SUAVE}"/></marker></defs>
  ${cuerpo.join('\n  ')}
</svg>
`;
}

function leyenda(y, items) {
  const out = [`<line x1="16" y1="${y}" x2="384" y2="${y}" stroke="${REGLA}" stroke-width="1"/>`];
  let x = 16;
  for (const { kind, texto } of items) {
    const fill = kind === 'foco' ? TINTA : kind === 'dato' ? FONDO : '#fff';
    const stroke = kind === 'opcional' ? SUAVE : kind === 'dato' ? SUAVE : TINTA;
    out.push(`<rect x="${x}" y="${y + 14}" width="16" height="12" rx="3" fill="${fill}" stroke="${stroke}" stroke-width="1.5"${kind === 'opcional' ? ' stroke-dasharray="3 2"' : ''}/>`);
    out.push(`<text x="${x + 24}" y="${y + 24}" fill="${TEXTO}" font-size="13">${esc(texto)}</text>`);
    x += 24 + texto.length * 7 + 28;
  }
  return out;
}

const D = {};

/* SEO: de tu web a Google y a las respuestas de IA. */
D['seo-a-ia'] = svg('seo-a-ia', {
  w: 400, h: 456,
  titulo: 'De tu web a Google y a la respuesta de la IA',
  desc: 'Tu web es rastreada por los índices de búsqueda; de esos índices salen tanto los resultados de Google como las respuestas de asistentes de IA, y ambos llevan al cliente hasta tu negocio.',
  cuerpo: [
    linea('M200 80 V126'),
    etiqueta(212, 108, 'RASTREAN'),
    linea('M160 192 V216 Q160 224 152 224 H108 Q100 224 100 232 V254'),
    linea('M240 192 V216 Q240 224 248 224 H292 Q300 224 300 232 V254'),
    linea('M100 328 V352 Q100 360 108 360 H152 Q160 360 160 368 V382'),
    linea('M300 328 V352 Q300 360 292 360 H248 Q240 360 240 368 V382'),
    caja({ x: 100, y: 16, w: 200, h: 64, nombre: 'Tu web', sub: 'páginas claras y verificables' }),
    caja({ x: 100, y: 128, w: 200, h: 64, nombre: 'Índices de búsqueda', sub: 'Google, Bing y otros', kind: 'dato' }),
    caja({ x: 16, y: 256, w: 168, h: 72, nombre: 'Resultados de Google', sub: 'enlaces y mapa' }),
    caja({ x: 216, y: 256, w: 168, h: 72, nombre: 'Respuestas de IA', sub: 'ChatGPT, Gemini y otros', kind: 'foco' }),
    caja({ x: 100, y: 384, w: 200, h: 56, nombre: 'Tu cliente', sub: 'te llama o te escribe' }),
  ],
});

/* SEO local: los tres factores del mapa. */
D['seo-local-factores'] = svg('seo-local-factores', {
  w: 400, h: 432,
  titulo: 'Los tres factores que ordenan Google Maps',
  desc: 'Google ordena el mapa por relevancia, distancia y prominencia; quien reúne las tres entra entre los tres primeros. La distancia no se controla; la relevancia y la prominencia se trabajan.',
  cuerpo: [
    `<circle cx="140" cy="140" r="108" fill="${TINTA}" fill-opacity="0.04" stroke="${TINTA}" stroke-width="1.5"/>`,
    `<circle cx="260" cy="140" r="108" fill="${TINTA}" fill-opacity="0.04" stroke="${SUAVE}" stroke-width="1.5" stroke-dasharray="5 4"/>`,
    `<circle cx="200" cy="244" r="108" fill="${TINTA}" fill-opacity="0.04" stroke="${TINTA}" stroke-width="1.5"/>`,
    `<text x="88" y="84" fill="${TINTA}" font-size="16" font-weight="700" text-anchor="middle">Relevancia</text>`,
    `<text x="88" y="103" fill="${TEXTO}" font-size="13" text-anchor="middle">categoría y servicios</text>`,
    `<text x="312" y="84" fill="${TINTA}" font-size="16" font-weight="700" text-anchor="middle">Distancia</text>`,
    `<text x="312" y="103" fill="${TEXTO}" font-size="13" text-anchor="middle">quién busca y dónde</text>`,
    `<text x="200" y="304" fill="${TINTA}" font-size="16" font-weight="700" text-anchor="middle">Prominencia</text>`,
    `<text x="200" y="323" fill="${TEXTO}" font-size="13" text-anchor="middle">reseñas y menciones</text>`,
    `<rect x="148" y="160" width="104" height="30" rx="15" fill="${TINTA}"/>`,
    `<text x="200" y="180" fill="#fff" font-size="13" font-weight="700" text-anchor="middle">Top 3 del mapa</text>`,
    ...leyenda(372, [{ kind: 'paso', texto: 'se trabaja' }, { kind: 'opcional', texto: 'no se controla' }]),
  ],
});

/* IA para empresas: cómo se conecta. */
D['ia-conectada'] = svg('ia-conectada', {
  w: 400, h: 472,
  titulo: 'Cómo se conecta una IA privada a tu empresa',
  desc: 'Tu equipo consulta desde WhatsApp, Slack o Teams y correo; el asistente responde con tus documentos y cita la fuente, y cuando debe actuar en tu CRM o ERP una persona aprueba antes.',
  cuerpo: [
    linea('M64 64 V88 Q64 96 72 96 H142 Q150 96 150 104 V126'),
    linea('M200 64 V126'),
    linea('M336 64 V88 Q336 96 328 96 H258 Q250 96 250 104 V126'),
    linea('M150 192 V216 Q150 224 142 224 H96 Q88 224 88 232 V254'),
    etiqueta(138, 246, 'CONSULTA', 'end'),
    linea('M250 192 V216 Q250 224 258 224 H304 Q312 224 312 232 V254'),
    etiqueta(262, 246, 'PROPONE'),
    linea('M312 320 V366'),
    etiqueta(324, 348, 'EJECUTA'),
    caja({ x: 8, y: 16, w: 112, h: 48, nombre: 'WhatsApp' }),
    caja({ x: 144, y: 16, w: 112, h: 48, nombre: 'Slack o Teams' }),
    caja({ x: 280, y: 16, w: 112, h: 48, nombre: 'Correo' }),
    caja({ x: 100, y: 128, w: 200, h: 64, nombre: 'Asistente de IA', sub: 'responde y cita la fuente', kind: 'foco' }),
    caja({ x: 16, y: 256, w: 144, h: 64, nombre: 'Tus documentos', sub: 'manuales y políticas', kind: 'dato' }),
    caja({ x: 240, y: 256, w: 144, h: 64, nombre: 'Una persona', sub: 'aprueba lo sensible', kind: 'opcional' }),
    caja({ x: 240, y: 368, w: 144, h: 64, nombre: 'Tus sistemas', sub: 'CRM, ERP, agenda' }),
    ...leyenda(440, [{ kind: 'dato', texto: 'solo lectura' }, { kind: 'opcional', texto: 'control humano' }]),
  ],
});

/* Agente de ventas: qué pasa con cada mensaje. */
D['agente-ventas-flujo'] = svg('agente-ventas-flujo', {
  w: 400, h: 480,
  titulo: 'Qué hace el agente con cada mensaje',
  desc: 'El cliente escribe por WhatsApp o Instagram y el agente responde con tu información aprobada; si el precio o el caso están aprobados cotiza y agenda, si no pasa la conversación a una persona, y todo queda registrado en WazaCRM.',
  cuerpo: [
    linea('M200 64 V94'),
    linea('M200 152 V182'),
    linea('M104 220 H96 Q88 220 88 228 V286'),
    etiqueta(78, 262, 'SÍ', 'end'),
    linea('M296 220 H304 Q312 220 312 228 V286'),
    etiqueta(322, 262, 'NO'),
    linea('M88 352 V376 Q88 384 96 384 H152 Q160 384 160 392 V406'),
    linea('M312 352 V376 Q312 384 304 384 H248 Q240 384 240 392 V406'),
    caja({ x: 100, y: 16, w: 200, h: 48, nombre: 'Cliente escribe', sub: '' }),
    caja({ x: 100, y: 96, w: 200, h: 56, nombre: 'El agente responde', sub: 'con tu información aprobada', kind: 'foco' }),
    `<polygon points="200,184 296,220 200,256 104,220" fill="#fff" stroke="${TINTA}" stroke-width="1.5"/>`,
    `<text x="200" y="216" fill="${TINTA}" font-size="13" font-weight="700" text-anchor="middle">¿Precio o caso</text>`,
    `<text x="200" y="233" fill="${TINTA}" font-size="13" font-weight="700" text-anchor="middle">aprobado?</text>`,
    caja({ x: 16, y: 288, w: 144, h: 64, nombre: 'Cotiza y agenda', sub: 'con tus precios' }),
    caja({ x: 240, y: 288, w: 144, h: 64, nombre: 'Pasa a tu equipo', sub: 'con todo el contexto' }),
    caja({ x: 100, y: 408, w: 200, h: 56, nombre: 'Queda en WazaCRM', sub: 'datos, etapa y seguimiento', kind: 'dato' }),
  ],
});

/* Landing page: el embudo de una campaña. */
function tramo(y, arriba, abajo, nombre, sub, foco = false) {
  const h = 64, a = (400 - arriba) / 2, b = (400 - abajo) / 2;
  const fill = foco ? TINTA : '#fff', c1 = foco ? '#fff' : TINTA, c2 = foco ? '#d4d4d4' : TEXTO;
  return [
    `<polygon points="${a},${y} ${400 - a},${y} ${400 - b},${y + h} ${b},${y + h}" fill="${fill}" stroke="${TINTA}" stroke-width="1.5" stroke-linejoin="round"/>`,
    `<text x="200" y="${y + 29}" fill="${c1}" font-size="16" font-weight="700" text-anchor="middle">${esc(nombre)}</text>`,
    `<text x="200" y="${y + 48}" fill="${c2}" font-size="13" text-anchor="middle">${esc(sub)}</text>`,
  ];
}
D['landing-embudo'] = svg('landing-embudo', {
  w: 400, h: 312,
  titulo: 'El recorrido de una campaña con landing page',
  desc: 'Embudo de cuatro pasos: el anuncio atrae a la persona, la landing repite la oferta con un solo botón, WhatsApp o el formulario recibe el mensaje ya escrito y tu equipo cierra la venta.',
  cuerpo: [
    ...tramo(16, 384, 320, 'Anuncio', 'Google o Meta, una sola oferta'),
    ...tramo(88, 320, 256, 'Landing page', 'la misma promesa y un botón', true),
    ...tramo(160, 256, 192, 'WhatsApp', 'con el mensaje ya escrito'),
    ...tramo(232, 192, 128, 'Venta', 'tu equipo cierra'),
  ],
});

/* Hosting: dónde vive tu sitio. */
D['hosting-capas'] = svg('hosting-capas', {
  w: 400, h: 432,
  titulo: 'Dónde vive tu sitio web',
  desc: 'El visitante escribe tu dominio, registrado a tu nombre, que apunta al servidor donde vive el sitio con su certificado SSL; el respaldo fuera del servidor y el monitoreo de caídas van con el plan de mantenimiento.',
  cuerpo: [
    linea('M200 64 V94'),
    linea('M200 152 V182'),
    etiqueta(212, 172, 'DNS'),
    linea('M160 248 V272 Q160 280 152 280 H108 Q100 280 100 288 V310', { punteada: true }),
    etiqueta(92, 302, 'COPIA', 'end'),
    linea('M240 248 V272 Q240 280 248 280 H292 Q300 280 300 288 V310', { punteada: true }),
    etiqueta(308, 302, 'VIGILA'),
    caja({ x: 100, y: 16, w: 200, h: 48, nombre: 'Visitante', sub: '' }),
    caja({ x: 100, y: 96, w: 200, h: 56, nombre: 'Tu dominio', sub: 'registrado a tu nombre' }),
    caja({ x: 100, y: 184, w: 200, h: 64, nombre: 'Servidor', sub: 'con certificado SSL', kind: 'foco' }),
    caja({ x: 16, y: 312, w: 168, h: 64, nombre: 'Respaldo diario', sub: 'fuera del servidor', kind: 'opcional' }),
    caja({ x: 216, y: 312, w: 168, h: 64, nombre: 'Monitoreo', sub: 'avisa si se cae', kind: 'opcional' }),
    ...leyenda(396, [{ kind: 'opcional', texto: 'va con el plan de mantenimiento' }]),
  ],
});

mkdirSync(OUT, { recursive: true });
for (const [nombre, contenido] of Object.entries(D)) {
  writeFileSync(new URL(`${nombre}.svg`, OUT), contenido);
  console.log(`src/diagramas/${nombre}.svg`);
}
