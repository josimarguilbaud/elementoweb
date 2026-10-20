/* Reglas de las maquetas de «Así se vería» que no dependen de Astro, para que las pruebe `node --test`
   (scripts/marketing-ia.test.mjs). Ejemplo.astro las llama. */
import type { Ejemplo } from './types';

/** Los tipos de la unión `Ejemplo` de types.ts. La prueba compara esta lista con la unión. */
export const TIPOS_EJEMPLO: readonly Ejemplo['tipo'][] = [
  'google', 'anuncio-social', 'post', 'web', 'whatsapp', 'correo', 'flujo', 'asistente', 'producto', 'checkout', 'mapa',
  'panel', 'agenda', 'resena', 'informe', 'foto', 'video',
];

/** Un tipo que Ejemplo.astro no sabe pintar rompe el build en vez de dejar un hueco en silencio. */
export function assertTipoEjemplo(tipo: string): void {
  if (!(TIPOS_EJEMPLO as readonly string[]).includes(tipo)) throw new Error(`MKIA-EJEMPLO: tipo desconocido ${tipo}`);
}

/** Ficha bajo cada video: duración redondeada, si lleva voz y el peso del archivo (KB bajo 1 MB; MB con coma decimal). */
export function fichaVideo({ duracion, voz, bytes }: { duracion: number; voz: boolean; bytes: number }): string {
  const peso = bytes < 1024 * 1024 ? `${Math.round(bytes / 1024)} KB` : `${(bytes / 1024 / 1024).toFixed(1).replace('.', ',')} MB`;
  return `${Math.round(duracion)} s · ${voz ? 'con voz y subtítulos' : 'sin voz'} · ${peso}`;
}
