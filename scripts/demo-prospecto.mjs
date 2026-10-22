#!/usr/bin/env node
// Demos de prospectos: subirlas, listarlas y borrarlas, SIN git.
//
//   node scripts/demo-prospecto.mjs subir <slug> <carpeta>
//   node scripts/demo-prospecto.mjs borrar <slug> [<slug>…]
//   node scripts/demo-prospecto.mjs listar
//
// Por qué no van en public/demo/ como las de los clientes: este repo es
// PÚBLICO y git guarda el historial. Una demo de un negocio que nunca la pidió,
// borrada «del sitio», seguiría en GitHub para siempre, y la página de baja
// promete borrarla (D10 del prospector, revisión de ingeniería del 22-oct-2026).
// Así que viven en un volumen del servidor que nginx sirve en /demo/p/<slug>/.
//
// Puesta en marcha (una sola vez, la hace Josimar en Coolify):
//   1. En la app elementoweb-astro: Storage → montaje de ruta del host
//      /data/elementoweb/demos-prospectos → /srv/demos-prospectos (solo lectura).
//   2. Redesplegar. `listar` debe responder sin error.
//
// La llave y el host salen del entorno, con los valores de la memoria del
// proyecto por defecto. El script nunca imprime la llave.
import { spawnSync } from 'node:child_process';
import { existsSync, readdirSync, readFileSync, statSync } from 'node:fs';
import { homedir } from 'node:os';
import { join, relative } from 'node:path';

export const FRANJA = 'Concepto preparado por Elemento Web.';
const RAIZ_REMOTA = '/data/elementoweb/demos-prospectos';
const WHATSAPP_EW = '50761903007';
const MAX_BYTES = 25 * 1024 * 1024;

/** `<rubro>-<6 aleatorios>`: no expone el nombre del negocio en la URL. */
export function validarSlug(slug) {
  return typeof slug === 'string' && /^[a-z0-9]+(?:-[a-z0-9]+)*-[a-z0-9]{6}$/.test(slug) && slug.length <= 80;
}

function archivos(dir) {
  const out = [];
  for (const e of readdirSync(dir, { withFileTypes: true })) {
    const p = join(dir, e.name);
    if (e.isDirectory()) out.push(...archivos(p));
    else out.push(p);
  }
  return out;
}

/**
 * Lo que una demo tiene que cumplir antes de salir. Las reglas vienen de
 * CLAUDE.md (imágenes dentro de la carpeta, noindex) y del diseño del
 * prospector (franja de concepto, CTA solo al WhatsApp de Elemento Web).
 */
export function auditarCarpeta(dir) {
  const errores = [];
  const index = join(dir, 'index.html');
  if (!existsSync(index)) return ['La carpeta no tiene index.html.'];

  const todos = archivos(dir);
  const peso = todos.reduce((a, f) => a + statSync(f).size, 0);
  if (peso > MAX_BYTES) errores.push(`La demo pesa ${(peso / 1048576).toFixed(1)} MB; el tope es 25 MB.`);

  for (const f of todos.filter((x) => x.endsWith('.html'))) {
    const html = readFileSync(f, 'utf8');
    const nombre = relative(dir, f);
    if (!/<meta[^>]+name=["']robots["'][^>]+noindex/i.test(html)) {
      errores.push(`${nombre}: falta <meta name="robots" content="noindex, nofollow">.`);
    }
    if (!html.includes(FRANJA)) {
      errores.push(`${nombre}: falta la franja «${FRANJA} No es el sitio oficial de …».`);
    }
    for (const m of html.matchAll(/(?:src|srcset|href)=["'](https?:\/\/[^"'\s]+)/gi)) {
      const url = m[1];
      const esImagen = /\.(?:jpe?g|png|webp|gif|svg|avif)(?:\?|$)/i.test(url) || /images\.|img\.|cdn\./i.test(url);
      if (esImagen && !/^https:\/\/elementoweb\.com\//.test(url)) {
        errores.push(`${nombre}: imagen enlazada a un sitio ajeno (hotlink): ${url}. Las imágenes van dentro de la carpeta.`);
      }
    }
    for (const m of html.matchAll(/(tel:[^"'\s>]+|wa\.me\/\d+|api\.whatsapp\.com\/send\?phone=\d+)/gi)) {
      if (!m[1].replace(/\D/g, '').endsWith(WHATSAPP_EW)) {
        errores.push(`${nombre}: teléfono o WhatsApp ${m[1]} que no es el de Elemento Web (6190-3007).`);
      }
    }
  }
  return errores;
}

function destino() {
  return {
    host: process.env.DEMOS_SSH ?? 'root@159.195.234.239',
    llave: process.env.DEMOS_SSH_KEY ?? join(homedir(), '.ssh', 'sanblas_vps_deploy'),
  };
}

function ssh(comando, entrada) {
  const { host, llave } = destino();
  const r = spawnSync('ssh', ['-i', llave, '-o', 'BatchMode=yes', host, comando], {
    input: entrada,
    encoding: entrada ? undefined : 'utf8',
    maxBuffer: 64 * 1024 * 1024,
  });
  if (r.status !== 0) throw new Error(`ssh falló (${r.status}): ${String(r.stderr ?? '').trim()}`);
  return String(r.stdout ?? '');
}

async function verificar(slug, esperado) {
  const res = await fetch(`https://elementoweb.com/demo/p/${slug}/`, { redirect: 'manual' });
  const robots = res.headers.get('x-robots-tag') ?? '';
  if (res.status !== esperado) throw new Error(`La demo respondió ${res.status}, se esperaba ${esperado}.`);
  if (esperado === 200 && !/noindex/.test(robots)) throw new Error('La demo responde sin X-Robots-Tag noindex.');
}

async function main([orden, ...args]) {
  if (orden === 'subir') {
    const [slug, dir] = args;
    if (!validarSlug(slug)) throw new Error('Slug inválido: usa <rubro>-<6 letras o números>, p. ej. clinicas-a1b2c3.');
    if (!dir || !existsSync(dir)) throw new Error('Falta la carpeta de la demo.');
    const errores = auditarCarpeta(dir);
    if (errores.length) throw new Error(`La demo no pasa la auditoría:\n- ${errores.join('\n- ')}`);
    const tar = spawnSync('tar', ['-czf', '-', '-C', dir, '.'], { maxBuffer: 64 * 1024 * 1024 });
    if (tar.status !== 0) throw new Error('No se pudo empaquetar la carpeta.');
    ssh(`set -e; d=${RAIZ_REMOTA}/${slug}; rm -rf "$d.tmp"; mkdir -p "$d.tmp"; tar -xzf - -C "$d.tmp"; rm -rf "$d"; mv "$d.tmp" "$d"`, tar.stdout);
    await verificar(slug, 200);
    console.log(`Publicada: https://elementoweb.com/demo/p/${slug}/  (anota el slug en la ficha de Estudio)`);
  } else if (orden === 'borrar') {
    if (args.length === 0 || !args.every(validarSlug)) throw new Error('Pasa uno o más slugs válidos.');
    ssh(args.map((s) => `rm -rf ${RAIZ_REMOTA}/${s}`).join(' && '));
    for (const s of args) await verificar(s, 404);
    console.log(`Borradas: ${args.join(', ')}. Márcalas como retiradas en Estudio (pnpm prospeccion:demos --marcar).`);
  } else if (orden === 'listar') {
    process.stdout.write(ssh(`mkdir -p ${RAIZ_REMOTA} && ls -1 ${RAIZ_REMOTA}`));
  } else {
    console.log('Uso: node scripts/demo-prospecto.mjs subir <slug> <carpeta> | borrar <slug…> | listar');
    process.exitCode = 2;
  }
}

if (import.meta.url === `file://${process.argv[1]?.replace(/\\/g, '/').replace(/^(?=[A-Za-z]:)/, '/')}`) {
  main(process.argv.slice(2)).catch((e) => {
    console.error(e.message);
    process.exitCode = 1;
  });
}
