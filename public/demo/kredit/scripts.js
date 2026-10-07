// Guiones de conversación simulada y sus reproductores (cancelables con AbortController).

export const SCRIPT_TABS = [
  { id: 'pago', label: 'Pago con plan' },
  { id: 'disputa', label: '“Ya pagué”' },
  { id: 'titular', label: 'No soy el titular' },
  { id: 'voz', label: 'Llamada de voz' },
];

// who: agent | client | event ; sys: lo que pasa en el sistema en ese paso
export const SCRIPTS = {
  pago: {
    accountId: 'K-10482',
    contact: 'María Fernanda Q.',
    intro: 'Cliente nivel B, 18 días de atraso. El asistente se identifica, verifica identidad, consulta el saldo y ofrece un plan dentro de la regla.',
    action: 'SCENARIO_PAGO',
    doneNote: 'El pago ya se registró. Puede repetir la conversación: el recuperado no vuelve a sumar.',
    steps: [
      { who: 'agent', text: 'Buenos días. Le escribe el asistente automatizado de Kredit. Esta conversación es con un sistema automatizado; puede pedir hablar con una persona cuando guste.', sys: 'Contacto del día 18 por WhatsApp · dentro del horario permitido · intento 1 de 2 del día.' },
      { who: 'agent', text: 'Para proteger su información, ¿me confirma los últimos 4 dígitos de su cédula?', sys: 'Antes de hablar de dinero, el asistente pide verificar identidad.' },
      { who: 'client', text: '8417' },
      { who: 'agent', text: 'Gracias, señora Quintero. Su identidad quedó verificada.', sys: 'Verificación de identidad: coincide con los últimos 4 dígitos registrados.', tone: 'ok' },
      { who: 'agent', text: 'Su préstamo tiene un saldo vencido de B/. 3,750.00, con 18 días de atraso.', sys: 'Saldo consultado en el sistema de Kredit. El asistente no inventa montos: los lee de la cuenta.' },
      { who: 'client', text: 'Ahorita no tengo todo junto. ¿Puedo pagar por partes?' },
      { who: 'agent', text: 'Sí. Le puedo ofrecer 3 cuotas de B/. 1,250.00: hoy, el 15 de noviembre y el 15 de diciembre. ¿Le funciona?', sys: 'RULE_CHECK', tone: 'ai' },
      { who: 'client', text: 'Sí, me funciona.' },
      { who: 'agent', kind: 'link', text: 'Listo. Este es su enlace de pago seguro para la primera cuota.', amount: 'B/. 1,250.00', sys: 'Enlace de pago generado por B/. 1,250.00 (monto validado contra el plan).' },
      { who: 'event', text: 'Pago recibido · B/. 1,250.00 · enlace de pago', sys: 'Pago conciliado automáticamente en 40 segundos. La cuenta sale de la secuencia y se cancela el mensaje programado. El recuperado del mes sube B/. 1,250.00.', action: true, tone: 'ok' },
      { who: 'agent', text: 'Recibimos su pago de B/. 1,250.00. Gracias, señora Quintero. Le recordaremos la próxima cuota 3 días antes. Si no desea recibir mensajes, responda BAJA.', sys: 'Próximo contacto: recordatorio el 12 nov. Nada más hasta entonces.' },
    ],
  },
  disputa: {
    accountId: 'K-10517',
    contact: 'Luis Alberto B.',
    intro: 'El cliente dice que ya pagó. El asistente busca el pago; al no encontrarlo, no insiste: pasa el caso a una persona y detiene los mensajes.',
    action: 'SCENARIO_DISPUTA',
    doneNote: 'El caso ya está en la bandeja. Repetir la conversación no crea un segundo caso.',
    steps: [
      { who: 'agent', text: 'Buenas tardes. Le escribe el asistente automatizado de Kredit. ¿Me confirma los últimos 4 dígitos de su cédula para continuar?', sys: 'Contacto del día 9 por WhatsApp · dentro del horario permitido.' },
      { who: 'client', text: '3052' },
      { who: 'agent', text: 'Gracias, señor Batista. Su cuenta muestra un saldo vencido de B/. 2,180.00.', sys: 'Identidad verificada. Saldo leído de la cuenta.', tone: 'ok' },
      { who: 'client', text: 'Yo ya pagué eso el viernes en el banco.' },
      { who: 'agent', text: 'Gracias por avisarnos. Déjeme revisar los pagos recibidos…', sys: 'Buscando el pago en enlace de pago, Yappy y archivo del banco de los últimos 7 días…' },
      { who: 'agent', text: 'Todavía no encuentro ese pago. Una persona del equipo revisará su caso hoy. Mientras tanto no le enviaremos más mensajes de cobro. Si tiene el comprobante, puede enviarlo por aquí.', sys: 'Sin coincidencia → caso C-2041 creado en la bandeja (“Dice que ya pagó”). Contactos automáticos pausados.', action: true, tone: 'warn' },
      { who: 'client', kind: 'file', text: 'comprobante-deposito.jpg' },
      { who: 'agent', text: 'Recibido. Lo adjunté a su caso. Gracias por su paciencia.', sys: 'Comprobante adjuntado al caso para la persona que lo revise.' },
    ],
  },
  titular: {
    accountId: 'K-10533',
    contact: '+507 6•••-••93',
    intro: 'Responde alguien que no es el titular. El asistente no revela ningún dato del préstamo, registra el hecho y deja de escribir a ese número.',
    action: 'SCENARIO_TITULAR',
    doneNote: 'El número ya está marcado. Repetir la conversación no duplica el registro.',
    steps: [
      { who: 'agent', text: 'Buenos días. Le escribe el asistente automatizado de Kredit. Busco comunicarme con la persona titular de este número para un asunto personal. ¿Me confirma los últimos 4 dígitos de su cédula?', sys: 'Primer mensaje sin nombre, sin monto y sin datos del préstamo.' },
      { who: 'client', text: 'No, ese no soy yo. Este número es mío desde hace un año.' },
      { who: 'agent', text: 'Disculpe la molestia. No compartiremos ninguna información y retiraremos este número de nuestros contactos.', sys: 'No se reveló nombre, monto ni datos del préstamo. Número marcado “no es el titular”; contactos a este número detenidos.', action: true, tone: 'ok' },
      { who: 'agent', text: 'Gracias por avisarnos. Que tenga buen día.', sys: 'La cuenta pasa a verificación de datos de contacto.' },
    ],
  },
};

// Llamada de voz: t en segundos de la grabación simulada
export const VOICE = {
  accountId: 'K-10560',
  contact: 'Ricardo Pinzón',
  duration: 62,
  action: 'SCENARIO_VOZ',
  doneNote: 'La promesa ya quedó registrada. Volver a reproducir no la duplica.',
  lines: [
    { t: 0, who: 'Asistente', text: 'Buenos días. Le llama el asistente automatizado de Kredit. Esta llamada es grabada para fines de calidad y registro.', sys: 'Aviso de grabación al inicio de la llamada.' },
    { t: 7, who: 'Asistente', text: '¿Hablo con el señor Ricardo Pinzón?' },
    { t: 10, who: 'Cliente', text: 'Sí, con él.' },
    { t: 12, who: 'Asistente', text: 'Para confirmar su identidad, ¿me indica los últimos 4 dígitos de su cédula?', sys: 'Verificación de identidad antes de hablar del saldo.' },
    { t: 17, who: 'Cliente', text: 'Dos, dos, cero, nueve.' },
    { t: 20, who: 'Asistente', text: 'Gracias, identidad confirmada. Su cuenta tiene B/. 1,940.00 vencidos, con 12 días de atraso.', sys: 'Identidad verificada. Saldo leído de la cuenta.', tone: 'ok' },
    { t: 28, who: 'Cliente', text: 'Sí, ya sé. Me pagan el 30. ¿Puedo pagar ese día?' },
    { t: 33, who: 'Asistente', text: 'Puedo registrar una promesa de pago por B/. 1,940.00 para el 30 de octubre. Le enviaré un recordatorio por WhatsApp el día anterior. ¿Está de acuerdo?', sys: 'Promesa de pago dentro de la regla (≤ 15 días). No requiere aprobación.', tone: 'ai' },
    { t: 44, who: 'Cliente', text: 'Sí, de acuerdo.' },
    { t: 46, who: 'Asistente', text: 'Queda registrado. Hasta entonces no le volveremos a llamar. Gracias, señor Pinzón, que tenga buen día.', sys: 'Promesa registrada. Llamadas canceladas hasta el 30 oct; recordatorio programado el 29 oct.', action: true, tone: 'ok' },
  ],
};

const sleep = (ms, signal) => new Promise((resolve, reject) => {
  if (signal?.aborted) return reject(new DOMException('abort', 'AbortError'));
  const t = setTimeout(resolve, ms);
  signal?.addEventListener('abort', () => { clearTimeout(t); reject(new DOMException('abort', 'AbortError')); }, { once: true });
});

function reducedMotion() {
  return window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// ---------- reproductor de chat ----------
// ui: { thread, sys, status, onAction(), sysText(step) , onState(idx,total,playing) }
export function chatPlayer(script, ui) {
  let idx = 0;
  let ctrl = null;
  let playing = false;
  const total = script.steps.length;

  function emit() { ui.onState(idx, total, playing); }

  function bubble(step) {
    const b = document.createElement('div');
    b.className = 'bubble ' + step.who + (step.kind ? ' ' + step.kind : '');
    if (step.who === 'event') {
      b.setAttribute('role', 'status');
      const i = document.createElement('span');
      i.className = 'ev-icon';
      i.setAttribute('aria-hidden', 'true');
      i.textContent = '✓';
      b.append(i, document.createTextNode(' ' + step.text));
    } else if (step.kind === 'link') {
      const p = document.createElement('p');
      p.textContent = step.text;
      const card = document.createElement('div');
      card.className = 'paylink';
      const s1 = document.createElement('strong');
      s1.textContent = 'Pagar ' + step.amount;
      const s2 = document.createElement('span');
      s2.textContent = 'pago seguro · enlace de un solo uso';
      card.append(s1, s2);
      b.append(p, card);
    } else if (step.kind === 'file') {
      const i = document.createElement('span');
      i.className = 'file-icon';
      i.setAttribute('aria-hidden', 'true');
      const t = document.createElement('span');
      t.textContent = step.text;
      b.append(i, t);
    } else {
      b.textContent = step.text;
    }
    const who = document.createElement('span');
    who.className = 'sr-only';
    who.textContent = step.who === 'agent' ? 'Asistente: ' : step.who === 'client' ? 'Cliente: ' : 'Sistema: ';
    b.prepend(who);
    return b;
  }

  async function run(i, signal, animate) {
    const step = script.steps[i];
    if (step.who === 'agent' && animate) {
      const typing = document.createElement('div');
      typing.className = 'bubble agent typing';
      typing.setAttribute('aria-label', 'escribiendo');
      typing.innerHTML = '<span></span><span></span><span></span>';
      ui.thread.appendChild(typing);
      ui.thread.scrollTop = ui.thread.scrollHeight;
      try { await sleep(600 + ((i * 137) % 300), signal); } finally { typing.remove(); }
    }
    ui.thread.appendChild(bubble(step));
    ui.thread.scrollTop = ui.thread.scrollHeight;
    if (step.action) ui.onAction();
    const sysText = ui.sysText(step);
    if (sysText) ui.addSys(sysText, step.tone, i);
  }

  async function play() {
    if (playing) return;
    if (idx >= total) reset();
    ctrl = new AbortController();
    playing = true; emit();
    const animate = !reducedMotion();
    try {
      while (idx < total) {
        await run(idx, ctrl.signal, animate);
        idx++; emit();
        if (idx < total) await sleep(animate ? 900 : 120, ctrl.signal);
      }
    } catch (e) { if (e.name !== 'AbortError') throw e; }
    playing = false; emit();
  }
  async function step() {
    if (playing) stop();
    if (idx >= total) return;
    const i = idx;
    idx++;
    ctrl = new AbortController();
    try { await run(i, ctrl.signal, false); } catch (e) { if (e.name !== 'AbortError') throw e; }
    emit();
  }
  function stop() { if (ctrl) ctrl.abort(); playing = false; emit(); }
  function reset() {
    stop();
    idx = 0;
    ui.thread.replaceChildren();
    ui.clearSys();
    emit();
  }
  return { play, step, stop, reset, get done() { return idx >= total; } };
}

// ---------- reproductor de voz (sin audio real: transcripción sincronizada) ----------
export function voicePlayer(ui) {
  let t = 0;
  let timer = null;
  let playing = false;
  let fired = false;
  const lines = VOICE.lines;

  function lineAt(time) {
    let k = -1;
    for (let i = 0; i < lines.length; i++) if (lines[i].t <= time) k = i;
    return k;
  }
  let shown = -1;
  function render() {
    const k = lineAt(t);
    if (k !== shown) {
      for (let i = shown + 1; i <= k; i++) {
        if (lines[i].sys) ui.addSys(lines[i].sys, lines[i].tone, i);
        if (lines[i].action && !fired) { fired = true; ui.onAction(); }
      }
      shown = Math.max(shown, k);
    }
    ui.onTime(t, k, playing);
  }
  function play() {
    if (playing) return;
    if (t >= VOICE.duration) reset();
    playing = true;
    const speed = reducedMotion() ? 6 : 1;
    timer = setInterval(() => {
      t = Math.min(VOICE.duration, t + 0.25 * speed);
      if (t >= VOICE.duration) { pause(); }
      render();
    }, 250);
    render();
  }
  function pause() { playing = false; if (timer) clearInterval(timer); timer = null; render(); }
  function next() {
    pause();
    const k = lineAt(t);
    if (k + 1 < lines.length) t = lines[k + 1].t; else t = VOICE.duration;
    render();
  }
  function seekLine(i) {
    pause();
    t = lines[i].t;
    render();
  }
  function reset() {
    pause();
    t = 0; shown = -1; fired = false;
    ui.clearSys();
    render();
  }
  return { play, pause, next, seekLine, reset, stop: pause, get playing() { return playing; } };
}
