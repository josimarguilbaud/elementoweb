# Estrategia de redes de Elemento Web

Borrador para aprobación del dueño · 13 de octubre de 2026 · Plan de arranque: 19 de octubre al 15 de noviembre.
Calendario con los textos: `CALENDARIO-30-DIAS.md`. Piezas diseñadas: `brand/redes/`.

## 1. Punto de partida (lo que hay, sin adornar)

- **Perfiles publicados en la web: ninguno.** El pie de página quitó los botones de redes porque no
  llevaban a ningún lado, y `sameAs` del schema está vacío (`src/lib/schema.ts`). Hay cuentas que ya existen
  y otras que no; falta el inventario (sección 7).
- **Dominio nuevo:** registrado el 29-jul-2026, 0 enlaces externos, posición media 83 y 6 clics en dos
  meses (`TODOS.md`, `audit/gsc-baseline-2026-09.md`). Las redes **no sustituyen** esa autoridad externa
  y no hay que esperar que muevan el posicionamiento. Sirven para otras tres cosas:
  1. **Prueba visible** de que la agencia existe y trabaja (perfiles, proyectos, constancia).
  2. **Un canal de captación propio** mientras el SEO madura (`TODOS.md`: «Salida comercial»).
  3. **Señales de entidad**: los perfiles confirmados entran en `sameAs` y en la ficha de Google Business Profile.
- **Qué ya tenemos para publicar:** precios de partida publicados y confirmados, 11 entradas de portafolio (10 de
  clientes y WazaCRM), 4 casos de éxito (sin cifras todavía), 80 artículos de blog y la regla de la casa: *evidencia, no promesas*.
- **Lo que NO tenemos:** cifras de resultados de clientes, testimonios verificados, permiso para usar
  logos de clientes, fotos del equipo (y el dueño decidió que no habrá caras).

## 2. Objetivo del primer mes

**Aprender y dejar la base montada, no vender.** Sin metas de seguidores: no hay línea base y una cifra
inventada sería lo contrario de la marca. El mes cuenta como logrado si:

1. Los cinco perfiles (Instagram, Facebook, LinkedIn, TikTok y Google Business Profile) están completos y con
   el mismo nombre, teléfono y correo.
2. Las 12 piezas del feed y los textos de LinkedIn, TikTok y Google Business Profile salieron en la fecha prevista.
3. Cada publicación lleva su enlace con UTM y la medición de GA4 ya separa «social» del resto.
4. Hay una línea base real: lo que no se mide se anota «sin medir», como en el comprobante.

Las metas numéricas se fijan el **15 de noviembre**, con un mes de datos propios, y no antes.

## 3. A quién le hablamos y qué decimos

- **Público principal:** dueños y gerentes de pymes en Panamá que están comparando agencias o que piden
  cotización sin saber cuánto debería costar una web. **Secundario:** negocios hispanos en Miami (el sitio ya
  tiene sus páginas).
- **Mensaje único:** *el precio, el plazo y lo que no incluye, a la vista.* Es la versión social de «Muestran
  evidencia, no promesas» (`DESIGN.md`).
- **Por qué funciona como diferenciador sin atacar a nadie:** toda comparación se basa en lo que Elemento Web
  publica (`DESIGN.md`: «nunca en un ataque a terceros»). Nunca se nombra a un competidor.

## 4. El papel de cada red

| Red | Para qué | Formato principal | Cadencia del primer mes | Lo que NO hacer |
|---|---|---|---|---|
| **Instagram** | Escaparate y confianza: precios, proyectos y criterio | Carrusel 4:5 y pieza única | 3 publicaciones por semana (lun, mié, vie) | Reels con caras; stock; hablar de «resultados» |
| **Facebook** | Reflejo de Instagram (sale desde Meta Business Suite); deja la página lista para anunciar con Meta más adelante | Las mismas piezas | Las mismas 3 | Producir contenido aparte |
| **LinkedIn** | Gerentes y dueños: criterio y producto | Carrusel PDF y texto corto | 2 por semana (mar, jue) | Copiar el texto de Instagram tal cual |
| **TikTok** | Prueba de alcance con el menor esfuerzo posible | Fotos (las mismas láminas) y video de pantalla de ≤ 30 s | 2 por semana (mié, sáb) | Bailes, tendencias, caras; música sin licencia comercial |
| **Google Business Profile** | Aparecer en búsquedas locales y en Maps; es la tarea P1 de autoridad de `TODOS.md` | Publicación corta con foto | 1 por semana (vie) | Publicar antes de verificar la ficha |

TikTok es la red con **menor retorno esperado** para un público de pymes y la que más exige constancia. Se
incluye porque el dueño la pidió, con el esfuerzo mínimo y con una puerta de salida (sección 8).

## 5. Pilares de contenido

| Pilar | Qué es | Fuente en el repo | Piezas del primer mes |
|---|---|---|---|
| **Precios y alcance** | Comprobantes con el precio, el plazo y lo que no incluye | `src/data/precios.json`, `src/lib/site.ts` | 3 (P02, P03, P05) |
| **Proyectos reales** | Capturas del portafolio con «qué hicimos» y filas «sin publicar aún» | `src/lib/site.ts` (portafolio), `casos.ts` | 2 (P04 y Panama International Movers) |
| **Criterio y educación** | Cómo elegir, qué revisar, cómo cobrar o vender | Artículos del blog | 4 (P06, Yappy, WhatsApp, velocidad) |
| **Producto** | WazaCRM y lo que construimos nosotros | `src/lib/pages/saas.ts` | 1 |
| **Presentación y conversación** | Quiénes somos y una pregunta a la audiencia | Home y `DESIGN.md` | 2 |

Cada pieza lleva una sola idea, un solo dato destacado y un enlace a la página que lo respalda.

## 6. Voz y reglas de redacción

- **Tú**, frases cortas, español de Panamá. Sin superlativos («los mejores», «líderes»), sin «garantizamos»
  y sin signos de exclamación de relleno.
- **Todo precio lleva «sin ITBMS (7%)»** y la fecha («oct 2026») la primera vez que aparece en una pieza.
- **Solo los precios `confirmados`** de `src/data/precios.json`. Los `propuestos` (gestión de pauta, contenido
  para redes, email, WhatsApp marketing, automatización, logo) **no se publican** en redes hasta que el dueño
  los confirme. De WazaCRM se publica «desde $349/mes»; el plan Growth no está confirmado en `precios.json`.
- **Emojis:** ninguno decorativo. Se permiten los glifos de datos (↓, →, ✓).
- **Hashtags:** 3 a 5, cercanos a las palabras clave de `KEYWORDS.md`: `#DiseñoWebPanamá`,
  `#PáginaWebPanamá`, `#LandingPage`, `#EcommercePanamá`, `#MarketingDigitalPanamá`.
- **Prohibido:**
  - «Meta Verified», «equipo interno» y «100% interno» (`scripts/afirmaciones-bloqueadas.json`, D11) hasta que el
    dueño los confirme por escrito.
  - Cifras de resultados de clientes (consultas, ventas, posiciones) sin autorización escrita, fuente y fecha.
  - Logos de clientes y testimonios sin permiso. **No reutilizar la cita de TramitaPa** de la página del caso
    («las consultas por WhatsApp se multiplicaron»): la misma página dice que todavía no hay cifras publicadas.
  - Caras, «nuestro equipo», fotos de stock y comprar seguidores, «likes» o grupos de intercambio.

## 7. Perfiles: qué hay que dejar en cada uno

### Inventario (completar con las cuentas que ya existen)

| Red | Usuario actual | ¿Existe? | Quién tiene acceso | ¿Verificación en dos pasos? | Qué falta |
|---|---|---|---|---|---|
| Instagram | | | | | |
| Facebook | | | | | |
| LinkedIn | | | | | |
| TikTok | | | | | |
| Google Business Profile | | | | | |

**Regla:** el mismo usuario en todas. Primera opción `@elementoweb`; si alguna no está libre, `@elementoweb.pa`
en todas. No se compra una cuenta ocupada. Nombre visible: «Elemento Web | Diseño web Panamá».

### Textos de perfil (ya contados contra el límite que cada red tenía históricamente; si lo cambió, recortar)

**Instagram** (135 de 150 caracteres)

```
Agencia de diseño web en Panamá
Precios públicos: landing desde $550
Webs, tiendas, SEO, pauta y WhatsApp con IA
↓ Precios y cotización
```

**Facebook, intro** (86 de 101): `Agencia de diseño web en Panamá. Precios públicos, landing desde $550. elementoweb.com`

**LinkedIn, eslogan** (76 de 120): `Diseño web en Panamá con el precio, el plazo y lo que no incluye a la vista.`

**TikTok** (64 de 80): `Diseño web en Panamá · Landing desde $550 · Precios en el link ↓`

**LinkedIn «Acerca de» y descripción de Google Business Profile** (408 de 750):

> Elemento Web es una agencia de diseño web en Ciudad de Panamá, con atención remota desde Miami. Hacemos
> sitios corporativos, tiendas online (Yappy y pasarelas), landing pages, SEO, Google Ads y Meta Ads, WhatsApp
> con IA y automatización. Publicamos los precios de partida, los plazos y lo que no incluye cada servicio en
> elementoweb.com/precios. Escríbenos por WhatsApp: +507 6190-3007 · hola@elementoweb.com

**Datos de contacto (iguales en todas):** Elemento Web · hola@elementoweb.com · +507 6190-3007 · Ciudad de
Panamá. Todavía no hay dirección pública confirmada (`docs/kit-autoridad.md`, sección 5).

### Enlaces con seguimiento

La bio apunta a `/precios/` (es lo que la bio promete) y lleva su UTM:

| Red | Enlace de la bio |
|---|---|
| Instagram | `https://elementoweb.com/precios/?utm_source=instagram&utm_medium=social&utm_campaign=bio` |
| Facebook | `https://elementoweb.com/precios/?utm_source=facebook&utm_medium=social&utm_campaign=bio` |
| LinkedIn | `https://elementoweb.com/precios/?utm_source=linkedin&utm_medium=social&utm_campaign=bio` |
| TikTok | `https://elementoweb.com/precios/?utm_source=tiktok&utm_medium=social&utm_campaign=bio` |
| Google Business Profile | `https://elementoweb.com/precios/?utm_source=google&utm_medium=organic&utm_campaign=gbp-ficha` |

Botón de WhatsApp o «Contactar», con el texto prellenado que dice de dónde viene (basado en `wa()` de `site.ts`):

| Red | Enlace |
|---|---|
| Instagram | `https://wa.me/50761903007?text=Hola%2C%20vi%20su%20perfil%20en%20Instagram%20y%20quiero%20consultar%20por%20una%20web.` |
| Facebook | `https://wa.me/50761903007?text=Hola%2C%20vi%20su%20p%C3%A1gina%20en%20Facebook%20y%20quiero%20consultar%20por%20una%20web.` |
| LinkedIn | `https://wa.me/50761903007?text=Hola%2C%20los%20vi%20en%20LinkedIn%20y%20quiero%20consultar%20por%20una%20web.` |
| TikTok | `https://wa.me/50761903007?text=Hola%2C%20los%20vi%20en%20TikTok%20y%20quiero%20consultar%20por%20una%20web.` |
| Google | `https://wa.me/50761903007?text=Hola%2C%20los%20encontr%C3%A9%20en%20Google%20y%20quiero%20consultar%20por%20una%20web.` |

**Destacados de Instagram** (cuando haya material): Precios · Proyectos · Cómo trabajamos · Contacto.
**Publicación fijada:** P02 (cuánto cuesta) en Instagram y Facebook; P01 en LinkedIn.

### Cuando los cuatro perfiles sean reales

Hay un cambio de código pendiente, y **publicarlo despliega a producción** (un push a `main`), así que
necesita aprobación expresa del dueño:

1. Devolver los enlaces de redes al pie (`src/components/Footer.astro`).
2. Añadir las URL a `sameAs` (`src/lib/schema.ts`), solo las verificadas y con su enlace visible.
3. `npm run build` y `npm run verify` antes del push.

## 8. Medición

**Qué se mide y dónde** (los eventos ya existen en `docs/event-dictionary.md`):

| Indicador | Dónde | Cadencia | Línea base |
|---|---|---|---|
| Sesiones desde cada red | GA4, Adquisición, fuente/medio (`utm_medium=social`) | Semanal | sin medir |
| Visitas a precios desde redes (`pricing_view`) | GA4 | Semanal | sin medir |
| Visitas a casos desde redes (`case_study_view`) | GA4 | Semanal | sin medir |
| Clics a WhatsApp (`click_whatsapp`) | GA4 | Semanal | sin medir |
| Consultas entrantes (`generate_lead`) con fuente social | GA4 | Semanal | sin medir |
| Mensajes directos y de WhatsApp con el texto «vi su perfil en…» | Bandeja y WazaCRM | Semanal | sin medir |
| Guardados y compartidos por publicación | Estadísticas de cada red | Semanal | sin medir |
| Seguidores | Estadísticas de cada red | Mensual | 0 |

**Limitación que hay que conocer:** el formulario envía `servicio` y `origen`, pero **no guarda los UTM** en el
lead, así que el CRM no dirá de qué red vino. La atribución depende de GA4 y del texto prellenado de WhatsApp.
Guardar el UTM en el payload es un cambio pequeño en el formulario y en el flujo de n8n, y queda propuesto como tarea aparte.

**Revisiones:** viernes, 20 minutos (qué se publicó, qué se guardó, qué se respondió). **Domingo 15 de
noviembre**, 60 minutos: tabla del mes, qué pilar y qué red rinden, y fijar las metas del siguiente mes.

**Puerta de salida:** el **lunes 14 de diciembre** (ocho semanas de publicación), toda red que no haya producido al menos una señal
medible (una visita a `/precios/` desde esa red, un mensaje o una consulta) pasa a mantenimiento mínimo o se
pausa, y esas horas se reasignan a las redes que sí la produjeron. Es una regla, no un pronóstico.

## 9. Rutina de trabajo

Estimación a validar en la semana 1: unas 3 horas por semana si las piezas salen de las plantillas.

- **Lunes (45 min):** revisar el calendario, ajustar textos en `brand/redes/piezas.mjs`, renderizar, programar la semana.
- **Cada día (10 min):** responder comentarios y mensajes.
- **Viernes (20 min):** revisión de métricas y notas para la semana siguiente.
- **Programación:** Meta Business Suite para Instagram y Facebook; programación nativa de LinkedIn y TikTok
  (web); Google Business Profile se publica desde la ficha.
- **Mensajes y comentarios:** se responde en el horario que figure en el perfil. No se promete un tiempo de
  respuesta hasta que el dueño defina cuál puede cumplir. Nunca se da un precio distinto del publicado por
  mensaje directo: se manda a `/precios/` o a WhatsApp.

## 10. Antes de publicar cualquier pieza

- [ ] ¿Cada cifra sale de `confirmados` de `precios.json` o de una página publicada?
- [ ] ¿Lleva «sin ITBMS (7%)» si hay precio?
- [ ] ¿Hay una captura de cliente y ya se le avisó?
- [ ] ¿No hay caras, logos de clientes, testimonios ni afirmaciones bloqueadas?
- [ ] ¿El enlace lleva su UTM y abre?
- [ ] ¿Se ve bien en el móvil (texto legible y mensaje dentro de la zona segura)?
- [ ] ¿Una sola idea y una sola cifra destacada?

## 11. Decisiones que son del dueño

1. **Usuarios** de las cuentas que ya existen (para auditarlas y alinearlas) y confirmar `@elementoweb`.
2. **Dirección de Google Business Profile:** pública o como negocio sin local a la vista. La verificación
   depende de esa decisión y de las políticas vigentes de Google, que hay que comprobar al abrir la ficha.
3. **Permiso de los clientes** cuyas capturas se muestran. La primera es San Blas Full (lunes 26 de octubre):
   mensaje antes del jueves 22. Plantillas en `docs/kit-autoridad.md`.
4. **Quién responde** mensajes y comentarios, y en qué horario.
5. **Música de TikTok:** solo la biblioteca de música comercial de la propia app, o sin música.
6. **Aprobar el cambio de pie de página y `sameAs`** cuando los perfiles existan (despliega a producción).

## 12. Fuentes de las medidas de imagen

Guías de terceros, **no de la documentación oficial**; hay discrepancias y conviene probar la subida:
[Buffer](https://buffer.com/resources/instagram-image-size/), [Sked Social](https://skedsocial.com/blog/best-instagram-image-and-video-size-recommendations),
[Moda (LinkedIn)](https://moda.app/resources/sizes/linkedin), [ContentStudio (Facebook)](https://contentstudio.io/blog/facebook-cover-photo-size),
[PostFast (TikTok)](https://postfa.st/sizes/tiktok/carousel). Detalle y recortes en `brand/redes/README.md`.
