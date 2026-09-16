// Nodo Code del flujo "Elemento Web - Leads Formulario Web": traduce el lead al
// idioma del CRM de WazaCRM.
//
// POR QUE EXISTE: hasta el 16-sep-2026 esta llamada la hacia el NAVEGADOR desde
// ContactForm.astro, con el clientId y el SECRETO del webhook escritos en
// src/lib/site.ts y, por tanto, en el HTML publico de elementoweb.com. El
// comentario que habia alli decia que el secreto "sirve para identificar al
// cliente, no es una credencial de administracion". Era falso: ese secreto es
// exactamente lo que autoriza a escribir en el CRM de ese cliente, y con el
// cualquiera podia inventar fichas en el embudo de la agencia.
//
// Un sitio estatico no puede guardar un secreto. Ahora la llamada sale de aqui,
// servidor a servidor, con el secreto en una credencial de n8n.
const b = $('Webhook').first().json.body || {};

const limpio = (v) => String(v == null ? '' : v).replace(/[\r\n]/g, ' ').trim();

// El formulario mandaba `location.pathname` al CRM y `location.href` a n8n. Se
// queda con la ruta, que es lo que ya esta escrito en las fichas de antes.
let origen = limpio(b.origen);
if (/^https?:\/\//i.test(origen)) {
  const corte = origen.indexOf('/', origen.indexOf('//') + 2);
  origen = corte === -1 ? '/' : origen.slice(corte);
}

return [{ json: {
  formulario: 'Cotización web',
  nombre: limpio(b.nombre),
  email: limpio(b.email),
  telefono: limpio(b.telefono),
  mensaje: String(b.mensaje || '').trim(),
  // Campos libres: el webhook del CRM los guarda en `extras` de la ficha. Los
  // nombres se conservan como los mandaba la pagina.
  empresa: limpio(b.empresa),
  servicio: limpio(b.servicio),
  presupuesto: limpio(b.presupuesto),
  origen: origen,
} }];
