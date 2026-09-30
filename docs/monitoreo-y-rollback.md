# Monitoreo y rollback

Cómo saber que el sitio está sano tras publicar, y cómo volver atrás. **No hay servicios externos ni programadores creados**: todo es manual o con herramientas que ya tienes (Search Console, GA4, GitHub Actions).

## Cómo se publica (recordatorio)
Un push a `main` dispara `.github/workflows/deploy.yml`, que reconstruye en Netcup y falla si el build falla o si la web no responde 200 en un minuto. No hay entorno de pruebas: lo que entra a `main` se publica.

## Después de cada publicación (10 minutos)
| Revisión | Cómo | Se espera |
|---|---|---|
| El despliegue terminó bien | GitHub → Actions → «Desplegar en Netcup» | Conclusión «success» |
| La web responde | Abrir `/`, `/precios/`, `/casos-de-exito/`, `/contacto/` | 200 y estilos cargados |
| Redirects | `curl -I https://elementoweb.com/servicios` | Un solo salto, a `https://…/servicios/`, y 301 |
| Cabeceras | `curl -I https://elementoweb.com/` | `X-Content-Type-Options`, `Referrer-Policy` y la CSP en solo-reporte |
| Fuentes | DevTools → Red: las fuentes vienen de `/fonts/` | Ninguna petición a `fonts.googleapis.com` |
| Formulario | Enviar una solicitud de PRUEBA («PRUEBA – ignorar») | Llega el correo y el lead aparece en el CRM, una sola vez |
| GA4 | GA4 → Informes → Tiempo real, y hacer clic en un botón de WhatsApp | Aparece `click_whatsapp` |
| Consola | DevTools → Consola en la home | Sin errores; los avisos de CSP «report-only» son informativos |

## Semanal (15 minutos)
1. **Search Console → Indexación de páginas:** número de indexadas, y las que salen como 404, 5xx o «descubierta, sin indexar». Anota los cambios.
2. **Search Console → Rendimiento:** clics, impresiones y posición de `/`, `/diseno-web-panama/`, `/precios/`, `/casos-de-exito/` y `/miami/`. Comparar con `audit/gsc-baseline-2026-09.md`.
3. **GA4:** sesiones orgánicas, `click_whatsapp`, `form_start` → `generate_lead`.
4. **CRM:** leads por página/servicio y su calidad. Registrar cuáles se califican.
5. Revisar 404 nuevos en Search Console; cada 404 con tráfico o enlaces necesita una redirección.

## Mensual
- Panel de preguntas de IA (`docs/geo-panel-preguntas.md`).
- PageSpeed Insights de home, un servicio y un artículo; guardar resultados con fecha (CrUX cuando haya datos suficientes).
- Miami (a partir de 6–8 semanas de datos): ver `audit/miami-zonas.md`.
- Revisar la consola por avisos de CSP; cuando pasen semanas sin avisos relevantes, plantear activar la CSP.

## Umbrales para actuar (propuestos; ajustar con el tiempo)
| Señal | Umbral | Acción |
|---|---|---|
| Despliegue en rojo | Cualquier fallo | Revisar el log de Actions; no volver a publicar sin corregirlo |
| Web caída o error 5xx | Cualquier caso | Rollback inmediato (abajo) |
| Formulario sin llegar | 1 prueba fallida | Revisar n8n y CRM; avisar; rollback si fue por un cambio del sitio |
| Páginas indexadas | Baja de 10 % o más en una semana | Revisar `robots`, `noindex`, sitemap y redirects del último cambio |
| 404 nuevos | Más de 5 con tráfico | Añadir redirecciones 301 directas |
| Impresiones o clics | Caída sostenida de 4 semanas en páginas clave | Comparar con la línea base y con los cambios publicados |
| Rendimiento | LCP móvil de campo por encima de 2,5 s (cuando haya datos) | Revisar imágenes, fuentes y scripts |

**Responsable propuesto:** el dueño del sitio para las revisiones y las decisiones; el soporte técnico ejecuta los cambios.

## Rollback
El sitio se reconstruye desde `main`, así que volver atrás es volver `main` a un commit anterior.

1. Identifica el último commit bueno (`git log --oneline`). Referencias en esta entrega: `cbff42e` (antes de todos los cambios) y `9d337ad` (antes del segundo lote).
2. **Preferido, sin reescribir historia:** revertir el commit malo.
   ```
   git revert <hash-del-commit-malo>
   git push origin main
   ```
   Para revertir varios: `git revert <primero>^..<ultimo>`.
3. Esperar el despliegue y repetir la revisión de 10 minutos.
4. Si es una emergencia y el despliegue falla, en Coolify se puede volver a desplegar un despliegue anterior de la aplicación (requiere acceso al panel).
5. No usar `git push --force` a `main`.

**Qué revertir según el síntoma**
| Síntoma | Probable causa | Dónde mirar |
|---|---|---|
| Fuentes rotas o texto raro | Fuentes propias | `public/fonts/`, `src/styles/global.css` (bloques `@font-face`), `Base.astro` |
| Errores de seguridad o recursos bloqueados | Cabeceras | `nginx/security.conf`, `nginx.conf`. La CSP es solo-reporte: no bloquea |
| Redirects raros | `absolute_redirect off` | `nginx.conf` |
| Menú móvil o foco | Navbar | `src/components/Navbar.astro` |
| Formulario | Validación nueva | `src/components/ContactForm.astro` |
| Imágenes no salen | `Pic` o variantes WebP | `src/components/Pic.astro`, `scripts/optimize-images.mjs` |
| Sin analítica | ID | `src/lib/site.ts` (`analytics.gaId`) |

## Redirecciones para conservar
Las 301 que existan (por ejemplo `crecimiento/mantenimiento-hosting-web-panama`) se conservan al menos un año. Ninguna URL existente se eliminó en esta entrega.
