// /accede-a-tu-cuenta/: qué puedes hacer en el portal de clientes, cómo entrar,
// botón al portal real (https://kredit.com.pa/app/) y consejos de seguridad.
export default (h) => {
  const { ic, link, landing, photo, wa, PORTAL } = h;
  const tbd = (t) => `<span class="tbd">[${t}]</span>`;
  const portalBtn = (cls) => `<a class="${cls}" href="${PORTAL}" target="_blank" rel="noopener">${ic('login')}Ingresar al portal<span class="sr-only"> (se abre en otra pestaña)</span></a>`;

  const body = `
  ${h.pageHero({
    crumb: 'Accede a tu cuenta',
    title: 'Accede a tu cuenta',
    lead: 'Ingresa con tu cédula al portal de clientes de Kredit y gestiona tus créditos en línea: tu saldo, tus pagos y un crédito adicional cuando lo necesites.',
    actions: `${portalBtn('btn btn--white btn--lg')}
          <a class="link-arrow" href="#seguridad">Consejos de seguridad</a>`,
    aside: h.acctMock(),
  })}

  <!-- ===================================================== QUÉ PUEDES HACER -->
  <section class="section section--white" aria-labelledby="hacer-title">
    <div class="wrap split">
      <div class="split__media">
        ${photo('colaboradora-oficina', 'Colaboradora revisa su celular en su escritorio con expresión tranquila', { sizes: '(max-width: 860px) 92vw, 580px' })}
      </div>
      <div>
        <div class="section-head">
          <h2 class="h2" id="hacer-title">Todo tu crédito, en un solo lugar</h2>
          <p>Si ya eres cliente, no tienes que llamar ni escribir para saber cómo vas.</p>
        </div>
        <ul class="ticks">
          <li><span class="tile" aria-hidden="true">01</span><div><h3>Consulta tu saldo</h3><p>Cuánto te falta por pagar, actualizado.</p></div></li>
          <li><span class="tile" aria-hidden="true">02</span><div><h3>Revisa tus pagos</h3><p>Cada descuento de planilla aplicado a tu crédito.</p></div></li>
          <li><span class="tile" aria-hidden="true">03</span><div><h3>Ve tu estado de cuenta</h3><p>Tu crédito, tus cuotas y lo pagado, al día.</p></div></li>
          <li><span class="tile" aria-hidden="true">04</span><div><h3>Solicita un crédito adicional</h3><p>En línea y sujeto a evaluación.</p></div></li>
        </ul>
        <p class="needs-line">${tbd('Otras funciones del portal (descarga del estado de cuenta, cambio de datos): por confirmar con Kredit')}</p>
      </div>
    </div>
  </section>

  <!-- ========================================================== CÓMO ENTRAR -->
  <section class="section" aria-labelledby="entrar-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="entrar-title">Cómo entrar al portal</h2>
        <p>Desde tu celular o tu computadora, en cualquier momento.</p>
      </div>
      <ol class="steps">
        <li class="step"><span class="step__num" aria-hidden="true">01</span><h3>Abre el portal</h3><p>Escribe <span class="mono">kredit.com.pa/app/</span> en tu navegador o usa el botón de esta página.</p></li>
        <li class="step"><span class="step__num" aria-hidden="true">02</span><h3>Ingresa con tu cédula</h3><p>Usa el número de cédula con el que solicitaste tu crédito.</p></li>
        <li class="step"><span class="step__num" aria-hidden="true">03</span><h3>Confirma que eres tú</h3><p>${tbd('Método de verificación de identidad: por confirmar con Kredit')}</p></li>
        <li class="step"><span class="step__num" aria-hidden="true">04</span><h3>Gestiona tu crédito</h3><p>Consulta tu saldo y tus pagos, o solicita un crédito adicional.</p></li>
      </ol>
      <div class="btn-row">${portalBtn('btn btn--navy btn--lg')}</div>
    </div>
  </section>

  <!-- ========================================================== SEGURIDAD -->
  <section class="section section--navy" id="seguridad" aria-labelledby="seguridad-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="seguridad-title">Consejos de seguridad</h2>
        <p>Tu cuenta es tuya. Con estos cuidados, nadie más entra en ella.</p>
      </div>
      <ul class="tips">
        <li>${ic('search')}<div><strong>Escribe la dirección tú mismo</strong><span>Entra a kredit.com.pa/app/ escribiéndola o desde esta web, no desde enlaces que te lleguen por mensaje.</span></div></li>
        <li>${ic('shield')}<div><strong>Nunca pagos por adelantado</strong><span>Kredit nunca te pedirá pagos por adelantado para aprobar tu crédito.</span></div></li>
        <li>${ic('lock')}<div><strong>No compartas tus códigos</strong><span>No compartas tus claves ni códigos de acceso con nadie.</span></div></li>
        <li>${ic('chat')}<div><strong>Solo canales oficiales</strong><span>WhatsApp +507 6997-5664, ventas@kredit.com.pa e Instagram @kredit_pa. Desconfía de otros números.</span></div></li>
        <li>${ic('user')}<div><strong>Usa tu propio dispositivo</strong><span>Evita computadoras públicas; si usas una, cierra la sesión al terminar.</span></div></li>
        <li>${ic('alert')}<div><strong>Reporta lo sospechoso</strong><span>Si recibes un mensaje extraño en nombre de Kredit, avísanos por los canales oficiales.</span></div></li>
      </ul>
    </div>
  </section>

  <!-- ========================================================== AYUDA -->
  <section class="section" aria-labelledby="ayuda-title">
    <div class="wrap duo-cards">
      <div class="duo-card duo-card--navy">
        ${h.kGhost}
        <h2 id="ayuda-title">¿Problemas para entrar?</h2>
        <p>Escríbenos por WhatsApp y un asesor de Kredit te ayuda a recuperar el acceso.</p>
        ${wa('Hola Kredit, tengo problemas para entrar al portal.', 'btn btn--white', `${ic('wa')}Escribir por WhatsApp`)}
      </div>
      <div class="duo-card duo-card--pale">
        ${h.kGhost}
        <h2>¿Aún no eres cliente?</h2>
        <p>Si trabajas en una empresa afiliada, calcula tu cuota y solicita en línea.</p>
        <a class="btn btn--navy" href="${landing.prestamos}">Solicitar mi préstamo${ic('arrow-r')}</a>
      </div>
    </div>
    <p class="wrap faq-more"><a class="link-arrow" href="${link('preguntas-frecuentes')}#pagos">Preguntas sobre pagos y tu cuenta</a></p>
  </section>
`;

  return {
    title: 'Accede a tu cuenta: portal de clientes de Kredit',
    description: 'Vista previa: qué puedes hacer en el portal de clientes de Kredit con tu cédula (saldo, pagos y crédito adicional), cómo entrar y consejos de seguridad.',
    body,
  };
};
