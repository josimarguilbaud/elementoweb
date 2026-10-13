# Marcador de 10 puntos: contrato y reglas

Fuente de verdad del validador `scripts/validar-marcador.mjs` (D7, D17, D35, D39 de `DECISIONES.md`). Lee `dist/`, no importa TypeScript y se prueba con `scripts/validar-marcador.test.mjs` sobre HTML real (compilación de pruebas: `npm run build:fixtures`).

## Qué páginas valida

- `scripts/paginas-comerciales.json` es el manifiesto: cada página comercial con su tipo (`servicio`, `pilar`, `hub`, `precios`, `home`), su fase y, si se sabe, el estado de precio esperado.
- `faseActual` indica hasta qué fase está publicado el sitio (orden `1, 2a, 3, 2b, 4, 5`). Las páginas con fase menor o igual deben emitir `<main data-page-type>` y cumplir el marcador. En la fase 1 no se exige ninguna.
- Falla si una página emite `data-page-type` sin estar en el manifiesto, si un slug de una sección comercial (`servicios`, `crecimiento`, `marketing`, `tecnologias`, `funcionalidades`, `saas`) no está en el manifiesto ni en las exclusiones, y si una página excluida ya emite `data-page-type`.
- `scripts/exclusiones-marcador.json` lista las páginas hechas a mano (IA y cybersource) con su motivo. No caduca: al migrar una página se quita de la lista.
- Solo las páginas con `anatomia: 'v2'` en `PageData` emiten el contrato; las demás se renderizan igual que antes.

## Los 10 puntos de una página de servicio

| # | Punto | Dónde se emite | Se cumple si |
|---|---|---|---|
| 1 | Alcance | `includes`, lista «Incluye» (`data-score="alcance"`) | tiene al menos un elemento |
| 2 | Entregables | `includes`, lista «Entregables» (`data-score="entregables"`) | al menos un elemento |
| 3 | Precio | `receipt` (`data-score="precio"`, `data-price-state`, `data-amount`) | estado `confirmado`, `propuesto` o `cotizado`; coincide con el tipo de página y con el manifiesto (ver abajo) |
| 4 | Plazo | `receipt` (`data-score="plazo"`) | texto no vacío |
| 5 | Qué no incluye | `includes`, lista «No incluye» (`data-score="no-incluye"`) | al menos un elemento |
| 6 | Preguntas frecuentes | `faq` (`data-score="faq"`) | 6 o más (8 o más en la pilar) y el schema FAQPage repite las mismas preguntas y respuestas |
| 7 | Schema | JSON-LD | hay `Service` y `FAQPage`, el JSON-LD se puede leer |
| 8 | Medición | `receipt` (`data-score="medicion"` o `data-blank="medicion"`) | fecha AAAA-MM-DD y método, o blanco honesto «sin medir» |
| 9 | Prueba de proyecto | `showcase` o `projects` (`data-score="prueba"`) o `blank` (`data-blank="prueba"`) | proyecto real, o blanco honesto «sin publicar aún» |
| 10 | Comparación | `compare` (`data-score="comparacion"`) | al menos 4 criterios (D28) |

El blanco honesto cumple los puntos 8 y 9 (R2); el validador informa por página cuántos puntos tienen evidencia y cuántos son blanco.

## Reglas adicionales (errores)

- **Respuesta citable** (servicios, pilar y home): bloque `answer` de 40 a 60 palabras con fecha AAAA-MM-DD que no sea posterior a hoy.
- **Precio y Offer** (R27, D23): el precio `confirmado` exige `data-amount`, una cifra que esté entre los confirmados de `src/data/precios.json`, que el precio visible la repita y que el schema emita un `Offer` con el mismo `minPrice`. Un precio `propuesto` o `cotizado` nunca emite `Offer`. Una página `servicio-con-precio` solo puede estar `confirmado` y una `servicio-cotizado` nunca.
- **D17**: la medición y la prueba de proyecto no pueden estar en blanco a la vez.
- **Schema**: nunca `AggregateRating` ni `Review` (R19).
- **Afirmaciones bloqueadas** (D11): el contenido de `<main>` no puede contener las de `scripts/afirmaciones-bloqueadas.json`.
- **Portada**: toda imagen con `fetchpriority="high"` declara `width` y `height` y pesa 60 KB o menos si se puede pesar en `dist/`.
- **Bloques vacíos**: la plantilla rompe el build ante una lista vacía o un dato clave faltante en una página v2 (`Blocks.astro`, D39).

## Avisos (no fallan)

- Respuesta citable de más de 180 días; medición de más de 45 días; sin imagen de portada con `fetchpriority="high"`; el contenido no enlaza a la home, a su hub o a 3 servicios relacionados (S3, R22).

## Reglas reducidas (home, pilar, hub, precios)

Respuesta citable (home y pilar), preguntas frecuentes de 6 o más (8 en la pilar) con su schema, schema legible, sin `AggregateRating` ni `Review`, sin afirmaciones bloqueadas y al menos 3 enlaces del contenido a páginas comerciales del manifiesto.

## Fecha inyectable

`--hoy AAAA-MM-DD` o la variable `VALIDAR_HOY` fijan la fecha de las comparaciones; las pruebas la inyectan y el CI usa la fecha del commit.
