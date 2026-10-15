/* Clave del servicio para los eventos (D9, D50): `ContactForm` elige el servicio por su etiqueta de texto
   («Diseño web / Sitio corporativo») y `track.ts` documenta que `service` es la clave de src/data/formulario.json
   («pyme»). Una etiqueta vacía o desconocida va a `definir`, como cualquier página sin clave propia (D10). */
export interface ServicioFormulario { clave: string; servicio: string }

export function claveDeServicio(etiqueta: string, servicios: ServicioFormulario[]): string {
  const limpia = etiqueta.trim();
  return servicios.find((s) => s.servicio === limpia)?.clave ?? 'definir';
}
