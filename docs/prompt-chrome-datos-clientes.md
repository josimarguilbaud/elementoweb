# Prompt para Claude en Chrome: datos reales de los clientes (para los casos de éxito)

Sirve para sacar, de las cuentas de cada cliente, los números que se publicarán en `/casos-de-exito/`.
Requisitos: que tu Google tenga acceso a Search Console y/o Analytics de cada sitio, y **el permiso del cliente para publicar sus cifras**.
Solo lectura. Un cliente a la vez: pega el bloque cambiando los datos de la primera línea.

---

Necesito extraer datos de un cliente para un caso de éxito. Trabaja SOLO EN LECTURA: no cambies configuraciones, no verifiques ni agregues propiedades, no compartas accesos, no exportes datos a otros sitios, no envíes nada a nadie. Si algo pide una acción de escritura o si no tengo acceso, detente y dímelo.

CLIENTE: <TramitaPa | San Blas Full | KL Contable | Panama International Movers>
SITIO: <https://tramitapa.com | https://sanblasfull.com | https://klcontable.com | https://panamainternationalmovers.com>
FECHA DE LANZAMIENTO DEL SITIO NUEVO (aprox.): <aaaa-mm-dd; si no la sé, dímelo tú si ves un cambio claro en los datos, sin inventarla>

Usa la cuenta de Google que ya está abierta en este Chrome. Si hay varias cuentas, pregúntame cuál antes de entrar.

## Parte 1: Search Console (propiedad del sitio)
Rendimiento > Resultados de búsqueda > Web. Usa el rango máximo disponible y, por separado, estos dos periodos: (a) los 90 días anteriores a la fecha de lanzamiento, y (b) los 90 días posteriores. Si no hay datos de alguno, dilo.
1. Clics, impresiones, CTR y posición media de cada periodo, y la variación entre ambos.
2. Las 15 consultas principales por clics del periodo posterior, con clics, impresiones y posición. Marca cuáles contienen el nombre de la marca del cliente y cuáles no (tráfico «no de marca»).
3. Las 10 páginas con más clics del periodo posterior.
4. Indexación: páginas indexadas y no indexadas, con los motivos principales.

## Parte 2: Google Analytics 4 (si tengo acceso)
Mismos dos periodos (antes/después):
1. Usuarios, sesiones y sesiones desde Búsqueda orgánica.
2. Eventos clave o conversiones configurados (por ejemplo clic en WhatsApp, envío de formulario, reserva) y su conteo por periodo. Anota **exactamente cómo se llama cada evento**, para saber qué cuenta como «consulta» o «reserva».
3. Si no hay conversiones configuradas, dilo: no las inventes.

## Parte 3: Fuentes propias del negocio (solo lo que yo te indique)
No busques en correos, chats ni facturas. Si yo pego aquí números del cliente (por ejemplo reservas o cotizaciones recibidas), organízalos por periodo y anota la fuente. No los mezcles con los de Google.

## Formato de entrega
- Tablas en markdown con el periodo exacto (fechas) y los filtros usados.
- Números exactos como los muestra Google. Si algo no está disponible, escribe «no disponible»; no estimes.
- Sin datos personales de usuarios.
- Cierra con: (1) qué cambió entre antes y después y qué NO se puede atribuir al sitio (estacionalidad, campañas de pauta, cambios de marca, cambios de dominio), (2) qué cifras son seguras para publicar, (3) qué no se pudo sacar.

---

## Qué se publica y qué no
- Solo cifras con periodo, fuente y definición («consulta = clic en el botón de WhatsApp», por ejemplo).
- Un aumento se publica como «entre <fecha> y <fecha>, <métrica> pasó de X a Y», sin afirmar que fue causado solo por el sitio si hubo pauta u otros cambios.
- Si el volumen es muy bajo (pocas decenas de clics), se publica el dato con esa cautela o se omite.
- Con el permiso del cliente por escrito (basta un mensaje de WhatsApp o correo guardado).

## Qué se mide en cada caso (ya anunciado en la web)
| Caso | Métrica propuesta |
|---|---|
| TramitaPa | Consultas calificadas por WhatsApp |
| San Blas Full | Reservas con depósito |
| KL Contable | Consultas por servicio y posicionamiento de páginas de servicio y del blog |
| Panama International Movers | Cotizaciones recibidas por ruta y tipo de carga |
