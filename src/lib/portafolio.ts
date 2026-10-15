/* Proyectos de clientes del portafolio: deja fuera los productos propios (`propio: true`, como WazaCRM), que ya se
   cuentan aparte como «productos propios» en la franja de cifras de la portada (D50). */
export function proyectosDeClientes<T extends { propio?: boolean }>(portfolio: T[]): T[] {
  return portfolio.filter((p) => !p.propio);
}
