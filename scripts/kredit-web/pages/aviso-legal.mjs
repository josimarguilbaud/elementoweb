// /aviso-legal/: plantilla clara (texto de ejemplo) con razón social, licencia y lo básico.
// La valida el asesor legal de Kredit antes de publicarse.
export default (h) => {
  const { ic, link } = h;
  const tbd = (t) => `<span class="tbd">[${t}]</span>`;

  const sections = [
    { id: 'titular', title: 'Titular del sitio', html: `
      <p>Este sitio web es titularidad de <strong>CREDU HOLDINGS, S.A.</strong> (en adelante, «Kredit»), sociedad anónima panameña con RUC 155770767-2-2025 DV9, empresa financiera autorizada por la Dirección General de Empresas Financieras del Ministerio de Comercio e Industrias mediante la Resolución No. 638 del 23 de septiembre de 2025, conforme a la Ley No. 42 de 23 de julio de 2001.</p>
      <ul>
        <li><strong>Domicilio:</strong> ${tbd('confirmar dirección oficial: Torre de las Américas, Torre B, Oficina 602-B, Punta Pacífica, o Calle 1ra La Cresta, P.H. El Alcázar, Bella Vista')}</li>
        <li><strong>Correo:</strong> <a href="mailto:ventas@kredit.com.pa">ventas@kredit.com.pa</a></li>
        <li><strong>WhatsApp:</strong> +507 6997-5664</li>
      </ul>` },
    { id: 'objeto', title: 'Objeto del sitio', html: `
      <p>El sitio informa sobre los préstamos personales de Kredit para colaboradores de empresas afiliadas y sobre el convenio de descuento por planilla para empresas, y facilita la solicitud en línea y el acceso al portal de clientes.</p>` },
    { id: 'uso', title: 'Condiciones de uso', html: `
      <p>Al navegar por este sitio aceptas usarlo de forma lícita y de buena fe. En particular, te comprometes a:</p>
      <ul>
        <li>Dar información veraz y propia en los formularios.</li>
        <li>No usar el sitio para suplantar a otra persona ni para fines fraudulentos.</li>
        <li>No intentar acceder a áreas restringidas ni dañar los sistemas de Kredit.</li>
      </ul>` },
    { id: 'productos', title: 'Información sobre los productos', html: `
      <p>La información de este sitio, incluidas las cuotas de la calculadora, es ilustrativa y no constituye una oferta vinculante. Todo crédito está sujeto a evaluación y a la verificación de los datos del solicitante.</p>
      <p>Las condiciones definitivas (tasa de interés efectiva, cargos, plazo y costo total) se entregan por escrito antes de la firma del contrato. Consulta la <a href="${link('prestamos')}#info-credito">información importante del crédito</a>.</p>` },
    { id: 'propiedad', title: 'Propiedad intelectual', html: `
      <p>La marca Kredit, el logotipo, los textos, el diseño y el código de este sitio pertenecen a Kredit o se usan con autorización. No se permite reproducirlos ni modificarlos sin permiso escrito. Las fotografías del sitio son ilustrativas.</p>` },
    { id: 'enlaces', title: 'Enlaces a otros sitios', html: `
      <p>El sitio puede enlazar a servicios de terceros, como WhatsApp o Instagram. Kredit no controla esos servicios y no responde por su contenido ni por sus políticas de privacidad.</p>` },
    { id: 'responsabilidad', title: 'Responsabilidad', html: `
      <p>Kredit procura que la información del sitio sea exacta y esté actualizada, y que el sitio esté disponible, pero no puede asegurar que no haya interrupciones o errores. Kredit no responde por daños derivados del mal uso del sitio.</p>
      <p><strong>Kredit nunca te pedirá pagos por adelantado para aprobar tu crédito.</strong> Si alguien te lo pide en nombre de Kredit, no pagues y repórtalo a nuestros canales oficiales.</p>` },
    { id: 'datos', title: 'Protección de datos personales', html: `
      <p>El tratamiento de tus datos personales se rige por la <a href="${link('politica-de-privacidad')}">política de privacidad</a> de Kredit, conforme a la Ley No. 81 de 2019 y el Decreto Ejecutivo No. 285 de 2021.</p>` },
    { id: 'ley', title: 'Legislación aplicable', html: `
      <p>Este aviso se rige por las leyes de la República de Panamá. ${tbd('Jurisdicción y tribunales competentes: por confirmar con el asesor legal de Kredit')}</p>` },
    { id: 'contacto', title: 'Contacto', html: `
      <p>Para cualquier consulta sobre este aviso, escríbenos a <a href="mailto:ventas@kredit.com.pa">ventas@kredit.com.pa</a> o visita la página de <a href="${link('contacto')}">contacto</a>.</p>` },
  ];

  const before = `<p class="note-demo">${ic('alert')}<span>Texto de ejemplo para la vista previa: lo valida el asesor legal de Kredit.</span></p>`;
  const after = `<p class="legal-sign">CREDU HOLDINGS, S.A. (Kredit) · RUC 155770767-2-2025 DV9 · Empresa financiera autorizada por el MICI, Resolución No. 638 del 23 de septiembre de 2025. ${tbd('Fecha de última actualización: por definir')}</p>`;

  const body = `
  ${h.pageHero({
    crumb: 'Aviso legal',
    title: 'Aviso legal',
    lead: 'Quién es el titular de este sitio, en qué condiciones puedes usarlo y cómo se trata la información de los productos.',
    meta: 'Texto de ejemplo para la vista previa: lo valida el asesor legal de Kredit',
    cls: 'phero--legal',
  })}

  ${h.legalBody({ sections, before, after })}
`;

  return {
    title: 'Aviso legal del sitio de Kredit (CREDU HOLDINGS, S.A.)',
    description: 'Vista previa: aviso legal de ejemplo del sitio de Kredit con la razón social, la licencia del MICI, condiciones de uso, propiedad intelectual y legislación aplicable.',
    body,
  };
};
