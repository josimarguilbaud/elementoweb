# Guion para presentar — Kredit (propuesta + Demo 1)

Uso interno de Elemento Web. No se envía al cliente.

- Propuesta: https://elementoweb.com/propuestas/kredit-cobranza-ia-19bfe5dc/ (PDF en la misma carpeta)
- Demo: https://elementoweb.com/demo/kredit/

## Antes de la reunión (10 minutos)

- [ ] Abrir el demo en la laptop, en Chrome, a pantalla completa, y pulsar **Reiniciar demo**
      (si se ensayó antes, los números quedan cambiados).
- [ ] Modo claro (el botón de la luna arriba) — se ve mejor en proyector.
- [ ] Tener abierta también la propuesta, en la sección "Inversión".
- [ ] Probar el internet del lugar; si falla, el demo funciona igual (solo cambian las fuentes).
- [ ] Llevar anotadas las preguntas de cierre (al final de este documento).

## Guion de 7 minutos

Se puede seguir con el botón **Recorrido guiado** del demo, que va en este mismo orden.

| Min | Pantalla | Qué decir | Qué hacer |
|---|---|---|---|
| 0:00 | Resumen | "Hoy están aquí: 10%, justo en el límite. Esto es lo que vamos a mover." | Señalar la línea roja. Mover las dos palancas del simulador: "esto es ilustrativo; la meta real la fijamos juntos en la fase 1". |
| 0:45 | Reglas → Planes | "Hoy usted aprueba cada plan. Defina la regla una vez." | Mover monto y cuotas. Leer en voz alta: "117 de 120 se aprueban solos; a usted le llegan 3". Dejar que él mueva el control. |
| 2:00 | Aprobaciones | "Esto es lo único que le llega. Con contexto para decidir en un minuto." | Aprobar uno. Mostrar que el contador baja y queda en la bitácora. |
| 2:30 | Conciliación | "Hoy se enteran por correo, hasta un día después. Aquí el pago entra y la cuenta sale sola." | Pulsar **Simular pago entrante**. Señalar "Mensajes evitados a clientes que ya pagaron". |
| 3:30 | Conversación → Pago con plan | "Así le habla el asistente a su cliente." | **Reproducir**. Detenerse en la verificación de identidad: "nunca habla de la deuda sin verificar". Al final, pulsar "Ver el resumen": el recuperado subió. |
| 5:00 | Conversación → "Ya pagué" / "No soy el titular" | "Y cuando hay un problema, se detiene y pasa a una persona." | Reproducir uno de los dos (el que más le preocupe). |
| 5:30 | Reglas → Bitácora | "Cada contacto queda registrado y se exporta." | **Exportar CSV** y abrirlo. |
| 6:00 | Conversación → Llamada de voz | "Esto mismo, por teléfono." | Reproducir 15–20 segundos. "En la próxima reunión le llamamos en vivo a su celular." |
| 6:30 | Qué llega y cuándo | "Todo esto llega en 8 a 14 semanas, empezando por quitar los frenos." | Cerrar con las preguntas de abajo. |

## Preguntas difíciles (respuestas cortas)

- **"¿Y si la IA dice un monto equivocado?"** — No calcula montos: los lee de su sistema
  (SIF) en cada conversación, y solo puede ofrecer planes que ustedes aprobaron. Si algo no
  cuadra, pasa a una persona.
- **"¿Esto lo permite el regulador?"** — Se configura dentro de los límites que su oficial de
  cumplimiento nos indique (horarios, intentos, textos obligatorios), se identifica siempre
  como sistema automatizado y deja registro auditable de todo. Los límites exactos se
  confirman en la fase 1, antes de enviar el primer mensaje.
- **"¿Mis clientes se van a molestar?"** — Hay tope de contactos, horario permitido, opción de
  baja en cada mensaje, y los clientes de mayor riesgo o monto los atiende una persona desde
  el inicio.
- **"¿Dónde quedan los datos?"** — Son de Kredit, se exportan cuando quiera y no se usan para
  entrenar modelos. Firmamos acuerdo de confidencialidad y de tratamiento de datos antes de
  recibir cualquier dato (Ley 81 de 2019).
- **"¿Reemplaza a mi equipo?"** — No: le quita las llamadas repetitivas y le deja las
  disputas y los casos que necesitan criterio.
- **"¿Cuánto cuesta?"** — "Depende del tamaño de la cartera; con los datos que le pido hoy
  le envío el precio esta semana." (No dar cifra en la reunión sin los datos.)
- **"¿Y si ya tenemos AgileCheck?"** — Lo usamos tal cual; no construimos otro score.
- **"¿Funciona con nuestro sistema?"** — Se conecta al SIF por API, por una base de solo
  lectura o con un archivo diario; lo definimos con su equipo de sistemas en la fase 1.

## Preguntas de cierre (para fijar el precio y arrancar)

1. ¿Cuántas cuentas activas tienen hoy y cuántas en mora, por tramo de días (1–15, 16–30, 31–60, 60+)?
2. ¿Cuál es el monto total de la cartera y de la cartera en mora?
3. ¿Cuántos planes de pago se solicitan al mes?
4. ¿Por qué medios pagan sus clientes (banco, ACH, Yappy, efectivo) y cómo les llega el aviso?
5. ¿Quién es su contacto de sistemas para el SIF y quién su oficial de cumplimiento?
6. **¿Qué día podemos hacer el taller de reglas de una hora con usted?**

Con 1–3 se calcula el precio (implementación + mensualidad por cuentas gestionadas).
