# Línea base de rendimiento — antes del rediseño (13 de octubre de 2026)

Mide el sitio **en producción** (commit desplegado `da04313`, 12-oct-2026), es decir, antes de Roboto, del sistema de diseño y de toda la fase 1: ninguno de esos cambios está publicado todavía. Sirve para comparar la ola 1 y la portada contra el punto de partida (D14, R36).

## Qué herramienta es y qué vale

| | |
|---|---|
| Herramienta | Lighthouse 13.5.0 local, móvil (simulación estándar de red lenta), solo la categoría de rendimiento |
| Corridas | 3 por página; se reporta la mediana |
| Fecha | 13-oct-2026, desde el equipo de trabajo (Windows 11) contra `https://elementoweb.com` |
| Estado | **Indicador de trabajo, no el gate.** La medida vinculante es PageSpeed Insights móvil (R36, D14). Sin clave, la API de PageSpeed responde 429 (comprobado el 13-oct-2026), así que la clave sigue pendiente en `TODOS.md` |
| Lectura previa de PageSpeed | Home 89 y corporativo 85 (PageSpeed de la auditoría del 29-sep-2026, en `audit/changelog-final.md`). **No es comparable con la tabla de abajo**: otra herramienta y otro entorno. Esas dos cifras siguen siendo la línea base vinculante hasta que haya clave |

## Resultado (mediana de 3 corridas)

| Página | Rendimiento | LCP | CLS | TBT | Peso de la página |
|---|---|---|---|---|---|
| `/` | 94 | 2,4 s | 0 | 69 ms | 774 KB |
| `/diseno-web-panama/` | **90** | **3,3 s** | 0 | 65 ms | **635 KB** |
| `/servicios/diseno-web-corporativo-panama/` | 96 | 2,4 s | 0 | 39 ms | 448 KB |
| `/crecimiento/seo-posicionamiento-web-panama/` | 95 | 2,5 s | 0 | 44 ms | 473 KB |
| `/marketing/google-ads-panama/` | 96 | 2,4 s | 0 | 38 ms | 450 KB |
| `/servicios/` | 96 | 2,2 s | 0 | 44 ms | 433 KB |
| `/precios/` | 96 | 2,4 s | 0 | 41 ms | 454 KB |

Rango de las corridas por página: rendimiento de 88 a 96. La mayor dispersión está en el TBT (34 a 155 ms), de una corrida a otra; el LCP es estable (diferencia de 20 ms o menos entre corridas, salvo `/servicios/` con 140 ms).

## Lo que se ve

- **La pilar es la página lenta y es la que más importa.** `/diseno-web-panama/` tiene LCP de 3,3 s y rendimiento 88 a 90, con 635 KB. Está por encima del criterio de 2,5 s del plan y por debajo del umbral de reversión de D14 (3,5 s), pero con poco margen: añadirle ilustraciones sin tocar esto la pondría en riesgo. No se registró qué elemento es el LCP; hay que identificarlo antes de la fase 2a.
- La portada pesa 774 KB (la más pesada) pero con LCP de 2,4 s.
- CLS es 0 en las siete páginas.
- Las páginas de servicio, la portada, el hub y `/precios/` miden entre 2,2 y 2,5 s de LCP con 430 a 770 KB: bajar de ahí exige trabajar el LCP, no solo no empeorarlo.

## JavaScript y CSS iniciales por plantilla (presupuesto)

Medido sobre `dist/` local con `node scripts/presupuestos.mjs --medir`, en gzip nivel 9. Es el presupuesto que `npm run verify` hace cumplir (`scripts/presupuestos.json`, máximo = medido +3 %). No es el mismo estado que producción: incluye Roboto y la fase 1.

| Plantilla | JS | CSS |
|---|---|---|
| portada | 59.060 B | 22.744 B |
| pilar, servicio, hub, blog | 54.194 B | 21.619 B |
| precios, contacto | 57.429 B | 21.619 B |
| servicio v2 con formulario (compilación de pruebas) | 55.053 B | 21.619 B |

Unos 54 KB de JS por página vienen de `effects.ts` (gsap, lenis y ScrollTrigger), que `Base.astro` carga en todas las páginas. D40 pide que las páginas de servicio no los carguen salvo necesidad: es la mejor palanca de rendimiento disponible y se hace en la fase 2a.

## Línea base de D54 (21-oct-2026)

- **Medida:** `node scripts/medir.mjs https://elementoweb.com/ --id portada --metrica rendimiento`, sin `--escribir`.
- **Herramienta:** Lighthouse 13.5.0, móvil, mediana de 5 corridas. No hay clave de PSI.
- **Resultado:** rendimiento **99/100**.
- **Contexto:** D53 midió de 87 a 91 (mediana 90) el 20-oct con el mismo comando. La diferencia no está explicada;
  puede venir de la carga de la máquina durante la medición, que mueve sobre todo el TBT. La compuerta de D14 después de publicar D54 se mide con este
  mismo script.

## Cómo repetirla

```bash
lighthouse https://elementoweb.com/ --only-categories=performance --form-factor=mobile --output=json --output-path=informe.json --quiet --chrome-flags="--headless=new --no-sandbox"
```

En Windows el comando sale con error `EPERM` al borrar la carpeta temporal de Chrome aunque la medición terminó: leer `informe.json` y no fiarse del código de salida. `scripts/medir.mjs` ya lo hace así (lee el informe del archivo y falla solo si el archivo no existe).
