# Demanda de video inmobiliario en Panamá (#0 de D55, G1)

Medido el 21 de octubre de 2026 para `docs/specs/rediseno-elementoweb/SPEC-VIDEO-INMOBILIARIO.md`, paso #0, con el
umbral de EV12. Lo corrió Claude en el Chrome del dueño, con su permiso (21-oct-2026).

## Cómo se midió

- **Planificador de palabras clave de Google Ads**, «Conozca el volumen de búsqueda y obtenga previsiones», en la
  cuenta 649-123-0526 (cancelada, da rangos). Ubicación: Panamá. Red: Google. Periodo: oct-2025 a sept-2026. Idioma:
  «Todos los idiomas», igual que en D52. El Planificador guarda la consulta como un plan («Plan del oct 21, 2026») en
  esa cuenta; no crea campañas ni gasta.
- **Primera página de Google**: `google.com/search?q=<palabra>&gl=pa&hl=es`, en una pestaña normal del Chrome del dueño.
- **Umbral (EV12)**: página propia si la palabra principal tiene 10 o más búsquedas al mes en Panamá, o si hay 3 o más
  servicios panameños en la primera página de Google.

## Planificador (búsquedas al mes en Panamá)

| Palabra | Búsquedas/mes | Competencia |
|---|---|---|
| video inmobiliario | 10 a 100 | sin dato |
| recorrido virtual | 10 a 100 | baja |
| tour virtual 360 | 10 a 100 | baja |
| render animado | 10 a 100 | sin dato |
| renders 3d | 10 a 100 | baja |
| video bienes raices | 0 a 10 | sin dato |
| video para inmobiliarias | 0 a 10 | sin dato |
| animacion 3d arquitectura | sin datos | — |
| video de preventa | sin datos | — |

## Primera página de Google

| Búsqueda | Servicios panameños | Resto |
|---|---|---|
| video inmobiliario panamá | 3: Video Inmuebles Panamá (Instagram, video-inmuebles.com), RawFish Productions (rawfish-productions.com, video 4K, foto y dron), Panamarketfoto (TikTok) | resumen de IA que cita a los tres; videos de mercado inmobiliario (YouTube, TVN) |
| recorrido virtual apartamento panamá | 5 de tours 360 y escaneo 3D (innovacionvisual.com, MIVX, realestatephotospanama.com, @panama_virtual, prestigepanamarealty.com) | listados de apartamentos con 360 (compreoalquile, Novacasa, Amarilo) |
| video para preventa de apartamentos panamá | 0 | videos de promotoras y agentes (YouTube, Instagram, Facebook) |
| render animado inmobiliario panamá | 7 estudios de renders (surrealismo.co, lobo-interiors.com, luft-render.com, villalobos3d.com, thefactorypublicidad.com, grupoideaspanama.com, rinoconstructores.com) | 2 publicaciones de Instagram |

## Decisión (G1)

- **Página propia: sí.** «video inmobiliario» cumple los dos criterios: 10 a 100 búsquedas al mes y 3 servicios
  panameños en la primera página.
- **Slug:** `marketing/video-inmobiliario-panama`. **Palabra principal:** «video inmobiliario».
- **Secundarias para el texto:** «recorrido virtual», «render animado», «video de preventa». «Tour virtual 360» queda
  fuera: es otro producto (escaneo 360 interactivo, ver Out of Scope de D55).
- **Competencia directa:** ninguno de los 3 servicios de «video inmobiliario» anima renders de preventa con IA ni
  publica precios; graban propiedades que ya existen. Los estudios de renders venden imágenes y animación 3D desde
  modelos; son competencia en preventa y también posibles aliados (ellos ya tienen los renders).
