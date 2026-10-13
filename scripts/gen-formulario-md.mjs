/* Genera docs/specs/rediseno-elementoweb/FORMULARIO.md desde src/data/formulario.json (D34).
   Uso:  node scripts/gen-formulario-md.mjs          escribe el archivo
         node scripts/gen-formulario-md.mjs --check  falla si el archivo no coincide con el JSON
   Se puede importar: `generar(datos)` devuelve el texto. */
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const RAIZ = join(dirname(fileURLToPath(import.meta.url)), '..');
const JSON_PATH = join(RAIZ, 'src/data/formulario.json');
const MD_PATH = join(RAIZ, 'docs/specs/rediseno-elementoweb/FORMULARIO.md');

export function generar(d) {
  const filas = d.servicios.map((s) => {
    const campos = s.campos.map((c) => `\`${c.clave}\` (${c.tipo}${c.obligatorio ? ', obligatorio' : ''})`).join(', ');
    return `| \`${s.clave}\` | ${s.etiqueta} | ${s.servicio} | ${s.presupuesto ? 'sí' : 'no'} | ${campos} |`;
  });
  const detalle = d.servicios.map((s) => {
    const lineas = s.campos.map((c) => {
      const op = c.opciones ? ` Opciones: ${c.opciones.join(' · ')}.` : '';
      return `- \`${c.clave}\` — ${c.etiqueta}${c.obligatorio ? ' [obligatorio]' : ''}.${op}`;
    });
    return `### \`${s.clave}\` — ${s.etiqueta}\n\nTítulo del formulario: «${s.titulo}». Botón: «${s.boton}»${s.botonPagina ? `. Botón en la página: «${s.botonPagina}»` : ''}.\n\n${lineas.join('\n')}\n`;
  });
  const paginas = Object.entries(d.paginas).map(([slug, clave]) => {
    const t = d.transitorias?.[slug];
    return `| \`${slug}\` | \`${clave}\`${t ? ` (hoy: \`${t}\`)` : ''} |`;
  });
  return `<!-- GENERADO por scripts/gen-formulario-md.mjs desde src/data/formulario.json. No editar a mano. -->
# Formulario por servicio: fuente normativa

Este archivo describe el contrato del formulario (D10, D32 y D34 de \`DECISIONES.md\`). La fuente única es \`src/data/formulario.json\`; la leen \`ServiceForm\`, el build, este generador y la lista blanca del flujo de n8n.

## Reglas del payload

- Obligatorios: nombre y WhatsApp (8 dígitos o más). El correo es opcional y solo se acepta sin correo cuando el contrato v2 de n8n (D30) esté en producción.
- \`servicio\` conserva la etiqueta de texto; \`servicio_clave\` lleva la clave de la tabla siguiente; una clave desconocida se guarda como \`definir\`.
- \`detalle\` viaja aplanado como \`detalle_<campo>\`, cadenas de hasta ${d.limites.respuesta} caracteres. Cada campo del servicio elegido es opcional salvo los marcados como obligatorios.
- Mensaje: hasta ${d.limites.mensaje} caracteres; cualquier otro campo: hasta ${d.limites.campo}.
- \`payload_version: 2\` identifica este contrato; su ausencia significa v1.

## Las ${d.servicios.length} claves

| Clave | Ficha | Texto en \`servicio\` | Presupuesto | Campos de \`detalle\` |
|---|---|---|---|---|
${filas.join('\n')}

## Preguntas por servicio

${detalle.join('\n')}
## Página a clave

Una página sin clave propia usa \`definir\`. El mapa se pasa a \`PageData.serviceKey\` cuando cada página se migra a la plantilla nueva.

| Página | Clave |
|---|---|
${paginas.join('\n')}
`;
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const texto = generar(JSON.parse(readFileSync(JSON_PATH, 'utf8')));
  if (process.argv.includes('--check')) {
    const actual = existsSync(MD_PATH) ? readFileSync(MD_PATH, 'utf8') : '';
    if (actual.replace(/\r\n/g, '\n') !== texto) {
      console.error('FORMULARIO.md no coincide con src/data/formulario.json. Corre: node scripts/gen-formulario-md.mjs');
      process.exit(1);
    }
    console.log('FORMULARIO.md al día');
  } else {
    writeFileSync(MD_PATH, texto);
    console.log('escrito', MD_PATH);
  }
}
