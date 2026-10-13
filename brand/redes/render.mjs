/* Renderiza las piezas de redes a PNG (y a PDF para los carruseles de LinkedIn).
     node brand/redes/render.mjs            # todo
     node brand/redes/render.mjs p02        # solo las piezas cuyo id empieza así
   Usa playwright-core y el Chrome que localiza scripts/chrome.mjs. Salida: brand/redes/exportado/. */
import { chromium } from 'playwright-core';
import { mkdirSync, mkdtempSync, readFileSync, writeFileSync, rmSync, existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';
import { rutaChrome } from '../../scripts/chrome.mjs';
import { piezas } from './piezas.mjs';
import { f, avatar, portadaLinkedIn, portadaFacebook } from './capas.mjs';

const AQUI = dirname(fileURLToPath(import.meta.url));
const OUT = join(AQUI, 'exportado');
const css = readFileSync(join(AQUI, 'base.css'), 'utf8').replace('__FONT__', f('public/fonts/roboto-latin-wght-normal.woff2'));
const filtro = process.argv[2] ?? '';
const tmp = mkdtempSync(join(process.env.REDES_TMP ?? tmpdir(), 'redes-'));

const doc = (cuerpo, extra = '') => `<!doctype html><html lang="es"><head><meta charset="utf-8"><style>${css}${extra}</style></head><body>${cuerpo}</body></html>`;
const chrome = rutaChrome() ?? (existsSync('/opt/pw-browsers/chromium-1194/chrome-linux/chrome') ? '/opt/pw-browsers/chromium-1194/chrome-linux/chrome' : undefined);
const browser = await chromium.launch({ executablePath: chrome });

/* PNG con paleta de 256 colores: son planos de color y pesan una fracción. */
const guardar = async (buf, destino) => {
  mkdirSync(dirname(destino), { recursive: true });
  await sharp(buf).png({ palette: true, quality: 95, effort: 8 }).toFile(destino);
};

async function abrir(html, ancho, alto, escala = 1) {
  const archivo = join(tmp, `p-${Math.random().toString(36).slice(2)}.html`);
  writeFileSync(archivo, html);
  const ctx = await browser.newContext({ viewport: { width: ancho, height: alto }, deviceScaleFactor: escala });
  const page = await ctx.newPage();
  await page.goto('file://' + archivo);
  await page.evaluate(() => document.fonts.ready);
  return { page, ctx };
}

for (const p of piezas) {
  if (!p.id.startsWith(filtro)) continue;
  const total = p.slides.length ? p.slides((n) => ({ n: 0, total: 0 })).length : 0;
  const t = (n) => ({ n, total });
  const html = doc(p.slides(t).join('\n'), p.pdf ? '@page{size:1080px 1350px;margin:0}@media print{body{background:none}}' : '');
  const { page, ctx } = await abrir(html, 1080, 1350);
  const n = await page.locator('.slide').count();
  /* Guardia de desborde: el contenido central no puede invadir la cabecera ni el pie. */
  const choques = await page.evaluate(() =>
    [...document.querySelectorAll('.slide')].flatMap((s, i) => {
      const c = s.querySelector('.center')?.getBoundingClientRect(), top = s.querySelector('.top').getBoundingClientRect(), bot = s.querySelector('.bot').firstElementChild.getBoundingClientRect();
      const malo = s.scrollHeight > s.clientHeight || (c && (c.top < top.bottom + 24 || c.bottom > bot.top - 24));
      return malo ? [`lámina ${i + 1}: contenido ${Math.round(c?.top)}–${Math.round(c?.bottom)}, cabecera hasta ${Math.round(top.bottom)}, logo desde ${Math.round(bot.top)}`] : [];
    }));
  if (choques.length) { console.error(`DESBORDE en ${p.id}:\n  ` + choques.join('\n  ')); process.exitCode = 1; }
  for (let i = 0; i < n; i++) {
    const buf = await page.locator('.slide').nth(i).screenshot();
    await guardar(buf, join(OUT, p.id, `${String(i + 1).padStart(2, '0')}.png`));
  }
  if (p.pdf) await page.pdf({ path: join(OUT, p.id, `${p.id}.pdf`), width: '1080px', height: '1350px', printBackground: true, preferCSSPageSize: true });
  await ctx.close();
  console.log(`${p.id}: ${n} lámina(s)${p.pdf ? ' + PDF' : ''}`);
}

if ('perfil'.startsWith(filtro) || filtro === '') {
  const perfiles = [
    { nombre: 'avatar-1080.png', html: avatar(), w: 1080, h: 1080, s: 1 },
    { nombre: 'portada-linkedin-4200x700.png', html: portadaLinkedIn(), w: 2100, h: 350, s: 2 },
    { nombre: 'portada-facebook-1640x624.png', html: portadaFacebook(), w: 1640, h: 624, s: 1 },
  ];
  for (const pr of perfiles) {
    const { page, ctx } = await abrir(doc(pr.html), pr.w, pr.h, pr.s);
    const buf = await page.locator('.profile').screenshot();
    await guardar(buf, join(OUT, 'perfil', pr.nombre));
    await ctx.close();
    console.log(`perfil/${pr.nombre}`);
  }
}
await browser.close();
rmSync(tmp, { recursive: true, force: true });
