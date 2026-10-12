// /preguntas-frecuentes/: todas las preguntas por categoría con <details>, y el JSON-LD FAQPage
// generado desde los mismos datos (mismo texto que se ve en la página).
import { plain } from '../faq.mjs';

export default (h) => {
  const { ic, link, landing, wa, FAQ, r } = h;
  const total = FAQ.reduce((n, c) => n + c.items.length, 0);

  const jsonld = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: FAQ.flatMap((c) => c.items).map((it) => ({
      '@type': 'Question',
      name: it.q,
      acceptedAnswer: { '@type': 'Answer', text: plain(it.a(r, landing)) },
    })),
  };

  const groups = FAQ.map((c) => `<section class="faq-group" id="${c.id}" aria-labelledby="${c.id}-title">
          <div class="faq-group__head">
            <div>
              <h2 class="h2" id="${c.id}-title">${c.title}</h2>
              <p>${c.lead}</p>
            </div>
            <span class="faq-group__count">${c.items.length} preguntas</span>
          </div>
          ${h.faqHtml(c.items, r, landing)}
        </section>`).join('\n        ');

  const body = `
  ${h.pageHero({
    crumb: 'Preguntas frecuentes',
    title: 'Preguntas frecuentes',
    lead: `Las ${total} preguntas que más nos hacen colaboradores y empresas, con respuestas cortas y sin letra pequeña.`,
    actions: `<nav class="jump" aria-label="Categorías de preguntas">${FAQ.map((c) => `<a href="#${c.id}">${c.title}</a>`).join('')}</nav>`,
  })}

  <div class="section section--white">
    <div class="wrap faq-page">
      <nav class="faq-nav" aria-label="Categorías" data-toc>
        <p>Categorías</p>
        <ol>
          ${FAQ.map((c) => `<li><a href="#${c.id}">${c.title}</a></li>`).join('\n          ')}
        </ol>
      </nav>
      <div>
        ${groups}
      </div>
    </div>
  </div>

  <section class="section" aria-labelledby="ayuda-title">
    <div class="wrap duo-cards">
      <div class="duo-card duo-card--navy">
        ${h.kGhost}
        <h2 id="ayuda-title">¿No encontraste tu respuesta?</h2>
        <p>Escríbenos por WhatsApp o por correo: un asesor de Kredit te responde por los canales oficiales.</p>
        ${wa('Hola Kredit, tengo una pregunta.', 'btn btn--white', `${ic('wa')}Escribir por WhatsApp`)}
      </div>
      <div class="duo-card duo-card--pale">
        ${h.kGhost}
        <h2>¿Listo para solicitar?</h2>
        <p>Calcula tu cuota quincenal y llena la solicitud digital con tu cédula.</p>
        <a class="btn btn--navy" href="${landing.prestamos}">Solicitar mi préstamo${ic('arrow-r')}</a>
      </div>
    </div>
    <p class="wrap faq-more"><a class="link-arrow" href="${link('contacto')}">Ver todos los canales de contacto</a></p>
  </section>
`;

  return {
    title: 'Preguntas frecuentes sobre préstamos y convenios · Kredit',
    description: 'Vista previa: respuestas sobre quién puede solicitar, requisitos, desembolso, pagos por planilla, afiliación de empresas, licencia del MICI y protección de datos en Kredit.',
    body,
    jsonld,
  };
};
