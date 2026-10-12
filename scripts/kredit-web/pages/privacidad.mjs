// /politica-de-privacidad/: el texto real de la política de Kredit
// (copia de kredit.com.pa/politicas-de-privacidad/ del 12-oct-2026, en
// docs/specs/kredit-marketing/referencias/politica-privacidad-kredit-2026-10-12.md),
// con tipografía de lectura e índice lateral. Solo se cambia el formato, no el texto.
export default (h) => {
  const { ic, link } = h;
  const mail = '<a href="mailto:protecciondedatos@kredit.com.pa">protecciondedatos@kredit.com.pa</a>';

  const sections = [
    { id: 'informacion-general', title: 'Información General', html: `
      <p>CREDU HOLDINGS, S.A. (en adelante “KREDIT”) es una sociedad anónima constituida de acuerdo con las leyes de la República de Panamá, inscrita al folio No. 155770767-2-2025 de la Sección Mercantil del Registro Público, con domicilio en Calle 1ra La Cresta, P.H. El Alcázar, Oficina No. 1 PB, Corregimiento de Bella Vista, Ciudad de Panamá, y autorizada mediante Resolución No. 638 del 23 de septiembre de 2025 emitida por la Dirección General de Empresas Financieras del Ministerio de Comercio e Industrias, para operar como empresa financiera conforme a la Ley No. 42 de 23 de julio de 2001</p>
      <p>KREDIT desarrolla, administra y ofrece servicios financieros, incluyendo el otorgamiento, manejo y servicio de préstamos personales o microcréditos bajo diversas modalidades, a través de plataformas digitales, aplicaciones móviles o sistemas análogos (en adelante, los “Servicios”).</p>
      <p>KREDIT será responsable del tratamiento de los datos personales que se recolecten, almacenen, procesen, organicen, transmitan o transfieran a través de sus plataformas digitales, conforme a lo dispuesto en la Ley No. 81 de 26 de marzo de 2019 y el Decreto Ejecutivo No. 285 de 28 de mayo de 2021 sobre la Protección de Datos Personales en la República de Panamá.</p>` },
    { id: 'compromiso', title: 'Compromiso con la Privacidad', html: `
      <p>KREDIT se encuentra comprometida con el respeto, protección y adecuada gestión de los datos personales de sus usuarios, clientes, colaboradores, aliados comerciales y proveedores. Se adoptan medidas técnicas, legales y organizativas que garantizan la seguridad, integridad, confidencialidad y uso legítimo de la información recolectada.</p>` },
    { id: 'definicion', title: 'Definición de Datos Personales', html: `
      <p>Se entiende por Datos Personales toda información referente a una persona natural que la identifique o la haga identificable, incluyendo, pero sin limitarse a: nombre, número de cédula, dirección, teléfono, correo electrónico, historial crediticio, información financiera o cualquier otro dato que KREDIT obtenga en el marco de la prestación de sus servicios.</p>` },
    { id: 'finalidades', title: 'Finalidades del Tratamiento de los Datos Personales', html: `
      <p>Los Datos Personales suministrados a KREDIT podrán ser utilizados para las siguientes finalidades:</p>
      <ol>
        <li>Cumplir con las obligaciones derivadas de contratos de financiamiento, operaciones crediticias o relaciones comerciales celebradas con KREDIT.</li>
        <li>Verificar y evaluar la identidad, solvencia y capacidad crediticia del usuario mediante consultas a fuentes públicas o centrales de riesgo.</li>
        <li>Prevenir el fraude, la suplantación de identidad, el lavado de dinero y el financiamiento del terrorismo.</li>
        <li>Cumplir con obligaciones legales ante autoridades administrativas, regulatorias, judiciales o fiscales.</li>
        <li>Administrar y mejorar los Servicios, plataformas y sistemas tecnológicos de KREDIT.</li>
        <li>Realizar gestiones de cobranza, facturación o recuperación de cartera, directamente o a través de terceros.</li>
        <li>Mantener relaciones comerciales con clientes, proveedores o socios estratégicos.</li>
        <li>Enviar información promocional o publicitaria relacionada con productos, servicios, beneficios y campañas de KREDIT o de terceros afiliados, mediante correo electrónico, mensajería instantánea o llamadas telefónicas, siempre con el consentimiento previo del titular.</li>
        <li>Crear, actualizar y conservar bases de datos crediticias internas, incluyendo reportes y consultas en centrales de riesgo.</li>
        <li>Cumplir con las políticas internas de auditoría, cumplimiento y seguridad de la información.</li>
      </ol>
      <p>La base legal de este tratamiento radica en:</p>
      <ul>
        <li>La relación contractual y comercial entre el titular y KREDIT.</li>
        <li>El cumplimiento de obligaciones legales o regulatorias.</li>
        <li>El consentimiento expreso e informado del titular.</li>
        <li>El interés legítimo de KREDIT en la mejora continua de sus servicios.</li>
      </ul>` },
    { id: 'transferencia', title: 'Comunicación y Transferencia de Datos', html: `
      <p>Los Datos Personales podrán ser compartidos con:</p>
      <ul>
        <li>Proveedores de servicios tecnológicos, plataformas de pago, atención al cliente, mantenimiento y seguridad informática.</li>
        <li>Empresas relacionadas del mismo grupo económico.</li>
        <li>Socios de publicidad, aliados comerciales o terceros autorizados.</li>
        <li>Autoridades competentes cuando sea legalmente requerido.</li>
        <li>Servicios de almacenamiento en la nube, dentro o fuera de Panamá, asegurando que el tratamiento cumpla con las leyes de protección de datos aplicables en cada jurisdicción.</li>
      </ul>` },
    { id: 'derechos-arco', title: 'Derechos del Titular (Derechos ARCO)', html: `
      <p>El titular de los Datos Personales podrá ejercer en cualquier momento sus derechos de:</p>
      <ul>
        <li><strong>Acceso:</strong> conocer los datos personales que KREDIT conserva sobre él.</li>
        <li><strong>Rectificación:</strong> solicitar la corrección de información inexacta o desactualizada.</li>
        <li><strong>Cancelación:</strong> solicitar la eliminación de sus datos cuando sea procedente.</li>
        <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos por causas legítimas.</li>
        <li><strong>Portabilidad:</strong> solicitar sus datos en un formato estructurado para transmitirlos a otro responsable.</li>
      </ul>
      <p>Para ejercer estos derechos, el titular deberá enviar una solicitud escrita a: ${mail} · www.kredit.com.pa</p>
      <p>O entregando comunicación física en las oficinas de CREDU HOLDINGS, S.A., Calle 1ra La Cresta, P.H. El Alcázar, Oficina No. 1 PB, Bella Vista, Ciudad de Panamá. KREDIT responderá a las solicitudes en los plazos establecidos por la legislación vigente.</p>` },
    { id: 'conservacion', title: 'Conservación de los Datos', html: `
      <p>KREDIT conservará los Datos Personales únicamente durante el tiempo necesario para cumplir con las finalidades legítimas descritas y las obligaciones legales correspondientes. En casos donde la ley o una autoridad competente lo requiera, la información podrá ser conservada por un período adicional conforme a las normativas financieras y de prevención de delitos financieros.</p>` },
    { id: 'actualizaciones', title: 'Actualizaciones de la Política', html: `
      <p>KREDIT podrá modificar o actualizar esta Política de Privacidad en cualquier momento, informando a los usuarios sobre los cambios relevantes a través de su sitio web u otros medios digitales. Toda actualización será válida a partir de la fecha de entrada en vigor indicada en la publicación correspondiente.</p>` },
    { id: 'contacto', title: 'Contacto', html: `
      <p>Si tiene alguna pregunta o solicitud relacionada con esta Política o con el tratamiento de sus datos personales, puede contactarnos en: ${mail} · www.kredit.com.pa</p>` },
  ];

  const before = `<p class="note-demo">${ic('info')}<span>Texto publicado por CREDU HOLDINGS, S.A. en kredit.com.pa (copia del 12 de octubre de 2026); aquí solo cambia el formato. Nota de la vista previa: esta política ubica el domicilio en Calle 1ra La Cresta, P.H. El Alcázar, Bella Vista, y el pie del sitio actual en Torre de las Américas, Punta Pacífica. <span class="tbd">[confirmar dirección oficial]</span></span></p>`;
  const after = `<p class="legal-sign">CREDU HOLDINGS, S.A. — Empresa financiera autorizada mediante Resolución No. 638 del 23 de septiembre de 2025, Dirección General de Empresas Financieras – Ministerio de Comercio e Industrias, República de Panamá.</p>
      <p class="legal-sign legal-sign--links">Ver también: <a href="${link('aviso-legal')}">Aviso legal</a> · <a href="${link('politica-de-cookies')}">Política de cookies</a></p>`;

  const body = `
  ${h.pageHero({
    crumb: 'Política de privacidad',
    title: 'Política de privacidad',
    lead: 'Cómo Kredit recoge, usa y protege tus datos personales, conforme a la Ley No. 81 de 2019 y el Decreto Ejecutivo No. 285 de 2021.',
    meta: 'CREDU HOLDINGS, S.A. · Responsable del tratamiento · protecciondedatos@kredit.com.pa',
    cls: 'phero--legal',
  })}

  ${h.legalBody({ sections, before, after })}
`;

  return {
    title: 'Política de privacidad y protección de datos · Kredit',
    description: 'Vista previa: política de privacidad de CREDU HOLDINGS, S.A. (Kredit) según la Ley 81 de 2019: finalidades, transferencia de datos, derechos ARCO y conservación.',
    body,
  };
};
