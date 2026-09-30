// QA de SEO sobre dist/ (ejecutar tras `npm run build`).
//   node scripts/qa-seo.mjs                       → comprobaciones (sale 1 si falla alguna)
//   node scripts/qa-seo.mjs --snapshot out.json   → guarda title/desc/h1/canonical/robots/schema por URL
//   node scripts/qa-seo.mjs --compare base.json   → muestra qué URLs cambiaron respecto al snapshot
import { readdirSync, readFileSync, statSync, writeFileSync, existsSync } from 'node:fs';
import { join, relative } from 'node:path';
import { createHash } from 'node:crypto';

const DIST = 'dist';
const args = process.argv.slice(2);
const opt = (n) => (args.includes(n) ? args[args.indexOf(n) + 1] : null);

const walk = (d) => readdirSync(d).flatMap((n) => { const p = join(d, n); return statSync(p).isDirectory() ? walk(p) : [p]; });
const htmls = walk(DIST).filter((f) => f.endsWith('.html'));
const routeOf = (f) => { let r = '/' + relative(DIST, f).replace(/index\.html$/, '').replace(/\.html$/, ''); return r; };
const get = (h, re) => (h.match(re) || [])[1]?.trim() ?? null;
const sha = (s) => createHash('sha1').update(s).digest('hex').slice(0, 10);


/* Reglas mínimas por tipo de schema (no sustituye al validador de schema.org / Rich Results Test). */
function schemaRules(route, n, bad, routes, ids) {
  const t = n['@type']; const need = (props) => props.forEach((k) => { if (n[k] === undefined || n[k] === '' || (Array.isArray(n[k]) && !n[k].length)) bad(route, `schema ${t}: falta «${k}»`); });
  const refOk = (v, label) => { const id = v?.['@id']; if (id && !ids.has(id)) bad(route, `schema ${t}.${label}: @id sin resolver (${id})`); };
  switch (t) {
    case 'Organization': need(['name', 'url']); break;
    case 'WebSite': need(['url', 'name']); refOk(n.publisher, 'publisher'); break;
    case 'WebPage': case 'AboutPage': case 'ContactPage': case 'CollectionPage': need(['url', 'name', 'isPartOf']); refOk(n.isPartOf, 'isPartOf'); refOk(n.about, 'about'); break;
    case 'ProfessionalService': need(['name', 'url']); break;
    case 'Service': need(['name', 'provider', 'areaServed']); refOk(n.provider, 'provider'); break;
    case 'BlogPosting': case 'Article': need(['headline', 'datePublished', 'author', 'mainEntityOfPage']); refOk(n.author, 'author'); refOk(n.publisher, 'publisher'); if (!n.image) bad(route, `schema ${t}: falta «image»`); break;
    case 'Person': need(['name']); break;
    case 'FAQPage': need(['mainEntity']); (n.mainEntity || []).forEach((q, i) => { if (!q.name || !q.acceptedAnswer?.text) bad(route, `schema FAQPage: pregunta ${i + 1} incompleta`); }); break;
    case 'BreadcrumbList': need(['itemListElement']); (n.itemListElement || []).forEach((it, i) => { if (it.position !== i + 1) bad(route, 'schema BreadcrumbList: posiciones no consecutivas'); const r = it.item && new URL(it.item).pathname; if (r && !routes.has(r)) bad(route, `schema BreadcrumbList: ${r} no existe`); }); break;
    case 'OfferCatalog': need(['itemListElement']); (n.itemListElement || []).forEach((o) => { if (!((o.priceSpecification?.minPrice ?? o.priceSpecification?.price) > 0) || o.priceSpecification?.priceCurrency !== 'USD') bad(route, `schema Offer «${o.name}»: precio o moneda inválidos`); }); break;
    default: break;
  }
  for (const [k, v] of Object.entries(n)) if (typeof v === 'string' && /^https?:\/\/elementoweb\.com\/(?!#)/.test(v) && !/(logo|image)$/i.test(k) && !v.includes('#') && !/\.(png|jpe?g|webp|svg)$/i.test(v)) { const r = new URL(v).pathname; if (!routes.has(r) && !/^\/(fonts|marca|images|logos|portfolio)\//.test(r)) bad(route, `schema ${t}.${k}: URL sin página (${r})`); }
}

const pages = {};
const problems = [];
const bad = (route, msg) => problems.push(`${route}  ${msg}`);
const routes = new Set(htmls.map(routeOf));

const PRIVATE = /^\/(demo|propuestas|presentaciones|hackathon)\//;
for (const f of htmls) {
  const route = routeOf(f);
  if (PRIVATE.test(route) || /^\/google[0-9a-f]+/.test(route)) continue; // documentos de cliente: solo se exige noindex (abajo)
  const h = readFileSync(f, 'utf8');
  const title = get(h, /<title>([^<]*)<\/title>/);
  const description = get(h, /<meta name="description" content="([^"]*)"/);
  const canonical = get(h, /<link rel="canonical" href="([^"]*)"/);
  const robots = get(h, /<meta name="robots" content="([^"]*)"/);
  const h1s = [...h.matchAll(/<h1[\s>][\s\S]*?<\/h1>/g)].map((m) => m[0].replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim());
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map((m) => m[1]);
  pages[route] = { title, description, h1: h1s[0] ?? null, canonical, robots, schema: sha(ld.join('|')) };

  const is404 = route === '/404.html' || route === '/404';
  if (!title) bad(route, 'sin <title>');
  if (!is404) {
    if (!description) bad(route, 'sin meta description');
    if (h1s.length !== 1) bad(route, `H1 count = ${h1s.length}`);
    const want = 'https://elementoweb.com' + (route === '/' ? '/' : route);
    if (canonical !== want) bad(route, `canonical ${canonical} ≠ ${want}`);
    if (/noindex/.test(robots || '')) bad(route, 'noindex en página pública');
  } else if (!/noindex/.test(robots || '')) bad(route, '404 sin noindex');
  if ((h.match(/rel="canonical"/g) || []).length > 1) bad(route, 'canonical duplicado');
  if (/\/blog\/blog\//.test(h)) bad(route, 'contiene /blog/blog/');
  if (!/<html lang="es-PA"/.test(h)) bad(route, 'lang ≠ es-PA');
  // Referencias @id del grafo: cada { '@id': X } debe resolverse dentro de la página
  const graphIds = new Set(); const refs = [];
  for (const j of ld) { try { const d = JSON.parse(j); for (const n of d['@graph'] ?? [d]) { if (n['@id']) graphIds.add(n['@id']); } } catch {} }
  for (const j of ld) {
    let data; try { data = JSON.parse(j); } catch { bad(route, 'JSON-LD no parsea'); continue; }
    const nodes = data['@graph'] ?? [data];
    for (const n of nodes) schemaRules(route, n, bad, routes, graphIds);
    for (const n of nodes) {
      const m = n.mainEntityOfPage?.['@id'] ?? n.mainEntityOfPage;
      if (typeof m === 'string' && m.startsWith('https://elementoweb.com')) {
        const r = new URL(m).pathname; if (!routes.has(r)) bad(route, `mainEntityOfPage sin página: ${r}`);
      }
      if (n['@type'] === 'Organization' && n.logo) {
        const r = new URL(n.logo).pathname; if (!existsSync(join(DIST, r))) bad(route, `logo inexistente: ${r}`);
      }
    }
  }
  for (const m of h.matchAll(/(?:src|srcset)="(\/[^"\s,]+)/g)) {
    const r = m[1].split('?')[0];
    if (/\.(?:jpe?g|png|webp|avif|svg|gif|ico)$/i.test(r) && !existsSync(join(DIST, r))) bad(route, `imagen inexistente: ${r}`);
  }
  for (const m of h.matchAll(/href="(\/[^"#?]*)#([^"]+)"/g)) {
    const target = m[1] || route; const tf = routes.has(target);
    if (tf) {
      const file = join(DIST, target, 'index.html'); const th = existsSync(file) ? readFileSync(file, 'utf8') : '';
      if (th && !new RegExp(`id="${m[2]}"`).test(th)) bad(route, `ancla inexistente: ${target}#${m[2]}`);
    }
  }
}

// carpetas de cliente: todo HTML con noindex
for (const f of htmls) {
  const r = routeOf(f);
  if (/^\/(demo|propuestas|presentaciones|hackathon)\//.test(r) && !/noindex/.test(readFileSync(f, 'utf8'))) bad(r, 'documento de cliente sin noindex');
}
// sitemap: solo URLs que existen
const sm = existsSync(join(DIST, 'sitemap-0.xml')) ? readFileSync(join(DIST, 'sitemap-0.xml'), 'utf8') : '';
for (const m of sm.matchAll(/<loc>https:\/\/elementoweb\.com([^<]*)<\/loc>/g)) if (!routes.has(m[1])) bad('sitemap', `URL sin página: ${m[1]}`);
// titles/descriptions duplicados
for (const k of ['title', 'description']) {
  const seen = {}; for (const [r, p] of Object.entries(pages)) if (p[k]) (seen[p[k]] ||= []).push(r);
  for (const [v, rs] of Object.entries(seen)) if (rs.length > 1 && !rs.every((r) => /^\/(demo|propuestas|presentaciones|hackathon)\//.test(r))) bad(rs[0], `${k} duplicado en ${rs.length} páginas`);
}

const out = opt('--snapshot'); if (out) writeFileSync(out, JSON.stringify(pages, null, 1));
const base = opt('--compare');
if (base) {
  const b = JSON.parse(readFileSync(base, 'utf8')); let changed = 0;
  for (const r of new Set([...Object.keys(b), ...Object.keys(pages)])) {
    if (!b[r]) { console.log(`+ nueva      ${r}`); continue; }
    if (!pages[r]) { console.log(`- ELIMINADA  ${r}`); changed++; continue; }
    const diff = ['title', 'description', 'h1', 'canonical', 'robots', 'schema'].filter((k) => b[r][k] !== pages[r][k]);
    if (diff.length) { changed++; console.log(`~ ${r}  ${diff.join(',')}`); }
  }
  console.log(`\nURLs con cambios respecto al snapshot: ${changed}`);
}
console.log(`\n${htmls.length} HTML revisados · ${problems.length} problemas`);
problems.slice(0, 60).forEach((p) => console.log('  ✗ ' + p));
process.exit(problems.length ? 1 : 0);
