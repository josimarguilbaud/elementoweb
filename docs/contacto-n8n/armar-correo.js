// Nodo Code del flujo "Elemento Web - Leads Formulario Web" (n8n).
//
// Vive en el repo a proposito: si solo existe dentro de n8n, nadie sabe que
// cambio ni cuando. Al editarlo aqui hay que volver a subirlo con
// scripts/subir-flujo-contacto.mjs.
//
// Campos que manda src/components/ContactForm.astro:
//   nombre, empresa, email, telefono, servicio, presupuesto, mensaje,
//   origen, fecha  +  botcheck (honeypot)

const b = $input.first().json.body || {};

// Trampa antibots. Se responde ok y se descarta: decirle "rechazado" a un bot
// solo le ensena a esquivarla la proxima vez. El formulario ya filtra en el
// navegador, pero un bot que llame al webhook directo se salta esa parte.
if (String(b.botcheck || '').trim() !== '') {
  return [{ json: { spam: true } }];
}

const h = (s) => String(s == null ? '' : s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;').replace(/'/g, '&#039;');

// Quita saltos de linea (inyeccion de cabeceras) y recorta.
const limpio = (v) => String(v == null ? '' : v).replace(/[\r\n]/g, ' ').trim();

const nombre      = limpio(b.nombre);
const empresa     = limpio(b.empresa);
const telefono    = limpio(b.telefono);
const servicio    = limpio(b.servicio);
const presupuesto = limpio(b.presupuesto);
const origen      = limpio(b.origen);
const emailBruto  = limpio(b.email);
const email       = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(emailBruto) ? emailBruto : '';
const mensaje     = String(b.mensaje || '').trim();

// El formulario del sitio exige nombre y correo. Sin correo no hay a quien
// responderle, asi que ese si es motivo de rechazo (a diferencia de
// Remodelaciones JG, que cierra por WhatsApp y ahi el correo es opcional).
if (!nombre || !email) {
  return [{ json: { invalido: true, motivo: 'faltan nombre o correo' } }];
}

const nl = String.fromCharCode(10);

// La fecha la manda el navegador del visitante, asi que puede venir vacia o
// con la zona horaria de otro pais. Se recalcula del lado del servidor.
const fecha = new Date().toLocaleString('es-PA', {
  timeZone: 'America/Panama', day: '2-digit', month: '2-digit', year: 'numeric',
  hour: '2-digit', minute: '2-digit', hour12: true,
});

const soloDigitos = telefono.replace(/\D/g, '');
// Los telefonos panamenos se escriben sin prefijo; para wa.me hace falta el 507.
const waNumero = soloDigitos.length === 8 ? '507' + soloDigitos : soloDigitos;

const fila = (label, valor, ultima) => {
  const borde = ultima ? '' : 'border-bottom:1px solid #eef1f4;';
  return '<tr>'
    + '<td style="padding:10px 0;color:#64748b;width:130px;' + borde + '">' + h(label) + '</td>'
    + '<td style="padding:10px 0;color:#0f172a;font-weight:600;' + borde + '">' + valor + '</td>'
    + '</tr>';
};

const filas = fila('Correo', '<a href="mailto:' + h(email) + '" style="color:#0f766e;text-decoration:none">' + h(email) + '</a>')
  + (telefono    ? fila('Telefono', h(telefono)) : '')
  + (servicio    ? fila('Servicio', h(servicio)) : '')
  + (presupuesto ? fila('Presupuesto', h(presupuesto), true) : '');

const titulo = nombre + (empresa ? ' &middot; ' + empresa : '');

const html = ''
+ '<!DOCTYPE html><html><body style="margin:0;background:#f8f9fa;font-family:Arial,Helvetica,sans-serif;color:#1c2230">'
+ '<table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f8f9fa;padding:24px 0"><tr><td align="center">'
+ '<table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:16px;overflow:hidden;box-shadow:0 10px 40px rgba(15,23,42,.08)">'

+ '<tr><td style="background:#0f172a;padding:22px 28px"><table role="presentation" width="100%"><tr>'
+ '<td style="color:#ffffff;font-size:17px;font-weight:bold;letter-spacing:-.3px">Elemento Web</td>'
+ '<td align="right" style="color:#2dd4bf;font-size:11px;font-weight:bold;text-transform:uppercase;letter-spacing:1.5px">Nuevo lead</td>'
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
+ (waNumero
    ? '<td style="padding-right:10px"><a href="https://wa.me/' + h(waNumero) + '" style="display:inline-block;background:#0f766e;color:#ffffff;text-decoration:none;font-weight:bold;font-size:14px;padding:13px 24px;border-radius:999px">Responder por WhatsApp</a></td>'
    : '')
+ '<td><a href="mailto:' + h(email) + '" style="display:inline-block;background:#f1f5f9;color:#0f172a;text-decoration:none;font-weight:bold;font-size:14px;padding:13px 24px;border-radius:999px">Responder por correo</a></td>'
+ '</tr></table>'
+ '</td></tr>'

+ '<tr><td style="padding:16px 28px;background:#f8f9fa;border-top:1px solid #eef1f4;color:#94a3b8;font-size:12px">'
+ 'Enviado el ' + h(fecha) + (origen ? ' desde <a href="' + h(origen) + '" style="color:#64748b">' + h(origen) + '</a>' : '')
+ '</td></tr>'

+ '</table></td></tr></table></body></html>';

// La otra mitad del multipart. Un correo solo-HTML pesa como sospechoso en los
// filtros de spam, y ademas asi se lee en cualquier cliente.
const texto = 'NUEVO LEAD - elementoweb.com' + nl + nl
  + 'Nombre:      ' + nombre + nl
  + (empresa     ? 'Empresa:     ' + empresa + nl : '')
  + 'Correo:      ' + email + nl
  + (telefono    ? 'Telefono:    ' + telefono + nl : '')
  + (servicio    ? 'Servicio:    ' + servicio + nl : '')
  + (presupuesto ? 'Presupuesto: ' + presupuesto + nl : '')
  + (mensaje     ? nl + 'Mensaje:' + nl + mensaje + nl : '')
  + nl + 'Recibido el ' + fecha + (origen ? ' desde ' + origen : '') + '.' + nl;

return [{ json: {
  spam: false,
  invalido: false,
  asunto: 'Nuevo lead web - ' + nombre + (empresa ? ' (' + empresa + ')' : ''),
  html,
  texto,
  correo_cliente: email,
  nombre,
} }];
