/* Recorrido de servicios (D61): cada página de servicio pertenece a una etapa (atraer, atender o automatizar) y su
   bloque «Siguiente paso» lleva a la etapa que sigue; la última lleva a los paquetes de /soluciones/. Así un cliente que
   llega por una web o una campaña ve cómo se atiende y se sigue esa consulta. */

export type Etapa = 'atraer' | 'atender' | 'automatizar';

const ATENDER = [
  'funcionalidades/agente-de-ventas-ia-whatsapp-panama',
  'funcionalidades/chatbots-ia-web-wazacrm-panama',
  'funcionalidades/sistemas-reservas-citas-online-panama',
  'funcionalidades/integracion-yappy-pasarelas-pago-panama',
  'funcionalidades/integracion-cybersource-panama',
  'marketing/whatsapp-marketing-masivo-panama',
  'saas/wazacrm',
];
const AUTOMATIZAR = ['marketing/automatizaciones-n8n-panama', 'inteligencia-artificial-para-empresas-panama', 'saas/nouscrm', 'saas/cifrao'];

export function etapaDe(slug: string): Etapa {
  if (ATENDER.includes(slug)) return 'atender';
  if (AUTOMATIZAR.includes(slug)) return 'automatizar';
  return 'atraer';
}

/** La tarjeta que lleva a la etapa siguiente. */
export const SIGUIENTE: Record<Etapa, { slug: string; titulo: string; texto: string }> = {
  atraer: {
    slug: 'funcionalidades/agente-de-ventas-ia-whatsapp-panama',
    titulo: 'Atender cada consulta',
    texto: 'Un agente de ventas con IA responde en WhatsApp al momento y pasa a tu equipo lo que hace falta.',
  },
  atender: {
    slug: 'marketing/automatizaciones-n8n-panama',
    titulo: 'Automatizar el seguimiento',
    texto: 'Cada consulta entra al CRM, la IA la califica y el seguimiento sale solo.',
  },
  automatizar: {
    slug: 'soluciones',
    titulo: 'Los tres pasos en un paquete',
    texto: 'Atraer, atender y automatizar juntos, con precio de partida publicado.',
  },
};
