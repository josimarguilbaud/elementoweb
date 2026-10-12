// empresas.js — landing de empresas (B2B): configuración del formulario de afiliación.
// Vista previa para Kredit · Elemento Web. Puntaje de ejemplo según spec §4 (lo fija Kredit).
import { initLeadForm, isFreeEmail, toE164PA, emailDomain } from './form.js?v=20261012a';

export const WHATSAPP = '50769975664';

const DECISORES = ['rrhh', 'gerencia', 'finanzas'];
const COLAB_50_O_MAS = ['50-99', '100-249', '250-499', '500+'];

export const config = {
  formId: 'kredit-empresas',
  landing: 'kredit-empresas',
  honeypot: 'sitio_web',

  /** Sectores con puntos extra (ejemplo: todos menos "otro"; ajustar con Kredit). */
  sectoresPreferentes: ['comercio', 'servicios', 'industria', 'construccion', 'logistica', 'salud', 'educacion', 'tecnologia', 'turismo', 'publico'],

  score: {
    thresholds: { calificado: 70, revisar: 40 },
    rules: [
      { id: 'colaboradores_50_o_mas', points: 35, when: (l) => COLAB_50_O_MAS.includes(l.colaboradores) },
      { id: 'colaboradores_20_a_49', points: 15, when: (l) => l.colaboradores === '20-49' },
      { id: 'cargo_decisor', points: 25, when: (l) => DECISORES.includes(l.cargo) },
      { id: 'correo_corporativo', points: 20, when: (l) => l.correo_corporativo },
      { id: 'sector_preferente', points: 10, when: (l) => config.sectoresPreferentes.includes(l.sector) },
      { id: 'inicio_3_meses', points: 10, when: (l) => ['este-mes', '1-3m'].includes(l.inicio) },
    ],
  },

  paths: { principal: ['empresa', 'contacto', 'interes'] },
  stepTitles: { empresa: 'Tu empresa', contacto: 'Contacto', interes: 'Interés' },
  submitLabels: { principal: 'Enviar solicitud de afiliación' },

  conditions: {
    cargoOtro: (c) => c.values.cargo === 'otro',
  },

  // El orden de los campos es el orden visual del paso: el foco va al primer error que se ve.
  fields: {
    empresa: { kind: 'text', required: true, label: 'Empresa', messages: { required: 'Escribe el nombre de la empresa.' } },
    ruc: { kind: 'ruc', required: true, label: 'RUC' },
    sector: { kind: 'select', required: true, label: 'Sector' },
    provincia: { kind: 'select', required: true, label: 'Provincia' },
    colaboradores: { kind: 'radio', required: true, label: 'Colaboradores' },
    nombre: { kind: 'name', required: true, label: 'Nombre' },
    cargo: { kind: 'select', required: true, label: 'Cargo' },
    cargo_otro: { kind: 'text', required: true, label: 'Cargo (otro)', messages: { required: 'Cuéntanos tu cargo.' } },
    correo: {
      kind: 'email', required: true, label: 'Correo corporativo',
      warn: (v) => (isFreeEmail(v)
        ? `Parece un correo personal (@${emailDomain(v)}). Si tienes uno de la empresa, nos ayuda a validar la afiliación más rápido. Puedes continuar con este.`
        : ''),
    },
    celular: { kind: 'mobile', required: true, label: 'Celular' },
    interes: { kind: 'checkboxes', required: true, label: 'Interés' },
    inicio: { kind: 'select', required: true, label: 'Inicio deseado' },
    comentario: { kind: 'text', label: 'Comentario' },
    acepta_privacidad: { kind: 'checkbox', required: true, label: 'Aviso de privacidad' },
    acepta_whatsapp: { kind: 'checkbox', label: 'Contacto por WhatsApp' },
  },

  toLead(c) {
    const v = c.values;
    return {
      empresa: v.empresa,
      ruc: v.ruc.toUpperCase(),
      sector: v.sector,
      colaboradores: v.colaboradores,
      provincia: v.provincia,
      nombre: v.nombre,
      cargo: v.cargo,
      cargo_otro: v.cargo === 'otro' ? v.cargo_otro : null,
      correo: v.correo,
      correo_corporativo: !isFreeEmail(v.correo),
      celular: toE164PA(v.celular),
      interes: v.interes,
      inicio: v.inicio,
      comentario: v.comentario || null,
    };
  },

  toConsents(c) {
    return { privacidad: c.values.acepta_privacidad, referencias_credito: null, whatsapp: c.values.acepta_whatsapp, version: 'demo-2026-10' };
  },

  result(tier, c) {
    const v = c.values;
    const first = String(v.nombre || '').split(/\s+/)[0] || '';
    const empresa = v.empresa || 'tu empresa';
    const wa = { label: 'Escribir por WhatsApp', whatsapp: WHATSAPP, waText: `Hola Kredit, soy ${first} de ${empresa}. Envié la solicitud de afiliación.`, icon: 'i-wa' };
    if (tier === 'calificado') {
      return {
        tone: 'ok', icon: 'i-check',
        badge: 'Solicitud de afiliación recibida',
        title: `¡Gracias, ${first}! Un ejecutivo de convenios te contactará`,
        body: [`Revisaremos los datos de ${empresa} y te escribiremos [[plazo de respuesta por confirmar con Kredit]] para agendar una presentación con RR. HH. y finanzas.`],
        next: [
          'Ten a mano el número aproximado de colaboradores en planilla y la frecuencia de pago (quincenal o mensual).',
          'Te compartiremos el borrador del convenio y el kit de activación para tu equipo.',
        ],
        actions: [{ ...wa, primary: true }],
        fine: 'La afiliación está sujeta a la revisión y firma del convenio con Kredit.',
      };
    }
    if (tier === 'revisar') {
      return {
        tone: 'review', icon: 'i-clipboard',
        badge: 'Solicitud recibida · En revisión',
        title: 'Revisaremos la información de tu empresa',
        body: [`Gracias, ${first}. Un ejecutivo de convenios revisará la solicitud de ${empresa} y te contactará para conocer mejor a tu equipo.`],
        actions: [wa],
        fine: 'La afiliación está sujeta a la revisión y firma del convenio con Kredit.',
      };
    }
    return {
      tone: 'neutral', icon: 'i-heart',
      badge: 'Solicitud recibida',
      title: 'Gracias por tu interés en Kredit',
      body: [
        'Por ahora el programa está pensado para empresas con [[tamaño mínimo por confirmar con Kredit]]. Guardamos tus datos para avisarte cuando tengamos una opción para tu empresa.',
        'Mientras tanto, te enviaremos información sobre cómo funciona el programa.',
      ],
      actions: [{ label: 'Ver la página de préstamos', href: '../prestamos/', icon: 'i-arrow-r' }],
    };
  },
};

if (typeof document !== 'undefined') {
  const form = document.getElementById('form-empresas');
  const api = initLeadForm(form, config);
  window.__kredit = { api, config };
}
