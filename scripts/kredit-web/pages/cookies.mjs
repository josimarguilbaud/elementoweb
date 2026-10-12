// /politica-de-cookies/: plantilla clara (texto de ejemplo). Las herramientas de medición y
// publicidad no están confirmadas: hoy kredit.com.pa no tiene GA4, GTM ni píxel de Meta.
export default (h) => {
  const { ic, link } = h;
  const tbd = (t) => `<span class="tbd">[${t}]</span>`;

  const sections = [
    { id: 'que-son', title: 'Qué son las cookies', html: `
      <p>Las cookies son pequeños archivos que un sitio web guarda en tu navegador para recordar información sobre tu visita, como tus preferencias o las páginas que viste. También existen tecnologías parecidas, como el almacenamiento local del navegador.</p>` },
    { id: 'cuales', title: 'Qué cookies usa este sitio', html: `
      <p>El sitio de Kredit puede usar estos tipos de cookies. Las que no son necesarias solo se activan si las aceptas.</p>
      <div class="table-scroll">
        <table>
          <thead><tr><th scope="col">Tipo</th><th scope="col">Para qué sirve</th><th scope="col">¿Necesita tu permiso?</th></tr></thead>
          <tbody>
            <tr><td><strong>Necesarias</strong></td><td>Que el sitio funcione y sea seguro, por ejemplo al llenar la solicitud.</td><td>No</td></tr>
            <tr><td><strong>Preferencias</strong></td><td>Recordar tus elecciones, como tu respuesta sobre las cookies.</td><td>Sí</td></tr>
            <tr><td><strong>Medición</strong></td><td>Contar visitas y saber qué páginas sirven. ${tbd('Herramienta, por ejemplo Google Analytics 4: por confirmar')}</td><td>Sí</td></tr>
            <tr><td><strong>Publicidad</strong></td><td>Medir campañas en Google o Meta. ${tbd('Píxeles y etiquetas: por confirmar')}</td><td>Sí</td></tr>
          </tbody>
        </table>
      </div>
      <p>${tbd('Lista de cookies con nombre, proveedor y duración: se completa cuando se definan las herramientas')}</p>` },
    { id: 'gestionar', title: 'Cómo aceptarlas, rechazarlas o cambiarlas', html: `
      <p>Al entrar al sitio verás un aviso para aceptar o rechazar las cookies que no son necesarias. Rechazarlas no te impide usar el sitio ni solicitar tu crédito. ${tbd('Aviso de cookies con «Rechazar no esenciales»: por implementar')}</p>
      <p>También puedes borrar o bloquear cookies desde la configuración de tu navegador (Chrome, Safari, Firefox o Edge). Si bloqueas las necesarias, algunas partes del sitio pueden no funcionar.</p>` },
    { id: 'terceros', title: 'Servicios de terceros', html: `
      <p>Si abres WhatsApp o Instagram desde este sitio, esos servicios aplican sus propias políticas de cookies y de privacidad.</p>` },
    { id: 'cambios', title: 'Cambios en esta política', html: `
      <p>Kredit puede actualizar esta política cuando cambien las herramientas del sitio. La fecha de la última actualización aparece al final de esta página.</p>` },
    { id: 'contacto', title: 'Contacto', html: `
      <p>Si tienes preguntas sobre las cookies o sobre tus datos, escríbenos a <a href="mailto:protecciondedatos@kredit.com.pa">protecciondedatos@kredit.com.pa</a>. Más detalles en la <a href="${link('politica-de-privacidad')}">política de privacidad</a>.</p>` },
  ];

  const before = `<p class="note-demo">${ic('alert')}<span>Texto de ejemplo para la vista previa: lo valida el asesor legal de Kredit. Esta vista previa no instala cookies.</span></p>`;
  const after = `<p class="legal-sign">CREDU HOLDINGS, S.A. (Kredit) · RUC 155770767-2-2025 DV9 · Empresa financiera autorizada por el MICI, Resolución No. 638 del 23 de septiembre de 2025. ${tbd('Fecha de última actualización: por definir')}</p>`;

  const body = `
  ${h.pageHero({
    crumb: 'Política de cookies',
    title: 'Política de cookies',
    lead: 'Qué cookies puede usar el sitio de Kredit, para qué sirven y cómo decides cuáles aceptar.',
    meta: 'Texto de ejemplo para la vista previa: lo valida el asesor legal de Kredit',
    cls: 'phero--legal',
  })}

  ${h.legalBody({ sections, before, after })}
`;

  return {
    title: 'Política de cookies del sitio de Kredit',
    description: 'Vista previa: política de cookies de ejemplo para el sitio de Kredit: tipos de cookies, para qué sirven, cómo aceptarlas o rechazarlas y a quién escribir.',
    body,
  };
};
