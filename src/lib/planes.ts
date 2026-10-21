/* Cuentas del bloque `planes-tabs` (video inmobiliario, D55) que no dependen de Astro, para que las prueben
   `node --test` (scripts/marketing-ia.test.mjs) y el componente con la misma regla. Ninguna cifra se escribe a mano:
   todo sale de un `monto` de src/data/precios.json. */

export interface Precio { nombre: string; monto: number; unidad: string; fuente: string; desde?: boolean }

/** El `monto` de una clave de `precios.confirmados`. Una clave ausente o un monto inválido rompen el build (CV6). */
export function montoDe(confirmados: Record<string, Precio>, clave: string): number {
  const p = confirmados[clave];
  if (!p) throw new Error(`VINM-PRECIO: falta confirmados.${clave} en src/data/precios.json`);
  if (typeof p.monto !== 'number' || !Number.isFinite(p.monto) || p.monto < 0) throw new Error(`VINM-PRECIO: confirmados.${clave}.monto no es un número válido`);
  return p.monto;
}

/** El extra de narración y subtítulos de un plan: el `monto` del extra por cada video que lo lleva. */
export function extraNarracion(monto: number, bloques: number): number {
  if (!Number.isFinite(monto) || !Number.isInteger(bloques) || bloques < 0) throw new TypeError(`VINM-PRECIO: extra con monto ${monto} y bloques ${bloques}`);
  return monto * bloques;
}

/** «$1,450», con el separador de miles de site.ts y portada.ts. */
export const formatoPrecio = (n: number): string => `$${n.toLocaleString('en-US')}`;
