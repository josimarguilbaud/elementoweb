/* Lógica de ServiceForm (D22, D30, D31). Se carga bajo demanda desde el componente (isla diferida, D40).
   Estados: inactivo, inválido, enviando, éxito, fallo de red o de n8n, trampa (honeypot) y cambio de servicio.
   El éxito y `generate_lead` solo cuentan cuando el servidor responde 2xx Y {"ok": true} (D30). El reintento usa el
   MISMO id de intento, así que n8n puede reconocer la solicitud y no duplicarla (D31). */

const TOPE_MS = 15000;
const q = <T extends Element>(r: ParentNode, s: string): T => r.querySelector(s) as T;
const esDigito = (s: string) => s.replace(/\D/g, '').length;
const uuid = () => (typeof crypto !== 'undefined' && 'randomUUID' in crypto ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(16).slice(2)}`);

export function iniciar(raiz: HTMLElement): void {
  const form = q<HTMLFormElement>(raiz, '[data-ew="form"]');
  if (!form || form.dataset.ewListo) return;
  form.dataset.ewListo = '1';

  const endpoint = raiz.dataset.endpoint || '';
  const waBase = raiz.dataset.waBase || '';
  const fichas = q<HTMLFieldSetElement>(raiz, '[data-ew="fichas"]');
  const actual = q<HTMLElement>(raiz, '[data-ew="actual"]');
  const nombreServicio = q<HTMLElement>(raiz, '[data-ew="servicio-actual"]');
  const cambiar = q<HTMLButtonElement>(raiz, '[data-ew="cambiar"]');
  const titulo = q<HTMLElement>(raiz, '[data-ew="titulo"]');
  const aviso = q<HTMLElement>(raiz, '[data-ew="aviso"]');
  const presupuesto = q<HTMLElement>(raiz, '[data-ew="presupuesto"]');
  const resumen = q<HTMLElement>(raiz, '[data-ew="resumen"]');
  const fallo = q<HTMLElement>(raiz, '[data-ew="fallo"]');
  const exito = q<HTMLElement>(raiz, '[data-ew="exito"]');
  const boton = q<HTMLButtonElement>(raiz, '[data-ew="enviar"]');
  const radios = [...raiz.querySelectorAll<HTMLInputElement>('input[name="servicio_clave"]')];
  const grupos = [...raiz.querySelectorAll<HTMLFieldSetElement>('fieldset[data-servicio]')];
  const nombre = q<HTMLInputElement>(form, '[name="nombre"]');
  const telefono = q<HTMLInputElement>(form, '[name="telefono"]');
  const email = q<HTMLInputElement>(form, '[name="email"]');

  // D31: un solo id por carga de página; cada reintento lo repite.
  const intento = uuid();
  let enviando = false;
  let empezado = false;

  const claveActiva = () => radios.find((r) => r.checked)?.value || 'definir';
  const textoServicio = () => radios.find((r) => r.checked)?.dataset.servicioTexto || '';
  const etiquetaDe = (clave: string) => radios.find((r) => r.value === clave)?.closest('label')?.textContent?.trim() || clave;
  const mensajeWa = () => `${waBase}${encodeURIComponent(`Hola, me interesa ${etiquetaDe(claveActiva()).toLowerCase()}.`)}`;
  const tieneDatos = (g: HTMLFieldSetElement) => [...g.querySelectorAll<HTMLInputElement | HTMLSelectElement>('input,select')].some((i) => i.value.trim());

  function activar(clave: string, avisar: boolean): void {
    // El grupo que se deja conserva lo escrito (sigue en el DOM, solo oculto y deshabilitado).
    const dejando = grupos.find((g) => !g.hidden);
    const conDatos = avisar && !!dejando && dejando.dataset.servicio !== clave && tieneDatos(dejando);
    for (const g of grupos) { const on = g.dataset.servicio === clave; g.hidden = !on; g.disabled = !on; }
    nombreServicio.textContent = etiquetaDe(clave);
    titulo.textContent = TITULOS[clave] || titulo.textContent;
    boton.textContent = BOTONES[clave] || boton.textContent;
    const quierePresupuesto = PRESUPUESTO[clave] ?? true;
    presupuesto.hidden = !quierePresupuesto;
    q<HTMLSelectElement>(presupuesto, 'select').disabled = !quierePresupuesto;
    for (const a of raiz.querySelectorAll<HTMLAnchorElement>('[data-ew="fallo-wa"],[data-ew="exito-wa"]')) a.href = mensajeWa();
    // Cambio de servicio con respuestas escritas: se conservan (siguen en el DOM) y se avisa en una región viva.
    aviso.textContent = conDatos ? 'Guardamos tus respuestas por si vuelves a ese servicio.' : '';
  }

  // Textos por servicio, leídos del HTML para no duplicar el esquema en JS.
  const TITULOS: Record<string, string> = {};
  const BOTONES: Record<string, string> = {};
  const PRESUPUESTO: Record<string, boolean> = {};
  try {
    const datos = JSON.parse(raiz.dataset.servicios || '[]') as { clave: string; titulo: string; boton: string; presupuesto: boolean }[];
    for (const d of datos) { TITULOS[d.clave] = d.titulo; BOTONES[d.clave] = d.boton; PRESUPUESTO[d.clave] = d.presupuesto; }
  } catch { /* sin datos: se conservan los textos del servicio inicial */ }

  for (const r of radios) r.addEventListener('change', () => { if (r.checked) activar(r.value, true); });
  cambiar?.addEventListener('click', () => {
    const abrir = fichas.hidden;
    fichas.hidden = !abrir;
    cambiar.setAttribute('aria-expanded', String(abrir));
    if (abrir) (radios.find((r) => r.checked) || radios[0])?.focus();
  });
  activar(claveActiva(), false);

  // Medición: form_start una vez, al primer foco del nombre.
  nombre.addEventListener('focus', () => {
    if (empezado) return;
    empezado = true;
    window.dispatchEvent(new CustomEvent('cf:start', { detail: { servicio: claveActiva() } }));
  });

  const err = (el: HTMLElement, texto: string) => {
    const p = document.getElementById(`${el.id}-err`) || document.getElementById(`ew-f-err-${(el as HTMLInputElement).name}`);
    el.setAttribute('aria-invalid', 'true');
    if (p) { p.textContent = texto; p.hidden = false; }
  };
  const limpiar = (el: HTMLElement) => {
    el.removeAttribute('aria-invalid');
    const p = document.getElementById(`${el.id}-err`) || document.getElementById(`ew-f-err-${(el as HTMLInputElement).name}`);
    if (p) { p.textContent = ''; p.hidden = true; }
  };
  for (const el of form.querySelectorAll<HTMLElement>('input,select,textarea')) {
    el.addEventListener('input', () => limpiar(el));
  }

  function validar(): HTMLInputElement[] {
    const malos: HTMLInputElement[] = [];
    for (const el of [nombre, telefono, email]) limpiar(el);
    if (nombre.value.trim().length < 2) { err(nombre, 'Escribe tu nombre.'); malos.push(nombre); }
    if (esDigito(telefono.value) < 8) { err(telefono, 'Escribe tu WhatsApp con al menos 8 dígitos. Si escribes desde Miami, empieza con +1.'); malos.push(telefono); }
    if (email.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) { err(email, 'Escribe un correo válido, por ejemplo nombre@empresa.com, o déjalo vacío.'); malos.push(email); }
    for (const el of form.querySelectorAll<HTMLInputElement>('fieldset[data-servicio]:not([disabled]) input[data-obligatorio]')) {
      limpiar(el);
      if (!el.value.trim()) { err(el, 'Escribe la dirección de tu página, por ejemplo www.tuempresa.com.'); malos.push(el); }
    }
    return malos;
  }

  const construir = () => {
    const fd = new FormData(form);
    const t = (k: string) => String(fd.get(k) || '').trim();
    const detalle: Record<string, string> = {};
    for (const [k, v] of fd.entries()) if (k.startsWith('detalle_') && String(v).trim()) detalle[k] = String(v).trim();
    return {
      payload_version: '2',
      nombre: t('nombre'), empresa: t('empresa'), email: t('email'), telefono: t('telefono'),
      servicio: textoServicio(), servicio_clave: claveActiva(),
      presupuesto: presupuesto.hidden ? '' : t('presupuesto'),
      mensaje: t('mensaje'),
      botcheck: '',
      intento,
      origen: location.origin + location.pathname,
      fecha: new Date().toISOString(),
      ...detalle,
    };
  };

  const mostrarExito = () => {
    form.hidden = true;
    fallo.hidden = true;
    exito.hidden = false;
    exito.focus();
  };

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (enviando) return;
    resumen.hidden = true;
    fallo.hidden = true;
    const malos = validar();
    if (malos.length) {
      window.dispatchEvent(new CustomEvent('cf:error', { detail: { fields: malos.map((m) => m.name.replace(/^detalle_/, '')), servicio: claveActiva() } }));
      resumen.textContent = malos.length === 1 ? 'Revisa el campo marcado.' : `Revisa los ${malos.length} campos marcados.`;
      resumen.hidden = false;
      malos[0].focus();
      return;
    }
    // Trampa antibots: si el campo oculto viene lleno, se simula el éxito y no se envía nada.
    if (q<HTMLInputElement>(form, '[name="botcheck"]').checked) { mostrarExito(); return; }
    if (!endpoint) { fallo.hidden = false; return; }

    enviando = true;
    boton.disabled = true;
    const etiqueta = boton.textContent;
    boton.textContent = 'Enviando…';
    const ctrl = new AbortController();
    const reloj = setTimeout(() => ctrl.abort(), TOPE_MS);
    try {
      const res = await fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(construir()), signal: ctrl.signal });
      const cuerpo = res.ok ? await res.json().catch(() => null) : null;
      if (res.ok && cuerpo && cuerpo.ok === true) {
        mostrarExito();
        window.dispatchEvent(new CustomEvent('cf:lead', { detail: { id: intento, servicio: claveActiva() } }));
      } else {
        fallo.hidden = false;
      }
    } catch {
      fallo.hidden = false;
    } finally {
      clearTimeout(reloj);
      enviando = false;
      boton.disabled = false;
      boton.textContent = etiqueta;
    }
  });
}
