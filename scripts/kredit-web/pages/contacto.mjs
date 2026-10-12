// /contacto/: canales oficiales, formulario en modo demo (data-endpoint vacío: no envía nada),
// dirección (con la diferencia por confirmar), horario por confirmar y aviso antifraude.
export default (h) => {
  const { ic, link, landing, photo, wa } = h;
  const tbd = (t) => `<span class="tbd">[${t}]</span>`;

  const body = `
  ${h.pageHero({
    crumb: 'Contacto',
    title: 'Estamos para ayudarte',
    lead: '¿Tienes dudas sobre tu crédito, ya eres cliente o quieres afiliar tu empresa? Escríbenos por el canal que prefieras: te respondemos por los canales oficiales.',
    actions: `${wa('Hola Kredit, quiero información.', 'btn btn--white btn--lg', `${ic('wa')}Escribir por WhatsApp`)}
          <a class="link-arrow" href="#formulario">Usar el formulario</a>`,
  })}

  <!-- ============================================================ CANALES -->
  <section class="section section--white section--tight-top" aria-labelledby="canales-title">
    <div class="wrap">
      <div class="section-head">
        <h2 class="h2" id="canales-title">Canales oficiales</h2>
        <p>Estos son los únicos canales de Kredit. Si te escriben desde otro número o cuenta, desconfía.</p>
      </div>
      <div class="chan-panel">
        <ul class="chan-list">
          <li class="is-main">
            <span class="chan-list__icon">${ic('wa')}</span>
            <div>
              <h3>WhatsApp</h3>
              <p>Ventas y atención al cliente: dudas, solicitudes y acompañamiento hasta el depósito.</p>
              <p class="chan-list__value">+507 6997-5664</p>
              ${wa('Hola Kredit, quiero información.', 'btn btn--white btn--sm', `${ic('wa')}Escribir ahora`)}
            </div>
          </li>
          <li>
            <span class="chan-list__icon">${ic('mail')}</span>
            <div>
              <h3>Correo de ventas</h3>
              <p>Información de préstamos y del convenio para empresas.</p>
              <p class="chan-list__value"><a href="mailto:ventas@kredit.com.pa">ventas@kredit.com.pa</a></p>
            </div>
          </li>
          <li>
            <span class="chan-list__icon">${ic('lock')}</span>
            <div>
              <h3>Protección de datos</h3>
              <p>Para ejercer tus derechos de acceso, rectificación, cancelación, oposición y portabilidad.</p>
              <p class="chan-list__value"><a href="mailto:protecciondedatos@kredit.com.pa">protecciondedatos@kredit.com.pa</a></p>
            </div>
          </li>
          <li>
            <span class="chan-list__icon">${ic('login')}</span>
            <div>
              <h3>Portal de clientes</h3>
              <p>Tu saldo, tus pagos y el crédito adicional, con tu cédula.</p>
              <p class="chan-list__value"><a href="${h.PORTAL}" target="_blank" rel="noopener">kredit.com.pa/app/</a></p>
            </div>
          </li>
          <li>
            <span class="chan-list__icon">${ic('ig')}</span>
            <div>
              <h3>Instagram</h3>
              <p>Novedades y consejos para tus metas.</p>
              <p class="chan-list__value"><a href="https://www.instagram.com/kredit_pa/" target="_blank" rel="noopener">@kredit_pa</a></p>
            </div>
          </li>
          <li>
            <span class="chan-list__icon">${ic('building')}</span>
            <div>
              <h3>Empresas</h3>
              <p>¿Quieres ofrecer Kredit a tu equipo? Cuéntanos de tu empresa.</p>
              <p class="chan-list__value"><a href="${landing.empresas}">Formulario de afiliación</a></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </section>

  <!-- ===================================================== FORMULARIO Y OFICINA -->
  <section class="section" aria-label="Formulario de contacto y oficina">
    <div class="wrap contact-grid">
      <div class="card contact-card" id="formulario" data-form-card>
        <div class="contact-card__head">
          <h2 id="form-title">Escríbenos</h2>
          <span class="badge-demo">${ic('eye')}Modo demo</span>
        </div>
        <p>Te respondemos por correo o WhatsApp. ${tbd('Tiempo de respuesta: por confirmar con Kredit')}</p>
        <form class="contact-form" id="form-contacto" data-contact-form data-endpoint="" novalidate aria-labelledby="form-title">
          <p class="sr-only" data-form-status aria-live="polite"></p>
          <div class="grid-2">
            <div class="field">
              <label for="k-nombre">Nombre completo</label>
              <input class="input" id="k-nombre" name="nombre" type="text" autocomplete="name" aria-describedby="k-nombre-err">
              <p class="field-error" id="k-nombre-err" data-error-for="nombre" hidden></p>
            </div>
            <div class="field">
              <label for="k-correo">Correo electrónico</label>
              <input class="input" id="k-correo" name="correo" type="email" autocomplete="email" inputmode="email" placeholder="nombre@correo.com" aria-describedby="k-correo-err">
              <p class="field-error" id="k-correo-err" data-error-for="correo" hidden></p>
            </div>
          </div>
          <div class="grid-2">
            <div class="field">
              <label for="k-celular">Celular <span class="opt">(opcional)</span></label>
              <div class="affix affix--tel">
                <span class="affix__pre" aria-hidden="true">+507</span>
                <input class="input" id="k-celular" name="celular" type="tel" inputmode="tel" autocomplete="tel-national" placeholder="6123-4567" aria-describedby="k-celular-err">
              </div>
              <p class="field-error" id="k-celular-err" data-error-for="celular" hidden></p>
            </div>
            <div class="field">
              <label for="k-motivo">Motivo</label>
              <select class="select" id="k-motivo" name="motivo" aria-describedby="k-motivo-err">
                <option value="">Elige una opción</option>
                <option value="prestamo">Quiero un préstamo</option>
                <option value="cliente">Ya soy cliente</option>
                <option value="empresa">Afiliar mi empresa</option>
                <option value="datos">Protección de datos</option>
                <option value="otro">Otro</option>
              </select>
              <p class="field-error" id="k-motivo-err" data-error-for="motivo" hidden></p>
            </div>
          </div>
          <div class="field">
            <label for="k-mensaje">Mensaje</label>
            <textarea class="textarea" id="k-mensaje" name="mensaje" rows="5" aria-describedby="k-mensaje-hint k-mensaje-err"></textarea>
            <p class="hint" id="k-mensaje-hint">No incluyas tu número de cédula ni datos bancarios.</p>
            <p class="field-error" id="k-mensaje-err" data-error-for="mensaje" hidden></p>
          </div>
          <div class="consents">
            <div class="field">
              <label class="check">
                <input type="checkbox" name="acepta_privacidad" value="si" aria-describedby="k-priv-err">
                <span>Acepto la <a href="${link('politica-de-privacidad')}">política de privacidad</a> y el tratamiento de mis datos para responder a mi mensaje, conforme a la Ley 81 de 2019. <span class="req" aria-hidden="true">*</span></span>
              </label>
              <p class="field-error" id="k-priv-err" data-error-for="acepta_privacidad" hidden></p>
            </div>
          </div>
          <div class="hp" aria-hidden="true">
            <label for="k-web">No llenes este campo</label>
            <input id="k-web" name="sitio_web" type="text" tabindex="-1" autocomplete="off">
          </div>
          <p class="lf-submit-error" data-submit-error role="alert" hidden></p>
          <button type="submit" class="btn btn--blue btn--lg btn--block">Enviar mensaje${ic('arrow-r')}</button>
          <p class="lf-secure">${ic('lock')}Modo demo · no se envían datos</p>
        </form>
        <div class="contact-result" data-contact-result hidden tabindex="-1" role="status">
          <p class="contact-result__title" data-result-title>Modo demo: el mensaje no se envió</p>
          <p data-result-text></p>
          <p><button type="button" class="btn btn--outline" data-result-again>Escribir otro mensaje</button></p>
        </div>
      </div>

      <div class="office">
        ${photo('atencion-cliente', 'Asesora de atención al cliente con audífonos conversa en una llamada desde su escritorio', { sizes: '(max-width: 900px) 92vw, 500px' })}
        <div class="office__block">
          <h3>${ic('pin')}Oficina</h3>
          <p>Torre de las Américas, Torre B, Oficina 602-B, Punta Pacífica, San Francisco, Ciudad de Panamá.</p>
          <p class="office__note"><span class="tbd">[confirmar dirección oficial]</span> La política de privacidad indica Calle 1ra La Cresta, P.H. El Alcázar, Oficina No. 1 PB, Bella Vista.</p>
        </div>
        <div class="office__block">
          <h3>${ic('calendar')}Horario de atención</h3>
          <p>${tbd('Días y horas de atención por WhatsApp y en oficina: por confirmar con Kredit')}</p>
        </div>
        <div class="callout">
          ${ic('shield')}
          <div>
            <strong>Aviso antifraude: Kredit nunca te pedirá pagos por adelantado para aprobar tu crédito.</strong>
            <p>Si alguien te lo pide en nombre de Kredit, no pagues y repórtalo a nuestros canales oficiales.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
`;

  return {
    title: 'Contacto y canales oficiales de Kredit',
    description: 'Vista previa: canales oficiales de Kredit (WhatsApp +507 6997-5664, ventas@kredit.com.pa), formulario de contacto en modo demo, oficina y aviso antifraude.',
    body,
  };
};
