// Inicio (/): hero con comprobante, regla de quincenas, dos puertas, cómo funciona, ¿para qué lo
// necesitas? (metas con foto), confianza con los reguladores, portal de clientes, preguntas y llamado final.
export default (h) => {
  const { ic, link, landing, photo, wa, seal, money } = h;
  const base = h.ex(1000, 18, 12);
  const plazos = [4, 6, 9, 12, 18, 24];

  // Metas: cada tarjeta lleva a la calculadora completa de /prestamos/. Sin promesas de aprobación.
  const USES = [
    { img: 'meta-celebracion', title: 'Celebraciones', text: 'Una graduación, un cumpleaños o una boda, con una cuota que conoces desde el inicio.',
      alt: 'Familia panameña celebra en casa la graduación de su hija con un abrazo, globos y un pastel' },
    { img: 'estudiante-metas', title: 'Estudios', text: 'Matrícula, cursos, útiles o la laptop para la universidad.', cls: 'use__photo--top',
      alt: 'Estudiante universitario camina por un campus con palmeras en Ciudad de Panamá, con su cuaderno en la mano' },
    { img: 'familia-metas', title: 'Tu hogar', text: 'Mejoras, muebles o equipos para la casa, con una cuota fija por planilla.',
      alt: 'Pareja joven revisa su presupuesto en la mesa del comedor de su casa' },
    { img: 'meta-salud', title: 'Salud', text: 'Consultas, exámenes o tratamientos, con el costo total claro antes de firmar.',
      alt: 'Hombre espera tranquilo su turno en la sala de espera de una clínica, con una carpeta en las manos' },
    { img: 'meta-deudas', title: 'Ordena tus deudas', text: 'Ponte al día y paga una sola cuota fija, fácil de seguir.',
      alt: 'Mujer ordena sus recibos y cuentas en la mesa de la cocina y anota en una libreta' },
    { img: 'meta-viajes', title: 'Viajes', text: 'Ese viaje en familia o en pareja, con los pagos calculados desde antes de salir.',
      alt: 'Pareja con mochilas camina por un sendero junto al mar en Bocas del Toro, entre palmeras' },
    { img: 'meta-imprevistos', title: 'Imprevistos', text: 'La reparación del carro o ese gasto que no estaba en tus planes.',
      alt: 'Cliente conversa con un mecánico junto a su carro con el capó abierto en un taller' },
  ];

  const jsonld = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://kredit.com.pa/#organizacion',
        name: 'Kredit',
        legalName: 'CREDU HOLDINGS, S.A.',
        url: 'https://kredit.com.pa/',
        email: 'ventas@kredit.com.pa',
        telephone: '+507 6997-5664',
        taxID: '155770767-2-2025 DV9',
        slogan: 'Tu crédito, sin vueltas.',
        sameAs: ['https://www.instagram.com/kredit_pa/'],
      },
      {
        '@type': 'FinancialService',
        '@id': 'https://kredit.com.pa/#servicio',
        name: 'Kredit · préstamos personales por descuento de planilla',
        description: 'Préstamos personales de B/. 50 a B/. 3,000 para colaboradores de empresas afiliadas, con cuota fija descontada por planilla y desembolso el mismo día de la aprobación.',
        url: 'https://kredit.com.pa/',
        provider: { '@id': 'https://kredit.com.pa/#organizacion' },
        areaServed: { '@type': 'Country', name: 'Panamá' },
        telephone: '+507 6997-5664',
        email: 'ventas@kredit.com.pa',
        address: {
          '@type': 'PostalAddress',
          streetAddress: 'Torre de las Américas, Torre B, Oficina 602-B, Punta Pacífica, San Francisco',
          addressLocality: 'Ciudad de Panamá',
          addressCountry: 'PA',
        },
      },
    ],
  };

  const body = `
  <!-- =========================================================== HERO -->
  <section class="hero hero--home" aria-labelledby="hero-title">
    <div class="wrap hero__grid">
      <div class="hero__copy">
        <h1 id="hero-title">Tu crédito, <span class="hl nowrap">sin vueltas.</span></h1>
        <p class="hero__lead">Préstamos de B/. 50 a B/. 3,000 para colaboradores de empresas afiliadas<span class="hide-m">, con cuota fija descontada de tu planilla y depósito el mismo día de la aprobación</span>.</p>
        <ul class="hero__facts">
          <li>${ic('check')}Cuota fija cada quincena, sin sorpresas.</li>
          <li>${ic('check')}Ves la tasa, los cargos y el costo total antes de firmar.</li>
          <li>${ic('check')}Abonos o cancelación anticipada sin cargo adicional.</li>
        </ul>
        <div class="hero__actions">
          <a class="btn btn--white btn--lg" href="${landing.prestamos}">Solicitar mi préstamo${ic('arrow-r')}</a>
          <a class="btn btn--outline-light btn--lg" href="${link('empresas')}">${ic('building')}Soy empresa</a>
        </div>
        ${seal()}
      </div>

      <div class="hero__aside">
        <div class="card lf-card calc-card" id="calculadora" data-calc data-tasa="18" data-form-card data-sticky-hide>
          <div class="lf-head">
            <div class="lf-head__top">
              <p class="lf-step-label">Calcula tu cuota</p>
              <span class="badge-demo">${ic('info')}Ejemplo</span>
            </div>
          </div>
          <div class="calc" role="group" aria-labelledby="calc-title">
            <h2 class="lf-title" id="calc-title">¿Cuánto necesitas?</h2>
            <div class="field">
              <label class="sr-only" for="c-monto">Monto del préstamo en balboas</label>
              <div class="affix money-xl">
                <span class="affix__pre" aria-hidden="true">B/.</span>
                <input class="input" id="c-monto" type="text" inputmode="decimal" autocomplete="off" value="1,000" aria-describedby="c-monto-scale c-monto-err" data-calc-monto>
              </div>
              <input class="range" id="c-range" type="range" min="50" max="3000" step="50" value="1000" aria-label="Elegir el monto con el control deslizante" aria-describedby="c-monto-scale" data-calc-range>
              <div class="range__scale" id="c-monto-scale"><span>B/. 50</span><span>Montos de B/. 50 a B/. 3,000</span><span>B/. 3,000</span></div>
              <p class="field-error" id="c-monto-err" data-calc-error hidden></p>
            </div>
            <fieldset class="field">
              <legend>Plazo en meses <span class="opt">(ejemplo)</span></legend>
              <div class="chips">
                ${plazos.map((n) => `<input class="chip-input" type="radio" name="c-plazo" id="c-pl-${n}" value="${n}"${n === 12 ? ' checked' : ''}><label class="chip" for="c-pl-${n}">${n}</label>`).join('\n                ')}
              </div>
            </fieldset>
            <div class="calc__result">
              <div class="calc__big">
                <p class="calc__result-label">Tu cuota quincenal<small>se descuenta de tu planilla</small></p>
                <p class="calc__quincena" data-out="quincena">${money(base.quincena)}</p>
              </div>
              <dl class="ledger">
                <div><dt>Cuota mensual</dt><dd data-out="cuota">${money(base.cuota)}</dd></div>
                <div><dt>Total estimado</dt><dd data-out="total">${money(base.total)}</dd></div>
                <div><dt>Tasa nominal de ejemplo</dt><dd>18% anual</dd></div>
              </dl>
            </div>
            <p class="sr-only" aria-live="polite" data-calc-live></p>
            <p class="calc__fine">${ic('info')}<span>Ejemplo ilustrativo, sin compromiso: la cuota final depende de la evaluación y no incluye cargos ni seguros.</span></p>
            <a class="btn btn--blue btn--lg btn--block calc-card__cta" href="${landing.prestamos}" data-calc-cta>Solicitar con esta cuota${ic('arrow-r')}</a>
            <p class="calc-card__more"><a href="${link('prestamos')}#calculadora">Comparar plazos en la calculadora completa</a></p>
          </div>
        </div>
        ${seal('seal--ink seal--m')}
      </div>
    </div>
  </section>

  <!-- ===================================================== REGLA DE QUINCENAS -->
  <section class="payline" aria-labelledby="payline-title" data-payline>
    <div class="wrap">
      <h2 class="sr-only" id="payline-title">Qué pasa después de solicitar</h2>
      ${h.paylineList()}
    </div>
  </section>

  <!-- ======================================================== DOS PUERTAS -->
  <section class="section section--tight-top" aria-labelledby="puertas-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="puertas-title">¿Eres colaborador o eres empresa?</h2>
        <p>Kredit funciona con un convenio: tu empresa se afilia, tú solicitas en línea y la cuota se descuenta de la planilla. Cada lado tiene su camino.</p>
      </div>
      <div class="doors">
        <article class="door" aria-labelledby="door-personas">
          ${photo('colaboradora-oficina', 'Colaboradora en su escritorio de una oficina en Ciudad de Panamá revisa su celular con una sonrisa tranquila', { sizes: '(max-width: 860px) 92vw, 580px' })}
          <div class="door__body">
            <h3 class="door__title" id="door-personas">Para colaboradores</h3>
            <p>Pide de B/. 50 a B/. 3,000 y págalo con una cuota fija que se descuenta de tu planilla cada quincena.</p>
            <ul class="door__list">
              <li>${ic('check')}Solicitud digital con tu cédula</li>
              <li>${ic('check')}Depósito el mismo día de la aprobación</li>
              <li>${ic('check')}Abonos y cancelación sin cargo adicional</li>
            </ul>
            <div class="door__actions">
              <a class="btn btn--blue" href="${link('prestamos')}">Ver préstamos${ic('arrow-r')}</a>
              <a class="link-arrow" href="${landing.prestamos}">Solicitar ahora</a>
            </div>
          </div>
        </article>
        <article class="door door--navy" aria-labelledby="door-empresas">
          ${photo('rrhh-presentacion', 'Gerente de recursos humanos hace una presentación a un grupo de colaboradores en una sala de reuniones con vista a la ciudad', { sizes: '(max-width: 860px) 92vw, 580px' })}
          <div class="door__body">
            <h3 class="door__title" id="door-empresas">Para empresas</h3>
            <p>Ofrece un beneficio de valor a tus colaboradores sin gestionar préstamos internos: Kredit evalúa, desembolsa y atiende; tu planilla aplica el descuento acordado.</p>
            <ul class="door__list">
              <li>${ic('check')}Un beneficio voluntario para tu equipo</li>
              <li>${ic('check')}Operación simple para RR. HH. y planilla</li>
              <li>${ic('check')}Un ejecutivo de convenios te acompaña</li>
            </ul>
            <div class="door__actions">
              <a class="btn btn--white" href="${link('empresas')}">Conocer el convenio${ic('arrow-r')}</a>
              <a class="link-arrow" href="${landing.empresas}">Afiliar mi empresa</a>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>

  <!-- ========================================================= CÓMO FUNCIONA -->
  <section class="section section--white" id="como-funciona" aria-labelledby="como-title">
    <div class="wrap how">
      <div class="how__copy">
        <div class="section-head">
          <h2 class="h2" id="como-title">De la solicitud al depósito, en cuatro pasos</h2>
          <p>Todo empieza en línea, desde tu celular. Un asesor de Kredit te acompaña hasta el depósito.</p>
        </div>
        <ol class="vsteps">
          <li><span class="vsteps__num" aria-hidden="true">01</span><div><h3>Calcula tu cuota</h3><p>Elige el monto y el plazo y ve al instante cuánto pagarías cada quincena.</p></div></li>
          <li><span class="vsteps__num" aria-hidden="true">02</span><div><h3>Solicita en línea</h3><p>Llena la solicitud digital con tu cédula, desde tu celular.</p></div></li>
          <li><span class="vsteps__num" aria-hidden="true">03</span><div><h3>Un asesor te contacta</h3><p>Revisa tu solicitud, resuelve tus dudas y te explica por escrito la tasa, los cargos y el costo total.</p></div></li>
          <li><span class="vsteps__num" aria-hidden="true">04</span><div><h3>Recibes tu dinero</h3><p>El depósito se hace el mismo día de la aprobación y la cuota se descuenta de tu planilla.</p></div></li>
        </ol>
        <p class="needs-line"><strong>Lo que necesitas:</strong> cédula vigente · estar activo en una empresa afiliada · la solicitud digital.</p>
      </div>
      <div class="how__media">
        <div class="how__shot how__shot--a">
          ${photo('solicitud-parada', 'Hombre en una parada de bus de Ciudad de Panamá revisa su celular mientras espera', { sizes: '(max-width: 860px) 92vw, 520px' })}
          <p class="how__cap"><span>02</span>Solicitas desde tu celular, donde estés.</p>
        </div>
        <div class="how__shot how__shot--b">
          ${photo('deposito-celular', 'Colaborador en el pasillo de su oficina mira su celular con una sonrisa', { sizes: '(max-width: 860px) 92vw, 520px' })}
          <p class="how__cap"><span>04</span>El depósito llega el mismo día de la aprobación.</p>
        </div>
      </div>
    </div>
  </section>

  <!-- ===================================================== ¿PARA QUÉ LO NECESITAS? -->
  <section class="section" id="para-que" aria-labelledby="usos-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="usos-title">¿Para qué lo necesitas?</h2>
        <p>Tú decides en qué usarlo. Elige tu meta y calcula cuánto pagarías cada quincena, con montos de B/. 50 a B/. 3,000.</p>
      </div>
      <ul class="uses">
        ${USES.map((u) => `<li class="use">
          ${photo(u.img, u.alt, { sizes: '(max-width: 640px) 300px, (max-width: 999px) 46vw, 380px', cls: u.cls || '' })}
          <div class="use__body">
            <h3 class="use__title"><a href="${link('prestamos')}#calculadora">${u.title}<span class="sr-only">: calcula tu cuota</span></a></h3>
            <p>${u.text}</p>
            <span class="use__go" aria-hidden="true">Calcular mi cuota</span>
          </div>
        </li>`).join('\n        ')}
        <li class="uses__more">
          ${h.kGhost}
          <h3 class="use__title">¿Otra meta?</h3>
          <p>Sea cual sea, calcula tu cuota quincenal con el monto y el plazo que necesitas.</p>
          <a class="btn btn--white" href="${link('prestamos')}#calculadora">Abrir la calculadora${ic('arrow-r')}</a>
        </li>
      </ul>
      <p class="uses__hint" aria-hidden="true">Desliza para ver más metas</p>
    </div>
  </section>

  <!-- ============================================================ CONFIANZA -->
  <section class="section section--navy trust" aria-labelledby="trust-title">
    <div class="wrap trust__grid">
      <div class="trust__copy">
        <h2 class="h2" id="trust-title">Un crédito formal, con licencia y todo por escrito</h2>
        <p class="trust__lead">Kredit es una empresa financiera autorizada por el MICI. Antes de firmar ves la tasa, los cargos y el costo total: la letra pequeña, en grande.</p>
        ${h.regs('regs--trust')}
        <p class="trust__more"><a class="link-arrow" href="${link('nosotros')}#licencia">Conoce nuestra licencia</a></p>
      </div>
      <dl class="ledger-lg">
        <div><dt>Licencia</dt><dd>Empresa financiera autorizada por la Dirección General de Empresas Financieras del MICI, Resolución No. 638 del 23 de septiembre de 2025.</dd></div>
        <div><dt>Tus datos</dt><dd>Los tratamos conforme a la Ley 81 de 2019 de protección de datos personales, solo para gestionar tu crédito.</dd></div>
        <div><dt>Pagos por adelantado</dt><dd><strong>Nunca.</strong> Kredit nunca te pedirá pagos por adelantado para aprobar tu crédito.</dd></div>
        <div><dt>Condiciones</dt><dd>La tasa de interés efectiva, los cargos y el costo total, por escrito y antes de firmar.</dd></div>
        <div><dt>Canales oficiales</dt><dd><span class="mono">WhatsApp +507 6997-5664</span> · ventas@kredit.com.pa · Instagram @kredit_pa</dd></div>
      </dl>
    </div>
  </section>

  <!-- ===================================================== ACCEDE A TU CUENTA -->
  <section class="section section--ice" id="portal" aria-labelledby="portal-title">
    <div class="wrap split portal-split">
      <div class="split__media acct-stage">
        ${h.acctMock()}
      </div>
      <div>
        <div class="section-head">
          <h2 class="h2" id="portal-title">Accede a tu cuenta</h2>
          <p>Si ya eres cliente, ingresa con tu cédula al portal y gestiona tus créditos en línea: consulta tu saldo y tus pagos, y solicita un crédito adicional cuando lo necesites.</p>
        </div>
        <ul class="ticks ticks--compact">
          <li><span class="tile" aria-hidden="true">01</span><div><h3>Tu saldo al día</h3><p>Cuánto te falta por pagar, sin llamar a nadie.</p></div></li>
          <li><span class="tile" aria-hidden="true">02</span><div><h3>Tus pagos</h3><p>Cada descuento de planilla aplicado a tu crédito.</p></div></li>
          <li><span class="tile" aria-hidden="true">03</span><div><h3>Crédito adicional</h3><p>Solicítalo en línea; está sujeto a evaluación.</p></div></li>
        </ul>
        <div class="btn-row">
          <a class="btn btn--navy btn--lg" href="${h.PORTAL}" target="_blank" rel="noopener">${ic('login')}Ingresar al portal<span class="sr-only"> (se abre en otra pestaña)</span></a>
          <a class="link-arrow" href="${link('accede-a-tu-cuenta')}">Cómo funciona el portal</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ============================================================= PREGUNTAS -->
  <section class="section section--white" id="preguntas" aria-labelledby="faq-title">
    <div class="wrap">
      <div class="section-head section-head--center">
        <h2 class="h2" id="faq-title">Preguntas frecuentes</h2>
        <p>Lo que más nos preguntan antes de solicitar.</p>
      </div>
      ${h.faqBlock(['quien', 'requisitos', 'desembolso', 'pago', 'adelanto'])}
      <p class="faq-more"><a class="link-arrow" href="${link('preguntas-frecuentes')}">Ver todas las preguntas</a></p>
    </div>
  </section>

  ${h.ctaFinal({
    title: 'Calcula tu cuota quincenal y solicita desde tu celular',
    text: 'Tu crédito, sin vueltas: un asesor de Kredit te acompaña por WhatsApp hasta el depósito.',
    actions: `<a class="btn btn--white btn--lg" href="${landing.prestamos}">Solicitar mi préstamo${ic('arrow-r')}</a>
        ${wa('Hola Kredit, quiero información sobre un préstamo.', 'btn btn--outline-light btn--lg', `${ic('wa')}Escribir por WhatsApp`)}`,
  })}
`;

  return {
    title: 'Kredit · Préstamos por planilla para colaboradores en Panamá',
    description: 'Vista previa de la web de Kredit: préstamos de B/. 50 a B/. 3,000 para colaboradores de empresas afiliadas, con cuota fija por planilla y depósito el mismo día de la aprobación.',
    body,
    jsonld,
    quincenas: true,
    sticky: true,
  };
};
