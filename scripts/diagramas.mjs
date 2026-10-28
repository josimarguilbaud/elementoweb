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

/* Flecha vertical recta entre el borde inferior de una caja (y1) y el superior de la siguiente (y2). */
const abajo = (x, y1, y2, op) => linea(`M${x} ${y1} V${y2 - 2}`, op);

/* Diseño web (pilar): todo termina en tu web. */
D['web-centro'] = svg('web-centro', {
  w: 400, h: 408,
  titulo: 'Tu web en el centro de cómo te encuentran',
  desc: 'Google, Google Maps, los asistentes de IA y los anuncios llevan al cliente a tu web, que tiene una página por servicio; desde ahí escribe por WhatsApp o llena el formulario y tu equipo responde y cierra.',
  cuerpo: [
    linea('M50 72 V96 Q50 104 58 104 H132 Q140 104 140 112 V134'),
    linea('M150 72 V96 Q150 104 158 104 H172 Q180 104 180 112 V134'),
    linea('M250 72 V96 Q250 104 242 104 H228 Q220 104 220 112 V134'),
    linea('M350 72 V96 Q350 104 342 104 H268 Q260 104 260 112 V134'),
    linea('M160 200 V216 Q160 224 152 224 H108 Q100 224 100 232 V246'),
    linea('M240 200 V216 Q240 224 248 224 H292 Q300 224 300 232 V246'),
    linea('M100 296 V312 Q100 320 108 320 H152 Q160 320 160 328 V334'),
    linea('M300 296 V312 Q300 320 292 320 H248 Q240 320 240 328 V334'),
    caja({ x: 6, y: 16, w: 88, h: 56, nombre: 'Google', sub: 'búsqueda' }),
    caja({ x: 106, y: 16, w: 88, h: 56, nombre: 'Maps', sub: 'tu ficha' }),
    caja({ x: 206, y: 16, w: 88, h: 56, nombre: 'IA', sub: 'asistentes' }),
    caja({ x: 306, y: 16, w: 88, h: 56, nombre: 'Anuncios', sub: 'pauta' }),
    caja({ x: 100, y: 136, w: 200, h: 64, nombre: 'Tu web', sub: 'una página por servicio', kind: 'foco' }),
    caja({ x: 16, y: 248, w: 168, h: 48, nombre: 'WhatsApp' }),
    caja({ x: 216, y: 248, w: 168, h: 48, nombre: 'Formulario' }),
    caja({ x: 100, y: 336, w: 200, h: 56, nombre: 'Tu equipo', sub: 'responde y cierra', kind: 'dato' }),
  ],
});

/* Web corporativa: mapa del sitio, una página por servicio. */
D['corporativo-mapa'] = svg('corporativo-mapa', {
  w: 400, h: 400,
  titulo: 'Mapa de un sitio corporativo',
  desc: 'Un sitio corporativo de hasta seis páginas: desde el inicio salen tres páginas de servicio, cada una para su propia búsqueda en Google, y las páginas de apoyo Nosotros y Contacto.',
  cuerpo: [
    `<path d="M128 170 H148 M148 42 V298" fill="none" stroke="${SUAVE}" stroke-width="1.5"/>`,
    ...[42, 106, 170, 234, 298].map((cy) => linea(`M148 ${cy} H174`)),
    caja({ x: 16, y: 142, w: 112, h: 56, nombre: 'Inicio', kind: 'foco' }),
    caja({ x: 176, y: 16, w: 208, h: 52, nombre: 'Servicio 1', sub: 'su propia búsqueda' }),
    caja({ x: 176, y: 80, w: 208, h: 52, nombre: 'Servicio 2', sub: 'su propia búsqueda' }),
    caja({ x: 176, y: 144, w: 208, h: 52, nombre: 'Servicio 3', sub: 'su propia búsqueda' }),
    caja({ x: 176, y: 208, w: 208, h: 52, nombre: 'Nosotros', sub: 'quién está detrás', kind: 'dato' }),
    caja({ x: 176, y: 272, w: 208, h: 52, nombre: 'Contacto', sub: 'WhatsApp y formulario', kind: 'dato' }),
    ...leyenda(344, [{ kind: 'paso', texto: 'página que posiciona' }, { kind: 'dato', texto: 'página de apoyo' }]),
  ],
});

/* Tienda online: el camino de una compra. */
D['tienda-compra'] = svg('tienda-compra', {
  w: 400, h: 424,
  titulo: 'El camino de una compra en tu tienda online',
  desc: 'El cliente llega desde una búsqueda o un anuncio a la ficha del producto, lo agrega al carrito, paga con Yappy o tarjeta y recibe la confirmación del pedido por correo y WhatsApp.',
  cuerpo: [
    abajo(200, 64, 96), abajo(200, 152, 184), abajo(200, 232, 264), abajo(200, 320, 352),
    caja({ x: 100, y: 16, w: 200, h: 48, nombre: 'Búsqueda o anuncio' }),
    caja({ x: 100, y: 96, w: 200, h: 56, nombre: 'Ficha de producto', sub: 'fotos, precio y envío' }),
    caja({ x: 100, y: 184, w: 200, h: 48, nombre: 'Carrito' }),
    caja({ x: 100, y: 264, w: 200, h: 56, nombre: 'Pago', sub: 'Yappy o tarjeta', kind: 'foco' }),
    caja({ x: 100, y: 352, w: 200, h: 56, nombre: 'Pedido confirmado', sub: 'aviso por correo y WhatsApp', kind: 'dato' }),
  ],
});

/* Rediseño: el mapa de redirecciones 301. */
D['rediseno-301'] = svg('rediseno-301', {
  w: 400, h: 328,
  titulo: 'Un rediseño con mapa de redirecciones',
  desc: 'Cada dirección vieja del sitio apunta con una redirección 301 a su dirección nueva, o a la página más parecida si la vieja desaparece; así Google conserva el posicionamiento ganado.',
  cuerpo: [
    `<text x="90" y="24" fill="${SUAVE}" font-size="11" font-weight="500" letter-spacing="0.08em" text-anchor="middle">DIRECCIÓN VIEJA</text>`,
    `<text x="310" y="24" fill="${SUAVE}" font-size="11" font-weight="500" letter-spacing="0.08em" text-anchor="middle">DIRECCIÓN NUEVA</text>`,
    ...[64, 132, 200].flatMap((y) => [linea(`M168 ${y} H230`), etiqueta(199, y - 12, '301', 'middle')]),
    caja({ x: 12, y: 36, w: 156, h: 56, nombre: 'Servicios', sub: '/servicios.html' }),
    caja({ x: 232, y: 36, w: 156, h: 56, nombre: 'Servicios', sub: '/diseno-web/' }),
    caja({ x: 12, y: 104, w: 156, h: 56, nombre: 'Contacto', sub: '/contacto.php' }),
    caja({ x: 232, y: 104, w: 156, h: 56, nombre: 'Contacto', sub: '/contacto/' }),
    caja({ x: 12, y: 172, w: 156, h: 56, nombre: 'Promoción vieja', sub: '/promo-2019' }),
    caja({ x: 232, y: 172, w: 156, h: 56, nombre: 'Lo más parecido', sub: 'la que la reemplaza', kind: 'dato' }),
    `<line x1="12" y1="248" x2="388" y2="248" stroke="${REGLA}" stroke-width="1"/>`,
    caja({ x: 12, y: 260, w: 376, h: 52, nombre: 'Google conserva tu posición', kind: 'foco' }),
  ],
});

/* WordPress: las capas que hay que mantener. */
D['wordpress-capas'] = svg('wordpress-capas', {
  w: 400, h: 344,
  titulo: 'Las capas de un sitio en WordPress',
  desc: 'Un sitio en WordPress tiene cinco capas: tu contenido, el tema, los plugins, el núcleo de WordPress y el hosting; los plugins son la capa que más se actualiza.',
  cuerpo: [
    caja({ x: 16, y: 16, w: 280, h: 56, nombre: 'Tu contenido', sub: 'páginas, blog y fotos' }),
    caja({ x: 16, y: 80, w: 280, h: 56, nombre: 'Tema', sub: 'el diseño' }),
    caja({ x: 16, y: 144, w: 280, h: 56, nombre: 'Plugins', sub: 'formularios, SEO, caché', kind: 'foco' }),
    caja({ x: 16, y: 208, w: 280, h: 56, nombre: 'WordPress', sub: 'el núcleo' }),
    caja({ x: 16, y: 272, w: 280, h: 56, nombre: 'Hosting', sub: 'servidor y base de datos', kind: 'dato' }),
    `<line x1="296" y1="172" x2="308" y2="172" stroke="${TINTA}" stroke-width="1.5"/>`,
    `<text x="314" y="167" fill="${TINTA}" font-size="13" font-weight="700">lo que más</text>`,
    `<text x="314" y="184" fill="${TINTA}" font-size="13" font-weight="700">se actualiza</text>`,
  ],
});

/* Shopify: qué pone la plataforma y qué ponemos nosotros. */
D['shopify-reparto'] = svg('shopify-reparto', {
  w: 400, h: 280,
  titulo: 'Qué resuelve Shopify y qué hacemos nosotros',
  desc: 'Shopify resuelve el servidor y la seguridad, el carrito y el cobro y el panel de pedidos; nosotros hacemos el diseño de la tienda, las fichas que posicionan en Google y la configuración de pagos y envíos para Panamá.',
  cuerpo: [
    caja({ x: 12, y: 16, w: 180, h: 48, nombre: 'Lo resuelve Shopify', kind: 'dato' }),
    caja({ x: 208, y: 16, w: 180, h: 48, nombre: 'Lo hacemos nosotros', kind: 'foco' }),
    caja({ x: 12, y: 80, w: 180, h: 56, nombre: 'Servidor', sub: 'y seguridad', kind: 'dato' }),
    caja({ x: 12, y: 144, w: 180, h: 56, nombre: 'Checkout', sub: 'carrito y cobro', kind: 'dato' }),
    caja({ x: 12, y: 208, w: 180, h: 56, nombre: 'Panel', sub: 'de pedidos', kind: 'dato' }),
    caja({ x: 208, y: 80, w: 180, h: 56, nombre: 'Diseño', sub: 'de tu tienda' }),
    caja({ x: 208, y: 144, w: 180, h: 56, nombre: 'Fichas', sub: 'que posicionan en Google' }),
    caja({ x: 208, y: 208, w: 180, h: 56, nombre: 'Pagos y envíos', sub: 'configurados para Panamá' }),
  ],
});

/* Desarrollo a medida: cómo se separan las piezas. */
D['a-medida-arquitectura'] = svg('a-medida-arquitectura', {
  w: 400, h: 344,
  titulo: 'Cómo se arma una aplicación a medida',
  desc: 'Tus usuarios entran a una interfaz hecha en Vue o React, que habla con una API donde viven las reglas de tu negocio; la API guarda en la base de datos y se conecta con pagos, CRM y WhatsApp.',
  cuerpo: [
    abajo(112, 72, 104), abajo(112, 160, 192), abajo(112, 248, 280),
    linea('M208 220 H238'),
    caja({ x: 16, y: 16, w: 192, h: 56, nombre: 'Tus usuarios', sub: 'navegador o celular' }),
    caja({ x: 16, y: 104, w: 192, h: 56, nombre: 'Interfaz', sub: 'en Vue o React', kind: 'foco' }),
    caja({ x: 16, y: 192, w: 192, h: 56, nombre: 'API', sub: 'las reglas de tu negocio' }),
    caja({ x: 16, y: 280, w: 192, h: 48, nombre: 'Base de datos', kind: 'dato' }),
    caja({ x: 240, y: 188, w: 148, h: 64, nombre: 'Integraciones', sub: 'pagos, CRM, WhatsApp', kind: 'opcional' }),
  ],
});

/* Videos publicitarios con IA: del brief a los 4 videos. */
D['video-ia-proceso'] = svg('video-ia-proceso', {
  w: 400, h: 440,
  titulo: 'Cómo hacemos tus videos publicitarios con IA',
  desc: 'Nos cuentas tu oferta, te enviamos cuatro guiones que apruebas, producimos con IA las escenas, la voz y los subtítulos, revisamos cada video a mano y entregamos cuatro videos verticales de 15 a 30 segundos.',
  cuerpo: [
    abajo(200, 72, 104), abajo(200, 160, 192), abajo(200, 248, 280), abajo(200, 336, 368),
    caja({ x: 100, y: 16, w: 200, h: 56, nombre: 'Tu oferta', sub: 'qué vendes y dónde pautas' }),
    caja({ x: 100, y: 104, w: 200, h: 56, nombre: '4 guiones', sub: 'los apruebas tú' }),
    caja({ x: 100, y: 192, w: 200, h: 56, nombre: 'Producción con IA', sub: 'escenas, voz y subtítulos', kind: 'foco' }),
    caja({ x: 100, y: 280, w: 200, h: 56, nombre: 'Revisión humana', sub: 'cada video, a mano' }),
    caja({ x: 100, y: 368, w: 200, h: 56, nombre: '4 videos verticales', sub: '15 a 30 segundos', kind: 'dato' }),
  ],
});

/* Video inmobiliario: de los renders a los dos formatos. */
D['video-inmobiliario-flujo'] = svg('video-inmobiliario-flujo', {
  w: 400, h: 456,
  titulo: 'De tus renders a un recorrido en video',
  desc: 'Nos mandas un render por ambiente, te proponemos el recorrido, animamos el movimiento de cámara con IA sin rodaje, revisamos cada toma contra el render y entregamos el video en horizontal 16:9 y en vertical 9:16.',
  cuerpo: [
    abajo(200, 72, 104), abajo(200, 160, 192), abajo(200, 248, 280),
    linea('M160 336 V352 Q160 360 152 360 H108 Q100 360 100 368 V382'),
    linea('M240 336 V352 Q240 360 248 360 H292 Q300 360 300 368 V382'),
    caja({ x: 100, y: 16, w: 200, h: 56, nombre: 'Tus renders', sub: 'uno por ambiente' }),
    caja({ x: 100, y: 104, w: 200, h: 56, nombre: 'Recorrido propuesto', sub: 'lo apruebas tú' }),
    caja({ x: 100, y: 192, w: 200, h: 56, nombre: 'Movimiento de cámara', sub: 'con IA, sin rodaje', kind: 'foco' }),
    caja({ x: 100, y: 280, w: 200, h: 56, nombre: 'Revisión toma a toma', sub: 'igual al render' }),
    caja({ x: 16, y: 384, w: 168, h: 56, nombre: 'Horizontal 16:9', sub: 'web y YouTube', kind: 'dato' }),
    caja({ x: 216, y: 384, w: 168, h: 56, nombre: 'Vertical 9:16', sub: 'Reels e historias', kind: 'dato' }),
  ],
});

/* CyberSource: el camino de un pago con tarjeta. */
D['cybersource-pago'] = svg('cybersource-pago', {
  w: 400, h: 480,
  titulo: 'Cómo se cobra con tarjeta usando CyberSource',
  desc: 'El cliente paga en el formulario seguro Unified Checkout de CyberSource, su banco lo autentica con 3-D Secure 2, el pago se aprueba y un webhook avisa a tu servidor para confirmar la orden aunque el cliente cierre la pestaña; la tarjeta nunca pasa por tu web.',
  cuerpo: [
    `<rect x="84" y="84" width="232" height="168" rx="10" fill="none" stroke="${SUAVE}" stroke-width="1.5" stroke-dasharray="5 4"/>`,
    abajo(200, 64, 96), abajo(200, 152, 184), abajo(200, 240, 272), abajo(200, 320, 352),
    caja({ x: 100, y: 16, w: 200, h: 48, nombre: 'Tu cliente paga' }),
    caja({ x: 100, y: 96, w: 200, h: 56, nombre: 'Unified Checkout', sub: 'formulario de CyberSource', kind: 'foco' }),
    caja({ x: 100, y: 184, w: 200, h: 56, nombre: '3-D Secure 2', sub: 'el banco confirma al titular' }),
    caja({ x: 100, y: 272, w: 200, h: 48, nombre: 'Pago aprobado' }),
    caja({ x: 100, y: 352, w: 200, h: 56, nombre: 'Webhook a tu servidor', sub: 'la orden se confirma sola', kind: 'dato' }),
    ...leyenda(424, [{ kind: 'opcional', texto: 'la tarjeta no pasa por tu web' }]),
  ],
});

/* NousCRM: de la cotización al cobro, y otra vez. */
D['nouscrm-ciclo'] = svg('nouscrm-ciclo', {
  w: 400, h: 352,
  titulo: 'De la cotización al cobro con NousCRM',
  desc: 'La cotización se hace con tu logo, se convierte en factura con un clic, los abonos actualizan el saldo solos y la lista de cobros pendientes dice quién te debe; después viene la siguiente venta.',
  cuerpo: [
    abajo(276, 72, 104), abajo(276, 160, 192), abajo(276, 248, 280),
    linea('M168 308 H72 Q64 308 64 300 V52 Q64 44 72 44 H166', { punteada: true }),
    etiqueta(76, 182, 'OTRA VENTA'),
    caja({ x: 168, y: 16, w: 216, h: 56, nombre: 'Cotización', sub: 'con tu logo' }),
    caja({ x: 168, y: 104, w: 216, h: 56, nombre: 'Factura', sub: 'con un clic' }),
    caja({ x: 168, y: 192, w: 216, h: 56, nombre: 'Abonos', sub: 'el saldo se calcula solo', kind: 'foco' }),
    caja({ x: 168, y: 280, w: 216, h: 56, nombre: 'Cobros pendientes', sub: 'lista de quién te debe', kind: 'dato' }),
  ],
});

mkdirSync(OUT, { recursive: true });
for (const [nombre, contenido] of Object.entries(D)) {
  writeFileSync(new URL(`${nombre}.svg`, OUT), contenido);
  console.log(`src/diagramas/${nombre}.svg`);
}
