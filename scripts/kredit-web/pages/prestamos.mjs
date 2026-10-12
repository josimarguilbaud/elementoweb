// /prestamos/: el préstamo para colaboradores. Montos, cómo pagas, calculadora completa,
// requisitos, metas, preguntas e «Información importante del crédito».
export default (h) => {
  const { ic, link, landing, photo, wa, money } = h;
  const plazos = [4, 6, 9, 12, 18, 24];
  const base = h.ex(1000, 18, 12);
  const ejemplos = [[300, 6], [1000, 12], [3000, 24]].map(([m, n]) => ({ m, n, e: h.ex(m, 18, n) }));
  const tbd = (t) => `<span class="tbd">[${t}]</span>`;

  const ficha = `<div class="ficha">
          <p class="ficha__label">Ficha del préstamo</p>
          <p class="ficha__big">B/. 50 – <span>3,000</span></p>
          <dl class="ledger">
            <div><dt>Para</dt><dd>Empresas afiliadas</dd></div>
            <div><dt>Pago</dt><dd>Planilla, cada quincena</dd></div>
            <div><dt>Cuota</dt><dd>Fija</dd></div>
            <div><dt>Desembolso</dt><dd>Mismo día de la aprobación</dd></div>
            <div><dt>Abonos</dt><dd>Sin cargo adicional</dd></div>
          </dl>
          <p class="ficha__foot">Crédito sujeto a evaluación. <a href="#info-credito">Información importante del crédito</a></p>
        </div>`;

  const body = `
  ${h.pageHero({
    crumb: 'Préstamos',
    title: 'Préstamos personales con descuento por planilla',
    lead: 'De B/. 50 a B/. 3,000 para colaboradores de empresas afiliadas a Kredit. Pagas con una cuota fija cada quincena y recibes el depósito el mismo día de la aprobación.',
    actions: `<a class="btn btn--white btn--lg" href="${landing.prestamos}">Solicitar ahora${ic('arrow-r')}</a>
          <a class="link-arrow" href="#calculadora">Calcular mi cuota</a>`,
    aside: ficha,
  })}

  <!-- ============================================================= MONTOS -->
  <section class="section section--white" aria-labelledby="montos-title">
    <div class="wrap">
      <div class="amount-head">
        <h2 class="h2" id="montos-title">Pide lo que necesitas y conoce tu cuota desde el inicio</h2>
        <p>El monto y el plazo se ajustan a tus necesidades y a tu capacidad de pago. Estos son tres ejemplos con la tasa de ejemplo de la calculadora.</p>
      </div>
      <div class="amount-rule" aria-label="Montos de B/. 50 a B/. 3,000">
        <p class="amount-rule__end"><small>Desde</small>B/. 50</p>
        <span class="amount-rule__mid" aria-hidden="true"></span>
        <p class="amount-rule__end amount-rule__end--max"><small>Hasta</small><span>B/. 3,000</span></p>
      </div>
      <ul class="tickets">
        ${ejemplos.map(({ m, n, e }) => `<li class="ticket">
          <p class="ticket__meta">Ejemplo · ${n} meses</p>
          <p class="ticket__amount">${money(m).replace('.00', '')}</p>
          <p class="ticket__q"><span>Por quincena</span><strong>${money(e.quincena)}</strong></p>
          <p class="ticket__total">Total estimado ${money(e.total)}</p>
        </li>`).join('\n        ')}
      </ul>
      <p class="tickets-note">Ejemplos con tasa nominal de 18% anual, sin cargos ni seguros: la cuota final depende de la evaluación. ${tbd('Plazo mínimo y máximo y tasa efectiva: por confirmar con Kredit')}</p>
    </div>
  </section>

  <!-- ========================================================= CÓMO PAGAS -->
  <section class="section" id="como-pagas" aria-labelledby="pagas-title">
    <div class="wrap pay-grid">
      <div>
        <div class="section-head">
          <h2 class="h2" id="pagas-title">Cómo pagas: tu planilla se encarga</h2>
          <p>Tu empresa descuenta la cuota de tu planilla en cada quincena y la remite a Kredit. No tienes que acordarte de fechas de pago.</p>
        </div>
        <ul class="pay-points">
          <li>${ic('receipt')}<span><strong>Cuota fija.</strong> Es la misma en cada descuento hasta terminar de pagar.</span></li>
          <li>${ic('wallet')}<span><strong>Abonos sin cargo adicional.</strong> Puedes abonar o cancelar tu crédito por completo cuando quieras.</span></li>
          <li>${ic('login')}<span><strong>Tu saldo en línea.</strong> En el <a href="${link('accede-a-tu-cuenta')}">portal de clientes</a> ves tus pagos y cuánto te falta.</span></li>
          <li>${ic('briefcase')}<span><strong>Si cambias de trabajo,</strong> avisa a tu asesor antes de tu última quincena. ${tbd('Procedimiento: por confirmar con Kredit')}</span></li>
        </ul>
      </div>
      <div>
        ${photo('comercio-colaborador', 'Colaborador de un minisúper acomoda productos en un estante con una sonrisa', { sizes: '(max-width: 860px) 92vw, 560px' })}
      </div>
    </div>
    <div class="wrap">
      <div class="payline payline--block" data-payline>
        <h3 class="payline__title">Qué pasa después de solicitar</h3>
        ${h.paylineList()}
      </div>
    </div>
  </section>

  <!-- ========================================================= CALCULADORA -->
  <section class="section section--ice" id="calculadora" aria-labelledby="calc-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="calc-title">Calcula tu cuota quincenal</h2>
        <p>Mueve el monto, elige un plazo y compara. Puedes cambiar la tasa de ejemplo para ver cómo cambia la cuota.</p>
      </div>
      <div class="calc-full" data-calc data-calc-sticky>
        <div class="calc-full__in">
          <div class="field">
            <label for="c-monto">¿Cuánto necesitas?</label>
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
              ${plazos.map((n) => `<input class="chip-input" type="radio" name="c-plazo" id="c-pl-${n}" value="${n}"${n === 12 ? ' checked' : ''}><label class="chip" for="c-pl-${n}">${n}</label>`).join('\n              ')}
            </div>
          </fieldset>
          <div class="field">
            <label for="c-tasa">Tasa nominal de ejemplo</label>
            <div class="rate-field"><input class="input" id="c-tasa" type="text" inputmode="decimal" autocomplete="off" value="18" aria-describedby="c-tasa-hint" data-calc-tasa><span>% anual</span></div>
            <p class="hint" id="c-tasa-hint">Solo para comparar: la tasa real la define la evaluación. ${tbd('Tasa de interés efectiva anual máxima: por confirmar con Kredit')}</p>
          </div>
          <p class="calc__fine">${ic('info')}<span>Ejemplo ilustrativo, sin compromiso: la cuota final depende de la evaluación y no incluye cargos ni seguros. <a href="#info-credito">Información importante del crédito</a></span></p>
        </div>
        <div class="calc-full__out">
          <div class="calc-full__big">
            <p class="calc__result-label">Tu cuota quincenal<small>se descuenta de tu planilla</small></p>
            <p class="calc__quincena" data-out="quincena">${money(base.quincena)}</p>
          </div>
          <dl class="ledger">
            <div><dt>Cuota mensual</dt><dd data-out="cuota">${money(base.cuota)}</dd></div>
            <div><dt>Quincenas a pagar</dt><dd data-out="quincenas">24</dd></div>
            <div><dt>Total estimado</dt><dd data-out="total">${money(base.total)}</dd></div>
            <div><dt>Intereses estimados</dt><dd data-out="intereses">${money(base.total - 1000)}</dd></div>
          </dl>
          <div class="compare-wrap">
            <h3 id="compare-title">Compara plazos con este monto</h3>
            <div class="table-scroll">
              <table class="compare" data-calc-compare aria-labelledby="compare-title">
                <thead><tr><th scope="col">Plazo</th><th scope="col">Quincena</th><th scope="col">Mensual</th><th scope="col">Total</th></tr></thead>
                <tbody>
                  ${plazos.map((n) => { const e = h.ex(1000, 18, n); return `<tr${n === 12 ? ' class="is-current"' : ''}><th scope="row">${n} meses</th><td>${money(e.quincena)}</td><td>${money(e.cuota)}</td><td>${money(e.total)}</td></tr>`; }).join('\n                  ')}
                </tbody>
              </table>
            </div>
          </div>
          <p class="sr-only" aria-live="polite" data-calc-live></p>
          <a class="btn btn--blue btn--lg btn--block calc-full__cta" href="${landing.prestamos}" data-calc-cta>Solicitar con esta cuota${ic('arrow-r')}</a>
        </div>
      </div>
    </div>
  </section>

  <!-- ========================================================== REQUISITOS -->
  <section class="section section--white" id="requisitos" aria-labelledby="req-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="req-title">Requisitos, sin papeleo de más</h2>
        <p>Para empezar te bastan tres cosas. Si tu caso necesita algún documento adicional, tu asesor te lo dice antes de seguir.</p>
      </div>
      <div class="reqs">
        <div class="reqs__col reqs__col--main">
          <h3>Lo indispensable</h3>
          <p>Lo que pide Kredit a todos los solicitantes.</p>
          <ul class="checklist">
            <li><span class="checklist__icon">${ic('id')}</span><span><strong>Cédula vigente</strong><span class="d">Tu documento de identidad, sin vencer.</span></span></li>
            <li><span class="checklist__icon">${ic('briefcase')}</span><span><strong>Estar activo en una empresa afiliada</strong><span class="d">En planilla, porque la cuota se descuenta de tu salario.</span></span></li>
            <li><span class="checklist__icon">${ic('doc')}</span><span><strong>La solicitud digital</strong><span class="d">Se llena en línea, desde tu celular.</span></span></li>
          </ul>
        </div>
        <div class="reqs__col reqs__col--maybe">
          <h3>Lo que tu asesor podría pedirte</h3>
          <p>Según tu caso. ${tbd('Lista de documentos: por confirmar con Kredit')}</p>
          <ul class="checklist">
            <li><span class="checklist__icon">${ic('clipboard')}</span><span><strong>Carta de trabajo</strong><span class="d">Reciente, con tu cargo y salario.</span></span></li>
            <li><span class="checklist__icon">${ic('receipt')}</span><span><strong>Último talonario</strong><span class="d">O tu comprobante de pago más reciente.</span></span></li>
            <li><span class="checklist__icon">${ic('layers')}</span><span><strong>Ficha de la CSS</strong><span class="d">Si hace falta confirmar tu historial laboral.</span></span></li>
            <li><span class="checklist__icon">${ic('search')}</span><span><strong>Autorización para consultar la APC</strong><span class="d">Va en la solicitud y la lees antes de enviarla.</span></span></li>
          </ul>
        </div>
      </div>
      <p class="needs-line">¿Tu empresa todavía no está afiliada? <a href="${link('empresas')}">Recomiéndala a Kredit</a> y podrás pagar con descuento de planilla.</p>
    </div>
  </section>

  <!-- ============================================================== METAS -->
  <section class="section" id="metas" aria-labelledby="metas-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="metas-title">Opciones de crédito para tus metas</h2>
        <p>Los momentos importantes no esperan. Planifícalos con una cuota que conoces desde el inicio.</p>
      </div>
      <div class="metas-mosaic">
        ${photo('familia-metas', 'Pareja joven revisa su presupuesto en la mesa del comedor de su casa', { sizes: '(max-width: 860px) 92vw, 680px', cls: 'photo--fill' })}
        ${photo('estudiante-metas', 'Estudiante universitario camina por un campus con árboles tropicales', { ratio: 'tall', sizes: '(max-width: 860px) 92vw, 470px', cls: 'photo--fill' })}
      </div>
      <ul class="goal-list">
        <li>${ic('cap')}<div><h3>Estudios</h3><p>Matrícula, cursos, útiles o tu laptop.</p></div></li>
        <li>${ic('home')}<div><h3>Tu hogar</h3><p>Mejoras, muebles o equipos.</p></div></li>
        <li>${ic('pulse')}<div><h3>Salud</h3><p>Tratamientos y gastos médicos.</p></div></li>
        <li>${ic('layers')}<div><h3>Ordena tus deudas</h3><p>Una sola cuota fija, fácil de seguir.</p></div></li>
        <li>${ic('sparkles')}<div><h3>Celebraciones</h3><p>Graduaciones, bodas y cumpleaños.</p></div></li>
        <li>${ic('umbrella')}<div><h3>Imprevistos</h3><p>Para lo que no estaba en tus planes.</p></div></li>
      </ul>
    </div>
  </section>

  <!-- ========================================================== PREGUNTAS -->
  <section class="section section--white" id="preguntas" aria-labelledby="faq-title">
    <div class="wrap">
      <div class="section-head section-head--center">
        <h2 class="h2" id="faq-title">Preguntas sobre tu préstamo</h2>
      </div>
      ${h.faqBlock(['quien', 'requisitos', 'montos', 'tasa', 'compromiso', 'pago', 'quincena', 'abonos', 'trabajo', 'apc'])}
      <p class="faq-more"><a class="link-arrow" href="${link('preguntas-frecuentes')}">Ver todas las preguntas</a></p>
    </div>
  </section>

  <!-- ============================== INFORMACIÓN IMPORTANTE DEL CRÉDITO -->
  <section class="legal-full" id="info-credito" aria-labelledby="legal-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="legal-title">Información importante del crédito</h2>
        <p>La letra pequeña, en grande. Todo crédito está sujeto a evaluación y a la verificación de tus datos; antes de firmar recibes por escrito las condiciones completas.</p>
      </div>
      <div class="legal-full__grid">
        <dl class="legal-table">
          <div><dt>Montos</dt><dd>De B/. 50 a B/. 3,000</dd></div>
          <div><dt>Plazo mínimo y máximo</dt><dd>${tbd('Dato por confirmar con Kredit; la calculadora usa de 4 a 24 meses como ejemplo')}</dd></div>
          <div class="span-2"><dt>Tasa de interés efectiva anual máxima</dt><dd>${tbd('Dato por confirmar con Kredit')}</dd></div>
          <div class="span-2"><dt>Ejemplo representativo</dt><dd>${tbd('Préstamo de B/. —— a —— meses, tasa de interés efectiva ——%, cuota de B/. ——, costo total con todos los cargos B/. ——: dato por confirmar con Kredit')}</dd></div>
          <div><dt>Comisiones y cargos</dt><dd>${tbd('Comisiones, seguros y FECI si aplican: dato por confirmar')}</dd></div>
          <div><dt>Abonos y cancelación anticipada</dt><dd>Sin cargo adicional</dd></div>
          <div class="span-2"><dt>Atrasos en el pago</dt><dd>Pueden generar cargos por mora y afectar tu historial de crédito. ${tbd('Cargo por mora: dato por confirmar')}</dd></div>
          <div><dt>Razón social</dt><dd>CREDU HOLDINGS, S.A. · RUC 155770767-2-2025 DV9</dd></div>
          <div><dt>Licencia</dt><dd>Empresa financiera autorizada por el MICI (Dirección General de Empresas Financieras), Resolución No. 638 del 23 de septiembre de 2025</dd></div>
          <div class="span-2"><dt>Dirección física</dt><dd>San Francisco, Urbanización Punta Pacífica, Edificio Torre de las Américas, Torre B, Oficina 602-B, Ciudad de Panamá. ${tbd('Confirmar dirección oficial: la política de privacidad indica Calle 1ra La Cresta, P.H. El Alcázar, Bella Vista')}</dd></div>
        </dl>
        <div>
          <div class="callout">
            ${ic('shield')}
            <div>
              <strong>Kredit nunca te pedirá pagos por adelantado para aprobar tu crédito.</strong>
              <p>Si alguien te lo pide en nombre de Kredit, no pagues y repórtalo a nuestros canales oficiales.</p>
            </div>
          </div>
          <div class="channels">
            <h3>Canales oficiales</h3>
            <ul>
              <li>${ic('wa')}<span>WhatsApp +507 6997-5664</span></li>
              <li>${ic('mail')}<a href="mailto:ventas@kredit.com.pa">ventas@kredit.com.pa</a></li>
              <li>${ic('ig')}<span>Instagram @kredit_pa</span></li>
              <li>${ic('login')}<span>kredit.com.pa/app/ <span class="muted">· portal de clientes</span></span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

  ${h.ctaFinal({
    title: 'Tu préstamo, con la cuota clara desde el primer día',
    text: 'Solicita en línea con tu cédula. Un asesor de Kredit revisa tu solicitud y te acompaña hasta el depósito.',
    actions: `<a class="btn btn--white btn--lg" href="${landing.prestamos}">Solicitar mi préstamo${ic('arrow-r')}</a>
        ${wa('Hola Kredit, quiero información sobre un préstamo.', 'btn btn--outline-light btn--lg', `${ic('wa')}Escribir por WhatsApp`)}`,
  })}
`;

  return {
    title: 'Préstamos personales por planilla de B/. 50 a B/. 3,000 · Kredit',
    description: 'Vista previa: préstamo personal para colaboradores de empresas afiliadas a Kredit. Calcula tu cuota quincenal, revisa requisitos y la información importante del crédito.',
    body,
    quincenas: true,
    sticky: true,
  };
};
