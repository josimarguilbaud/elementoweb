// /empresas/: el convenio para RR. HH. y finanzas. Beneficios, quién hace qué, requisitos,
// kit de activación, afiliación en pasos y preguntas. El formulario vive en la landing de empresas.
export default (h) => {
  const { ic, landing, photo, wa } = h;
  const tbd = (t) => `<span class="tbd">[${t}]</span>`;

  const ficha = `<div class="ficha">
          <p class="ficha__label">El convenio en una hoja</p>
          <p class="ficha__big ficha__big--sm">Kredit <span>+ tu planilla</span></p>
          <dl class="ledger">
            <div><dt>Evalúa y decide</dt><dd>Kredit</dd></div>
            <div><dt>Desembolsa</dt><dd>Kredit</dd></div>
            <div><dt>Descuenta la cuota</dt><dd>Tu planilla</dd></div>
            <div><dt>Para quién</dt><dd>Colaboradores activos</dd></div>
            <div><dt>Costo para la empresa</dt><dd>${tbd('por confirmar')}</dd></div>
          </dl>
          <p class="ficha__foot">Las condiciones quedan por escrito en el convenio.</p>
        </div>`;

  const body = `
  ${h.pageHero({
    crumb: 'Empresas',
    title: 'Un beneficio financiero para tu equipo',
    lead: 'Con el convenio de Kredit, tu equipo accede a créditos claros con cuota fija descontada de la planilla, y RR. HH. deja de gestionar préstamos internos. Kredit evalúa, desembolsa y atiende.',
    actions: `<a class="btn btn--white btn--lg" href="${landing.empresas}">${ic('building')}Afiliar mi empresa</a>
          <a class="link-arrow" href="#convenio">Cómo funciona el convenio</a>`,
    aside: ficha,
  })}

  <!-- ========================================================== BENEFICIOS -->
  <section class="section section--white" id="beneficios" aria-labelledby="beneficios-title">
    <div class="wrap">
      <div class="amount-head">
        <h2 class="h2" id="beneficios-title">Un beneficio que tu equipo usa y valora</h2>
        <p>Tus colaboradores tienen acceso a crédito formal y transparente; tu empresa suma un beneficio sin prestar su propio dinero.</p>
      </div>
      <div class="band-photo">
        ${photo('equipo-almacen', 'Equipo de una empresa de distribución conversa durante una pausa en el almacén', { sizes: '(max-width: 1240px) 94vw, 1120px' })}
      </div>
      <ul class="values values--3">
        <li><h3><span>01</span>Bienestar financiero</h3><p>Crédito formal, con cuotas fijas y condiciones claras, cuando tu equipo lo necesita.</p></li>
        <li><h3><span>02</span>Retención y compromiso</h3><p>Un beneficio que suma a tu propuesta como empleador y ayuda a retener talento.</p></li>
        <li><h3><span>03</span>Menos solicitudes de ayuda</h3><p>Tu equipo tiene una alternativa formal y RR. HH. deja de gestionar préstamos internos.</p></li>
        <li><h3><span>04</span>Crédito responsable</h3><p>Cada solicitud se evalúa según la necesidad y la capacidad de pago del colaborador.</p></li>
        <li><h3><span>05</span>Operación simple</h3><p>Kredit te envía el detalle de los descuentos y tu equipo los aplica en planilla.</p></li>
        <li><h3><span>06</span>Acompañamiento dedicado</h3><p>Un ejecutivo de convenios te acompaña en la afiliación, el lanzamiento y la operación.</p></li>
      </ul>
    </div>
  </section>

  <!-- ===================================================== QUIÉN HACE QUÉ -->
  <section class="section" id="convenio" aria-labelledby="convenio-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="convenio-title">Qué hace Kredit y qué hace tu empresa</h2>
        <p>Responsabilidades claras desde el primer día: Kredit gestiona el crédito y tu equipo de planilla aplica el descuento.</p>
      </div>
      <div class="roles">
        <div class="roles__col roles__col--kredit">
          <p class="roles__tag">Kredit</p>
          <h3>Se encarga del crédito</h3>
          <ol class="roles__list">
            <li><span>01</span>Evalúa cada solicitud y toma la decisión de crédito.</li>
            <li><span>02</span>Desembolsa el mismo día de la aprobación.</li>
            <li><span>03</span>Atiende a tus colaboradores por WhatsApp y en el portal de clientes.</li>
            <li><span>04</span>Envía el detalle de los descuentos de cada período.</li>
            <li><span>05</span>Protege los datos conforme a la Ley 81 de 2019.</li>
          </ol>
        </div>
        <div class="roles__col roles__col--rrhh">
          <p class="roles__tag">Tu empresa · RR. HH. y planilla</p>
          <h3>Aplica el descuento acordado</h3>
          <ol class="roles__list">
            <li><span>01</span>Firma el convenio de afiliación.</li>
            <li><span>02</span>Comunica el beneficio a su equipo con el kit de activación.</li>
            <li><span>03</span>Confirma que el colaborador está activo, cuando Kredit lo solicita.</li>
            <li><span>04</span>Aplica en planilla el descuento acordado y lo remite a Kredit.</li>
          </ol>
          <p class="roles__foot">${tbd('Alcance operativo, formato del reporte y fechas de remisión: por confirmar con Kredit')}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================ REQUISITOS Y KIT DE ACTIVACIÓN -->
  <section class="section section--white" id="requisitos" aria-labelledby="req-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="req-title">Requisitos y lo que recibe tu empresa</h2>
        <p>Lo que revisamos antes de firmar el convenio y lo que te entregamos para lanzar el beneficio.</p>
      </div>
      <div class="reqs">
        <div class="reqs__col reqs__col--main">
          <h3>Requisitos de la empresa</h3>
          <p>${tbd('Requisitos definitivos: por confirmar con Kredit')}</p>
          <ul class="checklist">
            <li><span class="checklist__icon">${ic('building')}</span><span><strong>Empresa o institución en Panamá</strong><span class="d">Empresas privadas e instituciones con colaboradores en planilla.</span></span></li>
            <li><span class="checklist__icon">${ic('users')}</span><span><strong>Tamaño del equipo</strong><span class="d">${tbd('Número mínimo de colaboradores: por confirmar')}</span></span></li>
            <li><span class="checklist__icon">${ic('calendar')}</span><span><strong>Fechas de pago definidas</strong><span class="d">Para programar los descuentos de cada quincena.</span></span></li>
            <li><span class="checklist__icon">${ic('user')}</span><span><strong>Un contacto de RR. HH. o planilla</strong><span class="d">Para confirmar colaboradores activos y aplicar descuentos.</span></span></li>
          </ul>
        </div>
        <div class="reqs__col reqs__col--maybe">
          <h3>El kit de activación</h3>
          <p>Un beneficio solo funciona si tu equipo lo conoce. Con la afiliación recibes un kit listo para comunicarlo.</p>
          <ul class="checklist">
            <li><span class="checklist__icon">${ic('qr')}</span><span><strong>Afiches con código QR</strong><span class="d">Para comedores, áreas comunes y sucursales.</span></span></li>
            <li><span class="checklist__icon">${ic('chat')}</span><span><strong>Mensajes listos</strong><span class="d">Para WhatsApp, correo interno e intranet.</span></span></li>
            <li><span class="checklist__icon">${ic('slides')}</span><span><strong>Presentación breve</strong><span class="d">Para explicar el beneficio en una reunión de equipo.</span></span></li>
            <li><span class="checklist__icon">${ic('calc')}</span><span><strong>Página para colaboradores</strong><span class="d">Con calculadora de cuota y solicitud en línea.</span></span></li>
          </ul>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================= AFILIACIÓN -->
  <section class="section" id="afiliacion" aria-labelledby="afiliacion-title">
    <div class="wrap how">
      <div class="how__copy">
        <div class="section-head">
          <h2 class="h2" id="afiliacion-title">De la afiliación al primer descuento</h2>
          <p>Tu empresa se afilia una vez; desde ahí, cada colaborador solicita por su cuenta y Kredit hace el resto. ${tbd('Tiempo estimado de afiliación: por confirmar con Kredit')}</p>
        </div>
        <ol class="vsteps">
          <li><span class="vsteps__num" aria-hidden="true">01</span><div><h3>Nos cuentas de tu empresa</h3><p>Completa el formulario de afiliación o escríbenos. Un ejecutivo de convenios te contacta.</p></div></li>
          <li><span class="vsteps__num" aria-hidden="true">02</span><div><h3>Presentación y convenio</h3><p>Presentamos el beneficio a RR. HH. y finanzas, y revisamos juntos el borrador del convenio.</p></div></li>
          <li><span class="vsteps__num" aria-hidden="true">03</span><div><h3>Lanzamiento con tu equipo</h3><p>Comunicas el beneficio con el kit de activación. Cada colaborador decide si solicita.</p></div></li>
          <li><span class="vsteps__num" aria-hidden="true">04</span><div><h3>Descuento en planilla</h3><p>La cuota fija de cada crédito se descuenta en planilla y se remite a Kredit según lo acordado.</p></div></li>
        </ol>
        <div class="btn-row">
          <a class="btn btn--blue btn--lg" href="${landing.empresas}">Afiliar mi empresa${ic('arrow-r')}</a>
          ${wa('Hola Kredit, quiero afiliar mi empresa.', 'link-arrow', 'Escribir por WhatsApp')}
        </div>
      </div>
      <div class="how__media">
        ${photo('firma-convenio', 'Apretón de manos sobre una mesa de reuniones con documentos', { ratio: 'tall', sizes: '(max-width: 860px) 92vw, 520px' })}
      </div>
    </div>
  </section>

  <!-- ========================================================== PREGUNTAS -->
  <section class="section section--white" id="preguntas" aria-labelledby="faq-title">
    <div class="wrap">
      <div class="section-head section-head--center">
        <h2 class="h2" id="faq-title">Preguntas de RR. HH. y finanzas</h2>
        <p>Lo que suelen preguntarnos las empresas antes de afiliarse.</p>
      </div>
      ${h.faqBlock(['afiliar', 'empresa-hace', 'costo', 'impago', 'datos-empresa', 'obligatorio', 'tiempo-afiliacion', 'que-empresas'])}
    </div>
  </section>

  ${h.ctaFinal({
    title: '¿Buscas una solución financiera para tu equipo?',
    text: 'Contáctanos: nuestro equipo te guiará en el proceso de afiliación, sin compromiso.',
    actions: `<a class="btn btn--white btn--lg" href="${landing.empresas}">${ic('building')}Afiliar mi empresa</a>
        ${wa('Hola Kredit, quiero afiliar mi empresa.', 'btn btn--outline-light btn--lg', `${ic('wa')}Escribir por WhatsApp`)}`,
  })}
`;

  return {
    title: 'Convenio de descuento por planilla para empresas · Kredit',
    description: 'Vista previa: afilia tu empresa a Kredit y ofrece a tu equipo créditos con cuota fija descontada de la planilla. Qué hace Kredit, qué hace RR. HH., requisitos y pasos.',
    body,
  };
};
