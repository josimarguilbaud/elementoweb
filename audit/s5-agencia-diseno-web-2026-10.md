# S5: «agencia de diseño web» frente a «diseño web panama» (14-oct-2026)

Entrada de arquitectura de D18 y del H1 de la portada (D3, D50). La pide `PLAN-PORTADA.md`, sección «Puerta S5».

## Cómo se hizo

- SERP de Google con `gl=pa&hl=es&pws=0`, sin sesión iniciada, desde el navegador de Claude el 14-oct-2026. Google no
  mostró captcha. La IP no es de Panamá: `gl=pa` localiza el índice pero no el mapa, así que el paquete local no cuenta.
- Dos cargas de la misma consulta cambiaron una posición de la 4 a la 6. Los 5 primeros se anotan tal como salieron en
  la última carga.
- **Volumen en el Planificador de palabras clave: no se midió.** Necesita la sesión de Google Ads del dueño en Chrome.
  El plan prevé este caso: si no hay volumen o los rangos son amplios, decide la SERP.
- Search Console (90 días, `audit/gsc-2026-10-consulta-por-pagina.tsv`) da el dato de demanda que sí tenemos.

## SERP «agencia de diseño web» (Panamá)

| Pos. | Resultado | Tipo |
|---|---|---|
| 1 | webstudiopanama.com (portada) | Agencia, portada |
| 2 | agenciadigitalpanama.com.pa › diseno-de-pagina… | Agencia, página de servicio |
| 3 | sortlist.com › diseno-web › panama-pa | Directorio, «las 10 mejores agencias» |
| 4 | lulabtech.com › Noticias | Artículo |
| 5 | tecnoweb.net › es-pa › diseno-web | Agencia, página de servicio |

Fuera del top 5: togrowagencia.com (lista «las 6 mejores»), redcodep.com, webartpanama.com, mrkreativo.com. Anuncios
arriba: Top Digital Panamá y otros 5. Elemento Web no aparece en la primera página.

**Intención:** mixta, de investigación comercial. La mitad del top 5 compara agencias (directorio, listas, artículo).
La otra mitad son agencias con su portada o su página de servicio. Los titles repiten el patrón
«Agencia de Diseño Web en Panamá…».

## SERP «diseño web panama»

| Pos. | Resultado | Tipo |
|---|---|---|
| 1 | webstudiopanama.com (portada) | Agencia, portada |
| 2 | diseñowebpanama.com (portada) | Agencia con dominio de la frase exacta |
| 3 | marketingdigital.blog | Lista «mejores empresas de diseño de páginas web» |
| 4 | neothek.com › es-pa › diseno-web | Hosting y agencia, página de servicio |
| 5 | ecbweb.net › Servicios | Agencia, página de servicio |

Preguntas relacionadas: «¿Cuánto se cobra por diseñar una página web?», «¿Cuánto cuesta un diseño de web?»,
«¿Qué hace un diseño web?». Elemento Web no aparece en la primera página.

**Intención:** comercial y transaccional: contratar o cotizar el servicio. Hay menos comparación que en la otra
consulta, y las preguntas son de precio.

## Comparación

- **Coincidencia en el top 5: 1 de 5** (webstudiopanama.com, que pone la portada en las dos). Ningún otro dominio se
  repite en el top 5.
- Las dos SERP **no son casi iguales**. Una mezcla comparación y agencias; la otra es contratación y precio.
- Search Console coincide con la SERP. «agencia de diseño web» (97 impresiones) va a la guía
  `/blog/como-elegir-agencia-diseno-web-panama/` (94, pos. 90,4), un artículo de comparación como los de la SERP. La
  portada recibe 9 (pos. 97,9) y además «agencia de páginas web» (12, pos. 49,8) y «agencia web» (5, pos. 52,2), sus
  mejores posiciones. La pilar recibe las consultas de «diseño web en panamá» (KEYWORDS.md).

## Conclusiones

1. **D18: la portada y la pilar siguen separadas.** Las SERP no son casi iguales, así que no se cumple la condición de
   D18 para unirlas, y el plan sigue con la tanda B. La portada toma «agencia de diseño web» y sus variantes
   («agencia de páginas web», «agencia web»). La pilar conserva «diseño web panamá». Sus metadatos siguen congelados
   (D36).
2. **H1 de la portada:** «Agencia de diseño web en Panamá: web, SEO, publicidad y WhatsApp».
   - Abre con la frase que usan los titles del top 5.
   - Nombra el alcance de agencia que la distingue de la pilar: el mapa de servicios.
   - No promete resultados. La candidata de D3, «…que convierte visitas en consultas», era una promesa sin una cifra
     publicada que la respalde.
   - Contiene «diseño web en Panamá», la frase reservada a la pilar, así que `KEYWORDS.md` anota la excepción a su
     regla 2 para la portada.
3. **Lo que la SERP le pide a la portada:**
   - Ofrecer ella misma lo que compara quien busca una agencia: proyectos reales, precios de partida, proceso y FAQ.
   - Responder el precio arriba, como piden las preguntas relacionadas.
   - Mantener el enlace de la guía a la portada con el texto «agencia de diseño web» (hecho en la tanda A).
4. **Pendiente:** volumen en el Planificador cuando el dueño abra Google Ads en Chrome, solo en lectura. Si el volumen
   contradice esta lectura, se reabre D18 en un plan nuevo.
