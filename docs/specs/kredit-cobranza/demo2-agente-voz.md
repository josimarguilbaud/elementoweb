# Demo 2 — Llamada de voz con IA en vivo (diseño listo para montar)

Estado: diseño · falta cuenta en la plataforma de voz y número de teléfono.

## Objetivo

En la reunión de cierre, el agente de voz **llama al celular del Gerente General**. Él hace de
cliente con una cuenta ficticia. En 60–90 segundos el agente:

1. se presenta como **sistema automatizado** y avisa que la llamada se graba;
2. **verifica identidad** (últimos 4 dígitos de una cédula ficticia) antes de hablar de dinero;
3. informa el saldo vencido;
4. ofrece un **plan dentro de la regla** o registra una **promesa de pago**;
5. si el gerente lo pone a prueba ("ya pagué", "no soy yo", "quiero hablar con un abogado",
   "denme 50% de descuento"), **no improvisa**: escala o se niega con cortesía.

Es el momento que más vende: no sabían que esto existía.

## Lo que hace falta (lo pone Josimar)

| Qué | Para qué | Costo aprox. |
|---|---|---|
| Cuenta en **Retell AI** (o Vapi) con saldo | Motor del agente de voz | US$10–20 de saldo alcanza para todas las pruebas y la demo |
| Número de teléfono saliente | Desde dónde llama el agente | Retell/Twilio venden números de EE. UU. al instante; un número local de Panamá puede tardar o no estar disponible en la plataforma — para la demo basta uno de EE. UU. |
| Autorización del Gerente General | Recibir una llamada grabada de prueba | — |
| (Opcional) Webhook en n8n (Hetzner) | Que las herramientas respondan desde un servidor y quede registro | Ya existe n8n |

Con la cuenta creada, se cargan la clave y el número como secretos del entorno y aquí se
configura todo; o se pega el prompt de abajo directamente en el panel de Retell.

## Versión A — sin servidor (recomendada para la demo)

Los datos de la cuenta ficticia van dentro del prompt. No hay herramientas externas salvo
las propias de la plataforma (colgar y transferir). Se monta en 30 minutos.

### Datos de la cuenta ficticia

- Cliente: Ricardo Pinzón (o el nombre del Gerente, si él prefiere oír su nombre)
- Últimos 4 dígitos de cédula: **2209**
- Saldo vencido: **B/. 1,940.00** · días de atraso: **12**
- Cuota mensual: B/. 485.00 · nivel de riesgo: B
- Regla vigente (ejemplo): planes hasta B/. 5,000.00 y hasta 6 cuotas para niveles A–C;
  promesa de pago hasta 15 días; **sin descuentos**.

### Prompt del agente (pegar tal cual)

```
Eres el asistente automatizado de cobranza de Kredit, una empresa financiera de Panamá.
Hablas español de Panamá, con trato de "usted", tono cordial, claro y breve (frases de una
o dos oraciones). Esta es una llamada de DEMOSTRACIÓN con datos ficticios.

REGLAS QUE NUNCA ROMPES
1. Al iniciar, di exactamente: "Buenos días. Le llama el asistente automatizado de Kredit.
   Esta llamada es grabada para fines de calidad y registro." Luego pregunta si hablas con
   el titular, {{nombre_cliente}}.
2. No hables de deudas, montos ni fechas hasta verificar identidad. Pide los últimos 4
   dígitos de la cédula. Solo son válidos: {{ultimos4}}. Tienes 2 intentos. Si fallan,
   di que por seguridad no puedes continuar, que un asesor de Kredit lo contactará, y
   despídete.
3. Si quien contesta dice que no es el titular: no reveles nada (ni que hay una deuda),
   pregunta si puede indicarle al titular que Kredit lo llamó, agradece y despídete.
4. Solo usas los montos de esta lista; nunca calculas ni inventas otros:
   - Saldo vencido: {{saldo}} · días de atraso: {{dias}} · cuota mensual: {{cuota}}.
   - Plan permitido: dividir el saldo vencido en 2 o 3 cuotas iguales
     (2 cuotas de B/. 970.00, o 3 cuotas de B/. 646.67 la primera, B/. 646.67 la segunda y
     B/. 646.66 la tercera), con la primera cuota en los próximos 7 días.
   - Promesa de pago: pago total del saldo en una fecha de hasta 15 días desde hoy.
   - No hay descuentos ni condonaciones. Si los piden, di que no puedes ofrecerlos y que
     un asesor puede revisar su caso; ofrece transferir.
5. Si el cliente dice que ya pagó, que la deuda no es suya, que quiere un abogado, que se
   siente acosado o que no quiere ser contactado: no discutas. Di que registras su
   indicación, que se detienen los contactos automáticos y que un asesor humano lo
   contactará. Ofrece transferir y luego despídete.
6. No amenaces, no presiones, no menciones consecuencias legales, reportes ni terceros.
7. Si el cliente acepta un plan o una promesa, repite el acuerdo (montos y fechas) y pide
   confirmación con un "sí". Luego di que recibirá la confirmación por WhatsApp y que no
   volverán a llamarle mientras el acuerdo esté vigente.
8. Si te preguntan si eres una persona, di que eres un sistema automatizado de Kredit.
9. Llamada máxima de 3 minutos. Despídete siempre agradeciendo.

AL TERMINAR (para el registro), resume en una línea: resultado (promesa, plan, escalado,
no verificado, no titular), montos y fecha acordada.
```

Variables para la demo: `nombre_cliente = Ricardo Pinzón`, `ultimos4 = 2209`,
`saldo = B/. 1,940.00`, `dias = 12`, `cuota = B/. 485.00`.

### Ajustes de voz

- Voz femenina o masculina neutra en **español latinoamericano**; probar 2–3 voces y elegir
  la que suene más natural con montos ("mil novecientos cuarenta balboas").
- Velocidad normal, interrupciones permitidas (que el cliente pueda cortar al agente).
- Grabación y transcripción activadas: después de la llamada se muestra la transcripción.

## Versión B — con herramientas en un servidor (camino al producto)

Mismas reglas, pero los datos y las acciones salen de un webhook (n8n o un endpoint propio),
como será en producción. El modelo nunca recibe montos que no vengan de una herramienta.

| Herramienta | Entrada | Salida | Validación en el servidor |
|---|---|---|---|
| `verificar_identidad` | `ultimos4` | `{verificado: bool, intentos_restantes}` | Bloquea tras 2 fallos |
| `consultar_cuenta` | — (la cuenta viene de la sesión de la llamada) | saldo, días, cuota, nivel | Solo si `verificado` |
| `planes_disponibles` | — | lista de planes permitidos por la regla | Calculados por el motor de reglas |
| `registrar_acuerdo` | `plan_id` o `fecha_promesa` | `{ok, resumen}` | Rechaza lo que no esté en la regla |
| `escalar_a_humano` | `motivo` | `{caso_id}` | Pausa contactos de la cuenta |

## Pruebas antes de la reunión (hacerlas todas)

| # | El que contesta dice… | Resultado esperado |
|---|---|---|
| 1 | Da 2209 y acepta pagar el 30 | Promesa registrada, repite monto y fecha, se despide |
| 2 | Da 1111 dos veces | No revela nada, dice que un asesor lo contactará |
| 3 | "No, él no está, soy el hermano" | No menciona deuda ni montos, deja recado genérico |
| 4 | "Ya pagué la semana pasada" | No discute, registra, ofrece transferir |
| 5 | "Denme 50% de descuento" | Lo niega con cortesía, ofrece plan o asesor |
| 6 | "¿Usted es una persona?" | "Soy un sistema automatizado de Kredit" |
| 7 | Interrumpe a mitad de frase | El agente se detiene y escucha |

Si alguna falla, ajustar el prompt y repetir. Guardar la mejor grabación como respaldo
(si el día de la reunión falla la red, se reproduce la grabación).

## En la reunión

1. Pedir permiso: "¿Le parece si le llamamos ahora a su celular? Usted hace de cliente."
2. Darle la tarjeta con los datos ficticios (nombre y 2209).
3. Lanzar la llamada desde el panel de Retell.
4. Al colgar, mostrar la transcripción y el resumen en pantalla.
5. Cerrar: "Esto, conectado a su SIF y con sus reglas, es la fase 4."

## Siguiente paso técnico

Con la grabación de la mejor prueba, sustituir la "Simulación sin audio" del Demo 1
(`public/demo/kredit/scripts.js`, objeto `VOICE`): ajustar los tiempos `t` de cada línea a
la grabación y añadir el MP3 en `public/demo/kredit/audio/`.
