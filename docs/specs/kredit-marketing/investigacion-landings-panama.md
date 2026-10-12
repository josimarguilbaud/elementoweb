# Landings de préstamos personales en Panamá: cómo están hoy (octubre 2026)

Revisé todas las páginas el 12/10/2026. Para medir el hero usé el navegador integrado con el viewport emulado a 1440×900 y a 390×844. Esperé entre 2 y 2,5 s a que cargara cada página y leí la posición real de cada bloque en el layout (`offsetTop`/`offsetHeight`, que no se mueven con las animaciones) contra `window.innerHeight`. "Fin del hero" es el píxel donde termina el hero contado desde arriba de la página, header incluido. No cerré banners de cookies ni modales.

## 1. Tabla comparativa

| # | Página (tipo) | Fin del hero 1440×900 | Fin del hero 390×844 | Calculadora | Formulario | Tasa / ejemplo publicado | Confianza |
|---|---|---|---|---|---|---|---|
| 1 | [Panacredit, Préstamos Personales](https://www.panacredit.com/prestamos/personales/) (financiera, descuento directo) | 695 px. Cabe, y el formulario empieza en 715 | ~602 px. Cabe, pero el formulario queda en 1.272: no hay CTA arriba del pliegue | No | 1 paso, 8 campos (nombre, apellido, cédula, celular, email, lugar de trabajo, años de servicio, salario), más casillas de privacidad y de APC y reCAPTCHA | Sí: 12–240 meses y 12%–35% anual. Ejemplos con **pago quincenal** ($1.000 a 12 meses son $89,10 quincenales) | "Regulada por la DGEF, Resolución No. 164", logo "15 años", WhatsApp |
| 2 | [Banco General, Préstamo Personal](https://www.bgeneral.com/prestamos/prestamo-personal/) (banco) | Banner hasta ~396; CTA en 579 y formulario en 768. Cabe | Banner hasta 404, H1 de 4 líneas, CTA en 807: queda cortado y tapado por la barra fija de abajo | No (remite al tarifario) | Select de sector (privada ciudad / privada interior / pública / jubilado), "¿Cumples los requisitos?" y datos con autorización de APC: "Quiero ser contactado" | Solo montos: $2.000–$65.000 | Requisitos con cifras por segmento; FAQ de diciembre |
| 3 | [Caja de Ahorros, empleados privados](https://www.cajadeahorros.com.pa/prestamos-personales/empleados-privados/) (banco estatal) | ~650 px (la siguiente sección empieza en 714). Cabe | 663 px, CTA en 537. Cabe | No | Va a otra página | Montos $500–$75.000 y hasta 120 meses. La tasa la manda al tarifario | Modal de privacidad al entrar |
| 4 | [Global Bank, Global TAP](https://www.globalbank.com.pa/globaltap/prestamo-personal) (banco, 100% digital) | **600 px** (67%), CTA en 477 | ~680 px, CTA en 558. Cabe | No | Por la app, 4 pasos: datos, cédula + verificación facial, ficha CSS digital, firma digital | Sí: **15% anual**, 12–60 meses, hasta 3× el salario con tope de $20.000 | Guías PDF y video tutorial |
| 5 | [Banistmo, Empresa Privada](https://www.banistmo.com/personas/prestamos/personales/empresa-privada) + [calculadora](https://www.banistmo.com/personas/prestamos/personales/calculadora) + [Crédito Simple](https://www.banistmo.com/personas/prestamos/personales/credito-simple) | 657 px. Cabe | 650 px (medido en Crédito Simple, que usa la misma plantilla). Cabe | En página aparte, a 919 px (debajo del pliegue): fecha de nacimiento, tipo, plazo, monto y seguro. Devuelve **monto del préstamo, monto a recibir y letra mensual** | Modal | Desde $2.500, 12–72 meses. Crédito Simple: hasta $3.000, 24 meses, **16,78%**, "desembolso en minutos" | WhatsApp 6525-4700 |
| 6 | [BAC Panamá, Préstamos Personales](https://www.baccredomatic.com/es-pa/personas/prestamos/prestamos-personales) (banco) | ~600 px. Cabe | ~660 px, CTA en 598. El banner de cookies tapa media pantalla y no tiene botón de "rechazar" | No | "Solicitar" | Sí, escondido en "Ver todas": $1.000–$65.000, **desde 7% fija**, comisión de desembolso desde 6%, tope de descuento 20/35/50% | Requisitos detallados |
| 7 | [Banisi, Préstamos Personales](https://www.banisipanama.com/prestamos-personales/) (banco, todo por descuento directo) | Banner hasta 544; el paso 1 del formulario queda en 658–733. Cabe. Abre un **popup promocional** al cargar | Banner minúsculo e ilegible; el paso 1 queda a ~470. Cabe | **Sí**: monto, segmento y plazo. Devuelve **tasa, total a financiar y cuota** | Multipaso (4 pasos) con pregunta de elegibilidad | Sí: $3.500–$50.000, 1–12 años, desde 9% en empresa privada. Ejemplo: $50.000 a 144 meses al 9% da cuota de $684 | 4 sucursales, horario, WhatsApp |
| 8 | [Corporación de Crédito](https://www.corporaciondecredito.com/) (financiera, home) | **900 px = 100vh**, carrusel de 4 slides con **4 H1**. El formulario está en 6.640 px | 794 px, ocupa toda la pantalla. El formulario está en 10.104 px | No | 11 campos (tipo, nombre, nacionalidad, celular, correo, salario, tipo de empresa, lugar de trabajo, antigüedad, continuidad, términos) | Solo "hasta $15.000" y "24–72 h hábiles" | "Más de 25 años", WhatsApp. Sin número de licencia |
| 9 | [Financiera Catalino, sector privado](https://financieracatalino.com/prestamos-personales-sector-privado/) (financiera) | 903 px. **Formulario en el hero** y "Enviar" visible en 869 | Muro de texto SEO. El formulario empieza en 1.034 y el botón está en 2.169 | No | **14 campos + subir la cédula** + reCAPTCHA + 2 casillas | No | "Regulada por SBP, registrada en MICI" sin número; 4 sucursales; Yappy |
| 10 | [Kueski](https://www.kueski.com/prestamos-personales) (fintech, México) | **576 px**; la prueba social y un segundo CTA asoman en 828 | **496 px** (46% de la pantalla), CTA en 328 | No (el monto se elige en la app) | En la app, 4 pasos | Ejemplo con CAT promedio 153,31% en el footer | "+40 millones de préstamos", reseñas, CNBV/CONDUSEF |
| 11 | [Nu México](https://nu.com.mx/prestamo-personal/) (neobanco) | 890 px. Cabe por 10 px | 733 px, con el email en 636 | No | **1 campo (email)** dentro del hero | No (tasa personalizada) | Mensaje de transparencia, atención 24/7 |
| 12 | [Tala México](https://talamobile.mx/) (fintech, home) | 845 px, carrusel sin H1 | ~580 px | No | En la app | No en el hero | Foto emocional y local (quinceañera) |

**Páginas para empresas (B2B):** [BCP Perú, Crédito por Convenio Empresas](https://www.viabcp.com/creditos/credito-efectivo/credito-convenios-empresas): hero hasta 549 px en escritorio y ~365 px en móvil, con CTA fijo abajo. [minu (México)](https://www.minu.mx/): hero hasta 805 px en escritorio y 961 px en móvil (el CTA queda en 492).

**Páginas que no pude abrir o no encontré:**
- Financiera Pacífico: `financierapacifico.com` tiene el **certificado SSL vencido** y no la abrí.
- Financomer: `financomer.com` redirige a una página de "dominio en venta" de GoDaddy.
- Financiera Govimar, Rapi Préstamos y Cashea en Panamá: no encontré un sitio oficial verificable.
- Multibank y Credicorp: no las revisé.
- Fintech panameña de crédito con landing propia: no encontré ninguna. Lo más parecido es el intermediario iKiwi, que dice explícitamente que no presta.

## 2. Qué hace bien y qué hace mal cada una

- **Panacredit.** Orden: H1, banner de promo, formulario, beneficios, requisitos, WhatsApp, texto legal. *Bien:* es la única con ejemplo legal en **pagos quincenales** y resolución citada. *Mal:* H1 genérico, letra pequeña dentro de la imagen, sin CTA arriba del pliegue en móvil.
- **Banco General.** *Bien:* los mejores requisitos por segmento (privada ciudad $600 o $575 desde los 30; interior $365; gobierno $600 y 5 años; jubilado $225) y una FAQ muy local: diciembre (Ley 64 de 1961), suspender la orden de descuento al cancelar, reactivarla si cambias de empleo, seguro de vida. *Mal:* H1 en forma de pregunta SEO, claim dentro de la imagen, sin tasa ni cuota, CTA tapado en móvil.
- **Caja de Ahorros.** *Bien:* hero corto y carta de trabajo con vigencia ("hasta 45 días"). *Mal:* copy de empresas ("Beneficios que impulsan tu negocio") en una página para personas, H1 oculto y tasa remitida al tarifario.
- **Global TAP.** *Bien:* el referente digital local: hero de 600 px, tasa publicada, 4 pasos con biometría y ficha CSS digital. *Mal:* sin calculadora; el tope de 52 años deja fuera a parte del público.
- **Banistmo.** *Bien:* su calculadora separa "monto del préstamo" de "**monto a recibir**", y Crédito Simple ofrece préstamo preaprobado en la app. *Mal:* la calculadora vive en otra página y las pestañas de requisitos no cargan.
- **BAC.** *Bien:* es la que más condiciones publica (topes de descuento, plazos por segmento, edad de 21 a 71 años, continuidad laboral). *Mal:* todo escondido detrás de "Ver todos".
- **Banisi.** *Bien:* la combinación más completa: formulario multipaso arriba, calculadora con tasa, total y cuota, y ejemplo ilustrativo. *Mal:* popup al entrar y banner ilegible en móvil.
- **Corporación de Crédito.** *Mal:* carrusel a pantalla completa con cuatro H1 compitiendo, texto blanco sobre la foto y formulario a más de 6.600 px. *Bien:* WhatsApp visible desde el primer segundo.
- **Catalino.** *Bien:* una página por segmento (ACP, jubilados, públicos, privados, educadores, salud) con tipos de empleo concretos. *Mal:* 14 campos y subir la cédula sin devolver nada a cambio; en móvil el formulario queda bajo un muro de texto.
- **Kueski.** *Bien:* cifra en el H1 ("hasta $26,000 en minutos"), hero que ocupa el 46% de la pantalla en móvil, prueba social en el primer pliegue y ejemplo con CAT en el footer.
- **Nu México.** *Bien:* conversión de un solo campo. *Mal:* H1 de marca que no dice qué gana el usuario.
- **Tala.** *Bien:* foto local y emocional. *Mal:* titular abstracto que nunca dice "préstamo" y CTA vago.

## 3. Síntesis

### 3.1 Qué espera ver el cliente panameño

- **Vocabulario:** descuento directo, orden de descuento, *letra* o cuota, **quincenal**, ficha de la CSS, carta de trabajo (vigente), talonario o comprobante de pago, recibo de luz, agua o teléfono, cartas de saldo (para consolidar), referencias **APC**, continuidad laboral, jubilado, ACP, "especialistas" y "profesionales de gobierno". Nadie traduce esos términos: el usuario los conoce.
- **Requisitos casi idénticos en todas:** cédula, ficha CSS, último talonario y carta de trabajo, más recibo de servicio en las financieras. La diferencia está en el **salario mínimo y la antigüedad por segmento**, y en ciudad frente a interior.
- **Segmentación por empleador:** empresa privada, pública o jubilado. Varias tienen una página distinta por segmento (Caja, Banistmo, Catalino).
- **Formularios:** piden cédula, salario, lugar de trabajo, antigüedad y una casilla de **autorización de APC**. Ninguno devuelve una respuesta inmediata: casi todos terminan en "te contactamos".
- **WhatsApp:** está en todas, pero como número de contacto. Ninguna lo usa como flujo principal de solicitud.
- **Tasas:** las publican las financieras y los productos digitales (Panacredit, Global TAP, Banisi, Banistmo Crédito Simple, BAC "desde 7%"). Banco General y Caja remiten al tarifario. Solo Panacredit y Banisi dan un **ejemplo representativo**.
- **Velocidad:** nadie pone "desembolso el mismo día" en el H1. Lo más cercano es "aprobación inmediata" (Panacredit), "dinero inmediato" (Global TAP), "desembolso en minutos" (Banistmo, solo para quien ya tiene planilla con ellos), "aprobación en 24 horas" (Banisi), "24–72 h hábiles" (Corporación de Crédito) y "desde 2 días hábiles" (Caja). **La promesa de Kredit no la está usando nadie.**
- **Altura del hero:**
  - En escritorio casi todos caben: el hero termina entre 549 y 700 px, salvo Corporación de Crédito (100vh) y Catalino (903 px).
  - En móvil el problema real no es la altura sino **dónde cae el CTA**. En Banco General queda en 807 px y tapado. En Panacredit y Catalino no hay CTA arriba del pliegue. Además, los banners de cookies (BAC, Tala) y los modales de privacidad (BG, Caja, Banistmo) se comen entre 200 y 400 px.
- **Imágenes:** banners con el texto dentro de la imagen (BG, Panacredit, Banisi), fotos de stock y mockups de app. Casi nadie muestra a panameños reales en su entorno de trabajo, salvo el banner de Panacredit.
- **Confianza:** solo Panacredit cita el número de resolución. Las demás financieras ponen un genérico "regulada por SBP/MICI" sin número.

### 3.2 Página para personas frente a página de convenio para empresas

En los bancos y financieras panameñas que revisé **no encontré ninguna landing B2B de "afilia tu empresa"**. Banisi, BAC y Banco General tienen secciones de "Empresas" (cuenta planillera), pero no venden el préstamo como beneficio para colaboradores. La búsqueda fue limitada, pero el hueco parece real.

Los referentes de fuera:

- **BCP Perú.**
  - H1: "Crédito por Convenio Empresas". Subtítulo: "¡El beneficio que tus colaboradores necesitan!".
  - **Requisitos de la empresa** explícitos: ser privada, tener buen historial crediticio, ser "aliado en la comunicación" y manejar como máximo dos fechas de pago al mes.
  - TEA publicada (9,9%–14%), requisitos del colaborador aparte y contrato del convenio a la vista.
  - Formulario de 7 campos: razón social, RUC, número de trabajadores, contacto, celular, email y "¿ya tienes planilla BCP?".
  - En móvil, CTA fijo abajo.
- **minu.**
  - El mensaje habla a RRHH en términos de retención y productividad.
  - Prueba social con logos y cifras ("+2.000 empresas, +1 millón de colaboradores").
  - Planes, inversionistas, FAQ y un formulario de demo de 9 campos que incluye el cargo y el número de colaboradores.

| | Landing para personas | Landing de convenio (RRHH) |
|---|---|---|
| Motivación | Urgencia y alivio: dinero hoy, cuota que se puede pagar | Retención, bienestar y cero carga operativa |
| Lo que debe estar arriba | Monto, cuota quincenal, "mismo día", "¿mi empresa está afiliada?" | "Sin costo para la empresa" (solo si es verdad), qué hace RRHH, tiempo de afiliación |
| Prueba | Licencia, reseñas, años | Logos de empresas afiliadas, número de colaboradores atendidos, contrato modelo |
| CTA | "Calcular y solicitar" + WhatsApp | "Afiliar mi empresa" o "Agendar reunión" |
| Formulario | 2–3 pasos, ≤ 6 campos al inicio | 6–7 campos con RUC |

## 4. Diez recomendaciones para que las landings de Kredit superen al mercado

1. **El H1 con la promesa que nadie usa.** Por ejemplo: "Tu préstamo por descuento directo, desembolsado hoy mismo". Subtítulo: "Para colaboradores de empresas afiliadas a Kredit". Nada de "Préstamos Personales" a secas ni preguntas SEO.
2. **Regla de altura del hero.**
   - **1440×900:** header ≤ 72 px y hero completo **entre 600 y 720 px** (el fin del hero nunca pasa de 760). Así quedan visibles al menos 140 px de la franja siguiente, que debe ser la de confianza (licencia MICI, años, empresas afiliadas). Los mejores del benchmark están en 549–657 px.
   - **390×844:** header ≤ 64 px, **el CTA principal termina antes del píxel 600** (porque abajo se pierden 200–250 px por la barra del navegador, cookies o WhatsApp) y el **hero termina en ≤ 720 px**. El H1 va en un máximo de 3 líneas a 30–32 px y no debe llevar encima una imagen de más de 160 px. Kueski deja el CTA en 328 px y Global TAP en 558.
   - **Arriba del pliegue van siempre:** H1, subtítulo con la condición (empresa afiliada), mini-calculadora (monto + plazo, con resultado de cuota quincenal), CTA primario, WhatsApp como acción secundaria y una línea de confianza con el número de licencia.
3. **Calculadora en el hero, no en otra página.**
   - Entrada: monto (slider más campo) y plazo (chips).
   - Salida: **cuota quincenal**, tasa, **monto a recibir** (como Banistmo) y **total a pagar**.
   - Debajo, el rango de tasas y el ejemplo representativo, como Panacredit o Banisi, pero en texto vivo y no dentro de una imagen.
   - Kredit pone las cifras: no inventarlas en el diseño.
4. **Primer paso: "¿Dónde trabajas?"** Un buscador que autocompleta las empresas afiliadas. Resuelve la objeción número uno de un préstamo por convenio, filtra a quien no califica antes de pedirle datos y deja que el resto del flujo se adapte a la empresa (fechas de pago, tope de descuento).
5. **Formulario de 3 pasos y ≤ 6 campos antes de dar valor.**
   - Paso 1: empresa, salario y monto, sin datos personales.
   - Paso 2: nombre, cédula y celular de WhatsApp.
   - Paso 3: autorización de APC y documentos, que se pueden enviar después o por WhatsApp.
   - Como referencia, el mercado pide entre 8 y 14 campos de una sola vez, y Catalino además hace subir la cédula.
6. **Requisitos en el idioma panameño y con cifras.** Cédula, ficha CSS, último talonario y carta de trabajo (con vigencia), salario mínimo y antigüedad. Y, si el convenio lo permite, decir **qué no hace falta** (por ejemplo, el recibo de luz). Esto solo si Kredit lo confirma.
7. **Bloque "Cómo funciona el descuento directo" y FAQ local.** Diciembre (Ley 64 de 1961), qué pasa si cambio de empleo o me despiden, cancelación anticipada sin penalización, seguro de vida o de saldo deudor, tope de descuento sobre el salario y consulta a la APC. Banco General es el único que lo cubre bien: superarlo con respuestas cortas y visibles, sin acordeones que escondan cifras.
8. **Confianza verificable, no genérica.** Razón social, **número de resolución del MICI** (como Panacredit), dirección física, años en el mercado, logos de empresas afiliadas (con permiso) y reseñas reales de Google. Evitar el "regulada por SBP" sin número que usan Catalino y Corporación de Crédito.
9. **Nada que tape el CTA en móvil.**
   - Sin popups ni modales al cargar (Banisi, BG, Caja, Banistmo).
   - El aviso de privacidad, en una barra no bloqueante con "Rechazar no esenciales".
   - Después del primer scroll, **barra fija abajo** con "Solicitar" más el ícono de WhatsApp con mensaje prellenado, como BCP.
   - Fotos reales de colaboradores panameños y todo el texto en HTML, no horneado en imágenes. Encaja con Poppins y la paleta #1559ED / #091845.
10. **Una landing B2B separada para RRHH** que ningún competidor local tiene.
    - Hero: "Un beneficio financiero para tus colaboradores, sin carga para RRHH". El beneficio solo se afirma si es cierto.
    - Contenido: requisitos de la empresa (al estilo de BCP), qué hace RRHH (firmar la orden de descuento y conciliar dos fechas de pago), cuánto tarda la afiliación, contrato modelo y FAQ legal (tope de descuentos y diciembre).
    - Formulario de 6–7 campos: razón social, RUC, número de colaboradores, nombre y cargo, celular y email.
    - CTA "Afiliar mi empresa". Desde cada landing, un enlace cruzado: "¿Tu empresa no está afiliada? Recomiéndala".

## 5. Montos, plazos y tasas publicados (solo lo que aparece en las páginas)

- **Montos:**
  - Banco General: $2.000–$65.000.
  - Caja de Ahorros (empresa privada): $500–$75.000.
  - BAC: $1.000–$65.000.
  - Banisi: $3.500–$50.000.
  - Global TAP: hasta 3 veces el salario, con tope de $20.000.
  - Banistmo: desde $2.500 (Crédito Simple, hasta $3.000).
  - Corporación de Crédito: hasta $15.000.
- **Plazos:**
  - Panacredit: 12–240 meses.
  - BAC: mínimo 1 año. Máximo 10 años en empresa privada, 15 en gobierno y ACP, 30 en jubilados y especialistas.
  - Caja de Ahorros: hasta 120 meses.
  - Global TAP: 12–60 meses.
  - Banistmo: 12–72 meses (Crédito Simple, hasta 24).
  - Banisi: 1–12 años (su calculadora va de 36 a 144 meses en empresa privada).
- **Tasas:**
  - Panacredit: 12%–35% anual.
  - BAC: desde 7% fija, con comisión de desembolso desde 6%.
  - Banisi: desde 9% en empresa privada y desde 7% en especialistas.
  - Global TAP: 15% anual.
  - Banistmo Crédito Simple: 16,78%.
- **Salario mínimo:**
  - Banco General: $575–$600 en la ciudad, $365 en el interior y $225 para jubilados.
  - Caja de Ahorros y Banistmo: $600 en el área metropolitana y $500 en el interior.
  - BAC: desde $500.
  - Global TAP: $650.
  - Banisi: $1.250 en empresa privada.
- **Capacidad de descuento:** BAC publica 20% para empresa privada, 35% para gobierno y 50% para jubilados. El intermediario iKiwi cita un tope legal de 20% por préstamo y de 50% del salario sumando todos los descuentos. No lo verifiqué en la norma.

## 6. Fuentes (revisadas el 12/10/2026)

- Panacredit: https://www.panacredit.com/prestamos/personales/ y su formulario https://www.panacredit.com/form-builder/solicita-prestamo-personal/
- Banco General: https://www.bgeneral.com/prestamos/prestamo-personal/
- Caja de Ahorros: https://www.cajadeahorros.com.pa/prestamos-personales/empleados-privados/ y https://www.cajadeahorros.com.pa/prestamos/
- Global Bank, Global TAP: https://www.globalbank.com.pa/globaltap/prestamo-personal
- Banistmo: https://www.banistmo.com/personas/prestamos/personales/empresa-privada, https://www.banistmo.com/personas/prestamos/personales/calculadora y https://www.banistmo.com/personas/prestamos/personales/credito-simple
- BAC Panamá: https://www.baccredomatic.com/es-pa/personas/prestamos/prestamos-personales
- Banisi: https://www.banisipanama.com/prestamos-personales/
- Corporación de Crédito: https://www.corporaciondecredito.com/
- Financiera Catalino: https://financieracatalino.com/prestamos-personales-sector-privado/ y https://financieracatalino.com/servicios/
- iKiwi (intermediario): https://ikiwi.com.pa/prestamos/por-descuento-directo/
- Central de Créditos (solo la leí, sin medir): https://centralcreditos.net/
- Kueski: https://www.kueski.com/prestamos-personales
- Nu México: https://nu.com.mx/prestamo-personal/ (redirige a nubank.com.mx)
- Tala México: https://talamobile.mx/
- BCP Perú, Convenio Empresas: https://www.viabcp.com/creditos/credito-efectivo/credito-convenios-empresas
- minu: https://www.minu.mx/
- Sin poder revisar: https://www.financierapacifico.com (certificado vencido) y https://www.financomer.com (dominio a la venta)
