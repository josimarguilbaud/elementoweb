// /nosotros/: quiénes somos (texto de Kredit), licencia del MICI en detalle,
// cómo protegemos los datos y datos de la empresa.
export default (h) => {
  const { ic, link, landing, photo } = h;
  const tbd = (t) => `<span class="tbd">[${t}]</span>`;

  const ficha = `<div class="ficha">
          <p class="ficha__label">Kredit en datos</p>
          <p class="ficha__big">Hecha en <span>Panamá</span></p>
          <dl class="ledger">
            <div><dt>Razón social</dt><dd>CREDU HOLDINGS, S.A.</dd></div>
            <div><dt>RUC</dt><dd>155770767-2-2025 DV9</dd></div>
            <div><dt>Licencia</dt><dd>MICI · Res. No. 638</dd></div>
            <div><dt>Desde</dt><dd>23 sep 2025</dd></div>
          </dl>
          <p class="ficha__foot">Empresa financiera autorizada por el Ministerio de Comercio e Industrias.</p>
        </div>`;

  const body = `
  ${h.pageHero({
    crumb: 'Nosotros',
    title: 'Transformamos la manera de acceder a créditos',
    lead: 'Kredit es una fintech panameña con soluciones fáciles, seguras y rápidas. Nuestra prioridad es la transparencia: sin letra pequeña ni costos ocultos.',
    actions: `<a class="btn btn--white btn--lg" href="#licencia">${ic('shield')}Ver nuestra licencia</a>
          <a class="link-arrow" href="${link('contacto')}">Habla con nosotros</a>`,
    aside: ficha,
  })}

  <!-- ======================================================== QUIÉNES SOMOS -->
  <section class="section section--white" aria-labelledby="quienes-title">
    <div class="wrap split split--wide-media">
      <div class="split__media">
        ${photo('equipo-kredit', 'Equipo de trabajo revisa una laptop en una oficina con vista al mar en Punta Pacífica', { sizes: '(max-width: 860px) 92vw, 660px' })}
      </div>
      <div>
        <div class="section-head">
          <h2 class="h2" id="quienes-title">Quiénes somos</h2>
          <p>Kredit es una fintech panameña que transforma la manera de acceder a créditos. Ofrecemos préstamos personales a colaboradores de empresas afiliadas, con cuotas fijas que se descuentan de la planilla.</p>
          <p>Nuestra prioridad es la transparencia: sin letra pequeña ni costos ocultos. Tu solución financiera, en un instante, y explicada de principio a fin.</p>
        </div>
      </div>
    </div>
    <div class="wrap">
      <ul class="values">
        <li><h3><span>01</span>Claridad</h3><p>La letra pequeña, en grande: la tasa, los cargos y el costo total, por escrito antes de firmar.</p></li>
        <li><h3><span>02</span>Rapidez</h3><p>Solicitud digital con tu cédula y desembolso el mismo día de la aprobación.</p></li>
        <li><h3><span>03</span>Formalidad</h3><p>Empresa financiera autorizada por el MICI, con razón social y licencia a la vista.</p></li>
        <li><h3><span>04</span>Cercanía</h3><p>Un asesor que responde por WhatsApp y un portal para ver tu cuenta cuando quieras.</p></li>
      </ul>
    </div>
  </section>

  <!-- ============================================================ PANAMÁ -->
  <section class="section section--tight-top" aria-labelledby="panama-title">
    <div class="wrap">
      <div class="amount-head">
        <h2 class="h2" id="panama-title">Hecha en Panamá, para quienes trabajan en Panamá</h2>
        <p>Hablamos de quincenas, planilla y cédula porque así funciona el trabajo aquí. Por eso el crédito se paga como se cobra el salario: cada quincena.</p>
      </div>
      ${photo('ciudad-panama', 'Vista de la Cinta Costera y las torres de Punta Paitilla y Punta Pacífica al atardecer', { ratio: 'pano', sizes: '(max-width: 1240px) 94vw, 1120px' })}
    </div>
  </section>

  <!-- ============================================================ LICENCIA -->
  <section class="section section--white" id="licencia" aria-labelledby="licencia-title">
    <div class="wrap">
      <div class="cert">
        <div class="cert__stamp">
          ${ic('shield')}
          <span class="cert__k">Empresa financiera autorizada · Resolución</span>
          <span class="cert__num">No. 638</span>
          <span class="cert__date">23 de septiembre de 2025<br>Ministerio de Comercio e Industrias</span>
        </div>
        <div>
          <h2 class="h2" id="licencia-title">Nuestra licencia</h2>
          <p class="cert__lead">Kredit opera como empresa financiera con autorización del Ministerio de Comercio e Industrias (MICI). Estos son los datos, tal como constan en nuestra política de privacidad.</p>
          <dl class="ledger-lg ledger-lg--light">
            <div><dt>Entidad</dt><dd>CREDU HOLDINGS, S.A. (Kredit)</dd></div>
            <div><dt>Autoridad</dt><dd>Dirección General de Empresas Financieras, Ministerio de Comercio e Industrias</dd></div>
            <div><dt>Resolución</dt><dd>No. 638 del 23 de septiembre de 2025</dd></div>
            <div><dt>Marco legal</dt><dd>Ley No. 42 de 23 de julio de 2001, de empresas financieras</dd></div>
            <div><dt>Actividad</dt><dd>Préstamos personales o microcréditos, a través de plataformas digitales</dd></div>
          </dl>
          <p class="cert__verify">${tbd('Enlace para verificar la licencia en el MICI: por confirmar con Kredit')}</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================================================== PROTECCIÓN DE DATOS -->
  <section class="section section--navy" id="datos" aria-labelledby="datos-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="datos-title">Cómo protegemos tus datos</h2>
        <p>Kredit es responsable del tratamiento de los datos personales que recoge en sus plataformas, conforme a la Ley No. 81 de 2019 y el Decreto Ejecutivo No. 285 de 2021.</p>
      </div>
      <ul class="tips">
        <li>${ic('lock')}<div><strong>Medidas de seguridad</strong><span>Medidas técnicas, legales y organizativas para proteger la integridad y la confidencialidad de tu información.</span></div></li>
        <li>${ic('clipboard')}<div><strong>Finalidades claras</strong><span>Evaluar y gestionar tu crédito, prevenir el fraude y cumplir la ley. La publicidad, solo con tu consentimiento previo.</span></div></li>
        <li>${ic('user')}<div><strong>Tus derechos ARCO</strong><span>Acceso, rectificación, cancelación, oposición y portabilidad, escribiendo a protecciondedatos@kredit.com.pa.</span></div></li>
        <li>${ic('shield')}<div><strong>Nunca pagos por adelantado</strong><span>Kredit nunca te pedirá pagos por adelantado. Si alguien lo hace en nuestro nombre, repórtalo.</span></div></li>
      </ul>
      <p class="btn-row"><a class="btn btn--white" href="${link('politica-de-privacidad')}">Leer la política de privacidad${ic('arrow-r')}</a></p>
    </div>
  </section>

  <!-- ===================================================== DATOS DE LA EMPRESA -->
  <section class="section section--white" id="empresa" aria-labelledby="empresa-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="empresa-title">Datos de la empresa</h2>
        <p>Todo lo que necesitas para saber con quién tratas.</p>
      </div>
      <dl class="legal-table legal-table--wide">
        <div><dt>Razón social</dt><dd>CREDU HOLDINGS, S.A. (Kredit)</dd></div>
        <div><dt>RUC</dt><dd>155770767-2-2025 DV9</dd></div>
        <div class="span-2"><dt>Licencia</dt><dd>Empresa financiera autorizada por la Dirección General de Empresas Financieras del MICI, Resolución No. 638 del 23 de septiembre de 2025</dd></div>
        <div class="span-2"><dt>Dirección</dt><dd>Torre de las Américas, Torre B, Oficina 602-B, Punta Pacífica, San Francisco, Ciudad de Panamá. ${tbd('Confirmar dirección oficial: la política de privacidad indica Calle 1ra La Cresta, P.H. El Alcázar, Oficina No. 1 PB, Bella Vista')}</dd></div>
        <div><dt>Ventas y atención</dt><dd><a href="mailto:ventas@kredit.com.pa">ventas@kredit.com.pa</a> · WhatsApp +507 6997-5664</dd></div>
        <div><dt>Protección de datos</dt><dd><a href="mailto:protecciondedatos@kredit.com.pa">protecciondedatos@kredit.com.pa</a></dd></div>
        <div><dt>Instagram</dt><dd><a href="https://www.instagram.com/kredit_pa/" target="_blank" rel="noopener">@kredit_pa</a></dd></div>
        <div><dt>Portal de clientes</dt><dd><a href="${h.PORTAL}" target="_blank" rel="noopener">kredit.com.pa/app/</a></dd></div>
      </dl>
    </div>
  </section>

  ${h.ctaFinal({
    title: 'Tu crédito, sin vueltas',
    text: 'Si trabajas en una empresa afiliada, calcula tu cuota y solicita en línea. Si diriges una empresa, conoce el convenio.',
    actions: `<a class="btn btn--white btn--lg" href="${landing.prestamos}">Solicitar mi préstamo${ic('arrow-r')}</a>
        <a class="btn btn--outline-light btn--lg" href="${link('empresas')}">${ic('building')}Conocer el convenio</a>`,
  })}
`;

  return {
    title: 'Quiénes somos: fintech panameña con licencia del MICI · Kredit',
    description: 'Vista previa: conoce a Kredit (CREDU HOLDINGS, S.A.), fintech panameña autorizada por el MICI, Resolución No. 638 de 2025. Licencia, protección de datos y datos de la empresa.',
    body,
  };
};
