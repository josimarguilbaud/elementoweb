# Brief para redactar los artículos del lote nov-2026 (fase C)

Repo: `C:\Users\JosimarG\Projects\elementoweb` (Astro). Los artículos se escriben como datos `PageData` en TypeScript,
uno o varios por archivo `src/lib/pages/blog-NN.ts`, con el mismo formato que `src/lib/pages/blog-42.ts` y
`blog-41.ts` (léelos completos antes de escribir y copia su estilo, tono y tipos de bloque).
Tipos de bloque válidos: `src/lib/types.ts` (líneas 1-45).

## Reglas duras

1. **Idioma:** español de Panamá, trato de «tú», frases cortas y concretas. Nada de relleno ni palabras de IA:
   «crucial», «robusto», «integral», «potenciar», «sinergia», «en el mundo actual», «sin lugar a dudas». Sin guiones largos (—).
2. **Precios de Elemento Web:** solo los de `src/data/precios.json`.
   - Los de `confirmados` pueden ir en cualquier parte.
   - Los de `propuestos` (pauta-gestion 300/mes, contenido-redes 250/mes, email-marketing 200/mes y whatsapp-marketing 150/mes)
     solo pueden ir en bloques `prose` o `cards`, presentados como «referencia publicada desde US$ X al mes; el precio
     final se confirma en la cotización». **Nunca en el bloque `answer` ni en la primera frase del `lead`.**
3. **Cifras de terceros:** solo las que trae este brief, siempre con la fuente nombrada en el texto («según la página de
   precios de Brevo, consultada en noviembre de 2026»). **Prohibido inventar estadísticas, porcentajes o casos.**
   Prohibido prometer posiciones en Google o resultados.
4. **No escribas:** «Meta Verified», «equipo interno», «100% interno». Para WhatsApp se dice «API oficial de Meta».
5. **Enlaces internos:** solo a slugs que existan en `C:\Users\JosimarG\AppData\Local\Temp\slugs-reales.txt` (una ruta
   por línea, sin barra inicial). En el HTML de los párrafos van como `<a href="/slug/">texto</a>` con barra final.
   En `related` y `link` van como `{ slug: 'x/y', label: '…' }`. Cada artículo enlaza a su página de servicio,
   a `precios` cuando hable de precio y a 2 o 3 artículos del blog del mismo tema. Además, entre los 4 de tu lote.
6. **No toques** otros archivos fuera de los que se te asignan (ni `index.ts`, ni `img.ts`, ni páginas viejas).

## Estructura de cada artículo (en este orden)

- `slug: 'blog/<slug>'`, `parent: { slug: 'blog', label: 'Blog' }`, `title` (≤ 62 caracteres, con la consulta objetivo
  al inicio), `description` (140-158 caracteres, responde y da motivo para hacer clic), `h1`, `breadcrumb`, `category`
  (una de: 'Diseño web', 'E-commerce', 'SEO', 'Marketing', 'WhatsApp', 'IA y Automatización', 'Precios', 'Negocio'),
  `date: '2026-11-21'`,
  `heroImage: { src: '/images/hero/blog--<slug>.jpg', alt: '<el alt que te doy abajo>' }`.
- `lead`: 2 párrafos. El primero es la respuesta directa en 2 o 3 frases (que se pueda citar tal cual). El segundo dice qué trae el artículo.
- `blocks` (6 a 9), con H2 escritos como pregunta real del cliente:
  1. `answer`: `{ type: 'answer', text: '…', fecha: '2026-11-21' }`. Es un párrafo citable para la IA (GEO): nombra a
     «Elemento Web, agencia de marketing digital y diseño web en Ciudad de Panamá» solo si viene al caso, y da la
     respuesta con datos concretos (precios confirmados o cifras de terceros con fuente).
  2. Después, entre 4 y 6 bloques de contenido: `cards`, `steps`, `checklist`, `tabla` (`columnas` + `filas`) y `prose`.
     Incluye una sección «¿Cuándo NO conviene…?», con honestidad, como en blog-41.
  3. `faq` con 4 o 5 preguntas reales (genera FAQPage).
  4. `related` con 4 enlaces.
- `cta: { h2: '…', wa: 'Hola, …' }`: h2 corto y propio del tema, y el mensaje de WhatsApp ya escrito por el cliente.
- Extensión: unas 1.300 a 1.800 palabras de texto por artículo.

## El archivo

```ts
/* BLOG — Lote NN: <temas>. Fuentes de terceros: <cuáles>. Precios propuestos presentados como referencia. */
import type { PageData } from '../types';
export const blogNN: PageData[] = [ { … }, { … } ];
```

Al terminar, corre `npx tsc --noEmit -p .` o al menos `node -e "import('./src/lib/pages/blog-NN.ts')"` para comprobar
que no hay errores de sintaxis, y deja un resumen con slugs, títulos y enlaces usados.

## Datos de terceros permitidos (con su fuente)

- **Brevo** (página de precios, nov-2026): plan gratuito de 300 correos al día sin tarjeta; plan Starter desde US$ 9 al
  mes. El límite exacto de Starter cambia según el volumen: decir «según el volumen de envíos».
- **Mailchimp**: no dar cifras; decir que tiene plan gratuito limitado y planes de pago por número de contactos.
- **Yappy** (Banco General): La Prensa publicó que tiene más de 1,8 millones de clientes registrados, según la propia
  empresa. Se puede citar así.
- **PagueloFacil**: pasarela panameña que acepta tarjetas, Clave y otros medios. Las tarifas se consultan con el proveedor
  (no publicar porcentajes).
- **Tilopay**: pasarela que permite cobrar con tarjeta y también con Yappy desde la tienda en línea, según su sitio.
- **CyberSource** (Visa) por medio de bancos panameños como Banco General: cobro con tarjeta dentro de la web.
  Elemento Web lo integra (precios confirmados cybersource-esencial 1050, profesional 2150, avanzado 3850).
- **Otras billeteras** que mencionó La Prensa: Zinli y Kuara. **Tigo Money anunció el cierre de su billetera en Panamá.**
- **Google Ads**: cobra por clic en la mayoría de las campañas de búsqueda; el costo por clic sale de una subasta y
  depende de la competencia de cada palabra; no hay un gasto mínimo obligatorio y tú fijas el presupuesto diario (ayuda
  oficial de Google Ads). No dar cifras de costo por clic.
- **Meta / Instagram**: la cuenta profesional de Instagram es gratis; la pauta se paga aparte. No dar cifras de alcance.
