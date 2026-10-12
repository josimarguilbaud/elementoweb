// faq.mjs — preguntas frecuentes de Kredit: una sola fuente para la página de preguntas,
// los adelantos del inicio, préstamos y empresas, y el JSON-LD FAQPage.
// Cada respuesta es una función (r, landing) porque los enlaces internos dependen de la profundidad.
// Base: la FAQ de kredit.com.pa y la landing de préstamos; lo no confirmado va en .tbd.
const PORTAL = 'https://kredit.com.pa/app/';
const tbd = (t) => `<span class="tbd">[${t}]</span>`;

export const FAQ = [
  {
    id: 'personas',
    title: 'Para personas',
    lead: 'Quién puede pedir, qué necesitas y cuánto tarda.',
    items: [
      { id: 'quien', q: '¿Quién puede solicitar un crédito con Kredit?',
        a: (r) => `<p>Los colaboradores de empresas afiliadas a Kredit, porque la cuota se descuenta directo de la planilla. Si tu empresa aún no está afiliada, puedes <a href="${r}empresas/">recomendarla</a> para que se sume. ${tbd('Opción para solicitantes de empresas no afiliadas: por confirmar con Kredit')}</p>` },
      { id: 'requisitos', q: '¿Qué necesito para solicitar?',
        a: () => `<p>Estar activo en una empresa afiliada, contar con tu cédula vigente y llenar la solicitud digital. Si hace falta algún documento adicional, como la carta de trabajo o tu último talonario, tu asesor te lo indicará. ${tbd('Documentos adicionales: por confirmar con Kredit')}</p>` },
      { id: 'montos', q: '¿Qué montos y plazos puedo solicitar?',
        a: () => `<p>Puedes solicitar desde B/. 50 hasta B/. 3,000. El monto y el plazo se ajustan a tus necesidades y a tu capacidad de pago. ${tbd('Plazo mínimo y máximo: por confirmar con Kredit')}</p>` },
      { id: 'desembolso', q: '¿Cuánto tiempo demora el desembolso?',
        a: () => '<p>El desembolso es inmediato: se realiza el mismo día de la aprobación de tu crédito.</p>' },
      { id: 'tasa', q: '¿Qué tasa de interés tendría mi crédito?',
        a: () => `<p>Depende de la evaluación de tu solicitud. Antes de firmar recibes por escrito la tasa de interés efectiva, los cargos y el costo total, sin letra pequeña. La calculadora de esta web usa una tasa de ejemplo. ${tbd('Tasa de interés efectiva anual máxima: por confirmar con Kredit')}</p>` },
      { id: 'compromiso', q: '¿Calcular o solicitar me obliga a tomar el crédito?',
        a: () => '<p>No. Calcular tu cuota y enviar la solicitud no te obliga a nada. Todo crédito está sujeto a evaluación, y antes de firmar recibes por escrito la tasa, los cargos y el costo total.</p>' },
      { id: 'apc', q: '¿Consultarán mi historial de crédito?',
        a: () => '<p>Sí. Con tu autorización, Kredit consulta tus referencias de crédito (APC u otras agencias de información de crédito) para evaluar tu solicitud. La autorización está en la solicitud y puedes leerla antes de enviarla.</p>' },
    ],
  },
  {
    id: 'pagos',
    title: 'Pagos y tu cuenta',
    lead: 'Cómo se descuenta la cuota, abonos y el portal de clientes.',
    items: [
      { id: 'pago', q: '¿Cómo pago mi crédito?',
        a: () => '<p>Los pagos se realizan automáticamente mediante descuento de tu planilla, a través de tu empresa afiliada. Si quieres hacer un abono adicional o cancelar tu crédito por completo, contáctanos y te ayudamos a hacerlo sin ningún cargo adicional.</p>' },
      { id: 'quincena', q: '¿Cada cuánto se descuenta la cuota?',
        a: () => `<p>En cada pago de planilla, normalmente cada quincena. La cuota es fija: es la misma en cada descuento hasta terminar de pagar, y las fechas siguen el calendario de pago de tu empresa. ${tbd('Calendario de descuentos por empresa: por confirmar con Kredit')}</p>` },
      { id: 'abonos', q: '¿Puedo abonar o cancelar mi crédito antes de tiempo?',
        a: () => '<p>Sí. Puedes hacer abonos adicionales o cancelar tu crédito por completo cuando quieras, sin ningún cargo adicional. Escríbenos y te indicamos cómo hacerlo.</p>' },
      { id: 'cuenta', q: '¿Cómo veo el estado de mi cuenta?',
        a: () => `<p>Ingresa con tu cédula al <a href="${PORTAL}" target="_blank" rel="noopener">portal de clientes</a>: verás tu estado de cuenta, los pagos realizados, cuánto te falta por pagar y, si lo necesitas, podrás solicitar un crédito adicional.</p>` },
      { id: 'adicional', q: '¿Puedo pedir un crédito adicional?',
        a: () => `<p>Sí, desde el portal de clientes. Como toda solicitud, el crédito adicional está sujeto a evaluación. ${tbd('Condiciones del crédito adicional: por confirmar con Kredit')}</p>` },
      { id: 'trabajo', q: '¿Qué pasa si cambio de trabajo?',
        a: () => `<p>Avísale a tu asesor antes de tu última quincena en la empresa: te explica cómo seguir pagando tu cuota sin atrasos. ${tbd('Procedimiento al cambiar de empleo: por confirmar con Kredit')}</p>` },
    ],
  },
  {
    id: 'empresas',
    title: 'Para empresas',
    lead: 'El convenio de descuento por planilla, para RR. HH. y finanzas.',
    items: [
      { id: 'afiliar', q: '¿Cómo afilio mi empresa?',
        a: (r, landing) => `<p>Completa el <a href="${landing.empresas}">formulario de afiliación</a> y un ejecutivo de convenios te guiará en el proceso: presentación, firma del convenio y lanzamiento del beneficio con tu equipo.</p>` },
      { id: 'empresa-hace', q: '¿Qué tiene que hacer la empresa?',
        a: () => '<p>Firmar el convenio, comunicar el beneficio a su equipo y aplicar en planilla los descuentos acordados. Kredit evalúa, desembolsa y atiende a cada colaborador.</p>' },
      { id: 'costo', q: '¿Tiene algún costo para la empresa?',
        a: () => `<p>Te lo explicamos en la presentación, junto con el borrador del convenio. ${tbd('Costo del convenio para la empresa: por confirmar con Kredit')}</p>` },
      { id: 'impago', q: '¿La empresa responde si un colaborador no paga?',
        a: () => `<p>La decisión de crédito la toma Kredit con cada colaborador. Las responsabilidades de la empresa quedan por escrito en el convenio. ${tbd('Responsabilidad de la empresa ante impagos o salidas de personal: por confirmar con Kredit')}</p>` },
      { id: 'datos-empresa', q: '¿Qué información de los colaboradores comparte la empresa?',
        a: () => `<p>Solo la necesaria para confirmar que el colaborador está activo y aplicar el descuento, siempre conforme a la Ley 81 de 2019. ${tbd('Datos exactos e intercambio de información: por confirmar con Kredit')}</p>` },
      { id: 'obligatorio', q: '¿Es obligatorio para los colaboradores?',
        a: () => '<p>No. Es un beneficio voluntario: cada colaborador decide si solicita un crédito, y cada solicitud se evalúa de forma individual.</p>' },
      { id: 'tiempo-afiliacion', q: '¿Cuánto tarda la afiliación?',
        a: () => `<p>Depende de la revisión y firma del convenio. ${tbd('Tiempo estimado de afiliación: por confirmar con Kredit')}</p>` },
      { id: 'que-empresas', q: '¿Qué empresas pueden afiliarse?',
        a: () => `<p>Empresas privadas e instituciones en Panamá con colaboradores en planilla. ${tbd('Tamaño mínimo y requisitos de la empresa: por confirmar con Kredit')}</p>` },
    ],
  },
  {
    id: 'seguridad',
    title: 'Seguridad y datos',
    lead: 'Licencia, canales oficiales y protección de tus datos.',
    items: [
      { id: 'licencia', q: '¿Kredit tiene licencia para otorgar préstamos?',
        a: () => '<p>Sí. CREDU HOLDINGS, S.A. (Kredit) es una empresa financiera autorizada por la Dirección General de Empresas Financieras del Ministerio de Comercio e Industrias (MICI), mediante la Resolución No. 638 del 23 de septiembre de 2025, conforme a la Ley 42 de 2001.</p>' },
      { id: 'adelanto', q: '¿Kredit me pedirá un pago para darme el crédito?',
        a: () => '<p>No. Kredit nunca te pedirá pagos por adelantado para aprobar tu crédito. Si alguien te lo pide en nombre de Kredit, no pagues y repórtalo a nuestros canales oficiales.</p>' },
      { id: 'canales', q: '¿Cuáles son los canales oficiales de Kredit?',
        a: () => '<p>WhatsApp +507 6997-5664, el correo ventas@kredit.com.pa, Instagram @kredit_pa y el portal de clientes en kredit.com.pa/app/. Desconfía de mensajes que lleguen desde otros números o cuentas.</p>' },
      { id: 'datos', q: '¿Cómo protegen mis datos?',
        a: (r) => `<p>Tratamos tus datos conforme a la Ley 81 de 2019 de protección de datos personales y al Decreto Ejecutivo 285 de 2021, y solo para las finalidades descritas en nuestra <a href="${r}politica-de-privacidad/">política de privacidad</a>.</p>` },
      { id: 'arco', q: '¿Cómo ejerzo mis derechos sobre mis datos personales?',
        a: () => '<p>Puedes pedir el acceso, la rectificación, la cancelación, la oposición o la portabilidad de tus datos (derechos ARCO) escribiendo a <a href="mailto:protecciondedatos@kredit.com.pa">protecciondedatos@kredit.com.pa</a>. Kredit responde en los plazos que fija la ley.</p>' },
    ],
  },
];

/** Texto plano de una respuesta (igual al textContent visible, con espacios colapsados). */
export function plain(html) {
  return html.replace(/<[^>]+>/g, '').replace(/\s+/g, ' ').trim();
}
