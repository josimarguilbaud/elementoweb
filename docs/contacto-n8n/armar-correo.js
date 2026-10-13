// Nodo Code del flujo "Elemento Web - Leads Formulario Web" (n8n). Contrato v2 (D30 a D33).
//
// Vive en el repo a proposito: si solo existe dentro de n8n, nadie sabe que
// cambio ni cuando. Al editarlo aqui hay que volver a subirlo con
// scripts/subir-flujo-contacto.mjs (que inyecta el esquema donde dice __FORMULARIO__).
//
// Entra el cuerpo del webhook. Sale UN item con una de estas banderas:
//   invalido  -> el flujo responde 422 {"ok": false}; el cliente NO cuenta exito
//   spam      -> honeypot lleno: 200 {"ok": true} sin efecto (decirle "rechazado" a un bot le ensena a esquivarlo)
//   duplicado -> el mismo `intento` ya se proceso: 200 {"ok": true} sin efecto (idempotencia, D31)
//   ninguna   -> lead valido: el flujo responde 200 YA y sigue con el correo y el CRM
// Campos que manda el sitio. v1 (ContactForm hoy): nombre, empresa, email, telefono, servicio,
// presupuesto, mensaje, web, inicio, modalidad, intento, origen, fecha, botcheck.
// v2 (ServiceForm) suma: payload_version, servicio_clave y detalle_<campo> (aplanado, D32).

const FORMULARIO = __FORMULARIO__;
const LIM = FORMULARIO.limites;
const MAX_CUERPO = 8192; // bytes aproximados del JSON; un formulario normal pesa menos de 2 KB (D33)

const b = $input.first().json.body || {};
const salida = (campos) => [{ json: { spam: false, invalido: false, duplicado: false, pico: false, ...campos } }];

// Tope de tamano antes de tocar nada mas: el webhook es publico y CORS no es autenticacion.
let tamano = Infinity;
try { tamano = JSON.stringify(b).length; } catch (e) { /* ciclico o no serializable */ }
if (tamano > MAX_CUERPO) return salida({ invalido: true, motivo: 'cuerpo demasiado grande' });

// Trampa antibots. Se responde ok y se descarta.
if (String(b.botcheck || '').trim() !== '') return salida({ spam: true });

const h = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#039;');

// Solo texto: un objeto o una lista nunca se vuelven "[object Object]". Quita saltos de
// linea (inyeccion de cabeceras) y recorta al tope del campo.
const limpio = (v, max) => {
  if (v == null || typeof v === 'object') return '';
  return String(v).replace(/[\r\n]/g, ' ').trim().slice(0, max ?? LIM.campo);
};

const nombre      = limpio(b.nombre, 200);
const empresa     = limpio(b.empresa, 200);
const telefono    = limpio(b.telefono, 40);
const presupuesto = limpio(b.presupuesto);
const web         = limpio(b.web);
const inicio      = limpio(b.inicio);
const servicioTxt = limpio(b.servicio);
const mensaje     = (typeof b.mensaje === 'string' ? b.mensaje : '').trim().slice(0, LIM.mensaje);
// Un correo mal escrito en un campo opcional no puede costar el lead: se ignora y el lead sigue.
const emailBruto  = limpio(b.email, 200);
const email       = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailBruto) ? emailBruto : '';

// Obligatorios: nombre y WhatsApp (8 digitos o mas). El correo es opcional (D30).
const soloDigitos = telefono.replace(/\D/g, '');
if (!nombre || soloDigitos.length < 8) {
  return salida({ invalido: true, motivo: 'faltan nombre o telefono con al menos 8 digitos' });
}
// Los telefonos panamenos se escriben sin prefijo; para wa.me hace falta el 507.
const telefonoNormalizado = soloDigitos.length === 8 ? '507' + soloDigitos : soloDigitos;

// El origen solo se acepta si es una ruta del sitio o una URL de elementoweb.com: nada de javascript:.
let origen = limpio(b.origen);
if (!(origen.startsWith('/') && !origen.startsWith('//')) && !/^https:\/\/(www\.)?elementoweb\.com(\/|$)/.test(origen)) origen = '';

// Servicio: clave de la lista blanca; una clave desconocida, o v1 sin clave, se resuelve por la etiqueta o cae en "definir".
let clave = limpio(b.servicio_clave, 40);
if (!FORMULARIO.claves[clave]) {
  clave = Object.keys(FORMULARIO.claves).find((k) => FORMULARIO.claves[k].servicio === servicioTxt) || 'definir';
}
const campos = FORMULARIO.claves[clave].campos;
const detalle = {};
for (const c of Object.keys(campos)) {
  const v = limpio(b['detalle_' + c], LIM.respuesta);
  if (v) detalle[c] = v;
}

// Idempotencia (D31): el mismo `intento` dos veces no duplica la ficha ni el correo.
const intento = /^[A-Za-z0-9._-]{8,80}$/.test(String(b.intento || '')) ? String(b.intento) : '';
const ahora = Date.now();
const sd = $getWorkflowStaticData('global');
sd.vistos = sd.vistos || {};
for (const k of Object.keys(sd.vistos)) if (ahora - sd.vistos[k] > 24 * 3600 * 1000) delete sd.vistos[k];
const ids = Object.keys(sd.vistos);
if (ids.length >= 500) delete sd.vistos[ids.sort((x, y) => sd.vistos[x] - sd.vistos[y])[0]];
if (intento && sd.vistos[intento]) return salida({ duplicado: true });
if (intento) sd.vistos[intento] = ahora;

// Pico de envios (D33): mas de 20 leads validos en una hora marcan el asunto del correo.
sd.horas = (sd.horas || []).filter((t) => ahora - t < 3600 * 1000);
sd.horas.push(ahora);
const pico = sd.horas.length > 20;

const nl = String.fromCharCode(10);

// La fecha la manda el navegador del visitante, asi que puede venir vacia o
// con la zona horaria de otro pais. Se recalcula del lado del servidor.
const fecha = new Date().toLocaleString('es-PA', {
  timeZone: 'America/Panama', day: '2-digit', month: '2-digit', year: 'numeric',
  hour: '2-digit', minute: '2-digit', hour12: true,
});

const servicio = servicioTxt || FORMULARIO.claves[clave].servicio;
const detalleFilas = Object.entries(detalle).map(([c, v]) => [campos[c].etiqueta, v]);

const fila = (label, valor, ultima) => {
  const borde = ultima ? '' : 'border-bottom:1px solid #eef1f4;';
  return '<tr>'
    + '<td style="padding:10px 0;color:#64748b;width:130px;' + borde + '">' + h(label) + '</td>'
    + '<td style="padding:10px 0;color:#0f172a;font-weight:600;' + borde + '">' + valor + '</td>'
    + '</tr>';
};

const filasHtml = [
  ['Correo', email ? '<a href="mailto:' + h(email) + '" style="color:#0f766e;text-decoration:none">' + h(email) + '</a>' : '<span style="color:#94a3b8">Sin correo: responder por WhatsApp</span>'],
  ['WhatsApp', h(telefono)],
  servicio ? ['Servicio', h(servicio)] : null,
  ...detalleFilas.map(([l, v]) => [l, h(v)]),
  web ? ['Pagina web', h(web)] : null,
  inicio ? ['Inicio', h(inicio)] : null,
  presupuesto ? ['Presupuesto', h(presupuesto)] : null,
].filter(Boolean);
const filas = filasHtml.map(([l, v], i) => fila(l, v, i === filasHtml.length - 1)).join('');

const html = ''
+ '<!DOCTYPE html><html><body style="margin:0;background:#f8f9fa;font-family:Arial,Helvetica,sans-serif;color:#1c2230">'
+ '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fa;padding:24px 0"><tr><td align="center">'
+ '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(15,23,42,.08)">'

+ '<tr><td style="background:#0f172a;padding:22px 28px"><table role="presentation" width="100%"><tr>'
+ '<td style="color:#ffffff;font-size:17px;font-weight:bold;letter-spacing:-.3px">Elemento Web</td>'
+ '<td align="right" style="color:#2dd4bf;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1.5px">' + (pico ? 'Pico de envios' : 'Nuevo lead') + '</td>'
+ '</tr></table></td></tr>'
+ '<tr><td style="height:4px;background:#2dd4bf"></td></tr>'

+ '<tr><td style="padding:28px">'
+ '<div style="font-size:13px;color:#64748b">Recibiste una nueva solicitud desde tu pagina web</div>'
+ '<div style="font-size:23px;font-weight:bold;color:#0f172a;margin:6px 0 22px;letter-spacing:-.4px">' + h(nombre) + (empresa ? ' &middot; ' + h(empresa) : '') + '</div>'
+ '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="font-size:14px;border-collapse:collapse">' + filas + '</table>'

+ (mensaje
    ? '<div style="margin:22px 0 8px;color:#64748b;font-size:13px">Mensaje</div>'
      + '<div style="background:#f8f9fa;border-left:3px solid #2dd4bf;border-radius:8px;padding:14px 16px;font-size:14px;line-height:1.6;color:#334155;white-space:pre-wrap">' + h(mensaje) + '</div>'
    : '')

+ '<table role="presentation" cellpadding="0" cellspacing="0" style="margin-top:26px"><tr>'
+ '<td style="padding-right:10px"><a href="https://wa.me/' + h(telefonoNormalizado) + '" style="display:inline-block;background:#0f766e;color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;padding:13px 24px;border-radius:999px">Responder por WhatsApp</a></td>'
+ (email ? '<td><a href="mailto:' + h(email) + '" style="display:inline-block;background:#f1f5f9;color:#0f172a;text-decoration:none;font-weight:bold;font-size:14px;padding:13px 24px;border-radius:999px">Responder por correo</a></td>' : '')
+ '</tr></table>'
+ '</td></tr>'

+ '<tr><td style="padding:16px 28px;background:#f8f9fa;border-top:1px solid #eef1f4;color:#94a3b8;font-size:12px">'
+ 'Enviado el ' + h(fecha) + (origen ? ' desde <a href="' + h(origen.startsWith('/') ? 'https://elementoweb.com' + origen : origen) + '" style="color:#64748b">' + h(origen) + '</a>' : '')
+ '</td></tr>'

+ '</table></td></tr></table></body></html>';

// La otra mitad del multipart. Un correo solo-HTML pesa como sospechoso en los
// filtros de spam, y ademas asi se lee en cualquier cliente.
const texto = (pico ? 'PICO DE ENVIOS - mas de 20 leads en la ultima hora' + nl + nl : '') + 'NUEVO LEAD - elementoweb.com' + nl + nl
  + 'Nombre:      ' + nombre + nl
  + (empresa     ? 'Empresa:     ' + empresa + nl : '')
  + 'Correo:      ' + (email || '(sin correo: responder por WhatsApp)') + nl
  + 'WhatsApp:    ' + telefono + nl
  + (servicio    ? 'Servicio:    ' + servicio + nl : '')
  + detalleFilas.map(([l, v]) => l + ': ' + v + nl).join('')
  + (web         ? 'Pagina web:  ' + web + nl : '')
  + (inicio      ? 'Inicio:      ' + inicio + nl : '')
  + (presupuesto ? 'Presupuesto: ' + presupuesto + nl : '')
  + (mensaje     ? nl + 'Mensaje:' + nl + mensaje + nl : '')
  + nl + 'Recibido el ' + fecha + (origen ? ' desde ' + origen : '') + '.' + nl;

return salida({
  asunto: (pico ? '[PICO] ' : '') + 'Nuevo lead web - ' + nombre + (empresa ? ' (' + empresa + ')' : ''),
  html,
  texto,
  correo_cliente: email,
  nombre,
  pico,
  // Lead ya limpio: el nodo del CRM lo toma de aqui y no vuelve a leer el cuerpo crudo.
  lead: {
    nombre, empresa, email, telefono, telefono_normalizado: telefonoNormalizado,
    servicio, servicio_clave: clave, presupuesto, mensaje, web, inicio, origen, intento,
    payload_version: limpio(b.payload_version, 4) === '2' ? '2' : '1',
    detalle,
  },
});
