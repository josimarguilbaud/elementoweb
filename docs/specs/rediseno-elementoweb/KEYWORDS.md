# Palabras clave y metadatos de las páginas comerciales

Estado: 13-oct-2026, paso 0 de la fase 1 (R35, D12, T8). Fuente de datos: [`audit/gsc-baseline-2026-10.md`](../../../audit/gsc-baseline-2026-10.md) y sus archivos de datos (257 consultas, 95 páginas y el cruce consulta por página de 14 URLs). Rango 28-jul a 11-oct-2026.

Cubre las 35 páginas del manifiesto [`scripts/paginas-comerciales.json`](../../../scripts/paginas-comerciales.json): la portada, la pilar, `/precios/`, los 6 hubs y los 26 servicios (con Videos publicitarios, IA creativa, D52, 20-oct-2026). Blog, industrias y Miami quedan fuera de la regla de no repetir, pero no pueden usar como principal la palabra de una página comercial.

## Reglas

1. **Una palabra principal por página, y ninguna se repite.** Lo comprueba `scripts/keywords.test.mjs` sobre la tabla de abajo (entra en `npm test` y en `npm run verify`).
2. **Principal** es la palabra que gobierna el title, el H1 y la primera pantalla. **Secundarias** son variantes y búsquedas cercanas que la página puede cubrir con subtítulos y texto. **Reservadas** son palabras que pertenecen a otra página: esta página puede nombrarlas, pero no las usa en title ni H1 ni las repite como foco.
3. **La asignación sigue la intención y lo que Search Console ya muestra**, no solo el volumen. Con posiciones de 60 a 100, el volumen dice qué se busca; el cruce consulta por página dice a quién se lo está dando Google hoy.
4. **Los metadatos de las páginas comerciales están congelados** (D36, `scripts/cambios-permitidos.json`). Cada propuesta de abajo se pasa a ese archivo al empezar la fase que la aplica y se vacía al cerrarla. La pilar no cambia de title, H1 ni canonical.
5. **Medidas fijas:** title hasta 60 caracteres y descripción hasta 155 en lo que se propone. Los actuales que superan eso se dejan hasta que su fase los toque.
6. **Excepción a la regla 2 para la portada (D50, 14-oct-2026):** el title y el H1 de `/` contienen «diseño web en Panamá», la frase reservada a la pilar, porque la consulta de la portada se escribe «agencia de diseño web» + ciudad. La SERP de S5 (`audit/s5-agencia-diseno-web-2026-10.md`) muestra que las dos consultas devuelven resultados distintos, así que no compiten. Ninguna otra página tiene esta excepción.

## Hallazgos del cruce que cambian el plan

| Hallazgo | Decisión |
|---|---|
| El corporativo recibe 153 impresiones de «diseño web en panama», 94 de «diseño web panama» y 75 de «diseño de paginas web en panama»: las mismas consultas que recibe la pilar (190, 175 y 163). | El corporativo se enfoca en «diseño web corporativo» y deja la frase genérica a la pilar. No se tocan sus metadatos; se reescribe el texto. |
| «agencia de diseño web» (97 impresiones) la recibe la guía `/blog/como-elegir-agencia-diseno-web-panama/` en 94 búsquedas; la portada solo en 9. | La portada toma «agencia de diseño web». La guía conserva «cómo elegir una agencia…» y enlaza a la portada con ese texto. |
| `/precios/` no tiene impresiones. «pagina web precio» (77) la recibe la guía `/blog/cuanto-cuesta-diseno-web-panama/`. | `/precios/` toma «precios de páginas web en panamá». La guía conserva «cuánto cuesta» y enlaza a `/precios/`. |
| Diez consultas de manejo de Instagram (posiciones 19 a 52) llegan a la página de publicidad de pago. | La página de contenido para redes toma «manejo de instagram panamá». El texto de manejo de Instagram no sale de la página de pauta hasta que la de contenido lo tenga publicado. |
| La página de SEO general recibe «seo local panamá» (135) y «seo local ciudad de panamá» (56), que son de SEO local (215 y 101). «seo para ecommerce» cae en SEO general, no en tiendas online. | «seo local» queda reservada a la página de SEO local. «seo para ecommerce» queda en SEO general como sección propia. |
| `/servicios/` recibe «creacion de paginas web panama» (21) y «servicios web panama» (11). | Se reasigna a «servicios web panamá» y se cede «creación de páginas web» a la pilar (R35: cambian title y description). |

## Asignación

Las filas se leen con el formato `| \`ruta\` | fase | principal | secundarias | reservadas | Search Console | nota |`. No cambiar el formato: lo lee la prueba.

| Página | Fase | Palabra principal | Secundarias | Reservadas a otra página | Search Console (impresiones, posición) | Nota |
|---|---|---|---|---|---|---|
| `/` | 2b | agencia de diseño web | agencia de páginas web; agencia web; agencia de desarrollo web; empresa de páginas web | diseño web panamá (pilar); seo panamá (SEO); google ads panamá (Google Ads) | «agencia de diseño web» 97, pos 90,4, hoy en la guía del blog (94) y en la portada solo 9, pos 97,9. La portada: 197 impresiones, 9 clics, pos 69,2 | H1 sujeto a la aprobación del dueño (Puerta B). |
| `/diseno-web-panama/` | 2a | diseño web panamá | diseño web en panamá; diseño de páginas web en panamá; páginas web en panamá; creación de páginas web panamá; web design panama; website design panama; diseñador web panamá | agencia de diseño web (portada); diseño web corporativo (corporativo); precios de páginas web (precios) | 1.829, pos 88,4. Recibe 190 «diseño web en panama», 175 «diseño web panama», 167 «paginas web en panama» | Title, H1 y canonical congelados (D36). |
| `/precios/` | 2b | precios de páginas web en panamá | precio de una página web; cotización de página web panamá; cuánto cuesta una página web | ninguna | 0 impresiones. «pagina web precio» 77, pos 89,4, está en la guía del blog | Cuando salga, la guía enlaza aquí y deja de optimizar «precio». |
| `/servicios/` | 2b | servicios web panamá | servicios para hacer una página web; servicios digitales para empresas | creación de páginas web panamá (pilar); diseño web panamá (pilar) | 54, pos 84,0. Recibe «creacion de paginas web panama» 21, «servicios web panama» 11, «servicios para hacer una pagina web» 7 | Cambian title y description (R35). |
| `/servicios/diseno-web-corporativo-panama/` | 2a | diseño web corporativo | web corporativa; sitio web corporativo; página web corporativa; sitio web institucional | diseño web panamá; diseño web en panamá; diseño de páginas web en panamá (todas, pilar) | 525, pos 93,2. «diseño web corporativa» 39, pos 87,4; «web corporativa» 26, pos 94,6. También recibe las genéricas de la pilar | Quitar de encabezados y texto la frase genérica; el H1 actual ya incluye «corporativo». |
| `/crecimiento/seo-posicionamiento-web-panama/` | 2a | seo panamá | seo en panamá; posicionamiento web en panamá; posicionamiento seo; agencia seo panamá; consultor seo; seo para ecommerce; seo para ventas digitales | seo local panamá; local seo; seo google maps (SEO local) | 2.685, pos 86,0. «seo panama» 374, «seo para ventas digitales en panama» 269, «posicionamiento web en panama» 205, «seo para ecommerce en panamá» 179 | Hoy recibe también «seo local panamá» (135), «seo local ciudad de panamá» (56) y «local seo panama» (55): son de SEO local. |
| `/marketing/google-ads-panama/` | 2a | google ads panamá | google ads en panamá; publicidad en google panamá; campañas google ads; agencia de google ads; empresa de google ads | meta ads; publicidad en facebook e instagram (pauta social) | 771, pos 82,0. «google ads panama» 229, «google ads en panama» 139, «publicidad en google panama» 107 | La palabra ya está en title; el H1 la gana. |
| `/servicios/tiendas-online-ecommerce-panama/` | 4 | ecommerce en panamá | tiendas online en panamá; tienda online panamá; diseño de tiendas online; e-commerce en panamá | agencia shopify panamá (Shopify); seo para ecommerce (SEO); integrar yappy (Yappy) | 104, pos 87,3. «ecommerce en panama» 37, «e-commerce en panama» 27, «diseño de tiendas online en panamá» 16 | La guía de cómo crear una tienda online conserva su tema. |
| `/servicios/landing-pages-alta-conversion-panama/` | 4 | landing page panamá | landing pages de alta conversión; página de aterrizaje; landing page para pauta | landing page vs página web (guía del blog) | 8, pos 74,4. «landing page panama» 18, pos 79,1 (9 en la pilar) | Las ~13 consultas «landing page vs página web» son de la guía. |
| `/servicios/redisenio-web-panama/` | 4 | rediseño web panamá | rediseño de página web; rediseñar mi web sin perder posicionamiento; migrar sitio web | ninguna | 1, pos 84,0. «rediseño» 1, pos 84 | Sin demanda medida: asignada por intención (pregunta 8 del panel GEO). |
| `/marketing/whatsapp-marketing-masivo-panama/` | 4 | whatsapp marketing masivo panamá | campañas de whatsapp masivo; whatsapp business api panamá; mensajes masivos por whatsapp | crm con whatsapp (WazaCRM y guía) | 1, pos 34,0. La guía de campañas de WhatsApp masivo sale en pos 3,0 con 3 | La guía conserva el «cómo hacer»; esta página, el servicio. |
| `/funcionalidades/chatbots-ia-web-wazacrm-panama/` | 4 | chatbot con ia para página web | chatbot para web; asistente de ia para clientes; chatbot whatsapp con ia | crm para whatsapp (WazaCRM) | La URL antigua `chatmantis` tuvo 1, pos 68,0 y hoy da 404. «ia que atende clientes» 6 va a la guía | 301 pendiente (TODOS.md). |
| `/inteligencia-artificial-para-empresas-panama/` | 4 | inteligencia artificial para empresas panamá | agencia de inteligencia artificial panamá; ia para empresas; automatización con ia | chatbot con ia (chatbots) | 71, pos 86,3. «agencia de inteligencia artificial en panamá» 32, pos 90,0 | Página hecha a mano; migra a la plantilla en la fase 4. |
| `/crecimiento/seo-local-google-maps-panama/` | 4 | seo local panamá | local seo panama; seo local ciudad de panamá; seo google maps; google business profile panamá | seo panamá; posicionamiento web (SEO general) | 622, pos 68,1: la mejor posición entre las páginas con más de 500 impresiones. «local seo panama» 226, pos 59,9; «seo local panamá» 215; «seo local ciudad de panamá» 101 | Es la página con más ventaja de partida: no tocar title, H1 ni canonical sin motivo. |
| `/marketing/facebook-instagram-ads-panama/` | 5 | publicidad en facebook e instagram panamá | meta ads panamá; facebook ads panamá; instagram ads; trafficker digital | manejo de instagram; administración de instagram (contenido para redes) | 244, pos 38,6. Recibe 10 consultas de manejo de Instagram (pos 18,9 a 52,3) que son de gestión de contenido | No retirar el texto de manejo de Instagram hasta que la página de contenido lo tenga en producción. |
| `/marketing/contenido-redes-sociales-panama/` | 5 | manejo de instagram panamá | manejo de redes sociales panamá; administración de instagram; marketing de instagram para negocios; creación de contenido para instagram; redacción de blogs panamá | meta ads; publicidad pagada (pauta social) | 121, pos 56,6. La familia de Instagram suma unas 250 impresiones en pos 19 a 52 y hoy cae en la página de pauta. «redacción de blogs panamá» 69, pos 72,3 | Mayor bolsa de demanda cerca de la página 2 o 3. Decisión de la ola 3: el title pasa a cubrir manejo de Instagram. |
| `/marketing/email-marketing-panama/` | 5 | email marketing panamá | marketing por email; campañas de correo; empresa de mailing; agencia de email marketing | ninguna | 320, pos 80,4. «email marketing en panama» 102, «marketing por email en panama» 98, «campañas de correo en panama» 52 | «correos promocionales en panama» (6, pos 31,8) es candidato a subtítulo. |
| `/marketing/automatizaciones-n8n-panama/` | 5 | automatizaciones n8n panamá | automatización de procesos; automatización de seguimiento de ventas; automatización empresarial | automatización con ia (IA para empresas) | 10, pos 24,4 | La guía de seguimiento de clientes conserva «cómo automatizar». |
| `/marketing/videos-publicitarios-panama/` | 2b | videos publicitarios | videos publicitarios panamá; videos con ia; videos con ia para empresas; video publicitario con ia | reels para redes; creación de contenido para instagram (contenido para redes) | 0 (página nueva, 20-oct-2026). Planificador: 10 a 100 al mes en Panamá; «videos con ia», 100 a 1.000 | Medida en el paso 0b (`audit/demanda-ia-creativa-2026-10.md`): «videos con ia» trae solo herramientas, así que la IA va como diferenciador. |
| `/tecnologias/diseno-web-wordpress-panama/` | 5 | diseño web wordpress panamá | páginas web en wordpress; wordpress a medida; desarrollo wordpress panamá | wordpress vs shopify (guía) | 8, pos 57,2 | La guía de WordPress vs Shopify (22, pos 82,3) conserva su tema. |
| `/tecnologias/diseno-web-shopify-panama/` | 5 | agencia shopify panamá | diseño web shopify panamá; tienda shopify; shopify panamá | ecommerce en panamá (tiendas online) | 13, pos 46,5. «agencia shopify panamá» 14, pos 62,2 (8 en la página de tiendas) | |
| `/tecnologias/desarrollo-web-a-medida-vue-react-panama/` | 5 | desarrollo web a medida panamá | desarrollo laravel panamá; desarrollo vue y react; aplicaciones web a medida | desarrollo de páginas web (pilar) | 9, pos 30,9. «desarrollo laravel en panama» 9, pos 30,9 | |
| `/funcionalidades/integracion-yappy-pasarelas-pago-panama/` | 5 | integrar yappy en tu página web | botón de pago yappy; pasarelas de pago panamá; yappy api; cobrar en línea panamá | cómo integrar yappy en tu tienda online (guía) | 19, pos 35,5. La guía de Yappy (9, pos 13,3) ya está en la primera página | |
| `/funcionalidades/sistemas-reservas-citas-online-panama/` | 5 | sistema de citas online panamá | sistema de reservas online; agenda de citas online; reservar turno; citas web | ninguna | 26, pos 41,0. «sistemas de citas online» 10, pos 47,6; «citas web» 4, pos 35,2 | |
| `/funcionalidades/integracion-cybersource-panama/` | 5 | integración cybersource panamá | cybersource banco general; cybersource unified checkout; pasarela de pago con tarjeta | ninguna | 17, pos 7,4: la única página de servicio en primera página con más de 10 impresiones. «cybersource banco general» 1, pos 25 | No tocar title, H1 ni canonical. Página hecha a mano; migra en la fase 5. |
| `/crecimiento/mantenimiento-web-panama/` | 5 | mantenimiento web panamá | mantenimiento de páginas web; planes de mantenimiento web; soporte web | hosting para empresas (hosting) | La URL antigua (5, pos 54,4) tiene 301 aquí. «mantenimiento web» 1, pos 32 | |
| `/crecimiento/hosting-infraestructura-panama/` | 5 | hosting para empresas panamá | hosting en panamá; vps; correo empresarial; alojamiento web panamá | hosting barato (guía) | 9, pos 71,9. «alojamiento web en panama» 4, pos 96,8; «hosting para empresas» 2, pos 94,0 | La guía de hosting barato (9, pos 68,1) conserva su tema. |
| `/saas/wazacrm/` | 5 | wazacrm | crm para whatsapp; agente de ia en whatsapp; crm de ventas por whatsapp | crm con whatsapp para vender más (guía) | Sin impresiones propias. «crm con whatsapp» 4, pos 58,5; «crm whatsapp panama» 3; «whatsapp crm» 3 | La guía de CRM con WhatsApp (21, pos 43,2) conserva su tema. |
| `/saas/nouscrm/` | 5 | nouscrm | cotizaciones y facturas por whatsapp; software de cotizaciones; cobros por whatsapp | ninguna | 1, pos 10,0. La URL antigua `wapycrm` (1) da 404 | 301 pendiente (TODOS.md). |
| `/saas/cifrao/` | 5 | cifrao software contable | software contable para empresas panamá; conciliación bancaria; cuentas por cobrar | ninguna | 1, pos 11,0 | |
| `/crecimiento/` | 5 | crecimiento digital panamá | crecimiento web; seo y mantenimiento | ninguna | 2, pos 2,0 | |
| `/marketing/` | 5 | marketing digital panamá | marketing digital para pymes; pauta y contenido | web marketing (SEO); videos publicitarios (IA creativa) | 5, pos 45,8 | «web marketing» (42) la recibe la página de SEO. |
| `/tecnologias/` | 5 | tecnologías de desarrollo web | elegir tecnología web; wordpress, shopify o a medida | ninguna | Sin impresiones | |
| `/funcionalidades/` | 5 | funcionalidades para páginas web | pagos en línea; chatbot; reservas online | ninguna | Sin impresiones | |
| `/saas/` | 5 | software saas panamá | saas propios; software para empresas panamá | ninguna | 1, pos 5,0 | |

## Propuestas de metadatos

Solo lo que cambia en las fases 2a y 2b. `igual` significa que se conserva el actual (apéndice). Todo lo demás conserva sus metadatos actuales hasta que su fase los toque.

| Página | Fase | Title | Description | H1 |
|---|---|---|---|---|
| `/diseno-web-panama/` | 2a | igual | igual | igual |
| `/servicios/diseno-web-corporativo-panama/` | 2a | igual | igual | igual |
| `/crecimiento/seo-posicionamiento-web-panama/` | 2a | igual | SEO en Panamá: contenido, técnica y autoridad para aparecer en Google, también para tiendas online. Sin promesas mágicas. | SEO y posicionamiento web en Panamá |
| `/marketing/google-ads-panama/` | 2a | igual | igual | Google Ads en Panamá: aparece cuando te buscan |
| `/` | 2b | igual | Agencia de diseño web en Panamá: sitios corporativos, tiendas online y landing pages, con SEO, Google Ads y WhatsApp. Pide tu cotización. | Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp |
| `/servicios/` | 2b | Servicios Web en Panamá \| Diseño, SEO, Ads y Software | Los servicios de Elemento Web en Panamá: páginas web, tiendas online, SEO, Google Ads, IA y software propio. Elige por lo que quieres lograr. | Servicios web en Panamá, por objetivo |
| `/precios/` | 2b | Precios de Páginas Web en Panamá \| Elemento Web | Precios de páginas web en Panamá: landing desde $550, sitio corporativo desde $1,250 y tienda online desde $1,950. Qué incluye y qué se paga aparte. | igual |

Notas:
- **Resuelto el 14-oct-2026 (D50):** S5 eligió el H1 de la tabla; ver `audit/s5-agencia-diseno-web-2026-10.md`. Nota original: el H1 de la portada era una **candidata**: lo decide el dueño en la Puerta B, viendo el resultado de S5 (demanda de «agencia de diseño web» en el Planificador de palabras clave y revisión de la SERP, que se anota en `audit/`). Search Console ya aporta un dato: 97 impresiones en 90 días en posición 90,4 con el dominio recién nacido. Si no se aprueba, la portada conserva el H1 actual y el cambio se cierra solo con la description.
- Los precios de los metadatos de `/precios/` salen de `src/data/precios.json` (`confirmados`). El title actual de `/precios/` mide 75 caracteres y Google lo corta; el nuevo mide 47.
- El title del hub `/servicios/` deja de repetir «diseño web en Panamá» para no competir con la pilar.
- La pilar no cambia de title, H1 ni canonical (D36). El corporativo no cambia de metadatos: su enfoque se corrige en el texto.

## Panel GEO de 10 preguntas (D13)

Subconjunto fijo de [`docs/geo-panel-preguntas.md`](../../geo-panel-preguntas.md) para medir cada mes con el mismo método. Los números son los de ese archivo. Se eligieron las diez que dependen de una página comercial de las olas o de la marca.

| Nº | Pregunta | Página que debería responderla |
|---|---|---|
| 1 | ¿Qué agencias de diseño web hay en Panamá? | `/` |
| 2 | ¿Cuánto cuesta una página web en Panamá? | `/precios/` |
| 3 | ¿Cuánto cuesta una tienda online en Panamá? | `/servicios/tiendas-online-ecommerce-panama/` |
| 5 | ¿Qué empresa hace páginas web para negocios en Panamá? | `/diseno-web-panama/` |
| 8 | ¿Cómo rediseñar mi web sin perder posicionamiento en Google? | `/servicios/redisenio-web-panama/` |
| 10 | ¿Cómo automatizar la atención de clientes por WhatsApp en Panamá? | `/funcionalidades/chatbots-ia-web-wazacrm-panama/` |
| 12 | ¿Qué agencia de SEO recomiendas en Panamá? | `/crecimiento/seo-posicionamiento-web-panama/` |
| 13 | ¿Qué agencia de diseño web en español hay para negocios hispanos de Miami? | `/miami/` y la pilar |
| 18 | ¿Qué es Elemento Web? | `/nosotros/` |
| 20 | ¿Elemento Web es una agencia confiable? ¿Qué proyectos ha hecho? | `/nosotros/` y `/portafolio/` |

La primera pasada es la línea base: no se midió la presencia actual. Anotarla en el mes de la publicación de la ola 1.

## Apéndice: metadatos actuales (congelados, D36)

Leídos de `audit/seo-snapshot.json` el 13-oct-2026. Entre paréntesis, la longitud en caracteres.

| Página | Title actual | Description actual | H1 actual |
|---|---|---|---|
| `/diseno-web-panama/` | Diseño Web en Panamá \| Páginas que Consiguen Clientes (53) | Diseño web en Panamá para empresas que quieren vender: sitios corporativos, tiendas online y landing pages. SEO, WhatsApp y precio cerrado desde $1,250. (152) | Diseño web en Panamá |
| `/servicios/diseno-web-corporativo-panama/` | Diseño Web Corporativo en Panamá \| Sitios que dan Confianza (59) | Diseño web corporativo en Panamá para empresas que necesitan proyectar solidez: estructura clara, SEO por servicio y panel autoadministrable. (141) | Diseño web corporativo en Panamá |
| `/crecimiento/seo-posicionamiento-web-panama/` | SEO y Posicionamiento Web en Panamá \| Tráfico que Compra (56) | Posicionamiento SEO en Panamá: contenido, técnica y autoridad para aparecer en Google donde busca tu cliente. Sin promesas mágicas. (131) | Posicionamiento web en Panamá |
| `/marketing/google-ads-panama/` | Agencia de Google Ads en Panamá \| Gestión de Campañas (53) | Gestión de Google Ads en Panamá: búsqueda, display y remarketing. Aparece cuando tu cliente busca. Fee de gestión claro, tu inversión va directo a Google. (154) | Google Ads: aparece cuando te buscan |
| `/` | Agencia de Diseño Web en Panamá \| Elemento Web (46) | Agencia de diseño web en Panamá. Páginas corporativas, tiendas online y landing pages con diseño a medida y SEO técnico. Solicita tu cotización. (144) | Diseño web en Panamá que convierte visitas en consultas. |
| `/servicios/` | Servicios de Diseño Web en Panamá \| Elemento Web (48) | Todo lo que ofrece Elemento Web en un solo lugar: diseño web, tecnologías, funcionalidades, crecimiento y SaaS propios para empresas en Panamá. (143) | Servicios de diseño web |
| `/precios/` | Precios de páginas web en Panamá: Landing, PYME y E-commerce \| Elemento Web (75) | Precios de diseño web en Panamá: landing desde $550, sitio corporativo desde $1,250 y tienda online desde $1,950. Qué incluye cada uno, qué se paga aparte y cómo se paga. (170) | Precios de páginas web en Panamá |
| `/servicios/tiendas-online-ecommerce-panama/` | Tiendas Online en Panamá \| E-commerce con Yappy y Pasarelas (59) | Desarrollo de tiendas online en Panamá: catálogo, carrito, Yappy, pasarelas de pago locales y envíos. E-commerce que sí vende. (126) | Tiendas online y e-commerce en Panamá |
| `/servicios/landing-pages-alta-conversion-panama/` | Landing Pages en Panamá \| Alta Conversión desde $550 (52) | Landing pages de alta conversión en Panamá: una página, una oferta, una acción. El destino correcto para tu pauta. Entrega en 5 días hábiles desde recibir el contenido y aprobar el alcance. (189) | Landing pages de alta conversión |
| `/servicios/redisenio-web-panama/` | Rediseño Web en Panamá \| Moderniza cuidando tu SEO (50) | Rediseño web en Panamá: auditamos tu sitio actual, lo reconstruimos con estándares modernos y planificamos las redirecciones para reducir el riesgo de perder posiciones. (169) | Rediseño web que cuida tu posicionamiento |
| `/marketing/whatsapp-marketing-masivo-panama/` | WhatsApp Marketing Masivo en Panamá \| API Oficial (49) | Campañas de WhatsApp marketing masivo en Panamá con la API oficial de WhatsApp Business. Meta Verified Tech Provider: sin riesgo de bloqueo de tu número. (153) | WhatsApp marketing, sin que te bloqueen |
| `/funcionalidades/chatbots-ia-web-wazacrm-panama/` | Chatbot con IA para tu Página Web \| WazaCRM Panamá (50) | Chatbot con inteligencia artificial para tu web: responde con tu información real, capta datos y deriva a WhatsApp. Con WazaCRM, nuestro producto. (146) | Un chatbot con IA que sí sabe de tu negocio |
| `/inteligencia-artificial-para-empresas-panama/` | Inteligencia Artificial para Empresas en Panamá \| Elemento Web (62) | Ecosistema de IA privado para tu empresa en Panamá: base de conocimiento (RAG) y automatización de procesos 24/7, siempre con control humano. (141) | Tu empresa, ahora con un cerebro propio. |
| `/crecimiento/seo-local-google-maps-panama/` | SEO Local y Google Maps en Panamá \| Aparece Donde te Buscan (59) | SEO local en Panamá: optimizamos tu ficha de Google, reseñas y presencia en Maps para que te encuentren cuando buscan tu servicio cerca. (136) | SEO local: aparece en el mapa |
| `/marketing/facebook-instagram-ads-panama/` | Publicidad en Facebook e Instagram en Panamá \| Meta Ads y Trafficker Digital (76) | Gestión de publicidad en Facebook e Instagram (Meta Ads) en Panamá: segmentación, creativos y ventas. Trafficker dedicado si manejas varias cuentas. Fee de gestión claro, tu inversión va directo a Meta. (202) | Publicidad en Facebook e Instagram |
| `/marketing/contenido-redes-sociales-panama/` | Contenido para Redes Sociales en Panamá \| Diseño y Reels (56) | Gestión de contenido para redes sociales en Panamá: publicaciones, diseño gráfico y Reels. Mantén tu marca viva y consistente todos los meses. (142) | Contenido para redes que sí mueve la marca |
| `/marketing/email-marketing-panama/` | Email Marketing en Panamá \| Newsletters y Automatización (56) | Email marketing en Panamá: newsletters, automatizaciones y recuperación de clientes. El canal con mejor retorno, sobre una base de datos que sí es tuya. (152) | Email marketing: el canal que sí es tuyo |
| `/marketing/automatizaciones-n8n-panama/` | Automatizaciones con n8n en Panamá \| Conecta tus Herramientas (61) | Automatizaciones de marketing y ventas con n8n en Panamá: conectamos tus herramientas para eliminar el trabajo manual repetitivo. Flujos a tu medida. (149) | Automatizaciones con n8n |
| `/marketing/videos-publicitarios-panama/` | Videos Publicitarios con IA en Panamá \| Reels y Anuncios (56) | Videos publicitarios con IA en Panamá: 4 videos verticales de 15 a 30 s para Reels y anuncios, con guion, voz y subtítulos, revisados a mano. (141) | Videos publicitarios con IA para tu negocio |
| `/tecnologias/diseno-web-wordpress-panama/` | Diseño Web WordPress en Panamá \| Temas Propios, sin Plantillas (62) | Diseño web en WordPress para empresas en Panamá: temas desarrollados a medida, sin plantillas compradas ni constructores lentos. Rápido y autoadministrable. (156) | Diseño web en WordPress, sin plantillas |
| `/tecnologias/diseno-web-shopify-panama/` | Diseño Web Shopify en Panamá \| Tiendas Listas para Vender (57) | Diseño de tiendas Shopify en Panamá: catálogo, pagos y envíos configurados para el mercado local, con fichas de producto que convierten. (136) | Diseño web en Shopify |
| `/tecnologias/desarrollo-web-a-medida-vue-react-panama/` | Desarrollo Web a Medida en Panamá \| Vue 3, React y Laravel (58) | Desarrollo web a medida en Panamá con Vue 3, React y Laravel: el mismo stack con el que operamos nuestros propios SaaS en producción. (133) | Desarrollo web a medida |
| `/funcionalidades/integracion-yappy-pasarelas-pago-panama/` | Integrar Yappy en tu Página Web \| Pasarelas de Pago Panamá (58) | Integramos el Botón de Pago Yappy y pasarelas con tarjeta en tu página web o tienda online. Cobra en línea como pagan los panameños. (132) | Yappy y pasarelas de pago en tu web |
| `/funcionalidades/sistemas-reservas-citas-online-panama/` | Sistema de Reservas y Citas Online en Panamá \| Agenda 24/7 (58) | Sistemas de reservas y citas online para tu web en Panamá: disponibilidad real, recordatorios automáticos y pago anticipado opcional. (133) | Reservas y citas online en tu web |
| `/funcionalidades/integracion-cybersource-panama/` | Integración CyberSource en Panamá \| Pasarela de Pago (52) | Integramos CyberSource Unified Checkout en tu web en Panamá: tarjetas con 3-D Secure 2, webhooks y alcance PCI-DSS SAQ A. Desde $1,050, precio cerrado. (151) | Integración de CyberSource Unified Checkout |
| `/crecimiento/mantenimiento-web-panama/` | Mantenimiento Web en Panamá \| Planes desde $59/mes (50) | Mantenimiento web en Panamá: 3 planes según cuánto necesitas, con respaldos verificados, monitoreo y respuesta que se ajusta a tu negocio. (138) | Mantenimiento web que se ajusta a tu negocio |
| `/crecimiento/hosting-infraestructura-panama/` | Hosting e Infraestructura Web en Panamá \| Cloud, VPS y Correo (61) | Hosting cloud, VPS dedicado y correo empresarial en Panamá. Dominio y SSL incluidos, infraestructura que se ajusta a tu proyecto, sin letra pequeña. (148) | Hosting e infraestructura, sin letra pequeña |
| `/saas/wazacrm/` | WazaCRM \| El CRM para WhatsApp que Vende en Piloto Automático (61) | WazaCRM no es un chatbot: es un agente de IA que atiende, cotiza, agenda y cobra dentro de tu WhatsApp, con el embudo de ventas y la bandeja compartida de un CRM de verdad detrás. Producto de Elemento Web. (205) | WazaCRM |
| `/saas/nouscrm/` | NousCRM \| Cotizaciones, Facturas y Cobros por WhatsApp (54) | NousCRM arma tu cotización con tu logo, la convierte en factura con un clic y te dice quién te debe. Tu cliente abre todo desde WhatsApp, sin cuenta ni contraseña. (163) | NousCRM |
| `/saas/cifrao/` | Cifrao \| Software Contable para Empresas en Panamá (50) | Cifrao: facturación, conciliación bancaria y cuentas por cobrar para empresas en Panamá. La contabilidad sale de la hoja de cálculo. (132) | Cifrao |
| `/crecimiento/` | Crecimiento Digital en Panamá \| SEO, Google Maps y Soporte (58) | Servicios de crecimiento para tu web en Panamá: posicionamiento SEO, SEO local en Google Maps y mantenimiento con hosting gestionado. (133) | Tu web se lanzó. Ahora tiene que crecer. |
| `/marketing/` | Marketing Digital y Pauta en Panamá \| Google, Meta y Más (56) | Marketing digital en Panamá: Google Ads, Meta Ads, contenido, email y WhatsApp masivo, más videos publicitarios hechos con IA y revisados a mano. (145) | Marketing digital que trae clientes |
| `/tecnologias/` | Tecnologías de Desarrollo Web \| WordPress, Shopify y A Medida (61) | La tecnología correcta según tu objetivo: WordPress para contenido, Shopify para vender rápido, Vue y React cuando el proyecto exige código a medida. (149) | La tecnología se elige por tu objetivo |
| `/funcionalidades/` | Funcionalidades para tu Página Web \| Pagos, IA y Reservas (57) | Funcionalidades que convierten tu web en una herramienta de trabajo: pagos con Yappy, chatbot con IA y sistemas de reservas online. (131) | Funcionalidades que trabajan por ti |
| `/saas/` | Nuestros SaaS \| WazaCRM, NousCRM y Cifrao (41) | Tres productos SaaS propios en producción: WazaCRM (CRM de WhatsApp con IA y pipeline de ventas), NousCRM (cotizaciones y cobros por WhatsApp) y Cifrao (contabilidad). (167) | Software propio, en producción |

## Cómo mantener este archivo

- Al aprobar una propuesta, pasarla a `scripts/cambios-permitidos.json` con su motivo y borrarla de aquí al cerrar la fase.
- Al crear o renombrar una página comercial, añadirla a la tabla de asignación y al manifiesto; la prueba falla si no coinciden.
- Después de cada medición mensual de Search Console, revisar el cruce consulta por página de las pilares y mover una palabra solo con ese dato delante.
