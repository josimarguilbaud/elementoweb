/* Localiza un Chrome o Chromium para playwright-core (D8, D37).
   Orden: CHROMIUM_PATH si existe, y después las rutas habituales de cada sistema. Devuelve null si no hay. */
import { existsSync } from 'node:fs';

const CANDIDATOS = {
  win32: [
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Google\\Chrome\\Application\\chrome.exe',
    'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
  ],
  darwin: ['/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'],
  linux: ['/usr/bin/google-chrome', '/usr/bin/google-chrome-stable', '/usr/bin/chromium', '/usr/bin/chromium-browser', '/opt/pw-browsers/chromium'],
};

export function rutaChrome() {
  const env = process.env.CHROMIUM_PATH;
  if (env && existsSync(env)) return env;
  return (CANDIDATOS[process.platform] ?? CANDIDATOS.linux).find((p) => existsSync(p)) ?? null;
}
