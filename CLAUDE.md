# elementoweb — web de la agencia (Astro)

Sitio de **Elemento Web** en `elementoweb.com`. Astro 5 estático, Tailwind 4,
servido por nginx dentro de un contenedor en Netcup (Coolify).

## Lo que hay que saber antes de tocar nada

**Un push a `main` despliega a producción.** `.github/workflows/deploy.yml` entra
por SSH al servidor y reconstruye; el job se pone rojo si el build falla o si la
web no responde 200 en un minuto. Seguirlo con `gh run watch <id> --exit-status`.
No hay staging: lo que se pushea, se publica.

**El build tiene que pasar.** `npm run build` local antes de pushear; si Astro
falla, el deploy se cae y la web se queda en la versión anterior.

## Dónde va cada cosa

| Carpeta | Para qué | URL |
|---|---|---|
| `src/pages/` | Las páginas reales del sitio (entran al sitemap) | `/lo-que-sea/` |
| `public/demo/<cliente>/` | **Vista previa de la web de un cliente**, HTML suelto con sus imágenes | `/demo/<cliente>/` |
| `public/propuestas/<cliente-tema>/` | Propuestas, informes y manuales para un cliente | `/propuestas/...` |
| `public/presentaciones/<x>/` | Presentaciones | `/presentaciones/<x>/` |

`robots.txt` bloquea `/demo/`, `/propuestas/` y `/presentaciones/`: son documentos
de cliente, no se indexan. Al crear uno nuevo, añadirle además
`<meta name="robots" content="noindex, nofollow">`.

**Las imágenes de un demo van dentro de su propia carpeta**, no enlazadas a un CDN
ajeno — los hotlinks a Unsplash ya se rompieron una vez en la cara de un cliente.
Si son fotos de stock, dejar licencia y autoría en un `CREDITOS.json` al lado.

**Ojo con Astro dev:** los archivos de `public/` no resuelven el índice de
directorio en local (`/demo/x/` da 404, hay que pedir `/demo/x/index.html`). En
producción nginx sí lo resuelve, así que la URL limpia funciona una vez desplegada.
No es un bug del demo.

## Comandos

```bash
npm run dev      # localhost:4600
npm run build    # obligatorio antes de pushear
```

## Formulario de contacto

Hace POST a un flujo n8n que corre en **Hetzner**, no en Netcup
(`src/lib/site.ts` → `contactForm.endpoint`). El envío sale por la API de Brevo
porque el servidor bloquea SMTP. Apagar Hetzner mata el formulario.

## Skill routing

When the user's request matches an available skill, invoke it via the Skill tool.
When in doubt, invoke the skill.

Key routing rules:
- Product ideas/brainstorming → invoke /office-hours
- Strategy/scope → invoke /plan-ceo-review
- Architecture → invoke /plan-eng-review
- Design system/plan review → invoke /design-consultation or /plan-design-review
- Full review pipeline → invoke /autoplan
- Bugs/errors → invoke /investigate
- QA/testing site behavior → invoke /qa or /qa-only
- Code review/diff check → invoke /review
- Visual polish → invoke /design-review
- Ship/deploy/PR → invoke /ship or /land-and-deploy
- Save progress → invoke /context-save
- Resume context → invoke /context-restore
- Author a backlog-ready spec/issue → invoke /spec
