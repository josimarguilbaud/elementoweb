/* WebP con tope de peso, compartido por scripts/portadas-fotos.mjs (portadas, 58 KB la de 1200) y las imágenes de
   ejemplo de IA creativa (80 KB, D52). Baja la calidad hasta 54; si la foto tiene mucho detalle fino (murales,
   estantes llenos), suaviza apenas antes de seguir bajando, porque un desenfoque de 0,4 a 0,8 px no se nota a 1200 px
   y la calidad 40 sí. Si no llega al tope, rompe con MKIA-PESO y el peso logrado. */
import sharp from 'sharp';

export async function webpConTope(entrada, ancho, salida, tope) {
  const intentos = [74, 70, 66, 62, 58, 54].map((q) => ({ q, s: 0, m: 0 }))
    .concat([0.4, 0.6, 0.8].flatMap((s) => [62, 58, 54].map((q) => ({ q, s, m: 0 }))))
    // Fotos con grano del modelo: un filtro de mediana quita el grano y respeta los bordes mejor que el desenfoque.
    .concat([66, 62, 58, 54, 50].map((q) => ({ q, s: 0, m: 3 })))
    .concat([58, 54].map((q) => ({ q, s: 0, m: 5 })));
  let ultimo = 0;
  for (const { q, s, m } of intentos) {
    let img = sharp(entrada).resize({ width: ancho });
    if (m) img = img.median(m);
    if (s) img = img.blur(s);
    const info = await img.webp({ quality: q, effort: 6 }).toFile(salida);
    ultimo = info.size;
    if (!tope || info.size <= tope) return m ? `${q}+mediana${m}` : s ? `${q}+blur${s}` : q;
  }
  throw new Error(`MKIA-PESO: no se pudo dejar ${salida} bajo ${Math.round(tope / 1024)} KB; el mejor intento pesó ${Math.round(ultimo / 1024)} KB`);
}
