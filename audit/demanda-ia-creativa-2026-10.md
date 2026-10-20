# Demanda de IA creativa en Panamá (paso 0b, U1)

Medido el 19 y 20 de octubre de 2026 para `docs/specs/rediseno-elementoweb/SPEC-MARKETING-IA.md`, paso 0b del
«Runbook». Lo corrió Claude en el Chrome del dueño, con su permiso (D5 del 19-oct-2026).

## Cómo se midió

- **Planificador de palabras clave de Google Ads**, «Conozca el volumen de búsqueda y obtenga previsiones».
  Ubicación: Panamá. Red: Google. Periodo: oct-2025 a sept-2026. Idioma: «Todos los idiomas». La spec pedía español,
  pero el filtro no abrió en la cuenta, que está cancelada. Las 14 palabras están en español, así que el rango
  cambia poco. La cuenta da rangos, no cifras exactas.
- **Primera página de Google**: `google.com/search?q=<palabra>&gl=pa&hl=es&pws=0`, el 20-oct-2026. Se usó una pestaña
  normal del Chrome del dueño, con resultados no personalizados (`pws=0`), porque la extensión no abre ventanas
  privadas.
- **Conteo**: «servicio» es una página que vende el servicio, de una agencia, un estudio o un profesional.
  «Artículo de agencia» es una entrada de blog en el dominio de una agencia. «Herramienta» es un generador, una app o
  una plantilla para hacerlo uno mismo. «Información» es una enciclopedia, una universidad, un banco de stock o una
  guía.

## Palabras de la spec (14)

| Paquete | Palabra | Planificador (búsquedas/mes) | Primera página de Google |
|---|---|---|---|
| Anuncios | anuncios con ia (principal) | 10 a 100 | 0 servicios. 7 herramientas (Canva, Creatify, Renderforest, Deevid, Pippit, AdCreative, HubSpot) y 2 informativos |
| Anuncios | anuncios para redes sociales | 10 a 100 | 0 servicios. 2 artículos de agencia (ramabaya, agenciavilo), 2 herramientas (Canva, Adobe), 3 informativos |
| Anuncios | diseño de anuncios | 10 a 100 | 0 servicios. 8 herramientas y plantillas |
| Videos | videos con ia para empresas (principal) | sin datos | 1 servicio (avanza.video, España). 8 herramientas |
| Videos | videos con ia | 100 a 1.000 | 0 servicios. 8 herramientas (Canva, InVideo, HeyGen, Kling, Gemini, Adobe, Pippit, Deevid) |
| Videos | videos publicitarios | 10 a 100 | 1 servicio (cuartoenfoque). 2 artículos de agencia (agenciavilo, yumagic), 2 bancos de stock, 1 herramienta, 1 lista de YouTube |
| Fotografía de producto | fotografía de producto con ia (principal) | sin datos | 1 servicio (webimpacto.consulting). 5 herramientas y 1 curso |
| Fotografía de producto | fotografía de producto | 10 a 100 | 0 servicios. 2 artículos de agencia o estudio (karsandigital, fotografia-producto.es), 6 informativos |
| Fotografía de producto | imágenes con ia | 100 a 1.000 | 0 servicios. 9 herramientas |
| Avatares y voz | avatar con ia (principal) | 10 a 100 | 0 servicios. 9 herramientas |
| Avatares y voz | avatar ia | 10 a 100 | 0 servicios. 8 herramientas |
| Avatares y voz | presentador virtual | 0 a 10 | 0 servicios. 7 herramientas y 1 proyecto de un estudio |
| Avatares y voz | voz en off | 10 a 100 | 0 servicios. 5 herramientas y 3 informativos |
| Hub | marketing digital panamá | 100 a 1.000 | no se leyó: la página ya existe y no cambia de URL |

## Variantes con «panamá» (solo Google)

Las URL del plan terminan en `-panama`, así que se leyó también la primera página con la ciudad. Estas variantes no se
pasaron por el Planificador.

| Palabra | Primera página de Google |
|---|---|
| videos publicitarios panamá | 8 servicios locales (visualartepro, quirofanofilms, mkvideo, thetopvisual, toma4, The Factory, digitalwebpanama, PUBLIK) |
| fotografía de producto panamá | 7 servicios locales (Kreado, Publirama, Artefoto, Rawfish, My Productions, The Factory, 2 perfiles de Instagram) |
| anuncios para redes sociales panamá | 9 servicios locales, todos de pauta en redes (Digikram, Más Digital, Fresa, AMD, Kreado, Inspace, Sortlist, Web Studio Panamá con «Meta Ads en Panamá»). Es la intención de `/marketing/facebook-instagram-ads-panama/` |
| diseño de anuncios panamá | Mezcla: imprentas y letreros (One Publicidad, REDART, Viral Design), 2 agencias, 1 directorio |
| anuncios con ia panamá | Agencias de «marketing con IA» y agentes de IA (iAsistencia, agenciaia.com.pa), 1 hilo de Reddit y 2 artículos. Ninguna vende creativos de anuncios |
| avatar con ia panamá | 1 perfil local de Instagram. 7 herramientas |
| voz en off panamá | Locutores humanos (locutores.net, Asociación de Locutores Comerciales, Voces Online, Ultravoces) y 2 herramientas de texto a voz. Es otro servicio: voz humana, no un avatar |

## Lectura

- Las cuatro palabras con «IA» traen solo herramientas: la gente que las busca quiere hacerlo ella misma.
- Sin la ciudad, las palabras de categoría traen guías, plantillas y herramientas, y no llegan a 3 servicios. La que
  más se acerca es «videos publicitarios»: 1 página de servicio y 2 artículos de agencia.
- Con «panamá», «videos publicitarios» y «fotografía de producto» traen más de 6 servicios locales cada una. Ahí sí
  hay quien busca a alguien que se lo haga.
- En Anuncios, la variante local con servicios es pauta en redes, y esa intención ya es de la página de Meta Ads.
- En Avatares y voz no hay intención de servicio con ninguna de las 4 palabras. La de «voz en off panamá» busca
  locutores humanos.
