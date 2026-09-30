# Prompt para Claude en Chrome: sacar datos de Search Console y GA4

Copia el bloque de abajo en Claude en Chrome, con la sesión de Google abierta en tu navegador.
Solo lectura: no modifica nada en tus cuentas.

---

Necesito que me ayudes a extraer datos de mis cuentas de Google para mi web https://elementoweb.com. Trabaja SOLO EN LECTURA: no cambies configuraciones, no borres nada, no verifiques ni agregues propiedades, no compartas acceso, no envíes nada a nadie. Si algo pide una acción de escritura, detente y pregúntame.

Cuenta: la que ya está abierta en este Chrome. Si hay varias cuentas, pregúntame cuál usar antes de entrar.

## Parte 1: Google Search Console (propiedad elementoweb.com)
Ve a Search Console > Rendimiento > Resultados de búsqueda. Rango: últimos 16 meses (o el máximo disponible). Si la propiedad no existe o no tengo acceso, dímelo y para.

1. Totales del rango: clics, impresiones, CTR, posición media.
2. Filtrar por página y darme, para cada una de estas URLs, clics, impresiones, CTR y posición media, más las 10 consultas principales con sus mismos números:
   - https://elementoweb.com/
   - https://elementoweb.com/diseno-web-panama/
   - https://elementoweb.com/miami/
   - https://elementoweb.com/miami/diseno-web-en-miami-en-espanol/
   - https://elementoweb.com/miami/diseno-web-doral/
   - https://elementoweb.com/miami/diseno-web-hialeah/
   - https://elementoweb.com/miami/diseno-web-sweetwater/
   - https://elementoweb.com/miami/diseno-web-hialeah-gardens/
   - https://elementoweb.com/miami/diseno-web-miami-lakes/
   - https://elementoweb.com/miami/diseno-web-cutler-bay/
   - https://elementoweb.com/miami/diseno-web-north-miami/
   - https://elementoweb.com/servicios/diseno-web-corporativo-panama/
   - https://elementoweb.com/blog/cuanto-cuesta-diseno-web-panama/
3. Consultas principales del sitio completo (top 30) filtradas por país Panamá, y otra tabla filtrada por Estados Unidos.
4. Comparación de los últimos 3 meses contra los 3 anteriores (clics e impresiones).
5. Informe Indexación de páginas: cuántas páginas indexadas y cuántas no, con los motivos principales.
6. Sitemaps: estado de /sitemap-index.xml (URLs descubiertas y errores).

Si algún filtro no se puede aplicar, dímelo y usa la mejor alternativa, indicándola.

## Parte 2: Google Analytics 4 (solo si existe la propiedad)
1. Dime el ID de medición (formato G-XXXXXXXXXX) del flujo de datos web de elementoweb.com. Si no existe la propiedad, dime "no existe" y NO la crees.
2. Si existe: usuarios, sesiones y eventos clave de los últimos 12 meses, y las 10 páginas de destino con más sesiones desde Búsqueda orgánica.

## Formato de entrega
- Tablas en markdown, con la fecha del rango y los filtros usados en cada una.
- Números exactos, tal como los muestra Google. Si un dato no está disponible, escribe "no disponible", no lo estimes.
- No incluyas datos personales de usuarios.
- Al final, una lista de dudas o cosas que no pudiste sacar.

---

## Cómo usar lo que devuelva
Pégamelo en esta conversación. Con eso:
1. Añado a cada caso de éxito el bloque de resultados, con su periodo y su fuente.
2. Pongo el ID de GA4 y el código de verificación en `src/lib/site.ts` (`analytics`).
3. Decido con datos qué zonas de Miami ampliar y cuáles fusionar (ver `audit/miami-zonas.md`).
