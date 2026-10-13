// Nodo Code del flujo "Elemento Web - Leads Formulario Web": traduce el lead al
// idioma del CRM de WazaCRM. Contrato v2 (D32).
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
//
// El lead llega ya limpio desde "Armar correo" (topes, lista blanca y origen
// validados): este nodo no vuelve a leer el cuerpo crudo del webhook.
const l = $input.first().json.lead || {};

// El formulario mandaba `location.pathname` al CRM y `location.href` a n8n. Se
// queda con la ruta, que es lo que ya esta escrito en las fichas de antes.
let origen = l.origen || '';
if (/^https?:\/\//i.test(origen)) {
  const corte = origen.indexOf('/', origen.indexOf('//') + 2);
  origen = corte === -1 ? '/' : origen.slice(corte);
}

const salida = {
  formulario: 'Cotización web',
  nombre: l.nombre || '',
  telefono: l.telefono || '',
  mensaje: l.mensaje || '',
  // Campos libres: el webhook del CRM los guarda en `extras` de la ficha. Los
  // nombres se conservan como los mandaba la pagina (v1) y se suman los de v2.
  empresa: l.empresa || '',
  servicio: l.servicio || '',
  presupuesto: l.presupuesto || '',
  origen,
  servicio_clave: l.servicio_clave || '',
  intento: l.intento || '',
  payload_version: l.payload_version || '1',
  telefono_normalizado: l.telefono_normalizado || '',
  web: l.web || '',
  inicio: l.inicio || '',
};
// El correo es opcional (D30): sin correo no se manda la clave, para no guardar una cadena vacia como si fuera un dato.
if (l.email) salida.email = l.email;
// `detalle` viaja aplanado como detalle_<campo>, cadenas de hasta 300 caracteres.
for (const [campo, valor] of Object.entries(l.detalle || {})) salida['detalle_' + campo] = valor;

return [{ json: salida }];
