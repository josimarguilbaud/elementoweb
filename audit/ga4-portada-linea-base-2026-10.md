# Línea base de GA4 de la portada, antes de D54 (21-oct-2026)

Leída en modo lectura en GA4 (propiedad elementoweb.com, flujo web `https://elementoweb.com`) desde el Chrome del dueño
el 21-oct-2026. No se cambió ninguna configuración. Para leer se creó una exploración de formato libre sin nombre
(«Formato libre»), que queda en la cuenta y se puede borrar.

Es la línea base que pide el plan D54 (`docs/specs/rediseno-elementoweb/PLAN-MARKETING-VITRINA.md`, bloque de
ingeniería, «Medición endurecida»).

## Estado de la propiedad

- **Dimensiones personalizadas: ninguna.** `location`, `service`, `form` y `fields`, que pide
  `docs/event-dictionary.md`, nunca se registraron.
  - GA4 no aplica una dimensión nueva a datos anteriores, así que hoy no se puede separar `cta_click` por `location`
    en ninguna ventana pasada.
  - Registrar `location` es un cambio de configuración: lo hace el dueño o se le pide permiso.
- **Registradas el 21-oct-2026, con permiso del dueño (tarjeta D18):** `location` y `service`, como dimensiones de
  ámbito evento. Cuentan desde ese día; lo anterior sigue sin poder separarse.
- **Filtro de tráfico interno:** existe («Internal Traffic», excluir), pero está en estado **Prueba**, así que no
  excluye nada.
- **Nombres de host que aparecen:** `elementoweb.com`, `www.elementoweb.com`, `localhost` y `127.0.0.1`.
  - Los dos últimos son las pruebas automáticas y el `astro dev` local.
  - Hay 47 vistas de `/marketing/google-ads-panama/` con referente `http://localhost:4601/…` y vistas de rutas
    `/index.html`, que solo existen en local.
  - Confirma el hallazgo A3 de la re-revisión de ingeniería: hay que bloquear GA4 en QA y filtrar por `hostName`.

## Ventanas

| Ventana | Fechas | Para qué |
|---|---|---|
| A | 17-sep al 14-oct-2026 (28 días) | antes de D51; la que compara la regla de decisión |
| B | 15-oct al 20-oct-2026 (6 días) | D51 y D53; solo contexto |
| C | 28 días desde la publicación de D54 | la lectura |

## Números

Filtro de nombre de host: `elementoweb.com` o `www.elementoweb.com`. En las ventanas A y B, el filtro no cambió el
conteo de sesiones del informe de página de destino.

| Medida | A | B | Cómo se leyó |
|---|---:|---:|---|
| Sesiones con página de destino `/` | 174 | 52 | Informe «Página de destino», filtro de host |
| Sesiones totales del sitio | 489 | 68 | mismo informe, fila Total |
| Vistas de `/marketing/*` con referente exacto `https://elementoweb.com/` | 3 | 0 | exploración: `page_view`, ruta empieza por `/marketing/`, filas referente y ruta |
| Por cada 1.000 sesiones del home | 17,2 | 0 | 3 / 174 y 0 / 52 |
| `cta_click` (cualquier `location`) | 0 | 0 | exploración: evento `cta_click`, del 17-sep al 20-oct |
| `cta_click` con `location = marketing` | no disponible | no disponible | `location` no está registrada |

Las 3 vistas de la ventana A fueron a `/marketing/whatsapp-marketing-masivo-panama/` (2) y a
`/marketing/automatizaciones-n8n-panama/` (1).

Contexto del 17-sep al 20-oct:

- Los eventos `cta_click`, `click_whatsapp`, `click_phone`, `click_email`, `form_start` y `generate_lead` suman unos
  15 en todo el sitio.
- La sesión que entra por `/` dura 13 s de interacción media (ventana A).
- La ventana A tiene un pico de unas 300 sesiones al día entre el 12 y el 14-oct, casi todas en celular y desde
  Ciudad de Panamá.

## Reparto por dispositivo

Sesiones que empiezan en `/` (evento `session_start` con ruta `/`), del 17-sep al 20-oct-2026, sin referente:

| Dispositivo | Sesiones | % |
|---|---:|---:|
| Celular | 162 | 77 % |
| Escritorio | 48 | 23 % |
| Tableta | 0 | 0 % |

El cambio de escena al pasar el mouse (desde 1024 px, puntero fino) llega como mucho a 1 de cada 4 sesiones del home.
En celular se ve la escena 1 fija (d6).

## Qué significa para la regla de decisión de D54

- Con 3 vistas en la ventana A y 0 `cta_click`, ninguna tasa llega al mínimo de 30 eventos por ventana. Si el tráfico
  no cambia, la lectura de los 28 días va a dar **«datos insuficientes»** y se repetirá a los 56 días, como dice la
  regla. No se reactiva UC1 b por ruido.
- Para que `cta_click` con `location = marketing` sirva en la ventana C, `location` tiene que quedar registrada
  **antes** de publicar.
- `select_content` se lee con las dimensiones predefinidas «ID de contenido» y «Tipo de contenido», sin registrar nada.

## Definición exacta de la exploración

- Técnica: formato libre.
- Filas:
  - URL referente de la página;
  - Ruta de la página + cadena de consulta.
- Columnas: Categoría de dispositivo.
- Valores: Usuarios activos y Número de eventos.
- Filtros, uno por lectura:
  - `Nombre del evento` coincide exactamente con `page_view` y `Ruta de la página + cadena de consulta` empieza por
    `/marketing/`;
  - `Nombre del evento` coincide exactamente con `cta_click`;
  - `Nombre del evento` coincide con la regex `^session_start$`, para el reparto por dispositivo.

No se exportaron CSV: descargar archivos pide permiso aparte. Los números de arriba son los que mostró GA4 en pantalla.
