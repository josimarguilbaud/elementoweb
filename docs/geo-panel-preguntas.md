# Panel de medición GEO (visibilidad en asistentes y buscadores con IA)

Objetivo: saber, con un método estable, si ChatGPT, Gemini, Claude, Perplexity y Google (AI Overviews / modo IA) mencionan o citan a Elemento Web, y si lo que dicen es correcto. **No se midió la presencia actual**; la primera pasada es la línea base. No es un ranking ni una muestra representativa: es un termómetro mensual.

## Método (repetir cada mes, en el mismo orden)
1. Mismo equipo y misma cuenta; sesión nueva (sin historial). Anotar fecha, motor, modelo o modo visible y ubicación aproximada.
2. Escribir la pregunta tal cual, en español. Una pasada por pregunta, sin repetir hasta que salga bien.
3. Registrar: ¿menciona a Elemento Web? ¿cita la URL? ¿la información es exacta (precios, alcance, sede)? ¿qué competidores aparecen? ¿capturas de pantalla guardadas?
4. Al final del mes, comparar con el mes anterior. Cambios pequeños no son señal.

## Preguntas (20)
**Panamá**
1. ¿Qué agencias de diseño web hay en Panamá?
2. ¿Cuánto cuesta una página web en Panamá?
3. ¿Cuánto cuesta una tienda online en Panamá?
4. ¿Cómo integrar Yappy en mi tienda online en Panamá?
5. ¿Qué empresa hace páginas web para negocios en Panamá?
6. ¿Cuánto tarda hacer una página web en Panamá?
7. ¿Cuál es la mejor plataforma para crear una página web?
8. ¿Cómo rediseñar mi web sin perder posicionamiento en Google?
9. ¿Qué es mejor para mi negocio: una web a medida o una suscripción mensual?
10. ¿Cómo automatizar la atención de clientes por WhatsApp en Panamá?
11. ¿Cómo medir las consultas que llegan por WhatsApp desde mi web?
12. ¿Qué agencia de SEO recomiendas en Panamá?

**Miami**
13. ¿Qué agencia de diseño web en español hay para negocios hispanos de Miami?
14. ¿Cuánto cuesta una página web para un negocio de Miami?
15. ¿Puede una agencia de Panamá hacer mi página web si mi negocio está en Miami?
16. ¿Diseño web para negocios en Doral?
17. ¿Diseño web para negocios en Hialeah?

**Marca**
18. ¿Qué es Elemento Web?
19. ¿Quién es el CEO de Elemento Web?
20. ¿Elemento Web es una agencia confiable? ¿Qué proyectos ha hecho?

## Tabla de registro (copiar por mes)
| Fecha | Motor / modo | Pregunta nº | ¿Menciona a Elemento Web? | ¿Cita la URL? | ¿Exacto? | Competidores que aparecen | Notas / captura |
|---|---|---|---|---|---|---|---|

## Cómo interpretar
- Si en dos meses seguidos aparece en preguntas 18–20 pero no en 1–17, falta autoridad externa y contenido citable (ver `docs/kit-autoridad.md`).
- Una respuesta inexacta (precio o sede equivocados) se corrige actualizando la página fuente (`/precios/`, `/nosotros/`, `llms.txt`), no pidiendo a la IA que cambie.
- Combinar con GA4 (sesiones referidas desde chatgpt.com, perplexity.ai, etc.; se pierden referrers) y con «¿cómo nos conociste?» en el formulario y en WhatsApp.
- Permitir el rastreo no garantiza citas. `GPTBot` (entrenamiento) y `OAI-SearchBot` (búsqueda) son distintos: la política de `robots.txt` para cada uno es decisión del dueño.
