/* Servidor estático mínimo para las pruebas de navegador sobre una carpeta construida (dist-fixture/).
   Resuelve la URL de un directorio a su index.html, como hace nginx en producción. Sin dependencias. */
import { createServer } from 'node:http';
import { readFile, stat } from 'node:fs/promises';
import { join, extname, normalize } from 'node:path';

const TIPOS = { '.html': 'text/html; charset=utf-8', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.xml': 'application/xml', '.txt': 'text/plain' };

/** Arranca el servidor en un puerto libre. Devuelve { url, cerrar }. */
export function servir(carpeta) {
  const servidor = createServer(async (req, res) => {
    try {
      let ruta = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      let archivo = normalize(join(carpeta, ruta));
      if (!archivo.startsWith(normalize(carpeta))) { res.writeHead(403).end(); return; }
      const s = await stat(archivo).catch(() => null);
      if (s?.isDirectory()) archivo = join(archivo, 'index.html');
      const datos = await readFile(archivo);
      res.writeHead(200, { 'Content-Type': TIPOS[extname(archivo)] ?? 'application/octet-stream' }).end(datos);
    } catch { res.writeHead(404, { 'Content-Type': 'text/plain' }).end('no encontrado'); }
  });
  return new Promise((resolver) => servidor.listen(0, '127.0.0.1', () => {
    const { port } = servidor.address();
    resolver({ url: `http://127.0.0.1:${port}`, cerrar: () => new Promise((r) => servidor.close(r)) });
  }));
}
